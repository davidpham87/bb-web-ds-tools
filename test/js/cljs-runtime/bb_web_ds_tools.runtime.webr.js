goog.provide('bb_web_ds_tools.runtime.webr');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.runtime !== 'undefined') && (typeof bb_web_ds_tools.runtime.webr !== 'undefined') && (typeof bb_web_ds_tools.runtime.webr.webr_instance !== 'undefined')){
} else {
bb_web_ds_tools.runtime.webr.webr_instance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
bb_web_ds_tools.runtime.webr.to_js = (function bb_web_ds_tools$runtime$webr$to_js(obj){
return obj.toJs();
});
bb_web_ds_tools.runtime.webr.get_shelter_class = (function bb_web_ds_tools$runtime$webr$get_shelter_class(webr){
return webr.Shelter;
});
bb_web_ds_tools.runtime.webr.init_obj = (function bb_web_ds_tools$runtime$webr$init_obj(obj){
return obj.init();
});
bb_web_ds_tools.runtime.webr.capture_r = (function bb_web_ds_tools$runtime$webr$capture_r(shelter,code,options){
return shelter.captureR(code,options);
});
bb_web_ds_tools.runtime.webr.purge_shelter = (function bb_web_ds_tools$runtime$webr$purge_shelter(shelter){
return shelter.purge();
});
bb_web_ds_tools.runtime.webr.get_result_props = (function bb_web_ds_tools$runtime$webr$get_result_props(res){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [res.output,res.images,res.result], null);
});
bb_web_ds_tools.runtime.webr.get_width = (function bb_web_ds_tools$runtime$webr$get_width(obj){
return obj.width;
});
bb_web_ds_tools.runtime.webr.get_height = (function bb_web_ds_tools$runtime$webr$get_height(obj){
return obj.height;
});
bb_web_ds_tools.runtime.webr.get_global_env = (function bb_web_ds_tools$runtime$webr$get_global_env(webr){
return webr.globalEnv;
});
bb_web_ds_tools.runtime.webr.bind_r = (function bb_web_ds_tools$runtime$webr$bind_r(env,name,val){
return env.bind(name,val);
});
bb_web_ds_tools.runtime.webr.get_r = (function bb_web_ds_tools$runtime$webr$get_r(env,name){
return env.get(name);
});
bb_web_ds_tools.runtime.webr.input_buffer = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1000));
bb_web_ds_tools.runtime.webr.flush_BANG_ = bb_web_ds_tools.components.async_buffer.create(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),bb_web_ds_tools.runtime.webr.input_buffer,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),(50),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488),(function (xs){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",xs)], null),new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));
})], null));
bb_web_ds_tools.runtime.webr.portal_submit = (function bb_web_ds_tools$runtime$webr$portal_submit(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51420 = arguments.length;
var i__5750__auto___51424 = (0);
while(true){
if((i__5750__auto___51424 < len__5749__auto___51420)){
args__5755__auto__.push((arguments[i__5750__auto___51424]));

var G__51425 = (i__5750__auto___51424 + (1));
i__5750__auto___51424 = G__51425;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__50139,p__50140){
var map__50141 = p__50139;
var map__50141__$1 = cljs.core.__destructure_map(map__50141);
var value = map__50141__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50141__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__50142 = p__50140;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50142,(0),null);
var viewer__$1 = (function (){var or__5025__auto__ = viewer;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"code","code",1586293142))){
return new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"result","result",1415092211))){
var v = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.map_QMARK_(v);
if(and__5023__auto__){
var or__5025__auto____$1 = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"beatmap","beatmap",1748689117).cljs$core$IFn$_invoke$arity$1(v);
}
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.Keyword("portal.viewer","image","portal.viewer/image",-61327676);
} else {
return new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537);

}
} else {
if(cljs.core.truth_((function (){var G__50146 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__50145 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__50145.cljs$core$IFn$_invoke$arity$1 ? fexpr__50145.cljs$core$IFn$_invoke$arity$1(G__50146) : fexpr__50145.call(null,G__50146));
})())){
return new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442);
} else {
return null;

}
}
}
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"code","code",1586293142));
if(and__5023__auto__){
return text;
} else {
return and__5023__auto__;
}
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),text,viewer__$1], null));
} else {
if(cljs.core.truth_(text)){
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_50150){
var state_val_50151 = (state_50150[(1)]);
if((state_val_50151 === (1))){
var state_50150__$1 = state_50150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50150__$1,(2),bb_web_ds_tools.runtime.webr.input_buffer,text);
} else {
if((state_val_50151 === (2))){
var inst_50148 = (state_50150[(2)]);
var state_50150__$1 = state_50150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50150__$1,inst_50148);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0 = (function (){
var statearr_50152 = [null,null,null,null,null,null,null];
(statearr_50152[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32391__auto__);

(statearr_50152[(1)] = (1));

return statearr_50152;
});
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1 = (function (state_50150){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_50150);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e50153){var ex__32394__auto__ = e50153;
var statearr_50154_51439 = state_50150;
(statearr_50154_51439[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_50150[(4)]))){
var statearr_50155_51440 = state_50150;
(statearr_50155_51440[(1)] = cljs.core.first((state_50150[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51441 = state_50150;
state_50150 = G__51441;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__ = function(state_50150){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1.call(this,state_50150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_50156 = f__32472__auto__();
(statearr_50156[(6)] = c__32471__auto__);

return statearr_50156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),viewer__$1], null));

}
}
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq50137){
var G__50138 = cljs.core.first(seq50137);
var seq50137__$1 = cljs.core.next(seq50137);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50138,seq50137__$1);
}));

bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url = (function bb_web_ds_tools$runtime$webr$image_bitmap__GT_data_url(image_bitmap){
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
(canvas.width = image_bitmap.width);

(canvas.height = image_bitmap.height);

ctx.drawImage(image_bitmap,(0),(0));

return canvas.toDataURL();
});
bb_web_ds_tools.runtime.webr.process_output_msg = (function bb_web_ds_tools$runtime$webr$process_output_msg(msg){
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_50226){
var state_val_50227 = (state_50226[(1)]);
if((state_val_50227 === (7))){
var inst_50222 = (state_50226[(2)]);
var state_50226__$1 = state_50226;
var statearr_50235_51451 = state_50226__$1;
(statearr_50235_51451[(2)] = inst_50222);

(statearr_50235_51451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (20))){
var inst_50202 = (state_50226[(7)]);
var inst_50206 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50202);
var state_50226__$1 = state_50226;
var statearr_50236_51452 = state_50226__$1;
(statearr_50236_51452[(2)] = inst_50206);

(statearr_50236_51452[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (1))){
var inst_50157 = (state_50226[(8)]);
var inst_50157__$1 = msg.type;
var inst_50158 = msg.data;
var inst_50159 = ["stderr",null,"stdout",null];
var inst_50160 = (new cljs.core.PersistentArrayMap(null,2,inst_50159,null));
var inst_50161 = (new cljs.core.PersistentHashSet(null,inst_50160,null));
var inst_50162 = (inst_50161.cljs$core$IFn$_invoke$arity$1 ? inst_50161.cljs$core$IFn$_invoke$arity$1(inst_50157__$1) : inst_50161.call(null,inst_50157__$1));
var state_50226__$1 = (function (){var statearr_50237 = state_50226;
(statearr_50237[(8)] = inst_50157__$1);

(statearr_50237[(9)] = inst_50158);

return statearr_50237;
})();
if(cljs.core.truth_(inst_50162)){
var statearr_50238_51462 = state_50226__$1;
(statearr_50238_51462[(1)] = (2));

} else {
var statearr_50239_51463 = state_50226__$1;
(statearr_50239_51463[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (24))){
var inst_50220 = (state_50226[(2)]);
var state_50226__$1 = state_50226;
var statearr_50240_51464 = state_50226__$1;
(statearr_50240_51464[(2)] = inst_50220);

(statearr_50240_51464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (4))){
var inst_50224 = (state_50226[(2)]);
var state_50226__$1 = state_50226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50226__$1,inst_50224);
} else {
if((state_val_50227 === (15))){
var inst_50196 = (state_50226[(2)]);
var state_50226__$1 = state_50226;
if(cljs.core.truth_(inst_50196)){
var statearr_50241_51473 = state_50226__$1;
(statearr_50241_51473[(1)] = (16));

} else {
var statearr_50242_51474 = state_50226__$1;
(statearr_50242_51474[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (21))){
var inst_50157 = (state_50226[(8)]);
var inst_50208 = (state_50226[(2)]);
var inst_50209 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50210 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_50157);
var inst_50211 = [inst_50210,inst_50208];
var inst_50212 = cljs.core.PersistentHashMap.fromArrays(inst_50209,inst_50211);
var _ = (function (){var statearr_50243 = state_50226;
(statearr_50243[(4)] = cljs.core.rest((state_50226[(4)])));

return statearr_50243;
})();
var state_50226__$1 = state_50226;
var statearr_50244_51475 = state_50226__$1;
(statearr_50244_51475[(2)] = inst_50212);

(statearr_50244_51475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (13))){
var inst_50188 = (state_50226[(10)]);
var inst_50191 = cljs.core.ex_data(inst_50188);
var inst_50192 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50191);
var inst_50193 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50192,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50226__$1 = state_50226;
var statearr_50249_51477 = state_50226__$1;
(statearr_50249_51477[(2)] = inst_50193);

(statearr_50249_51477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (22))){
var state_50226__$1 = state_50226;
var statearr_50250_51481 = state_50226__$1;
(statearr_50250_51481[(2)] = null);

(statearr_50250_51481[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (6))){
var state_50226__$1 = state_50226;
var statearr_50251_51482 = state_50226__$1;
(statearr_50251_51482[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (17))){
var inst_50188 = (state_50226[(10)]);
var state_50226__$1 = state_50226;
var statearr_50253_51483 = state_50226__$1;
(statearr_50253_51483[(2)] = inst_50188);

(statearr_50253_51483[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (3))){
var inst_50157 = (state_50226[(8)]);
var inst_50169 = ["message",null,"warning",null];
var inst_50170 = (new cljs.core.PersistentArrayMap(null,2,inst_50169,null));
var inst_50171 = (new cljs.core.PersistentHashSet(null,inst_50170,null));
var inst_50172 = (inst_50171.cljs$core$IFn$_invoke$arity$1 ? inst_50171.cljs$core$IFn$_invoke$arity$1(inst_50157) : inst_50171.call(null,inst_50157));
var state_50226__$1 = state_50226;
if(cljs.core.truth_(inst_50172)){
var statearr_50254_51484 = state_50226__$1;
(statearr_50254_51484[(1)] = (5));

} else {
var statearr_50255_51485 = state_50226__$1;
(statearr_50255_51485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (12))){
var inst_50188 = (state_50226[(10)]);
var inst_50189 = (state_50226[(11)]);
var inst_50188__$1 = (state_50226[(2)]);
var inst_50189__$1 = (inst_50188__$1 instanceof cljs.core.ExceptionInfo);
var state_50226__$1 = (function (){var statearr_50256 = state_50226;
(statearr_50256[(10)] = inst_50188__$1);

(statearr_50256[(11)] = inst_50189__$1);

return statearr_50256;
})();
if(cljs.core.truth_(inst_50189__$1)){
var statearr_50257_51486 = state_50226__$1;
(statearr_50257_51486[(1)] = (13));

} else {
var statearr_50258_51487 = state_50226__$1;
(statearr_50258_51487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (2))){
var inst_50157 = (state_50226[(8)]);
var inst_50158 = (state_50226[(9)]);
var inst_50164 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50165 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_50157);
var inst_50166 = [inst_50165,inst_50158];
var inst_50167 = cljs.core.PersistentHashMap.fromArrays(inst_50164,inst_50166);
var state_50226__$1 = state_50226;
var statearr_50259_51488 = state_50226__$1;
(statearr_50259_51488[(2)] = inst_50167);

(statearr_50259_51488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (23))){
var state_50226__$1 = state_50226;
var statearr_50261_51489 = state_50226__$1;
(statearr_50261_51489[(2)] = null);

(statearr_50261_51489[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (19))){
var inst_50203 = (state_50226[(12)]);
var state_50226__$1 = state_50226;
var statearr_50262_51490 = state_50226__$1;
(statearr_50262_51490[(2)] = inst_50203);

(statearr_50262_51490[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (11))){
var _ = (function (){var statearr_50263 = state_50226;
(statearr_50263[(4)] = cljs.core.rest((state_50226[(4)])));

return statearr_50263;
})();
var state_50226__$1 = state_50226;
var ex50260 = (state_50226__$1[(2)]);
var statearr_50264_51493 = state_50226__$1;
(statearr_50264_51493[(5)] = ex50260);


var statearr_50265_51494 = state_50226__$1;
(statearr_50265_51494[(1)] = (10));

(statearr_50265_51494[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (9))){
var inst_50215 = (state_50226[(2)]);
var state_50226__$1 = state_50226;
var statearr_50266_51495 = state_50226__$1;
(statearr_50266_51495[(2)] = inst_50215);

(statearr_50266_51495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (5))){
var state_50226__$1 = state_50226;
var statearr_50267_51496 = state_50226__$1;
(statearr_50267_51496[(2)] = null);

(statearr_50267_51496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (14))){
var inst_50189 = (state_50226[(11)]);
var state_50226__$1 = state_50226;
var statearr_50268_51497 = state_50226__$1;
(statearr_50268_51497[(2)] = inst_50189);

(statearr_50268_51497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (16))){
var inst_50188 = (state_50226[(10)]);
var inst_50198 = (function(){throw inst_50188})();
var state_50226__$1 = state_50226;
var statearr_50269_51499 = state_50226__$1;
(statearr_50269_51499[(2)] = inst_50198);

(statearr_50269_51499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (10))){
var inst_50157 = (state_50226[(8)]);
var inst_50174 = (state_50226[(2)]);
var inst_50175 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50176 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_50157);
var inst_50177 = [inst_50176,"Error decoding message"];
var inst_50178 = cljs.core.PersistentHashMap.fromArrays(inst_50175,inst_50177);
var state_50226__$1 = (function (){var statearr_50270 = state_50226;
(statearr_50270[(13)] = inst_50174);

return statearr_50270;
})();
var statearr_50271_51545 = state_50226__$1;
(statearr_50271_51545[(2)] = inst_50178);

(statearr_50271_51545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (18))){
var inst_50202 = (state_50226[(7)]);
var inst_50203 = (state_50226[(12)]);
var inst_50201 = (state_50226[(2)]);
var inst_50202__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50201,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_50203__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_50202__$1);
var state_50226__$1 = (function (){var statearr_50272 = state_50226;
(statearr_50272[(7)] = inst_50202__$1);

(statearr_50272[(12)] = inst_50203__$1);

return statearr_50272;
})();
if(cljs.core.truth_(inst_50203__$1)){
var statearr_50273_51546 = state_50226__$1;
(statearr_50273_51546[(1)] = (19));

} else {
var statearr_50274_51547 = state_50226__$1;
(statearr_50274_51547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50227 === (8))){
var inst_50158 = (state_50226[(9)]);
var _ = (function (){var statearr_50275 = state_50226;
(statearr_50275[(4)] = cljs.core.cons((11),(state_50226[(4)])));

return statearr_50275;
})();
var inst_50185 = bb_web_ds_tools.runtime.webr.to_js(inst_50158);
var inst_50186 = cljs.core.async.interop.p__GT_c(inst_50185);
var state_50226__$1 = state_50226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50226__$1,(12),inst_50186);
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
});
return (function() {
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto__ = null;
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto____0 = (function (){
var statearr_50276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50276[(0)] = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto__);

(statearr_50276[(1)] = (1));

return statearr_50276;
});
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto____1 = (function (state_50226){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_50226);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e50277){var ex__32394__auto__ = e50277;
var statearr_50278_51549 = state_50226;
(statearr_50278_51549[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_50226[(4)]))){
var statearr_50280_51550 = state_50226;
(statearr_50280_51550[(1)] = cljs.core.first((state_50226[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51551 = state_50226;
state_50226 = G__51551;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto__ = function(state_50226){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto____1.call(this,state_50226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto____0;
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto____1;
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_50290 = f__32472__auto__();
(statearr_50290[(6)] = c__32471__auto__);

return statearr_50290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
});
bb_web_ds_tools.runtime.webr.process_capture_msgs = (function bb_web_ds_tools$runtime$webr$process_capture_msgs(output){
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_50335){
var state_val_50336 = (state_50335[(1)]);
if((state_val_50336 === (7))){
var inst_50312 = (state_50335[(7)]);
var inst_50319 = (state_50335[(8)]);
var inst_50321 = (state_50335[(2)]);
var inst_50322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50312,inst_50321);
var state_50335__$1 = (function (){var statearr_50337 = state_50335;
(statearr_50337[(9)] = inst_50322);

return statearr_50337;
})();
if(cljs.core.truth_(inst_50319)){
var statearr_50338_51552 = state_50335__$1;
(statearr_50338_51552[(1)] = (8));

} else {
var statearr_50339_51553 = state_50335__$1;
(statearr_50339_51553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (1))){
var inst_50297 = (state_50335[(10)]);
var inst_50296 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(output);
var inst_50297__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,inst_50296);
var inst_50298 = cljs.core.seq(inst_50297__$1);
var state_50335__$1 = (function (){var statearr_50340 = state_50335;
(statearr_50340[(10)] = inst_50297__$1);

return statearr_50340;
})();
if(inst_50298){
var statearr_50341_51555 = state_50335__$1;
(statearr_50341_51555[(1)] = (2));

} else {
var statearr_50342_51556 = state_50335__$1;
(statearr_50342_51556[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (4))){
var inst_50333 = (state_50335[(2)]);
var state_50335__$1 = state_50335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50335__$1,inst_50333);
} else {
if((state_val_50336 === (6))){
var inst_50329 = (state_50335[(2)]);
var state_50335__$1 = state_50335;
var statearr_50343_51560 = state_50335__$1;
(statearr_50343_51560[(2)] = inst_50329);

(statearr_50343_51560[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (3))){
var inst_50331 = cljs.core.PersistentVector.EMPTY;
var state_50335__$1 = state_50335;
var statearr_50344_51561 = state_50335__$1;
(statearr_50344_51561[(2)] = inst_50331);

(statearr_50344_51561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (2))){
var inst_50297 = (state_50335[(10)]);
var inst_50307 = cljs.core.seq(inst_50297);
var inst_50308 = cljs.core.first(inst_50307);
var inst_50309 = cljs.core.next(inst_50307);
var inst_50310 = cljs.core.PersistentVector.EMPTY;
var inst_50311 = inst_50297;
var inst_50312 = inst_50310;
var state_50335__$1 = (function (){var statearr_50345 = state_50335;
(statearr_50345[(11)] = inst_50308);

(statearr_50345[(12)] = inst_50309);

(statearr_50345[(13)] = inst_50311);

(statearr_50345[(7)] = inst_50312);

return statearr_50345;
})();
var statearr_50346_51566 = state_50335__$1;
(statearr_50346_51566[(2)] = null);

(statearr_50346_51566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (9))){
var inst_50322 = (state_50335[(9)]);
var state_50335__$1 = state_50335;
var statearr_50347_51567 = state_50335__$1;
(statearr_50347_51567[(2)] = inst_50322);

(statearr_50347_51567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (5))){
var inst_50311 = (state_50335[(13)]);
var inst_50317 = cljs.core.seq(inst_50311);
var inst_50318 = cljs.core.first(inst_50317);
var inst_50319 = cljs.core.next(inst_50317);
var state_50335__$1 = (function (){var statearr_50348 = state_50335;
(statearr_50348[(8)] = inst_50319);

return statearr_50348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50335__$1,(7),inst_50318);
} else {
if((state_val_50336 === (10))){
var inst_50327 = (state_50335[(2)]);
var state_50335__$1 = state_50335;
var statearr_50349_51574 = state_50335__$1;
(statearr_50349_51574[(2)] = inst_50327);

(statearr_50349_51574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (8))){
var inst_50319 = (state_50335[(8)]);
var inst_50322 = (state_50335[(9)]);
var inst_50311 = inst_50319;
var inst_50312 = inst_50322;
var state_50335__$1 = (function (){var statearr_50350 = state_50335;
(statearr_50350[(13)] = inst_50311);

(statearr_50350[(7)] = inst_50312);

return statearr_50350;
})();
var statearr_50351_51575 = state_50335__$1;
(statearr_50351_51575[(2)] = null);

(statearr_50351_51575[(1)] = (5));


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
});
return (function() {
var bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto__ = null;
var bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto____0 = (function (){
var statearr_50352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50352[(0)] = bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto__);

(statearr_50352[(1)] = (1));

return statearr_50352;
});
var bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto____1 = (function (state_50335){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_50335);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e50353){var ex__32394__auto__ = e50353;
var statearr_50354_51576 = state_50335;
(statearr_50354_51576[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_50335[(4)]))){
var statearr_50355_51578 = state_50335;
(statearr_50355_51578[(1)] = cljs.core.first((state_50335[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51582 = state_50335;
state_50335 = G__51582;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto__ = function(state_50335){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto____1.call(this,state_50335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto____0;
bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto____1;
return bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_50356 = f__32472__auto__();
(statearr_50356[(6)] = c__32471__auto__);

return statearr_50356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
});
/**
 * Loads the WebR runtime in the main thread.
 * 
 *   Args:
 *  on-ready (fn): Callback invoked when WebR is ready.
 *  on-error (fn): Callback invoked on load failure.
 * 
 *   Returns:
 *  nil: Initiates the loading process.
 */
bb_web_ds_tools.runtime.webr.load_runtime_main = (function bb_web_ds_tools$runtime$webr$load_runtime_main(on_ready,on_error){
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_50406){
var state_val_50407 = (state_50406[(1)]);
if((state_val_50407 === (7))){
var inst_50402 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50408_51583 = state_50406__$1;
(statearr_50408_51583[(2)] = inst_50402);

(statearr_50408_51583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (1))){
var inst_50357 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50357)){
var statearr_50409_51587 = state_50406__$1;
(statearr_50409_51587[(1)] = (2));

} else {
var statearr_50410_51589 = state_50406__$1;
(statearr_50410_51589[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (4))){
var inst_50404 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50406__$1,inst_50404);
} else {
if((state_val_50407 === (15))){
var inst_50389 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50389)){
var statearr_50412_51593 = state_50406__$1;
(statearr_50412_51593[(1)] = (16));

} else {
var statearr_50413_51594 = state_50406__$1;
(statearr_50413_51594[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (13))){
var inst_50381 = (state_50406[(7)]);
var inst_50384 = cljs.core.ex_data(inst_50381);
var inst_50385 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50384);
var inst_50386 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50385,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50406__$1 = state_50406;
var statearr_50422_51595 = state_50406__$1;
(statearr_50422_51595[(2)] = inst_50386);

(statearr_50422_51595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (6))){
var inst_50400 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_50406__$1 = state_50406;
var statearr_50423_51596 = state_50406__$1;
(statearr_50423_51596[(2)] = inst_50400);

(statearr_50423_51596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (17))){
var inst_50381 = (state_50406[(7)]);
var state_50406__$1 = state_50406;
var statearr_50424_51597 = state_50406__$1;
(statearr_50424_51597[(2)] = inst_50381);

(statearr_50424_51597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (3))){
var inst_50361 = (typeof WebR !== 'undefined');
var state_50406__$1 = state_50406;
if(cljs.core.truth_(inst_50361)){
var statearr_50425_51598 = state_50406__$1;
(statearr_50425_51598[(1)] = (5));

} else {
var statearr_50426_51599 = state_50406__$1;
(statearr_50426_51599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (12))){
var inst_50381 = (state_50406[(7)]);
var inst_50382 = (state_50406[(8)]);
var inst_50381__$1 = (state_50406[(2)]);
var inst_50382__$1 = (inst_50381__$1 instanceof cljs.core.ExceptionInfo);
var state_50406__$1 = (function (){var statearr_50428 = state_50406;
(statearr_50428[(7)] = inst_50381__$1);

(statearr_50428[(8)] = inst_50382__$1);

return statearr_50428;
})();
if(cljs.core.truth_(inst_50382__$1)){
var statearr_50429_51616 = state_50406__$1;
(statearr_50429_51616[(1)] = (13));

} else {
var statearr_50430_51617 = state_50406__$1;
(statearr_50430_51617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (2))){
var inst_50359 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_50406__$1 = state_50406;
var statearr_50435_51618 = state_50406__$1;
(statearr_50435_51618[(2)] = inst_50359);

(statearr_50435_51618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (11))){
var _ = (function (){var statearr_50436 = state_50406;
(statearr_50436[(4)] = cljs.core.rest((state_50406[(4)])));

return statearr_50436;
})();
var state_50406__$1 = state_50406;
var ex50427 = (state_50406__$1[(2)]);
var statearr_50437_51620 = state_50406__$1;
(statearr_50437_51620[(5)] = ex50427);


var statearr_50438_51622 = state_50406__$1;
(statearr_50438_51622[(1)] = (10));

(statearr_50438_51622[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (9))){
var inst_50398 = (state_50406[(2)]);
var state_50406__$1 = state_50406;
var statearr_50439_51623 = state_50406__$1;
(statearr_50439_51623[(2)] = inst_50398);

(statearr_50439_51623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (5))){
var state_50406__$1 = state_50406;
var statearr_50446_51624 = state_50406__$1;
(statearr_50446_51624[(2)] = null);

(statearr_50446_51624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (14))){
var inst_50382 = (state_50406[(8)]);
var state_50406__$1 = state_50406;
var statearr_50447_51625 = state_50406__$1;
(statearr_50447_51625[(2)] = inst_50382);

(statearr_50447_51625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (16))){
var inst_50381 = (state_50406[(7)]);
var inst_50391 = (function(){throw inst_50381})();
var state_50406__$1 = state_50406;
var statearr_50448_51626 = state_50406__$1;
(statearr_50448_51626[(2)] = inst_50391);

(statearr_50448_51626[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (10))){
var inst_50363 = (state_50406[(2)]);
var inst_50364 = console.error("WebR Init Error:",inst_50363);
var inst_50365 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50363)].join('');
var inst_50366 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_50365) : on_error.call(null,inst_50365));
var state_50406__$1 = (function (){var statearr_50455 = state_50406;
(statearr_50455[(9)] = inst_50364);

return statearr_50455;
})();
var statearr_50456_51630 = state_50406__$1;
(statearr_50456_51630[(2)] = inst_50366);

(statearr_50456_51630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (18))){
var inst_50394 = (state_50406[(2)]);
var inst_50395 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_50457 = state_50406;
(statearr_50457[(4)] = cljs.core.rest((state_50406[(4)])));

return statearr_50457;
})();
var state_50406__$1 = (function (){var statearr_50458 = state_50406;
(statearr_50458[(10)] = inst_50394);

return statearr_50458;
})();
var statearr_50459_51631 = state_50406__$1;
(statearr_50459_51631[(2)] = inst_50395);

(statearr_50459_51631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50407 === (8))){
var _ = (function (){var statearr_50460 = state_50406;
(statearr_50460[(4)] = cljs.core.cons((11),(state_50406[(4)])));

return statearr_50460;
})();
var inst_50372 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_50373 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_50374 = cljs.core.PersistentHashMap.fromArrays(inst_50372,inst_50373);
var inst_50375 = cljs.core.clj__GT_js(inst_50374);
var inst_50376 = (new WebR(inst_50375));
var inst_50377 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_50376);
var inst_50378 = bb_web_ds_tools.runtime.webr.init_obj(inst_50376);
var inst_50379 = cljs.core.async.interop.p__GT_c(inst_50378);
var state_50406__$1 = (function (){var statearr_50461 = state_50406;
(statearr_50461[(11)] = inst_50377);

return statearr_50461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50406__$1,(12),inst_50379);
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
});
return (function() {
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto__ = null;
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto____0 = (function (){
var statearr_50462 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50462[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto__);

(statearr_50462[(1)] = (1));

return statearr_50462;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto____1 = (function (state_50406){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_50406);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e50463){var ex__32394__auto__ = e50463;
var statearr_50464_51632 = state_50406;
(statearr_50464_51632[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_50406[(4)]))){
var statearr_50465_51639 = state_50406;
(statearr_50465_51639[(1)] = cljs.core.first((state_50406[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51640 = state_50406;
state_50406 = G__51640;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto__ = function(state_50406){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto____1.call(this,state_50406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_50466 = f__32472__auto__();
(statearr_50466[(6)] = c__32471__auto__);

return statearr_50466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
});
/**
 * Converts CLJS datasets (map of UUID -> map) to a JS object
 * suitable for binding in R (named list of row-array objects).
 * 
 * Args:
 *   datasets (map): The app-db datasets map.
 *   keys-to-bind (set/seq): Optional. Keys (names) of datasets to bind.
 * 
 * Returns:
 *   js/Object: JS object { name: [row-objects], ... }
 */
bb_web_ds_tools.runtime.webr.datasets__GT_js = (function bb_web_ds_tools$runtime$webr$datasets__GT_js(datasets,keys_to_bind){
var filter_fn = ((cljs.core.seq(keys_to_bind))?cljs.core.set(keys_to_bind):cljs.core.constantly(true));
var ds_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__50467){
var vec__50469 = p__50467;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50469,(0),null);
var map__50472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50469,(1),null);
var map__50472__$1 = cljs.core.__destructure_map(map__50472);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50472__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50472__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((filter_fn.cljs$core$IFn$_invoke$arity$1 ? filter_fn.cljs$core$IFn$_invoke$arity$1(name) : filter_fn.call(null,name)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,data);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,datasets);
return cljs.core.clj__GT_js(ds_map);
});
/**
 * Binds the datasets to the R global environment.
 * 
 * Args:
 *   datasets (map): The datasets from app-db.
 *   keys-to-bind (seq): Optional keys to filter.
 */
bb_web_ds_tools.runtime.webr.bind_datasets = (function bb_web_ds_tools$runtime$webr$bind_datasets(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51641 = arguments.length;
var i__5750__auto___51642 = (0);
while(true){
if((i__5750__auto___51642 < len__5749__auto___51641)){
args__5755__auto__.push((arguments[i__5750__auto___51642]));

var G__51643 = (i__5750__auto___51642 + (1));
i__5750__auto___51642 = G__51643;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic = (function (datasets,p__50478){
var vec__50479 = p__50478;
var keys_to_bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50479,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_50513){
var state_val_50514 = (state_50513[(1)]);
if((state_val_50514 === (7))){
var inst_50495 = (state_50513[(7)]);
var inst_50498 = cljs.core.ex_data(inst_50495);
var inst_50499 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50498);
var inst_50500 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50499,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50513__$1 = state_50513;
var statearr_50515_51644 = state_50513__$1;
(statearr_50515_51644[(2)] = inst_50500);

(statearr_50515_51644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50514 === (1))){
var state_50513__$1 = state_50513;
var statearr_50516_51645 = state_50513__$1;
(statearr_50516_51645[(2)] = null);

(statearr_50516_51645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50514 === (4))){
var inst_50482 = (state_50513[(2)]);
var inst_50483 = console.error("Failed to bind datasets to R:",inst_50482);
var state_50513__$1 = state_50513;
var statearr_50518_51646 = state_50513__$1;
(statearr_50518_51646[(2)] = inst_50483);

(statearr_50518_51646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50514 === (6))){
var inst_50495 = (state_50513[(7)]);
var inst_50496 = (state_50513[(8)]);
var inst_50495__$1 = (state_50513[(2)]);
var inst_50496__$1 = (inst_50495__$1 instanceof cljs.core.ExceptionInfo);
var state_50513__$1 = (function (){var statearr_50520 = state_50513;
(statearr_50520[(7)] = inst_50495__$1);

(statearr_50520[(8)] = inst_50496__$1);

return statearr_50520;
})();
if(cljs.core.truth_(inst_50496__$1)){
var statearr_50521_51647 = state_50513__$1;
(statearr_50521_51647[(1)] = (7));

} else {
var statearr_50523_51648 = state_50513__$1;
(statearr_50523_51648[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50514 === (3))){
var inst_50511 = (state_50513[(2)]);
var state_50513__$1 = state_50513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50513__$1,inst_50511);
} else {
if((state_val_50514 === (12))){
var inst_50508 = (state_50513[(2)]);
var _ = (function (){var statearr_50529 = state_50513;
(statearr_50529[(4)] = cljs.core.rest((state_50513[(4)])));

return statearr_50529;
})();
var state_50513__$1 = state_50513;
var statearr_50530_51663 = state_50513__$1;
(statearr_50530_51663[(2)] = inst_50508);

(statearr_50530_51663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50514 === (2))){
var _ = (function (){var statearr_50531 = state_50513;
(statearr_50531[(4)] = cljs.core.cons((5),(state_50513[(4)])));

return statearr_50531;
})();
var inst_50489 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_50490 = bb_web_ds_tools.runtime.webr.datasets__GT_js(datasets,keys_to_bind);
var inst_50491 = bb_web_ds_tools.runtime.webr.get_global_env(inst_50489);
var inst_50492 = bb_web_ds_tools.runtime.webr.bind_r(inst_50491,"datasets",inst_50490);
var inst_50493 = cljs.core.async.interop.p__GT_c(inst_50492);
var state_50513__$1 = state_50513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50513__$1,(6),inst_50493);
} else {
if((state_val_50514 === (11))){
var inst_50495 = (state_50513[(7)]);
var state_50513__$1 = state_50513;
var statearr_50536_51664 = state_50513__$1;
(statearr_50536_51664[(2)] = inst_50495);

(statearr_50536_51664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50514 === (9))){
var inst_50503 = (state_50513[(2)]);
var state_50513__$1 = state_50513;
if(cljs.core.truth_(inst_50503)){
var statearr_50537_51665 = state_50513__$1;
(statearr_50537_51665[(1)] = (10));

} else {
var statearr_50538_51666 = state_50513__$1;
(statearr_50538_51666[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50514 === (5))){
var _ = (function (){var statearr_50539 = state_50513;
(statearr_50539[(4)] = cljs.core.rest((state_50513[(4)])));

return statearr_50539;
})();
var state_50513__$1 = state_50513;
var ex50532 = (state_50513__$1[(2)]);
var statearr_50543_51667 = state_50513__$1;
(statearr_50543_51667[(5)] = ex50532);


var statearr_50544_51668 = state_50513__$1;
(statearr_50544_51668[(1)] = (4));

(statearr_50544_51668[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50514 === (10))){
var inst_50495 = (state_50513[(7)]);
var inst_50505 = (function(){throw inst_50495})();
var state_50513__$1 = state_50513;
var statearr_50545_51669 = state_50513__$1;
(statearr_50545_51669[(2)] = inst_50505);

(statearr_50545_51669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50514 === (8))){
var inst_50496 = (state_50513[(8)]);
var state_50513__$1 = state_50513;
var statearr_50546_51670 = state_50513__$1;
(statearr_50546_51670[(2)] = inst_50496);

(statearr_50546_51670[(1)] = (9));


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
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0 = (function (){
var statearr_50547 = [null,null,null,null,null,null,null,null,null];
(statearr_50547[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32391__auto__);

(statearr_50547[(1)] = (1));

return statearr_50547;
});
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1 = (function (state_50513){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_50513);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e50548){var ex__32394__auto__ = e50548;
var statearr_50549_51671 = state_50513;
(statearr_50549_51671[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_50513[(4)]))){
var statearr_50550_51672 = state_50513;
(statearr_50550_51672[(1)] = cljs.core.first((state_50513[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51673 = state_50513;
state_50513 = G__51673;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__ = function(state_50513){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1.call(this,state_50513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_50551 = f__32472__auto__();
(statearr_50551[(6)] = c__32471__auto__);

return statearr_50551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
} else {
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_50554){
var state_val_50555 = (state_50554[(1)]);
if((state_val_50555 === (1))){
var inst_50552 = console.warn("WebR not loaded, cannot bind datasets");
var state_50554__$1 = state_50554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50554__$1,inst_50552);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0 = (function (){
var statearr_50556 = [null,null,null,null,null,null,null];
(statearr_50556[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32391__auto__);

(statearr_50556[(1)] = (1));

return statearr_50556;
});
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1 = (function (state_50554){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_50554);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e50557){var ex__32394__auto__ = e50557;
var statearr_50558_51689 = state_50554;
(statearr_50558_51689[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_50554[(4)]))){
var statearr_50559_51690 = state_50554;
(statearr_50559_51690[(1)] = cljs.core.first((state_50554[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51691 = state_50554;
state_50554 = G__51691;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__ = function(state_50554){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1.call(this,state_50554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_50560 = f__32472__auto__();
(statearr_50560[(6)] = c__32471__auto__);

return statearr_50560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
}
}));

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$applyTo = (function (seq50476){
var G__50477 = cljs.core.first(seq50476);
var seq50476__$1 = cljs.core.next(seq50476);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50477,seq50476__$1);
}));

/**
 * Retrieves the 'datasets' variable from R, converts it back to CLJS,
 * and dispatches an update event if found.
 */
bb_web_ds_tools.runtime.webr.sync_datasets = (function bb_web_ds_tools$runtime$webr$sync_datasets(){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_50626){
var state_val_50627 = (state_50626[(1)]);
if((state_val_50627 === (7))){
var inst_50595 = (state_50626[(7)]);
var inst_50595__$1 = (state_50626[(2)]);
var state_50626__$1 = (function (){var statearr_50628 = state_50626;
(statearr_50628[(7)] = inst_50595__$1);

return statearr_50628;
})();
if(cljs.core.truth_(inst_50595__$1)){
var statearr_50629_51692 = state_50626__$1;
(statearr_50629_51692[(1)] = (17));

} else {
var statearr_50630_51694 = state_50626__$1;
(statearr_50630_51694[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (20))){
var inst_50600 = (state_50626[(8)]);
var inst_50601 = (state_50626[(9)]);
var inst_50600__$1 = (state_50626[(2)]);
var inst_50601__$1 = (inst_50600__$1 instanceof cljs.core.ExceptionInfo);
var state_50626__$1 = (function (){var statearr_50631 = state_50626;
(statearr_50631[(8)] = inst_50600__$1);

(statearr_50631[(9)] = inst_50601__$1);

return statearr_50631;
})();
if(cljs.core.truth_(inst_50601__$1)){
var statearr_50632_51695 = state_50626__$1;
(statearr_50632_51695[(1)] = (21));

} else {
var statearr_50633_51696 = state_50626__$1;
(statearr_50633_51696[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (1))){
var state_50626__$1 = state_50626;
var statearr_50634_51697 = state_50626__$1;
(statearr_50634_51697[(2)] = null);

(statearr_50634_51697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (24))){
var inst_50600 = (state_50626[(8)]);
var inst_50610 = (function(){throw inst_50600})();
var state_50626__$1 = state_50626;
var statearr_50635_51698 = state_50626__$1;
(statearr_50635_51698[(2)] = inst_50610);

(statearr_50635_51698[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (4))){
var inst_50561 = (state_50626[(2)]);
var inst_50562 = console.error("Failed to sync datasets from R:",inst_50561);
var state_50626__$1 = state_50626;
var statearr_50637_51699 = state_50626__$1;
(statearr_50637_51699[(2)] = inst_50562);

(statearr_50637_51699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (15))){
var inst_50579 = (state_50626[(10)]);
var state_50626__$1 = state_50626;
var statearr_50638_51700 = state_50626__$1;
(statearr_50638_51700[(2)] = inst_50579);

(statearr_50638_51700[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (21))){
var inst_50600 = (state_50626[(8)]);
var inst_50603 = cljs.core.ex_data(inst_50600);
var inst_50604 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50603);
var inst_50605 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50604,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50626__$1 = state_50626;
var statearr_50639_51701 = state_50626__$1;
(statearr_50639_51701[(2)] = inst_50605);

(statearr_50639_51701[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (13))){
var inst_50587 = (state_50626[(2)]);
var state_50626__$1 = state_50626;
if(cljs.core.truth_(inst_50587)){
var statearr_50640_51705 = state_50626__$1;
(statearr_50640_51705[(1)] = (14));

} else {
var statearr_50641_51706 = state_50626__$1;
(statearr_50641_51706[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (22))){
var inst_50601 = (state_50626[(9)]);
var state_50626__$1 = state_50626;
var statearr_50642_51707 = state_50626__$1;
(statearr_50642_51707[(2)] = inst_50601);

(statearr_50642_51707[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (6))){
var inst_50568 = (state_50626[(11)]);
var _ = (function (){var statearr_50643 = state_50626;
(statearr_50643[(4)] = cljs.core.cons((9),(state_50626[(4)])));

return statearr_50643;
})();
var inst_50575 = bb_web_ds_tools.runtime.webr.get_global_env(inst_50568);
var inst_50576 = bb_web_ds_tools.runtime.webr.get_r(inst_50575,"datasets");
var inst_50577 = cljs.core.async.interop.p__GT_c(inst_50576);
var state_50626__$1 = state_50626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50626__$1,(10),inst_50577);
} else {
if((state_val_50627 === (25))){
var inst_50600 = (state_50626[(8)]);
var state_50626__$1 = state_50626;
var statearr_50644_51708 = state_50626__$1;
(statearr_50644_51708[(2)] = inst_50600);

(statearr_50644_51708[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (17))){
var inst_50595 = (state_50626[(7)]);
var inst_50597 = bb_web_ds_tools.runtime.webr.to_js(inst_50595);
var inst_50598 = cljs.core.async.interop.p__GT_c(inst_50597);
var state_50626__$1 = state_50626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50626__$1,(20),inst_50598);
} else {
if((state_val_50627 === (3))){
var inst_50624 = (state_50626[(2)]);
var state_50626__$1 = state_50626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50626__$1,inst_50624);
} else {
if((state_val_50627 === (12))){
var inst_50580 = (state_50626[(12)]);
var state_50626__$1 = state_50626;
var statearr_50645_51709 = state_50626__$1;
(statearr_50645_51709[(2)] = inst_50580);

(statearr_50645_51709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (2))){
var _ = (function (){var statearr_50646 = state_50626;
(statearr_50646[(4)] = cljs.core.cons((5),(state_50626[(4)])));

return statearr_50646;
})();
var inst_50568 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_50626__$1 = (function (){var statearr_50647 = state_50626;
(statearr_50647[(11)] = inst_50568);

return statearr_50647;
})();
var statearr_50648_51710 = state_50626__$1;
(statearr_50648_51710[(2)] = null);

(statearr_50648_51710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (23))){
var inst_50608 = (state_50626[(2)]);
var state_50626__$1 = state_50626;
if(cljs.core.truth_(inst_50608)){
var statearr_50649_51711 = state_50626__$1;
(statearr_50649_51711[(1)] = (24));

} else {
var statearr_50650_51712 = state_50626__$1;
(statearr_50650_51712[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (19))){
var inst_50621 = (state_50626[(2)]);
var _ = (function (){var statearr_50652 = state_50626;
(statearr_50652[(4)] = cljs.core.rest((state_50626[(4)])));

return statearr_50652;
})();
var state_50626__$1 = state_50626;
var statearr_50653_51716 = state_50626__$1;
(statearr_50653_51716[(2)] = inst_50621);

(statearr_50653_51716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (11))){
var inst_50579 = (state_50626[(10)]);
var inst_50582 = cljs.core.ex_data(inst_50579);
var inst_50583 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50582);
var inst_50584 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50583,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50626__$1 = state_50626;
var statearr_50655_51717 = state_50626__$1;
(statearr_50655_51717[(2)] = inst_50584);

(statearr_50655_51717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (9))){
var _ = (function (){var statearr_50656 = state_50626;
(statearr_50656[(4)] = cljs.core.rest((state_50626[(4)])));

return statearr_50656;
})();
var state_50626__$1 = state_50626;
var ex50651 = (state_50626__$1[(2)]);
var statearr_50657_51719 = state_50626__$1;
(statearr_50657_51719[(5)] = ex50651);


var statearr_50658_51720 = state_50626__$1;
(statearr_50658_51720[(1)] = (8));

(statearr_50658_51720[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (5))){
var _ = (function (){var statearr_50659 = state_50626;
(statearr_50659[(4)] = cljs.core.rest((state_50626[(4)])));

return statearr_50659;
})();
var state_50626__$1 = state_50626;
var ex50654 = (state_50626__$1[(2)]);
var statearr_50660_51721 = state_50626__$1;
(statearr_50660_51721[(5)] = ex50654);


var statearr_50661_51722 = state_50626__$1;
(statearr_50661_51722[(1)] = (4));

(statearr_50661_51722[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (14))){
var inst_50579 = (state_50626[(10)]);
var inst_50589 = (function(){throw inst_50579})();
var state_50626__$1 = state_50626;
var statearr_50662_51724 = state_50626__$1;
(statearr_50662_51724[(2)] = inst_50589);

(statearr_50662_51724[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (26))){
var inst_50613 = (state_50626[(2)]);
var inst_50614 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50613,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_50615 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50616 = [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets-from-r","bb-web-ds-tools.views.datasets/patch-datasets-from-r",-125752359),inst_50614];
var inst_50617 = (new cljs.core.PersistentVector(null,2,(5),inst_50615,inst_50616,null));
var inst_50618 = re_frame.core.dispatch(inst_50617);
var state_50626__$1 = state_50626;
var statearr_50663_51726 = state_50626__$1;
(statearr_50663_51726[(2)] = inst_50618);

(statearr_50663_51726[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (16))){
var inst_50592 = (state_50626[(2)]);
var _ = (function (){var statearr_50664 = state_50626;
(statearr_50664[(4)] = cljs.core.rest((state_50626[(4)])));

return statearr_50664;
})();
var state_50626__$1 = state_50626;
var statearr_50665_51727 = state_50626__$1;
(statearr_50665_51727[(2)] = inst_50592);

(statearr_50665_51727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (10))){
var inst_50579 = (state_50626[(10)]);
var inst_50580 = (state_50626[(12)]);
var inst_50579__$1 = (state_50626[(2)]);
var inst_50580__$1 = (inst_50579__$1 instanceof cljs.core.ExceptionInfo);
var state_50626__$1 = (function (){var statearr_50666 = state_50626;
(statearr_50666[(10)] = inst_50579__$1);

(statearr_50666[(12)] = inst_50580__$1);

return statearr_50666;
})();
if(cljs.core.truth_(inst_50580__$1)){
var statearr_50667_51728 = state_50626__$1;
(statearr_50667_51728[(1)] = (11));

} else {
var statearr_50668_51729 = state_50626__$1;
(statearr_50668_51729[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (18))){
var state_50626__$1 = state_50626;
var statearr_50669_51730 = state_50626__$1;
(statearr_50669_51730[(2)] = null);

(statearr_50669_51730[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50627 === (8))){
var inst_50569 = (state_50626[(2)]);
var state_50626__$1 = (function (){var statearr_50670 = state_50626;
(statearr_50670[(13)] = inst_50569);

return statearr_50670;
})();
var statearr_50671_51734 = state_50626__$1;
(statearr_50671_51734[(2)] = null);

(statearr_50671_51734[(1)] = (7));


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
});
return (function() {
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____0 = (function (){
var statearr_50672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50672[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__);

(statearr_50672[(1)] = (1));

return statearr_50672;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____1 = (function (state_50626){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_50626);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e50673){var ex__32394__auto__ = e50673;
var statearr_50674_51736 = state_50626;
(statearr_50674_51736[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_50626[(4)]))){
var statearr_50675_51737 = state_50626;
(statearr_50675_51737[(1)] = cljs.core.first((state_50626[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51738 = state_50626;
state_50626 = G__51738;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__ = function(state_50626){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____1.call(this,state_50626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_50676 = f__32472__auto__();
(statearr_50676[(6)] = c__32471__auto__);

return statearr_50676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
} else {
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_50679){
var state_val_50680 = (state_50679[(1)]);
if((state_val_50680 === (1))){
var inst_50677 = console.warn("WebR not loaded, cannot sync datasets");
var state_50679__$1 = state_50679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50679__$1,inst_50677);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____0 = (function (){
var statearr_50681 = [null,null,null,null,null,null,null];
(statearr_50681[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__);

(statearr_50681[(1)] = (1));

return statearr_50681;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____1 = (function (state_50679){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_50679);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e50682){var ex__32394__auto__ = e50682;
var statearr_50683_51742 = state_50679;
(statearr_50683_51742[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_50679[(4)]))){
var statearr_50684_51743 = state_50679;
(statearr_50684_51743[(1)] = cljs.core.first((state_50679[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51744 = state_50679;
state_50679 = G__51744;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__ = function(state_50679){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____1.call(this,state_50679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_50685 = f__32472__auto__();
(statearr_50685[(6)] = c__32471__auto__);

return statearr_50685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
}
});
bb_web_ds_tools.runtime.webr.get_error_details = (function bb_web_ds_tools$runtime$webr$get_error_details(e){
if(((cljs.core.object_QMARK_(e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.message,"Promise error")))){
var clj_e = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(cljs.core.not_empty(clj_e))){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50686_51748 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50687_51749 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50688_51750 = true;
var _STAR_print_fn_STAR__temp_val__50689_51751 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50688_51750);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50689_51751);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clj_e);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50687_51749);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50686_51748);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
}
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
}
});
bb_web_ds_tools.runtime.webr.attempt_print_error = (function bb_web_ds_tools$runtime$webr$attempt_print_error(webr,shelter,e){
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_50751){
var state_val_50752 = (state_50751[(1)]);
if((state_val_50752 === (7))){
var inst_50700 = (state_50751[(7)]);
var inst_50703 = cljs.core.ex_data(inst_50700);
var inst_50704 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50703);
var inst_50705 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50704,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50751__$1 = state_50751;
var statearr_50753_51752 = state_50751__$1;
(statearr_50753_51752[(2)] = inst_50705);

(statearr_50753_51752[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (20))){
var inst_50744 = (state_50751[(2)]);
var inst_50745 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),inst_50744);
var inst_50746 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",inst_50745);
var _ = (function (){var statearr_50754 = state_50751;
(statearr_50754[(4)] = cljs.core.rest((state_50751[(4)])));

return statearr_50754;
})();
var state_50751__$1 = state_50751;
var statearr_50755_51753 = state_50751__$1;
(statearr_50755_51753[(2)] = inst_50746);

(statearr_50755_51753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (1))){
var state_50751__$1 = state_50751;
var statearr_50756_51755 = state_50751__$1;
(statearr_50756_51755[(2)] = null);

(statearr_50756_51755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (4))){
var inst_50690 = (state_50751[(2)]);
var state_50751__$1 = (function (){var statearr_50757 = state_50751;
(statearr_50757[(8)] = inst_50690);

return statearr_50757;
})();
var statearr_50758_51756 = state_50751__$1;
(statearr_50758_51756[(2)] = null);

(statearr_50758_51756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (15))){
var inst_50725 = (state_50751[(9)]);
var state_50751__$1 = state_50751;
var statearr_50759_51758 = state_50751__$1;
(statearr_50759_51758[(2)] = inst_50725);

(statearr_50759_51758[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (13))){
var inst_50724 = (state_50751[(10)]);
var inst_50725 = (state_50751[(9)]);
var inst_50724__$1 = (state_50751[(2)]);
var inst_50725__$1 = (inst_50724__$1 instanceof cljs.core.ExceptionInfo);
var state_50751__$1 = (function (){var statearr_50760 = state_50751;
(statearr_50760[(10)] = inst_50724__$1);

(statearr_50760[(9)] = inst_50725__$1);

return statearr_50760;
})();
if(cljs.core.truth_(inst_50725__$1)){
var statearr_50761_51759 = state_50751__$1;
(statearr_50761_51759[(1)] = (14));

} else {
var statearr_50762_51760 = state_50751__$1;
(statearr_50762_51760[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (6))){
var inst_50700 = (state_50751[(7)]);
var inst_50701 = (state_50751[(11)]);
var inst_50700__$1 = (state_50751[(2)]);
var inst_50701__$1 = (inst_50700__$1 instanceof cljs.core.ExceptionInfo);
var state_50751__$1 = (function (){var statearr_50763 = state_50751;
(statearr_50763[(7)] = inst_50700__$1);

(statearr_50763[(11)] = inst_50701__$1);

return statearr_50763;
})();
if(cljs.core.truth_(inst_50701__$1)){
var statearr_50764_51761 = state_50751__$1;
(statearr_50764_51761[(1)] = (7));

} else {
var statearr_50765_51762 = state_50751__$1;
(statearr_50765_51762[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (17))){
var inst_50724 = (state_50751[(10)]);
var inst_50734 = (function(){throw inst_50724})();
var state_50751__$1 = state_50751;
var statearr_50766_51772 = state_50751__$1;
(statearr_50766_51772[(2)] = inst_50734);

(statearr_50766_51772[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (3))){
var inst_50749 = (state_50751[(2)]);
var state_50751__$1 = state_50751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50751__$1,inst_50749);
} else {
if((state_val_50752 === (12))){
var inst_50713 = (state_50751[(2)]);
var inst_50717 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_50718 = [true];
var inst_50719 = cljs.core.PersistentHashMap.fromArrays(inst_50717,inst_50718);
var inst_50720 = cljs.core.clj__GT_js(inst_50719);
var inst_50721 = bb_web_ds_tools.runtime.webr.capture_r(shelter,"print(.last_error)",inst_50720);
var inst_50722 = cljs.core.async.interop.p__GT_c(inst_50721);
var state_50751__$1 = (function (){var statearr_50767 = state_50751;
(statearr_50767[(12)] = inst_50713);

return statearr_50767;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50751__$1,(13),inst_50722);
} else {
if((state_val_50752 === (2))){
var _ = (function (){var statearr_50768 = state_50751;
(statearr_50768[(4)] = cljs.core.cons((5),(state_50751[(4)])));

return statearr_50768;
})();
var inst_50696 = bb_web_ds_tools.runtime.webr.get_global_env(webr);
var inst_50697 = bb_web_ds_tools.runtime.webr.bind_r(inst_50696,".last_error",e);
var inst_50698 = cljs.core.async.interop.p__GT_c(inst_50697);
var state_50751__$1 = state_50751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50751__$1,(6),inst_50698);
} else {
if((state_val_50752 === (19))){
var inst_50737 = (state_50751[(2)]);
var inst_50738 = bb_web_ds_tools.runtime.webr.get_result_props(inst_50737);
var inst_50739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50738,(0),null);
var inst_50740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50738,(1),null);
var inst_50741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50738,(2),null);
var inst_50742 = bb_web_ds_tools.runtime.webr.process_capture_msgs(inst_50739);
var state_50751__$1 = (function (){var statearr_50769 = state_50751;
(statearr_50769[(13)] = inst_50740);

(statearr_50769[(14)] = inst_50741);

return statearr_50769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50751__$1,(20),inst_50742);
} else {
if((state_val_50752 === (11))){
var inst_50700 = (state_50751[(7)]);
var state_50751__$1 = state_50751;
var statearr_50772_51775 = state_50751__$1;
(statearr_50772_51775[(2)] = inst_50700);

(statearr_50772_51775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (9))){
var inst_50708 = (state_50751[(2)]);
var state_50751__$1 = state_50751;
if(cljs.core.truth_(inst_50708)){
var statearr_50773_51776 = state_50751__$1;
(statearr_50773_51776[(1)] = (10));

} else {
var statearr_50774_51777 = state_50751__$1;
(statearr_50774_51777[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (5))){
var _ = (function (){var statearr_50775 = state_50751;
(statearr_50775[(4)] = cljs.core.rest((state_50751[(4)])));

return statearr_50775;
})();
var state_50751__$1 = state_50751;
var ex50770 = (state_50751__$1[(2)]);
var statearr_50776_51778 = state_50751__$1;
(statearr_50776_51778[(5)] = ex50770);


var statearr_50777_51779 = state_50751__$1;
(statearr_50777_51779[(1)] = (4));

(statearr_50777_51779[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (14))){
var inst_50724 = (state_50751[(10)]);
var inst_50727 = cljs.core.ex_data(inst_50724);
var inst_50728 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50727);
var inst_50729 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50728,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50751__$1 = state_50751;
var statearr_50778_51792 = state_50751__$1;
(statearr_50778_51792[(2)] = inst_50729);

(statearr_50778_51792[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (16))){
var inst_50732 = (state_50751[(2)]);
var state_50751__$1 = state_50751;
if(cljs.core.truth_(inst_50732)){
var statearr_50779_51793 = state_50751__$1;
(statearr_50779_51793[(1)] = (17));

} else {
var statearr_50780_51794 = state_50751__$1;
(statearr_50780_51794[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (10))){
var inst_50700 = (state_50751[(7)]);
var inst_50710 = (function(){throw inst_50700})();
var state_50751__$1 = state_50751;
var statearr_50781_51797 = state_50751__$1;
(statearr_50781_51797[(2)] = inst_50710);

(statearr_50781_51797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (18))){
var inst_50724 = (state_50751[(10)]);
var state_50751__$1 = state_50751;
var statearr_50782_51798 = state_50751__$1;
(statearr_50782_51798[(2)] = inst_50724);

(statearr_50782_51798[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50752 === (8))){
var inst_50701 = (state_50751[(11)]);
var state_50751__$1 = state_50751;
var statearr_50783_51799 = state_50751__$1;
(statearr_50783_51799[(2)] = inst_50701);

(statearr_50783_51799[(1)] = (9));


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
});
return (function() {
var bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto__ = null;
var bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto____0 = (function (){
var statearr_50784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50784[(0)] = bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto__);

(statearr_50784[(1)] = (1));

return statearr_50784;
});
var bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto____1 = (function (state_50751){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_50751);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e50785){var ex__32394__auto__ = e50785;
var statearr_50786_51800 = state_50751;
(statearr_50786_51800[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_50751[(4)]))){
var statearr_50787_51801 = state_50751;
(statearr_50787_51801[(1)] = cljs.core.first((state_50751[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51802 = state_50751;
state_50751 = G__51802;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto__ = function(state_50751){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto____1.call(this,state_50751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto____0;
bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto____1;
return bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_50788 = f__32472__auto__();
(statearr_50788[(6)] = c__32471__auto__);

return statearr_50788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
});
/**
 * Evaluates R code in the main thread using WebR.
 * 
 *   Args:
 *  code (string): The R code to evaluate.
 *  opts (map, optional): Options.
 *    - :webr (map): Settings for WebR (container-width, container-height, canvas-scale).
 * 
 *   Returns:
 *  nil: Submits results to Portal.
 */
bb_web_ds_tools.runtime.webr.eval_in_main = (function bb_web_ds_tools$runtime$webr$eval_in_main(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51803 = arguments.length;
var i__5750__auto___51804 = (0);
while(true){
if((i__5750__auto___51804 < len__5749__auto___51803)){
args__5755__auto__.push((arguments[i__5750__auto___51804]));

var G__51805 = (i__5750__auto___51804 + (1));
i__5750__auto___51804 = G__51805;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic = (function (code,p__50791){
var vec__50792 = p__50791;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50792,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_51156){
var state_val_51157 = (state_51156[(1)]);
if((state_val_51157 === (65))){
var state_51156__$1 = state_51156;
var statearr_51161_51806 = state_51156__$1;
(statearr_51161_51806[(2)] = null);

(statearr_51161_51806[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (70))){
var inst_50982 = (state_51156[(7)]);
var inst_50984 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50982);
var state_51156__$1 = state_51156;
var statearr_51162_51807 = state_51156__$1;
(statearr_51162_51807[(2)] = inst_50984);

(statearr_51162_51807[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (62))){
var state_51156__$1 = state_51156;
var statearr_51163_51808 = state_51156__$1;
(statearr_51163_51808[(2)] = null);

(statearr_51163_51808[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (74))){
var inst_50940 = (state_51156[(8)]);
var inst_51102 = (state_51156[(9)]);
var inst_51101 = (state_51156[(2)]);
var inst_51102__$1 = bb_web_ds_tools.runtime.webr.to_js(inst_50940);
var inst_51103 = (inst_51102__$1 instanceof Promise);
var state_51156__$1 = (function (){var statearr_51164 = state_51156;
(statearr_51164[(10)] = inst_51101);

(statearr_51164[(9)] = inst_51102__$1);

return statearr_51164;
})();
if(cljs.core.truth_(inst_51103)){
var statearr_51165_51815 = state_51156__$1;
(statearr_51165_51815[(1)] = (84));

} else {
var statearr_51166_51816 = state_51156__$1;
(statearr_51166_51816[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (7))){
var inst_51143 = (new Error("Shelter not found on WebR instance"));
var inst_51144 = (function(){throw inst_51143})();
var state_51156__$1 = state_51156;
var statearr_51167_51817 = state_51156__$1;
(statearr_51167_51817[(2)] = inst_51144);

(statearr_51167_51817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (59))){
var inst_50956 = (state_51156[(11)]);
var inst_50973 = (state_51156[(12)]);
var inst_50973__$1 = cljs.core.seq(inst_50956);
var state_51156__$1 = (function (){var statearr_51168 = state_51156;
(statearr_51168[(12)] = inst_50973__$1);

return statearr_51168;
})();
if(inst_50973__$1){
var statearr_51169_51818 = state_51156__$1;
(statearr_51169_51818[(1)] = (64));

} else {
var statearr_51170_51819 = state_51156__$1;
(statearr_51170_51819[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (86))){
var inst_51123 = (state_51156[(2)]);
var state_51156__$1 = (function (){var statearr_51171 = state_51156;
(statearr_51171[(13)] = inst_51123);

return statearr_51171;
})();
var statearr_51172_51820 = state_51156__$1;
(statearr_51172_51820[(2)] = null);

(statearr_51172_51820[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (20))){
var inst_50826 = (state_51156[(14)]);
var inst_50836 = (function(){throw inst_50826})();
var state_51156__$1 = state_51156;
var statearr_51173_51821 = state_51156__$1;
(statearr_51173_51821[(2)] = inst_50836);

(statearr_51173_51821[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (72))){
var inst_50973 = (state_51156[(12)]);
var inst_50987 = (state_51156[(2)]);
var inst_50988 = cljs.core.next(inst_50973);
var inst_50956 = inst_50988;
var inst_50957 = null;
var inst_50958 = (0);
var inst_50959 = (0);
var state_51156__$1 = (function (){var statearr_51174 = state_51156;
(statearr_51174[(15)] = inst_50987);

(statearr_51174[(11)] = inst_50956);

(statearr_51174[(16)] = inst_50957);

(statearr_51174[(17)] = inst_50958);

(statearr_51174[(18)] = inst_50959);

return statearr_51174;
})();
var statearr_51175_51825 = state_51156__$1;
(statearr_51175_51825[(2)] = null);

(statearr_51175_51825[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (58))){
var inst_50957 = (state_51156[(16)]);
var inst_50959 = (state_51156[(18)]);
var inst_50964 = (state_51156[(19)]);
var inst_50964__$1 = cljs.core._nth(inst_50957,inst_50959);
var state_51156__$1 = (function (){var statearr_51176 = state_51156;
(statearr_51176[(19)] = inst_50964__$1);

return statearr_51176;
})();
if(cljs.core.truth_(inst_50964__$1)){
var statearr_51177_51827 = state_51156__$1;
(statearr_51177_51827[(1)] = (61));

} else {
var statearr_51178_51828 = state_51156__$1;
(statearr_51178_51828[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (60))){
var inst_50997 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51179_51829 = state_51156__$1;
(statearr_51179_51829[(2)] = inst_50997);

(statearr_51179_51829[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (27))){
var inst_50848 = (state_51156[(20)]);
var inst_50855 = cljs.core.ex_data(inst_50848);
var inst_50857 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50855);
var inst_50859 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50857,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_51156__$1 = state_51156;
var statearr_51180_51830 = state_51156__$1;
(statearr_51180_51830[(2)] = inst_50859);

(statearr_51180_51830[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (1))){
var state_51156__$1 = state_51156;
var statearr_51181_51831 = state_51156__$1;
(statearr_51181_51831[(2)] = null);

(statearr_51181_51831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (69))){
var inst_50991 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51182_51832 = state_51156__$1;
(statearr_51182_51832[(2)] = inst_50991);

(statearr_51182_51832[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (24))){
var state_51156__$1 = state_51156;
var statearr_51183_51833 = state_51156__$1;
(statearr_51183_51833[(2)] = null);

(statearr_51183_51833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (55))){
var inst_50943 = (state_51156[(2)]);
var inst_50944 = [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),new cljs.core.Keyword(null,"container-height","container-height",-577782714),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110)];
var inst_50945 = [(720),(800),0.72];
var inst_50946 = cljs.core.PersistentHashMap.fromArrays(inst_50944,inst_50945);
var inst_50947 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"webr","webr",-966893065),inst_50946);
var inst_50948 = new cljs.core.Keyword(null,"container-width","container-width",-1461172864).cljs$core$IFn$_invoke$arity$1(inst_50947);
var inst_50949 = new cljs.core.Keyword(null,"container-height","container-height",-577782714).cljs$core$IFn$_invoke$arity$1(inst_50947);
var inst_50950 = new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110).cljs$core$IFn$_invoke$arity$1(inst_50947);
var inst_50955 = cljs.core.seq(inst_50943);
var inst_50956 = inst_50955;
var inst_50957 = null;
var inst_50958 = (0);
var inst_50959 = (0);
var state_51156__$1 = (function (){var statearr_51184 = state_51156;
(statearr_51184[(21)] = inst_50948);

(statearr_51184[(22)] = inst_50949);

(statearr_51184[(23)] = inst_50950);

(statearr_51184[(11)] = inst_50956);

(statearr_51184[(16)] = inst_50957);

(statearr_51184[(17)] = inst_50958);

(statearr_51184[(18)] = inst_50959);

return statearr_51184;
})();
var statearr_51185_51838 = state_51156__$1;
(statearr_51185_51838[(2)] = null);

(statearr_51185_51838[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (85))){
var inst_51102 = (state_51156[(9)]);
var state_51156__$1 = state_51156;
var statearr_51186_51842 = state_51156__$1;
(statearr_51186_51842[(2)] = inst_51102);

(statearr_51186_51842[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (39))){
var inst_50890 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
if(cljs.core.truth_(inst_50890)){
var statearr_51187_51843 = state_51156__$1;
(statearr_51187_51843[(1)] = (40));

} else {
var statearr_51188_51844 = state_51156__$1;
(statearr_51188_51844[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (88))){
var inst_51107 = (state_51156[(24)]);
var inst_51110 = cljs.core.ex_data(inst_51107);
var inst_51111 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51110);
var inst_51112 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51111,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_51156__$1 = state_51156;
var statearr_51189_51848 = state_51156__$1;
(statearr_51189_51848[(2)] = inst_51112);

(statearr_51189_51848[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (46))){
var inst_50898 = (state_51156[(25)]);
var inst_50903 = (state_51156[(2)]);
var inst_50904 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50903];
var inst_50905 = cljs.core.PersistentHashMap.fromArrays(inst_50898,inst_50904);
var inst_50906 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50905);
var state_51156__$1 = state_51156;
var statearr_51190_51849 = state_51156__$1;
(statearr_51190_51849[(2)] = inst_50906);

(statearr_51190_51849[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (4))){
var inst_50795 = (state_51156[(2)]);
var inst_50796 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50797 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50795);
var inst_50798 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50797];
var inst_50799 = cljs.core.PersistentHashMap.fromArrays(inst_50796,inst_50798);
var inst_50800 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50799);
var state_51156__$1 = state_51156;
var statearr_51191_51853 = state_51156__$1;
(statearr_51191_51853[(2)] = inst_50800);

(statearr_51191_51853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (77))){
var inst_51099 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51192_51854 = state_51156__$1;
(statearr_51192_51854[(2)] = inst_51099);

(statearr_51192_51854[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (95))){
var inst_51134 = (state_51156[(2)]);
var inst_51135 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_51136 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_51134];
var inst_51137 = cljs.core.PersistentHashMap.fromArrays(inst_51135,inst_51136);
var inst_51138 = bb_web_ds_tools.runtime.webr.portal_submit(inst_51137);
var _ = (function (){var statearr_51193 = state_51156;
(statearr_51193[(4)] = cljs.core.rest((state_51156[(4)])));

return statearr_51193;
})();
var state_51156__$1 = state_51156;
var statearr_51194_51855 = state_51156__$1;
(statearr_51194_51855[(2)] = inst_51138);

(statearr_51194_51855[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (54))){
var inst_50936 = (state_51156[(2)]);
var inst_50937 = bb_web_ds_tools.runtime.webr.get_result_props(inst_50936);
var inst_50938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50937,(0),null);
var inst_50939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50937,(1),null);
var inst_50940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50937,(2),null);
var inst_50941 = bb_web_ds_tools.runtime.webr.process_capture_msgs(inst_50938);
var state_51156__$1 = (function (){var statearr_51195 = state_51156;
(statearr_51195[(26)] = inst_50939);

(statearr_51195[(8)] = inst_50940);

return statearr_51195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51156__$1,(55),inst_50941);
} else {
if((state_val_51157 === (92))){
var inst_51107 = (state_51156[(24)]);
var state_51156__$1 = state_51156;
var statearr_51196_51859 = state_51156__$1;
(statearr_51196_51859[(2)] = inst_51107);

(statearr_51196_51859[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (15))){
var inst_50873 = (state_51156[(2)]);
var _ = (function (){var statearr_51197 = state_51156;
(statearr_51197[(4)] = cljs.core.rest((state_51156[(4)])));

return statearr_51197;
})();
var state_51156__$1 = state_51156;
var statearr_51198_51860 = state_51156__$1;
(statearr_51198_51860[(2)] = inst_50873);

(statearr_51198_51860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (48))){
var inst_50923 = (state_51156[(27)]);
var inst_50924 = (state_51156[(28)]);
var inst_50923__$1 = (state_51156[(2)]);
var inst_50924__$1 = (inst_50923__$1 instanceof cljs.core.ExceptionInfo);
var state_51156__$1 = (function (){var statearr_51202 = state_51156;
(statearr_51202[(27)] = inst_50923__$1);

(statearr_51202[(28)] = inst_50924__$1);

return statearr_51202;
})();
if(cljs.core.truth_(inst_50924__$1)){
var statearr_51203_51861 = state_51156__$1;
(statearr_51203_51861[(1)] = (49));

} else {
var statearr_51204_51862 = state_51156__$1;
(statearr_51204_51862[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (50))){
var inst_50924 = (state_51156[(28)]);
var state_51156__$1 = state_51156;
var statearr_51205_51863 = state_51156__$1;
(statearr_51205_51863[(2)] = inst_50924);

(statearr_51205_51863[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (75))){
var inst_51008 = (state_51156[(29)]);
var inst_51010 = (state_51156[(30)]);
var inst_50948 = (state_51156[(21)]);
var inst_50949 = (state_51156[(22)]);
var inst_50950 = (state_51156[(23)]);
var inst_51007 = (state_51156[(31)]);
var inst_51009 = (state_51156[(32)]);
var inst_51015 = cljs.core._nth(inst_51008,inst_51010);
var inst_51016 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_51015);
var inst_51017 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51018 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_51019 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_51020 = [inst_50948,inst_50949];
var inst_51021 = cljs.core.PersistentHashMap.fromArrays(inst_51019,inst_51020);
var inst_51022 = [inst_51021];
var inst_51023 = cljs.core.PersistentHashMap.fromArrays(inst_51018,inst_51022);
var inst_51024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51025 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_51026 = bb_web_ds_tools.runtime.webr.get_width(inst_51015);
var inst_51027 = (inst_51026 * inst_50950);
var inst_51028 = (inst_51027 | (0));
var inst_51029 = bb_web_ds_tools.runtime.webr.get_height(inst_51015);
var inst_51030 = (inst_51029 * inst_50950);
var inst_51031 = (inst_51030 | (0));
var inst_51032 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_51033 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51016),")"].join('');
var inst_51034 = [inst_51033,"cover"];
var inst_51035 = cljs.core.PersistentHashMap.fromArrays(inst_51032,inst_51034);
var inst_51036 = [inst_51028,inst_51031,inst_51035];
var inst_51037 = cljs.core.PersistentHashMap.fromArrays(inst_51025,inst_51036);
var inst_51038 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_51037];
var inst_51039 = (new cljs.core.PersistentVector(null,2,(5),inst_51024,inst_51038,null));
var inst_51040 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_51023,inst_51039];
var inst_51041 = (new cljs.core.PersistentVector(null,3,(5),inst_51017,inst_51040,null));
var inst_51042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51043 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_51041,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_51044 = (new cljs.core.PersistentVector(null,3,(5),inst_51042,inst_51043,null));
var inst_51045 = re_frame.core.dispatch(inst_51044);
var inst_51046 = (inst_51010 + (1));
var tmp51199 = inst_51008;
var tmp51200 = inst_51007;
var tmp51201 = inst_51009;
var inst_51007__$1 = tmp51200;
var inst_51008__$1 = tmp51199;
var inst_51009__$1 = tmp51201;
var inst_51010__$1 = inst_51046;
var state_51156__$1 = (function (){var statearr_51207 = state_51156;
(statearr_51207[(33)] = inst_51045);

(statearr_51207[(31)] = inst_51007__$1);

(statearr_51207[(29)] = inst_51008__$1);

(statearr_51207[(32)] = inst_51009__$1);

(statearr_51207[(30)] = inst_51010__$1);

return statearr_51207;
})();
var statearr_51208_51876 = state_51156__$1;
(statearr_51208_51876[(2)] = null);

(statearr_51208_51876[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (21))){
var inst_50826 = (state_51156[(14)]);
var state_51156__$1 = state_51156;
var statearr_51209_51879 = state_51156__$1;
(statearr_51209_51879[(2)] = inst_50826);

(statearr_51209_51879[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (31))){
var inst_50848 = (state_51156[(20)]);
var state_51156__$1 = state_51156;
var statearr_51210_51880 = state_51156__$1;
(statearr_51210_51880[(2)] = inst_50848);

(statearr_51210_51880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (32))){
var inst_50868 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51211_51881 = state_51156__$1;
(statearr_51211_51881[(2)] = inst_50868);

(statearr_51211_51881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (40))){
var inst_50810 = (state_51156[(34)]);
var inst_50876 = (state_51156[(35)]);
var inst_50883 = (state_51156[(36)]);
var inst_50892 = bb_web_ds_tools.runtime.webr.attempt_print_error(inst_50810,inst_50876,inst_50883);
var state_51156__$1 = state_51156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51156__$1,(43),inst_50892);
} else {
if((state_val_51157 === (91))){
var inst_51107 = (state_51156[(24)]);
var inst_51117 = (function(){throw inst_51107})();
var state_51156__$1 = state_51156;
var statearr_51212_51886 = state_51156__$1;
(statearr_51212_51886[(2)] = inst_51117);

(statearr_51212_51886[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (56))){
var inst_50959 = (state_51156[(18)]);
var inst_50958 = (state_51156[(17)]);
var inst_50961 = (inst_50959 < inst_50958);
var inst_50962 = inst_50961;
var state_51156__$1 = state_51156;
if(cljs.core.truth_(inst_50962)){
var statearr_51214_51887 = state_51156__$1;
(statearr_51214_51887[(1)] = (58));

} else {
var statearr_51219_51888 = state_51156__$1;
(statearr_51219_51888[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (33))){
var inst_50876 = (state_51156[(35)]);
var _ = (function (){var statearr_51222 = state_51156;
(statearr_51222[(4)] = cljs.core.cons((35),(state_51156[(4)])));

return statearr_51222;
})();
var ___$1 = (function (){var statearr_51223 = state_51156;
(statearr_51223[(4)] = cljs.core.cons((47),(state_51156[(4)])));

return statearr_51223;
})();
var inst_50916 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_50917 = [true];
var inst_50918 = cljs.core.PersistentHashMap.fromArrays(inst_50916,inst_50917);
var inst_50919 = cljs.core.clj__GT_js(inst_50918);
var inst_50920 = bb_web_ds_tools.runtime.webr.capture_r(inst_50876,code,inst_50919);
var inst_50921 = cljs.core.async.interop.p__GT_c(inst_50920);
var state_51156__$1 = state_51156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51156__$1,(48),inst_50921);
} else {
if((state_val_51157 === (13))){
var inst_50813 = (state_51156[(37)]);
var inst_50824 = cljs.core.async.interop.p__GT_c(inst_50813);
var state_51156__$1 = state_51156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51156__$1,(16),inst_50824);
} else {
if((state_val_51157 === (22))){
var inst_50839 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51224_51901 = state_51156__$1;
(statearr_51224_51901[(2)] = inst_50839);

(statearr_51224_51901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (90))){
var inst_51115 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
if(cljs.core.truth_(inst_51115)){
var statearr_51225_51902 = state_51156__$1;
(statearr_51225_51902[(1)] = (91));

} else {
var statearr_51226_51903 = state_51156__$1;
(statearr_51226_51903[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (36))){
var inst_50883 = (state_51156[(36)]);
var inst_50884 = (state_51156[(38)]);
var inst_50883__$1 = (state_51156[(2)]);
var inst_50884__$1 = cljs.core.object_QMARK_(inst_50883__$1);
var state_51156__$1 = (function (){var statearr_51227 = state_51156;
(statearr_51227[(36)] = inst_50883__$1);

(statearr_51227[(38)] = inst_50884__$1);

return statearr_51227;
})();
if(inst_50884__$1){
var statearr_51228_51904 = state_51156__$1;
(statearr_51228_51904[(1)] = (37));

} else {
var statearr_51229_51905 = state_51156__$1;
(statearr_51229_51905[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (41))){
var state_51156__$1 = state_51156;
var statearr_51230_51906 = state_51156__$1;
(statearr_51230_51906[(2)] = null);

(statearr_51230_51906[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (89))){
var inst_51108 = (state_51156[(39)]);
var state_51156__$1 = state_51156;
var statearr_51231_51907 = state_51156__$1;
(statearr_51231_51907[(2)] = inst_51108);

(statearr_51231_51907[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (43))){
var inst_50894 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51232_51908 = state_51156__$1;
(statearr_51232_51908[(2)] = inst_50894);

(statearr_51232_51908[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (61))){
var inst_50964 = (state_51156[(19)]);
var inst_50966 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50964);
var state_51156__$1 = state_51156;
var statearr_51233_51909 = state_51156__$1;
(statearr_51233_51909[(2)] = inst_50966);

(statearr_51233_51909[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (29))){
var inst_50863 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
if(cljs.core.truth_(inst_50863)){
var statearr_51234_51910 = state_51156__$1;
(statearr_51234_51910[(1)] = (30));

} else {
var statearr_51235_51911 = state_51156__$1;
(statearr_51235_51911[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (44))){
var inst_50897 = (state_51156[(40)]);
var state_51156__$1 = state_51156;
var statearr_51236_51912 = state_51156__$1;
(statearr_51236_51912[(2)] = inst_50897);

(statearr_51236_51912[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (93))){
var inst_51120 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51237_51913 = state_51156__$1;
(statearr_51237_51913[(2)] = inst_51120);

(statearr_51237_51913[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (6))){
var inst_50811 = (state_51156[(41)]);
var inst_50813 = (new inst_50811());
var state_51156__$1 = (function (){var statearr_51238 = state_51156;
(statearr_51238[(37)] = inst_50813);

return statearr_51238;
})();
var statearr_51239_51914 = state_51156__$1;
(statearr_51239_51914[(2)] = null);

(statearr_51239_51914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (28))){
var inst_50850 = (state_51156[(42)]);
var state_51156__$1 = state_51156;
var statearr_51240_51915 = state_51156__$1;
(statearr_51240_51915[(2)] = inst_50850);

(statearr_51240_51915[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (64))){
var inst_50973 = (state_51156[(12)]);
var inst_50975 = cljs.core.chunked_seq_QMARK_(inst_50973);
var state_51156__$1 = state_51156;
if(inst_50975){
var statearr_51241_51916 = state_51156__$1;
(statearr_51241_51916[(1)] = (67));

} else {
var statearr_51242_51917 = state_51156__$1;
(statearr_51242_51917[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (51))){
var inst_50931 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
if(cljs.core.truth_(inst_50931)){
var statearr_51243_51918 = state_51156__$1;
(statearr_51243_51918[(1)] = (52));

} else {
var statearr_51244_51919 = state_51156__$1;
(statearr_51244_51919[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (25))){
var inst_50813 = (state_51156[(37)]);
var inst_50871 = (state_51156[(2)]);
var state_51156__$1 = (function (){var statearr_51245 = state_51156;
(statearr_51245[(43)] = inst_50871);

return statearr_51245;
})();
var statearr_51246_51920 = state_51156__$1;
(statearr_51246_51920[(2)] = inst_50813);

(statearr_51246_51920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (34))){
var inst_51141 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51248_51921 = state_51156__$1;
(statearr_51248_51921[(2)] = inst_51141);

(statearr_51248_51921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (17))){
var inst_50826 = (state_51156[(14)]);
var inst_50829 = cljs.core.ex_data(inst_50826);
var inst_50830 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50829);
var inst_50831 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50830,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_51156__$1 = state_51156;
var statearr_51251_51922 = state_51156__$1;
(statearr_51251_51922[(2)] = inst_50831);

(statearr_51251_51922[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (3))){
var inst_51150 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51156__$1,inst_51150);
} else {
if((state_val_51157 === (12))){
var _ = (function (){var statearr_51254 = state_51156;
(statearr_51254[(4)] = cljs.core.rest((state_51156[(4)])));

return statearr_51254;
})();
var state_51156__$1 = state_51156;
var ex51249 = (state_51156__$1[(2)]);
var statearr_51255_51923 = state_51156__$1;
(statearr_51255_51923[(5)] = ex51249);


var statearr_51256_51924 = state_51156__$1;
(statearr_51256_51924[(1)] = (11));

(statearr_51256_51924[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (2))){
var inst_50810 = (state_51156[(34)]);
var inst_50811 = (state_51156[(41)]);
var _ = (function (){var statearr_51257 = state_51156;
(statearr_51257[(4)] = cljs.core.cons((5),(state_51156[(4)])));

return statearr_51257;
})();
var inst_50806 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50807 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_50808 = cljs.core.PersistentHashMap.fromArrays(inst_50806,inst_50807);
var inst_50809 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50808);
var inst_50810__$1 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_50811__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(inst_50810__$1);
var state_51156__$1 = (function (){var statearr_51258 = state_51156;
(statearr_51258[(44)] = inst_50809);

(statearr_51258[(34)] = inst_50810__$1);

(statearr_51258[(41)] = inst_50811__$1);

return statearr_51258;
})();
if(cljs.core.truth_(inst_50811__$1)){
var statearr_51259_51931 = state_51156__$1;
(statearr_51259_51931[(1)] = (6));

} else {
var statearr_51260_51932 = state_51156__$1;
(statearr_51260_51932[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (66))){
var inst_50995 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51264_51933 = state_51156__$1;
(statearr_51264_51933[(2)] = inst_50995);

(statearr_51264_51933[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (23))){
var inst_50813 = (state_51156[(37)]);
var inst_50845 = bb_web_ds_tools.runtime.webr.init_obj(inst_50813);
var inst_50846 = cljs.core.async.interop.p__GT_c(inst_50845);
var state_51156__$1 = state_51156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51156__$1,(26),inst_50846);
} else {
if((state_val_51157 === (47))){
var _ = (function (){var statearr_51269 = state_51156;
(statearr_51269[(4)] = cljs.core.rest((state_51156[(4)])));

return statearr_51269;
})();
var state_51156__$1 = state_51156;
var ex51263 = (state_51156__$1[(2)]);
var statearr_51271_51934 = state_51156__$1;
(statearr_51271_51934[(5)] = ex51263);


var statearr_51272_51935 = state_51156__$1;
(statearr_51272_51935[(1)] = (36));

(statearr_51272_51935[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (35))){
var inst_50876 = (state_51156[(35)]);
var _ = (function (){var statearr_51273 = state_51156;
(statearr_51273[(4)] = cljs.core.rest((state_51156[(4)])));

return statearr_51273;
})();
var inst_50879 = (state_51156[(2)]);
var inst_50880 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_50876);
var ___$1 = (function (){var temp__5825__auto__ = (state_51156[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31623__auto__ = temp__5825__auto__;
throw e__31623__auto__;
} else {
return null;
}
})();
var state_51156__$1 = (function (){var statearr_51274 = state_51156;
(statearr_51274[(45)] = inst_50880);

return statearr_51274;
})();
var statearr_51275_51936 = state_51156__$1;
(statearr_51275_51936[(2)] = inst_50879);

(statearr_51275_51936[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (82))){
var inst_51049 = (state_51156[(46)]);
var inst_50948 = (state_51156[(21)]);
var inst_50949 = (state_51156[(22)]);
var inst_50950 = (state_51156[(23)]);
var inst_51058 = cljs.core.first(inst_51049);
var inst_51060 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_51058);
var inst_51061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51063 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_51064 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_51065 = [inst_50948,inst_50949];
var inst_51066 = cljs.core.PersistentHashMap.fromArrays(inst_51064,inst_51065);
var inst_51067 = [inst_51066];
var inst_51068 = cljs.core.PersistentHashMap.fromArrays(inst_51063,inst_51067);
var inst_51069 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51070 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_51071 = bb_web_ds_tools.runtime.webr.get_width(inst_51058);
var inst_51072 = (inst_51071 * inst_50950);
var inst_51073 = (inst_51072 | (0));
var inst_51074 = bb_web_ds_tools.runtime.webr.get_height(inst_51058);
var inst_51075 = (inst_51074 * inst_50950);
var inst_51076 = (inst_51075 | (0));
var inst_51077 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_51078 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51060),")"].join('');
var inst_51079 = [inst_51078,"cover"];
var inst_51080 = cljs.core.PersistentHashMap.fromArrays(inst_51077,inst_51079);
var inst_51081 = [inst_51073,inst_51076,inst_51080];
var inst_51082 = cljs.core.PersistentHashMap.fromArrays(inst_51070,inst_51081);
var inst_51083 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_51082];
var inst_51084 = (new cljs.core.PersistentVector(null,2,(5),inst_51069,inst_51083,null));
var inst_51085 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_51068,inst_51084];
var inst_51086 = (new cljs.core.PersistentVector(null,3,(5),inst_51061,inst_51085,null));
var inst_51087 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51088 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_51086,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_51089 = (new cljs.core.PersistentVector(null,3,(5),inst_51087,inst_51088,null));
var inst_51090 = re_frame.core.dispatch(inst_51089);
var inst_51091 = cljs.core.next(inst_51049);
var inst_51007 = inst_51091;
var inst_51008 = null;
var inst_51009 = (0);
var inst_51010 = (0);
var state_51156__$1 = (function (){var statearr_51278 = state_51156;
(statearr_51278[(47)] = inst_51090);

(statearr_51278[(31)] = inst_51007);

(statearr_51278[(29)] = inst_51008);

(statearr_51278[(32)] = inst_51009);

(statearr_51278[(30)] = inst_51010);

return statearr_51278;
})();
var statearr_51280_51952 = state_51156__$1;
(statearr_51280_51952[(2)] = null);

(statearr_51280_51952[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (76))){
var inst_51007 = (state_51156[(31)]);
var inst_51049 = (state_51156[(46)]);
var inst_51049__$1 = cljs.core.seq(inst_51007);
var state_51156__$1 = (function (){var statearr_51281 = state_51156;
(statearr_51281[(46)] = inst_51049__$1);

return statearr_51281;
})();
if(inst_51049__$1){
var statearr_51282_51953 = state_51156__$1;
(statearr_51282_51953[(1)] = (78));

} else {
var statearr_51283_51954 = state_51156__$1;
(statearr_51283_51954[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (97))){
var _ = (function (){var statearr_51284 = state_51156;
(statearr_51284[(4)] = cljs.core.rest((state_51156[(4)])));

return statearr_51284;
})();
var state_51156__$1 = state_51156;
var ex51276 = (state_51156__$1[(2)]);
var statearr_51286_51955 = state_51156__$1;
(statearr_51286_51955[(5)] = ex51276);


if((ex51276 instanceof Error)){
var statearr_51287_51956 = state_51156__$1;
(statearr_51287_51956[(1)] = (96));

(statearr_51287_51956[(5)] = null);

} else {
throw ex51276;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (19))){
var inst_50834 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
if(cljs.core.truth_(inst_50834)){
var statearr_51291_51957 = state_51156__$1;
(statearr_51291_51957[(1)] = (20));

} else {
var statearr_51292_51958 = state_51156__$1;
(statearr_51292_51958[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (57))){
var inst_50939 = (state_51156[(26)]);
var inst_50999 = (state_51156[(2)]);
var inst_51004 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50939);
var inst_51006 = cljs.core.seq(inst_51004);
var inst_51007 = inst_51006;
var inst_51008 = null;
var inst_51009 = (0);
var inst_51010 = (0);
var state_51156__$1 = (function (){var statearr_51293 = state_51156;
(statearr_51293[(48)] = inst_50999);

(statearr_51293[(31)] = inst_51007);

(statearr_51293[(29)] = inst_51008);

(statearr_51293[(32)] = inst_51009);

(statearr_51293[(30)] = inst_51010);

return statearr_51293;
})();
var statearr_51294_51968 = state_51156__$1;
(statearr_51294_51968[(2)] = null);

(statearr_51294_51968[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (68))){
var inst_50973 = (state_51156[(12)]);
var inst_50982 = (state_51156[(7)]);
var inst_50982__$1 = cljs.core.first(inst_50973);
var state_51156__$1 = (function (){var statearr_51295 = state_51156;
(statearr_51295[(7)] = inst_50982__$1);

return statearr_51295;
})();
if(cljs.core.truth_(inst_50982__$1)){
var statearr_51296_51969 = state_51156__$1;
(statearr_51296_51969[(1)] = (70));

} else {
var statearr_51297_51970 = state_51156__$1;
(statearr_51297_51970[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (11))){
var inst_50814 = (state_51156[(2)]);
var inst_50815 = (function(){throw inst_50814})();
var state_51156__$1 = state_51156;
var statearr_51299_51971 = state_51156__$1;
(statearr_51299_51971[(2)] = inst_50815);

(statearr_51299_51971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (9))){
var inst_50813 = (state_51156[(37)]);
var _ = (function (){var statearr_51300 = state_51156;
(statearr_51300[(4)] = cljs.core.cons((12),(state_51156[(4)])));

return statearr_51300;
})();
var inst_50821 = (inst_50813 instanceof Promise);
var state_51156__$1 = state_51156;
if(cljs.core.truth_(inst_50821)){
var statearr_51301_51972 = state_51156__$1;
(statearr_51301_51972[(1)] = (13));

} else {
var statearr_51302_51973 = state_51156__$1;
(statearr_51302_51973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (5))){
var _ = (function (){var statearr_51303 = state_51156;
(statearr_51303[(4)] = cljs.core.rest((state_51156[(4)])));

return statearr_51303;
})();
var state_51156__$1 = state_51156;
var ex51298 = (state_51156__$1[(2)]);
var statearr_51304_51977 = state_51156__$1;
(statearr_51304_51977[(5)] = ex51298);


var statearr_51305_51978 = state_51156__$1;
(statearr_51305_51978[(1)] = (4));

(statearr_51305_51978[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (83))){
var inst_51094 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51308_51979 = state_51156__$1;
(statearr_51308_51979[(2)] = inst_51094);

(statearr_51308_51979[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (14))){
var inst_50813 = (state_51156[(37)]);
var inst_50841 = inst_50813.init;
var inst_50842 = (inst_50841 == null);
var inst_50843 = cljs.core.not(inst_50842);
var state_51156__$1 = state_51156;
if(inst_50843){
var statearr_51309_51980 = state_51156__$1;
(statearr_51309_51980[(1)] = (23));

} else {
var statearr_51310_51984 = state_51156__$1;
(statearr_51310_51984[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (45))){
var inst_50883 = (state_51156[(36)]);
var inst_50901 = bb_web_ds_tools.runtime.webr.get_error_details(inst_50883);
var state_51156__$1 = state_51156;
var statearr_51311_51985 = state_51156__$1;
(statearr_51311_51985[(2)] = inst_50901);

(statearr_51311_51985[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (53))){
var inst_50923 = (state_51156[(27)]);
var state_51156__$1 = state_51156;
var statearr_51312_51986 = state_51156__$1;
(statearr_51312_51986[(2)] = inst_50923);

(statearr_51312_51986[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (78))){
var inst_51049 = (state_51156[(46)]);
var inst_51051 = cljs.core.chunked_seq_QMARK_(inst_51049);
var state_51156__$1 = state_51156;
if(inst_51051){
var statearr_51317_51987 = state_51156__$1;
(statearr_51317_51987[(1)] = (81));

} else {
var statearr_51318_51988 = state_51156__$1;
(statearr_51318_51988[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (26))){
var inst_50848 = (state_51156[(20)]);
var inst_50850 = (state_51156[(42)]);
var inst_50848__$1 = (state_51156[(2)]);
var inst_50850__$1 = (inst_50848__$1 instanceof cljs.core.ExceptionInfo);
var state_51156__$1 = (function (){var statearr_51323 = state_51156;
(statearr_51323[(20)] = inst_50848__$1);

(statearr_51323[(42)] = inst_50850__$1);

return statearr_51323;
})();
if(cljs.core.truth_(inst_50850__$1)){
var statearr_51324_51989 = state_51156__$1;
(statearr_51324_51989[(1)] = (27));

} else {
var statearr_51325_51990 = state_51156__$1;
(statearr_51325_51990[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (16))){
var inst_50826 = (state_51156[(14)]);
var inst_50827 = (state_51156[(49)]);
var inst_50826__$1 = (state_51156[(2)]);
var inst_50827__$1 = (inst_50826__$1 instanceof cljs.core.ExceptionInfo);
var state_51156__$1 = (function (){var statearr_51326 = state_51156;
(statearr_51326[(14)] = inst_50826__$1);

(statearr_51326[(49)] = inst_50827__$1);

return statearr_51326;
})();
if(cljs.core.truth_(inst_50827__$1)){
var statearr_51327_51991 = state_51156__$1;
(statearr_51327_51991[(1)] = (17));

} else {
var statearr_51328_51992 = state_51156__$1;
(statearr_51328_51992[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (81))){
var inst_51049 = (state_51156[(46)]);
var inst_51053 = cljs.core.chunk_first(inst_51049);
var inst_51054 = cljs.core.chunk_rest(inst_51049);
var inst_51055 = cljs.core.count(inst_51053);
var inst_51007 = inst_51054;
var inst_51008 = inst_51053;
var inst_51009 = inst_51055;
var inst_51010 = (0);
var state_51156__$1 = (function (){var statearr_51329 = state_51156;
(statearr_51329[(31)] = inst_51007);

(statearr_51329[(29)] = inst_51008);

(statearr_51329[(32)] = inst_51009);

(statearr_51329[(30)] = inst_51010);

return statearr_51329;
})();
var statearr_51330_51996 = state_51156__$1;
(statearr_51330_51996[(2)] = null);

(statearr_51330_51996[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (79))){
var state_51156__$1 = state_51156;
var statearr_51331_51999 = state_51156__$1;
(statearr_51331_51999[(2)] = null);

(statearr_51331_51999[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (38))){
var inst_50884 = (state_51156[(38)]);
var state_51156__$1 = state_51156;
var statearr_51332_52006 = state_51156__$1;
(statearr_51332_52006[(2)] = inst_50884);

(statearr_51332_52006[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (87))){
var inst_51107 = (state_51156[(24)]);
var inst_51108 = (state_51156[(39)]);
var inst_51107__$1 = (state_51156[(2)]);
var inst_51108__$1 = (inst_51107__$1 instanceof cljs.core.ExceptionInfo);
var state_51156__$1 = (function (){var statearr_51333 = state_51156;
(statearr_51333[(24)] = inst_51107__$1);

(statearr_51333[(39)] = inst_51108__$1);

return statearr_51333;
})();
if(cljs.core.truth_(inst_51108__$1)){
var statearr_51334_52007 = state_51156__$1;
(statearr_51334_52007[(1)] = (88));

} else {
var statearr_51335_52011 = state_51156__$1;
(statearr_51335_52011[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (30))){
var inst_50848 = (state_51156[(20)]);
var inst_50865 = (function(){throw inst_50848})();
var state_51156__$1 = state_51156;
var statearr_51336_52012 = state_51156__$1;
(statearr_51336_52012[(2)] = inst_50865);

(statearr_51336_52012[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (73))){
var inst_51010 = (state_51156[(30)]);
var inst_51009 = (state_51156[(32)]);
var inst_51012 = (inst_51010 < inst_51009);
var inst_51013 = inst_51012;
var state_51156__$1 = state_51156;
if(cljs.core.truth_(inst_51013)){
var statearr_51337_52013 = state_51156__$1;
(statearr_51337_52013[(1)] = (75));

} else {
var statearr_51338_52014 = state_51156__$1;
(statearr_51338_52014[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (96))){
var inst_50940 = (state_51156[(8)]);
var inst_51124 = (state_51156[(2)]);
var inst_51125 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50940);
var state_51156__$1 = (function (){var statearr_51339 = state_51156;
(statearr_51339[(50)] = inst_51124);

return statearr_51339;
})();
var statearr_51340_52015 = state_51156__$1;
(statearr_51340_52015[(2)] = inst_51125);

(statearr_51340_52015[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (10))){
var inst_50876 = (state_51156[(2)]);
var state_51156__$1 = (function (){var statearr_51341 = state_51156;
(statearr_51341[(35)] = inst_50876);

return statearr_51341;
})();
var statearr_51342_52019 = state_51156__$1;
(statearr_51342_52019[(2)] = null);

(statearr_51342_52019[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (18))){
var inst_50827 = (state_51156[(49)]);
var state_51156__$1 = state_51156;
var statearr_51343_52020 = state_51156__$1;
(statearr_51343_52020[(2)] = inst_50827);

(statearr_51343_52020[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (52))){
var inst_50923 = (state_51156[(27)]);
var inst_50933 = (function(){throw inst_50923})();
var state_51156__$1 = state_51156;
var statearr_51344_52021 = state_51156__$1;
(statearr_51344_52021[(2)] = inst_50933);

(statearr_51344_52021[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (67))){
var inst_50973 = (state_51156[(12)]);
var inst_50977 = cljs.core.chunk_first(inst_50973);
var inst_50978 = cljs.core.chunk_rest(inst_50973);
var inst_50979 = cljs.core.count(inst_50977);
var inst_50956 = inst_50978;
var inst_50957 = inst_50977;
var inst_50958 = inst_50979;
var inst_50959 = (0);
var state_51156__$1 = (function (){var statearr_51345 = state_51156;
(statearr_51345[(11)] = inst_50956);

(statearr_51345[(16)] = inst_50957);

(statearr_51345[(17)] = inst_50958);

(statearr_51345[(18)] = inst_50959);

return statearr_51345;
})();
var statearr_51347_52022 = state_51156__$1;
(statearr_51347_52022[(2)] = null);

(statearr_51347_52022[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (71))){
var state_51156__$1 = state_51156;
var statearr_51348_52026 = state_51156__$1;
(statearr_51348_52026[(2)] = null);

(statearr_51348_52026[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (42))){
var inst_50897 = (state_51156[(40)]);
var inst_50897__$1 = (state_51156[(2)]);
var inst_50898 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var state_51156__$1 = (function (){var statearr_51349 = state_51156;
(statearr_51349[(40)] = inst_50897__$1);

(statearr_51349[(25)] = inst_50898);

return statearr_51349;
})();
if(cljs.core.truth_(inst_50897__$1)){
var statearr_51350_52028 = state_51156__$1;
(statearr_51350_52028[(1)] = (44));

} else {
var statearr_51351_52029 = state_51156__$1;
(statearr_51351_52029[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (80))){
var inst_51097 = (state_51156[(2)]);
var state_51156__$1 = state_51156;
var statearr_51356_52030 = state_51156__$1;
(statearr_51356_52030[(2)] = inst_51097);

(statearr_51356_52030[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (37))){
var inst_50883 = (state_51156[(36)]);
var inst_50886 = inst_50883.message;
var inst_50887 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50886,"Promise error");
var state_51156__$1 = state_51156;
var statearr_51357_52031 = state_51156__$1;
(statearr_51357_52031[(2)] = inst_50887);

(statearr_51357_52031[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (63))){
var inst_50959 = (state_51156[(18)]);
var inst_50956 = (state_51156[(11)]);
var inst_50957 = (state_51156[(16)]);
var inst_50958 = (state_51156[(17)]);
var inst_50969 = (state_51156[(2)]);
var inst_50970 = (inst_50959 + (1));
var tmp51353 = inst_50958;
var tmp51354 = inst_50957;
var tmp51355 = inst_50956;
var inst_50956__$1 = tmp51355;
var inst_50957__$1 = tmp51354;
var inst_50958__$1 = tmp51353;
var inst_50959__$1 = inst_50970;
var state_51156__$1 = (function (){var statearr_51359 = state_51156;
(statearr_51359[(51)] = inst_50969);

(statearr_51359[(11)] = inst_50956__$1);

(statearr_51359[(16)] = inst_50957__$1);

(statearr_51359[(17)] = inst_50958__$1);

(statearr_51359[(18)] = inst_50959__$1);

return statearr_51359;
})();
var statearr_51360_52032 = state_51156__$1;
(statearr_51360_52032[(2)] = null);

(statearr_51360_52032[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (94))){
var inst_51123 = (state_51156[(13)]);
var _ = (function (){var statearr_51361 = state_51156;
(statearr_51361[(4)] = cljs.core.cons((97),(state_51156[(4)])));

return statearr_51361;
})();
var inst_51131 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_51123,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_51362 = state_51156;
(statearr_51362[(4)] = cljs.core.rest((state_51156[(4)])));

return statearr_51362;
})();
var state_51156__$1 = state_51156;
var statearr_51363_52034 = state_51156__$1;
(statearr_51363_52034[(2)] = inst_51131);

(statearr_51363_52034[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (8))){
var inst_51146 = (state_51156[(2)]);
var _ = (function (){var statearr_51366 = state_51156;
(statearr_51366[(4)] = cljs.core.rest((state_51156[(4)])));

return statearr_51366;
})();
var state_51156__$1 = state_51156;
var statearr_51367_52035 = state_51156__$1;
(statearr_51367_52035[(2)] = inst_51146);

(statearr_51367_52035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (49))){
var inst_50923 = (state_51156[(27)]);
var inst_50926 = cljs.core.ex_data(inst_50923);
var inst_50927 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50926);
var inst_50928 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50927,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_51156__$1 = state_51156;
var statearr_51368_52036 = state_51156__$1;
(statearr_51368_52036[(2)] = inst_50928);

(statearr_51368_52036[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51157 === (84))){
var inst_51102 = (state_51156[(9)]);
var inst_51105 = cljs.core.async.interop.p__GT_c(inst_51102);
var state_51156__$1 = state_51156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51156__$1,(87),inst_51105);
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
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0 = (function (){
var statearr_51371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51371[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32391__auto__);

(statearr_51371[(1)] = (1));

return statearr_51371;
});
var bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1 = (function (state_51156){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_51156);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e51373){var ex__32394__auto__ = e51373;
var statearr_51374_52042 = state_51156;
(statearr_51374_52042[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_51156[(4)]))){
var statearr_51375_52046 = state_51156;
(statearr_51375_52046[(1)] = cljs.core.first((state_51156[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52056 = state_51156;
state_51156 = G__52056;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__ = function(state_51156){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1.call(this,state_51156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32391__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32391__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_51377 = f__32472__auto__();
(statearr_51377[(6)] = c__32471__auto__);

return statearr_51377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
} else {
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null));
}
}));

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$applyTo = (function (seq50789){
var G__50790 = cljs.core.first(seq50789);
var seq50789__$1 = cljs.core.next(seq50789);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50790,seq50789__$1);
}));


//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
