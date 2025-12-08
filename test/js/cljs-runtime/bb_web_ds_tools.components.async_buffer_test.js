goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337 = (function (meta56338){
this.meta56338 = meta56338;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56339,meta56338__$1){
var self__ = this;
var _56339__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337(meta56338__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56339){
var self__ = this;
var _56339__$1 = this;
return self__.meta56338;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56341 = (arguments.length - (1));
switch (G__56341) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.apply = (function (self__,args56340){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56340)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56509){
var state_val_56510 = (state_56509[(1)]);
if((state_val_56510 === (7))){
var inst_56359 = (state_56509[(2)]);
var inst_56360 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56361 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56362 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56361,19,inst_56359,"Buffer should not flush automatically without timer"];
var inst_56363 = cljs.core.PersistentHashMap.fromArrays(inst_56360,inst_56362);
var inst_56364 = cljs.test.report.call(null,inst_56363);
var state_56509__$1 = state_56509;
var statearr_56513_57149 = state_56509__$1;
(statearr_56513_57149[(2)] = inst_56364);

(statearr_56513_57149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (20))){
var inst_56351 = (state_56509[(7)]);
var inst_56452 = (state_56509[(2)]);
var inst_56453 = (inst_56351.cljs$core$IFn$_invoke$arity$0 ? inst_56351.cljs$core$IFn$_invoke$arity$0() : inst_56351.call(null));
var inst_56454 = cljs.core.async.timeout((20));
var state_56509__$1 = (function (){var statearr_56514 = state_56509;
(statearr_56514[(8)] = inst_56452);

(statearr_56514[(9)] = inst_56453);

return statearr_56514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56509__$1,(21),inst_56454);
} else {
if((state_val_56510 === (27))){
var inst_56481 = (state_56509[(10)]);
var inst_56492 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56493 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56494 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56495 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56496 = cljs.core.cons(inst_56495,inst_56481);
var inst_56497 = (new cljs.core.List(null,inst_56496,null,(1),null));
var inst_56498 = (new cljs.core.List(null,inst_56494,inst_56497,(2),null));
var inst_56499 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56493,29,inst_56498,"Subsequent flush should work"];
var inst_56500 = cljs.core.PersistentHashMap.fromArrays(inst_56492,inst_56499);
var inst_56501 = cljs.test.report.call(null,inst_56500);
var state_56509__$1 = state_56509;
var statearr_56517_57151 = state_56509__$1;
(statearr_56517_57151[(2)] = inst_56501);

(statearr_56517_57151[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (1))){
var inst_56342 = (state_56509[(11)]);
var inst_56344 = (state_56509[(12)]);
var inst_56342__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56343 = cljs.core.PersistentVector.EMPTY;
var inst_56344__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56343);
var inst_56345 = (function (){var input_ch = inst_56342__$1;
var results = inst_56344__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56346 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56349 = [inst_56342__$1,inst_56345];
var inst_56350 = cljs.core.PersistentHashMap.fromArrays(inst_56346,inst_56349);
var inst_56351 = bb_web_ds_tools.components.async_buffer.create(inst_56350);
var state_56509__$1 = (function (){var statearr_56520 = state_56509;
(statearr_56520[(11)] = inst_56342__$1);

(statearr_56520[(12)] = inst_56344__$1);

(statearr_56520[(7)] = inst_56351);

return statearr_56520;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56509__$1,(2),inst_56342__$1,(1));
} else {
if((state_val_56510 === (24))){
var inst_56457 = (state_56509[(2)]);
var inst_56458 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56459 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56460 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56459,29,inst_56457,"Subsequent flush should work"];
var inst_56461 = cljs.core.PersistentHashMap.fromArrays(inst_56458,inst_56460);
var inst_56462 = cljs.test.report.call(null,inst_56461);
var state_56509__$1 = state_56509;
var statearr_56524_57155 = state_56509__$1;
(statearr_56524_57155[(2)] = inst_56462);

(statearr_56524_57155[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (4))){
var inst_56358 = (state_56509[(2)]);
var state_56509__$1 = (function (){var statearr_56525 = state_56509;
(statearr_56525[(13)] = inst_56358);

return statearr_56525;
})();
var statearr_56527_57158 = state_56509__$1;
(statearr_56527_57158[(2)] = null);

(statearr_56527_57158[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (15))){
var inst_56406 = (state_56509[(2)]);
var inst_56407 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56408 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56409 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56408,24,inst_56406,"Manual flush should flush all items"];
var inst_56410 = cljs.core.PersistentHashMap.fromArrays(inst_56407,inst_56409);
var inst_56411 = cljs.test.report.call(null,inst_56410);
var state_56509__$1 = state_56509;
var statearr_56533_57159 = state_56509__$1;
(statearr_56533_57159[(2)] = inst_56411);

(statearr_56533_57159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (21))){
var inst_56456 = (state_56509[(2)]);
var state_56509__$1 = (function (){var statearr_56534 = state_56509;
(statearr_56534[(14)] = inst_56456);

return statearr_56534;
})();
var statearr_56535_57160 = state_56509__$1;
(statearr_56535_57160[(2)] = null);

(statearr_56535_57160[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (13))){
var inst_56344 = (state_56509[(12)]);
var inst_56425 = (state_56509[(15)]);
var inst_56426 = (state_56509[(16)]);
var _ = (function (){var statearr_56536 = state_56509;
(statearr_56536[(4)] = cljs.core.cons((16),(state_56509[(4)])));

return statearr_56536;
})();
var inst_56417 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56419 = [(1),(2)];
var inst_56420 = (new cljs.core.PersistentVector(null,2,(5),inst_56418,inst_56419,null));
var inst_56421 = [inst_56420];
var inst_56422 = (new cljs.core.PersistentVector(null,1,(5),inst_56417,inst_56421,null));
var inst_56423 = cljs.core.deref(inst_56344);
var inst_56424 = (new cljs.core.List(null,inst_56423,null,(1),null));
var inst_56425__$1 = (new cljs.core.List(null,inst_56422,inst_56424,(2),null));
var inst_56426__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56425__$1);
var state_56509__$1 = (function (){var statearr_56537 = state_56509;
(statearr_56537[(15)] = inst_56425__$1);

(statearr_56537[(16)] = inst_56426__$1);

return statearr_56537;
})();
if(cljs.core.truth_(inst_56426__$1)){
var statearr_56538_57164 = state_56509__$1;
(statearr_56538_57164[(1)] = (17));

} else {
var statearr_56539_57165 = state_56509__$1;
(statearr_56539_57165[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (22))){
var inst_56344 = (state_56509[(12)]);
var inst_56481 = (state_56509[(10)]);
var inst_56482 = (state_56509[(17)]);
var _ = (function (){var statearr_56540 = state_56509;
(statearr_56540[(4)] = cljs.core.cons((25),(state_56509[(4)])));

return statearr_56540;
})();
var inst_56468 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56469 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56470 = [(1),(2)];
var inst_56471 = (new cljs.core.PersistentVector(null,2,(5),inst_56469,inst_56470,null));
var inst_56472 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56475 = [(3)];
var inst_56476 = (new cljs.core.PersistentVector(null,1,(5),inst_56472,inst_56475,null));
var inst_56477 = [inst_56471,inst_56476];
var inst_56478 = (new cljs.core.PersistentVector(null,2,(5),inst_56468,inst_56477,null));
var inst_56479 = cljs.core.deref(inst_56344);
var inst_56480 = (new cljs.core.List(null,inst_56479,null,(1),null));
var inst_56481__$1 = (new cljs.core.List(null,inst_56478,inst_56480,(2),null));
var inst_56482__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56481__$1);
var state_56509__$1 = (function (){var statearr_56541 = state_56509;
(statearr_56541[(10)] = inst_56481__$1);

(statearr_56541[(17)] = inst_56482__$1);

return statearr_56541;
})();
if(cljs.core.truth_(inst_56482__$1)){
var statearr_56542_57167 = state_56509__$1;
(statearr_56542_57167[(1)] = (26));

} else {
var statearr_56543_57168 = state_56509__$1;
(statearr_56543_57168[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (6))){
var inst_56351 = (state_56509[(7)]);
var inst_56401 = (state_56509[(2)]);
var inst_56402 = (inst_56351.cljs$core$IFn$_invoke$arity$0 ? inst_56351.cljs$core$IFn$_invoke$arity$0() : inst_56351.call(null));
var inst_56403 = cljs.core.async.timeout((20));
var state_56509__$1 = (function (){var statearr_56545 = state_56509;
(statearr_56545[(18)] = inst_56401);

(statearr_56545[(19)] = inst_56402);

return statearr_56545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56509__$1,(12),inst_56403);
} else {
if((state_val_56510 === (28))){
var inst_56482 = (state_56509[(17)]);
var inst_56503 = (state_56509[(2)]);
var _ = (function (){var statearr_56546 = state_56509;
(statearr_56546[(4)] = cljs.core.rest((state_56509[(4)])));

return statearr_56546;
})();
var state_56509__$1 = (function (){var statearr_56547 = state_56509;
(statearr_56547[(20)] = inst_56503);

return statearr_56547;
})();
var statearr_56548_57169 = state_56509__$1;
(statearr_56548_57169[(2)] = inst_56482);

(statearr_56548_57169[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (25))){
var _ = (function (){var statearr_56549 = state_56509;
(statearr_56549[(4)] = cljs.core.rest((state_56509[(4)])));

return statearr_56549;
})();
var state_56509__$1 = state_56509;
var ex56544 = (state_56509__$1[(2)]);
var statearr_56550_57170 = state_56509__$1;
(statearr_56550_57170[(5)] = ex56544);


var statearr_56551_57171 = state_56509__$1;
(statearr_56551_57171[(1)] = (24));

(statearr_56551_57171[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (17))){
var inst_56425 = (state_56509[(15)]);
var inst_56428 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56429 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56430 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56431 = cljs.core.cons(inst_56430,inst_56425);
var inst_56432 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56429,24,inst_56431,"Manual flush should flush all items"];
var inst_56433 = cljs.core.PersistentHashMap.fromArrays(inst_56428,inst_56432);
var inst_56434 = cljs.test.report.call(null,inst_56433);
var state_56509__$1 = state_56509;
var statearr_56557_57172 = state_56509__$1;
(statearr_56557_57172[(2)] = inst_56434);

(statearr_56557_57172[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (3))){
var inst_56355 = (state_56509[(2)]);
var inst_56356 = cljs.core.async.timeout((20));
var state_56509__$1 = (function (){var statearr_56558 = state_56509;
(statearr_56558[(21)] = inst_56355);

return statearr_56558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56509__$1,(4),inst_56356);
} else {
if((state_val_56510 === (12))){
var inst_56405 = (state_56509[(2)]);
var state_56509__$1 = (function (){var statearr_56559 = state_56509;
(statearr_56559[(22)] = inst_56405);

return statearr_56559;
})();
var statearr_56560_57174 = state_56509__$1;
(statearr_56560_57174[(2)] = null);

(statearr_56560_57174[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (2))){
var inst_56342 = (state_56509[(11)]);
var inst_56353 = (state_56509[(2)]);
var state_56509__$1 = (function (){var statearr_56561 = state_56509;
(statearr_56561[(23)] = inst_56353);

return statearr_56561;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56509__$1,(3),inst_56342,(2));
} else {
if((state_val_56510 === (23))){
var inst_56506 = (state_56509[(2)]);
var inst_56507 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56509__$1 = (function (){var statearr_56562 = state_56509;
(statearr_56562[(24)] = inst_56506);

return statearr_56562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56509__$1,inst_56507);
} else {
if((state_val_56510 === (19))){
var inst_56426 = (state_56509[(16)]);
var inst_56447 = (state_56509[(2)]);
var _ = (function (){var statearr_56563 = state_56509;
(statearr_56563[(4)] = cljs.core.rest((state_56509[(4)])));

return statearr_56563;
})();
var state_56509__$1 = (function (){var statearr_56564 = state_56509;
(statearr_56564[(25)] = inst_56447);

return statearr_56564;
})();
var statearr_56565_57178 = state_56509__$1;
(statearr_56565_57178[(2)] = inst_56426);

(statearr_56565_57178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (11))){
var inst_56372 = (state_56509[(26)]);
var inst_56393 = (state_56509[(2)]);
var _ = (function (){var statearr_56569 = state_56509;
(statearr_56569[(4)] = cljs.core.rest((state_56509[(4)])));

return statearr_56569;
})();
var state_56509__$1 = (function (){var statearr_56570 = state_56509;
(statearr_56570[(27)] = inst_56393);

return statearr_56570;
})();
var statearr_56571_57179 = state_56509__$1;
(statearr_56571_57179[(2)] = inst_56372);

(statearr_56571_57179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (9))){
var inst_56371 = (state_56509[(28)]);
var inst_56374 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56375 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56376 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56377 = cljs.core.cons(inst_56376,inst_56371);
var inst_56378 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56375,19,inst_56377,"Buffer should not flush automatically without timer"];
var inst_56379 = cljs.core.PersistentHashMap.fromArrays(inst_56374,inst_56378);
var inst_56380 = cljs.test.report.call(null,inst_56379);
var state_56509__$1 = state_56509;
var statearr_56573_57180 = state_56509__$1;
(statearr_56573_57180[(2)] = inst_56380);

(statearr_56573_57180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (5))){
var inst_56344 = (state_56509[(12)]);
var inst_56371 = (state_56509[(28)]);
var inst_56372 = (state_56509[(26)]);
var _ = (function (){var statearr_56574 = state_56509;
(statearr_56574[(4)] = cljs.core.cons((8),(state_56509[(4)])));

return statearr_56574;
})();
var inst_56370 = cljs.core.deref(inst_56344);
var inst_56371__$1 = (new cljs.core.List(null,inst_56370,null,(1),null));
var inst_56372__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56371__$1);
var state_56509__$1 = (function (){var statearr_56575 = state_56509;
(statearr_56575[(28)] = inst_56371__$1);

(statearr_56575[(26)] = inst_56372__$1);

return statearr_56575;
})();
if(cljs.core.truth_(inst_56372__$1)){
var statearr_56576_57181 = state_56509__$1;
(statearr_56576_57181[(1)] = (9));

} else {
var statearr_56577_57182 = state_56509__$1;
(statearr_56577_57182[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (14))){
var inst_56342 = (state_56509[(11)]);
var inst_56450 = (state_56509[(2)]);
var state_56509__$1 = (function (){var statearr_56579 = state_56509;
(statearr_56579[(29)] = inst_56450);

return statearr_56579;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56509__$1,(20),inst_56342,(3));
} else {
if((state_val_56510 === (26))){
var inst_56481 = (state_56509[(10)]);
var inst_56484 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56485 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56486 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56487 = cljs.core.cons(inst_56486,inst_56481);
var inst_56488 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56485,29,inst_56487,"Subsequent flush should work"];
var inst_56489 = cljs.core.PersistentHashMap.fromArrays(inst_56484,inst_56488);
var inst_56490 = cljs.test.report.call(null,inst_56489);
var state_56509__$1 = state_56509;
var statearr_56581_57184 = state_56509__$1;
(statearr_56581_57184[(2)] = inst_56490);

(statearr_56581_57184[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (16))){
var _ = (function (){var statearr_56582 = state_56509;
(statearr_56582[(4)] = cljs.core.rest((state_56509[(4)])));

return statearr_56582;
})();
var state_56509__$1 = state_56509;
var ex56578 = (state_56509__$1[(2)]);
var statearr_56583_57185 = state_56509__$1;
(statearr_56583_57185[(5)] = ex56578);


var statearr_56584_57186 = state_56509__$1;
(statearr_56584_57186[(1)] = (15));

(statearr_56584_57186[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (10))){
var inst_56371 = (state_56509[(28)]);
var inst_56382 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56383 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56384 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56385 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56386 = cljs.core.cons(inst_56385,inst_56371);
var inst_56387 = (new cljs.core.List(null,inst_56386,null,(1),null));
var inst_56388 = (new cljs.core.List(null,inst_56384,inst_56387,(2),null));
var inst_56389 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56383,19,inst_56388,"Buffer should not flush automatically without timer"];
var inst_56390 = cljs.core.PersistentHashMap.fromArrays(inst_56382,inst_56389);
var inst_56391 = cljs.test.report.call(null,inst_56390);
var state_56509__$1 = state_56509;
var statearr_56590_57187 = state_56509__$1;
(statearr_56590_57187[(2)] = inst_56391);

(statearr_56590_57187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (18))){
var inst_56425 = (state_56509[(15)]);
var inst_56436 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56437 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56438 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56439 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56440 = cljs.core.cons(inst_56439,inst_56425);
var inst_56441 = (new cljs.core.List(null,inst_56440,null,(1),null));
var inst_56442 = (new cljs.core.List(null,inst_56438,inst_56441,(2),null));
var inst_56443 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56437,24,inst_56442,"Manual flush should flush all items"];
var inst_56444 = cljs.core.PersistentHashMap.fromArrays(inst_56436,inst_56443);
var inst_56445 = cljs.test.report.call(null,inst_56444);
var state_56509__$1 = state_56509;
var statearr_56593_57192 = state_56509__$1;
(statearr_56593_57192[(2)] = inst_56445);

(statearr_56593_57192[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56510 === (8))){
var _ = (function (){var statearr_56594 = state_56509;
(statearr_56594[(4)] = cljs.core.rest((state_56509[(4)])));

return statearr_56594;
})();
var state_56509__$1 = state_56509;
var ex56586 = (state_56509__$1[(2)]);
var statearr_56597_57193 = state_56509__$1;
(statearr_56597_57193[(5)] = ex56586);


var statearr_56600_57194 = state_56509__$1;
(statearr_56600_57194[(1)] = (7));

(statearr_56600_57194[(5)] = null);



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
var statearr_56602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56602[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56602[(1)] = (1));

return statearr_56602;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56509){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56509);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56603){var ex__32294__auto__ = e56603;
var statearr_56605_57195 = state_56509;
(statearr_56605_57195[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56509[(4)]))){
var statearr_56608_57196 = state_56509;
(statearr_56608_57196[(1)] = cljs.core.first((state_56509[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57197 = state_56509;
state_56509 = G__57197;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56509){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56626 = f__32362__auto__();
(statearr_56626[(6)] = c__32361__auto__);

return statearr_56626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56338","meta56338",1655490405,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56337");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56337");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56337.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56337 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56337(meta56338){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337(meta56338));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665 = (function (meta56666){
this.meta56666 = meta56666;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56667,meta56666__$1){
var self__ = this;
var _56667__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665(meta56666__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56667){
var self__ = this;
var _56667__$1 = this;
return self__.meta56666;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56676 = (arguments.length - (1));
switch (G__56676) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665.prototype.apply = (function (self__,args56672){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56672)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56890){
var state_val_56891 = (state_56890[(1)]);
if((state_val_56891 === (7))){
var inst_56696 = (state_56890[(2)]);
var inst_56697 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56698 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56699 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56698,47,inst_56696,"Should not flush before timeout"];
var inst_56700 = cljs.core.PersistentHashMap.fromArrays(inst_56697,inst_56699);
var inst_56701 = cljs.test.report.call(null,inst_56700);
var state_56890__$1 = state_56890;
var statearr_56893_57199 = state_56890__$1;
(statearr_56893_57199[(2)] = inst_56701);

(statearr_56893_57199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (20))){
var inst_56783 = (state_56890[(2)]);
var inst_56784 = cljs.core.async.timeout((50));
var state_56890__$1 = (function (){var statearr_56894 = state_56890;
(statearr_56894[(7)] = inst_56783);

return statearr_56894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56890__$1,(21),inst_56784);
} else {
if((state_val_56891 === (27))){
var _ = (function (){var statearr_56895 = state_56890;
(statearr_56895[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56895;
})();
var state_56890__$1 = state_56890;
var ex56892 = (state_56890__$1[(2)]);
var statearr_56896_57200 = state_56890__$1;
(statearr_56896_57200[(5)] = ex56892);


var statearr_56897_57201 = state_56890__$1;
(statearr_56897_57201[(1)] = (26));

(statearr_56897_57201[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (1))){
var inst_56681 = (state_56890[(8)]);
var inst_56683 = (state_56890[(9)]);
var inst_56681__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56682 = cljs.core.PersistentVector.EMPTY;
var inst_56683__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56682);
var inst_56684 = (function (){var input_ch = inst_56681__$1;
var results = inst_56683__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56685 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56686 = [inst_56681__$1,(100),inst_56684];
var inst_56687 = cljs.core.PersistentHashMap.fromArrays(inst_56685,inst_56686);
var inst_56688 = bb_web_ds_tools.components.async_buffer.create(inst_56687);
var state_56890__$1 = (function (){var statearr_56898 = state_56890;
(statearr_56898[(8)] = inst_56681__$1);

(statearr_56898[(9)] = inst_56683__$1);

(statearr_56898[(10)] = inst_56688);

return statearr_56898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56890__$1,(2),inst_56681__$1,(1));
} else {
if((state_val_56891 === (24))){
var inst_56683 = (state_56890[(9)]);
var inst_56811 = (state_56890[(11)]);
var inst_56812 = (state_56890[(12)]);
var _ = (function (){var statearr_56899 = state_56890;
(statearr_56899[(4)] = cljs.core.cons((27),(state_56890[(4)])));

return statearr_56899;
})();
var inst_56803 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56804 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56805 = [(1),(2)];
var inst_56806 = (new cljs.core.PersistentVector(null,2,(5),inst_56804,inst_56805,null));
var inst_56807 = [inst_56806];
var inst_56808 = (new cljs.core.PersistentVector(null,1,(5),inst_56803,inst_56807,null));
var inst_56809 = cljs.core.deref(inst_56683);
var inst_56810 = (new cljs.core.List(null,inst_56809,null,(1),null));
var inst_56811__$1 = (new cljs.core.List(null,inst_56808,inst_56810,(2),null));
var inst_56812__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56811__$1);
var state_56890__$1 = (function (){var statearr_56900 = state_56890;
(statearr_56900[(11)] = inst_56811__$1);

(statearr_56900[(12)] = inst_56812__$1);

return statearr_56900;
})();
if(cljs.core.truth_(inst_56812__$1)){
var statearr_56901_57206 = state_56890__$1;
(statearr_56901_57206[(1)] = (28));

} else {
var statearr_56902_57207 = state_56890__$1;
(statearr_56902_57207[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (4))){
var inst_56695 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56903 = state_56890;
(statearr_56903[(13)] = inst_56695);

return statearr_56903;
})();
var statearr_56904_57209 = state_56890__$1;
(statearr_56904_57209[(2)] = null);

(statearr_56904_57209[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (15))){
var inst_56737 = (state_56890[(2)]);
var inst_56738 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56739 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56740 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56739,50,inst_56737,"Should flush after timeout"];
var inst_56741 = cljs.core.PersistentHashMap.fromArrays(inst_56738,inst_56740);
var inst_56742 = cljs.test.report.call(null,inst_56741);
var state_56890__$1 = state_56890;
var statearr_56905_57210 = state_56890__$1;
(statearr_56905_57210[(2)] = inst_56742);

(statearr_56905_57210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (21))){
var inst_56681 = (state_56890[(8)]);
var inst_56786 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56906 = state_56890;
(statearr_56906[(14)] = inst_56786);

return statearr_56906;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56890__$1,(22),inst_56681,(4));
} else {
if((state_val_56891 === (31))){
var inst_56839 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56908 = state_56890;
(statearr_56908[(15)] = inst_56839);

return statearr_56908;
})();
var statearr_56909_57212 = state_56890__$1;
(statearr_56909_57212[(2)] = null);

(statearr_56909_57212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (32))){
var inst_56683 = (state_56890[(9)]);
var inst_56862 = (state_56890[(16)]);
var inst_56863 = (state_56890[(17)]);
var _ = (function (){var statearr_56910 = state_56890;
(statearr_56910[(4)] = cljs.core.cons((35),(state_56890[(4)])));

return statearr_56910;
})();
var inst_56851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56852 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56853 = [(1),(2)];
var inst_56854 = (new cljs.core.PersistentVector(null,2,(5),inst_56852,inst_56853,null));
var inst_56855 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56856 = [(3),(4)];
var inst_56857 = (new cljs.core.PersistentVector(null,2,(5),inst_56855,inst_56856,null));
var inst_56858 = [inst_56854,inst_56857];
var inst_56859 = (new cljs.core.PersistentVector(null,2,(5),inst_56851,inst_56858,null));
var inst_56860 = cljs.core.deref(inst_56683);
var inst_56861 = (new cljs.core.List(null,inst_56860,null,(1),null));
var inst_56862__$1 = (new cljs.core.List(null,inst_56859,inst_56861,(2),null));
var inst_56863__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56862__$1);
var state_56890__$1 = (function (){var statearr_56911 = state_56890;
(statearr_56911[(16)] = inst_56862__$1);

(statearr_56911[(17)] = inst_56863__$1);

return statearr_56911;
})();
if(cljs.core.truth_(inst_56863__$1)){
var statearr_56912_57215 = state_56890__$1;
(statearr_56912_57215[(1)] = (36));

} else {
var statearr_56913_57216 = state_56890__$1;
(statearr_56913_57216[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (33))){
var inst_56887 = (state_56890[(2)]);
var inst_56888 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56890__$1 = (function (){var statearr_56914 = state_56890;
(statearr_56914[(18)] = inst_56887);

return statearr_56914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56890__$1,inst_56888);
} else {
if((state_val_56891 === (13))){
var inst_56683 = (state_56890[(9)]);
var inst_56756 = (state_56890[(19)]);
var inst_56757 = (state_56890[(20)]);
var _ = (function (){var statearr_56917 = state_56890;
(statearr_56917[(4)] = cljs.core.cons((16),(state_56890[(4)])));

return statearr_56917;
})();
var inst_56748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56750 = [(1),(2)];
var inst_56751 = (new cljs.core.PersistentVector(null,2,(5),inst_56749,inst_56750,null));
var inst_56752 = [inst_56751];
var inst_56753 = (new cljs.core.PersistentVector(null,1,(5),inst_56748,inst_56752,null));
var inst_56754 = cljs.core.deref(inst_56683);
var inst_56755 = (new cljs.core.List(null,inst_56754,null,(1),null));
var inst_56756__$1 = (new cljs.core.List(null,inst_56753,inst_56755,(2),null));
var inst_56757__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56756__$1);
var state_56890__$1 = (function (){var statearr_56918 = state_56890;
(statearr_56918[(19)] = inst_56756__$1);

(statearr_56918[(20)] = inst_56757__$1);

return statearr_56918;
})();
if(cljs.core.truth_(inst_56757__$1)){
var statearr_56919_57223 = state_56890__$1;
(statearr_56919_57223[(1)] = (17));

} else {
var statearr_56920_57224 = state_56890__$1;
(statearr_56920_57224[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (22))){
var inst_56788 = (state_56890[(2)]);
var inst_56789 = cljs.core.async.timeout((20));
var state_56890__$1 = (function (){var statearr_56921 = state_56890;
(statearr_56921[(21)] = inst_56788);

return statearr_56921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56890__$1,(23),inst_56789);
} else {
if((state_val_56891 === (36))){
var inst_56862 = (state_56890[(16)]);
var inst_56865 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56866 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56867 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56868 = cljs.core.cons(inst_56867,inst_56862);
var inst_56869 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56866,60,inst_56868,"Should flush 3,4 after timeout from first message"];
var inst_56870 = cljs.core.PersistentHashMap.fromArrays(inst_56865,inst_56869);
var inst_56871 = cljs.test.report.call(null,inst_56870);
var state_56890__$1 = state_56890;
var statearr_56922_57226 = state_56890__$1;
(statearr_56922_57226[(2)] = inst_56871);

(statearr_56922_57226[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (29))){
var inst_56811 = (state_56890[(11)]);
var inst_56822 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56823 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56824 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56825 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56826 = cljs.core.cons(inst_56825,inst_56811);
var inst_56827 = (new cljs.core.List(null,inst_56826,null,(1),null));
var inst_56828 = (new cljs.core.List(null,inst_56824,inst_56827,(2),null));
var inst_56829 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56823,57,inst_56828,"Should not flush 3,4 yet"];
var inst_56830 = cljs.core.PersistentHashMap.fromArrays(inst_56822,inst_56829);
var inst_56831 = cljs.test.report.call(null,inst_56830);
var state_56890__$1 = state_56890;
var statearr_56938_57229 = state_56890__$1;
(statearr_56938_57229[(2)] = inst_56831);

(statearr_56938_57229[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (6))){
var inst_56733 = (state_56890[(2)]);
var inst_56734 = cljs.core.async.timeout((100));
var state_56890__$1 = (function (){var statearr_56940 = state_56890;
(statearr_56940[(22)] = inst_56733);

return statearr_56940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56890__$1,(12),inst_56734);
} else {
if((state_val_56891 === (28))){
var inst_56811 = (state_56890[(11)]);
var inst_56814 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56815 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56816 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56817 = cljs.core.cons(inst_56816,inst_56811);
var inst_56818 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56815,57,inst_56817,"Should not flush 3,4 yet"];
var inst_56819 = cljs.core.PersistentHashMap.fromArrays(inst_56814,inst_56818);
var inst_56820 = cljs.test.report.call(null,inst_56819);
var state_56890__$1 = state_56890;
var statearr_56945_57235 = state_56890__$1;
(statearr_56945_57235[(2)] = inst_56820);

(statearr_56945_57235[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (25))){
var inst_56836 = (state_56890[(2)]);
var inst_56837 = cljs.core.async.timeout((80));
var state_56890__$1 = (function (){var statearr_56947 = state_56890;
(statearr_56947[(23)] = inst_56836);

return statearr_56947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56890__$1,(31),inst_56837);
} else {
if((state_val_56891 === (34))){
var inst_56840 = (state_56890[(2)]);
var inst_56841 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56842 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56843 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56842,60,inst_56840,"Should flush 3,4 after timeout from first message"];
var inst_56844 = cljs.core.PersistentHashMap.fromArrays(inst_56841,inst_56843);
var inst_56845 = cljs.test.report.call(null,inst_56844);
var state_56890__$1 = state_56890;
var statearr_56948_57241 = state_56890__$1;
(statearr_56948_57241[(2)] = inst_56845);

(statearr_56948_57241[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (17))){
var inst_56756 = (state_56890[(19)]);
var inst_56759 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56760 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56761 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56762 = cljs.core.cons(inst_56761,inst_56756);
var inst_56763 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56760,50,inst_56762,"Should flush after timeout"];
var inst_56764 = cljs.core.PersistentHashMap.fromArrays(inst_56759,inst_56763);
var inst_56765 = cljs.test.report.call(null,inst_56764);
var state_56890__$1 = state_56890;
var statearr_56950_57247 = state_56890__$1;
(statearr_56950_57247[(2)] = inst_56765);

(statearr_56950_57247[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (3))){
var inst_56692 = (state_56890[(2)]);
var inst_56693 = cljs.core.async.timeout((50));
var state_56890__$1 = (function (){var statearr_56951 = state_56890;
(statearr_56951[(24)] = inst_56692);

return statearr_56951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56890__$1,(4),inst_56693);
} else {
if((state_val_56891 === (12))){
var inst_56736 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56952 = state_56890;
(statearr_56952[(25)] = inst_56736);

return statearr_56952;
})();
var statearr_56953_57248 = state_56890__$1;
(statearr_56953_57248[(2)] = null);

(statearr_56953_57248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (2))){
var inst_56681 = (state_56890[(8)]);
var inst_56690 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56955 = state_56890;
(statearr_56955[(26)] = inst_56690);

return statearr_56955;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56890__$1,(3),inst_56681,(2));
} else {
if((state_val_56891 === (23))){
var inst_56791 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56956 = state_56890;
(statearr_56956[(27)] = inst_56791);

return statearr_56956;
})();
var statearr_56957_57249 = state_56890__$1;
(statearr_56957_57249[(2)] = null);

(statearr_56957_57249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (35))){
var _ = (function (){var statearr_56958 = state_56890;
(statearr_56958[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56958;
})();
var state_56890__$1 = state_56890;
var ex56954 = (state_56890__$1[(2)]);
var statearr_56959_57250 = state_56890__$1;
(statearr_56959_57250[(5)] = ex56954);


var statearr_56960_57251 = state_56890__$1;
(statearr_56960_57251[(1)] = (34));

(statearr_56960_57251[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (19))){
var inst_56757 = (state_56890[(20)]);
var inst_56778 = (state_56890[(2)]);
var _ = (function (){var statearr_56961 = state_56890;
(statearr_56961[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56961;
})();
var state_56890__$1 = (function (){var statearr_56962 = state_56890;
(statearr_56962[(28)] = inst_56778);

return statearr_56962;
})();
var statearr_56963_57252 = state_56890__$1;
(statearr_56963_57252[(2)] = inst_56757);

(statearr_56963_57252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (11))){
var inst_56709 = (state_56890[(29)]);
var inst_56730 = (state_56890[(2)]);
var _ = (function (){var statearr_56964 = state_56890;
(statearr_56964[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56964;
})();
var state_56890__$1 = (function (){var statearr_56965 = state_56890;
(statearr_56965[(30)] = inst_56730);

return statearr_56965;
})();
var statearr_56966_57253 = state_56890__$1;
(statearr_56966_57253[(2)] = inst_56709);

(statearr_56966_57253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (9))){
var inst_56708 = (state_56890[(31)]);
var inst_56711 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56712 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56713 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56714 = cljs.core.cons(inst_56713,inst_56708);
var inst_56715 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56712,47,inst_56714,"Should not flush before timeout"];
var inst_56716 = cljs.core.PersistentHashMap.fromArrays(inst_56711,inst_56715);
var inst_56717 = cljs.test.report.call(null,inst_56716);
var state_56890__$1 = state_56890;
var statearr_56968_57254 = state_56890__$1;
(statearr_56968_57254[(2)] = inst_56717);

(statearr_56968_57254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (5))){
var inst_56683 = (state_56890[(9)]);
var inst_56708 = (state_56890[(31)]);
var inst_56709 = (state_56890[(29)]);
var _ = (function (){var statearr_56971 = state_56890;
(statearr_56971[(4)] = cljs.core.cons((8),(state_56890[(4)])));

return statearr_56971;
})();
var inst_56707 = cljs.core.deref(inst_56683);
var inst_56708__$1 = (new cljs.core.List(null,inst_56707,null,(1),null));
var inst_56709__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56708__$1);
var state_56890__$1 = (function (){var statearr_56972 = state_56890;
(statearr_56972[(31)] = inst_56708__$1);

(statearr_56972[(29)] = inst_56709__$1);

return statearr_56972;
})();
if(cljs.core.truth_(inst_56709__$1)){
var statearr_56973_57255 = state_56890__$1;
(statearr_56973_57255[(1)] = (9));

} else {
var statearr_56974_57257 = state_56890__$1;
(statearr_56974_57257[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (14))){
var inst_56681 = (state_56890[(8)]);
var inst_56781 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56976 = state_56890;
(statearr_56976[(32)] = inst_56781);

return statearr_56976;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56890__$1,(20),inst_56681,(3));
} else {
if((state_val_56891 === (26))){
var inst_56792 = (state_56890[(2)]);
var inst_56793 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56794 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56795 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56794,57,inst_56792,"Should not flush 3,4 yet"];
var inst_56796 = cljs.core.PersistentHashMap.fromArrays(inst_56793,inst_56795);
var inst_56797 = cljs.test.report.call(null,inst_56796);
var state_56890__$1 = state_56890;
var statearr_56977_57262 = state_56890__$1;
(statearr_56977_57262[(2)] = inst_56797);

(statearr_56977_57262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (16))){
var _ = (function (){var statearr_56978 = state_56890;
(statearr_56978[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56978;
})();
var state_56890__$1 = state_56890;
var ex56975 = (state_56890__$1[(2)]);
var statearr_56979_57265 = state_56890__$1;
(statearr_56979_57265[(5)] = ex56975);


var statearr_56980_57266 = state_56890__$1;
(statearr_56980_57266[(1)] = (15));

(statearr_56980_57266[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (38))){
var inst_56863 = (state_56890[(17)]);
var inst_56884 = (state_56890[(2)]);
var _ = (function (){var statearr_56981 = state_56890;
(statearr_56981[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56981;
})();
var state_56890__$1 = (function (){var statearr_56982 = state_56890;
(statearr_56982[(33)] = inst_56884);

return statearr_56982;
})();
var statearr_56983_57267 = state_56890__$1;
(statearr_56983_57267[(2)] = inst_56863);

(statearr_56983_57267[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (30))){
var inst_56812 = (state_56890[(12)]);
var inst_56833 = (state_56890[(2)]);
var _ = (function (){var statearr_56984 = state_56890;
(statearr_56984[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56984;
})();
var state_56890__$1 = (function (){var statearr_56985 = state_56890;
(statearr_56985[(34)] = inst_56833);

return statearr_56985;
})();
var statearr_56986_57268 = state_56890__$1;
(statearr_56986_57268[(2)] = inst_56812);

(statearr_56986_57268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (10))){
var inst_56708 = (state_56890[(31)]);
var inst_56719 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56720 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56721 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56722 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56723 = cljs.core.cons(inst_56722,inst_56708);
var inst_56724 = (new cljs.core.List(null,inst_56723,null,(1),null));
var inst_56725 = (new cljs.core.List(null,inst_56721,inst_56724,(2),null));
var inst_56726 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56720,47,inst_56725,"Should not flush before timeout"];
var inst_56727 = cljs.core.PersistentHashMap.fromArrays(inst_56719,inst_56726);
var inst_56728 = cljs.test.report.call(null,inst_56727);
var state_56890__$1 = state_56890;
var statearr_56990_57273 = state_56890__$1;
(statearr_56990_57273[(2)] = inst_56728);

(statearr_56990_57273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (18))){
var inst_56756 = (state_56890[(19)]);
var inst_56767 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56768 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56769 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56770 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56771 = cljs.core.cons(inst_56770,inst_56756);
var inst_56772 = (new cljs.core.List(null,inst_56771,null,(1),null));
var inst_56773 = (new cljs.core.List(null,inst_56769,inst_56772,(2),null));
var inst_56774 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56768,50,inst_56773,"Should flush after timeout"];
var inst_56775 = cljs.core.PersistentHashMap.fromArrays(inst_56767,inst_56774);
var inst_56776 = cljs.test.report.call(null,inst_56775);
var state_56890__$1 = state_56890;
var statearr_56994_57274 = state_56890__$1;
(statearr_56994_57274[(2)] = inst_56776);

(statearr_56994_57274[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (37))){
var inst_56862 = (state_56890[(16)]);
var inst_56873 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56874 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56875 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56876 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56877 = cljs.core.cons(inst_56876,inst_56862);
var inst_56878 = (new cljs.core.List(null,inst_56877,null,(1),null));
var inst_56879 = (new cljs.core.List(null,inst_56875,inst_56878,(2),null));
var inst_56880 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56874,60,inst_56879,"Should flush 3,4 after timeout from first message"];
var inst_56881 = cljs.core.PersistentHashMap.fromArrays(inst_56873,inst_56880);
var inst_56882 = cljs.test.report.call(null,inst_56881);
var state_56890__$1 = state_56890;
var statearr_56995_57275 = state_56890__$1;
(statearr_56995_57275[(2)] = inst_56882);

(statearr_56995_57275[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (8))){
var _ = (function (){var statearr_56996 = state_56890;
(statearr_56996[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56996;
})();
var state_56890__$1 = state_56890;
var ex56991 = (state_56890__$1[(2)]);
var statearr_56997_57276 = state_56890__$1;
(statearr_56997_57276[(5)] = ex56991);


var statearr_57000_57277 = state_56890__$1;
(statearr_57000_57277[(1)] = (7));

(statearr_57000_57277[(5)] = null);



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
var statearr_57003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57003[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57003[(1)] = (1));

return statearr_57003;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56890){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56890);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57004){var ex__32294__auto__ = e57004;
var statearr_57005_57279 = state_56890;
(statearr_57005_57279[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56890[(4)]))){
var statearr_57006_57280 = state_56890;
(statearr_57006_57280[(1)] = cljs.core.first((state_56890[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57281 = state_56890;
state_56890 = G__57281;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56890){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_57007 = f__32362__auto__();
(statearr_57007[(6)] = c__32361__auto__);

return statearr_57007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56666","meta56666",283246221,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56665");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56665");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56665.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56665 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56665(meta56666){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665(meta56666));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56665(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008 = (function (meta57009){
this.meta57009 = meta57009;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57010,meta57009__$1){
var self__ = this;
var _57010__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008(meta57009__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57010){
var self__ = this;
var _57010__$1 = this;
return self__.meta57009;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57017 = (arguments.length - (1));
switch (G__57017) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008.prototype.apply = (function (self__,args57011){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57011)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_57091){
var state_val_57092 = (state_57091[(1)]);
if((state_val_57092 === (7))){
var inst_57039 = (state_57091[(2)]);
var inst_57040 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57041 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57042 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_57041,78,inst_57039,"Closing input should flush remaining"];
var inst_57043 = cljs.core.PersistentHashMap.fromArrays(inst_57040,inst_57042);
var inst_57044 = cljs.test.report.call(null,inst_57043);
var state_57091__$1 = state_57091;
var statearr_57094_57289 = state_57091__$1;
(statearr_57094_57289[(2)] = inst_57044);

(statearr_57094_57289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57092 === (1))){
var inst_57023 = (state_57091[(7)]);
var inst_57025 = (state_57091[(8)]);
var inst_57023__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_57024 = cljs.core.PersistentVector.EMPTY;
var inst_57025__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_57024);
var inst_57026 = (function (){var input_ch = inst_57023__$1;
var results = inst_57025__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_57027 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_57028 = [inst_57023__$1,inst_57026];
var inst_57029 = cljs.core.PersistentHashMap.fromArrays(inst_57027,inst_57028);
var inst_57030 = bb_web_ds_tools.components.async_buffer.create(inst_57029);
var state_57091__$1 = (function (){var statearr_57096 = state_57091;
(statearr_57096[(7)] = inst_57023__$1);

(statearr_57096[(8)] = inst_57025__$1);

(statearr_57096[(9)] = inst_57030);

return statearr_57096;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57091__$1,(2),inst_57023__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_57092 === (4))){
var inst_57038 = (state_57091[(2)]);
var state_57091__$1 = (function (){var statearr_57097 = state_57091;
(statearr_57097[(10)] = inst_57038);

return statearr_57097;
})();
var statearr_57098_57290 = state_57091__$1;
(statearr_57098_57290[(2)] = null);

(statearr_57098_57290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57092 === (6))){
var inst_57084 = (state_57091[(2)]);
var inst_57085 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_57091__$1 = (function (){var statearr_57099 = state_57091;
(statearr_57099[(11)] = inst_57084);

return statearr_57099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57091__$1,inst_57085);
} else {
if((state_val_57092 === (3))){
var inst_57023 = (state_57091[(7)]);
var inst_57034 = (state_57091[(2)]);
var inst_57035 = cljs.core.async.close_BANG_(inst_57023);
var inst_57036 = cljs.core.async.timeout((20));
var state_57091__$1 = (function (){var statearr_57100 = state_57091;
(statearr_57100[(12)] = inst_57034);

(statearr_57100[(13)] = inst_57035);

return statearr_57100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57091__$1,(4),inst_57036);
} else {
if((state_val_57092 === (2))){
var inst_57023 = (state_57091[(7)]);
var inst_57032 = (state_57091[(2)]);
var state_57091__$1 = (function (){var statearr_57101 = state_57091;
(statearr_57101[(14)] = inst_57032);

return statearr_57101;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57091__$1,(3),inst_57023,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_57092 === (11))){
var inst_57059 = (state_57091[(15)]);
var inst_57081 = (state_57091[(2)]);
var _ = (function (){var statearr_57107 = state_57091;
(statearr_57107[(4)] = cljs.core.rest((state_57091[(4)])));

return statearr_57107;
})();
var state_57091__$1 = (function (){var statearr_57108 = state_57091;
(statearr_57108[(16)] = inst_57081);

return statearr_57108;
})();
var statearr_57109_57293 = state_57091__$1;
(statearr_57109_57293[(2)] = inst_57059);

(statearr_57109_57293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57092 === (9))){
var inst_57058 = (state_57091[(17)]);
var inst_57061 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57062 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57063 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57064 = cljs.core.cons(inst_57063,inst_57058);
var inst_57065 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_57062,78,inst_57064,"Closing input should flush remaining"];
var inst_57066 = cljs.core.PersistentHashMap.fromArrays(inst_57061,inst_57065);
var inst_57067 = cljs.test.report.call(null,inst_57066);
var state_57091__$1 = state_57091;
var statearr_57112_57306 = state_57091__$1;
(statearr_57112_57306[(2)] = inst_57067);

(statearr_57112_57306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57092 === (5))){
var inst_57025 = (state_57091[(8)]);
var inst_57058 = (state_57091[(17)]);
var inst_57059 = (state_57091[(15)]);
var _ = (function (){var statearr_57117 = state_57091;
(statearr_57117[(4)] = cljs.core.cons((8),(state_57091[(4)])));

return statearr_57117;
})();
var inst_57050 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57051 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57052 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_57053 = (new cljs.core.PersistentVector(null,2,(5),inst_57051,inst_57052,null));
var inst_57054 = [inst_57053];
var inst_57055 = (new cljs.core.PersistentVector(null,1,(5),inst_57050,inst_57054,null));
var inst_57056 = cljs.core.deref(inst_57025);
var inst_57057 = (new cljs.core.List(null,inst_57056,null,(1),null));
var inst_57058__$1 = (new cljs.core.List(null,inst_57055,inst_57057,(2),null));
var inst_57059__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_57058__$1);
var state_57091__$1 = (function (){var statearr_57125 = state_57091;
(statearr_57125[(17)] = inst_57058__$1);

(statearr_57125[(15)] = inst_57059__$1);

return statearr_57125;
})();
if(cljs.core.truth_(inst_57059__$1)){
var statearr_57126_57307 = state_57091__$1;
(statearr_57126_57307[(1)] = (9));

} else {
var statearr_57127_57308 = state_57091__$1;
(statearr_57127_57308[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57092 === (10))){
var inst_57058 = (state_57091[(17)]);
var inst_57069 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57071 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57072 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_57073 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57074 = cljs.core.cons(inst_57073,inst_57058);
var inst_57075 = (new cljs.core.List(null,inst_57074,null,(1),null));
var inst_57076 = (new cljs.core.List(null,inst_57072,inst_57075,(2),null));
var inst_57077 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_57071,78,inst_57076,"Closing input should flush remaining"];
var inst_57078 = cljs.core.PersistentHashMap.fromArrays(inst_57069,inst_57077);
var inst_57079 = cljs.test.report.call(null,inst_57078);
var state_57091__$1 = state_57091;
var statearr_57128_57310 = state_57091__$1;
(statearr_57128_57310[(2)] = inst_57079);

(statearr_57128_57310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57092 === (8))){
var _ = (function (){var statearr_57129 = state_57091;
(statearr_57129[(4)] = cljs.core.rest((state_57091[(4)])));

return statearr_57129;
})();
var state_57091__$1 = state_57091;
var ex57113 = (state_57091__$1[(2)]);
var statearr_57130_57311 = state_57091__$1;
(statearr_57130_57311[(5)] = ex57113);


var statearr_57131_57312 = state_57091__$1;
(statearr_57131_57312[(1)] = (7));

(statearr_57131_57312[(5)] = null);



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
var statearr_57132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57132[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57132[(1)] = (1));

return statearr_57132;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_57091){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_57091);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57133){var ex__32294__auto__ = e57133;
var statearr_57135_57313 = state_57091;
(statearr_57135_57313[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_57091[(4)]))){
var statearr_57136_57314 = state_57091;
(statearr_57136_57314[(1)] = cljs.core.first((state_57091[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57315 = state_57091;
state_57091 = G__57315;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_57091){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_57091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_57138 = f__32362__auto__();
(statearr_57138[(6)] = c__32361__auto__);

return statearr_57138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57009","meta57009",1069507444,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57008");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57008");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57008.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test57008 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test57008(meta57009){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008(meta57009));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57008(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
