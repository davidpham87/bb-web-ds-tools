goog.provide('bb_web_ds_tools.events.settings');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","initialize","bb-web-ds-tools.events.settings/initialize",-887932124),(function (db,_){
var G__28626 = db;
var G__28626__$1 = ((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"column-normalizer","column-normalizer",-886999739)], null))))?cljs.core.assoc_in(G__28626,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"column-normalizer","column-normalizer",-886999739)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586)], null)):G__28626);
var G__28626__$2 = ((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null))))?cljs.core.assoc_in(G__28626__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null),new cljs.core.Keyword(null,"general","general",380803686)):G__28626__$1);
var G__28626__$3 = ((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"expanded-views","expanded-views",1479560519)], null))))?cljs.core.assoc_in(G__28626__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"expanded-views","expanded-views",1479560519)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datasets","datasets",1896364419),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null)):G__28626__$2);
var G__28626__$4 = ((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"webr","webr",-966893065)], null))))?cljs.core.assoc_in(G__28626__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"webr","webr",-966893065)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),(720),new cljs.core.Keyword(null,"container-height","container-height",-577782714),(800),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110),0.72], null)):G__28626__$3);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)))){
return cljs.core.assoc_in(G__28626__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"editor","editor",-989377770)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14),new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),"on"], null));
} else {
return G__28626__$4;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-column-normalizer-case","bb-web-ds-tools.events.settings/set-column-normalizer-case",1047395541),(function (db,p__28627){
var vec__28628 = p__28627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28628,(0),null);
var case_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28628,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"column-normalizer","column-normalizer",-886999739),new cljs.core.Keyword(null,"case","case",1143702196)], null),case_val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-column-normalizer-output","bb-web-ds-tools.events.settings/set-column-normalizer-output",-483881870),(function (db,p__28631){
var vec__28632 = p__28631;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28632,(0),null);
var output_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28632,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"column-normalizer","column-normalizer",-886999739),new cljs.core.Keyword(null,"output","output",-1105869043)], null),output_val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-active-view","bb-web-ds-tools.events.settings/set-active-view",-39580680),(function (db,p__28636){
var vec__28637 = p__28636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28637,(0),null);
var view_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28637,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null),view_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","toggle-expanded-view","bb-web-ds-tools.events.settings/toggle-expanded-view",1939359027),(function (db,p__28644){
var vec__28645 = p__28644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28645,(0),null);
var view_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28645,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"expanded-views","expanded-views",1479560519)], null),(function (p1__28640_SHARP_){
if(cljs.core.contains_QMARK_(p1__28640_SHARP_,view_id)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__28640_SHARP_,view_id);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__28640_SHARP_,view_id);
}
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-webr-setting","bb-web-ds-tools.events.settings/set-webr-setting",522713442),(function (db,p__28648){
var vec__28649 = p__28648;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"webr","webr",-966893065),key], null),val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-editor-setting","bb-web-ds-tools.events.settings/set-editor-setting",-1016283821),(function (db,p__28652){
var vec__28653 = p__28652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28653,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"editor","editor",-989377770),key], null),val);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.settings","column-normalizer","bb-web-ds-tools.events.settings/column-normalizer",-462853964),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"column-normalizer","column-normalizer",-886999739)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.settings","active-view","bb-web-ds-tools.events.settings/active-view",-1970506839),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null),new cljs.core.Keyword(null,"general","general",380803686));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.settings","expanded-views","bb-web-ds-tools.events.settings/expanded-views",-1168619342),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"expanded-views","expanded-views",1479560519)], null),cljs.core.PersistentHashSet.EMPTY);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.settings","webr-settings","bb-web-ds-tools.events.settings/webr-settings",541893482),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"webr","webr",-966893065)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),(720),new cljs.core.Keyword(null,"container-height","container-height",-577782714),(800),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110),0.72], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.settings","editor-settings","bb-web-ds-tools.events.settings/editor-settings",74758155),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"editor","editor",-989377770)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14),new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),"on"], null));
})], 0));

//# sourceMappingURL=bb_web_ds_tools.events.settings.js.map
