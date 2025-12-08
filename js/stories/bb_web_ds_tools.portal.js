var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./portal.web.js");
require("./re_frame.core.js");
require("./reagent.core.js");
require("./bb_web_ds_tools.events.theme.js");
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.portal.js");

goog.provide('bb_web_ds_tools.portal');
re_frame.core.reg_fx(new cljs.core.Keyword("portal","open","portal/open",1349656052),(function (p__37912){
var map__37913 = p__37912;
var map__37913__$1 = cljs.core.__destructure_map(map__37913);
var iframe_parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913__$1,new cljs.core.Keyword(null,"iframe-parent-id","iframe-parent-id",-1242074886));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
cljs.core.tap_GT_(iframe_parent_id);

var options = (function (){var G__37915 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),(function (){var or__5025__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("portal.colors",cljs.core.name(theme));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("portal.colors","zenburn","portal.colors/zenburn",-1225371086);
}
})()], null);
if(cljs.core.truth_(iframe_parent_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__37915,new cljs.core.Keyword(null,"launcher","launcher",-1380803777),new cljs.core.Keyword(null,"iframe","iframe",884422026),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"iframe-parent","iframe-parent",-2133134058),document.getElementById(iframe_parent_id)], 0));
} else {
return G__37915;
}
})();
return portal.web.open.cljs$core$IFn$_invoke$arity$1(options);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.portal","open","bb-web-ds-tools.portal/open",1274924169),(function (p__37916,p__37917){
var map__37919 = p__37916;
var map__37919__$1 = cljs.core.__destructure_map(map__37919);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37919__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__37920 = p__37917;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37920,(0),null);
var map__37923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37920,(1),null);
var map__37923__$1 = cljs.core.__destructure_map(map__37923);
var opts = map__37923__$1;
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37923__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal","open","portal/open",1349656052),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"iframe-parent-id","iframe-parent-id",-1242074886),node_id,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("portal","submit","portal/submit",861997951),(function (value){
return portal.web.submit(value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),(function (_,p__37924){
var vec__37925 = p__37924;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37925,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37925,(1),null);
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37925,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal","submit","portal/submit",861997951),(cljs.core.truth_(viewer)?(((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IWithMeta$))))?true:(((!value.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,value)))?cljs.core.with_meta(value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.viewer","default","portal.viewer/default",-1985169620),viewer], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer,value], null)):value)], null);
}));
/**
 * Renders a div that acts as the container for the Portal iframe.
 * 
 *   Returns:
 *  vector: A hiccup vector representing the portal container.
 */
bb_web_ds_tools.portal.portal_frame = (function bb_web_ds_tools$portal$portal_frame(){
var current_theme = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
if(cljs.core.truth_(el)){
return portal.web.open.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"launcher","launcher",-1380803777),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"iframe-parent","iframe-parent",-2133134058),el,new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("portal.colors",cljs.core.name(current_theme))], null));
} else {
return null;
}
})], null)], null);
});
/**
 * A Reagent component that renders a Portal inspector and automatically submits data to it.
 * 
 *   Args:
 *  value (any): The data to inspect.
 *  viewer (keyword, optional): The default viewer to use (e.g., :portal.viewer/table).
 * 
 *   Returns:
 *  vector: A hiccup vector representing the component.
 */
bb_web_ds_tools.portal.portal_panel = (function bb_web_ds_tools$portal$portal_panel(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37967 = arguments.length;
var i__5750__auto___37968 = (0);
while(true){
if((i__5750__auto___37968 < len__5749__auto___37967)){
args__5755__auto__.push((arguments[i__5750__auto___37968]));

var G__37969 = (i__5750__auto___37968 + (1));
i__5750__auto___37968 = G__37969;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.portal.portal_panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.portal.portal_panel.cljs$core$IFn$_invoke$arity$variadic = (function (value,p__37942){
var vec__37944 = p__37942;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37944,(0),null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var vec__37954 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37954,(0),null);
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37954,(1),null);
var viewer__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37954,(2),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),value__$1,viewer__$1], null));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__37957){
var vec__37958 = p__37957;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(0),null);
var old_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(1),null);
var old_viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(2),null);
var vec__37961 = reagent.core.argv(this$);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37961,(0),null);
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37961,(1),null);
var viewer__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37961,(2),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,old_value)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(viewer__$1,old_viewer)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),value__$1,viewer__$1], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (value__$1,viewer__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_frame], null);
})], null));
}));

(bb_web_ds_tools.portal.portal_panel.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.portal.portal_panel.cljs$lang$applyTo = (function (seq37935){
var G__37936 = cljs.core.first(seq37935);
var seq37935__$1 = cljs.core.next(seq37935);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37936,seq37935__$1);
}));


//# sourceMappingURL=bb_web_ds_tools.portal.js.map
