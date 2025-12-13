goog.provide('bb_web_ds_tools.components.navigation_test');
bb_web_ds_tools.components.navigation_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400 = (function (meta65401){
this.meta65401 = meta65401;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65402,meta65401__$1){
var self__ = this;
var _65402__$1 = this;
return (new bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400(meta65401__$1));
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65402){
var self__ = this;
var _65402__$1 = this;
return self__.meta65401;
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__65406 = (arguments.length - (1));
switch (G__65406) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400.prototype.apply = (function (self__,args65404){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args65404)));
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var div = document.createElement("div");
var fexpr__65408_65417 = new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.test_setup.suppress_re_frame_warnings);
(fexpr__65408_65417.cljs$core$IFn$_invoke$arity$0 ? fexpr__65408_65417.cljs$core$IFn$_invoke$arity$0() : fexpr__65408_65417.call(null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.components.navigation","set-top-bar-ref","bb-web-ds-tools.components.navigation/set-top-bar-ref",1693658101),null], null));

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.navigation.top_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open-tabs","open-tabs",-1348278997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.navigation.portal_to_top_bar,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"portal-content"], null),"Hello"], null)], null)], null),div);

return setTimeout((function (){
var ref = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.components.navigation","top-bar-ref","bb-web-ds-tools.components.navigation/top-bar-ref",-836321251)], null)));
try{var values__11365__auto___65418 = (new cljs.core.List(null,ref,null,(1),null));
var result__11366__auto___65419 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___65418);
if(cljs.core.truth_(result__11366__auto___65419)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",32,new cljs.core.Keyword(null,"pass","pass",1574159993),21,29,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null)),29,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___65418),"Top bar ref should be set"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",32,new cljs.core.Keyword(null,"fail","fail",1706214930),21,29,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null)),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___65418),null,(1),null)),(2),null)),"Top bar ref should be set"]));
}

}catch (e65410){var t__11416__auto___65420 = e65410;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",32,new cljs.core.Keyword(null,"error","error",-978969032),21,29,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null)),29,t__11416__auto___65420,"Top bar ref should be set"]));
}
if(cljs.core.truth_(ref)){
try{var values__11365__auto___65421 = (new cljs.core.List(null,ref.querySelector("#portal-content"),null,(1),null));
var result__11366__auto___65422 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___65421);
if(cljs.core.truth_(result__11366__auto___65422)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",69,new cljs.core.Keyword(null,"pass","pass",1574159993),23,31,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol(null,".querySelector",".querySelector",304866111,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),"#portal-content")),31,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___65421),"Portal content should be rendered in top bar"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",69,new cljs.core.Keyword(null,"fail","fail",1706214930),23,31,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol(null,".querySelector",".querySelector",304866111,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),"#portal-content")),31,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___65421),null,(1),null)),(2),null)),"Portal content should be rendered in top bar"]));
}

}catch (e65412){var t__11416__auto___65423 = e65412;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",69,new cljs.core.Keyword(null,"error","error",-978969032),23,31,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol(null,".querySelector",".querySelector",304866111,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),"#portal-content")),31,t__11416__auto___65423,"Portal content should be rendered in top bar"]));
}} else {
}

reagent.dom.unmount_component_at_node(div);

var fexpr__65413_65424 = new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.test_setup.suppress_re_frame_warnings);
(fexpr__65413_65424.cljs$core$IFn$_invoke$arity$0 ? fexpr__65413_65424.cljs$core$IFn$_invoke$arity$0() : fexpr__65413_65424.call(null));

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}),(100));
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta65401","meta65401",-1356082212,null)], null);
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400.cljs$lang$type = true);

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400.cljs$lang$ctorStr = "bb-web-ds-tools.components.navigation-test/t_bb_web_ds_tools$components$navigation_test65400");

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.navigation-test/t_bb_web_ds_tools$components$navigation_test65400");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.navigation-test/t_bb_web_ds_tools$components$navigation_test65400.
 */
bb_web_ds_tools.components.navigation_test.__GT_t_bb_web_ds_tools$components$navigation_test65400 = (function bb_web_ds_tools$components$navigation_test$__GT_t_bb_web_ds_tools$components$navigation_test65400(meta65401){
return (new bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400(meta65401));
});


bb_web_ds_tools.components.navigation_test.top_bar_portal_test = (function bb_web_ds_tools$components$navigation_test$top_bar_portal_test(){
return cljs.test.test_var(bb_web_ds_tools.components.navigation_test.top_bar_portal_test.cljs$lang$var);
});
bb_web_ds_tools.components.navigation_test.top_bar_portal_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test65400(null));
});

(bb_web_ds_tools.components.navigation_test.top_bar_portal_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.navigation_test.top_bar_portal_test;},new cljs.core.Symbol("bb-web-ds-tools.components.navigation-test","top-bar-portal-test","bb-web-ds-tools.components.navigation-test/top-bar-portal-test",-1356372705,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.navigation-test","bb-web-ds-tools.components.navigation-test",239276638,null),new cljs.core.Symbol(null,"top-bar-portal-test","top-bar-portal-test",1963536989,null),"bb_web_ds_tools/components/navigation_test.cljs",29,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.navigation_test.top_bar_portal_test)?bb_web_ds_tools.components.navigation_test.top_bar_portal_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.navigation_test.js.map
