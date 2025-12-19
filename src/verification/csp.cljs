(ns verification.csp
  (:require [verification.e2e.core :refer [register with-page check]]
            [promesa.core :as p]))

(defn test-csp []
  (with-page
    (fn [^js page]
      (p/let [_ (.goto page "file:///app/docs/index.html")
              content (.. page (locator "meta[http-equiv=\"Content-Security-Policy\"]") (getAttribute "content"))]
        (check content "CSP meta tag should exist")
        (check (re-find #"default-src 'self'" content) "CSP should contain default-src 'self'")
        (check (re-find #"script-src 'self' 'unsafe-inline' 'unsafe-eval'" content) "CSP should allow scripts")
        (check (re-find #"https://cdn.tailwindcss.com" content) "CSP should allow tailwind")
        (check (re-find #"https://webr.r-wasm.org" content) "CSP should allow webr")))))

(register "content-security-policy" test-csp)
