var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
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
var portal=$CLJS.portal || ($CLJS.portal = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});

$CLJS.SHADOW_ENV.setLoaded("portal.shortcuts.js");

goog.provide('portal.shortcuts');
portal.shortcuts.get_platform = (function portal$shortcuts$get_platform(){
var platform = window.navigator.platform;
if(cljs.core.truth_((function (){var fexpr__36893 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Mac68K",null,"Macintosh",null,"MacPPC",null,"MacIntel",null], null), null);
return (fexpr__36893.cljs$core$IFn$_invoke$arity$1 ? fexpr__36893.cljs$core$IFn$_invoke$arity$1(platform) : fexpr__36893.call(null,platform));
})())){
return new cljs.core.Keyword("portal.shortcuts","osx","portal.shortcuts/osx",300522451);
} else {
if(cljs.core.truth_((function (){var fexpr__36894 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["WinCE",null,"Windows",null,"Win32",null,"Win64",null], null), null);
return (fexpr__36894.cljs$core$IFn$_invoke$arity$1 ? fexpr__36894.cljs$core$IFn$_invoke$arity$1(platform) : fexpr__36894.call(null,platform));
})())){
return new cljs.core.Keyword("portal.shortcuts","windows","portal.shortcuts/windows",-450991854);
} else {
if(clojure.string.includes_QMARK_(platform,"Linux")){
return new cljs.core.Keyword("portal.shortcuts","linux","portal.shortcuts/linux",-2066098221);
} else {
return null;
}
}
}
});
portal.shortcuts.platform_supported_QMARK_ = (function portal$shortcuts$platform_supported_QMARK_(shortcut){
var platform = portal.shortcuts.get_platform();
if(cljs.core.truth_(new cljs.core.Keyword("portal.shortcuts","osx","portal.shortcuts/osx",300522451).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(shortcut)))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portal.shortcuts","osx","portal.shortcuts/osx",300522451),platform);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("portal.shortcuts","windows","portal.shortcuts/windows",-450991854).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(shortcut)))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portal.shortcuts","windows","portal.shortcuts/windows",-450991854),platform);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("portal.shortcuts","linux","portal.shortcuts/linux",-2066098221).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(shortcut)))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("portal.shortcuts","linux","portal.shortcuts/linux",-2066098221),platform);
} else {
return true;

}
}
}
});
portal.shortcuts.get_shortcut = (function portal$shortcuts$get_shortcut(definition){
if(typeof definition === 'string'){
return cljs.core.PersistentHashSet.createAsIfByAssoc([definition]);
} else {
if(cljs.core.map_QMARK_(definition)){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(definition,portal.shortcuts.get_platform());
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(definition,new cljs.core.Keyword("portal.shortcuts","default","portal.shortcuts/default",71461651));
}
} else {
return definition;

}
}
});
portal.shortcuts.event__GT_key = (function portal$shortcuts$event__GT_key(e){
var temp__5825__auto__ = e.key;
if(cljs.core.truth_(temp__5825__auto__)){
var k = temp__5825__auto__;
return k.toLowerCase();
} else {
return null;
}
});
/**
 * Returns all key sequences in the event log.
 */
portal.shortcuts.log__GT_seq = (function portal$shortcuts$log__GT_seq(log){
var log__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(portal.shortcuts.event__GT_key,log);
var iter__5503__auto__ = (function portal$shortcuts$log__GT_seq_$_iter__36901(s__36902){
return (new cljs.core.LazySeq(null,(function (){
var s__36902__$1 = s__36902;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36902__$1);
if(temp__5825__auto__){
var s__36902__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36902__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__36902__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__36904 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__36903 = (0);
while(true){
if((i__36903 < size__5502__auto__)){
var n = cljs.core._nth(c__5501__auto__,i__36903);
cljs.core.chunk_append(b__36904,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,log__$1))));

var G__36925 = (i__36903 + (1));
i__36903 = G__36925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36904),portal$shortcuts$log__GT_seq_$_iter__36901(cljs.core.chunk_rest(s__36902__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36904),null);
}
} else {
var n = cljs.core.first(s__36902__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,log__$1))),portal$shortcuts$log__GT_seq_$_iter__36901(cljs.core.rest(s__36902__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(log__$1)))));
});
/**
 * Return the last key combo from the event log.
 */
portal.shortcuts.log__GT_combo = (function portal$shortcuts$log__GT_combo(log){
var temp__5825__auto__ = cljs.core.first(log);
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
var G__36909 = cljs.core.PersistentHashSet.createAsIfByAssoc([portal.shortcuts.event__GT_key(e)]);
var G__36909__$1 = (cljs.core.truth_(e.ctrlKey)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__36909,"control"):G__36909);
var G__36909__$2 = (cljs.core.truth_(e.metaKey)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__36909__$1,"meta"):G__36909__$1);
var G__36909__$3 = (cljs.core.truth_(e.shiftKey)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__36909__$2,"shift"):G__36909__$2);
if(cljs.core.truth_(e.altKey)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__36909__$3,"alt");
} else {
return G__36909__$3;
}
} else {
return null;
}
});
if((typeof portal !== 'undefined') && (typeof portal.shortcuts !== 'undefined') && (typeof portal.shortcuts.log !== 'undefined')){
} else {
portal.shortcuts.log = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
portal.shortcuts.clear_BANG_ = (function portal$shortcuts$clear_BANG_(){
return cljs.core.reset_BANG_(portal.shortcuts.log,cljs.core.List.EMPTY);
});
portal.shortcuts.match_QMARK_ = (function portal$shortcuts$match_QMARK_(definition,log){
return cljs.core.some((function (combo){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(combo,portal.shortcuts.get_shortcut(definition));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portal.shortcuts.log__GT_combo(log)], null),portal.shortcuts.log__GT_seq(log)));
});
portal.shortcuts.match = (function portal$shortcuts$match(mapping,log){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mapping,portal.shortcuts.log__GT_combo(log));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.some((function (p1__36910_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(mapping,p1__36910_SHARP_);
}),portal.shortcuts.log__GT_seq(log));
}
});
portal.shortcuts.input_QMARK_ = (function portal$shortcuts$input_QMARK_(log){
var temp__5825__auto__ = cljs.core.first(log);
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
var G__36916 = e.target.tagName;
var fexpr__36915 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["SELECT",null,"INPUT",null,"BUTTON",null,"TEXTAREA",null], null), null);
return (fexpr__36915.cljs$core$IFn$_invoke$arity$1 ? fexpr__36915.cljs$core$IFn$_invoke$arity$1(G__36916) : fexpr__36915.call(null,G__36916));
} else {
return null;
}
});
portal.shortcuts.keydown = (function portal$shortcuts$keydown(e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(portal.shortcuts.log,(function (p1__36917_SHARP_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__36917_SHARP_,e));
}));

return null;
});
portal.shortcuts.init = (function portal$shortcuts$init(){
if((cljs.core.deref(portal.shortcuts.log) == null)){
portal.shortcuts.clear_BANG_();

window.addEventListener("blur",(function (){
return portal.shortcuts.clear_BANG_();
}));

return window.addEventListener("keydown",(function (p1__36918_SHARP_){
return portal.shortcuts.keydown(p1__36918_SHARP_);
}));
} else {
return null;
}
});
portal.shortcuts.matched_BANG_ = (function portal$shortcuts$matched_BANG_(log){
portal.shortcuts.clear_BANG_();

var temp__5825__auto__ = cljs.core.first(log);
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
return e.preventDefault();
} else {
return null;
}
});
portal.shortcuts.add_BANG_ = (function portal$shortcuts$add_BANG_(k,f){
portal.shortcuts.init();

return cljs.core.add_watch(portal.shortcuts.log,k,(function (_,___$1,___$2,log){
if(cljs.core.empty_QMARK_(log)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(log) : f.call(null,log));
}
}));
});
portal.shortcuts.remove_BANG_ = (function portal$shortcuts$remove_BANG_(k){
return cljs.core.remove_watch(portal.shortcuts.log,k);
});

//# sourceMappingURL=portal.shortcuts.js.map
