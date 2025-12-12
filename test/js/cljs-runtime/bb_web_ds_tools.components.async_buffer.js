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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__49464){
var map__49465 = p__49464;
var map__49465__$1 = cljs.core.__destructure_map(map__49465);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49465__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49465__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49465__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32466__auto___49655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_49560){
var state_val_49561 = (state_49560[(1)]);
if((state_val_49561 === (7))){
var inst_49493 = (state_49560[(7)]);
var inst_49489 = (state_49560[(8)]);
var inst_49487 = (state_49560[(2)]);
var inst_49488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49487,(0),null);
var inst_49489__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49487,(1),null);
var inst_49493__$1 = cljs.core._EQ_;
var inst_49494 = (inst_49493__$1.cljs$core$IFn$_invoke$arity$2 ? inst_49493__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_49489__$1) : inst_49493__$1.call(null,input_chan,inst_49489__$1));
var state_49560__$1 = (function (){var statearr_49577 = state_49560;
(statearr_49577[(9)] = inst_49488);

(statearr_49577[(8)] = inst_49489__$1);

(statearr_49577[(7)] = inst_49493__$1);

return statearr_49577;
})();
if(cljs.core.truth_(inst_49494)){
var statearr_49578_49656 = state_49560__$1;
(statearr_49578_49656[(1)] = (8));

} else {
var statearr_49579_49657 = state_49560__$1;
(statearr_49579_49657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (20))){
var inst_49518 = cljs.core.async.timeout(flush_interval_ms);
var state_49560__$1 = state_49560;
var statearr_49580_49658 = state_49560__$1;
(statearr_49580_49658[(2)] = inst_49518);

(statearr_49580_49658[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (27))){
var state_49560__$1 = state_49560;
var statearr_49581_49659 = state_49560__$1;
(statearr_49581_49659[(2)] = null);

(statearr_49581_49659[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (1))){
var inst_49466 = cljs.core.PersistentVector.EMPTY;
var inst_49467 = inst_49466;
var inst_49468 = null;
var state_49560__$1 = (function (){var statearr_49582 = state_49560;
(statearr_49582[(10)] = inst_49467);

(statearr_49582[(11)] = inst_49468);

return statearr_49582;
})();
var statearr_49583_49662 = state_49560__$1;
(statearr_49583_49662[(2)] = null);

(statearr_49583_49662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (24))){
var inst_49493 = (state_49560[(7)]);
var inst_49468 = (state_49560[(11)]);
var inst_49489 = (state_49560[(8)]);
var inst_49537 = (inst_49493.cljs$core$IFn$_invoke$arity$2 ? inst_49493.cljs$core$IFn$_invoke$arity$2(inst_49468,inst_49489) : inst_49493.call(null,inst_49468,inst_49489));
var state_49560__$1 = state_49560;
if(cljs.core.truth_(inst_49537)){
var statearr_49584_49665 = state_49560__$1;
(statearr_49584_49665[(1)] = (29));

} else {
var statearr_49586_49666 = state_49560__$1;
(statearr_49586_49666[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (4))){
var inst_49476 = (state_49560[(12)]);
var inst_49468 = (state_49560[(11)]);
var inst_49479 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49476,inst_49468);
var state_49560__$1 = state_49560;
var statearr_49587_49667 = state_49560__$1;
(statearr_49587_49667[(2)] = inst_49479);

(statearr_49587_49667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (15))){
var state_49560__$1 = state_49560;
var statearr_49588_49668 = state_49560__$1;
(statearr_49588_49668[(2)] = null);

(statearr_49588_49668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (21))){
var inst_49468 = (state_49560[(11)]);
var state_49560__$1 = state_49560;
var statearr_49589_49669 = state_49560__$1;
(statearr_49589_49669[(2)] = inst_49468);

(statearr_49589_49669[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (31))){
var inst_49552 = (state_49560[(2)]);
var state_49560__$1 = state_49560;
var statearr_49590_49670 = state_49560__$1;
(statearr_49590_49670[(2)] = inst_49552);

(statearr_49590_49670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (32))){
var inst_49467 = (state_49560[(10)]);
var inst_49541 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49467) : on_flush.call(null,inst_49467));
var state_49560__$1 = state_49560;
var statearr_49591_49671 = state_49560__$1;
(statearr_49591_49671[(2)] = inst_49541);

(statearr_49591_49671[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (33))){
var state_49560__$1 = state_49560;
var statearr_49592_49672 = state_49560__$1;
(statearr_49592_49672[(2)] = null);

(statearr_49592_49672[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (13))){
var inst_49524 = (state_49560[(2)]);
var state_49560__$1 = state_49560;
var statearr_49593_49673 = state_49560__$1;
(statearr_49593_49673[(2)] = inst_49524);

(statearr_49593_49673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (22))){
var inst_49510 = (state_49560[(13)]);
var inst_49521 = (state_49560[(2)]);
var inst_49467 = inst_49510;
var inst_49468 = inst_49521;
var state_49560__$1 = (function (){var statearr_49594 = state_49560;
(statearr_49594[(10)] = inst_49467);

(statearr_49594[(11)] = inst_49468);

return statearr_49594;
})();
var statearr_49595_49674 = state_49560__$1;
(statearr_49595_49674[(2)] = null);

(statearr_49595_49674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (29))){
var inst_49467 = (state_49560[(10)]);
var inst_49539 = cljs.core.seq(inst_49467);
var state_49560__$1 = state_49560;
if(inst_49539){
var statearr_49600_49675 = state_49560__$1;
(statearr_49600_49675[(1)] = (32));

} else {
var statearr_49601_49676 = state_49560__$1;
(statearr_49601_49676[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (6))){
var inst_49482 = (state_49560[(2)]);
var state_49560__$1 = state_49560;
return cljs.core.async.ioc_alts_BANG_(state_49560__$1,(7),inst_49482);
} else {
if((state_val_49561 === (28))){
var inst_49533 = (state_49560[(2)]);
var inst_49534 = cljs.core.PersistentVector.EMPTY;
var inst_49467 = inst_49534;
var inst_49468 = null;
var state_49560__$1 = (function (){var statearr_49602 = state_49560;
(statearr_49602[(14)] = inst_49533);

(statearr_49602[(10)] = inst_49467);

(statearr_49602[(11)] = inst_49468);

return statearr_49602;
})();
var statearr_49603_49677 = state_49560__$1;
(statearr_49603_49677[(2)] = null);

(statearr_49603_49677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (25))){
var inst_49554 = (state_49560[(2)]);
var state_49560__$1 = state_49560;
var statearr_49604_49678 = state_49560__$1;
(statearr_49604_49678[(2)] = inst_49554);

(statearr_49604_49678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (34))){
var inst_49544 = (state_49560[(2)]);
var inst_49545 = cljs.core.PersistentVector.EMPTY;
var inst_49467 = inst_49545;
var inst_49468 = null;
var state_49560__$1 = (function (){var statearr_49605 = state_49560;
(statearr_49605[(15)] = inst_49544);

(statearr_49605[(10)] = inst_49467);

(statearr_49605[(11)] = inst_49468);

return statearr_49605;
})();
var statearr_49606_49679 = state_49560__$1;
(statearr_49606_49679[(2)] = null);

(statearr_49606_49679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (17))){
var inst_49468 = (state_49560[(11)]);
var inst_49513 = (inst_49468 == null);
var state_49560__$1 = state_49560;
var statearr_49607_49680 = state_49560__$1;
(statearr_49607_49680[(2)] = inst_49513);

(statearr_49607_49680[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (3))){
var inst_49558 = (state_49560[(2)]);
var state_49560__$1 = state_49560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49560__$1,inst_49558);
} else {
if((state_val_49561 === (12))){
var inst_49467 = (state_49560[(10)]);
var inst_49488 = (state_49560[(9)]);
var inst_49511 = (state_49560[(16)]);
var inst_49510 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49467,inst_49488);
var inst_49511__$1 = flush_interval_ms;
var state_49560__$1 = (function (){var statearr_49608 = state_49560;
(statearr_49608[(13)] = inst_49510);

(statearr_49608[(16)] = inst_49511__$1);

return statearr_49608;
})();
if(cljs.core.truth_(inst_49511__$1)){
var statearr_49609_49681 = state_49560__$1;
(statearr_49609_49681[(1)] = (17));

} else {
var statearr_49610_49682 = state_49560__$1;
(statearr_49610_49682[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (2))){
var inst_49468 = (state_49560[(11)]);
var inst_49474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49475 = [input_chan,flush_ch];
var inst_49476 = (new cljs.core.PersistentVector(null,2,(5),inst_49474,inst_49475,null));
var state_49560__$1 = (function (){var statearr_49611 = state_49560;
(statearr_49611[(12)] = inst_49476);

return statearr_49611;
})();
if(cljs.core.truth_(inst_49468)){
var statearr_49612_49683 = state_49560__$1;
(statearr_49612_49683[(1)] = (4));

} else {
var statearr_49613_49684 = state_49560__$1;
(statearr_49613_49684[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (23))){
var inst_49467 = (state_49560[(10)]);
var inst_49528 = cljs.core.seq(inst_49467);
var state_49560__$1 = state_49560;
if(inst_49528){
var statearr_49614_49685 = state_49560__$1;
(statearr_49614_49685[(1)] = (26));

} else {
var statearr_49615_49686 = state_49560__$1;
(statearr_49615_49686[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (19))){
var inst_49516 = (state_49560[(2)]);
var state_49560__$1 = state_49560;
if(cljs.core.truth_(inst_49516)){
var statearr_49616_49687 = state_49560__$1;
(statearr_49616_49687[(1)] = (20));

} else {
var statearr_49617_49688 = state_49560__$1;
(statearr_49617_49688[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (11))){
var inst_49467 = (state_49560[(10)]);
var inst_49503 = cljs.core.seq(inst_49467);
var state_49560__$1 = state_49560;
if(inst_49503){
var statearr_49618_49689 = state_49560__$1;
(statearr_49618_49689[(1)] = (14));

} else {
var statearr_49619_49690 = state_49560__$1;
(statearr_49619_49690[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (9))){
var inst_49493 = (state_49560[(7)]);
var inst_49489 = (state_49560[(8)]);
var inst_49526 = (inst_49493.cljs$core$IFn$_invoke$arity$2 ? inst_49493.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_49489) : inst_49493.call(null,flush_ch,inst_49489));
var state_49560__$1 = state_49560;
if(cljs.core.truth_(inst_49526)){
var statearr_49621_49691 = state_49560__$1;
(statearr_49621_49691[(1)] = (23));

} else {
var statearr_49622_49692 = state_49560__$1;
(statearr_49622_49692[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (5))){
var inst_49476 = (state_49560[(12)]);
var state_49560__$1 = state_49560;
var statearr_49625_49693 = state_49560__$1;
(statearr_49625_49693[(2)] = inst_49476);

(statearr_49625_49693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (14))){
var inst_49467 = (state_49560[(10)]);
var inst_49505 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49467) : on_flush.call(null,inst_49467));
var state_49560__$1 = state_49560;
var statearr_49626_49694 = state_49560__$1;
(statearr_49626_49694[(2)] = inst_49505);

(statearr_49626_49694[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (26))){
var inst_49467 = (state_49560[(10)]);
var inst_49530 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49467) : on_flush.call(null,inst_49467));
var state_49560__$1 = state_49560;
var statearr_49627_49695 = state_49560__$1;
(statearr_49627_49695[(2)] = inst_49530);

(statearr_49627_49695[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (16))){
var inst_49508 = (state_49560[(2)]);
var state_49560__$1 = state_49560;
var statearr_49628_49696 = state_49560__$1;
(statearr_49628_49696[(2)] = inst_49508);

(statearr_49628_49696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (30))){
var inst_49489 = (state_49560[(8)]);
var inst_49548 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49489)].join('');
var inst_49549 = (new Error(inst_49548));
var inst_49550 = (function(){throw inst_49549})();
var state_49560__$1 = state_49560;
var statearr_49629_49697 = state_49560__$1;
(statearr_49629_49697[(2)] = inst_49550);

(statearr_49629_49697[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (10))){
var inst_49556 = (state_49560[(2)]);
var state_49560__$1 = state_49560;
var statearr_49630_49698 = state_49560__$1;
(statearr_49630_49698[(2)] = inst_49556);

(statearr_49630_49698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (18))){
var inst_49511 = (state_49560[(16)]);
var state_49560__$1 = state_49560;
var statearr_49631_49699 = state_49560__$1;
(statearr_49631_49699[(2)] = inst_49511);

(statearr_49631_49699[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49561 === (8))){
var inst_49488 = (state_49560[(9)]);
var inst_49501 = (inst_49488 == null);
var state_49560__$1 = state_49560;
if(cljs.core.truth_(inst_49501)){
var statearr_49635_49700 = state_49560__$1;
(statearr_49635_49700[(1)] = (11));

} else {
var statearr_49636_49701 = state_49560__$1;
(statearr_49636_49701[(1)] = (12));

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
var statearr_49644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49644[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto__);

(statearr_49644[(1)] = (1));

return statearr_49644;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto____1 = (function (state_49560){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_49560);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e49646){var ex__32399__auto__ = e49646;
var statearr_49647_49702 = state_49560;
(statearr_49647_49702[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49560[(4)]))){
var statearr_49649_49703 = state_49560;
(statearr_49649_49703[(1)] = cljs.core.first((state_49560[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49704 = state_49560;
state_49560 = G__49704;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto__ = function(state_49560){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto____1.call(this,state_49560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_49653 = f__32467__auto__();
(statearr_49653[(6)] = c__32466__auto___49655);

return statearr_49653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
