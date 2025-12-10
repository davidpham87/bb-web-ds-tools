goog.provide('bb_web_ds_tools.utils.worker_test');
bb_web_ds_tools.utils.worker_test.last_worker_mock = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bb_web_ds_tools.utils.worker_test.original_worker = Worker;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879 = (function (url,listeners,meta41880){
this.url = url;
this.listeners = listeners;
this.meta41880 = meta41880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41881,meta41880__$1){
var self__ = this;
var _41881__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879(self__.url,self__.listeners,meta41880__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41881){
var self__ = this;
var _41881__$1 = this;
return self__.meta41880;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879.prototype.postMessage = (function (msg){
var self__ = this;
var this$ = this;
var temp__5825__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.listeners));
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
return setTimeout((function (){
var G__41900 = ({"data": msg});
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__41900) : handler.call(null,G__41900));
}),(0));
} else {
return null;
}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879.prototype.terminate = (function (){
var self__ = this;
var this$ = this;
return cljs.core.reset_BANG_(self__.listeners,cljs.core.PersistentArrayMap.EMPTY);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"meta41880","meta41880",402751631,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test41879");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test41879");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test41879.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test41879 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test41879(url,listeners,meta41880){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879(url,listeners,meta41880));
});


bb_web_ds_tools.utils.worker_test.mock_worker = (function bb_web_ds_tools$utils$worker_test$mock_worker(url){
var listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var mock = (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41879(url,listeners,cljs.core.PersistentArrayMap.EMPTY));
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
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924 = (function (meta41925){
this.meta41925 = meta41925;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41926,meta41925__$1){
var self__ = this;
var _41926__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924(meta41925__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41926){
var self__ = this;
var _41926__$1 = this;
return self__.meta41925;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__41954 = (arguments.length - (1));
switch (G__41954) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924.prototype.apply = (function (self__,args41927){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args41927)));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var map__41955 = bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$1("test.js");
var map__41955__$1 = cljs.core.__destructure_map(map__41955);
var w = map__41955__$1;
var out_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41955__$1,new cljs.core.Keyword(null,"out-chan","out-chan",384315017));
try{var values__11365__auto___42189 = (new cljs.core.List(null,out_chan,null,(1),null));
var result__11366__auto___42190 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___42189);
if(cljs.core.truth_(result__11366__auto___42190)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",29,new cljs.core.Keyword(null,"pass","pass",1574159993),13,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___42189),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",29,new cljs.core.Keyword(null,"fail","fail",1706214930),13,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___42189),null,(1),null)),(2),null)),null]));
}

}catch (e41956){var t__11416__auto___42191 = e41956;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",29,new cljs.core.Keyword(null,"error","error",-978969032),13,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,t__11416__auto___42191,null]));
}
bb_web_ds_tools.utils.worker.post_message(w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null));

var c__24068__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24069__auto__ = (function (){var switch__24021__auto__ = (function (state_42048){
var state_val_42049 = (state_42048[(1)]);
if((state_val_42049 === (7))){
var inst_42008 = (state_42048[(7)]);
var inst_42021 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42022 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"ping","ping",-1670114784),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null)));
var inst_42023 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42024 = cljs.core.cons(inst_42023,inst_42008);
var inst_42025 = ["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),17,38,inst_42022,38,inst_42024,null];
var inst_42026 = cljs.core.PersistentHashMap.fromArrays(inst_42021,inst_42025);
var inst_42027 = cljs.test.report.call(null,inst_42026);
var state_42048__$1 = state_42048;
var statearr_42063_42193 = state_42048__$1;
(statearr_42063_42193[(2)] = inst_42027);

(statearr_42063_42193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (1))){
var state_42048__$1 = state_42048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42048__$1,(2),out_chan);
} else {
if((state_val_42049 === (4))){
var inst_42043 = (state_42048[(2)]);
var inst_42044 = bb_web_ds_tools.utils.worker.terminate(w);
var inst_42045 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_42048__$1 = (function (){var statearr_42072 = state_42048;
(statearr_42072[(8)] = inst_42043);

(statearr_42072[(9)] = inst_42044);

return statearr_42072;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42048__$1,inst_42045);
} else {
if((state_val_42049 === (6))){
var _ = (function (){var statearr_42083 = state_42048;
(statearr_42083[(4)] = cljs.core.rest((state_42048[(4)])));

return statearr_42083;
})();
var state_42048__$1 = state_42048;
var ex42051 = (state_42048__$1[(2)]);
var statearr_42084_42194 = state_42048__$1;
(statearr_42084_42194[(5)] = ex42051);


var statearr_42085_42195 = state_42048__$1;
(statearr_42085_42195[(1)] = (5));

(statearr_42085_42195[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (3))){
var inst_41987 = (state_42048[(10)]);
var inst_42008 = (state_42048[(7)]);
var inst_42009 = (state_42048[(11)]);
var _ = (function (){var statearr_42087 = state_42048;
(statearr_42087[(4)] = cljs.core.cons((6),(state_42048[(4)])));

return statearr_42087;
})();
var inst_42006 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_41987);
var inst_42007 = (new cljs.core.List(null,inst_42006,null,(1),null));
var inst_42008__$1 = (new cljs.core.List(null,new cljs.core.Keyword(null,"ping","ping",-1670114784),inst_42007,(2),null));
var inst_42009__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_42008__$1);
var state_42048__$1 = (function (){var statearr_42096 = state_42048;
(statearr_42096[(7)] = inst_42008__$1);

(statearr_42096[(11)] = inst_42009__$1);

return statearr_42096;
})();
if(cljs.core.truth_(inst_42009__$1)){
var statearr_42101_42198 = state_42048__$1;
(statearr_42101_42198[(1)] = (7));

} else {
var statearr_42102_42199 = state_42048__$1;
(statearr_42102_42199[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (2))){
var inst_41987 = (state_42048[(2)]);
var state_42048__$1 = (function (){var statearr_42107 = state_42048;
(statearr_42107[(10)] = inst_41987);

return statearr_42107;
})();
var statearr_42108_42200 = state_42048__$1;
(statearr_42108_42200[(2)] = null);

(statearr_42108_42200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (9))){
var inst_42009 = (state_42048[(11)]);
var inst_42040 = (state_42048[(2)]);
var _ = (function (){var statearr_42115 = state_42048;
(statearr_42115[(4)] = cljs.core.rest((state_42048[(4)])));

return statearr_42115;
})();
var state_42048__$1 = (function (){var statearr_42116 = state_42048;
(statearr_42116[(12)] = inst_42040);

return statearr_42116;
})();
var statearr_42117_42201 = state_42048__$1;
(statearr_42117_42201[(2)] = inst_42009);

(statearr_42117_42201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (5))){
var inst_41989 = (state_42048[(2)]);
var inst_41996 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41997 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"ping","ping",-1670114784),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null)));
var inst_41998 = ["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),17,38,inst_41997,38,inst_41989,null];
var inst_41999 = cljs.core.PersistentHashMap.fromArrays(inst_41996,inst_41998);
var inst_42000 = cljs.test.report.call(null,inst_41999);
var state_42048__$1 = state_42048;
var statearr_42121_42202 = state_42048__$1;
(statearr_42121_42202[(2)] = inst_42000);

(statearr_42121_42202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42049 === (8))){
var inst_42008 = (state_42048[(7)]);
var inst_42029 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42030 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"ping","ping",-1670114784),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null)));
var inst_42031 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42032 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42033 = cljs.core.cons(inst_42032,inst_42008);
var inst_42034 = (new cljs.core.List(null,inst_42033,null,(1),null));
var inst_42035 = (new cljs.core.List(null,inst_42031,inst_42034,(2),null));
var inst_42036 = ["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),17,38,inst_42030,38,inst_42035,null];
var inst_42037 = cljs.core.PersistentHashMap.fromArrays(inst_42029,inst_42036);
var inst_42038 = cljs.test.report.call(null,inst_42037);
var state_42048__$1 = state_42048;
var statearr_42129_42203 = state_42048__$1;
(statearr_42129_42203[(2)] = inst_42038);

(statearr_42129_42203[(1)] = (9));


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
var bb_web_ds_tools$utils$worker_test$state_machine__24022__auto__ = null;
var bb_web_ds_tools$utils$worker_test$state_machine__24022__auto____0 = (function (){
var statearr_42134 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42134[(0)] = bb_web_ds_tools$utils$worker_test$state_machine__24022__auto__);

(statearr_42134[(1)] = (1));

return statearr_42134;
});
var bb_web_ds_tools$utils$worker_test$state_machine__24022__auto____1 = (function (state_42048){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_42048);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e42135){var ex__24025__auto__ = e42135;
var statearr_42136_42205 = state_42048;
(statearr_42136_42205[(2)] = ex__24025__auto__);


if(cljs.core.seq((state_42048[(4)]))){
var statearr_42138_42208 = state_42048;
(statearr_42138_42208[(1)] = cljs.core.first((state_42048[(4)])));

} else {
throw ex__24025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42209 = state_42048;
state_42048 = G__42209;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
bb_web_ds_tools$utils$worker_test$state_machine__24022__auto__ = function(state_42048){
switch(arguments.length){
case 0:
return bb_web_ds_tools$utils$worker_test$state_machine__24022__auto____0.call(this);
case 1:
return bb_web_ds_tools$utils$worker_test$state_machine__24022__auto____1.call(this,state_42048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$utils$worker_test$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$utils$worker_test$state_machine__24022__auto____0;
bb_web_ds_tools$utils$worker_test$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$utils$worker_test$state_machine__24022__auto____1;
return bb_web_ds_tools$utils$worker_test$state_machine__24022__auto__;
})()
})();
var state__24070__auto__ = (function (){var statearr_42150 = f__24069__auto__();
(statearr_42150[(6)] = c__24068__auto__);

return statearr_42150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24070__auto__);
}));

return c__24068__auto__;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41925","meta41925",278759010,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test41924");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test41924");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test41924.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test41924 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test41924(meta41925){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924(meta41925));
});


bb_web_ds_tools.utils.worker_test.create_worker_channel_test = (function bb_web_ds_tools$utils$worker_test$create_worker_channel_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$var);
});
bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Creates worker and returns channel"], 0));

try{return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test41924(null));
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
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170 = (function (meta42171){
this.meta42171 = meta42171;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42172,meta42171__$1){
var self__ = this;
var _42172__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170(meta42171__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42172){
var self__ = this;
var _42172__$1 = this;
return self__.meta42171;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__42176 = (arguments.length - (1));
switch (G__42176) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170.prototype.apply = (function (self__,args42174){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args42174)));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var received = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_msg = (function (msg){
cljs.core.reset_BANG_(received,msg);

try{var values__11365__auto___42211 = (new cljs.core.List(null,new cljs.core.Keyword(null,"pong","pong",-172484958),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg),null,(1),null)),(2),null));
var result__11366__auto___42212 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___42211);
if(cljs.core.truth_(result__11366__auto___42212)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),26,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pong","pong",-172484958),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null))),48,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42211),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),26,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pong","pong",-172484958),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null))),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42211),null,(1),null)),(2),null)),null]));
}

}catch (e42178){var t__11416__auto___42213 = e42178;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),26,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pong","pong",-172484958),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null))),48,t__11416__auto___42213,null]));
}
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});
var w = bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2("test.js",on_msg);
try{var values__11365__auto___42214 = (new cljs.core.List(null,new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(w),null,(1),null));
var result__11366__auto___42215 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__11365__auto___42214);
if(cljs.core.truth_(result__11366__auto___42215)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___42214),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___42214),null,(1),null)),(2),null)),null]));
}

}catch (e42180){var t__11416__auto___42217 = e42180;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,t__11416__auto___42217,null]));
}
return bb_web_ds_tools.utils.worker.post_message(w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42171","meta42171",-385612729,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test42170");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test42170");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test42170.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test42170 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test42170(meta42171){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170(meta42171));
});


bb_web_ds_tools.utils.worker_test.create_worker_callback_test = (function bb_web_ds_tools$utils$worker_test$create_worker_callback_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$var);
});
bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Creates worker with callback"], 0));

try{return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test42170(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.utils.worker_test.create_worker_callback_test;},new cljs.core.Symbol("bb-web-ds-tools.utils.worker-test","create-worker-callback-test","bb-web-ds-tools.utils.worker-test/create-worker-callback-test",-1881892715,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.utils.worker-test","bb-web-ds-tools.utils.worker-test",1748002020,null),new cljs.core.Symbol(null,"create-worker-callback-test","create-worker-callback-test",-1622755298,null),"bb_web_ds_tools/utils/worker_test.cljs",37,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.utils.worker_test.create_worker_callback_test)?bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.utils.worker_test.js.map
