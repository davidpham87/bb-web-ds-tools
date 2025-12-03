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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__55873){
var map__55874 = p__55873;
var map__55874__$1 = cljs.core.__destructure_map(map__55874);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55874__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55874__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55874__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__32361__auto___56043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_55971){
var state_val_55972 = (state_55971[(1)]);
if((state_val_55972 === (7))){
var inst_55903 = (state_55971[(7)]);
var inst_55899 = (state_55971[(8)]);
var inst_55897 = (state_55971[(2)]);
var inst_55898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55897,(0),null);
var inst_55899__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55897,(1),null);
var inst_55903__$1 = cljs.core._EQ_;
var inst_55907 = (inst_55903__$1.cljs$core$IFn$_invoke$arity$2 ? inst_55903__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_55899__$1) : inst_55903__$1.call(null,input_chan,inst_55899__$1));
var state_55971__$1 = (function (){var statearr_55973 = state_55971;
(statearr_55973[(9)] = inst_55898);

(statearr_55973[(8)] = inst_55899__$1);

(statearr_55973[(7)] = inst_55903__$1);

return statearr_55973;
})();
if(cljs.core.truth_(inst_55907)){
var statearr_55974_56044 = state_55971__$1;
(statearr_55974_56044[(1)] = (8));

} else {
var statearr_55975_56045 = state_55971__$1;
(statearr_55975_56045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (20))){
var inst_55926 = cljs.core.async.timeout(flush_interval_ms);
var state_55971__$1 = state_55971;
var statearr_55976_56046 = state_55971__$1;
(statearr_55976_56046[(2)] = inst_55926);

(statearr_55976_56046[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (27))){
var state_55971__$1 = state_55971;
var statearr_55977_56047 = state_55971__$1;
(statearr_55977_56047[(2)] = null);

(statearr_55977_56047[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (1))){
var inst_55876 = cljs.core.PersistentVector.EMPTY;
var inst_55881 = inst_55876;
var inst_55882 = null;
var state_55971__$1 = (function (){var statearr_55978 = state_55971;
(statearr_55978[(10)] = inst_55881);

(statearr_55978[(11)] = inst_55882);

return statearr_55978;
})();
var statearr_55979_56048 = state_55971__$1;
(statearr_55979_56048[(2)] = null);

(statearr_55979_56048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (24))){
var inst_55903 = (state_55971[(7)]);
var inst_55882 = (state_55971[(11)]);
var inst_55899 = (state_55971[(8)]);
var inst_55945 = (inst_55903.cljs$core$IFn$_invoke$arity$2 ? inst_55903.cljs$core$IFn$_invoke$arity$2(inst_55882,inst_55899) : inst_55903.call(null,inst_55882,inst_55899));
var state_55971__$1 = state_55971;
if(cljs.core.truth_(inst_55945)){
var statearr_55980_56049 = state_55971__$1;
(statearr_55980_56049[(1)] = (29));

} else {
var statearr_55981_56050 = state_55971__$1;
(statearr_55981_56050[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (4))){
var inst_55890 = (state_55971[(12)]);
var inst_55882 = (state_55971[(11)]);
var inst_55892 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55890,inst_55882);
var state_55971__$1 = state_55971;
var statearr_55982_56051 = state_55971__$1;
(statearr_55982_56051[(2)] = inst_55892);

(statearr_55982_56051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (15))){
var state_55971__$1 = state_55971;
var statearr_55983_56053 = state_55971__$1;
(statearr_55983_56053[(2)] = null);

(statearr_55983_56053[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (21))){
var inst_55882 = (state_55971[(11)]);
var state_55971__$1 = state_55971;
var statearr_55984_56054 = state_55971__$1;
(statearr_55984_56054[(2)] = inst_55882);

(statearr_55984_56054[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (31))){
var inst_55963 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
var statearr_55985_56055 = state_55971__$1;
(statearr_55985_56055[(2)] = inst_55963);

(statearr_55985_56055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (32))){
var inst_55881 = (state_55971[(10)]);
var inst_55952 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55881) : on_flush.call(null,inst_55881));
var state_55971__$1 = state_55971;
var statearr_55986_56056 = state_55971__$1;
(statearr_55986_56056[(2)] = inst_55952);

(statearr_55986_56056[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (33))){
var state_55971__$1 = state_55971;
var statearr_55987_56057 = state_55971__$1;
(statearr_55987_56057[(2)] = null);

(statearr_55987_56057[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (13))){
var inst_55932 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
var statearr_55988_56058 = state_55971__$1;
(statearr_55988_56058[(2)] = inst_55932);

(statearr_55988_56058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (22))){
var inst_55918 = (state_55971[(13)]);
var inst_55929 = (state_55971[(2)]);
var inst_55881 = inst_55918;
var inst_55882 = inst_55929;
var state_55971__$1 = (function (){var statearr_55989 = state_55971;
(statearr_55989[(10)] = inst_55881);

(statearr_55989[(11)] = inst_55882);

return statearr_55989;
})();
var statearr_55990_56059 = state_55971__$1;
(statearr_55990_56059[(2)] = null);

(statearr_55990_56059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (29))){
var inst_55881 = (state_55971[(10)]);
var inst_55950 = cljs.core.seq(inst_55881);
var state_55971__$1 = state_55971;
if(inst_55950){
var statearr_55991_56060 = state_55971__$1;
(statearr_55991_56060[(1)] = (32));

} else {
var statearr_55992_56061 = state_55971__$1;
(statearr_55992_56061[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (6))){
var inst_55895 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
return cljs.core.async.ioc_alts_BANG_(state_55971__$1,(7),inst_55895);
} else {
if((state_val_55972 === (28))){
var inst_55941 = (state_55971[(2)]);
var inst_55942 = cljs.core.PersistentVector.EMPTY;
var inst_55881 = inst_55942;
var inst_55882 = null;
var state_55971__$1 = (function (){var statearr_55994 = state_55971;
(statearr_55994[(14)] = inst_55941);

(statearr_55994[(10)] = inst_55881);

(statearr_55994[(11)] = inst_55882);

return statearr_55994;
})();
var statearr_55995_56062 = state_55971__$1;
(statearr_55995_56062[(2)] = null);

(statearr_55995_56062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (25))){
var inst_55965 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
var statearr_55996_56063 = state_55971__$1;
(statearr_55996_56063[(2)] = inst_55965);

(statearr_55996_56063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (34))){
var inst_55955 = (state_55971[(2)]);
var inst_55956 = cljs.core.PersistentVector.EMPTY;
var inst_55881 = inst_55956;
var inst_55882 = null;
var state_55971__$1 = (function (){var statearr_55997 = state_55971;
(statearr_55997[(15)] = inst_55955);

(statearr_55997[(10)] = inst_55881);

(statearr_55997[(11)] = inst_55882);

return statearr_55997;
})();
var statearr_55998_56064 = state_55971__$1;
(statearr_55998_56064[(2)] = null);

(statearr_55998_56064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (17))){
var inst_55882 = (state_55971[(11)]);
var inst_55921 = (inst_55882 == null);
var state_55971__$1 = state_55971;
var statearr_55999_56065 = state_55971__$1;
(statearr_55999_56065[(2)] = inst_55921);

(statearr_55999_56065[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (3))){
var inst_55969 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55971__$1,inst_55969);
} else {
if((state_val_55972 === (12))){
var inst_55881 = (state_55971[(10)]);
var inst_55898 = (state_55971[(9)]);
var inst_55919 = (state_55971[(16)]);
var inst_55918 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55881,inst_55898);
var inst_55919__$1 = flush_interval_ms;
var state_55971__$1 = (function (){var statearr_56000 = state_55971;
(statearr_56000[(13)] = inst_55918);

(statearr_56000[(16)] = inst_55919__$1);

return statearr_56000;
})();
if(cljs.core.truth_(inst_55919__$1)){
var statearr_56001_56066 = state_55971__$1;
(statearr_56001_56066[(1)] = (17));

} else {
var statearr_56002_56067 = state_55971__$1;
(statearr_56002_56067[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (2))){
var inst_55882 = (state_55971[(11)]);
var inst_55888 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55889 = [input_chan,flush_ch];
var inst_55890 = (new cljs.core.PersistentVector(null,2,(5),inst_55888,inst_55889,null));
var state_55971__$1 = (function (){var statearr_56003 = state_55971;
(statearr_56003[(12)] = inst_55890);

return statearr_56003;
})();
if(cljs.core.truth_(inst_55882)){
var statearr_56004_56068 = state_55971__$1;
(statearr_56004_56068[(1)] = (4));

} else {
var statearr_56005_56069 = state_55971__$1;
(statearr_56005_56069[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (23))){
var inst_55881 = (state_55971[(10)]);
var inst_55936 = cljs.core.seq(inst_55881);
var state_55971__$1 = state_55971;
if(inst_55936){
var statearr_56006_56070 = state_55971__$1;
(statearr_56006_56070[(1)] = (26));

} else {
var statearr_56007_56071 = state_55971__$1;
(statearr_56007_56071[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (19))){
var inst_55924 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
if(cljs.core.truth_(inst_55924)){
var statearr_56008_56072 = state_55971__$1;
(statearr_56008_56072[(1)] = (20));

} else {
var statearr_56009_56073 = state_55971__$1;
(statearr_56009_56073[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (11))){
var inst_55881 = (state_55971[(10)]);
var inst_55911 = cljs.core.seq(inst_55881);
var state_55971__$1 = state_55971;
if(inst_55911){
var statearr_56010_56074 = state_55971__$1;
(statearr_56010_56074[(1)] = (14));

} else {
var statearr_56011_56075 = state_55971__$1;
(statearr_56011_56075[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (9))){
var inst_55903 = (state_55971[(7)]);
var inst_55899 = (state_55971[(8)]);
var inst_55934 = (inst_55903.cljs$core$IFn$_invoke$arity$2 ? inst_55903.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_55899) : inst_55903.call(null,flush_ch,inst_55899));
var state_55971__$1 = state_55971;
if(cljs.core.truth_(inst_55934)){
var statearr_56012_56076 = state_55971__$1;
(statearr_56012_56076[(1)] = (23));

} else {
var statearr_56013_56077 = state_55971__$1;
(statearr_56013_56077[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (5))){
var inst_55890 = (state_55971[(12)]);
var state_55971__$1 = state_55971;
var statearr_56015_56078 = state_55971__$1;
(statearr_56015_56078[(2)] = inst_55890);

(statearr_56015_56078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (14))){
var inst_55881 = (state_55971[(10)]);
var inst_55913 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55881) : on_flush.call(null,inst_55881));
var state_55971__$1 = state_55971;
var statearr_56019_56079 = state_55971__$1;
(statearr_56019_56079[(2)] = inst_55913);

(statearr_56019_56079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (26))){
var inst_55881 = (state_55971[(10)]);
var inst_55938 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55881) : on_flush.call(null,inst_55881));
var state_55971__$1 = state_55971;
var statearr_56020_56080 = state_55971__$1;
(statearr_56020_56080[(2)] = inst_55938);

(statearr_56020_56080[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (16))){
var inst_55916 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
var statearr_56025_56081 = state_55971__$1;
(statearr_56025_56081[(2)] = inst_55916);

(statearr_56025_56081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (30))){
var inst_55899 = (state_55971[(8)]);
var inst_55959 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55899)].join('');
var inst_55960 = (new Error(inst_55959));
var inst_55961 = (function(){throw inst_55960})();
var state_55971__$1 = state_55971;
var statearr_56026_56082 = state_55971__$1;
(statearr_56026_56082[(2)] = inst_55961);

(statearr_56026_56082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (10))){
var inst_55967 = (state_55971[(2)]);
var state_55971__$1 = state_55971;
var statearr_56027_56083 = state_55971__$1;
(statearr_56027_56083[(2)] = inst_55967);

(statearr_56027_56083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (18))){
var inst_55919 = (state_55971[(16)]);
var state_55971__$1 = state_55971;
var statearr_56028_56084 = state_55971__$1;
(statearr_56028_56084[(2)] = inst_55919);

(statearr_56028_56084[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55972 === (8))){
var inst_55898 = (state_55971[(9)]);
var inst_55909 = (inst_55898 == null);
var state_55971__$1 = state_55971;
if(cljs.core.truth_(inst_55909)){
var statearr_56030_56085 = state_55971__$1;
(statearr_56030_56085[(1)] = (11));

} else {
var statearr_56031_56086 = state_55971__$1;
(statearr_56031_56086[(1)] = (12));

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
var statearr_56033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56033[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__32291__auto__);

(statearr_56033[(1)] = (1));

return statearr_56033;
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
}catch (e56034){var ex__32294__auto__ = e56034;
var statearr_56035_56087 = state_55971;
(statearr_56035_56087[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_55971[(4)]))){
var statearr_56036_56088 = state_55971;
(statearr_56036_56088[(1)] = cljs.core.first((state_55971[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56089 = state_55971;
state_55971 = G__56089;
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
var state__32363__auto__ = (function (){var statearr_56038 = f__32362__auto__();
(statearr_56038[(6)] = c__32361__auto___56043);

return statearr_56038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
