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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__55895){
var map__55896 = p__55895;
var map__55896__$1 = cljs.core.__destructure_map(map__55896);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55896__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55896__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55896__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_55983){
var state_val_55984 = (state_55983[(1)]);
if((state_val_55984 === (7))){
var inst_55920 = (state_55983[(7)]);
var inst_55916 = (state_55983[(8)]);
var inst_55914 = (state_55983[(2)]);
var inst_55915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55914,(0),null);
var inst_55916__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55914,(1),null);
var inst_55920__$1 = cljs.core._EQ_;
var inst_55921 = (inst_55920__$1.cljs$core$IFn$_invoke$arity$2 ? inst_55920__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_55916__$1) : inst_55920__$1.call(null,input_chan,inst_55916__$1));
var state_55983__$1 = (function (){var statearr_55988 = state_55983;
(statearr_55988[(9)] = inst_55915);

(statearr_55988[(8)] = inst_55916__$1);

(statearr_55988[(7)] = inst_55920__$1);

return statearr_55988;
})();
if(cljs.core.truth_(inst_55921)){
var statearr_55989_56069 = state_55983__$1;
(statearr_55989_56069[(1)] = (8));

} else {
var statearr_55990_56070 = state_55983__$1;
(statearr_55990_56070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (20))){
var inst_55941 = cljs.core.async.timeout(flush_interval_ms);
var state_55983__$1 = state_55983;
var statearr_55995_56071 = state_55983__$1;
(statearr_55995_56071[(2)] = inst_55941);

(statearr_55995_56071[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (27))){
var state_55983__$1 = state_55983;
var statearr_55996_56072 = state_55983__$1;
(statearr_55996_56072[(2)] = null);

(statearr_55996_56072[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (1))){
var inst_55897 = cljs.core.PersistentVector.EMPTY;
var inst_55898 = inst_55897;
var inst_55899 = null;
var state_55983__$1 = (function (){var statearr_56000 = state_55983;
(statearr_56000[(10)] = inst_55898);

(statearr_56000[(11)] = inst_55899);

return statearr_56000;
})();
var statearr_56001_56074 = state_55983__$1;
(statearr_56001_56074[(2)] = null);

(statearr_56001_56074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (24))){
var inst_55920 = (state_55983[(7)]);
var inst_55899 = (state_55983[(11)]);
var inst_55916 = (state_55983[(8)]);
var inst_55960 = (inst_55920.cljs$core$IFn$_invoke$arity$2 ? inst_55920.cljs$core$IFn$_invoke$arity$2(inst_55899,inst_55916) : inst_55920.call(null,inst_55899,inst_55916));
var state_55983__$1 = state_55983;
if(cljs.core.truth_(inst_55960)){
var statearr_56002_56075 = state_55983__$1;
(statearr_56002_56075[(1)] = (29));

} else {
var statearr_56003_56076 = state_55983__$1;
(statearr_56003_56076[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (4))){
var inst_55907 = (state_55983[(12)]);
var inst_55899 = (state_55983[(11)]);
var inst_55909 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55907,inst_55899);
var state_55983__$1 = state_55983;
var statearr_56007_56077 = state_55983__$1;
(statearr_56007_56077[(2)] = inst_55909);

(statearr_56007_56077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (15))){
var state_55983__$1 = state_55983;
var statearr_56008_56078 = state_55983__$1;
(statearr_56008_56078[(2)] = null);

(statearr_56008_56078[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (21))){
var inst_55899 = (state_55983[(11)]);
var state_55983__$1 = state_55983;
var statearr_56009_56079 = state_55983__$1;
(statearr_56009_56079[(2)] = inst_55899);

(statearr_56009_56079[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (31))){
var inst_55975 = (state_55983[(2)]);
var state_55983__$1 = state_55983;
var statearr_56010_56080 = state_55983__$1;
(statearr_56010_56080[(2)] = inst_55975);

(statearr_56010_56080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (32))){
var inst_55898 = (state_55983[(10)]);
var inst_55964 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55898) : on_flush.call(null,inst_55898));
var state_55983__$1 = state_55983;
var statearr_56011_56081 = state_55983__$1;
(statearr_56011_56081[(2)] = inst_55964);

(statearr_56011_56081[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (33))){
var state_55983__$1 = state_55983;
var statearr_56012_56082 = state_55983__$1;
(statearr_56012_56082[(2)] = null);

(statearr_56012_56082[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (13))){
var inst_55947 = (state_55983[(2)]);
var state_55983__$1 = state_55983;
var statearr_56013_56083 = state_55983__$1;
(statearr_56013_56083[(2)] = inst_55947);

(statearr_56013_56083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (22))){
var inst_55932 = (state_55983[(13)]);
var inst_55944 = (state_55983[(2)]);
var inst_55898 = inst_55932;
var inst_55899 = inst_55944;
var state_55983__$1 = (function (){var statearr_56014 = state_55983;
(statearr_56014[(10)] = inst_55898);

(statearr_56014[(11)] = inst_55899);

return statearr_56014;
})();
var statearr_56015_56084 = state_55983__$1;
(statearr_56015_56084[(2)] = null);

(statearr_56015_56084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (29))){
var inst_55898 = (state_55983[(10)]);
var inst_55962 = cljs.core.seq(inst_55898);
var state_55983__$1 = state_55983;
if(inst_55962){
var statearr_56016_56085 = state_55983__$1;
(statearr_56016_56085[(1)] = (32));

} else {
var statearr_56017_56086 = state_55983__$1;
(statearr_56017_56086[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (6))){
var inst_55912 = (state_55983[(2)]);
var state_55983__$1 = state_55983;
return cljs.core.async.ioc_alts_BANG_(state_55983__$1,(7),inst_55912);
} else {
if((state_val_55984 === (28))){
var inst_55956 = (state_55983[(2)]);
var inst_55957 = cljs.core.PersistentVector.EMPTY;
var inst_55898 = inst_55957;
var inst_55899 = null;
var state_55983__$1 = (function (){var statearr_56019 = state_55983;
(statearr_56019[(14)] = inst_55956);

(statearr_56019[(10)] = inst_55898);

(statearr_56019[(11)] = inst_55899);

return statearr_56019;
})();
var statearr_56020_56087 = state_55983__$1;
(statearr_56020_56087[(2)] = null);

(statearr_56020_56087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (25))){
var inst_55977 = (state_55983[(2)]);
var state_55983__$1 = state_55983;
var statearr_56021_56088 = state_55983__$1;
(statearr_56021_56088[(2)] = inst_55977);

(statearr_56021_56088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (34))){
var inst_55967 = (state_55983[(2)]);
var inst_55968 = cljs.core.PersistentVector.EMPTY;
var inst_55898 = inst_55968;
var inst_55899 = null;
var state_55983__$1 = (function (){var statearr_56022 = state_55983;
(statearr_56022[(15)] = inst_55967);

(statearr_56022[(10)] = inst_55898);

(statearr_56022[(11)] = inst_55899);

return statearr_56022;
})();
var statearr_56023_56089 = state_55983__$1;
(statearr_56023_56089[(2)] = null);

(statearr_56023_56089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (17))){
var inst_55899 = (state_55983[(11)]);
var inst_55935 = (inst_55899 == null);
var state_55983__$1 = state_55983;
var statearr_56024_56090 = state_55983__$1;
(statearr_56024_56090[(2)] = inst_55935);

(statearr_56024_56090[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (3))){
var inst_55981 = (state_55983[(2)]);
var state_55983__$1 = state_55983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55983__$1,inst_55981);
} else {
if((state_val_55984 === (12))){
var inst_55898 = (state_55983[(10)]);
var inst_55915 = (state_55983[(9)]);
var inst_55933 = (state_55983[(16)]);
var inst_55932 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55898,inst_55915);
var inst_55933__$1 = flush_interval_ms;
var state_55983__$1 = (function (){var statearr_56025 = state_55983;
(statearr_56025[(13)] = inst_55932);

(statearr_56025[(16)] = inst_55933__$1);

return statearr_56025;
})();
if(cljs.core.truth_(inst_55933__$1)){
var statearr_56026_56091 = state_55983__$1;
(statearr_56026_56091[(1)] = (17));

} else {
var statearr_56027_56092 = state_55983__$1;
(statearr_56027_56092[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (2))){
var inst_55899 = (state_55983[(11)]);
var inst_55905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55906 = [input_chan,flush_ch];
var inst_55907 = (new cljs.core.PersistentVector(null,2,(5),inst_55905,inst_55906,null));
var state_55983__$1 = (function (){var statearr_56028 = state_55983;
(statearr_56028[(12)] = inst_55907);

return statearr_56028;
})();
if(cljs.core.truth_(inst_55899)){
var statearr_56029_56093 = state_55983__$1;
(statearr_56029_56093[(1)] = (4));

} else {
var statearr_56030_56094 = state_55983__$1;
(statearr_56030_56094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (23))){
var inst_55898 = (state_55983[(10)]);
var inst_55951 = cljs.core.seq(inst_55898);
var state_55983__$1 = state_55983;
if(inst_55951){
var statearr_56031_56095 = state_55983__$1;
(statearr_56031_56095[(1)] = (26));

} else {
var statearr_56032_56096 = state_55983__$1;
(statearr_56032_56096[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (19))){
var inst_55939 = (state_55983[(2)]);
var state_55983__$1 = state_55983;
if(cljs.core.truth_(inst_55939)){
var statearr_56033_56097 = state_55983__$1;
(statearr_56033_56097[(1)] = (20));

} else {
var statearr_56034_56098 = state_55983__$1;
(statearr_56034_56098[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (11))){
var inst_55898 = (state_55983[(10)]);
var inst_55925 = cljs.core.seq(inst_55898);
var state_55983__$1 = state_55983;
if(inst_55925){
var statearr_56035_56099 = state_55983__$1;
(statearr_56035_56099[(1)] = (14));

} else {
var statearr_56036_56100 = state_55983__$1;
(statearr_56036_56100[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (9))){
var inst_55920 = (state_55983[(7)]);
var inst_55916 = (state_55983[(8)]);
var inst_55949 = (inst_55920.cljs$core$IFn$_invoke$arity$2 ? inst_55920.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_55916) : inst_55920.call(null,flush_ch,inst_55916));
var state_55983__$1 = state_55983;
if(cljs.core.truth_(inst_55949)){
var statearr_56037_56101 = state_55983__$1;
(statearr_56037_56101[(1)] = (23));

} else {
var statearr_56038_56102 = state_55983__$1;
(statearr_56038_56102[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (5))){
var inst_55907 = (state_55983[(12)]);
var state_55983__$1 = state_55983;
var statearr_56039_56103 = state_55983__$1;
(statearr_56039_56103[(2)] = inst_55907);

(statearr_56039_56103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (14))){
var inst_55898 = (state_55983[(10)]);
var inst_55927 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55898) : on_flush.call(null,inst_55898));
var state_55983__$1 = state_55983;
var statearr_56040_56104 = state_55983__$1;
(statearr_56040_56104[(2)] = inst_55927);

(statearr_56040_56104[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (26))){
var inst_55898 = (state_55983[(10)]);
var inst_55953 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55898) : on_flush.call(null,inst_55898));
var state_55983__$1 = state_55983;
var statearr_56041_56105 = state_55983__$1;
(statearr_56041_56105[(2)] = inst_55953);

(statearr_56041_56105[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (16))){
var inst_55930 = (state_55983[(2)]);
var state_55983__$1 = state_55983;
var statearr_56042_56106 = state_55983__$1;
(statearr_56042_56106[(2)] = inst_55930);

(statearr_56042_56106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (30))){
var inst_55916 = (state_55983[(8)]);
var inst_55971 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55916)].join('');
var inst_55972 = (new Error(inst_55971));
var inst_55973 = (function(){throw inst_55972})();
var state_55983__$1 = state_55983;
var statearr_56043_56107 = state_55983__$1;
(statearr_56043_56107[(2)] = inst_55973);

(statearr_56043_56107[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (10))){
var inst_55979 = (state_55983[(2)]);
var state_55983__$1 = state_55983;
var statearr_56044_56108 = state_55983__$1;
(statearr_56044_56108[(2)] = inst_55979);

(statearr_56044_56108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (18))){
var inst_55933 = (state_55983[(16)]);
var state_55983__$1 = state_55983;
var statearr_56046_56109 = state_55983__$1;
(statearr_56046_56109[(2)] = inst_55933);

(statearr_56046_56109[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55984 === (8))){
var inst_55915 = (state_55983[(9)]);
var inst_55923 = (inst_55915 == null);
var state_55983__$1 = state_55983;
if(cljs.core.truth_(inst_55923)){
var statearr_56047_56110 = state_55983__$1;
(statearr_56047_56110[(1)] = (11));

} else {
var statearr_56048_56111 = state_55983__$1;
(statearr_56048_56111[(1)] = (12));

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
var statearr_56050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56050[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56050[(1)] = (1));

return statearr_56050;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_55983){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_55983);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56055){var ex__32294__auto__ = e56055;
var statearr_56056_56112 = state_55983;
(statearr_56056_56112[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_55983[(4)]))){
var statearr_56057_56113 = state_55983;
(statearr_56057_56113[(1)] = cljs.core.first((state_55983[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56114 = state_55983;
state_55983 = G__56114;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_55983){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_55983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56062 = f__32362__auto__();
(statearr_56062[(6)] = c__32361__auto___56068);

return statearr_56062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
