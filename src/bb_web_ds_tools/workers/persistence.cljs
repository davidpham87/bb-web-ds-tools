(ns bb-web-ds-tools.workers.persistence
  "Namespace: bb-web-ds-tools.workers.persistence

  Key functions:
  - (log [& args])
  - (error [& args])
  - (start [^js sqlite3])
  - (^:export [])

  History:
  - Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438"
  (:require
   ["@sqlite.org/sqlite-wasm" :default sqlite3InitModule]
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]]))

(defonce sqlite-db (atom nil))

(defn log [& args]
  (apply js/console.log "[Worker]" args))

(defn error [& args]
  (apply js/console.error "[Worker]" args))

(defn start [^js sqlite3]
  (log "Running SQLite3 version" (.. sqlite3 -version -libVersion))
  (let [opfs? (exists? (.-opfs ^js (.-oo1 sqlite3)))
        db (if opfs?
             (new (.. sqlite3 -oo1 -OpfsDb) "/mydb.sqlite3")
             (new (.. sqlite3 -oo1 -DB) "/mydb.sqlite3" "ct"))]
    (reset! sqlite-db db)
    (log (if opfs?
           (str "OPFS is available, created persisted database at " (.-filename db))
           (str "OPFS is not available, created transient database " (.-filename db))))))

(defn ^:export init []
  (go
    (try
      (log "Loading and initializing SQLite3 module...")
      (let [config (clj->js {:print log
                             :printErr error})
            ^js sqlite3 ^js (<p! (sqlite3InitModule config))]
        (log "Done initializing.")
        (start sqlite3))
      (catch :default e
        (error "Initialization error:" (.-name e) (.-message e))))))
