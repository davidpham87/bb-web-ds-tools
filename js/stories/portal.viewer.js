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

$CLJS.SHADOW_ENV.setLoaded("portal.viewer.js");

goog.provide('portal.viewer');
portal.viewer.can_meta_QMARK_ = (function portal$viewer$can_meta_QMARK_(value){
if((!((value == null)))){
if((((value.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Set the default viewer for a value.
 * 
 *   Note: The return for values that don't support metadata may change in the
 *      future.
 */
portal.viewer.default$ = (function portal$viewer$default(var_args){
var G__36829 = arguments.length;
switch (G__36829) {
case 2:
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.default$.cljs$core$IFn$_invoke$arity$2 = (function (value,viewer){
if(portal.viewer.can_meta_QMARK_(value)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(value,cljs.core.assoc,new cljs.core.Keyword("portal.viewer","default","portal.viewer/default",-1985169620),viewer);
} else {
var G__36830 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.viewer","inspector","portal.viewer/inspector",1531405044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.viewer","default","portal.viewer/default",-1985169620),viewer], null),value], null);
return (portal.viewer.hiccup.cljs$core$IFn$_invoke$arity$1 ? portal.viewer.hiccup.cljs$core$IFn$_invoke$arity$1(G__36830) : portal.viewer.hiccup.call(null,G__36830));
}
}));

(portal.viewer.default$.cljs$core$IFn$_invoke$arity$3 = (function (value,viewer,opts){
if(portal.viewer.can_meta_QMARK_(value)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(value,cljs.core.assoc,new cljs.core.Keyword("portal.viewer","default","portal.viewer/default",-1985169620),viewer,viewer,opts);
} else {
var G__36831 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.viewer","inspector","portal.viewer/inspector",1531405044),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("portal.viewer","default","portal.viewer/default",-1985169620),viewer,viewer,opts]),value], null);
return (portal.viewer.hiccup.cljs$core$IFn$_invoke$arity$1 ? portal.viewer.hiccup.cljs$core$IFn$_invoke$arity$1(G__36831) : portal.viewer.hiccup.call(null,G__36831));
}
}));

(portal.viewer.default$.cljs$lang$maxFixedArity = 3);

portal.viewer.for$ = (function portal$viewer$for(value,opts){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(value,cljs.core.update,new cljs.core.Keyword("portal.viewer","for","portal.viewer/for",-1337827963),cljs.core.merge,opts);
});
/**
 * Default data viewer.
 */
portal.viewer.inspector = (function portal$viewer$inspector(var_args){
var G__36833 = arguments.length;
switch (G__36833) {
case 1:
return portal.viewer.inspector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.inspector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.inspector.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","inspector","portal.viewer/inspector",1531405044));
}));

(portal.viewer.inspector.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","inspector","portal.viewer/inspector",1531405044),opts);
}));

(portal.viewer.inspector.cljs$lang$maxFixedArity = 2);

/**
 * Viewer for datafied exceptions.
 */
portal.viewer.ex = (function portal$viewer$ex(var_args){
var G__36835 = arguments.length;
switch (G__36835) {
case 1:
return portal.viewer.ex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.ex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.ex.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","ex","portal.viewer/ex",-1415294777));
}));

(portal.viewer.ex.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","ex","portal.viewer/ex",-1415294777),opts);
}));

(portal.viewer.ex.cljs$lang$maxFixedArity = 2);

/**
 * Useful for conveying a value in a specific context (what/where/when).
 */
portal.viewer.log = (function portal$viewer$log(var_args){
var G__36837 = arguments.length;
switch (G__36837) {
case 1:
return portal.viewer.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.log.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","log","portal.viewer/log",-1592844920));
}));

(portal.viewer.log.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","log","portal.viewer/log",-1592844920),opts);
}));

(portal.viewer.log.cljs$lang$maxFixedArity = 2);

/**
 * Highlight HTTP method and status code for http request and response.
 */
portal.viewer.http = (function portal$viewer$http(var_args){
var G__36839 = arguments.length;
switch (G__36839) {
case 1:
return portal.viewer.http.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.http.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.http.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","http","portal.viewer/http",382081731));
}));

(portal.viewer.http.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","http","portal.viewer/http",382081731),opts);
}));

(portal.viewer.http.cljs$lang$maxFixedArity = 2);

/**
 * View clojure.test report output.
 */
portal.viewer.test_report = (function portal$viewer$test_report(var_args){
var G__36841 = arguments.length;
switch (G__36841) {
case 1:
return portal.viewer.test_report.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.test_report.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.test_report.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","test-report","portal.viewer/test-report",-768186138));
}));

(portal.viewer.test_report.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","test-report","portal.viewer/test-report",-768186138),opts);
}));

(portal.viewer.test_report.cljs$lang$maxFixedArity = 2);

/**
 * View hex / rgb / rgba colors
 */
portal.viewer.color = (function portal$viewer$color(var_args){
var G__36843 = arguments.length;
switch (G__36843) {
case 1:
return portal.viewer.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.color.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","color","portal.viewer/color",1011068529));
}));

(portal.viewer.color.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","color","portal.viewer/color",1011068529),opts);
}));

(portal.viewer.color.cljs$lang$maxFixedArity = 2);

/**
 * Interpret number as a duration in nanoseconds, round up to minutes.
 */
portal.viewer.duration_ns = (function portal$viewer$duration_ns(var_args){
var G__36845 = arguments.length;
switch (G__36845) {
case 1:
return portal.viewer.duration_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.duration_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.duration_ns.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","duration-ns","portal.viewer/duration-ns",-544214515));
}));

(portal.viewer.duration_ns.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","duration-ns","portal.viewer/duration-ns",-544214515),opts);
}));

(portal.viewer.duration_ns.cljs$lang$maxFixedArity = 2);

/**
 * Interpret number as a duration in milliseconds, round up to minutes.
 */
portal.viewer.duration_ms = (function portal$viewer$duration_ms(var_args){
var G__36847 = arguments.length;
switch (G__36847) {
case 1:
return portal.viewer.duration_ms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.duration_ms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.duration_ms.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","duration-ms","portal.viewer/duration-ms",1992522275));
}));

(portal.viewer.duration_ms.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","duration-ms","portal.viewer/duration-ms",1992522275),opts);
}));

(portal.viewer.duration_ms.cljs$lang$maxFixedArity = 2);

/**
 * View value printed via clojure.pprint/pprint.
 */
portal.viewer.pprint = (function portal$viewer$pprint(var_args){
var G__36849 = arguments.length;
switch (G__36849) {
case 1:
return portal.viewer.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.pprint.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","pprint","portal.viewer/pprint",1223883319));
}));

(portal.viewer.pprint.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","pprint","portal.viewer/pprint",1223883319),opts);
}));

(portal.viewer.pprint.cljs$lang$maxFixedArity = 2);

portal.viewer.vega_lite = (function portal$viewer$vega_lite(var_args){
var G__36851 = arguments.length;
switch (G__36851) {
case 1:
return portal.viewer.vega_lite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.vega_lite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.vega_lite.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","vega-lite","portal.viewer/vega-lite",-646682422));
}));

(portal.viewer.vega_lite.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","vega-lite","portal.viewer/vega-lite",-646682422),opts);
}));

(portal.viewer.vega_lite.cljs$lang$maxFixedArity = 2);

portal.viewer.vega = (function portal$viewer$vega(var_args){
var G__36853 = arguments.length;
switch (G__36853) {
case 1:
return portal.viewer.vega.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.vega.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.vega.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","vega","portal.viewer/vega",-1658560445));
}));

(portal.viewer.vega.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","vega","portal.viewer/vega",-1658560445),opts);
}));

(portal.viewer.vega.cljs$lang$maxFixedArity = 2);

/**
 * View value as a table. Supports sticky headers and keyboard navigation.
 * opts:
 * - columns: vector of keys to use as columns in table.
 */
portal.viewer.table = (function portal$viewer$table(var_args){
var G__36855 = arguments.length;
switch (G__36855) {
case 1:
return portal.viewer.table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.table.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","table","portal.viewer/table",-566304232));
}));

(portal.viewer.table.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","table","portal.viewer/table",-566304232),opts);
}));

(portal.viewer.table.cljs$lang$maxFixedArity = 2);

/**
 * For viewing highly nested values, such as hiccup.
 */
portal.viewer.tree = (function portal$viewer$tree(var_args){
var G__36857 = arguments.length;
switch (G__36857) {
case 1:
return portal.viewer.tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.tree.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","tree","portal.viewer/tree",-196786688));
}));

(portal.viewer.tree.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","tree","portal.viewer/tree",-196786688),opts);
}));

(portal.viewer.tree.cljs$lang$maxFixedArity = 2);

portal.viewer.pr_str = (function portal$viewer$pr_str(var_args){
var G__36859 = arguments.length;
switch (G__36859) {
case 1:
return portal.viewer.pr_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.pr_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.pr_str.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","pr-str","portal.viewer/pr-str",590154748));
}));

(portal.viewer.pr_str.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","pr-str","portal.viewer/pr-str",590154748),opts);
}));

(portal.viewer.pr_str.cljs$lang$maxFixedArity = 2);

/**
 * Render a hiccup value as html via reagent.
 */
portal.viewer.hiccup = (function portal$viewer$hiccup(var_args){
var G__36861 = arguments.length;
switch (G__36861) {
case 1:
return portal.viewer.hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.hiccup.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442));
}));

(portal.viewer.hiccup.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442),opts);
}));

(portal.viewer.hiccup.cljs$lang$maxFixedArity = 2);

portal.viewer.date_time = (function portal$viewer$date_time(var_args){
var G__36863 = arguments.length;
switch (G__36863) {
case 1:
return portal.viewer.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.date_time.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","date-time","portal.viewer/date-time",171991640));
}));

(portal.viewer.date_time.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","date-time","portal.viewer/date-time",171991640),opts);
}));

(portal.viewer.date_time.cljs$lang$maxFixedArity = 2);

/**
 * Diff a collection of values successively starting with the first two.
 */
portal.viewer.diff = (function portal$viewer$diff(var_args){
var G__36865 = arguments.length;
switch (G__36865) {
case 1:
return portal.viewer.diff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.diff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.diff.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","diff","portal.viewer/diff",2134386763));
}));

(portal.viewer.diff.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","diff","portal.viewer/diff",2134386763),opts);
}));

(portal.viewer.diff.cljs$lang$maxFixedArity = 2);

/**
 * Diff two strings.
 */
portal.viewer.diff_text = (function portal$viewer$diff_text(var_args){
var G__36867 = arguments.length;
switch (G__36867) {
case 1:
return portal.viewer.diff_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.diff_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.diff_text.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","diff-text","portal.viewer/diff-text",428542550));
}));

(portal.viewer.diff_text.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","diff-text","portal.viewer/diff-text",428542550),opts);
}));

(portal.viewer.diff_text.cljs$lang$maxFixedArity = 2);

/**
 * View interlacing of stdout, stderr and tap values. Useful for build output.
 */
portal.viewer.prepl = (function portal$viewer$prepl(var_args){
var G__36870 = arguments.length;
switch (G__36870) {
case 1:
return portal.viewer.prepl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.prepl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.prepl.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","prepl","portal.viewer/prepl",-669916449));
}));

(portal.viewer.prepl.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","prepl","portal.viewer/prepl",-669916449),opts);
}));

(portal.viewer.prepl.cljs$lang$maxFixedArity = 2);

/**
 * Parse string as markdown and view as html.
 */
portal.viewer.markdown = (function portal$viewer$markdown(var_args){
var G__36872 = arguments.length;
switch (G__36872) {
case 1:
return portal.viewer.markdown.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.markdown.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.markdown.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","markdown","portal.viewer/markdown",1212036437));
}));

(portal.viewer.markdown.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","markdown","portal.viewer/markdown",1212036437),opts);
}));

(portal.viewer.markdown.cljs$lang$maxFixedArity = 2);

/**
 * View binary data as a hexdump.
 */
portal.viewer.bin = (function portal$viewer$bin(var_args){
var G__36874 = arguments.length;
switch (G__36874) {
case 1:
return portal.viewer.bin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.bin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.bin.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","bin","portal.viewer/bin",-198388030));
}));

(portal.viewer.bin.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","bin","portal.viewer/bin",-198388030),opts);
}));

(portal.viewer.bin.cljs$lang$maxFixedArity = 2);

/**
 * View a binary value as an image.
 */
portal.viewer.image = (function portal$viewer$image(var_args){
var G__36881 = arguments.length;
switch (G__36881) {
case 1:
return portal.viewer.image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.image.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","image","portal.viewer/image",-61327676));
}));

(portal.viewer.image.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","image","portal.viewer/image",-61327676),opts);
}));

(portal.viewer.image.cljs$lang$maxFixedArity = 2);

/**
 * View string as a text file.
 */
portal.viewer.text = (function portal$viewer$text(var_args){
var G__36888 = arguments.length;
switch (G__36888) {
case 1:
return portal.viewer.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.text.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","text","portal.viewer/text",-1784810453));
}));

(portal.viewer.text.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","text","portal.viewer/text",-1784810453),opts);
}));

(portal.viewer.text.cljs$lang$maxFixedArity = 2);

/**
 * Parse a string as JSON. Will render error if parsing fails.
 */
portal.viewer.json = (function portal$viewer$json(var_args){
var G__36890 = arguments.length;
switch (G__36890) {
case 1:
return portal.viewer.json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.json.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","json","portal.viewer/json",1285652342));
}));

(portal.viewer.json.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","json","portal.viewer/json",1285652342),opts);
}));

(portal.viewer.json.cljs$lang$maxFixedArity = 2);

/**
 * Parse a string as a JWT. Will render error if parsing fails.
 */
portal.viewer.jwt = (function portal$viewer$jwt(var_args){
var G__36892 = arguments.length;
switch (G__36892) {
case 1:
return portal.viewer.jwt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.jwt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.jwt.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","jwt","portal.viewer/jwt",1501345373));
}));

(portal.viewer.jwt.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","jwt","portal.viewer/jwt",1501345373),opts);
}));

(portal.viewer.jwt.cljs$lang$maxFixedArity = 2);

/**
 * Parse a string as EDN. Will render error if parsing fails.
 */
portal.viewer.edn = (function portal$viewer$edn(var_args){
var G__36894 = arguments.length;
switch (G__36894) {
case 1:
return portal.viewer.edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.edn.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537));
}));

(portal.viewer.edn.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537),opts);
}));

(portal.viewer.edn.cljs$lang$maxFixedArity = 2);

/**
 * Parse a string as transit. Will render error if parsing fails.
 */
portal.viewer.transit = (function portal$viewer$transit(var_args){
var G__36897 = arguments.length;
switch (G__36897) {
case 1:
return portal.viewer.transit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.transit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.transit.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","transit","portal.viewer/transit",358861919));
}));

(portal.viewer.transit.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","transit","portal.viewer/transit",358861919),opts);
}));

(portal.viewer.transit.cljs$lang$maxFixedArity = 2);

/**
 * Parse a string as a CSV and use the table viewer by default.
 */
portal.viewer.csv = (function portal$viewer$csv(var_args){
var G__36902 = arguments.length;
switch (G__36902) {
case 1:
return portal.viewer.csv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.csv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.csv.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","csv","portal.viewer/csv",-1111405153));
}));

(portal.viewer.csv.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","csv","portal.viewer/csv",-1111405153),opts);
}));

(portal.viewer.csv.cljs$lang$maxFixedArity = 2);

portal.viewer.html = (function portal$viewer$html(var_args){
var G__36904 = arguments.length;
switch (G__36904) {
case 1:
return portal.viewer.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.html.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","html","portal.viewer/html",-994881845));
}));

(portal.viewer.html.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","html","portal.viewer/html",-994881845),opts);
}));

(portal.viewer.html.cljs$lang$maxFixedArity = 2);

portal.viewer.code = (function portal$viewer$code(var_args){
var G__36907 = arguments.length;
switch (G__36907) {
case 1:
return portal.viewer.code.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.code.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.code.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814));
}));

(portal.viewer.code.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814),opts);
}));

(portal.viewer.code.cljs$lang$maxFixedArity = 2);

portal.viewer.size_bytes = (function portal$viewer$size_bytes(var_args){
var G__36912 = arguments.length;
switch (G__36912) {
case 1:
return portal.viewer.size_bytes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.viewer.size_bytes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.viewer.size_bytes.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("portal.viewer","size-bytes","portal.viewer/size-bytes",2112317560));
}));

(portal.viewer.size_bytes.cljs$core$IFn$_invoke$arity$2 = (function (value,opts){
return portal.viewer.default$.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("portal.viewer","size-bytes","portal.viewer/size-bytes",2112317560),opts);
}));

(portal.viewer.size_bytes.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=portal.viewer.js.map
