goog.provide('bb_web_ds_tools.views.vega_lite.events');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.views !== 'undefined') && (typeof bb_web_ds_tools.views.vega_lite !== 'undefined') && (typeof bb_web_ds_tools.views.vega_lite.events !== 'undefined') && (typeof bb_web_ds_tools.views.vega_lite.events.config_chan !== 'undefined')){
} else {
bb_web_ds_tools.views.vega_lite.events.config_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.views !== 'undefined') && (typeof bb_web_ds_tools.views.vega_lite !== 'undefined') && (typeof bb_web_ds_tools.views.vega_lite.events !== 'undefined') && (typeof bb_web_ds_tools.views.vega_lite.events.loop_running_QMARK_ !== 'undefined')){
} else {
bb_web_ds_tools.views.vega_lite.events.loop_running_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
re_frame.core.reg_fx(new cljs.core.Keyword(null,"start-debounce-loop","start-debounce-loop",630343512),(function (_){
if(cljs.core.compare_and_set_BANG_(bb_web_ds_tools.views.vega_lite.events.loop_running_QMARK_,false,true)){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_38034){
var state_val_38035 = (state_38034[(1)]);
if((state_val_38035 === (7))){
var inst_38030 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38037_38209 = state_38034__$1;
(statearr_38037_38209[(2)] = inst_38030);

(statearr_38037_38209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (1))){
var state_38034__$1 = state_38034;
var statearr_38038_38211 = state_38034__$1;
(statearr_38038_38211[(2)] = null);

(statearr_38038_38211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (4))){
var inst_37980 = (state_38034[(7)]);
var inst_37980__$1 = (state_38034[(2)]);
var state_38034__$1 = (function (){var statearr_38039 = state_38034;
(statearr_38039[(7)] = inst_37980__$1);

return statearr_38039;
})();
if(cljs.core.truth_(inst_37980__$1)){
var statearr_38040_38212 = state_38034__$1;
(statearr_38040_38212[(1)] = (5));

} else {
var statearr_38041_38213 = state_38034__$1;
(statearr_38041_38213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (15))){
var inst_37999 = (state_38034[(8)]);
var inst_37982 = inst_37999;
var state_38034__$1 = (function (){var statearr_38042 = state_38034;
(statearr_38042[(9)] = inst_37982);

return statearr_38042;
})();
var statearr_38043_38214 = state_38034__$1;
(statearr_38043_38214[(2)] = null);

(statearr_38043_38214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (13))){
var inst_38020 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38045_38215 = state_38034__$1;
(statearr_38045_38215[(2)] = inst_38020);

(statearr_38045_38215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (6))){
var state_38034__$1 = state_38034;
var statearr_38046_38216 = state_38034__$1;
(statearr_38046_38216[(2)] = null);

(statearr_38046_38216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (17))){
var inst_38018 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38050_38223 = state_38034__$1;
(statearr_38050_38223[(2)] = inst_38018);

(statearr_38050_38223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (3))){
var inst_38032 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38034__$1,inst_38032);
} else {
if((state_val_38035 === (12))){
var inst_37999 = (state_38034[(8)]);
var state_38034__$1 = state_38034;
if(cljs.core.truth_(inst_37999)){
var statearr_38051_38224 = state_38034__$1;
(statearr_38051_38224[(1)] = (15));

} else {
var statearr_38052_38225 = state_38034__$1;
(statearr_38052_38225[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (2))){
var state_38034__$1 = state_38034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38034__$1,(4),bb_web_ds_tools.views.vega_lite.events.config_chan);
} else {
if((state_val_38035 === (11))){
var inst_38005 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38006 = [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","commit-config","bb-web-ds-tools.views.vega-lite.events/commit-config",-1490354792)];
var inst_38007 = (new cljs.core.PersistentVector(null,1,(5),inst_38005,inst_38006,null));
var inst_38008 = re_frame.core.dispatch(inst_38007);
var state_38034__$1 = (function (){var statearr_38053 = state_38034;
(statearr_38053[(10)] = inst_38008);

return statearr_38053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38034__$1,(14),bb_web_ds_tools.views.vega_lite.events.config_chan);
} else {
if((state_val_38035 === (9))){
var inst_38027 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38054_38226 = state_38034__$1;
(statearr_38054_38226[(2)] = inst_38027);

(statearr_38054_38226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (5))){
var inst_37980 = (state_38034[(7)]);
var inst_37982 = inst_37980;
var state_38034__$1 = (function (){var statearr_38057 = state_38034;
(statearr_38057[(9)] = inst_37982);

return statearr_38057;
})();
var statearr_38058_38227 = state_38034__$1;
(statearr_38058_38227[(2)] = null);

(statearr_38058_38227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (14))){
var inst_38010 = (state_38034[(2)]);
var inst_37982 = inst_38010;
var state_38034__$1 = (function (){var statearr_38059 = state_38034;
(statearr_38059[(9)] = inst_37982);

return statearr_38059;
})();
var statearr_38060_38228 = state_38034__$1;
(statearr_38060_38228[(2)] = null);

(statearr_38060_38228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (16))){
var inst_37982 = (state_38034[(9)]);
var tmp38056 = inst_37982;
var inst_37982__$1 = tmp38056;
var state_38034__$1 = (function (){var statearr_38063 = state_38034;
(statearr_38063[(9)] = inst_37982__$1);

return statearr_38063;
})();
var statearr_38064_38229 = state_38034__$1;
(statearr_38064_38229[(2)] = null);

(statearr_38064_38229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (10))){
var inst_37993 = (state_38034[(11)]);
var inst_37998 = (state_38034[(2)]);
var inst_37999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37998,(0),null);
var inst_38000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37998,(1),null);
var inst_38001 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38000,inst_37993);
var state_38034__$1 = (function (){var statearr_38065 = state_38034;
(statearr_38065[(8)] = inst_37999);

return statearr_38065;
})();
if(inst_38001){
var statearr_38067_38230 = state_38034__$1;
(statearr_38067_38230[(1)] = (11));

} else {
var statearr_38069_38231 = state_38034__$1;
(statearr_38069_38231[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (8))){
var inst_37993 = (state_38034[(11)]);
var inst_37988 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37989 = [new cljs.core.Keyword("bb-web-ds-tools.events.settings","vega-lite-debounce-ms","bb-web-ds-tools.events.settings/vega-lite-debounce-ms",-1548002368)];
var inst_37990 = (new cljs.core.PersistentVector(null,1,(5),inst_37988,inst_37989,null));
var inst_37991 = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(inst_37990);
var inst_37992 = cljs.core.deref(inst_37991);
var inst_37993__$1 = cljs.core.async.timeout(inst_37992);
var inst_37994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37995 = [bb_web_ds_tools.views.vega_lite.events.config_chan,inst_37993__$1];
var inst_37996 = (new cljs.core.PersistentVector(null,2,(5),inst_37994,inst_37995,null));
var state_38034__$1 = (function (){var statearr_38070 = state_38034;
(statearr_38070[(11)] = inst_37993__$1);

return statearr_38070;
})();
return cljs.core.async.ioc_alts_BANG_(state_38034__$1,(10),inst_37996);
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
});
return (function() {
var bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__ = null;
var bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____0 = (function (){
var statearr_38072 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38072[(0)] = bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__);

(statearr_38072[(1)] = (1));

return statearr_38072;
});
var bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____1 = (function (state_38034){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_38034);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e38073){var ex__24105__auto__ = e38073;
var statearr_38074_38235 = state_38034;
(statearr_38074_38235[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_38034[(4)]))){
var statearr_38075_38237 = state_38034;
(statearr_38075_38237[(1)] = cljs.core.first((state_38034[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38238 = state_38034;
state_38034 = G__38238;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__ = function(state_38034){
switch(arguments.length){
case 0:
return bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____1.call(this,state_38034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____0;
bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____1;
return bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_38077 = f__24149__auto__();
(statearr_38077[(6)] = c__24148__auto__);

return statearr_38077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
} else {
return null;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"core-async","core-async",1793929273),(function (p__38079){
var map__38080 = p__38079;
var map__38080__$1 = cljs.core.__destructure_map(map__38080);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38080__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38080__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38080__$1,new cljs.core.Keyword(null,"val","val",128701612));
var G__38082 = op;
var G__38082__$1 = (((G__38082 instanceof cljs.core.Keyword))?G__38082.fqn:null);
switch (G__38082__$1) {
case "put!":
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,val);

break;
default:
return null;

}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","initialize","bb-web-ds-tools.views.vega-lite.events/initialize",-1222516143),(function (p__38083,_){
var map__38084 = p__38083;
var map__38084__$1 = cljs.core.__destructure_map(map__38084);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38084__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user_input_exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null));
var component_state_exists_QMARK_ = bb_web_ds_tools.views.vega_lite.common.state_key.cljs$core$IFn$_invoke$arity$1(db);
var new_db = (function (){var G__38085 = db;
var G__38085__$1 = ((cljs.core.not(user_input_exists_QMARK_))?cljs.core.assoc_in(G__38085,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-input","data-input",-1083421732),"",new cljs.core.Keyword(null,"config-input","config-input",-1590708818),bb_web_ds_tools.views.vega_lite.common.default_config_json,new cljs.core.Keyword(null,"config-mode","config-mode",-325176811),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601),null], null)], null)):G__38085);
var G__38085__$2 = ((cljs.core.not(component_state_exists_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38085__$1,bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),null,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),null,new cljs.core.Keyword(null,"active-left-tab","active-left-tab",49789881),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"active-right-tab","active-right-tab",373601478),new cljs.core.Keyword(null,"plot","plot",2086832225)], null)):G__38085__$1);
var G__38085__$3 = ((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"logs","logs",1068148008)], null))))?cljs.core.assoc_in(G__38085__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"logs","logs",1068148008)], null),cljs.core.PersistentVector.EMPTY):G__38085__$2);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"error","error",-978969032)], null)))){
return cljs.core.assoc_in(G__38085__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"error","error",-978969032)], null),null);
} else {
return G__38085__$3;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"start-debounce-loop","start-debounce-loop",630343512),null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-data-input","bb-web-ds-tools.views.vega-lite.events/set-data-input",1499556021),(function (db,p__38090){
var vec__38091 = p__38090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38091,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38091,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"data-input","data-input",-1083421732)], null),val);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-config-input","bb-web-ds-tools.views.vega-lite.events/set-config-input",-195817504),(function (p__38094,p__38095){
var map__38096 = p__38094;
var map__38096__$1 = cljs.core.__destructure_map(map__38096);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__38097 = p__38095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38097,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38097,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-input","config-input",-1590708818)], null),val),new cljs.core.Keyword(null,"core-async","core-async",1793929273),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"put!","put!",2123215223),new cljs.core.Keyword(null,"chan","chan",-2103021695),bb_web_ds_tools.views.vega_lite.events.config_chan,new cljs.core.Keyword(null,"val","val",128701612),val], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-config-mode","bb-web-ds-tools.views.vega-lite.events/set-config-mode",-2057938962),(function (db,p__38100){
var vec__38101 = p__38100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38101,(0),null);
var new_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38101,(1),null);
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var current_mode = new cljs.core.Keyword(null,"config-mode","config-mode",-325176811).cljs$core$IFn$_invoke$arity$1(user_input);
var current_input = new cljs.core.Keyword(null,"config-input","config-input",-1590708818).cljs$core$IFn$_invoke$arity$1(user_input);
var new_input = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"json","json",1279968570))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_mode,new cljs.core.Keyword(null,"edn","edn",1317840885)))))?(function (){try{var obj = JSON.parse(current_input);
var edn_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38105_38244 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38106_38245 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38107_38246 = true;
var _STAR_print_fn_STAR__temp_val__38108_38247 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38107_38246);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38108_38247);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(edn_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38106_38245);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38105_38244);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}catch (e38104){if((e38104 instanceof Error)){
var ___$1 = e38104;
return current_input;
} else {
throw e38104;

}
}})():((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"edn","edn",1317840885))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_mode,new cljs.core.Keyword(null,"json","json",1279968570)))))?(function (){try{var edn_data = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(current_input);
var obj = cljs.core.clj__GT_js(edn_data);
return JSON.stringify(obj,null,(2));
}catch (e38113){if((e38113 instanceof Error)){
var ___$1 = e38113;
return current_input;
} else {
throw e38113;

}
}})():current_input
));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-mode","config-mode",-325176811)], null),new_mode),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-input","config-input",-1590708818)], null),new_input);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-config-name","bb-web-ds-tools.views.vega-lite.events/set-active-config-name",-1030567933),(function (db,p__38114){
var vec__38115 = p__38114;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38115,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38115,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-format","bb-web-ds-tools.views.vega-lite.events/set-format",-370233380),(function (db,p__38119){
var vec__38120 = p__38119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38120,(0),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38120,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"format","format",-1306924766)], null),fmt);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-structure","bb-web-ds-tools.views.vega-lite.events/set-structure",234846197),(function (db,p__38123){
var vec__38124 = p__38123;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38124,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38124,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"structure","structure",1563832083)], null),s);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-left-tab","bb-web-ds-tools.views.vega-lite.events/set-active-left-tab",-880549579),(function (db,p__38127){
var vec__38128 = p__38127;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38128,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38128,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-left-tab","active-left-tab",49789881)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-right-tab","bb-web-ds-tools.views.vega-lite.events/set-active-right-tab",688298150),(function (db,p__38131){
var vec__38132 = p__38131;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38132,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38132,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-right-tab","active-right-tab",373601478)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","save-config","bb-web-ds-tools.views.vega-lite.events/save-config",549818302),(function (db,p__38135){
var vec__38136 = p__38135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(1),null);
var root = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var config = cljs.core.select_keys(root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config-input","config-input",-1590708818),new cljs.core.Keyword(null,"config-mode","config-mode",-325176811)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),name], null),config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","load-config","bb-web-ds-tools.views.vega-lite.events/load-config",1873202338),(function (db,p__38140){
var vec__38141 = p__38140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38141,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38141,(1),null);
var config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),name], null));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.merge,config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","delete-config","bb-web-ds-tools.views.vega-lite.events/delete-config",223100310),(function (db,p__38144){
var vec__38145 = p__38144;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38145,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38145,(1),null);
var active_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null));
var G__38148 = db;
var G__38148__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__38148,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315)], null),cljs.core.dissoc,name)
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_name,name)){
return cljs.core.assoc_in(G__38148__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),null);
} else {
return G__38148__$1;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","import-dataset","bb-web-ds-tools.views.vega-lite.events/import-dataset",-1293640811),(function (p__38150,p__38151){
var map__38152 = p__38150;
var map__38152__$1 = cljs.core.__destructure_map(map__38152);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__38153 = p__38151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38153,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38153,(1),null);
var datasets = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null));
var dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datasets,dataset_id);
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset);
var clean_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38149_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38149_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280));
}),data);
var data_str = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38156_38254 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38157_38255 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38158_38256 = true;
var _STAR_print_fn_STAR__temp_val__38159_38257 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38158_38256);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38159_38257);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clean_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38157_38255);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38156_38254);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"data-input","data-input",-1083421732)], null),data_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"format","format",-1306924766)], null),new cljs.core.Keyword(null,"edn","edn",1317840885)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"structure","structure",1563832083)], null),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-left-tab","active-left-tab",49789881)], null),new cljs.core.Keyword(null,"config","config",994861415)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-right-tab","active-right-tab",373601478)], null),new cljs.core.Keyword(null,"plot","plot",2086832225)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","parse-data","bb-web-ds-tools.views.vega-lite.events/parse-data",1051780767)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","parse-data","bb-web-ds-tools.views.vega-lite.events/parse-data",1051780767),(function (db,_){
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var component_state = bb_web_ds_tools.views.vega_lite.common.state_key.cljs$core$IFn$_invoke$arity$1(db);
var text = new cljs.core.Keyword(null,"data-input","data-input",-1083421732).cljs$core$IFn$_invoke$arity$1(user_input);
var fmt = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(component_state);
var structure = new cljs.core.Keyword(null,"structure","structure",1563832083).cljs$core$IFn$_invoke$arity$1(component_state);
var parsed = bb_web_ds_tools.utils.dataset_processing.parse_dataset.cljs$core$IFn$_invoke$arity$3(fmt,structure,text);
var schema = (function (){try{return malli.provider.provide.cljs$core$IFn$_invoke$arity$1(parsed);
}catch (e38165){if((e38165 instanceof Error)){
var e = e38165;
return ["Error inferring schema: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('');
} else {
throw e38165;

}
}})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(db,bb_web_ds_tools.views.vega_lite.common.state_key,cljs.core.assoc,new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),parsed,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","commit-config","bb-web-ds-tools.views.vega-lite.events/commit-config",-1490354792),(function (p__38171,_){
var map__38172 = p__38171;
var map__38172__$1 = cljs.core.__destructure_map(map__38172);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var input = new cljs.core.Keyword(null,"config-input","config-input",-1590708818).cljs$core$IFn$_invoke$arity$1(user_input);
var mode = new cljs.core.Keyword(null,"config-mode","config-mode",-325176811).cljs$core$IFn$_invoke$arity$1(user_input);
try{var parsed = (function (){var G__38178 = mode;
var G__38178__$1 = (((G__38178 instanceof cljs.core.Keyword))?G__38178.fqn:null);
switch (G__38178__$1) {
case "json":
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(input),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));

break;
case "edn":
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(input);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38178__$1)].join('')));

}
})();
if((!(cljs.core.map_QMARK_(parsed)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),"Config must be a map/object."], null)], null);
} else {
if(cljs.core.not(cljs.core.some((function (p1__38166_SHARP_){
return cljs.core.contains_QMARK_(parsed,p1__38166_SHARP_);
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.Keyword(null,"hconcat","hconcat",633077476),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"$schema","$schema",1635092088)], null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),"Config missing required fields (mark, layer, etc)."], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","validation-success","bb-web-ds-tools.views.vega-lite.events/validation-success",-877919319)], null)], null);

}
}
}catch (e38173){if((e38173 instanceof Error)){
var e = e38173;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),["Invalid Config: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null)], null);
} else {
throw e38173;

}
}}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),(function (db,p__38184){
var vec__38185 = p__38184;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38185,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38185,(1),null);
var logs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"logs","logs",1068148008)], null),cljs.core.PersistentVector.EMPTY);
var new_logs = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),msg,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(new Date())], null),logs)));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"error","error",-978969032)], null),msg),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"logs","logs",1068148008)], null),new_logs);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","validation-success","bb-web-ds-tools.views.vega-lite.events/validation-success",-877919319),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"error","error",-978969032)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","format-config","bb-web-ds-tools.views.vega-lite.events/format-config",-30276299),(function (db,_){
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var input = new cljs.core.Keyword(null,"config-input","config-input",-1590708818).cljs$core$IFn$_invoke$arity$1(user_input);
var mode = new cljs.core.Keyword(null,"config-mode","config-mode",-325176811).cljs$core$IFn$_invoke$arity$1(user_input);
var formatted = (function (){try{var G__38198 = mode;
var G__38198__$1 = (((G__38198 instanceof cljs.core.Keyword))?G__38198.fqn:null);
switch (G__38198__$1) {
case "json":
return JSON.stringify(JSON.parse(input),null,(2));

break;
case "edn":
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38203_38271 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38204_38272 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38205_38273 = true;
var _STAR_print_fn_STAR__temp_val__38206_38274 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38205_38273);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38206_38274);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(input));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38204_38272);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38203_38271);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38198__$1)].join('')));

}
}catch (e38197){if((e38197 instanceof Error)){
var ___$1 = e38197;
return input;
} else {
throw e38197;

}
}})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-input","config-input",-1590708818)], null),formatted);
}));

//# sourceMappingURL=bb_web_ds_tools.views.vega_lite.events.js.map
