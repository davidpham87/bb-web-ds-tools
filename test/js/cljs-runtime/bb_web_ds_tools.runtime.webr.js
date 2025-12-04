goog.provide('bb_web_ds_tools.runtime.webr');
bb_web_ds_tools.runtime.webr.submit_fn = portal.web.submit;
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.runtime !== 'undefined') && (typeof bb_web_ds_tools.runtime.webr !== 'undefined') && (typeof bb_web_ds_tools.runtime.webr.webr_instance !== 'undefined')){
} else {
bb_web_ds_tools.runtime.webr.webr_instance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Starts the WebR read loop to capture stdout/stderr.
 * 
 *   Args:
 *  webr (object): The WebR instance.
 * 
 *   Returns:
 *  nil: Starts the async loop.
 */
bb_web_ds_tools.runtime.webr.start_read_loop = (function bb_web_ds_tools$runtime$webr$start_read_loop(webr){
var loop_fn = (function bb_web_ds_tools$runtime$webr$start_read_loop_$_loop_fn(){
return webr.read().then((function (msg){
var type = msg.type;
var data = msg.data;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"stdout")){
var G__43402_43417 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stdout","stdout",-531490018),new cljs.core.Keyword(null,"text","text",-1790561697),data], null);
(bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1 ? bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1(G__43402_43417) : bb_web_ds_tools.runtime.webr.submit_fn.call(null,G__43402_43417));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"stderr")){
var G__43403_43418 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stderr","stderr",-1571650309),new cljs.core.Keyword(null,"text","text",-1790561697),data], null);
(bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1 ? bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1(G__43403_43418) : bb_web_ds_tools.runtime.webr.submit_fn.call(null,G__43403_43418));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"closed")){
} else {

}
}
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,"closed")){
return bb_web_ds_tools$runtime$webr$start_read_loop_$_loop_fn();
} else {
return null;
}
})).catch((function (p1__43395_SHARP_){
var G__43409 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),["WebR Read Error:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43395_SHARP_)].join('')], null);
return (bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1 ? bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1(G__43409) : bb_web_ds_tools.runtime.webr.submit_fn.call(null,G__43409));
}));
});
return loop_fn();
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
var webr = (new WebR(cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY)));
cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,webr);

return webr.init().then((function (){
bb_web_ds_tools.runtime.webr.start_read_loop(webr);

return (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
})).catch((function (e){
var G__43410 = ["WebR Init failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__43410) : on_error.call(null,G__43410));
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
try{return cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance).evalR(code,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoprint","autoprint",-1117415561),true], null))).then((function (res){
try{var G__43414_43419 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)], null);
(bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1 ? bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1(G__43414_43419) : bb_web_ds_tools.runtime.webr.submit_fn.call(null,G__43414_43419));

return res.destroy();
}catch (e43413){if((e43413 instanceof Error)){
var _ = e43413;
return null;
} else {
throw e43413;

}
}})).catch((function (e){
var G__43415 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null);
return (bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1 ? bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1(G__43415) : bb_web_ds_tools.runtime.webr.submit_fn.call(null,G__43415));
}));
}catch (e43411){if((e43411 instanceof Error)){
var e = e43411;
var G__43412 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null);
return (bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1 ? bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1(G__43412) : bb_web_ds_tools.runtime.webr.submit_fn.call(null,G__43412));
} else {
throw e43411;

}
}} else {
var G__43416 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"WebR not loaded"], null);
return (bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1 ? bb_web_ds_tools.runtime.webr.submit_fn.cljs$core$IFn$_invoke$arity$1(G__43416) : bb_web_ds_tools.runtime.webr.submit_fn.call(null,G__43416));
}
});

//# sourceMappingURL=bb_web_ds_tools.runtime.webr.js.map
