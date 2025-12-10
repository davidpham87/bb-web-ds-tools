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
var len__5749__auto___33910 = arguments.length;
var i__5750__auto___33911 = (0);
while(true){
if((i__5750__auto___33911 < len__5749__auto___33910)){
args__5755__auto__.push((arguments[i__5750__auto___33911]));

var G__33912 = (i__5750__auto___33911 + (1));
i__5750__auto___33911 = G__33912;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__32405,p__32406){
var map__32407 = p__32405;
var map__32407__$1 = cljs.core.__destructure_map(map__32407);
var value = map__32407__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32407__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__32408 = p__32406;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32408,(0),null);
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
if(cljs.core.truth_((function (){var G__32412 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__32411 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__32411.cljs$core$IFn$_invoke$arity$1 ? fexpr__32411.cljs$core$IFn$_invoke$arity$1(G__32412) : fexpr__32411.call(null,G__32412));
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
var c__24068__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24069__auto__ = (function (){var switch__24021__auto__ = (function (state_32418){
var state_val_32419 = (state_32418[(1)]);
if((state_val_32419 === (1))){
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32418__$1,(2),bb_web_ds_tools.runtime.webr.input_buffer,text);
} else {
if((state_val_32419 === (2))){
var inst_32415 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32418__$1,inst_32415);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0 = (function (){
var statearr_32420 = [null,null,null,null,null,null,null];
(statearr_32420[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24022__auto__);

(statearr_32420[(1)] = (1));

return statearr_32420;
});
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1 = (function (state_32418){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_32418);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e32421){var ex__24025__auto__ = e32421;
var statearr_32422_33914 = state_32418;
(statearr_32422_33914[(2)] = ex__24025__auto__);


if(cljs.core.seq((state_32418[(4)]))){
var statearr_32423_33915 = state_32418;
(statearr_32423_33915[(1)] = cljs.core.first((state_32418[(4)])));

} else {
throw ex__24025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33924 = state_32418;
state_32418 = G__33924;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__ = function(state_32418){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1.call(this,state_32418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto__;
})()
})();
var state__24070__auto__ = (function (){var statearr_32424 = f__24069__auto__();
(statearr_32424[(6)] = c__24068__auto__);

return statearr_32424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24070__auto__);
}));

return c__24068__auto__;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),viewer__$1], null));

}
}
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq32393){
var G__32394 = cljs.core.first(seq32393);
var seq32393__$1 = cljs.core.next(seq32393);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32394,seq32393__$1);
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
var c__24068__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24069__auto__ = (function (){var switch__24021__auto__ = (function (state_32493){
var state_val_32494 = (state_32493[(1)]);
if((state_val_32494 === (7))){
var inst_32489 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32495_33964 = state_32493__$1;
(statearr_32495_33964[(2)] = inst_32489);

(statearr_32495_33964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (20))){
var inst_32469 = (state_32493[(7)]);
var inst_32473 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32469);
var state_32493__$1 = state_32493;
var statearr_32496_33965 = state_32493__$1;
(statearr_32496_33965[(2)] = inst_32473);

(statearr_32496_33965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (1))){
var inst_32425 = (state_32493[(8)]);
var inst_32425__$1 = msg.type;
var inst_32426 = msg.data;
var inst_32427 = ["stderr",null,"stdout",null];
var inst_32428 = (new cljs.core.PersistentArrayMap(null,2,inst_32427,null));
var inst_32429 = (new cljs.core.PersistentHashSet(null,inst_32428,null));
var inst_32430 = (inst_32429.cljs$core$IFn$_invoke$arity$1 ? inst_32429.cljs$core$IFn$_invoke$arity$1(inst_32425__$1) : inst_32429.call(null,inst_32425__$1));
var state_32493__$1 = (function (){var statearr_32497 = state_32493;
(statearr_32497[(8)] = inst_32425__$1);

(statearr_32497[(9)] = inst_32426);

return statearr_32497;
})();
if(cljs.core.truth_(inst_32430)){
var statearr_32498_33984 = state_32493__$1;
(statearr_32498_33984[(1)] = (2));

} else {
var statearr_32499_33985 = state_32493__$1;
(statearr_32499_33985[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (24))){
var inst_32487 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32500_33986 = state_32493__$1;
(statearr_32500_33986[(2)] = inst_32487);

(statearr_32500_33986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (4))){
var inst_32491 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32493__$1,inst_32491);
} else {
if((state_val_32494 === (15))){
var inst_32463 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
if(cljs.core.truth_(inst_32463)){
var statearr_32501_33988 = state_32493__$1;
(statearr_32501_33988[(1)] = (16));

} else {
var statearr_32502_33989 = state_32493__$1;
(statearr_32502_33989[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (21))){
var inst_32425 = (state_32493[(8)]);
var inst_32475 = (state_32493[(2)]);
var inst_32476 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32477 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32425);
var inst_32478 = [inst_32477,inst_32475];
var inst_32479 = cljs.core.PersistentHashMap.fromArrays(inst_32476,inst_32478);
var _ = (function (){var statearr_32503 = state_32493;
(statearr_32503[(4)] = cljs.core.rest((state_32493[(4)])));

return statearr_32503;
})();
var state_32493__$1 = state_32493;
var statearr_32504_34015 = state_32493__$1;
(statearr_32504_34015[(2)] = inst_32479);

(statearr_32504_34015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (13))){
var inst_32455 = (state_32493[(10)]);
var inst_32458 = cljs.core.ex_data(inst_32455);
var inst_32459 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32458);
var inst_32460 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32459,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32493__$1 = state_32493;
var statearr_32505_34016 = state_32493__$1;
(statearr_32505_34016[(2)] = inst_32460);

(statearr_32505_34016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (22))){
var state_32493__$1 = state_32493;
var statearr_32506_34017 = state_32493__$1;
(statearr_32506_34017[(2)] = null);

(statearr_32506_34017[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (6))){
var state_32493__$1 = state_32493;
var statearr_32507_34018 = state_32493__$1;
(statearr_32507_34018[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (17))){
var inst_32455 = (state_32493[(10)]);
var state_32493__$1 = state_32493;
var statearr_32509_34019 = state_32493__$1;
(statearr_32509_34019[(2)] = inst_32455);

(statearr_32509_34019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (3))){
var inst_32425 = (state_32493[(8)]);
var inst_32437 = ["message",null,"warning",null];
var inst_32438 = (new cljs.core.PersistentArrayMap(null,2,inst_32437,null));
var inst_32439 = (new cljs.core.PersistentHashSet(null,inst_32438,null));
var inst_32440 = (inst_32439.cljs$core$IFn$_invoke$arity$1 ? inst_32439.cljs$core$IFn$_invoke$arity$1(inst_32425) : inst_32439.call(null,inst_32425));
var state_32493__$1 = state_32493;
if(cljs.core.truth_(inst_32440)){
var statearr_32510_34020 = state_32493__$1;
(statearr_32510_34020[(1)] = (5));

} else {
var statearr_32511_34021 = state_32493__$1;
(statearr_32511_34021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (12))){
var inst_32455 = (state_32493[(10)]);
var inst_32456 = (state_32493[(11)]);
var inst_32455__$1 = (state_32493[(2)]);
var inst_32456__$1 = (inst_32455__$1 instanceof cljs.core.ExceptionInfo);
var state_32493__$1 = (function (){var statearr_32512 = state_32493;
(statearr_32512[(10)] = inst_32455__$1);

(statearr_32512[(11)] = inst_32456__$1);

return statearr_32512;
})();
if(cljs.core.truth_(inst_32456__$1)){
var statearr_32513_34022 = state_32493__$1;
(statearr_32513_34022[(1)] = (13));

} else {
var statearr_32514_34023 = state_32493__$1;
(statearr_32514_34023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (2))){
var inst_32425 = (state_32493[(8)]);
var inst_32426 = (state_32493[(9)]);
var inst_32432 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32433 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32425);
var inst_32434 = [inst_32433,inst_32426];
var inst_32435 = cljs.core.PersistentHashMap.fromArrays(inst_32432,inst_32434);
var state_32493__$1 = state_32493;
var statearr_32515_34025 = state_32493__$1;
(statearr_32515_34025[(2)] = inst_32435);

(statearr_32515_34025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (23))){
var state_32493__$1 = state_32493;
var statearr_32517_34026 = state_32493__$1;
(statearr_32517_34026[(2)] = null);

(statearr_32517_34026[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (19))){
var inst_32470 = (state_32493[(12)]);
var state_32493__$1 = state_32493;
var statearr_32518_34027 = state_32493__$1;
(statearr_32518_34027[(2)] = inst_32470);

(statearr_32518_34027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (11))){
var _ = (function (){var statearr_32519 = state_32493;
(statearr_32519[(4)] = cljs.core.rest((state_32493[(4)])));

return statearr_32519;
})();
var state_32493__$1 = state_32493;
var ex32516 = (state_32493__$1[(2)]);
var statearr_32520_34055 = state_32493__$1;
(statearr_32520_34055[(5)] = ex32516);


var statearr_32521_34056 = state_32493__$1;
(statearr_32521_34056[(1)] = (10));

(statearr_32521_34056[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (9))){
var inst_32482 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32522_34057 = state_32493__$1;
(statearr_32522_34057[(2)] = inst_32482);

(statearr_32522_34057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (5))){
var state_32493__$1 = state_32493;
var statearr_32523_34058 = state_32493__$1;
(statearr_32523_34058[(2)] = null);

(statearr_32523_34058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (14))){
var inst_32456 = (state_32493[(11)]);
var state_32493__$1 = state_32493;
var statearr_32524_34060 = state_32493__$1;
(statearr_32524_34060[(2)] = inst_32456);

(statearr_32524_34060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (16))){
var inst_32455 = (state_32493[(10)]);
var inst_32465 = (function(){throw inst_32455})();
var state_32493__$1 = state_32493;
var statearr_32525_34061 = state_32493__$1;
(statearr_32525_34061[(2)] = inst_32465);

(statearr_32525_34061[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (10))){
var inst_32425 = (state_32493[(8)]);
var inst_32442 = (state_32493[(2)]);
var inst_32443 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32444 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32425);
var inst_32445 = [inst_32444,"Error decoding message"];
var inst_32446 = cljs.core.PersistentHashMap.fromArrays(inst_32443,inst_32445);
var state_32493__$1 = (function (){var statearr_32526 = state_32493;
(statearr_32526[(13)] = inst_32442);

return statearr_32526;
})();
var statearr_32527_34091 = state_32493__$1;
(statearr_32527_34091[(2)] = inst_32446);

(statearr_32527_34091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (18))){
var inst_32469 = (state_32493[(7)]);
var inst_32470 = (state_32493[(12)]);
var inst_32468 = (state_32493[(2)]);
var inst_32469__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_32468,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_32470__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_32469__$1);
var state_32493__$1 = (function (){var statearr_32528 = state_32493;
(statearr_32528[(7)] = inst_32469__$1);

(statearr_32528[(12)] = inst_32470__$1);

return statearr_32528;
})();
if(cljs.core.truth_(inst_32470__$1)){
var statearr_32529_34092 = state_32493__$1;
(statearr_32529_34092[(1)] = (19));

} else {
var statearr_32530_34094 = state_32493__$1;
(statearr_32530_34094[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (8))){
var inst_32426 = (state_32493[(9)]);
var _ = (function (){var statearr_32531 = state_32493;
(statearr_32531[(4)] = cljs.core.cons((11),(state_32493[(4)])));

return statearr_32531;
})();
var inst_32452 = bb_web_ds_tools.runtime.webr.to_js(inst_32426);
var inst_32453 = cljs.core.async.interop.p__GT_c(inst_32452);
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32493__$1,(12),inst_32453);
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
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto__ = null;
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto____0 = (function (){
var statearr_32532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32532[(0)] = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto__);

(statearr_32532[(1)] = (1));

return statearr_32532;
});
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto____1 = (function (state_32493){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_32493);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e32533){var ex__24025__auto__ = e32533;
var statearr_32534_34126 = state_32493;
(statearr_32534_34126[(2)] = ex__24025__auto__);


if(cljs.core.seq((state_32493[(4)]))){
var statearr_32535_34127 = state_32493;
(statearr_32535_34127[(1)] = cljs.core.first((state_32493[(4)])));

} else {
throw ex__24025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34128 = state_32493;
state_32493 = G__34128;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto__ = function(state_32493){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto____1.call(this,state_32493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto____0;
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto____1;
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24022__auto__;
})()
})();
var state__24070__auto__ = (function (){var statearr_32536 = f__24069__auto__();
(statearr_32536[(6)] = c__24068__auto__);

return statearr_32536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24070__auto__);
}));

return c__24068__auto__;
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
var c__24068__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24069__auto__ = (function (){var switch__24021__auto__ = (function (state_32586){
var state_val_32587 = (state_32586[(1)]);
if((state_val_32587 === (7))){
var inst_32582 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
var statearr_32588_34130 = state_32586__$1;
(statearr_32588_34130[(2)] = inst_32582);

(statearr_32588_34130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (1))){
var inst_32537 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_32586__$1 = state_32586;
if(cljs.core.truth_(inst_32537)){
var statearr_32589_34146 = state_32586__$1;
(statearr_32589_34146[(1)] = (2));

} else {
var statearr_32590_34165 = state_32586__$1;
(statearr_32590_34165[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (4))){
var inst_32584 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32586__$1,inst_32584);
} else {
if((state_val_32587 === (15))){
var inst_32569 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
if(cljs.core.truth_(inst_32569)){
var statearr_32591_34166 = state_32586__$1;
(statearr_32591_34166[(1)] = (16));

} else {
var statearr_32592_34167 = state_32586__$1;
(statearr_32592_34167[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (13))){
var inst_32561 = (state_32586[(7)]);
var inst_32564 = cljs.core.ex_data(inst_32561);
var inst_32565 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32564);
var inst_32566 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32565,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32586__$1 = state_32586;
var statearr_32593_34168 = state_32586__$1;
(statearr_32593_34168[(2)] = inst_32566);

(statearr_32593_34168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (6))){
var inst_32580 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_32586__$1 = state_32586;
var statearr_32594_34169 = state_32586__$1;
(statearr_32594_34169[(2)] = inst_32580);

(statearr_32594_34169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (17))){
var inst_32561 = (state_32586[(7)]);
var state_32586__$1 = state_32586;
var statearr_32595_34170 = state_32586__$1;
(statearr_32595_34170[(2)] = inst_32561);

(statearr_32595_34170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (3))){
var inst_32541 = (typeof WebR !== 'undefined');
var state_32586__$1 = state_32586;
if(cljs.core.truth_(inst_32541)){
var statearr_32596_34171 = state_32586__$1;
(statearr_32596_34171[(1)] = (5));

} else {
var statearr_32597_34172 = state_32586__$1;
(statearr_32597_34172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (12))){
var inst_32561 = (state_32586[(7)]);
var inst_32562 = (state_32586[(8)]);
var inst_32561__$1 = (state_32586[(2)]);
var inst_32562__$1 = (inst_32561__$1 instanceof cljs.core.ExceptionInfo);
var state_32586__$1 = (function (){var statearr_32599 = state_32586;
(statearr_32599[(7)] = inst_32561__$1);

(statearr_32599[(8)] = inst_32562__$1);

return statearr_32599;
})();
if(cljs.core.truth_(inst_32562__$1)){
var statearr_32600_34173 = state_32586__$1;
(statearr_32600_34173[(1)] = (13));

} else {
var statearr_32601_34174 = state_32586__$1;
(statearr_32601_34174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (2))){
var inst_32539 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_32586__$1 = state_32586;
var statearr_32602_34175 = state_32586__$1;
(statearr_32602_34175[(2)] = inst_32539);

(statearr_32602_34175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (11))){
var _ = (function (){var statearr_32603 = state_32586;
(statearr_32603[(4)] = cljs.core.rest((state_32586[(4)])));

return statearr_32603;
})();
var state_32586__$1 = state_32586;
var ex32598 = (state_32586__$1[(2)]);
var statearr_32604_34177 = state_32586__$1;
(statearr_32604_34177[(5)] = ex32598);


var statearr_32605_34178 = state_32586__$1;
(statearr_32605_34178[(1)] = (10));

(statearr_32605_34178[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (9))){
var inst_32578 = (state_32586[(2)]);
var state_32586__$1 = state_32586;
var statearr_32606_34179 = state_32586__$1;
(statearr_32606_34179[(2)] = inst_32578);

(statearr_32606_34179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (5))){
var state_32586__$1 = state_32586;
var statearr_32607_34180 = state_32586__$1;
(statearr_32607_34180[(2)] = null);

(statearr_32607_34180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (14))){
var inst_32562 = (state_32586[(8)]);
var state_32586__$1 = state_32586;
var statearr_32608_34181 = state_32586__$1;
(statearr_32608_34181[(2)] = inst_32562);

(statearr_32608_34181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (16))){
var inst_32561 = (state_32586[(7)]);
var inst_32571 = (function(){throw inst_32561})();
var state_32586__$1 = state_32586;
var statearr_32609_34182 = state_32586__$1;
(statearr_32609_34182[(2)] = inst_32571);

(statearr_32609_34182[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (10))){
var inst_32543 = (state_32586[(2)]);
var inst_32544 = console.error("WebR Init Error:",inst_32543);
var inst_32545 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32543)].join('');
var inst_32546 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_32545) : on_error.call(null,inst_32545));
var state_32586__$1 = (function (){var statearr_32610 = state_32586;
(statearr_32610[(9)] = inst_32544);

return statearr_32610;
})();
var statearr_32611_34199 = state_32586__$1;
(statearr_32611_34199[(2)] = inst_32546);

(statearr_32611_34199[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (18))){
var inst_32574 = (state_32586[(2)]);
var inst_32575 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_32616 = state_32586;
(statearr_32616[(4)] = cljs.core.rest((state_32586[(4)])));

return statearr_32616;
})();
var state_32586__$1 = (function (){var statearr_32617 = state_32586;
(statearr_32617[(10)] = inst_32574);

return statearr_32617;
})();
var statearr_32618_34204 = state_32586__$1;
(statearr_32618_34204[(2)] = inst_32575);

(statearr_32618_34204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32587 === (8))){
var _ = (function (){var statearr_32620 = state_32586;
(statearr_32620[(4)] = cljs.core.cons((11),(state_32586[(4)])));

return statearr_32620;
})();
var inst_32552 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_32553 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_32554 = cljs.core.PersistentHashMap.fromArrays(inst_32552,inst_32553);
var inst_32555 = cljs.core.clj__GT_js(inst_32554);
var inst_32556 = (new WebR(inst_32555));
var inst_32557 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_32556);
var inst_32558 = bb_web_ds_tools.runtime.webr.init_obj(inst_32556);
var inst_32559 = cljs.core.async.interop.p__GT_c(inst_32558);
var state_32586__$1 = (function (){var statearr_32623 = state_32586;
(statearr_32623[(11)] = inst_32557);

return statearr_32623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32586__$1,(12),inst_32559);
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
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto__ = null;
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto____0 = (function (){
var statearr_32624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32624[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto__);

(statearr_32624[(1)] = (1));

return statearr_32624;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto____1 = (function (state_32586){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_32586);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e32625){var ex__24025__auto__ = e32625;
var statearr_32626_34207 = state_32586;
(statearr_32626_34207[(2)] = ex__24025__auto__);


if(cljs.core.seq((state_32586[(4)]))){
var statearr_32627_34208 = state_32586;
(statearr_32627_34208[(1)] = cljs.core.first((state_32586[(4)])));

} else {
throw ex__24025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34213 = state_32586;
state_32586 = G__34213;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto__ = function(state_32586){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto____1.call(this,state_32586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24022__auto__;
})()
})();
var state__24070__auto__ = (function (){var statearr_32632 = f__24069__auto__();
(statearr_32632[(6)] = c__24068__auto__);

return statearr_32632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24070__auto__);
}));

return c__24068__auto__;
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
var ds_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__32635){
var vec__32636 = p__32635;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32636,(0),null);
var map__32639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32636,(1),null);
var map__32639__$1 = cljs.core.__destructure_map(map__32639);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32639__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32639__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
var len__5749__auto___34222 = arguments.length;
var i__5750__auto___34223 = (0);
while(true){
if((i__5750__auto___34223 < len__5749__auto___34222)){
args__5755__auto__.push((arguments[i__5750__auto___34223]));

var G__34225 = (i__5750__auto___34223 + (1));
i__5750__auto___34223 = G__34225;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic = (function (datasets,p__32642){
var vec__32643 = p__32642;
var keys_to_bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32643,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__24068__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24069__auto__ = (function (){var switch__24021__auto__ = (function (state_32677){
var state_val_32678 = (state_32677[(1)]);
if((state_val_32678 === (7))){
var inst_32659 = (state_32677[(7)]);
var inst_32662 = cljs.core.ex_data(inst_32659);
var inst_32663 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32662);
var inst_32664 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32663,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32677__$1 = state_32677;
var statearr_32679_34232 = state_32677__$1;
(statearr_32679_34232[(2)] = inst_32664);

(statearr_32679_34232[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (1))){
var state_32677__$1 = state_32677;
var statearr_32680_34233 = state_32677__$1;
(statearr_32680_34233[(2)] = null);

(statearr_32680_34233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (4))){
var inst_32646 = (state_32677[(2)]);
var inst_32647 = console.error("Failed to bind datasets to R:",inst_32646);
var state_32677__$1 = state_32677;
var statearr_32681_34237 = state_32677__$1;
(statearr_32681_34237[(2)] = inst_32647);

(statearr_32681_34237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (6))){
var inst_32659 = (state_32677[(7)]);
var inst_32660 = (state_32677[(8)]);
var inst_32659__$1 = (state_32677[(2)]);
var inst_32660__$1 = (inst_32659__$1 instanceof cljs.core.ExceptionInfo);
var state_32677__$1 = (function (){var statearr_32682 = state_32677;
(statearr_32682[(7)] = inst_32659__$1);

(statearr_32682[(8)] = inst_32660__$1);

return statearr_32682;
})();
if(cljs.core.truth_(inst_32660__$1)){
var statearr_32683_34239 = state_32677__$1;
(statearr_32683_34239[(1)] = (7));

} else {
var statearr_32684_34240 = state_32677__$1;
(statearr_32684_34240[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (3))){
var inst_32675 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32677__$1,inst_32675);
} else {
if((state_val_32678 === (12))){
var inst_32672 = (state_32677[(2)]);
var _ = (function (){var statearr_32685 = state_32677;
(statearr_32685[(4)] = cljs.core.rest((state_32677[(4)])));

return statearr_32685;
})();
var state_32677__$1 = state_32677;
var statearr_32686_34247 = state_32677__$1;
(statearr_32686_34247[(2)] = inst_32672);

(statearr_32686_34247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (2))){
var _ = (function (){var statearr_32687 = state_32677;
(statearr_32687[(4)] = cljs.core.cons((5),(state_32677[(4)])));

return statearr_32687;
})();
var inst_32653 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_32654 = bb_web_ds_tools.runtime.webr.datasets__GT_js(datasets,keys_to_bind);
var inst_32655 = inst_32653.globalEnv;
var inst_32656 = inst_32655.bind("datasets",inst_32654);
var inst_32657 = cljs.core.async.interop.p__GT_c(inst_32656);
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32677__$1,(6),inst_32657);
} else {
if((state_val_32678 === (11))){
var inst_32659 = (state_32677[(7)]);
var state_32677__$1 = state_32677;
var statearr_32689_34251 = state_32677__$1;
(statearr_32689_34251[(2)] = inst_32659);

(statearr_32689_34251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (9))){
var inst_32667 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
if(cljs.core.truth_(inst_32667)){
var statearr_32690_34254 = state_32677__$1;
(statearr_32690_34254[(1)] = (10));

} else {
var statearr_32691_34255 = state_32677__$1;
(statearr_32691_34255[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (5))){
var _ = (function (){var statearr_32692 = state_32677;
(statearr_32692[(4)] = cljs.core.rest((state_32677[(4)])));

return statearr_32692;
})();
var state_32677__$1 = state_32677;
var ex32688 = (state_32677__$1[(2)]);
var statearr_32693_34258 = state_32677__$1;
(statearr_32693_34258[(5)] = ex32688);


var statearr_32694_34259 = state_32677__$1;
(statearr_32694_34259[(1)] = (4));

(statearr_32694_34259[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (10))){
var inst_32659 = (state_32677[(7)]);
var inst_32669 = (function(){throw inst_32659})();
var state_32677__$1 = state_32677;
var statearr_32695_34260 = state_32677__$1;
(statearr_32695_34260[(2)] = inst_32669);

(statearr_32695_34260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (8))){
var inst_32660 = (state_32677[(8)]);
var state_32677__$1 = state_32677;
var statearr_32696_34262 = state_32677__$1;
(statearr_32696_34262[(2)] = inst_32660);

(statearr_32696_34262[(1)] = (9));


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
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0 = (function (){
var statearr_32697 = [null,null,null,null,null,null,null,null,null];
(statearr_32697[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24022__auto__);

(statearr_32697[(1)] = (1));

return statearr_32697;
});
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1 = (function (state_32677){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_32677);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e32698){var ex__24025__auto__ = e32698;
var statearr_32699_34269 = state_32677;
(statearr_32699_34269[(2)] = ex__24025__auto__);


if(cljs.core.seq((state_32677[(4)]))){
var statearr_32700_34273 = state_32677;
(statearr_32700_34273[(1)] = cljs.core.first((state_32677[(4)])));

} else {
throw ex__24025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34276 = state_32677;
state_32677 = G__34276;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__ = function(state_32677){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1.call(this,state_32677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto__;
})()
})();
var state__24070__auto__ = (function (){var statearr_32701 = f__24069__auto__();
(statearr_32701[(6)] = c__24068__auto__);

return statearr_32701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24070__auto__);
}));

return c__24068__auto__;
} else {
var c__24068__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24069__auto__ = (function (){var switch__24021__auto__ = (function (state_32704){
var state_val_32705 = (state_32704[(1)]);
if((state_val_32705 === (1))){
var inst_32702 = console.warn("WebR not loaded, cannot bind datasets");
var state_32704__$1 = state_32704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32704__$1,inst_32702);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0 = (function (){
var statearr_32706 = [null,null,null,null,null,null,null];
(statearr_32706[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24022__auto__);

(statearr_32706[(1)] = (1));

return statearr_32706;
});
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1 = (function (state_32704){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_32704);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e32707){var ex__24025__auto__ = e32707;
var statearr_32708_34297 = state_32704;
(statearr_32708_34297[(2)] = ex__24025__auto__);


if(cljs.core.seq((state_32704[(4)]))){
var statearr_32709_34300 = state_32704;
(statearr_32709_34300[(1)] = cljs.core.first((state_32704[(4)])));

} else {
throw ex__24025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34302 = state_32704;
state_32704 = G__34302;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__ = function(state_32704){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1.call(this,state_32704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto__;
})()
})();
var state__24070__auto__ = (function (){var statearr_32710 = f__24069__auto__();
(statearr_32710[(6)] = c__24068__auto__);

return statearr_32710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24070__auto__);
}));

return c__24068__auto__;
}
}));

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$applyTo = (function (seq32640){
var G__32641 = cljs.core.first(seq32640);
var seq32640__$1 = cljs.core.next(seq32640);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32641,seq32640__$1);
}));

/**
 * Retrieves the 'datasets' variable from R, converts it back to CLJS,
 * and dispatches an update event if found.
 */
bb_web_ds_tools.runtime.webr.sync_datasets = (function bb_web_ds_tools$runtime$webr$sync_datasets(){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__24068__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24069__auto__ = (function (){var switch__24021__auto__ = (function (state_32776){
var state_val_32777 = (state_32776[(1)]);
if((state_val_32777 === (7))){
var inst_32745 = (state_32776[(7)]);
var inst_32745__$1 = (state_32776[(2)]);
var state_32776__$1 = (function (){var statearr_32778 = state_32776;
(statearr_32778[(7)] = inst_32745__$1);

return statearr_32778;
})();
if(cljs.core.truth_(inst_32745__$1)){
var statearr_32779_34307 = state_32776__$1;
(statearr_32779_34307[(1)] = (17));

} else {
var statearr_32780_34308 = state_32776__$1;
(statearr_32780_34308[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (20))){
var inst_32750 = (state_32776[(8)]);
var inst_32751 = (state_32776[(9)]);
var inst_32750__$1 = (state_32776[(2)]);
var inst_32751__$1 = (inst_32750__$1 instanceof cljs.core.ExceptionInfo);
var state_32776__$1 = (function (){var statearr_32781 = state_32776;
(statearr_32781[(8)] = inst_32750__$1);

(statearr_32781[(9)] = inst_32751__$1);

return statearr_32781;
})();
if(cljs.core.truth_(inst_32751__$1)){
var statearr_32782_34314 = state_32776__$1;
(statearr_32782_34314[(1)] = (21));

} else {
var statearr_32783_34317 = state_32776__$1;
(statearr_32783_34317[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (1))){
var state_32776__$1 = state_32776;
var statearr_32784_34318 = state_32776__$1;
(statearr_32784_34318[(2)] = null);

(statearr_32784_34318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (24))){
var inst_32750 = (state_32776[(8)]);
var inst_32760 = (function(){throw inst_32750})();
var state_32776__$1 = state_32776;
var statearr_32785_34319 = state_32776__$1;
(statearr_32785_34319[(2)] = inst_32760);

(statearr_32785_34319[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (4))){
var inst_32711 = (state_32776[(2)]);
var inst_32712 = console.error("Failed to sync datasets from R:",inst_32711);
var state_32776__$1 = state_32776;
var statearr_32786_34322 = state_32776__$1;
(statearr_32786_34322[(2)] = inst_32712);

(statearr_32786_34322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (15))){
var inst_32729 = (state_32776[(10)]);
var state_32776__$1 = state_32776;
var statearr_32787_34323 = state_32776__$1;
(statearr_32787_34323[(2)] = inst_32729);

(statearr_32787_34323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (21))){
var inst_32750 = (state_32776[(8)]);
var inst_32753 = cljs.core.ex_data(inst_32750);
var inst_32754 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32753);
var inst_32755 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32754,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32776__$1 = state_32776;
var statearr_32788_34326 = state_32776__$1;
(statearr_32788_34326[(2)] = inst_32755);

(statearr_32788_34326[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (13))){
var inst_32737 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32737)){
var statearr_32789_34327 = state_32776__$1;
(statearr_32789_34327[(1)] = (14));

} else {
var statearr_32790_34328 = state_32776__$1;
(statearr_32790_34328[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (22))){
var inst_32751 = (state_32776[(9)]);
var state_32776__$1 = state_32776;
var statearr_32791_34330 = state_32776__$1;
(statearr_32791_34330[(2)] = inst_32751);

(statearr_32791_34330[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (6))){
var inst_32718 = (state_32776[(11)]);
var _ = (function (){var statearr_32792 = state_32776;
(statearr_32792[(4)] = cljs.core.cons((9),(state_32776[(4)])));

return statearr_32792;
})();
var inst_32725 = inst_32718.globalEnv;
var inst_32726 = inst_32725.get("datasets");
var inst_32727 = cljs.core.async.interop.p__GT_c(inst_32726);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32776__$1,(10),inst_32727);
} else {
if((state_val_32777 === (25))){
var inst_32750 = (state_32776[(8)]);
var state_32776__$1 = state_32776;
var statearr_32793_34346 = state_32776__$1;
(statearr_32793_34346[(2)] = inst_32750);

(statearr_32793_34346[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (17))){
var inst_32745 = (state_32776[(7)]);
var inst_32747 = inst_32745.toJs();
var inst_32748 = cljs.core.async.interop.p__GT_c(inst_32747);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32776__$1,(20),inst_32748);
} else {
if((state_val_32777 === (3))){
var inst_32774 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32776__$1,inst_32774);
} else {
if((state_val_32777 === (12))){
var inst_32730 = (state_32776[(12)]);
var state_32776__$1 = state_32776;
var statearr_32794_34353 = state_32776__$1;
(statearr_32794_34353[(2)] = inst_32730);

(statearr_32794_34353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (2))){
var _ = (function (){var statearr_32795 = state_32776;
(statearr_32795[(4)] = cljs.core.cons((5),(state_32776[(4)])));

return statearr_32795;
})();
var inst_32718 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_32776__$1 = (function (){var statearr_32796 = state_32776;
(statearr_32796[(11)] = inst_32718);

return statearr_32796;
})();
var statearr_32801_34369 = state_32776__$1;
(statearr_32801_34369[(2)] = null);

(statearr_32801_34369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (23))){
var inst_32758 = (state_32776[(2)]);
var state_32776__$1 = state_32776;
if(cljs.core.truth_(inst_32758)){
var statearr_32802_34372 = state_32776__$1;
(statearr_32802_34372[(1)] = (24));

} else {
var statearr_32803_34375 = state_32776__$1;
(statearr_32803_34375[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (19))){
var inst_32771 = (state_32776[(2)]);
var _ = (function (){var statearr_32805 = state_32776;
(statearr_32805[(4)] = cljs.core.rest((state_32776[(4)])));

return statearr_32805;
})();
var state_32776__$1 = state_32776;
var statearr_32806_34379 = state_32776__$1;
(statearr_32806_34379[(2)] = inst_32771);

(statearr_32806_34379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (11))){
var inst_32729 = (state_32776[(10)]);
var inst_32732 = cljs.core.ex_data(inst_32729);
var inst_32733 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32732);
var inst_32734 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32733,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32776__$1 = state_32776;
var statearr_32808_34380 = state_32776__$1;
(statearr_32808_34380[(2)] = inst_32734);

(statearr_32808_34380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (9))){
var _ = (function (){var statearr_32809 = state_32776;
(statearr_32809[(4)] = cljs.core.rest((state_32776[(4)])));

return statearr_32809;
})();
var state_32776__$1 = state_32776;
var ex32804 = (state_32776__$1[(2)]);
var statearr_32810_34381 = state_32776__$1;
(statearr_32810_34381[(5)] = ex32804);


var statearr_32811_34382 = state_32776__$1;
(statearr_32811_34382[(1)] = (8));

(statearr_32811_34382[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (5))){
var _ = (function (){var statearr_32812 = state_32776;
(statearr_32812[(4)] = cljs.core.rest((state_32776[(4)])));

return statearr_32812;
})();
var state_32776__$1 = state_32776;
var ex32807 = (state_32776__$1[(2)]);
var statearr_32813_34383 = state_32776__$1;
(statearr_32813_34383[(5)] = ex32807);


var statearr_32814_34384 = state_32776__$1;
(statearr_32814_34384[(1)] = (4));

(statearr_32814_34384[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (14))){
var inst_32729 = (state_32776[(10)]);
var inst_32739 = (function(){throw inst_32729})();
var state_32776__$1 = state_32776;
var statearr_32815_34387 = state_32776__$1;
(statearr_32815_34387[(2)] = inst_32739);

(statearr_32815_34387[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (26))){
var inst_32763 = (state_32776[(2)]);
var inst_32764 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_32763,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_32765 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32766 = [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets-from-r","bb-web-ds-tools.views.datasets/patch-datasets-from-r",-125752359),inst_32764];
var inst_32767 = (new cljs.core.PersistentVector(null,2,(5),inst_32765,inst_32766,null));
var inst_32768 = re_frame.core.dispatch(inst_32767);
var state_32776__$1 = state_32776;
var statearr_32817_34390 = state_32776__$1;
(statearr_32817_34390[(2)] = inst_32768);

(statearr_32817_34390[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (16))){
var inst_32742 = (state_32776[(2)]);
var _ = (function (){var statearr_32818 = state_32776;
(statearr_32818[(4)] = cljs.core.rest((state_32776[(4)])));

return statearr_32818;
})();
var state_32776__$1 = state_32776;
var statearr_32819_34393 = state_32776__$1;
(statearr_32819_34393[(2)] = inst_32742);

(statearr_32819_34393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (10))){
var inst_32729 = (state_32776[(10)]);
var inst_32730 = (state_32776[(12)]);
var inst_32729__$1 = (state_32776[(2)]);
var inst_32730__$1 = (inst_32729__$1 instanceof cljs.core.ExceptionInfo);
var state_32776__$1 = (function (){var statearr_32820 = state_32776;
(statearr_32820[(10)] = inst_32729__$1);

(statearr_32820[(12)] = inst_32730__$1);

return statearr_32820;
})();
if(cljs.core.truth_(inst_32730__$1)){
var statearr_32821_34405 = state_32776__$1;
(statearr_32821_34405[(1)] = (11));

} else {
var statearr_32822_34406 = state_32776__$1;
(statearr_32822_34406[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (18))){
var state_32776__$1 = state_32776;
var statearr_32823_34407 = state_32776__$1;
(statearr_32823_34407[(2)] = null);

(statearr_32823_34407[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32777 === (8))){
var inst_32719 = (state_32776[(2)]);
var state_32776__$1 = (function (){var statearr_32824 = state_32776;
(statearr_32824[(13)] = inst_32719);

return statearr_32824;
})();
var statearr_32825_34408 = state_32776__$1;
(statearr_32825_34408[(2)] = null);

(statearr_32825_34408[(1)] = (7));


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
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____0 = (function (){
var statearr_32826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32826[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__);

(statearr_32826[(1)] = (1));

return statearr_32826;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____1 = (function (state_32776){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_32776);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e32827){var ex__24025__auto__ = e32827;
var statearr_32828_34413 = state_32776;
(statearr_32828_34413[(2)] = ex__24025__auto__);


if(cljs.core.seq((state_32776[(4)]))){
var statearr_32829_34414 = state_32776;
(statearr_32829_34414[(1)] = cljs.core.first((state_32776[(4)])));

} else {
throw ex__24025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34416 = state_32776;
state_32776 = G__34416;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__ = function(state_32776){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____1.call(this,state_32776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__;
})()
})();
var state__24070__auto__ = (function (){var statearr_32830 = f__24069__auto__();
(statearr_32830[(6)] = c__24068__auto__);

return statearr_32830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24070__auto__);
}));

return c__24068__auto__;
} else {
var c__24068__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24069__auto__ = (function (){var switch__24021__auto__ = (function (state_32833){
var state_val_32834 = (state_32833[(1)]);
if((state_val_32834 === (1))){
var inst_32831 = console.warn("WebR not loaded, cannot sync datasets");
var state_32833__$1 = state_32833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32833__$1,inst_32831);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____0 = (function (){
var statearr_32835 = [null,null,null,null,null,null,null];
(statearr_32835[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__);

(statearr_32835[(1)] = (1));

return statearr_32835;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____1 = (function (state_32833){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_32833);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e32836){var ex__24025__auto__ = e32836;
var statearr_32837_34435 = state_32833;
(statearr_32837_34435[(2)] = ex__24025__auto__);


if(cljs.core.seq((state_32833[(4)]))){
var statearr_32838_34437 = state_32833;
(statearr_32838_34437[(1)] = cljs.core.first((state_32833[(4)])));

} else {
throw ex__24025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34445 = state_32833;
state_32833 = G__34445;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__ = function(state_32833){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____1.call(this,state_32833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24022__auto__;
})()
})();
var state__24070__auto__ = (function (){var statearr_32839 = f__24069__auto__();
(statearr_32839[(6)] = c__24068__auto__);

return statearr_32839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24070__auto__);
}));

return c__24068__auto__;
}
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
var len__5749__auto___34451 = arguments.length;
var i__5750__auto___34453 = (0);
while(true){
if((i__5750__auto___34453 < len__5749__auto___34451)){
args__5755__auto__.push((arguments[i__5750__auto___34453]));

var G__34454 = (i__5750__auto___34453 + (1));
i__5750__auto___34453 = G__34454;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic = (function (code,p__32842){
var vec__32843 = p__32842;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32843,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__24068__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24069__auto__ = (function (){var switch__24021__auto__ = (function (state_33239){
var state_val_33240 = (state_33239[(1)]);
if((state_val_33240 === (65))){
var inst_33042 = (state_33239[(7)]);
var inst_33047 = cljs.core.chunk_first(inst_33042);
var inst_33048 = cljs.core.chunk_rest(inst_33042);
var inst_33049 = cljs.core.count(inst_33047);
var inst_33025 = inst_33048;
var inst_33026 = inst_33047;
var inst_33027 = inst_33049;
var inst_33028 = (0);
var state_33239__$1 = (function (){var statearr_33246 = state_33239;
(statearr_33246[(8)] = inst_33025);

(statearr_33246[(9)] = inst_33026);

(statearr_33246[(10)] = inst_33027);

(statearr_33246[(11)] = inst_33028);

return statearr_33246;
})();
var statearr_33248_34471 = state_33239__$1;
(statearr_33248_34471[(2)] = null);

(statearr_33248_34471[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (70))){
var inst_33042 = (state_33239[(7)]);
var inst_33059 = (state_33239[(2)]);
var inst_33060 = cljs.core.next(inst_33042);
var inst_33025 = inst_33060;
var inst_33026 = null;
var inst_33027 = (0);
var inst_33028 = (0);
var state_33239__$1 = (function (){var statearr_33253 = state_33239;
(statearr_33253[(12)] = inst_33059);

(statearr_33253[(8)] = inst_33025);

(statearr_33253[(9)] = inst_33026);

(statearr_33253[(10)] = inst_33027);

(statearr_33253[(11)] = inst_33028);

return statearr_33253;
})();
var statearr_33254_34478 = state_33239__$1;
(statearr_33254_34478[(2)] = null);

(statearr_33254_34478[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (62))){
var inst_33042 = (state_33239[(7)]);
var inst_33044 = cljs.core.chunked_seq_QMARK_(inst_33042);
var state_33239__$1 = state_33239;
if(inst_33044){
var statearr_33259_34487 = state_33239__$1;
(statearr_33259_34487[(1)] = (65));

} else {
var statearr_33260_34489 = state_33239__$1;
(statearr_33260_34489[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (74))){
var inst_33079 = (state_33239[(13)]);
var inst_33122 = (state_33239[(14)]);
var inst_33122__$1 = cljs.core.seq(inst_33079);
var state_33239__$1 = (function (){var statearr_33265 = state_33239;
(statearr_33265[(14)] = inst_33122__$1);

return statearr_33265;
})();
if(inst_33122__$1){
var statearr_33266_34495 = state_33239__$1;
(statearr_33266_34495[(1)] = (76));

} else {
var statearr_33267_34496 = state_33239__$1;
(statearr_33267_34496[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (7))){
var inst_33225 = (new Error("Shelter not found on WebR instance"));
var inst_33226 = (function(){throw inst_33225})();
var state_33239__$1 = state_33239;
var statearr_33269_34502 = state_33239__$1;
(statearr_33269_34502[(2)] = inst_33226);

(statearr_33269_34502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (59))){
var inst_33033 = (state_33239[(15)]);
var inst_33035 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33033);
var state_33239__$1 = state_33239;
var statearr_33270_34506 = state_33239__$1;
(statearr_33270_34506[(2)] = inst_33035);

(statearr_33270_34506[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (86))){
var inst_33186 = (state_33239[(16)]);
var inst_33192 = cljs.core.ex_data(inst_33186);
var inst_33193 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33192);
var inst_33194 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33193,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33239__$1 = state_33239;
var statearr_33271_34513 = state_33239__$1;
(statearr_33271_34513[(2)] = inst_33194);

(statearr_33271_34513[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (20))){
var inst_32876 = (state_33239[(17)]);
var inst_32886 = (function(){throw inst_32876})();
var state_33239__$1 = state_33239;
var statearr_33276_34514 = state_33239__$1;
(statearr_33276_34514[(2)] = inst_32886);

(statearr_33276_34514[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (72))){
var inst_32964 = (state_33239[(18)]);
var inst_33180 = (state_33239[(19)]);
var inst_33179 = (state_33239[(2)]);
var inst_33180__$1 = bb_web_ds_tools.runtime.webr.to_js(inst_32964);
var inst_33181 = (inst_33180__$1 instanceof Promise);
var state_33239__$1 = (function (){var statearr_33277 = state_33239;
(statearr_33277[(20)] = inst_33179);

(statearr_33277[(19)] = inst_33180__$1);

return statearr_33277;
})();
if(cljs.core.truth_(inst_33181)){
var statearr_33278_34515 = state_33239__$1;
(statearr_33278_34515[(1)] = (82));

} else {
var statearr_33279_34516 = state_33239__$1;
(statearr_33279_34516[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (58))){
var inst_33068 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33280_34517 = state_33239__$1;
(statearr_33280_34517[(2)] = inst_33068);

(statearr_33280_34517[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (60))){
var state_33239__$1 = state_33239;
var statearr_33281_34518 = state_33239__$1;
(statearr_33281_34518[(2)] = null);

(statearr_33281_34518[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (27))){
var inst_32898 = (state_33239[(21)]);
var inst_32901 = cljs.core.ex_data(inst_32898);
var inst_32902 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32901);
var inst_32903 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32902,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33239__$1 = state_33239;
var statearr_33282_34521 = state_33239__$1;
(statearr_33282_34521[(2)] = inst_32903);

(statearr_33282_34521[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (1))){
var state_33239__$1 = state_33239;
var statearr_33283_34522 = state_33239__$1;
(statearr_33283_34522[(2)] = null);

(statearr_33283_34522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (69))){
var state_33239__$1 = state_33239;
var statearr_33284_34523 = state_33239__$1;
(statearr_33284_34523[(2)] = null);

(statearr_33284_34523[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (24))){
var state_33239__$1 = state_33239;
var statearr_33285_34524 = state_33239__$1;
(statearr_33285_34524[(2)] = null);

(statearr_33285_34524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (55))){
var inst_32963 = (state_33239[(22)]);
var inst_33070 = (state_33239[(2)]);
var inst_33077 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_32963);
var inst_33078 = cljs.core.seq(inst_33077);
var inst_33079 = inst_33078;
var inst_33080 = null;
var inst_33081 = (0);
var inst_33082 = (0);
var state_33239__$1 = (function (){var statearr_33286 = state_33239;
(statearr_33286[(23)] = inst_33070);

(statearr_33286[(13)] = inst_33079);

(statearr_33286[(24)] = inst_33080);

(statearr_33286[(25)] = inst_33081);

(statearr_33286[(26)] = inst_33082);

return statearr_33286;
})();
var statearr_33287_34527 = state_33239__$1;
(statearr_33287_34527[(2)] = null);

(statearr_33287_34527[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (85))){
var inst_33186 = (state_33239[(16)]);
var inst_33188 = (state_33239[(27)]);
var inst_33186__$1 = (state_33239[(2)]);
var inst_33188__$1 = (inst_33186__$1 instanceof cljs.core.ExceptionInfo);
var state_33239__$1 = (function (){var statearr_33288 = state_33239;
(statearr_33288[(16)] = inst_33186__$1);

(statearr_33288[(27)] = inst_33188__$1);

return statearr_33288;
})();
if(cljs.core.truth_(inst_33188__$1)){
var statearr_33289_34539 = state_33239__$1;
(statearr_33289_34539[(1)] = (86));

} else {
var statearr_33290_34540 = state_33239__$1;
(statearr_33290_34540[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (39))){
var inst_32947 = (state_33239[(28)]);
var inst_32950 = cljs.core.ex_data(inst_32947);
var inst_32951 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32950);
var inst_32952 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32951,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33239__$1 = state_33239;
var statearr_33291_34541 = state_33239__$1;
(statearr_33291_34541[(2)] = inst_32952);

(statearr_33291_34541[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (88))){
var inst_33197 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
if(cljs.core.truth_(inst_33197)){
var statearr_33292_34544 = state_33239__$1;
(statearr_33292_34544[(1)] = (89));

} else {
var statearr_33293_34545 = state_33239__$1;
(statearr_33293_34545[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (46))){
var inst_33006 = cljs.core.PersistentVector.EMPTY;
var state_33239__$1 = state_33239;
var statearr_33294_34546 = state_33239__$1;
(statearr_33294_34546[(2)] = inst_33006);

(statearr_33294_34546[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (4))){
var inst_32846 = (state_33239[(2)]);
var inst_32847 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32848 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32846);
var inst_32849 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32848];
var inst_32850 = cljs.core.PersistentHashMap.fromArrays(inst_32847,inst_32849);
var inst_32851 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32850);
var state_33239__$1 = state_33239;
var statearr_33296_34549 = state_33239__$1;
(statearr_33296_34549[(2)] = inst_32851);

(statearr_33296_34549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (77))){
var state_33239__$1 = state_33239;
var statearr_33297_34550 = state_33239__$1;
(statearr_33297_34550[(2)] = null);

(statearr_33297_34550[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (95))){
var _ = (function (){var statearr_33298 = state_33239;
(statearr_33298[(4)] = cljs.core.rest((state_33239[(4)])));

return statearr_33298;
})();
var state_33239__$1 = state_33239;
var ex33295 = (state_33239__$1[(2)]);
var statearr_33299_34555 = state_33239__$1;
(statearr_33299_34555[(5)] = ex33295);


if((ex33295 instanceof Error)){
var statearr_33300_34557 = state_33239__$1;
(statearr_33300_34557[(1)] = (94));

(statearr_33300_34557[(5)] = null);

} else {
throw ex33295;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (54))){
var inst_33028 = (state_33239[(11)]);
var inst_33027 = (state_33239[(10)]);
var inst_33030 = (inst_33028 < inst_33027);
var inst_33031 = inst_33030;
var state_33239__$1 = state_33239;
if(cljs.core.truth_(inst_33031)){
var statearr_33301_34563 = state_33239__$1;
(statearr_33301_34563[(1)] = (56));

} else {
var statearr_33302_34565 = state_33239__$1;
(statearr_33302_34565[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (92))){
var inst_33205 = (state_33239[(29)]);
var _ = (function (){var statearr_33303 = state_33239;
(statearr_33303[(4)] = cljs.core.cons((95),(state_33239[(4)])));

return statearr_33303;
})();
var inst_33213 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_33205,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_33304 = state_33239;
(statearr_33304[(4)] = cljs.core.rest((state_33239[(4)])));

return statearr_33304;
})();
var state_33239__$1 = state_33239;
var statearr_33305_34577 = state_33239__$1;
(statearr_33305_34577[(2)] = inst_33213);

(statearr_33305_34577[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (15))){
var inst_32916 = (state_33239[(2)]);
var _ = (function (){var statearr_33306 = state_33239;
(statearr_33306[(4)] = cljs.core.rest((state_33239[(4)])));

return statearr_33306;
})();
var state_33239__$1 = state_33239;
var statearr_33307_34587 = state_33239__$1;
(statearr_33307_34587[(2)] = inst_32916);

(statearr_33307_34587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (48))){
var inst_32985 = (state_33239[(30)]);
var inst_32992 = cljs.core.seq(inst_32985);
var inst_32993 = cljs.core.first(inst_32992);
var inst_32994 = cljs.core.next(inst_32992);
var state_33239__$1 = (function (){var statearr_33308 = state_33239;
(statearr_33308[(31)] = inst_32994);

return statearr_33308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33239__$1,(50),inst_32993);
} else {
if((state_val_33240 === (50))){
var inst_32986 = (state_33239[(32)]);
var inst_32994 = (state_33239[(31)]);
var inst_32996 = (state_33239[(2)]);
var inst_32997 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32986,inst_32996);
var state_33239__$1 = (function (){var statearr_33311 = state_33239;
(statearr_33311[(33)] = inst_32997);

return statearr_33311;
})();
if(cljs.core.truth_(inst_32994)){
var statearr_33316_34599 = state_33239__$1;
(statearr_33316_34599[(1)] = (51));

} else {
var statearr_33317_34601 = state_33239__$1;
(statearr_33317_34601[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (75))){
var inst_33177 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33320_34605 = state_33239__$1;
(statearr_33320_34605[(2)] = inst_33177);

(statearr_33320_34605[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (21))){
var inst_32876 = (state_33239[(17)]);
var state_33239__$1 = state_33239;
var statearr_33321_34606 = state_33239__$1;
(statearr_33321_34606[(2)] = inst_32876);

(statearr_33321_34606[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (31))){
var inst_32898 = (state_33239[(21)]);
var state_33239__$1 = state_33239;
var statearr_33324_34609 = state_33239__$1;
(statearr_33324_34609[(2)] = inst_32898);

(statearr_33324_34609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (32))){
var inst_32911 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33327_34618 = state_33239__$1;
(statearr_33327_34618[(2)] = inst_32911);

(statearr_33327_34618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (40))){
var inst_32948 = (state_33239[(34)]);
var state_33239__$1 = state_33239;
var statearr_33330_34628 = state_33239__$1;
(statearr_33330_34628[(2)] = inst_32948);

(statearr_33330_34628[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (91))){
var inst_33202 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33331_34630 = state_33239__$1;
(statearr_33331_34630[(2)] = inst_33202);

(statearr_33331_34630[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (56))){
var inst_33026 = (state_33239[(9)]);
var inst_33028 = (state_33239[(11)]);
var inst_33033 = (state_33239[(15)]);
var inst_33033__$1 = cljs.core._nth(inst_33026,inst_33028);
var state_33239__$1 = (function (){var statearr_33334 = state_33239;
(statearr_33334[(15)] = inst_33033__$1);

return statearr_33334;
})();
if(cljs.core.truth_(inst_33033__$1)){
var statearr_33335_34637 = state_33239__$1;
(statearr_33335_34637[(1)] = (59));

} else {
var statearr_33336_34638 = state_33239__$1;
(statearr_33336_34638[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (33))){
var inst_32919 = (state_33239[(35)]);
var _ = (function (){var statearr_33337 = state_33239;
(statearr_33337[(4)] = cljs.core.cons((35),(state_33239[(4)])));

return statearr_33337;
})();
var ___$1 = (function (){var statearr_33338 = state_33239;
(statearr_33338[(4)] = cljs.core.cons((37),(state_33239[(4)])));

return statearr_33338;
})();
var inst_32940 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_32941 = [true];
var inst_32942 = cljs.core.PersistentHashMap.fromArrays(inst_32940,inst_32941);
var inst_32943 = cljs.core.clj__GT_js(inst_32942);
var inst_32944 = bb_web_ds_tools.runtime.webr.capture_r(inst_32919,code,inst_32943);
var inst_32945 = cljs.core.async.interop.p__GT_c(inst_32944);
var state_33239__$1 = state_33239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33239__$1,(38),inst_32945);
} else {
if((state_val_33240 === (13))){
var inst_32864 = (state_33239[(36)]);
var inst_32874 = cljs.core.async.interop.p__GT_c(inst_32864);
var state_33239__$1 = state_33239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33239__$1,(16),inst_32874);
} else {
if((state_val_33240 === (22))){
var inst_32889 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33343_34639 = state_33239__$1;
(statearr_33343_34639[(2)] = inst_32889);

(statearr_33343_34639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (90))){
var inst_33186 = (state_33239[(16)]);
var state_33239__$1 = state_33239;
var statearr_33344_34642 = state_33239__$1;
(statearr_33344_34642[(2)] = inst_33186);

(statearr_33344_34642[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (36))){
var inst_32925 = (state_33239[(2)]);
var inst_32926 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32927 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32925);
var inst_32928 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32927];
var inst_32929 = cljs.core.PersistentHashMap.fromArrays(inst_32926,inst_32928);
var inst_32930 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32929);
var state_33239__$1 = state_33239;
var statearr_33349_34643 = state_33239__$1;
(statearr_33349_34643[(2)] = inst_32930);

(statearr_33349_34643[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (41))){
var inst_32955 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
if(cljs.core.truth_(inst_32955)){
var statearr_33350_34646 = state_33239__$1;
(statearr_33350_34646[(1)] = (42));

} else {
var statearr_33351_34647 = state_33239__$1;
(statearr_33351_34647[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (89))){
var inst_33186 = (state_33239[(16)]);
var inst_33199 = (function(){throw inst_33186})();
var state_33239__$1 = state_33239;
var statearr_33355_34648 = state_33239__$1;
(statearr_33355_34648[(2)] = inst_33199);

(statearr_33355_34648[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (43))){
var inst_32947 = (state_33239[(28)]);
var state_33239__$1 = state_33239;
var statearr_33356_34649 = state_33239__$1;
(statearr_33356_34649[(2)] = inst_32947);

(statearr_33356_34649[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (61))){
var inst_33028 = (state_33239[(11)]);
var inst_33025 = (state_33239[(8)]);
var inst_33026 = (state_33239[(9)]);
var inst_33027 = (state_33239[(10)]);
var inst_33038 = (state_33239[(2)]);
var inst_33039 = (inst_33028 + (1));
var tmp33352 = inst_33025;
var tmp33353 = inst_33026;
var tmp33354 = inst_33027;
var inst_33025__$1 = tmp33352;
var inst_33026__$1 = tmp33353;
var inst_33027__$1 = tmp33354;
var inst_33028__$1 = inst_33039;
var state_33239__$1 = (function (){var statearr_33359 = state_33239;
(statearr_33359[(37)] = inst_33038);

(statearr_33359[(8)] = inst_33025__$1);

(statearr_33359[(9)] = inst_33026__$1);

(statearr_33359[(10)] = inst_33027__$1);

(statearr_33359[(11)] = inst_33028__$1);

return statearr_33359;
})();
var statearr_33360_34654 = state_33239__$1;
(statearr_33360_34654[(2)] = null);

(statearr_33360_34654[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (29))){
var inst_32906 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
if(cljs.core.truth_(inst_32906)){
var statearr_33361_34655 = state_33239__$1;
(statearr_33361_34655[(1)] = (30));

} else {
var statearr_33362_34657 = state_33239__$1;
(statearr_33362_34657[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (44))){
var inst_32966 = (state_33239[(38)]);
var inst_32960 = (state_33239[(2)]);
var inst_32961 = bb_web_ds_tools.runtime.webr.get_result_props(inst_32960);
var inst_32962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32961,(0),null);
var inst_32963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32961,(1),null);
var inst_32964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32961,(2),null);
var inst_32965 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_32962);
var inst_32966__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,inst_32965);
var inst_32967 = cljs.core.seq(inst_32966__$1);
var state_33239__$1 = (function (){var statearr_33363 = state_33239;
(statearr_33363[(22)] = inst_32963);

(statearr_33363[(18)] = inst_32964);

(statearr_33363[(38)] = inst_32966__$1);

return statearr_33363;
})();
if(inst_32967){
var statearr_33364_34660 = state_33239__$1;
(statearr_33364_34660[(1)] = (45));

} else {
var statearr_33365_34661 = state_33239__$1;
(statearr_33365_34661[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (93))){
var inst_33216 = (state_33239[(2)]);
var inst_33217 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_33218 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_33216];
var inst_33219 = cljs.core.PersistentHashMap.fromArrays(inst_33217,inst_33218);
var inst_33220 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33219);
var _ = (function (){var statearr_33366 = state_33239;
(statearr_33366[(4)] = cljs.core.rest((state_33239[(4)])));

return statearr_33366;
})();
var state_33239__$1 = state_33239;
var statearr_33367_34664 = state_33239__$1;
(statearr_33367_34664[(2)] = inst_33220);

(statearr_33367_34664[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (6))){
var inst_32862 = (state_33239[(39)]);
var inst_32864 = (new inst_32862());
var state_33239__$1 = (function (){var statearr_33369 = state_33239;
(statearr_33369[(36)] = inst_32864);

return statearr_33369;
})();
var statearr_33371_34666 = state_33239__$1;
(statearr_33371_34666[(2)] = null);

(statearr_33371_34666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (28))){
var inst_32899 = (state_33239[(40)]);
var state_33239__$1 = state_33239;
var statearr_33373_34668 = state_33239__$1;
(statearr_33373_34668[(2)] = inst_32899);

(statearr_33373_34668[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (64))){
var inst_33066 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33377_34671 = state_33239__$1;
(statearr_33377_34671[(2)] = inst_33066);

(statearr_33377_34671[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (51))){
var inst_32994 = (state_33239[(31)]);
var inst_32997 = (state_33239[(33)]);
var inst_32985 = inst_32994;
var inst_32986 = inst_32997;
var state_33239__$1 = (function (){var statearr_33379 = state_33239;
(statearr_33379[(30)] = inst_32985);

(statearr_33379[(32)] = inst_32986);

return statearr_33379;
})();
var statearr_33380_34672 = state_33239__$1;
(statearr_33380_34672[(2)] = null);

(statearr_33380_34672[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (25))){
var inst_32864 = (state_33239[(36)]);
var inst_32914 = (state_33239[(2)]);
var state_33239__$1 = (function (){var statearr_33383 = state_33239;
(statearr_33383[(41)] = inst_32914);

return statearr_33383;
})();
var statearr_33385_34675 = state_33239__$1;
(statearr_33385_34675[(2)] = inst_32864);

(statearr_33385_34675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (34))){
var inst_33223 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33386_34677 = state_33239__$1;
(statearr_33386_34677[(2)] = inst_33223);

(statearr_33386_34677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (17))){
var inst_32876 = (state_33239[(17)]);
var inst_32879 = cljs.core.ex_data(inst_32876);
var inst_32880 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32879);
var inst_32881 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32880,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33239__$1 = state_33239;
var statearr_33388_34679 = state_33239__$1;
(statearr_33388_34679[(2)] = inst_32881);

(statearr_33388_34679[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (3))){
var inst_33231 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33239__$1,inst_33231);
} else {
if((state_val_33240 === (12))){
var _ = (function (){var statearr_33389 = state_33239;
(statearr_33389[(4)] = cljs.core.rest((state_33239[(4)])));

return statearr_33389;
})();
var state_33239__$1 = state_33239;
var ex33387 = (state_33239__$1[(2)]);
var statearr_33390_34682 = state_33239__$1;
(statearr_33390_34682[(5)] = ex33387);


var statearr_33391_34683 = state_33239__$1;
(statearr_33391_34683[(1)] = (11));

(statearr_33391_34683[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (2))){
var inst_32862 = (state_33239[(39)]);
var _ = (function (){var statearr_33393 = state_33239;
(statearr_33393[(4)] = cljs.core.cons((5),(state_33239[(4)])));

return statearr_33393;
})();
var inst_32857 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32858 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_32859 = cljs.core.PersistentHashMap.fromArrays(inst_32857,inst_32858);
var inst_32860 = bb_web_ds_tools.runtime.webr.portal_submit(inst_32859);
var inst_32861 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_32862__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(inst_32861);
var state_33239__$1 = (function (){var statearr_33394 = state_33239;
(statearr_33394[(42)] = inst_32860);

(statearr_33394[(39)] = inst_32862__$1);

return statearr_33394;
})();
if(cljs.core.truth_(inst_32862__$1)){
var statearr_33396_34686 = state_33239__$1;
(statearr_33396_34686[(1)] = (6));

} else {
var statearr_33397_34687 = state_33239__$1;
(statearr_33397_34687[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (66))){
var inst_33042 = (state_33239[(7)]);
var inst_33052 = (state_33239[(43)]);
var inst_33052__$1 = cljs.core.first(inst_33042);
var state_33239__$1 = (function (){var statearr_33398 = state_33239;
(statearr_33398[(43)] = inst_33052__$1);

return statearr_33398;
})();
if(cljs.core.truth_(inst_33052__$1)){
var statearr_33399_34690 = state_33239__$1;
(statearr_33399_34690[(1)] = (68));

} else {
var statearr_33400_34691 = state_33239__$1;
(statearr_33400_34691[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (23))){
var inst_32864 = (state_33239[(36)]);
var inst_32895 = bb_web_ds_tools.runtime.webr.init_obj(inst_32864);
var inst_32896 = cljs.core.async.interop.p__GT_c(inst_32895);
var state_33239__$1 = state_33239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33239__$1,(26),inst_32896);
} else {
if((state_val_33240 === (47))){
var inst_33009 = (state_33239[(2)]);
var inst_33011 = [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),new cljs.core.Keyword(null,"container-height","container-height",-577782714),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110)];
var inst_33013 = [(720),(800),0.72];
var inst_33014 = cljs.core.PersistentHashMap.fromArrays(inst_33011,inst_33013);
var inst_33015 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"webr","webr",-966893065),inst_33014);
var inst_33016 = new cljs.core.Keyword(null,"container-width","container-width",-1461172864).cljs$core$IFn$_invoke$arity$1(inst_33015);
var inst_33017 = new cljs.core.Keyword(null,"container-height","container-height",-577782714).cljs$core$IFn$_invoke$arity$1(inst_33015);
var inst_33018 = new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110).cljs$core$IFn$_invoke$arity$1(inst_33015);
var inst_33024 = cljs.core.seq(inst_33009);
var inst_33025 = inst_33024;
var inst_33026 = null;
var inst_33027 = (0);
var inst_33028 = (0);
var state_33239__$1 = (function (){var statearr_33401 = state_33239;
(statearr_33401[(44)] = inst_33016);

(statearr_33401[(45)] = inst_33017);

(statearr_33401[(46)] = inst_33018);

(statearr_33401[(8)] = inst_33025);

(statearr_33401[(9)] = inst_33026);

(statearr_33401[(10)] = inst_33027);

(statearr_33401[(11)] = inst_33028);

return statearr_33401;
})();
var statearr_33403_34696 = state_33239__$1;
(statearr_33403_34696[(2)] = null);

(statearr_33403_34696[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (35))){
var inst_32919 = (state_33239[(35)]);
var _ = (function (){var statearr_33404 = state_33239;
(statearr_33404[(4)] = cljs.core.rest((state_33239[(4)])));

return statearr_33404;
})();
var inst_32921 = (state_33239[(2)]);
var inst_32922 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_32919);
var ___$1 = (function (){var temp__5825__auto__ = (state_33239[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23254__auto__ = temp__5825__auto__;
throw e__23254__auto__;
} else {
return null;
}
})();
var state_33239__$1 = (function (){var statearr_33406 = state_33239;
(statearr_33406[(47)] = inst_32922);

return statearr_33406;
})();
var statearr_33407_34700 = state_33239__$1;
(statearr_33407_34700[(2)] = inst_32921);

(statearr_33407_34700[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (82))){
var inst_33180 = (state_33239[(19)]);
var inst_33184 = cljs.core.async.interop.p__GT_c(inst_33180);
var state_33239__$1 = state_33239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33239__$1,(85),inst_33184);
} else {
if((state_val_33240 === (76))){
var inst_33122 = (state_33239[(14)]);
var inst_33124 = cljs.core.chunked_seq_QMARK_(inst_33122);
var state_33239__$1 = state_33239;
if(inst_33124){
var statearr_33410_34704 = state_33239__$1;
(statearr_33410_34704[(1)] = (79));

} else {
var statearr_33411_34705 = state_33239__$1;
(statearr_33411_34705[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (19))){
var inst_32884 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
if(cljs.core.truth_(inst_32884)){
var statearr_33412_34708 = state_33239__$1;
(statearr_33412_34708[(1)] = (20));

} else {
var statearr_33413_34709 = state_33239__$1;
(statearr_33413_34709[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (57))){
var inst_33025 = (state_33239[(8)]);
var inst_33042 = (state_33239[(7)]);
var inst_33042__$1 = cljs.core.seq(inst_33025);
var state_33239__$1 = (function (){var statearr_33414 = state_33239;
(statearr_33414[(7)] = inst_33042__$1);

return statearr_33414;
})();
if(inst_33042__$1){
var statearr_33415_34711 = state_33239__$1;
(statearr_33415_34711[(1)] = (62));

} else {
var statearr_33417_34713 = state_33239__$1;
(statearr_33417_34713[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (68))){
var inst_33052 = (state_33239[(43)]);
var inst_33056 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33052);
var state_33239__$1 = state_33239;
var statearr_33420_34714 = state_33239__$1;
(statearr_33420_34714[(2)] = inst_33056);

(statearr_33420_34714[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (11))){
var inst_32865 = (state_33239[(2)]);
var inst_32866 = (function(){throw inst_32865})();
var state_33239__$1 = state_33239;
var statearr_33422_34716 = state_33239__$1;
(statearr_33422_34716[(2)] = inst_32866);

(statearr_33422_34716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (9))){
var inst_32864 = (state_33239[(36)]);
var _ = (function (){var statearr_33423 = state_33239;
(statearr_33423[(4)] = cljs.core.cons((12),(state_33239[(4)])));

return statearr_33423;
})();
var inst_32872 = (inst_32864 instanceof Promise);
var state_33239__$1 = state_33239;
if(cljs.core.truth_(inst_32872)){
var statearr_33424_34721 = state_33239__$1;
(statearr_33424_34721[(1)] = (13));

} else {
var statearr_33425_34722 = state_33239__$1;
(statearr_33425_34722[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (5))){
var _ = (function (){var statearr_33426 = state_33239;
(statearr_33426[(4)] = cljs.core.rest((state_33239[(4)])));

return statearr_33426;
})();
var state_33239__$1 = state_33239;
var ex33421 = (state_33239__$1[(2)]);
var statearr_33429_34724 = state_33239__$1;
(statearr_33429_34724[(5)] = ex33421);


var statearr_33432_34725 = state_33239__$1;
(statearr_33432_34725[(1)] = (4));

(statearr_33432_34725[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (83))){
var inst_33180 = (state_33239[(19)]);
var state_33239__$1 = state_33239;
var statearr_33436_34726 = state_33239__$1;
(statearr_33436_34726[(2)] = inst_33180);

(statearr_33436_34726[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (14))){
var inst_32864 = (state_33239[(36)]);
var inst_32891 = inst_32864.init;
var inst_32892 = (inst_32891 == null);
var inst_32893 = cljs.core.not(inst_32892);
var state_33239__$1 = state_33239;
if(inst_32893){
var statearr_33439_34728 = state_33239__$1;
(statearr_33439_34728[(1)] = (23));

} else {
var statearr_33440_34730 = state_33239__$1;
(statearr_33440_34730[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (45))){
var inst_32966 = (state_33239[(38)]);
var inst_32978 = cljs.core.seq(inst_32966);
var inst_32979 = cljs.core.first(inst_32978);
var inst_32980 = cljs.core.next(inst_32978);
var inst_32981 = cljs.core.PersistentVector.EMPTY;
var inst_32985 = inst_32966;
var inst_32986 = inst_32981;
var state_33239__$1 = (function (){var statearr_33442 = state_33239;
(statearr_33442[(48)] = inst_32979);

(statearr_33442[(49)] = inst_32980);

(statearr_33442[(30)] = inst_32985);

(statearr_33442[(32)] = inst_32986);

return statearr_33442;
})();
var statearr_33443_34735 = state_33239__$1;
(statearr_33443_34735[(2)] = null);

(statearr_33443_34735[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (53))){
var inst_33002 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33448_34739 = state_33239__$1;
(statearr_33448_34739[(2)] = inst_33002);

(statearr_33448_34739[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (78))){
var inst_33175 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33453_34740 = state_33239__$1;
(statearr_33453_34740[(2)] = inst_33175);

(statearr_33453_34740[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (26))){
var inst_32898 = (state_33239[(21)]);
var inst_32899 = (state_33239[(40)]);
var inst_32898__$1 = (state_33239[(2)]);
var inst_32899__$1 = (inst_32898__$1 instanceof cljs.core.ExceptionInfo);
var state_33239__$1 = (function (){var statearr_33456 = state_33239;
(statearr_33456[(21)] = inst_32898__$1);

(statearr_33456[(40)] = inst_32899__$1);

return statearr_33456;
})();
if(cljs.core.truth_(inst_32899__$1)){
var statearr_33457_34741 = state_33239__$1;
(statearr_33457_34741[(1)] = (27));

} else {
var statearr_33458_34743 = state_33239__$1;
(statearr_33458_34743[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (16))){
var inst_32876 = (state_33239[(17)]);
var inst_32877 = (state_33239[(50)]);
var inst_32876__$1 = (state_33239[(2)]);
var inst_32877__$1 = (inst_32876__$1 instanceof cljs.core.ExceptionInfo);
var state_33239__$1 = (function (){var statearr_33463 = state_33239;
(statearr_33463[(17)] = inst_32876__$1);

(statearr_33463[(50)] = inst_32877__$1);

return statearr_33463;
})();
if(cljs.core.truth_(inst_32877__$1)){
var statearr_33467_34747 = state_33239__$1;
(statearr_33467_34747[(1)] = (17));

} else {
var statearr_33468_34750 = state_33239__$1;
(statearr_33468_34750[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (81))){
var inst_33172 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33476_34753 = state_33239__$1;
(statearr_33476_34753[(2)] = inst_33172);

(statearr_33476_34753[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (79))){
var inst_33122 = (state_33239[(14)]);
var inst_33127 = cljs.core.chunk_first(inst_33122);
var inst_33128 = cljs.core.chunk_rest(inst_33122);
var inst_33129 = cljs.core.count(inst_33127);
var inst_33079 = inst_33128;
var inst_33080 = inst_33127;
var inst_33081 = inst_33129;
var inst_33082 = (0);
var state_33239__$1 = (function (){var statearr_33490 = state_33239;
(statearr_33490[(13)] = inst_33079);

(statearr_33490[(24)] = inst_33080);

(statearr_33490[(25)] = inst_33081);

(statearr_33490[(26)] = inst_33082);

return statearr_33490;
})();
var statearr_33498_34755 = state_33239__$1;
(statearr_33498_34755[(2)] = null);

(statearr_33498_34755[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (38))){
var inst_32947 = (state_33239[(28)]);
var inst_32948 = (state_33239[(34)]);
var inst_32947__$1 = (state_33239[(2)]);
var inst_32948__$1 = (inst_32947__$1 instanceof cljs.core.ExceptionInfo);
var state_33239__$1 = (function (){var statearr_33505 = state_33239;
(statearr_33505[(28)] = inst_32947__$1);

(statearr_33505[(34)] = inst_32948__$1);

return statearr_33505;
})();
if(cljs.core.truth_(inst_32948__$1)){
var statearr_33514_34759 = state_33239__$1;
(statearr_33514_34759[(1)] = (39));

} else {
var statearr_33515_34760 = state_33239__$1;
(statearr_33515_34760[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (87))){
var inst_33188 = (state_33239[(27)]);
var state_33239__$1 = state_33239;
var statearr_33535_34764 = state_33239__$1;
(statearr_33535_34764[(2)] = inst_33188);

(statearr_33535_34764[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (30))){
var inst_32898 = (state_33239[(21)]);
var inst_32908 = (function(){throw inst_32898})();
var state_33239__$1 = state_33239;
var statearr_33537_34765 = state_33239__$1;
(statearr_33537_34765[(2)] = inst_32908);

(statearr_33537_34765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (73))){
var inst_33080 = (state_33239[(24)]);
var inst_33082 = (state_33239[(26)]);
var inst_33016 = (state_33239[(44)]);
var inst_33017 = (state_33239[(45)]);
var inst_33018 = (state_33239[(46)]);
var inst_33079 = (state_33239[(13)]);
var inst_33081 = (state_33239[(25)]);
var inst_33087 = cljs.core._nth(inst_33080,inst_33082);
var inst_33088 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_33087);
var inst_33089 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33090 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_33091 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_33092 = [inst_33016,inst_33017];
var inst_33093 = cljs.core.PersistentHashMap.fromArrays(inst_33091,inst_33092);
var inst_33094 = [inst_33093];
var inst_33095 = cljs.core.PersistentHashMap.fromArrays(inst_33090,inst_33094);
var inst_33096 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33097 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_33098 = bb_web_ds_tools.runtime.webr.get_width(inst_33087);
var inst_33099 = (inst_33098 * inst_33018);
var inst_33100 = (inst_33099 | (0));
var inst_33101 = bb_web_ds_tools.runtime.webr.get_height(inst_33087);
var inst_33102 = (inst_33101 * inst_33018);
var inst_33103 = (inst_33102 | (0));
var inst_33105 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_33106 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33088),")"].join('');
var inst_33107 = [inst_33106,"cover"];
var inst_33108 = cljs.core.PersistentHashMap.fromArrays(inst_33105,inst_33107);
var inst_33109 = [inst_33100,inst_33103,inst_33108];
var inst_33110 = cljs.core.PersistentHashMap.fromArrays(inst_33097,inst_33109);
var inst_33111 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_33110];
var inst_33112 = (new cljs.core.PersistentVector(null,2,(5),inst_33096,inst_33111,null));
var inst_33113 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_33095,inst_33112];
var inst_33114 = (new cljs.core.PersistentVector(null,3,(5),inst_33089,inst_33113,null));
var inst_33115 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33116 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_33114,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_33117 = (new cljs.core.PersistentVector(null,3,(5),inst_33115,inst_33116,null));
var inst_33118 = re_frame.core.dispatch(inst_33117);
var inst_33119 = (inst_33082 + (1));
var tmp33523 = inst_33081;
var tmp33524 = inst_33080;
var tmp33525 = inst_33079;
var inst_33079__$1 = tmp33525;
var inst_33080__$1 = tmp33524;
var inst_33081__$1 = tmp33523;
var inst_33082__$1 = inst_33119;
var state_33239__$1 = (function (){var statearr_33576 = state_33239;
(statearr_33576[(51)] = inst_33118);

(statearr_33576[(13)] = inst_33079__$1);

(statearr_33576[(24)] = inst_33080__$1);

(statearr_33576[(25)] = inst_33081__$1);

(statearr_33576[(26)] = inst_33082__$1);

return statearr_33576;
})();
var statearr_33586_34775 = state_33239__$1;
(statearr_33586_34775[(2)] = null);

(statearr_33586_34775[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (10))){
var inst_32919 = (state_33239[(2)]);
var state_33239__$1 = (function (){var statearr_33599 = state_33239;
(statearr_33599[(35)] = inst_32919);

return statearr_33599;
})();
var statearr_33601_34781 = state_33239__$1;
(statearr_33601_34781[(2)] = null);

(statearr_33601_34781[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (18))){
var inst_32877 = (state_33239[(50)]);
var state_33239__$1 = state_33239;
var statearr_33603_34786 = state_33239__$1;
(statearr_33603_34786[(2)] = inst_32877);

(statearr_33603_34786[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (52))){
var inst_32997 = (state_33239[(33)]);
var state_33239__$1 = state_33239;
var statearr_33626_34788 = state_33239__$1;
(statearr_33626_34788[(2)] = inst_32997);

(statearr_33626_34788[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (67))){
var inst_33063 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33628_34791 = state_33239__$1;
(statearr_33628_34791[(2)] = inst_33063);

(statearr_33628_34791[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (71))){
var inst_33082 = (state_33239[(26)]);
var inst_33081 = (state_33239[(25)]);
var inst_33084 = (inst_33082 < inst_33081);
var inst_33085 = inst_33084;
var state_33239__$1 = state_33239;
if(cljs.core.truth_(inst_33085)){
var statearr_33654_34795 = state_33239__$1;
(statearr_33654_34795[(1)] = (73));

} else {
var statearr_33655_34796 = state_33239__$1;
(statearr_33655_34796[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (42))){
var inst_32947 = (state_33239[(28)]);
var inst_32957 = (function(){throw inst_32947})();
var state_33239__$1 = state_33239;
var statearr_33658_34797 = state_33239__$1;
(statearr_33658_34797[(2)] = inst_32957);

(statearr_33658_34797[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (80))){
var inst_33122 = (state_33239[(14)]);
var inst_33016 = (state_33239[(44)]);
var inst_33017 = (state_33239[(45)]);
var inst_33018 = (state_33239[(46)]);
var inst_33132 = cljs.core.first(inst_33122);
var inst_33133 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_33132);
var inst_33134 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33137 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_33139 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_33140 = [inst_33016,inst_33017];
var inst_33141 = cljs.core.PersistentHashMap.fromArrays(inst_33139,inst_33140);
var inst_33142 = [inst_33141];
var inst_33143 = cljs.core.PersistentHashMap.fromArrays(inst_33137,inst_33142);
var inst_33144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33145 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_33146 = bb_web_ds_tools.runtime.webr.get_width(inst_33132);
var inst_33147 = (inst_33146 * inst_33018);
var inst_33148 = (inst_33147 | (0));
var inst_33149 = bb_web_ds_tools.runtime.webr.get_height(inst_33132);
var inst_33150 = (inst_33149 * inst_33018);
var inst_33151 = (inst_33150 | (0));
var inst_33152 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_33155 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33133),")"].join('');
var inst_33156 = [inst_33155,"cover"];
var inst_33157 = cljs.core.PersistentHashMap.fromArrays(inst_33152,inst_33156);
var inst_33158 = [inst_33148,inst_33151,inst_33157];
var inst_33159 = cljs.core.PersistentHashMap.fromArrays(inst_33145,inst_33158);
var inst_33160 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_33159];
var inst_33161 = (new cljs.core.PersistentVector(null,2,(5),inst_33144,inst_33160,null));
var inst_33162 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_33143,inst_33161];
var inst_33163 = (new cljs.core.PersistentVector(null,3,(5),inst_33134,inst_33162,null));
var inst_33165 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33166 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_33163,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_33167 = (new cljs.core.PersistentVector(null,3,(5),inst_33165,inst_33166,null));
var inst_33168 = re_frame.core.dispatch(inst_33167);
var inst_33169 = cljs.core.next(inst_33122);
var inst_33079 = inst_33169;
var inst_33080 = null;
var inst_33081 = (0);
var inst_33082 = (0);
var state_33239__$1 = (function (){var statearr_33700 = state_33239;
(statearr_33700[(52)] = inst_33168);

(statearr_33700[(13)] = inst_33079);

(statearr_33700[(24)] = inst_33080);

(statearr_33700[(25)] = inst_33081);

(statearr_33700[(26)] = inst_33082);

return statearr_33700;
})();
var statearr_33717_34809 = state_33239__$1;
(statearr_33717_34809[(2)] = null);

(statearr_33717_34809[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (37))){
var _ = (function (){var statearr_33718 = state_33239;
(statearr_33718[(4)] = cljs.core.rest((state_33239[(4)])));

return statearr_33718;
})();
var state_33239__$1 = state_33239;
var ex33656 = (state_33239__$1[(2)]);
var statearr_33720_34813 = state_33239__$1;
(statearr_33720_34813[(5)] = ex33656);


var statearr_33721_34814 = state_33239__$1;
(statearr_33721_34814[(1)] = (36));

(statearr_33721_34814[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (63))){
var state_33239__$1 = state_33239;
var statearr_33736_34817 = state_33239__$1;
(statearr_33736_34817[(2)] = null);

(statearr_33736_34817[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (94))){
var inst_32964 = (state_33239[(18)]);
var inst_33206 = (state_33239[(2)]);
var inst_33207 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32964);
var state_33239__$1 = (function (){var statearr_33754 = state_33239;
(statearr_33754[(53)] = inst_33206);

return statearr_33754;
})();
var statearr_33755_34821 = state_33239__$1;
(statearr_33755_34821[(2)] = inst_33207);

(statearr_33755_34821[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (8))){
var inst_33228 = (state_33239[(2)]);
var _ = (function (){var statearr_33756 = state_33239;
(statearr_33756[(4)] = cljs.core.rest((state_33239[(4)])));

return statearr_33756;
})();
var state_33239__$1 = state_33239;
var statearr_33757_34822 = state_33239__$1;
(statearr_33757_34822[(2)] = inst_33228);

(statearr_33757_34822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (49))){
var inst_33004 = (state_33239[(2)]);
var state_33239__$1 = state_33239;
var statearr_33758_34823 = state_33239__$1;
(statearr_33758_34823[(2)] = inst_33004);

(statearr_33758_34823[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33240 === (84))){
var inst_33205 = (state_33239[(2)]);
var state_33239__$1 = (function (){var statearr_33760 = state_33239;
(statearr_33760[(29)] = inst_33205);

return statearr_33760;
})();
var statearr_33761_34826 = state_33239__$1;
(statearr_33761_34826[(2)] = null);

(statearr_33761_34826[(1)] = (92));


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
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0 = (function (){
var statearr_33795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33795[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24022__auto__);

(statearr_33795[(1)] = (1));

return statearr_33795;
});
var bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1 = (function (state_33239){
while(true){
var ret_value__24023__auto__ = (function (){try{while(true){
var result__24024__auto__ = switch__24021__auto__(state_33239);
if(cljs.core.keyword_identical_QMARK_(result__24024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24024__auto__;
}
break;
}
}catch (e33797){var ex__24025__auto__ = e33797;
var statearr_33798_34834 = state_33239;
(statearr_33798_34834[(2)] = ex__24025__auto__);


if(cljs.core.seq((state_33239[(4)]))){
var statearr_33799_34835 = state_33239;
(statearr_33799_34835[(1)] = cljs.core.first((state_33239[(4)])));

} else {
throw ex__24025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34836 = state_33239;
state_33239 = G__34836;
continue;
} else {
return ret_value__24023__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__ = function(state_33239){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1.call(this,state_33239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24022__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24022__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24022__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24022__auto__;
})()
})();
var state__24070__auto__ = (function (){var statearr_33816 = f__24069__auto__();
(statearr_33816[(6)] = c__24068__auto__);

return statearr_33816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24070__auto__);
}));

return c__24068__auto__;
} else {
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null));
}
}));

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$applyTo = (function (seq32840){
var G__32841 = cljs.core.first(seq32840);
var seq32840__$1 = cljs.core.next(seq32840);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32841,seq32840__$1);
}));


//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
