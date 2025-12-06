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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__56057){
var map__56058 = p__56057;
var map__56058__$1 = cljs.core.__destructure_map(map__56058);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56058__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56058__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56058__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56145){
var state_val_56146 = (state_56145[(1)]);
if((state_val_56146 === (7))){
var inst_56082 = (state_56145[(7)]);
var inst_56078 = (state_56145[(8)]);
var inst_56076 = (state_56145[(2)]);
var inst_56077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56076,(0),null);
var inst_56078__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56076,(1),null);
var inst_56082__$1 = cljs.core._EQ_;
var inst_56083 = (inst_56082__$1.cljs$core$IFn$_invoke$arity$2 ? inst_56082__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_56078__$1) : inst_56082__$1.call(null,input_chan,inst_56078__$1));
var state_56145__$1 = (function (){var statearr_56148 = state_56145;
(statearr_56148[(9)] = inst_56077);

(statearr_56148[(8)] = inst_56078__$1);

(statearr_56148[(7)] = inst_56082__$1);

return statearr_56148;
})();
if(cljs.core.truth_(inst_56083)){
var statearr_56149_56222 = state_56145__$1;
(statearr_56149_56222[(1)] = (8));

} else {
var statearr_56150_56223 = state_56145__$1;
(statearr_56150_56223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (20))){
var inst_56102 = cljs.core.async.timeout(flush_interval_ms);
var state_56145__$1 = state_56145;
var statearr_56152_56224 = state_56145__$1;
(statearr_56152_56224[(2)] = inst_56102);

(statearr_56152_56224[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (27))){
var state_56145__$1 = state_56145;
var statearr_56153_56225 = state_56145__$1;
(statearr_56153_56225[(2)] = null);

(statearr_56153_56225[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (1))){
var inst_56059 = cljs.core.PersistentVector.EMPTY;
var inst_56060 = inst_56059;
var inst_56061 = null;
var state_56145__$1 = (function (){var statearr_56155 = state_56145;
(statearr_56155[(10)] = inst_56060);

(statearr_56155[(11)] = inst_56061);

return statearr_56155;
})();
var statearr_56159_56226 = state_56145__$1;
(statearr_56159_56226[(2)] = null);

(statearr_56159_56226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (24))){
var inst_56082 = (state_56145[(7)]);
var inst_56061 = (state_56145[(11)]);
var inst_56078 = (state_56145[(8)]);
var inst_56121 = (inst_56082.cljs$core$IFn$_invoke$arity$2 ? inst_56082.cljs$core$IFn$_invoke$arity$2(inst_56061,inst_56078) : inst_56082.call(null,inst_56061,inst_56078));
var state_56145__$1 = state_56145;
if(cljs.core.truth_(inst_56121)){
var statearr_56164_56227 = state_56145__$1;
(statearr_56164_56227[(1)] = (29));

} else {
var statearr_56165_56228 = state_56145__$1;
(statearr_56165_56228[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (4))){
var inst_56069 = (state_56145[(12)]);
var inst_56061 = (state_56145[(11)]);
var inst_56071 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56069,inst_56061);
var state_56145__$1 = state_56145;
var statearr_56167_56229 = state_56145__$1;
(statearr_56167_56229[(2)] = inst_56071);

(statearr_56167_56229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (15))){
var state_56145__$1 = state_56145;
var statearr_56168_56230 = state_56145__$1;
(statearr_56168_56230[(2)] = null);

(statearr_56168_56230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (21))){
var inst_56061 = (state_56145[(11)]);
var state_56145__$1 = state_56145;
var statearr_56169_56231 = state_56145__$1;
(statearr_56169_56231[(2)] = inst_56061);

(statearr_56169_56231[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (31))){
var inst_56136 = (state_56145[(2)]);
var state_56145__$1 = state_56145;
var statearr_56170_56232 = state_56145__$1;
(statearr_56170_56232[(2)] = inst_56136);

(statearr_56170_56232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (32))){
var inst_56060 = (state_56145[(10)]);
var inst_56125 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56060) : on_flush.call(null,inst_56060));
var state_56145__$1 = state_56145;
var statearr_56171_56233 = state_56145__$1;
(statearr_56171_56233[(2)] = inst_56125);

(statearr_56171_56233[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (33))){
var state_56145__$1 = state_56145;
var statearr_56172_56234 = state_56145__$1;
(statearr_56172_56234[(2)] = null);

(statearr_56172_56234[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (13))){
var inst_56108 = (state_56145[(2)]);
var state_56145__$1 = state_56145;
var statearr_56173_56235 = state_56145__$1;
(statearr_56173_56235[(2)] = inst_56108);

(statearr_56173_56235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (22))){
var inst_56094 = (state_56145[(13)]);
var inst_56105 = (state_56145[(2)]);
var inst_56060 = inst_56094;
var inst_56061 = inst_56105;
var state_56145__$1 = (function (){var statearr_56178 = state_56145;
(statearr_56178[(10)] = inst_56060);

(statearr_56178[(11)] = inst_56061);

return statearr_56178;
})();
var statearr_56179_56236 = state_56145__$1;
(statearr_56179_56236[(2)] = null);

(statearr_56179_56236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (29))){
var inst_56060 = (state_56145[(10)]);
var inst_56123 = cljs.core.seq(inst_56060);
var state_56145__$1 = state_56145;
if(inst_56123){
var statearr_56180_56237 = state_56145__$1;
(statearr_56180_56237[(1)] = (32));

} else {
var statearr_56181_56238 = state_56145__$1;
(statearr_56181_56238[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (6))){
var inst_56074 = (state_56145[(2)]);
var state_56145__$1 = state_56145;
return cljs.core.async.ioc_alts_BANG_(state_56145__$1,(7),inst_56074);
} else {
if((state_val_56146 === (28))){
var inst_56117 = (state_56145[(2)]);
var inst_56118 = cljs.core.PersistentVector.EMPTY;
var inst_56060 = inst_56118;
var inst_56061 = null;
var state_56145__$1 = (function (){var statearr_56182 = state_56145;
(statearr_56182[(14)] = inst_56117);

(statearr_56182[(10)] = inst_56060);

(statearr_56182[(11)] = inst_56061);

return statearr_56182;
})();
var statearr_56183_56239 = state_56145__$1;
(statearr_56183_56239[(2)] = null);

(statearr_56183_56239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (25))){
var inst_56138 = (state_56145[(2)]);
var state_56145__$1 = state_56145;
var statearr_56184_56240 = state_56145__$1;
(statearr_56184_56240[(2)] = inst_56138);

(statearr_56184_56240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (34))){
var inst_56128 = (state_56145[(2)]);
var inst_56129 = cljs.core.PersistentVector.EMPTY;
var inst_56060 = inst_56129;
var inst_56061 = null;
var state_56145__$1 = (function (){var statearr_56185 = state_56145;
(statearr_56185[(15)] = inst_56128);

(statearr_56185[(10)] = inst_56060);

(statearr_56185[(11)] = inst_56061);

return statearr_56185;
})();
var statearr_56186_56241 = state_56145__$1;
(statearr_56186_56241[(2)] = null);

(statearr_56186_56241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (17))){
var inst_56061 = (state_56145[(11)]);
var inst_56097 = (inst_56061 == null);
var state_56145__$1 = state_56145;
var statearr_56187_56242 = state_56145__$1;
(statearr_56187_56242[(2)] = inst_56097);

(statearr_56187_56242[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (3))){
var inst_56142 = (state_56145[(2)]);
var state_56145__$1 = state_56145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56145__$1,inst_56142);
} else {
if((state_val_56146 === (12))){
var inst_56060 = (state_56145[(10)]);
var inst_56077 = (state_56145[(9)]);
var inst_56095 = (state_56145[(16)]);
var inst_56094 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56060,inst_56077);
var inst_56095__$1 = flush_interval_ms;
var state_56145__$1 = (function (){var statearr_56188 = state_56145;
(statearr_56188[(13)] = inst_56094);

(statearr_56188[(16)] = inst_56095__$1);

return statearr_56188;
})();
if(cljs.core.truth_(inst_56095__$1)){
var statearr_56193_56243 = state_56145__$1;
(statearr_56193_56243[(1)] = (17));

} else {
var statearr_56194_56244 = state_56145__$1;
(statearr_56194_56244[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (2))){
var inst_56061 = (state_56145[(11)]);
var inst_56067 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56068 = [input_chan,flush_ch];
var inst_56069 = (new cljs.core.PersistentVector(null,2,(5),inst_56067,inst_56068,null));
var state_56145__$1 = (function (){var statearr_56195 = state_56145;
(statearr_56195[(12)] = inst_56069);

return statearr_56195;
})();
if(cljs.core.truth_(inst_56061)){
var statearr_56196_56245 = state_56145__$1;
(statearr_56196_56245[(1)] = (4));

} else {
var statearr_56197_56246 = state_56145__$1;
(statearr_56197_56246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (23))){
var inst_56060 = (state_56145[(10)]);
var inst_56112 = cljs.core.seq(inst_56060);
var state_56145__$1 = state_56145;
if(inst_56112){
var statearr_56199_56247 = state_56145__$1;
(statearr_56199_56247[(1)] = (26));

} else {
var statearr_56200_56248 = state_56145__$1;
(statearr_56200_56248[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (19))){
var inst_56100 = (state_56145[(2)]);
var state_56145__$1 = state_56145;
if(cljs.core.truth_(inst_56100)){
var statearr_56201_56249 = state_56145__$1;
(statearr_56201_56249[(1)] = (20));

} else {
var statearr_56202_56250 = state_56145__$1;
(statearr_56202_56250[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (11))){
var inst_56060 = (state_56145[(10)]);
var inst_56087 = cljs.core.seq(inst_56060);
var state_56145__$1 = state_56145;
if(inst_56087){
var statearr_56203_56251 = state_56145__$1;
(statearr_56203_56251[(1)] = (14));

} else {
var statearr_56204_56252 = state_56145__$1;
(statearr_56204_56252[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (9))){
var inst_56082 = (state_56145[(7)]);
var inst_56078 = (state_56145[(8)]);
var inst_56110 = (inst_56082.cljs$core$IFn$_invoke$arity$2 ? inst_56082.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_56078) : inst_56082.call(null,flush_ch,inst_56078));
var state_56145__$1 = state_56145;
if(cljs.core.truth_(inst_56110)){
var statearr_56205_56253 = state_56145__$1;
(statearr_56205_56253[(1)] = (23));

} else {
var statearr_56206_56254 = state_56145__$1;
(statearr_56206_56254[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (5))){
var inst_56069 = (state_56145[(12)]);
var state_56145__$1 = state_56145;
var statearr_56207_56255 = state_56145__$1;
(statearr_56207_56255[(2)] = inst_56069);

(statearr_56207_56255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (14))){
var inst_56060 = (state_56145[(10)]);
var inst_56089 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56060) : on_flush.call(null,inst_56060));
var state_56145__$1 = state_56145;
var statearr_56208_56256 = state_56145__$1;
(statearr_56208_56256[(2)] = inst_56089);

(statearr_56208_56256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (26))){
var inst_56060 = (state_56145[(10)]);
var inst_56114 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56060) : on_flush.call(null,inst_56060));
var state_56145__$1 = state_56145;
var statearr_56209_56257 = state_56145__$1;
(statearr_56209_56257[(2)] = inst_56114);

(statearr_56209_56257[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (16))){
var inst_56092 = (state_56145[(2)]);
var state_56145__$1 = state_56145;
var statearr_56210_56258 = state_56145__$1;
(statearr_56210_56258[(2)] = inst_56092);

(statearr_56210_56258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (30))){
var inst_56078 = (state_56145[(8)]);
var inst_56132 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56078)].join('');
var inst_56133 = (new Error(inst_56132));
var inst_56134 = (function(){throw inst_56133})();
var state_56145__$1 = state_56145;
var statearr_56211_56259 = state_56145__$1;
(statearr_56211_56259[(2)] = inst_56134);

(statearr_56211_56259[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (10))){
var inst_56140 = (state_56145[(2)]);
var state_56145__$1 = state_56145;
var statearr_56212_56260 = state_56145__$1;
(statearr_56212_56260[(2)] = inst_56140);

(statearr_56212_56260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (18))){
var inst_56095 = (state_56145[(16)]);
var state_56145__$1 = state_56145;
var statearr_56213_56261 = state_56145__$1;
(statearr_56213_56261[(2)] = inst_56095);

(statearr_56213_56261[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56146 === (8))){
var inst_56077 = (state_56145[(9)]);
var inst_56085 = (inst_56077 == null);
var state_56145__$1 = state_56145;
if(cljs.core.truth_(inst_56085)){
var statearr_56214_56262 = state_56145__$1;
(statearr_56214_56262[(1)] = (11));

} else {
var statearr_56215_56263 = state_56145__$1;
(statearr_56215_56263[(1)] = (12));

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
var statearr_56216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56216[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56216[(1)] = (1));

return statearr_56216;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_56145){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56145);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56217){var ex__32294__auto__ = e56217;
var statearr_56218_56264 = state_56145;
(statearr_56218_56264[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56145[(4)]))){
var statearr_56219_56265 = state_56145;
(statearr_56219_56265[(1)] = cljs.core.first((state_56145[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56266 = state_56145;
state_56145 = G__56266;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_56145){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_56145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56220 = f__32362__auto__();
(statearr_56220[(6)] = c__32361__auto___56221);

return statearr_56220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
