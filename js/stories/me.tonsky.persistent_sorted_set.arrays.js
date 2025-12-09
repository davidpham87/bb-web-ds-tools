var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("me.tonsky.persistent_sorted_set.arrays.js");

goog.provide('me.tonsky.persistent_sorted_set.arrays');
me.tonsky.persistent_sorted_set.arrays.if_cljs = (function me$tonsky$persistent_sorted_set$arrays$if_cljs(env,then,else$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))){
return then;
} else {
return else$;
}
});
me.tonsky.persistent_sorted_set.arrays.make_array = (function me$tonsky$persistent_sorted_set$arrays$make_array(size){
return (new Array(size));
});
me.tonsky.persistent_sorted_set.arrays.into_array = (function me$tonsky$persistent_sorted_set$arrays$into_array(aseq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,x){
a.push(x);

return a;
}),(new Array()),aseq);
});
me.tonsky.persistent_sorted_set.arrays.aclone = (function me$tonsky$persistent_sorted_set$arrays$aclone(from){
return from.slice((0));
});
me.tonsky.persistent_sorted_set.arrays.aconcat = (function me$tonsky$persistent_sorted_set$arrays$aconcat(a,b){
return a.concat(b);
});
me.tonsky.persistent_sorted_set.arrays.amap = (function me$tonsky$persistent_sorted_set$arrays$amap(f,arr){
return arr.map(f);
});
me.tonsky.persistent_sorted_set.arrays.asort = (function me$tonsky$persistent_sorted_set$arrays$asort(arr,cmp){
return arr.sort(cmp);
});
me.tonsky.persistent_sorted_set.arrays.array_QMARK_ = (function me$tonsky$persistent_sorted_set$arrays$array_QMARK_(x){
if((cljs.core._STAR_target_STAR_ === "nodejs")){
return Array.isArray(x);
} else {
return (x instanceof Array);
}
});

//# sourceMappingURL=me.tonsky.persistent_sorted_set.arrays.js.map
