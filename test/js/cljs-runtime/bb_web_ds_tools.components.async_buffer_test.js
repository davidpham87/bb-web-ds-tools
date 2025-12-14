goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513 = (function (meta63514){
this.meta63514 = meta63514;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63515,meta63514__$1){
var self__ = this;
var _63515__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513(meta63514__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63515){
var self__ = this;
var _63515__$1 = this;
return self__.meta63514;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63519 = (arguments.length - (1));
switch (G__63519) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513.prototype.apply = (function (self__,args63516){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63516)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_63697){
var state_val_63698 = (state_63697[(1)]);
if((state_val_63698 === (7))){
var inst_63549 = (state_63697[(2)]);
var inst_63550 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63551 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63552 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,19,inst_63551,19,inst_63549,"Buffer should not flush automatically without timer"];
var inst_63553 = cljs.core.PersistentHashMap.fromArrays(inst_63550,inst_63552);
var inst_63554 = cljs.test.report.call(null,inst_63553);
var state_63697__$1 = state_63697;
var statearr_63699_64253 = state_63697__$1;
(statearr_63699_64253[(2)] = inst_63554);

(statearr_63699_64253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (20))){
var inst_63537 = (state_63697[(7)]);
var inst_63642 = (state_63697[(2)]);
var inst_63643 = (inst_63537.cljs$core$IFn$_invoke$arity$0 ? inst_63537.cljs$core$IFn$_invoke$arity$0() : inst_63537.call(null));
var inst_63644 = cljs.core.async.timeout((20));
var state_63697__$1 = (function (){var statearr_63700 = state_63697;
(statearr_63700[(8)] = inst_63642);

(statearr_63700[(9)] = inst_63643);

return statearr_63700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63697__$1,(21),inst_63644);
} else {
if((state_val_63698 === (27))){
var inst_63669 = (state_63697[(10)]);
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
var state_63697__$1 = state_63697;
var statearr_63701_64254 = state_63697__$1;
(statearr_63701_64254[(2)] = inst_63689);

(statearr_63701_64254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (1))){
var inst_63529 = (state_63697[(11)]);
var inst_63531 = (state_63697[(12)]);
var inst_63529__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63530 = cljs.core.PersistentVector.EMPTY;
var inst_63531__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63530);
var inst_63532 = (function (){var input_ch = inst_63529__$1;
var results = inst_63531__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63534 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63535 = [inst_63529__$1,inst_63532];
var inst_63536 = cljs.core.PersistentHashMap.fromArrays(inst_63534,inst_63535);
var inst_63537 = bb_web_ds_tools.components.async_buffer.create(inst_63536);
var state_63697__$1 = (function (){var statearr_63702 = state_63697;
(statearr_63702[(11)] = inst_63529__$1);

(statearr_63702[(12)] = inst_63531__$1);

(statearr_63702[(7)] = inst_63537);

return statearr_63702;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63697__$1,(2),inst_63529__$1,(1));
} else {
if((state_val_63698 === (24))){
var inst_63647 = (state_63697[(2)]);
var inst_63648 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63649 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63650 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"error","error",-978969032),18,29,inst_63649,29,inst_63647,"Subsequent flush should work"];
var inst_63651 = cljs.core.PersistentHashMap.fromArrays(inst_63648,inst_63650);
var inst_63652 = cljs.test.report.call(null,inst_63651);
var state_63697__$1 = state_63697;
var statearr_63703_64255 = state_63697__$1;
(statearr_63703_64255[(2)] = inst_63652);

(statearr_63703_64255[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (4))){
var inst_63544 = (state_63697[(2)]);
var state_63697__$1 = (function (){var statearr_63704 = state_63697;
(statearr_63704[(13)] = inst_63544);

return statearr_63704;
})();
var statearr_63705_64257 = state_63697__$1;
(statearr_63705_64257[(2)] = null);

(statearr_63705_64257[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (15))){
var inst_63591 = (state_63697[(2)]);
var inst_63592 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63593 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63594 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,24,inst_63593,24,inst_63591,"Manual flush should flush all items"];
var inst_63595 = cljs.core.PersistentHashMap.fromArrays(inst_63592,inst_63594);
var inst_63596 = cljs.test.report.call(null,inst_63595);
var state_63697__$1 = state_63697;
var statearr_63706_64259 = state_63697__$1;
(statearr_63706_64259[(2)] = inst_63596);

(statearr_63706_64259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (21))){
var inst_63646 = (state_63697[(2)]);
var state_63697__$1 = (function (){var statearr_63707 = state_63697;
(statearr_63707[(14)] = inst_63646);

return statearr_63707;
})();
var statearr_63708_64261 = state_63697__$1;
(statearr_63708_64261[(2)] = null);

(statearr_63708_64261[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (13))){
var inst_63531 = (state_63697[(12)]);
var inst_63610 = (state_63697[(15)]);
var inst_63611 = (state_63697[(16)]);
var _ = (function (){var statearr_63709 = state_63697;
(statearr_63709[(4)] = cljs.core.cons((16),(state_63697[(4)])));

return statearr_63709;
})();
var inst_63602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63603 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63604 = [(1),(2)];
var inst_63605 = (new cljs.core.PersistentVector(null,2,(5),inst_63603,inst_63604,null));
var inst_63606 = [inst_63605];
var inst_63607 = (new cljs.core.PersistentVector(null,1,(5),inst_63602,inst_63606,null));
var inst_63608 = cljs.core.deref(inst_63531);
var inst_63609 = (new cljs.core.List(null,inst_63608,null,(1),null));
var inst_63610__$1 = (new cljs.core.List(null,inst_63607,inst_63609,(2),null));
var inst_63611__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63610__$1);
var state_63697__$1 = (function (){var statearr_63710 = state_63697;
(statearr_63710[(15)] = inst_63610__$1);

(statearr_63710[(16)] = inst_63611__$1);

return statearr_63710;
})();
if(cljs.core.truth_(inst_63611__$1)){
var statearr_63711_64265 = state_63697__$1;
(statearr_63711_64265[(1)] = (17));

} else {
var statearr_63712_64266 = state_63697__$1;
(statearr_63712_64266[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (22))){
var inst_63531 = (state_63697[(12)]);
var inst_63669 = (state_63697[(10)]);
var inst_63670 = (state_63697[(17)]);
var _ = (function (){var statearr_63713 = state_63697;
(statearr_63713[(4)] = cljs.core.cons((25),(state_63697[(4)])));

return statearr_63713;
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
var inst_63667 = cljs.core.deref(inst_63531);
var inst_63668 = (new cljs.core.List(null,inst_63667,null,(1),null));
var inst_63669__$1 = (new cljs.core.List(null,inst_63666,inst_63668,(2),null));
var inst_63670__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63669__$1);
var state_63697__$1 = (function (){var statearr_63715 = state_63697;
(statearr_63715[(10)] = inst_63669__$1);

(statearr_63715[(17)] = inst_63670__$1);

return statearr_63715;
})();
if(cljs.core.truth_(inst_63670__$1)){
var statearr_63717_64267 = state_63697__$1;
(statearr_63717_64267[(1)] = (26));

} else {
var statearr_63718_64268 = state_63697__$1;
(statearr_63718_64268[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (6))){
var inst_63537 = (state_63697[(7)]);
var inst_63586 = (state_63697[(2)]);
var inst_63587 = (inst_63537.cljs$core$IFn$_invoke$arity$0 ? inst_63537.cljs$core$IFn$_invoke$arity$0() : inst_63537.call(null));
var inst_63588 = cljs.core.async.timeout((20));
var state_63697__$1 = (function (){var statearr_63724 = state_63697;
(statearr_63724[(18)] = inst_63586);

(statearr_63724[(19)] = inst_63587);

return statearr_63724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63697__$1,(12),inst_63588);
} else {
if((state_val_63698 === (28))){
var inst_63670 = (state_63697[(17)]);
var inst_63691 = (state_63697[(2)]);
var _ = (function (){var statearr_63726 = state_63697;
(statearr_63726[(4)] = cljs.core.rest((state_63697[(4)])));

return statearr_63726;
})();
var state_63697__$1 = (function (){var statearr_63727 = state_63697;
(statearr_63727[(20)] = inst_63691);

return statearr_63727;
})();
var statearr_63728_64269 = state_63697__$1;
(statearr_63728_64269[(2)] = inst_63670);

(statearr_63728_64269[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (25))){
var _ = (function (){var statearr_63729 = state_63697;
(statearr_63729[(4)] = cljs.core.rest((state_63697[(4)])));

return statearr_63729;
})();
var state_63697__$1 = state_63697;
var ex63719 = (state_63697__$1[(2)]);
var statearr_63730_64270 = state_63697__$1;
(statearr_63730_64270[(5)] = ex63719);


var statearr_63731_64271 = state_63697__$1;
(statearr_63731_64271[(1)] = (24));

(statearr_63731_64271[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (17))){
var inst_63610 = (state_63697[(15)]);
var inst_63613 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63614 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63615 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63616 = cljs.core.cons(inst_63615,inst_63610);
var inst_63617 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,24,inst_63614,24,inst_63616,"Manual flush should flush all items"];
var inst_63618 = cljs.core.PersistentHashMap.fromArrays(inst_63613,inst_63617);
var inst_63619 = cljs.test.report.call(null,inst_63618);
var state_63697__$1 = state_63697;
var statearr_63732_64272 = state_63697__$1;
(statearr_63732_64272[(2)] = inst_63619);

(statearr_63732_64272[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (3))){
var inst_63541 = (state_63697[(2)]);
var inst_63542 = cljs.core.async.timeout((20));
var state_63697__$1 = (function (){var statearr_63734 = state_63697;
(statearr_63734[(21)] = inst_63541);

return statearr_63734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63697__$1,(4),inst_63542);
} else {
if((state_val_63698 === (12))){
var inst_63590 = (state_63697[(2)]);
var state_63697__$1 = (function (){var statearr_63735 = state_63697;
(statearr_63735[(22)] = inst_63590);

return statearr_63735;
})();
var statearr_63736_64273 = state_63697__$1;
(statearr_63736_64273[(2)] = null);

(statearr_63736_64273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (2))){
var inst_63529 = (state_63697[(11)]);
var inst_63539 = (state_63697[(2)]);
var state_63697__$1 = (function (){var statearr_63737 = state_63697;
(statearr_63737[(23)] = inst_63539);

return statearr_63737;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63697__$1,(3),inst_63529,(2));
} else {
if((state_val_63698 === (23))){
var inst_63694 = (state_63697[(2)]);
var inst_63695 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_63697__$1 = (function (){var statearr_63738 = state_63697;
(statearr_63738[(24)] = inst_63694);

return statearr_63738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63697__$1,inst_63695);
} else {
if((state_val_63698 === (19))){
var inst_63611 = (state_63697[(16)]);
var inst_63637 = (state_63697[(2)]);
var _ = (function (){var statearr_63740 = state_63697;
(statearr_63740[(4)] = cljs.core.rest((state_63697[(4)])));

return statearr_63740;
})();
var state_63697__$1 = (function (){var statearr_63741 = state_63697;
(statearr_63741[(25)] = inst_63637);

return statearr_63741;
})();
var statearr_63742_64274 = state_63697__$1;
(statearr_63742_64274[(2)] = inst_63611);

(statearr_63742_64274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (11))){
var inst_63562 = (state_63697[(26)]);
var inst_63583 = (state_63697[(2)]);
var _ = (function (){var statearr_63745 = state_63697;
(statearr_63745[(4)] = cljs.core.rest((state_63697[(4)])));

return statearr_63745;
})();
var state_63697__$1 = (function (){var statearr_63746 = state_63697;
(statearr_63746[(27)] = inst_63583);

return statearr_63746;
})();
var statearr_63747_64275 = state_63697__$1;
(statearr_63747_64275[(2)] = inst_63562);

(statearr_63747_64275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (9))){
var inst_63561 = (state_63697[(28)]);
var inst_63564 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63565 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63566 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63567 = cljs.core.cons(inst_63566,inst_63561);
var inst_63568 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,19,inst_63565,19,inst_63567,"Buffer should not flush automatically without timer"];
var inst_63569 = cljs.core.PersistentHashMap.fromArrays(inst_63564,inst_63568);
var inst_63570 = cljs.test.report.call(null,inst_63569);
var state_63697__$1 = state_63697;
var statearr_63749_64276 = state_63697__$1;
(statearr_63749_64276[(2)] = inst_63570);

(statearr_63749_64276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (5))){
var inst_63531 = (state_63697[(12)]);
var inst_63561 = (state_63697[(28)]);
var inst_63562 = (state_63697[(26)]);
var _ = (function (){var statearr_63750 = state_63697;
(statearr_63750[(4)] = cljs.core.cons((8),(state_63697[(4)])));

return statearr_63750;
})();
var inst_63560 = cljs.core.deref(inst_63531);
var inst_63561__$1 = (new cljs.core.List(null,inst_63560,null,(1),null));
var inst_63562__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_63561__$1);
var state_63697__$1 = (function (){var statearr_63751 = state_63697;
(statearr_63751[(28)] = inst_63561__$1);

(statearr_63751[(26)] = inst_63562__$1);

return statearr_63751;
})();
if(cljs.core.truth_(inst_63562__$1)){
var statearr_63752_64277 = state_63697__$1;
(statearr_63752_64277[(1)] = (9));

} else {
var statearr_63753_64278 = state_63697__$1;
(statearr_63753_64278[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (14))){
var inst_63529 = (state_63697[(11)]);
var inst_63640 = (state_63697[(2)]);
var state_63697__$1 = (function (){var statearr_63756 = state_63697;
(statearr_63756[(29)] = inst_63640);

return statearr_63756;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63697__$1,(20),inst_63529,(3));
} else {
if((state_val_63698 === (26))){
var inst_63669 = (state_63697[(10)]);
var inst_63672 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63673 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63674 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63675 = cljs.core.cons(inst_63674,inst_63669);
var inst_63676 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,inst_63673,29,inst_63675,"Subsequent flush should work"];
var inst_63677 = cljs.core.PersistentHashMap.fromArrays(inst_63672,inst_63676);
var inst_63678 = cljs.test.report.call(null,inst_63677);
var state_63697__$1 = state_63697;
var statearr_63757_64279 = state_63697__$1;
(statearr_63757_64279[(2)] = inst_63678);

(statearr_63757_64279[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (16))){
var _ = (function (){var statearr_63758 = state_63697;
(statearr_63758[(4)] = cljs.core.rest((state_63697[(4)])));

return statearr_63758;
})();
var state_63697__$1 = state_63697;
var ex63755 = (state_63697__$1[(2)]);
var statearr_63759_64280 = state_63697__$1;
(statearr_63759_64280[(5)] = ex63755);


var statearr_63760_64281 = state_63697__$1;
(statearr_63760_64281[(1)] = (15));

(statearr_63760_64281[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (10))){
var inst_63561 = (state_63697[(28)]);
var inst_63572 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63573 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63574 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63575 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63576 = cljs.core.cons(inst_63575,inst_63561);
var inst_63577 = (new cljs.core.List(null,inst_63576,null,(1),null));
var inst_63578 = (new cljs.core.List(null,inst_63574,inst_63577,(2),null));
var inst_63579 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,19,inst_63573,19,inst_63578,"Buffer should not flush automatically without timer"];
var inst_63580 = cljs.core.PersistentHashMap.fromArrays(inst_63572,inst_63579);
var inst_63581 = cljs.test.report.call(null,inst_63580);
var state_63697__$1 = state_63697;
var statearr_63764_64282 = state_63697__$1;
(statearr_63764_64282[(2)] = inst_63581);

(statearr_63764_64282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (18))){
var inst_63610 = (state_63697[(15)]);
var inst_63626 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63627 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63628 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63629 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63630 = cljs.core.cons(inst_63629,inst_63610);
var inst_63631 = (new cljs.core.List(null,inst_63630,null,(1),null));
var inst_63632 = (new cljs.core.List(null,inst_63628,inst_63631,(2),null));
var inst_63633 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,24,inst_63627,24,inst_63632,"Manual flush should flush all items"];
var inst_63634 = cljs.core.PersistentHashMap.fromArrays(inst_63626,inst_63633);
var inst_63635 = cljs.test.report.call(null,inst_63634);
var state_63697__$1 = state_63697;
var statearr_63768_64283 = state_63697__$1;
(statearr_63768_64283[(2)] = inst_63635);

(statearr_63768_64283[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63698 === (8))){
var _ = (function (){var statearr_63770 = state_63697;
(statearr_63770[(4)] = cljs.core.rest((state_63697[(4)])));

return statearr_63770;
})();
var state_63697__$1 = state_63697;
var ex63761 = (state_63697__$1[(2)]);
var statearr_63772_64284 = state_63697__$1;
(statearr_63772_64284[(5)] = ex63761);


var statearr_63775_64285 = state_63697__$1;
(statearr_63775_64285[(1)] = (7));

(statearr_63775_64285[(5)] = null);



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
var statearr_63777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63777[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__);

(statearr_63777[(1)] = (1));

return statearr_63777;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1 = (function (state_63697){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_63697);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e63778){var ex__32403__auto__ = e63778;
var statearr_63779_64286 = state_63697;
(statearr_63779_64286[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_63697[(4)]))){
var statearr_63780_64287 = state_63697;
(statearr_63780_64287[(1)] = cljs.core.first((state_63697[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64288 = state_63697;
state_63697 = G__64288;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__ = function(state_63697){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1.call(this,state_63697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_63781 = f__32475__auto__();
(statearr_63781[(6)] = c__32474__auto__);

return statearr_63781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63514","meta63514",148052275,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63513");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63513");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63513.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63513 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63513(meta63514){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513(meta63514));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63513(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782 = (function (meta63783){
this.meta63783 = meta63783;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63784,meta63783__$1){
var self__ = this;
var _63784__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782(meta63783__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63784){
var self__ = this;
var _63784__$1 = this;
return self__.meta63783;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63787 = (arguments.length - (1));
switch (G__63787) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782.prototype.apply = (function (self__,args63785){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63785)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_64004){
var state_val_64005 = (state_64004[(1)]);
if((state_val_64005 === (7))){
var inst_63808 = (state_64004[(2)]);
var inst_63809 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63810 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63811 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,47,inst_63810,47,inst_63808,"Should not flush before timeout"];
var inst_63812 = cljs.core.PersistentHashMap.fromArrays(inst_63809,inst_63811);
var inst_63813 = cljs.test.report.call(null,inst_63812);
var state_64004__$1 = state_64004;
var statearr_64008_64290 = state_64004__$1;
(statearr_64008_64290[(2)] = inst_63813);

(statearr_64008_64290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (20))){
var inst_63896 = (state_64004[(2)]);
var inst_63897 = cljs.core.async.timeout((50));
var state_64004__$1 = (function (){var statearr_64009 = state_64004;
(statearr_64009[(7)] = inst_63896);

return statearr_64009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64004__$1,(21),inst_63897);
} else {
if((state_val_64005 === (27))){
var _ = (function (){var statearr_64010 = state_64004;
(statearr_64010[(4)] = cljs.core.rest((state_64004[(4)])));

return statearr_64010;
})();
var state_64004__$1 = state_64004;
var ex64006 = (state_64004__$1[(2)]);
var statearr_64011_64291 = state_64004__$1;
(statearr_64011_64291[(5)] = ex64006);


var statearr_64012_64292 = state_64004__$1;
(statearr_64012_64292[(1)] = (26));

(statearr_64012_64292[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (1))){
var inst_63793 = (state_64004[(8)]);
var inst_63795 = (state_64004[(9)]);
var inst_63793__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63794 = cljs.core.PersistentVector.EMPTY;
var inst_63795__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63794);
var inst_63796 = (function (){var input_ch = inst_63793__$1;
var results = inst_63795__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63797 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63798 = [inst_63793__$1,(100),inst_63796];
var inst_63799 = cljs.core.PersistentHashMap.fromArrays(inst_63797,inst_63798);
var inst_63800 = bb_web_ds_tools.components.async_buffer.create(inst_63799);
var state_64004__$1 = (function (){var statearr_64013 = state_64004;
(statearr_64013[(8)] = inst_63793__$1);

(statearr_64013[(9)] = inst_63795__$1);

(statearr_64013[(10)] = inst_63800);

return statearr_64013;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64004__$1,(2),inst_63793__$1,(1));
} else {
if((state_val_64005 === (24))){
var inst_63795 = (state_64004[(9)]);
var inst_63924 = (state_64004[(11)]);
var inst_63925 = (state_64004[(12)]);
var _ = (function (){var statearr_64014 = state_64004;
(statearr_64014[(4)] = cljs.core.cons((27),(state_64004[(4)])));

return statearr_64014;
})();
var inst_63916 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63918 = [(1),(2)];
var inst_63919 = (new cljs.core.PersistentVector(null,2,(5),inst_63917,inst_63918,null));
var inst_63920 = [inst_63919];
var inst_63921 = (new cljs.core.PersistentVector(null,1,(5),inst_63916,inst_63920,null));
var inst_63922 = cljs.core.deref(inst_63795);
var inst_63923 = (new cljs.core.List(null,inst_63922,null,(1),null));
var inst_63924__$1 = (new cljs.core.List(null,inst_63921,inst_63923,(2),null));
var inst_63925__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63924__$1);
var state_64004__$1 = (function (){var statearr_64016 = state_64004;
(statearr_64016[(11)] = inst_63924__$1);

(statearr_64016[(12)] = inst_63925__$1);

return statearr_64016;
})();
if(cljs.core.truth_(inst_63925__$1)){
var statearr_64017_64293 = state_64004__$1;
(statearr_64017_64293[(1)] = (28));

} else {
var statearr_64020_64294 = state_64004__$1;
(statearr_64020_64294[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (4))){
var inst_63807 = (state_64004[(2)]);
var state_64004__$1 = (function (){var statearr_64021 = state_64004;
(statearr_64021[(13)] = inst_63807);

return statearr_64021;
})();
var statearr_64022_64295 = state_64004__$1;
(statearr_64022_64295[(2)] = null);

(statearr_64022_64295[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (15))){
var inst_63850 = (state_64004[(2)]);
var inst_63851 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63852 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63853 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,50,inst_63852,50,inst_63850,"Should flush after timeout"];
var inst_63854 = cljs.core.PersistentHashMap.fromArrays(inst_63851,inst_63853);
var inst_63855 = cljs.test.report.call(null,inst_63854);
var state_64004__$1 = state_64004;
var statearr_64024_64296 = state_64004__$1;
(statearr_64024_64296[(2)] = inst_63855);

(statearr_64024_64296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (21))){
var inst_63793 = (state_64004[(8)]);
var inst_63899 = (state_64004[(2)]);
var state_64004__$1 = (function (){var statearr_64028 = state_64004;
(statearr_64028[(14)] = inst_63899);

return statearr_64028;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64004__$1,(22),inst_63793,(4));
} else {
if((state_val_64005 === (31))){
var inst_63952 = (state_64004[(2)]);
var state_64004__$1 = (function (){var statearr_64029 = state_64004;
(statearr_64029[(15)] = inst_63952);

return statearr_64029;
})();
var statearr_64031_64297 = state_64004__$1;
(statearr_64031_64297[(2)] = null);

(statearr_64031_64297[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (32))){
var inst_63795 = (state_64004[(9)]);
var inst_63976 = (state_64004[(16)]);
var inst_63977 = (state_64004[(17)]);
var _ = (function (){var statearr_64041 = state_64004;
(statearr_64041[(4)] = cljs.core.cons((35),(state_64004[(4)])));

return statearr_64041;
})();
var inst_63964 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63965 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63966 = [(1),(2)];
var inst_63967 = (new cljs.core.PersistentVector(null,2,(5),inst_63965,inst_63966,null));
var inst_63968 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63969 = [(3),(4)];
var inst_63970 = (new cljs.core.PersistentVector(null,2,(5),inst_63968,inst_63969,null));
var inst_63971 = [inst_63967,inst_63970];
var inst_63972 = (new cljs.core.PersistentVector(null,2,(5),inst_63964,inst_63971,null));
var inst_63974 = cljs.core.deref(inst_63795);
var inst_63975 = (new cljs.core.List(null,inst_63974,null,(1),null));
var inst_63976__$1 = (new cljs.core.List(null,inst_63972,inst_63975,(2),null));
var inst_63977__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63976__$1);
var state_64004__$1 = (function (){var statearr_64044 = state_64004;
(statearr_64044[(16)] = inst_63976__$1);

(statearr_64044[(17)] = inst_63977__$1);

return statearr_64044;
})();
if(cljs.core.truth_(inst_63977__$1)){
var statearr_64045_64298 = state_64004__$1;
(statearr_64045_64298[(1)] = (36));

} else {
var statearr_64047_64299 = state_64004__$1;
(statearr_64047_64299[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (33))){
var inst_64001 = (state_64004[(2)]);
var inst_64002 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64004__$1 = (function (){var statearr_64052 = state_64004;
(statearr_64052[(18)] = inst_64001);

return statearr_64052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64004__$1,inst_64002);
} else {
if((state_val_64005 === (13))){
var inst_63795 = (state_64004[(9)]);
var inst_63869 = (state_64004[(19)]);
var inst_63870 = (state_64004[(20)]);
var _ = (function (){var statearr_64057 = state_64004;
(statearr_64057[(4)] = cljs.core.cons((16),(state_64004[(4)])));

return statearr_64057;
})();
var inst_63861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63862 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63863 = [(1),(2)];
var inst_63864 = (new cljs.core.PersistentVector(null,2,(5),inst_63862,inst_63863,null));
var inst_63865 = [inst_63864];
var inst_63866 = (new cljs.core.PersistentVector(null,1,(5),inst_63861,inst_63865,null));
var inst_63867 = cljs.core.deref(inst_63795);
var inst_63868 = (new cljs.core.List(null,inst_63867,null,(1),null));
var inst_63869__$1 = (new cljs.core.List(null,inst_63866,inst_63868,(2),null));
var inst_63870__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63869__$1);
var state_64004__$1 = (function (){var statearr_64060 = state_64004;
(statearr_64060[(19)] = inst_63869__$1);

(statearr_64060[(20)] = inst_63870__$1);

return statearr_64060;
})();
if(cljs.core.truth_(inst_63870__$1)){
var statearr_64061_64300 = state_64004__$1;
(statearr_64061_64300[(1)] = (17));

} else {
var statearr_64064_64301 = state_64004__$1;
(statearr_64064_64301[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (22))){
var inst_63901 = (state_64004[(2)]);
var inst_63902 = cljs.core.async.timeout((20));
var state_64004__$1 = (function (){var statearr_64067 = state_64004;
(statearr_64067[(21)] = inst_63901);

return statearr_64067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64004__$1,(23),inst_63902);
} else {
if((state_val_64005 === (36))){
var inst_63976 = (state_64004[(16)]);
var inst_63979 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63980 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63981 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63982 = cljs.core.cons(inst_63981,inst_63976);
var inst_63983 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),18,60,inst_63980,60,inst_63982,"Should flush 3,4 after timeout from first message"];
var inst_63984 = cljs.core.PersistentHashMap.fromArrays(inst_63979,inst_63983);
var inst_63985 = cljs.test.report.call(null,inst_63984);
var state_64004__$1 = state_64004;
var statearr_64074_64302 = state_64004__$1;
(statearr_64074_64302[(2)] = inst_63985);

(statearr_64074_64302[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (29))){
var inst_63924 = (state_64004[(11)]);
var inst_63935 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63936 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63937 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63938 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63939 = cljs.core.cons(inst_63938,inst_63924);
var inst_63940 = (new cljs.core.List(null,inst_63939,null,(1),null));
var inst_63941 = (new cljs.core.List(null,inst_63937,inst_63940,(2),null));
var inst_63942 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,57,inst_63936,57,inst_63941,"Should not flush 3,4 yet"];
var inst_63943 = cljs.core.PersistentHashMap.fromArrays(inst_63935,inst_63942);
var inst_63944 = cljs.test.report.call(null,inst_63943);
var state_64004__$1 = state_64004;
var statearr_64081_64303 = state_64004__$1;
(statearr_64081_64303[(2)] = inst_63944);

(statearr_64081_64303[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (6))){
var inst_63845 = (state_64004[(2)]);
var inst_63846 = cljs.core.async.timeout((100));
var state_64004__$1 = (function (){var statearr_64087 = state_64004;
(statearr_64087[(22)] = inst_63845);

return statearr_64087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64004__$1,(12),inst_63846);
} else {
if((state_val_64005 === (28))){
var inst_63924 = (state_64004[(11)]);
var inst_63927 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63928 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63929 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63930 = cljs.core.cons(inst_63929,inst_63924);
var inst_63931 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,57,inst_63928,57,inst_63930,"Should not flush 3,4 yet"];
var inst_63932 = cljs.core.PersistentHashMap.fromArrays(inst_63927,inst_63931);
var inst_63933 = cljs.test.report.call(null,inst_63932);
var state_64004__$1 = state_64004;
var statearr_64088_64304 = state_64004__$1;
(statearr_64088_64304[(2)] = inst_63933);

(statearr_64088_64304[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (25))){
var inst_63949 = (state_64004[(2)]);
var inst_63950 = cljs.core.async.timeout((80));
var state_64004__$1 = (function (){var statearr_64089 = state_64004;
(statearr_64089[(23)] = inst_63949);

return statearr_64089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64004__$1,(31),inst_63950);
} else {
if((state_val_64005 === (34))){
var inst_63953 = (state_64004[(2)]);
var inst_63954 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63955 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63956 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),18,60,inst_63955,60,inst_63953,"Should flush 3,4 after timeout from first message"];
var inst_63957 = cljs.core.PersistentHashMap.fromArrays(inst_63954,inst_63956);
var inst_63958 = cljs.test.report.call(null,inst_63957);
var state_64004__$1 = state_64004;
var statearr_64090_64305 = state_64004__$1;
(statearr_64090_64305[(2)] = inst_63958);

(statearr_64090_64305[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (17))){
var inst_63869 = (state_64004[(19)]);
var inst_63872 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63873 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63874 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63875 = cljs.core.cons(inst_63874,inst_63869);
var inst_63876 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,50,inst_63873,50,inst_63875,"Should flush after timeout"];
var inst_63877 = cljs.core.PersistentHashMap.fromArrays(inst_63872,inst_63876);
var inst_63878 = cljs.test.report.call(null,inst_63877);
var state_64004__$1 = state_64004;
var statearr_64091_64306 = state_64004__$1;
(statearr_64091_64306[(2)] = inst_63878);

(statearr_64091_64306[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (3))){
var inst_63804 = (state_64004[(2)]);
var inst_63805 = cljs.core.async.timeout((50));
var state_64004__$1 = (function (){var statearr_64092 = state_64004;
(statearr_64092[(24)] = inst_63804);

return statearr_64092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64004__$1,(4),inst_63805);
} else {
if((state_val_64005 === (12))){
var inst_63848 = (state_64004[(2)]);
var state_64004__$1 = (function (){var statearr_64093 = state_64004;
(statearr_64093[(25)] = inst_63848);

return statearr_64093;
})();
var statearr_64094_64307 = state_64004__$1;
(statearr_64094_64307[(2)] = null);

(statearr_64094_64307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (2))){
var inst_63793 = (state_64004[(8)]);
var inst_63802 = (state_64004[(2)]);
var state_64004__$1 = (function (){var statearr_64096 = state_64004;
(statearr_64096[(26)] = inst_63802);

return statearr_64096;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64004__$1,(3),inst_63793,(2));
} else {
if((state_val_64005 === (23))){
var inst_63904 = (state_64004[(2)]);
var state_64004__$1 = (function (){var statearr_64097 = state_64004;
(statearr_64097[(27)] = inst_63904);

return statearr_64097;
})();
var statearr_64098_64308 = state_64004__$1;
(statearr_64098_64308[(2)] = null);

(statearr_64098_64308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (35))){
var _ = (function (){var statearr_64099 = state_64004;
(statearr_64099[(4)] = cljs.core.rest((state_64004[(4)])));

return statearr_64099;
})();
var state_64004__$1 = state_64004;
var ex64095 = (state_64004__$1[(2)]);
var statearr_64100_64309 = state_64004__$1;
(statearr_64100_64309[(5)] = ex64095);


var statearr_64101_64310 = state_64004__$1;
(statearr_64101_64310[(1)] = (34));

(statearr_64101_64310[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (19))){
var inst_63870 = (state_64004[(20)]);
var inst_63891 = (state_64004[(2)]);
var _ = (function (){var statearr_64102 = state_64004;
(statearr_64102[(4)] = cljs.core.rest((state_64004[(4)])));

return statearr_64102;
})();
var state_64004__$1 = (function (){var statearr_64103 = state_64004;
(statearr_64103[(28)] = inst_63891);

return statearr_64103;
})();
var statearr_64104_64311 = state_64004__$1;
(statearr_64104_64311[(2)] = inst_63870);

(statearr_64104_64311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (11))){
var inst_63821 = (state_64004[(29)]);
var inst_63842 = (state_64004[(2)]);
var _ = (function (){var statearr_64105 = state_64004;
(statearr_64105[(4)] = cljs.core.rest((state_64004[(4)])));

return statearr_64105;
})();
var state_64004__$1 = (function (){var statearr_64106 = state_64004;
(statearr_64106[(30)] = inst_63842);

return statearr_64106;
})();
var statearr_64107_64312 = state_64004__$1;
(statearr_64107_64312[(2)] = inst_63821);

(statearr_64107_64312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (9))){
var inst_63820 = (state_64004[(31)]);
var inst_63823 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63824 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63825 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63826 = cljs.core.cons(inst_63825,inst_63820);
var inst_63827 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,47,inst_63824,47,inst_63826,"Should not flush before timeout"];
var inst_63828 = cljs.core.PersistentHashMap.fromArrays(inst_63823,inst_63827);
var inst_63829 = cljs.test.report.call(null,inst_63828);
var state_64004__$1 = state_64004;
var statearr_64108_64313 = state_64004__$1;
(statearr_64108_64313[(2)] = inst_63829);

(statearr_64108_64313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (5))){
var inst_63795 = (state_64004[(9)]);
var inst_63820 = (state_64004[(31)]);
var inst_63821 = (state_64004[(29)]);
var _ = (function (){var statearr_64109 = state_64004;
(statearr_64109[(4)] = cljs.core.cons((8),(state_64004[(4)])));

return statearr_64109;
})();
var inst_63819 = cljs.core.deref(inst_63795);
var inst_63820__$1 = (new cljs.core.List(null,inst_63819,null,(1),null));
var inst_63821__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_63820__$1);
var state_64004__$1 = (function (){var statearr_64110 = state_64004;
(statearr_64110[(31)] = inst_63820__$1);

(statearr_64110[(29)] = inst_63821__$1);

return statearr_64110;
})();
if(cljs.core.truth_(inst_63821__$1)){
var statearr_64111_64314 = state_64004__$1;
(statearr_64111_64314[(1)] = (9));

} else {
var statearr_64112_64315 = state_64004__$1;
(statearr_64112_64315[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (14))){
var inst_63793 = (state_64004[(8)]);
var inst_63894 = (state_64004[(2)]);
var state_64004__$1 = (function (){var statearr_64114 = state_64004;
(statearr_64114[(32)] = inst_63894);

return statearr_64114;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64004__$1,(20),inst_63793,(3));
} else {
if((state_val_64005 === (26))){
var inst_63905 = (state_64004[(2)]);
var inst_63906 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63907 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63908 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,57,inst_63907,57,inst_63905,"Should not flush 3,4 yet"];
var inst_63909 = cljs.core.PersistentHashMap.fromArrays(inst_63906,inst_63908);
var inst_63910 = cljs.test.report.call(null,inst_63909);
var state_64004__$1 = state_64004;
var statearr_64115_64316 = state_64004__$1;
(statearr_64115_64316[(2)] = inst_63910);

(statearr_64115_64316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (16))){
var _ = (function (){var statearr_64116 = state_64004;
(statearr_64116[(4)] = cljs.core.rest((state_64004[(4)])));

return statearr_64116;
})();
var state_64004__$1 = state_64004;
var ex64113 = (state_64004__$1[(2)]);
var statearr_64117_64317 = state_64004__$1;
(statearr_64117_64317[(5)] = ex64113);


var statearr_64118_64318 = state_64004__$1;
(statearr_64118_64318[(1)] = (15));

(statearr_64118_64318[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (38))){
var inst_63977 = (state_64004[(17)]);
var inst_63998 = (state_64004[(2)]);
var _ = (function (){var statearr_64119 = state_64004;
(statearr_64119[(4)] = cljs.core.rest((state_64004[(4)])));

return statearr_64119;
})();
var state_64004__$1 = (function (){var statearr_64120 = state_64004;
(statearr_64120[(33)] = inst_63998);

return statearr_64120;
})();
var statearr_64121_64319 = state_64004__$1;
(statearr_64121_64319[(2)] = inst_63977);

(statearr_64121_64319[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (30))){
var inst_63925 = (state_64004[(12)]);
var inst_63946 = (state_64004[(2)]);
var _ = (function (){var statearr_64122 = state_64004;
(statearr_64122[(4)] = cljs.core.rest((state_64004[(4)])));

return statearr_64122;
})();
var state_64004__$1 = (function (){var statearr_64123 = state_64004;
(statearr_64123[(34)] = inst_63946);

return statearr_64123;
})();
var statearr_64124_64320 = state_64004__$1;
(statearr_64124_64320[(2)] = inst_63925);

(statearr_64124_64320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (10))){
var inst_63820 = (state_64004[(31)]);
var inst_63831 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63832 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63833 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63834 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63835 = cljs.core.cons(inst_63834,inst_63820);
var inst_63836 = (new cljs.core.List(null,inst_63835,null,(1),null));
var inst_63837 = (new cljs.core.List(null,inst_63833,inst_63836,(2),null));
var inst_63838 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,47,inst_63832,47,inst_63837,"Should not flush before timeout"];
var inst_63839 = cljs.core.PersistentHashMap.fromArrays(inst_63831,inst_63838);
var inst_63840 = cljs.test.report.call(null,inst_63839);
var state_64004__$1 = state_64004;
var statearr_64125_64321 = state_64004__$1;
(statearr_64125_64321[(2)] = inst_63840);

(statearr_64125_64321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (18))){
var inst_63869 = (state_64004[(19)]);
var inst_63880 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63881 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63882 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63883 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63884 = cljs.core.cons(inst_63883,inst_63869);
var inst_63885 = (new cljs.core.List(null,inst_63884,null,(1),null));
var inst_63886 = (new cljs.core.List(null,inst_63882,inst_63885,(2),null));
var inst_63887 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,50,inst_63881,50,inst_63886,"Should flush after timeout"];
var inst_63888 = cljs.core.PersistentHashMap.fromArrays(inst_63880,inst_63887);
var inst_63889 = cljs.test.report.call(null,inst_63888);
var state_64004__$1 = state_64004;
var statearr_64127_64322 = state_64004__$1;
(statearr_64127_64322[(2)] = inst_63889);

(statearr_64127_64322[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (37))){
var inst_63976 = (state_64004[(16)]);
var inst_63987 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63988 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63989 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63990 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63991 = cljs.core.cons(inst_63990,inst_63976);
var inst_63992 = (new cljs.core.List(null,inst_63991,null,(1),null));
var inst_63993 = (new cljs.core.List(null,inst_63989,inst_63992,(2),null));
var inst_63994 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),18,60,inst_63988,60,inst_63993,"Should flush 3,4 after timeout from first message"];
var inst_63995 = cljs.core.PersistentHashMap.fromArrays(inst_63987,inst_63994);
var inst_63996 = cljs.test.report.call(null,inst_63995);
var state_64004__$1 = state_64004;
var statearr_64128_64323 = state_64004__$1;
(statearr_64128_64323[(2)] = inst_63996);

(statearr_64128_64323[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (8))){
var _ = (function (){var statearr_64129 = state_64004;
(statearr_64129[(4)] = cljs.core.rest((state_64004[(4)])));

return statearr_64129;
})();
var state_64004__$1 = state_64004;
var ex64126 = (state_64004__$1[(2)]);
var statearr_64130_64324 = state_64004__$1;
(statearr_64130_64324[(5)] = ex64126);


var statearr_64131_64325 = state_64004__$1;
(statearr_64131_64325[(1)] = (7));

(statearr_64131_64325[(5)] = null);



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
var statearr_64132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64132[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__);

(statearr_64132[(1)] = (1));

return statearr_64132;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1 = (function (state_64004){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_64004);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e64133){var ex__32403__auto__ = e64133;
var statearr_64134_64326 = state_64004;
(statearr_64134_64326[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_64004[(4)]))){
var statearr_64135_64327 = state_64004;
(statearr_64135_64327[(1)] = cljs.core.first((state_64004[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64328 = state_64004;
state_64004 = G__64328;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__ = function(state_64004){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1.call(this,state_64004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_64136 = f__32475__auto__();
(statearr_64136[(6)] = c__32474__auto__);

return statearr_64136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63783","meta63783",-269630002,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63782");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63782");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63782.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63782 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63782(meta63783){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782(meta63783));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63782(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142 = (function (meta64143){
this.meta64143 = meta64143;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64144,meta64143__$1){
var self__ = this;
var _64144__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142(meta64143__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64144){
var self__ = this;
var _64144__$1 = this;
return self__.meta64143;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__64147 = (arguments.length - (1));
switch (G__64147) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142.prototype.apply = (function (self__,args64145){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args64145)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_64213){
var state_val_64214 = (state_64213[(1)]);
if((state_val_64214 === (7))){
var inst_64164 = (state_64213[(2)]);
var inst_64165 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64166 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64167 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),18,78,inst_64166,78,inst_64164,"Closing input should flush remaining"];
var inst_64168 = cljs.core.PersistentHashMap.fromArrays(inst_64165,inst_64167);
var inst_64169 = cljs.test.report.call(null,inst_64168);
var state_64213__$1 = state_64213;
var statearr_64215_64330 = state_64213__$1;
(statearr_64215_64330[(2)] = inst_64169);

(statearr_64215_64330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (1))){
var inst_64148 = (state_64213[(7)]);
var inst_64150 = (state_64213[(8)]);
var inst_64148__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_64149 = cljs.core.PersistentVector.EMPTY;
var inst_64150__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_64149);
var inst_64151 = (function (){var input_ch = inst_64148__$1;
var results = inst_64150__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_64152 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_64153 = [inst_64148__$1,inst_64151];
var inst_64154 = cljs.core.PersistentHashMap.fromArrays(inst_64152,inst_64153);
var inst_64155 = bb_web_ds_tools.components.async_buffer.create(inst_64154);
var state_64213__$1 = (function (){var statearr_64216 = state_64213;
(statearr_64216[(7)] = inst_64148__$1);

(statearr_64216[(8)] = inst_64150__$1);

(statearr_64216[(9)] = inst_64155);

return statearr_64216;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64213__$1,(2),inst_64148__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_64214 === (4))){
var inst_64163 = (state_64213[(2)]);
var state_64213__$1 = (function (){var statearr_64218 = state_64213;
(statearr_64218[(10)] = inst_64163);

return statearr_64218;
})();
var statearr_64219_64343 = state_64213__$1;
(statearr_64219_64343[(2)] = null);

(statearr_64219_64343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (6))){
var inst_64209 = (state_64213[(2)]);
var inst_64210 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64213__$1 = (function (){var statearr_64221 = state_64213;
(statearr_64221[(11)] = inst_64209);

return statearr_64221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64213__$1,inst_64210);
} else {
if((state_val_64214 === (3))){
var inst_64148 = (state_64213[(7)]);
var inst_64159 = (state_64213[(2)]);
var inst_64160 = cljs.core.async.close_BANG_(inst_64148);
var inst_64161 = cljs.core.async.timeout((20));
var state_64213__$1 = (function (){var statearr_64222 = state_64213;
(statearr_64222[(12)] = inst_64159);

(statearr_64222[(13)] = inst_64160);

return statearr_64222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64213__$1,(4),inst_64161);
} else {
if((state_val_64214 === (2))){
var inst_64148 = (state_64213[(7)]);
var inst_64157 = (state_64213[(2)]);
var state_64213__$1 = (function (){var statearr_64223 = state_64213;
(statearr_64223[(14)] = inst_64157);

return statearr_64223;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64213__$1,(3),inst_64148,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_64214 === (11))){
var inst_64184 = (state_64213[(15)]);
var inst_64206 = (state_64213[(2)]);
var _ = (function (){var statearr_64226 = state_64213;
(statearr_64226[(4)] = cljs.core.rest((state_64213[(4)])));

return statearr_64226;
})();
var state_64213__$1 = (function (){var statearr_64227 = state_64213;
(statearr_64227[(16)] = inst_64206);

return statearr_64227;
})();
var statearr_64228_64346 = state_64213__$1;
(statearr_64228_64346[(2)] = inst_64184);

(statearr_64228_64346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (9))){
var inst_64183 = (state_64213[(17)]);
var inst_64186 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64187 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64188 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64189 = cljs.core.cons(inst_64188,inst_64183);
var inst_64190 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),18,78,inst_64187,78,inst_64189,"Closing input should flush remaining"];
var inst_64191 = cljs.core.PersistentHashMap.fromArrays(inst_64186,inst_64190);
var inst_64192 = cljs.test.report.call(null,inst_64191);
var state_64213__$1 = state_64213;
var statearr_64231_64348 = state_64213__$1;
(statearr_64231_64348[(2)] = inst_64192);

(statearr_64231_64348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (5))){
var inst_64150 = (state_64213[(8)]);
var inst_64183 = (state_64213[(17)]);
var inst_64184 = (state_64213[(15)]);
var _ = (function (){var statearr_64233 = state_64213;
(statearr_64233[(4)] = cljs.core.cons((8),(state_64213[(4)])));

return statearr_64233;
})();
var inst_64175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64176 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64177 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_64178 = (new cljs.core.PersistentVector(null,2,(5),inst_64176,inst_64177,null));
var inst_64179 = [inst_64178];
var inst_64180 = (new cljs.core.PersistentVector(null,1,(5),inst_64175,inst_64179,null));
var inst_64181 = cljs.core.deref(inst_64150);
var inst_64182 = (new cljs.core.List(null,inst_64181,null,(1),null));
var inst_64183__$1 = (new cljs.core.List(null,inst_64180,inst_64182,(2),null));
var inst_64184__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64183__$1);
var state_64213__$1 = (function (){var statearr_64234 = state_64213;
(statearr_64234[(17)] = inst_64183__$1);

(statearr_64234[(15)] = inst_64184__$1);

return statearr_64234;
})();
if(cljs.core.truth_(inst_64184__$1)){
var statearr_64235_64352 = state_64213__$1;
(statearr_64235_64352[(1)] = (9));

} else {
var statearr_64236_64353 = state_64213__$1;
(statearr_64236_64353[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (10))){
var inst_64183 = (state_64213[(17)]);
var inst_64194 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64195 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64196 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64198 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64199 = cljs.core.cons(inst_64198,inst_64183);
var inst_64200 = (new cljs.core.List(null,inst_64199,null,(1),null));
var inst_64201 = (new cljs.core.List(null,inst_64196,inst_64200,(2),null));
var inst_64202 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),18,78,inst_64195,78,inst_64201,"Closing input should flush remaining"];
var inst_64203 = cljs.core.PersistentHashMap.fromArrays(inst_64194,inst_64202);
var inst_64204 = cljs.test.report.call(null,inst_64203);
var state_64213__$1 = state_64213;
var statearr_64237_64356 = state_64213__$1;
(statearr_64237_64356[(2)] = inst_64204);

(statearr_64237_64356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64214 === (8))){
var _ = (function (){var statearr_64238 = state_64213;
(statearr_64238[(4)] = cljs.core.rest((state_64213[(4)])));

return statearr_64238;
})();
var state_64213__$1 = state_64213;
var ex64232 = (state_64213__$1[(2)]);
var statearr_64239_64359 = state_64213__$1;
(statearr_64239_64359[(5)] = ex64232);


var statearr_64240_64360 = state_64213__$1;
(statearr_64240_64360[(1)] = (7));

(statearr_64240_64360[(5)] = null);



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
var statearr_64241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64241[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__);

(statearr_64241[(1)] = (1));

return statearr_64241;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1 = (function (state_64213){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_64213);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e64242){var ex__32403__auto__ = e64242;
var statearr_64243_64364 = state_64213;
(statearr_64243_64364[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_64213[(4)]))){
var statearr_64244_64365 = state_64213;
(statearr_64244_64365[(1)] = cljs.core.first((state_64213[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64366 = state_64213;
state_64213 = G__64366;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__ = function(state_64213){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1.call(this,state_64213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_64246 = f__32475__auto__();
(statearr_64246[(6)] = c__32474__auto__);

return statearr_64246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64143","meta64143",-569709049,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64142");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64142");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64142.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test64142 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test64142(meta64143){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142(meta64143));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64142(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
