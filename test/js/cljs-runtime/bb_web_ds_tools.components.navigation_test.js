goog.provide('bb_web_ds_tools.components.navigation_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270 = (function (meta57271){
this.meta57271 = meta57271;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57272,meta57271__$1){
var self__ = this;
var _57272__$1 = this;
return (new bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270(meta57271__$1));
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57272){
var self__ = this;
var _57272__$1 = this;
return self__.meta57271;
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57277 = (arguments.length - (1));
switch (G__57277) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270.prototype.apply = (function (self__,args57273){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57273)));
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var div = document.createElement("div");
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.components.navigation","set-top-bar-ref","bb-web-ds-tools.components.navigation/set-top-bar-ref",1693658101),null], null));

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.navigation.top_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open-tabs","open-tabs",-1348278997),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.navigation.portal_to_top_bar,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"portal-content"], null),"Hello"], null)], null)], null),div);

return setTimeout((function (){
var ref = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.components.navigation","top-bar-ref","bb-web-ds-tools.components.navigation/top-bar-ref",-836321251)], null)));
try{var values__11365__auto___57326 = (new cljs.core.List(null,ref,null,(1),null));
var result__11366__auto___57327 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___57326);
if(cljs.core.truth_(result__11366__auto___57327)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",27,new cljs.core.Keyword(null,"pass","pass",1574159993),16,23,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null)),23,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___57326),"Top bar ref should be set"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",27,new cljs.core.Keyword(null,"fail","fail",1706214930),16,23,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null)),23,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___57326),null,(1),null)),(2),null)),"Top bar ref should be set"]));
}

}catch (e57295){var t__11416__auto___57329 = e57295;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",27,new cljs.core.Keyword(null,"error","error",-978969032),16,23,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null)),23,t__11416__auto___57329,"Top bar ref should be set"]));
}
if(cljs.core.truth_(ref)){
try{var values__11365__auto___57338 = (new cljs.core.List(null,ref.querySelector("#portal-content"),null,(1),null));
var result__11366__auto___57339 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___57338);
if(cljs.core.truth_(result__11366__auto___57339)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",64,new cljs.core.Keyword(null,"pass","pass",1574159993),18,25,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol(null,".querySelector",".querySelector",304866111,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),"#portal-content")),25,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___57338),"Portal content should be rendered in top bar"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",64,new cljs.core.Keyword(null,"fail","fail",1706214930),18,25,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol(null,".querySelector",".querySelector",304866111,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),"#portal-content")),25,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___57338),null,(1),null)),(2),null)),"Portal content should be rendered in top bar"]));
}

}catch (e57299){var t__11416__auto___57341 = e57299;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/navigation_test.cljs",64,new cljs.core.Keyword(null,"error","error",-978969032),18,25,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol(null,".querySelector",".querySelector",304866111,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null),"#portal-content")),25,t__11416__auto___57341,"Portal content should be rendered in top bar"]));
}} else {
}

reagent.dom.unmount_component_at_node(div);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}),(100));
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57271","meta57271",-1875268493,null)], null);
}));

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270.cljs$lang$type = true);

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270.cljs$lang$ctorStr = "bb-web-ds-tools.components.navigation-test/t_bb_web_ds_tools$components$navigation_test57270");

(bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.navigation-test/t_bb_web_ds_tools$components$navigation_test57270");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.navigation-test/t_bb_web_ds_tools$components$navigation_test57270.
 */
bb_web_ds_tools.components.navigation_test.__GT_t_bb_web_ds_tools$components$navigation_test57270 = (function bb_web_ds_tools$components$navigation_test$__GT_t_bb_web_ds_tools$components$navigation_test57270(meta57271){
return (new bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270(meta57271));
});


bb_web_ds_tools.components.navigation_test.top_bar_portal_test = (function bb_web_ds_tools$components$navigation_test$top_bar_portal_test(){
return cljs.test.test_var(bb_web_ds_tools.components.navigation_test.top_bar_portal_test.cljs$lang$var);
});
bb_web_ds_tools.components.navigation_test.top_bar_portal_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.navigation_test.t_bb_web_ds_tools$components$navigation_test57270(null));
});

(bb_web_ds_tools.components.navigation_test.top_bar_portal_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.navigation_test.top_bar_portal_test;},new cljs.core.Symbol("bb-web-ds-tools.components.navigation-test","top-bar-portal-test","bb-web-ds-tools.components.navigation-test/top-bar-portal-test",-1356372705,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.navigation-test","bb-web-ds-tools.components.navigation-test",239276638,null),new cljs.core.Symbol(null,"top-bar-portal-test","top-bar-portal-test",1963536989,null),"bb_web_ds_tools/components/navigation_test.cljs",29,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.navigation_test.top_bar_portal_test)?bb_web_ds_tools.components.navigation_test.top_bar_portal_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.navigation_test.js.map
