(ns bb-web-ds-tools.workers.persistence
  (:require
   ["@sqlite.org/sqlite-wasm" :default sqlite3InitModule]
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer-macros [<p!]]))

(defonce sqlite-db (atom nil))

(defn log
  "Logs arguments to the console with a worker prefix.

  Args:
    args (rest): Arguments to log.

  Returns:
    nil."
  [& args]
  (apply js/console.log "[Worker]" args))

(defn error
  "Logs errors to the console with a worker prefix.

  Args:
    args (rest): Arguments to log.

  Returns:
    nil."
  [& args]
  (apply js/console.error "[Worker]" args))

(defn start
  "Starts the SQLite database connection.

  Args:
    sqlite3 (object): The initialized sqlite3 module.

  Returns:
    nil."
  [^js sqlite3]
  (log "Running SQLite3 version" (.. sqlite3 -version -libVersion))
  (let [opfs? (exists? (.-opfs ^js (.-oo1 sqlite3)))
        db (if opfs?
             (new (.. sqlite3 -oo1 -OpfsDb) "/mydb.sqlite3")
             (new (.. sqlite3 -oo1 -DB) "/mydb.sqlite3" "ct"))]
    (reset! sqlite-db db)
    (log (if opfs?
           (str "OPFS is available, created persisted database at " (.-filename db))
           (str "OPFS is not available, created transient database " (.-filename db))))))

(defn ^:export init
  "Initializes the persistence worker by loading the SQLite module.

  Returns:
    channel: A core.async channel."
  []
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
