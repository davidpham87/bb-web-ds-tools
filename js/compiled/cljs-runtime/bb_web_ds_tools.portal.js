goog.provide('bb_web_ds_tools.portal');
bb_web_ds_tools.portal.portal_frame_id = "portal-frame";
re_frame.core.reg_fx(new cljs.core.Keyword("portal","open","portal/open",1349656052),(function (iframe_parent_id){
cljs.core.tap_GT_(iframe_parent_id);

if(cljs.core.truth_(iframe_parent_id)){
var iframe_parent = document.getElementById(iframe_parent_id);
return portal.web.open.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"launcher","launcher",-1380803777),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"iframe-parent","iframe-parent",-2133134058),iframe_parent,new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword("portal.colors","zenburn","portal.colors/zenburn",-1225371086)], null));
} else {
return portal.web.open.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword("portal.colors","zenburn","portal.colors/zenburn",-1225371086)], null));
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.portal","open","bb-web-ds-tools.portal/open",1274924169),(function (_,p__36972){
var vec__36973 = p__36972;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(0),null);
var map__36976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(1),null);
var map__36976__$1 = cljs.core.__destructure_map(map__36976);
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36976__$1,new cljs.core.Keyword(null,"node-id","node-id",779482292));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal","open","portal/open",1349656052),node_id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.portal","open-portal-frame","bb-web-ds-tools.portal/open-portal-frame",2118945057),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal","open","portal/open",1349656052),bb_web_ds_tools.portal.portal_frame_id], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("portal","submit","portal/submit",861997951),(function (value){
return portal.web.submit(value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),(function (_,p__36977){
var vec__36979 = p__36977;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36979,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36979,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("portal","submit","portal/submit",861997951),value], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.portal","update-portal-frame","bb-web-ds-tools.portal/update-portal-frame",-587086852),(function (p__36991,_){
var map__36992 = p__36991;
var map__36992__$1 = cljs.core.__destructure_map(map__36992);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36992__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portal","portal",2002989957),new cljs.core.Keyword("bb-web-ds-tools.portal","portal-frame-key","bb-web-ds-tools.portal/portal-frame-key",-1732403024)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()))], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.portal","portal-frame-key","bb-web-ds-tools.portal/portal-frame-key",-1732403024),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portal","portal",2002989957),new cljs.core.Keyword("bb-web-ds-tools.portal","portal-frame-key","bb-web-ds-tools.portal/portal-frame-key",-1732403024)], null));
})], 0));
bb_web_ds_tools.portal.portal_frame = (function bb_web_ds_tools$portal$portal_frame(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","open-portal-frame","bb-web-ds-tools.portal/open-portal-frame",2118945057)], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),bb_web_ds_tools.portal.portal_frame_id,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"95vh",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20)], null)], null)], null);
})], null));
});
bb_web_ds_tools.portal.portal_viewer = (function bb_web_ds_tools$portal$portal_viewer(value){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),value], null));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__37006){
var vec__37008 = p__37006;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37008,(0),null);
var old_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37008,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,old_value)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),value], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_frame], null);
})], null));
});

//# sourceMappingURL=bb_web_ds_tools.portal.js.map
