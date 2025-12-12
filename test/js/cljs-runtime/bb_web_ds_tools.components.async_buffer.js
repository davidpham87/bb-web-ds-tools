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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__49450){
var map__49451 = p__49450;
var map__49451__$1 = cljs.core.__destructure_map(map__49451);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49451__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49451__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49451__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32476__auto___49636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_49541){
var state_val_49542 = (state_49541[(1)]);
if((state_val_49542 === (7))){
var inst_49479 = (state_49541[(7)]);
var inst_49474 = (state_49541[(8)]);
var inst_49471 = (state_49541[(2)]);
var inst_49472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49471,(0),null);
var inst_49474__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49471,(1),null);
var inst_49479__$1 = cljs.core._EQ_;
var inst_49480 = (inst_49479__$1.cljs$core$IFn$_invoke$arity$2 ? inst_49479__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_49474__$1) : inst_49479__$1.call(null,input_chan,inst_49474__$1));
var state_49541__$1 = (function (){var statearr_49543 = state_49541;
(statearr_49543[(9)] = inst_49472);

(statearr_49543[(8)] = inst_49474__$1);

(statearr_49543[(7)] = inst_49479__$1);

return statearr_49543;
})();
if(cljs.core.truth_(inst_49480)){
var statearr_49544_49637 = state_49541__$1;
(statearr_49544_49637[(1)] = (8));

} else {
var statearr_49545_49638 = state_49541__$1;
(statearr_49545_49638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (20))){
var inst_49499 = cljs.core.async.timeout(flush_interval_ms);
var state_49541__$1 = state_49541;
var statearr_49546_49639 = state_49541__$1;
(statearr_49546_49639[(2)] = inst_49499);

(statearr_49546_49639[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (27))){
var state_49541__$1 = state_49541;
var statearr_49547_49640 = state_49541__$1;
(statearr_49547_49640[(2)] = null);

(statearr_49547_49640[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (1))){
var inst_49453 = cljs.core.PersistentVector.EMPTY;
var inst_49454 = inst_49453;
var inst_49455 = null;
var state_49541__$1 = (function (){var statearr_49548 = state_49541;
(statearr_49548[(10)] = inst_49454);

(statearr_49548[(11)] = inst_49455);

return statearr_49548;
})();
var statearr_49550_49641 = state_49541__$1;
(statearr_49550_49641[(2)] = null);

(statearr_49550_49641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (24))){
var inst_49479 = (state_49541[(7)]);
var inst_49455 = (state_49541[(11)]);
var inst_49474 = (state_49541[(8)]);
var inst_49518 = (inst_49479.cljs$core$IFn$_invoke$arity$2 ? inst_49479.cljs$core$IFn$_invoke$arity$2(inst_49455,inst_49474) : inst_49479.call(null,inst_49455,inst_49474));
var state_49541__$1 = state_49541;
if(cljs.core.truth_(inst_49518)){
var statearr_49552_49642 = state_49541__$1;
(statearr_49552_49642[(1)] = (29));

} else {
var statearr_49553_49643 = state_49541__$1;
(statearr_49553_49643[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (4))){
var inst_49464 = (state_49541[(12)]);
var inst_49455 = (state_49541[(11)]);
var inst_49466 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49464,inst_49455);
var state_49541__$1 = state_49541;
var statearr_49554_49644 = state_49541__$1;
(statearr_49554_49644[(2)] = inst_49466);

(statearr_49554_49644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (15))){
var state_49541__$1 = state_49541;
var statearr_49555_49645 = state_49541__$1;
(statearr_49555_49645[(2)] = null);

(statearr_49555_49645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (21))){
var inst_49455 = (state_49541[(11)]);
var state_49541__$1 = state_49541;
var statearr_49556_49646 = state_49541__$1;
(statearr_49556_49646[(2)] = inst_49455);

(statearr_49556_49646[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (31))){
var inst_49533 = (state_49541[(2)]);
var state_49541__$1 = state_49541;
var statearr_49557_49647 = state_49541__$1;
(statearr_49557_49647[(2)] = inst_49533);

(statearr_49557_49647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (32))){
var inst_49454 = (state_49541[(10)]);
var inst_49522 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49454) : on_flush.call(null,inst_49454));
var state_49541__$1 = state_49541;
var statearr_49558_49648 = state_49541__$1;
(statearr_49558_49648[(2)] = inst_49522);

(statearr_49558_49648[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (33))){
var state_49541__$1 = state_49541;
var statearr_49559_49649 = state_49541__$1;
(statearr_49559_49649[(2)] = null);

(statearr_49559_49649[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (13))){
var inst_49505 = (state_49541[(2)]);
var state_49541__$1 = state_49541;
var statearr_49560_49650 = state_49541__$1;
(statearr_49560_49650[(2)] = inst_49505);

(statearr_49560_49650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (22))){
var inst_49491 = (state_49541[(13)]);
var inst_49502 = (state_49541[(2)]);
var inst_49454 = inst_49491;
var inst_49455 = inst_49502;
var state_49541__$1 = (function (){var statearr_49561 = state_49541;
(statearr_49561[(10)] = inst_49454);

(statearr_49561[(11)] = inst_49455);

return statearr_49561;
})();
var statearr_49562_49651 = state_49541__$1;
(statearr_49562_49651[(2)] = null);

(statearr_49562_49651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (29))){
var inst_49454 = (state_49541[(10)]);
var inst_49520 = cljs.core.seq(inst_49454);
var state_49541__$1 = state_49541;
if(inst_49520){
var statearr_49565_49652 = state_49541__$1;
(statearr_49565_49652[(1)] = (32));

} else {
var statearr_49566_49653 = state_49541__$1;
(statearr_49566_49653[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (6))){
var inst_49469 = (state_49541[(2)]);
var state_49541__$1 = state_49541;
return cljs.core.async.ioc_alts_BANG_(state_49541__$1,(7),inst_49469);
} else {
if((state_val_49542 === (28))){
var inst_49514 = (state_49541[(2)]);
var inst_49515 = cljs.core.PersistentVector.EMPTY;
var inst_49454 = inst_49515;
var inst_49455 = null;
var state_49541__$1 = (function (){var statearr_49567 = state_49541;
(statearr_49567[(14)] = inst_49514);

(statearr_49567[(10)] = inst_49454);

(statearr_49567[(11)] = inst_49455);

return statearr_49567;
})();
var statearr_49568_49654 = state_49541__$1;
(statearr_49568_49654[(2)] = null);

(statearr_49568_49654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (25))){
var inst_49535 = (state_49541[(2)]);
var state_49541__$1 = state_49541;
var statearr_49569_49655 = state_49541__$1;
(statearr_49569_49655[(2)] = inst_49535);

(statearr_49569_49655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (34))){
var inst_49525 = (state_49541[(2)]);
var inst_49526 = cljs.core.PersistentVector.EMPTY;
var inst_49454 = inst_49526;
var inst_49455 = null;
var state_49541__$1 = (function (){var statearr_49570 = state_49541;
(statearr_49570[(15)] = inst_49525);

(statearr_49570[(10)] = inst_49454);

(statearr_49570[(11)] = inst_49455);

return statearr_49570;
})();
var statearr_49571_49656 = state_49541__$1;
(statearr_49571_49656[(2)] = null);

(statearr_49571_49656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (17))){
var inst_49455 = (state_49541[(11)]);
var inst_49494 = (inst_49455 == null);
var state_49541__$1 = state_49541;
var statearr_49572_49657 = state_49541__$1;
(statearr_49572_49657[(2)] = inst_49494);

(statearr_49572_49657[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (3))){
var inst_49539 = (state_49541[(2)]);
var state_49541__$1 = state_49541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49541__$1,inst_49539);
} else {
if((state_val_49542 === (12))){
var inst_49454 = (state_49541[(10)]);
var inst_49472 = (state_49541[(9)]);
var inst_49492 = (state_49541[(16)]);
var inst_49491 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49454,inst_49472);
var inst_49492__$1 = flush_interval_ms;
var state_49541__$1 = (function (){var statearr_49576 = state_49541;
(statearr_49576[(13)] = inst_49491);

(statearr_49576[(16)] = inst_49492__$1);

return statearr_49576;
})();
if(cljs.core.truth_(inst_49492__$1)){
var statearr_49577_49658 = state_49541__$1;
(statearr_49577_49658[(1)] = (17));

} else {
var statearr_49578_49659 = state_49541__$1;
(statearr_49578_49659[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (2))){
var inst_49455 = (state_49541[(11)]);
var inst_49462 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49463 = [input_chan,flush_ch];
var inst_49464 = (new cljs.core.PersistentVector(null,2,(5),inst_49462,inst_49463,null));
var state_49541__$1 = (function (){var statearr_49582 = state_49541;
(statearr_49582[(12)] = inst_49464);

return statearr_49582;
})();
if(cljs.core.truth_(inst_49455)){
var statearr_49583_49660 = state_49541__$1;
(statearr_49583_49660[(1)] = (4));

} else {
var statearr_49584_49661 = state_49541__$1;
(statearr_49584_49661[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (23))){
var inst_49454 = (state_49541[(10)]);
var inst_49509 = cljs.core.seq(inst_49454);
var state_49541__$1 = state_49541;
if(inst_49509){
var statearr_49585_49662 = state_49541__$1;
(statearr_49585_49662[(1)] = (26));

} else {
var statearr_49586_49663 = state_49541__$1;
(statearr_49586_49663[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (19))){
var inst_49497 = (state_49541[(2)]);
var state_49541__$1 = state_49541;
if(cljs.core.truth_(inst_49497)){
var statearr_49587_49664 = state_49541__$1;
(statearr_49587_49664[(1)] = (20));

} else {
var statearr_49589_49665 = state_49541__$1;
(statearr_49589_49665[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (11))){
var inst_49454 = (state_49541[(10)]);
var inst_49484 = cljs.core.seq(inst_49454);
var state_49541__$1 = state_49541;
if(inst_49484){
var statearr_49593_49666 = state_49541__$1;
(statearr_49593_49666[(1)] = (14));

} else {
var statearr_49595_49667 = state_49541__$1;
(statearr_49595_49667[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (9))){
var inst_49479 = (state_49541[(7)]);
var inst_49474 = (state_49541[(8)]);
var inst_49507 = (inst_49479.cljs$core$IFn$_invoke$arity$2 ? inst_49479.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_49474) : inst_49479.call(null,flush_ch,inst_49474));
var state_49541__$1 = state_49541;
if(cljs.core.truth_(inst_49507)){
var statearr_49596_49668 = state_49541__$1;
(statearr_49596_49668[(1)] = (23));

} else {
var statearr_49597_49669 = state_49541__$1;
(statearr_49597_49669[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (5))){
var inst_49464 = (state_49541[(12)]);
var state_49541__$1 = state_49541;
var statearr_49598_49670 = state_49541__$1;
(statearr_49598_49670[(2)] = inst_49464);

(statearr_49598_49670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (14))){
var inst_49454 = (state_49541[(10)]);
var inst_49486 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49454) : on_flush.call(null,inst_49454));
var state_49541__$1 = state_49541;
var statearr_49603_49671 = state_49541__$1;
(statearr_49603_49671[(2)] = inst_49486);

(statearr_49603_49671[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (26))){
var inst_49454 = (state_49541[(10)]);
var inst_49511 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49454) : on_flush.call(null,inst_49454));
var state_49541__$1 = state_49541;
var statearr_49604_49672 = state_49541__$1;
(statearr_49604_49672[(2)] = inst_49511);

(statearr_49604_49672[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (16))){
var inst_49489 = (state_49541[(2)]);
var state_49541__$1 = state_49541;
var statearr_49609_49673 = state_49541__$1;
(statearr_49609_49673[(2)] = inst_49489);

(statearr_49609_49673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (30))){
var inst_49474 = (state_49541[(8)]);
var inst_49529 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49474)].join('');
var inst_49530 = (new Error(inst_49529));
var inst_49531 = (function(){throw inst_49530})();
var state_49541__$1 = state_49541;
var statearr_49611_49674 = state_49541__$1;
(statearr_49611_49674[(2)] = inst_49531);

(statearr_49611_49674[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (10))){
var inst_49537 = (state_49541[(2)]);
var state_49541__$1 = state_49541;
var statearr_49615_49675 = state_49541__$1;
(statearr_49615_49675[(2)] = inst_49537);

(statearr_49615_49675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (18))){
var inst_49492 = (state_49541[(16)]);
var state_49541__$1 = state_49541;
var statearr_49616_49677 = state_49541__$1;
(statearr_49616_49677[(2)] = inst_49492);

(statearr_49616_49677[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49542 === (8))){
var inst_49472 = (state_49541[(9)]);
var inst_49482 = (inst_49472 == null);
var state_49541__$1 = state_49541;
if(cljs.core.truth_(inst_49482)){
var statearr_49617_49681 = state_49541__$1;
(statearr_49617_49681[(1)] = (11));

} else {
var statearr_49618_49682 = state_49541__$1;
(statearr_49618_49682[(1)] = (12));

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
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto__ = null;
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto____0 = (function (){
var statearr_49626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49626[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto__);

(statearr_49626[(1)] = (1));

return statearr_49626;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto____1 = (function (state_49541){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_49541);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e49628){var ex__32399__auto__ = e49628;
var statearr_49629_49692 = state_49541;
(statearr_49629_49692[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49541[(4)]))){
var statearr_49630_49693 = state_49541;
(statearr_49630_49693[(1)] = cljs.core.first((state_49541[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49696 = state_49541;
state_49541 = G__49696;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto__ = function(state_49541){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto____1.call(this,state_49541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_49631 = f__32477__auto__();
(statearr_49631[(6)] = c__32476__auto___49636);

return statearr_49631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
