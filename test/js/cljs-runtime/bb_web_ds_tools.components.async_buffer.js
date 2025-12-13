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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__49443){
var map__49444 = p__49443;
var map__49444__$1 = cljs.core.__destructure_map(map__49444);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49444__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49444__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49444__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32492__auto___49605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_49535){
var state_val_49537 = (state_49535[(1)]);
if((state_val_49537 === (7))){
var inst_49471 = (state_49535[(7)]);
var inst_49467 = (state_49535[(8)]);
var inst_49465 = (state_49535[(2)]);
var inst_49466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49465,(0),null);
var inst_49467__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49465,(1),null);
var inst_49471__$1 = cljs.core._EQ_;
var inst_49472 = (inst_49471__$1.cljs$core$IFn$_invoke$arity$2 ? inst_49471__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_49467__$1) : inst_49471__$1.call(null,input_chan,inst_49467__$1));
var state_49535__$1 = (function (){var statearr_49539 = state_49535;
(statearr_49539[(9)] = inst_49466);

(statearr_49539[(8)] = inst_49467__$1);

(statearr_49539[(7)] = inst_49471__$1);

return statearr_49539;
})();
if(cljs.core.truth_(inst_49472)){
var statearr_49540_49606 = state_49535__$1;
(statearr_49540_49606[(1)] = (8));

} else {
var statearr_49541_49607 = state_49535__$1;
(statearr_49541_49607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (20))){
var inst_49492 = cljs.core.async.timeout(flush_interval_ms);
var state_49535__$1 = state_49535;
var statearr_49543_49608 = state_49535__$1;
(statearr_49543_49608[(2)] = inst_49492);

(statearr_49543_49608[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (27))){
var state_49535__$1 = state_49535;
var statearr_49544_49609 = state_49535__$1;
(statearr_49544_49609[(2)] = null);

(statearr_49544_49609[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (1))){
var inst_49445 = cljs.core.PersistentVector.EMPTY;
var inst_49446 = inst_49445;
var inst_49447 = null;
var state_49535__$1 = (function (){var statearr_49545 = state_49535;
(statearr_49545[(10)] = inst_49446);

(statearr_49545[(11)] = inst_49447);

return statearr_49545;
})();
var statearr_49546_49613 = state_49535__$1;
(statearr_49546_49613[(2)] = null);

(statearr_49546_49613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (24))){
var inst_49471 = (state_49535[(7)]);
var inst_49447 = (state_49535[(11)]);
var inst_49467 = (state_49535[(8)]);
var inst_49511 = (inst_49471.cljs$core$IFn$_invoke$arity$2 ? inst_49471.cljs$core$IFn$_invoke$arity$2(inst_49447,inst_49467) : inst_49471.call(null,inst_49447,inst_49467));
var state_49535__$1 = state_49535;
if(cljs.core.truth_(inst_49511)){
var statearr_49549_49614 = state_49535__$1;
(statearr_49549_49614[(1)] = (29));

} else {
var statearr_49550_49615 = state_49535__$1;
(statearr_49550_49615[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (4))){
var inst_49458 = (state_49535[(12)]);
var inst_49447 = (state_49535[(11)]);
var inst_49460 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49458,inst_49447);
var state_49535__$1 = state_49535;
var statearr_49551_49616 = state_49535__$1;
(statearr_49551_49616[(2)] = inst_49460);

(statearr_49551_49616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (15))){
var state_49535__$1 = state_49535;
var statearr_49552_49619 = state_49535__$1;
(statearr_49552_49619[(2)] = null);

(statearr_49552_49619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (21))){
var inst_49447 = (state_49535[(11)]);
var state_49535__$1 = state_49535;
var statearr_49553_49621 = state_49535__$1;
(statearr_49553_49621[(2)] = inst_49447);

(statearr_49553_49621[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (31))){
var inst_49527 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
var statearr_49554_49622 = state_49535__$1;
(statearr_49554_49622[(2)] = inst_49527);

(statearr_49554_49622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (32))){
var inst_49446 = (state_49535[(10)]);
var inst_49515 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49446) : on_flush.call(null,inst_49446));
var state_49535__$1 = state_49535;
var statearr_49555_49623 = state_49535__$1;
(statearr_49555_49623[(2)] = inst_49515);

(statearr_49555_49623[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (33))){
var state_49535__$1 = state_49535;
var statearr_49556_49624 = state_49535__$1;
(statearr_49556_49624[(2)] = null);

(statearr_49556_49624[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (13))){
var inst_49498 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
var statearr_49557_49625 = state_49535__$1;
(statearr_49557_49625[(2)] = inst_49498);

(statearr_49557_49625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (22))){
var inst_49484 = (state_49535[(13)]);
var inst_49495 = (state_49535[(2)]);
var inst_49446 = inst_49484;
var inst_49447 = inst_49495;
var state_49535__$1 = (function (){var statearr_49558 = state_49535;
(statearr_49558[(10)] = inst_49446);

(statearr_49558[(11)] = inst_49447);

return statearr_49558;
})();
var statearr_49559_49626 = state_49535__$1;
(statearr_49559_49626[(2)] = null);

(statearr_49559_49626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (29))){
var inst_49446 = (state_49535[(10)]);
var inst_49513 = cljs.core.seq(inst_49446);
var state_49535__$1 = state_49535;
if(inst_49513){
var statearr_49560_49627 = state_49535__$1;
(statearr_49560_49627[(1)] = (32));

} else {
var statearr_49561_49628 = state_49535__$1;
(statearr_49561_49628[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (6))){
var inst_49463 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
return cljs.core.async.ioc_alts_BANG_(state_49535__$1,(7),inst_49463);
} else {
if((state_val_49537 === (28))){
var inst_49507 = (state_49535[(2)]);
var inst_49508 = cljs.core.PersistentVector.EMPTY;
var inst_49446 = inst_49508;
var inst_49447 = null;
var state_49535__$1 = (function (){var statearr_49562 = state_49535;
(statearr_49562[(14)] = inst_49507);

(statearr_49562[(10)] = inst_49446);

(statearr_49562[(11)] = inst_49447);

return statearr_49562;
})();
var statearr_49563_49629 = state_49535__$1;
(statearr_49563_49629[(2)] = null);

(statearr_49563_49629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (25))){
var inst_49529 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
var statearr_49564_49630 = state_49535__$1;
(statearr_49564_49630[(2)] = inst_49529);

(statearr_49564_49630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (34))){
var inst_49518 = (state_49535[(2)]);
var inst_49519 = cljs.core.PersistentVector.EMPTY;
var inst_49446 = inst_49519;
var inst_49447 = null;
var state_49535__$1 = (function (){var statearr_49565 = state_49535;
(statearr_49565[(15)] = inst_49518);

(statearr_49565[(10)] = inst_49446);

(statearr_49565[(11)] = inst_49447);

return statearr_49565;
})();
var statearr_49566_49631 = state_49535__$1;
(statearr_49566_49631[(2)] = null);

(statearr_49566_49631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (17))){
var inst_49447 = (state_49535[(11)]);
var inst_49487 = (inst_49447 == null);
var state_49535__$1 = state_49535;
var statearr_49568_49632 = state_49535__$1;
(statearr_49568_49632[(2)] = inst_49487);

(statearr_49568_49632[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (3))){
var inst_49533 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49535__$1,inst_49533);
} else {
if((state_val_49537 === (12))){
var inst_49446 = (state_49535[(10)]);
var inst_49466 = (state_49535[(9)]);
var inst_49485 = (state_49535[(16)]);
var inst_49484 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49446,inst_49466);
var inst_49485__$1 = flush_interval_ms;
var state_49535__$1 = (function (){var statearr_49573 = state_49535;
(statearr_49573[(13)] = inst_49484);

(statearr_49573[(16)] = inst_49485__$1);

return statearr_49573;
})();
if(cljs.core.truth_(inst_49485__$1)){
var statearr_49574_49633 = state_49535__$1;
(statearr_49574_49633[(1)] = (17));

} else {
var statearr_49575_49634 = state_49535__$1;
(statearr_49575_49634[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (2))){
var inst_49447 = (state_49535[(11)]);
var inst_49456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49457 = [input_chan,flush_ch];
var inst_49458 = (new cljs.core.PersistentVector(null,2,(5),inst_49456,inst_49457,null));
var state_49535__$1 = (function (){var statearr_49576 = state_49535;
(statearr_49576[(12)] = inst_49458);

return statearr_49576;
})();
if(cljs.core.truth_(inst_49447)){
var statearr_49577_49635 = state_49535__$1;
(statearr_49577_49635[(1)] = (4));

} else {
var statearr_49578_49636 = state_49535__$1;
(statearr_49578_49636[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (23))){
var inst_49446 = (state_49535[(10)]);
var inst_49502 = cljs.core.seq(inst_49446);
var state_49535__$1 = state_49535;
if(inst_49502){
var statearr_49579_49637 = state_49535__$1;
(statearr_49579_49637[(1)] = (26));

} else {
var statearr_49580_49638 = state_49535__$1;
(statearr_49580_49638[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (19))){
var inst_49490 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
if(cljs.core.truth_(inst_49490)){
var statearr_49581_49639 = state_49535__$1;
(statearr_49581_49639[(1)] = (20));

} else {
var statearr_49582_49640 = state_49535__$1;
(statearr_49582_49640[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (11))){
var inst_49446 = (state_49535[(10)]);
var inst_49477 = cljs.core.seq(inst_49446);
var state_49535__$1 = state_49535;
if(inst_49477){
var statearr_49583_49641 = state_49535__$1;
(statearr_49583_49641[(1)] = (14));

} else {
var statearr_49584_49642 = state_49535__$1;
(statearr_49584_49642[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (9))){
var inst_49471 = (state_49535[(7)]);
var inst_49467 = (state_49535[(8)]);
var inst_49500 = (inst_49471.cljs$core$IFn$_invoke$arity$2 ? inst_49471.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_49467) : inst_49471.call(null,flush_ch,inst_49467));
var state_49535__$1 = state_49535;
if(cljs.core.truth_(inst_49500)){
var statearr_49585_49643 = state_49535__$1;
(statearr_49585_49643[(1)] = (23));

} else {
var statearr_49586_49644 = state_49535__$1;
(statearr_49586_49644[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (5))){
var inst_49458 = (state_49535[(12)]);
var state_49535__$1 = state_49535;
var statearr_49587_49645 = state_49535__$1;
(statearr_49587_49645[(2)] = inst_49458);

(statearr_49587_49645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (14))){
var inst_49446 = (state_49535[(10)]);
var inst_49479 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49446) : on_flush.call(null,inst_49446));
var state_49535__$1 = state_49535;
var statearr_49588_49646 = state_49535__$1;
(statearr_49588_49646[(2)] = inst_49479);

(statearr_49588_49646[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (26))){
var inst_49446 = (state_49535[(10)]);
var inst_49504 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49446) : on_flush.call(null,inst_49446));
var state_49535__$1 = state_49535;
var statearr_49591_49647 = state_49535__$1;
(statearr_49591_49647[(2)] = inst_49504);

(statearr_49591_49647[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (16))){
var inst_49482 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
var statearr_49592_49648 = state_49535__$1;
(statearr_49592_49648[(2)] = inst_49482);

(statearr_49592_49648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (30))){
var inst_49467 = (state_49535[(8)]);
var inst_49523 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49467)].join('');
var inst_49524 = (new Error(inst_49523));
var inst_49525 = (function(){throw inst_49524})();
var state_49535__$1 = state_49535;
var statearr_49593_49649 = state_49535__$1;
(statearr_49593_49649[(2)] = inst_49525);

(statearr_49593_49649[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (10))){
var inst_49531 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
var statearr_49594_49650 = state_49535__$1;
(statearr_49594_49650[(2)] = inst_49531);

(statearr_49594_49650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (18))){
var inst_49485 = (state_49535[(16)]);
var state_49535__$1 = state_49535;
var statearr_49595_49651 = state_49535__$1;
(statearr_49595_49651[(2)] = inst_49485);

(statearr_49595_49651[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49537 === (8))){
var inst_49466 = (state_49535[(9)]);
var inst_49474 = (inst_49466 == null);
var state_49535__$1 = state_49535;
if(cljs.core.truth_(inst_49474)){
var statearr_49596_49652 = state_49535__$1;
(statearr_49596_49652[(1)] = (11));

} else {
var statearr_49597_49653 = state_49535__$1;
(statearr_49597_49653[(1)] = (12));

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
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto__ = null;
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto____0 = (function (){
var statearr_49598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49598[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto__);

(statearr_49598[(1)] = (1));

return statearr_49598;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto____1 = (function (state_49535){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_49535);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e49599){var ex__32403__auto__ = e49599;
var statearr_49600_49659 = state_49535;
(statearr_49600_49659[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_49535[(4)]))){
var statearr_49601_49660 = state_49535;
(statearr_49601_49660[(1)] = cljs.core.first((state_49535[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49661 = state_49535;
state_49535 = G__49661;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto__ = function(state_49535){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto____1.call(this,state_49535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_49603 = f__32493__auto__();
(statearr_49603[(6)] = c__32492__auto___49605);

return statearr_49603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
