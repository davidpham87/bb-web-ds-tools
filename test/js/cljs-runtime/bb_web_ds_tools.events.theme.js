goog.provide('bb_web_ds_tools.events.theme');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),(function (p__28691,p__28692){
var map__28693 = p__28691;
var map__28693__$1 = cljs.core.__destructure_map(map__28693);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28693__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28694 = p__28692;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28694,(0),null);
var theme_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28694,(1),null);
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
re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (p__28699){
var map__28700 = p__28699;
var map__28700__$1 = cljs.core.__destructure_map(map__28700);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28700__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28700__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var css_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28700__$1,new cljs.core.Keyword(null,"css-vars","css-vars",57967357));
var root_28721 = document.documentElement;
var body_28722 = document.body;
var seq__28701_28723 = cljs.core.seq(css_vars);
var chunk__28702_28724 = null;
var count__28703_28725 = (0);
var i__28704_28726 = (0);
while(true){
if((i__28704_28726 < count__28703_28725)){
var vec__28713_28727 = chunk__28702_28724.cljs$core$IIndexed$_nth$arity$2(null,i__28704_28726);
var k_28728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28713_28727,(0),null);
var v_28729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28713_28727,(1),null);
root_28721.style.setProperty(k_28728,v_28729);


var G__28730 = seq__28701_28723;
var G__28731 = chunk__28702_28724;
var G__28732 = count__28703_28725;
var G__28733 = (i__28704_28726 + (1));
seq__28701_28723 = G__28730;
chunk__28702_28724 = G__28731;
count__28703_28725 = G__28732;
i__28704_28726 = G__28733;
continue;
} else {
var temp__5825__auto___28734 = cljs.core.seq(seq__28701_28723);
if(temp__5825__auto___28734){
var seq__28701_28736__$1 = temp__5825__auto___28734;
if(cljs.core.chunked_seq_QMARK_(seq__28701_28736__$1)){
var c__5548__auto___28737 = cljs.core.chunk_first(seq__28701_28736__$1);
var G__28739 = cljs.core.chunk_rest(seq__28701_28736__$1);
var G__28740 = c__5548__auto___28737;
var G__28741 = cljs.core.count(c__5548__auto___28737);
var G__28742 = (0);
seq__28701_28723 = G__28739;
chunk__28702_28724 = G__28740;
count__28703_28725 = G__28741;
i__28704_28726 = G__28742;
continue;
} else {
var vec__28716_28743 = cljs.core.first(seq__28701_28736__$1);
var k_28744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716_28743,(0),null);
var v_28745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28716_28743,(1),null);
root_28721.style.setProperty(k_28744,v_28745);


var G__28747 = cljs.core.next(seq__28701_28736__$1);
var G__28748 = null;
var G__28749 = (0);
var G__28750 = (0);
seq__28701_28723 = G__28747;
chunk__28702_28724 = G__28748;
count__28703_28725 = G__28749;
i__28704_28726 = G__28750;
continue;
}
} else {
}
}
break;
}

body_28722.style.setProperty("background-color","var(--bg-page)");

body_28722.style.setProperty("color","var(--text-primary)");

try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme(name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),bb_web_ds_tools.events.theme.get_base_theme(new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),new cljs.core.Keyword("portal.colors","border","portal.colors/border",-165446507).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data)], null)], null)));

return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setTheme(name);
}catch (e28719){if((e28719 instanceof Error)){
var e = e28719;
return console.error("Failed to apply Monaco theme",e);
} else {
throw e28719;

}
}}));

//# sourceMappingURL=bb_web_ds_tools.events.theme.js.map
