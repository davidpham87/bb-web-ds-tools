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
bb_web_ds_tools.components.async_buffer.create = (function bb_web_ds_tools$components$async_buffer$create(p__55834){
var map__55835 = p__55834;
var map__55835__$1 = cljs.core.__destructure_map(map__55835);
var input_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55835__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var flush_interval_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55835__$1,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360));
var on_flush = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55835__$1,new cljs.core.Keyword(null,"on-flush","on-flush",1802855488));
var flush_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__50501__auto___56013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_55927){
var state_val_55928 = (state_55927[(1)]);
if((state_val_55928 === (7))){
var inst_55865 = (state_55927[(7)]);
var inst_55861 = (state_55927[(8)]);
var inst_55859 = (state_55927[(2)]);
var inst_55860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55859,(0),null);
var inst_55861__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55859,(1),null);
var inst_55865__$1 = cljs.core._EQ_;
var inst_55866 = (inst_55865__$1.cljs$core$IFn$_invoke$arity$2 ? inst_55865__$1.cljs$core$IFn$_invoke$arity$2(input_chan,inst_55861__$1) : inst_55865__$1.call(null,input_chan,inst_55861__$1));
var state_55927__$1 = (function (){var statearr_55929 = state_55927;
(statearr_55929[(9)] = inst_55860);

(statearr_55929[(8)] = inst_55861__$1);

(statearr_55929[(7)] = inst_55865__$1);

return statearr_55929;
})();
if(cljs.core.truth_(inst_55866)){
var statearr_55930_56014 = state_55927__$1;
(statearr_55930_56014[(1)] = (8));

} else {
var statearr_55931_56015 = state_55927__$1;
(statearr_55931_56015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (20))){
var inst_55885 = cljs.core.async.timeout(flush_interval_ms);
var state_55927__$1 = state_55927;
var statearr_55933_56016 = state_55927__$1;
(statearr_55933_56016[(2)] = inst_55885);

(statearr_55933_56016[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (27))){
var state_55927__$1 = state_55927;
var statearr_55934_56017 = state_55927__$1;
(statearr_55934_56017[(2)] = null);

(statearr_55934_56017[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (1))){
var inst_55839 = cljs.core.PersistentVector.EMPTY;
var inst_55840 = inst_55839;
var inst_55841 = null;
var state_55927__$1 = (function (){var statearr_55935 = state_55927;
(statearr_55935[(10)] = inst_55840);

(statearr_55935[(11)] = inst_55841);

return statearr_55935;
})();
var statearr_55936_56018 = state_55927__$1;
(statearr_55936_56018[(2)] = null);

(statearr_55936_56018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (24))){
var inst_55865 = (state_55927[(7)]);
var inst_55841 = (state_55927[(11)]);
var inst_55861 = (state_55927[(8)]);
var inst_55904 = (inst_55865.cljs$core$IFn$_invoke$arity$2 ? inst_55865.cljs$core$IFn$_invoke$arity$2(inst_55841,inst_55861) : inst_55865.call(null,inst_55841,inst_55861));
var state_55927__$1 = state_55927;
if(cljs.core.truth_(inst_55904)){
var statearr_55937_56019 = state_55927__$1;
(statearr_55937_56019[(1)] = (29));

} else {
var statearr_55938_56020 = state_55927__$1;
(statearr_55938_56020[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (4))){
var inst_55852 = (state_55927[(12)]);
var inst_55841 = (state_55927[(11)]);
var inst_55854 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55852,inst_55841);
var state_55927__$1 = state_55927;
var statearr_55939_56021 = state_55927__$1;
(statearr_55939_56021[(2)] = inst_55854);

(statearr_55939_56021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (15))){
var state_55927__$1 = state_55927;
var statearr_55940_56022 = state_55927__$1;
(statearr_55940_56022[(2)] = null);

(statearr_55940_56022[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (21))){
var inst_55841 = (state_55927[(11)]);
var state_55927__$1 = state_55927;
var statearr_55941_56023 = state_55927__$1;
(statearr_55941_56023[(2)] = inst_55841);

(statearr_55941_56023[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (31))){
var inst_55919 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_55942_56024 = state_55927__$1;
(statearr_55942_56024[(2)] = inst_55919);

(statearr_55942_56024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (32))){
var inst_55840 = (state_55927[(10)]);
var inst_55908 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55840) : on_flush.call(null,inst_55840));
var state_55927__$1 = state_55927;
var statearr_55943_56025 = state_55927__$1;
(statearr_55943_56025[(2)] = inst_55908);

(statearr_55943_56025[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (33))){
var state_55927__$1 = state_55927;
var statearr_55944_56026 = state_55927__$1;
(statearr_55944_56026[(2)] = null);

(statearr_55944_56026[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (13))){
var inst_55891 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_55945_56027 = state_55927__$1;
(statearr_55945_56027[(2)] = inst_55891);

(statearr_55945_56027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (22))){
var inst_55877 = (state_55927[(13)]);
var inst_55888 = (state_55927[(2)]);
var inst_55840 = inst_55877;
var inst_55841 = inst_55888;
var state_55927__$1 = (function (){var statearr_55947 = state_55927;
(statearr_55947[(10)] = inst_55840);

(statearr_55947[(11)] = inst_55841);

return statearr_55947;
})();
var statearr_55948_56028 = state_55927__$1;
(statearr_55948_56028[(2)] = null);

(statearr_55948_56028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (29))){
var inst_55840 = (state_55927[(10)]);
var inst_55906 = cljs.core.seq(inst_55840);
var state_55927__$1 = state_55927;
if(inst_55906){
var statearr_55951_56029 = state_55927__$1;
(statearr_55951_56029[(1)] = (32));

} else {
var statearr_55952_56030 = state_55927__$1;
(statearr_55952_56030[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (6))){
var inst_55857 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
return cljs.core.async.ioc_alts_BANG_(state_55927__$1,(7),inst_55857);
} else {
if((state_val_55928 === (28))){
var inst_55900 = (state_55927[(2)]);
var inst_55901 = cljs.core.PersistentVector.EMPTY;
var inst_55840 = inst_55901;
var inst_55841 = null;
var state_55927__$1 = (function (){var statearr_55953 = state_55927;
(statearr_55953[(14)] = inst_55900);

(statearr_55953[(10)] = inst_55840);

(statearr_55953[(11)] = inst_55841);

return statearr_55953;
})();
var statearr_55955_56031 = state_55927__$1;
(statearr_55955_56031[(2)] = null);

(statearr_55955_56031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (25))){
var inst_55921 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_55959_56032 = state_55927__$1;
(statearr_55959_56032[(2)] = inst_55921);

(statearr_55959_56032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (34))){
var inst_55911 = (state_55927[(2)]);
var inst_55912 = cljs.core.PersistentVector.EMPTY;
var inst_55840 = inst_55912;
var inst_55841 = null;
var state_55927__$1 = (function (){var statearr_55960 = state_55927;
(statearr_55960[(15)] = inst_55911);

(statearr_55960[(10)] = inst_55840);

(statearr_55960[(11)] = inst_55841);

return statearr_55960;
})();
var statearr_55965_56033 = state_55927__$1;
(statearr_55965_56033[(2)] = null);

(statearr_55965_56033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (17))){
var inst_55841 = (state_55927[(11)]);
var inst_55880 = (inst_55841 == null);
var state_55927__$1 = state_55927;
var statearr_55967_56034 = state_55927__$1;
(statearr_55967_56034[(2)] = inst_55880);

(statearr_55967_56034[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (3))){
var inst_55925 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55927__$1,inst_55925);
} else {
if((state_val_55928 === (12))){
var inst_55840 = (state_55927[(10)]);
var inst_55860 = (state_55927[(9)]);
var inst_55878 = (state_55927[(16)]);
var inst_55877 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55840,inst_55860);
var inst_55878__$1 = flush_interval_ms;
var state_55927__$1 = (function (){var statearr_55975 = state_55927;
(statearr_55975[(13)] = inst_55877);

(statearr_55975[(16)] = inst_55878__$1);

return statearr_55975;
})();
if(cljs.core.truth_(inst_55878__$1)){
var statearr_55976_56035 = state_55927__$1;
(statearr_55976_56035[(1)] = (17));

} else {
var statearr_55977_56036 = state_55927__$1;
(statearr_55977_56036[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (2))){
var inst_55841 = (state_55927[(11)]);
var inst_55847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55851 = [input_chan,flush_ch];
var inst_55852 = (new cljs.core.PersistentVector(null,2,(5),inst_55847,inst_55851,null));
var state_55927__$1 = (function (){var statearr_55978 = state_55927;
(statearr_55978[(12)] = inst_55852);

return statearr_55978;
})();
if(cljs.core.truth_(inst_55841)){
var statearr_55979_56037 = state_55927__$1;
(statearr_55979_56037[(1)] = (4));

} else {
var statearr_55980_56038 = state_55927__$1;
(statearr_55980_56038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (23))){
var inst_55840 = (state_55927[(10)]);
var inst_55895 = cljs.core.seq(inst_55840);
var state_55927__$1 = state_55927;
if(inst_55895){
var statearr_55981_56039 = state_55927__$1;
(statearr_55981_56039[(1)] = (26));

} else {
var statearr_55982_56040 = state_55927__$1;
(statearr_55982_56040[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (19))){
var inst_55883 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
if(cljs.core.truth_(inst_55883)){
var statearr_55983_56041 = state_55927__$1;
(statearr_55983_56041[(1)] = (20));

} else {
var statearr_55984_56042 = state_55927__$1;
(statearr_55984_56042[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (11))){
var inst_55840 = (state_55927[(10)]);
var inst_55870 = cljs.core.seq(inst_55840);
var state_55927__$1 = state_55927;
if(inst_55870){
var statearr_55985_56043 = state_55927__$1;
(statearr_55985_56043[(1)] = (14));

} else {
var statearr_55986_56044 = state_55927__$1;
(statearr_55986_56044[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (9))){
var inst_55865 = (state_55927[(7)]);
var inst_55861 = (state_55927[(8)]);
var inst_55893 = (inst_55865.cljs$core$IFn$_invoke$arity$2 ? inst_55865.cljs$core$IFn$_invoke$arity$2(flush_ch,inst_55861) : inst_55865.call(null,flush_ch,inst_55861));
var state_55927__$1 = state_55927;
if(cljs.core.truth_(inst_55893)){
var statearr_55987_56045 = state_55927__$1;
(statearr_55987_56045[(1)] = (23));

} else {
var statearr_55988_56046 = state_55927__$1;
(statearr_55988_56046[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (5))){
var inst_55852 = (state_55927[(12)]);
var state_55927__$1 = state_55927;
var statearr_55994_56047 = state_55927__$1;
(statearr_55994_56047[(2)] = inst_55852);

(statearr_55994_56047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (14))){
var inst_55840 = (state_55927[(10)]);
var inst_55872 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55840) : on_flush.call(null,inst_55840));
var state_55927__$1 = state_55927;
var statearr_55995_56048 = state_55927__$1;
(statearr_55995_56048[(2)] = inst_55872);

(statearr_55995_56048[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (26))){
var inst_55840 = (state_55927[(10)]);
var inst_55897 = (on_flush.cljs$core$IFn$_invoke$arity$1 ? on_flush.cljs$core$IFn$_invoke$arity$1(inst_55840) : on_flush.call(null,inst_55840));
var state_55927__$1 = state_55927;
var statearr_55996_56049 = state_55927__$1;
(statearr_55996_56049[(2)] = inst_55897);

(statearr_55996_56049[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (16))){
var inst_55875 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_55997_56050 = state_55927__$1;
(statearr_55997_56050[(2)] = inst_55875);

(statearr_55997_56050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (30))){
var inst_55861 = (state_55927[(8)]);
var inst_55915 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55861)].join('');
var inst_55916 = (new Error(inst_55915));
var inst_55917 = (function(){throw inst_55916})();
var state_55927__$1 = state_55927;
var statearr_55998_56051 = state_55927__$1;
(statearr_55998_56051[(2)] = inst_55917);

(statearr_55998_56051[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (10))){
var inst_55923 = (state_55927[(2)]);
var state_55927__$1 = state_55927;
var statearr_55999_56052 = state_55927__$1;
(statearr_55999_56052[(2)] = inst_55923);

(statearr_55999_56052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (18))){
var inst_55878 = (state_55927[(16)]);
var state_55927__$1 = state_55927;
var statearr_56000_56053 = state_55927__$1;
(statearr_56000_56053[(2)] = inst_55878);

(statearr_56000_56053[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55928 === (8))){
var inst_55860 = (state_55927[(9)]);
var inst_55868 = (inst_55860 == null);
var state_55927__$1 = state_55927;
if(cljs.core.truth_(inst_55868)){
var statearr_56001_56054 = state_55927__$1;
(statearr_56001_56054[(1)] = (11));

} else {
var statearr_56002_56055 = state_55927__$1;
(statearr_56002_56055[(1)] = (12));

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
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto__ = null;
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto____0 = (function (){
var statearr_56003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56003[(0)] = bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto__);

(statearr_56003[(1)] = (1));

return statearr_56003;
});
var bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto____1 = (function (state_55927){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_55927);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e56004){var ex__50434__auto__ = e56004;
var statearr_56005_56058 = state_55927;
(statearr_56005_56058[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_55927[(4)]))){
var statearr_56006_56059 = state_55927;
(statearr_56006_56059[(1)] = cljs.core.first((state_55927[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56060 = state_55927;
state_55927 = G__56060;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto__ = function(state_55927){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto____1.call(this,state_55927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto____0;
bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto____1;
return bb_web_ds_tools$components$async_buffer$create_$_state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_56007 = f__50502__auto__();
(statearr_56007[(6)] = c__50501__auto___56013);

return statearr_56007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(flush_ch,new cljs.core.Keyword(null,"flush","flush",-1138711199));
});
});

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer.js.map
