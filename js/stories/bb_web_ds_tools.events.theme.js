var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./re_frame.core.js");
require("./bb_web_ds_tools.utils.themes.js");
require("./bb_web_ds_tools.theme.js");
require("./shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.events.theme.js");

goog.provide('bb_web_ds_tools.events.theme');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),(function (p__20794,p__20795){
var map__20796 = p__20794;
var map__20796__$1 = cljs.core.__destructure_map(map__20796);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__20797 = p__20795;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20797,(0),null);
var theme_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20797,(1),null);
var theme = bb_web_ds_tools.utils.themes.get_theme(theme_name);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),theme_name),new cljs.core.Keyword("theme","apply","theme/apply",1476395918),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(theme_name),new cljs.core.Keyword(null,"data","data",-232669377),theme,new cljs.core.Keyword(null,"css-vars","css-vars",57967357),bb_web_ds_tools.theme.resolve_theme_colors(theme)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
})], 0));
bb_web_ds_tools.events.theme.get_base_theme = (function bb_web_ds_tools$events$theme$get_base_theme(bg_color){
var r = parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(bg_color,(1),(3)),(16));
var g = parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(bg_color,(3),(5)),(16));
var b = parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(bg_color,(5),(7)),(16));
var brightness = ((((r * (299)) + (g * (587))) + (b * (114))) / (1000));
if((brightness > (128))){
return "vs";
} else {
return "vs-dark";
}
});
re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (p__20804){
var map__20805 = p__20804;
var map__20805__$1 = cljs.core.__destructure_map(map__20805);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20805__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var css_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20805__$1,new cljs.core.Keyword(null,"css-vars","css-vars",57967357));
var root_20824 = document.documentElement;
var body_20825 = document.body;
var seq__20806_20826 = cljs.core.seq(css_vars);
var chunk__20807_20827 = null;
var count__20808_20828 = (0);
var i__20809_20829 = (0);
while(true){
if((i__20809_20829 < count__20808_20828)){
var vec__20816_20830 = chunk__20807_20827.cljs$core$IIndexed$_nth$arity$2(null,i__20809_20829);
var k_20831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20816_20830,(0),null);
var v_20832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20816_20830,(1),null);
root_20824.style.setProperty(k_20831,v_20832);


var G__20833 = seq__20806_20826;
var G__20834 = chunk__20807_20827;
var G__20835 = count__20808_20828;
var G__20836 = (i__20809_20829 + (1));
seq__20806_20826 = G__20833;
chunk__20807_20827 = G__20834;
count__20808_20828 = G__20835;
i__20809_20829 = G__20836;
continue;
} else {
var temp__5825__auto___20837 = cljs.core.seq(seq__20806_20826);
if(temp__5825__auto___20837){
var seq__20806_20838__$1 = temp__5825__auto___20837;
if(cljs.core.chunked_seq_QMARK_(seq__20806_20838__$1)){
var c__5548__auto___20839 = cljs.core.chunk_first(seq__20806_20838__$1);
var G__20840 = cljs.core.chunk_rest(seq__20806_20838__$1);
var G__20841 = c__5548__auto___20839;
var G__20842 = cljs.core.count(c__5548__auto___20839);
var G__20843 = (0);
seq__20806_20826 = G__20840;
chunk__20807_20827 = G__20841;
count__20808_20828 = G__20842;
i__20809_20829 = G__20843;
continue;
} else {
var vec__20819_20844 = cljs.core.first(seq__20806_20838__$1);
var k_20845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20819_20844,(0),null);
var v_20846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20819_20844,(1),null);
root_20824.style.setProperty(k_20845,v_20846);


var G__20847 = cljs.core.next(seq__20806_20838__$1);
var G__20848 = null;
var G__20849 = (0);
var G__20850 = (0);
seq__20806_20826 = G__20847;
chunk__20807_20827 = G__20848;
count__20808_20828 = G__20849;
i__20809_20829 = G__20850;
continue;
}
} else {
}
}
break;
}

body_20825.style.setProperty("background-color","var(--bg-page)");

body_20825.style.setProperty("color","var(--text-primary)");

try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme(name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),bb_web_ds_tools.events.theme.get_base_theme(new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),new cljs.core.Keyword("portal.colors","border","portal.colors/border",-165446507).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data)], null)], null)));

return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setTheme(name);
}catch (e20822){if((e20822 instanceof Error)){
var e = e20822;
return console.error("Failed to apply Monaco theme",e);
} else {
throw e20822;

}
}}));

//# sourceMappingURL=bb_web_ds_tools.events.theme.js.map
