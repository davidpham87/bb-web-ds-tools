goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403 = (function (meta56404){
this.meta56404 = meta56404;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56405,meta56404__$1){
var self__ = this;
var _56405__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403(meta56404__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56405){
var self__ = this;
var _56405__$1 = this;
return self__.meta56404;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56411 = (arguments.length - (1));
switch (G__56411) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403.prototype.apply = (function (self__,args56410){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56410)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_56578){
var state_val_56579 = (state_56578[(1)]);
if((state_val_56579 === (7))){
var inst_56428 = (state_56578[(2)]);
var inst_56429 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56430 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56431 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56430,19,inst_56428,"Buffer should not flush automatically without timer"];
var inst_56432 = cljs.core.PersistentHashMap.fromArrays(inst_56429,inst_56431);
var inst_56433 = cljs.test.report.call(null,inst_56432);
var state_56578__$1 = state_56578;
var statearr_56581_57208 = state_56578__$1;
(statearr_56581_57208[(2)] = inst_56433);

(statearr_56581_57208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (20))){
var inst_56420 = (state_56578[(7)]);
var inst_56517 = (state_56578[(2)]);
var inst_56518 = (inst_56420.cljs$core$IFn$_invoke$arity$0 ? inst_56420.cljs$core$IFn$_invoke$arity$0() : inst_56420.call(null));
var inst_56519 = cljs.core.async.timeout((20));
var state_56578__$1 = (function (){var statearr_56583 = state_56578;
(statearr_56583[(8)] = inst_56517);

(statearr_56583[(9)] = inst_56518);

return statearr_56583;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56578__$1,(21),inst_56519);
} else {
if((state_val_56579 === (27))){
var inst_56544 = (state_56578[(10)]);
var inst_56555 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56556 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56557 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56558 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56559 = cljs.core.cons(inst_56558,inst_56544);
var inst_56560 = (new cljs.core.List(null,inst_56559,null,(1),null));
var inst_56561 = (new cljs.core.List(null,inst_56557,inst_56560,(2),null));
var inst_56562 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56556,29,inst_56561,"Subsequent flush should work"];
var inst_56563 = cljs.core.PersistentHashMap.fromArrays(inst_56555,inst_56562);
var inst_56564 = cljs.test.report.call(null,inst_56563);
var state_56578__$1 = state_56578;
var statearr_56593_57213 = state_56578__$1;
(statearr_56593_57213[(2)] = inst_56564);

(statearr_56593_57213[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (1))){
var inst_56412 = (state_56578[(11)]);
var inst_56415 = (state_56578[(12)]);
var inst_56412__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56414 = cljs.core.PersistentVector.EMPTY;
var inst_56415__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56414);
var inst_56416 = (function (){var input_ch = inst_56412__$1;
var results = inst_56415__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56417 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56418 = [inst_56412__$1,inst_56416];
var inst_56419 = cljs.core.PersistentHashMap.fromArrays(inst_56417,inst_56418);
var inst_56420 = bb_web_ds_tools.components.async_buffer.create(inst_56419);
var state_56578__$1 = (function (){var statearr_56598 = state_56578;
(statearr_56598[(11)] = inst_56412__$1);

(statearr_56598[(12)] = inst_56415__$1);

(statearr_56598[(7)] = inst_56420);

return statearr_56598;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56578__$1,(2),inst_56412__$1,(1));
} else {
if((state_val_56579 === (24))){
var inst_56522 = (state_56578[(2)]);
var inst_56523 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56524 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56525 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56524,29,inst_56522,"Subsequent flush should work"];
var inst_56526 = cljs.core.PersistentHashMap.fromArrays(inst_56523,inst_56525);
var inst_56527 = cljs.test.report.call(null,inst_56526);
var state_56578__$1 = state_56578;
var statearr_56599_57216 = state_56578__$1;
(statearr_56599_57216[(2)] = inst_56527);

(statearr_56599_57216[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (4))){
var inst_56427 = (state_56578[(2)]);
var state_56578__$1 = (function (){var statearr_56601 = state_56578;
(statearr_56601[(13)] = inst_56427);

return statearr_56601;
})();
var statearr_56602_57217 = state_56578__$1;
(statearr_56602_57217[(2)] = null);

(statearr_56602_57217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (15))){
var inst_56470 = (state_56578[(2)]);
var inst_56471 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56472 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56473 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56472,24,inst_56470,"Manual flush should flush all items"];
var inst_56474 = cljs.core.PersistentHashMap.fromArrays(inst_56471,inst_56473);
var inst_56475 = cljs.test.report.call(null,inst_56474);
var state_56578__$1 = state_56578;
var statearr_56603_57221 = state_56578__$1;
(statearr_56603_57221[(2)] = inst_56475);

(statearr_56603_57221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (21))){
var inst_56521 = (state_56578[(2)]);
var state_56578__$1 = (function (){var statearr_56604 = state_56578;
(statearr_56604[(14)] = inst_56521);

return statearr_56604;
})();
var statearr_56605_57222 = state_56578__$1;
(statearr_56605_57222[(2)] = null);

(statearr_56605_57222[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (13))){
var inst_56415 = (state_56578[(12)]);
var inst_56490 = (state_56578[(15)]);
var inst_56491 = (state_56578[(16)]);
var _ = (function (){var statearr_56606 = state_56578;
(statearr_56606[(4)] = cljs.core.cons((16),(state_56578[(4)])));

return statearr_56606;
})();
var inst_56481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56484 = [(1),(2)];
var inst_56485 = (new cljs.core.PersistentVector(null,2,(5),inst_56482,inst_56484,null));
var inst_56486 = [inst_56485];
var inst_56487 = (new cljs.core.PersistentVector(null,1,(5),inst_56481,inst_56486,null));
var inst_56488 = cljs.core.deref(inst_56415);
var inst_56489 = (new cljs.core.List(null,inst_56488,null,(1),null));
var inst_56490__$1 = (new cljs.core.List(null,inst_56487,inst_56489,(2),null));
var inst_56491__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56490__$1);
var state_56578__$1 = (function (){var statearr_56607 = state_56578;
(statearr_56607[(15)] = inst_56490__$1);

(statearr_56607[(16)] = inst_56491__$1);

return statearr_56607;
})();
if(cljs.core.truth_(inst_56491__$1)){
var statearr_56613_57225 = state_56578__$1;
(statearr_56613_57225[(1)] = (17));

} else {
var statearr_56614_57226 = state_56578__$1;
(statearr_56614_57226[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (22))){
var inst_56415 = (state_56578[(12)]);
var inst_56544 = (state_56578[(10)]);
var inst_56545 = (state_56578[(17)]);
var _ = (function (){var statearr_56615 = state_56578;
(statearr_56615[(4)] = cljs.core.cons((25),(state_56578[(4)])));

return statearr_56615;
})();
var inst_56533 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56534 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56535 = [(1),(2)];
var inst_56536 = (new cljs.core.PersistentVector(null,2,(5),inst_56534,inst_56535,null));
var inst_56537 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56538 = [(3)];
var inst_56539 = (new cljs.core.PersistentVector(null,1,(5),inst_56537,inst_56538,null));
var inst_56540 = [inst_56536,inst_56539];
var inst_56541 = (new cljs.core.PersistentVector(null,2,(5),inst_56533,inst_56540,null));
var inst_56542 = cljs.core.deref(inst_56415);
var inst_56543 = (new cljs.core.List(null,inst_56542,null,(1),null));
var inst_56544__$1 = (new cljs.core.List(null,inst_56541,inst_56543,(2),null));
var inst_56545__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56544__$1);
var state_56578__$1 = (function (){var statearr_56616 = state_56578;
(statearr_56616[(10)] = inst_56544__$1);

(statearr_56616[(17)] = inst_56545__$1);

return statearr_56616;
})();
if(cljs.core.truth_(inst_56545__$1)){
var statearr_56617_57229 = state_56578__$1;
(statearr_56617_57229[(1)] = (26));

} else {
var statearr_56618_57230 = state_56578__$1;
(statearr_56618_57230[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (6))){
var inst_56420 = (state_56578[(7)]);
var inst_56465 = (state_56578[(2)]);
var inst_56466 = (inst_56420.cljs$core$IFn$_invoke$arity$0 ? inst_56420.cljs$core$IFn$_invoke$arity$0() : inst_56420.call(null));
var inst_56467 = cljs.core.async.timeout((20));
var state_56578__$1 = (function (){var statearr_56637 = state_56578;
(statearr_56637[(18)] = inst_56465);

(statearr_56637[(19)] = inst_56466);

return statearr_56637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56578__$1,(12),inst_56467);
} else {
if((state_val_56579 === (28))){
var inst_56545 = (state_56578[(17)]);
var inst_56566 = (state_56578[(2)]);
var _ = (function (){var statearr_56638 = state_56578;
(statearr_56638[(4)] = cljs.core.rest((state_56578[(4)])));

return statearr_56638;
})();
var state_56578__$1 = (function (){var statearr_56639 = state_56578;
(statearr_56639[(20)] = inst_56566);

return statearr_56639;
})();
var statearr_56640_57231 = state_56578__$1;
(statearr_56640_57231[(2)] = inst_56545);

(statearr_56640_57231[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (25))){
var _ = (function (){var statearr_56642 = state_56578;
(statearr_56642[(4)] = cljs.core.rest((state_56578[(4)])));

return statearr_56642;
})();
var state_56578__$1 = state_56578;
var ex56619 = (state_56578__$1[(2)]);
var statearr_56643_57232 = state_56578__$1;
(statearr_56643_57232[(5)] = ex56619);


var statearr_56644_57233 = state_56578__$1;
(statearr_56644_57233[(1)] = (24));

(statearr_56644_57233[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (17))){
var inst_56490 = (state_56578[(15)]);
var inst_56493 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56494 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56495 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56496 = cljs.core.cons(inst_56495,inst_56490);
var inst_56497 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56494,24,inst_56496,"Manual flush should flush all items"];
var inst_56498 = cljs.core.PersistentHashMap.fromArrays(inst_56493,inst_56497);
var inst_56499 = cljs.test.report.call(null,inst_56498);
var state_56578__$1 = state_56578;
var statearr_56647_57234 = state_56578__$1;
(statearr_56647_57234[(2)] = inst_56499);

(statearr_56647_57234[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (3))){
var inst_56424 = (state_56578[(2)]);
var inst_56425 = cljs.core.async.timeout((20));
var state_56578__$1 = (function (){var statearr_56652 = state_56578;
(statearr_56652[(21)] = inst_56424);

return statearr_56652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56578__$1,(4),inst_56425);
} else {
if((state_val_56579 === (12))){
var inst_56469 = (state_56578[(2)]);
var state_56578__$1 = (function (){var statearr_56653 = state_56578;
(statearr_56653[(22)] = inst_56469);

return statearr_56653;
})();
var statearr_56656_57236 = state_56578__$1;
(statearr_56656_57236[(2)] = null);

(statearr_56656_57236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (2))){
var inst_56412 = (state_56578[(11)]);
var inst_56422 = (state_56578[(2)]);
var state_56578__$1 = (function (){var statearr_56659 = state_56578;
(statearr_56659[(23)] = inst_56422);

return statearr_56659;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56578__$1,(3),inst_56412,(2));
} else {
if((state_val_56579 === (23))){
var inst_56569 = (state_56578[(2)]);
var inst_56570 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56578__$1 = (function (){var statearr_56664 = state_56578;
(statearr_56664[(24)] = inst_56569);

return statearr_56664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56578__$1,inst_56570);
} else {
if((state_val_56579 === (19))){
var inst_56491 = (state_56578[(16)]);
var inst_56512 = (state_56578[(2)]);
var _ = (function (){var statearr_56666 = state_56578;
(statearr_56666[(4)] = cljs.core.rest((state_56578[(4)])));

return statearr_56666;
})();
var state_56578__$1 = (function (){var statearr_56668 = state_56578;
(statearr_56668[(25)] = inst_56512);

return statearr_56668;
})();
var statearr_56673_57240 = state_56578__$1;
(statearr_56673_57240[(2)] = inst_56491);

(statearr_56673_57240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (11))){
var inst_56441 = (state_56578[(26)]);
var inst_56462 = (state_56578[(2)]);
var _ = (function (){var statearr_56689 = state_56578;
(statearr_56689[(4)] = cljs.core.rest((state_56578[(4)])));

return statearr_56689;
})();
var state_56578__$1 = (function (){var statearr_56694 = state_56578;
(statearr_56694[(27)] = inst_56462);

return statearr_56694;
})();
var statearr_56696_57241 = state_56578__$1;
(statearr_56696_57241[(2)] = inst_56441);

(statearr_56696_57241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (9))){
var inst_56440 = (state_56578[(28)]);
var inst_56443 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56444 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56445 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56446 = cljs.core.cons(inst_56445,inst_56440);
var inst_56447 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56444,19,inst_56446,"Buffer should not flush automatically without timer"];
var inst_56448 = cljs.core.PersistentHashMap.fromArrays(inst_56443,inst_56447);
var inst_56449 = cljs.test.report.call(null,inst_56448);
var state_56578__$1 = state_56578;
var statearr_56703_57242 = state_56578__$1;
(statearr_56703_57242[(2)] = inst_56449);

(statearr_56703_57242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (5))){
var inst_56415 = (state_56578[(12)]);
var inst_56440 = (state_56578[(28)]);
var inst_56441 = (state_56578[(26)]);
var _ = (function (){var statearr_56705 = state_56578;
(statearr_56705[(4)] = cljs.core.cons((8),(state_56578[(4)])));

return statearr_56705;
})();
var inst_56439 = cljs.core.deref(inst_56415);
var inst_56440__$1 = (new cljs.core.List(null,inst_56439,null,(1),null));
var inst_56441__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56440__$1);
var state_56578__$1 = (function (){var statearr_56708 = state_56578;
(statearr_56708[(28)] = inst_56440__$1);

(statearr_56708[(26)] = inst_56441__$1);

return statearr_56708;
})();
if(cljs.core.truth_(inst_56441__$1)){
var statearr_56709_57243 = state_56578__$1;
(statearr_56709_57243[(1)] = (9));

} else {
var statearr_56710_57244 = state_56578__$1;
(statearr_56710_57244[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (14))){
var inst_56412 = (state_56578[(11)]);
var inst_56515 = (state_56578[(2)]);
var state_56578__$1 = (function (){var statearr_56712 = state_56578;
(statearr_56712[(29)] = inst_56515);

return statearr_56712;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56578__$1,(20),inst_56412,(3));
} else {
if((state_val_56579 === (26))){
var inst_56544 = (state_56578[(10)]);
var inst_56547 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56548 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56549 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56550 = cljs.core.cons(inst_56549,inst_56544);
var inst_56551 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56548,29,inst_56550,"Subsequent flush should work"];
var inst_56552 = cljs.core.PersistentHashMap.fromArrays(inst_56547,inst_56551);
var inst_56553 = cljs.test.report.call(null,inst_56552);
var state_56578__$1 = state_56578;
var statearr_56713_57246 = state_56578__$1;
(statearr_56713_57246[(2)] = inst_56553);

(statearr_56713_57246[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (16))){
var _ = (function (){var statearr_56714 = state_56578;
(statearr_56714[(4)] = cljs.core.rest((state_56578[(4)])));

return statearr_56714;
})();
var state_56578__$1 = state_56578;
var ex56711 = (state_56578__$1[(2)]);
var statearr_56715_57247 = state_56578__$1;
(statearr_56715_57247[(5)] = ex56711);


var statearr_56716_57248 = state_56578__$1;
(statearr_56716_57248[(1)] = (15));

(statearr_56716_57248[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (10))){
var inst_56440 = (state_56578[(28)]);
var inst_56451 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56452 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56453 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56454 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56455 = cljs.core.cons(inst_56454,inst_56440);
var inst_56456 = (new cljs.core.List(null,inst_56455,null,(1),null));
var inst_56457 = (new cljs.core.List(null,inst_56453,inst_56456,(2),null));
var inst_56458 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56452,19,inst_56457,"Buffer should not flush automatically without timer"];
var inst_56459 = cljs.core.PersistentHashMap.fromArrays(inst_56451,inst_56458);
var inst_56460 = cljs.test.report.call(null,inst_56459);
var state_56578__$1 = state_56578;
var statearr_56718_57251 = state_56578__$1;
(statearr_56718_57251[(2)] = inst_56460);

(statearr_56718_57251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (18))){
var inst_56490 = (state_56578[(15)]);
var inst_56501 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56502 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56503 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56504 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56505 = cljs.core.cons(inst_56504,inst_56490);
var inst_56506 = (new cljs.core.List(null,inst_56505,null,(1),null));
var inst_56507 = (new cljs.core.List(null,inst_56503,inst_56506,(2),null));
var inst_56508 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56502,24,inst_56507,"Manual flush should flush all items"];
var inst_56509 = cljs.core.PersistentHashMap.fromArrays(inst_56501,inst_56508);
var inst_56510 = cljs.test.report.call(null,inst_56509);
var state_56578__$1 = state_56578;
var statearr_56728_57254 = state_56578__$1;
(statearr_56728_57254[(2)] = inst_56510);

(statearr_56728_57254[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56579 === (8))){
var _ = (function (){var statearr_56730 = state_56578;
(statearr_56730[(4)] = cljs.core.rest((state_56578[(4)])));

return statearr_56730;
})();
var state_56578__$1 = state_56578;
var ex56717 = (state_56578__$1[(2)]);
var statearr_56731_57255 = state_56578__$1;
(statearr_56731_57255[(5)] = ex56717);


var statearr_56732_57256 = state_56578__$1;
(statearr_56732_57256[(1)] = (7));

(statearr_56732_57256[(5)] = null);



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
var statearr_56733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56733[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__);

(statearr_56733[(1)] = (1));

return statearr_56733;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1 = (function (state_56578){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_56578);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e56734){var ex__32350__auto__ = e56734;
var statearr_56735_57261 = state_56578;
(statearr_56735_57261[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_56578[(4)]))){
var statearr_56736_57262 = state_56578;
(statearr_56736_57262[(1)] = cljs.core.first((state_56578[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57263 = state_56578;
state_56578 = G__57263;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = function(state_56578){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1.call(this,state_56578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_56737 = f__32418__auto__();
(statearr_56737[(6)] = c__32417__auto__);

return statearr_56737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));

return c__32417__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56404","meta56404",-1250829861,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56403");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56403");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56403.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56403 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56403(meta56404){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403(meta56404));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56403(null));
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
var statearr_56955_57269 = state_56952__$1;
(statearr_56955_57269[(2)] = inst_56763);

(statearr_56955_57269[(1)] = (6));


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
var statearr_56958_57271 = state_56952__$1;
(statearr_56958_57271[(5)] = ex56954);


var statearr_56959_57272 = state_56952__$1;
(statearr_56959_57272[(1)] = (26));

(statearr_56959_57272[(5)] = null);



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
var state_56952__$1 = (function (){var statearr_56960 = state_56952;
(statearr_56960[(8)] = inst_56743__$1);

(statearr_56960[(9)] = inst_56745__$1);

(statearr_56960[(10)] = inst_56750);

return statearr_56960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56952__$1,(2),inst_56743__$1,(1));
} else {
if((state_val_56953 === (24))){
var inst_56745 = (state_56952[(9)]);
var inst_56873 = (state_56952[(11)]);
var inst_56874 = (state_56952[(12)]);
var _ = (function (){var statearr_56961 = state_56952;
(statearr_56961[(4)] = cljs.core.cons((27),(state_56952[(4)])));

return statearr_56961;
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
var state_56952__$1 = (function (){var statearr_56962 = state_56952;
(statearr_56962[(11)] = inst_56873__$1);

(statearr_56962[(12)] = inst_56874__$1);

return statearr_56962;
})();
if(cljs.core.truth_(inst_56874__$1)){
var statearr_56963_57278 = state_56952__$1;
(statearr_56963_57278[(1)] = (28));

} else {
var statearr_56964_57280 = state_56952__$1;
(statearr_56964_57280[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (4))){
var inst_56757 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_56965 = state_56952;
(statearr_56965[(13)] = inst_56757);

return statearr_56965;
})();
var statearr_56966_57281 = state_56952__$1;
(statearr_56966_57281[(2)] = null);

(statearr_56966_57281[(1)] = (5));


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
var statearr_56967_57284 = state_56952__$1;
(statearr_56967_57284[(2)] = inst_56804);

(statearr_56967_57284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (21))){
var inst_56743 = (state_56952[(8)]);
var inst_56848 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_56968 = state_56952;
(statearr_56968[(14)] = inst_56848);

return statearr_56968;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56952__$1,(22),inst_56743,(4));
} else {
if((state_val_56953 === (31))){
var inst_56901 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_56969 = state_56952;
(statearr_56969[(15)] = inst_56901);

return statearr_56969;
})();
var statearr_56970_57289 = state_56952__$1;
(statearr_56970_57289[(2)] = null);

(statearr_56970_57289[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (32))){
var inst_56745 = (state_56952[(9)]);
var inst_56924 = (state_56952[(16)]);
var inst_56925 = (state_56952[(17)]);
var _ = (function (){var statearr_56971 = state_56952;
(statearr_56971[(4)] = cljs.core.cons((35),(state_56952[(4)])));

return statearr_56971;
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
var state_56952__$1 = (function (){var statearr_56972 = state_56952;
(statearr_56972[(16)] = inst_56924__$1);

(statearr_56972[(17)] = inst_56925__$1);

return statearr_56972;
})();
if(cljs.core.truth_(inst_56925__$1)){
var statearr_56973_57296 = state_56952__$1;
(statearr_56973_57296[(1)] = (36));

} else {
var statearr_56974_57297 = state_56952__$1;
(statearr_56974_57297[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (33))){
var inst_56949 = (state_56952[(2)]);
var inst_56950 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56952__$1 = (function (){var statearr_56975 = state_56952;
(statearr_56975[(18)] = inst_56949);

return statearr_56975;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56952__$1,inst_56950);
} else {
if((state_val_56953 === (13))){
var inst_56745 = (state_56952[(9)]);
var inst_56818 = (state_56952[(19)]);
var inst_56819 = (state_56952[(20)]);
var _ = (function (){var statearr_56977 = state_56952;
(statearr_56977[(4)] = cljs.core.cons((16),(state_56952[(4)])));

return statearr_56977;
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
var state_56952__$1 = (function (){var statearr_56978 = state_56952;
(statearr_56978[(19)] = inst_56818__$1);

(statearr_56978[(20)] = inst_56819__$1);

return statearr_56978;
})();
if(cljs.core.truth_(inst_56819__$1)){
var statearr_56979_57303 = state_56952__$1;
(statearr_56979_57303[(1)] = (17));

} else {
var statearr_56980_57304 = state_56952__$1;
(statearr_56980_57304[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (22))){
var inst_56850 = (state_56952[(2)]);
var inst_56851 = cljs.core.async.timeout((20));
var state_56952__$1 = (function (){var statearr_56981 = state_56952;
(statearr_56981[(21)] = inst_56850);

return statearr_56981;
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
var statearr_56982_57305 = state_56952__$1;
(statearr_56982_57305[(2)] = inst_56933);

(statearr_56982_57305[(1)] = (38));


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
var statearr_56986_57306 = state_56952__$1;
(statearr_56986_57306[(2)] = inst_56893);

(statearr_56986_57306[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (6))){
var inst_56795 = (state_56952[(2)]);
var inst_56796 = cljs.core.async.timeout((100));
var state_56952__$1 = (function (){var statearr_56989 = state_56952;
(statearr_56989[(22)] = inst_56795);

return statearr_56989;
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
var statearr_56995_57312 = state_56952__$1;
(statearr_56995_57312[(2)] = inst_56882);

(statearr_56995_57312[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (25))){
var inst_56898 = (state_56952[(2)]);
var inst_56899 = cljs.core.async.timeout((80));
var state_56952__$1 = (function (){var statearr_56996 = state_56952;
(statearr_56996[(23)] = inst_56898);

return statearr_56996;
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
var statearr_56998_57315 = state_56952__$1;
(statearr_56998_57315[(2)] = inst_56907);

(statearr_56998_57315[(1)] = (33));


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
var statearr_57000_57316 = state_56952__$1;
(statearr_57000_57316[(2)] = inst_56827);

(statearr_57000_57316[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (3))){
var inst_56754 = (state_56952[(2)]);
var inst_56755 = cljs.core.async.timeout((50));
var state_56952__$1 = (function (){var statearr_57002 = state_56952;
(statearr_57002[(24)] = inst_56754);

return statearr_57002;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56952__$1,(4),inst_56755);
} else {
if((state_val_56953 === (12))){
var inst_56798 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_57004 = state_56952;
(statearr_57004[(25)] = inst_56798);

return statearr_57004;
})();
var statearr_57005_57319 = state_56952__$1;
(statearr_57005_57319[(2)] = null);

(statearr_57005_57319[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (2))){
var inst_56743 = (state_56952[(8)]);
var inst_56752 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_57010 = state_56952;
(statearr_57010[(26)] = inst_56752);

return statearr_57010;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56952__$1,(3),inst_56743,(2));
} else {
if((state_val_56953 === (23))){
var inst_56853 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_57012 = state_56952;
(statearr_57012[(27)] = inst_56853);

return statearr_57012;
})();
var statearr_57014_57322 = state_56952__$1;
(statearr_57014_57322[(2)] = null);

(statearr_57014_57322[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (35))){
var _ = (function (){var statearr_57018 = state_56952;
(statearr_57018[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57018;
})();
var state_56952__$1 = state_56952;
var ex57007 = (state_56952__$1[(2)]);
var statearr_57019_57323 = state_56952__$1;
(statearr_57019_57323[(5)] = ex57007);


var statearr_57020_57324 = state_56952__$1;
(statearr_57020_57324[(1)] = (34));

(statearr_57020_57324[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (19))){
var inst_56819 = (state_56952[(20)]);
var inst_56840 = (state_56952[(2)]);
var _ = (function (){var statearr_57022 = state_56952;
(statearr_57022[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57022;
})();
var state_56952__$1 = (function (){var statearr_57023 = state_56952;
(statearr_57023[(28)] = inst_56840);

return statearr_57023;
})();
var statearr_57024_57325 = state_56952__$1;
(statearr_57024_57325[(2)] = inst_56819);

(statearr_57024_57325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (11))){
var inst_56771 = (state_56952[(29)]);
var inst_56792 = (state_56952[(2)]);
var _ = (function (){var statearr_57025 = state_56952;
(statearr_57025[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57025;
})();
var state_56952__$1 = (function (){var statearr_57026 = state_56952;
(statearr_57026[(30)] = inst_56792);

return statearr_57026;
})();
var statearr_57028_57327 = state_56952__$1;
(statearr_57028_57327[(2)] = inst_56771);

(statearr_57028_57327[(1)] = (6));


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
var statearr_57029_57328 = state_56952__$1;
(statearr_57029_57328[(2)] = inst_56779);

(statearr_57029_57328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (5))){
var inst_56745 = (state_56952[(9)]);
var inst_56770 = (state_56952[(31)]);
var inst_56771 = (state_56952[(29)]);
var _ = (function (){var statearr_57030 = state_56952;
(statearr_57030[(4)] = cljs.core.cons((8),(state_56952[(4)])));

return statearr_57030;
})();
var inst_56769 = cljs.core.deref(inst_56745);
var inst_56770__$1 = (new cljs.core.List(null,inst_56769,null,(1),null));
var inst_56771__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56770__$1);
var state_56952__$1 = (function (){var statearr_57031 = state_56952;
(statearr_57031[(31)] = inst_56770__$1);

(statearr_57031[(29)] = inst_56771__$1);

return statearr_57031;
})();
if(cljs.core.truth_(inst_56771__$1)){
var statearr_57032_57330 = state_56952__$1;
(statearr_57032_57330[(1)] = (9));

} else {
var statearr_57033_57331 = state_56952__$1;
(statearr_57033_57331[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (14))){
var inst_56743 = (state_56952[(8)]);
var inst_56843 = (state_56952[(2)]);
var state_56952__$1 = (function (){var statearr_57035 = state_56952;
(statearr_57035[(32)] = inst_56843);

return statearr_57035;
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
var statearr_57036_57332 = state_56952__$1;
(statearr_57036_57332[(2)] = inst_56859);

(statearr_57036_57332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (16))){
var _ = (function (){var statearr_57037 = state_56952;
(statearr_57037[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57037;
})();
var state_56952__$1 = state_56952;
var ex57034 = (state_56952__$1[(2)]);
var statearr_57038_57334 = state_56952__$1;
(statearr_57038_57334[(5)] = ex57034);


var statearr_57039_57337 = state_56952__$1;
(statearr_57039_57337[(1)] = (15));

(statearr_57039_57337[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (38))){
var inst_56925 = (state_56952[(17)]);
var inst_56946 = (state_56952[(2)]);
var _ = (function (){var statearr_57040 = state_56952;
(statearr_57040[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57040;
})();
var state_56952__$1 = (function (){var statearr_57041 = state_56952;
(statearr_57041[(33)] = inst_56946);

return statearr_57041;
})();
var statearr_57042_57338 = state_56952__$1;
(statearr_57042_57338[(2)] = inst_56925);

(statearr_57042_57338[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (30))){
var inst_56874 = (state_56952[(12)]);
var inst_56895 = (state_56952[(2)]);
var _ = (function (){var statearr_57043 = state_56952;
(statearr_57043[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57043;
})();
var state_56952__$1 = (function (){var statearr_57044 = state_56952;
(statearr_57044[(34)] = inst_56895);

return statearr_57044;
})();
var statearr_57045_57339 = state_56952__$1;
(statearr_57045_57339[(2)] = inst_56874);

(statearr_57045_57339[(1)] = (25));


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
var statearr_57046_57342 = state_56952__$1;
(statearr_57046_57342[(2)] = inst_56790);

(statearr_57046_57342[(1)] = (11));


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
var statearr_57048_57344 = state_56952__$1;
(statearr_57048_57344[(2)] = inst_56838);

(statearr_57048_57344[(1)] = (19));


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
var statearr_57049_57347 = state_56952__$1;
(statearr_57049_57347[(2)] = inst_56944);

(statearr_57049_57347[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56953 === (8))){
var _ = (function (){var statearr_57050 = state_56952;
(statearr_57050[(4)] = cljs.core.rest((state_56952[(4)])));

return statearr_57050;
})();
var state_56952__$1 = state_56952;
var ex57047 = (state_56952__$1[(2)]);
var statearr_57051_57351 = state_56952__$1;
(statearr_57051_57351[(5)] = ex57047);


var statearr_57052_57352 = state_56952__$1;
(statearr_57052_57352[(1)] = (7));

(statearr_57052_57352[(5)] = null);



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
var statearr_57053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57053[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__);

(statearr_57053[(1)] = (1));

return statearr_57053;
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
}catch (e57054){var ex__32350__auto__ = e57054;
var statearr_57055_57354 = state_56952;
(statearr_57055_57354[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_56952[(4)]))){
var statearr_57056_57355 = state_56952;
(statearr_57056_57355[(1)] = cljs.core.first((state_56952[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57357 = state_56952;
state_56952 = G__57357;
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
var state__32419__auto__ = (function (){var statearr_57057 = f__32418__auto__();
(statearr_57057[(6)] = c__32417__auto__);

return statearr_57057;
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
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064 = (function (meta57065){
this.meta57065 = meta57065;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57066,meta57065__$1){
var self__ = this;
var _57066__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064(meta57065__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57066){
var self__ = this;
var _57066__$1 = this;
return self__.meta57065;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57070 = (arguments.length - (1));
switch (G__57070) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064.prototype.apply = (function (self__,args57067){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57067)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_57143){
var state_val_57145 = (state_57143[(1)]);
if((state_val_57145 === (7))){
var inst_57090 = (state_57143[(2)]);
var inst_57092 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57093 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57094 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_57093,78,inst_57090,"Closing input should flush remaining"];
var inst_57095 = cljs.core.PersistentHashMap.fromArrays(inst_57092,inst_57094);
var inst_57096 = cljs.test.report.call(null,inst_57095);
var state_57143__$1 = state_57143;
var statearr_57150_57363 = state_57143__$1;
(statearr_57150_57363[(2)] = inst_57096);

(statearr_57150_57363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57145 === (1))){
var inst_57074 = (state_57143[(7)]);
var inst_57076 = (state_57143[(8)]);
var inst_57074__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_57075 = cljs.core.PersistentVector.EMPTY;
var inst_57076__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_57075);
var inst_57077 = (function (){var input_ch = inst_57074__$1;
var results = inst_57076__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_57078 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_57079 = [inst_57074__$1,inst_57077];
var inst_57080 = cljs.core.PersistentHashMap.fromArrays(inst_57078,inst_57079);
var inst_57081 = bb_web_ds_tools.components.async_buffer.create(inst_57080);
var state_57143__$1 = (function (){var statearr_57151 = state_57143;
(statearr_57151[(7)] = inst_57074__$1);

(statearr_57151[(8)] = inst_57076__$1);

(statearr_57151[(9)] = inst_57081);

return statearr_57151;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57143__$1,(2),inst_57074__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_57145 === (4))){
var inst_57089 = (state_57143[(2)]);
var state_57143__$1 = (function (){var statearr_57153 = state_57143;
(statearr_57153[(10)] = inst_57089);

return statearr_57153;
})();
var statearr_57154_57366 = state_57143__$1;
(statearr_57154_57366[(2)] = null);

(statearr_57154_57366[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57145 === (6))){
var inst_57138 = (state_57143[(2)]);
var inst_57139 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_57143__$1 = (function (){var statearr_57155 = state_57143;
(statearr_57155[(11)] = inst_57138);

return statearr_57155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57143__$1,inst_57139);
} else {
if((state_val_57145 === (3))){
var inst_57074 = (state_57143[(7)]);
var inst_57085 = (state_57143[(2)]);
var inst_57086 = cljs.core.async.close_BANG_(inst_57074);
var inst_57087 = cljs.core.async.timeout((20));
var state_57143__$1 = (function (){var statearr_57160 = state_57143;
(statearr_57160[(12)] = inst_57085);

(statearr_57160[(13)] = inst_57086);

return statearr_57160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57143__$1,(4),inst_57087);
} else {
if((state_val_57145 === (2))){
var inst_57074 = (state_57143[(7)]);
var inst_57083 = (state_57143[(2)]);
var state_57143__$1 = (function (){var statearr_57162 = state_57143;
(statearr_57162[(14)] = inst_57083);

return statearr_57162;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57143__$1,(3),inst_57074,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_57145 === (11))){
var inst_57111 = (state_57143[(15)]);
var inst_57135 = (state_57143[(2)]);
var _ = (function (){var statearr_57163 = state_57143;
(statearr_57163[(4)] = cljs.core.rest((state_57143[(4)])));

return statearr_57163;
})();
var state_57143__$1 = (function (){var statearr_57164 = state_57143;
(statearr_57164[(16)] = inst_57135);

return statearr_57164;
})();
var statearr_57166_57367 = state_57143__$1;
(statearr_57166_57367[(2)] = inst_57111);

(statearr_57166_57367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57145 === (9))){
var inst_57110 = (state_57143[(17)]);
var inst_57113 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57114 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57115 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57116 = cljs.core.cons(inst_57115,inst_57110);
var inst_57117 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_57114,78,inst_57116,"Closing input should flush remaining"];
var inst_57118 = cljs.core.PersistentHashMap.fromArrays(inst_57113,inst_57117);
var inst_57119 = cljs.test.report.call(null,inst_57118);
var state_57143__$1 = state_57143;
var statearr_57167_57368 = state_57143__$1;
(statearr_57167_57368[(2)] = inst_57119);

(statearr_57167_57368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57145 === (5))){
var inst_57076 = (state_57143[(8)]);
var inst_57110 = (state_57143[(17)]);
var inst_57111 = (state_57143[(15)]);
var _ = (function (){var statearr_57174 = state_57143;
(statearr_57174[(4)] = cljs.core.cons((8),(state_57143[(4)])));

return statearr_57174;
})();
var inst_57102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57103 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57104 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_57105 = (new cljs.core.PersistentVector(null,2,(5),inst_57103,inst_57104,null));
var inst_57106 = [inst_57105];
var inst_57107 = (new cljs.core.PersistentVector(null,1,(5),inst_57102,inst_57106,null));
var inst_57108 = cljs.core.deref(inst_57076);
var inst_57109 = (new cljs.core.List(null,inst_57108,null,(1),null));
var inst_57110__$1 = (new cljs.core.List(null,inst_57107,inst_57109,(2),null));
var inst_57111__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_57110__$1);
var state_57143__$1 = (function (){var statearr_57175 = state_57143;
(statearr_57175[(17)] = inst_57110__$1);

(statearr_57175[(15)] = inst_57111__$1);

return statearr_57175;
})();
if(cljs.core.truth_(inst_57111__$1)){
var statearr_57176_57369 = state_57143__$1;
(statearr_57176_57369[(1)] = (9));

} else {
var statearr_57177_57370 = state_57143__$1;
(statearr_57177_57370[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57145 === (10))){
var inst_57110 = (state_57143[(17)]);
var inst_57123 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57124 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57125 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_57126 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57127 = cljs.core.cons(inst_57126,inst_57110);
var inst_57128 = (new cljs.core.List(null,inst_57127,null,(1),null));
var inst_57129 = (new cljs.core.List(null,inst_57125,inst_57128,(2),null));
var inst_57130 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_57124,78,inst_57129,"Closing input should flush remaining"];
var inst_57131 = cljs.core.PersistentHashMap.fromArrays(inst_57123,inst_57130);
var inst_57133 = cljs.test.report.call(null,inst_57131);
var state_57143__$1 = state_57143;
var statearr_57183_57371 = state_57143__$1;
(statearr_57183_57371[(2)] = inst_57133);

(statearr_57183_57371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57145 === (8))){
var _ = (function (){var statearr_57190 = state_57143;
(statearr_57190[(4)] = cljs.core.rest((state_57143[(4)])));

return statearr_57190;
})();
var state_57143__$1 = state_57143;
var ex57168 = (state_57143__$1[(2)]);
var statearr_57191_57372 = state_57143__$1;
(statearr_57191_57372[(5)] = ex57168);


var statearr_57193_57373 = state_57143__$1;
(statearr_57193_57373[(1)] = (7));

(statearr_57193_57373[(5)] = null);



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
var statearr_57194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57194[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__);

(statearr_57194[(1)] = (1));

return statearr_57194;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1 = (function (state_57143){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_57143);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e57195){var ex__32350__auto__ = e57195;
var statearr_57196_57375 = state_57143;
(statearr_57196_57375[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_57143[(4)]))){
var statearr_57197_57376 = state_57143;
(statearr_57197_57376[(1)] = cljs.core.first((state_57143[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57378 = state_57143;
state_57143 = G__57378;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = function(state_57143){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1.call(this,state_57143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_57199 = f__32418__auto__();
(statearr_57199[(6)] = c__32417__auto__);

return statearr_57199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));

return c__32417__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57065","meta57065",-1921602697,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57064");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57064");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57064.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test57064 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test57064(meta57065){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064(meta57065));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57064(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
