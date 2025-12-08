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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__56126){
var map__56127 = p__56126;
var map__56127__$1 = cljs.core.__destructure_map(map__56127);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56127__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56127__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56127__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56214){
var state_val_56215 = (state_56214[(1)]);
if((state_val_56215 === (7))){
var inst_56151 = (state_56214[(7)]);
var inst_56147 = (state_56214[(8)]);
var inst_56145 = (state_56214[(2)]);
var inst_56146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56145,(0),null);
var inst_56147__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56145,(1),null);
var inst_56151__$1 = cljs.core._EQ_;
var inst_56152 = (inst_56151__$1.cljs$core$IFn$_invoke$arity$2 ? inst_56151__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_56147__$1) : inst_56151__$1.call(null,input_chan,inst_56147__$1));
var state_56214__$1 = (function (){var statearr_56216 = state_56214;
(statearr_56216[(9)] = inst_56146);

(statearr_56216[(8)] = inst_56147__$1);

(statearr_56216[(7)] = inst_56151__$1);

return statearr_56216;
})();
if(cljs.core.truth_(inst_56152)){
var statearr_56217_56292 = state_56214__$1;
(statearr_56217_56292[(1)] = (8));

} else {
var statearr_56218_56293 = state_56214__$1;
(statearr_56218_56293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (20))){
var inst_56172 = cljs.core.async.timeout(flush_interval_ms);
var state_56214__$1 = state_56214;
var statearr_56219_56294 = state_56214__$1;
(statearr_56219_56294[(2)] = inst_56172);

(statearr_56219_56294[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (27))){
var state_56214__$1 = state_56214;
var statearr_56220_56295 = state_56214__$1;
(statearr_56220_56295[(2)] = null);

(statearr_56220_56295[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (1))){
var inst_56128 = cljs.core.PersistentVector.EMPTY;
var inst_56129 = inst_56128;
var inst_56130 = null;
var state_56214__$1 = (function (){var statearr_56230 = state_56214;
(statearr_56230[(10)] = inst_56129);

(statearr_56230[(11)] = inst_56130);

return statearr_56230;
})();
var statearr_56231_56296 = state_56214__$1;
(statearr_56231_56296[(2)] = null);

(statearr_56231_56296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (24))){
var inst_56151 = (state_56214[(7)]);
var inst_56130 = (state_56214[(11)]);
var inst_56147 = (state_56214[(8)]);
var inst_56191 = (inst_56151.cljs$core$IFn$_invoke$arity$2 ? inst_56151.cljs$core$IFn$_invoke$arity$2(inst_56130,inst_56147) : inst_56151.call(null,inst_56130,inst_56147));
var state_56214__$1 = state_56214;
if(cljs.core.truth_(inst_56191)){
var statearr_56233_56297 = state_56214__$1;
(statearr_56233_56297[(1)] = (29));

} else {
var statearr_56234_56298 = state_56214__$1;
(statearr_56234_56298[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (4))){
var inst_56138 = (state_56214[(12)]);
var inst_56130 = (state_56214[(11)]);
var inst_56140 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56138,inst_56130);
var state_56214__$1 = state_56214;
var statearr_56236_56299 = state_56214__$1;
(statearr_56236_56299[(2)] = inst_56140);

(statearr_56236_56299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (15))){
var state_56214__$1 = state_56214;
var statearr_56237_56300 = state_56214__$1;
(statearr_56237_56300[(2)] = null);

(statearr_56237_56300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (21))){
var inst_56130 = (state_56214[(11)]);
var state_56214__$1 = state_56214;
var statearr_56238_56301 = state_56214__$1;
(statearr_56238_56301[(2)] = inst_56130);

(statearr_56238_56301[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (31))){
var inst_56206 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
var statearr_56239_56302 = state_56214__$1;
(statearr_56239_56302[(2)] = inst_56206);

(statearr_56239_56302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (32))){
var inst_56129 = (state_56214[(10)]);
var inst_56195 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56129) : on_flush.call(null,inst_56129));
var state_56214__$1 = state_56214;
var statearr_56241_56303 = state_56214__$1;
(statearr_56241_56303[(2)] = inst_56195);

(statearr_56241_56303[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (33))){
var state_56214__$1 = state_56214;
var statearr_56242_56304 = state_56214__$1;
(statearr_56242_56304[(2)] = null);

(statearr_56242_56304[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (13))){
var inst_56178 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
var statearr_56247_56305 = state_56214__$1;
(statearr_56247_56305[(2)] = inst_56178);

(statearr_56247_56305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (22))){
var inst_56164 = (state_56214[(13)]);
var inst_56175 = (state_56214[(2)]);
var inst_56129 = inst_56164;
var inst_56130 = inst_56175;
var state_56214__$1 = (function (){var statearr_56248 = state_56214;
(statearr_56248[(10)] = inst_56129);

(statearr_56248[(11)] = inst_56130);

return statearr_56248;
})();
var statearr_56249_56306 = state_56214__$1;
(statearr_56249_56306[(2)] = null);

(statearr_56249_56306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (29))){
var inst_56129 = (state_56214[(10)]);
var inst_56193 = cljs.core.seq(inst_56129);
var state_56214__$1 = state_56214;
if(inst_56193){
var statearr_56250_56307 = state_56214__$1;
(statearr_56250_56307[(1)] = (32));

} else {
var statearr_56251_56308 = state_56214__$1;
(statearr_56251_56308[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (6))){
var inst_56143 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
return cljs.core.async.ioc_alts_BANG_(state_56214__$1,(7),inst_56143);
} else {
if((state_val_56215 === (28))){
var inst_56187 = (state_56214[(2)]);
var inst_56188 = cljs.core.PersistentVector.EMPTY;
var inst_56129 = inst_56188;
var inst_56130 = null;
var state_56214__$1 = (function (){var statearr_56252 = state_56214;
(statearr_56252[(14)] = inst_56187);

(statearr_56252[(10)] = inst_56129);

(statearr_56252[(11)] = inst_56130);

return statearr_56252;
})();
var statearr_56253_56309 = state_56214__$1;
(statearr_56253_56309[(2)] = null);

(statearr_56253_56309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (25))){
var inst_56208 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
var statearr_56254_56310 = state_56214__$1;
(statearr_56254_56310[(2)] = inst_56208);

(statearr_56254_56310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (34))){
var inst_56198 = (state_56214[(2)]);
var inst_56199 = cljs.core.PersistentVector.EMPTY;
var inst_56129 = inst_56199;
var inst_56130 = null;
var state_56214__$1 = (function (){var statearr_56255 = state_56214;
(statearr_56255[(15)] = inst_56198);

(statearr_56255[(10)] = inst_56129);

(statearr_56255[(11)] = inst_56130);

return statearr_56255;
})();
var statearr_56256_56311 = state_56214__$1;
(statearr_56256_56311[(2)] = null);

(statearr_56256_56311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (17))){
var inst_56130 = (state_56214[(11)]);
var inst_56167 = (inst_56130 == null);
var state_56214__$1 = state_56214;
var statearr_56262_56312 = state_56214__$1;
(statearr_56262_56312[(2)] = inst_56167);

(statearr_56262_56312[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (3))){
var inst_56212 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56214__$1,inst_56212);
} else {
if((state_val_56215 === (12))){
var inst_56129 = (state_56214[(10)]);
var inst_56146 = (state_56214[(9)]);
var inst_56165 = (state_56214[(16)]);
var inst_56164 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56129,inst_56146);
var inst_56165__$1 = flush_interval_ms;
var state_56214__$1 = (function (){var statearr_56263 = state_56214;
(statearr_56263[(13)] = inst_56164);

(statearr_56263[(16)] = inst_56165__$1);

return statearr_56263;
})();
if(cljs.core.truth_(inst_56165__$1)){
var statearr_56264_56313 = state_56214__$1;
(statearr_56264_56313[(1)] = (17));

} else {
var statearr_56265_56314 = state_56214__$1;
(statearr_56265_56314[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (2))){
var inst_56130 = (state_56214[(11)]);
var inst_56136 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56137 = [input_chan,flush_ch];
var inst_56138 = (new cljs.core.PersistentVector(null,2,(5),inst_56136,inst_56137,null));
var state_56214__$1 = (function (){var statearr_56266 = state_56214;
(statearr_56266[(12)] = inst_56138);

return statearr_56266;
})();
if(cljs.core.truth_(inst_56130)){
var statearr_56267_56315 = state_56214__$1;
(statearr_56267_56315[(1)] = (4));

} else {
var statearr_56268_56316 = state_56214__$1;
(statearr_56268_56316[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (23))){
var inst_56129 = (state_56214[(10)]);
var inst_56182 = cljs.core.seq(inst_56129);
var state_56214__$1 = state_56214;
if(inst_56182){
var statearr_56269_56317 = state_56214__$1;
(statearr_56269_56317[(1)] = (26));

} else {
var statearr_56270_56318 = state_56214__$1;
(statearr_56270_56318[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (19))){
var inst_56170 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
if(cljs.core.truth_(inst_56170)){
var statearr_56271_56319 = state_56214__$1;
(statearr_56271_56319[(1)] = (20));

} else {
var statearr_56272_56320 = state_56214__$1;
(statearr_56272_56320[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (11))){
var inst_56129 = (state_56214[(10)]);
var inst_56156 = cljs.core.seq(inst_56129);
var state_56214__$1 = state_56214;
if(inst_56156){
var statearr_56273_56321 = state_56214__$1;
(statearr_56273_56321[(1)] = (14));

} else {
var statearr_56274_56322 = state_56214__$1;
(statearr_56274_56322[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (9))){
var inst_56151 = (state_56214[(7)]);
var inst_56147 = (state_56214[(8)]);
var inst_56180 = (inst_56151.cljs$core$IFn$_invoke$arity$2 ? inst_56151.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_56147) : inst_56151.call(null,flush_ch,inst_56147));
var state_56214__$1 = state_56214;
if(cljs.core.truth_(inst_56180)){
var statearr_56275_56323 = state_56214__$1;
(statearr_56275_56323[(1)] = (23));

} else {
var statearr_56276_56324 = state_56214__$1;
(statearr_56276_56324[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (5))){
var inst_56138 = (state_56214[(12)]);
var state_56214__$1 = state_56214;
var statearr_56277_56325 = state_56214__$1;
(statearr_56277_56325[(2)] = inst_56138);

(statearr_56277_56325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (14))){
var inst_56129 = (state_56214[(10)]);
var inst_56158 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56129) : on_flush.call(null,inst_56129));
var state_56214__$1 = state_56214;
var statearr_56278_56327 = state_56214__$1;
(statearr_56278_56327[(2)] = inst_56158);

(statearr_56278_56327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (26))){
var inst_56129 = (state_56214[(10)]);
var inst_56184 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56129) : on_flush.call(null,inst_56129));
var state_56214__$1 = state_56214;
var statearr_56279_56328 = state_56214__$1;
(statearr_56279_56328[(2)] = inst_56184);

(statearr_56279_56328[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (16))){
var inst_56161 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
var statearr_56280_56329 = state_56214__$1;
(statearr_56280_56329[(2)] = inst_56161);

(statearr_56280_56329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (30))){
var inst_56147 = (state_56214[(8)]);
var inst_56202 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56147)].join('');
var inst_56203 = (new Error(inst_56202));
var inst_56204 = (function(){throw inst_56203})();
var state_56214__$1 = state_56214;
var statearr_56281_56330 = state_56214__$1;
(statearr_56281_56330[(2)] = inst_56204);

(statearr_56281_56330[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (10))){
var inst_56210 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
var statearr_56282_56331 = state_56214__$1;
(statearr_56282_56331[(2)] = inst_56210);

(statearr_56282_56331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (18))){
var inst_56165 = (state_56214[(16)]);
var state_56214__$1 = state_56214;
var statearr_56283_56332 = state_56214__$1;
(statearr_56283_56332[(2)] = inst_56165);

(statearr_56283_56332[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (8))){
var inst_56146 = (state_56214[(9)]);
var inst_56154 = (inst_56146 == null);
var state_56214__$1 = state_56214;
if(cljs.core.truth_(inst_56154)){
var statearr_56284_56337 = state_56214__$1;
(statearr_56284_56337[(1)] = (11));

} else {
var statearr_56285_56338 = state_56214__$1;
(statearr_56285_56338[(1)] = (12));

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
var statearr_56286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56286[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56286[(1)] = (1));

return statearr_56286;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_56214){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56214);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56287){var ex__32294__auto__ = e56287;
var statearr_56288_56339 = state_56214;
(statearr_56288_56339[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56214[(4)]))){
var statearr_56289_56340 = state_56214;
(statearr_56289_56340[(1)] = cljs.core.first((state_56214[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56341 = state_56214;
state_56214 = G__56341;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_56214){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_56214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56290 = f__32362__auto__();
(statearr_56290[(6)] = c__32361__auto___56291);

return statearr_56290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
