# HoneySQL View

The HoneySQL view allows you to write [HoneySQL](https://github.com/seancorfield/honeysql) (SQL as Clojure data structures) and see the generated SQL string immediately.

## Features

- **Live Compilation**: Type Clojure data structures and see the SQL output in real-time.
- **Syntax Highlighting**: Editors for both the Clojure input and SQL output.

## Usage

1.  Navigate to the **HoneySQL** view.
2.  Enter a HoneySQL map in the left pane.
3.  View the resulting SQL in the right pane.

## Example

Suppose you have a table `scores` similar to our example dataset.

**Input (HoneySQL):**

```clojure
{:select [:id :category :score]
 :from   [:scores]
 :where  [:and
          [:> :score 10]
          [:= :category "a"]]
 :order-by [[:date :desc]]}
```

**Output (SQL):**

```sql
SELECT id, category, score
FROM scores
WHERE (score > 10) AND (category = 'a')
ORDER BY date DESC
```
