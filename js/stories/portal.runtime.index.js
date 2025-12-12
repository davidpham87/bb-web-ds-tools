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

$CLJS.SHADOW_ENV.setLoaded("portal.runtime.index.js");

goog.provide('portal.runtime.index');
portal.runtime.index.html = (function portal$runtime$index$html(p__37001){
var map__37002 = p__37001;
var map__37002__$1 = cljs.core.__destructure_map(map__37002);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37002__$1,new cljs.core.Keyword(null,"name","name",1843675177),"portal");
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37002__$1,new cljs.core.Keyword(null,"version","version",425292698),"0.62.0");
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37002__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37002__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37002__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var code_url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37002__$1,new cljs.core.Keyword(null,"code-url","code-url",532390406),"main.js");
var platform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37002__$1,new cljs.core.Keyword(null,"platform","platform",-1086422114),"node");
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37002__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
return ["<!DOCTYPE html>","<html lang=\"en\">","<head>","<title>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(platform)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version),"</title>","<meta charset='UTF-8' />","<meta name='viewport' content='width=device-width, initial-scale=1' />","<meta name='theme-color' content='' />","<link rel=\"icon\" href=\"/icon.svg\">","</head>","<body style=\"margin: 0; padding: 0; height: 100vh\">","<div id=\"root\"></div>","<script>",(cljs.core.truth_(host)?["window.PORTAL_HOST    = ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('')], 0)),";"].join(''):null),(cljs.core.truth_(session_id)?["window.PORTAL_SESSION = ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([session_id], 0)),";"].join(''):null),"</script>","<script src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_url),"\"></script>",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"test","test",577538877)))?"<script src=\"wait.js\"></script>":null),"</body>","</html>"].join('');
});

//# sourceMappingURL=portal.runtime.index.js.map
