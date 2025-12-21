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
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_39667){
var state_val_39668 = (state_39667[(1)]);
if((state_val_39668 === (7))){
var inst_39663 = (state_39667[(2)]);
var state_39667__$1 = state_39667;
var statearr_39670_39818 = state_39667__$1;
(statearr_39670_39818[(2)] = inst_39663);

(statearr_39670_39818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (1))){
var state_39667__$1 = state_39667;
var statearr_39671_39819 = state_39667__$1;
(statearr_39671_39819[(2)] = null);

(statearr_39671_39819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (4))){
var inst_39621 = (state_39667[(7)]);
var inst_39621__$1 = (state_39667[(2)]);
var state_39667__$1 = (function (){var statearr_39672 = state_39667;
(statearr_39672[(7)] = inst_39621__$1);

return statearr_39672;
})();
if(cljs.core.truth_(inst_39621__$1)){
var statearr_39675_39820 = state_39667__$1;
(statearr_39675_39820[(1)] = (5));

} else {
var statearr_39676_39821 = state_39667__$1;
(statearr_39676_39821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (15))){
var inst_39639 = (state_39667[(8)]);
var inst_39623 = inst_39639;
var state_39667__$1 = (function (){var statearr_39677 = state_39667;
(statearr_39677[(9)] = inst_39623);

return statearr_39677;
})();
var statearr_39678_39822 = state_39667__$1;
(statearr_39678_39822[(2)] = null);

(statearr_39678_39822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (13))){
var inst_39658 = (state_39667[(2)]);
var state_39667__$1 = state_39667;
var statearr_39680_39823 = state_39667__$1;
(statearr_39680_39823[(2)] = inst_39658);

(statearr_39680_39823[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (6))){
var state_39667__$1 = state_39667;
var statearr_39681_39824 = state_39667__$1;
(statearr_39681_39824[(2)] = null);

(statearr_39681_39824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (17))){
var inst_39656 = (state_39667[(2)]);
var state_39667__$1 = state_39667;
var statearr_39683_39825 = state_39667__$1;
(statearr_39683_39825[(2)] = inst_39656);

(statearr_39683_39825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (3))){
var inst_39665 = (state_39667[(2)]);
var state_39667__$1 = state_39667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39667__$1,inst_39665);
} else {
if((state_val_39668 === (12))){
var inst_39639 = (state_39667[(8)]);
var state_39667__$1 = state_39667;
if(cljs.core.truth_(inst_39639)){
var statearr_39688_39826 = state_39667__$1;
(statearr_39688_39826[(1)] = (15));

} else {
var statearr_39689_39827 = state_39667__$1;
(statearr_39689_39827[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (2))){
var state_39667__$1 = state_39667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39667__$1,(4),bb_web_ds_tools.views.vega_lite.events.config_chan);
} else {
if((state_val_39668 === (11))){
var inst_39643 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39644 = [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","commit-config","bb-web-ds-tools.views.vega-lite.events/commit-config",-1490354792)];
var inst_39645 = (new cljs.core.PersistentVector(null,1,(5),inst_39643,inst_39644,null));
var inst_39646 = re_frame.core.dispatch(inst_39645);
var state_39667__$1 = (function (){var statearr_39690 = state_39667;
(statearr_39690[(10)] = inst_39646);

return statearr_39690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39667__$1,(14),bb_web_ds_tools.views.vega_lite.events.config_chan);
} else {
if((state_val_39668 === (9))){
var inst_39660 = (state_39667[(2)]);
var state_39667__$1 = state_39667;
var statearr_39691_39828 = state_39667__$1;
(statearr_39691_39828[(2)] = inst_39660);

(statearr_39691_39828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (5))){
var inst_39621 = (state_39667[(7)]);
var inst_39623 = inst_39621;
var state_39667__$1 = (function (){var statearr_39693 = state_39667;
(statearr_39693[(9)] = inst_39623);

return statearr_39693;
})();
var statearr_39695_39829 = state_39667__$1;
(statearr_39695_39829[(2)] = null);

(statearr_39695_39829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (14))){
var inst_39648 = (state_39667[(2)]);
var inst_39623 = inst_39648;
var state_39667__$1 = (function (){var statearr_39696 = state_39667;
(statearr_39696[(9)] = inst_39623);

return statearr_39696;
})();
var statearr_39697_39830 = state_39667__$1;
(statearr_39697_39830[(2)] = null);

(statearr_39697_39830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (16))){
var inst_39623 = (state_39667[(9)]);
var tmp39692 = inst_39623;
var inst_39623__$1 = tmp39692;
var state_39667__$1 = (function (){var statearr_39698 = state_39667;
(statearr_39698[(9)] = inst_39623__$1);

return statearr_39698;
})();
var statearr_39699_39831 = state_39667__$1;
(statearr_39699_39831[(2)] = null);

(statearr_39699_39831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (10))){
var inst_39633 = (state_39667[(11)]);
var inst_39638 = (state_39667[(2)]);
var inst_39639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39638,(0),null);
var inst_39640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39638,(1),null);
var inst_39641 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39640,inst_39633);
var state_39667__$1 = (function (){var statearr_39700 = state_39667;
(statearr_39700[(8)] = inst_39639);

return statearr_39700;
})();
if(inst_39641){
var statearr_39701_39832 = state_39667__$1;
(statearr_39701_39832[(1)] = (11));

} else {
var statearr_39702_39833 = state_39667__$1;
(statearr_39702_39833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39668 === (8))){
var inst_39633 = (state_39667[(11)]);
var inst_39628 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39629 = [new cljs.core.Keyword("bb-web-ds-tools.events.settings","vega-lite-debounce-ms","bb-web-ds-tools.events.settings/vega-lite-debounce-ms",-1548002368)];
var inst_39630 = (new cljs.core.PersistentVector(null,1,(5),inst_39628,inst_39629,null));
var inst_39631 = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(inst_39630);
var inst_39632 = cljs.core.deref(inst_39631);
var inst_39633__$1 = cljs.core.async.timeout(inst_39632);
var inst_39634 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39635 = [bb_web_ds_tools.views.vega_lite.events.config_chan,inst_39633__$1];
var inst_39636 = (new cljs.core.PersistentVector(null,2,(5),inst_39634,inst_39635,null));
var state_39667__$1 = (function (){var statearr_39704 = state_39667;
(statearr_39704[(11)] = inst_39633__$1);

return statearr_39704;
})();
return cljs.core.async.ioc_alts_BANG_(state_39667__$1,(10),inst_39636);
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
var statearr_39705 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39705[(0)] = bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__);

(statearr_39705[(1)] = (1));

return statearr_39705;
});
var bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____1 = (function (state_39667){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_39667);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e39706){var ex__24105__auto__ = e39706;
var statearr_39707_39834 = state_39667;
(statearr_39707_39834[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_39667[(4)]))){
var statearr_39708_39835 = state_39667;
(statearr_39708_39835[(1)] = cljs.core.first((state_39667[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39836 = state_39667;
state_39667 = G__39836;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__ = function(state_39667){
switch(arguments.length){
case 0:
return bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____1.call(this,state_39667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____0;
bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto____1;
return bb_web_ds_tools$views$vega_lite$events$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_39709 = f__24149__auto__();
(statearr_39709[(6)] = c__24148__auto__);

return statearr_39709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
} else {
return null;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"core-async","core-async",1793929273),(function (p__39710){
var map__39712 = p__39710;
var map__39712__$1 = cljs.core.__destructure_map(map__39712);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39712__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39712__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39712__$1,new cljs.core.Keyword(null,"val","val",128701612));
var G__39713 = op;
var G__39713__$1 = (((G__39713 instanceof cljs.core.Keyword))?G__39713.fqn:null);
switch (G__39713__$1) {
case "put!":
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,val);

break;
default:
return null;

}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","initialize","bb-web-ds-tools.views.vega-lite.events/initialize",-1222516143),(function (p__39714,_){
var map__39715 = p__39714;
var map__39715__$1 = cljs.core.__destructure_map(map__39715);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39715__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user_input_exists_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null));
var component_state_exists_QMARK_ = bb_web_ds_tools.views.vega_lite.common.state_key.cljs$core$IFn$_invoke$arity$1(db);
var new_db = (function (){var G__39716 = db;
var G__39716__$1 = ((cljs.core.not(user_input_exists_QMARK_))?cljs.core.assoc_in(G__39716,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-input","data-input",-1083421732),"",new cljs.core.Keyword(null,"config-input","config-input",-1590708818),bb_web_ds_tools.views.vega_lite.common.default_config_json,new cljs.core.Keyword(null,"config-mode","config-mode",-325176811),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601),null], null)], null)):G__39716);
var G__39716__$2 = ((cljs.core.not(component_state_exists_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39716__$1,bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"structure","structure",1563832083),new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),null,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),null,new cljs.core.Keyword(null,"active-left-tab","active-left-tab",49789881),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"active-right-tab","active-right-tab",373601478),new cljs.core.Keyword(null,"plot","plot",2086832225)], null)):G__39716__$1);
var G__39716__$3 = ((cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"logs","logs",1068148008)], null))))?cljs.core.assoc_in(G__39716__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"logs","logs",1068148008)], null),cljs.core.PersistentVector.EMPTY):G__39716__$2);
if(cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"error","error",-978969032)], null)))){
return cljs.core.assoc_in(G__39716__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"error","error",-978969032)], null),null);
} else {
return G__39716__$3;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"start-debounce-loop","start-debounce-loop",630343512),null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-data-input","bb-web-ds-tools.views.vega-lite.events/set-data-input",1499556021),(function (db,p__39717){
var vec__39718 = p__39717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39718,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39718,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"data-input","data-input",-1083421732)], null),val);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-config-input","bb-web-ds-tools.views.vega-lite.events/set-config-input",-195817504),(function (p__39722,p__39723){
var map__39724 = p__39722;
var map__39724__$1 = cljs.core.__destructure_map(map__39724);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39724__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39725 = p__39723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39725,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39725,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-input","config-input",-1590708818)], null),val),new cljs.core.Keyword(null,"core-async","core-async",1793929273),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"put!","put!",2123215223),new cljs.core.Keyword(null,"chan","chan",-2103021695),bb_web_ds_tools.views.vega_lite.events.config_chan,new cljs.core.Keyword(null,"val","val",128701612),val], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-config-mode","bb-web-ds-tools.views.vega-lite.events/set-config-mode",-2057938962),(function (db,p__39731){
var vec__39732 = p__39731;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39732,(0),null);
var new_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39732,(1),null);
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var current_mode = new cljs.core.Keyword(null,"config-mode","config-mode",-325176811).cljs$core$IFn$_invoke$arity$1(user_input);
var current_input = new cljs.core.Keyword(null,"config-input","config-input",-1590708818).cljs$core$IFn$_invoke$arity$1(user_input);
var new_input = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"json","json",1279968570))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_mode,new cljs.core.Keyword(null,"edn","edn",1317840885)))))?(function (){try{var obj = JSON.parse(current_input);
var edn_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39737_39838 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39738_39839 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39739_39840 = true;
var _STAR_print_fn_STAR__temp_val__39740_39841 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39739_39840);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39740_39841);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(edn_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39738_39839);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39737_39838);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}catch (e39736){if((e39736 instanceof Error)){
var ___$1 = e39736;
return current_input;
} else {
throw e39736;

}
}})():((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_mode,new cljs.core.Keyword(null,"edn","edn",1317840885))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_mode,new cljs.core.Keyword(null,"json","json",1279968570)))))?(function (){try{var edn_data = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(current_input);
var obj = cljs.core.clj__GT_js(edn_data);
return JSON.stringify(obj,null,(2));
}catch (e39741){if((e39741 instanceof Error)){
var ___$1 = e39741;
return current_input;
} else {
throw e39741;

}
}})():current_input
));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-mode","config-mode",-325176811)], null),new_mode),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-input","config-input",-1590708818)], null),new_input);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-config-name","bb-web-ds-tools.views.vega-lite.events/set-active-config-name",-1030567933),(function (db,p__39742){
var vec__39743 = p__39742;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39743,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39743,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-format","bb-web-ds-tools.views.vega-lite.events/set-format",-370233380),(function (db,p__39747){
var vec__39749 = p__39747;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39749,(0),null);
var fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39749,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"format","format",-1306924766)], null),fmt);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-structure","bb-web-ds-tools.views.vega-lite.events/set-structure",234846197),(function (db,p__39752){
var vec__39753 = p__39752;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39753,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39753,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"structure","structure",1563832083)], null),s);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-left-tab","bb-web-ds-tools.views.vega-lite.events/set-active-left-tab",-880549579),(function (db,p__39756){
var vec__39758 = p__39756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39758,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39758,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-left-tab","active-left-tab",49789881)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-right-tab","bb-web-ds-tools.views.vega-lite.events/set-active-right-tab",688298150),(function (db,p__39762){
var vec__39763 = p__39762;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39763,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39763,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.common.state_key,new cljs.core.Keyword(null,"active-right-tab","active-right-tab",373601478)], null),tab);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","save-config","bb-web-ds-tools.views.vega-lite.events/save-config",549818302),(function (db,p__39766){
var vec__39767 = p__39766;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39767,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39767,(1),null);
var root = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var config = cljs.core.select_keys(root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config-input","config-input",-1590708818),new cljs.core.Keyword(null,"config-mode","config-mode",-325176811)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),name], null),config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","load-config","bb-web-ds-tools.views.vega-lite.events/load-config",1873202338),(function (db,p__39770){
var vec__39771 = p__39770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39771,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39771,(1),null);
var config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315),name], null));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null),cljs.core.merge,config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","delete-config","bb-web-ds-tools.views.vega-lite.events/delete-config",223100310),(function (db,p__39776){
var vec__39777 = p__39776;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39777,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39777,(1),null);
var active_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null));
var G__39780 = db;
var G__39780__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__39780,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"saved-configs","saved-configs",1634320315)], null),cljs.core.dissoc,name)
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_name,name)){
return cljs.core.assoc_in(G__39780__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"active-config-name","active-config-name",-312789601)], null),null);
} else {
return G__39780__$1;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","import-dataset","bb-web-ds-tools.views.vega-lite.events/import-dataset",-1293640811),(function (p__39782,p__39783){
var map__39784 = p__39782;
var map__39784__$1 = cljs.core.__destructure_map(map__39784);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39784__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__39785 = p__39783;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39785,(0),null);
var dataset_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39785,(1),null);
var datasets = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"items","items",1031954938)], null));
var dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datasets,dataset_id);
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(dataset);
var clean_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39781_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39781_SHARP_,new cljs.core.Keyword(null,"_uuid","_uuid",797900280));
}),data);
var data_str = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39789_39857 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39790_39858 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39791_39859 = true;
var _STAR_print_fn_STAR__temp_val__39792_39860 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39791_39859);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39792_39860);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clean_data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39790_39858);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39789_39857);
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
}catch (e39798){if((e39798 instanceof Error)){
var e = e39798;
return ["Error inferring schema: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('');
} else {
throw e39798;

}
}})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(db,bb_web_ds_tools.views.vega_lite.common.state_key,cljs.core.assoc,new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),parsed,new cljs.core.Keyword(null,"inferred-schema","inferred-schema",1558411545),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","commit-config","bb-web-ds-tools.views.vega-lite.events/commit-config",-1490354792),(function (p__39800,_){
var map__39801 = p__39800;
var map__39801__$1 = cljs.core.__destructure_map(map__39801);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39801__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user_input = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var input = new cljs.core.Keyword(null,"config-input","config-input",-1590708818).cljs$core$IFn$_invoke$arity$1(user_input);
var mode = new cljs.core.Keyword(null,"config-mode","config-mode",-325176811).cljs$core$IFn$_invoke$arity$1(user_input);
try{var parsed = (function (){var G__39804 = mode;
var G__39804__$1 = (((G__39804 instanceof cljs.core.Keyword))?G__39804.fqn:null);
switch (G__39804__$1) {
case "json":
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(input),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));

break;
case "edn":
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(input);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39804__$1)].join('')));

}
})();
if((!(cljs.core.map_QMARK_(parsed)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),"Config must be a map/object."], null)], null);
} else {
if(cljs.core.not(cljs.core.some((function (p1__39799_SHARP_){
return cljs.core.contains_QMARK_(parsed,p1__39799_SHARP_);
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.Keyword(null,"hconcat","hconcat",633077476),new cljs.core.Keyword(null,"vconcat","vconcat",-2012274180),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"facet","facet",-801327574),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"$schema","$schema",1635092088)], null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),"Config missing required fields (mark, layer, etc)."], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","validation-success","bb-web-ds-tools.views.vega-lite.events/validation-success",-877919319)], null)], null);

}
}
}catch (e39803){if((e39803 instanceof Error)){
var e = e39803;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),["Invalid Config: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null)], null);
} else {
throw e39803;

}
}}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","log-error","bb-web-ds-tools.views.vega-lite.events/log-error",1968812207),(function (db,p__39806){
var vec__39807 = p__39806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39807,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39807,(1),null);
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
var formatted = (function (){try{var G__39811 = mode;
var G__39811__$1 = (((G__39811 instanceof cljs.core.Keyword))?G__39811.fqn:null);
switch (G__39811__$1) {
case "json":
return JSON.stringify(JSON.parse(input),null,(2));

break;
case "edn":
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39813_39882 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39814_39883 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39815_39884 = true;
var _STAR_print_fn_STAR__temp_val__39816_39885 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39815_39884);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39816_39885);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(input));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39814_39883);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39813_39882);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39811__$1)].join('')));

}
}catch (e39810){if((e39810 instanceof Error)){
var ___$1 = e39810;
return input;
} else {
throw e39810;

}
}})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"config-input","config-input",-1590708818)], null),formatted);
}));

//# sourceMappingURL=bb_web_ds_tools.views.vega_lite.events.js.map
