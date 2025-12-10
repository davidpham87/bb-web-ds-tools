goog.provide('bb_web_ds_tools.events.theme');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),(function (p__22338,p__22339){
var map__22354 = p__22338;
var map__22354__$1 = cljs.core.__destructure_map(map__22354);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22354__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22355 = p__22339;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22355,(0),null);
var theme_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22355,(1),null);
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
re_frame.core.reg_fx(new cljs.core.Keyword("theme","apply","theme/apply",1476395918),(function (p__22404){
var map__22405 = p__22404;
var map__22405__$1 = cljs.core.__destructure_map(map__22405);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22405__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22405__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var css_vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22405__$1,new cljs.core.Keyword(null,"css-vars","css-vars",57967357));
var root_22463 = document.documentElement;
var body_22464 = document.body;
var seq__22415_22465 = cljs.core.seq(css_vars);
var chunk__22416_22466 = null;
var count__22417_22467 = (0);
var i__22418_22468 = (0);
while(true){
if((i__22418_22468 < count__22417_22467)){
var vec__22435_22469 = chunk__22416_22466.cljs$core$IIndexed$_nth$arity$2(null,i__22418_22468);
var k_22470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22435_22469,(0),null);
var v_22471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22435_22469,(1),null);
root_22463.style.setProperty(k_22470,v_22471);


var G__22472 = seq__22415_22465;
var G__22473 = chunk__22416_22466;
var G__22474 = count__22417_22467;
var G__22475 = (i__22418_22468 + (1));
seq__22415_22465 = G__22472;
chunk__22416_22466 = G__22473;
count__22417_22467 = G__22474;
i__22418_22468 = G__22475;
continue;
} else {
var temp__5825__auto___22476 = cljs.core.seq(seq__22415_22465);
if(temp__5825__auto___22476){
var seq__22415_22477__$1 = temp__5825__auto___22476;
if(cljs.core.chunked_seq_QMARK_(seq__22415_22477__$1)){
var c__5548__auto___22478 = cljs.core.chunk_first(seq__22415_22477__$1);
var G__22479 = cljs.core.chunk_rest(seq__22415_22477__$1);
var G__22480 = c__5548__auto___22478;
var G__22481 = cljs.core.count(c__5548__auto___22478);
var G__22482 = (0);
seq__22415_22465 = G__22479;
chunk__22416_22466 = G__22480;
count__22417_22467 = G__22481;
i__22418_22468 = G__22482;
continue;
} else {
var vec__22438_22483 = cljs.core.first(seq__22415_22477__$1);
var k_22484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22438_22483,(0),null);
var v_22485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22438_22483,(1),null);
root_22463.style.setProperty(k_22484,v_22485);


var G__22486 = cljs.core.next(seq__22415_22477__$1);
var G__22487 = null;
var G__22488 = (0);
var G__22489 = (0);
seq__22415_22465 = G__22486;
chunk__22416_22466 = G__22487;
count__22417_22467 = G__22488;
i__22418_22468 = G__22489;
continue;
}
} else {
}
}
break;
}

body_22464.style.setProperty("background-color","var(--bg-page)");

body_22464.style.setProperty("color","var(--text-primary)");

try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme(name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),bb_web_ds_tools.events.theme.get_base_theme(new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),new cljs.core.Keyword("portal.colors","border","portal.colors/border",-165446507).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(data)], null)], null)));

return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setTheme(name);
}catch (e22441){if((e22441 instanceof Error)){
var e = e22441;
return console.error("Failed to apply Monaco theme",e);
} else {
throw e22441;

}
}}));

//# sourceMappingURL=bb_web_ds_tools.events.theme.js.map
