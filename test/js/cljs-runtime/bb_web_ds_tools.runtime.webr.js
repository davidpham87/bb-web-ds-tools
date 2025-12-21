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
var len__5749__auto___34021 = arguments.length;
var i__5750__auto___34023 = (0);
while(true){
if((i__5750__auto___34023 < len__5749__auto___34021)){
args__5755__auto__.push((arguments[i__5750__auto___34023]));

var G__34026 = (i__5750__auto___34023 + (1));
i__5750__auto___34023 = G__34026;
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
var statearr_32746_34029 = state_32742;
(statearr_32746_34029[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_32742[(4)]))){
var statearr_32747_34031 = state_32742;
(statearr_32747_34031[(1)] = cljs.core.first((state_32742[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34035 = state_32742;
state_32742 = G__34035;
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
var statearr_32819_34036 = state_32817__$1;
(statearr_32819_34036[(2)] = inst_32813);

(statearr_32819_34036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (20))){
var inst_32793 = (state_32817[(7)]);
var inst_32797 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32793);
var state_32817__$1 = state_32817;
var statearr_32820_34037 = state_32817__$1;
(statearr_32820_34037[(2)] = inst_32797);

(statearr_32820_34037[(1)] = (21));


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
var statearr_32822_34038 = state_32817__$1;
(statearr_32822_34038[(1)] = (2));

} else {
var statearr_32823_34039 = state_32817__$1;
(statearr_32823_34039[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (24))){
var inst_32811 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32824_34040 = state_32817__$1;
(statearr_32824_34040[(2)] = inst_32811);

(statearr_32824_34040[(1)] = (7));


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
var statearr_32825_34041 = state_32817__$1;
(statearr_32825_34041[(1)] = (16));

} else {
var statearr_32826_34042 = state_32817__$1;
(statearr_32826_34042[(1)] = (17));

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
var statearr_32828_34043 = state_32817__$1;
(statearr_32828_34043[(2)] = inst_32803);

(statearr_32828_34043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (13))){
var inst_32779 = (state_32817[(10)]);
var inst_32782 = cljs.core.ex_data(inst_32779);
var inst_32783 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32782);
var inst_32784 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32783,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32817__$1 = state_32817;
var statearr_32829_34045 = state_32817__$1;
(statearr_32829_34045[(2)] = inst_32784);

(statearr_32829_34045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (22))){
var state_32817__$1 = state_32817;
var statearr_32830_34046 = state_32817__$1;
(statearr_32830_34046[(2)] = null);

(statearr_32830_34046[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (6))){
var state_32817__$1 = state_32817;
var statearr_32831_34048 = state_32817__$1;
(statearr_32831_34048[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (17))){
var inst_32779 = (state_32817[(10)]);
var state_32817__$1 = state_32817;
var statearr_32833_34049 = state_32817__$1;
(statearr_32833_34049[(2)] = inst_32779);

(statearr_32833_34049[(1)] = (18));


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
var statearr_32834_34050 = state_32817__$1;
(statearr_32834_34050[(1)] = (5));

} else {
var statearr_32835_34051 = state_32817__$1;
(statearr_32835_34051[(1)] = (6));

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
var statearr_32837_34052 = state_32817__$1;
(statearr_32837_34052[(1)] = (13));

} else {
var statearr_32838_34053 = state_32817__$1;
(statearr_32838_34053[(1)] = (14));

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
var statearr_32839_34054 = state_32817__$1;
(statearr_32839_34054[(2)] = inst_32759);

(statearr_32839_34054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (23))){
var state_32817__$1 = state_32817;
var statearr_32841_34055 = state_32817__$1;
(statearr_32841_34055[(2)] = null);

(statearr_32841_34055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (19))){
var inst_32794 = (state_32817[(12)]);
var state_32817__$1 = state_32817;
var statearr_32842_34056 = state_32817__$1;
(statearr_32842_34056[(2)] = inst_32794);

(statearr_32842_34056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (11))){
var _ = (function (){var statearr_32843 = state_32817;
(statearr_32843[(4)] = cljs.core.rest((state_32817[(4)])));

return statearr_32843;
})();
var state_32817__$1 = state_32817;
var ex32840 = (state_32817__$1[(2)]);
var statearr_32844_34057 = state_32817__$1;
(statearr_32844_34057[(5)] = ex32840);


var statearr_32845_34058 = state_32817__$1;
(statearr_32845_34058[(1)] = (10));

(statearr_32845_34058[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (9))){
var inst_32806 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32846_34059 = state_32817__$1;
(statearr_32846_34059[(2)] = inst_32806);

(statearr_32846_34059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (5))){
var state_32817__$1 = state_32817;
var statearr_32847_34061 = state_32817__$1;
(statearr_32847_34061[(2)] = null);

(statearr_32847_34061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (14))){
var inst_32780 = (state_32817[(11)]);
var state_32817__$1 = state_32817;
var statearr_32848_34062 = state_32817__$1;
(statearr_32848_34062[(2)] = inst_32780);

(statearr_32848_34062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (16))){
var inst_32779 = (state_32817[(10)]);
var inst_32789 = (function(){throw inst_32779})();
var state_32817__$1 = state_32817;
var statearr_32849_34064 = state_32817__$1;
(statearr_32849_34064[(2)] = inst_32789);

(statearr_32849_34064[(1)] = (18));


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
var statearr_32851_34066 = state_32817__$1;
(statearr_32851_34066[(2)] = inst_32770);

(statearr_32851_34066[(1)] = (9));


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
var statearr_32853_34070 = state_32817__$1;
(statearr_32853_34070[(1)] = (19));

} else {
var statearr_32854_34072 = state_32817__$1;
(statearr_32854_34072[(1)] = (20));

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
var statearr_32858_34073 = state_32817;
(statearr_32858_34073[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_32817[(4)]))){
var statearr_32859_34074 = state_32817;
(statearr_32859_34074[(1)] = cljs.core.first((state_32817[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34075 = state_32817;
state_32817 = G__34075;
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
var statearr_32903_34076 = state_32900__$1;
(statearr_32903_34076[(1)] = (8));

} else {
var statearr_32904_34077 = state_32900__$1;
(statearr_32904_34077[(1)] = (9));

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
var statearr_32908_34082 = state_32900__$1;
(statearr_32908_34082[(2)] = inst_32894);

(statearr_32908_34082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (3))){
var inst_32896 = cljs.core.PersistentVector.EMPTY;
var state_32900__$1 = state_32900;
var statearr_32909_34084 = state_32900__$1;
(statearr_32909_34084[(2)] = inst_32896);

(statearr_32909_34084[(1)] = (4));


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
var statearr_32911_34086 = state_32900__$1;
(statearr_32911_34086[(2)] = null);

(statearr_32911_34086[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (9))){
var inst_32887 = (state_32900[(9)]);
var state_32900__$1 = state_32900;
var statearr_32912_34087 = state_32900__$1;
(statearr_32912_34087[(2)] = inst_32887);

(statearr_32912_34087[(1)] = (10));


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
var statearr_32914_34089 = state_32900__$1;
(statearr_32914_34089[(2)] = inst_32892);

(statearr_32914_34089[(1)] = (6));


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
var statearr_32916_34090 = state_32900__$1;
(statearr_32916_34090[(2)] = null);

(statearr_32916_34090[(1)] = (5));


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
var statearr_32919_34091 = state_32900;
(statearr_32919_34091[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_32900[(4)]))){
var statearr_32920_34093 = state_32900;
(statearr_32920_34093[(1)] = cljs.core.first((state_32900[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34094 = state_32900;
state_32900 = G__34094;
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
var state__24150__auto__ = (function (){var statearr_32922 = f__24149__auto__();
(statearr_32922[(6)] = c__24148__auto__);

return statearr_32922;
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
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_32984){
var state_val_32987 = (state_32984[(1)]);
if((state_val_32987 === (7))){
var inst_32980 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_32992_34095 = state_32984__$1;
(statearr_32992_34095[(2)] = inst_32980);

(statearr_32992_34095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (1))){
var inst_32923 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_32984__$1 = state_32984;
if(cljs.core.truth_(inst_32923)){
var statearr_32999_34097 = state_32984__$1;
(statearr_32999_34097[(1)] = (2));

} else {
var statearr_33000_34098 = state_32984__$1;
(statearr_33000_34098[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (4))){
var inst_32982 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32984__$1,inst_32982);
} else {
if((state_val_32987 === (15))){
var inst_32963 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
if(cljs.core.truth_(inst_32963)){
var statearr_33001_34099 = state_32984__$1;
(statearr_33001_34099[(1)] = (16));

} else {
var statearr_33002_34100 = state_32984__$1;
(statearr_33002_34100[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (13))){
var inst_32955 = (state_32984[(7)]);
var inst_32958 = cljs.core.ex_data(inst_32955);
var inst_32959 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32958);
var inst_32960 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32959,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_32984__$1 = state_32984;
var statearr_33003_34101 = state_32984__$1;
(statearr_33003_34101[(2)] = inst_32960);

(statearr_33003_34101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (6))){
var inst_32974 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_32984__$1 = state_32984;
var statearr_33004_34102 = state_32984__$1;
(statearr_33004_34102[(2)] = inst_32974);

(statearr_33004_34102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (17))){
var inst_32955 = (state_32984[(7)]);
var state_32984__$1 = state_32984;
var statearr_33005_34103 = state_32984__$1;
(statearr_33005_34103[(2)] = inst_32955);

(statearr_33005_34103[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (3))){
var inst_32928 = (typeof WebR !== 'undefined');
var state_32984__$1 = state_32984;
if(cljs.core.truth_(inst_32928)){
var statearr_33010_34104 = state_32984__$1;
(statearr_33010_34104[(1)] = (5));

} else {
var statearr_33011_34105 = state_32984__$1;
(statearr_33011_34105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (12))){
var inst_32955 = (state_32984[(7)]);
var inst_32956 = (state_32984[(8)]);
var inst_32955__$1 = (state_32984[(2)]);
var inst_32956__$1 = (inst_32955__$1 instanceof cljs.core.ExceptionInfo);
var state_32984__$1 = (function (){var statearr_33013 = state_32984;
(statearr_33013[(7)] = inst_32955__$1);

(statearr_33013[(8)] = inst_32956__$1);

return statearr_33013;
})();
if(cljs.core.truth_(inst_32956__$1)){
var statearr_33014_34106 = state_32984__$1;
(statearr_33014_34106[(1)] = (13));

} else {
var statearr_33015_34107 = state_32984__$1;
(statearr_33015_34107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (2))){
var inst_32925 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_32984__$1 = state_32984;
var statearr_33016_34110 = state_32984__$1;
(statearr_33016_34110[(2)] = inst_32925);

(statearr_33016_34110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (11))){
var _ = (function (){var statearr_33017 = state_32984;
(statearr_33017[(4)] = cljs.core.rest((state_32984[(4)])));

return statearr_33017;
})();
var state_32984__$1 = state_32984;
var ex33012 = (state_32984__$1[(2)]);
var statearr_33018_34121 = state_32984__$1;
(statearr_33018_34121[(5)] = ex33012);


var statearr_33019_34122 = state_32984__$1;
(statearr_33019_34122[(1)] = (10));

(statearr_33019_34122[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (9))){
var inst_32972 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_33022_34125 = state_32984__$1;
(statearr_33022_34125[(2)] = inst_32972);

(statearr_33022_34125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (5))){
var state_32984__$1 = state_32984;
var statearr_33032_34126 = state_32984__$1;
(statearr_33032_34126[(2)] = null);

(statearr_33032_34126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (14))){
var inst_32956 = (state_32984[(8)]);
var state_32984__$1 = state_32984;
var statearr_33033_34127 = state_32984__$1;
(statearr_33033_34127[(2)] = inst_32956);

(statearr_33033_34127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (16))){
var inst_32955 = (state_32984[(7)]);
var inst_32965 = (function(){throw inst_32955})();
var state_32984__$1 = state_32984;
var statearr_33034_34129 = state_32984__$1;
(statearr_33034_34129[(2)] = inst_32965);

(statearr_33034_34129[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (10))){
var inst_32933 = (state_32984[(2)]);
var inst_32934 = console.error("WebR Init Error:",inst_32933);
var inst_32935 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32933)].join('');
var inst_32936 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_32935) : on_error.call(null,inst_32935));
var state_32984__$1 = (function (){var statearr_33038 = state_32984;
(statearr_33038[(9)] = inst_32934);

return statearr_33038;
})();
var statearr_33039_34130 = state_32984__$1;
(statearr_33039_34130[(2)] = inst_32936);

(statearr_33039_34130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (18))){
var inst_32968 = (state_32984[(2)]);
var inst_32969 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_33040 = state_32984;
(statearr_33040[(4)] = cljs.core.rest((state_32984[(4)])));

return statearr_33040;
})();
var state_32984__$1 = (function (){var statearr_33041 = state_32984;
(statearr_33041[(10)] = inst_32968);

return statearr_33041;
})();
var statearr_33042_34131 = state_32984__$1;
(statearr_33042_34131[(2)] = inst_32969);

(statearr_33042_34131[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (8))){
var _ = (function (){var statearr_33043 = state_32984;
(statearr_33043[(4)] = cljs.core.cons((11),(state_32984[(4)])));

return statearr_33043;
})();
var inst_32942 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_32943 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_32944 = cljs.core.PersistentHashMap.fromArrays(inst_32942,inst_32943);
var inst_32946 = cljs.core.clj__GT_js(inst_32944);
var inst_32947 = (new WebR(inst_32946));
var inst_32948 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_32947);
var inst_32952 = bb_web_ds_tools.runtime.webr.init_obj(inst_32947);
var inst_32953 = cljs.core.async.interop.p__GT_c(inst_32952);
var state_32984__$1 = (function (){var statearr_33044 = state_32984;
(statearr_33044[(11)] = inst_32948);

return statearr_33044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32984__$1,(12),inst_32953);
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
var statearr_33045 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33045[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto__);

(statearr_33045[(1)] = (1));

return statearr_33045;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto____1 = (function (state_32984){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_32984);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33046){var ex__24105__auto__ = e33046;
var statearr_33047_34132 = state_32984;
(statearr_33047_34132[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_32984[(4)]))){
var statearr_33048_34134 = state_32984;
(statearr_33048_34134[(1)] = cljs.core.first((state_32984[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34136 = state_32984;
state_32984 = G__34136;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto__ = function(state_32984){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto____1.call(this,state_32984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33049 = f__24149__auto__();
(statearr_33049[(6)] = c__24148__auto__);

return statearr_33049;
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
var ds_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__33050){
var vec__33051 = p__33050;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33051,(0),null);
var map__33054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33051,(1),null);
var map__33054__$1 = cljs.core.__destructure_map(map__33054);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33054__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33054__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
var len__5749__auto___34168 = arguments.length;
var i__5750__auto___34169 = (0);
while(true){
if((i__5750__auto___34169 < len__5749__auto___34168)){
args__5755__auto__.push((arguments[i__5750__auto___34169]));

var G__34170 = (i__5750__auto___34169 + (1));
i__5750__auto___34169 = G__34170;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic = (function (datasets,p__33057){
var vec__33058 = p__33057;
var keys_to_bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33058,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33092){
var state_val_33093 = (state_33092[(1)]);
if((state_val_33093 === (7))){
var inst_33074 = (state_33092[(7)]);
var inst_33077 = cljs.core.ex_data(inst_33074);
var inst_33078 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33077);
var inst_33079 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33078,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33092__$1 = state_33092;
var statearr_33094_34171 = state_33092__$1;
(statearr_33094_34171[(2)] = inst_33079);

(statearr_33094_34171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (1))){
var state_33092__$1 = state_33092;
var statearr_33095_34172 = state_33092__$1;
(statearr_33095_34172[(2)] = null);

(statearr_33095_34172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (4))){
var inst_33061 = (state_33092[(2)]);
var inst_33062 = console.error("Failed to bind datasets to R:",inst_33061);
var state_33092__$1 = state_33092;
var statearr_33096_34173 = state_33092__$1;
(statearr_33096_34173[(2)] = inst_33062);

(statearr_33096_34173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (6))){
var inst_33074 = (state_33092[(7)]);
var inst_33075 = (state_33092[(8)]);
var inst_33074__$1 = (state_33092[(2)]);
var inst_33075__$1 = (inst_33074__$1 instanceof cljs.core.ExceptionInfo);
var state_33092__$1 = (function (){var statearr_33097 = state_33092;
(statearr_33097[(7)] = inst_33074__$1);

(statearr_33097[(8)] = inst_33075__$1);

return statearr_33097;
})();
if(cljs.core.truth_(inst_33075__$1)){
var statearr_33098_34223 = state_33092__$1;
(statearr_33098_34223[(1)] = (7));

} else {
var statearr_33099_34224 = state_33092__$1;
(statearr_33099_34224[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (3))){
var inst_33090 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33092__$1,inst_33090);
} else {
if((state_val_33093 === (12))){
var inst_33087 = (state_33092[(2)]);
var _ = (function (){var statearr_33100 = state_33092;
(statearr_33100[(4)] = cljs.core.rest((state_33092[(4)])));

return statearr_33100;
})();
var state_33092__$1 = state_33092;
var statearr_33101_34225 = state_33092__$1;
(statearr_33101_34225[(2)] = inst_33087);

(statearr_33101_34225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (2))){
var _ = (function (){var statearr_33102 = state_33092;
(statearr_33102[(4)] = cljs.core.cons((5),(state_33092[(4)])));

return statearr_33102;
})();
var inst_33068 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_33069 = bb_web_ds_tools.runtime.webr.datasets__GT_js(datasets,keys_to_bind);
var inst_33070 = bb_web_ds_tools.runtime.webr.get_global_env(inst_33068);
var inst_33071 = bb_web_ds_tools.runtime.webr.bind_r(inst_33070,"datasets",inst_33069);
var inst_33072 = cljs.core.async.interop.p__GT_c(inst_33071);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33092__$1,(6),inst_33072);
} else {
if((state_val_33093 === (11))){
var inst_33074 = (state_33092[(7)]);
var state_33092__$1 = state_33092;
var statearr_33104_34226 = state_33092__$1;
(statearr_33104_34226[(2)] = inst_33074);

(statearr_33104_34226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (9))){
var inst_33082 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33082)){
var statearr_33105_34227 = state_33092__$1;
(statearr_33105_34227[(1)] = (10));

} else {
var statearr_33106_34228 = state_33092__$1;
(statearr_33106_34228[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (5))){
var _ = (function (){var statearr_33108 = state_33092;
(statearr_33108[(4)] = cljs.core.rest((state_33092[(4)])));

return statearr_33108;
})();
var state_33092__$1 = state_33092;
var ex33103 = (state_33092__$1[(2)]);
var statearr_33109_34229 = state_33092__$1;
(statearr_33109_34229[(5)] = ex33103);


var statearr_33110_34230 = state_33092__$1;
(statearr_33110_34230[(1)] = (4));

(statearr_33110_34230[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (10))){
var inst_33074 = (state_33092[(7)]);
var inst_33084 = (function(){throw inst_33074})();
var state_33092__$1 = state_33092;
var statearr_33111_34283 = state_33092__$1;
(statearr_33111_34283[(2)] = inst_33084);

(statearr_33111_34283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (8))){
var inst_33075 = (state_33092[(8)]);
var state_33092__$1 = state_33092;
var statearr_33112_34284 = state_33092__$1;
(statearr_33112_34284[(2)] = inst_33075);

(statearr_33112_34284[(1)] = (9));


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
var statearr_33113 = [null,null,null,null,null,null,null,null,null];
(statearr_33113[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24102__auto__);

(statearr_33113[(1)] = (1));

return statearr_33113;
});
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1 = (function (state_33092){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33092);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33114){var ex__24105__auto__ = e33114;
var statearr_33115_34285 = state_33092;
(statearr_33115_34285[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33092[(4)]))){
var statearr_33116_34286 = state_33092;
(statearr_33116_34286[(1)] = cljs.core.first((state_33092[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34287 = state_33092;
state_33092 = G__34287;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = function(state_33092){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1.call(this,state_33092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33117 = f__24149__auto__();
(statearr_33117[(6)] = c__24148__auto__);

return statearr_33117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
} else {
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33120){
var state_val_33121 = (state_33120[(1)]);
if((state_val_33121 === (1))){
var inst_33118 = console.warn("WebR not loaded, cannot bind datasets");
var state_33120__$1 = state_33120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33120__$1,inst_33118);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0 = (function (){
var statearr_33122 = [null,null,null,null,null,null,null];
(statearr_33122[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24102__auto__);

(statearr_33122[(1)] = (1));

return statearr_33122;
});
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1 = (function (state_33120){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33120);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33123){var ex__24105__auto__ = e33123;
var statearr_33124_34288 = state_33120;
(statearr_33124_34288[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33120[(4)]))){
var statearr_33125_34289 = state_33120;
(statearr_33125_34289[(1)] = cljs.core.first((state_33120[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34290 = state_33120;
state_33120 = G__34290;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = function(state_33120){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1.call(this,state_33120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33126 = f__24149__auto__();
(statearr_33126[(6)] = c__24148__auto__);

return statearr_33126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
}
}));

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$applyTo = (function (seq33055){
var G__33056 = cljs.core.first(seq33055);
var seq33055__$1 = cljs.core.next(seq33055);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33056,seq33055__$1);
}));

/**
 * Retrieves the 'datasets' variable from R, converts it back to CLJS,
 * and dispatches an update event if found.
 */
bb_web_ds_tools.runtime.webr.sync_datasets = (function bb_web_ds_tools$runtime$webr$sync_datasets(){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33192){
var state_val_33193 = (state_33192[(1)]);
if((state_val_33193 === (7))){
var inst_33161 = (state_33192[(7)]);
var inst_33161__$1 = (state_33192[(2)]);
var state_33192__$1 = (function (){var statearr_33194 = state_33192;
(statearr_33194[(7)] = inst_33161__$1);

return statearr_33194;
})();
if(cljs.core.truth_(inst_33161__$1)){
var statearr_33195_34291 = state_33192__$1;
(statearr_33195_34291[(1)] = (17));

} else {
var statearr_33196_34292 = state_33192__$1;
(statearr_33196_34292[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (20))){
var inst_33166 = (state_33192[(8)]);
var inst_33167 = (state_33192[(9)]);
var inst_33166__$1 = (state_33192[(2)]);
var inst_33167__$1 = (inst_33166__$1 instanceof cljs.core.ExceptionInfo);
var state_33192__$1 = (function (){var statearr_33197 = state_33192;
(statearr_33197[(8)] = inst_33166__$1);

(statearr_33197[(9)] = inst_33167__$1);

return statearr_33197;
})();
if(cljs.core.truth_(inst_33167__$1)){
var statearr_33198_34318 = state_33192__$1;
(statearr_33198_34318[(1)] = (21));

} else {
var statearr_33199_34319 = state_33192__$1;
(statearr_33199_34319[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (1))){
var state_33192__$1 = state_33192;
var statearr_33200_34320 = state_33192__$1;
(statearr_33200_34320[(2)] = null);

(statearr_33200_34320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (24))){
var inst_33166 = (state_33192[(8)]);
var inst_33176 = (function(){throw inst_33166})();
var state_33192__$1 = state_33192;
var statearr_33201_34321 = state_33192__$1;
(statearr_33201_34321[(2)] = inst_33176);

(statearr_33201_34321[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (4))){
var inst_33127 = (state_33192[(2)]);
var inst_33128 = console.error("Failed to sync datasets from R:",inst_33127);
var state_33192__$1 = state_33192;
var statearr_33202_34322 = state_33192__$1;
(statearr_33202_34322[(2)] = inst_33128);

(statearr_33202_34322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (15))){
var inst_33145 = (state_33192[(10)]);
var state_33192__$1 = state_33192;
var statearr_33203_34323 = state_33192__$1;
(statearr_33203_34323[(2)] = inst_33145);

(statearr_33203_34323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (21))){
var inst_33166 = (state_33192[(8)]);
var inst_33169 = cljs.core.ex_data(inst_33166);
var inst_33170 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33169);
var inst_33171 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33170,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33192__$1 = state_33192;
var statearr_33204_34324 = state_33192__$1;
(statearr_33204_34324[(2)] = inst_33171);

(statearr_33204_34324[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (13))){
var inst_33153 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33153)){
var statearr_33205_34379 = state_33192__$1;
(statearr_33205_34379[(1)] = (14));

} else {
var statearr_33206_34380 = state_33192__$1;
(statearr_33206_34380[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (22))){
var inst_33167 = (state_33192[(9)]);
var state_33192__$1 = state_33192;
var statearr_33207_34381 = state_33192__$1;
(statearr_33207_34381[(2)] = inst_33167);

(statearr_33207_34381[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (6))){
var inst_33134 = (state_33192[(11)]);
var _ = (function (){var statearr_33208 = state_33192;
(statearr_33208[(4)] = cljs.core.cons((9),(state_33192[(4)])));

return statearr_33208;
})();
var inst_33141 = bb_web_ds_tools.runtime.webr.get_global_env(inst_33134);
var inst_33142 = bb_web_ds_tools.runtime.webr.get_r(inst_33141,"datasets");
var inst_33143 = cljs.core.async.interop.p__GT_c(inst_33142);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33192__$1,(10),inst_33143);
} else {
if((state_val_33193 === (25))){
var inst_33166 = (state_33192[(8)]);
var state_33192__$1 = state_33192;
var statearr_33209_34382 = state_33192__$1;
(statearr_33209_34382[(2)] = inst_33166);

(statearr_33209_34382[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (17))){
var inst_33161 = (state_33192[(7)]);
var inst_33163 = bb_web_ds_tools.runtime.webr.to_js(inst_33161);
var inst_33164 = cljs.core.async.interop.p__GT_c(inst_33163);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33192__$1,(20),inst_33164);
} else {
if((state_val_33193 === (3))){
var inst_33190 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33192__$1,inst_33190);
} else {
if((state_val_33193 === (12))){
var inst_33146 = (state_33192[(12)]);
var state_33192__$1 = state_33192;
var statearr_33210_34383 = state_33192__$1;
(statearr_33210_34383[(2)] = inst_33146);

(statearr_33210_34383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (2))){
var _ = (function (){var statearr_33211 = state_33192;
(statearr_33211[(4)] = cljs.core.cons((5),(state_33192[(4)])));

return statearr_33211;
})();
var inst_33134 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_33192__$1 = (function (){var statearr_33212 = state_33192;
(statearr_33212[(11)] = inst_33134);

return statearr_33212;
})();
var statearr_33213_34384 = state_33192__$1;
(statearr_33213_34384[(2)] = null);

(statearr_33213_34384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (23))){
var inst_33174 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33174)){
var statearr_33214_34385 = state_33192__$1;
(statearr_33214_34385[(1)] = (24));

} else {
var statearr_33215_34386 = state_33192__$1;
(statearr_33215_34386[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (19))){
var inst_33187 = (state_33192[(2)]);
var _ = (function (){var statearr_33217 = state_33192;
(statearr_33217[(4)] = cljs.core.rest((state_33192[(4)])));

return statearr_33217;
})();
var state_33192__$1 = state_33192;
var statearr_33218_34448 = state_33192__$1;
(statearr_33218_34448[(2)] = inst_33187);

(statearr_33218_34448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (11))){
var inst_33145 = (state_33192[(10)]);
var inst_33148 = cljs.core.ex_data(inst_33145);
var inst_33149 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33148);
var inst_33150 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33149,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33192__$1 = state_33192;
var statearr_33220_34449 = state_33192__$1;
(statearr_33220_34449[(2)] = inst_33150);

(statearr_33220_34449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (9))){
var _ = (function (){var statearr_33221 = state_33192;
(statearr_33221[(4)] = cljs.core.rest((state_33192[(4)])));

return statearr_33221;
})();
var state_33192__$1 = state_33192;
var ex33216 = (state_33192__$1[(2)]);
var statearr_33222_34450 = state_33192__$1;
(statearr_33222_34450[(5)] = ex33216);


var statearr_33223_34451 = state_33192__$1;
(statearr_33223_34451[(1)] = (8));

(statearr_33223_34451[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (5))){
var _ = (function (){var statearr_33224 = state_33192;
(statearr_33224[(4)] = cljs.core.rest((state_33192[(4)])));

return statearr_33224;
})();
var state_33192__$1 = state_33192;
var ex33219 = (state_33192__$1[(2)]);
var statearr_33225_34452 = state_33192__$1;
(statearr_33225_34452[(5)] = ex33219);


var statearr_33226_34453 = state_33192__$1;
(statearr_33226_34453[(1)] = (4));

(statearr_33226_34453[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (14))){
var inst_33145 = (state_33192[(10)]);
var inst_33155 = (function(){throw inst_33145})();
var state_33192__$1 = state_33192;
var statearr_33227_34454 = state_33192__$1;
(statearr_33227_34454[(2)] = inst_33155);

(statearr_33227_34454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (26))){
var inst_33179 = (state_33192[(2)]);
var inst_33180 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_33179,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_33181 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33182 = [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets-from-r","bb-web-ds-tools.views.datasets/patch-datasets-from-r",-125752359),inst_33180];
var inst_33183 = (new cljs.core.PersistentVector(null,2,(5),inst_33181,inst_33182,null));
var inst_33184 = re_frame.core.dispatch(inst_33183);
var state_33192__$1 = state_33192;
var statearr_33228_34455 = state_33192__$1;
(statearr_33228_34455[(2)] = inst_33184);

(statearr_33228_34455[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (16))){
var inst_33158 = (state_33192[(2)]);
var _ = (function (){var statearr_33229 = state_33192;
(statearr_33229[(4)] = cljs.core.rest((state_33192[(4)])));

return statearr_33229;
})();
var state_33192__$1 = state_33192;
var statearr_33230_34491 = state_33192__$1;
(statearr_33230_34491[(2)] = inst_33158);

(statearr_33230_34491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (10))){
var inst_33145 = (state_33192[(10)]);
var inst_33146 = (state_33192[(12)]);
var inst_33145__$1 = (state_33192[(2)]);
var inst_33146__$1 = (inst_33145__$1 instanceof cljs.core.ExceptionInfo);
var state_33192__$1 = (function (){var statearr_33231 = state_33192;
(statearr_33231[(10)] = inst_33145__$1);

(statearr_33231[(12)] = inst_33146__$1);

return statearr_33231;
})();
if(cljs.core.truth_(inst_33146__$1)){
var statearr_33232_34492 = state_33192__$1;
(statearr_33232_34492[(1)] = (11));

} else {
var statearr_33233_34493 = state_33192__$1;
(statearr_33233_34493[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (18))){
var state_33192__$1 = state_33192;
var statearr_33234_34494 = state_33192__$1;
(statearr_33234_34494[(2)] = null);

(statearr_33234_34494[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (8))){
var inst_33135 = (state_33192[(2)]);
var state_33192__$1 = (function (){var statearr_33235 = state_33192;
(statearr_33235[(13)] = inst_33135);

return statearr_33235;
})();
var statearr_33236_34495 = state_33192__$1;
(statearr_33236_34495[(2)] = null);

(statearr_33236_34495[(1)] = (7));


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
var statearr_33237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33237[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__);

(statearr_33237[(1)] = (1));

return statearr_33237;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1 = (function (state_33192){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33192);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33238){var ex__24105__auto__ = e33238;
var statearr_33239_34496 = state_33192;
(statearr_33239_34496[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33192[(4)]))){
var statearr_33240_34497 = state_33192;
(statearr_33240_34497[(1)] = cljs.core.first((state_33192[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34518 = state_33192;
state_33192 = G__34518;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__ = function(state_33192){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1.call(this,state_33192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33241 = f__24149__auto__();
(statearr_33241[(6)] = c__24148__auto__);

return statearr_33241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
} else {
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33244){
var state_val_33245 = (state_33244[(1)]);
if((state_val_33245 === (1))){
var inst_33242 = console.warn("WebR not loaded, cannot sync datasets");
var state_33244__$1 = state_33244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33244__$1,inst_33242);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__ = null;
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____0 = (function (){
var statearr_33246 = [null,null,null,null,null,null,null];
(statearr_33246[(0)] = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__);

(statearr_33246[(1)] = (1));

return statearr_33246;
});
var bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1 = (function (state_33244){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33244);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33247){var ex__24105__auto__ = e33247;
var statearr_33248_34533 = state_33244;
(statearr_33248_34533[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33244[(4)]))){
var statearr_33249_34534 = state_33244;
(statearr_33249_34534[(1)] = cljs.core.first((state_33244[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34535 = state_33244;
state_33244 = G__34535;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__ = function(state_33244){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1.call(this,state_33244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$sync_datasets_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33250 = f__24149__auto__();
(statearr_33250[(6)] = c__24148__auto__);

return statearr_33250;
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
var _STAR_print_newline_STAR__orig_val__33251_34543 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33252_34544 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33253_34545 = true;
var _STAR_print_fn_STAR__temp_val__33254_34546 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33253_34545);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33254_34546);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clj_e);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33252_34544);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33251_34543);
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
var statearr_33318_34573 = state_33316__$1;
(statearr_33318_34573[(2)] = inst_33270);

(statearr_33318_34573[(1)] = (9));


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
var statearr_33320_34583 = state_33316__$1;
(statearr_33320_34583[(2)] = inst_33311);

(statearr_33320_34583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (1))){
var state_33316__$1 = state_33316;
var statearr_33321_34584 = state_33316__$1;
(statearr_33321_34584[(2)] = null);

(statearr_33321_34584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (4))){
var inst_33255 = (state_33316[(2)]);
var state_33316__$1 = (function (){var statearr_33322 = state_33316;
(statearr_33322[(8)] = inst_33255);

return statearr_33322;
})();
var statearr_33323_34600 = state_33316__$1;
(statearr_33323_34600[(2)] = null);

(statearr_33323_34600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (15))){
var inst_33290 = (state_33316[(9)]);
var state_33316__$1 = state_33316;
var statearr_33324_34601 = state_33316__$1;
(statearr_33324_34601[(2)] = inst_33290);

(statearr_33324_34601[(1)] = (16));


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
var statearr_33326_34603 = state_33316__$1;
(statearr_33326_34603[(1)] = (14));

} else {
var statearr_33327_34611 = state_33316__$1;
(statearr_33327_34611[(1)] = (15));

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
var statearr_33329_34622 = state_33316__$1;
(statearr_33329_34622[(1)] = (7));

} else {
var statearr_33330_34623 = state_33316__$1;
(statearr_33330_34623[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (17))){
var inst_33289 = (state_33316[(10)]);
var inst_33299 = (function(){throw inst_33289})();
var state_33316__$1 = state_33316;
var statearr_33331_34625 = state_33316__$1;
(statearr_33331_34625[(2)] = inst_33299);

(statearr_33331_34625[(1)] = (19));


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
var statearr_33336_34634 = state_33316__$1;
(statearr_33336_34634[(2)] = inst_33265);

(statearr_33336_34634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (9))){
var inst_33273 = (state_33316[(2)]);
var state_33316__$1 = state_33316;
if(cljs.core.truth_(inst_33273)){
var statearr_33341_34635 = state_33316__$1;
(statearr_33341_34635[(1)] = (10));

} else {
var statearr_33342_34636 = state_33316__$1;
(statearr_33342_34636[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (5))){
var _ = (function (){var statearr_33343 = state_33316;
(statearr_33343[(4)] = cljs.core.rest((state_33316[(4)])));

return statearr_33343;
})();
var state_33316__$1 = state_33316;
var ex33335 = (state_33316__$1[(2)]);
var statearr_33347_34637 = state_33316__$1;
(statearr_33347_34637[(5)] = ex33335);


var statearr_33348_34638 = state_33316__$1;
(statearr_33348_34638[(1)] = (4));

(statearr_33348_34638[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (14))){
var inst_33289 = (state_33316[(10)]);
var inst_33292 = cljs.core.ex_data(inst_33289);
var inst_33293 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33292);
var inst_33294 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33293,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33316__$1 = state_33316;
var statearr_33349_34639 = state_33316__$1;
(statearr_33349_34639[(2)] = inst_33294);

(statearr_33349_34639[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (16))){
var inst_33297 = (state_33316[(2)]);
var state_33316__$1 = state_33316;
if(cljs.core.truth_(inst_33297)){
var statearr_33350_34651 = state_33316__$1;
(statearr_33350_34651[(1)] = (17));

} else {
var statearr_33351_34652 = state_33316__$1;
(statearr_33351_34652[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (10))){
var inst_33265 = (state_33316[(7)]);
var inst_33275 = (function(){throw inst_33265})();
var state_33316__$1 = state_33316;
var statearr_33352_34653 = state_33316__$1;
(statearr_33352_34653[(2)] = inst_33275);

(statearr_33352_34653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (18))){
var inst_33289 = (state_33316[(10)]);
var state_33316__$1 = state_33316;
var statearr_33357_34655 = state_33316__$1;
(statearr_33357_34655[(2)] = inst_33289);

(statearr_33357_34655[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (8))){
var inst_33266 = (state_33316[(11)]);
var state_33316__$1 = state_33316;
var statearr_33359_34656 = state_33316__$1;
(statearr_33359_34656[(2)] = inst_33266);

(statearr_33359_34656[(1)] = (9));


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
var statearr_33361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33361[(0)] = bb_web_ds_tools$runtime$webr$attempt_print_error_$_state_machine__24102__auto__);

(statearr_33361[(1)] = (1));

return statearr_33361;
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
}catch (e33362){var ex__24105__auto__ = e33362;
var statearr_33363_34678 = state_33316;
(statearr_33363_34678[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33316[(4)]))){
var statearr_33364_34679 = state_33316;
(statearr_33364_34679[(1)] = cljs.core.first((state_33316[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34680 = state_33316;
state_33316 = G__34680;
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
var state__24150__auto__ = (function (){var statearr_33365 = f__24149__auto__();
(statearr_33365[(6)] = c__24148__auto__);

return statearr_33365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
});
bb_web_ds_tools.runtime.webr.create_shelter = (function bb_web_ds_tools$runtime$webr$create_shelter(webr){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33428){
var state_val_33429 = (state_33428[(1)]);
if((state_val_33429 === (7))){
var state_33428__$1 = state_33428;
var statearr_33430_34692 = state_33428__$1;
(statearr_33430_34692[(2)] = null);

(statearr_33430_34692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (20))){
var state_33428__$1 = state_33428;
var statearr_33431_34706 = state_33428__$1;
(statearr_33431_34706[(2)] = null);

(statearr_33431_34706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (27))){
var inst_33402 = (state_33428[(7)]);
var state_33428__$1 = state_33428;
var statearr_33432_34707 = state_33428__$1;
(statearr_33432_34707[(2)] = inst_33402);

(statearr_33432_34707[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (1))){
var state_33428__$1 = state_33428;
var statearr_33433_34708 = state_33428__$1;
(statearr_33433_34708[(2)] = null);

(statearr_33433_34708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (24))){
var inst_33403 = (state_33428[(8)]);
var state_33428__$1 = state_33428;
var statearr_33434_34709 = state_33428__$1;
(statearr_33434_34709[(2)] = inst_33403);

(statearr_33434_34709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (4))){
var inst_33366 = (state_33428[(2)]);
var inst_33367 = console.error("Error creating shelter",inst_33366);
var state_33428__$1 = (function (){var statearr_33435 = state_33428;
(statearr_33435[(9)] = inst_33367);

return statearr_33435;
})();
var statearr_33436_34710 = state_33428__$1;
(statearr_33436_34710[(2)] = null);

(statearr_33436_34710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (15))){
var inst_33388 = (state_33428[(2)]);
var state_33428__$1 = state_33428;
if(cljs.core.truth_(inst_33388)){
var statearr_33437_34712 = state_33428__$1;
(statearr_33437_34712[(1)] = (16));

} else {
var statearr_33438_34713 = state_33428__$1;
(statearr_33438_34713[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (21))){
var inst_33375 = (state_33428[(10)]);
var inst_33418 = (state_33428[(2)]);
var state_33428__$1 = (function (){var statearr_33439 = state_33428;
(statearr_33439[(11)] = inst_33418);

return statearr_33439;
})();
var statearr_33440_34714 = state_33428__$1;
(statearr_33440_34714[(2)] = inst_33375);

(statearr_33440_34714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (13))){
var inst_33380 = (state_33428[(12)]);
var inst_33383 = cljs.core.ex_data(inst_33380);
var inst_33384 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33383);
var inst_33385 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33384,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33428__$1 = state_33428;
var statearr_33441_34716 = state_33428__$1;
(statearr_33441_34716[(2)] = inst_33385);

(statearr_33441_34716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (22))){
var inst_33402 = (state_33428[(7)]);
var inst_33403 = (state_33428[(8)]);
var inst_33402__$1 = (state_33428[(2)]);
var inst_33403__$1 = (inst_33402__$1 instanceof cljs.core.ExceptionInfo);
var state_33428__$1 = (function (){var statearr_33442 = state_33428;
(statearr_33442[(7)] = inst_33402__$1);

(statearr_33442[(8)] = inst_33403__$1);

return statearr_33442;
})();
if(cljs.core.truth_(inst_33403__$1)){
var statearr_33443_34741 = state_33428__$1;
(statearr_33443_34741[(1)] = (23));

} else {
var statearr_33444_34742 = state_33428__$1;
(statearr_33444_34742[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (6))){
var inst_33373 = (state_33428[(13)]);
var inst_33375 = (state_33428[(10)]);
var inst_33375__$1 = (new inst_33373());
var inst_33376 = (inst_33375__$1 instanceof Promise);
var state_33428__$1 = (function (){var statearr_33445 = state_33428;
(statearr_33445[(10)] = inst_33375__$1);

return statearr_33445;
})();
if(cljs.core.truth_(inst_33376)){
var statearr_33446_34744 = state_33428__$1;
(statearr_33446_34744[(1)] = (9));

} else {
var statearr_33447_34745 = state_33428__$1;
(statearr_33447_34745[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (28))){
var inst_33415 = (state_33428[(2)]);
var state_33428__$1 = state_33428;
var statearr_33448_34746 = state_33428__$1;
(statearr_33448_34746[(2)] = inst_33415);

(statearr_33448_34746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (25))){
var inst_33410 = (state_33428[(2)]);
var state_33428__$1 = state_33428;
if(cljs.core.truth_(inst_33410)){
var statearr_33449_34747 = state_33428__$1;
(statearr_33449_34747[(1)] = (26));

} else {
var statearr_33450_34748 = state_33428__$1;
(statearr_33450_34748[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (17))){
var inst_33380 = (state_33428[(12)]);
var state_33428__$1 = state_33428;
var statearr_33451_34750 = state_33428__$1;
(statearr_33451_34750[(2)] = inst_33380);

(statearr_33451_34750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (3))){
var inst_33426 = (state_33428[(2)]);
var state_33428__$1 = state_33428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33428__$1,inst_33426);
} else {
if((state_val_33429 === (12))){
var inst_33380 = (state_33428[(12)]);
var inst_33381 = (state_33428[(14)]);
var inst_33380__$1 = (state_33428[(2)]);
var inst_33381__$1 = (inst_33380__$1 instanceof cljs.core.ExceptionInfo);
var state_33428__$1 = (function (){var statearr_33452 = state_33428;
(statearr_33452[(12)] = inst_33380__$1);

(statearr_33452[(14)] = inst_33381__$1);

return statearr_33452;
})();
if(cljs.core.truth_(inst_33381__$1)){
var statearr_33453_34777 = state_33428__$1;
(statearr_33453_34777[(1)] = (13));

} else {
var statearr_33454_34778 = state_33428__$1;
(statearr_33454_34778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (2))){
var inst_33373 = (state_33428[(13)]);
var _ = (function (){var statearr_33455 = state_33428;
(statearr_33455[(4)] = cljs.core.cons((5),(state_33428[(4)])));

return statearr_33455;
})();
var inst_33373__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(webr);
var state_33428__$1 = (function (){var statearr_33456 = state_33428;
(statearr_33456[(13)] = inst_33373__$1);

return statearr_33456;
})();
if(cljs.core.truth_(inst_33373__$1)){
var statearr_33457_34780 = state_33428__$1;
(statearr_33457_34780[(1)] = (6));

} else {
var statearr_33458_34781 = state_33428__$1;
(statearr_33458_34781[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (23))){
var inst_33402 = (state_33428[(7)]);
var inst_33405 = cljs.core.ex_data(inst_33402);
var inst_33406 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33405);
var inst_33407 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33406,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33428__$1 = state_33428;
var statearr_33459_34782 = state_33428__$1;
(statearr_33459_34782[(2)] = inst_33407);

(statearr_33459_34782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (19))){
var inst_33375 = (state_33428[(10)]);
var inst_33399 = bb_web_ds_tools.runtime.webr.init_obj(inst_33375);
var inst_33400 = cljs.core.async.interop.p__GT_c(inst_33399);
var state_33428__$1 = state_33428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33428__$1,(22),inst_33400);
} else {
if((state_val_33429 === (11))){
var inst_33420 = (state_33428[(2)]);
var state_33428__$1 = state_33428;
var statearr_33461_34812 = state_33428__$1;
(statearr_33461_34812[(2)] = inst_33420);

(statearr_33461_34812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (9))){
var inst_33375 = (state_33428[(10)]);
var inst_33378 = cljs.core.async.interop.p__GT_c(inst_33375);
var state_33428__$1 = state_33428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33428__$1,(12),inst_33378);
} else {
if((state_val_33429 === (5))){
var _ = (function (){var statearr_33462 = state_33428;
(statearr_33462[(4)] = cljs.core.rest((state_33428[(4)])));

return statearr_33462;
})();
var state_33428__$1 = state_33428;
var ex33460 = (state_33428__$1[(2)]);
var statearr_33463_34814 = state_33428__$1;
(statearr_33463_34814[(5)] = ex33460);


var statearr_33464_34815 = state_33428__$1;
(statearr_33464_34815[(1)] = (4));

(statearr_33464_34815[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (14))){
var inst_33381 = (state_33428[(14)]);
var state_33428__$1 = state_33428;
var statearr_33465_34816 = state_33428__$1;
(statearr_33465_34816[(2)] = inst_33381);

(statearr_33465_34816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (26))){
var inst_33402 = (state_33428[(7)]);
var inst_33412 = (function(){throw inst_33402})();
var state_33428__$1 = state_33428;
var statearr_33466_34817 = state_33428__$1;
(statearr_33466_34817[(2)] = inst_33412);

(statearr_33466_34817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (16))){
var inst_33380 = (state_33428[(12)]);
var inst_33390 = (function(){throw inst_33380})();
var state_33428__$1 = state_33428;
var statearr_33467_34850 = state_33428__$1;
(statearr_33467_34850[(2)] = inst_33390);

(statearr_33467_34850[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (10))){
var inst_33375 = (state_33428[(10)]);
var inst_33395 = inst_33375.init;
var inst_33396 = (inst_33395 == null);
var inst_33397 = cljs.core.not(inst_33396);
var state_33428__$1 = state_33428;
if(inst_33397){
var statearr_33468_34901 = state_33428__$1;
(statearr_33468_34901[(1)] = (19));

} else {
var statearr_33469_34903 = state_33428__$1;
(statearr_33469_34903[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (18))){
var inst_33393 = (state_33428[(2)]);
var state_33428__$1 = state_33428;
var statearr_33470_34907 = state_33428__$1;
(statearr_33470_34907[(2)] = inst_33393);

(statearr_33470_34907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33429 === (8))){
var inst_33423 = (state_33428[(2)]);
var _ = (function (){var statearr_33471 = state_33428;
(statearr_33471[(4)] = cljs.core.rest((state_33428[(4)])));

return statearr_33471;
})();
var state_33428__$1 = state_33428;
var statearr_33472_34908 = state_33428__$1;
(statearr_33472_34908[(2)] = inst_33423);

(statearr_33472_34908[(1)] = (3));


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
var statearr_33473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33473[(0)] = bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto__);

(statearr_33473[(1)] = (1));

return statearr_33473;
});
var bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto____1 = (function (state_33428){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33428);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33474){var ex__24105__auto__ = e33474;
var statearr_33475_34911 = state_33428;
(statearr_33475_34911[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33428[(4)]))){
var statearr_33476_34912 = state_33428;
(statearr_33476_34912[(1)] = cljs.core.first((state_33428[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34913 = state_33428;
state_33428 = G__34913;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto__ = function(state_33428){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto____1.call(this,state_33428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$create_shelter_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33477 = f__24149__auto__();
(statearr_33477[(6)] = c__24148__auto__);

return statearr_33477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
});
bb_web_ds_tools.runtime.webr.handle_output = (function bb_web_ds_tools$runtime$webr$handle_output(output){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33530){
var state_val_33531 = (state_33530[(1)]);
if((state_val_33531 === (7))){
var inst_33526 = (state_33530[(2)]);
var state_33530__$1 = state_33530;
var statearr_33532_34933 = state_33530__$1;
(statearr_33532_34933[(2)] = inst_33526);

(statearr_33532_34933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (1))){
var inst_33478 = bb_web_ds_tools.runtime.webr.process_capture_msgs(output);
var state_33530__$1 = state_33530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33530__$1,(2),inst_33478);
} else {
if((state_val_33531 === (4))){
var inst_33528 = (state_33530[(2)]);
var state_33530__$1 = state_33530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33530__$1,inst_33528);
} else {
if((state_val_33531 === (15))){
var inst_33503 = (state_33530[(7)]);
var inst_33512 = (state_33530[(8)]);
var inst_33512__$1 = cljs.core.first(inst_33503);
var state_33530__$1 = (function (){var statearr_33533 = state_33530;
(statearr_33533[(8)] = inst_33512__$1);

return statearr_33533;
})();
if(cljs.core.truth_(inst_33512__$1)){
var statearr_33534_34938 = state_33530__$1;
(statearr_33534_34938[(1)] = (17));

} else {
var statearr_33535_34939 = state_33530__$1;
(statearr_33535_34939[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (13))){
var inst_33524 = (state_33530[(2)]);
var state_33530__$1 = state_33530;
var statearr_33536_34940 = state_33530__$1;
(statearr_33536_34940[(2)] = inst_33524);

(statearr_33536_34940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (6))){
var inst_33486 = (state_33530[(9)]);
var inst_33503 = (state_33530[(7)]);
var inst_33503__$1 = cljs.core.seq(inst_33486);
var state_33530__$1 = (function (){var statearr_33537 = state_33530;
(statearr_33537[(7)] = inst_33503__$1);

return statearr_33537;
})();
if(inst_33503__$1){
var statearr_33538_34947 = state_33530__$1;
(statearr_33538_34947[(1)] = (11));

} else {
var statearr_33539_34949 = state_33530__$1;
(statearr_33539_34949[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (17))){
var inst_33512 = (state_33530[(8)]);
var inst_33514 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33512);
var state_33530__$1 = state_33530;
var statearr_33540_34952 = state_33530__$1;
(statearr_33540_34952[(2)] = inst_33514);

(statearr_33540_34952[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (3))){
var inst_33489 = (state_33530[(10)]);
var inst_33488 = (state_33530[(11)]);
var inst_33491 = (inst_33489 < inst_33488);
var inst_33492 = inst_33491;
var state_33530__$1 = state_33530;
if(cljs.core.truth_(inst_33492)){
var statearr_33541_34980 = state_33530__$1;
(statearr_33541_34980[(1)] = (5));

} else {
var statearr_33542_34983 = state_33530__$1;
(statearr_33542_34983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (12))){
var state_33530__$1 = state_33530;
var statearr_33543_34987 = state_33530__$1;
(statearr_33543_34987[(2)] = null);

(statearr_33543_34987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (2))){
var inst_33480 = (state_33530[(2)]);
var inst_33485 = cljs.core.seq(inst_33480);
var inst_33486 = inst_33485;
var inst_33487 = null;
var inst_33488 = (0);
var inst_33489 = (0);
var state_33530__$1 = (function (){var statearr_33544 = state_33530;
(statearr_33544[(9)] = inst_33486);

(statearr_33544[(12)] = inst_33487);

(statearr_33544[(11)] = inst_33488);

(statearr_33544[(10)] = inst_33489);

return statearr_33544;
})();
var statearr_33545_34995 = state_33530__$1;
(statearr_33545_34995[(2)] = null);

(statearr_33545_34995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (19))){
var inst_33503 = (state_33530[(7)]);
var inst_33517 = (state_33530[(2)]);
var inst_33518 = cljs.core.next(inst_33503);
var inst_33486 = inst_33518;
var inst_33487 = null;
var inst_33488 = (0);
var inst_33489 = (0);
var state_33530__$1 = (function (){var statearr_33546 = state_33530;
(statearr_33546[(13)] = inst_33517);

(statearr_33546[(9)] = inst_33486);

(statearr_33546[(12)] = inst_33487);

(statearr_33546[(11)] = inst_33488);

(statearr_33546[(10)] = inst_33489);

return statearr_33546;
})();
var statearr_33547_34996 = state_33530__$1;
(statearr_33547_34996[(2)] = null);

(statearr_33547_34996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (11))){
var inst_33503 = (state_33530[(7)]);
var inst_33505 = cljs.core.chunked_seq_QMARK_(inst_33503);
var state_33530__$1 = state_33530;
if(inst_33505){
var statearr_33548_34999 = state_33530__$1;
(statearr_33548_34999[(1)] = (14));

} else {
var statearr_33549_35000 = state_33530__$1;
(statearr_33549_35000[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (9))){
var state_33530__$1 = state_33530;
var statearr_33550_35001 = state_33530__$1;
(statearr_33550_35001[(2)] = null);

(statearr_33550_35001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (5))){
var inst_33487 = (state_33530[(12)]);
var inst_33489 = (state_33530[(10)]);
var inst_33494 = (state_33530[(14)]);
var inst_33494__$1 = cljs.core._nth(inst_33487,inst_33489);
var state_33530__$1 = (function (){var statearr_33551 = state_33530;
(statearr_33551[(14)] = inst_33494__$1);

return statearr_33551;
})();
if(cljs.core.truth_(inst_33494__$1)){
var statearr_33552_35004 = state_33530__$1;
(statearr_33552_35004[(1)] = (8));

} else {
var statearr_33553_35038 = state_33530__$1;
(statearr_33553_35038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (14))){
var inst_33503 = (state_33530[(7)]);
var inst_33507 = cljs.core.chunk_first(inst_33503);
var inst_33508 = cljs.core.chunk_rest(inst_33503);
var inst_33509 = cljs.core.count(inst_33507);
var inst_33486 = inst_33508;
var inst_33487 = inst_33507;
var inst_33488 = inst_33509;
var inst_33489 = (0);
var state_33530__$1 = (function (){var statearr_33557 = state_33530;
(statearr_33557[(9)] = inst_33486);

(statearr_33557[(12)] = inst_33487);

(statearr_33557[(11)] = inst_33488);

(statearr_33557[(10)] = inst_33489);

return statearr_33557;
})();
var statearr_33558_35039 = state_33530__$1;
(statearr_33558_35039[(2)] = null);

(statearr_33558_35039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (16))){
var inst_33521 = (state_33530[(2)]);
var state_33530__$1 = state_33530;
var statearr_33559_35047 = state_33530__$1;
(statearr_33559_35047[(2)] = inst_33521);

(statearr_33559_35047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (10))){
var inst_33489 = (state_33530[(10)]);
var inst_33486 = (state_33530[(9)]);
var inst_33487 = (state_33530[(12)]);
var inst_33488 = (state_33530[(11)]);
var inst_33499 = (state_33530[(2)]);
var inst_33500 = (inst_33489 + (1));
var tmp33554 = inst_33487;
var tmp33555 = inst_33488;
var tmp33556 = inst_33486;
var inst_33486__$1 = tmp33556;
var inst_33487__$1 = tmp33554;
var inst_33488__$1 = tmp33555;
var inst_33489__$1 = inst_33500;
var state_33530__$1 = (function (){var statearr_33560 = state_33530;
(statearr_33560[(15)] = inst_33499);

(statearr_33560[(9)] = inst_33486__$1);

(statearr_33560[(12)] = inst_33487__$1);

(statearr_33560[(11)] = inst_33488__$1);

(statearr_33560[(10)] = inst_33489__$1);

return statearr_33560;
})();
var statearr_33561_35063 = state_33530__$1;
(statearr_33561_35063[(2)] = null);

(statearr_33561_35063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (18))){
var state_33530__$1 = state_33530;
var statearr_33562_35064 = state_33530__$1;
(statearr_33562_35064[(2)] = null);

(statearr_33562_35064[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33531 === (8))){
var inst_33494 = (state_33530[(14)]);
var inst_33496 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33494);
var state_33530__$1 = state_33530;
var statearr_33563_35065 = state_33530__$1;
(statearr_33563_35065[(2)] = inst_33496);

(statearr_33563_35065[(1)] = (10));


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
var bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto____1 = (function (state_33530){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33530);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33565){var ex__24105__auto__ = e33565;
var statearr_33566_35087 = state_33530;
(statearr_33566_35087[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33530[(4)]))){
var statearr_33567_35089 = state_33530;
(statearr_33567_35089[(1)] = cljs.core.first((state_33530[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35094 = state_33530;
state_33530 = G__35094;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto__ = function(state_33530){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$handle_output_$_state_machine__24102__auto____1.call(this,state_33530);
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
var data_url_35167 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(img);
var canvas_hiccup_35168 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((bb_web_ds_tools.runtime.webr.get_width(img) * s) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),((bb_web_ds_tools.runtime.webr.get_height(img) * s) | (0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_url_35167),")"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null)], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),canvas_hiccup_35168,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));


var G__35175 = seq__33569;
var G__35176 = chunk__33570;
var G__35177 = count__33571;
var G__35178 = (i__33572 + (1));
seq__33569 = G__35175;
chunk__33570 = G__35176;
count__33571 = G__35177;
i__33572 = G__35178;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__33569);
if(temp__5825__auto__){
var seq__33569__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33569__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__33569__$1);
var G__35179 = cljs.core.chunk_rest(seq__33569__$1);
var G__35180 = c__5548__auto__;
var G__35181 = cljs.core.count(c__5548__auto__);
var G__35182 = (0);
seq__33569 = G__35179;
chunk__33570 = G__35180;
count__33571 = G__35181;
i__33572 = G__35182;
continue;
} else {
var img = cljs.core.first(seq__33569__$1);
var data_url_35183 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(img);
var canvas_hiccup_35184 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((bb_web_ds_tools.runtime.webr.get_width(img) * s) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),((bb_web_ds_tools.runtime.webr.get_height(img) * s) | (0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_url_35183),")"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null)], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),canvas_hiccup_35184,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));


var G__35187 = cljs.core.next(seq__33569__$1);
var G__35188 = null;
var G__35189 = (0);
var G__35190 = (0);
seq__33569 = G__35187;
chunk__33570 = G__35188;
count__33571 = G__35189;
i__33572 = G__35190;
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
var statearr_33628_35206 = state_33626__$1;
(statearr_33628_35206[(2)] = inst_33594);

(statearr_33628_35206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (1))){
var state_33626__$1 = state_33626;
var statearr_33629_35207 = state_33626__$1;
(statearr_33629_35207[(2)] = null);

(statearr_33629_35207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (4))){
var inst_33573 = (state_33626[(2)]);
var state_33626__$1 = (function (){var statearr_33630 = state_33626;
(statearr_33630[(8)] = inst_33573);

return statearr_33630;
})();
var statearr_33631_35208 = state_33626__$1;
(statearr_33631_35208[(2)] = false);

(statearr_33631_35208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (15))){
var inst_33608 = (state_33626[(9)]);
var state_33626__$1 = state_33626;
var statearr_33632_35209 = state_33626__$1;
(statearr_33632_35209[(2)] = inst_33608);

(statearr_33632_35209[(1)] = (16));


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
var statearr_33634_35210 = state_33626__$1;
(statearr_33634_35210[(1)] = (14));

} else {
var statearr_33635_35211 = state_33626__$1;
(statearr_33635_35211[(1)] = (15));

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
var statearr_33637_35212 = state_33626__$1;
(statearr_33637_35212[(1)] = (7));

} else {
var statearr_33638_35213 = state_33626__$1;
(statearr_33638_35213[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (17))){
var inst_33607 = (state_33626[(10)]);
var inst_33617 = (function(){throw inst_33607})();
var state_33626__$1 = state_33626;
var statearr_33639_35214 = state_33626__$1;
(statearr_33639_35214[(2)] = inst_33617);

(statearr_33639_35214[(1)] = (19));


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
var statearr_33642_35289 = state_33626__$1;
(statearr_33642_35289[(2)] = inst_33621);

(statearr_33642_35289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (11))){
var inst_33589 = (state_33626[(7)]);
var state_33626__$1 = state_33626;
var statearr_33644_35290 = state_33626__$1;
(statearr_33644_35290[(2)] = inst_33589);

(statearr_33644_35290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (9))){
var inst_33597 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
if(cljs.core.truth_(inst_33597)){
var statearr_33645_35291 = state_33626__$1;
(statearr_33645_35291[(1)] = (10));

} else {
var statearr_33646_35292 = state_33626__$1;
(statearr_33646_35292[(1)] = (11));

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
var statearr_33648_35293 = state_33626__$1;
(statearr_33648_35293[(5)] = ex33643);


var statearr_33649_35294 = state_33626__$1;
(statearr_33649_35294[(1)] = (4));

(statearr_33649_35294[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (14))){
var inst_33607 = (state_33626[(10)]);
var inst_33610 = cljs.core.ex_data(inst_33607);
var inst_33611 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33610);
var inst_33612 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33611,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33626__$1 = state_33626;
var statearr_33650_35295 = state_33626__$1;
(statearr_33650_35295[(2)] = inst_33612);

(statearr_33650_35295[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (16))){
var inst_33615 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
if(cljs.core.truth_(inst_33615)){
var statearr_33651_35296 = state_33626__$1;
(statearr_33651_35296[(1)] = (17));

} else {
var statearr_33652_35297 = state_33626__$1;
(statearr_33652_35297[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (10))){
var inst_33589 = (state_33626[(7)]);
var inst_33599 = (function(){throw inst_33589})();
var state_33626__$1 = state_33626;
var statearr_33653_35298 = state_33626__$1;
(statearr_33653_35298[(2)] = inst_33599);

(statearr_33653_35298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (18))){
var inst_33607 = (state_33626[(10)]);
var state_33626__$1 = state_33626;
var statearr_33654_35299 = state_33626__$1;
(statearr_33654_35299[(2)] = inst_33607);

(statearr_33654_35299[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (8))){
var inst_33590 = (state_33626[(11)]);
var state_33626__$1 = state_33626;
var statearr_33655_35300 = state_33626__$1;
(statearr_33655_35300[(2)] = inst_33590);

(statearr_33655_35300[(1)] = (9));


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
var statearr_33658_35312 = state_33626;
(statearr_33658_35312[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33626[(4)]))){
var statearr_33659_35313 = state_33626;
(statearr_33659_35313[(1)] = cljs.core.first((state_33626[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35314 = state_33626;
state_33626 = G__35314;
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
var statearr_33740_35315 = state_33737__$1;
(statearr_33740_35315[(1)] = (21));

} else {
var statearr_33741_35316 = state_33737__$1;
(statearr_33741_35316[(1)] = (22));

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
var statearr_33744_35317 = state_33737__$1;
(statearr_33744_35317[(2)] = inst_33725);

(statearr_33744_35317[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (1))){
var state_33737__$1 = state_33737;
var statearr_33745_35318 = state_33737__$1;
(statearr_33745_35318[(2)] = null);

(statearr_33745_35318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (24))){
var inst_33699 = (state_33737[(7)]);
var inst_33709 = (function(){throw inst_33699})();
var state_33737__$1 = state_33737;
var statearr_33746_35319 = state_33737__$1;
(statearr_33746_35319[(2)] = inst_33709);

(statearr_33746_35319[(1)] = (26));


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
var statearr_33747_35320 = state_33737__$1;
(statearr_33747_35320[(2)] = inst_33666);

(statearr_33747_35320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (15))){
var inst_33679 = (state_33737[(10)]);
var state_33737__$1 = state_33737;
var statearr_33748_35321 = state_33737__$1;
(statearr_33748_35321[(2)] = inst_33679);

(statearr_33748_35321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (21))){
var inst_33699 = (state_33737[(7)]);
var inst_33702 = cljs.core.ex_data(inst_33699);
var inst_33703 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33702);
var inst_33704 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33703,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33737__$1 = state_33737;
var statearr_33749_35322 = state_33737__$1;
(statearr_33749_35322[(2)] = inst_33704);

(statearr_33749_35322[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (13))){
var inst_33687 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
if(cljs.core.truth_(inst_33687)){
var statearr_33750_35323 = state_33737__$1;
(statearr_33750_35323[(1)] = (14));

} else {
var statearr_33751_35324 = state_33737__$1;
(statearr_33751_35324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (22))){
var inst_33700 = (state_33737[(8)]);
var state_33737__$1 = state_33737;
var statearr_33752_35325 = state_33737__$1;
(statearr_33752_35325[(2)] = inst_33700);

(statearr_33752_35325[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (29))){
var inst_33718 = (state_33737[(2)]);
var inst_33719 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(result);
var state_33737__$1 = (function (){var statearr_33753 = state_33737;
(statearr_33753[(11)] = inst_33718);

return statearr_33753;
})();
var statearr_33754_35326 = state_33737__$1;
(statearr_33754_35326[(2)] = inst_33719);

(statearr_33754_35326[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (6))){
var inst_33674 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
if(cljs.core.truth_(inst_33674)){
var statearr_33755_35327 = state_33737__$1;
(statearr_33755_35327[(1)] = (7));

} else {
var statearr_33756_35328 = state_33737__$1;
(statearr_33756_35328[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (28))){
var inst_33728 = (state_33737[(2)]);
var inst_33729 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_33730 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_33728];
var inst_33731 = cljs.core.PersistentHashMap.fromArrays(inst_33729,inst_33730);
var inst_33732 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33731);
var _ = (function (){var statearr_33759 = state_33737;
(statearr_33759[(4)] = cljs.core.rest((state_33737[(4)])));

return statearr_33759;
})();
var state_33737__$1 = state_33737;
var statearr_33760_35329 = state_33737__$1;
(statearr_33760_35329[(2)] = inst_33732);

(statearr_33760_35329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (25))){
var inst_33699 = (state_33737[(7)]);
var state_33737__$1 = state_33737;
var statearr_33761_35330 = state_33737__$1;
(statearr_33761_35330[(2)] = inst_33699);

(statearr_33761_35330[(1)] = (26));


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
var statearr_33766_35351 = state_33737__$1;
(statearr_33766_35351[(2)] = inst_33680);

(statearr_33766_35351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (2))){
var _ = (function (){var statearr_33767 = state_33737;
(statearr_33767[(4)] = cljs.core.cons((5),(state_33737[(4)])));

return statearr_33767;
})();
var inst_33672 = bb_web_ds_tools.runtime.webr.is_dataframe_QMARK_(shelter,result);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33737__$1,(6),inst_33672);
} else {
if((state_val_33738 === (23))){
var inst_33707 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
if(cljs.core.truth_(inst_33707)){
var statearr_33771_35352 = state_33737__$1;
(statearr_33771_35352[(1)] = (24));

} else {
var statearr_33773_35353 = state_33737__$1;
(statearr_33773_35353[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (19))){
var inst_33715 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33774_35354 = state_33737__$1;
(statearr_33774_35354[(2)] = inst_33715);

(statearr_33774_35354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (11))){
var inst_33679 = (state_33737[(10)]);
var inst_33682 = cljs.core.ex_data(inst_33679);
var inst_33683 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33682);
var inst_33684 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33683,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33737__$1 = state_33737;
var statearr_33776_35355 = state_33737__$1;
(statearr_33776_35355[(2)] = inst_33684);

(statearr_33776_35355[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (9))){
var inst_33717 = (state_33737[(2)]);
var state_33737__$1 = (function (){var statearr_33780 = state_33737;
(statearr_33780[(9)] = inst_33717);

return statearr_33780;
})();
var statearr_33783_35356 = state_33737__$1;
(statearr_33783_35356[(2)] = null);

(statearr_33783_35356[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (5))){
var _ = (function (){var statearr_33784 = state_33737;
(statearr_33784[(4)] = cljs.core.rest((state_33737[(4)])));

return statearr_33784;
})();
var state_33737__$1 = state_33737;
var ex33775 = (state_33737__$1[(2)]);
var statearr_33785_35357 = state_33737__$1;
(statearr_33785_35357[(5)] = ex33775);


var statearr_33786_35358 = state_33737__$1;
(statearr_33786_35358[(1)] = (4));

(statearr_33786_35358[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (14))){
var inst_33679 = (state_33737[(10)]);
var inst_33689 = (function(){throw inst_33679})();
var state_33737__$1 = state_33737;
var statearr_33788_35359 = state_33737__$1;
(statearr_33788_35359[(2)] = inst_33689);

(statearr_33788_35359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (26))){
var inst_33712 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33790_35360 = state_33737__$1;
(statearr_33790_35360[(2)] = inst_33712);

(statearr_33790_35360[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (16))){
var inst_33692 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33791_35361 = state_33737__$1;
(statearr_33791_35361[(2)] = inst_33692);

(statearr_33791_35361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (30))){
var _ = (function (){var statearr_33793 = state_33737;
(statearr_33793[(4)] = cljs.core.rest((state_33737[(4)])));

return statearr_33793;
})();
var state_33737__$1 = state_33737;
var ex33789 = (state_33737__$1[(2)]);
var statearr_33794_35362 = state_33737__$1;
(statearr_33794_35362[(5)] = ex33789);


if((ex33789 instanceof Error)){
var statearr_33795_35363 = state_33737__$1;
(statearr_33795_35363[(1)] = (29));

(statearr_33795_35363[(5)] = null);

} else {
throw ex33789;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (10))){
var inst_33679 = (state_33737[(10)]);
var inst_33680 = (state_33737[(13)]);
var inst_33679__$1 = (state_33737[(2)]);
var inst_33680__$1 = (inst_33679__$1 instanceof cljs.core.ExceptionInfo);
var state_33737__$1 = (function (){var statearr_33798 = state_33737;
(statearr_33798[(10)] = inst_33679__$1);

(statearr_33798[(13)] = inst_33680__$1);

return statearr_33798;
})();
if(cljs.core.truth_(inst_33680__$1)){
var statearr_33800_35377 = state_33737__$1;
(statearr_33800_35377[(1)] = (11));

} else {
var statearr_33801_35378 = state_33737__$1;
(statearr_33801_35378[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (18))){
var inst_33694 = (state_33737[(12)]);
var state_33737__$1 = state_33737;
var statearr_33802_35379 = state_33737__$1;
(statearr_33802_35379[(2)] = inst_33694);

(statearr_33802_35379[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (8))){
var inst_33694 = (state_33737[(12)]);
var inst_33694__$1 = bb_web_ds_tools.runtime.webr.to_js(result);
var inst_33695 = (inst_33694__$1 instanceof Promise);
var state_33737__$1 = (function (){var statearr_33806 = state_33737;
(statearr_33806[(12)] = inst_33694__$1);

return statearr_33806;
})();
if(cljs.core.truth_(inst_33695)){
var statearr_33807_35380 = state_33737__$1;
(statearr_33807_35380[(1)] = (17));

} else {
var statearr_33808_35381 = state_33737__$1;
(statearr_33808_35381[(1)] = (18));

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
var statearr_33813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33813[(0)] = bb_web_ds_tools$runtime$webr$handle_result_$_state_machine__24102__auto__);

(statearr_33813[(1)] = (1));

return statearr_33813;
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
}catch (e33817){var ex__24105__auto__ = e33817;
var statearr_33818_35382 = state_33737;
(statearr_33818_35382[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33737[(4)]))){
var statearr_33819_35383 = state_33737;
(statearr_33819_35383[(1)] = cljs.core.first((state_33737[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35384 = state_33737;
state_33737 = G__35384;
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
var state__24150__auto__ = (function (){var statearr_33822 = f__24149__auto__();
(statearr_33822[(6)] = c__24148__auto__);

return statearr_33822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__24150__auto__);
}));

return c__24148__auto__;
});
bb_web_ds_tools.runtime.webr.handle_error = (function bb_web_ds_tools$runtime$webr$handle_error(webr,shelter,e){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33858){
var state_val_33859 = (state_33858[(1)]);
if((state_val_33859 === (7))){
var inst_33846 = (state_33858[(7)]);
var inst_33846__$1 = (state_33858[(2)]);
var inst_33847 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var state_33858__$1 = (function (){var statearr_33860 = state_33858;
(statearr_33860[(7)] = inst_33846__$1);

(statearr_33860[(8)] = inst_33847);

return statearr_33860;
})();
if(cljs.core.truth_(inst_33846__$1)){
var statearr_33861_35387 = state_33858__$1;
(statearr_33861_35387[(1)] = (9));

} else {
var statearr_33862_35388 = state_33858__$1;
(statearr_33862_35388[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (1))){
var inst_33829 = (state_33858[(9)]);
var inst_33829__$1 = cljs.core.object_QMARK_(e);
var state_33858__$1 = (function (){var statearr_33863 = state_33858;
(statearr_33863[(9)] = inst_33829__$1);

return statearr_33863;
})();
if(inst_33829__$1){
var statearr_33864_35390 = state_33858__$1;
(statearr_33864_35390[(1)] = (2));

} else {
var statearr_33865_35391 = state_33858__$1;
(statearr_33865_35391[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (4))){
var inst_33836 = (state_33858[(2)]);
var state_33858__$1 = state_33858;
if(cljs.core.truth_(inst_33836)){
var statearr_33870_35392 = state_33858__$1;
(statearr_33870_35392[(1)] = (5));

} else {
var statearr_33871_35393 = state_33858__$1;
(statearr_33871_35393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (6))){
var state_33858__$1 = state_33858;
var statearr_33872_35394 = state_33858__$1;
(statearr_33872_35394[(2)] = null);

(statearr_33872_35394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (3))){
var inst_33829 = (state_33858[(9)]);
var state_33858__$1 = state_33858;
var statearr_33877_35397 = state_33858__$1;
(statearr_33877_35397[(2)] = inst_33829);

(statearr_33877_35397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (2))){
var inst_33832 = e.message;
var inst_33833 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33832,"Promise error");
var state_33858__$1 = state_33858;
var statearr_33879_35399 = state_33858__$1;
(statearr_33879_35399[(2)] = inst_33833);

(statearr_33879_35399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (11))){
var inst_33847 = (state_33858[(8)]);
var inst_33853 = (state_33858[(2)]);
var inst_33854 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_33853];
var inst_33855 = cljs.core.PersistentHashMap.fromArrays(inst_33847,inst_33854);
var inst_33856 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33855);
var state_33858__$1 = state_33858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33858__$1,inst_33856);
} else {
if((state_val_33859 === (9))){
var inst_33846 = (state_33858[(7)]);
var state_33858__$1 = state_33858;
var statearr_33880_35400 = state_33858__$1;
(statearr_33880_35400[(2)] = inst_33846);

(statearr_33880_35400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (5))){
var inst_33839 = bb_web_ds_tools.runtime.webr.attempt_print_error(webr,shelter,e);
var state_33858__$1 = state_33858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33858__$1,(8),inst_33839);
} else {
if((state_val_33859 === (10))){
var inst_33851 = bb_web_ds_tools.runtime.webr.get_error_details(e);
var state_33858__$1 = state_33858;
var statearr_33881_35401 = state_33858__$1;
(statearr_33881_35401[(2)] = inst_33851);

(statearr_33881_35401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (8))){
var inst_33841 = (state_33858[(2)]);
var state_33858__$1 = state_33858;
var statearr_33882_35402 = state_33858__$1;
(statearr_33882_35402[(2)] = inst_33841);

(statearr_33882_35402[(1)] = (7));


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
var statearr_33887 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33887[(0)] = bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto__);

(statearr_33887[(1)] = (1));

return statearr_33887;
});
var bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto____1 = (function (state_33858){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33858);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e33888){var ex__24105__auto__ = e33888;
var statearr_33889_35403 = state_33858;
(statearr_33889_35403[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33858[(4)]))){
var statearr_33890_35404 = state_33858;
(statearr_33890_35404[(1)] = cljs.core.first((state_33858[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35408 = state_33858;
state_33858 = G__35408;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto__ = function(state_33858){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto____1.call(this,state_33858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$handle_error_$_state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_33891 = f__24149__auto__();
(statearr_33891[(6)] = c__24148__auto__);

return statearr_33891;
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
var len__5749__auto___35412 = arguments.length;
var i__5750__auto___35413 = (0);
while(true){
if((i__5750__auto___35413 < len__5749__auto___35412)){
args__5755__auto__.push((arguments[i__5750__auto___35413]));

var G__35414 = (i__5750__auto___35413 + (1));
i__5750__auto___35413 = G__35414;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$core$IFn$_invoke$arity$variadic = (function (code,p__33894){
var vec__33895 = p__33894;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33895,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__24148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__24149__auto__ = (function (){var switch__24101__auto__ = (function (state_33969){
var state_val_33970 = (state_33969[(1)]);
if((state_val_33970 === (7))){
var inst_33960 = (state_33969[(2)]);
var state_33969__$1 = state_33969;
var statearr_33971_35419 = state_33969__$1;
(statearr_33971_35419[(2)] = inst_33960);

(statearr_33971_35419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (20))){
var inst_33957 = (state_33969[(2)]);
var _ = (function (){var statearr_33972 = state_33969;
(statearr_33972[(4)] = cljs.core.rest((state_33969[(4)])));

return statearr_33972;
})();
var state_33969__$1 = state_33969;
var statearr_33973_35425 = state_33969__$1;
(statearr_33973_35425[(2)] = inst_33957);

(statearr_33973_35425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (1))){
var inst_33898 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_33899 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_33900 = cljs.core.PersistentHashMap.fromArrays(inst_33898,inst_33899);
var inst_33901 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33900);
var inst_33902 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_33903 = bb_web_ds_tools.runtime.webr.create_shelter(inst_33902);
var state_33969__$1 = (function (){var statearr_33974 = state_33969;
(statearr_33974[(7)] = inst_33901);

return statearr_33974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33969__$1,(2),inst_33903);
} else {
if((state_val_33970 === (4))){
var inst_33962 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_33963 = [new cljs.core.Keyword(null,"error","error",-978969032),"Failed to create shelter"];
var inst_33964 = cljs.core.PersistentHashMap.fromArrays(inst_33962,inst_33963);
var inst_33965 = bb_web_ds_tools.runtime.webr.portal_submit(inst_33964);
var state_33969__$1 = state_33969;
var statearr_33975_35428 = state_33969__$1;
(statearr_33975_35428[(2)] = inst_33965);

(statearr_33975_35428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (15))){
var inst_33941 = (state_33969[(2)]);
var state_33969__$1 = state_33969;
if(cljs.core.truth_(inst_33941)){
var statearr_33976_35431 = state_33969__$1;
(statearr_33976_35431[(1)] = (16));

} else {
var statearr_33977_35432 = state_33969__$1;
(statearr_33977_35432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (13))){
var inst_33933 = (state_33969[(8)]);
var inst_33936 = cljs.core.ex_data(inst_33933);
var inst_33937 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_33936);
var inst_33938 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33937,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_33969__$1 = state_33969;
var statearr_33978_35437 = state_33969__$1;
(statearr_33978_35437[(2)] = inst_33938);

(statearr_33978_35437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (6))){
var inst_33905 = (state_33969[(9)]);
var _ = (function (){var statearr_33979 = state_33969;
(statearr_33979[(4)] = cljs.core.cons((8),(state_33969[(4)])));

return statearr_33979;
})();
var ___$1 = (function (){var statearr_33980 = state_33969;
(statearr_33980[(4)] = cljs.core.cons((11),(state_33969[(4)])));

return statearr_33980;
})();
var inst_33926 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_33927 = [true];
var inst_33928 = cljs.core.PersistentHashMap.fromArrays(inst_33926,inst_33927);
var inst_33929 = cljs.core.clj__GT_js(inst_33928);
var inst_33930 = bb_web_ds_tools.runtime.webr.capture_r(inst_33905,code,inst_33929);
var inst_33931 = cljs.core.async.interop.p__GT_c(inst_33930);
var state_33969__$1 = state_33969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33969__$1,(12),inst_33931);
} else {
if((state_val_33970 === (17))){
var inst_33933 = (state_33969[(8)]);
var state_33969__$1 = state_33969;
var statearr_33981_35443 = state_33969__$1;
(statearr_33981_35443[(2)] = inst_33933);

(statearr_33981_35443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (3))){
var state_33969__$1 = state_33969;
var statearr_33982_35444 = state_33969__$1;
(statearr_33982_35444[(2)] = null);

(statearr_33982_35444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (12))){
var inst_33933 = (state_33969[(8)]);
var inst_33934 = (state_33969[(10)]);
var inst_33933__$1 = (state_33969[(2)]);
var inst_33934__$1 = (inst_33933__$1 instanceof cljs.core.ExceptionInfo);
var state_33969__$1 = (function (){var statearr_33983 = state_33969;
(statearr_33983[(8)] = inst_33933__$1);

(statearr_33983[(10)] = inst_33934__$1);

return statearr_33983;
})();
if(cljs.core.truth_(inst_33934__$1)){
var statearr_33984_35447 = state_33969__$1;
(statearr_33984_35447[(1)] = (13));

} else {
var statearr_33985_35450 = state_33969__$1;
(statearr_33985_35450[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (2))){
var inst_33905 = (state_33969[(9)]);
var inst_33905__$1 = (state_33969[(2)]);
var state_33969__$1 = (function (){var statearr_33987 = state_33969;
(statearr_33987[(9)] = inst_33905__$1);

return statearr_33987;
})();
if(cljs.core.truth_(inst_33905__$1)){
var statearr_33988_35455 = state_33969__$1;
(statearr_33988_35455[(1)] = (3));

} else {
var statearr_33989_35456 = state_33969__$1;
(statearr_33989_35456[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (19))){
var inst_33949 = (state_33969[(11)]);
var inst_33905 = (state_33969[(9)]);
var inst_33950 = (state_33969[(12)]);
var inst_33953 = (state_33969[(2)]);
var inst_33954 = bb_web_ds_tools.runtime.webr.handle_images(inst_33949,opts);
var inst_33955 = bb_web_ds_tools.runtime.webr.handle_result(inst_33905,inst_33950);
var state_33969__$1 = (function (){var statearr_33990 = state_33969;
(statearr_33990[(13)] = inst_33953);

(statearr_33990[(14)] = inst_33954);

return statearr_33990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33969__$1,(20),inst_33955);
} else {
if((state_val_33970 === (11))){
var _ = (function (){var statearr_33991 = state_33969;
(statearr_33991[(4)] = cljs.core.rest((state_33969[(4)])));

return statearr_33991;
})();
var state_33969__$1 = state_33969;
var ex33986 = (state_33969__$1[(2)]);
var statearr_33992_35464 = state_33969__$1;
(statearr_33992_35464[(5)] = ex33986);


var statearr_33993_35466 = state_33969__$1;
(statearr_33993_35466[(1)] = (9));

(statearr_33993_35466[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (9))){
var inst_33905 = (state_33969[(9)]);
var inst_33912 = (state_33969[(2)]);
var inst_33913 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_33914 = bb_web_ds_tools.runtime.webr.handle_error(inst_33913,inst_33905,inst_33912);
var state_33969__$1 = state_33969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33969__$1,(10),inst_33914);
} else {
if((state_val_33970 === (5))){
var inst_33967 = (state_33969[(2)]);
var state_33969__$1 = state_33969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33969__$1,inst_33967);
} else {
if((state_val_33970 === (14))){
var inst_33934 = (state_33969[(10)]);
var state_33969__$1 = state_33969;
var statearr_33994_35469 = state_33969__$1;
(statearr_33994_35469[(2)] = inst_33934);

(statearr_33994_35469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (16))){
var inst_33933 = (state_33969[(8)]);
var inst_33943 = (function(){throw inst_33933})();
var state_33969__$1 = state_33969;
var statearr_33995_35471 = state_33969__$1;
(statearr_33995_35471[(2)] = inst_33943);

(statearr_33995_35471[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (10))){
var inst_33916 = (state_33969[(2)]);
var state_33969__$1 = state_33969;
var statearr_33996_35475 = state_33969__$1;
(statearr_33996_35475[(2)] = inst_33916);

(statearr_33996_35475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (18))){
var inst_33946 = (state_33969[(2)]);
var inst_33947 = bb_web_ds_tools.runtime.webr.get_result_props(inst_33946);
var inst_33948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33947,(0),null);
var inst_33949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33947,(1),null);
var inst_33950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33947,(2),null);
var inst_33951 = bb_web_ds_tools.runtime.webr.handle_output(inst_33948);
var state_33969__$1 = (function (){var statearr_34002 = state_33969;
(statearr_34002[(11)] = inst_33949);

(statearr_34002[(12)] = inst_33950);

return statearr_34002;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33969__$1,(19),inst_33951);
} else {
if((state_val_33970 === (8))){
var inst_33905 = (state_33969[(9)]);
var _ = (function (){var statearr_34003 = state_33969;
(statearr_34003[(4)] = cljs.core.rest((state_33969[(4)])));

return statearr_34003;
})();
var inst_33908 = (state_33969[(2)]);
var inst_33909 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_33905);
var ___$1 = (function (){var temp__5825__auto__ = (state_33969[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__23334__auto__ = temp__5825__auto__;
throw e__23334__auto__;
} else {
return null;
}
})();
var state_33969__$1 = (function (){var statearr_34004 = state_33969;
(statearr_34004[(15)] = inst_33909);

return statearr_34004;
})();
var statearr_34005_35482 = state_33969__$1;
(statearr_34005_35482[(2)] = inst_33908);

(statearr_34005_35482[(1)] = (7));


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
var statearr_34006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34006[(0)] = bb_web_ds_tools$runtime$webr$state_machine__24102__auto__);

(statearr_34006[(1)] = (1));

return statearr_34006;
});
var bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1 = (function (state_33969){
while(true){
var ret_value__24103__auto__ = (function (){try{while(true){
var result__24104__auto__ = switch__24101__auto__(state_33969);
if(cljs.core.keyword_identical_QMARK_(result__24104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24104__auto__;
}
break;
}
}catch (e34007){var ex__24105__auto__ = e34007;
var statearr_34008_35490 = state_33969;
(statearr_34008_35490[(2)] = ex__24105__auto__);


if(cljs.core.seq((state_33969[(4)]))){
var statearr_34009_35492 = state_33969;
(statearr_34009_35492[(1)] = cljs.core.first((state_33969[(4)])));

} else {
throw ex__24105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35493 = state_33969;
state_33969 = G__35493;
continue;
} else {
return ret_value__24103__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__ = function(state_33969){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1.call(this,state_33969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__24102__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__24102__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__24102__auto__;
})()
})();
var state__24150__auto__ = (function (){var statearr_34011 = f__24149__auto__();
(statearr_34011[(6)] = c__24148__auto__);

return statearr_34011;
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
(bb_web_ds_tools.runtime.webr.eval_in_main.cljs$lang$applyTo = (function (seq33892){
var G__33893 = cljs.core.first(seq33892);
var seq33892__$1 = cljs.core.next(seq33892);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33893,seq33892__$1);
}));


//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
