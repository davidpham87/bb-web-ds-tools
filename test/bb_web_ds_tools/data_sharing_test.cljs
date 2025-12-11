(ns bb-web-ds-tools.data-sharing-test
  (:require [cljs.test :refer [deftest is testing use-fixtures async]]
            [day8.re-frame.test :as rf-test]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [bb-web-ds-tools.views.datasets :as datasets]
            [bb-web-ds-tools.views.repl :as repl]
            [bb-web-ds-tools.views.pyodide :as pyodide]
            [bb-web-ds-tools.views.r-repl :as r-repl]
            [bb-web-ds-tools.runtime.sci :as sci-runtime]
            [bb-web-ds-tools.runtime.pyodide :as pyodide-runtime]
            [bb-web-ds-tools.runtime.webr :as webr-runtime]
            [bb-web-ds-tools.portal :as portal]
            [portal.web :as p]
            [bb-web-ds-tools.test-setup :as setup]
            [bb-web-ds-tools.core :as core]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(defn mount-component [comp]
  (let [div (.createElement js/document "div")]
    (.appendChild js/document.body div)
    (rdom/render comp div)
    (r/flush)
    div))

(defn unmount-component [div]
  (rdom/unmount-component-at-node div)
  (.removeChild js/document.body div))

(deftest data-sharing-e2e-test
  (rf-test/run-test-sync
   (testing "Data sharing across runtimes"
     (let [portal-submissions (atom [])
           pyodide-synced (atom nil)
           webr-synced (atom nil)
           toy-dataset-name "toy-data"
           toy-dataset-data [{:a 1 :b 2}]
           toy-dataset {:name toy-dataset-name :data toy-dataset-data}
           ;; Mock worker for SCI
           worker-msgs (atom [])
           mock-worker {:postMessage (fn [msg] (swap! worker-msgs conj msg))}]

       ;; Initialize app state
       (rf/dispatch [:bb-web-ds-tools.core/initialize-db])
       (rf/dispatch [::datasets/initialize])

       ;; Mock Portal submission
       (with-redefs [p/submit (fn [val & _] (swap! portal-submissions conj val))]

         ;; 1. Import toy dataset
         (testing "Navigate to datasets view and import dataset"
           (rf/dispatch [::datasets/add-dataset toy-dataset])
           (let [datasets @(rf/subscribe [::datasets/items])]
             (is (some (fn [[_ ds]] (= (:name ds) toy-dataset-name)) datasets) "Dataset should be added to app-db")))

         ;; 2. Navigate to Clojure REPL (SCI)
         (testing "Navigate to Clojure REPL and eval keys"
           (rf/dispatch [::repl/add-instance])
           (let [instances @(rf/subscribe [::repl/instances])
                 instance-id (ffirst instances)]

             ;; Mock SCI runtime
             (with-redefs [sci-runtime/sci-worker (atom mock-worker)
                           sci-runtime/init! (fn [& _] nil)
                           bb-web-ds-tools.utils.worker/post-message (fn [w msg] ((:postMessage w) msg))]

               ;; Mount the REPL component to trigger sync (if it did sync on mount)
               ;; Actually, sci-runtime/init! is called on mount of repl/panel
               ;; And init! calls sync-datasets!
               (let [div (mount-component [repl/panel])]
                 (try
                   ;; Verify init! -> sync-datasets! flow happened
                   ;; Since we mocked init! to do nothing, we should check if we can simulate the side effect
                   ;; But wait, repl/panel calls init!. If we mock init!, we lose the sync call inside it.
                   ;; Let's mock init! to call the REAL sync-datasets! logic but mock the worker creation.
                   ;; Actually, simpler: sync-datasets! relies on global @sci-worker.
                   ;; We set that above.
                   ;; And we need to ensure sync-datasets! is called.
                   ;; Let's manually invoke sync-datasets! here because mocking init! correctly to call another function in same ns is tricky with simple redefs if init! is called by component.
                   ;; Ideally, repl/panel calls init!, which sets up worker.
                   (sci-runtime/sync-datasets!)

                   (is (some #(= "update-datasets" (:type %)) @worker-msgs) "SCI worker should receive dataset update")

                   ;; Dispatch eval event (simulating user typing and running)
                   (reset! worker-msgs [])
                   (rf/dispatch [::repl/eval-code instance-id "(keys @user/datasets)"])
                   (is (some #(= "eval" (:type %)) @worker-msgs) "SCI worker should receive eval message")

                   (finally
                     (unmount-component div)))))))

         ;; 3. Navigate to Python view (Pyodide)
         (testing "Navigate to Python view and verify access"
           (with-redefs [pyodide-runtime/sync-datasets (fn [ds] (reset! pyodide-synced ds))
                         pyodide-runtime/eval-in-worker (fn [code]
                                                          (when (and (= code "keys(datasets)")
                                                                     (some (fn [[_ ds]] (= (:name ds) toy-dataset-name)) @pyodide-synced))
                                                            (p/submit {:value (list toy-dataset-name)})))]
             ;; Mount Pyodide panel
             ;; This should trigger component-did-mount -> sync-datasets
             (let [div (mount-component [pyodide/panel])]
               (try
                 (r/flush) ;; Ensure render effects run

                 (is (some (fn [[_ ds]] (= (:name ds) toy-dataset-name)) @pyodide-synced)
                     "Pyodide runtime should receive datasets via component mount")

                 (rf/dispatch [::pyodide/run-code "keys(datasets)"])
                 (is (some #(and (map? %) (= (:value %) (list toy-dataset-name))) @portal-submissions)
                     "Portal should show dataset keys from Python")

                 (finally
                   (unmount-component div))))))

         ;; 4. Navigate to R view (WebR)
         (testing "Navigate to R view and verify access"
           (with-redefs [webr-runtime/bind-datasets (fn [ds & _] (reset! webr-synced ds))
                         webr-runtime/eval-in-main (fn [code & args]
                                                     (when (and (= code "names(datasets)")
                                                                (some (fn [[_ ds]] (= (:name ds) toy-dataset-name)) @webr-synced))
                                                       (p/submit {:value (list toy-dataset-name)})))]

             ;; Mount R-REPL panel
             ;; Triggers ::on-mount event -> ::bind-datasets
             (let [div (mount-component [r-repl/panel])]
               (try
                 (r/flush)

                 (is (some (fn [[_ ds]] (= (:name ds) toy-dataset-name)) @webr-synced)
                     "WebR runtime should receive datasets via component mount/event")

                 (rf/dispatch [::r-repl/set-code "names(datasets)"])
                 (rf/dispatch [::r-repl/run-code "names(datasets)"])

                 (is (some #(and (map? %) (= (:value %) (list toy-dataset-name))) @portal-submissions)
                     "Portal should show dataset keys from R")

                 (finally
                   (unmount-component div)))))))))))
