goog.provide('bb_web_ds_tools.runtime.webr');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.runtime !== 'undefined') && (typeof bb_web_ds_tools.runtime.webr !== 'undefined') && (typeof bb_web_ds_tools.runtime.webr.webr_instance !== 'undefined')){
} else {
bb_web_ds_tools.runtime.webr.webr_instance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
bb_web_ds_tools.runtime.webr.input_buffer = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1000));
bb_web_ds_tools.runtime.webr.flush_BANG_ = bb_web_ds_tools.components.async_buffer.create(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),bb_web_ds_tools.runtime.webr.input_buffer,new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),(50),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488),(function (xs){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",xs)], null),new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));
})], null));
bb_web_ds_tools.runtime.webr.portal_submit = (function bb_web_ds_tools$runtime$webr$portal_submit(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49637 = arguments.length;
var i__5750__auto___49638 = (0);
while(true){
if((i__5750__auto___49638 < len__5749__auto___49637)){
args__5755__auto__.push((arguments[i__5750__auto___49638]));

var G__49639 = (i__5750__auto___49638 + (1));
i__5750__auto___49638 = G__49639;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__49597,p__49598){
var map__49599 = p__49597;
var map__49599__$1 = cljs.core.__destructure_map(map__49599);
var value = map__49599__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49599__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__49600 = p__49598;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49600,(0),null);
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
if(cljs.core.truth_((function (){var G__49604 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__49603 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__49603.cljs$core$IFn$_invoke$arity$1 ? fexpr__49603.cljs$core$IFn$_invoke$arity$1(G__49604) : fexpr__49603.call(null,G__49604));
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
var c__32431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_49608){
var state_val_49609 = (state_49608[(1)]);
if((state_val_49609 === (1))){
var state_49608__$1 = state_49608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49608__$1,(2),bb_web_ds_tools.runtime.webr.input_buffer,text);
} else {
if((state_val_49609 === (2))){
var inst_49606 = (state_49608[(2)]);
var state_49608__$1 = state_49608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49608__$1,inst_49606);
} else {
return null;
}
}
});
return (function() {
var bb_web_ds_tools$runtime$webr$state_machine__32347__auto__ = null;
var bb_web_ds_tools$runtime$webr$state_machine__32347__auto____0 = (function (){
var statearr_49610 = [null,null,null,null,null,null,null];
(statearr_49610[(0)] = bb_web_ds_tools$runtime$webr$state_machine__32347__auto__);

(statearr_49610[(1)] = (1));

return statearr_49610;
});
var bb_web_ds_tools$runtime$webr$state_machine__32347__auto____1 = (function (state_49608){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_49608);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e49611){var ex__32350__auto__ = e49611;
var statearr_49612_49644 = state_49608;
(statearr_49612_49644[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_49608[(4)]))){
var statearr_49613_49645 = state_49608;
(statearr_49613_49645[(1)] = cljs.core.first((state_49608[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49646 = state_49608;
state_49608 = G__49646;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$runtime$webr$state_machine__32347__auto__ = function(state_49608){
switch(arguments.length){
case 0:
return bb_web_ds_tools$runtime$webr$state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$runtime$webr$state_machine__32347__auto____1.call(this,state_49608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$runtime$webr$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$runtime$webr$state_machine__32347__auto____0;
bb_web_ds_tools$runtime$webr$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$runtime$webr$state_machine__32347__auto____1;
return bb_web_ds_tools$runtime$webr$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_49614 = f__32432__auto__();
(statearr_49614[(6)] = c__32431__auto__);

return statearr_49614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));

return c__32431__auto__;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),viewer__$1], null));

}
}
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq49595){
var G__49596 = cljs.core.first(seq49595);
var seq49595__$1 = cljs.core.next(seq49595);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49596,seq49595__$1);
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
var type = msg.type;
var data = msg.data;
if(cljs.core.truth_((function (){var fexpr__49615 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["stderr",null,"stdout",null], null), null);
return (fexpr__49615.cljs$core$IFn$_invoke$arity$1 ? fexpr__49615.cljs$core$IFn$_invoke$arity$1(type) : fexpr__49615.call(null,type));
})())){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.Keyword(null,"text","text",-1790561697),data], null));
} else {
if(cljs.core.truth_((function (){var fexpr__49616 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["message",null,"warning",null], null), null);
return (fexpr__49616.cljs$core$IFn$_invoke$arity$1 ? fexpr__49616.cljs$core$IFn$_invoke$arity$1(type) : fexpr__49616.call(null,type));
})())){
return data.toJs().then((function (js_data){
var clj_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var text = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(clj_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_data);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
})).catch((function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.Keyword(null,"text","text",-1790561697),"Error decoding message"], null);
}));
} else {
return Promise.resolve(null);

}
}
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
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance))){
return (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
} else {
if((typeof WebR !== 'undefined')){
var options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channelType","channelType",-1693262625),(3),new cljs.core.Keyword(null,"baseUrl","baseUrl",122264109),"https://webr.r-wasm.org/v0.5.7/"], null);
var webr = (new WebR(cljs.core.clj__GT_js(options)));
cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,webr);

return webr.init().then((function (){
return (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
})).catch((function (e){
console.error("WebR Init Error:",e);

var G__49617 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__49617) : on_error.call(null,G__49617));
}));
} else {
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1("WebR script not loaded") : on_error.call(null,"WebR script not loaded"));
}
}
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
try{bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"text","text",-1790561697),code], null));

var create_shelter = (function (){
var shelter_class = cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance).Shelter;
if(cljs.core.truth_(shelter_class)){
var s = (new shelter_class());
if((s instanceof Promise)){
return s;
} else {
if((!((s.init == null)))){
return s.init().then((function (){
return s;
}));
} else {
return Promise.resolve(s);
}
}
} else {
return Promise.reject((new Error("Shelter not found on WebR instance")));
}
});
return create_shelter().then((function (shelter){
return shelter.captureR(code,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561),true], null))).then((function (res){
var output = res.output;
var images = res.images;
var result = res.result;
return Promise.all(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.process_output_msg,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(output)))).then((function (results){
var seq__49619_49650 = cljs.core.seq(results);
var chunk__49620_49651 = null;
var count__49621_49652 = (0);
var i__49622_49653 = (0);
while(true){
if((i__49622_49653 < count__49621_49652)){
var res_49654__$1 = chunk__49620_49651.cljs$core$IIndexed$_nth$arity$2(null,i__49622_49653);
if(cljs.core.truth_(res_49654__$1)){
bb_web_ds_tools.runtime.webr.portal_submit(res_49654__$1);
} else {
}


var G__49655 = seq__49619_49650;
var G__49656 = chunk__49620_49651;
var G__49657 = count__49621_49652;
var G__49658 = (i__49622_49653 + (1));
seq__49619_49650 = G__49655;
chunk__49620_49651 = G__49656;
count__49621_49652 = G__49657;
i__49622_49653 = G__49658;
continue;
} else {
var temp__5825__auto___49659 = cljs.core.seq(seq__49619_49650);
if(temp__5825__auto___49659){
var seq__49619_49660__$1 = temp__5825__auto___49659;
if(cljs.core.chunked_seq_QMARK_(seq__49619_49660__$1)){
var c__5548__auto___49661 = cljs.core.chunk_first(seq__49619_49660__$1);
var G__49662 = cljs.core.chunk_rest(seq__49619_49660__$1);
var G__49663 = c__5548__auto___49661;
var G__49664 = cljs.core.count(c__5548__auto___49661);
var G__49665 = (0);
seq__49619_49650 = G__49662;
chunk__49620_49651 = G__49663;
count__49621_49652 = G__49664;
i__49622_49653 = G__49665;
continue;
} else {
var res_49667__$1 = cljs.core.first(seq__49619_49660__$1);
if(cljs.core.truth_(res_49667__$1)){
bb_web_ds_tools.runtime.webr.portal_submit(res_49667__$1);
} else {
}


var G__49671 = cljs.core.next(seq__49619_49660__$1);
var G__49672 = null;
var G__49673 = (0);
var G__49674 = (0);
seq__49619_49650 = G__49671;
chunk__49620_49651 = G__49672;
count__49621_49652 = G__49673;
i__49622_49653 = G__49674;
continue;
}
} else {
}
}
break;
}

var seq__49623_49675 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(images));
var chunk__49624_49676 = null;
var count__49625_49677 = (0);
var i__49626_49678 = (0);
while(true){
if((i__49626_49678 < count__49625_49677)){
var img_49679 = chunk__49624_49676.cljs$core$IIndexed$_nth$arity$2(null,i__49626_49678);
var data_url_49680 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(img_49679);
var canvas_hiccup_49681 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(720),new cljs.core.Keyword(null,"height","height",1025178622),(800)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((img_49679.width * 0.72) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),((img_49679.height * 0.72) | (0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_url_49680),")"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null)], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),canvas_hiccup_49681,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));


var G__49686 = seq__49623_49675;
var G__49687 = chunk__49624_49676;
var G__49688 = count__49625_49677;
var G__49689 = (i__49626_49678 + (1));
seq__49623_49675 = G__49686;
chunk__49624_49676 = G__49687;
count__49625_49677 = G__49688;
i__49626_49678 = G__49689;
continue;
} else {
var temp__5825__auto___49690 = cljs.core.seq(seq__49623_49675);
if(temp__5825__auto___49690){
var seq__49623_49691__$1 = temp__5825__auto___49690;
if(cljs.core.chunked_seq_QMARK_(seq__49623_49691__$1)){
var c__5548__auto___49692 = cljs.core.chunk_first(seq__49623_49691__$1);
var G__49693 = cljs.core.chunk_rest(seq__49623_49691__$1);
var G__49694 = c__5548__auto___49692;
var G__49695 = cljs.core.count(c__5548__auto___49692);
var G__49696 = (0);
seq__49623_49675 = G__49693;
chunk__49624_49676 = G__49694;
count__49625_49677 = G__49695;
i__49626_49678 = G__49696;
continue;
} else {
var img_49697 = cljs.core.first(seq__49623_49691__$1);
var data_url_49699 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(img_49697);
var canvas_hiccup_49700 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(720),new cljs.core.Keyword(null,"height","height",1025178622),(800)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((img_49697.width * 0.72) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),((img_49697.height * 0.72) | (0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_url_49699),")"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null)], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),canvas_hiccup_49700,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));


var G__49704 = cljs.core.next(seq__49623_49691__$1);
var G__49705 = null;
var G__49706 = (0);
var G__49707 = (0);
seq__49623_49675 = G__49704;
chunk__49624_49676 = G__49705;
count__49625_49677 = G__49706;
i__49626_49678 = G__49707;
continue;
}
} else {
}
}
break;
}

var js_val = result.toJs();
if((js_val instanceof Promise)){
return js_val.then((function (v){
var val = (function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e49627){if((e49627 instanceof Error)){
var _ = e49627;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
throw e49627;

}
}})();
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),val], null));
})).catch((function (e){
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null));
}));
} else {
var val = (function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e49629){if((e49629 instanceof Error)){
var _ = e49629;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(result);
} else {
throw e49629;

}
}})();
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),val], null));
}
})).finally((function (){
return shelter.purge();
}));
})).catch((function (e){
shelter.purge();

return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null));
}));
})).catch((function (e){
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null));
}));
}catch (e49618){if((e49618 instanceof Error)){
var e = e49618;
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null));
} else {
throw e49618;

}
}} else {
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null));
}
});

//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
