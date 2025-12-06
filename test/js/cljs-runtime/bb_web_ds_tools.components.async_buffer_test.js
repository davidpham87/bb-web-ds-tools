goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267 = (function (meta56268){
this.meta56268 = meta56268;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56269,meta56268__$1){
var self__ = this;
var _56269__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267(meta56268__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56269){
var self__ = this;
var _56269__$1 = this;
return self__.meta56268;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56271 = (arguments.length - (1));
switch (G__56271) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267.prototype.apply = (function (self__,args56270){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56270)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56444){
var state_val_56445 = (state_56444[(1)]);
if((state_val_56445 === (7))){
var inst_56293 = (state_56444[(2)]);
var inst_56294 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56295 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56296 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56295,19,inst_56293,"Buffer should not flush automatically without timer"];
var inst_56297 = cljs.core.PersistentHashMap.fromArrays(inst_56294,inst_56296);
var inst_56298 = cljs.test.report.call(null,inst_56297);
var state_56444__$1 = state_56444;
var statearr_56446_57041 = state_56444__$1;
(statearr_56446_57041[(2)] = inst_56298);

(statearr_56446_57041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (20))){
var inst_56285 = (state_56444[(7)]);
var inst_56383 = (state_56444[(2)]);
var inst_56384 = (inst_56285.cljs$core$IFn$_invoke$arity$0 ? inst_56285.cljs$core$IFn$_invoke$arity$0() : inst_56285.call(null));
var inst_56385 = cljs.core.async.timeout((20));
var state_56444__$1 = (function (){var statearr_56447 = state_56444;
(statearr_56447[(8)] = inst_56383);

(statearr_56447[(9)] = inst_56384);

return statearr_56447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56444__$1,(21),inst_56385);
} else {
if((state_val_56445 === (27))){
var inst_56411 = (state_56444[(10)]);
var inst_56422 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56423 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56424 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56429 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56430 = cljs.core.cons(inst_56429,inst_56411);
var inst_56431 = (new cljs.core.List(null,inst_56430,null,(1),null));
var inst_56432 = (new cljs.core.List(null,inst_56424,inst_56431,(2),null));
var inst_56433 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56423,29,inst_56432,"Subsequent flush should work"];
var inst_56434 = cljs.core.PersistentHashMap.fromArrays(inst_56422,inst_56433);
var inst_56436 = cljs.test.report.call(null,inst_56434);
var state_56444__$1 = state_56444;
var statearr_56448_57045 = state_56444__$1;
(statearr_56448_57045[(2)] = inst_56436);

(statearr_56448_57045[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (1))){
var inst_56278 = (state_56444[(11)]);
var inst_56280 = (state_56444[(12)]);
var inst_56278__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56279 = cljs.core.PersistentVector.EMPTY;
var inst_56280__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56279);
var inst_56281 = (function (){var input_ch = inst_56278__$1;
var results = inst_56280__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56282 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56283 = [inst_56278__$1,inst_56281];
var inst_56284 = cljs.core.PersistentHashMap.fromArrays(inst_56282,inst_56283);
var inst_56285 = bb_web_ds_tools.components.async_buffer.create(inst_56284);
var state_56444__$1 = (function (){var statearr_56458 = state_56444;
(statearr_56458[(11)] = inst_56278__$1);

(statearr_56458[(12)] = inst_56280__$1);

(statearr_56458[(7)] = inst_56285);

return statearr_56458;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56444__$1,(2),inst_56278__$1,(1));
} else {
if((state_val_56445 === (24))){
var inst_56388 = (state_56444[(2)]);
var inst_56389 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56390 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56391 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56390,29,inst_56388,"Subsequent flush should work"];
var inst_56392 = cljs.core.PersistentHashMap.fromArrays(inst_56389,inst_56391);
var inst_56393 = cljs.test.report.call(null,inst_56392);
var state_56444__$1 = state_56444;
var statearr_56459_57051 = state_56444__$1;
(statearr_56459_57051[(2)] = inst_56393);

(statearr_56459_57051[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (4))){
var inst_56292 = (state_56444[(2)]);
var state_56444__$1 = (function (){var statearr_56460 = state_56444;
(statearr_56460[(13)] = inst_56292);

return statearr_56460;
})();
var statearr_56461_57052 = state_56444__$1;
(statearr_56461_57052[(2)] = null);

(statearr_56461_57052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (15))){
var inst_56336 = (state_56444[(2)]);
var inst_56337 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56339 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56340 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56339,24,inst_56336,"Manual flush should flush all items"];
var inst_56341 = cljs.core.PersistentHashMap.fromArrays(inst_56337,inst_56340);
var inst_56342 = cljs.test.report.call(null,inst_56341);
var state_56444__$1 = state_56444;
var statearr_56462_57053 = state_56444__$1;
(statearr_56462_57053[(2)] = inst_56342);

(statearr_56462_57053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (21))){
var inst_56387 = (state_56444[(2)]);
var state_56444__$1 = (function (){var statearr_56463 = state_56444;
(statearr_56463[(14)] = inst_56387);

return statearr_56463;
})();
var statearr_56464_57054 = state_56444__$1;
(statearr_56464_57054[(2)] = null);

(statearr_56464_57054[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (13))){
var inst_56280 = (state_56444[(12)]);
var inst_56356 = (state_56444[(15)]);
var inst_56357 = (state_56444[(16)]);
var _ = (function (){var statearr_56465 = state_56444;
(statearr_56465[(4)] = cljs.core.cons((16),(state_56444[(4)])));

return statearr_56465;
})();
var inst_56348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56349 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56350 = [(1),(2)];
var inst_56351 = (new cljs.core.PersistentVector(null,2,(5),inst_56349,inst_56350,null));
var inst_56352 = [inst_56351];
var inst_56353 = (new cljs.core.PersistentVector(null,1,(5),inst_56348,inst_56352,null));
var inst_56354 = cljs.core.deref(inst_56280);
var inst_56355 = (new cljs.core.List(null,inst_56354,null,(1),null));
var inst_56356__$1 = (new cljs.core.List(null,inst_56353,inst_56355,(2),null));
var inst_56357__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56356__$1);
var state_56444__$1 = (function (){var statearr_56470 = state_56444;
(statearr_56470[(15)] = inst_56356__$1);

(statearr_56470[(16)] = inst_56357__$1);

return statearr_56470;
})();
if(cljs.core.truth_(inst_56357__$1)){
var statearr_56472_57056 = state_56444__$1;
(statearr_56472_57056[(1)] = (17));

} else {
var statearr_56474_57057 = state_56444__$1;
(statearr_56474_57057[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (22))){
var inst_56280 = (state_56444[(12)]);
var inst_56411 = (state_56444[(10)]);
var inst_56412 = (state_56444[(17)]);
var _ = (function (){var statearr_56475 = state_56444;
(statearr_56475[(4)] = cljs.core.cons((25),(state_56444[(4)])));

return statearr_56475;
})();
var inst_56400 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56402 = [(1),(2)];
var inst_56403 = (new cljs.core.PersistentVector(null,2,(5),inst_56401,inst_56402,null));
var inst_56404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56405 = [(3)];
var inst_56406 = (new cljs.core.PersistentVector(null,1,(5),inst_56404,inst_56405,null));
var inst_56407 = [inst_56403,inst_56406];
var inst_56408 = (new cljs.core.PersistentVector(null,2,(5),inst_56400,inst_56407,null));
var inst_56409 = cljs.core.deref(inst_56280);
var inst_56410 = (new cljs.core.List(null,inst_56409,null,(1),null));
var inst_56411__$1 = (new cljs.core.List(null,inst_56408,inst_56410,(2),null));
var inst_56412__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56411__$1);
var state_56444__$1 = (function (){var statearr_56476 = state_56444;
(statearr_56476[(10)] = inst_56411__$1);

(statearr_56476[(17)] = inst_56412__$1);

return statearr_56476;
})();
if(cljs.core.truth_(inst_56412__$1)){
var statearr_56477_57059 = state_56444__$1;
(statearr_56477_57059[(1)] = (26));

} else {
var statearr_56478_57060 = state_56444__$1;
(statearr_56478_57060[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (6))){
var inst_56285 = (state_56444[(7)]);
var inst_56331 = (state_56444[(2)]);
var inst_56332 = (inst_56285.cljs$core$IFn$_invoke$arity$0 ? inst_56285.cljs$core$IFn$_invoke$arity$0() : inst_56285.call(null));
var inst_56333 = cljs.core.async.timeout((20));
var state_56444__$1 = (function (){var statearr_56481 = state_56444;
(statearr_56481[(18)] = inst_56331);

(statearr_56481[(19)] = inst_56332);

return statearr_56481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56444__$1,(12),inst_56333);
} else {
if((state_val_56445 === (28))){
var inst_56412 = (state_56444[(17)]);
var inst_56438 = (state_56444[(2)]);
var _ = (function (){var statearr_56482 = state_56444;
(statearr_56482[(4)] = cljs.core.rest((state_56444[(4)])));

return statearr_56482;
})();
var state_56444__$1 = (function (){var statearr_56483 = state_56444;
(statearr_56483[(20)] = inst_56438);

return statearr_56483;
})();
var statearr_56487_57061 = state_56444__$1;
(statearr_56487_57061[(2)] = inst_56412);

(statearr_56487_57061[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (25))){
var _ = (function (){var statearr_56488 = state_56444;
(statearr_56488[(4)] = cljs.core.rest((state_56444[(4)])));

return statearr_56488;
})();
var state_56444__$1 = state_56444;
var ex56479 = (state_56444__$1[(2)]);
var statearr_56490_57065 = state_56444__$1;
(statearr_56490_57065[(5)] = ex56479);


var statearr_56491_57067 = state_56444__$1;
(statearr_56491_57067[(1)] = (24));

(statearr_56491_57067[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (17))){
var inst_56356 = (state_56444[(15)]);
var inst_56359 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56360 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56361 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56362 = cljs.core.cons(inst_56361,inst_56356);
var inst_56363 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56360,24,inst_56362,"Manual flush should flush all items"];
var inst_56364 = cljs.core.PersistentHashMap.fromArrays(inst_56359,inst_56363);
var inst_56365 = cljs.test.report.call(null,inst_56364);
var state_56444__$1 = state_56444;
var statearr_56493_57069 = state_56444__$1;
(statearr_56493_57069[(2)] = inst_56365);

(statearr_56493_57069[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (3))){
var inst_56289 = (state_56444[(2)]);
var inst_56290 = cljs.core.async.timeout((20));
var state_56444__$1 = (function (){var statearr_56494 = state_56444;
(statearr_56494[(21)] = inst_56289);

return statearr_56494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56444__$1,(4),inst_56290);
} else {
if((state_val_56445 === (12))){
var inst_56335 = (state_56444[(2)]);
var state_56444__$1 = (function (){var statearr_56496 = state_56444;
(statearr_56496[(22)] = inst_56335);

return statearr_56496;
})();
var statearr_56497_57070 = state_56444__$1;
(statearr_56497_57070[(2)] = null);

(statearr_56497_57070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (2))){
var inst_56278 = (state_56444[(11)]);
var inst_56287 = (state_56444[(2)]);
var state_56444__$1 = (function (){var statearr_56498 = state_56444;
(statearr_56498[(23)] = inst_56287);

return statearr_56498;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56444__$1,(3),inst_56278,(2));
} else {
if((state_val_56445 === (23))){
var inst_56441 = (state_56444[(2)]);
var inst_56442 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56444__$1 = (function (){var statearr_56503 = state_56444;
(statearr_56503[(24)] = inst_56441);

return statearr_56503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56444__$1,inst_56442);
} else {
if((state_val_56445 === (19))){
var inst_56357 = (state_56444[(16)]);
var inst_56378 = (state_56444[(2)]);
var _ = (function (){var statearr_56509 = state_56444;
(statearr_56509[(4)] = cljs.core.rest((state_56444[(4)])));

return statearr_56509;
})();
var state_56444__$1 = (function (){var statearr_56510 = state_56444;
(statearr_56510[(25)] = inst_56378);

return statearr_56510;
})();
var statearr_56511_57073 = state_56444__$1;
(statearr_56511_57073[(2)] = inst_56357);

(statearr_56511_57073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (11))){
var inst_56306 = (state_56444[(26)]);
var inst_56328 = (state_56444[(2)]);
var _ = (function (){var statearr_56514 = state_56444;
(statearr_56514[(4)] = cljs.core.rest((state_56444[(4)])));

return statearr_56514;
})();
var state_56444__$1 = (function (){var statearr_56518 = state_56444;
(statearr_56518[(27)] = inst_56328);

return statearr_56518;
})();
var statearr_56521_57077 = state_56444__$1;
(statearr_56521_57077[(2)] = inst_56306);

(statearr_56521_57077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (9))){
var inst_56305 = (state_56444[(28)]);
var inst_56309 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56310 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56311 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56312 = cljs.core.cons(inst_56311,inst_56305);
var inst_56313 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56310,19,inst_56312,"Buffer should not flush automatically without timer"];
var inst_56314 = cljs.core.PersistentHashMap.fromArrays(inst_56309,inst_56313);
var inst_56315 = cljs.test.report.call(null,inst_56314);
var state_56444__$1 = state_56444;
var statearr_56525_57084 = state_56444__$1;
(statearr_56525_57084[(2)] = inst_56315);

(statearr_56525_57084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (5))){
var inst_56280 = (state_56444[(12)]);
var inst_56305 = (state_56444[(28)]);
var inst_56306 = (state_56444[(26)]);
var _ = (function (){var statearr_56527 = state_56444;
(statearr_56527[(4)] = cljs.core.cons((8),(state_56444[(4)])));

return statearr_56527;
})();
var inst_56304 = cljs.core.deref(inst_56280);
var inst_56305__$1 = (new cljs.core.List(null,inst_56304,null,(1),null));
var inst_56306__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56305__$1);
var state_56444__$1 = (function (){var statearr_56542 = state_56444;
(statearr_56542[(28)] = inst_56305__$1);

(statearr_56542[(26)] = inst_56306__$1);

return statearr_56542;
})();
if(cljs.core.truth_(inst_56306__$1)){
var statearr_56544_57086 = state_56444__$1;
(statearr_56544_57086[(1)] = (9));

} else {
var statearr_56545_57087 = state_56444__$1;
(statearr_56545_57087[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (14))){
var inst_56278 = (state_56444[(11)]);
var inst_56381 = (state_56444[(2)]);
var state_56444__$1 = (function (){var statearr_56551 = state_56444;
(statearr_56551[(29)] = inst_56381);

return statearr_56551;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56444__$1,(20),inst_56278,(3));
} else {
if((state_val_56445 === (26))){
var inst_56411 = (state_56444[(10)]);
var inst_56414 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56415 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56416 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56417 = cljs.core.cons(inst_56416,inst_56411);
var inst_56418 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56415,29,inst_56417,"Subsequent flush should work"];
var inst_56419 = cljs.core.PersistentHashMap.fromArrays(inst_56414,inst_56418);
var inst_56420 = cljs.test.report.call(null,inst_56419);
var state_56444__$1 = state_56444;
var statearr_56555_57088 = state_56444__$1;
(statearr_56555_57088[(2)] = inst_56420);

(statearr_56555_57088[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (16))){
var _ = (function (){var statearr_56558 = state_56444;
(statearr_56558[(4)] = cljs.core.rest((state_56444[(4)])));

return statearr_56558;
})();
var state_56444__$1 = state_56444;
var ex56550 = (state_56444__$1[(2)]);
var statearr_56559_57089 = state_56444__$1;
(statearr_56559_57089[(5)] = ex56550);


var statearr_56560_57090 = state_56444__$1;
(statearr_56560_57090[(1)] = (15));

(statearr_56560_57090[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (10))){
var inst_56305 = (state_56444[(28)]);
var inst_56317 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56318 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56319 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56320 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56321 = cljs.core.cons(inst_56320,inst_56305);
var inst_56322 = (new cljs.core.List(null,inst_56321,null,(1),null));
var inst_56323 = (new cljs.core.List(null,inst_56319,inst_56322,(2),null));
var inst_56324 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56318,19,inst_56323,"Buffer should not flush automatically without timer"];
var inst_56325 = cljs.core.PersistentHashMap.fromArrays(inst_56317,inst_56324);
var inst_56326 = cljs.test.report.call(null,inst_56325);
var state_56444__$1 = state_56444;
var statearr_56573_57091 = state_56444__$1;
(statearr_56573_57091[(2)] = inst_56326);

(statearr_56573_57091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (18))){
var inst_56356 = (state_56444[(15)]);
var inst_56367 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56368 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56369 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56370 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56371 = cljs.core.cons(inst_56370,inst_56356);
var inst_56372 = (new cljs.core.List(null,inst_56371,null,(1),null));
var inst_56373 = (new cljs.core.List(null,inst_56369,inst_56372,(2),null));
var inst_56374 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56368,24,inst_56373,"Manual flush should flush all items"];
var inst_56375 = cljs.core.PersistentHashMap.fromArrays(inst_56367,inst_56374);
var inst_56376 = cljs.test.report.call(null,inst_56375);
var state_56444__$1 = state_56444;
var statearr_56575_57092 = state_56444__$1;
(statearr_56575_57092[(2)] = inst_56376);

(statearr_56575_57092[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56445 === (8))){
var _ = (function (){var statearr_56580 = state_56444;
(statearr_56580[(4)] = cljs.core.rest((state_56444[(4)])));

return statearr_56580;
})();
var state_56444__$1 = state_56444;
var ex56561 = (state_56444__$1[(2)]);
var statearr_56581_57093 = state_56444__$1;
(statearr_56581_57093[(5)] = ex56561);


var statearr_56582_57095 = state_56444__$1;
(statearr_56582_57095[(1)] = (7));

(statearr_56582_57095[(5)] = null);



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
var statearr_56583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56583[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56583[(1)] = (1));

return statearr_56583;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56444){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56444);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56584){var ex__32294__auto__ = e56584;
var statearr_56585_57097 = state_56444;
(statearr_56585_57097[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56444[(4)]))){
var statearr_56586_57098 = state_56444;
(statearr_56586_57098[(1)] = cljs.core.first((state_56444[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57099 = state_56444;
state_56444 = G__57099;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56444){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56587 = f__32362__auto__();
(statearr_56587[(6)] = c__32361__auto__);

return statearr_56587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56268","meta56268",1376908301,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56267");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56267");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56267.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56267 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56267(meta56268){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267(meta56268));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56267(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588 = (function (meta56589){
this.meta56589 = meta56589;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56590,meta56589__$1){
var self__ = this;
var _56590__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588(meta56589__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56590){
var self__ = this;
var _56590__$1 = this;
return self__.meta56589;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56592 = (arguments.length - (1));
switch (G__56592) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588.prototype.apply = (function (self__,args56591){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56591)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56820){
var state_val_56821 = (state_56820[(1)]);
if((state_val_56821 === (7))){
var inst_56613 = (state_56820[(2)]);
var inst_56614 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56615 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56616 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56615,47,inst_56613,"Should not flush before timeout"];
var inst_56617 = cljs.core.PersistentHashMap.fromArrays(inst_56614,inst_56616);
var inst_56618 = cljs.test.report.call(null,inst_56617);
var state_56820__$1 = state_56820;
var statearr_56823_57103 = state_56820__$1;
(statearr_56823_57103[(2)] = inst_56618);

(statearr_56823_57103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (20))){
var inst_56705 = (state_56820[(2)]);
var inst_56706 = cljs.core.async.timeout((50));
var state_56820__$1 = (function (){var statearr_56824 = state_56820;
(statearr_56824[(7)] = inst_56705);

return statearr_56824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56820__$1,(21),inst_56706);
} else {
if((state_val_56821 === (27))){
var _ = (function (){var statearr_56825 = state_56820;
(statearr_56825[(4)] = cljs.core.rest((state_56820[(4)])));

return statearr_56825;
})();
var state_56820__$1 = state_56820;
var ex56822 = (state_56820__$1[(2)]);
var statearr_56826_57104 = state_56820__$1;
(statearr_56826_57104[(5)] = ex56822);


var statearr_56827_57105 = state_56820__$1;
(statearr_56827_57105[(1)] = (26));

(statearr_56827_57105[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (1))){
var inst_56598 = (state_56820[(8)]);
var inst_56600 = (state_56820[(9)]);
var inst_56598__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56599 = cljs.core.PersistentVector.EMPTY;
var inst_56600__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56599);
var inst_56601 = (function (){var input_ch = inst_56598__$1;
var results = inst_56600__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56602 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56603 = [inst_56598__$1,(100),inst_56601];
var inst_56604 = cljs.core.PersistentHashMap.fromArrays(inst_56602,inst_56603);
var inst_56605 = bb_web_ds_tools.components.async_buffer.create(inst_56604);
var state_56820__$1 = (function (){var statearr_56828 = state_56820;
(statearr_56828[(8)] = inst_56598__$1);

(statearr_56828[(9)] = inst_56600__$1);

(statearr_56828[(10)] = inst_56605);

return statearr_56828;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56820__$1,(2),inst_56598__$1,(1));
} else {
if((state_val_56821 === (24))){
var inst_56600 = (state_56820[(9)]);
var inst_56733 = (state_56820[(11)]);
var inst_56734 = (state_56820[(12)]);
var _ = (function (){var statearr_56829 = state_56820;
(statearr_56829[(4)] = cljs.core.cons((27),(state_56820[(4)])));

return statearr_56829;
})();
var inst_56725 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56726 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56727 = [(1),(2)];
var inst_56728 = (new cljs.core.PersistentVector(null,2,(5),inst_56726,inst_56727,null));
var inst_56729 = [inst_56728];
var inst_56730 = (new cljs.core.PersistentVector(null,1,(5),inst_56725,inst_56729,null));
var inst_56731 = cljs.core.deref(inst_56600);
var inst_56732 = (new cljs.core.List(null,inst_56731,null,(1),null));
var inst_56733__$1 = (new cljs.core.List(null,inst_56730,inst_56732,(2),null));
var inst_56734__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56733__$1);
var state_56820__$1 = (function (){var statearr_56830 = state_56820;
(statearr_56830[(11)] = inst_56733__$1);

(statearr_56830[(12)] = inst_56734__$1);

return statearr_56830;
})();
if(cljs.core.truth_(inst_56734__$1)){
var statearr_56831_57107 = state_56820__$1;
(statearr_56831_57107[(1)] = (28));

} else {
var statearr_56832_57108 = state_56820__$1;
(statearr_56832_57108[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (4))){
var inst_56612 = (state_56820[(2)]);
var state_56820__$1 = (function (){var statearr_56833 = state_56820;
(statearr_56833[(13)] = inst_56612);

return statearr_56833;
})();
var statearr_56834_57109 = state_56820__$1;
(statearr_56834_57109[(2)] = null);

(statearr_56834_57109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (15))){
var inst_56659 = (state_56820[(2)]);
var inst_56660 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56661 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56662 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56661,50,inst_56659,"Should flush after timeout"];
var inst_56663 = cljs.core.PersistentHashMap.fromArrays(inst_56660,inst_56662);
var inst_56664 = cljs.test.report.call(null,inst_56663);
var state_56820__$1 = state_56820;
var statearr_56835_57110 = state_56820__$1;
(statearr_56835_57110[(2)] = inst_56664);

(statearr_56835_57110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (21))){
var inst_56598 = (state_56820[(8)]);
var inst_56708 = (state_56820[(2)]);
var state_56820__$1 = (function (){var statearr_56836 = state_56820;
(statearr_56836[(14)] = inst_56708);

return statearr_56836;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56820__$1,(22),inst_56598,(4));
} else {
if((state_val_56821 === (31))){
var inst_56769 = (state_56820[(2)]);
var state_56820__$1 = (function (){var statearr_56837 = state_56820;
(statearr_56837[(15)] = inst_56769);

return statearr_56837;
})();
var statearr_56838_57113 = state_56820__$1;
(statearr_56838_57113[(2)] = null);

(statearr_56838_57113[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (32))){
var inst_56600 = (state_56820[(9)]);
var inst_56792 = (state_56820[(16)]);
var inst_56793 = (state_56820[(17)]);
var _ = (function (){var statearr_56839 = state_56820;
(statearr_56839[(4)] = cljs.core.cons((35),(state_56820[(4)])));

return statearr_56839;
})();
var inst_56781 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56783 = [(1),(2)];
var inst_56784 = (new cljs.core.PersistentVector(null,2,(5),inst_56782,inst_56783,null));
var inst_56785 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56786 = [(3),(4)];
var inst_56787 = (new cljs.core.PersistentVector(null,2,(5),inst_56785,inst_56786,null));
var inst_56788 = [inst_56784,inst_56787];
var inst_56789 = (new cljs.core.PersistentVector(null,2,(5),inst_56781,inst_56788,null));
var inst_56790 = cljs.core.deref(inst_56600);
var inst_56791 = (new cljs.core.List(null,inst_56790,null,(1),null));
var inst_56792__$1 = (new cljs.core.List(null,inst_56789,inst_56791,(2),null));
var inst_56793__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56792__$1);
var state_56820__$1 = (function (){var statearr_56840 = state_56820;
(statearr_56840[(16)] = inst_56792__$1);

(statearr_56840[(17)] = inst_56793__$1);

return statearr_56840;
})();
if(cljs.core.truth_(inst_56793__$1)){
var statearr_56841_57115 = state_56820__$1;
(statearr_56841_57115[(1)] = (36));

} else {
var statearr_56842_57116 = state_56820__$1;
(statearr_56842_57116[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (33))){
var inst_56817 = (state_56820[(2)]);
var inst_56818 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56820__$1 = (function (){var statearr_56843 = state_56820;
(statearr_56843[(18)] = inst_56817);

return statearr_56843;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56820__$1,inst_56818);
} else {
if((state_val_56821 === (13))){
var inst_56600 = (state_56820[(9)]);
var inst_56678 = (state_56820[(19)]);
var inst_56679 = (state_56820[(20)]);
var _ = (function (){var statearr_56844 = state_56820;
(statearr_56844[(4)] = cljs.core.cons((16),(state_56820[(4)])));

return statearr_56844;
})();
var inst_56670 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56672 = [(1),(2)];
var inst_56673 = (new cljs.core.PersistentVector(null,2,(5),inst_56671,inst_56672,null));
var inst_56674 = [inst_56673];
var inst_56675 = (new cljs.core.PersistentVector(null,1,(5),inst_56670,inst_56674,null));
var inst_56676 = cljs.core.deref(inst_56600);
var inst_56677 = (new cljs.core.List(null,inst_56676,null,(1),null));
var inst_56678__$1 = (new cljs.core.List(null,inst_56675,inst_56677,(2),null));
var inst_56679__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56678__$1);
var state_56820__$1 = (function (){var statearr_56845 = state_56820;
(statearr_56845[(19)] = inst_56678__$1);

(statearr_56845[(20)] = inst_56679__$1);

return statearr_56845;
})();
if(cljs.core.truth_(inst_56679__$1)){
var statearr_56846_57120 = state_56820__$1;
(statearr_56846_57120[(1)] = (17));

} else {
var statearr_56847_57121 = state_56820__$1;
(statearr_56847_57121[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (22))){
var inst_56710 = (state_56820[(2)]);
var inst_56711 = cljs.core.async.timeout((20));
var state_56820__$1 = (function (){var statearr_56848 = state_56820;
(statearr_56848[(21)] = inst_56710);

return statearr_56848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56820__$1,(23),inst_56711);
} else {
if((state_val_56821 === (36))){
var inst_56792 = (state_56820[(16)]);
var inst_56795 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56796 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56797 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56798 = cljs.core.cons(inst_56797,inst_56792);
var inst_56799 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56796,60,inst_56798,"Should flush 3,4 after timeout from first message"];
var inst_56800 = cljs.core.PersistentHashMap.fromArrays(inst_56795,inst_56799);
var inst_56801 = cljs.test.report.call(null,inst_56800);
var state_56820__$1 = state_56820;
var statearr_56849_57123 = state_56820__$1;
(statearr_56849_57123[(2)] = inst_56801);

(statearr_56849_57123[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (29))){
var inst_56733 = (state_56820[(11)]);
var inst_56748 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56749 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56750 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56752 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56753 = cljs.core.cons(inst_56752,inst_56733);
var inst_56754 = (new cljs.core.List(null,inst_56753,null,(1),null));
var inst_56755 = (new cljs.core.List(null,inst_56750,inst_56754,(2),null));
var inst_56756 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56749,57,inst_56755,"Should not flush 3,4 yet"];
var inst_56757 = cljs.core.PersistentHashMap.fromArrays(inst_56748,inst_56756);
var inst_56758 = cljs.test.report.call(null,inst_56757);
var state_56820__$1 = state_56820;
var statearr_56850_57126 = state_56820__$1;
(statearr_56850_57126[(2)] = inst_56758);

(statearr_56850_57126[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (6))){
var inst_56650 = (state_56820[(2)]);
var inst_56651 = cljs.core.async.timeout((100));
var state_56820__$1 = (function (){var statearr_56851 = state_56820;
(statearr_56851[(22)] = inst_56650);

return statearr_56851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56820__$1,(12),inst_56651);
} else {
if((state_val_56821 === (28))){
var inst_56733 = (state_56820[(11)]);
var inst_56738 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56739 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56741 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56742 = cljs.core.cons(inst_56741,inst_56733);
var inst_56743 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56739,57,inst_56742,"Should not flush 3,4 yet"];
var inst_56745 = cljs.core.PersistentHashMap.fromArrays(inst_56738,inst_56743);
var inst_56746 = cljs.test.report.call(null,inst_56745);
var state_56820__$1 = state_56820;
var statearr_56852_57127 = state_56820__$1;
(statearr_56852_57127[(2)] = inst_56746);

(statearr_56852_57127[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (25))){
var inst_56763 = (state_56820[(2)]);
var inst_56767 = cljs.core.async.timeout((80));
var state_56820__$1 = (function (){var statearr_56853 = state_56820;
(statearr_56853[(23)] = inst_56763);

return statearr_56853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56820__$1,(31),inst_56767);
} else {
if((state_val_56821 === (34))){
var inst_56770 = (state_56820[(2)]);
var inst_56771 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56772 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56773 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56772,60,inst_56770,"Should flush 3,4 after timeout from first message"];
var inst_56774 = cljs.core.PersistentHashMap.fromArrays(inst_56771,inst_56773);
var inst_56775 = cljs.test.report.call(null,inst_56774);
var state_56820__$1 = state_56820;
var statearr_56854_57131 = state_56820__$1;
(statearr_56854_57131[(2)] = inst_56775);

(statearr_56854_57131[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (17))){
var inst_56678 = (state_56820[(19)]);
var inst_56681 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56682 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56683 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56684 = cljs.core.cons(inst_56683,inst_56678);
var inst_56685 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56682,50,inst_56684,"Should flush after timeout"];
var inst_56686 = cljs.core.PersistentHashMap.fromArrays(inst_56681,inst_56685);
var inst_56687 = cljs.test.report.call(null,inst_56686);
var state_56820__$1 = state_56820;
var statearr_56855_57132 = state_56820__$1;
(statearr_56855_57132[(2)] = inst_56687);

(statearr_56855_57132[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (3))){
var inst_56609 = (state_56820[(2)]);
var inst_56610 = cljs.core.async.timeout((50));
var state_56820__$1 = (function (){var statearr_56856 = state_56820;
(statearr_56856[(24)] = inst_56609);

return statearr_56856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56820__$1,(4),inst_56610);
} else {
if((state_val_56821 === (12))){
var inst_56653 = (state_56820[(2)]);
var state_56820__$1 = (function (){var statearr_56857 = state_56820;
(statearr_56857[(25)] = inst_56653);

return statearr_56857;
})();
var statearr_56858_57133 = state_56820__$1;
(statearr_56858_57133[(2)] = null);

(statearr_56858_57133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (2))){
var inst_56598 = (state_56820[(8)]);
var inst_56607 = (state_56820[(2)]);
var state_56820__$1 = (function (){var statearr_56860 = state_56820;
(statearr_56860[(26)] = inst_56607);

return statearr_56860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56820__$1,(3),inst_56598,(2));
} else {
if((state_val_56821 === (23))){
var inst_56713 = (state_56820[(2)]);
var state_56820__$1 = (function (){var statearr_56861 = state_56820;
(statearr_56861[(27)] = inst_56713);

return statearr_56861;
})();
var statearr_56862_57135 = state_56820__$1;
(statearr_56862_57135[(2)] = null);

(statearr_56862_57135[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (35))){
var _ = (function (){var statearr_56863 = state_56820;
(statearr_56863[(4)] = cljs.core.rest((state_56820[(4)])));

return statearr_56863;
})();
var state_56820__$1 = state_56820;
var ex56859 = (state_56820__$1[(2)]);
var statearr_56864_57137 = state_56820__$1;
(statearr_56864_57137[(5)] = ex56859);


var statearr_56865_57139 = state_56820__$1;
(statearr_56865_57139[(1)] = (34));

(statearr_56865_57139[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (19))){
var inst_56679 = (state_56820[(20)]);
var inst_56700 = (state_56820[(2)]);
var _ = (function (){var statearr_56866 = state_56820;
(statearr_56866[(4)] = cljs.core.rest((state_56820[(4)])));

return statearr_56866;
})();
var state_56820__$1 = (function (){var statearr_56867 = state_56820;
(statearr_56867[(28)] = inst_56700);

return statearr_56867;
})();
var statearr_56868_57140 = state_56820__$1;
(statearr_56868_57140[(2)] = inst_56679);

(statearr_56868_57140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (11))){
var inst_56626 = (state_56820[(29)]);
var inst_56647 = (state_56820[(2)]);
var _ = (function (){var statearr_56869 = state_56820;
(statearr_56869[(4)] = cljs.core.rest((state_56820[(4)])));

return statearr_56869;
})();
var state_56820__$1 = (function (){var statearr_56870 = state_56820;
(statearr_56870[(30)] = inst_56647);

return statearr_56870;
})();
var statearr_56871_57142 = state_56820__$1;
(statearr_56871_57142[(2)] = inst_56626);

(statearr_56871_57142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (9))){
var inst_56625 = (state_56820[(31)]);
var inst_56628 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56629 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56630 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56631 = cljs.core.cons(inst_56630,inst_56625);
var inst_56632 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56629,47,inst_56631,"Should not flush before timeout"];
var inst_56633 = cljs.core.PersistentHashMap.fromArrays(inst_56628,inst_56632);
var inst_56634 = cljs.test.report.call(null,inst_56633);
var state_56820__$1 = state_56820;
var statearr_56872_57143 = state_56820__$1;
(statearr_56872_57143[(2)] = inst_56634);

(statearr_56872_57143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (5))){
var inst_56600 = (state_56820[(9)]);
var inst_56625 = (state_56820[(31)]);
var inst_56626 = (state_56820[(29)]);
var _ = (function (){var statearr_56873 = state_56820;
(statearr_56873[(4)] = cljs.core.cons((8),(state_56820[(4)])));

return statearr_56873;
})();
var inst_56624 = cljs.core.deref(inst_56600);
var inst_56625__$1 = (new cljs.core.List(null,inst_56624,null,(1),null));
var inst_56626__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56625__$1);
var state_56820__$1 = (function (){var statearr_56874 = state_56820;
(statearr_56874[(31)] = inst_56625__$1);

(statearr_56874[(29)] = inst_56626__$1);

return statearr_56874;
})();
if(cljs.core.truth_(inst_56626__$1)){
var statearr_56875_57144 = state_56820__$1;
(statearr_56875_57144[(1)] = (9));

} else {
var statearr_56876_57145 = state_56820__$1;
(statearr_56876_57145[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (14))){
var inst_56598 = (state_56820[(8)]);
var inst_56703 = (state_56820[(2)]);
var state_56820__$1 = (function (){var statearr_56878 = state_56820;
(statearr_56878[(32)] = inst_56703);

return statearr_56878;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56820__$1,(20),inst_56598,(3));
} else {
if((state_val_56821 === (26))){
var inst_56714 = (state_56820[(2)]);
var inst_56715 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56716 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56717 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56716,57,inst_56714,"Should not flush 3,4 yet"];
var inst_56718 = cljs.core.PersistentHashMap.fromArrays(inst_56715,inst_56717);
var inst_56719 = cljs.test.report.call(null,inst_56718);
var state_56820__$1 = state_56820;
var statearr_56879_57146 = state_56820__$1;
(statearr_56879_57146[(2)] = inst_56719);

(statearr_56879_57146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (16))){
var _ = (function (){var statearr_56880 = state_56820;
(statearr_56880[(4)] = cljs.core.rest((state_56820[(4)])));

return statearr_56880;
})();
var state_56820__$1 = state_56820;
var ex56877 = (state_56820__$1[(2)]);
var statearr_56881_57147 = state_56820__$1;
(statearr_56881_57147[(5)] = ex56877);


var statearr_56882_57148 = state_56820__$1;
(statearr_56882_57148[(1)] = (15));

(statearr_56882_57148[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (38))){
var inst_56793 = (state_56820[(17)]);
var inst_56814 = (state_56820[(2)]);
var _ = (function (){var statearr_56883 = state_56820;
(statearr_56883[(4)] = cljs.core.rest((state_56820[(4)])));

return statearr_56883;
})();
var state_56820__$1 = (function (){var statearr_56884 = state_56820;
(statearr_56884[(33)] = inst_56814);

return statearr_56884;
})();
var statearr_56885_57150 = state_56820__$1;
(statearr_56885_57150[(2)] = inst_56793);

(statearr_56885_57150[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (30))){
var inst_56734 = (state_56820[(12)]);
var inst_56760 = (state_56820[(2)]);
var _ = (function (){var statearr_56887 = state_56820;
(statearr_56887[(4)] = cljs.core.rest((state_56820[(4)])));

return statearr_56887;
})();
var state_56820__$1 = (function (){var statearr_56890 = state_56820;
(statearr_56890[(34)] = inst_56760);

return statearr_56890;
})();
var statearr_56891_57151 = state_56820__$1;
(statearr_56891_57151[(2)] = inst_56734);

(statearr_56891_57151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (10))){
var inst_56625 = (state_56820[(31)]);
var inst_56636 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56637 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56638 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56639 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56640 = cljs.core.cons(inst_56639,inst_56625);
var inst_56641 = (new cljs.core.List(null,inst_56640,null,(1),null));
var inst_56642 = (new cljs.core.List(null,inst_56638,inst_56641,(2),null));
var inst_56643 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56637,47,inst_56642,"Should not flush before timeout"];
var inst_56644 = cljs.core.PersistentHashMap.fromArrays(inst_56636,inst_56643);
var inst_56645 = cljs.test.report.call(null,inst_56644);
var state_56820__$1 = state_56820;
var statearr_56895_57155 = state_56820__$1;
(statearr_56895_57155[(2)] = inst_56645);

(statearr_56895_57155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (18))){
var inst_56678 = (state_56820[(19)]);
var inst_56689 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56690 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56691 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56692 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56693 = cljs.core.cons(inst_56692,inst_56678);
var inst_56694 = (new cljs.core.List(null,inst_56693,null,(1),null));
var inst_56695 = (new cljs.core.List(null,inst_56691,inst_56694,(2),null));
var inst_56696 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56690,50,inst_56695,"Should flush after timeout"];
var inst_56697 = cljs.core.PersistentHashMap.fromArrays(inst_56689,inst_56696);
var inst_56698 = cljs.test.report.call(null,inst_56697);
var state_56820__$1 = state_56820;
var statearr_56902_57156 = state_56820__$1;
(statearr_56902_57156[(2)] = inst_56698);

(statearr_56902_57156[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (37))){
var inst_56792 = (state_56820[(16)]);
var inst_56803 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56804 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56805 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56806 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56807 = cljs.core.cons(inst_56806,inst_56792);
var inst_56808 = (new cljs.core.List(null,inst_56807,null,(1),null));
var inst_56809 = (new cljs.core.List(null,inst_56805,inst_56808,(2),null));
var inst_56810 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56804,60,inst_56809,"Should flush 3,4 after timeout from first message"];
var inst_56811 = cljs.core.PersistentHashMap.fromArrays(inst_56803,inst_56810);
var inst_56812 = cljs.test.report.call(null,inst_56811);
var state_56820__$1 = state_56820;
var statearr_56904_57158 = state_56820__$1;
(statearr_56904_57158[(2)] = inst_56812);

(statearr_56904_57158[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56821 === (8))){
var _ = (function (){var statearr_56905 = state_56820;
(statearr_56905[(4)] = cljs.core.rest((state_56820[(4)])));

return statearr_56905;
})();
var state_56820__$1 = state_56820;
var ex56896 = (state_56820__$1[(2)]);
var statearr_56907_57159 = state_56820__$1;
(statearr_56907_57159[(5)] = ex56896);


var statearr_56908_57160 = state_56820__$1;
(statearr_56908_57160[(1)] = (7));

(statearr_56908_57160[(5)] = null);



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
var statearr_56911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56911[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56911[(1)] = (1));

return statearr_56911;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56820){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56820);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56915){var ex__32294__auto__ = e56915;
var statearr_56917_57161 = state_56820;
(statearr_56917_57161[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56820[(4)]))){
var statearr_56918_57162 = state_56820;
(statearr_56918_57162[(1)] = cljs.core.first((state_56820[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57163 = state_56820;
state_56820 = G__57163;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56820){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56923 = f__32362__auto__();
(statearr_56923[(6)] = c__32361__auto__);

return statearr_56923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56589","meta56589",865428389,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56588");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56588");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56588.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56588 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56588(meta56589){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588(meta56589));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56588(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926 = (function (meta56927){
this.meta56927 = meta56927;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56928,meta56927__$1){
var self__ = this;
var _56928__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926(meta56927__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56928){
var self__ = this;
var _56928__$1 = this;
return self__.meta56927;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56930 = (arguments.length - (1));
switch (G__56930) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926.prototype.apply = (function (self__,args56929){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56929)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56994){
var state_val_56995 = (state_56994[(1)]);
if((state_val_56995 === (7))){
var inst_56947 = (state_56994[(2)]);
var inst_56948 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56949 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56950 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_56949,78,inst_56947,"Closing input should flush remaining"];
var inst_56951 = cljs.core.PersistentHashMap.fromArrays(inst_56948,inst_56950);
var inst_56952 = cljs.test.report.call(null,inst_56951);
var state_56994__$1 = state_56994;
var statearr_56996_57171 = state_56994__$1;
(statearr_56996_57171[(2)] = inst_56952);

(statearr_56996_57171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56995 === (1))){
var inst_56931 = (state_56994[(7)]);
var inst_56933 = (state_56994[(8)]);
var inst_56931__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56932 = cljs.core.PersistentVector.EMPTY;
var inst_56933__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56932);
var inst_56934 = (function (){var input_ch = inst_56931__$1;
var results = inst_56933__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56935 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56936 = [inst_56931__$1,inst_56934];
var inst_56937 = cljs.core.PersistentHashMap.fromArrays(inst_56935,inst_56936);
var inst_56938 = bb_web_ds_tools.components.async_buffer.create(inst_56937);
var state_56994__$1 = (function (){var statearr_56997 = state_56994;
(statearr_56997[(7)] = inst_56931__$1);

(statearr_56997[(8)] = inst_56933__$1);

(statearr_56997[(9)] = inst_56938);

return statearr_56997;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56994__$1,(2),inst_56931__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_56995 === (4))){
var inst_56946 = (state_56994[(2)]);
var state_56994__$1 = (function (){var statearr_56998 = state_56994;
(statearr_56998[(10)] = inst_56946);

return statearr_56998;
})();
var statearr_56999_57174 = state_56994__$1;
(statearr_56999_57174[(2)] = null);

(statearr_56999_57174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56995 === (6))){
var inst_56991 = (state_56994[(2)]);
var inst_56992 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56994__$1 = (function (){var statearr_57000 = state_56994;
(statearr_57000[(11)] = inst_56991);

return statearr_57000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56994__$1,inst_56992);
} else {
if((state_val_56995 === (3))){
var inst_56931 = (state_56994[(7)]);
var inst_56942 = (state_56994[(2)]);
var inst_56943 = cljs.core.async.close_BANG_(inst_56931);
var inst_56944 = cljs.core.async.timeout((20));
var state_56994__$1 = (function (){var statearr_57001 = state_56994;
(statearr_57001[(12)] = inst_56942);

(statearr_57001[(13)] = inst_56943);

return statearr_57001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56994__$1,(4),inst_56944);
} else {
if((state_val_56995 === (2))){
var inst_56931 = (state_56994[(7)]);
var inst_56940 = (state_56994[(2)]);
var state_56994__$1 = (function (){var statearr_57002 = state_56994;
(statearr_57002[(14)] = inst_56940);

return statearr_57002;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56994__$1,(3),inst_56931,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_56995 === (11))){
var inst_56967 = (state_56994[(15)]);
var inst_56988 = (state_56994[(2)]);
var _ = (function (){var statearr_57003 = state_56994;
(statearr_57003[(4)] = cljs.core.rest((state_56994[(4)])));

return statearr_57003;
})();
var state_56994__$1 = (function (){var statearr_57004 = state_56994;
(statearr_57004[(16)] = inst_56988);

return statearr_57004;
})();
var statearr_57005_57176 = state_56994__$1;
(statearr_57005_57176[(2)] = inst_56967);

(statearr_57005_57176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56995 === (9))){
var inst_56966 = (state_56994[(17)]);
var inst_56969 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56970 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56971 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56972 = cljs.core.cons(inst_56971,inst_56966);
var inst_56973 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_56970,78,inst_56972,"Closing input should flush remaining"];
var inst_56974 = cljs.core.PersistentHashMap.fromArrays(inst_56969,inst_56973);
var inst_56975 = cljs.test.report.call(null,inst_56974);
var state_56994__$1 = state_56994;
var statearr_57006_57177 = state_56994__$1;
(statearr_57006_57177[(2)] = inst_56975);

(statearr_57006_57177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56995 === (5))){
var inst_56933 = (state_56994[(8)]);
var inst_56966 = (state_56994[(17)]);
var inst_56967 = (state_56994[(15)]);
var _ = (function (){var statearr_57008 = state_56994;
(statearr_57008[(4)] = cljs.core.cons((8),(state_56994[(4)])));

return statearr_57008;
})();
var inst_56958 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56959 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56960 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_56961 = (new cljs.core.PersistentVector(null,2,(5),inst_56959,inst_56960,null));
var inst_56962 = [inst_56961];
var inst_56963 = (new cljs.core.PersistentVector(null,1,(5),inst_56958,inst_56962,null));
var inst_56964 = cljs.core.deref(inst_56933);
var inst_56965 = (new cljs.core.List(null,inst_56964,null,(1),null));
var inst_56966__$1 = (new cljs.core.List(null,inst_56963,inst_56965,(2),null));
var inst_56967__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56966__$1);
var state_56994__$1 = (function (){var statearr_57009 = state_56994;
(statearr_57009[(17)] = inst_56966__$1);

(statearr_57009[(15)] = inst_56967__$1);

return statearr_57009;
})();
if(cljs.core.truth_(inst_56967__$1)){
var statearr_57010_57180 = state_56994__$1;
(statearr_57010_57180[(1)] = (9));

} else {
var statearr_57012_57181 = state_56994__$1;
(statearr_57012_57181[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56995 === (10))){
var inst_56966 = (state_56994[(17)]);
var inst_56977 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56978 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56979 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56980 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56981 = cljs.core.cons(inst_56980,inst_56966);
var inst_56982 = (new cljs.core.List(null,inst_56981,null,(1),null));
var inst_56983 = (new cljs.core.List(null,inst_56979,inst_56982,(2),null));
var inst_56984 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_56978,78,inst_56983,"Closing input should flush remaining"];
var inst_56985 = cljs.core.PersistentHashMap.fromArrays(inst_56977,inst_56984);
var inst_56986 = cljs.test.report.call(null,inst_56985);
var state_56994__$1 = state_56994;
var statearr_57016_57183 = state_56994__$1;
(statearr_57016_57183[(2)] = inst_56986);

(statearr_57016_57183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56995 === (8))){
var _ = (function (){var statearr_57018 = state_56994;
(statearr_57018[(4)] = cljs.core.rest((state_56994[(4)])));

return statearr_57018;
})();
var state_56994__$1 = state_56994;
var ex57007 = (state_56994__$1[(2)]);
var statearr_57020_57184 = state_56994__$1;
(statearr_57020_57184[(5)] = ex57007);


var statearr_57021_57185 = state_56994__$1;
(statearr_57021_57185[(1)] = (7));

(statearr_57021_57185[(5)] = null);



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
var statearr_57022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57022[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57022[(1)] = (1));

return statearr_57022;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56994){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56994);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57023){var ex__32294__auto__ = e57023;
var statearr_57024_57191 = state_56994;
(statearr_57024_57191[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56994[(4)]))){
var statearr_57025_57192 = state_56994;
(statearr_57025_57192[(1)] = cljs.core.first((state_56994[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57193 = state_56994;
state_56994 = G__57193;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56994){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_57026 = f__32362__auto__();
(statearr_57026[(6)] = c__32361__auto__);

return statearr_57026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56927","meta56927",-1849050571,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56926");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56926");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56926.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56926 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56926(meta56927){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926(meta56927));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56926(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
