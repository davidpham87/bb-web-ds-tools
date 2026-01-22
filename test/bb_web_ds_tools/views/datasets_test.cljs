(ns bb-web-ds-tools.views.datasets-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [day8.re-frame.test :as rf-test]
            [bb-web-ds-tools.views.datasets :as sut]
            [bb-web-ds-tools.core]
            [malli.generator :as mg]
            [clojure.set :as set]
            [bb-web-ds-tools.test-setup :as setup]))

(use-fixtures :each setup/suppress-re-frame-warnings)

(deftest datasets-property-test
  (rf-test/run-test-sync
   ;; Initialize
   (rf/dispatch [::sut/initialize])

   ;; Generate a sequence of abstract commands
   (let [commands (mg/generate [:vector {:min 10 :max 50}
                                [:enum :create :delete :update :switch]])]

     (doseq [cmd commands]
       (let [items @(rf/subscribe [::sut/items])
             ids (vec (keys items))]

         (case cmd
           :create
           (let [data [{:col1 1 :col2 2} {:col1 3 :col2 4}]
                 name "Test DS"]
             (rf/dispatch [::sut/add-dataset {:name name :data data}])
             (let [new-items @(rf/subscribe [::sut/items])]
               (is (= (inc (count items)) (count new-items)) "Should add a dataset")
               ;; verify active dataset switched to new one
               (let [active-id @(rf/subscribe [::sut/active-dataset-id])
                     new-id (first (set/difference (set (keys new-items)) (set ids)))]
                 (is (= active-id new-id)))))

           :delete
           (when (seq ids)
             (let [id (rand-nth ids)]
               (rf/dispatch [::sut/delete-dataset id])
               (let [new-items @(rf/subscribe [::sut/items])]
                 (is (nil? (get new-items id)) "Should remove the dataset")
                 (is (= (dec (count items)) (count new-items))))))

           :switch
           (when (seq ids)
             (let [id (rand-nth ids)]
               (rf/dispatch [::sut/set-active-dataset-id id])
               (is (= id @(rf/subscribe [::sut/active-dataset-id])))))

           :update
           (when (seq ids)
             (let [ds-id (rand-nth ids)
                   ds (get items ds-id)
                   rows (:data ds)
                   cols (:columns ds)]
               (when (and (seq rows) (seq cols))
                 (let [row (rand-nth rows)
                       col (rand-nth cols)
                       new-val (str (rand-int 1000))]
                   (rf/dispatch [::sut/update-cell ds-id (:_uuid row) col new-val])
                   (let [updated-ds (get @(rf/subscribe [::sut/items]) ds-id)
                         updated-row (first (filter #(= (:_uuid %) (:_uuid row)) (:data updated-ds)))]
                     (is (= (assoc row col new-val) updated-row) "Should update cell value"))))))))))))

(deftest vega-datasets-parsing-test
  (rf-test/run-test-sync
   (let [html-content "<html><body>
                         <a href=\"/npm/vega-datasets@3.2.1/data/cars.json\">cars.json</a>
                         <a href=\"/npm/vega-datasets@3.2.1/data/airports.csv\">airports.csv</a>
                         <a href=\"other.txt\">other.txt</a>
                         </body></html>"]
      ;; Dispatch receiving event
     (rf/dispatch [::sut/receive-vega-datasets html-content])

     (let [list @(rf/subscribe [::sut/vega-datasets-list])]
       (is (= ["airports.csv" "cars.json"] list) "Should parse and filter filenames")))))

(deftest receive-vega-content-test
  (rf-test/run-test-sync
   (rf/dispatch [::sut/initialize])
   (rf/dispatch [::sut/receive-vega-dataset-content "test.json" "{\"a\": 1}"])
   (let [state @(rf/subscribe [::sut/new-dataset-state])]
     (is (= {:name "test.json"
             :text "{\"a\": 1}"
             :format :json
             :structure :row-maps
             :override-norm? false}
            state)))

   (rf/dispatch [::sut/receive-vega-dataset-content "data.csv" "a,b\n1,2"])
   (let [state @(rf/subscribe [::sut/new-dataset-state])]
     (is (= {:name "data.csv"
             :text "a,b\n1,2"
             :format :csv
             :structure :columnar
             :override-norm? false}
            state)))))
