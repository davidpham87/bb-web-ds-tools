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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__55884){
var map__55885 = p__55884;
var map__55885__$1 = cljs.core.__destructure_map(map__55885);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55885__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55885__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55885__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_55971){
var state_val_55972 = (state_55971[(1)]);
if((state_val_55972 === (7))){
var inst_55909 = (state_55971[(7)]);
var inst_55905 = (state_55971[(8)]);
var inst_55903 = (state_55971[(2)]);
var inst_55904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55903,(0),null);
var inst_55905__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55903,(1),null);
var inst_55909__$1 = cljs.core._EQ_;
var inst_55910 = (inst_55909__$1.cljs$core$IFn$_invoke$arity$2 ? inst_55909__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_55905__$1) : inst_55909__$1.call(null,input_chan,inst_55905__$1));
var state_55971__$1 = (function (){var statearr_55974 = state_55971;
(statearr_55974[(9)] = inst_55904);

(statearr_55974[(8)] = inst_55905__$1);

(statearr_55974[(7)] = inst_55909__$1);

return statearr_55974;
})();
if(cljs.core.truth_(inst_55910)){
var statearr_55988_56053 = state_55971__$1;
(statearr_55988_56053[(1)] = (8));

} else {
var statearr_55989_56054 = state_55971__$1;
(statearr_55989_56054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (20))){
var inst_55929 = cljs.core.async.timeout(flush_interval_ms);
var state_55971__$1 = state_55971;
var statearr_55990_56056 = state_55971__$1;
(statearr_55990_56056[(2)] = inst_55929);

(statearr_55990_56056[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (27))){
var state_55971__$1 = state_55971;
var statearr_55991_56057 = state_55971__$1;
(statearr_55991_56057[(2)] = null);

(statearr_55991_56057[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (1))){
var inst_55886 = cljs.core.PersistentVector.EMPTY;
var inst_55887 = inst_55886;
var inst_55888 = null;
var state_55971__$1 = (function (){var statearr_55992 = state_55971;
(statearr_55992[(10)] = inst_55887);

(statearr_55992[(11)] = inst_55888);

return statearr_55992;
})();
var statearr_55993_56058 = state_55971__$1;
(statearr_55993_56058[(2)] = null);

(statearr_55993_56058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (24))){
var inst_55909 = (state_55971[(7)]);
var inst_55888 = (state_55971[(11)]);
var inst_55905 = (state_55971[(8)]);
var inst_55948 = (inst_55909.cljs$core$IFn$_invoke$arity$2 ? inst_55909.cljs$core$IFn$_invoke$arity$2(inst_55888,inst_55905) : inst_55909.call(null,inst_55888,inst_55905));
var state_55971__$1 = state_55971;
if(cljs.core.truth_(inst_55948)){
var statearr_55994_56059 = state_55971__$1;
(statearr_55994_56059[(1)] = (29));

} else {
var statearr_55995_56060 = state_55971__$1;
(statearr_55995_56060[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (4))){
var inst_55896 = (state_55971[(12)]);
var inst_55888 = (state_55971[(11)]);
var inst_55898 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55896,inst_55888);
var state_55971__$1 = state_55971;
var statearr_55998_56061 = state_55971__$1;
(statearr_55998_56061[(2)] = inst_55898);

(statearr_55998_56061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (15))){
var state_55971__$1 = state_55971;
var statearr_55999_56062 = state_55971__$1;
(statearr_55999_56062[(2)] = null);

(statearr_55999_56062[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (21))){
var inst_55888 = (state_55971[(11)]);
var state_55971__$1 = state_55971;
var statearr_56000_56063 = state_55971__$1;
(statearr_56000_56063[(2)] = inst_55888);

(statearr_56000_56063[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (31))){
var inst_55963 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
var statearr_56001_56064 = state_55971__$1;
(statearr_56001_56064[(2)] = inst_55963);

(statearr_56001_56064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (32))){
var inst_55887 = (state_55971[(10)]);
var inst_55952 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55887) : on_flush.call(null,inst_55887));
var state_55971__$1 = state_55971;
var statearr_56002_56065 = state_55971__$1;
(statearr_56002_56065[(2)] = inst_55952);

(statearr_56002_56065[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (33))){
var state_55971__$1 = state_55971;
var statearr_56003_56066 = state_55971__$1;
(statearr_56003_56066[(2)] = null);

(statearr_56003_56066[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (13))){
var inst_55935 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
var statearr_56004_56067 = state_55971__$1;
(statearr_56004_56067[(2)] = inst_55935);

(statearr_56004_56067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (22))){
var inst_55921 = (state_55971[(13)]);
var inst_55932 = (state_55971[(2)]);
var inst_55887 = inst_55921;
var inst_55888 = inst_55932;
var state_55971__$1 = (function (){var statearr_56011 = state_55971;
(statearr_56011[(10)] = inst_55887);

(statearr_56011[(11)] = inst_55888);

return statearr_56011;
})();
var statearr_56012_56068 = state_55971__$1;
(statearr_56012_56068[(2)] = null);

(statearr_56012_56068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (29))){
var inst_55887 = (state_55971[(10)]);
var inst_55950 = cljs.core.seq(inst_55887);
var state_55971__$1 = state_55971;
if(inst_55950){
var statearr_56013_56069 = state_55971__$1;
(statearr_56013_56069[(1)] = (32));

} else {
var statearr_56014_56070 = state_55971__$1;
(statearr_56014_56070[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (6))){
var inst_55901 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
return cljs.core.async.ioc_alts_BANG_(state_55971__$1,(7),inst_55901);
} else {
if((state_val_55972 === (28))){
var inst_55944 = (state_55971[(2)]);
var inst_55945 = cljs.core.PersistentVector.EMPTY;
var inst_55887 = inst_55945;
var inst_55888 = null;
var state_55971__$1 = (function (){var statearr_56015 = state_55971;
(statearr_56015[(14)] = inst_55944);

(statearr_56015[(10)] = inst_55887);

(statearr_56015[(11)] = inst_55888);

return statearr_56015;
})();
var statearr_56016_56071 = state_55971__$1;
(statearr_56016_56071[(2)] = null);

(statearr_56016_56071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (25))){
var inst_55965 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
var statearr_56017_56072 = state_55971__$1;
(statearr_56017_56072[(2)] = inst_55965);

(statearr_56017_56072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (34))){
var inst_55955 = (state_55971[(2)]);
var inst_55956 = cljs.core.PersistentVector.EMPTY;
var inst_55887 = inst_55956;
var inst_55888 = null;
var state_55971__$1 = (function (){var statearr_56018 = state_55971;
(statearr_56018[(15)] = inst_55955);

(statearr_56018[(10)] = inst_55887);

(statearr_56018[(11)] = inst_55888);

return statearr_56018;
})();
var statearr_56019_56080 = state_55971__$1;
(statearr_56019_56080[(2)] = null);

(statearr_56019_56080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (17))){
var inst_55888 = (state_55971[(11)]);
var inst_55924 = (inst_55888 == null);
var state_55971__$1 = state_55971;
var statearr_56020_56081 = state_55971__$1;
(statearr_56020_56081[(2)] = inst_55924);

(statearr_56020_56081[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (3))){
var inst_55969 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55971__$1,inst_55969);
} else {
if((state_val_55972 === (12))){
var inst_55887 = (state_55971[(10)]);
var inst_55904 = (state_55971[(9)]);
var inst_55922 = (state_55971[(16)]);
var inst_55921 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55887,inst_55904);
var inst_55922__$1 = flush_interval_ms;
var state_55971__$1 = (function (){var statearr_56021 = state_55971;
(statearr_56021[(13)] = inst_55921);

(statearr_56021[(16)] = inst_55922__$1);

return statearr_56021;
})();
if(cljs.core.truth_(inst_55922__$1)){
var statearr_56022_56082 = state_55971__$1;
(statearr_56022_56082[(1)] = (17));

} else {
var statearr_56023_56083 = state_55971__$1;
(statearr_56023_56083[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (2))){
var inst_55888 = (state_55971[(11)]);
var inst_55894 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55895 = [input_chan,flush_ch];
var inst_55896 = (new cljs.core.PersistentVector(null,2,(5),inst_55894,inst_55895,null));
var state_55971__$1 = (function (){var statearr_56024 = state_55971;
(statearr_56024[(12)] = inst_55896);

return statearr_56024;
})();
if(cljs.core.truth_(inst_55888)){
var statearr_56025_56084 = state_55971__$1;
(statearr_56025_56084[(1)] = (4));

} else {
var statearr_56026_56085 = state_55971__$1;
(statearr_56026_56085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (23))){
var inst_55887 = (state_55971[(10)]);
var inst_55939 = cljs.core.seq(inst_55887);
var state_55971__$1 = state_55971;
if(inst_55939){
var statearr_56027_56086 = state_55971__$1;
(statearr_56027_56086[(1)] = (26));

} else {
var statearr_56028_56087 = state_55971__$1;
(statearr_56028_56087[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (19))){
var inst_55927 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
if(cljs.core.truth_(inst_55927)){
var statearr_56029_56088 = state_55971__$1;
(statearr_56029_56088[(1)] = (20));

} else {
var statearr_56030_56089 = state_55971__$1;
(statearr_56030_56089[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (11))){
var inst_55887 = (state_55971[(10)]);
var inst_55914 = cljs.core.seq(inst_55887);
var state_55971__$1 = state_55971;
if(inst_55914){
var statearr_56031_56090 = state_55971__$1;
(statearr_56031_56090[(1)] = (14));

} else {
var statearr_56032_56091 = state_55971__$1;
(statearr_56032_56091[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (9))){
var inst_55909 = (state_55971[(7)]);
var inst_55905 = (state_55971[(8)]);
var inst_55937 = (inst_55909.cljs$core$IFn$_invoke$arity$2 ? inst_55909.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_55905) : inst_55909.call(null,flush_ch,inst_55905));
var state_55971__$1 = state_55971;
if(cljs.core.truth_(inst_55937)){
var statearr_56033_56092 = state_55971__$1;
(statearr_56033_56092[(1)] = (23));

} else {
var statearr_56034_56093 = state_55971__$1;
(statearr_56034_56093[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (5))){
var inst_55896 = (state_55971[(12)]);
var state_55971__$1 = state_55971;
var statearr_56035_56095 = state_55971__$1;
(statearr_56035_56095[(2)] = inst_55896);

(statearr_56035_56095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (14))){
var inst_55887 = (state_55971[(10)]);
var inst_55916 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55887) : on_flush.call(null,inst_55887));
var state_55971__$1 = state_55971;
var statearr_56036_56096 = state_55971__$1;
(statearr_56036_56096[(2)] = inst_55916);

(statearr_56036_56096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (26))){
var inst_55887 = (state_55971[(10)]);
var inst_55941 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55887) : on_flush.call(null,inst_55887));
var state_55971__$1 = state_55971;
var statearr_56037_56097 = state_55971__$1;
(statearr_56037_56097[(2)] = inst_55941);

(statearr_56037_56097[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (16))){
var inst_55919 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
var statearr_56038_56098 = state_55971__$1;
(statearr_56038_56098[(2)] = inst_55919);

(statearr_56038_56098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (30))){
var inst_55905 = (state_55971[(8)]);
var inst_55959 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55905)].join('');
var inst_55960 = (new Error(inst_55959));
var inst_55961 = (function(){throw inst_55960})();
var state_55971__$1 = state_55971;
var statearr_56039_56099 = state_55971__$1;
(statearr_56039_56099[(2)] = inst_55961);

(statearr_56039_56099[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (10))){
var inst_55967 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
var statearr_56040_56101 = state_55971__$1;
(statearr_56040_56101[(2)] = inst_55967);

(statearr_56040_56101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (18))){
var inst_55922 = (state_55971[(16)]);
var state_55971__$1 = state_55971;
var statearr_56041_56104 = state_55971__$1;
(statearr_56041_56104[(2)] = inst_55922);

(statearr_56041_56104[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (8))){
var inst_55904 = (state_55971[(9)]);
var inst_55912 = (inst_55904 == null);
var state_55971__$1 = state_55971;
if(cljs.core.truth_(inst_55912)){
var statearr_56042_56115 = state_55971__$1;
(statearr_56042_56115[(1)] = (11));

} else {
var statearr_56043_56118 = state_55971__$1;
(statearr_56043_56118[(1)] = (12));

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
var statearr_56044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56044[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56044[(1)] = (1));

return statearr_56044;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1 = (function (state_55971){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_55971);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56045){var ex__32294__auto__ = e56045;
var statearr_56046_56121 = state_55971;
(statearr_56046_56121[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_55971[(4)]))){
var statearr_56047_56122 = state_55971;
(statearr_56047_56122[(1)] = cljs.core.first((state_55971[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56128 = state_55971;
state_55971 = G__56128;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__ = function(state_55971){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1.call(this,state_55971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56048 = f__32362__auto__();
(statearr_56048[(6)] = c__32361__auto___56049);

return statearr_56048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
