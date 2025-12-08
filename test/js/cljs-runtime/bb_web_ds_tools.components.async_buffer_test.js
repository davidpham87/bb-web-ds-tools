goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343 = (function (meta56344){
this.meta56344 = meta56344;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56345,meta56344__$1){
var self__ = this;
var _56345__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343(meta56344__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56345){
var self__ = this;
var _56345__$1 = this;
return self__.meta56344;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56347 = (arguments.length - (1));
switch (G__56347) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343.prototype.apply = (function (self__,args56346){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56346)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56510){
var state_val_56515 = (state_56510[(1)]);
if((state_val_56515 === (7))){
var inst_56364 = (state_56510[(2)]);
var inst_56365 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56366 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56367 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56366,19,inst_56364,"Buffer should not flush automatically without timer"];
var inst_56368 = cljs.core.PersistentHashMap.fromArrays(inst_56365,inst_56367);
var inst_56369 = cljs.test.report.call(null,inst_56368);
var state_56510__$1 = state_56510;
var statearr_56518_57139 = state_56510__$1;
(statearr_56518_57139[(2)] = inst_56369);

(statearr_56518_57139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (20))){
var inst_56356 = (state_56510[(7)]);
var inst_56453 = (state_56510[(2)]);
var inst_56454 = (inst_56356.cljs$core$IFn$_invoke$arity$0 ? inst_56356.cljs$core$IFn$_invoke$arity$0() : inst_56356.call(null));
var inst_56455 = cljs.core.async.timeout((20));
var state_56510__$1 = (function (){var statearr_56520 = state_56510;
(statearr_56520[(8)] = inst_56453);

(statearr_56520[(9)] = inst_56454);

return statearr_56520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56510__$1,(21),inst_56455);
} else {
if((state_val_56515 === (27))){
var inst_56480 = (state_56510[(10)]);
var inst_56492 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56493 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56494 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56495 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56496 = cljs.core.cons(inst_56495,inst_56480);
var inst_56497 = (new cljs.core.List(null,inst_56496,null,(1),null));
var inst_56498 = (new cljs.core.List(null,inst_56494,inst_56497,(2),null));
var inst_56499 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56493,29,inst_56498,"Subsequent flush should work"];
var inst_56500 = cljs.core.PersistentHashMap.fromArrays(inst_56492,inst_56499);
var inst_56501 = cljs.test.report.call(null,inst_56500);
var state_56510__$1 = state_56510;
var statearr_56521_57141 = state_56510__$1;
(statearr_56521_57141[(2)] = inst_56501);

(statearr_56521_57141[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (1))){
var inst_56349 = (state_56510[(11)]);
var inst_56351 = (state_56510[(12)]);
var inst_56349__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56350 = cljs.core.PersistentVector.EMPTY;
var inst_56351__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56350);
var inst_56352 = (function (){var input_ch = inst_56349__$1;
var results = inst_56351__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56353 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56354 = [inst_56349__$1,inst_56352];
var inst_56355 = cljs.core.PersistentHashMap.fromArrays(inst_56353,inst_56354);
var inst_56356 = bb_web_ds_tools.components.async_buffer.create(inst_56355);
var state_56510__$1 = (function (){var statearr_56523 = state_56510;
(statearr_56523[(11)] = inst_56349__$1);

(statearr_56523[(12)] = inst_56351__$1);

(statearr_56523[(7)] = inst_56356);

return statearr_56523;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56510__$1,(2),inst_56349__$1,(1));
} else {
if((state_val_56515 === (24))){
var inst_56458 = (state_56510[(2)]);
var inst_56459 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56460 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56461 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56460,29,inst_56458,"Subsequent flush should work"];
var inst_56462 = cljs.core.PersistentHashMap.fromArrays(inst_56459,inst_56461);
var inst_56463 = cljs.test.report.call(null,inst_56462);
var state_56510__$1 = state_56510;
var statearr_56528_57142 = state_56510__$1;
(statearr_56528_57142[(2)] = inst_56463);

(statearr_56528_57142[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (4))){
var inst_56363 = (state_56510[(2)]);
var state_56510__$1 = (function (){var statearr_56530 = state_56510;
(statearr_56530[(13)] = inst_56363);

return statearr_56530;
})();
var statearr_56533_57143 = state_56510__$1;
(statearr_56533_57143[(2)] = null);

(statearr_56533_57143[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (15))){
var inst_56407 = (state_56510[(2)]);
var inst_56408 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56409 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56410 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56409,24,inst_56407,"Manual flush should flush all items"];
var inst_56411 = cljs.core.PersistentHashMap.fromArrays(inst_56408,inst_56410);
var inst_56412 = cljs.test.report.call(null,inst_56411);
var state_56510__$1 = state_56510;
var statearr_56535_57145 = state_56510__$1;
(statearr_56535_57145[(2)] = inst_56412);

(statearr_56535_57145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (21))){
var inst_56457 = (state_56510[(2)]);
var state_56510__$1 = (function (){var statearr_56547 = state_56510;
(statearr_56547[(14)] = inst_56457);

return statearr_56547;
})();
var statearr_56548_57147 = state_56510__$1;
(statearr_56548_57147[(2)] = null);

(statearr_56548_57147[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (13))){
var inst_56351 = (state_56510[(12)]);
var inst_56426 = (state_56510[(15)]);
var inst_56427 = (state_56510[(16)]);
var _ = (function (){var statearr_56570 = state_56510;
(statearr_56570[(4)] = cljs.core.cons((16),(state_56510[(4)])));

return statearr_56570;
})();
var inst_56418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56420 = [(1),(2)];
var inst_56421 = (new cljs.core.PersistentVector(null,2,(5),inst_56419,inst_56420,null));
var inst_56422 = [inst_56421];
var inst_56423 = (new cljs.core.PersistentVector(null,1,(5),inst_56418,inst_56422,null));
var inst_56424 = cljs.core.deref(inst_56351);
var inst_56425 = (new cljs.core.List(null,inst_56424,null,(1),null));
var inst_56426__$1 = (new cljs.core.List(null,inst_56423,inst_56425,(2),null));
var inst_56427__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56426__$1);
var state_56510__$1 = (function (){var statearr_56577 = state_56510;
(statearr_56577[(15)] = inst_56426__$1);

(statearr_56577[(16)] = inst_56427__$1);

return statearr_56577;
})();
if(cljs.core.truth_(inst_56427__$1)){
var statearr_56578_57148 = state_56510__$1;
(statearr_56578_57148[(1)] = (17));

} else {
var statearr_56579_57149 = state_56510__$1;
(statearr_56579_57149[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (22))){
var inst_56351 = (state_56510[(12)]);
var inst_56480 = (state_56510[(10)]);
var inst_56481 = (state_56510[(17)]);
var _ = (function (){var statearr_56580 = state_56510;
(statearr_56580[(4)] = cljs.core.cons((25),(state_56510[(4)])));

return statearr_56580;
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
var inst_56478 = cljs.core.deref(inst_56351);
var inst_56479 = (new cljs.core.List(null,inst_56478,null,(1),null));
var inst_56480__$1 = (new cljs.core.List(null,inst_56477,inst_56479,(2),null));
var inst_56481__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56480__$1);
var state_56510__$1 = (function (){var statearr_56581 = state_56510;
(statearr_56581[(10)] = inst_56480__$1);

(statearr_56581[(17)] = inst_56481__$1);

return statearr_56581;
})();
if(cljs.core.truth_(inst_56481__$1)){
var statearr_56582_57151 = state_56510__$1;
(statearr_56582_57151[(1)] = (26));

} else {
var statearr_56583_57152 = state_56510__$1;
(statearr_56583_57152[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (6))){
var inst_56356 = (state_56510[(7)]);
var inst_56402 = (state_56510[(2)]);
var inst_56403 = (inst_56356.cljs$core$IFn$_invoke$arity$0 ? inst_56356.cljs$core$IFn$_invoke$arity$0() : inst_56356.call(null));
var inst_56404 = cljs.core.async.timeout((20));
var state_56510__$1 = (function (){var statearr_56585 = state_56510;
(statearr_56585[(18)] = inst_56402);

(statearr_56585[(19)] = inst_56403);

return statearr_56585;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56510__$1,(12),inst_56404);
} else {
if((state_val_56515 === (28))){
var inst_56481 = (state_56510[(17)]);
var inst_56503 = (state_56510[(2)]);
var _ = (function (){var statearr_56587 = state_56510;
(statearr_56587[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56587;
})();
var state_56510__$1 = (function (){var statearr_56588 = state_56510;
(statearr_56588[(20)] = inst_56503);

return statearr_56588;
})();
var statearr_56589_57156 = state_56510__$1;
(statearr_56589_57156[(2)] = inst_56481);

(statearr_56589_57156[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (25))){
var _ = (function (){var statearr_56590 = state_56510;
(statearr_56590[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56590;
})();
var state_56510__$1 = state_56510;
var ex56584 = (state_56510__$1[(2)]);
var statearr_56591_57157 = state_56510__$1;
(statearr_56591_57157[(5)] = ex56584);


var statearr_56592_57158 = state_56510__$1;
(statearr_56592_57158[(1)] = (24));

(statearr_56592_57158[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (17))){
var inst_56426 = (state_56510[(15)]);
var inst_56429 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56430 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56431 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56432 = cljs.core.cons(inst_56431,inst_56426);
var inst_56433 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56430,24,inst_56432,"Manual flush should flush all items"];
var inst_56434 = cljs.core.PersistentHashMap.fromArrays(inst_56429,inst_56433);
var inst_56435 = cljs.test.report.call(null,inst_56434);
var state_56510__$1 = state_56510;
var statearr_56593_57159 = state_56510__$1;
(statearr_56593_57159[(2)] = inst_56435);

(statearr_56593_57159[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (3))){
var inst_56360 = (state_56510[(2)]);
var inst_56361 = cljs.core.async.timeout((20));
var state_56510__$1 = (function (){var statearr_56594 = state_56510;
(statearr_56594[(21)] = inst_56360);

return statearr_56594;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56510__$1,(4),inst_56361);
} else {
if((state_val_56515 === (12))){
var inst_56406 = (state_56510[(2)]);
var state_56510__$1 = (function (){var statearr_56597 = state_56510;
(statearr_56597[(22)] = inst_56406);

return statearr_56597;
})();
var statearr_56598_57161 = state_56510__$1;
(statearr_56598_57161[(2)] = null);

(statearr_56598_57161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (2))){
var inst_56349 = (state_56510[(11)]);
var inst_56358 = (state_56510[(2)]);
var state_56510__$1 = (function (){var statearr_56606 = state_56510;
(statearr_56606[(23)] = inst_56358);

return statearr_56606;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56510__$1,(3),inst_56349,(2));
} else {
if((state_val_56515 === (23))){
var inst_56506 = (state_56510[(2)]);
var inst_56507 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56510__$1 = (function (){var statearr_56607 = state_56510;
(statearr_56607[(24)] = inst_56506);

return statearr_56607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56510__$1,inst_56507);
} else {
if((state_val_56515 === (19))){
var inst_56427 = (state_56510[(16)]);
var inst_56448 = (state_56510[(2)]);
var _ = (function (){var statearr_56608 = state_56510;
(statearr_56608[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56608;
})();
var state_56510__$1 = (function (){var statearr_56609 = state_56510;
(statearr_56609[(25)] = inst_56448);

return statearr_56609;
})();
var statearr_56610_57165 = state_56510__$1;
(statearr_56610_57165[(2)] = inst_56427);

(statearr_56610_57165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (11))){
var inst_56377 = (state_56510[(26)]);
var inst_56399 = (state_56510[(2)]);
var _ = (function (){var statearr_56611 = state_56510;
(statearr_56611[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56611;
})();
var state_56510__$1 = (function (){var statearr_56612 = state_56510;
(statearr_56612[(27)] = inst_56399);

return statearr_56612;
})();
var statearr_56613_57166 = state_56510__$1;
(statearr_56613_57166[(2)] = inst_56377);

(statearr_56613_57166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (9))){
var inst_56376 = (state_56510[(28)]);
var inst_56379 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56381 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56382 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56383 = cljs.core.cons(inst_56382,inst_56376);
var inst_56384 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56381,19,inst_56383,"Buffer should not flush automatically without timer"];
var inst_56385 = cljs.core.PersistentHashMap.fromArrays(inst_56379,inst_56384);
var inst_56386 = cljs.test.report.call(null,inst_56385);
var state_56510__$1 = state_56510;
var statearr_56614_57169 = state_56510__$1;
(statearr_56614_57169[(2)] = inst_56386);

(statearr_56614_57169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (5))){
var inst_56351 = (state_56510[(12)]);
var inst_56376 = (state_56510[(28)]);
var inst_56377 = (state_56510[(26)]);
var _ = (function (){var statearr_56615 = state_56510;
(statearr_56615[(4)] = cljs.core.cons((8),(state_56510[(4)])));

return statearr_56615;
})();
var inst_56375 = cljs.core.deref(inst_56351);
var inst_56376__$1 = (new cljs.core.List(null,inst_56375,null,(1),null));
var inst_56377__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56376__$1);
var state_56510__$1 = (function (){var statearr_56616 = state_56510;
(statearr_56616[(28)] = inst_56376__$1);

(statearr_56616[(26)] = inst_56377__$1);

return statearr_56616;
})();
if(cljs.core.truth_(inst_56377__$1)){
var statearr_56617_57171 = state_56510__$1;
(statearr_56617_57171[(1)] = (9));

} else {
var statearr_56618_57174 = state_56510__$1;
(statearr_56618_57174[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (14))){
var inst_56349 = (state_56510[(11)]);
var inst_56451 = (state_56510[(2)]);
var state_56510__$1 = (function (){var statearr_56620 = state_56510;
(statearr_56620[(29)] = inst_56451);

return statearr_56620;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56510__$1,(20),inst_56349,(3));
} else {
if((state_val_56515 === (26))){
var inst_56480 = (state_56510[(10)]);
var inst_56484 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56485 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56486 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56487 = cljs.core.cons(inst_56486,inst_56480);
var inst_56488 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56485,29,inst_56487,"Subsequent flush should work"];
var inst_56489 = cljs.core.PersistentHashMap.fromArrays(inst_56484,inst_56488);
var inst_56490 = cljs.test.report.call(null,inst_56489);
var state_56510__$1 = state_56510;
var statearr_56621_57175 = state_56510__$1;
(statearr_56621_57175[(2)] = inst_56490);

(statearr_56621_57175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (16))){
var _ = (function (){var statearr_56622 = state_56510;
(statearr_56622[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56622;
})();
var state_56510__$1 = state_56510;
var ex56619 = (state_56510__$1[(2)]);
var statearr_56623_57176 = state_56510__$1;
(statearr_56623_57176[(5)] = ex56619);


var statearr_56624_57177 = state_56510__$1;
(statearr_56624_57177[(1)] = (15));

(statearr_56624_57177[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (10))){
var inst_56376 = (state_56510[(28)]);
var inst_56388 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56389 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56390 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56391 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56392 = cljs.core.cons(inst_56391,inst_56376);
var inst_56393 = (new cljs.core.List(null,inst_56392,null,(1),null));
var inst_56394 = (new cljs.core.List(null,inst_56390,inst_56393,(2),null));
var inst_56395 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56389,19,inst_56394,"Buffer should not flush automatically without timer"];
var inst_56396 = cljs.core.PersistentHashMap.fromArrays(inst_56388,inst_56395);
var inst_56397 = cljs.test.report.call(null,inst_56396);
var state_56510__$1 = state_56510;
var statearr_56626_57181 = state_56510__$1;
(statearr_56626_57181[(2)] = inst_56397);

(statearr_56626_57181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (18))){
var inst_56426 = (state_56510[(15)]);
var inst_56437 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56438 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56439 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56440 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56441 = cljs.core.cons(inst_56440,inst_56426);
var inst_56442 = (new cljs.core.List(null,inst_56441,null,(1),null));
var inst_56443 = (new cljs.core.List(null,inst_56439,inst_56442,(2),null));
var inst_56444 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56438,24,inst_56443,"Manual flush should flush all items"];
var inst_56445 = cljs.core.PersistentHashMap.fromArrays(inst_56437,inst_56444);
var inst_56446 = cljs.test.report.call(null,inst_56445);
var state_56510__$1 = state_56510;
var statearr_56627_57183 = state_56510__$1;
(statearr_56627_57183[(2)] = inst_56446);

(statearr_56627_57183[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (8))){
var _ = (function (){var statearr_56628 = state_56510;
(statearr_56628[(4)] = cljs.core.rest((state_56510[(4)])));

return statearr_56628;
})();
var state_56510__$1 = state_56510;
var ex56625 = (state_56510__$1[(2)]);
var statearr_56629_57184 = state_56510__$1;
(statearr_56629_57184[(5)] = ex56625);


var statearr_56630_57185 = state_56510__$1;
(statearr_56630_57185[(1)] = (7));

(statearr_56630_57185[(5)] = null);



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
var statearr_56631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56631[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56631[(1)] = (1));

return statearr_56631;
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
}catch (e56632){var ex__32294__auto__ = e56632;
var statearr_56633_57190 = state_56510;
(statearr_56633_57190[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56510[(4)]))){
var statearr_56634_57191 = state_56510;
(statearr_56634_57191[(1)] = cljs.core.first((state_56510[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57193 = state_56510;
state_56510 = G__57193;
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
var state__32363__auto__ = (function (){var statearr_56635 = f__32362__auto__();
(statearr_56635[(6)] = c__32361__auto__);

return statearr_56635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56344","meta56344",1800581522,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56343");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56343");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56343.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56343 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56343(meta56344){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343(meta56344));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56343(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636 = (function (meta56637){
this.meta56637 = meta56637;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56638,meta56637__$1){
var self__ = this;
var _56638__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636(meta56637__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56638){
var self__ = this;
var _56638__$1 = this;
return self__.meta56637;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56641 = (arguments.length - (1));
switch (G__56641) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636.prototype.apply = (function (self__,args56639){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56639)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56884){
var state_val_56885 = (state_56884[(1)]);
if((state_val_56885 === (7))){
var inst_56660 = (state_56884[(2)]);
var inst_56662 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56663 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56664 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56663,47,inst_56660,"Should not flush before timeout"];
var inst_56665 = cljs.core.PersistentHashMap.fromArrays(inst_56662,inst_56664);
var inst_56666 = cljs.test.report.call(null,inst_56665);
var state_56884__$1 = state_56884;
var statearr_56893_57199 = state_56884__$1;
(statearr_56893_57199[(2)] = inst_56666);

(statearr_56893_57199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (20))){
var inst_56751 = (state_56884[(2)]);
var inst_56752 = cljs.core.async.timeout((50));
var state_56884__$1 = (function (){var statearr_56894 = state_56884;
(statearr_56894[(7)] = inst_56751);

return statearr_56894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56884__$1,(21),inst_56752);
} else {
if((state_val_56885 === (27))){
var _ = (function (){var statearr_56895 = state_56884;
(statearr_56895[(4)] = cljs.core.rest((state_56884[(4)])));

return statearr_56895;
})();
var state_56884__$1 = state_56884;
var ex56886 = (state_56884__$1[(2)]);
var statearr_56896_57200 = state_56884__$1;
(statearr_56896_57200[(5)] = ex56886);


var statearr_56897_57202 = state_56884__$1;
(statearr_56897_57202[(1)] = (26));

(statearr_56897_57202[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (1))){
var inst_56644 = (state_56884[(8)]);
var inst_56646 = (state_56884[(9)]);
var inst_56644__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56645 = cljs.core.PersistentVector.EMPTY;
var inst_56646__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56645);
var inst_56647 = (function (){var input_ch = inst_56644__$1;
var results = inst_56646__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56648 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56649 = [inst_56644__$1,(100),inst_56647];
var inst_56650 = cljs.core.PersistentHashMap.fromArrays(inst_56648,inst_56649);
var inst_56651 = bb_web_ds_tools.components.async_buffer.create(inst_56650);
var state_56884__$1 = (function (){var statearr_56898 = state_56884;
(statearr_56898[(8)] = inst_56644__$1);

(statearr_56898[(9)] = inst_56646__$1);

(statearr_56898[(10)] = inst_56651);

return statearr_56898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56884__$1,(2),inst_56644__$1,(1));
} else {
if((state_val_56885 === (24))){
var inst_56646 = (state_56884[(9)]);
var inst_56782 = (state_56884[(11)]);
var inst_56783 = (state_56884[(12)]);
var _ = (function (){var statearr_56899 = state_56884;
(statearr_56899[(4)] = cljs.core.cons((27),(state_56884[(4)])));

return statearr_56899;
})();
var inst_56774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56776 = [(1),(2)];
var inst_56777 = (new cljs.core.PersistentVector(null,2,(5),inst_56775,inst_56776,null));
var inst_56778 = [inst_56777];
var inst_56779 = (new cljs.core.PersistentVector(null,1,(5),inst_56774,inst_56778,null));
var inst_56780 = cljs.core.deref(inst_56646);
var inst_56781 = (new cljs.core.List(null,inst_56780,null,(1),null));
var inst_56782__$1 = (new cljs.core.List(null,inst_56779,inst_56781,(2),null));
var inst_56783__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56782__$1);
var state_56884__$1 = (function (){var statearr_56900 = state_56884;
(statearr_56900[(11)] = inst_56782__$1);

(statearr_56900[(12)] = inst_56783__$1);

return statearr_56900;
})();
if(cljs.core.truth_(inst_56783__$1)){
var statearr_56901_57207 = state_56884__$1;
(statearr_56901_57207[(1)] = (28));

} else {
var statearr_56902_57208 = state_56884__$1;
(statearr_56902_57208[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (4))){
var inst_56659 = (state_56884[(2)]);
var state_56884__$1 = (function (){var statearr_56903 = state_56884;
(statearr_56903[(13)] = inst_56659);

return statearr_56903;
})();
var statearr_56904_57209 = state_56884__$1;
(statearr_56904_57209[(2)] = null);

(statearr_56904_57209[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (15))){
var inst_56703 = (state_56884[(2)]);
var inst_56704 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56705 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56706 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56705,50,inst_56703,"Should flush after timeout"];
var inst_56707 = cljs.core.PersistentHashMap.fromArrays(inst_56704,inst_56706);
var inst_56708 = cljs.test.report.call(null,inst_56707);
var state_56884__$1 = state_56884;
var statearr_56905_57210 = state_56884__$1;
(statearr_56905_57210[(2)] = inst_56708);

(statearr_56905_57210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (21))){
var inst_56644 = (state_56884[(8)]);
var inst_56754 = (state_56884[(2)]);
var state_56884__$1 = (function (){var statearr_56906 = state_56884;
(statearr_56906[(14)] = inst_56754);

return statearr_56906;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56884__$1,(22),inst_56644,(4));
} else {
if((state_val_56885 === (31))){
var inst_56833 = (state_56884[(2)]);
var state_56884__$1 = (function (){var statearr_56907 = state_56884;
(statearr_56907[(15)] = inst_56833);

return statearr_56907;
})();
var statearr_56908_57213 = state_56884__$1;
(statearr_56908_57213[(2)] = null);

(statearr_56908_57213[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (32))){
var inst_56646 = (state_56884[(9)]);
var inst_56856 = (state_56884[(16)]);
var inst_56857 = (state_56884[(17)]);
var _ = (function (){var statearr_56909 = state_56884;
(statearr_56909[(4)] = cljs.core.cons((35),(state_56884[(4)])));

return statearr_56909;
})();
var inst_56845 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56846 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56847 = [(1),(2)];
var inst_56848 = (new cljs.core.PersistentVector(null,2,(5),inst_56846,inst_56847,null));
var inst_56849 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56850 = [(3),(4)];
var inst_56851 = (new cljs.core.PersistentVector(null,2,(5),inst_56849,inst_56850,null));
var inst_56852 = [inst_56848,inst_56851];
var inst_56853 = (new cljs.core.PersistentVector(null,2,(5),inst_56845,inst_56852,null));
var inst_56854 = cljs.core.deref(inst_56646);
var inst_56855 = (new cljs.core.List(null,inst_56854,null,(1),null));
var inst_56856__$1 = (new cljs.core.List(null,inst_56853,inst_56855,(2),null));
var inst_56857__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56856__$1);
var state_56884__$1 = (function (){var statearr_56910 = state_56884;
(statearr_56910[(16)] = inst_56856__$1);

(statearr_56910[(17)] = inst_56857__$1);

return statearr_56910;
})();
if(cljs.core.truth_(inst_56857__$1)){
var statearr_56911_57215 = state_56884__$1;
(statearr_56911_57215[(1)] = (36));

} else {
var statearr_56912_57217 = state_56884__$1;
(statearr_56912_57217[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (33))){
var inst_56881 = (state_56884[(2)]);
var inst_56882 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56884__$1 = (function (){var statearr_56913 = state_56884;
(statearr_56913[(18)] = inst_56881);

return statearr_56913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56884__$1,inst_56882);
} else {
if((state_val_56885 === (13))){
var inst_56646 = (state_56884[(9)]);
var inst_56722 = (state_56884[(19)]);
var inst_56723 = (state_56884[(20)]);
var _ = (function (){var statearr_56914 = state_56884;
(statearr_56914[(4)] = cljs.core.cons((16),(state_56884[(4)])));

return statearr_56914;
})();
var inst_56714 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56715 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56716 = [(1),(2)];
var inst_56717 = (new cljs.core.PersistentVector(null,2,(5),inst_56715,inst_56716,null));
var inst_56718 = [inst_56717];
var inst_56719 = (new cljs.core.PersistentVector(null,1,(5),inst_56714,inst_56718,null));
var inst_56720 = cljs.core.deref(inst_56646);
var inst_56721 = (new cljs.core.List(null,inst_56720,null,(1),null));
var inst_56722__$1 = (new cljs.core.List(null,inst_56719,inst_56721,(2),null));
var inst_56723__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56722__$1);
var state_56884__$1 = (function (){var statearr_56915 = state_56884;
(statearr_56915[(19)] = inst_56722__$1);

(statearr_56915[(20)] = inst_56723__$1);

return statearr_56915;
})();
if(cljs.core.truth_(inst_56723__$1)){
var statearr_56916_57223 = state_56884__$1;
(statearr_56916_57223[(1)] = (17));

} else {
var statearr_56917_57224 = state_56884__$1;
(statearr_56917_57224[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (22))){
var inst_56756 = (state_56884[(2)]);
var inst_56757 = cljs.core.async.timeout((20));
var state_56884__$1 = (function (){var statearr_56918 = state_56884;
(statearr_56918[(21)] = inst_56756);

return statearr_56918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56884__$1,(23),inst_56757);
} else {
if((state_val_56885 === (36))){
var inst_56856 = (state_56884[(16)]);
var inst_56859 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56860 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56861 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56862 = cljs.core.cons(inst_56861,inst_56856);
var inst_56863 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56860,60,inst_56862,"Should flush 3,4 after timeout from first message"];
var inst_56864 = cljs.core.PersistentHashMap.fromArrays(inst_56859,inst_56863);
var inst_56865 = cljs.test.report.call(null,inst_56864);
var state_56884__$1 = state_56884;
var statearr_56919_57226 = state_56884__$1;
(statearr_56919_57226[(2)] = inst_56865);

(statearr_56919_57226[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (29))){
var inst_56782 = (state_56884[(11)]);
var inst_56796 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56797 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56799 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56803 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56804 = cljs.core.cons(inst_56803,inst_56782);
var inst_56805 = (new cljs.core.List(null,inst_56804,null,(1),null));
var inst_56806 = (new cljs.core.List(null,inst_56799,inst_56805,(2),null));
var inst_56807 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56797,57,inst_56806,"Should not flush 3,4 yet"];
var inst_56808 = cljs.core.PersistentHashMap.fromArrays(inst_56796,inst_56807);
var inst_56809 = cljs.test.report.call(null,inst_56808);
var state_56884__$1 = state_56884;
var statearr_56920_57230 = state_56884__$1;
(statearr_56920_57230[(2)] = inst_56809);

(statearr_56920_57230[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (6))){
var inst_56699 = (state_56884[(2)]);
var inst_56700 = cljs.core.async.timeout((100));
var state_56884__$1 = (function (){var statearr_56921 = state_56884;
(statearr_56921[(22)] = inst_56699);

return statearr_56921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56884__$1,(12),inst_56700);
} else {
if((state_val_56885 === (28))){
var inst_56782 = (state_56884[(11)]);
var inst_56787 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56789 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56790 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56791 = cljs.core.cons(inst_56790,inst_56782);
var inst_56792 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56789,57,inst_56791,"Should not flush 3,4 yet"];
var inst_56793 = cljs.core.PersistentHashMap.fromArrays(inst_56787,inst_56792);
var inst_56794 = cljs.test.report.call(null,inst_56793);
var state_56884__$1 = state_56884;
var statearr_56922_57238 = state_56884__$1;
(statearr_56922_57238[(2)] = inst_56794);

(statearr_56922_57238[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (25))){
var inst_56814 = (state_56884[(2)]);
var inst_56816 = cljs.core.async.timeout((80));
var state_56884__$1 = (function (){var statearr_56923 = state_56884;
(statearr_56923[(23)] = inst_56814);

return statearr_56923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56884__$1,(31),inst_56816);
} else {
if((state_val_56885 === (34))){
var inst_56834 = (state_56884[(2)]);
var inst_56835 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56836 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56837 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56836,60,inst_56834,"Should flush 3,4 after timeout from first message"];
var inst_56838 = cljs.core.PersistentHashMap.fromArrays(inst_56835,inst_56837);
var inst_56839 = cljs.test.report.call(null,inst_56838);
var state_56884__$1 = state_56884;
var statearr_56924_57246 = state_56884__$1;
(statearr_56924_57246[(2)] = inst_56839);

(statearr_56924_57246[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (17))){
var inst_56722 = (state_56884[(19)]);
var inst_56725 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56726 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56727 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56728 = cljs.core.cons(inst_56727,inst_56722);
var inst_56729 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56726,50,inst_56728,"Should flush after timeout"];
var inst_56730 = cljs.core.PersistentHashMap.fromArrays(inst_56725,inst_56729);
var inst_56731 = cljs.test.report.call(null,inst_56730);
var state_56884__$1 = state_56884;
var statearr_56925_57247 = state_56884__$1;
(statearr_56925_57247[(2)] = inst_56731);

(statearr_56925_57247[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (3))){
var inst_56656 = (state_56884[(2)]);
var inst_56657 = cljs.core.async.timeout((50));
var state_56884__$1 = (function (){var statearr_56926 = state_56884;
(statearr_56926[(24)] = inst_56656);

return statearr_56926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56884__$1,(4),inst_56657);
} else {
if((state_val_56885 === (12))){
var inst_56702 = (state_56884[(2)]);
var state_56884__$1 = (function (){var statearr_56927 = state_56884;
(statearr_56927[(25)] = inst_56702);

return statearr_56927;
})();
var statearr_56928_57248 = state_56884__$1;
(statearr_56928_57248[(2)] = null);

(statearr_56928_57248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (2))){
var inst_56644 = (state_56884[(8)]);
var inst_56654 = (state_56884[(2)]);
var state_56884__$1 = (function (){var statearr_56930 = state_56884;
(statearr_56930[(26)] = inst_56654);

return statearr_56930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56884__$1,(3),inst_56644,(2));
} else {
if((state_val_56885 === (23))){
var inst_56759 = (state_56884[(2)]);
var state_56884__$1 = (function (){var statearr_56931 = state_56884;
(statearr_56931[(27)] = inst_56759);

return statearr_56931;
})();
var statearr_56932_57249 = state_56884__$1;
(statearr_56932_57249[(2)] = null);

(statearr_56932_57249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (35))){
var _ = (function (){var statearr_56933 = state_56884;
(statearr_56933[(4)] = cljs.core.rest((state_56884[(4)])));

return statearr_56933;
})();
var state_56884__$1 = state_56884;
var ex56929 = (state_56884__$1[(2)]);
var statearr_56934_57250 = state_56884__$1;
(statearr_56934_57250[(5)] = ex56929);


var statearr_56935_57251 = state_56884__$1;
(statearr_56935_57251[(1)] = (34));

(statearr_56935_57251[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (19))){
var inst_56723 = (state_56884[(20)]);
var inst_56745 = (state_56884[(2)]);
var _ = (function (){var statearr_56936 = state_56884;
(statearr_56936[(4)] = cljs.core.rest((state_56884[(4)])));

return statearr_56936;
})();
var state_56884__$1 = (function (){var statearr_56937 = state_56884;
(statearr_56937[(28)] = inst_56745);

return statearr_56937;
})();
var statearr_56938_57252 = state_56884__$1;
(statearr_56938_57252[(2)] = inst_56723);

(statearr_56938_57252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (11))){
var inst_56674 = (state_56884[(29)]);
var inst_56696 = (state_56884[(2)]);
var _ = (function (){var statearr_56939 = state_56884;
(statearr_56939[(4)] = cljs.core.rest((state_56884[(4)])));

return statearr_56939;
})();
var state_56884__$1 = (function (){var statearr_56940 = state_56884;
(statearr_56940[(30)] = inst_56696);

return statearr_56940;
})();
var statearr_56941_57253 = state_56884__$1;
(statearr_56941_57253[(2)] = inst_56674);

(statearr_56941_57253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (9))){
var inst_56673 = (state_56884[(31)]);
var inst_56676 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56677 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56678 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56679 = cljs.core.cons(inst_56678,inst_56673);
var inst_56680 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56677,47,inst_56679,"Should not flush before timeout"];
var inst_56681 = cljs.core.PersistentHashMap.fromArrays(inst_56676,inst_56680);
var inst_56682 = cljs.test.report.call(null,inst_56681);
var state_56884__$1 = state_56884;
var statearr_56942_57257 = state_56884__$1;
(statearr_56942_57257[(2)] = inst_56682);

(statearr_56942_57257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (5))){
var inst_56646 = (state_56884[(9)]);
var inst_56673 = (state_56884[(31)]);
var inst_56674 = (state_56884[(29)]);
var _ = (function (){var statearr_56943 = state_56884;
(statearr_56943[(4)] = cljs.core.cons((8),(state_56884[(4)])));

return statearr_56943;
})();
var inst_56672 = cljs.core.deref(inst_56646);
var inst_56673__$1 = (new cljs.core.List(null,inst_56672,null,(1),null));
var inst_56674__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56673__$1);
var state_56884__$1 = (function (){var statearr_56944 = state_56884;
(statearr_56944[(31)] = inst_56673__$1);

(statearr_56944[(29)] = inst_56674__$1);

return statearr_56944;
})();
if(cljs.core.truth_(inst_56674__$1)){
var statearr_56945_57259 = state_56884__$1;
(statearr_56945_57259[(1)] = (9));

} else {
var statearr_56946_57260 = state_56884__$1;
(statearr_56946_57260[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (14))){
var inst_56644 = (state_56884[(8)]);
var inst_56749 = (state_56884[(2)]);
var state_56884__$1 = (function (){var statearr_56948 = state_56884;
(statearr_56948[(32)] = inst_56749);

return statearr_56948;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56884__$1,(20),inst_56644,(3));
} else {
if((state_val_56885 === (26))){
var inst_56760 = (state_56884[(2)]);
var inst_56761 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56763 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56764 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56763,57,inst_56760,"Should not flush 3,4 yet"];
var inst_56765 = cljs.core.PersistentHashMap.fromArrays(inst_56761,inst_56764);
var inst_56766 = cljs.test.report.call(null,inst_56765);
var state_56884__$1 = state_56884;
var statearr_56949_57261 = state_56884__$1;
(statearr_56949_57261[(2)] = inst_56766);

(statearr_56949_57261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (16))){
var _ = (function (){var statearr_56950 = state_56884;
(statearr_56950[(4)] = cljs.core.rest((state_56884[(4)])));

return statearr_56950;
})();
var state_56884__$1 = state_56884;
var ex56947 = (state_56884__$1[(2)]);
var statearr_56951_57263 = state_56884__$1;
(statearr_56951_57263[(5)] = ex56947);


var statearr_56952_57264 = state_56884__$1;
(statearr_56952_57264[(1)] = (15));

(statearr_56952_57264[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (38))){
var inst_56857 = (state_56884[(17)]);
var inst_56878 = (state_56884[(2)]);
var _ = (function (){var statearr_56953 = state_56884;
(statearr_56953[(4)] = cljs.core.rest((state_56884[(4)])));

return statearr_56953;
})();
var state_56884__$1 = (function (){var statearr_56954 = state_56884;
(statearr_56954[(33)] = inst_56878);

return statearr_56954;
})();
var statearr_56955_57265 = state_56884__$1;
(statearr_56955_57265[(2)] = inst_56857);

(statearr_56955_57265[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (30))){
var inst_56783 = (state_56884[(12)]);
var inst_56811 = (state_56884[(2)]);
var _ = (function (){var statearr_56956 = state_56884;
(statearr_56956[(4)] = cljs.core.rest((state_56884[(4)])));

return statearr_56956;
})();
var state_56884__$1 = (function (){var statearr_56957 = state_56884;
(statearr_56957[(34)] = inst_56811);

return statearr_56957;
})();
var statearr_56958_57268 = state_56884__$1;
(statearr_56958_57268[(2)] = inst_56783);

(statearr_56958_57268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (10))){
var inst_56673 = (state_56884[(31)]);
var inst_56684 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56686 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56687 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56688 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56689 = cljs.core.cons(inst_56688,inst_56673);
var inst_56690 = (new cljs.core.List(null,inst_56689,null,(1),null));
var inst_56691 = (new cljs.core.List(null,inst_56687,inst_56690,(2),null));
var inst_56692 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56686,47,inst_56691,"Should not flush before timeout"];
var inst_56693 = cljs.core.PersistentHashMap.fromArrays(inst_56684,inst_56692);
var inst_56694 = cljs.test.report.call(null,inst_56693);
var state_56884__$1 = state_56884;
var statearr_56959_57270 = state_56884__$1;
(statearr_56959_57270[(2)] = inst_56694);

(statearr_56959_57270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (18))){
var inst_56722 = (state_56884[(19)]);
var inst_56733 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56734 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56735 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56736 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56737 = cljs.core.cons(inst_56736,inst_56722);
var inst_56739 = (new cljs.core.List(null,inst_56737,null,(1),null));
var inst_56740 = (new cljs.core.List(null,inst_56735,inst_56739,(2),null));
var inst_56741 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56734,50,inst_56740,"Should flush after timeout"];
var inst_56742 = cljs.core.PersistentHashMap.fromArrays(inst_56733,inst_56741);
var inst_56743 = cljs.test.report.call(null,inst_56742);
var state_56884__$1 = state_56884;
var statearr_56965_57271 = state_56884__$1;
(statearr_56965_57271[(2)] = inst_56743);

(statearr_56965_57271[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (37))){
var inst_56856 = (state_56884[(16)]);
var inst_56867 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56868 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56869 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56870 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56871 = cljs.core.cons(inst_56870,inst_56856);
var inst_56872 = (new cljs.core.List(null,inst_56871,null,(1),null));
var inst_56873 = (new cljs.core.List(null,inst_56869,inst_56872,(2),null));
var inst_56874 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56868,60,inst_56873,"Should flush 3,4 after timeout from first message"];
var inst_56875 = cljs.core.PersistentHashMap.fromArrays(inst_56867,inst_56874);
var inst_56876 = cljs.test.report.call(null,inst_56875);
var state_56884__$1 = state_56884;
var statearr_56967_57275 = state_56884__$1;
(statearr_56967_57275[(2)] = inst_56876);

(statearr_56967_57275[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56885 === (8))){
var _ = (function (){var statearr_56969 = state_56884;
(statearr_56969[(4)] = cljs.core.rest((state_56884[(4)])));

return statearr_56969;
})();
var state_56884__$1 = state_56884;
var ex56961 = (state_56884__$1[(2)]);
var statearr_56975_57277 = state_56884__$1;
(statearr_56975_57277[(5)] = ex56961);


var statearr_56976_57278 = state_56884__$1;
(statearr_56976_57278[(1)] = (7));

(statearr_56976_57278[(5)] = null);



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
var statearr_56978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56978[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56978[(1)] = (1));

return statearr_56978;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56884){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56884);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56980){var ex__32294__auto__ = e56980;
var statearr_56981_57280 = state_56884;
(statearr_56981_57280[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56884[(4)]))){
var statearr_56982_57281 = state_56884;
(statearr_56982_57281[(1)] = cljs.core.first((state_56884[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57282 = state_56884;
state_56884 = G__57282;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56884){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56984 = f__32362__auto__();
(statearr_56984[(6)] = c__32361__auto__);

return statearr_56984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56637","meta56637",444260871,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56636");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56636");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56636.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56636 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56636(meta56637){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636(meta56637));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56636(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994 = (function (meta56995){
this.meta56995 = meta56995;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56996,meta56995__$1){
var self__ = this;
var _56996__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994(meta56995__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56996){
var self__ = this;
var _56996__$1 = this;
return self__.meta56995;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57000 = (arguments.length - (1));
switch (G__57000) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.prototype.apply = (function (self__,args56998){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56998)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_57070){
var state_val_57071 = (state_57070[(1)]);
if((state_val_57071 === (7))){
var inst_57023 = (state_57070[(2)]);
var inst_57024 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57025 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57026 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_57025,78,inst_57023,"Closing input should flush remaining"];
var inst_57027 = cljs.core.PersistentHashMap.fromArrays(inst_57024,inst_57026);
var inst_57028 = cljs.test.report.call(null,inst_57027);
var state_57070__$1 = state_57070;
var statearr_57072_57284 = state_57070__$1;
(statearr_57072_57284[(2)] = inst_57028);

(statearr_57072_57284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57071 === (1))){
var inst_57001 = (state_57070[(7)]);
var inst_57003 = (state_57070[(8)]);
var inst_57001__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_57002 = cljs.core.PersistentVector.EMPTY;
var inst_57003__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_57002);
var inst_57004 = (function (){var input_ch = inst_57001__$1;
var results = inst_57003__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_57005 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_57006 = [inst_57001__$1,inst_57004];
var inst_57007 = cljs.core.PersistentHashMap.fromArrays(inst_57005,inst_57006);
var inst_57008 = bb_web_ds_tools.components.async_buffer.create(inst_57007);
var state_57070__$1 = (function (){var statearr_57078 = state_57070;
(statearr_57078[(7)] = inst_57001__$1);

(statearr_57078[(8)] = inst_57003__$1);

(statearr_57078[(9)] = inst_57008);

return statearr_57078;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57070__$1,(2),inst_57001__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_57071 === (4))){
var inst_57022 = (state_57070[(2)]);
var state_57070__$1 = (function (){var statearr_57079 = state_57070;
(statearr_57079[(10)] = inst_57022);

return statearr_57079;
})();
var statearr_57080_57286 = state_57070__$1;
(statearr_57080_57286[(2)] = null);

(statearr_57080_57286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57071 === (6))){
var inst_57067 = (state_57070[(2)]);
var inst_57068 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_57070__$1 = (function (){var statearr_57081 = state_57070;
(statearr_57081[(11)] = inst_57067);

return statearr_57081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57070__$1,inst_57068);
} else {
if((state_val_57071 === (3))){
var inst_57001 = (state_57070[(7)]);
var inst_57012 = (state_57070[(2)]);
var inst_57013 = cljs.core.async.close_BANG_(inst_57001);
var inst_57020 = cljs.core.async.timeout((20));
var state_57070__$1 = (function (){var statearr_57082 = state_57070;
(statearr_57082[(12)] = inst_57012);

(statearr_57082[(13)] = inst_57013);

return statearr_57082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57070__$1,(4),inst_57020);
} else {
if((state_val_57071 === (2))){
var inst_57001 = (state_57070[(7)]);
var inst_57010 = (state_57070[(2)]);
var state_57070__$1 = (function (){var statearr_57083 = state_57070;
(statearr_57083[(14)] = inst_57010);

return statearr_57083;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57070__$1,(3),inst_57001,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_57071 === (11))){
var inst_57043 = (state_57070[(15)]);
var inst_57064 = (state_57070[(2)]);
var _ = (function (){var statearr_57084 = state_57070;
(statearr_57084[(4)] = cljs.core.rest((state_57070[(4)])));

return statearr_57084;
})();
var state_57070__$1 = (function (){var statearr_57085 = state_57070;
(statearr_57085[(16)] = inst_57064);

return statearr_57085;
})();
var statearr_57086_57289 = state_57070__$1;
(statearr_57086_57289[(2)] = inst_57043);

(statearr_57086_57289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57071 === (9))){
var inst_57042 = (state_57070[(17)]);
var inst_57045 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57046 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57047 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57048 = cljs.core.cons(inst_57047,inst_57042);
var inst_57049 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_57046,78,inst_57048,"Closing input should flush remaining"];
var inst_57050 = cljs.core.PersistentHashMap.fromArrays(inst_57045,inst_57049);
var inst_57051 = cljs.test.report.call(null,inst_57050);
var state_57070__$1 = state_57070;
var statearr_57094_57293 = state_57070__$1;
(statearr_57094_57293[(2)] = inst_57051);

(statearr_57094_57293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57071 === (5))){
var inst_57003 = (state_57070[(8)]);
var inst_57042 = (state_57070[(17)]);
var inst_57043 = (state_57070[(15)]);
var _ = (function (){var statearr_57100 = state_57070;
(statearr_57100[(4)] = cljs.core.cons((8),(state_57070[(4)])));

return statearr_57100;
})();
var inst_57034 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57035 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57036 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_57037 = (new cljs.core.PersistentVector(null,2,(5),inst_57035,inst_57036,null));
var inst_57038 = [inst_57037];
var inst_57039 = (new cljs.core.PersistentVector(null,1,(5),inst_57034,inst_57038,null));
var inst_57040 = cljs.core.deref(inst_57003);
var inst_57041 = (new cljs.core.List(null,inst_57040,null,(1),null));
var inst_57042__$1 = (new cljs.core.List(null,inst_57039,inst_57041,(2),null));
var inst_57043__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_57042__$1);
var state_57070__$1 = (function (){var statearr_57102 = state_57070;
(statearr_57102[(17)] = inst_57042__$1);

(statearr_57102[(15)] = inst_57043__$1);

return statearr_57102;
})();
if(cljs.core.truth_(inst_57043__$1)){
var statearr_57103_57298 = state_57070__$1;
(statearr_57103_57298[(1)] = (9));

} else {
var statearr_57104_57299 = state_57070__$1;
(statearr_57104_57299[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57071 === (10))){
var inst_57042 = (state_57070[(17)]);
var inst_57053 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57054 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57055 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_57056 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57057 = cljs.core.cons(inst_57056,inst_57042);
var inst_57058 = (new cljs.core.List(null,inst_57057,null,(1),null));
var inst_57059 = (new cljs.core.List(null,inst_57055,inst_57058,(2),null));
var inst_57060 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_57054,78,inst_57059,"Closing input should flush remaining"];
var inst_57061 = cljs.core.PersistentHashMap.fromArrays(inst_57053,inst_57060);
var inst_57062 = cljs.test.report.call(null,inst_57061);
var state_57070__$1 = state_57070;
var statearr_57109_57300 = state_57070__$1;
(statearr_57109_57300[(2)] = inst_57062);

(statearr_57109_57300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57071 === (8))){
var _ = (function (){var statearr_57110 = state_57070;
(statearr_57110[(4)] = cljs.core.rest((state_57070[(4)])));

return statearr_57110;
})();
var state_57070__$1 = state_57070;
var ex57096 = (state_57070__$1[(2)]);
var statearr_57111_57301 = state_57070__$1;
(statearr_57111_57301[(5)] = ex57096);


var statearr_57112_57302 = state_57070__$1;
(statearr_57112_57302[(1)] = (7));

(statearr_57112_57302[(5)] = null);



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
var statearr_57114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57114[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57114[(1)] = (1));

return statearr_57114;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_57070){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_57070);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57115){var ex__32294__auto__ = e57115;
var statearr_57116_57305 = state_57070;
(statearr_57116_57305[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_57070[(4)]))){
var statearr_57117_57306 = state_57070;
(statearr_57117_57306[(1)] = cljs.core.first((state_57070[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57307 = state_57070;
state_57070 = G__57307;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_57070){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_57070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_57119 = f__32362__auto__();
(statearr_57119[(6)] = c__32361__auto__);

return statearr_57119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56995","meta56995",-623136967,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56994");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56994");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56994.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56994 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56994(meta56995){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994(meta56995));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
