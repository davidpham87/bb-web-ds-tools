(ns bb-web-ds-tools.persistence-test
  (:require [cljs.test :refer [deftest is testing async use-fixtures]]
            [bb-web-ds-tools.workspaces.persistence-fx :as pfx]
            [bb-web-ds-tools.test-setup :as setup]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer-macros [<p!]]
            ["@sqlite.org/sqlite-wasm" :default sqlite3InitModule]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest test-sqlite-wasm
  (async done
         (go
           (try
             ;; Configure sqlite3InitModule to load WASM manually, bypassing the default loader
             ;; which fails in the Webpack/Karma environment due to dynamic import.meta.url usage.
             (let [base-config (clj->js {:print (fn [x] (js/console.log "SQLite:" x))
                                         :printErr (fn [x] (js/console.error "SQLite Err:" x))
                                         :instantiateWasm (fn [imports success-cb]
                                                            (-> (js/fetch "/base/target/test/sqlite3.wasm")
                                                                (.then #(.arrayBuffer %))
                                                                (.then #(js/WebAssembly.instantiate % imports))
                                                                (.then (fn [result]
                                                                         (success-cb (.-instance result) (.-module result))
                                                                         result))))})
                   ;; Use a Proxy to prevent sqlite3.mjs from overwriting our instantiateWasm implementation
                   handler (clj->js {:set (fn [target prop value receiver]
                                            (if (or (= prop "instantiateWasm")
                                                    (= prop "locateFile"))
                                              true ;; Ignore overwrite
                                              (js/Reflect.set target prop value receiver)))})
                   config (new js/Proxy base-config handler)
                   sqlite3 (<p! (sqlite3InitModule config))]
               (is (some? sqlite3) "SQLite module loaded")

               ;; Initialize the atom used by persistence-fx, which expects global state
               (reset! pfx/sqlite-lib sqlite3)

               (let [sqlite3 ^js sqlite3
                     oo1 (.-oo1 sqlite3)
                     DB (.-DB ^js oo1)
                     db (new DB ":memory:" "ct")]
                 (is (some? db) "DB created")

                 (testing "Create Tables"
                   (pfx/create-tables! db)
                   (let [res (.exec db "SELECT name FROM sqlite_master WHERE type='table' AND name='datasets'" (clj->js {:returnValue "resultRows"}))]
                     (is (= 1 (.-length res)) "datasets table exists")))

                 (testing "Insert and Query Manual"
                   (.exec db "INSERT INTO datasets VALUES ('1', 'test', 'content', 123)")
                   (let [rows (.exec db "SELECT * FROM datasets" (clj->js {:returnValue "resultRows"}))]
                     (is (= [["1" "test" "content" 123]] (js->clj rows)) "Row matches")))

                 (testing "Persist Datasets"
                   (let [datasets {"d1" {:name "My Dataset" :data [{:a 1}]}}]
                     (pfx/persist-datasets! db datasets)
                     (let [loaded (pfx/load-datasets-from-db db)]
                       (is (= datasets loaded)))))

                 (testing "Export DB"
                   (let [blob (pfx/export-db db)]
                     (is (instance? js/Blob blob) "Export returns a Blob")
                     (is (> (.-size blob) 0) "Blob is not empty")))))
             (catch :default e
               (js/console.warn "SQLite WASM initialization failed (expected if WASM assets are missing in test env):" (.-message e))
               (is false (str "Test failed with exception: " (.-message e))))
             (finally
               (reset! pfx/sqlite-lib nil) ;; Cleanup
               (done))))))
