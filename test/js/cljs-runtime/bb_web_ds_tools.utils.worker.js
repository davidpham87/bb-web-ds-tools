goog.provide('bb_web_ds_tools.utils.worker');
/**
 * Creates a web worker from the given URL.
 * If on-message is provided, it is called with each message.
 * Returns a map with the worker instance and optionally a channel if no callback provided.
 */
bb_web_ds_tools.utils.worker.create_worker = (function bb_web_ds_tools$utils$worker$create_worker(var_args){
var G__34913 = arguments.length;
switch (G__34913) {
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
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
var data = cognitect.transit.read(r,e.data);
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

var G__34919 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"worker","worker",938239996),worker], null);
if(cljs.core.truth_(out_chan)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34919,new cljs.core.Keyword(null,"out-chan","out-chan",384315017),out_chan);
} else {
return G__34919;
}
}));

(bb_web_ds_tools.utils.worker.create_worker.cljs$lang$maxFixedArity = 2);

/**
 * Updates the message handler for an existing worker.
 */
bb_web_ds_tools.utils.worker.set_handler = (function bb_web_ds_tools$utils$worker$set_handler(p__34928,on_message){
var map__34929 = p__34928;
var map__34929__$1 = cljs.core.__destructure_map(map__34929);
var worker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34929__$1,new cljs.core.Keyword(null,"worker","worker",938239996));
(worker.onmessage = (function (e){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
var data = cognitect.transit.read(r,e.data);
return (on_message.cljs$core$IFn$_invoke$arity$1 ? on_message.cljs$core$IFn$_invoke$arity$1(data) : on_message.call(null,data));
}));

return (worker.onerror = (function (e){
var err = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),["Worker Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null);
console.error("Worker Error",e);

return (on_message.cljs$core$IFn$_invoke$arity$1 ? on_message.cljs$core$IFn$_invoke$arity$1(err) : on_message.call(null,err));
}));
});
/**
 * Sends a message to the worker.
 */
bb_web_ds_tools.utils.worker.post_message = (function bb_web_ds_tools$utils$worker$post_message(p__34933,message){
var map__34934 = p__34933;
var map__34934__$1 = cljs.core.__destructure_map(map__34934);
var worker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934__$1,new cljs.core.Keyword(null,"worker","worker",938239996));
var w = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
var payload = cognitect.transit.write(w,message);
return worker.postMessage(payload);
});
/**
 * Terminates the worker.
 */
bb_web_ds_tools.utils.worker.terminate = (function bb_web_ds_tools$utils$worker$terminate(p__34950){
var map__34951 = p__34950;
var map__34951__$1 = cljs.core.__destructure_map(map__34951);
var worker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34951__$1,new cljs.core.Keyword(null,"worker","worker",938239996));
var out_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34951__$1,new cljs.core.Keyword(null,"out-chan","out-chan",384315017));
worker.terminate();

if(cljs.core.truth_(out_chan)){
return cljs.core.async.close_BANG_(out_chan);
} else {
return null;
}
});

//# sourceMappingURL=bb_web_ds_tools.utils.worker.js.map
