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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__56175){
var map__56176 = p__56175;
var map__56176__$1 = cljs.core.__destructure_map(map__56176);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56176__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56176__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56176__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32417__auto___56353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_56275){
var state_val_56276 = (state_56275[(1)]);
if((state_val_56276 === (7))){
var inst_56203 = (state_56275[(7)]);
var inst_56199 = (state_56275[(8)]);
var inst_56197 = (state_56275[(2)]);
var inst_56198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56197,(0),null);
var inst_56199__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56197,(1),null);
var inst_56203__$1 = cljs.core._EQ_;
var inst_56208 = (inst_56203__$1.cljs$core$IFn$_invoke$arity$2 ? inst_56203__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_56199__$1) : inst_56203__$1.call(null,input_chan,inst_56199__$1));
var state_56275__$1 = (function (){var statearr_56278 = state_56275;
(statearr_56278[(9)] = inst_56198);

(statearr_56278[(8)] = inst_56199__$1);

(statearr_56278[(7)] = inst_56203__$1);

return statearr_56278;
})();
if(cljs.core.truth_(inst_56208)){
var statearr_56279_56354 = state_56275__$1;
(statearr_56279_56354[(1)] = (8));

} else {
var statearr_56280_56355 = state_56275__$1;
(statearr_56280_56355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (20))){
var inst_56233 = cljs.core.async.timeout(flush_interval_ms);
var state_56275__$1 = state_56275;
var statearr_56281_56356 = state_56275__$1;
(statearr_56281_56356[(2)] = inst_56233);

(statearr_56281_56356[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (27))){
var state_56275__$1 = state_56275;
var statearr_56282_56357 = state_56275__$1;
(statearr_56282_56357[(2)] = null);

(statearr_56282_56357[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (1))){
var inst_56177 = cljs.core.PersistentVector.EMPTY;
var inst_56178 = inst_56177;
var inst_56179 = null;
var state_56275__$1 = (function (){var statearr_56283 = state_56275;
(statearr_56283[(10)] = inst_56178);

(statearr_56283[(11)] = inst_56179);

return statearr_56283;
})();
var statearr_56284_56358 = state_56275__$1;
(statearr_56284_56358[(2)] = null);

(statearr_56284_56358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (24))){
var inst_56203 = (state_56275[(7)]);
var inst_56179 = (state_56275[(11)]);
var inst_56199 = (state_56275[(8)]);
var inst_56252 = (inst_56203.cljs$core$IFn$_invoke$arity$2 ? inst_56203.cljs$core$IFn$_invoke$arity$2(inst_56179,inst_56199) : inst_56203.call(null,inst_56179,inst_56199));
var state_56275__$1 = state_56275;
if(cljs.core.truth_(inst_56252)){
var statearr_56285_56359 = state_56275__$1;
(statearr_56285_56359[(1)] = (29));

} else {
var statearr_56298_56360 = state_56275__$1;
(statearr_56298_56360[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (4))){
var inst_56189 = (state_56275[(12)]);
var inst_56179 = (state_56275[(11)]);
var inst_56192 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56189,inst_56179);
var state_56275__$1 = state_56275;
var statearr_56299_56361 = state_56275__$1;
(statearr_56299_56361[(2)] = inst_56192);

(statearr_56299_56361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (15))){
var state_56275__$1 = state_56275;
var statearr_56300_56362 = state_56275__$1;
(statearr_56300_56362[(2)] = null);

(statearr_56300_56362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (21))){
var inst_56179 = (state_56275[(11)]);
var state_56275__$1 = state_56275;
var statearr_56301_56363 = state_56275__$1;
(statearr_56301_56363[(2)] = inst_56179);

(statearr_56301_56363[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (31))){
var inst_56267 = (state_56275[(2)]);
var state_56275__$1 = state_56275;
var statearr_56302_56364 = state_56275__$1;
(statearr_56302_56364[(2)] = inst_56267);

(statearr_56302_56364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (32))){
var inst_56178 = (state_56275[(10)]);
var inst_56256 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56178) : on_flush.call(null,inst_56178));
var state_56275__$1 = state_56275;
var statearr_56303_56365 = state_56275__$1;
(statearr_56303_56365[(2)] = inst_56256);

(statearr_56303_56365[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (33))){
var state_56275__$1 = state_56275;
var statearr_56304_56366 = state_56275__$1;
(statearr_56304_56366[(2)] = null);

(statearr_56304_56366[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (13))){
var inst_56239 = (state_56275[(2)]);
var state_56275__$1 = state_56275;
var statearr_56305_56367 = state_56275__$1;
(statearr_56305_56367[(2)] = inst_56239);

(statearr_56305_56367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (22))){
var inst_56222 = (state_56275[(13)]);
var inst_56236 = (state_56275[(2)]);
var inst_56178 = inst_56222;
var inst_56179 = inst_56236;
var state_56275__$1 = (function (){var statearr_56306 = state_56275;
(statearr_56306[(10)] = inst_56178);

(statearr_56306[(11)] = inst_56179);

return statearr_56306;
})();
var statearr_56307_56368 = state_56275__$1;
(statearr_56307_56368[(2)] = null);

(statearr_56307_56368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (29))){
var inst_56178 = (state_56275[(10)]);
var inst_56254 = cljs.core.seq(inst_56178);
var state_56275__$1 = state_56275;
if(inst_56254){
var statearr_56312_56369 = state_56275__$1;
(statearr_56312_56369[(1)] = (32));

} else {
var statearr_56313_56370 = state_56275__$1;
(statearr_56313_56370[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (6))){
var inst_56195 = (state_56275[(2)]);
var state_56275__$1 = state_56275;
return cljs.core.async.ioc_alts_BANG_(state_56275__$1,(7),inst_56195);
} else {
if((state_val_56276 === (28))){
var inst_56248 = (state_56275[(2)]);
var inst_56249 = cljs.core.PersistentVector.EMPTY;
var inst_56178 = inst_56249;
var inst_56179 = null;
var state_56275__$1 = (function (){var statearr_56314 = state_56275;
(statearr_56314[(14)] = inst_56248);

(statearr_56314[(10)] = inst_56178);

(statearr_56314[(11)] = inst_56179);

return statearr_56314;
})();
var statearr_56315_56371 = state_56275__$1;
(statearr_56315_56371[(2)] = null);

(statearr_56315_56371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (25))){
var inst_56269 = (state_56275[(2)]);
var state_56275__$1 = state_56275;
var statearr_56316_56372 = state_56275__$1;
(statearr_56316_56372[(2)] = inst_56269);

(statearr_56316_56372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (34))){
var inst_56259 = (state_56275[(2)]);
var inst_56260 = cljs.core.PersistentVector.EMPTY;
var inst_56178 = inst_56260;
var inst_56179 = null;
var state_56275__$1 = (function (){var statearr_56317 = state_56275;
(statearr_56317[(15)] = inst_56259);

(statearr_56317[(10)] = inst_56178);

(statearr_56317[(11)] = inst_56179);

return statearr_56317;
})();
var statearr_56318_56373 = state_56275__$1;
(statearr_56318_56373[(2)] = null);

(statearr_56318_56373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (17))){
var inst_56179 = (state_56275[(11)]);
var inst_56225 = (inst_56179 == null);
var state_56275__$1 = state_56275;
var statearr_56319_56377 = state_56275__$1;
(statearr_56319_56377[(2)] = inst_56225);

(statearr_56319_56377[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (3))){
var inst_56273 = (state_56275[(2)]);
var state_56275__$1 = state_56275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56275__$1,inst_56273);
} else {
if((state_val_56276 === (12))){
var inst_56178 = (state_56275[(10)]);
var inst_56198 = (state_56275[(9)]);
var inst_56223 = (state_56275[(16)]);
var inst_56222 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56178,inst_56198);
var inst_56223__$1 = flush_interval_ms;
var state_56275__$1 = (function (){var statearr_56321 = state_56275;
(statearr_56321[(13)] = inst_56222);

(statearr_56321[(16)] = inst_56223__$1);

return statearr_56321;
})();
if(cljs.core.truth_(inst_56223__$1)){
var statearr_56325_56379 = state_56275__$1;
(statearr_56325_56379[(1)] = (17));

} else {
var statearr_56326_56380 = state_56275__$1;
(statearr_56326_56380[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (2))){
var inst_56179 = (state_56275[(11)]);
var inst_56187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56188 = [input_chan,flush_ch];
var inst_56189 = (new cljs.core.PersistentVector(null,2,(5),inst_56187,inst_56188,null));
var state_56275__$1 = (function (){var statearr_56327 = state_56275;
(statearr_56327[(12)] = inst_56189);

return statearr_56327;
})();
if(cljs.core.truth_(inst_56179)){
var statearr_56328_56381 = state_56275__$1;
(statearr_56328_56381[(1)] = (4));

} else {
var statearr_56329_56382 = state_56275__$1;
(statearr_56329_56382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (23))){
var inst_56178 = (state_56275[(10)]);
var inst_56243 = cljs.core.seq(inst_56178);
var state_56275__$1 = state_56275;
if(inst_56243){
var statearr_56330_56383 = state_56275__$1;
(statearr_56330_56383[(1)] = (26));

} else {
var statearr_56331_56384 = state_56275__$1;
(statearr_56331_56384[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (19))){
var inst_56228 = (state_56275[(2)]);
var state_56275__$1 = state_56275;
if(cljs.core.truth_(inst_56228)){
var statearr_56332_56385 = state_56275__$1;
(statearr_56332_56385[(1)] = (20));

} else {
var statearr_56333_56386 = state_56275__$1;
(statearr_56333_56386[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (11))){
var inst_56178 = (state_56275[(10)]);
var inst_56212 = cljs.core.seq(inst_56178);
var state_56275__$1 = state_56275;
if(inst_56212){
var statearr_56334_56388 = state_56275__$1;
(statearr_56334_56388[(1)] = (14));

} else {
var statearr_56335_56389 = state_56275__$1;
(statearr_56335_56389[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (9))){
var inst_56203 = (state_56275[(7)]);
var inst_56199 = (state_56275[(8)]);
var inst_56241 = (inst_56203.cljs$core$IFn$_invoke$arity$2 ? inst_56203.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_56199) : inst_56203.call(null,flush_ch,inst_56199));
var state_56275__$1 = state_56275;
if(cljs.core.truth_(inst_56241)){
var statearr_56336_56390 = state_56275__$1;
(statearr_56336_56390[(1)] = (23));

} else {
var statearr_56337_56391 = state_56275__$1;
(statearr_56337_56391[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (5))){
var inst_56189 = (state_56275[(12)]);
var state_56275__$1 = state_56275;
var statearr_56338_56392 = state_56275__$1;
(statearr_56338_56392[(2)] = inst_56189);

(statearr_56338_56392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (14))){
var inst_56178 = (state_56275[(10)]);
var inst_56217 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56178) : on_flush.call(null,inst_56178));
var state_56275__$1 = state_56275;
var statearr_56339_56393 = state_56275__$1;
(statearr_56339_56393[(2)] = inst_56217);

(statearr_56339_56393[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (26))){
var inst_56178 = (state_56275[(10)]);
var inst_56245 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56178) : on_flush.call(null,inst_56178));
var state_56275__$1 = state_56275;
var statearr_56340_56394 = state_56275__$1;
(statearr_56340_56394[(2)] = inst_56245);

(statearr_56340_56394[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (16))){
var inst_56220 = (state_56275[(2)]);
var state_56275__$1 = state_56275;
var statearr_56342_56395 = state_56275__$1;
(statearr_56342_56395[(2)] = inst_56220);

(statearr_56342_56395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (30))){
var inst_56199 = (state_56275[(8)]);
var inst_56263 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56199)].join('');
var inst_56264 = (new Error(inst_56263));
var inst_56265 = (function(){throw inst_56264})();
var state_56275__$1 = state_56275;
var statearr_56343_56396 = state_56275__$1;
(statearr_56343_56396[(2)] = inst_56265);

(statearr_56343_56396[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (10))){
var inst_56271 = (state_56275[(2)]);
var state_56275__$1 = state_56275;
var statearr_56344_56397 = state_56275__$1;
(statearr_56344_56397[(2)] = inst_56271);

(statearr_56344_56397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (18))){
var inst_56223 = (state_56275[(16)]);
var state_56275__$1 = state_56275;
var statearr_56345_56398 = state_56275__$1;
(statearr_56345_56398[(2)] = inst_56223);

(statearr_56345_56398[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56276 === (8))){
var inst_56198 = (state_56275[(9)]);
var inst_56210 = (inst_56198 == null);
var state_56275__$1 = state_56275;
if(cljs.core.truth_(inst_56210)){
var statearr_56346_56399 = state_56275__$1;
(statearr_56346_56399[(1)] = (11));

} else {
var statearr_56347_56400 = state_56275__$1;
(statearr_56347_56400[(1)] = (12));

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
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__ = null;
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____0 = (function (){
var statearr_56348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56348[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__);

(statearr_56348[(1)] = (1));

return statearr_56348;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____1 = (function (state_56275){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_56275);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e56349){var ex__32350__auto__ = e56349;
var statearr_56350_56401 = state_56275;
(statearr_56350_56401[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_56275[(4)]))){
var statearr_56351_56402 = state_56275;
(statearr_56351_56402[(1)] = cljs.core.first((state_56275[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56403 = state_56275;
state_56275 = G__56403;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__ = function(state_56275){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____1.call(this,state_56275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_56352 = f__32418__auto__();
(statearr_56352[(6)] = c__32417__auto___56353);

return statearr_56352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
