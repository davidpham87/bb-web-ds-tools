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
var len__5749__auto___50807 = arguments.length;
var i__5750__auto___50808 = (0);
while(true){
if((i__5750__auto___50808 < len__5749__auto___50807)){
args__5755__auto__.push((arguments[i__5750__auto___50808]));

var G__50809 = (i__5750__auto___50808 + (1));
i__5750__auto___50808 = G__50809;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__49688,p__49689){
var map__49690 = p__49688;
var map__49690__$1 = cljs.core.__destructure_map(map__49690);
var value = map__49690__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49690__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__49691 = p__49689;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49691,(0),null);
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
if(cljs.core.truth_((function (){var G__49698 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__49697 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__49697.cljs$core$IFn$_invoke$arity$1 ? fexpr__49697.cljs$core$IFn$_invoke$arity$1(G__49698) : fexpr__49697.call(null,G__49698));
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
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_49714){
var state_val_49716 = (state_49714[(1)]);
if((state_val_49716 === (1))){
var state_49714__$1 = state_49714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49714__$1,(2),bb_web_ds_tools.runtime.webr.input_buffer,text);
} else {
if((state_val_49716 === (2))){
var inst_49710 = (state_49714[(2)]);
var state_49714__$1 = state_49714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49714__$1,inst_49710);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0 = (function (){
var statearr_49721 = [null,null,null,null,null,null,null];
(statearr_49721[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32400__auto__);

(statearr_49721[(1)] = (1));

return statearr_49721;
});
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1 = (function (state_49714){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_49714);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e49723){var ex__32403__auto__ = e49723;
var statearr_49724_50810 = state_49714;
(statearr_49724_50810[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_49714[(4)]))){
var statearr_49725_50811 = state_49714;
(statearr_49725_50811[(1)] = cljs.core.first((state_49714[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50812 = state_49714;
state_49714 = G__50812;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = function(state_49714){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1.call(this,state_49714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_49727 = f__32475__auto__();
(statearr_49727[(6)] = c__32474__auto__);

return statearr_49727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),viewer__$1], null));

}
}
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq49686){
var G__49687 = cljs.core.first(seq49686);
var seq49686__$1 = cljs.core.next(seq49686);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49687,seq49686__$1);
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
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_49797){
var state_val_49798 = (state_49797[(1)]);
if((state_val_49798 === (7))){
var inst_49793 = (state_49797[(2)]);
var state_49797__$1 = state_49797;
var statearr_49799_50819 = state_49797__$1;
(statearr_49799_50819[(2)] = inst_49793);

(statearr_49799_50819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (20))){
var inst_49773 = (state_49797[(7)]);
var inst_49777 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49773);
var state_49797__$1 = state_49797;
var statearr_49800_50821 = state_49797__$1;
(statearr_49800_50821[(2)] = inst_49777);

(statearr_49800_50821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (1))){
var inst_49729 = (state_49797[(8)]);
var inst_49729__$1 = msg.type;
var inst_49730 = msg.data;
var inst_49731 = ["stderr",null,"stdout",null];
var inst_49732 = (new cljs.core.PersistentArrayMap(null,2,inst_49731,null));
var inst_49733 = (new cljs.core.PersistentHashSet(null,inst_49732,null));
var inst_49734 = (inst_49733.cljs$core$IFn$_invoke$arity$1 ? inst_49733.cljs$core$IFn$_invoke$arity$1(inst_49729__$1) : inst_49733.call(null,inst_49729__$1));
var state_49797__$1 = (function (){var statearr_49801 = state_49797;
(statearr_49801[(8)] = inst_49729__$1);

(statearr_49801[(9)] = inst_49730);

return statearr_49801;
})();
if(cljs.core.truth_(inst_49734)){
var statearr_49802_50822 = state_49797__$1;
(statearr_49802_50822[(1)] = (2));

} else {
var statearr_49803_50823 = state_49797__$1;
(statearr_49803_50823[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (24))){
var inst_49791 = (state_49797[(2)]);
var state_49797__$1 = state_49797;
var statearr_49804_50824 = state_49797__$1;
(statearr_49804_50824[(2)] = inst_49791);

(statearr_49804_50824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (4))){
var inst_49795 = (state_49797[(2)]);
var state_49797__$1 = state_49797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49797__$1,inst_49795);
} else {
if((state_val_49798 === (15))){
var inst_49767 = (state_49797[(2)]);
var state_49797__$1 = state_49797;
if(cljs.core.truth_(inst_49767)){
var statearr_49805_50825 = state_49797__$1;
(statearr_49805_50825[(1)] = (16));

} else {
var statearr_49806_50826 = state_49797__$1;
(statearr_49806_50826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (21))){
var inst_49729 = (state_49797[(8)]);
var inst_49779 = (state_49797[(2)]);
var inst_49780 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49781 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49729);
var inst_49782 = [inst_49781,inst_49779];
var inst_49783 = cljs.core.PersistentHashMap.fromArrays(inst_49780,inst_49782);
var _ = (function (){var statearr_49807 = state_49797;
(statearr_49807[(4)] = cljs.core.rest((state_49797[(4)])));

return statearr_49807;
})();
var state_49797__$1 = state_49797;
var statearr_49808_50828 = state_49797__$1;
(statearr_49808_50828[(2)] = inst_49783);

(statearr_49808_50828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (13))){
var inst_49759 = (state_49797[(10)]);
var inst_49762 = cljs.core.ex_data(inst_49759);
var inst_49763 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49762);
var inst_49764 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49763,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49797__$1 = state_49797;
var statearr_49809_50832 = state_49797__$1;
(statearr_49809_50832[(2)] = inst_49764);

(statearr_49809_50832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (22))){
var state_49797__$1 = state_49797;
var statearr_49810_50833 = state_49797__$1;
(statearr_49810_50833[(2)] = null);

(statearr_49810_50833[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (6))){
var state_49797__$1 = state_49797;
var statearr_49811_50834 = state_49797__$1;
(statearr_49811_50834[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (17))){
var inst_49759 = (state_49797[(10)]);
var state_49797__$1 = state_49797;
var statearr_49813_50835 = state_49797__$1;
(statearr_49813_50835[(2)] = inst_49759);

(statearr_49813_50835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (3))){
var inst_49729 = (state_49797[(8)]);
var inst_49741 = ["message",null,"warning",null];
var inst_49742 = (new cljs.core.PersistentArrayMap(null,2,inst_49741,null));
var inst_49743 = (new cljs.core.PersistentHashSet(null,inst_49742,null));
var inst_49744 = (inst_49743.cljs$core$IFn$_invoke$arity$1 ? inst_49743.cljs$core$IFn$_invoke$arity$1(inst_49729) : inst_49743.call(null,inst_49729));
var state_49797__$1 = state_49797;
if(cljs.core.truth_(inst_49744)){
var statearr_49814_50838 = state_49797__$1;
(statearr_49814_50838[(1)] = (5));

} else {
var statearr_49815_50839 = state_49797__$1;
(statearr_49815_50839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (12))){
var inst_49759 = (state_49797[(10)]);
var inst_49760 = (state_49797[(11)]);
var inst_49759__$1 = (state_49797[(2)]);
var inst_49760__$1 = (inst_49759__$1 instanceof cljs.core.ExceptionInfo);
var state_49797__$1 = (function (){var statearr_49816 = state_49797;
(statearr_49816[(10)] = inst_49759__$1);

(statearr_49816[(11)] = inst_49760__$1);

return statearr_49816;
})();
if(cljs.core.truth_(inst_49760__$1)){
var statearr_49817_50844 = state_49797__$1;
(statearr_49817_50844[(1)] = (13));

} else {
var statearr_49818_50845 = state_49797__$1;
(statearr_49818_50845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (2))){
var inst_49729 = (state_49797[(8)]);
var inst_49730 = (state_49797[(9)]);
var inst_49736 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49737 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49729);
var inst_49738 = [inst_49737,inst_49730];
var inst_49739 = cljs.core.PersistentHashMap.fromArrays(inst_49736,inst_49738);
var state_49797__$1 = state_49797;
var statearr_49819_50846 = state_49797__$1;
(statearr_49819_50846[(2)] = inst_49739);

(statearr_49819_50846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (23))){
var state_49797__$1 = state_49797;
var statearr_49821_50847 = state_49797__$1;
(statearr_49821_50847[(2)] = null);

(statearr_49821_50847[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (19))){
var inst_49774 = (state_49797[(12)]);
var state_49797__$1 = state_49797;
var statearr_49822_50851 = state_49797__$1;
(statearr_49822_50851[(2)] = inst_49774);

(statearr_49822_50851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (11))){
var _ = (function (){var statearr_49823 = state_49797;
(statearr_49823[(4)] = cljs.core.rest((state_49797[(4)])));

return statearr_49823;
})();
var state_49797__$1 = state_49797;
var ex49820 = (state_49797__$1[(2)]);
var statearr_49824_50853 = state_49797__$1;
(statearr_49824_50853[(5)] = ex49820);


var statearr_49825_50855 = state_49797__$1;
(statearr_49825_50855[(1)] = (10));

(statearr_49825_50855[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (9))){
var inst_49786 = (state_49797[(2)]);
var state_49797__$1 = state_49797;
var statearr_49826_50859 = state_49797__$1;
(statearr_49826_50859[(2)] = inst_49786);

(statearr_49826_50859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (5))){
var state_49797__$1 = state_49797;
var statearr_49827_50861 = state_49797__$1;
(statearr_49827_50861[(2)] = null);

(statearr_49827_50861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (14))){
var inst_49760 = (state_49797[(11)]);
var state_49797__$1 = state_49797;
var statearr_49828_50865 = state_49797__$1;
(statearr_49828_50865[(2)] = inst_49760);

(statearr_49828_50865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (16))){
var inst_49759 = (state_49797[(10)]);
var inst_49769 = (function(){throw inst_49759})();
var state_49797__$1 = state_49797;
var statearr_49829_50872 = state_49797__$1;
(statearr_49829_50872[(2)] = inst_49769);

(statearr_49829_50872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (10))){
var inst_49729 = (state_49797[(8)]);
var inst_49746 = (state_49797[(2)]);
var inst_49747 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49748 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49729);
var inst_49749 = [inst_49748,"Error decoding message"];
var inst_49750 = cljs.core.PersistentHashMap.fromArrays(inst_49747,inst_49749);
var state_49797__$1 = (function (){var statearr_49830 = state_49797;
(statearr_49830[(13)] = inst_49746);

return statearr_49830;
})();
var statearr_49831_50877 = state_49797__$1;
(statearr_49831_50877[(2)] = inst_49750);

(statearr_49831_50877[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (18))){
var inst_49773 = (state_49797[(7)]);
var inst_49774 = (state_49797[(12)]);
var inst_49772 = (state_49797[(2)]);
var inst_49773__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49772,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_49774__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_49773__$1);
var state_49797__$1 = (function (){var statearr_49832 = state_49797;
(statearr_49832[(7)] = inst_49773__$1);

(statearr_49832[(12)] = inst_49774__$1);

return statearr_49832;
})();
if(cljs.core.truth_(inst_49774__$1)){
var statearr_49833_50886 = state_49797__$1;
(statearr_49833_50886[(1)] = (19));

} else {
var statearr_49834_50887 = state_49797__$1;
(statearr_49834_50887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (8))){
var inst_49730 = (state_49797[(9)]);
var _ = (function (){var statearr_49835 = state_49797;
(statearr_49835[(4)] = cljs.core.cons((11),(state_49797[(4)])));

return statearr_49835;
})();
var inst_49756 = bb_web_ds_tools.runtime.webr.to_js(inst_49730);
var inst_49757 = cljs.core.async.interop.p__GT_c(inst_49756);
var state_49797__$1 = state_49797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49797__$1,(12),inst_49757);
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
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto__ = null;
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto____0 = (function (){
var statearr_49836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49836[(0)] = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto__);

(statearr_49836[(1)] = (1));

return statearr_49836;
});
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto____1 = (function (state_49797){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_49797);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e49837){var ex__32403__auto__ = e49837;
var statearr_49838_50888 = state_49797;
(statearr_49838_50888[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_49797[(4)]))){
var statearr_49839_50890 = state_49797;
(statearr_49839_50890[(1)] = cljs.core.first((state_49797[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50892 = state_49797;
state_49797 = G__50892;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto__ = function(state_49797){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto____1.call(this,state_49797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_49840 = f__32475__auto__();
(statearr_49840[(6)] = c__32474__auto__);

return statearr_49840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
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
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_49890){
var state_val_49891 = (state_49890[(1)]);
if((state_val_49891 === (7))){
var inst_49886 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
var statearr_49892_50897 = state_49890__$1;
(statearr_49892_50897[(2)] = inst_49886);

(statearr_49892_50897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (1))){
var inst_49841 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_49890__$1 = state_49890;
if(cljs.core.truth_(inst_49841)){
var statearr_49893_50906 = state_49890__$1;
(statearr_49893_50906[(1)] = (2));

} else {
var statearr_49894_50907 = state_49890__$1;
(statearr_49894_50907[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (4))){
var inst_49888 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49890__$1,inst_49888);
} else {
if((state_val_49891 === (15))){
var inst_49873 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
if(cljs.core.truth_(inst_49873)){
var statearr_49895_50909 = state_49890__$1;
(statearr_49895_50909[(1)] = (16));

} else {
var statearr_49896_50911 = state_49890__$1;
(statearr_49896_50911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (13))){
var inst_49865 = (state_49890[(7)]);
var inst_49868 = cljs.core.ex_data(inst_49865);
var inst_49869 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49868);
var inst_49870 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49869,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49890__$1 = state_49890;
var statearr_49897_50912 = state_49890__$1;
(statearr_49897_50912[(2)] = inst_49870);

(statearr_49897_50912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (6))){
var inst_49884 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_49890__$1 = state_49890;
var statearr_49898_50916 = state_49890__$1;
(statearr_49898_50916[(2)] = inst_49884);

(statearr_49898_50916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (17))){
var inst_49865 = (state_49890[(7)]);
var state_49890__$1 = state_49890;
var statearr_49899_50917 = state_49890__$1;
(statearr_49899_50917[(2)] = inst_49865);

(statearr_49899_50917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (3))){
var inst_49845 = (typeof WebR !== 'undefined');
var state_49890__$1 = state_49890;
if(cljs.core.truth_(inst_49845)){
var statearr_49900_50918 = state_49890__$1;
(statearr_49900_50918[(1)] = (5));

} else {
var statearr_49901_50919 = state_49890__$1;
(statearr_49901_50919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (12))){
var inst_49865 = (state_49890[(7)]);
var inst_49866 = (state_49890[(8)]);
var inst_49865__$1 = (state_49890[(2)]);
var inst_49866__$1 = (inst_49865__$1 instanceof cljs.core.ExceptionInfo);
var state_49890__$1 = (function (){var statearr_49903 = state_49890;
(statearr_49903[(7)] = inst_49865__$1);

(statearr_49903[(8)] = inst_49866__$1);

return statearr_49903;
})();
if(cljs.core.truth_(inst_49866__$1)){
var statearr_49904_50927 = state_49890__$1;
(statearr_49904_50927[(1)] = (13));

} else {
var statearr_49905_50928 = state_49890__$1;
(statearr_49905_50928[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (2))){
var inst_49843 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_49890__$1 = state_49890;
var statearr_49906_50929 = state_49890__$1;
(statearr_49906_50929[(2)] = inst_49843);

(statearr_49906_50929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (11))){
var _ = (function (){var statearr_49907 = state_49890;
(statearr_49907[(4)] = cljs.core.rest((state_49890[(4)])));

return statearr_49907;
})();
var state_49890__$1 = state_49890;
var ex49902 = (state_49890__$1[(2)]);
var statearr_49908_50930 = state_49890__$1;
(statearr_49908_50930[(5)] = ex49902);


var statearr_49909_50931 = state_49890__$1;
(statearr_49909_50931[(1)] = (10));

(statearr_49909_50931[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (9))){
var inst_49882 = (state_49890[(2)]);
var state_49890__$1 = state_49890;
var statearr_49910_50932 = state_49890__$1;
(statearr_49910_50932[(2)] = inst_49882);

(statearr_49910_50932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (5))){
var state_49890__$1 = state_49890;
var statearr_49911_50933 = state_49890__$1;
(statearr_49911_50933[(2)] = null);

(statearr_49911_50933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (14))){
var inst_49866 = (state_49890[(8)]);
var state_49890__$1 = state_49890;
var statearr_49912_50934 = state_49890__$1;
(statearr_49912_50934[(2)] = inst_49866);

(statearr_49912_50934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (16))){
var inst_49865 = (state_49890[(7)]);
var inst_49875 = (function(){throw inst_49865})();
var state_49890__$1 = state_49890;
var statearr_49913_50937 = state_49890__$1;
(statearr_49913_50937[(2)] = inst_49875);

(statearr_49913_50937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (10))){
var inst_49847 = (state_49890[(2)]);
var inst_49848 = console.error("WebR Init Error:",inst_49847);
var inst_49849 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49847)].join('');
var inst_49850 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_49849) : on_error.call(null,inst_49849));
var state_49890__$1 = (function (){var statearr_49914 = state_49890;
(statearr_49914[(9)] = inst_49848);

return statearr_49914;
})();
var statearr_49915_50939 = state_49890__$1;
(statearr_49915_50939[(2)] = inst_49850);

(statearr_49915_50939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (18))){
var inst_49878 = (state_49890[(2)]);
var inst_49879 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_49916 = state_49890;
(statearr_49916[(4)] = cljs.core.rest((state_49890[(4)])));

return statearr_49916;
})();
var state_49890__$1 = (function (){var statearr_49917 = state_49890;
(statearr_49917[(10)] = inst_49878);

return statearr_49917;
})();
var statearr_49918_50943 = state_49890__$1;
(statearr_49918_50943[(2)] = inst_49879);

(statearr_49918_50943[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49891 === (8))){
var _ = (function (){var statearr_49919 = state_49890;
(statearr_49919[(4)] = cljs.core.cons((11),(state_49890[(4)])));

return statearr_49919;
})();
var inst_49856 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_49857 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_49858 = cljs.core.PersistentHashMap.fromArrays(inst_49856,inst_49857);
var inst_49859 = cljs.core.clj__GT_js(inst_49858);
var inst_49860 = (new WebR(inst_49859));
var inst_49861 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_49860);
var inst_49862 = bb_web_ds_tools.runtime.webr.init_obj(inst_49860);
var inst_49863 = cljs.core.async.interop.p__GT_c(inst_49862);
var state_49890__$1 = (function (){var statearr_49928 = state_49890;
(statearr_49928[(11)] = inst_49861);

return statearr_49928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49890__$1,(12),inst_49863);
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
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto__ = null;
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto____0 = (function (){
var statearr_49929 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49929[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto__);

(statearr_49929[(1)] = (1));

return statearr_49929;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto____1 = (function (state_49890){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_49890);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e49930){var ex__32403__auto__ = e49930;
var statearr_49931_50946 = state_49890;
(statearr_49931_50946[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_49890[(4)]))){
var statearr_49932_50947 = state_49890;
(statearr_49932_50947[(1)] = cljs.core.first((state_49890[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50948 = state_49890;
state_49890 = G__50948;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto__ = function(state_49890){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto____1.call(this,state_49890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_49933 = f__32475__auto__();
(statearr_49933[(6)] = c__32474__auto__);

return statearr_49933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
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
var ds_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__49938){
var vec__49939 = p__49938;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49939,(0),null);
var map__49942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49939,(1),null);
var map__49942__$1 = cljs.core.__destructure_map(map__49942);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49942__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49942__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
var len__5749__auto___50953 = arguments.length;
var i__5750__auto___50954 = (0);
while(true){
if((i__5750__auto___50954 < len__5749__auto___50953)){
args__5755__auto__.push((arguments[i__5750__auto___50954]));

var G__50955 = (i__5750__auto___50954 + (1));
i__5750__auto___50954 = G__50955;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic = (function (datasets,p__49960){
var vec__49961 = p__49960;
var keys_to_bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49961,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_49995){
var state_val_49996 = (state_49995[(1)]);
if((state_val_49996 === (7))){
var inst_49977 = (state_49995[(7)]);
var inst_49980 = cljs.core.ex_data(inst_49977);
var inst_49981 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49980);
var inst_49982 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49981,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49995__$1 = state_49995;
var statearr_49997_50956 = state_49995__$1;
(statearr_49997_50956[(2)] = inst_49982);

(statearr_49997_50956[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (1))){
var state_49995__$1 = state_49995;
var statearr_49998_50957 = state_49995__$1;
(statearr_49998_50957[(2)] = null);

(statearr_49998_50957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (4))){
var inst_49964 = (state_49995[(2)]);
var inst_49965 = console.error("Failed to bind datasets to R:",inst_49964);
var state_49995__$1 = state_49995;
var statearr_49999_50958 = state_49995__$1;
(statearr_49999_50958[(2)] = inst_49965);

(statearr_49999_50958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (6))){
var inst_49977 = (state_49995[(7)]);
var inst_49978 = (state_49995[(8)]);
var inst_49977__$1 = (state_49995[(2)]);
var inst_49978__$1 = (inst_49977__$1 instanceof cljs.core.ExceptionInfo);
var state_49995__$1 = (function (){var statearr_50000 = state_49995;
(statearr_50000[(7)] = inst_49977__$1);

(statearr_50000[(8)] = inst_49978__$1);

return statearr_50000;
})();
if(cljs.core.truth_(inst_49978__$1)){
var statearr_50001_50968 = state_49995__$1;
(statearr_50001_50968[(1)] = (7));

} else {
var statearr_50002_50969 = state_49995__$1;
(statearr_50002_50969[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (3))){
var inst_49993 = (state_49995[(2)]);
var state_49995__$1 = state_49995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49995__$1,inst_49993);
} else {
if((state_val_49996 === (12))){
var inst_49990 = (state_49995[(2)]);
var _ = (function (){var statearr_50003 = state_49995;
(statearr_50003[(4)] = cljs.core.rest((state_49995[(4)])));

return statearr_50003;
})();
var state_49995__$1 = state_49995;
var statearr_50004_50970 = state_49995__$1;
(statearr_50004_50970[(2)] = inst_49990);

(statearr_50004_50970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (2))){
var _ = (function (){var statearr_50005 = state_49995;
(statearr_50005[(4)] = cljs.core.cons((5),(state_49995[(4)])));

return statearr_50005;
})();
var inst_49971 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_49972 = bb_web_ds_tools.runtime.webr.datasets__GT_js(datasets,keys_to_bind);
var inst_49973 = bb_web_ds_tools.runtime.webr.get_global_env(inst_49971);
var inst_49974 = bb_web_ds_tools.runtime.webr.bind_r(inst_49973,"datasets",inst_49972);
var inst_49975 = cljs.core.async.interop.p__GT_c(inst_49974);
var state_49995__$1 = state_49995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49995__$1,(6),inst_49975);
} else {
if((state_val_49996 === (11))){
var inst_49977 = (state_49995[(7)]);
var state_49995__$1 = state_49995;
var statearr_50007_50971 = state_49995__$1;
(statearr_50007_50971[(2)] = inst_49977);

(statearr_50007_50971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (9))){
var inst_49985 = (state_49995[(2)]);
var state_49995__$1 = state_49995;
if(cljs.core.truth_(inst_49985)){
var statearr_50008_50981 = state_49995__$1;
(statearr_50008_50981[(1)] = (10));

} else {
var statearr_50009_50982 = state_49995__$1;
(statearr_50009_50982[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (5))){
var _ = (function (){var statearr_50010 = state_49995;
(statearr_50010[(4)] = cljs.core.rest((state_49995[(4)])));

return statearr_50010;
})();
var state_49995__$1 = state_49995;
var ex50006 = (state_49995__$1[(2)]);
var statearr_50011_50983 = state_49995__$1;
(statearr_50011_50983[(5)] = ex50006);


var statearr_50012_50984 = state_49995__$1;
(statearr_50012_50984[(1)] = (4));

(statearr_50012_50984[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (10))){
var inst_49977 = (state_49995[(7)]);
var inst_49987 = (function(){throw inst_49977})();
var state_49995__$1 = state_49995;
var statearr_50013_50985 = state_49995__$1;
(statearr_50013_50985[(2)] = inst_49987);

(statearr_50013_50985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (8))){
var inst_49978 = (state_49995[(8)]);
var state_49995__$1 = state_49995;
var statearr_50014_50986 = state_49995__$1;
(statearr_50014_50986[(2)] = inst_49978);

(statearr_50014_50986[(1)] = (9));


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
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0 = (function (){
var statearr_50024 = [null,null,null,null,null,null,null,null,null];
(statearr_50024[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32400__auto__);

(statearr_50024[(1)] = (1));

return statearr_50024;
});
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1 = (function (state_49995){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_49995);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e50029){var ex__32403__auto__ = e50029;
var statearr_50030_50987 = state_49995;
(statearr_50030_50987[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_49995[(4)]))){
var statearr_50031_50988 = state_49995;
(statearr_50031_50988[(1)] = cljs.core.first((state_49995[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50989 = state_49995;
state_49995 = G__50989;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = function(state_49995){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1.call(this,state_49995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_50038 = f__32475__auto__();
(statearr_50038[(6)] = c__32474__auto__);

return statearr_50038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
} else {
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_50041){
var state_val_50042 = (state_50041[(1)]);
if((state_val_50042 === (1))){
var inst_50039 = console.warn("WebR not loaded, cannot bind datasets");
var state_50041__$1 = state_50041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50041__$1,inst_50039);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0 = (function (){
var statearr_50050 = [null,null,null,null,null,null,null];
(statearr_50050[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32400__auto__);

(statearr_50050[(1)] = (1));

return statearr_50050;
});
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1 = (function (state_50041){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_50041);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e50052){var ex__32403__auto__ = e50052;
var statearr_50053_50990 = state_50041;
(statearr_50053_50990[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_50041[(4)]))){
var statearr_50056_50991 = state_50041;
(statearr_50056_50991[(1)] = cljs.core.first((state_50041[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50992 = state_50041;
state_50041 = G__50992;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = function(state_50041){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1.call(this,state_50041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_50057 = f__32475__auto__();
(statearr_50057[(6)] = c__32474__auto__);

return statearr_50057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
}
}));

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$applyTo = (function (seq49943){
var G__49944 = cljs.core.first(seq49943);
var seq49943__$1 = cljs.core.next(seq49943);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49944,seq49943__$1);
}));

/**
 * Retrieves the 'datasets' variable from R, converts it back to CLJS,
 * and dispatches an update event if found.
 */
bb_web_ds_tools.runtime.webr.sync_datasets = (function bb_web_ds_tools$runtime$webr$sync_datasets(){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_50134){
var state_val_50135 = (state_50134[(1)]);
if((state_val_50135 === (7))){
var inst_50103 = (state_50134[(7)]);
var inst_50103__$1 = (state_50134[(2)]);
var state_50134__$1 = (function (){var statearr_50139 = state_50134;
(statearr_50139[(7)] = inst_50103__$1);

return statearr_50139;
})();
if(cljs.core.truth_(inst_50103__$1)){
var statearr_50140_50997 = state_50134__$1;
(statearr_50140_50997[(1)] = (17));

} else {
var statearr_50141_50998 = state_50134__$1;
(statearr_50141_50998[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (20))){
var inst_50108 = (state_50134[(8)]);
var inst_50109 = (state_50134[(9)]);
var inst_50108__$1 = (state_50134[(2)]);
var inst_50109__$1 = (inst_50108__$1 instanceof cljs.core.ExceptionInfo);
var state_50134__$1 = (function (){var statearr_50142 = state_50134;
(statearr_50142[(8)] = inst_50108__$1);

(statearr_50142[(9)] = inst_50109__$1);

return statearr_50142;
})();
if(cljs.core.truth_(inst_50109__$1)){
var statearr_50143_50999 = state_50134__$1;
(statearr_50143_50999[(1)] = (21));

} else {
var statearr_50144_51000 = state_50134__$1;
(statearr_50144_51000[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (1))){
var state_50134__$1 = state_50134;
var statearr_50145_51001 = state_50134__$1;
(statearr_50145_51001[(2)] = null);

(statearr_50145_51001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (24))){
var inst_50108 = (state_50134[(8)]);
var inst_50118 = (function(){throw inst_50108})();
var state_50134__$1 = state_50134;
var statearr_50146_51002 = state_50134__$1;
(statearr_50146_51002[(2)] = inst_50118);

(statearr_50146_51002[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (4))){
var inst_50058 = (state_50134[(2)]);
var inst_50070 = console.error("Failed to sync datasets from R:",inst_50058);
var state_50134__$1 = state_50134;
var statearr_50147_51003 = state_50134__$1;
(statearr_50147_51003[(2)] = inst_50070);

(statearr_50147_51003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (15))){
var inst_50087 = (state_50134[(10)]);
var state_50134__$1 = state_50134;
var statearr_50148_51005 = state_50134__$1;
(statearr_50148_51005[(2)] = inst_50087);

(statearr_50148_51005[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (21))){
var inst_50108 = (state_50134[(8)]);
var inst_50111 = cljs.core.ex_data(inst_50108);
var inst_50112 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50111);
var inst_50113 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50112,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50134__$1 = state_50134;
var statearr_50149_51007 = state_50134__$1;
(statearr_50149_51007[(2)] = inst_50113);

(statearr_50149_51007[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (13))){
var inst_50095 = (state_50134[(2)]);
var state_50134__$1 = state_50134;
if(cljs.core.truth_(inst_50095)){
var statearr_50150_51008 = state_50134__$1;
(statearr_50150_51008[(1)] = (14));

} else {
var statearr_50151_51009 = state_50134__$1;
(statearr_50151_51009[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (22))){
var inst_50109 = (state_50134[(9)]);
var state_50134__$1 = state_50134;
var statearr_50152_51010 = state_50134__$1;
(statearr_50152_51010[(2)] = inst_50109);

(statearr_50152_51010[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (6))){
var inst_50076 = (state_50134[(11)]);
var _ = (function (){var statearr_50153 = state_50134;
(statearr_50153[(4)] = cljs.core.cons((9),(state_50134[(4)])));

return statearr_50153;
})();
var inst_50083 = bb_web_ds_tools.runtime.webr.get_global_env(inst_50076);
var inst_50084 = bb_web_ds_tools.runtime.webr.get_r(inst_50083,"datasets");
var inst_50085 = cljs.core.async.interop.p__GT_c(inst_50084);
var state_50134__$1 = state_50134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50134__$1,(10),inst_50085);
} else {
if((state_val_50135 === (25))){
var inst_50108 = (state_50134[(8)]);
var state_50134__$1 = state_50134;
var statearr_50155_51011 = state_50134__$1;
(statearr_50155_51011[(2)] = inst_50108);

(statearr_50155_51011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (17))){
var inst_50103 = (state_50134[(7)]);
var inst_50105 = bb_web_ds_tools.runtime.webr.to_js(inst_50103);
var inst_50106 = cljs.core.async.interop.p__GT_c(inst_50105);
var state_50134__$1 = state_50134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50134__$1,(20),inst_50106);
} else {
if((state_val_50135 === (3))){
var inst_50132 = (state_50134[(2)]);
var state_50134__$1 = state_50134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50134__$1,inst_50132);
} else {
if((state_val_50135 === (12))){
var inst_50088 = (state_50134[(12)]);
var state_50134__$1 = state_50134;
var statearr_50156_51012 = state_50134__$1;
(statearr_50156_51012[(2)] = inst_50088);

(statearr_50156_51012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (2))){
var _ = (function (){var statearr_50157 = state_50134;
(statearr_50157[(4)] = cljs.core.cons((5),(state_50134[(4)])));

return statearr_50157;
})();
var inst_50076 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_50134__$1 = (function (){var statearr_50158 = state_50134;
(statearr_50158[(11)] = inst_50076);

return statearr_50158;
})();
var statearr_50159_51014 = state_50134__$1;
(statearr_50159_51014[(2)] = null);

(statearr_50159_51014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (23))){
var inst_50116 = (state_50134[(2)]);
var state_50134__$1 = state_50134;
if(cljs.core.truth_(inst_50116)){
var statearr_50160_51015 = state_50134__$1;
(statearr_50160_51015[(1)] = (24));

} else {
var statearr_50161_51016 = state_50134__$1;
(statearr_50161_51016[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (19))){
var inst_50129 = (state_50134[(2)]);
var _ = (function (){var statearr_50163 = state_50134;
(statearr_50163[(4)] = cljs.core.rest((state_50134[(4)])));

return statearr_50163;
})();
var state_50134__$1 = state_50134;
var statearr_50164_51017 = state_50134__$1;
(statearr_50164_51017[(2)] = inst_50129);

(statearr_50164_51017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (11))){
var inst_50087 = (state_50134[(10)]);
var inst_50090 = cljs.core.ex_data(inst_50087);
var inst_50091 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50090);
var inst_50092 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50091,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50134__$1 = state_50134;
var statearr_50166_51018 = state_50134__$1;
(statearr_50166_51018[(2)] = inst_50092);

(statearr_50166_51018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (9))){
var _ = (function (){var statearr_50167 = state_50134;
(statearr_50167[(4)] = cljs.core.rest((state_50134[(4)])));

return statearr_50167;
})();
var state_50134__$1 = state_50134;
var ex50162 = (state_50134__$1[(2)]);
var statearr_50168_51020 = state_50134__$1;
(statearr_50168_51020[(5)] = ex50162);


var statearr_50169_51021 = state_50134__$1;
(statearr_50169_51021[(1)] = (8));

(statearr_50169_51021[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (5))){
var _ = (function (){var statearr_50170 = state_50134;
(statearr_50170[(4)] = cljs.core.rest((state_50134[(4)])));

return statearr_50170;
})();
var state_50134__$1 = state_50134;
var ex50165 = (state_50134__$1[(2)]);
var statearr_50171_51022 = state_50134__$1;
(statearr_50171_51022[(5)] = ex50165);


var statearr_50172_51023 = state_50134__$1;
(statearr_50172_51023[(1)] = (4));

(statearr_50172_51023[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (14))){
var inst_50087 = (state_50134[(10)]);
var inst_50097 = (function(){throw inst_50087})();
var state_50134__$1 = state_50134;
var statearr_50173_51024 = state_50134__$1;
(statearr_50173_51024[(2)] = inst_50097);

(statearr_50173_51024[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (26))){
var inst_50121 = (state_50134[(2)]);
var inst_50122 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50121,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_50123 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50124 = [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets-from-r","bb-web-ds-tools.views.datasets/patch-datasets-from-r",-125752359),inst_50122];
var inst_50125 = (new cljs.core.PersistentVector(null,2,(5),inst_50123,inst_50124,null));
var inst_50126 = re_frame.core.dispatch(inst_50125);
var state_50134__$1 = state_50134;
var statearr_50174_51025 = state_50134__$1;
(statearr_50174_51025[(2)] = inst_50126);

(statearr_50174_51025[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (16))){
var inst_50100 = (state_50134[(2)]);
var _ = (function (){var statearr_50175 = state_50134;
(statearr_50175[(4)] = cljs.core.rest((state_50134[(4)])));

return statearr_50175;
})();
var state_50134__$1 = state_50134;
var statearr_50176_51026 = state_50134__$1;
(statearr_50176_51026[(2)] = inst_50100);

(statearr_50176_51026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (10))){
var inst_50087 = (state_50134[(10)]);
var inst_50088 = (state_50134[(12)]);
var inst_50087__$1 = (state_50134[(2)]);
var inst_50088__$1 = (inst_50087__$1 instanceof cljs.core.ExceptionInfo);
var state_50134__$1 = (function (){var statearr_50177 = state_50134;
(statearr_50177[(10)] = inst_50087__$1);

(statearr_50177[(12)] = inst_50088__$1);

return statearr_50177;
})();
if(cljs.core.truth_(inst_50088__$1)){
var statearr_50178_51027 = state_50134__$1;
(statearr_50178_51027[(1)] = (11));

} else {
var statearr_50179_51028 = state_50134__$1;
(statearr_50179_51028[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (18))){
var state_50134__$1 = state_50134;
var statearr_50180_51029 = state_50134__$1;
(statearr_50180_51029[(2)] = null);

(statearr_50180_51029[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50135 === (8))){
var inst_50077 = (state_50134[(2)]);
var state_50134__$1 = (function (){var statearr_50181 = state_50134;
(statearr_50181[(13)] = inst_50077);

return statearr_50181;
})();
var statearr_50182_51030 = state_50134__$1;
(statearr_50182_51030[(2)] = null);

(statearr_50182_51030[(1)] = (7));


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
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____0 = (function (){
var statearr_50183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50183[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__);

(statearr_50183[(1)] = (1));

return statearr_50183;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1 = (function (state_50134){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_50134);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e50184){var ex__32403__auto__ = e50184;
var statearr_50185_51031 = state_50134;
(statearr_50185_51031[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_50134[(4)]))){
var statearr_50186_51032 = state_50134;
(statearr_50186_51032[(1)] = cljs.core.first((state_50134[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51033 = state_50134;
state_50134 = G__51033;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__ = function(state_50134){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1.call(this,state_50134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_50187 = f__32475__auto__();
(statearr_50187[(6)] = c__32474__auto__);

return statearr_50187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
} else {
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_50190){
var state_val_50191 = (state_50190[(1)]);
if((state_val_50191 === (1))){
var inst_50188 = console.warn("WebR not loaded, cannot sync datasets");
var state_50190__$1 = state_50190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50190__$1,inst_50188);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____0 = (function (){
var statearr_50192 = [null,null,null,null,null,null,null];
(statearr_50192[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__);

(statearr_50192[(1)] = (1));

return statearr_50192;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1 = (function (state_50190){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_50190);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e50193){var ex__32403__auto__ = e50193;
var statearr_50194_51034 = state_50190;
(statearr_50194_51034[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_50190[(4)]))){
var statearr_50195_51035 = state_50190;
(statearr_50195_51035[(1)] = cljs.core.first((state_50190[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51037 = state_50190;
state_50190 = G__51037;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__ = function(state_50190){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1.call(this,state_50190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_50196 = f__32475__auto__();
(statearr_50196[(6)] = c__32474__auto__);

return statearr_50196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
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
var len__5749__auto___51038 = arguments.length;
var i__5750__auto___51039 = (0);
while(true){
if((i__5750__auto___51039 < len__5749__auto___51038)){
args__5755__auto__.push((arguments[i__5750__auto___51039]));

var G__51040 = (i__5750__auto___51039 + (1));
i__5750__auto___51039 = G__51040;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic = (function (code,p__50199){
var vec__50200 = p__50199;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50200,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_50564){
var state_val_50565 = (state_50564[(1)]);
if((state_val_50565 === (65))){
var inst_50389 = (state_50564[(7)]);
var inst_50393 = cljs.core.chunk_first(inst_50389);
var inst_50394 = cljs.core.chunk_rest(inst_50389);
var inst_50395 = cljs.core.count(inst_50393);
var inst_50372 = inst_50394;
var inst_50373 = inst_50393;
var inst_50374 = inst_50395;
var inst_50375 = (0);
var state_50564__$1 = (function (){var statearr_50575 = state_50564;
(statearr_50575[(8)] = inst_50372);

(statearr_50575[(9)] = inst_50373);

(statearr_50575[(10)] = inst_50374);

(statearr_50575[(11)] = inst_50375);

return statearr_50575;
})();
var statearr_50576_51053 = state_50564__$1;
(statearr_50576_51053[(2)] = null);

(statearr_50576_51053[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (70))){
var inst_50389 = (state_50564[(7)]);
var inst_50403 = (state_50564[(2)]);
var inst_50404 = cljs.core.next(inst_50389);
var inst_50372 = inst_50404;
var inst_50373 = null;
var inst_50374 = (0);
var inst_50375 = (0);
var state_50564__$1 = (function (){var statearr_50577 = state_50564;
(statearr_50577[(12)] = inst_50403);

(statearr_50577[(8)] = inst_50372);

(statearr_50577[(9)] = inst_50373);

(statearr_50577[(10)] = inst_50374);

(statearr_50577[(11)] = inst_50375);

return statearr_50577;
})();
var statearr_50578_51054 = state_50564__$1;
(statearr_50578_51054[(2)] = null);

(statearr_50578_51054[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (62))){
var inst_50389 = (state_50564[(7)]);
var inst_50391 = cljs.core.chunked_seq_QMARK_(inst_50389);
var state_50564__$1 = state_50564;
if(inst_50391){
var statearr_50581_51055 = state_50564__$1;
(statearr_50581_51055[(1)] = (65));

} else {
var statearr_50582_51056 = state_50564__$1;
(statearr_50582_51056[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (74))){
var inst_50421 = (state_50564[(13)]);
var inst_50463 = (state_50564[(14)]);
var inst_50463__$1 = cljs.core.seq(inst_50421);
var state_50564__$1 = (function (){var statearr_50583 = state_50564;
(statearr_50583[(14)] = inst_50463__$1);

return statearr_50583;
})();
if(inst_50463__$1){
var statearr_50584_51058 = state_50564__$1;
(statearr_50584_51058[(1)] = (76));

} else {
var statearr_50585_51059 = state_50564__$1;
(statearr_50585_51059[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (7))){
var inst_50556 = (new Error("Shelter not found on WebR instance"));
var inst_50557 = (function(){throw inst_50556})();
var state_50564__$1 = state_50564;
var statearr_50586_51060 = state_50564__$1;
(statearr_50586_51060[(2)] = inst_50557);

(statearr_50586_51060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (59))){
var inst_50380 = (state_50564[(15)]);
var inst_50382 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50380);
var state_50564__$1 = state_50564;
var statearr_50587_51061 = state_50564__$1;
(statearr_50587_51061[(2)] = inst_50382);

(statearr_50587_51061[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (86))){
var inst_50520 = (state_50564[(16)]);
var inst_50523 = cljs.core.ex_data(inst_50520);
var inst_50524 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50523);
var inst_50525 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50524,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50564__$1 = state_50564;
var statearr_50588_51062 = state_50564__$1;
(statearr_50588_51062[(2)] = inst_50525);

(statearr_50588_51062[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (20))){
var inst_50233 = (state_50564[(17)]);
var inst_50243 = (function(){throw inst_50233})();
var state_50564__$1 = state_50564;
var statearr_50591_51063 = state_50564__$1;
(statearr_50591_51063[(2)] = inst_50243);

(statearr_50591_51063[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (72))){
var inst_50321 = (state_50564[(18)]);
var inst_50515 = (state_50564[(19)]);
var inst_50514 = (state_50564[(2)]);
var inst_50515__$1 = bb_web_ds_tools.runtime.webr.to_js(inst_50321);
var inst_50516 = (inst_50515__$1 instanceof Promise);
var state_50564__$1 = (function (){var statearr_50592 = state_50564;
(statearr_50592[(20)] = inst_50514);

(statearr_50592[(19)] = inst_50515__$1);

return statearr_50592;
})();
if(cljs.core.truth_(inst_50516)){
var statearr_50593_51064 = state_50564__$1;
(statearr_50593_51064[(1)] = (82));

} else {
var statearr_50594_51065 = state_50564__$1;
(statearr_50594_51065[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (58))){
var inst_50412 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50595_51066 = state_50564__$1;
(statearr_50595_51066[(2)] = inst_50412);

(statearr_50595_51066[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (60))){
var state_50564__$1 = state_50564;
var statearr_50596_51067 = state_50564__$1;
(statearr_50596_51067[(2)] = null);

(statearr_50596_51067[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (27))){
var inst_50255 = (state_50564[(21)]);
var inst_50258 = cljs.core.ex_data(inst_50255);
var inst_50259 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50258);
var inst_50260 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50259,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50564__$1 = state_50564;
var statearr_50601_51068 = state_50564__$1;
(statearr_50601_51068[(2)] = inst_50260);

(statearr_50601_51068[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (1))){
var state_50564__$1 = state_50564;
var statearr_50602_51069 = state_50564__$1;
(statearr_50602_51069[(2)] = null);

(statearr_50602_51069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (69))){
var state_50564__$1 = state_50564;
var statearr_50607_51070 = state_50564__$1;
(statearr_50607_51070[(2)] = null);

(statearr_50607_51070[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (24))){
var state_50564__$1 = state_50564;
var statearr_50608_51071 = state_50564__$1;
(statearr_50608_51071[(2)] = null);

(statearr_50608_51071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (55))){
var inst_50320 = (state_50564[(22)]);
var inst_50414 = (state_50564[(2)]);
var inst_50419 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50320);
var inst_50420 = cljs.core.seq(inst_50419);
var inst_50421 = inst_50420;
var inst_50422 = null;
var inst_50423 = (0);
var inst_50424 = (0);
var state_50564__$1 = (function (){var statearr_50609 = state_50564;
(statearr_50609[(23)] = inst_50414);

(statearr_50609[(13)] = inst_50421);

(statearr_50609[(24)] = inst_50422);

(statearr_50609[(25)] = inst_50423);

(statearr_50609[(26)] = inst_50424);

return statearr_50609;
})();
var statearr_50610_51072 = state_50564__$1;
(statearr_50610_51072[(2)] = null);

(statearr_50610_51072[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (85))){
var inst_50520 = (state_50564[(16)]);
var inst_50521 = (state_50564[(27)]);
var inst_50520__$1 = (state_50564[(2)]);
var inst_50521__$1 = (inst_50520__$1 instanceof cljs.core.ExceptionInfo);
var state_50564__$1 = (function (){var statearr_50611 = state_50564;
(statearr_50611[(16)] = inst_50520__$1);

(statearr_50611[(27)] = inst_50521__$1);

return statearr_50611;
})();
if(cljs.core.truth_(inst_50521__$1)){
var statearr_50612_51073 = state_50564__$1;
(statearr_50612_51073[(1)] = (86));

} else {
var statearr_50613_51074 = state_50564__$1;
(statearr_50613_51074[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (39))){
var inst_50304 = (state_50564[(28)]);
var inst_50307 = cljs.core.ex_data(inst_50304);
var inst_50308 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50307);
var inst_50309 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50308,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50564__$1 = state_50564;
var statearr_50614_51077 = state_50564__$1;
(statearr_50614_51077[(2)] = inst_50309);

(statearr_50614_51077[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (88))){
var inst_50528 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
if(cljs.core.truth_(inst_50528)){
var statearr_50615_51078 = state_50564__$1;
(statearr_50615_51078[(1)] = (89));

} else {
var statearr_50616_51079 = state_50564__$1;
(statearr_50616_51079[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (46))){
var inst_50357 = cljs.core.PersistentVector.EMPTY;
var state_50564__$1 = state_50564;
var statearr_50617_51080 = state_50564__$1;
(statearr_50617_51080[(2)] = inst_50357);

(statearr_50617_51080[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (4))){
var inst_50203 = (state_50564[(2)]);
var inst_50204 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50205 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50203);
var inst_50206 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50205];
var inst_50207 = cljs.core.PersistentHashMap.fromArrays(inst_50204,inst_50206);
var inst_50208 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50207);
var state_50564__$1 = state_50564;
var statearr_50619_51081 = state_50564__$1;
(statearr_50619_51081[(2)] = inst_50208);

(statearr_50619_51081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (77))){
var state_50564__$1 = state_50564;
var statearr_50620_51086 = state_50564__$1;
(statearr_50620_51086[(2)] = null);

(statearr_50620_51086[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (95))){
var _ = (function (){var statearr_50621 = state_50564;
(statearr_50621[(4)] = cljs.core.rest((state_50564[(4)])));

return statearr_50621;
})();
var state_50564__$1 = state_50564;
var ex50618 = (state_50564__$1[(2)]);
var statearr_50622_51088 = state_50564__$1;
(statearr_50622_51088[(5)] = ex50618);


if((ex50618 instanceof Error)){
var statearr_50623_51089 = state_50564__$1;
(statearr_50623_51089[(1)] = (94));

(statearr_50623_51089[(5)] = null);

} else {
throw ex50618;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (54))){
var inst_50375 = (state_50564[(11)]);
var inst_50374 = (state_50564[(10)]);
var inst_50377 = (inst_50375 < inst_50374);
var inst_50378 = inst_50377;
var state_50564__$1 = state_50564;
if(cljs.core.truth_(inst_50378)){
var statearr_50624_51092 = state_50564__$1;
(statearr_50624_51092[(1)] = (56));

} else {
var statearr_50625_51093 = state_50564__$1;
(statearr_50625_51093[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (92))){
var inst_50536 = (state_50564[(29)]);
var _ = (function (){var statearr_50626 = state_50564;
(statearr_50626[(4)] = cljs.core.cons((95),(state_50564[(4)])));

return statearr_50626;
})();
var inst_50544 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50536,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_50627 = state_50564;
(statearr_50627[(4)] = cljs.core.rest((state_50564[(4)])));

return statearr_50627;
})();
var state_50564__$1 = state_50564;
var statearr_50628_51094 = state_50564__$1;
(statearr_50628_51094[(2)] = inst_50544);

(statearr_50628_51094[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (15))){
var inst_50273 = (state_50564[(2)]);
var _ = (function (){var statearr_50629 = state_50564;
(statearr_50629[(4)] = cljs.core.rest((state_50564[(4)])));

return statearr_50629;
})();
var state_50564__$1 = state_50564;
var statearr_50630_51095 = state_50564__$1;
(statearr_50630_51095[(2)] = inst_50273);

(statearr_50630_51095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (48))){
var inst_50337 = (state_50564[(30)]);
var inst_50343 = cljs.core.seq(inst_50337);
var inst_50344 = cljs.core.first(inst_50343);
var inst_50345 = cljs.core.next(inst_50343);
var state_50564__$1 = (function (){var statearr_50631 = state_50564;
(statearr_50631[(31)] = inst_50345);

return statearr_50631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50564__$1,(50),inst_50344);
} else {
if((state_val_50565 === (50))){
var inst_50338 = (state_50564[(32)]);
var inst_50345 = (state_50564[(31)]);
var inst_50347 = (state_50564[(2)]);
var inst_50348 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50338,inst_50347);
var state_50564__$1 = (function (){var statearr_50632 = state_50564;
(statearr_50632[(33)] = inst_50348);

return statearr_50632;
})();
if(cljs.core.truth_(inst_50345)){
var statearr_50633_51096 = state_50564__$1;
(statearr_50633_51096[(1)] = (51));

} else {
var statearr_50634_51097 = state_50564__$1;
(statearr_50634_51097[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (75))){
var inst_50512 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50635_51098 = state_50564__$1;
(statearr_50635_51098[(2)] = inst_50512);

(statearr_50635_51098[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (21))){
var inst_50233 = (state_50564[(17)]);
var state_50564__$1 = state_50564;
var statearr_50636_51099 = state_50564__$1;
(statearr_50636_51099[(2)] = inst_50233);

(statearr_50636_51099[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (31))){
var inst_50255 = (state_50564[(21)]);
var state_50564__$1 = state_50564;
var statearr_50637_51100 = state_50564__$1;
(statearr_50637_51100[(2)] = inst_50255);

(statearr_50637_51100[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (32))){
var inst_50268 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50638_51101 = state_50564__$1;
(statearr_50638_51101[(2)] = inst_50268);

(statearr_50638_51101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (40))){
var inst_50305 = (state_50564[(34)]);
var state_50564__$1 = state_50564;
var statearr_50639_51102 = state_50564__$1;
(statearr_50639_51102[(2)] = inst_50305);

(statearr_50639_51102[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (91))){
var inst_50533 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50640_51103 = state_50564__$1;
(statearr_50640_51103[(2)] = inst_50533);

(statearr_50640_51103[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (56))){
var inst_50373 = (state_50564[(9)]);
var inst_50375 = (state_50564[(11)]);
var inst_50380 = (state_50564[(15)]);
var inst_50380__$1 = cljs.core._nth(inst_50373,inst_50375);
var state_50564__$1 = (function (){var statearr_50642 = state_50564;
(statearr_50642[(15)] = inst_50380__$1);

return statearr_50642;
})();
if(cljs.core.truth_(inst_50380__$1)){
var statearr_50643_51104 = state_50564__$1;
(statearr_50643_51104[(1)] = (59));

} else {
var statearr_50644_51105 = state_50564__$1;
(statearr_50644_51105[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (33))){
var inst_50276 = (state_50564[(35)]);
var _ = (function (){var statearr_50645 = state_50564;
(statearr_50645[(4)] = cljs.core.cons((35),(state_50564[(4)])));

return statearr_50645;
})();
var ___$1 = (function (){var statearr_50646 = state_50564;
(statearr_50646[(4)] = cljs.core.cons((37),(state_50564[(4)])));

return statearr_50646;
})();
var inst_50297 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_50298 = [true];
var inst_50299 = cljs.core.PersistentHashMap.fromArrays(inst_50297,inst_50298);
var inst_50300 = cljs.core.clj__GT_js(inst_50299);
var inst_50301 = bb_web_ds_tools.runtime.webr.capture_r(inst_50276,code,inst_50300);
var inst_50302 = cljs.core.async.interop.p__GT_c(inst_50301);
var state_50564__$1 = state_50564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50564__$1,(38),inst_50302);
} else {
if((state_val_50565 === (13))){
var inst_50221 = (state_50564[(36)]);
var inst_50231 = cljs.core.async.interop.p__GT_c(inst_50221);
var state_50564__$1 = state_50564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50564__$1,(16),inst_50231);
} else {
if((state_val_50565 === (22))){
var inst_50246 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50647_51106 = state_50564__$1;
(statearr_50647_51106[(2)] = inst_50246);

(statearr_50647_51106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (90))){
var inst_50520 = (state_50564[(16)]);
var state_50564__$1 = state_50564;
var statearr_50648_51107 = state_50564__$1;
(statearr_50648_51107[(2)] = inst_50520);

(statearr_50648_51107[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (36))){
var inst_50282 = (state_50564[(2)]);
var inst_50283 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50284 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50282);
var inst_50285 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50284];
var inst_50286 = cljs.core.PersistentHashMap.fromArrays(inst_50283,inst_50285);
var inst_50287 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50286);
var state_50564__$1 = state_50564;
var statearr_50656_51108 = state_50564__$1;
(statearr_50656_51108[(2)] = inst_50287);

(statearr_50656_51108[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (41))){
var inst_50312 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
if(cljs.core.truth_(inst_50312)){
var statearr_50657_51109 = state_50564__$1;
(statearr_50657_51109[(1)] = (42));

} else {
var statearr_50658_51110 = state_50564__$1;
(statearr_50658_51110[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (89))){
var inst_50520 = (state_50564[(16)]);
var inst_50530 = (function(){throw inst_50520})();
var state_50564__$1 = state_50564;
var statearr_50662_51111 = state_50564__$1;
(statearr_50662_51111[(2)] = inst_50530);

(statearr_50662_51111[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (43))){
var inst_50304 = (state_50564[(28)]);
var state_50564__$1 = state_50564;
var statearr_50663_51112 = state_50564__$1;
(statearr_50663_51112[(2)] = inst_50304);

(statearr_50663_51112[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (61))){
var inst_50375 = (state_50564[(11)]);
var inst_50372 = (state_50564[(8)]);
var inst_50373 = (state_50564[(9)]);
var inst_50374 = (state_50564[(10)]);
var inst_50385 = (state_50564[(2)]);
var inst_50386 = (inst_50375 + (1));
var tmp50659 = inst_50372;
var tmp50660 = inst_50373;
var tmp50661 = inst_50374;
var inst_50372__$1 = tmp50659;
var inst_50373__$1 = tmp50660;
var inst_50374__$1 = tmp50661;
var inst_50375__$1 = inst_50386;
var state_50564__$1 = (function (){var statearr_50664 = state_50564;
(statearr_50664[(37)] = inst_50385);

(statearr_50664[(8)] = inst_50372__$1);

(statearr_50664[(9)] = inst_50373__$1);

(statearr_50664[(10)] = inst_50374__$1);

(statearr_50664[(11)] = inst_50375__$1);

return statearr_50664;
})();
var statearr_50665_51113 = state_50564__$1;
(statearr_50665_51113[(2)] = null);

(statearr_50665_51113[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (29))){
var inst_50263 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
if(cljs.core.truth_(inst_50263)){
var statearr_50666_51114 = state_50564__$1;
(statearr_50666_51114[(1)] = (30));

} else {
var statearr_50667_51115 = state_50564__$1;
(statearr_50667_51115[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (44))){
var inst_50323 = (state_50564[(38)]);
var inst_50317 = (state_50564[(2)]);
var inst_50318 = bb_web_ds_tools.runtime.webr.get_result_props(inst_50317);
var inst_50319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50318,(0),null);
var inst_50320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50318,(1),null);
var inst_50321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50318,(2),null);
var inst_50322 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50319);
var inst_50323__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,inst_50322);
var inst_50324 = cljs.core.seq(inst_50323__$1);
var state_50564__$1 = (function (){var statearr_50668 = state_50564;
(statearr_50668[(22)] = inst_50320);

(statearr_50668[(18)] = inst_50321);

(statearr_50668[(38)] = inst_50323__$1);

return statearr_50668;
})();
if(inst_50324){
var statearr_50669_51118 = state_50564__$1;
(statearr_50669_51118[(1)] = (45));

} else {
var statearr_50670_51119 = state_50564__$1;
(statearr_50670_51119[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (93))){
var inst_50547 = (state_50564[(2)]);
var inst_50548 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_50549 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_50547];
var inst_50550 = cljs.core.PersistentHashMap.fromArrays(inst_50548,inst_50549);
var inst_50551 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50550);
var _ = (function (){var statearr_50671 = state_50564;
(statearr_50671[(4)] = cljs.core.rest((state_50564[(4)])));

return statearr_50671;
})();
var state_50564__$1 = state_50564;
var statearr_50672_51120 = state_50564__$1;
(statearr_50672_51120[(2)] = inst_50551);

(statearr_50672_51120[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (6))){
var inst_50219 = (state_50564[(39)]);
var inst_50221 = (new inst_50219());
var state_50564__$1 = (function (){var statearr_50673 = state_50564;
(statearr_50673[(36)] = inst_50221);

return statearr_50673;
})();
var statearr_50674_51121 = state_50564__$1;
(statearr_50674_51121[(2)] = null);

(statearr_50674_51121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (28))){
var inst_50256 = (state_50564[(40)]);
var state_50564__$1 = state_50564;
var statearr_50675_51124 = state_50564__$1;
(statearr_50675_51124[(2)] = inst_50256);

(statearr_50675_51124[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (64))){
var inst_50410 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50676_51125 = state_50564__$1;
(statearr_50676_51125[(2)] = inst_50410);

(statearr_50676_51125[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (51))){
var inst_50345 = (state_50564[(31)]);
var inst_50348 = (state_50564[(33)]);
var inst_50337 = inst_50345;
var inst_50338 = inst_50348;
var state_50564__$1 = (function (){var statearr_50677 = state_50564;
(statearr_50677[(30)] = inst_50337);

(statearr_50677[(32)] = inst_50338);

return statearr_50677;
})();
var statearr_50678_51128 = state_50564__$1;
(statearr_50678_51128[(2)] = null);

(statearr_50678_51128[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (25))){
var inst_50221 = (state_50564[(36)]);
var inst_50271 = (state_50564[(2)]);
var state_50564__$1 = (function (){var statearr_50679 = state_50564;
(statearr_50679[(41)] = inst_50271);

return statearr_50679;
})();
var statearr_50680_51129 = state_50564__$1;
(statearr_50680_51129[(2)] = inst_50221);

(statearr_50680_51129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (34))){
var inst_50554 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50681_51130 = state_50564__$1;
(statearr_50681_51130[(2)] = inst_50554);

(statearr_50681_51130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (17))){
var inst_50233 = (state_50564[(17)]);
var inst_50236 = cljs.core.ex_data(inst_50233);
var inst_50237 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50236);
var inst_50238 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50237,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50564__$1 = state_50564;
var statearr_50683_51131 = state_50564__$1;
(statearr_50683_51131[(2)] = inst_50238);

(statearr_50683_51131[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (3))){
var inst_50562 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50564__$1,inst_50562);
} else {
if((state_val_50565 === (12))){
var _ = (function (){var statearr_50684 = state_50564;
(statearr_50684[(4)] = cljs.core.rest((state_50564[(4)])));

return statearr_50684;
})();
var state_50564__$1 = state_50564;
var ex50682 = (state_50564__$1[(2)]);
var statearr_50685_51132 = state_50564__$1;
(statearr_50685_51132[(5)] = ex50682);


var statearr_50686_51133 = state_50564__$1;
(statearr_50686_51133[(1)] = (11));

(statearr_50686_51133[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (2))){
var inst_50219 = (state_50564[(39)]);
var _ = (function (){var statearr_50688 = state_50564;
(statearr_50688[(4)] = cljs.core.cons((5),(state_50564[(4)])));

return statearr_50688;
})();
var inst_50214 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50215 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_50216 = cljs.core.PersistentHashMap.fromArrays(inst_50214,inst_50215);
var inst_50217 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50216);
var inst_50218 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_50219__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(inst_50218);
var state_50564__$1 = (function (){var statearr_50689 = state_50564;
(statearr_50689[(42)] = inst_50217);

(statearr_50689[(39)] = inst_50219__$1);

return statearr_50689;
})();
if(cljs.core.truth_(inst_50219__$1)){
var statearr_50690_51134 = state_50564__$1;
(statearr_50690_51134[(1)] = (6));

} else {
var statearr_50691_51135 = state_50564__$1;
(statearr_50691_51135[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (66))){
var inst_50389 = (state_50564[(7)]);
var inst_50398 = (state_50564[(43)]);
var inst_50398__$1 = cljs.core.first(inst_50389);
var state_50564__$1 = (function (){var statearr_50694 = state_50564;
(statearr_50694[(43)] = inst_50398__$1);

return statearr_50694;
})();
if(cljs.core.truth_(inst_50398__$1)){
var statearr_50695_51136 = state_50564__$1;
(statearr_50695_51136[(1)] = (68));

} else {
var statearr_50696_51137 = state_50564__$1;
(statearr_50696_51137[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (23))){
var inst_50221 = (state_50564[(36)]);
var inst_50252 = bb_web_ds_tools.runtime.webr.init_obj(inst_50221);
var inst_50253 = cljs.core.async.interop.p__GT_c(inst_50252);
var state_50564__$1 = state_50564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50564__$1,(26),inst_50253);
} else {
if((state_val_50565 === (47))){
var inst_50359 = (state_50564[(2)]);
var inst_50360 = [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),new cljs.core.Keyword(null,"container-height","container-height",-577782714),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110)];
var inst_50361 = [(720),(800),0.72];
var inst_50362 = cljs.core.PersistentHashMap.fromArrays(inst_50360,inst_50361);
var inst_50363 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"webr","webr",-966893065),inst_50362);
var inst_50364 = new cljs.core.Keyword(null,"container-width","container-width",-1461172864).cljs$core$IFn$_invoke$arity$1(inst_50363);
var inst_50365 = new cljs.core.Keyword(null,"container-height","container-height",-577782714).cljs$core$IFn$_invoke$arity$1(inst_50363);
var inst_50366 = new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110).cljs$core$IFn$_invoke$arity$1(inst_50363);
var inst_50371 = cljs.core.seq(inst_50359);
var inst_50372 = inst_50371;
var inst_50373 = null;
var inst_50374 = (0);
var inst_50375 = (0);
var state_50564__$1 = (function (){var statearr_50700 = state_50564;
(statearr_50700[(44)] = inst_50364);

(statearr_50700[(45)] = inst_50365);

(statearr_50700[(46)] = inst_50366);

(statearr_50700[(8)] = inst_50372);

(statearr_50700[(9)] = inst_50373);

(statearr_50700[(10)] = inst_50374);

(statearr_50700[(11)] = inst_50375);

return statearr_50700;
})();
var statearr_50702_51138 = state_50564__$1;
(statearr_50702_51138[(2)] = null);

(statearr_50702_51138[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (35))){
var inst_50276 = (state_50564[(35)]);
var _ = (function (){var statearr_50704 = state_50564;
(statearr_50704[(4)] = cljs.core.rest((state_50564[(4)])));

return statearr_50704;
})();
var inst_50278 = (state_50564[(2)]);
var inst_50279 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_50276);
var ___$1 = (function (){var temp__5825__auto__ = (state_50564[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31632__auto__ = temp__5825__auto__;
throw e__31632__auto__;
} else {
return null;
}
})();
var state_50564__$1 = (function (){var statearr_50705 = state_50564;
(statearr_50705[(47)] = inst_50279);

return statearr_50705;
})();
var statearr_50706_51139 = state_50564__$1;
(statearr_50706_51139[(2)] = inst_50278);

(statearr_50706_51139[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (82))){
var inst_50515 = (state_50564[(19)]);
var inst_50518 = cljs.core.async.interop.p__GT_c(inst_50515);
var state_50564__$1 = state_50564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50564__$1,(85),inst_50518);
} else {
if((state_val_50565 === (76))){
var inst_50463 = (state_50564[(14)]);
var inst_50465 = cljs.core.chunked_seq_QMARK_(inst_50463);
var state_50564__$1 = state_50564;
if(inst_50465){
var statearr_50710_51140 = state_50564__$1;
(statearr_50710_51140[(1)] = (79));

} else {
var statearr_50711_51141 = state_50564__$1;
(statearr_50711_51141[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (19))){
var inst_50241 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
if(cljs.core.truth_(inst_50241)){
var statearr_50712_51142 = state_50564__$1;
(statearr_50712_51142[(1)] = (20));

} else {
var statearr_50713_51143 = state_50564__$1;
(statearr_50713_51143[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (57))){
var inst_50372 = (state_50564[(8)]);
var inst_50389 = (state_50564[(7)]);
var inst_50389__$1 = cljs.core.seq(inst_50372);
var state_50564__$1 = (function (){var statearr_50714 = state_50564;
(statearr_50714[(7)] = inst_50389__$1);

return statearr_50714;
})();
if(inst_50389__$1){
var statearr_50715_51144 = state_50564__$1;
(statearr_50715_51144[(1)] = (62));

} else {
var statearr_50716_51145 = state_50564__$1;
(statearr_50716_51145[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (68))){
var inst_50398 = (state_50564[(43)]);
var inst_50400 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50398);
var state_50564__$1 = state_50564;
var statearr_50717_51147 = state_50564__$1;
(statearr_50717_51147[(2)] = inst_50400);

(statearr_50717_51147[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (11))){
var inst_50222 = (state_50564[(2)]);
var inst_50223 = (function(){throw inst_50222})();
var state_50564__$1 = state_50564;
var statearr_50720_51149 = state_50564__$1;
(statearr_50720_51149[(2)] = inst_50223);

(statearr_50720_51149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (9))){
var inst_50221 = (state_50564[(36)]);
var _ = (function (){var statearr_50721 = state_50564;
(statearr_50721[(4)] = cljs.core.cons((12),(state_50564[(4)])));

return statearr_50721;
})();
var inst_50229 = (inst_50221 instanceof Promise);
var state_50564__$1 = state_50564;
if(cljs.core.truth_(inst_50229)){
var statearr_50722_51150 = state_50564__$1;
(statearr_50722_51150[(1)] = (13));

} else {
var statearr_50723_51151 = state_50564__$1;
(statearr_50723_51151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (5))){
var _ = (function (){var statearr_50724 = state_50564;
(statearr_50724[(4)] = cljs.core.rest((state_50564[(4)])));

return statearr_50724;
})();
var state_50564__$1 = state_50564;
var ex50719 = (state_50564__$1[(2)]);
var statearr_50726_51152 = state_50564__$1;
(statearr_50726_51152[(5)] = ex50719);


var statearr_50727_51153 = state_50564__$1;
(statearr_50727_51153[(1)] = (4));

(statearr_50727_51153[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (83))){
var inst_50515 = (state_50564[(19)]);
var state_50564__$1 = state_50564;
var statearr_50728_51154 = state_50564__$1;
(statearr_50728_51154[(2)] = inst_50515);

(statearr_50728_51154[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (14))){
var inst_50221 = (state_50564[(36)]);
var inst_50248 = inst_50221.init;
var inst_50249 = (inst_50248 == null);
var inst_50250 = cljs.core.not(inst_50249);
var state_50564__$1 = state_50564;
if(inst_50250){
var statearr_50730_51155 = state_50564__$1;
(statearr_50730_51155[(1)] = (23));

} else {
var statearr_50731_51156 = state_50564__$1;
(statearr_50731_51156[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (45))){
var inst_50323 = (state_50564[(38)]);
var inst_50333 = cljs.core.seq(inst_50323);
var inst_50334 = cljs.core.first(inst_50333);
var inst_50335 = cljs.core.next(inst_50333);
var inst_50336 = cljs.core.PersistentVector.EMPTY;
var inst_50337 = inst_50323;
var inst_50338 = inst_50336;
var state_50564__$1 = (function (){var statearr_50735 = state_50564;
(statearr_50735[(48)] = inst_50334);

(statearr_50735[(49)] = inst_50335);

(statearr_50735[(30)] = inst_50337);

(statearr_50735[(32)] = inst_50338);

return statearr_50735;
})();
var statearr_50736_51165 = state_50564__$1;
(statearr_50736_51165[(2)] = null);

(statearr_50736_51165[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (53))){
var inst_50353 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50737_51166 = state_50564__$1;
(statearr_50737_51166[(2)] = inst_50353);

(statearr_50737_51166[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (78))){
var inst_50510 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50738_51167 = state_50564__$1;
(statearr_50738_51167[(2)] = inst_50510);

(statearr_50738_51167[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (26))){
var inst_50255 = (state_50564[(21)]);
var inst_50256 = (state_50564[(40)]);
var inst_50255__$1 = (state_50564[(2)]);
var inst_50256__$1 = (inst_50255__$1 instanceof cljs.core.ExceptionInfo);
var state_50564__$1 = (function (){var statearr_50739 = state_50564;
(statearr_50739[(21)] = inst_50255__$1);

(statearr_50739[(40)] = inst_50256__$1);

return statearr_50739;
})();
if(cljs.core.truth_(inst_50256__$1)){
var statearr_50742_51169 = state_50564__$1;
(statearr_50742_51169[(1)] = (27));

} else {
var statearr_50743_51170 = state_50564__$1;
(statearr_50743_51170[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (16))){
var inst_50233 = (state_50564[(17)]);
var inst_50234 = (state_50564[(50)]);
var inst_50233__$1 = (state_50564[(2)]);
var inst_50234__$1 = (inst_50233__$1 instanceof cljs.core.ExceptionInfo);
var state_50564__$1 = (function (){var statearr_50744 = state_50564;
(statearr_50744[(17)] = inst_50233__$1);

(statearr_50744[(50)] = inst_50234__$1);

return statearr_50744;
})();
if(cljs.core.truth_(inst_50234__$1)){
var statearr_50745_51171 = state_50564__$1;
(statearr_50745_51171[(1)] = (17));

} else {
var statearr_50746_51172 = state_50564__$1;
(statearr_50746_51172[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (81))){
var inst_50507 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50751_51176 = state_50564__$1;
(statearr_50751_51176[(2)] = inst_50507);

(statearr_50751_51176[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (79))){
var inst_50463 = (state_50564[(14)]);
var inst_50467 = cljs.core.chunk_first(inst_50463);
var inst_50468 = cljs.core.chunk_rest(inst_50463);
var inst_50469 = cljs.core.count(inst_50467);
var inst_50421 = inst_50468;
var inst_50422 = inst_50467;
var inst_50423 = inst_50469;
var inst_50424 = (0);
var state_50564__$1 = (function (){var statearr_50756 = state_50564;
(statearr_50756[(13)] = inst_50421);

(statearr_50756[(24)] = inst_50422);

(statearr_50756[(25)] = inst_50423);

(statearr_50756[(26)] = inst_50424);

return statearr_50756;
})();
var statearr_50757_51177 = state_50564__$1;
(statearr_50757_51177[(2)] = null);

(statearr_50757_51177[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (38))){
var inst_50304 = (state_50564[(28)]);
var inst_50305 = (state_50564[(34)]);
var inst_50304__$1 = (state_50564[(2)]);
var inst_50305__$1 = (inst_50304__$1 instanceof cljs.core.ExceptionInfo);
var state_50564__$1 = (function (){var statearr_50758 = state_50564;
(statearr_50758[(28)] = inst_50304__$1);

(statearr_50758[(34)] = inst_50305__$1);

return statearr_50758;
})();
if(cljs.core.truth_(inst_50305__$1)){
var statearr_50759_51178 = state_50564__$1;
(statearr_50759_51178[(1)] = (39));

} else {
var statearr_50760_51179 = state_50564__$1;
(statearr_50760_51179[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (87))){
var inst_50521 = (state_50564[(27)]);
var state_50564__$1 = state_50564;
var statearr_50764_51180 = state_50564__$1;
(statearr_50764_51180[(2)] = inst_50521);

(statearr_50764_51180[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (30))){
var inst_50255 = (state_50564[(21)]);
var inst_50265 = (function(){throw inst_50255})();
var state_50564__$1 = state_50564;
var statearr_50765_51181 = state_50564__$1;
(statearr_50765_51181[(2)] = inst_50265);

(statearr_50765_51181[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (73))){
var inst_50422 = (state_50564[(24)]);
var inst_50424 = (state_50564[(26)]);
var inst_50364 = (state_50564[(44)]);
var inst_50365 = (state_50564[(45)]);
var inst_50366 = (state_50564[(46)]);
var inst_50421 = (state_50564[(13)]);
var inst_50423 = (state_50564[(25)]);
var inst_50429 = cljs.core._nth(inst_50422,inst_50424);
var inst_50430 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_50429);
var inst_50431 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50432 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50433 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_50434 = [inst_50364,inst_50365];
var inst_50435 = cljs.core.PersistentHashMap.fromArrays(inst_50433,inst_50434);
var inst_50436 = [inst_50435];
var inst_50437 = cljs.core.PersistentHashMap.fromArrays(inst_50432,inst_50436);
var inst_50438 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50439 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50440 = bb_web_ds_tools.runtime.webr.get_width(inst_50429);
var inst_50441 = (inst_50440 * inst_50366);
var inst_50442 = (inst_50441 | (0));
var inst_50443 = bb_web_ds_tools.runtime.webr.get_height(inst_50429);
var inst_50444 = (inst_50443 * inst_50366);
var inst_50445 = (inst_50444 | (0));
var inst_50446 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_50447 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50430),")"].join('');
var inst_50448 = [inst_50447,"cover"];
var inst_50449 = cljs.core.PersistentHashMap.fromArrays(inst_50446,inst_50448);
var inst_50450 = [inst_50442,inst_50445,inst_50449];
var inst_50451 = cljs.core.PersistentHashMap.fromArrays(inst_50439,inst_50450);
var inst_50452 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_50451];
var inst_50453 = (new cljs.core.PersistentVector(null,2,(5),inst_50438,inst_50452,null));
var inst_50454 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_50437,inst_50453];
var inst_50455 = (new cljs.core.PersistentVector(null,3,(5),inst_50431,inst_50454,null));
var inst_50456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50457 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_50455,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_50458 = (new cljs.core.PersistentVector(null,3,(5),inst_50456,inst_50457,null));
var inst_50459 = re_frame.core.dispatch(inst_50458);
var inst_50460 = (inst_50424 + (1));
var tmp50761 = inst_50421;
var tmp50762 = inst_50422;
var tmp50763 = inst_50423;
var inst_50421__$1 = tmp50761;
var inst_50422__$1 = tmp50762;
var inst_50423__$1 = tmp50763;
var inst_50424__$1 = inst_50460;
var state_50564__$1 = (function (){var statearr_50766 = state_50564;
(statearr_50766[(51)] = inst_50459);

(statearr_50766[(13)] = inst_50421__$1);

(statearr_50766[(24)] = inst_50422__$1);

(statearr_50766[(25)] = inst_50423__$1);

(statearr_50766[(26)] = inst_50424__$1);

return statearr_50766;
})();
var statearr_50767_51182 = state_50564__$1;
(statearr_50767_51182[(2)] = null);

(statearr_50767_51182[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (10))){
var inst_50276 = (state_50564[(2)]);
var state_50564__$1 = (function (){var statearr_50768 = state_50564;
(statearr_50768[(35)] = inst_50276);

return statearr_50768;
})();
var statearr_50769_51183 = state_50564__$1;
(statearr_50769_51183[(2)] = null);

(statearr_50769_51183[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (18))){
var inst_50234 = (state_50564[(50)]);
var state_50564__$1 = state_50564;
var statearr_50771_51184 = state_50564__$1;
(statearr_50771_51184[(2)] = inst_50234);

(statearr_50771_51184[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (52))){
var inst_50348 = (state_50564[(33)]);
var state_50564__$1 = state_50564;
var statearr_50772_51185 = state_50564__$1;
(statearr_50772_51185[(2)] = inst_50348);

(statearr_50772_51185[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (67))){
var inst_50407 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50773_51186 = state_50564__$1;
(statearr_50773_51186[(2)] = inst_50407);

(statearr_50773_51186[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (71))){
var inst_50424 = (state_50564[(26)]);
var inst_50423 = (state_50564[(25)]);
var inst_50426 = (inst_50424 < inst_50423);
var inst_50427 = inst_50426;
var state_50564__$1 = state_50564;
if(cljs.core.truth_(inst_50427)){
var statearr_50774_51187 = state_50564__$1;
(statearr_50774_51187[(1)] = (73));

} else {
var statearr_50775_51188 = state_50564__$1;
(statearr_50775_51188[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (42))){
var inst_50304 = (state_50564[(28)]);
var inst_50314 = (function(){throw inst_50304})();
var state_50564__$1 = state_50564;
var statearr_50777_51189 = state_50564__$1;
(statearr_50777_51189[(2)] = inst_50314);

(statearr_50777_51189[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (80))){
var inst_50463 = (state_50564[(14)]);
var inst_50364 = (state_50564[(44)]);
var inst_50365 = (state_50564[(45)]);
var inst_50366 = (state_50564[(46)]);
var inst_50472 = cljs.core.first(inst_50463);
var inst_50473 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_50472);
var inst_50474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50475 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50476 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_50477 = [inst_50364,inst_50365];
var inst_50478 = cljs.core.PersistentHashMap.fromArrays(inst_50476,inst_50477);
var inst_50479 = [inst_50478];
var inst_50480 = cljs.core.PersistentHashMap.fromArrays(inst_50475,inst_50479);
var inst_50481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50482 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50484 = bb_web_ds_tools.runtime.webr.get_width(inst_50472);
var inst_50485 = (inst_50484 * inst_50366);
var inst_50486 = (inst_50485 | (0));
var inst_50487 = bb_web_ds_tools.runtime.webr.get_height(inst_50472);
var inst_50488 = (inst_50487 * inst_50366);
var inst_50489 = (inst_50488 | (0));
var inst_50490 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_50491 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50473),")"].join('');
var inst_50492 = [inst_50491,"cover"];
var inst_50493 = cljs.core.PersistentHashMap.fromArrays(inst_50490,inst_50492);
var inst_50494 = [inst_50486,inst_50489,inst_50493];
var inst_50495 = cljs.core.PersistentHashMap.fromArrays(inst_50482,inst_50494);
var inst_50496 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_50495];
var inst_50497 = (new cljs.core.PersistentVector(null,2,(5),inst_50481,inst_50496,null));
var inst_50498 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_50480,inst_50497];
var inst_50499 = (new cljs.core.PersistentVector(null,3,(5),inst_50474,inst_50498,null));
var inst_50500 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50501 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_50499,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_50502 = (new cljs.core.PersistentVector(null,3,(5),inst_50500,inst_50501,null));
var inst_50503 = re_frame.core.dispatch(inst_50502);
var inst_50504 = cljs.core.next(inst_50463);
var inst_50421 = inst_50504;
var inst_50422 = null;
var inst_50423 = (0);
var inst_50424 = (0);
var state_50564__$1 = (function (){var statearr_50779 = state_50564;
(statearr_50779[(52)] = inst_50503);

(statearr_50779[(13)] = inst_50421);

(statearr_50779[(24)] = inst_50422);

(statearr_50779[(25)] = inst_50423);

(statearr_50779[(26)] = inst_50424);

return statearr_50779;
})();
var statearr_50781_51191 = state_50564__$1;
(statearr_50781_51191[(2)] = null);

(statearr_50781_51191[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (37))){
var _ = (function (){var statearr_50782 = state_50564;
(statearr_50782[(4)] = cljs.core.rest((state_50564[(4)])));

return statearr_50782;
})();
var state_50564__$1 = state_50564;
var ex50776 = (state_50564__$1[(2)]);
var statearr_50783_51193 = state_50564__$1;
(statearr_50783_51193[(5)] = ex50776);


var statearr_50784_51195 = state_50564__$1;
(statearr_50784_51195[(1)] = (36));

(statearr_50784_51195[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (63))){
var state_50564__$1 = state_50564;
var statearr_50785_51196 = state_50564__$1;
(statearr_50785_51196[(2)] = null);

(statearr_50785_51196[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (94))){
var inst_50321 = (state_50564[(18)]);
var inst_50537 = (state_50564[(2)]);
var inst_50538 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50321);
var state_50564__$1 = (function (){var statearr_50786 = state_50564;
(statearr_50786[(53)] = inst_50537);

return statearr_50786;
})();
var statearr_50787_51197 = state_50564__$1;
(statearr_50787_51197[(2)] = inst_50538);

(statearr_50787_51197[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (8))){
var inst_50559 = (state_50564[(2)]);
var _ = (function (){var statearr_50788 = state_50564;
(statearr_50788[(4)] = cljs.core.rest((state_50564[(4)])));

return statearr_50788;
})();
var state_50564__$1 = state_50564;
var statearr_50789_51198 = state_50564__$1;
(statearr_50789_51198[(2)] = inst_50559);

(statearr_50789_51198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (49))){
var inst_50355 = (state_50564[(2)]);
var state_50564__$1 = state_50564;
var statearr_50790_51199 = state_50564__$1;
(statearr_50790_51199[(2)] = inst_50355);

(statearr_50790_51199[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50565 === (84))){
var inst_50536 = (state_50564[(2)]);
var state_50564__$1 = (function (){var statearr_50791 = state_50564;
(statearr_50791[(29)] = inst_50536);

return statearr_50791;
})();
var statearr_50792_51200 = state_50564__$1;
(statearr_50792_51200[(2)] = null);

(statearr_50792_51200[(1)] = (92));


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
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0 = (function (){
var statearr_50795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50795[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32400__auto__);

(statearr_50795[(1)] = (1));

return statearr_50795;
});
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1 = (function (state_50564){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_50564);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e50796){var ex__32403__auto__ = e50796;
var statearr_50797_51204 = state_50564;
(statearr_50797_51204[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_50564[(4)]))){
var statearr_50798_51205 = state_50564;
(statearr_50798_51205[(1)] = cljs.core.first((state_50564[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51206 = state_50564;
state_50564 = G__51206;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = function(state_50564){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1.call(this,state_50564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_50799 = f__32475__auto__();
(statearr_50799[(6)] = c__32474__auto__);

return statearr_50799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
} else {
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null));
}
}));

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$applyTo = (function (seq50197){
var G__50198 = cljs.core.first(seq50197);
var seq50197__$1 = cljs.core.next(seq50197);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50198,seq50197__$1);
}));


//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
