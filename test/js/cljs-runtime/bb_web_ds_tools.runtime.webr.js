goog.provide('bb_web_ds_tools.runtime.webr');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.runtime !== 'undefined') && (typeof bb_web_ds_tools.runtime.webr !== 'undefined') && (typeof bb_web_ds_tools.runtime.webr.webr_instance !== 'undefined')){
} else {
bb_web_ds_tools.runtime.webr.webr_instance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
bb_web_ds_tools.runtime.webr.portal_submit = (function bb_web_ds_tools$runtime$webr$portal_submit(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43771 = arguments.length;
var i__5750__auto___43772 = (0);
while(true){
if((i__5750__auto___43772 < len__5749__auto___43771)){
args__5755__auto__.push((arguments[i__5750__auto___43772]));

var G__43773 = (i__5750__auto___43772 + (1));
i__5750__auto___43772 = G__43773;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$core$IFn$_invoke$arity$variadic = (function (p__43746,p__43747){
var map__43750 = p__43746;
var map__43750__$1 = cljs.core.__destructure_map(map__43750);
var value = map__43750__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43750__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var vec__43751 = p__43747;
var viewer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43751,(0),null);
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
if(cljs.core.truth_((function (){var G__43756 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var fexpr__43755 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),null,new cljs.core.Keyword(null,"stdout","stdout",-531490018),null], null), null);
return (fexpr__43755.cljs$core$IFn$_invoke$arity$1 ? fexpr__43755.cljs$core$IFn$_invoke$arity$1(G__43756) : fexpr__43755.call(null,G__43756));
})())){
return new cljs.core.Keyword("portal.viewer","text","portal.viewer/text",-1784810453);
} else {
return null;

}
}
}
}
})();
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),(cljs.core.truth_(text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.viewer","markdown","portal.viewer/markdown",1212036437),text], null):new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value)
),viewer__$1], null));
}));

(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.runtime.webr.portal_submit.cljs$lang$applyTo = (function (seq43742){
var G__43743 = cljs.core.first(seq43742);
var seq43742__$1 = cljs.core.next(seq43742);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43743,seq43742__$1);
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
if(cljs.core.truth_((function (){var fexpr__43757 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["stderr",null,"stdout",null], null), null);
return (fexpr__43757.cljs$core$IFn$_invoke$arity$1 ? fexpr__43757.cljs$core$IFn$_invoke$arity$1(type) : fexpr__43757.call(null,type));
})())){
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.Keyword(null,"text","text",-1790561697),data], null));
} else {
if(cljs.core.truth_((function (){var fexpr__43758 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["message",null,"warning",null], null), null);
return (fexpr__43758.cljs$core$IFn$_invoke$arity$1 ? fexpr__43758.cljs$core$IFn$_invoke$arity$1(type) : fexpr__43758.call(null,type));
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

var G__43759 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__43759) : on_error.call(null,G__43759));
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
var seq__43761_43774 = cljs.core.seq(results);
var chunk__43762_43775 = null;
var count__43763_43776 = (0);
var i__43764_43777 = (0);
while(true){
if((i__43764_43777 < count__43763_43776)){
var res_43778__$1 = chunk__43762_43775.cljs$core$IIndexed$_nth$arity$2(null,i__43764_43777);
if(cljs.core.truth_(res_43778__$1)){
bb_web_ds_tools.runtime.webr.portal_submit(res_43778__$1);
} else {
}


var G__43779 = seq__43761_43774;
var G__43780 = chunk__43762_43775;
var G__43781 = count__43763_43776;
var G__43782 = (i__43764_43777 + (1));
seq__43761_43774 = G__43779;
chunk__43762_43775 = G__43780;
count__43763_43776 = G__43781;
i__43764_43777 = G__43782;
continue;
} else {
var temp__5825__auto___43783 = cljs.core.seq(seq__43761_43774);
if(temp__5825__auto___43783){
var seq__43761_43784__$1 = temp__5825__auto___43783;
if(cljs.core.chunked_seq_QMARK_(seq__43761_43784__$1)){
var c__5548__auto___43785 = cljs.core.chunk_first(seq__43761_43784__$1);
var G__43787 = cljs.core.chunk_rest(seq__43761_43784__$1);
var G__43788 = c__5548__auto___43785;
var G__43789 = cljs.core.count(c__5548__auto___43785);
var G__43790 = (0);
seq__43761_43774 = G__43787;
chunk__43762_43775 = G__43788;
count__43763_43776 = G__43789;
i__43764_43777 = G__43790;
continue;
} else {
var res_43791__$1 = cljs.core.first(seq__43761_43784__$1);
if(cljs.core.truth_(res_43791__$1)){
bb_web_ds_tools.runtime.webr.portal_submit(res_43791__$1);
} else {
}


var G__43793 = cljs.core.next(seq__43761_43784__$1);
var G__43794 = null;
var G__43795 = (0);
var G__43796 = (0);
seq__43761_43774 = G__43793;
chunk__43762_43775 = G__43794;
count__43763_43776 = G__43795;
i__43764_43777 = G__43796;
continue;
}
} else {
}
}
break;
}

var seq__43765_43797 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(images));
var chunk__43766_43798 = null;
var count__43767_43799 = (0);
var i__43768_43800 = (0);
while(true){
if((i__43768_43800 < count__43767_43799)){
var img_43801 = chunk__43766_43798.cljs$core$IIndexed$_nth$arity$2(null,i__43768_43800);
var data_url_43802 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(img_43801);
var canvas_hiccup_43803 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(720),new cljs.core.Keyword(null,"height","height",1025178622),(640)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),img_43801.width,new cljs.core.Keyword(null,"height","height",1025178622),img_43801.height,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_url_43802),")"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null)], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),canvas_hiccup_43803,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));


var G__43805 = seq__43765_43797;
var G__43806 = chunk__43766_43798;
var G__43807 = count__43767_43799;
var G__43808 = (i__43768_43800 + (1));
seq__43765_43797 = G__43805;
chunk__43766_43798 = G__43806;
count__43767_43799 = G__43807;
i__43768_43800 = G__43808;
continue;
} else {
var temp__5825__auto___43809 = cljs.core.seq(seq__43765_43797);
if(temp__5825__auto___43809){
var seq__43765_43810__$1 = temp__5825__auto___43809;
if(cljs.core.chunked_seq_QMARK_(seq__43765_43810__$1)){
var c__5548__auto___43811 = cljs.core.chunk_first(seq__43765_43810__$1);
var G__43812 = cljs.core.chunk_rest(seq__43765_43810__$1);
var G__43813 = c__5548__auto___43811;
var G__43814 = cljs.core.count(c__5548__auto___43811);
var G__43815 = (0);
seq__43765_43797 = G__43812;
chunk__43766_43798 = G__43813;
count__43767_43799 = G__43814;
i__43768_43800 = G__43815;
continue;
} else {
var img_43816 = cljs.core.first(seq__43765_43810__$1);
var data_url_43817 = bb_web_ds_tools.runtime.webr.image_bitmap__GT_data_url(img_43816);
var canvas_hiccup_43818 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(720),new cljs.core.Keyword(null,"height","height",1025178622),(640)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),img_43816.width,new cljs.core.Keyword(null,"height","height",1025178622),img_43816.height,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_url_43817),")"].join(''),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover"], null)], null)], null)], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),canvas_hiccup_43818,new cljs.core.Keyword("portal.viewer","hiccup","portal.viewer/hiccup",1221547442)], null));


var G__43819 = cljs.core.next(seq__43765_43810__$1);
var G__43820 = null;
var G__43821 = (0);
var G__43822 = (0);
seq__43765_43797 = G__43819;
chunk__43766_43798 = G__43820;
count__43767_43799 = G__43821;
i__43768_43800 = G__43822;
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
}catch (e43769){if((e43769 instanceof Error)){
var _ = e43769;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
throw e43769;

}
}})();
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),val], null));
})).catch((function (e){
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null));
}));
} else {
var val = (function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e43770){if((e43770 instanceof Error)){
var _ = e43770;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(result);
} else {
throw e43770;

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
}catch (e43760){if((e43760 instanceof Error)){
var e = e43760;
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null));
} else {
throw e43760;

}
}} else {
return bb_web_ds_tools.runtime.webr.portal_submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null));
}
});

//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
