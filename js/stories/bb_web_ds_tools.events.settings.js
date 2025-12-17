var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./re_frame.core.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var sci=$CLJS.sci || ($CLJS.sci = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.events.settings.js");

goog.provide('bb_web_ds_tools.events.settings');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","initialize","bb-web-ds-tools.events.settings/initialize",-887932124),(function (db,_){
var G__24930 = db;
var G__24930__$1 = ((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"column-normalizer","column-normalizer",-886999739)], null))))?cljs.core.assoc_in(G__24930,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"column-normalizer","column-normalizer",-886999739)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586)], null)):G__24930);
var G__24930__$2 = ((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null))))?cljs.core.assoc_in(G__24930__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null),new cljs.core.Keyword(null,"general","general",380803686)):G__24930__$1);
var G__24930__$3 = ((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"expanded-views","expanded-views",1479560519)], null))))?cljs.core.assoc_in(G__24930__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"expanded-views","expanded-views",1479560519)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datasets","datasets",1896364419),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null)):G__24930__$2);
var G__24930__$4 = ((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"webr","webr",-966893065)], null))))?cljs.core.assoc_in(G__24930__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"webr","webr",-966893065)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),(720),new cljs.core.Keyword(null,"container-height","container-height",-577782714),(800),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110),0.72], null)):G__24930__$3);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)))){
return cljs.core.assoc_in(G__24930__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"editor","editor",-989377770)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14),new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),"on"], null));
} else {
return G__24930__$4;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-column-normalizer-case","bb-web-ds-tools.events.settings/set-column-normalizer-case",1047395541),(function (db,p__24934){
var vec__24935 = p__24934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24935,(0),null);
var case_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24935,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"column-normalizer","column-normalizer",-886999739),new cljs.core.Keyword(null,"case","case",1143702196)], null),case_val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-column-normalizer-output","bb-web-ds-tools.events.settings/set-column-normalizer-output",-483881870),(function (db,p__24938){
var vec__24939 = p__24938;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24939,(0),null);
var output_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24939,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"column-normalizer","column-normalizer",-886999739),new cljs.core.Keyword(null,"output","output",-1105869043)], null),output_val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-active-view","bb-web-ds-tools.events.settings/set-active-view",-39580680),(function (db,p__24942){
var vec__24943 = p__24942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24943,(0),null);
var view_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24943,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null),view_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","toggle-expanded-view","bb-web-ds-tools.events.settings/toggle-expanded-view",1939359027),(function (db,p__24947){
var vec__24948 = p__24947;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24948,(0),null);
var view_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24948,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"expanded-views","expanded-views",1479560519)], null),(function (p1__24946_SHARP_){
if(cljs.core.contains_QMARK_(p1__24946_SHARP_,view_id)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__24946_SHARP_,view_id);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24946_SHARP_,view_id);
}
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-webr-setting","bb-web-ds-tools.events.settings/set-webr-setting",522713442),(function (db,p__24951){
var vec__24952 = p__24951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24952,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24952,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24952,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"webr","webr",-966893065),key], null),val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-editor-setting","bb-web-ds-tools.events.settings/set-editor-setting",-1016283821),(function (db,p__24955){
var vec__24956 = p__24955;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24956,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24956,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24956,(2),null);
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
