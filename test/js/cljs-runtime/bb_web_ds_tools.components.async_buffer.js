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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__55986){
var map__55987 = p__55986;
var map__55987__$1 = cljs.core.__destructure_map(map__55987);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55987__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55987__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55987__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56078){
var state_val_56079 = (state_56078[(1)]);
if((state_val_56079 === (7))){
var inst_56015 = (state_56078[(7)]);
var inst_56011 = (state_56078[(8)]);
var inst_56009 = (state_56078[(2)]);
var inst_56010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56009,(0),null);
var inst_56011__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56009,(1),null);
var inst_56015__$1 = cljs.core._EQ_;
var inst_56016 = (inst_56015__$1.cljs$core$IFn$_invoke$arity$2 ? inst_56015__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_56011__$1) : inst_56015__$1.call(null,input_chan,inst_56011__$1));
var state_56078__$1 = (function (){var statearr_56080 = state_56078;
(statearr_56080[(9)] = inst_56010);

(statearr_56080[(8)] = inst_56011__$1);

(statearr_56080[(7)] = inst_56015__$1);

return statearr_56080;
})();
if(cljs.core.truth_(inst_56016)){
var statearr_56081_56155 = state_56078__$1;
(statearr_56081_56155[(1)] = (8));

} else {
var statearr_56082_56156 = state_56078__$1;
(statearr_56082_56156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (20))){
var inst_56036 = cljs.core.async.timeout(flush_interval_ms);
var state_56078__$1 = state_56078;
var statearr_56083_56157 = state_56078__$1;
(statearr_56083_56157[(2)] = inst_56036);

(statearr_56083_56157[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (27))){
var state_56078__$1 = state_56078;
var statearr_56084_56159 = state_56078__$1;
(statearr_56084_56159[(2)] = null);

(statearr_56084_56159[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (1))){
var inst_55988 = cljs.core.PersistentVector.EMPTY;
var inst_55989 = inst_55988;
var inst_55990 = null;
var state_56078__$1 = (function (){var statearr_56085 = state_56078;
(statearr_56085[(10)] = inst_55989);

(statearr_56085[(11)] = inst_55990);

return statearr_56085;
})();
var statearr_56086_56160 = state_56078__$1;
(statearr_56086_56160[(2)] = null);

(statearr_56086_56160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (24))){
var inst_56015 = (state_56078[(7)]);
var inst_55990 = (state_56078[(11)]);
var inst_56011 = (state_56078[(8)]);
var inst_56055 = (inst_56015.cljs$core$IFn$_invoke$arity$2 ? inst_56015.cljs$core$IFn$_invoke$arity$2(inst_55990,inst_56011) : inst_56015.call(null,inst_55990,inst_56011));
var state_56078__$1 = state_56078;
if(cljs.core.truth_(inst_56055)){
var statearr_56087_56163 = state_56078__$1;
(statearr_56087_56163[(1)] = (29));

} else {
var statearr_56088_56175 = state_56078__$1;
(statearr_56088_56175[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (4))){
var inst_55998 = (state_56078[(12)]);
var inst_55990 = (state_56078[(11)]);
var inst_56001 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55998,inst_55990);
var state_56078__$1 = state_56078;
var statearr_56089_56179 = state_56078__$1;
(statearr_56089_56179[(2)] = inst_56001);

(statearr_56089_56179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (15))){
var state_56078__$1 = state_56078;
var statearr_56090_56180 = state_56078__$1;
(statearr_56090_56180[(2)] = null);

(statearr_56090_56180[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (21))){
var inst_55990 = (state_56078[(11)]);
var state_56078__$1 = state_56078;
var statearr_56091_56181 = state_56078__$1;
(statearr_56091_56181[(2)] = inst_55990);

(statearr_56091_56181[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (31))){
var inst_56070 = (state_56078[(2)]);
var state_56078__$1 = state_56078;
var statearr_56092_56182 = state_56078__$1;
(statearr_56092_56182[(2)] = inst_56070);

(statearr_56092_56182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (32))){
var inst_55989 = (state_56078[(10)]);
var inst_56059 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55989) : on_flush.call(null,inst_55989));
var state_56078__$1 = state_56078;
var statearr_56093_56184 = state_56078__$1;
(statearr_56093_56184[(2)] = inst_56059);

(statearr_56093_56184[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (33))){
var state_56078__$1 = state_56078;
var statearr_56094_56185 = state_56078__$1;
(statearr_56094_56185[(2)] = null);

(statearr_56094_56185[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (13))){
var inst_56042 = (state_56078[(2)]);
var state_56078__$1 = state_56078;
var statearr_56095_56186 = state_56078__$1;
(statearr_56095_56186[(2)] = inst_56042);

(statearr_56095_56186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (22))){
var inst_56027 = (state_56078[(13)]);
var inst_56039 = (state_56078[(2)]);
var inst_55989 = inst_56027;
var inst_55990 = inst_56039;
var state_56078__$1 = (function (){var statearr_56096 = state_56078;
(statearr_56096[(10)] = inst_55989);

(statearr_56096[(11)] = inst_55990);

return statearr_56096;
})();
var statearr_56097_56187 = state_56078__$1;
(statearr_56097_56187[(2)] = null);

(statearr_56097_56187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (29))){
var inst_55989 = (state_56078[(10)]);
var inst_56057 = cljs.core.seq(inst_55989);
var state_56078__$1 = state_56078;
if(inst_56057){
var statearr_56098_56188 = state_56078__$1;
(statearr_56098_56188[(1)] = (32));

} else {
var statearr_56099_56189 = state_56078__$1;
(statearr_56099_56189[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (6))){
var inst_56004 = (state_56078[(2)]);
var state_56078__$1 = state_56078;
return cljs.core.async.ioc_alts_BANG_(state_56078__$1,(7),inst_56004);
} else {
if((state_val_56079 === (28))){
var inst_56051 = (state_56078[(2)]);
var inst_56052 = cljs.core.PersistentVector.EMPTY;
var inst_55989 = inst_56052;
var inst_55990 = null;
var state_56078__$1 = (function (){var statearr_56100 = state_56078;
(statearr_56100[(14)] = inst_56051);

(statearr_56100[(10)] = inst_55989);

(statearr_56100[(11)] = inst_55990);

return statearr_56100;
})();
var statearr_56102_56191 = state_56078__$1;
(statearr_56102_56191[(2)] = null);

(statearr_56102_56191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (25))){
var inst_56072 = (state_56078[(2)]);
var state_56078__$1 = state_56078;
var statearr_56103_56196 = state_56078__$1;
(statearr_56103_56196[(2)] = inst_56072);

(statearr_56103_56196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (34))){
var inst_56062 = (state_56078[(2)]);
var inst_56063 = cljs.core.PersistentVector.EMPTY;
var inst_55989 = inst_56063;
var inst_55990 = null;
var state_56078__$1 = (function (){var statearr_56104 = state_56078;
(statearr_56104[(15)] = inst_56062);

(statearr_56104[(10)] = inst_55989);

(statearr_56104[(11)] = inst_55990);

return statearr_56104;
})();
var statearr_56109_56197 = state_56078__$1;
(statearr_56109_56197[(2)] = null);

(statearr_56109_56197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (17))){
var inst_55990 = (state_56078[(11)]);
var inst_56031 = (inst_55990 == null);
var state_56078__$1 = state_56078;
var statearr_56111_56198 = state_56078__$1;
(statearr_56111_56198[(2)] = inst_56031);

(statearr_56111_56198[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (3))){
var inst_56076 = (state_56078[(2)]);
var state_56078__$1 = state_56078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56078__$1,inst_56076);
} else {
if((state_val_56079 === (12))){
var inst_55989 = (state_56078[(10)]);
var inst_56010 = (state_56078[(9)]);
var inst_56028 = (state_56078[(16)]);
var inst_56027 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55989,inst_56010);
var inst_56028__$1 = flush_interval_ms;
var state_56078__$1 = (function (){var statearr_56112 = state_56078;
(statearr_56112[(13)] = inst_56027);

(statearr_56112[(16)] = inst_56028__$1);

return statearr_56112;
})();
if(cljs.core.truth_(inst_56028__$1)){
var statearr_56113_56201 = state_56078__$1;
(statearr_56113_56201[(1)] = (17));

} else {
var statearr_56115_56202 = state_56078__$1;
(statearr_56115_56202[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (2))){
var inst_55990 = (state_56078[(11)]);
var inst_55996 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55997 = [input_chan,flush_ch];
var inst_55998 = (new cljs.core.PersistentVector(null,2,(5),inst_55996,inst_55997,null));
var state_56078__$1 = (function (){var statearr_56116 = state_56078;
(statearr_56116[(12)] = inst_55998);

return statearr_56116;
})();
if(cljs.core.truth_(inst_55990)){
var statearr_56117_56204 = state_56078__$1;
(statearr_56117_56204[(1)] = (4));

} else {
var statearr_56118_56205 = state_56078__$1;
(statearr_56118_56205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (23))){
var inst_55989 = (state_56078[(10)]);
var inst_56046 = cljs.core.seq(inst_55989);
var state_56078__$1 = state_56078;
if(inst_56046){
var statearr_56119_56206 = state_56078__$1;
(statearr_56119_56206[(1)] = (26));

} else {
var statearr_56120_56209 = state_56078__$1;
(statearr_56120_56209[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (19))){
var inst_56034 = (state_56078[(2)]);
var state_56078__$1 = state_56078;
if(cljs.core.truth_(inst_56034)){
var statearr_56121_56211 = state_56078__$1;
(statearr_56121_56211[(1)] = (20));

} else {
var statearr_56122_56212 = state_56078__$1;
(statearr_56122_56212[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (11))){
var inst_55989 = (state_56078[(10)]);
var inst_56020 = cljs.core.seq(inst_55989);
var state_56078__$1 = state_56078;
if(inst_56020){
var statearr_56123_56213 = state_56078__$1;
(statearr_56123_56213[(1)] = (14));

} else {
var statearr_56124_56214 = state_56078__$1;
(statearr_56124_56214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (9))){
var inst_56015 = (state_56078[(7)]);
var inst_56011 = (state_56078[(8)]);
var inst_56044 = (inst_56015.cljs$core$IFn$_invoke$arity$2 ? inst_56015.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_56011) : inst_56015.call(null,flush_ch,inst_56011));
var state_56078__$1 = state_56078;
if(cljs.core.truth_(inst_56044)){
var statearr_56126_56215 = state_56078__$1;
(statearr_56126_56215[(1)] = (23));

} else {
var statearr_56127_56216 = state_56078__$1;
(statearr_56127_56216[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (5))){
var inst_55998 = (state_56078[(12)]);
var state_56078__$1 = state_56078;
var statearr_56129_56218 = state_56078__$1;
(statearr_56129_56218[(2)] = inst_55998);

(statearr_56129_56218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (14))){
var inst_55989 = (state_56078[(10)]);
var inst_56022 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55989) : on_flush.call(null,inst_55989));
var state_56078__$1 = state_56078;
var statearr_56130_56219 = state_56078__$1;
(statearr_56130_56219[(2)] = inst_56022);

(statearr_56130_56219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (26))){
var inst_55989 = (state_56078[(10)]);
var inst_56048 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55989) : on_flush.call(null,inst_55989));
var state_56078__$1 = state_56078;
var statearr_56131_56224 = state_56078__$1;
(statearr_56131_56224[(2)] = inst_56048);

(statearr_56131_56224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (16))){
var inst_56025 = (state_56078[(2)]);
var state_56078__$1 = state_56078;
var statearr_56132_56229 = state_56078__$1;
(statearr_56132_56229[(2)] = inst_56025);

(statearr_56132_56229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (30))){
var inst_56011 = (state_56078[(8)]);
var inst_56066 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56011)].join('');
var inst_56067 = (new Error(inst_56066));
var inst_56068 = (function(){throw inst_56067})();
var state_56078__$1 = state_56078;
var statearr_56134_56232 = state_56078__$1;
(statearr_56134_56232[(2)] = inst_56068);

(statearr_56134_56232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (10))){
var inst_56074 = (state_56078[(2)]);
var state_56078__$1 = state_56078;
var statearr_56141_56233 = state_56078__$1;
(statearr_56141_56233[(2)] = inst_56074);

(statearr_56141_56233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (18))){
var inst_56028 = (state_56078[(16)]);
var state_56078__$1 = state_56078;
var statearr_56142_56234 = state_56078__$1;
(statearr_56142_56234[(2)] = inst_56028);

(statearr_56142_56234[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56079 === (8))){
var inst_56010 = (state_56078[(9)]);
var inst_56018 = (inst_56010 == null);
var state_56078__$1 = state_56078;
if(cljs.core.truth_(inst_56018)){
var statearr_56143_56235 = state_56078__$1;
(statearr_56143_56235[(1)] = (11));

} else {
var statearr_56144_56236 = state_56078__$1;
(statearr_56144_56236[(1)] = (12));

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
var statearr_56146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56146[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56146[(1)] = (1));

return statearr_56146;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_56078){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56078);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56147){var ex__32294__auto__ = e56147;
var statearr_56148_56242 = state_56078;
(statearr_56148_56242[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56078[(4)]))){
var statearr_56149_56243 = state_56078;
(statearr_56149_56243[(1)] = cljs.core.first((state_56078[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56244 = state_56078;
state_56078 = G__56244;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_56078){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_56078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56151 = f__32362__auto__();
(statearr_56151[(6)] = c__32361__auto___56152);

return statearr_56151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
