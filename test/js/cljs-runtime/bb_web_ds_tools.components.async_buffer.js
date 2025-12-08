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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__56131){
var map__56133 = p__56131;
var map__56133__$1 = cljs.core.__destructure_map(map__56133);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56133__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56133__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56133__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56230){
var state_val_56231 = (state_56230[(1)]);
if((state_val_56231 === (7))){
var inst_56161 = (state_56230[(7)]);
var inst_56157 = (state_56230[(8)]);
var inst_56155 = (state_56230[(2)]);
var inst_56156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56155,(0),null);
var inst_56157__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56155,(1),null);
var inst_56161__$1 = cljs.core._EQ_;
var inst_56162 = (inst_56161__$1.cljs$core$IFn$_invoke$arity$2 ? inst_56161__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_56157__$1) : inst_56161__$1.call(null,input_chan,inst_56157__$1));
var state_56230__$1 = (function (){var statearr_56233 = state_56230;
(statearr_56233[(9)] = inst_56156);

(statearr_56233[(8)] = inst_56157__$1);

(statearr_56233[(7)] = inst_56161__$1);

return statearr_56233;
})();
if(cljs.core.truth_(inst_56162)){
var statearr_56234_56303 = state_56230__$1;
(statearr_56234_56303[(1)] = (8));

} else {
var statearr_56235_56304 = state_56230__$1;
(statearr_56235_56304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (20))){
var inst_56181 = cljs.core.async.timeout(flush_interval_ms);
var state_56230__$1 = state_56230;
var statearr_56236_56305 = state_56230__$1;
(statearr_56236_56305[(2)] = inst_56181);

(statearr_56236_56305[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (27))){
var state_56230__$1 = state_56230;
var statearr_56237_56306 = state_56230__$1;
(statearr_56237_56306[(2)] = null);

(statearr_56237_56306[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (1))){
var inst_56134 = cljs.core.PersistentVector.EMPTY;
var inst_56135 = inst_56134;
var inst_56136 = null;
var state_56230__$1 = (function (){var statearr_56238 = state_56230;
(statearr_56238[(10)] = inst_56135);

(statearr_56238[(11)] = inst_56136);

return statearr_56238;
})();
var statearr_56239_56307 = state_56230__$1;
(statearr_56239_56307[(2)] = null);

(statearr_56239_56307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (24))){
var inst_56161 = (state_56230[(7)]);
var inst_56136 = (state_56230[(11)]);
var inst_56157 = (state_56230[(8)]);
var inst_56200 = (inst_56161.cljs$core$IFn$_invoke$arity$2 ? inst_56161.cljs$core$IFn$_invoke$arity$2(inst_56136,inst_56157) : inst_56161.call(null,inst_56136,inst_56157));
var state_56230__$1 = state_56230;
if(cljs.core.truth_(inst_56200)){
var statearr_56240_56308 = state_56230__$1;
(statearr_56240_56308[(1)] = (29));

} else {
var statearr_56241_56309 = state_56230__$1;
(statearr_56241_56309[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (4))){
var inst_56144 = (state_56230[(12)]);
var inst_56136 = (state_56230[(11)]);
var inst_56147 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56144,inst_56136);
var state_56230__$1 = state_56230;
var statearr_56242_56310 = state_56230__$1;
(statearr_56242_56310[(2)] = inst_56147);

(statearr_56242_56310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (15))){
var state_56230__$1 = state_56230;
var statearr_56243_56311 = state_56230__$1;
(statearr_56243_56311[(2)] = null);

(statearr_56243_56311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (21))){
var inst_56136 = (state_56230[(11)]);
var state_56230__$1 = state_56230;
var statearr_56244_56313 = state_56230__$1;
(statearr_56244_56313[(2)] = inst_56136);

(statearr_56244_56313[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (31))){
var inst_56222 = (state_56230[(2)]);
var state_56230__$1 = state_56230;
var statearr_56245_56314 = state_56230__$1;
(statearr_56245_56314[(2)] = inst_56222);

(statearr_56245_56314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (32))){
var inst_56135 = (state_56230[(10)]);
var inst_56204 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56135) : on_flush.call(null,inst_56135));
var state_56230__$1 = state_56230;
var statearr_56246_56315 = state_56230__$1;
(statearr_56246_56315[(2)] = inst_56204);

(statearr_56246_56315[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (33))){
var state_56230__$1 = state_56230;
var statearr_56247_56316 = state_56230__$1;
(statearr_56247_56316[(2)] = null);

(statearr_56247_56316[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (13))){
var inst_56187 = (state_56230[(2)]);
var state_56230__$1 = state_56230;
var statearr_56248_56317 = state_56230__$1;
(statearr_56248_56317[(2)] = inst_56187);

(statearr_56248_56317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (22))){
var inst_56173 = (state_56230[(13)]);
var inst_56184 = (state_56230[(2)]);
var inst_56135 = inst_56173;
var inst_56136 = inst_56184;
var state_56230__$1 = (function (){var statearr_56249 = state_56230;
(statearr_56249[(10)] = inst_56135);

(statearr_56249[(11)] = inst_56136);

return statearr_56249;
})();
var statearr_56250_56318 = state_56230__$1;
(statearr_56250_56318[(2)] = null);

(statearr_56250_56318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (29))){
var inst_56135 = (state_56230[(10)]);
var inst_56202 = cljs.core.seq(inst_56135);
var state_56230__$1 = state_56230;
if(inst_56202){
var statearr_56251_56319 = state_56230__$1;
(statearr_56251_56319[(1)] = (32));

} else {
var statearr_56252_56320 = state_56230__$1;
(statearr_56252_56320[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (6))){
var inst_56150 = (state_56230[(2)]);
var state_56230__$1 = state_56230;
return cljs.core.async.ioc_alts_BANG_(state_56230__$1,(7),inst_56150);
} else {
if((state_val_56231 === (28))){
var inst_56196 = (state_56230[(2)]);
var inst_56197 = cljs.core.PersistentVector.EMPTY;
var inst_56135 = inst_56197;
var inst_56136 = null;
var state_56230__$1 = (function (){var statearr_56253 = state_56230;
(statearr_56253[(14)] = inst_56196);

(statearr_56253[(10)] = inst_56135);

(statearr_56253[(11)] = inst_56136);

return statearr_56253;
})();
var statearr_56254_56321 = state_56230__$1;
(statearr_56254_56321[(2)] = null);

(statearr_56254_56321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (25))){
var inst_56224 = (state_56230[(2)]);
var state_56230__$1 = state_56230;
var statearr_56255_56322 = state_56230__$1;
(statearr_56255_56322[(2)] = inst_56224);

(statearr_56255_56322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (34))){
var inst_56207 = (state_56230[(2)]);
var inst_56208 = cljs.core.PersistentVector.EMPTY;
var inst_56135 = inst_56208;
var inst_56136 = null;
var state_56230__$1 = (function (){var statearr_56256 = state_56230;
(statearr_56256[(15)] = inst_56207);

(statearr_56256[(10)] = inst_56135);

(statearr_56256[(11)] = inst_56136);

return statearr_56256;
})();
var statearr_56257_56323 = state_56230__$1;
(statearr_56257_56323[(2)] = null);

(statearr_56257_56323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (17))){
var inst_56136 = (state_56230[(11)]);
var inst_56176 = (inst_56136 == null);
var state_56230__$1 = state_56230;
var statearr_56258_56324 = state_56230__$1;
(statearr_56258_56324[(2)] = inst_56176);

(statearr_56258_56324[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (3))){
var inst_56228 = (state_56230[(2)]);
var state_56230__$1 = state_56230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56230__$1,inst_56228);
} else {
if((state_val_56231 === (12))){
var inst_56135 = (state_56230[(10)]);
var inst_56156 = (state_56230[(9)]);
var inst_56174 = (state_56230[(16)]);
var inst_56173 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56135,inst_56156);
var inst_56174__$1 = flush_interval_ms;
var state_56230__$1 = (function (){var statearr_56259 = state_56230;
(statearr_56259[(13)] = inst_56173);

(statearr_56259[(16)] = inst_56174__$1);

return statearr_56259;
})();
if(cljs.core.truth_(inst_56174__$1)){
var statearr_56260_56326 = state_56230__$1;
(statearr_56260_56326[(1)] = (17));

} else {
var statearr_56261_56327 = state_56230__$1;
(statearr_56261_56327[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (2))){
var inst_56136 = (state_56230[(11)]);
var inst_56142 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56143 = [input_chan,flush_ch];
var inst_56144 = (new cljs.core.PersistentVector(null,2,(5),inst_56142,inst_56143,null));
var state_56230__$1 = (function (){var statearr_56262 = state_56230;
(statearr_56262[(12)] = inst_56144);

return statearr_56262;
})();
if(cljs.core.truth_(inst_56136)){
var statearr_56263_56328 = state_56230__$1;
(statearr_56263_56328[(1)] = (4));

} else {
var statearr_56264_56329 = state_56230__$1;
(statearr_56264_56329[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (23))){
var inst_56135 = (state_56230[(10)]);
var inst_56191 = cljs.core.seq(inst_56135);
var state_56230__$1 = state_56230;
if(inst_56191){
var statearr_56265_56330 = state_56230__$1;
(statearr_56265_56330[(1)] = (26));

} else {
var statearr_56267_56331 = state_56230__$1;
(statearr_56267_56331[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (19))){
var inst_56179 = (state_56230[(2)]);
var state_56230__$1 = state_56230;
if(cljs.core.truth_(inst_56179)){
var statearr_56268_56332 = state_56230__$1;
(statearr_56268_56332[(1)] = (20));

} else {
var statearr_56269_56333 = state_56230__$1;
(statearr_56269_56333[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (11))){
var inst_56135 = (state_56230[(10)]);
var inst_56166 = cljs.core.seq(inst_56135);
var state_56230__$1 = state_56230;
if(inst_56166){
var statearr_56270_56337 = state_56230__$1;
(statearr_56270_56337[(1)] = (14));

} else {
var statearr_56271_56338 = state_56230__$1;
(statearr_56271_56338[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (9))){
var inst_56161 = (state_56230[(7)]);
var inst_56157 = (state_56230[(8)]);
var inst_56189 = (inst_56161.cljs$core$IFn$_invoke$arity$2 ? inst_56161.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_56157) : inst_56161.call(null,flush_ch,inst_56157));
var state_56230__$1 = state_56230;
if(cljs.core.truth_(inst_56189)){
var statearr_56276_56339 = state_56230__$1;
(statearr_56276_56339[(1)] = (23));

} else {
var statearr_56277_56340 = state_56230__$1;
(statearr_56277_56340[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (5))){
var inst_56144 = (state_56230[(12)]);
var state_56230__$1 = state_56230;
var statearr_56278_56342 = state_56230__$1;
(statearr_56278_56342[(2)] = inst_56144);

(statearr_56278_56342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (14))){
var inst_56135 = (state_56230[(10)]);
var inst_56168 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56135) : on_flush.call(null,inst_56135));
var state_56230__$1 = state_56230;
var statearr_56279_56343 = state_56230__$1;
(statearr_56279_56343[(2)] = inst_56168);

(statearr_56279_56343[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (26))){
var inst_56135 = (state_56230[(10)]);
var inst_56193 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56135) : on_flush.call(null,inst_56135));
var state_56230__$1 = state_56230;
var statearr_56281_56344 = state_56230__$1;
(statearr_56281_56344[(2)] = inst_56193);

(statearr_56281_56344[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (16))){
var inst_56171 = (state_56230[(2)]);
var state_56230__$1 = state_56230;
var statearr_56283_56346 = state_56230__$1;
(statearr_56283_56346[(2)] = inst_56171);

(statearr_56283_56346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (30))){
var inst_56157 = (state_56230[(8)]);
var inst_56211 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56157)].join('');
var inst_56212 = (new Error(inst_56211));
var inst_56220 = (function(){throw inst_56212})();
var state_56230__$1 = state_56230;
var statearr_56284_56347 = state_56230__$1;
(statearr_56284_56347[(2)] = inst_56220);

(statearr_56284_56347[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (10))){
var inst_56226 = (state_56230[(2)]);
var state_56230__$1 = state_56230;
var statearr_56285_56348 = state_56230__$1;
(statearr_56285_56348[(2)] = inst_56226);

(statearr_56285_56348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (18))){
var inst_56174 = (state_56230[(16)]);
var state_56230__$1 = state_56230;
var statearr_56286_56349 = state_56230__$1;
(statearr_56286_56349[(2)] = inst_56174);

(statearr_56286_56349[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56231 === (8))){
var inst_56156 = (state_56230[(9)]);
var inst_56164 = (inst_56156 == null);
var state_56230__$1 = state_56230;
if(cljs.core.truth_(inst_56164)){
var statearr_56287_56351 = state_56230__$1;
(statearr_56287_56351[(1)] = (11));

} else {
var statearr_56288_56352 = state_56230__$1;
(statearr_56288_56352[(1)] = (12));

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
var statearr_56290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56290[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56290[(1)] = (1));

return statearr_56290;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_56230){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56230);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56291){var ex__32294__auto__ = e56291;
var statearr_56292_56353 = state_56230;
(statearr_56292_56353[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56230[(4)]))){
var statearr_56293_56354 = state_56230;
(statearr_56293_56354[(1)] = cljs.core.first((state_56230[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56355 = state_56230;
state_56230 = G__56355;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_56230){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_56230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56296 = f__32362__auto__();
(statearr_56296[(6)] = c__32361__auto___56302);

return statearr_56296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
