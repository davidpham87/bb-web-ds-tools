goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308 = (function (meta56309){
this.meta56309 = meta56309;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56310,meta56309__$1){
var self__ = this;
var _56310__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308(meta56309__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56310){
var self__ = this;
var _56310__$1 = this;
return self__.meta56309;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56342 = (arguments.length - (1));
switch (G__56342) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308.prototype.apply = (function (self__,args56314){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56314)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56519){
var state_val_56521 = (state_56519[(1)]);
if((state_val_56521 === (7))){
var inst_56367 = (state_56519[(2)]);
var inst_56368 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56369 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56370 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56369,19,inst_56367,"Buffer should not flush automatically without timer"];
var inst_56371 = cljs.core.PersistentHashMap.fromArrays(inst_56368,inst_56370);
var inst_56372 = cljs.test.report.call(null,inst_56371);
var state_56519__$1 = state_56519;
var statearr_56523_57185 = state_56519__$1;
(statearr_56523_57185[(2)] = inst_56372);

(statearr_56523_57185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (20))){
var inst_56357 = (state_56519[(7)]);
var inst_56460 = (state_56519[(2)]);
var inst_56461 = (inst_56357.cljs$core$IFn$_invoke$arity$0 ? inst_56357.cljs$core$IFn$_invoke$arity$0() : inst_56357.call(null));
var inst_56462 = cljs.core.async.timeout((20));
var state_56519__$1 = (function (){var statearr_56525 = state_56519;
(statearr_56525[(8)] = inst_56460);

(statearr_56525[(9)] = inst_56461);

return statearr_56525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56519__$1,(21),inst_56462);
} else {
if((state_val_56521 === (27))){
var inst_56487 = (state_56519[(10)]);
var inst_56498 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56499 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56502 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56503 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56504 = cljs.core.cons(inst_56503,inst_56487);
var inst_56505 = (new cljs.core.List(null,inst_56504,null,(1),null));
var inst_56506 = (new cljs.core.List(null,inst_56502,inst_56505,(2),null));
var inst_56507 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56499,29,inst_56506,"Subsequent flush should work"];
var inst_56508 = cljs.core.PersistentHashMap.fromArrays(inst_56498,inst_56507);
var inst_56509 = cljs.test.report.call(null,inst_56508);
var state_56519__$1 = state_56519;
var statearr_56526_57193 = state_56519__$1;
(statearr_56526_57193[(2)] = inst_56509);

(statearr_56526_57193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (1))){
var inst_56350 = (state_56519[(11)]);
var inst_56352 = (state_56519[(12)]);
var inst_56350__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56351 = cljs.core.PersistentVector.EMPTY;
var inst_56352__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56351);
var inst_56353 = (function (){var input_ch = inst_56350__$1;
var results = inst_56352__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56354 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56355 = [inst_56350__$1,inst_56353];
var inst_56356 = cljs.core.PersistentHashMap.fromArrays(inst_56354,inst_56355);
var inst_56357 = bb_web_ds_tools.components.async_buffer.create(inst_56356);
var state_56519__$1 = (function (){var statearr_56533 = state_56519;
(statearr_56533[(11)] = inst_56350__$1);

(statearr_56533[(12)] = inst_56352__$1);

(statearr_56533[(7)] = inst_56357);

return statearr_56533;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56519__$1,(2),inst_56350__$1,(1));
} else {
if((state_val_56521 === (24))){
var inst_56465 = (state_56519[(2)]);
var inst_56466 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56467 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56468 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56467,29,inst_56465,"Subsequent flush should work"];
var inst_56469 = cljs.core.PersistentHashMap.fromArrays(inst_56466,inst_56468);
var inst_56470 = cljs.test.report.call(null,inst_56469);
var state_56519__$1 = state_56519;
var statearr_56534_57198 = state_56519__$1;
(statearr_56534_57198[(2)] = inst_56470);

(statearr_56534_57198[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (4))){
var inst_56365 = (state_56519[(2)]);
var state_56519__$1 = (function (){var statearr_56535 = state_56519;
(statearr_56535[(13)] = inst_56365);

return statearr_56535;
})();
var statearr_56536_57202 = state_56519__$1;
(statearr_56536_57202[(2)] = null);

(statearr_56536_57202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (15))){
var inst_56409 = (state_56519[(2)]);
var inst_56410 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56411 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56412 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56411,24,inst_56409,"Manual flush should flush all items"];
var inst_56413 = cljs.core.PersistentHashMap.fromArrays(inst_56410,inst_56412);
var inst_56414 = cljs.test.report.call(null,inst_56413);
var state_56519__$1 = state_56519;
var statearr_56537_57204 = state_56519__$1;
(statearr_56537_57204[(2)] = inst_56414);

(statearr_56537_57204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (21))){
var inst_56464 = (state_56519[(2)]);
var state_56519__$1 = (function (){var statearr_56538 = state_56519;
(statearr_56538[(14)] = inst_56464);

return statearr_56538;
})();
var statearr_56539_57205 = state_56519__$1;
(statearr_56539_57205[(2)] = null);

(statearr_56539_57205[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (13))){
var inst_56352 = (state_56519[(12)]);
var inst_56433 = (state_56519[(15)]);
var inst_56434 = (state_56519[(16)]);
var _ = (function (){var statearr_56540 = state_56519;
(statearr_56540[(4)] = cljs.core.cons((16),(state_56519[(4)])));

return statearr_56540;
})();
var inst_56425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56427 = [(1),(2)];
var inst_56428 = (new cljs.core.PersistentVector(null,2,(5),inst_56426,inst_56427,null));
var inst_56429 = [inst_56428];
var inst_56430 = (new cljs.core.PersistentVector(null,1,(5),inst_56425,inst_56429,null));
var inst_56431 = cljs.core.deref(inst_56352);
var inst_56432 = (new cljs.core.List(null,inst_56431,null,(1),null));
var inst_56433__$1 = (new cljs.core.List(null,inst_56430,inst_56432,(2),null));
var inst_56434__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56433__$1);
var state_56519__$1 = (function (){var statearr_56547 = state_56519;
(statearr_56547[(15)] = inst_56433__$1);

(statearr_56547[(16)] = inst_56434__$1);

return statearr_56547;
})();
if(cljs.core.truth_(inst_56434__$1)){
var statearr_56548_57206 = state_56519__$1;
(statearr_56548_57206[(1)] = (17));

} else {
var statearr_56549_57207 = state_56519__$1;
(statearr_56549_57207[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (22))){
var inst_56352 = (state_56519[(12)]);
var inst_56487 = (state_56519[(10)]);
var inst_56488 = (state_56519[(17)]);
var _ = (function (){var statearr_56551 = state_56519;
(statearr_56551[(4)] = cljs.core.cons((25),(state_56519[(4)])));

return statearr_56551;
})();
var inst_56476 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56477 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56478 = [(1),(2)];
var inst_56479 = (new cljs.core.PersistentVector(null,2,(5),inst_56477,inst_56478,null));
var inst_56480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56481 = [(3)];
var inst_56482 = (new cljs.core.PersistentVector(null,1,(5),inst_56480,inst_56481,null));
var inst_56483 = [inst_56479,inst_56482];
var inst_56484 = (new cljs.core.PersistentVector(null,2,(5),inst_56476,inst_56483,null));
var inst_56485 = cljs.core.deref(inst_56352);
var inst_56486 = (new cljs.core.List(null,inst_56485,null,(1),null));
var inst_56487__$1 = (new cljs.core.List(null,inst_56484,inst_56486,(2),null));
var inst_56488__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56487__$1);
var state_56519__$1 = (function (){var statearr_56554 = state_56519;
(statearr_56554[(10)] = inst_56487__$1);

(statearr_56554[(17)] = inst_56488__$1);

return statearr_56554;
})();
if(cljs.core.truth_(inst_56488__$1)){
var statearr_56555_57220 = state_56519__$1;
(statearr_56555_57220[(1)] = (26));

} else {
var statearr_56556_57221 = state_56519__$1;
(statearr_56556_57221[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (6))){
var inst_56357 = (state_56519[(7)]);
var inst_56404 = (state_56519[(2)]);
var inst_56405 = (inst_56357.cljs$core$IFn$_invoke$arity$0 ? inst_56357.cljs$core$IFn$_invoke$arity$0() : inst_56357.call(null));
var inst_56406 = cljs.core.async.timeout((20));
var state_56519__$1 = (function (){var statearr_56558 = state_56519;
(statearr_56558[(18)] = inst_56404);

(statearr_56558[(19)] = inst_56405);

return statearr_56558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56519__$1,(12),inst_56406);
} else {
if((state_val_56521 === (28))){
var inst_56488 = (state_56519[(17)]);
var inst_56511 = (state_56519[(2)]);
var _ = (function (){var statearr_56562 = state_56519;
(statearr_56562[(4)] = cljs.core.rest((state_56519[(4)])));

return statearr_56562;
})();
var state_56519__$1 = (function (){var statearr_56567 = state_56519;
(statearr_56567[(20)] = inst_56511);

return statearr_56567;
})();
var statearr_56572_57226 = state_56519__$1;
(statearr_56572_57226[(2)] = inst_56488);

(statearr_56572_57226[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (25))){
var _ = (function (){var statearr_56575 = state_56519;
(statearr_56575[(4)] = cljs.core.rest((state_56519[(4)])));

return statearr_56575;
})();
var state_56519__$1 = state_56519;
var ex56557 = (state_56519__$1[(2)]);
var statearr_56576_57227 = state_56519__$1;
(statearr_56576_57227[(5)] = ex56557);


var statearr_56578_57228 = state_56519__$1;
(statearr_56578_57228[(1)] = (24));

(statearr_56578_57228[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (17))){
var inst_56433 = (state_56519[(15)]);
var inst_56436 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56437 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56438 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56439 = cljs.core.cons(inst_56438,inst_56433);
var inst_56440 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56437,24,inst_56439,"Manual flush should flush all items"];
var inst_56441 = cljs.core.PersistentHashMap.fromArrays(inst_56436,inst_56440);
var inst_56442 = cljs.test.report.call(null,inst_56441);
var state_56519__$1 = state_56519;
var statearr_56583_57231 = state_56519__$1;
(statearr_56583_57231[(2)] = inst_56442);

(statearr_56583_57231[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (3))){
var inst_56361 = (state_56519[(2)]);
var inst_56362 = cljs.core.async.timeout((20));
var state_56519__$1 = (function (){var statearr_56589 = state_56519;
(statearr_56589[(21)] = inst_56361);

return statearr_56589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56519__$1,(4),inst_56362);
} else {
if((state_val_56521 === (12))){
var inst_56408 = (state_56519[(2)]);
var state_56519__$1 = (function (){var statearr_56591 = state_56519;
(statearr_56591[(22)] = inst_56408);

return statearr_56591;
})();
var statearr_56592_57232 = state_56519__$1;
(statearr_56592_57232[(2)] = null);

(statearr_56592_57232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (2))){
var inst_56350 = (state_56519[(11)]);
var inst_56359 = (state_56519[(2)]);
var state_56519__$1 = (function (){var statearr_56601 = state_56519;
(statearr_56601[(23)] = inst_56359);

return statearr_56601;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56519__$1,(3),inst_56350,(2));
} else {
if((state_val_56521 === (23))){
var inst_56514 = (state_56519[(2)]);
var inst_56516 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56519__$1 = (function (){var statearr_56604 = state_56519;
(statearr_56604[(24)] = inst_56514);

return statearr_56604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56519__$1,inst_56516);
} else {
if((state_val_56521 === (19))){
var inst_56434 = (state_56519[(16)]);
var inst_56455 = (state_56519[(2)]);
var _ = (function (){var statearr_56606 = state_56519;
(statearr_56606[(4)] = cljs.core.rest((state_56519[(4)])));

return statearr_56606;
})();
var state_56519__$1 = (function (){var statearr_56611 = state_56519;
(statearr_56611[(25)] = inst_56455);

return statearr_56611;
})();
var statearr_56612_57233 = state_56519__$1;
(statearr_56612_57233[(2)] = inst_56434);

(statearr_56612_57233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (11))){
var inst_56380 = (state_56519[(26)]);
var inst_56401 = (state_56519[(2)]);
var _ = (function (){var statearr_56617 = state_56519;
(statearr_56617[(4)] = cljs.core.rest((state_56519[(4)])));

return statearr_56617;
})();
var state_56519__$1 = (function (){var statearr_56618 = state_56519;
(statearr_56618[(27)] = inst_56401);

return statearr_56618;
})();
var statearr_56619_57239 = state_56519__$1;
(statearr_56619_57239[(2)] = inst_56380);

(statearr_56619_57239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (9))){
var inst_56379 = (state_56519[(28)]);
var inst_56382 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56383 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56384 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56385 = cljs.core.cons(inst_56384,inst_56379);
var inst_56386 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56383,19,inst_56385,"Buffer should not flush automatically without timer"];
var inst_56387 = cljs.core.PersistentHashMap.fromArrays(inst_56382,inst_56386);
var inst_56388 = cljs.test.report.call(null,inst_56387);
var state_56519__$1 = state_56519;
var statearr_56620_57241 = state_56519__$1;
(statearr_56620_57241[(2)] = inst_56388);

(statearr_56620_57241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (5))){
var inst_56352 = (state_56519[(12)]);
var inst_56379 = (state_56519[(28)]);
var inst_56380 = (state_56519[(26)]);
var _ = (function (){var statearr_56621 = state_56519;
(statearr_56621[(4)] = cljs.core.cons((8),(state_56519[(4)])));

return statearr_56621;
})();
var inst_56378 = cljs.core.deref(inst_56352);
var inst_56379__$1 = (new cljs.core.List(null,inst_56378,null,(1),null));
var inst_56380__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56379__$1);
var state_56519__$1 = (function (){var statearr_56622 = state_56519;
(statearr_56622[(28)] = inst_56379__$1);

(statearr_56622[(26)] = inst_56380__$1);

return statearr_56622;
})();
if(cljs.core.truth_(inst_56380__$1)){
var statearr_56623_57244 = state_56519__$1;
(statearr_56623_57244[(1)] = (9));

} else {
var statearr_56624_57245 = state_56519__$1;
(statearr_56624_57245[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (14))){
var inst_56350 = (state_56519[(11)]);
var inst_56458 = (state_56519[(2)]);
var state_56519__$1 = (function (){var statearr_56639 = state_56519;
(statearr_56639[(29)] = inst_56458);

return statearr_56639;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56519__$1,(20),inst_56350,(3));
} else {
if((state_val_56521 === (26))){
var inst_56487 = (state_56519[(10)]);
var inst_56490 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56491 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56492 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56493 = cljs.core.cons(inst_56492,inst_56487);
var inst_56494 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56491,29,inst_56493,"Subsequent flush should work"];
var inst_56495 = cljs.core.PersistentHashMap.fromArrays(inst_56490,inst_56494);
var inst_56496 = cljs.test.report.call(null,inst_56495);
var state_56519__$1 = state_56519;
var statearr_56640_57251 = state_56519__$1;
(statearr_56640_57251[(2)] = inst_56496);

(statearr_56640_57251[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (16))){
var _ = (function (){var statearr_56641 = state_56519;
(statearr_56641[(4)] = cljs.core.rest((state_56519[(4)])));

return statearr_56641;
})();
var state_56519__$1 = state_56519;
var ex56625 = (state_56519__$1[(2)]);
var statearr_56642_57252 = state_56519__$1;
(statearr_56642_57252[(5)] = ex56625);


var statearr_56643_57253 = state_56519__$1;
(statearr_56643_57253[(1)] = (15));

(statearr_56643_57253[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (10))){
var inst_56379 = (state_56519[(28)]);
var inst_56390 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56391 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56392 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56393 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56394 = cljs.core.cons(inst_56393,inst_56379);
var inst_56395 = (new cljs.core.List(null,inst_56394,null,(1),null));
var inst_56396 = (new cljs.core.List(null,inst_56392,inst_56395,(2),null));
var inst_56397 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56391,19,inst_56396,"Buffer should not flush automatically without timer"];
var inst_56398 = cljs.core.PersistentHashMap.fromArrays(inst_56390,inst_56397);
var inst_56399 = cljs.test.report.call(null,inst_56398);
var state_56519__$1 = state_56519;
var statearr_56645_57255 = state_56519__$1;
(statearr_56645_57255[(2)] = inst_56399);

(statearr_56645_57255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (18))){
var inst_56433 = (state_56519[(15)]);
var inst_56444 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56445 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56446 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56447 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56448 = cljs.core.cons(inst_56447,inst_56433);
var inst_56449 = (new cljs.core.List(null,inst_56448,null,(1),null));
var inst_56450 = (new cljs.core.List(null,inst_56446,inst_56449,(2),null));
var inst_56451 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56445,24,inst_56450,"Manual flush should flush all items"];
var inst_56452 = cljs.core.PersistentHashMap.fromArrays(inst_56444,inst_56451);
var inst_56453 = cljs.test.report.call(null,inst_56452);
var state_56519__$1 = state_56519;
var statearr_56659_57256 = state_56519__$1;
(statearr_56659_57256[(2)] = inst_56453);

(statearr_56659_57256[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56521 === (8))){
var _ = (function (){var statearr_56660 = state_56519;
(statearr_56660[(4)] = cljs.core.rest((state_56519[(4)])));

return statearr_56660;
})();
var state_56519__$1 = state_56519;
var ex56644 = (state_56519__$1[(2)]);
var statearr_56661_57257 = state_56519__$1;
(statearr_56661_57257[(5)] = ex56644);


var statearr_56662_57258 = state_56519__$1;
(statearr_56662_57258[(1)] = (7));

(statearr_56662_57258[(5)] = null);



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
var statearr_56663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56663[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56663[(1)] = (1));

return statearr_56663;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56519){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56519);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56664){var ex__32294__auto__ = e56664;
var statearr_56665_57260 = state_56519;
(statearr_56665_57260[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56519[(4)]))){
var statearr_56666_57261 = state_56519;
(statearr_56666_57261[(1)] = cljs.core.first((state_56519[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57262 = state_56519;
state_56519 = G__57262;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56519){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56667 = f__32362__auto__();
(statearr_56667[(6)] = c__32361__auto__);

return statearr_56667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56309","meta56309",-680369278,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56308");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56308");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56308.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56308 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56308(meta56309){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308(meta56309));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56308(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676 = (function (meta56677){
this.meta56677 = meta56677;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56678,meta56677__$1){
var self__ = this;
var _56678__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676(meta56677__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56678){
var self__ = this;
var _56678__$1 = this;
return self__.meta56677;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56680 = (arguments.length - (1));
switch (G__56680) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676.prototype.apply = (function (self__,args56679){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56679)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56890){
var state_val_56891 = (state_56890[(1)]);
if((state_val_56891 === (7))){
var inst_56696 = (state_56890[(2)]);
var inst_56697 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56698 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56699 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56698,47,inst_56696,"Should not flush before timeout"];
var inst_56700 = cljs.core.PersistentHashMap.fromArrays(inst_56697,inst_56699);
var inst_56701 = cljs.test.report.call(null,inst_56700);
var state_56890__$1 = state_56890;
var statearr_56893_57264 = state_56890__$1;
(statearr_56893_57264[(2)] = inst_56701);

(statearr_56893_57264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (20))){
var inst_56783 = (state_56890[(2)]);
var inst_56784 = cljs.core.async.timeout((50));
var state_56890__$1 = (function (){var statearr_56894 = state_56890;
(statearr_56894[(7)] = inst_56783);

return statearr_56894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56890__$1,(21),inst_56784);
} else {
if((state_val_56891 === (27))){
var _ = (function (){var statearr_56895 = state_56890;
(statearr_56895[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56895;
})();
var state_56890__$1 = state_56890;
var ex56892 = (state_56890__$1[(2)]);
var statearr_56896_57265 = state_56890__$1;
(statearr_56896_57265[(5)] = ex56892);


var statearr_56897_57266 = state_56890__$1;
(statearr_56897_57266[(1)] = (26));

(statearr_56897_57266[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (1))){
var inst_56681 = (state_56890[(8)]);
var inst_56683 = (state_56890[(9)]);
var inst_56681__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56682 = cljs.core.PersistentVector.EMPTY;
var inst_56683__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56682);
var inst_56684 = (function (){var input_ch = inst_56681__$1;
var results = inst_56683__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56685 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56686 = [inst_56681__$1,(100),inst_56684];
var inst_56687 = cljs.core.PersistentHashMap.fromArrays(inst_56685,inst_56686);
var inst_56688 = bb_web_ds_tools.components.async_buffer.create(inst_56687);
var state_56890__$1 = (function (){var statearr_56898 = state_56890;
(statearr_56898[(8)] = inst_56681__$1);

(statearr_56898[(9)] = inst_56683__$1);

(statearr_56898[(10)] = inst_56688);

return statearr_56898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56890__$1,(2),inst_56681__$1,(1));
} else {
if((state_val_56891 === (24))){
var inst_56683 = (state_56890[(9)]);
var inst_56811 = (state_56890[(11)]);
var inst_56812 = (state_56890[(12)]);
var _ = (function (){var statearr_56899 = state_56890;
(statearr_56899[(4)] = cljs.core.cons((27),(state_56890[(4)])));

return statearr_56899;
})();
var inst_56803 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56804 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56805 = [(1),(2)];
var inst_56806 = (new cljs.core.PersistentVector(null,2,(5),inst_56804,inst_56805,null));
var inst_56807 = [inst_56806];
var inst_56808 = (new cljs.core.PersistentVector(null,1,(5),inst_56803,inst_56807,null));
var inst_56809 = cljs.core.deref(inst_56683);
var inst_56810 = (new cljs.core.List(null,inst_56809,null,(1),null));
var inst_56811__$1 = (new cljs.core.List(null,inst_56808,inst_56810,(2),null));
var inst_56812__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56811__$1);
var state_56890__$1 = (function (){var statearr_56900 = state_56890;
(statearr_56900[(11)] = inst_56811__$1);

(statearr_56900[(12)] = inst_56812__$1);

return statearr_56900;
})();
if(cljs.core.truth_(inst_56812__$1)){
var statearr_56902_57271 = state_56890__$1;
(statearr_56902_57271[(1)] = (28));

} else {
var statearr_56904_57272 = state_56890__$1;
(statearr_56904_57272[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (4))){
var inst_56695 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56907 = state_56890;
(statearr_56907[(13)] = inst_56695);

return statearr_56907;
})();
var statearr_56908_57273 = state_56890__$1;
(statearr_56908_57273[(2)] = null);

(statearr_56908_57273[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (15))){
var inst_56737 = (state_56890[(2)]);
var inst_56738 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56739 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56740 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56739,50,inst_56737,"Should flush after timeout"];
var inst_56741 = cljs.core.PersistentHashMap.fromArrays(inst_56738,inst_56740);
var inst_56742 = cljs.test.report.call(null,inst_56741);
var state_56890__$1 = state_56890;
var statearr_56911_57275 = state_56890__$1;
(statearr_56911_57275[(2)] = inst_56742);

(statearr_56911_57275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (21))){
var inst_56681 = (state_56890[(8)]);
var inst_56786 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56912 = state_56890;
(statearr_56912[(14)] = inst_56786);

return statearr_56912;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56890__$1,(22),inst_56681,(4));
} else {
if((state_val_56891 === (31))){
var inst_56839 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56913 = state_56890;
(statearr_56913[(15)] = inst_56839);

return statearr_56913;
})();
var statearr_56914_57276 = state_56890__$1;
(statearr_56914_57276[(2)] = null);

(statearr_56914_57276[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (32))){
var inst_56683 = (state_56890[(9)]);
var inst_56862 = (state_56890[(16)]);
var inst_56863 = (state_56890[(17)]);
var _ = (function (){var statearr_56915 = state_56890;
(statearr_56915[(4)] = cljs.core.cons((35),(state_56890[(4)])));

return statearr_56915;
})();
var inst_56851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56852 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56853 = [(1),(2)];
var inst_56854 = (new cljs.core.PersistentVector(null,2,(5),inst_56852,inst_56853,null));
var inst_56855 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56856 = [(3),(4)];
var inst_56857 = (new cljs.core.PersistentVector(null,2,(5),inst_56855,inst_56856,null));
var inst_56858 = [inst_56854,inst_56857];
var inst_56859 = (new cljs.core.PersistentVector(null,2,(5),inst_56851,inst_56858,null));
var inst_56860 = cljs.core.deref(inst_56683);
var inst_56861 = (new cljs.core.List(null,inst_56860,null,(1),null));
var inst_56862__$1 = (new cljs.core.List(null,inst_56859,inst_56861,(2),null));
var inst_56863__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56862__$1);
var state_56890__$1 = (function (){var statearr_56921 = state_56890;
(statearr_56921[(16)] = inst_56862__$1);

(statearr_56921[(17)] = inst_56863__$1);

return statearr_56921;
})();
if(cljs.core.truth_(inst_56863__$1)){
var statearr_56922_57278 = state_56890__$1;
(statearr_56922_57278[(1)] = (36));

} else {
var statearr_56923_57279 = state_56890__$1;
(statearr_56923_57279[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (33))){
var inst_56887 = (state_56890[(2)]);
var inst_56888 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56890__$1 = (function (){var statearr_56925 = state_56890;
(statearr_56925[(18)] = inst_56887);

return statearr_56925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56890__$1,inst_56888);
} else {
if((state_val_56891 === (13))){
var inst_56683 = (state_56890[(9)]);
var inst_56756 = (state_56890[(19)]);
var inst_56757 = (state_56890[(20)]);
var _ = (function (){var statearr_56927 = state_56890;
(statearr_56927[(4)] = cljs.core.cons((16),(state_56890[(4)])));

return statearr_56927;
})();
var inst_56748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56750 = [(1),(2)];
var inst_56751 = (new cljs.core.PersistentVector(null,2,(5),inst_56749,inst_56750,null));
var inst_56752 = [inst_56751];
var inst_56753 = (new cljs.core.PersistentVector(null,1,(5),inst_56748,inst_56752,null));
var inst_56754 = cljs.core.deref(inst_56683);
var inst_56755 = (new cljs.core.List(null,inst_56754,null,(1),null));
var inst_56756__$1 = (new cljs.core.List(null,inst_56753,inst_56755,(2),null));
var inst_56757__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56756__$1);
var state_56890__$1 = (function (){var statearr_56929 = state_56890;
(statearr_56929[(19)] = inst_56756__$1);

(statearr_56929[(20)] = inst_56757__$1);

return statearr_56929;
})();
if(cljs.core.truth_(inst_56757__$1)){
var statearr_56930_57281 = state_56890__$1;
(statearr_56930_57281[(1)] = (17));

} else {
var statearr_56932_57282 = state_56890__$1;
(statearr_56932_57282[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (22))){
var inst_56788 = (state_56890[(2)]);
var inst_56789 = cljs.core.async.timeout((20));
var state_56890__$1 = (function (){var statearr_56933 = state_56890;
(statearr_56933[(21)] = inst_56788);

return statearr_56933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56890__$1,(23),inst_56789);
} else {
if((state_val_56891 === (36))){
var inst_56862 = (state_56890[(16)]);
var inst_56865 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56866 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56867 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56868 = cljs.core.cons(inst_56867,inst_56862);
var inst_56869 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56866,60,inst_56868,"Should flush 3,4 after timeout from first message"];
var inst_56870 = cljs.core.PersistentHashMap.fromArrays(inst_56865,inst_56869);
var inst_56871 = cljs.test.report.call(null,inst_56870);
var state_56890__$1 = state_56890;
var statearr_56941_57283 = state_56890__$1;
(statearr_56941_57283[(2)] = inst_56871);

(statearr_56941_57283[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (29))){
var inst_56811 = (state_56890[(11)]);
var inst_56822 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56823 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56824 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56825 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56826 = cljs.core.cons(inst_56825,inst_56811);
var inst_56827 = (new cljs.core.List(null,inst_56826,null,(1),null));
var inst_56828 = (new cljs.core.List(null,inst_56824,inst_56827,(2),null));
var inst_56829 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56823,57,inst_56828,"Should not flush 3,4 yet"];
var inst_56830 = cljs.core.PersistentHashMap.fromArrays(inst_56822,inst_56829);
var inst_56831 = cljs.test.report.call(null,inst_56830);
var state_56890__$1 = state_56890;
var statearr_56943_57284 = state_56890__$1;
(statearr_56943_57284[(2)] = inst_56831);

(statearr_56943_57284[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (6))){
var inst_56733 = (state_56890[(2)]);
var inst_56734 = cljs.core.async.timeout((100));
var state_56890__$1 = (function (){var statearr_56945 = state_56890;
(statearr_56945[(22)] = inst_56733);

return statearr_56945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56890__$1,(12),inst_56734);
} else {
if((state_val_56891 === (28))){
var inst_56811 = (state_56890[(11)]);
var inst_56814 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56815 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56816 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56817 = cljs.core.cons(inst_56816,inst_56811);
var inst_56818 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56815,57,inst_56817,"Should not flush 3,4 yet"];
var inst_56819 = cljs.core.PersistentHashMap.fromArrays(inst_56814,inst_56818);
var inst_56820 = cljs.test.report.call(null,inst_56819);
var state_56890__$1 = state_56890;
var statearr_56947_57286 = state_56890__$1;
(statearr_56947_57286[(2)] = inst_56820);

(statearr_56947_57286[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (25))){
var inst_56836 = (state_56890[(2)]);
var inst_56837 = cljs.core.async.timeout((80));
var state_56890__$1 = (function (){var statearr_56948 = state_56890;
(statearr_56948[(23)] = inst_56836);

return statearr_56948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56890__$1,(31),inst_56837);
} else {
if((state_val_56891 === (34))){
var inst_56840 = (state_56890[(2)]);
var inst_56841 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56842 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56843 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56842,60,inst_56840,"Should flush 3,4 after timeout from first message"];
var inst_56844 = cljs.core.PersistentHashMap.fromArrays(inst_56841,inst_56843);
var inst_56845 = cljs.test.report.call(null,inst_56844);
var state_56890__$1 = state_56890;
var statearr_56949_57288 = state_56890__$1;
(statearr_56949_57288[(2)] = inst_56845);

(statearr_56949_57288[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (17))){
var inst_56756 = (state_56890[(19)]);
var inst_56759 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56760 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56761 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56762 = cljs.core.cons(inst_56761,inst_56756);
var inst_56763 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56760,50,inst_56762,"Should flush after timeout"];
var inst_56764 = cljs.core.PersistentHashMap.fromArrays(inst_56759,inst_56763);
var inst_56765 = cljs.test.report.call(null,inst_56764);
var state_56890__$1 = state_56890;
var statearr_56950_57289 = state_56890__$1;
(statearr_56950_57289[(2)] = inst_56765);

(statearr_56950_57289[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (3))){
var inst_56692 = (state_56890[(2)]);
var inst_56693 = cljs.core.async.timeout((50));
var state_56890__$1 = (function (){var statearr_56951 = state_56890;
(statearr_56951[(24)] = inst_56692);

return statearr_56951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56890__$1,(4),inst_56693);
} else {
if((state_val_56891 === (12))){
var inst_56736 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56952 = state_56890;
(statearr_56952[(25)] = inst_56736);

return statearr_56952;
})();
var statearr_56953_57290 = state_56890__$1;
(statearr_56953_57290[(2)] = null);

(statearr_56953_57290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (2))){
var inst_56681 = (state_56890[(8)]);
var inst_56690 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56955 = state_56890;
(statearr_56955[(26)] = inst_56690);

return statearr_56955;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56890__$1,(3),inst_56681,(2));
} else {
if((state_val_56891 === (23))){
var inst_56791 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56956 = state_56890;
(statearr_56956[(27)] = inst_56791);

return statearr_56956;
})();
var statearr_56957_57291 = state_56890__$1;
(statearr_56957_57291[(2)] = null);

(statearr_56957_57291[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (35))){
var _ = (function (){var statearr_56958 = state_56890;
(statearr_56958[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56958;
})();
var state_56890__$1 = state_56890;
var ex56954 = (state_56890__$1[(2)]);
var statearr_56959_57292 = state_56890__$1;
(statearr_56959_57292[(5)] = ex56954);


var statearr_56960_57293 = state_56890__$1;
(statearr_56960_57293[(1)] = (34));

(statearr_56960_57293[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (19))){
var inst_56757 = (state_56890[(20)]);
var inst_56778 = (state_56890[(2)]);
var _ = (function (){var statearr_56961 = state_56890;
(statearr_56961[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56961;
})();
var state_56890__$1 = (function (){var statearr_56962 = state_56890;
(statearr_56962[(28)] = inst_56778);

return statearr_56962;
})();
var statearr_56963_57294 = state_56890__$1;
(statearr_56963_57294[(2)] = inst_56757);

(statearr_56963_57294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (11))){
var inst_56709 = (state_56890[(29)]);
var inst_56730 = (state_56890[(2)]);
var _ = (function (){var statearr_56964 = state_56890;
(statearr_56964[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56964;
})();
var state_56890__$1 = (function (){var statearr_56965 = state_56890;
(statearr_56965[(30)] = inst_56730);

return statearr_56965;
})();
var statearr_56966_57295 = state_56890__$1;
(statearr_56966_57295[(2)] = inst_56709);

(statearr_56966_57295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (9))){
var inst_56708 = (state_56890[(31)]);
var inst_56711 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56712 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56713 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56714 = cljs.core.cons(inst_56713,inst_56708);
var inst_56715 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56712,47,inst_56714,"Should not flush before timeout"];
var inst_56716 = cljs.core.PersistentHashMap.fromArrays(inst_56711,inst_56715);
var inst_56717 = cljs.test.report.call(null,inst_56716);
var state_56890__$1 = state_56890;
var statearr_56967_57296 = state_56890__$1;
(statearr_56967_57296[(2)] = inst_56717);

(statearr_56967_57296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (5))){
var inst_56683 = (state_56890[(9)]);
var inst_56708 = (state_56890[(31)]);
var inst_56709 = (state_56890[(29)]);
var _ = (function (){var statearr_56968 = state_56890;
(statearr_56968[(4)] = cljs.core.cons((8),(state_56890[(4)])));

return statearr_56968;
})();
var inst_56707 = cljs.core.deref(inst_56683);
var inst_56708__$1 = (new cljs.core.List(null,inst_56707,null,(1),null));
var inst_56709__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56708__$1);
var state_56890__$1 = (function (){var statearr_56969 = state_56890;
(statearr_56969[(31)] = inst_56708__$1);

(statearr_56969[(29)] = inst_56709__$1);

return statearr_56969;
})();
if(cljs.core.truth_(inst_56709__$1)){
var statearr_56971_57297 = state_56890__$1;
(statearr_56971_57297[(1)] = (9));

} else {
var statearr_56973_57298 = state_56890__$1;
(statearr_56973_57298[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (14))){
var inst_56681 = (state_56890[(8)]);
var inst_56781 = (state_56890[(2)]);
var state_56890__$1 = (function (){var statearr_56975 = state_56890;
(statearr_56975[(32)] = inst_56781);

return statearr_56975;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56890__$1,(20),inst_56681,(3));
} else {
if((state_val_56891 === (26))){
var inst_56792 = (state_56890[(2)]);
var inst_56793 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56794 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56795 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56794,57,inst_56792,"Should not flush 3,4 yet"];
var inst_56796 = cljs.core.PersistentHashMap.fromArrays(inst_56793,inst_56795);
var inst_56797 = cljs.test.report.call(null,inst_56796);
var state_56890__$1 = state_56890;
var statearr_56976_57299 = state_56890__$1;
(statearr_56976_57299[(2)] = inst_56797);

(statearr_56976_57299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (16))){
var _ = (function (){var statearr_56979 = state_56890;
(statearr_56979[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56979;
})();
var state_56890__$1 = state_56890;
var ex56974 = (state_56890__$1[(2)]);
var statearr_56981_57300 = state_56890__$1;
(statearr_56981_57300[(5)] = ex56974);


var statearr_56983_57301 = state_56890__$1;
(statearr_56983_57301[(1)] = (15));

(statearr_56983_57301[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (38))){
var inst_56863 = (state_56890[(17)]);
var inst_56884 = (state_56890[(2)]);
var _ = (function (){var statearr_56984 = state_56890;
(statearr_56984[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56984;
})();
var state_56890__$1 = (function (){var statearr_56985 = state_56890;
(statearr_56985[(33)] = inst_56884);

return statearr_56985;
})();
var statearr_56986_57305 = state_56890__$1;
(statearr_56986_57305[(2)] = inst_56863);

(statearr_56986_57305[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (30))){
var inst_56812 = (state_56890[(12)]);
var inst_56833 = (state_56890[(2)]);
var _ = (function (){var statearr_56987 = state_56890;
(statearr_56987[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_56987;
})();
var state_56890__$1 = (function (){var statearr_56988 = state_56890;
(statearr_56988[(34)] = inst_56833);

return statearr_56988;
})();
var statearr_56989_57307 = state_56890__$1;
(statearr_56989_57307[(2)] = inst_56812);

(statearr_56989_57307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (10))){
var inst_56708 = (state_56890[(31)]);
var inst_56719 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56720 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56721 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56722 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56723 = cljs.core.cons(inst_56722,inst_56708);
var inst_56724 = (new cljs.core.List(null,inst_56723,null,(1),null));
var inst_56725 = (new cljs.core.List(null,inst_56721,inst_56724,(2),null));
var inst_56726 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56720,47,inst_56725,"Should not flush before timeout"];
var inst_56727 = cljs.core.PersistentHashMap.fromArrays(inst_56719,inst_56726);
var inst_56728 = cljs.test.report.call(null,inst_56727);
var state_56890__$1 = state_56890;
var statearr_56990_57308 = state_56890__$1;
(statearr_56990_57308[(2)] = inst_56728);

(statearr_56990_57308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (18))){
var inst_56756 = (state_56890[(19)]);
var inst_56767 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56768 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56769 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56770 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56771 = cljs.core.cons(inst_56770,inst_56756);
var inst_56772 = (new cljs.core.List(null,inst_56771,null,(1),null));
var inst_56773 = (new cljs.core.List(null,inst_56769,inst_56772,(2),null));
var inst_56774 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56768,50,inst_56773,"Should flush after timeout"];
var inst_56775 = cljs.core.PersistentHashMap.fromArrays(inst_56767,inst_56774);
var inst_56776 = cljs.test.report.call(null,inst_56775);
var state_56890__$1 = state_56890;
var statearr_56997_57309 = state_56890__$1;
(statearr_56997_57309[(2)] = inst_56776);

(statearr_56997_57309[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (37))){
var inst_56862 = (state_56890[(16)]);
var inst_56873 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56874 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56875 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56876 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56877 = cljs.core.cons(inst_56876,inst_56862);
var inst_56878 = (new cljs.core.List(null,inst_56877,null,(1),null));
var inst_56879 = (new cljs.core.List(null,inst_56875,inst_56878,(2),null));
var inst_56880 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56874,60,inst_56879,"Should flush 3,4 after timeout from first message"];
var inst_56881 = cljs.core.PersistentHashMap.fromArrays(inst_56873,inst_56880);
var inst_56882 = cljs.test.report.call(null,inst_56881);
var state_56890__$1 = state_56890;
var statearr_56999_57312 = state_56890__$1;
(statearr_56999_57312[(2)] = inst_56882);

(statearr_56999_57312[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56891 === (8))){
var _ = (function (){var statearr_57000 = state_56890;
(statearr_57000[(4)] = cljs.core.rest((state_56890[(4)])));

return statearr_57000;
})();
var state_56890__$1 = state_56890;
var ex56993 = (state_56890__$1[(2)]);
var statearr_57001_57313 = state_56890__$1;
(statearr_57001_57313[(5)] = ex56993);


var statearr_57002_57314 = state_56890__$1;
(statearr_57002_57314[(1)] = (7));

(statearr_57002_57314[(5)] = null);



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
var statearr_57007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57007[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57007[(1)] = (1));

return statearr_57007;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56890){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56890);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57010){var ex__32294__auto__ = e57010;
var statearr_57011_57315 = state_56890;
(statearr_57011_57315[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56890[(4)]))){
var statearr_57012_57316 = state_56890;
(statearr_57012_57316[(1)] = cljs.core.first((state_56890[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57317 = state_56890;
state_56890 = G__57317;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56890){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_57014 = f__32362__auto__();
(statearr_57014[(6)] = c__32361__auto__);

return statearr_57014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56677","meta56677",1963091841,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56676");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56676");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56676.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56676 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56676(meta56677){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676(meta56677));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56676(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023 = (function (meta57024){
this.meta57024 = meta57024;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57025,meta57024__$1){
var self__ = this;
var _57025__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023(meta57024__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57025){
var self__ = this;
var _57025__$1 = this;
return self__.meta57024;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57028 = (arguments.length - (1));
switch (G__57028) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023.prototype.apply = (function (self__,args57026){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57026)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_57112){
var state_val_57113 = (state_57112[(1)]);
if((state_val_57113 === (7))){
var inst_57053 = (state_57112[(2)]);
var inst_57064 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57065 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57066 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_57065,78,inst_57053,"Closing input should flush remaining"];
var inst_57067 = cljs.core.PersistentHashMap.fromArrays(inst_57064,inst_57066);
var inst_57068 = cljs.test.report.call(null,inst_57067);
var state_57112__$1 = state_57112;
var statearr_57115_57319 = state_57112__$1;
(statearr_57115_57319[(2)] = inst_57068);

(statearr_57115_57319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57113 === (1))){
var inst_57035 = (state_57112[(7)]);
var inst_57037 = (state_57112[(8)]);
var inst_57035__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_57036 = cljs.core.PersistentVector.EMPTY;
var inst_57037__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_57036);
var inst_57038 = (function (){var input_ch = inst_57035__$1;
var results = inst_57037__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_57039 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_57040 = [inst_57035__$1,inst_57038];
var inst_57041 = cljs.core.PersistentHashMap.fromArrays(inst_57039,inst_57040);
var inst_57042 = bb_web_ds_tools.components.async_buffer.create(inst_57041);
var state_57112__$1 = (function (){var statearr_57121 = state_57112;
(statearr_57121[(7)] = inst_57035__$1);

(statearr_57121[(8)] = inst_57037__$1);

(statearr_57121[(9)] = inst_57042);

return statearr_57121;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57112__$1,(2),inst_57035__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_57113 === (4))){
var inst_57051 = (state_57112[(2)]);
var state_57112__$1 = (function (){var statearr_57126 = state_57112;
(statearr_57126[(10)] = inst_57051);

return statearr_57126;
})();
var statearr_57129_57320 = state_57112__$1;
(statearr_57129_57320[(2)] = null);

(statearr_57129_57320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57113 === (6))){
var inst_57109 = (state_57112[(2)]);
var inst_57110 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_57112__$1 = (function (){var statearr_57131 = state_57112;
(statearr_57131[(11)] = inst_57109);

return statearr_57131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57112__$1,inst_57110);
} else {
if((state_val_57113 === (3))){
var inst_57035 = (state_57112[(7)]);
var inst_57046 = (state_57112[(2)]);
var inst_57047 = cljs.core.async.close_BANG_(inst_57035);
var inst_57048 = cljs.core.async.timeout((20));
var state_57112__$1 = (function (){var statearr_57134 = state_57112;
(statearr_57134[(12)] = inst_57046);

(statearr_57134[(13)] = inst_57047);

return statearr_57134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57112__$1,(4),inst_57048);
} else {
if((state_val_57113 === (2))){
var inst_57035 = (state_57112[(7)]);
var inst_57044 = (state_57112[(2)]);
var state_57112__$1 = (function (){var statearr_57135 = state_57112;
(statearr_57135[(14)] = inst_57044);

return statearr_57135;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57112__$1,(3),inst_57035,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_57113 === (11))){
var inst_57083 = (state_57112[(15)]);
var inst_57105 = (state_57112[(2)]);
var _ = (function (){var statearr_57138 = state_57112;
(statearr_57138[(4)] = cljs.core.rest((state_57112[(4)])));

return statearr_57138;
})();
var state_57112__$1 = (function (){var statearr_57140 = state_57112;
(statearr_57140[(16)] = inst_57105);

return statearr_57140;
})();
var statearr_57141_57321 = state_57112__$1;
(statearr_57141_57321[(2)] = inst_57083);

(statearr_57141_57321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57113 === (9))){
var inst_57082 = (state_57112[(17)]);
var inst_57085 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57086 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57087 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57088 = cljs.core.cons(inst_57087,inst_57082);
var inst_57089 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_57086,78,inst_57088,"Closing input should flush remaining"];
var inst_57090 = cljs.core.PersistentHashMap.fromArrays(inst_57085,inst_57089);
var inst_57091 = cljs.test.report.call(null,inst_57090);
var state_57112__$1 = state_57112;
var statearr_57143_57322 = state_57112__$1;
(statearr_57143_57322[(2)] = inst_57091);

(statearr_57143_57322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57113 === (5))){
var inst_57037 = (state_57112[(8)]);
var inst_57082 = (state_57112[(17)]);
var inst_57083 = (state_57112[(15)]);
var _ = (function (){var statearr_57146 = state_57112;
(statearr_57146[(4)] = cljs.core.cons((8),(state_57112[(4)])));

return statearr_57146;
})();
var inst_57074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57076 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_57077 = (new cljs.core.PersistentVector(null,2,(5),inst_57075,inst_57076,null));
var inst_57078 = [inst_57077];
var inst_57079 = (new cljs.core.PersistentVector(null,1,(5),inst_57074,inst_57078,null));
var inst_57080 = cljs.core.deref(inst_57037);
var inst_57081 = (new cljs.core.List(null,inst_57080,null,(1),null));
var inst_57082__$1 = (new cljs.core.List(null,inst_57079,inst_57081,(2),null));
var inst_57083__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_57082__$1);
var state_57112__$1 = (function (){var statearr_57150 = state_57112;
(statearr_57150[(17)] = inst_57082__$1);

(statearr_57150[(15)] = inst_57083__$1);

return statearr_57150;
})();
if(cljs.core.truth_(inst_57083__$1)){
var statearr_57151_57324 = state_57112__$1;
(statearr_57151_57324[(1)] = (9));

} else {
var statearr_57152_57325 = state_57112__$1;
(statearr_57152_57325[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57113 === (10))){
var inst_57082 = (state_57112[(17)]);
var inst_57093 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57095 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57096 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_57097 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57098 = cljs.core.cons(inst_57097,inst_57082);
var inst_57099 = (new cljs.core.List(null,inst_57098,null,(1),null));
var inst_57100 = (new cljs.core.List(null,inst_57096,inst_57099,(2),null));
var inst_57101 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_57095,78,inst_57100,"Closing input should flush remaining"];
var inst_57102 = cljs.core.PersistentHashMap.fromArrays(inst_57093,inst_57101);
var inst_57103 = cljs.test.report.call(null,inst_57102);
var state_57112__$1 = state_57112;
var statearr_57154_57326 = state_57112__$1;
(statearr_57154_57326[(2)] = inst_57103);

(statearr_57154_57326[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57113 === (8))){
var _ = (function (){var statearr_57155 = state_57112;
(statearr_57155[(4)] = cljs.core.rest((state_57112[(4)])));

return statearr_57155;
})();
var state_57112__$1 = state_57112;
var ex57144 = (state_57112__$1[(2)]);
var statearr_57156_57327 = state_57112__$1;
(statearr_57156_57327[(5)] = ex57144);


var statearr_57157_57328 = state_57112__$1;
(statearr_57157_57328[(1)] = (7));

(statearr_57157_57328[(5)] = null);



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
var statearr_57160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57160[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57160[(1)] = (1));

return statearr_57160;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_57112){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_57112);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57163){var ex__32294__auto__ = e57163;
var statearr_57164_57329 = state_57112;
(statearr_57164_57329[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_57112[(4)]))){
var statearr_57165_57330 = state_57112;
(statearr_57165_57330[(1)] = cljs.core.first((state_57112[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57332 = state_57112;
state_57112 = G__57332;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_57112){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_57112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_57167 = f__32362__auto__();
(statearr_57167[(6)] = c__32361__auto__);

return statearr_57167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57024","meta57024",-2010137125,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57023");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57023");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test57023.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test57023 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test57023(meta57024){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023(meta57024));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test57023(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
