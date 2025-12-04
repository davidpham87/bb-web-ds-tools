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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__55973){
var map__55974 = p__55973;
var map__55974__$1 = cljs.core.__destructure_map(map__55974);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56064){
var state_val_56065 = (state_56064[(1)]);
if((state_val_56065 === (7))){
var inst_55998 = (state_56064[(7)]);
var inst_55994 = (state_56064[(8)]);
var inst_55992 = (state_56064[(2)]);
var inst_55993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55992,(0),null);
var inst_55994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55992,(1),null);
var inst_55998__$1 = cljs.core._EQ_;
var inst_55999 = (inst_55998__$1.cljs$core$IFn$_invoke$arity$2 ? inst_55998__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_55994__$1) : inst_55998__$1.call(null,input_chan,inst_55994__$1));
var state_56064__$1 = (function (){var statearr_56066 = state_56064;
(statearr_56066[(9)] = inst_55993);

(statearr_56066[(8)] = inst_55994__$1);

(statearr_56066[(7)] = inst_55998__$1);

return statearr_56066;
})();
if(cljs.core.truth_(inst_55999)){
var statearr_56067_56126 = state_56064__$1;
(statearr_56067_56126[(1)] = (8));

} else {
var statearr_56068_56127 = state_56064__$1;
(statearr_56068_56127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (20))){
var inst_56018 = cljs.core.async.timeout(flush_interval_ms);
var state_56064__$1 = state_56064;
var statearr_56069_56128 = state_56064__$1;
(statearr_56069_56128[(2)] = inst_56018);

(statearr_56069_56128[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (27))){
var state_56064__$1 = state_56064;
var statearr_56070_56129 = state_56064__$1;
(statearr_56070_56129[(2)] = null);

(statearr_56070_56129[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (1))){
var inst_55975 = cljs.core.PersistentVector.EMPTY;
var inst_55976 = inst_55975;
var inst_55977 = null;
var state_56064__$1 = (function (){var statearr_56071 = state_56064;
(statearr_56071[(10)] = inst_55976);

(statearr_56071[(11)] = inst_55977);

return statearr_56071;
})();
var statearr_56072_56130 = state_56064__$1;
(statearr_56072_56130[(2)] = null);

(statearr_56072_56130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (24))){
var inst_55998 = (state_56064[(7)]);
var inst_55977 = (state_56064[(11)]);
var inst_55994 = (state_56064[(8)]);
var inst_56037 = (inst_55998.cljs$core$IFn$_invoke$arity$2 ? inst_55998.cljs$core$IFn$_invoke$arity$2(inst_55977,inst_55994) : inst_55998.call(null,inst_55977,inst_55994));
var state_56064__$1 = state_56064;
if(cljs.core.truth_(inst_56037)){
var statearr_56073_56131 = state_56064__$1;
(statearr_56073_56131[(1)] = (29));

} else {
var statearr_56074_56132 = state_56064__$1;
(statearr_56074_56132[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (4))){
var inst_55985 = (state_56064[(12)]);
var inst_55977 = (state_56064[(11)]);
var inst_55987 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55985,inst_55977);
var state_56064__$1 = state_56064;
var statearr_56076_56133 = state_56064__$1;
(statearr_56076_56133[(2)] = inst_55987);

(statearr_56076_56133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (15))){
var state_56064__$1 = state_56064;
var statearr_56080_56134 = state_56064__$1;
(statearr_56080_56134[(2)] = null);

(statearr_56080_56134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (21))){
var inst_55977 = (state_56064[(11)]);
var state_56064__$1 = state_56064;
var statearr_56081_56135 = state_56064__$1;
(statearr_56081_56135[(2)] = inst_55977);

(statearr_56081_56135[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (31))){
var inst_56056 = (state_56064[(2)]);
var state_56064__$1 = state_56064;
var statearr_56082_56136 = state_56064__$1;
(statearr_56082_56136[(2)] = inst_56056);

(statearr_56082_56136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (32))){
var inst_55976 = (state_56064[(10)]);
var inst_56041 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55976) : on_flush.call(null,inst_55976));
var state_56064__$1 = state_56064;
var statearr_56084_56137 = state_56064__$1;
(statearr_56084_56137[(2)] = inst_56041);

(statearr_56084_56137[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (33))){
var state_56064__$1 = state_56064;
var statearr_56085_56138 = state_56064__$1;
(statearr_56085_56138[(2)] = null);

(statearr_56085_56138[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (13))){
var inst_56024 = (state_56064[(2)]);
var state_56064__$1 = state_56064;
var statearr_56086_56139 = state_56064__$1;
(statearr_56086_56139[(2)] = inst_56024);

(statearr_56086_56139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (22))){
var inst_56010 = (state_56064[(13)]);
var inst_56021 = (state_56064[(2)]);
var inst_55976 = inst_56010;
var inst_55977 = inst_56021;
var state_56064__$1 = (function (){var statearr_56087 = state_56064;
(statearr_56087[(10)] = inst_55976);

(statearr_56087[(11)] = inst_55977);

return statearr_56087;
})();
var statearr_56088_56140 = state_56064__$1;
(statearr_56088_56140[(2)] = null);

(statearr_56088_56140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (29))){
var inst_55976 = (state_56064[(10)]);
var inst_56039 = cljs.core.seq(inst_55976);
var state_56064__$1 = state_56064;
if(inst_56039){
var statearr_56089_56141 = state_56064__$1;
(statearr_56089_56141[(1)] = (32));

} else {
var statearr_56090_56142 = state_56064__$1;
(statearr_56090_56142[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (6))){
var inst_55990 = (state_56064[(2)]);
var state_56064__$1 = state_56064;
return cljs.core.async.ioc_alts_BANG_(state_56064__$1,(7),inst_55990);
} else {
if((state_val_56065 === (28))){
var inst_56033 = (state_56064[(2)]);
var inst_56034 = cljs.core.PersistentVector.EMPTY;
var inst_55976 = inst_56034;
var inst_55977 = null;
var state_56064__$1 = (function (){var statearr_56091 = state_56064;
(statearr_56091[(14)] = inst_56033);

(statearr_56091[(10)] = inst_55976);

(statearr_56091[(11)] = inst_55977);

return statearr_56091;
})();
var statearr_56092_56143 = state_56064__$1;
(statearr_56092_56143[(2)] = null);

(statearr_56092_56143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (25))){
var inst_56058 = (state_56064[(2)]);
var state_56064__$1 = state_56064;
var statearr_56093_56144 = state_56064__$1;
(statearr_56093_56144[(2)] = inst_56058);

(statearr_56093_56144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (34))){
var inst_56044 = (state_56064[(2)]);
var inst_56045 = cljs.core.PersistentVector.EMPTY;
var inst_55976 = inst_56045;
var inst_55977 = null;
var state_56064__$1 = (function (){var statearr_56094 = state_56064;
(statearr_56094[(15)] = inst_56044);

(statearr_56094[(10)] = inst_55976);

(statearr_56094[(11)] = inst_55977);

return statearr_56094;
})();
var statearr_56095_56145 = state_56064__$1;
(statearr_56095_56145[(2)] = null);

(statearr_56095_56145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (17))){
var inst_55977 = (state_56064[(11)]);
var inst_56013 = (inst_55977 == null);
var state_56064__$1 = state_56064;
var statearr_56096_56149 = state_56064__$1;
(statearr_56096_56149[(2)] = inst_56013);

(statearr_56096_56149[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (3))){
var inst_56062 = (state_56064[(2)]);
var state_56064__$1 = state_56064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56064__$1,inst_56062);
} else {
if((state_val_56065 === (12))){
var inst_55976 = (state_56064[(10)]);
var inst_55993 = (state_56064[(9)]);
var inst_56011 = (state_56064[(16)]);
var inst_56010 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55976,inst_55993);
var inst_56011__$1 = flush_interval_ms;
var state_56064__$1 = (function (){var statearr_56097 = state_56064;
(statearr_56097[(13)] = inst_56010);

(statearr_56097[(16)] = inst_56011__$1);

return statearr_56097;
})();
if(cljs.core.truth_(inst_56011__$1)){
var statearr_56098_56151 = state_56064__$1;
(statearr_56098_56151[(1)] = (17));

} else {
var statearr_56099_56152 = state_56064__$1;
(statearr_56099_56152[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (2))){
var inst_55977 = (state_56064[(11)]);
var inst_55983 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55984 = [input_chan,flush_ch];
var inst_55985 = (new cljs.core.PersistentVector(null,2,(5),inst_55983,inst_55984,null));
var state_56064__$1 = (function (){var statearr_56100 = state_56064;
(statearr_56100[(12)] = inst_55985);

return statearr_56100;
})();
if(cljs.core.truth_(inst_55977)){
var statearr_56101_56153 = state_56064__$1;
(statearr_56101_56153[(1)] = (4));

} else {
var statearr_56102_56154 = state_56064__$1;
(statearr_56102_56154[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (23))){
var inst_55976 = (state_56064[(10)]);
var inst_56028 = cljs.core.seq(inst_55976);
var state_56064__$1 = state_56064;
if(inst_56028){
var statearr_56103_56155 = state_56064__$1;
(statearr_56103_56155[(1)] = (26));

} else {
var statearr_56104_56156 = state_56064__$1;
(statearr_56104_56156[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (19))){
var inst_56016 = (state_56064[(2)]);
var state_56064__$1 = state_56064;
if(cljs.core.truth_(inst_56016)){
var statearr_56105_56157 = state_56064__$1;
(statearr_56105_56157[(1)] = (20));

} else {
var statearr_56106_56158 = state_56064__$1;
(statearr_56106_56158[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (11))){
var inst_55976 = (state_56064[(10)]);
var inst_56003 = cljs.core.seq(inst_55976);
var state_56064__$1 = state_56064;
if(inst_56003){
var statearr_56107_56159 = state_56064__$1;
(statearr_56107_56159[(1)] = (14));

} else {
var statearr_56108_56160 = state_56064__$1;
(statearr_56108_56160[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (9))){
var inst_55998 = (state_56064[(7)]);
var inst_55994 = (state_56064[(8)]);
var inst_56026 = (inst_55998.cljs$core$IFn$_invoke$arity$2 ? inst_55998.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_55994) : inst_55998.call(null,flush_ch,inst_55994));
var state_56064__$1 = state_56064;
if(cljs.core.truth_(inst_56026)){
var statearr_56109_56161 = state_56064__$1;
(statearr_56109_56161[(1)] = (23));

} else {
var statearr_56110_56162 = state_56064__$1;
(statearr_56110_56162[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (5))){
var inst_55985 = (state_56064[(12)]);
var state_56064__$1 = state_56064;
var statearr_56111_56163 = state_56064__$1;
(statearr_56111_56163[(2)] = inst_55985);

(statearr_56111_56163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (14))){
var inst_55976 = (state_56064[(10)]);
var inst_56005 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55976) : on_flush.call(null,inst_55976));
var state_56064__$1 = state_56064;
var statearr_56112_56164 = state_56064__$1;
(statearr_56112_56164[(2)] = inst_56005);

(statearr_56112_56164[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (26))){
var inst_55976 = (state_56064[(10)]);
var inst_56030 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55976) : on_flush.call(null,inst_55976));
var state_56064__$1 = state_56064;
var statearr_56113_56165 = state_56064__$1;
(statearr_56113_56165[(2)] = inst_56030);

(statearr_56113_56165[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (16))){
var inst_56008 = (state_56064[(2)]);
var state_56064__$1 = state_56064;
var statearr_56114_56166 = state_56064__$1;
(statearr_56114_56166[(2)] = inst_56008);

(statearr_56114_56166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (30))){
var inst_55994 = (state_56064[(8)]);
var inst_56049 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55994)].join('');
var inst_56053 = (new Error(inst_56049));
var inst_56054 = (function(){throw inst_56053})();
var state_56064__$1 = state_56064;
var statearr_56115_56167 = state_56064__$1;
(statearr_56115_56167[(2)] = inst_56054);

(statearr_56115_56167[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (10))){
var inst_56060 = (state_56064[(2)]);
var state_56064__$1 = state_56064;
var statearr_56116_56168 = state_56064__$1;
(statearr_56116_56168[(2)] = inst_56060);

(statearr_56116_56168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (18))){
var inst_56011 = (state_56064[(16)]);
var state_56064__$1 = state_56064;
var statearr_56117_56169 = state_56064__$1;
(statearr_56117_56169[(2)] = inst_56011);

(statearr_56117_56169[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56065 === (8))){
var inst_55993 = (state_56064[(9)]);
var inst_56001 = (inst_55993 == null);
var state_56064__$1 = state_56064;
if(cljs.core.truth_(inst_56001)){
var statearr_56118_56170 = state_56064__$1;
(statearr_56118_56170[(1)] = (11));

} else {
var statearr_56119_56171 = state_56064__$1;
(statearr_56119_56171[(1)] = (12));

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
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = null;
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0 = (function (){
var statearr_56120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56120[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56120[(1)] = (1));

return statearr_56120;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_56064){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56064);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56121){var ex__32294__auto__ = e56121;
var statearr_56122_56172 = state_56064;
(statearr_56122_56172[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56064[(4)]))){
var statearr_56123_56174 = state_56064;
(statearr_56123_56174[(1)] = cljs.core.first((state_56064[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56175 = state_56064;
state_56064 = G__56175;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_56064){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_56064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56124 = f__32362__auto__();
(statearr_56124[(6)] = c__32361__auto___56125);

return statearr_56124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
