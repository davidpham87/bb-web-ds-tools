(ns verification.e2e.macros)

(defmacro def-e2e-test [name & body]
  `(do
     (defn ~name [] ~@body)
     (verification.e2e.core/register '~name ~name)))
