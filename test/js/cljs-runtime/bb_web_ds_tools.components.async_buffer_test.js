goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334 = (function (meta56335){
this.meta56335 = meta56335;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56336,meta56335__$1){
var self__ = this;
var _56336__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334(meta56335__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56336){
var self__ = this;
var _56336__$1 = this;
return self__.meta56335;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56350 = (arguments.length - (1));
switch (G__56350) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334.prototype.apply = (function (self__,args56341){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56341)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56560){
var state_val_56561 = (state_56560[(1)]);
if((state_val_56561 === (7))){
var inst_56376 = (state_56560[(2)]);
var inst_56378 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56383 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56384 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56383,19,inst_56376,"Buffer should not flush automatically without timer"];
var inst_56385 = cljs.core.PersistentHashMap.fromArrays(inst_56378,inst_56384);
var inst_56386 = cljs.test.report.call(null,inst_56385);
var state_56560__$1 = state_56560;
var statearr_56568_57138 = state_56560__$1;
(statearr_56568_57138[(2)] = inst_56386);

(statearr_56568_57138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (20))){
var inst_56368 = (state_56560[(7)]);
var inst_56501 = (state_56560[(2)]);
var inst_56502 = (inst_56368.cljs$core$IFn$_invoke$arity$0 ? inst_56368.cljs$core$IFn$_invoke$arity$0() : inst_56368.call(null));
var inst_56503 = cljs.core.async.timeout((20));
var state_56560__$1 = (function (){var statearr_56570 = state_56560;
(statearr_56570[(8)] = inst_56501);

(statearr_56570[(9)] = inst_56502);

return statearr_56570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56560__$1,(21),inst_56503);
} else {
if((state_val_56561 === (27))){
var inst_56529 = (state_56560[(10)]);
var inst_56540 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56541 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56542 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56544 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56545 = cljs.core.cons(inst_56544,inst_56529);
var inst_56546 = (new cljs.core.List(null,inst_56545,null,(1),null));
var inst_56547 = (new cljs.core.List(null,inst_56542,inst_56546,(2),null));
var inst_56548 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56541,29,inst_56547,"Subsequent flush should work"];
var inst_56549 = cljs.core.PersistentHashMap.fromArrays(inst_56540,inst_56548);
var inst_56550 = cljs.test.report.call(null,inst_56549);
var state_56560__$1 = state_56560;
var statearr_56574_57140 = state_56560__$1;
(statearr_56574_57140[(2)] = inst_56550);

(statearr_56574_57140[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (1))){
var inst_56358 = (state_56560[(11)]);
var inst_56360 = (state_56560[(12)]);
var inst_56358__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56359 = cljs.core.PersistentVector.EMPTY;
var inst_56360__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56359);
var inst_56362 = (function (){var input_ch = inst_56358__$1;
var results = inst_56360__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56365 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56366 = [inst_56358__$1,inst_56362];
var inst_56367 = cljs.core.PersistentHashMap.fromArrays(inst_56365,inst_56366);
var inst_56368 = bb_web_ds_tools.components.async_buffer.create(inst_56367);
var state_56560__$1 = (function (){var statearr_56575 = state_56560;
(statearr_56575[(11)] = inst_56358__$1);

(statearr_56575[(12)] = inst_56360__$1);

(statearr_56575[(7)] = inst_56368);

return statearr_56575;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56560__$1,(2),inst_56358__$1,(1));
} else {
if((state_val_56561 === (24))){
var inst_56507 = (state_56560[(2)]);
var inst_56508 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56509 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56510 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56509,29,inst_56507,"Subsequent flush should work"];
var inst_56511 = cljs.core.PersistentHashMap.fromArrays(inst_56508,inst_56510);
var inst_56512 = cljs.test.report.call(null,inst_56511);
var state_56560__$1 = state_56560;
var statearr_56577_57144 = state_56560__$1;
(statearr_56577_57144[(2)] = inst_56512);

(statearr_56577_57144[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (4))){
var inst_56375 = (state_56560[(2)]);
var state_56560__$1 = (function (){var statearr_56579 = state_56560;
(statearr_56579[(13)] = inst_56375);

return statearr_56579;
})();
var statearr_56580_57145 = state_56560__$1;
(statearr_56580_57145[(2)] = null);

(statearr_56580_57145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (15))){
var inst_56434 = (state_56560[(2)]);
var inst_56435 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56436 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56437 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56436,24,inst_56434,"Manual flush should flush all items"];
var inst_56438 = cljs.core.PersistentHashMap.fromArrays(inst_56435,inst_56437);
var inst_56439 = cljs.test.report.call(null,inst_56438);
var state_56560__$1 = state_56560;
var statearr_56581_57146 = state_56560__$1;
(statearr_56581_57146[(2)] = inst_56439);

(statearr_56581_57146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (21))){
var inst_56505 = (state_56560[(2)]);
var state_56560__$1 = (function (){var statearr_56582 = state_56560;
(statearr_56582[(14)] = inst_56505);

return statearr_56582;
})();
var statearr_56584_57147 = state_56560__$1;
(statearr_56584_57147[(2)] = null);

(statearr_56584_57147[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (13))){
var inst_56360 = (state_56560[(12)]);
var inst_56470 = (state_56560[(15)]);
var inst_56471 = (state_56560[(16)]);
var _ = (function (){var statearr_56585 = state_56560;
(statearr_56585[(4)] = cljs.core.cons((16),(state_56560[(4)])));

return statearr_56585;
})();
var inst_56447 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56448 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56449 = [(1),(2)];
var inst_56450 = (new cljs.core.PersistentVector(null,2,(5),inst_56448,inst_56449,null));
var inst_56451 = [inst_56450];
var inst_56452 = (new cljs.core.PersistentVector(null,1,(5),inst_56447,inst_56451,null));
var inst_56468 = cljs.core.deref(inst_56360);
var inst_56469 = (new cljs.core.List(null,inst_56468,null,(1),null));
var inst_56470__$1 = (new cljs.core.List(null,inst_56452,inst_56469,(2),null));
var inst_56471__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56470__$1);
var state_56560__$1 = (function (){var statearr_56589 = state_56560;
(statearr_56589[(15)] = inst_56470__$1);

(statearr_56589[(16)] = inst_56471__$1);

return statearr_56589;
})();
if(cljs.core.truth_(inst_56471__$1)){
var statearr_56590_57151 = state_56560__$1;
(statearr_56590_57151[(1)] = (17));

} else {
var statearr_56592_57153 = state_56560__$1;
(statearr_56592_57153[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (22))){
var inst_56360 = (state_56560[(12)]);
var inst_56529 = (state_56560[(10)]);
var inst_56530 = (state_56560[(17)]);
var _ = (function (){var statearr_56595 = state_56560;
(statearr_56595[(4)] = cljs.core.cons((25),(state_56560[(4)])));

return statearr_56595;
})();
var inst_56518 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56519 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56520 = [(1),(2)];
var inst_56521 = (new cljs.core.PersistentVector(null,2,(5),inst_56519,inst_56520,null));
var inst_56522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56523 = [(3)];
var inst_56524 = (new cljs.core.PersistentVector(null,1,(5),inst_56522,inst_56523,null));
var inst_56525 = [inst_56521,inst_56524];
var inst_56526 = (new cljs.core.PersistentVector(null,2,(5),inst_56518,inst_56525,null));
var inst_56527 = cljs.core.deref(inst_56360);
var inst_56528 = (new cljs.core.List(null,inst_56527,null,(1),null));
var inst_56529__$1 = (new cljs.core.List(null,inst_56526,inst_56528,(2),null));
var inst_56530__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56529__$1);
var state_56560__$1 = (function (){var statearr_56598 = state_56560;
(statearr_56598[(10)] = inst_56529__$1);

(statearr_56598[(17)] = inst_56530__$1);

return statearr_56598;
})();
if(cljs.core.truth_(inst_56530__$1)){
var statearr_56600_57154 = state_56560__$1;
(statearr_56600_57154[(1)] = (26));

} else {
var statearr_56601_57155 = state_56560__$1;
(statearr_56601_57155[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (6))){
var inst_56368 = (state_56560[(7)]);
var inst_56425 = (state_56560[(2)]);
var inst_56426 = (inst_56368.cljs$core$IFn$_invoke$arity$0 ? inst_56368.cljs$core$IFn$_invoke$arity$0() : inst_56368.call(null));
var inst_56431 = cljs.core.async.timeout((20));
var state_56560__$1 = (function (){var statearr_56606 = state_56560;
(statearr_56606[(18)] = inst_56425);

(statearr_56606[(19)] = inst_56426);

return statearr_56606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56560__$1,(12),inst_56431);
} else {
if((state_val_56561 === (28))){
var inst_56530 = (state_56560[(17)]);
var inst_56552 = (state_56560[(2)]);
var _ = (function (){var statearr_56610 = state_56560;
(statearr_56610[(4)] = cljs.core.rest((state_56560[(4)])));

return statearr_56610;
})();
var state_56560__$1 = (function (){var statearr_56611 = state_56560;
(statearr_56611[(20)] = inst_56552);

return statearr_56611;
})();
var statearr_56612_57158 = state_56560__$1;
(statearr_56612_57158[(2)] = inst_56530);

(statearr_56612_57158[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (25))){
var _ = (function (){var statearr_56614 = state_56560;
(statearr_56614[(4)] = cljs.core.rest((state_56560[(4)])));

return statearr_56614;
})();
var state_56560__$1 = state_56560;
var ex56605 = (state_56560__$1[(2)]);
var statearr_56618_57159 = state_56560__$1;
(statearr_56618_57159[(5)] = ex56605);


var statearr_56619_57160 = state_56560__$1;
(statearr_56619_57160[(1)] = (24));

(statearr_56619_57160[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (17))){
var inst_56470 = (state_56560[(15)]);
var inst_56473 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56474 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56475 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56476 = cljs.core.cons(inst_56475,inst_56470);
var inst_56477 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56474,24,inst_56476,"Manual flush should flush all items"];
var inst_56478 = cljs.core.PersistentHashMap.fromArrays(inst_56473,inst_56477);
var inst_56479 = cljs.test.report.call(null,inst_56478);
var state_56560__$1 = state_56560;
var statearr_56620_57164 = state_56560__$1;
(statearr_56620_57164[(2)] = inst_56479);

(statearr_56620_57164[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (3))){
var inst_56372 = (state_56560[(2)]);
var inst_56373 = cljs.core.async.timeout((20));
var state_56560__$1 = (function (){var statearr_56621 = state_56560;
(statearr_56621[(21)] = inst_56372);

return statearr_56621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56560__$1,(4),inst_56373);
} else {
if((state_val_56561 === (12))){
var inst_56433 = (state_56560[(2)]);
var state_56560__$1 = (function (){var statearr_56622 = state_56560;
(statearr_56622[(22)] = inst_56433);

return statearr_56622;
})();
var statearr_56623_57165 = state_56560__$1;
(statearr_56623_57165[(2)] = null);

(statearr_56623_57165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (2))){
var inst_56358 = (state_56560[(11)]);
var inst_56370 = (state_56560[(2)]);
var state_56560__$1 = (function (){var statearr_56624 = state_56560;
(statearr_56624[(23)] = inst_56370);

return statearr_56624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56560__$1,(3),inst_56358,(2));
} else {
if((state_val_56561 === (23))){
var inst_56555 = (state_56560[(2)]);
var inst_56556 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56560__$1 = (function (){var statearr_56625 = state_56560;
(statearr_56625[(24)] = inst_56555);

return statearr_56625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56560__$1,inst_56556);
} else {
if((state_val_56561 === (19))){
var inst_56471 = (state_56560[(16)]);
var inst_56496 = (state_56560[(2)]);
var _ = (function (){var statearr_56626 = state_56560;
(statearr_56626[(4)] = cljs.core.rest((state_56560[(4)])));

return statearr_56626;
})();
var state_56560__$1 = (function (){var statearr_56627 = state_56560;
(statearr_56627[(25)] = inst_56496);

return statearr_56627;
})();
var statearr_56628_57166 = state_56560__$1;
(statearr_56628_57166[(2)] = inst_56471);

(statearr_56628_57166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (11))){
var inst_56400 = (state_56560[(26)]);
var inst_56422 = (state_56560[(2)]);
var _ = (function (){var statearr_56635 = state_56560;
(statearr_56635[(4)] = cljs.core.rest((state_56560[(4)])));

return statearr_56635;
})();
var state_56560__$1 = (function (){var statearr_56636 = state_56560;
(statearr_56636[(27)] = inst_56422);

return statearr_56636;
})();
var statearr_56637_57167 = state_56560__$1;
(statearr_56637_57167[(2)] = inst_56400);

(statearr_56637_57167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (9))){
var inst_56399 = (state_56560[(28)]);
var inst_56402 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56403 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56404 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56405 = cljs.core.cons(inst_56404,inst_56399);
var inst_56406 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56403,19,inst_56405,"Buffer should not flush automatically without timer"];
var inst_56407 = cljs.core.PersistentHashMap.fromArrays(inst_56402,inst_56406);
var inst_56408 = cljs.test.report.call(null,inst_56407);
var state_56560__$1 = state_56560;
var statearr_56638_57171 = state_56560__$1;
(statearr_56638_57171[(2)] = inst_56408);

(statearr_56638_57171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (5))){
var inst_56360 = (state_56560[(12)]);
var inst_56399 = (state_56560[(28)]);
var inst_56400 = (state_56560[(26)]);
var _ = (function (){var statearr_56639 = state_56560;
(statearr_56639[(4)] = cljs.core.cons((8),(state_56560[(4)])));

return statearr_56639;
})();
var inst_56398 = cljs.core.deref(inst_56360);
var inst_56399__$1 = (new cljs.core.List(null,inst_56398,null,(1),null));
var inst_56400__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56399__$1);
var state_56560__$1 = (function (){var statearr_56640 = state_56560;
(statearr_56640[(28)] = inst_56399__$1);

(statearr_56640[(26)] = inst_56400__$1);

return statearr_56640;
})();
if(cljs.core.truth_(inst_56400__$1)){
var statearr_56641_57173 = state_56560__$1;
(statearr_56641_57173[(1)] = (9));

} else {
var statearr_56642_57174 = state_56560__$1;
(statearr_56642_57174[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (14))){
var inst_56358 = (state_56560[(11)]);
var inst_56499 = (state_56560[(2)]);
var state_56560__$1 = (function (){var statearr_56644 = state_56560;
(statearr_56644[(29)] = inst_56499);

return statearr_56644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56560__$1,(20),inst_56358,(3));
} else {
if((state_val_56561 === (26))){
var inst_56529 = (state_56560[(10)]);
var inst_56532 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56533 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56534 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56535 = cljs.core.cons(inst_56534,inst_56529);
var inst_56536 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56533,29,inst_56535,"Subsequent flush should work"];
var inst_56537 = cljs.core.PersistentHashMap.fromArrays(inst_56532,inst_56536);
var inst_56538 = cljs.test.report.call(null,inst_56537);
var state_56560__$1 = state_56560;
var statearr_56651_57175 = state_56560__$1;
(statearr_56651_57175[(2)] = inst_56538);

(statearr_56651_57175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (16))){
var _ = (function (){var statearr_56652 = state_56560;
(statearr_56652[(4)] = cljs.core.rest((state_56560[(4)])));

return statearr_56652;
})();
var state_56560__$1 = state_56560;
var ex56643 = (state_56560__$1[(2)]);
var statearr_56653_57176 = state_56560__$1;
(statearr_56653_57176[(5)] = ex56643);


var statearr_56654_57177 = state_56560__$1;
(statearr_56654_57177[(1)] = (15));

(statearr_56654_57177[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (10))){
var inst_56399 = (state_56560[(28)]);
var inst_56410 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56411 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56413 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56414 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56415 = cljs.core.cons(inst_56414,inst_56399);
var inst_56416 = (new cljs.core.List(null,inst_56415,null,(1),null));
var inst_56417 = (new cljs.core.List(null,inst_56413,inst_56416,(2),null));
var inst_56418 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56411,19,inst_56417,"Buffer should not flush automatically without timer"];
var inst_56419 = cljs.core.PersistentHashMap.fromArrays(inst_56410,inst_56418);
var inst_56420 = cljs.test.report.call(null,inst_56419);
var state_56560__$1 = state_56560;
var statearr_56656_57178 = state_56560__$1;
(statearr_56656_57178[(2)] = inst_56420);

(statearr_56656_57178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (18))){
var inst_56470 = (state_56560[(15)]);
var inst_56481 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56482 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56483 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56488 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56489 = cljs.core.cons(inst_56488,inst_56470);
var inst_56490 = (new cljs.core.List(null,inst_56489,null,(1),null));
var inst_56491 = (new cljs.core.List(null,inst_56483,inst_56490,(2),null));
var inst_56492 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56482,24,inst_56491,"Manual flush should flush all items"];
var inst_56493 = cljs.core.PersistentHashMap.fromArrays(inst_56481,inst_56492);
var inst_56494 = cljs.test.report.call(null,inst_56493);
var state_56560__$1 = state_56560;
var statearr_56657_57180 = state_56560__$1;
(statearr_56657_57180[(2)] = inst_56494);

(statearr_56657_57180[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56561 === (8))){
var _ = (function (){var statearr_56658 = state_56560;
(statearr_56658[(4)] = cljs.core.rest((state_56560[(4)])));

return statearr_56658;
})();
var state_56560__$1 = state_56560;
var ex56655 = (state_56560__$1[(2)]);
var statearr_56659_57181 = state_56560__$1;
(statearr_56659_57181[(5)] = ex56655);


var statearr_56660_57182 = state_56560__$1;
(statearr_56660_57182[(1)] = (7));

(statearr_56660_57182[(5)] = null);



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
var statearr_56667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56667[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56667[(1)] = (1));

return statearr_56667;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56560){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56560);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56668){var ex__32294__auto__ = e56668;
var statearr_56669_57186 = state_56560;
(statearr_56669_57186[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56560[(4)]))){
var statearr_56670_57187 = state_56560;
(statearr_56670_57187[(1)] = cljs.core.first((state_56560[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57188 = state_56560;
state_56560 = G__57188;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56560){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56671 = f__32362__auto__();
(statearr_56671[(6)] = c__32361__auto__);

return statearr_56671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56335","meta56335",1353472663,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56334");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56334");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56334.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56334 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56334(meta56335){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334(meta56335));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56334(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672 = (function (meta56673){
this.meta56673 = meta56673;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56674,meta56673__$1){
var self__ = this;
var _56674__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672(meta56673__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56674){
var self__ = this;
var _56674__$1 = this;
return self__.meta56673;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672.prototype.call = (function (unused__11801__auto__){
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

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672.prototype.apply = (function (self__,args56675){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56675)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56886){
var state_val_56887 = (state_56886[(1)]);
if((state_val_56887 === (7))){
var inst_56692 = (state_56886[(2)]);
var inst_56693 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56694 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56695 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56694,47,inst_56692,"Should not flush before timeout"];
var inst_56696 = cljs.core.PersistentHashMap.fromArrays(inst_56693,inst_56695);
var inst_56697 = cljs.test.report.call(null,inst_56696);
var state_56886__$1 = state_56886;
var statearr_56889_57191 = state_56886__$1;
(statearr_56889_57191[(2)] = inst_56697);

(statearr_56889_57191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (20))){
var inst_56779 = (state_56886[(2)]);
var inst_56780 = cljs.core.async.timeout((50));
var state_56886__$1 = (function (){var statearr_56890 = state_56886;
(statearr_56890[(7)] = inst_56779);

return statearr_56890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56886__$1,(21),inst_56780);
} else {
if((state_val_56887 === (27))){
var _ = (function (){var statearr_56891 = state_56886;
(statearr_56891[(4)] = cljs.core.rest((state_56886[(4)])));

return statearr_56891;
})();
var state_56886__$1 = state_56886;
var ex56888 = (state_56886__$1[(2)]);
var statearr_56892_57192 = state_56886__$1;
(statearr_56892_57192[(5)] = ex56888);


var statearr_56893_57193 = state_56886__$1;
(statearr_56893_57193[(1)] = (26));

(statearr_56893_57193[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (1))){
var inst_56677 = (state_56886[(8)]);
var inst_56679 = (state_56886[(9)]);
var inst_56677__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56678 = cljs.core.PersistentVector.EMPTY;
var inst_56679__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56678);
var inst_56680 = (function (){var input_ch = inst_56677__$1;
var results = inst_56679__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56681 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56682 = [inst_56677__$1,(100),inst_56680];
var inst_56683 = cljs.core.PersistentHashMap.fromArrays(inst_56681,inst_56682);
var inst_56684 = bb_web_ds_tools.components.async_buffer.create(inst_56683);
var state_56886__$1 = (function (){var statearr_56894 = state_56886;
(statearr_56894[(8)] = inst_56677__$1);

(statearr_56894[(9)] = inst_56679__$1);

(statearr_56894[(10)] = inst_56684);

return statearr_56894;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56886__$1,(2),inst_56677__$1,(1));
} else {
if((state_val_56887 === (24))){
var inst_56679 = (state_56886[(9)]);
var inst_56807 = (state_56886[(11)]);
var inst_56808 = (state_56886[(12)]);
var _ = (function (){var statearr_56895 = state_56886;
(statearr_56895[(4)] = cljs.core.cons((27),(state_56886[(4)])));

return statearr_56895;
})();
var inst_56799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56800 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56801 = [(1),(2)];
var inst_56802 = (new cljs.core.PersistentVector(null,2,(5),inst_56800,inst_56801,null));
var inst_56803 = [inst_56802];
var inst_56804 = (new cljs.core.PersistentVector(null,1,(5),inst_56799,inst_56803,null));
var inst_56805 = cljs.core.deref(inst_56679);
var inst_56806 = (new cljs.core.List(null,inst_56805,null,(1),null));
var inst_56807__$1 = (new cljs.core.List(null,inst_56804,inst_56806,(2),null));
var inst_56808__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56807__$1);
var state_56886__$1 = (function (){var statearr_56896 = state_56886;
(statearr_56896[(11)] = inst_56807__$1);

(statearr_56896[(12)] = inst_56808__$1);

return statearr_56896;
})();
if(cljs.core.truth_(inst_56808__$1)){
var statearr_56897_57198 = state_56886__$1;
(statearr_56897_57198[(1)] = (28));

} else {
var statearr_56898_57199 = state_56886__$1;
(statearr_56898_57199[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (4))){
var inst_56691 = (state_56886[(2)]);
var state_56886__$1 = (function (){var statearr_56899 = state_56886;
(statearr_56899[(13)] = inst_56691);

return statearr_56899;
})();
var statearr_56900_57200 = state_56886__$1;
(statearr_56900_57200[(2)] = null);

(statearr_56900_57200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (15))){
var inst_56733 = (state_56886[(2)]);
var inst_56734 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56735 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56736 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56735,50,inst_56733,"Should flush after timeout"];
var inst_56737 = cljs.core.PersistentHashMap.fromArrays(inst_56734,inst_56736);
var inst_56738 = cljs.test.report.call(null,inst_56737);
var state_56886__$1 = state_56886;
var statearr_56901_57203 = state_56886__$1;
(statearr_56901_57203[(2)] = inst_56738);

(statearr_56901_57203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (21))){
var inst_56677 = (state_56886[(8)]);
var inst_56782 = (state_56886[(2)]);
var state_56886__$1 = (function (){var statearr_56902 = state_56886;
(statearr_56902[(14)] = inst_56782);

return statearr_56902;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56886__$1,(22),inst_56677,(4));
} else {
if((state_val_56887 === (31))){
var inst_56835 = (state_56886[(2)]);
var state_56886__$1 = (function (){var statearr_56903 = state_56886;
(statearr_56903[(15)] = inst_56835);

return statearr_56903;
})();
var statearr_56904_57206 = state_56886__$1;
(statearr_56904_57206[(2)] = null);

(statearr_56904_57206[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (32))){
var inst_56679 = (state_56886[(9)]);
var inst_56858 = (state_56886[(16)]);
var inst_56859 = (state_56886[(17)]);
var _ = (function (){var statearr_56905 = state_56886;
(statearr_56905[(4)] = cljs.core.cons((35),(state_56886[(4)])));

return statearr_56905;
})();
var inst_56847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56848 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56849 = [(1),(2)];
var inst_56850 = (new cljs.core.PersistentVector(null,2,(5),inst_56848,inst_56849,null));
var inst_56851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56852 = [(3),(4)];
var inst_56853 = (new cljs.core.PersistentVector(null,2,(5),inst_56851,inst_56852,null));
var inst_56854 = [inst_56850,inst_56853];
var inst_56855 = (new cljs.core.PersistentVector(null,2,(5),inst_56847,inst_56854,null));
var inst_56856 = cljs.core.deref(inst_56679);
var inst_56857 = (new cljs.core.List(null,inst_56856,null,(1),null));
var inst_56858__$1 = (new cljs.core.List(null,inst_56855,inst_56857,(2),null));
var inst_56859__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56858__$1);
var state_56886__$1 = (function (){var statearr_56906 = state_56886;
(statearr_56906[(16)] = inst_56858__$1);

(statearr_56906[(17)] = inst_56859__$1);

return statearr_56906;
})();
if(cljs.core.truth_(inst_56859__$1)){
var statearr_56907_57208 = state_56886__$1;
(statearr_56907_57208[(1)] = (36));

} else {
var statearr_56908_57209 = state_56886__$1;
(statearr_56908_57209[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (33))){
var inst_56883 = (state_56886[(2)]);
var inst_56884 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56886__$1 = (function (){var statearr_56909 = state_56886;
(statearr_56909[(18)] = inst_56883);

return statearr_56909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56886__$1,inst_56884);
} else {
if((state_val_56887 === (13))){
var inst_56679 = (state_56886[(9)]);
var inst_56752 = (state_56886[(19)]);
var inst_56753 = (state_56886[(20)]);
var _ = (function (){var statearr_56910 = state_56886;
(statearr_56910[(4)] = cljs.core.cons((16),(state_56886[(4)])));

return statearr_56910;
})();
var inst_56744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56745 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56746 = [(1),(2)];
var inst_56747 = (new cljs.core.PersistentVector(null,2,(5),inst_56745,inst_56746,null));
var inst_56748 = [inst_56747];
var inst_56749 = (new cljs.core.PersistentVector(null,1,(5),inst_56744,inst_56748,null));
var inst_56750 = cljs.core.deref(inst_56679);
var inst_56751 = (new cljs.core.List(null,inst_56750,null,(1),null));
var inst_56752__$1 = (new cljs.core.List(null,inst_56749,inst_56751,(2),null));
var inst_56753__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56752__$1);
var state_56886__$1 = (function (){var statearr_56911 = state_56886;
(statearr_56911[(19)] = inst_56752__$1);

(statearr_56911[(20)] = inst_56753__$1);

return statearr_56911;
})();
if(cljs.core.truth_(inst_56753__$1)){
var statearr_56912_57210 = state_56886__$1;
(statearr_56912_57210[(1)] = (17));

} else {
var statearr_56913_57211 = state_56886__$1;
(statearr_56913_57211[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (22))){
var inst_56784 = (state_56886[(2)]);
var inst_56785 = cljs.core.async.timeout((20));
var state_56886__$1 = (function (){var statearr_56914 = state_56886;
(statearr_56914[(21)] = inst_56784);

return statearr_56914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56886__$1,(23),inst_56785);
} else {
if((state_val_56887 === (36))){
var inst_56858 = (state_56886[(16)]);
var inst_56861 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56862 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56863 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56864 = cljs.core.cons(inst_56863,inst_56858);
var inst_56865 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56862,60,inst_56864,"Should flush 3,4 after timeout from first message"];
var inst_56866 = cljs.core.PersistentHashMap.fromArrays(inst_56861,inst_56865);
var inst_56867 = cljs.test.report.call(null,inst_56866);
var state_56886__$1 = state_56886;
var statearr_56915_57215 = state_56886__$1;
(statearr_56915_57215[(2)] = inst_56867);

(statearr_56915_57215[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (29))){
var inst_56807 = (state_56886[(11)]);
var inst_56818 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56819 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56820 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56821 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56822 = cljs.core.cons(inst_56821,inst_56807);
var inst_56823 = (new cljs.core.List(null,inst_56822,null,(1),null));
var inst_56824 = (new cljs.core.List(null,inst_56820,inst_56823,(2),null));
var inst_56825 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56819,57,inst_56824,"Should not flush 3,4 yet"];
var inst_56826 = cljs.core.PersistentHashMap.fromArrays(inst_56818,inst_56825);
var inst_56827 = cljs.test.report.call(null,inst_56826);
var state_56886__$1 = state_56886;
var statearr_56919_57216 = state_56886__$1;
(statearr_56919_57216[(2)] = inst_56827);

(statearr_56919_57216[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (6))){
var inst_56729 = (state_56886[(2)]);
var inst_56730 = cljs.core.async.timeout((100));
var state_56886__$1 = (function (){var statearr_56921 = state_56886;
(statearr_56921[(22)] = inst_56729);

return statearr_56921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56886__$1,(12),inst_56730);
} else {
if((state_val_56887 === (28))){
var inst_56807 = (state_56886[(11)]);
var inst_56810 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56811 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56812 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56813 = cljs.core.cons(inst_56812,inst_56807);
var inst_56814 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56811,57,inst_56813,"Should not flush 3,4 yet"];
var inst_56815 = cljs.core.PersistentHashMap.fromArrays(inst_56810,inst_56814);
var inst_56816 = cljs.test.report.call(null,inst_56815);
var state_56886__$1 = state_56886;
var statearr_56923_57222 = state_56886__$1;
(statearr_56923_57222[(2)] = inst_56816);

(statearr_56923_57222[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (25))){
var inst_56832 = (state_56886[(2)]);
var inst_56833 = cljs.core.async.timeout((80));
var state_56886__$1 = (function (){var statearr_56926 = state_56886;
(statearr_56926[(23)] = inst_56832);

return statearr_56926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56886__$1,(31),inst_56833);
} else {
if((state_val_56887 === (34))){
var inst_56836 = (state_56886[(2)]);
var inst_56837 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56838 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56839 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56838,60,inst_56836,"Should flush 3,4 after timeout from first message"];
var inst_56840 = cljs.core.PersistentHashMap.fromArrays(inst_56837,inst_56839);
var inst_56841 = cljs.test.report.call(null,inst_56840);
var state_56886__$1 = state_56886;
var statearr_56931_57224 = state_56886__$1;
(statearr_56931_57224[(2)] = inst_56841);

(statearr_56931_57224[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (17))){
var inst_56752 = (state_56886[(19)]);
var inst_56755 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56756 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56757 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56758 = cljs.core.cons(inst_56757,inst_56752);
var inst_56759 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56756,50,inst_56758,"Should flush after timeout"];
var inst_56760 = cljs.core.PersistentHashMap.fromArrays(inst_56755,inst_56759);
var inst_56761 = cljs.test.report.call(null,inst_56760);
var state_56886__$1 = state_56886;
var statearr_56933_57225 = state_56886__$1;
(statearr_56933_57225[(2)] = inst_56761);

(statearr_56933_57225[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (3))){
var inst_56688 = (state_56886[(2)]);
var inst_56689 = cljs.core.async.timeout((50));
var state_56886__$1 = (function (){var statearr_56934 = state_56886;
(statearr_56934[(24)] = inst_56688);

return statearr_56934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56886__$1,(4),inst_56689);
} else {
if((state_val_56887 === (12))){
var inst_56732 = (state_56886[(2)]);
var state_56886__$1 = (function (){var statearr_56936 = state_56886;
(statearr_56936[(25)] = inst_56732);

return statearr_56936;
})();
var statearr_56937_57227 = state_56886__$1;
(statearr_56937_57227[(2)] = null);

(statearr_56937_57227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (2))){
var inst_56677 = (state_56886[(8)]);
var inst_56686 = (state_56886[(2)]);
var state_56886__$1 = (function (){var statearr_56939 = state_56886;
(statearr_56939[(26)] = inst_56686);

return statearr_56939;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56886__$1,(3),inst_56677,(2));
} else {
if((state_val_56887 === (23))){
var inst_56787 = (state_56886[(2)]);
var state_56886__$1 = (function (){var statearr_56941 = state_56886;
(statearr_56941[(27)] = inst_56787);

return statearr_56941;
})();
var statearr_56942_57230 = state_56886__$1;
(statearr_56942_57230[(2)] = null);

(statearr_56942_57230[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (35))){
var _ = (function (){var statearr_56944 = state_56886;
(statearr_56944[(4)] = cljs.core.rest((state_56886[(4)])));

return statearr_56944;
})();
var state_56886__$1 = state_56886;
var ex56938 = (state_56886__$1[(2)]);
var statearr_56945_57232 = state_56886__$1;
(statearr_56945_57232[(5)] = ex56938);


var statearr_56946_57233 = state_56886__$1;
(statearr_56946_57233[(1)] = (34));

(statearr_56946_57233[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (19))){
var inst_56753 = (state_56886[(20)]);
var inst_56774 = (state_56886[(2)]);
var _ = (function (){var statearr_56951 = state_56886;
(statearr_56951[(4)] = cljs.core.rest((state_56886[(4)])));

return statearr_56951;
})();
var state_56886__$1 = (function (){var statearr_56952 = state_56886;
(statearr_56952[(28)] = inst_56774);

return statearr_56952;
})();
var statearr_56953_57237 = state_56886__$1;
(statearr_56953_57237[(2)] = inst_56753);

(statearr_56953_57237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (11))){
var inst_56705 = (state_56886[(29)]);
var inst_56726 = (state_56886[(2)]);
var _ = (function (){var statearr_56957 = state_56886;
(statearr_56957[(4)] = cljs.core.rest((state_56886[(4)])));

return statearr_56957;
})();
var state_56886__$1 = (function (){var statearr_56959 = state_56886;
(statearr_56959[(30)] = inst_56726);

return statearr_56959;
})();
var statearr_56960_57241 = state_56886__$1;
(statearr_56960_57241[(2)] = inst_56705);

(statearr_56960_57241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (9))){
var inst_56704 = (state_56886[(31)]);
var inst_56707 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56708 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56709 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56710 = cljs.core.cons(inst_56709,inst_56704);
var inst_56711 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56708,47,inst_56710,"Should not flush before timeout"];
var inst_56712 = cljs.core.PersistentHashMap.fromArrays(inst_56707,inst_56711);
var inst_56713 = cljs.test.report.call(null,inst_56712);
var state_56886__$1 = state_56886;
var statearr_56961_57245 = state_56886__$1;
(statearr_56961_57245[(2)] = inst_56713);

(statearr_56961_57245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (5))){
var inst_56679 = (state_56886[(9)]);
var inst_56704 = (state_56886[(31)]);
var inst_56705 = (state_56886[(29)]);
var _ = (function (){var statearr_56963 = state_56886;
(statearr_56963[(4)] = cljs.core.cons((8),(state_56886[(4)])));

return statearr_56963;
})();
var inst_56703 = cljs.core.deref(inst_56679);
var inst_56704__$1 = (new cljs.core.List(null,inst_56703,null,(1),null));
var inst_56705__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56704__$1);
var state_56886__$1 = (function (){var statearr_56964 = state_56886;
(statearr_56964[(31)] = inst_56704__$1);

(statearr_56964[(29)] = inst_56705__$1);

return statearr_56964;
})();
if(cljs.core.truth_(inst_56705__$1)){
var statearr_56965_57251 = state_56886__$1;
(statearr_56965_57251[(1)] = (9));

} else {
var statearr_56966_57252 = state_56886__$1;
(statearr_56966_57252[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (14))){
var inst_56677 = (state_56886[(8)]);
var inst_56777 = (state_56886[(2)]);
var state_56886__$1 = (function (){var statearr_56969 = state_56886;
(statearr_56969[(32)] = inst_56777);

return statearr_56969;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56886__$1,(20),inst_56677,(3));
} else {
if((state_val_56887 === (26))){
var inst_56788 = (state_56886[(2)]);
var inst_56789 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56790 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56791 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56790,57,inst_56788,"Should not flush 3,4 yet"];
var inst_56792 = cljs.core.PersistentHashMap.fromArrays(inst_56789,inst_56791);
var inst_56793 = cljs.test.report.call(null,inst_56792);
var state_56886__$1 = state_56886;
var statearr_56970_57253 = state_56886__$1;
(statearr_56970_57253[(2)] = inst_56793);

(statearr_56970_57253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (16))){
var _ = (function (){var statearr_56971 = state_56886;
(statearr_56971[(4)] = cljs.core.rest((state_56886[(4)])));

return statearr_56971;
})();
var state_56886__$1 = state_56886;
var ex56967 = (state_56886__$1[(2)]);
var statearr_56972_57254 = state_56886__$1;
(statearr_56972_57254[(5)] = ex56967);


var statearr_56973_57255 = state_56886__$1;
(statearr_56973_57255[(1)] = (15));

(statearr_56973_57255[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (38))){
var inst_56859 = (state_56886[(17)]);
var inst_56880 = (state_56886[(2)]);
var _ = (function (){var statearr_56974 = state_56886;
(statearr_56974[(4)] = cljs.core.rest((state_56886[(4)])));

return statearr_56974;
})();
var state_56886__$1 = (function (){var statearr_56975 = state_56886;
(statearr_56975[(33)] = inst_56880);

return statearr_56975;
})();
var statearr_56976_57256 = state_56886__$1;
(statearr_56976_57256[(2)] = inst_56859);

(statearr_56976_57256[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (30))){
var inst_56808 = (state_56886[(12)]);
var inst_56829 = (state_56886[(2)]);
var _ = (function (){var statearr_56977 = state_56886;
(statearr_56977[(4)] = cljs.core.rest((state_56886[(4)])));

return statearr_56977;
})();
var state_56886__$1 = (function (){var statearr_56978 = state_56886;
(statearr_56978[(34)] = inst_56829);

return statearr_56978;
})();
var statearr_56979_57257 = state_56886__$1;
(statearr_56979_57257[(2)] = inst_56808);

(statearr_56979_57257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (10))){
var inst_56704 = (state_56886[(31)]);
var inst_56715 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56716 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56717 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56718 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56719 = cljs.core.cons(inst_56718,inst_56704);
var inst_56720 = (new cljs.core.List(null,inst_56719,null,(1),null));
var inst_56721 = (new cljs.core.List(null,inst_56717,inst_56720,(2),null));
var inst_56722 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56716,47,inst_56721,"Should not flush before timeout"];
var inst_56723 = cljs.core.PersistentHashMap.fromArrays(inst_56715,inst_56722);
var inst_56724 = cljs.test.report.call(null,inst_56723);
var state_56886__$1 = state_56886;
var statearr_56980_57258 = state_56886__$1;
(statearr_56980_57258[(2)] = inst_56724);

(statearr_56980_57258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (18))){
var inst_56752 = (state_56886[(19)]);
var inst_56763 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56764 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56765 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56766 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56767 = cljs.core.cons(inst_56766,inst_56752);
var inst_56768 = (new cljs.core.List(null,inst_56767,null,(1),null));
var inst_56769 = (new cljs.core.List(null,inst_56765,inst_56768,(2),null));
var inst_56770 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56764,50,inst_56769,"Should flush after timeout"];
var inst_56771 = cljs.core.PersistentHashMap.fromArrays(inst_56763,inst_56770);
var inst_56772 = cljs.test.report.call(null,inst_56771);
var state_56886__$1 = state_56886;
var statearr_56982_57262 = state_56886__$1;
(statearr_56982_57262[(2)] = inst_56772);

(statearr_56982_57262[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (37))){
var inst_56858 = (state_56886[(16)]);
var inst_56869 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56870 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56871 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56872 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56873 = cljs.core.cons(inst_56872,inst_56858);
var inst_56874 = (new cljs.core.List(null,inst_56873,null,(1),null));
var inst_56875 = (new cljs.core.List(null,inst_56871,inst_56874,(2),null));
var inst_56876 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56870,60,inst_56875,"Should flush 3,4 after timeout from first message"];
var inst_56877 = cljs.core.PersistentHashMap.fromArrays(inst_56869,inst_56876);
var inst_56878 = cljs.test.report.call(null,inst_56877);
var state_56886__$1 = state_56886;
var statearr_56983_57263 = state_56886__$1;
(statearr_56983_57263[(2)] = inst_56878);

(statearr_56983_57263[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56887 === (8))){
var _ = (function (){var statearr_56984 = state_56886;
(statearr_56984[(4)] = cljs.core.rest((state_56886[(4)])));

return statearr_56984;
})();
var state_56886__$1 = state_56886;
var ex56981 = (state_56886__$1[(2)]);
var statearr_56985_57265 = state_56886__$1;
(statearr_56985_57265[(5)] = ex56981);


var statearr_56986_57266 = state_56886__$1;
(statearr_56986_57266[(1)] = (7));

(statearr_56986_57266[(5)] = null);



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
var statearr_56987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56987[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56987[(1)] = (1));

return statearr_56987;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56886){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56886);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56988){var ex__32294__auto__ = e56988;
var statearr_56989_57267 = state_56886;
(statearr_56989_57267[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56886[(4)]))){
var statearr_56990_57268 = state_56886;
(statearr_56990_57268[(1)] = cljs.core.first((state_56886[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57269 = state_56886;
state_56886 = G__57269;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56886){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56991 = f__32362__auto__();
(statearr_56991[(6)] = c__32361__auto__);

return statearr_56991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56673","meta56673",-1413700960,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56672");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56672");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56672.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56672 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56672(meta56673){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672(meta56673));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56672(null));
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
var G__56998 = (arguments.length - (1));
switch (G__56998) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.prototype.apply = (function (self__,args56997){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56997)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56994.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_57066){
var state_val_57067 = (state_57066[(1)]);
if((state_val_57067 === (7))){
var inst_57019 = (state_57066[(2)]);
var inst_57020 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57021 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57022 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_57021,78,inst_57019,"Closing input should flush remaining"];
var inst_57023 = cljs.core.PersistentHashMap.fromArrays(inst_57020,inst_57022);
var inst_57024 = cljs.test.report.call(null,inst_57023);
var state_57066__$1 = state_57066;
var statearr_57074_57275 = state_57066__$1;
(statearr_57074_57275[(2)] = inst_57024);

(statearr_57074_57275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57067 === (1))){
var inst_57002 = (state_57066[(7)]);
var inst_57004 = (state_57066[(8)]);
var inst_57002__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_57003 = cljs.core.PersistentVector.EMPTY;
var inst_57004__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_57003);
var inst_57005 = (function (){var input_ch = inst_57002__$1;
var results = inst_57004__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_57006 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_57007 = [inst_57002__$1,inst_57005];
var inst_57008 = cljs.core.PersistentHashMap.fromArrays(inst_57006,inst_57007);
var inst_57009 = bb_web_ds_tools.components.async_buffer.create(inst_57008);
var state_57066__$1 = (function (){var statearr_57075 = state_57066;
(statearr_57075[(7)] = inst_57002__$1);

(statearr_57075[(8)] = inst_57004__$1);

(statearr_57075[(9)] = inst_57009);

return statearr_57075;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57066__$1,(2),inst_57002__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_57067 === (4))){
var inst_57018 = (state_57066[(2)]);
var state_57066__$1 = (function (){var statearr_57076 = state_57066;
(statearr_57076[(10)] = inst_57018);

return statearr_57076;
})();
var statearr_57077_57276 = state_57066__$1;
(statearr_57077_57276[(2)] = null);

(statearr_57077_57276[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57067 === (6))){
var inst_57063 = (state_57066[(2)]);
var inst_57064 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_57066__$1 = (function (){var statearr_57080 = state_57066;
(statearr_57080[(11)] = inst_57063);

return statearr_57080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57066__$1,inst_57064);
} else {
if((state_val_57067 === (3))){
var inst_57002 = (state_57066[(7)]);
var inst_57014 = (state_57066[(2)]);
var inst_57015 = cljs.core.async.close_BANG_(inst_57002);
var inst_57016 = cljs.core.async.timeout((20));
var state_57066__$1 = (function (){var statearr_57085 = state_57066;
(statearr_57085[(12)] = inst_57014);

(statearr_57085[(13)] = inst_57015);

return statearr_57085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57066__$1,(4),inst_57016);
} else {
if((state_val_57067 === (2))){
var inst_57002 = (state_57066[(7)]);
var inst_57011 = (state_57066[(2)]);
var state_57066__$1 = (function (){var statearr_57095 = state_57066;
(statearr_57095[(14)] = inst_57011);

return statearr_57095;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57066__$1,(3),inst_57002,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_57067 === (11))){
var inst_57039 = (state_57066[(15)]);
var inst_57060 = (state_57066[(2)]);
var _ = (function (){var statearr_57097 = state_57066;
(statearr_57097[(4)] = cljs.core.rest((state_57066[(4)])));

return statearr_57097;
})();
var state_57066__$1 = (function (){var statearr_57098 = state_57066;
(statearr_57098[(16)] = inst_57060);

return statearr_57098;
})();
var statearr_57099_57280 = state_57066__$1;
(statearr_57099_57280[(2)] = inst_57039);

(statearr_57099_57280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57067 === (9))){
var inst_57038 = (state_57066[(17)]);
var inst_57041 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57042 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57043 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57044 = cljs.core.cons(inst_57043,inst_57038);
var inst_57045 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_57042,78,inst_57044,"Closing input should flush remaining"];
var inst_57046 = cljs.core.PersistentHashMap.fromArrays(inst_57041,inst_57045);
var inst_57047 = cljs.test.report.call(null,inst_57046);
var state_57066__$1 = state_57066;
var statearr_57100_57282 = state_57066__$1;
(statearr_57100_57282[(2)] = inst_57047);

(statearr_57100_57282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57067 === (5))){
var inst_57004 = (state_57066[(8)]);
var inst_57038 = (state_57066[(17)]);
var inst_57039 = (state_57066[(15)]);
var _ = (function (){var statearr_57103 = state_57066;
(statearr_57103[(4)] = cljs.core.cons((8),(state_57066[(4)])));

return statearr_57103;
})();
var inst_57030 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57031 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57032 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_57033 = (new cljs.core.PersistentVector(null,2,(5),inst_57031,inst_57032,null));
var inst_57034 = [inst_57033];
var inst_57035 = (new cljs.core.PersistentVector(null,1,(5),inst_57030,inst_57034,null));
var inst_57036 = cljs.core.deref(inst_57004);
var inst_57037 = (new cljs.core.List(null,inst_57036,null,(1),null));
var inst_57038__$1 = (new cljs.core.List(null,inst_57035,inst_57037,(2),null));
var inst_57039__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_57038__$1);
var state_57066__$1 = (function (){var statearr_57104 = state_57066;
(statearr_57104[(17)] = inst_57038__$1);

(statearr_57104[(15)] = inst_57039__$1);

return statearr_57104;
})();
if(cljs.core.truth_(inst_57039__$1)){
var statearr_57105_57283 = state_57066__$1;
(statearr_57105_57283[(1)] = (9));

} else {
var statearr_57109_57284 = state_57066__$1;
(statearr_57109_57284[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57067 === (10))){
var inst_57038 = (state_57066[(17)]);
var inst_57049 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57050 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57051 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_57052 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57053 = cljs.core.cons(inst_57052,inst_57038);
var inst_57054 = (new cljs.core.List(null,inst_57053,null,(1),null));
var inst_57055 = (new cljs.core.List(null,inst_57051,inst_57054,(2),null));
var inst_57056 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_57050,78,inst_57055,"Closing input should flush remaining"];
var inst_57057 = cljs.core.PersistentHashMap.fromArrays(inst_57049,inst_57056);
var inst_57058 = cljs.test.report.call(null,inst_57057);
var state_57066__$1 = state_57066;
var statearr_57112_57286 = state_57066__$1;
(statearr_57112_57286[(2)] = inst_57058);

(statearr_57112_57286[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57067 === (8))){
var _ = (function (){var statearr_57113 = state_57066;
(statearr_57113[(4)] = cljs.core.rest((state_57066[(4)])));

return statearr_57113;
})();
var state_57066__$1 = state_57066;
var ex57102 = (state_57066__$1[(2)]);
var statearr_57114_57287 = state_57066__$1;
(statearr_57114_57287[(5)] = ex57102);


var statearr_57115_57288 = state_57066__$1;
(statearr_57115_57288[(1)] = (7));

(statearr_57115_57288[(5)] = null);



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
var statearr_57118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57118[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57118[(1)] = (1));

return statearr_57118;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_57066){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_57066);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57119){var ex__32294__auto__ = e57119;
var statearr_57123_57289 = state_57066;
(statearr_57123_57289[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_57066[(4)]))){
var statearr_57124_57290 = state_57066;
(statearr_57124_57290[(1)] = cljs.core.first((state_57066[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57291 = state_57066;
state_57066 = G__57291;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_57066){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_57066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_57131 = f__32362__auto__();
(statearr_57131[(6)] = c__32361__auto__);

return statearr_57131;
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
