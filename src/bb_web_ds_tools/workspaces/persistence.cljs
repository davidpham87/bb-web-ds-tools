(ns bb-web-ds-tools.workspaces.persistence
  (:require ["@sqlite.org/sqlite-wasm" :as sqlite3InitModule]
            [re-frame.core :as rf]
            [datascript.core :as d]
            [bb-web-ds-tools.workspaces.core :as ws]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defonce sqlite-lib (atom nil))
(defonce sql-db (atom nil))

(defn init-db! []
  (go
    (try
      (let [init-fn (if (and (exists? sqlite3InitModule) (.-default sqlite3InitModule))
                      (.-default sqlite3InitModule)
                      sqlite3InitModule)
            sqlite3 (<p! (init-fn (clj->js {:locateFile (fn [file] (str "js/libs/" file))
                                            :print js/console.log
                                            :printErr js/console.error})))]
        (reset! sqlite-lib sqlite3)
        (let [DB (.. sqlite3 -oo1 -DB)
              db (new DB ":memory:" "ct")]
           (reset! sql-db db))
        (println "SQLite3 initialized"))
      (catch :default e
        (js/console.error "Failed to initialize SQLite3" e)))))

;; --- Persistence Logic ---

(defn create-tables! []
  (when-let [^js db @sql-db]
    (.exec db "CREATE TABLE IF NOT EXISTS workspaces (id TEXT PRIMARY KEY, name TEXT, created_at INTEGER, updated_at INTEGER);")
    (.exec db "CREATE TABLE IF NOT EXISTS inputs (id TEXT PRIMARY KEY, workspace_id TEXT, type TEXT, name TEXT, content TEXT, metadata TEXT, updated_at INTEGER);")))

(defn persist-all! []
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

      (doseq [[id name created updated] workspaces]
        (.exec db (clj->js {:sql "INSERT INTO workspaces VALUES (?, ?, ?, ?)"
                            :bind [id name (.getTime created) (.getTime updated)]})))

      (doseq [[id ws-id type name content meta updated] inputs]
        (.exec db (clj->js {:sql "INSERT INTO inputs VALUES (?, ?, ?, ?, ?, ?, ?)"
                            :bind [id ws-id (name type) name content (pr-str meta) (.getTime updated)]})))

      (.exec db "COMMIT;")
      (println "Persisted to in-memory SQL DB."))))

(defn export-db []
  (when-let [^js db @sql-db]
    (persist-all!)
    (let [capi (.. @sqlite-lib -capi)
          p-db (.-pointer db)
          bytes (.sqlite3_js_db_export capi p-db)
          blob (new js/Blob (clj->js [bytes]) (clj->js {:type "application/x-sqlite3"}))]
      blob)))

;; --- Events ---

(rf/reg-event-fx
 ::init-persistence
 (fn [_ _]
   (init-db!)
   {}))

(rf/reg-event-fx
 ::export-workspaces
 (fn [_ _]
   (when-let [blob (export-db)]
     (let [url (js/URL.createObjectURL blob)
           a (.createElement js/document "a")]
       (set! (.-href a) url)
       (set! (.-download a) "workspaces.sqlite")
       (.click a)
       (js/URL.revokeObjectURL url)))
   {}))
