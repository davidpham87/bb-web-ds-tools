goog.provide('bb_web_ds_tools.events.theme');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),(function (p__28641,p__28642){
var map__28643 = p__28641;
var map__28643__$1 = cljs.core.__destructure_map(map__28643);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28643__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28644 = p__28642;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28644,(0),null);
var theme_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28644,(1),null);
var theme = bb_web_ds_tools.utils.themes.get_theme(theme_name);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),theme_name),new cljs.core.Keyword("theme","apply","theme/apply",1476395918),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(theme_name),new cljs.core.Keyword(null,"data","data",-232669377),theme,new cljs.core.Keyword(null,"css-vars","css-vars",57967357),bb_web_ds_tools.theme.resolve_theme_colors(theme)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
})], 0));
re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (p__28647){
var map__28648 = p__28647;
var map__28648__$1 = cljs.core.__destructure_map(map__28648);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28648__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28648__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var css_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28648__$1,new cljs.core.Keyword(null,"css-vars","css-vars",57967357));
var root_28671 = document.documentElement;
var body_28672 = document.body;
var seq__28649_28673 = cljs.core.seq(css_vars);
var chunk__28650_28674 = null;
var count__28651_28675 = (0);
var i__28652_28676 = (0);
while(true){
if((i__28652_28676 < count__28651_28675)){
var vec__28660_28677 = chunk__28650_28674.cljs$core$IIndexed$_nth$arity$2(null,i__28652_28676);
var k_28678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28660_28677,(0),null);
var v_28679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28660_28677,(1),null);
root_28671.style.setProperty(k_28678,v_28679);


var G__28680 = seq__28649_28673;
var G__28681 = chunk__28650_28674;
var G__28682 = count__28651_28675;
var G__28683 = (i__28652_28676 + (1));
seq__28649_28673 = G__28680;
chunk__28650_28674 = G__28681;
count__28651_28675 = G__28682;
i__28652_28676 = G__28683;
continue;
} else {
var temp__5825__auto___28684 = cljs.core.seq(seq__28649_28673);
if(temp__5825__auto___28684){
var seq__28649_28685__$1 = temp__5825__auto___28684;
if(cljs.core.chunked_seq_QMARK_(seq__28649_28685__$1)){
var c__5548__auto___28686 = cljs.core.chunk_first(seq__28649_28685__$1);
var G__28687 = cljs.core.chunk_rest(seq__28649_28685__$1);
var G__28688 = c__5548__auto___28686;
var G__28689 = cljs.core.count(c__5548__auto___28686);
var G__28690 = (0);
seq__28649_28673 = G__28687;
chunk__28650_28674 = G__28688;
count__28651_28675 = G__28689;
i__28652_28676 = G__28690;
continue;
} else {
var vec__28664_28691 = cljs.core.first(seq__28649_28685__$1);
var k_28692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28664_28691,(0),null);
var v_28693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28664_28691,(1),null);
root_28671.style.setProperty(k_28692,v_28693);


var G__28695 = cljs.core.next(seq__28649_28685__$1);
var G__28696 = null;
var G__28697 = (0);
var G__28698 = (0);
seq__28649_28673 = G__28695;
chunk__28650_28674 = G__28696;
count__28651_28675 = G__28697;
i__28652_28676 = G__28698;
continue;
}
} else {
}
}
break;
}

body_28672.style.setProperty("background-color","var(--bg-page)");

body_28672.style.setProperty("color","var(--text-primary)");

try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme(name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),"vs-dark",new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),new cljs.core.Keyword("portal.colors","border","portal.colors/border",-165446507).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data)], null)], null)));

return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setTheme(name);
}catch (e28668){if((e28668 instanceof Error)){
var e = e28668;
return console.error("Failed to apply Monaco theme",e);
} else {
throw e28668;

}
}}));

//# sourceMappingURL=bb_web_ds_tools.events.theme.js.map
