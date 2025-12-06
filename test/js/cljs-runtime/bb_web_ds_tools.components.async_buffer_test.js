goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245 = (function (meta56246){
this.meta56246 = meta56246;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56247,meta56246__$1){
var self__ = this;
var _56247__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245(meta56246__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56247){
var self__ = this;
var _56247__$1 = this;
return self__.meta56246;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56259 = (arguments.length - (1));
switch (G__56259) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245.prototype.apply = (function (self__,args56251){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56251)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56432){
var state_val_56433 = (state_56432[(1)]);
if((state_val_56433 === (7))){
var inst_56284 = (state_56432[(2)]);
var inst_56285 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56286 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56287 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56286,19,inst_56284,"Buffer should not flush automatically without timer"];
var inst_56288 = cljs.core.PersistentHashMap.fromArrays(inst_56285,inst_56287);
var inst_56289 = cljs.test.report.call(null,inst_56288);
var state_56432__$1 = state_56432;
var statearr_56434_57051 = state_56432__$1;
(statearr_56434_57051[(2)] = inst_56289);

(statearr_56434_57051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (20))){
var inst_56272 = (state_56432[(7)]);
var inst_56372 = (state_56432[(2)]);
var inst_56373 = (inst_56272.cljs$core$IFn$_invoke$arity$0 ? inst_56272.cljs$core$IFn$_invoke$arity$0() : inst_56272.call(null));
var inst_56374 = cljs.core.async.timeout((20));
var state_56432__$1 = (function (){var statearr_56435 = state_56432;
(statearr_56435[(8)] = inst_56372);

(statearr_56435[(9)] = inst_56373);

return statearr_56435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56432__$1,(21),inst_56374);
} else {
if((state_val_56433 === (27))){
var inst_56399 = (state_56432[(10)]);
var inst_56414 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56415 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56416 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56417 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56418 = cljs.core.cons(inst_56417,inst_56399);
var inst_56419 = (new cljs.core.List(null,inst_56418,null,(1),null));
var inst_56420 = (new cljs.core.List(null,inst_56416,inst_56419,(2),null));
var inst_56421 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56415,29,inst_56420,"Subsequent flush should work"];
var inst_56422 = cljs.core.PersistentHashMap.fromArrays(inst_56414,inst_56421);
var inst_56423 = cljs.test.report.call(null,inst_56422);
var state_56432__$1 = state_56432;
var statearr_56436_57053 = state_56432__$1;
(statearr_56436_57053[(2)] = inst_56423);

(statearr_56436_57053[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (1))){
var inst_56265 = (state_56432[(11)]);
var inst_56267 = (state_56432[(12)]);
var inst_56265__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56266 = cljs.core.PersistentVector.EMPTY;
var inst_56267__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56266);
var inst_56268 = (function (){var input_ch = inst_56265__$1;
var results = inst_56267__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56269 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56270 = [inst_56265__$1,inst_56268];
var inst_56271 = cljs.core.PersistentHashMap.fromArrays(inst_56269,inst_56270);
var inst_56272 = bb_web_ds_tools.components.async_buffer.create(inst_56271);
var state_56432__$1 = (function (){var statearr_56438 = state_56432;
(statearr_56438[(11)] = inst_56265__$1);

(statearr_56438[(12)] = inst_56267__$1);

(statearr_56438[(7)] = inst_56272);

return statearr_56438;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56432__$1,(2),inst_56265__$1,(1));
} else {
if((state_val_56433 === (24))){
var inst_56377 = (state_56432[(2)]);
var inst_56378 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56379 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56380 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56379,29,inst_56377,"Subsequent flush should work"];
var inst_56381 = cljs.core.PersistentHashMap.fromArrays(inst_56378,inst_56380);
var inst_56382 = cljs.test.report.call(null,inst_56381);
var state_56432__$1 = state_56432;
var statearr_56439_57055 = state_56432__$1;
(statearr_56439_57055[(2)] = inst_56382);

(statearr_56439_57055[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (4))){
var inst_56283 = (state_56432[(2)]);
var state_56432__$1 = (function (){var statearr_56441 = state_56432;
(statearr_56441[(13)] = inst_56283);

return statearr_56441;
})();
var statearr_56442_57056 = state_56432__$1;
(statearr_56442_57056[(2)] = null);

(statearr_56442_57056[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (15))){
var inst_56326 = (state_56432[(2)]);
var inst_56327 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56328 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56329 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56328,24,inst_56326,"Manual flush should flush all items"];
var inst_56330 = cljs.core.PersistentHashMap.fromArrays(inst_56327,inst_56329);
var inst_56331 = cljs.test.report.call(null,inst_56330);
var state_56432__$1 = state_56432;
var statearr_56445_57057 = state_56432__$1;
(statearr_56445_57057[(2)] = inst_56331);

(statearr_56445_57057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (21))){
var inst_56376 = (state_56432[(2)]);
var state_56432__$1 = (function (){var statearr_56446 = state_56432;
(statearr_56446[(14)] = inst_56376);

return statearr_56446;
})();
var statearr_56447_57058 = state_56432__$1;
(statearr_56447_57058[(2)] = null);

(statearr_56447_57058[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (13))){
var inst_56267 = (state_56432[(12)]);
var inst_56345 = (state_56432[(15)]);
var inst_56346 = (state_56432[(16)]);
var _ = (function (){var statearr_56449 = state_56432;
(statearr_56449[(4)] = cljs.core.cons((16),(state_56432[(4)])));

return statearr_56449;
})();
var inst_56337 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56339 = [(1),(2)];
var inst_56340 = (new cljs.core.PersistentVector(null,2,(5),inst_56338,inst_56339,null));
var inst_56341 = [inst_56340];
var inst_56342 = (new cljs.core.PersistentVector(null,1,(5),inst_56337,inst_56341,null));
var inst_56343 = cljs.core.deref(inst_56267);
var inst_56344 = (new cljs.core.List(null,inst_56343,null,(1),null));
var inst_56345__$1 = (new cljs.core.List(null,inst_56342,inst_56344,(2),null));
var inst_56346__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56345__$1);
var state_56432__$1 = (function (){var statearr_56450 = state_56432;
(statearr_56450[(15)] = inst_56345__$1);

(statearr_56450[(16)] = inst_56346__$1);

return statearr_56450;
})();
if(cljs.core.truth_(inst_56346__$1)){
var statearr_56451_57064 = state_56432__$1;
(statearr_56451_57064[(1)] = (17));

} else {
var statearr_56452_57065 = state_56432__$1;
(statearr_56452_57065[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (22))){
var inst_56267 = (state_56432[(12)]);
var inst_56399 = (state_56432[(10)]);
var inst_56400 = (state_56432[(17)]);
var _ = (function (){var statearr_56453 = state_56432;
(statearr_56453[(4)] = cljs.core.cons((25),(state_56432[(4)])));

return statearr_56453;
})();
var inst_56388 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56389 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56390 = [(1),(2)];
var inst_56391 = (new cljs.core.PersistentVector(null,2,(5),inst_56389,inst_56390,null));
var inst_56392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56393 = [(3)];
var inst_56394 = (new cljs.core.PersistentVector(null,1,(5),inst_56392,inst_56393,null));
var inst_56395 = [inst_56391,inst_56394];
var inst_56396 = (new cljs.core.PersistentVector(null,2,(5),inst_56388,inst_56395,null));
var inst_56397 = cljs.core.deref(inst_56267);
var inst_56398 = (new cljs.core.List(null,inst_56397,null,(1),null));
var inst_56399__$1 = (new cljs.core.List(null,inst_56396,inst_56398,(2),null));
var inst_56400__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56399__$1);
var state_56432__$1 = (function (){var statearr_56456 = state_56432;
(statearr_56456[(10)] = inst_56399__$1);

(statearr_56456[(17)] = inst_56400__$1);

return statearr_56456;
})();
if(cljs.core.truth_(inst_56400__$1)){
var statearr_56457_57066 = state_56432__$1;
(statearr_56457_57066[(1)] = (26));

} else {
var statearr_56458_57067 = state_56432__$1;
(statearr_56458_57067[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (6))){
var inst_56272 = (state_56432[(7)]);
var inst_56321 = (state_56432[(2)]);
var inst_56322 = (inst_56272.cljs$core$IFn$_invoke$arity$0 ? inst_56272.cljs$core$IFn$_invoke$arity$0() : inst_56272.call(null));
var inst_56323 = cljs.core.async.timeout((20));
var state_56432__$1 = (function (){var statearr_56461 = state_56432;
(statearr_56461[(18)] = inst_56321);

(statearr_56461[(19)] = inst_56322);

return statearr_56461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56432__$1,(12),inst_56323);
} else {
if((state_val_56433 === (28))){
var inst_56400 = (state_56432[(17)]);
var inst_56425 = (state_56432[(2)]);
var _ = (function (){var statearr_56464 = state_56432;
(statearr_56464[(4)] = cljs.core.rest((state_56432[(4)])));

return statearr_56464;
})();
var state_56432__$1 = (function (){var statearr_56466 = state_56432;
(statearr_56466[(20)] = inst_56425);

return statearr_56466;
})();
var statearr_56469_57070 = state_56432__$1;
(statearr_56469_57070[(2)] = inst_56400);

(statearr_56469_57070[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (25))){
var _ = (function (){var statearr_56470 = state_56432;
(statearr_56470[(4)] = cljs.core.rest((state_56432[(4)])));

return statearr_56470;
})();
var state_56432__$1 = state_56432;
var ex56459 = (state_56432__$1[(2)]);
var statearr_56471_57074 = state_56432__$1;
(statearr_56471_57074[(5)] = ex56459);


var statearr_56473_57075 = state_56432__$1;
(statearr_56473_57075[(1)] = (24));

(statearr_56473_57075[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (17))){
var inst_56345 = (state_56432[(15)]);
var inst_56348 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56349 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56350 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56351 = cljs.core.cons(inst_56350,inst_56345);
var inst_56352 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56349,24,inst_56351,"Manual flush should flush all items"];
var inst_56353 = cljs.core.PersistentHashMap.fromArrays(inst_56348,inst_56352);
var inst_56354 = cljs.test.report.call(null,inst_56353);
var state_56432__$1 = state_56432;
var statearr_56474_57082 = state_56432__$1;
(statearr_56474_57082[(2)] = inst_56354);

(statearr_56474_57082[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (3))){
var inst_56276 = (state_56432[(2)]);
var inst_56281 = cljs.core.async.timeout((20));
var state_56432__$1 = (function (){var statearr_56475 = state_56432;
(statearr_56475[(21)] = inst_56276);

return statearr_56475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56432__$1,(4),inst_56281);
} else {
if((state_val_56433 === (12))){
var inst_56325 = (state_56432[(2)]);
var state_56432__$1 = (function (){var statearr_56476 = state_56432;
(statearr_56476[(22)] = inst_56325);

return statearr_56476;
})();
var statearr_56477_57084 = state_56432__$1;
(statearr_56477_57084[(2)] = null);

(statearr_56477_57084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (2))){
var inst_56265 = (state_56432[(11)]);
var inst_56274 = (state_56432[(2)]);
var state_56432__$1 = (function (){var statearr_56478 = state_56432;
(statearr_56478[(23)] = inst_56274);

return statearr_56478;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56432__$1,(3),inst_56265,(2));
} else {
if((state_val_56433 === (23))){
var inst_56428 = (state_56432[(2)]);
var inst_56429 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56432__$1 = (function (){var statearr_56479 = state_56432;
(statearr_56479[(24)] = inst_56428);

return statearr_56479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56432__$1,inst_56429);
} else {
if((state_val_56433 === (19))){
var inst_56346 = (state_56432[(16)]);
var inst_56367 = (state_56432[(2)]);
var _ = (function (){var statearr_56480 = state_56432;
(statearr_56480[(4)] = cljs.core.rest((state_56432[(4)])));

return statearr_56480;
})();
var state_56432__$1 = (function (){var statearr_56481 = state_56432;
(statearr_56481[(25)] = inst_56367);

return statearr_56481;
})();
var statearr_56482_57085 = state_56432__$1;
(statearr_56482_57085[(2)] = inst_56346);

(statearr_56482_57085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (11))){
var inst_56297 = (state_56432[(26)]);
var inst_56318 = (state_56432[(2)]);
var _ = (function (){var statearr_56483 = state_56432;
(statearr_56483[(4)] = cljs.core.rest((state_56432[(4)])));

return statearr_56483;
})();
var state_56432__$1 = (function (){var statearr_56484 = state_56432;
(statearr_56484[(27)] = inst_56318);

return statearr_56484;
})();
var statearr_56485_57086 = state_56432__$1;
(statearr_56485_57086[(2)] = inst_56297);

(statearr_56485_57086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (9))){
var inst_56296 = (state_56432[(28)]);
var inst_56299 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56300 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56301 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56302 = cljs.core.cons(inst_56301,inst_56296);
var inst_56303 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56300,19,inst_56302,"Buffer should not flush automatically without timer"];
var inst_56304 = cljs.core.PersistentHashMap.fromArrays(inst_56299,inst_56303);
var inst_56305 = cljs.test.report.call(null,inst_56304);
var state_56432__$1 = state_56432;
var statearr_56486_57087 = state_56432__$1;
(statearr_56486_57087[(2)] = inst_56305);

(statearr_56486_57087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (5))){
var inst_56267 = (state_56432[(12)]);
var inst_56296 = (state_56432[(28)]);
var inst_56297 = (state_56432[(26)]);
var _ = (function (){var statearr_56487 = state_56432;
(statearr_56487[(4)] = cljs.core.cons((8),(state_56432[(4)])));

return statearr_56487;
})();
var inst_56295 = cljs.core.deref(inst_56267);
var inst_56296__$1 = (new cljs.core.List(null,inst_56295,null,(1),null));
var inst_56297__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56296__$1);
var state_56432__$1 = (function (){var statearr_56488 = state_56432;
(statearr_56488[(28)] = inst_56296__$1);

(statearr_56488[(26)] = inst_56297__$1);

return statearr_56488;
})();
if(cljs.core.truth_(inst_56297__$1)){
var statearr_56489_57089 = state_56432__$1;
(statearr_56489_57089[(1)] = (9));

} else {
var statearr_56490_57090 = state_56432__$1;
(statearr_56490_57090[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (14))){
var inst_56265 = (state_56432[(11)]);
var inst_56370 = (state_56432[(2)]);
var state_56432__$1 = (function (){var statearr_56492 = state_56432;
(statearr_56492[(29)] = inst_56370);

return statearr_56492;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56432__$1,(20),inst_56265,(3));
} else {
if((state_val_56433 === (26))){
var inst_56399 = (state_56432[(10)]);
var inst_56406 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56407 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56408 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56409 = cljs.core.cons(inst_56408,inst_56399);
var inst_56410 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56407,29,inst_56409,"Subsequent flush should work"];
var inst_56411 = cljs.core.PersistentHashMap.fromArrays(inst_56406,inst_56410);
var inst_56412 = cljs.test.report.call(null,inst_56411);
var state_56432__$1 = state_56432;
var statearr_56495_57092 = state_56432__$1;
(statearr_56495_57092[(2)] = inst_56412);

(statearr_56495_57092[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (16))){
var _ = (function (){var statearr_56496 = state_56432;
(statearr_56496[(4)] = cljs.core.rest((state_56432[(4)])));

return statearr_56496;
})();
var state_56432__$1 = state_56432;
var ex56491 = (state_56432__$1[(2)]);
var statearr_56497_57093 = state_56432__$1;
(statearr_56497_57093[(5)] = ex56491);


var statearr_56499_57094 = state_56432__$1;
(statearr_56499_57094[(1)] = (15));

(statearr_56499_57094[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (10))){
var inst_56296 = (state_56432[(28)]);
var inst_56307 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56308 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56309 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56310 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56311 = cljs.core.cons(inst_56310,inst_56296);
var inst_56312 = (new cljs.core.List(null,inst_56311,null,(1),null));
var inst_56313 = (new cljs.core.List(null,inst_56309,inst_56312,(2),null));
var inst_56314 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56308,19,inst_56313,"Buffer should not flush automatically without timer"];
var inst_56315 = cljs.core.PersistentHashMap.fromArrays(inst_56307,inst_56314);
var inst_56316 = cljs.test.report.call(null,inst_56315);
var state_56432__$1 = state_56432;
var statearr_56501_57095 = state_56432__$1;
(statearr_56501_57095[(2)] = inst_56316);

(statearr_56501_57095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (18))){
var inst_56345 = (state_56432[(15)]);
var inst_56356 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56357 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56358 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56359 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56360 = cljs.core.cons(inst_56359,inst_56345);
var inst_56361 = (new cljs.core.List(null,inst_56360,null,(1),null));
var inst_56362 = (new cljs.core.List(null,inst_56358,inst_56361,(2),null));
var inst_56363 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56357,24,inst_56362,"Manual flush should flush all items"];
var inst_56364 = cljs.core.PersistentHashMap.fromArrays(inst_56356,inst_56363);
var inst_56365 = cljs.test.report.call(null,inst_56364);
var state_56432__$1 = state_56432;
var statearr_56503_57096 = state_56432__$1;
(statearr_56503_57096[(2)] = inst_56365);

(statearr_56503_57096[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56433 === (8))){
var _ = (function (){var statearr_56504 = state_56432;
(statearr_56504[(4)] = cljs.core.rest((state_56432[(4)])));

return statearr_56504;
})();
var state_56432__$1 = state_56432;
var ex56500 = (state_56432__$1[(2)]);
var statearr_56506_57097 = state_56432__$1;
(statearr_56506_57097[(5)] = ex56500);


var statearr_56507_57099 = state_56432__$1;
(statearr_56507_57099[(1)] = (7));

(statearr_56507_57099[(5)] = null);



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
}
}
}
}
}
}
}
}
}
}
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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0 = (function (){
var statearr_56509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56509[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56509[(1)] = (1));

return statearr_56509;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56432){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56432);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56510){var ex__32294__auto__ = e56510;
var statearr_56511_57105 = state_56432;
(statearr_56511_57105[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56432[(4)]))){
var statearr_56512_57106 = state_56432;
(statearr_56512_57106[(1)] = cljs.core.first((state_56432[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57107 = state_56432;
state_56432 = G__57107;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56432){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56513 = f__32362__auto__();
(statearr_56513[(6)] = c__32361__auto__);

return statearr_56513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56246","meta56246",-1901380265,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56245");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56245");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56245.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56245 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56245(meta56246){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245(meta56246));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56245(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536 = (function (meta56537){
this.meta56537 = meta56537;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56538,meta56537__$1){
var self__ = this;
var _56538__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536(meta56537__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56538){
var self__ = this;
var _56538__$1 = this;
return self__.meta56537;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56542 = (arguments.length - (1));
switch (G__56542) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536.prototype.apply = (function (self__,args56540){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56540)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56780){
var state_val_56781 = (state_56780[(1)]);
if((state_val_56781 === (7))){
var inst_56569 = (state_56780[(2)]);
var inst_56570 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56571 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56572 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56571,47,inst_56569,"Should not flush before timeout"];
var inst_56573 = cljs.core.PersistentHashMap.fromArrays(inst_56570,inst_56572);
var inst_56574 = cljs.test.report.call(null,inst_56573);
var state_56780__$1 = state_56780;
var statearr_56809_57115 = state_56780__$1;
(statearr_56809_57115[(2)] = inst_56574);

(statearr_56809_57115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (20))){
var inst_56664 = (state_56780[(2)]);
var inst_56667 = cljs.core.async.timeout((50));
var state_56780__$1 = (function (){var statearr_56810 = state_56780;
(statearr_56810[(7)] = inst_56664);

return statearr_56810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56780__$1,(21),inst_56667);
} else {
if((state_val_56781 === (27))){
var _ = (function (){var statearr_56816 = state_56780;
(statearr_56816[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56816;
})();
var state_56780__$1 = state_56780;
var ex56782 = (state_56780__$1[(2)]);
var statearr_56823_57118 = state_56780__$1;
(statearr_56823_57118[(5)] = ex56782);


var statearr_56824_57120 = state_56780__$1;
(statearr_56824_57120[(1)] = (26));

(statearr_56824_57120[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (1))){
var inst_56545 = (state_56780[(8)]);
var inst_56547 = (state_56780[(9)]);
var inst_56545__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56546 = cljs.core.PersistentVector.EMPTY;
var inst_56547__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56546);
var inst_56548 = (function (){var input_ch = inst_56545__$1;
var results = inst_56547__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56549 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56550 = [inst_56545__$1,(100),inst_56548];
var inst_56551 = cljs.core.PersistentHashMap.fromArrays(inst_56549,inst_56550);
var inst_56552 = bb_web_ds_tools.components.async_buffer.create(inst_56551);
var state_56780__$1 = (function (){var statearr_56830 = state_56780;
(statearr_56830[(8)] = inst_56545__$1);

(statearr_56830[(9)] = inst_56547__$1);

(statearr_56830[(10)] = inst_56552);

return statearr_56830;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56780__$1,(2),inst_56545__$1,(1));
} else {
if((state_val_56781 === (24))){
var inst_56547 = (state_56780[(9)]);
var inst_56698 = (state_56780[(11)]);
var inst_56699 = (state_56780[(12)]);
var _ = (function (){var statearr_56831 = state_56780;
(statearr_56831[(4)] = cljs.core.cons((27),(state_56780[(4)])));

return statearr_56831;
})();
var inst_56686 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56687 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56688 = [(1),(2)];
var inst_56689 = (new cljs.core.PersistentVector(null,2,(5),inst_56687,inst_56688,null));
var inst_56690 = [inst_56689];
var inst_56691 = (new cljs.core.PersistentVector(null,1,(5),inst_56686,inst_56690,null));
var inst_56696 = cljs.core.deref(inst_56547);
var inst_56697 = (new cljs.core.List(null,inst_56696,null,(1),null));
var inst_56698__$1 = (new cljs.core.List(null,inst_56691,inst_56697,(2),null));
var inst_56699__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56698__$1);
var state_56780__$1 = (function (){var statearr_56832 = state_56780;
(statearr_56832[(11)] = inst_56698__$1);

(statearr_56832[(12)] = inst_56699__$1);

return statearr_56832;
})();
if(cljs.core.truth_(inst_56699__$1)){
var statearr_56833_57123 = state_56780__$1;
(statearr_56833_57123[(1)] = (28));

} else {
var statearr_56834_57125 = state_56780__$1;
(statearr_56834_57125[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (4))){
var inst_56568 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56835 = state_56780;
(statearr_56835[(13)] = inst_56568);

return statearr_56835;
})();
var statearr_56836_57126 = state_56780__$1;
(statearr_56836_57126[(2)] = null);

(statearr_56836_57126[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (15))){
var inst_56611 = (state_56780[(2)]);
var inst_56612 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56613 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56614 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56613,50,inst_56611,"Should flush after timeout"];
var inst_56615 = cljs.core.PersistentHashMap.fromArrays(inst_56612,inst_56614);
var inst_56616 = cljs.test.report.call(null,inst_56615);
var state_56780__$1 = state_56780;
var statearr_56837_57128 = state_56780__$1;
(statearr_56837_57128[(2)] = inst_56616);

(statearr_56837_57128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (21))){
var inst_56545 = (state_56780[(8)]);
var inst_56669 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56838 = state_56780;
(statearr_56838[(14)] = inst_56669);

return statearr_56838;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56780__$1,(22),inst_56545,(4));
} else {
if((state_val_56781 === (31))){
var inst_56726 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56839 = state_56780;
(statearr_56839[(15)] = inst_56726);

return statearr_56839;
})();
var statearr_56840_57129 = state_56780__$1;
(statearr_56840_57129[(2)] = null);

(statearr_56840_57129[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (32))){
var inst_56547 = (state_56780[(9)]);
var inst_56750 = (state_56780[(16)]);
var inst_56751 = (state_56780[(17)]);
var _ = (function (){var statearr_56841 = state_56780;
(statearr_56841[(4)] = cljs.core.cons((35),(state_56780[(4)])));

return statearr_56841;
})();
var inst_56739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56740 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56741 = [(1),(2)];
var inst_56742 = (new cljs.core.PersistentVector(null,2,(5),inst_56740,inst_56741,null));
var inst_56743 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56744 = [(3),(4)];
var inst_56745 = (new cljs.core.PersistentVector(null,2,(5),inst_56743,inst_56744,null));
var inst_56746 = [inst_56742,inst_56745];
var inst_56747 = (new cljs.core.PersistentVector(null,2,(5),inst_56739,inst_56746,null));
var inst_56748 = cljs.core.deref(inst_56547);
var inst_56749 = (new cljs.core.List(null,inst_56748,null,(1),null));
var inst_56750__$1 = (new cljs.core.List(null,inst_56747,inst_56749,(2),null));
var inst_56751__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56750__$1);
var state_56780__$1 = (function (){var statearr_56842 = state_56780;
(statearr_56842[(16)] = inst_56750__$1);

(statearr_56842[(17)] = inst_56751__$1);

return statearr_56842;
})();
if(cljs.core.truth_(inst_56751__$1)){
var statearr_56843_57130 = state_56780__$1;
(statearr_56843_57130[(1)] = (36));

} else {
var statearr_56844_57131 = state_56780__$1;
(statearr_56844_57131[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (33))){
var inst_56776 = (state_56780[(2)]);
var inst_56777 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56780__$1 = (function (){var statearr_56845 = state_56780;
(statearr_56845[(18)] = inst_56776);

return statearr_56845;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56780__$1,inst_56777);
} else {
if((state_val_56781 === (13))){
var inst_56547 = (state_56780[(9)]);
var inst_56635 = (state_56780[(19)]);
var inst_56636 = (state_56780[(20)]);
var _ = (function (){var statearr_56846 = state_56780;
(statearr_56846[(4)] = cljs.core.cons((16),(state_56780[(4)])));

return statearr_56846;
})();
var inst_56626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56627 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56628 = [(1),(2)];
var inst_56629 = (new cljs.core.PersistentVector(null,2,(5),inst_56627,inst_56628,null));
var inst_56630 = [inst_56629];
var inst_56631 = (new cljs.core.PersistentVector(null,1,(5),inst_56626,inst_56630,null));
var inst_56633 = cljs.core.deref(inst_56547);
var inst_56634 = (new cljs.core.List(null,inst_56633,null,(1),null));
var inst_56635__$1 = (new cljs.core.List(null,inst_56631,inst_56634,(2),null));
var inst_56636__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56635__$1);
var state_56780__$1 = (function (){var statearr_56847 = state_56780;
(statearr_56847[(19)] = inst_56635__$1);

(statearr_56847[(20)] = inst_56636__$1);

return statearr_56847;
})();
if(cljs.core.truth_(inst_56636__$1)){
var statearr_56848_57133 = state_56780__$1;
(statearr_56848_57133[(1)] = (17));

} else {
var statearr_56849_57134 = state_56780__$1;
(statearr_56849_57134[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (22))){
var inst_56671 = (state_56780[(2)]);
var inst_56672 = cljs.core.async.timeout((20));
var state_56780__$1 = (function (){var statearr_56850 = state_56780;
(statearr_56850[(21)] = inst_56671);

return statearr_56850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56780__$1,(23),inst_56672);
} else {
if((state_val_56781 === (36))){
var inst_56750 = (state_56780[(16)]);
var inst_56753 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56754 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56755 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56756 = cljs.core.cons(inst_56755,inst_56750);
var inst_56757 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56754,60,inst_56756,"Should flush 3,4 after timeout from first message"];
var inst_56758 = cljs.core.PersistentHashMap.fromArrays(inst_56753,inst_56757);
var inst_56759 = cljs.test.report.call(null,inst_56758);
var state_56780__$1 = state_56780;
var statearr_56851_57138 = state_56780__$1;
(statearr_56851_57138[(2)] = inst_56759);

(statearr_56851_57138[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (29))){
var inst_56698 = (state_56780[(11)]);
var inst_56709 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56710 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56711 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56712 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56713 = cljs.core.cons(inst_56712,inst_56698);
var inst_56714 = (new cljs.core.List(null,inst_56713,null,(1),null));
var inst_56715 = (new cljs.core.List(null,inst_56711,inst_56714,(2),null));
var inst_56716 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56710,57,inst_56715,"Should not flush 3,4 yet"];
var inst_56717 = cljs.core.PersistentHashMap.fromArrays(inst_56709,inst_56716);
var inst_56718 = cljs.test.report.call(null,inst_56717);
var state_56780__$1 = state_56780;
var statearr_56852_57139 = state_56780__$1;
(statearr_56852_57139[(2)] = inst_56718);

(statearr_56852_57139[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (6))){
var inst_56607 = (state_56780[(2)]);
var inst_56608 = cljs.core.async.timeout((100));
var state_56780__$1 = (function (){var statearr_56853 = state_56780;
(statearr_56853[(22)] = inst_56607);

return statearr_56853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56780__$1,(12),inst_56608);
} else {
if((state_val_56781 === (28))){
var inst_56698 = (state_56780[(11)]);
var inst_56701 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56702 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56703 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56704 = cljs.core.cons(inst_56703,inst_56698);
var inst_56705 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56702,57,inst_56704,"Should not flush 3,4 yet"];
var inst_56706 = cljs.core.PersistentHashMap.fromArrays(inst_56701,inst_56705);
var inst_56707 = cljs.test.report.call(null,inst_56706);
var state_56780__$1 = state_56780;
var statearr_56854_57141 = state_56780__$1;
(statearr_56854_57141[(2)] = inst_56707);

(statearr_56854_57141[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (25))){
var inst_56723 = (state_56780[(2)]);
var inst_56724 = cljs.core.async.timeout((80));
var state_56780__$1 = (function (){var statearr_56855 = state_56780;
(statearr_56855[(23)] = inst_56723);

return statearr_56855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56780__$1,(31),inst_56724);
} else {
if((state_val_56781 === (34))){
var inst_56727 = (state_56780[(2)]);
var inst_56728 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56729 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56730 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56729,60,inst_56727,"Should flush 3,4 after timeout from first message"];
var inst_56731 = cljs.core.PersistentHashMap.fromArrays(inst_56728,inst_56730);
var inst_56732 = cljs.test.report.call(null,inst_56731);
var state_56780__$1 = state_56780;
var statearr_56856_57142 = state_56780__$1;
(statearr_56856_57142[(2)] = inst_56732);

(statearr_56856_57142[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (17))){
var inst_56635 = (state_56780[(19)]);
var inst_56638 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56639 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56640 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56641 = cljs.core.cons(inst_56640,inst_56635);
var inst_56642 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56639,50,inst_56641,"Should flush after timeout"];
var inst_56643 = cljs.core.PersistentHashMap.fromArrays(inst_56638,inst_56642);
var inst_56644 = cljs.test.report.call(null,inst_56643);
var state_56780__$1 = state_56780;
var statearr_56857_57143 = state_56780__$1;
(statearr_56857_57143[(2)] = inst_56644);

(statearr_56857_57143[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (3))){
var inst_56565 = (state_56780[(2)]);
var inst_56566 = cljs.core.async.timeout((50));
var state_56780__$1 = (function (){var statearr_56858 = state_56780;
(statearr_56858[(24)] = inst_56565);

return statearr_56858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56780__$1,(4),inst_56566);
} else {
if((state_val_56781 === (12))){
var inst_56610 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56859 = state_56780;
(statearr_56859[(25)] = inst_56610);

return statearr_56859;
})();
var statearr_56860_57148 = state_56780__$1;
(statearr_56860_57148[(2)] = null);

(statearr_56860_57148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (2))){
var inst_56545 = (state_56780[(8)]);
var inst_56563 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56862 = state_56780;
(statearr_56862[(26)] = inst_56563);

return statearr_56862;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56780__$1,(3),inst_56545,(2));
} else {
if((state_val_56781 === (23))){
var inst_56674 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56863 = state_56780;
(statearr_56863[(27)] = inst_56674);

return statearr_56863;
})();
var statearr_56864_57149 = state_56780__$1;
(statearr_56864_57149[(2)] = null);

(statearr_56864_57149[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (35))){
var _ = (function (){var statearr_56865 = state_56780;
(statearr_56865[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56865;
})();
var state_56780__$1 = state_56780;
var ex56861 = (state_56780__$1[(2)]);
var statearr_56866_57150 = state_56780__$1;
(statearr_56866_57150[(5)] = ex56861);


var statearr_56867_57152 = state_56780__$1;
(statearr_56867_57152[(1)] = (34));

(statearr_56867_57152[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (19))){
var inst_56636 = (state_56780[(20)]);
var inst_56659 = (state_56780[(2)]);
var _ = (function (){var statearr_56868 = state_56780;
(statearr_56868[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56868;
})();
var state_56780__$1 = (function (){var statearr_56869 = state_56780;
(statearr_56869[(28)] = inst_56659);

return statearr_56869;
})();
var statearr_56870_57155 = state_56780__$1;
(statearr_56870_57155[(2)] = inst_56636);

(statearr_56870_57155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (11))){
var inst_56582 = (state_56780[(29)]);
var inst_56604 = (state_56780[(2)]);
var _ = (function (){var statearr_56871 = state_56780;
(statearr_56871[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56871;
})();
var state_56780__$1 = (function (){var statearr_56872 = state_56780;
(statearr_56872[(30)] = inst_56604);

return statearr_56872;
})();
var statearr_56873_57157 = state_56780__$1;
(statearr_56873_57157[(2)] = inst_56582);

(statearr_56873_57157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (9))){
var inst_56581 = (state_56780[(31)]);
var inst_56584 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56585 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56586 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56587 = cljs.core.cons(inst_56586,inst_56581);
var inst_56588 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56585,47,inst_56587,"Should not flush before timeout"];
var inst_56589 = cljs.core.PersistentHashMap.fromArrays(inst_56584,inst_56588);
var inst_56590 = cljs.test.report.call(null,inst_56589);
var state_56780__$1 = state_56780;
var statearr_56874_57158 = state_56780__$1;
(statearr_56874_57158[(2)] = inst_56590);

(statearr_56874_57158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (5))){
var inst_56547 = (state_56780[(9)]);
var inst_56581 = (state_56780[(31)]);
var inst_56582 = (state_56780[(29)]);
var _ = (function (){var statearr_56875 = state_56780;
(statearr_56875[(4)] = cljs.core.cons((8),(state_56780[(4)])));

return statearr_56875;
})();
var inst_56580 = cljs.core.deref(inst_56547);
var inst_56581__$1 = (new cljs.core.List(null,inst_56580,null,(1),null));
var inst_56582__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56581__$1);
var state_56780__$1 = (function (){var statearr_56876 = state_56780;
(statearr_56876[(31)] = inst_56581__$1);

(statearr_56876[(29)] = inst_56582__$1);

return statearr_56876;
})();
if(cljs.core.truth_(inst_56582__$1)){
var statearr_56877_57160 = state_56780__$1;
(statearr_56877_57160[(1)] = (9));

} else {
var statearr_56878_57161 = state_56780__$1;
(statearr_56878_57161[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (14))){
var inst_56545 = (state_56780[(8)]);
var inst_56662 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56880 = state_56780;
(statearr_56880[(32)] = inst_56662);

return statearr_56880;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56780__$1,(20),inst_56545,(3));
} else {
if((state_val_56781 === (26))){
var inst_56675 = (state_56780[(2)]);
var inst_56676 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56677 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56678 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56677,57,inst_56675,"Should not flush 3,4 yet"];
var inst_56679 = cljs.core.PersistentHashMap.fromArrays(inst_56676,inst_56678);
var inst_56680 = cljs.test.report.call(null,inst_56679);
var state_56780__$1 = state_56780;
var statearr_56881_57164 = state_56780__$1;
(statearr_56881_57164[(2)] = inst_56680);

(statearr_56881_57164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (16))){
var _ = (function (){var statearr_56882 = state_56780;
(statearr_56882[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56882;
})();
var state_56780__$1 = state_56780;
var ex56879 = (state_56780__$1[(2)]);
var statearr_56883_57165 = state_56780__$1;
(statearr_56883_57165[(5)] = ex56879);


var statearr_56884_57166 = state_56780__$1;
(statearr_56884_57166[(1)] = (15));

(statearr_56884_57166[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (38))){
var inst_56751 = (state_56780[(17)]);
var inst_56773 = (state_56780[(2)]);
var _ = (function (){var statearr_56885 = state_56780;
(statearr_56885[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56885;
})();
var state_56780__$1 = (function (){var statearr_56886 = state_56780;
(statearr_56886[(33)] = inst_56773);

return statearr_56886;
})();
var statearr_56887_57168 = state_56780__$1;
(statearr_56887_57168[(2)] = inst_56751);

(statearr_56887_57168[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (30))){
var inst_56699 = (state_56780[(12)]);
var inst_56720 = (state_56780[(2)]);
var _ = (function (){var statearr_56888 = state_56780;
(statearr_56888[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56888;
})();
var state_56780__$1 = (function (){var statearr_56889 = state_56780;
(statearr_56889[(34)] = inst_56720);

return statearr_56889;
})();
var statearr_56890_57169 = state_56780__$1;
(statearr_56890_57169[(2)] = inst_56699);

(statearr_56890_57169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (10))){
var inst_56581 = (state_56780[(31)]);
var inst_56593 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56594 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56595 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56596 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56597 = cljs.core.cons(inst_56596,inst_56581);
var inst_56598 = (new cljs.core.List(null,inst_56597,null,(1),null));
var inst_56599 = (new cljs.core.List(null,inst_56595,inst_56598,(2),null));
var inst_56600 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56594,47,inst_56599,"Should not flush before timeout"];
var inst_56601 = cljs.core.PersistentHashMap.fromArrays(inst_56593,inst_56600);
var inst_56602 = cljs.test.report.call(null,inst_56601);
var state_56780__$1 = state_56780;
var statearr_56891_57170 = state_56780__$1;
(statearr_56891_57170[(2)] = inst_56602);

(statearr_56891_57170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (18))){
var inst_56635 = (state_56780[(19)]);
var inst_56646 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56647 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56648 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56651 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56652 = cljs.core.cons(inst_56651,inst_56635);
var inst_56653 = (new cljs.core.List(null,inst_56652,null,(1),null));
var inst_56654 = (new cljs.core.List(null,inst_56648,inst_56653,(2),null));
var inst_56655 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56647,50,inst_56654,"Should flush after timeout"];
var inst_56656 = cljs.core.PersistentHashMap.fromArrays(inst_56646,inst_56655);
var inst_56657 = cljs.test.report.call(null,inst_56656);
var state_56780__$1 = state_56780;
var statearr_56894_57176 = state_56780__$1;
(statearr_56894_57176[(2)] = inst_56657);

(statearr_56894_57176[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (37))){
var inst_56750 = (state_56780[(16)]);
var inst_56761 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56762 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56763 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56765 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56766 = cljs.core.cons(inst_56765,inst_56750);
var inst_56767 = (new cljs.core.List(null,inst_56766,null,(1),null));
var inst_56768 = (new cljs.core.List(null,inst_56763,inst_56767,(2),null));
var inst_56769 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56762,60,inst_56768,"Should flush 3,4 after timeout from first message"];
var inst_56770 = cljs.core.PersistentHashMap.fromArrays(inst_56761,inst_56769);
var inst_56771 = cljs.test.report.call(null,inst_56770);
var state_56780__$1 = state_56780;
var statearr_56900_57178 = state_56780__$1;
(statearr_56900_57178[(2)] = inst_56771);

(statearr_56900_57178[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (8))){
var _ = (function (){var statearr_56905 = state_56780;
(statearr_56905[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56905;
})();
var state_56780__$1 = state_56780;
var ex56892 = (state_56780__$1[(2)]);
var statearr_56907_57179 = state_56780__$1;
(statearr_56907_57179[(5)] = ex56892);


var statearr_56908_57180 = state_56780__$1;
(statearr_56908_57180[(1)] = (7));

(statearr_56908_57180[(5)] = null);



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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0 = (function (){
var statearr_56910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56910[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56910[(1)] = (1));

return statearr_56910;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56780){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56780);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56911){var ex__32294__auto__ = e56911;
var statearr_56913_57181 = state_56780;
(statearr_56913_57181[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56780[(4)]))){
var statearr_56914_57183 = state_56780;
(statearr_56914_57183[(1)] = cljs.core.first((state_56780[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57184 = state_56780;
state_56780 = G__57184;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56780){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56916 = f__32362__auto__();
(statearr_56916[(6)] = c__32361__auto__);

return statearr_56916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56537","meta56537",477564039,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56536");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56536");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56536.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56536 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56536(meta56537){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536(meta56537));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56536(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927 = (function (meta56928){
this.meta56928 = meta56928;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56929,meta56928__$1){
var self__ = this;
var _56929__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927(meta56928__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56929){
var self__ = this;
var _56929__$1 = this;
return self__.meta56928;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56932 = (arguments.length - (1));
switch (G__56932) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927.prototype.apply = (function (self__,args56930){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56930)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_57002){
var state_val_57003 = (state_57002[(1)]);
if((state_val_57003 === (7))){
var inst_56949 = (state_57002[(2)]);
var inst_56950 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56951 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56952 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_56951,78,inst_56949,"Closing input should flush remaining"];
var inst_56953 = cljs.core.PersistentHashMap.fromArrays(inst_56950,inst_56952);
var inst_56954 = cljs.test.report.call(null,inst_56953);
var state_57002__$1 = state_57002;
var statearr_57004_57201 = state_57002__$1;
(statearr_57004_57201[(2)] = inst_56954);

(statearr_57004_57201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57003 === (1))){
var inst_56933 = (state_57002[(7)]);
var inst_56935 = (state_57002[(8)]);
var inst_56933__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56934 = cljs.core.PersistentVector.EMPTY;
var inst_56935__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56934);
var inst_56936 = (function (){var input_ch = inst_56933__$1;
var results = inst_56935__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56937 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56938 = [inst_56933__$1,inst_56936];
var inst_56939 = cljs.core.PersistentHashMap.fromArrays(inst_56937,inst_56938);
var inst_56940 = bb_web_ds_tools.components.async_buffer.create(inst_56939);
var state_57002__$1 = (function (){var statearr_57009 = state_57002;
(statearr_57009[(7)] = inst_56933__$1);

(statearr_57009[(8)] = inst_56935__$1);

(statearr_57009[(9)] = inst_56940);

return statearr_57009;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57002__$1,(2),inst_56933__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_57003 === (4))){
var inst_56948 = (state_57002[(2)]);
var state_57002__$1 = (function (){var statearr_57012 = state_57002;
(statearr_57012[(10)] = inst_56948);

return statearr_57012;
})();
var statearr_57013_57204 = state_57002__$1;
(statearr_57013_57204[(2)] = null);

(statearr_57013_57204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57003 === (6))){
var inst_56993 = (state_57002[(2)]);
var inst_56994 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_57002__$1 = (function (){var statearr_57014 = state_57002;
(statearr_57014[(11)] = inst_56993);

return statearr_57014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57002__$1,inst_56994);
} else {
if((state_val_57003 === (3))){
var inst_56933 = (state_57002[(7)]);
var inst_56944 = (state_57002[(2)]);
var inst_56945 = cljs.core.async.close_BANG_(inst_56933);
var inst_56946 = cljs.core.async.timeout((20));
var state_57002__$1 = (function (){var statearr_57015 = state_57002;
(statearr_57015[(12)] = inst_56944);

(statearr_57015[(13)] = inst_56945);

return statearr_57015;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57002__$1,(4),inst_56946);
} else {
if((state_val_57003 === (2))){
var inst_56933 = (state_57002[(7)]);
var inst_56942 = (state_57002[(2)]);
var state_57002__$1 = (function (){var statearr_57016 = state_57002;
(statearr_57016[(14)] = inst_56942);

return statearr_57016;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57002__$1,(3),inst_56933,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_57003 === (11))){
var inst_56969 = (state_57002[(15)]);
var inst_56990 = (state_57002[(2)]);
var _ = (function (){var statearr_57017 = state_57002;
(statearr_57017[(4)] = cljs.core.rest((state_57002[(4)])));

return statearr_57017;
})();
var state_57002__$1 = (function (){var statearr_57018 = state_57002;
(statearr_57018[(16)] = inst_56990);

return statearr_57018;
})();
var statearr_57019_57210 = state_57002__$1;
(statearr_57019_57210[(2)] = inst_56969);

(statearr_57019_57210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57003 === (9))){
var inst_56968 = (state_57002[(17)]);
var inst_56971 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56972 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56973 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56974 = cljs.core.cons(inst_56973,inst_56968);
var inst_56975 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_56972,78,inst_56974,"Closing input should flush remaining"];
var inst_56976 = cljs.core.PersistentHashMap.fromArrays(inst_56971,inst_56975);
var inst_56977 = cljs.test.report.call(null,inst_56976);
var state_57002__$1 = state_57002;
var statearr_57020_57213 = state_57002__$1;
(statearr_57020_57213[(2)] = inst_56977);

(statearr_57020_57213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57003 === (5))){
var inst_56935 = (state_57002[(8)]);
var inst_56968 = (state_57002[(17)]);
var inst_56969 = (state_57002[(15)]);
var _ = (function (){var statearr_57024 = state_57002;
(statearr_57024[(4)] = cljs.core.cons((8),(state_57002[(4)])));

return statearr_57024;
})();
var inst_56960 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56961 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56962 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_56963 = (new cljs.core.PersistentVector(null,2,(5),inst_56961,inst_56962,null));
var inst_56964 = [inst_56963];
var inst_56965 = (new cljs.core.PersistentVector(null,1,(5),inst_56960,inst_56964,null));
var inst_56966 = cljs.core.deref(inst_56935);
var inst_56967 = (new cljs.core.List(null,inst_56966,null,(1),null));
var inst_56968__$1 = (new cljs.core.List(null,inst_56965,inst_56967,(2),null));
var inst_56969__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56968__$1);
var state_57002__$1 = (function (){var statearr_57029 = state_57002;
(statearr_57029[(17)] = inst_56968__$1);

(statearr_57029[(15)] = inst_56969__$1);

return statearr_57029;
})();
if(cljs.core.truth_(inst_56969__$1)){
var statearr_57030_57214 = state_57002__$1;
(statearr_57030_57214[(1)] = (9));

} else {
var statearr_57031_57215 = state_57002__$1;
(statearr_57031_57215[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57003 === (10))){
var inst_56968 = (state_57002[(17)]);
var inst_56979 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56980 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56981 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56982 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56983 = cljs.core.cons(inst_56982,inst_56968);
var inst_56984 = (new cljs.core.List(null,inst_56983,null,(1),null));
var inst_56985 = (new cljs.core.List(null,inst_56981,inst_56984,(2),null));
var inst_56986 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_56980,78,inst_56985,"Closing input should flush remaining"];
var inst_56987 = cljs.core.PersistentHashMap.fromArrays(inst_56979,inst_56986);
var inst_56988 = cljs.test.report.call(null,inst_56987);
var state_57002__$1 = state_57002;
var statearr_57032_57216 = state_57002__$1;
(statearr_57032_57216[(2)] = inst_56988);

(statearr_57032_57216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57003 === (8))){
var _ = (function (){var statearr_57033 = state_57002;
(statearr_57033[(4)] = cljs.core.rest((state_57002[(4)])));

return statearr_57033;
})();
var state_57002__$1 = state_57002;
var ex57021 = (state_57002__$1[(2)]);
var statearr_57034_57217 = state_57002__$1;
(statearr_57034_57217[(5)] = ex57021);


var statearr_57035_57218 = state_57002__$1;
(statearr_57035_57218[(1)] = (7));

(statearr_57035_57218[(5)] = null);



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
}
}
});
return (function() {
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0 = (function (){
var statearr_57036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57036[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57036[(1)] = (1));

return statearr_57036;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_57002){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_57002);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57037){var ex__32294__auto__ = e57037;
var statearr_57038_57221 = state_57002;
(statearr_57038_57221[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_57002[(4)]))){
var statearr_57039_57223 = state_57002;
(statearr_57039_57223[(1)] = cljs.core.first((state_57002[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57224 = state_57002;
state_57002 = G__57224;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_57002){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_57002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_57040 = f__32362__auto__();
(statearr_57040[(6)] = c__32361__auto__);

return statearr_57040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56928","meta56928",1693152453,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56927");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56927");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56927.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56927 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56927(meta56928){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927(meta56928));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56927(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
