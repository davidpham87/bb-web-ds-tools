goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421 = (function (meta63422){
this.meta63422 = meta63422;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63423,meta63422__$1){
var self__ = this;
var _63423__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421(meta63422__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63423){
var self__ = this;
var _63423__$1 = this;
return self__.meta63422;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63425 = (arguments.length - (1));
switch (G__63425) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421.prototype.apply = (function (self__,args63424){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63424)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_63605){
var state_val_63606 = (state_63605[(1)]);
if((state_val_63606 === (7))){
var inst_63453 = (state_63605[(2)]);
var inst_63454 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63455 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63456 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,19,inst_63455,19,inst_63453,"Buffer should not flush automatically without timer"];
var inst_63457 = cljs.core.PersistentHashMap.fromArrays(inst_63454,inst_63456);
var inst_63458 = cljs.test.report.call(null,inst_63457);
var state_63605__$1 = state_63605;
var statearr_63607_64167 = state_63605__$1;
(statearr_63607_64167[(2)] = inst_63458);

(statearr_63607_64167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (20))){
var inst_63436 = (state_63605[(7)]);
var inst_63545 = (state_63605[(2)]);
var inst_63546 = (inst_63436.cljs$core$IFn$_invoke$arity$0 ? inst_63436.cljs$core$IFn$_invoke$arity$0() : inst_63436.call(null));
var inst_63547 = cljs.core.async.timeout((20));
var state_63605__$1 = (function (){var statearr_63608 = state_63605;
(statearr_63608[(8)] = inst_63545);

(statearr_63608[(9)] = inst_63546);

return statearr_63608;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63605__$1,(21),inst_63547);
} else {
if((state_val_63606 === (27))){
var inst_63576 = (state_63605[(10)]);
var inst_63587 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63588 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63589 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63590 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63591 = cljs.core.cons(inst_63590,inst_63576);
var inst_63592 = (new cljs.core.List(null,inst_63591,null,(1),null));
var inst_63593 = (new cljs.core.List(null,inst_63589,inst_63592,(2),null));
var inst_63594 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,inst_63588,29,inst_63593,"Subsequent flush should work"];
var inst_63595 = cljs.core.PersistentHashMap.fromArrays(inst_63587,inst_63594);
var inst_63596 = cljs.test.report.call(null,inst_63595);
var state_63605__$1 = state_63605;
var statearr_63609_64168 = state_63605__$1;
(statearr_63609_64168[(2)] = inst_63596);

(statearr_63609_64168[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (1))){
var inst_63427 = (state_63605[(11)]);
var inst_63430 = (state_63605[(12)]);
var inst_63427__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63429 = cljs.core.PersistentVector.EMPTY;
var inst_63430__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63429);
var inst_63431 = (function (){var input_ch = inst_63427__$1;
var results = inst_63430__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63433 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63434 = [inst_63427__$1,inst_63431];
var inst_63435 = cljs.core.PersistentHashMap.fromArrays(inst_63433,inst_63434);
var inst_63436 = bb_web_ds_tools.components.async_buffer.create(inst_63435);
var state_63605__$1 = (function (){var statearr_63610 = state_63605;
(statearr_63610[(11)] = inst_63427__$1);

(statearr_63610[(12)] = inst_63430__$1);

(statearr_63610[(7)] = inst_63436);

return statearr_63610;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63605__$1,(2),inst_63427__$1,(1));
} else {
if((state_val_63606 === (24))){
var inst_63550 = (state_63605[(2)]);
var inst_63551 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63552 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63553 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"error","error",-978969032),18,29,inst_63552,29,inst_63550,"Subsequent flush should work"];
var inst_63554 = cljs.core.PersistentHashMap.fromArrays(inst_63551,inst_63553);
var inst_63555 = cljs.test.report.call(null,inst_63554);
var state_63605__$1 = state_63605;
var statearr_63611_64169 = state_63605__$1;
(statearr_63611_64169[(2)] = inst_63555);

(statearr_63611_64169[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (4))){
var inst_63446 = (state_63605[(2)]);
var state_63605__$1 = (function (){var statearr_63612 = state_63605;
(statearr_63612[(13)] = inst_63446);

return statearr_63612;
})();
var statearr_63613_64170 = state_63605__$1;
(statearr_63613_64170[(2)] = null);

(statearr_63613_64170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (15))){
var inst_63499 = (state_63605[(2)]);
var inst_63500 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63501 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63502 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,24,inst_63501,24,inst_63499,"Manual flush should flush all items"];
var inst_63503 = cljs.core.PersistentHashMap.fromArrays(inst_63500,inst_63502);
var inst_63504 = cljs.test.report.call(null,inst_63503);
var state_63605__$1 = state_63605;
var statearr_63614_64171 = state_63605__$1;
(statearr_63614_64171[(2)] = inst_63504);

(statearr_63614_64171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (21))){
var inst_63549 = (state_63605[(2)]);
var state_63605__$1 = (function (){var statearr_63615 = state_63605;
(statearr_63615[(14)] = inst_63549);

return statearr_63615;
})();
var statearr_63616_64172 = state_63605__$1;
(statearr_63616_64172[(2)] = null);

(statearr_63616_64172[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (13))){
var inst_63430 = (state_63605[(12)]);
var inst_63518 = (state_63605[(15)]);
var inst_63519 = (state_63605[(16)]);
var _ = (function (){var statearr_63617 = state_63605;
(statearr_63617[(4)] = cljs.core.cons((16),(state_63605[(4)])));

return statearr_63617;
})();
var inst_63510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63511 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63512 = [(1),(2)];
var inst_63513 = (new cljs.core.PersistentVector(null,2,(5),inst_63511,inst_63512,null));
var inst_63514 = [inst_63513];
var inst_63515 = (new cljs.core.PersistentVector(null,1,(5),inst_63510,inst_63514,null));
var inst_63516 = cljs.core.deref(inst_63430);
var inst_63517 = (new cljs.core.List(null,inst_63516,null,(1),null));
var inst_63518__$1 = (new cljs.core.List(null,inst_63515,inst_63517,(2),null));
var inst_63519__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63518__$1);
var state_63605__$1 = (function (){var statearr_63618 = state_63605;
(statearr_63618[(15)] = inst_63518__$1);

(statearr_63618[(16)] = inst_63519__$1);

return statearr_63618;
})();
if(cljs.core.truth_(inst_63519__$1)){
var statearr_63619_64173 = state_63605__$1;
(statearr_63619_64173[(1)] = (17));

} else {
var statearr_63620_64174 = state_63605__$1;
(statearr_63620_64174[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (22))){
var inst_63430 = (state_63605[(12)]);
var inst_63576 = (state_63605[(10)]);
var inst_63577 = (state_63605[(17)]);
var _ = (function (){var statearr_63621 = state_63605;
(statearr_63621[(4)] = cljs.core.cons((25),(state_63605[(4)])));

return statearr_63621;
})();
var inst_63562 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63566 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63567 = [(1),(2)];
var inst_63568 = (new cljs.core.PersistentVector(null,2,(5),inst_63566,inst_63567,null));
var inst_63569 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63570 = [(3)];
var inst_63571 = (new cljs.core.PersistentVector(null,1,(5),inst_63569,inst_63570,null));
var inst_63572 = [inst_63568,inst_63571];
var inst_63573 = (new cljs.core.PersistentVector(null,2,(5),inst_63562,inst_63572,null));
var inst_63574 = cljs.core.deref(inst_63430);
var inst_63575 = (new cljs.core.List(null,inst_63574,null,(1),null));
var inst_63576__$1 = (new cljs.core.List(null,inst_63573,inst_63575,(2),null));
var inst_63577__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63576__$1);
var state_63605__$1 = (function (){var statearr_63622 = state_63605;
(statearr_63622[(10)] = inst_63576__$1);

(statearr_63622[(17)] = inst_63577__$1);

return statearr_63622;
})();
if(cljs.core.truth_(inst_63577__$1)){
var statearr_63623_64175 = state_63605__$1;
(statearr_63623_64175[(1)] = (26));

} else {
var statearr_63624_64176 = state_63605__$1;
(statearr_63624_64176[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (6))){
var inst_63436 = (state_63605[(7)]);
var inst_63494 = (state_63605[(2)]);
var inst_63495 = (inst_63436.cljs$core$IFn$_invoke$arity$0 ? inst_63436.cljs$core$IFn$_invoke$arity$0() : inst_63436.call(null));
var inst_63496 = cljs.core.async.timeout((20));
var state_63605__$1 = (function (){var statearr_63626 = state_63605;
(statearr_63626[(18)] = inst_63494);

(statearr_63626[(19)] = inst_63495);

return statearr_63626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63605__$1,(12),inst_63496);
} else {
if((state_val_63606 === (28))){
var inst_63577 = (state_63605[(17)]);
var inst_63598 = (state_63605[(2)]);
var _ = (function (){var statearr_63637 = state_63605;
(statearr_63637[(4)] = cljs.core.rest((state_63605[(4)])));

return statearr_63637;
})();
var state_63605__$1 = (function (){var statearr_63638 = state_63605;
(statearr_63638[(20)] = inst_63598);

return statearr_63638;
})();
var statearr_63639_64177 = state_63605__$1;
(statearr_63639_64177[(2)] = inst_63577);

(statearr_63639_64177[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (25))){
var _ = (function (){var statearr_63640 = state_63605;
(statearr_63640[(4)] = cljs.core.rest((state_63605[(4)])));

return statearr_63640;
})();
var state_63605__$1 = state_63605;
var ex63625 = (state_63605__$1[(2)]);
var statearr_63642_64178 = state_63605__$1;
(statearr_63642_64178[(5)] = ex63625);


var statearr_63643_64179 = state_63605__$1;
(statearr_63643_64179[(1)] = (24));

(statearr_63643_64179[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (17))){
var inst_63518 = (state_63605[(15)]);
var inst_63521 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63522 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63523 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63524 = cljs.core.cons(inst_63523,inst_63518);
var inst_63525 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,24,inst_63522,24,inst_63524,"Manual flush should flush all items"];
var inst_63526 = cljs.core.PersistentHashMap.fromArrays(inst_63521,inst_63525);
var inst_63527 = cljs.test.report.call(null,inst_63526);
var state_63605__$1 = state_63605;
var statearr_63645_64180 = state_63605__$1;
(statearr_63645_64180[(2)] = inst_63527);

(statearr_63645_64180[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (3))){
var inst_63443 = (state_63605[(2)]);
var inst_63444 = cljs.core.async.timeout((20));
var state_63605__$1 = (function (){var statearr_63646 = state_63605;
(statearr_63646[(21)] = inst_63443);

return statearr_63646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63605__$1,(4),inst_63444);
} else {
if((state_val_63606 === (12))){
var inst_63498 = (state_63605[(2)]);
var state_63605__$1 = (function (){var statearr_63647 = state_63605;
(statearr_63647[(22)] = inst_63498);

return statearr_63647;
})();
var statearr_63648_64181 = state_63605__$1;
(statearr_63648_64181[(2)] = null);

(statearr_63648_64181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (2))){
var inst_63427 = (state_63605[(11)]);
var inst_63441 = (state_63605[(2)]);
var state_63605__$1 = (function (){var statearr_63649 = state_63605;
(statearr_63649[(23)] = inst_63441);

return statearr_63649;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63605__$1,(3),inst_63427,(2));
} else {
if((state_val_63606 === (23))){
var inst_63602 = (state_63605[(2)]);
var inst_63603 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_63605__$1 = (function (){var statearr_63659 = state_63605;
(statearr_63659[(24)] = inst_63602);

return statearr_63659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63605__$1,inst_63603);
} else {
if((state_val_63606 === (19))){
var inst_63519 = (state_63605[(16)]);
var inst_63540 = (state_63605[(2)]);
var _ = (function (){var statearr_63661 = state_63605;
(statearr_63661[(4)] = cljs.core.rest((state_63605[(4)])));

return statearr_63661;
})();
var state_63605__$1 = (function (){var statearr_63662 = state_63605;
(statearr_63662[(25)] = inst_63540);

return statearr_63662;
})();
var statearr_63663_64182 = state_63605__$1;
(statearr_63663_64182[(2)] = inst_63519);

(statearr_63663_64182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (11))){
var inst_63467 = (state_63605[(26)]);
var inst_63491 = (state_63605[(2)]);
var _ = (function (){var statearr_63664 = state_63605;
(statearr_63664[(4)] = cljs.core.rest((state_63605[(4)])));

return statearr_63664;
})();
var state_63605__$1 = (function (){var statearr_63665 = state_63605;
(statearr_63665[(27)] = inst_63491);

return statearr_63665;
})();
var statearr_63666_64183 = state_63605__$1;
(statearr_63666_64183[(2)] = inst_63467);

(statearr_63666_64183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (9))){
var inst_63465 = (state_63605[(28)]);
var inst_63472 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63473 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63474 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63475 = cljs.core.cons(inst_63474,inst_63465);
var inst_63476 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,19,inst_63473,19,inst_63475,"Buffer should not flush automatically without timer"];
var inst_63477 = cljs.core.PersistentHashMap.fromArrays(inst_63472,inst_63476);
var inst_63478 = cljs.test.report.call(null,inst_63477);
var state_63605__$1 = state_63605;
var statearr_63667_64184 = state_63605__$1;
(statearr_63667_64184[(2)] = inst_63478);

(statearr_63667_64184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (5))){
var inst_63430 = (state_63605[(12)]);
var inst_63465 = (state_63605[(28)]);
var inst_63467 = (state_63605[(26)]);
var _ = (function (){var statearr_63668 = state_63605;
(statearr_63668[(4)] = cljs.core.cons((8),(state_63605[(4)])));

return statearr_63668;
})();
var inst_63464 = cljs.core.deref(inst_63430);
var inst_63465__$1 = (new cljs.core.List(null,inst_63464,null,(1),null));
var inst_63467__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_63465__$1);
var state_63605__$1 = (function (){var statearr_63669 = state_63605;
(statearr_63669[(28)] = inst_63465__$1);

(statearr_63669[(26)] = inst_63467__$1);

return statearr_63669;
})();
if(cljs.core.truth_(inst_63467__$1)){
var statearr_63671_64185 = state_63605__$1;
(statearr_63671_64185[(1)] = (9));

} else {
var statearr_63672_64186 = state_63605__$1;
(statearr_63672_64186[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (14))){
var inst_63427 = (state_63605[(11)]);
var inst_63543 = (state_63605[(2)]);
var state_63605__$1 = (function (){var statearr_63674 = state_63605;
(statearr_63674[(29)] = inst_63543);

return statearr_63674;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63605__$1,(20),inst_63427,(3));
} else {
if((state_val_63606 === (26))){
var inst_63576 = (state_63605[(10)]);
var inst_63579 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63580 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63581 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63582 = cljs.core.cons(inst_63581,inst_63576);
var inst_63583 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,inst_63580,29,inst_63582,"Subsequent flush should work"];
var inst_63584 = cljs.core.PersistentHashMap.fromArrays(inst_63579,inst_63583);
var inst_63585 = cljs.test.report.call(null,inst_63584);
var state_63605__$1 = state_63605;
var statearr_63681_64187 = state_63605__$1;
(statearr_63681_64187[(2)] = inst_63585);

(statearr_63681_64187[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (16))){
var _ = (function (){var statearr_63682 = state_63605;
(statearr_63682[(4)] = cljs.core.rest((state_63605[(4)])));

return statearr_63682;
})();
var state_63605__$1 = state_63605;
var ex63673 = (state_63605__$1[(2)]);
var statearr_63683_64188 = state_63605__$1;
(statearr_63683_64188[(5)] = ex63673);


var statearr_63684_64189 = state_63605__$1;
(statearr_63684_64189[(1)] = (15));

(statearr_63684_64189[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (10))){
var inst_63465 = (state_63605[(28)]);
var inst_63480 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63481 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63482 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63483 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63484 = cljs.core.cons(inst_63483,inst_63465);
var inst_63485 = (new cljs.core.List(null,inst_63484,null,(1),null));
var inst_63486 = (new cljs.core.List(null,inst_63482,inst_63485,(2),null));
var inst_63487 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,19,inst_63481,19,inst_63486,"Buffer should not flush automatically without timer"];
var inst_63488 = cljs.core.PersistentHashMap.fromArrays(inst_63480,inst_63487);
var inst_63489 = cljs.test.report.call(null,inst_63488);
var state_63605__$1 = state_63605;
var statearr_63686_64190 = state_63605__$1;
(statearr_63686_64190[(2)] = inst_63489);

(statearr_63686_64190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (18))){
var inst_63518 = (state_63605[(15)]);
var inst_63529 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63530 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63531 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63532 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63533 = cljs.core.cons(inst_63532,inst_63518);
var inst_63534 = (new cljs.core.List(null,inst_63533,null,(1),null));
var inst_63535 = (new cljs.core.List(null,inst_63531,inst_63534,(2),null));
var inst_63536 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,24,inst_63530,24,inst_63535,"Manual flush should flush all items"];
var inst_63537 = cljs.core.PersistentHashMap.fromArrays(inst_63529,inst_63536);
var inst_63538 = cljs.test.report.call(null,inst_63537);
var state_63605__$1 = state_63605;
var statearr_63687_64191 = state_63605__$1;
(statearr_63687_64191[(2)] = inst_63538);

(statearr_63687_64191[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63606 === (8))){
var _ = (function (){var statearr_63688 = state_63605;
(statearr_63688[(4)] = cljs.core.rest((state_63605[(4)])));

return statearr_63688;
})();
var state_63605__$1 = state_63605;
var ex63685 = (state_63605__$1[(2)]);
var statearr_63689_64192 = state_63605__$1;
(statearr_63689_64192[(5)] = ex63685);


var statearr_63690_64193 = state_63605__$1;
(statearr_63690_64193[(1)] = (7));

(statearr_63690_64193[(5)] = null);



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
var statearr_63691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63691[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__);

(statearr_63691[(1)] = (1));

return statearr_63691;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1 = (function (state_63605){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_63605);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e63692){var ex__32399__auto__ = e63692;
var statearr_63693_64194 = state_63605;
(statearr_63693_64194[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_63605[(4)]))){
var statearr_63694_64195 = state_63605;
(statearr_63694_64195[(1)] = cljs.core.first((state_63605[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64196 = state_63605;
state_63605 = G__64196;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = function(state_63605){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1.call(this,state_63605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_63695 = f__32477__auto__();
(statearr_63695[(6)] = c__32476__auto__);

return statearr_63695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63422","meta63422",1098716606,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63421");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63421");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63421.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63421 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63421(meta63422){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421(meta63422));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63421(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696 = (function (meta63697){
this.meta63697 = meta63697;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63698,meta63697__$1){
var self__ = this;
var _63698__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696(meta63697__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63698){
var self__ = this;
var _63698__$1 = this;
return self__.meta63697;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__63701 = (arguments.length - (1));
switch (G__63701) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696.prototype.apply = (function (self__,args63699){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args63699)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_63921){
var state_val_63922 = (state_63921[(1)]);
if((state_val_63922 === (7))){
var inst_63720 = (state_63921[(2)]);
var inst_63721 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63722 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63723 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,47,inst_63722,47,inst_63720,"Should not flush before timeout"];
var inst_63724 = cljs.core.PersistentHashMap.fromArrays(inst_63721,inst_63723);
var inst_63725 = cljs.test.report.call(null,inst_63724);
var state_63921__$1 = state_63921;
var statearr_63924_64198 = state_63921__$1;
(statearr_63924_64198[(2)] = inst_63725);

(statearr_63924_64198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (20))){
var inst_63813 = (state_63921[(2)]);
var inst_63814 = cljs.core.async.timeout((50));
var state_63921__$1 = (function (){var statearr_63926 = state_63921;
(statearr_63926[(7)] = inst_63813);

return statearr_63926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63921__$1,(21),inst_63814);
} else {
if((state_val_63922 === (27))){
var _ = (function (){var statearr_63927 = state_63921;
(statearr_63927[(4)] = cljs.core.rest((state_63921[(4)])));

return statearr_63927;
})();
var state_63921__$1 = state_63921;
var ex63923 = (state_63921__$1[(2)]);
var statearr_63928_64199 = state_63921__$1;
(statearr_63928_64199[(5)] = ex63923);


var statearr_63929_64200 = state_63921__$1;
(statearr_63929_64200[(1)] = (26));

(statearr_63929_64200[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (1))){
var inst_63703 = (state_63921[(8)]);
var inst_63705 = (state_63921[(9)]);
var inst_63703__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_63704 = cljs.core.PersistentVector.EMPTY;
var inst_63705__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_63704);
var inst_63706 = (function (){var input_ch = inst_63703__$1;
var results = inst_63705__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_63707 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_63709 = [inst_63703__$1,(100),inst_63706];
var inst_63710 = cljs.core.PersistentHashMap.fromArrays(inst_63707,inst_63709);
var inst_63711 = bb_web_ds_tools.components.async_buffer.create(inst_63710);
var state_63921__$1 = (function (){var statearr_63930 = state_63921;
(statearr_63930[(8)] = inst_63703__$1);

(statearr_63930[(9)] = inst_63705__$1);

(statearr_63930[(10)] = inst_63711);

return statearr_63930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63921__$1,(2),inst_63703__$1,(1));
} else {
if((state_val_63922 === (24))){
var inst_63705 = (state_63921[(9)]);
var inst_63841 = (state_63921[(11)]);
var inst_63842 = (state_63921[(12)]);
var _ = (function (){var statearr_63931 = state_63921;
(statearr_63931[(4)] = cljs.core.cons((27),(state_63921[(4)])));

return statearr_63931;
})();
var inst_63833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63834 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63835 = [(1),(2)];
var inst_63836 = (new cljs.core.PersistentVector(null,2,(5),inst_63834,inst_63835,null));
var inst_63837 = [inst_63836];
var inst_63838 = (new cljs.core.PersistentVector(null,1,(5),inst_63833,inst_63837,null));
var inst_63839 = cljs.core.deref(inst_63705);
var inst_63840 = (new cljs.core.List(null,inst_63839,null,(1),null));
var inst_63841__$1 = (new cljs.core.List(null,inst_63838,inst_63840,(2),null));
var inst_63842__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63841__$1);
var state_63921__$1 = (function (){var statearr_63932 = state_63921;
(statearr_63932[(11)] = inst_63841__$1);

(statearr_63932[(12)] = inst_63842__$1);

return statearr_63932;
})();
if(cljs.core.truth_(inst_63842__$1)){
var statearr_63933_64201 = state_63921__$1;
(statearr_63933_64201[(1)] = (28));

} else {
var statearr_63934_64202 = state_63921__$1;
(statearr_63934_64202[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (4))){
var inst_63719 = (state_63921[(2)]);
var state_63921__$1 = (function (){var statearr_63935 = state_63921;
(statearr_63935[(13)] = inst_63719);

return statearr_63935;
})();
var statearr_63936_64203 = state_63921__$1;
(statearr_63936_64203[(2)] = null);

(statearr_63936_64203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (15))){
var inst_63763 = (state_63921[(2)]);
var inst_63764 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63765 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63766 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,50,inst_63765,50,inst_63763,"Should flush after timeout"];
var inst_63767 = cljs.core.PersistentHashMap.fromArrays(inst_63764,inst_63766);
var inst_63768 = cljs.test.report.call(null,inst_63767);
var state_63921__$1 = state_63921;
var statearr_63937_64204 = state_63921__$1;
(statearr_63937_64204[(2)] = inst_63768);

(statearr_63937_64204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (21))){
var inst_63703 = (state_63921[(8)]);
var inst_63816 = (state_63921[(2)]);
var state_63921__$1 = (function (){var statearr_63938 = state_63921;
(statearr_63938[(14)] = inst_63816);

return statearr_63938;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63921__$1,(22),inst_63703,(4));
} else {
if((state_val_63922 === (31))){
var inst_63869 = (state_63921[(2)]);
var state_63921__$1 = (function (){var statearr_63939 = state_63921;
(statearr_63939[(15)] = inst_63869);

return statearr_63939;
})();
var statearr_63940_64205 = state_63921__$1;
(statearr_63940_64205[(2)] = null);

(statearr_63940_64205[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (32))){
var inst_63705 = (state_63921[(9)]);
var inst_63893 = (state_63921[(16)]);
var inst_63894 = (state_63921[(17)]);
var _ = (function (){var statearr_63941 = state_63921;
(statearr_63941[(4)] = cljs.core.cons((35),(state_63921[(4)])));

return statearr_63941;
})();
var inst_63882 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63884 = [(1),(2)];
var inst_63885 = (new cljs.core.PersistentVector(null,2,(5),inst_63883,inst_63884,null));
var inst_63886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63887 = [(3),(4)];
var inst_63888 = (new cljs.core.PersistentVector(null,2,(5),inst_63886,inst_63887,null));
var inst_63889 = [inst_63885,inst_63888];
var inst_63890 = (new cljs.core.PersistentVector(null,2,(5),inst_63882,inst_63889,null));
var inst_63891 = cljs.core.deref(inst_63705);
var inst_63892 = (new cljs.core.List(null,inst_63891,null,(1),null));
var inst_63893__$1 = (new cljs.core.List(null,inst_63890,inst_63892,(2),null));
var inst_63894__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63893__$1);
var state_63921__$1 = (function (){var statearr_63945 = state_63921;
(statearr_63945[(16)] = inst_63893__$1);

(statearr_63945[(17)] = inst_63894__$1);

return statearr_63945;
})();
if(cljs.core.truth_(inst_63894__$1)){
var statearr_63946_64206 = state_63921__$1;
(statearr_63946_64206[(1)] = (36));

} else {
var statearr_63949_64207 = state_63921__$1;
(statearr_63949_64207[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (33))){
var inst_63918 = (state_63921[(2)]);
var inst_63919 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_63921__$1 = (function (){var statearr_63950 = state_63921;
(statearr_63950[(18)] = inst_63918);

return statearr_63950;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63921__$1,inst_63919);
} else {
if((state_val_63922 === (13))){
var inst_63705 = (state_63921[(9)]);
var inst_63783 = (state_63921[(19)]);
var inst_63784 = (state_63921[(20)]);
var _ = (function (){var statearr_63952 = state_63921;
(statearr_63952[(4)] = cljs.core.cons((16),(state_63921[(4)])));

return statearr_63952;
})();
var inst_63774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63776 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63777 = [(1),(2)];
var inst_63778 = (new cljs.core.PersistentVector(null,2,(5),inst_63776,inst_63777,null));
var inst_63779 = [inst_63778];
var inst_63780 = (new cljs.core.PersistentVector(null,1,(5),inst_63774,inst_63779,null));
var inst_63781 = cljs.core.deref(inst_63705);
var inst_63782 = (new cljs.core.List(null,inst_63781,null,(1),null));
var inst_63783__$1 = (new cljs.core.List(null,inst_63780,inst_63782,(2),null));
var inst_63784__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_63783__$1);
var state_63921__$1 = (function (){var statearr_63963 = state_63921;
(statearr_63963[(19)] = inst_63783__$1);

(statearr_63963[(20)] = inst_63784__$1);

return statearr_63963;
})();
if(cljs.core.truth_(inst_63784__$1)){
var statearr_63964_64208 = state_63921__$1;
(statearr_63964_64208[(1)] = (17));

} else {
var statearr_63965_64209 = state_63921__$1;
(statearr_63965_64209[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (22))){
var inst_63818 = (state_63921[(2)]);
var inst_63819 = cljs.core.async.timeout((20));
var state_63921__$1 = (function (){var statearr_63966 = state_63921;
(statearr_63966[(21)] = inst_63818);

return statearr_63966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63921__$1,(23),inst_63819);
} else {
if((state_val_63922 === (36))){
var inst_63893 = (state_63921[(16)]);
var inst_63896 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63897 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63898 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63899 = cljs.core.cons(inst_63898,inst_63893);
var inst_63900 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),18,60,inst_63897,60,inst_63899,"Should flush 3,4 after timeout from first message"];
var inst_63901 = cljs.core.PersistentHashMap.fromArrays(inst_63896,inst_63900);
var inst_63902 = cljs.test.report.call(null,inst_63901);
var state_63921__$1 = state_63921;
var statearr_63967_64210 = state_63921__$1;
(statearr_63967_64210[(2)] = inst_63902);

(statearr_63967_64210[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (29))){
var inst_63841 = (state_63921[(11)]);
var inst_63852 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63853 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63854 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63855 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63856 = cljs.core.cons(inst_63855,inst_63841);
var inst_63857 = (new cljs.core.List(null,inst_63856,null,(1),null));
var inst_63858 = (new cljs.core.List(null,inst_63854,inst_63857,(2),null));
var inst_63859 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,57,inst_63853,57,inst_63858,"Should not flush 3,4 yet"];
var inst_63860 = cljs.core.PersistentHashMap.fromArrays(inst_63852,inst_63859);
var inst_63861 = cljs.test.report.call(null,inst_63860);
var state_63921__$1 = state_63921;
var statearr_63968_64211 = state_63921__$1;
(statearr_63968_64211[(2)] = inst_63861);

(statearr_63968_64211[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (6))){
var inst_63757 = (state_63921[(2)]);
var inst_63758 = cljs.core.async.timeout((100));
var state_63921__$1 = (function (){var statearr_63969 = state_63921;
(statearr_63969[(22)] = inst_63757);

return statearr_63969;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63921__$1,(12),inst_63758);
} else {
if((state_val_63922 === (28))){
var inst_63841 = (state_63921[(11)]);
var inst_63844 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63845 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63846 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63847 = cljs.core.cons(inst_63846,inst_63841);
var inst_63848 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,57,inst_63845,57,inst_63847,"Should not flush 3,4 yet"];
var inst_63849 = cljs.core.PersistentHashMap.fromArrays(inst_63844,inst_63848);
var inst_63850 = cljs.test.report.call(null,inst_63849);
var state_63921__$1 = state_63921;
var statearr_63970_64212 = state_63921__$1;
(statearr_63970_64212[(2)] = inst_63850);

(statearr_63970_64212[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (25))){
var inst_63866 = (state_63921[(2)]);
var inst_63867 = cljs.core.async.timeout((80));
var state_63921__$1 = (function (){var statearr_63972 = state_63921;
(statearr_63972[(23)] = inst_63866);

return statearr_63972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63921__$1,(31),inst_63867);
} else {
if((state_val_63922 === (34))){
var inst_63870 = (state_63921[(2)]);
var inst_63871 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63873 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63874 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),18,60,inst_63873,60,inst_63870,"Should flush 3,4 after timeout from first message"];
var inst_63875 = cljs.core.PersistentHashMap.fromArrays(inst_63871,inst_63874);
var inst_63876 = cljs.test.report.call(null,inst_63875);
var state_63921__$1 = state_63921;
var statearr_63977_64213 = state_63921__$1;
(statearr_63977_64213[(2)] = inst_63876);

(statearr_63977_64213[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (17))){
var inst_63783 = (state_63921[(19)]);
var inst_63788 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63789 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63790 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63791 = cljs.core.cons(inst_63790,inst_63783);
var inst_63792 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,50,inst_63789,50,inst_63791,"Should flush after timeout"];
var inst_63793 = cljs.core.PersistentHashMap.fromArrays(inst_63788,inst_63792);
var inst_63794 = cljs.test.report.call(null,inst_63793);
var state_63921__$1 = state_63921;
var statearr_63981_64214 = state_63921__$1;
(statearr_63981_64214[(2)] = inst_63794);

(statearr_63981_64214[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (3))){
var inst_63715 = (state_63921[(2)]);
var inst_63716 = cljs.core.async.timeout((50));
var state_63921__$1 = (function (){var statearr_63986 = state_63921;
(statearr_63986[(24)] = inst_63715);

return statearr_63986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63921__$1,(4),inst_63716);
} else {
if((state_val_63922 === (12))){
var inst_63760 = (state_63921[(2)]);
var state_63921__$1 = (function (){var statearr_63990 = state_63921;
(statearr_63990[(25)] = inst_63760);

return statearr_63990;
})();
var statearr_63991_64215 = state_63921__$1;
(statearr_63991_64215[(2)] = null);

(statearr_63991_64215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (2))){
var inst_63703 = (state_63921[(8)]);
var inst_63713 = (state_63921[(2)]);
var state_63921__$1 = (function (){var statearr_64000 = state_63921;
(statearr_64000[(26)] = inst_63713);

return statearr_64000;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63921__$1,(3),inst_63703,(2));
} else {
if((state_val_63922 === (23))){
var inst_63821 = (state_63921[(2)]);
var state_63921__$1 = (function (){var statearr_64008 = state_63921;
(statearr_64008[(27)] = inst_63821);

return statearr_64008;
})();
var statearr_64009_64216 = state_63921__$1;
(statearr_64009_64216[(2)] = null);

(statearr_64009_64216[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (35))){
var _ = (function (){var statearr_64010 = state_63921;
(statearr_64010[(4)] = cljs.core.rest((state_63921[(4)])));

return statearr_64010;
})();
var state_63921__$1 = state_63921;
var ex63993 = (state_63921__$1[(2)]);
var statearr_64011_64217 = state_63921__$1;
(statearr_64011_64217[(5)] = ex63993);


var statearr_64012_64218 = state_63921__$1;
(statearr_64012_64218[(1)] = (34));

(statearr_64012_64218[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (19))){
var inst_63784 = (state_63921[(20)]);
var inst_63808 = (state_63921[(2)]);
var _ = (function (){var statearr_64013 = state_63921;
(statearr_64013[(4)] = cljs.core.rest((state_63921[(4)])));

return statearr_64013;
})();
var state_63921__$1 = (function (){var statearr_64015 = state_63921;
(statearr_64015[(28)] = inst_63808);

return statearr_64015;
})();
var statearr_64016_64219 = state_63921__$1;
(statearr_64016_64219[(2)] = inst_63784);

(statearr_64016_64219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (11))){
var inst_63733 = (state_63921[(29)]);
var inst_63754 = (state_63921[(2)]);
var _ = (function (){var statearr_64017 = state_63921;
(statearr_64017[(4)] = cljs.core.rest((state_63921[(4)])));

return statearr_64017;
})();
var state_63921__$1 = (function (){var statearr_64018 = state_63921;
(statearr_64018[(30)] = inst_63754);

return statearr_64018;
})();
var statearr_64019_64220 = state_63921__$1;
(statearr_64019_64220[(2)] = inst_63733);

(statearr_64019_64220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (9))){
var inst_63732 = (state_63921[(31)]);
var inst_63735 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63736 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63737 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63738 = cljs.core.cons(inst_63737,inst_63732);
var inst_63739 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,47,inst_63736,47,inst_63738,"Should not flush before timeout"];
var inst_63740 = cljs.core.PersistentHashMap.fromArrays(inst_63735,inst_63739);
var inst_63741 = cljs.test.report.call(null,inst_63740);
var state_63921__$1 = state_63921;
var statearr_64022_64221 = state_63921__$1;
(statearr_64022_64221[(2)] = inst_63741);

(statearr_64022_64221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (5))){
var inst_63705 = (state_63921[(9)]);
var inst_63732 = (state_63921[(31)]);
var inst_63733 = (state_63921[(29)]);
var _ = (function (){var statearr_64030 = state_63921;
(statearr_64030[(4)] = cljs.core.cons((8),(state_63921[(4)])));

return statearr_64030;
})();
var inst_63731 = cljs.core.deref(inst_63705);
var inst_63732__$1 = (new cljs.core.List(null,inst_63731,null,(1),null));
var inst_63733__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_63732__$1);
var state_63921__$1 = (function (){var statearr_64032 = state_63921;
(statearr_64032[(31)] = inst_63732__$1);

(statearr_64032[(29)] = inst_63733__$1);

return statearr_64032;
})();
if(cljs.core.truth_(inst_63733__$1)){
var statearr_64033_64222 = state_63921__$1;
(statearr_64033_64222[(1)] = (9));

} else {
var statearr_64034_64223 = state_63921__$1;
(statearr_64034_64223[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (14))){
var inst_63703 = (state_63921[(8)]);
var inst_63811 = (state_63921[(2)]);
var state_63921__$1 = (function (){var statearr_64036 = state_63921;
(statearr_64036[(32)] = inst_63811);

return statearr_64036;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63921__$1,(20),inst_63703,(3));
} else {
if((state_val_63922 === (26))){
var inst_63822 = (state_63921[(2)]);
var inst_63823 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63824 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63825 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,57,inst_63824,57,inst_63822,"Should not flush 3,4 yet"];
var inst_63826 = cljs.core.PersistentHashMap.fromArrays(inst_63823,inst_63825);
var inst_63827 = cljs.test.report.call(null,inst_63826);
var state_63921__$1 = state_63921;
var statearr_64041_64224 = state_63921__$1;
(statearr_64041_64224[(2)] = inst_63827);

(statearr_64041_64224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (16))){
var _ = (function (){var statearr_64042 = state_63921;
(statearr_64042[(4)] = cljs.core.rest((state_63921[(4)])));

return statearr_64042;
})();
var state_63921__$1 = state_63921;
var ex64035 = (state_63921__$1[(2)]);
var statearr_64045_64225 = state_63921__$1;
(statearr_64045_64225[(5)] = ex64035);


var statearr_64046_64226 = state_63921__$1;
(statearr_64046_64226[(1)] = (15));

(statearr_64046_64226[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (38))){
var inst_63894 = (state_63921[(17)]);
var inst_63915 = (state_63921[(2)]);
var _ = (function (){var statearr_64047 = state_63921;
(statearr_64047[(4)] = cljs.core.rest((state_63921[(4)])));

return statearr_64047;
})();
var state_63921__$1 = (function (){var statearr_64048 = state_63921;
(statearr_64048[(33)] = inst_63915);

return statearr_64048;
})();
var statearr_64049_64227 = state_63921__$1;
(statearr_64049_64227[(2)] = inst_63894);

(statearr_64049_64227[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (30))){
var inst_63842 = (state_63921[(12)]);
var inst_63863 = (state_63921[(2)]);
var _ = (function (){var statearr_64050 = state_63921;
(statearr_64050[(4)] = cljs.core.rest((state_63921[(4)])));

return statearr_64050;
})();
var state_63921__$1 = (function (){var statearr_64051 = state_63921;
(statearr_64051[(34)] = inst_63863);

return statearr_64051;
})();
var statearr_64052_64228 = state_63921__$1;
(statearr_64052_64228[(2)] = inst_63842);

(statearr_64052_64228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (10))){
var inst_63732 = (state_63921[(31)]);
var inst_63743 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63744 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63745 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63746 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_63747 = cljs.core.cons(inst_63746,inst_63732);
var inst_63748 = (new cljs.core.List(null,inst_63747,null,(1),null));
var inst_63749 = (new cljs.core.List(null,inst_63745,inst_63748,(2),null));
var inst_63750 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,47,inst_63744,47,inst_63749,"Should not flush before timeout"];
var inst_63751 = cljs.core.PersistentHashMap.fromArrays(inst_63743,inst_63750);
var inst_63752 = cljs.test.report.call(null,inst_63751);
var state_63921__$1 = state_63921;
var statearr_64053_64229 = state_63921__$1;
(statearr_64053_64229[(2)] = inst_63752);

(statearr_64053_64229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (18))){
var inst_63783 = (state_63921[(19)]);
var inst_63796 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63797 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63799 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63800 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63801 = cljs.core.cons(inst_63800,inst_63783);
var inst_63802 = (new cljs.core.List(null,inst_63801,null,(1),null));
var inst_63803 = (new cljs.core.List(null,inst_63799,inst_63802,(2),null));
var inst_63804 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,50,inst_63797,50,inst_63803,"Should flush after timeout"];
var inst_63805 = cljs.core.PersistentHashMap.fromArrays(inst_63796,inst_63804);
var inst_63806 = cljs.test.report.call(null,inst_63805);
var state_63921__$1 = state_63921;
var statearr_64055_64230 = state_63921__$1;
(statearr_64055_64230[(2)] = inst_63806);

(statearr_64055_64230[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (37))){
var inst_63893 = (state_63921[(16)]);
var inst_63904 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_63905 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_63906 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_63907 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_63908 = cljs.core.cons(inst_63907,inst_63893);
var inst_63909 = (new cljs.core.List(null,inst_63908,null,(1),null));
var inst_63910 = (new cljs.core.List(null,inst_63906,inst_63909,(2),null));
var inst_63911 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),18,60,inst_63905,60,inst_63910,"Should flush 3,4 after timeout from first message"];
var inst_63912 = cljs.core.PersistentHashMap.fromArrays(inst_63904,inst_63911);
var inst_63913 = cljs.test.report.call(null,inst_63912);
var state_63921__$1 = state_63921;
var statearr_64056_64233 = state_63921__$1;
(statearr_64056_64233[(2)] = inst_63913);

(statearr_64056_64233[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63922 === (8))){
var _ = (function (){var statearr_64057 = state_63921;
(statearr_64057[(4)] = cljs.core.rest((state_63921[(4)])));

return statearr_64057;
})();
var state_63921__$1 = state_63921;
var ex64054 = (state_63921__$1[(2)]);
var statearr_64060_64236 = state_63921__$1;
(statearr_64060_64236[(5)] = ex64054);


var statearr_64061_64237 = state_63921__$1;
(statearr_64061_64237[(1)] = (7));

(statearr_64061_64237[(5)] = null);



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
var statearr_64066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64066[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__);

(statearr_64066[(1)] = (1));

return statearr_64066;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1 = (function (state_63921){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_63921);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e64067){var ex__32399__auto__ = e64067;
var statearr_64068_64239 = state_63921;
(statearr_64068_64239[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_63921[(4)]))){
var statearr_64069_64240 = state_63921;
(statearr_64069_64240[(1)] = cljs.core.first((state_63921[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64242 = state_63921;
state_63921 = G__64242;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = function(state_63921){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1.call(this,state_63921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_64070 = f__32477__auto__();
(statearr_64070[(6)] = c__32476__auto__);

return statearr_64070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63697","meta63697",1313174366,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63696");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63696");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test63696.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test63696 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test63696(meta63697){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696(meta63697));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test63696(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071 = (function (meta64072){
this.meta64072 = meta64072;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64073,meta64072__$1){
var self__ = this;
var _64073__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071(meta64072__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64073){
var self__ = this;
var _64073__$1 = this;
return self__.meta64072;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__64075 = (arguments.length - (1));
switch (G__64075) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071.prototype.apply = (function (self__,args64074){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args64074)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_64139){
var state_val_64140 = (state_64139[(1)]);
if((state_val_64140 === (7))){
var inst_64092 = (state_64139[(2)]);
var inst_64093 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64094 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64095 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),18,78,inst_64094,78,inst_64092,"Closing input should flush remaining"];
var inst_64096 = cljs.core.PersistentHashMap.fromArrays(inst_64093,inst_64095);
var inst_64097 = cljs.test.report.call(null,inst_64096);
var state_64139__$1 = state_64139;
var statearr_64141_64249 = state_64139__$1;
(statearr_64141_64249[(2)] = inst_64097);

(statearr_64141_64249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64140 === (1))){
var inst_64076 = (state_64139[(7)]);
var inst_64078 = (state_64139[(8)]);
var inst_64076__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_64077 = cljs.core.PersistentVector.EMPTY;
var inst_64078__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_64077);
var inst_64079 = (function (){var input_ch = inst_64076__$1;
var results = inst_64078__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_64080 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_64081 = [inst_64076__$1,inst_64079];
var inst_64082 = cljs.core.PersistentHashMap.fromArrays(inst_64080,inst_64081);
var inst_64083 = bb_web_ds_tools.components.async_buffer.create(inst_64082);
var state_64139__$1 = (function (){var statearr_64142 = state_64139;
(statearr_64142[(7)] = inst_64076__$1);

(statearr_64142[(8)] = inst_64078__$1);

(statearr_64142[(9)] = inst_64083);

return statearr_64142;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64139__$1,(2),inst_64076__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_64140 === (4))){
var inst_64091 = (state_64139[(2)]);
var state_64139__$1 = (function (){var statearr_64143 = state_64139;
(statearr_64143[(10)] = inst_64091);

return statearr_64143;
})();
var statearr_64144_64250 = state_64139__$1;
(statearr_64144_64250[(2)] = null);

(statearr_64144_64250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64140 === (6))){
var inst_64136 = (state_64139[(2)]);
var inst_64137 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64139__$1 = (function (){var statearr_64145 = state_64139;
(statearr_64145[(11)] = inst_64136);

return statearr_64145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64139__$1,inst_64137);
} else {
if((state_val_64140 === (3))){
var inst_64076 = (state_64139[(7)]);
var inst_64087 = (state_64139[(2)]);
var inst_64088 = cljs.core.async.close_BANG_(inst_64076);
var inst_64089 = cljs.core.async.timeout((20));
var state_64139__$1 = (function (){var statearr_64146 = state_64139;
(statearr_64146[(12)] = inst_64087);

(statearr_64146[(13)] = inst_64088);

return statearr_64146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64139__$1,(4),inst_64089);
} else {
if((state_val_64140 === (2))){
var inst_64076 = (state_64139[(7)]);
var inst_64085 = (state_64139[(2)]);
var state_64139__$1 = (function (){var statearr_64147 = state_64139;
(statearr_64147[(14)] = inst_64085);

return statearr_64147;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64139__$1,(3),inst_64076,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_64140 === (11))){
var inst_64112 = (state_64139[(15)]);
var inst_64133 = (state_64139[(2)]);
var _ = (function (){var statearr_64148 = state_64139;
(statearr_64148[(4)] = cljs.core.rest((state_64139[(4)])));

return statearr_64148;
})();
var state_64139__$1 = (function (){var statearr_64149 = state_64139;
(statearr_64149[(16)] = inst_64133);

return statearr_64149;
})();
var statearr_64150_64251 = state_64139__$1;
(statearr_64150_64251[(2)] = inst_64112);

(statearr_64150_64251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64140 === (9))){
var inst_64111 = (state_64139[(17)]);
var inst_64114 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64115 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64116 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64117 = cljs.core.cons(inst_64116,inst_64111);
var inst_64118 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),18,78,inst_64115,78,inst_64117,"Closing input should flush remaining"];
var inst_64119 = cljs.core.PersistentHashMap.fromArrays(inst_64114,inst_64118);
var inst_64120 = cljs.test.report.call(null,inst_64119);
var state_64139__$1 = state_64139;
var statearr_64151_64252 = state_64139__$1;
(statearr_64151_64252[(2)] = inst_64120);

(statearr_64151_64252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64140 === (5))){
var inst_64078 = (state_64139[(8)]);
var inst_64111 = (state_64139[(17)]);
var inst_64112 = (state_64139[(15)]);
var _ = (function (){var statearr_64153 = state_64139;
(statearr_64153[(4)] = cljs.core.cons((8),(state_64139[(4)])));

return statearr_64153;
})();
var inst_64103 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64104 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64105 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_64106 = (new cljs.core.PersistentVector(null,2,(5),inst_64104,inst_64105,null));
var inst_64107 = [inst_64106];
var inst_64108 = (new cljs.core.PersistentVector(null,1,(5),inst_64103,inst_64107,null));
var inst_64109 = cljs.core.deref(inst_64078);
var inst_64110 = (new cljs.core.List(null,inst_64109,null,(1),null));
var inst_64111__$1 = (new cljs.core.List(null,inst_64108,inst_64110,(2),null));
var inst_64112__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64111__$1);
var state_64139__$1 = (function (){var statearr_64154 = state_64139;
(statearr_64154[(17)] = inst_64111__$1);

(statearr_64154[(15)] = inst_64112__$1);

return statearr_64154;
})();
if(cljs.core.truth_(inst_64112__$1)){
var statearr_64155_64254 = state_64139__$1;
(statearr_64155_64254[(1)] = (9));

} else {
var statearr_64156_64255 = state_64139__$1;
(statearr_64156_64255[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64140 === (10))){
var inst_64111 = (state_64139[(17)]);
var inst_64122 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64123 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64124 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64125 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64126 = cljs.core.cons(inst_64125,inst_64111);
var inst_64127 = (new cljs.core.List(null,inst_64126,null,(1),null));
var inst_64128 = (new cljs.core.List(null,inst_64124,inst_64127,(2),null));
var inst_64129 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),18,78,inst_64123,78,inst_64128,"Closing input should flush remaining"];
var inst_64130 = cljs.core.PersistentHashMap.fromArrays(inst_64122,inst_64129);
var inst_64131 = cljs.test.report.call(null,inst_64130);
var state_64139__$1 = state_64139;
var statearr_64157_64257 = state_64139__$1;
(statearr_64157_64257[(2)] = inst_64131);

(statearr_64157_64257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64140 === (8))){
var _ = (function (){var statearr_64158 = state_64139;
(statearr_64158[(4)] = cljs.core.rest((state_64139[(4)])));

return statearr_64158;
})();
var state_64139__$1 = state_64139;
var ex64152 = (state_64139__$1[(2)]);
var statearr_64159_64258 = state_64139__$1;
(statearr_64159_64258[(5)] = ex64152);


var statearr_64160_64259 = state_64139__$1;
(statearr_64160_64259[(1)] = (7));

(statearr_64160_64259[(5)] = null);



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
var statearr_64161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64161[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__);

(statearr_64161[(1)] = (1));

return statearr_64161;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1 = (function (state_64139){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_64139);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e64162){var ex__32399__auto__ = e64162;
var statearr_64163_64261 = state_64139;
(statearr_64163_64261[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_64139[(4)]))){
var statearr_64164_64262 = state_64139;
(statearr_64164_64262[(1)] = cljs.core.first((state_64139[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64264 = state_64139;
state_64139 = G__64264;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__ = function(state_64139){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1.call(this,state_64139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_64165 = f__32477__auto__();
(statearr_64165[(6)] = c__32476__auto__);

return statearr_64165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64072","meta64072",599842831,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64071");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64071");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64071.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test64071 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test64071(meta64072){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071(meta64072));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64071(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
