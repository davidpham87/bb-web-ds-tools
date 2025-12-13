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
var len__5749__auto___50770 = arguments.length;
var i__5750__auto___50771 = (0);
while(true){
if((i__5750__auto___50771 < len__5749__auto___50770)){
args__5755__auto__.push((arguments[i__5750__auto___50771]));

var G__50772 = (i__5750__auto___50771 + (1));
i__5750__auto___50771 = G__50772;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__49711,p__49712){
var map__49713 = p__49711;
var map__49713__$1 = cljs.core.__destructure_map(map__49713);
var value = map__49713__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49713__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__49714 = p__49712;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49714,(0),null);
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
if(cljs.core.truth_((function (){var G__49718 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__49717 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__49717.cljs$core$IFn$_invoke$arity$1 ? fexpr__49717.cljs$core$IFn$_invoke$arity$1(G__49718) : fexpr__49717.call(null,G__49718));
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
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_49722){
var state_val_49723 = (state_49722[(1)]);
if((state_val_49723 === (1))){
var state_49722__$1 = state_49722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49722__$1,(2),bb_web_ds_tools.runtime.webr.input_buffer,text);
} else {
if((state_val_49723 === (2))){
var inst_49720 = (state_49722[(2)]);
var state_49722__$1 = state_49722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49722__$1,inst_49720);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0 = (function (){
var statearr_49724 = [null,null,null,null,null,null,null];
(statearr_49724[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32400__auto__);

(statearr_49724[(1)] = (1));

return statearr_49724;
});
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1 = (function (state_49722){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_49722);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e49725){var ex__32403__auto__ = e49725;
var statearr_49726_50774 = state_49722;
(statearr_49726_50774[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_49722[(4)]))){
var statearr_49727_50775 = state_49722;
(statearr_49727_50775[(1)] = cljs.core.first((state_49722[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50776 = state_49722;
state_49722 = G__50776;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = function(state_49722){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1.call(this,state_49722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_49728 = f__32493__auto__();
(statearr_49728[(6)] = c__32492__auto__);

return statearr_49728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),viewer__$1], null));

}
}
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq49709){
var G__49710 = cljs.core.first(seq49709);
var seq49709__$1 = cljs.core.next(seq49709);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49710,seq49709__$1);
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
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_49797){
var state_val_49798 = (state_49797[(1)]);
if((state_val_49798 === (7))){
var inst_49793 = (state_49797[(2)]);
var state_49797__$1 = state_49797;
var statearr_49799_50777 = state_49797__$1;
(statearr_49799_50777[(2)] = inst_49793);

(statearr_49799_50777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (20))){
var inst_49773 = (state_49797[(7)]);
var inst_49777 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49773);
var state_49797__$1 = state_49797;
var statearr_49800_50778 = state_49797__$1;
(statearr_49800_50778[(2)] = inst_49777);

(statearr_49800_50778[(1)] = (21));


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
var statearr_49802_50779 = state_49797__$1;
(statearr_49802_50779[(1)] = (2));

} else {
var statearr_49803_50780 = state_49797__$1;
(statearr_49803_50780[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (24))){
var inst_49791 = (state_49797[(2)]);
var state_49797__$1 = state_49797;
var statearr_49804_50781 = state_49797__$1;
(statearr_49804_50781[(2)] = inst_49791);

(statearr_49804_50781[(1)] = (7));


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
var statearr_49805_50782 = state_49797__$1;
(statearr_49805_50782[(1)] = (16));

} else {
var statearr_49806_50783 = state_49797__$1;
(statearr_49806_50783[(1)] = (17));

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
var statearr_49808_50784 = state_49797__$1;
(statearr_49808_50784[(2)] = inst_49783);

(statearr_49808_50784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (13))){
var inst_49759 = (state_49797[(10)]);
var inst_49762 = cljs.core.ex_data(inst_49759);
var inst_49763 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49762);
var inst_49764 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49763,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49797__$1 = state_49797;
var statearr_49809_50785 = state_49797__$1;
(statearr_49809_50785[(2)] = inst_49764);

(statearr_49809_50785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (22))){
var state_49797__$1 = state_49797;
var statearr_49810_50786 = state_49797__$1;
(statearr_49810_50786[(2)] = null);

(statearr_49810_50786[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (6))){
var state_49797__$1 = state_49797;
var statearr_49811_50787 = state_49797__$1;
(statearr_49811_50787[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (17))){
var inst_49759 = (state_49797[(10)]);
var state_49797__$1 = state_49797;
var statearr_49813_50788 = state_49797__$1;
(statearr_49813_50788[(2)] = inst_49759);

(statearr_49813_50788[(1)] = (18));


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
var statearr_49814_50789 = state_49797__$1;
(statearr_49814_50789[(1)] = (5));

} else {
var statearr_49815_50790 = state_49797__$1;
(statearr_49815_50790[(1)] = (6));

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
var statearr_49817_50792 = state_49797__$1;
(statearr_49817_50792[(1)] = (13));

} else {
var statearr_49818_50793 = state_49797__$1;
(statearr_49818_50793[(1)] = (14));

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
var statearr_49819_50797 = state_49797__$1;
(statearr_49819_50797[(2)] = inst_49739);

(statearr_49819_50797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (23))){
var state_49797__$1 = state_49797;
var statearr_49821_50798 = state_49797__$1;
(statearr_49821_50798[(2)] = null);

(statearr_49821_50798[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (19))){
var inst_49774 = (state_49797[(12)]);
var state_49797__$1 = state_49797;
var statearr_49822_50799 = state_49797__$1;
(statearr_49822_50799[(2)] = inst_49774);

(statearr_49822_50799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (11))){
var _ = (function (){var statearr_49823 = state_49797;
(statearr_49823[(4)] = cljs.core.rest((state_49797[(4)])));

return statearr_49823;
})();
var state_49797__$1 = state_49797;
var ex49820 = (state_49797__$1[(2)]);
var statearr_49824_50801 = state_49797__$1;
(statearr_49824_50801[(5)] = ex49820);


var statearr_49825_50802 = state_49797__$1;
(statearr_49825_50802[(1)] = (10));

(statearr_49825_50802[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (9))){
var inst_49786 = (state_49797[(2)]);
var state_49797__$1 = state_49797;
var statearr_49826_50806 = state_49797__$1;
(statearr_49826_50806[(2)] = inst_49786);

(statearr_49826_50806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (5))){
var state_49797__$1 = state_49797;
var statearr_49827_50807 = state_49797__$1;
(statearr_49827_50807[(2)] = null);

(statearr_49827_50807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (14))){
var inst_49760 = (state_49797[(11)]);
var state_49797__$1 = state_49797;
var statearr_49828_50808 = state_49797__$1;
(statearr_49828_50808[(2)] = inst_49760);

(statearr_49828_50808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49798 === (16))){
var inst_49759 = (state_49797[(10)]);
var inst_49769 = (function(){throw inst_49759})();
var state_49797__$1 = state_49797;
var statearr_49829_50809 = state_49797__$1;
(statearr_49829_50809[(2)] = inst_49769);

(statearr_49829_50809[(1)] = (18));


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
var statearr_49831_50814 = state_49797__$1;
(statearr_49831_50814[(2)] = inst_49750);

(statearr_49831_50814[(1)] = (9));


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
var statearr_49833_50815 = state_49797__$1;
(statearr_49833_50815[(1)] = (19));

} else {
var statearr_49834_50816 = state_49797__$1;
(statearr_49834_50816[(1)] = (20));

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
}catch (e49838){var ex__32403__auto__ = e49838;
var statearr_49839_50821 = state_49797;
(statearr_49839_50821[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_49797[(4)]))){
var statearr_49843_50822 = state_49797;
(statearr_49843_50822[(1)] = cljs.core.first((state_49797[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50824 = state_49797;
state_49797 = G__50824;
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
var state__32494__auto__ = (function (){var statearr_49848 = f__32493__auto__();
(statearr_49848[(6)] = c__32492__auto__);

return statearr_49848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
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
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_49902){
var state_val_49903 = (state_49902[(1)]);
if((state_val_49903 === (7))){
var inst_49898 = (state_49902[(2)]);
var state_49902__$1 = state_49902;
var statearr_49904_50825 = state_49902__$1;
(statearr_49904_50825[(2)] = inst_49898);

(statearr_49904_50825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (1))){
var inst_49849 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_49902__$1 = state_49902;
if(cljs.core.truth_(inst_49849)){
var statearr_49906_50826 = state_49902__$1;
(statearr_49906_50826[(1)] = (2));

} else {
var statearr_49909_50827 = state_49902__$1;
(statearr_49909_50827[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (4))){
var inst_49900 = (state_49902[(2)]);
var state_49902__$1 = state_49902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49902__$1,inst_49900);
} else {
if((state_val_49903 === (15))){
var inst_49885 = (state_49902[(2)]);
var state_49902__$1 = state_49902;
if(cljs.core.truth_(inst_49885)){
var statearr_49917_50830 = state_49902__$1;
(statearr_49917_50830[(1)] = (16));

} else {
var statearr_49918_50832 = state_49902__$1;
(statearr_49918_50832[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (13))){
var inst_49877 = (state_49902[(7)]);
var inst_49880 = cljs.core.ex_data(inst_49877);
var inst_49881 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49880);
var inst_49882 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49881,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49902__$1 = state_49902;
var statearr_49924_50834 = state_49902__$1;
(statearr_49924_50834[(2)] = inst_49882);

(statearr_49924_50834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (6))){
var inst_49896 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_49902__$1 = state_49902;
var statearr_49925_50835 = state_49902__$1;
(statearr_49925_50835[(2)] = inst_49896);

(statearr_49925_50835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (17))){
var inst_49877 = (state_49902[(7)]);
var state_49902__$1 = state_49902;
var statearr_49926_50836 = state_49902__$1;
(statearr_49926_50836[(2)] = inst_49877);

(statearr_49926_50836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (3))){
var inst_49853 = (typeof WebR !== 'undefined');
var state_49902__$1 = state_49902;
if(cljs.core.truth_(inst_49853)){
var statearr_49927_50838 = state_49902__$1;
(statearr_49927_50838[(1)] = (5));

} else {
var statearr_49928_50842 = state_49902__$1;
(statearr_49928_50842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (12))){
var inst_49877 = (state_49902[(7)]);
var inst_49878 = (state_49902[(8)]);
var inst_49877__$1 = (state_49902[(2)]);
var inst_49878__$1 = (inst_49877__$1 instanceof cljs.core.ExceptionInfo);
var state_49902__$1 = (function (){var statearr_49930 = state_49902;
(statearr_49930[(7)] = inst_49877__$1);

(statearr_49930[(8)] = inst_49878__$1);

return statearr_49930;
})();
if(cljs.core.truth_(inst_49878__$1)){
var statearr_49931_50843 = state_49902__$1;
(statearr_49931_50843[(1)] = (13));

} else {
var statearr_49932_50844 = state_49902__$1;
(statearr_49932_50844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (2))){
var inst_49851 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_49902__$1 = state_49902;
var statearr_49933_50846 = state_49902__$1;
(statearr_49933_50846[(2)] = inst_49851);

(statearr_49933_50846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (11))){
var _ = (function (){var statearr_49934 = state_49902;
(statearr_49934[(4)] = cljs.core.rest((state_49902[(4)])));

return statearr_49934;
})();
var state_49902__$1 = state_49902;
var ex49929 = (state_49902__$1[(2)]);
var statearr_49935_50849 = state_49902__$1;
(statearr_49935_50849[(5)] = ex49929);


var statearr_49936_50850 = state_49902__$1;
(statearr_49936_50850[(1)] = (10));

(statearr_49936_50850[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (9))){
var inst_49894 = (state_49902[(2)]);
var state_49902__$1 = state_49902;
var statearr_49937_50851 = state_49902__$1;
(statearr_49937_50851[(2)] = inst_49894);

(statearr_49937_50851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (5))){
var state_49902__$1 = state_49902;
var statearr_49938_50852 = state_49902__$1;
(statearr_49938_50852[(2)] = null);

(statearr_49938_50852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (14))){
var inst_49878 = (state_49902[(8)]);
var state_49902__$1 = state_49902;
var statearr_49939_50853 = state_49902__$1;
(statearr_49939_50853[(2)] = inst_49878);

(statearr_49939_50853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (16))){
var inst_49877 = (state_49902[(7)]);
var inst_49887 = (function(){throw inst_49877})();
var state_49902__$1 = state_49902;
var statearr_49940_50854 = state_49902__$1;
(statearr_49940_50854[(2)] = inst_49887);

(statearr_49940_50854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (10))){
var inst_49855 = (state_49902[(2)]);
var inst_49856 = console.error("WebR Init Error:",inst_49855);
var inst_49857 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49855)].join('');
var inst_49858 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_49857) : on_error.call(null,inst_49857));
var state_49902__$1 = (function (){var statearr_49941 = state_49902;
(statearr_49941[(9)] = inst_49856);

return statearr_49941;
})();
var statearr_49942_50855 = state_49902__$1;
(statearr_49942_50855[(2)] = inst_49858);

(statearr_49942_50855[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (18))){
var inst_49890 = (state_49902[(2)]);
var inst_49891 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_49943 = state_49902;
(statearr_49943[(4)] = cljs.core.rest((state_49902[(4)])));

return statearr_49943;
})();
var state_49902__$1 = (function (){var statearr_49944 = state_49902;
(statearr_49944[(10)] = inst_49890);

return statearr_49944;
})();
var statearr_49945_50856 = state_49902__$1;
(statearr_49945_50856[(2)] = inst_49891);

(statearr_49945_50856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49903 === (8))){
var _ = (function (){var statearr_49946 = state_49902;
(statearr_49946[(4)] = cljs.core.cons((11),(state_49902[(4)])));

return statearr_49946;
})();
var inst_49868 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_49869 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_49870 = cljs.core.PersistentHashMap.fromArrays(inst_49868,inst_49869);
var inst_49871 = cljs.core.clj__GT_js(inst_49870);
var inst_49872 = (new WebR(inst_49871));
var inst_49873 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_49872);
var inst_49874 = bb_web_ds_tools.runtime.webr.init_obj(inst_49872);
var inst_49875 = cljs.core.async.interop.p__GT_c(inst_49874);
var state_49902__$1 = (function (){var statearr_49947 = state_49902;
(statearr_49947[(11)] = inst_49873);

return statearr_49947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49902__$1,(12),inst_49875);
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
var statearr_49948 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49948[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto__);

(statearr_49948[(1)] = (1));

return statearr_49948;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto____1 = (function (state_49902){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_49902);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e49949){var ex__32403__auto__ = e49949;
var statearr_49950_50860 = state_49902;
(statearr_49950_50860[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_49902[(4)]))){
var statearr_49951_50861 = state_49902;
(statearr_49951_50861[(1)] = cljs.core.first((state_49902[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50862 = state_49902;
state_49902 = G__50862;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto__ = function(state_49902){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto____1.call(this,state_49902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_49952 = f__32493__auto__();
(statearr_49952[(6)] = c__32492__auto__);

return statearr_49952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
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
var ds_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__49953){
var vec__49954 = p__49953;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49954,(0),null);
var map__49957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49954,(1),null);
var map__49957__$1 = cljs.core.__destructure_map(map__49957);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49957__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49957__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
var len__5749__auto___50864 = arguments.length;
var i__5750__auto___50865 = (0);
while(true){
if((i__5750__auto___50865 < len__5749__auto___50864)){
args__5755__auto__.push((arguments[i__5750__auto___50865]));

var G__50866 = (i__5750__auto___50865 + (1));
i__5750__auto___50865 = G__50866;
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
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_49995){
var state_val_49996 = (state_49995[(1)]);
if((state_val_49996 === (7))){
var inst_49977 = (state_49995[(7)]);
var inst_49980 = cljs.core.ex_data(inst_49977);
var inst_49981 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49980);
var inst_49982 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49981,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49995__$1 = state_49995;
var statearr_49998_50873 = state_49995__$1;
(statearr_49998_50873[(2)] = inst_49982);

(statearr_49998_50873[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (1))){
var state_49995__$1 = state_49995;
var statearr_49999_50876 = state_49995__$1;
(statearr_49999_50876[(2)] = null);

(statearr_49999_50876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (4))){
var inst_49964 = (state_49995[(2)]);
var inst_49965 = console.error("Failed to bind datasets to R:",inst_49964);
var state_49995__$1 = state_49995;
var statearr_50000_50877 = state_49995__$1;
(statearr_50000_50877[(2)] = inst_49965);

(statearr_50000_50877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (6))){
var inst_49977 = (state_49995[(7)]);
var inst_49978 = (state_49995[(8)]);
var inst_49977__$1 = (state_49995[(2)]);
var inst_49978__$1 = (inst_49977__$1 instanceof cljs.core.ExceptionInfo);
var state_49995__$1 = (function (){var statearr_50001 = state_49995;
(statearr_50001[(7)] = inst_49977__$1);

(statearr_50001[(8)] = inst_49978__$1);

return statearr_50001;
})();
if(cljs.core.truth_(inst_49978__$1)){
var statearr_50002_50880 = state_49995__$1;
(statearr_50002_50880[(1)] = (7));

} else {
var statearr_50004_50882 = state_49995__$1;
(statearr_50004_50882[(1)] = (8));

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
var _ = (function (){var statearr_50008 = state_49995;
(statearr_50008[(4)] = cljs.core.rest((state_49995[(4)])));

return statearr_50008;
})();
var state_49995__$1 = state_49995;
var statearr_50010_50883 = state_49995__$1;
(statearr_50010_50883[(2)] = inst_49990);

(statearr_50010_50883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (2))){
var _ = (function (){var statearr_50014 = state_49995;
(statearr_50014[(4)] = cljs.core.cons((5),(state_49995[(4)])));

return statearr_50014;
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
var statearr_50016_50884 = state_49995__$1;
(statearr_50016_50884[(2)] = inst_49977);

(statearr_50016_50884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (9))){
var inst_49985 = (state_49995[(2)]);
var state_49995__$1 = state_49995;
if(cljs.core.truth_(inst_49985)){
var statearr_50021_50885 = state_49995__$1;
(statearr_50021_50885[(1)] = (10));

} else {
var statearr_50022_50886 = state_49995__$1;
(statearr_50022_50886[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (5))){
var _ = (function (){var statearr_50023 = state_49995;
(statearr_50023[(4)] = cljs.core.rest((state_49995[(4)])));

return statearr_50023;
})();
var state_49995__$1 = state_49995;
var ex50015 = (state_49995__$1[(2)]);
var statearr_50024_50887 = state_49995__$1;
(statearr_50024_50887[(5)] = ex50015);


var statearr_50027_50888 = state_49995__$1;
(statearr_50027_50888[(1)] = (4));

(statearr_50027_50888[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (10))){
var inst_49977 = (state_49995[(7)]);
var inst_49987 = (function(){throw inst_49977})();
var state_49995__$1 = state_49995;
var statearr_50032_50889 = state_49995__$1;
(statearr_50032_50889[(2)] = inst_49987);

(statearr_50032_50889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49996 === (8))){
var inst_49978 = (state_49995[(8)]);
var state_49995__$1 = state_49995;
var statearr_50033_50890 = state_49995__$1;
(statearr_50033_50890[(2)] = inst_49978);

(statearr_50033_50890[(1)] = (9));


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
var statearr_50036 = [null,null,null,null,null,null,null,null,null];
(statearr_50036[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32400__auto__);

(statearr_50036[(1)] = (1));

return statearr_50036;
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
}catch (e50041){var ex__32403__auto__ = e50041;
var statearr_50042_50892 = state_49995;
(statearr_50042_50892[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_49995[(4)]))){
var statearr_50043_50893 = state_49995;
(statearr_50043_50893[(1)] = cljs.core.first((state_49995[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50894 = state_49995;
state_49995 = G__50894;
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
var state__32494__auto__ = (function (){var statearr_50044 = f__32493__auto__();
(statearr_50044[(6)] = c__32492__auto__);

return statearr_50044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
} else {
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_50047){
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
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0 = (function (){
var statearr_50049 = [null,null,null,null,null,null,null];
(statearr_50049[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32400__auto__);

(statearr_50049[(1)] = (1));

return statearr_50049;
});
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1 = (function (state_50047){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_50047);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e50050){var ex__32403__auto__ = e50050;
var statearr_50051_50895 = state_50047;
(statearr_50051_50895[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_50047[(4)]))){
var statearr_50052_50896 = state_50047;
(statearr_50052_50896[(1)] = cljs.core.first((state_50047[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50897 = state_50047;
state_50047 = G__50897;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = function(state_50047){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1.call(this,state_50047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_50053 = f__32493__auto__();
(statearr_50053[(6)] = c__32492__auto__);

return statearr_50053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
}
}));

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$applyTo = (function (seq49958){
var G__49959 = cljs.core.first(seq49958);
var seq49958__$1 = cljs.core.next(seq49958);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49959,seq49958__$1);
}));

/**
 * Retrieves the 'datasets' variable from R, converts it back to CLJS,
 * and dispatches an update event if found.
 */
bb_web_ds_tools.runtime.webr.sync_datasets = (function bb_web_ds_tools$runtime$webr$sync_datasets(){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_50125){
var state_val_50126 = (state_50125[(1)]);
if((state_val_50126 === (7))){
var inst_50092 = (state_50125[(7)]);
var inst_50092__$1 = (state_50125[(2)]);
var state_50125__$1 = (function (){var statearr_50130 = state_50125;
(statearr_50130[(7)] = inst_50092__$1);

return statearr_50130;
})();
if(cljs.core.truth_(inst_50092__$1)){
var statearr_50134_50899 = state_50125__$1;
(statearr_50134_50899[(1)] = (17));

} else {
var statearr_50135_50900 = state_50125__$1;
(statearr_50135_50900[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (20))){
var inst_50097 = (state_50125[(8)]);
var inst_50098 = (state_50125[(9)]);
var inst_50097__$1 = (state_50125[(2)]);
var inst_50098__$1 = (inst_50097__$1 instanceof cljs.core.ExceptionInfo);
var state_50125__$1 = (function (){var statearr_50136 = state_50125;
(statearr_50136[(8)] = inst_50097__$1);

(statearr_50136[(9)] = inst_50098__$1);

return statearr_50136;
})();
if(cljs.core.truth_(inst_50098__$1)){
var statearr_50137_50901 = state_50125__$1;
(statearr_50137_50901[(1)] = (21));

} else {
var statearr_50138_50902 = state_50125__$1;
(statearr_50138_50902[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (1))){
var state_50125__$1 = state_50125;
var statearr_50142_50903 = state_50125__$1;
(statearr_50142_50903[(2)] = null);

(statearr_50142_50903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (24))){
var inst_50097 = (state_50125[(8)]);
var inst_50107 = (function(){throw inst_50097})();
var state_50125__$1 = state_50125;
var statearr_50143_50904 = state_50125__$1;
(statearr_50143_50904[(2)] = inst_50107);

(statearr_50143_50904[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (4))){
var inst_50058 = (state_50125[(2)]);
var inst_50059 = console.error("Failed to sync datasets from R:",inst_50058);
var state_50125__$1 = state_50125;
var statearr_50144_50905 = state_50125__$1;
(statearr_50144_50905[(2)] = inst_50059);

(statearr_50144_50905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (15))){
var inst_50076 = (state_50125[(10)]);
var state_50125__$1 = state_50125;
var statearr_50148_50907 = state_50125__$1;
(statearr_50148_50907[(2)] = inst_50076);

(statearr_50148_50907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (21))){
var inst_50097 = (state_50125[(8)]);
var inst_50100 = cljs.core.ex_data(inst_50097);
var inst_50101 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50100);
var inst_50102 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50101,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50125__$1 = state_50125;
var statearr_50149_50908 = state_50125__$1;
(statearr_50149_50908[(2)] = inst_50102);

(statearr_50149_50908[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (13))){
var inst_50084 = (state_50125[(2)]);
var state_50125__$1 = state_50125;
if(cljs.core.truth_(inst_50084)){
var statearr_50150_50913 = state_50125__$1;
(statearr_50150_50913[(1)] = (14));

} else {
var statearr_50151_50914 = state_50125__$1;
(statearr_50151_50914[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (22))){
var inst_50098 = (state_50125[(9)]);
var state_50125__$1 = state_50125;
var statearr_50152_50916 = state_50125__$1;
(statearr_50152_50916[(2)] = inst_50098);

(statearr_50152_50916[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (6))){
var inst_50065 = (state_50125[(11)]);
var _ = (function (){var statearr_50153 = state_50125;
(statearr_50153[(4)] = cljs.core.cons((9),(state_50125[(4)])));

return statearr_50153;
})();
var inst_50072 = bb_web_ds_tools.runtime.webr.get_global_env(inst_50065);
var inst_50073 = bb_web_ds_tools.runtime.webr.get_r(inst_50072,"datasets");
var inst_50074 = cljs.core.async.interop.p__GT_c(inst_50073);
var state_50125__$1 = state_50125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50125__$1,(10),inst_50074);
} else {
if((state_val_50126 === (25))){
var inst_50097 = (state_50125[(8)]);
var state_50125__$1 = state_50125;
var statearr_50154_50917 = state_50125__$1;
(statearr_50154_50917[(2)] = inst_50097);

(statearr_50154_50917[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (17))){
var inst_50092 = (state_50125[(7)]);
var inst_50094 = bb_web_ds_tools.runtime.webr.to_js(inst_50092);
var inst_50095 = cljs.core.async.interop.p__GT_c(inst_50094);
var state_50125__$1 = state_50125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50125__$1,(20),inst_50095);
} else {
if((state_val_50126 === (3))){
var inst_50121 = (state_50125[(2)]);
var state_50125__$1 = state_50125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50125__$1,inst_50121);
} else {
if((state_val_50126 === (12))){
var inst_50077 = (state_50125[(12)]);
var state_50125__$1 = state_50125;
var statearr_50155_50918 = state_50125__$1;
(statearr_50155_50918[(2)] = inst_50077);

(statearr_50155_50918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (2))){
var _ = (function (){var statearr_50156 = state_50125;
(statearr_50156[(4)] = cljs.core.cons((5),(state_50125[(4)])));

return statearr_50156;
})();
var inst_50065 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_50125__$1 = (function (){var statearr_50157 = state_50125;
(statearr_50157[(11)] = inst_50065);

return statearr_50157;
})();
var statearr_50158_50919 = state_50125__$1;
(statearr_50158_50919[(2)] = null);

(statearr_50158_50919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (23))){
var inst_50105 = (state_50125[(2)]);
var state_50125__$1 = state_50125;
if(cljs.core.truth_(inst_50105)){
var statearr_50159_50920 = state_50125__$1;
(statearr_50159_50920[(1)] = (24));

} else {
var statearr_50160_50921 = state_50125__$1;
(statearr_50160_50921[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (19))){
var inst_50118 = (state_50125[(2)]);
var _ = (function (){var statearr_50162 = state_50125;
(statearr_50162[(4)] = cljs.core.rest((state_50125[(4)])));

return statearr_50162;
})();
var state_50125__$1 = state_50125;
var statearr_50163_50922 = state_50125__$1;
(statearr_50163_50922[(2)] = inst_50118);

(statearr_50163_50922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (11))){
var inst_50076 = (state_50125[(10)]);
var inst_50079 = cljs.core.ex_data(inst_50076);
var inst_50080 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50079);
var inst_50081 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50080,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50125__$1 = state_50125;
var statearr_50165_50923 = state_50125__$1;
(statearr_50165_50923[(2)] = inst_50081);

(statearr_50165_50923[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (9))){
var _ = (function (){var statearr_50166 = state_50125;
(statearr_50166[(4)] = cljs.core.rest((state_50125[(4)])));

return statearr_50166;
})();
var state_50125__$1 = state_50125;
var ex50161 = (state_50125__$1[(2)]);
var statearr_50167_50924 = state_50125__$1;
(statearr_50167_50924[(5)] = ex50161);


var statearr_50168_50925 = state_50125__$1;
(statearr_50168_50925[(1)] = (8));

(statearr_50168_50925[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (5))){
var _ = (function (){var statearr_50169 = state_50125;
(statearr_50169[(4)] = cljs.core.rest((state_50125[(4)])));

return statearr_50169;
})();
var state_50125__$1 = state_50125;
var ex50164 = (state_50125__$1[(2)]);
var statearr_50170_50926 = state_50125__$1;
(statearr_50170_50926[(5)] = ex50164);


var statearr_50171_50927 = state_50125__$1;
(statearr_50171_50927[(1)] = (4));

(statearr_50171_50927[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (14))){
var inst_50076 = (state_50125[(10)]);
var inst_50086 = (function(){throw inst_50076})();
var state_50125__$1 = state_50125;
var statearr_50172_50928 = state_50125__$1;
(statearr_50172_50928[(2)] = inst_50086);

(statearr_50172_50928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (26))){
var inst_50110 = (state_50125[(2)]);
var inst_50111 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50110,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_50112 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50113 = [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets-from-r","bb-web-ds-tools.views.datasets/patch-datasets-from-r",-125752359),inst_50111];
var inst_50114 = (new cljs.core.PersistentVector(null,2,(5),inst_50112,inst_50113,null));
var inst_50115 = re_frame.core.dispatch(inst_50114);
var state_50125__$1 = state_50125;
var statearr_50173_50929 = state_50125__$1;
(statearr_50173_50929[(2)] = inst_50115);

(statearr_50173_50929[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (16))){
var inst_50089 = (state_50125[(2)]);
var _ = (function (){var statearr_50174 = state_50125;
(statearr_50174[(4)] = cljs.core.rest((state_50125[(4)])));

return statearr_50174;
})();
var state_50125__$1 = state_50125;
var statearr_50175_50930 = state_50125__$1;
(statearr_50175_50930[(2)] = inst_50089);

(statearr_50175_50930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (10))){
var inst_50076 = (state_50125[(10)]);
var inst_50077 = (state_50125[(12)]);
var inst_50076__$1 = (state_50125[(2)]);
var inst_50077__$1 = (inst_50076__$1 instanceof cljs.core.ExceptionInfo);
var state_50125__$1 = (function (){var statearr_50176 = state_50125;
(statearr_50176[(10)] = inst_50076__$1);

(statearr_50176[(12)] = inst_50077__$1);

return statearr_50176;
})();
if(cljs.core.truth_(inst_50077__$1)){
var statearr_50177_50931 = state_50125__$1;
(statearr_50177_50931[(1)] = (11));

} else {
var statearr_50178_50932 = state_50125__$1;
(statearr_50178_50932[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (18))){
var state_50125__$1 = state_50125;
var statearr_50179_50933 = state_50125__$1;
(statearr_50179_50933[(2)] = null);

(statearr_50179_50933[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50126 === (8))){
var inst_50066 = (state_50125[(2)]);
var state_50125__$1 = (function (){var statearr_50180 = state_50125;
(statearr_50180[(13)] = inst_50066);

return statearr_50180;
})();
var statearr_50181_50934 = state_50125__$1;
(statearr_50181_50934[(2)] = null);

(statearr_50181_50934[(1)] = (7));


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
var statearr_50182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50182[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__);

(statearr_50182[(1)] = (1));

return statearr_50182;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1 = (function (state_50125){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_50125);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e50183){var ex__32403__auto__ = e50183;
var statearr_50184_50935 = state_50125;
(statearr_50184_50935[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_50125[(4)]))){
var statearr_50185_50936 = state_50125;
(statearr_50185_50936[(1)] = cljs.core.first((state_50125[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50937 = state_50125;
state_50125 = G__50937;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__ = function(state_50125){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1.call(this,state_50125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_50186 = f__32493__auto__();
(statearr_50186[(6)] = c__32492__auto__);

return statearr_50186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
} else {
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_50189){
var state_val_50190 = (state_50189[(1)]);
if((state_val_50190 === (1))){
var inst_50187 = console.warn("WebR not loaded, cannot sync datasets");
var state_50189__$1 = state_50189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50189__$1,inst_50187);
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
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1 = (function (state_50189){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_50189);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e50193){var ex__32403__auto__ = e50193;
var statearr_50194_50938 = state_50189;
(statearr_50194_50938[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_50189[(4)]))){
var statearr_50195_50939 = state_50189;
(statearr_50195_50939[(1)] = cljs.core.first((state_50189[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50942 = state_50189;
state_50189 = G__50942;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__ = function(state_50189){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1.call(this,state_50189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_50196 = f__32493__auto__();
(statearr_50196[(6)] = c__32492__auto__);

return statearr_50196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
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
var len__5749__auto___50943 = arguments.length;
var i__5750__auto___50944 = (0);
while(true){
if((i__5750__auto___50944 < len__5749__auto___50943)){
args__5755__auto__.push((arguments[i__5750__auto___50944]));

var G__50945 = (i__5750__auto___50944 + (1));
i__5750__auto___50944 = G__50945;
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
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_50563){
var state_val_50564 = (state_50563[(1)]);
if((state_val_50564 === (65))){
var inst_50389 = (state_50563[(7)]);
var inst_50393 = cljs.core.chunk_first(inst_50389);
var inst_50394 = cljs.core.chunk_rest(inst_50389);
var inst_50395 = cljs.core.count(inst_50393);
var inst_50372 = inst_50394;
var inst_50373 = inst_50393;
var inst_50374 = inst_50395;
var inst_50375 = (0);
var state_50563__$1 = (function (){var statearr_50565 = state_50563;
(statearr_50565[(8)] = inst_50372);

(statearr_50565[(9)] = inst_50373);

(statearr_50565[(10)] = inst_50374);

(statearr_50565[(11)] = inst_50375);

return statearr_50565;
})();
var statearr_50566_50950 = state_50563__$1;
(statearr_50566_50950[(2)] = null);

(statearr_50566_50950[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (70))){
var inst_50389 = (state_50563[(7)]);
var inst_50403 = (state_50563[(2)]);
var inst_50404 = cljs.core.next(inst_50389);
var inst_50372 = inst_50404;
var inst_50373 = null;
var inst_50374 = (0);
var inst_50375 = (0);
var state_50563__$1 = (function (){var statearr_50567 = state_50563;
(statearr_50567[(12)] = inst_50403);

(statearr_50567[(8)] = inst_50372);

(statearr_50567[(9)] = inst_50373);

(statearr_50567[(10)] = inst_50374);

(statearr_50567[(11)] = inst_50375);

return statearr_50567;
})();
var statearr_50568_50952 = state_50563__$1;
(statearr_50568_50952[(2)] = null);

(statearr_50568_50952[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (62))){
var inst_50389 = (state_50563[(7)]);
var inst_50391 = cljs.core.chunked_seq_QMARK_(inst_50389);
var state_50563__$1 = state_50563;
if(inst_50391){
var statearr_50569_50956 = state_50563__$1;
(statearr_50569_50956[(1)] = (65));

} else {
var statearr_50570_50957 = state_50563__$1;
(statearr_50570_50957[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (74))){
var inst_50421 = (state_50563[(13)]);
var inst_50463 = (state_50563[(14)]);
var inst_50463__$1 = cljs.core.seq(inst_50421);
var state_50563__$1 = (function (){var statearr_50571 = state_50563;
(statearr_50571[(14)] = inst_50463__$1);

return statearr_50571;
})();
if(inst_50463__$1){
var statearr_50572_50958 = state_50563__$1;
(statearr_50572_50958[(1)] = (76));

} else {
var statearr_50573_50959 = state_50563__$1;
(statearr_50573_50959[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (7))){
var inst_50555 = (new Error("Shelter not found on WebR instance"));
var inst_50556 = (function(){throw inst_50555})();
var state_50563__$1 = state_50563;
var statearr_50574_50960 = state_50563__$1;
(statearr_50574_50960[(2)] = inst_50556);

(statearr_50574_50960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (59))){
var inst_50380 = (state_50563[(15)]);
var inst_50382 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50380);
var state_50563__$1 = state_50563;
var statearr_50575_50961 = state_50563__$1;
(statearr_50575_50961[(2)] = inst_50382);

(statearr_50575_50961[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (86))){
var inst_50519 = (state_50563[(16)]);
var inst_50522 = cljs.core.ex_data(inst_50519);
var inst_50523 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50522);
var inst_50524 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50523,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50563__$1 = state_50563;
var statearr_50576_50962 = state_50563__$1;
(statearr_50576_50962[(2)] = inst_50524);

(statearr_50576_50962[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (20))){
var inst_50233 = (state_50563[(17)]);
var inst_50243 = (function(){throw inst_50233})();
var state_50563__$1 = state_50563;
var statearr_50577_50963 = state_50563__$1;
(statearr_50577_50963[(2)] = inst_50243);

(statearr_50577_50963[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (72))){
var inst_50321 = (state_50563[(18)]);
var inst_50514 = (state_50563[(19)]);
var inst_50513 = (state_50563[(2)]);
var inst_50514__$1 = bb_web_ds_tools.runtime.webr.to_js(inst_50321);
var inst_50515 = (inst_50514__$1 instanceof Promise);
var state_50563__$1 = (function (){var statearr_50578 = state_50563;
(statearr_50578[(20)] = inst_50513);

(statearr_50578[(19)] = inst_50514__$1);

return statearr_50578;
})();
if(cljs.core.truth_(inst_50515)){
var statearr_50579_50964 = state_50563__$1;
(statearr_50579_50964[(1)] = (82));

} else {
var statearr_50580_50965 = state_50563__$1;
(statearr_50580_50965[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (58))){
var inst_50412 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50581_50966 = state_50563__$1;
(statearr_50581_50966[(2)] = inst_50412);

(statearr_50581_50966[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (60))){
var state_50563__$1 = state_50563;
var statearr_50582_50967 = state_50563__$1;
(statearr_50582_50967[(2)] = null);

(statearr_50582_50967[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (27))){
var inst_50255 = (state_50563[(21)]);
var inst_50258 = cljs.core.ex_data(inst_50255);
var inst_50259 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50258);
var inst_50260 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50259,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50563__$1 = state_50563;
var statearr_50583_50968 = state_50563__$1;
(statearr_50583_50968[(2)] = inst_50260);

(statearr_50583_50968[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (1))){
var state_50563__$1 = state_50563;
var statearr_50584_50969 = state_50563__$1;
(statearr_50584_50969[(2)] = null);

(statearr_50584_50969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (69))){
var state_50563__$1 = state_50563;
var statearr_50586_50970 = state_50563__$1;
(statearr_50586_50970[(2)] = null);

(statearr_50586_50970[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (24))){
var state_50563__$1 = state_50563;
var statearr_50587_50971 = state_50563__$1;
(statearr_50587_50971[(2)] = null);

(statearr_50587_50971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (55))){
var inst_50320 = (state_50563[(22)]);
var inst_50414 = (state_50563[(2)]);
var inst_50419 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50320);
var inst_50420 = cljs.core.seq(inst_50419);
var inst_50421 = inst_50420;
var inst_50422 = null;
var inst_50423 = (0);
var inst_50424 = (0);
var state_50563__$1 = (function (){var statearr_50588 = state_50563;
(statearr_50588[(23)] = inst_50414);

(statearr_50588[(13)] = inst_50421);

(statearr_50588[(24)] = inst_50422);

(statearr_50588[(25)] = inst_50423);

(statearr_50588[(26)] = inst_50424);

return statearr_50588;
})();
var statearr_50589_50972 = state_50563__$1;
(statearr_50589_50972[(2)] = null);

(statearr_50589_50972[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (85))){
var inst_50519 = (state_50563[(16)]);
var inst_50520 = (state_50563[(27)]);
var inst_50519__$1 = (state_50563[(2)]);
var inst_50520__$1 = (inst_50519__$1 instanceof cljs.core.ExceptionInfo);
var state_50563__$1 = (function (){var statearr_50590 = state_50563;
(statearr_50590[(16)] = inst_50519__$1);

(statearr_50590[(27)] = inst_50520__$1);

return statearr_50590;
})();
if(cljs.core.truth_(inst_50520__$1)){
var statearr_50591_50973 = state_50563__$1;
(statearr_50591_50973[(1)] = (86));

} else {
var statearr_50592_50974 = state_50563__$1;
(statearr_50592_50974[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (39))){
var inst_50304 = (state_50563[(28)]);
var inst_50307 = cljs.core.ex_data(inst_50304);
var inst_50308 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50307);
var inst_50309 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50308,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50563__$1 = state_50563;
var statearr_50593_50979 = state_50563__$1;
(statearr_50593_50979[(2)] = inst_50309);

(statearr_50593_50979[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (88))){
var inst_50527 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
if(cljs.core.truth_(inst_50527)){
var statearr_50594_50980 = state_50563__$1;
(statearr_50594_50980[(1)] = (89));

} else {
var statearr_50595_50981 = state_50563__$1;
(statearr_50595_50981[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (46))){
var inst_50357 = cljs.core.PersistentVector.EMPTY;
var state_50563__$1 = state_50563;
var statearr_50596_50982 = state_50563__$1;
(statearr_50596_50982[(2)] = inst_50357);

(statearr_50596_50982[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (4))){
var inst_50203 = (state_50563[(2)]);
var inst_50204 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50205 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50203);
var inst_50206 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50205];
var inst_50207 = cljs.core.PersistentHashMap.fromArrays(inst_50204,inst_50206);
var inst_50208 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50207);
var state_50563__$1 = state_50563;
var statearr_50598_50983 = state_50563__$1;
(statearr_50598_50983[(2)] = inst_50208);

(statearr_50598_50983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (77))){
var state_50563__$1 = state_50563;
var statearr_50599_50984 = state_50563__$1;
(statearr_50599_50984[(2)] = null);

(statearr_50599_50984[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (95))){
var _ = (function (){var statearr_50600 = state_50563;
(statearr_50600[(4)] = cljs.core.rest((state_50563[(4)])));

return statearr_50600;
})();
var state_50563__$1 = state_50563;
var ex50597 = (state_50563__$1[(2)]);
var statearr_50601_50985 = state_50563__$1;
(statearr_50601_50985[(5)] = ex50597);


if((ex50597 instanceof Error)){
var statearr_50602_50986 = state_50563__$1;
(statearr_50602_50986[(1)] = (94));

(statearr_50602_50986[(5)] = null);

} else {
throw ex50597;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (54))){
var inst_50375 = (state_50563[(11)]);
var inst_50374 = (state_50563[(10)]);
var inst_50377 = (inst_50375 < inst_50374);
var inst_50378 = inst_50377;
var state_50563__$1 = state_50563;
if(cljs.core.truth_(inst_50378)){
var statearr_50603_50987 = state_50563__$1;
(statearr_50603_50987[(1)] = (56));

} else {
var statearr_50604_50988 = state_50563__$1;
(statearr_50604_50988[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (92))){
var inst_50535 = (state_50563[(29)]);
var _ = (function (){var statearr_50605 = state_50563;
(statearr_50605[(4)] = cljs.core.cons((95),(state_50563[(4)])));

return statearr_50605;
})();
var inst_50543 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50535,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_50606 = state_50563;
(statearr_50606[(4)] = cljs.core.rest((state_50563[(4)])));

return statearr_50606;
})();
var state_50563__$1 = state_50563;
var statearr_50607_50989 = state_50563__$1;
(statearr_50607_50989[(2)] = inst_50543);

(statearr_50607_50989[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (15))){
var inst_50273 = (state_50563[(2)]);
var _ = (function (){var statearr_50608 = state_50563;
(statearr_50608[(4)] = cljs.core.rest((state_50563[(4)])));

return statearr_50608;
})();
var state_50563__$1 = state_50563;
var statearr_50609_50990 = state_50563__$1;
(statearr_50609_50990[(2)] = inst_50273);

(statearr_50609_50990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (48))){
var inst_50337 = (state_50563[(30)]);
var inst_50343 = cljs.core.seq(inst_50337);
var inst_50344 = cljs.core.first(inst_50343);
var inst_50345 = cljs.core.next(inst_50343);
var state_50563__$1 = (function (){var statearr_50610 = state_50563;
(statearr_50610[(31)] = inst_50345);

return statearr_50610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50563__$1,(50),inst_50344);
} else {
if((state_val_50564 === (50))){
var inst_50338 = (state_50563[(32)]);
var inst_50345 = (state_50563[(31)]);
var inst_50347 = (state_50563[(2)]);
var inst_50348 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50338,inst_50347);
var state_50563__$1 = (function (){var statearr_50611 = state_50563;
(statearr_50611[(33)] = inst_50348);

return statearr_50611;
})();
if(cljs.core.truth_(inst_50345)){
var statearr_50612_50991 = state_50563__$1;
(statearr_50612_50991[(1)] = (51));

} else {
var statearr_50613_50992 = state_50563__$1;
(statearr_50613_50992[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (75))){
var inst_50511 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50614_50993 = state_50563__$1;
(statearr_50614_50993[(2)] = inst_50511);

(statearr_50614_50993[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (21))){
var inst_50233 = (state_50563[(17)]);
var state_50563__$1 = state_50563;
var statearr_50615_50994 = state_50563__$1;
(statearr_50615_50994[(2)] = inst_50233);

(statearr_50615_50994[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (31))){
var inst_50255 = (state_50563[(21)]);
var state_50563__$1 = state_50563;
var statearr_50616_50995 = state_50563__$1;
(statearr_50616_50995[(2)] = inst_50255);

(statearr_50616_50995[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (32))){
var inst_50268 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50617_50996 = state_50563__$1;
(statearr_50617_50996[(2)] = inst_50268);

(statearr_50617_50996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (40))){
var inst_50305 = (state_50563[(34)]);
var state_50563__$1 = state_50563;
var statearr_50618_50997 = state_50563__$1;
(statearr_50618_50997[(2)] = inst_50305);

(statearr_50618_50997[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (91))){
var inst_50532 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50619_50999 = state_50563__$1;
(statearr_50619_50999[(2)] = inst_50532);

(statearr_50619_50999[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (56))){
var inst_50373 = (state_50563[(9)]);
var inst_50375 = (state_50563[(11)]);
var inst_50380 = (state_50563[(15)]);
var inst_50380__$1 = cljs.core._nth(inst_50373,inst_50375);
var state_50563__$1 = (function (){var statearr_50620 = state_50563;
(statearr_50620[(15)] = inst_50380__$1);

return statearr_50620;
})();
if(cljs.core.truth_(inst_50380__$1)){
var statearr_50621_51000 = state_50563__$1;
(statearr_50621_51000[(1)] = (59));

} else {
var statearr_50622_51001 = state_50563__$1;
(statearr_50622_51001[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (33))){
var inst_50276 = (state_50563[(35)]);
var _ = (function (){var statearr_50623 = state_50563;
(statearr_50623[(4)] = cljs.core.cons((35),(state_50563[(4)])));

return statearr_50623;
})();
var ___$1 = (function (){var statearr_50624 = state_50563;
(statearr_50624[(4)] = cljs.core.cons((37),(state_50563[(4)])));

return statearr_50624;
})();
var inst_50297 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_50298 = [true];
var inst_50299 = cljs.core.PersistentHashMap.fromArrays(inst_50297,inst_50298);
var inst_50300 = cljs.core.clj__GT_js(inst_50299);
var inst_50301 = bb_web_ds_tools.runtime.webr.capture_r(inst_50276,code,inst_50300);
var inst_50302 = cljs.core.async.interop.p__GT_c(inst_50301);
var state_50563__$1 = state_50563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50563__$1,(38),inst_50302);
} else {
if((state_val_50564 === (13))){
var inst_50221 = (state_50563[(36)]);
var inst_50231 = cljs.core.async.interop.p__GT_c(inst_50221);
var state_50563__$1 = state_50563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50563__$1,(16),inst_50231);
} else {
if((state_val_50564 === (22))){
var inst_50246 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50626_51002 = state_50563__$1;
(statearr_50626_51002[(2)] = inst_50246);

(statearr_50626_51002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (90))){
var inst_50519 = (state_50563[(16)]);
var state_50563__$1 = state_50563;
var statearr_50627_51003 = state_50563__$1;
(statearr_50627_51003[(2)] = inst_50519);

(statearr_50627_51003[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (36))){
var inst_50282 = (state_50563[(2)]);
var inst_50283 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50284 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50282);
var inst_50285 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50284];
var inst_50286 = cljs.core.PersistentHashMap.fromArrays(inst_50283,inst_50285);
var inst_50287 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50286);
var state_50563__$1 = state_50563;
var statearr_50635_51005 = state_50563__$1;
(statearr_50635_51005[(2)] = inst_50287);

(statearr_50635_51005[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (41))){
var inst_50312 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
if(cljs.core.truth_(inst_50312)){
var statearr_50637_51006 = state_50563__$1;
(statearr_50637_51006[(1)] = (42));

} else {
var statearr_50638_51007 = state_50563__$1;
(statearr_50638_51007[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (89))){
var inst_50519 = (state_50563[(16)]);
var inst_50529 = (function(){throw inst_50519})();
var state_50563__$1 = state_50563;
var statearr_50642_51008 = state_50563__$1;
(statearr_50642_51008[(2)] = inst_50529);

(statearr_50642_51008[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (43))){
var inst_50304 = (state_50563[(28)]);
var state_50563__$1 = state_50563;
var statearr_50643_51010 = state_50563__$1;
(statearr_50643_51010[(2)] = inst_50304);

(statearr_50643_51010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (61))){
var inst_50375 = (state_50563[(11)]);
var inst_50372 = (state_50563[(8)]);
var inst_50373 = (state_50563[(9)]);
var inst_50374 = (state_50563[(10)]);
var inst_50385 = (state_50563[(2)]);
var inst_50386 = (inst_50375 + (1));
var tmp50639 = inst_50372;
var tmp50640 = inst_50373;
var tmp50641 = inst_50374;
var inst_50372__$1 = tmp50639;
var inst_50373__$1 = tmp50640;
var inst_50374__$1 = tmp50641;
var inst_50375__$1 = inst_50386;
var state_50563__$1 = (function (){var statearr_50644 = state_50563;
(statearr_50644[(37)] = inst_50385);

(statearr_50644[(8)] = inst_50372__$1);

(statearr_50644[(9)] = inst_50373__$1);

(statearr_50644[(10)] = inst_50374__$1);

(statearr_50644[(11)] = inst_50375__$1);

return statearr_50644;
})();
var statearr_50645_51011 = state_50563__$1;
(statearr_50645_51011[(2)] = null);

(statearr_50645_51011[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (29))){
var inst_50263 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
if(cljs.core.truth_(inst_50263)){
var statearr_50646_51013 = state_50563__$1;
(statearr_50646_51013[(1)] = (30));

} else {
var statearr_50647_51014 = state_50563__$1;
(statearr_50647_51014[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (44))){
var inst_50323 = (state_50563[(38)]);
var inst_50317 = (state_50563[(2)]);
var inst_50318 = bb_web_ds_tools.runtime.webr.get_result_props(inst_50317);
var inst_50319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50318,(0),null);
var inst_50320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50318,(1),null);
var inst_50321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50318,(2),null);
var inst_50322 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50319);
var inst_50323__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,inst_50322);
var inst_50324 = cljs.core.seq(inst_50323__$1);
var state_50563__$1 = (function (){var statearr_50648 = state_50563;
(statearr_50648[(22)] = inst_50320);

(statearr_50648[(18)] = inst_50321);

(statearr_50648[(38)] = inst_50323__$1);

return statearr_50648;
})();
if(inst_50324){
var statearr_50649_51016 = state_50563__$1;
(statearr_50649_51016[(1)] = (45));

} else {
var statearr_50650_51017 = state_50563__$1;
(statearr_50650_51017[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (93))){
var inst_50546 = (state_50563[(2)]);
var inst_50547 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_50548 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_50546];
var inst_50549 = cljs.core.PersistentHashMap.fromArrays(inst_50547,inst_50548);
var inst_50550 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50549);
var _ = (function (){var statearr_50651 = state_50563;
(statearr_50651[(4)] = cljs.core.rest((state_50563[(4)])));

return statearr_50651;
})();
var state_50563__$1 = state_50563;
var statearr_50652_51018 = state_50563__$1;
(statearr_50652_51018[(2)] = inst_50550);

(statearr_50652_51018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (6))){
var inst_50219 = (state_50563[(39)]);
var inst_50221 = (new inst_50219());
var state_50563__$1 = (function (){var statearr_50653 = state_50563;
(statearr_50653[(36)] = inst_50221);

return statearr_50653;
})();
var statearr_50654_51019 = state_50563__$1;
(statearr_50654_51019[(2)] = null);

(statearr_50654_51019[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (28))){
var inst_50256 = (state_50563[(40)]);
var state_50563__$1 = state_50563;
var statearr_50655_51020 = state_50563__$1;
(statearr_50655_51020[(2)] = inst_50256);

(statearr_50655_51020[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (64))){
var inst_50410 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50656_51021 = state_50563__$1;
(statearr_50656_51021[(2)] = inst_50410);

(statearr_50656_51021[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (51))){
var inst_50345 = (state_50563[(31)]);
var inst_50348 = (state_50563[(33)]);
var inst_50337 = inst_50345;
var inst_50338 = inst_50348;
var state_50563__$1 = (function (){var statearr_50658 = state_50563;
(statearr_50658[(30)] = inst_50337);

(statearr_50658[(32)] = inst_50338);

return statearr_50658;
})();
var statearr_50660_51023 = state_50563__$1;
(statearr_50660_51023[(2)] = null);

(statearr_50660_51023[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (25))){
var inst_50221 = (state_50563[(36)]);
var inst_50271 = (state_50563[(2)]);
var state_50563__$1 = (function (){var statearr_50661 = state_50563;
(statearr_50661[(41)] = inst_50271);

return statearr_50661;
})();
var statearr_50662_51025 = state_50563__$1;
(statearr_50662_51025[(2)] = inst_50221);

(statearr_50662_51025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (34))){
var inst_50553 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50663_51026 = state_50563__$1;
(statearr_50663_51026[(2)] = inst_50553);

(statearr_50663_51026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (17))){
var inst_50233 = (state_50563[(17)]);
var inst_50236 = cljs.core.ex_data(inst_50233);
var inst_50237 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50236);
var inst_50238 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50237,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50563__$1 = state_50563;
var statearr_50665_51035 = state_50563__$1;
(statearr_50665_51035[(2)] = inst_50238);

(statearr_50665_51035[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (3))){
var inst_50561 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50563__$1,inst_50561);
} else {
if((state_val_50564 === (12))){
var _ = (function (){var statearr_50666 = state_50563;
(statearr_50666[(4)] = cljs.core.rest((state_50563[(4)])));

return statearr_50666;
})();
var state_50563__$1 = state_50563;
var ex50664 = (state_50563__$1[(2)]);
var statearr_50667_51036 = state_50563__$1;
(statearr_50667_51036[(5)] = ex50664);


var statearr_50668_51037 = state_50563__$1;
(statearr_50668_51037[(1)] = (11));

(statearr_50668_51037[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (2))){
var inst_50219 = (state_50563[(39)]);
var _ = (function (){var statearr_50669 = state_50563;
(statearr_50669[(4)] = cljs.core.cons((5),(state_50563[(4)])));

return statearr_50669;
})();
var inst_50214 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50215 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_50216 = cljs.core.PersistentHashMap.fromArrays(inst_50214,inst_50215);
var inst_50217 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50216);
var inst_50218 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_50219__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(inst_50218);
var state_50563__$1 = (function (){var statearr_50670 = state_50563;
(statearr_50670[(42)] = inst_50217);

(statearr_50670[(39)] = inst_50219__$1);

return statearr_50670;
})();
if(cljs.core.truth_(inst_50219__$1)){
var statearr_50671_51038 = state_50563__$1;
(statearr_50671_51038[(1)] = (6));

} else {
var statearr_50672_51039 = state_50563__$1;
(statearr_50672_51039[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (66))){
var inst_50389 = (state_50563[(7)]);
var inst_50398 = (state_50563[(43)]);
var inst_50398__$1 = cljs.core.first(inst_50389);
var state_50563__$1 = (function (){var statearr_50673 = state_50563;
(statearr_50673[(43)] = inst_50398__$1);

return statearr_50673;
})();
if(cljs.core.truth_(inst_50398__$1)){
var statearr_50675_51040 = state_50563__$1;
(statearr_50675_51040[(1)] = (68));

} else {
var statearr_50676_51041 = state_50563__$1;
(statearr_50676_51041[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (23))){
var inst_50221 = (state_50563[(36)]);
var inst_50252 = bb_web_ds_tools.runtime.webr.init_obj(inst_50221);
var inst_50253 = cljs.core.async.interop.p__GT_c(inst_50252);
var state_50563__$1 = state_50563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50563__$1,(26),inst_50253);
} else {
if((state_val_50564 === (47))){
var inst_50359 = (state_50563[(2)]);
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
var state_50563__$1 = (function (){var statearr_50678 = state_50563;
(statearr_50678[(44)] = inst_50364);

(statearr_50678[(45)] = inst_50365);

(statearr_50678[(46)] = inst_50366);

(statearr_50678[(8)] = inst_50372);

(statearr_50678[(9)] = inst_50373);

(statearr_50678[(10)] = inst_50374);

(statearr_50678[(11)] = inst_50375);

return statearr_50678;
})();
var statearr_50679_51045 = state_50563__$1;
(statearr_50679_51045[(2)] = null);

(statearr_50679_51045[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (35))){
var inst_50276 = (state_50563[(35)]);
var _ = (function (){var statearr_50680 = state_50563;
(statearr_50680[(4)] = cljs.core.rest((state_50563[(4)])));

return statearr_50680;
})();
var inst_50278 = (state_50563[(2)]);
var inst_50279 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_50276);
var ___$1 = (function (){var temp__5825__auto__ = (state_50563[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31632__auto__ = temp__5825__auto__;
throw e__31632__auto__;
} else {
return null;
}
})();
var state_50563__$1 = (function (){var statearr_50681 = state_50563;
(statearr_50681[(47)] = inst_50279);

return statearr_50681;
})();
var statearr_50682_51047 = state_50563__$1;
(statearr_50682_51047[(2)] = inst_50278);

(statearr_50682_51047[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (82))){
var inst_50514 = (state_50563[(19)]);
var inst_50517 = cljs.core.async.interop.p__GT_c(inst_50514);
var state_50563__$1 = state_50563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50563__$1,(85),inst_50517);
} else {
if((state_val_50564 === (76))){
var inst_50463 = (state_50563[(14)]);
var inst_50465 = cljs.core.chunked_seq_QMARK_(inst_50463);
var state_50563__$1 = state_50563;
if(inst_50465){
var statearr_50684_51048 = state_50563__$1;
(statearr_50684_51048[(1)] = (79));

} else {
var statearr_50685_51049 = state_50563__$1;
(statearr_50685_51049[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (19))){
var inst_50241 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
if(cljs.core.truth_(inst_50241)){
var statearr_50689_51050 = state_50563__$1;
(statearr_50689_51050[(1)] = (20));

} else {
var statearr_50690_51051 = state_50563__$1;
(statearr_50690_51051[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (57))){
var inst_50372 = (state_50563[(8)]);
var inst_50389 = (state_50563[(7)]);
var inst_50389__$1 = cljs.core.seq(inst_50372);
var state_50563__$1 = (function (){var statearr_50691 = state_50563;
(statearr_50691[(7)] = inst_50389__$1);

return statearr_50691;
})();
if(inst_50389__$1){
var statearr_50692_51062 = state_50563__$1;
(statearr_50692_51062[(1)] = (62));

} else {
var statearr_50693_51063 = state_50563__$1;
(statearr_50693_51063[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (68))){
var inst_50398 = (state_50563[(43)]);
var inst_50400 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50398);
var state_50563__$1 = state_50563;
var statearr_50694_51064 = state_50563__$1;
(statearr_50694_51064[(2)] = inst_50400);

(statearr_50694_51064[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (11))){
var inst_50222 = (state_50563[(2)]);
var inst_50223 = (function(){throw inst_50222})();
var state_50563__$1 = state_50563;
var statearr_50697_51071 = state_50563__$1;
(statearr_50697_51071[(2)] = inst_50223);

(statearr_50697_51071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (9))){
var inst_50221 = (state_50563[(36)]);
var _ = (function (){var statearr_50698 = state_50563;
(statearr_50698[(4)] = cljs.core.cons((12),(state_50563[(4)])));

return statearr_50698;
})();
var inst_50229 = (inst_50221 instanceof Promise);
var state_50563__$1 = state_50563;
if(cljs.core.truth_(inst_50229)){
var statearr_50701_51072 = state_50563__$1;
(statearr_50701_51072[(1)] = (13));

} else {
var statearr_50703_51073 = state_50563__$1;
(statearr_50703_51073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (5))){
var _ = (function (){var statearr_50704 = state_50563;
(statearr_50704[(4)] = cljs.core.rest((state_50563[(4)])));

return statearr_50704;
})();
var state_50563__$1 = state_50563;
var ex50696 = (state_50563__$1[(2)]);
var statearr_50705_51076 = state_50563__$1;
(statearr_50705_51076[(5)] = ex50696);


var statearr_50706_51077 = state_50563__$1;
(statearr_50706_51077[(1)] = (4));

(statearr_50706_51077[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (83))){
var inst_50514 = (state_50563[(19)]);
var state_50563__$1 = state_50563;
var statearr_50707_51084 = state_50563__$1;
(statearr_50707_51084[(2)] = inst_50514);

(statearr_50707_51084[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (14))){
var inst_50221 = (state_50563[(36)]);
var inst_50248 = inst_50221.init;
var inst_50249 = (inst_50248 == null);
var inst_50250 = cljs.core.not(inst_50249);
var state_50563__$1 = state_50563;
if(inst_50250){
var statearr_50708_51085 = state_50563__$1;
(statearr_50708_51085[(1)] = (23));

} else {
var statearr_50709_51086 = state_50563__$1;
(statearr_50709_51086[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (45))){
var inst_50323 = (state_50563[(38)]);
var inst_50333 = cljs.core.seq(inst_50323);
var inst_50334 = cljs.core.first(inst_50333);
var inst_50335 = cljs.core.next(inst_50333);
var inst_50336 = cljs.core.PersistentVector.EMPTY;
var inst_50337 = inst_50323;
var inst_50338 = inst_50336;
var state_50563__$1 = (function (){var statearr_50710 = state_50563;
(statearr_50710[(48)] = inst_50334);

(statearr_50710[(49)] = inst_50335);

(statearr_50710[(30)] = inst_50337);

(statearr_50710[(32)] = inst_50338);

return statearr_50710;
})();
var statearr_50711_51090 = state_50563__$1;
(statearr_50711_51090[(2)] = null);

(statearr_50711_51090[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (53))){
var inst_50353 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50712_51094 = state_50563__$1;
(statearr_50712_51094[(2)] = inst_50353);

(statearr_50712_51094[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (78))){
var inst_50509 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50713_51097 = state_50563__$1;
(statearr_50713_51097[(2)] = inst_50509);

(statearr_50713_51097[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (26))){
var inst_50255 = (state_50563[(21)]);
var inst_50256 = (state_50563[(40)]);
var inst_50255__$1 = (state_50563[(2)]);
var inst_50256__$1 = (inst_50255__$1 instanceof cljs.core.ExceptionInfo);
var state_50563__$1 = (function (){var statearr_50714 = state_50563;
(statearr_50714[(21)] = inst_50255__$1);

(statearr_50714[(40)] = inst_50256__$1);

return statearr_50714;
})();
if(cljs.core.truth_(inst_50256__$1)){
var statearr_50715_51098 = state_50563__$1;
(statearr_50715_51098[(1)] = (27));

} else {
var statearr_50716_51099 = state_50563__$1;
(statearr_50716_51099[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (16))){
var inst_50233 = (state_50563[(17)]);
var inst_50234 = (state_50563[(50)]);
var inst_50233__$1 = (state_50563[(2)]);
var inst_50234__$1 = (inst_50233__$1 instanceof cljs.core.ExceptionInfo);
var state_50563__$1 = (function (){var statearr_50717 = state_50563;
(statearr_50717[(17)] = inst_50233__$1);

(statearr_50717[(50)] = inst_50234__$1);

return statearr_50717;
})();
if(cljs.core.truth_(inst_50234__$1)){
var statearr_50718_51100 = state_50563__$1;
(statearr_50718_51100[(1)] = (17));

} else {
var statearr_50719_51101 = state_50563__$1;
(statearr_50719_51101[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (81))){
var inst_50506 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50720_51105 = state_50563__$1;
(statearr_50720_51105[(2)] = inst_50506);

(statearr_50720_51105[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (79))){
var inst_50463 = (state_50563[(14)]);
var inst_50467 = cljs.core.chunk_first(inst_50463);
var inst_50468 = cljs.core.chunk_rest(inst_50463);
var inst_50469 = cljs.core.count(inst_50467);
var inst_50421 = inst_50468;
var inst_50422 = inst_50467;
var inst_50423 = inst_50469;
var inst_50424 = (0);
var state_50563__$1 = (function (){var statearr_50721 = state_50563;
(statearr_50721[(13)] = inst_50421);

(statearr_50721[(24)] = inst_50422);

(statearr_50721[(25)] = inst_50423);

(statearr_50721[(26)] = inst_50424);

return statearr_50721;
})();
var statearr_50722_51111 = state_50563__$1;
(statearr_50722_51111[(2)] = null);

(statearr_50722_51111[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (38))){
var inst_50304 = (state_50563[(28)]);
var inst_50305 = (state_50563[(34)]);
var inst_50304__$1 = (state_50563[(2)]);
var inst_50305__$1 = (inst_50304__$1 instanceof cljs.core.ExceptionInfo);
var state_50563__$1 = (function (){var statearr_50723 = state_50563;
(statearr_50723[(28)] = inst_50304__$1);

(statearr_50723[(34)] = inst_50305__$1);

return statearr_50723;
})();
if(cljs.core.truth_(inst_50305__$1)){
var statearr_50724_51112 = state_50563__$1;
(statearr_50724_51112[(1)] = (39));

} else {
var statearr_50725_51113 = state_50563__$1;
(statearr_50725_51113[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (87))){
var inst_50520 = (state_50563[(27)]);
var state_50563__$1 = state_50563;
var statearr_50729_51114 = state_50563__$1;
(statearr_50729_51114[(2)] = inst_50520);

(statearr_50729_51114[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (30))){
var inst_50255 = (state_50563[(21)]);
var inst_50265 = (function(){throw inst_50255})();
var state_50563__$1 = state_50563;
var statearr_50730_51115 = state_50563__$1;
(statearr_50730_51115[(2)] = inst_50265);

(statearr_50730_51115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (73))){
var inst_50422 = (state_50563[(24)]);
var inst_50424 = (state_50563[(26)]);
var inst_50364 = (state_50563[(44)]);
var inst_50365 = (state_50563[(45)]);
var inst_50366 = (state_50563[(46)]);
var inst_50421 = (state_50563[(13)]);
var inst_50423 = (state_50563[(25)]);
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
var tmp50726 = inst_50421;
var tmp50727 = inst_50422;
var tmp50728 = inst_50423;
var inst_50421__$1 = tmp50726;
var inst_50422__$1 = tmp50727;
var inst_50423__$1 = tmp50728;
var inst_50424__$1 = inst_50460;
var state_50563__$1 = (function (){var statearr_50731 = state_50563;
(statearr_50731[(51)] = inst_50459);

(statearr_50731[(13)] = inst_50421__$1);

(statearr_50731[(24)] = inst_50422__$1);

(statearr_50731[(25)] = inst_50423__$1);

(statearr_50731[(26)] = inst_50424__$1);

return statearr_50731;
})();
var statearr_50732_51120 = state_50563__$1;
(statearr_50732_51120[(2)] = null);

(statearr_50732_51120[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (10))){
var inst_50276 = (state_50563[(2)]);
var state_50563__$1 = (function (){var statearr_50733 = state_50563;
(statearr_50733[(35)] = inst_50276);

return statearr_50733;
})();
var statearr_50734_51121 = state_50563__$1;
(statearr_50734_51121[(2)] = null);

(statearr_50734_51121[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (18))){
var inst_50234 = (state_50563[(50)]);
var state_50563__$1 = state_50563;
var statearr_50735_51122 = state_50563__$1;
(statearr_50735_51122[(2)] = inst_50234);

(statearr_50735_51122[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (52))){
var inst_50348 = (state_50563[(33)]);
var state_50563__$1 = state_50563;
var statearr_50736_51123 = state_50563__$1;
(statearr_50736_51123[(2)] = inst_50348);

(statearr_50736_51123[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (67))){
var inst_50407 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50737_51124 = state_50563__$1;
(statearr_50737_51124[(2)] = inst_50407);

(statearr_50737_51124[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (71))){
var inst_50424 = (state_50563[(26)]);
var inst_50423 = (state_50563[(25)]);
var inst_50426 = (inst_50424 < inst_50423);
var inst_50427 = inst_50426;
var state_50563__$1 = state_50563;
if(cljs.core.truth_(inst_50427)){
var statearr_50738_51125 = state_50563__$1;
(statearr_50738_51125[(1)] = (73));

} else {
var statearr_50739_51135 = state_50563__$1;
(statearr_50739_51135[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (42))){
var inst_50304 = (state_50563[(28)]);
var inst_50314 = (function(){throw inst_50304})();
var state_50563__$1 = state_50563;
var statearr_50741_51147 = state_50563__$1;
(statearr_50741_51147[(2)] = inst_50314);

(statearr_50741_51147[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (80))){
var inst_50463 = (state_50563[(14)]);
var inst_50364 = (state_50563[(44)]);
var inst_50365 = (state_50563[(45)]);
var inst_50366 = (state_50563[(46)]);
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
var inst_50483 = bb_web_ds_tools.runtime.webr.get_width(inst_50472);
var inst_50484 = (inst_50483 * inst_50366);
var inst_50485 = (inst_50484 | (0));
var inst_50486 = bb_web_ds_tools.runtime.webr.get_height(inst_50472);
var inst_50487 = (inst_50486 * inst_50366);
var inst_50488 = (inst_50487 | (0));
var inst_50489 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_50490 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50473),")"].join('');
var inst_50491 = [inst_50490,"cover"];
var inst_50492 = cljs.core.PersistentHashMap.fromArrays(inst_50489,inst_50491);
var inst_50493 = [inst_50485,inst_50488,inst_50492];
var inst_50494 = cljs.core.PersistentHashMap.fromArrays(inst_50482,inst_50493);
var inst_50495 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_50494];
var inst_50496 = (new cljs.core.PersistentVector(null,2,(5),inst_50481,inst_50495,null));
var inst_50497 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_50480,inst_50496];
var inst_50498 = (new cljs.core.PersistentVector(null,3,(5),inst_50474,inst_50497,null));
var inst_50499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50500 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_50498,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_50501 = (new cljs.core.PersistentVector(null,3,(5),inst_50499,inst_50500,null));
var inst_50502 = re_frame.core.dispatch(inst_50501);
var inst_50503 = cljs.core.next(inst_50463);
var inst_50421 = inst_50503;
var inst_50422 = null;
var inst_50423 = (0);
var inst_50424 = (0);
var state_50563__$1 = (function (){var statearr_50742 = state_50563;
(statearr_50742[(52)] = inst_50502);

(statearr_50742[(13)] = inst_50421);

(statearr_50742[(24)] = inst_50422);

(statearr_50742[(25)] = inst_50423);

(statearr_50742[(26)] = inst_50424);

return statearr_50742;
})();
var statearr_50743_51148 = state_50563__$1;
(statearr_50743_51148[(2)] = null);

(statearr_50743_51148[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (37))){
var _ = (function (){var statearr_50744 = state_50563;
(statearr_50744[(4)] = cljs.core.rest((state_50563[(4)])));

return statearr_50744;
})();
var state_50563__$1 = state_50563;
var ex50740 = (state_50563__$1[(2)]);
var statearr_50745_51149 = state_50563__$1;
(statearr_50745_51149[(5)] = ex50740);


var statearr_50746_51150 = state_50563__$1;
(statearr_50746_51150[(1)] = (36));

(statearr_50746_51150[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (63))){
var state_50563__$1 = state_50563;
var statearr_50747_51151 = state_50563__$1;
(statearr_50747_51151[(2)] = null);

(statearr_50747_51151[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (94))){
var inst_50321 = (state_50563[(18)]);
var inst_50536 = (state_50563[(2)]);
var inst_50537 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50321);
var state_50563__$1 = (function (){var statearr_50748 = state_50563;
(statearr_50748[(53)] = inst_50536);

return statearr_50748;
})();
var statearr_50749_51152 = state_50563__$1;
(statearr_50749_51152[(2)] = inst_50537);

(statearr_50749_51152[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (8))){
var inst_50558 = (state_50563[(2)]);
var _ = (function (){var statearr_50750 = state_50563;
(statearr_50750[(4)] = cljs.core.rest((state_50563[(4)])));

return statearr_50750;
})();
var state_50563__$1 = state_50563;
var statearr_50751_51154 = state_50563__$1;
(statearr_50751_51154[(2)] = inst_50558);

(statearr_50751_51154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (49))){
var inst_50355 = (state_50563[(2)]);
var state_50563__$1 = state_50563;
var statearr_50752_51155 = state_50563__$1;
(statearr_50752_51155[(2)] = inst_50355);

(statearr_50752_51155[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50564 === (84))){
var inst_50535 = (state_50563[(2)]);
var state_50563__$1 = (function (){var statearr_50753 = state_50563;
(statearr_50753[(29)] = inst_50535);

return statearr_50753;
})();
var statearr_50754_51156 = state_50563__$1;
(statearr_50754_51156[(2)] = null);

(statearr_50754_51156[(1)] = (92));


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
var statearr_50756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50756[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32400__auto__);

(statearr_50756[(1)] = (1));

return statearr_50756;
});
var bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1 = (function (state_50563){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_50563);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e50757){var ex__32403__auto__ = e50757;
var statearr_50758_51178 = state_50563;
(statearr_50758_51178[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_50563[(4)]))){
var statearr_50759_51179 = state_50563;
(statearr_50759_51179[(1)] = cljs.core.first((state_50563[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51180 = state_50563;
state_50563 = G__51180;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__ = function(state_50563){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1.call(this,state_50563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32400__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_50760 = f__32493__auto__();
(statearr_50760[(6)] = c__32492__auto__);

return statearr_50760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
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
