goog.provide('bb_web_ds_tools.utils.worker');
/**
 * Creates a web worker from the given URL.
 * If on-message is provided, it is called with each message.
 * Returns a map with the worker instance and optionally a channel if no callback provided.
 */
bb_web_ds_tools.utils.worker.create_worker = (function bb_web_ds_tools$utils$worker$create_worker(var_args){
var G__33841 = arguments.length;
switch (G__33841) {
case 1:
return bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$1 = (function (url){
return bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2(url,null);
}));

(bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2 = (function (url,on_message){
var worker = (new Worker(url));
var out_chan = (cljs.core.truth_(on_message)?null:cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
(worker.onmessage = (function (e){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(on_message)){
return (on_message.cljs$core$IFn$_invoke$arity$1 ? on_message.cljs$core$IFn$_invoke$arity$1(data) : on_message.call(null,data));
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_chan,data);
}
}));

(worker.onerror = (function (e){
var err = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),["Worker Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null);
console.error("Worker Error",e);

if(cljs.core.truth_(on_message)){
return (on_message.cljs$core$IFn$_invoke$arity$1 ? on_message.cljs$core$IFn$_invoke$arity$1(err) : on_message.call(null,err));
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_chan,err);
}
}));

var G__33842 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"worker","worker",938239996),worker], null);
if(cljs.core.truth_(out_chan)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33842,new cljs.core.Keyword(null,"out-chan","out-chan",384315017),out_chan);
} else {
return G__33842;
}
}));

(bb_web_ds_tools.utils.worker.create_worker.cljs$lang$maxFixedArity = 2);

/**
 * Sends a message to the worker.
 */
bb_web_ds_tools.utils.worker.post_message = (function bb_web_ds_tools$utils$worker$post_message(p__33843,message){
var map__33844 = p__33843;
var map__33844__$1 = cljs.core.__destructure_map(map__33844);
var worker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33844__$1,new cljs.core.Keyword(null,"worker","worker",938239996));
return worker.postMessage(cljs.core.clj__GT_js(message));
});
/**
 * Terminates the worker.
 */
bb_web_ds_tools.utils.worker.terminate = (function bb_web_ds_tools$utils$worker$terminate(p__33846){
var map__33847 = p__33846;
var map__33847__$1 = cljs.core.__destructure_map(map__33847);
var worker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33847__$1,new cljs.core.Keyword(null,"worker","worker",938239996));
var out_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33847__$1,new cljs.core.Keyword(null,"out-chan","out-chan",384315017));
worker.terminate();

if(cljs.core.truth_(out_chan)){
return cljs.core.async.close_BANG_(out_chan);
} else {
return null;
}
});

//# sourceMappingURL=bb_web_ds_tools.utils.worker.js.map
