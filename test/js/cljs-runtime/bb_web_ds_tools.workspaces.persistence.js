goog.provide('bb_web_ds_tools.workspaces.persistence');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.persistence","init-persistence","bb-web-ds-tools.workspaces.persistence/init-persistence",-1263695702),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("persistence","init","persistence/init",-1559746299),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.persistence","save-datasets","bb-web-ds-tools.workspaces.persistence/save-datasets",-553694078),(function (p__49073,_){
var map__49074 = p__49073;
var map__49074__$1 = cljs.core.__destructure_map(map__49074);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49074__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("persistence","save-datasets","persistence/save-datasets",-1056785523),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.persistence","load-datasets","bb-web-ds-tools.workspaces.persistence/load-datasets",425111618),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("persistence","load-datasets","persistence/load-datasets",2001936203),null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.workspaces.persistence","datasets-loaded","bb-web-ds-tools.workspaces.persistence/datasets-loaded",1851286842),(function (db,p__49090){
var vec__49098 = p__49090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49098,(0),null);
var datasets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49098,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null),datasets);
}));

//# sourceMappingURL=bb_web_ds_tools.workspaces.persistence.js.map
