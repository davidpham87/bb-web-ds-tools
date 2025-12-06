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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__56065){
var map__56066 = p__56065;
var map__56066__$1 = cljs.core.__destructure_map(map__56066);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56066__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56066__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56066__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56161){
var state_val_56162 = (state_56161[(1)]);
if((state_val_56162 === (7))){
var inst_56090 = (state_56161[(7)]);
var inst_56086 = (state_56161[(8)]);
var inst_56084 = (state_56161[(2)]);
var inst_56085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56084,(0),null);
var inst_56086__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56084,(1),null);
var inst_56090__$1 = cljs.core._EQ_;
var inst_56091 = (inst_56090__$1.cljs$core$IFn$_invoke$arity$2 ? inst_56090__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_56086__$1) : inst_56090__$1.call(null,input_chan,inst_56086__$1));
var state_56161__$1 = (function (){var statearr_56167 = state_56161;
(statearr_56167[(9)] = inst_56085);

(statearr_56167[(8)] = inst_56086__$1);

(statearr_56167[(7)] = inst_56090__$1);

return statearr_56167;
})();
if(cljs.core.truth_(inst_56091)){
var statearr_56168_56227 = state_56161__$1;
(statearr_56168_56227[(1)] = (8));

} else {
var statearr_56169_56228 = state_56161__$1;
(statearr_56169_56228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (20))){
var inst_56111 = cljs.core.async.timeout(flush_interval_ms);
var state_56161__$1 = state_56161;
var statearr_56170_56229 = state_56161__$1;
(statearr_56170_56229[(2)] = inst_56111);

(statearr_56170_56229[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (27))){
var state_56161__$1 = state_56161;
var statearr_56171_56230 = state_56161__$1;
(statearr_56171_56230[(2)] = null);

(statearr_56171_56230[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (1))){
var inst_56067 = cljs.core.PersistentVector.EMPTY;
var inst_56068 = inst_56067;
var inst_56069 = null;
var state_56161__$1 = (function (){var statearr_56172 = state_56161;
(statearr_56172[(10)] = inst_56068);

(statearr_56172[(11)] = inst_56069);

return statearr_56172;
})();
var statearr_56173_56231 = state_56161__$1;
(statearr_56173_56231[(2)] = null);

(statearr_56173_56231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (24))){
var inst_56090 = (state_56161[(7)]);
var inst_56069 = (state_56161[(11)]);
var inst_56086 = (state_56161[(8)]);
var inst_56133 = (inst_56090.cljs$core$IFn$_invoke$arity$2 ? inst_56090.cljs$core$IFn$_invoke$arity$2(inst_56069,inst_56086) : inst_56090.call(null,inst_56069,inst_56086));
var state_56161__$1 = state_56161;
if(cljs.core.truth_(inst_56133)){
var statearr_56174_56232 = state_56161__$1;
(statearr_56174_56232[(1)] = (29));

} else {
var statearr_56175_56233 = state_56161__$1;
(statearr_56175_56233[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (4))){
var inst_56077 = (state_56161[(12)]);
var inst_56069 = (state_56161[(11)]);
var inst_56079 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56077,inst_56069);
var state_56161__$1 = state_56161;
var statearr_56176_56234 = state_56161__$1;
(statearr_56176_56234[(2)] = inst_56079);

(statearr_56176_56234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (15))){
var state_56161__$1 = state_56161;
var statearr_56177_56235 = state_56161__$1;
(statearr_56177_56235[(2)] = null);

(statearr_56177_56235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (21))){
var inst_56069 = (state_56161[(11)]);
var state_56161__$1 = state_56161;
var statearr_56178_56236 = state_56161__$1;
(statearr_56178_56236[(2)] = inst_56069);

(statearr_56178_56236[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (31))){
var inst_56152 = (state_56161[(2)]);
var state_56161__$1 = state_56161;
var statearr_56183_56237 = state_56161__$1;
(statearr_56183_56237[(2)] = inst_56152);

(statearr_56183_56237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (32))){
var inst_56068 = (state_56161[(10)]);
var inst_56137 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56068) : on_flush.call(null,inst_56068));
var state_56161__$1 = state_56161;
var statearr_56184_56238 = state_56161__$1;
(statearr_56184_56238[(2)] = inst_56137);

(statearr_56184_56238[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (33))){
var state_56161__$1 = state_56161;
var statearr_56185_56239 = state_56161__$1;
(statearr_56185_56239[(2)] = null);

(statearr_56185_56239[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (13))){
var inst_56117 = (state_56161[(2)]);
var state_56161__$1 = state_56161;
var statearr_56187_56240 = state_56161__$1;
(statearr_56187_56240[(2)] = inst_56117);

(statearr_56187_56240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (22))){
var inst_56102 = (state_56161[(13)]);
var inst_56114 = (state_56161[(2)]);
var inst_56068 = inst_56102;
var inst_56069 = inst_56114;
var state_56161__$1 = (function (){var statearr_56188 = state_56161;
(statearr_56188[(10)] = inst_56068);

(statearr_56188[(11)] = inst_56069);

return statearr_56188;
})();
var statearr_56189_56241 = state_56161__$1;
(statearr_56189_56241[(2)] = null);

(statearr_56189_56241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (29))){
var inst_56068 = (state_56161[(10)]);
var inst_56135 = cljs.core.seq(inst_56068);
var state_56161__$1 = state_56161;
if(inst_56135){
var statearr_56190_56242 = state_56161__$1;
(statearr_56190_56242[(1)] = (32));

} else {
var statearr_56191_56243 = state_56161__$1;
(statearr_56191_56243[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (6))){
var inst_56082 = (state_56161[(2)]);
var state_56161__$1 = state_56161;
return cljs.core.async.ioc_alts_BANG_(state_56161__$1,(7),inst_56082);
} else {
if((state_val_56162 === (28))){
var inst_56129 = (state_56161[(2)]);
var inst_56130 = cljs.core.PersistentVector.EMPTY;
var inst_56068 = inst_56130;
var inst_56069 = null;
var state_56161__$1 = (function (){var statearr_56192 = state_56161;
(statearr_56192[(14)] = inst_56129);

(statearr_56192[(10)] = inst_56068);

(statearr_56192[(11)] = inst_56069);

return statearr_56192;
})();
var statearr_56193_56244 = state_56161__$1;
(statearr_56193_56244[(2)] = null);

(statearr_56193_56244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (25))){
var inst_56154 = (state_56161[(2)]);
var state_56161__$1 = state_56161;
var statearr_56194_56245 = state_56161__$1;
(statearr_56194_56245[(2)] = inst_56154);

(statearr_56194_56245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (34))){
var inst_56140 = (state_56161[(2)]);
var inst_56142 = cljs.core.PersistentVector.EMPTY;
var inst_56068 = inst_56142;
var inst_56069 = null;
var state_56161__$1 = (function (){var statearr_56195 = state_56161;
(statearr_56195[(15)] = inst_56140);

(statearr_56195[(10)] = inst_56068);

(statearr_56195[(11)] = inst_56069);

return statearr_56195;
})();
var statearr_56196_56246 = state_56161__$1;
(statearr_56196_56246[(2)] = null);

(statearr_56196_56246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (17))){
var inst_56069 = (state_56161[(11)]);
var inst_56105 = (inst_56069 == null);
var state_56161__$1 = state_56161;
var statearr_56197_56247 = state_56161__$1;
(statearr_56197_56247[(2)] = inst_56105);

(statearr_56197_56247[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (3))){
var inst_56158 = (state_56161[(2)]);
var state_56161__$1 = state_56161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56161__$1,inst_56158);
} else {
if((state_val_56162 === (12))){
var inst_56068 = (state_56161[(10)]);
var inst_56085 = (state_56161[(9)]);
var inst_56103 = (state_56161[(16)]);
var inst_56102 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56068,inst_56085);
var inst_56103__$1 = flush_interval_ms;
var state_56161__$1 = (function (){var statearr_56198 = state_56161;
(statearr_56198[(13)] = inst_56102);

(statearr_56198[(16)] = inst_56103__$1);

return statearr_56198;
})();
if(cljs.core.truth_(inst_56103__$1)){
var statearr_56199_56248 = state_56161__$1;
(statearr_56199_56248[(1)] = (17));

} else {
var statearr_56200_56249 = state_56161__$1;
(statearr_56200_56249[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (2))){
var inst_56069 = (state_56161[(11)]);
var inst_56075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56076 = [input_chan,flush_ch];
var inst_56077 = (new cljs.core.PersistentVector(null,2,(5),inst_56075,inst_56076,null));
var state_56161__$1 = (function (){var statearr_56201 = state_56161;
(statearr_56201[(12)] = inst_56077);

return statearr_56201;
})();
if(cljs.core.truth_(inst_56069)){
var statearr_56202_56250 = state_56161__$1;
(statearr_56202_56250[(1)] = (4));

} else {
var statearr_56203_56251 = state_56161__$1;
(statearr_56203_56251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (23))){
var inst_56068 = (state_56161[(10)]);
var inst_56124 = cljs.core.seq(inst_56068);
var state_56161__$1 = state_56161;
if(inst_56124){
var statearr_56204_56252 = state_56161__$1;
(statearr_56204_56252[(1)] = (26));

} else {
var statearr_56205_56253 = state_56161__$1;
(statearr_56205_56253[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (19))){
var inst_56108 = (state_56161[(2)]);
var state_56161__$1 = state_56161;
if(cljs.core.truth_(inst_56108)){
var statearr_56206_56254 = state_56161__$1;
(statearr_56206_56254[(1)] = (20));

} else {
var statearr_56207_56255 = state_56161__$1;
(statearr_56207_56255[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (11))){
var inst_56068 = (state_56161[(10)]);
var inst_56095 = cljs.core.seq(inst_56068);
var state_56161__$1 = state_56161;
if(inst_56095){
var statearr_56208_56256 = state_56161__$1;
(statearr_56208_56256[(1)] = (14));

} else {
var statearr_56209_56257 = state_56161__$1;
(statearr_56209_56257[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (9))){
var inst_56090 = (state_56161[(7)]);
var inst_56086 = (state_56161[(8)]);
var inst_56122 = (inst_56090.cljs$core$IFn$_invoke$arity$2 ? inst_56090.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_56086) : inst_56090.call(null,flush_ch,inst_56086));
var state_56161__$1 = state_56161;
if(cljs.core.truth_(inst_56122)){
var statearr_56210_56258 = state_56161__$1;
(statearr_56210_56258[(1)] = (23));

} else {
var statearr_56211_56259 = state_56161__$1;
(statearr_56211_56259[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (5))){
var inst_56077 = (state_56161[(12)]);
var state_56161__$1 = state_56161;
var statearr_56212_56260 = state_56161__$1;
(statearr_56212_56260[(2)] = inst_56077);

(statearr_56212_56260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (14))){
var inst_56068 = (state_56161[(10)]);
var inst_56097 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56068) : on_flush.call(null,inst_56068));
var state_56161__$1 = state_56161;
var statearr_56213_56261 = state_56161__$1;
(statearr_56213_56261[(2)] = inst_56097);

(statearr_56213_56261[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (26))){
var inst_56068 = (state_56161[(10)]);
var inst_56126 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56068) : on_flush.call(null,inst_56068));
var state_56161__$1 = state_56161;
var statearr_56214_56262 = state_56161__$1;
(statearr_56214_56262[(2)] = inst_56126);

(statearr_56214_56262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (16))){
var inst_56100 = (state_56161[(2)]);
var state_56161__$1 = state_56161;
var statearr_56215_56263 = state_56161__$1;
(statearr_56215_56263[(2)] = inst_56100);

(statearr_56215_56263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (30))){
var inst_56086 = (state_56161[(8)]);
var inst_56148 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56086)].join('');
var inst_56149 = (new Error(inst_56148));
var inst_56150 = (function(){throw inst_56149})();
var state_56161__$1 = state_56161;
var statearr_56216_56264 = state_56161__$1;
(statearr_56216_56264[(2)] = inst_56150);

(statearr_56216_56264[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (10))){
var inst_56156 = (state_56161[(2)]);
var state_56161__$1 = state_56161;
var statearr_56217_56265 = state_56161__$1;
(statearr_56217_56265[(2)] = inst_56156);

(statearr_56217_56265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (18))){
var inst_56103 = (state_56161[(16)]);
var state_56161__$1 = state_56161;
var statearr_56218_56266 = state_56161__$1;
(statearr_56218_56266[(2)] = inst_56103);

(statearr_56218_56266[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56162 === (8))){
var inst_56085 = (state_56161[(9)]);
var inst_56093 = (inst_56085 == null);
var state_56161__$1 = state_56161;
if(cljs.core.truth_(inst_56093)){
var statearr_56219_56267 = state_56161__$1;
(statearr_56219_56267[(1)] = (11));

} else {
var statearr_56220_56268 = state_56161__$1;
(statearr_56220_56268[(1)] = (12));

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
var statearr_56221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56221[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56221[(1)] = (1));

return statearr_56221;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_56161){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56161);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56222){var ex__32294__auto__ = e56222;
var statearr_56223_56269 = state_56161;
(statearr_56223_56269[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56161[(4)]))){
var statearr_56224_56270 = state_56161;
(statearr_56224_56270[(1)] = cljs.core.first((state_56161[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56271 = state_56161;
state_56161 = G__56271;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_56161){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_56161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56225 = f__32362__auto__();
(statearr_56225[(6)] = c__32361__auto___56226);

return statearr_56225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
