(ns bb-web-ds-tools.workspaces.schema
  "Key functions:
  - schema

  History:
  - 2025-12-14 782cf0f: Merge pull request #351 from davidpham87/sqlite-wasm-test-13575504069155099438")

(def schema
  {:workspace/id          {:db/unique :db.unique/identity}
   :workspace/name        {:db/unique :db.unique/identity} ;; Workspace names should be unique for simplicity
   :workspace/created-at  {}
   :workspace/updated-at  {}

   :input/id              {:db/unique :db.unique/identity}
   :input/workspace       {:db/valueType :db.type/ref
                           :db/cardinality :db.cardinality/one}
   :input/type            {} ;; :dataset, :schema, :code, :config
   :input/name            {} ;; e.g., "my-dataset.csv"
   :input/content         {} ;; The actual content
   :input/metadata        {} ;; Map of extra info
   :input/updated-at      {}})
