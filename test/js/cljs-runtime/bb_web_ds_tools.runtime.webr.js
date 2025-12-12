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
var len__5749__auto___50764 = arguments.length;
var i__5750__auto___50765 = (0);
while(true){
if((i__5750__auto___50765 < len__5749__auto___50764)){
args__5755__auto__.push((arguments[i__5750__auto___50765]));

var G__50766 = (i__5750__auto___50765 + (1));
i__5750__auto___50765 = G__50766;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__49708,p__49709){
var map__49710 = p__49708;
var map__49710__$1 = cljs.core.__destructure_map(map__49710);
var value = map__49710__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49710__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__49711 = p__49709;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49711,(0),null);
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
if(cljs.core.truth_((function (){var G__49722 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__49721 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__49721.cljs$core$IFn$_invoke$arity$1 ? fexpr__49721.cljs$core$IFn$_invoke$arity$1(G__49722) : fexpr__49721.call(null,G__49722));
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
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_49726){
var state_val_49727 = (state_49726[(1)]);
if((state_val_49727 === (1))){
var state_49726__$1 = state_49726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49726__$1,(2),bb_web_ds_tools.runtime.webr.input_buffer,text);
} else {
if((state_val_49727 === (2))){
var inst_49724 = (state_49726[(2)]);
var state_49726__$1 = state_49726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49726__$1,inst_49724);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0 = (function (){
var statearr_49728 = [null,null,null,null,null,null,null];
(statearr_49728[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32396__auto__);

(statearr_49728[(1)] = (1));

return statearr_49728;
});
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1 = (function (state_49726){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_49726);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e49729){var ex__32399__auto__ = e49729;
var statearr_49730_50767 = state_49726;
(statearr_49730_50767[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49726[(4)]))){
var statearr_49731_50770 = state_49726;
(statearr_49731_50770[(1)] = cljs.core.first((state_49726[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50771 = state_49726;
state_49726 = G__50771;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = function(state_49726){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1.call(this,state_49726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_49736 = f__32477__auto__();
(statearr_49736[(6)] = c__32476__auto__);

return statearr_49736;
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
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_49820){
var state_val_49821 = (state_49820[(1)]);
if((state_val_49821 === (7))){
var inst_49816 = (state_49820[(2)]);
var state_49820__$1 = state_49820;
var statearr_49822_50775 = state_49820__$1;
(statearr_49822_50775[(2)] = inst_49816);

(statearr_49822_50775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (20))){
var inst_49791 = (state_49820[(7)]);
var inst_49795 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49791);
var state_49820__$1 = state_49820;
var statearr_49823_50776 = state_49820__$1;
(statearr_49823_50776[(2)] = inst_49795);

(statearr_49823_50776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (1))){
var inst_49737 = (state_49820[(8)]);
var inst_49737__$1 = msg.type;
var inst_49738 = msg.data;
var inst_49739 = ["stderr",null,"stdout",null];
var inst_49740 = (new cljs.core.PersistentArrayMap(null,2,inst_49739,null));
var inst_49741 = (new cljs.core.PersistentHashSet(null,inst_49740,null));
var inst_49742 = (inst_49741.cljs$core$IFn$_invoke$arity$1 ? inst_49741.cljs$core$IFn$_invoke$arity$1(inst_49737__$1) : inst_49741.call(null,inst_49737__$1));
var state_49820__$1 = (function (){var statearr_49824 = state_49820;
(statearr_49824[(8)] = inst_49737__$1);

(statearr_49824[(9)] = inst_49738);

return statearr_49824;
})();
if(cljs.core.truth_(inst_49742)){
var statearr_49825_50778 = state_49820__$1;
(statearr_49825_50778[(1)] = (2));

} else {
var statearr_49826_50779 = state_49820__$1;
(statearr_49826_50779[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (24))){
var inst_49814 = (state_49820[(2)]);
var state_49820__$1 = state_49820;
var statearr_49827_50780 = state_49820__$1;
(statearr_49827_50780[(2)] = inst_49814);

(statearr_49827_50780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (4))){
var inst_49818 = (state_49820[(2)]);
var state_49820__$1 = state_49820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49820__$1,inst_49818);
} else {
if((state_val_49821 === (15))){
var inst_49785 = (state_49820[(2)]);
var state_49820__$1 = state_49820;
if(cljs.core.truth_(inst_49785)){
var statearr_49828_50782 = state_49820__$1;
(statearr_49828_50782[(1)] = (16));

} else {
var statearr_49829_50783 = state_49820__$1;
(statearr_49829_50783[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (21))){
var inst_49737 = (state_49820[(8)]);
var inst_49797 = (state_49820[(2)]);
var inst_49800 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49802 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49737);
var inst_49803 = [inst_49802,inst_49797];
var inst_49804 = cljs.core.PersistentHashMap.fromArrays(inst_49800,inst_49803);
var _ = (function (){var statearr_49830 = state_49820;
(statearr_49830[(4)] = cljs.core.rest((state_49820[(4)])));

return statearr_49830;
})();
var state_49820__$1 = state_49820;
var statearr_49831_50784 = state_49820__$1;
(statearr_49831_50784[(2)] = inst_49804);

(statearr_49831_50784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (13))){
var inst_49772 = (state_49820[(10)]);
var inst_49780 = cljs.core.ex_data(inst_49772);
var inst_49781 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49780);
var inst_49782 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49781,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49820__$1 = state_49820;
var statearr_49832_50785 = state_49820__$1;
(statearr_49832_50785[(2)] = inst_49782);

(statearr_49832_50785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (22))){
var state_49820__$1 = state_49820;
var statearr_49833_50790 = state_49820__$1;
(statearr_49833_50790[(2)] = null);

(statearr_49833_50790[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (6))){
var state_49820__$1 = state_49820;
var statearr_49834_50791 = state_49820__$1;
(statearr_49834_50791[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (17))){
var inst_49772 = (state_49820[(10)]);
var state_49820__$1 = state_49820;
var statearr_49836_50792 = state_49820__$1;
(statearr_49836_50792[(2)] = inst_49772);

(statearr_49836_50792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (3))){
var inst_49737 = (state_49820[(8)]);
var inst_49749 = ["message",null,"warning",null];
var inst_49750 = (new cljs.core.PersistentArrayMap(null,2,inst_49749,null));
var inst_49751 = (new cljs.core.PersistentHashSet(null,inst_49750,null));
var inst_49752 = (inst_49751.cljs$core$IFn$_invoke$arity$1 ? inst_49751.cljs$core$IFn$_invoke$arity$1(inst_49737) : inst_49751.call(null,inst_49737));
var state_49820__$1 = state_49820;
if(cljs.core.truth_(inst_49752)){
var statearr_49837_50794 = state_49820__$1;
(statearr_49837_50794[(1)] = (5));

} else {
var statearr_49838_50798 = state_49820__$1;
(statearr_49838_50798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (12))){
var inst_49772 = (state_49820[(10)]);
var inst_49777 = (state_49820[(11)]);
var inst_49772__$1 = (state_49820[(2)]);
var inst_49777__$1 = (inst_49772__$1 instanceof cljs.core.ExceptionInfo);
var state_49820__$1 = (function (){var statearr_49839 = state_49820;
(statearr_49839[(10)] = inst_49772__$1);

(statearr_49839[(11)] = inst_49777__$1);

return statearr_49839;
})();
if(cljs.core.truth_(inst_49777__$1)){
var statearr_49840_50801 = state_49820__$1;
(statearr_49840_50801[(1)] = (13));

} else {
var statearr_49841_50802 = state_49820__$1;
(statearr_49841_50802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (2))){
var inst_49737 = (state_49820[(8)]);
var inst_49738 = (state_49820[(9)]);
var inst_49744 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49745 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49737);
var inst_49746 = [inst_49745,inst_49738];
var inst_49747 = cljs.core.PersistentHashMap.fromArrays(inst_49744,inst_49746);
var state_49820__$1 = state_49820;
var statearr_49842_50809 = state_49820__$1;
(statearr_49842_50809[(2)] = inst_49747);

(statearr_49842_50809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (23))){
var state_49820__$1 = state_49820;
var statearr_49844_50810 = state_49820__$1;
(statearr_49844_50810[(2)] = null);

(statearr_49844_50810[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (19))){
var inst_49792 = (state_49820[(12)]);
var state_49820__$1 = state_49820;
var statearr_49845_50811 = state_49820__$1;
(statearr_49845_50811[(2)] = inst_49792);

(statearr_49845_50811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (11))){
var _ = (function (){var statearr_49846 = state_49820;
(statearr_49846[(4)] = cljs.core.rest((state_49820[(4)])));

return statearr_49846;
})();
var state_49820__$1 = state_49820;
var ex49843 = (state_49820__$1[(2)]);
var statearr_49847_50812 = state_49820__$1;
(statearr_49847_50812[(5)] = ex49843);


var statearr_49848_50813 = state_49820__$1;
(statearr_49848_50813[(1)] = (10));

(statearr_49848_50813[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (9))){
var inst_49808 = (state_49820[(2)]);
var state_49820__$1 = state_49820;
var statearr_49849_50814 = state_49820__$1;
(statearr_49849_50814[(2)] = inst_49808);

(statearr_49849_50814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (5))){
var state_49820__$1 = state_49820;
var statearr_49850_50818 = state_49820__$1;
(statearr_49850_50818[(2)] = null);

(statearr_49850_50818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (14))){
var inst_49777 = (state_49820[(11)]);
var state_49820__$1 = state_49820;
var statearr_49851_50822 = state_49820__$1;
(statearr_49851_50822[(2)] = inst_49777);

(statearr_49851_50822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (16))){
var inst_49772 = (state_49820[(10)]);
var inst_49787 = (function(){throw inst_49772})();
var state_49820__$1 = state_49820;
var statearr_49852_50823 = state_49820__$1;
(statearr_49852_50823[(2)] = inst_49787);

(statearr_49852_50823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (10))){
var inst_49737 = (state_49820[(8)]);
var inst_49754 = (state_49820[(2)]);
var inst_49755 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49756 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49737);
var inst_49757 = [inst_49756,"Error decoding message"];
var inst_49758 = cljs.core.PersistentHashMap.fromArrays(inst_49755,inst_49757);
var state_49820__$1 = (function (){var statearr_49853 = state_49820;
(statearr_49853[(13)] = inst_49754);

return statearr_49853;
})();
var statearr_49854_50825 = state_49820__$1;
(statearr_49854_50825[(2)] = inst_49758);

(statearr_49854_50825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (18))){
var inst_49791 = (state_49820[(7)]);
var inst_49792 = (state_49820[(12)]);
var inst_49790 = (state_49820[(2)]);
var inst_49791__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49790,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_49792__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_49791__$1);
var state_49820__$1 = (function (){var statearr_49855 = state_49820;
(statearr_49855[(7)] = inst_49791__$1);

(statearr_49855[(12)] = inst_49792__$1);

return statearr_49855;
})();
if(cljs.core.truth_(inst_49792__$1)){
var statearr_49856_50826 = state_49820__$1;
(statearr_49856_50826[(1)] = (19));

} else {
var statearr_49857_50827 = state_49820__$1;
(statearr_49857_50827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49821 === (8))){
var inst_49738 = (state_49820[(9)]);
var _ = (function (){var statearr_49858 = state_49820;
(statearr_49858[(4)] = cljs.core.cons((11),(state_49820[(4)])));

return statearr_49858;
})();
var inst_49768 = bb_web_ds_tools.runtime.webr.to_js(inst_49738);
var inst_49770 = cljs.core.async.interop.p__GT_c(inst_49768);
var state_49820__$1 = state_49820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49820__$1,(12),inst_49770);
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
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto____1 = (function (state_49820){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_49820);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e49860){var ex__32399__auto__ = e49860;
var statearr_49861_50832 = state_49820;
(statearr_49861_50832[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49820[(4)]))){
var statearr_49862_50833 = state_49820;
(statearr_49862_50833[(1)] = cljs.core.first((state_49820[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50837 = state_49820;
state_49820 = G__50837;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto__ = function(state_49820){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32396__auto____1.call(this,state_49820);
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
var statearr_49915_50840 = state_49913__$1;
(statearr_49915_50840[(2)] = inst_49909);

(statearr_49915_50840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (1))){
var inst_49864 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_49913__$1 = state_49913;
if(cljs.core.truth_(inst_49864)){
var statearr_49916_50841 = state_49913__$1;
(statearr_49916_50841[(1)] = (2));

} else {
var statearr_49917_50842 = state_49913__$1;
(statearr_49917_50842[(1)] = (3));

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
var statearr_49918_50843 = state_49913__$1;
(statearr_49918_50843[(1)] = (16));

} else {
var statearr_49919_50844 = state_49913__$1;
(statearr_49919_50844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (13))){
var inst_49888 = (state_49913[(7)]);
var inst_49891 = cljs.core.ex_data(inst_49888);
var inst_49892 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49891);
var inst_49893 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49892,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49913__$1 = state_49913;
var statearr_49920_50848 = state_49913__$1;
(statearr_49920_50848[(2)] = inst_49893);

(statearr_49920_50848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (6))){
var inst_49907 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_49913__$1 = state_49913;
var statearr_49921_50853 = state_49913__$1;
(statearr_49921_50853[(2)] = inst_49907);

(statearr_49921_50853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (17))){
var inst_49888 = (state_49913[(7)]);
var state_49913__$1 = state_49913;
var statearr_49923_50854 = state_49913__$1;
(statearr_49923_50854[(2)] = inst_49888);

(statearr_49923_50854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (3))){
var inst_49868 = (typeof WebR !== 'undefined');
var state_49913__$1 = state_49913;
if(cljs.core.truth_(inst_49868)){
var statearr_49924_50855 = state_49913__$1;
(statearr_49924_50855[(1)] = (5));

} else {
var statearr_49925_50856 = state_49913__$1;
(statearr_49925_50856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (12))){
var inst_49888 = (state_49913[(7)]);
var inst_49889 = (state_49913[(8)]);
var inst_49888__$1 = (state_49913[(2)]);
var inst_49889__$1 = (inst_49888__$1 instanceof cljs.core.ExceptionInfo);
var state_49913__$1 = (function (){var statearr_49931 = state_49913;
(statearr_49931[(7)] = inst_49888__$1);

(statearr_49931[(8)] = inst_49889__$1);

return statearr_49931;
})();
if(cljs.core.truth_(inst_49889__$1)){
var statearr_49932_50860 = state_49913__$1;
(statearr_49932_50860[(1)] = (13));

} else {
var statearr_49934_50861 = state_49913__$1;
(statearr_49934_50861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (2))){
var inst_49866 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_49913__$1 = state_49913;
var statearr_49938_50862 = state_49913__$1;
(statearr_49938_50862[(2)] = inst_49866);

(statearr_49938_50862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (11))){
var _ = (function (){var statearr_49943 = state_49913;
(statearr_49943[(4)] = cljs.core.rest((state_49913[(4)])));

return statearr_49943;
})();
var state_49913__$1 = state_49913;
var ex49926 = (state_49913__$1[(2)]);
var statearr_49946_50866 = state_49913__$1;
(statearr_49946_50866[(5)] = ex49926);


var statearr_49951_50867 = state_49913__$1;
(statearr_49951_50867[(1)] = (10));

(statearr_49951_50867[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (9))){
var inst_49905 = (state_49913[(2)]);
var state_49913__$1 = state_49913;
var statearr_49954_50868 = state_49913__$1;
(statearr_49954_50868[(2)] = inst_49905);

(statearr_49954_50868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (5))){
var state_49913__$1 = state_49913;
var statearr_49959_50870 = state_49913__$1;
(statearr_49959_50870[(2)] = null);

(statearr_49959_50870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (14))){
var inst_49889 = (state_49913[(8)]);
var state_49913__$1 = state_49913;
var statearr_49960_50872 = state_49913__$1;
(statearr_49960_50872[(2)] = inst_49889);

(statearr_49960_50872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (16))){
var inst_49888 = (state_49913[(7)]);
var inst_49898 = (function(){throw inst_49888})();
var state_49913__$1 = state_49913;
var statearr_49961_50873 = state_49913__$1;
(statearr_49961_50873[(2)] = inst_49898);

(statearr_49961_50873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (10))){
var inst_49870 = (state_49913[(2)]);
var inst_49871 = console.error("WebR Init Error:",inst_49870);
var inst_49872 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49870)].join('');
var inst_49873 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_49872) : on_error.call(null,inst_49872));
var state_49913__$1 = (function (){var statearr_49962 = state_49913;
(statearr_49962[(9)] = inst_49871);

return statearr_49962;
})();
var statearr_49963_50874 = state_49913__$1;
(statearr_49963_50874[(2)] = inst_49873);

(statearr_49963_50874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (18))){
var inst_49901 = (state_49913[(2)]);
var inst_49902 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_49964 = state_49913;
(statearr_49964[(4)] = cljs.core.rest((state_49913[(4)])));

return statearr_49964;
})();
var state_49913__$1 = (function (){var statearr_49965 = state_49913;
(statearr_49965[(10)] = inst_49901);

return statearr_49965;
})();
var statearr_49966_50875 = state_49913__$1;
(statearr_49966_50875[(2)] = inst_49902);

(statearr_49966_50875[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49914 === (8))){
var _ = (function (){var statearr_49967 = state_49913;
(statearr_49967[(4)] = cljs.core.cons((11),(state_49913[(4)])));

return statearr_49967;
})();
var inst_49879 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_49880 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_49881 = cljs.core.PersistentHashMap.fromArrays(inst_49879,inst_49880);
var inst_49882 = cljs.core.clj__GT_js(inst_49881);
var inst_49883 = (new WebR(inst_49882));
var inst_49884 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_49883);
var inst_49885 = bb_web_ds_tools.runtime.webr.init_obj(inst_49883);
var inst_49886 = cljs.core.async.interop.p__GT_c(inst_49885);
var state_49913__$1 = (function (){var statearr_49970 = state_49913;
(statearr_49970[(11)] = inst_49884);

return statearr_49970;
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
var statearr_49973 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49973[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32396__auto__);

(statearr_49973[(1)] = (1));

return statearr_49973;
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
}catch (e49974){var ex__32399__auto__ = e49974;
var statearr_49975_50876 = state_49913;
(statearr_49975_50876[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_49913[(4)]))){
var statearr_49976_50877 = state_49913;
(statearr_49976_50877[(1)] = cljs.core.first((state_49913[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50878 = state_49913;
state_49913 = G__50878;
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
var state__32478__auto__ = (function (){var statearr_49977 = f__32477__auto__();
(statearr_49977[(6)] = c__32476__auto__);

return statearr_49977;
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
var ds_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__49982){
var vec__49983 = p__49982;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49983,(0),null);
var map__49986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49983,(1),null);
var map__49986__$1 = cljs.core.__destructure_map(map__49986);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49986__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49986__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
var len__5749__auto___50881 = arguments.length;
var i__5750__auto___50882 = (0);
while(true){
if((i__5750__auto___50882 < len__5749__auto___50881)){
args__5755__auto__.push((arguments[i__5750__auto___50882]));

var G__50883 = (i__5750__auto___50882 + (1));
i__5750__auto___50882 = G__50883;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$core$IFn$_invoke$arity$variadic = (function (datasets,p__49996){
var vec__49997 = p__49996;
var keys_to_bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49997,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_50034){
var state_val_50035 = (state_50034[(1)]);
if((state_val_50035 === (7))){
var inst_50016 = (state_50034[(7)]);
var inst_50019 = cljs.core.ex_data(inst_50016);
var inst_50020 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50019);
var inst_50021 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50020,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50034__$1 = state_50034;
var statearr_50036_50888 = state_50034__$1;
(statearr_50036_50888[(2)] = inst_50021);

(statearr_50036_50888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50035 === (1))){
var state_50034__$1 = state_50034;
var statearr_50037_50889 = state_50034__$1;
(statearr_50037_50889[(2)] = null);

(statearr_50037_50889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50035 === (4))){
var inst_50000 = (state_50034[(2)]);
var inst_50001 = console.error("Failed to bind datasets to R:",inst_50000);
var state_50034__$1 = state_50034;
var statearr_50038_50890 = state_50034__$1;
(statearr_50038_50890[(2)] = inst_50001);

(statearr_50038_50890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50035 === (6))){
var inst_50016 = (state_50034[(7)]);
var inst_50017 = (state_50034[(8)]);
var inst_50016__$1 = (state_50034[(2)]);
var inst_50017__$1 = (inst_50016__$1 instanceof cljs.core.ExceptionInfo);
var state_50034__$1 = (function (){var statearr_50039 = state_50034;
(statearr_50039[(7)] = inst_50016__$1);

(statearr_50039[(8)] = inst_50017__$1);

return statearr_50039;
})();
if(cljs.core.truth_(inst_50017__$1)){
var statearr_50040_50895 = state_50034__$1;
(statearr_50040_50895[(1)] = (7));

} else {
var statearr_50041_50896 = state_50034__$1;
(statearr_50041_50896[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50035 === (3))){
var inst_50032 = (state_50034[(2)]);
var state_50034__$1 = state_50034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50034__$1,inst_50032);
} else {
if((state_val_50035 === (12))){
var inst_50029 = (state_50034[(2)]);
var _ = (function (){var statearr_50042 = state_50034;
(statearr_50042[(4)] = cljs.core.rest((state_50034[(4)])));

return statearr_50042;
})();
var state_50034__$1 = state_50034;
var statearr_50043_50897 = state_50034__$1;
(statearr_50043_50897[(2)] = inst_50029);

(statearr_50043_50897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50035 === (2))){
var _ = (function (){var statearr_50044 = state_50034;
(statearr_50044[(4)] = cljs.core.cons((5),(state_50034[(4)])));

return statearr_50044;
})();
var inst_50007 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_50008 = bb_web_ds_tools.runtime.webr.datasets__GT_js(datasets,keys_to_bind);
var inst_50009 = bb_web_ds_tools.runtime.webr.get_global_env(inst_50007);
var inst_50013 = bb_web_ds_tools.runtime.webr.bind_r(inst_50009,"datasets",inst_50008);
var inst_50014 = cljs.core.async.interop.p__GT_c(inst_50013);
var state_50034__$1 = state_50034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50034__$1,(6),inst_50014);
} else {
if((state_val_50035 === (11))){
var inst_50016 = (state_50034[(7)]);
var state_50034__$1 = state_50034;
var statearr_50046_50902 = state_50034__$1;
(statearr_50046_50902[(2)] = inst_50016);

(statearr_50046_50902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50035 === (9))){
var inst_50024 = (state_50034[(2)]);
var state_50034__$1 = state_50034;
if(cljs.core.truth_(inst_50024)){
var statearr_50047_50903 = state_50034__$1;
(statearr_50047_50903[(1)] = (10));

} else {
var statearr_50048_50904 = state_50034__$1;
(statearr_50048_50904[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50035 === (5))){
var _ = (function (){var statearr_50049 = state_50034;
(statearr_50049[(4)] = cljs.core.rest((state_50034[(4)])));

return statearr_50049;
})();
var state_50034__$1 = state_50034;
var ex50045 = (state_50034__$1[(2)]);
var statearr_50050_50905 = state_50034__$1;
(statearr_50050_50905[(5)] = ex50045);


var statearr_50051_50906 = state_50034__$1;
(statearr_50051_50906[(1)] = (4));

(statearr_50051_50906[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50035 === (10))){
var inst_50016 = (state_50034[(7)]);
var inst_50026 = (function(){throw inst_50016})();
var state_50034__$1 = state_50034;
var statearr_50052_50907 = state_50034__$1;
(statearr_50052_50907[(2)] = inst_50026);

(statearr_50052_50907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50035 === (8))){
var inst_50017 = (state_50034[(8)]);
var state_50034__$1 = state_50034;
var statearr_50053_50908 = state_50034__$1;
(statearr_50053_50908[(2)] = inst_50017);

(statearr_50053_50908[(1)] = (9));


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
var statearr_50054 = [null,null,null,null,null,null,null,null,null];
(statearr_50054[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32396__auto__);

(statearr_50054[(1)] = (1));

return statearr_50054;
});
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1 = (function (state_50034){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_50034);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50055){var ex__32399__auto__ = e50055;
var statearr_50056_50909 = state_50034;
(statearr_50056_50909[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50034[(4)]))){
var statearr_50057_50910 = state_50034;
(statearr_50057_50910[(1)] = cljs.core.first((state_50034[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50911 = state_50034;
state_50034 = G__50911;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = function(state_50034){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1.call(this,state_50034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_50058 = f__32477__auto__();
(statearr_50058[(6)] = c__32476__auto__);

return statearr_50058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
} else {
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_50061){
var state_val_50062 = (state_50061[(1)]);
if((state_val_50062 === (1))){
var inst_50059 = console.warn("WebR not loaded, cannot bind datasets");
var state_50061__$1 = state_50061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50061__$1,inst_50059);
} else {
return null;
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0 = (function (){
var statearr_50063 = [null,null,null,null,null,null,null];
(statearr_50063[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32396__auto__);

(statearr_50063[(1)] = (1));

return statearr_50063;
});
var bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1 = (function (state_50061){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_50061);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e50064){var ex__32399__auto__ = e50064;
var statearr_50065_50912 = state_50061;
(statearr_50065_50912[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50061[(4)]))){
var statearr_50066_50914 = state_50061;
(statearr_50066_50914[(1)] = cljs.core.first((state_50061[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50915 = state_50061;
state_50061 = G__50915;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__ = function(state_50061){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1.call(this,state_50061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32396__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_50067 = f__32477__auto__();
(statearr_50067[(6)] = c__32476__auto__);

return statearr_50067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
}
}));

(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.bind_datasets.cljs$lang$applyTo = (function (seq49991){
var G__49992 = cljs.core.first(seq49991);
var seq49991__$1 = cljs.core.next(seq49991);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49992,seq49991__$1);
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
var statearr_50136_50917 = state_50133__$1;
(statearr_50136_50917[(1)] = (17));

} else {
var statearr_50138_50918 = state_50133__$1;
(statearr_50138_50918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (20))){
var inst_50107 = (state_50133[(8)]);
var inst_50108 = (state_50133[(9)]);
var inst_50107__$1 = (state_50133[(2)]);
var inst_50108__$1 = (inst_50107__$1 instanceof cljs.core.ExceptionInfo);
var state_50133__$1 = (function (){var statearr_50139 = state_50133;
(statearr_50139[(8)] = inst_50107__$1);

(statearr_50139[(9)] = inst_50108__$1);

return statearr_50139;
})();
if(cljs.core.truth_(inst_50108__$1)){
var statearr_50140_50919 = state_50133__$1;
(statearr_50140_50919[(1)] = (21));

} else {
var statearr_50141_50920 = state_50133__$1;
(statearr_50141_50920[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (1))){
var state_50133__$1 = state_50133;
var statearr_50142_50921 = state_50133__$1;
(statearr_50142_50921[(2)] = null);

(statearr_50142_50921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (24))){
var inst_50107 = (state_50133[(8)]);
var inst_50117 = (function(){throw inst_50107})();
var state_50133__$1 = state_50133;
var statearr_50143_50922 = state_50133__$1;
(statearr_50143_50922[(2)] = inst_50117);

(statearr_50143_50922[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (4))){
var inst_50068 = (state_50133[(2)]);
var inst_50069 = console.error("Failed to sync datasets from R:",inst_50068);
var state_50133__$1 = state_50133;
var statearr_50144_50923 = state_50133__$1;
(statearr_50144_50923[(2)] = inst_50069);

(statearr_50144_50923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (15))){
var inst_50086 = (state_50133[(10)]);
var state_50133__$1 = state_50133;
var statearr_50145_50924 = state_50133__$1;
(statearr_50145_50924[(2)] = inst_50086);

(statearr_50145_50924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (21))){
var inst_50107 = (state_50133[(8)]);
var inst_50110 = cljs.core.ex_data(inst_50107);
var inst_50111 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50110);
var inst_50112 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50111,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50133__$1 = state_50133;
var statearr_50146_50926 = state_50133__$1;
(statearr_50146_50926[(2)] = inst_50112);

(statearr_50146_50926[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (13))){
var inst_50094 = (state_50133[(2)]);
var state_50133__$1 = state_50133;
if(cljs.core.truth_(inst_50094)){
var statearr_50147_50927 = state_50133__$1;
(statearr_50147_50927[(1)] = (14));

} else {
var statearr_50148_50928 = state_50133__$1;
(statearr_50148_50928[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (22))){
var inst_50108 = (state_50133[(9)]);
var state_50133__$1 = state_50133;
var statearr_50149_50929 = state_50133__$1;
(statearr_50149_50929[(2)] = inst_50108);

(statearr_50149_50929[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (6))){
var inst_50075 = (state_50133[(11)]);
var _ = (function (){var statearr_50150 = state_50133;
(statearr_50150[(4)] = cljs.core.cons((9),(state_50133[(4)])));

return statearr_50150;
})();
var inst_50082 = bb_web_ds_tools.runtime.webr.get_global_env(inst_50075);
var inst_50083 = bb_web_ds_tools.runtime.webr.get_r(inst_50082,"datasets");
var inst_50084 = cljs.core.async.interop.p__GT_c(inst_50083);
var state_50133__$1 = state_50133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50133__$1,(10),inst_50084);
} else {
if((state_val_50134 === (25))){
var inst_50107 = (state_50133[(8)]);
var state_50133__$1 = state_50133;
var statearr_50151_50931 = state_50133__$1;
(statearr_50151_50931[(2)] = inst_50107);

(statearr_50151_50931[(1)] = (26));


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
var inst_50087 = (state_50133[(12)]);
var state_50133__$1 = state_50133;
var statearr_50152_50932 = state_50133__$1;
(statearr_50152_50932[(2)] = inst_50087);

(statearr_50152_50932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (2))){
var _ = (function (){var statearr_50153 = state_50133;
(statearr_50153[(4)] = cljs.core.cons((5),(state_50133[(4)])));

return statearr_50153;
})();
var inst_50075 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_50133__$1 = (function (){var statearr_50154 = state_50133;
(statearr_50154[(11)] = inst_50075);

return statearr_50154;
})();
var statearr_50155_50934 = state_50133__$1;
(statearr_50155_50934[(2)] = null);

(statearr_50155_50934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (23))){
var inst_50115 = (state_50133[(2)]);
var state_50133__$1 = state_50133;
if(cljs.core.truth_(inst_50115)){
var statearr_50156_50935 = state_50133__$1;
(statearr_50156_50935[(1)] = (24));

} else {
var statearr_50157_50936 = state_50133__$1;
(statearr_50157_50936[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (19))){
var inst_50128 = (state_50133[(2)]);
var _ = (function (){var statearr_50159 = state_50133;
(statearr_50159[(4)] = cljs.core.rest((state_50133[(4)])));

return statearr_50159;
})();
var state_50133__$1 = state_50133;
var statearr_50160_50937 = state_50133__$1;
(statearr_50160_50937[(2)] = inst_50128);

(statearr_50160_50937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (11))){
var inst_50086 = (state_50133[(10)]);
var inst_50089 = cljs.core.ex_data(inst_50086);
var inst_50090 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50089);
var inst_50091 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50090,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50133__$1 = state_50133;
var statearr_50162_50938 = state_50133__$1;
(statearr_50162_50938[(2)] = inst_50091);

(statearr_50162_50938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (9))){
var _ = (function (){var statearr_50163 = state_50133;
(statearr_50163[(4)] = cljs.core.rest((state_50133[(4)])));

return statearr_50163;
})();
var state_50133__$1 = state_50133;
var ex50158 = (state_50133__$1[(2)]);
var statearr_50164_50939 = state_50133__$1;
(statearr_50164_50939[(5)] = ex50158);


var statearr_50165_50940 = state_50133__$1;
(statearr_50165_50940[(1)] = (8));

(statearr_50165_50940[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (5))){
var _ = (function (){var statearr_50166 = state_50133;
(statearr_50166[(4)] = cljs.core.rest((state_50133[(4)])));

return statearr_50166;
})();
var state_50133__$1 = state_50133;
var ex50161 = (state_50133__$1[(2)]);
var statearr_50167_50942 = state_50133__$1;
(statearr_50167_50942[(5)] = ex50161);


var statearr_50168_50943 = state_50133__$1;
(statearr_50168_50943[(1)] = (4));

(statearr_50168_50943[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (14))){
var inst_50086 = (state_50133[(10)]);
var inst_50096 = (function(){throw inst_50086})();
var state_50133__$1 = state_50133;
var statearr_50169_50944 = state_50133__$1;
(statearr_50169_50944[(2)] = inst_50096);

(statearr_50169_50944[(1)] = (16));


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
var statearr_50170_50945 = state_50133__$1;
(statearr_50170_50945[(2)] = inst_50125);

(statearr_50170_50945[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (16))){
var inst_50099 = (state_50133[(2)]);
var _ = (function (){var statearr_50171 = state_50133;
(statearr_50171[(4)] = cljs.core.rest((state_50133[(4)])));

return statearr_50171;
})();
var state_50133__$1 = state_50133;
var statearr_50172_50946 = state_50133__$1;
(statearr_50172_50946[(2)] = inst_50099);

(statearr_50172_50946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (10))){
var inst_50086 = (state_50133[(10)]);
var inst_50087 = (state_50133[(12)]);
var inst_50086__$1 = (state_50133[(2)]);
var inst_50087__$1 = (inst_50086__$1 instanceof cljs.core.ExceptionInfo);
var state_50133__$1 = (function (){var statearr_50173 = state_50133;
(statearr_50173[(10)] = inst_50086__$1);

(statearr_50173[(12)] = inst_50087__$1);

return statearr_50173;
})();
if(cljs.core.truth_(inst_50087__$1)){
var statearr_50174_50947 = state_50133__$1;
(statearr_50174_50947[(1)] = (11));

} else {
var statearr_50175_50948 = state_50133__$1;
(statearr_50175_50948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (18))){
var state_50133__$1 = state_50133;
var statearr_50176_50949 = state_50133__$1;
(statearr_50176_50949[(2)] = null);

(statearr_50176_50949[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (8))){
var inst_50076 = (state_50133[(2)]);
var state_50133__$1 = (function (){var statearr_50177 = state_50133;
(statearr_50177[(13)] = inst_50076);

return statearr_50177;
})();
var statearr_50178_50950 = state_50133__$1;
(statearr_50178_50950[(2)] = null);

(statearr_50178_50950[(1)] = (7));


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
var statearr_50181_50953 = state_50133;
(statearr_50181_50953[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50133[(4)]))){
var statearr_50182_50954 = state_50133;
(statearr_50182_50954[(1)] = cljs.core.first((state_50133[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50955 = state_50133;
state_50133 = G__50955;
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
var statearr_50190_50956 = state_50186;
(statearr_50190_50956[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50186[(4)]))){
var statearr_50191_50957 = state_50186;
(statearr_50191_50957[(1)] = cljs.core.first((state_50186[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50958 = state_50186;
state_50186 = G__50958;
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
var len__5749__auto___50960 = arguments.length;
var i__5750__auto___50961 = (0);
while(true){
if((i__5750__auto___50961 < len__5749__auto___50960)){
args__5755__auto__.push((arguments[i__5750__auto___50961]));

var G__50962 = (i__5750__auto___50961 + (1));
i__5750__auto___50961 = G__50962;
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
var statearr_50563_50965 = state_50560__$1;
(statearr_50563_50965[(2)] = null);

(statearr_50563_50965[(1)] = (54));


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
var statearr_50565_50966 = state_50560__$1;
(statearr_50565_50966[(2)] = null);

(statearr_50565_50966[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (62))){
var inst_50385 = (state_50560[(7)]);
var inst_50387 = cljs.core.chunked_seq_QMARK_(inst_50385);
var state_50560__$1 = state_50560;
if(inst_50387){
var statearr_50566_50968 = state_50560__$1;
(statearr_50566_50968[(1)] = (65));

} else {
var statearr_50567_50969 = state_50560__$1;
(statearr_50567_50969[(1)] = (66));

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
var statearr_50569_50970 = state_50560__$1;
(statearr_50569_50970[(1)] = (76));

} else {
var statearr_50570_50971 = state_50560__$1;
(statearr_50570_50971[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (7))){
var inst_50551 = (new Error("Shelter not found on WebR instance"));
var inst_50552 = (function(){throw inst_50551})();
var state_50560__$1 = state_50560;
var statearr_50571_50975 = state_50560__$1;
(statearr_50571_50975[(2)] = inst_50552);

(statearr_50571_50975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (59))){
var inst_50376 = (state_50560[(15)]);
var inst_50378 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50376);
var state_50560__$1 = state_50560;
var statearr_50572_50976 = state_50560__$1;
(statearr_50572_50976[(2)] = inst_50378);

(statearr_50572_50976[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (86))){
var inst_50515 = (state_50560[(16)]);
var inst_50518 = cljs.core.ex_data(inst_50515);
var inst_50519 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50518);
var inst_50520 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50519,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50560__$1 = state_50560;
var statearr_50573_50977 = state_50560__$1;
(statearr_50573_50977[(2)] = inst_50520);

(statearr_50573_50977[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (20))){
var inst_50229 = (state_50560[(17)]);
var inst_50239 = (function(){throw inst_50229})();
var state_50560__$1 = state_50560;
var statearr_50574_50978 = state_50560__$1;
(statearr_50574_50978[(2)] = inst_50239);

(statearr_50574_50978[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (72))){
var inst_50317 = (state_50560[(18)]);
var inst_50510 = (state_50560[(19)]);
var inst_50509 = (state_50560[(2)]);
var inst_50510__$1 = bb_web_ds_tools.runtime.webr.to_js(inst_50317);
var inst_50511 = (inst_50510__$1 instanceof Promise);
var state_50560__$1 = (function (){var statearr_50575 = state_50560;
(statearr_50575[(20)] = inst_50509);

(statearr_50575[(19)] = inst_50510__$1);

return statearr_50575;
})();
if(cljs.core.truth_(inst_50511)){
var statearr_50576_50979 = state_50560__$1;
(statearr_50576_50979[(1)] = (82));

} else {
var statearr_50577_50980 = state_50560__$1;
(statearr_50577_50980[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (58))){
var inst_50408 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50578_50981 = state_50560__$1;
(statearr_50578_50981[(2)] = inst_50408);

(statearr_50578_50981[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (60))){
var state_50560__$1 = state_50560;
var statearr_50579_50982 = state_50560__$1;
(statearr_50579_50982[(2)] = null);

(statearr_50579_50982[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (27))){
var inst_50251 = (state_50560[(21)]);
var inst_50254 = cljs.core.ex_data(inst_50251);
var inst_50255 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50254);
var inst_50256 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50255,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50560__$1 = state_50560;
var statearr_50580_50983 = state_50560__$1;
(statearr_50580_50983[(2)] = inst_50256);

(statearr_50580_50983[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (1))){
var state_50560__$1 = state_50560;
var statearr_50581_50984 = state_50560__$1;
(statearr_50581_50984[(2)] = null);

(statearr_50581_50984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (69))){
var state_50560__$1 = state_50560;
var statearr_50582_50985 = state_50560__$1;
(statearr_50582_50985[(2)] = null);

(statearr_50582_50985[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (24))){
var state_50560__$1 = state_50560;
var statearr_50583_50986 = state_50560__$1;
(statearr_50583_50986[(2)] = null);

(statearr_50583_50986[(1)] = (25));


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
var state_50560__$1 = (function (){var statearr_50584 = state_50560;
(statearr_50584[(23)] = inst_50410);

(statearr_50584[(13)] = inst_50417);

(statearr_50584[(24)] = inst_50418);

(statearr_50584[(25)] = inst_50419);

(statearr_50584[(26)] = inst_50420);

return statearr_50584;
})();
var statearr_50585_50991 = state_50560__$1;
(statearr_50585_50991[(2)] = null);

(statearr_50585_50991[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (85))){
var inst_50515 = (state_50560[(16)]);
var inst_50516 = (state_50560[(27)]);
var inst_50515__$1 = (state_50560[(2)]);
var inst_50516__$1 = (inst_50515__$1 instanceof cljs.core.ExceptionInfo);
var state_50560__$1 = (function (){var statearr_50586 = state_50560;
(statearr_50586[(16)] = inst_50515__$1);

(statearr_50586[(27)] = inst_50516__$1);

return statearr_50586;
})();
if(cljs.core.truth_(inst_50516__$1)){
var statearr_50587_50992 = state_50560__$1;
(statearr_50587_50992[(1)] = (86));

} else {
var statearr_50588_50993 = state_50560__$1;
(statearr_50588_50993[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (39))){
var inst_50300 = (state_50560[(28)]);
var inst_50303 = cljs.core.ex_data(inst_50300);
var inst_50304 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50303);
var inst_50305 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50304,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50560__$1 = state_50560;
var statearr_50589_50994 = state_50560__$1;
(statearr_50589_50994[(2)] = inst_50305);

(statearr_50589_50994[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (88))){
var inst_50523 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50523)){
var statearr_50590_50995 = state_50560__$1;
(statearr_50590_50995[(1)] = (89));

} else {
var statearr_50591_50996 = state_50560__$1;
(statearr_50591_50996[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (46))){
var inst_50353 = cljs.core.PersistentVector.EMPTY;
var state_50560__$1 = state_50560;
var statearr_50592_50997 = state_50560__$1;
(statearr_50592_50997[(2)] = inst_50353);

(statearr_50592_50997[(1)] = (47));


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
var statearr_50595_50998 = state_50560__$1;
(statearr_50595_50998[(2)] = inst_50204);

(statearr_50595_50998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (77))){
var state_50560__$1 = state_50560;
var statearr_50596_50999 = state_50560__$1;
(statearr_50596_50999[(2)] = null);

(statearr_50596_50999[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (95))){
var _ = (function (){var statearr_50598 = state_50560;
(statearr_50598[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50598;
})();
var state_50560__$1 = state_50560;
var ex50594 = (state_50560__$1[(2)]);
var statearr_50605_51001 = state_50560__$1;
(statearr_50605_51001[(5)] = ex50594);


if((ex50594 instanceof Error)){
var statearr_50606_51005 = state_50560__$1;
(statearr_50606_51005[(1)] = (94));

(statearr_50606_51005[(5)] = null);

} else {
throw ex50594;

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
var statearr_50608_51006 = state_50560__$1;
(statearr_50608_51006[(1)] = (56));

} else {
var statearr_50609_51007 = state_50560__$1;
(statearr_50609_51007[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (92))){
var inst_50531 = (state_50560[(29)]);
var _ = (function (){var statearr_50610 = state_50560;
(statearr_50610[(4)] = cljs.core.cons((95),(state_50560[(4)])));

return statearr_50610;
})();
var inst_50539 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50531,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_50611 = state_50560;
(statearr_50611[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50611;
})();
var state_50560__$1 = state_50560;
var statearr_50612_51010 = state_50560__$1;
(statearr_50612_51010[(2)] = inst_50539);

(statearr_50612_51010[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (15))){
var inst_50269 = (state_50560[(2)]);
var _ = (function (){var statearr_50613 = state_50560;
(statearr_50613[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50613;
})();
var state_50560__$1 = state_50560;
var statearr_50614_51011 = state_50560__$1;
(statearr_50614_51011[(2)] = inst_50269);

(statearr_50614_51011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (48))){
var inst_50333 = (state_50560[(30)]);
var inst_50339 = cljs.core.seq(inst_50333);
var inst_50340 = cljs.core.first(inst_50339);
var inst_50341 = cljs.core.next(inst_50339);
var state_50560__$1 = (function (){var statearr_50615 = state_50560;
(statearr_50615[(31)] = inst_50341);

return statearr_50615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50560__$1,(50),inst_50340);
} else {
if((state_val_50561 === (50))){
var inst_50334 = (state_50560[(32)]);
var inst_50341 = (state_50560[(31)]);
var inst_50343 = (state_50560[(2)]);
var inst_50344 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50334,inst_50343);
var state_50560__$1 = (function (){var statearr_50616 = state_50560;
(statearr_50616[(33)] = inst_50344);

return statearr_50616;
})();
if(cljs.core.truth_(inst_50341)){
var statearr_50617_51012 = state_50560__$1;
(statearr_50617_51012[(1)] = (51));

} else {
var statearr_50618_51013 = state_50560__$1;
(statearr_50618_51013[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (75))){
var inst_50507 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50619_51014 = state_50560__$1;
(statearr_50619_51014[(2)] = inst_50507);

(statearr_50619_51014[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (21))){
var inst_50229 = (state_50560[(17)]);
var state_50560__$1 = state_50560;
var statearr_50620_51015 = state_50560__$1;
(statearr_50620_51015[(2)] = inst_50229);

(statearr_50620_51015[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (31))){
var inst_50251 = (state_50560[(21)]);
var state_50560__$1 = state_50560;
var statearr_50621_51020 = state_50560__$1;
(statearr_50621_51020[(2)] = inst_50251);

(statearr_50621_51020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (32))){
var inst_50264 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50622_51021 = state_50560__$1;
(statearr_50622_51021[(2)] = inst_50264);

(statearr_50622_51021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (40))){
var inst_50301 = (state_50560[(34)]);
var state_50560__$1 = state_50560;
var statearr_50623_51028 = state_50560__$1;
(statearr_50623_51028[(2)] = inst_50301);

(statearr_50623_51028[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (91))){
var inst_50528 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50624_51029 = state_50560__$1;
(statearr_50624_51029[(2)] = inst_50528);

(statearr_50624_51029[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (56))){
var inst_50369 = (state_50560[(9)]);
var inst_50371 = (state_50560[(11)]);
var inst_50376 = (state_50560[(15)]);
var inst_50376__$1 = cljs.core._nth(inst_50369,inst_50371);
var state_50560__$1 = (function (){var statearr_50625 = state_50560;
(statearr_50625[(15)] = inst_50376__$1);

return statearr_50625;
})();
if(cljs.core.truth_(inst_50376__$1)){
var statearr_50626_51032 = state_50560__$1;
(statearr_50626_51032[(1)] = (59));

} else {
var statearr_50627_51033 = state_50560__$1;
(statearr_50627_51033[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (33))){
var inst_50272 = (state_50560[(35)]);
var _ = (function (){var statearr_50628 = state_50560;
(statearr_50628[(4)] = cljs.core.cons((35),(state_50560[(4)])));

return statearr_50628;
})();
var ___$1 = (function (){var statearr_50629 = state_50560;
(statearr_50629[(4)] = cljs.core.cons((37),(state_50560[(4)])));

return statearr_50629;
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
var statearr_50632_51043 = state_50560__$1;
(statearr_50632_51043[(2)] = inst_50242);

(statearr_50632_51043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (90))){
var inst_50515 = (state_50560[(16)]);
var state_50560__$1 = state_50560;
var statearr_50633_51047 = state_50560__$1;
(statearr_50633_51047[(2)] = inst_50515);

(statearr_50633_51047[(1)] = (91));


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
var statearr_50634_51050 = state_50560__$1;
(statearr_50634_51050[(2)] = inst_50283);

(statearr_50634_51050[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (41))){
var inst_50308 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50308)){
var statearr_50635_51051 = state_50560__$1;
(statearr_50635_51051[(1)] = (42));

} else {
var statearr_50636_51052 = state_50560__$1;
(statearr_50636_51052[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (89))){
var inst_50515 = (state_50560[(16)]);
var inst_50525 = (function(){throw inst_50515})();
var state_50560__$1 = state_50560;
var statearr_50640_51053 = state_50560__$1;
(statearr_50640_51053[(2)] = inst_50525);

(statearr_50640_51053[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (43))){
var inst_50300 = (state_50560[(28)]);
var state_50560__$1 = state_50560;
var statearr_50641_51054 = state_50560__$1;
(statearr_50641_51054[(2)] = inst_50300);

(statearr_50641_51054[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (61))){
var inst_50371 = (state_50560[(11)]);
var inst_50368 = (state_50560[(8)]);
var inst_50369 = (state_50560[(9)]);
var inst_50370 = (state_50560[(10)]);
var inst_50381 = (state_50560[(2)]);
var inst_50382 = (inst_50371 + (1));
var tmp50637 = inst_50370;
var tmp50638 = inst_50369;
var tmp50639 = inst_50368;
var inst_50368__$1 = tmp50639;
var inst_50369__$1 = tmp50638;
var inst_50370__$1 = tmp50637;
var inst_50371__$1 = inst_50382;
var state_50560__$1 = (function (){var statearr_50642 = state_50560;
(statearr_50642[(37)] = inst_50381);

(statearr_50642[(8)] = inst_50368__$1);

(statearr_50642[(9)] = inst_50369__$1);

(statearr_50642[(10)] = inst_50370__$1);

(statearr_50642[(11)] = inst_50371__$1);

return statearr_50642;
})();
var statearr_50643_51058 = state_50560__$1;
(statearr_50643_51058[(2)] = null);

(statearr_50643_51058[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (29))){
var inst_50259 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50259)){
var statearr_50644_51060 = state_50560__$1;
(statearr_50644_51060[(1)] = (30));

} else {
var statearr_50645_51061 = state_50560__$1;
(statearr_50645_51061[(1)] = (31));

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
var state_50560__$1 = (function (){var statearr_50647 = state_50560;
(statearr_50647[(22)] = inst_50316);

(statearr_50647[(18)] = inst_50317);

(statearr_50647[(38)] = inst_50319__$1);

return statearr_50647;
})();
if(inst_50320){
var statearr_50649_51062 = state_50560__$1;
(statearr_50649_51062[(1)] = (45));

} else {
var statearr_50650_51063 = state_50560__$1;
(statearr_50650_51063[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (93))){
var inst_50542 = (state_50560[(2)]);
var inst_50543 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_50544 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_50542];
var inst_50545 = cljs.core.PersistentHashMap.fromArrays(inst_50543,inst_50544);
var inst_50546 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50545);
var _ = (function (){var statearr_50651 = state_50560;
(statearr_50651[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50651;
})();
var state_50560__$1 = state_50560;
var statearr_50652_51064 = state_50560__$1;
(statearr_50652_51064[(2)] = inst_50546);

(statearr_50652_51064[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (6))){
var inst_50215 = (state_50560[(39)]);
var inst_50217 = (new inst_50215());
var state_50560__$1 = (function (){var statearr_50653 = state_50560;
(statearr_50653[(36)] = inst_50217);

return statearr_50653;
})();
var statearr_50654_51065 = state_50560__$1;
(statearr_50654_51065[(2)] = null);

(statearr_50654_51065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (28))){
var inst_50252 = (state_50560[(40)]);
var state_50560__$1 = state_50560;
var statearr_50655_51066 = state_50560__$1;
(statearr_50655_51066[(2)] = inst_50252);

(statearr_50655_51066[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (64))){
var inst_50406 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50656_51067 = state_50560__$1;
(statearr_50656_51067[(2)] = inst_50406);

(statearr_50656_51067[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (51))){
var inst_50341 = (state_50560[(31)]);
var inst_50344 = (state_50560[(33)]);
var inst_50333 = inst_50341;
var inst_50334 = inst_50344;
var state_50560__$1 = (function (){var statearr_50657 = state_50560;
(statearr_50657[(30)] = inst_50333);

(statearr_50657[(32)] = inst_50334);

return statearr_50657;
})();
var statearr_50658_51069 = state_50560__$1;
(statearr_50658_51069[(2)] = null);

(statearr_50658_51069[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (25))){
var inst_50217 = (state_50560[(36)]);
var inst_50267 = (state_50560[(2)]);
var state_50560__$1 = (function (){var statearr_50659 = state_50560;
(statearr_50659[(41)] = inst_50267);

return statearr_50659;
})();
var statearr_50660_51073 = state_50560__$1;
(statearr_50660_51073[(2)] = inst_50217);

(statearr_50660_51073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (34))){
var inst_50549 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50661_51074 = state_50560__$1;
(statearr_50661_51074[(2)] = inst_50549);

(statearr_50661_51074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (17))){
var inst_50229 = (state_50560[(17)]);
var inst_50232 = cljs.core.ex_data(inst_50229);
var inst_50233 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50232);
var inst_50234 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50233,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50560__$1 = state_50560;
var statearr_50666_51075 = state_50560__$1;
(statearr_50666_51075[(2)] = inst_50234);

(statearr_50666_51075[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (3))){
var inst_50557 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50560__$1,inst_50557);
} else {
if((state_val_50561 === (12))){
var _ = (function (){var statearr_50668 = state_50560;
(statearr_50668[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50668;
})();
var state_50560__$1 = state_50560;
var ex50663 = (state_50560__$1[(2)]);
var statearr_50669_51076 = state_50560__$1;
(statearr_50669_51076[(5)] = ex50663);


var statearr_50670_51077 = state_50560__$1;
(statearr_50670_51077[(1)] = (11));

(statearr_50670_51077[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (2))){
var inst_50215 = (state_50560[(39)]);
var _ = (function (){var statearr_50672 = state_50560;
(statearr_50672[(4)] = cljs.core.cons((5),(state_50560[(4)])));

return statearr_50672;
})();
var inst_50210 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_50211 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_50212 = cljs.core.PersistentHashMap.fromArrays(inst_50210,inst_50211);
var inst_50213 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50212);
var inst_50214 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_50215__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(inst_50214);
var state_50560__$1 = (function (){var statearr_50673 = state_50560;
(statearr_50673[(42)] = inst_50213);

(statearr_50673[(39)] = inst_50215__$1);

return statearr_50673;
})();
if(cljs.core.truth_(inst_50215__$1)){
var statearr_50676_51078 = state_50560__$1;
(statearr_50676_51078[(1)] = (6));

} else {
var statearr_50677_51079 = state_50560__$1;
(statearr_50677_51079[(1)] = (7));

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
var statearr_50680_51080 = state_50560__$1;
(statearr_50680_51080[(1)] = (68));

} else {
var statearr_50681_51081 = state_50560__$1;
(statearr_50681_51081[(1)] = (69));

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
var statearr_50683_51086 = state_50560__$1;
(statearr_50683_51086[(2)] = null);

(statearr_50683_51086[(1)] = (54));


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
var statearr_50686_51087 = state_50560__$1;
(statearr_50686_51087[(2)] = inst_50274);

(statearr_50686_51087[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (82))){
var inst_50510 = (state_50560[(19)]);
var inst_50513 = cljs.core.async.interop.p__GT_c(inst_50510);
var state_50560__$1 = state_50560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50560__$1,(85),inst_50513);
} else {
if((state_val_50561 === (76))){
var inst_50459 = (state_50560[(14)]);
var inst_50461 = cljs.core.chunked_seq_QMARK_(inst_50459);
var state_50560__$1 = state_50560;
if(inst_50461){
var statearr_50687_51088 = state_50560__$1;
(statearr_50687_51088[(1)] = (79));

} else {
var statearr_50688_51089 = state_50560__$1;
(statearr_50688_51089[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (19))){
var inst_50237 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50237)){
var statearr_50689_51090 = state_50560__$1;
(statearr_50689_51090[(1)] = (20));

} else {
var statearr_50690_51091 = state_50560__$1;
(statearr_50690_51091[(1)] = (21));

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
var statearr_50692_51101 = state_50560__$1;
(statearr_50692_51101[(1)] = (62));

} else {
var statearr_50693_51102 = state_50560__$1;
(statearr_50693_51102[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (68))){
var inst_50394 = (state_50560[(43)]);
var inst_50396 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50394);
var state_50560__$1 = state_50560;
var statearr_50694_51103 = state_50560__$1;
(statearr_50694_51103[(2)] = inst_50396);

(statearr_50694_51103[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (11))){
var inst_50218 = (state_50560[(2)]);
var inst_50219 = (function(){throw inst_50218})();
var state_50560__$1 = state_50560;
var statearr_50696_51104 = state_50560__$1;
(statearr_50696_51104[(2)] = inst_50219);

(statearr_50696_51104[(1)] = (10));


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
var statearr_50698_51105 = state_50560__$1;
(statearr_50698_51105[(1)] = (13));

} else {
var statearr_50699_51106 = state_50560__$1;
(statearr_50699_51106[(1)] = (14));

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
var statearr_50701_51107 = state_50560__$1;
(statearr_50701_51107[(5)] = ex50695);


var statearr_50702_51108 = state_50560__$1;
(statearr_50702_51108[(1)] = (4));

(statearr_50702_51108[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (83))){
var inst_50510 = (state_50560[(19)]);
var state_50560__$1 = state_50560;
var statearr_50703_51109 = state_50560__$1;
(statearr_50703_51109[(2)] = inst_50510);

(statearr_50703_51109[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (14))){
var inst_50217 = (state_50560[(36)]);
var inst_50244 = inst_50217.init;
var inst_50245 = (inst_50244 == null);
var inst_50246 = cljs.core.not(inst_50245);
var state_50560__$1 = state_50560;
if(inst_50246){
var statearr_50704_51119 = state_50560__$1;
(statearr_50704_51119[(1)] = (23));

} else {
var statearr_50705_51120 = state_50560__$1;
(statearr_50705_51120[(1)] = (24));

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
var statearr_50707_51121 = state_50560__$1;
(statearr_50707_51121[(2)] = null);

(statearr_50707_51121[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (53))){
var inst_50349 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50708_51122 = state_50560__$1;
(statearr_50708_51122[(2)] = inst_50349);

(statearr_50708_51122[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (78))){
var inst_50505 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50709_51123 = state_50560__$1;
(statearr_50709_51123[(2)] = inst_50505);

(statearr_50709_51123[(1)] = (75));


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
var statearr_50711_51124 = state_50560__$1;
(statearr_50711_51124[(1)] = (27));

} else {
var statearr_50712_51125 = state_50560__$1;
(statearr_50712_51125[(1)] = (28));

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
var statearr_50714_51126 = state_50560__$1;
(statearr_50714_51126[(1)] = (17));

} else {
var statearr_50715_51127 = state_50560__$1;
(statearr_50715_51127[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (81))){
var inst_50502 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50716_51129 = state_50560__$1;
(statearr_50716_51129[(2)] = inst_50502);

(statearr_50716_51129[(1)] = (78));


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
var statearr_50718_51131 = state_50560__$1;
(statearr_50718_51131[(2)] = null);

(statearr_50718_51131[(1)] = (71));


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
var statearr_50720_51132 = state_50560__$1;
(statearr_50720_51132[(1)] = (39));

} else {
var statearr_50721_51133 = state_50560__$1;
(statearr_50721_51133[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (87))){
var inst_50516 = (state_50560[(27)]);
var state_50560__$1 = state_50560;
var statearr_50725_51134 = state_50560__$1;
(statearr_50725_51134[(2)] = inst_50516);

(statearr_50725_51134[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (30))){
var inst_50251 = (state_50560[(21)]);
var inst_50261 = (function(){throw inst_50251})();
var state_50560__$1 = state_50560;
var statearr_50726_51135 = state_50560__$1;
(statearr_50726_51135[(2)] = inst_50261);

(statearr_50726_51135[(1)] = (32));


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
var state_50560__$1 = (function (){var statearr_50727 = state_50560;
(statearr_50727[(51)] = inst_50455);

(statearr_50727[(13)] = inst_50417__$1);

(statearr_50727[(24)] = inst_50418__$1);

(statearr_50727[(25)] = inst_50419__$1);

(statearr_50727[(26)] = inst_50420__$1);

return statearr_50727;
})();
var statearr_50728_51136 = state_50560__$1;
(statearr_50728_51136[(2)] = null);

(statearr_50728_51136[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (10))){
var inst_50272 = (state_50560[(2)]);
var state_50560__$1 = (function (){var statearr_50729 = state_50560;
(statearr_50729[(35)] = inst_50272);

return statearr_50729;
})();
var statearr_50730_51137 = state_50560__$1;
(statearr_50730_51137[(2)] = null);

(statearr_50730_51137[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (18))){
var inst_50230 = (state_50560[(50)]);
var state_50560__$1 = state_50560;
var statearr_50731_51138 = state_50560__$1;
(statearr_50731_51138[(2)] = inst_50230);

(statearr_50731_51138[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (52))){
var inst_50344 = (state_50560[(33)]);
var state_50560__$1 = state_50560;
var statearr_50732_51140 = state_50560__$1;
(statearr_50732_51140[(2)] = inst_50344);

(statearr_50732_51140[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (67))){
var inst_50403 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50733_51141 = state_50560__$1;
(statearr_50733_51141[(2)] = inst_50403);

(statearr_50733_51141[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (71))){
var inst_50420 = (state_50560[(26)]);
var inst_50419 = (state_50560[(25)]);
var inst_50422 = (inst_50420 < inst_50419);
var inst_50423 = inst_50422;
var state_50560__$1 = state_50560;
if(cljs.core.truth_(inst_50423)){
var statearr_50735_51142 = state_50560__$1;
(statearr_50735_51142[(1)] = (73));

} else {
var statearr_50736_51143 = state_50560__$1;
(statearr_50736_51143[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (42))){
var inst_50300 = (state_50560[(28)]);
var inst_50310 = (function(){throw inst_50300})();
var state_50560__$1 = state_50560;
var statearr_50738_51144 = state_50560__$1;
(statearr_50738_51144[(2)] = inst_50310);

(statearr_50738_51144[(1)] = (44));


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
var inst_50482 = bb_web_ds_tools.runtime.webr.get_height(inst_50468);
var inst_50483 = (inst_50482 * inst_50362);
var inst_50484 = (inst_50483 | (0));
var inst_50485 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_50486 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50469),")"].join('');
var inst_50487 = [inst_50486,"cover"];
var inst_50488 = cljs.core.PersistentHashMap.fromArrays(inst_50485,inst_50487);
var inst_50489 = [inst_50481,inst_50484,inst_50488];
var inst_50490 = cljs.core.PersistentHashMap.fromArrays(inst_50478,inst_50489);
var inst_50491 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_50490];
var inst_50492 = (new cljs.core.PersistentVector(null,2,(5),inst_50477,inst_50491,null));
var inst_50493 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_50476,inst_50492];
var inst_50494 = (new cljs.core.PersistentVector(null,3,(5),inst_50470,inst_50493,null));
var inst_50495 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50496 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_50494,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_50497 = (new cljs.core.PersistentVector(null,3,(5),inst_50495,inst_50496,null));
var inst_50498 = re_frame.core.dispatch(inst_50497);
var inst_50499 = cljs.core.next(inst_50459);
var inst_50417 = inst_50499;
var inst_50418 = null;
var inst_50419 = (0);
var inst_50420 = (0);
var state_50560__$1 = (function (){var statearr_50739 = state_50560;
(statearr_50739[(52)] = inst_50498);

(statearr_50739[(13)] = inst_50417);

(statearr_50739[(24)] = inst_50418);

(statearr_50739[(25)] = inst_50419);

(statearr_50739[(26)] = inst_50420);

return statearr_50739;
})();
var statearr_50740_51159 = state_50560__$1;
(statearr_50740_51159[(2)] = null);

(statearr_50740_51159[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (37))){
var _ = (function (){var statearr_50741 = state_50560;
(statearr_50741[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50741;
})();
var state_50560__$1 = state_50560;
var ex50737 = (state_50560__$1[(2)]);
var statearr_50742_51160 = state_50560__$1;
(statearr_50742_51160[(5)] = ex50737);


var statearr_50743_51161 = state_50560__$1;
(statearr_50743_51161[(1)] = (36));

(statearr_50743_51161[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (63))){
var state_50560__$1 = state_50560;
var statearr_50746_51162 = state_50560__$1;
(statearr_50746_51162[(2)] = null);

(statearr_50746_51162[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (94))){
var inst_50317 = (state_50560[(18)]);
var inst_50532 = (state_50560[(2)]);
var inst_50533 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50317);
var state_50560__$1 = (function (){var statearr_50752 = state_50560;
(statearr_50752[(53)] = inst_50532);

return statearr_50752;
})();
var statearr_50753_51163 = state_50560__$1;
(statearr_50753_51163[(2)] = inst_50533);

(statearr_50753_51163[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (8))){
var inst_50554 = (state_50560[(2)]);
var _ = (function (){var statearr_50754 = state_50560;
(statearr_50754[(4)] = cljs.core.rest((state_50560[(4)])));

return statearr_50754;
})();
var state_50560__$1 = state_50560;
var statearr_50755_51169 = state_50560__$1;
(statearr_50755_51169[(2)] = inst_50554);

(statearr_50755_51169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (49))){
var inst_50351 = (state_50560[(2)]);
var state_50560__$1 = state_50560;
var statearr_50756_51172 = state_50560__$1;
(statearr_50756_51172[(2)] = inst_50351);

(statearr_50756_51172[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50561 === (84))){
var inst_50531 = (state_50560[(2)]);
var state_50560__$1 = (function (){var statearr_50757 = state_50560;
(statearr_50757[(29)] = inst_50531);

return statearr_50757;
})();
var statearr_50758_51173 = state_50560__$1;
(statearr_50758_51173[(2)] = null);

(statearr_50758_51173[(1)] = (92));


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
var statearr_50759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50759[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32396__auto__);

(statearr_50759[(1)] = (1));

return statearr_50759;
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
}catch (e50760){var ex__32399__auto__ = e50760;
var statearr_50761_51174 = state_50560;
(statearr_50761_51174[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_50560[(4)]))){
var statearr_50762_51175 = state_50560;
(statearr_50762_51175[(1)] = cljs.core.first((state_50560[(4)])));

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
var state__32478__auto__ = (function (){var statearr_50763 = f__32477__auto__();
(statearr_50763[(6)] = c__32476__auto__);

return statearr_50763;
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
