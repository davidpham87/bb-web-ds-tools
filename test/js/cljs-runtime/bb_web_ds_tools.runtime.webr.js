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
var len__5749__auto___51384 = arguments.length;
var i__5750__auto___51385 = (0);
while(true){
if((i__5750__auto___51385 < len__5749__auto___51384)){
args__5755__auto__.push((arguments[i__5750__auto___51385]));

var G__51386 = (i__5750__auto___51385 + (1));
i__5750__auto___51385 = G__51386;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__50145,p__50146){
var map__50147 = p__50145;
var map__50147__$1 = cljs.core.__destructure_map(map__50147);
var value = map__50147__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50147__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__50148 = p__50146;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50148,(0),null);
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
if(cljs.core.truth_((function (){var G__50152 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__50151 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__50151.cljs$core$IFn$_invoke$arity$1 ? fexpr__50151.cljs$core$IFn$_invoke$arity$1(G__50152) : fexpr__50151.call(null,G__50152));
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
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_50156){
var state_val_50157 = (state_50156[(1)]);
if((state_val_50157 === (1))){
var state_50156__$1 = state_50156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50156__$1,(2),bb_web_ds_tools.runtime.webr.input_buffer,text);
} else {
if((state_val_50157 === (2))){
var inst_50154 = (state_50156[(2)]);
var state_50156__$1 = state_50156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50156__$1,inst_50154);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0 = (function (){
var statearr_50158 = [null,null,null,null,null,null,null];
(statearr_50158[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32540__auto__);

(statearr_50158[(1)] = (1));

return statearr_50158;
});
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1 = (function (state_50156){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_50156);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e50159){var ex__32543__auto__ = e50159;
var statearr_50160_51390 = state_50156;
(statearr_50160_51390[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_50156[(4)]))){
var statearr_50161_51391 = state_50156;
(statearr_50161_51391[(1)] = cljs.core.first((state_50156[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51392 = state_50156;
state_50156 = G__51392;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__ = function(state_50156){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1.call(this,state_50156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_50162 = f__32611__auto__();
(statearr_50162[(6)] = c__32610__auto__);

return statearr_50162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),viewer__$1], null));

}
}
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq50143){
var G__50144 = cljs.core.first(seq50143);
var seq50143__$1 = cljs.core.next(seq50143);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50144,seq50143__$1);
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
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_50231){
var state_val_50232 = (state_50231[(1)]);
if((state_val_50232 === (7))){
var inst_50227 = (state_50231[(2)]);
var state_50231__$1 = state_50231;
var statearr_50234_51397 = state_50231__$1;
(statearr_50234_51397[(2)] = inst_50227);

(statearr_50234_51397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (20))){
var inst_50207 = (state_50231[(7)]);
var inst_50211 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50207);
var state_50231__$1 = state_50231;
var statearr_50235_51398 = state_50231__$1;
(statearr_50235_51398[(2)] = inst_50211);

(statearr_50235_51398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (1))){
var inst_50163 = (state_50231[(8)]);
var inst_50163__$1 = msg.type;
var inst_50164 = msg.data;
var inst_50165 = ["stderr",null,"stdout",null];
var inst_50166 = (new cljs.core.PersistentArrayMap(null,2,inst_50165,null));
var inst_50167 = (new cljs.core.PersistentHashSet(null,inst_50166,null));
var inst_50168 = (inst_50167.cljs$core$IFn$_invoke$arity$1 ? inst_50167.cljs$core$IFn$_invoke$arity$1(inst_50163__$1) : inst_50167.call(null,inst_50163__$1));
var state_50231__$1 = (function (){var statearr_50236 = state_50231;
(statearr_50236[(8)] = inst_50163__$1);

(statearr_50236[(9)] = inst_50164);

return statearr_50236;
})();
if(cljs.core.truth_(inst_50168)){
var statearr_50237_51399 = state_50231__$1;
(statearr_50237_51399[(1)] = (2));

} else {
var statearr_50238_51400 = state_50231__$1;
(statearr_50238_51400[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (24))){
var inst_50225 = (state_50231[(2)]);
var state_50231__$1 = state_50231;
var statearr_50239_51401 = state_50231__$1;
(statearr_50239_51401[(2)] = inst_50225);

(statearr_50239_51401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (4))){
var inst_50229 = (state_50231[(2)]);
var state_50231__$1 = state_50231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50231__$1,inst_50229);
} else {
if((state_val_50232 === (15))){
var inst_50201 = (state_50231[(2)]);
var state_50231__$1 = state_50231;
if(cljs.core.truth_(inst_50201)){
var statearr_50241_51403 = state_50231__$1;
(statearr_50241_51403[(1)] = (16));

} else {
var statearr_50248_51404 = state_50231__$1;
(statearr_50248_51404[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (21))){
var inst_50163 = (state_50231[(8)]);
var inst_50213 = (state_50231[(2)]);
var inst_50214 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50215 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_50163);
var inst_50216 = [inst_50215,inst_50213];
var inst_50217 = cljs.core.PersistentHashMap.fromArrays(inst_50214,inst_50216);
var _ = (function (){var statearr_50249 = state_50231;
(statearr_50249[(4)] = cljs.core.rest((state_50231[(4)])));

return statearr_50249;
})();
var state_50231__$1 = state_50231;
var statearr_50250_51408 = state_50231__$1;
(statearr_50250_51408[(2)] = inst_50217);

(statearr_50250_51408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (13))){
var inst_50193 = (state_50231[(10)]);
var inst_50196 = cljs.core.ex_data(inst_50193);
var inst_50197 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50196);
var inst_50198 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50197,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50231__$1 = state_50231;
var statearr_50251_51409 = state_50231__$1;
(statearr_50251_51409[(2)] = inst_50198);

(statearr_50251_51409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (22))){
var state_50231__$1 = state_50231;
var statearr_50252_51410 = state_50231__$1;
(statearr_50252_51410[(2)] = null);

(statearr_50252_51410[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (6))){
var state_50231__$1 = state_50231;
var statearr_50253_51413 = state_50231__$1;
(statearr_50253_51413[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (17))){
var inst_50193 = (state_50231[(10)]);
var state_50231__$1 = state_50231;
var statearr_50255_51414 = state_50231__$1;
(statearr_50255_51414[(2)] = inst_50193);

(statearr_50255_51414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (3))){
var inst_50163 = (state_50231[(8)]);
var inst_50175 = ["message",null,"warning",null];
var inst_50176 = (new cljs.core.PersistentArrayMap(null,2,inst_50175,null));
var inst_50177 = (new cljs.core.PersistentHashSet(null,inst_50176,null));
var inst_50178 = (inst_50177.cljs$core$IFn$_invoke$arity$1 ? inst_50177.cljs$core$IFn$_invoke$arity$1(inst_50163) : inst_50177.call(null,inst_50163));
var state_50231__$1 = state_50231;
if(cljs.core.truth_(inst_50178)){
var statearr_50260_51415 = state_50231__$1;
(statearr_50260_51415[(1)] = (5));

} else {
var statearr_50261_51416 = state_50231__$1;
(statearr_50261_51416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (12))){
var inst_50193 = (state_50231[(10)]);
var inst_50194 = (state_50231[(11)]);
var inst_50193__$1 = (state_50231[(2)]);
var inst_50194__$1 = (inst_50193__$1 instanceof cljs.core.ExceptionInfo);
var state_50231__$1 = (function (){var statearr_50262 = state_50231;
(statearr_50262[(10)] = inst_50193__$1);

(statearr_50262[(11)] = inst_50194__$1);

return statearr_50262;
})();
if(cljs.core.truth_(inst_50194__$1)){
var statearr_50263_51417 = state_50231__$1;
(statearr_50263_51417[(1)] = (13));

} else {
var statearr_50264_51418 = state_50231__$1;
(statearr_50264_51418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (2))){
var inst_50163 = (state_50231[(8)]);
var inst_50164 = (state_50231[(9)]);
var inst_50170 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50171 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_50163);
var inst_50172 = [inst_50171,inst_50164];
var inst_50173 = cljs.core.PersistentHashMap.fromArrays(inst_50170,inst_50172);
var state_50231__$1 = state_50231;
var statearr_50265_51419 = state_50231__$1;
(statearr_50265_51419[(2)] = inst_50173);

(statearr_50265_51419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (23))){
var state_50231__$1 = state_50231;
var statearr_50267_51421 = state_50231__$1;
(statearr_50267_51421[(2)] = null);

(statearr_50267_51421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (19))){
var inst_50208 = (state_50231[(12)]);
var state_50231__$1 = state_50231;
var statearr_50268_51425 = state_50231__$1;
(statearr_50268_51425[(2)] = inst_50208);

(statearr_50268_51425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (11))){
var _ = (function (){var statearr_50269 = state_50231;
(statearr_50269[(4)] = cljs.core.rest((state_50231[(4)])));

return statearr_50269;
})();
var state_50231__$1 = state_50231;
var ex50266 = (state_50231__$1[(2)]);
var statearr_50270_51432 = state_50231__$1;
(statearr_50270_51432[(5)] = ex50266);


var statearr_50271_51433 = state_50231__$1;
(statearr_50271_51433[(1)] = (10));

(statearr_50271_51433[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (9))){
var inst_50220 = (state_50231[(2)]);
var state_50231__$1 = state_50231;
var statearr_50272_51434 = state_50231__$1;
(statearr_50272_51434[(2)] = inst_50220);

(statearr_50272_51434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (5))){
var state_50231__$1 = state_50231;
var statearr_50273_51435 = state_50231__$1;
(statearr_50273_51435[(2)] = null);

(statearr_50273_51435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (14))){
var inst_50194 = (state_50231[(11)]);
var state_50231__$1 = state_50231;
var statearr_50275_51436 = state_50231__$1;
(statearr_50275_51436[(2)] = inst_50194);

(statearr_50275_51436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (16))){
var inst_50193 = (state_50231[(10)]);
var inst_50203 = (function(){throw inst_50193})();
var state_50231__$1 = state_50231;
var statearr_50285_51439 = state_50231__$1;
(statearr_50285_51439[(2)] = inst_50203);

(statearr_50285_51439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (10))){
var inst_50163 = (state_50231[(8)]);
var inst_50180 = (state_50231[(2)]);
var inst_50181 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50182 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_50163);
var inst_50183 = [inst_50182,"Error decoding message"];
var inst_50184 = cljs.core.PersistentHashMap.fromArrays(inst_50181,inst_50183);
var state_50231__$1 = (function (){var statearr_50291 = state_50231;
(statearr_50291[(13)] = inst_50180);

return statearr_50291;
})();
var statearr_50292_51446 = state_50231__$1;
(statearr_50292_51446[(2)] = inst_50184);

(statearr_50292_51446[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (18))){
var inst_50207 = (state_50231[(7)]);
var inst_50208 = (state_50231[(12)]);
var inst_50206 = (state_50231[(2)]);
var inst_50207__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50206,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_50208__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_50207__$1);
var state_50231__$1 = (function (){var statearr_50293 = state_50231;
(statearr_50293[(7)] = inst_50207__$1);

(statearr_50293[(12)] = inst_50208__$1);

return statearr_50293;
})();
if(cljs.core.truth_(inst_50208__$1)){
var statearr_50294_51450 = state_50231__$1;
(statearr_50294_51450[(1)] = (19));

} else {
var statearr_50295_51451 = state_50231__$1;
(statearr_50295_51451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50232 === (8))){
var inst_50164 = (state_50231[(9)]);
var _ = (function (){var statearr_50296 = state_50231;
(statearr_50296[(4)] = cljs.core.cons((11),(state_50231[(4)])));

return statearr_50296;
})();
var inst_50190 = bb_web_ds_tools.runtime.webr.to_js(inst_50164);
var inst_50191 = cljs.core.async.interop.p__GT_c(inst_50190);
var state_50231__$1 = state_50231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50231__$1,(12),inst_50191);
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
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto__ = null;
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto____0 = (function (){
var statearr_50297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50297[(0)] = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto__);

(statearr_50297[(1)] = (1));

return statearr_50297;
});
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto____1 = (function (state_50231){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_50231);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e50298){var ex__32543__auto__ = e50298;
var statearr_50299_51457 = state_50231;
(statearr_50299_51457[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_50231[(4)]))){
var statearr_50300_51458 = state_50231;
(statearr_50300_51458[(1)] = cljs.core.first((state_50231[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51462 = state_50231;
state_50231 = G__51462;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto__ = function(state_50231){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto____1.call(this,state_50231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto____0;
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto____1;
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_50301 = f__32611__auto__();
(statearr_50301[(6)] = c__32610__auto__);

return statearr_50301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
});
bb_web_ds_tools.runtime.webr.process_capture_msgs = (function bb_web_ds_tools$runtime$webr$process_capture_msgs(output){
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_50341){
var state_val_50342 = (state_50341[(1)]);
if((state_val_50342 === (7))){
var inst_50318 = (state_50341[(7)]);
var inst_50325 = (state_50341[(8)]);
var inst_50327 = (state_50341[(2)]);
var inst_50328 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50318,inst_50327);
var state_50341__$1 = (function (){var statearr_50343 = state_50341;
(statearr_50343[(9)] = inst_50328);

return statearr_50343;
})();
if(cljs.core.truth_(inst_50325)){
var statearr_50344_51464 = state_50341__$1;
(statearr_50344_51464[(1)] = (8));

} else {
var statearr_50345_51465 = state_50341__$1;
(statearr_50345_51465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50342 === (1))){
var inst_50303 = (state_50341[(10)]);
var inst_50302 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(output);
var inst_50303__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,inst_50302);
var inst_50304 = cljs.core.seq(inst_50303__$1);
var state_50341__$1 = (function (){var statearr_50346 = state_50341;
(statearr_50346[(10)] = inst_50303__$1);

return statearr_50346;
})();
if(inst_50304){
var statearr_50347_51466 = state_50341__$1;
(statearr_50347_51466[(1)] = (2));

} else {
var statearr_50348_51467 = state_50341__$1;
(statearr_50348_51467[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50342 === (4))){
var inst_50339 = (state_50341[(2)]);
var state_50341__$1 = state_50341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50341__$1,inst_50339);
} else {
if((state_val_50342 === (6))){
var inst_50335 = (state_50341[(2)]);
var state_50341__$1 = state_50341;
var statearr_50349_51468 = state_50341__$1;
(statearr_50349_51468[(2)] = inst_50335);

(statearr_50349_51468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50342 === (3))){
var inst_50337 = cljs.core.PersistentVector.EMPTY;
var state_50341__$1 = state_50341;
var statearr_50350_51469 = state_50341__$1;
(statearr_50350_51469[(2)] = inst_50337);

(statearr_50350_51469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50342 === (2))){
var inst_50303 = (state_50341[(10)]);
var inst_50313 = cljs.core.seq(inst_50303);
var inst_50314 = cljs.core.first(inst_50313);
var inst_50315 = cljs.core.next(inst_50313);
var inst_50316 = cljs.core.PersistentVector.EMPTY;
var inst_50317 = inst_50303;
var inst_50318 = inst_50316;
var state_50341__$1 = (function (){var statearr_50351 = state_50341;
(statearr_50351[(11)] = inst_50314);

(statearr_50351[(12)] = inst_50315);

(statearr_50351[(13)] = inst_50317);

(statearr_50351[(7)] = inst_50318);

return statearr_50351;
})();
var statearr_50352_51470 = state_50341__$1;
(statearr_50352_51470[(2)] = null);

(statearr_50352_51470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50342 === (9))){
var inst_50328 = (state_50341[(9)]);
var state_50341__$1 = state_50341;
var statearr_50353_51471 = state_50341__$1;
(statearr_50353_51471[(2)] = inst_50328);

(statearr_50353_51471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50342 === (5))){
var inst_50317 = (state_50341[(13)]);
var inst_50323 = cljs.core.seq(inst_50317);
var inst_50324 = cljs.core.first(inst_50323);
var inst_50325 = cljs.core.next(inst_50323);
var state_50341__$1 = (function (){var statearr_50354 = state_50341;
(statearr_50354[(8)] = inst_50325);

return statearr_50354;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50341__$1,(7),inst_50324);
} else {
if((state_val_50342 === (10))){
var inst_50333 = (state_50341[(2)]);
var state_50341__$1 = state_50341;
var statearr_50355_51472 = state_50341__$1;
(statearr_50355_51472[(2)] = inst_50333);

(statearr_50355_51472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50342 === (8))){
var inst_50325 = (state_50341[(8)]);
var inst_50328 = (state_50341[(9)]);
var inst_50317 = inst_50325;
var inst_50318 = inst_50328;
var state_50341__$1 = (function (){var statearr_50356 = state_50341;
(statearr_50356[(13)] = inst_50317);

(statearr_50356[(7)] = inst_50318);

return statearr_50356;
})();
var statearr_50357_51473 = state_50341__$1;
(statearr_50357_51473[(2)] = null);

(statearr_50357_51473[(1)] = (5));


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
var bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto__ = null;
var bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto____0 = (function (){
var statearr_50358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50358[(0)] = bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto__);

(statearr_50358[(1)] = (1));

return statearr_50358;
});
var bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto____1 = (function (state_50341){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_50341);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e50359){var ex__32543__auto__ = e50359;
var statearr_50360_51475 = state_50341;
(statearr_50360_51475[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_50341[(4)]))){
var statearr_50361_51476 = state_50341;
(statearr_50361_51476[(1)] = cljs.core.first((state_50341[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51480 = state_50341;
state_50341 = G__51480;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto__ = function(state_50341){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto____1.call(this,state_50341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto____0;
bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto____1;
return bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_50362 = f__32611__auto__();
(statearr_50362[(6)] = c__32610__auto__);

return statearr_50362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
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
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_50412){
var state_val_50413 = (state_50412[(1)]);
if((state_val_50413 === (7))){
var inst_50408 = (state_50412[(2)]);
var state_50412__$1 = state_50412;
var statearr_50414_51481 = state_50412__$1;
(statearr_50414_51481[(2)] = inst_50408);

(statearr_50414_51481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (1))){
var inst_50363 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_50412__$1 = state_50412;
if(cljs.core.truth_(inst_50363)){
var statearr_50415_51482 = state_50412__$1;
(statearr_50415_51482[(1)] = (2));

} else {
var statearr_50417_51483 = state_50412__$1;
(statearr_50417_51483[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (4))){
var inst_50410 = (state_50412[(2)]);
var state_50412__$1 = state_50412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50412__$1,inst_50410);
} else {
if((state_val_50413 === (15))){
var inst_50395 = (state_50412[(2)]);
var state_50412__$1 = state_50412;
if(cljs.core.truth_(inst_50395)){
var statearr_50418_51484 = state_50412__$1;
(statearr_50418_51484[(1)] = (16));

} else {
var statearr_50419_51485 = state_50412__$1;
(statearr_50419_51485[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (13))){
var inst_50387 = (state_50412[(7)]);
var inst_50390 = cljs.core.ex_data(inst_50387);
var inst_50391 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50390);
var inst_50392 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50391,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50412__$1 = state_50412;
var statearr_50420_51486 = state_50412__$1;
(statearr_50420_51486[(2)] = inst_50392);

(statearr_50420_51486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (6))){
var inst_50406 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_50412__$1 = state_50412;
var statearr_50425_51487 = state_50412__$1;
(statearr_50425_51487[(2)] = inst_50406);

(statearr_50425_51487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (17))){
var inst_50387 = (state_50412[(7)]);
var state_50412__$1 = state_50412;
var statearr_50426_51488 = state_50412__$1;
(statearr_50426_51488[(2)] = inst_50387);

(statearr_50426_51488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (3))){
var inst_50367 = (typeof WebR !== 'undefined');
var state_50412__$1 = state_50412;
if(cljs.core.truth_(inst_50367)){
var statearr_50431_51489 = state_50412__$1;
(statearr_50431_51489[(1)] = (5));

} else {
var statearr_50432_51490 = state_50412__$1;
(statearr_50432_51490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (12))){
var inst_50387 = (state_50412[(7)]);
var inst_50388 = (state_50412[(8)]);
var inst_50387__$1 = (state_50412[(2)]);
var inst_50388__$1 = (inst_50387__$1 instanceof cljs.core.ExceptionInfo);
var state_50412__$1 = (function (){var statearr_50434 = state_50412;
(statearr_50434[(7)] = inst_50387__$1);

(statearr_50434[(8)] = inst_50388__$1);

return statearr_50434;
})();
if(cljs.core.truth_(inst_50388__$1)){
var statearr_50435_51491 = state_50412__$1;
(statearr_50435_51491[(1)] = (13));

} else {
var statearr_50436_51492 = state_50412__$1;
(statearr_50436_51492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (2))){
var inst_50365 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_50412__$1 = state_50412;
var statearr_50441_51494 = state_50412__$1;
(statearr_50441_51494[(2)] = inst_50365);

(statearr_50441_51494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (11))){
var _ = (function (){var statearr_50442 = state_50412;
(statearr_50442[(4)] = cljs.core.rest((state_50412[(4)])));

return statearr_50442;
})();
var state_50412__$1 = state_50412;
var ex50433 = (state_50412__$1[(2)]);
var statearr_50445_51498 = state_50412__$1;
(statearr_50445_51498[(5)] = ex50433);


var statearr_50447_51499 = state_50412__$1;
(statearr_50447_51499[(1)] = (10));

(statearr_50447_51499[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (9))){
var inst_50404 = (state_50412[(2)]);
var state_50412__$1 = state_50412;
var statearr_50451_51500 = state_50412__$1;
(statearr_50451_51500[(2)] = inst_50404);

(statearr_50451_51500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (5))){
var state_50412__$1 = state_50412;
var statearr_50452_51501 = state_50412__$1;
(statearr_50452_51501[(2)] = null);

(statearr_50452_51501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (14))){
var inst_50388 = (state_50412[(8)]);
var state_50412__$1 = state_50412;
var statearr_50459_51502 = state_50412__$1;
(statearr_50459_51502[(2)] = inst_50388);

(statearr_50459_51502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (16))){
var inst_50387 = (state_50412[(7)]);
var inst_50397 = (function(){throw inst_50387})();
var state_50412__$1 = state_50412;
var statearr_50460_51503 = state_50412__$1;
(statearr_50460_51503[(2)] = inst_50397);

(statearr_50460_51503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (10))){
var inst_50369 = (state_50412[(2)]);
var inst_50370 = console.error("WebR Init Error:",inst_50369);
var inst_50371 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50369)].join('');
var inst_50372 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_50371) : on_error.call(null,inst_50371));
var state_50412__$1 = (function (){var statearr_50461 = state_50412;
(statearr_50461[(9)] = inst_50370);

return statearr_50461;
})();
var statearr_50462_51504 = state_50412__$1;
(statearr_50462_51504[(2)] = inst_50372);

(statearr_50462_51504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (18))){
var inst_50400 = (state_50412[(2)]);
var inst_50401 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_50463 = state_50412;
(statearr_50463[(4)] = cljs.core.rest((state_50412[(4)])));

return statearr_50463;
})();
var state_50412__$1 = (function (){var statearr_50464 = state_50412;
(statearr_50464[(10)] = inst_50400);

return statearr_50464;
})();
var statearr_50465_51505 = state_50412__$1;
(statearr_50465_51505[(2)] = inst_50401);

(statearr_50465_51505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50413 === (8))){
var _ = (function (){var statearr_50470 = state_50412;
(statearr_50470[(4)] = cljs.core.cons((11),(state_50412[(4)])));

return statearr_50470;
})();
var inst_50378 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_50379 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_50380 = cljs.core.PersistentHashMap.fromArrays(inst_50378,inst_50379);
var inst_50381 = cljs.core.clj__GT_js(inst_50380);
var inst_50382 = (new WebR(inst_50381));
var inst_50383 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_50382);
var inst_50384 = bb_web_ds_tools.runtime.webr.init_obj(inst_50382);
var inst_50385 = cljs.core.async.interop.p__GT_c(inst_50384);
var state_50412__$1 = (function (){var statearr_50471 = state_50412;
(statearr_50471[(11)] = inst_50383);

return statearr_50471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50412__$1,(12),inst_50385);
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
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto__ = null;
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto____0 = (function (){
var statearr_50472 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50472[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto__);

(statearr_50472[(1)] = (1));

return statearr_50472;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto____1 = (function (state_50412){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_50412);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e50473){var ex__32543__auto__ = e50473;
var statearr_50474_51515 = state_50412;
(statearr_50474_51515[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_50412[(4)]))){
var statearr_50475_51516 = state_50412;
(statearr_50475_51516[(1)] = cljs.core.first((state_50412[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51518 = state_50412;
state_50412 = G__51518;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto__ = function(state_50412){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto____1.call(this,state_50412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_50478 = f__32611__auto__();
(statearr_50478[(6)] = c__32610__auto__);

return statearr_50478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
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
var ds_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__50485){
var vec__50486 = p__50485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486,(0),null);
var map__50489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486,(1),null);
var map__50489__$1 = cljs.core.__destructure_map(map__50489);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50489__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50489__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
var len__5749__auto___51530 = arguments.length;
var i__5750__auto___51531 = (0);
while(true){
if((i__5750__auto___51531 < len__5749__auto___51530)){
args__5755__auto__.push((arguments[i__5750__auto___51531]));

var G__51532 = (i__5750__auto___51531 + (1));
i__5750__auto___51531 = G__51532;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic = (function (datasets,p__50498){
var vec__50499 = p__50498;
var keys_to_bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50499,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_50533){
var state_val_50534 = (state_50533[(1)]);
if((state_val_50534 === (7))){
var inst_50515 = (state_50533[(7)]);
var inst_50518 = cljs.core.ex_data(inst_50515);
var inst_50519 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50518);
var inst_50520 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50519,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50533__$1 = state_50533;
var statearr_50535_51533 = state_50533__$1;
(statearr_50535_51533[(2)] = inst_50520);

(statearr_50535_51533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (1))){
var state_50533__$1 = state_50533;
var statearr_50536_51534 = state_50533__$1;
(statearr_50536_51534[(2)] = null);

(statearr_50536_51534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (4))){
var inst_50502 = (state_50533[(2)]);
var inst_50503 = console.error("Failed to bind datasets to R:",inst_50502);
var state_50533__$1 = state_50533;
var statearr_50537_51535 = state_50533__$1;
(statearr_50537_51535[(2)] = inst_50503);

(statearr_50537_51535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (6))){
var inst_50515 = (state_50533[(7)]);
var inst_50516 = (state_50533[(8)]);
var inst_50515__$1 = (state_50533[(2)]);
var inst_50516__$1 = (inst_50515__$1 instanceof cljs.core.ExceptionInfo);
var state_50533__$1 = (function (){var statearr_50538 = state_50533;
(statearr_50538[(7)] = inst_50515__$1);

(statearr_50538[(8)] = inst_50516__$1);

return statearr_50538;
})();
if(cljs.core.truth_(inst_50516__$1)){
var statearr_50539_51537 = state_50533__$1;
(statearr_50539_51537[(1)] = (7));

} else {
var statearr_50540_51538 = state_50533__$1;
(statearr_50540_51538[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (3))){
var inst_50531 = (state_50533[(2)]);
var state_50533__$1 = state_50533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50533__$1,inst_50531);
} else {
if((state_val_50534 === (12))){
var inst_50528 = (state_50533[(2)]);
var _ = (function (){var statearr_50542 = state_50533;
(statearr_50542[(4)] = cljs.core.rest((state_50533[(4)])));

return statearr_50542;
})();
var state_50533__$1 = state_50533;
var statearr_50543_51540 = state_50533__$1;
(statearr_50543_51540[(2)] = inst_50528);

(statearr_50543_51540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (2))){
var _ = (function (){var statearr_50544 = state_50533;
(statearr_50544[(4)] = cljs.core.cons((5),(state_50533[(4)])));

return statearr_50544;
})();
var inst_50509 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_50510 = bb_web_ds_tools.runtime.webr.datasets__GT_js(datasets,keys_to_bind);
var inst_50511 = bb_web_ds_tools.runtime.webr.get_global_env(inst_50509);
var inst_50512 = bb_web_ds_tools.runtime.webr.bind_r(inst_50511,"datasets",inst_50510);
var inst_50513 = cljs.core.async.interop.p__GT_c(inst_50512);
var state_50533__$1 = state_50533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50533__$1,(6),inst_50513);
} else {
if((state_val_50534 === (11))){
var inst_50515 = (state_50533[(7)]);
var state_50533__$1 = state_50533;
var statearr_50546_51541 = state_50533__$1;
(statearr_50546_51541[(2)] = inst_50515);

(statearr_50546_51541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (9))){
var inst_50523 = (state_50533[(2)]);
var state_50533__$1 = state_50533;
if(cljs.core.truth_(inst_50523)){
var statearr_50547_51542 = state_50533__$1;
(statearr_50547_51542[(1)] = (10));

} else {
var statearr_50548_51543 = state_50533__$1;
(statearr_50548_51543[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (5))){
var _ = (function (){var statearr_50549 = state_50533;
(statearr_50549[(4)] = cljs.core.rest((state_50533[(4)])));

return statearr_50549;
})();
var state_50533__$1 = state_50533;
var ex50545 = (state_50533__$1[(2)]);
var statearr_50550_51544 = state_50533__$1;
(statearr_50550_51544[(5)] = ex50545);


var statearr_50551_51545 = state_50533__$1;
(statearr_50551_51545[(1)] = (4));

(statearr_50551_51545[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (10))){
var inst_50515 = (state_50533[(7)]);
var inst_50525 = (function(){throw inst_50515})();
var state_50533__$1 = state_50533;
var statearr_50552_51546 = state_50533__$1;
(statearr_50552_51546[(2)] = inst_50525);

(statearr_50552_51546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50534 === (8))){
var inst_50516 = (state_50533[(8)]);
var state_50533__$1 = state_50533;
var statearr_50553_51547 = state_50533__$1;
(statearr_50553_51547[(2)] = inst_50516);

(statearr_50553_51547[(1)] = (9));


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
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0 = (function (){
var statearr_50554 = [null,null,null,null,null,null,null,null,null];
(statearr_50554[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32540__auto__);

(statearr_50554[(1)] = (1));

return statearr_50554;
});
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1 = (function (state_50533){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_50533);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e50555){var ex__32543__auto__ = e50555;
var statearr_50556_51548 = state_50533;
(statearr_50556_51548[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_50533[(4)]))){
var statearr_50557_51549 = state_50533;
(statearr_50557_51549[(1)] = cljs.core.first((state_50533[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51551 = state_50533;
state_50533 = G__51551;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__ = function(state_50533){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1.call(this,state_50533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_50558 = f__32611__auto__();
(statearr_50558[(6)] = c__32610__auto__);

return statearr_50558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
} else {
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_50561){
var state_val_50562 = (state_50561[(1)]);
if((state_val_50562 === (1))){
var inst_50559 = console.warn("WebR not loaded, cannot bind datasets");
var state_50561__$1 = state_50561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50561__$1,inst_50559);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0 = (function (){
var statearr_50563 = [null,null,null,null,null,null,null];
(statearr_50563[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32540__auto__);

(statearr_50563[(1)] = (1));

return statearr_50563;
});
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1 = (function (state_50561){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_50561);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e50564){var ex__32543__auto__ = e50564;
var statearr_50565_51555 = state_50561;
(statearr_50565_51555[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_50561[(4)]))){
var statearr_50566_51556 = state_50561;
(statearr_50566_51556[(1)] = cljs.core.first((state_50561[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51557 = state_50561;
state_50561 = G__51557;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__ = function(state_50561){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1.call(this,state_50561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_50567 = f__32611__auto__();
(statearr_50567[(6)] = c__32610__auto__);

return statearr_50567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
}
}));

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$applyTo = (function (seq50493){
var G__50494 = cljs.core.first(seq50493);
var seq50493__$1 = cljs.core.next(seq50493);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50494,seq50493__$1);
}));

/**
 * Retrieves the 'datasets' variable from R, converts it back to CLJS,
 * and dispatches an update event if found.
 */
bb_web_ds_tools.runtime.webr.sync_datasets = (function bb_web_ds_tools$runtime$webr$sync_datasets(){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_50633){
var state_val_50634 = (state_50633[(1)]);
if((state_val_50634 === (7))){
var inst_50602 = (state_50633[(7)]);
var inst_50602__$1 = (state_50633[(2)]);
var state_50633__$1 = (function (){var statearr_50635 = state_50633;
(statearr_50635[(7)] = inst_50602__$1);

return statearr_50635;
})();
if(cljs.core.truth_(inst_50602__$1)){
var statearr_50636_51559 = state_50633__$1;
(statearr_50636_51559[(1)] = (17));

} else {
var statearr_50637_51560 = state_50633__$1;
(statearr_50637_51560[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (20))){
var inst_50607 = (state_50633[(8)]);
var inst_50608 = (state_50633[(9)]);
var inst_50607__$1 = (state_50633[(2)]);
var inst_50608__$1 = (inst_50607__$1 instanceof cljs.core.ExceptionInfo);
var state_50633__$1 = (function (){var statearr_50638 = state_50633;
(statearr_50638[(8)] = inst_50607__$1);

(statearr_50638[(9)] = inst_50608__$1);

return statearr_50638;
})();
if(cljs.core.truth_(inst_50608__$1)){
var statearr_50639_51561 = state_50633__$1;
(statearr_50639_51561[(1)] = (21));

} else {
var statearr_50640_51562 = state_50633__$1;
(statearr_50640_51562[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (1))){
var state_50633__$1 = state_50633;
var statearr_50641_51563 = state_50633__$1;
(statearr_50641_51563[(2)] = null);

(statearr_50641_51563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (24))){
var inst_50607 = (state_50633[(8)]);
var inst_50617 = (function(){throw inst_50607})();
var state_50633__$1 = state_50633;
var statearr_50642_51565 = state_50633__$1;
(statearr_50642_51565[(2)] = inst_50617);

(statearr_50642_51565[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (4))){
var inst_50568 = (state_50633[(2)]);
var inst_50569 = console.error("Failed to sync datasets from R:",inst_50568);
var state_50633__$1 = state_50633;
var statearr_50643_51569 = state_50633__$1;
(statearr_50643_51569[(2)] = inst_50569);

(statearr_50643_51569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (15))){
var inst_50586 = (state_50633[(10)]);
var state_50633__$1 = state_50633;
var statearr_50644_51582 = state_50633__$1;
(statearr_50644_51582[(2)] = inst_50586);

(statearr_50644_51582[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (21))){
var inst_50607 = (state_50633[(8)]);
var inst_50610 = cljs.core.ex_data(inst_50607);
var inst_50611 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50610);
var inst_50612 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50611,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50633__$1 = state_50633;
var statearr_50645_51584 = state_50633__$1;
(statearr_50645_51584[(2)] = inst_50612);

(statearr_50645_51584[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (13))){
var inst_50594 = (state_50633[(2)]);
var state_50633__$1 = state_50633;
if(cljs.core.truth_(inst_50594)){
var statearr_50646_51588 = state_50633__$1;
(statearr_50646_51588[(1)] = (14));

} else {
var statearr_50647_51589 = state_50633__$1;
(statearr_50647_51589[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (22))){
var inst_50608 = (state_50633[(9)]);
var state_50633__$1 = state_50633;
var statearr_50648_51590 = state_50633__$1;
(statearr_50648_51590[(2)] = inst_50608);

(statearr_50648_51590[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (6))){
var inst_50575 = (state_50633[(11)]);
var _ = (function (){var statearr_50649 = state_50633;
(statearr_50649[(4)] = cljs.core.cons((9),(state_50633[(4)])));

return statearr_50649;
})();
var inst_50582 = bb_web_ds_tools.runtime.webr.get_global_env(inst_50575);
var inst_50583 = bb_web_ds_tools.runtime.webr.get_r(inst_50582,"datasets");
var inst_50584 = cljs.core.async.interop.p__GT_c(inst_50583);
var state_50633__$1 = state_50633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50633__$1,(10),inst_50584);
} else {
if((state_val_50634 === (25))){
var inst_50607 = (state_50633[(8)]);
var state_50633__$1 = state_50633;
var statearr_50650_51597 = state_50633__$1;
(statearr_50650_51597[(2)] = inst_50607);

(statearr_50650_51597[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (17))){
var inst_50602 = (state_50633[(7)]);
var inst_50604 = bb_web_ds_tools.runtime.webr.to_js(inst_50602);
var inst_50605 = cljs.core.async.interop.p__GT_c(inst_50604);
var state_50633__$1 = state_50633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50633__$1,(20),inst_50605);
} else {
if((state_val_50634 === (3))){
var inst_50631 = (state_50633[(2)]);
var state_50633__$1 = state_50633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50633__$1,inst_50631);
} else {
if((state_val_50634 === (12))){
var inst_50587 = (state_50633[(12)]);
var state_50633__$1 = state_50633;
var statearr_50651_51598 = state_50633__$1;
(statearr_50651_51598[(2)] = inst_50587);

(statearr_50651_51598[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (2))){
var _ = (function (){var statearr_50652 = state_50633;
(statearr_50652[(4)] = cljs.core.cons((5),(state_50633[(4)])));

return statearr_50652;
})();
var inst_50575 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_50633__$1 = (function (){var statearr_50653 = state_50633;
(statearr_50653[(11)] = inst_50575);

return statearr_50653;
})();
var statearr_50654_51604 = state_50633__$1;
(statearr_50654_51604[(2)] = null);

(statearr_50654_51604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (23))){
var inst_50615 = (state_50633[(2)]);
var state_50633__$1 = state_50633;
if(cljs.core.truth_(inst_50615)){
var statearr_50655_51605 = state_50633__$1;
(statearr_50655_51605[(1)] = (24));

} else {
var statearr_50656_51606 = state_50633__$1;
(statearr_50656_51606[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (19))){
var inst_50628 = (state_50633[(2)]);
var _ = (function (){var statearr_50658 = state_50633;
(statearr_50658[(4)] = cljs.core.rest((state_50633[(4)])));

return statearr_50658;
})();
var state_50633__$1 = state_50633;
var statearr_50659_51611 = state_50633__$1;
(statearr_50659_51611[(2)] = inst_50628);

(statearr_50659_51611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (11))){
var inst_50586 = (state_50633[(10)]);
var inst_50589 = cljs.core.ex_data(inst_50586);
var inst_50590 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50589);
var inst_50591 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50590,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50633__$1 = state_50633;
var statearr_50661_51612 = state_50633__$1;
(statearr_50661_51612[(2)] = inst_50591);

(statearr_50661_51612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (9))){
var _ = (function (){var statearr_50662 = state_50633;
(statearr_50662[(4)] = cljs.core.rest((state_50633[(4)])));

return statearr_50662;
})();
var state_50633__$1 = state_50633;
var ex50657 = (state_50633__$1[(2)]);
var statearr_50663_51613 = state_50633__$1;
(statearr_50663_51613[(5)] = ex50657);


var statearr_50664_51615 = state_50633__$1;
(statearr_50664_51615[(1)] = (8));

(statearr_50664_51615[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (5))){
var _ = (function (){var statearr_50665 = state_50633;
(statearr_50665[(4)] = cljs.core.rest((state_50633[(4)])));

return statearr_50665;
})();
var state_50633__$1 = state_50633;
var ex50660 = (state_50633__$1[(2)]);
var statearr_50666_51619 = state_50633__$1;
(statearr_50666_51619[(5)] = ex50660);


var statearr_50667_51620 = state_50633__$1;
(statearr_50667_51620[(1)] = (4));

(statearr_50667_51620[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (14))){
var inst_50586 = (state_50633[(10)]);
var inst_50596 = (function(){throw inst_50586})();
var state_50633__$1 = state_50633;
var statearr_50668_51621 = state_50633__$1;
(statearr_50668_51621[(2)] = inst_50596);

(statearr_50668_51621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (26))){
var inst_50620 = (state_50633[(2)]);
var inst_50621 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50620,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_50622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50623 = [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets-from-r","bb-web-ds-tools.views.datasets/patch-datasets-from-r",-125752359),inst_50621];
var inst_50624 = (new cljs.core.PersistentVector(null,2,(5),inst_50622,inst_50623,null));
var inst_50625 = re_frame.core.dispatch(inst_50624);
var state_50633__$1 = state_50633;
var statearr_50670_51624 = state_50633__$1;
(statearr_50670_51624[(2)] = inst_50625);

(statearr_50670_51624[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (16))){
var inst_50599 = (state_50633[(2)]);
var _ = (function (){var statearr_50671 = state_50633;
(statearr_50671[(4)] = cljs.core.rest((state_50633[(4)])));

return statearr_50671;
})();
var state_50633__$1 = state_50633;
var statearr_50672_51625 = state_50633__$1;
(statearr_50672_51625[(2)] = inst_50599);

(statearr_50672_51625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (10))){
var inst_50586 = (state_50633[(10)]);
var inst_50587 = (state_50633[(12)]);
var inst_50586__$1 = (state_50633[(2)]);
var inst_50587__$1 = (inst_50586__$1 instanceof cljs.core.ExceptionInfo);
var state_50633__$1 = (function (){var statearr_50673 = state_50633;
(statearr_50673[(10)] = inst_50586__$1);

(statearr_50673[(12)] = inst_50587__$1);

return statearr_50673;
})();
if(cljs.core.truth_(inst_50587__$1)){
var statearr_50674_51627 = state_50633__$1;
(statearr_50674_51627[(1)] = (11));

} else {
var statearr_50675_51628 = state_50633__$1;
(statearr_50675_51628[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (18))){
var state_50633__$1 = state_50633;
var statearr_50676_51631 = state_50633__$1;
(statearr_50676_51631[(2)] = null);

(statearr_50676_51631[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50634 === (8))){
var inst_50576 = (state_50633[(2)]);
var state_50633__$1 = (function (){var statearr_50677 = state_50633;
(statearr_50677[(13)] = inst_50576);

return statearr_50677;
})();
var statearr_50678_51637 = state_50633__$1;
(statearr_50678_51637[(2)] = null);

(statearr_50678_51637[(1)] = (7));


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
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____0 = (function (){
var statearr_50679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50679[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__);

(statearr_50679[(1)] = (1));

return statearr_50679;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____1 = (function (state_50633){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_50633);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e50680){var ex__32543__auto__ = e50680;
var statearr_50681_51638 = state_50633;
(statearr_50681_51638[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_50633[(4)]))){
var statearr_50682_51639 = state_50633;
(statearr_50682_51639[(1)] = cljs.core.first((state_50633[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51641 = state_50633;
state_50633 = G__51641;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__ = function(state_50633){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____1.call(this,state_50633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_50683 = f__32611__auto__();
(statearr_50683[(6)] = c__32610__auto__);

return statearr_50683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
} else {
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_50686){
var state_val_50687 = (state_50686[(1)]);
if((state_val_50687 === (1))){
var inst_50684 = console.warn("WebR not loaded, cannot sync datasets");
var state_50686__$1 = state_50686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50686__$1,inst_50684);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____0 = (function (){
var statearr_50688 = [null,null,null,null,null,null,null];
(statearr_50688[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__);

(statearr_50688[(1)] = (1));

return statearr_50688;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____1 = (function (state_50686){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_50686);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e50689){var ex__32543__auto__ = e50689;
var statearr_50690_51647 = state_50686;
(statearr_50690_51647[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_50686[(4)]))){
var statearr_50691_51648 = state_50686;
(statearr_50691_51648[(1)] = cljs.core.first((state_50686[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51650 = state_50686;
state_50686 = G__51650;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__ = function(state_50686){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____1.call(this,state_50686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_50692 = f__32611__auto__();
(statearr_50692[(6)] = c__32610__auto__);

return statearr_50692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
}
});
bb_web_ds_tools.runtime.webr.get_error_details = (function bb_web_ds_tools$runtime$webr$get_error_details(e){
if(((cljs.core.object_QMARK_(e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.message,"Promise error")))){
var clj_e = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(cljs.core.not_empty(clj_e))){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50693_51653 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50694_51654 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50695_51655 = true;
var _STAR_print_fn_STAR__temp_val__50696_51656 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50695_51655);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50696_51656);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clj_e);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50694_51654);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50693_51653);
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
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_50758){
var state_val_50759 = (state_50758[(1)]);
if((state_val_50759 === (7))){
var inst_50707 = (state_50758[(7)]);
var inst_50710 = cljs.core.ex_data(inst_50707);
var inst_50711 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50710);
var inst_50712 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50711,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50758__$1 = state_50758;
var statearr_50760_51659 = state_50758__$1;
(statearr_50760_51659[(2)] = inst_50712);

(statearr_50760_51659[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (20))){
var inst_50751 = (state_50758[(2)]);
var inst_50752 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),inst_50751);
var inst_50753 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",inst_50752);
var _ = (function (){var statearr_50761 = state_50758;
(statearr_50761[(4)] = cljs.core.rest((state_50758[(4)])));

return statearr_50761;
})();
var state_50758__$1 = state_50758;
var statearr_50762_51665 = state_50758__$1;
(statearr_50762_51665[(2)] = inst_50753);

(statearr_50762_51665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (1))){
var state_50758__$1 = state_50758;
var statearr_50763_51666 = state_50758__$1;
(statearr_50763_51666[(2)] = null);

(statearr_50763_51666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (4))){
var inst_50697 = (state_50758[(2)]);
var state_50758__$1 = (function (){var statearr_50764 = state_50758;
(statearr_50764[(8)] = inst_50697);

return statearr_50764;
})();
var statearr_50765_51667 = state_50758__$1;
(statearr_50765_51667[(2)] = null);

(statearr_50765_51667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (15))){
var inst_50732 = (state_50758[(9)]);
var state_50758__$1 = state_50758;
var statearr_50766_51668 = state_50758__$1;
(statearr_50766_51668[(2)] = inst_50732);

(statearr_50766_51668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (13))){
var inst_50731 = (state_50758[(10)]);
var inst_50732 = (state_50758[(9)]);
var inst_50731__$1 = (state_50758[(2)]);
var inst_50732__$1 = (inst_50731__$1 instanceof cljs.core.ExceptionInfo);
var state_50758__$1 = (function (){var statearr_50767 = state_50758;
(statearr_50767[(10)] = inst_50731__$1);

(statearr_50767[(9)] = inst_50732__$1);

return statearr_50767;
})();
if(cljs.core.truth_(inst_50732__$1)){
var statearr_50768_51671 = state_50758__$1;
(statearr_50768_51671[(1)] = (14));

} else {
var statearr_50769_51672 = state_50758__$1;
(statearr_50769_51672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (6))){
var inst_50707 = (state_50758[(7)]);
var inst_50708 = (state_50758[(11)]);
var inst_50707__$1 = (state_50758[(2)]);
var inst_50708__$1 = (inst_50707__$1 instanceof cljs.core.ExceptionInfo);
var state_50758__$1 = (function (){var statearr_50770 = state_50758;
(statearr_50770[(7)] = inst_50707__$1);

(statearr_50770[(11)] = inst_50708__$1);

return statearr_50770;
})();
if(cljs.core.truth_(inst_50708__$1)){
var statearr_50771_51679 = state_50758__$1;
(statearr_50771_51679[(1)] = (7));

} else {
var statearr_50772_51680 = state_50758__$1;
(statearr_50772_51680[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (17))){
var inst_50731 = (state_50758[(10)]);
var inst_50741 = (function(){throw inst_50731})();
var state_50758__$1 = state_50758;
var statearr_50773_51681 = state_50758__$1;
(statearr_50773_51681[(2)] = inst_50741);

(statearr_50773_51681[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (3))){
var inst_50756 = (state_50758[(2)]);
var state_50758__$1 = state_50758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50758__$1,inst_50756);
} else {
if((state_val_50759 === (12))){
var inst_50720 = (state_50758[(2)]);
var inst_50724 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_50725 = [true];
var inst_50726 = cljs.core.PersistentHashMap.fromArrays(inst_50724,inst_50725);
var inst_50727 = cljs.core.clj__GT_js(inst_50726);
var inst_50728 = bb_web_ds_tools.runtime.webr.capture_r(shelter,"print(.last_error)",inst_50727);
var inst_50729 = cljs.core.async.interop.p__GT_c(inst_50728);
var state_50758__$1 = (function (){var statearr_50775 = state_50758;
(statearr_50775[(12)] = inst_50720);

return statearr_50775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50758__$1,(13),inst_50729);
} else {
if((state_val_50759 === (2))){
var _ = (function (){var statearr_50784 = state_50758;
(statearr_50784[(4)] = cljs.core.cons((5),(state_50758[(4)])));

return statearr_50784;
})();
var inst_50703 = bb_web_ds_tools.runtime.webr.get_global_env(webr);
var inst_50704 = bb_web_ds_tools.runtime.webr.bind_r(inst_50703,".last_error",e);
var inst_50705 = cljs.core.async.interop.p__GT_c(inst_50704);
var state_50758__$1 = state_50758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50758__$1,(6),inst_50705);
} else {
if((state_val_50759 === (19))){
var inst_50744 = (state_50758[(2)]);
var inst_50745 = bb_web_ds_tools.runtime.webr.get_result_props(inst_50744);
var inst_50746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50745,(0),null);
var inst_50747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50745,(1),null);
var inst_50748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50745,(2),null);
var inst_50749 = bb_web_ds_tools.runtime.webr.process_capture_msgs(inst_50746);
var state_50758__$1 = (function (){var statearr_50785 = state_50758;
(statearr_50785[(13)] = inst_50747);

(statearr_50785[(14)] = inst_50748);

return statearr_50785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50758__$1,(20),inst_50749);
} else {
if((state_val_50759 === (11))){
var inst_50707 = (state_50758[(7)]);
var state_50758__$1 = state_50758;
var statearr_50787_51687 = state_50758__$1;
(statearr_50787_51687[(2)] = inst_50707);

(statearr_50787_51687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (9))){
var inst_50715 = (state_50758[(2)]);
var state_50758__$1 = state_50758;
if(cljs.core.truth_(inst_50715)){
var statearr_50788_51689 = state_50758__$1;
(statearr_50788_51689[(1)] = (10));

} else {
var statearr_50789_51690 = state_50758__$1;
(statearr_50789_51690[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (5))){
var _ = (function (){var statearr_50790 = state_50758;
(statearr_50790[(4)] = cljs.core.rest((state_50758[(4)])));

return statearr_50790;
})();
var state_50758__$1 = state_50758;
var ex50786 = (state_50758__$1[(2)]);
var statearr_50791_51694 = state_50758__$1;
(statearr_50791_51694[(5)] = ex50786);


var statearr_50792_51695 = state_50758__$1;
(statearr_50792_51695[(1)] = (4));

(statearr_50792_51695[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (14))){
var inst_50731 = (state_50758[(10)]);
var inst_50734 = cljs.core.ex_data(inst_50731);
var inst_50735 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50734);
var inst_50736 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50735,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50758__$1 = state_50758;
var statearr_50793_51698 = state_50758__$1;
(statearr_50793_51698[(2)] = inst_50736);

(statearr_50793_51698[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (16))){
var inst_50739 = (state_50758[(2)]);
var state_50758__$1 = state_50758;
if(cljs.core.truth_(inst_50739)){
var statearr_50794_51702 = state_50758__$1;
(statearr_50794_51702[(1)] = (17));

} else {
var statearr_50795_51703 = state_50758__$1;
(statearr_50795_51703[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (10))){
var inst_50707 = (state_50758[(7)]);
var inst_50717 = (function(){throw inst_50707})();
var state_50758__$1 = state_50758;
var statearr_50796_51704 = state_50758__$1;
(statearr_50796_51704[(2)] = inst_50717);

(statearr_50796_51704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (18))){
var inst_50731 = (state_50758[(10)]);
var state_50758__$1 = state_50758;
var statearr_50797_51705 = state_50758__$1;
(statearr_50797_51705[(2)] = inst_50731);

(statearr_50797_51705[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50759 === (8))){
var inst_50708 = (state_50758[(11)]);
var state_50758__$1 = state_50758;
var statearr_50798_51706 = state_50758__$1;
(statearr_50798_51706[(2)] = inst_50708);

(statearr_50798_51706[(1)] = (9));


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
var bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto__ = null;
var bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto____0 = (function (){
var statearr_50800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50800[(0)] = bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto__);

(statearr_50800[(1)] = (1));

return statearr_50800;
});
var bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto____1 = (function (state_50758){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_50758);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e50802){var ex__32543__auto__ = e50802;
var statearr_50803_51709 = state_50758;
(statearr_50803_51709[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_50758[(4)]))){
var statearr_50804_51710 = state_50758;
(statearr_50804_51710[(1)] = cljs.core.first((state_50758[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51711 = state_50758;
state_50758 = G__51711;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto__ = function(state_50758){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto____1.call(this,state_50758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto____0;
bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto____1;
return bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_50805 = f__32611__auto__();
(statearr_50805[(6)] = c__32610__auto__);

return statearr_50805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
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
var len__5749__auto___51712 = arguments.length;
var i__5750__auto___51713 = (0);
while(true){
if((i__5750__auto___51713 < len__5749__auto___51712)){
args__5755__auto__.push((arguments[i__5750__auto___51713]));

var G__51714 = (i__5750__auto___51713 + (1));
i__5750__auto___51713 = G__51714;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic = (function (code,p__50808){
var vec__50809 = p__50808;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50809,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_51165){
var state_val_51166 = (state_51165[(1)]);
if((state_val_51166 === (65))){
var state_51165__$1 = state_51165;
var statearr_51167_51715 = state_51165__$1;
(statearr_51167_51715[(2)] = null);

(statearr_51167_51715[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (70))){
var inst_50999 = (state_51165[(7)]);
var inst_51002 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50999);
var state_51165__$1 = state_51165;
var statearr_51168_51719 = state_51165__$1;
(statearr_51168_51719[(2)] = inst_51002);

(statearr_51168_51719[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (62))){
var state_51165__$1 = state_51165;
var statearr_51169_51720 = state_51165__$1;
(statearr_51169_51720[(2)] = null);

(statearr_51169_51720[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (74))){
var inst_50954 = (state_51165[(8)]);
var inst_51116 = (state_51165[(9)]);
var inst_51115 = (state_51165[(2)]);
var inst_51116__$1 = bb_web_ds_tools.runtime.webr.to_js(inst_50954);
var inst_51117 = (inst_51116__$1 instanceof Promise);
var state_51165__$1 = (function (){var statearr_51170 = state_51165;
(statearr_51170[(10)] = inst_51115);

(statearr_51170[(9)] = inst_51116__$1);

return statearr_51170;
})();
if(cljs.core.truth_(inst_51117)){
var statearr_51171_51724 = state_51165__$1;
(statearr_51171_51724[(1)] = (84));

} else {
var statearr_51172_51725 = state_51165__$1;
(statearr_51172_51725[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (7))){
var inst_51157 = (new Error("Shelter not found on WebR instance"));
var inst_51158 = (function(){throw inst_51157})();
var state_51165__$1 = state_51165;
var statearr_51173_51726 = state_51165__$1;
(statearr_51173_51726[(2)] = inst_51158);

(statearr_51173_51726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (59))){
var inst_50970 = (state_51165[(11)]);
var inst_50988 = (state_51165[(12)]);
var inst_50988__$1 = cljs.core.seq(inst_50970);
var state_51165__$1 = (function (){var statearr_51174 = state_51165;
(statearr_51174[(12)] = inst_50988__$1);

return statearr_51174;
})();
if(inst_50988__$1){
var statearr_51175_51748 = state_51165__$1;
(statearr_51175_51748[(1)] = (64));

} else {
var statearr_51176_51749 = state_51165__$1;
(statearr_51176_51749[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (86))){
var inst_51137 = (state_51165[(2)]);
var state_51165__$1 = (function (){var statearr_51177 = state_51165;
(statearr_51177[(13)] = inst_51137);

return statearr_51177;
})();
var statearr_51178_51750 = state_51165__$1;
(statearr_51178_51750[(2)] = null);

(statearr_51178_51750[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (20))){
var inst_50844 = (state_51165[(14)]);
var inst_50854 = (function(){throw inst_50844})();
var state_51165__$1 = state_51165;
var statearr_51179_51751 = state_51165__$1;
(statearr_51179_51751[(2)] = inst_50854);

(statearr_51179_51751[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (72))){
var inst_50988 = (state_51165[(12)]);
var inst_51005 = (state_51165[(2)]);
var inst_51006 = cljs.core.next(inst_50988);
var inst_50970 = inst_51006;
var inst_50971 = null;
var inst_50972 = (0);
var inst_50973 = (0);
var state_51165__$1 = (function (){var statearr_51180 = state_51165;
(statearr_51180[(15)] = inst_51005);

(statearr_51180[(11)] = inst_50970);

(statearr_51180[(16)] = inst_50971);

(statearr_51180[(17)] = inst_50972);

(statearr_51180[(18)] = inst_50973);

return statearr_51180;
})();
var statearr_51181_51752 = state_51165__$1;
(statearr_51181_51752[(2)] = null);

(statearr_51181_51752[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (58))){
var inst_50971 = (state_51165[(16)]);
var inst_50973 = (state_51165[(18)]);
var inst_50978 = (state_51165[(19)]);
var inst_50978__$1 = cljs.core._nth(inst_50971,inst_50973);
var state_51165__$1 = (function (){var statearr_51182 = state_51165;
(statearr_51182[(19)] = inst_50978__$1);

return statearr_51182;
})();
if(cljs.core.truth_(inst_50978__$1)){
var statearr_51183_51754 = state_51165__$1;
(statearr_51183_51754[(1)] = (61));

} else {
var statearr_51184_51756 = state_51165__$1;
(statearr_51184_51756[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (60))){
var inst_51014 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51185_51757 = state_51165__$1;
(statearr_51185_51757[(2)] = inst_51014);

(statearr_51185_51757[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (27))){
var inst_50866 = (state_51165[(20)]);
var inst_50869 = cljs.core.ex_data(inst_50866);
var inst_50870 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50869);
var inst_50871 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50870,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_51165__$1 = state_51165;
var statearr_51186_51761 = state_51165__$1;
(statearr_51186_51761[(2)] = inst_50871);

(statearr_51186_51761[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (1))){
var state_51165__$1 = state_51165;
var statearr_51187_51763 = state_51165__$1;
(statearr_51187_51763[(2)] = null);

(statearr_51187_51763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (69))){
var inst_51009 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51188_51764 = state_51165__$1;
(statearr_51188_51764[(2)] = inst_51009);

(statearr_51188_51764[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (24))){
var state_51165__$1 = state_51165;
var statearr_51189_51765 = state_51165__$1;
(statearr_51189_51765[(2)] = null);

(statearr_51189_51765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (55))){
var inst_50957 = (state_51165[(2)]);
var inst_50958 = [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),new cljs.core.Keyword(null,"container-height","container-height",-577782714),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110)];
var inst_50959 = [(720),(800),0.72];
var inst_50960 = cljs.core.PersistentHashMap.fromArrays(inst_50958,inst_50959);
var inst_50961 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"webr","webr",-966893065),inst_50960);
var inst_50962 = new cljs.core.Keyword(null,"container-width","container-width",-1461172864).cljs$core$IFn$_invoke$arity$1(inst_50961);
var inst_50963 = new cljs.core.Keyword(null,"container-height","container-height",-577782714).cljs$core$IFn$_invoke$arity$1(inst_50961);
var inst_50964 = new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110).cljs$core$IFn$_invoke$arity$1(inst_50961);
var inst_50969 = cljs.core.seq(inst_50957);
var inst_50970 = inst_50969;
var inst_50971 = null;
var inst_50972 = (0);
var inst_50973 = (0);
var state_51165__$1 = (function (){var statearr_51190 = state_51165;
(statearr_51190[(21)] = inst_50962);

(statearr_51190[(22)] = inst_50963);

(statearr_51190[(23)] = inst_50964);

(statearr_51190[(11)] = inst_50970);

(statearr_51190[(16)] = inst_50971);

(statearr_51190[(17)] = inst_50972);

(statearr_51190[(18)] = inst_50973);

return statearr_51190;
})();
var statearr_51191_51769 = state_51165__$1;
(statearr_51191_51769[(2)] = null);

(statearr_51191_51769[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (85))){
var inst_51116 = (state_51165[(9)]);
var state_51165__$1 = state_51165;
var statearr_51192_51770 = state_51165__$1;
(statearr_51192_51770[(2)] = inst_51116);

(statearr_51192_51770[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (39))){
var inst_50900 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
if(cljs.core.truth_(inst_50900)){
var statearr_51193_51771 = state_51165__$1;
(statearr_51193_51771[(1)] = (40));

} else {
var statearr_51194_51772 = state_51165__$1;
(statearr_51194_51772[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (88))){
var inst_51121 = (state_51165[(24)]);
var inst_51124 = cljs.core.ex_data(inst_51121);
var inst_51125 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_51124);
var inst_51126 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51125,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_51165__$1 = state_51165;
var statearr_51195_51773 = state_51165__$1;
(statearr_51195_51773[(2)] = inst_51126);

(statearr_51195_51773[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (46))){
var inst_50908 = (state_51165[(25)]);
var inst_50914 = (state_51165[(2)]);
var inst_50915 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50914];
var inst_50916 = cljs.core.PersistentHashMap.fromArrays(inst_50908,inst_50915);
var inst_50917 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50916);
var state_51165__$1 = state_51165;
var statearr_51196_51774 = state_51165__$1;
(statearr_51196_51774[(2)] = inst_50917);

(statearr_51196_51774[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (4))){
var inst_50812 = (state_51165[(2)]);
var inst_50814 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50815 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50812);
var inst_50816 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50815];
var inst_50817 = cljs.core.PersistentHashMap.fromArrays(inst_50814,inst_50816);
var inst_50818 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50817);
var state_51165__$1 = state_51165;
var statearr_51197_51785 = state_51165__$1;
(statearr_51197_51785[(2)] = inst_50818);

(statearr_51197_51785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (77))){
var inst_51113 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51198_51786 = state_51165__$1;
(statearr_51198_51786[(2)] = inst_51113);

(statearr_51198_51786[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (95))){
var inst_51148 = (state_51165[(2)]);
var inst_51149 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_51150 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_51148];
var inst_51151 = cljs.core.PersistentHashMap.fromArrays(inst_51149,inst_51150);
var inst_51152 = bb_web_ds_tools.runtime.webr.portal_submit(inst_51151);
var _ = (function (){var statearr_51199 = state_51165;
(statearr_51199[(4)] = cljs.core.rest((state_51165[(4)])));

return statearr_51199;
})();
var state_51165__$1 = state_51165;
var statearr_51200_51790 = state_51165__$1;
(statearr_51200_51790[(2)] = inst_51152);

(statearr_51200_51790[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (54))){
var inst_50950 = (state_51165[(2)]);
var inst_50951 = bb_web_ds_tools.runtime.webr.get_result_props(inst_50950);
var inst_50952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50951,(0),null);
var inst_50953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50951,(1),null);
var inst_50954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50951,(2),null);
var inst_50955 = bb_web_ds_tools.runtime.webr.process_capture_msgs(inst_50952);
var state_51165__$1 = (function (){var statearr_51201 = state_51165;
(statearr_51201[(26)] = inst_50953);

(statearr_51201[(8)] = inst_50954);

return statearr_51201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51165__$1,(55),inst_50955);
} else {
if((state_val_51166 === (92))){
var inst_51121 = (state_51165[(24)]);
var state_51165__$1 = state_51165;
var statearr_51202_51791 = state_51165__$1;
(statearr_51202_51791[(2)] = inst_51121);

(statearr_51202_51791[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (15))){
var inst_50884 = (state_51165[(2)]);
var _ = (function (){var statearr_51203 = state_51165;
(statearr_51203[(4)] = cljs.core.rest((state_51165[(4)])));

return statearr_51203;
})();
var state_51165__$1 = state_51165;
var statearr_51204_51795 = state_51165__$1;
(statearr_51204_51795[(2)] = inst_50884);

(statearr_51204_51795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (48))){
var inst_50937 = (state_51165[(27)]);
var inst_50938 = (state_51165[(28)]);
var inst_50937__$1 = (state_51165[(2)]);
var inst_50938__$1 = (inst_50937__$1 instanceof cljs.core.ExceptionInfo);
var state_51165__$1 = (function (){var statearr_51208 = state_51165;
(statearr_51208[(27)] = inst_50937__$1);

(statearr_51208[(28)] = inst_50938__$1);

return statearr_51208;
})();
if(cljs.core.truth_(inst_50938__$1)){
var statearr_51209_51796 = state_51165__$1;
(statearr_51209_51796[(1)] = (49));

} else {
var statearr_51210_51797 = state_51165__$1;
(statearr_51210_51797[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (50))){
var inst_50938 = (state_51165[(28)]);
var state_51165__$1 = state_51165;
var statearr_51211_51798 = state_51165__$1;
(statearr_51211_51798[(2)] = inst_50938);

(statearr_51211_51798[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (75))){
var inst_51024 = (state_51165[(29)]);
var inst_51026 = (state_51165[(30)]);
var inst_50962 = (state_51165[(21)]);
var inst_50963 = (state_51165[(22)]);
var inst_50964 = (state_51165[(23)]);
var inst_51023 = (state_51165[(31)]);
var inst_51025 = (state_51165[(32)]);
var inst_51031 = cljs.core._nth(inst_51024,inst_51026);
var inst_51032 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_51031);
var inst_51033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51034 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_51035 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_51036 = [inst_50962,inst_50963];
var inst_51037 = cljs.core.PersistentHashMap.fromArrays(inst_51035,inst_51036);
var inst_51038 = [inst_51037];
var inst_51039 = cljs.core.PersistentHashMap.fromArrays(inst_51034,inst_51038);
var inst_51040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51041 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_51042 = bb_web_ds_tools.runtime.webr.get_width(inst_51031);
var inst_51043 = (inst_51042 * inst_50964);
var inst_51044 = (inst_51043 | (0));
var inst_51045 = bb_web_ds_tools.runtime.webr.get_height(inst_51031);
var inst_51046 = (inst_51045 * inst_50964);
var inst_51047 = (inst_51046 | (0));
var inst_51048 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_51049 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51032),")"].join('');
var inst_51050 = [inst_51049,"cover"];
var inst_51051 = cljs.core.PersistentHashMap.fromArrays(inst_51048,inst_51050);
var inst_51052 = [inst_51044,inst_51047,inst_51051];
var inst_51053 = cljs.core.PersistentHashMap.fromArrays(inst_51041,inst_51052);
var inst_51054 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_51053];
var inst_51055 = (new cljs.core.PersistentVector(null,2,(5),inst_51040,inst_51054,null));
var inst_51056 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_51039,inst_51055];
var inst_51057 = (new cljs.core.PersistentVector(null,3,(5),inst_51033,inst_51056,null));
var inst_51058 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51059 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_51057,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_51060 = (new cljs.core.PersistentVector(null,3,(5),inst_51058,inst_51059,null));
var inst_51061 = re_frame.core.dispatch(inst_51060);
var inst_51062 = (inst_51026 + (1));
var tmp51205 = inst_51024;
var tmp51206 = inst_51023;
var tmp51207 = inst_51025;
var inst_51023__$1 = tmp51206;
var inst_51024__$1 = tmp51205;
var inst_51025__$1 = tmp51207;
var inst_51026__$1 = inst_51062;
var state_51165__$1 = (function (){var statearr_51212 = state_51165;
(statearr_51212[(33)] = inst_51061);

(statearr_51212[(31)] = inst_51023__$1);

(statearr_51212[(29)] = inst_51024__$1);

(statearr_51212[(32)] = inst_51025__$1);

(statearr_51212[(30)] = inst_51026__$1);

return statearr_51212;
})();
var statearr_51213_51826 = state_51165__$1;
(statearr_51213_51826[(2)] = null);

(statearr_51213_51826[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (21))){
var inst_50844 = (state_51165[(14)]);
var state_51165__$1 = state_51165;
var statearr_51214_51827 = state_51165__$1;
(statearr_51214_51827[(2)] = inst_50844);

(statearr_51214_51827[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (31))){
var inst_50866 = (state_51165[(20)]);
var state_51165__$1 = state_51165;
var statearr_51215_51828 = state_51165__$1;
(statearr_51215_51828[(2)] = inst_50866);

(statearr_51215_51828[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (32))){
var inst_50879 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51216_51829 = state_51165__$1;
(statearr_51216_51829[(2)] = inst_50879);

(statearr_51216_51829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (40))){
var inst_50829 = (state_51165[(34)]);
var inst_50887 = (state_51165[(35)]);
var inst_50893 = (state_51165[(36)]);
var inst_50902 = bb_web_ds_tools.runtime.webr.attempt_print_error(inst_50829,inst_50887,inst_50893);
var state_51165__$1 = state_51165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51165__$1,(43),inst_50902);
} else {
if((state_val_51166 === (91))){
var inst_51121 = (state_51165[(24)]);
var inst_51131 = (function(){throw inst_51121})();
var state_51165__$1 = state_51165;
var statearr_51217_51830 = state_51165__$1;
(statearr_51217_51830[(2)] = inst_51131);

(statearr_51217_51830[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (56))){
var inst_50973 = (state_51165[(18)]);
var inst_50972 = (state_51165[(17)]);
var inst_50975 = (inst_50973 < inst_50972);
var inst_50976 = inst_50975;
var state_51165__$1 = state_51165;
if(cljs.core.truth_(inst_50976)){
var statearr_51218_51831 = state_51165__$1;
(statearr_51218_51831[(1)] = (58));

} else {
var statearr_51219_51832 = state_51165__$1;
(statearr_51219_51832[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (33))){
var inst_50887 = (state_51165[(35)]);
var _ = (function (){var statearr_51220 = state_51165;
(statearr_51220[(4)] = cljs.core.cons((35),(state_51165[(4)])));

return statearr_51220;
})();
var ___$1 = (function (){var statearr_51221 = state_51165;
(statearr_51221[(4)] = cljs.core.cons((47),(state_51165[(4)])));

return statearr_51221;
})();
var inst_50930 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_50931 = [true];
var inst_50932 = cljs.core.PersistentHashMap.fromArrays(inst_50930,inst_50931);
var inst_50933 = cljs.core.clj__GT_js(inst_50932);
var inst_50934 = bb_web_ds_tools.runtime.webr.capture_r(inst_50887,code,inst_50933);
var inst_50935 = cljs.core.async.interop.p__GT_c(inst_50934);
var state_51165__$1 = state_51165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51165__$1,(48),inst_50935);
} else {
if((state_val_51166 === (13))){
var inst_50832 = (state_51165[(37)]);
var inst_50842 = cljs.core.async.interop.p__GT_c(inst_50832);
var state_51165__$1 = state_51165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51165__$1,(16),inst_50842);
} else {
if((state_val_51166 === (22))){
var inst_50857 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51223_51833 = state_51165__$1;
(statearr_51223_51833[(2)] = inst_50857);

(statearr_51223_51833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (90))){
var inst_51129 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
if(cljs.core.truth_(inst_51129)){
var statearr_51224_51834 = state_51165__$1;
(statearr_51224_51834[(1)] = (91));

} else {
var statearr_51225_51835 = state_51165__$1;
(statearr_51225_51835[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (36))){
var inst_50893 = (state_51165[(36)]);
var inst_50894 = (state_51165[(38)]);
var inst_50893__$1 = (state_51165[(2)]);
var inst_50894__$1 = cljs.core.object_QMARK_(inst_50893__$1);
var state_51165__$1 = (function (){var statearr_51226 = state_51165;
(statearr_51226[(36)] = inst_50893__$1);

(statearr_51226[(38)] = inst_50894__$1);

return statearr_51226;
})();
if(inst_50894__$1){
var statearr_51227_51842 = state_51165__$1;
(statearr_51227_51842[(1)] = (37));

} else {
var statearr_51228_51843 = state_51165__$1;
(statearr_51228_51843[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (41))){
var state_51165__$1 = state_51165;
var statearr_51229_51844 = state_51165__$1;
(statearr_51229_51844[(2)] = null);

(statearr_51229_51844[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (89))){
var inst_51122 = (state_51165[(39)]);
var state_51165__$1 = state_51165;
var statearr_51230_51853 = state_51165__$1;
(statearr_51230_51853[(2)] = inst_51122);

(statearr_51230_51853[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (43))){
var inst_50904 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51231_51854 = state_51165__$1;
(statearr_51231_51854[(2)] = inst_50904);

(statearr_51231_51854[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (61))){
var inst_50978 = (state_51165[(19)]);
var inst_50980 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50978);
var state_51165__$1 = state_51165;
var statearr_51232_51858 = state_51165__$1;
(statearr_51232_51858[(2)] = inst_50980);

(statearr_51232_51858[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (29))){
var inst_50874 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
if(cljs.core.truth_(inst_50874)){
var statearr_51233_51862 = state_51165__$1;
(statearr_51233_51862[(1)] = (30));

} else {
var statearr_51234_51863 = state_51165__$1;
(statearr_51234_51863[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (44))){
var inst_50907 = (state_51165[(40)]);
var state_51165__$1 = state_51165;
var statearr_51235_51864 = state_51165__$1;
(statearr_51235_51864[(2)] = inst_50907);

(statearr_51235_51864[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (93))){
var inst_51134 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51236_51868 = state_51165__$1;
(statearr_51236_51868[(2)] = inst_51134);

(statearr_51236_51868[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (6))){
var inst_50830 = (state_51165[(41)]);
var inst_50832 = (new inst_50830());
var state_51165__$1 = (function (){var statearr_51237 = state_51165;
(statearr_51237[(37)] = inst_50832);

return statearr_51237;
})();
var statearr_51241_51869 = state_51165__$1;
(statearr_51241_51869[(2)] = null);

(statearr_51241_51869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (28))){
var inst_50867 = (state_51165[(42)]);
var state_51165__$1 = state_51165;
var statearr_51246_51870 = state_51165__$1;
(statearr_51246_51870[(2)] = inst_50867);

(statearr_51246_51870[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (64))){
var inst_50988 = (state_51165[(12)]);
var inst_50990 = cljs.core.chunked_seq_QMARK_(inst_50988);
var state_51165__$1 = state_51165;
if(inst_50990){
var statearr_51247_51871 = state_51165__$1;
(statearr_51247_51871[(1)] = (67));

} else {
var statearr_51248_51872 = state_51165__$1;
(statearr_51248_51872[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (51))){
var inst_50945 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
if(cljs.core.truth_(inst_50945)){
var statearr_51249_51873 = state_51165__$1;
(statearr_51249_51873[(1)] = (52));

} else {
var statearr_51250_51874 = state_51165__$1;
(statearr_51250_51874[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (25))){
var inst_50832 = (state_51165[(37)]);
var inst_50882 = (state_51165[(2)]);
var state_51165__$1 = (function (){var statearr_51251 = state_51165;
(statearr_51251[(43)] = inst_50882);

return statearr_51251;
})();
var statearr_51252_51875 = state_51165__$1;
(statearr_51252_51875[(2)] = inst_50832);

(statearr_51252_51875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (34))){
var inst_51155 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51253_51879 = state_51165__$1;
(statearr_51253_51879[(2)] = inst_51155);

(statearr_51253_51879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (17))){
var inst_50844 = (state_51165[(14)]);
var inst_50847 = cljs.core.ex_data(inst_50844);
var inst_50848 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50847);
var inst_50849 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50848,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_51165__$1 = state_51165;
var statearr_51255_51880 = state_51165__$1;
(statearr_51255_51880[(2)] = inst_50849);

(statearr_51255_51880[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (3))){
var inst_51163 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51165__$1,inst_51163);
} else {
if((state_val_51166 === (12))){
var _ = (function (){var statearr_51256 = state_51165;
(statearr_51256[(4)] = cljs.core.rest((state_51165[(4)])));

return statearr_51256;
})();
var state_51165__$1 = state_51165;
var ex51254 = (state_51165__$1[(2)]);
var statearr_51257_51895 = state_51165__$1;
(statearr_51257_51895[(5)] = ex51254);


var statearr_51258_51898 = state_51165__$1;
(statearr_51258_51898[(1)] = (11));

(statearr_51258_51898[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (2))){
var inst_50829 = (state_51165[(34)]);
var inst_50830 = (state_51165[(41)]);
var _ = (function (){var statearr_51259 = state_51165;
(statearr_51259[(4)] = cljs.core.cons((5),(state_51165[(4)])));

return statearr_51259;
})();
var inst_50825 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50826 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_50827 = cljs.core.PersistentHashMap.fromArrays(inst_50825,inst_50826);
var inst_50828 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50827);
var inst_50829__$1 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_50830__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(inst_50829__$1);
var state_51165__$1 = (function (){var statearr_51260 = state_51165;
(statearr_51260[(44)] = inst_50828);

(statearr_51260[(34)] = inst_50829__$1);

(statearr_51260[(41)] = inst_50830__$1);

return statearr_51260;
})();
if(cljs.core.truth_(inst_50830__$1)){
var statearr_51261_51901 = state_51165__$1;
(statearr_51261_51901[(1)] = (6));

} else {
var statearr_51262_51903 = state_51165__$1;
(statearr_51262_51903[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (66))){
var inst_51012 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51264_51904 = state_51165__$1;
(statearr_51264_51904[(2)] = inst_51012);

(statearr_51264_51904[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (23))){
var inst_50832 = (state_51165[(37)]);
var inst_50863 = bb_web_ds_tools.runtime.webr.init_obj(inst_50832);
var inst_50864 = cljs.core.async.interop.p__GT_c(inst_50863);
var state_51165__$1 = state_51165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51165__$1,(26),inst_50864);
} else {
if((state_val_51166 === (47))){
var _ = (function (){var statearr_51266 = state_51165;
(statearr_51266[(4)] = cljs.core.rest((state_51165[(4)])));

return statearr_51266;
})();
var state_51165__$1 = state_51165;
var ex51263 = (state_51165__$1[(2)]);
var statearr_51267_51908 = state_51165__$1;
(statearr_51267_51908[(5)] = ex51263);


var statearr_51268_51909 = state_51165__$1;
(statearr_51268_51909[(1)] = (36));

(statearr_51268_51909[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (35))){
var inst_50887 = (state_51165[(35)]);
var _ = (function (){var statearr_51270 = state_51165;
(statearr_51270[(4)] = cljs.core.rest((state_51165[(4)])));

return statearr_51270;
})();
var inst_50889 = (state_51165[(2)]);
var inst_50890 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_50887);
var ___$1 = (function (){var temp__5825__auto__ = (state_51165[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31772__auto__ = temp__5825__auto__;
throw e__31772__auto__;
} else {
return null;
}
})();
var state_51165__$1 = (function (){var statearr_51272 = state_51165;
(statearr_51272[(45)] = inst_50890);

return statearr_51272;
})();
var statearr_51273_51922 = state_51165__$1;
(statearr_51273_51922[(2)] = inst_50889);

(statearr_51273_51922[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (82))){
var inst_51065 = (state_51165[(46)]);
var inst_50962 = (state_51165[(21)]);
var inst_50963 = (state_51165[(22)]);
var inst_50964 = (state_51165[(23)]);
var inst_51074 = cljs.core.first(inst_51065);
var inst_51075 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_51074);
var inst_51076 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51077 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_51078 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_51079 = [inst_50962,inst_50963];
var inst_51080 = cljs.core.PersistentHashMap.fromArrays(inst_51078,inst_51079);
var inst_51081 = [inst_51080];
var inst_51082 = cljs.core.PersistentHashMap.fromArrays(inst_51077,inst_51081);
var inst_51083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51084 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_51085 = bb_web_ds_tools.runtime.webr.get_width(inst_51074);
var inst_51086 = (inst_51085 * inst_50964);
var inst_51087 = (inst_51086 | (0));
var inst_51088 = bb_web_ds_tools.runtime.webr.get_height(inst_51074);
var inst_51089 = (inst_51088 * inst_50964);
var inst_51090 = (inst_51089 | (0));
var inst_51091 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_51092 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51075),")"].join('');
var inst_51093 = [inst_51092,"cover"];
var inst_51094 = cljs.core.PersistentHashMap.fromArrays(inst_51091,inst_51093);
var inst_51095 = [inst_51087,inst_51090,inst_51094];
var inst_51096 = cljs.core.PersistentHashMap.fromArrays(inst_51084,inst_51095);
var inst_51097 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_51096];
var inst_51098 = (new cljs.core.PersistentVector(null,2,(5),inst_51083,inst_51097,null));
var inst_51099 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_51082,inst_51098];
var inst_51100 = (new cljs.core.PersistentVector(null,3,(5),inst_51076,inst_51099,null));
var inst_51101 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51102 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_51100,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_51103 = (new cljs.core.PersistentVector(null,3,(5),inst_51101,inst_51102,null));
var inst_51104 = re_frame.core.dispatch(inst_51103);
var inst_51105 = cljs.core.next(inst_51065);
var inst_51023 = inst_51105;
var inst_51024 = null;
var inst_51025 = (0);
var inst_51026 = (0);
var state_51165__$1 = (function (){var statearr_51276 = state_51165;
(statearr_51276[(47)] = inst_51104);

(statearr_51276[(31)] = inst_51023);

(statearr_51276[(29)] = inst_51024);

(statearr_51276[(32)] = inst_51025);

(statearr_51276[(30)] = inst_51026);

return statearr_51276;
})();
var statearr_51277_51953 = state_51165__$1;
(statearr_51277_51953[(2)] = null);

(statearr_51277_51953[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (76))){
var inst_51023 = (state_51165[(31)]);
var inst_51065 = (state_51165[(46)]);
var inst_51065__$1 = cljs.core.seq(inst_51023);
var state_51165__$1 = (function (){var statearr_51280 = state_51165;
(statearr_51280[(46)] = inst_51065__$1);

return statearr_51280;
})();
if(inst_51065__$1){
var statearr_51281_51954 = state_51165__$1;
(statearr_51281_51954[(1)] = (78));

} else {
var statearr_51282_51955 = state_51165__$1;
(statearr_51282_51955[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (97))){
var _ = (function (){var statearr_51285 = state_51165;
(statearr_51285[(4)] = cljs.core.rest((state_51165[(4)])));

return statearr_51285;
})();
var state_51165__$1 = state_51165;
var ex51274 = (state_51165__$1[(2)]);
var statearr_51286_51956 = state_51165__$1;
(statearr_51286_51956[(5)] = ex51274);


if((ex51274 instanceof Error)){
var statearr_51287_51957 = state_51165__$1;
(statearr_51287_51957[(1)] = (96));

(statearr_51287_51957[(5)] = null);

} else {
throw ex51274;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (19))){
var inst_50852 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
if(cljs.core.truth_(inst_50852)){
var statearr_51288_51958 = state_51165__$1;
(statearr_51288_51958[(1)] = (20));

} else {
var statearr_51290_51959 = state_51165__$1;
(statearr_51290_51959[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (57))){
var inst_50953 = (state_51165[(26)]);
var inst_51016 = (state_51165[(2)]);
var inst_51021 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50953);
var inst_51022 = cljs.core.seq(inst_51021);
var inst_51023 = inst_51022;
var inst_51024 = null;
var inst_51025 = (0);
var inst_51026 = (0);
var state_51165__$1 = (function (){var statearr_51292 = state_51165;
(statearr_51292[(48)] = inst_51016);

(statearr_51292[(31)] = inst_51023);

(statearr_51292[(29)] = inst_51024);

(statearr_51292[(32)] = inst_51025);

(statearr_51292[(30)] = inst_51026);

return statearr_51292;
})();
var statearr_51294_51960 = state_51165__$1;
(statearr_51294_51960[(2)] = null);

(statearr_51294_51960[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (68))){
var inst_50988 = (state_51165[(12)]);
var inst_50999 = (state_51165[(7)]);
var inst_50999__$1 = cljs.core.first(inst_50988);
var state_51165__$1 = (function (){var statearr_51295 = state_51165;
(statearr_51295[(7)] = inst_50999__$1);

return statearr_51295;
})();
if(cljs.core.truth_(inst_50999__$1)){
var statearr_51296_51961 = state_51165__$1;
(statearr_51296_51961[(1)] = (70));

} else {
var statearr_51297_51962 = state_51165__$1;
(statearr_51297_51962[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (11))){
var inst_50833 = (state_51165[(2)]);
var inst_50834 = (function(){throw inst_50833})();
var state_51165__$1 = state_51165;
var statearr_51299_51963 = state_51165__$1;
(statearr_51299_51963[(2)] = inst_50834);

(statearr_51299_51963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (9))){
var inst_50832 = (state_51165[(37)]);
var _ = (function (){var statearr_51300 = state_51165;
(statearr_51300[(4)] = cljs.core.cons((12),(state_51165[(4)])));

return statearr_51300;
})();
var inst_50840 = (inst_50832 instanceof Promise);
var state_51165__$1 = state_51165;
if(cljs.core.truth_(inst_50840)){
var statearr_51302_51973 = state_51165__$1;
(statearr_51302_51973[(1)] = (13));

} else {
var statearr_51303_51974 = state_51165__$1;
(statearr_51303_51974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (5))){
var _ = (function (){var statearr_51304 = state_51165;
(statearr_51304[(4)] = cljs.core.rest((state_51165[(4)])));

return statearr_51304;
})();
var state_51165__$1 = state_51165;
var ex51298 = (state_51165__$1[(2)]);
var statearr_51305_51976 = state_51165__$1;
(statearr_51305_51976[(5)] = ex51298);


var statearr_51306_51977 = state_51165__$1;
(statearr_51306_51977[(1)] = (4));

(statearr_51306_51977[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (83))){
var inst_51108 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51307_51978 = state_51165__$1;
(statearr_51307_51978[(2)] = inst_51108);

(statearr_51307_51978[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (14))){
var inst_50832 = (state_51165[(37)]);
var inst_50859 = inst_50832.init;
var inst_50860 = (inst_50859 == null);
var inst_50861 = cljs.core.not(inst_50860);
var state_51165__$1 = state_51165;
if(inst_50861){
var statearr_51309_51982 = state_51165__$1;
(statearr_51309_51982[(1)] = (23));

} else {
var statearr_51310_51983 = state_51165__$1;
(statearr_51310_51983[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (45))){
var inst_50893 = (state_51165[(36)]);
var inst_50912 = bb_web_ds_tools.runtime.webr.get_error_details(inst_50893);
var state_51165__$1 = state_51165;
var statearr_51311_51984 = state_51165__$1;
(statearr_51311_51984[(2)] = inst_50912);

(statearr_51311_51984[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (53))){
var inst_50937 = (state_51165[(27)]);
var state_51165__$1 = state_51165;
var statearr_51312_51988 = state_51165__$1;
(statearr_51312_51988[(2)] = inst_50937);

(statearr_51312_51988[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (78))){
var inst_51065 = (state_51165[(46)]);
var inst_51067 = cljs.core.chunked_seq_QMARK_(inst_51065);
var state_51165__$1 = state_51165;
if(inst_51067){
var statearr_51313_51989 = state_51165__$1;
(statearr_51313_51989[(1)] = (81));

} else {
var statearr_51315_51990 = state_51165__$1;
(statearr_51315_51990[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (26))){
var inst_50866 = (state_51165[(20)]);
var inst_50867 = (state_51165[(42)]);
var inst_50866__$1 = (state_51165[(2)]);
var inst_50867__$1 = (inst_50866__$1 instanceof cljs.core.ExceptionInfo);
var state_51165__$1 = (function (){var statearr_51318 = state_51165;
(statearr_51318[(20)] = inst_50866__$1);

(statearr_51318[(42)] = inst_50867__$1);

return statearr_51318;
})();
if(cljs.core.truth_(inst_50867__$1)){
var statearr_51320_51991 = state_51165__$1;
(statearr_51320_51991[(1)] = (27));

} else {
var statearr_51321_51992 = state_51165__$1;
(statearr_51321_51992[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (16))){
var inst_50844 = (state_51165[(14)]);
var inst_50845 = (state_51165[(49)]);
var inst_50844__$1 = (state_51165[(2)]);
var inst_50845__$1 = (inst_50844__$1 instanceof cljs.core.ExceptionInfo);
var state_51165__$1 = (function (){var statearr_51322 = state_51165;
(statearr_51322[(14)] = inst_50844__$1);

(statearr_51322[(49)] = inst_50845__$1);

return statearr_51322;
})();
if(cljs.core.truth_(inst_50845__$1)){
var statearr_51323_51993 = state_51165__$1;
(statearr_51323_51993[(1)] = (17));

} else {
var statearr_51324_51994 = state_51165__$1;
(statearr_51324_51994[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (81))){
var inst_51065 = (state_51165[(46)]);
var inst_51069 = cljs.core.chunk_first(inst_51065);
var inst_51070 = cljs.core.chunk_rest(inst_51065);
var inst_51071 = cljs.core.count(inst_51069);
var inst_51023 = inst_51070;
var inst_51024 = inst_51069;
var inst_51025 = inst_51071;
var inst_51026 = (0);
var state_51165__$1 = (function (){var statearr_51325 = state_51165;
(statearr_51325[(31)] = inst_51023);

(statearr_51325[(29)] = inst_51024);

(statearr_51325[(32)] = inst_51025);

(statearr_51325[(30)] = inst_51026);

return statearr_51325;
})();
var statearr_51326_51995 = state_51165__$1;
(statearr_51326_51995[(2)] = null);

(statearr_51326_51995[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (79))){
var state_51165__$1 = state_51165;
var statearr_51327_51996 = state_51165__$1;
(statearr_51327_51996[(2)] = null);

(statearr_51327_51996[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (38))){
var inst_50894 = (state_51165[(38)]);
var state_51165__$1 = state_51165;
var statearr_51328_52010 = state_51165__$1;
(statearr_51328_52010[(2)] = inst_50894);

(statearr_51328_52010[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (87))){
var inst_51121 = (state_51165[(24)]);
var inst_51122 = (state_51165[(39)]);
var inst_51121__$1 = (state_51165[(2)]);
var inst_51122__$1 = (inst_51121__$1 instanceof cljs.core.ExceptionInfo);
var state_51165__$1 = (function (){var statearr_51329 = state_51165;
(statearr_51329[(24)] = inst_51121__$1);

(statearr_51329[(39)] = inst_51122__$1);

return statearr_51329;
})();
if(cljs.core.truth_(inst_51122__$1)){
var statearr_51330_52014 = state_51165__$1;
(statearr_51330_52014[(1)] = (88));

} else {
var statearr_51331_52015 = state_51165__$1;
(statearr_51331_52015[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (30))){
var inst_50866 = (state_51165[(20)]);
var inst_50876 = (function(){throw inst_50866})();
var state_51165__$1 = state_51165;
var statearr_51332_52017 = state_51165__$1;
(statearr_51332_52017[(2)] = inst_50876);

(statearr_51332_52017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (73))){
var inst_51026 = (state_51165[(30)]);
var inst_51025 = (state_51165[(32)]);
var inst_51028 = (inst_51026 < inst_51025);
var inst_51029 = inst_51028;
var state_51165__$1 = state_51165;
if(cljs.core.truth_(inst_51029)){
var statearr_51335_52021 = state_51165__$1;
(statearr_51335_52021[(1)] = (75));

} else {
var statearr_51336_52022 = state_51165__$1;
(statearr_51336_52022[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (96))){
var inst_50954 = (state_51165[(8)]);
var inst_51138 = (state_51165[(2)]);
var inst_51139 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50954);
var state_51165__$1 = (function (){var statearr_51337 = state_51165;
(statearr_51337[(50)] = inst_51138);

return statearr_51337;
})();
var statearr_51338_52023 = state_51165__$1;
(statearr_51338_52023[(2)] = inst_51139);

(statearr_51338_52023[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (10))){
var inst_50887 = (state_51165[(2)]);
var state_51165__$1 = (function (){var statearr_51340 = state_51165;
(statearr_51340[(35)] = inst_50887);

return statearr_51340;
})();
var statearr_51344_52024 = state_51165__$1;
(statearr_51344_52024[(2)] = null);

(statearr_51344_52024[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (18))){
var inst_50845 = (state_51165[(49)]);
var state_51165__$1 = state_51165;
var statearr_51345_52025 = state_51165__$1;
(statearr_51345_52025[(2)] = inst_50845);

(statearr_51345_52025[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (52))){
var inst_50937 = (state_51165[(27)]);
var inst_50947 = (function(){throw inst_50937})();
var state_51165__$1 = state_51165;
var statearr_51350_52029 = state_51165__$1;
(statearr_51350_52029[(2)] = inst_50947);

(statearr_51350_52029[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (67))){
var inst_50988 = (state_51165[(12)]);
var inst_50994 = cljs.core.chunk_first(inst_50988);
var inst_50995 = cljs.core.chunk_rest(inst_50988);
var inst_50996 = cljs.core.count(inst_50994);
var inst_50970 = inst_50995;
var inst_50971 = inst_50994;
var inst_50972 = inst_50996;
var inst_50973 = (0);
var state_51165__$1 = (function (){var statearr_51351 = state_51165;
(statearr_51351[(11)] = inst_50970);

(statearr_51351[(16)] = inst_50971);

(statearr_51351[(17)] = inst_50972);

(statearr_51351[(18)] = inst_50973);

return statearr_51351;
})();
var statearr_51352_52031 = state_51165__$1;
(statearr_51352_52031[(2)] = null);

(statearr_51352_52031[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (71))){
var state_51165__$1 = state_51165;
var statearr_51353_52033 = state_51165__$1;
(statearr_51353_52033[(2)] = null);

(statearr_51353_52033[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (42))){
var inst_50907 = (state_51165[(40)]);
var inst_50907__$1 = (state_51165[(2)]);
var inst_50908 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var state_51165__$1 = (function (){var statearr_51354 = state_51165;
(statearr_51354[(40)] = inst_50907__$1);

(statearr_51354[(25)] = inst_50908);

return statearr_51354;
})();
if(cljs.core.truth_(inst_50907__$1)){
var statearr_51355_52038 = state_51165__$1;
(statearr_51355_52038[(1)] = (44));

} else {
var statearr_51356_52039 = state_51165__$1;
(statearr_51356_52039[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (80))){
var inst_51111 = (state_51165[(2)]);
var state_51165__$1 = state_51165;
var statearr_51360_52041 = state_51165__$1;
(statearr_51360_52041[(2)] = inst_51111);

(statearr_51360_52041[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (37))){
var inst_50893 = (state_51165[(36)]);
var inst_50896 = inst_50893.message;
var inst_50897 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50896,"Promise error");
var state_51165__$1 = state_51165;
var statearr_51361_52043 = state_51165__$1;
(statearr_51361_52043[(2)] = inst_50897);

(statearr_51361_52043[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (63))){
var inst_50973 = (state_51165[(18)]);
var inst_50970 = (state_51165[(11)]);
var inst_50971 = (state_51165[(16)]);
var inst_50972 = (state_51165[(17)]);
var inst_50984 = (state_51165[(2)]);
var inst_50985 = (inst_50973 + (1));
var tmp51357 = inst_50971;
var tmp51358 = inst_50972;
var tmp51359 = inst_50970;
var inst_50970__$1 = tmp51359;
var inst_50971__$1 = tmp51357;
var inst_50972__$1 = tmp51358;
var inst_50973__$1 = inst_50985;
var state_51165__$1 = (function (){var statearr_51362 = state_51165;
(statearr_51362[(51)] = inst_50984);

(statearr_51362[(11)] = inst_50970__$1);

(statearr_51362[(16)] = inst_50971__$1);

(statearr_51362[(17)] = inst_50972__$1);

(statearr_51362[(18)] = inst_50973__$1);

return statearr_51362;
})();
var statearr_51363_52056 = state_51165__$1;
(statearr_51363_52056[(2)] = null);

(statearr_51363_52056[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (94))){
var inst_51137 = (state_51165[(13)]);
var _ = (function (){var statearr_51364 = state_51165;
(statearr_51364[(4)] = cljs.core.cons((97),(state_51165[(4)])));

return statearr_51364;
})();
var inst_51145 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_51137,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_51365 = state_51165;
(statearr_51365[(4)] = cljs.core.rest((state_51165[(4)])));

return statearr_51365;
})();
var state_51165__$1 = state_51165;
var statearr_51366_52061 = state_51165__$1;
(statearr_51366_52061[(2)] = inst_51145);

(statearr_51366_52061[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (8))){
var inst_51160 = (state_51165[(2)]);
var _ = (function (){var statearr_51367 = state_51165;
(statearr_51367[(4)] = cljs.core.rest((state_51165[(4)])));

return statearr_51367;
})();
var state_51165__$1 = state_51165;
var statearr_51368_52062 = state_51165__$1;
(statearr_51368_52062[(2)] = inst_51160);

(statearr_51368_52062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (49))){
var inst_50937 = (state_51165[(27)]);
var inst_50940 = cljs.core.ex_data(inst_50937);
var inst_50941 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50940);
var inst_50942 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50941,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_51165__$1 = state_51165;
var statearr_51369_52063 = state_51165__$1;
(statearr_51369_52063[(2)] = inst_50942);

(statearr_51369_52063[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51166 === (84))){
var inst_51116 = (state_51165[(9)]);
var inst_51119 = cljs.core.async.interop.p__GT_c(inst_51116);
var state_51165__$1 = state_51165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51165__$1,(87),inst_51119);
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
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0 = (function (){
var statearr_51371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51371[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32540__auto__);

(statearr_51371[(1)] = (1));

return statearr_51371;
});
var bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1 = (function (state_51165){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_51165);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e51372){var ex__32543__auto__ = e51372;
var statearr_51373_52064 = state_51165;
(statearr_51373_52064[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_51165[(4)]))){
var statearr_51374_52065 = state_51165;
(statearr_51374_52065[(1)] = cljs.core.first((state_51165[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52069 = state_51165;
state_51165 = G__52069;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__ = function(state_51165){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1.call(this,state_51165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32540__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32540__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_51376 = f__32611__auto__();
(statearr_51376[(6)] = c__32610__auto__);

return statearr_51376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
} else {
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null));
}
}));

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$applyTo = (function (seq50806){
var G__50807 = cljs.core.first(seq50806);
var seq50806__$1 = cljs.core.next(seq50806);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50807,seq50806__$1);
}));


//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
