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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__55909){
var map__55910 = p__55909;
var map__55910__$1 = cljs.core.__destructure_map(map__55910);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55910__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55910__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55910__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_55996){
var state_val_55997 = (state_55996[(1)]);
if((state_val_55997 === (7))){
var inst_55934 = (state_55996[(7)]);
var inst_55930 = (state_55996[(8)]);
var inst_55928 = (state_55996[(2)]);
var inst_55929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55928,(0),null);
var inst_55930__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55928,(1),null);
var inst_55934__$1 = cljs.core._EQ_;
var inst_55935 = (inst_55934__$1.cljs$core$IFn$_invoke$arity$2 ? inst_55934__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_55930__$1) : inst_55934__$1.call(null,input_chan,inst_55930__$1));
var state_55996__$1 = (function (){var statearr_55999 = state_55996;
(statearr_55999[(9)] = inst_55929);

(statearr_55999[(8)] = inst_55930__$1);

(statearr_55999[(7)] = inst_55934__$1);

return statearr_55999;
})();
if(cljs.core.truth_(inst_55935)){
var statearr_56000_56075 = state_55996__$1;
(statearr_56000_56075[(1)] = (8));

} else {
var statearr_56001_56076 = state_55996__$1;
(statearr_56001_56076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (20))){
var inst_55954 = cljs.core.async.timeout(flush_interval_ms);
var state_55996__$1 = state_55996;
var statearr_56002_56077 = state_55996__$1;
(statearr_56002_56077[(2)] = inst_55954);

(statearr_56002_56077[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (27))){
var state_55996__$1 = state_55996;
var statearr_56003_56078 = state_55996__$1;
(statearr_56003_56078[(2)] = null);

(statearr_56003_56078[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (1))){
var inst_55911 = cljs.core.PersistentVector.EMPTY;
var inst_55912 = inst_55911;
var inst_55913 = null;
var state_55996__$1 = (function (){var statearr_56004 = state_55996;
(statearr_56004[(10)] = inst_55912);

(statearr_56004[(11)] = inst_55913);

return statearr_56004;
})();
var statearr_56005_56079 = state_55996__$1;
(statearr_56005_56079[(2)] = null);

(statearr_56005_56079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (24))){
var inst_55934 = (state_55996[(7)]);
var inst_55913 = (state_55996[(11)]);
var inst_55930 = (state_55996[(8)]);
var inst_55973 = (inst_55934.cljs$core$IFn$_invoke$arity$2 ? inst_55934.cljs$core$IFn$_invoke$arity$2(inst_55913,inst_55930) : inst_55934.call(null,inst_55913,inst_55930));
var state_55996__$1 = state_55996;
if(cljs.core.truth_(inst_55973)){
var statearr_56006_56080 = state_55996__$1;
(statearr_56006_56080[(1)] = (29));

} else {
var statearr_56007_56081 = state_55996__$1;
(statearr_56007_56081[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (4))){
var inst_55921 = (state_55996[(12)]);
var inst_55913 = (state_55996[(11)]);
var inst_55923 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55921,inst_55913);
var state_55996__$1 = state_55996;
var statearr_56008_56082 = state_55996__$1;
(statearr_56008_56082[(2)] = inst_55923);

(statearr_56008_56082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (15))){
var state_55996__$1 = state_55996;
var statearr_56009_56083 = state_55996__$1;
(statearr_56009_56083[(2)] = null);

(statearr_56009_56083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (21))){
var inst_55913 = (state_55996[(11)]);
var state_55996__$1 = state_55996;
var statearr_56010_56084 = state_55996__$1;
(statearr_56010_56084[(2)] = inst_55913);

(statearr_56010_56084[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (31))){
var inst_55988 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
var statearr_56011_56085 = state_55996__$1;
(statearr_56011_56085[(2)] = inst_55988);

(statearr_56011_56085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (32))){
var inst_55912 = (state_55996[(10)]);
var inst_55977 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55912) : on_flush.call(null,inst_55912));
var state_55996__$1 = state_55996;
var statearr_56013_56086 = state_55996__$1;
(statearr_56013_56086[(2)] = inst_55977);

(statearr_56013_56086[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (33))){
var state_55996__$1 = state_55996;
var statearr_56014_56087 = state_55996__$1;
(statearr_56014_56087[(2)] = null);

(statearr_56014_56087[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (13))){
var inst_55960 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
var statearr_56025_56088 = state_55996__$1;
(statearr_56025_56088[(2)] = inst_55960);

(statearr_56025_56088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (22))){
var inst_55946 = (state_55996[(13)]);
var inst_55957 = (state_55996[(2)]);
var inst_55912 = inst_55946;
var inst_55913 = inst_55957;
var state_55996__$1 = (function (){var statearr_56026 = state_55996;
(statearr_56026[(10)] = inst_55912);

(statearr_56026[(11)] = inst_55913);

return statearr_56026;
})();
var statearr_56027_56089 = state_55996__$1;
(statearr_56027_56089[(2)] = null);

(statearr_56027_56089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (29))){
var inst_55912 = (state_55996[(10)]);
var inst_55975 = cljs.core.seq(inst_55912);
var state_55996__$1 = state_55996;
if(inst_55975){
var statearr_56028_56090 = state_55996__$1;
(statearr_56028_56090[(1)] = (32));

} else {
var statearr_56029_56091 = state_55996__$1;
(statearr_56029_56091[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (6))){
var inst_55926 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
return cljs.core.async.ioc_alts_BANG_(state_55996__$1,(7),inst_55926);
} else {
if((state_val_55997 === (28))){
var inst_55969 = (state_55996[(2)]);
var inst_55970 = cljs.core.PersistentVector.EMPTY;
var inst_55912 = inst_55970;
var inst_55913 = null;
var state_55996__$1 = (function (){var statearr_56035 = state_55996;
(statearr_56035[(14)] = inst_55969);

(statearr_56035[(10)] = inst_55912);

(statearr_56035[(11)] = inst_55913);

return statearr_56035;
})();
var statearr_56036_56092 = state_55996__$1;
(statearr_56036_56092[(2)] = null);

(statearr_56036_56092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (25))){
var inst_55990 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
var statearr_56037_56093 = state_55996__$1;
(statearr_56037_56093[(2)] = inst_55990);

(statearr_56037_56093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (34))){
var inst_55980 = (state_55996[(2)]);
var inst_55981 = cljs.core.PersistentVector.EMPTY;
var inst_55912 = inst_55981;
var inst_55913 = null;
var state_55996__$1 = (function (){var statearr_56038 = state_55996;
(statearr_56038[(15)] = inst_55980);

(statearr_56038[(10)] = inst_55912);

(statearr_56038[(11)] = inst_55913);

return statearr_56038;
})();
var statearr_56039_56094 = state_55996__$1;
(statearr_56039_56094[(2)] = null);

(statearr_56039_56094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (17))){
var inst_55913 = (state_55996[(11)]);
var inst_55949 = (inst_55913 == null);
var state_55996__$1 = state_55996;
var statearr_56040_56095 = state_55996__$1;
(statearr_56040_56095[(2)] = inst_55949);

(statearr_56040_56095[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (3))){
var inst_55994 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55996__$1,inst_55994);
} else {
if((state_val_55997 === (12))){
var inst_55912 = (state_55996[(10)]);
var inst_55929 = (state_55996[(9)]);
var inst_55947 = (state_55996[(16)]);
var inst_55946 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55912,inst_55929);
var inst_55947__$1 = flush_interval_ms;
var state_55996__$1 = (function (){var statearr_56041 = state_55996;
(statearr_56041[(13)] = inst_55946);

(statearr_56041[(16)] = inst_55947__$1);

return statearr_56041;
})();
if(cljs.core.truth_(inst_55947__$1)){
var statearr_56042_56096 = state_55996__$1;
(statearr_56042_56096[(1)] = (17));

} else {
var statearr_56043_56097 = state_55996__$1;
(statearr_56043_56097[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (2))){
var inst_55913 = (state_55996[(11)]);
var inst_55919 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55920 = [input_chan,flush_ch];
var inst_55921 = (new cljs.core.PersistentVector(null,2,(5),inst_55919,inst_55920,null));
var state_55996__$1 = (function (){var statearr_56044 = state_55996;
(statearr_56044[(12)] = inst_55921);

return statearr_56044;
})();
if(cljs.core.truth_(inst_55913)){
var statearr_56045_56098 = state_55996__$1;
(statearr_56045_56098[(1)] = (4));

} else {
var statearr_56046_56099 = state_55996__$1;
(statearr_56046_56099[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (23))){
var inst_55912 = (state_55996[(10)]);
var inst_55964 = cljs.core.seq(inst_55912);
var state_55996__$1 = state_55996;
if(inst_55964){
var statearr_56047_56100 = state_55996__$1;
(statearr_56047_56100[(1)] = (26));

} else {
var statearr_56048_56101 = state_55996__$1;
(statearr_56048_56101[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (19))){
var inst_55952 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
if(cljs.core.truth_(inst_55952)){
var statearr_56050_56102 = state_55996__$1;
(statearr_56050_56102[(1)] = (20));

} else {
var statearr_56054_56103 = state_55996__$1;
(statearr_56054_56103[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (11))){
var inst_55912 = (state_55996[(10)]);
var inst_55939 = cljs.core.seq(inst_55912);
var state_55996__$1 = state_55996;
if(inst_55939){
var statearr_56055_56104 = state_55996__$1;
(statearr_56055_56104[(1)] = (14));

} else {
var statearr_56056_56105 = state_55996__$1;
(statearr_56056_56105[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (9))){
var inst_55934 = (state_55996[(7)]);
var inst_55930 = (state_55996[(8)]);
var inst_55962 = (inst_55934.cljs$core$IFn$_invoke$arity$2 ? inst_55934.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_55930) : inst_55934.call(null,flush_ch,inst_55930));
var state_55996__$1 = state_55996;
if(cljs.core.truth_(inst_55962)){
var statearr_56058_56109 = state_55996__$1;
(statearr_56058_56109[(1)] = (23));

} else {
var statearr_56059_56110 = state_55996__$1;
(statearr_56059_56110[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (5))){
var inst_55921 = (state_55996[(12)]);
var state_55996__$1 = state_55996;
var statearr_56060_56111 = state_55996__$1;
(statearr_56060_56111[(2)] = inst_55921);

(statearr_56060_56111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (14))){
var inst_55912 = (state_55996[(10)]);
var inst_55941 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55912) : on_flush.call(null,inst_55912));
var state_55996__$1 = state_55996;
var statearr_56061_56112 = state_55996__$1;
(statearr_56061_56112[(2)] = inst_55941);

(statearr_56061_56112[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (26))){
var inst_55912 = (state_55996[(10)]);
var inst_55966 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55912) : on_flush.call(null,inst_55912));
var state_55996__$1 = state_55996;
var statearr_56062_56114 = state_55996__$1;
(statearr_56062_56114[(2)] = inst_55966);

(statearr_56062_56114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (16))){
var inst_55944 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
var statearr_56063_56115 = state_55996__$1;
(statearr_56063_56115[(2)] = inst_55944);

(statearr_56063_56115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (30))){
var inst_55930 = (state_55996[(8)]);
var inst_55984 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55930)].join('');
var inst_55985 = (new Error(inst_55984));
var inst_55986 = (function(){throw inst_55985})();
var state_55996__$1 = state_55996;
var statearr_56064_56116 = state_55996__$1;
(statearr_56064_56116[(2)] = inst_55986);

(statearr_56064_56116[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (10))){
var inst_55992 = (state_55996[(2)]);
var state_55996__$1 = state_55996;
var statearr_56065_56117 = state_55996__$1;
(statearr_56065_56117[(2)] = inst_55992);

(statearr_56065_56117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (18))){
var inst_55947 = (state_55996[(16)]);
var state_55996__$1 = state_55996;
var statearr_56066_56118 = state_55996__$1;
(statearr_56066_56118[(2)] = inst_55947);

(statearr_56066_56118[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55997 === (8))){
var inst_55929 = (state_55996[(9)]);
var inst_55937 = (inst_55929 == null);
var state_55996__$1 = state_55996;
if(cljs.core.truth_(inst_55937)){
var statearr_56067_56119 = state_55996__$1;
(statearr_56067_56119[(1)] = (11));

} else {
var statearr_56068_56120 = state_55996__$1;
(statearr_56068_56120[(1)] = (12));

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
var statearr_56069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56069[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56069[(1)] = (1));

return statearr_56069;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_55996){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_55996);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56070){var ex__32294__auto__ = e56070;
var statearr_56071_56122 = state_55996;
(statearr_56071_56122[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_55996[(4)]))){
var statearr_56072_56123 = state_55996;
(statearr_56072_56123[(1)] = cljs.core.first((state_55996[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56124 = state_55996;
state_55996 = G__56124;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_55996){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_55996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56073 = f__32362__auto__();
(statearr_56073[(6)] = c__32361__auto___56074);

return statearr_56073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
