goog.provide('bb_web_ds_tools.utils.worker_test');
bb_web_ds_tools.utils.worker_test.last_worker_mock = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bb_web_ds_tools.utils.worker_test.original_worker = Worker;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227 = (function (url,listeners,meta66228){
this.url = url;
this.listeners = listeners;
this.meta66228 = meta66228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66229,meta66228__$1){
var self__ = this;
var _66229__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227(self__.url,self__.listeners,meta66228__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66229){
var self__ = this;
var _66229__$1 = this;
return self__.meta66228;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227.prototype.postMessage = (function (msg){
var self__ = this;
var this$ = this;
var temp__5825__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.listeners));
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
return setTimeout((function (){
var G__66232 = ({"data": msg});
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__66232) : handler.call(null,G__66232));
}),(0));
} else {
return null;
}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227.prototype.terminate = (function (){
var self__ = this;
var this$ = this;
return cljs.core.reset_BANG_(self__.listeners,cljs.core.PersistentArrayMap.EMPTY);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"meta66228","meta66228",-154564844,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66227");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66227");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66227.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test66227 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test66227(url,listeners,meta66228){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227(url,listeners,meta66228));
});


bb_web_ds_tools.utils.worker_test.mock_worker = (function bb_web_ds_tools$utils$worker_test$mock_worker(url){
var listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var mock = (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66227(url,listeners,cljs.core.PersistentArrayMap.EMPTY));
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
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242 = (function (meta66243){
this.meta66243 = meta66243;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66244,meta66243__$1){
var self__ = this;
var _66244__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242(meta66243__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66244){
var self__ = this;
var _66244__$1 = this;
return self__.meta66243;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__66247 = (arguments.length - (1));
switch (G__66247) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242.prototype.apply = (function (self__,args66245){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args66245)));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var map__66250 = bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$1("test.js");
var map__66250__$1 = cljs.core.__destructure_map(map__66250);
var w = map__66250__$1;
var out_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66250__$1,new cljs.core.Keyword(null,"out-chan","out-chan",384315017));
try{var values__11365__auto___66357 = (new cljs.core.List(null,out_chan,null,(1),null));
var result__11366__auto___66358 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___66357);
if(cljs.core.truth_(result__11366__auto___66358)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"pass","pass",1574159993),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___66357),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"fail","fail",1706214930),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___66357),null,(1),null)),(2),null)),null]));
}

}catch (e66251){var t__11416__auto___66359 = e66251;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"error","error",-978969032),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,t__11416__auto___66359,null]));
}
bb_web_ds_tools.utils.worker.post_message(w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null));

var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_66297){
var state_val_66298 = (state_66297[(1)]);
if((state_val_66298 === (7))){
var inst_66268 = (state_66297[(7)]);
var inst_66271 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66272 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"ping","ping",-1670114784),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null)));
var inst_66273 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66274 = cljs.core.cons(inst_66273,inst_66268);
var inst_66275 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),22,38,inst_66272,38,inst_66274,null];
var inst_66276 = cljs.core.PersistentHashMap.fromArrays(inst_66271,inst_66275);
var inst_66277 = cljs.test.report.call(null,inst_66276);
var state_66297__$1 = state_66297;
var statearr_66302_66361 = state_66297__$1;
(statearr_66302_66361[(2)] = inst_66277);

(statearr_66302_66361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66298 === (1))){
var state_66297__$1 = state_66297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66297__$1,(2),out_chan);
} else {
if((state_val_66298 === (4))){
var inst_66293 = (state_66297[(2)]);
var inst_66294 = bb_web_ds_tools.utils.worker.terminate(w);
var inst_66295 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_66297__$1 = (function (){var statearr_66303 = state_66297;
(statearr_66303[(8)] = inst_66293);

(statearr_66303[(9)] = inst_66294);

return statearr_66303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66297__$1,inst_66295);
} else {
if((state_val_66298 === (6))){
var _ = (function (){var statearr_66305 = state_66297;
(statearr_66305[(4)] = cljs.core.rest((state_66297[(4)])));

return statearr_66305;
})();
var state_66297__$1 = state_66297;
var ex66299 = (state_66297__$1[(2)]);
var statearr_66306_66363 = state_66297__$1;
(statearr_66306_66363[(5)] = ex66299);


var statearr_66307_66365 = state_66297__$1;
(statearr_66307_66365[(1)] = (5));

(statearr_66307_66365[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66298 === (3))){
var inst_66254 = (state_66297[(10)]);
var inst_66268 = (state_66297[(7)]);
var inst_66269 = (state_66297[(11)]);
var _ = (function (){var statearr_66309 = state_66297;
(statearr_66309[(4)] = cljs.core.cons((6),(state_66297[(4)])));

return statearr_66309;
})();
var inst_66266 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_66254);
var inst_66267 = (new cljs.core.List(null,inst_66266,null,(1),null));
var inst_66268__$1 = (new cljs.core.List(null,new cljs.core.Keyword(null,"ping","ping",-1670114784),inst_66267,(2),null));
var inst_66269__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_66268__$1);
var state_66297__$1 = (function (){var statearr_66310 = state_66297;
(statearr_66310[(7)] = inst_66268__$1);

(statearr_66310[(11)] = inst_66269__$1);

return statearr_66310;
})();
if(cljs.core.truth_(inst_66269__$1)){
var statearr_66311_66367 = state_66297__$1;
(statearr_66311_66367[(1)] = (7));

} else {
var statearr_66312_66368 = state_66297__$1;
(statearr_66312_66368[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66298 === (2))){
var inst_66254 = (state_66297[(2)]);
var state_66297__$1 = (function (){var statearr_66313 = state_66297;
(statearr_66313[(10)] = inst_66254);

return statearr_66313;
})();
var statearr_66314_66370 = state_66297__$1;
(statearr_66314_66370[(2)] = null);

(statearr_66314_66370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66298 === (9))){
var inst_66269 = (state_66297[(11)]);
var inst_66290 = (state_66297[(2)]);
var _ = (function (){var statearr_66315 = state_66297;
(statearr_66315[(4)] = cljs.core.rest((state_66297[(4)])));

return statearr_66315;
})();
var state_66297__$1 = (function (){var statearr_66316 = state_66297;
(statearr_66316[(12)] = inst_66290);

return statearr_66316;
})();
var statearr_66317_66371 = state_66297__$1;
(statearr_66317_66371[(2)] = inst_66269);

(statearr_66317_66371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66298 === (5))){
var inst_66255 = (state_66297[(2)]);
var inst_66256 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66257 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"ping","ping",-1670114784),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null)));
var inst_66258 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),22,38,inst_66257,38,inst_66255,null];
var inst_66259 = cljs.core.PersistentHashMap.fromArrays(inst_66256,inst_66258);
var inst_66260 = cljs.test.report.call(null,inst_66259);
var state_66297__$1 = state_66297;
var statearr_66319_66373 = state_66297__$1;
(statearr_66319_66373[(2)] = inst_66260);

(statearr_66319_66373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66298 === (8))){
var inst_66268 = (state_66297[(7)]);
var inst_66279 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_66280 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"ping","ping",-1670114784),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null)));
var inst_66281 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_66282 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_66283 = cljs.core.cons(inst_66282,inst_66268);
var inst_66284 = (new cljs.core.List(null,inst_66283,null,(1),null));
var inst_66285 = (new cljs.core.List(null,inst_66281,inst_66284,(2),null));
var inst_66286 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),22,38,inst_66280,38,inst_66285,null];
var inst_66287 = cljs.core.PersistentHashMap.fromArrays(inst_66279,inst_66286);
var inst_66288 = cljs.test.report.call(null,inst_66287);
var state_66297__$1 = state_66297;
var statearr_66320_66375 = state_66297__$1;
(statearr_66320_66375[(2)] = inst_66288);

(statearr_66320_66375[(1)] = (9));


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
var statearr_66321 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66321[(0)] = bb_web_ds_tools$utils$worker_test$state_machine__32396__auto__);

(statearr_66321[(1)] = (1));

return statearr_66321;
});
var bb_web_ds_tools$utils$worker_test$state_machine__32396__auto____1 = (function (state_66297){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_66297);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e66322){var ex__32399__auto__ = e66322;
var statearr_66323_66377 = state_66297;
(statearr_66323_66377[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_66297[(4)]))){
var statearr_66324_66379 = state_66297;
(statearr_66324_66379[(1)] = cljs.core.first((state_66297[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66380 = state_66297;
state_66297 = G__66380;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$utils$worker_test$state_machine__32396__auto__ = function(state_66297){
switch(arguments.length){
case 0:
return bb_web_ds_tools$utils$worker_test$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$utils$worker_test$state_machine__32396__auto____1.call(this,state_66297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$utils$worker_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$utils$worker_test$state_machine__32396__auto____0;
bb_web_ds_tools$utils$worker_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$utils$worker_test$state_machine__32396__auto____1;
return bb_web_ds_tools$utils$worker_test$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_66325 = f__32467__auto__();
(statearr_66325[(6)] = c__32466__auto__);

return statearr_66325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta66243","meta66243",-130006075,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66242");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66242");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66242.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test66242 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test66242(meta66243){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242(meta66243));
});


bb_web_ds_tools.utils.worker_test.create_worker_channel_test = (function bb_web_ds_tools$utils$worker_test$create_worker_channel_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$var);
});
bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Creates worker and returns channel"], 0));

try{return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66242(null));
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
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330 = (function (meta66331){
this.meta66331 = meta66331;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66332,meta66331__$1){
var self__ = this;
var _66332__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330(meta66331__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66332){
var self__ = this;
var _66332__$1 = this;
return self__.meta66331;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__66340 = (arguments.length - (1));
switch (G__66340) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330.prototype.apply = (function (self__,args66333){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args66333)));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var received = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_msg = (function (msg){
cljs.core.reset_BANG_(received,msg);

try{var values__11365__auto___66384 = (new cljs.core.List(null,new cljs.core.Keyword(null,"pong","pong",-172484958),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg),null,(1),null)),(2),null));
var result__11366__auto___66385 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___66384);
if(cljs.core.truth_(result__11366__auto___66385)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"pass","pass",1574159993),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pong","pong",-172484958),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null))),48,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66384),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"fail","fail",1706214930),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pong","pong",-172484958),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null))),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___66384),null,(1),null)),(2),null)),null]));
}

}catch (e66344){var t__11416__auto___66387 = e66344;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"error","error",-978969032),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pong","pong",-172484958),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"msg","msg",254428083,null))),48,t__11416__auto___66387,null]));
}
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});
var w = bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2("test.js",on_msg);
try{var values__11365__auto___66388 = (new cljs.core.List(null,new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(w),null,(1),null));
var result__11366__auto___66389 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__11365__auto___66388);
if(cljs.core.truth_(result__11366__auto___66389)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___66388),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___66388),null,(1),null)),(2),null)),null]));
}

}catch (e66346){var t__11416__auto___66390 = e66346;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,t__11416__auto___66390,null]));
}
return bb_web_ds_tools.utils.worker.post_message(w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta66331","meta66331",1886026511,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66330");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66330");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test66330.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test66330 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test66330(meta66331){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330(meta66331));
});


bb_web_ds_tools.utils.worker_test.create_worker_callback_test = (function bb_web_ds_tools$utils$worker_test$create_worker_callback_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$var);
});
bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Creates worker with callback"], 0));

try{return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test66330(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.utils.worker_test.create_worker_callback_test;},new cljs.core.Symbol("bb-web-ds-tools.utils.worker-test","create-worker-callback-test","bb-web-ds-tools.utils.worker-test/create-worker-callback-test",-1881892715,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.utils.worker-test","bb-web-ds-tools.utils.worker-test",1748002020,null),new cljs.core.Symbol(null,"create-worker-callback-test","create-worker-callback-test",-1622755298,null),"bb_web_ds_tools/utils/worker_test.cljs",37,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.utils.worker_test.create_worker_callback_test)?bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.utils.worker_test.js.map
