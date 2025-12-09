# HoneySQL View

## Why?

Because writing raw SQL strings is so 1999, and we prefer our SQL injection
vulnerabilities to be at least slightly more difficult to achieve. Also, because
you secretly love Lisp parentheses more than you love readable query languages.

The **HoneySQL View** provides an interactive playground for
[HoneySQL v2](https://github.com/seancorfield/honeysql), a library that allows
you to represent SQL queries as Clojure data structures. This view enables
real-time compilation of these data structures into standard SQL strings.

## Features

- **Real-time Compilation**: As you type your HoneySQL map, the corresponding
  SQL string is generated instantly.
- **Syntax Highlighting**: Dedicated editors for Clojure input and SQL output.
- **Formatted Output**: The generated SQL is pretty-printed for readability.

## Step-by-Step Examples

### 1. Simple Select

Let's write a query to select columns from our example dataset, assuming it
exists in a database table named `dataset`.

**Steps:**

1.  Navigate to the **HoneySQL** view.
2.  In the left-hand editor, paste the following Clojure map:

    ```clojure
    {:select [:id :score :category :date]
     :from   [:dataset]}
    ```

3.  Observe the output in the right-hand panel:

    ```sql
    SELECT id, score, category, date FROM dataset
    ```

### 2. Filtering and Sorting

Now we will add conditions to filter by `category` and `score`, and sort by
`date`, mirroring a typical data analysis task.

**Steps:**

1.  Update the input map to include `:where` and `:order-by` clauses:

    ```clojure
    {:select [:id :score]
     :from   [:dataset]
     :where  [:and
              [:= :category "a"]
              [:> :score 10.0]]
     :order-by [[:date :desc]]}
    ```

2.  The output will update to:

    ```sql
    SELECT id, score
    FROM dataset
    WHERE (category = 'a') AND (score > 10.0)
    ORDER BY date DESC
    ```

### 3. Aggregation (Group By)

Let's calculate the average score per category.

**Steps:**

1.  Enter the following aggregation query:

    ```clojure
    {:select   [:category [[:avg :score] :avg_score]]
     :from     [:dataset]
     :group-by [:category]
     :having   [:> [[:avg :score]] 10.0]}
    ```

2.  The output will be:

    ```sql
    SELECT category, AVG(score) AS avg_score
    FROM dataset
    GROUP BY category
    HAVING AVG(score) > 10.0
    ```
