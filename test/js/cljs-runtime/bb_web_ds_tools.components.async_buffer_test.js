goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335 = (function (meta63336){
this.meta63336 = meta63336;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63337,meta63336__$1){
var self__ = this;
var _63337__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335(meta63336__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63337){
var self__ = this;
var _63337__$1 = this;
return self__.meta63336;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63341 = (arguments.length - (1));
switch (G__63341) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335.prototype.apply = (function (self__,args63338){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63338)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_63519){
var state_val_63520 = (state_63519[(1)]);
if((state_val_63520 === (7))){
var inst_63367 = (state_63519[(2)]);
var inst_63368 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63369 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63370 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,19,inst_63369,19,inst_63367,"Buffer should not flush automatically without timer"];
var inst_63371 = cljs.core.PersistentHashMap.fromArrays(inst_63368,inst_63370);
var inst_63372 = cljs.test.report.call(null,inst_63371);
var state_63519__$1 = state_63519;
var statearr_63521_64072 = state_63519__$1;
(statearr_63521_64072[(2)] = inst_63372);

(statearr_63521_64072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (20))){
var inst_63354 = (state_63519[(7)]);
var inst_63464 = (state_63519[(2)]);
var inst_63465 = (inst_63354.cljs$core$IFn$_invoke$arity$0 ? inst_63354.cljs$core$IFn$_invoke$arity$0() : inst_63354.call(null));
var inst_63466 = cljs.core.async.timeout((20));
var state_63519__$1 = (function (){var statearr_63522 = state_63519;
(statearr_63522[(8)] = inst_63464);

(statearr_63522[(9)] = inst_63465);

return statearr_63522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63519__$1,(21),inst_63466);
} else {
if((state_val_63520 === (27))){
var inst_63491 = (state_63519[(10)]);
var inst_63502 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63503 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63504 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63505 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63506 = cljs.core.cons(inst_63505,inst_63491);
var inst_63507 = (new cljs.core.List(null,inst_63506,null,(1),null));
var inst_63508 = (new cljs.core.List(null,inst_63504,inst_63507,(2),null));
var inst_63509 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,inst_63503,29,inst_63508,"Subsequent flush should work"];
var inst_63510 = cljs.core.PersistentHashMap.fromArrays(inst_63502,inst_63509);
var inst_63511 = cljs.test.report.call(null,inst_63510);
var state_63519__$1 = state_63519;
var statearr_63523_64074 = state_63519__$1;
(statearr_63523_64074[(2)] = inst_63511);

(statearr_63523_64074[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (1))){
var inst_63343 = (state_63519[(11)]);
var inst_63345 = (state_63519[(12)]);
var inst_63343__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63344 = cljs.core.PersistentVector.EMPTY;
var inst_63345__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63344);
var inst_63347 = (function (){var input_ch = inst_63343__$1;
var results = inst_63345__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63351 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63352 = [inst_63343__$1,inst_63347];
var inst_63353 = cljs.core.PersistentHashMap.fromArrays(inst_63351,inst_63352);
var inst_63354 = bb_web_ds_tools.components.async_buffer.create(inst_63353);
var state_63519__$1 = (function (){var statearr_63524 = state_63519;
(statearr_63524[(11)] = inst_63343__$1);

(statearr_63524[(12)] = inst_63345__$1);

(statearr_63524[(7)] = inst_63354);

return statearr_63524;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63519__$1,(2),inst_63343__$1,(1));
} else {
if((state_val_63520 === (24))){
var inst_63469 = (state_63519[(2)]);
var inst_63470 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63471 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63472 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"error","error",-978969032),18,29,inst_63471,29,inst_63469,"Subsequent flush should work"];
var inst_63473 = cljs.core.PersistentHashMap.fromArrays(inst_63470,inst_63472);
var inst_63474 = cljs.test.report.call(null,inst_63473);
var state_63519__$1 = state_63519;
var statearr_63525_64075 = state_63519__$1;
(statearr_63525_64075[(2)] = inst_63474);

(statearr_63525_64075[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (4))){
var inst_63361 = (state_63519[(2)]);
var state_63519__$1 = (function (){var statearr_63526 = state_63519;
(statearr_63526[(13)] = inst_63361);

return statearr_63526;
})();
var statearr_63527_64076 = state_63519__$1;
(statearr_63527_64076[(2)] = null);

(statearr_63527_64076[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (15))){
var inst_63413 = (state_63519[(2)]);
var inst_63414 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63415 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63416 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,24,inst_63415,24,inst_63413,"Manual flush should flush all items"];
var inst_63417 = cljs.core.PersistentHashMap.fromArrays(inst_63414,inst_63416);
var inst_63418 = cljs.test.report.call(null,inst_63417);
var state_63519__$1 = state_63519;
var statearr_63528_64077 = state_63519__$1;
(statearr_63528_64077[(2)] = inst_63418);

(statearr_63528_64077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (21))){
var inst_63468 = (state_63519[(2)]);
var state_63519__$1 = (function (){var statearr_63529 = state_63519;
(statearr_63529[(14)] = inst_63468);

return statearr_63529;
})();
var statearr_63530_64078 = state_63519__$1;
(statearr_63530_64078[(2)] = null);

(statearr_63530_64078[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (13))){
var inst_63345 = (state_63519[(12)]);
var inst_63432 = (state_63519[(15)]);
var inst_63433 = (state_63519[(16)]);
var _ = (function (){var statearr_63531 = state_63519;
(statearr_63531[(4)] = cljs.core.cons((16),(state_63519[(4)])));

return statearr_63531;
})();
var inst_63424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63426 = [(1),(2)];
var inst_63427 = (new cljs.core.PersistentVector(null,2,(5),inst_63425,inst_63426,null));
var inst_63428 = [inst_63427];
var inst_63429 = (new cljs.core.PersistentVector(null,1,(5),inst_63424,inst_63428,null));
var inst_63430 = cljs.core.deref(inst_63345);
var inst_63431 = (new cljs.core.List(null,inst_63430,null,(1),null));
var inst_63432__$1 = (new cljs.core.List(null,inst_63429,inst_63431,(2),null));
var inst_63433__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63432__$1);
var state_63519__$1 = (function (){var statearr_63532 = state_63519;
(statearr_63532[(15)] = inst_63432__$1);

(statearr_63532[(16)] = inst_63433__$1);

return statearr_63532;
})();
if(cljs.core.truth_(inst_63433__$1)){
var statearr_63533_64081 = state_63519__$1;
(statearr_63533_64081[(1)] = (17));

} else {
var statearr_63534_64082 = state_63519__$1;
(statearr_63534_64082[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (22))){
var inst_63345 = (state_63519[(12)]);
var inst_63491 = (state_63519[(10)]);
var inst_63492 = (state_63519[(17)]);
var _ = (function (){var statearr_63535 = state_63519;
(statearr_63535[(4)] = cljs.core.cons((25),(state_63519[(4)])));

return statearr_63535;
})();
var inst_63480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63482 = [(1),(2)];
var inst_63483 = (new cljs.core.PersistentVector(null,2,(5),inst_63481,inst_63482,null));
var inst_63484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63485 = [(3)];
var inst_63486 = (new cljs.core.PersistentVector(null,1,(5),inst_63484,inst_63485,null));
var inst_63487 = [inst_63483,inst_63486];
var inst_63488 = (new cljs.core.PersistentVector(null,2,(5),inst_63480,inst_63487,null));
var inst_63489 = cljs.core.deref(inst_63345);
var inst_63490 = (new cljs.core.List(null,inst_63489,null,(1),null));
var inst_63491__$1 = (new cljs.core.List(null,inst_63488,inst_63490,(2),null));
var inst_63492__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63491__$1);
var state_63519__$1 = (function (){var statearr_63537 = state_63519;
(statearr_63537[(10)] = inst_63491__$1);

(statearr_63537[(17)] = inst_63492__$1);

return statearr_63537;
})();
if(cljs.core.truth_(inst_63492__$1)){
var statearr_63538_64083 = state_63519__$1;
(statearr_63538_64083[(1)] = (26));

} else {
var statearr_63539_64084 = state_63519__$1;
(statearr_63539_64084[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (6))){
var inst_63354 = (state_63519[(7)]);
var inst_63408 = (state_63519[(2)]);
var inst_63409 = (inst_63354.cljs$core$IFn$_invoke$arity$0 ? inst_63354.cljs$core$IFn$_invoke$arity$0() : inst_63354.call(null));
var inst_63410 = cljs.core.async.timeout((20));
var state_63519__$1 = (function (){var statearr_63545 = state_63519;
(statearr_63545[(18)] = inst_63408);

(statearr_63545[(19)] = inst_63409);

return statearr_63545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63519__$1,(12),inst_63410);
} else {
if((state_val_63520 === (28))){
var inst_63492 = (state_63519[(17)]);
var inst_63513 = (state_63519[(2)]);
var _ = (function (){var statearr_63547 = state_63519;
(statearr_63547[(4)] = cljs.core.rest((state_63519[(4)])));

return statearr_63547;
})();
var state_63519__$1 = (function (){var statearr_63548 = state_63519;
(statearr_63548[(20)] = inst_63513);

return statearr_63548;
})();
var statearr_63549_64085 = state_63519__$1;
(statearr_63549_64085[(2)] = inst_63492);

(statearr_63549_64085[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (25))){
var _ = (function (){var statearr_63550 = state_63519;
(statearr_63550[(4)] = cljs.core.rest((state_63519[(4)])));

return statearr_63550;
})();
var state_63519__$1 = state_63519;
var ex63540 = (state_63519__$1[(2)]);
var statearr_63551_64086 = state_63519__$1;
(statearr_63551_64086[(5)] = ex63540);


var statearr_63552_64089 = state_63519__$1;
(statearr_63552_64089[(1)] = (24));

(statearr_63552_64089[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (17))){
var inst_63432 = (state_63519[(15)]);
var inst_63435 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63436 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63437 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63438 = cljs.core.cons(inst_63437,inst_63432);
var inst_63439 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,24,inst_63436,24,inst_63438,"Manual flush should flush all items"];
var inst_63440 = cljs.core.PersistentHashMap.fromArrays(inst_63435,inst_63439);
var inst_63441 = cljs.test.report.call(null,inst_63440);
var state_63519__$1 = state_63519;
var statearr_63553_64091 = state_63519__$1;
(statearr_63553_64091[(2)] = inst_63441);

(statearr_63553_64091[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (3))){
var inst_63358 = (state_63519[(2)]);
var inst_63359 = cljs.core.async.timeout((20));
var state_63519__$1 = (function (){var statearr_63554 = state_63519;
(statearr_63554[(21)] = inst_63358);

return statearr_63554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63519__$1,(4),inst_63359);
} else {
if((state_val_63520 === (12))){
var inst_63412 = (state_63519[(2)]);
var state_63519__$1 = (function (){var statearr_63555 = state_63519;
(statearr_63555[(22)] = inst_63412);

return statearr_63555;
})();
var statearr_63556_64094 = state_63519__$1;
(statearr_63556_64094[(2)] = null);

(statearr_63556_64094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (2))){
var inst_63343 = (state_63519[(11)]);
var inst_63356 = (state_63519[(2)]);
var state_63519__$1 = (function (){var statearr_63557 = state_63519;
(statearr_63557[(23)] = inst_63356);

return statearr_63557;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63519__$1,(3),inst_63343,(2));
} else {
if((state_val_63520 === (23))){
var inst_63516 = (state_63519[(2)]);
var inst_63517 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_63519__$1 = (function (){var statearr_63558 = state_63519;
(statearr_63558[(24)] = inst_63516);

return statearr_63558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63519__$1,inst_63517);
} else {
if((state_val_63520 === (19))){
var inst_63433 = (state_63519[(16)]);
var inst_63459 = (state_63519[(2)]);
var _ = (function (){var statearr_63559 = state_63519;
(statearr_63559[(4)] = cljs.core.rest((state_63519[(4)])));

return statearr_63559;
})();
var state_63519__$1 = (function (){var statearr_63560 = state_63519;
(statearr_63560[(25)] = inst_63459);

return statearr_63560;
})();
var statearr_63561_64096 = state_63519__$1;
(statearr_63561_64096[(2)] = inst_63433);

(statearr_63561_64096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (11))){
var inst_63380 = (state_63519[(26)]);
var inst_63405 = (state_63519[(2)]);
var _ = (function (){var statearr_63562 = state_63519;
(statearr_63562[(4)] = cljs.core.rest((state_63519[(4)])));

return statearr_63562;
})();
var state_63519__$1 = (function (){var statearr_63563 = state_63519;
(statearr_63563[(27)] = inst_63405);

return statearr_63563;
})();
var statearr_63564_64097 = state_63519__$1;
(statearr_63564_64097[(2)] = inst_63380);

(statearr_63564_64097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (9))){
var inst_63379 = (state_63519[(28)]);
var inst_63386 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63387 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63388 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63389 = cljs.core.cons(inst_63388,inst_63379);
var inst_63390 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,19,inst_63387,19,inst_63389,"Buffer should not flush automatically without timer"];
var inst_63391 = cljs.core.PersistentHashMap.fromArrays(inst_63386,inst_63390);
var inst_63392 = cljs.test.report.call(null,inst_63391);
var state_63519__$1 = state_63519;
var statearr_63566_64098 = state_63519__$1;
(statearr_63566_64098[(2)] = inst_63392);

(statearr_63566_64098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (5))){
var inst_63345 = (state_63519[(12)]);
var inst_63379 = (state_63519[(28)]);
var inst_63380 = (state_63519[(26)]);
var _ = (function (){var statearr_63567 = state_63519;
(statearr_63567[(4)] = cljs.core.cons((8),(state_63519[(4)])));

return statearr_63567;
})();
var inst_63378 = cljs.core.deref(inst_63345);
var inst_63379__$1 = (new cljs.core.List(null,inst_63378,null,(1),null));
var inst_63380__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_63379__$1);
var state_63519__$1 = (function (){var statearr_63568 = state_63519;
(statearr_63568[(28)] = inst_63379__$1);

(statearr_63568[(26)] = inst_63380__$1);

return statearr_63568;
})();
if(cljs.core.truth_(inst_63380__$1)){
var statearr_63569_64099 = state_63519__$1;
(statearr_63569_64099[(1)] = (9));

} else {
var statearr_63570_64100 = state_63519__$1;
(statearr_63570_64100[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (14))){
var inst_63343 = (state_63519[(11)]);
var inst_63462 = (state_63519[(2)]);
var state_63519__$1 = (function (){var statearr_63572 = state_63519;
(statearr_63572[(29)] = inst_63462);

return statearr_63572;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63519__$1,(20),inst_63343,(3));
} else {
if((state_val_63520 === (26))){
var inst_63491 = (state_63519[(10)]);
var inst_63494 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63495 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63496 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63497 = cljs.core.cons(inst_63496,inst_63491);
var inst_63498 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,inst_63495,29,inst_63497,"Subsequent flush should work"];
var inst_63499 = cljs.core.PersistentHashMap.fromArrays(inst_63494,inst_63498);
var inst_63500 = cljs.test.report.call(null,inst_63499);
var state_63519__$1 = state_63519;
var statearr_63573_64101 = state_63519__$1;
(statearr_63573_64101[(2)] = inst_63500);

(statearr_63573_64101[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (16))){
var _ = (function (){var statearr_63574 = state_63519;
(statearr_63574[(4)] = cljs.core.rest((state_63519[(4)])));

return statearr_63574;
})();
var state_63519__$1 = state_63519;
var ex63571 = (state_63519__$1[(2)]);
var statearr_63575_64102 = state_63519__$1;
(statearr_63575_64102[(5)] = ex63571);


var statearr_63576_64103 = state_63519__$1;
(statearr_63576_64103[(1)] = (15));

(statearr_63576_64103[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (10))){
var inst_63379 = (state_63519[(28)]);
var inst_63394 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63395 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63396 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63397 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63398 = cljs.core.cons(inst_63397,inst_63379);
var inst_63399 = (new cljs.core.List(null,inst_63398,null,(1),null));
var inst_63400 = (new cljs.core.List(null,inst_63396,inst_63399,(2),null));
var inst_63401 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,19,inst_63395,19,inst_63400,"Buffer should not flush automatically without timer"];
var inst_63402 = cljs.core.PersistentHashMap.fromArrays(inst_63394,inst_63401);
var inst_63403 = cljs.test.report.call(null,inst_63402);
var state_63519__$1 = state_63519;
var statearr_63578_64104 = state_63519__$1;
(statearr_63578_64104[(2)] = inst_63403);

(statearr_63578_64104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (18))){
var inst_63432 = (state_63519[(15)]);
var inst_63448 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63449 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63450 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63451 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63452 = cljs.core.cons(inst_63451,inst_63432);
var inst_63453 = (new cljs.core.List(null,inst_63452,null,(1),null));
var inst_63454 = (new cljs.core.List(null,inst_63450,inst_63453,(2),null));
var inst_63455 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,24,inst_63449,24,inst_63454,"Manual flush should flush all items"];
var inst_63456 = cljs.core.PersistentHashMap.fromArrays(inst_63448,inst_63455);
var inst_63457 = cljs.test.report.call(null,inst_63456);
var state_63519__$1 = state_63519;
var statearr_63579_64105 = state_63519__$1;
(statearr_63579_64105[(2)] = inst_63457);

(statearr_63579_64105[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (8))){
var _ = (function (){var statearr_63581 = state_63519;
(statearr_63581[(4)] = cljs.core.rest((state_63519[(4)])));

return statearr_63581;
})();
var state_63519__$1 = state_63519;
var ex63577 = (state_63519__$1[(2)]);
var statearr_63582_64106 = state_63519__$1;
(statearr_63582_64106[(5)] = ex63577);


var statearr_63583_64107 = state_63519__$1;
(statearr_63583_64107[(1)] = (7));

(statearr_63583_64107[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0 = (function (){
var statearr_63584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63584[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__);

(statearr_63584[(1)] = (1));

return statearr_63584;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1 = (function (state_63519){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_63519);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e63585){var ex__32399__auto__ = e63585;
var statearr_63586_64108 = state_63519;
(statearr_63586_64108[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_63519[(4)]))){
var statearr_63587_64109 = state_63519;
(statearr_63587_64109[(1)] = cljs.core.first((state_63519[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64110 = state_63519;
state_63519 = G__64110;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = function(state_63519){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1.call(this,state_63519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_63589 = f__32467__auto__();
(statearr_63589[(6)] = c__32466__auto__);

return statearr_63589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63336","meta63336",-1459203027,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63335");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63335");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63335.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63335 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63335(meta63336){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335(meta63336));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63335(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591 = (function (meta63592){
this.meta63592 = meta63592;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63593,meta63592__$1){
var self__ = this;
var _63593__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591(meta63592__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63593){
var self__ = this;
var _63593__$1 = this;
return self__.meta63592;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63596 = (arguments.length - (1));
switch (G__63596) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591.prototype.apply = (function (self__,args63594){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63594)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_63826){
var state_val_63827 = (state_63826[(1)]);
if((state_val_63827 === (7))){
var inst_63620 = (state_63826[(2)]);
var inst_63622 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63623 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63624 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,47,inst_63623,47,inst_63620,"Should not flush before timeout"];
var inst_63625 = cljs.core.PersistentHashMap.fromArrays(inst_63622,inst_63624);
var inst_63626 = cljs.test.report.call(null,inst_63625);
var state_63826__$1 = state_63826;
var statearr_63829_64112 = state_63826__$1;
(statearr_63829_64112[(2)] = inst_63626);

(statearr_63829_64112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (20))){
var inst_63708 = (state_63826[(2)]);
var inst_63709 = cljs.core.async.timeout((50));
var state_63826__$1 = (function (){var statearr_63830 = state_63826;
(statearr_63830[(7)] = inst_63708);

return statearr_63830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63826__$1,(21),inst_63709);
} else {
if((state_val_63827 === (27))){
var _ = (function (){var statearr_63831 = state_63826;
(statearr_63831[(4)] = cljs.core.rest((state_63826[(4)])));

return statearr_63831;
})();
var state_63826__$1 = state_63826;
var ex63828 = (state_63826__$1[(2)]);
var statearr_63833_64113 = state_63826__$1;
(statearr_63833_64113[(5)] = ex63828);


var statearr_63834_64114 = state_63826__$1;
(statearr_63834_64114[(1)] = (26));

(statearr_63834_64114[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (1))){
var inst_63598 = (state_63826[(8)]);
var inst_63601 = (state_63826[(9)]);
var inst_63598__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63599 = cljs.core.PersistentVector.EMPTY;
var inst_63601__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63599);
var inst_63602 = (function (){var input_ch = inst_63598__$1;
var results = inst_63601__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63603 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63604 = [inst_63598__$1,(100),inst_63602];
var inst_63605 = cljs.core.PersistentHashMap.fromArrays(inst_63603,inst_63604);
var inst_63606 = bb_web_ds_tools.components.async_buffer.create(inst_63605);
var state_63826__$1 = (function (){var statearr_63835 = state_63826;
(statearr_63835[(8)] = inst_63598__$1);

(statearr_63835[(9)] = inst_63601__$1);

(statearr_63835[(10)] = inst_63606);

return statearr_63835;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63826__$1,(2),inst_63598__$1,(1));
} else {
if((state_val_63827 === (24))){
var inst_63601 = (state_63826[(9)]);
var inst_63737 = (state_63826[(11)]);
var inst_63738 = (state_63826[(12)]);
var _ = (function (){var statearr_63836 = state_63826;
(statearr_63836[(4)] = cljs.core.cons((27),(state_63826[(4)])));

return statearr_63836;
})();
var inst_63729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63731 = [(1),(2)];
var inst_63732 = (new cljs.core.PersistentVector(null,2,(5),inst_63730,inst_63731,null));
var inst_63733 = [inst_63732];
var inst_63734 = (new cljs.core.PersistentVector(null,1,(5),inst_63729,inst_63733,null));
var inst_63735 = cljs.core.deref(inst_63601);
var inst_63736 = (new cljs.core.List(null,inst_63735,null,(1),null));
var inst_63737__$1 = (new cljs.core.List(null,inst_63734,inst_63736,(2),null));
var inst_63738__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63737__$1);
var state_63826__$1 = (function (){var statearr_63837 = state_63826;
(statearr_63837[(11)] = inst_63737__$1);

(statearr_63837[(12)] = inst_63738__$1);

return statearr_63837;
})();
if(cljs.core.truth_(inst_63738__$1)){
var statearr_63838_64115 = state_63826__$1;
(statearr_63838_64115[(1)] = (28));

} else {
var statearr_63839_64116 = state_63826__$1;
(statearr_63839_64116[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (4))){
var inst_63619 = (state_63826[(2)]);
var state_63826__$1 = (function (){var statearr_63840 = state_63826;
(statearr_63840[(13)] = inst_63619);

return statearr_63840;
})();
var statearr_63841_64117 = state_63826__$1;
(statearr_63841_64117[(2)] = null);

(statearr_63841_64117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (15))){
var inst_63662 = (state_63826[(2)]);
var inst_63663 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63664 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63665 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,50,inst_63664,50,inst_63662,"Should flush after timeout"];
var inst_63666 = cljs.core.PersistentHashMap.fromArrays(inst_63663,inst_63665);
var inst_63667 = cljs.test.report.call(null,inst_63666);
var state_63826__$1 = state_63826;
var statearr_63842_64118 = state_63826__$1;
(statearr_63842_64118[(2)] = inst_63667);

(statearr_63842_64118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (21))){
var inst_63598 = (state_63826[(8)]);
var inst_63711 = (state_63826[(2)]);
var state_63826__$1 = (function (){var statearr_63843 = state_63826;
(statearr_63843[(14)] = inst_63711);

return statearr_63843;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63826__$1,(22),inst_63598,(4));
} else {
if((state_val_63827 === (31))){
var inst_63767 = (state_63826[(2)]);
var state_63826__$1 = (function (){var statearr_63844 = state_63826;
(statearr_63844[(15)] = inst_63767);

return statearr_63844;
})();
var statearr_63845_64119 = state_63826__$1;
(statearr_63845_64119[(2)] = null);

(statearr_63845_64119[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (32))){
var inst_63601 = (state_63826[(9)]);
var inst_63795 = (state_63826[(16)]);
var inst_63796 = (state_63826[(17)]);
var _ = (function (){var statearr_63846 = state_63826;
(statearr_63846[(4)] = cljs.core.cons((35),(state_63826[(4)])));

return statearr_63846;
})();
var inst_63783 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63785 = [(1),(2)];
var inst_63786 = (new cljs.core.PersistentVector(null,2,(5),inst_63784,inst_63785,null));
var inst_63788 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63789 = [(3),(4)];
var inst_63790 = (new cljs.core.PersistentVector(null,2,(5),inst_63788,inst_63789,null));
var inst_63791 = [inst_63786,inst_63790];
var inst_63792 = (new cljs.core.PersistentVector(null,2,(5),inst_63783,inst_63791,null));
var inst_63793 = cljs.core.deref(inst_63601);
var inst_63794 = (new cljs.core.List(null,inst_63793,null,(1),null));
var inst_63795__$1 = (new cljs.core.List(null,inst_63792,inst_63794,(2),null));
var inst_63796__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63795__$1);
var state_63826__$1 = (function (){var statearr_63847 = state_63826;
(statearr_63847[(16)] = inst_63795__$1);

(statearr_63847[(17)] = inst_63796__$1);

return statearr_63847;
})();
if(cljs.core.truth_(inst_63796__$1)){
var statearr_63848_64120 = state_63826__$1;
(statearr_63848_64120[(1)] = (36));

} else {
var statearr_63849_64121 = state_63826__$1;
(statearr_63849_64121[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (33))){
var inst_63823 = (state_63826[(2)]);
var inst_63824 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_63826__$1 = (function (){var statearr_63852 = state_63826;
(statearr_63852[(18)] = inst_63823);

return statearr_63852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63826__$1,inst_63824);
} else {
if((state_val_63827 === (13))){
var inst_63601 = (state_63826[(9)]);
var inst_63681 = (state_63826[(19)]);
var inst_63682 = (state_63826[(20)]);
var _ = (function (){var statearr_63854 = state_63826;
(statearr_63854[(4)] = cljs.core.cons((16),(state_63826[(4)])));

return statearr_63854;
})();
var inst_63673 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63674 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63675 = [(1),(2)];
var inst_63676 = (new cljs.core.PersistentVector(null,2,(5),inst_63674,inst_63675,null));
var inst_63677 = [inst_63676];
var inst_63678 = (new cljs.core.PersistentVector(null,1,(5),inst_63673,inst_63677,null));
var inst_63679 = cljs.core.deref(inst_63601);
var inst_63680 = (new cljs.core.List(null,inst_63679,null,(1),null));
var inst_63681__$1 = (new cljs.core.List(null,inst_63678,inst_63680,(2),null));
var inst_63682__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63681__$1);
var state_63826__$1 = (function (){var statearr_63857 = state_63826;
(statearr_63857[(19)] = inst_63681__$1);

(statearr_63857[(20)] = inst_63682__$1);

return statearr_63857;
})();
if(cljs.core.truth_(inst_63682__$1)){
var statearr_63858_64122 = state_63826__$1;
(statearr_63858_64122[(1)] = (17));

} else {
var statearr_63859_64123 = state_63826__$1;
(statearr_63859_64123[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (22))){
var inst_63713 = (state_63826[(2)]);
var inst_63714 = cljs.core.async.timeout((20));
var state_63826__$1 = (function (){var statearr_63860 = state_63826;
(statearr_63860[(21)] = inst_63713);

return statearr_63860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63826__$1,(23),inst_63714);
} else {
if((state_val_63827 === (36))){
var inst_63795 = (state_63826[(16)]);
var inst_63800 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63801 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63802 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63803 = cljs.core.cons(inst_63802,inst_63795);
var inst_63804 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),18,60,inst_63801,60,inst_63803,"Should flush 3,4 after timeout from first message"];
var inst_63805 = cljs.core.PersistentHashMap.fromArrays(inst_63800,inst_63804);
var inst_63806 = cljs.test.report.call(null,inst_63805);
var state_63826__$1 = state_63826;
var statearr_63861_64124 = state_63826__$1;
(statearr_63861_64124[(2)] = inst_63806);

(statearr_63861_64124[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (29))){
var inst_63737 = (state_63826[(11)]);
var inst_63750 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63751 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63752 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63753 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63754 = cljs.core.cons(inst_63753,inst_63737);
var inst_63755 = (new cljs.core.List(null,inst_63754,null,(1),null));
var inst_63756 = (new cljs.core.List(null,inst_63752,inst_63755,(2),null));
var inst_63757 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,57,inst_63751,57,inst_63756,"Should not flush 3,4 yet"];
var inst_63758 = cljs.core.PersistentHashMap.fromArrays(inst_63750,inst_63757);
var inst_63759 = cljs.test.report.call(null,inst_63758);
var state_63826__$1 = state_63826;
var statearr_63862_64125 = state_63826__$1;
(statearr_63862_64125[(2)] = inst_63759);

(statearr_63862_64125[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (6))){
var inst_63658 = (state_63826[(2)]);
var inst_63659 = cljs.core.async.timeout((100));
var state_63826__$1 = (function (){var statearr_63863 = state_63826;
(statearr_63863[(22)] = inst_63658);

return statearr_63863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63826__$1,(12),inst_63659);
} else {
if((state_val_63827 === (28))){
var inst_63737 = (state_63826[(11)]);
var inst_63740 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63741 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63742 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63743 = cljs.core.cons(inst_63742,inst_63737);
var inst_63744 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,57,inst_63741,57,inst_63743,"Should not flush 3,4 yet"];
var inst_63745 = cljs.core.PersistentHashMap.fromArrays(inst_63740,inst_63744);
var inst_63746 = cljs.test.report.call(null,inst_63745);
var state_63826__$1 = state_63826;
var statearr_63865_64126 = state_63826__$1;
(statearr_63865_64126[(2)] = inst_63746);

(statearr_63865_64126[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (25))){
var inst_63764 = (state_63826[(2)]);
var inst_63765 = cljs.core.async.timeout((80));
var state_63826__$1 = (function (){var statearr_63870 = state_63826;
(statearr_63870[(23)] = inst_63764);

return statearr_63870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63826__$1,(31),inst_63765);
} else {
if((state_val_63827 === (34))){
var inst_63769 = (state_63826[(2)]);
var inst_63773 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63774 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63775 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),18,60,inst_63774,60,inst_63769,"Should flush 3,4 after timeout from first message"];
var inst_63776 = cljs.core.PersistentHashMap.fromArrays(inst_63773,inst_63775);
var inst_63777 = cljs.test.report.call(null,inst_63776);
var state_63826__$1 = state_63826;
var statearr_63877_64127 = state_63826__$1;
(statearr_63877_64127[(2)] = inst_63777);

(statearr_63877_64127[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (17))){
var inst_63681 = (state_63826[(19)]);
var inst_63684 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63685 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63686 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63687 = cljs.core.cons(inst_63686,inst_63681);
var inst_63688 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,50,inst_63685,50,inst_63687,"Should flush after timeout"];
var inst_63689 = cljs.core.PersistentHashMap.fromArrays(inst_63684,inst_63688);
var inst_63690 = cljs.test.report.call(null,inst_63689);
var state_63826__$1 = state_63826;
var statearr_63883_64128 = state_63826__$1;
(statearr_63883_64128[(2)] = inst_63690);

(statearr_63883_64128[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (3))){
var inst_63616 = (state_63826[(2)]);
var inst_63617 = cljs.core.async.timeout((50));
var state_63826__$1 = (function (){var statearr_63884 = state_63826;
(statearr_63884[(24)] = inst_63616);

return statearr_63884;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63826__$1,(4),inst_63617);
} else {
if((state_val_63827 === (12))){
var inst_63661 = (state_63826[(2)]);
var state_63826__$1 = (function (){var statearr_63887 = state_63826;
(statearr_63887[(25)] = inst_63661);

return statearr_63887;
})();
var statearr_63888_64129 = state_63826__$1;
(statearr_63888_64129[(2)] = null);

(statearr_63888_64129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (2))){
var inst_63598 = (state_63826[(8)]);
var inst_63609 = (state_63826[(2)]);
var state_63826__$1 = (function (){var statearr_63890 = state_63826;
(statearr_63890[(26)] = inst_63609);

return statearr_63890;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63826__$1,(3),inst_63598,(2));
} else {
if((state_val_63827 === (23))){
var inst_63716 = (state_63826[(2)]);
var state_63826__$1 = (function (){var statearr_63891 = state_63826;
(statearr_63891[(27)] = inst_63716);

return statearr_63891;
})();
var statearr_63892_64130 = state_63826__$1;
(statearr_63892_64130[(2)] = null);

(statearr_63892_64130[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (35))){
var _ = (function (){var statearr_63894 = state_63826;
(statearr_63894[(4)] = cljs.core.rest((state_63826[(4)])));

return statearr_63894;
})();
var state_63826__$1 = state_63826;
var ex63889 = (state_63826__$1[(2)]);
var statearr_63895_64131 = state_63826__$1;
(statearr_63895_64131[(5)] = ex63889);


var statearr_63896_64132 = state_63826__$1;
(statearr_63896_64132[(1)] = (34));

(statearr_63896_64132[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (19))){
var inst_63682 = (state_63826[(20)]);
var inst_63703 = (state_63826[(2)]);
var _ = (function (){var statearr_63897 = state_63826;
(statearr_63897[(4)] = cljs.core.rest((state_63826[(4)])));

return statearr_63897;
})();
var state_63826__$1 = (function (){var statearr_63898 = state_63826;
(statearr_63898[(28)] = inst_63703);

return statearr_63898;
})();
var statearr_63900_64133 = state_63826__$1;
(statearr_63900_64133[(2)] = inst_63682);

(statearr_63900_64133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (11))){
var inst_63634 = (state_63826[(29)]);
var inst_63655 = (state_63826[(2)]);
var _ = (function (){var statearr_63901 = state_63826;
(statearr_63901[(4)] = cljs.core.rest((state_63826[(4)])));

return statearr_63901;
})();
var state_63826__$1 = (function (){var statearr_63902 = state_63826;
(statearr_63902[(30)] = inst_63655);

return statearr_63902;
})();
var statearr_63903_64134 = state_63826__$1;
(statearr_63903_64134[(2)] = inst_63634);

(statearr_63903_64134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (9))){
var inst_63633 = (state_63826[(31)]);
var inst_63636 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63637 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63638 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63639 = cljs.core.cons(inst_63638,inst_63633);
var inst_63640 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,47,inst_63637,47,inst_63639,"Should not flush before timeout"];
var inst_63641 = cljs.core.PersistentHashMap.fromArrays(inst_63636,inst_63640);
var inst_63642 = cljs.test.report.call(null,inst_63641);
var state_63826__$1 = state_63826;
var statearr_63906_64135 = state_63826__$1;
(statearr_63906_64135[(2)] = inst_63642);

(statearr_63906_64135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (5))){
var inst_63601 = (state_63826[(9)]);
var inst_63633 = (state_63826[(31)]);
var inst_63634 = (state_63826[(29)]);
var _ = (function (){var statearr_63909 = state_63826;
(statearr_63909[(4)] = cljs.core.cons((8),(state_63826[(4)])));

return statearr_63909;
})();
var inst_63632 = cljs.core.deref(inst_63601);
var inst_63633__$1 = (new cljs.core.List(null,inst_63632,null,(1),null));
var inst_63634__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_63633__$1);
var state_63826__$1 = (function (){var statearr_63911 = state_63826;
(statearr_63911[(31)] = inst_63633__$1);

(statearr_63911[(29)] = inst_63634__$1);

return statearr_63911;
})();
if(cljs.core.truth_(inst_63634__$1)){
var statearr_63912_64136 = state_63826__$1;
(statearr_63912_64136[(1)] = (9));

} else {
var statearr_63917_64137 = state_63826__$1;
(statearr_63917_64137[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (14))){
var inst_63598 = (state_63826[(8)]);
var inst_63706 = (state_63826[(2)]);
var state_63826__$1 = (function (){var statearr_63927 = state_63826;
(statearr_63927[(32)] = inst_63706);

return statearr_63927;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63826__$1,(20),inst_63598,(3));
} else {
if((state_val_63827 === (26))){
var inst_63717 = (state_63826[(2)]);
var inst_63719 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63720 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63721 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,57,inst_63720,57,inst_63717,"Should not flush 3,4 yet"];
var inst_63722 = cljs.core.PersistentHashMap.fromArrays(inst_63719,inst_63721);
var inst_63723 = cljs.test.report.call(null,inst_63722);
var state_63826__$1 = state_63826;
var statearr_63929_64138 = state_63826__$1;
(statearr_63929_64138[(2)] = inst_63723);

(statearr_63929_64138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (16))){
var _ = (function (){var statearr_63933 = state_63826;
(statearr_63933[(4)] = cljs.core.rest((state_63826[(4)])));

return statearr_63933;
})();
var state_63826__$1 = state_63826;
var ex63924 = (state_63826__$1[(2)]);
var statearr_63938_64139 = state_63826__$1;
(statearr_63938_64139[(5)] = ex63924);


var statearr_63940_64140 = state_63826__$1;
(statearr_63940_64140[(1)] = (15));

(statearr_63940_64140[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (38))){
var inst_63796 = (state_63826[(17)]);
var inst_63820 = (state_63826[(2)]);
var _ = (function (){var statearr_63941 = state_63826;
(statearr_63941[(4)] = cljs.core.rest((state_63826[(4)])));

return statearr_63941;
})();
var state_63826__$1 = (function (){var statearr_63942 = state_63826;
(statearr_63942[(33)] = inst_63820);

return statearr_63942;
})();
var statearr_63943_64141 = state_63826__$1;
(statearr_63943_64141[(2)] = inst_63796);

(statearr_63943_64141[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (30))){
var inst_63738 = (state_63826[(12)]);
var inst_63761 = (state_63826[(2)]);
var _ = (function (){var statearr_63944 = state_63826;
(statearr_63944[(4)] = cljs.core.rest((state_63826[(4)])));

return statearr_63944;
})();
var state_63826__$1 = (function (){var statearr_63945 = state_63826;
(statearr_63945[(34)] = inst_63761);

return statearr_63945;
})();
var statearr_63946_64142 = state_63826__$1;
(statearr_63946_64142[(2)] = inst_63738);

(statearr_63946_64142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (10))){
var inst_63633 = (state_63826[(31)]);
var inst_63644 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63645 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63646 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63647 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63648 = cljs.core.cons(inst_63647,inst_63633);
var inst_63649 = (new cljs.core.List(null,inst_63648,null,(1),null));
var inst_63650 = (new cljs.core.List(null,inst_63646,inst_63649,(2),null));
var inst_63651 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,47,inst_63645,47,inst_63650,"Should not flush before timeout"];
var inst_63652 = cljs.core.PersistentHashMap.fromArrays(inst_63644,inst_63651);
var inst_63653 = cljs.test.report.call(null,inst_63652);
var state_63826__$1 = state_63826;
var statearr_63947_64143 = state_63826__$1;
(statearr_63947_64143[(2)] = inst_63653);

(statearr_63947_64143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (18))){
var inst_63681 = (state_63826[(19)]);
var inst_63692 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63693 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63694 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63695 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63696 = cljs.core.cons(inst_63695,inst_63681);
var inst_63697 = (new cljs.core.List(null,inst_63696,null,(1),null));
var inst_63698 = (new cljs.core.List(null,inst_63694,inst_63697,(2),null));
var inst_63699 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,50,inst_63693,50,inst_63698,"Should flush after timeout"];
var inst_63700 = cljs.core.PersistentHashMap.fromArrays(inst_63692,inst_63699);
var inst_63701 = cljs.test.report.call(null,inst_63700);
var state_63826__$1 = state_63826;
var statearr_63949_64144 = state_63826__$1;
(statearr_63949_64144[(2)] = inst_63701);

(statearr_63949_64144[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (37))){
var inst_63795 = (state_63826[(16)]);
var inst_63808 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63810 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63811 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63812 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63813 = cljs.core.cons(inst_63812,inst_63795);
var inst_63814 = (new cljs.core.List(null,inst_63813,null,(1),null));
var inst_63815 = (new cljs.core.List(null,inst_63811,inst_63814,(2),null));
var inst_63816 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),18,60,inst_63810,60,inst_63815,"Should flush 3,4 after timeout from first message"];
var inst_63817 = cljs.core.PersistentHashMap.fromArrays(inst_63808,inst_63816);
var inst_63818 = cljs.test.report.call(null,inst_63817);
var state_63826__$1 = state_63826;
var statearr_63950_64145 = state_63826__$1;
(statearr_63950_64145[(2)] = inst_63818);

(statearr_63950_64145[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (8))){
var _ = (function (){var statearr_63951 = state_63826;
(statearr_63951[(4)] = cljs.core.rest((state_63826[(4)])));

return statearr_63951;
})();
var state_63826__$1 = state_63826;
var ex63948 = (state_63826__$1[(2)]);
var statearr_63952_64146 = state_63826__$1;
(statearr_63952_64146[(5)] = ex63948);


var statearr_63953_64147 = state_63826__$1;
(statearr_63953_64147[(1)] = (7));

(statearr_63953_64147[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0 = (function (){
var statearr_63954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63954[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__);

(statearr_63954[(1)] = (1));

return statearr_63954;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1 = (function (state_63826){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_63826);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e63955){var ex__32399__auto__ = e63955;
var statearr_63956_64148 = state_63826;
(statearr_63956_64148[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_63826[(4)]))){
var statearr_63957_64149 = state_63826;
(statearr_63957_64149[(1)] = cljs.core.first((state_63826[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64150 = state_63826;
state_63826 = G__64150;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = function(state_63826){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1.call(this,state_63826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_63958 = f__32467__auto__();
(statearr_63958[(6)] = c__32466__auto__);

return statearr_63958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63592","meta63592",-1915410620,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63591");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63591");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63591.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63591 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63591(meta63592){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591(meta63592));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63591(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959 = (function (meta63960){
this.meta63960 = meta63960;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63961,meta63960__$1){
var self__ = this;
var _63961__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959(meta63960__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63961){
var self__ = this;
var _63961__$1 = this;
return self__.meta63960;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63963 = (arguments.length - (1));
switch (G__63963) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959.prototype.apply = (function (self__,args63962){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63962)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_64027){
var state_val_64028 = (state_64027[(1)]);
if((state_val_64028 === (7))){
var inst_63980 = (state_64027[(2)]);
var inst_63981 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63982 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63983 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),18,78,inst_63982,78,inst_63980,"Closing input should flush remaining"];
var inst_63984 = cljs.core.PersistentHashMap.fromArrays(inst_63981,inst_63983);
var inst_63985 = cljs.test.report.call(null,inst_63984);
var state_64027__$1 = state_64027;
var statearr_64029_64152 = state_64027__$1;
(statearr_64029_64152[(2)] = inst_63985);

(statearr_64029_64152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64028 === (1))){
var inst_63964 = (state_64027[(7)]);
var inst_63966 = (state_64027[(8)]);
var inst_63964__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63965 = cljs.core.PersistentVector.EMPTY;
var inst_63966__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63965);
var inst_63967 = (function (){var input_ch = inst_63964__$1;
var results = inst_63966__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63968 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63969 = [inst_63964__$1,inst_63967];
var inst_63970 = cljs.core.PersistentHashMap.fromArrays(inst_63968,inst_63969);
var inst_63971 = bb_web_ds_tools.components.async_buffer.create(inst_63970);
var state_64027__$1 = (function (){var statearr_64030 = state_64027;
(statearr_64030[(7)] = inst_63964__$1);

(statearr_64030[(8)] = inst_63966__$1);

(statearr_64030[(9)] = inst_63971);

return statearr_64030;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64027__$1,(2),inst_63964__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_64028 === (4))){
var inst_63979 = (state_64027[(2)]);
var state_64027__$1 = (function (){var statearr_64032 = state_64027;
(statearr_64032[(10)] = inst_63979);

return statearr_64032;
})();
var statearr_64036_64153 = state_64027__$1;
(statearr_64036_64153[(2)] = null);

(statearr_64036_64153[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64028 === (6))){
var inst_64024 = (state_64027[(2)]);
var inst_64025 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64027__$1 = (function (){var statearr_64037 = state_64027;
(statearr_64037[(11)] = inst_64024);

return statearr_64037;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64027__$1,inst_64025);
} else {
if((state_val_64028 === (3))){
var inst_63964 = (state_64027[(7)]);
var inst_63975 = (state_64027[(2)]);
var inst_63976 = cljs.core.async.close_BANG_(inst_63964);
var inst_63977 = cljs.core.async.timeout((20));
var state_64027__$1 = (function (){var statearr_64039 = state_64027;
(statearr_64039[(12)] = inst_63975);

(statearr_64039[(13)] = inst_63976);

return statearr_64039;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64027__$1,(4),inst_63977);
} else {
if((state_val_64028 === (2))){
var inst_63964 = (state_64027[(7)]);
var inst_63973 = (state_64027[(2)]);
var state_64027__$1 = (function (){var statearr_64040 = state_64027;
(statearr_64040[(14)] = inst_63973);

return statearr_64040;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64027__$1,(3),inst_63964,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_64028 === (11))){
var inst_64000 = (state_64027[(15)]);
var inst_64021 = (state_64027[(2)]);
var _ = (function (){var statearr_64041 = state_64027;
(statearr_64041[(4)] = cljs.core.rest((state_64027[(4)])));

return statearr_64041;
})();
var state_64027__$1 = (function (){var statearr_64042 = state_64027;
(statearr_64042[(16)] = inst_64021);

return statearr_64042;
})();
var statearr_64043_64154 = state_64027__$1;
(statearr_64043_64154[(2)] = inst_64000);

(statearr_64043_64154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64028 === (9))){
var inst_63999 = (state_64027[(17)]);
var inst_64002 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64003 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64004 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64005 = cljs.core.cons(inst_64004,inst_63999);
var inst_64006 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),18,78,inst_64003,78,inst_64005,"Closing input should flush remaining"];
var inst_64007 = cljs.core.PersistentHashMap.fromArrays(inst_64002,inst_64006);
var inst_64008 = cljs.test.report.call(null,inst_64007);
var state_64027__$1 = state_64027;
var statearr_64044_64155 = state_64027__$1;
(statearr_64044_64155[(2)] = inst_64008);

(statearr_64044_64155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64028 === (5))){
var inst_63966 = (state_64027[(8)]);
var inst_63999 = (state_64027[(17)]);
var inst_64000 = (state_64027[(15)]);
var _ = (function (){var statearr_64046 = state_64027;
(statearr_64046[(4)] = cljs.core.cons((8),(state_64027[(4)])));

return statearr_64046;
})();
var inst_63991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63992 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63993 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_63994 = (new cljs.core.PersistentVector(null,2,(5),inst_63992,inst_63993,null));
var inst_63995 = [inst_63994];
var inst_63996 = (new cljs.core.PersistentVector(null,1,(5),inst_63991,inst_63995,null));
var inst_63997 = cljs.core.deref(inst_63966);
var inst_63998 = (new cljs.core.List(null,inst_63997,null,(1),null));
var inst_63999__$1 = (new cljs.core.List(null,inst_63996,inst_63998,(2),null));
var inst_64000__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63999__$1);
var state_64027__$1 = (function (){var statearr_64047 = state_64027;
(statearr_64047[(17)] = inst_63999__$1);

(statearr_64047[(15)] = inst_64000__$1);

return statearr_64047;
})();
if(cljs.core.truth_(inst_64000__$1)){
var statearr_64048_64156 = state_64027__$1;
(statearr_64048_64156[(1)] = (9));

} else {
var statearr_64049_64157 = state_64027__$1;
(statearr_64049_64157[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64028 === (10))){
var inst_63999 = (state_64027[(17)]);
var inst_64010 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64011 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64012 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64013 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64014 = cljs.core.cons(inst_64013,inst_63999);
var inst_64015 = (new cljs.core.List(null,inst_64014,null,(1),null));
var inst_64016 = (new cljs.core.List(null,inst_64012,inst_64015,(2),null));
var inst_64017 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),18,78,inst_64011,78,inst_64016,"Closing input should flush remaining"];
var inst_64018 = cljs.core.PersistentHashMap.fromArrays(inst_64010,inst_64017);
var inst_64019 = cljs.test.report.call(null,inst_64018);
var state_64027__$1 = state_64027;
var statearr_64050_64158 = state_64027__$1;
(statearr_64050_64158[(2)] = inst_64019);

(statearr_64050_64158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64028 === (8))){
var _ = (function (){var statearr_64051 = state_64027;
(statearr_64051[(4)] = cljs.core.rest((state_64027[(4)])));

return statearr_64051;
})();
var state_64027__$1 = state_64027;
var ex64045 = (state_64027__$1[(2)]);
var statearr_64052_64159 = state_64027__$1;
(statearr_64052_64159[(5)] = ex64045);


var statearr_64053_64160 = state_64027__$1;
(statearr_64053_64160[(1)] = (7));

(statearr_64053_64160[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0 = (function (){
var statearr_64055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64055[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__);

(statearr_64055[(1)] = (1));

return statearr_64055;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1 = (function (state_64027){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_64027);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e64056){var ex__32399__auto__ = e64056;
var statearr_64057_64161 = state_64027;
(statearr_64057_64161[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_64027[(4)]))){
var statearr_64058_64162 = state_64027;
(statearr_64058_64162[(1)] = cljs.core.first((state_64027[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64163 = state_64027;
state_64027 = G__64163;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = function(state_64027){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1.call(this,state_64027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_64059 = f__32467__auto__();
(statearr_64059[(6)] = c__32466__auto__);

return statearr_64059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63960","meta63960",-97340160,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63959");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63959");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63959.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63959 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63959(meta63960){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959(meta63960));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63959(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
