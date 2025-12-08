goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374 = (function (meta56375){
this.meta56375 = meta56375;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56376,meta56375__$1){
var self__ = this;
var _56376__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374(meta56375__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56376){
var self__ = this;
var _56376__$1 = this;
return self__.meta56375;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56387 = (arguments.length - (1));
switch (G__56387) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374.prototype.apply = (function (self__,args56378){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56378)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_56572){
var state_val_56573 = (state_56572[(1)]);
if((state_val_56573 === (7))){
var inst_56425 = (state_56572[(2)]);
var inst_56426 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56428 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56429 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56428,19,inst_56425,"Buffer should not flush automatically without timer"];
var inst_56430 = cljs.core.PersistentHashMap.fromArrays(inst_56426,inst_56429);
var inst_56431 = cljs.test.report.call(null,inst_56430);
var state_56572__$1 = state_56572;
var statearr_56582_57255 = state_56572__$1;
(statearr_56582_57255[(2)] = inst_56431);

(statearr_56582_57255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (20))){
var inst_56417 = (state_56572[(7)]);
var inst_56516 = (state_56572[(2)]);
var inst_56517 = (inst_56417.cljs$core$IFn$_invoke$arity$0 ? inst_56417.cljs$core$IFn$_invoke$arity$0() : inst_56417.call(null));
var inst_56518 = cljs.core.async.timeout((20));
var state_56572__$1 = (function (){var statearr_56583 = state_56572;
(statearr_56583[(8)] = inst_56516);

(statearr_56583[(9)] = inst_56517);

return statearr_56583;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56572__$1,(21),inst_56518);
} else {
if((state_val_56573 === (27))){
var inst_56543 = (state_56572[(10)]);
var inst_56554 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56555 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56556 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56557 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56558 = cljs.core.cons(inst_56557,inst_56543);
var inst_56559 = (new cljs.core.List(null,inst_56558,null,(1),null));
var inst_56560 = (new cljs.core.List(null,inst_56556,inst_56559,(2),null));
var inst_56561 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56555,29,inst_56560,"Subsequent flush should work"];
var inst_56562 = cljs.core.PersistentHashMap.fromArrays(inst_56554,inst_56561);
var inst_56564 = cljs.test.report.call(null,inst_56562);
var state_56572__$1 = state_56572;
var statearr_56586_57263 = state_56572__$1;
(statearr_56586_57263[(2)] = inst_56564);

(statearr_56586_57263[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (1))){
var inst_56404 = (state_56572[(11)]);
var inst_56406 = (state_56572[(12)]);
var inst_56404__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56405 = cljs.core.PersistentVector.EMPTY;
var inst_56406__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56405);
var inst_56407 = (function (){var input_ch = inst_56404__$1;
var results = inst_56406__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56414 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56415 = [inst_56404__$1,inst_56407];
var inst_56416 = cljs.core.PersistentHashMap.fromArrays(inst_56414,inst_56415);
var inst_56417 = bb_web_ds_tools.components.async_buffer.create(inst_56416);
var state_56572__$1 = (function (){var statearr_56588 = state_56572;
(statearr_56588[(11)] = inst_56404__$1);

(statearr_56588[(12)] = inst_56406__$1);

(statearr_56588[(7)] = inst_56417);

return statearr_56588;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56572__$1,(2),inst_56404__$1,(1));
} else {
if((state_val_56573 === (24))){
var inst_56521 = (state_56572[(2)]);
var inst_56522 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56523 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56524 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56523,29,inst_56521,"Subsequent flush should work"];
var inst_56525 = cljs.core.PersistentHashMap.fromArrays(inst_56522,inst_56524);
var inst_56526 = cljs.test.report.call(null,inst_56525);
var state_56572__$1 = state_56572;
var statearr_56596_57264 = state_56572__$1;
(statearr_56596_57264[(2)] = inst_56526);

(statearr_56596_57264[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (4))){
var inst_56424 = (state_56572[(2)]);
var state_56572__$1 = (function (){var statearr_56599 = state_56572;
(statearr_56599[(13)] = inst_56424);

return statearr_56599;
})();
var statearr_56600_57265 = state_56572__$1;
(statearr_56600_57265[(2)] = null);

(statearr_56600_57265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (15))){
var inst_56468 = (state_56572[(2)]);
var inst_56471 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56472 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56473 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56472,24,inst_56468,"Manual flush should flush all items"];
var inst_56474 = cljs.core.PersistentHashMap.fromArrays(inst_56471,inst_56473);
var inst_56475 = cljs.test.report.call(null,inst_56474);
var state_56572__$1 = state_56572;
var statearr_56602_57266 = state_56572__$1;
(statearr_56602_57266[(2)] = inst_56475);

(statearr_56602_57266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (21))){
var inst_56520 = (state_56572[(2)]);
var state_56572__$1 = (function (){var statearr_56603 = state_56572;
(statearr_56603[(14)] = inst_56520);

return statearr_56603;
})();
var statearr_56604_57269 = state_56572__$1;
(statearr_56604_57269[(2)] = null);

(statearr_56604_57269[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (13))){
var inst_56406 = (state_56572[(12)]);
var inst_56489 = (state_56572[(15)]);
var inst_56490 = (state_56572[(16)]);
var _ = (function (){var statearr_56606 = state_56572;
(statearr_56606[(4)] = cljs.core.cons((16),(state_56572[(4)])));

return statearr_56606;
})();
var inst_56481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56483 = [(1),(2)];
var inst_56484 = (new cljs.core.PersistentVector(null,2,(5),inst_56482,inst_56483,null));
var inst_56485 = [inst_56484];
var inst_56486 = (new cljs.core.PersistentVector(null,1,(5),inst_56481,inst_56485,null));
var inst_56487 = cljs.core.deref(inst_56406);
var inst_56488 = (new cljs.core.List(null,inst_56487,null,(1),null));
var inst_56489__$1 = (new cljs.core.List(null,inst_56486,inst_56488,(2),null));
var inst_56490__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56489__$1);
var state_56572__$1 = (function (){var statearr_56607 = state_56572;
(statearr_56607[(15)] = inst_56489__$1);

(statearr_56607[(16)] = inst_56490__$1);

return statearr_56607;
})();
if(cljs.core.truth_(inst_56490__$1)){
var statearr_56608_57275 = state_56572__$1;
(statearr_56608_57275[(1)] = (17));

} else {
var statearr_56609_57276 = state_56572__$1;
(statearr_56609_57276[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (22))){
var inst_56406 = (state_56572[(12)]);
var inst_56543 = (state_56572[(10)]);
var inst_56544 = (state_56572[(17)]);
var _ = (function (){var statearr_56610 = state_56572;
(statearr_56610[(4)] = cljs.core.cons((25),(state_56572[(4)])));

return statearr_56610;
})();
var inst_56532 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56533 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56534 = [(1),(2)];
var inst_56535 = (new cljs.core.PersistentVector(null,2,(5),inst_56533,inst_56534,null));
var inst_56536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56537 = [(3)];
var inst_56538 = (new cljs.core.PersistentVector(null,1,(5),inst_56536,inst_56537,null));
var inst_56539 = [inst_56535,inst_56538];
var inst_56540 = (new cljs.core.PersistentVector(null,2,(5),inst_56532,inst_56539,null));
var inst_56541 = cljs.core.deref(inst_56406);
var inst_56542 = (new cljs.core.List(null,inst_56541,null,(1),null));
var inst_56543__$1 = (new cljs.core.List(null,inst_56540,inst_56542,(2),null));
var inst_56544__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56543__$1);
var state_56572__$1 = (function (){var statearr_56611 = state_56572;
(statearr_56611[(10)] = inst_56543__$1);

(statearr_56611[(17)] = inst_56544__$1);

return statearr_56611;
})();
if(cljs.core.truth_(inst_56544__$1)){
var statearr_56612_57278 = state_56572__$1;
(statearr_56612_57278[(1)] = (26));

} else {
var statearr_56613_57279 = state_56572__$1;
(statearr_56613_57279[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (6))){
var inst_56417 = (state_56572[(7)]);
var inst_56463 = (state_56572[(2)]);
var inst_56464 = (inst_56417.cljs$core$IFn$_invoke$arity$0 ? inst_56417.cljs$core$IFn$_invoke$arity$0() : inst_56417.call(null));
var inst_56465 = cljs.core.async.timeout((20));
var state_56572__$1 = (function (){var statearr_56615 = state_56572;
(statearr_56615[(18)] = inst_56463);

(statearr_56615[(19)] = inst_56464);

return statearr_56615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56572__$1,(12),inst_56465);
} else {
if((state_val_56573 === (28))){
var inst_56544 = (state_56572[(17)]);
var inst_56566 = (state_56572[(2)]);
var _ = (function (){var statearr_56616 = state_56572;
(statearr_56616[(4)] = cljs.core.rest((state_56572[(4)])));

return statearr_56616;
})();
var state_56572__$1 = (function (){var statearr_56617 = state_56572;
(statearr_56617[(20)] = inst_56566);

return statearr_56617;
})();
var statearr_56618_57283 = state_56572__$1;
(statearr_56618_57283[(2)] = inst_56544);

(statearr_56618_57283[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (25))){
var _ = (function (){var statearr_56619 = state_56572;
(statearr_56619[(4)] = cljs.core.rest((state_56572[(4)])));

return statearr_56619;
})();
var state_56572__$1 = state_56572;
var ex56614 = (state_56572__$1[(2)]);
var statearr_56620_57284 = state_56572__$1;
(statearr_56620_57284[(5)] = ex56614);


var statearr_56621_57285 = state_56572__$1;
(statearr_56621_57285[(1)] = (24));

(statearr_56621_57285[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (17))){
var inst_56489 = (state_56572[(15)]);
var inst_56492 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56493 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56494 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56495 = cljs.core.cons(inst_56494,inst_56489);
var inst_56496 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56493,24,inst_56495,"Manual flush should flush all items"];
var inst_56497 = cljs.core.PersistentHashMap.fromArrays(inst_56492,inst_56496);
var inst_56498 = cljs.test.report.call(null,inst_56497);
var state_56572__$1 = state_56572;
var statearr_56622_57286 = state_56572__$1;
(statearr_56622_57286[(2)] = inst_56498);

(statearr_56622_57286[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (3))){
var inst_56421 = (state_56572[(2)]);
var inst_56422 = cljs.core.async.timeout((20));
var state_56572__$1 = (function (){var statearr_56625 = state_56572;
(statearr_56625[(21)] = inst_56421);

return statearr_56625;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56572__$1,(4),inst_56422);
} else {
if((state_val_56573 === (12))){
var inst_56467 = (state_56572[(2)]);
var state_56572__$1 = (function (){var statearr_56626 = state_56572;
(statearr_56626[(22)] = inst_56467);

return statearr_56626;
})();
var statearr_56628_57287 = state_56572__$1;
(statearr_56628_57287[(2)] = null);

(statearr_56628_57287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (2))){
var inst_56404 = (state_56572[(11)]);
var inst_56419 = (state_56572[(2)]);
var state_56572__$1 = (function (){var statearr_56631 = state_56572;
(statearr_56631[(23)] = inst_56419);

return statearr_56631;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56572__$1,(3),inst_56404,(2));
} else {
if((state_val_56573 === (23))){
var inst_56569 = (state_56572[(2)]);
var inst_56570 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56572__$1 = (function (){var statearr_56632 = state_56572;
(statearr_56632[(24)] = inst_56569);

return statearr_56632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56572__$1,inst_56570);
} else {
if((state_val_56573 === (19))){
var inst_56490 = (state_56572[(16)]);
var inst_56511 = (state_56572[(2)]);
var _ = (function (){var statearr_56638 = state_56572;
(statearr_56638[(4)] = cljs.core.rest((state_56572[(4)])));

return statearr_56638;
})();
var state_56572__$1 = (function (){var statearr_56639 = state_56572;
(statearr_56639[(25)] = inst_56511);

return statearr_56639;
})();
var statearr_56641_57288 = state_56572__$1;
(statearr_56641_57288[(2)] = inst_56490);

(statearr_56641_57288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (11))){
var inst_56439 = (state_56572[(26)]);
var inst_56460 = (state_56572[(2)]);
var _ = (function (){var statearr_56642 = state_56572;
(statearr_56642[(4)] = cljs.core.rest((state_56572[(4)])));

return statearr_56642;
})();
var state_56572__$1 = (function (){var statearr_56643 = state_56572;
(statearr_56643[(27)] = inst_56460);

return statearr_56643;
})();
var statearr_56645_57289 = state_56572__$1;
(statearr_56645_57289[(2)] = inst_56439);

(statearr_56645_57289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (9))){
var inst_56438 = (state_56572[(28)]);
var inst_56441 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56442 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56443 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56444 = cljs.core.cons(inst_56443,inst_56438);
var inst_56445 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56442,19,inst_56444,"Buffer should not flush automatically without timer"];
var inst_56446 = cljs.core.PersistentHashMap.fromArrays(inst_56441,inst_56445);
var inst_56447 = cljs.test.report.call(null,inst_56446);
var state_56572__$1 = state_56572;
var statearr_56646_57290 = state_56572__$1;
(statearr_56646_57290[(2)] = inst_56447);

(statearr_56646_57290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (5))){
var inst_56406 = (state_56572[(12)]);
var inst_56438 = (state_56572[(28)]);
var inst_56439 = (state_56572[(26)]);
var _ = (function (){var statearr_56653 = state_56572;
(statearr_56653[(4)] = cljs.core.cons((8),(state_56572[(4)])));

return statearr_56653;
})();
var inst_56437 = cljs.core.deref(inst_56406);
var inst_56438__$1 = (new cljs.core.List(null,inst_56437,null,(1),null));
var inst_56439__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56438__$1);
var state_56572__$1 = (function (){var statearr_56654 = state_56572;
(statearr_56654[(28)] = inst_56438__$1);

(statearr_56654[(26)] = inst_56439__$1);

return statearr_56654;
})();
if(cljs.core.truth_(inst_56439__$1)){
var statearr_56655_57294 = state_56572__$1;
(statearr_56655_57294[(1)] = (9));

} else {
var statearr_56657_57296 = state_56572__$1;
(statearr_56657_57296[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (14))){
var inst_56404 = (state_56572[(11)]);
var inst_56514 = (state_56572[(2)]);
var state_56572__$1 = (function (){var statearr_56663 = state_56572;
(statearr_56663[(29)] = inst_56514);

return statearr_56663;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56572__$1,(20),inst_56404,(3));
} else {
if((state_val_56573 === (26))){
var inst_56543 = (state_56572[(10)]);
var inst_56546 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56547 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56548 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56549 = cljs.core.cons(inst_56548,inst_56543);
var inst_56550 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56547,29,inst_56549,"Subsequent flush should work"];
var inst_56551 = cljs.core.PersistentHashMap.fromArrays(inst_56546,inst_56550);
var inst_56552 = cljs.test.report.call(null,inst_56551);
var state_56572__$1 = state_56572;
var statearr_56666_57297 = state_56572__$1;
(statearr_56666_57297[(2)] = inst_56552);

(statearr_56666_57297[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (16))){
var _ = (function (){var statearr_56668 = state_56572;
(statearr_56668[(4)] = cljs.core.rest((state_56572[(4)])));

return statearr_56668;
})();
var state_56572__$1 = state_56572;
var ex56658 = (state_56572__$1[(2)]);
var statearr_56671_57298 = state_56572__$1;
(statearr_56671_57298[(5)] = ex56658);


var statearr_56672_57300 = state_56572__$1;
(statearr_56672_57300[(1)] = (15));

(statearr_56672_57300[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (10))){
var inst_56438 = (state_56572[(28)]);
var inst_56449 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56450 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56451 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56452 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56453 = cljs.core.cons(inst_56452,inst_56438);
var inst_56454 = (new cljs.core.List(null,inst_56453,null,(1),null));
var inst_56455 = (new cljs.core.List(null,inst_56451,inst_56454,(2),null));
var inst_56456 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56450,19,inst_56455,"Buffer should not flush automatically without timer"];
var inst_56457 = cljs.core.PersistentHashMap.fromArrays(inst_56449,inst_56456);
var inst_56458 = cljs.test.report.call(null,inst_56457);
var state_56572__$1 = state_56572;
var statearr_56700_57303 = state_56572__$1;
(statearr_56700_57303[(2)] = inst_56458);

(statearr_56700_57303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (18))){
var inst_56489 = (state_56572[(15)]);
var inst_56500 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56501 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56502 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56503 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56504 = cljs.core.cons(inst_56503,inst_56489);
var inst_56505 = (new cljs.core.List(null,inst_56504,null,(1),null));
var inst_56506 = (new cljs.core.List(null,inst_56502,inst_56505,(2),null));
var inst_56507 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56501,24,inst_56506,"Manual flush should flush all items"];
var inst_56508 = cljs.core.PersistentHashMap.fromArrays(inst_56500,inst_56507);
var inst_56509 = cljs.test.report.call(null,inst_56508);
var state_56572__$1 = state_56572;
var statearr_56701_57304 = state_56572__$1;
(statearr_56701_57304[(2)] = inst_56509);

(statearr_56701_57304[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56573 === (8))){
var _ = (function (){var statearr_56702 = state_56572;
(statearr_56702[(4)] = cljs.core.rest((state_56572[(4)])));

return statearr_56702;
})();
var state_56572__$1 = state_56572;
var ex56673 = (state_56572__$1[(2)]);
var statearr_56703_57305 = state_56572__$1;
(statearr_56703_57305[(5)] = ex56673);


var statearr_56704_57306 = state_56572__$1;
(statearr_56704_57306[(1)] = (7));

(statearr_56704_57306[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0 = (function (){
var statearr_56707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56707[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__);

(statearr_56707[(1)] = (1));

return statearr_56707;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1 = (function (state_56572){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_56572);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e56728){var ex__32350__auto__ = e56728;
var statearr_56729_57307 = state_56572;
(statearr_56729_57307[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_56572[(4)]))){
var statearr_56730_57308 = state_56572;
(statearr_56730_57308[(1)] = cljs.core.first((state_56572[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57309 = state_56572;
state_56572 = G__57309;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = function(state_56572){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1.call(this,state_56572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_56733 = f__32418__auto__();
(statearr_56733[(6)] = c__32417__auto__);

return statearr_56733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));

return c__32417__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56375","meta56375",775966565,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56374");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56374");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56374.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56374 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56374(meta56375){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374(meta56375));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56374(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738 = (function (meta56739){
this.meta56739 = meta56739;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56740,meta56739__$1){
var self__ = this;
var _56740__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738(meta56739__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56740){
var self__ = this;
var _56740__$1 = this;
return self__.meta56739;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56742 = (arguments.length - (1));
switch (G__56742) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738.prototype.apply = (function (self__,args56741){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56741)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_56952){
var state_val_56953 = (state_56952[(1)]);
if((state_val_56953 === (7))){
var inst_56758 = (state_56952[(2)]);
var inst_56759 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56760 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56761 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56760,47,inst_56758,"Should not flush before timeout"];
var inst_56762 = cljs.core.PersistentHashMap.fromArrays(inst_56759,inst_56761);
var inst_56763 = cljs.test.report.call(null,inst_56762);
var state_56952__$1 = state_56952;
var statearr_56955_57316 = state_56952__$1;
(statearr_56955_57316[(2)] = inst_56763);

(statearr_56955_57316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (20))){
var inst_56845 = (state_56952[(2)]);
var inst_56846 = cljs.core.async.timeout((50));
var state_56952__$1 = (function (){var statearr_56956 = state_56952;
(statearr_56956[(7)] = inst_56845);

return statearr_56956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56952__$1,(21),inst_56846);
} else {
if((state_val_56953 === (27))){
var _ = (function (){var statearr_56957 = state_56952;
(statearr_56957[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_56957;
})();
var state_56952__$1 = state_56952;
var ex56954 = (state_56952__$1[(2)]);
var statearr_56958_57317 = state_56952__$1;
(statearr_56958_57317[(5)] = ex56954);


var statearr_56959_57319 = state_56952__$1;
(statearr_56959_57319[(1)] = (26));

(statearr_56959_57319[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (1))){
var inst_56743 = (state_56952[(8)]);
var inst_56745 = (state_56952[(9)]);
var inst_56743__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56744 = cljs.core.PersistentVector.EMPTY;
var inst_56745__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56744);
var inst_56746 = (function (){var input_ch = inst_56743__$1;
var results = inst_56745__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56747 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56748 = [inst_56743__$1,(100),inst_56746];
var inst_56749 = cljs.core.PersistentHashMap.fromArrays(inst_56747,inst_56748);
var inst_56750 = bb_web_ds_tools.components.async_buffer.create(inst_56749);
var state_56952__$1 = (function (){var statearr_56971 = state_56952;
(statearr_56971[(8)] = inst_56743__$1);

(statearr_56971[(9)] = inst_56745__$1);

(statearr_56971[(10)] = inst_56750);

return statearr_56971;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56952__$1,(2),inst_56743__$1,(1));
} else {
if((state_val_56953 === (24))){
var inst_56745 = (state_56952[(9)]);
var inst_56873 = (state_56952[(11)]);
var inst_56874 = (state_56952[(12)]);
var _ = (function (){var statearr_56972 = state_56952;
(statearr_56972[(4)] = cljs.core.cons((27),(state_56952[(4)])));

return statearr_56972;
})();
var inst_56865 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56866 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56867 = [(1),(2)];
var inst_56868 = (new cljs.core.PersistentVector(null,2,(5),inst_56866,inst_56867,null));
var inst_56869 = [inst_56868];
var inst_56870 = (new cljs.core.PersistentVector(null,1,(5),inst_56865,inst_56869,null));
var inst_56871 = cljs.core.deref(inst_56745);
var inst_56872 = (new cljs.core.List(null,inst_56871,null,(1),null));
var inst_56873__$1 = (new cljs.core.List(null,inst_56870,inst_56872,(2),null));
var inst_56874__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56873__$1);
var state_56952__$1 = (function (){var statearr_56973 = state_56952;
(statearr_56973[(11)] = inst_56873__$1);

(statearr_56973[(12)] = inst_56874__$1);

return statearr_56973;
})();
if(cljs.core.truth_(inst_56874__$1)){
var statearr_56974_57321 = state_56952__$1;
(statearr_56974_57321[(1)] = (28));

} else {
var statearr_56975_57322 = state_56952__$1;
(statearr_56975_57322[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (4))){
var inst_56757 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_56976 = state_56952;
(statearr_56976[(13)] = inst_56757);

return statearr_56976;
})();
var statearr_56977_57323 = state_56952__$1;
(statearr_56977_57323[(2)] = null);

(statearr_56977_57323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (15))){
var inst_56799 = (state_56952[(2)]);
var inst_56800 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56801 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56802 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56801,50,inst_56799,"Should flush after timeout"];
var inst_56803 = cljs.core.PersistentHashMap.fromArrays(inst_56800,inst_56802);
var inst_56804 = cljs.test.report.call(null,inst_56803);
var state_56952__$1 = state_56952;
var statearr_56978_57325 = state_56952__$1;
(statearr_56978_57325[(2)] = inst_56804);

(statearr_56978_57325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (21))){
var inst_56743 = (state_56952[(8)]);
var inst_56848 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_56983 = state_56952;
(statearr_56983[(14)] = inst_56848);

return statearr_56983;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56952__$1,(22),inst_56743,(4));
} else {
if((state_val_56953 === (31))){
var inst_56901 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_56984 = state_56952;
(statearr_56984[(15)] = inst_56901);

return statearr_56984;
})();
var statearr_56985_57328 = state_56952__$1;
(statearr_56985_57328[(2)] = null);

(statearr_56985_57328[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (32))){
var inst_56745 = (state_56952[(9)]);
var inst_56924 = (state_56952[(16)]);
var inst_56925 = (state_56952[(17)]);
var _ = (function (){var statearr_56989 = state_56952;
(statearr_56989[(4)] = cljs.core.cons((35),(state_56952[(4)])));

return statearr_56989;
})();
var inst_56913 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56915 = [(1),(2)];
var inst_56916 = (new cljs.core.PersistentVector(null,2,(5),inst_56914,inst_56915,null));
var inst_56917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56918 = [(3),(4)];
var inst_56919 = (new cljs.core.PersistentVector(null,2,(5),inst_56917,inst_56918,null));
var inst_56920 = [inst_56916,inst_56919];
var inst_56921 = (new cljs.core.PersistentVector(null,2,(5),inst_56913,inst_56920,null));
var inst_56922 = cljs.core.deref(inst_56745);
var inst_56923 = (new cljs.core.List(null,inst_56922,null,(1),null));
var inst_56924__$1 = (new cljs.core.List(null,inst_56921,inst_56923,(2),null));
var inst_56925__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56924__$1);
var state_56952__$1 = (function (){var statearr_56994 = state_56952;
(statearr_56994[(16)] = inst_56924__$1);

(statearr_56994[(17)] = inst_56925__$1);

return statearr_56994;
})();
if(cljs.core.truth_(inst_56925__$1)){
var statearr_56996_57330 = state_56952__$1;
(statearr_56996_57330[(1)] = (36));

} else {
var statearr_56997_57331 = state_56952__$1;
(statearr_56997_57331[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (33))){
var inst_56949 = (state_56952[(2)]);
var inst_56950 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56952__$1 = (function (){var statearr_56998 = state_56952;
(statearr_56998[(18)] = inst_56949);

return statearr_56998;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56952__$1,inst_56950);
} else {
if((state_val_56953 === (13))){
var inst_56745 = (state_56952[(9)]);
var inst_56818 = (state_56952[(19)]);
var inst_56819 = (state_56952[(20)]);
var _ = (function (){var statearr_57000 = state_56952;
(statearr_57000[(4)] = cljs.core.cons((16),(state_56952[(4)])));

return statearr_57000;
})();
var inst_56810 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56811 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56812 = [(1),(2)];
var inst_56813 = (new cljs.core.PersistentVector(null,2,(5),inst_56811,inst_56812,null));
var inst_56814 = [inst_56813];
var inst_56815 = (new cljs.core.PersistentVector(null,1,(5),inst_56810,inst_56814,null));
var inst_56816 = cljs.core.deref(inst_56745);
var inst_56817 = (new cljs.core.List(null,inst_56816,null,(1),null));
var inst_56818__$1 = (new cljs.core.List(null,inst_56815,inst_56817,(2),null));
var inst_56819__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56818__$1);
var state_56952__$1 = (function (){var statearr_57002 = state_56952;
(statearr_57002[(19)] = inst_56818__$1);

(statearr_57002[(20)] = inst_56819__$1);

return statearr_57002;
})();
if(cljs.core.truth_(inst_56819__$1)){
var statearr_57003_57333 = state_56952__$1;
(statearr_57003_57333[(1)] = (17));

} else {
var statearr_57004_57334 = state_56952__$1;
(statearr_57004_57334[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (22))){
var inst_56850 = (state_56952[(2)]);
var inst_56851 = cljs.core.async.timeout((20));
var state_56952__$1 = (function (){var statearr_57005 = state_56952;
(statearr_57005[(21)] = inst_56850);

return statearr_57005;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56952__$1,(23),inst_56851);
} else {
if((state_val_56953 === (36))){
var inst_56924 = (state_56952[(16)]);
var inst_56927 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56928 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56929 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56930 = cljs.core.cons(inst_56929,inst_56924);
var inst_56931 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56928,60,inst_56930,"Should flush 3,4 after timeout from first message"];
var inst_56932 = cljs.core.PersistentHashMap.fromArrays(inst_56927,inst_56931);
var inst_56933 = cljs.test.report.call(null,inst_56932);
var state_56952__$1 = state_56952;
var statearr_57006_57335 = state_56952__$1;
(statearr_57006_57335[(2)] = inst_56933);

(statearr_57006_57335[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (29))){
var inst_56873 = (state_56952[(11)]);
var inst_56884 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56885 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56886 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56887 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56888 = cljs.core.cons(inst_56887,inst_56873);
var inst_56889 = (new cljs.core.List(null,inst_56888,null,(1),null));
var inst_56890 = (new cljs.core.List(null,inst_56886,inst_56889,(2),null));
var inst_56891 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56885,57,inst_56890,"Should not flush 3,4 yet"];
var inst_56892 = cljs.core.PersistentHashMap.fromArrays(inst_56884,inst_56891);
var inst_56893 = cljs.test.report.call(null,inst_56892);
var state_56952__$1 = state_56952;
var statearr_57007_57336 = state_56952__$1;
(statearr_57007_57336[(2)] = inst_56893);

(statearr_57007_57336[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (6))){
var inst_56795 = (state_56952[(2)]);
var inst_56796 = cljs.core.async.timeout((100));
var state_56952__$1 = (function (){var statearr_57008 = state_56952;
(statearr_57008[(22)] = inst_56795);

return statearr_57008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56952__$1,(12),inst_56796);
} else {
if((state_val_56953 === (28))){
var inst_56873 = (state_56952[(11)]);
var inst_56876 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56877 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56878 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56879 = cljs.core.cons(inst_56878,inst_56873);
var inst_56880 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56877,57,inst_56879,"Should not flush 3,4 yet"];
var inst_56881 = cljs.core.PersistentHashMap.fromArrays(inst_56876,inst_56880);
var inst_56882 = cljs.test.report.call(null,inst_56881);
var state_56952__$1 = state_56952;
var statearr_57009_57337 = state_56952__$1;
(statearr_57009_57337[(2)] = inst_56882);

(statearr_57009_57337[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (25))){
var inst_56898 = (state_56952[(2)]);
var inst_56899 = cljs.core.async.timeout((80));
var state_56952__$1 = (function (){var statearr_57010 = state_56952;
(statearr_57010[(23)] = inst_56898);

return statearr_57010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56952__$1,(31),inst_56899);
} else {
if((state_val_56953 === (34))){
var inst_56902 = (state_56952[(2)]);
var inst_56903 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56904 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56905 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56904,60,inst_56902,"Should flush 3,4 after timeout from first message"];
var inst_56906 = cljs.core.PersistentHashMap.fromArrays(inst_56903,inst_56905);
var inst_56907 = cljs.test.report.call(null,inst_56906);
var state_56952__$1 = state_56952;
var statearr_57011_57340 = state_56952__$1;
(statearr_57011_57340[(2)] = inst_56907);

(statearr_57011_57340[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (17))){
var inst_56818 = (state_56952[(19)]);
var inst_56821 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56822 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56823 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56824 = cljs.core.cons(inst_56823,inst_56818);
var inst_56825 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56822,50,inst_56824,"Should flush after timeout"];
var inst_56826 = cljs.core.PersistentHashMap.fromArrays(inst_56821,inst_56825);
var inst_56827 = cljs.test.report.call(null,inst_56826);
var state_56952__$1 = state_56952;
var statearr_57012_57344 = state_56952__$1;
(statearr_57012_57344[(2)] = inst_56827);

(statearr_57012_57344[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (3))){
var inst_56754 = (state_56952[(2)]);
var inst_56755 = cljs.core.async.timeout((50));
var state_56952__$1 = (function (){var statearr_57013 = state_56952;
(statearr_57013[(24)] = inst_56754);

return statearr_57013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56952__$1,(4),inst_56755);
} else {
if((state_val_56953 === (12))){
var inst_56798 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_57014 = state_56952;
(statearr_57014[(25)] = inst_56798);

return statearr_57014;
})();
var statearr_57015_57346 = state_56952__$1;
(statearr_57015_57346[(2)] = null);

(statearr_57015_57346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (2))){
var inst_56743 = (state_56952[(8)]);
var inst_56752 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_57023 = state_56952;
(statearr_57023[(26)] = inst_56752);

return statearr_57023;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56952__$1,(3),inst_56743,(2));
} else {
if((state_val_56953 === (23))){
var inst_56853 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_57024 = state_56952;
(statearr_57024[(27)] = inst_56853);

return statearr_57024;
})();
var statearr_57025_57347 = state_56952__$1;
(statearr_57025_57347[(2)] = null);

(statearr_57025_57347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (35))){
var _ = (function (){var statearr_57026 = state_56952;
(statearr_57026[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57026;
})();
var state_56952__$1 = state_56952;
var ex57016 = (state_56952__$1[(2)]);
var statearr_57027_57350 = state_56952__$1;
(statearr_57027_57350[(5)] = ex57016);


var statearr_57028_57351 = state_56952__$1;
(statearr_57028_57351[(1)] = (34));

(statearr_57028_57351[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (19))){
var inst_56819 = (state_56952[(20)]);
var inst_56840 = (state_56952[(2)]);
var _ = (function (){var statearr_57029 = state_56952;
(statearr_57029[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57029;
})();
var state_56952__$1 = (function (){var statearr_57030 = state_56952;
(statearr_57030[(28)] = inst_56840);

return statearr_57030;
})();
var statearr_57037_57352 = state_56952__$1;
(statearr_57037_57352[(2)] = inst_56819);

(statearr_57037_57352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (11))){
var inst_56771 = (state_56952[(29)]);
var inst_56792 = (state_56952[(2)]);
var _ = (function (){var statearr_57038 = state_56952;
(statearr_57038[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57038;
})();
var state_56952__$1 = (function (){var statearr_57039 = state_56952;
(statearr_57039[(30)] = inst_56792);

return statearr_57039;
})();
var statearr_57042_57353 = state_56952__$1;
(statearr_57042_57353[(2)] = inst_56771);

(statearr_57042_57353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (9))){
var inst_56770 = (state_56952[(31)]);
var inst_56773 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56774 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56775 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56776 = cljs.core.cons(inst_56775,inst_56770);
var inst_56777 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56774,47,inst_56776,"Should not flush before timeout"];
var inst_56778 = cljs.core.PersistentHashMap.fromArrays(inst_56773,inst_56777);
var inst_56779 = cljs.test.report.call(null,inst_56778);
var state_56952__$1 = state_56952;
var statearr_57047_57354 = state_56952__$1;
(statearr_57047_57354[(2)] = inst_56779);

(statearr_57047_57354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (5))){
var inst_56745 = (state_56952[(9)]);
var inst_56770 = (state_56952[(31)]);
var inst_56771 = (state_56952[(29)]);
var _ = (function (){var statearr_57048 = state_56952;
(statearr_57048[(4)] = cljs.core.cons((8),(state_56952[(4)])));

return statearr_57048;
})();
var inst_56769 = cljs.core.deref(inst_56745);
var inst_56770__$1 = (new cljs.core.List(null,inst_56769,null,(1),null));
var inst_56771__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56770__$1);
var state_56952__$1 = (function (){var statearr_57049 = state_56952;
(statearr_57049[(31)] = inst_56770__$1);

(statearr_57049[(29)] = inst_56771__$1);

return statearr_57049;
})();
if(cljs.core.truth_(inst_56771__$1)){
var statearr_57051_57355 = state_56952__$1;
(statearr_57051_57355[(1)] = (9));

} else {
var statearr_57053_57356 = state_56952__$1;
(statearr_57053_57356[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (14))){
var inst_56743 = (state_56952[(8)]);
var inst_56843 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_57057 = state_56952;
(statearr_57057[(32)] = inst_56843);

return statearr_57057;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56952__$1,(20),inst_56743,(3));
} else {
if((state_val_56953 === (26))){
var inst_56854 = (state_56952[(2)]);
var inst_56855 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56856 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56857 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56856,57,inst_56854,"Should not flush 3,4 yet"];
var inst_56858 = cljs.core.PersistentHashMap.fromArrays(inst_56855,inst_56857);
var inst_56859 = cljs.test.report.call(null,inst_56858);
var state_56952__$1 = state_56952;
var statearr_57059_57357 = state_56952__$1;
(statearr_57059_57357[(2)] = inst_56859);

(statearr_57059_57357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (16))){
var _ = (function (){var statearr_57061 = state_56952;
(statearr_57061[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57061;
})();
var state_56952__$1 = state_56952;
var ex57055 = (state_56952__$1[(2)]);
var statearr_57065_57358 = state_56952__$1;
(statearr_57065_57358[(5)] = ex57055);


var statearr_57066_57359 = state_56952__$1;
(statearr_57066_57359[(1)] = (15));

(statearr_57066_57359[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (38))){
var inst_56925 = (state_56952[(17)]);
var inst_56946 = (state_56952[(2)]);
var _ = (function (){var statearr_57067 = state_56952;
(statearr_57067[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57067;
})();
var state_56952__$1 = (function (){var statearr_57068 = state_56952;
(statearr_57068[(33)] = inst_56946);

return statearr_57068;
})();
var statearr_57070_57360 = state_56952__$1;
(statearr_57070_57360[(2)] = inst_56925);

(statearr_57070_57360[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (30))){
var inst_56874 = (state_56952[(12)]);
var inst_56895 = (state_56952[(2)]);
var _ = (function (){var statearr_57071 = state_56952;
(statearr_57071[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57071;
})();
var state_56952__$1 = (function (){var statearr_57072 = state_56952;
(statearr_57072[(34)] = inst_56895);

return statearr_57072;
})();
var statearr_57073_57361 = state_56952__$1;
(statearr_57073_57361[(2)] = inst_56874);

(statearr_57073_57361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (10))){
var inst_56770 = (state_56952[(31)]);
var inst_56781 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56782 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56783 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56784 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56785 = cljs.core.cons(inst_56784,inst_56770);
var inst_56786 = (new cljs.core.List(null,inst_56785,null,(1),null));
var inst_56787 = (new cljs.core.List(null,inst_56783,inst_56786,(2),null));
var inst_56788 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56782,47,inst_56787,"Should not flush before timeout"];
var inst_56789 = cljs.core.PersistentHashMap.fromArrays(inst_56781,inst_56788);
var inst_56790 = cljs.test.report.call(null,inst_56789);
var state_56952__$1 = state_56952;
var statearr_57075_57362 = state_56952__$1;
(statearr_57075_57362[(2)] = inst_56790);

(statearr_57075_57362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (18))){
var inst_56818 = (state_56952[(19)]);
var inst_56829 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56830 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56831 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56832 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56833 = cljs.core.cons(inst_56832,inst_56818);
var inst_56834 = (new cljs.core.List(null,inst_56833,null,(1),null));
var inst_56835 = (new cljs.core.List(null,inst_56831,inst_56834,(2),null));
var inst_56836 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56830,50,inst_56835,"Should flush after timeout"];
var inst_56837 = cljs.core.PersistentHashMap.fromArrays(inst_56829,inst_56836);
var inst_56838 = cljs.test.report.call(null,inst_56837);
var state_56952__$1 = state_56952;
var statearr_57082_57365 = state_56952__$1;
(statearr_57082_57365[(2)] = inst_56838);

(statearr_57082_57365[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (37))){
var inst_56924 = (state_56952[(16)]);
var inst_56935 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56936 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56937 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56938 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56939 = cljs.core.cons(inst_56938,inst_56924);
var inst_56940 = (new cljs.core.List(null,inst_56939,null,(1),null));
var inst_56941 = (new cljs.core.List(null,inst_56937,inst_56940,(2),null));
var inst_56942 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56936,60,inst_56941,"Should flush 3,4 after timeout from first message"];
var inst_56943 = cljs.core.PersistentHashMap.fromArrays(inst_56935,inst_56942);
var inst_56944 = cljs.test.report.call(null,inst_56943);
var state_56952__$1 = state_56952;
var statearr_57083_57366 = state_56952__$1;
(statearr_57083_57366[(2)] = inst_56944);

(statearr_57083_57366[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (8))){
var _ = (function (){var statearr_57086 = state_56952;
(statearr_57086[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57086;
})();
var state_56952__$1 = state_56952;
var ex57076 = (state_56952__$1[(2)]);
var statearr_57087_57367 = state_56952__$1;
(statearr_57087_57367[(5)] = ex57076);


var statearr_57091_57368 = state_56952__$1;
(statearr_57091_57368[(1)] = (7));

(statearr_57091_57368[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0 = (function (){
var statearr_57099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57099[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__);

(statearr_57099[(1)] = (1));

return statearr_57099;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1 = (function (state_56952){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_56952);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e57100){var ex__32350__auto__ = e57100;
var statearr_57101_57370 = state_56952;
(statearr_57101_57370[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_56952[(4)]))){
var statearr_57102_57371 = state_56952;
(statearr_57102_57371[(1)] = cljs.core.first((state_56952[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57372 = state_56952;
state_56952 = G__57372;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = function(state_56952){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1.call(this,state_56952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_57103 = f__32418__auto__();
(statearr_57103[(6)] = c__32417__auto__);

return statearr_57103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));

return c__32417__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56739","meta56739",1994357408,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56738");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56738");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56738.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56738 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56738(meta56739){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738(meta56739));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56738(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106 = (function (meta57107){
this.meta57107 = meta57107;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57108,meta57107__$1){
var self__ = this;
var _57108__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106(meta57107__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57108){
var self__ = this;
var _57108__$1 = this;
return self__.meta57107;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57112 = (arguments.length - (1));
switch (G__57112) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106.prototype.apply = (function (self__,args57109){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57109)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_57186){
var state_val_57187 = (state_57186[(1)]);
if((state_val_57187 === (7))){
var inst_57133 = (state_57186[(2)]);
var inst_57135 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57136 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57137 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_57136,78,inst_57133,"Closing input should flush remaining"];
var inst_57138 = cljs.core.PersistentHashMap.fromArrays(inst_57135,inst_57137);
var inst_57139 = cljs.test.report.call(null,inst_57138);
var state_57186__$1 = state_57186;
var statearr_57192_57375 = state_57186__$1;
(statearr_57192_57375[(2)] = inst_57139);

(statearr_57192_57375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (1))){
var inst_57116 = (state_57186[(7)]);
var inst_57119 = (state_57186[(8)]);
var inst_57116__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_57118 = cljs.core.PersistentVector.EMPTY;
var inst_57119__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_57118);
var inst_57120 = (function (){var input_ch = inst_57116__$1;
var results = inst_57119__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_57121 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_57122 = [inst_57116__$1,inst_57120];
var inst_57123 = cljs.core.PersistentHashMap.fromArrays(inst_57121,inst_57122);
var inst_57124 = bb_web_ds_tools.components.async_buffer.create(inst_57123);
var state_57186__$1 = (function (){var statearr_57196 = state_57186;
(statearr_57196[(7)] = inst_57116__$1);

(statearr_57196[(8)] = inst_57119__$1);

(statearr_57196[(9)] = inst_57124);

return statearr_57196;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57186__$1,(2),inst_57116__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_57187 === (4))){
var inst_57132 = (state_57186[(2)]);
var state_57186__$1 = (function (){var statearr_57197 = state_57186;
(statearr_57197[(10)] = inst_57132);

return statearr_57197;
})();
var statearr_57198_57380 = state_57186__$1;
(statearr_57198_57380[(2)] = null);

(statearr_57198_57380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (6))){
var inst_57183 = (state_57186[(2)]);
var inst_57184 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_57186__$1 = (function (){var statearr_57199 = state_57186;
(statearr_57199[(11)] = inst_57183);

return statearr_57199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57186__$1,inst_57184);
} else {
if((state_val_57187 === (3))){
var inst_57116 = (state_57186[(7)]);
var inst_57128 = (state_57186[(2)]);
var inst_57129 = cljs.core.async.close_BANG_(inst_57116);
var inst_57130 = cljs.core.async.timeout((20));
var state_57186__$1 = (function (){var statearr_57201 = state_57186;
(statearr_57201[(12)] = inst_57128);

(statearr_57201[(13)] = inst_57129);

return statearr_57201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57186__$1,(4),inst_57130);
} else {
if((state_val_57187 === (2))){
var inst_57116 = (state_57186[(7)]);
var inst_57126 = (state_57186[(2)]);
var state_57186__$1 = (function (){var statearr_57202 = state_57186;
(statearr_57202[(14)] = inst_57126);

return statearr_57202;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57186__$1,(3),inst_57116,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_57187 === (11))){
var inst_57157 = (state_57186[(15)]);
var inst_57180 = (state_57186[(2)]);
var _ = (function (){var statearr_57206 = state_57186;
(statearr_57206[(4)] = cljs.core.rest((state_57186[(4)])));

return statearr_57206;
})();
var state_57186__$1 = (function (){var statearr_57207 = state_57186;
(statearr_57207[(16)] = inst_57180);

return statearr_57207;
})();
var statearr_57208_57381 = state_57186__$1;
(statearr_57208_57381[(2)] = inst_57157);

(statearr_57208_57381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (9))){
var inst_57156 = (state_57186[(17)]);
var inst_57159 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57160 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57162 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57163 = cljs.core.cons(inst_57162,inst_57156);
var inst_57164 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_57160,78,inst_57163,"Closing input should flush remaining"];
var inst_57165 = cljs.core.PersistentHashMap.fromArrays(inst_57159,inst_57164);
var inst_57166 = cljs.test.report.call(null,inst_57165);
var state_57186__$1 = state_57186;
var statearr_57209_57382 = state_57186__$1;
(statearr_57209_57382[(2)] = inst_57166);

(statearr_57209_57382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (5))){
var inst_57119 = (state_57186[(8)]);
var inst_57156 = (state_57186[(17)]);
var inst_57157 = (state_57186[(15)]);
var _ = (function (){var statearr_57211 = state_57186;
(statearr_57211[(4)] = cljs.core.cons((8),(state_57186[(4)])));

return statearr_57211;
})();
var inst_57148 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57149 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57150 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_57151 = (new cljs.core.PersistentVector(null,2,(5),inst_57149,inst_57150,null));
var inst_57152 = [inst_57151];
var inst_57153 = (new cljs.core.PersistentVector(null,1,(5),inst_57148,inst_57152,null));
var inst_57154 = cljs.core.deref(inst_57119);
var inst_57155 = (new cljs.core.List(null,inst_57154,null,(1),null));
var inst_57156__$1 = (new cljs.core.List(null,inst_57153,inst_57155,(2),null));
var inst_57157__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_57156__$1);
var state_57186__$1 = (function (){var statearr_57213 = state_57186;
(statearr_57213[(17)] = inst_57156__$1);

(statearr_57213[(15)] = inst_57157__$1);

return statearr_57213;
})();
if(cljs.core.truth_(inst_57157__$1)){
var statearr_57214_57385 = state_57186__$1;
(statearr_57214_57385[(1)] = (9));

} else {
var statearr_57215_57386 = state_57186__$1;
(statearr_57215_57386[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (10))){
var inst_57156 = (state_57186[(17)]);
var inst_57169 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57170 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57171 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_57172 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57173 = cljs.core.cons(inst_57172,inst_57156);
var inst_57174 = (new cljs.core.List(null,inst_57173,null,(1),null));
var inst_57175 = (new cljs.core.List(null,inst_57171,inst_57174,(2),null));
var inst_57176 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_57170,78,inst_57175,"Closing input should flush remaining"];
var inst_57177 = cljs.core.PersistentHashMap.fromArrays(inst_57169,inst_57176);
var inst_57178 = cljs.test.report.call(null,inst_57177);
var state_57186__$1 = state_57186;
var statearr_57216_57387 = state_57186__$1;
(statearr_57216_57387[(2)] = inst_57178);

(statearr_57216_57387[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (8))){
var _ = (function (){var statearr_57217 = state_57186;
(statearr_57217[(4)] = cljs.core.rest((state_57186[(4)])));

return statearr_57217;
})();
var state_57186__$1 = state_57186;
var ex57210 = (state_57186__$1[(2)]);
var statearr_57220_57388 = state_57186__$1;
(statearr_57220_57388[(5)] = ex57210);


var statearr_57223_57389 = state_57186__$1;
(statearr_57223_57389[(1)] = (7));

(statearr_57223_57389[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0 = (function (){
var statearr_57224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57224[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__);

(statearr_57224[(1)] = (1));

return statearr_57224;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1 = (function (state_57186){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_57186);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e57227){var ex__32350__auto__ = e57227;
var statearr_57228_57390 = state_57186;
(statearr_57228_57390[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_57186[(4)]))){
var statearr_57230_57391 = state_57186;
(statearr_57230_57391[(1)] = cljs.core.first((state_57186[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57392 = state_57186;
state_57186 = G__57392;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = function(state_57186){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1.call(this,state_57186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_57232 = f__32418__auto__();
(statearr_57232[(6)] = c__32417__auto__);

return statearr_57232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));

return c__32417__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57107","meta57107",1095260239,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57106");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57106");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57106.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test57106 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test57106(meta57107){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106(meta57107));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57106(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
