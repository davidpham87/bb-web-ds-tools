goog.provide('bb_web_ds_tools.events.theme');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),(function (p__28608,p__28609){
var map__28610 = p__28608;
var map__28610__$1 = cljs.core.__destructure_map(map__28610);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28610__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28611 = p__28609;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28611,(0),null);
var theme_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28611,(1),null);
var theme = bb_web_ds_tools.utils.themes.get_theme(theme_name);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),theme_name),new cljs.core.Keyword("theme","apply","theme/apply",1476395918),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(theme_name),new cljs.core.Keyword(null,"data","data",-232669377),theme,new cljs.core.Keyword(null,"css-vars","css-vars",57967357),bb_web_ds_tools.theme.resolve_theme_colors(theme)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
})], 0));
re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (p__28614){
var map__28615 = p__28614;
var map__28615__$1 = cljs.core.__destructure_map(map__28615);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28615__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28615__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var css_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28615__$1,new cljs.core.Keyword(null,"css-vars","css-vars",57967357));
var root_28639 = document.documentElement;
var body_28640 = document.body;
var seq__28616_28641 = cljs.core.seq(css_vars);
var chunk__28617_28642 = null;
var count__28618_28643 = (0);
var i__28619_28644 = (0);
while(true){
if((i__28619_28644 < count__28618_28643)){
var vec__28626_28645 = chunk__28617_28642.cljs$core$IIndexed$_nth$arity$2(null,i__28619_28644);
var k_28646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28626_28645,(0),null);
var v_28647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28626_28645,(1),null);
root_28639.style.setProperty(k_28646,v_28647);


var G__28648 = seq__28616_28641;
var G__28649 = chunk__28617_28642;
var G__28650 = count__28618_28643;
var G__28651 = (i__28619_28644 + (1));
seq__28616_28641 = G__28648;
chunk__28617_28642 = G__28649;
count__28618_28643 = G__28650;
i__28619_28644 = G__28651;
continue;
} else {
var temp__5825__auto___28652 = cljs.core.seq(seq__28616_28641);
if(temp__5825__auto___28652){
var seq__28616_28653__$1 = temp__5825__auto___28652;
if(cljs.core.chunked_seq_QMARK_(seq__28616_28653__$1)){
var c__5548__auto___28654 = cljs.core.chunk_first(seq__28616_28653__$1);
var G__28655 = cljs.core.chunk_rest(seq__28616_28653__$1);
var G__28656 = c__5548__auto___28654;
var G__28657 = cljs.core.count(c__5548__auto___28654);
var G__28658 = (0);
seq__28616_28641 = G__28655;
chunk__28617_28642 = G__28656;
count__28618_28643 = G__28657;
i__28619_28644 = G__28658;
continue;
} else {
var vec__28631_28659 = cljs.core.first(seq__28616_28653__$1);
var k_28660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631_28659,(0),null);
var v_28661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631_28659,(1),null);
root_28639.style.setProperty(k_28660,v_28661);


var G__28662 = cljs.core.next(seq__28616_28653__$1);
var G__28663 = null;
var G__28664 = (0);
var G__28665 = (0);
seq__28616_28641 = G__28662;
chunk__28617_28642 = G__28663;
count__28618_28643 = G__28664;
i__28619_28644 = G__28665;
continue;
}
} else {
}
}
break;
}

body_28640.style.setProperty("background-color","var(--bg-page)");

body_28640.style.setProperty("color","var(--text-primary)");

try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme(name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),"vs-dark",new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),new cljs.core.Keyword("portal.colors","border","portal.colors/border",-165446507).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data)], null)], null)));

return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setTheme(name);
}catch (e28634){if((e28634 instanceof Error)){
var e = e28634;
return console.error("Failed to apply Monaco theme",e);
} else {
throw e28634;

}
}}));

//# sourceMappingURL=bb_web_ds_tools.events.theme.js.map
