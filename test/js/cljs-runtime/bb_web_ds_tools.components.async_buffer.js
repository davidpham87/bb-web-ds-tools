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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__49881){
var map__49882 = p__49881;
var map__49882__$1 = cljs.core.__destructure_map(map__49882);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49882__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32471__auto___50068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_49970){
var state_val_49972 = (state_49970[(1)]);
if((state_val_49972 === (7))){
var inst_49906 = (state_49970[(7)]);
var inst_49902 = (state_49970[(8)]);
var inst_49900 = (state_49970[(2)]);
var inst_49901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49900,(0),null);
var inst_49902__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49900,(1),null);
var inst_49906__$1 = cljs.core._EQ_;
var inst_49907 = (inst_49906__$1.cljs$core$IFn$_invoke$arity$2 ? inst_49906__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_49902__$1) : inst_49906__$1.call(null,input_chan,inst_49902__$1));
var state_49970__$1 = (function (){var statearr_49975 = state_49970;
(statearr_49975[(9)] = inst_49901);

(statearr_49975[(8)] = inst_49902__$1);

(statearr_49975[(7)] = inst_49906__$1);

return statearr_49975;
})();
if(cljs.core.truth_(inst_49907)){
var statearr_49976_50069 = state_49970__$1;
(statearr_49976_50069[(1)] = (8));

} else {
var statearr_49977_50070 = state_49970__$1;
(statearr_49977_50070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (20))){
var inst_49927 = cljs.core.async.timeout(flush_interval_ms);
var state_49970__$1 = state_49970;
var statearr_49978_50071 = state_49970__$1;
(statearr_49978_50071[(2)] = inst_49927);

(statearr_49978_50071[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (27))){
var state_49970__$1 = state_49970;
var statearr_49979_50072 = state_49970__$1;
(statearr_49979_50072[(2)] = null);

(statearr_49979_50072[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (1))){
var inst_49883 = cljs.core.PersistentVector.EMPTY;
var inst_49884 = inst_49883;
var inst_49885 = null;
var state_49970__$1 = (function (){var statearr_49980 = state_49970;
(statearr_49980[(10)] = inst_49884);

(statearr_49980[(11)] = inst_49885);

return statearr_49980;
})();
var statearr_49981_50073 = state_49970__$1;
(statearr_49981_50073[(2)] = null);

(statearr_49981_50073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (24))){
var inst_49906 = (state_49970[(7)]);
var inst_49885 = (state_49970[(11)]);
var inst_49902 = (state_49970[(8)]);
var inst_49946 = (inst_49906.cljs$core$IFn$_invoke$arity$2 ? inst_49906.cljs$core$IFn$_invoke$arity$2(inst_49885,inst_49902) : inst_49906.call(null,inst_49885,inst_49902));
var state_49970__$1 = state_49970;
if(cljs.core.truth_(inst_49946)){
var statearr_49982_50074 = state_49970__$1;
(statearr_49982_50074[(1)] = (29));

} else {
var statearr_49983_50075 = state_49970__$1;
(statearr_49983_50075[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (4))){
var inst_49893 = (state_49970[(12)]);
var inst_49885 = (state_49970[(11)]);
var inst_49895 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49893,inst_49885);
var state_49970__$1 = state_49970;
var statearr_49986_50076 = state_49970__$1;
(statearr_49986_50076[(2)] = inst_49895);

(statearr_49986_50076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (15))){
var state_49970__$1 = state_49970;
var statearr_49987_50077 = state_49970__$1;
(statearr_49987_50077[(2)] = null);

(statearr_49987_50077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (21))){
var inst_49885 = (state_49970[(11)]);
var state_49970__$1 = state_49970;
var statearr_49988_50078 = state_49970__$1;
(statearr_49988_50078[(2)] = inst_49885);

(statearr_49988_50078[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (31))){
var inst_49962 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
var statearr_49989_50079 = state_49970__$1;
(statearr_49989_50079[(2)] = inst_49962);

(statearr_49989_50079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (32))){
var inst_49884 = (state_49970[(10)]);
var inst_49951 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49884) : on_flush.call(null,inst_49884));
var state_49970__$1 = state_49970;
var statearr_49990_50080 = state_49970__$1;
(statearr_49990_50080[(2)] = inst_49951);

(statearr_49990_50080[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (33))){
var state_49970__$1 = state_49970;
var statearr_49991_50081 = state_49970__$1;
(statearr_49991_50081[(2)] = null);

(statearr_49991_50081[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (13))){
var inst_49933 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
var statearr_49992_50082 = state_49970__$1;
(statearr_49992_50082[(2)] = inst_49933);

(statearr_49992_50082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (22))){
var inst_49919 = (state_49970[(13)]);
var inst_49930 = (state_49970[(2)]);
var inst_49884 = inst_49919;
var inst_49885 = inst_49930;
var state_49970__$1 = (function (){var statearr_49993 = state_49970;
(statearr_49993[(10)] = inst_49884);

(statearr_49993[(11)] = inst_49885);

return statearr_49993;
})();
var statearr_49994_50083 = state_49970__$1;
(statearr_49994_50083[(2)] = null);

(statearr_49994_50083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (29))){
var inst_49884 = (state_49970[(10)]);
var inst_49948 = cljs.core.seq(inst_49884);
var state_49970__$1 = state_49970;
if(inst_49948){
var statearr_49997_50084 = state_49970__$1;
(statearr_49997_50084[(1)] = (32));

} else {
var statearr_49998_50085 = state_49970__$1;
(statearr_49998_50085[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (6))){
var inst_49898 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
return cljs.core.async.ioc_alts_BANG_(state_49970__$1,(7),inst_49898);
} else {
if((state_val_49972 === (28))){
var inst_49942 = (state_49970[(2)]);
var inst_49943 = cljs.core.PersistentVector.EMPTY;
var inst_49884 = inst_49943;
var inst_49885 = null;
var state_49970__$1 = (function (){var statearr_49999 = state_49970;
(statearr_49999[(14)] = inst_49942);

(statearr_49999[(10)] = inst_49884);

(statearr_49999[(11)] = inst_49885);

return statearr_49999;
})();
var statearr_50000_50086 = state_49970__$1;
(statearr_50000_50086[(2)] = null);

(statearr_50000_50086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (25))){
var inst_49964 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
var statearr_50001_50087 = state_49970__$1;
(statearr_50001_50087[(2)] = inst_49964);

(statearr_50001_50087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (34))){
var inst_49954 = (state_49970[(2)]);
var inst_49955 = cljs.core.PersistentVector.EMPTY;
var inst_49884 = inst_49955;
var inst_49885 = null;
var state_49970__$1 = (function (){var statearr_50002 = state_49970;
(statearr_50002[(15)] = inst_49954);

(statearr_50002[(10)] = inst_49884);

(statearr_50002[(11)] = inst_49885);

return statearr_50002;
})();
var statearr_50003_50088 = state_49970__$1;
(statearr_50003_50088[(2)] = null);

(statearr_50003_50088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (17))){
var inst_49885 = (state_49970[(11)]);
var inst_49922 = (inst_49885 == null);
var state_49970__$1 = state_49970;
var statearr_50007_50089 = state_49970__$1;
(statearr_50007_50089[(2)] = inst_49922);

(statearr_50007_50089[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (3))){
var inst_49968 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49970__$1,inst_49968);
} else {
if((state_val_49972 === (12))){
var inst_49884 = (state_49970[(10)]);
var inst_49901 = (state_49970[(9)]);
var inst_49920 = (state_49970[(16)]);
var inst_49919 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_49884,inst_49901);
var inst_49920__$1 = flush_interval_ms;
var state_49970__$1 = (function (){var statearr_50011 = state_49970;
(statearr_50011[(13)] = inst_49919);

(statearr_50011[(16)] = inst_49920__$1);

return statearr_50011;
})();
if(cljs.core.truth_(inst_49920__$1)){
var statearr_50012_50090 = state_49970__$1;
(statearr_50012_50090[(1)] = (17));

} else {
var statearr_50013_50091 = state_49970__$1;
(statearr_50013_50091[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (2))){
var inst_49885 = (state_49970[(11)]);
var inst_49891 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49892 = [input_chan,flush_ch];
var inst_49893 = (new cljs.core.PersistentVector(null,2,(5),inst_49891,inst_49892,null));
var state_49970__$1 = (function (){var statearr_50014 = state_49970;
(statearr_50014[(12)] = inst_49893);

return statearr_50014;
})();
if(cljs.core.truth_(inst_49885)){
var statearr_50015_50092 = state_49970__$1;
(statearr_50015_50092[(1)] = (4));

} else {
var statearr_50016_50093 = state_49970__$1;
(statearr_50016_50093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (23))){
var inst_49884 = (state_49970[(10)]);
var inst_49937 = cljs.core.seq(inst_49884);
var state_49970__$1 = state_49970;
if(inst_49937){
var statearr_50021_50094 = state_49970__$1;
(statearr_50021_50094[(1)] = (26));

} else {
var statearr_50022_50095 = state_49970__$1;
(statearr_50022_50095[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (19))){
var inst_49925 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
if(cljs.core.truth_(inst_49925)){
var statearr_50024_50096 = state_49970__$1;
(statearr_50024_50096[(1)] = (20));

} else {
var statearr_50025_50097 = state_49970__$1;
(statearr_50025_50097[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (11))){
var inst_49884 = (state_49970[(10)]);
var inst_49911 = cljs.core.seq(inst_49884);
var state_49970__$1 = state_49970;
if(inst_49911){
var statearr_50026_50098 = state_49970__$1;
(statearr_50026_50098[(1)] = (14));

} else {
var statearr_50027_50099 = state_49970__$1;
(statearr_50027_50099[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (9))){
var inst_49906 = (state_49970[(7)]);
var inst_49902 = (state_49970[(8)]);
var inst_49935 = (inst_49906.cljs$core$IFn$_invoke$arity$2 ? inst_49906.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_49902) : inst_49906.call(null,flush_ch,inst_49902));
var state_49970__$1 = state_49970;
if(cljs.core.truth_(inst_49935)){
var statearr_50032_50100 = state_49970__$1;
(statearr_50032_50100[(1)] = (23));

} else {
var statearr_50033_50101 = state_49970__$1;
(statearr_50033_50101[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (5))){
var inst_49893 = (state_49970[(12)]);
var state_49970__$1 = state_49970;
var statearr_50034_50102 = state_49970__$1;
(statearr_50034_50102[(2)] = inst_49893);

(statearr_50034_50102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (14))){
var inst_49884 = (state_49970[(10)]);
var inst_49914 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49884) : on_flush.call(null,inst_49884));
var state_49970__$1 = state_49970;
var statearr_50039_50103 = state_49970__$1;
(statearr_50039_50103[(2)] = inst_49914);

(statearr_50039_50103[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (26))){
var inst_49884 = (state_49970[(10)]);
var inst_49939 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_49884) : on_flush.call(null,inst_49884));
var state_49970__$1 = state_49970;
var statearr_50041_50104 = state_49970__$1;
(statearr_50041_50104[(2)] = inst_49939);

(statearr_50041_50104[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (16))){
var inst_49917 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
var statearr_50045_50112 = state_49970__$1;
(statearr_50045_50112[(2)] = inst_49917);

(statearr_50045_50112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (30))){
var inst_49902 = (state_49970[(8)]);
var inst_49958 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49902)].join('');
var inst_49959 = (new Error(inst_49958));
var inst_49960 = (function(){throw inst_49959})();
var state_49970__$1 = state_49970;
var statearr_50046_50117 = state_49970__$1;
(statearr_50046_50117[(2)] = inst_49960);

(statearr_50046_50117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (10))){
var inst_49966 = (state_49970[(2)]);
var state_49970__$1 = state_49970;
var statearr_50048_50120 = state_49970__$1;
(statearr_50048_50120[(2)] = inst_49966);

(statearr_50048_50120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (18))){
var inst_49920 = (state_49970[(16)]);
var state_49970__$1 = state_49970;
var statearr_50055_50121 = state_49970__$1;
(statearr_50055_50121[(2)] = inst_49920);

(statearr_50055_50121[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49972 === (8))){
var inst_49901 = (state_49970[(9)]);
var inst_49909 = (inst_49901 == null);
var state_49970__$1 = state_49970;
if(cljs.core.truth_(inst_49909)){
var statearr_50056_50122 = state_49970__$1;
(statearr_50056_50122[(1)] = (11));

} else {
var statearr_50058_50123 = state_49970__$1;
(statearr_50058_50123[(1)] = (12));

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
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto__ = null;
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto____0 = (function (){
var statearr_50059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50059[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto__);

(statearr_50059[(1)] = (1));

return statearr_50059;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto____1 = (function (state_49970){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_49970);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e50060){var ex__32394__auto__ = e50060;
var statearr_50061_50134 = state_49970;
(statearr_50061_50134[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_49970[(4)]))){
var statearr_50062_50135 = state_49970;
(statearr_50062_50135[(1)] = cljs.core.first((state_49970[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50136 = state_49970;
state_49970 = G__50136;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto__ = function(state_49970){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto____1.call(this,state_49970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_50063 = f__32472__auto__();
(statearr_50063[(6)] = c__32471__auto___50068);

return statearr_50063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
