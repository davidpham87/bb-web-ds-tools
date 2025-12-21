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
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_39647){
var state_val_39648 = (state_39647[(1)]);
if((state_val_39648 === (7))){
var inst_39643 = (state_39647[(2)]);
var state_39647__$1 = state_39647;
var statearr_39649_39810 = state_39647__$1;
(statearr_39649_39810[(2)] = inst_39643);

(statearr_39649_39810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (1))){
var state_39647__$1 = state_39647;
var statearr_39651_39812 = state_39647__$1;
(statearr_39651_39812[(2)] = null);

(statearr_39651_39812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (4))){
var inst_39594 = (state_39647[(7)]);
var inst_39594__$1 = (state_39647[(2)]);
var state_39647__$1 = (function (){var statearr_39662 = state_39647;
(statearr_39662[(7)] = inst_39594__$1);

return statearr_39662;
})();
if(cljs.core.truth_(inst_39594__$1)){
var statearr_39663_39814 = state_39647__$1;
(statearr_39663_39814[(1)] = (5));

} else {
var statearr_39664_39815 = state_39647__$1;
(statearr_39664_39815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (15))){
var inst_39615 = (state_39647[(8)]);
var inst_39599 = inst_39615;
var state_39647__$1 = (function (){var statearr_39665 = state_39647;
(statearr_39665[(9)] = inst_39599);

return statearr_39665;
})();
var statearr_39666_39816 = state_39647__$1;
(statearr_39666_39816[(2)] = null);

(statearr_39666_39816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (13))){
var inst_39638 = (state_39647[(2)]);
var state_39647__$1 = state_39647;
var statearr_39667_39817 = state_39647__$1;
(statearr_39667_39817[(2)] = inst_39638);

(statearr_39667_39817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (6))){
var state_39647__$1 = state_39647;
var statearr_39668_39818 = state_39647__$1;
(statearr_39668_39818[(2)] = null);

(statearr_39668_39818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (17))){
var inst_39636 = (state_39647[(2)]);
var state_39647__$1 = state_39647;
var statearr_39677_39819 = state_39647__$1;
(statearr_39677_39819[(2)] = inst_39636);

(statearr_39677_39819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (3))){
var inst_39645 = (state_39647[(2)]);
var state_39647__$1 = state_39647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39647__$1,inst_39645);
} else {
if((state_val_39648 === (12))){
var inst_39615 = (state_39647[(8)]);
var state_39647__$1 = state_39647;
if(cljs.core.truth_(inst_39615)){
var statearr_39678_39820 = state_39647__$1;
(statearr_39678_39820[(1)] = (15));

} else {
var statearr_39679_39821 = state_39647__$1;
(statearr_39679_39821[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (2))){
var state_39647__$1 = state_39647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39647__$1,(4),bb_web_ds_tools.views.vega_lite.events.config_chan);
} else {
if((state_val_39648 === (11))){
var inst_39623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39624 = [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","commit-config","bb-web-ds-tools.views.vega-lite.events/commit-config",-1490354792)];
var inst_39625 = (new cljs.core.PersistentVector(null,1,(5),inst_39623,inst_39624,null));
var inst_39626 = re_frame.core.dispatch(inst_39625);
var state_39647__$1 = (function (){var statearr_39680 = state_39647;
(statearr_39680[(10)] = inst_39626);

return statearr_39680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39647__$1,(14),bb_web_ds_tools.views.vega_lite.events.config_chan);
} else {
if((state_val_39648 === (9))){
var inst_39640 = (state_39647[(2)]);
var state_39647__$1 = state_39647;
var statearr_39685_39827 = state_39647__$1;
(statearr_39685_39827[(2)] = inst_39640);

(statearr_39685_39827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (5))){
var inst_39594 = (state_39647[(7)]);
var inst_39599 = inst_39594;
var state_39647__$1 = (function (){var statearr_39687 = state_39647;
(statearr_39687[(9)] = inst_39599);

return statearr_39687;
})();
var statearr_39688_39828 = state_39647__$1;
(statearr_39688_39828[(2)] = null);

(statearr_39688_39828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (14))){
var inst_39628 = (state_39647[(2)]);
var inst_39599 = inst_39628;
var state_39647__$1 = (function (){var statearr_39689 = state_39647;
(statearr_39689[(9)] = inst_39599);

return statearr_39689;
})();
var statearr_39690_39829 = state_39647__$1;
(statearr_39690_39829[(2)] = null);

(statearr_39690_39829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (16))){
var inst_39599 = (state_39647[(9)]);
var tmp39686 = inst_39599;
var inst_39599__$1 = tmp39686;
var state_39647__$1 = (function (){var statearr_39691 = state_39647;
(statearr_39691[(9)] = inst_39599__$1);

return statearr_39691;
})();
var statearr_39692_39830 = state_39647__$1;
(statearr_39692_39830[(2)] = null);

(statearr_39692_39830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (10))){
var inst_39609 = (state_39647[(11)]);
var inst_39614 = (state_39647[(2)]);
var inst_39615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39614,(0),null);
var inst_39620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39614,(1),null);
var inst_39621 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39620,inst_39609);
var state_39647__$1 = (function (){var statearr_39693 = state_39647;
(statearr_39693[(8)] = inst_39615);

return statearr_39693;
})();
if(inst_39621){
var statearr_39694_39831 = state_39647__$1;
(statearr_39694_39831[(1)] = (11));

} else {
var statearr_39695_39832 = state_39647__$1;
(statearr_39695_39832[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39648 === (8))){
var inst_39609 = (state_39647[(11)]);
var inst_39604 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39605 = [new cljs.core.Keyword("bb-web-ds-tools.events.settings","vega-lite-debounce-ms","bb-web-ds-tools.events.settings/vega-lite-debounce-ms",-1548002368)];
var inst_39606 = (new cljs.core.PersistentVector(null,1,(5),inst_39604,inst_39605,null));
var inst_39607 = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(inst_39606);
var inst_39608 = cljs.core.deref(inst_39607);
var inst_39609__$1 = cljs.core.async.timeout(inst_39608);
var inst_39610 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39611 = [bb_web_ds_tools.views.vega_lite.events.config_chan,inst_39609__$1];
var inst_39612 = (new cljs.core.PersistentVector(null,2,(5),inst_39610,inst_39611,null));
var state_39647__$1 = (function (){var statearr_39700 = state_39647;
(statearr_39700[(11)] = inst_39609__$1);

return statearr_39700;
})();
return cljs.core.async.ioc_alts_BANG_(state_39647__$1,(10),inst_39612);
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
var statearr_39701 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39701[(0)] = bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__);

(statearr_39701[(1)] = (1));

return statearr_39701;
});
var bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____1 = (function (state_39647){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_39647);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e39702){var ex__24105__auto__ = e39702;
var statearr_39703_39834 = state_39647;
(statearr_39703_39834[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_39647[(4)]))){
var statearr_39704_39835 = state_39647;
(statearr_39704_39835[(1)] = cljs.core.first((state_39647[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39836 = state_39647;
state_39647 = G__39836;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__ = function(state_39647){
switch(arguments.length){
case 0:
return bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____1.call(this,state_39647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____0;
bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____1;
return bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_39705 = f__24149__auto__();
(statearr_39705[(6)] = c__24148__auto__);

return statearr_39705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
} else {
return null;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"core-async","core-async",1793929273),(function (p__39706){
var map__39707 = p__39706;
var map__39707__$1 = cljs.core.__destructure_map(map__39707);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39707__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39707__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39707__$1,new cljs.core.Keyword(null,"val","val",128701612));
var G__39709 = op;
var G__39709__$1 = (((G__39709 instanceof cljs.core.Keyword))?G__39709.fqn:null);
switch (G__39709__$1) {
case "put!":
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,val);

break;
default:
return null;

}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","initialize","bb-web-ds-tools.views.vega-lite.events/initialize",-1222516143),(function (p__39710,_){
var map__39711 = p__39710;
var map__39711__$1 = cljs.core.__destructure_map(map__39711);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39711__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user_input_exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null));
var component_state_exists_QMARK_ = bb_web_ds_tools.views.vega_lite.common.state_key.cljs$core$IFn$_invoke$arity$1(db);
var new_db = (function (){var G__39712 = db;
var G__39712__$1 = ((cljs.core.not(user_input_exists_QMARK_))?cljs.core.assoc_in(G__39712,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-input","data-input",-1083421732),"",new cljs.core.Keyword(null,"config-input","config-input",-1590708818),bb_web_ds_tools.views.vega_lite.common.default_config_json,new cljs.core.Keyword(null,"config-mode","config-mode",-325176811),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601),null], null)], null)):G__39712);
var G__39712__$2 = ((cljs.core.not(component_state_exists_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39712__$1,bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),null,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),null,new cljs.core.Keyword(null,"active-left-tab","active-left-tab",49789881),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"active-right-tab","active-right-tab",373601478),new cljs.core.Keyword(null,"plot","plot",2086832225)], null)):G__39712__$1);
var G__39712__$3 = ((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"logs","logs",1068148008)], null))))?cljs.core.assoc_in(G__39712__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"logs","logs",1068148008)], null),cljs.core.PersistentVector.EMPTY):G__39712__$2);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"error","error",-978969032)], null)))){
return cljs.core.assoc_in(G__39712__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"error","error",-978969032)], null),null);
} else {
return G__39712__$3;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"start-debounce-loop","start-debounce-loop",630343512),null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-data-input","bb-web-ds-tools.views.vega-lite.events/set-data-input",1499556021),(function (db,p__39713){
var vec__39714 = p__39713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39714,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39714,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"data-input","data-input",-1083421732)], null),val);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-config-input","bb-web-ds-tools.views.vega-lite.events/set-config-input",-195817504),(function (p__39717,p__39718){
var map__39719 = p__39717;
var map__39719__$1 = cljs.core.__destructure_map(map__39719);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39719__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39720 = p__39718;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39720,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39720,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-input","config-input",-1590708818)], null),val),new cljs.core.Keyword(null,"core-async","core-async",1793929273),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"put!","put!",2123215223),new cljs.core.Keyword(null,"chan","chan",-2103021695),bb_web_ds_tools.views.vega_lite.events.config_chan,new cljs.core.Keyword(null,"val","val",128701612),val], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-config-mode","bb-web-ds-tools.views.vega-lite.events/set-config-mode",-2057938962),(function (db,p__39724){
var vec__39725 = p__39724;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39725,(0),null);
var new_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39725,(1),null);
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var current_mode = new cljs.core.Keyword(null,"config-mode","config-mode",-325176811).cljs$core$IFn$_invoke$arity$1(user_input);
var current_input = new cljs.core.Keyword(null,"config-input","config-input",-1590708818).cljs$core$IFn$_invoke$arity$1(user_input);
var new_input = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"json","json",1279968570))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_mode,new cljs.core.Keyword(null,"edn","edn",1317840885)))))?(function (){try{var obj = JSON.parse(current_input);
var edn_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39730_39839 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39731_39840 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39732_39841 = true;
var _STAR_print_fn_STAR__temp_val__39733_39842 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39732_39841);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39733_39842);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(edn_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39731_39840);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39730_39839);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}catch (e39729){if((e39729 instanceof Error)){
var ___$1 = e39729;
return current_input;
} else {
throw e39729;

}
}})():((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"edn","edn",1317840885))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_mode,new cljs.core.Keyword(null,"json","json",1279968570)))))?(function (){try{var edn_data = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(current_input);
var obj = cljs.core.clj__GT_js(edn_data);
return JSON.stringify(obj,null,(2));
}catch (e39734){if((e39734 instanceof Error)){
var ___$1 = e39734;
return current_input;
} else {
throw e39734;

}
}})():current_input
));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-mode","config-mode",-325176811)], null),new_mode),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-input","config-input",-1590708818)], null),new_input);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-config-name","bb-web-ds-tools.views.vega-lite.events/set-active-config-name",-1030567933),(function (db,p__39736){
var vec__39737 = p__39736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39737,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39737,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-format","bb-web-ds-tools.views.vega-lite.events/set-format",-370233380),(function (db,p__39740){
var vec__39741 = p__39740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39741,(0),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39741,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"format","format",-1306924766)], null),fmt);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-structure","bb-web-ds-tools.views.vega-lite.events/set-structure",234846197),(function (db,p__39745){
var vec__39746 = p__39745;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39746,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39746,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"structure","structure",1563832083)], null),s);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-left-tab","bb-web-ds-tools.views.vega-lite.events/set-active-left-tab",-880549579),(function (db,p__39749){
var vec__39750 = p__39749;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39750,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39750,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-left-tab","active-left-tab",49789881)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-right-tab","bb-web-ds-tools.views.vega-lite.events/set-active-right-tab",688298150),(function (db,p__39754){
var vec__39755 = p__39754;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39755,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39755,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-right-tab","active-right-tab",373601478)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","save-config","bb-web-ds-tools.views.vega-lite.events/save-config",549818302),(function (db,p__39759){
var vec__39760 = p__39759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39760,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39760,(1),null);
var root = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var config = cljs.core.select_keys(root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config-input","config-input",-1590708818),new cljs.core.Keyword(null,"config-mode","config-mode",-325176811)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),name], null),config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","load-config","bb-web-ds-tools.views.vega-lite.events/load-config",1873202338),(function (db,p__39763){
var vec__39764 = p__39763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39764,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39764,(1),null);
var config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),name], null));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.merge,config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","delete-config","bb-web-ds-tools.views.vega-lite.events/delete-config",223100310),(function (db,p__39768){
var vec__39769 = p__39768;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39769,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39769,(1),null);
var active_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null));
var G__39772 = db;
var G__39772__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__39772,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315)], null),cljs.core.dissoc,name)
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_name,name)){
return cljs.core.assoc_in(G__39772__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),null);
} else {
return G__39772__$1;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","import-dataset","bb-web-ds-tools.views.vega-lite.events/import-dataset",-1293640811),(function (p__39775,p__39776){
var map__39777 = p__39775;
var map__39777__$1 = cljs.core.__destructure_map(map__39777);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39777__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39778 = p__39776;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39778,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39778,(1),null);
var datasets = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null));
var dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datasets,dataset_id);
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset);
var clean_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39774_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39774_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280));
}),data);
var data_str = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39781_39844 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39782_39845 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39783_39846 = true;
var _STAR_print_fn_STAR__temp_val__39784_39847 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39783_39846);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39784_39847);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clean_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39782_39845);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39781_39844);
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
}catch (e39789){if((e39789 instanceof Error)){
var e = e39789;
return ["Error inferring schema: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('');
} else {
throw e39789;

}
}})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(db,bb_web_ds_tools.views.vega_lite.common.state_key,cljs.core.assoc,new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),parsed,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","commit-config","bb-web-ds-tools.views.vega-lite.events/commit-config",-1490354792),(function (p__39792,_){
var map__39793 = p__39792;
var map__39793__$1 = cljs.core.__destructure_map(map__39793);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39793__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var input = new cljs.core.Keyword(null,"config-input","config-input",-1590708818).cljs$core$IFn$_invoke$arity$1(user_input);
var mode = new cljs.core.Keyword(null,"config-mode","config-mode",-325176811).cljs$core$IFn$_invoke$arity$1(user_input);
try{var parsed = (function (){var G__39795 = mode;
var G__39795__$1 = (((G__39795 instanceof cljs.core.Keyword))?G__39795.fqn:null);
switch (G__39795__$1) {
case "json":
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(input),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));

break;
case "edn":
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(input);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39795__$1)].join('')));

}
})();
if((!(cljs.core.map_QMARK_(parsed)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),"Config must be a map/object."], null)], null);
} else {
if(cljs.core.not(cljs.core.some((function (p1__39791_SHARP_){
return cljs.core.contains_QMARK_(parsed,p1__39791_SHARP_);
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.Keyword(null,"hconcat","hconcat",633077476),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"$schema","$schema",1635092088)], null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),"Config missing required fields (mark, layer, etc)."], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","validation-success","bb-web-ds-tools.views.vega-lite.events/validation-success",-877919319)], null)], null);

}
}
}catch (e39794){if((e39794 instanceof Error)){
var e = e39794;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),["Invalid Config: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null)], null);
} else {
throw e39794;

}
}}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),(function (db,p__39797){
var vec__39799 = p__39797;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39799,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39799,(1),null);
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
var formatted = (function (){try{var G__39803 = mode;
var G__39803__$1 = (((G__39803 instanceof cljs.core.Keyword))?G__39803.fqn:null);
switch (G__39803__$1) {
case "json":
return JSON.stringify(JSON.parse(input),null,(2));

break;
case "edn":
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39804_39889 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39805_39890 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39806_39891 = true;
var _STAR_print_fn_STAR__temp_val__39807_39892 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39806_39891);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39807_39892);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(input));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39805_39890);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39804_39889);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39803__$1)].join('')));

}
}catch (e39802){if((e39802 instanceof Error)){
var ___$1 = e39802;
return input;
} else {
throw e39802;

}
}})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-input","config-input",-1590708818)], null),formatted);
}));

//# sourceMappingURL=bb_web_ds_tools.views.vega_lite.events.js.map
