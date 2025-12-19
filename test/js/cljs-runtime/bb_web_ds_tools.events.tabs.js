goog.provide('bb_web_ds_tools.events.tabs');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.tabs","set-active-tab","bb-web-ds-tools.events.tabs/set-active-tab",-241402853),(function (db,p__60826){
var vec__60827 = p__60826;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60827,(0),null);
var component_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60827,(1),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60827,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),component_id,new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null),tab_id);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.tabs","active-tab","bb-web-ds-tools.events.tabs/active-tab",2002997456),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__60831){
var vec__60832 = p__60831;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60832,(0),null);
var component_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60832,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),component_id,new cljs.core.Keyword(null,"active-tab","active-tab",1102432568)], null));
})], 0));

//# sourceMappingURL=bb_web_ds_tools.events.tabs.js.map
