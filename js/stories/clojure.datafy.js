var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.core.protocols.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
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
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("clojure.datafy.js");

goog.provide('clojure.datafy');
/**
 * Attempts to return x as data.
 *   datafy will return the value of clojure.protocols/datafy. If
 *   the value has been transformed and the result supports
 *   metadata, :clojure.datafy/obj will be set on the metadata to the
 *   original value of x.
 */
clojure.datafy.datafy = (function clojure$datafy$datafy(x){
var v = clojure.core.protocols.datafy(x);
if((v === x)){
return v;
} else {
if((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.assoc,new cljs.core.Keyword("clojure.datafy","obj","clojure.datafy/obj",-330079421),x);
} else {
return v;
}
}
});
/**
 * Returns (possibly transformed) v in the context of coll and k (a
 *   key/index or nil). Callers should attempt to provide the key/index
 *   context k for Indexed/Associative/ILookup colls if possible, but not
 *   to fabricate one e.g. for sequences (pass nil). nav will return the
 *   value of clojure.core.protocols/nav.
 */
clojure.datafy.nav = (function clojure$datafy$nav(coll,k,v){
return clojure.core.protocols.nav(coll,k,v);
});
clojure.datafy.datify_ref = (function clojure$datafy$datify_ref(r){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(r)], null),cljs.core.meta(r));
});
(Error.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.Throwable__GT_map(x__$1);
}));

(cljs.core.ExceptionInfo.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ExceptionInfo.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.Throwable__GT_map(x__$1);
}));

(cljs.core.Var.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (r){
var r__$1 = this;
return clojure.datafy.datify_ref(r__$1);
}));

(cljs.core.Reduced.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Reduced.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (r){
var r__$1 = this;
return clojure.datafy.datify_ref(r__$1);
}));

(cljs.core.Atom.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (r){
var r__$1 = this;
return clojure.datafy.datify_ref(r__$1);
}));

(cljs.core.Volatile.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Volatile.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (r){
var r__$1 = this;
return clojure.datafy.datify_ref(r__$1);
}));

(cljs.core.Delay.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Delay.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (r){
var r__$1 = this;
return clojure.datafy.datify_ref(r__$1);
}));

//# sourceMappingURL=clojure.datafy.js.map
