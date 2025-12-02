(ns bb-web-ds-tools.utils.dataset-processing-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.utils.dataset-processing :as dp]))

(def test-data
  [{:id 1 :name "Alice" :age 30 :role "Engineer"}
   {:id 2 :name "Bob" :age 25 :role "Designer"}
   {:id 3 :name "Charlie" :age 35 :role "Manager"}
   {:id 4 :name "David" :age 30 :role "Engineer"}
   {:id 5 :name "Eve" :age 22 :role "Intern"}])

(def default-view-state
  {:page 0
   :rows-per-page 10
   :filters {}
   :hidden-columns #{}
   :sort-col nil
   :sort-dir nil
   :columns nil})

(deftest process-table-data-basic-test
  (testing "Basic processing without filters or sorting"
    (let [result (dp/process-table-data test-data default-view-state)]
      (is (= test-data (:page-data result)))
      (is (= 5 (:total-rows result)))
      (is (= 0 (:start-idx result)))
      (is (= 5 (:end-idx result)))
      (is (= test-data (:filtered-data result))))))

(deftest process-table-data-filtering-test
  (testing "Filtering by a single column"
    (let [view-state (assoc default-view-state :filters {:role "Engineer"})
          result (dp/process-table-data test-data view-state)]
      (is (= 2 (:total-rows result)))
      (is (= ["Alice" "David"] (map :name (:page-data result))))))

  (testing "Filtering by multiple columns"
    (let [view-state (assoc default-view-state :filters {:role "Engineer" :name "Dav"})
          result (dp/process-table-data test-data view-state)]
      (is (= 1 (:total-rows result)))
      (is (= "David" (:name (first (:page-data result)))))))

  (testing "Case insensitive filtering"
    (let [view-state (assoc default-view-state :filters {:name "alice"})
          result (dp/process-table-data test-data view-state)]
      (is (= 1 (:total-rows result)))
      (is (= "Alice" (:name (first (:page-data result)))))))

  (testing "Filtering with no matches"
    (let [view-state (assoc default-view-state :filters {:name "Zack"})
          result (dp/process-table-data test-data view-state)]
      (is (= 0 (:total-rows result)))
      (is (empty? (:page-data result))))))

(deftest process-table-data-sorting-test
  (testing "Sorting ascending"
    (let [view-state (assoc default-view-state :sort-col :age :sort-dir :asc)
          result (dp/process-table-data test-data view-state)]
      (is (= ["Eve" "Bob" "Alice" "David" "Charlie"] (map :name (:page-data result))))))

  (testing "Sorting descending"
    (let [view-state (assoc default-view-state :sort-col :age :sort-dir :desc)
          result (dp/process-table-data test-data view-state)]
      (is (= ["Charlie" "Alice" "David" "Bob" "Eve"] (map :name (:page-data result))))))

  (testing "Sorting works with filtering"
    (let [view-state (assoc default-view-state
                            :filters {:role "Engineer"}
                            :sort-col :name
                            :sort-dir :desc)
          result (dp/process-table-data test-data view-state)]
      (is (= ["David" "Alice"] (map :name (:page-data result)))))))

(deftest process-table-data-pagination-test
  (testing "Pagination page 0"
    (let [view-state (assoc default-view-state :rows-per-page 2 :page 0)
          result (dp/process-table-data test-data view-state)]
      (is (= 2 (count (:page-data result))))
      (is (= ["Alice" "Bob"] (map :name (:page-data result))))
      (is (= 0 (:start-idx result)))
      (is (= 2 (:end-idx result)))))

  (testing "Pagination page 1"
    (let [view-state (assoc default-view-state :rows-per-page 2 :page 1)
          result (dp/process-table-data test-data view-state)]
      (is (= 2 (count (:page-data result))))
      (is (= ["Charlie" "David"] (map :name (:page-data result))))
      (is (= 2 (:start-idx result)))
      (is (= 4 (:end-idx result)))))

  (testing "Pagination last page partial"
    (let [view-state (assoc default-view-state :rows-per-page 2 :page 2)
          result (dp/process-table-data test-data view-state)]
      (is (= 1 (count (:page-data result))))
      (is (= ["Eve"] (map :name (:page-data result))))
      (is (= 4 (:start-idx result)))
      (is (= 5 (:end-idx result))))))

(deftest process-table-data-columns-test
  (testing "Hidden columns"
    (let [view-state (assoc default-view-state :hidden-columns #{:age :role})
          result (dp/process-table-data test-data view-state)]
      (is (= [:id :name] (:visible-columns result)))))

  (testing "Explicit columns provided"
    (let [view-state (assoc default-view-state :columns [:name :role])
          result (dp/process-table-data test-data view-state)]
      (is (= [:name :role] (:visible-columns result)))))

  (testing "Implicit columns from data"
    (let [result (dp/process-table-data test-data default-view-state)]
      (is (= #{:id :name :age :role} (set (:visible-columns result)))))))

(deftest process-table-data-edge-cases-test
  (testing "Empty data"
    (let [result (dp/process-table-data [] default-view-state)]
      (is (= 0 (:total-rows result)))
      (is (empty? (:page-data result)))
      (is (empty? (:visible-columns result)))))

  (testing "Page out of bounds"
    (let [view-state (assoc default-view-state :page 100)
          result (dp/process-table-data test-data view-state)]
      (is (empty? (:page-data result)))
      (is (= 5 (:total-rows result))))))
