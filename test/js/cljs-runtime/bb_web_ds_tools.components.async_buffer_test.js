goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333 = (function (meta63334){
this.meta63334 = meta63334;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63335,meta63334__$1){
var self__ = this;
var _63335__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333(meta63334__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63335){
var self__ = this;
var _63335__$1 = this;
return self__.meta63334;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63342 = (arguments.length - (1));
switch (G__63342) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333.prototype.apply = (function (self__,args63336){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63336)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_63517){
var state_val_63518 = (state_63517[(1)]);
if((state_val_63518 === (7))){
var inst_63368 = (state_63517[(2)]);
var inst_63370 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63371 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63372 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,19,inst_63371,19,inst_63368,"Buffer should not flush automatically without timer"];
var inst_63373 = cljs.core.PersistentHashMap.fromArrays(inst_63370,inst_63372);
var inst_63374 = cljs.test.report.call(null,inst_63373);
var state_63517__$1 = state_63517;
var statearr_63519_64079 = state_63517__$1;
(statearr_63519_64079[(2)] = inst_63374);

(statearr_63519_64079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (20))){
var inst_63359 = (state_63517[(7)]);
var inst_63462 = (state_63517[(2)]);
var inst_63463 = (inst_63359.cljs$core$IFn$_invoke$arity$0 ? inst_63359.cljs$core$IFn$_invoke$arity$0() : inst_63359.call(null));
var inst_63464 = cljs.core.async.timeout((20));
var state_63517__$1 = (function (){var statearr_63520 = state_63517;
(statearr_63520[(8)] = inst_63462);

(statearr_63520[(9)] = inst_63463);

return statearr_63520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63517__$1,(21),inst_63464);
} else {
if((state_val_63518 === (27))){
var inst_63489 = (state_63517[(10)]);
var inst_63500 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63501 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63502 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63503 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63504 = cljs.core.cons(inst_63503,inst_63489);
var inst_63505 = (new cljs.core.List(null,inst_63504,null,(1),null));
var inst_63506 = (new cljs.core.List(null,inst_63502,inst_63505,(2),null));
var inst_63507 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,inst_63501,29,inst_63506,"Subsequent flush should work"];
var inst_63508 = cljs.core.PersistentHashMap.fromArrays(inst_63500,inst_63507);
var inst_63509 = cljs.test.report.call(null,inst_63508);
var state_63517__$1 = state_63517;
var statearr_63521_64080 = state_63517__$1;
(statearr_63521_64080[(2)] = inst_63509);

(statearr_63521_64080[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (1))){
var inst_63347 = (state_63517[(11)]);
var inst_63351 = (state_63517[(12)]);
var inst_63347__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63350 = cljs.core.PersistentVector.EMPTY;
var inst_63351__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63350);
var inst_63355 = (function (){var input_ch = inst_63347__$1;
var results = inst_63351__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63356 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63357 = [inst_63347__$1,inst_63355];
var inst_63358 = cljs.core.PersistentHashMap.fromArrays(inst_63356,inst_63357);
var inst_63359 = bb_web_ds_tools.components.async_buffer.create(inst_63358);
var state_63517__$1 = (function (){var statearr_63522 = state_63517;
(statearr_63522[(11)] = inst_63347__$1);

(statearr_63522[(12)] = inst_63351__$1);

(statearr_63522[(7)] = inst_63359);

return statearr_63522;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63517__$1,(2),inst_63347__$1,(1));
} else {
if((state_val_63518 === (24))){
var inst_63467 = (state_63517[(2)]);
var inst_63468 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63469 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63470 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"error","error",-978969032),18,29,inst_63469,29,inst_63467,"Subsequent flush should work"];
var inst_63471 = cljs.core.PersistentHashMap.fromArrays(inst_63468,inst_63470);
var inst_63472 = cljs.test.report.call(null,inst_63471);
var state_63517__$1 = state_63517;
var statearr_63523_64081 = state_63517__$1;
(statearr_63523_64081[(2)] = inst_63472);

(statearr_63523_64081[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (4))){
var inst_63366 = (state_63517[(2)]);
var state_63517__$1 = (function (){var statearr_63524 = state_63517;
(statearr_63524[(13)] = inst_63366);

return statearr_63524;
})();
var statearr_63525_64082 = state_63517__$1;
(statearr_63525_64082[(2)] = null);

(statearr_63525_64082[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (15))){
var inst_63415 = (state_63517[(2)]);
var inst_63416 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63417 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63418 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,24,inst_63417,24,inst_63415,"Manual flush should flush all items"];
var inst_63419 = cljs.core.PersistentHashMap.fromArrays(inst_63416,inst_63418);
var inst_63420 = cljs.test.report.call(null,inst_63419);
var state_63517__$1 = state_63517;
var statearr_63526_64083 = state_63517__$1;
(statearr_63526_64083[(2)] = inst_63420);

(statearr_63526_64083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (21))){
var inst_63466 = (state_63517[(2)]);
var state_63517__$1 = (function (){var statearr_63527 = state_63517;
(statearr_63527[(14)] = inst_63466);

return statearr_63527;
})();
var statearr_63528_64084 = state_63517__$1;
(statearr_63528_64084[(2)] = null);

(statearr_63528_64084[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (13))){
var inst_63351 = (state_63517[(12)]);
var inst_63434 = (state_63517[(15)]);
var inst_63436 = (state_63517[(16)]);
var _ = (function (){var statearr_63529 = state_63517;
(statearr_63529[(4)] = cljs.core.cons((16),(state_63517[(4)])));

return statearr_63529;
})();
var inst_63426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63428 = [(1),(2)];
var inst_63429 = (new cljs.core.PersistentVector(null,2,(5),inst_63427,inst_63428,null));
var inst_63430 = [inst_63429];
var inst_63431 = (new cljs.core.PersistentVector(null,1,(5),inst_63426,inst_63430,null));
var inst_63432 = cljs.core.deref(inst_63351);
var inst_63433 = (new cljs.core.List(null,inst_63432,null,(1),null));
var inst_63434__$1 = (new cljs.core.List(null,inst_63431,inst_63433,(2),null));
var inst_63436__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63434__$1);
var state_63517__$1 = (function (){var statearr_63530 = state_63517;
(statearr_63530[(15)] = inst_63434__$1);

(statearr_63530[(16)] = inst_63436__$1);

return statearr_63530;
})();
if(cljs.core.truth_(inst_63436__$1)){
var statearr_63531_64085 = state_63517__$1;
(statearr_63531_64085[(1)] = (17));

} else {
var statearr_63532_64086 = state_63517__$1;
(statearr_63532_64086[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (22))){
var inst_63351 = (state_63517[(12)]);
var inst_63489 = (state_63517[(10)]);
var inst_63490 = (state_63517[(17)]);
var _ = (function (){var statearr_63533 = state_63517;
(statearr_63533[(4)] = cljs.core.cons((25),(state_63517[(4)])));

return statearr_63533;
})();
var inst_63478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63479 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63480 = [(1),(2)];
var inst_63481 = (new cljs.core.PersistentVector(null,2,(5),inst_63479,inst_63480,null));
var inst_63482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63483 = [(3)];
var inst_63484 = (new cljs.core.PersistentVector(null,1,(5),inst_63482,inst_63483,null));
var inst_63485 = [inst_63481,inst_63484];
var inst_63486 = (new cljs.core.PersistentVector(null,2,(5),inst_63478,inst_63485,null));
var inst_63487 = cljs.core.deref(inst_63351);
var inst_63488 = (new cljs.core.List(null,inst_63487,null,(1),null));
var inst_63489__$1 = (new cljs.core.List(null,inst_63486,inst_63488,(2),null));
var inst_63490__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63489__$1);
var state_63517__$1 = (function (){var statearr_63534 = state_63517;
(statearr_63534[(10)] = inst_63489__$1);

(statearr_63534[(17)] = inst_63490__$1);

return statearr_63534;
})();
if(cljs.core.truth_(inst_63490__$1)){
var statearr_63535_64087 = state_63517__$1;
(statearr_63535_64087[(1)] = (26));

} else {
var statearr_63536_64088 = state_63517__$1;
(statearr_63536_64088[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (6))){
var inst_63359 = (state_63517[(7)]);
var inst_63406 = (state_63517[(2)]);
var inst_63407 = (inst_63359.cljs$core$IFn$_invoke$arity$0 ? inst_63359.cljs$core$IFn$_invoke$arity$0() : inst_63359.call(null));
var inst_63408 = cljs.core.async.timeout((20));
var state_63517__$1 = (function (){var statearr_63538 = state_63517;
(statearr_63538[(18)] = inst_63406);

(statearr_63538[(19)] = inst_63407);

return statearr_63538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63517__$1,(12),inst_63408);
} else {
if((state_val_63518 === (28))){
var inst_63490 = (state_63517[(17)]);
var inst_63511 = (state_63517[(2)]);
var _ = (function (){var statearr_63539 = state_63517;
(statearr_63539[(4)] = cljs.core.rest((state_63517[(4)])));

return statearr_63539;
})();
var state_63517__$1 = (function (){var statearr_63540 = state_63517;
(statearr_63540[(20)] = inst_63511);

return statearr_63540;
})();
var statearr_63541_64089 = state_63517__$1;
(statearr_63541_64089[(2)] = inst_63490);

(statearr_63541_64089[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (25))){
var _ = (function (){var statearr_63542 = state_63517;
(statearr_63542[(4)] = cljs.core.rest((state_63517[(4)])));

return statearr_63542;
})();
var state_63517__$1 = state_63517;
var ex63537 = (state_63517__$1[(2)]);
var statearr_63543_64090 = state_63517__$1;
(statearr_63543_64090[(5)] = ex63537);


var statearr_63544_64091 = state_63517__$1;
(statearr_63544_64091[(1)] = (24));

(statearr_63544_64091[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (17))){
var inst_63434 = (state_63517[(15)]);
var inst_63438 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63439 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63440 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63441 = cljs.core.cons(inst_63440,inst_63434);
var inst_63442 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,24,inst_63439,24,inst_63441,"Manual flush should flush all items"];
var inst_63443 = cljs.core.PersistentHashMap.fromArrays(inst_63438,inst_63442);
var inst_63444 = cljs.test.report.call(null,inst_63443);
var state_63517__$1 = state_63517;
var statearr_63545_64092 = state_63517__$1;
(statearr_63545_64092[(2)] = inst_63444);

(statearr_63545_64092[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (3))){
var inst_63363 = (state_63517[(2)]);
var inst_63364 = cljs.core.async.timeout((20));
var state_63517__$1 = (function (){var statearr_63546 = state_63517;
(statearr_63546[(21)] = inst_63363);

return statearr_63546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63517__$1,(4),inst_63364);
} else {
if((state_val_63518 === (12))){
var inst_63410 = (state_63517[(2)]);
var state_63517__$1 = (function (){var statearr_63547 = state_63517;
(statearr_63547[(22)] = inst_63410);

return statearr_63547;
})();
var statearr_63548_64093 = state_63517__$1;
(statearr_63548_64093[(2)] = null);

(statearr_63548_64093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (2))){
var inst_63347 = (state_63517[(11)]);
var inst_63361 = (state_63517[(2)]);
var state_63517__$1 = (function (){var statearr_63549 = state_63517;
(statearr_63549[(23)] = inst_63361);

return statearr_63549;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63517__$1,(3),inst_63347,(2));
} else {
if((state_val_63518 === (23))){
var inst_63514 = (state_63517[(2)]);
var inst_63515 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_63517__$1 = (function (){var statearr_63550 = state_63517;
(statearr_63550[(24)] = inst_63514);

return statearr_63550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63517__$1,inst_63515);
} else {
if((state_val_63518 === (19))){
var inst_63436 = (state_63517[(16)]);
var inst_63457 = (state_63517[(2)]);
var _ = (function (){var statearr_63552 = state_63517;
(statearr_63552[(4)] = cljs.core.rest((state_63517[(4)])));

return statearr_63552;
})();
var state_63517__$1 = (function (){var statearr_63553 = state_63517;
(statearr_63553[(25)] = inst_63457);

return statearr_63553;
})();
var statearr_63554_64094 = state_63517__$1;
(statearr_63554_64094[(2)] = inst_63436);

(statearr_63554_64094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (11))){
var inst_63382 = (state_63517[(26)]);
var inst_63403 = (state_63517[(2)]);
var _ = (function (){var statearr_63555 = state_63517;
(statearr_63555[(4)] = cljs.core.rest((state_63517[(4)])));

return statearr_63555;
})();
var state_63517__$1 = (function (){var statearr_63556 = state_63517;
(statearr_63556[(27)] = inst_63403);

return statearr_63556;
})();
var statearr_63557_64095 = state_63517__$1;
(statearr_63557_64095[(2)] = inst_63382);

(statearr_63557_64095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (9))){
var inst_63381 = (state_63517[(28)]);
var inst_63384 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63385 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63386 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63387 = cljs.core.cons(inst_63386,inst_63381);
var inst_63388 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,19,inst_63385,19,inst_63387,"Buffer should not flush automatically without timer"];
var inst_63389 = cljs.core.PersistentHashMap.fromArrays(inst_63384,inst_63388);
var inst_63390 = cljs.test.report.call(null,inst_63389);
var state_63517__$1 = state_63517;
var statearr_63558_64096 = state_63517__$1;
(statearr_63558_64096[(2)] = inst_63390);

(statearr_63558_64096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (5))){
var inst_63351 = (state_63517[(12)]);
var inst_63381 = (state_63517[(28)]);
var inst_63382 = (state_63517[(26)]);
var _ = (function (){var statearr_63559 = state_63517;
(statearr_63559[(4)] = cljs.core.cons((8),(state_63517[(4)])));

return statearr_63559;
})();
var inst_63380 = cljs.core.deref(inst_63351);
var inst_63381__$1 = (new cljs.core.List(null,inst_63380,null,(1),null));
var inst_63382__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_63381__$1);
var state_63517__$1 = (function (){var statearr_63560 = state_63517;
(statearr_63560[(28)] = inst_63381__$1);

(statearr_63560[(26)] = inst_63382__$1);

return statearr_63560;
})();
if(cljs.core.truth_(inst_63382__$1)){
var statearr_63561_64097 = state_63517__$1;
(statearr_63561_64097[(1)] = (9));

} else {
var statearr_63562_64098 = state_63517__$1;
(statearr_63562_64098[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (14))){
var inst_63347 = (state_63517[(11)]);
var inst_63460 = (state_63517[(2)]);
var state_63517__$1 = (function (){var statearr_63564 = state_63517;
(statearr_63564[(29)] = inst_63460);

return statearr_63564;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63517__$1,(20),inst_63347,(3));
} else {
if((state_val_63518 === (26))){
var inst_63489 = (state_63517[(10)]);
var inst_63492 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63493 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63494 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63495 = cljs.core.cons(inst_63494,inst_63489);
var inst_63496 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,inst_63493,29,inst_63495,"Subsequent flush should work"];
var inst_63497 = cljs.core.PersistentHashMap.fromArrays(inst_63492,inst_63496);
var inst_63498 = cljs.test.report.call(null,inst_63497);
var state_63517__$1 = state_63517;
var statearr_63565_64099 = state_63517__$1;
(statearr_63565_64099[(2)] = inst_63498);

(statearr_63565_64099[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (16))){
var _ = (function (){var statearr_63571 = state_63517;
(statearr_63571[(4)] = cljs.core.rest((state_63517[(4)])));

return statearr_63571;
})();
var state_63517__$1 = state_63517;
var ex63563 = (state_63517__$1[(2)]);
var statearr_63573_64100 = state_63517__$1;
(statearr_63573_64100[(5)] = ex63563);


var statearr_63574_64101 = state_63517__$1;
(statearr_63574_64101[(1)] = (15));

(statearr_63574_64101[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (10))){
var inst_63381 = (state_63517[(28)]);
var inst_63392 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63393 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63394 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63395 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63396 = cljs.core.cons(inst_63395,inst_63381);
var inst_63397 = (new cljs.core.List(null,inst_63396,null,(1),null));
var inst_63398 = (new cljs.core.List(null,inst_63394,inst_63397,(2),null));
var inst_63399 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,19,inst_63393,19,inst_63398,"Buffer should not flush automatically without timer"];
var inst_63400 = cljs.core.PersistentHashMap.fromArrays(inst_63392,inst_63399);
var inst_63401 = cljs.test.report.call(null,inst_63400);
var state_63517__$1 = state_63517;
var statearr_63577_64102 = state_63517__$1;
(statearr_63577_64102[(2)] = inst_63401);

(statearr_63577_64102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (18))){
var inst_63434 = (state_63517[(15)]);
var inst_63446 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63447 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63448 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63449 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63450 = cljs.core.cons(inst_63449,inst_63434);
var inst_63451 = (new cljs.core.List(null,inst_63450,null,(1),null));
var inst_63452 = (new cljs.core.List(null,inst_63448,inst_63451,(2),null));
var inst_63453 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,24,inst_63447,24,inst_63452,"Manual flush should flush all items"];
var inst_63454 = cljs.core.PersistentHashMap.fromArrays(inst_63446,inst_63453);
var inst_63455 = cljs.test.report.call(null,inst_63454);
var state_63517__$1 = state_63517;
var statearr_63578_64103 = state_63517__$1;
(statearr_63578_64103[(2)] = inst_63455);

(statearr_63578_64103[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63518 === (8))){
var _ = (function (){var statearr_63580 = state_63517;
(statearr_63580[(4)] = cljs.core.rest((state_63517[(4)])));

return statearr_63580;
})();
var state_63517__$1 = state_63517;
var ex63575 = (state_63517__$1[(2)]);
var statearr_63581_64104 = state_63517__$1;
(statearr_63581_64104[(5)] = ex63575);


var statearr_63582_64105 = state_63517__$1;
(statearr_63582_64105[(1)] = (7));

(statearr_63582_64105[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1 = (function (state_63517){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_63517);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e63585){var ex__32399__auto__ = e63585;
var statearr_63586_64106 = state_63517;
(statearr_63586_64106[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_63517[(4)]))){
var statearr_63587_64107 = state_63517;
(statearr_63587_64107[(1)] = cljs.core.first((state_63517[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64108 = state_63517;
state_63517 = G__64108;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = function(state_63517){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1.call(this,state_63517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_63589 = f__32477__auto__();
(statearr_63589[(6)] = c__32476__auto__);

return statearr_63589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63334","meta63334",-120881310,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63333");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63333");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63333.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63333 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63333(meta63334){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333(meta63334));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63333(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593 = (function (meta63594){
this.meta63594 = meta63594;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63595,meta63594__$1){
var self__ = this;
var _63595__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593(meta63594__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63595){
var self__ = this;
var _63595__$1 = this;
return self__.meta63594;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63604 = (arguments.length - (1));
switch (G__63604) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593.prototype.apply = (function (self__,args63599){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63599)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_63823){
var state_val_63824 = (state_63823[(1)]);
if((state_val_63824 === (7))){
var inst_63621 = (state_63823[(2)]);
var inst_63622 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63623 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63624 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,47,inst_63623,47,inst_63621,"Should not flush before timeout"];
var inst_63625 = cljs.core.PersistentHashMap.fromArrays(inst_63622,inst_63624);
var inst_63626 = cljs.test.report.call(null,inst_63625);
var state_63823__$1 = state_63823;
var statearr_63827_64110 = state_63823__$1;
(statearr_63827_64110[(2)] = inst_63626);

(statearr_63827_64110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (20))){
var inst_63709 = (state_63823[(2)]);
var inst_63710 = cljs.core.async.timeout((50));
var state_63823__$1 = (function (){var statearr_63828 = state_63823;
(statearr_63828[(7)] = inst_63709);

return statearr_63828;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63823__$1,(21),inst_63710);
} else {
if((state_val_63824 === (27))){
var _ = (function (){var statearr_63829 = state_63823;
(statearr_63829[(4)] = cljs.core.rest((state_63823[(4)])));

return statearr_63829;
})();
var state_63823__$1 = state_63823;
var ex63825 = (state_63823__$1[(2)]);
var statearr_63830_64111 = state_63823__$1;
(statearr_63830_64111[(5)] = ex63825);


var statearr_63831_64112 = state_63823__$1;
(statearr_63831_64112[(1)] = (26));

(statearr_63831_64112[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (1))){
var inst_63606 = (state_63823[(8)]);
var inst_63608 = (state_63823[(9)]);
var inst_63606__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63607 = cljs.core.PersistentVector.EMPTY;
var inst_63608__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63607);
var inst_63609 = (function (){var input_ch = inst_63606__$1;
var results = inst_63608__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63610 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63611 = [inst_63606__$1,(100),inst_63609];
var inst_63612 = cljs.core.PersistentHashMap.fromArrays(inst_63610,inst_63611);
var inst_63613 = bb_web_ds_tools.components.async_buffer.create(inst_63612);
var state_63823__$1 = (function (){var statearr_63838 = state_63823;
(statearr_63838[(8)] = inst_63606__$1);

(statearr_63838[(9)] = inst_63608__$1);

(statearr_63838[(10)] = inst_63613);

return statearr_63838;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63823__$1,(2),inst_63606__$1,(1));
} else {
if((state_val_63824 === (24))){
var inst_63608 = (state_63823[(9)]);
var inst_63737 = (state_63823[(11)]);
var inst_63738 = (state_63823[(12)]);
var _ = (function (){var statearr_63841 = state_63823;
(statearr_63841[(4)] = cljs.core.cons((27),(state_63823[(4)])));

return statearr_63841;
})();
var inst_63729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63731 = [(1),(2)];
var inst_63732 = (new cljs.core.PersistentVector(null,2,(5),inst_63730,inst_63731,null));
var inst_63733 = [inst_63732];
var inst_63734 = (new cljs.core.PersistentVector(null,1,(5),inst_63729,inst_63733,null));
var inst_63735 = cljs.core.deref(inst_63608);
var inst_63736 = (new cljs.core.List(null,inst_63735,null,(1),null));
var inst_63737__$1 = (new cljs.core.List(null,inst_63734,inst_63736,(2),null));
var inst_63738__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63737__$1);
var state_63823__$1 = (function (){var statearr_63848 = state_63823;
(statearr_63848[(11)] = inst_63737__$1);

(statearr_63848[(12)] = inst_63738__$1);

return statearr_63848;
})();
if(cljs.core.truth_(inst_63738__$1)){
var statearr_63855_64113 = state_63823__$1;
(statearr_63855_64113[(1)] = (28));

} else {
var statearr_63856_64114 = state_63823__$1;
(statearr_63856_64114[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (4))){
var inst_63620 = (state_63823[(2)]);
var state_63823__$1 = (function (){var statearr_63857 = state_63823;
(statearr_63857[(13)] = inst_63620);

return statearr_63857;
})();
var statearr_63858_64115 = state_63823__$1;
(statearr_63858_64115[(2)] = null);

(statearr_63858_64115[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (15))){
var inst_63662 = (state_63823[(2)]);
var inst_63663 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63664 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63665 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,50,inst_63664,50,inst_63662,"Should flush after timeout"];
var inst_63666 = cljs.core.PersistentHashMap.fromArrays(inst_63663,inst_63665);
var inst_63667 = cljs.test.report.call(null,inst_63666);
var state_63823__$1 = state_63823;
var statearr_63864_64116 = state_63823__$1;
(statearr_63864_64116[(2)] = inst_63667);

(statearr_63864_64116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (21))){
var inst_63606 = (state_63823[(8)]);
var inst_63712 = (state_63823[(2)]);
var state_63823__$1 = (function (){var statearr_63892 = state_63823;
(statearr_63892[(14)] = inst_63712);

return statearr_63892;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63823__$1,(22),inst_63606,(4));
} else {
if((state_val_63824 === (31))){
var inst_63765 = (state_63823[(2)]);
var state_63823__$1 = (function (){var statearr_63893 = state_63823;
(statearr_63893[(15)] = inst_63765);

return statearr_63893;
})();
var statearr_63894_64117 = state_63823__$1;
(statearr_63894_64117[(2)] = null);

(statearr_63894_64117[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (32))){
var inst_63608 = (state_63823[(9)]);
var inst_63788 = (state_63823[(16)]);
var inst_63789 = (state_63823[(17)]);
var _ = (function (){var statearr_63895 = state_63823;
(statearr_63895[(4)] = cljs.core.cons((35),(state_63823[(4)])));

return statearr_63895;
})();
var inst_63777 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63779 = [(1),(2)];
var inst_63780 = (new cljs.core.PersistentVector(null,2,(5),inst_63778,inst_63779,null));
var inst_63781 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63782 = [(3),(4)];
var inst_63783 = (new cljs.core.PersistentVector(null,2,(5),inst_63781,inst_63782,null));
var inst_63784 = [inst_63780,inst_63783];
var inst_63785 = (new cljs.core.PersistentVector(null,2,(5),inst_63777,inst_63784,null));
var inst_63786 = cljs.core.deref(inst_63608);
var inst_63787 = (new cljs.core.List(null,inst_63786,null,(1),null));
var inst_63788__$1 = (new cljs.core.List(null,inst_63785,inst_63787,(2),null));
var inst_63789__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63788__$1);
var state_63823__$1 = (function (){var statearr_63896 = state_63823;
(statearr_63896[(16)] = inst_63788__$1);

(statearr_63896[(17)] = inst_63789__$1);

return statearr_63896;
})();
if(cljs.core.truth_(inst_63789__$1)){
var statearr_63897_64118 = state_63823__$1;
(statearr_63897_64118[(1)] = (36));

} else {
var statearr_63898_64119 = state_63823__$1;
(statearr_63898_64119[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (33))){
var inst_63813 = (state_63823[(2)]);
var inst_63814 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_63823__$1 = (function (){var statearr_63899 = state_63823;
(statearr_63899[(18)] = inst_63813);

return statearr_63899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63823__$1,inst_63814);
} else {
if((state_val_63824 === (13))){
var inst_63608 = (state_63823[(9)]);
var inst_63681 = (state_63823[(19)]);
var inst_63683 = (state_63823[(20)]);
var _ = (function (){var statearr_63900 = state_63823;
(statearr_63900[(4)] = cljs.core.cons((16),(state_63823[(4)])));

return statearr_63900;
})();
var inst_63673 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63674 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63675 = [(1),(2)];
var inst_63676 = (new cljs.core.PersistentVector(null,2,(5),inst_63674,inst_63675,null));
var inst_63677 = [inst_63676];
var inst_63678 = (new cljs.core.PersistentVector(null,1,(5),inst_63673,inst_63677,null));
var inst_63679 = cljs.core.deref(inst_63608);
var inst_63680 = (new cljs.core.List(null,inst_63679,null,(1),null));
var inst_63681__$1 = (new cljs.core.List(null,inst_63678,inst_63680,(2),null));
var inst_63683__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63681__$1);
var state_63823__$1 = (function (){var statearr_63901 = state_63823;
(statearr_63901[(19)] = inst_63681__$1);

(statearr_63901[(20)] = inst_63683__$1);

return statearr_63901;
})();
if(cljs.core.truth_(inst_63683__$1)){
var statearr_63902_64120 = state_63823__$1;
(statearr_63902_64120[(1)] = (17));

} else {
var statearr_63903_64121 = state_63823__$1;
(statearr_63903_64121[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (22))){
var inst_63714 = (state_63823[(2)]);
var inst_63715 = cljs.core.async.timeout((20));
var state_63823__$1 = (function (){var statearr_63904 = state_63823;
(statearr_63904[(21)] = inst_63714);

return statearr_63904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63823__$1,(23),inst_63715);
} else {
if((state_val_63824 === (36))){
var inst_63788 = (state_63823[(16)]);
var inst_63791 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63792 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63793 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63794 = cljs.core.cons(inst_63793,inst_63788);
var inst_63795 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),18,60,inst_63792,60,inst_63794,"Should flush 3,4 after timeout from first message"];
var inst_63796 = cljs.core.PersistentHashMap.fromArrays(inst_63791,inst_63795);
var inst_63797 = cljs.test.report.call(null,inst_63796);
var state_63823__$1 = state_63823;
var statearr_63905_64122 = state_63823__$1;
(statearr_63905_64122[(2)] = inst_63797);

(statearr_63905_64122[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (29))){
var inst_63737 = (state_63823[(11)]);
var inst_63748 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63749 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63750 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63751 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63752 = cljs.core.cons(inst_63751,inst_63737);
var inst_63753 = (new cljs.core.List(null,inst_63752,null,(1),null));
var inst_63754 = (new cljs.core.List(null,inst_63750,inst_63753,(2),null));
var inst_63755 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,57,inst_63749,57,inst_63754,"Should not flush 3,4 yet"];
var inst_63756 = cljs.core.PersistentHashMap.fromArrays(inst_63748,inst_63755);
var inst_63757 = cljs.test.report.call(null,inst_63756);
var state_63823__$1 = state_63823;
var statearr_63906_64123 = state_63823__$1;
(statearr_63906_64123[(2)] = inst_63757);

(statearr_63906_64123[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (6))){
var inst_63658 = (state_63823[(2)]);
var inst_63659 = cljs.core.async.timeout((100));
var state_63823__$1 = (function (){var statearr_63907 = state_63823;
(statearr_63907[(22)] = inst_63658);

return statearr_63907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63823__$1,(12),inst_63659);
} else {
if((state_val_63824 === (28))){
var inst_63737 = (state_63823[(11)]);
var inst_63740 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63741 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63742 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63743 = cljs.core.cons(inst_63742,inst_63737);
var inst_63744 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,57,inst_63741,57,inst_63743,"Should not flush 3,4 yet"];
var inst_63745 = cljs.core.PersistentHashMap.fromArrays(inst_63740,inst_63744);
var inst_63746 = cljs.test.report.call(null,inst_63745);
var state_63823__$1 = state_63823;
var statearr_63908_64124 = state_63823__$1;
(statearr_63908_64124[(2)] = inst_63746);

(statearr_63908_64124[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (25))){
var inst_63762 = (state_63823[(2)]);
var inst_63763 = cljs.core.async.timeout((80));
var state_63823__$1 = (function (){var statearr_63909 = state_63823;
(statearr_63909[(23)] = inst_63762);

return statearr_63909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63823__$1,(31),inst_63763);
} else {
if((state_val_63824 === (34))){
var inst_63766 = (state_63823[(2)]);
var inst_63767 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63768 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63769 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),18,60,inst_63768,60,inst_63766,"Should flush 3,4 after timeout from first message"];
var inst_63770 = cljs.core.PersistentHashMap.fromArrays(inst_63767,inst_63769);
var inst_63771 = cljs.test.report.call(null,inst_63770);
var state_63823__$1 = state_63823;
var statearr_63910_64125 = state_63823__$1;
(statearr_63910_64125[(2)] = inst_63771);

(statearr_63910_64125[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (17))){
var inst_63681 = (state_63823[(19)]);
var inst_63685 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63686 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63687 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63688 = cljs.core.cons(inst_63687,inst_63681);
var inst_63689 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,50,inst_63686,50,inst_63688,"Should flush after timeout"];
var inst_63690 = cljs.core.PersistentHashMap.fromArrays(inst_63685,inst_63689);
var inst_63691 = cljs.test.report.call(null,inst_63690);
var state_63823__$1 = state_63823;
var statearr_63911_64129 = state_63823__$1;
(statearr_63911_64129[(2)] = inst_63691);

(statearr_63911_64129[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (3))){
var inst_63617 = (state_63823[(2)]);
var inst_63618 = cljs.core.async.timeout((50));
var state_63823__$1 = (function (){var statearr_63912 = state_63823;
(statearr_63912[(24)] = inst_63617);

return statearr_63912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63823__$1,(4),inst_63618);
} else {
if((state_val_63824 === (12))){
var inst_63661 = (state_63823[(2)]);
var state_63823__$1 = (function (){var statearr_63913 = state_63823;
(statearr_63913[(25)] = inst_63661);

return statearr_63913;
})();
var statearr_63914_64131 = state_63823__$1;
(statearr_63914_64131[(2)] = null);

(statearr_63914_64131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (2))){
var inst_63606 = (state_63823[(8)]);
var inst_63615 = (state_63823[(2)]);
var state_63823__$1 = (function (){var statearr_63916 = state_63823;
(statearr_63916[(26)] = inst_63615);

return statearr_63916;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63823__$1,(3),inst_63606,(2));
} else {
if((state_val_63824 === (23))){
var inst_63717 = (state_63823[(2)]);
var state_63823__$1 = (function (){var statearr_63917 = state_63823;
(statearr_63917[(27)] = inst_63717);

return statearr_63917;
})();
var statearr_63918_64133 = state_63823__$1;
(statearr_63918_64133[(2)] = null);

(statearr_63918_64133[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (35))){
var _ = (function (){var statearr_63919 = state_63823;
(statearr_63919[(4)] = cljs.core.rest((state_63823[(4)])));

return statearr_63919;
})();
var state_63823__$1 = state_63823;
var ex63915 = (state_63823__$1[(2)]);
var statearr_63920_64135 = state_63823__$1;
(statearr_63920_64135[(5)] = ex63915);


var statearr_63921_64136 = state_63823__$1;
(statearr_63921_64136[(1)] = (34));

(statearr_63921_64136[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (19))){
var inst_63683 = (state_63823[(20)]);
var inst_63704 = (state_63823[(2)]);
var _ = (function (){var statearr_63922 = state_63823;
(statearr_63922[(4)] = cljs.core.rest((state_63823[(4)])));

return statearr_63922;
})();
var state_63823__$1 = (function (){var statearr_63923 = state_63823;
(statearr_63923[(28)] = inst_63704);

return statearr_63923;
})();
var statearr_63924_64141 = state_63823__$1;
(statearr_63924_64141[(2)] = inst_63683);

(statearr_63924_64141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (11))){
var inst_63634 = (state_63823[(29)]);
var inst_63655 = (state_63823[(2)]);
var _ = (function (){var statearr_63925 = state_63823;
(statearr_63925[(4)] = cljs.core.rest((state_63823[(4)])));

return statearr_63925;
})();
var state_63823__$1 = (function (){var statearr_63926 = state_63823;
(statearr_63926[(30)] = inst_63655);

return statearr_63926;
})();
var statearr_63927_64143 = state_63823__$1;
(statearr_63927_64143[(2)] = inst_63634);

(statearr_63927_64143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (9))){
var inst_63633 = (state_63823[(31)]);
var inst_63636 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63637 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63638 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63639 = cljs.core.cons(inst_63638,inst_63633);
var inst_63640 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,47,inst_63637,47,inst_63639,"Should not flush before timeout"];
var inst_63641 = cljs.core.PersistentHashMap.fromArrays(inst_63636,inst_63640);
var inst_63642 = cljs.test.report.call(null,inst_63641);
var state_63823__$1 = state_63823;
var statearr_63928_64145 = state_63823__$1;
(statearr_63928_64145[(2)] = inst_63642);

(statearr_63928_64145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (5))){
var inst_63608 = (state_63823[(9)]);
var inst_63633 = (state_63823[(31)]);
var inst_63634 = (state_63823[(29)]);
var _ = (function (){var statearr_63929 = state_63823;
(statearr_63929[(4)] = cljs.core.cons((8),(state_63823[(4)])));

return statearr_63929;
})();
var inst_63632 = cljs.core.deref(inst_63608);
var inst_63633__$1 = (new cljs.core.List(null,inst_63632,null,(1),null));
var inst_63634__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_63633__$1);
var state_63823__$1 = (function (){var statearr_63930 = state_63823;
(statearr_63930[(31)] = inst_63633__$1);

(statearr_63930[(29)] = inst_63634__$1);

return statearr_63930;
})();
if(cljs.core.truth_(inst_63634__$1)){
var statearr_63931_64146 = state_63823__$1;
(statearr_63931_64146[(1)] = (9));

} else {
var statearr_63932_64147 = state_63823__$1;
(statearr_63932_64147[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (14))){
var inst_63606 = (state_63823[(8)]);
var inst_63707 = (state_63823[(2)]);
var state_63823__$1 = (function (){var statearr_63934 = state_63823;
(statearr_63934[(32)] = inst_63707);

return statearr_63934;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63823__$1,(20),inst_63606,(3));
} else {
if((state_val_63824 === (26))){
var inst_63718 = (state_63823[(2)]);
var inst_63719 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63720 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63721 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,57,inst_63720,57,inst_63718,"Should not flush 3,4 yet"];
var inst_63722 = cljs.core.PersistentHashMap.fromArrays(inst_63719,inst_63721);
var inst_63723 = cljs.test.report.call(null,inst_63722);
var state_63823__$1 = state_63823;
var statearr_63935_64149 = state_63823__$1;
(statearr_63935_64149[(2)] = inst_63723);

(statearr_63935_64149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (16))){
var _ = (function (){var statearr_63936 = state_63823;
(statearr_63936[(4)] = cljs.core.rest((state_63823[(4)])));

return statearr_63936;
})();
var state_63823__$1 = state_63823;
var ex63933 = (state_63823__$1[(2)]);
var statearr_63937_64151 = state_63823__$1;
(statearr_63937_64151[(5)] = ex63933);


var statearr_63938_64152 = state_63823__$1;
(statearr_63938_64152[(1)] = (15));

(statearr_63938_64152[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (38))){
var inst_63789 = (state_63823[(17)]);
var inst_63810 = (state_63823[(2)]);
var _ = (function (){var statearr_63939 = state_63823;
(statearr_63939[(4)] = cljs.core.rest((state_63823[(4)])));

return statearr_63939;
})();
var state_63823__$1 = (function (){var statearr_63940 = state_63823;
(statearr_63940[(33)] = inst_63810);

return statearr_63940;
})();
var statearr_63941_64154 = state_63823__$1;
(statearr_63941_64154[(2)] = inst_63789);

(statearr_63941_64154[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (30))){
var inst_63738 = (state_63823[(12)]);
var inst_63759 = (state_63823[(2)]);
var _ = (function (){var statearr_63942 = state_63823;
(statearr_63942[(4)] = cljs.core.rest((state_63823[(4)])));

return statearr_63942;
})();
var state_63823__$1 = (function (){var statearr_63943 = state_63823;
(statearr_63943[(34)] = inst_63759);

return statearr_63943;
})();
var statearr_63944_64155 = state_63823__$1;
(statearr_63944_64155[(2)] = inst_63738);

(statearr_63944_64155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (10))){
var inst_63633 = (state_63823[(31)]);
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
var state_63823__$1 = state_63823;
var statearr_63945_64157 = state_63823__$1;
(statearr_63945_64157[(2)] = inst_63653);

(statearr_63945_64157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (18))){
var inst_63681 = (state_63823[(19)]);
var inst_63693 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63694 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63695 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63696 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63697 = cljs.core.cons(inst_63696,inst_63681);
var inst_63698 = (new cljs.core.List(null,inst_63697,null,(1),null));
var inst_63699 = (new cljs.core.List(null,inst_63695,inst_63698,(2),null));
var inst_63700 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,50,inst_63694,50,inst_63699,"Should flush after timeout"];
var inst_63701 = cljs.core.PersistentHashMap.fromArrays(inst_63693,inst_63700);
var inst_63702 = cljs.test.report.call(null,inst_63701);
var state_63823__$1 = state_63823;
var statearr_63947_64161 = state_63823__$1;
(statearr_63947_64161[(2)] = inst_63702);

(statearr_63947_64161[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (37))){
var inst_63788 = (state_63823[(16)]);
var inst_63799 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63800 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63801 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63802 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63803 = cljs.core.cons(inst_63802,inst_63788);
var inst_63804 = (new cljs.core.List(null,inst_63803,null,(1),null));
var inst_63805 = (new cljs.core.List(null,inst_63801,inst_63804,(2),null));
var inst_63806 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),18,60,inst_63800,60,inst_63805,"Should flush 3,4 after timeout from first message"];
var inst_63807 = cljs.core.PersistentHashMap.fromArrays(inst_63799,inst_63806);
var inst_63808 = cljs.test.report.call(null,inst_63807);
var state_63823__$1 = state_63823;
var statearr_63948_64163 = state_63823__$1;
(statearr_63948_64163[(2)] = inst_63808);

(statearr_63948_64163[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63824 === (8))){
var _ = (function (){var statearr_63950 = state_63823;
(statearr_63950[(4)] = cljs.core.rest((state_63823[(4)])));

return statearr_63950;
})();
var state_63823__$1 = state_63823;
var ex63946 = (state_63823__$1[(2)]);
var statearr_63954_64165 = state_63823__$1;
(statearr_63954_64165[(5)] = ex63946);


var statearr_63955_64167 = state_63823__$1;
(statearr_63955_64167[(1)] = (7));

(statearr_63955_64167[(5)] = null);



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
var statearr_63957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63957[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__);

(statearr_63957[(1)] = (1));

return statearr_63957;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1 = (function (state_63823){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_63823);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e63958){var ex__32399__auto__ = e63958;
var statearr_63959_64168 = state_63823;
(statearr_63959_64168[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_63823[(4)]))){
var statearr_63961_64169 = state_63823;
(statearr_63961_64169[(1)] = cljs.core.first((state_63823[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64170 = state_63823;
state_63823 = G__64170;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = function(state_63823){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1.call(this,state_63823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_63963 = f__32477__auto__();
(statearr_63963[(6)] = c__32476__auto__);

return statearr_63963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63594","meta63594",-1836081024,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63593");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63593");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63593.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63593 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63593(meta63594){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593(meta63594));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63593(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964 = (function (meta63965){
this.meta63965 = meta63965;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63966,meta63965__$1){
var self__ = this;
var _63966__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964(meta63965__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63966){
var self__ = this;
var _63966__$1 = this;
return self__.meta63965;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63969 = (arguments.length - (1));
switch (G__63969) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964.prototype.apply = (function (self__,args63968){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63968)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_64039){
var state_val_64040 = (state_64039[(1)]);
if((state_val_64040 === (7))){
var inst_63986 = (state_64039[(2)]);
var inst_63989 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63990 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63991 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),18,78,inst_63990,78,inst_63986,"Closing input should flush remaining"];
var inst_63992 = cljs.core.PersistentHashMap.fromArrays(inst_63989,inst_63991);
var inst_63993 = cljs.test.report.call(null,inst_63992);
var state_64039__$1 = state_64039;
var statearr_64045_64174 = state_64039__$1;
(statearr_64045_64174[(2)] = inst_63993);

(statearr_64045_64174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64040 === (1))){
var inst_63970 = (state_64039[(7)]);
var inst_63972 = (state_64039[(8)]);
var inst_63970__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63971 = cljs.core.PersistentVector.EMPTY;
var inst_63972__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63971);
var inst_63973 = (function (){var input_ch = inst_63970__$1;
var results = inst_63972__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63974 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63975 = [inst_63970__$1,inst_63973];
var inst_63976 = cljs.core.PersistentHashMap.fromArrays(inst_63974,inst_63975);
var inst_63977 = bb_web_ds_tools.components.async_buffer.create(inst_63976);
var state_64039__$1 = (function (){var statearr_64048 = state_64039;
(statearr_64048[(7)] = inst_63970__$1);

(statearr_64048[(8)] = inst_63972__$1);

(statearr_64048[(9)] = inst_63977);

return statearr_64048;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64039__$1,(2),inst_63970__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_64040 === (4))){
var inst_63985 = (state_64039[(2)]);
var state_64039__$1 = (function (){var statearr_64049 = state_64039;
(statearr_64049[(10)] = inst_63985);

return statearr_64049;
})();
var statearr_64056_64175 = state_64039__$1;
(statearr_64056_64175[(2)] = null);

(statearr_64056_64175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64040 === (6))){
var inst_64036 = (state_64039[(2)]);
var inst_64037 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64039__$1 = (function (){var statearr_64057 = state_64039;
(statearr_64057[(11)] = inst_64036);

return statearr_64057;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64039__$1,inst_64037);
} else {
if((state_val_64040 === (3))){
var inst_63970 = (state_64039[(7)]);
var inst_63981 = (state_64039[(2)]);
var inst_63982 = cljs.core.async.close_BANG_(inst_63970);
var inst_63983 = cljs.core.async.timeout((20));
var state_64039__$1 = (function (){var statearr_64058 = state_64039;
(statearr_64058[(12)] = inst_63981);

(statearr_64058[(13)] = inst_63982);

return statearr_64058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64039__$1,(4),inst_63983);
} else {
if((state_val_64040 === (2))){
var inst_63970 = (state_64039[(7)]);
var inst_63979 = (state_64039[(2)]);
var state_64039__$1 = (function (){var statearr_64059 = state_64039;
(statearr_64059[(14)] = inst_63979);

return statearr_64059;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64039__$1,(3),inst_63970,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_64040 === (11))){
var inst_64010 = (state_64039[(15)]);
var inst_64033 = (state_64039[(2)]);
var _ = (function (){var statearr_64060 = state_64039;
(statearr_64060[(4)] = cljs.core.rest((state_64039[(4)])));

return statearr_64060;
})();
var state_64039__$1 = (function (){var statearr_64061 = state_64039;
(statearr_64061[(16)] = inst_64033);

return statearr_64061;
})();
var statearr_64062_64177 = state_64039__$1;
(statearr_64062_64177[(2)] = inst_64010);

(statearr_64062_64177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64040 === (9))){
var inst_64008 = (state_64039[(17)]);
var inst_64013 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64014 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64015 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64016 = cljs.core.cons(inst_64015,inst_64008);
var inst_64017 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),18,78,inst_64014,78,inst_64016,"Closing input should flush remaining"];
var inst_64018 = cljs.core.PersistentHashMap.fromArrays(inst_64013,inst_64017);
var inst_64019 = cljs.test.report.call(null,inst_64018);
var state_64039__$1 = state_64039;
var statearr_64063_64178 = state_64039__$1;
(statearr_64063_64178[(2)] = inst_64019);

(statearr_64063_64178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64040 === (5))){
var inst_63972 = (state_64039[(8)]);
var inst_64008 = (state_64039[(17)]);
var inst_64010 = (state_64039[(15)]);
var _ = (function (){var statearr_64065 = state_64039;
(statearr_64065[(4)] = cljs.core.cons((8),(state_64039[(4)])));

return statearr_64065;
})();
var inst_63999 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64002 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_64003 = (new cljs.core.PersistentVector(null,2,(5),inst_64000,inst_64002,null));
var inst_64004 = [inst_64003];
var inst_64005 = (new cljs.core.PersistentVector(null,1,(5),inst_63999,inst_64004,null));
var inst_64006 = cljs.core.deref(inst_63972);
var inst_64007 = (new cljs.core.List(null,inst_64006,null,(1),null));
var inst_64008__$1 = (new cljs.core.List(null,inst_64005,inst_64007,(2),null));
var inst_64010__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64008__$1);
var state_64039__$1 = (function (){var statearr_64066 = state_64039;
(statearr_64066[(17)] = inst_64008__$1);

(statearr_64066[(15)] = inst_64010__$1);

return statearr_64066;
})();
if(cljs.core.truth_(inst_64010__$1)){
var statearr_64067_64179 = state_64039__$1;
(statearr_64067_64179[(1)] = (9));

} else {
var statearr_64068_64180 = state_64039__$1;
(statearr_64068_64180[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64040 === (10))){
var inst_64008 = (state_64039[(17)]);
var inst_64022 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64023 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64024 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64025 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64026 = cljs.core.cons(inst_64025,inst_64008);
var inst_64027 = (new cljs.core.List(null,inst_64026,null,(1),null));
var inst_64028 = (new cljs.core.List(null,inst_64024,inst_64027,(2),null));
var inst_64029 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),18,78,inst_64023,78,inst_64028,"Closing input should flush remaining"];
var inst_64030 = cljs.core.PersistentHashMap.fromArrays(inst_64022,inst_64029);
var inst_64031 = cljs.test.report.call(null,inst_64030);
var state_64039__$1 = state_64039;
var statearr_64069_64181 = state_64039__$1;
(statearr_64069_64181[(2)] = inst_64031);

(statearr_64069_64181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64040 === (8))){
var _ = (function (){var statearr_64070 = state_64039;
(statearr_64070[(4)] = cljs.core.rest((state_64039[(4)])));

return statearr_64070;
})();
var state_64039__$1 = state_64039;
var ex64064 = (state_64039__$1[(2)]);
var statearr_64071_64182 = state_64039__$1;
(statearr_64071_64182[(5)] = ex64064);


var statearr_64072_64183 = state_64039__$1;
(statearr_64072_64183[(1)] = (7));

(statearr_64072_64183[(5)] = null);



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
var statearr_64073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64073[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__);

(statearr_64073[(1)] = (1));

return statearr_64073;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1 = (function (state_64039){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_64039);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e64074){var ex__32399__auto__ = e64074;
var statearr_64075_64184 = state_64039;
(statearr_64075_64184[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_64039[(4)]))){
var statearr_64076_64185 = state_64039;
(statearr_64076_64185[(1)] = cljs.core.first((state_64039[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64186 = state_64039;
state_64039 = G__64186;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = function(state_64039){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1.call(this,state_64039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_64077 = f__32477__auto__();
(statearr_64077[(6)] = c__32476__auto__);

return statearr_64077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63965","meta63965",1303761590,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63964");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63964");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63964.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63964 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63964(meta63965){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964(meta63965));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63964(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
