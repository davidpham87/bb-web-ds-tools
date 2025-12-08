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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__56143){
var map__56144 = p__56143;
var map__56144__$1 = cljs.core.__destructure_map(map__56144);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56144__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56144__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56144__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56235){
var state_val_56236 = (state_56235[(1)]);
if((state_val_56236 === (7))){
var inst_56172 = (state_56235[(7)]);
var inst_56168 = (state_56235[(8)]);
var inst_56166 = (state_56235[(2)]);
var inst_56167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56166,(0),null);
var inst_56168__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56166,(1),null);
var inst_56172__$1 = cljs.core._EQ_;
var inst_56173 = (inst_56172__$1.cljs$core$IFn$_invoke$arity$2 ? inst_56172__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_56168__$1) : inst_56172__$1.call(null,input_chan,inst_56168__$1));
var state_56235__$1 = (function (){var statearr_56237 = state_56235;
(statearr_56237[(9)] = inst_56167);

(statearr_56237[(8)] = inst_56168__$1);

(statearr_56237[(7)] = inst_56172__$1);

return statearr_56237;
})();
if(cljs.core.truth_(inst_56173)){
var statearr_56238_56297 = state_56235__$1;
(statearr_56238_56297[(1)] = (8));

} else {
var statearr_56239_56298 = state_56235__$1;
(statearr_56239_56298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (20))){
var inst_56193 = cljs.core.async.timeout(flush_interval_ms);
var state_56235__$1 = state_56235;
var statearr_56240_56299 = state_56235__$1;
(statearr_56240_56299[(2)] = inst_56193);

(statearr_56240_56299[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (27))){
var state_56235__$1 = state_56235;
var statearr_56241_56300 = state_56235__$1;
(statearr_56241_56300[(2)] = null);

(statearr_56241_56300[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (1))){
var inst_56145 = cljs.core.PersistentVector.EMPTY;
var inst_56146 = inst_56145;
var inst_56147 = null;
var state_56235__$1 = (function (){var statearr_56242 = state_56235;
(statearr_56242[(10)] = inst_56146);

(statearr_56242[(11)] = inst_56147);

return statearr_56242;
})();
var statearr_56243_56303 = state_56235__$1;
(statearr_56243_56303[(2)] = null);

(statearr_56243_56303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (24))){
var inst_56172 = (state_56235[(7)]);
var inst_56147 = (state_56235[(11)]);
var inst_56168 = (state_56235[(8)]);
var inst_56212 = (inst_56172.cljs$core$IFn$_invoke$arity$2 ? inst_56172.cljs$core$IFn$_invoke$arity$2(inst_56147,inst_56168) : inst_56172.call(null,inst_56147,inst_56168));
var state_56235__$1 = state_56235;
if(cljs.core.truth_(inst_56212)){
var statearr_56244_56304 = state_56235__$1;
(statearr_56244_56304[(1)] = (29));

} else {
var statearr_56245_56305 = state_56235__$1;
(statearr_56245_56305[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (4))){
var inst_56159 = (state_56235[(12)]);
var inst_56147 = (state_56235[(11)]);
var inst_56161 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56159,inst_56147);
var state_56235__$1 = state_56235;
var statearr_56246_56306 = state_56235__$1;
(statearr_56246_56306[(2)] = inst_56161);

(statearr_56246_56306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (15))){
var state_56235__$1 = state_56235;
var statearr_56247_56307 = state_56235__$1;
(statearr_56247_56307[(2)] = null);

(statearr_56247_56307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (21))){
var inst_56147 = (state_56235[(11)]);
var state_56235__$1 = state_56235;
var statearr_56248_56311 = state_56235__$1;
(statearr_56248_56311[(2)] = inst_56147);

(statearr_56248_56311[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (31))){
var inst_56227 = (state_56235[(2)]);
var state_56235__$1 = state_56235;
var statearr_56249_56312 = state_56235__$1;
(statearr_56249_56312[(2)] = inst_56227);

(statearr_56249_56312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (32))){
var inst_56146 = (state_56235[(10)]);
var inst_56216 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56146) : on_flush.call(null,inst_56146));
var state_56235__$1 = state_56235;
var statearr_56250_56313 = state_56235__$1;
(statearr_56250_56313[(2)] = inst_56216);

(statearr_56250_56313[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (33))){
var state_56235__$1 = state_56235;
var statearr_56251_56315 = state_56235__$1;
(statearr_56251_56315[(2)] = null);

(statearr_56251_56315[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (13))){
var inst_56199 = (state_56235[(2)]);
var state_56235__$1 = state_56235;
var statearr_56252_56316 = state_56235__$1;
(statearr_56252_56316[(2)] = inst_56199);

(statearr_56252_56316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (22))){
var inst_56185 = (state_56235[(13)]);
var inst_56196 = (state_56235[(2)]);
var inst_56146 = inst_56185;
var inst_56147 = inst_56196;
var state_56235__$1 = (function (){var statearr_56253 = state_56235;
(statearr_56253[(10)] = inst_56146);

(statearr_56253[(11)] = inst_56147);

return statearr_56253;
})();
var statearr_56254_56317 = state_56235__$1;
(statearr_56254_56317[(2)] = null);

(statearr_56254_56317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (29))){
var inst_56146 = (state_56235[(10)]);
var inst_56214 = cljs.core.seq(inst_56146);
var state_56235__$1 = state_56235;
if(inst_56214){
var statearr_56255_56318 = state_56235__$1;
(statearr_56255_56318[(1)] = (32));

} else {
var statearr_56256_56319 = state_56235__$1;
(statearr_56256_56319[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (6))){
var inst_56164 = (state_56235[(2)]);
var state_56235__$1 = state_56235;
return cljs.core.async.ioc_alts_BANG_(state_56235__$1,(7),inst_56164);
} else {
if((state_val_56236 === (28))){
var inst_56208 = (state_56235[(2)]);
var inst_56209 = cljs.core.PersistentVector.EMPTY;
var inst_56146 = inst_56209;
var inst_56147 = null;
var state_56235__$1 = (function (){var statearr_56257 = state_56235;
(statearr_56257[(14)] = inst_56208);

(statearr_56257[(10)] = inst_56146);

(statearr_56257[(11)] = inst_56147);

return statearr_56257;
})();
var statearr_56258_56320 = state_56235__$1;
(statearr_56258_56320[(2)] = null);

(statearr_56258_56320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (25))){
var inst_56229 = (state_56235[(2)]);
var state_56235__$1 = state_56235;
var statearr_56259_56321 = state_56235__$1;
(statearr_56259_56321[(2)] = inst_56229);

(statearr_56259_56321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (34))){
var inst_56219 = (state_56235[(2)]);
var inst_56220 = cljs.core.PersistentVector.EMPTY;
var inst_56146 = inst_56220;
var inst_56147 = null;
var state_56235__$1 = (function (){var statearr_56260 = state_56235;
(statearr_56260[(15)] = inst_56219);

(statearr_56260[(10)] = inst_56146);

(statearr_56260[(11)] = inst_56147);

return statearr_56260;
})();
var statearr_56261_56322 = state_56235__$1;
(statearr_56261_56322[(2)] = null);

(statearr_56261_56322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (17))){
var inst_56147 = (state_56235[(11)]);
var inst_56188 = (inst_56147 == null);
var state_56235__$1 = state_56235;
var statearr_56262_56323 = state_56235__$1;
(statearr_56262_56323[(2)] = inst_56188);

(statearr_56262_56323[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (3))){
var inst_56233 = (state_56235[(2)]);
var state_56235__$1 = state_56235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56235__$1,inst_56233);
} else {
if((state_val_56236 === (12))){
var inst_56146 = (state_56235[(10)]);
var inst_56167 = (state_56235[(9)]);
var inst_56186 = (state_56235[(16)]);
var inst_56185 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56146,inst_56167);
var inst_56186__$1 = flush_interval_ms;
var state_56235__$1 = (function (){var statearr_56263 = state_56235;
(statearr_56263[(13)] = inst_56185);

(statearr_56263[(16)] = inst_56186__$1);

return statearr_56263;
})();
if(cljs.core.truth_(inst_56186__$1)){
var statearr_56264_56324 = state_56235__$1;
(statearr_56264_56324[(1)] = (17));

} else {
var statearr_56265_56325 = state_56235__$1;
(statearr_56265_56325[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (2))){
var inst_56147 = (state_56235[(11)]);
var inst_56157 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56158 = [input_chan,flush_ch];
var inst_56159 = (new cljs.core.PersistentVector(null,2,(5),inst_56157,inst_56158,null));
var state_56235__$1 = (function (){var statearr_56266 = state_56235;
(statearr_56266[(12)] = inst_56159);

return statearr_56266;
})();
if(cljs.core.truth_(inst_56147)){
var statearr_56267_56326 = state_56235__$1;
(statearr_56267_56326[(1)] = (4));

} else {
var statearr_56268_56327 = state_56235__$1;
(statearr_56268_56327[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (23))){
var inst_56146 = (state_56235[(10)]);
var inst_56203 = cljs.core.seq(inst_56146);
var state_56235__$1 = state_56235;
if(inst_56203){
var statearr_56269_56328 = state_56235__$1;
(statearr_56269_56328[(1)] = (26));

} else {
var statearr_56270_56329 = state_56235__$1;
(statearr_56270_56329[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (19))){
var inst_56191 = (state_56235[(2)]);
var state_56235__$1 = state_56235;
if(cljs.core.truth_(inst_56191)){
var statearr_56271_56330 = state_56235__$1;
(statearr_56271_56330[(1)] = (20));

} else {
var statearr_56272_56331 = state_56235__$1;
(statearr_56272_56331[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (11))){
var inst_56146 = (state_56235[(10)]);
var inst_56178 = cljs.core.seq(inst_56146);
var state_56235__$1 = state_56235;
if(inst_56178){
var statearr_56273_56332 = state_56235__$1;
(statearr_56273_56332[(1)] = (14));

} else {
var statearr_56274_56333 = state_56235__$1;
(statearr_56274_56333[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (9))){
var inst_56172 = (state_56235[(7)]);
var inst_56168 = (state_56235[(8)]);
var inst_56201 = (inst_56172.cljs$core$IFn$_invoke$arity$2 ? inst_56172.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_56168) : inst_56172.call(null,flush_ch,inst_56168));
var state_56235__$1 = state_56235;
if(cljs.core.truth_(inst_56201)){
var statearr_56275_56334 = state_56235__$1;
(statearr_56275_56334[(1)] = (23));

} else {
var statearr_56276_56335 = state_56235__$1;
(statearr_56276_56335[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (5))){
var inst_56159 = (state_56235[(12)]);
var state_56235__$1 = state_56235;
var statearr_56277_56336 = state_56235__$1;
(statearr_56277_56336[(2)] = inst_56159);

(statearr_56277_56336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (14))){
var inst_56146 = (state_56235[(10)]);
var inst_56180 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56146) : on_flush.call(null,inst_56146));
var state_56235__$1 = state_56235;
var statearr_56278_56338 = state_56235__$1;
(statearr_56278_56338[(2)] = inst_56180);

(statearr_56278_56338[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (26))){
var inst_56146 = (state_56235[(10)]);
var inst_56205 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56146) : on_flush.call(null,inst_56146));
var state_56235__$1 = state_56235;
var statearr_56279_56339 = state_56235__$1;
(statearr_56279_56339[(2)] = inst_56205);

(statearr_56279_56339[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (16))){
var inst_56183 = (state_56235[(2)]);
var state_56235__$1 = state_56235;
var statearr_56280_56340 = state_56235__$1;
(statearr_56280_56340[(2)] = inst_56183);

(statearr_56280_56340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (30))){
var inst_56168 = (state_56235[(8)]);
var inst_56223 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56168)].join('');
var inst_56224 = (new Error(inst_56223));
var inst_56225 = (function(){throw inst_56224})();
var state_56235__$1 = state_56235;
var statearr_56281_56341 = state_56235__$1;
(statearr_56281_56341[(2)] = inst_56225);

(statearr_56281_56341[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (10))){
var inst_56231 = (state_56235[(2)]);
var state_56235__$1 = state_56235;
var statearr_56282_56343 = state_56235__$1;
(statearr_56282_56343[(2)] = inst_56231);

(statearr_56282_56343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (18))){
var inst_56186 = (state_56235[(16)]);
var state_56235__$1 = state_56235;
var statearr_56283_56344 = state_56235__$1;
(statearr_56283_56344[(2)] = inst_56186);

(statearr_56283_56344[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56236 === (8))){
var inst_56167 = (state_56235[(9)]);
var inst_56176 = (inst_56167 == null);
var state_56235__$1 = state_56235;
if(cljs.core.truth_(inst_56176)){
var statearr_56284_56345 = state_56235__$1;
(statearr_56284_56345[(1)] = (11));

} else {
var statearr_56285_56346 = state_56235__$1;
(statearr_56285_56346[(1)] = (12));

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
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_56235){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56235);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56287){var ex__32294__auto__ = e56287;
var statearr_56288_56347 = state_56235;
(statearr_56288_56347[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56235[(4)]))){
var statearr_56294_56348 = state_56235;
(statearr_56294_56348[(1)] = cljs.core.first((state_56235[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56349 = state_56235;
state_56235 = G__56349;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_56235){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_56235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56295 = f__32362__auto__();
(statearr_56295[(6)] = c__32361__auto___56296);

return statearr_56295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
