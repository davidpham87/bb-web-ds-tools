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
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),(function (p__24856,p__24857){
var map__24858 = p__24856;
var map__24858__$1 = cljs.core.__destructure_map(map__24858);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24858__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24859 = p__24857;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24859,(0),null);
var theme_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24859,(1),null);
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
re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (p__24862){
var map__24863 = p__24862;
var map__24863__$1 = cljs.core.__destructure_map(map__24863);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24863__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24863__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var css_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24863__$1,new cljs.core.Keyword(null,"css-vars","css-vars",57967357));
var root_24886 = document.documentElement;
var body_24887 = document.body;
var seq__24864_24888 = cljs.core.seq(css_vars);
var chunk__24865_24889 = null;
var count__24866_24890 = (0);
var i__24867_24891 = (0);
while(true){
if((i__24867_24891 < count__24866_24890)){
var vec__24878_24892 = chunk__24865_24889.cljs$core$IIndexed$_nth$arity$2(null,i__24867_24891);
var k_24893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24878_24892,(0),null);
var v_24894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24878_24892,(1),null);
root_24886.style.setProperty(k_24893,v_24894);


var G__24895 = seq__24864_24888;
var G__24896 = chunk__24865_24889;
var G__24897 = count__24866_24890;
var G__24898 = (i__24867_24891 + (1));
seq__24864_24888 = G__24895;
chunk__24865_24889 = G__24896;
count__24866_24890 = G__24897;
i__24867_24891 = G__24898;
continue;
} else {
var temp__5825__auto___24899 = cljs.core.seq(seq__24864_24888);
if(temp__5825__auto___24899){
var seq__24864_24900__$1 = temp__5825__auto___24899;
if(cljs.core.chunked_seq_QMARK_(seq__24864_24900__$1)){
var c__5548__auto___24901 = cljs.core.chunk_first(seq__24864_24900__$1);
var G__24902 = cljs.core.chunk_rest(seq__24864_24900__$1);
var G__24903 = c__5548__auto___24901;
var G__24904 = cljs.core.count(c__5548__auto___24901);
var G__24905 = (0);
seq__24864_24888 = G__24902;
chunk__24865_24889 = G__24903;
count__24866_24890 = G__24904;
i__24867_24891 = G__24905;
continue;
} else {
var vec__24881_24906 = cljs.core.first(seq__24864_24900__$1);
var k_24907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24881_24906,(0),null);
var v_24908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24881_24906,(1),null);
root_24886.style.setProperty(k_24907,v_24908);


var G__24909 = cljs.core.next(seq__24864_24900__$1);
var G__24910 = null;
var G__24911 = (0);
var G__24912 = (0);
seq__24864_24888 = G__24909;
chunk__24865_24889 = G__24910;
count__24866_24890 = G__24911;
i__24867_24891 = G__24912;
continue;
}
} else {
}
}
break;
}

body_24887.style.setProperty("background-color","var(--bg-page)");

body_24887.style.setProperty("color","var(--text-primary)");

try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme(name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),bb_web_ds_tools.events.theme.get_base_theme(new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),new cljs.core.Keyword("portal.colors","border","portal.colors/border",-165446507).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data)], null)], null)));

return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setTheme(name);
}catch (e24884){if((e24884 instanceof Error)){
var e = e24884;
return console.error("Failed to apply Monaco theme",e);
} else {
throw e24884;

}
}}));

//# sourceMappingURL=bb_web_ds_tools.events.theme.js.map
