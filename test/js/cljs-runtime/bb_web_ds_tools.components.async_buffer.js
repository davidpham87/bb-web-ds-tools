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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__49931){
var map__49932 = p__49931;
var map__49932__$1 = cljs.core.__destructure_map(map__49932);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49932__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49932__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49932__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32610__auto___50097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_50018){
var state_val_50019 = (state_50018[(1)]);
if((state_val_50019 === (7))){
var inst_49956 = (state_50018[(7)]);
var inst_49952 = (state_50018[(8)]);
var inst_49950 = (state_50018[(2)]);
var inst_49951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49950,(0),null);
var inst_49952__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49950,(1),null);
var inst_49956__$1 = cljs.core._EQ_;
var inst_49957 = (inst_49956__$1.cljs$core$IFn$_invoke$arity$2 ? inst_49956__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_49952__$1) : inst_49956__$1.call(null,input_chan,inst_49952__$1));
var state_50018__$1 = (function (){var statearr_50035 = state_50018;
(statearr_50035[(9)] = inst_49951);

(statearr_50035[(8)] = inst_49952__$1);

(statearr_50035[(7)] = inst_49956__$1);

return statearr_50035;
})();
if(cljs.core.truth_(inst_49957)){
var statearr_50036_50098 = state_50018__$1;
(statearr_50036_50098[(1)] = (8));

} else {
var statearr_50037_50099 = state_50018__$1;
(statearr_50037_50099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (20))){
var inst_49976 = cljs.core.async.timeout(flush_interval_ms);
var state_50018__$1 = state_50018;
var statearr_50038_50100 = state_50018__$1;
(statearr_50038_50100[(2)] = inst_49976);

(statearr_50038_50100[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (27))){
var state_50018__$1 = state_50018;
var statearr_50039_50101 = state_50018__$1;
(statearr_50039_50101[(2)] = null);

(statearr_50039_50101[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (1))){
var inst_49933 = cljs.core.PersistentVector.EMPTY;
var inst_49934 = inst_49933;
var inst_49935 = null;
var state_50018__$1 = (function (){var statearr_50040 = state_50018;
(statearr_50040[(10)] = inst_49934);

(statearr_50040[(11)] = inst_49935);

return statearr_50040;
})();
var statearr_50041_50102 = state_50018__$1;
(statearr_50041_50102[(2)] = null);

(statearr_50041_50102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (24))){
var inst_49956 = (state_50018[(7)]);
var inst_49935 = (state_50018[(11)]);
var inst_49952 = (state_50018[(8)]);
var inst_49995 = (inst_49956.cljs$core$IFn$_invoke$arity$2 ? inst_49956.cljs$core$IFn$_invoke$arity$2(inst_49935,inst_49952) : inst_49956.call(null,inst_49935,inst_49952));
var state_50018__$1 = state_50018;
if(cljs.core.truth_(inst_49995)){
var statearr_50042_50103 = state_50018__$1;
(statearr_50042_50103[(1)] = (29));

} else {
var statearr_50043_50104 = state_50018__$1;
(statearr_50043_50104[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (4))){
var inst_49943 = (state_50018[(12)]);
var inst_49935 = (state_50018[(11)]);
var inst_49945 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49943,inst_49935);
var state_50018__$1 = state_50018;
var statearr_50044_50105 = state_50018__$1;
(statearr_50044_50105[(2)] = inst_49945);

(statearr_50044_50105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (15))){
var state_50018__$1 = state_50018;
var statearr_50045_50106 = state_50018__$1;
(statearr_50045_50106[(2)] = null);

(statearr_50045_50106[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (21))){
var inst_49935 = (state_50018[(11)]);
var state_50018__$1 = state_50018;
var statearr_50046_50107 = state_50018__$1;
(statearr_50046_50107[(2)] = inst_49935);

(statearr_50046_50107[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (31))){
var inst_50010 = (state_50018[(2)]);
var state_50018__$1 = state_50018;
var statearr_50047_50108 = state_50018__$1;
(statearr_50047_50108[(2)] = inst_50010);

(statearr_50047_50108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (32))){
var inst_49934 = (state_50018[(10)]);
var inst_49999 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49934) : on_flush.call(null,inst_49934));
var state_50018__$1 = state_50018;
var statearr_50053_50109 = state_50018__$1;
(statearr_50053_50109[(2)] = inst_49999);

(statearr_50053_50109[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (33))){
var state_50018__$1 = state_50018;
var statearr_50054_50110 = state_50018__$1;
(statearr_50054_50110[(2)] = null);

(statearr_50054_50110[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (13))){
var inst_49982 = (state_50018[(2)]);
var state_50018__$1 = state_50018;
var statearr_50055_50111 = state_50018__$1;
(statearr_50055_50111[(2)] = inst_49982);

(statearr_50055_50111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (22))){
var inst_49968 = (state_50018[(13)]);
var inst_49979 = (state_50018[(2)]);
var inst_49934 = inst_49968;
var inst_49935 = inst_49979;
var state_50018__$1 = (function (){var statearr_50056 = state_50018;
(statearr_50056[(10)] = inst_49934);

(statearr_50056[(11)] = inst_49935);

return statearr_50056;
})();
var statearr_50057_50112 = state_50018__$1;
(statearr_50057_50112[(2)] = null);

(statearr_50057_50112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (29))){
var inst_49934 = (state_50018[(10)]);
var inst_49997 = cljs.core.seq(inst_49934);
var state_50018__$1 = state_50018;
if(inst_49997){
var statearr_50058_50113 = state_50018__$1;
(statearr_50058_50113[(1)] = (32));

} else {
var statearr_50059_50114 = state_50018__$1;
(statearr_50059_50114[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (6))){
var inst_49948 = (state_50018[(2)]);
var state_50018__$1 = state_50018;
return cljs.core.async.ioc_alts_BANG_(state_50018__$1,(7),inst_49948);
} else {
if((state_val_50019 === (28))){
var inst_49991 = (state_50018[(2)]);
var inst_49992 = cljs.core.PersistentVector.EMPTY;
var inst_49934 = inst_49992;
var inst_49935 = null;
var state_50018__$1 = (function (){var statearr_50060 = state_50018;
(statearr_50060[(14)] = inst_49991);

(statearr_50060[(10)] = inst_49934);

(statearr_50060[(11)] = inst_49935);

return statearr_50060;
})();
var statearr_50061_50115 = state_50018__$1;
(statearr_50061_50115[(2)] = null);

(statearr_50061_50115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (25))){
var inst_50012 = (state_50018[(2)]);
var state_50018__$1 = state_50018;
var statearr_50062_50116 = state_50018__$1;
(statearr_50062_50116[(2)] = inst_50012);

(statearr_50062_50116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (34))){
var inst_50002 = (state_50018[(2)]);
var inst_50003 = cljs.core.PersistentVector.EMPTY;
var inst_49934 = inst_50003;
var inst_49935 = null;
var state_50018__$1 = (function (){var statearr_50063 = state_50018;
(statearr_50063[(15)] = inst_50002);

(statearr_50063[(10)] = inst_49934);

(statearr_50063[(11)] = inst_49935);

return statearr_50063;
})();
var statearr_50064_50117 = state_50018__$1;
(statearr_50064_50117[(2)] = null);

(statearr_50064_50117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (17))){
var inst_49935 = (state_50018[(11)]);
var inst_49971 = (inst_49935 == null);
var state_50018__$1 = state_50018;
var statearr_50065_50118 = state_50018__$1;
(statearr_50065_50118[(2)] = inst_49971);

(statearr_50065_50118[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (3))){
var inst_50016 = (state_50018[(2)]);
var state_50018__$1 = state_50018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50018__$1,inst_50016);
} else {
if((state_val_50019 === (12))){
var inst_49934 = (state_50018[(10)]);
var inst_49951 = (state_50018[(9)]);
var inst_49969 = (state_50018[(16)]);
var inst_49968 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49934,inst_49951);
var inst_49969__$1 = flush_interval_ms;
var state_50018__$1 = (function (){var statearr_50069 = state_50018;
(statearr_50069[(13)] = inst_49968);

(statearr_50069[(16)] = inst_49969__$1);

return statearr_50069;
})();
if(cljs.core.truth_(inst_49969__$1)){
var statearr_50070_50119 = state_50018__$1;
(statearr_50070_50119[(1)] = (17));

} else {
var statearr_50071_50120 = state_50018__$1;
(statearr_50071_50120[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (2))){
var inst_49935 = (state_50018[(11)]);
var inst_49941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49942 = [input_chan,flush_ch];
var inst_49943 = (new cljs.core.PersistentVector(null,2,(5),inst_49941,inst_49942,null));
var state_50018__$1 = (function (){var statearr_50072 = state_50018;
(statearr_50072[(12)] = inst_49943);

return statearr_50072;
})();
if(cljs.core.truth_(inst_49935)){
var statearr_50073_50121 = state_50018__$1;
(statearr_50073_50121[(1)] = (4));

} else {
var statearr_50074_50122 = state_50018__$1;
(statearr_50074_50122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (23))){
var inst_49934 = (state_50018[(10)]);
var inst_49986 = cljs.core.seq(inst_49934);
var state_50018__$1 = state_50018;
if(inst_49986){
var statearr_50075_50123 = state_50018__$1;
(statearr_50075_50123[(1)] = (26));

} else {
var statearr_50076_50124 = state_50018__$1;
(statearr_50076_50124[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (19))){
var inst_49974 = (state_50018[(2)]);
var state_50018__$1 = state_50018;
if(cljs.core.truth_(inst_49974)){
var statearr_50077_50125 = state_50018__$1;
(statearr_50077_50125[(1)] = (20));

} else {
var statearr_50078_50126 = state_50018__$1;
(statearr_50078_50126[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (11))){
var inst_49934 = (state_50018[(10)]);
var inst_49961 = cljs.core.seq(inst_49934);
var state_50018__$1 = state_50018;
if(inst_49961){
var statearr_50079_50127 = state_50018__$1;
(statearr_50079_50127[(1)] = (14));

} else {
var statearr_50080_50128 = state_50018__$1;
(statearr_50080_50128[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (9))){
var inst_49956 = (state_50018[(7)]);
var inst_49952 = (state_50018[(8)]);
var inst_49984 = (inst_49956.cljs$core$IFn$_invoke$arity$2 ? inst_49956.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_49952) : inst_49956.call(null,flush_ch,inst_49952));
var state_50018__$1 = state_50018;
if(cljs.core.truth_(inst_49984)){
var statearr_50081_50129 = state_50018__$1;
(statearr_50081_50129[(1)] = (23));

} else {
var statearr_50082_50130 = state_50018__$1;
(statearr_50082_50130[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (5))){
var inst_49943 = (state_50018[(12)]);
var state_50018__$1 = state_50018;
var statearr_50083_50131 = state_50018__$1;
(statearr_50083_50131[(2)] = inst_49943);

(statearr_50083_50131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (14))){
var inst_49934 = (state_50018[(10)]);
var inst_49963 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49934) : on_flush.call(null,inst_49934));
var state_50018__$1 = state_50018;
var statearr_50084_50132 = state_50018__$1;
(statearr_50084_50132[(2)] = inst_49963);

(statearr_50084_50132[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (26))){
var inst_49934 = (state_50018[(10)]);
var inst_49988 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49934) : on_flush.call(null,inst_49934));
var state_50018__$1 = state_50018;
var statearr_50085_50133 = state_50018__$1;
(statearr_50085_50133[(2)] = inst_49988);

(statearr_50085_50133[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (16))){
var inst_49966 = (state_50018[(2)]);
var state_50018__$1 = state_50018;
var statearr_50086_50134 = state_50018__$1;
(statearr_50086_50134[(2)] = inst_49966);

(statearr_50086_50134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (30))){
var inst_49952 = (state_50018[(8)]);
var inst_50006 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49952)].join('');
var inst_50007 = (new Error(inst_50006));
var inst_50008 = (function(){throw inst_50007})();
var state_50018__$1 = state_50018;
var statearr_50087_50135 = state_50018__$1;
(statearr_50087_50135[(2)] = inst_50008);

(statearr_50087_50135[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (10))){
var inst_50014 = (state_50018[(2)]);
var state_50018__$1 = state_50018;
var statearr_50088_50136 = state_50018__$1;
(statearr_50088_50136[(2)] = inst_50014);

(statearr_50088_50136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (18))){
var inst_49969 = (state_50018[(16)]);
var state_50018__$1 = state_50018;
var statearr_50089_50137 = state_50018__$1;
(statearr_50089_50137[(2)] = inst_49969);

(statearr_50089_50137[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50019 === (8))){
var inst_49951 = (state_50018[(9)]);
var inst_49959 = (inst_49951 == null);
var state_50018__$1 = state_50018;
if(cljs.core.truth_(inst_49959)){
var statearr_50090_50138 = state_50018__$1;
(statearr_50090_50138[(1)] = (11));

} else {
var statearr_50091_50139 = state_50018__$1;
(statearr_50091_50139[(1)] = (12));

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
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto__ = null;
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto____0 = (function (){
var statearr_50092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50092[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto__);

(statearr_50092[(1)] = (1));

return statearr_50092;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto____1 = (function (state_50018){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_50018);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e50093){var ex__32543__auto__ = e50093;
var statearr_50094_50140 = state_50018;
(statearr_50094_50140[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_50018[(4)]))){
var statearr_50095_50141 = state_50018;
(statearr_50095_50141[(1)] = cljs.core.first((state_50018[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50142 = state_50018;
state_50018 = G__50142;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto__ = function(state_50018){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto____1.call(this,state_50018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_50096 = f__32611__auto__();
(statearr_50096[(6)] = c__32610__auto___50097);

return statearr_50096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
