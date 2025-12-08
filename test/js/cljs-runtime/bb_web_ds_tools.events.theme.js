goog.provide('bb_web_ds_tools.events.theme');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),(function (p__28615,p__28616){
var map__28617 = p__28615;
var map__28617__$1 = cljs.core.__destructure_map(map__28617);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28617__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28618 = p__28616;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28618,(0),null);
var theme_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28618,(1),null);
var theme = bb_web_ds_tools.utils.themes.get_theme(theme_name);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),theme_name),new cljs.core.Keyword("theme","apply","theme/apply",1476395918),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(theme_name),new cljs.core.Keyword(null,"data","data",-232669377),theme,new cljs.core.Keyword(null,"css-vars","css-vars",57967357),bb_web_ds_tools.theme.resolve_theme_colors(theme)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
})], 0));
re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (p__28623){
var map__28624 = p__28623;
var map__28624__$1 = cljs.core.__destructure_map(map__28624);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28624__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28624__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var css_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28624__$1,new cljs.core.Keyword(null,"css-vars","css-vars",57967357));
var root_28648 = document.documentElement;
var body_28649 = document.body;
var seq__28627_28650 = cljs.core.seq(css_vars);
var chunk__28628_28651 = null;
var count__28629_28652 = (0);
var i__28630_28653 = (0);
while(true){
if((i__28630_28653 < count__28629_28652)){
var vec__28639_28654 = chunk__28628_28651.cljs$core$IIndexed$_nth$arity$2(null,i__28630_28653);
var k_28655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28639_28654,(0),null);
var v_28656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28639_28654,(1),null);
root_28648.style.setProperty(k_28655,v_28656);


var G__28657 = seq__28627_28650;
var G__28658 = chunk__28628_28651;
var G__28659 = count__28629_28652;
var G__28660 = (i__28630_28653 + (1));
seq__28627_28650 = G__28657;
chunk__28628_28651 = G__28658;
count__28629_28652 = G__28659;
i__28630_28653 = G__28660;
continue;
} else {
var temp__5825__auto___28661 = cljs.core.seq(seq__28627_28650);
if(temp__5825__auto___28661){
var seq__28627_28662__$1 = temp__5825__auto___28661;
if(cljs.core.chunked_seq_QMARK_(seq__28627_28662__$1)){
var c__5548__auto___28663 = cljs.core.chunk_first(seq__28627_28662__$1);
var G__28664 = cljs.core.chunk_rest(seq__28627_28662__$1);
var G__28665 = c__5548__auto___28663;
var G__28666 = cljs.core.count(c__5548__auto___28663);
var G__28667 = (0);
seq__28627_28650 = G__28664;
chunk__28628_28651 = G__28665;
count__28629_28652 = G__28666;
i__28630_28653 = G__28667;
continue;
} else {
var vec__28642_28668 = cljs.core.first(seq__28627_28662__$1);
var k_28669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28642_28668,(0),null);
var v_28670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28642_28668,(1),null);
root_28648.style.setProperty(k_28669,v_28670);


var G__28671 = cljs.core.next(seq__28627_28662__$1);
var G__28672 = null;
var G__28673 = (0);
var G__28674 = (0);
seq__28627_28650 = G__28671;
chunk__28628_28651 = G__28672;
count__28629_28652 = G__28673;
i__28630_28653 = G__28674;
continue;
}
} else {
}
}
break;
}

body_28649.style.setProperty("background-color","var(--bg-page)");

body_28649.style.setProperty("color","var(--text-primary)");

try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme(name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),"vs-dark",new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),new cljs.core.Keyword("portal.colors","border","portal.colors/border",-165446507).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data)], null)], null)));

return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setTheme(name);
}catch (e28645){if((e28645 instanceof Error)){
var e = e28645;
return console.error("Failed to apply Monaco theme",e);
} else {
throw e28645;

}
}}));

//# sourceMappingURL=bb_web_ds_tools.events.theme.js.map
