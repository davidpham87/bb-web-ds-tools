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
var c__32347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32348__auto__ = (function (){var switch__32290__auto__ = (function (state_56510){
var state_val_56511 = (state_56510[(1)]);
if((state_val_56511 === (7))){
var inst_56358 = (state_56510[(2)]);
var inst_56359 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56360 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56361 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56360,19,inst_56358,"Buffer should not flush automatically without timer"];
var inst_56362 = cljs.core.PersistentHashMap.fromArrays(inst_56359,inst_56361);
var inst_56363 = cljs.test.report.call(null,inst_56362);
var state_56510__$1 = state_56510;
var statearr_56515_57131 = state_56510__$1;
(statearr_56515_57131[(2)] = inst_56363);

(statearr_56515_57131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (20))){
var inst_56350 = (state_56510[(7)]);
var inst_56452 = (state_56510[(2)]);
var inst_56453 = (inst_56350.cljs$core$IFn$_invoke$arity$0 ? inst_56350.cljs$core$IFn$_invoke$arity$0() : inst_56350.call(null));
var inst_56454 = cljs.core.async.timeout((20));
var state_56510__$1 = (function (){var statearr_56516 = state_56510;
(statearr_56516[(8)] = inst_56452);

(statearr_56516[(9)] = inst_56453);

return statearr_56516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56510__$1,(21),inst_56454);
} else {
if((state_val_56511 === (27))){
var inst_56480 = (state_56510[(10)]);
var inst_56493 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56494 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56495 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56496 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56497 = cljs.core.cons(inst_56496,inst_56480);
var inst_56498 = (new cljs.core.List(null,inst_56497,null,(1),null));
var inst_56499 = (new cljs.core.List(null,inst_56495,inst_56498,(2),null));
var inst_56500 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56494,29,inst_56499,"Subsequent flush should work"];
var inst_56501 = cljs.core.PersistentHashMap.fromArrays(inst_56493,inst_56500);
var inst_56502 = cljs.test.report.call(null,inst_56501);
var state_56510__$1 = state_56510;
var statearr_56517_57139 = state_56510__$1;
(statearr_56517_57139[(2)] = inst_56502);

(statearr_56517_57139[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (1))){
var inst_56343 = (state_56510[(11)]);
var inst_56345 = (state_56510[(12)]);
var inst_56343__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56344 = cljs.core.PersistentVector.EMPTY;
var inst_56345__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56344);
var inst_56346 = (function (){var input_ch = inst_56343__$1;
var results = inst_56345__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56347 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56348 = [inst_56343__$1,inst_56346];
var inst_56349 = cljs.core.PersistentHashMap.fromArrays(inst_56347,inst_56348);
var inst_56350 = bb_web_ds_tools.components.async_buffer.create(inst_56349);
var state_56510__$1 = (function (){var statearr_56518 = state_56510;
(statearr_56518[(11)] = inst_56343__$1);

(statearr_56518[(12)] = inst_56345__$1);

(statearr_56518[(7)] = inst_56350);

return statearr_56518;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56510__$1,(2),inst_56343__$1,(1));
} else {
if((state_val_56511 === (24))){
var inst_56457 = (state_56510[(2)]);
var inst_56459 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56460 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56461 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56460,29,inst_56457,"Subsequent flush should work"];
var inst_56462 = cljs.core.PersistentHashMap.fromArrays(inst_56459,inst_56461);
var inst_56463 = cljs.test.report.call(null,inst_56462);
var state_56510__$1 = state_56510;
var statearr_56520_57140 = state_56510__$1;
(statearr_56520_57140[(2)] = inst_56463);

(statearr_56520_57140[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (4))){
var inst_56357 = (state_56510[(2)]);
var state_56510__$1 = (function (){var statearr_56522 = state_56510;
(statearr_56522[(13)] = inst_56357);

return statearr_56522;
})();
var statearr_56527_57141 = state_56510__$1;
(statearr_56527_57141[(2)] = null);

(statearr_56527_57141[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (15))){
var inst_56400 = (state_56510[(2)]);
var inst_56401 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56402 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56403 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56402,24,inst_56400,"Manual flush should flush all items"];
var inst_56404 = cljs.core.PersistentHashMap.fromArrays(inst_56401,inst_56403);
var inst_56405 = cljs.test.report.call(null,inst_56404);
var state_56510__$1 = state_56510;
var statearr_56528_57142 = state_56510__$1;
(statearr_56528_57142[(2)] = inst_56405);

(statearr_56528_57142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (21))){
var inst_56456 = (state_56510[(2)]);
var state_56510__$1 = (function (){var statearr_56529 = state_56510;
(statearr_56529[(14)] = inst_56456);

return statearr_56529;
})();
var statearr_56530_57143 = state_56510__$1;
(statearr_56530_57143[(2)] = null);

(statearr_56530_57143[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (13))){
var inst_56345 = (state_56510[(12)]);
var inst_56423 = (state_56510[(15)]);
var inst_56424 = (state_56510[(16)]);
var _ = (function (){var statearr_56531 = state_56510;
(statearr_56531[(4)] = cljs.core.cons((16),(state_56510[(4)])));

return statearr_56531;
})();
var inst_56411 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56412 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56413 = [(1),(2)];
var inst_56414 = (new cljs.core.PersistentVector(null,2,(5),inst_56412,inst_56413,null));
var inst_56415 = [inst_56414];
var inst_56416 = (new cljs.core.PersistentVector(null,1,(5),inst_56411,inst_56415,null));
var inst_56417 = cljs.core.deref(inst_56345);
var inst_56418 = (new cljs.core.List(null,inst_56417,null,(1),null));
var inst_56423__$1 = (new cljs.core.List(null,inst_56416,inst_56418,(2),null));
var inst_56424__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56423__$1);
var state_56510__$1 = (function (){var statearr_56534 = state_56510;
(statearr_56534[(15)] = inst_56423__$1);

(statearr_56534[(16)] = inst_56424__$1);

return statearr_56534;
})();
if(cljs.core.truth_(inst_56424__$1)){
var statearr_56535_57145 = state_56510__$1;
(statearr_56535_57145[(1)] = (17));

} else {
var statearr_56537_57146 = state_56510__$1;
(statearr_56537_57146[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (22))){
var inst_56345 = (state_56510[(12)]);
var inst_56480 = (state_56510[(10)]);
var inst_56481 = (state_56510[(17)]);
var _ = (function (){var statearr_56540 = state_56510;
(statearr_56540[(4)] = cljs.core.cons((25),(state_56510[(4)])));

return statearr_56540;
})();
var inst_56469 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56471 = [(1),(2)];
var inst_56472 = (new cljs.core.PersistentVector(null,2,(5),inst_56470,inst_56471,null));
var inst_56473 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56474 = [(3)];
var inst_56475 = (new cljs.core.PersistentVector(null,1,(5),inst_56473,inst_56474,null));
var inst_56476 = [inst_56472,inst_56475];
var inst_56477 = (new cljs.core.PersistentVector(null,2,(5),inst_56469,inst_56476,null));
var inst_56478 = cljs.core.deref(inst_56345);
var inst_56479 = (new cljs.core.List(null,inst_56478,null,(1),null));
var inst_56480__$1 = (new cljs.core.List(null,inst_56477,inst_56479,(2),null));
var inst_56481__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56480__$1);
var state_56510__$1 = (function (){var statearr_56545 = state_56510;
(statearr_56545[(10)] = inst_56480__$1);

(statearr_56545[(17)] = inst_56481__$1);

return statearr_56545;
})();
if(cljs.core.truth_(inst_56481__$1)){
var statearr_56546_57148 = state_56510__$1;
(statearr_56546_57148[(1)] = (26));

} else {
var statearr_56547_57149 = state_56510__$1;
(statearr_56547_57149[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (6))){
var inst_56350 = (state_56510[(7)]);
var inst_56395 = (state_56510[(2)]);
var inst_56396 = (inst_56350.cljs$core$IFn$_invoke$arity$0 ? inst_56350.cljs$core$IFn$_invoke$arity$0() : inst_56350.call(null));
var inst_56397 = cljs.core.async.timeout((20));
var state_56510__$1 = (function (){var statearr_56549 = state_56510;
(statearr_56549[(18)] = inst_56395);

(statearr_56549[(19)] = inst_56396);

return statearr_56549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56510__$1,(12),inst_56397);
} else {
if((state_val_56511 === (28))){
var inst_56481 = (state_56510[(17)]);
var inst_56504 = (state_56510[(2)]);
var _ = (function (){var statearr_56550 = state_56510;
(statearr_56550[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56550;
})();
var state_56510__$1 = (function (){var statearr_56551 = state_56510;
(statearr_56551[(20)] = inst_56504);

return statearr_56551;
})();
var statearr_56552_57150 = state_56510__$1;
(statearr_56552_57150[(2)] = inst_56481);

(statearr_56552_57150[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (25))){
var _ = (function (){var statearr_56553 = state_56510;
(statearr_56553[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56553;
})();
var state_56510__$1 = state_56510;
var ex56548 = (state_56510__$1[(2)]);
var statearr_56554_57151 = state_56510__$1;
(statearr_56554_57151[(5)] = ex56548);


var statearr_56555_57152 = state_56510__$1;
(statearr_56555_57152[(1)] = (24));

(statearr_56555_57152[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (17))){
var inst_56423 = (state_56510[(15)]);
var inst_56426 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56427 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56428 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56429 = cljs.core.cons(inst_56428,inst_56423);
var inst_56430 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56427,24,inst_56429,"Manual flush should flush all items"];
var inst_56431 = cljs.core.PersistentHashMap.fromArrays(inst_56426,inst_56430);
var inst_56432 = cljs.test.report.call(null,inst_56431);
var state_56510__$1 = state_56510;
var statearr_56557_57153 = state_56510__$1;
(statearr_56557_57153[(2)] = inst_56432);

(statearr_56557_57153[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (3))){
var inst_56354 = (state_56510[(2)]);
var inst_56355 = cljs.core.async.timeout((20));
var state_56510__$1 = (function (){var statearr_56558 = state_56510;
(statearr_56558[(21)] = inst_56354);

return statearr_56558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56510__$1,(4),inst_56355);
} else {
if((state_val_56511 === (12))){
var inst_56399 = (state_56510[(2)]);
var state_56510__$1 = (function (){var statearr_56560 = state_56510;
(statearr_56560[(22)] = inst_56399);

return statearr_56560;
})();
var statearr_56561_57154 = state_56510__$1;
(statearr_56561_57154[(2)] = null);

(statearr_56561_57154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (2))){
var inst_56343 = (state_56510[(11)]);
var inst_56352 = (state_56510[(2)]);
var state_56510__$1 = (function (){var statearr_56562 = state_56510;
(statearr_56562[(23)] = inst_56352);

return statearr_56562;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56510__$1,(3),inst_56343,(2));
} else {
if((state_val_56511 === (23))){
var inst_56507 = (state_56510[(2)]);
var inst_56508 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56510__$1 = (function (){var statearr_56563 = state_56510;
(statearr_56563[(24)] = inst_56507);

return statearr_56563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56510__$1,inst_56508);
} else {
if((state_val_56511 === (19))){
var inst_56424 = (state_56510[(16)]);
var inst_56447 = (state_56510[(2)]);
var _ = (function (){var statearr_56564 = state_56510;
(statearr_56564[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56564;
})();
var state_56510__$1 = (function (){var statearr_56565 = state_56510;
(statearr_56565[(25)] = inst_56447);

return statearr_56565;
})();
var statearr_56566_57157 = state_56510__$1;
(statearr_56566_57157[(2)] = inst_56424);

(statearr_56566_57157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (11))){
var inst_56371 = (state_56510[(26)]);
var inst_56392 = (state_56510[(2)]);
var _ = (function (){var statearr_56567 = state_56510;
(statearr_56567[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56567;
})();
var state_56510__$1 = (function (){var statearr_56568 = state_56510;
(statearr_56568[(27)] = inst_56392);

return statearr_56568;
})();
var statearr_56569_57158 = state_56510__$1;
(statearr_56569_57158[(2)] = inst_56371);

(statearr_56569_57158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (9))){
var inst_56370 = (state_56510[(28)]);
var inst_56373 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56374 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56375 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56376 = cljs.core.cons(inst_56375,inst_56370);
var inst_56377 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56374,19,inst_56376,"Buffer should not flush automatically without timer"];
var inst_56378 = cljs.core.PersistentHashMap.fromArrays(inst_56373,inst_56377);
var inst_56379 = cljs.test.report.call(null,inst_56378);
var state_56510__$1 = state_56510;
var statearr_56570_57159 = state_56510__$1;
(statearr_56570_57159[(2)] = inst_56379);

(statearr_56570_57159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (5))){
var inst_56345 = (state_56510[(12)]);
var inst_56370 = (state_56510[(28)]);
var inst_56371 = (state_56510[(26)]);
var _ = (function (){var statearr_56572 = state_56510;
(statearr_56572[(4)] = cljs.core.cons((8),(state_56510[(4)])));

return statearr_56572;
})();
var inst_56369 = cljs.core.deref(inst_56345);
var inst_56370__$1 = (new cljs.core.List(null,inst_56369,null,(1),null));
var inst_56371__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56370__$1);
var state_56510__$1 = (function (){var statearr_56573 = state_56510;
(statearr_56573[(28)] = inst_56370__$1);

(statearr_56573[(26)] = inst_56371__$1);

return statearr_56573;
})();
if(cljs.core.truth_(inst_56371__$1)){
var statearr_56574_57161 = state_56510__$1;
(statearr_56574_57161[(1)] = (9));

} else {
var statearr_56575_57162 = state_56510__$1;
(statearr_56575_57162[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (14))){
var inst_56343 = (state_56510[(11)]);
var inst_56450 = (state_56510[(2)]);
var state_56510__$1 = (function (){var statearr_56577 = state_56510;
(statearr_56577[(29)] = inst_56450);

return statearr_56577;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56510__$1,(20),inst_56343,(3));
} else {
if((state_val_56511 === (26))){
var inst_56480 = (state_56510[(10)]);
var inst_56483 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56485 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56486 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56487 = cljs.core.cons(inst_56486,inst_56480);
var inst_56488 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56485,29,inst_56487,"Subsequent flush should work"];
var inst_56489 = cljs.core.PersistentHashMap.fromArrays(inst_56483,inst_56488);
var inst_56490 = cljs.test.report.call(null,inst_56489);
var state_56510__$1 = state_56510;
var statearr_56578_57166 = state_56510__$1;
(statearr_56578_57166[(2)] = inst_56490);

(statearr_56578_57166[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (16))){
var _ = (function (){var statearr_56579 = state_56510;
(statearr_56579[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56579;
})();
var state_56510__$1 = state_56510;
var ex56576 = (state_56510__$1[(2)]);
var statearr_56580_57167 = state_56510__$1;
(statearr_56580_57167[(5)] = ex56576);


var statearr_56581_57168 = state_56510__$1;
(statearr_56581_57168[(1)] = (15));

(statearr_56581_57168[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (10))){
var inst_56370 = (state_56510[(28)]);
var inst_56381 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56382 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56383 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56384 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56385 = cljs.core.cons(inst_56384,inst_56370);
var inst_56386 = (new cljs.core.List(null,inst_56385,null,(1),null));
var inst_56387 = (new cljs.core.List(null,inst_56383,inst_56386,(2),null));
var inst_56388 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56382,19,inst_56387,"Buffer should not flush automatically without timer"];
var inst_56389 = cljs.core.PersistentHashMap.fromArrays(inst_56381,inst_56388);
var inst_56390 = cljs.test.report.call(null,inst_56389);
var state_56510__$1 = state_56510;
var statearr_56583_57169 = state_56510__$1;
(statearr_56583_57169[(2)] = inst_56390);

(statearr_56583_57169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (18))){
var inst_56423 = (state_56510[(15)]);
var inst_56436 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56437 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56438 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56439 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56440 = cljs.core.cons(inst_56439,inst_56423);
var inst_56441 = (new cljs.core.List(null,inst_56440,null,(1),null));
var inst_56442 = (new cljs.core.List(null,inst_56438,inst_56441,(2),null));
var inst_56443 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56437,24,inst_56442,"Manual flush should flush all items"];
var inst_56444 = cljs.core.PersistentHashMap.fromArrays(inst_56436,inst_56443);
var inst_56445 = cljs.test.report.call(null,inst_56444);
var state_56510__$1 = state_56510;
var statearr_56584_57174 = state_56510__$1;
(statearr_56584_57174[(2)] = inst_56445);

(statearr_56584_57174[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56511 === (8))){
var _ = (function (){var statearr_56585 = state_56510;
(statearr_56585[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56585;
})();
var state_56510__$1 = state_56510;
var ex56582 = (state_56510__$1[(2)]);
var statearr_56586_57175 = state_56510__$1;
(statearr_56586_57175[(5)] = ex56582);


var statearr_56587_57176 = state_56510__$1;
(statearr_56587_57176[(1)] = (7));

(statearr_56587_57176[(5)] = null);



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
var statearr_56589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56589[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56589[(1)] = (1));

return statearr_56589;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56510){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56510);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56590){var ex__32294__auto__ = e56590;
var statearr_56591_57177 = state_56510;
(statearr_56591_57177[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56510[(4)]))){
var statearr_56592_57179 = state_56510;
(statearr_56592_57179[(1)] = cljs.core.first((state_56510[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57181 = state_56510;
state_56510 = G__57181;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56510){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32349__auto__ = (function (){var statearr_56593 = f__32348__auto__();
(statearr_56593[(6)] = c__32347__auto__);

return statearr_56593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32349__auto__);
}));

return c__32347__auto__;
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
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594 = (function (meta56595){
this.meta56595 = meta56595;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56596,meta56595__$1){
var self__ = this;
var _56596__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594(meta56595__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56596){
var self__ = this;
var _56596__$1 = this;
return self__.meta56595;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56600 = (arguments.length - (1));
switch (G__56600) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594.prototype.apply = (function (self__,args56597){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56597)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32348__auto__ = (function (){var switch__32290__auto__ = (function (state_56853){
var state_val_56855 = (state_56853[(1)]);
if((state_val_56855 === (7))){
var inst_56620 = (state_56853[(2)]);
var inst_56625 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56630 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56631 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56630,47,inst_56620,"Should not flush before timeout"];
var inst_56632 = cljs.core.PersistentHashMap.fromArrays(inst_56625,inst_56631);
var inst_56633 = cljs.test.report.call(null,inst_56632);
var state_56853__$1 = state_56853;
var statearr_56859_57186 = state_56853__$1;
(statearr_56859_57186[(2)] = inst_56633);

(statearr_56859_57186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (20))){
var inst_56722 = (state_56853[(2)]);
var inst_56723 = cljs.core.async.timeout((50));
var state_56853__$1 = (function (){var statearr_56860 = state_56853;
(statearr_56860[(7)] = inst_56722);

return statearr_56860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56853__$1,(21),inst_56723);
} else {
if((state_val_56855 === (27))){
var _ = (function (){var statearr_56862 = state_56853;
(statearr_56862[(4)] = cljs.core.rest((state_56853[(4)])));

return statearr_56862;
})();
var state_56853__$1 = state_56853;
var ex56856 = (state_56853__$1[(2)]);
var statearr_56863_57187 = state_56853__$1;
(statearr_56863_57187[(5)] = ex56856);


var statearr_56864_57188 = state_56853__$1;
(statearr_56864_57188[(1)] = (26));

(statearr_56864_57188[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (1))){
var inst_56604 = (state_56853[(8)]);
var inst_56606 = (state_56853[(9)]);
var inst_56604__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56605 = cljs.core.PersistentVector.EMPTY;
var inst_56606__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56605);
var inst_56607 = (function (){var input_ch = inst_56604__$1;
var results = inst_56606__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56608 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56609 = [inst_56604__$1,(100),inst_56607];
var inst_56610 = cljs.core.PersistentHashMap.fromArrays(inst_56608,inst_56609);
var inst_56611 = bb_web_ds_tools.components.async_buffer.create(inst_56610);
var state_56853__$1 = (function (){var statearr_56866 = state_56853;
(statearr_56866[(8)] = inst_56604__$1);

(statearr_56866[(9)] = inst_56606__$1);

(statearr_56866[(10)] = inst_56611);

return statearr_56866;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56853__$1,(2),inst_56604__$1,(1));
} else {
if((state_val_56855 === (24))){
var inst_56606 = (state_56853[(9)]);
var inst_56760 = (state_56853[(11)]);
var inst_56765 = (state_56853[(12)]);
var _ = (function (){var statearr_56890 = state_56853;
(statearr_56890[(4)] = cljs.core.cons((27),(state_56853[(4)])));

return statearr_56890;
})();
var inst_56748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56754 = [(1),(2)];
var inst_56755 = (new cljs.core.PersistentVector(null,2,(5),inst_56753,inst_56754,null));
var inst_56756 = [inst_56755];
var inst_56757 = (new cljs.core.PersistentVector(null,1,(5),inst_56748,inst_56756,null));
var inst_56758 = cljs.core.deref(inst_56606);
var inst_56759 = (new cljs.core.List(null,inst_56758,null,(1),null));
var inst_56760__$1 = (new cljs.core.List(null,inst_56757,inst_56759,(2),null));
var inst_56765__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56760__$1);
var state_56853__$1 = (function (){var statearr_56893 = state_56853;
(statearr_56893[(11)] = inst_56760__$1);

(statearr_56893[(12)] = inst_56765__$1);

return statearr_56893;
})();
if(cljs.core.truth_(inst_56765__$1)){
var statearr_56895_57192 = state_56853__$1;
(statearr_56895_57192[(1)] = (28));

} else {
var statearr_56896_57193 = state_56853__$1;
(statearr_56896_57193[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (4))){
var inst_56618 = (state_56853[(2)]);
var state_56853__$1 = (function (){var statearr_56897 = state_56853;
(statearr_56897[(13)] = inst_56618);

return statearr_56897;
})();
var statearr_56898_57194 = state_56853__$1;
(statearr_56898_57194[(2)] = null);

(statearr_56898_57194[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (15))){
var inst_56676 = (state_56853[(2)]);
var inst_56677 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56678 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56679 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56678,50,inst_56676,"Should flush after timeout"];
var inst_56680 = cljs.core.PersistentHashMap.fromArrays(inst_56677,inst_56679);
var inst_56681 = cljs.test.report.call(null,inst_56680);
var state_56853__$1 = state_56853;
var statearr_56899_57195 = state_56853__$1;
(statearr_56899_57195[(2)] = inst_56681);

(statearr_56899_57195[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (21))){
var inst_56604 = (state_56853[(8)]);
var inst_56725 = (state_56853[(2)]);
var state_56853__$1 = (function (){var statearr_56906 = state_56853;
(statearr_56906[(14)] = inst_56725);

return statearr_56906;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56853__$1,(22),inst_56604,(4));
} else {
if((state_val_56855 === (31))){
var inst_56794 = (state_56853[(2)]);
var state_56853__$1 = (function (){var statearr_56907 = state_56853;
(statearr_56907[(15)] = inst_56794);

return statearr_56907;
})();
var statearr_56908_57197 = state_56853__$1;
(statearr_56908_57197[(2)] = null);

(statearr_56908_57197[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (32))){
var inst_56606 = (state_56853[(9)]);
var inst_56817 = (state_56853[(16)]);
var inst_56818 = (state_56853[(17)]);
var _ = (function (){var statearr_56909 = state_56853;
(statearr_56909[(4)] = cljs.core.cons((35),(state_56853[(4)])));

return statearr_56909;
})();
var inst_56806 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56807 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56808 = [(1),(2)];
var inst_56809 = (new cljs.core.PersistentVector(null,2,(5),inst_56807,inst_56808,null));
var inst_56810 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56811 = [(3),(4)];
var inst_56812 = (new cljs.core.PersistentVector(null,2,(5),inst_56810,inst_56811,null));
var inst_56813 = [inst_56809,inst_56812];
var inst_56814 = (new cljs.core.PersistentVector(null,2,(5),inst_56806,inst_56813,null));
var inst_56815 = cljs.core.deref(inst_56606);
var inst_56816 = (new cljs.core.List(null,inst_56815,null,(1),null));
var inst_56817__$1 = (new cljs.core.List(null,inst_56814,inst_56816,(2),null));
var inst_56818__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56817__$1);
var state_56853__$1 = (function (){var statearr_56910 = state_56853;
(statearr_56910[(16)] = inst_56817__$1);

(statearr_56910[(17)] = inst_56818__$1);

return statearr_56910;
})();
if(cljs.core.truth_(inst_56818__$1)){
var statearr_56911_57198 = state_56853__$1;
(statearr_56911_57198[(1)] = (36));

} else {
var statearr_56912_57199 = state_56853__$1;
(statearr_56912_57199[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (33))){
var inst_56849 = (state_56853[(2)]);
var inst_56850 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56853__$1 = (function (){var statearr_56913 = state_56853;
(statearr_56913[(18)] = inst_56849);

return statearr_56913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56853__$1,inst_56850);
} else {
if((state_val_56855 === (13))){
var inst_56606 = (state_56853[(9)]);
var inst_56695 = (state_56853[(19)]);
var inst_56696 = (state_56853[(20)]);
var _ = (function (){var statearr_56914 = state_56853;
(statearr_56914[(4)] = cljs.core.cons((16),(state_56853[(4)])));

return statearr_56914;
})();
var inst_56687 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56688 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56689 = [(1),(2)];
var inst_56690 = (new cljs.core.PersistentVector(null,2,(5),inst_56688,inst_56689,null));
var inst_56691 = [inst_56690];
var inst_56692 = (new cljs.core.PersistentVector(null,1,(5),inst_56687,inst_56691,null));
var inst_56693 = cljs.core.deref(inst_56606);
var inst_56694 = (new cljs.core.List(null,inst_56693,null,(1),null));
var inst_56695__$1 = (new cljs.core.List(null,inst_56692,inst_56694,(2),null));
var inst_56696__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56695__$1);
var state_56853__$1 = (function (){var statearr_56915 = state_56853;
(statearr_56915[(19)] = inst_56695__$1);

(statearr_56915[(20)] = inst_56696__$1);

return statearr_56915;
})();
if(cljs.core.truth_(inst_56696__$1)){
var statearr_56916_57200 = state_56853__$1;
(statearr_56916_57200[(1)] = (17));

} else {
var statearr_56917_57201 = state_56853__$1;
(statearr_56917_57201[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (22))){
var inst_56727 = (state_56853[(2)]);
var inst_56728 = cljs.core.async.timeout((20));
var state_56853__$1 = (function (){var statearr_56918 = state_56853;
(statearr_56918[(21)] = inst_56727);

return statearr_56918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56853__$1,(23),inst_56728);
} else {
if((state_val_56855 === (36))){
var inst_56817 = (state_56853[(16)]);
var inst_56820 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56821 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56822 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56823 = cljs.core.cons(inst_56822,inst_56817);
var inst_56824 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56821,60,inst_56823,"Should flush 3,4 after timeout from first message"];
var inst_56825 = cljs.core.PersistentHashMap.fromArrays(inst_56820,inst_56824);
var inst_56826 = cljs.test.report.call(null,inst_56825);
var state_56853__$1 = state_56853;
var statearr_56919_57203 = state_56853__$1;
(statearr_56919_57203[(2)] = inst_56826);

(statearr_56919_57203[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (29))){
var inst_56760 = (state_56853[(11)]);
var inst_56777 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56778 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56779 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56780 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56781 = cljs.core.cons(inst_56780,inst_56760);
var inst_56782 = (new cljs.core.List(null,inst_56781,null,(1),null));
var inst_56783 = (new cljs.core.List(null,inst_56779,inst_56782,(2),null));
var inst_56784 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56778,57,inst_56783,"Should not flush 3,4 yet"];
var inst_56785 = cljs.core.PersistentHashMap.fromArrays(inst_56777,inst_56784);
var inst_56786 = cljs.test.report.call(null,inst_56785);
var state_56853__$1 = state_56853;
var statearr_56920_57204 = state_56853__$1;
(statearr_56920_57204[(2)] = inst_56786);

(statearr_56920_57204[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (6))){
var inst_56668 = (state_56853[(2)]);
var inst_56673 = cljs.core.async.timeout((100));
var state_56853__$1 = (function (){var statearr_56921 = state_56853;
(statearr_56921[(22)] = inst_56668);

return statearr_56921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56853__$1,(12),inst_56673);
} else {
if((state_val_56855 === (28))){
var inst_56760 = (state_56853[(11)]);
var inst_56769 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56770 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56771 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56772 = cljs.core.cons(inst_56771,inst_56760);
var inst_56773 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56770,57,inst_56772,"Should not flush 3,4 yet"];
var inst_56774 = cljs.core.PersistentHashMap.fromArrays(inst_56769,inst_56773);
var inst_56775 = cljs.test.report.call(null,inst_56774);
var state_56853__$1 = state_56853;
var statearr_56922_57208 = state_56853__$1;
(statearr_56922_57208[(2)] = inst_56775);

(statearr_56922_57208[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (25))){
var inst_56791 = (state_56853[(2)]);
var inst_56792 = cljs.core.async.timeout((80));
var state_56853__$1 = (function (){var statearr_56923 = state_56853;
(statearr_56923[(23)] = inst_56791);

return statearr_56923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56853__$1,(31),inst_56792);
} else {
if((state_val_56855 === (34))){
var inst_56795 = (state_56853[(2)]);
var inst_56796 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56797 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56798 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56797,60,inst_56795,"Should flush 3,4 after timeout from first message"];
var inst_56799 = cljs.core.PersistentHashMap.fromArrays(inst_56796,inst_56798);
var inst_56800 = cljs.test.report.call(null,inst_56799);
var state_56853__$1 = state_56853;
var statearr_56924_57209 = state_56853__$1;
(statearr_56924_57209[(2)] = inst_56800);

(statearr_56924_57209[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (17))){
var inst_56695 = (state_56853[(19)]);
var inst_56698 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56699 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56700 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56701 = cljs.core.cons(inst_56700,inst_56695);
var inst_56702 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56699,50,inst_56701,"Should flush after timeout"];
var inst_56703 = cljs.core.PersistentHashMap.fromArrays(inst_56698,inst_56702);
var inst_56704 = cljs.test.report.call(null,inst_56703);
var state_56853__$1 = state_56853;
var statearr_56925_57211 = state_56853__$1;
(statearr_56925_57211[(2)] = inst_56704);

(statearr_56925_57211[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (3))){
var inst_56615 = (state_56853[(2)]);
var inst_56616 = cljs.core.async.timeout((50));
var state_56853__$1 = (function (){var statearr_56926 = state_56853;
(statearr_56926[(24)] = inst_56615);

return statearr_56926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56853__$1,(4),inst_56616);
} else {
if((state_val_56855 === (12))){
var inst_56675 = (state_56853[(2)]);
var state_56853__$1 = (function (){var statearr_56927 = state_56853;
(statearr_56927[(25)] = inst_56675);

return statearr_56927;
})();
var statearr_56928_57212 = state_56853__$1;
(statearr_56928_57212[(2)] = null);

(statearr_56928_57212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (2))){
var inst_56604 = (state_56853[(8)]);
var inst_56613 = (state_56853[(2)]);
var state_56853__$1 = (function (){var statearr_56930 = state_56853;
(statearr_56930[(26)] = inst_56613);

return statearr_56930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56853__$1,(3),inst_56604,(2));
} else {
if((state_val_56855 === (23))){
var inst_56730 = (state_56853[(2)]);
var state_56853__$1 = (function (){var statearr_56931 = state_56853;
(statearr_56931[(27)] = inst_56730);

return statearr_56931;
})();
var statearr_56932_57213 = state_56853__$1;
(statearr_56932_57213[(2)] = null);

(statearr_56932_57213[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (35))){
var _ = (function (){var statearr_56933 = state_56853;
(statearr_56933[(4)] = cljs.core.rest((state_56853[(4)])));

return statearr_56933;
})();
var state_56853__$1 = state_56853;
var ex56929 = (state_56853__$1[(2)]);
var statearr_56934_57214 = state_56853__$1;
(statearr_56934_57214[(5)] = ex56929);


var statearr_56935_57215 = state_56853__$1;
(statearr_56935_57215[(1)] = (34));

(statearr_56935_57215[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (19))){
var inst_56696 = (state_56853[(20)]);
var inst_56717 = (state_56853[(2)]);
var _ = (function (){var statearr_56936 = state_56853;
(statearr_56936[(4)] = cljs.core.rest((state_56853[(4)])));

return statearr_56936;
})();
var state_56853__$1 = (function (){var statearr_56937 = state_56853;
(statearr_56937[(28)] = inst_56717);

return statearr_56937;
})();
var statearr_56938_57216 = state_56853__$1;
(statearr_56938_57216[(2)] = inst_56696);

(statearr_56938_57216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (11))){
var inst_56643 = (state_56853[(29)]);
var inst_56665 = (state_56853[(2)]);
var _ = (function (){var statearr_56939 = state_56853;
(statearr_56939[(4)] = cljs.core.rest((state_56853[(4)])));

return statearr_56939;
})();
var state_56853__$1 = (function (){var statearr_56940 = state_56853;
(statearr_56940[(30)] = inst_56665);

return statearr_56940;
})();
var statearr_56941_57218 = state_56853__$1;
(statearr_56941_57218[(2)] = inst_56643);

(statearr_56941_57218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (9))){
var inst_56642 = (state_56853[(31)]);
var inst_56645 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56646 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56647 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56648 = cljs.core.cons(inst_56647,inst_56642);
var inst_56649 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56646,47,inst_56648,"Should not flush before timeout"];
var inst_56650 = cljs.core.PersistentHashMap.fromArrays(inst_56645,inst_56649);
var inst_56651 = cljs.test.report.call(null,inst_56650);
var state_56853__$1 = state_56853;
var statearr_56942_57222 = state_56853__$1;
(statearr_56942_57222[(2)] = inst_56651);

(statearr_56942_57222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (5))){
var inst_56606 = (state_56853[(9)]);
var inst_56642 = (state_56853[(31)]);
var inst_56643 = (state_56853[(29)]);
var _ = (function (){var statearr_56943 = state_56853;
(statearr_56943[(4)] = cljs.core.cons((8),(state_56853[(4)])));

return statearr_56943;
})();
var inst_56641 = cljs.core.deref(inst_56606);
var inst_56642__$1 = (new cljs.core.List(null,inst_56641,null,(1),null));
var inst_56643__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56642__$1);
var state_56853__$1 = (function (){var statearr_56944 = state_56853;
(statearr_56944[(31)] = inst_56642__$1);

(statearr_56944[(29)] = inst_56643__$1);

return statearr_56944;
})();
if(cljs.core.truth_(inst_56643__$1)){
var statearr_56945_57223 = state_56853__$1;
(statearr_56945_57223[(1)] = (9));

} else {
var statearr_56946_57224 = state_56853__$1;
(statearr_56946_57224[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (14))){
var inst_56604 = (state_56853[(8)]);
var inst_56720 = (state_56853[(2)]);
var state_56853__$1 = (function (){var statearr_56948 = state_56853;
(statearr_56948[(32)] = inst_56720);

return statearr_56948;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56853__$1,(20),inst_56604,(3));
} else {
if((state_val_56855 === (26))){
var inst_56731 = (state_56853[(2)]);
var inst_56732 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56733 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56734 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56733,57,inst_56731,"Should not flush 3,4 yet"];
var inst_56735 = cljs.core.PersistentHashMap.fromArrays(inst_56732,inst_56734);
var inst_56736 = cljs.test.report.call(null,inst_56735);
var state_56853__$1 = state_56853;
var statearr_56949_57227 = state_56853__$1;
(statearr_56949_57227[(2)] = inst_56736);

(statearr_56949_57227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (16))){
var _ = (function (){var statearr_56950 = state_56853;
(statearr_56950[(4)] = cljs.core.rest((state_56853[(4)])));

return statearr_56950;
})();
var state_56853__$1 = state_56853;
var ex56947 = (state_56853__$1[(2)]);
var statearr_56951_57229 = state_56853__$1;
(statearr_56951_57229[(5)] = ex56947);


var statearr_56952_57230 = state_56853__$1;
(statearr_56952_57230[(1)] = (15));

(statearr_56952_57230[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (38))){
var inst_56818 = (state_56853[(17)]);
var inst_56846 = (state_56853[(2)]);
var _ = (function (){var statearr_56953 = state_56853;
(statearr_56953[(4)] = cljs.core.rest((state_56853[(4)])));

return statearr_56953;
})();
var state_56853__$1 = (function (){var statearr_56954 = state_56853;
(statearr_56954[(33)] = inst_56846);

return statearr_56954;
})();
var statearr_56955_57232 = state_56853__$1;
(statearr_56955_57232[(2)] = inst_56818);

(statearr_56955_57232[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (30))){
var inst_56765 = (state_56853[(12)]);
var inst_56788 = (state_56853[(2)]);
var _ = (function (){var statearr_56956 = state_56853;
(statearr_56956[(4)] = cljs.core.rest((state_56853[(4)])));

return statearr_56956;
})();
var state_56853__$1 = (function (){var statearr_56957 = state_56853;
(statearr_56957[(34)] = inst_56788);

return statearr_56957;
})();
var statearr_56958_57233 = state_56853__$1;
(statearr_56958_57233[(2)] = inst_56765);

(statearr_56958_57233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (10))){
var inst_56642 = (state_56853[(31)]);
var inst_56654 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56655 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56656 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56657 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56658 = cljs.core.cons(inst_56657,inst_56642);
var inst_56659 = (new cljs.core.List(null,inst_56658,null,(1),null));
var inst_56660 = (new cljs.core.List(null,inst_56656,inst_56659,(2),null));
var inst_56661 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56655,47,inst_56660,"Should not flush before timeout"];
var inst_56662 = cljs.core.PersistentHashMap.fromArrays(inst_56654,inst_56661);
var inst_56663 = cljs.test.report.call(null,inst_56662);
var state_56853__$1 = state_56853;
var statearr_56959_57235 = state_56853__$1;
(statearr_56959_57235[(2)] = inst_56663);

(statearr_56959_57235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (18))){
var inst_56695 = (state_56853[(19)]);
var inst_56706 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56707 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56708 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56709 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56710 = cljs.core.cons(inst_56709,inst_56695);
var inst_56711 = (new cljs.core.List(null,inst_56710,null,(1),null));
var inst_56712 = (new cljs.core.List(null,inst_56708,inst_56711,(2),null));
var inst_56713 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56707,50,inst_56712,"Should flush after timeout"];
var inst_56714 = cljs.core.PersistentHashMap.fromArrays(inst_56706,inst_56713);
var inst_56715 = cljs.test.report.call(null,inst_56714);
var state_56853__$1 = state_56853;
var statearr_56961_57236 = state_56853__$1;
(statearr_56961_57236[(2)] = inst_56715);

(statearr_56961_57236[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (37))){
var inst_56817 = (state_56853[(16)]);
var inst_56828 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56829 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56837 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56838 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56839 = cljs.core.cons(inst_56838,inst_56817);
var inst_56840 = (new cljs.core.List(null,inst_56839,null,(1),null));
var inst_56841 = (new cljs.core.List(null,inst_56837,inst_56840,(2),null));
var inst_56842 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56829,60,inst_56841,"Should flush 3,4 after timeout from first message"];
var inst_56843 = cljs.core.PersistentHashMap.fromArrays(inst_56828,inst_56842);
var inst_56844 = cljs.test.report.call(null,inst_56843);
var state_56853__$1 = state_56853;
var statearr_56962_57239 = state_56853__$1;
(statearr_56962_57239[(2)] = inst_56844);

(statearr_56962_57239[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56855 === (8))){
var _ = (function (){var statearr_56963 = state_56853;
(statearr_56963[(4)] = cljs.core.rest((state_56853[(4)])));

return statearr_56963;
})();
var state_56853__$1 = state_56853;
var ex56960 = (state_56853__$1[(2)]);
var statearr_56964_57240 = state_56853__$1;
(statearr_56964_57240[(5)] = ex56960);


var statearr_56965_57242 = state_56853__$1;
(statearr_56965_57242[(1)] = (7));

(statearr_56965_57242[(5)] = null);



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
var statearr_56966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56966[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56966[(1)] = (1));

return statearr_56966;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56853){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56853);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56967){var ex__32294__auto__ = e56967;
var statearr_56969_57243 = state_56853;
(statearr_56969_57243[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56853[(4)]))){
var statearr_56972_57244 = state_56853;
(statearr_56972_57244[(1)] = cljs.core.first((state_56853[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57246 = state_56853;
state_56853 = G__57246;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56853){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32349__auto__ = (function (){var statearr_56974 = f__32348__auto__();
(statearr_56974[(6)] = c__32347__auto__);

return statearr_56974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32349__auto__);
}));

return c__32347__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56595","meta56595",191479575,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56594");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56594");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56594.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56594 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56594(meta56595){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594(meta56595));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56594(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984 = (function (meta56985){
this.meta56985 = meta56985;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56986,meta56985__$1){
var self__ = this;
var _56986__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984(meta56985__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56986){
var self__ = this;
var _56986__$1 = this;
return self__.meta56985;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56994 = (arguments.length - (1));
switch (G__56994) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984.prototype.apply = (function (self__,args56987){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56987)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32348__auto__ = (function (){var switch__32290__auto__ = (function (state_57064){
var state_val_57065 = (state_57064[(1)]);
if((state_val_57065 === (7))){
var inst_57017 = (state_57064[(2)]);
var inst_57018 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57019 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57020 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_57019,78,inst_57017,"Closing input should flush remaining"];
var inst_57021 = cljs.core.PersistentHashMap.fromArrays(inst_57018,inst_57020);
var inst_57022 = cljs.test.report.call(null,inst_57021);
var state_57064__$1 = state_57064;
var statearr_57072_57260 = state_57064__$1;
(statearr_57072_57260[(2)] = inst_57022);

(statearr_57072_57260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57065 === (1))){
var inst_57000 = (state_57064[(7)]);
var inst_57002 = (state_57064[(8)]);
var inst_57000__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_57001 = cljs.core.PersistentVector.EMPTY;
var inst_57002__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_57001);
var inst_57003 = (function (){var input_ch = inst_57000__$1;
var results = inst_57002__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_57004 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_57005 = [inst_57000__$1,inst_57003];
var inst_57006 = cljs.core.PersistentHashMap.fromArrays(inst_57004,inst_57005);
var inst_57007 = bb_web_ds_tools.components.async_buffer.create(inst_57006);
var state_57064__$1 = (function (){var statearr_57073 = state_57064;
(statearr_57073[(7)] = inst_57000__$1);

(statearr_57073[(8)] = inst_57002__$1);

(statearr_57073[(9)] = inst_57007);

return statearr_57073;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57064__$1,(2),inst_57000__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_57065 === (4))){
var inst_57016 = (state_57064[(2)]);
var state_57064__$1 = (function (){var statearr_57080 = state_57064;
(statearr_57080[(10)] = inst_57016);

return statearr_57080;
})();
var statearr_57081_57267 = state_57064__$1;
(statearr_57081_57267[(2)] = null);

(statearr_57081_57267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57065 === (6))){
var inst_57061 = (state_57064[(2)]);
var inst_57062 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_57064__$1 = (function (){var statearr_57082 = state_57064;
(statearr_57082[(11)] = inst_57061);

return statearr_57082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57064__$1,inst_57062);
} else {
if((state_val_57065 === (3))){
var inst_57000 = (state_57064[(7)]);
var inst_57012 = (state_57064[(2)]);
var inst_57013 = cljs.core.async.close_BANG_(inst_57000);
var inst_57014 = cljs.core.async.timeout((20));
var state_57064__$1 = (function (){var statearr_57083 = state_57064;
(statearr_57083[(12)] = inst_57012);

(statearr_57083[(13)] = inst_57013);

return statearr_57083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57064__$1,(4),inst_57014);
} else {
if((state_val_57065 === (2))){
var inst_57000 = (state_57064[(7)]);
var inst_57010 = (state_57064[(2)]);
var state_57064__$1 = (function (){var statearr_57084 = state_57064;
(statearr_57084[(14)] = inst_57010);

return statearr_57084;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57064__$1,(3),inst_57000,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_57065 === (11))){
var inst_57037 = (state_57064[(15)]);
var inst_57058 = (state_57064[(2)]);
var _ = (function (){var statearr_57085 = state_57064;
(statearr_57085[(4)] = cljs.core.rest((state_57064[(4)])));

return statearr_57085;
})();
var state_57064__$1 = (function (){var statearr_57086 = state_57064;
(statearr_57086[(16)] = inst_57058);

return statearr_57086;
})();
var statearr_57087_57273 = state_57064__$1;
(statearr_57087_57273[(2)] = inst_57037);

(statearr_57087_57273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57065 === (9))){
var inst_57036 = (state_57064[(17)]);
var inst_57039 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57040 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57041 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57042 = cljs.core.cons(inst_57041,inst_57036);
var inst_57043 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_57040,78,inst_57042,"Closing input should flush remaining"];
var inst_57044 = cljs.core.PersistentHashMap.fromArrays(inst_57039,inst_57043);
var inst_57045 = cljs.test.report.call(null,inst_57044);
var state_57064__$1 = state_57064;
var statearr_57088_57274 = state_57064__$1;
(statearr_57088_57274[(2)] = inst_57045);

(statearr_57088_57274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57065 === (5))){
var inst_57002 = (state_57064[(8)]);
var inst_57036 = (state_57064[(17)]);
var inst_57037 = (state_57064[(15)]);
var _ = (function (){var statearr_57092 = state_57064;
(statearr_57092[(4)] = cljs.core.cons((8),(state_57064[(4)])));

return statearr_57092;
})();
var inst_57028 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57029 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57030 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_57031 = (new cljs.core.PersistentVector(null,2,(5),inst_57029,inst_57030,null));
var inst_57032 = [inst_57031];
var inst_57033 = (new cljs.core.PersistentVector(null,1,(5),inst_57028,inst_57032,null));
var inst_57034 = cljs.core.deref(inst_57002);
var inst_57035 = (new cljs.core.List(null,inst_57034,null,(1),null));
var inst_57036__$1 = (new cljs.core.List(null,inst_57033,inst_57035,(2),null));
var inst_57037__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_57036__$1);
var state_57064__$1 = (function (){var statearr_57097 = state_57064;
(statearr_57097[(17)] = inst_57036__$1);

(statearr_57097[(15)] = inst_57037__$1);

return statearr_57097;
})();
if(cljs.core.truth_(inst_57037__$1)){
var statearr_57098_57275 = state_57064__$1;
(statearr_57098_57275[(1)] = (9));

} else {
var statearr_57099_57276 = state_57064__$1;
(statearr_57099_57276[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57065 === (10))){
var inst_57036 = (state_57064[(17)]);
var inst_57047 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57048 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57049 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_57050 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57051 = cljs.core.cons(inst_57050,inst_57036);
var inst_57052 = (new cljs.core.List(null,inst_57051,null,(1),null));
var inst_57053 = (new cljs.core.List(null,inst_57049,inst_57052,(2),null));
var inst_57054 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_57048,78,inst_57053,"Closing input should flush remaining"];
var inst_57055 = cljs.core.PersistentHashMap.fromArrays(inst_57047,inst_57054);
var inst_57056 = cljs.test.report.call(null,inst_57055);
var state_57064__$1 = state_57064;
var statearr_57100_57289 = state_57064__$1;
(statearr_57100_57289[(2)] = inst_57056);

(statearr_57100_57289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57065 === (8))){
var _ = (function (){var statearr_57104 = state_57064;
(statearr_57104[(4)] = cljs.core.rest((state_57064[(4)])));

return statearr_57104;
})();
var state_57064__$1 = state_57064;
var ex57091 = (state_57064__$1[(2)]);
var statearr_57106_57290 = state_57064__$1;
(statearr_57106_57290[(5)] = ex57091);


var statearr_57107_57291 = state_57064__$1;
(statearr_57107_57291[(1)] = (7));

(statearr_57107_57291[(5)] = null);



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
var statearr_57109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57109[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57109[(1)] = (1));

return statearr_57109;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_57064){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_57064);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57110){var ex__32294__auto__ = e57110;
var statearr_57111_57296 = state_57064;
(statearr_57111_57296[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_57064[(4)]))){
var statearr_57113_57297 = state_57064;
(statearr_57113_57297[(1)] = cljs.core.first((state_57064[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57298 = state_57064;
state_57064 = G__57298;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_57064){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_57064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32349__auto__ = (function (){var statearr_57117 = f__32348__auto__();
(statearr_57117[(6)] = c__32347__auto__);

return statearr_57117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32349__auto__);
}));

return c__32347__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56985","meta56985",2057088221,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56984");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56984");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56984.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56984 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56984(meta56985){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984(meta56985));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56984(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
