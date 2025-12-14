goog.provide('bb_web_ds_tools.events.theme');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),(function (p__28695,p__28696){
var map__28697 = p__28695;
var map__28697__$1 = cljs.core.__destructure_map(map__28697);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28697__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28698 = p__28696;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28698,(0),null);
var theme_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28698,(1),null);
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
re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (p__28704){
var map__28705 = p__28704;
var map__28705__$1 = cljs.core.__destructure_map(map__28705);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28705__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28705__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var css_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28705__$1,new cljs.core.Keyword(null,"css-vars","css-vars",57967357));
var root_28727 = document.documentElement;
var body_28728 = document.body;
var seq__28706_28729 = cljs.core.seq(css_vars);
var chunk__28707_28730 = null;
var count__28708_28731 = (0);
var i__28709_28732 = (0);
while(true){
if((i__28709_28732 < count__28708_28731)){
var vec__28717_28733 = chunk__28707_28730.cljs$core$IIndexed$_nth$arity$2(null,i__28709_28732);
var k_28734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28717_28733,(0),null);
var v_28735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28717_28733,(1),null);
root_28727.style.setProperty(k_28734,v_28735);


var G__28736 = seq__28706_28729;
var G__28737 = chunk__28707_28730;
var G__28738 = count__28708_28731;
var G__28739 = (i__28709_28732 + (1));
seq__28706_28729 = G__28736;
chunk__28707_28730 = G__28737;
count__28708_28731 = G__28738;
i__28709_28732 = G__28739;
continue;
} else {
var temp__5825__auto___28740 = cljs.core.seq(seq__28706_28729);
if(temp__5825__auto___28740){
var seq__28706_28741__$1 = temp__5825__auto___28740;
if(cljs.core.chunked_seq_QMARK_(seq__28706_28741__$1)){
var c__5548__auto___28742 = cljs.core.chunk_first(seq__28706_28741__$1);
var G__28743 = cljs.core.chunk_rest(seq__28706_28741__$1);
var G__28744 = c__5548__auto___28742;
var G__28745 = cljs.core.count(c__5548__auto___28742);
var G__28746 = (0);
seq__28706_28729 = G__28743;
chunk__28707_28730 = G__28744;
count__28708_28731 = G__28745;
i__28709_28732 = G__28746;
continue;
} else {
var vec__28720_28747 = cljs.core.first(seq__28706_28741__$1);
var k_28748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28720_28747,(0),null);
var v_28749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28720_28747,(1),null);
root_28727.style.setProperty(k_28748,v_28749);


var G__28750 = cljs.core.next(seq__28706_28741__$1);
var G__28751 = null;
var G__28752 = (0);
var G__28753 = (0);
seq__28706_28729 = G__28750;
chunk__28707_28730 = G__28751;
count__28708_28731 = G__28752;
i__28709_28732 = G__28753;
continue;
}
} else {
}
}
break;
}

body_28728.style.setProperty("background-color","var(--bg-page)");

body_28728.style.setProperty("color","var(--text-primary)");

try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme(name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),bb_web_ds_tools.events.theme.get_base_theme(new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),new cljs.core.Keyword("portal.colors","border","portal.colors/border",-165446507).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data)], null)], null)));

return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setTheme(name);
}catch (e28723){if((e28723 instanceof Error)){
var e = e28723;
return console.error("Failed to apply Monaco theme",e);
} else {
throw e28723;

}
}}));

//# sourceMappingURL=bb_web_ds_tools.events.theme.js.map
