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
var len__5749__auto___34006 = arguments.length;
var i__5750__auto___34007 = (0);
while(true){
if((i__5750__auto___34007 < len__5749__auto___34006)){
args__5755__auto__.push((arguments[i__5750__auto___34007]));

var G__34008 = (i__5750__auto___34007 + (1));
i__5750__auto___34007 = G__34008;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__32731,p__32732){
var map__32733 = p__32731;
var map__32733__$1 = cljs.core.__destructure_map(map__32733);
var value = map__32733__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32733__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__32734 = p__32732;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32734,(0),null);
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
if(cljs.core.truth_((function (){var G__32738 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__32737 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__32737.cljs$core$IFn$_invoke$arity$1 ? fexpr__32737.cljs$core$IFn$_invoke$arity$1(G__32738) : fexpr__32737.call(null,G__32738));
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
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_32742){
var state_val_32743 = (state_32742[(1)]);
if((state_val_32743 === (1))){
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32742__$1,(2),bb_web_ds_tools.runtime.webr.input_buffer,text);
} else {
if((state_val_32743 === (2))){
var inst_32740 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32742__$1,inst_32740);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0 = (function (){
var statearr_32744 = [null,null,null,null,null,null,null];
(statearr_32744[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24102__auto__);

(statearr_32744[(1)] = (1));

return statearr_32744;
});
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1 = (function (state_32742){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_32742);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e32745){var ex__24105__auto__ = e32745;
var statearr_32746_34009 = state_32742;
(statearr_32746_34009[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_32742[(4)]))){
var statearr_32747_34010 = state_32742;
(statearr_32747_34010[(1)] = cljs.core.first((state_32742[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34011 = state_32742;
state_32742 = G__34011;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = function(state_32742){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1.call(this,state_32742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_32748 = f__24149__auto__();
(statearr_32748[(6)] = c__24148__auto__);

return statearr_32748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),viewer__$1], null));

}
}
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq32729){
var G__32730 = cljs.core.first(seq32729);
var seq32729__$1 = cljs.core.next(seq32729);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32730,seq32729__$1);
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
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_32817){
var state_val_32818 = (state_32817[(1)]);
if((state_val_32818 === (7))){
var inst_32813 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32819_34014 = state_32817__$1;
(statearr_32819_34014[(2)] = inst_32813);

(statearr_32819_34014[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (20))){
var inst_32793 = (state_32817[(7)]);
var inst_32797 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32793);
var state_32817__$1 = state_32817;
var statearr_32820_34016 = state_32817__$1;
(statearr_32820_34016[(2)] = inst_32797);

(statearr_32820_34016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (1))){
var inst_32749 = (state_32817[(8)]);
var inst_32749__$1 = msg.type;
var inst_32750 = msg.data;
var inst_32751 = ["stderr",null,"stdout",null];
var inst_32752 = (new cljs.core.PersistentArrayMap(null,2,inst_32751,null));
var inst_32753 = (new cljs.core.PersistentHashSet(null,inst_32752,null));
var inst_32754 = (inst_32753.cljs$core$IFn$_invoke$arity$1 ? inst_32753.cljs$core$IFn$_invoke$arity$1(inst_32749__$1) : inst_32753.call(null,inst_32749__$1));
var state_32817__$1 = (function (){var statearr_32821 = state_32817;
(statearr_32821[(8)] = inst_32749__$1);

(statearr_32821[(9)] = inst_32750);

return statearr_32821;
})();
if(cljs.core.truth_(inst_32754)){
var statearr_32822_34017 = state_32817__$1;
(statearr_32822_34017[(1)] = (2));

} else {
var statearr_32823_34018 = state_32817__$1;
(statearr_32823_34018[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (24))){
var inst_32811 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32824_34019 = state_32817__$1;
(statearr_32824_34019[(2)] = inst_32811);

(statearr_32824_34019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (4))){
var inst_32815 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32817__$1,inst_32815);
} else {
if((state_val_32818 === (15))){
var inst_32787 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
if(cljs.core.truth_(inst_32787)){
var statearr_32825_34020 = state_32817__$1;
(statearr_32825_34020[(1)] = (16));

} else {
var statearr_32826_34021 = state_32817__$1;
(statearr_32826_34021[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (21))){
var inst_32749 = (state_32817[(8)]);
var inst_32799 = (state_32817[(2)]);
var inst_32800 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32801 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32749);
var inst_32802 = [inst_32801,inst_32799];
var inst_32803 = cljs.core.PersistentHashMap.fromArrays(inst_32800,inst_32802);
var _ = (function (){var statearr_32827 = state_32817;
(statearr_32827[(4)] = cljs.core.rest((state_32817[(4)])));

return statearr_32827;
})();
var state_32817__$1 = state_32817;
var statearr_32828_34022 = state_32817__$1;
(statearr_32828_34022[(2)] = inst_32803);

(statearr_32828_34022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (13))){
var inst_32779 = (state_32817[(10)]);
var inst_32782 = cljs.core.ex_data(inst_32779);
var inst_32783 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32782);
var inst_32784 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32783,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32817__$1 = state_32817;
var statearr_32829_34023 = state_32817__$1;
(statearr_32829_34023[(2)] = inst_32784);

(statearr_32829_34023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (22))){
var state_32817__$1 = state_32817;
var statearr_32830_34024 = state_32817__$1;
(statearr_32830_34024[(2)] = null);

(statearr_32830_34024[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (6))){
var state_32817__$1 = state_32817;
var statearr_32831_34025 = state_32817__$1;
(statearr_32831_34025[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (17))){
var inst_32779 = (state_32817[(10)]);
var state_32817__$1 = state_32817;
var statearr_32833_34026 = state_32817__$1;
(statearr_32833_34026[(2)] = inst_32779);

(statearr_32833_34026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (3))){
var inst_32749 = (state_32817[(8)]);
var inst_32761 = ["message",null,"warning",null];
var inst_32762 = (new cljs.core.PersistentArrayMap(null,2,inst_32761,null));
var inst_32763 = (new cljs.core.PersistentHashSet(null,inst_32762,null));
var inst_32764 = (inst_32763.cljs$core$IFn$_invoke$arity$1 ? inst_32763.cljs$core$IFn$_invoke$arity$1(inst_32749) : inst_32763.call(null,inst_32749));
var state_32817__$1 = state_32817;
if(cljs.core.truth_(inst_32764)){
var statearr_32834_34027 = state_32817__$1;
(statearr_32834_34027[(1)] = (5));

} else {
var statearr_32835_34028 = state_32817__$1;
(statearr_32835_34028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (12))){
var inst_32779 = (state_32817[(10)]);
var inst_32780 = (state_32817[(11)]);
var inst_32779__$1 = (state_32817[(2)]);
var inst_32780__$1 = (inst_32779__$1 instanceof cljs.core.ExceptionInfo);
var state_32817__$1 = (function (){var statearr_32836 = state_32817;
(statearr_32836[(10)] = inst_32779__$1);

(statearr_32836[(11)] = inst_32780__$1);

return statearr_32836;
})();
if(cljs.core.truth_(inst_32780__$1)){
var statearr_32837_34029 = state_32817__$1;
(statearr_32837_34029[(1)] = (13));

} else {
var statearr_32838_34030 = state_32817__$1;
(statearr_32838_34030[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (2))){
var inst_32749 = (state_32817[(8)]);
var inst_32750 = (state_32817[(9)]);
var inst_32756 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32757 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32749);
var inst_32758 = [inst_32757,inst_32750];
var inst_32759 = cljs.core.PersistentHashMap.fromArrays(inst_32756,inst_32758);
var state_32817__$1 = state_32817;
var statearr_32839_34031 = state_32817__$1;
(statearr_32839_34031[(2)] = inst_32759);

(statearr_32839_34031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (23))){
var state_32817__$1 = state_32817;
var statearr_32841_34032 = state_32817__$1;
(statearr_32841_34032[(2)] = null);

(statearr_32841_34032[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (19))){
var inst_32794 = (state_32817[(12)]);
var state_32817__$1 = state_32817;
var statearr_32842_34033 = state_32817__$1;
(statearr_32842_34033[(2)] = inst_32794);

(statearr_32842_34033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (11))){
var _ = (function (){var statearr_32843 = state_32817;
(statearr_32843[(4)] = cljs.core.rest((state_32817[(4)])));

return statearr_32843;
})();
var state_32817__$1 = state_32817;
var ex32840 = (state_32817__$1[(2)]);
var statearr_32844_34034 = state_32817__$1;
(statearr_32844_34034[(5)] = ex32840);


var statearr_32845_34035 = state_32817__$1;
(statearr_32845_34035[(1)] = (10));

(statearr_32845_34035[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (9))){
var inst_32806 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32846_34036 = state_32817__$1;
(statearr_32846_34036[(2)] = inst_32806);

(statearr_32846_34036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (5))){
var state_32817__$1 = state_32817;
var statearr_32847_34037 = state_32817__$1;
(statearr_32847_34037[(2)] = null);

(statearr_32847_34037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (14))){
var inst_32780 = (state_32817[(11)]);
var state_32817__$1 = state_32817;
var statearr_32848_34038 = state_32817__$1;
(statearr_32848_34038[(2)] = inst_32780);

(statearr_32848_34038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (16))){
var inst_32779 = (state_32817[(10)]);
var inst_32789 = (function(){throw inst_32779})();
var state_32817__$1 = state_32817;
var statearr_32849_34039 = state_32817__$1;
(statearr_32849_34039[(2)] = inst_32789);

(statearr_32849_34039[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (10))){
var inst_32749 = (state_32817[(8)]);
var inst_32766 = (state_32817[(2)]);
var inst_32767 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_32768 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_32749);
var inst_32769 = [inst_32768,"Error decoding message"];
var inst_32770 = cljs.core.PersistentHashMap.fromArrays(inst_32767,inst_32769);
var state_32817__$1 = (function (){var statearr_32850 = state_32817;
(statearr_32850[(13)] = inst_32766);

return statearr_32850;
})();
var statearr_32851_34040 = state_32817__$1;
(statearr_32851_34040[(2)] = inst_32770);

(statearr_32851_34040[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (18))){
var inst_32793 = (state_32817[(7)]);
var inst_32794 = (state_32817[(12)]);
var inst_32792 = (state_32817[(2)]);
var inst_32793__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_32792,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_32794__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_32793__$1);
var state_32817__$1 = (function (){var statearr_32852 = state_32817;
(statearr_32852[(7)] = inst_32793__$1);

(statearr_32852[(12)] = inst_32794__$1);

return statearr_32852;
})();
if(cljs.core.truth_(inst_32794__$1)){
var statearr_32853_34041 = state_32817__$1;
(statearr_32853_34041[(1)] = (19));

} else {
var statearr_32854_34042 = state_32817__$1;
(statearr_32854_34042[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (8))){
var inst_32750 = (state_32817[(9)]);
var _ = (function (){var statearr_32855 = state_32817;
(statearr_32855[(4)] = cljs.core.cons((11),(state_32817[(4)])));

return statearr_32855;
})();
var inst_32776 = bb_web_ds_tools.runtime.webr.to_js(inst_32750);
var inst_32777 = cljs.core.async.interop.p__GT_c(inst_32776);
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32817__$1,(12),inst_32777);
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
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto____0 = (function (){
var statearr_32856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32856[(0)] = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto__);

(statearr_32856[(1)] = (1));

return statearr_32856;
});
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto____1 = (function (state_32817){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_32817);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e32857){var ex__24105__auto__ = e32857;
var statearr_32858_34061 = state_32817;
(statearr_32858_34061[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_32817[(4)]))){
var statearr_32859_34062 = state_32817;
(statearr_32859_34062[(1)] = cljs.core.first((state_32817[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34063 = state_32817;
state_32817 = G__34063;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto__ = function(state_32817){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto____1.call(this,state_32817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_32860 = f__24149__auto__();
(statearr_32860[(6)] = c__24148__auto__);

return statearr_32860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
});
bb_web_ds_tools.runtime.webr.process_capture_msgs = (function bb_web_ds_tools$runtime$webr$process_capture_msgs(output){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_32900){
var state_val_32901 = (state_32900[(1)]);
if((state_val_32901 === (7))){
var inst_32877 = (state_32900[(7)]);
var inst_32884 = (state_32900[(8)]);
var inst_32886 = (state_32900[(2)]);
var inst_32887 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_32877,inst_32886);
var state_32900__$1 = (function (){var statearr_32902 = state_32900;
(statearr_32902[(9)] = inst_32887);

return statearr_32902;
})();
if(cljs.core.truth_(inst_32884)){
var statearr_32903_34074 = state_32900__$1;
(statearr_32903_34074[(1)] = (8));

} else {
var statearr_32904_34075 = state_32900__$1;
(statearr_32904_34075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (1))){
var inst_32862 = (state_32900[(10)]);
var inst_32861 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(output);
var inst_32862__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,inst_32861);
var inst_32863 = cljs.core.seq(inst_32862__$1);
var state_32900__$1 = (function (){var statearr_32905 = state_32900;
(statearr_32905[(10)] = inst_32862__$1);

return statearr_32905;
})();
if(inst_32863){
var statearr_32906_34078 = state_32900__$1;
(statearr_32906_34078[(1)] = (2));

} else {
var statearr_32907_34079 = state_32900__$1;
(statearr_32907_34079[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (4))){
var inst_32898 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32900__$1,inst_32898);
} else {
if((state_val_32901 === (6))){
var inst_32894 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32908_34080 = state_32900__$1;
(statearr_32908_34080[(2)] = inst_32894);

(statearr_32908_34080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (3))){
var inst_32896 = cljs.core.PersistentVector.EMPTY;
var state_32900__$1 = state_32900;
var statearr_32909_34082 = state_32900__$1;
(statearr_32909_34082[(2)] = inst_32896);

(statearr_32909_34082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (2))){
var inst_32862 = (state_32900[(10)]);
var inst_32872 = cljs.core.seq(inst_32862);
var inst_32873 = cljs.core.first(inst_32872);
var inst_32874 = cljs.core.next(inst_32872);
var inst_32875 = cljs.core.PersistentVector.EMPTY;
var inst_32876 = inst_32862;
var inst_32877 = inst_32875;
var state_32900__$1 = (function (){var statearr_32910 = state_32900;
(statearr_32910[(11)] = inst_32873);

(statearr_32910[(12)] = inst_32874);

(statearr_32910[(13)] = inst_32876);

(statearr_32910[(7)] = inst_32877);

return statearr_32910;
})();
var statearr_32911_34084 = state_32900__$1;
(statearr_32911_34084[(2)] = null);

(statearr_32911_34084[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (9))){
var inst_32887 = (state_32900[(9)]);
var state_32900__$1 = state_32900;
var statearr_32912_34088 = state_32900__$1;
(statearr_32912_34088[(2)] = inst_32887);

(statearr_32912_34088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (5))){
var inst_32876 = (state_32900[(13)]);
var inst_32882 = cljs.core.seq(inst_32876);
var inst_32883 = cljs.core.first(inst_32882);
var inst_32884 = cljs.core.next(inst_32882);
var state_32900__$1 = (function (){var statearr_32913 = state_32900;
(statearr_32913[(8)] = inst_32884);

return statearr_32913;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32900__$1,(7),inst_32883);
} else {
if((state_val_32901 === (10))){
var inst_32892 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32914_34121 = state_32900__$1;
(statearr_32914_34121[(2)] = inst_32892);

(statearr_32914_34121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (8))){
var inst_32884 = (state_32900[(8)]);
var inst_32887 = (state_32900[(9)]);
var inst_32876 = inst_32884;
var inst_32877 = inst_32887;
var state_32900__$1 = (function (){var statearr_32915 = state_32900;
(statearr_32915[(13)] = inst_32876);

(statearr_32915[(7)] = inst_32877);

return statearr_32915;
})();
var statearr_32916_34123 = state_32900__$1;
(statearr_32916_34123[(2)] = null);

(statearr_32916_34123[(1)] = (5));


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
var bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto____0 = (function (){
var statearr_32917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32917[(0)] = bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto__);

(statearr_32917[(1)] = (1));

return statearr_32917;
});
var bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto____1 = (function (state_32900){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_32900);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e32918){var ex__24105__auto__ = e32918;
var statearr_32919_34132 = state_32900;
(statearr_32919_34132[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_32900[(4)]))){
var statearr_32920_34133 = state_32900;
(statearr_32920_34133[(1)] = cljs.core.first((state_32900[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34135 = state_32900;
state_32900 = G__34135;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto__ = function(state_32900){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto____1.call(this,state_32900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$process_capture_msgs_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_32921 = f__24149__auto__();
(statearr_32921[(6)] = c__24148__auto__);

return statearr_32921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
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
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_32971){
var state_val_32972 = (state_32971[(1)]);
if((state_val_32972 === (7))){
var inst_32967 = (state_32971[(2)]);
var state_32971__$1 = state_32971;
var statearr_32973_34137 = state_32971__$1;
(statearr_32973_34137[(2)] = inst_32967);

(statearr_32973_34137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (1))){
var inst_32922 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_32971__$1 = state_32971;
if(cljs.core.truth_(inst_32922)){
var statearr_32974_34138 = state_32971__$1;
(statearr_32974_34138[(1)] = (2));

} else {
var statearr_32975_34139 = state_32971__$1;
(statearr_32975_34139[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (4))){
var inst_32969 = (state_32971[(2)]);
var state_32971__$1 = state_32971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32971__$1,inst_32969);
} else {
if((state_val_32972 === (15))){
var inst_32954 = (state_32971[(2)]);
var state_32971__$1 = state_32971;
if(cljs.core.truth_(inst_32954)){
var statearr_32976_34141 = state_32971__$1;
(statearr_32976_34141[(1)] = (16));

} else {
var statearr_32977_34142 = state_32971__$1;
(statearr_32977_34142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (13))){
var inst_32946 = (state_32971[(7)]);
var inst_32949 = cljs.core.ex_data(inst_32946);
var inst_32950 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32949);
var inst_32951 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32950,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32971__$1 = state_32971;
var statearr_32978_34144 = state_32971__$1;
(statearr_32978_34144[(2)] = inst_32951);

(statearr_32978_34144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (6))){
var inst_32965 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_32971__$1 = state_32971;
var statearr_32980_34145 = state_32971__$1;
(statearr_32980_34145[(2)] = inst_32965);

(statearr_32980_34145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (17))){
var inst_32946 = (state_32971[(7)]);
var state_32971__$1 = state_32971;
var statearr_32981_34180 = state_32971__$1;
(statearr_32981_34180[(2)] = inst_32946);

(statearr_32981_34180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (3))){
var inst_32926 = (typeof WebR !== 'undefined');
var state_32971__$1 = state_32971;
if(cljs.core.truth_(inst_32926)){
var statearr_32982_34181 = state_32971__$1;
(statearr_32982_34181[(1)] = (5));

} else {
var statearr_32983_34182 = state_32971__$1;
(statearr_32983_34182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (12))){
var inst_32946 = (state_32971[(7)]);
var inst_32947 = (state_32971[(8)]);
var inst_32946__$1 = (state_32971[(2)]);
var inst_32947__$1 = (inst_32946__$1 instanceof cljs.core.ExceptionInfo);
var state_32971__$1 = (function (){var statearr_32985 = state_32971;
(statearr_32985[(7)] = inst_32946__$1);

(statearr_32985[(8)] = inst_32947__$1);

return statearr_32985;
})();
if(cljs.core.truth_(inst_32947__$1)){
var statearr_32986_34183 = state_32971__$1;
(statearr_32986_34183[(1)] = (13));

} else {
var statearr_32987_34184 = state_32971__$1;
(statearr_32987_34184[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (2))){
var inst_32924 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_32971__$1 = state_32971;
var statearr_32992_34185 = state_32971__$1;
(statearr_32992_34185[(2)] = inst_32924);

(statearr_32992_34185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (11))){
var _ = (function (){var statearr_32993 = state_32971;
(statearr_32993[(4)] = cljs.core.rest((state_32971[(4)])));

return statearr_32993;
})();
var state_32971__$1 = state_32971;
var ex32984 = (state_32971__$1[(2)]);
var statearr_32994_34186 = state_32971__$1;
(statearr_32994_34186[(5)] = ex32984);


var statearr_32996_34187 = state_32971__$1;
(statearr_32996_34187[(1)] = (10));

(statearr_32996_34187[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (9))){
var inst_32963 = (state_32971[(2)]);
var state_32971__$1 = state_32971;
var statearr_33000_34190 = state_32971__$1;
(statearr_33000_34190[(2)] = inst_32963);

(statearr_33000_34190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (5))){
var state_32971__$1 = state_32971;
var statearr_33007_34193 = state_32971__$1;
(statearr_33007_34193[(2)] = null);

(statearr_33007_34193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (14))){
var inst_32947 = (state_32971[(8)]);
var state_32971__$1 = state_32971;
var statearr_33012_34196 = state_32971__$1;
(statearr_33012_34196[(2)] = inst_32947);

(statearr_33012_34196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (16))){
var inst_32946 = (state_32971[(7)]);
var inst_32956 = (function(){throw inst_32946})();
var state_32971__$1 = state_32971;
var statearr_33015_34274 = state_32971__$1;
(statearr_33015_34274[(2)] = inst_32956);

(statearr_33015_34274[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (10))){
var inst_32928 = (state_32971[(2)]);
var inst_32929 = console.error("WebR Init Error:",inst_32928);
var inst_32930 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32928)].join('');
var inst_32931 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_32930) : on_error.call(null,inst_32930));
var state_32971__$1 = (function (){var statearr_33020 = state_32971;
(statearr_33020[(9)] = inst_32929);

return statearr_33020;
})();
var statearr_33021_34294 = state_32971__$1;
(statearr_33021_34294[(2)] = inst_32931);

(statearr_33021_34294[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (18))){
var inst_32959 = (state_32971[(2)]);
var inst_32960 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_33022 = state_32971;
(statearr_33022[(4)] = cljs.core.rest((state_32971[(4)])));

return statearr_33022;
})();
var state_32971__$1 = (function (){var statearr_33023 = state_32971;
(statearr_33023[(10)] = inst_32959);

return statearr_33023;
})();
var statearr_33024_34296 = state_32971__$1;
(statearr_33024_34296[(2)] = inst_32960);

(statearr_33024_34296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (8))){
var _ = (function (){var statearr_33025 = state_32971;
(statearr_33025[(4)] = cljs.core.cons((11),(state_32971[(4)])));

return statearr_33025;
})();
var inst_32937 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_32938 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_32939 = cljs.core.PersistentHashMap.fromArrays(inst_32937,inst_32938);
var inst_32940 = cljs.core.clj__GT_js(inst_32939);
var inst_32941 = (new WebR(inst_32940));
var inst_32942 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_32941);
var inst_32943 = bb_web_ds_tools.runtime.webr.init_obj(inst_32941);
var inst_32944 = cljs.core.async.interop.p__GT_c(inst_32943);
var state_32971__$1 = (function (){var statearr_33026 = state_32971;
(statearr_33026[(11)] = inst_32942);

return statearr_33026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32971__$1,(12),inst_32944);
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
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto____0 = (function (){
var statearr_33027 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33027[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto__);

(statearr_33027[(1)] = (1));

return statearr_33027;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto____1 = (function (state_32971){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_32971);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33030){var ex__24105__auto__ = e33030;
var statearr_33031_34318 = state_32971;
(statearr_33031_34318[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_32971[(4)]))){
var statearr_33034_34319 = state_32971;
(statearr_33034_34319[(1)] = cljs.core.first((state_32971[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34320 = state_32971;
state_32971 = G__34320;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto__ = function(state_32971){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto____1.call(this,state_32971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33035 = f__24149__auto__();
(statearr_33035[(6)] = c__24148__auto__);

return statearr_33035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
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
var ds_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__33036){
var vec__33037 = p__33036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33037,(0),null);
var map__33040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33037,(1),null);
var map__33040__$1 = cljs.core.__destructure_map(map__33040);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33040__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33040__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
var len__5749__auto___34373 = arguments.length;
var i__5750__auto___34374 = (0);
while(true){
if((i__5750__auto___34374 < len__5749__auto___34373)){
args__5755__auto__.push((arguments[i__5750__auto___34374]));

var G__34388 = (i__5750__auto___34374 + (1));
i__5750__auto___34374 = G__34388;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic = (function (datasets,p__33044){
var vec__33045 = p__33044;
var keys_to_bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33045,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33080){
var state_val_33081 = (state_33080[(1)]);
if((state_val_33081 === (7))){
var inst_33062 = (state_33080[(7)]);
var inst_33065 = cljs.core.ex_data(inst_33062);
var inst_33066 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33065);
var inst_33067 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33066,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33080__$1 = state_33080;
var statearr_33082_34405 = state_33080__$1;
(statearr_33082_34405[(2)] = inst_33067);

(statearr_33082_34405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (1))){
var state_33080__$1 = state_33080;
var statearr_33085_34407 = state_33080__$1;
(statearr_33085_34407[(2)] = null);

(statearr_33085_34407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (4))){
var inst_33049 = (state_33080[(2)]);
var inst_33050 = console.error("Failed to bind datasets to R:",inst_33049);
var state_33080__$1 = state_33080;
var statearr_33090_34469 = state_33080__$1;
(statearr_33090_34469[(2)] = inst_33050);

(statearr_33090_34469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (6))){
var inst_33062 = (state_33080[(7)]);
var inst_33063 = (state_33080[(8)]);
var inst_33062__$1 = (state_33080[(2)]);
var inst_33063__$1 = (inst_33062__$1 instanceof cljs.core.ExceptionInfo);
var state_33080__$1 = (function (){var statearr_33091 = state_33080;
(statearr_33091[(7)] = inst_33062__$1);

(statearr_33091[(8)] = inst_33063__$1);

return statearr_33091;
})();
if(cljs.core.truth_(inst_33063__$1)){
var statearr_33092_34470 = state_33080__$1;
(statearr_33092_34470[(1)] = (7));

} else {
var statearr_33093_34472 = state_33080__$1;
(statearr_33093_34472[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (3))){
var inst_33078 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33080__$1,inst_33078);
} else {
if((state_val_33081 === (12))){
var inst_33075 = (state_33080[(2)]);
var _ = (function (){var statearr_33097 = state_33080;
(statearr_33097[(4)] = cljs.core.rest((state_33080[(4)])));

return statearr_33097;
})();
var state_33080__$1 = state_33080;
var statearr_33098_34476 = state_33080__$1;
(statearr_33098_34476[(2)] = inst_33075);

(statearr_33098_34476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (2))){
var _ = (function (){var statearr_33099 = state_33080;
(statearr_33099[(4)] = cljs.core.cons((5),(state_33080[(4)])));

return statearr_33099;
})();
var inst_33056 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_33057 = bb_web_ds_tools.runtime.webr.datasets__GT_js(datasets,keys_to_bind);
var inst_33058 = bb_web_ds_tools.runtime.webr.get_global_env(inst_33056);
var inst_33059 = bb_web_ds_tools.runtime.webr.bind_r(inst_33058,"datasets",inst_33057);
var inst_33060 = cljs.core.async.interop.p__GT_c(inst_33059);
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33080__$1,(6),inst_33060);
} else {
if((state_val_33081 === (11))){
var inst_33062 = (state_33080[(7)]);
var state_33080__$1 = state_33080;
var statearr_33101_34478 = state_33080__$1;
(statearr_33101_34478[(2)] = inst_33062);

(statearr_33101_34478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (9))){
var inst_33070 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
if(cljs.core.truth_(inst_33070)){
var statearr_33102_34481 = state_33080__$1;
(statearr_33102_34481[(1)] = (10));

} else {
var statearr_33103_34482 = state_33080__$1;
(statearr_33103_34482[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (5))){
var _ = (function (){var statearr_33104 = state_33080;
(statearr_33104[(4)] = cljs.core.rest((state_33080[(4)])));

return statearr_33104;
})();
var state_33080__$1 = state_33080;
var ex33100 = (state_33080__$1[(2)]);
var statearr_33105_34498 = state_33080__$1;
(statearr_33105_34498[(5)] = ex33100);


var statearr_33106_34499 = state_33080__$1;
(statearr_33106_34499[(1)] = (4));

(statearr_33106_34499[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (10))){
var inst_33062 = (state_33080[(7)]);
var inst_33072 = (function(){throw inst_33062})();
var state_33080__$1 = state_33080;
var statearr_33107_34519 = state_33080__$1;
(statearr_33107_34519[(2)] = inst_33072);

(statearr_33107_34519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (8))){
var inst_33063 = (state_33080[(8)]);
var state_33080__$1 = state_33080;
var statearr_33111_34520 = state_33080__$1;
(statearr_33111_34520[(2)] = inst_33063);

(statearr_33111_34520[(1)] = (9));


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
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0 = (function (){
var statearr_33112 = [null,null,null,null,null,null,null,null,null];
(statearr_33112[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24102__auto__);

(statearr_33112[(1)] = (1));

return statearr_33112;
});
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1 = (function (state_33080){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33080);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33113){var ex__24105__auto__ = e33113;
var statearr_33114_34537 = state_33080;
(statearr_33114_34537[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33080[(4)]))){
var statearr_33115_34538 = state_33080;
(statearr_33115_34538[(1)] = cljs.core.first((state_33080[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34540 = state_33080;
state_33080 = G__34540;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = function(state_33080){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1.call(this,state_33080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33116 = f__24149__auto__();
(statearr_33116[(6)] = c__24148__auto__);

return statearr_33116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
} else {
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33119){
var state_val_33120 = (state_33119[(1)]);
if((state_val_33120 === (1))){
var inst_33117 = console.warn("WebR not loaded, cannot bind datasets");
var state_33119__$1 = state_33119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33119__$1,inst_33117);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0 = (function (){
var statearr_33121 = [null,null,null,null,null,null,null];
(statearr_33121[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24102__auto__);

(statearr_33121[(1)] = (1));

return statearr_33121;
});
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1 = (function (state_33119){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33119);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33122){var ex__24105__auto__ = e33122;
var statearr_33123_34544 = state_33119;
(statearr_33123_34544[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33119[(4)]))){
var statearr_33124_34547 = state_33119;
(statearr_33124_34547[(1)] = cljs.core.first((state_33119[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34548 = state_33119;
state_33119 = G__34548;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = function(state_33119){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1.call(this,state_33119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33125 = f__24149__auto__();
(statearr_33125[(6)] = c__24148__auto__);

return statearr_33125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
}
}));

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$applyTo = (function (seq33041){
var G__33042 = cljs.core.first(seq33041);
var seq33041__$1 = cljs.core.next(seq33041);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33042,seq33041__$1);
}));

/**
 * Retrieves the 'datasets' variable from R, converts it back to CLJS,
 * and dispatches an update event if found.
 */
bb_web_ds_tools.runtime.webr.sync_datasets = (function bb_web_ds_tools$runtime$webr$sync_datasets(){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33191){
var state_val_33192 = (state_33191[(1)]);
if((state_val_33192 === (7))){
var inst_33160 = (state_33191[(7)]);
var inst_33160__$1 = (state_33191[(2)]);
var state_33191__$1 = (function (){var statearr_33193 = state_33191;
(statearr_33193[(7)] = inst_33160__$1);

return statearr_33193;
})();
if(cljs.core.truth_(inst_33160__$1)){
var statearr_33194_34552 = state_33191__$1;
(statearr_33194_34552[(1)] = (17));

} else {
var statearr_33195_34555 = state_33191__$1;
(statearr_33195_34555[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (20))){
var inst_33165 = (state_33191[(8)]);
var inst_33166 = (state_33191[(9)]);
var inst_33165__$1 = (state_33191[(2)]);
var inst_33166__$1 = (inst_33165__$1 instanceof cljs.core.ExceptionInfo);
var state_33191__$1 = (function (){var statearr_33196 = state_33191;
(statearr_33196[(8)] = inst_33165__$1);

(statearr_33196[(9)] = inst_33166__$1);

return statearr_33196;
})();
if(cljs.core.truth_(inst_33166__$1)){
var statearr_33197_34560 = state_33191__$1;
(statearr_33197_34560[(1)] = (21));

} else {
var statearr_33198_34561 = state_33191__$1;
(statearr_33198_34561[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (1))){
var state_33191__$1 = state_33191;
var statearr_33199_34565 = state_33191__$1;
(statearr_33199_34565[(2)] = null);

(statearr_33199_34565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (24))){
var inst_33165 = (state_33191[(8)]);
var inst_33175 = (function(){throw inst_33165})();
var state_33191__$1 = state_33191;
var statearr_33200_34571 = state_33191__$1;
(statearr_33200_34571[(2)] = inst_33175);

(statearr_33200_34571[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (4))){
var inst_33126 = (state_33191[(2)]);
var inst_33127 = console.error("Failed to sync datasets from R:",inst_33126);
var state_33191__$1 = state_33191;
var statearr_33201_34573 = state_33191__$1;
(statearr_33201_34573[(2)] = inst_33127);

(statearr_33201_34573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (15))){
var inst_33144 = (state_33191[(10)]);
var state_33191__$1 = state_33191;
var statearr_33202_34583 = state_33191__$1;
(statearr_33202_34583[(2)] = inst_33144);

(statearr_33202_34583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (21))){
var inst_33165 = (state_33191[(8)]);
var inst_33168 = cljs.core.ex_data(inst_33165);
var inst_33169 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33168);
var inst_33170 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33169,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33191__$1 = state_33191;
var statearr_33203_34585 = state_33191__$1;
(statearr_33203_34585[(2)] = inst_33170);

(statearr_33203_34585[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (13))){
var inst_33152 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
if(cljs.core.truth_(inst_33152)){
var statearr_33204_34597 = state_33191__$1;
(statearr_33204_34597[(1)] = (14));

} else {
var statearr_33205_34598 = state_33191__$1;
(statearr_33205_34598[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (22))){
var inst_33166 = (state_33191[(9)]);
var state_33191__$1 = state_33191;
var statearr_33206_34599 = state_33191__$1;
(statearr_33206_34599[(2)] = inst_33166);

(statearr_33206_34599[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (6))){
var inst_33133 = (state_33191[(11)]);
var _ = (function (){var statearr_33207 = state_33191;
(statearr_33207[(4)] = cljs.core.cons((9),(state_33191[(4)])));

return statearr_33207;
})();
var inst_33140 = bb_web_ds_tools.runtime.webr.get_global_env(inst_33133);
var inst_33141 = bb_web_ds_tools.runtime.webr.get_r(inst_33140,"datasets");
var inst_33142 = cljs.core.async.interop.p__GT_c(inst_33141);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33191__$1,(10),inst_33142);
} else {
if((state_val_33192 === (25))){
var inst_33165 = (state_33191[(8)]);
var state_33191__$1 = state_33191;
var statearr_33208_34614 = state_33191__$1;
(statearr_33208_34614[(2)] = inst_33165);

(statearr_33208_34614[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (17))){
var inst_33160 = (state_33191[(7)]);
var inst_33162 = bb_web_ds_tools.runtime.webr.to_js(inst_33160);
var inst_33163 = cljs.core.async.interop.p__GT_c(inst_33162);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33191__$1,(20),inst_33163);
} else {
if((state_val_33192 === (3))){
var inst_33189 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33191__$1,inst_33189);
} else {
if((state_val_33192 === (12))){
var inst_33145 = (state_33191[(12)]);
var state_33191__$1 = state_33191;
var statearr_33209_34616 = state_33191__$1;
(statearr_33209_34616[(2)] = inst_33145);

(statearr_33209_34616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (2))){
var _ = (function (){var statearr_33210 = state_33191;
(statearr_33210[(4)] = cljs.core.cons((5),(state_33191[(4)])));

return statearr_33210;
})();
var inst_33133 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_33191__$1 = (function (){var statearr_33211 = state_33191;
(statearr_33211[(11)] = inst_33133);

return statearr_33211;
})();
var statearr_33212_34632 = state_33191__$1;
(statearr_33212_34632[(2)] = null);

(statearr_33212_34632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (23))){
var inst_33173 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
if(cljs.core.truth_(inst_33173)){
var statearr_33213_34634 = state_33191__$1;
(statearr_33213_34634[(1)] = (24));

} else {
var statearr_33214_34635 = state_33191__$1;
(statearr_33214_34635[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (19))){
var inst_33186 = (state_33191[(2)]);
var _ = (function (){var statearr_33216 = state_33191;
(statearr_33216[(4)] = cljs.core.rest((state_33191[(4)])));

return statearr_33216;
})();
var state_33191__$1 = state_33191;
var statearr_33217_34643 = state_33191__$1;
(statearr_33217_34643[(2)] = inst_33186);

(statearr_33217_34643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (11))){
var inst_33144 = (state_33191[(10)]);
var inst_33147 = cljs.core.ex_data(inst_33144);
var inst_33148 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33147);
var inst_33149 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33148,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33191__$1 = state_33191;
var statearr_33219_34654 = state_33191__$1;
(statearr_33219_34654[(2)] = inst_33149);

(statearr_33219_34654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (9))){
var _ = (function (){var statearr_33220 = state_33191;
(statearr_33220[(4)] = cljs.core.rest((state_33191[(4)])));

return statearr_33220;
})();
var state_33191__$1 = state_33191;
var ex33215 = (state_33191__$1[(2)]);
var statearr_33221_34656 = state_33191__$1;
(statearr_33221_34656[(5)] = ex33215);


var statearr_33222_34657 = state_33191__$1;
(statearr_33222_34657[(1)] = (8));

(statearr_33222_34657[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (5))){
var _ = (function (){var statearr_33223 = state_33191;
(statearr_33223[(4)] = cljs.core.rest((state_33191[(4)])));

return statearr_33223;
})();
var state_33191__$1 = state_33191;
var ex33218 = (state_33191__$1[(2)]);
var statearr_33224_34677 = state_33191__$1;
(statearr_33224_34677[(5)] = ex33218);


var statearr_33225_34678 = state_33191__$1;
(statearr_33225_34678[(1)] = (4));

(statearr_33225_34678[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (14))){
var inst_33144 = (state_33191[(10)]);
var inst_33154 = (function(){throw inst_33144})();
var state_33191__$1 = state_33191;
var statearr_33226_34679 = state_33191__$1;
(statearr_33226_34679[(2)] = inst_33154);

(statearr_33226_34679[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (26))){
var inst_33178 = (state_33191[(2)]);
var inst_33179 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_33178,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_33180 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33181 = [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets-from-r","bb-web-ds-tools.views.datasets/patch-datasets-from-r",-125752359),inst_33179];
var inst_33182 = (new cljs.core.PersistentVector(null,2,(5),inst_33180,inst_33181,null));
var inst_33183 = re_frame.core.dispatch(inst_33182);
var state_33191__$1 = state_33191;
var statearr_33227_34690 = state_33191__$1;
(statearr_33227_34690[(2)] = inst_33183);

(statearr_33227_34690[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (16))){
var inst_33157 = (state_33191[(2)]);
var _ = (function (){var statearr_33228 = state_33191;
(statearr_33228[(4)] = cljs.core.rest((state_33191[(4)])));

return statearr_33228;
})();
var state_33191__$1 = state_33191;
var statearr_33229_34703 = state_33191__$1;
(statearr_33229_34703[(2)] = inst_33157);

(statearr_33229_34703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (10))){
var inst_33144 = (state_33191[(10)]);
var inst_33145 = (state_33191[(12)]);
var inst_33144__$1 = (state_33191[(2)]);
var inst_33145__$1 = (inst_33144__$1 instanceof cljs.core.ExceptionInfo);
var state_33191__$1 = (function (){var statearr_33230 = state_33191;
(statearr_33230[(10)] = inst_33144__$1);

(statearr_33230[(12)] = inst_33145__$1);

return statearr_33230;
})();
if(cljs.core.truth_(inst_33145__$1)){
var statearr_33231_34705 = state_33191__$1;
(statearr_33231_34705[(1)] = (11));

} else {
var statearr_33232_34706 = state_33191__$1;
(statearr_33232_34706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (18))){
var state_33191__$1 = state_33191;
var statearr_33233_34707 = state_33191__$1;
(statearr_33233_34707[(2)] = null);

(statearr_33233_34707[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (8))){
var inst_33134 = (state_33191[(2)]);
var state_33191__$1 = (function (){var statearr_33234 = state_33191;
(statearr_33234[(13)] = inst_33134);

return statearr_33234;
})();
var statearr_33235_34709 = state_33191__$1;
(statearr_33235_34709[(2)] = null);

(statearr_33235_34709[(1)] = (7));


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
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____0 = (function (){
var statearr_33236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33236[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__);

(statearr_33236[(1)] = (1));

return statearr_33236;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1 = (function (state_33191){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33191);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33237){var ex__24105__auto__ = e33237;
var statearr_33238_34732 = state_33191;
(statearr_33238_34732[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33191[(4)]))){
var statearr_33239_34734 = state_33191;
(statearr_33239_34734[(1)] = cljs.core.first((state_33191[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34735 = state_33191;
state_33191 = G__34735;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__ = function(state_33191){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1.call(this,state_33191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33240 = f__24149__auto__();
(statearr_33240[(6)] = c__24148__auto__);

return statearr_33240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
} else {
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33243){
var state_val_33244 = (state_33243[(1)]);
if((state_val_33244 === (1))){
var inst_33241 = console.warn("WebR not loaded, cannot sync datasets");
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33243__$1,inst_33241);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____0 = (function (){
var statearr_33245 = [null,null,null,null,null,null,null];
(statearr_33245[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__);

(statearr_33245[(1)] = (1));

return statearr_33245;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1 = (function (state_33243){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33243);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33246){var ex__24105__auto__ = e33246;
var statearr_33247_34761 = state_33243;
(statearr_33247_34761[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33243[(4)]))){
var statearr_33248_34762 = state_33243;
(statearr_33248_34762[(1)] = cljs.core.first((state_33243[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34764 = state_33243;
state_33243 = G__34764;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__ = function(state_33243){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1.call(this,state_33243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33249 = f__24149__auto__();
(statearr_33249[(6)] = c__24148__auto__);

return statearr_33249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
}
});
bb_web_ds_tools.runtime.webr.get_error_details = (function bb_web_ds_tools$runtime$webr$get_error_details(e){
if(((cljs.core.object_QMARK_(e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.message,"Promise error")))){
var clj_e = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(cljs.core.not_empty(clj_e))){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33250_34766 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33251_34767 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33252_34768 = true;
var _STAR_print_fn_STAR__temp_val__33253_34769 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33252_34768);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33253_34769);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clj_e);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33251_34767);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33250_34766);
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
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33316){
var state_val_33317 = (state_33316[(1)]);
if((state_val_33317 === (7))){
var inst_33265 = (state_33316[(7)]);
var inst_33268 = cljs.core.ex_data(inst_33265);
var inst_33269 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33268);
var inst_33270 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33269,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33316__$1 = state_33316;
var statearr_33318_34797 = state_33316__$1;
(statearr_33318_34797[(2)] = inst_33270);

(statearr_33318_34797[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (20))){
var inst_33309 = (state_33316[(2)]);
var inst_33310 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),inst_33309);
var inst_33311 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",inst_33310);
var _ = (function (){var statearr_33319 = state_33316;
(statearr_33319[(4)] = cljs.core.rest((state_33316[(4)])));

return statearr_33319;
})();
var state_33316__$1 = state_33316;
var statearr_33320_34798 = state_33316__$1;
(statearr_33320_34798[(2)] = inst_33311);

(statearr_33320_34798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (1))){
var state_33316__$1 = state_33316;
var statearr_33321_34799 = state_33316__$1;
(statearr_33321_34799[(2)] = null);

(statearr_33321_34799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (4))){
var inst_33254 = (state_33316[(2)]);
var state_33316__$1 = (function (){var statearr_33322 = state_33316;
(statearr_33322[(8)] = inst_33254);

return statearr_33322;
})();
var statearr_33323_34813 = state_33316__$1;
(statearr_33323_34813[(2)] = null);

(statearr_33323_34813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (15))){
var inst_33290 = (state_33316[(9)]);
var state_33316__$1 = state_33316;
var statearr_33324_34830 = state_33316__$1;
(statearr_33324_34830[(2)] = inst_33290);

(statearr_33324_34830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (13))){
var inst_33289 = (state_33316[(10)]);
var inst_33290 = (state_33316[(9)]);
var inst_33289__$1 = (state_33316[(2)]);
var inst_33290__$1 = (inst_33289__$1 instanceof cljs.core.ExceptionInfo);
var state_33316__$1 = (function (){var statearr_33325 = state_33316;
(statearr_33325[(10)] = inst_33289__$1);

(statearr_33325[(9)] = inst_33290__$1);

return statearr_33325;
})();
if(cljs.core.truth_(inst_33290__$1)){
var statearr_33326_34831 = state_33316__$1;
(statearr_33326_34831[(1)] = (14));

} else {
var statearr_33327_34832 = state_33316__$1;
(statearr_33327_34832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (6))){
var inst_33265 = (state_33316[(7)]);
var inst_33266 = (state_33316[(11)]);
var inst_33265__$1 = (state_33316[(2)]);
var inst_33266__$1 = (inst_33265__$1 instanceof cljs.core.ExceptionInfo);
var state_33316__$1 = (function (){var statearr_33328 = state_33316;
(statearr_33328[(7)] = inst_33265__$1);

(statearr_33328[(11)] = inst_33266__$1);

return statearr_33328;
})();
if(cljs.core.truth_(inst_33266__$1)){
var statearr_33329_34834 = state_33316__$1;
(statearr_33329_34834[(1)] = (7));

} else {
var statearr_33330_34835 = state_33316__$1;
(statearr_33330_34835[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (17))){
var inst_33289 = (state_33316[(10)]);
var inst_33299 = (function(){throw inst_33289})();
var state_33316__$1 = state_33316;
var statearr_33331_34836 = state_33316__$1;
(statearr_33331_34836[(2)] = inst_33299);

(statearr_33331_34836[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (3))){
var inst_33314 = (state_33316[(2)]);
var state_33316__$1 = state_33316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33316__$1,inst_33314);
} else {
if((state_val_33317 === (12))){
var inst_33278 = (state_33316[(2)]);
var inst_33282 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_33283 = [true];
var inst_33284 = cljs.core.PersistentHashMap.fromArrays(inst_33282,inst_33283);
var inst_33285 = cljs.core.clj__GT_js(inst_33284);
var inst_33286 = bb_web_ds_tools.runtime.webr.capture_r(shelter,"print(.last_error)",inst_33285);
var inst_33287 = cljs.core.async.interop.p__GT_c(inst_33286);
var state_33316__$1 = (function (){var statearr_33332 = state_33316;
(statearr_33332[(12)] = inst_33278);

return statearr_33332;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33316__$1,(13),inst_33287);
} else {
if((state_val_33317 === (2))){
var _ = (function (){var statearr_33333 = state_33316;
(statearr_33333[(4)] = cljs.core.cons((5),(state_33316[(4)])));

return statearr_33333;
})();
var inst_33261 = bb_web_ds_tools.runtime.webr.get_global_env(webr);
var inst_33262 = bb_web_ds_tools.runtime.webr.bind_r(inst_33261,".last_error",e);
var inst_33263 = cljs.core.async.interop.p__GT_c(inst_33262);
var state_33316__$1 = state_33316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33316__$1,(6),inst_33263);
} else {
if((state_val_33317 === (19))){
var inst_33302 = (state_33316[(2)]);
var inst_33303 = bb_web_ds_tools.runtime.webr.get_result_props(inst_33302);
var inst_33304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33303,(0),null);
var inst_33305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33303,(1),null);
var inst_33306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33303,(2),null);
var inst_33307 = bb_web_ds_tools.runtime.webr.process_capture_msgs(inst_33304);
var state_33316__$1 = (function (){var statearr_33334 = state_33316;
(statearr_33334[(13)] = inst_33305);

(statearr_33334[(14)] = inst_33306);

return statearr_33334;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33316__$1,(20),inst_33307);
} else {
if((state_val_33317 === (11))){
var inst_33265 = (state_33316[(7)]);
var state_33316__$1 = state_33316;
var statearr_33336_34869 = state_33316__$1;
(statearr_33336_34869[(2)] = inst_33265);

(statearr_33336_34869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (9))){
var inst_33273 = (state_33316[(2)]);
var state_33316__$1 = state_33316;
if(cljs.core.truth_(inst_33273)){
var statearr_33337_34870 = state_33316__$1;
(statearr_33337_34870[(1)] = (10));

} else {
var statearr_33338_34872 = state_33316__$1;
(statearr_33338_34872[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (5))){
var _ = (function (){var statearr_33339 = state_33316;
(statearr_33339[(4)] = cljs.core.rest((state_33316[(4)])));

return statearr_33339;
})();
var state_33316__$1 = state_33316;
var ex33335 = (state_33316__$1[(2)]);
var statearr_33340_34890 = state_33316__$1;
(statearr_33340_34890[(5)] = ex33335);


var statearr_33341_34891 = state_33316__$1;
(statearr_33341_34891[(1)] = (4));

(statearr_33341_34891[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (14))){
var inst_33289 = (state_33316[(10)]);
var inst_33292 = cljs.core.ex_data(inst_33289);
var inst_33293 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33292);
var inst_33294 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33293,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33316__$1 = state_33316;
var statearr_33342_34892 = state_33316__$1;
(statearr_33342_34892[(2)] = inst_33294);

(statearr_33342_34892[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (16))){
var inst_33297 = (state_33316[(2)]);
var state_33316__$1 = state_33316;
if(cljs.core.truth_(inst_33297)){
var statearr_33343_34908 = state_33316__$1;
(statearr_33343_34908[(1)] = (17));

} else {
var statearr_33344_34909 = state_33316__$1;
(statearr_33344_34909[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (10))){
var inst_33265 = (state_33316[(7)]);
var inst_33275 = (function(){throw inst_33265})();
var state_33316__$1 = state_33316;
var statearr_33345_34910 = state_33316__$1;
(statearr_33345_34910[(2)] = inst_33275);

(statearr_33345_34910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (18))){
var inst_33289 = (state_33316[(10)]);
var state_33316__$1 = state_33316;
var statearr_33346_34911 = state_33316__$1;
(statearr_33346_34911[(2)] = inst_33289);

(statearr_33346_34911[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (8))){
var inst_33266 = (state_33316[(11)]);
var state_33316__$1 = state_33316;
var statearr_33347_34913 = state_33316__$1;
(statearr_33347_34913[(2)] = inst_33266);

(statearr_33347_34913[(1)] = (9));


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
var bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto____0 = (function (){
var statearr_33348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33348[(0)] = bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto__);

(statearr_33348[(1)] = (1));

return statearr_33348;
});
var bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto____1 = (function (state_33316){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33316);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33349){var ex__24105__auto__ = e33349;
var statearr_33350_34914 = state_33316;
(statearr_33350_34914[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33316[(4)]))){
var statearr_33351_34915 = state_33316;
(statearr_33351_34915[(1)] = cljs.core.first((state_33316[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34916 = state_33316;
state_33316 = G__34916;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto__ = function(state_33316){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto____1.call(this,state_33316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33352 = f__24149__auto__();
(statearr_33352[(6)] = c__24148__auto__);

return statearr_33352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
});
bb_web_ds_tools.runtime.webr.create_shelter = (function bb_web_ds_tools$runtime$webr$create_shelter(webr){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33415){
var state_val_33416 = (state_33415[(1)]);
if((state_val_33416 === (7))){
var state_33415__$1 = state_33415;
var statearr_33417_34933 = state_33415__$1;
(statearr_33417_34933[(2)] = null);

(statearr_33417_34933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (20))){
var state_33415__$1 = state_33415;
var statearr_33418_34935 = state_33415__$1;
(statearr_33418_34935[(2)] = null);

(statearr_33418_34935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (27))){
var inst_33389 = (state_33415[(7)]);
var state_33415__$1 = state_33415;
var statearr_33419_34939 = state_33415__$1;
(statearr_33419_34939[(2)] = inst_33389);

(statearr_33419_34939[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (1))){
var state_33415__$1 = state_33415;
var statearr_33420_34940 = state_33415__$1;
(statearr_33420_34940[(2)] = null);

(statearr_33420_34940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (24))){
var inst_33390 = (state_33415[(8)]);
var state_33415__$1 = state_33415;
var statearr_33421_34941 = state_33415__$1;
(statearr_33421_34941[(2)] = inst_33390);

(statearr_33421_34941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (4))){
var inst_33353 = (state_33415[(2)]);
var inst_33354 = console.error("Error creating shelter",inst_33353);
var state_33415__$1 = (function (){var statearr_33422 = state_33415;
(statearr_33422[(9)] = inst_33354);

return statearr_33422;
})();
var statearr_33423_34942 = state_33415__$1;
(statearr_33423_34942[(2)] = null);

(statearr_33423_34942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (15))){
var inst_33375 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
if(cljs.core.truth_(inst_33375)){
var statearr_33424_34945 = state_33415__$1;
(statearr_33424_34945[(1)] = (16));

} else {
var statearr_33425_34946 = state_33415__$1;
(statearr_33425_34946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (21))){
var inst_33362 = (state_33415[(10)]);
var inst_33405 = (state_33415[(2)]);
var state_33415__$1 = (function (){var statearr_33426 = state_33415;
(statearr_33426[(11)] = inst_33405);

return statearr_33426;
})();
var statearr_33427_34947 = state_33415__$1;
(statearr_33427_34947[(2)] = inst_33362);

(statearr_33427_34947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (13))){
var inst_33367 = (state_33415[(12)]);
var inst_33370 = cljs.core.ex_data(inst_33367);
var inst_33371 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33370);
var inst_33372 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33371,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33415__$1 = state_33415;
var statearr_33428_34948 = state_33415__$1;
(statearr_33428_34948[(2)] = inst_33372);

(statearr_33428_34948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (22))){
var inst_33389 = (state_33415[(7)]);
var inst_33390 = (state_33415[(8)]);
var inst_33389__$1 = (state_33415[(2)]);
var inst_33390__$1 = (inst_33389__$1 instanceof cljs.core.ExceptionInfo);
var state_33415__$1 = (function (){var statearr_33429 = state_33415;
(statearr_33429[(7)] = inst_33389__$1);

(statearr_33429[(8)] = inst_33390__$1);

return statearr_33429;
})();
if(cljs.core.truth_(inst_33390__$1)){
var statearr_33430_34955 = state_33415__$1;
(statearr_33430_34955[(1)] = (23));

} else {
var statearr_33431_34956 = state_33415__$1;
(statearr_33431_34956[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (6))){
var inst_33360 = (state_33415[(13)]);
var inst_33362 = (state_33415[(10)]);
var inst_33362__$1 = (new inst_33360());
var inst_33363 = (inst_33362__$1 instanceof Promise);
var state_33415__$1 = (function (){var statearr_33432 = state_33415;
(statearr_33432[(10)] = inst_33362__$1);

return statearr_33432;
})();
if(cljs.core.truth_(inst_33363)){
var statearr_33433_34959 = state_33415__$1;
(statearr_33433_34959[(1)] = (9));

} else {
var statearr_33434_34960 = state_33415__$1;
(statearr_33434_34960[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (28))){
var inst_33402 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33435_34961 = state_33415__$1;
(statearr_33435_34961[(2)] = inst_33402);

(statearr_33435_34961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (25))){
var inst_33397 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
if(cljs.core.truth_(inst_33397)){
var statearr_33436_34966 = state_33415__$1;
(statearr_33436_34966[(1)] = (26));

} else {
var statearr_33437_34968 = state_33415__$1;
(statearr_33437_34968[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (17))){
var inst_33367 = (state_33415[(12)]);
var state_33415__$1 = state_33415;
var statearr_33438_34971 = state_33415__$1;
(statearr_33438_34971[(2)] = inst_33367);

(statearr_33438_34971[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (3))){
var inst_33413 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33415__$1,inst_33413);
} else {
if((state_val_33416 === (12))){
var inst_33367 = (state_33415[(12)]);
var inst_33368 = (state_33415[(14)]);
var inst_33367__$1 = (state_33415[(2)]);
var inst_33368__$1 = (inst_33367__$1 instanceof cljs.core.ExceptionInfo);
var state_33415__$1 = (function (){var statearr_33439 = state_33415;
(statearr_33439[(12)] = inst_33367__$1);

(statearr_33439[(14)] = inst_33368__$1);

return statearr_33439;
})();
if(cljs.core.truth_(inst_33368__$1)){
var statearr_33440_34972 = state_33415__$1;
(statearr_33440_34972[(1)] = (13));

} else {
var statearr_33441_34973 = state_33415__$1;
(statearr_33441_34973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (2))){
var inst_33360 = (state_33415[(13)]);
var _ = (function (){var statearr_33442 = state_33415;
(statearr_33442[(4)] = cljs.core.cons((5),(state_33415[(4)])));

return statearr_33442;
})();
var inst_33360__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(webr);
var state_33415__$1 = (function (){var statearr_33443 = state_33415;
(statearr_33443[(13)] = inst_33360__$1);

return statearr_33443;
})();
if(cljs.core.truth_(inst_33360__$1)){
var statearr_33444_34974 = state_33415__$1;
(statearr_33444_34974[(1)] = (6));

} else {
var statearr_33445_34975 = state_33415__$1;
(statearr_33445_34975[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (23))){
var inst_33389 = (state_33415[(7)]);
var inst_33392 = cljs.core.ex_data(inst_33389);
var inst_33393 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33392);
var inst_33394 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33393,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33415__$1 = state_33415;
var statearr_33446_34978 = state_33415__$1;
(statearr_33446_34978[(2)] = inst_33394);

(statearr_33446_34978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (19))){
var inst_33362 = (state_33415[(10)]);
var inst_33386 = bb_web_ds_tools.runtime.webr.init_obj(inst_33362);
var inst_33387 = cljs.core.async.interop.p__GT_c(inst_33386);
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33415__$1,(22),inst_33387);
} else {
if((state_val_33416 === (11))){
var inst_33407 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33448_34981 = state_33415__$1;
(statearr_33448_34981[(2)] = inst_33407);

(statearr_33448_34981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (9))){
var inst_33362 = (state_33415[(10)]);
var inst_33365 = cljs.core.async.interop.p__GT_c(inst_33362);
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33415__$1,(12),inst_33365);
} else {
if((state_val_33416 === (5))){
var _ = (function (){var statearr_33449 = state_33415;
(statearr_33449[(4)] = cljs.core.rest((state_33415[(4)])));

return statearr_33449;
})();
var state_33415__$1 = state_33415;
var ex33447 = (state_33415__$1[(2)]);
var statearr_33450_34986 = state_33415__$1;
(statearr_33450_34986[(5)] = ex33447);


var statearr_33451_34987 = state_33415__$1;
(statearr_33451_34987[(1)] = (4));

(statearr_33451_34987[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (14))){
var inst_33368 = (state_33415[(14)]);
var state_33415__$1 = state_33415;
var statearr_33452_34988 = state_33415__$1;
(statearr_33452_34988[(2)] = inst_33368);

(statearr_33452_34988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (26))){
var inst_33389 = (state_33415[(7)]);
var inst_33399 = (function(){throw inst_33389})();
var state_33415__$1 = state_33415;
var statearr_33453_34995 = state_33415__$1;
(statearr_33453_34995[(2)] = inst_33399);

(statearr_33453_34995[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (16))){
var inst_33367 = (state_33415[(12)]);
var inst_33377 = (function(){throw inst_33367})();
var state_33415__$1 = state_33415;
var statearr_33454_34998 = state_33415__$1;
(statearr_33454_34998[(2)] = inst_33377);

(statearr_33454_34998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (10))){
var inst_33362 = (state_33415[(10)]);
var inst_33382 = inst_33362.init;
var inst_33383 = (inst_33382 == null);
var inst_33384 = cljs.core.not(inst_33383);
var state_33415__$1 = state_33415;
if(inst_33384){
var statearr_33455_34999 = state_33415__$1;
(statearr_33455_34999[(1)] = (19));

} else {
var statearr_33456_35000 = state_33415__$1;
(statearr_33456_35000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (18))){
var inst_33380 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33457_35001 = state_33415__$1;
(statearr_33457_35001[(2)] = inst_33380);

(statearr_33457_35001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (8))){
var inst_33410 = (state_33415[(2)]);
var _ = (function (){var statearr_33458 = state_33415;
(statearr_33458[(4)] = cljs.core.rest((state_33415[(4)])));

return statearr_33458;
})();
var state_33415__$1 = state_33415;
var statearr_33459_35002 = state_33415__$1;
(statearr_33459_35002[(2)] = inst_33410);

(statearr_33459_35002[(1)] = (3));


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
});
return (function() {
var bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto____0 = (function (){
var statearr_33460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33460[(0)] = bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto__);

(statearr_33460[(1)] = (1));

return statearr_33460;
});
var bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto____1 = (function (state_33415){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33415);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33461){var ex__24105__auto__ = e33461;
var statearr_33462_35003 = state_33415;
(statearr_33462_35003[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33415[(4)]))){
var statearr_33463_35004 = state_33415;
(statearr_33463_35004[(1)] = cljs.core.first((state_33415[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35005 = state_33415;
state_33415 = G__35005;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto__ = function(state_33415){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto____1.call(this,state_33415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33464 = f__24149__auto__();
(statearr_33464[(6)] = c__24148__auto__);

return statearr_33464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
});
bb_web_ds_tools.runtime.webr.handle_output = (function bb_web_ds_tools$runtime$webr$handle_output(output){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33517){
var state_val_33518 = (state_33517[(1)]);
if((state_val_33518 === (7))){
var inst_33513 = (state_33517[(2)]);
var state_33517__$1 = state_33517;
var statearr_33523_35006 = state_33517__$1;
(statearr_33523_35006[(2)] = inst_33513);

(statearr_33523_35006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (1))){
var inst_33465 = bb_web_ds_tools.runtime.webr.process_capture_msgs(output);
var state_33517__$1 = state_33517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33517__$1,(2),inst_33465);
} else {
if((state_val_33518 === (4))){
var inst_33515 = (state_33517[(2)]);
var state_33517__$1 = state_33517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33517__$1,inst_33515);
} else {
if((state_val_33518 === (15))){
var inst_33490 = (state_33517[(7)]);
var inst_33499 = (state_33517[(8)]);
var inst_33499__$1 = cljs.core.first(inst_33490);
var state_33517__$1 = (function (){var statearr_33527 = state_33517;
(statearr_33527[(8)] = inst_33499__$1);

return statearr_33527;
})();
if(cljs.core.truth_(inst_33499__$1)){
var statearr_33528_35008 = state_33517__$1;
(statearr_33528_35008[(1)] = (17));

} else {
var statearr_33529_35011 = state_33517__$1;
(statearr_33529_35011[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (13))){
var inst_33511 = (state_33517[(2)]);
var state_33517__$1 = state_33517;
var statearr_33530_35012 = state_33517__$1;
(statearr_33530_35012[(2)] = inst_33511);

(statearr_33530_35012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (6))){
var inst_33473 = (state_33517[(9)]);
var inst_33490 = (state_33517[(7)]);
var inst_33490__$1 = cljs.core.seq(inst_33473);
var state_33517__$1 = (function (){var statearr_33531 = state_33517;
(statearr_33531[(7)] = inst_33490__$1);

return statearr_33531;
})();
if(inst_33490__$1){
var statearr_33532_35015 = state_33517__$1;
(statearr_33532_35015[(1)] = (11));

} else {
var statearr_33533_35016 = state_33517__$1;
(statearr_33533_35016[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (17))){
var inst_33499 = (state_33517[(8)]);
var inst_33501 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33499);
var state_33517__$1 = state_33517;
var statearr_33534_35018 = state_33517__$1;
(statearr_33534_35018[(2)] = inst_33501);

(statearr_33534_35018[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (3))){
var inst_33476 = (state_33517[(10)]);
var inst_33475 = (state_33517[(11)]);
var inst_33478 = (inst_33476 < inst_33475);
var inst_33479 = inst_33478;
var state_33517__$1 = state_33517;
if(cljs.core.truth_(inst_33479)){
var statearr_33536_35022 = state_33517__$1;
(statearr_33536_35022[(1)] = (5));

} else {
var statearr_33540_35024 = state_33517__$1;
(statearr_33540_35024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (12))){
var state_33517__$1 = state_33517;
var statearr_33541_35027 = state_33517__$1;
(statearr_33541_35027[(2)] = null);

(statearr_33541_35027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (2))){
var inst_33467 = (state_33517[(2)]);
var inst_33472 = cljs.core.seq(inst_33467);
var inst_33473 = inst_33472;
var inst_33474 = null;
var inst_33475 = (0);
var inst_33476 = (0);
var state_33517__$1 = (function (){var statearr_33543 = state_33517;
(statearr_33543[(9)] = inst_33473);

(statearr_33543[(12)] = inst_33474);

(statearr_33543[(11)] = inst_33475);

(statearr_33543[(10)] = inst_33476);

return statearr_33543;
})();
var statearr_33545_35033 = state_33517__$1;
(statearr_33545_35033[(2)] = null);

(statearr_33545_35033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (19))){
var inst_33490 = (state_33517[(7)]);
var inst_33504 = (state_33517[(2)]);
var inst_33505 = cljs.core.next(inst_33490);
var inst_33473 = inst_33505;
var inst_33474 = null;
var inst_33475 = (0);
var inst_33476 = (0);
var state_33517__$1 = (function (){var statearr_33546 = state_33517;
(statearr_33546[(13)] = inst_33504);

(statearr_33546[(9)] = inst_33473);

(statearr_33546[(12)] = inst_33474);

(statearr_33546[(11)] = inst_33475);

(statearr_33546[(10)] = inst_33476);

return statearr_33546;
})();
var statearr_33547_35037 = state_33517__$1;
(statearr_33547_35037[(2)] = null);

(statearr_33547_35037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (11))){
var inst_33490 = (state_33517[(7)]);
var inst_33492 = cljs.core.chunked_seq_QMARK_(inst_33490);
var state_33517__$1 = state_33517;
if(inst_33492){
var statearr_33548_35038 = state_33517__$1;
(statearr_33548_35038[(1)] = (14));

} else {
var statearr_33549_35039 = state_33517__$1;
(statearr_33549_35039[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (9))){
var state_33517__$1 = state_33517;
var statearr_33550_35040 = state_33517__$1;
(statearr_33550_35040[(2)] = null);

(statearr_33550_35040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (5))){
var inst_33474 = (state_33517[(12)]);
var inst_33476 = (state_33517[(10)]);
var inst_33481 = (state_33517[(14)]);
var inst_33481__$1 = cljs.core._nth(inst_33474,inst_33476);
var state_33517__$1 = (function (){var statearr_33551 = state_33517;
(statearr_33551[(14)] = inst_33481__$1);

return statearr_33551;
})();
if(cljs.core.truth_(inst_33481__$1)){
var statearr_33552_35043 = state_33517__$1;
(statearr_33552_35043[(1)] = (8));

} else {
var statearr_33553_35045 = state_33517__$1;
(statearr_33553_35045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (14))){
var inst_33490 = (state_33517[(7)]);
var inst_33494 = cljs.core.chunk_first(inst_33490);
var inst_33495 = cljs.core.chunk_rest(inst_33490);
var inst_33496 = cljs.core.count(inst_33494);
var inst_33473 = inst_33495;
var inst_33474 = inst_33494;
var inst_33475 = inst_33496;
var inst_33476 = (0);
var state_33517__$1 = (function (){var statearr_33557 = state_33517;
(statearr_33557[(9)] = inst_33473);

(statearr_33557[(12)] = inst_33474);

(statearr_33557[(11)] = inst_33475);

(statearr_33557[(10)] = inst_33476);

return statearr_33557;
})();
var statearr_33558_35051 = state_33517__$1;
(statearr_33558_35051[(2)] = null);

(statearr_33558_35051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (16))){
var inst_33508 = (state_33517[(2)]);
var state_33517__$1 = state_33517;
var statearr_33559_35056 = state_33517__$1;
(statearr_33559_35056[(2)] = inst_33508);

(statearr_33559_35056[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (10))){
var inst_33476 = (state_33517[(10)]);
var inst_33473 = (state_33517[(9)]);
var inst_33474 = (state_33517[(12)]);
var inst_33475 = (state_33517[(11)]);
var inst_33486 = (state_33517[(2)]);
var inst_33487 = (inst_33476 + (1));
var tmp33554 = inst_33474;
var tmp33555 = inst_33475;
var tmp33556 = inst_33473;
var inst_33473__$1 = tmp33556;
var inst_33474__$1 = tmp33554;
var inst_33475__$1 = tmp33555;
var inst_33476__$1 = inst_33487;
var state_33517__$1 = (function (){var statearr_33560 = state_33517;
(statearr_33560[(15)] = inst_33486);

(statearr_33560[(9)] = inst_33473__$1);

(statearr_33560[(12)] = inst_33474__$1);

(statearr_33560[(11)] = inst_33475__$1);

(statearr_33560[(10)] = inst_33476__$1);

return statearr_33560;
})();
var statearr_33561_35065 = state_33517__$1;
(statearr_33561_35065[(2)] = null);

(statearr_33561_35065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (18))){
var state_33517__$1 = state_33517;
var statearr_33562_35066 = state_33517__$1;
(statearr_33562_35066[(2)] = null);

(statearr_33562_35066[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33518 === (8))){
var inst_33481 = (state_33517[(14)]);
var inst_33483 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33481);
var state_33517__$1 = state_33517;
var statearr_33563_35067 = state_33517__$1;
(statearr_33563_35067[(2)] = inst_33483);

(statearr_33563_35067[(1)] = (10));


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
});
return (function() {
var bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto____0 = (function (){
var statearr_33564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33564[(0)] = bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto__);

(statearr_33564[(1)] = (1));

return statearr_33564;
});
var bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto____1 = (function (state_33517){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33517);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33565){var ex__24105__auto__ = e33565;
var statearr_33566_35070 = state_33517;
(statearr_33566_35070[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33517[(4)]))){
var statearr_33567_35071 = state_33517;
(statearr_33567_35071[(1)] = cljs.core.first((state_33517[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35074 = state_33517;
state_33517 = G__35074;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto__ = function(state_33517){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto____1.call(this,state_33517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33568 = f__24149__auto__();
(statearr_33568[(6)] = c__24148__auto__);

return statearr_33568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
});
bb_web_ds_tools.runtime.webr.handle_images = (function bb_web_ds_tools$runtime$webr$handle_images(images,opts){
var webr_settings = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"webr","webr",-966893065),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-width","container-width",-1461172864),(720),new cljs.core.Keyword(null,"container-height","container-height",-577782714),(800),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110),0.72], null));
var w = new cljs.core.Keyword(null,"container-width","container-width",-1461172864).cljs$core$IFn$_invoke$arity$1(webr_settings);
var h = new cljs.core.Keyword(null,"container-height","container-height",-577782714).cljs$core$IFn$_invoke$arity$1(webr_settings);
var s = new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110).cljs$core$IFn$_invoke$arity$1(webr_settings);
var seq__33569 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(images));
var chunk__33570 = null;
var count__33571 = (0);
var i__33572 = (0);
while(true){
if((i__33572 < count__33571)){
var img = chunk__33570.cljs$core$IIndexed$_nth$arity$2(null,i__33572);
var data_url_35102 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(img);
var canvas_hiccup_35103 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((bb_web_ds_tools.runtime.webr.get_width(img) * s) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),((bb_web_ds_tools.runtime.webr.get_height(img) * s) | (0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_url_35102),")"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null)], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),canvas_hiccup_35103,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));


var G__35117 = seq__33569;
var G__35118 = chunk__33570;
var G__35119 = count__33571;
var G__35120 = (i__33572 + (1));
seq__33569 = G__35117;
chunk__33570 = G__35118;
count__33571 = G__35119;
i__33572 = G__35120;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__33569);
if(temp__5825__auto__){
var seq__33569__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33569__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__33569__$1);
var G__35129 = cljs.core.chunk_rest(seq__33569__$1);
var G__35130 = c__5548__auto__;
var G__35131 = cljs.core.count(c__5548__auto__);
var G__35132 = (0);
seq__33569 = G__35129;
chunk__33570 = G__35130;
count__33571 = G__35131;
i__33572 = G__35132;
continue;
} else {
var img = cljs.core.first(seq__33569__$1);
var data_url_35134 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(img);
var canvas_hiccup_35135 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((bb_web_ds_tools.runtime.webr.get_width(img) * s) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),((bb_web_ds_tools.runtime.webr.get_height(img) * s) | (0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_url_35134),")"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null)], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),canvas_hiccup_35135,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));


var G__35142 = cljs.core.next(seq__33569__$1);
var G__35143 = null;
var G__35144 = (0);
var G__35145 = (0);
seq__33569 = G__35142;
chunk__33570 = G__35143;
count__33571 = G__35144;
i__33572 = G__35145;
continue;
}
} else {
return null;
}
}
break;
}
});
bb_web_ds_tools.runtime.webr.is_dataframe_QMARK_ = (function bb_web_ds_tools$runtime$webr$is_dataframe_QMARK_(shelter,obj){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33626){
var state_val_33627 = (state_33626[(1)]);
if((state_val_33627 === (7))){
var inst_33589 = (state_33626[(7)]);
var inst_33592 = cljs.core.ex_data(inst_33589);
var inst_33593 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33592);
var inst_33594 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33593,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33626__$1 = state_33626;
var statearr_33628_35146 = state_33626__$1;
(statearr_33628_35146[(2)] = inst_33594);

(statearr_33628_35146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (1))){
var state_33626__$1 = state_33626;
var statearr_33629_35171 = state_33626__$1;
(statearr_33629_35171[(2)] = null);

(statearr_33629_35171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (4))){
var inst_33573 = (state_33626[(2)]);
var state_33626__$1 = (function (){var statearr_33630 = state_33626;
(statearr_33630[(8)] = inst_33573);

return statearr_33630;
})();
var statearr_33631_35175 = state_33626__$1;
(statearr_33631_35175[(2)] = false);

(statearr_33631_35175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (15))){
var inst_33608 = (state_33626[(9)]);
var state_33626__$1 = state_33626;
var statearr_33632_35178 = state_33626__$1;
(statearr_33632_35178[(2)] = inst_33608);

(statearr_33632_35178[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (13))){
var inst_33607 = (state_33626[(10)]);
var inst_33608 = (state_33626[(9)]);
var inst_33607__$1 = (state_33626[(2)]);
var inst_33608__$1 = (inst_33607__$1 instanceof cljs.core.ExceptionInfo);
var state_33626__$1 = (function (){var statearr_33633 = state_33626;
(statearr_33633[(10)] = inst_33607__$1);

(statearr_33633[(9)] = inst_33608__$1);

return statearr_33633;
})();
if(cljs.core.truth_(inst_33608__$1)){
var statearr_33634_35190 = state_33626__$1;
(statearr_33634_35190[(1)] = (14));

} else {
var statearr_33635_35191 = state_33626__$1;
(statearr_33635_35191[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (6))){
var inst_33589 = (state_33626[(7)]);
var inst_33590 = (state_33626[(11)]);
var inst_33589__$1 = (state_33626[(2)]);
var inst_33590__$1 = (inst_33589__$1 instanceof cljs.core.ExceptionInfo);
var state_33626__$1 = (function (){var statearr_33636 = state_33626;
(statearr_33636[(7)] = inst_33589__$1);

(statearr_33636[(11)] = inst_33590__$1);

return statearr_33636;
})();
if(cljs.core.truth_(inst_33590__$1)){
var statearr_33637_35200 = state_33626__$1;
(statearr_33637_35200[(1)] = (7));

} else {
var statearr_33638_35202 = state_33626__$1;
(statearr_33638_35202[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (17))){
var inst_33607 = (state_33626[(10)]);
var inst_33617 = (function(){throw inst_33607})();
var state_33626__$1 = state_33626;
var statearr_33639_35204 = state_33626__$1;
(statearr_33639_35204[(2)] = inst_33617);

(statearr_33639_35204[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (3))){
var inst_33624 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33626__$1,inst_33624);
} else {
if((state_val_33627 === (12))){
var inst_33602 = (state_33626[(2)]);
var inst_33603 = inst_33602.result;
var inst_33604 = bb_web_ds_tools.runtime.webr.to_js(inst_33603);
var inst_33605 = cljs.core.async.interop.p__GT_c(inst_33604);
var state_33626__$1 = state_33626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33626__$1,(13),inst_33605);
} else {
if((state_val_33627 === (2))){
var _ = (function (){var statearr_33640 = state_33626;
(statearr_33640[(4)] = cljs.core.cons((5),(state_33626[(4)])));

return statearr_33640;
})();
var inst_33579 = [new cljs.core.Keyword(null,"env","env",-1815813235)];
var inst_33580 = [new cljs.core.Keyword(null,"x","x",2099068185)];
var inst_33581 = [obj];
var inst_33582 = cljs.core.PersistentHashMap.fromArrays(inst_33580,inst_33581);
var inst_33583 = [inst_33582];
var inst_33584 = cljs.core.PersistentHashMap.fromArrays(inst_33579,inst_33583);
var inst_33585 = cljs.core.clj__GT_js(inst_33584);
var inst_33586 = bb_web_ds_tools.runtime.webr.capture_r(shelter,"is.data.frame(x)",inst_33585);
var inst_33587 = cljs.core.async.interop.p__GT_c(inst_33586);
var state_33626__$1 = state_33626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33626__$1,(6),inst_33587);
} else {
if((state_val_33627 === (19))){
var inst_33620 = (state_33626[(2)]);
var inst_33621 = inst_33620 === true;
var _ = (function (){var statearr_33641 = state_33626;
(statearr_33641[(4)] = cljs.core.rest((state_33626[(4)])));

return statearr_33641;
})();
var state_33626__$1 = state_33626;
var statearr_33642_35259 = state_33626__$1;
(statearr_33642_35259[(2)] = inst_33621);

(statearr_33642_35259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (11))){
var inst_33589 = (state_33626[(7)]);
var state_33626__$1 = state_33626;
var statearr_33644_35260 = state_33626__$1;
(statearr_33644_35260[(2)] = inst_33589);

(statearr_33644_35260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (9))){
var inst_33597 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
if(cljs.core.truth_(inst_33597)){
var statearr_33645_35261 = state_33626__$1;
(statearr_33645_35261[(1)] = (10));

} else {
var statearr_33646_35262 = state_33626__$1;
(statearr_33646_35262[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (5))){
var _ = (function (){var statearr_33647 = state_33626;
(statearr_33647[(4)] = cljs.core.rest((state_33626[(4)])));

return statearr_33647;
})();
var state_33626__$1 = state_33626;
var ex33643 = (state_33626__$1[(2)]);
var statearr_33648_35263 = state_33626__$1;
(statearr_33648_35263[(5)] = ex33643);


var statearr_33649_35264 = state_33626__$1;
(statearr_33649_35264[(1)] = (4));

(statearr_33649_35264[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (14))){
var inst_33607 = (state_33626[(10)]);
var inst_33610 = cljs.core.ex_data(inst_33607);
var inst_33611 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33610);
var inst_33612 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33611,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33626__$1 = state_33626;
var statearr_33650_35265 = state_33626__$1;
(statearr_33650_35265[(2)] = inst_33612);

(statearr_33650_35265[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (16))){
var inst_33615 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
if(cljs.core.truth_(inst_33615)){
var statearr_33651_35266 = state_33626__$1;
(statearr_33651_35266[(1)] = (17));

} else {
var statearr_33652_35269 = state_33626__$1;
(statearr_33652_35269[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (10))){
var inst_33589 = (state_33626[(7)]);
var inst_33599 = (function(){throw inst_33589})();
var state_33626__$1 = state_33626;
var statearr_33653_35270 = state_33626__$1;
(statearr_33653_35270[(2)] = inst_33599);

(statearr_33653_35270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (18))){
var inst_33607 = (state_33626[(10)]);
var state_33626__$1 = state_33626;
var statearr_33654_35271 = state_33626__$1;
(statearr_33654_35271[(2)] = inst_33607);

(statearr_33654_35271[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (8))){
var inst_33590 = (state_33626[(11)]);
var state_33626__$1 = state_33626;
var statearr_33655_35274 = state_33626__$1;
(statearr_33655_35274[(2)] = inst_33590);

(statearr_33655_35274[(1)] = (9));


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
});
return (function() {
var bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto____0 = (function (){
var statearr_33656 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33656[(0)] = bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto__);

(statearr_33656[(1)] = (1));

return statearr_33656;
});
var bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto____1 = (function (state_33626){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33626);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33657){var ex__24105__auto__ = e33657;
var statearr_33658_35286 = state_33626;
(statearr_33658_35286[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33626[(4)]))){
var statearr_33659_35287 = state_33626;
(statearr_33659_35287[(1)] = cljs.core.first((state_33626[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35290 = state_33626;
state_33626 = G__35290;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto__ = function(state_33626){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto____1.call(this,state_33626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$is_dataframe_QMARK__$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33660 = f__24149__auto__();
(statearr_33660[(6)] = c__24148__auto__);

return statearr_33660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
});
bb_web_ds_tools.runtime.webr.handle_result = (function bb_web_ds_tools$runtime$webr$handle_result(shelter,result){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33737){
var state_val_33738 = (state_33737[(1)]);
if((state_val_33738 === (7))){
var inst_33676 = result.toD3();
var inst_33677 = cljs.core.async.interop.p__GT_c(inst_33676);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33737__$1,(10),inst_33677);
} else {
if((state_val_33738 === (20))){
var inst_33699 = (state_33737[(7)]);
var inst_33700 = (state_33737[(8)]);
var inst_33699__$1 = (state_33737[(2)]);
var inst_33700__$1 = (inst_33699__$1 instanceof cljs.core.ExceptionInfo);
var state_33737__$1 = (function (){var statearr_33739 = state_33737;
(statearr_33739[(7)] = inst_33699__$1);

(statearr_33739[(8)] = inst_33700__$1);

return statearr_33739;
})();
if(cljs.core.truth_(inst_33700__$1)){
var statearr_33740_35297 = state_33737__$1;
(statearr_33740_35297[(1)] = (21));

} else {
var statearr_33741_35299 = state_33737__$1;
(statearr_33741_35299[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (27))){
var inst_33717 = (state_33737[(9)]);
var _ = (function (){var statearr_33742 = state_33737;
(statearr_33742[(4)] = cljs.core.cons((30),(state_33737[(4)])));

return statearr_33742;
})();
var inst_33725 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_33717,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_33743 = state_33737;
(statearr_33743[(4)] = cljs.core.rest((state_33737[(4)])));

return statearr_33743;
})();
var state_33737__$1 = state_33737;
var statearr_33744_35307 = state_33737__$1;
(statearr_33744_35307[(2)] = inst_33725);

(statearr_33744_35307[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (1))){
var state_33737__$1 = state_33737;
var statearr_33745_35309 = state_33737__$1;
(statearr_33745_35309[(2)] = null);

(statearr_33745_35309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (24))){
var inst_33699 = (state_33737[(7)]);
var inst_33709 = (function(){throw inst_33699})();
var state_33737__$1 = state_33737;
var statearr_33746_35318 = state_33737__$1;
(statearr_33746_35318[(2)] = inst_33709);

(statearr_33746_35318[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (4))){
var inst_33661 = (state_33737[(2)]);
var inst_33662 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_33663 = ["Error processing result: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33661)].join('');
var inst_33664 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_33663];
var inst_33665 = cljs.core.PersistentHashMap.fromArrays(inst_33662,inst_33664);
var inst_33666 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33665);
var state_33737__$1 = state_33737;
var statearr_33747_35328 = state_33737__$1;
(statearr_33747_35328[(2)] = inst_33666);

(statearr_33747_35328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (15))){
var inst_33679 = (state_33737[(10)]);
var state_33737__$1 = state_33737;
var statearr_33748_35332 = state_33737__$1;
(statearr_33748_35332[(2)] = inst_33679);

(statearr_33748_35332[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (21))){
var inst_33699 = (state_33737[(7)]);
var inst_33702 = cljs.core.ex_data(inst_33699);
var inst_33703 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33702);
var inst_33704 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33703,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33737__$1 = state_33737;
var statearr_33749_35338 = state_33737__$1;
(statearr_33749_35338[(2)] = inst_33704);

(statearr_33749_35338[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (13))){
var inst_33687 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
if(cljs.core.truth_(inst_33687)){
var statearr_33750_35343 = state_33737__$1;
(statearr_33750_35343[(1)] = (14));

} else {
var statearr_33751_35344 = state_33737__$1;
(statearr_33751_35344[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (22))){
var inst_33700 = (state_33737[(8)]);
var state_33737__$1 = state_33737;
var statearr_33752_35347 = state_33737__$1;
(statearr_33752_35347[(2)] = inst_33700);

(statearr_33752_35347[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (29))){
var inst_33718 = (state_33737[(2)]);
var inst_33719 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(result);
var state_33737__$1 = (function (){var statearr_33753 = state_33737;
(statearr_33753[(11)] = inst_33718);

return statearr_33753;
})();
var statearr_33754_35353 = state_33737__$1;
(statearr_33754_35353[(2)] = inst_33719);

(statearr_33754_35353[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (6))){
var inst_33674 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
if(cljs.core.truth_(inst_33674)){
var statearr_33755_35363 = state_33737__$1;
(statearr_33755_35363[(1)] = (7));

} else {
var statearr_33756_35371 = state_33737__$1;
(statearr_33756_35371[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (28))){
var inst_33728 = (state_33737[(2)]);
var inst_33729 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_33730 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_33728];
var inst_33731 = cljs.core.PersistentHashMap.fromArrays(inst_33729,inst_33730);
var inst_33732 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33731);
var _ = (function (){var statearr_33757 = state_33737;
(statearr_33757[(4)] = cljs.core.rest((state_33737[(4)])));

return statearr_33757;
})();
var state_33737__$1 = state_33737;
var statearr_33758_35379 = state_33737__$1;
(statearr_33758_35379[(2)] = inst_33732);

(statearr_33758_35379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (25))){
var inst_33699 = (state_33737[(7)]);
var state_33737__$1 = state_33737;
var statearr_33759_35380 = state_33737__$1;
(statearr_33759_35380[(2)] = inst_33699);

(statearr_33759_35380[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (17))){
var inst_33694 = (state_33737[(12)]);
var inst_33697 = cljs.core.async.interop.p__GT_c(inst_33694);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33737__$1,(20),inst_33697);
} else {
if((state_val_33738 === (3))){
var inst_33735 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33737__$1,inst_33735);
} else {
if((state_val_33738 === (12))){
var inst_33680 = (state_33737[(13)]);
var state_33737__$1 = state_33737;
var statearr_33760_35381 = state_33737__$1;
(statearr_33760_35381[(2)] = inst_33680);

(statearr_33760_35381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (2))){
var _ = (function (){var statearr_33761 = state_33737;
(statearr_33761[(4)] = cljs.core.cons((5),(state_33737[(4)])));

return statearr_33761;
})();
var inst_33672 = bb_web_ds_tools.runtime.webr.is_dataframe_QMARK_(shelter,result);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33737__$1,(6),inst_33672);
} else {
if((state_val_33738 === (23))){
var inst_33707 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
if(cljs.core.truth_(inst_33707)){
var statearr_33762_35384 = state_33737__$1;
(statearr_33762_35384[(1)] = (24));

} else {
var statearr_33763_35385 = state_33737__$1;
(statearr_33763_35385[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (19))){
var inst_33715 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33764_35386 = state_33737__$1;
(statearr_33764_35386[(2)] = inst_33715);

(statearr_33764_35386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (11))){
var inst_33679 = (state_33737[(10)]);
var inst_33682 = cljs.core.ex_data(inst_33679);
var inst_33683 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33682);
var inst_33684 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33683,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33737__$1 = state_33737;
var statearr_33766_35389 = state_33737__$1;
(statearr_33766_35389[(2)] = inst_33684);

(statearr_33766_35389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (9))){
var inst_33717 = (state_33737[(2)]);
var state_33737__$1 = (function (){var statearr_33767 = state_33737;
(statearr_33767[(9)] = inst_33717);

return statearr_33767;
})();
var statearr_33768_35390 = state_33737__$1;
(statearr_33768_35390[(2)] = null);

(statearr_33768_35390[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (5))){
var _ = (function (){var statearr_33769 = state_33737;
(statearr_33769[(4)] = cljs.core.rest((state_33737[(4)])));

return statearr_33769;
})();
var state_33737__$1 = state_33737;
var ex33765 = (state_33737__$1[(2)]);
var statearr_33770_35394 = state_33737__$1;
(statearr_33770_35394[(5)] = ex33765);


var statearr_33771_35395 = state_33737__$1;
(statearr_33771_35395[(1)] = (4));

(statearr_33771_35395[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (14))){
var inst_33679 = (state_33737[(10)]);
var inst_33689 = (function(){throw inst_33679})();
var state_33737__$1 = state_33737;
var statearr_33772_35397 = state_33737__$1;
(statearr_33772_35397[(2)] = inst_33689);

(statearr_33772_35397[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (26))){
var inst_33712 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33774_35398 = state_33737__$1;
(statearr_33774_35398[(2)] = inst_33712);

(statearr_33774_35398[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (16))){
var inst_33692 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33775_35400 = state_33737__$1;
(statearr_33775_35400[(2)] = inst_33692);

(statearr_33775_35400[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (30))){
var _ = (function (){var statearr_33776 = state_33737;
(statearr_33776[(4)] = cljs.core.rest((state_33737[(4)])));

return statearr_33776;
})();
var state_33737__$1 = state_33737;
var ex33773 = (state_33737__$1[(2)]);
var statearr_33777_35402 = state_33737__$1;
(statearr_33777_35402[(5)] = ex33773);


if((ex33773 instanceof Error)){
var statearr_33778_35404 = state_33737__$1;
(statearr_33778_35404[(1)] = (29));

(statearr_33778_35404[(5)] = null);

} else {
throw ex33773;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (10))){
var inst_33679 = (state_33737[(10)]);
var inst_33680 = (state_33737[(13)]);
var inst_33679__$1 = (state_33737[(2)]);
var inst_33680__$1 = (inst_33679__$1 instanceof cljs.core.ExceptionInfo);
var state_33737__$1 = (function (){var statearr_33779 = state_33737;
(statearr_33779[(10)] = inst_33679__$1);

(statearr_33779[(13)] = inst_33680__$1);

return statearr_33779;
})();
if(cljs.core.truth_(inst_33680__$1)){
var statearr_33780_35405 = state_33737__$1;
(statearr_33780_35405[(1)] = (11));

} else {
var statearr_33781_35407 = state_33737__$1;
(statearr_33781_35407[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (18))){
var inst_33694 = (state_33737[(12)]);
var state_33737__$1 = state_33737;
var statearr_33782_35409 = state_33737__$1;
(statearr_33782_35409[(2)] = inst_33694);

(statearr_33782_35409[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (8))){
var inst_33694 = (state_33737[(12)]);
var inst_33694__$1 = bb_web_ds_tools.runtime.webr.to_js(result);
var inst_33695 = (inst_33694__$1 instanceof Promise);
var state_33737__$1 = (function (){var statearr_33783 = state_33737;
(statearr_33783[(12)] = inst_33694__$1);

return statearr_33783;
})();
if(cljs.core.truth_(inst_33695)){
var statearr_33784_35411 = state_33737__$1;
(statearr_33784_35411[(1)] = (17));

} else {
var statearr_33785_35412 = state_33737__$1;
(statearr_33785_35412[(1)] = (18));

}

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
});
return (function() {
var bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto____0 = (function (){
var statearr_33786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33786[(0)] = bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto__);

(statearr_33786[(1)] = (1));

return statearr_33786;
});
var bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto____1 = (function (state_33737){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33737);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33787){var ex__24105__auto__ = e33787;
var statearr_33788_35416 = state_33737;
(statearr_33788_35416[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33737[(4)]))){
var statearr_33789_35417 = state_33737;
(statearr_33789_35417[(1)] = cljs.core.first((state_33737[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35419 = state_33737;
state_33737 = G__35419;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto__ = function(state_33737){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto____1.call(this,state_33737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33790 = f__24149__auto__();
(statearr_33790[(6)] = c__24148__auto__);

return statearr_33790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
});
bb_web_ds_tools.runtime.webr.handle_error = (function bb_web_ds_tools$runtime$webr$handle_error(webr,shelter,e){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33815){
var state_val_33816 = (state_33815[(1)]);
if((state_val_33816 === (7))){
var inst_33804 = (state_33815[(7)]);
var inst_33804__$1 = (state_33815[(2)]);
var inst_33805 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var state_33815__$1 = (function (){var statearr_33817 = state_33815;
(statearr_33817[(7)] = inst_33804__$1);

(statearr_33817[(8)] = inst_33805);

return statearr_33817;
})();
if(cljs.core.truth_(inst_33804__$1)){
var statearr_33818_35422 = state_33815__$1;
(statearr_33818_35422[(1)] = (9));

} else {
var statearr_33819_35424 = state_33815__$1;
(statearr_33819_35424[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (1))){
var inst_33791 = (state_33815[(9)]);
var inst_33791__$1 = cljs.core.object_QMARK_(e);
var state_33815__$1 = (function (){var statearr_33820 = state_33815;
(statearr_33820[(9)] = inst_33791__$1);

return statearr_33820;
})();
if(inst_33791__$1){
var statearr_33821_35426 = state_33815__$1;
(statearr_33821_35426[(1)] = (2));

} else {
var statearr_33822_35428 = state_33815__$1;
(statearr_33822_35428[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (4))){
var inst_33797 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
if(cljs.core.truth_(inst_33797)){
var statearr_33823_35429 = state_33815__$1;
(statearr_33823_35429[(1)] = (5));

} else {
var statearr_33824_35430 = state_33815__$1;
(statearr_33824_35430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (6))){
var state_33815__$1 = state_33815;
var statearr_33825_35432 = state_33815__$1;
(statearr_33825_35432[(2)] = null);

(statearr_33825_35432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (3))){
var inst_33791 = (state_33815[(9)]);
var state_33815__$1 = state_33815;
var statearr_33826_35433 = state_33815__$1;
(statearr_33826_35433[(2)] = inst_33791);

(statearr_33826_35433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (2))){
var inst_33793 = e.message;
var inst_33794 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33793,"Promise error");
var state_33815__$1 = state_33815;
var statearr_33827_35435 = state_33815__$1;
(statearr_33827_35435[(2)] = inst_33794);

(statearr_33827_35435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (11))){
var inst_33805 = (state_33815[(8)]);
var inst_33810 = (state_33815[(2)]);
var inst_33811 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_33810];
var inst_33812 = cljs.core.PersistentHashMap.fromArrays(inst_33805,inst_33811);
var inst_33813 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33812);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33815__$1,inst_33813);
} else {
if((state_val_33816 === (9))){
var inst_33804 = (state_33815[(7)]);
var state_33815__$1 = state_33815;
var statearr_33828_35437 = state_33815__$1;
(statearr_33828_35437[(2)] = inst_33804);

(statearr_33828_35437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (5))){
var inst_33799 = bb_web_ds_tools.runtime.webr.attempt_print_error(webr,shelter,e);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33815__$1,(8),inst_33799);
} else {
if((state_val_33816 === (10))){
var inst_33808 = bb_web_ds_tools.runtime.webr.get_error_details(e);
var state_33815__$1 = state_33815;
var statearr_33829_35440 = state_33815__$1;
(statearr_33829_35440[(2)] = inst_33808);

(statearr_33829_35440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (8))){
var inst_33801 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33830_35441 = state_33815__$1;
(statearr_33830_35441[(2)] = inst_33801);

(statearr_33830_35441[(1)] = (7));


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
});
return (function() {
var bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto____0 = (function (){
var statearr_33831 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33831[(0)] = bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto__);

(statearr_33831[(1)] = (1));

return statearr_33831;
});
var bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto____1 = (function (state_33815){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33815);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33832){var ex__24105__auto__ = e33832;
var statearr_33833_35445 = state_33815;
(statearr_33833_35445[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33815[(4)]))){
var statearr_33834_35446 = state_33815;
(statearr_33834_35446[(1)] = cljs.core.first((state_33815[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35449 = state_33815;
state_33815 = G__35449;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto__ = function(state_33815){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto____1.call(this,state_33815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33835 = f__24149__auto__();
(statearr_33835[(6)] = c__24148__auto__);

return statearr_33835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
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
var len__5749__auto___35451 = arguments.length;
var i__5750__auto___35452 = (0);
while(true){
if((i__5750__auto___35452 < len__5749__auto___35451)){
args__5755__auto__.push((arguments[i__5750__auto___35452]));

var G__35454 = (i__5750__auto___35452 + (1));
i__5750__auto___35452 = G__35454;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic = (function (code,p__33838){
var vec__33839 = p__33838;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33839,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33913){
var state_val_33914 = (state_33913[(1)]);
if((state_val_33914 === (7))){
var inst_33904 = (state_33913[(2)]);
var state_33913__$1 = state_33913;
var statearr_33915_35457 = state_33913__$1;
(statearr_33915_35457[(2)] = inst_33904);

(statearr_33915_35457[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (20))){
var inst_33901 = (state_33913[(2)]);
var _ = (function (){var statearr_33916 = state_33913;
(statearr_33916[(4)] = cljs.core.rest((state_33913[(4)])));

return statearr_33916;
})();
var state_33913__$1 = state_33913;
var statearr_33917_35460 = state_33913__$1;
(statearr_33917_35460[(2)] = inst_33901);

(statearr_33917_35460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (1))){
var inst_33842 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_33843 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_33844 = cljs.core.PersistentHashMap.fromArrays(inst_33842,inst_33843);
var inst_33845 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33844);
var inst_33846 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_33847 = bb_web_ds_tools.runtime.webr.create_shelter(inst_33846);
var state_33913__$1 = (function (){var statearr_33918 = state_33913;
(statearr_33918[(7)] = inst_33845);

return statearr_33918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33913__$1,(2),inst_33847);
} else {
if((state_val_33914 === (4))){
var inst_33906 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_33907 = [new cljs.core.Keyword(null,"error","error",-978969032),"Failed to create shelter"];
var inst_33908 = cljs.core.PersistentHashMap.fromArrays(inst_33906,inst_33907);
var inst_33909 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33908);
var state_33913__$1 = state_33913;
var statearr_33919_35463 = state_33913__$1;
(statearr_33919_35463[(2)] = inst_33909);

(statearr_33919_35463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (15))){
var inst_33885 = (state_33913[(2)]);
var state_33913__$1 = state_33913;
if(cljs.core.truth_(inst_33885)){
var statearr_33922_35466 = state_33913__$1;
(statearr_33922_35466[(1)] = (16));

} else {
var statearr_33923_35468 = state_33913__$1;
(statearr_33923_35468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (13))){
var inst_33877 = (state_33913[(8)]);
var inst_33880 = cljs.core.ex_data(inst_33877);
var inst_33881 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33880);
var inst_33882 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33881,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33913__$1 = state_33913;
var statearr_33927_35471 = state_33913__$1;
(statearr_33927_35471[(2)] = inst_33882);

(statearr_33927_35471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (6))){
var inst_33849 = (state_33913[(9)]);
var _ = (function (){var statearr_33929 = state_33913;
(statearr_33929[(4)] = cljs.core.cons((8),(state_33913[(4)])));

return statearr_33929;
})();
var ___$1 = (function (){var statearr_33930 = state_33913;
(statearr_33930[(4)] = cljs.core.cons((11),(state_33913[(4)])));

return statearr_33930;
})();
var inst_33870 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_33871 = [true];
var inst_33872 = cljs.core.PersistentHashMap.fromArrays(inst_33870,inst_33871);
var inst_33873 = cljs.core.clj__GT_js(inst_33872);
var inst_33874 = bb_web_ds_tools.runtime.webr.capture_r(inst_33849,code,inst_33873);
var inst_33875 = cljs.core.async.interop.p__GT_c(inst_33874);
var state_33913__$1 = state_33913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33913__$1,(12),inst_33875);
} else {
if((state_val_33914 === (17))){
var inst_33877 = (state_33913[(8)]);
var state_33913__$1 = state_33913;
var statearr_33934_35473 = state_33913__$1;
(statearr_33934_35473[(2)] = inst_33877);

(statearr_33934_35473[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (3))){
var state_33913__$1 = state_33913;
var statearr_33936_35474 = state_33913__$1;
(statearr_33936_35474[(2)] = null);

(statearr_33936_35474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (12))){
var inst_33877 = (state_33913[(8)]);
var inst_33878 = (state_33913[(10)]);
var inst_33877__$1 = (state_33913[(2)]);
var inst_33878__$1 = (inst_33877__$1 instanceof cljs.core.ExceptionInfo);
var state_33913__$1 = (function (){var statearr_33938 = state_33913;
(statearr_33938[(8)] = inst_33877__$1);

(statearr_33938[(10)] = inst_33878__$1);

return statearr_33938;
})();
if(cljs.core.truth_(inst_33878__$1)){
var statearr_33941_35477 = state_33913__$1;
(statearr_33941_35477[(1)] = (13));

} else {
var statearr_33942_35479 = state_33913__$1;
(statearr_33942_35479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (2))){
var inst_33849 = (state_33913[(9)]);
var inst_33849__$1 = (state_33913[(2)]);
var state_33913__$1 = (function (){var statearr_33946 = state_33913;
(statearr_33946[(9)] = inst_33849__$1);

return statearr_33946;
})();
if(cljs.core.truth_(inst_33849__$1)){
var statearr_33947_35482 = state_33913__$1;
(statearr_33947_35482[(1)] = (3));

} else {
var statearr_33948_35484 = state_33913__$1;
(statearr_33948_35484[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (19))){
var inst_33893 = (state_33913[(11)]);
var inst_33849 = (state_33913[(9)]);
var inst_33894 = (state_33913[(12)]);
var inst_33897 = (state_33913[(2)]);
var inst_33898 = bb_web_ds_tools.runtime.webr.handle_images(inst_33893,opts);
var inst_33899 = bb_web_ds_tools.runtime.webr.handle_result(inst_33849,inst_33894);
var state_33913__$1 = (function (){var statearr_33950 = state_33913;
(statearr_33950[(13)] = inst_33897);

(statearr_33950[(14)] = inst_33898);

return statearr_33950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33913__$1,(20),inst_33899);
} else {
if((state_val_33914 === (11))){
var _ = (function (){var statearr_33951 = state_33913;
(statearr_33951[(4)] = cljs.core.rest((state_33913[(4)])));

return statearr_33951;
})();
var state_33913__$1 = state_33913;
var ex33945 = (state_33913__$1[(2)]);
var statearr_33952_35488 = state_33913__$1;
(statearr_33952_35488[(5)] = ex33945);


var statearr_33953_35489 = state_33913__$1;
(statearr_33953_35489[(1)] = (9));

(statearr_33953_35489[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (9))){
var inst_33849 = (state_33913[(9)]);
var inst_33856 = (state_33913[(2)]);
var inst_33857 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_33858 = bb_web_ds_tools.runtime.webr.handle_error(inst_33857,inst_33849,inst_33856);
var state_33913__$1 = state_33913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33913__$1,(10),inst_33858);
} else {
if((state_val_33914 === (5))){
var inst_33911 = (state_33913[(2)]);
var state_33913__$1 = state_33913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33913__$1,inst_33911);
} else {
if((state_val_33914 === (14))){
var inst_33878 = (state_33913[(10)]);
var state_33913__$1 = state_33913;
var statearr_33955_35492 = state_33913__$1;
(statearr_33955_35492[(2)] = inst_33878);

(statearr_33955_35492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (16))){
var inst_33877 = (state_33913[(8)]);
var inst_33887 = (function(){throw inst_33877})();
var state_33913__$1 = state_33913;
var statearr_33958_35494 = state_33913__$1;
(statearr_33958_35494[(2)] = inst_33887);

(statearr_33958_35494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (10))){
var inst_33860 = (state_33913[(2)]);
var state_33913__$1 = state_33913;
var statearr_33962_35498 = state_33913__$1;
(statearr_33962_35498[(2)] = inst_33860);

(statearr_33962_35498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (18))){
var inst_33890 = (state_33913[(2)]);
var inst_33891 = bb_web_ds_tools.runtime.webr.get_result_props(inst_33890);
var inst_33892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33891,(0),null);
var inst_33893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33891,(1),null);
var inst_33894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33891,(2),null);
var inst_33895 = bb_web_ds_tools.runtime.webr.handle_output(inst_33892);
var state_33913__$1 = (function (){var statearr_33964 = state_33913;
(statearr_33964[(11)] = inst_33893);

(statearr_33964[(12)] = inst_33894);

return statearr_33964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33913__$1,(19),inst_33895);
} else {
if((state_val_33914 === (8))){
var inst_33849 = (state_33913[(9)]);
var _ = (function (){var statearr_33969 = state_33913;
(statearr_33969[(4)] = cljs.core.rest((state_33913[(4)])));

return statearr_33969;
})();
var inst_33852 = (state_33913[(2)]);
var inst_33853 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_33849);
var ___$1 = (function (){var temp__5825__auto__ = (state_33913[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_33913__$1 = (function (){var statearr_33970 = state_33913;
(statearr_33970[(15)] = inst_33853);

return statearr_33970;
})();
var statearr_33974_35504 = state_33913__$1;
(statearr_33974_35504[(2)] = inst_33852);

(statearr_33974_35504[(1)] = (7));


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
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0 = (function (){
var statearr_33977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33977[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24102__auto__);

(statearr_33977[(1)] = (1));

return statearr_33977;
});
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1 = (function (state_33913){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33913);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33979){var ex__24105__auto__ = e33979;
var statearr_33980_35511 = state_33913;
(statearr_33980_35511[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33913[(4)]))){
var statearr_33981_35514 = state_33913;
(statearr_33981_35514[(1)] = cljs.core.first((state_33913[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35517 = state_33913;
state_33913 = G__35517;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = function(state_33913){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1.call(this,state_33913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33986 = f__24149__auto__();
(statearr_33986[(6)] = c__24148__auto__);

return statearr_33986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
} else {
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null));
}
}));

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$applyTo = (function (seq33836){
var G__33837 = cljs.core.first(seq33836);
var seq33836__$1 = cljs.core.next(seq33836);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33837,seq33836__$1);
}));


//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
