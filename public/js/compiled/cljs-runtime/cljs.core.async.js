goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46342 = arguments.length;
switch (G__46342) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46343 = (function (f,blockable,meta46344){
this.f = f;
this.blockable = blockable;
this.meta46344 = meta46344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46345,meta46344__$1){
var self__ = this;
var _46345__$1 = this;
return (new cljs.core.async.t_cljs$core$async46343(self__.f,self__.blockable,meta46344__$1));
}));

(cljs.core.async.t_cljs$core$async46343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46345){
var self__ = this;
var _46345__$1 = this;
return self__.meta46344;
}));

(cljs.core.async.t_cljs$core$async46343.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46344","meta46344",664666248,null)], null);
}));

(cljs.core.async.t_cljs$core$async46343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46343");

(cljs.core.async.t_cljs$core$async46343.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46343.
 */
cljs.core.async.__GT_t_cljs$core$async46343 = (function cljs$core$async$__GT_t_cljs$core$async46343(f__$1,blockable__$1,meta46344){
return (new cljs.core.async.t_cljs$core$async46343(f__$1,blockable__$1,meta46344));
});

}

return (new cljs.core.async.t_cljs$core$async46343(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46351 = arguments.length;
switch (G__46351) {
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
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46366 = arguments.length;
switch (G__46366) {
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
var G__46374 = arguments.length;
switch (G__46374) {
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
var val_47895 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47895) : fn1.call(null,val_47895));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47895) : fn1.call(null,val_47895));
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
var G__46376 = arguments.length;
switch (G__46376) {
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
var n__4741__auto___47897 = n;
var x_47898 = (0);
while(true){
if((x_47898 < n__4741__auto___47897)){
(a[x_47898] = x_47898);

var G__47899 = (x_47898 + (1));
x_47898 = G__47899;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46377 = (function (flag,meta46378){
this.flag = flag;
this.meta46378 = meta46378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46379,meta46378__$1){
var self__ = this;
var _46379__$1 = this;
return (new cljs.core.async.t_cljs$core$async46377(self__.flag,meta46378__$1));
}));

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46379){
var self__ = this;
var _46379__$1 = this;
return self__.meta46378;
}));

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46378","meta46378",833057601,null)], null);
}));

(cljs.core.async.t_cljs$core$async46377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46377");

(cljs.core.async.t_cljs$core$async46377.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46377.
 */
cljs.core.async.__GT_t_cljs$core$async46377 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46377(flag__$1,meta46378){
return (new cljs.core.async.t_cljs$core$async46377(flag__$1,meta46378));
});

}

return (new cljs.core.async.t_cljs$core$async46377(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46380 = (function (flag,cb,meta46381){
this.flag = flag;
this.cb = cb;
this.meta46381 = meta46381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46382,meta46381__$1){
var self__ = this;
var _46382__$1 = this;
return (new cljs.core.async.t_cljs$core$async46380(self__.flag,self__.cb,meta46381__$1));
}));

(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46382){
var self__ = this;
var _46382__$1 = this;
return self__.meta46381;
}));

(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46381","meta46381",-1047861328,null)], null);
}));

(cljs.core.async.t_cljs$core$async46380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46380");

(cljs.core.async.t_cljs$core$async46380.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46380.
 */
cljs.core.async.__GT_t_cljs$core$async46380 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46380(flag__$1,cb__$1,meta46381){
return (new cljs.core.async.t_cljs$core$async46380(flag__$1,cb__$1,meta46381));
});

}

return (new cljs.core.async.t_cljs$core$async46380(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46383_SHARP_){
var G__46385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46383_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46385) : fret.call(null,G__46385));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46384_SHARP_){
var G__46386 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46384_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46386) : fret.call(null,G__46386));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47900 = (i + (1));
i = G__47900;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___47903 = arguments.length;
var i__4865__auto___47904 = (0);
while(true){
if((i__4865__auto___47904 < len__4864__auto___47903)){
args__4870__auto__.push((arguments[i__4865__auto___47904]));

var G__47905 = (i__4865__auto___47904 + (1));
i__4865__auto___47904 = G__47905;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46389){
var map__46390 = p__46389;
var map__46390__$1 = cljs.core.__destructure_map(map__46390);
var opts = map__46390__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46387){
var G__46388 = cljs.core.first(seq46387);
var seq46387__$1 = cljs.core.next(seq46387);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46388,seq46387__$1);
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
var G__46393 = arguments.length;
switch (G__46393) {
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
var c__46267__auto___47907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_46425){
var state_val_46426 = (state_46425[(1)]);
if((state_val_46426 === (7))){
var inst_46421 = (state_46425[(2)]);
var state_46425__$1 = state_46425;
var statearr_46427_47908 = state_46425__$1;
(statearr_46427_47908[(2)] = inst_46421);

(statearr_46427_47908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (1))){
var state_46425__$1 = state_46425;
var statearr_46428_47909 = state_46425__$1;
(statearr_46428_47909[(2)] = null);

(statearr_46428_47909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (4))){
var inst_46403 = (state_46425[(7)]);
var inst_46403__$1 = (state_46425[(2)]);
var inst_46405 = (inst_46403__$1 == null);
var state_46425__$1 = (function (){var statearr_46429 = state_46425;
(statearr_46429[(7)] = inst_46403__$1);

return statearr_46429;
})();
if(cljs.core.truth_(inst_46405)){
var statearr_46430_47910 = state_46425__$1;
(statearr_46430_47910[(1)] = (5));

} else {
var statearr_46431_47911 = state_46425__$1;
(statearr_46431_47911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (13))){
var state_46425__$1 = state_46425;
var statearr_46432_47912 = state_46425__$1;
(statearr_46432_47912[(2)] = null);

(statearr_46432_47912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (6))){
var inst_46403 = (state_46425[(7)]);
var state_46425__$1 = state_46425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46425__$1,(11),to,inst_46403);
} else {
if((state_val_46426 === (3))){
var inst_46423 = (state_46425[(2)]);
var state_46425__$1 = state_46425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46425__$1,inst_46423);
} else {
if((state_val_46426 === (12))){
var state_46425__$1 = state_46425;
var statearr_46433_47913 = state_46425__$1;
(statearr_46433_47913[(2)] = null);

(statearr_46433_47913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (2))){
var state_46425__$1 = state_46425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46425__$1,(4),from);
} else {
if((state_val_46426 === (11))){
var inst_46414 = (state_46425[(2)]);
var state_46425__$1 = state_46425;
if(cljs.core.truth_(inst_46414)){
var statearr_46435_47914 = state_46425__$1;
(statearr_46435_47914[(1)] = (12));

} else {
var statearr_46436_47915 = state_46425__$1;
(statearr_46436_47915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (9))){
var state_46425__$1 = state_46425;
var statearr_46437_47916 = state_46425__$1;
(statearr_46437_47916[(2)] = null);

(statearr_46437_47916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (5))){
var state_46425__$1 = state_46425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46439_47917 = state_46425__$1;
(statearr_46439_47917[(1)] = (8));

} else {
var statearr_46440_47918 = state_46425__$1;
(statearr_46440_47918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (14))){
var inst_46419 = (state_46425[(2)]);
var state_46425__$1 = state_46425;
var statearr_46442_47919 = state_46425__$1;
(statearr_46442_47919[(2)] = inst_46419);

(statearr_46442_47919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (10))){
var inst_46411 = (state_46425[(2)]);
var state_46425__$1 = state_46425;
var statearr_46443_47920 = state_46425__$1;
(statearr_46443_47920[(2)] = inst_46411);

(statearr_46443_47920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46426 === (8))){
var inst_46408 = cljs.core.async.close_BANG_(to);
var state_46425__$1 = state_46425;
var statearr_46444_47921 = state_46425__$1;
(statearr_46444_47921[(2)] = inst_46408);

(statearr_46444_47921[(1)] = (10));


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
var cljs$core$async$state_machine__46189__auto__ = null;
var cljs$core$async$state_machine__46189__auto____0 = (function (){
var statearr_46445 = [null,null,null,null,null,null,null,null];
(statearr_46445[(0)] = cljs$core$async$state_machine__46189__auto__);

(statearr_46445[(1)] = (1));

return statearr_46445;
});
var cljs$core$async$state_machine__46189__auto____1 = (function (state_46425){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_46425);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e46446){var ex__46192__auto__ = e46446;
var statearr_46447_47922 = state_46425;
(statearr_46447_47922[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_46425[(4)]))){
var statearr_46448_47923 = state_46425;
(statearr_46448_47923[(1)] = cljs.core.first((state_46425[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47924 = state_46425;
state_46425 = G__47924;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$state_machine__46189__auto__ = function(state_46425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46189__auto____1.call(this,state_46425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46189__auto____0;
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46189__auto____1;
return cljs$core$async$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_46449 = f__46268__auto__();
(statearr_46449[(6)] = c__46267__auto___47907);

return statearr_46449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
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
var process = (function (p__46453){
var vec__46454 = p__46453;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46454,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46454,(1),null);
var job = vec__46454;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46267__auto___47926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_46461){
var state_val_46462 = (state_46461[(1)]);
if((state_val_46462 === (1))){
var state_46461__$1 = state_46461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46461__$1,(2),res,v);
} else {
if((state_val_46462 === (2))){
var inst_46458 = (state_46461[(2)]);
var inst_46459 = cljs.core.async.close_BANG_(res);
var state_46461__$1 = (function (){var statearr_46463 = state_46461;
(statearr_46463[(7)] = inst_46458);

return statearr_46463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46461__$1,inst_46459);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0 = (function (){
var statearr_46464 = [null,null,null,null,null,null,null,null];
(statearr_46464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__);

(statearr_46464[(1)] = (1));

return statearr_46464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1 = (function (state_46461){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_46461);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e46465){var ex__46192__auto__ = e46465;
var statearr_46466_47928 = state_46461;
(statearr_46466_47928[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_46461[(4)]))){
var statearr_46468_47930 = state_46461;
(statearr_46468_47930[(1)] = cljs.core.first((state_46461[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47931 = state_46461;
state_46461 = G__47931;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__ = function(state_46461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1.call(this,state_46461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_46469 = f__46268__auto__();
(statearr_46469[(6)] = c__46267__auto___47926);

return statearr_46469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46471){
var vec__46472 = p__46471;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46472,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46472,(1),null);
var job = vec__46472;
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
var n__4741__auto___47932 = n;
var __47933 = (0);
while(true){
if((__47933 < n__4741__auto___47932)){
var G__46476_47934 = type;
var G__46476_47935__$1 = (((G__46476_47934 instanceof cljs.core.Keyword))?G__46476_47934.fqn:null);
switch (G__46476_47935__$1) {
case "compute":
var c__46267__auto___47937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47933,c__46267__auto___47937,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async){
return (function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = ((function (__47933,c__46267__auto___47937,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async){
return (function (state_46489){
var state_val_46490 = (state_46489[(1)]);
if((state_val_46490 === (1))){
var state_46489__$1 = state_46489;
var statearr_46491_47938 = state_46489__$1;
(statearr_46491_47938[(2)] = null);

(statearr_46491_47938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46490 === (2))){
var state_46489__$1 = state_46489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46489__$1,(4),jobs);
} else {
if((state_val_46490 === (3))){
var inst_46487 = (state_46489[(2)]);
var state_46489__$1 = state_46489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46489__$1,inst_46487);
} else {
if((state_val_46490 === (4))){
var inst_46479 = (state_46489[(2)]);
var inst_46480 = process(inst_46479);
var state_46489__$1 = state_46489;
if(cljs.core.truth_(inst_46480)){
var statearr_46493_47940 = state_46489__$1;
(statearr_46493_47940[(1)] = (5));

} else {
var statearr_46494_47942 = state_46489__$1;
(statearr_46494_47942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46490 === (5))){
var state_46489__$1 = state_46489;
var statearr_46495_47943 = state_46489__$1;
(statearr_46495_47943[(2)] = null);

(statearr_46495_47943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46490 === (6))){
var state_46489__$1 = state_46489;
var statearr_46496_47944 = state_46489__$1;
(statearr_46496_47944[(2)] = null);

(statearr_46496_47944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46490 === (7))){
var inst_46485 = (state_46489[(2)]);
var state_46489__$1 = state_46489;
var statearr_46497_47945 = state_46489__$1;
(statearr_46497_47945[(2)] = inst_46485);

(statearr_46497_47945[(1)] = (3));


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
});})(__47933,c__46267__auto___47937,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async))
;
return ((function (__47933,switch__46188__auto__,c__46267__auto___47937,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0 = (function (){
var statearr_46498 = [null,null,null,null,null,null,null];
(statearr_46498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__);

(statearr_46498[(1)] = (1));

return statearr_46498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1 = (function (state_46489){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_46489);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e46499){var ex__46192__auto__ = e46499;
var statearr_46500_47946 = state_46489;
(statearr_46500_47946[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_46489[(4)]))){
var statearr_46501_47947 = state_46489;
(statearr_46501_47947[(1)] = cljs.core.first((state_46489[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47948 = state_46489;
state_46489 = G__47948;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__ = function(state_46489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1.call(this,state_46489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__;
})()
;})(__47933,switch__46188__auto__,c__46267__auto___47937,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async))
})();
var state__46269__auto__ = (function (){var statearr_46502 = f__46268__auto__();
(statearr_46502[(6)] = c__46267__auto___47937);

return statearr_46502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
});})(__47933,c__46267__auto___47937,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async))
);


break;
case "async":
var c__46267__auto___47949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47933,c__46267__auto___47949,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async){
return (function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = ((function (__47933,c__46267__auto___47949,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async){
return (function (state_46515){
var state_val_46516 = (state_46515[(1)]);
if((state_val_46516 === (1))){
var state_46515__$1 = state_46515;
var statearr_46517_47951 = state_46515__$1;
(statearr_46517_47951[(2)] = null);

(statearr_46517_47951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (2))){
var state_46515__$1 = state_46515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46515__$1,(4),jobs);
} else {
if((state_val_46516 === (3))){
var inst_46513 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46515__$1,inst_46513);
} else {
if((state_val_46516 === (4))){
var inst_46505 = (state_46515[(2)]);
var inst_46506 = async(inst_46505);
var state_46515__$1 = state_46515;
if(cljs.core.truth_(inst_46506)){
var statearr_46518_47953 = state_46515__$1;
(statearr_46518_47953[(1)] = (5));

} else {
var statearr_46519_47954 = state_46515__$1;
(statearr_46519_47954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (5))){
var state_46515__$1 = state_46515;
var statearr_46520_47955 = state_46515__$1;
(statearr_46520_47955[(2)] = null);

(statearr_46520_47955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (6))){
var state_46515__$1 = state_46515;
var statearr_46521_47956 = state_46515__$1;
(statearr_46521_47956[(2)] = null);

(statearr_46521_47956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (7))){
var inst_46511 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
var statearr_46522_47957 = state_46515__$1;
(statearr_46522_47957[(2)] = inst_46511);

(statearr_46522_47957[(1)] = (3));


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
});})(__47933,c__46267__auto___47949,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async))
;
return ((function (__47933,switch__46188__auto__,c__46267__auto___47949,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0 = (function (){
var statearr_46523 = [null,null,null,null,null,null,null];
(statearr_46523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__);

(statearr_46523[(1)] = (1));

return statearr_46523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1 = (function (state_46515){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_46515);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e46524){var ex__46192__auto__ = e46524;
var statearr_46525_47958 = state_46515;
(statearr_46525_47958[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_46515[(4)]))){
var statearr_46526_47959 = state_46515;
(statearr_46526_47959[(1)] = cljs.core.first((state_46515[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47960 = state_46515;
state_46515 = G__47960;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__ = function(state_46515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1.call(this,state_46515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__;
})()
;})(__47933,switch__46188__auto__,c__46267__auto___47949,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async))
})();
var state__46269__auto__ = (function (){var statearr_46527 = f__46268__auto__();
(statearr_46527[(6)] = c__46267__auto___47949);

return statearr_46527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
});})(__47933,c__46267__auto___47949,G__46476_47934,G__46476_47935__$1,n__4741__auto___47932,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46476_47935__$1)].join('')));

}

var G__47962 = (__47933 + (1));
__47933 = G__47962;
continue;
} else {
}
break;
}

var c__46267__auto___47963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_46549){
var state_val_46550 = (state_46549[(1)]);
if((state_val_46550 === (7))){
var inst_46545 = (state_46549[(2)]);
var state_46549__$1 = state_46549;
var statearr_46551_47964 = state_46549__$1;
(statearr_46551_47964[(2)] = inst_46545);

(statearr_46551_47964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46550 === (1))){
var state_46549__$1 = state_46549;
var statearr_46552_47966 = state_46549__$1;
(statearr_46552_47966[(2)] = null);

(statearr_46552_47966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46550 === (4))){
var inst_46530 = (state_46549[(7)]);
var inst_46530__$1 = (state_46549[(2)]);
var inst_46531 = (inst_46530__$1 == null);
var state_46549__$1 = (function (){var statearr_46553 = state_46549;
(statearr_46553[(7)] = inst_46530__$1);

return statearr_46553;
})();
if(cljs.core.truth_(inst_46531)){
var statearr_46554_47967 = state_46549__$1;
(statearr_46554_47967[(1)] = (5));

} else {
var statearr_46555_47968 = state_46549__$1;
(statearr_46555_47968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46550 === (6))){
var inst_46530 = (state_46549[(7)]);
var inst_46535 = (state_46549[(8)]);
var inst_46535__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46537 = [inst_46530,inst_46535__$1];
var inst_46538 = (new cljs.core.PersistentVector(null,2,(5),inst_46536,inst_46537,null));
var state_46549__$1 = (function (){var statearr_46556 = state_46549;
(statearr_46556[(8)] = inst_46535__$1);

return statearr_46556;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46549__$1,(8),jobs,inst_46538);
} else {
if((state_val_46550 === (3))){
var inst_46547 = (state_46549[(2)]);
var state_46549__$1 = state_46549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46549__$1,inst_46547);
} else {
if((state_val_46550 === (2))){
var state_46549__$1 = state_46549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46549__$1,(4),from);
} else {
if((state_val_46550 === (9))){
var inst_46542 = (state_46549[(2)]);
var state_46549__$1 = (function (){var statearr_46557 = state_46549;
(statearr_46557[(9)] = inst_46542);

return statearr_46557;
})();
var statearr_46558_47971 = state_46549__$1;
(statearr_46558_47971[(2)] = null);

(statearr_46558_47971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46550 === (5))){
var inst_46533 = cljs.core.async.close_BANG_(jobs);
var state_46549__$1 = state_46549;
var statearr_46559_47972 = state_46549__$1;
(statearr_46559_47972[(2)] = inst_46533);

(statearr_46559_47972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46550 === (8))){
var inst_46535 = (state_46549[(8)]);
var inst_46540 = (state_46549[(2)]);
var state_46549__$1 = (function (){var statearr_46560 = state_46549;
(statearr_46560[(10)] = inst_46540);

return statearr_46560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46549__$1,(9),results,inst_46535);
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
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0 = (function (){
var statearr_46561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__);

(statearr_46561[(1)] = (1));

return statearr_46561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1 = (function (state_46549){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_46549);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e46562){var ex__46192__auto__ = e46562;
var statearr_46563_47973 = state_46549;
(statearr_46563_47973[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_46549[(4)]))){
var statearr_46564_47974 = state_46549;
(statearr_46564_47974[(1)] = cljs.core.first((state_46549[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47975 = state_46549;
state_46549 = G__47975;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__ = function(state_46549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1.call(this,state_46549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_46565 = f__46268__auto__();
(statearr_46565[(6)] = c__46267__auto___47963);

return statearr_46565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));


var c__46267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_46605){
var state_val_46606 = (state_46605[(1)]);
if((state_val_46606 === (7))){
var inst_46601 = (state_46605[(2)]);
var state_46605__$1 = state_46605;
var statearr_46611_47976 = state_46605__$1;
(statearr_46611_47976[(2)] = inst_46601);

(statearr_46611_47976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (20))){
var state_46605__$1 = state_46605;
var statearr_46612_47977 = state_46605__$1;
(statearr_46612_47977[(2)] = null);

(statearr_46612_47977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (1))){
var state_46605__$1 = state_46605;
var statearr_46613_47978 = state_46605__$1;
(statearr_46613_47978[(2)] = null);

(statearr_46613_47978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (4))){
var inst_46568 = (state_46605[(7)]);
var inst_46568__$1 = (state_46605[(2)]);
var inst_46569 = (inst_46568__$1 == null);
var state_46605__$1 = (function (){var statearr_46614 = state_46605;
(statearr_46614[(7)] = inst_46568__$1);

return statearr_46614;
})();
if(cljs.core.truth_(inst_46569)){
var statearr_46615_47979 = state_46605__$1;
(statearr_46615_47979[(1)] = (5));

} else {
var statearr_46616_47980 = state_46605__$1;
(statearr_46616_47980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (15))){
var inst_46581 = (state_46605[(8)]);
var state_46605__$1 = state_46605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46605__$1,(18),to,inst_46581);
} else {
if((state_val_46606 === (21))){
var inst_46596 = (state_46605[(2)]);
var state_46605__$1 = state_46605;
var statearr_46621_47981 = state_46605__$1;
(statearr_46621_47981[(2)] = inst_46596);

(statearr_46621_47981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (13))){
var inst_46598 = (state_46605[(2)]);
var state_46605__$1 = (function (){var statearr_46623 = state_46605;
(statearr_46623[(9)] = inst_46598);

return statearr_46623;
})();
var statearr_46624_47982 = state_46605__$1;
(statearr_46624_47982[(2)] = null);

(statearr_46624_47982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (6))){
var inst_46568 = (state_46605[(7)]);
var state_46605__$1 = state_46605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46605__$1,(11),inst_46568);
} else {
if((state_val_46606 === (17))){
var inst_46591 = (state_46605[(2)]);
var state_46605__$1 = state_46605;
if(cljs.core.truth_(inst_46591)){
var statearr_46631_47983 = state_46605__$1;
(statearr_46631_47983[(1)] = (19));

} else {
var statearr_46632_47984 = state_46605__$1;
(statearr_46632_47984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (3))){
var inst_46603 = (state_46605[(2)]);
var state_46605__$1 = state_46605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46605__$1,inst_46603);
} else {
if((state_val_46606 === (12))){
var inst_46578 = (state_46605[(10)]);
var state_46605__$1 = state_46605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46605__$1,(14),inst_46578);
} else {
if((state_val_46606 === (2))){
var state_46605__$1 = state_46605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46605__$1,(4),results);
} else {
if((state_val_46606 === (19))){
var state_46605__$1 = state_46605;
var statearr_46635_47985 = state_46605__$1;
(statearr_46635_47985[(2)] = null);

(statearr_46635_47985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (11))){
var inst_46578 = (state_46605[(2)]);
var state_46605__$1 = (function (){var statearr_46636 = state_46605;
(statearr_46636[(10)] = inst_46578);

return statearr_46636;
})();
var statearr_46640_47986 = state_46605__$1;
(statearr_46640_47986[(2)] = null);

(statearr_46640_47986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (9))){
var state_46605__$1 = state_46605;
var statearr_46643_47987 = state_46605__$1;
(statearr_46643_47987[(2)] = null);

(statearr_46643_47987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (5))){
var state_46605__$1 = state_46605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46646_47988 = state_46605__$1;
(statearr_46646_47988[(1)] = (8));

} else {
var statearr_46647_47989 = state_46605__$1;
(statearr_46647_47989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (14))){
var inst_46581 = (state_46605[(8)]);
var inst_46583 = (state_46605[(11)]);
var inst_46581__$1 = (state_46605[(2)]);
var inst_46582 = (inst_46581__$1 == null);
var inst_46583__$1 = cljs.core.not(inst_46582);
var state_46605__$1 = (function (){var statearr_46650 = state_46605;
(statearr_46650[(8)] = inst_46581__$1);

(statearr_46650[(11)] = inst_46583__$1);

return statearr_46650;
})();
if(inst_46583__$1){
var statearr_46653_47990 = state_46605__$1;
(statearr_46653_47990[(1)] = (15));

} else {
var statearr_46655_47991 = state_46605__$1;
(statearr_46655_47991[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (16))){
var inst_46583 = (state_46605[(11)]);
var state_46605__$1 = state_46605;
var statearr_46657_47992 = state_46605__$1;
(statearr_46657_47992[(2)] = inst_46583);

(statearr_46657_47992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (10))){
var inst_46575 = (state_46605[(2)]);
var state_46605__$1 = state_46605;
var statearr_46659_47993 = state_46605__$1;
(statearr_46659_47993[(2)] = inst_46575);

(statearr_46659_47993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (18))){
var inst_46587 = (state_46605[(2)]);
var state_46605__$1 = state_46605;
var statearr_46660_47994 = state_46605__$1;
(statearr_46660_47994[(2)] = inst_46587);

(statearr_46660_47994[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46606 === (8))){
var inst_46572 = cljs.core.async.close_BANG_(to);
var state_46605__$1 = state_46605;
var statearr_46663_47995 = state_46605__$1;
(statearr_46663_47995[(2)] = inst_46572);

(statearr_46663_47995[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0 = (function (){
var statearr_46667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__);

(statearr_46667[(1)] = (1));

return statearr_46667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1 = (function (state_46605){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_46605);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e46672){var ex__46192__auto__ = e46672;
var statearr_46673_47996 = state_46605;
(statearr_46673_47996[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_46605[(4)]))){
var statearr_46674_47997 = state_46605;
(statearr_46674_47997[(1)] = cljs.core.first((state_46605[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47998 = state_46605;
state_46605 = G__47998;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__ = function(state_46605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1.call(this,state_46605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_46675 = f__46268__auto__();
(statearr_46675[(6)] = c__46267__auto__);

return statearr_46675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));

return c__46267__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46678 = arguments.length;
switch (G__46678) {
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
var G__46685 = arguments.length;
switch (G__46685) {
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
var G__46696 = arguments.length;
switch (G__46696) {
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
var c__46267__auto___48004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_46722){
var state_val_46723 = (state_46722[(1)]);
if((state_val_46723 === (7))){
var inst_46718 = (state_46722[(2)]);
var state_46722__$1 = state_46722;
var statearr_46724_48005 = state_46722__$1;
(statearr_46724_48005[(2)] = inst_46718);

(statearr_46724_48005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46723 === (1))){
var state_46722__$1 = state_46722;
var statearr_46725_48006 = state_46722__$1;
(statearr_46725_48006[(2)] = null);

(statearr_46725_48006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46723 === (4))){
var inst_46699 = (state_46722[(7)]);
var inst_46699__$1 = (state_46722[(2)]);
var inst_46700 = (inst_46699__$1 == null);
var state_46722__$1 = (function (){var statearr_46726 = state_46722;
(statearr_46726[(7)] = inst_46699__$1);

return statearr_46726;
})();
if(cljs.core.truth_(inst_46700)){
var statearr_46727_48007 = state_46722__$1;
(statearr_46727_48007[(1)] = (5));

} else {
var statearr_46728_48008 = state_46722__$1;
(statearr_46728_48008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46723 === (13))){
var state_46722__$1 = state_46722;
var statearr_46729_48009 = state_46722__$1;
(statearr_46729_48009[(2)] = null);

(statearr_46729_48009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46723 === (6))){
var inst_46699 = (state_46722[(7)]);
var inst_46705 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46699) : p.call(null,inst_46699));
var state_46722__$1 = state_46722;
if(cljs.core.truth_(inst_46705)){
var statearr_46730_48010 = state_46722__$1;
(statearr_46730_48010[(1)] = (9));

} else {
var statearr_46731_48011 = state_46722__$1;
(statearr_46731_48011[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46723 === (3))){
var inst_46720 = (state_46722[(2)]);
var state_46722__$1 = state_46722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46722__$1,inst_46720);
} else {
if((state_val_46723 === (12))){
var state_46722__$1 = state_46722;
var statearr_46732_48012 = state_46722__$1;
(statearr_46732_48012[(2)] = null);

(statearr_46732_48012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46723 === (2))){
var state_46722__$1 = state_46722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46722__$1,(4),ch);
} else {
if((state_val_46723 === (11))){
var inst_46699 = (state_46722[(7)]);
var inst_46709 = (state_46722[(2)]);
var state_46722__$1 = state_46722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46722__$1,(8),inst_46709,inst_46699);
} else {
if((state_val_46723 === (9))){
var state_46722__$1 = state_46722;
var statearr_46733_48013 = state_46722__$1;
(statearr_46733_48013[(2)] = tc);

(statearr_46733_48013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46723 === (5))){
var inst_46702 = cljs.core.async.close_BANG_(tc);
var inst_46703 = cljs.core.async.close_BANG_(fc);
var state_46722__$1 = (function (){var statearr_46734 = state_46722;
(statearr_46734[(8)] = inst_46702);

return statearr_46734;
})();
var statearr_46735_48014 = state_46722__$1;
(statearr_46735_48014[(2)] = inst_46703);

(statearr_46735_48014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46723 === (14))){
var inst_46716 = (state_46722[(2)]);
var state_46722__$1 = state_46722;
var statearr_46743_48015 = state_46722__$1;
(statearr_46743_48015[(2)] = inst_46716);

(statearr_46743_48015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46723 === (10))){
var state_46722__$1 = state_46722;
var statearr_46744_48016 = state_46722__$1;
(statearr_46744_48016[(2)] = fc);

(statearr_46744_48016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46723 === (8))){
var inst_46711 = (state_46722[(2)]);
var state_46722__$1 = state_46722;
if(cljs.core.truth_(inst_46711)){
var statearr_46745_48017 = state_46722__$1;
(statearr_46745_48017[(1)] = (12));

} else {
var statearr_46746_48018 = state_46722__$1;
(statearr_46746_48018[(1)] = (13));

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
var cljs$core$async$state_machine__46189__auto__ = null;
var cljs$core$async$state_machine__46189__auto____0 = (function (){
var statearr_46747 = [null,null,null,null,null,null,null,null,null];
(statearr_46747[(0)] = cljs$core$async$state_machine__46189__auto__);

(statearr_46747[(1)] = (1));

return statearr_46747;
});
var cljs$core$async$state_machine__46189__auto____1 = (function (state_46722){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_46722);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e46748){var ex__46192__auto__ = e46748;
var statearr_46749_48019 = state_46722;
(statearr_46749_48019[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_46722[(4)]))){
var statearr_46750_48020 = state_46722;
(statearr_46750_48020[(1)] = cljs.core.first((state_46722[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48021 = state_46722;
state_46722 = G__48021;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$state_machine__46189__auto__ = function(state_46722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46189__auto____1.call(this,state_46722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46189__auto____0;
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46189__auto____1;
return cljs$core$async$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_46751 = f__46268__auto__();
(statearr_46751[(6)] = c__46267__auto___48004);

return statearr_46751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
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
var c__46267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_46777){
var state_val_46778 = (state_46777[(1)]);
if((state_val_46778 === (7))){
var inst_46773 = (state_46777[(2)]);
var state_46777__$1 = state_46777;
var statearr_46779_48022 = state_46777__$1;
(statearr_46779_48022[(2)] = inst_46773);

(statearr_46779_48022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (1))){
var inst_46756 = init;
var inst_46757 = inst_46756;
var state_46777__$1 = (function (){var statearr_46780 = state_46777;
(statearr_46780[(7)] = inst_46757);

return statearr_46780;
})();
var statearr_46781_48023 = state_46777__$1;
(statearr_46781_48023[(2)] = null);

(statearr_46781_48023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (4))){
var inst_46760 = (state_46777[(8)]);
var inst_46760__$1 = (state_46777[(2)]);
var inst_46761 = (inst_46760__$1 == null);
var state_46777__$1 = (function (){var statearr_46782 = state_46777;
(statearr_46782[(8)] = inst_46760__$1);

return statearr_46782;
})();
if(cljs.core.truth_(inst_46761)){
var statearr_46783_48024 = state_46777__$1;
(statearr_46783_48024[(1)] = (5));

} else {
var statearr_46784_48025 = state_46777__$1;
(statearr_46784_48025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (6))){
var inst_46764 = (state_46777[(9)]);
var inst_46757 = (state_46777[(7)]);
var inst_46760 = (state_46777[(8)]);
var inst_46764__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46757,inst_46760) : f.call(null,inst_46757,inst_46760));
var inst_46765 = cljs.core.reduced_QMARK_(inst_46764__$1);
var state_46777__$1 = (function (){var statearr_46785 = state_46777;
(statearr_46785[(9)] = inst_46764__$1);

return statearr_46785;
})();
if(inst_46765){
var statearr_46786_48026 = state_46777__$1;
(statearr_46786_48026[(1)] = (8));

} else {
var statearr_46787_48027 = state_46777__$1;
(statearr_46787_48027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (3))){
var inst_46775 = (state_46777[(2)]);
var state_46777__$1 = state_46777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46777__$1,inst_46775);
} else {
if((state_val_46778 === (2))){
var state_46777__$1 = state_46777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46777__$1,(4),ch);
} else {
if((state_val_46778 === (9))){
var inst_46764 = (state_46777[(9)]);
var inst_46757 = inst_46764;
var state_46777__$1 = (function (){var statearr_46788 = state_46777;
(statearr_46788[(7)] = inst_46757);

return statearr_46788;
})();
var statearr_46789_48029 = state_46777__$1;
(statearr_46789_48029[(2)] = null);

(statearr_46789_48029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (5))){
var inst_46757 = (state_46777[(7)]);
var state_46777__$1 = state_46777;
var statearr_46790_48030 = state_46777__$1;
(statearr_46790_48030[(2)] = inst_46757);

(statearr_46790_48030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (10))){
var inst_46771 = (state_46777[(2)]);
var state_46777__$1 = state_46777;
var statearr_46791_48031 = state_46777__$1;
(statearr_46791_48031[(2)] = inst_46771);

(statearr_46791_48031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46778 === (8))){
var inst_46764 = (state_46777[(9)]);
var inst_46767 = cljs.core.deref(inst_46764);
var state_46777__$1 = state_46777;
var statearr_46792_48032 = state_46777__$1;
(statearr_46792_48032[(2)] = inst_46767);

(statearr_46792_48032[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__46189__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46189__auto____0 = (function (){
var statearr_46793 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46793[(0)] = cljs$core$async$reduce_$_state_machine__46189__auto__);

(statearr_46793[(1)] = (1));

return statearr_46793;
});
var cljs$core$async$reduce_$_state_machine__46189__auto____1 = (function (state_46777){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_46777);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e46794){var ex__46192__auto__ = e46794;
var statearr_46795_48033 = state_46777;
(statearr_46795_48033[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_46777[(4)]))){
var statearr_46796_48034 = state_46777;
(statearr_46796_48034[(1)] = cljs.core.first((state_46777[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48035 = state_46777;
state_46777 = G__48035;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46189__auto__ = function(state_46777){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46189__auto____1.call(this,state_46777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46189__auto____0;
cljs$core$async$reduce_$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46189__auto____1;
return cljs$core$async$reduce_$_state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_46797 = f__46268__auto__();
(statearr_46797[(6)] = c__46267__auto__);

return statearr_46797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));

return c__46267__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_46803){
var state_val_46804 = (state_46803[(1)]);
if((state_val_46804 === (1))){
var inst_46798 = cljs.core.async.reduce(f__$1,init,ch);
var state_46803__$1 = state_46803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46803__$1,(2),inst_46798);
} else {
if((state_val_46804 === (2))){
var inst_46800 = (state_46803[(2)]);
var inst_46801 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46800) : f__$1.call(null,inst_46800));
var state_46803__$1 = state_46803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46803__$1,inst_46801);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46189__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46189__auto____0 = (function (){
var statearr_46805 = [null,null,null,null,null,null,null];
(statearr_46805[(0)] = cljs$core$async$transduce_$_state_machine__46189__auto__);

(statearr_46805[(1)] = (1));

return statearr_46805;
});
var cljs$core$async$transduce_$_state_machine__46189__auto____1 = (function (state_46803){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_46803);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e46806){var ex__46192__auto__ = e46806;
var statearr_46807_48040 = state_46803;
(statearr_46807_48040[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_46803[(4)]))){
var statearr_46808_48041 = state_46803;
(statearr_46808_48041[(1)] = cljs.core.first((state_46803[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48042 = state_46803;
state_46803 = G__48042;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46189__auto__ = function(state_46803){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46189__auto____1.call(this,state_46803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46189__auto____0;
cljs$core$async$transduce_$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46189__auto____1;
return cljs$core$async$transduce_$_state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_46809 = f__46268__auto__();
(statearr_46809[(6)] = c__46267__auto__);

return statearr_46809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));

return c__46267__auto__;
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
var G__46811 = arguments.length;
switch (G__46811) {
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
var c__46267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_46836){
var state_val_46837 = (state_46836[(1)]);
if((state_val_46837 === (7))){
var inst_46818 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46838_48044 = state_46836__$1;
(statearr_46838_48044[(2)] = inst_46818);

(statearr_46838_48044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (1))){
var inst_46812 = cljs.core.seq(coll);
var inst_46813 = inst_46812;
var state_46836__$1 = (function (){var statearr_46839 = state_46836;
(statearr_46839[(7)] = inst_46813);

return statearr_46839;
})();
var statearr_46840_48045 = state_46836__$1;
(statearr_46840_48045[(2)] = null);

(statearr_46840_48045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (4))){
var inst_46813 = (state_46836[(7)]);
var inst_46816 = cljs.core.first(inst_46813);
var state_46836__$1 = state_46836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46836__$1,(7),ch,inst_46816);
} else {
if((state_val_46837 === (13))){
var inst_46830 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46841_48046 = state_46836__$1;
(statearr_46841_48046[(2)] = inst_46830);

(statearr_46841_48046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (6))){
var inst_46821 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46821)){
var statearr_46842_48047 = state_46836__$1;
(statearr_46842_48047[(1)] = (8));

} else {
var statearr_46843_48048 = state_46836__$1;
(statearr_46843_48048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (3))){
var inst_46834 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46836__$1,inst_46834);
} else {
if((state_val_46837 === (12))){
var state_46836__$1 = state_46836;
var statearr_46844_48049 = state_46836__$1;
(statearr_46844_48049[(2)] = null);

(statearr_46844_48049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (2))){
var inst_46813 = (state_46836[(7)]);
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46813)){
var statearr_46845_48050 = state_46836__$1;
(statearr_46845_48050[(1)] = (4));

} else {
var statearr_46846_48051 = state_46836__$1;
(statearr_46846_48051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (11))){
var inst_46827 = cljs.core.async.close_BANG_(ch);
var state_46836__$1 = state_46836;
var statearr_46847_48052 = state_46836__$1;
(statearr_46847_48052[(2)] = inst_46827);

(statearr_46847_48052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (9))){
var state_46836__$1 = state_46836;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46848_48053 = state_46836__$1;
(statearr_46848_48053[(1)] = (11));

} else {
var statearr_46849_48054 = state_46836__$1;
(statearr_46849_48054[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (5))){
var inst_46813 = (state_46836[(7)]);
var state_46836__$1 = state_46836;
var statearr_46850_48055 = state_46836__$1;
(statearr_46850_48055[(2)] = inst_46813);

(statearr_46850_48055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (10))){
var inst_46832 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46851_48056 = state_46836__$1;
(statearr_46851_48056[(2)] = inst_46832);

(statearr_46851_48056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (8))){
var inst_46813 = (state_46836[(7)]);
var inst_46823 = cljs.core.next(inst_46813);
var inst_46813__$1 = inst_46823;
var state_46836__$1 = (function (){var statearr_46852 = state_46836;
(statearr_46852[(7)] = inst_46813__$1);

return statearr_46852;
})();
var statearr_46853_48057 = state_46836__$1;
(statearr_46853_48057[(2)] = null);

(statearr_46853_48057[(1)] = (2));


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
var cljs$core$async$state_machine__46189__auto__ = null;
var cljs$core$async$state_machine__46189__auto____0 = (function (){
var statearr_46854 = [null,null,null,null,null,null,null,null];
(statearr_46854[(0)] = cljs$core$async$state_machine__46189__auto__);

(statearr_46854[(1)] = (1));

return statearr_46854;
});
var cljs$core$async$state_machine__46189__auto____1 = (function (state_46836){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_46836);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e46855){var ex__46192__auto__ = e46855;
var statearr_46856_48058 = state_46836;
(statearr_46856_48058[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_46836[(4)]))){
var statearr_46857_48059 = state_46836;
(statearr_46857_48059[(1)] = cljs.core.first((state_46836[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48060 = state_46836;
state_46836 = G__48060;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$state_machine__46189__auto__ = function(state_46836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46189__auto____1.call(this,state_46836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46189__auto____0;
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46189__auto____1;
return cljs$core$async$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_46858 = f__46268__auto__();
(statearr_46858[(6)] = c__46267__auto__);

return statearr_46858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));

return c__46267__auto__;
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
var G__46860 = arguments.length;
switch (G__46860) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_48062 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48062(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48064 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48064(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48066 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48066(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48067 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48067(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46861 = (function (ch,cs,meta46862){
this.ch = ch;
this.cs = cs;
this.meta46862 = meta46862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46863,meta46862__$1){
var self__ = this;
var _46863__$1 = this;
return (new cljs.core.async.t_cljs$core$async46861(self__.ch,self__.cs,meta46862__$1));
}));

(cljs.core.async.t_cljs$core$async46861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46863){
var self__ = this;
var _46863__$1 = this;
return self__.meta46862;
}));

(cljs.core.async.t_cljs$core$async46861.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46861.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46861.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46861.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46861.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46862","meta46862",-722150334,null)], null);
}));

(cljs.core.async.t_cljs$core$async46861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46861");

(cljs.core.async.t_cljs$core$async46861.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46861.
 */
cljs.core.async.__GT_t_cljs$core$async46861 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46861(ch__$1,cs__$1,meta46862){
return (new cljs.core.async.t_cljs$core$async46861(ch__$1,cs__$1,meta46862));
});

}

return (new cljs.core.async.t_cljs$core$async46861(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46267__auto___48075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_46996){
var state_val_46997 = (state_46996[(1)]);
if((state_val_46997 === (7))){
var inst_46992 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_46998_48076 = state_46996__$1;
(statearr_46998_48076[(2)] = inst_46992);

(statearr_46998_48076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (20))){
var inst_46897 = (state_46996[(7)]);
var inst_46909 = cljs.core.first(inst_46897);
var inst_46910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46909,(0),null);
var inst_46911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46909,(1),null);
var state_46996__$1 = (function (){var statearr_46999 = state_46996;
(statearr_46999[(8)] = inst_46910);

return statearr_46999;
})();
if(cljs.core.truth_(inst_46911)){
var statearr_47000_48077 = state_46996__$1;
(statearr_47000_48077[(1)] = (22));

} else {
var statearr_47001_48078 = state_46996__$1;
(statearr_47001_48078[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (27))){
var inst_46946 = (state_46996[(9)]);
var inst_46939 = (state_46996[(10)]);
var inst_46941 = (state_46996[(11)]);
var inst_46866 = (state_46996[(12)]);
var inst_46946__$1 = cljs.core._nth(inst_46939,inst_46941);
var inst_46947 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46946__$1,inst_46866,done);
var state_46996__$1 = (function (){var statearr_47002 = state_46996;
(statearr_47002[(9)] = inst_46946__$1);

return statearr_47002;
})();
if(cljs.core.truth_(inst_46947)){
var statearr_47003_48082 = state_46996__$1;
(statearr_47003_48082[(1)] = (30));

} else {
var statearr_47004_48083 = state_46996__$1;
(statearr_47004_48083[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (1))){
var state_46996__$1 = state_46996;
var statearr_47005_48084 = state_46996__$1;
(statearr_47005_48084[(2)] = null);

(statearr_47005_48084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (24))){
var inst_46897 = (state_46996[(7)]);
var inst_46916 = (state_46996[(2)]);
var inst_46917 = cljs.core.next(inst_46897);
var inst_46875 = inst_46917;
var inst_46876 = null;
var inst_46877 = (0);
var inst_46878 = (0);
var state_46996__$1 = (function (){var statearr_47006 = state_46996;
(statearr_47006[(13)] = inst_46875);

(statearr_47006[(14)] = inst_46876);

(statearr_47006[(15)] = inst_46878);

(statearr_47006[(16)] = inst_46877);

(statearr_47006[(17)] = inst_46916);

return statearr_47006;
})();
var statearr_47007_48088 = state_46996__$1;
(statearr_47007_48088[(2)] = null);

(statearr_47007_48088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (39))){
var state_46996__$1 = state_46996;
var statearr_47011_48089 = state_46996__$1;
(statearr_47011_48089[(2)] = null);

(statearr_47011_48089[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (4))){
var inst_46866 = (state_46996[(12)]);
var inst_46866__$1 = (state_46996[(2)]);
var inst_46867 = (inst_46866__$1 == null);
var state_46996__$1 = (function (){var statearr_47012 = state_46996;
(statearr_47012[(12)] = inst_46866__$1);

return statearr_47012;
})();
if(cljs.core.truth_(inst_46867)){
var statearr_47013_48090 = state_46996__$1;
(statearr_47013_48090[(1)] = (5));

} else {
var statearr_47014_48091 = state_46996__$1;
(statearr_47014_48091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (15))){
var inst_46875 = (state_46996[(13)]);
var inst_46876 = (state_46996[(14)]);
var inst_46878 = (state_46996[(15)]);
var inst_46877 = (state_46996[(16)]);
var inst_46893 = (state_46996[(2)]);
var inst_46894 = (inst_46878 + (1));
var tmp47008 = inst_46875;
var tmp47009 = inst_46876;
var tmp47010 = inst_46877;
var inst_46875__$1 = tmp47008;
var inst_46876__$1 = tmp47009;
var inst_46877__$1 = tmp47010;
var inst_46878__$1 = inst_46894;
var state_46996__$1 = (function (){var statearr_47015 = state_46996;
(statearr_47015[(13)] = inst_46875__$1);

(statearr_47015[(14)] = inst_46876__$1);

(statearr_47015[(15)] = inst_46878__$1);

(statearr_47015[(16)] = inst_46877__$1);

(statearr_47015[(18)] = inst_46893);

return statearr_47015;
})();
var statearr_47016_48095 = state_46996__$1;
(statearr_47016_48095[(2)] = null);

(statearr_47016_48095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (21))){
var inst_46920 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_47020_48096 = state_46996__$1;
(statearr_47020_48096[(2)] = inst_46920);

(statearr_47020_48096[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (31))){
var inst_46946 = (state_46996[(9)]);
var inst_46950 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46946);
var state_46996__$1 = state_46996;
var statearr_47021_48097 = state_46996__$1;
(statearr_47021_48097[(2)] = inst_46950);

(statearr_47021_48097[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (32))){
var inst_46939 = (state_46996[(10)]);
var inst_46941 = (state_46996[(11)]);
var inst_46940 = (state_46996[(19)]);
var inst_46938 = (state_46996[(20)]);
var inst_46952 = (state_46996[(2)]);
var inst_46953 = (inst_46941 + (1));
var tmp47017 = inst_46939;
var tmp47018 = inst_46940;
var tmp47019 = inst_46938;
var inst_46938__$1 = tmp47019;
var inst_46939__$1 = tmp47017;
var inst_46940__$1 = tmp47018;
var inst_46941__$1 = inst_46953;
var state_46996__$1 = (function (){var statearr_47022 = state_46996;
(statearr_47022[(10)] = inst_46939__$1);

(statearr_47022[(11)] = inst_46941__$1);

(statearr_47022[(19)] = inst_46940__$1);

(statearr_47022[(21)] = inst_46952);

(statearr_47022[(20)] = inst_46938__$1);

return statearr_47022;
})();
var statearr_47023_48102 = state_46996__$1;
(statearr_47023_48102[(2)] = null);

(statearr_47023_48102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (40))){
var inst_46965 = (state_46996[(22)]);
var inst_46969 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46965);
var state_46996__$1 = state_46996;
var statearr_47024_48106 = state_46996__$1;
(statearr_47024_48106[(2)] = inst_46969);

(statearr_47024_48106[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (33))){
var inst_46956 = (state_46996[(23)]);
var inst_46958 = cljs.core.chunked_seq_QMARK_(inst_46956);
var state_46996__$1 = state_46996;
if(inst_46958){
var statearr_47025_48107 = state_46996__$1;
(statearr_47025_48107[(1)] = (36));

} else {
var statearr_47026_48108 = state_46996__$1;
(statearr_47026_48108[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (13))){
var inst_46887 = (state_46996[(24)]);
var inst_46890 = cljs.core.async.close_BANG_(inst_46887);
var state_46996__$1 = state_46996;
var statearr_47027_48109 = state_46996__$1;
(statearr_47027_48109[(2)] = inst_46890);

(statearr_47027_48109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (22))){
var inst_46910 = (state_46996[(8)]);
var inst_46913 = cljs.core.async.close_BANG_(inst_46910);
var state_46996__$1 = state_46996;
var statearr_47028_48110 = state_46996__$1;
(statearr_47028_48110[(2)] = inst_46913);

(statearr_47028_48110[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (36))){
var inst_46956 = (state_46996[(23)]);
var inst_46960 = cljs.core.chunk_first(inst_46956);
var inst_46961 = cljs.core.chunk_rest(inst_46956);
var inst_46962 = cljs.core.count(inst_46960);
var inst_46938 = inst_46961;
var inst_46939 = inst_46960;
var inst_46940 = inst_46962;
var inst_46941 = (0);
var state_46996__$1 = (function (){var statearr_47029 = state_46996;
(statearr_47029[(10)] = inst_46939);

(statearr_47029[(11)] = inst_46941);

(statearr_47029[(19)] = inst_46940);

(statearr_47029[(20)] = inst_46938);

return statearr_47029;
})();
var statearr_47030_48114 = state_46996__$1;
(statearr_47030_48114[(2)] = null);

(statearr_47030_48114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (41))){
var inst_46956 = (state_46996[(23)]);
var inst_46971 = (state_46996[(2)]);
var inst_46972 = cljs.core.next(inst_46956);
var inst_46938 = inst_46972;
var inst_46939 = null;
var inst_46940 = (0);
var inst_46941 = (0);
var state_46996__$1 = (function (){var statearr_47031 = state_46996;
(statearr_47031[(10)] = inst_46939);

(statearr_47031[(25)] = inst_46971);

(statearr_47031[(11)] = inst_46941);

(statearr_47031[(19)] = inst_46940);

(statearr_47031[(20)] = inst_46938);

return statearr_47031;
})();
var statearr_47032_48115 = state_46996__$1;
(statearr_47032_48115[(2)] = null);

(statearr_47032_48115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (43))){
var state_46996__$1 = state_46996;
var statearr_47033_48116 = state_46996__$1;
(statearr_47033_48116[(2)] = null);

(statearr_47033_48116[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (29))){
var inst_46980 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_47034_48117 = state_46996__$1;
(statearr_47034_48117[(2)] = inst_46980);

(statearr_47034_48117[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (44))){
var inst_46989 = (state_46996[(2)]);
var state_46996__$1 = (function (){var statearr_47035 = state_46996;
(statearr_47035[(26)] = inst_46989);

return statearr_47035;
})();
var statearr_47036_48121 = state_46996__$1;
(statearr_47036_48121[(2)] = null);

(statearr_47036_48121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (6))){
var inst_46930 = (state_46996[(27)]);
var inst_46929 = cljs.core.deref(cs);
var inst_46930__$1 = cljs.core.keys(inst_46929);
var inst_46931 = cljs.core.count(inst_46930__$1);
var inst_46932 = cljs.core.reset_BANG_(dctr,inst_46931);
var inst_46937 = cljs.core.seq(inst_46930__$1);
var inst_46938 = inst_46937;
var inst_46939 = null;
var inst_46940 = (0);
var inst_46941 = (0);
var state_46996__$1 = (function (){var statearr_47037 = state_46996;
(statearr_47037[(10)] = inst_46939);

(statearr_47037[(11)] = inst_46941);

(statearr_47037[(27)] = inst_46930__$1);

(statearr_47037[(19)] = inst_46940);

(statearr_47037[(28)] = inst_46932);

(statearr_47037[(20)] = inst_46938);

return statearr_47037;
})();
var statearr_47038_48122 = state_46996__$1;
(statearr_47038_48122[(2)] = null);

(statearr_47038_48122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (28))){
var inst_46956 = (state_46996[(23)]);
var inst_46938 = (state_46996[(20)]);
var inst_46956__$1 = cljs.core.seq(inst_46938);
var state_46996__$1 = (function (){var statearr_47039 = state_46996;
(statearr_47039[(23)] = inst_46956__$1);

return statearr_47039;
})();
if(inst_46956__$1){
var statearr_47040_48126 = state_46996__$1;
(statearr_47040_48126[(1)] = (33));

} else {
var statearr_47041_48127 = state_46996__$1;
(statearr_47041_48127[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (25))){
var inst_46941 = (state_46996[(11)]);
var inst_46940 = (state_46996[(19)]);
var inst_46943 = (inst_46941 < inst_46940);
var inst_46944 = inst_46943;
var state_46996__$1 = state_46996;
if(cljs.core.truth_(inst_46944)){
var statearr_47042_48128 = state_46996__$1;
(statearr_47042_48128[(1)] = (27));

} else {
var statearr_47043_48129 = state_46996__$1;
(statearr_47043_48129[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (34))){
var state_46996__$1 = state_46996;
var statearr_47044_48130 = state_46996__$1;
(statearr_47044_48130[(2)] = null);

(statearr_47044_48130[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (17))){
var state_46996__$1 = state_46996;
var statearr_47045_48131 = state_46996__$1;
(statearr_47045_48131[(2)] = null);

(statearr_47045_48131[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (3))){
var inst_46994 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46996__$1,inst_46994);
} else {
if((state_val_46997 === (12))){
var inst_46925 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_47046_48132 = state_46996__$1;
(statearr_47046_48132[(2)] = inst_46925);

(statearr_47046_48132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (2))){
var state_46996__$1 = state_46996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46996__$1,(4),ch);
} else {
if((state_val_46997 === (23))){
var state_46996__$1 = state_46996;
var statearr_47047_48133 = state_46996__$1;
(statearr_47047_48133[(2)] = null);

(statearr_47047_48133[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (35))){
var inst_46978 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_47048_48134 = state_46996__$1;
(statearr_47048_48134[(2)] = inst_46978);

(statearr_47048_48134[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (19))){
var inst_46897 = (state_46996[(7)]);
var inst_46901 = cljs.core.chunk_first(inst_46897);
var inst_46902 = cljs.core.chunk_rest(inst_46897);
var inst_46903 = cljs.core.count(inst_46901);
var inst_46875 = inst_46902;
var inst_46876 = inst_46901;
var inst_46877 = inst_46903;
var inst_46878 = (0);
var state_46996__$1 = (function (){var statearr_47049 = state_46996;
(statearr_47049[(13)] = inst_46875);

(statearr_47049[(14)] = inst_46876);

(statearr_47049[(15)] = inst_46878);

(statearr_47049[(16)] = inst_46877);

return statearr_47049;
})();
var statearr_47050_48136 = state_46996__$1;
(statearr_47050_48136[(2)] = null);

(statearr_47050_48136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (11))){
var inst_46897 = (state_46996[(7)]);
var inst_46875 = (state_46996[(13)]);
var inst_46897__$1 = cljs.core.seq(inst_46875);
var state_46996__$1 = (function (){var statearr_47051 = state_46996;
(statearr_47051[(7)] = inst_46897__$1);

return statearr_47051;
})();
if(inst_46897__$1){
var statearr_47052_48137 = state_46996__$1;
(statearr_47052_48137[(1)] = (16));

} else {
var statearr_47053_48138 = state_46996__$1;
(statearr_47053_48138[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (9))){
var inst_46927 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_47054_48139 = state_46996__$1;
(statearr_47054_48139[(2)] = inst_46927);

(statearr_47054_48139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (5))){
var inst_46873 = cljs.core.deref(cs);
var inst_46874 = cljs.core.seq(inst_46873);
var inst_46875 = inst_46874;
var inst_46876 = null;
var inst_46877 = (0);
var inst_46878 = (0);
var state_46996__$1 = (function (){var statearr_47055 = state_46996;
(statearr_47055[(13)] = inst_46875);

(statearr_47055[(14)] = inst_46876);

(statearr_47055[(15)] = inst_46878);

(statearr_47055[(16)] = inst_46877);

return statearr_47055;
})();
var statearr_47056_48140 = state_46996__$1;
(statearr_47056_48140[(2)] = null);

(statearr_47056_48140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (14))){
var state_46996__$1 = state_46996;
var statearr_47057_48141 = state_46996__$1;
(statearr_47057_48141[(2)] = null);

(statearr_47057_48141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (45))){
var inst_46986 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_47058_48142 = state_46996__$1;
(statearr_47058_48142[(2)] = inst_46986);

(statearr_47058_48142[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (26))){
var inst_46930 = (state_46996[(27)]);
var inst_46982 = (state_46996[(2)]);
var inst_46983 = cljs.core.seq(inst_46930);
var state_46996__$1 = (function (){var statearr_47059 = state_46996;
(statearr_47059[(29)] = inst_46982);

return statearr_47059;
})();
if(inst_46983){
var statearr_47060_48143 = state_46996__$1;
(statearr_47060_48143[(1)] = (42));

} else {
var statearr_47061_48144 = state_46996__$1;
(statearr_47061_48144[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (16))){
var inst_46897 = (state_46996[(7)]);
var inst_46899 = cljs.core.chunked_seq_QMARK_(inst_46897);
var state_46996__$1 = state_46996;
if(inst_46899){
var statearr_47062_48145 = state_46996__$1;
(statearr_47062_48145[(1)] = (19));

} else {
var statearr_47063_48146 = state_46996__$1;
(statearr_47063_48146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (38))){
var inst_46975 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_47064_48147 = state_46996__$1;
(statearr_47064_48147[(2)] = inst_46975);

(statearr_47064_48147[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (30))){
var state_46996__$1 = state_46996;
var statearr_47065_48148 = state_46996__$1;
(statearr_47065_48148[(2)] = null);

(statearr_47065_48148[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (10))){
var inst_46876 = (state_46996[(14)]);
var inst_46878 = (state_46996[(15)]);
var inst_46886 = cljs.core._nth(inst_46876,inst_46878);
var inst_46887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46886,(0),null);
var inst_46888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46886,(1),null);
var state_46996__$1 = (function (){var statearr_47066 = state_46996;
(statearr_47066[(24)] = inst_46887);

return statearr_47066;
})();
if(cljs.core.truth_(inst_46888)){
var statearr_47067_48149 = state_46996__$1;
(statearr_47067_48149[(1)] = (13));

} else {
var statearr_47068_48150 = state_46996__$1;
(statearr_47068_48150[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (18))){
var inst_46923 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_47069_48151 = state_46996__$1;
(statearr_47069_48151[(2)] = inst_46923);

(statearr_47069_48151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (42))){
var state_46996__$1 = state_46996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46996__$1,(45),dchan);
} else {
if((state_val_46997 === (37))){
var inst_46866 = (state_46996[(12)]);
var inst_46965 = (state_46996[(22)]);
var inst_46956 = (state_46996[(23)]);
var inst_46965__$1 = cljs.core.first(inst_46956);
var inst_46966 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46965__$1,inst_46866,done);
var state_46996__$1 = (function (){var statearr_47070 = state_46996;
(statearr_47070[(22)] = inst_46965__$1);

return statearr_47070;
})();
if(cljs.core.truth_(inst_46966)){
var statearr_47071_48152 = state_46996__$1;
(statearr_47071_48152[(1)] = (39));

} else {
var statearr_47072_48153 = state_46996__$1;
(statearr_47072_48153[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (8))){
var inst_46878 = (state_46996[(15)]);
var inst_46877 = (state_46996[(16)]);
var inst_46880 = (inst_46878 < inst_46877);
var inst_46881 = inst_46880;
var state_46996__$1 = state_46996;
if(cljs.core.truth_(inst_46881)){
var statearr_47073_48154 = state_46996__$1;
(statearr_47073_48154[(1)] = (10));

} else {
var statearr_47074_48155 = state_46996__$1;
(statearr_47074_48155[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__46189__auto__ = null;
var cljs$core$async$mult_$_state_machine__46189__auto____0 = (function (){
var statearr_47075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47075[(0)] = cljs$core$async$mult_$_state_machine__46189__auto__);

(statearr_47075[(1)] = (1));

return statearr_47075;
});
var cljs$core$async$mult_$_state_machine__46189__auto____1 = (function (state_46996){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_46996);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e47076){var ex__46192__auto__ = e47076;
var statearr_47077_48156 = state_46996;
(statearr_47077_48156[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_46996[(4)]))){
var statearr_47078_48157 = state_46996;
(statearr_47078_48157[(1)] = cljs.core.first((state_46996[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48158 = state_46996;
state_46996 = G__48158;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46189__auto__ = function(state_46996){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46189__auto____1.call(this,state_46996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46189__auto____0;
cljs$core$async$mult_$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46189__auto____1;
return cljs$core$async$mult_$_state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_47079 = f__46268__auto__();
(statearr_47079[(6)] = c__46267__auto___48075);

return statearr_47079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
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
var G__47081 = arguments.length;
switch (G__47081) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_48160 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48160(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48161 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48161(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48162 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48162(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48163 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48163(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48166 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48166(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48170 = arguments.length;
var i__4865__auto___48171 = (0);
while(true){
if((i__4865__auto___48171 < len__4864__auto___48170)){
args__4870__auto__.push((arguments[i__4865__auto___48171]));

var G__48172 = (i__4865__auto___48171 + (1));
i__4865__auto___48171 = G__48172;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47086){
var map__47087 = p__47086;
var map__47087__$1 = cljs.core.__destructure_map(map__47087);
var opts = map__47087__$1;
var statearr_47088_48174 = state;
(statearr_47088_48174[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47089_48175 = state;
(statearr_47089_48175[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_47090_48177 = state;
(statearr_47090_48177[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47082){
var G__47083 = cljs.core.first(seq47082);
var seq47082__$1 = cljs.core.next(seq47082);
var G__47084 = cljs.core.first(seq47082__$1);
var seq47082__$2 = cljs.core.next(seq47082__$1);
var G__47085 = cljs.core.first(seq47082__$2);
var seq47082__$3 = cljs.core.next(seq47082__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47083,G__47084,G__47085,seq47082__$3);
}));

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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47091 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47092){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47092 = meta47092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47093,meta47092__$1){
var self__ = this;
var _47093__$1 = this;
return (new cljs.core.async.t_cljs$core$async47091(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47092__$1));
}));

(cljs.core.async.t_cljs$core$async47091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47093){
var self__ = this;
var _47093__$1 = this;
return self__.meta47092;
}));

(cljs.core.async.t_cljs$core$async47091.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47091.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47091.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47091.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47091.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47091.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47091.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47092","meta47092",-842978883,null)], null);
}));

(cljs.core.async.t_cljs$core$async47091.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47091");

(cljs.core.async.t_cljs$core$async47091.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47091");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47091.
 */
cljs.core.async.__GT_t_cljs$core$async47091 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47091(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47092){
return (new cljs.core.async.t_cljs$core$async47091(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47092));
});

}

return (new cljs.core.async.t_cljs$core$async47091(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46267__auto___48183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_47161){
var state_val_47162 = (state_47161[(1)]);
if((state_val_47162 === (7))){
var inst_47121 = (state_47161[(2)]);
var state_47161__$1 = state_47161;
if(cljs.core.truth_(inst_47121)){
var statearr_47163_48184 = state_47161__$1;
(statearr_47163_48184[(1)] = (8));

} else {
var statearr_47164_48185 = state_47161__$1;
(statearr_47164_48185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (20))){
var inst_47114 = (state_47161[(7)]);
var state_47161__$1 = state_47161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47161__$1,(23),out,inst_47114);
} else {
if((state_val_47162 === (1))){
var inst_47097 = calc_state();
var inst_47098 = cljs.core.__destructure_map(inst_47097);
var inst_47099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47098,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47098,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47098,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47102 = inst_47097;
var state_47161__$1 = (function (){var statearr_47165 = state_47161;
(statearr_47165[(8)] = inst_47101);

(statearr_47165[(9)] = inst_47100);

(statearr_47165[(10)] = inst_47102);

(statearr_47165[(11)] = inst_47099);

return statearr_47165;
})();
var statearr_47166_48186 = state_47161__$1;
(statearr_47166_48186[(2)] = null);

(statearr_47166_48186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (24))){
var inst_47105 = (state_47161[(12)]);
var inst_47102 = inst_47105;
var state_47161__$1 = (function (){var statearr_47167 = state_47161;
(statearr_47167[(10)] = inst_47102);

return statearr_47167;
})();
var statearr_47168_48187 = state_47161__$1;
(statearr_47168_48187[(2)] = null);

(statearr_47168_48187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (4))){
var inst_47114 = (state_47161[(7)]);
var inst_47116 = (state_47161[(13)]);
var inst_47113 = (state_47161[(2)]);
var inst_47114__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47113,(0),null);
var inst_47115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47113,(1),null);
var inst_47116__$1 = (inst_47114__$1 == null);
var state_47161__$1 = (function (){var statearr_47169 = state_47161;
(statearr_47169[(7)] = inst_47114__$1);

(statearr_47169[(14)] = inst_47115);

(statearr_47169[(13)] = inst_47116__$1);

return statearr_47169;
})();
if(cljs.core.truth_(inst_47116__$1)){
var statearr_47170_48190 = state_47161__$1;
(statearr_47170_48190[(1)] = (5));

} else {
var statearr_47171_48191 = state_47161__$1;
(statearr_47171_48191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (15))){
var inst_47135 = (state_47161[(15)]);
var inst_47106 = (state_47161[(16)]);
var inst_47135__$1 = cljs.core.empty_QMARK_(inst_47106);
var state_47161__$1 = (function (){var statearr_47172 = state_47161;
(statearr_47172[(15)] = inst_47135__$1);

return statearr_47172;
})();
if(inst_47135__$1){
var statearr_47173_48194 = state_47161__$1;
(statearr_47173_48194[(1)] = (17));

} else {
var statearr_47174_48195 = state_47161__$1;
(statearr_47174_48195[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (21))){
var inst_47105 = (state_47161[(12)]);
var inst_47102 = inst_47105;
var state_47161__$1 = (function (){var statearr_47175 = state_47161;
(statearr_47175[(10)] = inst_47102);

return statearr_47175;
})();
var statearr_47176_48196 = state_47161__$1;
(statearr_47176_48196[(2)] = null);

(statearr_47176_48196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (13))){
var inst_47128 = (state_47161[(2)]);
var inst_47129 = calc_state();
var inst_47102 = inst_47129;
var state_47161__$1 = (function (){var statearr_47177 = state_47161;
(statearr_47177[(10)] = inst_47102);

(statearr_47177[(17)] = inst_47128);

return statearr_47177;
})();
var statearr_47178_48197 = state_47161__$1;
(statearr_47178_48197[(2)] = null);

(statearr_47178_48197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (22))){
var inst_47155 = (state_47161[(2)]);
var state_47161__$1 = state_47161;
var statearr_47179_48198 = state_47161__$1;
(statearr_47179_48198[(2)] = inst_47155);

(statearr_47179_48198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (6))){
var inst_47115 = (state_47161[(14)]);
var inst_47119 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47115,change);
var state_47161__$1 = state_47161;
var statearr_47180_48202 = state_47161__$1;
(statearr_47180_48202[(2)] = inst_47119);

(statearr_47180_48202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (25))){
var state_47161__$1 = state_47161;
var statearr_47181_48207 = state_47161__$1;
(statearr_47181_48207[(2)] = null);

(statearr_47181_48207[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (17))){
var inst_47115 = (state_47161[(14)]);
var inst_47107 = (state_47161[(18)]);
var inst_47137 = (inst_47107.cljs$core$IFn$_invoke$arity$1 ? inst_47107.cljs$core$IFn$_invoke$arity$1(inst_47115) : inst_47107.call(null,inst_47115));
var inst_47138 = cljs.core.not(inst_47137);
var state_47161__$1 = state_47161;
var statearr_47182_48208 = state_47161__$1;
(statearr_47182_48208[(2)] = inst_47138);

(statearr_47182_48208[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (3))){
var inst_47159 = (state_47161[(2)]);
var state_47161__$1 = state_47161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47161__$1,inst_47159);
} else {
if((state_val_47162 === (12))){
var state_47161__$1 = state_47161;
var statearr_47183_48215 = state_47161__$1;
(statearr_47183_48215[(2)] = null);

(statearr_47183_48215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (2))){
var inst_47102 = (state_47161[(10)]);
var inst_47105 = (state_47161[(12)]);
var inst_47105__$1 = cljs.core.__destructure_map(inst_47102);
var inst_47106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47105__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47105__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47105__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47161__$1 = (function (){var statearr_47184 = state_47161;
(statearr_47184[(18)] = inst_47107);

(statearr_47184[(16)] = inst_47106);

(statearr_47184[(12)] = inst_47105__$1);

return statearr_47184;
})();
return cljs.core.async.ioc_alts_BANG_(state_47161__$1,(4),inst_47108);
} else {
if((state_val_47162 === (23))){
var inst_47146 = (state_47161[(2)]);
var state_47161__$1 = state_47161;
if(cljs.core.truth_(inst_47146)){
var statearr_47185_48216 = state_47161__$1;
(statearr_47185_48216[(1)] = (24));

} else {
var statearr_47186_48217 = state_47161__$1;
(statearr_47186_48217[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (19))){
var inst_47141 = (state_47161[(2)]);
var state_47161__$1 = state_47161;
var statearr_47187_48218 = state_47161__$1;
(statearr_47187_48218[(2)] = inst_47141);

(statearr_47187_48218[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (11))){
var inst_47115 = (state_47161[(14)]);
var inst_47125 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47115);
var state_47161__$1 = state_47161;
var statearr_47188_48219 = state_47161__$1;
(statearr_47188_48219[(2)] = inst_47125);

(statearr_47188_48219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (9))){
var inst_47115 = (state_47161[(14)]);
var inst_47132 = (state_47161[(19)]);
var inst_47106 = (state_47161[(16)]);
var inst_47132__$1 = (inst_47106.cljs$core$IFn$_invoke$arity$1 ? inst_47106.cljs$core$IFn$_invoke$arity$1(inst_47115) : inst_47106.call(null,inst_47115));
var state_47161__$1 = (function (){var statearr_47189 = state_47161;
(statearr_47189[(19)] = inst_47132__$1);

return statearr_47189;
})();
if(cljs.core.truth_(inst_47132__$1)){
var statearr_47190_48220 = state_47161__$1;
(statearr_47190_48220[(1)] = (14));

} else {
var statearr_47191_48221 = state_47161__$1;
(statearr_47191_48221[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (5))){
var inst_47116 = (state_47161[(13)]);
var state_47161__$1 = state_47161;
var statearr_47192_48222 = state_47161__$1;
(statearr_47192_48222[(2)] = inst_47116);

(statearr_47192_48222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (14))){
var inst_47132 = (state_47161[(19)]);
var state_47161__$1 = state_47161;
var statearr_47193_48223 = state_47161__$1;
(statearr_47193_48223[(2)] = inst_47132);

(statearr_47193_48223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (26))){
var inst_47151 = (state_47161[(2)]);
var state_47161__$1 = state_47161;
var statearr_47194_48224 = state_47161__$1;
(statearr_47194_48224[(2)] = inst_47151);

(statearr_47194_48224[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (16))){
var inst_47143 = (state_47161[(2)]);
var state_47161__$1 = state_47161;
if(cljs.core.truth_(inst_47143)){
var statearr_47195_48225 = state_47161__$1;
(statearr_47195_48225[(1)] = (20));

} else {
var statearr_47196_48226 = state_47161__$1;
(statearr_47196_48226[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (10))){
var inst_47157 = (state_47161[(2)]);
var state_47161__$1 = state_47161;
var statearr_47197_48227 = state_47161__$1;
(statearr_47197_48227[(2)] = inst_47157);

(statearr_47197_48227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (18))){
var inst_47135 = (state_47161[(15)]);
var state_47161__$1 = state_47161;
var statearr_47198_48228 = state_47161__$1;
(statearr_47198_48228[(2)] = inst_47135);

(statearr_47198_48228[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47162 === (8))){
var inst_47114 = (state_47161[(7)]);
var inst_47123 = (inst_47114 == null);
var state_47161__$1 = state_47161;
if(cljs.core.truth_(inst_47123)){
var statearr_47199_48229 = state_47161__$1;
(statearr_47199_48229[(1)] = (11));

} else {
var statearr_47200_48230 = state_47161__$1;
(statearr_47200_48230[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__46189__auto__ = null;
var cljs$core$async$mix_$_state_machine__46189__auto____0 = (function (){
var statearr_47201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47201[(0)] = cljs$core$async$mix_$_state_machine__46189__auto__);

(statearr_47201[(1)] = (1));

return statearr_47201;
});
var cljs$core$async$mix_$_state_machine__46189__auto____1 = (function (state_47161){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_47161);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e47202){var ex__46192__auto__ = e47202;
var statearr_47203_48231 = state_47161;
(statearr_47203_48231[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_47161[(4)]))){
var statearr_47204_48232 = state_47161;
(statearr_47204_48232[(1)] = cljs.core.first((state_47161[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48233 = state_47161;
state_47161 = G__48233;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46189__auto__ = function(state_47161){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46189__auto____1.call(this,state_47161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46189__auto____0;
cljs$core$async$mix_$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46189__auto____1;
return cljs$core$async$mix_$_state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_47205 = f__46268__auto__();
(statearr_47205[(6)] = c__46267__auto___48183);

return statearr_47205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_48240 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48240(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48241 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48241(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48242 = (function() {
var G__48243 = null;
var G__48243__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48243__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48243 = function(p,v){
switch(arguments.length){
case 1:
return G__48243__1.call(this,p);
case 2:
return G__48243__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48243.cljs$core$IFn$_invoke$arity$1 = G__48243__1;
G__48243.cljs$core$IFn$_invoke$arity$2 = G__48243__2;
return G__48243;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47207 = arguments.length;
switch (G__47207) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48242(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48242(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__47210 = arguments.length;
switch (G__47210) {
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
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47208_SHARP_){
if(cljs.core.truth_((p1__47208_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47208_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47208_SHARP_.call(null,topic)))){
return p1__47208_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47208_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47211 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47212){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47212 = meta47212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47213,meta47212__$1){
var self__ = this;
var _47213__$1 = this;
return (new cljs.core.async.t_cljs$core$async47211(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47212__$1));
}));

(cljs.core.async.t_cljs$core$async47211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47213){
var self__ = this;
var _47213__$1 = this;
return self__.meta47212;
}));

(cljs.core.async.t_cljs$core$async47211.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47211.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47211.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47211.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async47211.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47211.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47212","meta47212",-207722438,null)], null);
}));

(cljs.core.async.t_cljs$core$async47211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47211");

(cljs.core.async.t_cljs$core$async47211.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47211.
 */
cljs.core.async.__GT_t_cljs$core$async47211 = (function cljs$core$async$__GT_t_cljs$core$async47211(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47212){
return (new cljs.core.async.t_cljs$core$async47211(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47212));
});

}

return (new cljs.core.async.t_cljs$core$async47211(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46267__auto___48252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_47285){
var state_val_47286 = (state_47285[(1)]);
if((state_val_47286 === (7))){
var inst_47281 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47287_48253 = state_47285__$1;
(statearr_47287_48253[(2)] = inst_47281);

(statearr_47287_48253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (20))){
var state_47285__$1 = state_47285;
var statearr_47288_48254 = state_47285__$1;
(statearr_47288_48254[(2)] = null);

(statearr_47288_48254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (1))){
var state_47285__$1 = state_47285;
var statearr_47289_48255 = state_47285__$1;
(statearr_47289_48255[(2)] = null);

(statearr_47289_48255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (24))){
var inst_47264 = (state_47285[(7)]);
var inst_47273 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47264);
var state_47285__$1 = state_47285;
var statearr_47290_48256 = state_47285__$1;
(statearr_47290_48256[(2)] = inst_47273);

(statearr_47290_48256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (4))){
var inst_47216 = (state_47285[(8)]);
var inst_47216__$1 = (state_47285[(2)]);
var inst_47217 = (inst_47216__$1 == null);
var state_47285__$1 = (function (){var statearr_47291 = state_47285;
(statearr_47291[(8)] = inst_47216__$1);

return statearr_47291;
})();
if(cljs.core.truth_(inst_47217)){
var statearr_47292_48257 = state_47285__$1;
(statearr_47292_48257[(1)] = (5));

} else {
var statearr_47293_48258 = state_47285__$1;
(statearr_47293_48258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (15))){
var inst_47258 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47294_48259 = state_47285__$1;
(statearr_47294_48259[(2)] = inst_47258);

(statearr_47294_48259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (21))){
var inst_47278 = (state_47285[(2)]);
var state_47285__$1 = (function (){var statearr_47295 = state_47285;
(statearr_47295[(9)] = inst_47278);

return statearr_47295;
})();
var statearr_47296_48260 = state_47285__$1;
(statearr_47296_48260[(2)] = null);

(statearr_47296_48260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (13))){
var inst_47240 = (state_47285[(10)]);
var inst_47242 = cljs.core.chunked_seq_QMARK_(inst_47240);
var state_47285__$1 = state_47285;
if(inst_47242){
var statearr_47297_48261 = state_47285__$1;
(statearr_47297_48261[(1)] = (16));

} else {
var statearr_47298_48264 = state_47285__$1;
(statearr_47298_48264[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (22))){
var inst_47270 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
if(cljs.core.truth_(inst_47270)){
var statearr_47299_48269 = state_47285__$1;
(statearr_47299_48269[(1)] = (23));

} else {
var statearr_47300_48270 = state_47285__$1;
(statearr_47300_48270[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (6))){
var inst_47264 = (state_47285[(7)]);
var inst_47216 = (state_47285[(8)]);
var inst_47266 = (state_47285[(11)]);
var inst_47264__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47216) : topic_fn.call(null,inst_47216));
var inst_47265 = cljs.core.deref(mults);
var inst_47266__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47265,inst_47264__$1);
var state_47285__$1 = (function (){var statearr_47301 = state_47285;
(statearr_47301[(7)] = inst_47264__$1);

(statearr_47301[(11)] = inst_47266__$1);

return statearr_47301;
})();
if(cljs.core.truth_(inst_47266__$1)){
var statearr_47302_48271 = state_47285__$1;
(statearr_47302_48271[(1)] = (19));

} else {
var statearr_47303_48272 = state_47285__$1;
(statearr_47303_48272[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (25))){
var inst_47275 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47304_48273 = state_47285__$1;
(statearr_47304_48273[(2)] = inst_47275);

(statearr_47304_48273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (17))){
var inst_47240 = (state_47285[(10)]);
var inst_47249 = cljs.core.first(inst_47240);
var inst_47250 = cljs.core.async.muxch_STAR_(inst_47249);
var inst_47251 = cljs.core.async.close_BANG_(inst_47250);
var inst_47252 = cljs.core.next(inst_47240);
var inst_47226 = inst_47252;
var inst_47227 = null;
var inst_47228 = (0);
var inst_47229 = (0);
var state_47285__$1 = (function (){var statearr_47305 = state_47285;
(statearr_47305[(12)] = inst_47226);

(statearr_47305[(13)] = inst_47228);

(statearr_47305[(14)] = inst_47251);

(statearr_47305[(15)] = inst_47229);

(statearr_47305[(16)] = inst_47227);

return statearr_47305;
})();
var statearr_47306_48274 = state_47285__$1;
(statearr_47306_48274[(2)] = null);

(statearr_47306_48274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (3))){
var inst_47283 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47285__$1,inst_47283);
} else {
if((state_val_47286 === (12))){
var inst_47260 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47307_48275 = state_47285__$1;
(statearr_47307_48275[(2)] = inst_47260);

(statearr_47307_48275[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (2))){
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47285__$1,(4),ch);
} else {
if((state_val_47286 === (23))){
var state_47285__$1 = state_47285;
var statearr_47308_48276 = state_47285__$1;
(statearr_47308_48276[(2)] = null);

(statearr_47308_48276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (19))){
var inst_47216 = (state_47285[(8)]);
var inst_47266 = (state_47285[(11)]);
var inst_47268 = cljs.core.async.muxch_STAR_(inst_47266);
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47285__$1,(22),inst_47268,inst_47216);
} else {
if((state_val_47286 === (11))){
var inst_47226 = (state_47285[(12)]);
var inst_47240 = (state_47285[(10)]);
var inst_47240__$1 = cljs.core.seq(inst_47226);
var state_47285__$1 = (function (){var statearr_47309 = state_47285;
(statearr_47309[(10)] = inst_47240__$1);

return statearr_47309;
})();
if(inst_47240__$1){
var statearr_47310_48277 = state_47285__$1;
(statearr_47310_48277[(1)] = (13));

} else {
var statearr_47311_48278 = state_47285__$1;
(statearr_47311_48278[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (9))){
var inst_47262 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47312_48279 = state_47285__$1;
(statearr_47312_48279[(2)] = inst_47262);

(statearr_47312_48279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (5))){
var inst_47223 = cljs.core.deref(mults);
var inst_47224 = cljs.core.vals(inst_47223);
var inst_47225 = cljs.core.seq(inst_47224);
var inst_47226 = inst_47225;
var inst_47227 = null;
var inst_47228 = (0);
var inst_47229 = (0);
var state_47285__$1 = (function (){var statearr_47313 = state_47285;
(statearr_47313[(12)] = inst_47226);

(statearr_47313[(13)] = inst_47228);

(statearr_47313[(15)] = inst_47229);

(statearr_47313[(16)] = inst_47227);

return statearr_47313;
})();
var statearr_47314_48280 = state_47285__$1;
(statearr_47314_48280[(2)] = null);

(statearr_47314_48280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (14))){
var state_47285__$1 = state_47285;
var statearr_47318_48281 = state_47285__$1;
(statearr_47318_48281[(2)] = null);

(statearr_47318_48281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (16))){
var inst_47240 = (state_47285[(10)]);
var inst_47244 = cljs.core.chunk_first(inst_47240);
var inst_47245 = cljs.core.chunk_rest(inst_47240);
var inst_47246 = cljs.core.count(inst_47244);
var inst_47226 = inst_47245;
var inst_47227 = inst_47244;
var inst_47228 = inst_47246;
var inst_47229 = (0);
var state_47285__$1 = (function (){var statearr_47319 = state_47285;
(statearr_47319[(12)] = inst_47226);

(statearr_47319[(13)] = inst_47228);

(statearr_47319[(15)] = inst_47229);

(statearr_47319[(16)] = inst_47227);

return statearr_47319;
})();
var statearr_47320_48282 = state_47285__$1;
(statearr_47320_48282[(2)] = null);

(statearr_47320_48282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (10))){
var inst_47226 = (state_47285[(12)]);
var inst_47228 = (state_47285[(13)]);
var inst_47229 = (state_47285[(15)]);
var inst_47227 = (state_47285[(16)]);
var inst_47234 = cljs.core._nth(inst_47227,inst_47229);
var inst_47235 = cljs.core.async.muxch_STAR_(inst_47234);
var inst_47236 = cljs.core.async.close_BANG_(inst_47235);
var inst_47237 = (inst_47229 + (1));
var tmp47315 = inst_47226;
var tmp47316 = inst_47228;
var tmp47317 = inst_47227;
var inst_47226__$1 = tmp47315;
var inst_47227__$1 = tmp47317;
var inst_47228__$1 = tmp47316;
var inst_47229__$1 = inst_47237;
var state_47285__$1 = (function (){var statearr_47321 = state_47285;
(statearr_47321[(12)] = inst_47226__$1);

(statearr_47321[(13)] = inst_47228__$1);

(statearr_47321[(15)] = inst_47229__$1);

(statearr_47321[(17)] = inst_47236);

(statearr_47321[(16)] = inst_47227__$1);

return statearr_47321;
})();
var statearr_47322_48283 = state_47285__$1;
(statearr_47322_48283[(2)] = null);

(statearr_47322_48283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (18))){
var inst_47255 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47323_48284 = state_47285__$1;
(statearr_47323_48284[(2)] = inst_47255);

(statearr_47323_48284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (8))){
var inst_47228 = (state_47285[(13)]);
var inst_47229 = (state_47285[(15)]);
var inst_47231 = (inst_47229 < inst_47228);
var inst_47232 = inst_47231;
var state_47285__$1 = state_47285;
if(cljs.core.truth_(inst_47232)){
var statearr_47324_48285 = state_47285__$1;
(statearr_47324_48285[(1)] = (10));

} else {
var statearr_47325_48286 = state_47285__$1;
(statearr_47325_48286[(1)] = (11));

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
var cljs$core$async$state_machine__46189__auto__ = null;
var cljs$core$async$state_machine__46189__auto____0 = (function (){
var statearr_47326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47326[(0)] = cljs$core$async$state_machine__46189__auto__);

(statearr_47326[(1)] = (1));

return statearr_47326;
});
var cljs$core$async$state_machine__46189__auto____1 = (function (state_47285){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_47285);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e47327){var ex__46192__auto__ = e47327;
var statearr_47328_48287 = state_47285;
(statearr_47328_48287[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_47285[(4)]))){
var statearr_47329_48288 = state_47285;
(statearr_47329_48288[(1)] = cljs.core.first((state_47285[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48289 = state_47285;
state_47285 = G__48289;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$state_machine__46189__auto__ = function(state_47285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46189__auto____1.call(this,state_47285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46189__auto____0;
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46189__auto____1;
return cljs$core$async$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_47330 = f__46268__auto__();
(statearr_47330[(6)] = c__46267__auto___48252);

return statearr_47330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
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
var G__47332 = arguments.length;
switch (G__47332) {
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
var G__47334 = arguments.length;
switch (G__47334) {
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
var G__47336 = arguments.length;
switch (G__47336) {
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
var c__46267__auto___48293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_47379){
var state_val_47380 = (state_47379[(1)]);
if((state_val_47380 === (7))){
var state_47379__$1 = state_47379;
var statearr_47381_48294 = state_47379__$1;
(statearr_47381_48294[(2)] = null);

(statearr_47381_48294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (1))){
var state_47379__$1 = state_47379;
var statearr_47382_48295 = state_47379__$1;
(statearr_47382_48295[(2)] = null);

(statearr_47382_48295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (4))){
var inst_47339 = (state_47379[(7)]);
var inst_47340 = (state_47379[(8)]);
var inst_47342 = (inst_47340 < inst_47339);
var state_47379__$1 = state_47379;
if(cljs.core.truth_(inst_47342)){
var statearr_47383_48296 = state_47379__$1;
(statearr_47383_48296[(1)] = (6));

} else {
var statearr_47384_48297 = state_47379__$1;
(statearr_47384_48297[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (15))){
var inst_47365 = (state_47379[(9)]);
var inst_47370 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47365);
var state_47379__$1 = state_47379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47379__$1,(17),out,inst_47370);
} else {
if((state_val_47380 === (13))){
var inst_47365 = (state_47379[(9)]);
var inst_47365__$1 = (state_47379[(2)]);
var inst_47366 = cljs.core.some(cljs.core.nil_QMARK_,inst_47365__$1);
var state_47379__$1 = (function (){var statearr_47385 = state_47379;
(statearr_47385[(9)] = inst_47365__$1);

return statearr_47385;
})();
if(cljs.core.truth_(inst_47366)){
var statearr_47386_48299 = state_47379__$1;
(statearr_47386_48299[(1)] = (14));

} else {
var statearr_47387_48300 = state_47379__$1;
(statearr_47387_48300[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (6))){
var state_47379__$1 = state_47379;
var statearr_47388_48305 = state_47379__$1;
(statearr_47388_48305[(2)] = null);

(statearr_47388_48305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (17))){
var inst_47372 = (state_47379[(2)]);
var state_47379__$1 = (function (){var statearr_47390 = state_47379;
(statearr_47390[(10)] = inst_47372);

return statearr_47390;
})();
var statearr_47391_48306 = state_47379__$1;
(statearr_47391_48306[(2)] = null);

(statearr_47391_48306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (3))){
var inst_47377 = (state_47379[(2)]);
var state_47379__$1 = state_47379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47379__$1,inst_47377);
} else {
if((state_val_47380 === (12))){
var _ = (function (){var statearr_47392 = state_47379;
(statearr_47392[(4)] = cljs.core.rest((state_47379[(4)])));

return statearr_47392;
})();
var state_47379__$1 = state_47379;
var ex47389 = (state_47379__$1[(2)]);
var statearr_47393_48307 = state_47379__$1;
(statearr_47393_48307[(5)] = ex47389);


if((ex47389 instanceof Object)){
var statearr_47394_48308 = state_47379__$1;
(statearr_47394_48308[(1)] = (11));

(statearr_47394_48308[(5)] = null);

} else {
throw ex47389;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (2))){
var inst_47338 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47339 = cnt;
var inst_47340 = (0);
var state_47379__$1 = (function (){var statearr_47395 = state_47379;
(statearr_47395[(11)] = inst_47338);

(statearr_47395[(7)] = inst_47339);

(statearr_47395[(8)] = inst_47340);

return statearr_47395;
})();
var statearr_47396_48309 = state_47379__$1;
(statearr_47396_48309[(2)] = null);

(statearr_47396_48309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (11))){
var inst_47344 = (state_47379[(2)]);
var inst_47345 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47379__$1 = (function (){var statearr_47397 = state_47379;
(statearr_47397[(12)] = inst_47344);

return statearr_47397;
})();
var statearr_47398_48310 = state_47379__$1;
(statearr_47398_48310[(2)] = inst_47345);

(statearr_47398_48310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (9))){
var inst_47340 = (state_47379[(8)]);
var _ = (function (){var statearr_47399 = state_47379;
(statearr_47399[(4)] = cljs.core.cons((12),(state_47379[(4)])));

return statearr_47399;
})();
var inst_47351 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47340) : chs__$1.call(null,inst_47340));
var inst_47352 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47340) : done.call(null,inst_47340));
var inst_47353 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47351,inst_47352);
var ___$1 = (function (){var statearr_47400 = state_47379;
(statearr_47400[(4)] = cljs.core.rest((state_47379[(4)])));

return statearr_47400;
})();
var state_47379__$1 = state_47379;
var statearr_47401_48311 = state_47379__$1;
(statearr_47401_48311[(2)] = inst_47353);

(statearr_47401_48311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (5))){
var inst_47363 = (state_47379[(2)]);
var state_47379__$1 = (function (){var statearr_47402 = state_47379;
(statearr_47402[(13)] = inst_47363);

return statearr_47402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47379__$1,(13),dchan);
} else {
if((state_val_47380 === (14))){
var inst_47368 = cljs.core.async.close_BANG_(out);
var state_47379__$1 = state_47379;
var statearr_47403_48312 = state_47379__$1;
(statearr_47403_48312[(2)] = inst_47368);

(statearr_47403_48312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (16))){
var inst_47375 = (state_47379[(2)]);
var state_47379__$1 = state_47379;
var statearr_47404_48313 = state_47379__$1;
(statearr_47404_48313[(2)] = inst_47375);

(statearr_47404_48313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (10))){
var inst_47340 = (state_47379[(8)]);
var inst_47356 = (state_47379[(2)]);
var inst_47357 = (inst_47340 + (1));
var inst_47340__$1 = inst_47357;
var state_47379__$1 = (function (){var statearr_47405 = state_47379;
(statearr_47405[(14)] = inst_47356);

(statearr_47405[(8)] = inst_47340__$1);

return statearr_47405;
})();
var statearr_47406_48314 = state_47379__$1;
(statearr_47406_48314[(2)] = null);

(statearr_47406_48314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47380 === (8))){
var inst_47361 = (state_47379[(2)]);
var state_47379__$1 = state_47379;
var statearr_47407_48315 = state_47379__$1;
(statearr_47407_48315[(2)] = inst_47361);

(statearr_47407_48315[(1)] = (5));


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
var cljs$core$async$state_machine__46189__auto__ = null;
var cljs$core$async$state_machine__46189__auto____0 = (function (){
var statearr_47408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47408[(0)] = cljs$core$async$state_machine__46189__auto__);

(statearr_47408[(1)] = (1));

return statearr_47408;
});
var cljs$core$async$state_machine__46189__auto____1 = (function (state_47379){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_47379);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e47409){var ex__46192__auto__ = e47409;
var statearr_47410_48316 = state_47379;
(statearr_47410_48316[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_47379[(4)]))){
var statearr_47411_48317 = state_47379;
(statearr_47411_48317[(1)] = cljs.core.first((state_47379[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48318 = state_47379;
state_47379 = G__48318;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$state_machine__46189__auto__ = function(state_47379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46189__auto____1.call(this,state_47379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46189__auto____0;
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46189__auto____1;
return cljs$core$async$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_47412 = f__46268__auto__();
(statearr_47412[(6)] = c__46267__auto___48293);

return statearr_47412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));


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
var G__47415 = arguments.length;
switch (G__47415) {
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
var c__46267__auto___48321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_47447){
var state_val_47448 = (state_47447[(1)]);
if((state_val_47448 === (7))){
var inst_47427 = (state_47447[(7)]);
var inst_47426 = (state_47447[(8)]);
var inst_47426__$1 = (state_47447[(2)]);
var inst_47427__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47426__$1,(0),null);
var inst_47428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47426__$1,(1),null);
var inst_47429 = (inst_47427__$1 == null);
var state_47447__$1 = (function (){var statearr_47449 = state_47447;
(statearr_47449[(9)] = inst_47428);

(statearr_47449[(7)] = inst_47427__$1);

(statearr_47449[(8)] = inst_47426__$1);

return statearr_47449;
})();
if(cljs.core.truth_(inst_47429)){
var statearr_47450_48323 = state_47447__$1;
(statearr_47450_48323[(1)] = (8));

} else {
var statearr_47451_48324 = state_47447__$1;
(statearr_47451_48324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (1))){
var inst_47416 = cljs.core.vec(chs);
var inst_47417 = inst_47416;
var state_47447__$1 = (function (){var statearr_47452 = state_47447;
(statearr_47452[(10)] = inst_47417);

return statearr_47452;
})();
var statearr_47453_48325 = state_47447__$1;
(statearr_47453_48325[(2)] = null);

(statearr_47453_48325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (4))){
var inst_47417 = (state_47447[(10)]);
var state_47447__$1 = state_47447;
return cljs.core.async.ioc_alts_BANG_(state_47447__$1,(7),inst_47417);
} else {
if((state_val_47448 === (6))){
var inst_47443 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47454_48326 = state_47447__$1;
(statearr_47454_48326[(2)] = inst_47443);

(statearr_47454_48326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (3))){
var inst_47445 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47447__$1,inst_47445);
} else {
if((state_val_47448 === (2))){
var inst_47417 = (state_47447[(10)]);
var inst_47419 = cljs.core.count(inst_47417);
var inst_47420 = (inst_47419 > (0));
var state_47447__$1 = state_47447;
if(cljs.core.truth_(inst_47420)){
var statearr_47456_48327 = state_47447__$1;
(statearr_47456_48327[(1)] = (4));

} else {
var statearr_47457_48328 = state_47447__$1;
(statearr_47457_48328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (11))){
var inst_47417 = (state_47447[(10)]);
var inst_47436 = (state_47447[(2)]);
var tmp47455 = inst_47417;
var inst_47417__$1 = tmp47455;
var state_47447__$1 = (function (){var statearr_47458 = state_47447;
(statearr_47458[(11)] = inst_47436);

(statearr_47458[(10)] = inst_47417__$1);

return statearr_47458;
})();
var statearr_47459_48329 = state_47447__$1;
(statearr_47459_48329[(2)] = null);

(statearr_47459_48329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (9))){
var inst_47427 = (state_47447[(7)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47447__$1,(11),out,inst_47427);
} else {
if((state_val_47448 === (5))){
var inst_47441 = cljs.core.async.close_BANG_(out);
var state_47447__$1 = state_47447;
var statearr_47460_48331 = state_47447__$1;
(statearr_47460_48331[(2)] = inst_47441);

(statearr_47460_48331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (10))){
var inst_47439 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47461_48333 = state_47447__$1;
(statearr_47461_48333[(2)] = inst_47439);

(statearr_47461_48333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (8))){
var inst_47428 = (state_47447[(9)]);
var inst_47417 = (state_47447[(10)]);
var inst_47427 = (state_47447[(7)]);
var inst_47426 = (state_47447[(8)]);
var inst_47431 = (function (){var cs = inst_47417;
var vec__47422 = inst_47426;
var v = inst_47427;
var c = inst_47428;
return (function (p1__47413_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47413_SHARP_);
});
})();
var inst_47432 = cljs.core.filterv(inst_47431,inst_47417);
var inst_47417__$1 = inst_47432;
var state_47447__$1 = (function (){var statearr_47462 = state_47447;
(statearr_47462[(10)] = inst_47417__$1);

return statearr_47462;
})();
var statearr_47463_48334 = state_47447__$1;
(statearr_47463_48334[(2)] = null);

(statearr_47463_48334[(1)] = (2));


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
var cljs$core$async$state_machine__46189__auto__ = null;
var cljs$core$async$state_machine__46189__auto____0 = (function (){
var statearr_47464 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47464[(0)] = cljs$core$async$state_machine__46189__auto__);

(statearr_47464[(1)] = (1));

return statearr_47464;
});
var cljs$core$async$state_machine__46189__auto____1 = (function (state_47447){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_47447);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e47465){var ex__46192__auto__ = e47465;
var statearr_47466_48335 = state_47447;
(statearr_47466_48335[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_47447[(4)]))){
var statearr_47467_48336 = state_47447;
(statearr_47467_48336[(1)] = cljs.core.first((state_47447[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48337 = state_47447;
state_47447 = G__48337;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$state_machine__46189__auto__ = function(state_47447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46189__auto____1.call(this,state_47447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46189__auto____0;
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46189__auto____1;
return cljs$core$async$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_47468 = f__46268__auto__();
(statearr_47468[(6)] = c__46267__auto___48321);

return statearr_47468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
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
var G__47470 = arguments.length;
switch (G__47470) {
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
var c__46267__auto___48339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_47494){
var state_val_47495 = (state_47494[(1)]);
if((state_val_47495 === (7))){
var inst_47476 = (state_47494[(7)]);
var inst_47476__$1 = (state_47494[(2)]);
var inst_47477 = (inst_47476__$1 == null);
var inst_47478 = cljs.core.not(inst_47477);
var state_47494__$1 = (function (){var statearr_47496 = state_47494;
(statearr_47496[(7)] = inst_47476__$1);

return statearr_47496;
})();
if(inst_47478){
var statearr_47497_48340 = state_47494__$1;
(statearr_47497_48340[(1)] = (8));

} else {
var statearr_47498_48341 = state_47494__$1;
(statearr_47498_48341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (1))){
var inst_47471 = (0);
var state_47494__$1 = (function (){var statearr_47499 = state_47494;
(statearr_47499[(8)] = inst_47471);

return statearr_47499;
})();
var statearr_47500_48342 = state_47494__$1;
(statearr_47500_48342[(2)] = null);

(statearr_47500_48342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (4))){
var state_47494__$1 = state_47494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47494__$1,(7),ch);
} else {
if((state_val_47495 === (6))){
var inst_47489 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47501_48343 = state_47494__$1;
(statearr_47501_48343[(2)] = inst_47489);

(statearr_47501_48343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (3))){
var inst_47491 = (state_47494[(2)]);
var inst_47492 = cljs.core.async.close_BANG_(out);
var state_47494__$1 = (function (){var statearr_47502 = state_47494;
(statearr_47502[(9)] = inst_47491);

return statearr_47502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47494__$1,inst_47492);
} else {
if((state_val_47495 === (2))){
var inst_47471 = (state_47494[(8)]);
var inst_47473 = (inst_47471 < n);
var state_47494__$1 = state_47494;
if(cljs.core.truth_(inst_47473)){
var statearr_47503_48345 = state_47494__$1;
(statearr_47503_48345[(1)] = (4));

} else {
var statearr_47504_48346 = state_47494__$1;
(statearr_47504_48346[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (11))){
var inst_47471 = (state_47494[(8)]);
var inst_47481 = (state_47494[(2)]);
var inst_47482 = (inst_47471 + (1));
var inst_47471__$1 = inst_47482;
var state_47494__$1 = (function (){var statearr_47505 = state_47494;
(statearr_47505[(8)] = inst_47471__$1);

(statearr_47505[(10)] = inst_47481);

return statearr_47505;
})();
var statearr_47506_48348 = state_47494__$1;
(statearr_47506_48348[(2)] = null);

(statearr_47506_48348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (9))){
var state_47494__$1 = state_47494;
var statearr_47507_48349 = state_47494__$1;
(statearr_47507_48349[(2)] = null);

(statearr_47507_48349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (5))){
var state_47494__$1 = state_47494;
var statearr_47508_48350 = state_47494__$1;
(statearr_47508_48350[(2)] = null);

(statearr_47508_48350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (10))){
var inst_47486 = (state_47494[(2)]);
var state_47494__$1 = state_47494;
var statearr_47509_48351 = state_47494__$1;
(statearr_47509_48351[(2)] = inst_47486);

(statearr_47509_48351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47495 === (8))){
var inst_47476 = (state_47494[(7)]);
var state_47494__$1 = state_47494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47494__$1,(11),out,inst_47476);
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
var cljs$core$async$state_machine__46189__auto__ = null;
var cljs$core$async$state_machine__46189__auto____0 = (function (){
var statearr_47510 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47510[(0)] = cljs$core$async$state_machine__46189__auto__);

(statearr_47510[(1)] = (1));

return statearr_47510;
});
var cljs$core$async$state_machine__46189__auto____1 = (function (state_47494){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_47494);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e47511){var ex__46192__auto__ = e47511;
var statearr_47512_48352 = state_47494;
(statearr_47512_48352[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_47494[(4)]))){
var statearr_47513_48353 = state_47494;
(statearr_47513_48353[(1)] = cljs.core.first((state_47494[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48354 = state_47494;
state_47494 = G__48354;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$state_machine__46189__auto__ = function(state_47494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46189__auto____1.call(this,state_47494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46189__auto____0;
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46189__auto____1;
return cljs$core$async$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_47514 = f__46268__auto__();
(statearr_47514[(6)] = c__46267__auto___48339);

return statearr_47514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47516 = (function (f,ch,meta47517){
this.f = f;
this.ch = ch;
this.meta47517 = meta47517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47518,meta47517__$1){
var self__ = this;
var _47518__$1 = this;
return (new cljs.core.async.t_cljs$core$async47516(self__.f,self__.ch,meta47517__$1));
}));

(cljs.core.async.t_cljs$core$async47516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47518){
var self__ = this;
var _47518__$1 = this;
return self__.meta47517;
}));

(cljs.core.async.t_cljs$core$async47516.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47516.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47516.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47519 = (function (f,ch,meta47517,_,fn1,meta47520){
this.f = f;
this.ch = ch;
this.meta47517 = meta47517;
this._ = _;
this.fn1 = fn1;
this.meta47520 = meta47520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47521,meta47520__$1){
var self__ = this;
var _47521__$1 = this;
return (new cljs.core.async.t_cljs$core$async47519(self__.f,self__.ch,self__.meta47517,self__._,self__.fn1,meta47520__$1));
}));

(cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47521){
var self__ = this;
var _47521__$1 = this;
return self__.meta47520;
}));

(cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47515_SHARP_){
var G__47522 = (((p1__47515_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47515_SHARP_) : self__.f.call(null,p1__47515_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47522) : f1.call(null,G__47522));
});
}));

(cljs.core.async.t_cljs$core$async47519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47517","meta47517",-475670626,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47516","cljs.core.async/t_cljs$core$async47516",-2028816652,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47520","meta47520",-572164692,null)], null);
}));

(cljs.core.async.t_cljs$core$async47519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47519");

(cljs.core.async.t_cljs$core$async47519.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47519.
 */
cljs.core.async.__GT_t_cljs$core$async47519 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47519(f__$1,ch__$1,meta47517__$1,___$2,fn1__$1,meta47520){
return (new cljs.core.async.t_cljs$core$async47519(f__$1,ch__$1,meta47517__$1,___$2,fn1__$1,meta47520));
});

}

return (new cljs.core.async.t_cljs$core$async47519(self__.f,self__.ch,self__.meta47517,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47523 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47523) : self__.f.call(null,G__47523));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47516.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47517","meta47517",-475670626,null)], null);
}));

(cljs.core.async.t_cljs$core$async47516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47516");

(cljs.core.async.t_cljs$core$async47516.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47516.
 */
cljs.core.async.__GT_t_cljs$core$async47516 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47516(f__$1,ch__$1,meta47517){
return (new cljs.core.async.t_cljs$core$async47516(f__$1,ch__$1,meta47517));
});

}

return (new cljs.core.async.t_cljs$core$async47516(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47524 = (function (f,ch,meta47525){
this.f = f;
this.ch = ch;
this.meta47525 = meta47525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47526,meta47525__$1){
var self__ = this;
var _47526__$1 = this;
return (new cljs.core.async.t_cljs$core$async47524(self__.f,self__.ch,meta47525__$1));
}));

(cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47526){
var self__ = this;
var _47526__$1 = this;
return self__.meta47525;
}));

(cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47525","meta47525",-1825528530,null)], null);
}));

(cljs.core.async.t_cljs$core$async47524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47524");

(cljs.core.async.t_cljs$core$async47524.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47524.
 */
cljs.core.async.__GT_t_cljs$core$async47524 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47524(f__$1,ch__$1,meta47525){
return (new cljs.core.async.t_cljs$core$async47524(f__$1,ch__$1,meta47525));
});

}

return (new cljs.core.async.t_cljs$core$async47524(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47527 = (function (p,ch,meta47528){
this.p = p;
this.ch = ch;
this.meta47528 = meta47528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47529,meta47528__$1){
var self__ = this;
var _47529__$1 = this;
return (new cljs.core.async.t_cljs$core$async47527(self__.p,self__.ch,meta47528__$1));
}));

(cljs.core.async.t_cljs$core$async47527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47529){
var self__ = this;
var _47529__$1 = this;
return self__.meta47528;
}));

(cljs.core.async.t_cljs$core$async47527.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47527.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47527.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47527.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47528","meta47528",798877779,null)], null);
}));

(cljs.core.async.t_cljs$core$async47527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47527");

(cljs.core.async.t_cljs$core$async47527.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47527.
 */
cljs.core.async.__GT_t_cljs$core$async47527 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47527(p__$1,ch__$1,meta47528){
return (new cljs.core.async.t_cljs$core$async47527(p__$1,ch__$1,meta47528));
});

}

return (new cljs.core.async.t_cljs$core$async47527(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47531 = arguments.length;
switch (G__47531) {
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
var c__46267__auto___48365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_47552){
var state_val_47553 = (state_47552[(1)]);
if((state_val_47553 === (7))){
var inst_47548 = (state_47552[(2)]);
var state_47552__$1 = state_47552;
var statearr_47554_48369 = state_47552__$1;
(statearr_47554_48369[(2)] = inst_47548);

(statearr_47554_48369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (1))){
var state_47552__$1 = state_47552;
var statearr_47555_48370 = state_47552__$1;
(statearr_47555_48370[(2)] = null);

(statearr_47555_48370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (4))){
var inst_47534 = (state_47552[(7)]);
var inst_47534__$1 = (state_47552[(2)]);
var inst_47535 = (inst_47534__$1 == null);
var state_47552__$1 = (function (){var statearr_47556 = state_47552;
(statearr_47556[(7)] = inst_47534__$1);

return statearr_47556;
})();
if(cljs.core.truth_(inst_47535)){
var statearr_47557_48371 = state_47552__$1;
(statearr_47557_48371[(1)] = (5));

} else {
var statearr_47558_48372 = state_47552__$1;
(statearr_47558_48372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (6))){
var inst_47534 = (state_47552[(7)]);
var inst_47539 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47534) : p.call(null,inst_47534));
var state_47552__$1 = state_47552;
if(cljs.core.truth_(inst_47539)){
var statearr_47559_48376 = state_47552__$1;
(statearr_47559_48376[(1)] = (8));

} else {
var statearr_47560_48377 = state_47552__$1;
(statearr_47560_48377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (3))){
var inst_47550 = (state_47552[(2)]);
var state_47552__$1 = state_47552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47552__$1,inst_47550);
} else {
if((state_val_47553 === (2))){
var state_47552__$1 = state_47552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47552__$1,(4),ch);
} else {
if((state_val_47553 === (11))){
var inst_47542 = (state_47552[(2)]);
var state_47552__$1 = state_47552;
var statearr_47561_48378 = state_47552__$1;
(statearr_47561_48378[(2)] = inst_47542);

(statearr_47561_48378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (9))){
var state_47552__$1 = state_47552;
var statearr_47562_48382 = state_47552__$1;
(statearr_47562_48382[(2)] = null);

(statearr_47562_48382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (5))){
var inst_47537 = cljs.core.async.close_BANG_(out);
var state_47552__$1 = state_47552;
var statearr_47563_48383 = state_47552__$1;
(statearr_47563_48383[(2)] = inst_47537);

(statearr_47563_48383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (10))){
var inst_47545 = (state_47552[(2)]);
var state_47552__$1 = (function (){var statearr_47564 = state_47552;
(statearr_47564[(8)] = inst_47545);

return statearr_47564;
})();
var statearr_47565_48384 = state_47552__$1;
(statearr_47565_48384[(2)] = null);

(statearr_47565_48384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47553 === (8))){
var inst_47534 = (state_47552[(7)]);
var state_47552__$1 = state_47552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47552__$1,(11),out,inst_47534);
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
var cljs$core$async$state_machine__46189__auto__ = null;
var cljs$core$async$state_machine__46189__auto____0 = (function (){
var statearr_47566 = [null,null,null,null,null,null,null,null,null];
(statearr_47566[(0)] = cljs$core$async$state_machine__46189__auto__);

(statearr_47566[(1)] = (1));

return statearr_47566;
});
var cljs$core$async$state_machine__46189__auto____1 = (function (state_47552){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_47552);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e47567){var ex__46192__auto__ = e47567;
var statearr_47568_48388 = state_47552;
(statearr_47568_48388[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_47552[(4)]))){
var statearr_47569_48389 = state_47552;
(statearr_47569_48389[(1)] = cljs.core.first((state_47552[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48391 = state_47552;
state_47552 = G__48391;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$state_machine__46189__auto__ = function(state_47552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46189__auto____1.call(this,state_47552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46189__auto____0;
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46189__auto____1;
return cljs$core$async$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_47570 = f__46268__auto__();
(statearr_47570[(6)] = c__46267__auto___48365);

return statearr_47570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47572 = arguments.length;
switch (G__47572) {
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
var c__46267__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_47634){
var state_val_47635 = (state_47634[(1)]);
if((state_val_47635 === (7))){
var inst_47630 = (state_47634[(2)]);
var state_47634__$1 = state_47634;
var statearr_47636_48396 = state_47634__$1;
(statearr_47636_48396[(2)] = inst_47630);

(statearr_47636_48396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (20))){
var inst_47600 = (state_47634[(7)]);
var inst_47611 = (state_47634[(2)]);
var inst_47612 = cljs.core.next(inst_47600);
var inst_47586 = inst_47612;
var inst_47587 = null;
var inst_47588 = (0);
var inst_47589 = (0);
var state_47634__$1 = (function (){var statearr_47637 = state_47634;
(statearr_47637[(8)] = inst_47586);

(statearr_47637[(9)] = inst_47589);

(statearr_47637[(10)] = inst_47587);

(statearr_47637[(11)] = inst_47588);

(statearr_47637[(12)] = inst_47611);

return statearr_47637;
})();
var statearr_47638_48397 = state_47634__$1;
(statearr_47638_48397[(2)] = null);

(statearr_47638_48397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (1))){
var state_47634__$1 = state_47634;
var statearr_47639_48398 = state_47634__$1;
(statearr_47639_48398[(2)] = null);

(statearr_47639_48398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (4))){
var inst_47575 = (state_47634[(13)]);
var inst_47575__$1 = (state_47634[(2)]);
var inst_47576 = (inst_47575__$1 == null);
var state_47634__$1 = (function (){var statearr_47640 = state_47634;
(statearr_47640[(13)] = inst_47575__$1);

return statearr_47640;
})();
if(cljs.core.truth_(inst_47576)){
var statearr_47641_48399 = state_47634__$1;
(statearr_47641_48399[(1)] = (5));

} else {
var statearr_47642_48400 = state_47634__$1;
(statearr_47642_48400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (15))){
var state_47634__$1 = state_47634;
var statearr_47646_48401 = state_47634__$1;
(statearr_47646_48401[(2)] = null);

(statearr_47646_48401[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (21))){
var state_47634__$1 = state_47634;
var statearr_47647_48402 = state_47634__$1;
(statearr_47647_48402[(2)] = null);

(statearr_47647_48402[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (13))){
var inst_47586 = (state_47634[(8)]);
var inst_47589 = (state_47634[(9)]);
var inst_47587 = (state_47634[(10)]);
var inst_47588 = (state_47634[(11)]);
var inst_47596 = (state_47634[(2)]);
var inst_47597 = (inst_47589 + (1));
var tmp47643 = inst_47586;
var tmp47644 = inst_47587;
var tmp47645 = inst_47588;
var inst_47586__$1 = tmp47643;
var inst_47587__$1 = tmp47644;
var inst_47588__$1 = tmp47645;
var inst_47589__$1 = inst_47597;
var state_47634__$1 = (function (){var statearr_47648 = state_47634;
(statearr_47648[(8)] = inst_47586__$1);

(statearr_47648[(9)] = inst_47589__$1);

(statearr_47648[(10)] = inst_47587__$1);

(statearr_47648[(11)] = inst_47588__$1);

(statearr_47648[(14)] = inst_47596);

return statearr_47648;
})();
var statearr_47649_48405 = state_47634__$1;
(statearr_47649_48405[(2)] = null);

(statearr_47649_48405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (22))){
var state_47634__$1 = state_47634;
var statearr_47650_48406 = state_47634__$1;
(statearr_47650_48406[(2)] = null);

(statearr_47650_48406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (6))){
var inst_47575 = (state_47634[(13)]);
var inst_47584 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47575) : f.call(null,inst_47575));
var inst_47585 = cljs.core.seq(inst_47584);
var inst_47586 = inst_47585;
var inst_47587 = null;
var inst_47588 = (0);
var inst_47589 = (0);
var state_47634__$1 = (function (){var statearr_47651 = state_47634;
(statearr_47651[(8)] = inst_47586);

(statearr_47651[(9)] = inst_47589);

(statearr_47651[(10)] = inst_47587);

(statearr_47651[(11)] = inst_47588);

return statearr_47651;
})();
var statearr_47652_48407 = state_47634__$1;
(statearr_47652_48407[(2)] = null);

(statearr_47652_48407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (17))){
var inst_47600 = (state_47634[(7)]);
var inst_47604 = cljs.core.chunk_first(inst_47600);
var inst_47605 = cljs.core.chunk_rest(inst_47600);
var inst_47606 = cljs.core.count(inst_47604);
var inst_47586 = inst_47605;
var inst_47587 = inst_47604;
var inst_47588 = inst_47606;
var inst_47589 = (0);
var state_47634__$1 = (function (){var statearr_47653 = state_47634;
(statearr_47653[(8)] = inst_47586);

(statearr_47653[(9)] = inst_47589);

(statearr_47653[(10)] = inst_47587);

(statearr_47653[(11)] = inst_47588);

return statearr_47653;
})();
var statearr_47654_48408 = state_47634__$1;
(statearr_47654_48408[(2)] = null);

(statearr_47654_48408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (3))){
var inst_47632 = (state_47634[(2)]);
var state_47634__$1 = state_47634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47634__$1,inst_47632);
} else {
if((state_val_47635 === (12))){
var inst_47620 = (state_47634[(2)]);
var state_47634__$1 = state_47634;
var statearr_47655_48409 = state_47634__$1;
(statearr_47655_48409[(2)] = inst_47620);

(statearr_47655_48409[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (2))){
var state_47634__$1 = state_47634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47634__$1,(4),in$);
} else {
if((state_val_47635 === (23))){
var inst_47628 = (state_47634[(2)]);
var state_47634__$1 = state_47634;
var statearr_47656_48410 = state_47634__$1;
(statearr_47656_48410[(2)] = inst_47628);

(statearr_47656_48410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (19))){
var inst_47615 = (state_47634[(2)]);
var state_47634__$1 = state_47634;
var statearr_47657_48411 = state_47634__$1;
(statearr_47657_48411[(2)] = inst_47615);

(statearr_47657_48411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (11))){
var inst_47586 = (state_47634[(8)]);
var inst_47600 = (state_47634[(7)]);
var inst_47600__$1 = cljs.core.seq(inst_47586);
var state_47634__$1 = (function (){var statearr_47658 = state_47634;
(statearr_47658[(7)] = inst_47600__$1);

return statearr_47658;
})();
if(inst_47600__$1){
var statearr_47659_48412 = state_47634__$1;
(statearr_47659_48412[(1)] = (14));

} else {
var statearr_47660_48413 = state_47634__$1;
(statearr_47660_48413[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (9))){
var inst_47622 = (state_47634[(2)]);
var inst_47623 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47634__$1 = (function (){var statearr_47661 = state_47634;
(statearr_47661[(15)] = inst_47622);

return statearr_47661;
})();
if(cljs.core.truth_(inst_47623)){
var statearr_47662_48414 = state_47634__$1;
(statearr_47662_48414[(1)] = (21));

} else {
var statearr_47663_48415 = state_47634__$1;
(statearr_47663_48415[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (5))){
var inst_47578 = cljs.core.async.close_BANG_(out);
var state_47634__$1 = state_47634;
var statearr_47664_48416 = state_47634__$1;
(statearr_47664_48416[(2)] = inst_47578);

(statearr_47664_48416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (14))){
var inst_47600 = (state_47634[(7)]);
var inst_47602 = cljs.core.chunked_seq_QMARK_(inst_47600);
var state_47634__$1 = state_47634;
if(inst_47602){
var statearr_47665_48417 = state_47634__$1;
(statearr_47665_48417[(1)] = (17));

} else {
var statearr_47666_48418 = state_47634__$1;
(statearr_47666_48418[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (16))){
var inst_47618 = (state_47634[(2)]);
var state_47634__$1 = state_47634;
var statearr_47667_48419 = state_47634__$1;
(statearr_47667_48419[(2)] = inst_47618);

(statearr_47667_48419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47635 === (10))){
var inst_47589 = (state_47634[(9)]);
var inst_47587 = (state_47634[(10)]);
var inst_47594 = cljs.core._nth(inst_47587,inst_47589);
var state_47634__$1 = state_47634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47634__$1,(13),out,inst_47594);
} else {
if((state_val_47635 === (18))){
var inst_47600 = (state_47634[(7)]);
var inst_47609 = cljs.core.first(inst_47600);
var state_47634__$1 = state_47634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47634__$1,(20),out,inst_47609);
} else {
if((state_val_47635 === (8))){
var inst_47589 = (state_47634[(9)]);
var inst_47588 = (state_47634[(11)]);
var inst_47591 = (inst_47589 < inst_47588);
var inst_47592 = inst_47591;
var state_47634__$1 = state_47634;
if(cljs.core.truth_(inst_47592)){
var statearr_47668_48420 = state_47634__$1;
(statearr_47668_48420[(1)] = (10));

} else {
var statearr_47669_48421 = state_47634__$1;
(statearr_47669_48421[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__46189__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46189__auto____0 = (function (){
var statearr_47670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47670[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46189__auto__);

(statearr_47670[(1)] = (1));

return statearr_47670;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46189__auto____1 = (function (state_47634){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_47634);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e47671){var ex__46192__auto__ = e47671;
var statearr_47672_48422 = state_47634;
(statearr_47672_48422[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_47634[(4)]))){
var statearr_47673_48423 = state_47634;
(statearr_47673_48423[(1)] = cljs.core.first((state_47634[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48424 = state_47634;
state_47634 = G__48424;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46189__auto__ = function(state_47634){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46189__auto____1.call(this,state_47634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46189__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46189__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_47674 = f__46268__auto__();
(statearr_47674[(6)] = c__46267__auto__);

return statearr_47674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));

return c__46267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47676 = arguments.length;
switch (G__47676) {
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
var G__47678 = arguments.length;
switch (G__47678) {
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
var G__47680 = arguments.length;
switch (G__47680) {
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
var c__46267__auto___48432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_47704){
var state_val_47705 = (state_47704[(1)]);
if((state_val_47705 === (7))){
var inst_47699 = (state_47704[(2)]);
var state_47704__$1 = state_47704;
var statearr_47706_48433 = state_47704__$1;
(statearr_47706_48433[(2)] = inst_47699);

(statearr_47706_48433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47705 === (1))){
var inst_47681 = null;
var state_47704__$1 = (function (){var statearr_47707 = state_47704;
(statearr_47707[(7)] = inst_47681);

return statearr_47707;
})();
var statearr_47708_48434 = state_47704__$1;
(statearr_47708_48434[(2)] = null);

(statearr_47708_48434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47705 === (4))){
var inst_47684 = (state_47704[(8)]);
var inst_47684__$1 = (state_47704[(2)]);
var inst_47685 = (inst_47684__$1 == null);
var inst_47686 = cljs.core.not(inst_47685);
var state_47704__$1 = (function (){var statearr_47709 = state_47704;
(statearr_47709[(8)] = inst_47684__$1);

return statearr_47709;
})();
if(inst_47686){
var statearr_47710_48435 = state_47704__$1;
(statearr_47710_48435[(1)] = (5));

} else {
var statearr_47711_48436 = state_47704__$1;
(statearr_47711_48436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47705 === (6))){
var state_47704__$1 = state_47704;
var statearr_47712_48437 = state_47704__$1;
(statearr_47712_48437[(2)] = null);

(statearr_47712_48437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47705 === (3))){
var inst_47701 = (state_47704[(2)]);
var inst_47702 = cljs.core.async.close_BANG_(out);
var state_47704__$1 = (function (){var statearr_47713 = state_47704;
(statearr_47713[(9)] = inst_47701);

return statearr_47713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47704__$1,inst_47702);
} else {
if((state_val_47705 === (2))){
var state_47704__$1 = state_47704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47704__$1,(4),ch);
} else {
if((state_val_47705 === (11))){
var inst_47684 = (state_47704[(8)]);
var inst_47693 = (state_47704[(2)]);
var inst_47681 = inst_47684;
var state_47704__$1 = (function (){var statearr_47714 = state_47704;
(statearr_47714[(7)] = inst_47681);

(statearr_47714[(10)] = inst_47693);

return statearr_47714;
})();
var statearr_47715_48442 = state_47704__$1;
(statearr_47715_48442[(2)] = null);

(statearr_47715_48442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47705 === (9))){
var inst_47684 = (state_47704[(8)]);
var state_47704__$1 = state_47704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47704__$1,(11),out,inst_47684);
} else {
if((state_val_47705 === (5))){
var inst_47684 = (state_47704[(8)]);
var inst_47681 = (state_47704[(7)]);
var inst_47688 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47684,inst_47681);
var state_47704__$1 = state_47704;
if(inst_47688){
var statearr_47717_48443 = state_47704__$1;
(statearr_47717_48443[(1)] = (8));

} else {
var statearr_47718_48444 = state_47704__$1;
(statearr_47718_48444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47705 === (10))){
var inst_47696 = (state_47704[(2)]);
var state_47704__$1 = state_47704;
var statearr_47719_48446 = state_47704__$1;
(statearr_47719_48446[(2)] = inst_47696);

(statearr_47719_48446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47705 === (8))){
var inst_47681 = (state_47704[(7)]);
var tmp47716 = inst_47681;
var inst_47681__$1 = tmp47716;
var state_47704__$1 = (function (){var statearr_47720 = state_47704;
(statearr_47720[(7)] = inst_47681__$1);

return statearr_47720;
})();
var statearr_47721_48447 = state_47704__$1;
(statearr_47721_48447[(2)] = null);

(statearr_47721_48447[(1)] = (2));


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
var cljs$core$async$state_machine__46189__auto__ = null;
var cljs$core$async$state_machine__46189__auto____0 = (function (){
var statearr_47722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47722[(0)] = cljs$core$async$state_machine__46189__auto__);

(statearr_47722[(1)] = (1));

return statearr_47722;
});
var cljs$core$async$state_machine__46189__auto____1 = (function (state_47704){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_47704);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e47723){var ex__46192__auto__ = e47723;
var statearr_47724_48448 = state_47704;
(statearr_47724_48448[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_47704[(4)]))){
var statearr_47725_48449 = state_47704;
(statearr_47725_48449[(1)] = cljs.core.first((state_47704[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48450 = state_47704;
state_47704 = G__48450;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$state_machine__46189__auto__ = function(state_47704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46189__auto____1.call(this,state_47704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46189__auto____0;
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46189__auto____1;
return cljs$core$async$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_47726 = f__46268__auto__();
(statearr_47726[(6)] = c__46267__auto___48432);

return statearr_47726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47728 = arguments.length;
switch (G__47728) {
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
var c__46267__auto___48453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_47766){
var state_val_47767 = (state_47766[(1)]);
if((state_val_47767 === (7))){
var inst_47762 = (state_47766[(2)]);
var state_47766__$1 = state_47766;
var statearr_47768_48454 = state_47766__$1;
(statearr_47768_48454[(2)] = inst_47762);

(statearr_47768_48454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47767 === (1))){
var inst_47729 = (new Array(n));
var inst_47730 = inst_47729;
var inst_47731 = (0);
var state_47766__$1 = (function (){var statearr_47769 = state_47766;
(statearr_47769[(7)] = inst_47731);

(statearr_47769[(8)] = inst_47730);

return statearr_47769;
})();
var statearr_47770_48459 = state_47766__$1;
(statearr_47770_48459[(2)] = null);

(statearr_47770_48459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47767 === (4))){
var inst_47734 = (state_47766[(9)]);
var inst_47734__$1 = (state_47766[(2)]);
var inst_47735 = (inst_47734__$1 == null);
var inst_47736 = cljs.core.not(inst_47735);
var state_47766__$1 = (function (){var statearr_47771 = state_47766;
(statearr_47771[(9)] = inst_47734__$1);

return statearr_47771;
})();
if(inst_47736){
var statearr_47772_48460 = state_47766__$1;
(statearr_47772_48460[(1)] = (5));

} else {
var statearr_47773_48461 = state_47766__$1;
(statearr_47773_48461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47767 === (15))){
var inst_47756 = (state_47766[(2)]);
var state_47766__$1 = state_47766;
var statearr_47774_48462 = state_47766__$1;
(statearr_47774_48462[(2)] = inst_47756);

(statearr_47774_48462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47767 === (13))){
var state_47766__$1 = state_47766;
var statearr_47775_48463 = state_47766__$1;
(statearr_47775_48463[(2)] = null);

(statearr_47775_48463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47767 === (6))){
var inst_47731 = (state_47766[(7)]);
var inst_47752 = (inst_47731 > (0));
var state_47766__$1 = state_47766;
if(cljs.core.truth_(inst_47752)){
var statearr_47776_48464 = state_47766__$1;
(statearr_47776_48464[(1)] = (12));

} else {
var statearr_47777_48465 = state_47766__$1;
(statearr_47777_48465[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47767 === (3))){
var inst_47764 = (state_47766[(2)]);
var state_47766__$1 = state_47766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47766__$1,inst_47764);
} else {
if((state_val_47767 === (12))){
var inst_47730 = (state_47766[(8)]);
var inst_47754 = cljs.core.vec(inst_47730);
var state_47766__$1 = state_47766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47766__$1,(15),out,inst_47754);
} else {
if((state_val_47767 === (2))){
var state_47766__$1 = state_47766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47766__$1,(4),ch);
} else {
if((state_val_47767 === (11))){
var inst_47746 = (state_47766[(2)]);
var inst_47747 = (new Array(n));
var inst_47730 = inst_47747;
var inst_47731 = (0);
var state_47766__$1 = (function (){var statearr_47778 = state_47766;
(statearr_47778[(7)] = inst_47731);

(statearr_47778[(10)] = inst_47746);

(statearr_47778[(8)] = inst_47730);

return statearr_47778;
})();
var statearr_47779_48466 = state_47766__$1;
(statearr_47779_48466[(2)] = null);

(statearr_47779_48466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47767 === (9))){
var inst_47730 = (state_47766[(8)]);
var inst_47744 = cljs.core.vec(inst_47730);
var state_47766__$1 = state_47766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47766__$1,(11),out,inst_47744);
} else {
if((state_val_47767 === (5))){
var inst_47734 = (state_47766[(9)]);
var inst_47731 = (state_47766[(7)]);
var inst_47739 = (state_47766[(11)]);
var inst_47730 = (state_47766[(8)]);
var inst_47738 = (inst_47730[inst_47731] = inst_47734);
var inst_47739__$1 = (inst_47731 + (1));
var inst_47740 = (inst_47739__$1 < n);
var state_47766__$1 = (function (){var statearr_47780 = state_47766;
(statearr_47780[(12)] = inst_47738);

(statearr_47780[(11)] = inst_47739__$1);

return statearr_47780;
})();
if(cljs.core.truth_(inst_47740)){
var statearr_47781_48467 = state_47766__$1;
(statearr_47781_48467[(1)] = (8));

} else {
var statearr_47782_48468 = state_47766__$1;
(statearr_47782_48468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47767 === (14))){
var inst_47759 = (state_47766[(2)]);
var inst_47760 = cljs.core.async.close_BANG_(out);
var state_47766__$1 = (function (){var statearr_47784 = state_47766;
(statearr_47784[(13)] = inst_47759);

return statearr_47784;
})();
var statearr_47785_48469 = state_47766__$1;
(statearr_47785_48469[(2)] = inst_47760);

(statearr_47785_48469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47767 === (10))){
var inst_47750 = (state_47766[(2)]);
var state_47766__$1 = state_47766;
var statearr_47786_48470 = state_47766__$1;
(statearr_47786_48470[(2)] = inst_47750);

(statearr_47786_48470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47767 === (8))){
var inst_47739 = (state_47766[(11)]);
var inst_47730 = (state_47766[(8)]);
var tmp47783 = inst_47730;
var inst_47730__$1 = tmp47783;
var inst_47731 = inst_47739;
var state_47766__$1 = (function (){var statearr_47787 = state_47766;
(statearr_47787[(7)] = inst_47731);

(statearr_47787[(8)] = inst_47730__$1);

return statearr_47787;
})();
var statearr_47788_48471 = state_47766__$1;
(statearr_47788_48471[(2)] = null);

(statearr_47788_48471[(1)] = (2));


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
var cljs$core$async$state_machine__46189__auto__ = null;
var cljs$core$async$state_machine__46189__auto____0 = (function (){
var statearr_47789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47789[(0)] = cljs$core$async$state_machine__46189__auto__);

(statearr_47789[(1)] = (1));

return statearr_47789;
});
var cljs$core$async$state_machine__46189__auto____1 = (function (state_47766){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_47766);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e47790){var ex__46192__auto__ = e47790;
var statearr_47791_48472 = state_47766;
(statearr_47791_48472[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_47766[(4)]))){
var statearr_47792_48473 = state_47766;
(statearr_47792_48473[(1)] = cljs.core.first((state_47766[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48474 = state_47766;
state_47766 = G__48474;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$state_machine__46189__auto__ = function(state_47766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46189__auto____1.call(this,state_47766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46189__auto____0;
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46189__auto____1;
return cljs$core$async$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_47793 = f__46268__auto__();
(statearr_47793[(6)] = c__46267__auto___48453);

return statearr_47793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47795 = arguments.length;
switch (G__47795) {
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
var c__46267__auto___48476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46268__auto__ = (function (){var switch__46188__auto__ = (function (state_47840){
var state_val_47841 = (state_47840[(1)]);
if((state_val_47841 === (7))){
var inst_47836 = (state_47840[(2)]);
var state_47840__$1 = state_47840;
var statearr_47842_48477 = state_47840__$1;
(statearr_47842_48477[(2)] = inst_47836);

(statearr_47842_48477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (1))){
var inst_47796 = [];
var inst_47797 = inst_47796;
var inst_47798 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47840__$1 = (function (){var statearr_47843 = state_47840;
(statearr_47843[(7)] = inst_47798);

(statearr_47843[(8)] = inst_47797);

return statearr_47843;
})();
var statearr_47844_48482 = state_47840__$1;
(statearr_47844_48482[(2)] = null);

(statearr_47844_48482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (4))){
var inst_47801 = (state_47840[(9)]);
var inst_47801__$1 = (state_47840[(2)]);
var inst_47802 = (inst_47801__$1 == null);
var inst_47803 = cljs.core.not(inst_47802);
var state_47840__$1 = (function (){var statearr_47845 = state_47840;
(statearr_47845[(9)] = inst_47801__$1);

return statearr_47845;
})();
if(inst_47803){
var statearr_47846_48483 = state_47840__$1;
(statearr_47846_48483[(1)] = (5));

} else {
var statearr_47847_48484 = state_47840__$1;
(statearr_47847_48484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (15))){
var inst_47797 = (state_47840[(8)]);
var inst_47828 = cljs.core.vec(inst_47797);
var state_47840__$1 = state_47840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47840__$1,(18),out,inst_47828);
} else {
if((state_val_47841 === (13))){
var inst_47823 = (state_47840[(2)]);
var state_47840__$1 = state_47840;
var statearr_47848_48485 = state_47840__$1;
(statearr_47848_48485[(2)] = inst_47823);

(statearr_47848_48485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (6))){
var inst_47797 = (state_47840[(8)]);
var inst_47825 = inst_47797.length;
var inst_47826 = (inst_47825 > (0));
var state_47840__$1 = state_47840;
if(cljs.core.truth_(inst_47826)){
var statearr_47849_48486 = state_47840__$1;
(statearr_47849_48486[(1)] = (15));

} else {
var statearr_47850_48487 = state_47840__$1;
(statearr_47850_48487[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (17))){
var inst_47833 = (state_47840[(2)]);
var inst_47834 = cljs.core.async.close_BANG_(out);
var state_47840__$1 = (function (){var statearr_47851 = state_47840;
(statearr_47851[(10)] = inst_47833);

return statearr_47851;
})();
var statearr_47852_48488 = state_47840__$1;
(statearr_47852_48488[(2)] = inst_47834);

(statearr_47852_48488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (3))){
var inst_47838 = (state_47840[(2)]);
var state_47840__$1 = state_47840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47840__$1,inst_47838);
} else {
if((state_val_47841 === (12))){
var inst_47797 = (state_47840[(8)]);
var inst_47816 = cljs.core.vec(inst_47797);
var state_47840__$1 = state_47840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47840__$1,(14),out,inst_47816);
} else {
if((state_val_47841 === (2))){
var state_47840__$1 = state_47840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47840__$1,(4),ch);
} else {
if((state_val_47841 === (11))){
var inst_47805 = (state_47840[(11)]);
var inst_47801 = (state_47840[(9)]);
var inst_47797 = (state_47840[(8)]);
var inst_47813 = inst_47797.push(inst_47801);
var tmp47853 = inst_47797;
var inst_47797__$1 = tmp47853;
var inst_47798 = inst_47805;
var state_47840__$1 = (function (){var statearr_47854 = state_47840;
(statearr_47854[(7)] = inst_47798);

(statearr_47854[(12)] = inst_47813);

(statearr_47854[(8)] = inst_47797__$1);

return statearr_47854;
})();
var statearr_47855_48489 = state_47840__$1;
(statearr_47855_48489[(2)] = null);

(statearr_47855_48489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (9))){
var inst_47798 = (state_47840[(7)]);
var inst_47809 = cljs.core.keyword_identical_QMARK_(inst_47798,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47840__$1 = state_47840;
var statearr_47856_48490 = state_47840__$1;
(statearr_47856_48490[(2)] = inst_47809);

(statearr_47856_48490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (5))){
var inst_47806 = (state_47840[(13)]);
var inst_47805 = (state_47840[(11)]);
var inst_47798 = (state_47840[(7)]);
var inst_47801 = (state_47840[(9)]);
var inst_47805__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47801) : f.call(null,inst_47801));
var inst_47806__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47805__$1,inst_47798);
var state_47840__$1 = (function (){var statearr_47857 = state_47840;
(statearr_47857[(13)] = inst_47806__$1);

(statearr_47857[(11)] = inst_47805__$1);

return statearr_47857;
})();
if(inst_47806__$1){
var statearr_47858_48491 = state_47840__$1;
(statearr_47858_48491[(1)] = (8));

} else {
var statearr_47859_48492 = state_47840__$1;
(statearr_47859_48492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (14))){
var inst_47805 = (state_47840[(11)]);
var inst_47801 = (state_47840[(9)]);
var inst_47818 = (state_47840[(2)]);
var inst_47819 = [];
var inst_47820 = inst_47819.push(inst_47801);
var inst_47797 = inst_47819;
var inst_47798 = inst_47805;
var state_47840__$1 = (function (){var statearr_47860 = state_47840;
(statearr_47860[(14)] = inst_47820);

(statearr_47860[(15)] = inst_47818);

(statearr_47860[(7)] = inst_47798);

(statearr_47860[(8)] = inst_47797);

return statearr_47860;
})();
var statearr_47861_48493 = state_47840__$1;
(statearr_47861_48493[(2)] = null);

(statearr_47861_48493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (16))){
var state_47840__$1 = state_47840;
var statearr_47862_48494 = state_47840__$1;
(statearr_47862_48494[(2)] = null);

(statearr_47862_48494[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (10))){
var inst_47811 = (state_47840[(2)]);
var state_47840__$1 = state_47840;
if(cljs.core.truth_(inst_47811)){
var statearr_47863_48495 = state_47840__$1;
(statearr_47863_48495[(1)] = (11));

} else {
var statearr_47864_48496 = state_47840__$1;
(statearr_47864_48496[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (18))){
var inst_47830 = (state_47840[(2)]);
var state_47840__$1 = state_47840;
var statearr_47865_48497 = state_47840__$1;
(statearr_47865_48497[(2)] = inst_47830);

(statearr_47865_48497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47841 === (8))){
var inst_47806 = (state_47840[(13)]);
var state_47840__$1 = state_47840;
var statearr_47866_48499 = state_47840__$1;
(statearr_47866_48499[(2)] = inst_47806);

(statearr_47866_48499[(1)] = (10));


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
var cljs$core$async$state_machine__46189__auto__ = null;
var cljs$core$async$state_machine__46189__auto____0 = (function (){
var statearr_47867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47867[(0)] = cljs$core$async$state_machine__46189__auto__);

(statearr_47867[(1)] = (1));

return statearr_47867;
});
var cljs$core$async$state_machine__46189__auto____1 = (function (state_47840){
while(true){
var ret_value__46190__auto__ = (function (){try{while(true){
var result__46191__auto__ = switch__46188__auto__(state_47840);
if(cljs.core.keyword_identical_QMARK_(result__46191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46191__auto__;
}
break;
}
}catch (e47868){var ex__46192__auto__ = e47868;
var statearr_47869_48500 = state_47840;
(statearr_47869_48500[(2)] = ex__46192__auto__);


if(cljs.core.seq((state_47840[(4)]))){
var statearr_47870_48501 = state_47840;
(statearr_47870_48501[(1)] = cljs.core.first((state_47840[(4)])));

} else {
throw ex__46192__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48502 = state_47840;
state_47840 = G__48502;
continue;
} else {
return ret_value__46190__auto__;
}
break;
}
});
cljs$core$async$state_machine__46189__auto__ = function(state_47840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46189__auto____1.call(this,state_47840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46189__auto____0;
cljs$core$async$state_machine__46189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46189__auto____1;
return cljs$core$async$state_machine__46189__auto__;
})()
})();
var state__46269__auto__ = (function (){var statearr_47871 = f__46268__auto__();
(statearr_47871[(6)] = c__46267__auto___48476);

return statearr_47871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
