goog.provide('bb_web_ds_tools.utils.worker');
bb_web_ds_tools.utils.worker.handle_message = (function bb_web_ds_tools$utils$worker$handle_message(reader,on_message,out_chan,e){
var data = cognitect.transit.read(reader,e.data);
if(cljs.core.truth_(on_message)){
return (on_message.cljs$core$IFn$_invoke$arity$1 ? on_message.cljs$core$IFn$_invoke$arity$1(data) : on_message.call(null,data));
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_chan,data);
}
});
bb_web_ds_tools.utils.worker.handle_error = (function bb_web_ds_tools$utils$worker$handle_error(on_message,out_chan,e){
var err = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),["Worker Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null);
console.error("Worker Error",e);

if(cljs.core.truth_(on_message)){
return (on_message.cljs$core$IFn$_invoke$arity$1 ? on_message.cljs$core$IFn$_invoke$arity$1(err) : on_message.call(null,err));
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_chan,err);
}
});
/**
 * Creates a web worker from the given URL.
 * If on-message is provided, it is called with each message.
 * Returns a map with the worker instance and optionally a channel if no callback provided.
 */
bb_web_ds_tools.utils.worker.create_worker = (function bb_web_ds_tools$utils$worker$create_worker(var_args){
var G__34746 = arguments.length;
switch (G__34746) {
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
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
(worker.onmessage = (function (p1__34743_SHARP_){
return bb_web_ds_tools.utils.worker.handle_message(reader,on_message,out_chan,p1__34743_SHARP_);
}));

(worker.onerror = (function (p1__34744_SHARP_){
return bb_web_ds_tools.utils.worker.handle_error(on_message,out_chan,p1__34744_SHARP_);
}));

var G__34747 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"worker","worker",938239996),worker], null);
if(cljs.core.truth_(out_chan)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34747,new cljs.core.Keyword(null,"out-chan","out-chan",384315017),out_chan);
} else {
return G__34747;
}
}));

(bb_web_ds_tools.utils.worker.create_worker.cljs$lang$maxFixedArity = 2);

/**
 * Updates the message handler for an existing worker.
 */
bb_web_ds_tools.utils.worker.set_handler = (function bb_web_ds_tools$utils$worker$set_handler(p__34762,on_message){
var map__34763 = p__34762;
var map__34763__$1 = cljs.core.__destructure_map(map__34763);
var worker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34763__$1,new cljs.core.Keyword(null,"worker","worker",938239996));
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
(worker.onmessage = (function (p1__34748_SHARP_){
return bb_web_ds_tools.utils.worker.handle_message(reader,on_message,null,p1__34748_SHARP_);
}));

return (worker.onerror = (function (p1__34749_SHARP_){
return bb_web_ds_tools.utils.worker.handle_error(on_message,null,p1__34749_SHARP_);
}));
});
/**
 * Sends a message to the worker.
 */
bb_web_ds_tools.utils.worker.post_message = (function bb_web_ds_tools$utils$worker$post_message(p__34768,message){
var map__34770 = p__34768;
var map__34770__$1 = cljs.core.__destructure_map(map__34770);
var worker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34770__$1,new cljs.core.Keyword(null,"worker","worker",938239996));
var w = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
var payload = cognitect.transit.write(w,message);
return worker.postMessage(payload);
});
/**
 * Terminates the worker.
 */
bb_web_ds_tools.utils.worker.terminate = (function bb_web_ds_tools$utils$worker$terminate(p__34773){
var map__34774 = p__34773;
var map__34774__$1 = cljs.core.__destructure_map(map__34774);
var worker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34774__$1,new cljs.core.Keyword(null,"worker","worker",938239996));
var out_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34774__$1,new cljs.core.Keyword(null,"out-chan","out-chan",384315017));
worker.terminate();

if(cljs.core.truth_(out_chan)){
return cljs.core.async.close_BANG_(out_chan);
} else {
return null;
}
});

//# sourceMappingURL=bb_web_ds_tools.utils.worker.js.map
