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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__56046){
var map__56047 = p__56046;
var map__56047__$1 = cljs.core.__destructure_map(map__56047);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56047__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56047__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56047__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56134){
var state_val_56135 = (state_56134[(1)]);
if((state_val_56135 === (7))){
var inst_56071 = (state_56134[(7)]);
var inst_56067 = (state_56134[(8)]);
var inst_56065 = (state_56134[(2)]);
var inst_56066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56065,(0),null);
var inst_56067__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56065,(1),null);
var inst_56071__$1 = cljs.core._EQ_;
var inst_56072 = (inst_56071__$1.cljs$core$IFn$_invoke$arity$2 ? inst_56071__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_56067__$1) : inst_56071__$1.call(null,input_chan,inst_56067__$1));
var state_56134__$1 = (function (){var statearr_56137 = state_56134;
(statearr_56137[(9)] = inst_56066);

(statearr_56137[(8)] = inst_56067__$1);

(statearr_56137[(7)] = inst_56071__$1);

return statearr_56137;
})();
if(cljs.core.truth_(inst_56072)){
var statearr_56138_56209 = state_56134__$1;
(statearr_56138_56209[(1)] = (8));

} else {
var statearr_56139_56210 = state_56134__$1;
(statearr_56139_56210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (20))){
var inst_56092 = cljs.core.async.timeout(flush_interval_ms);
var state_56134__$1 = state_56134;
var statearr_56140_56211 = state_56134__$1;
(statearr_56140_56211[(2)] = inst_56092);

(statearr_56140_56211[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (27))){
var state_56134__$1 = state_56134;
var statearr_56141_56212 = state_56134__$1;
(statearr_56141_56212[(2)] = null);

(statearr_56141_56212[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (1))){
var inst_56048 = cljs.core.PersistentVector.EMPTY;
var inst_56049 = inst_56048;
var inst_56050 = null;
var state_56134__$1 = (function (){var statearr_56142 = state_56134;
(statearr_56142[(10)] = inst_56049);

(statearr_56142[(11)] = inst_56050);

return statearr_56142;
})();
var statearr_56143_56213 = state_56134__$1;
(statearr_56143_56213[(2)] = null);

(statearr_56143_56213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (24))){
var inst_56071 = (state_56134[(7)]);
var inst_56050 = (state_56134[(11)]);
var inst_56067 = (state_56134[(8)]);
var inst_56111 = (inst_56071.cljs$core$IFn$_invoke$arity$2 ? inst_56071.cljs$core$IFn$_invoke$arity$2(inst_56050,inst_56067) : inst_56071.call(null,inst_56050,inst_56067));
var state_56134__$1 = state_56134;
if(cljs.core.truth_(inst_56111)){
var statearr_56146_56214 = state_56134__$1;
(statearr_56146_56214[(1)] = (29));

} else {
var statearr_56148_56215 = state_56134__$1;
(statearr_56148_56215[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (4))){
var inst_56058 = (state_56134[(12)]);
var inst_56050 = (state_56134[(11)]);
var inst_56060 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56058,inst_56050);
var state_56134__$1 = state_56134;
var statearr_56153_56216 = state_56134__$1;
(statearr_56153_56216[(2)] = inst_56060);

(statearr_56153_56216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (15))){
var state_56134__$1 = state_56134;
var statearr_56154_56217 = state_56134__$1;
(statearr_56154_56217[(2)] = null);

(statearr_56154_56217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (21))){
var inst_56050 = (state_56134[(11)]);
var state_56134__$1 = state_56134;
var statearr_56155_56218 = state_56134__$1;
(statearr_56155_56218[(2)] = inst_56050);

(statearr_56155_56218[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (31))){
var inst_56126 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
var statearr_56159_56219 = state_56134__$1;
(statearr_56159_56219[(2)] = inst_56126);

(statearr_56159_56219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (32))){
var inst_56049 = (state_56134[(10)]);
var inst_56115 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56049) : on_flush.call(null,inst_56049));
var state_56134__$1 = state_56134;
var statearr_56160_56220 = state_56134__$1;
(statearr_56160_56220[(2)] = inst_56115);

(statearr_56160_56220[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (33))){
var state_56134__$1 = state_56134;
var statearr_56161_56221 = state_56134__$1;
(statearr_56161_56221[(2)] = null);

(statearr_56161_56221[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (13))){
var inst_56098 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
var statearr_56165_56222 = state_56134__$1;
(statearr_56165_56222[(2)] = inst_56098);

(statearr_56165_56222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (22))){
var inst_56083 = (state_56134[(13)]);
var inst_56095 = (state_56134[(2)]);
var inst_56049 = inst_56083;
var inst_56050 = inst_56095;
var state_56134__$1 = (function (){var statearr_56166 = state_56134;
(statearr_56166[(10)] = inst_56049);

(statearr_56166[(11)] = inst_56050);

return statearr_56166;
})();
var statearr_56167_56223 = state_56134__$1;
(statearr_56167_56223[(2)] = null);

(statearr_56167_56223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (29))){
var inst_56049 = (state_56134[(10)]);
var inst_56113 = cljs.core.seq(inst_56049);
var state_56134__$1 = state_56134;
if(inst_56113){
var statearr_56168_56224 = state_56134__$1;
(statearr_56168_56224[(1)] = (32));

} else {
var statearr_56169_56225 = state_56134__$1;
(statearr_56169_56225[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (6))){
var inst_56063 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
return cljs.core.async.ioc_alts_BANG_(state_56134__$1,(7),inst_56063);
} else {
if((state_val_56135 === (28))){
var inst_56107 = (state_56134[(2)]);
var inst_56108 = cljs.core.PersistentVector.EMPTY;
var inst_56049 = inst_56108;
var inst_56050 = null;
var state_56134__$1 = (function (){var statearr_56170 = state_56134;
(statearr_56170[(14)] = inst_56107);

(statearr_56170[(10)] = inst_56049);

(statearr_56170[(11)] = inst_56050);

return statearr_56170;
})();
var statearr_56171_56226 = state_56134__$1;
(statearr_56171_56226[(2)] = null);

(statearr_56171_56226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (25))){
var inst_56128 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
var statearr_56172_56227 = state_56134__$1;
(statearr_56172_56227[(2)] = inst_56128);

(statearr_56172_56227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (34))){
var inst_56118 = (state_56134[(2)]);
var inst_56119 = cljs.core.PersistentVector.EMPTY;
var inst_56049 = inst_56119;
var inst_56050 = null;
var state_56134__$1 = (function (){var statearr_56173 = state_56134;
(statearr_56173[(15)] = inst_56118);

(statearr_56173[(10)] = inst_56049);

(statearr_56173[(11)] = inst_56050);

return statearr_56173;
})();
var statearr_56174_56228 = state_56134__$1;
(statearr_56174_56228[(2)] = null);

(statearr_56174_56228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (17))){
var inst_56050 = (state_56134[(11)]);
var inst_56087 = (inst_56050 == null);
var state_56134__$1 = state_56134;
var statearr_56175_56229 = state_56134__$1;
(statearr_56175_56229[(2)] = inst_56087);

(statearr_56175_56229[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (3))){
var inst_56132 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56134__$1,inst_56132);
} else {
if((state_val_56135 === (12))){
var inst_56049 = (state_56134[(10)]);
var inst_56066 = (state_56134[(9)]);
var inst_56085 = (state_56134[(16)]);
var inst_56083 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56049,inst_56066);
var inst_56085__$1 = flush_interval_ms;
var state_56134__$1 = (function (){var statearr_56177 = state_56134;
(statearr_56177[(13)] = inst_56083);

(statearr_56177[(16)] = inst_56085__$1);

return statearr_56177;
})();
if(cljs.core.truth_(inst_56085__$1)){
var statearr_56178_56230 = state_56134__$1;
(statearr_56178_56230[(1)] = (17));

} else {
var statearr_56179_56231 = state_56134__$1;
(statearr_56179_56231[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (2))){
var inst_56050 = (state_56134[(11)]);
var inst_56056 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56057 = [input_chan,flush_ch];
var inst_56058 = (new cljs.core.PersistentVector(null,2,(5),inst_56056,inst_56057,null));
var state_56134__$1 = (function (){var statearr_56180 = state_56134;
(statearr_56180[(12)] = inst_56058);

return statearr_56180;
})();
if(cljs.core.truth_(inst_56050)){
var statearr_56181_56232 = state_56134__$1;
(statearr_56181_56232[(1)] = (4));

} else {
var statearr_56182_56233 = state_56134__$1;
(statearr_56182_56233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (23))){
var inst_56049 = (state_56134[(10)]);
var inst_56102 = cljs.core.seq(inst_56049);
var state_56134__$1 = state_56134;
if(inst_56102){
var statearr_56183_56234 = state_56134__$1;
(statearr_56183_56234[(1)] = (26));

} else {
var statearr_56184_56235 = state_56134__$1;
(statearr_56184_56235[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (19))){
var inst_56090 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
if(cljs.core.truth_(inst_56090)){
var statearr_56185_56236 = state_56134__$1;
(statearr_56185_56236[(1)] = (20));

} else {
var statearr_56186_56237 = state_56134__$1;
(statearr_56186_56237[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (11))){
var inst_56049 = (state_56134[(10)]);
var inst_56076 = cljs.core.seq(inst_56049);
var state_56134__$1 = state_56134;
if(inst_56076){
var statearr_56187_56238 = state_56134__$1;
(statearr_56187_56238[(1)] = (14));

} else {
var statearr_56188_56239 = state_56134__$1;
(statearr_56188_56239[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (9))){
var inst_56071 = (state_56134[(7)]);
var inst_56067 = (state_56134[(8)]);
var inst_56100 = (inst_56071.cljs$core$IFn$_invoke$arity$2 ? inst_56071.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_56067) : inst_56071.call(null,flush_ch,inst_56067));
var state_56134__$1 = state_56134;
if(cljs.core.truth_(inst_56100)){
var statearr_56189_56240 = state_56134__$1;
(statearr_56189_56240[(1)] = (23));

} else {
var statearr_56190_56241 = state_56134__$1;
(statearr_56190_56241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (5))){
var inst_56058 = (state_56134[(12)]);
var state_56134__$1 = state_56134;
var statearr_56191_56242 = state_56134__$1;
(statearr_56191_56242[(2)] = inst_56058);

(statearr_56191_56242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (14))){
var inst_56049 = (state_56134[(10)]);
var inst_56078 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56049) : on_flush.call(null,inst_56049));
var state_56134__$1 = state_56134;
var statearr_56192_56243 = state_56134__$1;
(statearr_56192_56243[(2)] = inst_56078);

(statearr_56192_56243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (26))){
var inst_56049 = (state_56134[(10)]);
var inst_56104 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56049) : on_flush.call(null,inst_56049));
var state_56134__$1 = state_56134;
var statearr_56193_56244 = state_56134__$1;
(statearr_56193_56244[(2)] = inst_56104);

(statearr_56193_56244[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (16))){
var inst_56081 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
var statearr_56195_56245 = state_56134__$1;
(statearr_56195_56245[(2)] = inst_56081);

(statearr_56195_56245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (30))){
var inst_56067 = (state_56134[(8)]);
var inst_56122 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56067)].join('');
var inst_56123 = (new Error(inst_56122));
var inst_56124 = (function(){throw inst_56123})();
var state_56134__$1 = state_56134;
var statearr_56196_56246 = state_56134__$1;
(statearr_56196_56246[(2)] = inst_56124);

(statearr_56196_56246[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (10))){
var inst_56130 = (state_56134[(2)]);
var state_56134__$1 = state_56134;
var statearr_56198_56247 = state_56134__$1;
(statearr_56198_56247[(2)] = inst_56130);

(statearr_56198_56247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (18))){
var inst_56085 = (state_56134[(16)]);
var state_56134__$1 = state_56134;
var statearr_56199_56248 = state_56134__$1;
(statearr_56199_56248[(2)] = inst_56085);

(statearr_56199_56248[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56135 === (8))){
var inst_56066 = (state_56134[(9)]);
var inst_56074 = (inst_56066 == null);
var state_56134__$1 = state_56134;
if(cljs.core.truth_(inst_56074)){
var statearr_56200_56249 = state_56134__$1;
(statearr_56200_56249[(1)] = (11));

} else {
var statearr_56201_56250 = state_56134__$1;
(statearr_56201_56250[(1)] = (12));

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
var statearr_56203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56203[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56203[(1)] = (1));

return statearr_56203;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_56134){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56134);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56204){var ex__32294__auto__ = e56204;
var statearr_56205_56251 = state_56134;
(statearr_56205_56251[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56134[(4)]))){
var statearr_56206_56252 = state_56134;
(statearr_56206_56252[(1)] = cljs.core.first((state_56134[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56253 = state_56134;
state_56134 = G__56253;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_56134){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_56134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56207 = f__32362__auto__();
(statearr_56207[(6)] = c__32361__auto___56208);

return statearr_56207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
