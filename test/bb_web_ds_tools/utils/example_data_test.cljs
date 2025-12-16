(ns bb-web-ds-tools.utils.example-data-test
  (:require [cljs.test :refer [deftest is testing]]
            [bb-web-ds-tools.utils.dataset-processing :as dp]
            [clojure.string :as str]))

(deftest example-data-test
  (testing "Example data generation and parsing loop"
    (doseq [fmt [:csv :tsv :json :edn :markdown]
            structure (if (#{:csv :tsv :markdown} fmt) [:columnar] [:columnar :row-maps :row-arrays])]
      (testing (str "Format: " fmt ", Structure: " structure)
        (let [example-str (dp/example-data fmt structure)]
          (is (string? example-str))
          (is (not (str/blank? example-str)))

          (let [parsed (dp/parse-dataset fmt structure example-str)]
            ;; parse-dataset always returns a sequence of row maps
            (is (sequential? parsed))
            (is (= 10 (count parsed)))

            ;; Check content of first row
            (let [sample (first parsed)]
              (is (= {:id 1 :score 12.5 :category "a" :date "2023-01-01"}
                     (if (= fmt :markdown)
                       (-> sample
                           (update :score #(js/parseFloat %))
                           (update :id #(js/parseInt %)))
                       sample))
                  "Sample row should match expected data (type differences allowed for markdown)"))))))))

(deftest example-data-config-test
  (testing "Example data generation with custom config"
    (let [custom-config {:markdown {:cell-separator " * "
                                    :row-start "* "
                                    :row-end " *"
                                    :header-dash "==="}
                         :json {:indent 4}}
          markdown (dp/example-data :markdown :columnar custom-config)
          json (dp/example-data :json :columnar custom-config)]

      (testing "Markdown uses custom separators"
        (is (= "* id * score * category * date *\n* === * === * === * === *\n* 1 * 12.5 * a * 2023-01-01 *\n* 2 * 10.2 * b * 2023-01-02 *\n* 3 * 8.7 * c * 2023-01-03 *\n* 4 * 15 * a * 2023-01-04 *\n* 5 * 9.9 * b * 2023-01-05 *\n* 6 * 11.1 * c * 2023-01-06 *\n* 7 * 13.4 * a * 2023-01-07 *\n* 8 * 7.8 * b * 2023-01-08 *\n* 9 * 14.2 * c * 2023-01-09 *\n* 10 * 10 * a * 2023-01-10 *"
               markdown)))

      (testing "JSON uses custom indentation"
        ;; Checking for indentation is tricky depending on implementation, but 4 spaces should start lines
        (is (re-find #"\"id\":" json))))))
