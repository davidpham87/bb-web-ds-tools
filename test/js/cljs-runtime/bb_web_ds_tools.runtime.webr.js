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
var len__5749__auto___33095 = arguments.length;
var i__5750__auto___33096 = (0);
while(true){
if((i__5750__auto___33096 < len__5749__auto___33095)){
args__5755__auto__.push((arguments[i__5750__auto___33096]));

var G__33097 = (i__5750__auto___33096 + (1));
i__5750__auto___33096 = G__33097;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__32182,p__32183){
var map__32184 = p__32182;
var map__32184__$1 = cljs.core.__destructure_map(map__32184);
var value = map__32184__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32184__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__32185 = p__32183;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32185,(0),null);
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
var inst_32193 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32195__$1,inst_32193);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__24008__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__24008__auto____0 = (function (){
var statearr_32200 = [null,null,null,null,null,null,null];
(statearr_32200[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24008__auto__);

(statearr_32200[(1)] = (1));

return statearr_32200;
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
}catch (e32201){var ex__24011__auto__ = e32201;
var statearr_32202_33114 = state_32195;
(statearr_32202_33114[(2)] = ex__24011__auto__);


if(cljs.core.seq((state_32195[(4)]))){
var statearr_32203_33115 = state_32195;
(statearr_32203_33115[(1)] = cljs.core.first((state_32195[(4)])));

} else {
throw ex__24011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33118 = state_32195;
state_32195 = G__33118;
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
var state__24032__auto__ = (function (){var statearr_32204 = f__24031__auto__();
(statearr_32204[(6)] = c__24030__auto__);

return statearr_32204;
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
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq32180){
var G__32181 = cljs.core.first(seq32180);
var seq32180__$1 = cljs.core.next(seq32180);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32181,seq32180__$1);
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
var f__24031__auto__ = (function (){var switch__24007__auto__ = (function (state_32287){
var state_val_32288 = (state_32287[(1)]);
if((state_val_32288 === (7))){
var inst_32283 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
var statearr_32293_33125 = state_32287__$1;
(statearr_32293_33125[(2)] = inst_32283);

(statearr_32293_33125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (20))){
var inst_32263 = (state_32287[(7)]);
var inst_32267 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32263);
var state_32287__$1 = state_32287;
var statearr_32298_33126 = state_32287__$1;
(statearr_32298_33126[(2)] = inst_32267);

(statearr_32298_33126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (1))){
var inst_32213 = (state_32287[(8)]);
var inst_32213__$1 = msg.type;
var inst_32214 = msg.data;
var inst_32216 = ["stderr",null,"stdout",null];
var inst_32217 = (new cljs.core.PersistentArrayMap(null,2,inst_32216,null));
var inst_32218 = (new cljs.core.PersistentHashSet(null,inst_32217,null));
var inst_32219 = (inst_32218.cljs$core$IFn$_invoke$arity$1 ? inst_32218.cljs$core$IFn$_invoke$arity$1(inst_32213__$1) : inst_32218.call(null,inst_32213__$1));
var state_32287__$1 = (function (){var statearr_32299 = state_32287;
(statearr_32299[(8)] = inst_32213__$1);

(statearr_32299[(9)] = inst_32214);

return statearr_32299;
})();
if(cljs.core.truth_(inst_32219)){
var statearr_32300_33127 = state_32287__$1;
(statearr_32300_33127[(1)] = (2));

} else {
var statearr_32301_33128 = state_32287__$1;
(statearr_32301_33128[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (24))){
var inst_32281 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
var statearr_32303_33129 = state_32287__$1;
(statearr_32303_33129[(2)] = inst_32281);

(statearr_32303_33129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (4))){
var inst_32285 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32287__$1,inst_32285);
} else {
if((state_val_32288 === (15))){
var inst_32257 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
if(cljs.core.truth_(inst_32257)){
var statearr_32305_33130 = state_32287__$1;
(statearr_32305_33130[(1)] = (16));

} else {
var statearr_32310_33131 = state_32287__$1;
(statearr_32310_33131[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (21))){
var inst_32213 = (state_32287[(8)]);
var inst_32269 = (state_32287[(2)]);
var inst_32270 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32271 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32213);
var inst_32272 = [inst_32271,inst_32269];
var inst_32273 = cljs.core.PersistentHashMap.fromArrays(inst_32270,inst_32272);
var _ = (function (){var statearr_32311 = state_32287;
(statearr_32311[(4)] = cljs.core.rest((state_32287[(4)])));

return statearr_32311;
})();
var state_32287__$1 = state_32287;
var statearr_32312_33132 = state_32287__$1;
(statearr_32312_33132[(2)] = inst_32273);

(statearr_32312_33132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (13))){
var inst_32249 = (state_32287[(10)]);
var inst_32252 = cljs.core.ex_data(inst_32249);
var inst_32253 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32252);
var inst_32254 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32253,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32287__$1 = state_32287;
var statearr_32313_33133 = state_32287__$1;
(statearr_32313_33133[(2)] = inst_32254);

(statearr_32313_33133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (22))){
var state_32287__$1 = state_32287;
var statearr_32314_33134 = state_32287__$1;
(statearr_32314_33134[(2)] = null);

(statearr_32314_33134[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (6))){
var state_32287__$1 = state_32287;
var statearr_32315_33135 = state_32287__$1;
(statearr_32315_33135[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (17))){
var inst_32249 = (state_32287[(10)]);
var state_32287__$1 = state_32287;
var statearr_32319_33136 = state_32287__$1;
(statearr_32319_33136[(2)] = inst_32249);

(statearr_32319_33136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (3))){
var inst_32213 = (state_32287[(8)]);
var inst_32231 = ["message",null,"warning",null];
var inst_32232 = (new cljs.core.PersistentArrayMap(null,2,inst_32231,null));
var inst_32233 = (new cljs.core.PersistentHashSet(null,inst_32232,null));
var inst_32234 = (inst_32233.cljs$core$IFn$_invoke$arity$1 ? inst_32233.cljs$core$IFn$_invoke$arity$1(inst_32213) : inst_32233.call(null,inst_32213));
var state_32287__$1 = state_32287;
if(cljs.core.truth_(inst_32234)){
var statearr_32321_33137 = state_32287__$1;
(statearr_32321_33137[(1)] = (5));

} else {
var statearr_32322_33138 = state_32287__$1;
(statearr_32322_33138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (12))){
var inst_32249 = (state_32287[(10)]);
var inst_32250 = (state_32287[(11)]);
var inst_32249__$1 = (state_32287[(2)]);
var inst_32250__$1 = (inst_32249__$1 instanceof cljs.core.ExceptionInfo);
var state_32287__$1 = (function (){var statearr_32324 = state_32287;
(statearr_32324[(10)] = inst_32249__$1);

(statearr_32324[(11)] = inst_32250__$1);

return statearr_32324;
})();
if(cljs.core.truth_(inst_32250__$1)){
var statearr_32325_33139 = state_32287__$1;
(statearr_32325_33139[(1)] = (13));

} else {
var statearr_32326_33140 = state_32287__$1;
(statearr_32326_33140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (2))){
var inst_32213 = (state_32287[(8)]);
var inst_32214 = (state_32287[(9)]);
var inst_32222 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32223 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32213);
var inst_32224 = [inst_32223,inst_32214];
var inst_32225 = cljs.core.PersistentHashMap.fromArrays(inst_32222,inst_32224);
var state_32287__$1 = state_32287;
var statearr_32327_33141 = state_32287__$1;
(statearr_32327_33141[(2)] = inst_32225);

(statearr_32327_33141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (23))){
var state_32287__$1 = state_32287;
var statearr_32329_33142 = state_32287__$1;
(statearr_32329_33142[(2)] = null);

(statearr_32329_33142[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (19))){
var inst_32264 = (state_32287[(12)]);
var state_32287__$1 = state_32287;
var statearr_32330_33143 = state_32287__$1;
(statearr_32330_33143[(2)] = inst_32264);

(statearr_32330_33143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (11))){
var _ = (function (){var statearr_32334 = state_32287;
(statearr_32334[(4)] = cljs.core.rest((state_32287[(4)])));

return statearr_32334;
})();
var state_32287__$1 = state_32287;
var ex32328 = (state_32287__$1[(2)]);
var statearr_32335_33144 = state_32287__$1;
(statearr_32335_33144[(5)] = ex32328);


var statearr_32336_33145 = state_32287__$1;
(statearr_32336_33145[(1)] = (10));

(statearr_32336_33145[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (9))){
var inst_32276 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
var statearr_32337_33146 = state_32287__$1;
(statearr_32337_33146[(2)] = inst_32276);

(statearr_32337_33146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (5))){
var state_32287__$1 = state_32287;
var statearr_32338_33147 = state_32287__$1;
(statearr_32338_33147[(2)] = null);

(statearr_32338_33147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (14))){
var inst_32250 = (state_32287[(11)]);
var state_32287__$1 = state_32287;
var statearr_32339_33148 = state_32287__$1;
(statearr_32339_33148[(2)] = inst_32250);

(statearr_32339_33148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (16))){
var inst_32249 = (state_32287[(10)]);
var inst_32259 = (function(){throw inst_32249})();
var state_32287__$1 = state_32287;
var statearr_32340_33149 = state_32287__$1;
(statearr_32340_33149[(2)] = inst_32259);

(statearr_32340_33149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (10))){
var inst_32213 = (state_32287[(8)]);
var inst_32236 = (state_32287[(2)]);
var inst_32237 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32238 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32213);
var inst_32239 = [inst_32238,"Error decoding message"];
var inst_32240 = cljs.core.PersistentHashMap.fromArrays(inst_32237,inst_32239);
var state_32287__$1 = (function (){var statearr_32341 = state_32287;
(statearr_32341[(13)] = inst_32236);

return statearr_32341;
})();
var statearr_32342_33150 = state_32287__$1;
(statearr_32342_33150[(2)] = inst_32240);

(statearr_32342_33150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (18))){
var inst_32263 = (state_32287[(7)]);
var inst_32264 = (state_32287[(12)]);
var inst_32262 = (state_32287[(2)]);
var inst_32263__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_32262,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_32264__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_32263__$1);
var state_32287__$1 = (function (){var statearr_32343 = state_32287;
(statearr_32343[(7)] = inst_32263__$1);

(statearr_32343[(12)] = inst_32264__$1);

return statearr_32343;
})();
if(cljs.core.truth_(inst_32264__$1)){
var statearr_32344_33151 = state_32287__$1;
(statearr_32344_33151[(1)] = (19));

} else {
var statearr_32345_33152 = state_32287__$1;
(statearr_32345_33152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (8))){
var inst_32214 = (state_32287[(9)]);
var _ = (function (){var statearr_32346 = state_32287;
(statearr_32346[(4)] = cljs.core.cons((11),(state_32287[(4)])));

return statearr_32346;
})();
var inst_32246 = bb_web_ds_tools.runtime.webr.to_js(inst_32214);
var inst_32247 = cljs.core.async.interop.p__GT_c(inst_32246);
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32287__$1,(12),inst_32247);
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
var statearr_32347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32347[(0)] = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto__);

(statearr_32347[(1)] = (1));

return statearr_32347;
});
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto____1 = (function (state_32287){
while(true){
var ret_value__24009__auto__ = (function (){try{while(true){
var result__24010__auto__ = switch__24007__auto__(state_32287);
if(cljs.core.keyword_identical_QMARK_(result__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24010__auto__;
}
break;
}
}catch (e32348){var ex__24011__auto__ = e32348;
var statearr_32349_33153 = state_32287;
(statearr_32349_33153[(2)] = ex__24011__auto__);


if(cljs.core.seq((state_32287[(4)]))){
var statearr_32350_33154 = state_32287;
(statearr_32350_33154[(1)] = cljs.core.first((state_32287[(4)])));

} else {
throw ex__24011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33155 = state_32287;
state_32287 = G__33155;
continue;
} else {
return ret_value__24009__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto__ = function(state_32287){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto____1.call(this,state_32287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto____0;
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto____1;
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24008__auto__;
})()
})();
var state__24032__auto__ = (function (){var statearr_32355 = f__24031__auto__();
(statearr_32355[(6)] = c__24030__auto__);

return statearr_32355;
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
var f__24031__auto__ = (function (){var switch__24007__auto__ = (function (state_32405){
var state_val_32406 = (state_32405[(1)]);
if((state_val_32406 === (7))){
var inst_32401 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
var statearr_32407_33156 = state_32405__$1;
(statearr_32407_33156[(2)] = inst_32401);

(statearr_32407_33156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (1))){
var inst_32356 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_32405__$1 = state_32405;
if(cljs.core.truth_(inst_32356)){
var statearr_32408_33157 = state_32405__$1;
(statearr_32408_33157[(1)] = (2));

} else {
var statearr_32409_33158 = state_32405__$1;
(statearr_32409_33158[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (4))){
var inst_32403 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32405__$1,inst_32403);
} else {
if((state_val_32406 === (15))){
var inst_32388 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
if(cljs.core.truth_(inst_32388)){
var statearr_32410_33159 = state_32405__$1;
(statearr_32410_33159[(1)] = (16));

} else {
var statearr_32411_33160 = state_32405__$1;
(statearr_32411_33160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (13))){
var inst_32380 = (state_32405[(7)]);
var inst_32383 = cljs.core.ex_data(inst_32380);
var inst_32384 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32383);
var inst_32385 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32384,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32405__$1 = state_32405;
var statearr_32412_33161 = state_32405__$1;
(statearr_32412_33161[(2)] = inst_32385);

(statearr_32412_33161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (6))){
var inst_32399 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_32405__$1 = state_32405;
var statearr_32413_33162 = state_32405__$1;
(statearr_32413_33162[(2)] = inst_32399);

(statearr_32413_33162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (17))){
var inst_32380 = (state_32405[(7)]);
var state_32405__$1 = state_32405;
var statearr_32414_33163 = state_32405__$1;
(statearr_32414_33163[(2)] = inst_32380);

(statearr_32414_33163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (3))){
var inst_32360 = (typeof WebR !== 'undefined');
var state_32405__$1 = state_32405;
if(cljs.core.truth_(inst_32360)){
var statearr_32415_33164 = state_32405__$1;
(statearr_32415_33164[(1)] = (5));

} else {
var statearr_32416_33165 = state_32405__$1;
(statearr_32416_33165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (12))){
var inst_32380 = (state_32405[(7)]);
var inst_32381 = (state_32405[(8)]);
var inst_32380__$1 = (state_32405[(2)]);
var inst_32381__$1 = (inst_32380__$1 instanceof cljs.core.ExceptionInfo);
var state_32405__$1 = (function (){var statearr_32418 = state_32405;
(statearr_32418[(7)] = inst_32380__$1);

(statearr_32418[(8)] = inst_32381__$1);

return statearr_32418;
})();
if(cljs.core.truth_(inst_32381__$1)){
var statearr_32419_33166 = state_32405__$1;
(statearr_32419_33166[(1)] = (13));

} else {
var statearr_32420_33167 = state_32405__$1;
(statearr_32420_33167[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (2))){
var inst_32358 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_32405__$1 = state_32405;
var statearr_32421_33168 = state_32405__$1;
(statearr_32421_33168[(2)] = inst_32358);

(statearr_32421_33168[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (11))){
var _ = (function (){var statearr_32422 = state_32405;
(statearr_32422[(4)] = cljs.core.rest((state_32405[(4)])));

return statearr_32422;
})();
var state_32405__$1 = state_32405;
var ex32417 = (state_32405__$1[(2)]);
var statearr_32427_33169 = state_32405__$1;
(statearr_32427_33169[(5)] = ex32417);


var statearr_32428_33170 = state_32405__$1;
(statearr_32428_33170[(1)] = (10));

(statearr_32428_33170[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (9))){
var inst_32397 = (state_32405[(2)]);
var state_32405__$1 = state_32405;
var statearr_32429_33171 = state_32405__$1;
(statearr_32429_33171[(2)] = inst_32397);

(statearr_32429_33171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (5))){
var state_32405__$1 = state_32405;
var statearr_32430_33172 = state_32405__$1;
(statearr_32430_33172[(2)] = null);

(statearr_32430_33172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (14))){
var inst_32381 = (state_32405[(8)]);
var state_32405__$1 = state_32405;
var statearr_32431_33173 = state_32405__$1;
(statearr_32431_33173[(2)] = inst_32381);

(statearr_32431_33173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (16))){
var inst_32380 = (state_32405[(7)]);
var inst_32390 = (function(){throw inst_32380})();
var state_32405__$1 = state_32405;
var statearr_32432_33174 = state_32405__$1;
(statearr_32432_33174[(2)] = inst_32390);

(statearr_32432_33174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (10))){
var inst_32362 = (state_32405[(2)]);
var inst_32363 = console.error("WebR Init Error:",inst_32362);
var inst_32364 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32362)].join('');
var inst_32365 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_32364) : on_error.call(null,inst_32364));
var state_32405__$1 = (function (){var statearr_32433 = state_32405;
(statearr_32433[(9)] = inst_32363);

return statearr_32433;
})();
var statearr_32434_33175 = state_32405__$1;
(statearr_32434_33175[(2)] = inst_32365);

(statearr_32434_33175[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (18))){
var inst_32393 = (state_32405[(2)]);
var inst_32394 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_32435 = state_32405;
(statearr_32435[(4)] = cljs.core.rest((state_32405[(4)])));

return statearr_32435;
})();
var state_32405__$1 = (function (){var statearr_32436 = state_32405;
(statearr_32436[(10)] = inst_32393);

return statearr_32436;
})();
var statearr_32437_33180 = state_32405__$1;
(statearr_32437_33180[(2)] = inst_32394);

(statearr_32437_33180[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32406 === (8))){
var _ = (function (){var statearr_32438 = state_32405;
(statearr_32438[(4)] = cljs.core.cons((11),(state_32405[(4)])));

return statearr_32438;
})();
var inst_32371 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_32372 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_32373 = cljs.core.PersistentHashMap.fromArrays(inst_32371,inst_32372);
var inst_32374 = cljs.core.clj__GT_js(inst_32373);
var inst_32375 = (new WebR(inst_32374));
var inst_32376 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_32375);
var inst_32377 = bb_web_ds_tools.runtime.webr.init_obj(inst_32375);
var inst_32378 = cljs.core.async.interop.p__GT_c(inst_32377);
var state_32405__$1 = (function (){var statearr_32439 = state_32405;
(statearr_32439[(11)] = inst_32376);

return statearr_32439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32405__$1,(12),inst_32378);
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
var statearr_32440 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32440[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto__);

(statearr_32440[(1)] = (1));

return statearr_32440;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto____1 = (function (state_32405){
while(true){
var ret_value__24009__auto__ = (function (){try{while(true){
var result__24010__auto__ = switch__24007__auto__(state_32405);
if(cljs.core.keyword_identical_QMARK_(result__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24010__auto__;
}
break;
}
}catch (e32441){var ex__24011__auto__ = e32441;
var statearr_32442_33182 = state_32405;
(statearr_32442_33182[(2)] = ex__24011__auto__);


if(cljs.core.seq((state_32405[(4)]))){
var statearr_32443_33183 = state_32405;
(statearr_32443_33183[(1)] = cljs.core.first((state_32405[(4)])));

} else {
throw ex__24011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33184 = state_32405;
state_32405 = G__33184;
continue;
} else {
return ret_value__24009__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto__ = function(state_32405){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto____1.call(this,state_32405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24008__auto__;
})()
})();
var state__24032__auto__ = (function (){var statearr_32449 = f__24031__auto__();
(statearr_32449[(6)] = c__24030__auto__);

return statearr_32449;
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
var f__24031__auto__ = (function (){var switch__24007__auto__ = (function (state_32821){
var state_val_32822 = (state_32821[(1)]);
if((state_val_32822 === (65))){
var inst_32643 = (state_32821[(7)]);
var inst_32647 = cljs.core.chunk_first(inst_32643);
var inst_32648 = cljs.core.chunk_rest(inst_32643);
var inst_32649 = cljs.core.count(inst_32647);
var inst_32626 = inst_32648;
var inst_32627 = inst_32647;
var inst_32628 = inst_32649;
var inst_32629 = (0);
var state_32821__$1 = (function (){var statearr_32823 = state_32821;
(statearr_32823[(8)] = inst_32626);

(statearr_32823[(9)] = inst_32627);

(statearr_32823[(10)] = inst_32628);

(statearr_32823[(11)] = inst_32629);

return statearr_32823;
})();
var statearr_32824_33186 = state_32821__$1;
(statearr_32824_33186[(2)] = null);

(statearr_32824_33186[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (70))){
var inst_32643 = (state_32821[(7)]);
var inst_32657 = (state_32821[(2)]);
var inst_32658 = cljs.core.next(inst_32643);
var inst_32626 = inst_32658;
var inst_32627 = null;
var inst_32628 = (0);
var inst_32629 = (0);
var state_32821__$1 = (function (){var statearr_32825 = state_32821;
(statearr_32825[(12)] = inst_32657);

(statearr_32825[(8)] = inst_32626);

(statearr_32825[(9)] = inst_32627);

(statearr_32825[(10)] = inst_32628);

(statearr_32825[(11)] = inst_32629);

return statearr_32825;
})();
var statearr_32829_33187 = state_32821__$1;
(statearr_32829_33187[(2)] = null);

(statearr_32829_33187[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (62))){
var inst_32643 = (state_32821[(7)]);
var inst_32645 = cljs.core.chunked_seq_QMARK_(inst_32643);
var state_32821__$1 = state_32821;
if(inst_32645){
var statearr_32834_33188 = state_32821__$1;
(statearr_32834_33188[(1)] = (65));

} else {
var statearr_32835_33189 = state_32821__$1;
(statearr_32835_33189[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (74))){
var inst_32675 = (state_32821[(13)]);
var inst_32718 = (state_32821[(14)]);
var inst_32718__$1 = cljs.core.seq(inst_32675);
var state_32821__$1 = (function (){var statearr_32836 = state_32821;
(statearr_32836[(14)] = inst_32718__$1);

return statearr_32836;
})();
if(inst_32718__$1){
var statearr_32837_33190 = state_32821__$1;
(statearr_32837_33190[(1)] = (76));

} else {
var statearr_32838_33191 = state_32821__$1;
(statearr_32838_33191[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (7))){
var inst_32813 = (new Error("Shelter not found on WebR instance"));
var inst_32814 = (function(){throw inst_32813})();
var state_32821__$1 = state_32821;
var statearr_32839_33192 = state_32821__$1;
(statearr_32839_33192[(2)] = inst_32814);

(statearr_32839_33192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (59))){
var inst_32634 = (state_32821[(15)]);
var inst_32636 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32634);
var state_32821__$1 = state_32821;
var statearr_32844_33193 = state_32821__$1;
(statearr_32844_33193[(2)] = inst_32636);

(statearr_32844_33193[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (86))){
var inst_32777 = (state_32821[(16)]);
var inst_32780 = cljs.core.ex_data(inst_32777);
var inst_32781 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32780);
var inst_32782 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32781,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32821__$1 = state_32821;
var statearr_32846_33195 = state_32821__$1;
(statearr_32846_33195[(2)] = inst_32782);

(statearr_32846_33195[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (20))){
var inst_32483 = (state_32821[(17)]);
var inst_32493 = (function(){throw inst_32483})();
var state_32821__$1 = state_32821;
var statearr_32847_33196 = state_32821__$1;
(statearr_32847_33196[(2)] = inst_32493);

(statearr_32847_33196[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (72))){
var inst_32572 = (state_32821[(18)]);
var inst_32772 = (state_32821[(19)]);
var inst_32768 = (state_32821[(2)]);
var inst_32772__$1 = bb_web_ds_tools.runtime.webr.to_js(inst_32572);
var inst_32773 = (inst_32772__$1 instanceof Promise);
var state_32821__$1 = (function (){var statearr_32848 = state_32821;
(statearr_32848[(20)] = inst_32768);

(statearr_32848[(19)] = inst_32772__$1);

return statearr_32848;
})();
if(cljs.core.truth_(inst_32773)){
var statearr_32849_33197 = state_32821__$1;
(statearr_32849_33197[(1)] = (82));

} else {
var statearr_32850_33198 = state_32821__$1;
(statearr_32850_33198[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (58))){
var inst_32666 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32855_33199 = state_32821__$1;
(statearr_32855_33199[(2)] = inst_32666);

(statearr_32855_33199[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (60))){
var state_32821__$1 = state_32821;
var statearr_32857_33200 = state_32821__$1;
(statearr_32857_33200[(2)] = null);

(statearr_32857_33200[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (27))){
var inst_32505 = (state_32821[(21)]);
var inst_32508 = cljs.core.ex_data(inst_32505);
var inst_32509 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32508);
var inst_32510 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32509,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32821__$1 = state_32821;
var statearr_32858_33201 = state_32821__$1;
(statearr_32858_33201[(2)] = inst_32510);

(statearr_32858_33201[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (1))){
var state_32821__$1 = state_32821;
var statearr_32859_33202 = state_32821__$1;
(statearr_32859_33202[(2)] = null);

(statearr_32859_33202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (69))){
var state_32821__$1 = state_32821;
var statearr_32860_33203 = state_32821__$1;
(statearr_32860_33203[(2)] = null);

(statearr_32860_33203[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (24))){
var state_32821__$1 = state_32821;
var statearr_32865_33204 = state_32821__$1;
(statearr_32865_33204[(2)] = null);

(statearr_32865_33204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (55))){
var inst_32571 = (state_32821[(22)]);
var inst_32668 = (state_32821[(2)]);
var inst_32673 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_32571);
var inst_32674 = cljs.core.seq(inst_32673);
var inst_32675 = inst_32674;
var inst_32676 = null;
var inst_32677 = (0);
var inst_32678 = (0);
var state_32821__$1 = (function (){var statearr_32868 = state_32821;
(statearr_32868[(23)] = inst_32668);

(statearr_32868[(13)] = inst_32675);

(statearr_32868[(24)] = inst_32676);

(statearr_32868[(25)] = inst_32677);

(statearr_32868[(26)] = inst_32678);

return statearr_32868;
})();
var statearr_32869_33205 = state_32821__$1;
(statearr_32869_33205[(2)] = null);

(statearr_32869_33205[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (85))){
var inst_32777 = (state_32821[(16)]);
var inst_32778 = (state_32821[(27)]);
var inst_32777__$1 = (state_32821[(2)]);
var inst_32778__$1 = (inst_32777__$1 instanceof cljs.core.ExceptionInfo);
var state_32821__$1 = (function (){var statearr_32870 = state_32821;
(statearr_32870[(16)] = inst_32777__$1);

(statearr_32870[(27)] = inst_32778__$1);

return statearr_32870;
})();
if(cljs.core.truth_(inst_32778__$1)){
var statearr_32871_33206 = state_32821__$1;
(statearr_32871_33206[(1)] = (86));

} else {
var statearr_32872_33207 = state_32821__$1;
(statearr_32872_33207[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (39))){
var inst_32555 = (state_32821[(28)]);
var inst_32558 = cljs.core.ex_data(inst_32555);
var inst_32559 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32558);
var inst_32560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32559,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32821__$1 = state_32821;
var statearr_32873_33208 = state_32821__$1;
(statearr_32873_33208[(2)] = inst_32560);

(statearr_32873_33208[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (88))){
var inst_32785 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32785)){
var statearr_32874_33209 = state_32821__$1;
(statearr_32874_33209[(1)] = (89));

} else {
var statearr_32875_33210 = state_32821__$1;
(statearr_32875_33210[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (46))){
var inst_32618 = cljs.core.PersistentVector.EMPTY;
var state_32821__$1 = state_32821;
var statearr_32876_33211 = state_32821__$1;
(statearr_32876_33211[(2)] = inst_32618);

(statearr_32876_33211[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (4))){
var inst_32452 = (state_32821[(2)]);
var inst_32453 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32454 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32452);
var inst_32455 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32454];
var inst_32456 = cljs.core.PersistentHashMap.fromArrays(inst_32453,inst_32455);
var inst_32457 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32456);
var state_32821__$1 = state_32821;
var statearr_32878_33212 = state_32821__$1;
(statearr_32878_33212[(2)] = inst_32457);

(statearr_32878_33212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (77))){
var state_32821__$1 = state_32821;
var statearr_32880_33213 = state_32821__$1;
(statearr_32880_33213[(2)] = null);

(statearr_32880_33213[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (95))){
var _ = (function (){var statearr_32882 = state_32821;
(statearr_32882[(4)] = cljs.core.rest((state_32821[(4)])));

return statearr_32882;
})();
var state_32821__$1 = state_32821;
var ex32877 = (state_32821__$1[(2)]);
var statearr_32883_33214 = state_32821__$1;
(statearr_32883_33214[(5)] = ex32877);


if((ex32877 instanceof Error)){
var statearr_32884_33215 = state_32821__$1;
(statearr_32884_33215[(1)] = (94));

(statearr_32884_33215[(5)] = null);

} else {
throw ex32877;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (54))){
var inst_32629 = (state_32821[(11)]);
var inst_32628 = (state_32821[(10)]);
var inst_32631 = (inst_32629 < inst_32628);
var inst_32632 = inst_32631;
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32632)){
var statearr_32885_33216 = state_32821__$1;
(statearr_32885_33216[(1)] = (56));

} else {
var statearr_32886_33217 = state_32821__$1;
(statearr_32886_33217[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (92))){
var inst_32793 = (state_32821[(29)]);
var _ = (function (){var statearr_32896 = state_32821;
(statearr_32896[(4)] = cljs.core.cons((95),(state_32821[(4)])));

return statearr_32896;
})();
var inst_32801 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_32793,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_32897 = state_32821;
(statearr_32897[(4)] = cljs.core.rest((state_32821[(4)])));

return statearr_32897;
})();
var state_32821__$1 = state_32821;
var statearr_32898_33218 = state_32821__$1;
(statearr_32898_33218[(2)] = inst_32801);

(statearr_32898_33218[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (15))){
var inst_32523 = (state_32821[(2)]);
var _ = (function (){var statearr_32899 = state_32821;
(statearr_32899[(4)] = cljs.core.rest((state_32821[(4)])));

return statearr_32899;
})();
var state_32821__$1 = state_32821;
var statearr_32900_33219 = state_32821__$1;
(statearr_32900_33219[(2)] = inst_32523);

(statearr_32900_33219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (48))){
var inst_32598 = (state_32821[(30)]);
var inst_32604 = cljs.core.seq(inst_32598);
var inst_32605 = cljs.core.first(inst_32604);
var inst_32606 = cljs.core.next(inst_32604);
var state_32821__$1 = (function (){var statearr_32901 = state_32821;
(statearr_32901[(31)] = inst_32606);

return statearr_32901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32821__$1,(50),inst_32605);
} else {
if((state_val_32822 === (50))){
var inst_32599 = (state_32821[(32)]);
var inst_32606 = (state_32821[(31)]);
var inst_32608 = (state_32821[(2)]);
var inst_32609 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32599,inst_32608);
var state_32821__$1 = (function (){var statearr_32911 = state_32821;
(statearr_32911[(33)] = inst_32609);

return statearr_32911;
})();
if(cljs.core.truth_(inst_32606)){
var statearr_32912_33220 = state_32821__$1;
(statearr_32912_33220[(1)] = (51));

} else {
var statearr_32914_33221 = state_32821__$1;
(statearr_32914_33221[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (75))){
var inst_32766 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32915_33222 = state_32821__$1;
(statearr_32915_33222[(2)] = inst_32766);

(statearr_32915_33222[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (21))){
var inst_32483 = (state_32821[(17)]);
var state_32821__$1 = state_32821;
var statearr_32916_33223 = state_32821__$1;
(statearr_32916_33223[(2)] = inst_32483);

(statearr_32916_33223[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (31))){
var inst_32505 = (state_32821[(21)]);
var state_32821__$1 = state_32821;
var statearr_32920_33224 = state_32821__$1;
(statearr_32920_33224[(2)] = inst_32505);

(statearr_32920_33224[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (32))){
var inst_32518 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32921_33225 = state_32821__$1;
(statearr_32921_33225[(2)] = inst_32518);

(statearr_32921_33225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (40))){
var inst_32556 = (state_32821[(34)]);
var state_32821__$1 = state_32821;
var statearr_32923_33226 = state_32821__$1;
(statearr_32923_33226[(2)] = inst_32556);

(statearr_32923_33226[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (91))){
var inst_32790 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32924_33227 = state_32821__$1;
(statearr_32924_33227[(2)] = inst_32790);

(statearr_32924_33227[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (56))){
var inst_32627 = (state_32821[(9)]);
var inst_32629 = (state_32821[(11)]);
var inst_32634 = (state_32821[(15)]);
var inst_32634__$1 = cljs.core._nth(inst_32627,inst_32629);
var state_32821__$1 = (function (){var statearr_32925 = state_32821;
(statearr_32925[(15)] = inst_32634__$1);

return statearr_32925;
})();
if(cljs.core.truth_(inst_32634__$1)){
var statearr_32926_33228 = state_32821__$1;
(statearr_32926_33228[(1)] = (59));

} else {
var statearr_32927_33229 = state_32821__$1;
(statearr_32927_33229[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (33))){
var inst_32526 = (state_32821[(35)]);
var _ = (function (){var statearr_32928 = state_32821;
(statearr_32928[(4)] = cljs.core.cons((35),(state_32821[(4)])));

return statearr_32928;
})();
var ___$1 = (function (){var statearr_32930 = state_32821;
(statearr_32930[(4)] = cljs.core.cons((37),(state_32821[(4)])));

return statearr_32930;
})();
var inst_32548 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_32549 = [true];
var inst_32550 = cljs.core.PersistentHashMap.fromArrays(inst_32548,inst_32549);
var inst_32551 = cljs.core.clj__GT_js(inst_32550);
var inst_32552 = bb_web_ds_tools.runtime.webr.capture_r(inst_32526,code,inst_32551);
var inst_32553 = cljs.core.async.interop.p__GT_c(inst_32552);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32821__$1,(38),inst_32553);
} else {
if((state_val_32822 === (13))){
var inst_32471 = (state_32821[(36)]);
var inst_32481 = cljs.core.async.interop.p__GT_c(inst_32471);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32821__$1,(16),inst_32481);
} else {
if((state_val_32822 === (22))){
var inst_32496 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32931_33230 = state_32821__$1;
(statearr_32931_33230[(2)] = inst_32496);

(statearr_32931_33230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (90))){
var inst_32777 = (state_32821[(16)]);
var state_32821__$1 = state_32821;
var statearr_32933_33231 = state_32821__$1;
(statearr_32933_33231[(2)] = inst_32777);

(statearr_32933_33231[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (36))){
var inst_32532 = (state_32821[(2)]);
var inst_32533 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32534 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32532);
var inst_32535 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32534];
var inst_32536 = cljs.core.PersistentHashMap.fromArrays(inst_32533,inst_32535);
var inst_32537 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32536);
var state_32821__$1 = state_32821;
var statearr_32934_33232 = state_32821__$1;
(statearr_32934_33232[(2)] = inst_32537);

(statearr_32934_33232[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (41))){
var inst_32563 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32563)){
var statearr_32935_33234 = state_32821__$1;
(statearr_32935_33234[(1)] = (42));

} else {
var statearr_32936_33235 = state_32821__$1;
(statearr_32936_33235[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (89))){
var inst_32777 = (state_32821[(16)]);
var inst_32787 = (function(){throw inst_32777})();
var state_32821__$1 = state_32821;
var statearr_32940_33239 = state_32821__$1;
(statearr_32940_33239[(2)] = inst_32787);

(statearr_32940_33239[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (43))){
var inst_32555 = (state_32821[(28)]);
var state_32821__$1 = state_32821;
var statearr_32941_33240 = state_32821__$1;
(statearr_32941_33240[(2)] = inst_32555);

(statearr_32941_33240[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (61))){
var inst_32629 = (state_32821[(11)]);
var inst_32626 = (state_32821[(8)]);
var inst_32627 = (state_32821[(9)]);
var inst_32628 = (state_32821[(10)]);
var inst_32639 = (state_32821[(2)]);
var inst_32640 = (inst_32629 + (1));
var tmp32937 = inst_32627;
var tmp32938 = inst_32626;
var tmp32939 = inst_32628;
var inst_32626__$1 = tmp32938;
var inst_32627__$1 = tmp32937;
var inst_32628__$1 = tmp32939;
var inst_32629__$1 = inst_32640;
var state_32821__$1 = (function (){var statearr_32942 = state_32821;
(statearr_32942[(37)] = inst_32639);

(statearr_32942[(8)] = inst_32626__$1);

(statearr_32942[(9)] = inst_32627__$1);

(statearr_32942[(10)] = inst_32628__$1);

(statearr_32942[(11)] = inst_32629__$1);

return statearr_32942;
})();
var statearr_32943_33243 = state_32821__$1;
(statearr_32943_33243[(2)] = null);

(statearr_32943_33243[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (29))){
var inst_32513 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32513)){
var statearr_32944_33245 = state_32821__$1;
(statearr_32944_33245[(1)] = (30));

} else {
var statearr_32945_33246 = state_32821__$1;
(statearr_32945_33246[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (44))){
var inst_32574 = (state_32821[(38)]);
var inst_32568 = (state_32821[(2)]);
var inst_32569 = bb_web_ds_tools.runtime.webr.get_result_props(inst_32568);
var inst_32570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32569,(0),null);
var inst_32571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32569,(1),null);
var inst_32572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32569,(2),null);
var inst_32573 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_32570);
var inst_32574__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,inst_32573);
var inst_32575 = cljs.core.seq(inst_32574__$1);
var state_32821__$1 = (function (){var statearr_32946 = state_32821;
(statearr_32946[(22)] = inst_32571);

(statearr_32946[(18)] = inst_32572);

(statearr_32946[(38)] = inst_32574__$1);

return statearr_32946;
})();
if(inst_32575){
var statearr_32947_33247 = state_32821__$1;
(statearr_32947_33247[(1)] = (45));

} else {
var statearr_32948_33248 = state_32821__$1;
(statearr_32948_33248[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (93))){
var inst_32804 = (state_32821[(2)]);
var inst_32805 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_32806 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_32804];
var inst_32807 = cljs.core.PersistentHashMap.fromArrays(inst_32805,inst_32806);
var inst_32808 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32807);
var _ = (function (){var statearr_32949 = state_32821;
(statearr_32949[(4)] = cljs.core.rest((state_32821[(4)])));

return statearr_32949;
})();
var state_32821__$1 = state_32821;
var statearr_32950_33249 = state_32821__$1;
(statearr_32950_33249[(2)] = inst_32808);

(statearr_32950_33249[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (6))){
var inst_32469 = (state_32821[(39)]);
var inst_32471 = (new inst_32469());
var state_32821__$1 = (function (){var statearr_32951 = state_32821;
(statearr_32951[(36)] = inst_32471);

return statearr_32951;
})();
var statearr_32952_33250 = state_32821__$1;
(statearr_32952_33250[(2)] = null);

(statearr_32952_33250[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (28))){
var inst_32506 = (state_32821[(40)]);
var state_32821__$1 = state_32821;
var statearr_32953_33251 = state_32821__$1;
(statearr_32953_33251[(2)] = inst_32506);

(statearr_32953_33251[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (64))){
var inst_32664 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32954_33252 = state_32821__$1;
(statearr_32954_33252[(2)] = inst_32664);

(statearr_32954_33252[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (51))){
var inst_32606 = (state_32821[(31)]);
var inst_32609 = (state_32821[(33)]);
var inst_32598 = inst_32606;
var inst_32599 = inst_32609;
var state_32821__$1 = (function (){var statearr_32955 = state_32821;
(statearr_32955[(30)] = inst_32598);

(statearr_32955[(32)] = inst_32599);

return statearr_32955;
})();
var statearr_32956_33253 = state_32821__$1;
(statearr_32956_33253[(2)] = null);

(statearr_32956_33253[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (25))){
var inst_32471 = (state_32821[(36)]);
var inst_32521 = (state_32821[(2)]);
var state_32821__$1 = (function (){var statearr_32957 = state_32821;
(statearr_32957[(41)] = inst_32521);

return statearr_32957;
})();
var statearr_32958_33254 = state_32821__$1;
(statearr_32958_33254[(2)] = inst_32471);

(statearr_32958_33254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (34))){
var inst_32811 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32959_33255 = state_32821__$1;
(statearr_32959_33255[(2)] = inst_32811);

(statearr_32959_33255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (17))){
var inst_32483 = (state_32821[(17)]);
var inst_32486 = cljs.core.ex_data(inst_32483);
var inst_32487 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32486);
var inst_32488 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32487,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32821__$1 = state_32821;
var statearr_32961_33261 = state_32821__$1;
(statearr_32961_33261[(2)] = inst_32488);

(statearr_32961_33261[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (3))){
var inst_32819 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32821__$1,inst_32819);
} else {
if((state_val_32822 === (12))){
var _ = (function (){var statearr_32962 = state_32821;
(statearr_32962[(4)] = cljs.core.rest((state_32821[(4)])));

return statearr_32962;
})();
var state_32821__$1 = state_32821;
var ex32960 = (state_32821__$1[(2)]);
var statearr_32964_33262 = state_32821__$1;
(statearr_32964_33262[(5)] = ex32960);


var statearr_32965_33263 = state_32821__$1;
(statearr_32965_33263[(1)] = (11));

(statearr_32965_33263[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (2))){
var inst_32469 = (state_32821[(39)]);
var _ = (function (){var statearr_32966 = state_32821;
(statearr_32966[(4)] = cljs.core.cons((5),(state_32821[(4)])));

return statearr_32966;
})();
var inst_32464 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32465 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_32466 = cljs.core.PersistentHashMap.fromArrays(inst_32464,inst_32465);
var inst_32467 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32466);
var inst_32468 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_32469__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(inst_32468);
var state_32821__$1 = (function (){var statearr_32967 = state_32821;
(statearr_32967[(42)] = inst_32467);

(statearr_32967[(39)] = inst_32469__$1);

return statearr_32967;
})();
if(cljs.core.truth_(inst_32469__$1)){
var statearr_32968_33264 = state_32821__$1;
(statearr_32968_33264[(1)] = (6));

} else {
var statearr_32969_33265 = state_32821__$1;
(statearr_32969_33265[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (66))){
var inst_32643 = (state_32821[(7)]);
var inst_32652 = (state_32821[(43)]);
var inst_32652__$1 = cljs.core.first(inst_32643);
var state_32821__$1 = (function (){var statearr_32970 = state_32821;
(statearr_32970[(43)] = inst_32652__$1);

return statearr_32970;
})();
if(cljs.core.truth_(inst_32652__$1)){
var statearr_32971_33267 = state_32821__$1;
(statearr_32971_33267[(1)] = (68));

} else {
var statearr_32972_33268 = state_32821__$1;
(statearr_32972_33268[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (23))){
var inst_32471 = (state_32821[(36)]);
var inst_32502 = bb_web_ds_tools.runtime.webr.init_obj(inst_32471);
var inst_32503 = cljs.core.async.interop.p__GT_c(inst_32502);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32821__$1,(26),inst_32503);
} else {
if((state_val_32822 === (47))){
var inst_32620 = (state_32821[(2)]);
var inst_32625 = cljs.core.seq(inst_32620);
var inst_32626 = inst_32625;
var inst_32627 = null;
var inst_32628 = (0);
var inst_32629 = (0);
var state_32821__$1 = (function (){var statearr_32973 = state_32821;
(statearr_32973[(8)] = inst_32626);

(statearr_32973[(9)] = inst_32627);

(statearr_32973[(10)] = inst_32628);

(statearr_32973[(11)] = inst_32629);

return statearr_32973;
})();
var statearr_32974_33269 = state_32821__$1;
(statearr_32974_33269[(2)] = null);

(statearr_32974_33269[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (35))){
var inst_32526 = (state_32821[(35)]);
var _ = (function (){var statearr_32975 = state_32821;
(statearr_32975[(4)] = cljs.core.rest((state_32821[(4)])));

return statearr_32975;
})();
var inst_32528 = (state_32821[(2)]);
var inst_32529 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_32526);
var ___$1 = (function (){var temp__5825__auto__ = (state_32821[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23240__auto__ = temp__5825__auto__;
throw e__23240__auto__;
} else {
return null;
}
})();
var state_32821__$1 = (function (){var statearr_32976 = state_32821;
(statearr_32976[(44)] = inst_32529);

return statearr_32976;
})();
var statearr_32977_33274 = state_32821__$1;
(statearr_32977_33274[(2)] = inst_32528);

(statearr_32977_33274[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (82))){
var inst_32772 = (state_32821[(19)]);
var inst_32775 = cljs.core.async.interop.p__GT_c(inst_32772);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32821__$1,(85),inst_32775);
} else {
if((state_val_32822 === (76))){
var inst_32718 = (state_32821[(14)]);
var inst_32720 = cljs.core.chunked_seq_QMARK_(inst_32718);
var state_32821__$1 = state_32821;
if(inst_32720){
var statearr_32979_33275 = state_32821__$1;
(statearr_32979_33275[(1)] = (79));

} else {
var statearr_32980_33276 = state_32821__$1;
(statearr_32980_33276[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (19))){
var inst_32491 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32491)){
var statearr_32981_33277 = state_32821__$1;
(statearr_32981_33277[(1)] = (20));

} else {
var statearr_32982_33278 = state_32821__$1;
(statearr_32982_33278[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (57))){
var inst_32626 = (state_32821[(8)]);
var inst_32643 = (state_32821[(7)]);
var inst_32643__$1 = cljs.core.seq(inst_32626);
var state_32821__$1 = (function (){var statearr_32983 = state_32821;
(statearr_32983[(7)] = inst_32643__$1);

return statearr_32983;
})();
if(inst_32643__$1){
var statearr_32984_33279 = state_32821__$1;
(statearr_32984_33279[(1)] = (62));

} else {
var statearr_32985_33280 = state_32821__$1;
(statearr_32985_33280[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (68))){
var inst_32652 = (state_32821[(43)]);
var inst_32654 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32652);
var state_32821__$1 = state_32821;
var statearr_32986_33281 = state_32821__$1;
(statearr_32986_33281[(2)] = inst_32654);

(statearr_32986_33281[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (11))){
var inst_32472 = (state_32821[(2)]);
var inst_32473 = (function(){throw inst_32472})();
var state_32821__$1 = state_32821;
var statearr_32991_33282 = state_32821__$1;
(statearr_32991_33282[(2)] = inst_32473);

(statearr_32991_33282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (9))){
var inst_32471 = (state_32821[(36)]);
var _ = (function (){var statearr_32992 = state_32821;
(statearr_32992[(4)] = cljs.core.cons((12),(state_32821[(4)])));

return statearr_32992;
})();
var inst_32479 = (inst_32471 instanceof Promise);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32479)){
var statearr_32993_33283 = state_32821__$1;
(statearr_32993_33283[(1)] = (13));

} else {
var statearr_32994_33284 = state_32821__$1;
(statearr_32994_33284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (5))){
var _ = (function (){var statearr_32995 = state_32821;
(statearr_32995[(4)] = cljs.core.rest((state_32821[(4)])));

return statearr_32995;
})();
var state_32821__$1 = state_32821;
var ex32989 = (state_32821__$1[(2)]);
var statearr_32996_33285 = state_32821__$1;
(statearr_32996_33285[(5)] = ex32989);


var statearr_32997_33286 = state_32821__$1;
(statearr_32997_33286[(1)] = (4));

(statearr_32997_33286[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (83))){
var inst_32772 = (state_32821[(19)]);
var state_32821__$1 = state_32821;
var statearr_32998_33287 = state_32821__$1;
(statearr_32998_33287[(2)] = inst_32772);

(statearr_32998_33287[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (14))){
var inst_32471 = (state_32821[(36)]);
var inst_32498 = inst_32471.init;
var inst_32499 = (inst_32498 == null);
var inst_32500 = cljs.core.not(inst_32499);
var state_32821__$1 = state_32821;
if(inst_32500){
var statearr_33002_33288 = state_32821__$1;
(statearr_33002_33288[(1)] = (23));

} else {
var statearr_33003_33289 = state_32821__$1;
(statearr_33003_33289[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (45))){
var inst_32574 = (state_32821[(38)]);
var inst_32591 = cljs.core.seq(inst_32574);
var inst_32592 = cljs.core.first(inst_32591);
var inst_32593 = cljs.core.next(inst_32591);
var inst_32594 = cljs.core.PersistentVector.EMPTY;
var inst_32598 = inst_32574;
var inst_32599 = inst_32594;
var state_32821__$1 = (function (){var statearr_33004 = state_32821;
(statearr_33004[(45)] = inst_32592);

(statearr_33004[(46)] = inst_32593);

(statearr_33004[(30)] = inst_32598);

(statearr_33004[(32)] = inst_32599);

return statearr_33004;
})();
var statearr_33006_33290 = state_32821__$1;
(statearr_33006_33290[(2)] = null);

(statearr_33006_33290[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (53))){
var inst_32614 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_33007_33291 = state_32821__$1;
(statearr_33007_33291[(2)] = inst_32614);

(statearr_33007_33291[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (78))){
var inst_32764 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_33009_33292 = state_32821__$1;
(statearr_33009_33292[(2)] = inst_32764);

(statearr_33009_33292[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (26))){
var inst_32505 = (state_32821[(21)]);
var inst_32506 = (state_32821[(40)]);
var inst_32505__$1 = (state_32821[(2)]);
var inst_32506__$1 = (inst_32505__$1 instanceof cljs.core.ExceptionInfo);
var state_32821__$1 = (function (){var statearr_33015 = state_32821;
(statearr_33015[(21)] = inst_32505__$1);

(statearr_33015[(40)] = inst_32506__$1);

return statearr_33015;
})();
if(cljs.core.truth_(inst_32506__$1)){
var statearr_33016_33293 = state_32821__$1;
(statearr_33016_33293[(1)] = (27));

} else {
var statearr_33020_33294 = state_32821__$1;
(statearr_33020_33294[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (16))){
var inst_32483 = (state_32821[(17)]);
var inst_32484 = (state_32821[(47)]);
var inst_32483__$1 = (state_32821[(2)]);
var inst_32484__$1 = (inst_32483__$1 instanceof cljs.core.ExceptionInfo);
var state_32821__$1 = (function (){var statearr_33021 = state_32821;
(statearr_33021[(17)] = inst_32483__$1);

(statearr_33021[(47)] = inst_32484__$1);

return statearr_33021;
})();
if(cljs.core.truth_(inst_32484__$1)){
var statearr_33025_33295 = state_32821__$1;
(statearr_33025_33295[(1)] = (17));

} else {
var statearr_33026_33296 = state_32821__$1;
(statearr_33026_33296[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (81))){
var inst_32761 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_33027_33297 = state_32821__$1;
(statearr_33027_33297[(2)] = inst_32761);

(statearr_33027_33297[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (79))){
var inst_32718 = (state_32821[(14)]);
var inst_32722 = cljs.core.chunk_first(inst_32718);
var inst_32723 = cljs.core.chunk_rest(inst_32718);
var inst_32724 = cljs.core.count(inst_32722);
var inst_32675 = inst_32723;
var inst_32676 = inst_32722;
var inst_32677 = inst_32724;
var inst_32678 = (0);
var state_32821__$1 = (function (){var statearr_33028 = state_32821;
(statearr_33028[(13)] = inst_32675);

(statearr_33028[(24)] = inst_32676);

(statearr_33028[(25)] = inst_32677);

(statearr_33028[(26)] = inst_32678);

return statearr_33028;
})();
var statearr_33029_33299 = state_32821__$1;
(statearr_33029_33299[(2)] = null);

(statearr_33029_33299[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (38))){
var inst_32555 = (state_32821[(28)]);
var inst_32556 = (state_32821[(34)]);
var inst_32555__$1 = (state_32821[(2)]);
var inst_32556__$1 = (inst_32555__$1 instanceof cljs.core.ExceptionInfo);
var state_32821__$1 = (function (){var statearr_33031 = state_32821;
(statearr_33031[(28)] = inst_32555__$1);

(statearr_33031[(34)] = inst_32556__$1);

return statearr_33031;
})();
if(cljs.core.truth_(inst_32556__$1)){
var statearr_33032_33300 = state_32821__$1;
(statearr_33032_33300[(1)] = (39));

} else {
var statearr_33033_33301 = state_32821__$1;
(statearr_33033_33301[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (87))){
var inst_32778 = (state_32821[(27)]);
var state_32821__$1 = state_32821;
var statearr_33049_33302 = state_32821__$1;
(statearr_33049_33302[(2)] = inst_32778);

(statearr_33049_33302[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (30))){
var inst_32505 = (state_32821[(21)]);
var inst_32515 = (function(){throw inst_32505})();
var state_32821__$1 = state_32821;
var statearr_33053_33303 = state_32821__$1;
(statearr_33053_33303[(2)] = inst_32515);

(statearr_33053_33303[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (73))){
var inst_32676 = (state_32821[(24)]);
var inst_32678 = (state_32821[(26)]);
var inst_32675 = (state_32821[(13)]);
var inst_32677 = (state_32821[(25)]);
var inst_32683 = cljs.core._nth(inst_32676,inst_32678);
var inst_32684 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_32683);
var inst_32686 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32687 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_32688 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32689 = [(720),(800)];
var inst_32690 = cljs.core.PersistentHashMap.fromArrays(inst_32688,inst_32689);
var inst_32691 = [inst_32690];
var inst_32692 = cljs.core.PersistentHashMap.fromArrays(inst_32687,inst_32691);
var inst_32693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32694 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_32695 = bb_web_ds_tools.runtime.webr.get_width(inst_32683);
var inst_32696 = (inst_32695 * 0.72);
var inst_32697 = (inst_32696 | (0));
var inst_32698 = bb_web_ds_tools.runtime.webr.get_height(inst_32683);
var inst_32699 = (inst_32698 * 0.72);
var inst_32700 = (inst_32699 | (0));
var inst_32701 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_32702 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32684),")"].join('');
var inst_32703 = [inst_32702,"cover"];
var inst_32704 = cljs.core.PersistentHashMap.fromArrays(inst_32701,inst_32703);
var inst_32705 = [inst_32697,inst_32700,inst_32704];
var inst_32706 = cljs.core.PersistentHashMap.fromArrays(inst_32694,inst_32705);
var inst_32707 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_32706];
var inst_32708 = (new cljs.core.PersistentVector(null,2,(5),inst_32693,inst_32707,null));
var inst_32709 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_32692,inst_32708];
var inst_32710 = (new cljs.core.PersistentVector(null,3,(5),inst_32686,inst_32709,null));
var inst_32711 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32712 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_32710,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_32713 = (new cljs.core.PersistentVector(null,3,(5),inst_32711,inst_32712,null));
var inst_32714 = re_frame.core.dispatch(inst_32713);
var inst_32715 = (inst_32678 + (1));
var tmp33040 = inst_32675;
var tmp33041 = inst_32676;
var tmp33042 = inst_32677;
var inst_32675__$1 = tmp33040;
var inst_32676__$1 = tmp33041;
var inst_32677__$1 = tmp33042;
var inst_32678__$1 = inst_32715;
var state_32821__$1 = (function (){var statearr_33062 = state_32821;
(statearr_33062[(48)] = inst_32714);

(statearr_33062[(13)] = inst_32675__$1);

(statearr_33062[(24)] = inst_32676__$1);

(statearr_33062[(25)] = inst_32677__$1);

(statearr_33062[(26)] = inst_32678__$1);

return statearr_33062;
})();
var statearr_33063_33304 = state_32821__$1;
(statearr_33063_33304[(2)] = null);

(statearr_33063_33304[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (10))){
var inst_32526 = (state_32821[(2)]);
var state_32821__$1 = (function (){var statearr_33065 = state_32821;
(statearr_33065[(35)] = inst_32526);

return statearr_33065;
})();
var statearr_33066_33305 = state_32821__$1;
(statearr_33066_33305[(2)] = null);

(statearr_33066_33305[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (18))){
var inst_32484 = (state_32821[(47)]);
var state_32821__$1 = state_32821;
var statearr_33067_33306 = state_32821__$1;
(statearr_33067_33306[(2)] = inst_32484);

(statearr_33067_33306[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (52))){
var inst_32609 = (state_32821[(33)]);
var state_32821__$1 = state_32821;
var statearr_33068_33307 = state_32821__$1;
(statearr_33068_33307[(2)] = inst_32609);

(statearr_33068_33307[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (67))){
var inst_32661 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_33069_33308 = state_32821__$1;
(statearr_33069_33308[(2)] = inst_32661);

(statearr_33069_33308[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (71))){
var inst_32678 = (state_32821[(26)]);
var inst_32677 = (state_32821[(25)]);
var inst_32680 = (inst_32678 < inst_32677);
var inst_32681 = inst_32680;
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32681)){
var statearr_33070_33309 = state_32821__$1;
(statearr_33070_33309[(1)] = (73));

} else {
var statearr_33071_33310 = state_32821__$1;
(statearr_33071_33310[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (42))){
var inst_32555 = (state_32821[(28)]);
var inst_32565 = (function(){throw inst_32555})();
var state_32821__$1 = state_32821;
var statearr_33073_33311 = state_32821__$1;
(statearr_33073_33311[(2)] = inst_32565);

(statearr_33073_33311[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (80))){
var inst_32718 = (state_32821[(14)]);
var inst_32727 = cljs.core.first(inst_32718);
var inst_32728 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_32727);
var inst_32729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32730 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_32731 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32732 = [(720),(800)];
var inst_32733 = cljs.core.PersistentHashMap.fromArrays(inst_32731,inst_32732);
var inst_32734 = [inst_32733];
var inst_32735 = cljs.core.PersistentHashMap.fromArrays(inst_32730,inst_32734);
var inst_32736 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32737 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_32738 = bb_web_ds_tools.runtime.webr.get_width(inst_32727);
var inst_32739 = (inst_32738 * 0.72);
var inst_32740 = (inst_32739 | (0));
var inst_32741 = bb_web_ds_tools.runtime.webr.get_height(inst_32727);
var inst_32742 = (inst_32741 * 0.72);
var inst_32743 = (inst_32742 | (0));
var inst_32744 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_32745 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32728),")"].join('');
var inst_32746 = [inst_32745,"cover"];
var inst_32747 = cljs.core.PersistentHashMap.fromArrays(inst_32744,inst_32746);
var inst_32748 = [inst_32740,inst_32743,inst_32747];
var inst_32749 = cljs.core.PersistentHashMap.fromArrays(inst_32737,inst_32748);
var inst_32750 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_32749];
var inst_32751 = (new cljs.core.PersistentVector(null,2,(5),inst_32736,inst_32750,null));
var inst_32752 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_32735,inst_32751];
var inst_32753 = (new cljs.core.PersistentVector(null,3,(5),inst_32729,inst_32752,null));
var inst_32754 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32755 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_32753,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_32756 = (new cljs.core.PersistentVector(null,3,(5),inst_32754,inst_32755,null));
var inst_32757 = re_frame.core.dispatch(inst_32756);
var inst_32758 = cljs.core.next(inst_32718);
var inst_32675 = inst_32758;
var inst_32676 = null;
var inst_32677 = (0);
var inst_32678 = (0);
var state_32821__$1 = (function (){var statearr_33074 = state_32821;
(statearr_33074[(49)] = inst_32757);

(statearr_33074[(13)] = inst_32675);

(statearr_33074[(24)] = inst_32676);

(statearr_33074[(25)] = inst_32677);

(statearr_33074[(26)] = inst_32678);

return statearr_33074;
})();
var statearr_33075_33312 = state_32821__$1;
(statearr_33075_33312[(2)] = null);

(statearr_33075_33312[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (37))){
var _ = (function (){var statearr_33076 = state_32821;
(statearr_33076[(4)] = cljs.core.rest((state_32821[(4)])));

return statearr_33076;
})();
var state_32821__$1 = state_32821;
var ex33072 = (state_32821__$1[(2)]);
var statearr_33077_33313 = state_32821__$1;
(statearr_33077_33313[(5)] = ex33072);


var statearr_33078_33314 = state_32821__$1;
(statearr_33078_33314[(1)] = (36));

(statearr_33078_33314[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (63))){
var state_32821__$1 = state_32821;
var statearr_33079_33315 = state_32821__$1;
(statearr_33079_33315[(2)] = null);

(statearr_33079_33315[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (94))){
var inst_32572 = (state_32821[(18)]);
var inst_32794 = (state_32821[(2)]);
var inst_32795 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32572);
var state_32821__$1 = (function (){var statearr_33080 = state_32821;
(statearr_33080[(50)] = inst_32794);

return statearr_33080;
})();
var statearr_33081_33316 = state_32821__$1;
(statearr_33081_33316[(2)] = inst_32795);

(statearr_33081_33316[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (8))){
var inst_32816 = (state_32821[(2)]);
var _ = (function (){var statearr_33082 = state_32821;
(statearr_33082[(4)] = cljs.core.rest((state_32821[(4)])));

return statearr_33082;
})();
var state_32821__$1 = state_32821;
var statearr_33083_33317 = state_32821__$1;
(statearr_33083_33317[(2)] = inst_32816);

(statearr_33083_33317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (49))){
var inst_32616 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_33084_33318 = state_32821__$1;
(statearr_33084_33318[(2)] = inst_32616);

(statearr_33084_33318[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (84))){
var inst_32793 = (state_32821[(2)]);
var state_32821__$1 = (function (){var statearr_33085 = state_32821;
(statearr_33085[(29)] = inst_32793);

return statearr_33085;
})();
var statearr_33086_33319 = state_32821__$1;
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
var bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto____1 = (function (state_32821){
while(true){
var ret_value__24009__auto__ = (function (){try{while(true){
var result__24010__auto__ = switch__24007__auto__(state_32821);
if(cljs.core.keyword_identical_QMARK_(result__24010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24010__auto__;
}
break;
}
}catch (e33088){var ex__24011__auto__ = e33088;
var statearr_33089_33320 = state_32821;
(statearr_33089_33320[(2)] = ex__24011__auto__);


if(cljs.core.seq((state_32821[(4)]))){
var statearr_33090_33321 = state_32821;
(statearr_33090_33321[(1)] = cljs.core.first((state_32821[(4)])));

} else {
throw ex__24011__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33322 = state_32821;
state_32821 = G__33322;
continue;
} else {
return ret_value__24009__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto__ = function(state_32821){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__24008__auto____1.call(this,state_32821);
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
