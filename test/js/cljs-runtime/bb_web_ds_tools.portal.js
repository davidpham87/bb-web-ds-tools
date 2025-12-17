goog.provide('bb_web_ds_tools.portal');
re_frame.core.reg_fx(new cljs.core.Keyword("portal","open","portal/open",1349656052),(function (p__30261){
var map__30262 = p__30261;
var map__30262__$1 = cljs.core.__destructure_map(map__30262);
var iframe_parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"iframe-parent-id","iframe-parent-id",-1242074886));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30262__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
cljs.core.tap_GT_(iframe_parent_id);

var options = (function (){var G__30263 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),(function (){var or__5025__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("portal.colors",cljs.core.name(theme));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("portal.colors","zenburn","portal.colors/zenburn",-1225371086);
}
})()], null);
if(cljs.core.truth_(iframe_parent_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__30263,new cljs.core.Keyword(null,"launcher","launcher",-1380803777),new cljs.core.Keyword(null,"iframe","iframe",884422026),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"iframe-parent","iframe-parent",-2133134058),document.getElementById(iframe_parent_id)], 0));
} else {
return G__30263;
}
})();
return portal.web.open.cljs$core$IFn$_invoke$arity$1(options);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.portal","open","bb-web-ds-tools.portal/open",1274924169),(function (p__30266,p__30267){
var map__30268 = p__30266;
var map__30268__$1 = cljs.core.__destructure_map(map__30268);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30268__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30269 = p__30267;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(0),null);
var map__30272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30269,(1),null);
var map__30272__$1 = cljs.core.__destructure_map(map__30272);
var opts = map__30272__$1;
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30272__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906),new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal","open","portal/open",1349656052),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"iframe-parent-id","iframe-parent-id",-1242074886),node_id,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("portal","submit","portal/submit",861997951),(function (value){
return portal.web.submit(value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),(function (_,p__30274){
var vec__30275 = p__30274;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(1),null);
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal","submit","portal/submit",861997951),(cljs.core.truth_(viewer)?(((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IWithMeta$))))?true:(((!value.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,value)))?cljs.core.with_meta(value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal.viewer","default","portal.viewer/default",-1985169620),viewer], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer,value], null)):value)], null);
}));
/**
 * Renders a div that acts as the container for the Portal iframe.
 * 
 *   Returns:
 *  vector: A hiccup vector representing the portal container.
 */
bb_web_ds_tools.portal.portal_frame = (function bb_web_ds_tools$portal$portal_frame(){
var current_theme = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
if(cljs.core.truth_(el)){
return portal.web.open.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"launcher","launcher",-1380803777),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"iframe-parent","iframe-parent",-2133134058),el,new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("portal.colors",cljs.core.name(current_theme))], null));
} else {
return null;
}
})], null)], null);
});
/**
 * A Reagent component that renders a Portal inspector and automatically submits data to it.
 * 
 *   Args:
 *  value (any): The data to inspect.
 *  viewer (keyword, optional): The default viewer to use (e.g., :portal.viewer/table).
 * 
 *   Returns:
 *  vector: A hiccup vector representing the component.
 */
bb_web_ds_tools.portal.portal_panel = (function bb_web_ds_tools$portal$portal_panel(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30322 = arguments.length;
var i__5750__auto___30323 = (0);
while(true){
if((i__5750__auto___30323 < len__5749__auto___30322)){
args__5755__auto__.push((arguments[i__5750__auto___30323]));

var G__30324 = (i__5750__auto___30323 + (1));
i__5750__auto___30323 = G__30324;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.portal.portal_panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.portal.portal_panel.cljs$core$IFn$_invoke$arity$variadic = (function (value,p__30298){
var vec__30299 = p__30298;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30299,(0),null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var vec__30302 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30302,(0),null);
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30302,(1),null);
var viewer__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30302,(2),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),value__$1,viewer__$1], null));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__30309){
var vec__30310 = p__30309;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30310,(0),null);
var old_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30310,(1),null);
var old_viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30310,(2),null);
var vec__30317 = reagent.core.argv(this$);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30317,(0),null);
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30317,(1),null);
var viewer__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30317,(2),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,old_value)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(viewer__$1,old_viewer)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),value__$1,viewer__$1], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (value__$1,viewer__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_frame], null);
})], null));
}));

(bb_web_ds_tools.portal.portal_panel.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.portal.portal_panel.cljs$lang$applyTo = (function (seq30286){
var G__30287 = cljs.core.first(seq30286);
var seq30286__$1 = cljs.core.next(seq30286);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30287,seq30286__$1);
}));


//# sourceMappingURL=bb_web_ds_tools.portal.js.map
