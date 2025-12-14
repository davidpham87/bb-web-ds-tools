(ns bb-web-ds-tools.workspaces.core
  "Workspace management for core."
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [datascript.core :as d]
            [bb-web-ds-tools.workspaces.schema :as schema]))

;; --- State ---

(defonce conn (d/create-conn schema/schema))

;; --- Utils ---

(defn get-workspaces
  "Retrieves all workspaces from the DB.

  Args:
    db (map): The DataScript DB.

  Returns:
    seq: List of [eid name] tuples."
  [db]
  (d/q '[:find ?e ?name
         :where [?e :workspace/name ?name]]
       db))

(defn get-inputs
  "Retrieves all inputs for a given workspace.

  Args:
    db (map): The DataScript DB.
    workspace-eid (int): The workspace entity ID.

  Returns:
    seq: List of input tuples."
  [db workspace-eid]
  (d/q '[:find ?e ?type ?name ?content ?updated
         :in $ ?w
         :where
         [?e :input/workspace ?w]
         [?e :input/type ?type]
         [?e :input/name ?name]
         [?e :input/content ?content]
         [?e :input/updated-at ?updated]]
       db workspace-eid))

;; --- Events ---

(rf/reg-event-fx
 ::init
 (fn [{:keys [db]} _]
   ;; In a real app, we might load from persistence here
   {:db (assoc db ::active-workspace-id nil)}))

(rf/reg-event-fx
 ::create-workspace
 (fn [{:keys [db]} [_ name]]
   (let [id (random-uuid)
         tx-data [{:workspace/id id
                   :workspace/name name
                   :workspace/created-at (js/Date.)
                   :workspace/updated-at (js/Date.)}]]
     (d/transact! conn tx-data)
     ;; Auto-switch to new workspace
     {:dispatch [::switch-workspace id]})))

(rf/reg-event-db
 ::switch-workspace
 (fn [db [_ workspace-id]]
   (assoc db ::active-workspace-id workspace-id)))

(rf/reg-event-fx
 ::save-input
 (fn [{:keys [db]} [_ {:keys [type name content metadata]}]]
   (let [workspace-id (::active-workspace-id db)]
     (if workspace-id
       (let [ws-eid (d/q '[:find ?e .
                           :in $ ?id
                           :where [?e :workspace/id ?id]]
                         @conn workspace-id)
             existing-input (d/q '[:find ?e .
                                   :in $ ?ws ?type ?name
                                   :where
                                   [?e :input/workspace ?ws]
                                   [?e :input/type ?type]
                                   [?e :input/name ?name]]
                                 @conn ws-eid type name)
             tx-data (if existing-input
                       [{:db/id existing-input
                         :input/content content
                         :input/metadata metadata
                         :input/updated-at (js/Date.)}]
                       [{:input/id (random-uuid)
                         :input/workspace ws-eid
                         :input/type type
                         :input/name name
                         :input/content content
                         :input/metadata metadata
                         :input/updated-at (js/Date.)}])]
         (d/transact! conn tx-data)
         {})
       {})))) ;; No active workspace, ignore or error

;; --- Subscriptions ---

(defonce ds-version (r/atom 0))

(d/listen! conn :listener (fn [_] (swap! ds-version inc)))

(rf/reg-sub-raw
 ::ds-version
 (fn [_ _]
   (r/reaction @ds-version)))

(rf/reg-sub
 ::workspaces
 :<- [::ds-version]
 (fn [_ _]
   (->> (d/q '[:find (pull ?e [*])
               :where [?e :workspace/id]]
             @conn)
        (map first)
        (sort-by :workspace/name))))

(rf/reg-sub
 ::active-workspace-id
 (fn [db _]
   (::active-workspace-id db)))

(rf/reg-sub
 ::active-workspace
 :<- [::active-workspace-id]
 :<- [::workspaces]
 (fn [[id workspaces] _]
   (some #(when (= (:workspace/id %) id) %) workspaces)))

(rf/reg-sub
 ::current-inputs
 :<- [::active-workspace]
 :<- [::ds-version]
 (fn [[workspace _] _]
   (when workspace
     (let [ws-eid (:db/id workspace)]
       (->> (d/q '[:find (pull ?e [*])
                   :in $ ?ws
                   :where [?e :input/workspace ?ws]]
                 @conn ws-eid)
            (map first)
            (sort-by :input/updated-at)
            reverse)))))
