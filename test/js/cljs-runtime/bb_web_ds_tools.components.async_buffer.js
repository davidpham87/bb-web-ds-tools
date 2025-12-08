goog.provide('bb_web_ds_tools.components.async_buffer');
/**
 * Creates a buffered message processor.
 * Arguments:
 * - `input-chan`: Channel to read messages from.
 * - `flush-interval-ms`: (Optional) Interval in ms to auto-flush after the first message arrives.
 * - `on-flush`: Function called with a vector of buffered messages.
 * 
 * Returns:
 * - A function that, when called, triggers a manual flush.
 * 
 */
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__49404){
var map__49405 = p__49404;
var map__49405__$1 = cljs.core.__destructure_map(map__49405);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49405__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49405__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49405__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32431__auto___49549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_49492){
var state_val_49493 = (state_49492[(1)]);
if((state_val_49493 === (7))){
var inst_49430 = (state_49492[(7)]);
var inst_49426 = (state_49492[(8)]);
var inst_49424 = (state_49492[(2)]);
var inst_49425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49424,(0),null);
var inst_49426__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49424,(1),null);
var inst_49430__$1 = cljs.core._EQ_;
var inst_49431 = (inst_49430__$1.cljs$core$IFn$_invoke$arity$2 ? inst_49430__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_49426__$1) : inst_49430__$1.call(null,input_chan,inst_49426__$1));
var state_49492__$1 = (function (){var statearr_49495 = state_49492;
(statearr_49495[(9)] = inst_49425);

(statearr_49495[(8)] = inst_49426__$1);

(statearr_49495[(7)] = inst_49430__$1);

return statearr_49495;
})();
if(cljs.core.truth_(inst_49431)){
var statearr_49496_49550 = state_49492__$1;
(statearr_49496_49550[(1)] = (8));

} else {
var statearr_49497_49551 = state_49492__$1;
(statearr_49497_49551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (20))){
var inst_49450 = cljs.core.async.timeout(flush_interval_ms);
var state_49492__$1 = state_49492;
var statearr_49498_49552 = state_49492__$1;
(statearr_49498_49552[(2)] = inst_49450);

(statearr_49498_49552[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (27))){
var state_49492__$1 = state_49492;
var statearr_49499_49553 = state_49492__$1;
(statearr_49499_49553[(2)] = null);

(statearr_49499_49553[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (1))){
var inst_49407 = cljs.core.PersistentVector.EMPTY;
var inst_49408 = inst_49407;
var inst_49409 = null;
var state_49492__$1 = (function (){var statearr_49500 = state_49492;
(statearr_49500[(10)] = inst_49408);

(statearr_49500[(11)] = inst_49409);

return statearr_49500;
})();
var statearr_49501_49554 = state_49492__$1;
(statearr_49501_49554[(2)] = null);

(statearr_49501_49554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (24))){
var inst_49430 = (state_49492[(7)]);
var inst_49409 = (state_49492[(11)]);
var inst_49426 = (state_49492[(8)]);
var inst_49469 = (inst_49430.cljs$core$IFn$_invoke$arity$2 ? inst_49430.cljs$core$IFn$_invoke$arity$2(inst_49409,inst_49426) : inst_49430.call(null,inst_49409,inst_49426));
var state_49492__$1 = state_49492;
if(cljs.core.truth_(inst_49469)){
var statearr_49502_49555 = state_49492__$1;
(statearr_49502_49555[(1)] = (29));

} else {
var statearr_49503_49556 = state_49492__$1;
(statearr_49503_49556[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (4))){
var inst_49417 = (state_49492[(12)]);
var inst_49409 = (state_49492[(11)]);
var inst_49419 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49417,inst_49409);
var state_49492__$1 = state_49492;
var statearr_49504_49557 = state_49492__$1;
(statearr_49504_49557[(2)] = inst_49419);

(statearr_49504_49557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (15))){
var state_49492__$1 = state_49492;
var statearr_49505_49558 = state_49492__$1;
(statearr_49505_49558[(2)] = null);

(statearr_49505_49558[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (21))){
var inst_49409 = (state_49492[(11)]);
var state_49492__$1 = state_49492;
var statearr_49506_49559 = state_49492__$1;
(statearr_49506_49559[(2)] = inst_49409);

(statearr_49506_49559[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (31))){
var inst_49484 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49507_49560 = state_49492__$1;
(statearr_49507_49560[(2)] = inst_49484);

(statearr_49507_49560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (32))){
var inst_49408 = (state_49492[(10)]);
var inst_49473 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49408) : on_flush.call(null,inst_49408));
var state_49492__$1 = state_49492;
var statearr_49508_49561 = state_49492__$1;
(statearr_49508_49561[(2)] = inst_49473);

(statearr_49508_49561[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (33))){
var state_49492__$1 = state_49492;
var statearr_49509_49562 = state_49492__$1;
(statearr_49509_49562[(2)] = null);

(statearr_49509_49562[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (13))){
var inst_49456 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49510_49563 = state_49492__$1;
(statearr_49510_49563[(2)] = inst_49456);

(statearr_49510_49563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (22))){
var inst_49442 = (state_49492[(13)]);
var inst_49453 = (state_49492[(2)]);
var inst_49408 = inst_49442;
var inst_49409 = inst_49453;
var state_49492__$1 = (function (){var statearr_49511 = state_49492;
(statearr_49511[(10)] = inst_49408);

(statearr_49511[(11)] = inst_49409);

return statearr_49511;
})();
var statearr_49512_49564 = state_49492__$1;
(statearr_49512_49564[(2)] = null);

(statearr_49512_49564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (29))){
var inst_49408 = (state_49492[(10)]);
var inst_49471 = cljs.core.seq(inst_49408);
var state_49492__$1 = state_49492;
if(inst_49471){
var statearr_49513_49565 = state_49492__$1;
(statearr_49513_49565[(1)] = (32));

} else {
var statearr_49514_49566 = state_49492__$1;
(statearr_49514_49566[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (6))){
var inst_49422 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
return cljs.core.async.ioc_alts_BANG_(state_49492__$1,(7),inst_49422);
} else {
if((state_val_49493 === (28))){
var inst_49465 = (state_49492[(2)]);
var inst_49466 = cljs.core.PersistentVector.EMPTY;
var inst_49408 = inst_49466;
var inst_49409 = null;
var state_49492__$1 = (function (){var statearr_49515 = state_49492;
(statearr_49515[(14)] = inst_49465);

(statearr_49515[(10)] = inst_49408);

(statearr_49515[(11)] = inst_49409);

return statearr_49515;
})();
var statearr_49516_49567 = state_49492__$1;
(statearr_49516_49567[(2)] = null);

(statearr_49516_49567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (25))){
var inst_49486 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49517_49568 = state_49492__$1;
(statearr_49517_49568[(2)] = inst_49486);

(statearr_49517_49568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (34))){
var inst_49476 = (state_49492[(2)]);
var inst_49477 = cljs.core.PersistentVector.EMPTY;
var inst_49408 = inst_49477;
var inst_49409 = null;
var state_49492__$1 = (function (){var statearr_49518 = state_49492;
(statearr_49518[(15)] = inst_49476);

(statearr_49518[(10)] = inst_49408);

(statearr_49518[(11)] = inst_49409);

return statearr_49518;
})();
var statearr_49519_49569 = state_49492__$1;
(statearr_49519_49569[(2)] = null);

(statearr_49519_49569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (17))){
var inst_49409 = (state_49492[(11)]);
var inst_49445 = (inst_49409 == null);
var state_49492__$1 = state_49492;
var statearr_49520_49570 = state_49492__$1;
(statearr_49520_49570[(2)] = inst_49445);

(statearr_49520_49570[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (3))){
var inst_49490 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49492__$1,inst_49490);
} else {
if((state_val_49493 === (12))){
var inst_49408 = (state_49492[(10)]);
var inst_49425 = (state_49492[(9)]);
var inst_49443 = (state_49492[(16)]);
var inst_49442 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49408,inst_49425);
var inst_49443__$1 = flush_interval_ms;
var state_49492__$1 = (function (){var statearr_49521 = state_49492;
(statearr_49521[(13)] = inst_49442);

(statearr_49521[(16)] = inst_49443__$1);

return statearr_49521;
})();
if(cljs.core.truth_(inst_49443__$1)){
var statearr_49522_49571 = state_49492__$1;
(statearr_49522_49571[(1)] = (17));

} else {
var statearr_49523_49572 = state_49492__$1;
(statearr_49523_49572[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (2))){
var inst_49409 = (state_49492[(11)]);
var inst_49415 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49416 = [input_chan,flush_ch];
var inst_49417 = (new cljs.core.PersistentVector(null,2,(5),inst_49415,inst_49416,null));
var state_49492__$1 = (function (){var statearr_49524 = state_49492;
(statearr_49524[(12)] = inst_49417);

return statearr_49524;
})();
if(cljs.core.truth_(inst_49409)){
var statearr_49525_49573 = state_49492__$1;
(statearr_49525_49573[(1)] = (4));

} else {
var statearr_49526_49574 = state_49492__$1;
(statearr_49526_49574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (23))){
var inst_49408 = (state_49492[(10)]);
var inst_49460 = cljs.core.seq(inst_49408);
var state_49492__$1 = state_49492;
if(inst_49460){
var statearr_49527_49575 = state_49492__$1;
(statearr_49527_49575[(1)] = (26));

} else {
var statearr_49528_49576 = state_49492__$1;
(statearr_49528_49576[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (19))){
var inst_49448 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
if(cljs.core.truth_(inst_49448)){
var statearr_49529_49577 = state_49492__$1;
(statearr_49529_49577[(1)] = (20));

} else {
var statearr_49530_49578 = state_49492__$1;
(statearr_49530_49578[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (11))){
var inst_49408 = (state_49492[(10)]);
var inst_49435 = cljs.core.seq(inst_49408);
var state_49492__$1 = state_49492;
if(inst_49435){
var statearr_49531_49579 = state_49492__$1;
(statearr_49531_49579[(1)] = (14));

} else {
var statearr_49532_49580 = state_49492__$1;
(statearr_49532_49580[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (9))){
var inst_49430 = (state_49492[(7)]);
var inst_49426 = (state_49492[(8)]);
var inst_49458 = (inst_49430.cljs$core$IFn$_invoke$arity$2 ? inst_49430.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_49426) : inst_49430.call(null,flush_ch,inst_49426));
var state_49492__$1 = state_49492;
if(cljs.core.truth_(inst_49458)){
var statearr_49533_49581 = state_49492__$1;
(statearr_49533_49581[(1)] = (23));

} else {
var statearr_49534_49582 = state_49492__$1;
(statearr_49534_49582[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (5))){
var inst_49417 = (state_49492[(12)]);
var state_49492__$1 = state_49492;
var statearr_49535_49583 = state_49492__$1;
(statearr_49535_49583[(2)] = inst_49417);

(statearr_49535_49583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (14))){
var inst_49408 = (state_49492[(10)]);
var inst_49437 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49408) : on_flush.call(null,inst_49408));
var state_49492__$1 = state_49492;
var statearr_49536_49584 = state_49492__$1;
(statearr_49536_49584[(2)] = inst_49437);

(statearr_49536_49584[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (26))){
var inst_49408 = (state_49492[(10)]);
var inst_49462 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49408) : on_flush.call(null,inst_49408));
var state_49492__$1 = state_49492;
var statearr_49537_49585 = state_49492__$1;
(statearr_49537_49585[(2)] = inst_49462);

(statearr_49537_49585[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (16))){
var inst_49440 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49538_49586 = state_49492__$1;
(statearr_49538_49586[(2)] = inst_49440);

(statearr_49538_49586[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (30))){
var inst_49426 = (state_49492[(8)]);
var inst_49480 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49426)].join('');
var inst_49481 = (new Error(inst_49480));
var inst_49482 = (function(){throw inst_49481})();
var state_49492__$1 = state_49492;
var statearr_49539_49587 = state_49492__$1;
(statearr_49539_49587[(2)] = inst_49482);

(statearr_49539_49587[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (10))){
var inst_49488 = (state_49492[(2)]);
var state_49492__$1 = state_49492;
var statearr_49540_49588 = state_49492__$1;
(statearr_49540_49588[(2)] = inst_49488);

(statearr_49540_49588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (18))){
var inst_49443 = (state_49492[(16)]);
var state_49492__$1 = state_49492;
var statearr_49541_49589 = state_49492__$1;
(statearr_49541_49589[(2)] = inst_49443);

(statearr_49541_49589[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49493 === (8))){
var inst_49425 = (state_49492[(9)]);
var inst_49433 = (inst_49425 == null);
var state_49492__$1 = state_49492;
if(cljs.core.truth_(inst_49433)){
var statearr_49542_49590 = state_49492__$1;
(statearr_49542_49590[(1)] = (11));

} else {
var statearr_49543_49591 = state_49492__$1;
(statearr_49543_49591[(1)] = (12));

}

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
});
return (function() {
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__ = null;
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____0 = (function (){
var statearr_49544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49544[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__);

(statearr_49544[(1)] = (1));

return statearr_49544;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____1 = (function (state_49492){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_49492);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e49545){var ex__32350__auto__ = e49545;
var statearr_49546_49592 = state_49492;
(statearr_49546_49592[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_49492[(4)]))){
var statearr_49547_49593 = state_49492;
(statearr_49547_49593[(1)] = cljs.core.first((state_49492[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49594 = state_49492;
state_49492 = G__49594;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__ = function(state_49492){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____1.call(this,state_49492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_49548 = f__32432__auto__();
(statearr_49548[(6)] = c__32431__auto___49549);

return statearr_49548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
