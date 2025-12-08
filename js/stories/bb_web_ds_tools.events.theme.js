var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./re_frame.core.js");
require("./bb_web_ds_tools.utils.themes.js");
require("./bb_web_ds_tools.theme.js");
require("./shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.events.theme.js");

goog.provide('bb_web_ds_tools.events.theme');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),(function (p__24861,p__24862){
var map__24863 = p__24861;
var map__24863__$1 = cljs.core.__destructure_map(map__24863);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24863__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24864 = p__24862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24864,(0),null);
var theme_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24864,(1),null);
var theme = bb_web_ds_tools.utils.themes.get_theme(theme_name);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),theme_name),new cljs.core.Keyword("theme","apply","theme/apply",1476395918),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(theme_name),new cljs.core.Keyword(null,"data","data",-232669377),theme,new cljs.core.Keyword(null,"css-vars","css-vars",57967357),bb_web_ds_tools.theme.resolve_theme_colors(theme)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
})], 0));
re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (p__24870){
var map__24871 = p__24870;
var map__24871__$1 = cljs.core.__destructure_map(map__24871);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24871__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24871__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var css_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24871__$1,new cljs.core.Keyword(null,"css-vars","css-vars",57967357));
var root_24900 = document.documentElement;
var body_24901 = document.body;
var seq__24872_24902 = cljs.core.seq(css_vars);
var chunk__24873_24903 = null;
var count__24874_24904 = (0);
var i__24875_24905 = (0);
while(true){
if((i__24875_24905 < count__24874_24904)){
var vec__24888_24907 = chunk__24873_24903.cljs$core$IIndexed$_nth$arity$2(null,i__24875_24905);
var k_24908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24888_24907,(0),null);
var v_24909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24888_24907,(1),null);
root_24900.style.setProperty(k_24908,v_24909);


var G__24919 = seq__24872_24902;
var G__24920 = chunk__24873_24903;
var G__24921 = count__24874_24904;
var G__24922 = (i__24875_24905 + (1));
seq__24872_24902 = G__24919;
chunk__24873_24903 = G__24920;
count__24874_24904 = G__24921;
i__24875_24905 = G__24922;
continue;
} else {
var temp__5825__auto___24923 = cljs.core.seq(seq__24872_24902);
if(temp__5825__auto___24923){
var seq__24872_24924__$1 = temp__5825__auto___24923;
if(cljs.core.chunked_seq_QMARK_(seq__24872_24924__$1)){
var c__5548__auto___24925 = cljs.core.chunk_first(seq__24872_24924__$1);
var G__24926 = cljs.core.chunk_rest(seq__24872_24924__$1);
var G__24927 = c__5548__auto___24925;
var G__24928 = cljs.core.count(c__5548__auto___24925);
var G__24929 = (0);
seq__24872_24902 = G__24926;
chunk__24873_24903 = G__24927;
count__24874_24904 = G__24928;
i__24875_24905 = G__24929;
continue;
} else {
var vec__24891_24930 = cljs.core.first(seq__24872_24924__$1);
var k_24931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24891_24930,(0),null);
var v_24932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24891_24930,(1),null);
root_24900.style.setProperty(k_24931,v_24932);


var G__24933 = cljs.core.next(seq__24872_24924__$1);
var G__24934 = null;
var G__24935 = (0);
var G__24936 = (0);
seq__24872_24902 = G__24933;
chunk__24873_24903 = G__24934;
count__24874_24904 = G__24935;
i__24875_24905 = G__24936;
continue;
}
} else {
}
}
break;
}

body_24901.style.setProperty("background-color","var(--bg-page)");

body_24901.style.setProperty("color","var(--text-primary)");

try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme(name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),"vs-dark",new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),new cljs.core.Keyword("portal.colors","border","portal.colors/border",-165446507).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data)], null)], null)));

return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setTheme(name);
}catch (e24897){if((e24897 instanceof Error)){
var e = e24897;
return console.error("Failed to apply Monaco theme",e);
} else {
throw e24897;

}
}}));

//# sourceMappingURL=bb_web_ds_tools.events.theme.js.map
