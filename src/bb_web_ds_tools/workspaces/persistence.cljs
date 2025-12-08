(ns bb-web-ds-tools.workspaces.persistence
  (:require ["@sqlite.org/sqlite-wasm" :as sqlite3InitModule]
            [re-frame.core :as rf]
            [datascript.core :as d]
            [cognitect.transit :as t]
            [bb-web-ds-tools.workspaces.core :as ws]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defonce sqlite-lib (atom nil))
(defonce sql-db (atom nil))

;; --- Transit Helpers ---

(defn transit-encode [x]
  (let [w (t/writer :json)]
    (t/write w x)))

(defn transit-decode [x]
  (let [r (t/reader :json)]
    (t/read r x)))

;; --- Persistence Logic --

(defn create-tables!
  "Creates the necessary tables in the SQLite database.

  Returns:
    nil: Executes SQL."
  []
  (when-let [^js db @sql-db]
    (.exec db "CREATE TABLE IF NOT EXISTS workspaces (id TEXT PRIMARY KEY, name TEXT, created_at INTEGER, updated_at INTEGER);")
    (.exec db "CREATE TABLE IF NOT EXISTS inputs (id TEXT PRIMARY KEY, workspace_id TEXT, type TEXT, name TEXT, content TEXT, metadata TEXT, updated_at INTEGER);")
    (.exec db "CREATE TABLE IF NOT EXISTS datasets (id TEXT PRIMARY KEY, name TEXT, content TEXT, created_at INTEGER);")))

(defn persist-all!
  "Dumps the current DataScript state to the SQLite database.

  Returns:
    nil: Executes SQL transactions."
  []
  ;; Dump current DataScript state to SQL
  (when-let [^js db @sql-db]
    (create-tables!)
    (let [workspaces (d/q '[:find ?id ?name ?created ?updated
                            :where
                            [?e :workspace/id ?id]
                            [?e :workspace/name ?name]
                            [?e :workspace/created-at ?created]
                            [?e :workspace/updated-at ?updated]]
                          @ws/conn)
          inputs (d/q '[:find ?id ?ws-id ?type ?name ?content ?meta ?updated
                        :where
                        [?e :input/id ?id]
                        [?e :input/workspace ?ws-ref]
                        [?ws-ref :workspace/id ?ws-id]
                        [?e :input/type ?type]
                        [?e :input/name ?name]
                        [?e :input/content ?content]
                        [?e :input/metadata ?meta]
                        [?e :input/updated-at ?updated]]
                      @ws/conn)]
      (.exec db "BEGIN TRANSACTION;")
      (.exec db "DELETE FROM workspaces;")
      (.exec db "DELETE FROM inputs;")

      (doseq [[id name ^js created ^js updated] workspaces]
        (.exec db (clj->js {:sql "INSERT INTO workspaces VALUES (?, ?, ?, ?)"
                            :bind [id name (.getTime created) (.getTime updated)]})))

      (doseq [[id ws-id type name content meta ^js updated] inputs]
        (.exec db (clj->js {:sql "INSERT INTO inputs VALUES (?, ?, ?, ?, ?, ?, ?)"
                            :bind [id ws-id (name type) name content (pr-str meta) (.getTime updated)]})))

      (.exec db "COMMIT;")
      (println "Persisted to in-memory SQL DB."))))

(defn persist-datasets!
  "Persists user datasets to the SQLite DB using Transit encoding.

   Args:
     datasets-map (map): Map of id -> dataset."
  [datasets-map]
  (when-let [^js db @sql-db]
    (create-tables!)
    (.exec db "BEGIN TRANSACTION;")
    (.exec db "DELETE FROM datasets;")
    (doseq [[id dataset] datasets-map]
      (let [encoded (transit-encode dataset)
            created-at (js/Date.now)]
        (.exec db (clj->js {:sql "INSERT INTO datasets VALUES (?, ?, ?, ?)"
                            :bind [id (:name dataset) encoded created-at]}))))
    (.exec db "COMMIT;")
    (println "Datasets persisted to DB.")))

(defn load-datasets-from-db
  "Loads datasets from the SQLite DB.

   Returns:
     map: Map of id -> dataset."
  []
  (when-let [^js db @sql-db]
    (let [res (atom {})
          rows (.exec db (clj->js {:sql "SELECT id, content FROM datasets"
                                   :rowMode "array"
                                   :returnValue "resultRows"}))]
      (doseq [[id content] rows]
        (let [dataset (transit-decode content)]
          (swap! res assoc id dataset)))
      @res)))

(defn export-db
  "Exports the SQLite database as a binary blob.

  Returns:
    js/Blob: The database file blob."
  []
  (when-let [^js db @sql-db]
    (persist-all!) ;; Persist workspaces implicitly

    (let [capi (.. ^js @sqlite-lib -capi)
          p-db (.-pointer db)
          bytes (.sqlite3_js_db_export ^js capi p-db)
          blob (new js/Blob (clj->js [bytes]) (clj->js {:type "application/x-sqlite3"}))]
      blob)))

;; --- Init ---

(defn init-db!
  "Initializes the SQLite database."
  []
  (go
    (try
      (let [^js init-fn (if (and (exists? sqlite3InitModule) (.-default sqlite3InitModule))
                          (.-default sqlite3InitModule)
                          sqlite3InitModule)
            ^js sqlite3 (<p! (init-fn (clj->js {:locateFile (fn [file] (str "js/libs/" file))
                                                :print js/console.log
                                                :printErr js/console.error})))]
        (reset! sqlite-lib sqlite3)
        (let [^js oo1 (.-oo1 ^js sqlite3)
              ^js JsStorageDb (.-JsStorageDb ^js oo1)
              db-mode (if JsStorageDb "local" "memory")
              ^js db (if JsStorageDb
                       (new JsStorageDb "local") ;; Uses localStorage
                       (new (.-DB oo1) ":memory:" "ct"))]
           (reset! sql-db db)
           (println (str "SQLite3 initialized in " db-mode " mode."))))
      (catch :default e
        (js/console.error "Failed to initialize SQLite3" e)))))

;; --- Events ---

(rf/reg-event-fx
 ::init-persistence
 (fn [_ _]
   (init-db!)
   {}))

(rf/reg-event-fx
 ::save-datasets
 (fn [{:keys [db]} _]
   (let [datasets (get-in db [:user-input :datasets :items])]
     (persist-datasets! datasets)
     (js/console.log "Datasets saved to DB."))
   {}))

(rf/reg-event-fx
 ::load-datasets
 (fn [{:keys [db]} _]
   (let [datasets (load-datasets-from-db)]
     {:db (assoc-in db [:user-input :datasets :items] datasets)
      :dispatch [::datasets-loaded]}) ;; Notify UI
   ))

(rf/reg-event-db
 ::datasets-loaded
 (fn [db _]
   (println "Datasets loaded from DB.")
   db))

(rf/reg-event-fx
 ::export-workspaces
 (fn [{:keys [db]} _]
   ;; Save datasets first
   (persist-datasets! (get-in db [:user-input :datasets :items]))
   (when-let [blob (export-db)]
     (let [url (js/URL.createObjectURL blob)
           a (.createElement js/document "a")]
       (set! (.-href a) url)
       (set! (.-download a) "bb-web-ds-tools.sqlite")
       (.click a)
       (js/URL.revokeObjectURL url)))
   {}))
