goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50560 = (function (f,blockable,meta50561){
this.f = f;
this.blockable = blockable;
this.meta50561 = meta50561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50562,meta50561__$1){
var self__ = this;
var _50562__$1 = this;
return (new cljs.core.async.t_cljs$core$async50560(self__.f,self__.blockable,meta50561__$1));
}));

(cljs.core.async.t_cljs$core$async50560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50562){
var self__ = this;
var _50562__$1 = this;
return self__.meta50561;
}));

(cljs.core.async.t_cljs$core$async50560.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50560.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50561","meta50561",1882751839,null)], null);
}));

(cljs.core.async.t_cljs$core$async50560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50560");

(cljs.core.async.t_cljs$core$async50560.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async50560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50560.
 */
cljs.core.async.__GT_t_cljs$core$async50560 = (function cljs$core$async$__GT_t_cljs$core$async50560(f,blockable,meta50561){
return (new cljs.core.async.t_cljs$core$async50560(f,blockable,meta50561));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50559 = arguments.length;
switch (G__50559) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async50560(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50565 = arguments.length;
switch (G__50565) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50567 = arguments.length;
switch (G__50567) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50569 = arguments.length;
switch (G__50569) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_51992 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51992) : fn1.call(null,val_51992));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51992) : fn1.call(null,val_51992));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50571 = arguments.length;
switch (G__50571) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___51994 = n;
var x_51995 = (0);
while(true){
if((x_51995 < n__5616__auto___51994)){
(a[x_51995] = x_51995);

var G__51996 = (x_51995 + (1));
x_51995 = G__51996;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50572 = (function (flag,meta50573){
this.flag = flag;
this.meta50573 = meta50573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50574,meta50573__$1){
var self__ = this;
var _50574__$1 = this;
return (new cljs.core.async.t_cljs$core$async50572(self__.flag,meta50573__$1));
}));

(cljs.core.async.t_cljs$core$async50572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50574){
var self__ = this;
var _50574__$1 = this;
return self__.meta50573;
}));

(cljs.core.async.t_cljs$core$async50572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50573","meta50573",1982309134,null)], null);
}));

(cljs.core.async.t_cljs$core$async50572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50572");

(cljs.core.async.t_cljs$core$async50572.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async50572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50572.
 */
cljs.core.async.__GT_t_cljs$core$async50572 = (function cljs$core$async$__GT_t_cljs$core$async50572(flag,meta50573){
return (new cljs.core.async.t_cljs$core$async50572(flag,meta50573));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async50572(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50575 = (function (flag,cb,meta50576){
this.flag = flag;
this.cb = cb;
this.meta50576 = meta50576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50577,meta50576__$1){
var self__ = this;
var _50577__$1 = this;
return (new cljs.core.async.t_cljs$core$async50575(self__.flag,self__.cb,meta50576__$1));
}));

(cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50577){
var self__ = this;
var _50577__$1 = this;
return self__.meta50576;
}));

(cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50576","meta50576",-603171748,null)], null);
}));

(cljs.core.async.t_cljs$core$async50575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50575");

(cljs.core.async.t_cljs$core$async50575.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async50575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50575.
 */
cljs.core.async.__GT_t_cljs$core$async50575 = (function cljs$core$async$__GT_t_cljs$core$async50575(flag,cb,meta50576){
return (new cljs.core.async.t_cljs$core$async50575(flag,cb,meta50576));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async50575(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_51997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_51997)){
if((!(((port_51997.cljs$core$IFn$_invoke$arity$1 ? port_51997.cljs$core$IFn$_invoke$arity$1((1)) : port_51997.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__51998 = (i + (1));
i = G__51998;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__50578_SHARP_){
var G__50580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50578_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50580) : fret.call(null,G__50580));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__50579_SHARP_){
var G__50581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50579_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50581) : fret.call(null,G__50581));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52000 = (i + (1));
i = G__52000;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___52002 = arguments.length;
var i__5750__auto___52003 = (0);
while(true){
if((i__5750__auto___52003 < len__5749__auto___52002)){
args__5755__auto__.push((arguments[i__5750__auto___52003]));

var G__52004 = (i__5750__auto___52003 + (1));
i__5750__auto___52003 = G__52004;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50584){
var map__50585 = p__50584;
var map__50585__$1 = cljs.core.__destructure_map(map__50585);
var opts = map__50585__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50582){
var G__50583 = cljs.core.first(seq50582);
var seq50582__$1 = cljs.core.next(seq50582);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50583,seq50582__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50587 = arguments.length;
switch (G__50587) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50501__auto___52007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_50611){
var state_val_50612 = (state_50611[(1)]);
if((state_val_50612 === (7))){
var inst_50607 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
var statearr_50613_52012 = state_50611__$1;
(statearr_50613_52012[(2)] = inst_50607);

(statearr_50613_52012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (1))){
var state_50611__$1 = state_50611;
var statearr_50614_52013 = state_50611__$1;
(statearr_50614_52013[(2)] = null);

(statearr_50614_52013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (4))){
var inst_50590 = (state_50611[(7)]);
var inst_50590__$1 = (state_50611[(2)]);
var inst_50591 = (inst_50590__$1 == null);
var state_50611__$1 = (function (){var statearr_50615 = state_50611;
(statearr_50615[(7)] = inst_50590__$1);

return statearr_50615;
})();
if(cljs.core.truth_(inst_50591)){
var statearr_50616_52014 = state_50611__$1;
(statearr_50616_52014[(1)] = (5));

} else {
var statearr_50617_52015 = state_50611__$1;
(statearr_50617_52015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (13))){
var state_50611__$1 = state_50611;
var statearr_50618_52016 = state_50611__$1;
(statearr_50618_52016[(2)] = null);

(statearr_50618_52016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (6))){
var inst_50590 = (state_50611[(7)]);
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50611__$1,(11),to,inst_50590);
} else {
if((state_val_50612 === (3))){
var inst_50609 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50611__$1,inst_50609);
} else {
if((state_val_50612 === (12))){
var state_50611__$1 = state_50611;
var statearr_50619_52017 = state_50611__$1;
(statearr_50619_52017[(2)] = null);

(statearr_50619_52017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (2))){
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50611__$1,(4),from);
} else {
if((state_val_50612 === (11))){
var inst_50600 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
if(cljs.core.truth_(inst_50600)){
var statearr_50620_52018 = state_50611__$1;
(statearr_50620_52018[(1)] = (12));

} else {
var statearr_50621_52019 = state_50611__$1;
(statearr_50621_52019[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (9))){
var state_50611__$1 = state_50611;
var statearr_50622_52020 = state_50611__$1;
(statearr_50622_52020[(2)] = null);

(statearr_50622_52020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (5))){
var state_50611__$1 = state_50611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50623_52021 = state_50611__$1;
(statearr_50623_52021[(1)] = (8));

} else {
var statearr_50624_52022 = state_50611__$1;
(statearr_50624_52022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (14))){
var inst_50605 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
var statearr_50625_52023 = state_50611__$1;
(statearr_50625_52023[(2)] = inst_50605);

(statearr_50625_52023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (10))){
var inst_50597 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
var statearr_50626_52024 = state_50611__$1;
(statearr_50626_52024[(2)] = inst_50597);

(statearr_50626_52024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (8))){
var inst_50594 = cljs.core.async.close_BANG_(to);
var state_50611__$1 = state_50611;
var statearr_50627_52025 = state_50611__$1;
(statearr_50627_52025[(2)] = inst_50594);

(statearr_50627_52025[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__50431__auto__ = null;
var cljs$core$async$state_machine__50431__auto____0 = (function (){
var statearr_50628 = [null,null,null,null,null,null,null,null];
(statearr_50628[(0)] = cljs$core$async$state_machine__50431__auto__);

(statearr_50628[(1)] = (1));

return statearr_50628;
});
var cljs$core$async$state_machine__50431__auto____1 = (function (state_50611){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_50611);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e50629){var ex__50434__auto__ = e50629;
var statearr_50630_52028 = state_50611;
(statearr_50630_52028[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_50611[(4)]))){
var statearr_50631_52029 = state_50611;
(statearr_50631_52029[(1)] = cljs.core.first((state_50611[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52030 = state_50611;
state_50611 = G__52030;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$state_machine__50431__auto__ = function(state_50611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50431__auto____1.call(this,state_50611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50431__auto____0;
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50431__auto____1;
return cljs$core$async$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_50632 = f__50502__auto__();
(statearr_50632[(6)] = c__50501__auto___52007);

return statearr_50632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__50633){
var vec__50634 = p__50633;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50634,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50634,(1),null);
var job = vec__50634;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50501__auto___52032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_50641){
var state_val_50642 = (state_50641[(1)]);
if((state_val_50642 === (1))){
var state_50641__$1 = state_50641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50641__$1,(2),res,v);
} else {
if((state_val_50642 === (2))){
var inst_50638 = (state_50641[(2)]);
var inst_50639 = cljs.core.async.close_BANG_(res);
var state_50641__$1 = (function (){var statearr_50643 = state_50641;
(statearr_50643[(7)] = inst_50638);

return statearr_50643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50641__$1,inst_50639);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0 = (function (){
var statearr_50644 = [null,null,null,null,null,null,null,null];
(statearr_50644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__);

(statearr_50644[(1)] = (1));

return statearr_50644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1 = (function (state_50641){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_50641);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e50645){var ex__50434__auto__ = e50645;
var statearr_50646_52034 = state_50641;
(statearr_50646_52034[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_50641[(4)]))){
var statearr_50647_52038 = state_50641;
(statearr_50647_52038[(1)] = cljs.core.first((state_50641[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52039 = state_50641;
state_50641 = G__52039;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__ = function(state_50641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1.call(this,state_50641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_50648 = f__50502__auto__();
(statearr_50648[(6)] = c__50501__auto___52032);

return statearr_50648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50649){
var vec__50650 = p__50649;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50650,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50650,(1),null);
var job = vec__50650;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___52040 = n;
var __52041 = (0);
while(true){
if((__52041 < n__5616__auto___52040)){
var G__50653_52042 = type;
var G__50653_52043__$1 = (((G__50653_52042 instanceof cljs.core.Keyword))?G__50653_52042.fqn:null);
switch (G__50653_52043__$1) {
case "compute":
var c__50501__auto___52045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52041,c__50501__auto___52045,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async){
return (function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = ((function (__52041,c__50501__auto___52045,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async){
return (function (state_50666){
var state_val_50667 = (state_50666[(1)]);
if((state_val_50667 === (1))){
var state_50666__$1 = state_50666;
var statearr_50668_52047 = state_50666__$1;
(statearr_50668_52047[(2)] = null);

(statearr_50668_52047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (2))){
var state_50666__$1 = state_50666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50666__$1,(4),jobs);
} else {
if((state_val_50667 === (3))){
var inst_50664 = (state_50666[(2)]);
var state_50666__$1 = state_50666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50666__$1,inst_50664);
} else {
if((state_val_50667 === (4))){
var inst_50656 = (state_50666[(2)]);
var inst_50657 = process__$1(inst_50656);
var state_50666__$1 = state_50666;
if(cljs.core.truth_(inst_50657)){
var statearr_50669_52049 = state_50666__$1;
(statearr_50669_52049[(1)] = (5));

} else {
var statearr_50670_52050 = state_50666__$1;
(statearr_50670_52050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (5))){
var state_50666__$1 = state_50666;
var statearr_50671_52051 = state_50666__$1;
(statearr_50671_52051[(2)] = null);

(statearr_50671_52051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (6))){
var state_50666__$1 = state_50666;
var statearr_50672_52052 = state_50666__$1;
(statearr_50672_52052[(2)] = null);

(statearr_50672_52052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50667 === (7))){
var inst_50662 = (state_50666[(2)]);
var state_50666__$1 = state_50666;
var statearr_50673_52053 = state_50666__$1;
(statearr_50673_52053[(2)] = inst_50662);

(statearr_50673_52053[(1)] = (3));


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
});})(__52041,c__50501__auto___52045,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async))
;
return ((function (__52041,switch__50430__auto__,c__50501__auto___52045,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0 = (function (){
var statearr_50674 = [null,null,null,null,null,null,null];
(statearr_50674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__);

(statearr_50674[(1)] = (1));

return statearr_50674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1 = (function (state_50666){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_50666);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e50675){var ex__50434__auto__ = e50675;
var statearr_50676_52054 = state_50666;
(statearr_50676_52054[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_50666[(4)]))){
var statearr_50677_52055 = state_50666;
(statearr_50677_52055[(1)] = cljs.core.first((state_50666[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52056 = state_50666;
state_50666 = G__52056;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__ = function(state_50666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1.call(this,state_50666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__;
})()
;})(__52041,switch__50430__auto__,c__50501__auto___52045,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async))
})();
var state__50503__auto__ = (function (){var statearr_50678 = f__50502__auto__();
(statearr_50678[(6)] = c__50501__auto___52045);

return statearr_50678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
});})(__52041,c__50501__auto___52045,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async))
);


break;
case "async":
var c__50501__auto___52057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52041,c__50501__auto___52057,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async){
return (function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = ((function (__52041,c__50501__auto___52057,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async){
return (function (state_50691){
var state_val_50692 = (state_50691[(1)]);
if((state_val_50692 === (1))){
var state_50691__$1 = state_50691;
var statearr_50693_52060 = state_50691__$1;
(statearr_50693_52060[(2)] = null);

(statearr_50693_52060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (2))){
var state_50691__$1 = state_50691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50691__$1,(4),jobs);
} else {
if((state_val_50692 === (3))){
var inst_50689 = (state_50691[(2)]);
var state_50691__$1 = state_50691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50691__$1,inst_50689);
} else {
if((state_val_50692 === (4))){
var inst_50681 = (state_50691[(2)]);
var inst_50682 = async(inst_50681);
var state_50691__$1 = state_50691;
if(cljs.core.truth_(inst_50682)){
var statearr_50694_52061 = state_50691__$1;
(statearr_50694_52061[(1)] = (5));

} else {
var statearr_50695_52062 = state_50691__$1;
(statearr_50695_52062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (5))){
var state_50691__$1 = state_50691;
var statearr_50696_52063 = state_50691__$1;
(statearr_50696_52063[(2)] = null);

(statearr_50696_52063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (6))){
var state_50691__$1 = state_50691;
var statearr_50697_52064 = state_50691__$1;
(statearr_50697_52064[(2)] = null);

(statearr_50697_52064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50692 === (7))){
var inst_50687 = (state_50691[(2)]);
var state_50691__$1 = state_50691;
var statearr_50698_52066 = state_50691__$1;
(statearr_50698_52066[(2)] = inst_50687);

(statearr_50698_52066[(1)] = (3));


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
});})(__52041,c__50501__auto___52057,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async))
;
return ((function (__52041,switch__50430__auto__,c__50501__auto___52057,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0 = (function (){
var statearr_50699 = [null,null,null,null,null,null,null];
(statearr_50699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__);

(statearr_50699[(1)] = (1));

return statearr_50699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1 = (function (state_50691){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_50691);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e50700){var ex__50434__auto__ = e50700;
var statearr_50701_52072 = state_50691;
(statearr_50701_52072[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_50691[(4)]))){
var statearr_50702_52073 = state_50691;
(statearr_50702_52073[(1)] = cljs.core.first((state_50691[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52074 = state_50691;
state_50691 = G__52074;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__ = function(state_50691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1.call(this,state_50691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__;
})()
;})(__52041,switch__50430__auto__,c__50501__auto___52057,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async))
})();
var state__50503__auto__ = (function (){var statearr_50703 = f__50502__auto__();
(statearr_50703[(6)] = c__50501__auto___52057);

return statearr_50703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
});})(__52041,c__50501__auto___52057,G__50653_52042,G__50653_52043__$1,n__5616__auto___52040,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50653_52043__$1)].join('')));

}

var G__52075 = (__52041 + (1));
__52041 = G__52075;
continue;
} else {
}
break;
}

var c__50501__auto___52076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_50725){
var state_val_50726 = (state_50725[(1)]);
if((state_val_50726 === (7))){
var inst_50721 = (state_50725[(2)]);
var state_50725__$1 = state_50725;
var statearr_50727_52078 = state_50725__$1;
(statearr_50727_52078[(2)] = inst_50721);

(statearr_50727_52078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50726 === (1))){
var state_50725__$1 = state_50725;
var statearr_50728_52079 = state_50725__$1;
(statearr_50728_52079[(2)] = null);

(statearr_50728_52079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50726 === (4))){
var inst_50706 = (state_50725[(7)]);
var inst_50706__$1 = (state_50725[(2)]);
var inst_50707 = (inst_50706__$1 == null);
var state_50725__$1 = (function (){var statearr_50729 = state_50725;
(statearr_50729[(7)] = inst_50706__$1);

return statearr_50729;
})();
if(cljs.core.truth_(inst_50707)){
var statearr_50730_52080 = state_50725__$1;
(statearr_50730_52080[(1)] = (5));

} else {
var statearr_50731_52081 = state_50725__$1;
(statearr_50731_52081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50726 === (6))){
var inst_50706 = (state_50725[(7)]);
var inst_50711 = (state_50725[(8)]);
var inst_50711__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50712 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50713 = [inst_50706,inst_50711__$1];
var inst_50714 = (new cljs.core.PersistentVector(null,2,(5),inst_50712,inst_50713,null));
var state_50725__$1 = (function (){var statearr_50732 = state_50725;
(statearr_50732[(8)] = inst_50711__$1);

return statearr_50732;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50725__$1,(8),jobs,inst_50714);
} else {
if((state_val_50726 === (3))){
var inst_50723 = (state_50725[(2)]);
var state_50725__$1 = state_50725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50725__$1,inst_50723);
} else {
if((state_val_50726 === (2))){
var state_50725__$1 = state_50725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50725__$1,(4),from);
} else {
if((state_val_50726 === (9))){
var inst_50718 = (state_50725[(2)]);
var state_50725__$1 = (function (){var statearr_50733 = state_50725;
(statearr_50733[(9)] = inst_50718);

return statearr_50733;
})();
var statearr_50734_52085 = state_50725__$1;
(statearr_50734_52085[(2)] = null);

(statearr_50734_52085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50726 === (5))){
var inst_50709 = cljs.core.async.close_BANG_(jobs);
var state_50725__$1 = state_50725;
var statearr_50735_52087 = state_50725__$1;
(statearr_50735_52087[(2)] = inst_50709);

(statearr_50735_52087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50726 === (8))){
var inst_50711 = (state_50725[(8)]);
var inst_50716 = (state_50725[(2)]);
var state_50725__$1 = (function (){var statearr_50736 = state_50725;
(statearr_50736[(10)] = inst_50716);

return statearr_50736;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50725__$1,(9),results,inst_50711);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0 = (function (){
var statearr_50737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__);

(statearr_50737[(1)] = (1));

return statearr_50737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1 = (function (state_50725){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_50725);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e50738){var ex__50434__auto__ = e50738;
var statearr_50739_52088 = state_50725;
(statearr_50739_52088[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_50725[(4)]))){
var statearr_50740_52090 = state_50725;
(statearr_50740_52090[(1)] = cljs.core.first((state_50725[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52093 = state_50725;
state_50725 = G__52093;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__ = function(state_50725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1.call(this,state_50725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_50741 = f__50502__auto__();
(statearr_50741[(6)] = c__50501__auto___52076);

return statearr_50741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


var c__50501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_50779){
var state_val_50780 = (state_50779[(1)]);
if((state_val_50780 === (7))){
var inst_50775 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
var statearr_50781_52094 = state_50779__$1;
(statearr_50781_52094[(2)] = inst_50775);

(statearr_50781_52094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (20))){
var state_50779__$1 = state_50779;
var statearr_50782_52095 = state_50779__$1;
(statearr_50782_52095[(2)] = null);

(statearr_50782_52095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (1))){
var state_50779__$1 = state_50779;
var statearr_50783_52096 = state_50779__$1;
(statearr_50783_52096[(2)] = null);

(statearr_50783_52096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (4))){
var inst_50744 = (state_50779[(7)]);
var inst_50744__$1 = (state_50779[(2)]);
var inst_50745 = (inst_50744__$1 == null);
var state_50779__$1 = (function (){var statearr_50784 = state_50779;
(statearr_50784[(7)] = inst_50744__$1);

return statearr_50784;
})();
if(cljs.core.truth_(inst_50745)){
var statearr_50785_52097 = state_50779__$1;
(statearr_50785_52097[(1)] = (5));

} else {
var statearr_50786_52098 = state_50779__$1;
(statearr_50786_52098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (15))){
var inst_50757 = (state_50779[(8)]);
var state_50779__$1 = state_50779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50779__$1,(18),to,inst_50757);
} else {
if((state_val_50780 === (21))){
var inst_50770 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
var statearr_50787_52099 = state_50779__$1;
(statearr_50787_52099[(2)] = inst_50770);

(statearr_50787_52099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (13))){
var inst_50772 = (state_50779[(2)]);
var state_50779__$1 = (function (){var statearr_50788 = state_50779;
(statearr_50788[(9)] = inst_50772);

return statearr_50788;
})();
var statearr_50789_52100 = state_50779__$1;
(statearr_50789_52100[(2)] = null);

(statearr_50789_52100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (6))){
var inst_50744 = (state_50779[(7)]);
var state_50779__$1 = state_50779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50779__$1,(11),inst_50744);
} else {
if((state_val_50780 === (17))){
var inst_50765 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
if(cljs.core.truth_(inst_50765)){
var statearr_50790_52101 = state_50779__$1;
(statearr_50790_52101[(1)] = (19));

} else {
var statearr_50791_52103 = state_50779__$1;
(statearr_50791_52103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (3))){
var inst_50777 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50779__$1,inst_50777);
} else {
if((state_val_50780 === (12))){
var inst_50754 = (state_50779[(10)]);
var state_50779__$1 = state_50779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50779__$1,(14),inst_50754);
} else {
if((state_val_50780 === (2))){
var state_50779__$1 = state_50779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50779__$1,(4),results);
} else {
if((state_val_50780 === (19))){
var state_50779__$1 = state_50779;
var statearr_50792_52104 = state_50779__$1;
(statearr_50792_52104[(2)] = null);

(statearr_50792_52104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (11))){
var inst_50754 = (state_50779[(2)]);
var state_50779__$1 = (function (){var statearr_50793 = state_50779;
(statearr_50793[(10)] = inst_50754);

return statearr_50793;
})();
var statearr_50794_52106 = state_50779__$1;
(statearr_50794_52106[(2)] = null);

(statearr_50794_52106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (9))){
var state_50779__$1 = state_50779;
var statearr_50795_52107 = state_50779__$1;
(statearr_50795_52107[(2)] = null);

(statearr_50795_52107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (5))){
var state_50779__$1 = state_50779;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50796_52108 = state_50779__$1;
(statearr_50796_52108[(1)] = (8));

} else {
var statearr_50797_52111 = state_50779__$1;
(statearr_50797_52111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (14))){
var inst_50757 = (state_50779[(8)]);
var inst_50759 = (state_50779[(11)]);
var inst_50757__$1 = (state_50779[(2)]);
var inst_50758 = (inst_50757__$1 == null);
var inst_50759__$1 = cljs.core.not(inst_50758);
var state_50779__$1 = (function (){var statearr_50798 = state_50779;
(statearr_50798[(8)] = inst_50757__$1);

(statearr_50798[(11)] = inst_50759__$1);

return statearr_50798;
})();
if(inst_50759__$1){
var statearr_50799_52113 = state_50779__$1;
(statearr_50799_52113[(1)] = (15));

} else {
var statearr_50800_52114 = state_50779__$1;
(statearr_50800_52114[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (16))){
var inst_50759 = (state_50779[(11)]);
var state_50779__$1 = state_50779;
var statearr_50801_52115 = state_50779__$1;
(statearr_50801_52115[(2)] = inst_50759);

(statearr_50801_52115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (10))){
var inst_50751 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
var statearr_50802_52116 = state_50779__$1;
(statearr_50802_52116[(2)] = inst_50751);

(statearr_50802_52116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (18))){
var inst_50762 = (state_50779[(2)]);
var state_50779__$1 = state_50779;
var statearr_50803_52117 = state_50779__$1;
(statearr_50803_52117[(2)] = inst_50762);

(statearr_50803_52117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50780 === (8))){
var inst_50748 = cljs.core.async.close_BANG_(to);
var state_50779__$1 = state_50779;
var statearr_50804_52118 = state_50779__$1;
(statearr_50804_52118[(2)] = inst_50748);

(statearr_50804_52118[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0 = (function (){
var statearr_50805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__);

(statearr_50805[(1)] = (1));

return statearr_50805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1 = (function (state_50779){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_50779);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e50806){var ex__50434__auto__ = e50806;
var statearr_50807_52119 = state_50779;
(statearr_50807_52119[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_50779[(4)]))){
var statearr_50808_52120 = state_50779;
(statearr_50808_52120[(1)] = cljs.core.first((state_50779[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52121 = state_50779;
state_50779 = G__52121;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__ = function(state_50779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1.call(this,state_50779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_50809 = f__50502__auto__();
(statearr_50809[(6)] = c__50501__auto__);

return statearr_50809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));

return c__50501__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50811 = arguments.length;
switch (G__50811) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50813 = arguments.length;
switch (G__50813) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50815 = arguments.length;
switch (G__50815) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__50501__auto___52125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_50841){
var state_val_50842 = (state_50841[(1)]);
if((state_val_50842 === (7))){
var inst_50837 = (state_50841[(2)]);
var state_50841__$1 = state_50841;
var statearr_50843_52126 = state_50841__$1;
(statearr_50843_52126[(2)] = inst_50837);

(statearr_50843_52126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50842 === (1))){
var state_50841__$1 = state_50841;
var statearr_50844_52127 = state_50841__$1;
(statearr_50844_52127[(2)] = null);

(statearr_50844_52127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50842 === (4))){
var inst_50818 = (state_50841[(7)]);
var inst_50818__$1 = (state_50841[(2)]);
var inst_50819 = (inst_50818__$1 == null);
var state_50841__$1 = (function (){var statearr_50845 = state_50841;
(statearr_50845[(7)] = inst_50818__$1);

return statearr_50845;
})();
if(cljs.core.truth_(inst_50819)){
var statearr_50846_52128 = state_50841__$1;
(statearr_50846_52128[(1)] = (5));

} else {
var statearr_50847_52129 = state_50841__$1;
(statearr_50847_52129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50842 === (13))){
var state_50841__$1 = state_50841;
var statearr_50848_52130 = state_50841__$1;
(statearr_50848_52130[(2)] = null);

(statearr_50848_52130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50842 === (6))){
var inst_50818 = (state_50841[(7)]);
var inst_50824 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50818) : p.call(null,inst_50818));
var state_50841__$1 = state_50841;
if(cljs.core.truth_(inst_50824)){
var statearr_50849_52131 = state_50841__$1;
(statearr_50849_52131[(1)] = (9));

} else {
var statearr_50850_52132 = state_50841__$1;
(statearr_50850_52132[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50842 === (3))){
var inst_50839 = (state_50841[(2)]);
var state_50841__$1 = state_50841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50841__$1,inst_50839);
} else {
if((state_val_50842 === (12))){
var state_50841__$1 = state_50841;
var statearr_50851_52133 = state_50841__$1;
(statearr_50851_52133[(2)] = null);

(statearr_50851_52133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50842 === (2))){
var state_50841__$1 = state_50841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50841__$1,(4),ch);
} else {
if((state_val_50842 === (11))){
var inst_50818 = (state_50841[(7)]);
var inst_50828 = (state_50841[(2)]);
var state_50841__$1 = state_50841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50841__$1,(8),inst_50828,inst_50818);
} else {
if((state_val_50842 === (9))){
var state_50841__$1 = state_50841;
var statearr_50852_52134 = state_50841__$1;
(statearr_50852_52134[(2)] = tc);

(statearr_50852_52134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50842 === (5))){
var inst_50821 = cljs.core.async.close_BANG_(tc);
var inst_50822 = cljs.core.async.close_BANG_(fc);
var state_50841__$1 = (function (){var statearr_50853 = state_50841;
(statearr_50853[(8)] = inst_50821);

return statearr_50853;
})();
var statearr_50854_52135 = state_50841__$1;
(statearr_50854_52135[(2)] = inst_50822);

(statearr_50854_52135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50842 === (14))){
var inst_50835 = (state_50841[(2)]);
var state_50841__$1 = state_50841;
var statearr_50855_52136 = state_50841__$1;
(statearr_50855_52136[(2)] = inst_50835);

(statearr_50855_52136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50842 === (10))){
var state_50841__$1 = state_50841;
var statearr_50856_52138 = state_50841__$1;
(statearr_50856_52138[(2)] = fc);

(statearr_50856_52138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50842 === (8))){
var inst_50830 = (state_50841[(2)]);
var state_50841__$1 = state_50841;
if(cljs.core.truth_(inst_50830)){
var statearr_50857_52139 = state_50841__$1;
(statearr_50857_52139[(1)] = (12));

} else {
var statearr_50858_52141 = state_50841__$1;
(statearr_50858_52141[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__50431__auto__ = null;
var cljs$core$async$state_machine__50431__auto____0 = (function (){
var statearr_50859 = [null,null,null,null,null,null,null,null,null];
(statearr_50859[(0)] = cljs$core$async$state_machine__50431__auto__);

(statearr_50859[(1)] = (1));

return statearr_50859;
});
var cljs$core$async$state_machine__50431__auto____1 = (function (state_50841){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_50841);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e50860){var ex__50434__auto__ = e50860;
var statearr_50861_52142 = state_50841;
(statearr_50861_52142[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_50841[(4)]))){
var statearr_50862_52143 = state_50841;
(statearr_50862_52143[(1)] = cljs.core.first((state_50841[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52144 = state_50841;
state_50841 = G__52144;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$state_machine__50431__auto__ = function(state_50841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50431__auto____1.call(this,state_50841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50431__auto____0;
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50431__auto____1;
return cljs$core$async$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_50863 = f__50502__auto__();
(statearr_50863[(6)] = c__50501__auto___52125);

return statearr_50863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_50885){
var state_val_50886 = (state_50885[(1)]);
if((state_val_50886 === (7))){
var inst_50881 = (state_50885[(2)]);
var state_50885__$1 = state_50885;
var statearr_50887_52147 = state_50885__$1;
(statearr_50887_52147[(2)] = inst_50881);

(statearr_50887_52147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50886 === (1))){
var inst_50864 = init;
var inst_50865 = inst_50864;
var state_50885__$1 = (function (){var statearr_50888 = state_50885;
(statearr_50888[(7)] = inst_50865);

return statearr_50888;
})();
var statearr_50889_52148 = state_50885__$1;
(statearr_50889_52148[(2)] = null);

(statearr_50889_52148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50886 === (4))){
var inst_50868 = (state_50885[(8)]);
var inst_50868__$1 = (state_50885[(2)]);
var inst_50869 = (inst_50868__$1 == null);
var state_50885__$1 = (function (){var statearr_50890 = state_50885;
(statearr_50890[(8)] = inst_50868__$1);

return statearr_50890;
})();
if(cljs.core.truth_(inst_50869)){
var statearr_50891_52150 = state_50885__$1;
(statearr_50891_52150[(1)] = (5));

} else {
var statearr_50892_52151 = state_50885__$1;
(statearr_50892_52151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50886 === (6))){
var inst_50865 = (state_50885[(7)]);
var inst_50868 = (state_50885[(8)]);
var inst_50872 = (state_50885[(9)]);
var inst_50872__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50865,inst_50868) : f.call(null,inst_50865,inst_50868));
var inst_50873 = cljs.core.reduced_QMARK_(inst_50872__$1);
var state_50885__$1 = (function (){var statearr_50893 = state_50885;
(statearr_50893[(9)] = inst_50872__$1);

return statearr_50893;
})();
if(inst_50873){
var statearr_50894_52152 = state_50885__$1;
(statearr_50894_52152[(1)] = (8));

} else {
var statearr_50895_52153 = state_50885__$1;
(statearr_50895_52153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50886 === (3))){
var inst_50883 = (state_50885[(2)]);
var state_50885__$1 = state_50885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50885__$1,inst_50883);
} else {
if((state_val_50886 === (2))){
var state_50885__$1 = state_50885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50885__$1,(4),ch);
} else {
if((state_val_50886 === (9))){
var inst_50872 = (state_50885[(9)]);
var inst_50865 = inst_50872;
var state_50885__$1 = (function (){var statearr_50896 = state_50885;
(statearr_50896[(7)] = inst_50865);

return statearr_50896;
})();
var statearr_50897_52154 = state_50885__$1;
(statearr_50897_52154[(2)] = null);

(statearr_50897_52154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50886 === (5))){
var inst_50865 = (state_50885[(7)]);
var state_50885__$1 = state_50885;
var statearr_50898_52155 = state_50885__$1;
(statearr_50898_52155[(2)] = inst_50865);

(statearr_50898_52155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50886 === (10))){
var inst_50879 = (state_50885[(2)]);
var state_50885__$1 = state_50885;
var statearr_50899_52156 = state_50885__$1;
(statearr_50899_52156[(2)] = inst_50879);

(statearr_50899_52156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50886 === (8))){
var inst_50872 = (state_50885[(9)]);
var inst_50875 = cljs.core.deref(inst_50872);
var state_50885__$1 = state_50885;
var statearr_50900_52157 = state_50885__$1;
(statearr_50900_52157[(2)] = inst_50875);

(statearr_50900_52157[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__50431__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50431__auto____0 = (function (){
var statearr_50901 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50901[(0)] = cljs$core$async$reduce_$_state_machine__50431__auto__);

(statearr_50901[(1)] = (1));

return statearr_50901;
});
var cljs$core$async$reduce_$_state_machine__50431__auto____1 = (function (state_50885){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_50885);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e50902){var ex__50434__auto__ = e50902;
var statearr_50903_52158 = state_50885;
(statearr_50903_52158[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_50885[(4)]))){
var statearr_50904_52159 = state_50885;
(statearr_50904_52159[(1)] = cljs.core.first((state_50885[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52160 = state_50885;
state_50885 = G__52160;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50431__auto__ = function(state_50885){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50431__auto____1.call(this,state_50885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50431__auto____0;
cljs$core$async$reduce_$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50431__auto____1;
return cljs$core$async$reduce_$_state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_50905 = f__50502__auto__();
(statearr_50905[(6)] = c__50501__auto__);

return statearr_50905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));

return c__50501__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_50911){
var state_val_50912 = (state_50911[(1)]);
if((state_val_50912 === (1))){
var inst_50906 = cljs.core.async.reduce(f__$1,init,ch);
var state_50911__$1 = state_50911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50911__$1,(2),inst_50906);
} else {
if((state_val_50912 === (2))){
var inst_50908 = (state_50911[(2)]);
var inst_50909 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50908) : f__$1.call(null,inst_50908));
var state_50911__$1 = state_50911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50911__$1,inst_50909);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50431__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50431__auto____0 = (function (){
var statearr_50913 = [null,null,null,null,null,null,null];
(statearr_50913[(0)] = cljs$core$async$transduce_$_state_machine__50431__auto__);

(statearr_50913[(1)] = (1));

return statearr_50913;
});
var cljs$core$async$transduce_$_state_machine__50431__auto____1 = (function (state_50911){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_50911);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e50914){var ex__50434__auto__ = e50914;
var statearr_50915_52165 = state_50911;
(statearr_50915_52165[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_50911[(4)]))){
var statearr_50916_52167 = state_50911;
(statearr_50916_52167[(1)] = cljs.core.first((state_50911[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52171 = state_50911;
state_50911 = G__52171;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50431__auto__ = function(state_50911){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50431__auto____1.call(this,state_50911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50431__auto____0;
cljs$core$async$transduce_$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50431__auto____1;
return cljs$core$async$transduce_$_state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_50917 = f__50502__auto__();
(statearr_50917[(6)] = c__50501__auto__);

return statearr_50917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));

return c__50501__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__50919 = arguments.length;
switch (G__50919) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_50944){
var state_val_50945 = (state_50944[(1)]);
if((state_val_50945 === (7))){
var inst_50926 = (state_50944[(2)]);
var state_50944__$1 = state_50944;
var statearr_50946_52178 = state_50944__$1;
(statearr_50946_52178[(2)] = inst_50926);

(statearr_50946_52178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50945 === (1))){
var inst_50920 = cljs.core.seq(coll);
var inst_50921 = inst_50920;
var state_50944__$1 = (function (){var statearr_50947 = state_50944;
(statearr_50947[(7)] = inst_50921);

return statearr_50947;
})();
var statearr_50948_52182 = state_50944__$1;
(statearr_50948_52182[(2)] = null);

(statearr_50948_52182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50945 === (4))){
var inst_50921 = (state_50944[(7)]);
var inst_50924 = cljs.core.first(inst_50921);
var state_50944__$1 = state_50944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50944__$1,(7),ch,inst_50924);
} else {
if((state_val_50945 === (13))){
var inst_50938 = (state_50944[(2)]);
var state_50944__$1 = state_50944;
var statearr_50949_52184 = state_50944__$1;
(statearr_50949_52184[(2)] = inst_50938);

(statearr_50949_52184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50945 === (6))){
var inst_50929 = (state_50944[(2)]);
var state_50944__$1 = state_50944;
if(cljs.core.truth_(inst_50929)){
var statearr_50950_52186 = state_50944__$1;
(statearr_50950_52186[(1)] = (8));

} else {
var statearr_50951_52187 = state_50944__$1;
(statearr_50951_52187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50945 === (3))){
var inst_50942 = (state_50944[(2)]);
var state_50944__$1 = state_50944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50944__$1,inst_50942);
} else {
if((state_val_50945 === (12))){
var state_50944__$1 = state_50944;
var statearr_50952_52188 = state_50944__$1;
(statearr_50952_52188[(2)] = null);

(statearr_50952_52188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50945 === (2))){
var inst_50921 = (state_50944[(7)]);
var state_50944__$1 = state_50944;
if(cljs.core.truth_(inst_50921)){
var statearr_50953_52189 = state_50944__$1;
(statearr_50953_52189[(1)] = (4));

} else {
var statearr_50954_52190 = state_50944__$1;
(statearr_50954_52190[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50945 === (11))){
var inst_50935 = cljs.core.async.close_BANG_(ch);
var state_50944__$1 = state_50944;
var statearr_50955_52191 = state_50944__$1;
(statearr_50955_52191[(2)] = inst_50935);

(statearr_50955_52191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50945 === (9))){
var state_50944__$1 = state_50944;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50956_52192 = state_50944__$1;
(statearr_50956_52192[(1)] = (11));

} else {
var statearr_50957_52193 = state_50944__$1;
(statearr_50957_52193[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50945 === (5))){
var inst_50921 = (state_50944[(7)]);
var state_50944__$1 = state_50944;
var statearr_50958_52194 = state_50944__$1;
(statearr_50958_52194[(2)] = inst_50921);

(statearr_50958_52194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50945 === (10))){
var inst_50940 = (state_50944[(2)]);
var state_50944__$1 = state_50944;
var statearr_50959_52195 = state_50944__$1;
(statearr_50959_52195[(2)] = inst_50940);

(statearr_50959_52195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50945 === (8))){
var inst_50921 = (state_50944[(7)]);
var inst_50931 = cljs.core.next(inst_50921);
var inst_50921__$1 = inst_50931;
var state_50944__$1 = (function (){var statearr_50960 = state_50944;
(statearr_50960[(7)] = inst_50921__$1);

return statearr_50960;
})();
var statearr_50961_52196 = state_50944__$1;
(statearr_50961_52196[(2)] = null);

(statearr_50961_52196[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50431__auto__ = null;
var cljs$core$async$state_machine__50431__auto____0 = (function (){
var statearr_50962 = [null,null,null,null,null,null,null,null];
(statearr_50962[(0)] = cljs$core$async$state_machine__50431__auto__);

(statearr_50962[(1)] = (1));

return statearr_50962;
});
var cljs$core$async$state_machine__50431__auto____1 = (function (state_50944){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_50944);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e50963){var ex__50434__auto__ = e50963;
var statearr_50964_52197 = state_50944;
(statearr_50964_52197[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_50944[(4)]))){
var statearr_50965_52198 = state_50944;
(statearr_50965_52198[(1)] = cljs.core.first((state_50944[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52199 = state_50944;
state_50944 = G__52199;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$state_machine__50431__auto__ = function(state_50944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50431__auto____1.call(this,state_50944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50431__auto____0;
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50431__auto____1;
return cljs$core$async$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_50966 = f__50502__auto__();
(statearr_50966[(6)] = c__50501__auto__);

return statearr_50966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));

return c__50501__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50968 = arguments.length;
switch (G__50968) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_52201 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52201(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52202 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52202(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52204 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52204(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52210 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52210(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50969 = (function (ch,cs,meta50970){
this.ch = ch;
this.cs = cs;
this.meta50970 = meta50970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50971,meta50970__$1){
var self__ = this;
var _50971__$1 = this;
return (new cljs.core.async.t_cljs$core$async50969(self__.ch,self__.cs,meta50970__$1));
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50971){
var self__ = this;
var _50971__$1 = this;
return self__.meta50970;
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50970","meta50970",-908848138,null)], null);
}));

(cljs.core.async.t_cljs$core$async50969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50969");

(cljs.core.async.t_cljs$core$async50969.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async50969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50969.
 */
cljs.core.async.__GT_t_cljs$core$async50969 = (function cljs$core$async$__GT_t_cljs$core$async50969(ch,cs,meta50970){
return (new cljs.core.async.t_cljs$core$async50969(ch,cs,meta50970));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async50969(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__50501__auto___52211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_51104){
var state_val_51105 = (state_51104[(1)]);
if((state_val_51105 === (7))){
var inst_51100 = (state_51104[(2)]);
var state_51104__$1 = state_51104;
var statearr_51106_52212 = state_51104__$1;
(statearr_51106_52212[(2)] = inst_51100);

(statearr_51106_52212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (20))){
var inst_51005 = (state_51104[(7)]);
var inst_51017 = cljs.core.first(inst_51005);
var inst_51018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51017,(0),null);
var inst_51019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51017,(1),null);
var state_51104__$1 = (function (){var statearr_51107 = state_51104;
(statearr_51107[(8)] = inst_51018);

return statearr_51107;
})();
if(cljs.core.truth_(inst_51019)){
var statearr_51108_52213 = state_51104__$1;
(statearr_51108_52213[(1)] = (22));

} else {
var statearr_51109_52214 = state_51104__$1;
(statearr_51109_52214[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (27))){
var inst_51047 = (state_51104[(9)]);
var inst_51049 = (state_51104[(10)]);
var inst_51054 = (state_51104[(11)]);
var inst_50974 = (state_51104[(12)]);
var inst_51054__$1 = cljs.core._nth(inst_51047,inst_51049);
var inst_51055 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51054__$1,inst_50974,done);
var state_51104__$1 = (function (){var statearr_51110 = state_51104;
(statearr_51110[(11)] = inst_51054__$1);

return statearr_51110;
})();
if(cljs.core.truth_(inst_51055)){
var statearr_51111_52215 = state_51104__$1;
(statearr_51111_52215[(1)] = (30));

} else {
var statearr_51112_52216 = state_51104__$1;
(statearr_51112_52216[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (1))){
var state_51104__$1 = state_51104;
var statearr_51113_52217 = state_51104__$1;
(statearr_51113_52217[(2)] = null);

(statearr_51113_52217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (24))){
var inst_51005 = (state_51104[(7)]);
var inst_51024 = (state_51104[(2)]);
var inst_51025 = cljs.core.next(inst_51005);
var inst_50983 = inst_51025;
var inst_50984 = null;
var inst_50985 = (0);
var inst_50986 = (0);
var state_51104__$1 = (function (){var statearr_51114 = state_51104;
(statearr_51114[(13)] = inst_51024);

(statearr_51114[(14)] = inst_50983);

(statearr_51114[(15)] = inst_50984);

(statearr_51114[(16)] = inst_50985);

(statearr_51114[(17)] = inst_50986);

return statearr_51114;
})();
var statearr_51115_52218 = state_51104__$1;
(statearr_51115_52218[(2)] = null);

(statearr_51115_52218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (39))){
var state_51104__$1 = state_51104;
var statearr_51119_52219 = state_51104__$1;
(statearr_51119_52219[(2)] = null);

(statearr_51119_52219[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (4))){
var inst_50974 = (state_51104[(12)]);
var inst_50974__$1 = (state_51104[(2)]);
var inst_50975 = (inst_50974__$1 == null);
var state_51104__$1 = (function (){var statearr_51120 = state_51104;
(statearr_51120[(12)] = inst_50974__$1);

return statearr_51120;
})();
if(cljs.core.truth_(inst_50975)){
var statearr_51121_52220 = state_51104__$1;
(statearr_51121_52220[(1)] = (5));

} else {
var statearr_51122_52221 = state_51104__$1;
(statearr_51122_52221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (15))){
var inst_50986 = (state_51104[(17)]);
var inst_50983 = (state_51104[(14)]);
var inst_50984 = (state_51104[(15)]);
var inst_50985 = (state_51104[(16)]);
var inst_51001 = (state_51104[(2)]);
var inst_51002 = (inst_50986 + (1));
var tmp51116 = inst_50984;
var tmp51117 = inst_50985;
var tmp51118 = inst_50983;
var inst_50983__$1 = tmp51118;
var inst_50984__$1 = tmp51116;
var inst_50985__$1 = tmp51117;
var inst_50986__$1 = inst_51002;
var state_51104__$1 = (function (){var statearr_51123 = state_51104;
(statearr_51123[(18)] = inst_51001);

(statearr_51123[(14)] = inst_50983__$1);

(statearr_51123[(15)] = inst_50984__$1);

(statearr_51123[(16)] = inst_50985__$1);

(statearr_51123[(17)] = inst_50986__$1);

return statearr_51123;
})();
var statearr_51124_52222 = state_51104__$1;
(statearr_51124_52222[(2)] = null);

(statearr_51124_52222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (21))){
var inst_51028 = (state_51104[(2)]);
var state_51104__$1 = state_51104;
var statearr_51128_52223 = state_51104__$1;
(statearr_51128_52223[(2)] = inst_51028);

(statearr_51128_52223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (31))){
var inst_51054 = (state_51104[(11)]);
var inst_51058 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51054);
var state_51104__$1 = state_51104;
var statearr_51129_52224 = state_51104__$1;
(statearr_51129_52224[(2)] = inst_51058);

(statearr_51129_52224[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (32))){
var inst_51049 = (state_51104[(10)]);
var inst_51046 = (state_51104[(19)]);
var inst_51047 = (state_51104[(9)]);
var inst_51048 = (state_51104[(20)]);
var inst_51060 = (state_51104[(2)]);
var inst_51061 = (inst_51049 + (1));
var tmp51125 = inst_51048;
var tmp51126 = inst_51046;
var tmp51127 = inst_51047;
var inst_51046__$1 = tmp51126;
var inst_51047__$1 = tmp51127;
var inst_51048__$1 = tmp51125;
var inst_51049__$1 = inst_51061;
var state_51104__$1 = (function (){var statearr_51130 = state_51104;
(statearr_51130[(21)] = inst_51060);

(statearr_51130[(19)] = inst_51046__$1);

(statearr_51130[(9)] = inst_51047__$1);

(statearr_51130[(20)] = inst_51048__$1);

(statearr_51130[(10)] = inst_51049__$1);

return statearr_51130;
})();
var statearr_51131_52225 = state_51104__$1;
(statearr_51131_52225[(2)] = null);

(statearr_51131_52225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (40))){
var inst_51073 = (state_51104[(22)]);
var inst_51077 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51073);
var state_51104__$1 = state_51104;
var statearr_51132_52226 = state_51104__$1;
(statearr_51132_52226[(2)] = inst_51077);

(statearr_51132_52226[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (33))){
var inst_51064 = (state_51104[(23)]);
var inst_51066 = cljs.core.chunked_seq_QMARK_(inst_51064);
var state_51104__$1 = state_51104;
if(inst_51066){
var statearr_51133_52227 = state_51104__$1;
(statearr_51133_52227[(1)] = (36));

} else {
var statearr_51134_52228 = state_51104__$1;
(statearr_51134_52228[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (13))){
var inst_50995 = (state_51104[(24)]);
var inst_50998 = cljs.core.async.close_BANG_(inst_50995);
var state_51104__$1 = state_51104;
var statearr_51135_52229 = state_51104__$1;
(statearr_51135_52229[(2)] = inst_50998);

(statearr_51135_52229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (22))){
var inst_51018 = (state_51104[(8)]);
var inst_51021 = cljs.core.async.close_BANG_(inst_51018);
var state_51104__$1 = state_51104;
var statearr_51136_52230 = state_51104__$1;
(statearr_51136_52230[(2)] = inst_51021);

(statearr_51136_52230[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (36))){
var inst_51064 = (state_51104[(23)]);
var inst_51068 = cljs.core.chunk_first(inst_51064);
var inst_51069 = cljs.core.chunk_rest(inst_51064);
var inst_51070 = cljs.core.count(inst_51068);
var inst_51046 = inst_51069;
var inst_51047 = inst_51068;
var inst_51048 = inst_51070;
var inst_51049 = (0);
var state_51104__$1 = (function (){var statearr_51137 = state_51104;
(statearr_51137[(19)] = inst_51046);

(statearr_51137[(9)] = inst_51047);

(statearr_51137[(20)] = inst_51048);

(statearr_51137[(10)] = inst_51049);

return statearr_51137;
})();
var statearr_51138_52231 = state_51104__$1;
(statearr_51138_52231[(2)] = null);

(statearr_51138_52231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (41))){
var inst_51064 = (state_51104[(23)]);
var inst_51079 = (state_51104[(2)]);
var inst_51080 = cljs.core.next(inst_51064);
var inst_51046 = inst_51080;
var inst_51047 = null;
var inst_51048 = (0);
var inst_51049 = (0);
var state_51104__$1 = (function (){var statearr_51139 = state_51104;
(statearr_51139[(25)] = inst_51079);

(statearr_51139[(19)] = inst_51046);

(statearr_51139[(9)] = inst_51047);

(statearr_51139[(20)] = inst_51048);

(statearr_51139[(10)] = inst_51049);

return statearr_51139;
})();
var statearr_51140_52233 = state_51104__$1;
(statearr_51140_52233[(2)] = null);

(statearr_51140_52233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (43))){
var state_51104__$1 = state_51104;
var statearr_51141_52237 = state_51104__$1;
(statearr_51141_52237[(2)] = null);

(statearr_51141_52237[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (29))){
var inst_51088 = (state_51104[(2)]);
var state_51104__$1 = state_51104;
var statearr_51142_52238 = state_51104__$1;
(statearr_51142_52238[(2)] = inst_51088);

(statearr_51142_52238[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (44))){
var inst_51097 = (state_51104[(2)]);
var state_51104__$1 = (function (){var statearr_51143 = state_51104;
(statearr_51143[(26)] = inst_51097);

return statearr_51143;
})();
var statearr_51144_52239 = state_51104__$1;
(statearr_51144_52239[(2)] = null);

(statearr_51144_52239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (6))){
var inst_51038 = (state_51104[(27)]);
var inst_51037 = cljs.core.deref(cs);
var inst_51038__$1 = cljs.core.keys(inst_51037);
var inst_51039 = cljs.core.count(inst_51038__$1);
var inst_51040 = cljs.core.reset_BANG_(dctr,inst_51039);
var inst_51045 = cljs.core.seq(inst_51038__$1);
var inst_51046 = inst_51045;
var inst_51047 = null;
var inst_51048 = (0);
var inst_51049 = (0);
var state_51104__$1 = (function (){var statearr_51145 = state_51104;
(statearr_51145[(27)] = inst_51038__$1);

(statearr_51145[(28)] = inst_51040);

(statearr_51145[(19)] = inst_51046);

(statearr_51145[(9)] = inst_51047);

(statearr_51145[(20)] = inst_51048);

(statearr_51145[(10)] = inst_51049);

return statearr_51145;
})();
var statearr_51146_52244 = state_51104__$1;
(statearr_51146_52244[(2)] = null);

(statearr_51146_52244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (28))){
var inst_51046 = (state_51104[(19)]);
var inst_51064 = (state_51104[(23)]);
var inst_51064__$1 = cljs.core.seq(inst_51046);
var state_51104__$1 = (function (){var statearr_51147 = state_51104;
(statearr_51147[(23)] = inst_51064__$1);

return statearr_51147;
})();
if(inst_51064__$1){
var statearr_51148_52245 = state_51104__$1;
(statearr_51148_52245[(1)] = (33));

} else {
var statearr_51149_52246 = state_51104__$1;
(statearr_51149_52246[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (25))){
var inst_51049 = (state_51104[(10)]);
var inst_51048 = (state_51104[(20)]);
var inst_51051 = (inst_51049 < inst_51048);
var inst_51052 = inst_51051;
var state_51104__$1 = state_51104;
if(cljs.core.truth_(inst_51052)){
var statearr_51150_52248 = state_51104__$1;
(statearr_51150_52248[(1)] = (27));

} else {
var statearr_51151_52252 = state_51104__$1;
(statearr_51151_52252[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (34))){
var state_51104__$1 = state_51104;
var statearr_51152_52253 = state_51104__$1;
(statearr_51152_52253[(2)] = null);

(statearr_51152_52253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (17))){
var state_51104__$1 = state_51104;
var statearr_51153_52255 = state_51104__$1;
(statearr_51153_52255[(2)] = null);

(statearr_51153_52255[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (3))){
var inst_51102 = (state_51104[(2)]);
var state_51104__$1 = state_51104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51104__$1,inst_51102);
} else {
if((state_val_51105 === (12))){
var inst_51033 = (state_51104[(2)]);
var state_51104__$1 = state_51104;
var statearr_51154_52257 = state_51104__$1;
(statearr_51154_52257[(2)] = inst_51033);

(statearr_51154_52257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (2))){
var state_51104__$1 = state_51104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51104__$1,(4),ch);
} else {
if((state_val_51105 === (23))){
var state_51104__$1 = state_51104;
var statearr_51155_52261 = state_51104__$1;
(statearr_51155_52261[(2)] = null);

(statearr_51155_52261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (35))){
var inst_51086 = (state_51104[(2)]);
var state_51104__$1 = state_51104;
var statearr_51156_52262 = state_51104__$1;
(statearr_51156_52262[(2)] = inst_51086);

(statearr_51156_52262[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (19))){
var inst_51005 = (state_51104[(7)]);
var inst_51009 = cljs.core.chunk_first(inst_51005);
var inst_51010 = cljs.core.chunk_rest(inst_51005);
var inst_51011 = cljs.core.count(inst_51009);
var inst_50983 = inst_51010;
var inst_50984 = inst_51009;
var inst_50985 = inst_51011;
var inst_50986 = (0);
var state_51104__$1 = (function (){var statearr_51157 = state_51104;
(statearr_51157[(14)] = inst_50983);

(statearr_51157[(15)] = inst_50984);

(statearr_51157[(16)] = inst_50985);

(statearr_51157[(17)] = inst_50986);

return statearr_51157;
})();
var statearr_51158_52267 = state_51104__$1;
(statearr_51158_52267[(2)] = null);

(statearr_51158_52267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (11))){
var inst_50983 = (state_51104[(14)]);
var inst_51005 = (state_51104[(7)]);
var inst_51005__$1 = cljs.core.seq(inst_50983);
var state_51104__$1 = (function (){var statearr_51159 = state_51104;
(statearr_51159[(7)] = inst_51005__$1);

return statearr_51159;
})();
if(inst_51005__$1){
var statearr_51160_52268 = state_51104__$1;
(statearr_51160_52268[(1)] = (16));

} else {
var statearr_51161_52269 = state_51104__$1;
(statearr_51161_52269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (9))){
var inst_51035 = (state_51104[(2)]);
var state_51104__$1 = state_51104;
var statearr_51162_52270 = state_51104__$1;
(statearr_51162_52270[(2)] = inst_51035);

(statearr_51162_52270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (5))){
var inst_50981 = cljs.core.deref(cs);
var inst_50982 = cljs.core.seq(inst_50981);
var inst_50983 = inst_50982;
var inst_50984 = null;
var inst_50985 = (0);
var inst_50986 = (0);
var state_51104__$1 = (function (){var statearr_51163 = state_51104;
(statearr_51163[(14)] = inst_50983);

(statearr_51163[(15)] = inst_50984);

(statearr_51163[(16)] = inst_50985);

(statearr_51163[(17)] = inst_50986);

return statearr_51163;
})();
var statearr_51164_52271 = state_51104__$1;
(statearr_51164_52271[(2)] = null);

(statearr_51164_52271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (14))){
var state_51104__$1 = state_51104;
var statearr_51165_52272 = state_51104__$1;
(statearr_51165_52272[(2)] = null);

(statearr_51165_52272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (45))){
var inst_51094 = (state_51104[(2)]);
var state_51104__$1 = state_51104;
var statearr_51166_52273 = state_51104__$1;
(statearr_51166_52273[(2)] = inst_51094);

(statearr_51166_52273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (26))){
var inst_51038 = (state_51104[(27)]);
var inst_51090 = (state_51104[(2)]);
var inst_51091 = cljs.core.seq(inst_51038);
var state_51104__$1 = (function (){var statearr_51167 = state_51104;
(statearr_51167[(29)] = inst_51090);

return statearr_51167;
})();
if(inst_51091){
var statearr_51168_52274 = state_51104__$1;
(statearr_51168_52274[(1)] = (42));

} else {
var statearr_51169_52275 = state_51104__$1;
(statearr_51169_52275[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (16))){
var inst_51005 = (state_51104[(7)]);
var inst_51007 = cljs.core.chunked_seq_QMARK_(inst_51005);
var state_51104__$1 = state_51104;
if(inst_51007){
var statearr_51170_52276 = state_51104__$1;
(statearr_51170_52276[(1)] = (19));

} else {
var statearr_51171_52277 = state_51104__$1;
(statearr_51171_52277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (38))){
var inst_51083 = (state_51104[(2)]);
var state_51104__$1 = state_51104;
var statearr_51172_52278 = state_51104__$1;
(statearr_51172_52278[(2)] = inst_51083);

(statearr_51172_52278[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (30))){
var state_51104__$1 = state_51104;
var statearr_51173_52279 = state_51104__$1;
(statearr_51173_52279[(2)] = null);

(statearr_51173_52279[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (10))){
var inst_50984 = (state_51104[(15)]);
var inst_50986 = (state_51104[(17)]);
var inst_50994 = cljs.core._nth(inst_50984,inst_50986);
var inst_50995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50994,(0),null);
var inst_50996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50994,(1),null);
var state_51104__$1 = (function (){var statearr_51174 = state_51104;
(statearr_51174[(24)] = inst_50995);

return statearr_51174;
})();
if(cljs.core.truth_(inst_50996)){
var statearr_51175_52280 = state_51104__$1;
(statearr_51175_52280[(1)] = (13));

} else {
var statearr_51176_52281 = state_51104__$1;
(statearr_51176_52281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (18))){
var inst_51031 = (state_51104[(2)]);
var state_51104__$1 = state_51104;
var statearr_51177_52282 = state_51104__$1;
(statearr_51177_52282[(2)] = inst_51031);

(statearr_51177_52282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (42))){
var state_51104__$1 = state_51104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51104__$1,(45),dchan);
} else {
if((state_val_51105 === (37))){
var inst_51064 = (state_51104[(23)]);
var inst_51073 = (state_51104[(22)]);
var inst_50974 = (state_51104[(12)]);
var inst_51073__$1 = cljs.core.first(inst_51064);
var inst_51074 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51073__$1,inst_50974,done);
var state_51104__$1 = (function (){var statearr_51178 = state_51104;
(statearr_51178[(22)] = inst_51073__$1);

return statearr_51178;
})();
if(cljs.core.truth_(inst_51074)){
var statearr_51179_52283 = state_51104__$1;
(statearr_51179_52283[(1)] = (39));

} else {
var statearr_51180_52284 = state_51104__$1;
(statearr_51180_52284[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51105 === (8))){
var inst_50986 = (state_51104[(17)]);
var inst_50985 = (state_51104[(16)]);
var inst_50988 = (inst_50986 < inst_50985);
var inst_50989 = inst_50988;
var state_51104__$1 = state_51104;
if(cljs.core.truth_(inst_50989)){
var statearr_51181_52285 = state_51104__$1;
(statearr_51181_52285[(1)] = (10));

} else {
var statearr_51182_52286 = state_51104__$1;
(statearr_51182_52286[(1)] = (11));

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
}
}
}
}
}
}
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
var cljs$core$async$mult_$_state_machine__50431__auto__ = null;
var cljs$core$async$mult_$_state_machine__50431__auto____0 = (function (){
var statearr_51183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51183[(0)] = cljs$core$async$mult_$_state_machine__50431__auto__);

(statearr_51183[(1)] = (1));

return statearr_51183;
});
var cljs$core$async$mult_$_state_machine__50431__auto____1 = (function (state_51104){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_51104);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e51184){var ex__50434__auto__ = e51184;
var statearr_51185_52287 = state_51104;
(statearr_51185_52287[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_51104[(4)]))){
var statearr_51186_52288 = state_51104;
(statearr_51186_52288[(1)] = cljs.core.first((state_51104[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52289 = state_51104;
state_51104 = G__52289;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50431__auto__ = function(state_51104){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50431__auto____1.call(this,state_51104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50431__auto____0;
cljs$core$async$mult_$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50431__auto____1;
return cljs$core$async$mult_$_state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_51187 = f__50502__auto__();
(statearr_51187[(6)] = c__50501__auto___52211);

return statearr_51187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51189 = arguments.length;
switch (G__51189) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_52291 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_52291(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52292 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_52292(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52293 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52293(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52294 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_52294(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52295 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52295(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___52296 = arguments.length;
var i__5750__auto___52297 = (0);
while(true){
if((i__5750__auto___52297 < len__5749__auto___52296)){
args__5755__auto__.push((arguments[i__5750__auto___52297]));

var G__52298 = (i__5750__auto___52297 + (1));
i__5750__auto___52297 = G__52298;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51194){
var map__51195 = p__51194;
var map__51195__$1 = cljs.core.__destructure_map(map__51195);
var opts = map__51195__$1;
var statearr_51196_52301 = state;
(statearr_51196_52301[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51197_52302 = state;
(statearr_51197_52302[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_51198_52303 = state;
(statearr_51198_52303[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51190){
var G__51191 = cljs.core.first(seq51190);
var seq51190__$1 = cljs.core.next(seq51190);
var G__51192 = cljs.core.first(seq51190__$1);
var seq51190__$2 = cljs.core.next(seq51190__$1);
var G__51193 = cljs.core.first(seq51190__$2);
var seq51190__$3 = cljs.core.next(seq51190__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51191,G__51192,G__51193,seq51190__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51199 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51200){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51200 = meta51200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51201,meta51200__$1){
var self__ = this;
var _51201__$1 = this;
return (new cljs.core.async.t_cljs$core$async51199(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51200__$1));
}));

(cljs.core.async.t_cljs$core$async51199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51201){
var self__ = this;
var _51201__$1 = this;
return self__.meta51200;
}));

(cljs.core.async.t_cljs$core$async51199.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51199.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51199.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51199.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51199.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51199.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51199.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51200","meta51200",-251473329,null)], null);
}));

(cljs.core.async.t_cljs$core$async51199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51199");

(cljs.core.async.t_cljs$core$async51199.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async51199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51199.
 */
cljs.core.async.__GT_t_cljs$core$async51199 = (function cljs$core$async$__GT_t_cljs$core$async51199(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51200){
return (new cljs.core.async.t_cljs$core$async51199(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51200));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async51199(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__50501__auto___52313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_51269){
var state_val_51270 = (state_51269[(1)]);
if((state_val_51270 === (7))){
var inst_51229 = (state_51269[(2)]);
var state_51269__$1 = state_51269;
if(cljs.core.truth_(inst_51229)){
var statearr_51271_52314 = state_51269__$1;
(statearr_51271_52314[(1)] = (8));

} else {
var statearr_51272_52315 = state_51269__$1;
(statearr_51272_52315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (20))){
var inst_51222 = (state_51269[(7)]);
var state_51269__$1 = state_51269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51269__$1,(23),out,inst_51222);
} else {
if((state_val_51270 === (1))){
var inst_51205 = calc_state();
var inst_51206 = cljs.core.__destructure_map(inst_51205);
var inst_51207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51206,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51206,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51206,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51210 = inst_51205;
var state_51269__$1 = (function (){var statearr_51273 = state_51269;
(statearr_51273[(8)] = inst_51207);

(statearr_51273[(9)] = inst_51208);

(statearr_51273[(10)] = inst_51209);

(statearr_51273[(11)] = inst_51210);

return statearr_51273;
})();
var statearr_51274_52319 = state_51269__$1;
(statearr_51274_52319[(2)] = null);

(statearr_51274_52319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (24))){
var inst_51213 = (state_51269[(12)]);
var inst_51210 = inst_51213;
var state_51269__$1 = (function (){var statearr_51275 = state_51269;
(statearr_51275[(11)] = inst_51210);

return statearr_51275;
})();
var statearr_51276_52323 = state_51269__$1;
(statearr_51276_52323[(2)] = null);

(statearr_51276_52323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (4))){
var inst_51222 = (state_51269[(7)]);
var inst_51224 = (state_51269[(13)]);
var inst_51221 = (state_51269[(2)]);
var inst_51222__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51221,(0),null);
var inst_51223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51221,(1),null);
var inst_51224__$1 = (inst_51222__$1 == null);
var state_51269__$1 = (function (){var statearr_51277 = state_51269;
(statearr_51277[(7)] = inst_51222__$1);

(statearr_51277[(14)] = inst_51223);

(statearr_51277[(13)] = inst_51224__$1);

return statearr_51277;
})();
if(cljs.core.truth_(inst_51224__$1)){
var statearr_51278_52324 = state_51269__$1;
(statearr_51278_52324[(1)] = (5));

} else {
var statearr_51279_52325 = state_51269__$1;
(statearr_51279_52325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (15))){
var inst_51214 = (state_51269[(15)]);
var inst_51243 = (state_51269[(16)]);
var inst_51243__$1 = cljs.core.empty_QMARK_(inst_51214);
var state_51269__$1 = (function (){var statearr_51280 = state_51269;
(statearr_51280[(16)] = inst_51243__$1);

return statearr_51280;
})();
if(inst_51243__$1){
var statearr_51281_52326 = state_51269__$1;
(statearr_51281_52326[(1)] = (17));

} else {
var statearr_51282_52327 = state_51269__$1;
(statearr_51282_52327[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (21))){
var inst_51213 = (state_51269[(12)]);
var inst_51210 = inst_51213;
var state_51269__$1 = (function (){var statearr_51283 = state_51269;
(statearr_51283[(11)] = inst_51210);

return statearr_51283;
})();
var statearr_51284_52328 = state_51269__$1;
(statearr_51284_52328[(2)] = null);

(statearr_51284_52328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (13))){
var inst_51236 = (state_51269[(2)]);
var inst_51237 = calc_state();
var inst_51210 = inst_51237;
var state_51269__$1 = (function (){var statearr_51285 = state_51269;
(statearr_51285[(17)] = inst_51236);

(statearr_51285[(11)] = inst_51210);

return statearr_51285;
})();
var statearr_51286_52329 = state_51269__$1;
(statearr_51286_52329[(2)] = null);

(statearr_51286_52329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (22))){
var inst_51263 = (state_51269[(2)]);
var state_51269__$1 = state_51269;
var statearr_51287_52330 = state_51269__$1;
(statearr_51287_52330[(2)] = inst_51263);

(statearr_51287_52330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (6))){
var inst_51223 = (state_51269[(14)]);
var inst_51227 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51223,change);
var state_51269__$1 = state_51269;
var statearr_51288_52331 = state_51269__$1;
(statearr_51288_52331[(2)] = inst_51227);

(statearr_51288_52331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (25))){
var state_51269__$1 = state_51269;
var statearr_51289_52332 = state_51269__$1;
(statearr_51289_52332[(2)] = null);

(statearr_51289_52332[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (17))){
var inst_51215 = (state_51269[(18)]);
var inst_51223 = (state_51269[(14)]);
var inst_51245 = (inst_51215.cljs$core$IFn$_invoke$arity$1 ? inst_51215.cljs$core$IFn$_invoke$arity$1(inst_51223) : inst_51215.call(null,inst_51223));
var inst_51246 = cljs.core.not(inst_51245);
var state_51269__$1 = state_51269;
var statearr_51290_52333 = state_51269__$1;
(statearr_51290_52333[(2)] = inst_51246);

(statearr_51290_52333[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (3))){
var inst_51267 = (state_51269[(2)]);
var state_51269__$1 = state_51269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51269__$1,inst_51267);
} else {
if((state_val_51270 === (12))){
var state_51269__$1 = state_51269;
var statearr_51291_52334 = state_51269__$1;
(statearr_51291_52334[(2)] = null);

(statearr_51291_52334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (2))){
var inst_51210 = (state_51269[(11)]);
var inst_51213 = (state_51269[(12)]);
var inst_51213__$1 = cljs.core.__destructure_map(inst_51210);
var inst_51214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51213__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51213__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51213__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51269__$1 = (function (){var statearr_51292 = state_51269;
(statearr_51292[(12)] = inst_51213__$1);

(statearr_51292[(15)] = inst_51214);

(statearr_51292[(18)] = inst_51215);

return statearr_51292;
})();
return cljs.core.async.ioc_alts_BANG_(state_51269__$1,(4),inst_51216);
} else {
if((state_val_51270 === (23))){
var inst_51254 = (state_51269[(2)]);
var state_51269__$1 = state_51269;
if(cljs.core.truth_(inst_51254)){
var statearr_51293_52335 = state_51269__$1;
(statearr_51293_52335[(1)] = (24));

} else {
var statearr_51294_52336 = state_51269__$1;
(statearr_51294_52336[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (19))){
var inst_51249 = (state_51269[(2)]);
var state_51269__$1 = state_51269;
var statearr_51295_52337 = state_51269__$1;
(statearr_51295_52337[(2)] = inst_51249);

(statearr_51295_52337[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (11))){
var inst_51223 = (state_51269[(14)]);
var inst_51233 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51223);
var state_51269__$1 = state_51269;
var statearr_51296_52338 = state_51269__$1;
(statearr_51296_52338[(2)] = inst_51233);

(statearr_51296_52338[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (9))){
var inst_51214 = (state_51269[(15)]);
var inst_51223 = (state_51269[(14)]);
var inst_51240 = (state_51269[(19)]);
var inst_51240__$1 = (inst_51214.cljs$core$IFn$_invoke$arity$1 ? inst_51214.cljs$core$IFn$_invoke$arity$1(inst_51223) : inst_51214.call(null,inst_51223));
var state_51269__$1 = (function (){var statearr_51297 = state_51269;
(statearr_51297[(19)] = inst_51240__$1);

return statearr_51297;
})();
if(cljs.core.truth_(inst_51240__$1)){
var statearr_51298_52339 = state_51269__$1;
(statearr_51298_52339[(1)] = (14));

} else {
var statearr_51299_52340 = state_51269__$1;
(statearr_51299_52340[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (5))){
var inst_51224 = (state_51269[(13)]);
var state_51269__$1 = state_51269;
var statearr_51300_52341 = state_51269__$1;
(statearr_51300_52341[(2)] = inst_51224);

(statearr_51300_52341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (14))){
var inst_51240 = (state_51269[(19)]);
var state_51269__$1 = state_51269;
var statearr_51301_52342 = state_51269__$1;
(statearr_51301_52342[(2)] = inst_51240);

(statearr_51301_52342[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (26))){
var inst_51259 = (state_51269[(2)]);
var state_51269__$1 = state_51269;
var statearr_51302_52346 = state_51269__$1;
(statearr_51302_52346[(2)] = inst_51259);

(statearr_51302_52346[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (16))){
var inst_51251 = (state_51269[(2)]);
var state_51269__$1 = state_51269;
if(cljs.core.truth_(inst_51251)){
var statearr_51303_52353 = state_51269__$1;
(statearr_51303_52353[(1)] = (20));

} else {
var statearr_51304_52357 = state_51269__$1;
(statearr_51304_52357[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (10))){
var inst_51265 = (state_51269[(2)]);
var state_51269__$1 = state_51269;
var statearr_51305_52358 = state_51269__$1;
(statearr_51305_52358[(2)] = inst_51265);

(statearr_51305_52358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (18))){
var inst_51243 = (state_51269[(16)]);
var state_51269__$1 = state_51269;
var statearr_51306_52362 = state_51269__$1;
(statearr_51306_52362[(2)] = inst_51243);

(statearr_51306_52362[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51270 === (8))){
var inst_51222 = (state_51269[(7)]);
var inst_51231 = (inst_51222 == null);
var state_51269__$1 = state_51269;
if(cljs.core.truth_(inst_51231)){
var statearr_51307_52369 = state_51269__$1;
(statearr_51307_52369[(1)] = (11));

} else {
var statearr_51308_52370 = state_51269__$1;
(statearr_51308_52370[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__50431__auto__ = null;
var cljs$core$async$mix_$_state_machine__50431__auto____0 = (function (){
var statearr_51309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51309[(0)] = cljs$core$async$mix_$_state_machine__50431__auto__);

(statearr_51309[(1)] = (1));

return statearr_51309;
});
var cljs$core$async$mix_$_state_machine__50431__auto____1 = (function (state_51269){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_51269);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e51310){var ex__50434__auto__ = e51310;
var statearr_51311_52372 = state_51269;
(statearr_51311_52372[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_51269[(4)]))){
var statearr_51312_52373 = state_51269;
(statearr_51312_52373[(1)] = cljs.core.first((state_51269[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52374 = state_51269;
state_51269 = G__52374;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50431__auto__ = function(state_51269){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50431__auto____1.call(this,state_51269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50431__auto____0;
cljs$core$async$mix_$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50431__auto____1;
return cljs$core$async$mix_$_state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_51313 = f__50502__auto__();
(statearr_51313[(6)] = c__50501__auto___52313);

return statearr_51313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_52375 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_52375(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52376 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_52376(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52377 = (function() {
var G__52378 = null;
var G__52378__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__52378__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__52378 = function(p,v){
switch(arguments.length){
case 1:
return G__52378__1.call(this,p);
case 2:
return G__52378__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52378.cljs$core$IFn$_invoke$arity$1 = G__52378__1;
G__52378.cljs$core$IFn$_invoke$arity$2 = G__52378__2;
return G__52378;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51315 = arguments.length;
switch (G__51315) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52377(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52377(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51319 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51320){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51320 = meta51320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51321,meta51320__$1){
var self__ = this;
var _51321__$1 = this;
return (new cljs.core.async.t_cljs$core$async51319(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51320__$1));
}));

(cljs.core.async.t_cljs$core$async51319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51321){
var self__ = this;
var _51321__$1 = this;
return self__.meta51320;
}));

(cljs.core.async.t_cljs$core$async51319.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51319.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51319.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51319.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51319.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51319.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51319.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51320","meta51320",1677704001,null)], null);
}));

(cljs.core.async.t_cljs$core$async51319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51319");

(cljs.core.async.t_cljs$core$async51319.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async51319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51319.
 */
cljs.core.async.__GT_t_cljs$core$async51319 = (function cljs$core$async$__GT_t_cljs$core$async51319(ch,topic_fn,buf_fn,mults,ensure_mult,meta51320){
return (new cljs.core.async.t_cljs$core$async51319(ch,topic_fn,buf_fn,mults,ensure_mult,meta51320));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51318 = arguments.length;
switch (G__51318) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51316_SHARP_){
if(cljs.core.truth_((p1__51316_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51316_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51316_SHARP_.call(null,topic)))){
return p1__51316_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51316_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async51319(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__50501__auto___52383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_51393){
var state_val_51394 = (state_51393[(1)]);
if((state_val_51394 === (7))){
var inst_51389 = (state_51393[(2)]);
var state_51393__$1 = state_51393;
var statearr_51395_52384 = state_51393__$1;
(statearr_51395_52384[(2)] = inst_51389);

(statearr_51395_52384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (20))){
var state_51393__$1 = state_51393;
var statearr_51396_52385 = state_51393__$1;
(statearr_51396_52385[(2)] = null);

(statearr_51396_52385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (1))){
var state_51393__$1 = state_51393;
var statearr_51397_52386 = state_51393__$1;
(statearr_51397_52386[(2)] = null);

(statearr_51397_52386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (24))){
var inst_51372 = (state_51393[(7)]);
var inst_51381 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51372);
var state_51393__$1 = state_51393;
var statearr_51398_52387 = state_51393__$1;
(statearr_51398_52387[(2)] = inst_51381);

(statearr_51398_52387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (4))){
var inst_51324 = (state_51393[(8)]);
var inst_51324__$1 = (state_51393[(2)]);
var inst_51325 = (inst_51324__$1 == null);
var state_51393__$1 = (function (){var statearr_51399 = state_51393;
(statearr_51399[(8)] = inst_51324__$1);

return statearr_51399;
})();
if(cljs.core.truth_(inst_51325)){
var statearr_51400_52388 = state_51393__$1;
(statearr_51400_52388[(1)] = (5));

} else {
var statearr_51401_52389 = state_51393__$1;
(statearr_51401_52389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (15))){
var inst_51366 = (state_51393[(2)]);
var state_51393__$1 = state_51393;
var statearr_51402_52390 = state_51393__$1;
(statearr_51402_52390[(2)] = inst_51366);

(statearr_51402_52390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (21))){
var inst_51386 = (state_51393[(2)]);
var state_51393__$1 = (function (){var statearr_51403 = state_51393;
(statearr_51403[(9)] = inst_51386);

return statearr_51403;
})();
var statearr_51404_52391 = state_51393__$1;
(statearr_51404_52391[(2)] = null);

(statearr_51404_52391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (13))){
var inst_51348 = (state_51393[(10)]);
var inst_51350 = cljs.core.chunked_seq_QMARK_(inst_51348);
var state_51393__$1 = state_51393;
if(inst_51350){
var statearr_51405_52392 = state_51393__$1;
(statearr_51405_52392[(1)] = (16));

} else {
var statearr_51406_52393 = state_51393__$1;
(statearr_51406_52393[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (22))){
var inst_51378 = (state_51393[(2)]);
var state_51393__$1 = state_51393;
if(cljs.core.truth_(inst_51378)){
var statearr_51407_52394 = state_51393__$1;
(statearr_51407_52394[(1)] = (23));

} else {
var statearr_51408_52395 = state_51393__$1;
(statearr_51408_52395[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (6))){
var inst_51324 = (state_51393[(8)]);
var inst_51372 = (state_51393[(7)]);
var inst_51374 = (state_51393[(11)]);
var inst_51372__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51324) : topic_fn.call(null,inst_51324));
var inst_51373 = cljs.core.deref(mults);
var inst_51374__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51373,inst_51372__$1);
var state_51393__$1 = (function (){var statearr_51409 = state_51393;
(statearr_51409[(7)] = inst_51372__$1);

(statearr_51409[(11)] = inst_51374__$1);

return statearr_51409;
})();
if(cljs.core.truth_(inst_51374__$1)){
var statearr_51410_52396 = state_51393__$1;
(statearr_51410_52396[(1)] = (19));

} else {
var statearr_51411_52397 = state_51393__$1;
(statearr_51411_52397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (25))){
var inst_51383 = (state_51393[(2)]);
var state_51393__$1 = state_51393;
var statearr_51412_52398 = state_51393__$1;
(statearr_51412_52398[(2)] = inst_51383);

(statearr_51412_52398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (17))){
var inst_51348 = (state_51393[(10)]);
var inst_51357 = cljs.core.first(inst_51348);
var inst_51358 = cljs.core.async.muxch_STAR_(inst_51357);
var inst_51359 = cljs.core.async.close_BANG_(inst_51358);
var inst_51360 = cljs.core.next(inst_51348);
var inst_51334 = inst_51360;
var inst_51335 = null;
var inst_51336 = (0);
var inst_51337 = (0);
var state_51393__$1 = (function (){var statearr_51413 = state_51393;
(statearr_51413[(12)] = inst_51359);

(statearr_51413[(13)] = inst_51334);

(statearr_51413[(14)] = inst_51335);

(statearr_51413[(15)] = inst_51336);

(statearr_51413[(16)] = inst_51337);

return statearr_51413;
})();
var statearr_51414_52399 = state_51393__$1;
(statearr_51414_52399[(2)] = null);

(statearr_51414_52399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (3))){
var inst_51391 = (state_51393[(2)]);
var state_51393__$1 = state_51393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51393__$1,inst_51391);
} else {
if((state_val_51394 === (12))){
var inst_51368 = (state_51393[(2)]);
var state_51393__$1 = state_51393;
var statearr_51415_52400 = state_51393__$1;
(statearr_51415_52400[(2)] = inst_51368);

(statearr_51415_52400[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (2))){
var state_51393__$1 = state_51393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51393__$1,(4),ch);
} else {
if((state_val_51394 === (23))){
var state_51393__$1 = state_51393;
var statearr_51416_52401 = state_51393__$1;
(statearr_51416_52401[(2)] = null);

(statearr_51416_52401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (19))){
var inst_51374 = (state_51393[(11)]);
var inst_51324 = (state_51393[(8)]);
var inst_51376 = cljs.core.async.muxch_STAR_(inst_51374);
var state_51393__$1 = state_51393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51393__$1,(22),inst_51376,inst_51324);
} else {
if((state_val_51394 === (11))){
var inst_51334 = (state_51393[(13)]);
var inst_51348 = (state_51393[(10)]);
var inst_51348__$1 = cljs.core.seq(inst_51334);
var state_51393__$1 = (function (){var statearr_51417 = state_51393;
(statearr_51417[(10)] = inst_51348__$1);

return statearr_51417;
})();
if(inst_51348__$1){
var statearr_51418_52402 = state_51393__$1;
(statearr_51418_52402[(1)] = (13));

} else {
var statearr_51419_52403 = state_51393__$1;
(statearr_51419_52403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (9))){
var inst_51370 = (state_51393[(2)]);
var state_51393__$1 = state_51393;
var statearr_51420_52404 = state_51393__$1;
(statearr_51420_52404[(2)] = inst_51370);

(statearr_51420_52404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (5))){
var inst_51331 = cljs.core.deref(mults);
var inst_51332 = cljs.core.vals(inst_51331);
var inst_51333 = cljs.core.seq(inst_51332);
var inst_51334 = inst_51333;
var inst_51335 = null;
var inst_51336 = (0);
var inst_51337 = (0);
var state_51393__$1 = (function (){var statearr_51421 = state_51393;
(statearr_51421[(13)] = inst_51334);

(statearr_51421[(14)] = inst_51335);

(statearr_51421[(15)] = inst_51336);

(statearr_51421[(16)] = inst_51337);

return statearr_51421;
})();
var statearr_51422_52405 = state_51393__$1;
(statearr_51422_52405[(2)] = null);

(statearr_51422_52405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (14))){
var state_51393__$1 = state_51393;
var statearr_51426_52406 = state_51393__$1;
(statearr_51426_52406[(2)] = null);

(statearr_51426_52406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (16))){
var inst_51348 = (state_51393[(10)]);
var inst_51352 = cljs.core.chunk_first(inst_51348);
var inst_51353 = cljs.core.chunk_rest(inst_51348);
var inst_51354 = cljs.core.count(inst_51352);
var inst_51334 = inst_51353;
var inst_51335 = inst_51352;
var inst_51336 = inst_51354;
var inst_51337 = (0);
var state_51393__$1 = (function (){var statearr_51427 = state_51393;
(statearr_51427[(13)] = inst_51334);

(statearr_51427[(14)] = inst_51335);

(statearr_51427[(15)] = inst_51336);

(statearr_51427[(16)] = inst_51337);

return statearr_51427;
})();
var statearr_51428_52407 = state_51393__$1;
(statearr_51428_52407[(2)] = null);

(statearr_51428_52407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (10))){
var inst_51335 = (state_51393[(14)]);
var inst_51337 = (state_51393[(16)]);
var inst_51334 = (state_51393[(13)]);
var inst_51336 = (state_51393[(15)]);
var inst_51342 = cljs.core._nth(inst_51335,inst_51337);
var inst_51343 = cljs.core.async.muxch_STAR_(inst_51342);
var inst_51344 = cljs.core.async.close_BANG_(inst_51343);
var inst_51345 = (inst_51337 + (1));
var tmp51423 = inst_51336;
var tmp51424 = inst_51334;
var tmp51425 = inst_51335;
var inst_51334__$1 = tmp51424;
var inst_51335__$1 = tmp51425;
var inst_51336__$1 = tmp51423;
var inst_51337__$1 = inst_51345;
var state_51393__$1 = (function (){var statearr_51429 = state_51393;
(statearr_51429[(17)] = inst_51344);

(statearr_51429[(13)] = inst_51334__$1);

(statearr_51429[(14)] = inst_51335__$1);

(statearr_51429[(15)] = inst_51336__$1);

(statearr_51429[(16)] = inst_51337__$1);

return statearr_51429;
})();
var statearr_51430_52408 = state_51393__$1;
(statearr_51430_52408[(2)] = null);

(statearr_51430_52408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (18))){
var inst_51363 = (state_51393[(2)]);
var state_51393__$1 = state_51393;
var statearr_51431_52409 = state_51393__$1;
(statearr_51431_52409[(2)] = inst_51363);

(statearr_51431_52409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51394 === (8))){
var inst_51337 = (state_51393[(16)]);
var inst_51336 = (state_51393[(15)]);
var inst_51339 = (inst_51337 < inst_51336);
var inst_51340 = inst_51339;
var state_51393__$1 = state_51393;
if(cljs.core.truth_(inst_51340)){
var statearr_51432_52410 = state_51393__$1;
(statearr_51432_52410[(1)] = (10));

} else {
var statearr_51433_52411 = state_51393__$1;
(statearr_51433_52411[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__50431__auto__ = null;
var cljs$core$async$state_machine__50431__auto____0 = (function (){
var statearr_51434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51434[(0)] = cljs$core$async$state_machine__50431__auto__);

(statearr_51434[(1)] = (1));

return statearr_51434;
});
var cljs$core$async$state_machine__50431__auto____1 = (function (state_51393){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_51393);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e51435){var ex__50434__auto__ = e51435;
var statearr_51436_52412 = state_51393;
(statearr_51436_52412[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_51393[(4)]))){
var statearr_51437_52413 = state_51393;
(statearr_51437_52413[(1)] = cljs.core.first((state_51393[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52414 = state_51393;
state_51393 = G__52414;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$state_machine__50431__auto__ = function(state_51393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50431__auto____1.call(this,state_51393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50431__auto____0;
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50431__auto____1;
return cljs$core$async$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_51438 = f__50502__auto__();
(statearr_51438[(6)] = c__50501__auto___52383);

return statearr_51438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51440 = arguments.length;
switch (G__51440) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51442 = arguments.length;
switch (G__51442) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51444 = arguments.length;
switch (G__51444) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__50501__auto___52418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_51487){
var state_val_51488 = (state_51487[(1)]);
if((state_val_51488 === (7))){
var state_51487__$1 = state_51487;
var statearr_51489_52419 = state_51487__$1;
(statearr_51489_52419[(2)] = null);

(statearr_51489_52419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (1))){
var state_51487__$1 = state_51487;
var statearr_51490_52420 = state_51487__$1;
(statearr_51490_52420[(2)] = null);

(statearr_51490_52420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (4))){
var inst_51448 = (state_51487[(7)]);
var inst_51447 = (state_51487[(8)]);
var inst_51450 = (inst_51448 < inst_51447);
var state_51487__$1 = state_51487;
if(cljs.core.truth_(inst_51450)){
var statearr_51491_52421 = state_51487__$1;
(statearr_51491_52421[(1)] = (6));

} else {
var statearr_51492_52422 = state_51487__$1;
(statearr_51492_52422[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (15))){
var inst_51473 = (state_51487[(9)]);
var inst_51478 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51473);
var state_51487__$1 = state_51487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51487__$1,(17),out,inst_51478);
} else {
if((state_val_51488 === (13))){
var inst_51473 = (state_51487[(9)]);
var inst_51473__$1 = (state_51487[(2)]);
var inst_51474 = cljs.core.some(cljs.core.nil_QMARK_,inst_51473__$1);
var state_51487__$1 = (function (){var statearr_51493 = state_51487;
(statearr_51493[(9)] = inst_51473__$1);

return statearr_51493;
})();
if(cljs.core.truth_(inst_51474)){
var statearr_51494_52423 = state_51487__$1;
(statearr_51494_52423[(1)] = (14));

} else {
var statearr_51495_52424 = state_51487__$1;
(statearr_51495_52424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (6))){
var state_51487__$1 = state_51487;
var statearr_51496_52425 = state_51487__$1;
(statearr_51496_52425[(2)] = null);

(statearr_51496_52425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (17))){
var inst_51480 = (state_51487[(2)]);
var state_51487__$1 = (function (){var statearr_51498 = state_51487;
(statearr_51498[(10)] = inst_51480);

return statearr_51498;
})();
var statearr_51499_52426 = state_51487__$1;
(statearr_51499_52426[(2)] = null);

(statearr_51499_52426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (3))){
var inst_51485 = (state_51487[(2)]);
var state_51487__$1 = state_51487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51487__$1,inst_51485);
} else {
if((state_val_51488 === (12))){
var _ = (function (){var statearr_51500 = state_51487;
(statearr_51500[(4)] = cljs.core.rest((state_51487[(4)])));

return statearr_51500;
})();
var state_51487__$1 = state_51487;
var ex51497 = (state_51487__$1[(2)]);
var statearr_51501_52427 = state_51487__$1;
(statearr_51501_52427[(5)] = ex51497);


if((ex51497 instanceof Object)){
var statearr_51502_52428 = state_51487__$1;
(statearr_51502_52428[(1)] = (11));

(statearr_51502_52428[(5)] = null);

} else {
throw ex51497;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (2))){
var inst_51446 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51447 = cnt;
var inst_51448 = (0);
var state_51487__$1 = (function (){var statearr_51503 = state_51487;
(statearr_51503[(11)] = inst_51446);

(statearr_51503[(8)] = inst_51447);

(statearr_51503[(7)] = inst_51448);

return statearr_51503;
})();
var statearr_51504_52429 = state_51487__$1;
(statearr_51504_52429[(2)] = null);

(statearr_51504_52429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (11))){
var inst_51452 = (state_51487[(2)]);
var inst_51453 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51487__$1 = (function (){var statearr_51505 = state_51487;
(statearr_51505[(12)] = inst_51452);

return statearr_51505;
})();
var statearr_51506_52430 = state_51487__$1;
(statearr_51506_52430[(2)] = inst_51453);

(statearr_51506_52430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (9))){
var inst_51448 = (state_51487[(7)]);
var _ = (function (){var statearr_51507 = state_51487;
(statearr_51507[(4)] = cljs.core.cons((12),(state_51487[(4)])));

return statearr_51507;
})();
var inst_51459 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51448) : chs__$1.call(null,inst_51448));
var inst_51460 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51448) : done.call(null,inst_51448));
var inst_51461 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51459,inst_51460);
var ___$1 = (function (){var statearr_51508 = state_51487;
(statearr_51508[(4)] = cljs.core.rest((state_51487[(4)])));

return statearr_51508;
})();
var state_51487__$1 = state_51487;
var statearr_51509_52431 = state_51487__$1;
(statearr_51509_52431[(2)] = inst_51461);

(statearr_51509_52431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (5))){
var inst_51471 = (state_51487[(2)]);
var state_51487__$1 = (function (){var statearr_51510 = state_51487;
(statearr_51510[(13)] = inst_51471);

return statearr_51510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51487__$1,(13),dchan);
} else {
if((state_val_51488 === (14))){
var inst_51476 = cljs.core.async.close_BANG_(out);
var state_51487__$1 = state_51487;
var statearr_51511_52432 = state_51487__$1;
(statearr_51511_52432[(2)] = inst_51476);

(statearr_51511_52432[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (16))){
var inst_51483 = (state_51487[(2)]);
var state_51487__$1 = state_51487;
var statearr_51512_52433 = state_51487__$1;
(statearr_51512_52433[(2)] = inst_51483);

(statearr_51512_52433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (10))){
var inst_51448 = (state_51487[(7)]);
var inst_51464 = (state_51487[(2)]);
var inst_51465 = (inst_51448 + (1));
var inst_51448__$1 = inst_51465;
var state_51487__$1 = (function (){var statearr_51513 = state_51487;
(statearr_51513[(14)] = inst_51464);

(statearr_51513[(7)] = inst_51448__$1);

return statearr_51513;
})();
var statearr_51514_52434 = state_51487__$1;
(statearr_51514_52434[(2)] = null);

(statearr_51514_52434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51488 === (8))){
var inst_51469 = (state_51487[(2)]);
var state_51487__$1 = state_51487;
var statearr_51515_52435 = state_51487__$1;
(statearr_51515_52435[(2)] = inst_51469);

(statearr_51515_52435[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__50431__auto__ = null;
var cljs$core$async$state_machine__50431__auto____0 = (function (){
var statearr_51516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51516[(0)] = cljs$core$async$state_machine__50431__auto__);

(statearr_51516[(1)] = (1));

return statearr_51516;
});
var cljs$core$async$state_machine__50431__auto____1 = (function (state_51487){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_51487);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e51517){var ex__50434__auto__ = e51517;
var statearr_51518_52436 = state_51487;
(statearr_51518_52436[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_51487[(4)]))){
var statearr_51519_52437 = state_51487;
(statearr_51519_52437[(1)] = cljs.core.first((state_51487[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52438 = state_51487;
state_51487 = G__52438;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$state_machine__50431__auto__ = function(state_51487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50431__auto____1.call(this,state_51487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50431__auto____0;
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50431__auto____1;
return cljs$core$async$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_51520 = f__50502__auto__();
(statearr_51520[(6)] = c__50501__auto___52418);

return statearr_51520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51523 = arguments.length;
switch (G__51523) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50501__auto___52440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_51555){
var state_val_51556 = (state_51555[(1)]);
if((state_val_51556 === (7))){
var inst_51534 = (state_51555[(7)]);
var inst_51535 = (state_51555[(8)]);
var inst_51534__$1 = (state_51555[(2)]);
var inst_51535__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51534__$1,(0),null);
var inst_51536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51534__$1,(1),null);
var inst_51537 = (inst_51535__$1 == null);
var state_51555__$1 = (function (){var statearr_51557 = state_51555;
(statearr_51557[(7)] = inst_51534__$1);

(statearr_51557[(8)] = inst_51535__$1);

(statearr_51557[(9)] = inst_51536);

return statearr_51557;
})();
if(cljs.core.truth_(inst_51537)){
var statearr_51558_52441 = state_51555__$1;
(statearr_51558_52441[(1)] = (8));

} else {
var statearr_51559_52442 = state_51555__$1;
(statearr_51559_52442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51556 === (1))){
var inst_51524 = cljs.core.vec(chs);
var inst_51525 = inst_51524;
var state_51555__$1 = (function (){var statearr_51560 = state_51555;
(statearr_51560[(10)] = inst_51525);

return statearr_51560;
})();
var statearr_51561_52443 = state_51555__$1;
(statearr_51561_52443[(2)] = null);

(statearr_51561_52443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51556 === (4))){
var inst_51525 = (state_51555[(10)]);
var state_51555__$1 = state_51555;
return cljs.core.async.ioc_alts_BANG_(state_51555__$1,(7),inst_51525);
} else {
if((state_val_51556 === (6))){
var inst_51551 = (state_51555[(2)]);
var state_51555__$1 = state_51555;
var statearr_51562_52444 = state_51555__$1;
(statearr_51562_52444[(2)] = inst_51551);

(statearr_51562_52444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51556 === (3))){
var inst_51553 = (state_51555[(2)]);
var state_51555__$1 = state_51555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51555__$1,inst_51553);
} else {
if((state_val_51556 === (2))){
var inst_51525 = (state_51555[(10)]);
var inst_51527 = cljs.core.count(inst_51525);
var inst_51528 = (inst_51527 > (0));
var state_51555__$1 = state_51555;
if(cljs.core.truth_(inst_51528)){
var statearr_51564_52445 = state_51555__$1;
(statearr_51564_52445[(1)] = (4));

} else {
var statearr_51565_52446 = state_51555__$1;
(statearr_51565_52446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51556 === (11))){
var inst_51525 = (state_51555[(10)]);
var inst_51544 = (state_51555[(2)]);
var tmp51563 = inst_51525;
var inst_51525__$1 = tmp51563;
var state_51555__$1 = (function (){var statearr_51566 = state_51555;
(statearr_51566[(11)] = inst_51544);

(statearr_51566[(10)] = inst_51525__$1);

return statearr_51566;
})();
var statearr_51567_52447 = state_51555__$1;
(statearr_51567_52447[(2)] = null);

(statearr_51567_52447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51556 === (9))){
var inst_51535 = (state_51555[(8)]);
var state_51555__$1 = state_51555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51555__$1,(11),out,inst_51535);
} else {
if((state_val_51556 === (5))){
var inst_51549 = cljs.core.async.close_BANG_(out);
var state_51555__$1 = state_51555;
var statearr_51568_52448 = state_51555__$1;
(statearr_51568_52448[(2)] = inst_51549);

(statearr_51568_52448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51556 === (10))){
var inst_51547 = (state_51555[(2)]);
var state_51555__$1 = state_51555;
var statearr_51569_52449 = state_51555__$1;
(statearr_51569_52449[(2)] = inst_51547);

(statearr_51569_52449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51556 === (8))){
var inst_51525 = (state_51555[(10)]);
var inst_51534 = (state_51555[(7)]);
var inst_51535 = (state_51555[(8)]);
var inst_51536 = (state_51555[(9)]);
var inst_51539 = (function (){var cs = inst_51525;
var vec__51530 = inst_51534;
var v = inst_51535;
var c = inst_51536;
return (function (p1__51521_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51521_SHARP_);
});
})();
var inst_51540 = cljs.core.filterv(inst_51539,inst_51525);
var inst_51525__$1 = inst_51540;
var state_51555__$1 = (function (){var statearr_51570 = state_51555;
(statearr_51570[(10)] = inst_51525__$1);

return statearr_51570;
})();
var statearr_51571_52450 = state_51555__$1;
(statearr_51571_52450[(2)] = null);

(statearr_51571_52450[(1)] = (2));


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
var cljs$core$async$state_machine__50431__auto__ = null;
var cljs$core$async$state_machine__50431__auto____0 = (function (){
var statearr_51572 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51572[(0)] = cljs$core$async$state_machine__50431__auto__);

(statearr_51572[(1)] = (1));

return statearr_51572;
});
var cljs$core$async$state_machine__50431__auto____1 = (function (state_51555){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_51555);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e51573){var ex__50434__auto__ = e51573;
var statearr_51574_52451 = state_51555;
(statearr_51574_52451[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_51555[(4)]))){
var statearr_51575_52452 = state_51555;
(statearr_51575_52452[(1)] = cljs.core.first((state_51555[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52453 = state_51555;
state_51555 = G__52453;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$state_machine__50431__auto__ = function(state_51555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50431__auto____1.call(this,state_51555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50431__auto____0;
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50431__auto____1;
return cljs$core$async$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_51576 = f__50502__auto__();
(statearr_51576[(6)] = c__50501__auto___52440);

return statearr_51576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51578 = arguments.length;
switch (G__51578) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50501__auto___52455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_51602){
var state_val_51603 = (state_51602[(1)]);
if((state_val_51603 === (7))){
var inst_51584 = (state_51602[(7)]);
var inst_51584__$1 = (state_51602[(2)]);
var inst_51585 = (inst_51584__$1 == null);
var inst_51586 = cljs.core.not(inst_51585);
var state_51602__$1 = (function (){var statearr_51604 = state_51602;
(statearr_51604[(7)] = inst_51584__$1);

return statearr_51604;
})();
if(inst_51586){
var statearr_51605_52456 = state_51602__$1;
(statearr_51605_52456[(1)] = (8));

} else {
var statearr_51606_52457 = state_51602__$1;
(statearr_51606_52457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51603 === (1))){
var inst_51579 = (0);
var state_51602__$1 = (function (){var statearr_51607 = state_51602;
(statearr_51607[(8)] = inst_51579);

return statearr_51607;
})();
var statearr_51608_52458 = state_51602__$1;
(statearr_51608_52458[(2)] = null);

(statearr_51608_52458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51603 === (4))){
var state_51602__$1 = state_51602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51602__$1,(7),ch);
} else {
if((state_val_51603 === (6))){
var inst_51597 = (state_51602[(2)]);
var state_51602__$1 = state_51602;
var statearr_51609_52459 = state_51602__$1;
(statearr_51609_52459[(2)] = inst_51597);

(statearr_51609_52459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51603 === (3))){
var inst_51599 = (state_51602[(2)]);
var inst_51600 = cljs.core.async.close_BANG_(out);
var state_51602__$1 = (function (){var statearr_51610 = state_51602;
(statearr_51610[(9)] = inst_51599);

return statearr_51610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51602__$1,inst_51600);
} else {
if((state_val_51603 === (2))){
var inst_51579 = (state_51602[(8)]);
var inst_51581 = (inst_51579 < n);
var state_51602__$1 = state_51602;
if(cljs.core.truth_(inst_51581)){
var statearr_51611_52460 = state_51602__$1;
(statearr_51611_52460[(1)] = (4));

} else {
var statearr_51612_52461 = state_51602__$1;
(statearr_51612_52461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51603 === (11))){
var inst_51579 = (state_51602[(8)]);
var inst_51589 = (state_51602[(2)]);
var inst_51590 = (inst_51579 + (1));
var inst_51579__$1 = inst_51590;
var state_51602__$1 = (function (){var statearr_51613 = state_51602;
(statearr_51613[(10)] = inst_51589);

(statearr_51613[(8)] = inst_51579__$1);

return statearr_51613;
})();
var statearr_51614_52462 = state_51602__$1;
(statearr_51614_52462[(2)] = null);

(statearr_51614_52462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51603 === (9))){
var state_51602__$1 = state_51602;
var statearr_51615_52463 = state_51602__$1;
(statearr_51615_52463[(2)] = null);

(statearr_51615_52463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51603 === (5))){
var state_51602__$1 = state_51602;
var statearr_51616_52464 = state_51602__$1;
(statearr_51616_52464[(2)] = null);

(statearr_51616_52464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51603 === (10))){
var inst_51594 = (state_51602[(2)]);
var state_51602__$1 = state_51602;
var statearr_51617_52465 = state_51602__$1;
(statearr_51617_52465[(2)] = inst_51594);

(statearr_51617_52465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51603 === (8))){
var inst_51584 = (state_51602[(7)]);
var state_51602__$1 = state_51602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51602__$1,(11),out,inst_51584);
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
var cljs$core$async$state_machine__50431__auto__ = null;
var cljs$core$async$state_machine__50431__auto____0 = (function (){
var statearr_51618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51618[(0)] = cljs$core$async$state_machine__50431__auto__);

(statearr_51618[(1)] = (1));

return statearr_51618;
});
var cljs$core$async$state_machine__50431__auto____1 = (function (state_51602){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_51602);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e51619){var ex__50434__auto__ = e51619;
var statearr_51620_52466 = state_51602;
(statearr_51620_52466[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_51602[(4)]))){
var statearr_51621_52467 = state_51602;
(statearr_51621_52467[(1)] = cljs.core.first((state_51602[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52468 = state_51602;
state_51602 = G__52468;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$state_machine__50431__auto__ = function(state_51602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50431__auto____1.call(this,state_51602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50431__auto____0;
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50431__auto____1;
return cljs$core$async$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_51622 = f__50502__auto__();
(statearr_51622[(6)] = c__50501__auto___52455);

return statearr_51622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51627 = (function (f,ch,meta51625,_,fn1,meta51628){
this.f = f;
this.ch = ch;
this.meta51625 = meta51625;
this._ = _;
this.fn1 = fn1;
this.meta51628 = meta51628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51629,meta51628__$1){
var self__ = this;
var _51629__$1 = this;
return (new cljs.core.async.t_cljs$core$async51627(self__.f,self__.ch,self__.meta51625,self__._,self__.fn1,meta51628__$1));
}));

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51629){
var self__ = this;
var _51629__$1 = this;
return self__.meta51628;
}));

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51623_SHARP_){
var G__51630 = (((p1__51623_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51623_SHARP_) : self__.f.call(null,p1__51623_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51630) : f1.call(null,G__51630));
});
}));

(cljs.core.async.t_cljs$core$async51627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51625","meta51625",-2019271482,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51624","cljs.core.async/t_cljs$core$async51624",-314347086,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51628","meta51628",-1047825377,null)], null);
}));

(cljs.core.async.t_cljs$core$async51627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51627");

(cljs.core.async.t_cljs$core$async51627.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async51627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51627.
 */
cljs.core.async.__GT_t_cljs$core$async51627 = (function cljs$core$async$__GT_t_cljs$core$async51627(f,ch,meta51625,_,fn1,meta51628){
return (new cljs.core.async.t_cljs$core$async51627(f,ch,meta51625,_,fn1,meta51628));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51624 = (function (f,ch,meta51625){
this.f = f;
this.ch = ch;
this.meta51625 = meta51625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51626,meta51625__$1){
var self__ = this;
var _51626__$1 = this;
return (new cljs.core.async.t_cljs$core$async51624(self__.f,self__.ch,meta51625__$1));
}));

(cljs.core.async.t_cljs$core$async51624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51626){
var self__ = this;
var _51626__$1 = this;
return self__.meta51625;
}));

(cljs.core.async.t_cljs$core$async51624.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51624.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51624.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async51627(self__.f,self__.ch,self__.meta51625,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51631 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51631) : self__.f.call(null,G__51631));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51624.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51625","meta51625",-2019271482,null)], null);
}));

(cljs.core.async.t_cljs$core$async51624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51624");

(cljs.core.async.t_cljs$core$async51624.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async51624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51624.
 */
cljs.core.async.__GT_t_cljs$core$async51624 = (function cljs$core$async$__GT_t_cljs$core$async51624(f,ch,meta51625){
return (new cljs.core.async.t_cljs$core$async51624(f,ch,meta51625));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async51624(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51632 = (function (f,ch,meta51633){
this.f = f;
this.ch = ch;
this.meta51633 = meta51633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51634,meta51633__$1){
var self__ = this;
var _51634__$1 = this;
return (new cljs.core.async.t_cljs$core$async51632(self__.f,self__.ch,meta51633__$1));
}));

(cljs.core.async.t_cljs$core$async51632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51634){
var self__ = this;
var _51634__$1 = this;
return self__.meta51633;
}));

(cljs.core.async.t_cljs$core$async51632.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51632.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51632.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51632.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51632.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51632.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51633","meta51633",1719985358,null)], null);
}));

(cljs.core.async.t_cljs$core$async51632.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51632");

(cljs.core.async.t_cljs$core$async51632.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async51632");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51632.
 */
cljs.core.async.__GT_t_cljs$core$async51632 = (function cljs$core$async$__GT_t_cljs$core$async51632(f,ch,meta51633){
return (new cljs.core.async.t_cljs$core$async51632(f,ch,meta51633));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async51632(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51635 = (function (p,ch,meta51636){
this.p = p;
this.ch = ch;
this.meta51636 = meta51636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51637,meta51636__$1){
var self__ = this;
var _51637__$1 = this;
return (new cljs.core.async.t_cljs$core$async51635(self__.p,self__.ch,meta51636__$1));
}));

(cljs.core.async.t_cljs$core$async51635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51637){
var self__ = this;
var _51637__$1 = this;
return self__.meta51636;
}));

(cljs.core.async.t_cljs$core$async51635.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51635.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51635.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51635.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51636","meta51636",-1045021733,null)], null);
}));

(cljs.core.async.t_cljs$core$async51635.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51635");

(cljs.core.async.t_cljs$core$async51635.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async51635");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51635.
 */
cljs.core.async.__GT_t_cljs$core$async51635 = (function cljs$core$async$__GT_t_cljs$core$async51635(p,ch,meta51636){
return (new cljs.core.async.t_cljs$core$async51635(p,ch,meta51636));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async51635(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__51639 = arguments.length;
switch (G__51639) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50501__auto___52470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_51660){
var state_val_51661 = (state_51660[(1)]);
if((state_val_51661 === (7))){
var inst_51656 = (state_51660[(2)]);
var state_51660__$1 = state_51660;
var statearr_51662_52471 = state_51660__$1;
(statearr_51662_52471[(2)] = inst_51656);

(statearr_51662_52471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51661 === (1))){
var state_51660__$1 = state_51660;
var statearr_51663_52472 = state_51660__$1;
(statearr_51663_52472[(2)] = null);

(statearr_51663_52472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51661 === (4))){
var inst_51642 = (state_51660[(7)]);
var inst_51642__$1 = (state_51660[(2)]);
var inst_51643 = (inst_51642__$1 == null);
var state_51660__$1 = (function (){var statearr_51664 = state_51660;
(statearr_51664[(7)] = inst_51642__$1);

return statearr_51664;
})();
if(cljs.core.truth_(inst_51643)){
var statearr_51665_52473 = state_51660__$1;
(statearr_51665_52473[(1)] = (5));

} else {
var statearr_51666_52474 = state_51660__$1;
(statearr_51666_52474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51661 === (6))){
var inst_51642 = (state_51660[(7)]);
var inst_51647 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51642) : p.call(null,inst_51642));
var state_51660__$1 = state_51660;
if(cljs.core.truth_(inst_51647)){
var statearr_51667_52475 = state_51660__$1;
(statearr_51667_52475[(1)] = (8));

} else {
var statearr_51668_52476 = state_51660__$1;
(statearr_51668_52476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51661 === (3))){
var inst_51658 = (state_51660[(2)]);
var state_51660__$1 = state_51660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51660__$1,inst_51658);
} else {
if((state_val_51661 === (2))){
var state_51660__$1 = state_51660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51660__$1,(4),ch);
} else {
if((state_val_51661 === (11))){
var inst_51650 = (state_51660[(2)]);
var state_51660__$1 = state_51660;
var statearr_51669_52477 = state_51660__$1;
(statearr_51669_52477[(2)] = inst_51650);

(statearr_51669_52477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51661 === (9))){
var state_51660__$1 = state_51660;
var statearr_51670_52478 = state_51660__$1;
(statearr_51670_52478[(2)] = null);

(statearr_51670_52478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51661 === (5))){
var inst_51645 = cljs.core.async.close_BANG_(out);
var state_51660__$1 = state_51660;
var statearr_51671_52479 = state_51660__$1;
(statearr_51671_52479[(2)] = inst_51645);

(statearr_51671_52479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51661 === (10))){
var inst_51653 = (state_51660[(2)]);
var state_51660__$1 = (function (){var statearr_51672 = state_51660;
(statearr_51672[(8)] = inst_51653);

return statearr_51672;
})();
var statearr_51673_52480 = state_51660__$1;
(statearr_51673_52480[(2)] = null);

(statearr_51673_52480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51661 === (8))){
var inst_51642 = (state_51660[(7)]);
var state_51660__$1 = state_51660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51660__$1,(11),out,inst_51642);
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
var cljs$core$async$state_machine__50431__auto__ = null;
var cljs$core$async$state_machine__50431__auto____0 = (function (){
var statearr_51674 = [null,null,null,null,null,null,null,null,null];
(statearr_51674[(0)] = cljs$core$async$state_machine__50431__auto__);

(statearr_51674[(1)] = (1));

return statearr_51674;
});
var cljs$core$async$state_machine__50431__auto____1 = (function (state_51660){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_51660);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e51675){var ex__50434__auto__ = e51675;
var statearr_51676_52481 = state_51660;
(statearr_51676_52481[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_51660[(4)]))){
var statearr_51677_52482 = state_51660;
(statearr_51677_52482[(1)] = cljs.core.first((state_51660[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52483 = state_51660;
state_51660 = G__52483;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$state_machine__50431__auto__ = function(state_51660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50431__auto____1.call(this,state_51660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50431__auto____0;
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50431__auto____1;
return cljs$core$async$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_51678 = f__50502__auto__();
(statearr_51678[(6)] = c__50501__auto___52470);

return statearr_51678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51680 = arguments.length;
switch (G__51680) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_51742){
var state_val_51743 = (state_51742[(1)]);
if((state_val_51743 === (7))){
var inst_51738 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51744_52485 = state_51742__$1;
(statearr_51744_52485[(2)] = inst_51738);

(statearr_51744_52485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (20))){
var inst_51708 = (state_51742[(7)]);
var inst_51719 = (state_51742[(2)]);
var inst_51720 = cljs.core.next(inst_51708);
var inst_51694 = inst_51720;
var inst_51695 = null;
var inst_51696 = (0);
var inst_51697 = (0);
var state_51742__$1 = (function (){var statearr_51745 = state_51742;
(statearr_51745[(8)] = inst_51719);

(statearr_51745[(9)] = inst_51694);

(statearr_51745[(10)] = inst_51695);

(statearr_51745[(11)] = inst_51696);

(statearr_51745[(12)] = inst_51697);

return statearr_51745;
})();
var statearr_51746_52486 = state_51742__$1;
(statearr_51746_52486[(2)] = null);

(statearr_51746_52486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (1))){
var state_51742__$1 = state_51742;
var statearr_51747_52487 = state_51742__$1;
(statearr_51747_52487[(2)] = null);

(statearr_51747_52487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (4))){
var inst_51683 = (state_51742[(13)]);
var inst_51683__$1 = (state_51742[(2)]);
var inst_51684 = (inst_51683__$1 == null);
var state_51742__$1 = (function (){var statearr_51748 = state_51742;
(statearr_51748[(13)] = inst_51683__$1);

return statearr_51748;
})();
if(cljs.core.truth_(inst_51684)){
var statearr_51749_52488 = state_51742__$1;
(statearr_51749_52488[(1)] = (5));

} else {
var statearr_51750_52489 = state_51742__$1;
(statearr_51750_52489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (15))){
var state_51742__$1 = state_51742;
var statearr_51754_52490 = state_51742__$1;
(statearr_51754_52490[(2)] = null);

(statearr_51754_52490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (21))){
var state_51742__$1 = state_51742;
var statearr_51755_52491 = state_51742__$1;
(statearr_51755_52491[(2)] = null);

(statearr_51755_52491[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (13))){
var inst_51697 = (state_51742[(12)]);
var inst_51694 = (state_51742[(9)]);
var inst_51695 = (state_51742[(10)]);
var inst_51696 = (state_51742[(11)]);
var inst_51704 = (state_51742[(2)]);
var inst_51705 = (inst_51697 + (1));
var tmp51751 = inst_51696;
var tmp51752 = inst_51695;
var tmp51753 = inst_51694;
var inst_51694__$1 = tmp51753;
var inst_51695__$1 = tmp51752;
var inst_51696__$1 = tmp51751;
var inst_51697__$1 = inst_51705;
var state_51742__$1 = (function (){var statearr_51756 = state_51742;
(statearr_51756[(14)] = inst_51704);

(statearr_51756[(9)] = inst_51694__$1);

(statearr_51756[(10)] = inst_51695__$1);

(statearr_51756[(11)] = inst_51696__$1);

(statearr_51756[(12)] = inst_51697__$1);

return statearr_51756;
})();
var statearr_51757_52492 = state_51742__$1;
(statearr_51757_52492[(2)] = null);

(statearr_51757_52492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (22))){
var state_51742__$1 = state_51742;
var statearr_51758_52493 = state_51742__$1;
(statearr_51758_52493[(2)] = null);

(statearr_51758_52493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (6))){
var inst_51683 = (state_51742[(13)]);
var inst_51692 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51683) : f.call(null,inst_51683));
var inst_51693 = cljs.core.seq(inst_51692);
var inst_51694 = inst_51693;
var inst_51695 = null;
var inst_51696 = (0);
var inst_51697 = (0);
var state_51742__$1 = (function (){var statearr_51759 = state_51742;
(statearr_51759[(9)] = inst_51694);

(statearr_51759[(10)] = inst_51695);

(statearr_51759[(11)] = inst_51696);

(statearr_51759[(12)] = inst_51697);

return statearr_51759;
})();
var statearr_51760_52494 = state_51742__$1;
(statearr_51760_52494[(2)] = null);

(statearr_51760_52494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (17))){
var inst_51708 = (state_51742[(7)]);
var inst_51712 = cljs.core.chunk_first(inst_51708);
var inst_51713 = cljs.core.chunk_rest(inst_51708);
var inst_51714 = cljs.core.count(inst_51712);
var inst_51694 = inst_51713;
var inst_51695 = inst_51712;
var inst_51696 = inst_51714;
var inst_51697 = (0);
var state_51742__$1 = (function (){var statearr_51761 = state_51742;
(statearr_51761[(9)] = inst_51694);

(statearr_51761[(10)] = inst_51695);

(statearr_51761[(11)] = inst_51696);

(statearr_51761[(12)] = inst_51697);

return statearr_51761;
})();
var statearr_51762_52495 = state_51742__$1;
(statearr_51762_52495[(2)] = null);

(statearr_51762_52495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (3))){
var inst_51740 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51742__$1,inst_51740);
} else {
if((state_val_51743 === (12))){
var inst_51728 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51763_52496 = state_51742__$1;
(statearr_51763_52496[(2)] = inst_51728);

(statearr_51763_52496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (2))){
var state_51742__$1 = state_51742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51742__$1,(4),in$);
} else {
if((state_val_51743 === (23))){
var inst_51736 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51764_52497 = state_51742__$1;
(statearr_51764_52497[(2)] = inst_51736);

(statearr_51764_52497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (19))){
var inst_51723 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51765_52498 = state_51742__$1;
(statearr_51765_52498[(2)] = inst_51723);

(statearr_51765_52498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (11))){
var inst_51694 = (state_51742[(9)]);
var inst_51708 = (state_51742[(7)]);
var inst_51708__$1 = cljs.core.seq(inst_51694);
var state_51742__$1 = (function (){var statearr_51766 = state_51742;
(statearr_51766[(7)] = inst_51708__$1);

return statearr_51766;
})();
if(inst_51708__$1){
var statearr_51767_52500 = state_51742__$1;
(statearr_51767_52500[(1)] = (14));

} else {
var statearr_51768_52501 = state_51742__$1;
(statearr_51768_52501[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (9))){
var inst_51730 = (state_51742[(2)]);
var inst_51731 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51742__$1 = (function (){var statearr_51769 = state_51742;
(statearr_51769[(15)] = inst_51730);

return statearr_51769;
})();
if(cljs.core.truth_(inst_51731)){
var statearr_51770_52502 = state_51742__$1;
(statearr_51770_52502[(1)] = (21));

} else {
var statearr_51771_52503 = state_51742__$1;
(statearr_51771_52503[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (5))){
var inst_51686 = cljs.core.async.close_BANG_(out);
var state_51742__$1 = state_51742;
var statearr_51772_52504 = state_51742__$1;
(statearr_51772_52504[(2)] = inst_51686);

(statearr_51772_52504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (14))){
var inst_51708 = (state_51742[(7)]);
var inst_51710 = cljs.core.chunked_seq_QMARK_(inst_51708);
var state_51742__$1 = state_51742;
if(inst_51710){
var statearr_51773_52505 = state_51742__$1;
(statearr_51773_52505[(1)] = (17));

} else {
var statearr_51774_52506 = state_51742__$1;
(statearr_51774_52506[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (16))){
var inst_51726 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51775_52507 = state_51742__$1;
(statearr_51775_52507[(2)] = inst_51726);

(statearr_51775_52507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (10))){
var inst_51695 = (state_51742[(10)]);
var inst_51697 = (state_51742[(12)]);
var inst_51702 = cljs.core._nth(inst_51695,inst_51697);
var state_51742__$1 = state_51742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51742__$1,(13),out,inst_51702);
} else {
if((state_val_51743 === (18))){
var inst_51708 = (state_51742[(7)]);
var inst_51717 = cljs.core.first(inst_51708);
var state_51742__$1 = state_51742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51742__$1,(20),out,inst_51717);
} else {
if((state_val_51743 === (8))){
var inst_51697 = (state_51742[(12)]);
var inst_51696 = (state_51742[(11)]);
var inst_51699 = (inst_51697 < inst_51696);
var inst_51700 = inst_51699;
var state_51742__$1 = state_51742;
if(cljs.core.truth_(inst_51700)){
var statearr_51776_52508 = state_51742__$1;
(statearr_51776_52508[(1)] = (10));

} else {
var statearr_51777_52509 = state_51742__$1;
(statearr_51777_52509[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50431__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50431__auto____0 = (function (){
var statearr_51778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51778[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50431__auto__);

(statearr_51778[(1)] = (1));

return statearr_51778;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50431__auto____1 = (function (state_51742){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_51742);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e51779){var ex__50434__auto__ = e51779;
var statearr_51780_52510 = state_51742;
(statearr_51780_52510[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_51742[(4)]))){
var statearr_51781_52511 = state_51742;
(statearr_51781_52511[(1)] = cljs.core.first((state_51742[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52512 = state_51742;
state_51742 = G__52512;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50431__auto__ = function(state_51742){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50431__auto____1.call(this,state_51742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50431__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50431__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_51782 = f__50502__auto__();
(statearr_51782[(6)] = c__50501__auto__);

return statearr_51782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));

return c__50501__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51784 = arguments.length;
switch (G__51784) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__51786 = arguments.length;
switch (G__51786) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__51788 = arguments.length;
switch (G__51788) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50501__auto___52516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_51812){
var state_val_51813 = (state_51812[(1)]);
if((state_val_51813 === (7))){
var inst_51807 = (state_51812[(2)]);
var state_51812__$1 = state_51812;
var statearr_51814_52517 = state_51812__$1;
(statearr_51814_52517[(2)] = inst_51807);

(statearr_51814_52517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (1))){
var inst_51789 = null;
var state_51812__$1 = (function (){var statearr_51815 = state_51812;
(statearr_51815[(7)] = inst_51789);

return statearr_51815;
})();
var statearr_51816_52522 = state_51812__$1;
(statearr_51816_52522[(2)] = null);

(statearr_51816_52522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (4))){
var inst_51792 = (state_51812[(8)]);
var inst_51792__$1 = (state_51812[(2)]);
var inst_51793 = (inst_51792__$1 == null);
var inst_51794 = cljs.core.not(inst_51793);
var state_51812__$1 = (function (){var statearr_51817 = state_51812;
(statearr_51817[(8)] = inst_51792__$1);

return statearr_51817;
})();
if(inst_51794){
var statearr_51818_52540 = state_51812__$1;
(statearr_51818_52540[(1)] = (5));

} else {
var statearr_51819_52542 = state_51812__$1;
(statearr_51819_52542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (6))){
var state_51812__$1 = state_51812;
var statearr_51820_52543 = state_51812__$1;
(statearr_51820_52543[(2)] = null);

(statearr_51820_52543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (3))){
var inst_51809 = (state_51812[(2)]);
var inst_51810 = cljs.core.async.close_BANG_(out);
var state_51812__$1 = (function (){var statearr_51821 = state_51812;
(statearr_51821[(9)] = inst_51809);

return statearr_51821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51812__$1,inst_51810);
} else {
if((state_val_51813 === (2))){
var state_51812__$1 = state_51812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51812__$1,(4),ch);
} else {
if((state_val_51813 === (11))){
var inst_51792 = (state_51812[(8)]);
var inst_51801 = (state_51812[(2)]);
var inst_51789 = inst_51792;
var state_51812__$1 = (function (){var statearr_51822 = state_51812;
(statearr_51822[(10)] = inst_51801);

(statearr_51822[(7)] = inst_51789);

return statearr_51822;
})();
var statearr_51823_52545 = state_51812__$1;
(statearr_51823_52545[(2)] = null);

(statearr_51823_52545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (9))){
var inst_51792 = (state_51812[(8)]);
var state_51812__$1 = state_51812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51812__$1,(11),out,inst_51792);
} else {
if((state_val_51813 === (5))){
var inst_51792 = (state_51812[(8)]);
var inst_51789 = (state_51812[(7)]);
var inst_51796 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51792,inst_51789);
var state_51812__$1 = state_51812;
if(inst_51796){
var statearr_51825_52551 = state_51812__$1;
(statearr_51825_52551[(1)] = (8));

} else {
var statearr_51826_52552 = state_51812__$1;
(statearr_51826_52552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (10))){
var inst_51804 = (state_51812[(2)]);
var state_51812__$1 = state_51812;
var statearr_51827_52553 = state_51812__$1;
(statearr_51827_52553[(2)] = inst_51804);

(statearr_51827_52553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51813 === (8))){
var inst_51789 = (state_51812[(7)]);
var tmp51824 = inst_51789;
var inst_51789__$1 = tmp51824;
var state_51812__$1 = (function (){var statearr_51828 = state_51812;
(statearr_51828[(7)] = inst_51789__$1);

return statearr_51828;
})();
var statearr_51829_52556 = state_51812__$1;
(statearr_51829_52556[(2)] = null);

(statearr_51829_52556[(1)] = (2));


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
var cljs$core$async$state_machine__50431__auto__ = null;
var cljs$core$async$state_machine__50431__auto____0 = (function (){
var statearr_51830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51830[(0)] = cljs$core$async$state_machine__50431__auto__);

(statearr_51830[(1)] = (1));

return statearr_51830;
});
var cljs$core$async$state_machine__50431__auto____1 = (function (state_51812){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_51812);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e51831){var ex__50434__auto__ = e51831;
var statearr_51832_52563 = state_51812;
(statearr_51832_52563[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_51812[(4)]))){
var statearr_51833_52569 = state_51812;
(statearr_51833_52569[(1)] = cljs.core.first((state_51812[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52570 = state_51812;
state_51812 = G__52570;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$state_machine__50431__auto__ = function(state_51812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50431__auto____1.call(this,state_51812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50431__auto____0;
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50431__auto____1;
return cljs$core$async$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_51834 = f__50502__auto__();
(statearr_51834[(6)] = c__50501__auto___52516);

return statearr_51834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51836 = arguments.length;
switch (G__51836) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50501__auto___52577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_51874){
var state_val_51875 = (state_51874[(1)]);
if((state_val_51875 === (7))){
var inst_51870 = (state_51874[(2)]);
var state_51874__$1 = state_51874;
var statearr_51876_52582 = state_51874__$1;
(statearr_51876_52582[(2)] = inst_51870);

(statearr_51876_52582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51875 === (1))){
var inst_51837 = (new Array(n));
var inst_51838 = inst_51837;
var inst_51839 = (0);
var state_51874__$1 = (function (){var statearr_51877 = state_51874;
(statearr_51877[(7)] = inst_51838);

(statearr_51877[(8)] = inst_51839);

return statearr_51877;
})();
var statearr_51878_52588 = state_51874__$1;
(statearr_51878_52588[(2)] = null);

(statearr_51878_52588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51875 === (4))){
var inst_51842 = (state_51874[(9)]);
var inst_51842__$1 = (state_51874[(2)]);
var inst_51843 = (inst_51842__$1 == null);
var inst_51844 = cljs.core.not(inst_51843);
var state_51874__$1 = (function (){var statearr_51879 = state_51874;
(statearr_51879[(9)] = inst_51842__$1);

return statearr_51879;
})();
if(inst_51844){
var statearr_51880_52596 = state_51874__$1;
(statearr_51880_52596[(1)] = (5));

} else {
var statearr_51881_52597 = state_51874__$1;
(statearr_51881_52597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51875 === (15))){
var inst_51864 = (state_51874[(2)]);
var state_51874__$1 = state_51874;
var statearr_51882_52598 = state_51874__$1;
(statearr_51882_52598[(2)] = inst_51864);

(statearr_51882_52598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51875 === (13))){
var state_51874__$1 = state_51874;
var statearr_51883_52599 = state_51874__$1;
(statearr_51883_52599[(2)] = null);

(statearr_51883_52599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51875 === (6))){
var inst_51839 = (state_51874[(8)]);
var inst_51860 = (inst_51839 > (0));
var state_51874__$1 = state_51874;
if(cljs.core.truth_(inst_51860)){
var statearr_51884_52629 = state_51874__$1;
(statearr_51884_52629[(1)] = (12));

} else {
var statearr_51885_52631 = state_51874__$1;
(statearr_51885_52631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51875 === (3))){
var inst_51872 = (state_51874[(2)]);
var state_51874__$1 = state_51874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51874__$1,inst_51872);
} else {
if((state_val_51875 === (12))){
var inst_51838 = (state_51874[(7)]);
var inst_51862 = cljs.core.vec(inst_51838);
var state_51874__$1 = state_51874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51874__$1,(15),out,inst_51862);
} else {
if((state_val_51875 === (2))){
var state_51874__$1 = state_51874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51874__$1,(4),ch);
} else {
if((state_val_51875 === (11))){
var inst_51854 = (state_51874[(2)]);
var inst_51855 = (new Array(n));
var inst_51838 = inst_51855;
var inst_51839 = (0);
var state_51874__$1 = (function (){var statearr_51886 = state_51874;
(statearr_51886[(10)] = inst_51854);

(statearr_51886[(7)] = inst_51838);

(statearr_51886[(8)] = inst_51839);

return statearr_51886;
})();
var statearr_51887_52632 = state_51874__$1;
(statearr_51887_52632[(2)] = null);

(statearr_51887_52632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51875 === (9))){
var inst_51838 = (state_51874[(7)]);
var inst_51852 = cljs.core.vec(inst_51838);
var state_51874__$1 = state_51874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51874__$1,(11),out,inst_51852);
} else {
if((state_val_51875 === (5))){
var inst_51838 = (state_51874[(7)]);
var inst_51839 = (state_51874[(8)]);
var inst_51842 = (state_51874[(9)]);
var inst_51847 = (state_51874[(11)]);
var inst_51846 = (inst_51838[inst_51839] = inst_51842);
var inst_51847__$1 = (inst_51839 + (1));
var inst_51848 = (inst_51847__$1 < n);
var state_51874__$1 = (function (){var statearr_51888 = state_51874;
(statearr_51888[(12)] = inst_51846);

(statearr_51888[(11)] = inst_51847__$1);

return statearr_51888;
})();
if(cljs.core.truth_(inst_51848)){
var statearr_51889_52645 = state_51874__$1;
(statearr_51889_52645[(1)] = (8));

} else {
var statearr_51890_52648 = state_51874__$1;
(statearr_51890_52648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51875 === (14))){
var inst_51867 = (state_51874[(2)]);
var inst_51868 = cljs.core.async.close_BANG_(out);
var state_51874__$1 = (function (){var statearr_51892 = state_51874;
(statearr_51892[(13)] = inst_51867);

return statearr_51892;
})();
var statearr_51893_52657 = state_51874__$1;
(statearr_51893_52657[(2)] = inst_51868);

(statearr_51893_52657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51875 === (10))){
var inst_51858 = (state_51874[(2)]);
var state_51874__$1 = state_51874;
var statearr_51894_52662 = state_51874__$1;
(statearr_51894_52662[(2)] = inst_51858);

(statearr_51894_52662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51875 === (8))){
var inst_51838 = (state_51874[(7)]);
var inst_51847 = (state_51874[(11)]);
var tmp51891 = inst_51838;
var inst_51838__$1 = tmp51891;
var inst_51839 = inst_51847;
var state_51874__$1 = (function (){var statearr_51895 = state_51874;
(statearr_51895[(7)] = inst_51838__$1);

(statearr_51895[(8)] = inst_51839);

return statearr_51895;
})();
var statearr_51896_52663 = state_51874__$1;
(statearr_51896_52663[(2)] = null);

(statearr_51896_52663[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__50431__auto__ = null;
var cljs$core$async$state_machine__50431__auto____0 = (function (){
var statearr_51897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51897[(0)] = cljs$core$async$state_machine__50431__auto__);

(statearr_51897[(1)] = (1));

return statearr_51897;
});
var cljs$core$async$state_machine__50431__auto____1 = (function (state_51874){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_51874);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e51898){var ex__50434__auto__ = e51898;
var statearr_51899_52669 = state_51874;
(statearr_51899_52669[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_51874[(4)]))){
var statearr_51900_52671 = state_51874;
(statearr_51900_52671[(1)] = cljs.core.first((state_51874[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52672 = state_51874;
state_51874 = G__52672;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$state_machine__50431__auto__ = function(state_51874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50431__auto____1.call(this,state_51874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50431__auto____0;
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50431__auto____1;
return cljs$core$async$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_51901 = f__50502__auto__();
(statearr_51901[(6)] = c__50501__auto___52577);

return statearr_51901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51903 = arguments.length;
switch (G__51903) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50501__auto___52677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_51948){
var state_val_51949 = (state_51948[(1)]);
if((state_val_51949 === (7))){
var inst_51944 = (state_51948[(2)]);
var state_51948__$1 = state_51948;
var statearr_51950_52678 = state_51948__$1;
(statearr_51950_52678[(2)] = inst_51944);

(statearr_51950_52678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (1))){
var inst_51904 = [];
var inst_51905 = inst_51904;
var inst_51906 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51948__$1 = (function (){var statearr_51951 = state_51948;
(statearr_51951[(7)] = inst_51905);

(statearr_51951[(8)] = inst_51906);

return statearr_51951;
})();
var statearr_51952_52679 = state_51948__$1;
(statearr_51952_52679[(2)] = null);

(statearr_51952_52679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (4))){
var inst_51909 = (state_51948[(9)]);
var inst_51909__$1 = (state_51948[(2)]);
var inst_51910 = (inst_51909__$1 == null);
var inst_51911 = cljs.core.not(inst_51910);
var state_51948__$1 = (function (){var statearr_51953 = state_51948;
(statearr_51953[(9)] = inst_51909__$1);

return statearr_51953;
})();
if(inst_51911){
var statearr_51954_52680 = state_51948__$1;
(statearr_51954_52680[(1)] = (5));

} else {
var statearr_51955_52681 = state_51948__$1;
(statearr_51955_52681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (15))){
var inst_51905 = (state_51948[(7)]);
var inst_51936 = cljs.core.vec(inst_51905);
var state_51948__$1 = state_51948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51948__$1,(18),out,inst_51936);
} else {
if((state_val_51949 === (13))){
var inst_51931 = (state_51948[(2)]);
var state_51948__$1 = state_51948;
var statearr_51956_52682 = state_51948__$1;
(statearr_51956_52682[(2)] = inst_51931);

(statearr_51956_52682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (6))){
var inst_51905 = (state_51948[(7)]);
var inst_51933 = inst_51905.length;
var inst_51934 = (inst_51933 > (0));
var state_51948__$1 = state_51948;
if(cljs.core.truth_(inst_51934)){
var statearr_51957_52684 = state_51948__$1;
(statearr_51957_52684[(1)] = (15));

} else {
var statearr_51958_52685 = state_51948__$1;
(statearr_51958_52685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (17))){
var inst_51941 = (state_51948[(2)]);
var inst_51942 = cljs.core.async.close_BANG_(out);
var state_51948__$1 = (function (){var statearr_51959 = state_51948;
(statearr_51959[(10)] = inst_51941);

return statearr_51959;
})();
var statearr_51960_52686 = state_51948__$1;
(statearr_51960_52686[(2)] = inst_51942);

(statearr_51960_52686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (3))){
var inst_51946 = (state_51948[(2)]);
var state_51948__$1 = state_51948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51948__$1,inst_51946);
} else {
if((state_val_51949 === (12))){
var inst_51905 = (state_51948[(7)]);
var inst_51924 = cljs.core.vec(inst_51905);
var state_51948__$1 = state_51948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51948__$1,(14),out,inst_51924);
} else {
if((state_val_51949 === (2))){
var state_51948__$1 = state_51948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51948__$1,(4),ch);
} else {
if((state_val_51949 === (11))){
var inst_51905 = (state_51948[(7)]);
var inst_51909 = (state_51948[(9)]);
var inst_51913 = (state_51948[(11)]);
var inst_51921 = inst_51905.push(inst_51909);
var tmp51961 = inst_51905;
var inst_51905__$1 = tmp51961;
var inst_51906 = inst_51913;
var state_51948__$1 = (function (){var statearr_51962 = state_51948;
(statearr_51962[(12)] = inst_51921);

(statearr_51962[(7)] = inst_51905__$1);

(statearr_51962[(8)] = inst_51906);

return statearr_51962;
})();
var statearr_51963_52687 = state_51948__$1;
(statearr_51963_52687[(2)] = null);

(statearr_51963_52687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (9))){
var inst_51906 = (state_51948[(8)]);
var inst_51917 = cljs.core.keyword_identical_QMARK_(inst_51906,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_51948__$1 = state_51948;
var statearr_51964_52688 = state_51948__$1;
(statearr_51964_52688[(2)] = inst_51917);

(statearr_51964_52688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (5))){
var inst_51909 = (state_51948[(9)]);
var inst_51913 = (state_51948[(11)]);
var inst_51906 = (state_51948[(8)]);
var inst_51914 = (state_51948[(13)]);
var inst_51913__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51909) : f.call(null,inst_51909));
var inst_51914__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51913__$1,inst_51906);
var state_51948__$1 = (function (){var statearr_51965 = state_51948;
(statearr_51965[(11)] = inst_51913__$1);

(statearr_51965[(13)] = inst_51914__$1);

return statearr_51965;
})();
if(inst_51914__$1){
var statearr_51966_52691 = state_51948__$1;
(statearr_51966_52691[(1)] = (8));

} else {
var statearr_51967_52695 = state_51948__$1;
(statearr_51967_52695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (14))){
var inst_51909 = (state_51948[(9)]);
var inst_51913 = (state_51948[(11)]);
var inst_51926 = (state_51948[(2)]);
var inst_51927 = [];
var inst_51928 = inst_51927.push(inst_51909);
var inst_51905 = inst_51927;
var inst_51906 = inst_51913;
var state_51948__$1 = (function (){var statearr_51968 = state_51948;
(statearr_51968[(14)] = inst_51926);

(statearr_51968[(15)] = inst_51928);

(statearr_51968[(7)] = inst_51905);

(statearr_51968[(8)] = inst_51906);

return statearr_51968;
})();
var statearr_51969_52703 = state_51948__$1;
(statearr_51969_52703[(2)] = null);

(statearr_51969_52703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (16))){
var state_51948__$1 = state_51948;
var statearr_51970_52704 = state_51948__$1;
(statearr_51970_52704[(2)] = null);

(statearr_51970_52704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (10))){
var inst_51919 = (state_51948[(2)]);
var state_51948__$1 = state_51948;
if(cljs.core.truth_(inst_51919)){
var statearr_51971_52705 = state_51948__$1;
(statearr_51971_52705[(1)] = (11));

} else {
var statearr_51972_52706 = state_51948__$1;
(statearr_51972_52706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (18))){
var inst_51938 = (state_51948[(2)]);
var state_51948__$1 = state_51948;
var statearr_51973_52707 = state_51948__$1;
(statearr_51973_52707[(2)] = inst_51938);

(statearr_51973_52707[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (8))){
var inst_51914 = (state_51948[(13)]);
var state_51948__$1 = state_51948;
var statearr_51974_52712 = state_51948__$1;
(statearr_51974_52712[(2)] = inst_51914);

(statearr_51974_52712[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__50431__auto__ = null;
var cljs$core$async$state_machine__50431__auto____0 = (function (){
var statearr_51975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51975[(0)] = cljs$core$async$state_machine__50431__auto__);

(statearr_51975[(1)] = (1));

return statearr_51975;
});
var cljs$core$async$state_machine__50431__auto____1 = (function (state_51948){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_51948);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e51976){var ex__50434__auto__ = e51976;
var statearr_51977_52715 = state_51948;
(statearr_51977_52715[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_51948[(4)]))){
var statearr_51978_52716 = state_51948;
(statearr_51978_52716[(1)] = cljs.core.first((state_51948[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52717 = state_51948;
state_51948 = G__52717;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
cljs$core$async$state_machine__50431__auto__ = function(state_51948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50431__auto____1.call(this,state_51948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50431__auto____0;
cljs$core$async$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50431__auto____1;
return cljs$core$async$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_51979 = f__50502__auto__();
(statearr_51979[(6)] = c__50501__auto___52677);

return statearr_51979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
