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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__49413){
var map__49414 = p__49413;
var map__49414__$1 = cljs.core.__destructure_map(map__49414);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49414__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49414__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49414__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32474__auto___49595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_49505){
var state_val_49506 = (state_49505[(1)]);
if((state_val_49506 === (7))){
var inst_49440 = (state_49505[(7)]);
var inst_49436 = (state_49505[(8)]);
var inst_49434 = (state_49505[(2)]);
var inst_49435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49434,(0),null);
var inst_49436__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49434,(1),null);
var inst_49440__$1 = cljs.core._EQ_;
var inst_49441 = (inst_49440__$1.cljs$core$IFn$_invoke$arity$2 ? inst_49440__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_49436__$1) : inst_49440__$1.call(null,input_chan,inst_49436__$1));
var state_49505__$1 = (function (){var statearr_49511 = state_49505;
(statearr_49511[(9)] = inst_49435);

(statearr_49511[(8)] = inst_49436__$1);

(statearr_49511[(7)] = inst_49440__$1);

return statearr_49511;
})();
if(cljs.core.truth_(inst_49441)){
var statearr_49512_49597 = state_49505__$1;
(statearr_49512_49597[(1)] = (8));

} else {
var statearr_49513_49598 = state_49505__$1;
(statearr_49513_49598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (20))){
var inst_49463 = cljs.core.async.timeout(flush_interval_ms);
var state_49505__$1 = state_49505;
var statearr_49514_49599 = state_49505__$1;
(statearr_49514_49599[(2)] = inst_49463);

(statearr_49514_49599[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (27))){
var state_49505__$1 = state_49505;
var statearr_49515_49600 = state_49505__$1;
(statearr_49515_49600[(2)] = null);

(statearr_49515_49600[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (1))){
var inst_49416 = cljs.core.PersistentVector.EMPTY;
var inst_49417 = inst_49416;
var inst_49418 = null;
var state_49505__$1 = (function (){var statearr_49516 = state_49505;
(statearr_49516[(10)] = inst_49417);

(statearr_49516[(11)] = inst_49418);

return statearr_49516;
})();
var statearr_49517_49601 = state_49505__$1;
(statearr_49517_49601[(2)] = null);

(statearr_49517_49601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (24))){
var inst_49440 = (state_49505[(7)]);
var inst_49418 = (state_49505[(11)]);
var inst_49436 = (state_49505[(8)]);
var inst_49482 = (inst_49440.cljs$core$IFn$_invoke$arity$2 ? inst_49440.cljs$core$IFn$_invoke$arity$2(inst_49418,inst_49436) : inst_49440.call(null,inst_49418,inst_49436));
var state_49505__$1 = state_49505;
if(cljs.core.truth_(inst_49482)){
var statearr_49525_49602 = state_49505__$1;
(statearr_49525_49602[(1)] = (29));

} else {
var statearr_49526_49603 = state_49505__$1;
(statearr_49526_49603[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (4))){
var inst_49427 = (state_49505[(12)]);
var inst_49418 = (state_49505[(11)]);
var inst_49429 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49427,inst_49418);
var state_49505__$1 = state_49505;
var statearr_49527_49604 = state_49505__$1;
(statearr_49527_49604[(2)] = inst_49429);

(statearr_49527_49604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (15))){
var state_49505__$1 = state_49505;
var statearr_49529_49605 = state_49505__$1;
(statearr_49529_49605[(2)] = null);

(statearr_49529_49605[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (21))){
var inst_49418 = (state_49505[(11)]);
var state_49505__$1 = state_49505;
var statearr_49532_49606 = state_49505__$1;
(statearr_49532_49606[(2)] = inst_49418);

(statearr_49532_49606[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (31))){
var inst_49497 = (state_49505[(2)]);
var state_49505__$1 = state_49505;
var statearr_49533_49607 = state_49505__$1;
(statearr_49533_49607[(2)] = inst_49497);

(statearr_49533_49607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (32))){
var inst_49417 = (state_49505[(10)]);
var inst_49486 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49417) : on_flush.call(null,inst_49417));
var state_49505__$1 = state_49505;
var statearr_49534_49608 = state_49505__$1;
(statearr_49534_49608[(2)] = inst_49486);

(statearr_49534_49608[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (33))){
var state_49505__$1 = state_49505;
var statearr_49535_49609 = state_49505__$1;
(statearr_49535_49609[(2)] = null);

(statearr_49535_49609[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (13))){
var inst_49469 = (state_49505[(2)]);
var state_49505__$1 = state_49505;
var statearr_49540_49610 = state_49505__$1;
(statearr_49540_49610[(2)] = inst_49469);

(statearr_49540_49610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (22))){
var inst_49454 = (state_49505[(13)]);
var inst_49466 = (state_49505[(2)]);
var inst_49417 = inst_49454;
var inst_49418 = inst_49466;
var state_49505__$1 = (function (){var statearr_49541 = state_49505;
(statearr_49541[(10)] = inst_49417);

(statearr_49541[(11)] = inst_49418);

return statearr_49541;
})();
var statearr_49542_49611 = state_49505__$1;
(statearr_49542_49611[(2)] = null);

(statearr_49542_49611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (29))){
var inst_49417 = (state_49505[(10)]);
var inst_49484 = cljs.core.seq(inst_49417);
var state_49505__$1 = state_49505;
if(inst_49484){
var statearr_49543_49612 = state_49505__$1;
(statearr_49543_49612[(1)] = (32));

} else {
var statearr_49544_49613 = state_49505__$1;
(statearr_49544_49613[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (6))){
var inst_49432 = (state_49505[(2)]);
var state_49505__$1 = state_49505;
return cljs.core.async.ioc_alts_BANG_(state_49505__$1,(7),inst_49432);
} else {
if((state_val_49506 === (28))){
var inst_49478 = (state_49505[(2)]);
var inst_49479 = cljs.core.PersistentVector.EMPTY;
var inst_49417 = inst_49479;
var inst_49418 = null;
var state_49505__$1 = (function (){var statearr_49545 = state_49505;
(statearr_49545[(14)] = inst_49478);

(statearr_49545[(10)] = inst_49417);

(statearr_49545[(11)] = inst_49418);

return statearr_49545;
})();
var statearr_49546_49614 = state_49505__$1;
(statearr_49546_49614[(2)] = null);

(statearr_49546_49614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (25))){
var inst_49499 = (state_49505[(2)]);
var state_49505__$1 = state_49505;
var statearr_49547_49615 = state_49505__$1;
(statearr_49547_49615[(2)] = inst_49499);

(statearr_49547_49615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (34))){
var inst_49489 = (state_49505[(2)]);
var inst_49490 = cljs.core.PersistentVector.EMPTY;
var inst_49417 = inst_49490;
var inst_49418 = null;
var state_49505__$1 = (function (){var statearr_49550 = state_49505;
(statearr_49550[(15)] = inst_49489);

(statearr_49550[(10)] = inst_49417);

(statearr_49550[(11)] = inst_49418);

return statearr_49550;
})();
var statearr_49551_49616 = state_49505__$1;
(statearr_49551_49616[(2)] = null);

(statearr_49551_49616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (17))){
var inst_49418 = (state_49505[(11)]);
var inst_49458 = (inst_49418 == null);
var state_49505__$1 = state_49505;
var statearr_49552_49617 = state_49505__$1;
(statearr_49552_49617[(2)] = inst_49458);

(statearr_49552_49617[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (3))){
var inst_49503 = (state_49505[(2)]);
var state_49505__$1 = state_49505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49505__$1,inst_49503);
} else {
if((state_val_49506 === (12))){
var inst_49417 = (state_49505[(10)]);
var inst_49435 = (state_49505[(9)]);
var inst_49456 = (state_49505[(16)]);
var inst_49454 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49417,inst_49435);
var inst_49456__$1 = flush_interval_ms;
var state_49505__$1 = (function (){var statearr_49554 = state_49505;
(statearr_49554[(13)] = inst_49454);

(statearr_49554[(16)] = inst_49456__$1);

return statearr_49554;
})();
if(cljs.core.truth_(inst_49456__$1)){
var statearr_49555_49618 = state_49505__$1;
(statearr_49555_49618[(1)] = (17));

} else {
var statearr_49556_49619 = state_49505__$1;
(statearr_49556_49619[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (2))){
var inst_49418 = (state_49505[(11)]);
var inst_49425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49426 = [input_chan,flush_ch];
var inst_49427 = (new cljs.core.PersistentVector(null,2,(5),inst_49425,inst_49426,null));
var state_49505__$1 = (function (){var statearr_49557 = state_49505;
(statearr_49557[(12)] = inst_49427);

return statearr_49557;
})();
if(cljs.core.truth_(inst_49418)){
var statearr_49558_49620 = state_49505__$1;
(statearr_49558_49620[(1)] = (4));

} else {
var statearr_49559_49621 = state_49505__$1;
(statearr_49559_49621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (23))){
var inst_49417 = (state_49505[(10)]);
var inst_49473 = cljs.core.seq(inst_49417);
var state_49505__$1 = state_49505;
if(inst_49473){
var statearr_49562_49622 = state_49505__$1;
(statearr_49562_49622[(1)] = (26));

} else {
var statearr_49563_49623 = state_49505__$1;
(statearr_49563_49623[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (19))){
var inst_49461 = (state_49505[(2)]);
var state_49505__$1 = state_49505;
if(cljs.core.truth_(inst_49461)){
var statearr_49564_49624 = state_49505__$1;
(statearr_49564_49624[(1)] = (20));

} else {
var statearr_49565_49625 = state_49505__$1;
(statearr_49565_49625[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (11))){
var inst_49417 = (state_49505[(10)]);
var inst_49445 = cljs.core.seq(inst_49417);
var state_49505__$1 = state_49505;
if(inst_49445){
var statearr_49566_49626 = state_49505__$1;
(statearr_49566_49626[(1)] = (14));

} else {
var statearr_49567_49627 = state_49505__$1;
(statearr_49567_49627[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (9))){
var inst_49440 = (state_49505[(7)]);
var inst_49436 = (state_49505[(8)]);
var inst_49471 = (inst_49440.cljs$core$IFn$_invoke$arity$2 ? inst_49440.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_49436) : inst_49440.call(null,flush_ch,inst_49436));
var state_49505__$1 = state_49505;
if(cljs.core.truth_(inst_49471)){
var statearr_49570_49628 = state_49505__$1;
(statearr_49570_49628[(1)] = (23));

} else {
var statearr_49571_49629 = state_49505__$1;
(statearr_49571_49629[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (5))){
var inst_49427 = (state_49505[(12)]);
var state_49505__$1 = state_49505;
var statearr_49572_49630 = state_49505__$1;
(statearr_49572_49630[(2)] = inst_49427);

(statearr_49572_49630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (14))){
var inst_49417 = (state_49505[(10)]);
var inst_49449 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49417) : on_flush.call(null,inst_49417));
var state_49505__$1 = state_49505;
var statearr_49573_49632 = state_49505__$1;
(statearr_49573_49632[(2)] = inst_49449);

(statearr_49573_49632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (26))){
var inst_49417 = (state_49505[(10)]);
var inst_49475 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49417) : on_flush.call(null,inst_49417));
var state_49505__$1 = state_49505;
var statearr_49577_49633 = state_49505__$1;
(statearr_49577_49633[(2)] = inst_49475);

(statearr_49577_49633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (16))){
var inst_49452 = (state_49505[(2)]);
var state_49505__$1 = state_49505;
var statearr_49578_49634 = state_49505__$1;
(statearr_49578_49634[(2)] = inst_49452);

(statearr_49578_49634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (30))){
var inst_49436 = (state_49505[(8)]);
var inst_49493 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49436)].join('');
var inst_49494 = (new Error(inst_49493));
var inst_49495 = (function(){throw inst_49494})();
var state_49505__$1 = state_49505;
var statearr_49580_49635 = state_49505__$1;
(statearr_49580_49635[(2)] = inst_49495);

(statearr_49580_49635[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (10))){
var inst_49501 = (state_49505[(2)]);
var state_49505__$1 = state_49505;
var statearr_49581_49636 = state_49505__$1;
(statearr_49581_49636[(2)] = inst_49501);

(statearr_49581_49636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (18))){
var inst_49456 = (state_49505[(16)]);
var state_49505__$1 = state_49505;
var statearr_49582_49637 = state_49505__$1;
(statearr_49582_49637[(2)] = inst_49456);

(statearr_49582_49637[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49506 === (8))){
var inst_49435 = (state_49505[(9)]);
var inst_49443 = (inst_49435 == null);
var state_49505__$1 = state_49505;
if(cljs.core.truth_(inst_49443)){
var statearr_49583_49638 = state_49505__$1;
(statearr_49583_49638[(1)] = (11));

} else {
var statearr_49584_49639 = state_49505__$1;
(statearr_49584_49639[(1)] = (12));

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
var statearr_49587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49587[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto__);

(statearr_49587[(1)] = (1));

return statearr_49587;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto____1 = (function (state_49505){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_49505);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e49589){var ex__32403__auto__ = e49589;
var statearr_49590_49641 = state_49505;
(statearr_49590_49641[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_49505[(4)]))){
var statearr_49591_49642 = state_49505;
(statearr_49591_49642[(1)] = cljs.core.first((state_49505[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49644 = state_49505;
state_49505 = G__49644;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto__ = function(state_49505){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto____1.call(this,state_49505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_49592 = f__32475__auto__();
(statearr_49592[(6)] = c__32474__auto___49595);

return statearr_49592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
