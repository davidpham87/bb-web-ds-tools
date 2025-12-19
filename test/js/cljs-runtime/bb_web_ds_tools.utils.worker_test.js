goog.provide('bb_web_ds_tools.utils.worker_test');
bb_web_ds_tools.utils.worker_test.last_worker_mock = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bb_web_ds_tools.utils.worker_test.original_worker = Worker;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990 = (function (url,listeners,meta67991){
this.url = url;
this.listeners = listeners;
this.meta67991 = meta67991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67992,meta67991__$1){
var self__ = this;
var _67992__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990(self__.url,self__.listeners,meta67991__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67992){
var self__ = this;
var _67992__$1 = this;
return self__.meta67991;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990.prototype.postMessage = (function (msg){
var self__ = this;
var this$ = this;
var temp__5825__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.listeners));
if(cljs.core.truth_(temp__5825__auto__)){
var handler = temp__5825__auto__;
return setTimeout((function (){
var G__68000 = ({"data": msg});
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__68000) : handler.call(null,G__68000));
}),(0));
} else {
return null;
}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990.prototype.terminate = (function (){
var self__ = this;
var this$ = this;
return cljs.core.reset_BANG_(self__.listeners,cljs.core.PersistentArrayMap.EMPTY);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"meta67991","meta67991",-622972285,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test67990");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test67990");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test67990.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test67990 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test67990(url,listeners,meta67991){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990(url,listeners,meta67991));
});


bb_web_ds_tools.utils.worker_test.mock_worker = (function bb_web_ds_tools$utils$worker_test$mock_worker(url){
var listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var mock = (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test67990(url,listeners,cljs.core.PersistentArrayMap.EMPTY));
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
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009 = (function (meta68010){
this.meta68010 = meta68010;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68011,meta68010__$1){
var self__ = this;
var _68011__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009(meta68010__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68011){
var self__ = this;
var _68011__$1 = this;
return self__.meta68010;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__68037 = (arguments.length - (1));
switch (G__68037) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009.prototype.apply = (function (self__,args68013){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args68013)));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var map__68039 = bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$1("test.js");
var map__68039__$1 = cljs.core.__destructure_map(map__68039);
var w = map__68039__$1;
var out_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68039__$1,new cljs.core.Keyword(null,"out-chan","out-chan",384315017));
try{var values__11365__auto___68161 = (new cljs.core.List(null,out_chan,null,(1),null));
var result__11366__auto___68162 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___68161);
if(cljs.core.truth_(result__11366__auto___68162)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"pass","pass",1574159993),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___68161),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"fail","fail",1706214930),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___68161),null,(1),null)),(2),null)),null]));
}

}catch (e68042){var t__11416__auto___68163 = e68042;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",34,new cljs.core.Keyword(null,"error","error",-978969032),18,34,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null)),34,t__11416__auto___68163,null]));
}
bb_web_ds_tools.utils.worker.post_message(w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null));

var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_68093){
var state_val_68094 = (state_68093[(1)]);
if((state_val_68094 === (7))){
var inst_68064 = (state_68093[(7)]);
var inst_68067 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_68068 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null));
var inst_68069 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_68070 = cljs.core.cons(inst_68069,inst_68064);
var inst_68071 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),22,38,inst_68068,38,inst_68070,null];
var inst_68072 = cljs.core.PersistentHashMap.fromArrays(inst_68067,inst_68071);
var inst_68073 = cljs.test.report.call(null,inst_68072);
var state_68093__$1 = state_68093;
var statearr_68098_68164 = state_68093__$1;
(statearr_68098_68164[(2)] = inst_68073);

(statearr_68098_68164[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68094 === (1))){
var state_68093__$1 = state_68093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68093__$1,(2),out_chan);
} else {
if((state_val_68094 === (4))){
var inst_68089 = (state_68093[(2)]);
var inst_68090 = bb_web_ds_tools.utils.worker.terminate(w);
var inst_68091 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_68093__$1 = (function (){var statearr_68099 = state_68093;
(statearr_68099[(8)] = inst_68089);

(statearr_68099[(9)] = inst_68090);

return statearr_68099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68093__$1,inst_68091);
} else {
if((state_val_68094 === (6))){
var _ = (function (){var statearr_68100 = state_68093;
(statearr_68100[(4)] = cljs.core.rest((state_68093[(4)])));

return statearr_68100;
})();
var state_68093__$1 = state_68093;
var ex68095 = (state_68093__$1[(2)]);
var statearr_68101_68166 = state_68093__$1;
(statearr_68101_68166[(5)] = ex68095);


var statearr_68102_68167 = state_68093__$1;
(statearr_68102_68167[(1)] = (5));

(statearr_68102_68167[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68094 === (3))){
var inst_68048 = (state_68093[(10)]);
var inst_68064 = (state_68093[(7)]);
var inst_68065 = (state_68093[(11)]);
var _ = (function (){var statearr_68103 = state_68093;
(statearr_68103[(4)] = cljs.core.cons((6),(state_68093[(4)])));

return statearr_68103;
})();
var inst_68060 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_68061 = [new cljs.core.Keyword(null,"ping","ping",-1670114784)];
var inst_68062 = cljs.core.PersistentHashMap.fromArrays(inst_68060,inst_68061);
var inst_68063 = (new cljs.core.List(null,inst_68048,null,(1),null));
var inst_68064__$1 = (new cljs.core.List(null,inst_68062,inst_68063,(2),null));
var inst_68065__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_68064__$1);
var state_68093__$1 = (function (){var statearr_68104 = state_68093;
(statearr_68104[(7)] = inst_68064__$1);

(statearr_68104[(11)] = inst_68065__$1);

return statearr_68104;
})();
if(cljs.core.truth_(inst_68065__$1)){
var statearr_68105_68174 = state_68093__$1;
(statearr_68105_68174[(1)] = (7));

} else {
var statearr_68106_68175 = state_68093__$1;
(statearr_68106_68175[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68094 === (2))){
var inst_68048 = (state_68093[(2)]);
var state_68093__$1 = (function (){var statearr_68110 = state_68093;
(statearr_68110[(10)] = inst_68048);

return statearr_68110;
})();
var statearr_68111_68176 = state_68093__$1;
(statearr_68111_68176[(2)] = null);

(statearr_68111_68176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68094 === (9))){
var inst_68065 = (state_68093[(11)]);
var inst_68086 = (state_68093[(2)]);
var _ = (function (){var statearr_68112 = state_68093;
(statearr_68112[(4)] = cljs.core.rest((state_68093[(4)])));

return statearr_68112;
})();
var state_68093__$1 = (function (){var statearr_68113 = state_68093;
(statearr_68113[(12)] = inst_68086);

return statearr_68113;
})();
var statearr_68114_68178 = state_68093__$1;
(statearr_68114_68178[(2)] = inst_68065);

(statearr_68114_68178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68094 === (5))){
var inst_68049 = (state_68093[(2)]);
var inst_68050 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_68051 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null));
var inst_68052 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),22,38,inst_68051,38,inst_68049,null];
var inst_68053 = cljs.core.PersistentHashMap.fromArrays(inst_68050,inst_68052);
var inst_68054 = cljs.test.report.call(null,inst_68053);
var state_68093__$1 = state_68093;
var statearr_68115_68179 = state_68093__$1;
(statearr_68115_68179[(2)] = inst_68054);

(statearr_68115_68179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68094 === (8))){
var inst_68064 = (state_68093[(7)]);
var inst_68075 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_68076 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null));
var inst_68077 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_68078 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_68079 = cljs.core.cons(inst_68078,inst_68064);
var inst_68080 = (new cljs.core.List(null,inst_68079,null,(1),null));
var inst_68081 = (new cljs.core.List(null,inst_68077,inst_68080,(2),null));
var inst_68082 = ["bb_web_ds_tools/utils/worker_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),22,38,inst_68076,38,inst_68081,null];
var inst_68083 = cljs.core.PersistentHashMap.fromArrays(inst_68075,inst_68082);
var inst_68084 = cljs.test.report.call(null,inst_68083);
var state_68093__$1 = state_68093;
var statearr_68116_68181 = state_68093__$1;
(statearr_68116_68181[(2)] = inst_68084);

(statearr_68116_68181[(1)] = (9));


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
var bb_web_ds_tools$utils$worker_test$state_machine__32540__auto__ = null;
var bb_web_ds_tools$utils$worker_test$state_machine__32540__auto____0 = (function (){
var statearr_68117 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68117[(0)] = bb_web_ds_tools$utils$worker_test$state_machine__32540__auto__);

(statearr_68117[(1)] = (1));

return statearr_68117;
});
var bb_web_ds_tools$utils$worker_test$state_machine__32540__auto____1 = (function (state_68093){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_68093);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e68121){var ex__32543__auto__ = e68121;
var statearr_68122_68182 = state_68093;
(statearr_68122_68182[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_68093[(4)]))){
var statearr_68123_68183 = state_68093;
(statearr_68123_68183[(1)] = cljs.core.first((state_68093[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68184 = state_68093;
state_68093 = G__68184;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$utils$worker_test$state_machine__32540__auto__ = function(state_68093){
switch(arguments.length){
case 0:
return bb_web_ds_tools$utils$worker_test$state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$utils$worker_test$state_machine__32540__auto____1.call(this,state_68093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$utils$worker_test$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$utils$worker_test$state_machine__32540__auto____0;
bb_web_ds_tools$utils$worker_test$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$utils$worker_test$state_machine__32540__auto____1;
return bb_web_ds_tools$utils$worker_test$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_68124 = f__32611__auto__();
(statearr_68124[(6)] = c__32610__auto__);

return statearr_68124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68010","meta68010",1792416220,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test68009");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test68009");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test68009.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test68009 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test68009(meta68010){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009(meta68010));
});


bb_web_ds_tools.utils.worker_test.create_worker_channel_test = (function bb_web_ds_tools$utils$worker_test$create_worker_channel_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$var);
});
bb_web_ds_tools.utils.worker_test.create_worker_channel_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Creates worker and returns channel"], 0));

try{return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68009(null));
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
bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135 = (function (meta68136){
this.meta68136 = meta68136;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68137,meta68136__$1){
var self__ = this;
var _68137__$1 = this;
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135(meta68136__$1));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68137){
var self__ = this;
var _68137__$1 = this;
return self__.meta68136;
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__68140 = (arguments.length - (1));
switch (G__68140) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135.prototype.apply = (function (self__,args68138){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args68138)));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var received = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_msg = (function (msg){
cljs.core.reset_BANG_(received,msg);

try{var values__11365__auto___68189 = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null),(new cljs.core.List(null,msg,null,(1),null)),(2),null));
var result__11366__auto___68190 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___68189);
if(cljs.core.truth_(result__11366__auto___68190)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"pass","pass",1574159993),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null)),48,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___68189),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"fail","fail",1706214930),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null)),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___68189),null,(1),null)),(2),null)),null]));
}

}catch (e68142){var t__11416__auto___68191 = e68142;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",52,new cljs.core.Keyword(null,"error","error",-978969032),31,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null),new cljs.core.Symbol(null,"msg","msg",254428083,null)),48,t__11416__auto___68191,null]));
}
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});
var w = bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2("test.js",on_msg);
try{var values__11365__auto___68192 = (new cljs.core.List(null,new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(w),null,(1),null));
var result__11366__auto___68193 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__11365__auto___68192);
if(cljs.core.truth_(result__11366__auto___68193)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___68192),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___68192),null,(1),null)),(2),null)),null]));
}

}catch (e68146){var t__11416__auto___68202 = e68146;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/worker_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,51,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Symbol(null,"w","w",1994700528,null))),51,t__11416__auto___68202,null]));
}
return bb_web_ds_tools.utils.worker.post_message(w,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68136","meta68136",-1407197865,null)], null);
}));

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135.cljs$lang$type = true);

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135.cljs$lang$ctorStr = "bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test68135");

(bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test68135");
}));

/**
 * Positional factory function for bb-web-ds-tools.utils.worker-test/t_bb_web_ds_tools$utils$worker_test68135.
 */
bb_web_ds_tools.utils.worker_test.__GT_t_bb_web_ds_tools$utils$worker_test68135 = (function bb_web_ds_tools$utils$worker_test$__GT_t_bb_web_ds_tools$utils$worker_test68135(meta68136){
return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135(meta68136));
});


bb_web_ds_tools.utils.worker_test.create_worker_callback_test = (function bb_web_ds_tools$utils$worker_test$create_worker_callback_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$var);
});
bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Creates worker with callback"], 0));

try{return (new bb_web_ds_tools.utils.worker_test.t_bb_web_ds_tools$utils$worker_test68135(null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.utils.worker_test.create_worker_callback_test;},new cljs.core.Symbol("bb-web-ds-tools.utils.worker-test","create-worker-callback-test","bb-web-ds-tools.utils.worker-test/create-worker-callback-test",-1881892715,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.utils.worker-test","bb-web-ds-tools.utils.worker-test",1748002020,null),new cljs.core.Symbol(null,"create-worker-callback-test","create-worker-callback-test",-1622755298,null),"bb_web_ds_tools/utils/worker_test.cljs",37,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.utils.worker_test.create_worker_callback_test)?bb_web_ds_tools.utils.worker_test.create_worker_callback_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.utils.worker_test.js.map
