var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./reitit.coercion.js");
require("./reitit.core.js");
require("./reitit.impl.js");
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

$CLJS.SHADOW_ENV.setLoaded("reitit.frontend.js");

goog.provide('reitit.frontend');
reitit.frontend.query_param = (function reitit$frontend$query_param(q,k){
var vs = q.getValues(k);
if((vs.length < (2))){
return (vs[(0)]);
} else {
return cljs.core.vec(vs);
}
});
/**
 * Given goog.Uri, read query parameters into a Clojure map.
 */
reitit.frontend.query_params = (function reitit$frontend$query_params(uri){
var q = uri.getQueryData();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,(function (p1__36777_SHARP_){
return reitit.frontend.query_param(q,p1__36777_SHARP_);
})),q.getKeys()));
});
/**
 * Given Reitit-frontend path, update the query params
 *   with given function and arguments.
 * 
 *   Note: coercion is not applied to the query params
 */
reitit.frontend.set_query_params = (function reitit$frontend$set_query_params(path,new_query_or_update_fn){
var uri = goog.Uri.parse(path);
var new_query = ((cljs.core.fn_QMARK_(new_query_or_update_fn))?(function (){var G__36781 = reitit.frontend.query_params(uri);
return (new_query_or_update_fn.cljs$core$IFn$_invoke$arity$1 ? new_query_or_update_fn.cljs$core$IFn$_invoke$arity$1(G__36781) : new_query_or_update_fn.call(null,G__36781));
})():new_query_or_update_fn);
uri.setQueryData(goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(new_query)));

return uri.toString();
});
/**
 * Create routing path from given match and optional query-string map and
 *   optional fragment string.
 */
reitit.frontend.match__GT_path = (function reitit$frontend$match__GT_path(var_args){
var G__36784 = arguments.length;
switch (G__36784) {
case 1:
return reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$3(match,null,null);
}));

(reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
return reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$3(match,query_params,null);
}));

(reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (match,query_params,fragment){
var temp__5825__auto__ = reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,query_params);
if(cljs.core.truth_(temp__5825__auto__)){
var path = temp__5825__auto__;
var G__36785 = path;
if(cljs.core.truth_((function (){var and__5023__auto__ = fragment;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(fragment);
} else {
return and__5023__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36785),"#",reitit.impl.form_encode(fragment)].join('');
} else {
return G__36785;
}
} else {
return null;
}
}));

(reitit.frontend.match__GT_path.cljs$lang$maxFixedArity = 3);

/**
 * Given routing tree and current path, return match with possibly
 *   coerced parameters. Return nil if no match found.
 * 
 *   :on-coercion-error - a sideeffecting fn of `match exception -> nil`
 */
reitit.frontend.match_by_path = (function reitit$frontend$match_by_path(var_args){
var G__36788 = arguments.length;
switch (G__36788) {
case 2:
return reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2 = (function (router,path){
return reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$3(router,path,null);
}));

(reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$3 = (function (router,path,p__36789){
var map__36790 = p__36789;
var map__36790__$1 = cljs.core.__destructure_map(map__36790);
var on_coercion_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36790__$1,new cljs.core.Keyword(null,"on-coercion-error","on-coercion-error",-970787));
var uri = goog.Uri.parse(path);
var coerce_BANG_ = (cljs.core.truth_(on_coercion_error)?(function (match){
try{return reitit.coercion.coerce_BANG_(match);
}catch (e36791){if((e36791 instanceof Error)){
var e = e36791;
(on_coercion_error.cljs$core$IFn$_invoke$arity$2 ? on_coercion_error.cljs$core$IFn$_invoke$arity$2(match,e) : on_coercion_error.call(null,match,e));

throw e;
} else {
throw e36791;

}
}}):reitit.coercion.coerce_BANG_);
var temp__5823__auto__ = reitit.core.match_by_path(router,uri.getPath());
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
var q = reitit.frontend.query_params(uri);
var fragment = (cljs.core.truth_(uri.hasFragment())?uri.getFragment():null);
var match__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(match,new cljs.core.Keyword(null,"query-params","query-params",900640534),q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fragment","fragment",826775688),fragment], 0));
var parameters = (function (){var or__5025__auto__ = (coerce_BANG_.cljs$core$IFn$_invoke$arity$1 ? coerce_BANG_.cljs$core$IFn$_invoke$arity$1(match__$1) : coerce_BANG_.call(null,match__$1));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match__$1),new cljs.core.Keyword(null,"query","query",-1288509510),q,new cljs.core.Keyword(null,"fragment","fragment",826775688),fragment], null);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),parameters);
} else {
return null;
}
}));

(reitit.frontend.match_by_path.cljs$lang$maxFixedArity = 3);

/**
 * Given a router, route name and optionally path-parameters,
 *   will return a Match (exact match), PartialMatch (missing path-parameters)
 *   or `nil` (no match).
 */
reitit.frontend.match_by_name = (function reitit$frontend$match_by_name(var_args){
var G__36794 = arguments.length;
switch (G__36794) {
case 2:
return reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (router,name){
return reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(router,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (router,name,path_params){
return reitit.core.match_by_name(router,name,path_params);
}));

(reitit.frontend.match_by_name.cljs$lang$maxFixedArity = 3);

/**
 * Create a `reitit.core.router` from raw route data and optionally an options map.
 *   Enables request coercion. See [[reitit.core/router]] for details on options.
 */
reitit.frontend.router = (function reitit$frontend$router(var_args){
var G__36796 = arguments.length;
switch (G__36796) {
case 1:
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),reitit.coercion.compile_request_coercers], null),opts], 0)));
}));

(reitit.frontend.router.cljs$lang$maxFixedArity = 2);

/**
 * Logs problems using console.warn
 */
reitit.frontend.match_by_name_BANG_ = (function reitit$frontend$match_by_name_BANG_(var_args){
var G__36800 = arguments.length;
switch (G__36800) {
case 2:
return reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (router,name){
return reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(router,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (router,name,path_params){
var temp__5823__auto__ = reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(router,name,path_params);
if(cljs.core.truth_(temp__5823__auto__)){
var match = temp__5823__auto__;
if(reitit.core.partial_match_QMARK_(match)){
if(cljs.core.every_QMARK_((function (p1__36798_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__36798_SHARP_);
}),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match))){
return match;
} else {
var defined = cljs.core.set(cljs.core.keys(path_params));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),defined);
console.warn("missing path-params for route",name,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"missing","missing",362507769),missing,new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match)], null));

return null;
}
} else {
return match;
}
} else {
console.warn("missing route",name);

return null;
}
}));

(reitit.frontend.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=reitit.frontend.js.map
