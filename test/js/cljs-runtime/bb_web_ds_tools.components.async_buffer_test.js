goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517 = (function (meta63518){
this.meta63518 = meta63518;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63519,meta63518__$1){
var self__ = this;
var _63519__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517(meta63518__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63519){
var self__ = this;
var _63519__$1 = this;
return self__.meta63518;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63521 = (arguments.length - (1));
switch (G__63521) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517.prototype.apply = (function (self__,args63520){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63520)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_63702){
var state_val_63703 = (state_63702[(1)]);
if((state_val_63703 === (7))){
var inst_63547 = (state_63702[(2)]);
var inst_63548 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63550 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63554 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,19,inst_63550,19,inst_63547,"Buffer should not flush automatically without timer"];
var inst_63555 = cljs.core.PersistentHashMap.fromArrays(inst_63548,inst_63554);
var inst_63556 = cljs.test.report.call(null,inst_63555);
var state_63702__$1 = state_63702;
var statearr_63704_64264 = state_63702__$1;
(statearr_63704_64264[(2)] = inst_63556);

(statearr_63704_64264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (20))){
var inst_63534 = (state_63702[(7)]);
var inst_63641 = (state_63702[(2)]);
var inst_63642 = (inst_63534.cljs$core$IFn$_invoke$arity$0 ? inst_63534.cljs$core$IFn$_invoke$arity$0() : inst_63534.call(null));
var inst_63643 = cljs.core.async.timeout((20));
var state_63702__$1 = (function (){var statearr_63705 = state_63702;
(statearr_63705[(8)] = inst_63641);

(statearr_63705[(9)] = inst_63642);

return statearr_63705;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63702__$1,(21),inst_63643);
} else {
if((state_val_63703 === (27))){
var inst_63669 = (state_63702[(10)]);
var inst_63680 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63681 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63682 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63683 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63684 = cljs.core.cons(inst_63683,inst_63669);
var inst_63685 = (new cljs.core.List(null,inst_63684,null,(1),null));
var inst_63686 = (new cljs.core.List(null,inst_63682,inst_63685,(2),null));
var inst_63687 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,inst_63681,29,inst_63686,"Subsequent flush should work"];
var inst_63688 = cljs.core.PersistentHashMap.fromArrays(inst_63680,inst_63687);
var inst_63689 = cljs.test.report.call(null,inst_63688);
var state_63702__$1 = state_63702;
var statearr_63706_64265 = state_63702__$1;
(statearr_63706_64265[(2)] = inst_63689);

(statearr_63706_64265[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (1))){
var inst_63523 = (state_63702[(11)]);
var inst_63525 = (state_63702[(12)]);
var inst_63523__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63524 = cljs.core.PersistentVector.EMPTY;
var inst_63525__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63524);
var inst_63526 = (function (){var input_ch = inst_63523__$1;
var results = inst_63525__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63531 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63532 = [inst_63523__$1,inst_63526];
var inst_63533 = cljs.core.PersistentHashMap.fromArrays(inst_63531,inst_63532);
var inst_63534 = bb_web_ds_tools.components.async_buffer.create(inst_63533);
var state_63702__$1 = (function (){var statearr_63707 = state_63702;
(statearr_63707[(11)] = inst_63523__$1);

(statearr_63707[(12)] = inst_63525__$1);

(statearr_63707[(7)] = inst_63534);

return statearr_63707;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63702__$1,(2),inst_63523__$1,(1));
} else {
if((state_val_63703 === (24))){
var inst_63646 = (state_63702[(2)]);
var inst_63647 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63648 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63649 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"error","error",-978969032),18,29,inst_63648,29,inst_63646,"Subsequent flush should work"];
var inst_63650 = cljs.core.PersistentHashMap.fromArrays(inst_63647,inst_63649);
var inst_63651 = cljs.test.report.call(null,inst_63650);
var state_63702__$1 = state_63702;
var statearr_63708_64266 = state_63702__$1;
(statearr_63708_64266[(2)] = inst_63651);

(statearr_63708_64266[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (4))){
var inst_63541 = (state_63702[(2)]);
var state_63702__$1 = (function (){var statearr_63709 = state_63702;
(statearr_63709[(13)] = inst_63541);

return statearr_63709;
})();
var statearr_63710_64267 = state_63702__$1;
(statearr_63710_64267[(2)] = null);

(statearr_63710_64267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (15))){
var inst_63594 = (state_63702[(2)]);
var inst_63595 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63596 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63597 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,24,inst_63596,24,inst_63594,"Manual flush should flush all items"];
var inst_63598 = cljs.core.PersistentHashMap.fromArrays(inst_63595,inst_63597);
var inst_63599 = cljs.test.report.call(null,inst_63598);
var state_63702__$1 = state_63702;
var statearr_63711_64268 = state_63702__$1;
(statearr_63711_64268[(2)] = inst_63599);

(statearr_63711_64268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (21))){
var inst_63645 = (state_63702[(2)]);
var state_63702__$1 = (function (){var statearr_63712 = state_63702;
(statearr_63712[(14)] = inst_63645);

return statearr_63712;
})();
var statearr_63713_64269 = state_63702__$1;
(statearr_63713_64269[(2)] = null);

(statearr_63713_64269[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (13))){
var inst_63525 = (state_63702[(12)]);
var inst_63614 = (state_63702[(15)]);
var inst_63615 = (state_63702[(16)]);
var _ = (function (){var statearr_63714 = state_63702;
(statearr_63714[(4)] = cljs.core.cons((16),(state_63702[(4)])));

return statearr_63714;
})();
var inst_63606 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63607 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63608 = [(1),(2)];
var inst_63609 = (new cljs.core.PersistentVector(null,2,(5),inst_63607,inst_63608,null));
var inst_63610 = [inst_63609];
var inst_63611 = (new cljs.core.PersistentVector(null,1,(5),inst_63606,inst_63610,null));
var inst_63612 = cljs.core.deref(inst_63525);
var inst_63613 = (new cljs.core.List(null,inst_63612,null,(1),null));
var inst_63614__$1 = (new cljs.core.List(null,inst_63611,inst_63613,(2),null));
var inst_63615__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63614__$1);
var state_63702__$1 = (function (){var statearr_63715 = state_63702;
(statearr_63715[(15)] = inst_63614__$1);

(statearr_63715[(16)] = inst_63615__$1);

return statearr_63715;
})();
if(cljs.core.truth_(inst_63615__$1)){
var statearr_63716_64270 = state_63702__$1;
(statearr_63716_64270[(1)] = (17));

} else {
var statearr_63717_64271 = state_63702__$1;
(statearr_63717_64271[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (22))){
var inst_63525 = (state_63702[(12)]);
var inst_63669 = (state_63702[(10)]);
var inst_63670 = (state_63702[(17)]);
var _ = (function (){var statearr_63718 = state_63702;
(statearr_63718[(4)] = cljs.core.cons((25),(state_63702[(4)])));

return statearr_63718;
})();
var inst_63658 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63659 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63660 = [(1),(2)];
var inst_63661 = (new cljs.core.PersistentVector(null,2,(5),inst_63659,inst_63660,null));
var inst_63662 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63663 = [(3)];
var inst_63664 = (new cljs.core.PersistentVector(null,1,(5),inst_63662,inst_63663,null));
var inst_63665 = [inst_63661,inst_63664];
var inst_63666 = (new cljs.core.PersistentVector(null,2,(5),inst_63658,inst_63665,null));
var inst_63667 = cljs.core.deref(inst_63525);
var inst_63668 = (new cljs.core.List(null,inst_63667,null,(1),null));
var inst_63669__$1 = (new cljs.core.List(null,inst_63666,inst_63668,(2),null));
var inst_63670__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63669__$1);
var state_63702__$1 = (function (){var statearr_63725 = state_63702;
(statearr_63725[(10)] = inst_63669__$1);

(statearr_63725[(17)] = inst_63670__$1);

return statearr_63725;
})();
if(cljs.core.truth_(inst_63670__$1)){
var statearr_63726_64272 = state_63702__$1;
(statearr_63726_64272[(1)] = (26));

} else {
var statearr_63727_64273 = state_63702__$1;
(statearr_63727_64273[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (6))){
var inst_63534 = (state_63702[(7)]);
var inst_63589 = (state_63702[(2)]);
var inst_63590 = (inst_63534.cljs$core$IFn$_invoke$arity$0 ? inst_63534.cljs$core$IFn$_invoke$arity$0() : inst_63534.call(null));
var inst_63591 = cljs.core.async.timeout((20));
var state_63702__$1 = (function (){var statearr_63730 = state_63702;
(statearr_63730[(18)] = inst_63589);

(statearr_63730[(19)] = inst_63590);

return statearr_63730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63702__$1,(12),inst_63591);
} else {
if((state_val_63703 === (28))){
var inst_63670 = (state_63702[(17)]);
var inst_63691 = (state_63702[(2)]);
var _ = (function (){var statearr_63731 = state_63702;
(statearr_63731[(4)] = cljs.core.rest((state_63702[(4)])));

return statearr_63731;
})();
var state_63702__$1 = (function (){var statearr_63732 = state_63702;
(statearr_63732[(20)] = inst_63691);

return statearr_63732;
})();
var statearr_63733_64274 = state_63702__$1;
(statearr_63733_64274[(2)] = inst_63670);

(statearr_63733_64274[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (25))){
var _ = (function (){var statearr_63735 = state_63702;
(statearr_63735[(4)] = cljs.core.rest((state_63702[(4)])));

return statearr_63735;
})();
var state_63702__$1 = state_63702;
var ex63729 = (state_63702__$1[(2)]);
var statearr_63736_64275 = state_63702__$1;
(statearr_63736_64275[(5)] = ex63729);


var statearr_63737_64276 = state_63702__$1;
(statearr_63737_64276[(1)] = (24));

(statearr_63737_64276[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (17))){
var inst_63614 = (state_63702[(15)]);
var inst_63617 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63618 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63619 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63620 = cljs.core.cons(inst_63619,inst_63614);
var inst_63621 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,24,inst_63618,24,inst_63620,"Manual flush should flush all items"];
var inst_63622 = cljs.core.PersistentHashMap.fromArrays(inst_63617,inst_63621);
var inst_63623 = cljs.test.report.call(null,inst_63622);
var state_63702__$1 = state_63702;
var statearr_63739_64277 = state_63702__$1;
(statearr_63739_64277[(2)] = inst_63623);

(statearr_63739_64277[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (3))){
var inst_63538 = (state_63702[(2)]);
var inst_63539 = cljs.core.async.timeout((20));
var state_63702__$1 = (function (){var statearr_63743 = state_63702;
(statearr_63743[(21)] = inst_63538);

return statearr_63743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63702__$1,(4),inst_63539);
} else {
if((state_val_63703 === (12))){
var inst_63593 = (state_63702[(2)]);
var state_63702__$1 = (function (){var statearr_63744 = state_63702;
(statearr_63744[(22)] = inst_63593);

return statearr_63744;
})();
var statearr_63745_64278 = state_63702__$1;
(statearr_63745_64278[(2)] = null);

(statearr_63745_64278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (2))){
var inst_63523 = (state_63702[(11)]);
var inst_63536 = (state_63702[(2)]);
var state_63702__$1 = (function (){var statearr_63748 = state_63702;
(statearr_63748[(23)] = inst_63536);

return statearr_63748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63702__$1,(3),inst_63523,(2));
} else {
if((state_val_63703 === (23))){
var inst_63695 = (state_63702[(2)]);
var inst_63696 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_63702__$1 = (function (){var statearr_63752 = state_63702;
(statearr_63752[(24)] = inst_63695);

return statearr_63752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63702__$1,inst_63696);
} else {
if((state_val_63703 === (19))){
var inst_63615 = (state_63702[(16)]);
var inst_63636 = (state_63702[(2)]);
var _ = (function (){var statearr_63753 = state_63702;
(statearr_63753[(4)] = cljs.core.rest((state_63702[(4)])));

return statearr_63753;
})();
var state_63702__$1 = (function (){var statearr_63755 = state_63702;
(statearr_63755[(25)] = inst_63636);

return statearr_63755;
})();
var statearr_63756_64279 = state_63702__$1;
(statearr_63756_64279[(2)] = inst_63615);

(statearr_63756_64279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (11))){
var inst_63564 = (state_63702[(26)]);
var inst_63586 = (state_63702[(2)]);
var _ = (function (){var statearr_63761 = state_63702;
(statearr_63761[(4)] = cljs.core.rest((state_63702[(4)])));

return statearr_63761;
})();
var state_63702__$1 = (function (){var statearr_63762 = state_63702;
(statearr_63762[(27)] = inst_63586);

return statearr_63762;
})();
var statearr_63763_64280 = state_63702__$1;
(statearr_63763_64280[(2)] = inst_63564);

(statearr_63763_64280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (9))){
var inst_63563 = (state_63702[(28)]);
var inst_63566 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63567 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63568 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63569 = cljs.core.cons(inst_63568,inst_63563);
var inst_63570 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,19,inst_63567,19,inst_63569,"Buffer should not flush automatically without timer"];
var inst_63571 = cljs.core.PersistentHashMap.fromArrays(inst_63566,inst_63570);
var inst_63572 = cljs.test.report.call(null,inst_63571);
var state_63702__$1 = state_63702;
var statearr_63764_64281 = state_63702__$1;
(statearr_63764_64281[(2)] = inst_63572);

(statearr_63764_64281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (5))){
var inst_63525 = (state_63702[(12)]);
var inst_63563 = (state_63702[(28)]);
var inst_63564 = (state_63702[(26)]);
var _ = (function (){var statearr_63765 = state_63702;
(statearr_63765[(4)] = cljs.core.cons((8),(state_63702[(4)])));

return statearr_63765;
})();
var inst_63562 = cljs.core.deref(inst_63525);
var inst_63563__$1 = (new cljs.core.List(null,inst_63562,null,(1),null));
var inst_63564__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_63563__$1);
var state_63702__$1 = (function (){var statearr_63766 = state_63702;
(statearr_63766[(28)] = inst_63563__$1);

(statearr_63766[(26)] = inst_63564__$1);

return statearr_63766;
})();
if(cljs.core.truth_(inst_63564__$1)){
var statearr_63767_64282 = state_63702__$1;
(statearr_63767_64282[(1)] = (9));

} else {
var statearr_63768_64283 = state_63702__$1;
(statearr_63768_64283[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (14))){
var inst_63523 = (state_63702[(11)]);
var inst_63639 = (state_63702[(2)]);
var state_63702__$1 = (function (){var statearr_63770 = state_63702;
(statearr_63770[(29)] = inst_63639);

return statearr_63770;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63702__$1,(20),inst_63523,(3));
} else {
if((state_val_63703 === (26))){
var inst_63669 = (state_63702[(10)]);
var inst_63672 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63673 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63674 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63675 = cljs.core.cons(inst_63674,inst_63669);
var inst_63676 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,inst_63673,29,inst_63675,"Subsequent flush should work"];
var inst_63677 = cljs.core.PersistentHashMap.fromArrays(inst_63672,inst_63676);
var inst_63678 = cljs.test.report.call(null,inst_63677);
var state_63702__$1 = state_63702;
var statearr_63772_64284 = state_63702__$1;
(statearr_63772_64284[(2)] = inst_63678);

(statearr_63772_64284[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (16))){
var _ = (function (){var statearr_63773 = state_63702;
(statearr_63773[(4)] = cljs.core.rest((state_63702[(4)])));

return statearr_63773;
})();
var state_63702__$1 = state_63702;
var ex63769 = (state_63702__$1[(2)]);
var statearr_63774_64285 = state_63702__$1;
(statearr_63774_64285[(5)] = ex63769);


var statearr_63775_64286 = state_63702__$1;
(statearr_63775_64286[(1)] = (15));

(statearr_63775_64286[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (10))){
var inst_63563 = (state_63702[(28)]);
var inst_63574 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63575 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63577 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63578 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63579 = cljs.core.cons(inst_63578,inst_63563);
var inst_63580 = (new cljs.core.List(null,inst_63579,null,(1),null));
var inst_63581 = (new cljs.core.List(null,inst_63577,inst_63580,(2),null));
var inst_63582 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,19,inst_63575,19,inst_63581,"Buffer should not flush automatically without timer"];
var inst_63583 = cljs.core.PersistentHashMap.fromArrays(inst_63574,inst_63582);
var inst_63584 = cljs.test.report.call(null,inst_63583);
var state_63702__$1 = state_63702;
var statearr_63777_64287 = state_63702__$1;
(statearr_63777_64287[(2)] = inst_63584);

(statearr_63777_64287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (18))){
var inst_63614 = (state_63702[(15)]);
var inst_63625 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63626 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63627 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63628 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63629 = cljs.core.cons(inst_63628,inst_63614);
var inst_63630 = (new cljs.core.List(null,inst_63629,null,(1),null));
var inst_63631 = (new cljs.core.List(null,inst_63627,inst_63630,(2),null));
var inst_63632 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,24,inst_63626,24,inst_63631,"Manual flush should flush all items"];
var inst_63633 = cljs.core.PersistentHashMap.fromArrays(inst_63625,inst_63632);
var inst_63634 = cljs.test.report.call(null,inst_63633);
var state_63702__$1 = state_63702;
var statearr_63778_64288 = state_63702__$1;
(statearr_63778_64288[(2)] = inst_63634);

(statearr_63778_64288[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63703 === (8))){
var _ = (function (){var statearr_63779 = state_63702;
(statearr_63779[(4)] = cljs.core.rest((state_63702[(4)])));

return statearr_63779;
})();
var state_63702__$1 = state_63702;
var ex63776 = (state_63702__$1[(2)]);
var statearr_63781_64289 = state_63702__$1;
(statearr_63781_64289[(5)] = ex63776);


var statearr_63782_64290 = state_63702__$1;
(statearr_63782_64290[(1)] = (7));

(statearr_63782_64290[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0 = (function (){
var statearr_63788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63788[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__);

(statearr_63788[(1)] = (1));

return statearr_63788;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1 = (function (state_63702){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_63702);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e63789){var ex__32403__auto__ = e63789;
var statearr_63790_64291 = state_63702;
(statearr_63790_64291[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_63702[(4)]))){
var statearr_63791_64292 = state_63702;
(statearr_63791_64292[(1)] = cljs.core.first((state_63702[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64293 = state_63702;
state_63702 = G__64293;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__ = function(state_63702){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1.call(this,state_63702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_63792 = f__32493__auto__();
(statearr_63792[(6)] = c__32492__auto__);

return statearr_63792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63518","meta63518",-94286973,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63517");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63517");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63517.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63517 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63517(meta63518){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517(meta63518));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63517(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797 = (function (meta63798){
this.meta63798 = meta63798;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63799,meta63798__$1){
var self__ = this;
var _63799__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797(meta63798__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63799){
var self__ = this;
var _63799__$1 = this;
return self__.meta63798;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63802 = (arguments.length - (1));
switch (G__63802) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797.prototype.apply = (function (self__,args63800){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63800)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_64019){
var state_val_64020 = (state_64019[(1)]);
if((state_val_64020 === (7))){
var inst_63819 = (state_64019[(2)]);
var inst_63820 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63821 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63822 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,47,inst_63821,47,inst_63819,"Should not flush before timeout"];
var inst_63823 = cljs.core.PersistentHashMap.fromArrays(inst_63820,inst_63822);
var inst_63824 = cljs.test.report.call(null,inst_63823);
var state_64019__$1 = state_64019;
var statearr_64024_64295 = state_64019__$1;
(statearr_64024_64295[(2)] = inst_63824);

(statearr_64024_64295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (20))){
var inst_63909 = (state_64019[(2)]);
var inst_63910 = cljs.core.async.timeout((50));
var state_64019__$1 = (function (){var statearr_64026 = state_64019;
(statearr_64026[(7)] = inst_63909);

return statearr_64026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64019__$1,(21),inst_63910);
} else {
if((state_val_64020 === (27))){
var _ = (function (){var statearr_64029 = state_64019;
(statearr_64029[(4)] = cljs.core.rest((state_64019[(4)])));

return statearr_64029;
})();
var state_64019__$1 = state_64019;
var ex64021 = (state_64019__$1[(2)]);
var statearr_64030_64296 = state_64019__$1;
(statearr_64030_64296[(5)] = ex64021);


var statearr_64031_64297 = state_64019__$1;
(statearr_64031_64297[(1)] = (26));

(statearr_64031_64297[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (1))){
var inst_63803 = (state_64019[(8)]);
var inst_63805 = (state_64019[(9)]);
var inst_63803__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63804 = cljs.core.PersistentVector.EMPTY;
var inst_63805__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63804);
var inst_63807 = (function (){var input_ch = inst_63803__$1;
var results = inst_63805__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63808 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63809 = [inst_63803__$1,(100),inst_63807];
var inst_63810 = cljs.core.PersistentHashMap.fromArrays(inst_63808,inst_63809);
var inst_63811 = bb_web_ds_tools.components.async_buffer.create(inst_63810);
var state_64019__$1 = (function (){var statearr_64043 = state_64019;
(statearr_64043[(8)] = inst_63803__$1);

(statearr_64043[(9)] = inst_63805__$1);

(statearr_64043[(10)] = inst_63811);

return statearr_64043;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64019__$1,(2),inst_63803__$1,(1));
} else {
if((state_val_64020 === (24))){
var inst_63805 = (state_64019[(9)]);
var inst_63939 = (state_64019[(11)]);
var inst_63940 = (state_64019[(12)]);
var _ = (function (){var statearr_64045 = state_64019;
(statearr_64045[(4)] = cljs.core.cons((27),(state_64019[(4)])));

return statearr_64045;
})();
var inst_63931 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63933 = [(1),(2)];
var inst_63934 = (new cljs.core.PersistentVector(null,2,(5),inst_63932,inst_63933,null));
var inst_63935 = [inst_63934];
var inst_63936 = (new cljs.core.PersistentVector(null,1,(5),inst_63931,inst_63935,null));
var inst_63937 = cljs.core.deref(inst_63805);
var inst_63938 = (new cljs.core.List(null,inst_63937,null,(1),null));
var inst_63939__$1 = (new cljs.core.List(null,inst_63936,inst_63938,(2),null));
var inst_63940__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63939__$1);
var state_64019__$1 = (function (){var statearr_64050 = state_64019;
(statearr_64050[(11)] = inst_63939__$1);

(statearr_64050[(12)] = inst_63940__$1);

return statearr_64050;
})();
if(cljs.core.truth_(inst_63940__$1)){
var statearr_64053_64298 = state_64019__$1;
(statearr_64053_64298[(1)] = (28));

} else {
var statearr_64054_64299 = state_64019__$1;
(statearr_64054_64299[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (4))){
var inst_63818 = (state_64019[(2)]);
var state_64019__$1 = (function (){var statearr_64055 = state_64019;
(statearr_64055[(13)] = inst_63818);

return statearr_64055;
})();
var statearr_64057_64300 = state_64019__$1;
(statearr_64057_64300[(2)] = null);

(statearr_64057_64300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (15))){
var inst_63860 = (state_64019[(2)]);
var inst_63861 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63862 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63863 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,50,inst_63862,50,inst_63860,"Should flush after timeout"];
var inst_63864 = cljs.core.PersistentHashMap.fromArrays(inst_63861,inst_63863);
var inst_63865 = cljs.test.report.call(null,inst_63864);
var state_64019__$1 = state_64019;
var statearr_64058_64301 = state_64019__$1;
(statearr_64058_64301[(2)] = inst_63865);

(statearr_64058_64301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (21))){
var inst_63803 = (state_64019[(8)]);
var inst_63912 = (state_64019[(2)]);
var state_64019__$1 = (function (){var statearr_64059 = state_64019;
(statearr_64059[(14)] = inst_63912);

return statearr_64059;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64019__$1,(22),inst_63803,(4));
} else {
if((state_val_64020 === (31))){
var inst_63968 = (state_64019[(2)]);
var state_64019__$1 = (function (){var statearr_64060 = state_64019;
(statearr_64060[(15)] = inst_63968);

return statearr_64060;
})();
var statearr_64061_64302 = state_64019__$1;
(statearr_64061_64302[(2)] = null);

(statearr_64061_64302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (32))){
var inst_63805 = (state_64019[(9)]);
var inst_63991 = (state_64019[(16)]);
var inst_63992 = (state_64019[(17)]);
var _ = (function (){var statearr_64062 = state_64019;
(statearr_64062[(4)] = cljs.core.cons((35),(state_64019[(4)])));

return statearr_64062;
})();
var inst_63980 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63981 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63982 = [(1),(2)];
var inst_63983 = (new cljs.core.PersistentVector(null,2,(5),inst_63981,inst_63982,null));
var inst_63984 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63985 = [(3),(4)];
var inst_63986 = (new cljs.core.PersistentVector(null,2,(5),inst_63984,inst_63985,null));
var inst_63987 = [inst_63983,inst_63986];
var inst_63988 = (new cljs.core.PersistentVector(null,2,(5),inst_63980,inst_63987,null));
var inst_63989 = cljs.core.deref(inst_63805);
var inst_63990 = (new cljs.core.List(null,inst_63989,null,(1),null));
var inst_63991__$1 = (new cljs.core.List(null,inst_63988,inst_63990,(2),null));
var inst_63992__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63991__$1);
var state_64019__$1 = (function (){var statearr_64063 = state_64019;
(statearr_64063[(16)] = inst_63991__$1);

(statearr_64063[(17)] = inst_63992__$1);

return statearr_64063;
})();
if(cljs.core.truth_(inst_63992__$1)){
var statearr_64064_64314 = state_64019__$1;
(statearr_64064_64314[(1)] = (36));

} else {
var statearr_64065_64315 = state_64019__$1;
(statearr_64065_64315[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (33))){
var inst_64016 = (state_64019[(2)]);
var inst_64017 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64019__$1 = (function (){var statearr_64066 = state_64019;
(statearr_64066[(18)] = inst_64016);

return statearr_64066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64019__$1,inst_64017);
} else {
if((state_val_64020 === (13))){
var inst_63805 = (state_64019[(9)]);
var inst_63881 = (state_64019[(19)]);
var inst_63882 = (state_64019[(20)]);
var _ = (function (){var statearr_64069 = state_64019;
(statearr_64069[(4)] = cljs.core.cons((16),(state_64019[(4)])));

return statearr_64069;
})();
var inst_63873 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63875 = [(1),(2)];
var inst_63876 = (new cljs.core.PersistentVector(null,2,(5),inst_63874,inst_63875,null));
var inst_63877 = [inst_63876];
var inst_63878 = (new cljs.core.PersistentVector(null,1,(5),inst_63873,inst_63877,null));
var inst_63879 = cljs.core.deref(inst_63805);
var inst_63880 = (new cljs.core.List(null,inst_63879,null,(1),null));
var inst_63881__$1 = (new cljs.core.List(null,inst_63878,inst_63880,(2),null));
var inst_63882__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63881__$1);
var state_64019__$1 = (function (){var statearr_64070 = state_64019;
(statearr_64070[(19)] = inst_63881__$1);

(statearr_64070[(20)] = inst_63882__$1);

return statearr_64070;
})();
if(cljs.core.truth_(inst_63882__$1)){
var statearr_64072_64317 = state_64019__$1;
(statearr_64072_64317[(1)] = (17));

} else {
var statearr_64073_64318 = state_64019__$1;
(statearr_64073_64318[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (22))){
var inst_63914 = (state_64019[(2)]);
var inst_63917 = cljs.core.async.timeout((20));
var state_64019__$1 = (function (){var statearr_64082 = state_64019;
(statearr_64082[(21)] = inst_63914);

return statearr_64082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64019__$1,(23),inst_63917);
} else {
if((state_val_64020 === (36))){
var inst_63991 = (state_64019[(16)]);
var inst_63994 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63995 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63996 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63997 = cljs.core.cons(inst_63996,inst_63991);
var inst_63998 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),18,60,inst_63995,60,inst_63997,"Should flush 3,4 after timeout from first message"];
var inst_63999 = cljs.core.PersistentHashMap.fromArrays(inst_63994,inst_63998);
var inst_64000 = cljs.test.report.call(null,inst_63999);
var state_64019__$1 = state_64019;
var statearr_64085_64322 = state_64019__$1;
(statearr_64085_64322[(2)] = inst_64000);

(statearr_64085_64322[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (29))){
var inst_63939 = (state_64019[(11)]);
var inst_63951 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63952 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63953 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63954 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63955 = cljs.core.cons(inst_63954,inst_63939);
var inst_63956 = (new cljs.core.List(null,inst_63955,null,(1),null));
var inst_63957 = (new cljs.core.List(null,inst_63953,inst_63956,(2),null));
var inst_63958 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,57,inst_63952,57,inst_63957,"Should not flush 3,4 yet"];
var inst_63959 = cljs.core.PersistentHashMap.fromArrays(inst_63951,inst_63958);
var inst_63960 = cljs.test.report.call(null,inst_63959);
var state_64019__$1 = state_64019;
var statearr_64091_64327 = state_64019__$1;
(statearr_64091_64327[(2)] = inst_63960);

(statearr_64091_64327[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (6))){
var inst_63856 = (state_64019[(2)]);
var inst_63857 = cljs.core.async.timeout((100));
var state_64019__$1 = (function (){var statearr_64092 = state_64019;
(statearr_64092[(22)] = inst_63856);

return statearr_64092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64019__$1,(12),inst_63857);
} else {
if((state_val_64020 === (28))){
var inst_63939 = (state_64019[(11)]);
var inst_63942 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63943 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63944 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63946 = cljs.core.cons(inst_63944,inst_63939);
var inst_63947 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,57,inst_63943,57,inst_63946,"Should not flush 3,4 yet"];
var inst_63948 = cljs.core.PersistentHashMap.fromArrays(inst_63942,inst_63947);
var inst_63949 = cljs.test.report.call(null,inst_63948);
var state_64019__$1 = state_64019;
var statearr_64093_64331 = state_64019__$1;
(statearr_64093_64331[(2)] = inst_63949);

(statearr_64093_64331[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (25))){
var inst_63965 = (state_64019[(2)]);
var inst_63966 = cljs.core.async.timeout((80));
var state_64019__$1 = (function (){var statearr_64094 = state_64019;
(statearr_64094[(23)] = inst_63965);

return statearr_64094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64019__$1,(31),inst_63966);
} else {
if((state_val_64020 === (34))){
var inst_63969 = (state_64019[(2)]);
var inst_63970 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63971 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63972 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),18,60,inst_63971,60,inst_63969,"Should flush 3,4 after timeout from first message"];
var inst_63973 = cljs.core.PersistentHashMap.fromArrays(inst_63970,inst_63972);
var inst_63974 = cljs.test.report.call(null,inst_63973);
var state_64019__$1 = state_64019;
var statearr_64095_64333 = state_64019__$1;
(statearr_64095_64333[(2)] = inst_63974);

(statearr_64095_64333[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (17))){
var inst_63881 = (state_64019[(19)]);
var inst_63884 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63885 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63886 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63887 = cljs.core.cons(inst_63886,inst_63881);
var inst_63888 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,50,inst_63885,50,inst_63887,"Should flush after timeout"];
var inst_63889 = cljs.core.PersistentHashMap.fromArrays(inst_63884,inst_63888);
var inst_63890 = cljs.test.report.call(null,inst_63889);
var state_64019__$1 = state_64019;
var statearr_64096_64335 = state_64019__$1;
(statearr_64096_64335[(2)] = inst_63890);

(statearr_64096_64335[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (3))){
var inst_63815 = (state_64019[(2)]);
var inst_63816 = cljs.core.async.timeout((50));
var state_64019__$1 = (function (){var statearr_64097 = state_64019;
(statearr_64097[(24)] = inst_63815);

return statearr_64097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64019__$1,(4),inst_63816);
} else {
if((state_val_64020 === (12))){
var inst_63859 = (state_64019[(2)]);
var state_64019__$1 = (function (){var statearr_64098 = state_64019;
(statearr_64098[(25)] = inst_63859);

return statearr_64098;
})();
var statearr_64099_64336 = state_64019__$1;
(statearr_64099_64336[(2)] = null);

(statearr_64099_64336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (2))){
var inst_63803 = (state_64019[(8)]);
var inst_63813 = (state_64019[(2)]);
var state_64019__$1 = (function (){var statearr_64101 = state_64019;
(statearr_64101[(26)] = inst_63813);

return statearr_64101;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64019__$1,(3),inst_63803,(2));
} else {
if((state_val_64020 === (23))){
var inst_63919 = (state_64019[(2)]);
var state_64019__$1 = (function (){var statearr_64102 = state_64019;
(statearr_64102[(27)] = inst_63919);

return statearr_64102;
})();
var statearr_64103_64337 = state_64019__$1;
(statearr_64103_64337[(2)] = null);

(statearr_64103_64337[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (35))){
var _ = (function (){var statearr_64104 = state_64019;
(statearr_64104[(4)] = cljs.core.rest((state_64019[(4)])));

return statearr_64104;
})();
var state_64019__$1 = state_64019;
var ex64100 = (state_64019__$1[(2)]);
var statearr_64105_64338 = state_64019__$1;
(statearr_64105_64338[(5)] = ex64100);


var statearr_64106_64340 = state_64019__$1;
(statearr_64106_64340[(1)] = (34));

(statearr_64106_64340[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (19))){
var inst_63882 = (state_64019[(20)]);
var inst_63904 = (state_64019[(2)]);
var _ = (function (){var statearr_64107 = state_64019;
(statearr_64107[(4)] = cljs.core.rest((state_64019[(4)])));

return statearr_64107;
})();
var state_64019__$1 = (function (){var statearr_64108 = state_64019;
(statearr_64108[(28)] = inst_63904);

return statearr_64108;
})();
var statearr_64109_64341 = state_64019__$1;
(statearr_64109_64341[(2)] = inst_63882);

(statearr_64109_64341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (11))){
var inst_63832 = (state_64019[(29)]);
var inst_63853 = (state_64019[(2)]);
var _ = (function (){var statearr_64110 = state_64019;
(statearr_64110[(4)] = cljs.core.rest((state_64019[(4)])));

return statearr_64110;
})();
var state_64019__$1 = (function (){var statearr_64111 = state_64019;
(statearr_64111[(30)] = inst_63853);

return statearr_64111;
})();
var statearr_64112_64342 = state_64019__$1;
(statearr_64112_64342[(2)] = inst_63832);

(statearr_64112_64342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (9))){
var inst_63831 = (state_64019[(31)]);
var inst_63834 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63835 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63836 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63837 = cljs.core.cons(inst_63836,inst_63831);
var inst_63838 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,47,inst_63835,47,inst_63837,"Should not flush before timeout"];
var inst_63839 = cljs.core.PersistentHashMap.fromArrays(inst_63834,inst_63838);
var inst_63840 = cljs.test.report.call(null,inst_63839);
var state_64019__$1 = state_64019;
var statearr_64113_64343 = state_64019__$1;
(statearr_64113_64343[(2)] = inst_63840);

(statearr_64113_64343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (5))){
var inst_63805 = (state_64019[(9)]);
var inst_63831 = (state_64019[(31)]);
var inst_63832 = (state_64019[(29)]);
var _ = (function (){var statearr_64114 = state_64019;
(statearr_64114[(4)] = cljs.core.cons((8),(state_64019[(4)])));

return statearr_64114;
})();
var inst_63830 = cljs.core.deref(inst_63805);
var inst_63831__$1 = (new cljs.core.List(null,inst_63830,null,(1),null));
var inst_63832__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_63831__$1);
var state_64019__$1 = (function (){var statearr_64115 = state_64019;
(statearr_64115[(31)] = inst_63831__$1);

(statearr_64115[(29)] = inst_63832__$1);

return statearr_64115;
})();
if(cljs.core.truth_(inst_63832__$1)){
var statearr_64116_64344 = state_64019__$1;
(statearr_64116_64344[(1)] = (9));

} else {
var statearr_64117_64345 = state_64019__$1;
(statearr_64117_64345[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (14))){
var inst_63803 = (state_64019[(8)]);
var inst_63907 = (state_64019[(2)]);
var state_64019__$1 = (function (){var statearr_64119 = state_64019;
(statearr_64119[(32)] = inst_63907);

return statearr_64119;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64019__$1,(20),inst_63803,(3));
} else {
if((state_val_64020 === (26))){
var inst_63920 = (state_64019[(2)]);
var inst_63921 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63922 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63923 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,57,inst_63922,57,inst_63920,"Should not flush 3,4 yet"];
var inst_63924 = cljs.core.PersistentHashMap.fromArrays(inst_63921,inst_63923);
var inst_63925 = cljs.test.report.call(null,inst_63924);
var state_64019__$1 = state_64019;
var statearr_64120_64346 = state_64019__$1;
(statearr_64120_64346[(2)] = inst_63925);

(statearr_64120_64346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (16))){
var _ = (function (){var statearr_64121 = state_64019;
(statearr_64121[(4)] = cljs.core.rest((state_64019[(4)])));

return statearr_64121;
})();
var state_64019__$1 = state_64019;
var ex64118 = (state_64019__$1[(2)]);
var statearr_64122_64347 = state_64019__$1;
(statearr_64122_64347[(5)] = ex64118);


var statearr_64123_64348 = state_64019__$1;
(statearr_64123_64348[(1)] = (15));

(statearr_64123_64348[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (38))){
var inst_63992 = (state_64019[(17)]);
var inst_64013 = (state_64019[(2)]);
var _ = (function (){var statearr_64124 = state_64019;
(statearr_64124[(4)] = cljs.core.rest((state_64019[(4)])));

return statearr_64124;
})();
var state_64019__$1 = (function (){var statearr_64125 = state_64019;
(statearr_64125[(33)] = inst_64013);

return statearr_64125;
})();
var statearr_64126_64349 = state_64019__$1;
(statearr_64126_64349[(2)] = inst_63992);

(statearr_64126_64349[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (30))){
var inst_63940 = (state_64019[(12)]);
var inst_63962 = (state_64019[(2)]);
var _ = (function (){var statearr_64127 = state_64019;
(statearr_64127[(4)] = cljs.core.rest((state_64019[(4)])));

return statearr_64127;
})();
var state_64019__$1 = (function (){var statearr_64128 = state_64019;
(statearr_64128[(34)] = inst_63962);

return statearr_64128;
})();
var statearr_64129_64350 = state_64019__$1;
(statearr_64129_64350[(2)] = inst_63940);

(statearr_64129_64350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (10))){
var inst_63831 = (state_64019[(31)]);
var inst_63842 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63843 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63844 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63845 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63846 = cljs.core.cons(inst_63845,inst_63831);
var inst_63847 = (new cljs.core.List(null,inst_63846,null,(1),null));
var inst_63848 = (new cljs.core.List(null,inst_63844,inst_63847,(2),null));
var inst_63849 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,47,inst_63843,47,inst_63848,"Should not flush before timeout"];
var inst_63850 = cljs.core.PersistentHashMap.fromArrays(inst_63842,inst_63849);
var inst_63851 = cljs.test.report.call(null,inst_63850);
var state_64019__$1 = state_64019;
var statearr_64130_64351 = state_64019__$1;
(statearr_64130_64351[(2)] = inst_63851);

(statearr_64130_64351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (18))){
var inst_63881 = (state_64019[(19)]);
var inst_63892 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63893 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63895 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63896 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63897 = cljs.core.cons(inst_63896,inst_63881);
var inst_63898 = (new cljs.core.List(null,inst_63897,null,(1),null));
var inst_63899 = (new cljs.core.List(null,inst_63895,inst_63898,(2),null));
var inst_63900 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,50,inst_63893,50,inst_63899,"Should flush after timeout"];
var inst_63901 = cljs.core.PersistentHashMap.fromArrays(inst_63892,inst_63900);
var inst_63902 = cljs.test.report.call(null,inst_63901);
var state_64019__$1 = state_64019;
var statearr_64132_64352 = state_64019__$1;
(statearr_64132_64352[(2)] = inst_63902);

(statearr_64132_64352[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (37))){
var inst_63991 = (state_64019[(16)]);
var inst_64002 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64003 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64004 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64005 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64006 = cljs.core.cons(inst_64005,inst_63991);
var inst_64007 = (new cljs.core.List(null,inst_64006,null,(1),null));
var inst_64008 = (new cljs.core.List(null,inst_64004,inst_64007,(2),null));
var inst_64009 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),18,60,inst_64003,60,inst_64008,"Should flush 3,4 after timeout from first message"];
var inst_64010 = cljs.core.PersistentHashMap.fromArrays(inst_64002,inst_64009);
var inst_64011 = cljs.test.report.call(null,inst_64010);
var state_64019__$1 = state_64019;
var statearr_64133_64353 = state_64019__$1;
(statearr_64133_64353[(2)] = inst_64011);

(statearr_64133_64353[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64020 === (8))){
var _ = (function (){var statearr_64134 = state_64019;
(statearr_64134[(4)] = cljs.core.rest((state_64019[(4)])));

return statearr_64134;
})();
var state_64019__$1 = state_64019;
var ex64131 = (state_64019__$1[(2)]);
var statearr_64135_64354 = state_64019__$1;
(statearr_64135_64354[(5)] = ex64131);


var statearr_64136_64355 = state_64019__$1;
(statearr_64136_64355[(1)] = (7));

(statearr_64136_64355[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0 = (function (){
var statearr_64137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64137[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__);

(statearr_64137[(1)] = (1));

return statearr_64137;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1 = (function (state_64019){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_64019);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e64138){var ex__32403__auto__ = e64138;
var statearr_64139_64356 = state_64019;
(statearr_64139_64356[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_64019[(4)]))){
var statearr_64140_64357 = state_64019;
(statearr_64140_64357[(1)] = cljs.core.first((state_64019[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64358 = state_64019;
state_64019 = G__64358;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__ = function(state_64019){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1.call(this,state_64019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_64141 = f__32493__auto__();
(statearr_64141[(6)] = c__32492__auto__);

return statearr_64141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63798","meta63798",-550836610,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63797");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63797");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63797.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63797 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63797(meta63798){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797(meta63798));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63797(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147 = (function (meta64148){
this.meta64148 = meta64148;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64149,meta64148__$1){
var self__ = this;
var _64149__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147(meta64148__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64149){
var self__ = this;
var _64149__$1 = this;
return self__.meta64148;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__64152 = (arguments.length - (1));
switch (G__64152) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147.prototype.apply = (function (self__,args64150){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args64150)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_64218){
var state_val_64219 = (state_64218[(1)]);
if((state_val_64219 === (7))){
var inst_64170 = (state_64218[(2)]);
var inst_64171 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64172 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64173 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),18,78,inst_64172,78,inst_64170,"Closing input should flush remaining"];
var inst_64174 = cljs.core.PersistentHashMap.fromArrays(inst_64171,inst_64173);
var inst_64175 = cljs.test.report.call(null,inst_64174);
var state_64218__$1 = state_64218;
var statearr_64220_64360 = state_64218__$1;
(statearr_64220_64360[(2)] = inst_64175);

(statearr_64220_64360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64219 === (1))){
var inst_64154 = (state_64218[(7)]);
var inst_64156 = (state_64218[(8)]);
var inst_64154__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_64155 = cljs.core.PersistentVector.EMPTY;
var inst_64156__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_64155);
var inst_64157 = (function (){var input_ch = inst_64154__$1;
var results = inst_64156__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_64158 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_64159 = [inst_64154__$1,inst_64157];
var inst_64160 = cljs.core.PersistentHashMap.fromArrays(inst_64158,inst_64159);
var inst_64161 = bb_web_ds_tools.components.async_buffer.create(inst_64160);
var state_64218__$1 = (function (){var statearr_64221 = state_64218;
(statearr_64221[(7)] = inst_64154__$1);

(statearr_64221[(8)] = inst_64156__$1);

(statearr_64221[(9)] = inst_64161);

return statearr_64221;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64218__$1,(2),inst_64154__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_64219 === (4))){
var inst_64169 = (state_64218[(2)]);
var state_64218__$1 = (function (){var statearr_64222 = state_64218;
(statearr_64222[(10)] = inst_64169);

return statearr_64222;
})();
var statearr_64223_64361 = state_64218__$1;
(statearr_64223_64361[(2)] = null);

(statearr_64223_64361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64219 === (6))){
var inst_64215 = (state_64218[(2)]);
var inst_64216 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64218__$1 = (function (){var statearr_64224 = state_64218;
(statearr_64224[(11)] = inst_64215);

return statearr_64224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64218__$1,inst_64216);
} else {
if((state_val_64219 === (3))){
var inst_64154 = (state_64218[(7)]);
var inst_64165 = (state_64218[(2)]);
var inst_64166 = cljs.core.async.close_BANG_(inst_64154);
var inst_64167 = cljs.core.async.timeout((20));
var state_64218__$1 = (function (){var statearr_64225 = state_64218;
(statearr_64225[(12)] = inst_64165);

(statearr_64225[(13)] = inst_64166);

return statearr_64225;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64218__$1,(4),inst_64167);
} else {
if((state_val_64219 === (2))){
var inst_64154 = (state_64218[(7)]);
var inst_64163 = (state_64218[(2)]);
var state_64218__$1 = (function (){var statearr_64226 = state_64218;
(statearr_64226[(14)] = inst_64163);

return statearr_64226;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64218__$1,(3),inst_64154,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_64219 === (11))){
var inst_64190 = (state_64218[(15)]);
var inst_64212 = (state_64218[(2)]);
var _ = (function (){var statearr_64227 = state_64218;
(statearr_64227[(4)] = cljs.core.rest((state_64218[(4)])));

return statearr_64227;
})();
var state_64218__$1 = (function (){var statearr_64228 = state_64218;
(statearr_64228[(16)] = inst_64212);

return statearr_64228;
})();
var statearr_64229_64368 = state_64218__$1;
(statearr_64229_64368[(2)] = inst_64190);

(statearr_64229_64368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64219 === (9))){
var inst_64189 = (state_64218[(17)]);
var inst_64192 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64193 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64194 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64195 = cljs.core.cons(inst_64194,inst_64189);
var inst_64196 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),18,78,inst_64193,78,inst_64195,"Closing input should flush remaining"];
var inst_64197 = cljs.core.PersistentHashMap.fromArrays(inst_64192,inst_64196);
var inst_64198 = cljs.test.report.call(null,inst_64197);
var state_64218__$1 = state_64218;
var statearr_64230_64369 = state_64218__$1;
(statearr_64230_64369[(2)] = inst_64198);

(statearr_64230_64369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64219 === (5))){
var inst_64156 = (state_64218[(8)]);
var inst_64189 = (state_64218[(17)]);
var inst_64190 = (state_64218[(15)]);
var _ = (function (){var statearr_64232 = state_64218;
(statearr_64232[(4)] = cljs.core.cons((8),(state_64218[(4)])));

return statearr_64232;
})();
var inst_64181 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64182 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64183 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_64184 = (new cljs.core.PersistentVector(null,2,(5),inst_64182,inst_64183,null));
var inst_64185 = [inst_64184];
var inst_64186 = (new cljs.core.PersistentVector(null,1,(5),inst_64181,inst_64185,null));
var inst_64187 = cljs.core.deref(inst_64156);
var inst_64188 = (new cljs.core.List(null,inst_64187,null,(1),null));
var inst_64189__$1 = (new cljs.core.List(null,inst_64186,inst_64188,(2),null));
var inst_64190__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64189__$1);
var state_64218__$1 = (function (){var statearr_64235 = state_64218;
(statearr_64235[(17)] = inst_64189__$1);

(statearr_64235[(15)] = inst_64190__$1);

return statearr_64235;
})();
if(cljs.core.truth_(inst_64190__$1)){
var statearr_64236_64370 = state_64218__$1;
(statearr_64236_64370[(1)] = (9));

} else {
var statearr_64237_64371 = state_64218__$1;
(statearr_64237_64371[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64219 === (10))){
var inst_64189 = (state_64218[(17)]);
var inst_64200 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64201 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64203 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64204 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64205 = cljs.core.cons(inst_64204,inst_64189);
var inst_64206 = (new cljs.core.List(null,inst_64205,null,(1),null));
var inst_64207 = (new cljs.core.List(null,inst_64203,inst_64206,(2),null));
var inst_64208 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),18,78,inst_64201,78,inst_64207,"Closing input should flush remaining"];
var inst_64209 = cljs.core.PersistentHashMap.fromArrays(inst_64200,inst_64208);
var inst_64210 = cljs.test.report.call(null,inst_64209);
var state_64218__$1 = state_64218;
var statearr_64241_64372 = state_64218__$1;
(statearr_64241_64372[(2)] = inst_64210);

(statearr_64241_64372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64219 === (8))){
var _ = (function (){var statearr_64243 = state_64218;
(statearr_64243[(4)] = cljs.core.rest((state_64218[(4)])));

return statearr_64243;
})();
var state_64218__$1 = state_64218;
var ex64231 = (state_64218__$1[(2)]);
var statearr_64244_64375 = state_64218__$1;
(statearr_64244_64375[(5)] = ex64231);


var statearr_64245_64376 = state_64218__$1;
(statearr_64245_64376[(1)] = (7));

(statearr_64245_64376[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0 = (function (){
var statearr_64246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64246[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__);

(statearr_64246[(1)] = (1));

return statearr_64246;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1 = (function (state_64218){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_64218);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e64250){var ex__32403__auto__ = e64250;
var statearr_64251_64378 = state_64218;
(statearr_64251_64378[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_64218[(4)]))){
var statearr_64253_64380 = state_64218;
(statearr_64253_64380[(1)] = cljs.core.first((state_64218[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64382 = state_64218;
state_64218 = G__64382;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__ = function(state_64218){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1.call(this,state_64218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_64256 = f__32493__auto__();
(statearr_64256[(6)] = c__32492__auto__);

return statearr_64256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64148","meta64148",-362331488,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64147");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64147");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64147.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test64147 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test64147(meta64148){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147(meta64148));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64147(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
