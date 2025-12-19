var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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
var module$shadow_js_shim_module$js_yaml=$CLJS.module$shadow_js_shim_module$js_yaml || ($CLJS.module$shadow_js_shim_module$js_yaml = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("clojure.core.protocols.js");

goog.provide('clojure.core.protocols');

/**
 * @interface
 */
clojure.core.protocols.Datafiable = function(){};

var clojure$core$protocols$Datafiable$datafy$dyn_36205 = (function (o){
var x__5373__auto__ = (((o == null))?null:o);
var m__5374__auto__ = (clojure.core.protocols.datafy[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(o) : m__5374__auto__.call(null,o));
} else {
var m__5372__auto__ = (clojure.core.protocols.datafy["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(o) : m__5372__auto__.call(null,o));
} else {
throw cljs.core.missing_protocol("Datafiable.datafy",o);
}
}
});
/**
 * return a representation of o as data (default identity)
 */
clojure.core.protocols.datafy = (function clojure$core$protocols$datafy(o){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(o),cljs.core.with_meta(new cljs.core.Symbol("clojure.core.protocols","datafy","clojure.core.protocols/datafy",707534751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5823__auto__){
var meta_impl__5375__auto__ = temp__5823__auto__;
return (meta_impl__5375__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5375__auto__.cljs$core$IFn$_invoke$arity$1(o) : meta_impl__5375__auto__.call(null,o));
} else {
if((((!((o == null)))) && ((!((o.clojure$core$protocols$Datafiable$datafy$arity$1 == null)))))){
return o.clojure$core$protocols$Datafiable$datafy$arity$1(o);
} else {
return clojure$core$protocols$Datafiable$datafy$dyn_36205(o);
}
}
});

(clojure.core.protocols.Datafiable["null"] = true);

(clojure.core.protocols.datafy["null"] = (function (_){
return null;
}));

(clojure.core.protocols.Datafiable["_"] = true);

(clojure.core.protocols.datafy["_"] = (function (o){
return o;
}));

/**
 * @interface
 */
clojure.core.protocols.Navigable = function(){};

var clojure$core$protocols$Navigable$nav$dyn_36206 = (function (coll,k,v){
var x__5373__auto__ = (((coll == null))?null:coll);
var m__5374__auto__ = (clojure.core.protocols.nav[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(coll,k,v) : m__5374__auto__.call(null,coll,k,v));
} else {
var m__5372__auto__ = (clojure.core.protocols.nav["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(coll,k,v) : m__5372__auto__.call(null,coll,k,v));
} else {
throw cljs.core.missing_protocol("Navigable.nav",coll);
}
}
});
/**
 * return (possibly transformed) v in the context of coll and k (a key/index or nil),
 * defaults to returning v.
 */
clojure.core.protocols.nav = (function clojure$core$protocols$nav(coll,k,v){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(coll),cljs.core.with_meta(new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5823__auto__){
var meta_impl__5375__auto__ = temp__5823__auto__;
return (meta_impl__5375__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__5375__auto__.cljs$core$IFn$_invoke$arity$3(coll,k,v) : meta_impl__5375__auto__.call(null,coll,k,v));
} else {
if((((!((coll == null)))) && ((!((coll.clojure$core$protocols$Navigable$nav$arity$3 == null)))))){
return coll.clojure$core$protocols$Navigable$nav$arity$3(coll,k,v);
} else {
return clojure$core$protocols$Navigable$nav$dyn_36206(coll,k,v);
}
}
});

(clojure.core.protocols.Navigable["_"] = true);

(clojure.core.protocols.nav["_"] = (function (_,___$1,x){
return x;
}));

//# sourceMappingURL=clojure.core.protocols.js.map
