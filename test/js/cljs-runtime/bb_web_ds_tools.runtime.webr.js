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
var len__5749__auto___50779 = arguments.length;
var i__5750__auto___50780 = (0);
while(true){
if((i__5750__auto___50780 < len__5749__auto___50779)){
args__5755__auto__.push((arguments[i__5750__auto___50780]));

var G__50781 = (i__5750__auto___50780 + (1));
i__5750__auto___50780 = G__50781;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__49704,p__49705){
var map__49706 = p__49704;
var map__49706__$1 = cljs.core.__destructure_map(map__49706);
var value = map__49706__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49706__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__49707 = p__49705;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49707,(0),null);
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
if(cljs.core.truth_((function (){var G__49714 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__49713 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__49713.cljs$core$IFn$_invoke$arity$1 ? fexpr__49713.cljs$core$IFn$_invoke$arity$1(G__49714) : fexpr__49713.call(null,G__49714));
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
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_49718){
var state_val_49719 = (state_49718[(1)]);
if((state_val_49719 === (1))){
var state_49718__$1 = state_49718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49718__$1,(2),bb_web_ds_tools.runtime.webr.input_buffer,text);
} else {
if((state_val_49719 === (2))){
var inst_49716 = (state_49718[(2)]);
var state_49718__$1 = state_49718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49718__$1,inst_49716);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0 = (function (){
var statearr_49720 = [null,null,null,null,null,null,null];
(statearr_49720[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32396__auto__);

(statearr_49720[(1)] = (1));

return statearr_49720;
});
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1 = (function (state_49718){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_49718);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e49721){var ex__32399__auto__ = e49721;
var statearr_49722_50787 = state_49718;
(statearr_49722_50787[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49718[(4)]))){
var statearr_49723_50788 = state_49718;
(statearr_49723_50788[(1)] = cljs.core.first((state_49718[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50789 = state_49718;
state_49718 = G__50789;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = function(state_49718){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1.call(this,state_49718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_49724 = f__32477__auto__();
(statearr_49724[(6)] = c__32476__auto__);

return statearr_49724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),viewer__$1], null));

}
}
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq49695){
var G__49696 = cljs.core.first(seq49695);
var seq49695__$1 = cljs.core.next(seq49695);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49696,seq49695__$1);
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
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_49793){
var state_val_49794 = (state_49793[(1)]);
if((state_val_49794 === (7))){
var inst_49789 = (state_49793[(2)]);
var state_49793__$1 = state_49793;
var statearr_49795_50798 = state_49793__$1;
(statearr_49795_50798[(2)] = inst_49789);

(statearr_49795_50798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (20))){
var inst_49769 = (state_49793[(7)]);
var inst_49773 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49769);
var state_49793__$1 = state_49793;
var statearr_49796_50800 = state_49793__$1;
(statearr_49796_50800[(2)] = inst_49773);

(statearr_49796_50800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (1))){
var inst_49725 = (state_49793[(8)]);
var inst_49725__$1 = msg.type;
var inst_49726 = msg.data;
var inst_49727 = ["stderr",null,"stdout",null];
var inst_49728 = (new cljs.core.PersistentArrayMap(null,2,inst_49727,null));
var inst_49729 = (new cljs.core.PersistentHashSet(null,inst_49728,null));
var inst_49730 = (inst_49729.cljs$core$IFn$_invoke$arity$1 ? inst_49729.cljs$core$IFn$_invoke$arity$1(inst_49725__$1) : inst_49729.call(null,inst_49725__$1));
var state_49793__$1 = (function (){var statearr_49797 = state_49793;
(statearr_49797[(8)] = inst_49725__$1);

(statearr_49797[(9)] = inst_49726);

return statearr_49797;
})();
if(cljs.core.truth_(inst_49730)){
var statearr_49798_50808 = state_49793__$1;
(statearr_49798_50808[(1)] = (2));

} else {
var statearr_49799_50809 = state_49793__$1;
(statearr_49799_50809[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (24))){
var inst_49787 = (state_49793[(2)]);
var state_49793__$1 = state_49793;
var statearr_49800_50811 = state_49793__$1;
(statearr_49800_50811[(2)] = inst_49787);

(statearr_49800_50811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (4))){
var inst_49791 = (state_49793[(2)]);
var state_49793__$1 = state_49793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49793__$1,inst_49791);
} else {
if((state_val_49794 === (15))){
var inst_49763 = (state_49793[(2)]);
var state_49793__$1 = state_49793;
if(cljs.core.truth_(inst_49763)){
var statearr_49801_50813 = state_49793__$1;
(statearr_49801_50813[(1)] = (16));

} else {
var statearr_49802_50814 = state_49793__$1;
(statearr_49802_50814[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (21))){
var inst_49725 = (state_49793[(8)]);
var inst_49775 = (state_49793[(2)]);
var inst_49776 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49777 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49725);
var inst_49778 = [inst_49777,inst_49775];
var inst_49779 = cljs.core.PersistentHashMap.fromArrays(inst_49776,inst_49778);
var _ = (function (){var statearr_49803 = state_49793;
(statearr_49803[(4)] = cljs.core.rest((state_49793[(4)])));

return statearr_49803;
})();
var state_49793__$1 = state_49793;
var statearr_49804_50817 = state_49793__$1;
(statearr_49804_50817[(2)] = inst_49779);

(statearr_49804_50817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (13))){
var inst_49755 = (state_49793[(10)]);
var inst_49758 = cljs.core.ex_data(inst_49755);
var inst_49759 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49758);
var inst_49760 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49759,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49793__$1 = state_49793;
var statearr_49805_50822 = state_49793__$1;
(statearr_49805_50822[(2)] = inst_49760);

(statearr_49805_50822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (22))){
var state_49793__$1 = state_49793;
var statearr_49807_50826 = state_49793__$1;
(statearr_49807_50826[(2)] = null);

(statearr_49807_50826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (6))){
var state_49793__$1 = state_49793;
var statearr_49808_50830 = state_49793__$1;
(statearr_49808_50830[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (17))){
var inst_49755 = (state_49793[(10)]);
var state_49793__$1 = state_49793;
var statearr_49811_50831 = state_49793__$1;
(statearr_49811_50831[(2)] = inst_49755);

(statearr_49811_50831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (3))){
var inst_49725 = (state_49793[(8)]);
var inst_49737 = ["message",null,"warning",null];
var inst_49738 = (new cljs.core.PersistentArrayMap(null,2,inst_49737,null));
var inst_49739 = (new cljs.core.PersistentHashSet(null,inst_49738,null));
var inst_49740 = (inst_49739.cljs$core$IFn$_invoke$arity$1 ? inst_49739.cljs$core$IFn$_invoke$arity$1(inst_49725) : inst_49739.call(null,inst_49725));
var state_49793__$1 = state_49793;
if(cljs.core.truth_(inst_49740)){
var statearr_49818_50838 = state_49793__$1;
(statearr_49818_50838[(1)] = (5));

} else {
var statearr_49819_50840 = state_49793__$1;
(statearr_49819_50840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (12))){
var inst_49755 = (state_49793[(10)]);
var inst_49756 = (state_49793[(11)]);
var inst_49755__$1 = (state_49793[(2)]);
var inst_49756__$1 = (inst_49755__$1 instanceof cljs.core.ExceptionInfo);
var state_49793__$1 = (function (){var statearr_49820 = state_49793;
(statearr_49820[(10)] = inst_49755__$1);

(statearr_49820[(11)] = inst_49756__$1);

return statearr_49820;
})();
if(cljs.core.truth_(inst_49756__$1)){
var statearr_49821_50844 = state_49793__$1;
(statearr_49821_50844[(1)] = (13));

} else {
var statearr_49822_50846 = state_49793__$1;
(statearr_49822_50846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (2))){
var inst_49725 = (state_49793[(8)]);
var inst_49726 = (state_49793[(9)]);
var inst_49732 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49733 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49725);
var inst_49734 = [inst_49733,inst_49726];
var inst_49735 = cljs.core.PersistentHashMap.fromArrays(inst_49732,inst_49734);
var state_49793__$1 = state_49793;
var statearr_49823_50848 = state_49793__$1;
(statearr_49823_50848[(2)] = inst_49735);

(statearr_49823_50848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (23))){
var state_49793__$1 = state_49793;
var statearr_49829_50849 = state_49793__$1;
(statearr_49829_50849[(2)] = null);

(statearr_49829_50849[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (19))){
var inst_49770 = (state_49793[(12)]);
var state_49793__$1 = state_49793;
var statearr_49830_50852 = state_49793__$1;
(statearr_49830_50852[(2)] = inst_49770);

(statearr_49830_50852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (11))){
var _ = (function (){var statearr_49831 = state_49793;
(statearr_49831[(4)] = cljs.core.rest((state_49793[(4)])));

return statearr_49831;
})();
var state_49793__$1 = state_49793;
var ex49825 = (state_49793__$1[(2)]);
var statearr_49832_50853 = state_49793__$1;
(statearr_49832_50853[(5)] = ex49825);


var statearr_49833_50854 = state_49793__$1;
(statearr_49833_50854[(1)] = (10));

(statearr_49833_50854[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (9))){
var inst_49782 = (state_49793[(2)]);
var state_49793__$1 = state_49793;
var statearr_49834_50855 = state_49793__$1;
(statearr_49834_50855[(2)] = inst_49782);

(statearr_49834_50855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (5))){
var state_49793__$1 = state_49793;
var statearr_49835_50856 = state_49793__$1;
(statearr_49835_50856[(2)] = null);

(statearr_49835_50856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (14))){
var inst_49756 = (state_49793[(11)]);
var state_49793__$1 = state_49793;
var statearr_49836_50857 = state_49793__$1;
(statearr_49836_50857[(2)] = inst_49756);

(statearr_49836_50857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (16))){
var inst_49755 = (state_49793[(10)]);
var inst_49765 = (function(){throw inst_49755})();
var state_49793__$1 = state_49793;
var statearr_49837_50858 = state_49793__$1;
(statearr_49837_50858[(2)] = inst_49765);

(statearr_49837_50858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (10))){
var inst_49725 = (state_49793[(8)]);
var inst_49742 = (state_49793[(2)]);
var inst_49743 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49744 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49725);
var inst_49745 = [inst_49744,"Error decoding message"];
var inst_49746 = cljs.core.PersistentHashMap.fromArrays(inst_49743,inst_49745);
var state_49793__$1 = (function (){var statearr_49838 = state_49793;
(statearr_49838[(13)] = inst_49742);

return statearr_49838;
})();
var statearr_49839_50859 = state_49793__$1;
(statearr_49839_50859[(2)] = inst_49746);

(statearr_49839_50859[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (18))){
var inst_49769 = (state_49793[(7)]);
var inst_49770 = (state_49793[(12)]);
var inst_49768 = (state_49793[(2)]);
var inst_49769__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49768,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_49770__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_49769__$1);
var state_49793__$1 = (function (){var statearr_49850 = state_49793;
(statearr_49850[(7)] = inst_49769__$1);

(statearr_49850[(12)] = inst_49770__$1);

return statearr_49850;
})();
if(cljs.core.truth_(inst_49770__$1)){
var statearr_49851_50860 = state_49793__$1;
(statearr_49851_50860[(1)] = (19));

} else {
var statearr_49854_50861 = state_49793__$1;
(statearr_49854_50861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (8))){
var inst_49726 = (state_49793[(9)]);
var _ = (function (){var statearr_49858 = state_49793;
(statearr_49858[(4)] = cljs.core.cons((11),(state_49793[(4)])));

return statearr_49858;
})();
var inst_49752 = bb_web_ds_tools.runtime.webr.to_js(inst_49726);
var inst_49753 = cljs.core.async.interop.p__GT_c(inst_49752);
var state_49793__$1 = state_49793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49793__$1,(12),inst_49753);
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
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto____0 = (function (){
var statearr_49859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49859[(0)] = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto__);

(statearr_49859[(1)] = (1));

return statearr_49859;
});
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto____1 = (function (state_49793){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_49793);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e49860){var ex__32399__auto__ = e49860;
var statearr_49861_50862 = state_49793;
(statearr_49861_50862[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49793[(4)]))){
var statearr_49862_50863 = state_49793;
(statearr_49862_50863[(1)] = cljs.core.first((state_49793[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50864 = state_49793;
state_49793 = G__50864;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto__ = function(state_49793){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto____1.call(this,state_49793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_49863 = f__32477__auto__();
(statearr_49863[(6)] = c__32476__auto__);

return statearr_49863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
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
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_49913){
var state_val_49914 = (state_49913[(1)]);
if((state_val_49914 === (7))){
var inst_49909 = (state_49913[(2)]);
var state_49913__$1 = state_49913;
var statearr_49915_50865 = state_49913__$1;
(statearr_49915_50865[(2)] = inst_49909);

(statearr_49915_50865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (1))){
var inst_49864 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_49913__$1 = state_49913;
if(cljs.core.truth_(inst_49864)){
var statearr_49916_50866 = state_49913__$1;
(statearr_49916_50866[(1)] = (2));

} else {
var statearr_49917_50867 = state_49913__$1;
(statearr_49917_50867[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (4))){
var inst_49911 = (state_49913[(2)]);
var state_49913__$1 = state_49913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49913__$1,inst_49911);
} else {
if((state_val_49914 === (15))){
var inst_49896 = (state_49913[(2)]);
var state_49913__$1 = state_49913;
if(cljs.core.truth_(inst_49896)){
var statearr_49918_50868 = state_49913__$1;
(statearr_49918_50868[(1)] = (16));

} else {
var statearr_49919_50869 = state_49913__$1;
(statearr_49919_50869[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (13))){
var inst_49888 = (state_49913[(7)]);
var inst_49891 = cljs.core.ex_data(inst_49888);
var inst_49892 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49891);
var inst_49893 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49892,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49913__$1 = state_49913;
var statearr_49920_50870 = state_49913__$1;
(statearr_49920_50870[(2)] = inst_49893);

(statearr_49920_50870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (6))){
var inst_49907 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_49913__$1 = state_49913;
var statearr_49921_50871 = state_49913__$1;
(statearr_49921_50871[(2)] = inst_49907);

(statearr_49921_50871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (17))){
var inst_49888 = (state_49913[(7)]);
var state_49913__$1 = state_49913;
var statearr_49922_50872 = state_49913__$1;
(statearr_49922_50872[(2)] = inst_49888);

(statearr_49922_50872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (3))){
var inst_49868 = (typeof WebR !== 'undefined');
var state_49913__$1 = state_49913;
if(cljs.core.truth_(inst_49868)){
var statearr_49923_50873 = state_49913__$1;
(statearr_49923_50873[(1)] = (5));

} else {
var statearr_49924_50874 = state_49913__$1;
(statearr_49924_50874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (12))){
var inst_49888 = (state_49913[(7)]);
var inst_49889 = (state_49913[(8)]);
var inst_49888__$1 = (state_49913[(2)]);
var inst_49889__$1 = (inst_49888__$1 instanceof cljs.core.ExceptionInfo);
var state_49913__$1 = (function (){var statearr_49926 = state_49913;
(statearr_49926[(7)] = inst_49888__$1);

(statearr_49926[(8)] = inst_49889__$1);

return statearr_49926;
})();
if(cljs.core.truth_(inst_49889__$1)){
var statearr_49927_50876 = state_49913__$1;
(statearr_49927_50876[(1)] = (13));

} else {
var statearr_49928_50877 = state_49913__$1;
(statearr_49928_50877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (2))){
var inst_49866 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_49913__$1 = state_49913;
var statearr_49929_50878 = state_49913__$1;
(statearr_49929_50878[(2)] = inst_49866);

(statearr_49929_50878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (11))){
var _ = (function (){var statearr_49930 = state_49913;
(statearr_49930[(4)] = cljs.core.rest((state_49913[(4)])));

return statearr_49930;
})();
var state_49913__$1 = state_49913;
var ex49925 = (state_49913__$1[(2)]);
var statearr_49931_50879 = state_49913__$1;
(statearr_49931_50879[(5)] = ex49925);


var statearr_49932_50880 = state_49913__$1;
(statearr_49932_50880[(1)] = (10));

(statearr_49932_50880[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (9))){
var inst_49905 = (state_49913[(2)]);
var state_49913__$1 = state_49913;
var statearr_49933_50881 = state_49913__$1;
(statearr_49933_50881[(2)] = inst_49905);

(statearr_49933_50881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (5))){
var state_49913__$1 = state_49913;
var statearr_49934_50882 = state_49913__$1;
(statearr_49934_50882[(2)] = null);

(statearr_49934_50882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (14))){
var inst_49889 = (state_49913[(8)]);
var state_49913__$1 = state_49913;
var statearr_49935_50883 = state_49913__$1;
(statearr_49935_50883[(2)] = inst_49889);

(statearr_49935_50883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (16))){
var inst_49888 = (state_49913[(7)]);
var inst_49898 = (function(){throw inst_49888})();
var state_49913__$1 = state_49913;
var statearr_49936_50884 = state_49913__$1;
(statearr_49936_50884[(2)] = inst_49898);

(statearr_49936_50884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (10))){
var inst_49870 = (state_49913[(2)]);
var inst_49871 = console.error("WebR Init Error:",inst_49870);
var inst_49872 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49870)].join('');
var inst_49873 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_49872) : on_error.call(null,inst_49872));
var state_49913__$1 = (function (){var statearr_49937 = state_49913;
(statearr_49937[(9)] = inst_49871);

return statearr_49937;
})();
var statearr_49938_50891 = state_49913__$1;
(statearr_49938_50891[(2)] = inst_49873);

(statearr_49938_50891[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (18))){
var inst_49901 = (state_49913[(2)]);
var inst_49902 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_49939 = state_49913;
(statearr_49939[(4)] = cljs.core.rest((state_49913[(4)])));

return statearr_49939;
})();
var state_49913__$1 = (function (){var statearr_49940 = state_49913;
(statearr_49940[(10)] = inst_49901);

return statearr_49940;
})();
var statearr_49941_50892 = state_49913__$1;
(statearr_49941_50892[(2)] = inst_49902);

(statearr_49941_50892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (8))){
var _ = (function (){var statearr_49942 = state_49913;
(statearr_49942[(4)] = cljs.core.cons((11),(state_49913[(4)])));

return statearr_49942;
})();
var inst_49879 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_49880 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_49881 = cljs.core.PersistentHashMap.fromArrays(inst_49879,inst_49880);
var inst_49882 = cljs.core.clj__GT_js(inst_49881);
var inst_49883 = (new WebR(inst_49882));
var inst_49884 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_49883);
var inst_49885 = bb_web_ds_tools.runtime.webr.init_obj(inst_49883);
var inst_49886 = cljs.core.async.interop.p__GT_c(inst_49885);
var state_49913__$1 = (function (){var statearr_49943 = state_49913;
(statearr_49943[(11)] = inst_49884);

return statearr_49943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49913__$1,(12),inst_49886);
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
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto____0 = (function (){
var statearr_49944 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49944[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__);

(statearr_49944[(1)] = (1));

return statearr_49944;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto____1 = (function (state_49913){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_49913);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e49945){var ex__32399__auto__ = e49945;
var statearr_49946_50895 = state_49913;
(statearr_49946_50895[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49913[(4)]))){
var statearr_49947_50896 = state_49913;
(statearr_49947_50896[(1)] = cljs.core.first((state_49913[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50897 = state_49913;
state_49913 = G__50897;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__ = function(state_49913){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto____1.call(this,state_49913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_49948 = f__32477__auto__();
(statearr_49948[(6)] = c__32476__auto__);

return statearr_49948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
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
var ds_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__49949){
var vec__49950 = p__49949;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49950,(0),null);
var map__49953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49950,(1),null);
var map__49953__$1 = cljs.core.__destructure_map(map__49953);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
var len__5749__auto___50898 = arguments.length;
var i__5750__auto___50900 = (0);
while(true){
if((i__5750__auto___50900 < len__5749__auto___50898)){
args__5755__auto__.push((arguments[i__5750__auto___50900]));

var G__50901 = (i__5750__auto___50900 + (1));
i__5750__auto___50900 = G__50901;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic = (function (datasets,p__49957){
var vec__49958 = p__49957;
var keys_to_bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49958,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_50000){
var state_val_50001 = (state_50000[(1)]);
if((state_val_50001 === (7))){
var inst_49978 = (state_50000[(7)]);
var inst_49985 = cljs.core.ex_data(inst_49978);
var inst_49986 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49985);
var inst_49987 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49986,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50000__$1 = state_50000;
var statearr_50008_50910 = state_50000__$1;
(statearr_50008_50910[(2)] = inst_49987);

(statearr_50008_50910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50001 === (1))){
var state_50000__$1 = state_50000;
var statearr_50013_50911 = state_50000__$1;
(statearr_50013_50911[(2)] = null);

(statearr_50013_50911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50001 === (4))){
var inst_49961 = (state_50000[(2)]);
var inst_49963 = console.error("Failed to bind datasets to R:",inst_49961);
var state_50000__$1 = state_50000;
var statearr_50014_50912 = state_50000__$1;
(statearr_50014_50912[(2)] = inst_49963);

(statearr_50014_50912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50001 === (6))){
var inst_49978 = (state_50000[(7)]);
var inst_49983 = (state_50000[(8)]);
var inst_49978__$1 = (state_50000[(2)]);
var inst_49983__$1 = (inst_49978__$1 instanceof cljs.core.ExceptionInfo);
var state_50000__$1 = (function (){var statearr_50021 = state_50000;
(statearr_50021[(7)] = inst_49978__$1);

(statearr_50021[(8)] = inst_49983__$1);

return statearr_50021;
})();
if(cljs.core.truth_(inst_49983__$1)){
var statearr_50022_50913 = state_50000__$1;
(statearr_50022_50913[(1)] = (7));

} else {
var statearr_50023_50914 = state_50000__$1;
(statearr_50023_50914[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50001 === (3))){
var inst_49998 = (state_50000[(2)]);
var state_50000__$1 = state_50000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50000__$1,inst_49998);
} else {
if((state_val_50001 === (12))){
var inst_49995 = (state_50000[(2)]);
var _ = (function (){var statearr_50024 = state_50000;
(statearr_50024[(4)] = cljs.core.rest((state_50000[(4)])));

return statearr_50024;
})();
var state_50000__$1 = state_50000;
var statearr_50025_50915 = state_50000__$1;
(statearr_50025_50915[(2)] = inst_49995);

(statearr_50025_50915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50001 === (2))){
var _ = (function (){var statearr_50026 = state_50000;
(statearr_50026[(4)] = cljs.core.cons((5),(state_50000[(4)])));

return statearr_50026;
})();
var inst_49972 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_49973 = bb_web_ds_tools.runtime.webr.datasets__GT_js(datasets,keys_to_bind);
var inst_49974 = bb_web_ds_tools.runtime.webr.get_global_env(inst_49972);
var inst_49975 = bb_web_ds_tools.runtime.webr.bind_r(inst_49974,"datasets",inst_49973);
var inst_49976 = cljs.core.async.interop.p__GT_c(inst_49975);
var state_50000__$1 = state_50000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50000__$1,(6),inst_49976);
} else {
if((state_val_50001 === (11))){
var inst_49978 = (state_50000[(7)]);
var state_50000__$1 = state_50000;
var statearr_50028_50916 = state_50000__$1;
(statearr_50028_50916[(2)] = inst_49978);

(statearr_50028_50916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50001 === (9))){
var inst_49990 = (state_50000[(2)]);
var state_50000__$1 = state_50000;
if(cljs.core.truth_(inst_49990)){
var statearr_50029_50917 = state_50000__$1;
(statearr_50029_50917[(1)] = (10));

} else {
var statearr_50030_50918 = state_50000__$1;
(statearr_50030_50918[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50001 === (5))){
var _ = (function (){var statearr_50031 = state_50000;
(statearr_50031[(4)] = cljs.core.rest((state_50000[(4)])));

return statearr_50031;
})();
var state_50000__$1 = state_50000;
var ex50027 = (state_50000__$1[(2)]);
var statearr_50032_50923 = state_50000__$1;
(statearr_50032_50923[(5)] = ex50027);


var statearr_50033_50924 = state_50000__$1;
(statearr_50033_50924[(1)] = (4));

(statearr_50033_50924[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50001 === (10))){
var inst_49978 = (state_50000[(7)]);
var inst_49992 = (function(){throw inst_49978})();
var state_50000__$1 = state_50000;
var statearr_50035_50926 = state_50000__$1;
(statearr_50035_50926[(2)] = inst_49992);

(statearr_50035_50926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50001 === (8))){
var inst_49983 = (state_50000[(8)]);
var state_50000__$1 = state_50000;
var statearr_50037_50927 = state_50000__$1;
(statearr_50037_50927[(2)] = inst_49983);

(statearr_50037_50927[(1)] = (9));


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
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0 = (function (){
var statearr_50040 = [null,null,null,null,null,null,null,null,null];
(statearr_50040[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32396__auto__);

(statearr_50040[(1)] = (1));

return statearr_50040;
});
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1 = (function (state_50000){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_50000);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50041){var ex__32399__auto__ = e50041;
var statearr_50042_50928 = state_50000;
(statearr_50042_50928[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50000[(4)]))){
var statearr_50043_50929 = state_50000;
(statearr_50043_50929[(1)] = cljs.core.first((state_50000[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50930 = state_50000;
state_50000 = G__50930;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = function(state_50000){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1.call(this,state_50000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_50044 = f__32477__auto__();
(statearr_50044[(6)] = c__32476__auto__);

return statearr_50044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
} else {
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_50047){
var state_val_50048 = (state_50047[(1)]);
if((state_val_50048 === (1))){
var inst_50045 = console.warn("WebR not loaded, cannot bind datasets");
var state_50047__$1 = state_50047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50047__$1,inst_50045);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0 = (function (){
var statearr_50051 = [null,null,null,null,null,null,null];
(statearr_50051[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32396__auto__);

(statearr_50051[(1)] = (1));

return statearr_50051;
});
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1 = (function (state_50047){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_50047);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50052){var ex__32399__auto__ = e50052;
var statearr_50053_50932 = state_50047;
(statearr_50053_50932[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50047[(4)]))){
var statearr_50056_50936 = state_50047;
(statearr_50056_50936[(1)] = cljs.core.first((state_50047[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50937 = state_50047;
state_50047 = G__50937;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = function(state_50047){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1.call(this,state_50047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_50061 = f__32477__auto__();
(statearr_50061[(6)] = c__32476__auto__);

return statearr_50061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
}
}));

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$applyTo = (function (seq49954){
var G__49955 = cljs.core.first(seq49954);
var seq49954__$1 = cljs.core.next(seq49954);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49955,seq49954__$1);
}));

/**
 * Retrieves the 'datasets' variable from R, converts it back to CLJS,
 * and dispatches an update event if found.
 */
bb_web_ds_tools.runtime.webr.sync_datasets = (function bb_web_ds_tools$runtime$webr$sync_datasets(){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_50133){
var state_val_50134 = (state_50133[(1)]);
if((state_val_50134 === (7))){
var inst_50102 = (state_50133[(7)]);
var inst_50102__$1 = (state_50133[(2)]);
var state_50133__$1 = (function (){var statearr_50135 = state_50133;
(statearr_50135[(7)] = inst_50102__$1);

return statearr_50135;
})();
if(cljs.core.truth_(inst_50102__$1)){
var statearr_50136_50940 = state_50133__$1;
(statearr_50136_50940[(1)] = (17));

} else {
var statearr_50137_50941 = state_50133__$1;
(statearr_50137_50941[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (20))){
var inst_50107 = (state_50133[(8)]);
var inst_50108 = (state_50133[(9)]);
var inst_50107__$1 = (state_50133[(2)]);
var inst_50108__$1 = (inst_50107__$1 instanceof cljs.core.ExceptionInfo);
var state_50133__$1 = (function (){var statearr_50138 = state_50133;
(statearr_50138[(8)] = inst_50107__$1);

(statearr_50138[(9)] = inst_50108__$1);

return statearr_50138;
})();
if(cljs.core.truth_(inst_50108__$1)){
var statearr_50139_50942 = state_50133__$1;
(statearr_50139_50942[(1)] = (21));

} else {
var statearr_50140_50943 = state_50133__$1;
(statearr_50140_50943[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (1))){
var state_50133__$1 = state_50133;
var statearr_50141_50944 = state_50133__$1;
(statearr_50141_50944[(2)] = null);

(statearr_50141_50944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (24))){
var inst_50107 = (state_50133[(8)]);
var inst_50117 = (function(){throw inst_50107})();
var state_50133__$1 = state_50133;
var statearr_50142_50945 = state_50133__$1;
(statearr_50142_50945[(2)] = inst_50117);

(statearr_50142_50945[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (4))){
var inst_50065 = (state_50133[(2)]);
var inst_50066 = console.error("Failed to sync datasets from R:",inst_50065);
var state_50133__$1 = state_50133;
var statearr_50143_50946 = state_50133__$1;
(statearr_50143_50946[(2)] = inst_50066);

(statearr_50143_50946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (15))){
var inst_50083 = (state_50133[(10)]);
var state_50133__$1 = state_50133;
var statearr_50144_50948 = state_50133__$1;
(statearr_50144_50948[(2)] = inst_50083);

(statearr_50144_50948[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (21))){
var inst_50107 = (state_50133[(8)]);
var inst_50110 = cljs.core.ex_data(inst_50107);
var inst_50111 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50110);
var inst_50112 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50111,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50133__$1 = state_50133;
var statearr_50145_50952 = state_50133__$1;
(statearr_50145_50952[(2)] = inst_50112);

(statearr_50145_50952[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (13))){
var inst_50094 = (state_50133[(2)]);
var state_50133__$1 = state_50133;
if(cljs.core.truth_(inst_50094)){
var statearr_50146_50959 = state_50133__$1;
(statearr_50146_50959[(1)] = (14));

} else {
var statearr_50147_50960 = state_50133__$1;
(statearr_50147_50960[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (22))){
var inst_50108 = (state_50133[(9)]);
var state_50133__$1 = state_50133;
var statearr_50148_50961 = state_50133__$1;
(statearr_50148_50961[(2)] = inst_50108);

(statearr_50148_50961[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (6))){
var inst_50072 = (state_50133[(11)]);
var _ = (function (){var statearr_50149 = state_50133;
(statearr_50149[(4)] = cljs.core.cons((9),(state_50133[(4)])));

return statearr_50149;
})();
var inst_50079 = bb_web_ds_tools.runtime.webr.get_global_env(inst_50072);
var inst_50080 = bb_web_ds_tools.runtime.webr.get_r(inst_50079,"datasets");
var inst_50081 = cljs.core.async.interop.p__GT_c(inst_50080);
var state_50133__$1 = state_50133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50133__$1,(10),inst_50081);
} else {
if((state_val_50134 === (25))){
var inst_50107 = (state_50133[(8)]);
var state_50133__$1 = state_50133;
var statearr_50150_50970 = state_50133__$1;
(statearr_50150_50970[(2)] = inst_50107);

(statearr_50150_50970[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (17))){
var inst_50102 = (state_50133[(7)]);
var inst_50104 = bb_web_ds_tools.runtime.webr.to_js(inst_50102);
var inst_50105 = cljs.core.async.interop.p__GT_c(inst_50104);
var state_50133__$1 = state_50133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50133__$1,(20),inst_50105);
} else {
if((state_val_50134 === (3))){
var inst_50131 = (state_50133[(2)]);
var state_50133__$1 = state_50133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50133__$1,inst_50131);
} else {
if((state_val_50134 === (12))){
var inst_50084 = (state_50133[(12)]);
var state_50133__$1 = state_50133;
var statearr_50151_50974 = state_50133__$1;
(statearr_50151_50974[(2)] = inst_50084);

(statearr_50151_50974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (2))){
var _ = (function (){var statearr_50152 = state_50133;
(statearr_50152[(4)] = cljs.core.cons((5),(state_50133[(4)])));

return statearr_50152;
})();
var inst_50072 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_50133__$1 = (function (){var statearr_50153 = state_50133;
(statearr_50153[(11)] = inst_50072);

return statearr_50153;
})();
var statearr_50154_50980 = state_50133__$1;
(statearr_50154_50980[(2)] = null);

(statearr_50154_50980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (23))){
var inst_50115 = (state_50133[(2)]);
var state_50133__$1 = state_50133;
if(cljs.core.truth_(inst_50115)){
var statearr_50155_50981 = state_50133__$1;
(statearr_50155_50981[(1)] = (24));

} else {
var statearr_50156_50982 = state_50133__$1;
(statearr_50156_50982[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (19))){
var inst_50128 = (state_50133[(2)]);
var _ = (function (){var statearr_50158 = state_50133;
(statearr_50158[(4)] = cljs.core.rest((state_50133[(4)])));

return statearr_50158;
})();
var state_50133__$1 = state_50133;
var statearr_50159_50983 = state_50133__$1;
(statearr_50159_50983[(2)] = inst_50128);

(statearr_50159_50983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (11))){
var inst_50083 = (state_50133[(10)]);
var inst_50089 = cljs.core.ex_data(inst_50083);
var inst_50090 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50089);
var inst_50091 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50090,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50133__$1 = state_50133;
var statearr_50161_50984 = state_50133__$1;
(statearr_50161_50984[(2)] = inst_50091);

(statearr_50161_50984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (9))){
var _ = (function (){var statearr_50162 = state_50133;
(statearr_50162[(4)] = cljs.core.rest((state_50133[(4)])));

return statearr_50162;
})();
var state_50133__$1 = state_50133;
var ex50157 = (state_50133__$1[(2)]);
var statearr_50163_50988 = state_50133__$1;
(statearr_50163_50988[(5)] = ex50157);


var statearr_50164_50989 = state_50133__$1;
(statearr_50164_50989[(1)] = (8));

(statearr_50164_50989[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (5))){
var _ = (function (){var statearr_50165 = state_50133;
(statearr_50165[(4)] = cljs.core.rest((state_50133[(4)])));

return statearr_50165;
})();
var state_50133__$1 = state_50133;
var ex50160 = (state_50133__$1[(2)]);
var statearr_50167_50990 = state_50133__$1;
(statearr_50167_50990[(5)] = ex50160);


var statearr_50168_50991 = state_50133__$1;
(statearr_50168_50991[(1)] = (4));

(statearr_50168_50991[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (14))){
var inst_50083 = (state_50133[(10)]);
var inst_50096 = (function(){throw inst_50083})();
var state_50133__$1 = state_50133;
var statearr_50169_50992 = state_50133__$1;
(statearr_50169_50992[(2)] = inst_50096);

(statearr_50169_50992[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (26))){
var inst_50120 = (state_50133[(2)]);
var inst_50121 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50120,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_50122 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50123 = [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets-from-r","bb-web-ds-tools.views.datasets/patch-datasets-from-r",-125752359),inst_50121];
var inst_50124 = (new cljs.core.PersistentVector(null,2,(5),inst_50122,inst_50123,null));
var inst_50125 = re_frame.core.dispatch(inst_50124);
var state_50133__$1 = state_50133;
var statearr_50170_50994 = state_50133__$1;
(statearr_50170_50994[(2)] = inst_50125);

(statearr_50170_50994[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (16))){
var inst_50099 = (state_50133[(2)]);
var _ = (function (){var statearr_50171 = state_50133;
(statearr_50171[(4)] = cljs.core.rest((state_50133[(4)])));

return statearr_50171;
})();
var state_50133__$1 = state_50133;
var statearr_50172_50995 = state_50133__$1;
(statearr_50172_50995[(2)] = inst_50099);

(statearr_50172_50995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (10))){
var inst_50083 = (state_50133[(10)]);
var inst_50084 = (state_50133[(12)]);
var inst_50083__$1 = (state_50133[(2)]);
var inst_50084__$1 = (inst_50083__$1 instanceof cljs.core.ExceptionInfo);
var state_50133__$1 = (function (){var statearr_50173 = state_50133;
(statearr_50173[(10)] = inst_50083__$1);

(statearr_50173[(12)] = inst_50084__$1);

return statearr_50173;
})();
if(cljs.core.truth_(inst_50084__$1)){
var statearr_50174_50996 = state_50133__$1;
(statearr_50174_50996[(1)] = (11));

} else {
var statearr_50175_50997 = state_50133__$1;
(statearr_50175_50997[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (18))){
var state_50133__$1 = state_50133;
var statearr_50176_50998 = state_50133__$1;
(statearr_50176_50998[(2)] = null);

(statearr_50176_50998[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (8))){
var inst_50073 = (state_50133[(2)]);
var state_50133__$1 = (function (){var statearr_50177 = state_50133;
(statearr_50177[(13)] = inst_50073);

return statearr_50177;
})();
var statearr_50178_50999 = state_50133__$1;
(statearr_50178_50999[(2)] = null);

(statearr_50178_50999[(1)] = (7));


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
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____0 = (function (){
var statearr_50179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50179[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__);

(statearr_50179[(1)] = (1));

return statearr_50179;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1 = (function (state_50133){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_50133);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50180){var ex__32399__auto__ = e50180;
var statearr_50181_51000 = state_50133;
(statearr_50181_51000[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50133[(4)]))){
var statearr_50182_51001 = state_50133;
(statearr_50182_51001[(1)] = cljs.core.first((state_50133[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51002 = state_50133;
state_50133 = G__51002;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__ = function(state_50133){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1.call(this,state_50133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_50183 = f__32477__auto__();
(statearr_50183[(6)] = c__32476__auto__);

return statearr_50183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
} else {
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_50186){
var state_val_50187 = (state_50186[(1)]);
if((state_val_50187 === (1))){
var inst_50184 = console.warn("WebR not loaded, cannot sync datasets");
var state_50186__$1 = state_50186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50186__$1,inst_50184);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____0 = (function (){
var statearr_50188 = [null,null,null,null,null,null,null];
(statearr_50188[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__);

(statearr_50188[(1)] = (1));

return statearr_50188;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1 = (function (state_50186){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_50186);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50189){var ex__32399__auto__ = e50189;
var statearr_50190_51003 = state_50186;
(statearr_50190_51003[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50186[(4)]))){
var statearr_50191_51004 = state_50186;
(statearr_50191_51004[(1)] = cljs.core.first((state_50186[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51005 = state_50186;
state_50186 = G__51005;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__ = function(state_50186){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1.call(this,state_50186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_50192 = f__32477__auto__();
(statearr_50192[(6)] = c__32476__auto__);

return statearr_50192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
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
var len__5749__auto___51007 = arguments.length;
var i__5750__auto___51008 = (0);
while(true){
if((i__5750__auto___51008 < len__5749__auto___51007)){
args__5755__auto__.push((arguments[i__5750__auto___51008]));

var G__51009 = (i__5750__auto___51008 + (1));
i__5750__auto___51008 = G__51009;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic = (function (code,p__50195){
var vec__50196 = p__50195;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50196,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_50560){
var state_val_50561 = (state_50560[(1)]);
if((state_val_50561 === (65))){
var inst_50385 = (state_50560[(7)]);
var inst_50389 = cljs.core.chunk_first(inst_50385);
var inst_50390 = cljs.core.chunk_rest(inst_50385);
var inst_50391 = cljs.core.count(inst_50389);
var inst_50368 = inst_50390;
var inst_50369 = inst_50389;
var inst_50370 = inst_50391;
var inst_50371 = (0);
var state_50560__$1 = (function (){var statearr_50562 = state_50560;
(statearr_50562[(8)] = inst_50368);

(statearr_50562[(9)] = inst_50369);

(statearr_50562[(10)] = inst_50370);

(statearr_50562[(11)] = inst_50371);

return statearr_50562;
})();
var statearr_50563_51013 = state_50560__$1;
(statearr_50563_51013[(2)] = null);

(statearr_50563_51013[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (70))){
var inst_50385 = (state_50560[(7)]);
var inst_50399 = (state_50560[(2)]);
var inst_50400 = cljs.core.next(inst_50385);
var inst_50368 = inst_50400;
var inst_50369 = null;
var inst_50370 = (0);
var inst_50371 = (0);
var state_50560__$1 = (function (){var statearr_50564 = state_50560;
(statearr_50564[(12)] = inst_50399);

(statearr_50564[(8)] = inst_50368);

(statearr_50564[(9)] = inst_50369);

(statearr_50564[(10)] = inst_50370);

(statearr_50564[(11)] = inst_50371);

return statearr_50564;
})();
var statearr_50565_51014 = state_50560__$1;
(statearr_50565_51014[(2)] = null);

(statearr_50565_51014[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (62))){
var inst_50385 = (state_50560[(7)]);
var inst_50387 = cljs.core.chunked_seq_QMARK_(inst_50385);
var state_50560__$1 = state_50560;
if(inst_50387){
var statearr_50566_51015 = state_50560__$1;
(statearr_50566_51015[(1)] = (65));

} else {
var statearr_50567_51016 = state_50560__$1;
(statearr_50567_51016[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (74))){
var inst_50417 = (state_50560[(13)]);
var inst_50459 = (state_50560[(14)]);
var inst_50459__$1 = cljs.core.seq(inst_50417);
var state_50560__$1 = (function (){var statearr_50568 = state_50560;
(statearr_50568[(14)] = inst_50459__$1);

return statearr_50568;
})();
if(inst_50459__$1){
var statearr_50569_51017 = state_50560__$1;
(statearr_50569_51017[(1)] = (76));

} else {
var statearr_50570_51018 = state_50560__$1;
(statearr_50570_51018[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (7))){
var inst_50552 = (new Error("Shelter not found on WebR instance"));
var inst_50553 = (function(){throw inst_50552})();
var state_50560__$1 = state_50560;
var statearr_50571_51019 = state_50560__$1;
(statearr_50571_51019[(2)] = inst_50553);

(statearr_50571_51019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (59))){
var inst_50376 = (state_50560[(15)]);
var inst_50378 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50376);
var state_50560__$1 = state_50560;
var statearr_50572_51020 = state_50560__$1;
(statearr_50572_51020[(2)] = inst_50378);

(statearr_50572_51020[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (86))){
var inst_50516 = (state_50560[(16)]);
var inst_50519 = cljs.core.ex_data(inst_50516);
var inst_50520 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50519);
var inst_50521 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50520,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50560__$1 = state_50560;
var statearr_50573_51021 = state_50560__$1;
(statearr_50573_51021[(2)] = inst_50521);

(statearr_50573_51021[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (20))){
var inst_50229 = (state_50560[(17)]);
var inst_50239 = (function(){throw inst_50229})();
var state_50560__$1 = state_50560;
var statearr_50574_51022 = state_50560__$1;
(statearr_50574_51022[(2)] = inst_50239);

(statearr_50574_51022[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (72))){
var inst_50317 = (state_50560[(18)]);
var inst_50511 = (state_50560[(19)]);
var inst_50510 = (state_50560[(2)]);
var inst_50511__$1 = bb_web_ds_tools.runtime.webr.to_js(inst_50317);
var inst_50512 = (inst_50511__$1 instanceof Promise);
var state_50560__$1 = (function (){var statearr_50575 = state_50560;
(statearr_50575[(20)] = inst_50510);

(statearr_50575[(19)] = inst_50511__$1);

return statearr_50575;
})();
if(cljs.core.truth_(inst_50512)){
var statearr_50576_51023 = state_50560__$1;
(statearr_50576_51023[(1)] = (82));

} else {
var statearr_50577_51024 = state_50560__$1;
(statearr_50577_51024[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (58))){
var inst_50408 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50578_51025 = state_50560__$1;
(statearr_50578_51025[(2)] = inst_50408);

(statearr_50578_51025[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (60))){
var state_50560__$1 = state_50560;
var statearr_50579_51026 = state_50560__$1;
(statearr_50579_51026[(2)] = null);

(statearr_50579_51026[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (27))){
var inst_50251 = (state_50560[(21)]);
var inst_50254 = cljs.core.ex_data(inst_50251);
var inst_50255 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50254);
var inst_50256 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50255,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50560__$1 = state_50560;
var statearr_50581_51027 = state_50560__$1;
(statearr_50581_51027[(2)] = inst_50256);

(statearr_50581_51027[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (1))){
var state_50560__$1 = state_50560;
var statearr_50582_51028 = state_50560__$1;
(statearr_50582_51028[(2)] = null);

(statearr_50582_51028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (69))){
var state_50560__$1 = state_50560;
var statearr_50583_51029 = state_50560__$1;
(statearr_50583_51029[(2)] = null);

(statearr_50583_51029[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (24))){
var state_50560__$1 = state_50560;
var statearr_50591_51030 = state_50560__$1;
(statearr_50591_51030[(2)] = null);

(statearr_50591_51030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (55))){
var inst_50316 = (state_50560[(22)]);
var inst_50410 = (state_50560[(2)]);
var inst_50415 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50316);
var inst_50416 = cljs.core.seq(inst_50415);
var inst_50417 = inst_50416;
var inst_50418 = null;
var inst_50419 = (0);
var inst_50420 = (0);
var state_50560__$1 = (function (){var statearr_50593 = state_50560;
(statearr_50593[(23)] = inst_50410);

(statearr_50593[(13)] = inst_50417);

(statearr_50593[(24)] = inst_50418);

(statearr_50593[(25)] = inst_50419);

(statearr_50593[(26)] = inst_50420);

return statearr_50593;
})();
var statearr_50594_51035 = state_50560__$1;
(statearr_50594_51035[(2)] = null);

(statearr_50594_51035[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (85))){
var inst_50516 = (state_50560[(16)]);
var inst_50517 = (state_50560[(27)]);
var inst_50516__$1 = (state_50560[(2)]);
var inst_50517__$1 = (inst_50516__$1 instanceof cljs.core.ExceptionInfo);
var state_50560__$1 = (function (){var statearr_50595 = state_50560;
(statearr_50595[(16)] = inst_50516__$1);

(statearr_50595[(27)] = inst_50517__$1);

return statearr_50595;
})();
if(cljs.core.truth_(inst_50517__$1)){
var statearr_50596_51036 = state_50560__$1;
(statearr_50596_51036[(1)] = (86));

} else {
var statearr_50597_51037 = state_50560__$1;
(statearr_50597_51037[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (39))){
var inst_50300 = (state_50560[(28)]);
var inst_50303 = cljs.core.ex_data(inst_50300);
var inst_50304 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50303);
var inst_50305 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50304,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50560__$1 = state_50560;
var statearr_50598_51038 = state_50560__$1;
(statearr_50598_51038[(2)] = inst_50305);

(statearr_50598_51038[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (88))){
var inst_50524 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50524)){
var statearr_50599_51039 = state_50560__$1;
(statearr_50599_51039[(1)] = (89));

} else {
var statearr_50600_51040 = state_50560__$1;
(statearr_50600_51040[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (46))){
var inst_50353 = cljs.core.PersistentVector.EMPTY;
var state_50560__$1 = state_50560;
var statearr_50601_51041 = state_50560__$1;
(statearr_50601_51041[(2)] = inst_50353);

(statearr_50601_51041[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (4))){
var inst_50199 = (state_50560[(2)]);
var inst_50200 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50201 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50199);
var inst_50202 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50201];
var inst_50203 = cljs.core.PersistentHashMap.fromArrays(inst_50200,inst_50202);
var inst_50204 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50203);
var state_50560__$1 = state_50560;
var statearr_50603_51042 = state_50560__$1;
(statearr_50603_51042[(2)] = inst_50204);

(statearr_50603_51042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (77))){
var state_50560__$1 = state_50560;
var statearr_50604_51043 = state_50560__$1;
(statearr_50604_51043[(2)] = null);

(statearr_50604_51043[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (95))){
var _ = (function (){var statearr_50605 = state_50560;
(statearr_50605[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50605;
})();
var state_50560__$1 = state_50560;
var ex50602 = (state_50560__$1[(2)]);
var statearr_50606_51044 = state_50560__$1;
(statearr_50606_51044[(5)] = ex50602);


if((ex50602 instanceof Error)){
var statearr_50607_51045 = state_50560__$1;
(statearr_50607_51045[(1)] = (94));

(statearr_50607_51045[(5)] = null);

} else {
throw ex50602;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (54))){
var inst_50371 = (state_50560[(11)]);
var inst_50370 = (state_50560[(10)]);
var inst_50373 = (inst_50371 < inst_50370);
var inst_50374 = inst_50373;
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50374)){
var statearr_50608_51046 = state_50560__$1;
(statearr_50608_51046[(1)] = (56));

} else {
var statearr_50609_51047 = state_50560__$1;
(statearr_50609_51047[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (92))){
var inst_50532 = (state_50560[(29)]);
var _ = (function (){var statearr_50610 = state_50560;
(statearr_50610[(4)] = cljs.core.cons((95),(state_50560[(4)])));

return statearr_50610;
})();
var inst_50540 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50532,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_50611 = state_50560;
(statearr_50611[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50611;
})();
var state_50560__$1 = state_50560;
var statearr_50612_51048 = state_50560__$1;
(statearr_50612_51048[(2)] = inst_50540);

(statearr_50612_51048[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (15))){
var inst_50269 = (state_50560[(2)]);
var _ = (function (){var statearr_50615 = state_50560;
(statearr_50615[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50615;
})();
var state_50560__$1 = state_50560;
var statearr_50616_51058 = state_50560__$1;
(statearr_50616_51058[(2)] = inst_50269);

(statearr_50616_51058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (48))){
var inst_50333 = (state_50560[(30)]);
var inst_50339 = cljs.core.seq(inst_50333);
var inst_50340 = cljs.core.first(inst_50339);
var inst_50341 = cljs.core.next(inst_50339);
var state_50560__$1 = (function (){var statearr_50617 = state_50560;
(statearr_50617[(31)] = inst_50341);

return statearr_50617;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50560__$1,(50),inst_50340);
} else {
if((state_val_50561 === (50))){
var inst_50334 = (state_50560[(32)]);
var inst_50341 = (state_50560[(31)]);
var inst_50343 = (state_50560[(2)]);
var inst_50344 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50334,inst_50343);
var state_50560__$1 = (function (){var statearr_50618 = state_50560;
(statearr_50618[(33)] = inst_50344);

return statearr_50618;
})();
if(cljs.core.truth_(inst_50341)){
var statearr_50619_51059 = state_50560__$1;
(statearr_50619_51059[(1)] = (51));

} else {
var statearr_50620_51060 = state_50560__$1;
(statearr_50620_51060[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (75))){
var inst_50508 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50621_51061 = state_50560__$1;
(statearr_50621_51061[(2)] = inst_50508);

(statearr_50621_51061[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (21))){
var inst_50229 = (state_50560[(17)]);
var state_50560__$1 = state_50560;
var statearr_50622_51062 = state_50560__$1;
(statearr_50622_51062[(2)] = inst_50229);

(statearr_50622_51062[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (31))){
var inst_50251 = (state_50560[(21)]);
var state_50560__$1 = state_50560;
var statearr_50623_51063 = state_50560__$1;
(statearr_50623_51063[(2)] = inst_50251);

(statearr_50623_51063[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (32))){
var inst_50264 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50624_51064 = state_50560__$1;
(statearr_50624_51064[(2)] = inst_50264);

(statearr_50624_51064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (40))){
var inst_50301 = (state_50560[(34)]);
var state_50560__$1 = state_50560;
var statearr_50625_51065 = state_50560__$1;
(statearr_50625_51065[(2)] = inst_50301);

(statearr_50625_51065[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (91))){
var inst_50529 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50626_51066 = state_50560__$1;
(statearr_50626_51066[(2)] = inst_50529);

(statearr_50626_51066[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (56))){
var inst_50369 = (state_50560[(9)]);
var inst_50371 = (state_50560[(11)]);
var inst_50376 = (state_50560[(15)]);
var inst_50376__$1 = cljs.core._nth(inst_50369,inst_50371);
var state_50560__$1 = (function (){var statearr_50627 = state_50560;
(statearr_50627[(15)] = inst_50376__$1);

return statearr_50627;
})();
if(cljs.core.truth_(inst_50376__$1)){
var statearr_50628_51067 = state_50560__$1;
(statearr_50628_51067[(1)] = (59));

} else {
var statearr_50629_51068 = state_50560__$1;
(statearr_50629_51068[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (33))){
var inst_50272 = (state_50560[(35)]);
var _ = (function (){var statearr_50632 = state_50560;
(statearr_50632[(4)] = cljs.core.cons((35),(state_50560[(4)])));

return statearr_50632;
})();
var ___$1 = (function (){var statearr_50633 = state_50560;
(statearr_50633[(4)] = cljs.core.cons((37),(state_50560[(4)])));

return statearr_50633;
})();
var inst_50293 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_50294 = [true];
var inst_50295 = cljs.core.PersistentHashMap.fromArrays(inst_50293,inst_50294);
var inst_50296 = cljs.core.clj__GT_js(inst_50295);
var inst_50297 = bb_web_ds_tools.runtime.webr.capture_r(inst_50272,code,inst_50296);
var inst_50298 = cljs.core.async.interop.p__GT_c(inst_50297);
var state_50560__$1 = state_50560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50560__$1,(38),inst_50298);
} else {
if((state_val_50561 === (13))){
var inst_50217 = (state_50560[(36)]);
var inst_50227 = cljs.core.async.interop.p__GT_c(inst_50217);
var state_50560__$1 = state_50560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50560__$1,(16),inst_50227);
} else {
if((state_val_50561 === (22))){
var inst_50242 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50634_51069 = state_50560__$1;
(statearr_50634_51069[(2)] = inst_50242);

(statearr_50634_51069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (90))){
var inst_50516 = (state_50560[(16)]);
var state_50560__$1 = state_50560;
var statearr_50635_51070 = state_50560__$1;
(statearr_50635_51070[(2)] = inst_50516);

(statearr_50635_51070[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (36))){
var inst_50278 = (state_50560[(2)]);
var inst_50279 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50280 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50278);
var inst_50281 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50280];
var inst_50282 = cljs.core.PersistentHashMap.fromArrays(inst_50279,inst_50281);
var inst_50283 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50282);
var state_50560__$1 = state_50560;
var statearr_50636_51071 = state_50560__$1;
(statearr_50636_51071[(2)] = inst_50283);

(statearr_50636_51071[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (41))){
var inst_50308 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50308)){
var statearr_50637_51072 = state_50560__$1;
(statearr_50637_51072[(1)] = (42));

} else {
var statearr_50638_51073 = state_50560__$1;
(statearr_50638_51073[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (89))){
var inst_50516 = (state_50560[(16)]);
var inst_50526 = (function(){throw inst_50516})();
var state_50560__$1 = state_50560;
var statearr_50642_51074 = state_50560__$1;
(statearr_50642_51074[(2)] = inst_50526);

(statearr_50642_51074[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (43))){
var inst_50300 = (state_50560[(28)]);
var state_50560__$1 = state_50560;
var statearr_50644_51075 = state_50560__$1;
(statearr_50644_51075[(2)] = inst_50300);

(statearr_50644_51075[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (61))){
var inst_50371 = (state_50560[(11)]);
var inst_50368 = (state_50560[(8)]);
var inst_50369 = (state_50560[(9)]);
var inst_50370 = (state_50560[(10)]);
var inst_50381 = (state_50560[(2)]);
var inst_50382 = (inst_50371 + (1));
var tmp50639 = inst_50370;
var tmp50640 = inst_50369;
var tmp50641 = inst_50368;
var inst_50368__$1 = tmp50641;
var inst_50369__$1 = tmp50640;
var inst_50370__$1 = tmp50639;
var inst_50371__$1 = inst_50382;
var state_50560__$1 = (function (){var statearr_50648 = state_50560;
(statearr_50648[(37)] = inst_50381);

(statearr_50648[(8)] = inst_50368__$1);

(statearr_50648[(9)] = inst_50369__$1);

(statearr_50648[(10)] = inst_50370__$1);

(statearr_50648[(11)] = inst_50371__$1);

return statearr_50648;
})();
var statearr_50649_51076 = state_50560__$1;
(statearr_50649_51076[(2)] = null);

(statearr_50649_51076[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (29))){
var inst_50259 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50259)){
var statearr_50650_51077 = state_50560__$1;
(statearr_50650_51077[(1)] = (30));

} else {
var statearr_50651_51078 = state_50560__$1;
(statearr_50651_51078[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (44))){
var inst_50319 = (state_50560[(38)]);
var inst_50313 = (state_50560[(2)]);
var inst_50314 = bb_web_ds_tools.runtime.webr.get_result_props(inst_50313);
var inst_50315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50314,(0),null);
var inst_50316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50314,(1),null);
var inst_50317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50314,(2),null);
var inst_50318 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50315);
var inst_50319__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,inst_50318);
var inst_50320 = cljs.core.seq(inst_50319__$1);
var state_50560__$1 = (function (){var statearr_50653 = state_50560;
(statearr_50653[(22)] = inst_50316);

(statearr_50653[(18)] = inst_50317);

(statearr_50653[(38)] = inst_50319__$1);

return statearr_50653;
})();
if(inst_50320){
var statearr_50654_51088 = state_50560__$1;
(statearr_50654_51088[(1)] = (45));

} else {
var statearr_50655_51089 = state_50560__$1;
(statearr_50655_51089[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (93))){
var inst_50543 = (state_50560[(2)]);
var inst_50544 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_50545 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_50543];
var inst_50546 = cljs.core.PersistentHashMap.fromArrays(inst_50544,inst_50545);
var inst_50547 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50546);
var _ = (function (){var statearr_50658 = state_50560;
(statearr_50658[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50658;
})();
var state_50560__$1 = state_50560;
var statearr_50659_51090 = state_50560__$1;
(statearr_50659_51090[(2)] = inst_50547);

(statearr_50659_51090[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (6))){
var inst_50215 = (state_50560[(39)]);
var inst_50217 = (new inst_50215());
var state_50560__$1 = (function (){var statearr_50661 = state_50560;
(statearr_50661[(36)] = inst_50217);

return statearr_50661;
})();
var statearr_50662_51091 = state_50560__$1;
(statearr_50662_51091[(2)] = null);

(statearr_50662_51091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (28))){
var inst_50252 = (state_50560[(40)]);
var state_50560__$1 = state_50560;
var statearr_50663_51092 = state_50560__$1;
(statearr_50663_51092[(2)] = inst_50252);

(statearr_50663_51092[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (64))){
var inst_50406 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50664_51093 = state_50560__$1;
(statearr_50664_51093[(2)] = inst_50406);

(statearr_50664_51093[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (51))){
var inst_50341 = (state_50560[(31)]);
var inst_50344 = (state_50560[(33)]);
var inst_50333 = inst_50341;
var inst_50334 = inst_50344;
var state_50560__$1 = (function (){var statearr_50665 = state_50560;
(statearr_50665[(30)] = inst_50333);

(statearr_50665[(32)] = inst_50334);

return statearr_50665;
})();
var statearr_50666_51094 = state_50560__$1;
(statearr_50666_51094[(2)] = null);

(statearr_50666_51094[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (25))){
var inst_50217 = (state_50560[(36)]);
var inst_50267 = (state_50560[(2)]);
var state_50560__$1 = (function (){var statearr_50667 = state_50560;
(statearr_50667[(41)] = inst_50267);

return statearr_50667;
})();
var statearr_50668_51095 = state_50560__$1;
(statearr_50668_51095[(2)] = inst_50217);

(statearr_50668_51095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (34))){
var inst_50550 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50669_51096 = state_50560__$1;
(statearr_50669_51096[(2)] = inst_50550);

(statearr_50669_51096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (17))){
var inst_50229 = (state_50560[(17)]);
var inst_50232 = cljs.core.ex_data(inst_50229);
var inst_50233 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50232);
var inst_50234 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50233,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50560__$1 = state_50560;
var statearr_50671_51097 = state_50560__$1;
(statearr_50671_51097[(2)] = inst_50234);

(statearr_50671_51097[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (3))){
var inst_50558 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50560__$1,inst_50558);
} else {
if((state_val_50561 === (12))){
var _ = (function (){var statearr_50672 = state_50560;
(statearr_50672[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50672;
})();
var state_50560__$1 = state_50560;
var ex50670 = (state_50560__$1[(2)]);
var statearr_50673_51098 = state_50560__$1;
(statearr_50673_51098[(5)] = ex50670);


var statearr_50674_51099 = state_50560__$1;
(statearr_50674_51099[(1)] = (11));

(statearr_50674_51099[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (2))){
var inst_50215 = (state_50560[(39)]);
var _ = (function (){var statearr_50675 = state_50560;
(statearr_50675[(4)] = cljs.core.cons((5),(state_50560[(4)])));

return statearr_50675;
})();
var inst_50210 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50211 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_50212 = cljs.core.PersistentHashMap.fromArrays(inst_50210,inst_50211);
var inst_50213 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50212);
var inst_50214 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_50215__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(inst_50214);
var state_50560__$1 = (function (){var statearr_50676 = state_50560;
(statearr_50676[(42)] = inst_50213);

(statearr_50676[(39)] = inst_50215__$1);

return statearr_50676;
})();
if(cljs.core.truth_(inst_50215__$1)){
var statearr_50677_51101 = state_50560__$1;
(statearr_50677_51101[(1)] = (6));

} else {
var statearr_50678_51102 = state_50560__$1;
(statearr_50678_51102[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (66))){
var inst_50385 = (state_50560[(7)]);
var inst_50394 = (state_50560[(43)]);
var inst_50394__$1 = cljs.core.first(inst_50385);
var state_50560__$1 = (function (){var statearr_50679 = state_50560;
(statearr_50679[(43)] = inst_50394__$1);

return statearr_50679;
})();
if(cljs.core.truth_(inst_50394__$1)){
var statearr_50680_51104 = state_50560__$1;
(statearr_50680_51104[(1)] = (68));

} else {
var statearr_50681_51105 = state_50560__$1;
(statearr_50681_51105[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (23))){
var inst_50217 = (state_50560[(36)]);
var inst_50248 = bb_web_ds_tools.runtime.webr.init_obj(inst_50217);
var inst_50249 = cljs.core.async.interop.p__GT_c(inst_50248);
var state_50560__$1 = state_50560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50560__$1,(26),inst_50249);
} else {
if((state_val_50561 === (47))){
var inst_50355 = (state_50560[(2)]);
var inst_50356 = [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),new cljs.core.Keyword(null,"container-height","container-height",-577782714),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110)];
var inst_50357 = [(720),(800),0.72];
var inst_50358 = cljs.core.PersistentHashMap.fromArrays(inst_50356,inst_50357);
var inst_50359 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"webr","webr",-966893065),inst_50358);
var inst_50360 = new cljs.core.Keyword(null,"container-width","container-width",-1461172864).cljs$core$IFn$_invoke$arity$1(inst_50359);
var inst_50361 = new cljs.core.Keyword(null,"container-height","container-height",-577782714).cljs$core$IFn$_invoke$arity$1(inst_50359);
var inst_50362 = new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110).cljs$core$IFn$_invoke$arity$1(inst_50359);
var inst_50367 = cljs.core.seq(inst_50355);
var inst_50368 = inst_50367;
var inst_50369 = null;
var inst_50370 = (0);
var inst_50371 = (0);
var state_50560__$1 = (function (){var statearr_50682 = state_50560;
(statearr_50682[(44)] = inst_50360);

(statearr_50682[(45)] = inst_50361);

(statearr_50682[(46)] = inst_50362);

(statearr_50682[(8)] = inst_50368);

(statearr_50682[(9)] = inst_50369);

(statearr_50682[(10)] = inst_50370);

(statearr_50682[(11)] = inst_50371);

return statearr_50682;
})();
var statearr_50683_51106 = state_50560__$1;
(statearr_50683_51106[(2)] = null);

(statearr_50683_51106[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (35))){
var inst_50272 = (state_50560[(35)]);
var _ = (function (){var statearr_50684 = state_50560;
(statearr_50684[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50684;
})();
var inst_50274 = (state_50560[(2)]);
var inst_50275 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_50272);
var ___$1 = (function (){var temp__5825__auto__ = (state_50560[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31628__auto__ = temp__5825__auto__;
throw e__31628__auto__;
} else {
return null;
}
})();
var state_50560__$1 = (function (){var statearr_50685 = state_50560;
(statearr_50685[(47)] = inst_50275);

return statearr_50685;
})();
var statearr_50686_51107 = state_50560__$1;
(statearr_50686_51107[(2)] = inst_50274);

(statearr_50686_51107[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (82))){
var inst_50511 = (state_50560[(19)]);
var inst_50514 = cljs.core.async.interop.p__GT_c(inst_50511);
var state_50560__$1 = state_50560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50560__$1,(85),inst_50514);
} else {
if((state_val_50561 === (76))){
var inst_50459 = (state_50560[(14)]);
var inst_50461 = cljs.core.chunked_seq_QMARK_(inst_50459);
var state_50560__$1 = state_50560;
if(inst_50461){
var statearr_50687_51108 = state_50560__$1;
(statearr_50687_51108[(1)] = (79));

} else {
var statearr_50688_51109 = state_50560__$1;
(statearr_50688_51109[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (19))){
var inst_50237 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50237)){
var statearr_50689_51110 = state_50560__$1;
(statearr_50689_51110[(1)] = (20));

} else {
var statearr_50690_51111 = state_50560__$1;
(statearr_50690_51111[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (57))){
var inst_50368 = (state_50560[(8)]);
var inst_50385 = (state_50560[(7)]);
var inst_50385__$1 = cljs.core.seq(inst_50368);
var state_50560__$1 = (function (){var statearr_50691 = state_50560;
(statearr_50691[(7)] = inst_50385__$1);

return statearr_50691;
})();
if(inst_50385__$1){
var statearr_50692_51112 = state_50560__$1;
(statearr_50692_51112[(1)] = (62));

} else {
var statearr_50693_51113 = state_50560__$1;
(statearr_50693_51113[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (68))){
var inst_50394 = (state_50560[(43)]);
var inst_50396 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50394);
var state_50560__$1 = state_50560;
var statearr_50694_51114 = state_50560__$1;
(statearr_50694_51114[(2)] = inst_50396);

(statearr_50694_51114[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (11))){
var inst_50218 = (state_50560[(2)]);
var inst_50219 = (function(){throw inst_50218})();
var state_50560__$1 = state_50560;
var statearr_50696_51115 = state_50560__$1;
(statearr_50696_51115[(2)] = inst_50219);

(statearr_50696_51115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (9))){
var inst_50217 = (state_50560[(36)]);
var _ = (function (){var statearr_50697 = state_50560;
(statearr_50697[(4)] = cljs.core.cons((12),(state_50560[(4)])));

return statearr_50697;
})();
var inst_50225 = (inst_50217 instanceof Promise);
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50225)){
var statearr_50698_51116 = state_50560__$1;
(statearr_50698_51116[(1)] = (13));

} else {
var statearr_50699_51117 = state_50560__$1;
(statearr_50699_51117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (5))){
var _ = (function (){var statearr_50700 = state_50560;
(statearr_50700[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50700;
})();
var state_50560__$1 = state_50560;
var ex50695 = (state_50560__$1[(2)]);
var statearr_50701_51118 = state_50560__$1;
(statearr_50701_51118[(5)] = ex50695);


var statearr_50702_51119 = state_50560__$1;
(statearr_50702_51119[(1)] = (4));

(statearr_50702_51119[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (83))){
var inst_50511 = (state_50560[(19)]);
var state_50560__$1 = state_50560;
var statearr_50703_51120 = state_50560__$1;
(statearr_50703_51120[(2)] = inst_50511);

(statearr_50703_51120[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (14))){
var inst_50217 = (state_50560[(36)]);
var inst_50244 = inst_50217.init;
var inst_50245 = (inst_50244 == null);
var inst_50246 = cljs.core.not(inst_50245);
var state_50560__$1 = state_50560;
if(inst_50246){
var statearr_50704_51121 = state_50560__$1;
(statearr_50704_51121[(1)] = (23));

} else {
var statearr_50705_51122 = state_50560__$1;
(statearr_50705_51122[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (45))){
var inst_50319 = (state_50560[(38)]);
var inst_50329 = cljs.core.seq(inst_50319);
var inst_50330 = cljs.core.first(inst_50329);
var inst_50331 = cljs.core.next(inst_50329);
var inst_50332 = cljs.core.PersistentVector.EMPTY;
var inst_50333 = inst_50319;
var inst_50334 = inst_50332;
var state_50560__$1 = (function (){var statearr_50706 = state_50560;
(statearr_50706[(48)] = inst_50330);

(statearr_50706[(49)] = inst_50331);

(statearr_50706[(30)] = inst_50333);

(statearr_50706[(32)] = inst_50334);

return statearr_50706;
})();
var statearr_50707_51123 = state_50560__$1;
(statearr_50707_51123[(2)] = null);

(statearr_50707_51123[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (53))){
var inst_50349 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50708_51124 = state_50560__$1;
(statearr_50708_51124[(2)] = inst_50349);

(statearr_50708_51124[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (78))){
var inst_50506 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50709_51125 = state_50560__$1;
(statearr_50709_51125[(2)] = inst_50506);

(statearr_50709_51125[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (26))){
var inst_50251 = (state_50560[(21)]);
var inst_50252 = (state_50560[(40)]);
var inst_50251__$1 = (state_50560[(2)]);
var inst_50252__$1 = (inst_50251__$1 instanceof cljs.core.ExceptionInfo);
var state_50560__$1 = (function (){var statearr_50710 = state_50560;
(statearr_50710[(21)] = inst_50251__$1);

(statearr_50710[(40)] = inst_50252__$1);

return statearr_50710;
})();
if(cljs.core.truth_(inst_50252__$1)){
var statearr_50711_51126 = state_50560__$1;
(statearr_50711_51126[(1)] = (27));

} else {
var statearr_50712_51127 = state_50560__$1;
(statearr_50712_51127[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (16))){
var inst_50229 = (state_50560[(17)]);
var inst_50230 = (state_50560[(50)]);
var inst_50229__$1 = (state_50560[(2)]);
var inst_50230__$1 = (inst_50229__$1 instanceof cljs.core.ExceptionInfo);
var state_50560__$1 = (function (){var statearr_50713 = state_50560;
(statearr_50713[(17)] = inst_50229__$1);

(statearr_50713[(50)] = inst_50230__$1);

return statearr_50713;
})();
if(cljs.core.truth_(inst_50230__$1)){
var statearr_50714_51128 = state_50560__$1;
(statearr_50714_51128[(1)] = (17));

} else {
var statearr_50715_51130 = state_50560__$1;
(statearr_50715_51130[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (81))){
var inst_50503 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50716_51131 = state_50560__$1;
(statearr_50716_51131[(2)] = inst_50503);

(statearr_50716_51131[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (79))){
var inst_50459 = (state_50560[(14)]);
var inst_50463 = cljs.core.chunk_first(inst_50459);
var inst_50464 = cljs.core.chunk_rest(inst_50459);
var inst_50465 = cljs.core.count(inst_50463);
var inst_50417 = inst_50464;
var inst_50418 = inst_50463;
var inst_50419 = inst_50465;
var inst_50420 = (0);
var state_50560__$1 = (function (){var statearr_50717 = state_50560;
(statearr_50717[(13)] = inst_50417);

(statearr_50717[(24)] = inst_50418);

(statearr_50717[(25)] = inst_50419);

(statearr_50717[(26)] = inst_50420);

return statearr_50717;
})();
var statearr_50718_51132 = state_50560__$1;
(statearr_50718_51132[(2)] = null);

(statearr_50718_51132[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (38))){
var inst_50300 = (state_50560[(28)]);
var inst_50301 = (state_50560[(34)]);
var inst_50300__$1 = (state_50560[(2)]);
var inst_50301__$1 = (inst_50300__$1 instanceof cljs.core.ExceptionInfo);
var state_50560__$1 = (function (){var statearr_50719 = state_50560;
(statearr_50719[(28)] = inst_50300__$1);

(statearr_50719[(34)] = inst_50301__$1);

return statearr_50719;
})();
if(cljs.core.truth_(inst_50301__$1)){
var statearr_50720_51133 = state_50560__$1;
(statearr_50720_51133[(1)] = (39));

} else {
var statearr_50721_51134 = state_50560__$1;
(statearr_50721_51134[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (87))){
var inst_50517 = (state_50560[(27)]);
var state_50560__$1 = state_50560;
var statearr_50725_51135 = state_50560__$1;
(statearr_50725_51135[(2)] = inst_50517);

(statearr_50725_51135[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (30))){
var inst_50251 = (state_50560[(21)]);
var inst_50261 = (function(){throw inst_50251})();
var state_50560__$1 = state_50560;
var statearr_50726_51136 = state_50560__$1;
(statearr_50726_51136[(2)] = inst_50261);

(statearr_50726_51136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (73))){
var inst_50418 = (state_50560[(24)]);
var inst_50420 = (state_50560[(26)]);
var inst_50360 = (state_50560[(44)]);
var inst_50361 = (state_50560[(45)]);
var inst_50362 = (state_50560[(46)]);
var inst_50417 = (state_50560[(13)]);
var inst_50419 = (state_50560[(25)]);
var inst_50425 = cljs.core._nth(inst_50418,inst_50420);
var inst_50426 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_50425);
var inst_50427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50428 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50429 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_50430 = [inst_50360,inst_50361];
var inst_50431 = cljs.core.PersistentHashMap.fromArrays(inst_50429,inst_50430);
var inst_50432 = [inst_50431];
var inst_50433 = cljs.core.PersistentHashMap.fromArrays(inst_50428,inst_50432);
var inst_50434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50435 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50436 = bb_web_ds_tools.runtime.webr.get_width(inst_50425);
var inst_50437 = (inst_50436 * inst_50362);
var inst_50438 = (inst_50437 | (0));
var inst_50439 = bb_web_ds_tools.runtime.webr.get_height(inst_50425);
var inst_50440 = (inst_50439 * inst_50362);
var inst_50441 = (inst_50440 | (0));
var inst_50442 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_50443 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50426),")"].join('');
var inst_50444 = [inst_50443,"cover"];
var inst_50445 = cljs.core.PersistentHashMap.fromArrays(inst_50442,inst_50444);
var inst_50446 = [inst_50438,inst_50441,inst_50445];
var inst_50447 = cljs.core.PersistentHashMap.fromArrays(inst_50435,inst_50446);
var inst_50448 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_50447];
var inst_50449 = (new cljs.core.PersistentVector(null,2,(5),inst_50434,inst_50448,null));
var inst_50450 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_50433,inst_50449];
var inst_50451 = (new cljs.core.PersistentVector(null,3,(5),inst_50427,inst_50450,null));
var inst_50452 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50453 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_50451,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_50454 = (new cljs.core.PersistentVector(null,3,(5),inst_50452,inst_50453,null));
var inst_50455 = re_frame.core.dispatch(inst_50454);
var inst_50456 = (inst_50420 + (1));
var tmp50722 = inst_50419;
var tmp50723 = inst_50417;
var tmp50724 = inst_50418;
var inst_50417__$1 = tmp50723;
var inst_50418__$1 = tmp50724;
var inst_50419__$1 = tmp50722;
var inst_50420__$1 = inst_50456;
var state_50560__$1 = (function (){var statearr_50728 = state_50560;
(statearr_50728[(51)] = inst_50455);

(statearr_50728[(13)] = inst_50417__$1);

(statearr_50728[(24)] = inst_50418__$1);

(statearr_50728[(25)] = inst_50419__$1);

(statearr_50728[(26)] = inst_50420__$1);

return statearr_50728;
})();
var statearr_50729_51149 = state_50560__$1;
(statearr_50729_51149[(2)] = null);

(statearr_50729_51149[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (10))){
var inst_50272 = (state_50560[(2)]);
var state_50560__$1 = (function (){var statearr_50736 = state_50560;
(statearr_50736[(35)] = inst_50272);

return statearr_50736;
})();
var statearr_50738_51150 = state_50560__$1;
(statearr_50738_51150[(2)] = null);

(statearr_50738_51150[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (18))){
var inst_50230 = (state_50560[(50)]);
var state_50560__$1 = state_50560;
var statearr_50739_51151 = state_50560__$1;
(statearr_50739_51151[(2)] = inst_50230);

(statearr_50739_51151[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (52))){
var inst_50344 = (state_50560[(33)]);
var state_50560__$1 = state_50560;
var statearr_50740_51152 = state_50560__$1;
(statearr_50740_51152[(2)] = inst_50344);

(statearr_50740_51152[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (67))){
var inst_50403 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50741_51153 = state_50560__$1;
(statearr_50741_51153[(2)] = inst_50403);

(statearr_50741_51153[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (71))){
var inst_50420 = (state_50560[(26)]);
var inst_50419 = (state_50560[(25)]);
var inst_50422 = (inst_50420 < inst_50419);
var inst_50423 = inst_50422;
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50423)){
var statearr_50742_51156 = state_50560__$1;
(statearr_50742_51156[(1)] = (73));

} else {
var statearr_50743_51157 = state_50560__$1;
(statearr_50743_51157[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (42))){
var inst_50300 = (state_50560[(28)]);
var inst_50310 = (function(){throw inst_50300})();
var state_50560__$1 = state_50560;
var statearr_50745_51158 = state_50560__$1;
(statearr_50745_51158[(2)] = inst_50310);

(statearr_50745_51158[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (80))){
var inst_50459 = (state_50560[(14)]);
var inst_50360 = (state_50560[(44)]);
var inst_50361 = (state_50560[(45)]);
var inst_50362 = (state_50560[(46)]);
var inst_50468 = cljs.core.first(inst_50459);
var inst_50469 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_50468);
var inst_50470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50471 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50472 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_50473 = [inst_50360,inst_50361];
var inst_50474 = cljs.core.PersistentHashMap.fromArrays(inst_50472,inst_50473);
var inst_50475 = [inst_50474];
var inst_50476 = cljs.core.PersistentHashMap.fromArrays(inst_50471,inst_50475);
var inst_50477 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50478 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50479 = bb_web_ds_tools.runtime.webr.get_width(inst_50468);
var inst_50480 = (inst_50479 * inst_50362);
var inst_50481 = (inst_50480 | (0));
var inst_50483 = bb_web_ds_tools.runtime.webr.get_height(inst_50468);
var inst_50484 = (inst_50483 * inst_50362);
var inst_50485 = (inst_50484 | (0));
var inst_50486 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_50487 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50469),")"].join('');
var inst_50488 = [inst_50487,"cover"];
var inst_50489 = cljs.core.PersistentHashMap.fromArrays(inst_50486,inst_50488);
var inst_50490 = [inst_50481,inst_50485,inst_50489];
var inst_50491 = cljs.core.PersistentHashMap.fromArrays(inst_50478,inst_50490);
var inst_50492 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_50491];
var inst_50493 = (new cljs.core.PersistentVector(null,2,(5),inst_50477,inst_50492,null));
var inst_50494 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_50476,inst_50493];
var inst_50495 = (new cljs.core.PersistentVector(null,3,(5),inst_50470,inst_50494,null));
var inst_50496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50497 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_50495,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_50498 = (new cljs.core.PersistentVector(null,3,(5),inst_50496,inst_50497,null));
var inst_50499 = re_frame.core.dispatch(inst_50498);
var inst_50500 = cljs.core.next(inst_50459);
var inst_50417 = inst_50500;
var inst_50418 = null;
var inst_50419 = (0);
var inst_50420 = (0);
var state_50560__$1 = (function (){var statearr_50746 = state_50560;
(statearr_50746[(52)] = inst_50499);

(statearr_50746[(13)] = inst_50417);

(statearr_50746[(24)] = inst_50418);

(statearr_50746[(25)] = inst_50419);

(statearr_50746[(26)] = inst_50420);

return statearr_50746;
})();
var statearr_50747_51159 = state_50560__$1;
(statearr_50747_51159[(2)] = null);

(statearr_50747_51159[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (37))){
var _ = (function (){var statearr_50748 = state_50560;
(statearr_50748[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50748;
})();
var state_50560__$1 = state_50560;
var ex50744 = (state_50560__$1[(2)]);
var statearr_50749_51165 = state_50560__$1;
(statearr_50749_51165[(5)] = ex50744);


var statearr_50750_51166 = state_50560__$1;
(statearr_50750_51166[(1)] = (36));

(statearr_50750_51166[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (63))){
var state_50560__$1 = state_50560;
var statearr_50751_51167 = state_50560__$1;
(statearr_50751_51167[(2)] = null);

(statearr_50751_51167[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (94))){
var inst_50317 = (state_50560[(18)]);
var inst_50533 = (state_50560[(2)]);
var inst_50534 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50317);
var state_50560__$1 = (function (){var statearr_50752 = state_50560;
(statearr_50752[(53)] = inst_50533);

return statearr_50752;
})();
var statearr_50753_51168 = state_50560__$1;
(statearr_50753_51168[(2)] = inst_50534);

(statearr_50753_51168[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (8))){
var inst_50555 = (state_50560[(2)]);
var _ = (function (){var statearr_50755 = state_50560;
(statearr_50755[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50755;
})();
var state_50560__$1 = state_50560;
var statearr_50756_51169 = state_50560__$1;
(statearr_50756_51169[(2)] = inst_50555);

(statearr_50756_51169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (49))){
var inst_50351 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50757_51172 = state_50560__$1;
(statearr_50757_51172[(2)] = inst_50351);

(statearr_50757_51172[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (84))){
var inst_50532 = (state_50560[(2)]);
var state_50560__$1 = (function (){var statearr_50759 = state_50560;
(statearr_50759[(29)] = inst_50532);

return statearr_50759;
})();
var statearr_50760_51173 = state_50560__$1;
(statearr_50760_51173[(2)] = null);

(statearr_50760_51173[(1)] = (92));


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
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0 = (function (){
var statearr_50763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50763[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32396__auto__);

(statearr_50763[(1)] = (1));

return statearr_50763;
});
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1 = (function (state_50560){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_50560);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50764){var ex__32399__auto__ = e50764;
var statearr_50765_51174 = state_50560;
(statearr_50765_51174[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50560[(4)]))){
var statearr_50766_51175 = state_50560;
(statearr_50766_51175[(1)] = cljs.core.first((state_50560[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51176 = state_50560;
state_50560 = G__51176;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = function(state_50560){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1.call(this,state_50560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_50767 = f__32477__auto__();
(statearr_50767[(6)] = c__32476__auto__);

return statearr_50767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
} else {
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null));
}
}));

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$applyTo = (function (seq50193){
var G__50194 = cljs.core.first(seq50193);
var seq50193__$1 = cljs.core.next(seq50193);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50194,seq50193__$1);
}));


//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
