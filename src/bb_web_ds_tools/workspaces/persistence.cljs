(ns bb-web-ds-tools.workspaces.persistence
  (:require ["sql.js" :as initSqlJs]
            [re-frame.core :as rf]
            [datascript.core :as d]
            [bb-web-ds-tools.workspaces.core :as ws]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defonce sql-db (atom nil))

(defn init-db! []
  (go
    (try
      (let [SQL (<p! (initSqlJs (clj->js {:locateFile (fn [file] (str "js/libs/" file))})))]
        (reset! sql-db (new (.-Database SQL)))
        (println "SQL.js initialized"))
      (catch :default e
        (js/console.error "Failed to initialize SQL.js" e)))))

;; --- Persistence Logic ---

(defn create-tables! []
  (when-let [^js db @sql-db]
    (.run db "CREATE TABLE IF NOT EXISTS workspaces (id TEXT PRIMARY KEY, name TEXT, created_at INTEGER, updated_at INTEGER);")
    (.run db "CREATE TABLE IF NOT EXISTS inputs (id TEXT PRIMARY KEY, workspace_id TEXT, type TEXT, name TEXT, content TEXT, metadata TEXT, updated_at INTEGER);")))

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
      (.run db "BEGIN TRANSACTION;")
      (.run db "DELETE FROM workspaces;")
      (.run db "DELETE FROM inputs;")

      (doseq [[id name created updated] workspaces]
        (.run db "INSERT INTO workspaces VALUES (?, ?, ?, ?)"
              (clj->js [id name (.getTime created) (.getTime updated)])))

      (doseq [[id ws-id type name content meta updated] inputs]
        (.run db "INSERT INTO inputs VALUES (?, ?, ?, ?, ?, ?, ?)"
              (clj->js [id ws-id (name type) name content (pr-str meta) (.getTime updated)])))

      (.run db "COMMIT;")
      (println "Persisted to in-memory SQL DB."))))

(defn export-db []
  (when-let [^js db @sql-db]
    (persist-all!)
    (let [data (.export db)
          blob (new js/Blob (clj->js [data]) (clj->js {:type "application/x-sqlite3"}))]
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
