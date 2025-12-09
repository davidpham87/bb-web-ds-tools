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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__49428){
var map__49429 = p__49428;
var map__49429__$1 = cljs.core.__destructure_map(map__49429);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49429__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49429__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49429__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32462__auto___49572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_49516){
var state_val_49517 = (state_49516[(1)]);
if((state_val_49517 === (7))){
var inst_49454 = (state_49516[(7)]);
var inst_49450 = (state_49516[(8)]);
var inst_49448 = (state_49516[(2)]);
var inst_49449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49448,(0),null);
var inst_49450__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49448,(1),null);
var inst_49454__$1 = cljs.core._EQ_;
var inst_49455 = (inst_49454__$1.cljs$core$IFn$_invoke$arity$2 ? inst_49454__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_49450__$1) : inst_49454__$1.call(null,input_chan,inst_49450__$1));
var state_49516__$1 = (function (){var statearr_49518 = state_49516;
(statearr_49518[(9)] = inst_49449);

(statearr_49518[(8)] = inst_49450__$1);

(statearr_49518[(7)] = inst_49454__$1);

return statearr_49518;
})();
if(cljs.core.truth_(inst_49455)){
var statearr_49519_49573 = state_49516__$1;
(statearr_49519_49573[(1)] = (8));

} else {
var statearr_49520_49574 = state_49516__$1;
(statearr_49520_49574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (20))){
var inst_49474 = cljs.core.async.timeout(flush_interval_ms);
var state_49516__$1 = state_49516;
var statearr_49521_49575 = state_49516__$1;
(statearr_49521_49575[(2)] = inst_49474);

(statearr_49521_49575[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (27))){
var state_49516__$1 = state_49516;
var statearr_49522_49576 = state_49516__$1;
(statearr_49522_49576[(2)] = null);

(statearr_49522_49576[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (1))){
var inst_49431 = cljs.core.PersistentVector.EMPTY;
var inst_49432 = inst_49431;
var inst_49433 = null;
var state_49516__$1 = (function (){var statearr_49523 = state_49516;
(statearr_49523[(10)] = inst_49432);

(statearr_49523[(11)] = inst_49433);

return statearr_49523;
})();
var statearr_49524_49577 = state_49516__$1;
(statearr_49524_49577[(2)] = null);

(statearr_49524_49577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (24))){
var inst_49454 = (state_49516[(7)]);
var inst_49433 = (state_49516[(11)]);
var inst_49450 = (state_49516[(8)]);
var inst_49493 = (inst_49454.cljs$core$IFn$_invoke$arity$2 ? inst_49454.cljs$core$IFn$_invoke$arity$2(inst_49433,inst_49450) : inst_49454.call(null,inst_49433,inst_49450));
var state_49516__$1 = state_49516;
if(cljs.core.truth_(inst_49493)){
var statearr_49525_49578 = state_49516__$1;
(statearr_49525_49578[(1)] = (29));

} else {
var statearr_49526_49579 = state_49516__$1;
(statearr_49526_49579[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (4))){
var inst_49441 = (state_49516[(12)]);
var inst_49433 = (state_49516[(11)]);
var inst_49443 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49441,inst_49433);
var state_49516__$1 = state_49516;
var statearr_49527_49580 = state_49516__$1;
(statearr_49527_49580[(2)] = inst_49443);

(statearr_49527_49580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (15))){
var state_49516__$1 = state_49516;
var statearr_49528_49581 = state_49516__$1;
(statearr_49528_49581[(2)] = null);

(statearr_49528_49581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (21))){
var inst_49433 = (state_49516[(11)]);
var state_49516__$1 = state_49516;
var statearr_49529_49582 = state_49516__$1;
(statearr_49529_49582[(2)] = inst_49433);

(statearr_49529_49582[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (31))){
var inst_49508 = (state_49516[(2)]);
var state_49516__$1 = state_49516;
var statearr_49530_49583 = state_49516__$1;
(statearr_49530_49583[(2)] = inst_49508);

(statearr_49530_49583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (32))){
var inst_49432 = (state_49516[(10)]);
var inst_49497 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49432) : on_flush.call(null,inst_49432));
var state_49516__$1 = state_49516;
var statearr_49531_49584 = state_49516__$1;
(statearr_49531_49584[(2)] = inst_49497);

(statearr_49531_49584[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (33))){
var state_49516__$1 = state_49516;
var statearr_49532_49585 = state_49516__$1;
(statearr_49532_49585[(2)] = null);

(statearr_49532_49585[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (13))){
var inst_49480 = (state_49516[(2)]);
var state_49516__$1 = state_49516;
var statearr_49533_49586 = state_49516__$1;
(statearr_49533_49586[(2)] = inst_49480);

(statearr_49533_49586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (22))){
var inst_49466 = (state_49516[(13)]);
var inst_49477 = (state_49516[(2)]);
var inst_49432 = inst_49466;
var inst_49433 = inst_49477;
var state_49516__$1 = (function (){var statearr_49534 = state_49516;
(statearr_49534[(10)] = inst_49432);

(statearr_49534[(11)] = inst_49433);

return statearr_49534;
})();
var statearr_49535_49587 = state_49516__$1;
(statearr_49535_49587[(2)] = null);

(statearr_49535_49587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (29))){
var inst_49432 = (state_49516[(10)]);
var inst_49495 = cljs.core.seq(inst_49432);
var state_49516__$1 = state_49516;
if(inst_49495){
var statearr_49536_49588 = state_49516__$1;
(statearr_49536_49588[(1)] = (32));

} else {
var statearr_49537_49589 = state_49516__$1;
(statearr_49537_49589[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (6))){
var inst_49446 = (state_49516[(2)]);
var state_49516__$1 = state_49516;
return cljs.core.async.ioc_alts_BANG_(state_49516__$1,(7),inst_49446);
} else {
if((state_val_49517 === (28))){
var inst_49489 = (state_49516[(2)]);
var inst_49490 = cljs.core.PersistentVector.EMPTY;
var inst_49432 = inst_49490;
var inst_49433 = null;
var state_49516__$1 = (function (){var statearr_49538 = state_49516;
(statearr_49538[(14)] = inst_49489);

(statearr_49538[(10)] = inst_49432);

(statearr_49538[(11)] = inst_49433);

return statearr_49538;
})();
var statearr_49539_49590 = state_49516__$1;
(statearr_49539_49590[(2)] = null);

(statearr_49539_49590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (25))){
var inst_49510 = (state_49516[(2)]);
var state_49516__$1 = state_49516;
var statearr_49540_49591 = state_49516__$1;
(statearr_49540_49591[(2)] = inst_49510);

(statearr_49540_49591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (34))){
var inst_49500 = (state_49516[(2)]);
var inst_49501 = cljs.core.PersistentVector.EMPTY;
var inst_49432 = inst_49501;
var inst_49433 = null;
var state_49516__$1 = (function (){var statearr_49541 = state_49516;
(statearr_49541[(15)] = inst_49500);

(statearr_49541[(10)] = inst_49432);

(statearr_49541[(11)] = inst_49433);

return statearr_49541;
})();
var statearr_49542_49592 = state_49516__$1;
(statearr_49542_49592[(2)] = null);

(statearr_49542_49592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (17))){
var inst_49433 = (state_49516[(11)]);
var inst_49469 = (inst_49433 == null);
var state_49516__$1 = state_49516;
var statearr_49543_49593 = state_49516__$1;
(statearr_49543_49593[(2)] = inst_49469);

(statearr_49543_49593[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (3))){
var inst_49514 = (state_49516[(2)]);
var state_49516__$1 = state_49516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49516__$1,inst_49514);
} else {
if((state_val_49517 === (12))){
var inst_49432 = (state_49516[(10)]);
var inst_49449 = (state_49516[(9)]);
var inst_49467 = (state_49516[(16)]);
var inst_49466 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49432,inst_49449);
var inst_49467__$1 = flush_interval_ms;
var state_49516__$1 = (function (){var statearr_49544 = state_49516;
(statearr_49544[(13)] = inst_49466);

(statearr_49544[(16)] = inst_49467__$1);

return statearr_49544;
})();
if(cljs.core.truth_(inst_49467__$1)){
var statearr_49545_49594 = state_49516__$1;
(statearr_49545_49594[(1)] = (17));

} else {
var statearr_49546_49595 = state_49516__$1;
(statearr_49546_49595[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (2))){
var inst_49433 = (state_49516[(11)]);
var inst_49439 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49440 = [input_chan,flush_ch];
var inst_49441 = (new cljs.core.PersistentVector(null,2,(5),inst_49439,inst_49440,null));
var state_49516__$1 = (function (){var statearr_49547 = state_49516;
(statearr_49547[(12)] = inst_49441);

return statearr_49547;
})();
if(cljs.core.truth_(inst_49433)){
var statearr_49548_49596 = state_49516__$1;
(statearr_49548_49596[(1)] = (4));

} else {
var statearr_49549_49597 = state_49516__$1;
(statearr_49549_49597[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (23))){
var inst_49432 = (state_49516[(10)]);
var inst_49484 = cljs.core.seq(inst_49432);
var state_49516__$1 = state_49516;
if(inst_49484){
var statearr_49550_49598 = state_49516__$1;
(statearr_49550_49598[(1)] = (26));

} else {
var statearr_49551_49599 = state_49516__$1;
(statearr_49551_49599[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (19))){
var inst_49472 = (state_49516[(2)]);
var state_49516__$1 = state_49516;
if(cljs.core.truth_(inst_49472)){
var statearr_49552_49600 = state_49516__$1;
(statearr_49552_49600[(1)] = (20));

} else {
var statearr_49553_49601 = state_49516__$1;
(statearr_49553_49601[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (11))){
var inst_49432 = (state_49516[(10)]);
var inst_49459 = cljs.core.seq(inst_49432);
var state_49516__$1 = state_49516;
if(inst_49459){
var statearr_49554_49602 = state_49516__$1;
(statearr_49554_49602[(1)] = (14));

} else {
var statearr_49555_49603 = state_49516__$1;
(statearr_49555_49603[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (9))){
var inst_49454 = (state_49516[(7)]);
var inst_49450 = (state_49516[(8)]);
var inst_49482 = (inst_49454.cljs$core$IFn$_invoke$arity$2 ? inst_49454.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_49450) : inst_49454.call(null,flush_ch,inst_49450));
var state_49516__$1 = state_49516;
if(cljs.core.truth_(inst_49482)){
var statearr_49556_49604 = state_49516__$1;
(statearr_49556_49604[(1)] = (23));

} else {
var statearr_49557_49605 = state_49516__$1;
(statearr_49557_49605[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (5))){
var inst_49441 = (state_49516[(12)]);
var state_49516__$1 = state_49516;
var statearr_49558_49606 = state_49516__$1;
(statearr_49558_49606[(2)] = inst_49441);

(statearr_49558_49606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (14))){
var inst_49432 = (state_49516[(10)]);
var inst_49461 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49432) : on_flush.call(null,inst_49432));
var state_49516__$1 = state_49516;
var statearr_49559_49607 = state_49516__$1;
(statearr_49559_49607[(2)] = inst_49461);

(statearr_49559_49607[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (26))){
var inst_49432 = (state_49516[(10)]);
var inst_49486 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49432) : on_flush.call(null,inst_49432));
var state_49516__$1 = state_49516;
var statearr_49560_49608 = state_49516__$1;
(statearr_49560_49608[(2)] = inst_49486);

(statearr_49560_49608[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (16))){
var inst_49464 = (state_49516[(2)]);
var state_49516__$1 = state_49516;
var statearr_49561_49609 = state_49516__$1;
(statearr_49561_49609[(2)] = inst_49464);

(statearr_49561_49609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (30))){
var inst_49450 = (state_49516[(8)]);
var inst_49504 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49450)].join('');
var inst_49505 = (new Error(inst_49504));
var inst_49506 = (function(){throw inst_49505})();
var state_49516__$1 = state_49516;
var statearr_49562_49610 = state_49516__$1;
(statearr_49562_49610[(2)] = inst_49506);

(statearr_49562_49610[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (10))){
var inst_49512 = (state_49516[(2)]);
var state_49516__$1 = state_49516;
var statearr_49563_49611 = state_49516__$1;
(statearr_49563_49611[(2)] = inst_49512);

(statearr_49563_49611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (18))){
var inst_49467 = (state_49516[(16)]);
var state_49516__$1 = state_49516;
var statearr_49564_49612 = state_49516__$1;
(statearr_49564_49612[(2)] = inst_49467);

(statearr_49564_49612[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49517 === (8))){
var inst_49449 = (state_49516[(9)]);
var inst_49457 = (inst_49449 == null);
var state_49516__$1 = state_49516;
if(cljs.core.truth_(inst_49457)){
var statearr_49565_49613 = state_49516__$1;
(statearr_49565_49613[(1)] = (11));

} else {
var statearr_49566_49614 = state_49516__$1;
(statearr_49566_49614[(1)] = (12));

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
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto__ = null;
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto____0 = (function (){
var statearr_49567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49567[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto__);

(statearr_49567[(1)] = (1));

return statearr_49567;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto____1 = (function (state_49516){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_49516);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e49568){var ex__32377__auto__ = e49568;
var statearr_49569_49615 = state_49516;
(statearr_49569_49615[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_49516[(4)]))){
var statearr_49570_49616 = state_49516;
(statearr_49570_49616[(1)] = cljs.core.first((state_49516[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49617 = state_49516;
state_49516 = G__49617;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto__ = function(state_49516){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto____1.call(this,state_49516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_49571 = f__32463__auto__();
(statearr_49571[(6)] = c__32462__auto___49572);

return statearr_49571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
