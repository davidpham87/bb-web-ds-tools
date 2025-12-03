goog.provide('bb_web_ds_tools.runtime.pyodide');
goog.scope(function(){
  bb_web_ds_tools.runtime.pyodide.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.runtime !== 'undefined') && (typeof bb_web_ds_tools.runtime.pyodide !== 'undefined') && (typeof bb_web_ds_tools.runtime.pyodide.pyodide_worker !== 'undefined')){
} else {
bb_web_ds_tools.runtime.pyodide.pyodide_worker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.runtime !== 'undefined') && (typeof bb_web_ds_tools.runtime.pyodide !== 'undefined') && (typeof bb_web_ds_tools.runtime.pyodide.main_pyodide !== 'undefined')){
} else {
bb_web_ds_tools.runtime.pyodide.main_pyodide = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.runtime !== 'undefined') && (typeof bb_web_ds_tools.runtime.pyodide !== 'undefined') && (typeof bb_web_ds_tools.runtime.pyodide.main_loading !== 'undefined')){
} else {
bb_web_ds_tools.runtime.pyodide.main_loading = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
/**
 * Default handler for messages from the Pyodide worker.
 * 
 *   Args:
 *  msg (map): The message map.
 * 
 *   Returns:
 *  nil: Side-effects (logging).
 */
bb_web_ds_tools.runtime.pyodide.default_on_message = (function bb_web_ds_tools$runtime$pyodide$default_on_message(msg){
var map__33853 = msg;
var map__33853__$1 = cljs.core.__destructure_map(map__33853);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33853__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33853__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var G__33854 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var G__33854__$1 = (((G__33854 instanceof cljs.core.Keyword))?G__33854.fqn:null);
switch (G__33854__$1) {
case "ready":
return console.log("Pyodide worker ready");

break;
case "error":
return console.error("Pyodide worker error",text);

break;
default:
return console.warn("Unknown worker msg:",msg);

}
});
/**
 * Initializes the Pyodide worker.
 * 
 *   Args:
 *  on-message (fn, optional): Custom message handler.
 * 
 *   Returns:
 *  nil: Sets the global pyodide-worker atom.
 */
bb_web_ds_tools.runtime.pyodide.init_worker_BANG_ = (function bb_web_ds_tools$runtime$pyodide$init_worker_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33939 = arguments.length;
var i__5750__auto___33940 = (0);
while(true){
if((i__5750__auto___33940 < len__5749__auto___33939)){
args__5755__auto__.push((arguments[i__5750__auto___33940]));

var G__33942 = (i__5750__auto___33940 + (1));
i__5750__auto___33940 = G__33942;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.runtime.pyodide.init_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.pyodide.init_worker_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33860){
var vec__33861 = p__33860;
var on_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33861,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.pyodide.pyodide_worker))){
return null;
} else {
return cljs.core.reset_BANG_(bb_web_ds_tools.runtime.pyodide.pyodide_worker,bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2("js/compiled/pyodide-worker.js",(function (){var or__5025__auto__ = on_message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return bb_web_ds_tools.runtime.pyodide.default_on_message;
}
})()));
}
}));

(bb_web_ds_tools.runtime.pyodide.init_worker_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.runtime.pyodide.init_worker_BANG_.cljs$lang$applyTo = (function (seq33859){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33859));
}));

/**
 * Loads the Pyodide runtime inside the worker.
 * 
 *   Returns:
 *  nil: Posts a load message to the worker.
 */
bb_web_ds_tools.runtime.pyodide.load_runtime_worker = (function bb_web_ds_tools$runtime$pyodide$load_runtime_worker(){
bb_web_ds_tools.runtime.pyodide.init_worker_BANG_();

return bb_web_ds_tools.utils.worker.post_message(cljs.core.deref(bb_web_ds_tools.runtime.pyodide.pyodide_worker),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"load"], null));
});
/**
 * Evaluates Python code in the Pyodide worker.
 * 
 *   Args:
 *  code (string): The Python code to evaluate.
 * 
 *   Returns:
 *  nil: Posts a run message to the worker.
 */
bb_web_ds_tools.runtime.pyodide.eval_in_worker = (function bb_web_ds_tools$runtime$pyodide$eval_in_worker(code){
bb_web_ds_tools.runtime.pyodide.init_worker_BANG_();

return bb_web_ds_tools.utils.worker.post_message(cljs.core.deref(bb_web_ds_tools.runtime.pyodide.pyodide_worker),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"run",new cljs.core.Keyword(null,"code","code",1586293142),code], null));
});
/**
 * Dynamically loads a script tag into the document.
 * 
 *   Args:
 *  src (string): The source URL of the script.
 *  onload (fn): Callback on success.
 *  onerror (fn): Callback on error.
 * 
 *   Returns:
 *  nil: Appends the script to the document body.
 */
bb_web_ds_tools.runtime.pyodide.load_script = (function bb_web_ds_tools$runtime$pyodide$load_script(src,onload,onerror){
var script = document.createElement("script");
(script.src = src);

(script.onload = onload);

(script.onerror = onerror);

return document.body.appendChild(script);
});
/**
 * Loads the Pyodide runtime in the main thread.
 * 
 *   Args:
 *  on-ready (fn): Callback invoked when Pyodide is ready.
 *  on-error (fn): Callback invoked on load failure.
 * 
 *   Returns:
 *  nil: Initiates the loading process.
 */
bb_web_ds_tools.runtime.pyodide.load_runtime_main = (function bb_web_ds_tools$runtime$pyodide$load_runtime_main(on_ready,on_error){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.pyodide.main_pyodide))){
return (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
} else {
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.pyodide.main_loading))){
return console.warn("Pyodide is already loading...");
} else {
cljs.core.reset_BANG_(bb_web_ds_tools.runtime.pyodide.main_loading,true);

var url = "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/pyodide.js";
var index_url = "https://cdn.jsdelivr.net/pyodide/v0.29.0/full/";
return bb_web_ds_tools.runtime.pyodide.load_script(url,(function (){
return loadPyodide(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"indexURL","indexURL",-1448338433),index_url,new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (text){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stdout","stdout",-531490018),new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
}),new cljs.core.Keyword(null,"stderr","stderr",-1571650309),(function (text){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stderr","stderr",-1571650309),new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
})], null))).then((function (p){
cljs.core.reset_BANG_(bb_web_ds_tools.runtime.pyodide.main_pyodide,p);

cljs.core.reset_BANG_(bb_web_ds_tools.runtime.pyodide.main_loading,false);

return (on_ready.cljs$core$IFn$_invoke$arity$0 ? on_ready.cljs$core$IFn$_invoke$arity$0() : on_ready.call(null));
})).catch((function (e){
cljs.core.reset_BANG_(bb_web_ds_tools.runtime.pyodide.main_loading,false);

var G__33900 = ["Load Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__33900) : on_error.call(null,G__33900));
}));
}),(function (e){
cljs.core.reset_BANG_(bb_web_ds_tools.runtime.pyodide.main_loading,false);

var G__33903 = ["Script Load Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__33903) : on_error.call(null,G__33903));
}));

}
}
});
/**
 * Evaluates Python code in the main thread using Pyodide.
 * 
 *   Args:
 *  code (string): The Python code to evaluate.
 * 
 *   Returns:
 *  nil: Uses a promise chain to submit results to Portal.
 */
bb_web_ds_tools.runtime.pyodide.eval_in_main = (function bb_web_ds_tools$runtime$pyodide$eval_in_main(code){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.pyodide.main_pyodide))){
var run_fn = bb_web_ds_tools.runtime.pyodide.goog$module$goog$object.get(cljs.core.deref(bb_web_ds_tools.runtime.pyodide.main_pyodide),"runPythonAsync");
return (run_fn.cljs$core$IFn$_invoke$arity$1 ? run_fn.cljs$core$IFn$_invoke$arity$1(code) : run_fn.call(null,code)).then((function (res){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),res], null));
})).catch((function (err){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)], null));
}));
} else {
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),"Pyodide not loaded"], null));
}
});

//# sourceMappingURL=bb_web_ds_tools.runtime.pyodide.js.map
