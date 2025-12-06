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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__56059){
var map__56060 = p__56059;
var map__56060__$1 = cljs.core.__destructure_map(map__56060);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56060__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56060__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56060__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56146){
var state_val_56147 = (state_56146[(1)]);
if((state_val_56147 === (7))){
var inst_56084 = (state_56146[(7)]);
var inst_56080 = (state_56146[(8)]);
var inst_56078 = (state_56146[(2)]);
var inst_56079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56078,(0),null);
var inst_56080__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56078,(1),null);
var inst_56084__$1 = cljs.core._EQ_;
var inst_56085 = (inst_56084__$1.cljs$core$IFn$_invoke$arity$2 ? inst_56084__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_56080__$1) : inst_56084__$1.call(null,input_chan,inst_56080__$1));
var state_56146__$1 = (function (){var statearr_56149 = state_56146;
(statearr_56149[(9)] = inst_56079);

(statearr_56149[(8)] = inst_56080__$1);

(statearr_56149[(7)] = inst_56084__$1);

return statearr_56149;
})();
if(cljs.core.truth_(inst_56085)){
var statearr_56151_56206 = state_56146__$1;
(statearr_56151_56206[(1)] = (8));

} else {
var statearr_56152_56207 = state_56146__$1;
(statearr_56152_56207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (20))){
var inst_56104 = cljs.core.async.timeout(flush_interval_ms);
var state_56146__$1 = state_56146;
var statearr_56153_56208 = state_56146__$1;
(statearr_56153_56208[(2)] = inst_56104);

(statearr_56153_56208[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (27))){
var state_56146__$1 = state_56146;
var statearr_56154_56209 = state_56146__$1;
(statearr_56154_56209[(2)] = null);

(statearr_56154_56209[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (1))){
var inst_56061 = cljs.core.PersistentVector.EMPTY;
var inst_56062 = inst_56061;
var inst_56063 = null;
var state_56146__$1 = (function (){var statearr_56156 = state_56146;
(statearr_56156[(10)] = inst_56062);

(statearr_56156[(11)] = inst_56063);

return statearr_56156;
})();
var statearr_56157_56210 = state_56146__$1;
(statearr_56157_56210[(2)] = null);

(statearr_56157_56210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (24))){
var inst_56084 = (state_56146[(7)]);
var inst_56063 = (state_56146[(11)]);
var inst_56080 = (state_56146[(8)]);
var inst_56123 = (inst_56084.cljs$core$IFn$_invoke$arity$2 ? inst_56084.cljs$core$IFn$_invoke$arity$2(inst_56063,inst_56080) : inst_56084.call(null,inst_56063,inst_56080));
var state_56146__$1 = state_56146;
if(cljs.core.truth_(inst_56123)){
var statearr_56158_56211 = state_56146__$1;
(statearr_56158_56211[(1)] = (29));

} else {
var statearr_56159_56212 = state_56146__$1;
(statearr_56159_56212[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (4))){
var inst_56071 = (state_56146[(12)]);
var inst_56063 = (state_56146[(11)]);
var inst_56073 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56071,inst_56063);
var state_56146__$1 = state_56146;
var statearr_56160_56213 = state_56146__$1;
(statearr_56160_56213[(2)] = inst_56073);

(statearr_56160_56213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (15))){
var state_56146__$1 = state_56146;
var statearr_56161_56214 = state_56146__$1;
(statearr_56161_56214[(2)] = null);

(statearr_56161_56214[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (21))){
var inst_56063 = (state_56146[(11)]);
var state_56146__$1 = state_56146;
var statearr_56162_56215 = state_56146__$1;
(statearr_56162_56215[(2)] = inst_56063);

(statearr_56162_56215[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (31))){
var inst_56138 = (state_56146[(2)]);
var state_56146__$1 = state_56146;
var statearr_56163_56216 = state_56146__$1;
(statearr_56163_56216[(2)] = inst_56138);

(statearr_56163_56216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (32))){
var inst_56062 = (state_56146[(10)]);
var inst_56127 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56062) : on_flush.call(null,inst_56062));
var state_56146__$1 = state_56146;
var statearr_56164_56217 = state_56146__$1;
(statearr_56164_56217[(2)] = inst_56127);

(statearr_56164_56217[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (33))){
var state_56146__$1 = state_56146;
var statearr_56165_56218 = state_56146__$1;
(statearr_56165_56218[(2)] = null);

(statearr_56165_56218[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (13))){
var inst_56110 = (state_56146[(2)]);
var state_56146__$1 = state_56146;
var statearr_56166_56219 = state_56146__$1;
(statearr_56166_56219[(2)] = inst_56110);

(statearr_56166_56219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (22))){
var inst_56096 = (state_56146[(13)]);
var inst_56107 = (state_56146[(2)]);
var inst_56062 = inst_56096;
var inst_56063 = inst_56107;
var state_56146__$1 = (function (){var statearr_56167 = state_56146;
(statearr_56167[(10)] = inst_56062);

(statearr_56167[(11)] = inst_56063);

return statearr_56167;
})();
var statearr_56168_56220 = state_56146__$1;
(statearr_56168_56220[(2)] = null);

(statearr_56168_56220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (29))){
var inst_56062 = (state_56146[(10)]);
var inst_56125 = cljs.core.seq(inst_56062);
var state_56146__$1 = state_56146;
if(inst_56125){
var statearr_56169_56221 = state_56146__$1;
(statearr_56169_56221[(1)] = (32));

} else {
var statearr_56170_56222 = state_56146__$1;
(statearr_56170_56222[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (6))){
var inst_56076 = (state_56146[(2)]);
var state_56146__$1 = state_56146;
return cljs.core.async.ioc_alts_BANG_(state_56146__$1,(7),inst_56076);
} else {
if((state_val_56147 === (28))){
var inst_56119 = (state_56146[(2)]);
var inst_56120 = cljs.core.PersistentVector.EMPTY;
var inst_56062 = inst_56120;
var inst_56063 = null;
var state_56146__$1 = (function (){var statearr_56171 = state_56146;
(statearr_56171[(14)] = inst_56119);

(statearr_56171[(10)] = inst_56062);

(statearr_56171[(11)] = inst_56063);

return statearr_56171;
})();
var statearr_56172_56223 = state_56146__$1;
(statearr_56172_56223[(2)] = null);

(statearr_56172_56223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (25))){
var inst_56140 = (state_56146[(2)]);
var state_56146__$1 = state_56146;
var statearr_56173_56224 = state_56146__$1;
(statearr_56173_56224[(2)] = inst_56140);

(statearr_56173_56224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (34))){
var inst_56130 = (state_56146[(2)]);
var inst_56131 = cljs.core.PersistentVector.EMPTY;
var inst_56062 = inst_56131;
var inst_56063 = null;
var state_56146__$1 = (function (){var statearr_56174 = state_56146;
(statearr_56174[(15)] = inst_56130);

(statearr_56174[(10)] = inst_56062);

(statearr_56174[(11)] = inst_56063);

return statearr_56174;
})();
var statearr_56175_56225 = state_56146__$1;
(statearr_56175_56225[(2)] = null);

(statearr_56175_56225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (17))){
var inst_56063 = (state_56146[(11)]);
var inst_56099 = (inst_56063 == null);
var state_56146__$1 = state_56146;
var statearr_56176_56226 = state_56146__$1;
(statearr_56176_56226[(2)] = inst_56099);

(statearr_56176_56226[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (3))){
var inst_56144 = (state_56146[(2)]);
var state_56146__$1 = state_56146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56146__$1,inst_56144);
} else {
if((state_val_56147 === (12))){
var inst_56062 = (state_56146[(10)]);
var inst_56079 = (state_56146[(9)]);
var inst_56097 = (state_56146[(16)]);
var inst_56096 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56062,inst_56079);
var inst_56097__$1 = flush_interval_ms;
var state_56146__$1 = (function (){var statearr_56177 = state_56146;
(statearr_56177[(13)] = inst_56096);

(statearr_56177[(16)] = inst_56097__$1);

return statearr_56177;
})();
if(cljs.core.truth_(inst_56097__$1)){
var statearr_56178_56227 = state_56146__$1;
(statearr_56178_56227[(1)] = (17));

} else {
var statearr_56179_56228 = state_56146__$1;
(statearr_56179_56228[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (2))){
var inst_56063 = (state_56146[(11)]);
var inst_56069 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56070 = [input_chan,flush_ch];
var inst_56071 = (new cljs.core.PersistentVector(null,2,(5),inst_56069,inst_56070,null));
var state_56146__$1 = (function (){var statearr_56180 = state_56146;
(statearr_56180[(12)] = inst_56071);

return statearr_56180;
})();
if(cljs.core.truth_(inst_56063)){
var statearr_56181_56229 = state_56146__$1;
(statearr_56181_56229[(1)] = (4));

} else {
var statearr_56182_56230 = state_56146__$1;
(statearr_56182_56230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (23))){
var inst_56062 = (state_56146[(10)]);
var inst_56114 = cljs.core.seq(inst_56062);
var state_56146__$1 = state_56146;
if(inst_56114){
var statearr_56183_56231 = state_56146__$1;
(statearr_56183_56231[(1)] = (26));

} else {
var statearr_56184_56232 = state_56146__$1;
(statearr_56184_56232[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (19))){
var inst_56102 = (state_56146[(2)]);
var state_56146__$1 = state_56146;
if(cljs.core.truth_(inst_56102)){
var statearr_56185_56233 = state_56146__$1;
(statearr_56185_56233[(1)] = (20));

} else {
var statearr_56186_56234 = state_56146__$1;
(statearr_56186_56234[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (11))){
var inst_56062 = (state_56146[(10)]);
var inst_56089 = cljs.core.seq(inst_56062);
var state_56146__$1 = state_56146;
if(inst_56089){
var statearr_56187_56235 = state_56146__$1;
(statearr_56187_56235[(1)] = (14));

} else {
var statearr_56188_56236 = state_56146__$1;
(statearr_56188_56236[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (9))){
var inst_56084 = (state_56146[(7)]);
var inst_56080 = (state_56146[(8)]);
var inst_56112 = (inst_56084.cljs$core$IFn$_invoke$arity$2 ? inst_56084.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_56080) : inst_56084.call(null,flush_ch,inst_56080));
var state_56146__$1 = state_56146;
if(cljs.core.truth_(inst_56112)){
var statearr_56189_56237 = state_56146__$1;
(statearr_56189_56237[(1)] = (23));

} else {
var statearr_56190_56238 = state_56146__$1;
(statearr_56190_56238[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (5))){
var inst_56071 = (state_56146[(12)]);
var state_56146__$1 = state_56146;
var statearr_56191_56239 = state_56146__$1;
(statearr_56191_56239[(2)] = inst_56071);

(statearr_56191_56239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (14))){
var inst_56062 = (state_56146[(10)]);
var inst_56091 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56062) : on_flush.call(null,inst_56062));
var state_56146__$1 = state_56146;
var statearr_56192_56240 = state_56146__$1;
(statearr_56192_56240[(2)] = inst_56091);

(statearr_56192_56240[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (26))){
var inst_56062 = (state_56146[(10)]);
var inst_56116 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56062) : on_flush.call(null,inst_56062));
var state_56146__$1 = state_56146;
var statearr_56193_56241 = state_56146__$1;
(statearr_56193_56241[(2)] = inst_56116);

(statearr_56193_56241[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (16))){
var inst_56094 = (state_56146[(2)]);
var state_56146__$1 = state_56146;
var statearr_56194_56242 = state_56146__$1;
(statearr_56194_56242[(2)] = inst_56094);

(statearr_56194_56242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (30))){
var inst_56080 = (state_56146[(8)]);
var inst_56134 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56080)].join('');
var inst_56135 = (new Error(inst_56134));
var inst_56136 = (function(){throw inst_56135})();
var state_56146__$1 = state_56146;
var statearr_56195_56243 = state_56146__$1;
(statearr_56195_56243[(2)] = inst_56136);

(statearr_56195_56243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (10))){
var inst_56142 = (state_56146[(2)]);
var state_56146__$1 = state_56146;
var statearr_56196_56244 = state_56146__$1;
(statearr_56196_56244[(2)] = inst_56142);

(statearr_56196_56244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (18))){
var inst_56097 = (state_56146[(16)]);
var state_56146__$1 = state_56146;
var statearr_56197_56248 = state_56146__$1;
(statearr_56197_56248[(2)] = inst_56097);

(statearr_56197_56248[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56147 === (8))){
var inst_56079 = (state_56146[(9)]);
var inst_56087 = (inst_56079 == null);
var state_56146__$1 = state_56146;
if(cljs.core.truth_(inst_56087)){
var statearr_56198_56249 = state_56146__$1;
(statearr_56198_56249[(1)] = (11));

} else {
var statearr_56199_56250 = state_56146__$1;
(statearr_56199_56250[(1)] = (12));

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
var statearr_56200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56200[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56200[(1)] = (1));

return statearr_56200;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_56146){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56146);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56201){var ex__32294__auto__ = e56201;
var statearr_56202_56252 = state_56146;
(statearr_56202_56252[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56146[(4)]))){
var statearr_56203_56253 = state_56146;
(statearr_56203_56253[(1)] = cljs.core.first((state_56146[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56255 = state_56146;
state_56146 = G__56255;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_56146){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_56146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56204 = f__32362__auto__();
(statearr_56204[(6)] = c__32361__auto___56205);

return statearr_56204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
