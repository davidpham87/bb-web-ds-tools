goog.provide('bb_web_ds_tools.utils.worker_test');
bb_web_ds_tools.utils.worker_test.last_worker_mock = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bb_web_ds_tools.utils.worker_test.original_worker = Worker;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869 = (function (url,listeners,meta67870){
this.url = url;
this.listeners = listeners;
this.meta67870 = meta67870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67871,meta67870__$1){
var self__ = this;
var _67871__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869(self__.url,self__.listeners,meta67870__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67871){
var self__ = this;
var _67871__$1 = this;
return self__.meta67870;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869.prototype.postMessage = (function (msg){
var self__ = this;
var this$ = this;
var temp__5825__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.listeners));
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
return setTimeout((function (){
var G__67880 = ({"data": msg});
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__67880) : handler.call(null,G__67880));
}),(0));
} else {
return null;
}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869.prototype.terminate = (function (){
var self__ = this;
var this$ = this;
return cljs.core.reset_BANG_(self__.listeners,cljs.core.PersistentArrayMap.EMPTY);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"meta67870","meta67870",227536856,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test67869");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test67869");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test67869.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test67869 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test67869(url,listeners,meta67870){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869(url,listeners,meta67870));
});


bb_web_ds_tools.utils.worker_test.mock_worker = (function bb_web_ds_tools$utils$worker_test$mock_worker(url){
var listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var mock = (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67869(url,listeners,cljs.core.PersistentArrayMap.EMPTY));
cljs.core.reset_BANG_(bb_web_ds_tools.utils.worker_test.last_worker_mock,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mock","mock",-383657858),mock,new cljs.core.Keyword(null,"listeners","listeners",394544445),listeners], null));

Object.defineProperties(mock,({"onmessage": ({"set": (function (f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners,cljs.core.assoc,new cljs.core.Keyword(null,"message","message",-406056002),f);
})}), "onerror": ({"set": (function (f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),f);
})})}));

return mock;
});
bb_web_ds_tools.utils.worker_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
return (Worker = bb_web_ds_tools.utils.worker_test.mock_worker);
}),new cljs.core.Keyword(null,"after","after",594996914),(function (){
return (Worker = bb_web_ds_tools.utils.worker_test.original_worker);
})], null)], null);

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907 = (function (meta67908){
this.meta67908 = meta67908;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67909,meta67908__$1){
var self__ = this;
var _67909__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907(meta67908__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67909){
var self__ = this;
var _67909__$1 = this;
return self__.meta67908;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__67915 = (arguments.length - (1));
switch (G__67915) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907.prototype.apply = (function (self__,args67910){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args67910)));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var map__67932 = bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$1("test.js");
var map__67932__$1 = cljs.core.__destructure_map(map__67932);
var w = map__67932__$1;
var out_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67932__$1,new cljs.core.Keyword(null,"out-chan","out-chan",384315017));
try{var values__11365__auto___68073 = (new cljs.core.List(null,out_chan,null,(1),null));
var result__11366__auto___68074 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___68073);
if(cljs.core.truth_(result__11366__auto___68074)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"pass","pass",1574159993),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___68073),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"fail","fail",1706214930),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___68073),null,(1),null)),(2),null)),null]));
}

}catch (e67933){var t__11416__auto___68075 = e67933;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"error","error",-978969032),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,t__11416__auto___68075,null]));
}
bb_web_ds_tools.utils.worker.post_message(w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null));

var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_67989){
var state_val_67990 = (state_67989[(1)]);
if((state_val_67990 === (7))){
var inst_67955 = (state_67989[(7)]);
var inst_67959 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67960 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null));
var inst_67961 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_67962 = cljs.core.cons(inst_67961,inst_67955);
var inst_67963 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),22,38,inst_67960,38,inst_67962,null];
var inst_67964 = cljs.core.PersistentHashMap.fromArrays(inst_67959,inst_67963);
var inst_67965 = cljs.test.report.call(null,inst_67964);
var state_67989__$1 = state_67989;
var statearr_67992_68079 = state_67989__$1;
(statearr_67992_68079[(2)] = inst_67965);

(statearr_67992_68079[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (1))){
var state_67989__$1 = state_67989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67989__$1,(2),out_chan);
} else {
if((state_val_67990 === (4))){
var inst_67985 = (state_67989[(2)]);
var inst_67986 = bb_web_ds_tools.utils.worker.terminate(w);
var inst_67987 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_67989__$1 = (function (){var statearr_67994 = state_67989;
(statearr_67994[(8)] = inst_67985);

(statearr_67994[(9)] = inst_67986);

return statearr_67994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67989__$1,inst_67987);
} else {
if((state_val_67990 === (6))){
var _ = (function (){var statearr_67995 = state_67989;
(statearr_67995[(4)] = cljs.core.rest((state_67989[(4)])));

return statearr_67995;
})();
var state_67989__$1 = state_67989;
var ex67991 = (state_67989__$1[(2)]);
var statearr_68000_68081 = state_67989__$1;
(statearr_68000_68081[(5)] = ex67991);


var statearr_68001_68084 = state_67989__$1;
(statearr_68001_68084[(1)] = (5));

(statearr_68001_68084[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (3))){
var inst_67938 = (state_67989[(10)]);
var inst_67955 = (state_67989[(7)]);
var inst_67956 = (state_67989[(11)]);
var _ = (function (){var statearr_68002 = state_67989;
(statearr_68002[(4)] = cljs.core.cons((6),(state_67989[(4)])));

return statearr_68002;
})();
var inst_67951 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_67952 = [new cljs.core.Keyword(null,"ping","ping",-1670114784)];
var inst_67953 = cljs.core.PersistentHashMap.fromArrays(inst_67951,inst_67952);
var inst_67954 = (new cljs.core.List(null,inst_67938,null,(1),null));
var inst_67955__$1 = (new cljs.core.List(null,inst_67953,inst_67954,(2),null));
var inst_67956__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_67955__$1);
var state_67989__$1 = (function (){var statearr_68003 = state_67989;
(statearr_68003[(7)] = inst_67955__$1);

(statearr_68003[(11)] = inst_67956__$1);

return statearr_68003;
})();
if(cljs.core.truth_(inst_67956__$1)){
var statearr_68005_68086 = state_67989__$1;
(statearr_68005_68086[(1)] = (7));

} else {
var statearr_68006_68088 = state_67989__$1;
(statearr_68006_68088[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (2))){
var inst_67938 = (state_67989[(2)]);
var state_67989__$1 = (function (){var statearr_68007 = state_67989;
(statearr_68007[(10)] = inst_67938);

return statearr_68007;
})();
var statearr_68008_68090 = state_67989__$1;
(statearr_68008_68090[(2)] = null);

(statearr_68008_68090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (9))){
var inst_67956 = (state_67989[(11)]);
var inst_67982 = (state_67989[(2)]);
var _ = (function (){var statearr_68009 = state_67989;
(statearr_68009[(4)] = cljs.core.rest((state_67989[(4)])));

return statearr_68009;
})();
var state_67989__$1 = (function (){var statearr_68010 = state_67989;
(statearr_68010[(12)] = inst_67982);

return statearr_68010;
})();
var statearr_68011_68091 = state_67989__$1;
(statearr_68011_68091[(2)] = inst_67956);

(statearr_68011_68091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (5))){
var inst_67940 = (state_67989[(2)]);
var inst_67941 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67942 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null));
var inst_67943 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),22,38,inst_67942,38,inst_67940,null];
var inst_67944 = cljs.core.PersistentHashMap.fromArrays(inst_67941,inst_67943);
var inst_67945 = cljs.test.report.call(null,inst_67944);
var state_67989__$1 = state_67989;
var statearr_68015_68092 = state_67989__$1;
(statearr_68015_68092[(2)] = inst_67945);

(statearr_68015_68092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67990 === (8))){
var inst_67955 = (state_67989[(7)]);
var inst_67971 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_67972 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null));
var inst_67973 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_67974 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_67975 = cljs.core.cons(inst_67974,inst_67955);
var inst_67976 = (new cljs.core.List(null,inst_67975,null,(1),null));
var inst_67977 = (new cljs.core.List(null,inst_67973,inst_67976,(2),null));
var inst_67978 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),22,38,inst_67972,38,inst_67977,null];
var inst_67979 = cljs.core.PersistentHashMap.fromArrays(inst_67971,inst_67978);
var inst_67980 = cljs.test.report.call(null,inst_67979);
var state_67989__$1 = state_67989;
var statearr_68017_68094 = state_67989__$1;
(statearr_68017_68094[(2)] = inst_67980);

(statearr_68017_68094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var bb_web_ds_tools$utils$worker_test$state_machine__32391__auto__ = null;
var bb_web_ds_tools$utils$worker_test$state_machine__32391__auto____0 = (function (){
var statearr_68019 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68019[(0)] = bb_web_ds_tools$utils$worker_test$state_machine__32391__auto__);

(statearr_68019[(1)] = (1));

return statearr_68019;
});
var bb_web_ds_tools$utils$worker_test$state_machine__32391__auto____1 = (function (state_67989){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_67989);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e68020){var ex__32394__auto__ = e68020;
var statearr_68021_68096 = state_67989;
(statearr_68021_68096[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_67989[(4)]))){
var statearr_68022_68097 = state_67989;
(statearr_68022_68097[(1)] = cljs.core.first((state_67989[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68104 = state_67989;
state_67989 = G__68104;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$utils$worker_test$state_machine__32391__auto__ = function(state_67989){
switch(arguments.length){
case 0:
return bb_web_ds_tools$utils$worker_test$state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$utils$worker_test$state_machine__32391__auto____1.call(this,state_67989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$utils$worker_test$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$utils$worker_test$state_machine__32391__auto____0;
bb_web_ds_tools$utils$worker_test$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$utils$worker_test$state_machine__32391__auto____1;
return bb_web_ds_tools$utils$worker_test$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_68023 = f__32472__auto__();
(statearr_68023[(6)] = c__32471__auto__);

return statearr_68023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67908","meta67908",457231749,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test67907");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test67907");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test67907.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test67907 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test67907(meta67908){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907(meta67908));
});


bb_web_ds_tools.utils.worker_test.create_worker_channel_test = (function bb_web_ds_tools$utils$worker_test$create_worker_channel_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$var);
});
bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Creates worker and returns channel"], 0));

try{return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67907(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.utils.worker_test.create_worker_channel_test;},new cljs.core.Symbol("bb-web-ds-tools.utils.worker-test","create-worker-channel-test","bb-web-ds-tools.utils.worker-test/create-worker-channel-test",-1289446063,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.utils.worker-test","bb-web-ds-tools.utils.worker-test",1748002020,null),new cljs.core.Symbol(null,"create-worker-channel-test","create-worker-channel-test",-1548288810,null),"bb_web_ds_tools/utils/worker_test.cljs",36,1,30,30,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.utils.worker_test.create_worker_channel_test)?bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030 = (function (meta68031){
this.meta68031 = meta68031;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68032,meta68031__$1){
var self__ = this;
var _68032__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030(meta68031__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68032){
var self__ = this;
var _68032__$1 = this;
return self__.meta68031;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__68038 = (arguments.length - (1));
switch (G__68038) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030.prototype.apply = (function (self__,args68033){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args68033)));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var received = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_msg = (function (msg){
cljs.core.reset_BANG_(received,msg);

try{var values__11365__auto___68108 = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null),(new cljs.core.List(null,msg,null,(1),null)),(2),null));
var result__11366__auto___68109 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___68108);
if(cljs.core.truth_(result__11366__auto___68109)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"pass","pass",1574159993),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null)),48,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___68108),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"fail","fail",1706214930),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null)),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___68108),null,(1),null)),(2),null)),null]));
}

}catch (e68043){var t__11416__auto___68110 = e68043;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"error","error",-978969032),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null)),48,t__11416__auto___68110,null]));
}
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});
var w = bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2("test.js",on_msg);
try{var values__11365__auto___68113 = (new cljs.core.List(null,new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(w),null,(1),null));
var result__11366__auto___68114 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__11365__auto___68113);
if(cljs.core.truth_(result__11366__auto___68114)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___68113),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___68113),null,(1),null)),(2),null)),null]));
}

}catch (e68050){var t__11416__auto___68116 = e68050;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,t__11416__auto___68116,null]));
}
return bb_web_ds_tools.utils.worker.post_message(w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68031","meta68031",-1038229704,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test68030");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test68030");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test68030.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test68030 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test68030(meta68031){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030(meta68031));
});


bb_web_ds_tools.utils.worker_test.create_worker_callback_test = (function bb_web_ds_tools$utils$worker_test$create_worker_callback_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$var);
});
bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Creates worker with callback"], 0));

try{return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68030(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.utils.worker_test.create_worker_callback_test;},new cljs.core.Symbol("bb-web-ds-tools.utils.worker-test","create-worker-callback-test","bb-web-ds-tools.utils.worker-test/create-worker-callback-test",-1881892715,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.utils.worker-test","bb-web-ds-tools.utils.worker-test",1748002020,null),new cljs.core.Symbol(null,"create-worker-callback-test","create-worker-callback-test",-1622755298,null),"bb_web_ds_tools/utils/worker_test.cljs",37,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.utils.worker_test.create_worker_callback_test)?bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.utils.worker_test.js.map
