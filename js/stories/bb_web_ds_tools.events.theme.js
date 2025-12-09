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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.events.theme.js");

goog.provide('bb_web_ds_tools.events.theme');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),(function (p__24837,p__24838){
var map__24839 = p__24837;
var map__24839__$1 = cljs.core.__destructure_map(map__24839);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24839__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24840 = p__24838;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24840,(0),null);
var theme_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24840,(1),null);
var theme = bb_web_ds_tools.utils.themes.get_theme(theme_name);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),theme_name),new cljs.core.Keyword("theme","apply","theme/apply",1476395918),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(theme_name),new cljs.core.Keyword(null,"data","data",-232669377),theme,new cljs.core.Keyword(null,"css-vars","css-vars",57967357),bb_web_ds_tools.theme.resolve_theme_colors(theme)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
})], 0));
re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (p__24845){
var map__24846 = p__24845;
var map__24846__$1 = cljs.core.__destructure_map(map__24846);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24846__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24846__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var css_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24846__$1,new cljs.core.Keyword(null,"css-vars","css-vars",57967357));
var root_24866 = document.documentElement;
var body_24867 = document.body;
var seq__24847_24868 = cljs.core.seq(css_vars);
var chunk__24848_24869 = null;
var count__24849_24870 = (0);
var i__24850_24871 = (0);
while(true){
if((i__24850_24871 < count__24849_24870)){
var vec__24857_24872 = chunk__24848_24869.cljs$core$IIndexed$_nth$arity$2(null,i__24850_24871);
var k_24873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24857_24872,(0),null);
var v_24874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24857_24872,(1),null);
root_24866.style.setProperty(k_24873,v_24874);


var G__24875 = seq__24847_24868;
var G__24876 = chunk__24848_24869;
var G__24877 = count__24849_24870;
var G__24878 = (i__24850_24871 + (1));
seq__24847_24868 = G__24875;
chunk__24848_24869 = G__24876;
count__24849_24870 = G__24877;
i__24850_24871 = G__24878;
continue;
} else {
var temp__5825__auto___24879 = cljs.core.seq(seq__24847_24868);
if(temp__5825__auto___24879){
var seq__24847_24880__$1 = temp__5825__auto___24879;
if(cljs.core.chunked_seq_QMARK_(seq__24847_24880__$1)){
var c__5548__auto___24881 = cljs.core.chunk_first(seq__24847_24880__$1);
var G__24882 = cljs.core.chunk_rest(seq__24847_24880__$1);
var G__24883 = c__5548__auto___24881;
var G__24884 = cljs.core.count(c__5548__auto___24881);
var G__24885 = (0);
seq__24847_24868 = G__24882;
chunk__24848_24869 = G__24883;
count__24849_24870 = G__24884;
i__24850_24871 = G__24885;
continue;
} else {
var vec__24860_24886 = cljs.core.first(seq__24847_24880__$1);
var k_24887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24860_24886,(0),null);
var v_24888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24860_24886,(1),null);
root_24866.style.setProperty(k_24887,v_24888);


var G__24889 = cljs.core.next(seq__24847_24880__$1);
var G__24890 = null;
var G__24891 = (0);
var G__24892 = (0);
seq__24847_24868 = G__24889;
chunk__24848_24869 = G__24890;
count__24849_24870 = G__24891;
i__24850_24871 = G__24892;
continue;
}
} else {
}
}
break;
}

body_24867.style.setProperty("background-color","var(--bg-page)");

body_24867.style.setProperty("color","var(--text-primary)");

try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme(name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),"vs-dark",new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),new cljs.core.Keyword("portal.colors","border","portal.colors/border",-165446507).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data)], null)], null)));

return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setTheme(name);
}catch (e24863){if((e24863 instanceof Error)){
var e = e24863;
return console.error("Failed to apply Monaco theme",e);
} else {
throw e24863;

}
}}));

//# sourceMappingURL=bb_web_ds_tools.events.theme.js.map
