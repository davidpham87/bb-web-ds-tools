(ns bb-web-ds-tools.workspaces.persistence-fx
  (:require [re-frame.core :as rf]
            [datascript.core :as d]
            [cognitect.transit :as t]
            [bb-web-ds-tools.workspaces.core :as ws]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [clojure.string :as str]))

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
  "Creates the necessary tables in the SQLite database."
  [db]
  (let [sql (str/join "\n"
                      ["CREATE TABLE IF NOT EXISTS workspaces (id TEXT PRIMARY KEY, name TEXT, created_at INTEGER, updated_at INTEGER);"
                       "CREATE TABLE IF NOT EXISTS inputs (id TEXT PRIMARY KEY, workspace_id TEXT, type TEXT, name TEXT, content TEXT, metadata TEXT, updated_at INTEGER);"
                       "CREATE TABLE IF NOT EXISTS datasets (id TEXT PRIMARY KEY, name TEXT, content TEXT, created_at INTEGER);"])]
    (.exec db sql)))

(defn persist-all!
  "Dumps the current DataScript state to the SQLite database.
   Returns: nil"
  [db]
  (create-tables! db)
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
                    @ws/conn)

        ;; Prepare SQL statements
        ws-inserts (map (fn [[id name ^js created ^js updated]]
                          (str "INSERT INTO workspaces VALUES ("
                               "'" id "', "
                               "'" (str/replace name "'" "''") "', "
                               (.getTime created) ", "
                               (.getTime updated) ");"))
                        workspaces)
        input-inserts (map (fn [[id ws-id type name content meta ^js updated]]
                             (str "INSERT INTO inputs VALUES ("
                                  "'" id "', "
                                  "'" ws-id "', "
                                  "'" (name type) "', "
                                  "'" (str/replace name "'" "''") "', "
                                  "'" (str/replace content "'" "''") "', "
                                  "'" (str/replace (pr-str meta) "'" "''") "', "
                                  (.getTime updated) ");"))
                           inputs)

        all-sql (str/join "\n"
                          (concat ["BEGIN TRANSACTION;"
                                   "DELETE FROM workspaces;"
                                   "DELETE FROM inputs;"]
                                  ws-inserts
                                  input-inserts
                                  ["COMMIT;"]))]
    (.exec db all-sql)
    (println "Persisted to in-memory SQL DB.")))

(defn persist-datasets!
  "Persists user datasets to the SQLite DB using Transit encoding."
  [db datasets-map]
  (create-tables! db)
  (let [ds-inserts (map (fn [[id dataset]]
                          (let [encoded (transit-encode dataset)
                                created-at (js/Date.now)]
                            (str "INSERT INTO datasets VALUES ("
                                 "'" id "', "
                                 "'" (str/replace (:name dataset) "'" "''") "', "
                                 "'" (str/replace encoded "'" "''") "', "
                                 created-at ");")))
                        datasets-map)
        all-sql (str/join "\n"
                          (concat ["BEGIN TRANSACTION;"
                                   "DELETE FROM datasets;"]
                                  ds-inserts
                                  ["COMMIT;"]))]
    (.exec db all-sql)
    (println "Datasets persisted to DB.")))

(defn load-datasets-from-db
  "Loads datasets from the SQLite DB."
  [db]
  (let [res (atom {})
        rows (.exec db (clj->js {:sql "SELECT id, content FROM datasets"
                                 :rowMode "array"
                                 :returnValue "resultRows"}))]
    (doseq [[id content] rows]
      (let [dataset (transit-decode content)]
        (swap! res assoc id dataset)))
    @res))

(defn export-db
  "Exports the SQLite database as a binary blob."
  [db]
  (persist-all! db) ;; Persist workspaces implicitly
  (let [capi (.. ^js @sqlite-lib -capi)
        p-db (.-pointer db)
        bytes (.sqlite3_js_db_export ^js capi p-db)
        blob (new js/Blob (clj->js [bytes]) (clj->js {:type "application/x-sqlite3"}))]
    blob))

;; --- Init ---

(defn init-db!
  "Initializes the SQLite database."
  []
  (go
    (try
      (let [sqlite3-init (if (and (exists? js/window) (aget js/window "sqlite3InitModule"))
                           (aget js/window "sqlite3InitModule")
                           (try (js/require "@sqlite.org/sqlite-wasm") (catch :default _ nil)))
            init-fn (if (and sqlite3-init (.-default sqlite3InitModule))
                      (.-default sqlite3InitModule)
                      sqlite3InitModule)
             ;; In browser context, we need to load from window or module
            ^js sqlite3 (<p! (init-fn (clj->js {:locateFile (fn [file] (str "js/libs/" file))
                                                :print js/console.log
                                                :printErr js/console.error})))]
        (reset! sqlite-lib sqlite3)
        (let [^js oo1 (.-oo1 ^js sqlite3)
              ^js JsStorageDb (.-JsStorageDb ^js oo1)
              db-mode (if JsStorageDb "local" "memory")
              ^js db (if JsStorageDb
                       (new JsStorageDb "local")
                       (new (.-DB oo1) ":memory:" "ct"))]
           (reset! sql-db db)
           (println (str "SQLite3 initialized in " db-mode " mode."))))
      (catch :default e
        (js/console.error "Failed to initialize SQLite3" e)))))

;; --- Effects Registration ---

(rf/reg-fx
 :persistence/init
 (fn [_]
   (init-db!)))

(rf/reg-fx
 :persistence/save-datasets
 (fn [datasets]
   (when-let [^js db @sql-db]
     (persist-datasets! db datasets))))

(rf/reg-fx
 :persistence/load-datasets
 (fn [_]
   (when-let [^js db @sql-db]
     (let [datasets (load-datasets-from-db db)]
       (rf/dispatch [:bb-web-ds-tools.workspaces.persistence/datasets-loaded datasets])))))

(rf/reg-fx
 :persistence/export
 (fn [datasets]
   (when-let [^js db @sql-db]
     (persist-datasets! db datasets)
     (when-let [blob (export-db db)]
       (let [url (js/URL.createObjectURL blob)
             a (.createElement js/document "a")]
         (set! (.-href a) url)
         (set! (.-download a) "bb-web-ds-tools.sqlite")
         (.click a)
         (js/URL.revokeObjectURL url))))))
