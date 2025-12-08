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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__56188){
var map__56189 = p__56188;
var map__56189__$1 = cljs.core.__destructure_map(map__56189);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56189__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56189__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56189__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32417__auto___56353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_56276){
var state_val_56277 = (state_56276[(1)]);
if((state_val_56277 === (7))){
var inst_56213 = (state_56276[(7)]);
var inst_56209 = (state_56276[(8)]);
var inst_56207 = (state_56276[(2)]);
var inst_56208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56207,(0),null);
var inst_56209__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56207,(1),null);
var inst_56213__$1 = cljs.core._EQ_;
var inst_56214 = (inst_56213__$1.cljs$core$IFn$_invoke$arity$2 ? inst_56213__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_56209__$1) : inst_56213__$1.call(null,input_chan,inst_56209__$1));
var state_56276__$1 = (function (){var statearr_56278 = state_56276;
(statearr_56278[(9)] = inst_56208);

(statearr_56278[(8)] = inst_56209__$1);

(statearr_56278[(7)] = inst_56213__$1);

return statearr_56278;
})();
if(cljs.core.truth_(inst_56214)){
var statearr_56279_56354 = state_56276__$1;
(statearr_56279_56354[(1)] = (8));

} else {
var statearr_56291_56355 = state_56276__$1;
(statearr_56291_56355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (20))){
var inst_56233 = cljs.core.async.timeout(flush_interval_ms);
var state_56276__$1 = state_56276;
var statearr_56292_56356 = state_56276__$1;
(statearr_56292_56356[(2)] = inst_56233);

(statearr_56292_56356[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (27))){
var state_56276__$1 = state_56276;
var statearr_56293_56363 = state_56276__$1;
(statearr_56293_56363[(2)] = null);

(statearr_56293_56363[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (1))){
var inst_56190 = cljs.core.PersistentVector.EMPTY;
var inst_56191 = inst_56190;
var inst_56192 = null;
var state_56276__$1 = (function (){var statearr_56294 = state_56276;
(statearr_56294[(10)] = inst_56191);

(statearr_56294[(11)] = inst_56192);

return statearr_56294;
})();
var statearr_56295_56364 = state_56276__$1;
(statearr_56295_56364[(2)] = null);

(statearr_56295_56364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (24))){
var inst_56213 = (state_56276[(7)]);
var inst_56192 = (state_56276[(11)]);
var inst_56209 = (state_56276[(8)]);
var inst_56252 = (inst_56213.cljs$core$IFn$_invoke$arity$2 ? inst_56213.cljs$core$IFn$_invoke$arity$2(inst_56192,inst_56209) : inst_56213.call(null,inst_56192,inst_56209));
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56252)){
var statearr_56296_56365 = state_56276__$1;
(statearr_56296_56365[(1)] = (29));

} else {
var statearr_56297_56366 = state_56276__$1;
(statearr_56297_56366[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (4))){
var inst_56200 = (state_56276[(12)]);
var inst_56192 = (state_56276[(11)]);
var inst_56202 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56200,inst_56192);
var state_56276__$1 = state_56276;
var statearr_56298_56367 = state_56276__$1;
(statearr_56298_56367[(2)] = inst_56202);

(statearr_56298_56367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (15))){
var state_56276__$1 = state_56276;
var statearr_56299_56368 = state_56276__$1;
(statearr_56299_56368[(2)] = null);

(statearr_56299_56368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (21))){
var inst_56192 = (state_56276[(11)]);
var state_56276__$1 = state_56276;
var statearr_56300_56369 = state_56276__$1;
(statearr_56300_56369[(2)] = inst_56192);

(statearr_56300_56369[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (31))){
var inst_56268 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56306_56370 = state_56276__$1;
(statearr_56306_56370[(2)] = inst_56268);

(statearr_56306_56370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (32))){
var inst_56191 = (state_56276[(10)]);
var inst_56257 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56191) : on_flush.call(null,inst_56191));
var state_56276__$1 = state_56276;
var statearr_56307_56371 = state_56276__$1;
(statearr_56307_56371[(2)] = inst_56257);

(statearr_56307_56371[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (33))){
var state_56276__$1 = state_56276;
var statearr_56308_56372 = state_56276__$1;
(statearr_56308_56372[(2)] = null);

(statearr_56308_56372[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (13))){
var inst_56239 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56309_56373 = state_56276__$1;
(statearr_56309_56373[(2)] = inst_56239);

(statearr_56309_56373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (22))){
var inst_56225 = (state_56276[(13)]);
var inst_56236 = (state_56276[(2)]);
var inst_56191 = inst_56225;
var inst_56192 = inst_56236;
var state_56276__$1 = (function (){var statearr_56310 = state_56276;
(statearr_56310[(10)] = inst_56191);

(statearr_56310[(11)] = inst_56192);

return statearr_56310;
})();
var statearr_56311_56374 = state_56276__$1;
(statearr_56311_56374[(2)] = null);

(statearr_56311_56374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (29))){
var inst_56191 = (state_56276[(10)]);
var inst_56254 = cljs.core.seq(inst_56191);
var state_56276__$1 = state_56276;
if(inst_56254){
var statearr_56312_56375 = state_56276__$1;
(statearr_56312_56375[(1)] = (32));

} else {
var statearr_56313_56376 = state_56276__$1;
(statearr_56313_56376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (6))){
var inst_56205 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
return cljs.core.async.ioc_alts_BANG_(state_56276__$1,(7),inst_56205);
} else {
if((state_val_56277 === (28))){
var inst_56248 = (state_56276[(2)]);
var inst_56249 = cljs.core.PersistentVector.EMPTY;
var inst_56191 = inst_56249;
var inst_56192 = null;
var state_56276__$1 = (function (){var statearr_56314 = state_56276;
(statearr_56314[(14)] = inst_56248);

(statearr_56314[(10)] = inst_56191);

(statearr_56314[(11)] = inst_56192);

return statearr_56314;
})();
var statearr_56319_56377 = state_56276__$1;
(statearr_56319_56377[(2)] = null);

(statearr_56319_56377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (25))){
var inst_56270 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56320_56378 = state_56276__$1;
(statearr_56320_56378[(2)] = inst_56270);

(statearr_56320_56378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (34))){
var inst_56260 = (state_56276[(2)]);
var inst_56261 = cljs.core.PersistentVector.EMPTY;
var inst_56191 = inst_56261;
var inst_56192 = null;
var state_56276__$1 = (function (){var statearr_56321 = state_56276;
(statearr_56321[(15)] = inst_56260);

(statearr_56321[(10)] = inst_56191);

(statearr_56321[(11)] = inst_56192);

return statearr_56321;
})();
var statearr_56322_56379 = state_56276__$1;
(statearr_56322_56379[(2)] = null);

(statearr_56322_56379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (17))){
var inst_56192 = (state_56276[(11)]);
var inst_56228 = (inst_56192 == null);
var state_56276__$1 = state_56276;
var statearr_56323_56380 = state_56276__$1;
(statearr_56323_56380[(2)] = inst_56228);

(statearr_56323_56380[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (3))){
var inst_56274 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56276__$1,inst_56274);
} else {
if((state_val_56277 === (12))){
var inst_56191 = (state_56276[(10)]);
var inst_56208 = (state_56276[(9)]);
var inst_56226 = (state_56276[(16)]);
var inst_56225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56191,inst_56208);
var inst_56226__$1 = flush_interval_ms;
var state_56276__$1 = (function (){var statearr_56324 = state_56276;
(statearr_56324[(13)] = inst_56225);

(statearr_56324[(16)] = inst_56226__$1);

return statearr_56324;
})();
if(cljs.core.truth_(inst_56226__$1)){
var statearr_56325_56381 = state_56276__$1;
(statearr_56325_56381[(1)] = (17));

} else {
var statearr_56326_56382 = state_56276__$1;
(statearr_56326_56382[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (2))){
var inst_56192 = (state_56276[(11)]);
var inst_56198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56199 = [input_chan,flush_ch];
var inst_56200 = (new cljs.core.PersistentVector(null,2,(5),inst_56198,inst_56199,null));
var state_56276__$1 = (function (){var statearr_56328 = state_56276;
(statearr_56328[(12)] = inst_56200);

return statearr_56328;
})();
if(cljs.core.truth_(inst_56192)){
var statearr_56329_56384 = state_56276__$1;
(statearr_56329_56384[(1)] = (4));

} else {
var statearr_56330_56385 = state_56276__$1;
(statearr_56330_56385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (23))){
var inst_56191 = (state_56276[(10)]);
var inst_56243 = cljs.core.seq(inst_56191);
var state_56276__$1 = state_56276;
if(inst_56243){
var statearr_56331_56386 = state_56276__$1;
(statearr_56331_56386[(1)] = (26));

} else {
var statearr_56332_56387 = state_56276__$1;
(statearr_56332_56387[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (19))){
var inst_56231 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56231)){
var statearr_56333_56388 = state_56276__$1;
(statearr_56333_56388[(1)] = (20));

} else {
var statearr_56334_56389 = state_56276__$1;
(statearr_56334_56389[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (11))){
var inst_56191 = (state_56276[(10)]);
var inst_56218 = cljs.core.seq(inst_56191);
var state_56276__$1 = state_56276;
if(inst_56218){
var statearr_56335_56390 = state_56276__$1;
(statearr_56335_56390[(1)] = (14));

} else {
var statearr_56336_56391 = state_56276__$1;
(statearr_56336_56391[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (9))){
var inst_56213 = (state_56276[(7)]);
var inst_56209 = (state_56276[(8)]);
var inst_56241 = (inst_56213.cljs$core$IFn$_invoke$arity$2 ? inst_56213.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_56209) : inst_56213.call(null,flush_ch,inst_56209));
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56241)){
var statearr_56337_56392 = state_56276__$1;
(statearr_56337_56392[(1)] = (23));

} else {
var statearr_56338_56393 = state_56276__$1;
(statearr_56338_56393[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (5))){
var inst_56200 = (state_56276[(12)]);
var state_56276__$1 = state_56276;
var statearr_56339_56394 = state_56276__$1;
(statearr_56339_56394[(2)] = inst_56200);

(statearr_56339_56394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (14))){
var inst_56191 = (state_56276[(10)]);
var inst_56220 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56191) : on_flush.call(null,inst_56191));
var state_56276__$1 = state_56276;
var statearr_56340_56395 = state_56276__$1;
(statearr_56340_56395[(2)] = inst_56220);

(statearr_56340_56395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (26))){
var inst_56191 = (state_56276[(10)]);
var inst_56245 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_56191) : on_flush.call(null,inst_56191));
var state_56276__$1 = state_56276;
var statearr_56341_56396 = state_56276__$1;
(statearr_56341_56396[(2)] = inst_56245);

(statearr_56341_56396[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (16))){
var inst_56223 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56342_56397 = state_56276__$1;
(statearr_56342_56397[(2)] = inst_56223);

(statearr_56342_56397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (30))){
var inst_56209 = (state_56276[(8)]);
var inst_56264 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56209)].join('');
var inst_56265 = (new Error(inst_56264));
var inst_56266 = (function(){throw inst_56265})();
var state_56276__$1 = state_56276;
var statearr_56343_56398 = state_56276__$1;
(statearr_56343_56398[(2)] = inst_56266);

(statearr_56343_56398[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (10))){
var inst_56272 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56344_56399 = state_56276__$1;
(statearr_56344_56399[(2)] = inst_56272);

(statearr_56344_56399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (18))){
var inst_56226 = (state_56276[(16)]);
var state_56276__$1 = state_56276;
var statearr_56345_56400 = state_56276__$1;
(statearr_56345_56400[(2)] = inst_56226);

(statearr_56345_56400[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (8))){
var inst_56208 = (state_56276[(9)]);
var inst_56216 = (inst_56208 == null);
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56216)){
var statearr_56346_56401 = state_56276__$1;
(statearr_56346_56401[(1)] = (11));

} else {
var statearr_56347_56402 = state_56276__$1;
(statearr_56347_56402[(1)] = (12));

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
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____1 = (function (state_56276){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_56276);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e56349){var ex__32350__auto__ = e56349;
var statearr_56350_56407 = state_56276;
(statearr_56350_56407[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_56276[(4)]))){
var statearr_56351_56408 = state_56276;
(statearr_56351_56408[(1)] = cljs.core.first((state_56276[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56409 = state_56276;
state_56276 = G__56409;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto__ = function(state_56276){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32347__auto____1.call(this,state_56276);
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
