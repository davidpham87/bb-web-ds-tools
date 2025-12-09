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
bb_web_ds_tools.runtime.webr.input_buffer = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1000));
bb_web_ds_tools.runtime.webr.flush_BANG_ = bb_web_ds_tools.components.async_buffer.create(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),bb_web_ds_tools.runtime.webr.input_buffer,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),(50),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488),(function (xs){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",xs)], null),new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));
})], null));
bb_web_ds_tools.runtime.webr.portal_submit = (function bb_web_ds_tools$runtime$webr$portal_submit(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33092 = arguments.length;
var i__5750__auto___33093 = (0);
while(true){
if((i__5750__auto___33093 < len__5749__auto___33092)){
args__5755__auto__.push((arguments[i__5750__auto___33093]));

var G__33094 = (i__5750__auto___33093 + (1));
i__5750__auto___33093 = G__33094;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__32178,p__32179){
var map__32180 = p__32178;
var map__32180__$1 = cljs.core.__destructure_map(map__32180);
var value = map__32180__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32180__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__32181 = p__32179;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32181,(0),null);
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
if(cljs.core.truth_((function (){var G__32189 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__32188 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__32188.cljs$core$IFn$_invoke$arity$1 ? fexpr__32188.cljs$core$IFn$_invoke$arity$1(G__32189) : fexpr__32188.call(null,G__32189));
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
var c__24030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24031__auto__ = (function (){var switch__24007__auto__ = (function (state_32195){
var state_val_32198 = (state_32195[(1)]);
if((state_val_32198 === (1))){
var state_32195__$1 = state_32195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32195__$1,(2),bb_web_ds_tools.runtime.webr.input_buffer,text);
} else {
if((state_val_32198 === (2))){
var inst_32191 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32195__$1,inst_32191);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__24008__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__24008__auto____0 = (function (){
var statearr_32204 = [null,null,null,null,null,null,null];
(statearr_32204[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24008__auto__);

(statearr_32204[(1)] = (1));

return statearr_32204;
});
var bb_web_ds_tools$runtime$webr$state_machine__24008__auto____1 = (function (state_32195){
while(true){
var ret_value__24009__auto__ = (function (){try{while(true){
var result__24010__auto__ = switch__24007__auto__(state_32195);
if(cljs.core.keyword_identical_QMARK_(result__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24010__auto__;
}
break;
}
}catch (e32205){var ex__24011__auto__ = e32205;
var statearr_32206_33095 = state_32195;
(statearr_32206_33095[(2)] = ex__24011__auto__);


if(cljs.core.seq((state_32195[(4)]))){
var statearr_32211_33096 = state_32195;
(statearr_32211_33096[(1)] = cljs.core.first((state_32195[(4)])));

} else {
throw ex__24011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33097 = state_32195;
state_32195 = G__33097;
continue;
} else {
return ret_value__24009__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24008__auto__ = function(state_32195){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24008__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24008__auto____1.call(this,state_32195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24008__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24008__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24008__auto__;
})()
})();
var state__24032__auto__ = (function (){var statearr_32212 = f__24031__auto__();
(statearr_32212[(6)] = c__24030__auto__);

return statearr_32212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24032__auto__);
}));

return c__24030__auto__;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),viewer__$1], null));

}
}
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq32176){
var G__32177 = cljs.core.first(seq32176);
var seq32176__$1 = cljs.core.next(seq32176);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32177,seq32176__$1);
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
var c__24030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24031__auto__ = (function (){var switch__24007__auto__ = (function (state_32301){
var state_val_32302 = (state_32301[(1)]);
if((state_val_32302 === (7))){
var inst_32293 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
var statearr_32307_33101 = state_32301__$1;
(statearr_32307_33101[(2)] = inst_32293);

(statearr_32307_33101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (20))){
var inst_32271 = (state_32301[(7)]);
var inst_32276 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32271);
var state_32301__$1 = state_32301;
var statearr_32311_33102 = state_32301__$1;
(statearr_32311_33102[(2)] = inst_32276);

(statearr_32311_33102[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (1))){
var inst_32219 = (state_32301[(8)]);
var inst_32219__$1 = msg.type;
var inst_32220 = msg.data;
var inst_32221 = ["stderr",null,"stdout",null];
var inst_32222 = (new cljs.core.PersistentArrayMap(null,2,inst_32221,null));
var inst_32223 = (new cljs.core.PersistentHashSet(null,inst_32222,null));
var inst_32224 = (inst_32223.cljs$core$IFn$_invoke$arity$1 ? inst_32223.cljs$core$IFn$_invoke$arity$1(inst_32219__$1) : inst_32223.call(null,inst_32219__$1));
var state_32301__$1 = (function (){var statearr_32312 = state_32301;
(statearr_32312[(8)] = inst_32219__$1);

(statearr_32312[(9)] = inst_32220);

return statearr_32312;
})();
if(cljs.core.truth_(inst_32224)){
var statearr_32313_33103 = state_32301__$1;
(statearr_32313_33103[(1)] = (2));

} else {
var statearr_32314_33104 = state_32301__$1;
(statearr_32314_33104[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (24))){
var inst_32291 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
var statearr_32315_33105 = state_32301__$1;
(statearr_32315_33105[(2)] = inst_32291);

(statearr_32315_33105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (4))){
var inst_32295 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32301__$1,inst_32295);
} else {
if((state_val_32302 === (15))){
var inst_32265 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
if(cljs.core.truth_(inst_32265)){
var statearr_32316_33106 = state_32301__$1;
(statearr_32316_33106[(1)] = (16));

} else {
var statearr_32317_33107 = state_32301__$1;
(statearr_32317_33107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (21))){
var inst_32219 = (state_32301[(8)]);
var inst_32278 = (state_32301[(2)]);
var inst_32279 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32280 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32219);
var inst_32281 = [inst_32280,inst_32278];
var inst_32282 = cljs.core.PersistentHashMap.fromArrays(inst_32279,inst_32281);
var _ = (function (){var statearr_32318 = state_32301;
(statearr_32318[(4)] = cljs.core.rest((state_32301[(4)])));

return statearr_32318;
})();
var state_32301__$1 = state_32301;
var statearr_32319_33108 = state_32301__$1;
(statearr_32319_33108[(2)] = inst_32282);

(statearr_32319_33108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (13))){
var inst_32257 = (state_32301[(10)]);
var inst_32260 = cljs.core.ex_data(inst_32257);
var inst_32261 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32260);
var inst_32262 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32261,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32301__$1 = state_32301;
var statearr_32320_33109 = state_32301__$1;
(statearr_32320_33109[(2)] = inst_32262);

(statearr_32320_33109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (22))){
var state_32301__$1 = state_32301;
var statearr_32321_33110 = state_32301__$1;
(statearr_32321_33110[(2)] = null);

(statearr_32321_33110[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (6))){
var state_32301__$1 = state_32301;
var statearr_32322_33111 = state_32301__$1;
(statearr_32322_33111[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (17))){
var inst_32257 = (state_32301[(10)]);
var state_32301__$1 = state_32301;
var statearr_32328_33113 = state_32301__$1;
(statearr_32328_33113[(2)] = inst_32257);

(statearr_32328_33113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (3))){
var inst_32219 = (state_32301[(8)]);
var inst_32235 = ["message",null,"warning",null];
var inst_32236 = (new cljs.core.PersistentArrayMap(null,2,inst_32235,null));
var inst_32237 = (new cljs.core.PersistentHashSet(null,inst_32236,null));
var inst_32238 = (inst_32237.cljs$core$IFn$_invoke$arity$1 ? inst_32237.cljs$core$IFn$_invoke$arity$1(inst_32219) : inst_32237.call(null,inst_32219));
var state_32301__$1 = state_32301;
if(cljs.core.truth_(inst_32238)){
var statearr_32329_33117 = state_32301__$1;
(statearr_32329_33117[(1)] = (5));

} else {
var statearr_32330_33118 = state_32301__$1;
(statearr_32330_33118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (12))){
var inst_32257 = (state_32301[(10)]);
var inst_32258 = (state_32301[(11)]);
var inst_32257__$1 = (state_32301[(2)]);
var inst_32258__$1 = (inst_32257__$1 instanceof cljs.core.ExceptionInfo);
var state_32301__$1 = (function (){var statearr_32331 = state_32301;
(statearr_32331[(10)] = inst_32257__$1);

(statearr_32331[(11)] = inst_32258__$1);

return statearr_32331;
})();
if(cljs.core.truth_(inst_32258__$1)){
var statearr_32332_33122 = state_32301__$1;
(statearr_32332_33122[(1)] = (13));

} else {
var statearr_32333_33123 = state_32301__$1;
(statearr_32333_33123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (2))){
var inst_32219 = (state_32301[(8)]);
var inst_32220 = (state_32301[(9)]);
var inst_32230 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32231 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32219);
var inst_32232 = [inst_32231,inst_32220];
var inst_32233 = cljs.core.PersistentHashMap.fromArrays(inst_32230,inst_32232);
var state_32301__$1 = state_32301;
var statearr_32338_33124 = state_32301__$1;
(statearr_32338_33124[(2)] = inst_32233);

(statearr_32338_33124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (23))){
var state_32301__$1 = state_32301;
var statearr_32340_33125 = state_32301__$1;
(statearr_32340_33125[(2)] = null);

(statearr_32340_33125[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (19))){
var inst_32273 = (state_32301[(12)]);
var state_32301__$1 = state_32301;
var statearr_32341_33127 = state_32301__$1;
(statearr_32341_33127[(2)] = inst_32273);

(statearr_32341_33127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (11))){
var _ = (function (){var statearr_32342 = state_32301;
(statearr_32342[(4)] = cljs.core.rest((state_32301[(4)])));

return statearr_32342;
})();
var state_32301__$1 = state_32301;
var ex32339 = (state_32301__$1[(2)]);
var statearr_32343_33131 = state_32301__$1;
(statearr_32343_33131[(5)] = ex32339);


var statearr_32348_33132 = state_32301__$1;
(statearr_32348_33132[(1)] = (10));

(statearr_32348_33132[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (9))){
var inst_32285 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
var statearr_32349_33133 = state_32301__$1;
(statearr_32349_33133[(2)] = inst_32285);

(statearr_32349_33133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (5))){
var state_32301__$1 = state_32301;
var statearr_32351_33138 = state_32301__$1;
(statearr_32351_33138[(2)] = null);

(statearr_32351_33138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (14))){
var inst_32258 = (state_32301[(11)]);
var state_32301__$1 = state_32301;
var statearr_32352_33139 = state_32301__$1;
(statearr_32352_33139[(2)] = inst_32258);

(statearr_32352_33139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (16))){
var inst_32257 = (state_32301[(10)]);
var inst_32267 = (function(){throw inst_32257})();
var state_32301__$1 = state_32301;
var statearr_32353_33140 = state_32301__$1;
(statearr_32353_33140[(2)] = inst_32267);

(statearr_32353_33140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (10))){
var inst_32219 = (state_32301[(8)]);
var inst_32240 = (state_32301[(2)]);
var inst_32245 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32246 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32219);
var inst_32247 = [inst_32246,"Error decoding message"];
var inst_32248 = cljs.core.PersistentHashMap.fromArrays(inst_32245,inst_32247);
var state_32301__$1 = (function (){var statearr_32354 = state_32301;
(statearr_32354[(13)] = inst_32240);

return statearr_32354;
})();
var statearr_32355_33143 = state_32301__$1;
(statearr_32355_33143[(2)] = inst_32248);

(statearr_32355_33143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (18))){
var inst_32271 = (state_32301[(7)]);
var inst_32273 = (state_32301[(12)]);
var inst_32270 = (state_32301[(2)]);
var inst_32271__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_32270,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_32273__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_32271__$1);
var state_32301__$1 = (function (){var statearr_32356 = state_32301;
(statearr_32356[(7)] = inst_32271__$1);

(statearr_32356[(12)] = inst_32273__$1);

return statearr_32356;
})();
if(cljs.core.truth_(inst_32273__$1)){
var statearr_32357_33147 = state_32301__$1;
(statearr_32357_33147[(1)] = (19));

} else {
var statearr_32358_33148 = state_32301__$1;
(statearr_32358_33148[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (8))){
var inst_32220 = (state_32301[(9)]);
var _ = (function (){var statearr_32359 = state_32301;
(statearr_32359[(4)] = cljs.core.cons((11),(state_32301[(4)])));

return statearr_32359;
})();
var inst_32254 = bb_web_ds_tools.runtime.webr.to_js(inst_32220);
var inst_32255 = cljs.core.async.interop.p__GT_c(inst_32254);
var state_32301__$1 = state_32301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32301__$1,(12),inst_32255);
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
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto__ = null;
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto____0 = (function (){
var statearr_32360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32360[(0)] = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto__);

(statearr_32360[(1)] = (1));

return statearr_32360;
});
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto____1 = (function (state_32301){
while(true){
var ret_value__24009__auto__ = (function (){try{while(true){
var result__24010__auto__ = switch__24007__auto__(state_32301);
if(cljs.core.keyword_identical_QMARK_(result__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24010__auto__;
}
break;
}
}catch (e32361){var ex__24011__auto__ = e32361;
var statearr_32364_33153 = state_32301;
(statearr_32364_33153[(2)] = ex__24011__auto__);


if(cljs.core.seq((state_32301[(4)]))){
var statearr_32365_33154 = state_32301;
(statearr_32365_33154[(1)] = cljs.core.first((state_32301[(4)])));

} else {
throw ex__24011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33155 = state_32301;
state_32301 = G__33155;
continue;
} else {
return ret_value__24009__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto__ = function(state_32301){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto____1.call(this,state_32301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto____0;
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto____1;
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto__;
})()
})();
var state__24032__auto__ = (function (){var statearr_32366 = f__24031__auto__();
(statearr_32366[(6)] = c__24030__auto__);

return statearr_32366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24032__auto__);
}));

return c__24030__auto__;
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
var c__24030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24031__auto__ = (function (){var switch__24007__auto__ = (function (state_32417){
var state_val_32418 = (state_32417[(1)]);
if((state_val_32418 === (7))){
var inst_32413 = (state_32417[(2)]);
var state_32417__$1 = state_32417;
var statearr_32419_33160 = state_32417__$1;
(statearr_32419_33160[(2)] = inst_32413);

(statearr_32419_33160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (1))){
var inst_32368 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_32417__$1 = state_32417;
if(cljs.core.truth_(inst_32368)){
var statearr_32421_33161 = state_32417__$1;
(statearr_32421_33161[(1)] = (2));

} else {
var statearr_32422_33162 = state_32417__$1;
(statearr_32422_33162[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (4))){
var inst_32415 = (state_32417[(2)]);
var state_32417__$1 = state_32417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32417__$1,inst_32415);
} else {
if((state_val_32418 === (15))){
var inst_32400 = (state_32417[(2)]);
var state_32417__$1 = state_32417;
if(cljs.core.truth_(inst_32400)){
var statearr_32427_33164 = state_32417__$1;
(statearr_32427_33164[(1)] = (16));

} else {
var statearr_32431_33165 = state_32417__$1;
(statearr_32431_33165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (13))){
var inst_32392 = (state_32417[(7)]);
var inst_32395 = cljs.core.ex_data(inst_32392);
var inst_32396 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32395);
var inst_32397 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32396,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32417__$1 = state_32417;
var statearr_32435_33166 = state_32417__$1;
(statearr_32435_33166[(2)] = inst_32397);

(statearr_32435_33166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (6))){
var inst_32411 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_32417__$1 = state_32417;
var statearr_32436_33167 = state_32417__$1;
(statearr_32436_33167[(2)] = inst_32411);

(statearr_32436_33167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (17))){
var inst_32392 = (state_32417[(7)]);
var state_32417__$1 = state_32417;
var statearr_32438_33168 = state_32417__$1;
(statearr_32438_33168[(2)] = inst_32392);

(statearr_32438_33168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (3))){
var inst_32372 = (typeof WebR !== 'undefined');
var state_32417__$1 = state_32417;
if(cljs.core.truth_(inst_32372)){
var statearr_32439_33171 = state_32417__$1;
(statearr_32439_33171[(1)] = (5));

} else {
var statearr_32440_33172 = state_32417__$1;
(statearr_32440_33172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (12))){
var inst_32392 = (state_32417[(7)]);
var inst_32393 = (state_32417[(8)]);
var inst_32392__$1 = (state_32417[(2)]);
var inst_32393__$1 = (inst_32392__$1 instanceof cljs.core.ExceptionInfo);
var state_32417__$1 = (function (){var statearr_32442 = state_32417;
(statearr_32442[(7)] = inst_32392__$1);

(statearr_32442[(8)] = inst_32393__$1);

return statearr_32442;
})();
if(cljs.core.truth_(inst_32393__$1)){
var statearr_32443_33173 = state_32417__$1;
(statearr_32443_33173[(1)] = (13));

} else {
var statearr_32444_33174 = state_32417__$1;
(statearr_32444_33174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (2))){
var inst_32370 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_32417__$1 = state_32417;
var statearr_32445_33181 = state_32417__$1;
(statearr_32445_33181[(2)] = inst_32370);

(statearr_32445_33181[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (11))){
var _ = (function (){var statearr_32446 = state_32417;
(statearr_32446[(4)] = cljs.core.rest((state_32417[(4)])));

return statearr_32446;
})();
var state_32417__$1 = state_32417;
var ex32441 = (state_32417__$1[(2)]);
var statearr_32447_33182 = state_32417__$1;
(statearr_32447_33182[(5)] = ex32441);


var statearr_32448_33183 = state_32417__$1;
(statearr_32448_33183[(1)] = (10));

(statearr_32448_33183[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (9))){
var inst_32409 = (state_32417[(2)]);
var state_32417__$1 = state_32417;
var statearr_32449_33184 = state_32417__$1;
(statearr_32449_33184[(2)] = inst_32409);

(statearr_32449_33184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (5))){
var state_32417__$1 = state_32417;
var statearr_32450_33185 = state_32417__$1;
(statearr_32450_33185[(2)] = null);

(statearr_32450_33185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (14))){
var inst_32393 = (state_32417[(8)]);
var state_32417__$1 = state_32417;
var statearr_32451_33186 = state_32417__$1;
(statearr_32451_33186[(2)] = inst_32393);

(statearr_32451_33186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (16))){
var inst_32392 = (state_32417[(7)]);
var inst_32402 = (function(){throw inst_32392})();
var state_32417__$1 = state_32417;
var statearr_32452_33187 = state_32417__$1;
(statearr_32452_33187[(2)] = inst_32402);

(statearr_32452_33187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (10))){
var inst_32374 = (state_32417[(2)]);
var inst_32375 = console.error("WebR Init Error:",inst_32374);
var inst_32376 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32374)].join('');
var inst_32377 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_32376) : on_error.call(null,inst_32376));
var state_32417__$1 = (function (){var statearr_32453 = state_32417;
(statearr_32453[(9)] = inst_32375);

return statearr_32453;
})();
var statearr_32454_33188 = state_32417__$1;
(statearr_32454_33188[(2)] = inst_32377);

(statearr_32454_33188[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (18))){
var inst_32405 = (state_32417[(2)]);
var inst_32406 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_32455 = state_32417;
(statearr_32455[(4)] = cljs.core.rest((state_32417[(4)])));

return statearr_32455;
})();
var state_32417__$1 = (function (){var statearr_32456 = state_32417;
(statearr_32456[(10)] = inst_32405);

return statearr_32456;
})();
var statearr_32458_33189 = state_32417__$1;
(statearr_32458_33189[(2)] = inst_32406);

(statearr_32458_33189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (8))){
var _ = (function (){var statearr_32461 = state_32417;
(statearr_32461[(4)] = cljs.core.cons((11),(state_32417[(4)])));

return statearr_32461;
})();
var inst_32383 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_32384 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_32385 = cljs.core.PersistentHashMap.fromArrays(inst_32383,inst_32384);
var inst_32386 = cljs.core.clj__GT_js(inst_32385);
var inst_32387 = (new WebR(inst_32386));
var inst_32388 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_32387);
var inst_32389 = bb_web_ds_tools.runtime.webr.init_obj(inst_32387);
var inst_32390 = cljs.core.async.interop.p__GT_c(inst_32389);
var state_32417__$1 = (function (){var statearr_32462 = state_32417;
(statearr_32462[(11)] = inst_32388);

return statearr_32462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32417__$1,(12),inst_32390);
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
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto__ = null;
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto____0 = (function (){
var statearr_32463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32463[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto__);

(statearr_32463[(1)] = (1));

return statearr_32463;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto____1 = (function (state_32417){
while(true){
var ret_value__24009__auto__ = (function (){try{while(true){
var result__24010__auto__ = switch__24007__auto__(state_32417);
if(cljs.core.keyword_identical_QMARK_(result__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24010__auto__;
}
break;
}
}catch (e32464){var ex__24011__auto__ = e32464;
var statearr_32465_33190 = state_32417;
(statearr_32465_33190[(2)] = ex__24011__auto__);


if(cljs.core.seq((state_32417[(4)]))){
var statearr_32466_33191 = state_32417;
(statearr_32466_33191[(1)] = cljs.core.first((state_32417[(4)])));

} else {
throw ex__24011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33192 = state_32417;
state_32417 = G__33192;
continue;
} else {
return ret_value__24009__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto__ = function(state_32417){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto____1.call(this,state_32417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto__;
})()
})();
var state__24032__auto__ = (function (){var statearr_32467 = f__24031__auto__();
(statearr_32467[(6)] = c__24030__auto__);

return statearr_32467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24032__auto__);
}));

return c__24030__auto__;
});
/**
 * Evaluates R code in the main thread using WebR.
 * 
 *   Args:
 *  code (string): The R code to evaluate.
 * 
 *   Returns:
 *  nil: Submits results to Portal.
 */
bb_web_ds_tools.runtime.webr.eval_in_main = (function bb_web_ds_tools$runtime$webr$eval_in_main(code){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__24030__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24031__auto__ = (function (){var switch__24007__auto__ = (function (state_32846){
var state_val_32848 = (state_32846[(1)]);
if((state_val_32848 === (65))){
var inst_32654 = (state_32846[(7)]);
var inst_32658 = cljs.core.chunk_first(inst_32654);
var inst_32659 = cljs.core.chunk_rest(inst_32654);
var inst_32660 = cljs.core.count(inst_32658);
var inst_32633 = inst_32659;
var inst_32634 = inst_32658;
var inst_32635 = inst_32660;
var inst_32636 = (0);
var state_32846__$1 = (function (){var statearr_32849 = state_32846;
(statearr_32849[(8)] = inst_32633);

(statearr_32849[(9)] = inst_32634);

(statearr_32849[(10)] = inst_32635);

(statearr_32849[(11)] = inst_32636);

return statearr_32849;
})();
var statearr_32850_33193 = state_32846__$1;
(statearr_32850_33193[(2)] = null);

(statearr_32850_33193[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (70))){
var inst_32654 = (state_32846[(7)]);
var inst_32669 = (state_32846[(2)]);
var inst_32670 = cljs.core.next(inst_32654);
var inst_32633 = inst_32670;
var inst_32634 = null;
var inst_32635 = (0);
var inst_32636 = (0);
var state_32846__$1 = (function (){var statearr_32862 = state_32846;
(statearr_32862[(12)] = inst_32669);

(statearr_32862[(8)] = inst_32633);

(statearr_32862[(9)] = inst_32634);

(statearr_32862[(10)] = inst_32635);

(statearr_32862[(11)] = inst_32636);

return statearr_32862;
})();
var statearr_32863_33194 = state_32846__$1;
(statearr_32863_33194[(2)] = null);

(statearr_32863_33194[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (62))){
var inst_32654 = (state_32846[(7)]);
var inst_32656 = cljs.core.chunked_seq_QMARK_(inst_32654);
var state_32846__$1 = state_32846;
if(inst_32656){
var statearr_32864_33195 = state_32846__$1;
(statearr_32864_33195[(1)] = (65));

} else {
var statearr_32865_33196 = state_32846__$1;
(statearr_32865_33196[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (74))){
var inst_32688 = (state_32846[(13)]);
var inst_32739 = (state_32846[(14)]);
var inst_32739__$1 = cljs.core.seq(inst_32688);
var state_32846__$1 = (function (){var statearr_32867 = state_32846;
(statearr_32867[(14)] = inst_32739__$1);

return statearr_32867;
})();
if(inst_32739__$1){
var statearr_32868_33197 = state_32846__$1;
(statearr_32868_33197[(1)] = (76));

} else {
var statearr_32869_33198 = state_32846__$1;
(statearr_32869_33198[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (7))){
var inst_32838 = (new Error("Shelter not found on WebR instance"));
var inst_32839 = (function(){throw inst_32838})();
var state_32846__$1 = state_32846;
var statearr_32870_33199 = state_32846__$1;
(statearr_32870_33199[(2)] = inst_32839);

(statearr_32870_33199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (59))){
var inst_32645 = (state_32846[(15)]);
var inst_32647 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32645);
var state_32846__$1 = state_32846;
var statearr_32879_33200 = state_32846__$1;
(statearr_32879_33200[(2)] = inst_32647);

(statearr_32879_33200[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (86))){
var inst_32800 = (state_32846[(16)]);
var inst_32803 = cljs.core.ex_data(inst_32800);
var inst_32804 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32803);
var inst_32805 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32804,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32846__$1 = state_32846;
var statearr_32880_33201 = state_32846__$1;
(statearr_32880_33201[(2)] = inst_32805);

(statearr_32880_33201[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (20))){
var inst_32498 = (state_32846[(17)]);
var inst_32508 = (function(){throw inst_32498})();
var state_32846__$1 = state_32846;
var statearr_32882_33202 = state_32846__$1;
(statearr_32882_33202[(2)] = inst_32508);

(statearr_32882_33202[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (72))){
var inst_32586 = (state_32846[(18)]);
var inst_32794 = (state_32846[(19)]);
var inst_32793 = (state_32846[(2)]);
var inst_32794__$1 = bb_web_ds_tools.runtime.webr.to_js(inst_32586);
var inst_32795 = (inst_32794__$1 instanceof Promise);
var state_32846__$1 = (function (){var statearr_32886 = state_32846;
(statearr_32886[(20)] = inst_32793);

(statearr_32886[(19)] = inst_32794__$1);

return statearr_32886;
})();
if(cljs.core.truth_(inst_32795)){
var statearr_32887_33203 = state_32846__$1;
(statearr_32887_33203[(1)] = (82));

} else {
var statearr_32888_33204 = state_32846__$1;
(statearr_32888_33204[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (58))){
var inst_32679 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_32889_33205 = state_32846__$1;
(statearr_32889_33205[(2)] = inst_32679);

(statearr_32889_33205[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (60))){
var state_32846__$1 = state_32846;
var statearr_32890_33206 = state_32846__$1;
(statearr_32890_33206[(2)] = null);

(statearr_32890_33206[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (27))){
var inst_32520 = (state_32846[(21)]);
var inst_32523 = cljs.core.ex_data(inst_32520);
var inst_32524 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32523);
var inst_32525 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32524,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32846__$1 = state_32846;
var statearr_32891_33207 = state_32846__$1;
(statearr_32891_33207[(2)] = inst_32525);

(statearr_32891_33207[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (1))){
var state_32846__$1 = state_32846;
var statearr_32892_33208 = state_32846__$1;
(statearr_32892_33208[(2)] = null);

(statearr_32892_33208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (69))){
var state_32846__$1 = state_32846;
var statearr_32893_33209 = state_32846__$1;
(statearr_32893_33209[(2)] = null);

(statearr_32893_33209[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (24))){
var state_32846__$1 = state_32846;
var statearr_32895_33210 = state_32846__$1;
(statearr_32895_33210[(2)] = null);

(statearr_32895_33210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (55))){
var inst_32585 = (state_32846[(22)]);
var inst_32681 = (state_32846[(2)]);
var inst_32686 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_32585);
var inst_32687 = cljs.core.seq(inst_32686);
var inst_32688 = inst_32687;
var inst_32689 = null;
var inst_32690 = (0);
var inst_32691 = (0);
var state_32846__$1 = (function (){var statearr_32896 = state_32846;
(statearr_32896[(23)] = inst_32681);

(statearr_32896[(13)] = inst_32688);

(statearr_32896[(24)] = inst_32689);

(statearr_32896[(25)] = inst_32690);

(statearr_32896[(26)] = inst_32691);

return statearr_32896;
})();
var statearr_32897_33211 = state_32846__$1;
(statearr_32897_33211[(2)] = null);

(statearr_32897_33211[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (85))){
var inst_32800 = (state_32846[(16)]);
var inst_32801 = (state_32846[(27)]);
var inst_32800__$1 = (state_32846[(2)]);
var inst_32801__$1 = (inst_32800__$1 instanceof cljs.core.ExceptionInfo);
var state_32846__$1 = (function (){var statearr_32900 = state_32846;
(statearr_32900[(16)] = inst_32800__$1);

(statearr_32900[(27)] = inst_32801__$1);

return statearr_32900;
})();
if(cljs.core.truth_(inst_32801__$1)){
var statearr_32901_33212 = state_32846__$1;
(statearr_32901_33212[(1)] = (86));

} else {
var statearr_32902_33213 = state_32846__$1;
(statearr_32902_33213[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (39))){
var inst_32569 = (state_32846[(28)]);
var inst_32572 = cljs.core.ex_data(inst_32569);
var inst_32573 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32572);
var inst_32574 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32573,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32846__$1 = state_32846;
var statearr_32903_33214 = state_32846__$1;
(statearr_32903_33214[(2)] = inst_32574);

(statearr_32903_33214[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (88))){
var inst_32808 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
if(cljs.core.truth_(inst_32808)){
var statearr_32904_33215 = state_32846__$1;
(statearr_32904_33215[(1)] = (89));

} else {
var statearr_32905_33216 = state_32846__$1;
(statearr_32905_33216[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (46))){
var inst_32624 = cljs.core.PersistentVector.EMPTY;
var state_32846__$1 = state_32846;
var statearr_32907_33217 = state_32846__$1;
(statearr_32907_33217[(2)] = inst_32624);

(statearr_32907_33217[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (4))){
var inst_32468 = (state_32846[(2)]);
var inst_32469 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32470 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32468);
var inst_32471 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32470];
var inst_32472 = cljs.core.PersistentHashMap.fromArrays(inst_32469,inst_32471);
var inst_32473 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32472);
var state_32846__$1 = state_32846;
var statearr_32909_33218 = state_32846__$1;
(statearr_32909_33218[(2)] = inst_32473);

(statearr_32909_33218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (77))){
var state_32846__$1 = state_32846;
var statearr_32910_33219 = state_32846__$1;
(statearr_32910_33219[(2)] = null);

(statearr_32910_33219[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (95))){
var _ = (function (){var statearr_32911 = state_32846;
(statearr_32911[(4)] = cljs.core.rest((state_32846[(4)])));

return statearr_32911;
})();
var state_32846__$1 = state_32846;
var ex32908 = (state_32846__$1[(2)]);
var statearr_32912_33220 = state_32846__$1;
(statearr_32912_33220[(5)] = ex32908);


if((ex32908 instanceof Error)){
var statearr_32913_33221 = state_32846__$1;
(statearr_32913_33221[(1)] = (94));

(statearr_32913_33221[(5)] = null);

} else {
throw ex32908;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (54))){
var inst_32636 = (state_32846[(11)]);
var inst_32635 = (state_32846[(10)]);
var inst_32642 = (inst_32636 < inst_32635);
var inst_32643 = inst_32642;
var state_32846__$1 = state_32846;
if(cljs.core.truth_(inst_32643)){
var statearr_32914_33222 = state_32846__$1;
(statearr_32914_33222[(1)] = (56));

} else {
var statearr_32915_33223 = state_32846__$1;
(statearr_32915_33223[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (92))){
var inst_32816 = (state_32846[(29)]);
var _ = (function (){var statearr_32916 = state_32846;
(statearr_32916[(4)] = cljs.core.cons((95),(state_32846[(4)])));

return statearr_32916;
})();
var inst_32825 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_32816,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_32923 = state_32846;
(statearr_32923[(4)] = cljs.core.rest((state_32846[(4)])));

return statearr_32923;
})();
var state_32846__$1 = state_32846;
var statearr_32924_33224 = state_32846__$1;
(statearr_32924_33224[(2)] = inst_32825);

(statearr_32924_33224[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (15))){
var inst_32538 = (state_32846[(2)]);
var _ = (function (){var statearr_32925 = state_32846;
(statearr_32925[(4)] = cljs.core.rest((state_32846[(4)])));

return statearr_32925;
})();
var state_32846__$1 = state_32846;
var statearr_32926_33225 = state_32846__$1;
(statearr_32926_33225[(2)] = inst_32538);

(statearr_32926_33225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (48))){
var inst_32604 = (state_32846[(30)]);
var inst_32610 = cljs.core.seq(inst_32604);
var inst_32611 = cljs.core.first(inst_32610);
var inst_32612 = cljs.core.next(inst_32610);
var state_32846__$1 = (function (){var statearr_32927 = state_32846;
(statearr_32927[(31)] = inst_32612);

return statearr_32927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32846__$1,(50),inst_32611);
} else {
if((state_val_32848 === (50))){
var inst_32605 = (state_32846[(32)]);
var inst_32612 = (state_32846[(31)]);
var inst_32614 = (state_32846[(2)]);
var inst_32615 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32605,inst_32614);
var state_32846__$1 = (function (){var statearr_32930 = state_32846;
(statearr_32930[(33)] = inst_32615);

return statearr_32930;
})();
if(cljs.core.truth_(inst_32612)){
var statearr_32931_33226 = state_32846__$1;
(statearr_32931_33226[(1)] = (51));

} else {
var statearr_32932_33227 = state_32846__$1;
(statearr_32932_33227[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (75))){
var inst_32791 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_32933_33228 = state_32846__$1;
(statearr_32933_33228[(2)] = inst_32791);

(statearr_32933_33228[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (21))){
var inst_32498 = (state_32846[(17)]);
var state_32846__$1 = state_32846;
var statearr_32934_33229 = state_32846__$1;
(statearr_32934_33229[(2)] = inst_32498);

(statearr_32934_33229[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (31))){
var inst_32520 = (state_32846[(21)]);
var state_32846__$1 = state_32846;
var statearr_32935_33230 = state_32846__$1;
(statearr_32935_33230[(2)] = inst_32520);

(statearr_32935_33230[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (32))){
var inst_32533 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_32936_33231 = state_32846__$1;
(statearr_32936_33231[(2)] = inst_32533);

(statearr_32936_33231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (40))){
var inst_32570 = (state_32846[(34)]);
var state_32846__$1 = state_32846;
var statearr_32944_33232 = state_32846__$1;
(statearr_32944_33232[(2)] = inst_32570);

(statearr_32944_33232[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (91))){
var inst_32813 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_32945_33233 = state_32846__$1;
(statearr_32945_33233[(2)] = inst_32813);

(statearr_32945_33233[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (56))){
var inst_32634 = (state_32846[(9)]);
var inst_32636 = (state_32846[(11)]);
var inst_32645 = (state_32846[(15)]);
var inst_32645__$1 = cljs.core._nth(inst_32634,inst_32636);
var state_32846__$1 = (function (){var statearr_32946 = state_32846;
(statearr_32946[(15)] = inst_32645__$1);

return statearr_32946;
})();
if(cljs.core.truth_(inst_32645__$1)){
var statearr_32947_33234 = state_32846__$1;
(statearr_32947_33234[(1)] = (59));

} else {
var statearr_32948_33235 = state_32846__$1;
(statearr_32948_33235[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (33))){
var inst_32541 = (state_32846[(35)]);
var _ = (function (){var statearr_32949 = state_32846;
(statearr_32949[(4)] = cljs.core.cons((35),(state_32846[(4)])));

return statearr_32949;
})();
var ___$1 = (function (){var statearr_32950 = state_32846;
(statearr_32950[(4)] = cljs.core.cons((37),(state_32846[(4)])));

return statearr_32950;
})();
var inst_32562 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_32563 = [true];
var inst_32564 = cljs.core.PersistentHashMap.fromArrays(inst_32562,inst_32563);
var inst_32565 = cljs.core.clj__GT_js(inst_32564);
var inst_32566 = bb_web_ds_tools.runtime.webr.capture_r(inst_32541,code,inst_32565);
var inst_32567 = cljs.core.async.interop.p__GT_c(inst_32566);
var state_32846__$1 = state_32846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32846__$1,(38),inst_32567);
} else {
if((state_val_32848 === (13))){
var inst_32486 = (state_32846[(36)]);
var inst_32496 = cljs.core.async.interop.p__GT_c(inst_32486);
var state_32846__$1 = state_32846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32846__$1,(16),inst_32496);
} else {
if((state_val_32848 === (22))){
var inst_32511 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_32954_33236 = state_32846__$1;
(statearr_32954_33236[(2)] = inst_32511);

(statearr_32954_33236[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (90))){
var inst_32800 = (state_32846[(16)]);
var state_32846__$1 = state_32846;
var statearr_32955_33237 = state_32846__$1;
(statearr_32955_33237[(2)] = inst_32800);

(statearr_32955_33237[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (36))){
var inst_32547 = (state_32846[(2)]);
var inst_32548 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32549 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32547);
var inst_32550 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32549];
var inst_32551 = cljs.core.PersistentHashMap.fromArrays(inst_32548,inst_32550);
var inst_32552 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32551);
var state_32846__$1 = state_32846;
var statearr_32956_33238 = state_32846__$1;
(statearr_32956_33238[(2)] = inst_32552);

(statearr_32956_33238[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (41))){
var inst_32577 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
if(cljs.core.truth_(inst_32577)){
var statearr_32957_33239 = state_32846__$1;
(statearr_32957_33239[(1)] = (42));

} else {
var statearr_32958_33240 = state_32846__$1;
(statearr_32958_33240[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (89))){
var inst_32800 = (state_32846[(16)]);
var inst_32810 = (function(){throw inst_32800})();
var state_32846__$1 = state_32846;
var statearr_32962_33241 = state_32846__$1;
(statearr_32962_33241[(2)] = inst_32810);

(statearr_32962_33241[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (43))){
var inst_32569 = (state_32846[(28)]);
var state_32846__$1 = state_32846;
var statearr_32963_33242 = state_32846__$1;
(statearr_32963_33242[(2)] = inst_32569);

(statearr_32963_33242[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (61))){
var inst_32636 = (state_32846[(11)]);
var inst_32633 = (state_32846[(8)]);
var inst_32634 = (state_32846[(9)]);
var inst_32635 = (state_32846[(10)]);
var inst_32650 = (state_32846[(2)]);
var inst_32651 = (inst_32636 + (1));
var tmp32959 = inst_32635;
var tmp32960 = inst_32634;
var tmp32961 = inst_32633;
var inst_32633__$1 = tmp32961;
var inst_32634__$1 = tmp32960;
var inst_32635__$1 = tmp32959;
var inst_32636__$1 = inst_32651;
var state_32846__$1 = (function (){var statearr_32964 = state_32846;
(statearr_32964[(37)] = inst_32650);

(statearr_32964[(8)] = inst_32633__$1);

(statearr_32964[(9)] = inst_32634__$1);

(statearr_32964[(10)] = inst_32635__$1);

(statearr_32964[(11)] = inst_32636__$1);

return statearr_32964;
})();
var statearr_32965_33243 = state_32846__$1;
(statearr_32965_33243[(2)] = null);

(statearr_32965_33243[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (29))){
var inst_32528 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
if(cljs.core.truth_(inst_32528)){
var statearr_32966_33244 = state_32846__$1;
(statearr_32966_33244[(1)] = (30));

} else {
var statearr_32967_33245 = state_32846__$1;
(statearr_32967_33245[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (44))){
var inst_32588 = (state_32846[(38)]);
var inst_32582 = (state_32846[(2)]);
var inst_32583 = bb_web_ds_tools.runtime.webr.get_result_props(inst_32582);
var inst_32584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32583,(0),null);
var inst_32585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32583,(1),null);
var inst_32586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32583,(2),null);
var inst_32587 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_32584);
var inst_32588__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,inst_32587);
var inst_32589 = cljs.core.seq(inst_32588__$1);
var state_32846__$1 = (function (){var statearr_32990 = state_32846;
(statearr_32990[(22)] = inst_32585);

(statearr_32990[(18)] = inst_32586);

(statearr_32990[(38)] = inst_32588__$1);

return statearr_32990;
})();
if(inst_32589){
var statearr_32991_33246 = state_32846__$1;
(statearr_32991_33246[(1)] = (45));

} else {
var statearr_32992_33247 = state_32846__$1;
(statearr_32992_33247[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (93))){
var inst_32828 = (state_32846[(2)]);
var inst_32829 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_32830 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_32828];
var inst_32831 = cljs.core.PersistentHashMap.fromArrays(inst_32829,inst_32830);
var inst_32832 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32831);
var _ = (function (){var statearr_32993 = state_32846;
(statearr_32993[(4)] = cljs.core.rest((state_32846[(4)])));

return statearr_32993;
})();
var state_32846__$1 = state_32846;
var statearr_32994_33248 = state_32846__$1;
(statearr_32994_33248[(2)] = inst_32832);

(statearr_32994_33248[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (6))){
var inst_32484 = (state_32846[(39)]);
var inst_32486 = (new inst_32484());
var state_32846__$1 = (function (){var statearr_32995 = state_32846;
(statearr_32995[(36)] = inst_32486);

return statearr_32995;
})();
var statearr_32997_33249 = state_32846__$1;
(statearr_32997_33249[(2)] = null);

(statearr_32997_33249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (28))){
var inst_32521 = (state_32846[(40)]);
var state_32846__$1 = state_32846;
var statearr_32998_33250 = state_32846__$1;
(statearr_32998_33250[(2)] = inst_32521);

(statearr_32998_33250[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (64))){
var inst_32676 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_33000_33251 = state_32846__$1;
(statearr_33000_33251[(2)] = inst_32676);

(statearr_33000_33251[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (51))){
var inst_32612 = (state_32846[(31)]);
var inst_32615 = (state_32846[(33)]);
var inst_32604 = inst_32612;
var inst_32605 = inst_32615;
var state_32846__$1 = (function (){var statearr_33001 = state_32846;
(statearr_33001[(30)] = inst_32604);

(statearr_33001[(32)] = inst_32605);

return statearr_33001;
})();
var statearr_33002_33253 = state_32846__$1;
(statearr_33002_33253[(2)] = null);

(statearr_33002_33253[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (25))){
var inst_32486 = (state_32846[(36)]);
var inst_32536 = (state_32846[(2)]);
var state_32846__$1 = (function (){var statearr_33003 = state_32846;
(statearr_33003[(41)] = inst_32536);

return statearr_33003;
})();
var statearr_33004_33254 = state_32846__$1;
(statearr_33004_33254[(2)] = inst_32486);

(statearr_33004_33254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (34))){
var inst_32835 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_33005_33255 = state_32846__$1;
(statearr_33005_33255[(2)] = inst_32835);

(statearr_33005_33255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (17))){
var inst_32498 = (state_32846[(17)]);
var inst_32501 = cljs.core.ex_data(inst_32498);
var inst_32502 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32501);
var inst_32503 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32502,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32846__$1 = state_32846;
var statearr_33007_33256 = state_32846__$1;
(statearr_33007_33256[(2)] = inst_32503);

(statearr_33007_33256[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (3))){
var inst_32844 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32846__$1,inst_32844);
} else {
if((state_val_32848 === (12))){
var _ = (function (){var statearr_33008 = state_32846;
(statearr_33008[(4)] = cljs.core.rest((state_32846[(4)])));

return statearr_33008;
})();
var state_32846__$1 = state_32846;
var ex33006 = (state_32846__$1[(2)]);
var statearr_33009_33257 = state_32846__$1;
(statearr_33009_33257[(5)] = ex33006);


var statearr_33010_33258 = state_32846__$1;
(statearr_33010_33258[(1)] = (11));

(statearr_33010_33258[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (2))){
var inst_32484 = (state_32846[(39)]);
var _ = (function (){var statearr_33011 = state_32846;
(statearr_33011[(4)] = cljs.core.cons((5),(state_32846[(4)])));

return statearr_33011;
})();
var inst_32479 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32480 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_32481 = cljs.core.PersistentHashMap.fromArrays(inst_32479,inst_32480);
var inst_32482 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32481);
var inst_32483 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_32484__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(inst_32483);
var state_32846__$1 = (function (){var statearr_33012 = state_32846;
(statearr_33012[(42)] = inst_32482);

(statearr_33012[(39)] = inst_32484__$1);

return statearr_33012;
})();
if(cljs.core.truth_(inst_32484__$1)){
var statearr_33013_33262 = state_32846__$1;
(statearr_33013_33262[(1)] = (6));

} else {
var statearr_33014_33263 = state_32846__$1;
(statearr_33014_33263[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (66))){
var inst_32654 = (state_32846[(7)]);
var inst_32663 = (state_32846[(43)]);
var inst_32663__$1 = cljs.core.first(inst_32654);
var state_32846__$1 = (function (){var statearr_33015 = state_32846;
(statearr_33015[(43)] = inst_32663__$1);

return statearr_33015;
})();
if(cljs.core.truth_(inst_32663__$1)){
var statearr_33016_33264 = state_32846__$1;
(statearr_33016_33264[(1)] = (68));

} else {
var statearr_33017_33265 = state_32846__$1;
(statearr_33017_33265[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (23))){
var inst_32486 = (state_32846[(36)]);
var inst_32517 = bb_web_ds_tools.runtime.webr.init_obj(inst_32486);
var inst_32518 = cljs.core.async.interop.p__GT_c(inst_32517);
var state_32846__$1 = state_32846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32846__$1,(26),inst_32518);
} else {
if((state_val_32848 === (47))){
var inst_32626 = (state_32846[(2)]);
var inst_32631 = cljs.core.seq(inst_32626);
var inst_32633 = inst_32631;
var inst_32634 = null;
var inst_32635 = (0);
var inst_32636 = (0);
var state_32846__$1 = (function (){var statearr_33018 = state_32846;
(statearr_33018[(8)] = inst_32633);

(statearr_33018[(9)] = inst_32634);

(statearr_33018[(10)] = inst_32635);

(statearr_33018[(11)] = inst_32636);

return statearr_33018;
})();
var statearr_33019_33268 = state_32846__$1;
(statearr_33019_33268[(2)] = null);

(statearr_33019_33268[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (35))){
var inst_32541 = (state_32846[(35)]);
var _ = (function (){var statearr_33020 = state_32846;
(statearr_33020[(4)] = cljs.core.rest((state_32846[(4)])));

return statearr_33020;
})();
var inst_32543 = (state_32846[(2)]);
var inst_32544 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_32541);
var ___$1 = (function (){var temp__5825__auto__ = (state_32846[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23240__auto__ = temp__5825__auto__;
throw e__23240__auto__;
} else {
return null;
}
})();
var state_32846__$1 = (function (){var statearr_33021 = state_32846;
(statearr_33021[(44)] = inst_32544);

return statearr_33021;
})();
var statearr_33022_33269 = state_32846__$1;
(statearr_33022_33269[(2)] = inst_32543);

(statearr_33022_33269[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (82))){
var inst_32794 = (state_32846[(19)]);
var inst_32798 = cljs.core.async.interop.p__GT_c(inst_32794);
var state_32846__$1 = state_32846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32846__$1,(85),inst_32798);
} else {
if((state_val_32848 === (76))){
var inst_32739 = (state_32846[(14)]);
var inst_32741 = cljs.core.chunked_seq_QMARK_(inst_32739);
var state_32846__$1 = state_32846;
if(inst_32741){
var statearr_33023_33270 = state_32846__$1;
(statearr_33023_33270[(1)] = (79));

} else {
var statearr_33024_33271 = state_32846__$1;
(statearr_33024_33271[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (19))){
var inst_32506 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
if(cljs.core.truth_(inst_32506)){
var statearr_33025_33272 = state_32846__$1;
(statearr_33025_33272[(1)] = (20));

} else {
var statearr_33026_33273 = state_32846__$1;
(statearr_33026_33273[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (57))){
var inst_32633 = (state_32846[(8)]);
var inst_32654 = (state_32846[(7)]);
var inst_32654__$1 = cljs.core.seq(inst_32633);
var state_32846__$1 = (function (){var statearr_33027 = state_32846;
(statearr_33027[(7)] = inst_32654__$1);

return statearr_33027;
})();
if(inst_32654__$1){
var statearr_33028_33274 = state_32846__$1;
(statearr_33028_33274[(1)] = (62));

} else {
var statearr_33029_33275 = state_32846__$1;
(statearr_33029_33275[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (68))){
var inst_32663 = (state_32846[(43)]);
var inst_32665 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32663);
var state_32846__$1 = state_32846;
var statearr_33030_33276 = state_32846__$1;
(statearr_33030_33276[(2)] = inst_32665);

(statearr_33030_33276[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (11))){
var inst_32487 = (state_32846[(2)]);
var inst_32488 = (function(){throw inst_32487})();
var state_32846__$1 = state_32846;
var statearr_33032_33277 = state_32846__$1;
(statearr_33032_33277[(2)] = inst_32488);

(statearr_33032_33277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (9))){
var inst_32486 = (state_32846[(36)]);
var _ = (function (){var statearr_33033 = state_32846;
(statearr_33033[(4)] = cljs.core.cons((12),(state_32846[(4)])));

return statearr_33033;
})();
var inst_32494 = (inst_32486 instanceof Promise);
var state_32846__$1 = state_32846;
if(cljs.core.truth_(inst_32494)){
var statearr_33034_33278 = state_32846__$1;
(statearr_33034_33278[(1)] = (13));

} else {
var statearr_33035_33279 = state_32846__$1;
(statearr_33035_33279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (5))){
var _ = (function (){var statearr_33036 = state_32846;
(statearr_33036[(4)] = cljs.core.rest((state_32846[(4)])));

return statearr_33036;
})();
var state_32846__$1 = state_32846;
var ex33031 = (state_32846__$1[(2)]);
var statearr_33037_33280 = state_32846__$1;
(statearr_33037_33280[(5)] = ex33031);


var statearr_33038_33281 = state_32846__$1;
(statearr_33038_33281[(1)] = (4));

(statearr_33038_33281[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (83))){
var inst_32794 = (state_32846[(19)]);
var state_32846__$1 = state_32846;
var statearr_33039_33282 = state_32846__$1;
(statearr_33039_33282[(2)] = inst_32794);

(statearr_33039_33282[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (14))){
var inst_32486 = (state_32846[(36)]);
var inst_32513 = inst_32486.init;
var inst_32514 = (inst_32513 == null);
var inst_32515 = cljs.core.not(inst_32514);
var state_32846__$1 = state_32846;
if(inst_32515){
var statearr_33040_33283 = state_32846__$1;
(statearr_33040_33283[(1)] = (23));

} else {
var statearr_33041_33284 = state_32846__$1;
(statearr_33041_33284[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (45))){
var inst_32588 = (state_32846[(38)]);
var inst_32598 = cljs.core.seq(inst_32588);
var inst_32600 = cljs.core.first(inst_32598);
var inst_32601 = cljs.core.next(inst_32598);
var inst_32602 = cljs.core.PersistentVector.EMPTY;
var inst_32604 = inst_32588;
var inst_32605 = inst_32602;
var state_32846__$1 = (function (){var statearr_33042 = state_32846;
(statearr_33042[(45)] = inst_32600);

(statearr_33042[(46)] = inst_32601);

(statearr_33042[(30)] = inst_32604);

(statearr_33042[(32)] = inst_32605);

return statearr_33042;
})();
var statearr_33043_33285 = state_32846__$1;
(statearr_33043_33285[(2)] = null);

(statearr_33043_33285[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (53))){
var inst_32620 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_33044_33286 = state_32846__$1;
(statearr_33044_33286[(2)] = inst_32620);

(statearr_33044_33286[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (78))){
var inst_32789 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_33045_33287 = state_32846__$1;
(statearr_33045_33287[(2)] = inst_32789);

(statearr_33045_33287[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (26))){
var inst_32520 = (state_32846[(21)]);
var inst_32521 = (state_32846[(40)]);
var inst_32520__$1 = (state_32846[(2)]);
var inst_32521__$1 = (inst_32520__$1 instanceof cljs.core.ExceptionInfo);
var state_32846__$1 = (function (){var statearr_33046 = state_32846;
(statearr_33046[(21)] = inst_32520__$1);

(statearr_33046[(40)] = inst_32521__$1);

return statearr_33046;
})();
if(cljs.core.truth_(inst_32521__$1)){
var statearr_33047_33288 = state_32846__$1;
(statearr_33047_33288[(1)] = (27));

} else {
var statearr_33048_33289 = state_32846__$1;
(statearr_33048_33289[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (16))){
var inst_32498 = (state_32846[(17)]);
var inst_32499 = (state_32846[(47)]);
var inst_32498__$1 = (state_32846[(2)]);
var inst_32499__$1 = (inst_32498__$1 instanceof cljs.core.ExceptionInfo);
var state_32846__$1 = (function (){var statearr_33049 = state_32846;
(statearr_33049[(17)] = inst_32498__$1);

(statearr_33049[(47)] = inst_32499__$1);

return statearr_33049;
})();
if(cljs.core.truth_(inst_32499__$1)){
var statearr_33050_33290 = state_32846__$1;
(statearr_33050_33290[(1)] = (17));

} else {
var statearr_33051_33291 = state_32846__$1;
(statearr_33051_33291[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (81))){
var inst_32786 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_33052_33292 = state_32846__$1;
(statearr_33052_33292[(2)] = inst_32786);

(statearr_33052_33292[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (79))){
var inst_32739 = (state_32846[(14)]);
var inst_32743 = cljs.core.chunk_first(inst_32739);
var inst_32744 = cljs.core.chunk_rest(inst_32739);
var inst_32745 = cljs.core.count(inst_32743);
var inst_32688 = inst_32744;
var inst_32689 = inst_32743;
var inst_32690 = inst_32745;
var inst_32691 = (0);
var state_32846__$1 = (function (){var statearr_33053 = state_32846;
(statearr_33053[(13)] = inst_32688);

(statearr_33053[(24)] = inst_32689);

(statearr_33053[(25)] = inst_32690);

(statearr_33053[(26)] = inst_32691);

return statearr_33053;
})();
var statearr_33054_33293 = state_32846__$1;
(statearr_33054_33293[(2)] = null);

(statearr_33054_33293[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (38))){
var inst_32569 = (state_32846[(28)]);
var inst_32570 = (state_32846[(34)]);
var inst_32569__$1 = (state_32846[(2)]);
var inst_32570__$1 = (inst_32569__$1 instanceof cljs.core.ExceptionInfo);
var state_32846__$1 = (function (){var statearr_33055 = state_32846;
(statearr_33055[(28)] = inst_32569__$1);

(statearr_33055[(34)] = inst_32570__$1);

return statearr_33055;
})();
if(cljs.core.truth_(inst_32570__$1)){
var statearr_33056_33294 = state_32846__$1;
(statearr_33056_33294[(1)] = (39));

} else {
var statearr_33057_33295 = state_32846__$1;
(statearr_33057_33295[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (87))){
var inst_32801 = (state_32846[(27)]);
var state_32846__$1 = state_32846;
var statearr_33061_33297 = state_32846__$1;
(statearr_33061_33297[(2)] = inst_32801);

(statearr_33061_33297[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (30))){
var inst_32520 = (state_32846[(21)]);
var inst_32530 = (function(){throw inst_32520})();
var state_32846__$1 = state_32846;
var statearr_33062_33298 = state_32846__$1;
(statearr_33062_33298[(2)] = inst_32530);

(statearr_33062_33298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (73))){
var inst_32689 = (state_32846[(24)]);
var inst_32691 = (state_32846[(26)]);
var inst_32688 = (state_32846[(13)]);
var inst_32690 = (state_32846[(25)]);
var inst_32697 = cljs.core._nth(inst_32689,inst_32691);
var inst_32698 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_32697);
var inst_32699 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32700 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_32701 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32703 = [(720),(800)];
var inst_32704 = cljs.core.PersistentHashMap.fromArrays(inst_32701,inst_32703);
var inst_32705 = [inst_32704];
var inst_32706 = cljs.core.PersistentHashMap.fromArrays(inst_32700,inst_32705);
var inst_32707 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32708 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_32709 = bb_web_ds_tools.runtime.webr.get_width(inst_32697);
var inst_32710 = (inst_32709 * 0.72);
var inst_32711 = (inst_32710 | (0));
var inst_32716 = bb_web_ds_tools.runtime.webr.get_height(inst_32697);
var inst_32717 = (inst_32716 * 0.72);
var inst_32718 = (inst_32717 | (0));
var inst_32720 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_32722 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32698),")"].join('');
var inst_32723 = [inst_32722,"cover"];
var inst_32724 = cljs.core.PersistentHashMap.fromArrays(inst_32720,inst_32723);
var inst_32725 = [inst_32711,inst_32718,inst_32724];
var inst_32726 = cljs.core.PersistentHashMap.fromArrays(inst_32708,inst_32725);
var inst_32727 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_32726];
var inst_32728 = (new cljs.core.PersistentVector(null,2,(5),inst_32707,inst_32727,null));
var inst_32729 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_32706,inst_32728];
var inst_32730 = (new cljs.core.PersistentVector(null,3,(5),inst_32699,inst_32729,null));
var inst_32731 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32732 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_32730,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_32733 = (new cljs.core.PersistentVector(null,3,(5),inst_32731,inst_32732,null));
var inst_32734 = re_frame.core.dispatch(inst_32733);
var inst_32735 = (inst_32691 + (1));
var tmp33058 = inst_32688;
var tmp33059 = inst_32689;
var tmp33060 = inst_32690;
var inst_32688__$1 = tmp33058;
var inst_32689__$1 = tmp33059;
var inst_32690__$1 = tmp33060;
var inst_32691__$1 = inst_32735;
var state_32846__$1 = (function (){var statearr_33063 = state_32846;
(statearr_33063[(48)] = inst_32734);

(statearr_33063[(13)] = inst_32688__$1);

(statearr_33063[(24)] = inst_32689__$1);

(statearr_33063[(25)] = inst_32690__$1);

(statearr_33063[(26)] = inst_32691__$1);

return statearr_33063;
})();
var statearr_33064_33303 = state_32846__$1;
(statearr_33064_33303[(2)] = null);

(statearr_33064_33303[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (10))){
var inst_32541 = (state_32846[(2)]);
var state_32846__$1 = (function (){var statearr_33065 = state_32846;
(statearr_33065[(35)] = inst_32541);

return statearr_33065;
})();
var statearr_33066_33304 = state_32846__$1;
(statearr_33066_33304[(2)] = null);

(statearr_33066_33304[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (18))){
var inst_32499 = (state_32846[(47)]);
var state_32846__$1 = state_32846;
var statearr_33067_33305 = state_32846__$1;
(statearr_33067_33305[(2)] = inst_32499);

(statearr_33067_33305[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (52))){
var inst_32615 = (state_32846[(33)]);
var state_32846__$1 = state_32846;
var statearr_33068_33306 = state_32846__$1;
(statearr_33068_33306[(2)] = inst_32615);

(statearr_33068_33306[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (67))){
var inst_32673 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_33069_33307 = state_32846__$1;
(statearr_33069_33307[(2)] = inst_32673);

(statearr_33069_33307[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (71))){
var inst_32691 = (state_32846[(26)]);
var inst_32690 = (state_32846[(25)]);
var inst_32694 = (inst_32691 < inst_32690);
var inst_32695 = inst_32694;
var state_32846__$1 = state_32846;
if(cljs.core.truth_(inst_32695)){
var statearr_33070_33308 = state_32846__$1;
(statearr_33070_33308[(1)] = (73));

} else {
var statearr_33071_33309 = state_32846__$1;
(statearr_33071_33309[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (42))){
var inst_32569 = (state_32846[(28)]);
var inst_32579 = (function(){throw inst_32569})();
var state_32846__$1 = state_32846;
var statearr_33073_33310 = state_32846__$1;
(statearr_33073_33310[(2)] = inst_32579);

(statearr_33073_33310[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (80))){
var inst_32739 = (state_32846[(14)]);
var inst_32748 = cljs.core.first(inst_32739);
var inst_32749 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_32748);
var inst_32750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32751 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_32752 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32753 = [(720),(800)];
var inst_32754 = cljs.core.PersistentHashMap.fromArrays(inst_32752,inst_32753);
var inst_32755 = [inst_32754];
var inst_32756 = cljs.core.PersistentHashMap.fromArrays(inst_32751,inst_32755);
var inst_32757 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32761 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_32762 = bb_web_ds_tools.runtime.webr.get_width(inst_32748);
var inst_32763 = (inst_32762 * 0.72);
var inst_32764 = (inst_32763 | (0));
var inst_32765 = bb_web_ds_tools.runtime.webr.get_height(inst_32748);
var inst_32766 = (inst_32765 * 0.72);
var inst_32767 = (inst_32766 | (0));
var inst_32768 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_32769 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32749),")"].join('');
var inst_32770 = [inst_32769,"cover"];
var inst_32771 = cljs.core.PersistentHashMap.fromArrays(inst_32768,inst_32770);
var inst_32772 = [inst_32764,inst_32767,inst_32771];
var inst_32773 = cljs.core.PersistentHashMap.fromArrays(inst_32761,inst_32772);
var inst_32774 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_32773];
var inst_32775 = (new cljs.core.PersistentVector(null,2,(5),inst_32757,inst_32774,null));
var inst_32776 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_32756,inst_32775];
var inst_32777 = (new cljs.core.PersistentVector(null,3,(5),inst_32750,inst_32776,null));
var inst_32778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32779 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_32777,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_32780 = (new cljs.core.PersistentVector(null,3,(5),inst_32778,inst_32779,null));
var inst_32781 = re_frame.core.dispatch(inst_32780);
var inst_32783 = cljs.core.next(inst_32739);
var inst_32688 = inst_32783;
var inst_32689 = null;
var inst_32690 = (0);
var inst_32691 = (0);
var state_32846__$1 = (function (){var statearr_33074 = state_32846;
(statearr_33074[(49)] = inst_32781);

(statearr_33074[(13)] = inst_32688);

(statearr_33074[(24)] = inst_32689);

(statearr_33074[(25)] = inst_32690);

(statearr_33074[(26)] = inst_32691);

return statearr_33074;
})();
var statearr_33075_33312 = state_32846__$1;
(statearr_33075_33312[(2)] = null);

(statearr_33075_33312[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (37))){
var _ = (function (){var statearr_33076 = state_32846;
(statearr_33076[(4)] = cljs.core.rest((state_32846[(4)])));

return statearr_33076;
})();
var state_32846__$1 = state_32846;
var ex33072 = (state_32846__$1[(2)]);
var statearr_33077_33313 = state_32846__$1;
(statearr_33077_33313[(5)] = ex33072);


var statearr_33078_33314 = state_32846__$1;
(statearr_33078_33314[(1)] = (36));

(statearr_33078_33314[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (63))){
var state_32846__$1 = state_32846;
var statearr_33079_33315 = state_32846__$1;
(statearr_33079_33315[(2)] = null);

(statearr_33079_33315[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (94))){
var inst_32586 = (state_32846[(18)]);
var inst_32817 = (state_32846[(2)]);
var inst_32819 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32586);
var state_32846__$1 = (function (){var statearr_33080 = state_32846;
(statearr_33080[(50)] = inst_32817);

return statearr_33080;
})();
var statearr_33081_33316 = state_32846__$1;
(statearr_33081_33316[(2)] = inst_32819);

(statearr_33081_33316[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (8))){
var inst_32841 = (state_32846[(2)]);
var _ = (function (){var statearr_33082 = state_32846;
(statearr_33082[(4)] = cljs.core.rest((state_32846[(4)])));

return statearr_33082;
})();
var state_32846__$1 = state_32846;
var statearr_33083_33317 = state_32846__$1;
(statearr_33083_33317[(2)] = inst_32841);

(statearr_33083_33317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (49))){
var inst_32622 = (state_32846[(2)]);
var state_32846__$1 = state_32846;
var statearr_33084_33318 = state_32846__$1;
(statearr_33084_33318[(2)] = inst_32622);

(statearr_33084_33318[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32848 === (84))){
var inst_32816 = (state_32846[(2)]);
var state_32846__$1 = (function (){var statearr_33085 = state_32846;
(statearr_33085[(29)] = inst_32816);

return statearr_33085;
})();
var statearr_33086_33319 = state_32846__$1;
(statearr_33086_33319[(2)] = null);

(statearr_33086_33319[(1)] = (92));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto__ = null;
var bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto____0 = (function (){
var statearr_33087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33087[(0)] = bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto__);

(statearr_33087[(1)] = (1));

return statearr_33087;
});
var bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto____1 = (function (state_32846){
while(true){
var ret_value__24009__auto__ = (function (){try{while(true){
var result__24010__auto__ = switch__24007__auto__(state_32846);
if(cljs.core.keyword_identical_QMARK_(result__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24010__auto__;
}
break;
}
}catch (e33088){var ex__24011__auto__ = e33088;
var statearr_33089_33320 = state_32846;
(statearr_33089_33320[(2)] = ex__24011__auto__);


if(cljs.core.seq((state_32846[(4)]))){
var statearr_33090_33321 = state_32846;
(statearr_33090_33321[(1)] = cljs.core.first((state_32846[(4)])));

} else {
throw ex__24011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33322 = state_32846;
state_32846 = G__33322;
continue;
} else {
return ret_value__24009__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto__ = function(state_32846){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto____1.call(this,state_32846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto____0;
bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto____1;
return bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto__;
})()
})();
var state__24032__auto__ = (function (){var statearr_33091 = f__24031__auto__();
(statearr_33091[(6)] = c__24030__auto__);

return statearr_33091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24032__auto__);
}));

return c__24030__auto__;
} else {
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null));
}
});

//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
