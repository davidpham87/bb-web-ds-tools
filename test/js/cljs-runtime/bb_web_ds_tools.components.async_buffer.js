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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__56111){
var map__56112 = p__56111;
var map__56112__$1 = cljs.core.__destructure_map(map__56112);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56112__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56112__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56112__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56200){
var state_val_56201 = (state_56200[(1)]);
if((state_val_56201 === (7))){
var inst_56137 = (state_56200[(7)]);
var inst_56133 = (state_56200[(8)]);
var inst_56131 = (state_56200[(2)]);
var inst_56132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56131,(0),null);
var inst_56133__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56131,(1),null);
var inst_56137__$1 = cljs.core._EQ_;
var inst_56138 = (inst_56137__$1.cljs$core$IFn$_invoke$arity$2 ? inst_56137__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_56133__$1) : inst_56137__$1.call(null,input_chan,inst_56133__$1));
var state_56200__$1 = (function (){var statearr_56202 = state_56200;
(statearr_56202[(9)] = inst_56132);

(statearr_56202[(8)] = inst_56133__$1);

(statearr_56202[(7)] = inst_56137__$1);

return statearr_56202;
})();
if(cljs.core.truth_(inst_56138)){
var statearr_56203_56292 = state_56200__$1;
(statearr_56203_56292[(1)] = (8));

} else {
var statearr_56205_56293 = state_56200__$1;
(statearr_56205_56293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (20))){
var inst_56157 = cljs.core.async.timeout(flush_interval_ms);
var state_56200__$1 = state_56200;
var statearr_56207_56294 = state_56200__$1;
(statearr_56207_56294[(2)] = inst_56157);

(statearr_56207_56294[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (27))){
var state_56200__$1 = state_56200;
var statearr_56209_56295 = state_56200__$1;
(statearr_56209_56295[(2)] = null);

(statearr_56209_56295[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (1))){
var inst_56113 = cljs.core.PersistentVector.EMPTY;
var inst_56114 = inst_56113;
var inst_56115 = null;
var state_56200__$1 = (function (){var statearr_56210 = state_56200;
(statearr_56210[(10)] = inst_56114);

(statearr_56210[(11)] = inst_56115);

return statearr_56210;
})();
var statearr_56215_56296 = state_56200__$1;
(statearr_56215_56296[(2)] = null);

(statearr_56215_56296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (24))){
var inst_56137 = (state_56200[(7)]);
var inst_56115 = (state_56200[(11)]);
var inst_56133 = (state_56200[(8)]);
var inst_56176 = (inst_56137.cljs$core$IFn$_invoke$arity$2 ? inst_56137.cljs$core$IFn$_invoke$arity$2(inst_56115,inst_56133) : inst_56137.call(null,inst_56115,inst_56133));
var state_56200__$1 = state_56200;
if(cljs.core.truth_(inst_56176)){
var statearr_56216_56297 = state_56200__$1;
(statearr_56216_56297[(1)] = (29));

} else {
var statearr_56217_56298 = state_56200__$1;
(statearr_56217_56298[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (4))){
var inst_56124 = (state_56200[(12)]);
var inst_56115 = (state_56200[(11)]);
var inst_56126 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56124,inst_56115);
var state_56200__$1 = state_56200;
var statearr_56221_56299 = state_56200__$1;
(statearr_56221_56299[(2)] = inst_56126);

(statearr_56221_56299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (15))){
var state_56200__$1 = state_56200;
var statearr_56222_56300 = state_56200__$1;
(statearr_56222_56300[(2)] = null);

(statearr_56222_56300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (21))){
var inst_56115 = (state_56200[(11)]);
var state_56200__$1 = state_56200;
var statearr_56223_56301 = state_56200__$1;
(statearr_56223_56301[(2)] = inst_56115);

(statearr_56223_56301[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (31))){
var inst_56191 = (state_56200[(2)]);
var state_56200__$1 = state_56200;
var statearr_56227_56302 = state_56200__$1;
(statearr_56227_56302[(2)] = inst_56191);

(statearr_56227_56302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (32))){
var inst_56114 = (state_56200[(10)]);
var inst_56180 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56114) : on_flush.call(null,inst_56114));
var state_56200__$1 = state_56200;
var statearr_56228_56303 = state_56200__$1;
(statearr_56228_56303[(2)] = inst_56180);

(statearr_56228_56303[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (33))){
var state_56200__$1 = state_56200;
var statearr_56229_56304 = state_56200__$1;
(statearr_56229_56304[(2)] = null);

(statearr_56229_56304[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (13))){
var inst_56163 = (state_56200[(2)]);
var state_56200__$1 = state_56200;
var statearr_56230_56305 = state_56200__$1;
(statearr_56230_56305[(2)] = inst_56163);

(statearr_56230_56305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (22))){
var inst_56149 = (state_56200[(13)]);
var inst_56160 = (state_56200[(2)]);
var inst_56114 = inst_56149;
var inst_56115 = inst_56160;
var state_56200__$1 = (function (){var statearr_56231 = state_56200;
(statearr_56231[(10)] = inst_56114);

(statearr_56231[(11)] = inst_56115);

return statearr_56231;
})();
var statearr_56232_56306 = state_56200__$1;
(statearr_56232_56306[(2)] = null);

(statearr_56232_56306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (29))){
var inst_56114 = (state_56200[(10)]);
var inst_56178 = cljs.core.seq(inst_56114);
var state_56200__$1 = state_56200;
if(inst_56178){
var statearr_56233_56307 = state_56200__$1;
(statearr_56233_56307[(1)] = (32));

} else {
var statearr_56234_56308 = state_56200__$1;
(statearr_56234_56308[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (6))){
var inst_56129 = (state_56200[(2)]);
var state_56200__$1 = state_56200;
return cljs.core.async.ioc_alts_BANG_(state_56200__$1,(7),inst_56129);
} else {
if((state_val_56201 === (28))){
var inst_56172 = (state_56200[(2)]);
var inst_56173 = cljs.core.PersistentVector.EMPTY;
var inst_56114 = inst_56173;
var inst_56115 = null;
var state_56200__$1 = (function (){var statearr_56235 = state_56200;
(statearr_56235[(14)] = inst_56172);

(statearr_56235[(10)] = inst_56114);

(statearr_56235[(11)] = inst_56115);

return statearr_56235;
})();
var statearr_56236_56309 = state_56200__$1;
(statearr_56236_56309[(2)] = null);

(statearr_56236_56309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (25))){
var inst_56193 = (state_56200[(2)]);
var state_56200__$1 = state_56200;
var statearr_56237_56310 = state_56200__$1;
(statearr_56237_56310[(2)] = inst_56193);

(statearr_56237_56310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (34))){
var inst_56183 = (state_56200[(2)]);
var inst_56184 = cljs.core.PersistentVector.EMPTY;
var inst_56114 = inst_56184;
var inst_56115 = null;
var state_56200__$1 = (function (){var statearr_56238 = state_56200;
(statearr_56238[(15)] = inst_56183);

(statearr_56238[(10)] = inst_56114);

(statearr_56238[(11)] = inst_56115);

return statearr_56238;
})();
var statearr_56239_56311 = state_56200__$1;
(statearr_56239_56311[(2)] = null);

(statearr_56239_56311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (17))){
var inst_56115 = (state_56200[(11)]);
var inst_56152 = (inst_56115 == null);
var state_56200__$1 = state_56200;
var statearr_56241_56312 = state_56200__$1;
(statearr_56241_56312[(2)] = inst_56152);

(statearr_56241_56312[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (3))){
var inst_56197 = (state_56200[(2)]);
var state_56200__$1 = state_56200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56200__$1,inst_56197);
} else {
if((state_val_56201 === (12))){
var inst_56114 = (state_56200[(10)]);
var inst_56132 = (state_56200[(9)]);
var inst_56150 = (state_56200[(16)]);
var inst_56149 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56114,inst_56132);
var inst_56150__$1 = flush_interval_ms;
var state_56200__$1 = (function (){var statearr_56242 = state_56200;
(statearr_56242[(13)] = inst_56149);

(statearr_56242[(16)] = inst_56150__$1);

return statearr_56242;
})();
if(cljs.core.truth_(inst_56150__$1)){
var statearr_56243_56313 = state_56200__$1;
(statearr_56243_56313[(1)] = (17));

} else {
var statearr_56244_56314 = state_56200__$1;
(statearr_56244_56314[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (2))){
var inst_56115 = (state_56200[(11)]);
var inst_56122 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56123 = [input_chan,flush_ch];
var inst_56124 = (new cljs.core.PersistentVector(null,2,(5),inst_56122,inst_56123,null));
var state_56200__$1 = (function (){var statearr_56245 = state_56200;
(statearr_56245[(12)] = inst_56124);

return statearr_56245;
})();
if(cljs.core.truth_(inst_56115)){
var statearr_56246_56315 = state_56200__$1;
(statearr_56246_56315[(1)] = (4));

} else {
var statearr_56247_56316 = state_56200__$1;
(statearr_56247_56316[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (23))){
var inst_56114 = (state_56200[(10)]);
var inst_56167 = cljs.core.seq(inst_56114);
var state_56200__$1 = state_56200;
if(inst_56167){
var statearr_56248_56317 = state_56200__$1;
(statearr_56248_56317[(1)] = (26));

} else {
var statearr_56249_56318 = state_56200__$1;
(statearr_56249_56318[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (19))){
var inst_56155 = (state_56200[(2)]);
var state_56200__$1 = state_56200;
if(cljs.core.truth_(inst_56155)){
var statearr_56250_56319 = state_56200__$1;
(statearr_56250_56319[(1)] = (20));

} else {
var statearr_56251_56320 = state_56200__$1;
(statearr_56251_56320[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (11))){
var inst_56114 = (state_56200[(10)]);
var inst_56142 = cljs.core.seq(inst_56114);
var state_56200__$1 = state_56200;
if(inst_56142){
var statearr_56252_56321 = state_56200__$1;
(statearr_56252_56321[(1)] = (14));

} else {
var statearr_56253_56322 = state_56200__$1;
(statearr_56253_56322[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (9))){
var inst_56137 = (state_56200[(7)]);
var inst_56133 = (state_56200[(8)]);
var inst_56165 = (inst_56137.cljs$core$IFn$_invoke$arity$2 ? inst_56137.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_56133) : inst_56137.call(null,flush_ch,inst_56133));
var state_56200__$1 = state_56200;
if(cljs.core.truth_(inst_56165)){
var statearr_56254_56323 = state_56200__$1;
(statearr_56254_56323[(1)] = (23));

} else {
var statearr_56256_56324 = state_56200__$1;
(statearr_56256_56324[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (5))){
var inst_56124 = (state_56200[(12)]);
var state_56200__$1 = state_56200;
var statearr_56260_56325 = state_56200__$1;
(statearr_56260_56325[(2)] = inst_56124);

(statearr_56260_56325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (14))){
var inst_56114 = (state_56200[(10)]);
var inst_56144 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56114) : on_flush.call(null,inst_56114));
var state_56200__$1 = state_56200;
var statearr_56263_56326 = state_56200__$1;
(statearr_56263_56326[(2)] = inst_56144);

(statearr_56263_56326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (26))){
var inst_56114 = (state_56200[(10)]);
var inst_56169 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56114) : on_flush.call(null,inst_56114));
var state_56200__$1 = state_56200;
var statearr_56267_56327 = state_56200__$1;
(statearr_56267_56327[(2)] = inst_56169);

(statearr_56267_56327[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (16))){
var inst_56147 = (state_56200[(2)]);
var state_56200__$1 = state_56200;
var statearr_56270_56328 = state_56200__$1;
(statearr_56270_56328[(2)] = inst_56147);

(statearr_56270_56328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (30))){
var inst_56133 = (state_56200[(8)]);
var inst_56187 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56133)].join('');
var inst_56188 = (new Error(inst_56187));
var inst_56189 = (function(){throw inst_56188})();
var state_56200__$1 = state_56200;
var statearr_56271_56329 = state_56200__$1;
(statearr_56271_56329[(2)] = inst_56189);

(statearr_56271_56329[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (10))){
var inst_56195 = (state_56200[(2)]);
var state_56200__$1 = state_56200;
var statearr_56277_56330 = state_56200__$1;
(statearr_56277_56330[(2)] = inst_56195);

(statearr_56277_56330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (18))){
var inst_56150 = (state_56200[(16)]);
var state_56200__$1 = state_56200;
var statearr_56278_56331 = state_56200__$1;
(statearr_56278_56331[(2)] = inst_56150);

(statearr_56278_56331[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56201 === (8))){
var inst_56132 = (state_56200[(9)]);
var inst_56140 = (inst_56132 == null);
var state_56200__$1 = state_56200;
if(cljs.core.truth_(inst_56140)){
var statearr_56279_56332 = state_56200__$1;
(statearr_56279_56332[(1)] = (11));

} else {
var statearr_56280_56333 = state_56200__$1;
(statearr_56280_56333[(1)] = (12));

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
var statearr_56282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56282[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56282[(1)] = (1));

return statearr_56282;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_56200){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56200);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56286){var ex__32294__auto__ = e56286;
var statearr_56287_56334 = state_56200;
(statearr_56287_56334[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56200[(4)]))){
var statearr_56288_56335 = state_56200;
(statearr_56288_56335[(1)] = cljs.core.first((state_56200[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56336 = state_56200;
state_56200 = G__56336;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_56200){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_56200);
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
