var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./re_frame.interop.js");
require("./re_frame.loggers.js");
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

$CLJS.SHADOW_ENV.setLoaded("re_frame.settings.js");

goog.provide('re_frame.settings');
re_frame.settings.defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),false,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),re_frame.interop.empty_queue], null);
re_frame.settings.store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(re_frame.settings.defaults);
re_frame.interop.on_load((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.settings.store,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),true);
}));
}));
re_frame.settings.loaded_QMARK_ = (function re_frame$settings$loaded_QMARK_(){
return new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.settings.store));
});
re_frame.settings._replace_global_interceptor = (function re_frame$settings$_replace_global_interceptor(global_interceptors,interceptor){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,existing_interceptor){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(interceptor),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(existing_interceptor))){
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.not(re_frame.settings.loaded_QMARK_())){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: replacing duplicate global interceptor id: ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(interceptor)], 0));
} else {
}
} else {
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,interceptor);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,existing_interceptor);
}
}),re_frame.interop.empty_queue,global_interceptors);
});
re_frame.settings.reg_global_interceptor = (function re_frame$settings$reg_global_interceptor(p__23043){
var map__23044 = p__23043;
var map__23044__$1 = cljs.core.__destructure_map(map__23044);
var interceptor = map__23044__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23044__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.settings.store,cljs.core.update,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),(function (global_interceptors){
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),global_interceptors);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),ids))){
return re_frame.settings._replace_global_interceptor(global_interceptors,interceptor);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(global_interceptors,interceptor);
}
}));
});
re_frame.settings.get_global_interceptors = (function re_frame$settings$get_global_interceptors(){
return new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.settings.store));
});
re_frame.settings.clear_global_interceptors = (function re_frame$settings$clear_global_interceptors(var_args){
var G__23047 = arguments.length;
switch (G__23047) {
case 0:
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.settings.store,cljs.core.assoc,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),re_frame.interop.empty_queue);
}));

(re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1 = (function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.settings.store,cljs.core.update,new cljs.core.Keyword(null,"global-interceptors","global-interceptors",-1995759472),(function (global_interceptors){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_frame.interop.empty_queue,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23045_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__23045_SHARP_));
}),global_interceptors));
}));
}));

(re_frame.settings.clear_global_interceptors.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=re_frame.settings.js.map
