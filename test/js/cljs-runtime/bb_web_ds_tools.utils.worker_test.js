goog.provide('bb_web_ds_tools.utils.worker_test');
bb_web_ds_tools.utils.worker_test.last_worker_mock = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bb_web_ds_tools.utils.worker_test.original_worker = Worker;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238 = (function (url,listeners,meta66239){
this.url = url;
this.listeners = listeners;
this.meta66239 = meta66239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66240,meta66239__$1){
var self__ = this;
var _66240__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238(self__.url,self__.listeners,meta66239__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66240){
var self__ = this;
var _66240__$1 = this;
return self__.meta66239;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238.prototype.postMessage = (function (msg){
var self__ = this;
var this$ = this;
var temp__5825__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.listeners));
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
return setTimeout((function (){
var G__66252 = ({"data": msg});
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__66252) : handler.call(null,G__66252));
}),(0));
} else {
return null;
}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238.prototype.terminate = (function (){
var self__ = this;
var this$ = this;
return cljs.core.reset_BANG_(self__.listeners,cljs.core.PersistentArrayMap.EMPTY);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"meta66239","meta66239",-2108165887,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66238");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66238");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66238.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test66238 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test66238(url,listeners,meta66239){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238(url,listeners,meta66239));
});


bb_web_ds_tools.utils.worker_test.mock_worker = (function bb_web_ds_tools$utils$worker_test$mock_worker(url){
var listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var mock = (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66238(url,listeners,cljs.core.PersistentArrayMap.EMPTY));
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
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255 = (function (meta66256){
this.meta66256 = meta66256;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66257,meta66256__$1){
var self__ = this;
var _66257__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255(meta66256__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66257){
var self__ = this;
var _66257__$1 = this;
return self__.meta66256;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__66262 = (arguments.length - (1));
switch (G__66262) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255.prototype.apply = (function (self__,args66259){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args66259)));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var map__66263 = bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$1("test.js");
var map__66263__$1 = cljs.core.__destructure_map(map__66263);
var w = map__66263__$1;
var out_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66263__$1,new cljs.core.Keyword(null,"out-chan","out-chan",384315017));
try{var values__11365__auto___66410 = (new cljs.core.List(null,out_chan,null,(1),null));
var result__11366__auto___66411 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___66410);
if(cljs.core.truth_(result__11366__auto___66411)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"pass","pass",1574159993),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___66410),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"fail","fail",1706214930),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___66410),null,(1),null)),(2),null)),null]));
}

}catch (e66264){var t__11416__auto___66413 = e66264;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"error","error",-978969032),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,t__11416__auto___66413,null]));
}
bb_web_ds_tools.utils.worker.post_message(w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null));

var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_66311){
var state_val_66313 = (state_66311[(1)]);
if((state_val_66313 === (7))){
var inst_66282 = (state_66311[(7)]);
var inst_66285 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66286 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"ping","ping",-1670114784),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null)));
var inst_66287 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66288 = cljs.core.cons(inst_66287,inst_66282);
var inst_66289 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),22,38,inst_66286,38,inst_66288,null];
var inst_66290 = cljs.core.PersistentHashMap.fromArrays(inst_66285,inst_66289);
var inst_66291 = cljs.test.report.call(null,inst_66290);
var state_66311__$1 = state_66311;
var statearr_66316_66417 = state_66311__$1;
(statearr_66316_66417[(2)] = inst_66291);

(statearr_66316_66417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66313 === (1))){
var state_66311__$1 = state_66311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66311__$1,(2),out_chan);
} else {
if((state_val_66313 === (4))){
var inst_66307 = (state_66311[(2)]);
var inst_66308 = bb_web_ds_tools.utils.worker.terminate(w);
var inst_66309 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_66311__$1 = (function (){var statearr_66318 = state_66311;
(statearr_66318[(8)] = inst_66307);

(statearr_66318[(9)] = inst_66308);

return statearr_66318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66311__$1,inst_66309);
} else {
if((state_val_66313 === (6))){
var _ = (function (){var statearr_66319 = state_66311;
(statearr_66319[(4)] = cljs.core.rest((state_66311[(4)])));

return statearr_66319;
})();
var state_66311__$1 = state_66311;
var ex66314 = (state_66311__$1[(2)]);
var statearr_66320_66428 = state_66311__$1;
(statearr_66320_66428[(5)] = ex66314);


var statearr_66324_66429 = state_66311__$1;
(statearr_66324_66429[(1)] = (5));

(statearr_66324_66429[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66313 === (3))){
var inst_66267 = (state_66311[(10)]);
var inst_66282 = (state_66311[(7)]);
var inst_66283 = (state_66311[(11)]);
var _ = (function (){var statearr_66325 = state_66311;
(statearr_66325[(4)] = cljs.core.cons((6),(state_66311[(4)])));

return statearr_66325;
})();
var inst_66280 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_66267);
var inst_66281 = (new cljs.core.List(null,inst_66280,null,(1),null));
var inst_66282__$1 = (new cljs.core.List(null,new cljs.core.Keyword(null,"ping","ping",-1670114784),inst_66281,(2),null));
var inst_66283__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66282__$1);
var state_66311__$1 = (function (){var statearr_66326 = state_66311;
(statearr_66326[(7)] = inst_66282__$1);

(statearr_66326[(11)] = inst_66283__$1);

return statearr_66326;
})();
if(cljs.core.truth_(inst_66283__$1)){
var statearr_66327_66432 = state_66311__$1;
(statearr_66327_66432[(1)] = (7));

} else {
var statearr_66328_66433 = state_66311__$1;
(statearr_66328_66433[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66313 === (2))){
var inst_66267 = (state_66311[(2)]);
var state_66311__$1 = (function (){var statearr_66329 = state_66311;
(statearr_66329[(10)] = inst_66267);

return statearr_66329;
})();
var statearr_66330_66436 = state_66311__$1;
(statearr_66330_66436[(2)] = null);

(statearr_66330_66436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66313 === (9))){
var inst_66283 = (state_66311[(11)]);
var inst_66304 = (state_66311[(2)]);
var _ = (function (){var statearr_66331 = state_66311;
(statearr_66331[(4)] = cljs.core.rest((state_66311[(4)])));

return statearr_66331;
})();
var state_66311__$1 = (function (){var statearr_66332 = state_66311;
(statearr_66332[(12)] = inst_66304);

return statearr_66332;
})();
var statearr_66333_66441 = state_66311__$1;
(statearr_66333_66441[(2)] = inst_66283);

(statearr_66333_66441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66313 === (5))){
var inst_66269 = (state_66311[(2)]);
var inst_66270 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66271 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"ping","ping",-1670114784),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null)));
var inst_66272 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),22,38,inst_66271,38,inst_66269,null];
var inst_66273 = cljs.core.PersistentHashMap.fromArrays(inst_66270,inst_66272);
var inst_66274 = cljs.test.report.call(null,inst_66273);
var state_66311__$1 = state_66311;
var statearr_66334_66442 = state_66311__$1;
(statearr_66334_66442[(2)] = inst_66274);

(statearr_66334_66442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66313 === (8))){
var inst_66282 = (state_66311[(7)]);
var inst_66293 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66294 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"ping","ping",-1670114784),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null)));
var inst_66295 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66296 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66297 = cljs.core.cons(inst_66296,inst_66282);
var inst_66298 = (new cljs.core.List(null,inst_66297,null,(1),null));
var inst_66299 = (new cljs.core.List(null,inst_66295,inst_66298,(2),null));
var inst_66300 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),22,38,inst_66294,38,inst_66299,null];
var inst_66301 = cljs.core.PersistentHashMap.fromArrays(inst_66293,inst_66300);
var inst_66302 = cljs.test.report.call(null,inst_66301);
var state_66311__$1 = state_66311;
var statearr_66340_66445 = state_66311__$1;
(statearr_66340_66445[(2)] = inst_66302);

(statearr_66340_66445[(1)] = (9));


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
var bb_web_ds_tools$utils$worker_test$state_machine__32396__auto__ = null;
var bb_web_ds_tools$utils$worker_test$state_machine__32396__auto____0 = (function (){
var statearr_66345 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66345[(0)] = bb_web_ds_tools$utils$worker_test$state_machine__32396__auto__);

(statearr_66345[(1)] = (1));

return statearr_66345;
});
var bb_web_ds_tools$utils$worker_test$state_machine__32396__auto____1 = (function (state_66311){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_66311);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e66346){var ex__32399__auto__ = e66346;
var statearr_66347_66446 = state_66311;
(statearr_66347_66446[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_66311[(4)]))){
var statearr_66349_66447 = state_66311;
(statearr_66349_66447[(1)] = cljs.core.first((state_66311[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66449 = state_66311;
state_66311 = G__66449;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$utils$worker_test$state_machine__32396__auto__ = function(state_66311){
switch(arguments.length){
case 0:
return bb_web_ds_tools$utils$worker_test$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$utils$worker_test$state_machine__32396__auto____1.call(this,state_66311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$utils$worker_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$utils$worker_test$state_machine__32396__auto____0;
bb_web_ds_tools$utils$worker_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$utils$worker_test$state_machine__32396__auto____1;
return bb_web_ds_tools$utils$worker_test$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_66351 = f__32477__auto__();
(statearr_66351[(6)] = c__32476__auto__);

return statearr_66351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta66256","meta66256",-1908007780,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66255");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66255");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66255.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test66255 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test66255(meta66256){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255(meta66256));
});


bb_web_ds_tools.utils.worker_test.create_worker_channel_test = (function bb_web_ds_tools$utils$worker_test$create_worker_channel_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$var);
});
bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Creates worker and returns channel"], 0));

try{return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66255(null));
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
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363 = (function (meta66364){
this.meta66364 = meta66364;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66365,meta66364__$1){
var self__ = this;
var _66365__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363(meta66364__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66365){
var self__ = this;
var _66365__$1 = this;
return self__.meta66364;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__66373 = (arguments.length - (1));
switch (G__66373) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363.prototype.apply = (function (self__,args66366){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args66366)));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var received = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_msg = (function (msg){
cljs.core.reset_BANG_(received,msg);

try{var values__11365__auto___66453 = (new cljs.core.List(null,new cljs.core.Keyword(null,"pong","pong",-172484958),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg),null,(1),null)),(2),null));
var result__11366__auto___66454 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___66453);
if(cljs.core.truth_(result__11366__auto___66454)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"pass","pass",1574159993),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pong","pong",-172484958),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null))),48,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66453),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"fail","fail",1706214930),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pong","pong",-172484958),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null))),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66453),null,(1),null)),(2),null)),null]));
}

}catch (e66377){var t__11416__auto___66457 = e66377;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"error","error",-978969032),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pong","pong",-172484958),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null))),48,t__11416__auto___66457,null]));
}
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});
var w = bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2("test.js",on_msg);
try{var values__11365__auto___66458 = (new cljs.core.List(null,new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(w),null,(1),null));
var result__11366__auto___66459 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__11365__auto___66458);
if(cljs.core.truth_(result__11366__auto___66459)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___66458),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___66458),null,(1),null)),(2),null)),null]));
}

}catch (e66388){var t__11416__auto___66460 = e66388;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,t__11416__auto___66460,null]));
}
return bb_web_ds_tools.utils.worker.post_message(w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta66364","meta66364",-1422593685,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66363");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66363");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66363.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test66363 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test66363(meta66364){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363(meta66364));
});


bb_web_ds_tools.utils.worker_test.create_worker_callback_test = (function bb_web_ds_tools$utils$worker_test$create_worker_callback_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$var);
});
bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Creates worker with callback"], 0));

try{return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66363(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.utils.worker_test.create_worker_callback_test;},new cljs.core.Symbol("bb-web-ds-tools.utils.worker-test","create-worker-callback-test","bb-web-ds-tools.utils.worker-test/create-worker-callback-test",-1881892715,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.utils.worker-test","bb-web-ds-tools.utils.worker-test",1748002020,null),new cljs.core.Symbol(null,"create-worker-callback-test","create-worker-callback-test",-1622755298,null),"bb_web_ds_tools/utils/worker_test.cljs",37,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.utils.worker_test.create_worker_callback_test)?bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.utils.worker_test.js.map
