goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337 = (function (meta56338){
this.meta56338 = meta56338;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56339,meta56338__$1){
var self__ = this;
var _56339__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337(meta56338__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56339){
var self__ = this;
var _56339__$1 = this;
return self__.meta56338;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56341 = (arguments.length - (1));
switch (G__56341) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.apply = (function (self__,args56340){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56340)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56500){
var state_val_56501 = (state_56500[(1)]);
if((state_val_56501 === (7))){
var inst_56357 = (state_56500[(2)]);
var inst_56358 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56359 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56360 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56359,19,inst_56357,"Buffer should not flush automatically without timer"];
var inst_56361 = cljs.core.PersistentHashMap.fromArrays(inst_56358,inst_56360);
var inst_56362 = cljs.test.report.call(null,inst_56361);
var state_56500__$1 = state_56500;
var statearr_56503_57067 = state_56500__$1;
(statearr_56503_57067[(2)] = inst_56362);

(statearr_56503_57067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (20))){
var inst_56349 = (state_56500[(7)]);
var inst_56445 = (state_56500[(2)]);
var inst_56446 = (inst_56349.cljs$core$IFn$_invoke$arity$0 ? inst_56349.cljs$core$IFn$_invoke$arity$0() : inst_56349.call(null));
var inst_56447 = cljs.core.async.timeout((20));
var state_56500__$1 = (function (){var statearr_56504 = state_56500;
(statearr_56504[(8)] = inst_56445);

(statearr_56504[(9)] = inst_56446);

return statearr_56504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56500__$1,(21),inst_56447);
} else {
if((state_val_56501 === (27))){
var inst_56472 = (state_56500[(10)]);
var inst_56483 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56484 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56485 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56486 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56487 = cljs.core.cons(inst_56486,inst_56472);
var inst_56488 = (new cljs.core.List(null,inst_56487,null,(1),null));
var inst_56489 = (new cljs.core.List(null,inst_56485,inst_56488,(2),null));
var inst_56490 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56484,29,inst_56489,"Subsequent flush should work"];
var inst_56491 = cljs.core.PersistentHashMap.fromArrays(inst_56483,inst_56490);
var inst_56492 = cljs.test.report.call(null,inst_56491);
var state_56500__$1 = state_56500;
var statearr_56505_57068 = state_56500__$1;
(statearr_56505_57068[(2)] = inst_56492);

(statearr_56505_57068[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (1))){
var inst_56342 = (state_56500[(11)]);
var inst_56344 = (state_56500[(12)]);
var inst_56342__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56343 = cljs.core.PersistentVector.EMPTY;
var inst_56344__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56343);
var inst_56345 = (function (){var input_ch = inst_56342__$1;
var results = inst_56344__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56346 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56347 = [inst_56342__$1,inst_56345];
var inst_56348 = cljs.core.PersistentHashMap.fromArrays(inst_56346,inst_56347);
var inst_56349 = bb_web_ds_tools.components.async_buffer.create(inst_56348);
var state_56500__$1 = (function (){var statearr_56514 = state_56500;
(statearr_56514[(11)] = inst_56342__$1);

(statearr_56514[(12)] = inst_56344__$1);

(statearr_56514[(7)] = inst_56349);

return statearr_56514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56500__$1,(2),inst_56342__$1,(1));
} else {
if((state_val_56501 === (24))){
var inst_56450 = (state_56500[(2)]);
var inst_56451 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56452 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56453 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56452,29,inst_56450,"Subsequent flush should work"];
var inst_56454 = cljs.core.PersistentHashMap.fromArrays(inst_56451,inst_56453);
var inst_56455 = cljs.test.report.call(null,inst_56454);
var state_56500__$1 = state_56500;
var statearr_56515_57069 = state_56500__$1;
(statearr_56515_57069[(2)] = inst_56455);

(statearr_56515_57069[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (4))){
var inst_56356 = (state_56500[(2)]);
var state_56500__$1 = (function (){var statearr_56517 = state_56500;
(statearr_56517[(13)] = inst_56356);

return statearr_56517;
})();
var statearr_56518_57070 = state_56500__$1;
(statearr_56518_57070[(2)] = null);

(statearr_56518_57070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (15))){
var inst_56399 = (state_56500[(2)]);
var inst_56400 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56401 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56402 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56401,24,inst_56399,"Manual flush should flush all items"];
var inst_56403 = cljs.core.PersistentHashMap.fromArrays(inst_56400,inst_56402);
var inst_56404 = cljs.test.report.call(null,inst_56403);
var state_56500__$1 = state_56500;
var statearr_56519_57071 = state_56500__$1;
(statearr_56519_57071[(2)] = inst_56404);

(statearr_56519_57071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (21))){
var inst_56449 = (state_56500[(2)]);
var state_56500__$1 = (function (){var statearr_56521 = state_56500;
(statearr_56521[(14)] = inst_56449);

return statearr_56521;
})();
var statearr_56522_57072 = state_56500__$1;
(statearr_56522_57072[(2)] = null);

(statearr_56522_57072[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (13))){
var inst_56344 = (state_56500[(12)]);
var inst_56418 = (state_56500[(15)]);
var inst_56419 = (state_56500[(16)]);
var _ = (function (){var statearr_56523 = state_56500;
(statearr_56523[(4)] = cljs.core.cons((16),(state_56500[(4)])));

return statearr_56523;
})();
var inst_56410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56411 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56412 = [(1),(2)];
var inst_56413 = (new cljs.core.PersistentVector(null,2,(5),inst_56411,inst_56412,null));
var inst_56414 = [inst_56413];
var inst_56415 = (new cljs.core.PersistentVector(null,1,(5),inst_56410,inst_56414,null));
var inst_56416 = cljs.core.deref(inst_56344);
var inst_56417 = (new cljs.core.List(null,inst_56416,null,(1),null));
var inst_56418__$1 = (new cljs.core.List(null,inst_56415,inst_56417,(2),null));
var inst_56419__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56418__$1);
var state_56500__$1 = (function (){var statearr_56526 = state_56500;
(statearr_56526[(15)] = inst_56418__$1);

(statearr_56526[(16)] = inst_56419__$1);

return statearr_56526;
})();
if(cljs.core.truth_(inst_56419__$1)){
var statearr_56527_57073 = state_56500__$1;
(statearr_56527_57073[(1)] = (17));

} else {
var statearr_56528_57074 = state_56500__$1;
(statearr_56528_57074[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (22))){
var inst_56344 = (state_56500[(12)]);
var inst_56472 = (state_56500[(10)]);
var inst_56473 = (state_56500[(17)]);
var _ = (function (){var statearr_56532 = state_56500;
(statearr_56532[(4)] = cljs.core.cons((25),(state_56500[(4)])));

return statearr_56532;
})();
var inst_56461 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56462 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56463 = [(1),(2)];
var inst_56464 = (new cljs.core.PersistentVector(null,2,(5),inst_56462,inst_56463,null));
var inst_56465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56466 = [(3)];
var inst_56467 = (new cljs.core.PersistentVector(null,1,(5),inst_56465,inst_56466,null));
var inst_56468 = [inst_56464,inst_56467];
var inst_56469 = (new cljs.core.PersistentVector(null,2,(5),inst_56461,inst_56468,null));
var inst_56470 = cljs.core.deref(inst_56344);
var inst_56471 = (new cljs.core.List(null,inst_56470,null,(1),null));
var inst_56472__$1 = (new cljs.core.List(null,inst_56469,inst_56471,(2),null));
var inst_56473__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56472__$1);
var state_56500__$1 = (function (){var statearr_56538 = state_56500;
(statearr_56538[(10)] = inst_56472__$1);

(statearr_56538[(17)] = inst_56473__$1);

return statearr_56538;
})();
if(cljs.core.truth_(inst_56473__$1)){
var statearr_56539_57075 = state_56500__$1;
(statearr_56539_57075[(1)] = (26));

} else {
var statearr_56540_57076 = state_56500__$1;
(statearr_56540_57076[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (6))){
var inst_56349 = (state_56500[(7)]);
var inst_56394 = (state_56500[(2)]);
var inst_56395 = (inst_56349.cljs$core$IFn$_invoke$arity$0 ? inst_56349.cljs$core$IFn$_invoke$arity$0() : inst_56349.call(null));
var inst_56396 = cljs.core.async.timeout((20));
var state_56500__$1 = (function (){var statearr_56543 = state_56500;
(statearr_56543[(18)] = inst_56394);

(statearr_56543[(19)] = inst_56395);

return statearr_56543;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56500__$1,(12),inst_56396);
} else {
if((state_val_56501 === (28))){
var inst_56473 = (state_56500[(17)]);
var inst_56494 = (state_56500[(2)]);
var _ = (function (){var statearr_56544 = state_56500;
(statearr_56544[(4)] = cljs.core.rest((state_56500[(4)])));

return statearr_56544;
})();
var state_56500__$1 = (function (){var statearr_56545 = state_56500;
(statearr_56545[(20)] = inst_56494);

return statearr_56545;
})();
var statearr_56546_57077 = state_56500__$1;
(statearr_56546_57077[(2)] = inst_56473);

(statearr_56546_57077[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (25))){
var _ = (function (){var statearr_56547 = state_56500;
(statearr_56547[(4)] = cljs.core.rest((state_56500[(4)])));

return statearr_56547;
})();
var state_56500__$1 = state_56500;
var ex56542 = (state_56500__$1[(2)]);
var statearr_56548_57078 = state_56500__$1;
(statearr_56548_57078[(5)] = ex56542);


var statearr_56549_57079 = state_56500__$1;
(statearr_56549_57079[(1)] = (24));

(statearr_56549_57079[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (17))){
var inst_56418 = (state_56500[(15)]);
var inst_56421 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56422 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56423 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56424 = cljs.core.cons(inst_56423,inst_56418);
var inst_56425 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56422,24,inst_56424,"Manual flush should flush all items"];
var inst_56426 = cljs.core.PersistentHashMap.fromArrays(inst_56421,inst_56425);
var inst_56427 = cljs.test.report.call(null,inst_56426);
var state_56500__$1 = state_56500;
var statearr_56550_57080 = state_56500__$1;
(statearr_56550_57080[(2)] = inst_56427);

(statearr_56550_57080[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (3))){
var inst_56353 = (state_56500[(2)]);
var inst_56354 = cljs.core.async.timeout((20));
var state_56500__$1 = (function (){var statearr_56551 = state_56500;
(statearr_56551[(21)] = inst_56353);

return statearr_56551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56500__$1,(4),inst_56354);
} else {
if((state_val_56501 === (12))){
var inst_56398 = (state_56500[(2)]);
var state_56500__$1 = (function (){var statearr_56552 = state_56500;
(statearr_56552[(22)] = inst_56398);

return statearr_56552;
})();
var statearr_56553_57081 = state_56500__$1;
(statearr_56553_57081[(2)] = null);

(statearr_56553_57081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (2))){
var inst_56342 = (state_56500[(11)]);
var inst_56351 = (state_56500[(2)]);
var state_56500__$1 = (function (){var statearr_56554 = state_56500;
(statearr_56554[(23)] = inst_56351);

return statearr_56554;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56500__$1,(3),inst_56342,(2));
} else {
if((state_val_56501 === (23))){
var inst_56497 = (state_56500[(2)]);
var inst_56498 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56500__$1 = (function (){var statearr_56555 = state_56500;
(statearr_56555[(24)] = inst_56497);

return statearr_56555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56500__$1,inst_56498);
} else {
if((state_val_56501 === (19))){
var inst_56419 = (state_56500[(16)]);
var inst_56440 = (state_56500[(2)]);
var _ = (function (){var statearr_56556 = state_56500;
(statearr_56556[(4)] = cljs.core.rest((state_56500[(4)])));

return statearr_56556;
})();
var state_56500__$1 = (function (){var statearr_56557 = state_56500;
(statearr_56557[(25)] = inst_56440);

return statearr_56557;
})();
var statearr_56558_57082 = state_56500__$1;
(statearr_56558_57082[(2)] = inst_56419);

(statearr_56558_57082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (11))){
var inst_56370 = (state_56500[(26)]);
var inst_56391 = (state_56500[(2)]);
var _ = (function (){var statearr_56559 = state_56500;
(statearr_56559[(4)] = cljs.core.rest((state_56500[(4)])));

return statearr_56559;
})();
var state_56500__$1 = (function (){var statearr_56560 = state_56500;
(statearr_56560[(27)] = inst_56391);

return statearr_56560;
})();
var statearr_56561_57083 = state_56500__$1;
(statearr_56561_57083[(2)] = inst_56370);

(statearr_56561_57083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (9))){
var inst_56369 = (state_56500[(28)]);
var inst_56372 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56373 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56374 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56375 = cljs.core.cons(inst_56374,inst_56369);
var inst_56376 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56373,19,inst_56375,"Buffer should not flush automatically without timer"];
var inst_56377 = cljs.core.PersistentHashMap.fromArrays(inst_56372,inst_56376);
var inst_56378 = cljs.test.report.call(null,inst_56377);
var state_56500__$1 = state_56500;
var statearr_56562_57084 = state_56500__$1;
(statearr_56562_57084[(2)] = inst_56378);

(statearr_56562_57084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (5))){
var inst_56344 = (state_56500[(12)]);
var inst_56369 = (state_56500[(28)]);
var inst_56370 = (state_56500[(26)]);
var _ = (function (){var statearr_56563 = state_56500;
(statearr_56563[(4)] = cljs.core.cons((8),(state_56500[(4)])));

return statearr_56563;
})();
var inst_56368 = cljs.core.deref(inst_56344);
var inst_56369__$1 = (new cljs.core.List(null,inst_56368,null,(1),null));
var inst_56370__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56369__$1);
var state_56500__$1 = (function (){var statearr_56564 = state_56500;
(statearr_56564[(28)] = inst_56369__$1);

(statearr_56564[(26)] = inst_56370__$1);

return statearr_56564;
})();
if(cljs.core.truth_(inst_56370__$1)){
var statearr_56565_57085 = state_56500__$1;
(statearr_56565_57085[(1)] = (9));

} else {
var statearr_56566_57086 = state_56500__$1;
(statearr_56566_57086[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (14))){
var inst_56342 = (state_56500[(11)]);
var inst_56443 = (state_56500[(2)]);
var state_56500__$1 = (function (){var statearr_56568 = state_56500;
(statearr_56568[(29)] = inst_56443);

return statearr_56568;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56500__$1,(20),inst_56342,(3));
} else {
if((state_val_56501 === (26))){
var inst_56472 = (state_56500[(10)]);
var inst_56475 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56476 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56477 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56478 = cljs.core.cons(inst_56477,inst_56472);
var inst_56479 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56476,29,inst_56478,"Subsequent flush should work"];
var inst_56480 = cljs.core.PersistentHashMap.fromArrays(inst_56475,inst_56479);
var inst_56481 = cljs.test.report.call(null,inst_56480);
var state_56500__$1 = state_56500;
var statearr_56569_57087 = state_56500__$1;
(statearr_56569_57087[(2)] = inst_56481);

(statearr_56569_57087[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (16))){
var _ = (function (){var statearr_56570 = state_56500;
(statearr_56570[(4)] = cljs.core.rest((state_56500[(4)])));

return statearr_56570;
})();
var state_56500__$1 = state_56500;
var ex56567 = (state_56500__$1[(2)]);
var statearr_56571_57088 = state_56500__$1;
(statearr_56571_57088[(5)] = ex56567);


var statearr_56572_57089 = state_56500__$1;
(statearr_56572_57089[(1)] = (15));

(statearr_56572_57089[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (10))){
var inst_56369 = (state_56500[(28)]);
var inst_56380 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56381 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56382 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56383 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56384 = cljs.core.cons(inst_56383,inst_56369);
var inst_56385 = (new cljs.core.List(null,inst_56384,null,(1),null));
var inst_56386 = (new cljs.core.List(null,inst_56382,inst_56385,(2),null));
var inst_56387 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56381,19,inst_56386,"Buffer should not flush automatically without timer"];
var inst_56388 = cljs.core.PersistentHashMap.fromArrays(inst_56380,inst_56387);
var inst_56389 = cljs.test.report.call(null,inst_56388);
var state_56500__$1 = state_56500;
var statearr_56575_57090 = state_56500__$1;
(statearr_56575_57090[(2)] = inst_56389);

(statearr_56575_57090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (18))){
var inst_56418 = (state_56500[(15)]);
var inst_56429 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56430 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56431 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56432 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56433 = cljs.core.cons(inst_56432,inst_56418);
var inst_56434 = (new cljs.core.List(null,inst_56433,null,(1),null));
var inst_56435 = (new cljs.core.List(null,inst_56431,inst_56434,(2),null));
var inst_56436 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56430,24,inst_56435,"Manual flush should flush all items"];
var inst_56437 = cljs.core.PersistentHashMap.fromArrays(inst_56429,inst_56436);
var inst_56438 = cljs.test.report.call(null,inst_56437);
var state_56500__$1 = state_56500;
var statearr_56576_57091 = state_56500__$1;
(statearr_56576_57091[(2)] = inst_56438);

(statearr_56576_57091[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56501 === (8))){
var _ = (function (){var statearr_56577 = state_56500;
(statearr_56577[(4)] = cljs.core.rest((state_56500[(4)])));

return statearr_56577;
})();
var state_56500__$1 = state_56500;
var ex56573 = (state_56500__$1[(2)]);
var statearr_56578_57092 = state_56500__$1;
(statearr_56578_57092[(5)] = ex56573);


var statearr_56579_57093 = state_56500__$1;
(statearr_56579_57093[(1)] = (7));

(statearr_56579_57093[(5)] = null);



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
var statearr_56580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56580[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56580[(1)] = (1));

return statearr_56580;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56500){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56500);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56581){var ex__32294__auto__ = e56581;
var statearr_56582_57094 = state_56500;
(statearr_56582_57094[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56500[(4)]))){
var statearr_56583_57095 = state_56500;
(statearr_56583_57095[(1)] = cljs.core.first((state_56500[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57096 = state_56500;
state_56500 = G__57096;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56500){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56584 = f__32362__auto__();
(statearr_56584[(6)] = c__32361__auto__);

return statearr_56584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56338","meta56338",1655490405,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56337");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56337");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56337.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56337 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56337(meta56338){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337(meta56338));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56337(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586 = (function (meta56587){
this.meta56587 = meta56587;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56588,meta56587__$1){
var self__ = this;
var _56588__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586(meta56587__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56588){
var self__ = this;
var _56588__$1 = this;
return self__.meta56587;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56595 = (arguments.length - (1));
switch (G__56595) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586.prototype.apply = (function (self__,args56589){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56589)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56813){
var state_val_56815 = (state_56813[(1)]);
if((state_val_56815 === (7))){
var inst_56611 = (state_56813[(2)]);
var inst_56612 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56613 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56614 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56613,47,inst_56611,"Should not flush before timeout"];
var inst_56615 = cljs.core.PersistentHashMap.fromArrays(inst_56612,inst_56614);
var inst_56616 = cljs.test.report.call(null,inst_56615);
var state_56813__$1 = state_56813;
var statearr_56824_57098 = state_56813__$1;
(statearr_56824_57098[(2)] = inst_56616);

(statearr_56824_57098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (20))){
var inst_56700 = (state_56813[(2)]);
var inst_56701 = cljs.core.async.timeout((50));
var state_56813__$1 = (function (){var statearr_56831 = state_56813;
(statearr_56831[(7)] = inst_56700);

return statearr_56831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56813__$1,(21),inst_56701);
} else {
if((state_val_56815 === (27))){
var _ = (function (){var statearr_56832 = state_56813;
(statearr_56832[(4)] = cljs.core.rest((state_56813[(4)])));

return statearr_56832;
})();
var state_56813__$1 = state_56813;
var ex56816 = (state_56813__$1[(2)]);
var statearr_56833_57099 = state_56813__$1;
(statearr_56833_57099[(5)] = ex56816);


var statearr_56834_57100 = state_56813__$1;
(statearr_56834_57100[(1)] = (26));

(statearr_56834_57100[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (1))){
var inst_56596 = (state_56813[(8)]);
var inst_56598 = (state_56813[(9)]);
var inst_56596__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56597 = cljs.core.PersistentVector.EMPTY;
var inst_56598__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56597);
var inst_56599 = (function (){var input_ch = inst_56596__$1;
var results = inst_56598__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56600 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56601 = [inst_56596__$1,(100),inst_56599];
var inst_56602 = cljs.core.PersistentHashMap.fromArrays(inst_56600,inst_56601);
var inst_56603 = bb_web_ds_tools.components.async_buffer.create(inst_56602);
var state_56813__$1 = (function (){var statearr_56836 = state_56813;
(statearr_56836[(8)] = inst_56596__$1);

(statearr_56836[(9)] = inst_56598__$1);

(statearr_56836[(10)] = inst_56603);

return statearr_56836;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56813__$1,(2),inst_56596__$1,(1));
} else {
if((state_val_56815 === (24))){
var inst_56598 = (state_56813[(9)]);
var inst_56728 = (state_56813[(11)]);
var inst_56729 = (state_56813[(12)]);
var _ = (function (){var statearr_56838 = state_56813;
(statearr_56838[(4)] = cljs.core.cons((27),(state_56813[(4)])));

return statearr_56838;
})();
var inst_56720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56721 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56722 = [(1),(2)];
var inst_56723 = (new cljs.core.PersistentVector(null,2,(5),inst_56721,inst_56722,null));
var inst_56724 = [inst_56723];
var inst_56725 = (new cljs.core.PersistentVector(null,1,(5),inst_56720,inst_56724,null));
var inst_56726 = cljs.core.deref(inst_56598);
var inst_56727 = (new cljs.core.List(null,inst_56726,null,(1),null));
var inst_56728__$1 = (new cljs.core.List(null,inst_56725,inst_56727,(2),null));
var inst_56729__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56728__$1);
var state_56813__$1 = (function (){var statearr_56840 = state_56813;
(statearr_56840[(11)] = inst_56728__$1);

(statearr_56840[(12)] = inst_56729__$1);

return statearr_56840;
})();
if(cljs.core.truth_(inst_56729__$1)){
var statearr_56841_57101 = state_56813__$1;
(statearr_56841_57101[(1)] = (28));

} else {
var statearr_56842_57102 = state_56813__$1;
(statearr_56842_57102[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (4))){
var inst_56610 = (state_56813[(2)]);
var state_56813__$1 = (function (){var statearr_56844 = state_56813;
(statearr_56844[(13)] = inst_56610);

return statearr_56844;
})();
var statearr_56849_57103 = state_56813__$1;
(statearr_56849_57103[(2)] = null);

(statearr_56849_57103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (15))){
var inst_56653 = (state_56813[(2)]);
var inst_56654 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56655 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56656 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56655,50,inst_56653,"Should flush after timeout"];
var inst_56657 = cljs.core.PersistentHashMap.fromArrays(inst_56654,inst_56656);
var inst_56658 = cljs.test.report.call(null,inst_56657);
var state_56813__$1 = state_56813;
var statearr_56852_57104 = state_56813__$1;
(statearr_56852_57104[(2)] = inst_56658);

(statearr_56852_57104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (21))){
var inst_56596 = (state_56813[(8)]);
var inst_56703 = (state_56813[(2)]);
var state_56813__$1 = (function (){var statearr_56854 = state_56813;
(statearr_56854[(14)] = inst_56703);

return statearr_56854;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56813__$1,(22),inst_56596,(4));
} else {
if((state_val_56815 === (31))){
var inst_56756 = (state_56813[(2)]);
var state_56813__$1 = (function (){var statearr_56857 = state_56813;
(statearr_56857[(15)] = inst_56756);

return statearr_56857;
})();
var statearr_56858_57105 = state_56813__$1;
(statearr_56858_57105[(2)] = null);

(statearr_56858_57105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (32))){
var inst_56598 = (state_56813[(9)]);
var inst_56780 = (state_56813[(16)]);
var inst_56781 = (state_56813[(17)]);
var _ = (function (){var statearr_56864 = state_56813;
(statearr_56864[(4)] = cljs.core.cons((35),(state_56813[(4)])));

return statearr_56864;
})();
var inst_56769 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56771 = [(1),(2)];
var inst_56772 = (new cljs.core.PersistentVector(null,2,(5),inst_56770,inst_56771,null));
var inst_56773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56774 = [(3),(4)];
var inst_56775 = (new cljs.core.PersistentVector(null,2,(5),inst_56773,inst_56774,null));
var inst_56776 = [inst_56772,inst_56775];
var inst_56777 = (new cljs.core.PersistentVector(null,2,(5),inst_56769,inst_56776,null));
var inst_56778 = cljs.core.deref(inst_56598);
var inst_56779 = (new cljs.core.List(null,inst_56778,null,(1),null));
var inst_56780__$1 = (new cljs.core.List(null,inst_56777,inst_56779,(2),null));
var inst_56781__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56780__$1);
var state_56813__$1 = (function (){var statearr_56876 = state_56813;
(statearr_56876[(16)] = inst_56780__$1);

(statearr_56876[(17)] = inst_56781__$1);

return statearr_56876;
})();
if(cljs.core.truth_(inst_56781__$1)){
var statearr_56877_57106 = state_56813__$1;
(statearr_56877_57106[(1)] = (36));

} else {
var statearr_56878_57107 = state_56813__$1;
(statearr_56878_57107[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (33))){
var inst_56805 = (state_56813[(2)]);
var inst_56806 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56813__$1 = (function (){var statearr_56881 = state_56813;
(statearr_56881[(18)] = inst_56805);

return statearr_56881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56813__$1,inst_56806);
} else {
if((state_val_56815 === (13))){
var inst_56598 = (state_56813[(9)]);
var inst_56672 = (state_56813[(19)]);
var inst_56673 = (state_56813[(20)]);
var _ = (function (){var statearr_56889 = state_56813;
(statearr_56889[(4)] = cljs.core.cons((16),(state_56813[(4)])));

return statearr_56889;
})();
var inst_56664 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56666 = [(1),(2)];
var inst_56667 = (new cljs.core.PersistentVector(null,2,(5),inst_56665,inst_56666,null));
var inst_56668 = [inst_56667];
var inst_56669 = (new cljs.core.PersistentVector(null,1,(5),inst_56664,inst_56668,null));
var inst_56670 = cljs.core.deref(inst_56598);
var inst_56671 = (new cljs.core.List(null,inst_56670,null,(1),null));
var inst_56672__$1 = (new cljs.core.List(null,inst_56669,inst_56671,(2),null));
var inst_56673__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56672__$1);
var state_56813__$1 = (function (){var statearr_56893 = state_56813;
(statearr_56893[(19)] = inst_56672__$1);

(statearr_56893[(20)] = inst_56673__$1);

return statearr_56893;
})();
if(cljs.core.truth_(inst_56673__$1)){
var statearr_56894_57108 = state_56813__$1;
(statearr_56894_57108[(1)] = (17));

} else {
var statearr_56896_57109 = state_56813__$1;
(statearr_56896_57109[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (22))){
var inst_56705 = (state_56813[(2)]);
var inst_56706 = cljs.core.async.timeout((20));
var state_56813__$1 = (function (){var statearr_56899 = state_56813;
(statearr_56899[(21)] = inst_56705);

return statearr_56899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56813__$1,(23),inst_56706);
} else {
if((state_val_56815 === (36))){
var inst_56780 = (state_56813[(16)]);
var inst_56783 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56784 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56785 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56786 = cljs.core.cons(inst_56785,inst_56780);
var inst_56787 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56784,60,inst_56786,"Should flush 3,4 after timeout from first message"];
var inst_56788 = cljs.core.PersistentHashMap.fromArrays(inst_56783,inst_56787);
var inst_56789 = cljs.test.report.call(null,inst_56788);
var state_56813__$1 = state_56813;
var statearr_56901_57110 = state_56813__$1;
(statearr_56901_57110[(2)] = inst_56789);

(statearr_56901_57110[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (29))){
var inst_56728 = (state_56813[(11)]);
var inst_56739 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56740 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56741 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56742 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56743 = cljs.core.cons(inst_56742,inst_56728);
var inst_56744 = (new cljs.core.List(null,inst_56743,null,(1),null));
var inst_56745 = (new cljs.core.List(null,inst_56741,inst_56744,(2),null));
var inst_56746 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56740,57,inst_56745,"Should not flush 3,4 yet"];
var inst_56747 = cljs.core.PersistentHashMap.fromArrays(inst_56739,inst_56746);
var inst_56748 = cljs.test.report.call(null,inst_56747);
var state_56813__$1 = state_56813;
var statearr_56902_57111 = state_56813__$1;
(statearr_56902_57111[(2)] = inst_56748);

(statearr_56902_57111[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (6))){
var inst_56649 = (state_56813[(2)]);
var inst_56650 = cljs.core.async.timeout((100));
var state_56813__$1 = (function (){var statearr_56903 = state_56813;
(statearr_56903[(22)] = inst_56649);

return statearr_56903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56813__$1,(12),inst_56650);
} else {
if((state_val_56815 === (28))){
var inst_56728 = (state_56813[(11)]);
var inst_56731 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56732 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56733 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56734 = cljs.core.cons(inst_56733,inst_56728);
var inst_56735 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56732,57,inst_56734,"Should not flush 3,4 yet"];
var inst_56736 = cljs.core.PersistentHashMap.fromArrays(inst_56731,inst_56735);
var inst_56737 = cljs.test.report.call(null,inst_56736);
var state_56813__$1 = state_56813;
var statearr_56904_57112 = state_56813__$1;
(statearr_56904_57112[(2)] = inst_56737);

(statearr_56904_57112[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (25))){
var inst_56753 = (state_56813[(2)]);
var inst_56754 = cljs.core.async.timeout((80));
var state_56813__$1 = (function (){var statearr_56905 = state_56813;
(statearr_56905[(23)] = inst_56753);

return statearr_56905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56813__$1,(31),inst_56754);
} else {
if((state_val_56815 === (34))){
var inst_56758 = (state_56813[(2)]);
var inst_56759 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56760 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56761 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56760,60,inst_56758,"Should flush 3,4 after timeout from first message"];
var inst_56762 = cljs.core.PersistentHashMap.fromArrays(inst_56759,inst_56761);
var inst_56763 = cljs.test.report.call(null,inst_56762);
var state_56813__$1 = state_56813;
var statearr_56906_57113 = state_56813__$1;
(statearr_56906_57113[(2)] = inst_56763);

(statearr_56906_57113[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (17))){
var inst_56672 = (state_56813[(19)]);
var inst_56675 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56676 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56677 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56678 = cljs.core.cons(inst_56677,inst_56672);
var inst_56679 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56676,50,inst_56678,"Should flush after timeout"];
var inst_56680 = cljs.core.PersistentHashMap.fromArrays(inst_56675,inst_56679);
var inst_56681 = cljs.test.report.call(null,inst_56680);
var state_56813__$1 = state_56813;
var statearr_56907_57114 = state_56813__$1;
(statearr_56907_57114[(2)] = inst_56681);

(statearr_56907_57114[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (3))){
var inst_56607 = (state_56813[(2)]);
var inst_56608 = cljs.core.async.timeout((50));
var state_56813__$1 = (function (){var statearr_56908 = state_56813;
(statearr_56908[(24)] = inst_56607);

return statearr_56908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56813__$1,(4),inst_56608);
} else {
if((state_val_56815 === (12))){
var inst_56652 = (state_56813[(2)]);
var state_56813__$1 = (function (){var statearr_56909 = state_56813;
(statearr_56909[(25)] = inst_56652);

return statearr_56909;
})();
var statearr_56910_57115 = state_56813__$1;
(statearr_56910_57115[(2)] = null);

(statearr_56910_57115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (2))){
var inst_56596 = (state_56813[(8)]);
var inst_56605 = (state_56813[(2)]);
var state_56813__$1 = (function (){var statearr_56912 = state_56813;
(statearr_56912[(26)] = inst_56605);

return statearr_56912;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56813__$1,(3),inst_56596,(2));
} else {
if((state_val_56815 === (23))){
var inst_56708 = (state_56813[(2)]);
var state_56813__$1 = (function (){var statearr_56913 = state_56813;
(statearr_56913[(27)] = inst_56708);

return statearr_56913;
})();
var statearr_56914_57116 = state_56813__$1;
(statearr_56914_57116[(2)] = null);

(statearr_56914_57116[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (35))){
var _ = (function (){var statearr_56915 = state_56813;
(statearr_56915[(4)] = cljs.core.rest((state_56813[(4)])));

return statearr_56915;
})();
var state_56813__$1 = state_56813;
var ex56911 = (state_56813__$1[(2)]);
var statearr_56916_57117 = state_56813__$1;
(statearr_56916_57117[(5)] = ex56911);


var statearr_56917_57118 = state_56813__$1;
(statearr_56917_57118[(1)] = (34));

(statearr_56917_57118[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (19))){
var inst_56673 = (state_56813[(20)]);
var inst_56695 = (state_56813[(2)]);
var _ = (function (){var statearr_56918 = state_56813;
(statearr_56918[(4)] = cljs.core.rest((state_56813[(4)])));

return statearr_56918;
})();
var state_56813__$1 = (function (){var statearr_56919 = state_56813;
(statearr_56919[(28)] = inst_56695);

return statearr_56919;
})();
var statearr_56920_57119 = state_56813__$1;
(statearr_56920_57119[(2)] = inst_56673);

(statearr_56920_57119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (11))){
var inst_56624 = (state_56813[(29)]);
var inst_56646 = (state_56813[(2)]);
var _ = (function (){var statearr_56921 = state_56813;
(statearr_56921[(4)] = cljs.core.rest((state_56813[(4)])));

return statearr_56921;
})();
var state_56813__$1 = (function (){var statearr_56922 = state_56813;
(statearr_56922[(30)] = inst_56646);

return statearr_56922;
})();
var statearr_56923_57120 = state_56813__$1;
(statearr_56923_57120[(2)] = inst_56624);

(statearr_56923_57120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (9))){
var inst_56623 = (state_56813[(31)]);
var inst_56627 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56628 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56629 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56630 = cljs.core.cons(inst_56629,inst_56623);
var inst_56631 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56628,47,inst_56630,"Should not flush before timeout"];
var inst_56632 = cljs.core.PersistentHashMap.fromArrays(inst_56627,inst_56631);
var inst_56633 = cljs.test.report.call(null,inst_56632);
var state_56813__$1 = state_56813;
var statearr_56924_57121 = state_56813__$1;
(statearr_56924_57121[(2)] = inst_56633);

(statearr_56924_57121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (5))){
var inst_56598 = (state_56813[(9)]);
var inst_56623 = (state_56813[(31)]);
var inst_56624 = (state_56813[(29)]);
var _ = (function (){var statearr_56925 = state_56813;
(statearr_56925[(4)] = cljs.core.cons((8),(state_56813[(4)])));

return statearr_56925;
})();
var inst_56622 = cljs.core.deref(inst_56598);
var inst_56623__$1 = (new cljs.core.List(null,inst_56622,null,(1),null));
var inst_56624__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56623__$1);
var state_56813__$1 = (function (){var statearr_56926 = state_56813;
(statearr_56926[(31)] = inst_56623__$1);

(statearr_56926[(29)] = inst_56624__$1);

return statearr_56926;
})();
if(cljs.core.truth_(inst_56624__$1)){
var statearr_56927_57122 = state_56813__$1;
(statearr_56927_57122[(1)] = (9));

} else {
var statearr_56928_57123 = state_56813__$1;
(statearr_56928_57123[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (14))){
var inst_56596 = (state_56813[(8)]);
var inst_56698 = (state_56813[(2)]);
var state_56813__$1 = (function (){var statearr_56930 = state_56813;
(statearr_56930[(32)] = inst_56698);

return statearr_56930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56813__$1,(20),inst_56596,(3));
} else {
if((state_val_56815 === (26))){
var inst_56709 = (state_56813[(2)]);
var inst_56710 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56711 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56712 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56711,57,inst_56709,"Should not flush 3,4 yet"];
var inst_56713 = cljs.core.PersistentHashMap.fromArrays(inst_56710,inst_56712);
var inst_56714 = cljs.test.report.call(null,inst_56713);
var state_56813__$1 = state_56813;
var statearr_56931_57124 = state_56813__$1;
(statearr_56931_57124[(2)] = inst_56714);

(statearr_56931_57124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (16))){
var _ = (function (){var statearr_56932 = state_56813;
(statearr_56932[(4)] = cljs.core.rest((state_56813[(4)])));

return statearr_56932;
})();
var state_56813__$1 = state_56813;
var ex56929 = (state_56813__$1[(2)]);
var statearr_56933_57125 = state_56813__$1;
(statearr_56933_57125[(5)] = ex56929);


var statearr_56934_57126 = state_56813__$1;
(statearr_56934_57126[(1)] = (15));

(statearr_56934_57126[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (38))){
var inst_56781 = (state_56813[(17)]);
var inst_56802 = (state_56813[(2)]);
var _ = (function (){var statearr_56935 = state_56813;
(statearr_56935[(4)] = cljs.core.rest((state_56813[(4)])));

return statearr_56935;
})();
var state_56813__$1 = (function (){var statearr_56936 = state_56813;
(statearr_56936[(33)] = inst_56802);

return statearr_56936;
})();
var statearr_56937_57127 = state_56813__$1;
(statearr_56937_57127[(2)] = inst_56781);

(statearr_56937_57127[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (30))){
var inst_56729 = (state_56813[(12)]);
var inst_56750 = (state_56813[(2)]);
var _ = (function (){var statearr_56938 = state_56813;
(statearr_56938[(4)] = cljs.core.rest((state_56813[(4)])));

return statearr_56938;
})();
var state_56813__$1 = (function (){var statearr_56939 = state_56813;
(statearr_56939[(34)] = inst_56750);

return statearr_56939;
})();
var statearr_56940_57128 = state_56813__$1;
(statearr_56940_57128[(2)] = inst_56729);

(statearr_56940_57128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (10))){
var inst_56623 = (state_56813[(31)]);
var inst_56635 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56636 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56637 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56638 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56639 = cljs.core.cons(inst_56638,inst_56623);
var inst_56640 = (new cljs.core.List(null,inst_56639,null,(1),null));
var inst_56641 = (new cljs.core.List(null,inst_56637,inst_56640,(2),null));
var inst_56642 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56636,47,inst_56641,"Should not flush before timeout"];
var inst_56643 = cljs.core.PersistentHashMap.fromArrays(inst_56635,inst_56642);
var inst_56644 = cljs.test.report.call(null,inst_56643);
var state_56813__$1 = state_56813;
var statearr_56941_57129 = state_56813__$1;
(statearr_56941_57129[(2)] = inst_56644);

(statearr_56941_57129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (18))){
var inst_56672 = (state_56813[(19)]);
var inst_56683 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56684 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56685 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56686 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56687 = cljs.core.cons(inst_56686,inst_56672);
var inst_56688 = (new cljs.core.List(null,inst_56687,null,(1),null));
var inst_56689 = (new cljs.core.List(null,inst_56685,inst_56688,(2),null));
var inst_56690 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56684,50,inst_56689,"Should flush after timeout"];
var inst_56691 = cljs.core.PersistentHashMap.fromArrays(inst_56683,inst_56690);
var inst_56692 = cljs.test.report.call(null,inst_56691);
var state_56813__$1 = state_56813;
var statearr_56943_57134 = state_56813__$1;
(statearr_56943_57134[(2)] = inst_56692);

(statearr_56943_57134[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (37))){
var inst_56780 = (state_56813[(16)]);
var inst_56791 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56792 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56793 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56794 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56795 = cljs.core.cons(inst_56794,inst_56780);
var inst_56796 = (new cljs.core.List(null,inst_56795,null,(1),null));
var inst_56797 = (new cljs.core.List(null,inst_56793,inst_56796,(2),null));
var inst_56798 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56792,60,inst_56797,"Should flush 3,4 after timeout from first message"];
var inst_56799 = cljs.core.PersistentHashMap.fromArrays(inst_56791,inst_56798);
var inst_56800 = cljs.test.report.call(null,inst_56799);
var state_56813__$1 = state_56813;
var statearr_56944_57136 = state_56813__$1;
(statearr_56944_57136[(2)] = inst_56800);

(statearr_56944_57136[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56815 === (8))){
var _ = (function (){var statearr_56945 = state_56813;
(statearr_56945[(4)] = cljs.core.rest((state_56813[(4)])));

return statearr_56945;
})();
var state_56813__$1 = state_56813;
var ex56942 = (state_56813__$1[(2)]);
var statearr_56946_57137 = state_56813__$1;
(statearr_56946_57137[(5)] = ex56942);


var statearr_56947_57138 = state_56813__$1;
(statearr_56947_57138[(1)] = (7));

(statearr_56947_57138[(5)] = null);



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
var statearr_56948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56948[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56948[(1)] = (1));

return statearr_56948;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56813){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56813);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56949){var ex__32294__auto__ = e56949;
var statearr_56950_57144 = state_56813;
(statearr_56950_57144[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56813[(4)]))){
var statearr_56951_57146 = state_56813;
(statearr_56951_57146[(1)] = cljs.core.first((state_56813[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57147 = state_56813;
state_56813 = G__57147;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56813){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56952 = f__32362__auto__();
(statearr_56952[(6)] = c__32361__auto__);

return statearr_56952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56587","meta56587",1316042904,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56586");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56586");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56586.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56586 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56586(meta56587){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586(meta56587));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56586(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953 = (function (meta56954){
this.meta56954 = meta56954;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56955,meta56954__$1){
var self__ = this;
var _56955__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953(meta56954__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56955){
var self__ = this;
var _56955__$1 = this;
return self__.meta56954;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56957 = (arguments.length - (1));
switch (G__56957) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953.prototype.apply = (function (self__,args56956){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56956)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_57021){
var state_val_57022 = (state_57021[(1)]);
if((state_val_57022 === (7))){
var inst_56974 = (state_57021[(2)]);
var inst_56975 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56976 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56977 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_56976,78,inst_56974,"Closing input should flush remaining"];
var inst_56978 = cljs.core.PersistentHashMap.fromArrays(inst_56975,inst_56977);
var inst_56979 = cljs.test.report.call(null,inst_56978);
var state_57021__$1 = state_57021;
var statearr_57023_57151 = state_57021__$1;
(statearr_57023_57151[(2)] = inst_56979);

(statearr_57023_57151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57022 === (1))){
var inst_56958 = (state_57021[(7)]);
var inst_56960 = (state_57021[(8)]);
var inst_56958__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56959 = cljs.core.PersistentVector.EMPTY;
var inst_56960__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56959);
var inst_56961 = (function (){var input_ch = inst_56958__$1;
var results = inst_56960__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56962 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56963 = [inst_56958__$1,inst_56961];
var inst_56964 = cljs.core.PersistentHashMap.fromArrays(inst_56962,inst_56963);
var inst_56965 = bb_web_ds_tools.components.async_buffer.create(inst_56964);
var state_57021__$1 = (function (){var statearr_57024 = state_57021;
(statearr_57024[(7)] = inst_56958__$1);

(statearr_57024[(8)] = inst_56960__$1);

(statearr_57024[(9)] = inst_56965);

return statearr_57024;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57021__$1,(2),inst_56958__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_57022 === (4))){
var inst_56973 = (state_57021[(2)]);
var state_57021__$1 = (function (){var statearr_57025 = state_57021;
(statearr_57025[(10)] = inst_56973);

return statearr_57025;
})();
var statearr_57026_57154 = state_57021__$1;
(statearr_57026_57154[(2)] = null);

(statearr_57026_57154[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57022 === (6))){
var inst_57018 = (state_57021[(2)]);
var inst_57019 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_57021__$1 = (function (){var statearr_57029 = state_57021;
(statearr_57029[(11)] = inst_57018);

return statearr_57029;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57021__$1,inst_57019);
} else {
if((state_val_57022 === (3))){
var inst_56958 = (state_57021[(7)]);
var inst_56969 = (state_57021[(2)]);
var inst_56970 = cljs.core.async.close_BANG_(inst_56958);
var inst_56971 = cljs.core.async.timeout((20));
var state_57021__$1 = (function (){var statearr_57033 = state_57021;
(statearr_57033[(12)] = inst_56969);

(statearr_57033[(13)] = inst_56970);

return statearr_57033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57021__$1,(4),inst_56971);
} else {
if((state_val_57022 === (2))){
var inst_56958 = (state_57021[(7)]);
var inst_56967 = (state_57021[(2)]);
var state_57021__$1 = (function (){var statearr_57035 = state_57021;
(statearr_57035[(14)] = inst_56967);

return statearr_57035;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57021__$1,(3),inst_56958,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_57022 === (11))){
var inst_56994 = (state_57021[(15)]);
var inst_57015 = (state_57021[(2)]);
var _ = (function (){var statearr_57036 = state_57021;
(statearr_57036[(4)] = cljs.core.rest((state_57021[(4)])));

return statearr_57036;
})();
var state_57021__$1 = (function (){var statearr_57037 = state_57021;
(statearr_57037[(16)] = inst_57015);

return statearr_57037;
})();
var statearr_57038_57160 = state_57021__$1;
(statearr_57038_57160[(2)] = inst_56994);

(statearr_57038_57160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57022 === (9))){
var inst_56993 = (state_57021[(17)]);
var inst_56996 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56997 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56998 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56999 = cljs.core.cons(inst_56998,inst_56993);
var inst_57000 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_56997,78,inst_56999,"Closing input should flush remaining"];
var inst_57001 = cljs.core.PersistentHashMap.fromArrays(inst_56996,inst_57000);
var inst_57002 = cljs.test.report.call(null,inst_57001);
var state_57021__$1 = state_57021;
var statearr_57039_57164 = state_57021__$1;
(statearr_57039_57164[(2)] = inst_57002);

(statearr_57039_57164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57022 === (5))){
var inst_56960 = (state_57021[(8)]);
var inst_56993 = (state_57021[(17)]);
var inst_56994 = (state_57021[(15)]);
var _ = (function (){var statearr_57041 = state_57021;
(statearr_57041[(4)] = cljs.core.cons((8),(state_57021[(4)])));

return statearr_57041;
})();
var inst_56985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56986 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56987 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_56988 = (new cljs.core.PersistentVector(null,2,(5),inst_56986,inst_56987,null));
var inst_56989 = [inst_56988];
var inst_56990 = (new cljs.core.PersistentVector(null,1,(5),inst_56985,inst_56989,null));
var inst_56991 = cljs.core.deref(inst_56960);
var inst_56992 = (new cljs.core.List(null,inst_56991,null,(1),null));
var inst_56993__$1 = (new cljs.core.List(null,inst_56990,inst_56992,(2),null));
var inst_56994__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56993__$1);
var state_57021__$1 = (function (){var statearr_57042 = state_57021;
(statearr_57042[(17)] = inst_56993__$1);

(statearr_57042[(15)] = inst_56994__$1);

return statearr_57042;
})();
if(cljs.core.truth_(inst_56994__$1)){
var statearr_57043_57166 = state_57021__$1;
(statearr_57043_57166[(1)] = (9));

} else {
var statearr_57044_57167 = state_57021__$1;
(statearr_57044_57167[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57022 === (10))){
var inst_56993 = (state_57021[(17)]);
var inst_57004 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57005 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57006 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_57007 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57008 = cljs.core.cons(inst_57007,inst_56993);
var inst_57009 = (new cljs.core.List(null,inst_57008,null,(1),null));
var inst_57010 = (new cljs.core.List(null,inst_57006,inst_57009,(2),null));
var inst_57011 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_57005,78,inst_57010,"Closing input should flush remaining"];
var inst_57012 = cljs.core.PersistentHashMap.fromArrays(inst_57004,inst_57011);
var inst_57013 = cljs.test.report.call(null,inst_57012);
var state_57021__$1 = state_57021;
var statearr_57045_57168 = state_57021__$1;
(statearr_57045_57168[(2)] = inst_57013);

(statearr_57045_57168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57022 === (8))){
var _ = (function (){var statearr_57046 = state_57021;
(statearr_57046[(4)] = cljs.core.rest((state_57021[(4)])));

return statearr_57046;
})();
var state_57021__$1 = state_57021;
var ex57040 = (state_57021__$1[(2)]);
var statearr_57048_57169 = state_57021__$1;
(statearr_57048_57169[(5)] = ex57040);


var statearr_57051_57170 = state_57021__$1;
(statearr_57051_57170[(1)] = (7));

(statearr_57051_57170[(5)] = null);



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
var statearr_57053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57053[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57053[(1)] = (1));

return statearr_57053;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_57021){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_57021);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57056){var ex__32294__auto__ = e57056;
var statearr_57057_57172 = state_57021;
(statearr_57057_57172[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_57021[(4)]))){
var statearr_57058_57173 = state_57021;
(statearr_57058_57173[(1)] = cljs.core.first((state_57021[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57174 = state_57021;
state_57021 = G__57174;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_57021){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_57021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_57059 = f__32362__auto__();
(statearr_57059[(6)] = c__32361__auto__);

return statearr_57059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56954","meta56954",532830862,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56953");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56953");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56953.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56953 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56953(meta56954){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953(meta56954));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56953(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
