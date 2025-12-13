goog.provide('bb_web_ds_tools.events.theme');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),(function (p__28682,p__28683){
var map__28684 = p__28682;
var map__28684__$1 = cljs.core.__destructure_map(map__28684);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28684__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28685 = p__28683;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28685,(0),null);
var theme_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28685,(1),null);
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
re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (p__28693){
var map__28694 = p__28693;
var map__28694__$1 = cljs.core.__destructure_map(map__28694);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var css_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,new cljs.core.Keyword(null,"css-vars","css-vars",57967357));
var root_28716 = document.documentElement;
var body_28717 = document.body;
var seq__28696_28718 = cljs.core.seq(css_vars);
var chunk__28697_28719 = null;
var count__28698_28720 = (0);
var i__28699_28721 = (0);
while(true){
if((i__28699_28721 < count__28698_28720)){
var vec__28708_28722 = chunk__28697_28719.cljs$core$IIndexed$_nth$arity$2(null,i__28699_28721);
var k_28723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28708_28722,(0),null);
var v_28724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28708_28722,(1),null);
root_28716.style.setProperty(k_28723,v_28724);


var G__28725 = seq__28696_28718;
var G__28726 = chunk__28697_28719;
var G__28727 = count__28698_28720;
var G__28728 = (i__28699_28721 + (1));
seq__28696_28718 = G__28725;
chunk__28697_28719 = G__28726;
count__28698_28720 = G__28727;
i__28699_28721 = G__28728;
continue;
} else {
var temp__5825__auto___28729 = cljs.core.seq(seq__28696_28718);
if(temp__5825__auto___28729){
var seq__28696_28730__$1 = temp__5825__auto___28729;
if(cljs.core.chunked_seq_QMARK_(seq__28696_28730__$1)){
var c__5548__auto___28731 = cljs.core.chunk_first(seq__28696_28730__$1);
var G__28732 = cljs.core.chunk_rest(seq__28696_28730__$1);
var G__28733 = c__5548__auto___28731;
var G__28734 = cljs.core.count(c__5548__auto___28731);
var G__28735 = (0);
seq__28696_28718 = G__28732;
chunk__28697_28719 = G__28733;
count__28698_28720 = G__28734;
i__28699_28721 = G__28735;
continue;
} else {
var vec__28711_28736 = cljs.core.first(seq__28696_28730__$1);
var k_28737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28711_28736,(0),null);
var v_28738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28711_28736,(1),null);
root_28716.style.setProperty(k_28737,v_28738);


var G__28739 = cljs.core.next(seq__28696_28730__$1);
var G__28740 = null;
var G__28741 = (0);
var G__28742 = (0);
seq__28696_28718 = G__28739;
chunk__28697_28719 = G__28740;
count__28698_28720 = G__28741;
i__28699_28721 = G__28742;
continue;
}
} else {
}
}
break;
}

body_28717.style.setProperty("background-color","var(--bg-page)");

body_28717.style.setProperty("color","var(--text-primary)");

try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme(name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),bb_web_ds_tools.events.theme.get_base_theme(new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),new cljs.core.Keyword("portal.colors","border","portal.colors/border",-165446507).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data)], null)], null)));

return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setTheme(name);
}catch (e28714){if((e28714 instanceof Error)){
var e = e28714;
return console.error("Failed to apply Monaco theme",e);
} else {
throw e28714;

}
}}));

//# sourceMappingURL=bb_web_ds_tools.events.theme.js.map
