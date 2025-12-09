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
var len__5749__auto___50457 = arguments.length;
var i__5750__auto___50458 = (0);
while(true){
if((i__5750__auto___50458 < len__5749__auto___50457)){
args__5755__auto__.push((arguments[i__5750__auto___50458]));

var G__50459 = (i__5750__auto___50458 + (1));
i__5750__auto___50458 = G__50459;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__49620,p__49621){
var map__49622 = p__49620;
var map__49622__$1 = cljs.core.__destructure_map(map__49622);
var value = map__49622__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49622__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__49623 = p__49621;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49623,(0),null);
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
if(cljs.core.truth_((function (){var G__49627 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__49626 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__49626.cljs$core$IFn$_invoke$arity$1 ? fexpr__49626.cljs$core$IFn$_invoke$arity$1(G__49627) : fexpr__49626.call(null,G__49627));
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
var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_49631){
var state_val_49632 = (state_49631[(1)]);
if((state_val_49632 === (1))){
var state_49631__$1 = state_49631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49631__$1,(2),bb_web_ds_tools.runtime.webr.input_buffer,text);
} else {
if((state_val_49632 === (2))){
var inst_49629 = (state_49631[(2)]);
var state_49631__$1 = state_49631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49631__$1,inst_49629);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32374__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32374__auto____0 = (function (){
var statearr_49633 = [null,null,null,null,null,null,null];
(statearr_49633[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32374__auto__);

(statearr_49633[(1)] = (1));

return statearr_49633;
});
var bb_web_ds_tools$runtime$webr$state_machine__32374__auto____1 = (function (state_49631){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_49631);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e49634){var ex__32377__auto__ = e49634;
var statearr_49635_50467 = state_49631;
(statearr_49635_50467[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_49631[(4)]))){
var statearr_49636_50468 = state_49631;
(statearr_49636_50468[(1)] = cljs.core.first((state_49631[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50469 = state_49631;
state_49631 = G__50469;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32374__auto__ = function(state_49631){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32374__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32374__auto____1.call(this,state_49631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32374__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32374__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_49637 = f__32463__auto__();
(statearr_49637[(6)] = c__32462__auto__);

return statearr_49637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),viewer__$1], null));

}
}
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq49618){
var G__49619 = cljs.core.first(seq49618);
var seq49618__$1 = cljs.core.next(seq49618);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49619,seq49618__$1);
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
var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_49718){
var state_val_49719 = (state_49718[(1)]);
if((state_val_49719 === (7))){
var inst_49714 = (state_49718[(2)]);
var state_49718__$1 = state_49718;
var statearr_49720_50470 = state_49718__$1;
(statearr_49720_50470[(2)] = inst_49714);

(statearr_49720_50470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (20))){
var inst_49694 = (state_49718[(7)]);
var inst_49698 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49694);
var state_49718__$1 = state_49718;
var statearr_49721_50471 = state_49718__$1;
(statearr_49721_50471[(2)] = inst_49698);

(statearr_49721_50471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (1))){
var inst_49639 = (state_49718[(8)]);
var inst_49639__$1 = msg.type;
var inst_49641 = msg.data;
var inst_49652 = ["stderr",null,"stdout",null];
var inst_49653 = (new cljs.core.PersistentArrayMap(null,2,inst_49652,null));
var inst_49654 = (new cljs.core.PersistentHashSet(null,inst_49653,null));
var inst_49655 = (inst_49654.cljs$core$IFn$_invoke$arity$1 ? inst_49654.cljs$core$IFn$_invoke$arity$1(inst_49639__$1) : inst_49654.call(null,inst_49639__$1));
var state_49718__$1 = (function (){var statearr_49722 = state_49718;
(statearr_49722[(8)] = inst_49639__$1);

(statearr_49722[(9)] = inst_49641);

return statearr_49722;
})();
if(cljs.core.truth_(inst_49655)){
var statearr_49723_50472 = state_49718__$1;
(statearr_49723_50472[(1)] = (2));

} else {
var statearr_49725_50473 = state_49718__$1;
(statearr_49725_50473[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (24))){
var inst_49712 = (state_49718[(2)]);
var state_49718__$1 = state_49718;
var statearr_49728_50474 = state_49718__$1;
(statearr_49728_50474[(2)] = inst_49712);

(statearr_49728_50474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (4))){
var inst_49716 = (state_49718[(2)]);
var state_49718__$1 = state_49718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49718__$1,inst_49716);
} else {
if((state_val_49719 === (15))){
var inst_49688 = (state_49718[(2)]);
var state_49718__$1 = state_49718;
if(cljs.core.truth_(inst_49688)){
var statearr_49736_50475 = state_49718__$1;
(statearr_49736_50475[(1)] = (16));

} else {
var statearr_49737_50476 = state_49718__$1;
(statearr_49737_50476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (21))){
var inst_49639 = (state_49718[(8)]);
var inst_49700 = (state_49718[(2)]);
var inst_49701 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49702 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49639);
var inst_49703 = [inst_49702,inst_49700];
var inst_49704 = cljs.core.PersistentHashMap.fromArrays(inst_49701,inst_49703);
var _ = (function (){var statearr_49743 = state_49718;
(statearr_49743[(4)] = cljs.core.rest((state_49718[(4)])));

return statearr_49743;
})();
var state_49718__$1 = state_49718;
var statearr_49744_50477 = state_49718__$1;
(statearr_49744_50477[(2)] = inst_49704);

(statearr_49744_50477[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (13))){
var inst_49680 = (state_49718[(10)]);
var inst_49683 = cljs.core.ex_data(inst_49680);
var inst_49684 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49683);
var inst_49685 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49684,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49718__$1 = state_49718;
var statearr_49745_50478 = state_49718__$1;
(statearr_49745_50478[(2)] = inst_49685);

(statearr_49745_50478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (22))){
var state_49718__$1 = state_49718;
var statearr_49746_50479 = state_49718__$1;
(statearr_49746_50479[(2)] = null);

(statearr_49746_50479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (6))){
var state_49718__$1 = state_49718;
var statearr_49747_50480 = state_49718__$1;
(statearr_49747_50480[(1)] = (22));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (17))){
var inst_49680 = (state_49718[(10)]);
var state_49718__$1 = state_49718;
var statearr_49749_50481 = state_49718__$1;
(statearr_49749_50481[(2)] = inst_49680);

(statearr_49749_50481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (3))){
var inst_49639 = (state_49718[(8)]);
var inst_49662 = ["message",null,"warning",null];
var inst_49663 = (new cljs.core.PersistentArrayMap(null,2,inst_49662,null));
var inst_49664 = (new cljs.core.PersistentHashSet(null,inst_49663,null));
var inst_49665 = (inst_49664.cljs$core$IFn$_invoke$arity$1 ? inst_49664.cljs$core$IFn$_invoke$arity$1(inst_49639) : inst_49664.call(null,inst_49639));
var state_49718__$1 = state_49718;
if(cljs.core.truth_(inst_49665)){
var statearr_49750_50482 = state_49718__$1;
(statearr_49750_50482[(1)] = (5));

} else {
var statearr_49751_50483 = state_49718__$1;
(statearr_49751_50483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (12))){
var inst_49680 = (state_49718[(10)]);
var inst_49681 = (state_49718[(11)]);
var inst_49680__$1 = (state_49718[(2)]);
var inst_49681__$1 = (inst_49680__$1 instanceof cljs.core.ExceptionInfo);
var state_49718__$1 = (function (){var statearr_49752 = state_49718;
(statearr_49752[(10)] = inst_49680__$1);

(statearr_49752[(11)] = inst_49681__$1);

return statearr_49752;
})();
if(cljs.core.truth_(inst_49681__$1)){
var statearr_49753_50484 = state_49718__$1;
(statearr_49753_50484[(1)] = (13));

} else {
var statearr_49754_50485 = state_49718__$1;
(statearr_49754_50485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (2))){
var inst_49639 = (state_49718[(8)]);
var inst_49641 = (state_49718[(9)]);
var inst_49657 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49658 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49639);
var inst_49659 = [inst_49658,inst_49641];
var inst_49660 = cljs.core.PersistentHashMap.fromArrays(inst_49657,inst_49659);
var state_49718__$1 = state_49718;
var statearr_49755_50486 = state_49718__$1;
(statearr_49755_50486[(2)] = inst_49660);

(statearr_49755_50486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (23))){
var state_49718__$1 = state_49718;
var statearr_49757_50487 = state_49718__$1;
(statearr_49757_50487[(2)] = null);

(statearr_49757_50487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (19))){
var inst_49695 = (state_49718[(12)]);
var state_49718__$1 = state_49718;
var statearr_49758_50488 = state_49718__$1;
(statearr_49758_50488[(2)] = inst_49695);

(statearr_49758_50488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (11))){
var _ = (function (){var statearr_49759 = state_49718;
(statearr_49759[(4)] = cljs.core.rest((state_49718[(4)])));

return statearr_49759;
})();
var state_49718__$1 = state_49718;
var ex49756 = (state_49718__$1[(2)]);
var statearr_49760_50489 = state_49718__$1;
(statearr_49760_50489[(5)] = ex49756);


var statearr_49761_50490 = state_49718__$1;
(statearr_49761_50490[(1)] = (10));

(statearr_49761_50490[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (9))){
var inst_49707 = (state_49718[(2)]);
var state_49718__$1 = state_49718;
var statearr_49762_50491 = state_49718__$1;
(statearr_49762_50491[(2)] = inst_49707);

(statearr_49762_50491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (5))){
var state_49718__$1 = state_49718;
var statearr_49763_50492 = state_49718__$1;
(statearr_49763_50492[(2)] = null);

(statearr_49763_50492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (14))){
var inst_49681 = (state_49718[(11)]);
var state_49718__$1 = state_49718;
var statearr_49764_50493 = state_49718__$1;
(statearr_49764_50493[(2)] = inst_49681);

(statearr_49764_50493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (16))){
var inst_49680 = (state_49718[(10)]);
var inst_49690 = (function(){throw inst_49680})();
var state_49718__$1 = state_49718;
var statearr_49765_50494 = state_49718__$1;
(statearr_49765_50494[(2)] = inst_49690);

(statearr_49765_50494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (10))){
var inst_49639 = (state_49718[(8)]);
var inst_49667 = (state_49718[(2)]);
var inst_49668 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49669 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_49639);
var inst_49670 = [inst_49669,"Error decoding message"];
var inst_49671 = cljs.core.PersistentHashMap.fromArrays(inst_49668,inst_49670);
var state_49718__$1 = (function (){var statearr_49766 = state_49718;
(statearr_49766[(13)] = inst_49667);

return statearr_49766;
})();
var statearr_49767_50495 = state_49718__$1;
(statearr_49767_50495[(2)] = inst_49671);

(statearr_49767_50495[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (18))){
var inst_49694 = (state_49718[(7)]);
var inst_49695 = (state_49718[(12)]);
var inst_49693 = (state_49718[(2)]);
var inst_49694__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_49693,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_49695__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_49694__$1);
var state_49718__$1 = (function (){var statearr_49768 = state_49718;
(statearr_49768[(7)] = inst_49694__$1);

(statearr_49768[(12)] = inst_49695__$1);

return statearr_49768;
})();
if(cljs.core.truth_(inst_49695__$1)){
var statearr_49769_50496 = state_49718__$1;
(statearr_49769_50496[(1)] = (19));

} else {
var statearr_49770_50497 = state_49718__$1;
(statearr_49770_50497[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49719 === (8))){
var inst_49641 = (state_49718[(9)]);
var _ = (function (){var statearr_49771 = state_49718;
(statearr_49771[(4)] = cljs.core.cons((11),(state_49718[(4)])));

return statearr_49771;
})();
var inst_49677 = bb_web_ds_tools.runtime.webr.to_js(inst_49641);
var inst_49678 = cljs.core.async.interop.p__GT_c(inst_49677);
var state_49718__$1 = state_49718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49718__$1,(12),inst_49678);
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
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto__ = null;
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto____0 = (function (){
var statearr_49772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49772[(0)] = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto__);

(statearr_49772[(1)] = (1));

return statearr_49772;
});
var bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto____1 = (function (state_49718){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_49718);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e49773){var ex__32377__auto__ = e49773;
var statearr_49774_50498 = state_49718;
(statearr_49774_50498[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_49718[(4)]))){
var statearr_49775_50501 = state_49718;
(statearr_49775_50501[(1)] = cljs.core.first((state_49718[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50502 = state_49718;
state_49718 = G__50502;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto__ = function(state_49718){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto____1.call(this,state_49718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto____0;
bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto____1;
return bb_web_ds_tools$runtime$webr$process_output_msg_$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_49776 = f__32463__auto__();
(statearr_49776[(6)] = c__32462__auto__);

return statearr_49776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
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
var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_49826){
var state_val_49827 = (state_49826[(1)]);
if((state_val_49827 === (7))){
var inst_49822 = (state_49826[(2)]);
var state_49826__$1 = state_49826;
var statearr_49828_50504 = state_49826__$1;
(statearr_49828_50504[(2)] = inst_49822);

(statearr_49828_50504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (1))){
var inst_49777 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var state_49826__$1 = state_49826;
if(cljs.core.truth_(inst_49777)){
var statearr_49829_50505 = state_49826__$1;
(statearr_49829_50505[(1)] = (2));

} else {
var statearr_49830_50506 = state_49826__$1;
(statearr_49830_50506[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (4))){
var inst_49824 = (state_49826[(2)]);
var state_49826__$1 = state_49826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49826__$1,inst_49824);
} else {
if((state_val_49827 === (15))){
var inst_49809 = (state_49826[(2)]);
var state_49826__$1 = state_49826;
if(cljs.core.truth_(inst_49809)){
var statearr_49831_50507 = state_49826__$1;
(statearr_49831_50507[(1)] = (16));

} else {
var statearr_49832_50508 = state_49826__$1;
(statearr_49832_50508[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (13))){
var inst_49801 = (state_49826[(7)]);
var inst_49804 = cljs.core.ex_data(inst_49801);
var inst_49805 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49804);
var inst_49806 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49805,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49826__$1 = state_49826;
var statearr_49833_50509 = state_49826__$1;
(statearr_49833_50509[(2)] = inst_49806);

(statearr_49833_50509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (6))){
var inst_49820 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
var state_49826__$1 = state_49826;
var statearr_49834_50510 = state_49826__$1;
(statearr_49834_50510[(2)] = inst_49820);

(statearr_49834_50510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (17))){
var inst_49801 = (state_49826[(7)]);
var state_49826__$1 = state_49826;
var statearr_49835_50511 = state_49826__$1;
(statearr_49835_50511[(2)] = inst_49801);

(statearr_49835_50511[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (3))){
var inst_49781 = (typeof WebR !== 'undefined');
var state_49826__$1 = state_49826;
if(cljs.core.truth_(inst_49781)){
var statearr_49836_50512 = state_49826__$1;
(statearr_49836_50512[(1)] = (5));

} else {
var statearr_49837_50513 = state_49826__$1;
(statearr_49837_50513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (12))){
var inst_49801 = (state_49826[(7)]);
var inst_49802 = (state_49826[(8)]);
var inst_49801__$1 = (state_49826[(2)]);
var inst_49802__$1 = (inst_49801__$1 instanceof cljs.core.ExceptionInfo);
var state_49826__$1 = (function (){var statearr_49840 = state_49826;
(statearr_49840[(7)] = inst_49801__$1);

(statearr_49840[(8)] = inst_49802__$1);

return statearr_49840;
})();
if(cljs.core.truth_(inst_49802__$1)){
var statearr_49841_50514 = state_49826__$1;
(statearr_49841_50514[(1)] = (13));

} else {
var statearr_49842_50515 = state_49826__$1;
(statearr_49842_50515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (2))){
var inst_49779 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var state_49826__$1 = state_49826;
var statearr_49843_50516 = state_49826__$1;
(statearr_49843_50516[(2)] = inst_49779);

(statearr_49843_50516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (11))){
var _ = (function (){var statearr_49844 = state_49826;
(statearr_49844[(4)] = cljs.core.rest((state_49826[(4)])));

return statearr_49844;
})();
var state_49826__$1 = state_49826;
var ex49838 = (state_49826__$1[(2)]);
var statearr_49845_50517 = state_49826__$1;
(statearr_49845_50517[(5)] = ex49838);


var statearr_49846_50518 = state_49826__$1;
(statearr_49846_50518[(1)] = (10));

(statearr_49846_50518[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (9))){
var inst_49818 = (state_49826[(2)]);
var state_49826__$1 = state_49826;
var statearr_49851_50519 = state_49826__$1;
(statearr_49851_50519[(2)] = inst_49818);

(statearr_49851_50519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (5))){
var state_49826__$1 = state_49826;
var statearr_49860_50520 = state_49826__$1;
(statearr_49860_50520[(2)] = null);

(statearr_49860_50520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (14))){
var inst_49802 = (state_49826[(8)]);
var state_49826__$1 = state_49826;
var statearr_49869_50521 = state_49826__$1;
(statearr_49869_50521[(2)] = inst_49802);

(statearr_49869_50521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (16))){
var inst_49801 = (state_49826[(7)]);
var inst_49811 = (function(){throw inst_49801})();
var state_49826__$1 = state_49826;
var statearr_49874_50522 = state_49826__$1;
(statearr_49874_50522[(2)] = inst_49811);

(statearr_49874_50522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (10))){
var inst_49783 = (state_49826[(2)]);
var inst_49784 = console.error("WebR Init Error:",inst_49783);
var inst_49785 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49783)].join('');
var inst_49786 = (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(inst_49785) : on_error.call(null,inst_49785));
var state_49826__$1 = (function (){var statearr_49875 = state_49826;
(statearr_49875[(9)] = inst_49784);

return statearr_49875;
})();
var statearr_49876_50523 = state_49826__$1;
(statearr_49876_50523[(2)] = inst_49786);

(statearr_49876_50523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (18))){
var inst_49814 = (state_49826[(2)]);
var inst_49815 = (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
var _ = (function (){var statearr_49877 = state_49826;
(statearr_49877[(4)] = cljs.core.rest((state_49826[(4)])));

return statearr_49877;
})();
var state_49826__$1 = (function (){var statearr_49878 = state_49826;
(statearr_49878[(10)] = inst_49814);

return statearr_49878;
})();
var statearr_49879_50524 = state_49826__$1;
(statearr_49879_50524[(2)] = inst_49815);

(statearr_49879_50524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49827 === (8))){
var _ = (function (){var statearr_49880 = state_49826;
(statearr_49880[(4)] = cljs.core.cons((11),(state_49826[(4)])));

return statearr_49880;
})();
var inst_49792 = [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109)];
var inst_49793 = [(3),"https://webr.r-wasm.org/v0.5.7/"];
var inst_49794 = cljs.core.PersistentHashMap.fromArrays(inst_49792,inst_49793);
var inst_49795 = cljs.core.clj__GT_js(inst_49794);
var inst_49796 = (new WebR(inst_49795));
var inst_49797 = cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,inst_49796);
var inst_49798 = bb_web_ds_tools.runtime.webr.init_obj(inst_49796);
var inst_49799 = cljs.core.async.interop.p__GT_c(inst_49798);
var state_49826__$1 = (function (){var statearr_49883 = state_49826;
(statearr_49883[(11)] = inst_49797);

return statearr_49883;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49826__$1,(12),inst_49799);
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
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto__ = null;
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto____0 = (function (){
var statearr_49886 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49886[(0)] = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto__);

(statearr_49886[(1)] = (1));

return statearr_49886;
});
var bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto____1 = (function (state_49826){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_49826);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e49887){var ex__32377__auto__ = e49887;
var statearr_49888_50525 = state_49826;
(statearr_49888_50525[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_49826[(4)]))){
var statearr_49889_50526 = state_49826;
(statearr_49889_50526[(1)] = cljs.core.first((state_49826[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50527 = state_49826;
state_49826 = G__50527;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto__ = function(state_49826){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto____1.call(this,state_49826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto____0;
bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto____1;
return bb_web_ds_tools$runtime$webr$load_runtime_main_$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_49890 = f__32463__auto__();
(statearr_49890[(6)] = c__32462__auto__);

return statearr_49890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
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
var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_50259){
var state_val_50260 = (state_50259[(1)]);
if((state_val_50260 === (65))){
var inst_50084 = (state_50259[(7)]);
var inst_50088 = cljs.core.chunk_first(inst_50084);
var inst_50089 = cljs.core.chunk_rest(inst_50084);
var inst_50090 = cljs.core.count(inst_50088);
var inst_50067 = inst_50089;
var inst_50068 = inst_50088;
var inst_50069 = inst_50090;
var inst_50070 = (0);
var state_50259__$1 = (function (){var statearr_50261 = state_50259;
(statearr_50261[(8)] = inst_50067);

(statearr_50261[(9)] = inst_50068);

(statearr_50261[(10)] = inst_50069);

(statearr_50261[(11)] = inst_50070);

return statearr_50261;
})();
var statearr_50262_50532 = state_50259__$1;
(statearr_50262_50532[(2)] = null);

(statearr_50262_50532[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (70))){
var inst_50084 = (state_50259[(7)]);
var inst_50098 = (state_50259[(2)]);
var inst_50099 = cljs.core.next(inst_50084);
var inst_50067 = inst_50099;
var inst_50068 = null;
var inst_50069 = (0);
var inst_50070 = (0);
var state_50259__$1 = (function (){var statearr_50263 = state_50259;
(statearr_50263[(12)] = inst_50098);

(statearr_50263[(8)] = inst_50067);

(statearr_50263[(9)] = inst_50068);

(statearr_50263[(10)] = inst_50069);

(statearr_50263[(11)] = inst_50070);

return statearr_50263;
})();
var statearr_50264_50534 = state_50259__$1;
(statearr_50264_50534[(2)] = null);

(statearr_50264_50534[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (62))){
var inst_50084 = (state_50259[(7)]);
var inst_50086 = cljs.core.chunked_seq_QMARK_(inst_50084);
var state_50259__$1 = state_50259;
if(inst_50086){
var statearr_50265_50538 = state_50259__$1;
(statearr_50265_50538[(1)] = (65));

} else {
var statearr_50266_50539 = state_50259__$1;
(statearr_50266_50539[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (74))){
var inst_50116 = (state_50259[(13)]);
var inst_50159 = (state_50259[(14)]);
var inst_50159__$1 = cljs.core.seq(inst_50116);
var state_50259__$1 = (function (){var statearr_50267 = state_50259;
(statearr_50267[(14)] = inst_50159__$1);

return statearr_50267;
})();
if(inst_50159__$1){
var statearr_50268_50540 = state_50259__$1;
(statearr_50268_50540[(1)] = (76));

} else {
var statearr_50269_50541 = state_50259__$1;
(statearr_50269_50541[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (7))){
var inst_50251 = (new Error("Shelter not found on WebR instance"));
var inst_50252 = (function(){throw inst_50251})();
var state_50259__$1 = state_50259;
var statearr_50270_50546 = state_50259__$1;
(statearr_50270_50546[(2)] = inst_50252);

(statearr_50270_50546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (59))){
var inst_50075 = (state_50259[(15)]);
var inst_50077 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50075);
var state_50259__$1 = state_50259;
var statearr_50271_50547 = state_50259__$1;
(statearr_50271_50547[(2)] = inst_50077);

(statearr_50271_50547[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (86))){
var inst_50215 = (state_50259[(16)]);
var inst_50218 = cljs.core.ex_data(inst_50215);
var inst_50219 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50218);
var inst_50220 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50219,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50259__$1 = state_50259;
var statearr_50272_50548 = state_50259__$1;
(statearr_50272_50548[(2)] = inst_50220);

(statearr_50272_50548[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (20))){
var inst_49935 = (state_50259[(17)]);
var inst_49945 = (function(){throw inst_49935})();
var state_50259__$1 = state_50259;
var statearr_50273_50550 = state_50259__$1;
(statearr_50273_50550[(2)] = inst_49945);

(statearr_50273_50550[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (72))){
var inst_50023 = (state_50259[(18)]);
var inst_50210 = (state_50259[(19)]);
var inst_50209 = (state_50259[(2)]);
var inst_50210__$1 = bb_web_ds_tools.runtime.webr.to_js(inst_50023);
var inst_50211 = (inst_50210__$1 instanceof Promise);
var state_50259__$1 = (function (){var statearr_50274 = state_50259;
(statearr_50274[(20)] = inst_50209);

(statearr_50274[(19)] = inst_50210__$1);

return statearr_50274;
})();
if(cljs.core.truth_(inst_50211)){
var statearr_50275_50554 = state_50259__$1;
(statearr_50275_50554[(1)] = (82));

} else {
var statearr_50276_50555 = state_50259__$1;
(statearr_50276_50555[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (58))){
var inst_50107 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50277_50556 = state_50259__$1;
(statearr_50277_50556[(2)] = inst_50107);

(statearr_50277_50556[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (60))){
var state_50259__$1 = state_50259;
var statearr_50278_50557 = state_50259__$1;
(statearr_50278_50557[(2)] = null);

(statearr_50278_50557[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (27))){
var inst_49957 = (state_50259[(21)]);
var inst_49960 = cljs.core.ex_data(inst_49957);
var inst_49961 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49960);
var inst_49962 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49961,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50259__$1 = state_50259;
var statearr_50279_50558 = state_50259__$1;
(statearr_50279_50558[(2)] = inst_49962);

(statearr_50279_50558[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (1))){
var state_50259__$1 = state_50259;
var statearr_50280_50559 = state_50259__$1;
(statearr_50280_50559[(2)] = null);

(statearr_50280_50559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (69))){
var state_50259__$1 = state_50259;
var statearr_50281_50561 = state_50259__$1;
(statearr_50281_50561[(2)] = null);

(statearr_50281_50561[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (24))){
var state_50259__$1 = state_50259;
var statearr_50282_50562 = state_50259__$1;
(statearr_50282_50562[(2)] = null);

(statearr_50282_50562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (55))){
var inst_50022 = (state_50259[(22)]);
var inst_50109 = (state_50259[(2)]);
var inst_50114 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50022);
var inst_50115 = cljs.core.seq(inst_50114);
var inst_50116 = inst_50115;
var inst_50117 = null;
var inst_50118 = (0);
var inst_50119 = (0);
var state_50259__$1 = (function (){var statearr_50283 = state_50259;
(statearr_50283[(23)] = inst_50109);

(statearr_50283[(13)] = inst_50116);

(statearr_50283[(24)] = inst_50117);

(statearr_50283[(25)] = inst_50118);

(statearr_50283[(26)] = inst_50119);

return statearr_50283;
})();
var statearr_50284_50563 = state_50259__$1;
(statearr_50284_50563[(2)] = null);

(statearr_50284_50563[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (85))){
var inst_50215 = (state_50259[(16)]);
var inst_50216 = (state_50259[(27)]);
var inst_50215__$1 = (state_50259[(2)]);
var inst_50216__$1 = (inst_50215__$1 instanceof cljs.core.ExceptionInfo);
var state_50259__$1 = (function (){var statearr_50285 = state_50259;
(statearr_50285[(16)] = inst_50215__$1);

(statearr_50285[(27)] = inst_50216__$1);

return statearr_50285;
})();
if(cljs.core.truth_(inst_50216__$1)){
var statearr_50286_50565 = state_50259__$1;
(statearr_50286_50565[(1)] = (86));

} else {
var statearr_50287_50566 = state_50259__$1;
(statearr_50287_50566[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (39))){
var inst_50006 = (state_50259[(28)]);
var inst_50009 = cljs.core.ex_data(inst_50006);
var inst_50010 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_50009);
var inst_50011 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50010,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50259__$1 = state_50259;
var statearr_50288_50568 = state_50259__$1;
(statearr_50288_50568[(2)] = inst_50011);

(statearr_50288_50568[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (88))){
var inst_50223 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50223)){
var statearr_50289_50569 = state_50259__$1;
(statearr_50289_50569[(1)] = (89));

} else {
var statearr_50290_50570 = state_50259__$1;
(statearr_50290_50570[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (46))){
var inst_50059 = cljs.core.PersistentVector.EMPTY;
var state_50259__$1 = state_50259;
var statearr_50291_50571 = state_50259__$1;
(statearr_50291_50571[(2)] = inst_50059);

(statearr_50291_50571[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (4))){
var inst_49899 = (state_50259[(2)]);
var inst_49900 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49904 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49899);
var inst_49905 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_49904];
var inst_49906 = cljs.core.PersistentHashMap.fromArrays(inst_49900,inst_49905);
var inst_49907 = bb_web_ds_tools.runtime.webr.portal_submit(inst_49906);
var state_50259__$1 = state_50259;
var statearr_50293_50573 = state_50259__$1;
(statearr_50293_50573[(2)] = inst_49907);

(statearr_50293_50573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (77))){
var state_50259__$1 = state_50259;
var statearr_50294_50574 = state_50259__$1;
(statearr_50294_50574[(2)] = null);

(statearr_50294_50574[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (95))){
var _ = (function (){var statearr_50295 = state_50259;
(statearr_50295[(4)] = cljs.core.rest((state_50259[(4)])));

return statearr_50295;
})();
var state_50259__$1 = state_50259;
var ex50292 = (state_50259__$1[(2)]);
var statearr_50296_50575 = state_50259__$1;
(statearr_50296_50575[(5)] = ex50292);


if((ex50292 instanceof Error)){
var statearr_50297_50576 = state_50259__$1;
(statearr_50297_50576[(1)] = (94));

(statearr_50297_50576[(5)] = null);

} else {
throw ex50292;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (54))){
var inst_50070 = (state_50259[(11)]);
var inst_50069 = (state_50259[(10)]);
var inst_50072 = (inst_50070 < inst_50069);
var inst_50073 = inst_50072;
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50073)){
var statearr_50298_50577 = state_50259__$1;
(statearr_50298_50577[(1)] = (56));

} else {
var statearr_50299_50578 = state_50259__$1;
(statearr_50299_50578[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (92))){
var inst_50231 = (state_50259[(29)]);
var _ = (function (){var statearr_50300 = state_50259;
(statearr_50300[(4)] = cljs.core.cons((95),(state_50259[(4)])));

return statearr_50300;
})();
var inst_50239 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_50231,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var ___$1 = (function (){var statearr_50301 = state_50259;
(statearr_50301[(4)] = cljs.core.rest((state_50259[(4)])));

return statearr_50301;
})();
var state_50259__$1 = state_50259;
var statearr_50302_50579 = state_50259__$1;
(statearr_50302_50579[(2)] = inst_50239);

(statearr_50302_50579[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (15))){
var inst_49975 = (state_50259[(2)]);
var _ = (function (){var statearr_50303 = state_50259;
(statearr_50303[(4)] = cljs.core.rest((state_50259[(4)])));

return statearr_50303;
})();
var state_50259__$1 = state_50259;
var statearr_50304_50582 = state_50259__$1;
(statearr_50304_50582[(2)] = inst_49975);

(statearr_50304_50582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (48))){
var inst_50039 = (state_50259[(30)]);
var inst_50045 = cljs.core.seq(inst_50039);
var inst_50046 = cljs.core.first(inst_50045);
var inst_50047 = cljs.core.next(inst_50045);
var state_50259__$1 = (function (){var statearr_50305 = state_50259;
(statearr_50305[(31)] = inst_50047);

return statearr_50305;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50259__$1,(50),inst_50046);
} else {
if((state_val_50260 === (50))){
var inst_50040 = (state_50259[(32)]);
var inst_50047 = (state_50259[(31)]);
var inst_50049 = (state_50259[(2)]);
var inst_50050 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50040,inst_50049);
var state_50259__$1 = (function (){var statearr_50306 = state_50259;
(statearr_50306[(33)] = inst_50050);

return statearr_50306;
})();
if(cljs.core.truth_(inst_50047)){
var statearr_50307_50583 = state_50259__$1;
(statearr_50307_50583[(1)] = (51));

} else {
var statearr_50308_50584 = state_50259__$1;
(statearr_50308_50584[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (75))){
var inst_50207 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50309_50585 = state_50259__$1;
(statearr_50309_50585[(2)] = inst_50207);

(statearr_50309_50585[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (21))){
var inst_49935 = (state_50259[(17)]);
var state_50259__$1 = state_50259;
var statearr_50310_50587 = state_50259__$1;
(statearr_50310_50587[(2)] = inst_49935);

(statearr_50310_50587[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (31))){
var inst_49957 = (state_50259[(21)]);
var state_50259__$1 = state_50259;
var statearr_50311_50591 = state_50259__$1;
(statearr_50311_50591[(2)] = inst_49957);

(statearr_50311_50591[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (32))){
var inst_49970 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50312_50592 = state_50259__$1;
(statearr_50312_50592[(2)] = inst_49970);

(statearr_50312_50592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (40))){
var inst_50007 = (state_50259[(34)]);
var state_50259__$1 = state_50259;
var statearr_50313_50593 = state_50259__$1;
(statearr_50313_50593[(2)] = inst_50007);

(statearr_50313_50593[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (91))){
var inst_50228 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50315_50596 = state_50259__$1;
(statearr_50315_50596[(2)] = inst_50228);

(statearr_50315_50596[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (56))){
var inst_50068 = (state_50259[(9)]);
var inst_50070 = (state_50259[(11)]);
var inst_50075 = (state_50259[(15)]);
var inst_50075__$1 = cljs.core._nth(inst_50068,inst_50070);
var state_50259__$1 = (function (){var statearr_50316 = state_50259;
(statearr_50316[(15)] = inst_50075__$1);

return statearr_50316;
})();
if(cljs.core.truth_(inst_50075__$1)){
var statearr_50317_50597 = state_50259__$1;
(statearr_50317_50597[(1)] = (59));

} else {
var statearr_50318_50598 = state_50259__$1;
(statearr_50318_50598[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (33))){
var inst_49978 = (state_50259[(35)]);
var _ = (function (){var statearr_50319 = state_50259;
(statearr_50319[(4)] = cljs.core.cons((35),(state_50259[(4)])));

return statearr_50319;
})();
var ___$1 = (function (){var statearr_50320 = state_50259;
(statearr_50320[(4)] = cljs.core.cons((37),(state_50259[(4)])));

return statearr_50320;
})();
var inst_49999 = [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561)];
var inst_50000 = [true];
var inst_50001 = cljs.core.PersistentHashMap.fromArrays(inst_49999,inst_50000);
var inst_50002 = cljs.core.clj__GT_js(inst_50001);
var inst_50003 = bb_web_ds_tools.runtime.webr.capture_r(inst_49978,code,inst_50002);
var inst_50004 = cljs.core.async.interop.p__GT_c(inst_50003);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50259__$1,(38),inst_50004);
} else {
if((state_val_50260 === (13))){
var inst_49923 = (state_50259[(36)]);
var inst_49933 = cljs.core.async.interop.p__GT_c(inst_49923);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50259__$1,(16),inst_49933);
} else {
if((state_val_50260 === (22))){
var inst_49948 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50321_50599 = state_50259__$1;
(statearr_50321_50599[(2)] = inst_49948);

(statearr_50321_50599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (90))){
var inst_50215 = (state_50259[(16)]);
var state_50259__$1 = state_50259;
var statearr_50322_50600 = state_50259__$1;
(statearr_50322_50600[(2)] = inst_50215);

(statearr_50322_50600[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (36))){
var inst_49984 = (state_50259[(2)]);
var inst_49985 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49986 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49984);
var inst_49987 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_49986];
var inst_49988 = cljs.core.PersistentHashMap.fromArrays(inst_49985,inst_49987);
var inst_49989 = bb_web_ds_tools.runtime.webr.portal_submit(inst_49988);
var state_50259__$1 = state_50259;
var statearr_50323_50601 = state_50259__$1;
(statearr_50323_50601[(2)] = inst_49989);

(statearr_50323_50601[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (41))){
var inst_50014 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50014)){
var statearr_50324_50602 = state_50259__$1;
(statearr_50324_50602[(1)] = (42));

} else {
var statearr_50325_50603 = state_50259__$1;
(statearr_50325_50603[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (89))){
var inst_50215 = (state_50259[(16)]);
var inst_50225 = (function(){throw inst_50215})();
var state_50259__$1 = state_50259;
var statearr_50329_50605 = state_50259__$1;
(statearr_50329_50605[(2)] = inst_50225);

(statearr_50329_50605[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (43))){
var inst_50006 = (state_50259[(28)]);
var state_50259__$1 = state_50259;
var statearr_50330_50607 = state_50259__$1;
(statearr_50330_50607[(2)] = inst_50006);

(statearr_50330_50607[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (61))){
var inst_50070 = (state_50259[(11)]);
var inst_50067 = (state_50259[(8)]);
var inst_50068 = (state_50259[(9)]);
var inst_50069 = (state_50259[(10)]);
var inst_50080 = (state_50259[(2)]);
var inst_50081 = (inst_50070 + (1));
var tmp50326 = inst_50069;
var tmp50327 = inst_50067;
var tmp50328 = inst_50068;
var inst_50067__$1 = tmp50327;
var inst_50068__$1 = tmp50328;
var inst_50069__$1 = tmp50326;
var inst_50070__$1 = inst_50081;
var state_50259__$1 = (function (){var statearr_50331 = state_50259;
(statearr_50331[(37)] = inst_50080);

(statearr_50331[(8)] = inst_50067__$1);

(statearr_50331[(9)] = inst_50068__$1);

(statearr_50331[(10)] = inst_50069__$1);

(statearr_50331[(11)] = inst_50070__$1);

return statearr_50331;
})();
var statearr_50332_50610 = state_50259__$1;
(statearr_50332_50610[(2)] = null);

(statearr_50332_50610[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (29))){
var inst_49965 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_49965)){
var statearr_50333_50611 = state_50259__$1;
(statearr_50333_50611[(1)] = (30));

} else {
var statearr_50334_50612 = state_50259__$1;
(statearr_50334_50612[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (44))){
var inst_50025 = (state_50259[(38)]);
var inst_50019 = (state_50259[(2)]);
var inst_50020 = bb_web_ds_tools.runtime.webr.get_result_props(inst_50019);
var inst_50021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50020,(0),null);
var inst_50022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50020,(1),null);
var inst_50023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50020,(2),null);
var inst_50024 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(inst_50021);
var inst_50025__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,inst_50024);
var inst_50026 = cljs.core.seq(inst_50025__$1);
var state_50259__$1 = (function (){var statearr_50344 = state_50259;
(statearr_50344[(22)] = inst_50022);

(statearr_50344[(18)] = inst_50023);

(statearr_50344[(38)] = inst_50025__$1);

return statearr_50344;
})();
if(inst_50026){
var statearr_50345_50614 = state_50259__$1;
(statearr_50345_50614[(1)] = (45));

} else {
var statearr_50346_50615 = state_50259__$1;
(statearr_50346_50615[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (93))){
var inst_50242 = (state_50259[(2)]);
var inst_50243 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_50244 = [new cljs.core.Keyword(null,"result","result",1415092211),inst_50242];
var inst_50245 = cljs.core.PersistentHashMap.fromArrays(inst_50243,inst_50244);
var inst_50246 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50245);
var _ = (function (){var statearr_50347 = state_50259;
(statearr_50347[(4)] = cljs.core.rest((state_50259[(4)])));

return statearr_50347;
})();
var state_50259__$1 = state_50259;
var statearr_50348_50617 = state_50259__$1;
(statearr_50348_50617[(2)] = inst_50246);

(statearr_50348_50617[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (6))){
var inst_49921 = (state_50259[(39)]);
var inst_49923 = (new inst_49921());
var state_50259__$1 = (function (){var statearr_50349 = state_50259;
(statearr_50349[(36)] = inst_49923);

return statearr_50349;
})();
var statearr_50350_50619 = state_50259__$1;
(statearr_50350_50619[(2)] = null);

(statearr_50350_50619[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (28))){
var inst_49958 = (state_50259[(40)]);
var state_50259__$1 = state_50259;
var statearr_50351_50620 = state_50259__$1;
(statearr_50351_50620[(2)] = inst_49958);

(statearr_50351_50620[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (64))){
var inst_50105 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50352_50621 = state_50259__$1;
(statearr_50352_50621[(2)] = inst_50105);

(statearr_50352_50621[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (51))){
var inst_50047 = (state_50259[(31)]);
var inst_50050 = (state_50259[(33)]);
var inst_50039 = inst_50047;
var inst_50040 = inst_50050;
var state_50259__$1 = (function (){var statearr_50353 = state_50259;
(statearr_50353[(30)] = inst_50039);

(statearr_50353[(32)] = inst_50040);

return statearr_50353;
})();
var statearr_50354_50622 = state_50259__$1;
(statearr_50354_50622[(2)] = null);

(statearr_50354_50622[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (25))){
var inst_49923 = (state_50259[(36)]);
var inst_49973 = (state_50259[(2)]);
var state_50259__$1 = (function (){var statearr_50355 = state_50259;
(statearr_50355[(41)] = inst_49973);

return statearr_50355;
})();
var statearr_50356_50623 = state_50259__$1;
(statearr_50356_50623[(2)] = inst_49923);

(statearr_50356_50623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (34))){
var inst_50249 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50357_50624 = state_50259__$1;
(statearr_50357_50624[(2)] = inst_50249);

(statearr_50357_50624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (17))){
var inst_49935 = (state_50259[(17)]);
var inst_49938 = cljs.core.ex_data(inst_49935);
var inst_49939 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49938);
var inst_49940 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49939,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_50259__$1 = state_50259;
var statearr_50359_50625 = state_50259__$1;
(statearr_50359_50625[(2)] = inst_49940);

(statearr_50359_50625[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (3))){
var inst_50257 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50259__$1,inst_50257);
} else {
if((state_val_50260 === (12))){
var _ = (function (){var statearr_50361 = state_50259;
(statearr_50361[(4)] = cljs.core.rest((state_50259[(4)])));

return statearr_50361;
})();
var state_50259__$1 = state_50259;
var ex50358 = (state_50259__$1[(2)]);
var statearr_50363_50626 = state_50259__$1;
(statearr_50363_50626[(5)] = ex50358);


var statearr_50364_50627 = state_50259__$1;
(statearr_50364_50627[(1)] = (11));

(statearr_50364_50627[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (2))){
var inst_49921 = (state_50259[(39)]);
var _ = (function (){var statearr_50365 = state_50259;
(statearr_50365[(4)] = cljs.core.cons((5),(state_50259[(4)])));

return statearr_50365;
})();
var inst_49916 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_49917 = [new cljs.core.Keyword(null,"code","code",1586293142),code];
var inst_49918 = cljs.core.PersistentHashMap.fromArrays(inst_49916,inst_49917);
var inst_49919 = bb_web_ds_tools.runtime.webr.portal_submit(inst_49918);
var inst_49920 = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance);
var inst_49921__$1 = bb_web_ds_tools.runtime.webr.get_shelter_class(inst_49920);
var state_50259__$1 = (function (){var statearr_50366 = state_50259;
(statearr_50366[(42)] = inst_49919);

(statearr_50366[(39)] = inst_49921__$1);

return statearr_50366;
})();
if(cljs.core.truth_(inst_49921__$1)){
var statearr_50367_50628 = state_50259__$1;
(statearr_50367_50628[(1)] = (6));

} else {
var statearr_50368_50629 = state_50259__$1;
(statearr_50368_50629[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (66))){
var inst_50084 = (state_50259[(7)]);
var inst_50093 = (state_50259[(43)]);
var inst_50093__$1 = cljs.core.first(inst_50084);
var state_50259__$1 = (function (){var statearr_50369 = state_50259;
(statearr_50369[(43)] = inst_50093__$1);

return statearr_50369;
})();
if(cljs.core.truth_(inst_50093__$1)){
var statearr_50370_50630 = state_50259__$1;
(statearr_50370_50630[(1)] = (68));

} else {
var statearr_50371_50631 = state_50259__$1;
(statearr_50371_50631[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (23))){
var inst_49923 = (state_50259[(36)]);
var inst_49954 = bb_web_ds_tools.runtime.webr.init_obj(inst_49923);
var inst_49955 = cljs.core.async.interop.p__GT_c(inst_49954);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50259__$1,(26),inst_49955);
} else {
if((state_val_50260 === (47))){
var inst_50061 = (state_50259[(2)]);
var inst_50066 = cljs.core.seq(inst_50061);
var inst_50067 = inst_50066;
var inst_50068 = null;
var inst_50069 = (0);
var inst_50070 = (0);
var state_50259__$1 = (function (){var statearr_50372 = state_50259;
(statearr_50372[(8)] = inst_50067);

(statearr_50372[(9)] = inst_50068);

(statearr_50372[(10)] = inst_50069);

(statearr_50372[(11)] = inst_50070);

return statearr_50372;
})();
var statearr_50374_50632 = state_50259__$1;
(statearr_50374_50632[(2)] = null);

(statearr_50374_50632[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (35))){
var inst_49978 = (state_50259[(35)]);
var _ = (function (){var statearr_50376 = state_50259;
(statearr_50376[(4)] = cljs.core.rest((state_50259[(4)])));

return statearr_50376;
})();
var inst_49980 = (state_50259[(2)]);
var inst_49981 = bb_web_ds_tools.runtime.webr.purge_shelter(inst_49978);
var ___$1 = (function (){var temp__5825__auto__ = (state_50259[(5)]);
if(cljs.core.truth_(temp__5825__auto__)){
var e__31606__auto__ = temp__5825__auto__;
throw e__31606__auto__;
} else {
return null;
}
})();
var state_50259__$1 = (function (){var statearr_50377 = state_50259;
(statearr_50377[(44)] = inst_49981);

return statearr_50377;
})();
var statearr_50378_50633 = state_50259__$1;
(statearr_50378_50633[(2)] = inst_49980);

(statearr_50378_50633[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (82))){
var inst_50210 = (state_50259[(19)]);
var inst_50213 = cljs.core.async.interop.p__GT_c(inst_50210);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50259__$1,(85),inst_50213);
} else {
if((state_val_50260 === (76))){
var inst_50159 = (state_50259[(14)]);
var inst_50161 = cljs.core.chunked_seq_QMARK_(inst_50159);
var state_50259__$1 = state_50259;
if(inst_50161){
var statearr_50379_50634 = state_50259__$1;
(statearr_50379_50634[(1)] = (79));

} else {
var statearr_50380_50635 = state_50259__$1;
(statearr_50380_50635[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (19))){
var inst_49943 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_49943)){
var statearr_50381_50636 = state_50259__$1;
(statearr_50381_50636[(1)] = (20));

} else {
var statearr_50382_50637 = state_50259__$1;
(statearr_50382_50637[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (57))){
var inst_50067 = (state_50259[(8)]);
var inst_50084 = (state_50259[(7)]);
var inst_50084__$1 = cljs.core.seq(inst_50067);
var state_50259__$1 = (function (){var statearr_50383 = state_50259;
(statearr_50383[(7)] = inst_50084__$1);

return statearr_50383;
})();
if(inst_50084__$1){
var statearr_50384_50640 = state_50259__$1;
(statearr_50384_50640[(1)] = (62));

} else {
var statearr_50385_50641 = state_50259__$1;
(statearr_50385_50641[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (68))){
var inst_50093 = (state_50259[(43)]);
var inst_50095 = bb_web_ds_tools.runtime.webr.portal_submit(inst_50093);
var state_50259__$1 = state_50259;
var statearr_50386_50642 = state_50259__$1;
(statearr_50386_50642[(2)] = inst_50095);

(statearr_50386_50642[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (11))){
var inst_49924 = (state_50259[(2)]);
var inst_49925 = (function(){throw inst_49924})();
var state_50259__$1 = state_50259;
var statearr_50388_50644 = state_50259__$1;
(statearr_50388_50644[(2)] = inst_49925);

(statearr_50388_50644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (9))){
var inst_49923 = (state_50259[(36)]);
var _ = (function (){var statearr_50390 = state_50259;
(statearr_50390[(4)] = cljs.core.cons((12),(state_50259[(4)])));

return statearr_50390;
})();
var inst_49931 = (inst_49923 instanceof Promise);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_49931)){
var statearr_50393_50645 = state_50259__$1;
(statearr_50393_50645[(1)] = (13));

} else {
var statearr_50395_50648 = state_50259__$1;
(statearr_50395_50648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (5))){
var _ = (function (){var statearr_50396 = state_50259;
(statearr_50396[(4)] = cljs.core.rest((state_50259[(4)])));

return statearr_50396;
})();
var state_50259__$1 = state_50259;
var ex50387 = (state_50259__$1[(2)]);
var statearr_50397_50650 = state_50259__$1;
(statearr_50397_50650[(5)] = ex50387);


var statearr_50398_50651 = state_50259__$1;
(statearr_50398_50651[(1)] = (4));

(statearr_50398_50651[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (83))){
var inst_50210 = (state_50259[(19)]);
var state_50259__$1 = state_50259;
var statearr_50399_50652 = state_50259__$1;
(statearr_50399_50652[(2)] = inst_50210);

(statearr_50399_50652[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (14))){
var inst_49923 = (state_50259[(36)]);
var inst_49950 = inst_49923.init;
var inst_49951 = (inst_49950 == null);
var inst_49952 = cljs.core.not(inst_49951);
var state_50259__$1 = state_50259;
if(inst_49952){
var statearr_50401_50653 = state_50259__$1;
(statearr_50401_50653[(1)] = (23));

} else {
var statearr_50402_50654 = state_50259__$1;
(statearr_50402_50654[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (45))){
var inst_50025 = (state_50259[(38)]);
var inst_50035 = cljs.core.seq(inst_50025);
var inst_50036 = cljs.core.first(inst_50035);
var inst_50037 = cljs.core.next(inst_50035);
var inst_50038 = cljs.core.PersistentVector.EMPTY;
var inst_50039 = inst_50025;
var inst_50040 = inst_50038;
var state_50259__$1 = (function (){var statearr_50406 = state_50259;
(statearr_50406[(45)] = inst_50036);

(statearr_50406[(46)] = inst_50037);

(statearr_50406[(30)] = inst_50039);

(statearr_50406[(32)] = inst_50040);

return statearr_50406;
})();
var statearr_50407_50655 = state_50259__$1;
(statearr_50407_50655[(2)] = null);

(statearr_50407_50655[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (53))){
var inst_50055 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50408_50656 = state_50259__$1;
(statearr_50408_50656[(2)] = inst_50055);

(statearr_50408_50656[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (78))){
var inst_50205 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50409_50657 = state_50259__$1;
(statearr_50409_50657[(2)] = inst_50205);

(statearr_50409_50657[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (26))){
var inst_49957 = (state_50259[(21)]);
var inst_49958 = (state_50259[(40)]);
var inst_49957__$1 = (state_50259[(2)]);
var inst_49958__$1 = (inst_49957__$1 instanceof cljs.core.ExceptionInfo);
var state_50259__$1 = (function (){var statearr_50410 = state_50259;
(statearr_50410[(21)] = inst_49957__$1);

(statearr_50410[(40)] = inst_49958__$1);

return statearr_50410;
})();
if(cljs.core.truth_(inst_49958__$1)){
var statearr_50411_50658 = state_50259__$1;
(statearr_50411_50658[(1)] = (27));

} else {
var statearr_50412_50659 = state_50259__$1;
(statearr_50412_50659[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (16))){
var inst_49935 = (state_50259[(17)]);
var inst_49936 = (state_50259[(47)]);
var inst_49935__$1 = (state_50259[(2)]);
var inst_49936__$1 = (inst_49935__$1 instanceof cljs.core.ExceptionInfo);
var state_50259__$1 = (function (){var statearr_50413 = state_50259;
(statearr_50413[(17)] = inst_49935__$1);

(statearr_50413[(47)] = inst_49936__$1);

return statearr_50413;
})();
if(cljs.core.truth_(inst_49936__$1)){
var statearr_50414_50660 = state_50259__$1;
(statearr_50414_50660[(1)] = (17));

} else {
var statearr_50415_50661 = state_50259__$1;
(statearr_50415_50661[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (81))){
var inst_50202 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50416_50662 = state_50259__$1;
(statearr_50416_50662[(2)] = inst_50202);

(statearr_50416_50662[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (79))){
var inst_50159 = (state_50259[(14)]);
var inst_50163 = cljs.core.chunk_first(inst_50159);
var inst_50164 = cljs.core.chunk_rest(inst_50159);
var inst_50165 = cljs.core.count(inst_50163);
var inst_50116 = inst_50164;
var inst_50117 = inst_50163;
var inst_50118 = inst_50165;
var inst_50119 = (0);
var state_50259__$1 = (function (){var statearr_50417 = state_50259;
(statearr_50417[(13)] = inst_50116);

(statearr_50417[(24)] = inst_50117);

(statearr_50417[(25)] = inst_50118);

(statearr_50417[(26)] = inst_50119);

return statearr_50417;
})();
var statearr_50418_50663 = state_50259__$1;
(statearr_50418_50663[(2)] = null);

(statearr_50418_50663[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (38))){
var inst_50006 = (state_50259[(28)]);
var inst_50007 = (state_50259[(34)]);
var inst_50006__$1 = (state_50259[(2)]);
var inst_50007__$1 = (inst_50006__$1 instanceof cljs.core.ExceptionInfo);
var state_50259__$1 = (function (){var statearr_50419 = state_50259;
(statearr_50419[(28)] = inst_50006__$1);

(statearr_50419[(34)] = inst_50007__$1);

return statearr_50419;
})();
if(cljs.core.truth_(inst_50007__$1)){
var statearr_50420_50664 = state_50259__$1;
(statearr_50420_50664[(1)] = (39));

} else {
var statearr_50421_50665 = state_50259__$1;
(statearr_50421_50665[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (87))){
var inst_50216 = (state_50259[(27)]);
var state_50259__$1 = state_50259;
var statearr_50425_50666 = state_50259__$1;
(statearr_50425_50666[(2)] = inst_50216);

(statearr_50425_50666[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (30))){
var inst_49957 = (state_50259[(21)]);
var inst_49967 = (function(){throw inst_49957})();
var state_50259__$1 = state_50259;
var statearr_50426_50667 = state_50259__$1;
(statearr_50426_50667[(2)] = inst_49967);

(statearr_50426_50667[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (73))){
var inst_50117 = (state_50259[(24)]);
var inst_50119 = (state_50259[(26)]);
var inst_50116 = (state_50259[(13)]);
var inst_50118 = (state_50259[(25)]);
var inst_50124 = cljs.core._nth(inst_50117,inst_50119);
var inst_50125 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_50124);
var inst_50126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50127 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50128 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_50129 = [(720),(800)];
var inst_50130 = cljs.core.PersistentHashMap.fromArrays(inst_50128,inst_50129);
var inst_50131 = [inst_50130];
var inst_50132 = cljs.core.PersistentHashMap.fromArrays(inst_50127,inst_50131);
var inst_50133 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50134 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50135 = bb_web_ds_tools.runtime.webr.get_width(inst_50124);
var inst_50136 = (inst_50135 * 0.72);
var inst_50137 = (inst_50136 | (0));
var inst_50139 = bb_web_ds_tools.runtime.webr.get_height(inst_50124);
var inst_50140 = (inst_50139 * 0.72);
var inst_50141 = (inst_50140 | (0));
var inst_50142 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_50143 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50125),")"].join('');
var inst_50144 = [inst_50143,"cover"];
var inst_50145 = cljs.core.PersistentHashMap.fromArrays(inst_50142,inst_50144);
var inst_50146 = [inst_50137,inst_50141,inst_50145];
var inst_50147 = cljs.core.PersistentHashMap.fromArrays(inst_50134,inst_50146);
var inst_50148 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_50147];
var inst_50149 = (new cljs.core.PersistentVector(null,2,(5),inst_50133,inst_50148,null));
var inst_50150 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_50132,inst_50149];
var inst_50151 = (new cljs.core.PersistentVector(null,3,(5),inst_50126,inst_50150,null));
var inst_50152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50153 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_50151,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_50154 = (new cljs.core.PersistentVector(null,3,(5),inst_50152,inst_50153,null));
var inst_50155 = re_frame.core.dispatch(inst_50154);
var inst_50156 = (inst_50119 + (1));
var tmp50422 = inst_50117;
var tmp50423 = inst_50116;
var tmp50424 = inst_50118;
var inst_50116__$1 = tmp50423;
var inst_50117__$1 = tmp50422;
var inst_50118__$1 = tmp50424;
var inst_50119__$1 = inst_50156;
var state_50259__$1 = (function (){var statearr_50427 = state_50259;
(statearr_50427[(48)] = inst_50155);

(statearr_50427[(13)] = inst_50116__$1);

(statearr_50427[(24)] = inst_50117__$1);

(statearr_50427[(25)] = inst_50118__$1);

(statearr_50427[(26)] = inst_50119__$1);

return statearr_50427;
})();
var statearr_50428_50678 = state_50259__$1;
(statearr_50428_50678[(2)] = null);

(statearr_50428_50678[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (10))){
var inst_49978 = (state_50259[(2)]);
var state_50259__$1 = (function (){var statearr_50429 = state_50259;
(statearr_50429[(35)] = inst_49978);

return statearr_50429;
})();
var statearr_50430_50679 = state_50259__$1;
(statearr_50430_50679[(2)] = null);

(statearr_50430_50679[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (18))){
var inst_49936 = (state_50259[(47)]);
var state_50259__$1 = state_50259;
var statearr_50431_50680 = state_50259__$1;
(statearr_50431_50680[(2)] = inst_49936);

(statearr_50431_50680[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (52))){
var inst_50050 = (state_50259[(33)]);
var state_50259__$1 = state_50259;
var statearr_50432_50681 = state_50259__$1;
(statearr_50432_50681[(2)] = inst_50050);

(statearr_50432_50681[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (67))){
var inst_50102 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50433_50682 = state_50259__$1;
(statearr_50433_50682[(2)] = inst_50102);

(statearr_50433_50682[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (71))){
var inst_50119 = (state_50259[(26)]);
var inst_50118 = (state_50259[(25)]);
var inst_50121 = (inst_50119 < inst_50118);
var inst_50122 = inst_50121;
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50122)){
var statearr_50434_50683 = state_50259__$1;
(statearr_50434_50683[(1)] = (73));

} else {
var statearr_50435_50684 = state_50259__$1;
(statearr_50435_50684[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (42))){
var inst_50006 = (state_50259[(28)]);
var inst_50016 = (function(){throw inst_50006})();
var state_50259__$1 = state_50259;
var statearr_50437_50685 = state_50259__$1;
(statearr_50437_50685[(2)] = inst_50016);

(statearr_50437_50685[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (80))){
var inst_50159 = (state_50259[(14)]);
var inst_50168 = cljs.core.first(inst_50159);
var inst_50169 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(inst_50168);
var inst_50170 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50171 = [new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50172 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_50173 = [(720),(800)];
var inst_50174 = cljs.core.PersistentHashMap.fromArrays(inst_50172,inst_50173);
var inst_50175 = [inst_50174];
var inst_50176 = cljs.core.PersistentHashMap.fromArrays(inst_50171,inst_50175);
var inst_50177 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50178 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"style","style",-496642736)];
var inst_50179 = bb_web_ds_tools.runtime.webr.get_width(inst_50168);
var inst_50180 = (inst_50179 * 0.72);
var inst_50181 = (inst_50180 | (0));
var inst_50182 = bb_web_ds_tools.runtime.webr.get_height(inst_50168);
var inst_50183 = (inst_50182 * 0.72);
var inst_50184 = (inst_50183 | (0));
var inst_50185 = [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"background-size","background-size",-1248630243)];
var inst_50186 = ["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50169),")"].join('');
var inst_50187 = [inst_50186,"cover"];
var inst_50188 = cljs.core.PersistentHashMap.fromArrays(inst_50185,inst_50187);
var inst_50189 = [inst_50181,inst_50184,inst_50188];
var inst_50190 = cljs.core.PersistentHashMap.fromArrays(inst_50178,inst_50189);
var inst_50191 = [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),inst_50190];
var inst_50192 = (new cljs.core.PersistentVector(null,2,(5),inst_50177,inst_50191,null));
var inst_50193 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_50176,inst_50192];
var inst_50194 = (new cljs.core.PersistentVector(null,3,(5),inst_50170,inst_50193,null));
var inst_50195 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50196 = [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),inst_50194,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)];
var inst_50197 = (new cljs.core.PersistentVector(null,3,(5),inst_50195,inst_50196,null));
var inst_50198 = re_frame.core.dispatch(inst_50197);
var inst_50199 = cljs.core.next(inst_50159);
var inst_50116 = inst_50199;
var inst_50117 = null;
var inst_50118 = (0);
var inst_50119 = (0);
var state_50259__$1 = (function (){var statearr_50438 = state_50259;
(statearr_50438[(49)] = inst_50198);

(statearr_50438[(13)] = inst_50116);

(statearr_50438[(24)] = inst_50117);

(statearr_50438[(25)] = inst_50118);

(statearr_50438[(26)] = inst_50119);

return statearr_50438;
})();
var statearr_50439_50686 = state_50259__$1;
(statearr_50439_50686[(2)] = null);

(statearr_50439_50686[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (37))){
var _ = (function (){var statearr_50440 = state_50259;
(statearr_50440[(4)] = cljs.core.rest((state_50259[(4)])));

return statearr_50440;
})();
var state_50259__$1 = state_50259;
var ex50436 = (state_50259__$1[(2)]);
var statearr_50441_50687 = state_50259__$1;
(statearr_50441_50687[(5)] = ex50436);


var statearr_50442_50693 = state_50259__$1;
(statearr_50442_50693[(1)] = (36));

(statearr_50442_50693[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (63))){
var state_50259__$1 = state_50259;
var statearr_50443_50694 = state_50259__$1;
(statearr_50443_50694[(2)] = null);

(statearr_50443_50694[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (94))){
var inst_50023 = (state_50259[(18)]);
var inst_50232 = (state_50259[(2)]);
var inst_50233 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50023);
var state_50259__$1 = (function (){var statearr_50444 = state_50259;
(statearr_50444[(50)] = inst_50232);

return statearr_50444;
})();
var statearr_50445_50695 = state_50259__$1;
(statearr_50445_50695[(2)] = inst_50233);

(statearr_50445_50695[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (8))){
var inst_50254 = (state_50259[(2)]);
var _ = (function (){var statearr_50446 = state_50259;
(statearr_50446[(4)] = cljs.core.rest((state_50259[(4)])));

return statearr_50446;
})();
var state_50259__$1 = state_50259;
var statearr_50447_50696 = state_50259__$1;
(statearr_50447_50696[(2)] = inst_50254);

(statearr_50447_50696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (49))){
var inst_50057 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50448_50697 = state_50259__$1;
(statearr_50448_50697[(2)] = inst_50057);

(statearr_50448_50697[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (84))){
var inst_50231 = (state_50259[(2)]);
var state_50259__$1 = (function (){var statearr_50449 = state_50259;
(statearr_50449[(29)] = inst_50231);

return statearr_50449;
})();
var statearr_50450_50698 = state_50259__$1;
(statearr_50450_50698[(2)] = null);

(statearr_50450_50698[(1)] = (92));


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
var bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto__ = null;
var bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto____0 = (function (){
var statearr_50451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50451[(0)] = bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto__);

(statearr_50451[(1)] = (1));

return statearr_50451;
});
var bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto____1 = (function (state_50259){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_50259);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e50452){var ex__32377__auto__ = e50452;
var statearr_50453_50699 = state_50259;
(statearr_50453_50699[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_50259[(4)]))){
var statearr_50454_50700 = state_50259;
(statearr_50454_50700[(1)] = cljs.core.first((state_50259[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50701 = state_50259;
state_50259 = G__50701;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto__ = function(state_50259){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto____1.call(this,state_50259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto____0;
bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto____1;
return bb_web_ds_tools$runtime$webr$eval_in_main_$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_50455 = f__32463__auto__();
(statearr_50455[(6)] = c__32462__auto__);

return statearr_50455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
} else {
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null));
}
});

//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
