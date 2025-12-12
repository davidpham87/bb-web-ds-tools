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
var len__5749__auto___50759 = arguments.length;
var i__5750__auto___50760 = (0);
while(true){
if((i__5750__auto___50760 < len__5749__auto___50759)){
args__5755__auto__.push((arguments[i__5750__auto___50760]));

var G__50761 = (i__5750__auto___50760 + (1));
i__5750__auto___50760 = G__50761;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__49707,p__49708){
var map__49709 = p__49707;
var map__49709__$1 = cljs.core.__destructure_map(map__49709);
var value = map__49709__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__49710 = p__49708;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49710,(0),null);
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
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_49718){
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
var statearr_49722_50770 = state_49718;
(statearr_49722_50770[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49718[(4)]))){
var statearr_49723_50771 = state_49718;
(statearr_49723_50771[(1)] = cljs.core.first((state_49718[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50772 = state_49718;
state_49718 = G__50772;
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
var state__32468__auto__ = (function (){var statearr_49724 = f__32467__auto__();
(statearr_49724[(6)] = c__32466__auto__);

return statearr_49724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),viewer__$1], null));

}
}
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq49705){
var G__49706 = cljs.core.first(seq49705);
var seq49705__$1 = cljs.core.next(seq49705);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49706,seq49705__$1);
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
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_49793){
var state_val_49794 = (state_49793[(1)]);
if((state_val_49794 === (7))){
var inst_49789 = (state_49793[(2)]);
var state_49793__$1 = state_49793;
var statearr_49795_50773 = state_49793__$1;
(statearr_49795_50773[(2)] = inst_49789);

(statearr_49795_50773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (20))){
var inst_49769 = (state_49793[(7)]);
var inst_49773 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49769);
var state_49793__$1 = state_49793;
var statearr_49796_50775 = state_49793__$1;
(statearr_49796_50775[(2)] = inst_49773);

(statearr_49796_50775[(1)] = (21));


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
var statearr_49798_50779 = state_49793__$1;
(statearr_49798_50779[(1)] = (2));

} else {
var statearr_49799_50780 = state_49793__$1;
(statearr_49799_50780[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (24))){
var inst_49787 = (state_49793[(2)]);
var state_49793__$1 = state_49793;
var statearr_49800_50781 = state_49793__$1;
(statearr_49800_50781[(2)] = inst_49787);

(statearr_49800_50781[(1)] = (7));


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
var statearr_49801_50786 = state_49793__$1;
(statearr_49801_50786[(1)] = (16));

} else {
var statearr_49802_50787 = state_49793__$1;
(statearr_49802_50787[(1)] = (17));

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
var statearr_49804_50788 = state_49793__$1;
(statearr_49804_50788[(2)] = inst_49779);

(statearr_49804_50788[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (13))){
var inst_49755 = (state_49793[(10)]);
var inst_49758 = cljs.core.ex_data(inst_49755);
var inst_49759 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49758);
var inst_49760 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49759,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49793__$1 = state_49793;
var statearr_49805_50789 = state_49793__$1;
(statearr_49805_50789[(2)] = inst_49760);

(statearr_49805_50789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (22))){
var state_49793__$1 = state_49793;
var statearr_49806_50790 = state_49793__$1;
(statearr_49806_50790[(2)] = null);

(statearr_49806_50790[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (6))){
var state_49793__$1 = state_49793;
var statearr_49807_50791 = state_49793__$1;
(statearr_49807_50791[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (17))){
var inst_49755 = (state_49793[(10)]);
var state_49793__$1 = state_49793;
var statearr_49809_50794 = state_49793__$1;
(statearr_49809_50794[(2)] = inst_49755);

(statearr_49809_50794[(1)] = (18));


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
var statearr_49810_50795 = state_49793__$1;
(statearr_49810_50795[(1)] = (5));

} else {
var statearr_49811_50796 = state_49793__$1;
(statearr_49811_50796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (12))){
var inst_49755 = (state_49793[(10)]);
var inst_49756 = (state_49793[(11)]);
var inst_49755__$1 = (state_49793[(2)]);
var inst_49756__$1 = (inst_49755__$1 instanceof cljs.core.ExceptionInfo);
var state_49793__$1 = (function (){var statearr_49812 = state_49793;
(statearr_49812[(10)] = inst_49755__$1);

(statearr_49812[(11)] = inst_49756__$1);

return statearr_49812;
})();
if(cljs.core.truth_(inst_49756__$1)){
var statearr_49813_50797 = state_49793__$1;
(statearr_49813_50797[(1)] = (13));

} else {
var statearr_49814_50798 = state_49793__$1;
(statearr_49814_50798[(1)] = (14));

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
var statearr_49815_50800 = state_49793__$1;
(statearr_49815_50800[(2)] = inst_49735);

(statearr_49815_50800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (23))){
var state_49793__$1 = state_49793;
var statearr_49817_50805 = state_49793__$1;
(statearr_49817_50805[(2)] = null);

(statearr_49817_50805[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (19))){
var inst_49770 = (state_49793[(12)]);
var state_49793__$1 = state_49793;
var statearr_49818_50806 = state_49793__$1;
(statearr_49818_50806[(2)] = inst_49770);

(statearr_49818_50806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (11))){
var _ = (function (){var statearr_49819 = state_49793;
(statearr_49819[(4)] = cljs.core.rest((state_49793[(4)])));

return statearr_49819;
})();
var state_49793__$1 = state_49793;
var ex49816 = (state_49793__$1[(2)]);
var statearr_49820_50808 = state_49793__$1;
(statearr_49820_50808[(5)] = ex49816);


var statearr_49821_50810 = state_49793__$1;
(statearr_49821_50810[(1)] = (10));

(statearr_49821_50810[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (9))){
var inst_49782 = (state_49793[(2)]);
var state_49793__$1 = state_49793;
var statearr_49822_50811 = state_49793__$1;
(statearr_49822_50811[(2)] = inst_49782);

(statearr_49822_50811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (5))){
var state_49793__$1 = state_49793;
var statearr_49823_50812 = state_49793__$1;
(statearr_49823_50812[(2)] = null);

(statearr_49823_50812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (14))){
var inst_49756 = (state_49793[(11)]);
var state_49793__$1 = state_49793;
var statearr_49824_50813 = state_49793__$1;
(statearr_49824_50813[(2)] = inst_49756);

(statearr_49824_50813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (16))){
var inst_49755 = (state_49793[(10)]);
var inst_49765 = (function(){throw inst_49755})();
var state_49793__$1 = state_49793;
var statearr_49825_50814 = state_49793__$1;
(statearr_49825_50814[(2)] = inst_49765);

(statearr_49825_50814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (10))){
var inst_49725 = (state_49793[(8)]);
var inst_49742 = (state_49793[(2)]);
var inst_49743 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49744 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49725);
var inst_49745 = [inst_49744,"Error decoding message"];
var inst_49746 = cljs.core.PersistentHashMap.fromArrays(inst_49743,inst_49745);
var state_49793__$1 = (function (){var statearr_49826 = state_49793;
(statearr_49826[(13)] = inst_49742);

return statearr_49826;
})();
var statearr_49827_50817 = state_49793__$1;
(statearr_49827_50817[(2)] = inst_49746);

(statearr_49827_50817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (18))){
var inst_49769 = (state_49793[(7)]);
var inst_49770 = (state_49793[(12)]);
var inst_49768 = (state_49793[(2)]);
var inst_49769__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49768,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_49770__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_49769__$1);
var state_49793__$1 = (function (){var statearr_49828 = state_49793;
(statearr_49828[(7)] = inst_49769__$1);

(statearr_49828[(12)] = inst_49770__$1);

return statearr_49828;
})();
if(cljs.core.truth_(inst_49770__$1)){
var statearr_49829_50822 = state_49793__$1;
(statearr_49829_50822[(1)] = (19));

} else {
var statearr_49830_50823 = state_49793__$1;
(statearr_49830_50823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49794 === (8))){
var inst_49726 = (state_49793[(9)]);
var _ = (function (){var statearr_49831 = state_49793;
(statearr_49831[(4)] = cljs.core.cons((11),(state_49793[(4)])));

return statearr_49831;
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
var statearr_49832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49832[(0)] = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto__);

(statearr_49832[(1)] = (1));

return statearr_49832;
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
}catch (e49834){var ex__32399__auto__ = e49834;
var statearr_49835_50833 = state_49793;
(statearr_49835_50833[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49793[(4)]))){
var statearr_49836_50834 = state_49793;
(statearr_49836_50834[(1)] = cljs.core.first((state_49793[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50835 = state_49793;
state_49793 = G__50835;
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
var state__32468__auto__ = (function (){var statearr_49837 = f__32467__auto__();
(statearr_49837[(6)] = c__32466__auto__);

return statearr_49837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
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
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_49894){
var state_val_49895 = (state_49894[(1)]);
if((state_val_49895 === (7))){
var inst_49890 = (state_49894[(2)]);
var state_49894__$1 = state_49894;
var statearr_49896_50838 = state_49894__$1;
(statearr_49896_50838[(2)] = inst_49890);

(statearr_49896_50838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (1))){
var inst_49845 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_49894__$1 = state_49894;
if(cljs.core.truth_(inst_49845)){
var statearr_49897_50839 = state_49894__$1;
(statearr_49897_50839[(1)] = (2));

} else {
var statearr_49898_50840 = state_49894__$1;
(statearr_49898_50840[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (4))){
var inst_49892 = (state_49894[(2)]);
var state_49894__$1 = state_49894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49894__$1,inst_49892);
} else {
if((state_val_49895 === (15))){
var inst_49877 = (state_49894[(2)]);
var state_49894__$1 = state_49894;
if(cljs.core.truth_(inst_49877)){
var statearr_49899_50841 = state_49894__$1;
(statearr_49899_50841[(1)] = (16));

} else {
var statearr_49900_50842 = state_49894__$1;
(statearr_49900_50842[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (13))){
var inst_49869 = (state_49894[(7)]);
var inst_49872 = cljs.core.ex_data(inst_49869);
var inst_49873 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49872);
var inst_49874 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49873,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49894__$1 = state_49894;
var statearr_49901_50843 = state_49894__$1;
(statearr_49901_50843[(2)] = inst_49874);

(statearr_49901_50843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (6))){
var inst_49888 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_49894__$1 = state_49894;
var statearr_49902_50844 = state_49894__$1;
(statearr_49902_50844[(2)] = inst_49888);

(statearr_49902_50844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (17))){
var inst_49869 = (state_49894[(7)]);
var state_49894__$1 = state_49894;
var statearr_49903_50845 = state_49894__$1;
(statearr_49903_50845[(2)] = inst_49869);

(statearr_49903_50845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (3))){
var inst_49849 = (typeof WebR !== 'undefined');
var state_49894__$1 = state_49894;
if(cljs.core.truth_(inst_49849)){
var statearr_49904_50846 = state_49894__$1;
(statearr_49904_50846[(1)] = (5));

} else {
var statearr_49905_50847 = state_49894__$1;
(statearr_49905_50847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (12))){
var inst_49869 = (state_49894[(7)]);
var inst_49870 = (state_49894[(8)]);
var inst_49869__$1 = (state_49894[(2)]);
var inst_49870__$1 = (inst_49869__$1 instanceof cljs.core.ExceptionInfo);
var state_49894__$1 = (function (){var statearr_49911 = state_49894;
(statearr_49911[(7)] = inst_49869__$1);

(statearr_49911[(8)] = inst_49870__$1);

return statearr_49911;
})();
if(cljs.core.truth_(inst_49870__$1)){
var statearr_49912_50848 = state_49894__$1;
(statearr_49912_50848[(1)] = (13));

} else {
var statearr_49913_50849 = state_49894__$1;
(statearr_49913_50849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (2))){
var inst_49847 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_49894__$1 = state_49894;
var statearr_49914_50850 = state_49894__$1;
(statearr_49914_50850[(2)] = inst_49847);

(statearr_49914_50850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (11))){
var _ = (function (){var statearr_49915 = state_49894;
(statearr_49915[(4)] = cljs.core.rest((state_49894[(4)])));

return statearr_49915;
})();
var state_49894__$1 = state_49894;
var ex49906 = (state_49894__$1[(2)]);
var statearr_49916_50851 = state_49894__$1;
(statearr_49916_50851[(5)] = ex49906);


var statearr_49917_50852 = state_49894__$1;
(statearr_49917_50852[(1)] = (10));

(statearr_49917_50852[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (9))){
var inst_49886 = (state_49894[(2)]);
var state_49894__$1 = state_49894;
var statearr_49918_50853 = state_49894__$1;
(statearr_49918_50853[(2)] = inst_49886);

(statearr_49918_50853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (5))){
var state_49894__$1 = state_49894;
var statearr_49919_50854 = state_49894__$1;
(statearr_49919_50854[(2)] = null);

(statearr_49919_50854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (14))){
var inst_49870 = (state_49894[(8)]);
var state_49894__$1 = state_49894;
var statearr_49920_50855 = state_49894__$1;
(statearr_49920_50855[(2)] = inst_49870);

(statearr_49920_50855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (16))){
var inst_49869 = (state_49894[(7)]);
var inst_49879 = (function(){throw inst_49869})();
var state_49894__$1 = state_49894;
var statearr_49921_50856 = state_49894__$1;
(statearr_49921_50856[(2)] = inst_49879);

(statearr_49921_50856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (10))){
var inst_49851 = (state_49894[(2)]);
var inst_49852 = console.error("WebR Init Error:",inst_49851);
var inst_49853 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49851)].join('');
var inst_49854 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_49853) : on_error.call(null,inst_49853));
var state_49894__$1 = (function (){var statearr_49922 = state_49894;
(statearr_49922[(9)] = inst_49852);

return statearr_49922;
})();
var statearr_49923_50857 = state_49894__$1;
(statearr_49923_50857[(2)] = inst_49854);

(statearr_49923_50857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (18))){
var inst_49882 = (state_49894[(2)]);
var inst_49883 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_49924 = state_49894;
(statearr_49924[(4)] = cljs.core.rest((state_49894[(4)])));

return statearr_49924;
})();
var state_49894__$1 = (function (){var statearr_49925 = state_49894;
(statearr_49925[(10)] = inst_49882);

return statearr_49925;
})();
var statearr_49926_50858 = state_49894__$1;
(statearr_49926_50858[(2)] = inst_49883);

(statearr_49926_50858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49895 === (8))){
var _ = (function (){var statearr_49927 = state_49894;
(statearr_49927[(4)] = cljs.core.cons((11),(state_49894[(4)])));

return statearr_49927;
})();
var inst_49860 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_49861 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_49862 = cljs.core.PersistentHashMap.fromArrays(inst_49860,inst_49861);
var inst_49863 = cljs.core.clj__GT_js(inst_49862);
var inst_49864 = (new WebR(inst_49863));
var inst_49865 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_49864);
var inst_49866 = bb_web_ds_tools.runtime.webr.init_obj(inst_49864);
var inst_49867 = cljs.core.async.interop.p__GT_c(inst_49866);
var state_49894__$1 = (function (){var statearr_49928 = state_49894;
(statearr_49928[(11)] = inst_49865);

return statearr_49928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49894__$1,(12),inst_49867);
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
var statearr_49929 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49929[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__);

(statearr_49929[(1)] = (1));

return statearr_49929;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto____1 = (function (state_49894){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_49894);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e49930){var ex__32399__auto__ = e49930;
var statearr_49931_50859 = state_49894;
(statearr_49931_50859[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49894[(4)]))){
var statearr_49932_50860 = state_49894;
(statearr_49932_50860[(1)] = cljs.core.first((state_49894[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50861 = state_49894;
state_49894 = G__50861;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__ = function(state_49894){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto____1.call(this,state_49894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_49933 = f__32467__auto__();
(statearr_49933[(6)] = c__32466__auto__);

return statearr_49933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
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
var ds_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__49934){
var vec__49935 = p__49934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49935,(0),null);
var map__49938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49935,(1),null);
var map__49938__$1 = cljs.core.__destructure_map(map__49938);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49938__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49938__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
var len__5749__auto___50866 = arguments.length;
var i__5750__auto___50867 = (0);
while(true){
if((i__5750__auto___50867 < len__5749__auto___50866)){
args__5755__auto__.push((arguments[i__5750__auto___50867]));

var G__50868 = (i__5750__auto___50867 + (1));
i__5750__auto___50867 = G__50868;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic = (function (datasets,p__49941){
var vec__49942 = p__49941;
var keys_to_bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49942,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_49986){
var state_val_49987 = (state_49986[(1)]);
if((state_val_49987 === (7))){
var inst_49961 = (state_49986[(7)]);
var inst_49968 = cljs.core.ex_data(inst_49961);
var inst_49969 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49968);
var inst_49970 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49969,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49986__$1 = state_49986;
var statearr_49993_50870 = state_49986__$1;
(statearr_49993_50870[(2)] = inst_49970);

(statearr_49993_50870[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49987 === (1))){
var state_49986__$1 = state_49986;
var statearr_49994_50872 = state_49986__$1;
(statearr_49994_50872[(2)] = null);

(statearr_49994_50872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49987 === (4))){
var inst_49945 = (state_49986[(2)]);
var inst_49946 = console.error("Failed to bind datasets to R:",inst_49945);
var state_49986__$1 = state_49986;
var statearr_49995_50873 = state_49986__$1;
(statearr_49995_50873[(2)] = inst_49946);

(statearr_49995_50873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49987 === (6))){
var inst_49961 = (state_49986[(7)]);
var inst_49964 = (state_49986[(8)]);
var inst_49961__$1 = (state_49986[(2)]);
var inst_49964__$1 = (inst_49961__$1 instanceof cljs.core.ExceptionInfo);
var state_49986__$1 = (function (){var statearr_49996 = state_49986;
(statearr_49996[(7)] = inst_49961__$1);

(statearr_49996[(8)] = inst_49964__$1);

return statearr_49996;
})();
if(cljs.core.truth_(inst_49964__$1)){
var statearr_49997_50875 = state_49986__$1;
(statearr_49997_50875[(1)] = (7));

} else {
var statearr_49998_50876 = state_49986__$1;
(statearr_49998_50876[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49987 === (3))){
var inst_49984 = (state_49986[(2)]);
var state_49986__$1 = state_49986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49986__$1,inst_49984);
} else {
if((state_val_49987 === (12))){
var inst_49981 = (state_49986[(2)]);
var _ = (function (){var statearr_49999 = state_49986;
(statearr_49999[(4)] = cljs.core.rest((state_49986[(4)])));

return statearr_49999;
})();
var state_49986__$1 = state_49986;
var statearr_50000_50878 = state_49986__$1;
(statearr_50000_50878[(2)] = inst_49981);

(statearr_50000_50878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49987 === (2))){
var _ = (function (){var statearr_50001 = state_49986;
(statearr_50001[(4)] = cljs.core.cons((5),(state_49986[(4)])));

return statearr_50001;
})();
var inst_49953 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_49954 = bb_web_ds_tools.runtime.webr.datasets__GT_js(datasets,keys_to_bind);
var inst_49957 = bb_web_ds_tools.runtime.webr.get_global_env(inst_49953);
var inst_49958 = bb_web_ds_tools.runtime.webr.bind_r(inst_49957,"datasets",inst_49954);
var inst_49959 = cljs.core.async.interop.p__GT_c(inst_49958);
var state_49986__$1 = state_49986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49986__$1,(6),inst_49959);
} else {
if((state_val_49987 === (11))){
var inst_49961 = (state_49986[(7)]);
var state_49986__$1 = state_49986;
var statearr_50003_50880 = state_49986__$1;
(statearr_50003_50880[(2)] = inst_49961);

(statearr_50003_50880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49987 === (9))){
var inst_49974 = (state_49986[(2)]);
var state_49986__$1 = state_49986;
if(cljs.core.truth_(inst_49974)){
var statearr_50004_50881 = state_49986__$1;
(statearr_50004_50881[(1)] = (10));

} else {
var statearr_50005_50882 = state_49986__$1;
(statearr_50005_50882[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49987 === (5))){
var _ = (function (){var statearr_50006 = state_49986;
(statearr_50006[(4)] = cljs.core.rest((state_49986[(4)])));

return statearr_50006;
})();
var state_49986__$1 = state_49986;
var ex50002 = (state_49986__$1[(2)]);
var statearr_50007_50883 = state_49986__$1;
(statearr_50007_50883[(5)] = ex50002);


var statearr_50008_50884 = state_49986__$1;
(statearr_50008_50884[(1)] = (4));

(statearr_50008_50884[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49987 === (10))){
var inst_49961 = (state_49986[(7)]);
var inst_49978 = (function(){throw inst_49961})();
var state_49986__$1 = state_49986;
var statearr_50009_50886 = state_49986__$1;
(statearr_50009_50886[(2)] = inst_49978);

(statearr_50009_50886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49987 === (8))){
var inst_49964 = (state_49986[(8)]);
var state_49986__$1 = state_49986;
var statearr_50010_50887 = state_49986__$1;
(statearr_50010_50887[(2)] = inst_49964);

(statearr_50010_50887[(1)] = (9));


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
var statearr_50011 = [null,null,null,null,null,null,null,null,null];
(statearr_50011[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32396__auto__);

(statearr_50011[(1)] = (1));

return statearr_50011;
});
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1 = (function (state_49986){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_49986);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50012){var ex__32399__auto__ = e50012;
var statearr_50013_50888 = state_49986;
(statearr_50013_50888[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49986[(4)]))){
var statearr_50014_50889 = state_49986;
(statearr_50014_50889[(1)] = cljs.core.first((state_49986[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50890 = state_49986;
state_49986 = G__50890;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = function(state_49986){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1.call(this,state_49986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_50015 = f__32467__auto__();
(statearr_50015[(6)] = c__32466__auto__);

return statearr_50015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
} else {
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_50018){
var state_val_50019 = (state_50018[(1)]);
if((state_val_50019 === (1))){
var inst_50016 = console.warn("WebR not loaded, cannot bind datasets");
var state_50018__$1 = state_50018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50018__$1,inst_50016);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0 = (function (){
var statearr_50020 = [null,null,null,null,null,null,null];
(statearr_50020[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32396__auto__);

(statearr_50020[(1)] = (1));

return statearr_50020;
});
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1 = (function (state_50018){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_50018);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50021){var ex__32399__auto__ = e50021;
var statearr_50022_50899 = state_50018;
(statearr_50022_50899[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50018[(4)]))){
var statearr_50023_50900 = state_50018;
(statearr_50023_50900[(1)] = cljs.core.first((state_50018[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50901 = state_50018;
state_50018 = G__50901;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = function(state_50018){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1.call(this,state_50018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_50024 = f__32467__auto__();
(statearr_50024[(6)] = c__32466__auto__);

return statearr_50024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
}
}));

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$applyTo = (function (seq49939){
var G__49940 = cljs.core.first(seq49939);
var seq49939__$1 = cljs.core.next(seq49939);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49940,seq49939__$1);
}));

/**
 * Retrieves the 'datasets' variable from R, converts it back to CLJS,
 * and dispatches an update event if found.
 */
bb_web_ds_tools.runtime.webr.sync_datasets = (function bb_web_ds_tools$runtime$webr$sync_datasets(){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_50090){
var state_val_50091 = (state_50090[(1)]);
if((state_val_50091 === (7))){
var inst_50059 = (state_50090[(7)]);
var inst_50059__$1 = (state_50090[(2)]);
var state_50090__$1 = (function (){var statearr_50092 = state_50090;
(statearr_50092[(7)] = inst_50059__$1);

return statearr_50092;
})();
if(cljs.core.truth_(inst_50059__$1)){
var statearr_50093_50903 = state_50090__$1;
(statearr_50093_50903[(1)] = (17));

} else {
var statearr_50094_50904 = state_50090__$1;
(statearr_50094_50904[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (20))){
var inst_50064 = (state_50090[(8)]);
var inst_50065 = (state_50090[(9)]);
var inst_50064__$1 = (state_50090[(2)]);
var inst_50065__$1 = (inst_50064__$1 instanceof cljs.core.ExceptionInfo);
var state_50090__$1 = (function (){var statearr_50095 = state_50090;
(statearr_50095[(8)] = inst_50064__$1);

(statearr_50095[(9)] = inst_50065__$1);

return statearr_50095;
})();
if(cljs.core.truth_(inst_50065__$1)){
var statearr_50096_50905 = state_50090__$1;
(statearr_50096_50905[(1)] = (21));

} else {
var statearr_50097_50906 = state_50090__$1;
(statearr_50097_50906[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (1))){
var state_50090__$1 = state_50090;
var statearr_50098_50907 = state_50090__$1;
(statearr_50098_50907[(2)] = null);

(statearr_50098_50907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (24))){
var inst_50064 = (state_50090[(8)]);
var inst_50074 = (function(){throw inst_50064})();
var state_50090__$1 = state_50090;
var statearr_50099_50908 = state_50090__$1;
(statearr_50099_50908[(2)] = inst_50074);

(statearr_50099_50908[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (4))){
var inst_50025 = (state_50090[(2)]);
var inst_50026 = console.error("Failed to sync datasets from R:",inst_50025);
var state_50090__$1 = state_50090;
var statearr_50100_50909 = state_50090__$1;
(statearr_50100_50909[(2)] = inst_50026);

(statearr_50100_50909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (15))){
var inst_50043 = (state_50090[(10)]);
var state_50090__$1 = state_50090;
var statearr_50101_50910 = state_50090__$1;
(statearr_50101_50910[(2)] = inst_50043);

(statearr_50101_50910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (21))){
var inst_50064 = (state_50090[(8)]);
var inst_50067 = cljs.core.ex_data(inst_50064);
var inst_50068 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50067);
var inst_50069 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50068,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50090__$1 = state_50090;
var statearr_50102_50912 = state_50090__$1;
(statearr_50102_50912[(2)] = inst_50069);

(statearr_50102_50912[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (13))){
var inst_50051 = (state_50090[(2)]);
var state_50090__$1 = state_50090;
if(cljs.core.truth_(inst_50051)){
var statearr_50103_50913 = state_50090__$1;
(statearr_50103_50913[(1)] = (14));

} else {
var statearr_50104_50914 = state_50090__$1;
(statearr_50104_50914[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (22))){
var inst_50065 = (state_50090[(9)]);
var state_50090__$1 = state_50090;
var statearr_50105_50915 = state_50090__$1;
(statearr_50105_50915[(2)] = inst_50065);

(statearr_50105_50915[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (6))){
var inst_50032 = (state_50090[(11)]);
var _ = (function (){var statearr_50106 = state_50090;
(statearr_50106[(4)] = cljs.core.cons((9),(state_50090[(4)])));

return statearr_50106;
})();
var inst_50039 = bb_web_ds_tools.runtime.webr.get_global_env(inst_50032);
var inst_50040 = bb_web_ds_tools.runtime.webr.get_r(inst_50039,"datasets");
var inst_50041 = cljs.core.async.interop.p__GT_c(inst_50040);
var state_50090__$1 = state_50090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50090__$1,(10),inst_50041);
} else {
if((state_val_50091 === (25))){
var inst_50064 = (state_50090[(8)]);
var state_50090__$1 = state_50090;
var statearr_50107_50916 = state_50090__$1;
(statearr_50107_50916[(2)] = inst_50064);

(statearr_50107_50916[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (17))){
var inst_50059 = (state_50090[(7)]);
var inst_50061 = bb_web_ds_tools.runtime.webr.to_js(inst_50059);
var inst_50062 = cljs.core.async.interop.p__GT_c(inst_50061);
var state_50090__$1 = state_50090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50090__$1,(20),inst_50062);
} else {
if((state_val_50091 === (3))){
var inst_50088 = (state_50090[(2)]);
var state_50090__$1 = state_50090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50090__$1,inst_50088);
} else {
if((state_val_50091 === (12))){
var inst_50044 = (state_50090[(12)]);
var state_50090__$1 = state_50090;
var statearr_50108_50918 = state_50090__$1;
(statearr_50108_50918[(2)] = inst_50044);

(statearr_50108_50918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (2))){
var _ = (function (){var statearr_50109 = state_50090;
(statearr_50109[(4)] = cljs.core.cons((5),(state_50090[(4)])));

return statearr_50109;
})();
var inst_50032 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_50090__$1 = (function (){var statearr_50110 = state_50090;
(statearr_50110[(11)] = inst_50032);

return statearr_50110;
})();
var statearr_50111_50922 = state_50090__$1;
(statearr_50111_50922[(2)] = null);

(statearr_50111_50922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (23))){
var inst_50072 = (state_50090[(2)]);
var state_50090__$1 = state_50090;
if(cljs.core.truth_(inst_50072)){
var statearr_50112_50923 = state_50090__$1;
(statearr_50112_50923[(1)] = (24));

} else {
var statearr_50113_50924 = state_50090__$1;
(statearr_50113_50924[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (19))){
var inst_50085 = (state_50090[(2)]);
var _ = (function (){var statearr_50115 = state_50090;
(statearr_50115[(4)] = cljs.core.rest((state_50090[(4)])));

return statearr_50115;
})();
var state_50090__$1 = state_50090;
var statearr_50116_50925 = state_50090__$1;
(statearr_50116_50925[(2)] = inst_50085);

(statearr_50116_50925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (11))){
var inst_50043 = (state_50090[(10)]);
var inst_50046 = cljs.core.ex_data(inst_50043);
var inst_50047 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50046);
var inst_50048 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50047,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50090__$1 = state_50090;
var statearr_50118_50926 = state_50090__$1;
(statearr_50118_50926[(2)] = inst_50048);

(statearr_50118_50926[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (9))){
var _ = (function (){var statearr_50119 = state_50090;
(statearr_50119[(4)] = cljs.core.rest((state_50090[(4)])));

return statearr_50119;
})();
var state_50090__$1 = state_50090;
var ex50114 = (state_50090__$1[(2)]);
var statearr_50120_50927 = state_50090__$1;
(statearr_50120_50927[(5)] = ex50114);


var statearr_50121_50928 = state_50090__$1;
(statearr_50121_50928[(1)] = (8));

(statearr_50121_50928[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (5))){
var _ = (function (){var statearr_50122 = state_50090;
(statearr_50122[(4)] = cljs.core.rest((state_50090[(4)])));

return statearr_50122;
})();
var state_50090__$1 = state_50090;
var ex50117 = (state_50090__$1[(2)]);
var statearr_50124_50929 = state_50090__$1;
(statearr_50124_50929[(5)] = ex50117);


var statearr_50125_50930 = state_50090__$1;
(statearr_50125_50930[(1)] = (4));

(statearr_50125_50930[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (14))){
var inst_50043 = (state_50090[(10)]);
var inst_50053 = (function(){throw inst_50043})();
var state_50090__$1 = state_50090;
var statearr_50126_50931 = state_50090__$1;
(statearr_50126_50931[(2)] = inst_50053);

(statearr_50126_50931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (26))){
var inst_50077 = (state_50090[(2)]);
var inst_50078 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50077,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_50079 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50080 = [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets-from-r","bb-web-ds-tools.views.datasets/patch-datasets-from-r",-125752359),inst_50078];
var inst_50081 = (new cljs.core.PersistentVector(null,2,(5),inst_50079,inst_50080,null));
var inst_50082 = re_frame.core.dispatch(inst_50081);
var state_50090__$1 = state_50090;
var statearr_50128_50932 = state_50090__$1;
(statearr_50128_50932[(2)] = inst_50082);

(statearr_50128_50932[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (16))){
var inst_50056 = (state_50090[(2)]);
var _ = (function (){var statearr_50132 = state_50090;
(statearr_50132[(4)] = cljs.core.rest((state_50090[(4)])));

return statearr_50132;
})();
var state_50090__$1 = state_50090;
var statearr_50133_50933 = state_50090__$1;
(statearr_50133_50933[(2)] = inst_50056);

(statearr_50133_50933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (10))){
var inst_50043 = (state_50090[(10)]);
var inst_50044 = (state_50090[(12)]);
var inst_50043__$1 = (state_50090[(2)]);
var inst_50044__$1 = (inst_50043__$1 instanceof cljs.core.ExceptionInfo);
var state_50090__$1 = (function (){var statearr_50138 = state_50090;
(statearr_50138[(10)] = inst_50043__$1);

(statearr_50138[(12)] = inst_50044__$1);

return statearr_50138;
})();
if(cljs.core.truth_(inst_50044__$1)){
var statearr_50139_50934 = state_50090__$1;
(statearr_50139_50934[(1)] = (11));

} else {
var statearr_50140_50935 = state_50090__$1;
(statearr_50140_50935[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (18))){
var state_50090__$1 = state_50090;
var statearr_50141_50936 = state_50090__$1;
(statearr_50141_50936[(2)] = null);

(statearr_50141_50936[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50091 === (8))){
var inst_50033 = (state_50090[(2)]);
var state_50090__$1 = (function (){var statearr_50146 = state_50090;
(statearr_50146[(13)] = inst_50033);

return statearr_50146;
})();
var statearr_50147_50937 = state_50090__$1;
(statearr_50147_50937[(2)] = null);

(statearr_50147_50937[(1)] = (7));


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
var statearr_50151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50151[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__);

(statearr_50151[(1)] = (1));

return statearr_50151;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1 = (function (state_50090){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_50090);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50155){var ex__32399__auto__ = e50155;
var statearr_50156_50940 = state_50090;
(statearr_50156_50940[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50090[(4)]))){
var statearr_50157_50941 = state_50090;
(statearr_50157_50941[(1)] = cljs.core.first((state_50090[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50942 = state_50090;
state_50090 = G__50942;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__ = function(state_50090){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1.call(this,state_50090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_50164 = f__32467__auto__();
(statearr_50164[(6)] = c__32466__auto__);

return statearr_50164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
} else {
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_50167){
var state_val_50168 = (state_50167[(1)]);
if((state_val_50168 === (1))){
var inst_50165 = console.warn("WebR not loaded, cannot sync datasets");
var state_50167__$1 = state_50167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50167__$1,inst_50165);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____0 = (function (){
var statearr_50169 = [null,null,null,null,null,null,null];
(statearr_50169[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__);

(statearr_50169[(1)] = (1));

return statearr_50169;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1 = (function (state_50167){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_50167);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50170){var ex__32399__auto__ = e50170;
var statearr_50171_50947 = state_50167;
(statearr_50171_50947[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50167[(4)]))){
var statearr_50172_50948 = state_50167;
(statearr_50172_50948[(1)] = cljs.core.first((state_50167[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50949 = state_50167;
state_50167 = G__50949;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__ = function(state_50167){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1.call(this,state_50167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_50173 = f__32467__auto__();
(statearr_50173[(6)] = c__32466__auto__);

return statearr_50173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
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
var len__5749__auto___50951 = arguments.length;
var i__5750__auto___50952 = (0);
while(true){
if((i__5750__auto___50952 < len__5749__auto___50951)){
args__5755__auto__.push((arguments[i__5750__auto___50952]));

var G__50956 = (i__5750__auto___50952 + (1));
i__5750__auto___50952 = G__50956;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic = (function (code,p__50180){
var vec__50181 = p__50180;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50181,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_50559){
var state_val_50560 = (state_50559[(1)]);
if((state_val_50560 === (65))){
var inst_50384 = (state_50559[(7)]);
var inst_50388 = cljs.core.chunk_first(inst_50384);
var inst_50389 = cljs.core.chunk_rest(inst_50384);
var inst_50390 = cljs.core.count(inst_50388);
var inst_50367 = inst_50389;
var inst_50368 = inst_50388;
var inst_50369 = inst_50390;
var inst_50370 = (0);
var state_50559__$1 = (function (){var statearr_50561 = state_50559;
(statearr_50561[(8)] = inst_50367);

(statearr_50561[(9)] = inst_50368);

(statearr_50561[(10)] = inst_50369);

(statearr_50561[(11)] = inst_50370);

return statearr_50561;
})();
var statearr_50562_50957 = state_50559__$1;
(statearr_50562_50957[(2)] = null);

(statearr_50562_50957[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (70))){
var inst_50384 = (state_50559[(7)]);
var inst_50398 = (state_50559[(2)]);
var inst_50399 = cljs.core.next(inst_50384);
var inst_50367 = inst_50399;
var inst_50368 = null;
var inst_50369 = (0);
var inst_50370 = (0);
var state_50559__$1 = (function (){var statearr_50563 = state_50559;
(statearr_50563[(12)] = inst_50398);

(statearr_50563[(8)] = inst_50367);

(statearr_50563[(9)] = inst_50368);

(statearr_50563[(10)] = inst_50369);

(statearr_50563[(11)] = inst_50370);

return statearr_50563;
})();
var statearr_50564_50958 = state_50559__$1;
(statearr_50564_50958[(2)] = null);

(statearr_50564_50958[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (62))){
var inst_50384 = (state_50559[(7)]);
var inst_50386 = cljs.core.chunked_seq_QMARK_(inst_50384);
var state_50559__$1 = state_50559;
if(inst_50386){
var statearr_50565_50959 = state_50559__$1;
(statearr_50565_50959[(1)] = (65));

} else {
var statearr_50566_50960 = state_50559__$1;
(statearr_50566_50960[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (74))){
var inst_50416 = (state_50559[(13)]);
var inst_50458 = (state_50559[(14)]);
var inst_50458__$1 = cljs.core.seq(inst_50416);
var state_50559__$1 = (function (){var statearr_50567 = state_50559;
(statearr_50567[(14)] = inst_50458__$1);

return statearr_50567;
})();
if(inst_50458__$1){
var statearr_50568_50961 = state_50559__$1;
(statearr_50568_50961[(1)] = (76));

} else {
var statearr_50569_50962 = state_50559__$1;
(statearr_50569_50962[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (7))){
var inst_50551 = (new Error("Shelter not found on WebR instance"));
var inst_50552 = (function(){throw inst_50551})();
var state_50559__$1 = state_50559;
var statearr_50570_50963 = state_50559__$1;
(statearr_50570_50963[(2)] = inst_50552);

(statearr_50570_50963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (59))){
var inst_50375 = (state_50559[(15)]);
var inst_50377 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50375);
var state_50559__$1 = state_50559;
var statearr_50571_50964 = state_50559__$1;
(statearr_50571_50964[(2)] = inst_50377);

(statearr_50571_50964[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (86))){
var inst_50514 = (state_50559[(16)]);
var inst_50517 = cljs.core.ex_data(inst_50514);
var inst_50518 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50517);
var inst_50519 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50518,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50559__$1 = state_50559;
var statearr_50572_50965 = state_50559__$1;
(statearr_50572_50965[(2)] = inst_50519);

(statearr_50572_50965[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (20))){
var inst_50218 = (state_50559[(17)]);
var inst_50232 = (function(){throw inst_50218})();
var state_50559__$1 = state_50559;
var statearr_50573_50966 = state_50559__$1;
(statearr_50573_50966[(2)] = inst_50232);

(statearr_50573_50966[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (72))){
var inst_50316 = (state_50559[(18)]);
var inst_50509 = (state_50559[(19)]);
var inst_50508 = (state_50559[(2)]);
var inst_50509__$1 = bb_web_ds_tools.runtime.webr.to_js(inst_50316);
var inst_50510 = (inst_50509__$1 instanceof Promise);
var state_50559__$1 = (function (){var statearr_50574 = state_50559;
(statearr_50574[(20)] = inst_50508);

(statearr_50574[(19)] = inst_50509__$1);

return statearr_50574;
})();
if(cljs.core.truth_(inst_50510)){
var statearr_50575_50967 = state_50559__$1;
(statearr_50575_50967[(1)] = (82));

} else {
var statearr_50576_50968 = state_50559__$1;
(statearr_50576_50968[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (58))){
var inst_50407 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50577_50969 = state_50559__$1;
(statearr_50577_50969[(2)] = inst_50407);

(statearr_50577_50969[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (60))){
var state_50559__$1 = state_50559;
var statearr_50578_50970 = state_50559__$1;
(statearr_50578_50970[(2)] = null);

(statearr_50578_50970[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (27))){
var inst_50244 = (state_50559[(21)]);
var inst_50247 = cljs.core.ex_data(inst_50244);
var inst_50248 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50247);
var inst_50249 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50248,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50559__$1 = state_50559;
var statearr_50579_50971 = state_50559__$1;
(statearr_50579_50971[(2)] = inst_50249);

(statearr_50579_50971[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (1))){
var state_50559__$1 = state_50559;
var statearr_50580_50972 = state_50559__$1;
(statearr_50580_50972[(2)] = null);

(statearr_50580_50972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (69))){
var state_50559__$1 = state_50559;
var statearr_50581_50973 = state_50559__$1;
(statearr_50581_50973[(2)] = null);

(statearr_50581_50973[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (24))){
var state_50559__$1 = state_50559;
var statearr_50582_50974 = state_50559__$1;
(statearr_50582_50974[(2)] = null);

(statearr_50582_50974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (55))){
var inst_50315 = (state_50559[(22)]);
var inst_50409 = (state_50559[(2)]);
var inst_50414 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50315);
var inst_50415 = cljs.core.seq(inst_50414);
var inst_50416 = inst_50415;
var inst_50417 = null;
var inst_50418 = (0);
var inst_50419 = (0);
var state_50559__$1 = (function (){var statearr_50583 = state_50559;
(statearr_50583[(23)] = inst_50409);

(statearr_50583[(13)] = inst_50416);

(statearr_50583[(24)] = inst_50417);

(statearr_50583[(25)] = inst_50418);

(statearr_50583[(26)] = inst_50419);

return statearr_50583;
})();
var statearr_50584_50975 = state_50559__$1;
(statearr_50584_50975[(2)] = null);

(statearr_50584_50975[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (85))){
var inst_50514 = (state_50559[(16)]);
var inst_50515 = (state_50559[(27)]);
var inst_50514__$1 = (state_50559[(2)]);
var inst_50515__$1 = (inst_50514__$1 instanceof cljs.core.ExceptionInfo);
var state_50559__$1 = (function (){var statearr_50585 = state_50559;
(statearr_50585[(16)] = inst_50514__$1);

(statearr_50585[(27)] = inst_50515__$1);

return statearr_50585;
})();
if(cljs.core.truth_(inst_50515__$1)){
var statearr_50586_50976 = state_50559__$1;
(statearr_50586_50976[(1)] = (86));

} else {
var statearr_50587_50977 = state_50559__$1;
(statearr_50587_50977[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (39))){
var inst_50299 = (state_50559[(28)]);
var inst_50302 = cljs.core.ex_data(inst_50299);
var inst_50303 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50302);
var inst_50304 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50303,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50559__$1 = state_50559;
var statearr_50588_50978 = state_50559__$1;
(statearr_50588_50978[(2)] = inst_50304);

(statearr_50588_50978[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (88))){
var inst_50522 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
if(cljs.core.truth_(inst_50522)){
var statearr_50589_50979 = state_50559__$1;
(statearr_50589_50979[(1)] = (89));

} else {
var statearr_50590_50980 = state_50559__$1;
(statearr_50590_50980[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (46))){
var inst_50352 = cljs.core.PersistentVector.EMPTY;
var state_50559__$1 = state_50559;
var statearr_50591_50981 = state_50559__$1;
(statearr_50591_50981[(2)] = inst_50352);

(statearr_50591_50981[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (4))){
var inst_50184 = (state_50559[(2)]);
var inst_50185 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50186 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50184);
var inst_50187 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50186];
var inst_50188 = cljs.core.PersistentHashMap.fromArrays(inst_50185,inst_50187);
var inst_50189 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50188);
var state_50559__$1 = state_50559;
var statearr_50593_50983 = state_50559__$1;
(statearr_50593_50983[(2)] = inst_50189);

(statearr_50593_50983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (77))){
var state_50559__$1 = state_50559;
var statearr_50594_50984 = state_50559__$1;
(statearr_50594_50984[(2)] = null);

(statearr_50594_50984[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (95))){
var _ = (function (){var statearr_50595 = state_50559;
(statearr_50595[(4)] = cljs.core.rest((state_50559[(4)])));

return statearr_50595;
})();
var state_50559__$1 = state_50559;
var ex50592 = (state_50559__$1[(2)]);
var statearr_50596_50985 = state_50559__$1;
(statearr_50596_50985[(5)] = ex50592);


if((ex50592 instanceof Error)){
var statearr_50597_50986 = state_50559__$1;
(statearr_50597_50986[(1)] = (94));

(statearr_50597_50986[(5)] = null);

} else {
throw ex50592;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (54))){
var inst_50370 = (state_50559[(11)]);
var inst_50369 = (state_50559[(10)]);
var inst_50372 = (inst_50370 < inst_50369);
var inst_50373 = inst_50372;
var state_50559__$1 = state_50559;
if(cljs.core.truth_(inst_50373)){
var statearr_50598_50987 = state_50559__$1;
(statearr_50598_50987[(1)] = (56));

} else {
var statearr_50599_50988 = state_50559__$1;
(statearr_50599_50988[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (92))){
var inst_50530 = (state_50559[(29)]);
var _ = (function (){var statearr_50600 = state_50559;
(statearr_50600[(4)] = cljs.core.cons((95),(state_50559[(4)])));

return statearr_50600;
})();
var inst_50539 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50530,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_50601 = state_50559;
(statearr_50601[(4)] = cljs.core.rest((state_50559[(4)])));

return statearr_50601;
})();
var state_50559__$1 = state_50559;
var statearr_50602_50989 = state_50559__$1;
(statearr_50602_50989[(2)] = inst_50539);

(statearr_50602_50989[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (15))){
var inst_50262 = (state_50559[(2)]);
var _ = (function (){var statearr_50603 = state_50559;
(statearr_50603[(4)] = cljs.core.rest((state_50559[(4)])));

return statearr_50603;
})();
var state_50559__$1 = state_50559;
var statearr_50604_50990 = state_50559__$1;
(statearr_50604_50990[(2)] = inst_50262);

(statearr_50604_50990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (48))){
var inst_50332 = (state_50559[(30)]);
var inst_50338 = cljs.core.seq(inst_50332);
var inst_50339 = cljs.core.first(inst_50338);
var inst_50340 = cljs.core.next(inst_50338);
var state_50559__$1 = (function (){var statearr_50605 = state_50559;
(statearr_50605[(31)] = inst_50340);

return statearr_50605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50559__$1,(50),inst_50339);
} else {
if((state_val_50560 === (50))){
var inst_50333 = (state_50559[(32)]);
var inst_50340 = (state_50559[(31)]);
var inst_50342 = (state_50559[(2)]);
var inst_50343 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50333,inst_50342);
var state_50559__$1 = (function (){var statearr_50606 = state_50559;
(statearr_50606[(33)] = inst_50343);

return statearr_50606;
})();
if(cljs.core.truth_(inst_50340)){
var statearr_50607_50992 = state_50559__$1;
(statearr_50607_50992[(1)] = (51));

} else {
var statearr_50608_50993 = state_50559__$1;
(statearr_50608_50993[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (75))){
var inst_50506 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50609_50994 = state_50559__$1;
(statearr_50609_50994[(2)] = inst_50506);

(statearr_50609_50994[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (21))){
var inst_50218 = (state_50559[(17)]);
var state_50559__$1 = state_50559;
var statearr_50610_50995 = state_50559__$1;
(statearr_50610_50995[(2)] = inst_50218);

(statearr_50610_50995[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (31))){
var inst_50244 = (state_50559[(21)]);
var state_50559__$1 = state_50559;
var statearr_50611_50996 = state_50559__$1;
(statearr_50611_50996[(2)] = inst_50244);

(statearr_50611_50996[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (32))){
var inst_50257 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50612_50997 = state_50559__$1;
(statearr_50612_50997[(2)] = inst_50257);

(statearr_50612_50997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (40))){
var inst_50300 = (state_50559[(34)]);
var state_50559__$1 = state_50559;
var statearr_50613_50999 = state_50559__$1;
(statearr_50613_50999[(2)] = inst_50300);

(statearr_50613_50999[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (91))){
var inst_50527 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50614_51000 = state_50559__$1;
(statearr_50614_51000[(2)] = inst_50527);

(statearr_50614_51000[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (56))){
var inst_50368 = (state_50559[(9)]);
var inst_50370 = (state_50559[(11)]);
var inst_50375 = (state_50559[(15)]);
var inst_50375__$1 = cljs.core._nth(inst_50368,inst_50370);
var state_50559__$1 = (function (){var statearr_50615 = state_50559;
(statearr_50615[(15)] = inst_50375__$1);

return statearr_50615;
})();
if(cljs.core.truth_(inst_50375__$1)){
var statearr_50616_51001 = state_50559__$1;
(statearr_50616_51001[(1)] = (59));

} else {
var statearr_50617_51002 = state_50559__$1;
(statearr_50617_51002[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (33))){
var inst_50265 = (state_50559[(35)]);
var _ = (function (){var statearr_50618 = state_50559;
(statearr_50618[(4)] = cljs.core.cons((35),(state_50559[(4)])));

return statearr_50618;
})();
var ___$1 = (function (){var statearr_50619 = state_50559;
(statearr_50619[(4)] = cljs.core.cons((37),(state_50559[(4)])));

return statearr_50619;
})();
var inst_50292 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_50293 = [true];
var inst_50294 = cljs.core.PersistentHashMap.fromArrays(inst_50292,inst_50293);
var inst_50295 = cljs.core.clj__GT_js(inst_50294);
var inst_50296 = bb_web_ds_tools.runtime.webr.capture_r(inst_50265,code,inst_50295);
var inst_50297 = cljs.core.async.interop.p__GT_c(inst_50296);
var state_50559__$1 = state_50559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50559__$1,(38),inst_50297);
} else {
if((state_val_50560 === (13))){
var inst_50204 = (state_50559[(36)]);
var inst_50216 = cljs.core.async.interop.p__GT_c(inst_50204);
var state_50559__$1 = state_50559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50559__$1,(16),inst_50216);
} else {
if((state_val_50560 === (22))){
var inst_50235 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50620_51003 = state_50559__$1;
(statearr_50620_51003[(2)] = inst_50235);

(statearr_50620_51003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (90))){
var inst_50514 = (state_50559[(16)]);
var state_50559__$1 = state_50559;
var statearr_50621_51004 = state_50559__$1;
(statearr_50621_51004[(2)] = inst_50514);

(statearr_50621_51004[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (36))){
var inst_50274 = (state_50559[(2)]);
var inst_50275 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50276 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50274);
var inst_50277 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_50276];
var inst_50278 = cljs.core.PersistentHashMap.fromArrays(inst_50275,inst_50277);
var inst_50279 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50278);
var state_50559__$1 = state_50559;
var statearr_50622_51005 = state_50559__$1;
(statearr_50622_51005[(2)] = inst_50279);

(statearr_50622_51005[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (41))){
var inst_50307 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
if(cljs.core.truth_(inst_50307)){
var statearr_50623_51007 = state_50559__$1;
(statearr_50623_51007[(1)] = (42));

} else {
var statearr_50624_51008 = state_50559__$1;
(statearr_50624_51008[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (89))){
var inst_50514 = (state_50559[(16)]);
var inst_50524 = (function(){throw inst_50514})();
var state_50559__$1 = state_50559;
var statearr_50628_51010 = state_50559__$1;
(statearr_50628_51010[(2)] = inst_50524);

(statearr_50628_51010[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (43))){
var inst_50299 = (state_50559[(28)]);
var state_50559__$1 = state_50559;
var statearr_50629_51011 = state_50559__$1;
(statearr_50629_51011[(2)] = inst_50299);

(statearr_50629_51011[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (61))){
var inst_50370 = (state_50559[(11)]);
var inst_50367 = (state_50559[(8)]);
var inst_50368 = (state_50559[(9)]);
var inst_50369 = (state_50559[(10)]);
var inst_50380 = (state_50559[(2)]);
var inst_50381 = (inst_50370 + (1));
var tmp50625 = inst_50367;
var tmp50626 = inst_50369;
var tmp50627 = inst_50368;
var inst_50367__$1 = tmp50625;
var inst_50368__$1 = tmp50627;
var inst_50369__$1 = tmp50626;
var inst_50370__$1 = inst_50381;
var state_50559__$1 = (function (){var statearr_50630 = state_50559;
(statearr_50630[(37)] = inst_50380);

(statearr_50630[(8)] = inst_50367__$1);

(statearr_50630[(9)] = inst_50368__$1);

(statearr_50630[(10)] = inst_50369__$1);

(statearr_50630[(11)] = inst_50370__$1);

return statearr_50630;
})();
var statearr_50631_51012 = state_50559__$1;
(statearr_50631_51012[(2)] = null);

(statearr_50631_51012[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (29))){
var inst_50252 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
if(cljs.core.truth_(inst_50252)){
var statearr_50632_51013 = state_50559__$1;
(statearr_50632_51013[(1)] = (30));

} else {
var statearr_50633_51014 = state_50559__$1;
(statearr_50633_51014[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (44))){
var inst_50318 = (state_50559[(38)]);
var inst_50312 = (state_50559[(2)]);
var inst_50313 = bb_web_ds_tools.runtime.webr.get_result_props(inst_50312);
var inst_50314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50313,(0),null);
var inst_50315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50313,(1),null);
var inst_50316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50313,(2),null);
var inst_50317 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50314);
var inst_50318__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,inst_50317);
var inst_50319 = cljs.core.seq(inst_50318__$1);
var state_50559__$1 = (function (){var statearr_50634 = state_50559;
(statearr_50634[(22)] = inst_50315);

(statearr_50634[(18)] = inst_50316);

(statearr_50634[(38)] = inst_50318__$1);

return statearr_50634;
})();
if(inst_50319){
var statearr_50635_51015 = state_50559__$1;
(statearr_50635_51015[(1)] = (45));

} else {
var statearr_50636_51016 = state_50559__$1;
(statearr_50636_51016[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (93))){
var inst_50542 = (state_50559[(2)]);
var inst_50543 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_50544 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_50542];
var inst_50545 = cljs.core.PersistentHashMap.fromArrays(inst_50543,inst_50544);
var inst_50546 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50545);
var _ = (function (){var statearr_50637 = state_50559;
(statearr_50637[(4)] = cljs.core.rest((state_50559[(4)])));

return statearr_50637;
})();
var state_50559__$1 = state_50559;
var statearr_50638_51017 = state_50559__$1;
(statearr_50638_51017[(2)] = inst_50546);

(statearr_50638_51017[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (6))){
var inst_50202 = (state_50559[(39)]);
var inst_50204 = (new inst_50202());
var state_50559__$1 = (function (){var statearr_50639 = state_50559;
(statearr_50639[(36)] = inst_50204);

return statearr_50639;
})();
var statearr_50640_51019 = state_50559__$1;
(statearr_50640_51019[(2)] = null);

(statearr_50640_51019[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (28))){
var inst_50245 = (state_50559[(40)]);
var state_50559__$1 = state_50559;
var statearr_50642_51020 = state_50559__$1;
(statearr_50642_51020[(2)] = inst_50245);

(statearr_50642_51020[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (64))){
var inst_50405 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50643_51022 = state_50559__$1;
(statearr_50643_51022[(2)] = inst_50405);

(statearr_50643_51022[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (51))){
var inst_50340 = (state_50559[(31)]);
var inst_50343 = (state_50559[(33)]);
var inst_50332 = inst_50340;
var inst_50333 = inst_50343;
var state_50559__$1 = (function (){var statearr_50644 = state_50559;
(statearr_50644[(30)] = inst_50332);

(statearr_50644[(32)] = inst_50333);

return statearr_50644;
})();
var statearr_50645_51024 = state_50559__$1;
(statearr_50645_51024[(2)] = null);

(statearr_50645_51024[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (25))){
var inst_50204 = (state_50559[(36)]);
var inst_50260 = (state_50559[(2)]);
var state_50559__$1 = (function (){var statearr_50646 = state_50559;
(statearr_50646[(41)] = inst_50260);

return statearr_50646;
})();
var statearr_50647_51025 = state_50559__$1;
(statearr_50647_51025[(2)] = inst_50204);

(statearr_50647_51025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (34))){
var inst_50549 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50648_51026 = state_50559__$1;
(statearr_50648_51026[(2)] = inst_50549);

(statearr_50648_51026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (17))){
var inst_50218 = (state_50559[(17)]);
var inst_50221 = cljs.core.ex_data(inst_50218);
var inst_50222 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50221);
var inst_50223 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50222,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50559__$1 = state_50559;
var statearr_50650_51027 = state_50559__$1;
(statearr_50650_51027[(2)] = inst_50223);

(statearr_50650_51027[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (3))){
var inst_50557 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50559__$1,inst_50557);
} else {
if((state_val_50560 === (12))){
var _ = (function (){var statearr_50651 = state_50559;
(statearr_50651[(4)] = cljs.core.rest((state_50559[(4)])));

return statearr_50651;
})();
var state_50559__$1 = state_50559;
var ex50649 = (state_50559__$1[(2)]);
var statearr_50652_51029 = state_50559__$1;
(statearr_50652_51029[(5)] = ex50649);


var statearr_50653_51030 = state_50559__$1;
(statearr_50653_51030[(1)] = (11));

(statearr_50653_51030[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (2))){
var inst_50202 = (state_50559[(39)]);
var _ = (function (){var statearr_50654 = state_50559;
(statearr_50654[(4)] = cljs.core.cons((5),(state_50559[(4)])));

return statearr_50654;
})();
var inst_50195 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50196 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_50197 = cljs.core.PersistentHashMap.fromArrays(inst_50195,inst_50196);
var inst_50198 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50197);
var inst_50201 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_50202__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(inst_50201);
var state_50559__$1 = (function (){var statearr_50655 = state_50559;
(statearr_50655[(42)] = inst_50198);

(statearr_50655[(39)] = inst_50202__$1);

return statearr_50655;
})();
if(cljs.core.truth_(inst_50202__$1)){
var statearr_50656_51034 = state_50559__$1;
(statearr_50656_51034[(1)] = (6));

} else {
var statearr_50657_51035 = state_50559__$1;
(statearr_50657_51035[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (66))){
var inst_50384 = (state_50559[(7)]);
var inst_50393 = (state_50559[(43)]);
var inst_50393__$1 = cljs.core.first(inst_50384);
var state_50559__$1 = (function (){var statearr_50658 = state_50559;
(statearr_50658[(43)] = inst_50393__$1);

return statearr_50658;
})();
if(cljs.core.truth_(inst_50393__$1)){
var statearr_50659_51036 = state_50559__$1;
(statearr_50659_51036[(1)] = (68));

} else {
var statearr_50660_51037 = state_50559__$1;
(statearr_50660_51037[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (23))){
var inst_50204 = (state_50559[(36)]);
var inst_50241 = bb_web_ds_tools.runtime.webr.init_obj(inst_50204);
var inst_50242 = cljs.core.async.interop.p__GT_c(inst_50241);
var state_50559__$1 = state_50559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50559__$1,(26),inst_50242);
} else {
if((state_val_50560 === (47))){
var inst_50354 = (state_50559[(2)]);
var inst_50355 = [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),new cljs.core.Keyword(null,"container-height","container-height",-577782714),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110)];
var inst_50356 = [(720),(800),0.72];
var inst_50357 = cljs.core.PersistentHashMap.fromArrays(inst_50355,inst_50356);
var inst_50358 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"webr","webr",-966893065),inst_50357);
var inst_50359 = new cljs.core.Keyword(null,"container-width","container-width",-1461172864).cljs$core$IFn$_invoke$arity$1(inst_50358);
var inst_50360 = new cljs.core.Keyword(null,"container-height","container-height",-577782714).cljs$core$IFn$_invoke$arity$1(inst_50358);
var inst_50361 = new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110).cljs$core$IFn$_invoke$arity$1(inst_50358);
var inst_50366 = cljs.core.seq(inst_50354);
var inst_50367 = inst_50366;
var inst_50368 = null;
var inst_50369 = (0);
var inst_50370 = (0);
var state_50559__$1 = (function (){var statearr_50661 = state_50559;
(statearr_50661[(44)] = inst_50359);

(statearr_50661[(45)] = inst_50360);

(statearr_50661[(46)] = inst_50361);

(statearr_50661[(8)] = inst_50367);

(statearr_50661[(9)] = inst_50368);

(statearr_50661[(10)] = inst_50369);

(statearr_50661[(11)] = inst_50370);

return statearr_50661;
})();
var statearr_50662_51038 = state_50559__$1;
(statearr_50662_51038[(2)] = null);

(statearr_50662_51038[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (35))){
var inst_50265 = (state_50559[(35)]);
var _ = (function (){var statearr_50663 = state_50559;
(statearr_50663[(4)] = cljs.core.rest((state_50559[(4)])));

return statearr_50663;
})();
var inst_50270 = (state_50559[(2)]);
var inst_50271 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_50265);
var ___$1 = (function (){var temp__5825__auto__ = (state_50559[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31628__auto__ = temp__5825__auto__;
throw e__31628__auto__;
} else {
return null;
}
})();
var state_50559__$1 = (function (){var statearr_50664 = state_50559;
(statearr_50664[(47)] = inst_50271);

return statearr_50664;
})();
var statearr_50665_51039 = state_50559__$1;
(statearr_50665_51039[(2)] = inst_50270);

(statearr_50665_51039[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (82))){
var inst_50509 = (state_50559[(19)]);
var inst_50512 = cljs.core.async.interop.p__GT_c(inst_50509);
var state_50559__$1 = state_50559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50559__$1,(85),inst_50512);
} else {
if((state_val_50560 === (76))){
var inst_50458 = (state_50559[(14)]);
var inst_50460 = cljs.core.chunked_seq_QMARK_(inst_50458);
var state_50559__$1 = state_50559;
if(inst_50460){
var statearr_50666_51043 = state_50559__$1;
(statearr_50666_51043[(1)] = (79));

} else {
var statearr_50667_51044 = state_50559__$1;
(statearr_50667_51044[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (19))){
var inst_50226 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
if(cljs.core.truth_(inst_50226)){
var statearr_50668_51046 = state_50559__$1;
(statearr_50668_51046[(1)] = (20));

} else {
var statearr_50669_51047 = state_50559__$1;
(statearr_50669_51047[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (57))){
var inst_50367 = (state_50559[(8)]);
var inst_50384 = (state_50559[(7)]);
var inst_50384__$1 = cljs.core.seq(inst_50367);
var state_50559__$1 = (function (){var statearr_50670 = state_50559;
(statearr_50670[(7)] = inst_50384__$1);

return statearr_50670;
})();
if(inst_50384__$1){
var statearr_50671_51048 = state_50559__$1;
(statearr_50671_51048[(1)] = (62));

} else {
var statearr_50672_51049 = state_50559__$1;
(statearr_50672_51049[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (68))){
var inst_50393 = (state_50559[(43)]);
var inst_50395 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50393);
var state_50559__$1 = state_50559;
var statearr_50673_51050 = state_50559__$1;
(statearr_50673_51050[(2)] = inst_50395);

(statearr_50673_51050[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (11))){
var inst_50205 = (state_50559[(2)]);
var inst_50206 = (function(){throw inst_50205})();
var state_50559__$1 = state_50559;
var statearr_50675_51051 = state_50559__$1;
(statearr_50675_51051[(2)] = inst_50206);

(statearr_50675_51051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (9))){
var inst_50204 = (state_50559[(36)]);
var _ = (function (){var statearr_50676 = state_50559;
(statearr_50676[(4)] = cljs.core.cons((12),(state_50559[(4)])));

return statearr_50676;
})();
var inst_50212 = (inst_50204 instanceof Promise);
var state_50559__$1 = state_50559;
if(cljs.core.truth_(inst_50212)){
var statearr_50678_51052 = state_50559__$1;
(statearr_50678_51052[(1)] = (13));

} else {
var statearr_50679_51053 = state_50559__$1;
(statearr_50679_51053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (5))){
var _ = (function (){var statearr_50680 = state_50559;
(statearr_50680[(4)] = cljs.core.rest((state_50559[(4)])));

return statearr_50680;
})();
var state_50559__$1 = state_50559;
var ex50674 = (state_50559__$1[(2)]);
var statearr_50681_51054 = state_50559__$1;
(statearr_50681_51054[(5)] = ex50674);


var statearr_50683_51055 = state_50559__$1;
(statearr_50683_51055[(1)] = (4));

(statearr_50683_51055[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (83))){
var inst_50509 = (state_50559[(19)]);
var state_50559__$1 = state_50559;
var statearr_50691_51056 = state_50559__$1;
(statearr_50691_51056[(2)] = inst_50509);

(statearr_50691_51056[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (14))){
var inst_50204 = (state_50559[(36)]);
var inst_50237 = inst_50204.init;
var inst_50238 = (inst_50237 == null);
var inst_50239 = cljs.core.not(inst_50238);
var state_50559__$1 = state_50559;
if(inst_50239){
var statearr_50692_51058 = state_50559__$1;
(statearr_50692_51058[(1)] = (23));

} else {
var statearr_50693_51060 = state_50559__$1;
(statearr_50693_51060[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (45))){
var inst_50318 = (state_50559[(38)]);
var inst_50328 = cljs.core.seq(inst_50318);
var inst_50329 = cljs.core.first(inst_50328);
var inst_50330 = cljs.core.next(inst_50328);
var inst_50331 = cljs.core.PersistentVector.EMPTY;
var inst_50332 = inst_50318;
var inst_50333 = inst_50331;
var state_50559__$1 = (function (){var statearr_50694 = state_50559;
(statearr_50694[(48)] = inst_50329);

(statearr_50694[(49)] = inst_50330);

(statearr_50694[(30)] = inst_50332);

(statearr_50694[(32)] = inst_50333);

return statearr_50694;
})();
var statearr_50695_51063 = state_50559__$1;
(statearr_50695_51063[(2)] = null);

(statearr_50695_51063[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (53))){
var inst_50348 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50696_51064 = state_50559__$1;
(statearr_50696_51064[(2)] = inst_50348);

(statearr_50696_51064[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (78))){
var inst_50504 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50697_51065 = state_50559__$1;
(statearr_50697_51065[(2)] = inst_50504);

(statearr_50697_51065[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (26))){
var inst_50244 = (state_50559[(21)]);
var inst_50245 = (state_50559[(40)]);
var inst_50244__$1 = (state_50559[(2)]);
var inst_50245__$1 = (inst_50244__$1 instanceof cljs.core.ExceptionInfo);
var state_50559__$1 = (function (){var statearr_50698 = state_50559;
(statearr_50698[(21)] = inst_50244__$1);

(statearr_50698[(40)] = inst_50245__$1);

return statearr_50698;
})();
if(cljs.core.truth_(inst_50245__$1)){
var statearr_50699_51068 = state_50559__$1;
(statearr_50699_51068[(1)] = (27));

} else {
var statearr_50700_51069 = state_50559__$1;
(statearr_50700_51069[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (16))){
var inst_50218 = (state_50559[(17)]);
var inst_50219 = (state_50559[(50)]);
var inst_50218__$1 = (state_50559[(2)]);
var inst_50219__$1 = (inst_50218__$1 instanceof cljs.core.ExceptionInfo);
var state_50559__$1 = (function (){var statearr_50701 = state_50559;
(statearr_50701[(17)] = inst_50218__$1);

(statearr_50701[(50)] = inst_50219__$1);

return statearr_50701;
})();
if(cljs.core.truth_(inst_50219__$1)){
var statearr_50702_51070 = state_50559__$1;
(statearr_50702_51070[(1)] = (17));

} else {
var statearr_50703_51071 = state_50559__$1;
(statearr_50703_51071[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (81))){
var inst_50501 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50704_51072 = state_50559__$1;
(statearr_50704_51072[(2)] = inst_50501);

(statearr_50704_51072[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (79))){
var inst_50458 = (state_50559[(14)]);
var inst_50462 = cljs.core.chunk_first(inst_50458);
var inst_50463 = cljs.core.chunk_rest(inst_50458);
var inst_50464 = cljs.core.count(inst_50462);
var inst_50416 = inst_50463;
var inst_50417 = inst_50462;
var inst_50418 = inst_50464;
var inst_50419 = (0);
var state_50559__$1 = (function (){var statearr_50706 = state_50559;
(statearr_50706[(13)] = inst_50416);

(statearr_50706[(24)] = inst_50417);

(statearr_50706[(25)] = inst_50418);

(statearr_50706[(26)] = inst_50419);

return statearr_50706;
})();
var statearr_50708_51073 = state_50559__$1;
(statearr_50708_51073[(2)] = null);

(statearr_50708_51073[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (38))){
var inst_50299 = (state_50559[(28)]);
var inst_50300 = (state_50559[(34)]);
var inst_50299__$1 = (state_50559[(2)]);
var inst_50300__$1 = (inst_50299__$1 instanceof cljs.core.ExceptionInfo);
var state_50559__$1 = (function (){var statearr_50709 = state_50559;
(statearr_50709[(28)] = inst_50299__$1);

(statearr_50709[(34)] = inst_50300__$1);

return statearr_50709;
})();
if(cljs.core.truth_(inst_50300__$1)){
var statearr_50710_51078 = state_50559__$1;
(statearr_50710_51078[(1)] = (39));

} else {
var statearr_50711_51079 = state_50559__$1;
(statearr_50711_51079[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (87))){
var inst_50515 = (state_50559[(27)]);
var state_50559__$1 = state_50559;
var statearr_50715_51086 = state_50559__$1;
(statearr_50715_51086[(2)] = inst_50515);

(statearr_50715_51086[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (30))){
var inst_50244 = (state_50559[(21)]);
var inst_50254 = (function(){throw inst_50244})();
var state_50559__$1 = state_50559;
var statearr_50716_51087 = state_50559__$1;
(statearr_50716_51087[(2)] = inst_50254);

(statearr_50716_51087[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (73))){
var inst_50417 = (state_50559[(24)]);
var inst_50419 = (state_50559[(26)]);
var inst_50359 = (state_50559[(44)]);
var inst_50360 = (state_50559[(45)]);
var inst_50361 = (state_50559[(46)]);
var inst_50416 = (state_50559[(13)]);
var inst_50418 = (state_50559[(25)]);
var inst_50424 = cljs.core._nth(inst_50417,inst_50419);
var inst_50425 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_50424);
var inst_50426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50427 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50428 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_50429 = [inst_50359,inst_50360];
var inst_50430 = cljs.core.PersistentHashMap.fromArrays(inst_50428,inst_50429);
var inst_50431 = [inst_50430];
var inst_50432 = cljs.core.PersistentHashMap.fromArrays(inst_50427,inst_50431);
var inst_50433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50434 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50435 = bb_web_ds_tools.runtime.webr.get_width(inst_50424);
var inst_50436 = (inst_50435 * inst_50361);
var inst_50437 = (inst_50436 | (0));
var inst_50438 = bb_web_ds_tools.runtime.webr.get_height(inst_50424);
var inst_50439 = (inst_50438 * inst_50361);
var inst_50440 = (inst_50439 | (0));
var inst_50441 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_50442 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50425),")"].join('');
var inst_50443 = [inst_50442,"cover"];
var inst_50444 = cljs.core.PersistentHashMap.fromArrays(inst_50441,inst_50443);
var inst_50445 = [inst_50437,inst_50440,inst_50444];
var inst_50446 = cljs.core.PersistentHashMap.fromArrays(inst_50434,inst_50445);
var inst_50447 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_50446];
var inst_50448 = (new cljs.core.PersistentVector(null,2,(5),inst_50433,inst_50447,null));
var inst_50449 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_50432,inst_50448];
var inst_50450 = (new cljs.core.PersistentVector(null,3,(5),inst_50426,inst_50449,null));
var inst_50451 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50452 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_50450,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_50453 = (new cljs.core.PersistentVector(null,3,(5),inst_50451,inst_50452,null));
var inst_50454 = re_frame.core.dispatch(inst_50453);
var inst_50455 = (inst_50419 + (1));
var tmp50712 = inst_50417;
var tmp50713 = inst_50418;
var tmp50714 = inst_50416;
var inst_50416__$1 = tmp50714;
var inst_50417__$1 = tmp50712;
var inst_50418__$1 = tmp50713;
var inst_50419__$1 = inst_50455;
var state_50559__$1 = (function (){var statearr_50719 = state_50559;
(statearr_50719[(51)] = inst_50454);

(statearr_50719[(13)] = inst_50416__$1);

(statearr_50719[(24)] = inst_50417__$1);

(statearr_50719[(25)] = inst_50418__$1);

(statearr_50719[(26)] = inst_50419__$1);

return statearr_50719;
})();
var statearr_50720_51088 = state_50559__$1;
(statearr_50720_51088[(2)] = null);

(statearr_50720_51088[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (10))){
var inst_50265 = (state_50559[(2)]);
var state_50559__$1 = (function (){var statearr_50721 = state_50559;
(statearr_50721[(35)] = inst_50265);

return statearr_50721;
})();
var statearr_50722_51089 = state_50559__$1;
(statearr_50722_51089[(2)] = null);

(statearr_50722_51089[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (18))){
var inst_50219 = (state_50559[(50)]);
var state_50559__$1 = state_50559;
var statearr_50723_51090 = state_50559__$1;
(statearr_50723_51090[(2)] = inst_50219);

(statearr_50723_51090[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (52))){
var inst_50343 = (state_50559[(33)]);
var state_50559__$1 = state_50559;
var statearr_50724_51091 = state_50559__$1;
(statearr_50724_51091[(2)] = inst_50343);

(statearr_50724_51091[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (67))){
var inst_50402 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50725_51092 = state_50559__$1;
(statearr_50725_51092[(2)] = inst_50402);

(statearr_50725_51092[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (71))){
var inst_50419 = (state_50559[(26)]);
var inst_50418 = (state_50559[(25)]);
var inst_50421 = (inst_50419 < inst_50418);
var inst_50422 = inst_50421;
var state_50559__$1 = state_50559;
if(cljs.core.truth_(inst_50422)){
var statearr_50730_51093 = state_50559__$1;
(statearr_50730_51093[(1)] = (73));

} else {
var statearr_50731_51094 = state_50559__$1;
(statearr_50731_51094[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (42))){
var inst_50299 = (state_50559[(28)]);
var inst_50309 = (function(){throw inst_50299})();
var state_50559__$1 = state_50559;
var statearr_50733_51095 = state_50559__$1;
(statearr_50733_51095[(2)] = inst_50309);

(statearr_50733_51095[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (80))){
var inst_50458 = (state_50559[(14)]);
var inst_50359 = (state_50559[(44)]);
var inst_50360 = (state_50559[(45)]);
var inst_50361 = (state_50559[(46)]);
var inst_50467 = cljs.core.first(inst_50458);
var inst_50468 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_50467);
var inst_50469 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50470 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50471 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_50472 = [inst_50359,inst_50360];
var inst_50473 = cljs.core.PersistentHashMap.fromArrays(inst_50471,inst_50472);
var inst_50474 = [inst_50473];
var inst_50475 = cljs.core.PersistentHashMap.fromArrays(inst_50470,inst_50474);
var inst_50476 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50477 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50478 = bb_web_ds_tools.runtime.webr.get_width(inst_50467);
var inst_50479 = (inst_50478 * inst_50361);
var inst_50480 = (inst_50479 | (0));
var inst_50481 = bb_web_ds_tools.runtime.webr.get_height(inst_50467);
var inst_50482 = (inst_50481 * inst_50361);
var inst_50483 = (inst_50482 | (0));
var inst_50484 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_50485 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50468),")"].join('');
var inst_50486 = [inst_50485,"cover"];
var inst_50487 = cljs.core.PersistentHashMap.fromArrays(inst_50484,inst_50486);
var inst_50488 = [inst_50480,inst_50483,inst_50487];
var inst_50489 = cljs.core.PersistentHashMap.fromArrays(inst_50477,inst_50488);
var inst_50490 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_50489];
var inst_50491 = (new cljs.core.PersistentVector(null,2,(5),inst_50476,inst_50490,null));
var inst_50492 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_50475,inst_50491];
var inst_50493 = (new cljs.core.PersistentVector(null,3,(5),inst_50469,inst_50492,null));
var inst_50494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50495 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_50493,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_50496 = (new cljs.core.PersistentVector(null,3,(5),inst_50494,inst_50495,null));
var inst_50497 = re_frame.core.dispatch(inst_50496);
var inst_50498 = cljs.core.next(inst_50458);
var inst_50416 = inst_50498;
var inst_50417 = null;
var inst_50418 = (0);
var inst_50419 = (0);
var state_50559__$1 = (function (){var statearr_50738 = state_50559;
(statearr_50738[(52)] = inst_50497);

(statearr_50738[(13)] = inst_50416);

(statearr_50738[(24)] = inst_50417);

(statearr_50738[(25)] = inst_50418);

(statearr_50738[(26)] = inst_50419);

return statearr_50738;
})();
var statearr_50739_51112 = state_50559__$1;
(statearr_50739_51112[(2)] = null);

(statearr_50739_51112[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (37))){
var _ = (function (){var statearr_50740 = state_50559;
(statearr_50740[(4)] = cljs.core.rest((state_50559[(4)])));

return statearr_50740;
})();
var state_50559__$1 = state_50559;
var ex50732 = (state_50559__$1[(2)]);
var statearr_50741_51113 = state_50559__$1;
(statearr_50741_51113[(5)] = ex50732);


var statearr_50742_51114 = state_50559__$1;
(statearr_50742_51114[(1)] = (36));

(statearr_50742_51114[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (63))){
var state_50559__$1 = state_50559;
var statearr_50743_51115 = state_50559__$1;
(statearr_50743_51115[(2)] = null);

(statearr_50743_51115[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (94))){
var inst_50316 = (state_50559[(18)]);
var inst_50532 = (state_50559[(2)]);
var inst_50533 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50316);
var state_50559__$1 = (function (){var statearr_50744 = state_50559;
(statearr_50744[(53)] = inst_50532);

return statearr_50744;
})();
var statearr_50745_51116 = state_50559__$1;
(statearr_50745_51116[(2)] = inst_50533);

(statearr_50745_51116[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (8))){
var inst_50554 = (state_50559[(2)]);
var _ = (function (){var statearr_50746 = state_50559;
(statearr_50746[(4)] = cljs.core.rest((state_50559[(4)])));

return statearr_50746;
})();
var state_50559__$1 = state_50559;
var statearr_50747_51117 = state_50559__$1;
(statearr_50747_51117[(2)] = inst_50554);

(statearr_50747_51117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (49))){
var inst_50350 = (state_50559[(2)]);
var state_50559__$1 = state_50559;
var statearr_50748_51118 = state_50559__$1;
(statearr_50748_51118[(2)] = inst_50350);

(statearr_50748_51118[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50560 === (84))){
var inst_50530 = (state_50559[(2)]);
var state_50559__$1 = (function (){var statearr_50749 = state_50559;
(statearr_50749[(29)] = inst_50530);

return statearr_50749;
})();
var statearr_50750_51119 = state_50559__$1;
(statearr_50750_51119[(2)] = null);

(statearr_50750_51119[(1)] = (92));


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
var statearr_50751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50751[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32396__auto__);

(statearr_50751[(1)] = (1));

return statearr_50751;
});
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1 = (function (state_50559){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_50559);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50752){var ex__32399__auto__ = e50752;
var statearr_50753_51120 = state_50559;
(statearr_50753_51120[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50559[(4)]))){
var statearr_50754_51121 = state_50559;
(statearr_50754_51121[(1)] = cljs.core.first((state_50559[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51122 = state_50559;
state_50559 = G__51122;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = function(state_50559){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1.call(this,state_50559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_50755 = f__32467__auto__();
(statearr_50755[(6)] = c__32466__auto__);

return statearr_50755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
} else {
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null));
}
}));

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$applyTo = (function (seq50178){
var G__50179 = cljs.core.first(seq50178);
var seq50178__$1 = cljs.core.next(seq50178);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50179,seq50178__$1);
}));


//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
