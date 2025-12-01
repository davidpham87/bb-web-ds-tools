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
cljs.core.async.t_cljs$core$async47835 = (function (f,blockable,meta47836){
this.f = f;
this.blockable = blockable;
this.meta47836 = meta47836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47837,meta47836__$1){
var self__ = this;
var _47837__$1 = this;
return (new cljs.core.async.t_cljs$core$async47835(self__.f,self__.blockable,meta47836__$1));
}));

(cljs.core.async.t_cljs$core$async47835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47837){
var self__ = this;
var _47837__$1 = this;
return self__.meta47836;
}));

(cljs.core.async.t_cljs$core$async47835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47836","meta47836",-1612935546,null)], null);
}));

(cljs.core.async.t_cljs$core$async47835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47835");

(cljs.core.async.t_cljs$core$async47835.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async47835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47835.
 */
cljs.core.async.__GT_t_cljs$core$async47835 = (function cljs$core$async$__GT_t_cljs$core$async47835(f,blockable,meta47836){
return (new cljs.core.async.t_cljs$core$async47835(f,blockable,meta47836));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47834 = arguments.length;
switch (G__47834) {
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
return (new cljs.core.async.t_cljs$core$async47835(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47840 = arguments.length;
switch (G__47840) {
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
var G__47842 = arguments.length;
switch (G__47842) {
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
var G__47844 = arguments.length;
switch (G__47844) {
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
var val_49267 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49267) : fn1.call(null,val_49267));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49267) : fn1.call(null,val_49267));
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
var G__47846 = arguments.length;
switch (G__47846) {
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
var n__5616__auto___49269 = n;
var x_49270 = (0);
while(true){
if((x_49270 < n__5616__auto___49269)){
(a[x_49270] = x_49270);

var G__49272 = (x_49270 + (1));
x_49270 = G__49272;
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
cljs.core.async.t_cljs$core$async47847 = (function (flag,meta47848){
this.flag = flag;
this.meta47848 = meta47848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47849,meta47848__$1){
var self__ = this;
var _47849__$1 = this;
return (new cljs.core.async.t_cljs$core$async47847(self__.flag,meta47848__$1));
}));

(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47849){
var self__ = this;
var _47849__$1 = this;
return self__.meta47848;
}));

(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47848","meta47848",-1648109891,null)], null);
}));

(cljs.core.async.t_cljs$core$async47847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47847");

(cljs.core.async.t_cljs$core$async47847.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async47847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47847.
 */
cljs.core.async.__GT_t_cljs$core$async47847 = (function cljs$core$async$__GT_t_cljs$core$async47847(flag,meta47848){
return (new cljs.core.async.t_cljs$core$async47847(flag,meta47848));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async47847(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47850 = (function (flag,cb,meta47851){
this.flag = flag;
this.cb = cb;
this.meta47851 = meta47851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47852,meta47851__$1){
var self__ = this;
var _47852__$1 = this;
return (new cljs.core.async.t_cljs$core$async47850(self__.flag,self__.cb,meta47851__$1));
}));

(cljs.core.async.t_cljs$core$async47850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47852){
var self__ = this;
var _47852__$1 = this;
return self__.meta47851;
}));

(cljs.core.async.t_cljs$core$async47850.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47851","meta47851",-519860281,null)], null);
}));

(cljs.core.async.t_cljs$core$async47850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47850");

(cljs.core.async.t_cljs$core$async47850.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async47850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47850.
 */
cljs.core.async.__GT_t_cljs$core$async47850 = (function cljs$core$async$__GT_t_cljs$core$async47850(flag,cb,meta47851){
return (new cljs.core.async.t_cljs$core$async47850(flag,cb,meta47851));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async47850(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_49274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_49274)){
if((!(((port_49274.cljs$core$IFn$_invoke$arity$1 ? port_49274.cljs$core$IFn$_invoke$arity$1((1)) : port_49274.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__49275 = (i + (1));
i = G__49275;
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
return (function (p1__47853_SHARP_){
var G__47855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47853_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47855) : fret.call(null,G__47855));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__47854_SHARP_){
var G__47856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47854_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47856) : fret.call(null,G__47856));
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
var G__49279 = (i + (1));
i = G__49279;
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
var len__5749__auto___49280 = arguments.length;
var i__5750__auto___49281 = (0);
while(true){
if((i__5750__auto___49281 < len__5749__auto___49280)){
args__5755__auto__.push((arguments[i__5750__auto___49281]));

var G__49282 = (i__5750__auto___49281 + (1));
i__5750__auto___49281 = G__49282;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47859){
var map__47860 = p__47859;
var map__47860__$1 = cljs.core.__destructure_map(map__47860);
var opts = map__47860__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47857){
var G__47858 = cljs.core.first(seq47857);
var seq47857__$1 = cljs.core.next(seq47857);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47858,seq47857__$1);
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
var G__47862 = arguments.length;
switch (G__47862) {
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
var c__47776__auto___49286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_47886){
var state_val_47887 = (state_47886[(1)]);
if((state_val_47887 === (7))){
var inst_47882 = (state_47886[(2)]);
var state_47886__$1 = state_47886;
var statearr_47888_49289 = state_47886__$1;
(statearr_47888_49289[(2)] = inst_47882);

(statearr_47888_49289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (1))){
var state_47886__$1 = state_47886;
var statearr_47889_49290 = state_47886__$1;
(statearr_47889_49290[(2)] = null);

(statearr_47889_49290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (4))){
var inst_47865 = (state_47886[(7)]);
var inst_47865__$1 = (state_47886[(2)]);
var inst_47866 = (inst_47865__$1 == null);
var state_47886__$1 = (function (){var statearr_47890 = state_47886;
(statearr_47890[(7)] = inst_47865__$1);

return statearr_47890;
})();
if(cljs.core.truth_(inst_47866)){
var statearr_47891_49295 = state_47886__$1;
(statearr_47891_49295[(1)] = (5));

} else {
var statearr_47892_49296 = state_47886__$1;
(statearr_47892_49296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (13))){
var state_47886__$1 = state_47886;
var statearr_47893_49297 = state_47886__$1;
(statearr_47893_49297[(2)] = null);

(statearr_47893_49297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (6))){
var inst_47865 = (state_47886[(7)]);
var state_47886__$1 = state_47886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47886__$1,(11),to,inst_47865);
} else {
if((state_val_47887 === (3))){
var inst_47884 = (state_47886[(2)]);
var state_47886__$1 = state_47886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47886__$1,inst_47884);
} else {
if((state_val_47887 === (12))){
var state_47886__$1 = state_47886;
var statearr_47894_49300 = state_47886__$1;
(statearr_47894_49300[(2)] = null);

(statearr_47894_49300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (2))){
var state_47886__$1 = state_47886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47886__$1,(4),from);
} else {
if((state_val_47887 === (11))){
var inst_47875 = (state_47886[(2)]);
var state_47886__$1 = state_47886;
if(cljs.core.truth_(inst_47875)){
var statearr_47895_49306 = state_47886__$1;
(statearr_47895_49306[(1)] = (12));

} else {
var statearr_47896_49307 = state_47886__$1;
(statearr_47896_49307[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (9))){
var state_47886__$1 = state_47886;
var statearr_47897_49308 = state_47886__$1;
(statearr_47897_49308[(2)] = null);

(statearr_47897_49308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (5))){
var state_47886__$1 = state_47886;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47898_49309 = state_47886__$1;
(statearr_47898_49309[(1)] = (8));

} else {
var statearr_47899_49310 = state_47886__$1;
(statearr_47899_49310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (14))){
var inst_47880 = (state_47886[(2)]);
var state_47886__$1 = state_47886;
var statearr_47900_49311 = state_47886__$1;
(statearr_47900_49311[(2)] = inst_47880);

(statearr_47900_49311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (10))){
var inst_47872 = (state_47886[(2)]);
var state_47886__$1 = state_47886;
var statearr_47901_49312 = state_47886__$1;
(statearr_47901_49312[(2)] = inst_47872);

(statearr_47901_49312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47887 === (8))){
var inst_47869 = cljs.core.async.close_BANG_(to);
var state_47886__$1 = state_47886;
var statearr_47902_49314 = state_47886__$1;
(statearr_47902_49314[(2)] = inst_47869);

(statearr_47902_49314[(1)] = (10));


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
var cljs$core$async$state_machine__47706__auto__ = null;
var cljs$core$async$state_machine__47706__auto____0 = (function (){
var statearr_47903 = [null,null,null,null,null,null,null,null];
(statearr_47903[(0)] = cljs$core$async$state_machine__47706__auto__);

(statearr_47903[(1)] = (1));

return statearr_47903;
});
var cljs$core$async$state_machine__47706__auto____1 = (function (state_47886){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_47886);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e47904){var ex__47709__auto__ = e47904;
var statearr_47905_49318 = state_47886;
(statearr_47905_49318[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_47886[(4)]))){
var statearr_47906_49319 = state_47886;
(statearr_47906_49319[(1)] = cljs.core.first((state_47886[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49320 = state_47886;
state_47886 = G__49320;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$state_machine__47706__auto__ = function(state_47886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47706__auto____1.call(this,state_47886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47706__auto____0;
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47706__auto____1;
return cljs$core$async$state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_47907 = f__47777__auto__();
(statearr_47907[(6)] = c__47776__auto___49286);

return statearr_47907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
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
var process__$1 = (function (p__47908){
var vec__47909 = p__47908;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47909,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47909,(1),null);
var job = vec__47909;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47776__auto___49321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_47916){
var state_val_47917 = (state_47916[(1)]);
if((state_val_47917 === (1))){
var state_47916__$1 = state_47916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47916__$1,(2),res,v);
} else {
if((state_val_47917 === (2))){
var inst_47913 = (state_47916[(2)]);
var inst_47914 = cljs.core.async.close_BANG_(res);
var state_47916__$1 = (function (){var statearr_47918 = state_47916;
(statearr_47918[(7)] = inst_47913);

return statearr_47918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47916__$1,inst_47914);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0 = (function (){
var statearr_47919 = [null,null,null,null,null,null,null,null];
(statearr_47919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__);

(statearr_47919[(1)] = (1));

return statearr_47919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1 = (function (state_47916){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_47916);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e47920){var ex__47709__auto__ = e47920;
var statearr_47921_49326 = state_47916;
(statearr_47921_49326[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_47916[(4)]))){
var statearr_47922_49328 = state_47916;
(statearr_47922_49328[(1)] = cljs.core.first((state_47916[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49332 = state_47916;
state_47916 = G__49332;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__ = function(state_47916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1.call(this,state_47916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_47923 = f__47777__auto__();
(statearr_47923[(6)] = c__47776__auto___49321);

return statearr_47923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47924){
var vec__47925 = p__47924;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47925,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47925,(1),null);
var job = vec__47925;
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
var n__5616__auto___49337 = n;
var __49338 = (0);
while(true){
if((__49338 < n__5616__auto___49337)){
var G__47928_49339 = type;
var G__47928_49340__$1 = (((G__47928_49339 instanceof cljs.core.Keyword))?G__47928_49339.fqn:null);
switch (G__47928_49340__$1) {
case "compute":
var c__47776__auto___49342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49338,c__47776__auto___49342,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async){
return (function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = ((function (__49338,c__47776__auto___49342,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async){
return (function (state_47941){
var state_val_47942 = (state_47941[(1)]);
if((state_val_47942 === (1))){
var state_47941__$1 = state_47941;
var statearr_47943_49347 = state_47941__$1;
(statearr_47943_49347[(2)] = null);

(statearr_47943_49347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47942 === (2))){
var state_47941__$1 = state_47941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47941__$1,(4),jobs);
} else {
if((state_val_47942 === (3))){
var inst_47939 = (state_47941[(2)]);
var state_47941__$1 = state_47941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47941__$1,inst_47939);
} else {
if((state_val_47942 === (4))){
var inst_47931 = (state_47941[(2)]);
var inst_47932 = process__$1(inst_47931);
var state_47941__$1 = state_47941;
if(cljs.core.truth_(inst_47932)){
var statearr_47944_49348 = state_47941__$1;
(statearr_47944_49348[(1)] = (5));

} else {
var statearr_47945_49350 = state_47941__$1;
(statearr_47945_49350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47942 === (5))){
var state_47941__$1 = state_47941;
var statearr_47946_49352 = state_47941__$1;
(statearr_47946_49352[(2)] = null);

(statearr_47946_49352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47942 === (6))){
var state_47941__$1 = state_47941;
var statearr_47947_49353 = state_47941__$1;
(statearr_47947_49353[(2)] = null);

(statearr_47947_49353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47942 === (7))){
var inst_47937 = (state_47941[(2)]);
var state_47941__$1 = state_47941;
var statearr_47948_49354 = state_47941__$1;
(statearr_47948_49354[(2)] = inst_47937);

(statearr_47948_49354[(1)] = (3));


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
});})(__49338,c__47776__auto___49342,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async))
;
return ((function (__49338,switch__47705__auto__,c__47776__auto___49342,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0 = (function (){
var statearr_47949 = [null,null,null,null,null,null,null];
(statearr_47949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__);

(statearr_47949[(1)] = (1));

return statearr_47949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1 = (function (state_47941){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_47941);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e47950){var ex__47709__auto__ = e47950;
var statearr_47951_49355 = state_47941;
(statearr_47951_49355[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_47941[(4)]))){
var statearr_47952_49356 = state_47941;
(statearr_47952_49356[(1)] = cljs.core.first((state_47941[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49357 = state_47941;
state_47941 = G__49357;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__ = function(state_47941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1.call(this,state_47941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__;
})()
;})(__49338,switch__47705__auto__,c__47776__auto___49342,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async))
})();
var state__47778__auto__ = (function (){var statearr_47953 = f__47777__auto__();
(statearr_47953[(6)] = c__47776__auto___49342);

return statearr_47953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
});})(__49338,c__47776__auto___49342,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async))
);


break;
case "async":
var c__47776__auto___49358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49338,c__47776__auto___49358,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async){
return (function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = ((function (__49338,c__47776__auto___49358,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async){
return (function (state_47966){
var state_val_47967 = (state_47966[(1)]);
if((state_val_47967 === (1))){
var state_47966__$1 = state_47966;
var statearr_47968_49359 = state_47966__$1;
(statearr_47968_49359[(2)] = null);

(statearr_47968_49359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47967 === (2))){
var state_47966__$1 = state_47966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47966__$1,(4),jobs);
} else {
if((state_val_47967 === (3))){
var inst_47964 = (state_47966[(2)]);
var state_47966__$1 = state_47966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47966__$1,inst_47964);
} else {
if((state_val_47967 === (4))){
var inst_47956 = (state_47966[(2)]);
var inst_47957 = async(inst_47956);
var state_47966__$1 = state_47966;
if(cljs.core.truth_(inst_47957)){
var statearr_47969_49360 = state_47966__$1;
(statearr_47969_49360[(1)] = (5));

} else {
var statearr_47970_49361 = state_47966__$1;
(statearr_47970_49361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47967 === (5))){
var state_47966__$1 = state_47966;
var statearr_47971_49362 = state_47966__$1;
(statearr_47971_49362[(2)] = null);

(statearr_47971_49362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47967 === (6))){
var state_47966__$1 = state_47966;
var statearr_47972_49363 = state_47966__$1;
(statearr_47972_49363[(2)] = null);

(statearr_47972_49363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47967 === (7))){
var inst_47962 = (state_47966[(2)]);
var state_47966__$1 = state_47966;
var statearr_47973_49365 = state_47966__$1;
(statearr_47973_49365[(2)] = inst_47962);

(statearr_47973_49365[(1)] = (3));


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
});})(__49338,c__47776__auto___49358,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async))
;
return ((function (__49338,switch__47705__auto__,c__47776__auto___49358,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0 = (function (){
var statearr_47974 = [null,null,null,null,null,null,null];
(statearr_47974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__);

(statearr_47974[(1)] = (1));

return statearr_47974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1 = (function (state_47966){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_47966);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e47975){var ex__47709__auto__ = e47975;
var statearr_47976_49370 = state_47966;
(statearr_47976_49370[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_47966[(4)]))){
var statearr_47977_49372 = state_47966;
(statearr_47977_49372[(1)] = cljs.core.first((state_47966[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49373 = state_47966;
state_47966 = G__49373;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__ = function(state_47966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1.call(this,state_47966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__;
})()
;})(__49338,switch__47705__auto__,c__47776__auto___49358,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async))
})();
var state__47778__auto__ = (function (){var statearr_47978 = f__47777__auto__();
(statearr_47978[(6)] = c__47776__auto___49358);

return statearr_47978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
});})(__49338,c__47776__auto___49358,G__47928_49339,G__47928_49340__$1,n__5616__auto___49337,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47928_49340__$1)].join('')));

}

var G__49374 = (__49338 + (1));
__49338 = G__49374;
continue;
} else {
}
break;
}

var c__47776__auto___49375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48000){
var state_val_48001 = (state_48000[(1)]);
if((state_val_48001 === (7))){
var inst_47996 = (state_48000[(2)]);
var state_48000__$1 = state_48000;
var statearr_48002_49376 = state_48000__$1;
(statearr_48002_49376[(2)] = inst_47996);

(statearr_48002_49376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (1))){
var state_48000__$1 = state_48000;
var statearr_48003_49377 = state_48000__$1;
(statearr_48003_49377[(2)] = null);

(statearr_48003_49377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (4))){
var inst_47981 = (state_48000[(7)]);
var inst_47981__$1 = (state_48000[(2)]);
var inst_47982 = (inst_47981__$1 == null);
var state_48000__$1 = (function (){var statearr_48004 = state_48000;
(statearr_48004[(7)] = inst_47981__$1);

return statearr_48004;
})();
if(cljs.core.truth_(inst_47982)){
var statearr_48005_49378 = state_48000__$1;
(statearr_48005_49378[(1)] = (5));

} else {
var statearr_48006_49379 = state_48000__$1;
(statearr_48006_49379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (6))){
var inst_47981 = (state_48000[(7)]);
var inst_47986 = (state_48000[(8)]);
var inst_47986__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47988 = [inst_47981,inst_47986__$1];
var inst_47989 = (new cljs.core.PersistentVector(null,2,(5),inst_47987,inst_47988,null));
var state_48000__$1 = (function (){var statearr_48007 = state_48000;
(statearr_48007[(8)] = inst_47986__$1);

return statearr_48007;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48000__$1,(8),jobs,inst_47989);
} else {
if((state_val_48001 === (3))){
var inst_47998 = (state_48000[(2)]);
var state_48000__$1 = state_48000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48000__$1,inst_47998);
} else {
if((state_val_48001 === (2))){
var state_48000__$1 = state_48000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48000__$1,(4),from);
} else {
if((state_val_48001 === (9))){
var inst_47993 = (state_48000[(2)]);
var state_48000__$1 = (function (){var statearr_48008 = state_48000;
(statearr_48008[(9)] = inst_47993);

return statearr_48008;
})();
var statearr_48009_49380 = state_48000__$1;
(statearr_48009_49380[(2)] = null);

(statearr_48009_49380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (5))){
var inst_47984 = cljs.core.async.close_BANG_(jobs);
var state_48000__$1 = state_48000;
var statearr_48010_49381 = state_48000__$1;
(statearr_48010_49381[(2)] = inst_47984);

(statearr_48010_49381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48001 === (8))){
var inst_47986 = (state_48000[(8)]);
var inst_47991 = (state_48000[(2)]);
var state_48000__$1 = (function (){var statearr_48011 = state_48000;
(statearr_48011[(10)] = inst_47991);

return statearr_48011;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48000__$1,(9),results,inst_47986);
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
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0 = (function (){
var statearr_48012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__);

(statearr_48012[(1)] = (1));

return statearr_48012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1 = (function (state_48000){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48000);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48013){var ex__47709__auto__ = e48013;
var statearr_48014_49382 = state_48000;
(statearr_48014_49382[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48000[(4)]))){
var statearr_48015_49383 = state_48000;
(statearr_48015_49383[(1)] = cljs.core.first((state_48000[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49384 = state_48000;
state_48000 = G__49384;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__ = function(state_48000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1.call(this,state_48000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48016 = f__47777__auto__();
(statearr_48016[(6)] = c__47776__auto___49375);

return statearr_48016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
}));


var c__47776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48054){
var state_val_48055 = (state_48054[(1)]);
if((state_val_48055 === (7))){
var inst_48050 = (state_48054[(2)]);
var state_48054__$1 = state_48054;
var statearr_48056_49385 = state_48054__$1;
(statearr_48056_49385[(2)] = inst_48050);

(statearr_48056_49385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (20))){
var state_48054__$1 = state_48054;
var statearr_48057_49388 = state_48054__$1;
(statearr_48057_49388[(2)] = null);

(statearr_48057_49388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (1))){
var state_48054__$1 = state_48054;
var statearr_48058_49390 = state_48054__$1;
(statearr_48058_49390[(2)] = null);

(statearr_48058_49390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (4))){
var inst_48019 = (state_48054[(7)]);
var inst_48019__$1 = (state_48054[(2)]);
var inst_48020 = (inst_48019__$1 == null);
var state_48054__$1 = (function (){var statearr_48059 = state_48054;
(statearr_48059[(7)] = inst_48019__$1);

return statearr_48059;
})();
if(cljs.core.truth_(inst_48020)){
var statearr_48060_49393 = state_48054__$1;
(statearr_48060_49393[(1)] = (5));

} else {
var statearr_48061_49394 = state_48054__$1;
(statearr_48061_49394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (15))){
var inst_48032 = (state_48054[(8)]);
var state_48054__$1 = state_48054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48054__$1,(18),to,inst_48032);
} else {
if((state_val_48055 === (21))){
var inst_48045 = (state_48054[(2)]);
var state_48054__$1 = state_48054;
var statearr_48062_49395 = state_48054__$1;
(statearr_48062_49395[(2)] = inst_48045);

(statearr_48062_49395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (13))){
var inst_48047 = (state_48054[(2)]);
var state_48054__$1 = (function (){var statearr_48063 = state_48054;
(statearr_48063[(9)] = inst_48047);

return statearr_48063;
})();
var statearr_48064_49396 = state_48054__$1;
(statearr_48064_49396[(2)] = null);

(statearr_48064_49396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (6))){
var inst_48019 = (state_48054[(7)]);
var state_48054__$1 = state_48054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48054__$1,(11),inst_48019);
} else {
if((state_val_48055 === (17))){
var inst_48040 = (state_48054[(2)]);
var state_48054__$1 = state_48054;
if(cljs.core.truth_(inst_48040)){
var statearr_48065_49397 = state_48054__$1;
(statearr_48065_49397[(1)] = (19));

} else {
var statearr_48066_49398 = state_48054__$1;
(statearr_48066_49398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (3))){
var inst_48052 = (state_48054[(2)]);
var state_48054__$1 = state_48054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48054__$1,inst_48052);
} else {
if((state_val_48055 === (12))){
var inst_48029 = (state_48054[(10)]);
var state_48054__$1 = state_48054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48054__$1,(14),inst_48029);
} else {
if((state_val_48055 === (2))){
var state_48054__$1 = state_48054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48054__$1,(4),results);
} else {
if((state_val_48055 === (19))){
var state_48054__$1 = state_48054;
var statearr_48067_49399 = state_48054__$1;
(statearr_48067_49399[(2)] = null);

(statearr_48067_49399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (11))){
var inst_48029 = (state_48054[(2)]);
var state_48054__$1 = (function (){var statearr_48068 = state_48054;
(statearr_48068[(10)] = inst_48029);

return statearr_48068;
})();
var statearr_48069_49400 = state_48054__$1;
(statearr_48069_49400[(2)] = null);

(statearr_48069_49400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (9))){
var state_48054__$1 = state_48054;
var statearr_48070_49401 = state_48054__$1;
(statearr_48070_49401[(2)] = null);

(statearr_48070_49401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (5))){
var state_48054__$1 = state_48054;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48071_49402 = state_48054__$1;
(statearr_48071_49402[(1)] = (8));

} else {
var statearr_48072_49403 = state_48054__$1;
(statearr_48072_49403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (14))){
var inst_48032 = (state_48054[(8)]);
var inst_48034 = (state_48054[(11)]);
var inst_48032__$1 = (state_48054[(2)]);
var inst_48033 = (inst_48032__$1 == null);
var inst_48034__$1 = cljs.core.not(inst_48033);
var state_48054__$1 = (function (){var statearr_48073 = state_48054;
(statearr_48073[(8)] = inst_48032__$1);

(statearr_48073[(11)] = inst_48034__$1);

return statearr_48073;
})();
if(inst_48034__$1){
var statearr_48074_49408 = state_48054__$1;
(statearr_48074_49408[(1)] = (15));

} else {
var statearr_48075_49409 = state_48054__$1;
(statearr_48075_49409[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (16))){
var inst_48034 = (state_48054[(11)]);
var state_48054__$1 = state_48054;
var statearr_48076_49410 = state_48054__$1;
(statearr_48076_49410[(2)] = inst_48034);

(statearr_48076_49410[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (10))){
var inst_48026 = (state_48054[(2)]);
var state_48054__$1 = state_48054;
var statearr_48077_49411 = state_48054__$1;
(statearr_48077_49411[(2)] = inst_48026);

(statearr_48077_49411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (18))){
var inst_48037 = (state_48054[(2)]);
var state_48054__$1 = state_48054;
var statearr_48078_49412 = state_48054__$1;
(statearr_48078_49412[(2)] = inst_48037);

(statearr_48078_49412[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (8))){
var inst_48023 = cljs.core.async.close_BANG_(to);
var state_48054__$1 = state_48054;
var statearr_48079_49416 = state_48054__$1;
(statearr_48079_49416[(2)] = inst_48023);

(statearr_48079_49416[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0 = (function (){
var statearr_48080 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__);

(statearr_48080[(1)] = (1));

return statearr_48080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1 = (function (state_48054){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48054);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48081){var ex__47709__auto__ = e48081;
var statearr_48082_49417 = state_48054;
(statearr_48082_49417[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48054[(4)]))){
var statearr_48083_49421 = state_48054;
(statearr_48083_49421[(1)] = cljs.core.first((state_48054[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49422 = state_48054;
state_48054 = G__49422;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__ = function(state_48054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1.call(this,state_48054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47706__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48084 = f__47777__auto__();
(statearr_48084[(6)] = c__47776__auto__);

return statearr_48084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
}));

return c__47776__auto__;
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
var G__48086 = arguments.length;
switch (G__48086) {
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
var G__48088 = arguments.length;
switch (G__48088) {
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
var G__48090 = arguments.length;
switch (G__48090) {
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
var c__47776__auto___49427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48116){
var state_val_48117 = (state_48116[(1)]);
if((state_val_48117 === (7))){
var inst_48112 = (state_48116[(2)]);
var state_48116__$1 = state_48116;
var statearr_48118_49428 = state_48116__$1;
(statearr_48118_49428[(2)] = inst_48112);

(statearr_48118_49428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48117 === (1))){
var state_48116__$1 = state_48116;
var statearr_48119_49429 = state_48116__$1;
(statearr_48119_49429[(2)] = null);

(statearr_48119_49429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48117 === (4))){
var inst_48093 = (state_48116[(7)]);
var inst_48093__$1 = (state_48116[(2)]);
var inst_48094 = (inst_48093__$1 == null);
var state_48116__$1 = (function (){var statearr_48120 = state_48116;
(statearr_48120[(7)] = inst_48093__$1);

return statearr_48120;
})();
if(cljs.core.truth_(inst_48094)){
var statearr_48121_49430 = state_48116__$1;
(statearr_48121_49430[(1)] = (5));

} else {
var statearr_48122_49431 = state_48116__$1;
(statearr_48122_49431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48117 === (13))){
var state_48116__$1 = state_48116;
var statearr_48123_49432 = state_48116__$1;
(statearr_48123_49432[(2)] = null);

(statearr_48123_49432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48117 === (6))){
var inst_48093 = (state_48116[(7)]);
var inst_48099 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48093) : p.call(null,inst_48093));
var state_48116__$1 = state_48116;
if(cljs.core.truth_(inst_48099)){
var statearr_48124_49433 = state_48116__$1;
(statearr_48124_49433[(1)] = (9));

} else {
var statearr_48125_49434 = state_48116__$1;
(statearr_48125_49434[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48117 === (3))){
var inst_48114 = (state_48116[(2)]);
var state_48116__$1 = state_48116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48116__$1,inst_48114);
} else {
if((state_val_48117 === (12))){
var state_48116__$1 = state_48116;
var statearr_48126_49435 = state_48116__$1;
(statearr_48126_49435[(2)] = null);

(statearr_48126_49435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48117 === (2))){
var state_48116__$1 = state_48116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48116__$1,(4),ch);
} else {
if((state_val_48117 === (11))){
var inst_48093 = (state_48116[(7)]);
var inst_48103 = (state_48116[(2)]);
var state_48116__$1 = state_48116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48116__$1,(8),inst_48103,inst_48093);
} else {
if((state_val_48117 === (9))){
var state_48116__$1 = state_48116;
var statearr_48127_49442 = state_48116__$1;
(statearr_48127_49442[(2)] = tc);

(statearr_48127_49442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48117 === (5))){
var inst_48096 = cljs.core.async.close_BANG_(tc);
var inst_48097 = cljs.core.async.close_BANG_(fc);
var state_48116__$1 = (function (){var statearr_48128 = state_48116;
(statearr_48128[(8)] = inst_48096);

return statearr_48128;
})();
var statearr_48129_49449 = state_48116__$1;
(statearr_48129_49449[(2)] = inst_48097);

(statearr_48129_49449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48117 === (14))){
var inst_48110 = (state_48116[(2)]);
var state_48116__$1 = state_48116;
var statearr_48130_49453 = state_48116__$1;
(statearr_48130_49453[(2)] = inst_48110);

(statearr_48130_49453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48117 === (10))){
var state_48116__$1 = state_48116;
var statearr_48131_49460 = state_48116__$1;
(statearr_48131_49460[(2)] = fc);

(statearr_48131_49460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48117 === (8))){
var inst_48105 = (state_48116[(2)]);
var state_48116__$1 = state_48116;
if(cljs.core.truth_(inst_48105)){
var statearr_48132_49461 = state_48116__$1;
(statearr_48132_49461[(1)] = (12));

} else {
var statearr_48133_49462 = state_48116__$1;
(statearr_48133_49462[(1)] = (13));

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
var cljs$core$async$state_machine__47706__auto__ = null;
var cljs$core$async$state_machine__47706__auto____0 = (function (){
var statearr_48134 = [null,null,null,null,null,null,null,null,null];
(statearr_48134[(0)] = cljs$core$async$state_machine__47706__auto__);

(statearr_48134[(1)] = (1));

return statearr_48134;
});
var cljs$core$async$state_machine__47706__auto____1 = (function (state_48116){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48116);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48135){var ex__47709__auto__ = e48135;
var statearr_48136_49464 = state_48116;
(statearr_48136_49464[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48116[(4)]))){
var statearr_48137_49465 = state_48116;
(statearr_48137_49465[(1)] = cljs.core.first((state_48116[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49466 = state_48116;
state_48116 = G__49466;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$state_machine__47706__auto__ = function(state_48116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47706__auto____1.call(this,state_48116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47706__auto____0;
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47706__auto____1;
return cljs$core$async$state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48138 = f__47777__auto__();
(statearr_48138[(6)] = c__47776__auto___49427);

return statearr_48138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
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
var c__47776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48160){
var state_val_48161 = (state_48160[(1)]);
if((state_val_48161 === (7))){
var inst_48156 = (state_48160[(2)]);
var state_48160__$1 = state_48160;
var statearr_48162_49467 = state_48160__$1;
(statearr_48162_49467[(2)] = inst_48156);

(statearr_48162_49467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (1))){
var inst_48139 = init;
var inst_48140 = inst_48139;
var state_48160__$1 = (function (){var statearr_48163 = state_48160;
(statearr_48163[(7)] = inst_48140);

return statearr_48163;
})();
var statearr_48164_49468 = state_48160__$1;
(statearr_48164_49468[(2)] = null);

(statearr_48164_49468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (4))){
var inst_48143 = (state_48160[(8)]);
var inst_48143__$1 = (state_48160[(2)]);
var inst_48144 = (inst_48143__$1 == null);
var state_48160__$1 = (function (){var statearr_48165 = state_48160;
(statearr_48165[(8)] = inst_48143__$1);

return statearr_48165;
})();
if(cljs.core.truth_(inst_48144)){
var statearr_48166_49469 = state_48160__$1;
(statearr_48166_49469[(1)] = (5));

} else {
var statearr_48167_49470 = state_48160__$1;
(statearr_48167_49470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (6))){
var inst_48140 = (state_48160[(7)]);
var inst_48143 = (state_48160[(8)]);
var inst_48147 = (state_48160[(9)]);
var inst_48147__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_48140,inst_48143) : f.call(null,inst_48140,inst_48143));
var inst_48148 = cljs.core.reduced_QMARK_(inst_48147__$1);
var state_48160__$1 = (function (){var statearr_48168 = state_48160;
(statearr_48168[(9)] = inst_48147__$1);

return statearr_48168;
})();
if(inst_48148){
var statearr_48169_49471 = state_48160__$1;
(statearr_48169_49471[(1)] = (8));

} else {
var statearr_48170_49472 = state_48160__$1;
(statearr_48170_49472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (3))){
var inst_48158 = (state_48160[(2)]);
var state_48160__$1 = state_48160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48160__$1,inst_48158);
} else {
if((state_val_48161 === (2))){
var state_48160__$1 = state_48160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48160__$1,(4),ch);
} else {
if((state_val_48161 === (9))){
var inst_48147 = (state_48160[(9)]);
var inst_48140 = inst_48147;
var state_48160__$1 = (function (){var statearr_48171 = state_48160;
(statearr_48171[(7)] = inst_48140);

return statearr_48171;
})();
var statearr_48172_49473 = state_48160__$1;
(statearr_48172_49473[(2)] = null);

(statearr_48172_49473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (5))){
var inst_48140 = (state_48160[(7)]);
var state_48160__$1 = state_48160;
var statearr_48173_49474 = state_48160__$1;
(statearr_48173_49474[(2)] = inst_48140);

(statearr_48173_49474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (10))){
var inst_48154 = (state_48160[(2)]);
var state_48160__$1 = state_48160;
var statearr_48174_49475 = state_48160__$1;
(statearr_48174_49475[(2)] = inst_48154);

(statearr_48174_49475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48161 === (8))){
var inst_48147 = (state_48160[(9)]);
var inst_48150 = cljs.core.deref(inst_48147);
var state_48160__$1 = state_48160;
var statearr_48175_49476 = state_48160__$1;
(statearr_48175_49476[(2)] = inst_48150);

(statearr_48175_49476[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__47706__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47706__auto____0 = (function (){
var statearr_48176 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48176[(0)] = cljs$core$async$reduce_$_state_machine__47706__auto__);

(statearr_48176[(1)] = (1));

return statearr_48176;
});
var cljs$core$async$reduce_$_state_machine__47706__auto____1 = (function (state_48160){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48160);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48177){var ex__47709__auto__ = e48177;
var statearr_48178_49478 = state_48160;
(statearr_48178_49478[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48160[(4)]))){
var statearr_48179_49479 = state_48160;
(statearr_48179_49479[(1)] = cljs.core.first((state_48160[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49480 = state_48160;
state_48160 = G__49480;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47706__auto__ = function(state_48160){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47706__auto____1.call(this,state_48160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47706__auto____0;
cljs$core$async$reduce_$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47706__auto____1;
return cljs$core$async$reduce_$_state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48180 = f__47777__auto__();
(statearr_48180[(6)] = c__47776__auto__);

return statearr_48180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
}));

return c__47776__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48186){
var state_val_48187 = (state_48186[(1)]);
if((state_val_48187 === (1))){
var inst_48181 = cljs.core.async.reduce(f__$1,init,ch);
var state_48186__$1 = state_48186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48186__$1,(2),inst_48181);
} else {
if((state_val_48187 === (2))){
var inst_48183 = (state_48186[(2)]);
var inst_48184 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48183) : f__$1.call(null,inst_48183));
var state_48186__$1 = state_48186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48186__$1,inst_48184);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47706__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47706__auto____0 = (function (){
var statearr_48188 = [null,null,null,null,null,null,null];
(statearr_48188[(0)] = cljs$core$async$transduce_$_state_machine__47706__auto__);

(statearr_48188[(1)] = (1));

return statearr_48188;
});
var cljs$core$async$transduce_$_state_machine__47706__auto____1 = (function (state_48186){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48186);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48189){var ex__47709__auto__ = e48189;
var statearr_48190_49481 = state_48186;
(statearr_48190_49481[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48186[(4)]))){
var statearr_48191_49482 = state_48186;
(statearr_48191_49482[(1)] = cljs.core.first((state_48186[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49483 = state_48186;
state_48186 = G__49483;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47706__auto__ = function(state_48186){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47706__auto____1.call(this,state_48186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47706__auto____0;
cljs$core$async$transduce_$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47706__auto____1;
return cljs$core$async$transduce_$_state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48192 = f__47777__auto__();
(statearr_48192[(6)] = c__47776__auto__);

return statearr_48192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
}));

return c__47776__auto__;
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
var G__48194 = arguments.length;
switch (G__48194) {
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
var c__47776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48219){
var state_val_48220 = (state_48219[(1)]);
if((state_val_48220 === (7))){
var inst_48201 = (state_48219[(2)]);
var state_48219__$1 = state_48219;
var statearr_48221_49485 = state_48219__$1;
(statearr_48221_49485[(2)] = inst_48201);

(statearr_48221_49485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48220 === (1))){
var inst_48195 = cljs.core.seq(coll);
var inst_48196 = inst_48195;
var state_48219__$1 = (function (){var statearr_48222 = state_48219;
(statearr_48222[(7)] = inst_48196);

return statearr_48222;
})();
var statearr_48223_49486 = state_48219__$1;
(statearr_48223_49486[(2)] = null);

(statearr_48223_49486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48220 === (4))){
var inst_48196 = (state_48219[(7)]);
var inst_48199 = cljs.core.first(inst_48196);
var state_48219__$1 = state_48219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48219__$1,(7),ch,inst_48199);
} else {
if((state_val_48220 === (13))){
var inst_48213 = (state_48219[(2)]);
var state_48219__$1 = state_48219;
var statearr_48224_49487 = state_48219__$1;
(statearr_48224_49487[(2)] = inst_48213);

(statearr_48224_49487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48220 === (6))){
var inst_48204 = (state_48219[(2)]);
var state_48219__$1 = state_48219;
if(cljs.core.truth_(inst_48204)){
var statearr_48225_49488 = state_48219__$1;
(statearr_48225_49488[(1)] = (8));

} else {
var statearr_48226_49489 = state_48219__$1;
(statearr_48226_49489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48220 === (3))){
var inst_48217 = (state_48219[(2)]);
var state_48219__$1 = state_48219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48219__$1,inst_48217);
} else {
if((state_val_48220 === (12))){
var state_48219__$1 = state_48219;
var statearr_48227_49490 = state_48219__$1;
(statearr_48227_49490[(2)] = null);

(statearr_48227_49490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48220 === (2))){
var inst_48196 = (state_48219[(7)]);
var state_48219__$1 = state_48219;
if(cljs.core.truth_(inst_48196)){
var statearr_48228_49491 = state_48219__$1;
(statearr_48228_49491[(1)] = (4));

} else {
var statearr_48229_49492 = state_48219__$1;
(statearr_48229_49492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48220 === (11))){
var inst_48210 = cljs.core.async.close_BANG_(ch);
var state_48219__$1 = state_48219;
var statearr_48230_49493 = state_48219__$1;
(statearr_48230_49493[(2)] = inst_48210);

(statearr_48230_49493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48220 === (9))){
var state_48219__$1 = state_48219;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48231_49494 = state_48219__$1;
(statearr_48231_49494[(1)] = (11));

} else {
var statearr_48232_49495 = state_48219__$1;
(statearr_48232_49495[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48220 === (5))){
var inst_48196 = (state_48219[(7)]);
var state_48219__$1 = state_48219;
var statearr_48233_49496 = state_48219__$1;
(statearr_48233_49496[(2)] = inst_48196);

(statearr_48233_49496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48220 === (10))){
var inst_48215 = (state_48219[(2)]);
var state_48219__$1 = state_48219;
var statearr_48234_49497 = state_48219__$1;
(statearr_48234_49497[(2)] = inst_48215);

(statearr_48234_49497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48220 === (8))){
var inst_48196 = (state_48219[(7)]);
var inst_48206 = cljs.core.next(inst_48196);
var inst_48196__$1 = inst_48206;
var state_48219__$1 = (function (){var statearr_48235 = state_48219;
(statearr_48235[(7)] = inst_48196__$1);

return statearr_48235;
})();
var statearr_48236_49498 = state_48219__$1;
(statearr_48236_49498[(2)] = null);

(statearr_48236_49498[(1)] = (2));


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
var cljs$core$async$state_machine__47706__auto__ = null;
var cljs$core$async$state_machine__47706__auto____0 = (function (){
var statearr_48237 = [null,null,null,null,null,null,null,null];
(statearr_48237[(0)] = cljs$core$async$state_machine__47706__auto__);

(statearr_48237[(1)] = (1));

return statearr_48237;
});
var cljs$core$async$state_machine__47706__auto____1 = (function (state_48219){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48219);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48238){var ex__47709__auto__ = e48238;
var statearr_48239_49499 = state_48219;
(statearr_48239_49499[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48219[(4)]))){
var statearr_48240_49500 = state_48219;
(statearr_48240_49500[(1)] = cljs.core.first((state_48219[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49501 = state_48219;
state_48219 = G__49501;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$state_machine__47706__auto__ = function(state_48219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47706__auto____1.call(this,state_48219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47706__auto____0;
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47706__auto____1;
return cljs$core$async$state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48241 = f__47777__auto__();
(statearr_48241[(6)] = c__47776__auto__);

return statearr_48241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
}));

return c__47776__auto__;
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
var G__48243 = arguments.length;
switch (G__48243) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_49503 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_49503(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49505 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_49505(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49506 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_49506(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49507 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_49507(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48244 = (function (ch,cs,meta48245){
this.ch = ch;
this.cs = cs;
this.meta48245 = meta48245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48246,meta48245__$1){
var self__ = this;
var _48246__$1 = this;
return (new cljs.core.async.t_cljs$core$async48244(self__.ch,self__.cs,meta48245__$1));
}));

(cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48246){
var self__ = this;
var _48246__$1 = this;
return self__.meta48245;
}));

(cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48244.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48245","meta48245",-94065709,null)], null);
}));

(cljs.core.async.t_cljs$core$async48244.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48244");

(cljs.core.async.t_cljs$core$async48244.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48244");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48244.
 */
cljs.core.async.__GT_t_cljs$core$async48244 = (function cljs$core$async$__GT_t_cljs$core$async48244(ch,cs,meta48245){
return (new cljs.core.async.t_cljs$core$async48244(ch,cs,meta48245));
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
var m = (new cljs.core.async.t_cljs$core$async48244(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__47776__auto___49508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48379){
var state_val_48380 = (state_48379[(1)]);
if((state_val_48380 === (7))){
var inst_48375 = (state_48379[(2)]);
var state_48379__$1 = state_48379;
var statearr_48381_49509 = state_48379__$1;
(statearr_48381_49509[(2)] = inst_48375);

(statearr_48381_49509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (20))){
var inst_48280 = (state_48379[(7)]);
var inst_48292 = cljs.core.first(inst_48280);
var inst_48293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48292,(0),null);
var inst_48294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48292,(1),null);
var state_48379__$1 = (function (){var statearr_48382 = state_48379;
(statearr_48382[(8)] = inst_48293);

return statearr_48382;
})();
if(cljs.core.truth_(inst_48294)){
var statearr_48383_49510 = state_48379__$1;
(statearr_48383_49510[(1)] = (22));

} else {
var statearr_48384_49511 = state_48379__$1;
(statearr_48384_49511[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (27))){
var inst_48322 = (state_48379[(9)]);
var inst_48324 = (state_48379[(10)]);
var inst_48329 = (state_48379[(11)]);
var inst_48249 = (state_48379[(12)]);
var inst_48329__$1 = cljs.core._nth(inst_48322,inst_48324);
var inst_48330 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48329__$1,inst_48249,done);
var state_48379__$1 = (function (){var statearr_48385 = state_48379;
(statearr_48385[(11)] = inst_48329__$1);

return statearr_48385;
})();
if(cljs.core.truth_(inst_48330)){
var statearr_48386_49512 = state_48379__$1;
(statearr_48386_49512[(1)] = (30));

} else {
var statearr_48387_49513 = state_48379__$1;
(statearr_48387_49513[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (1))){
var state_48379__$1 = state_48379;
var statearr_48388_49514 = state_48379__$1;
(statearr_48388_49514[(2)] = null);

(statearr_48388_49514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (24))){
var inst_48280 = (state_48379[(7)]);
var inst_48299 = (state_48379[(2)]);
var inst_48300 = cljs.core.next(inst_48280);
var inst_48258 = inst_48300;
var inst_48259 = null;
var inst_48260 = (0);
var inst_48261 = (0);
var state_48379__$1 = (function (){var statearr_48389 = state_48379;
(statearr_48389[(13)] = inst_48299);

(statearr_48389[(14)] = inst_48258);

(statearr_48389[(15)] = inst_48259);

(statearr_48389[(16)] = inst_48260);

(statearr_48389[(17)] = inst_48261);

return statearr_48389;
})();
var statearr_48390_49515 = state_48379__$1;
(statearr_48390_49515[(2)] = null);

(statearr_48390_49515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (39))){
var state_48379__$1 = state_48379;
var statearr_48394_49516 = state_48379__$1;
(statearr_48394_49516[(2)] = null);

(statearr_48394_49516[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (4))){
var inst_48249 = (state_48379[(12)]);
var inst_48249__$1 = (state_48379[(2)]);
var inst_48250 = (inst_48249__$1 == null);
var state_48379__$1 = (function (){var statearr_48395 = state_48379;
(statearr_48395[(12)] = inst_48249__$1);

return statearr_48395;
})();
if(cljs.core.truth_(inst_48250)){
var statearr_48396_49518 = state_48379__$1;
(statearr_48396_49518[(1)] = (5));

} else {
var statearr_48397_49519 = state_48379__$1;
(statearr_48397_49519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (15))){
var inst_48261 = (state_48379[(17)]);
var inst_48258 = (state_48379[(14)]);
var inst_48259 = (state_48379[(15)]);
var inst_48260 = (state_48379[(16)]);
var inst_48276 = (state_48379[(2)]);
var inst_48277 = (inst_48261 + (1));
var tmp48391 = inst_48260;
var tmp48392 = inst_48258;
var tmp48393 = inst_48259;
var inst_48258__$1 = tmp48392;
var inst_48259__$1 = tmp48393;
var inst_48260__$1 = tmp48391;
var inst_48261__$1 = inst_48277;
var state_48379__$1 = (function (){var statearr_48398 = state_48379;
(statearr_48398[(18)] = inst_48276);

(statearr_48398[(14)] = inst_48258__$1);

(statearr_48398[(15)] = inst_48259__$1);

(statearr_48398[(16)] = inst_48260__$1);

(statearr_48398[(17)] = inst_48261__$1);

return statearr_48398;
})();
var statearr_48399_49523 = state_48379__$1;
(statearr_48399_49523[(2)] = null);

(statearr_48399_49523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (21))){
var inst_48303 = (state_48379[(2)]);
var state_48379__$1 = state_48379;
var statearr_48403_49528 = state_48379__$1;
(statearr_48403_49528[(2)] = inst_48303);

(statearr_48403_49528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (31))){
var inst_48329 = (state_48379[(11)]);
var inst_48333 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48329);
var state_48379__$1 = state_48379;
var statearr_48404_49529 = state_48379__$1;
(statearr_48404_49529[(2)] = inst_48333);

(statearr_48404_49529[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (32))){
var inst_48324 = (state_48379[(10)]);
var inst_48321 = (state_48379[(19)]);
var inst_48322 = (state_48379[(9)]);
var inst_48323 = (state_48379[(20)]);
var inst_48335 = (state_48379[(2)]);
var inst_48336 = (inst_48324 + (1));
var tmp48400 = inst_48323;
var tmp48401 = inst_48321;
var tmp48402 = inst_48322;
var inst_48321__$1 = tmp48401;
var inst_48322__$1 = tmp48402;
var inst_48323__$1 = tmp48400;
var inst_48324__$1 = inst_48336;
var state_48379__$1 = (function (){var statearr_48405 = state_48379;
(statearr_48405[(21)] = inst_48335);

(statearr_48405[(19)] = inst_48321__$1);

(statearr_48405[(9)] = inst_48322__$1);

(statearr_48405[(20)] = inst_48323__$1);

(statearr_48405[(10)] = inst_48324__$1);

return statearr_48405;
})();
var statearr_48406_49531 = state_48379__$1;
(statearr_48406_49531[(2)] = null);

(statearr_48406_49531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (40))){
var inst_48348 = (state_48379[(22)]);
var inst_48352 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48348);
var state_48379__$1 = state_48379;
var statearr_48407_49535 = state_48379__$1;
(statearr_48407_49535[(2)] = inst_48352);

(statearr_48407_49535[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (33))){
var inst_48339 = (state_48379[(23)]);
var inst_48341 = cljs.core.chunked_seq_QMARK_(inst_48339);
var state_48379__$1 = state_48379;
if(inst_48341){
var statearr_48408_49536 = state_48379__$1;
(statearr_48408_49536[(1)] = (36));

} else {
var statearr_48409_49537 = state_48379__$1;
(statearr_48409_49537[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (13))){
var inst_48270 = (state_48379[(24)]);
var inst_48273 = cljs.core.async.close_BANG_(inst_48270);
var state_48379__$1 = state_48379;
var statearr_48410_49539 = state_48379__$1;
(statearr_48410_49539[(2)] = inst_48273);

(statearr_48410_49539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (22))){
var inst_48293 = (state_48379[(8)]);
var inst_48296 = cljs.core.async.close_BANG_(inst_48293);
var state_48379__$1 = state_48379;
var statearr_48411_49540 = state_48379__$1;
(statearr_48411_49540[(2)] = inst_48296);

(statearr_48411_49540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (36))){
var inst_48339 = (state_48379[(23)]);
var inst_48343 = cljs.core.chunk_first(inst_48339);
var inst_48344 = cljs.core.chunk_rest(inst_48339);
var inst_48345 = cljs.core.count(inst_48343);
var inst_48321 = inst_48344;
var inst_48322 = inst_48343;
var inst_48323 = inst_48345;
var inst_48324 = (0);
var state_48379__$1 = (function (){var statearr_48412 = state_48379;
(statearr_48412[(19)] = inst_48321);

(statearr_48412[(9)] = inst_48322);

(statearr_48412[(20)] = inst_48323);

(statearr_48412[(10)] = inst_48324);

return statearr_48412;
})();
var statearr_48413_49541 = state_48379__$1;
(statearr_48413_49541[(2)] = null);

(statearr_48413_49541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (41))){
var inst_48339 = (state_48379[(23)]);
var inst_48354 = (state_48379[(2)]);
var inst_48355 = cljs.core.next(inst_48339);
var inst_48321 = inst_48355;
var inst_48322 = null;
var inst_48323 = (0);
var inst_48324 = (0);
var state_48379__$1 = (function (){var statearr_48414 = state_48379;
(statearr_48414[(25)] = inst_48354);

(statearr_48414[(19)] = inst_48321);

(statearr_48414[(9)] = inst_48322);

(statearr_48414[(20)] = inst_48323);

(statearr_48414[(10)] = inst_48324);

return statearr_48414;
})();
var statearr_48415_49546 = state_48379__$1;
(statearr_48415_49546[(2)] = null);

(statearr_48415_49546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (43))){
var state_48379__$1 = state_48379;
var statearr_48416_49547 = state_48379__$1;
(statearr_48416_49547[(2)] = null);

(statearr_48416_49547[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (29))){
var inst_48363 = (state_48379[(2)]);
var state_48379__$1 = state_48379;
var statearr_48417_49548 = state_48379__$1;
(statearr_48417_49548[(2)] = inst_48363);

(statearr_48417_49548[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (44))){
var inst_48372 = (state_48379[(2)]);
var state_48379__$1 = (function (){var statearr_48418 = state_48379;
(statearr_48418[(26)] = inst_48372);

return statearr_48418;
})();
var statearr_48419_49550 = state_48379__$1;
(statearr_48419_49550[(2)] = null);

(statearr_48419_49550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (6))){
var inst_48313 = (state_48379[(27)]);
var inst_48312 = cljs.core.deref(cs);
var inst_48313__$1 = cljs.core.keys(inst_48312);
var inst_48314 = cljs.core.count(inst_48313__$1);
var inst_48315 = cljs.core.reset_BANG_(dctr,inst_48314);
var inst_48320 = cljs.core.seq(inst_48313__$1);
var inst_48321 = inst_48320;
var inst_48322 = null;
var inst_48323 = (0);
var inst_48324 = (0);
var state_48379__$1 = (function (){var statearr_48420 = state_48379;
(statearr_48420[(27)] = inst_48313__$1);

(statearr_48420[(28)] = inst_48315);

(statearr_48420[(19)] = inst_48321);

(statearr_48420[(9)] = inst_48322);

(statearr_48420[(20)] = inst_48323);

(statearr_48420[(10)] = inst_48324);

return statearr_48420;
})();
var statearr_48421_49551 = state_48379__$1;
(statearr_48421_49551[(2)] = null);

(statearr_48421_49551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (28))){
var inst_48321 = (state_48379[(19)]);
var inst_48339 = (state_48379[(23)]);
var inst_48339__$1 = cljs.core.seq(inst_48321);
var state_48379__$1 = (function (){var statearr_48422 = state_48379;
(statearr_48422[(23)] = inst_48339__$1);

return statearr_48422;
})();
if(inst_48339__$1){
var statearr_48423_49552 = state_48379__$1;
(statearr_48423_49552[(1)] = (33));

} else {
var statearr_48424_49553 = state_48379__$1;
(statearr_48424_49553[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (25))){
var inst_48324 = (state_48379[(10)]);
var inst_48323 = (state_48379[(20)]);
var inst_48326 = (inst_48324 < inst_48323);
var inst_48327 = inst_48326;
var state_48379__$1 = state_48379;
if(cljs.core.truth_(inst_48327)){
var statearr_48425_49555 = state_48379__$1;
(statearr_48425_49555[(1)] = (27));

} else {
var statearr_48426_49559 = state_48379__$1;
(statearr_48426_49559[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (34))){
var state_48379__$1 = state_48379;
var statearr_48427_49560 = state_48379__$1;
(statearr_48427_49560[(2)] = null);

(statearr_48427_49560[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (17))){
var state_48379__$1 = state_48379;
var statearr_48428_49561 = state_48379__$1;
(statearr_48428_49561[(2)] = null);

(statearr_48428_49561[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (3))){
var inst_48377 = (state_48379[(2)]);
var state_48379__$1 = state_48379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48379__$1,inst_48377);
} else {
if((state_val_48380 === (12))){
var inst_48308 = (state_48379[(2)]);
var state_48379__$1 = state_48379;
var statearr_48429_49563 = state_48379__$1;
(statearr_48429_49563[(2)] = inst_48308);

(statearr_48429_49563[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (2))){
var state_48379__$1 = state_48379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48379__$1,(4),ch);
} else {
if((state_val_48380 === (23))){
var state_48379__$1 = state_48379;
var statearr_48430_49567 = state_48379__$1;
(statearr_48430_49567[(2)] = null);

(statearr_48430_49567[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (35))){
var inst_48361 = (state_48379[(2)]);
var state_48379__$1 = state_48379;
var statearr_48431_49568 = state_48379__$1;
(statearr_48431_49568[(2)] = inst_48361);

(statearr_48431_49568[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (19))){
var inst_48280 = (state_48379[(7)]);
var inst_48284 = cljs.core.chunk_first(inst_48280);
var inst_48285 = cljs.core.chunk_rest(inst_48280);
var inst_48286 = cljs.core.count(inst_48284);
var inst_48258 = inst_48285;
var inst_48259 = inst_48284;
var inst_48260 = inst_48286;
var inst_48261 = (0);
var state_48379__$1 = (function (){var statearr_48432 = state_48379;
(statearr_48432[(14)] = inst_48258);

(statearr_48432[(15)] = inst_48259);

(statearr_48432[(16)] = inst_48260);

(statearr_48432[(17)] = inst_48261);

return statearr_48432;
})();
var statearr_48433_49573 = state_48379__$1;
(statearr_48433_49573[(2)] = null);

(statearr_48433_49573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (11))){
var inst_48258 = (state_48379[(14)]);
var inst_48280 = (state_48379[(7)]);
var inst_48280__$1 = cljs.core.seq(inst_48258);
var state_48379__$1 = (function (){var statearr_48434 = state_48379;
(statearr_48434[(7)] = inst_48280__$1);

return statearr_48434;
})();
if(inst_48280__$1){
var statearr_48435_49574 = state_48379__$1;
(statearr_48435_49574[(1)] = (16));

} else {
var statearr_48436_49575 = state_48379__$1;
(statearr_48436_49575[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (9))){
var inst_48310 = (state_48379[(2)]);
var state_48379__$1 = state_48379;
var statearr_48437_49577 = state_48379__$1;
(statearr_48437_49577[(2)] = inst_48310);

(statearr_48437_49577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (5))){
var inst_48256 = cljs.core.deref(cs);
var inst_48257 = cljs.core.seq(inst_48256);
var inst_48258 = inst_48257;
var inst_48259 = null;
var inst_48260 = (0);
var inst_48261 = (0);
var state_48379__$1 = (function (){var statearr_48438 = state_48379;
(statearr_48438[(14)] = inst_48258);

(statearr_48438[(15)] = inst_48259);

(statearr_48438[(16)] = inst_48260);

(statearr_48438[(17)] = inst_48261);

return statearr_48438;
})();
var statearr_48439_49581 = state_48379__$1;
(statearr_48439_49581[(2)] = null);

(statearr_48439_49581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (14))){
var state_48379__$1 = state_48379;
var statearr_48440_49582 = state_48379__$1;
(statearr_48440_49582[(2)] = null);

(statearr_48440_49582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (45))){
var inst_48369 = (state_48379[(2)]);
var state_48379__$1 = state_48379;
var statearr_48441_49587 = state_48379__$1;
(statearr_48441_49587[(2)] = inst_48369);

(statearr_48441_49587[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (26))){
var inst_48313 = (state_48379[(27)]);
var inst_48365 = (state_48379[(2)]);
var inst_48366 = cljs.core.seq(inst_48313);
var state_48379__$1 = (function (){var statearr_48442 = state_48379;
(statearr_48442[(29)] = inst_48365);

return statearr_48442;
})();
if(inst_48366){
var statearr_48443_49588 = state_48379__$1;
(statearr_48443_49588[(1)] = (42));

} else {
var statearr_48444_49589 = state_48379__$1;
(statearr_48444_49589[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (16))){
var inst_48280 = (state_48379[(7)]);
var inst_48282 = cljs.core.chunked_seq_QMARK_(inst_48280);
var state_48379__$1 = state_48379;
if(inst_48282){
var statearr_48445_49590 = state_48379__$1;
(statearr_48445_49590[(1)] = (19));

} else {
var statearr_48446_49592 = state_48379__$1;
(statearr_48446_49592[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (38))){
var inst_48358 = (state_48379[(2)]);
var state_48379__$1 = state_48379;
var statearr_48447_49596 = state_48379__$1;
(statearr_48447_49596[(2)] = inst_48358);

(statearr_48447_49596[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (30))){
var state_48379__$1 = state_48379;
var statearr_48448_49597 = state_48379__$1;
(statearr_48448_49597[(2)] = null);

(statearr_48448_49597[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (10))){
var inst_48259 = (state_48379[(15)]);
var inst_48261 = (state_48379[(17)]);
var inst_48269 = cljs.core._nth(inst_48259,inst_48261);
var inst_48270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48269,(0),null);
var inst_48271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48269,(1),null);
var state_48379__$1 = (function (){var statearr_48449 = state_48379;
(statearr_48449[(24)] = inst_48270);

return statearr_48449;
})();
if(cljs.core.truth_(inst_48271)){
var statearr_48450_49598 = state_48379__$1;
(statearr_48450_49598[(1)] = (13));

} else {
var statearr_48451_49599 = state_48379__$1;
(statearr_48451_49599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (18))){
var inst_48306 = (state_48379[(2)]);
var state_48379__$1 = state_48379;
var statearr_48452_49600 = state_48379__$1;
(statearr_48452_49600[(2)] = inst_48306);

(statearr_48452_49600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (42))){
var state_48379__$1 = state_48379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48379__$1,(45),dchan);
} else {
if((state_val_48380 === (37))){
var inst_48339 = (state_48379[(23)]);
var inst_48348 = (state_48379[(22)]);
var inst_48249 = (state_48379[(12)]);
var inst_48348__$1 = cljs.core.first(inst_48339);
var inst_48349 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48348__$1,inst_48249,done);
var state_48379__$1 = (function (){var statearr_48453 = state_48379;
(statearr_48453[(22)] = inst_48348__$1);

return statearr_48453;
})();
if(cljs.core.truth_(inst_48349)){
var statearr_48454_49601 = state_48379__$1;
(statearr_48454_49601[(1)] = (39));

} else {
var statearr_48455_49602 = state_48379__$1;
(statearr_48455_49602[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48380 === (8))){
var inst_48261 = (state_48379[(17)]);
var inst_48260 = (state_48379[(16)]);
var inst_48263 = (inst_48261 < inst_48260);
var inst_48264 = inst_48263;
var state_48379__$1 = state_48379;
if(cljs.core.truth_(inst_48264)){
var statearr_48456_49603 = state_48379__$1;
(statearr_48456_49603[(1)] = (10));

} else {
var statearr_48457_49604 = state_48379__$1;
(statearr_48457_49604[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__47706__auto__ = null;
var cljs$core$async$mult_$_state_machine__47706__auto____0 = (function (){
var statearr_48458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48458[(0)] = cljs$core$async$mult_$_state_machine__47706__auto__);

(statearr_48458[(1)] = (1));

return statearr_48458;
});
var cljs$core$async$mult_$_state_machine__47706__auto____1 = (function (state_48379){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48379);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48459){var ex__47709__auto__ = e48459;
var statearr_48460_49609 = state_48379;
(statearr_48460_49609[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48379[(4)]))){
var statearr_48461_49610 = state_48379;
(statearr_48461_49610[(1)] = cljs.core.first((state_48379[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49611 = state_48379;
state_48379 = G__49611;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47706__auto__ = function(state_48379){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47706__auto____1.call(this,state_48379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47706__auto____0;
cljs$core$async$mult_$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47706__auto____1;
return cljs$core$async$mult_$_state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48462 = f__47777__auto__();
(statearr_48462[(6)] = c__47776__auto___49508);

return statearr_48462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
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
var G__48464 = arguments.length;
switch (G__48464) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_49615 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_49615(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49618 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_49618(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49619 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49619(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49620 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_49620(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49623 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49623(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49624 = arguments.length;
var i__5750__auto___49625 = (0);
while(true){
if((i__5750__auto___49625 < len__5749__auto___49624)){
args__5755__auto__.push((arguments[i__5750__auto___49625]));

var G__49627 = (i__5750__auto___49625 + (1));
i__5750__auto___49625 = G__49627;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48469){
var map__48470 = p__48469;
var map__48470__$1 = cljs.core.__destructure_map(map__48470);
var opts = map__48470__$1;
var statearr_48471_49635 = state;
(statearr_48471_49635[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48472_49636 = state;
(statearr_48472_49636[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_48473_49637 = state;
(statearr_48473_49637[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48465){
var G__48466 = cljs.core.first(seq48465);
var seq48465__$1 = cljs.core.next(seq48465);
var G__48467 = cljs.core.first(seq48465__$1);
var seq48465__$2 = cljs.core.next(seq48465__$1);
var G__48468 = cljs.core.first(seq48465__$2);
var seq48465__$3 = cljs.core.next(seq48465__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48466,G__48467,G__48468,seq48465__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48474 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48475){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48475 = meta48475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48476,meta48475__$1){
var self__ = this;
var _48476__$1 = this;
return (new cljs.core.async.t_cljs$core$async48474(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48475__$1));
}));

(cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48476){
var self__ = this;
var _48476__$1 = this;
return self__.meta48475;
}));

(cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48474.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48475","meta48475",-311114979,null)], null);
}));

(cljs.core.async.t_cljs$core$async48474.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48474");

(cljs.core.async.t_cljs$core$async48474.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48474");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48474.
 */
cljs.core.async.__GT_t_cljs$core$async48474 = (function cljs$core$async$__GT_t_cljs$core$async48474(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48475){
return (new cljs.core.async.t_cljs$core$async48474(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48475));
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
var m = (new cljs.core.async.t_cljs$core$async48474(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__47776__auto___49666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48544){
var state_val_48545 = (state_48544[(1)]);
if((state_val_48545 === (7))){
var inst_48504 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48504)){
var statearr_48546_49667 = state_48544__$1;
(statearr_48546_49667[(1)] = (8));

} else {
var statearr_48547_49668 = state_48544__$1;
(statearr_48547_49668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (20))){
var inst_48497 = (state_48544[(7)]);
var state_48544__$1 = state_48544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48544__$1,(23),out,inst_48497);
} else {
if((state_val_48545 === (1))){
var inst_48480 = calc_state();
var inst_48481 = cljs.core.__destructure_map(inst_48480);
var inst_48482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48481,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48481,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48481,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48485 = inst_48480;
var state_48544__$1 = (function (){var statearr_48548 = state_48544;
(statearr_48548[(8)] = inst_48482);

(statearr_48548[(9)] = inst_48483);

(statearr_48548[(10)] = inst_48484);

(statearr_48548[(11)] = inst_48485);

return statearr_48548;
})();
var statearr_48549_49669 = state_48544__$1;
(statearr_48549_49669[(2)] = null);

(statearr_48549_49669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (24))){
var inst_48488 = (state_48544[(12)]);
var inst_48485 = inst_48488;
var state_48544__$1 = (function (){var statearr_48550 = state_48544;
(statearr_48550[(11)] = inst_48485);

return statearr_48550;
})();
var statearr_48551_49670 = state_48544__$1;
(statearr_48551_49670[(2)] = null);

(statearr_48551_49670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (4))){
var inst_48497 = (state_48544[(7)]);
var inst_48499 = (state_48544[(13)]);
var inst_48496 = (state_48544[(2)]);
var inst_48497__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48496,(0),null);
var inst_48498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48496,(1),null);
var inst_48499__$1 = (inst_48497__$1 == null);
var state_48544__$1 = (function (){var statearr_48552 = state_48544;
(statearr_48552[(7)] = inst_48497__$1);

(statearr_48552[(14)] = inst_48498);

(statearr_48552[(13)] = inst_48499__$1);

return statearr_48552;
})();
if(cljs.core.truth_(inst_48499__$1)){
var statearr_48553_49671 = state_48544__$1;
(statearr_48553_49671[(1)] = (5));

} else {
var statearr_48554_49672 = state_48544__$1;
(statearr_48554_49672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (15))){
var inst_48489 = (state_48544[(15)]);
var inst_48518 = (state_48544[(16)]);
var inst_48518__$1 = cljs.core.empty_QMARK_(inst_48489);
var state_48544__$1 = (function (){var statearr_48555 = state_48544;
(statearr_48555[(16)] = inst_48518__$1);

return statearr_48555;
})();
if(inst_48518__$1){
var statearr_48556_49674 = state_48544__$1;
(statearr_48556_49674[(1)] = (17));

} else {
var statearr_48557_49679 = state_48544__$1;
(statearr_48557_49679[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (21))){
var inst_48488 = (state_48544[(12)]);
var inst_48485 = inst_48488;
var state_48544__$1 = (function (){var statearr_48558 = state_48544;
(statearr_48558[(11)] = inst_48485);

return statearr_48558;
})();
var statearr_48559_49681 = state_48544__$1;
(statearr_48559_49681[(2)] = null);

(statearr_48559_49681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (13))){
var inst_48511 = (state_48544[(2)]);
var inst_48512 = calc_state();
var inst_48485 = inst_48512;
var state_48544__$1 = (function (){var statearr_48560 = state_48544;
(statearr_48560[(17)] = inst_48511);

(statearr_48560[(11)] = inst_48485);

return statearr_48560;
})();
var statearr_48561_49683 = state_48544__$1;
(statearr_48561_49683[(2)] = null);

(statearr_48561_49683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (22))){
var inst_48538 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48562_49684 = state_48544__$1;
(statearr_48562_49684[(2)] = inst_48538);

(statearr_48562_49684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (6))){
var inst_48498 = (state_48544[(14)]);
var inst_48502 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48498,change);
var state_48544__$1 = state_48544;
var statearr_48563_49685 = state_48544__$1;
(statearr_48563_49685[(2)] = inst_48502);

(statearr_48563_49685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (25))){
var state_48544__$1 = state_48544;
var statearr_48564_49686 = state_48544__$1;
(statearr_48564_49686[(2)] = null);

(statearr_48564_49686[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (17))){
var inst_48490 = (state_48544[(18)]);
var inst_48498 = (state_48544[(14)]);
var inst_48520 = (inst_48490.cljs$core$IFn$_invoke$arity$1 ? inst_48490.cljs$core$IFn$_invoke$arity$1(inst_48498) : inst_48490.call(null,inst_48498));
var inst_48521 = cljs.core.not(inst_48520);
var state_48544__$1 = state_48544;
var statearr_48565_49694 = state_48544__$1;
(statearr_48565_49694[(2)] = inst_48521);

(statearr_48565_49694[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (3))){
var inst_48542 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48544__$1,inst_48542);
} else {
if((state_val_48545 === (12))){
var state_48544__$1 = state_48544;
var statearr_48566_49700 = state_48544__$1;
(statearr_48566_49700[(2)] = null);

(statearr_48566_49700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (2))){
var inst_48485 = (state_48544[(11)]);
var inst_48488 = (state_48544[(12)]);
var inst_48488__$1 = cljs.core.__destructure_map(inst_48485);
var inst_48489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48488__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48488__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48488__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48544__$1 = (function (){var statearr_48567 = state_48544;
(statearr_48567[(12)] = inst_48488__$1);

(statearr_48567[(15)] = inst_48489);

(statearr_48567[(18)] = inst_48490);

return statearr_48567;
})();
return cljs.core.async.ioc_alts_BANG_(state_48544__$1,(4),inst_48491);
} else {
if((state_val_48545 === (23))){
var inst_48529 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48529)){
var statearr_48568_49714 = state_48544__$1;
(statearr_48568_49714[(1)] = (24));

} else {
var statearr_48569_49715 = state_48544__$1;
(statearr_48569_49715[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (19))){
var inst_48524 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48570_49716 = state_48544__$1;
(statearr_48570_49716[(2)] = inst_48524);

(statearr_48570_49716[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (11))){
var inst_48498 = (state_48544[(14)]);
var inst_48508 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48498);
var state_48544__$1 = state_48544;
var statearr_48571_49717 = state_48544__$1;
(statearr_48571_49717[(2)] = inst_48508);

(statearr_48571_49717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (9))){
var inst_48489 = (state_48544[(15)]);
var inst_48498 = (state_48544[(14)]);
var inst_48515 = (state_48544[(19)]);
var inst_48515__$1 = (inst_48489.cljs$core$IFn$_invoke$arity$1 ? inst_48489.cljs$core$IFn$_invoke$arity$1(inst_48498) : inst_48489.call(null,inst_48498));
var state_48544__$1 = (function (){var statearr_48572 = state_48544;
(statearr_48572[(19)] = inst_48515__$1);

return statearr_48572;
})();
if(cljs.core.truth_(inst_48515__$1)){
var statearr_48573_49719 = state_48544__$1;
(statearr_48573_49719[(1)] = (14));

} else {
var statearr_48574_49720 = state_48544__$1;
(statearr_48574_49720[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (5))){
var inst_48499 = (state_48544[(13)]);
var state_48544__$1 = state_48544;
var statearr_48575_49721 = state_48544__$1;
(statearr_48575_49721[(2)] = inst_48499);

(statearr_48575_49721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (14))){
var inst_48515 = (state_48544[(19)]);
var state_48544__$1 = state_48544;
var statearr_48576_49722 = state_48544__$1;
(statearr_48576_49722[(2)] = inst_48515);

(statearr_48576_49722[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (26))){
var inst_48534 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48577_49723 = state_48544__$1;
(statearr_48577_49723[(2)] = inst_48534);

(statearr_48577_49723[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (16))){
var inst_48526 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48526)){
var statearr_48578_49724 = state_48544__$1;
(statearr_48578_49724[(1)] = (20));

} else {
var statearr_48579_49725 = state_48544__$1;
(statearr_48579_49725[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (10))){
var inst_48540 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48580_49726 = state_48544__$1;
(statearr_48580_49726[(2)] = inst_48540);

(statearr_48580_49726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (18))){
var inst_48518 = (state_48544[(16)]);
var state_48544__$1 = state_48544;
var statearr_48581_49729 = state_48544__$1;
(statearr_48581_49729[(2)] = inst_48518);

(statearr_48581_49729[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (8))){
var inst_48497 = (state_48544[(7)]);
var inst_48506 = (inst_48497 == null);
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48506)){
var statearr_48582_49730 = state_48544__$1;
(statearr_48582_49730[(1)] = (11));

} else {
var statearr_48583_49731 = state_48544__$1;
(statearr_48583_49731[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__47706__auto__ = null;
var cljs$core$async$mix_$_state_machine__47706__auto____0 = (function (){
var statearr_48584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48584[(0)] = cljs$core$async$mix_$_state_machine__47706__auto__);

(statearr_48584[(1)] = (1));

return statearr_48584;
});
var cljs$core$async$mix_$_state_machine__47706__auto____1 = (function (state_48544){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48544);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48585){var ex__47709__auto__ = e48585;
var statearr_48586_49732 = state_48544;
(statearr_48586_49732[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48544[(4)]))){
var statearr_48587_49733 = state_48544;
(statearr_48587_49733[(1)] = cljs.core.first((state_48544[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49734 = state_48544;
state_48544 = G__49734;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47706__auto__ = function(state_48544){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47706__auto____1.call(this,state_48544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47706__auto____0;
cljs$core$async$mix_$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47706__auto____1;
return cljs$core$async$mix_$_state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48588 = f__47777__auto__();
(statearr_48588[(6)] = c__47776__auto___49666);

return statearr_48588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_49735 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_49735(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49737 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_49737(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49738 = (function() {
var G__49739 = null;
var G__49739__1 = (function (p){
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
var G__49739__2 = (function (p,v){
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
G__49739 = function(p,v){
switch(arguments.length){
case 1:
return G__49739__1.call(this,p);
case 2:
return G__49739__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49739.cljs$core$IFn$_invoke$arity$1 = G__49739__1;
G__49739.cljs$core$IFn$_invoke$arity$2 = G__49739__2;
return G__49739;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48590 = arguments.length;
switch (G__48590) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49738(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49738(p,v);
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
cljs.core.async.t_cljs$core$async48594 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48595){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48595 = meta48595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48596,meta48595__$1){
var self__ = this;
var _48596__$1 = this;
return (new cljs.core.async.t_cljs$core$async48594(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48595__$1));
}));

(cljs.core.async.t_cljs$core$async48594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48596){
var self__ = this;
var _48596__$1 = this;
return self__.meta48595;
}));

(cljs.core.async.t_cljs$core$async48594.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48594.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48594.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48594.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async48594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48595","meta48595",458571405,null)], null);
}));

(cljs.core.async.t_cljs$core$async48594.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48594");

(cljs.core.async.t_cljs$core$async48594.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48594");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48594.
 */
cljs.core.async.__GT_t_cljs$core$async48594 = (function cljs$core$async$__GT_t_cljs$core$async48594(ch,topic_fn,buf_fn,mults,ensure_mult,meta48595){
return (new cljs.core.async.t_cljs$core$async48594(ch,topic_fn,buf_fn,mults,ensure_mult,meta48595));
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
var G__48593 = arguments.length;
switch (G__48593) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48591_SHARP_){
if(cljs.core.truth_((p1__48591_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48591_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48591_SHARP_.call(null,topic)))){
return p1__48591_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48591_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async48594(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__47776__auto___49744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48668){
var state_val_48669 = (state_48668[(1)]);
if((state_val_48669 === (7))){
var inst_48664 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
var statearr_48670_49745 = state_48668__$1;
(statearr_48670_49745[(2)] = inst_48664);

(statearr_48670_49745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (20))){
var state_48668__$1 = state_48668;
var statearr_48671_49746 = state_48668__$1;
(statearr_48671_49746[(2)] = null);

(statearr_48671_49746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (1))){
var state_48668__$1 = state_48668;
var statearr_48672_49748 = state_48668__$1;
(statearr_48672_49748[(2)] = null);

(statearr_48672_49748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (24))){
var inst_48647 = (state_48668[(7)]);
var inst_48656 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48647);
var state_48668__$1 = state_48668;
var statearr_48673_49749 = state_48668__$1;
(statearr_48673_49749[(2)] = inst_48656);

(statearr_48673_49749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (4))){
var inst_48599 = (state_48668[(8)]);
var inst_48599__$1 = (state_48668[(2)]);
var inst_48600 = (inst_48599__$1 == null);
var state_48668__$1 = (function (){var statearr_48674 = state_48668;
(statearr_48674[(8)] = inst_48599__$1);

return statearr_48674;
})();
if(cljs.core.truth_(inst_48600)){
var statearr_48675_49750 = state_48668__$1;
(statearr_48675_49750[(1)] = (5));

} else {
var statearr_48676_49751 = state_48668__$1;
(statearr_48676_49751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (15))){
var inst_48641 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
var statearr_48677_49752 = state_48668__$1;
(statearr_48677_49752[(2)] = inst_48641);

(statearr_48677_49752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (21))){
var inst_48661 = (state_48668[(2)]);
var state_48668__$1 = (function (){var statearr_48678 = state_48668;
(statearr_48678[(9)] = inst_48661);

return statearr_48678;
})();
var statearr_48679_49753 = state_48668__$1;
(statearr_48679_49753[(2)] = null);

(statearr_48679_49753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (13))){
var inst_48623 = (state_48668[(10)]);
var inst_48625 = cljs.core.chunked_seq_QMARK_(inst_48623);
var state_48668__$1 = state_48668;
if(inst_48625){
var statearr_48680_49758 = state_48668__$1;
(statearr_48680_49758[(1)] = (16));

} else {
var statearr_48681_49759 = state_48668__$1;
(statearr_48681_49759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (22))){
var inst_48653 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
if(cljs.core.truth_(inst_48653)){
var statearr_48682_49760 = state_48668__$1;
(statearr_48682_49760[(1)] = (23));

} else {
var statearr_48683_49761 = state_48668__$1;
(statearr_48683_49761[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (6))){
var inst_48599 = (state_48668[(8)]);
var inst_48647 = (state_48668[(7)]);
var inst_48649 = (state_48668[(11)]);
var inst_48647__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48599) : topic_fn.call(null,inst_48599));
var inst_48648 = cljs.core.deref(mults);
var inst_48649__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48648,inst_48647__$1);
var state_48668__$1 = (function (){var statearr_48684 = state_48668;
(statearr_48684[(7)] = inst_48647__$1);

(statearr_48684[(11)] = inst_48649__$1);

return statearr_48684;
})();
if(cljs.core.truth_(inst_48649__$1)){
var statearr_48685_49762 = state_48668__$1;
(statearr_48685_49762[(1)] = (19));

} else {
var statearr_48686_49763 = state_48668__$1;
(statearr_48686_49763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (25))){
var inst_48658 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
var statearr_48687_49767 = state_48668__$1;
(statearr_48687_49767[(2)] = inst_48658);

(statearr_48687_49767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (17))){
var inst_48623 = (state_48668[(10)]);
var inst_48632 = cljs.core.first(inst_48623);
var inst_48633 = cljs.core.async.muxch_STAR_(inst_48632);
var inst_48634 = cljs.core.async.close_BANG_(inst_48633);
var inst_48635 = cljs.core.next(inst_48623);
var inst_48609 = inst_48635;
var inst_48610 = null;
var inst_48611 = (0);
var inst_48612 = (0);
var state_48668__$1 = (function (){var statearr_48688 = state_48668;
(statearr_48688[(12)] = inst_48634);

(statearr_48688[(13)] = inst_48609);

(statearr_48688[(14)] = inst_48610);

(statearr_48688[(15)] = inst_48611);

(statearr_48688[(16)] = inst_48612);

return statearr_48688;
})();
var statearr_48689_49768 = state_48668__$1;
(statearr_48689_49768[(2)] = null);

(statearr_48689_49768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (3))){
var inst_48666 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48668__$1,inst_48666);
} else {
if((state_val_48669 === (12))){
var inst_48643 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
var statearr_48690_49772 = state_48668__$1;
(statearr_48690_49772[(2)] = inst_48643);

(statearr_48690_49772[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (2))){
var state_48668__$1 = state_48668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48668__$1,(4),ch);
} else {
if((state_val_48669 === (23))){
var state_48668__$1 = state_48668;
var statearr_48691_49773 = state_48668__$1;
(statearr_48691_49773[(2)] = null);

(statearr_48691_49773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (19))){
var inst_48649 = (state_48668[(11)]);
var inst_48599 = (state_48668[(8)]);
var inst_48651 = cljs.core.async.muxch_STAR_(inst_48649);
var state_48668__$1 = state_48668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48668__$1,(22),inst_48651,inst_48599);
} else {
if((state_val_48669 === (11))){
var inst_48609 = (state_48668[(13)]);
var inst_48623 = (state_48668[(10)]);
var inst_48623__$1 = cljs.core.seq(inst_48609);
var state_48668__$1 = (function (){var statearr_48692 = state_48668;
(statearr_48692[(10)] = inst_48623__$1);

return statearr_48692;
})();
if(inst_48623__$1){
var statearr_48693_49774 = state_48668__$1;
(statearr_48693_49774[(1)] = (13));

} else {
var statearr_48694_49775 = state_48668__$1;
(statearr_48694_49775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (9))){
var inst_48645 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
var statearr_48695_49776 = state_48668__$1;
(statearr_48695_49776[(2)] = inst_48645);

(statearr_48695_49776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (5))){
var inst_48606 = cljs.core.deref(mults);
var inst_48607 = cljs.core.vals(inst_48606);
var inst_48608 = cljs.core.seq(inst_48607);
var inst_48609 = inst_48608;
var inst_48610 = null;
var inst_48611 = (0);
var inst_48612 = (0);
var state_48668__$1 = (function (){var statearr_48696 = state_48668;
(statearr_48696[(13)] = inst_48609);

(statearr_48696[(14)] = inst_48610);

(statearr_48696[(15)] = inst_48611);

(statearr_48696[(16)] = inst_48612);

return statearr_48696;
})();
var statearr_48697_49777 = state_48668__$1;
(statearr_48697_49777[(2)] = null);

(statearr_48697_49777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (14))){
var state_48668__$1 = state_48668;
var statearr_48701_49778 = state_48668__$1;
(statearr_48701_49778[(2)] = null);

(statearr_48701_49778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (16))){
var inst_48623 = (state_48668[(10)]);
var inst_48627 = cljs.core.chunk_first(inst_48623);
var inst_48628 = cljs.core.chunk_rest(inst_48623);
var inst_48629 = cljs.core.count(inst_48627);
var inst_48609 = inst_48628;
var inst_48610 = inst_48627;
var inst_48611 = inst_48629;
var inst_48612 = (0);
var state_48668__$1 = (function (){var statearr_48702 = state_48668;
(statearr_48702[(13)] = inst_48609);

(statearr_48702[(14)] = inst_48610);

(statearr_48702[(15)] = inst_48611);

(statearr_48702[(16)] = inst_48612);

return statearr_48702;
})();
var statearr_48703_49783 = state_48668__$1;
(statearr_48703_49783[(2)] = null);

(statearr_48703_49783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (10))){
var inst_48610 = (state_48668[(14)]);
var inst_48612 = (state_48668[(16)]);
var inst_48609 = (state_48668[(13)]);
var inst_48611 = (state_48668[(15)]);
var inst_48617 = cljs.core._nth(inst_48610,inst_48612);
var inst_48618 = cljs.core.async.muxch_STAR_(inst_48617);
var inst_48619 = cljs.core.async.close_BANG_(inst_48618);
var inst_48620 = (inst_48612 + (1));
var tmp48698 = inst_48611;
var tmp48699 = inst_48610;
var tmp48700 = inst_48609;
var inst_48609__$1 = tmp48700;
var inst_48610__$1 = tmp48699;
var inst_48611__$1 = tmp48698;
var inst_48612__$1 = inst_48620;
var state_48668__$1 = (function (){var statearr_48704 = state_48668;
(statearr_48704[(17)] = inst_48619);

(statearr_48704[(13)] = inst_48609__$1);

(statearr_48704[(14)] = inst_48610__$1);

(statearr_48704[(15)] = inst_48611__$1);

(statearr_48704[(16)] = inst_48612__$1);

return statearr_48704;
})();
var statearr_48705_49784 = state_48668__$1;
(statearr_48705_49784[(2)] = null);

(statearr_48705_49784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (18))){
var inst_48638 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
var statearr_48706_49785 = state_48668__$1;
(statearr_48706_49785[(2)] = inst_48638);

(statearr_48706_49785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48669 === (8))){
var inst_48612 = (state_48668[(16)]);
var inst_48611 = (state_48668[(15)]);
var inst_48614 = (inst_48612 < inst_48611);
var inst_48615 = inst_48614;
var state_48668__$1 = state_48668;
if(cljs.core.truth_(inst_48615)){
var statearr_48707_49786 = state_48668__$1;
(statearr_48707_49786[(1)] = (10));

} else {
var statearr_48708_49787 = state_48668__$1;
(statearr_48708_49787[(1)] = (11));

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
var cljs$core$async$state_machine__47706__auto__ = null;
var cljs$core$async$state_machine__47706__auto____0 = (function (){
var statearr_48709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48709[(0)] = cljs$core$async$state_machine__47706__auto__);

(statearr_48709[(1)] = (1));

return statearr_48709;
});
var cljs$core$async$state_machine__47706__auto____1 = (function (state_48668){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48668);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48710){var ex__47709__auto__ = e48710;
var statearr_48711_49789 = state_48668;
(statearr_48711_49789[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48668[(4)]))){
var statearr_48712_49790 = state_48668;
(statearr_48712_49790[(1)] = cljs.core.first((state_48668[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49791 = state_48668;
state_48668 = G__49791;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$state_machine__47706__auto__ = function(state_48668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47706__auto____1.call(this,state_48668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47706__auto____0;
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47706__auto____1;
return cljs$core$async$state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48713 = f__47777__auto__();
(statearr_48713[(6)] = c__47776__auto___49744);

return statearr_48713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
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
var G__48715 = arguments.length;
switch (G__48715) {
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
var G__48717 = arguments.length;
switch (G__48717) {
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
var G__48719 = arguments.length;
switch (G__48719) {
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
var c__47776__auto___49801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48762){
var state_val_48763 = (state_48762[(1)]);
if((state_val_48763 === (7))){
var state_48762__$1 = state_48762;
var statearr_48764_49802 = state_48762__$1;
(statearr_48764_49802[(2)] = null);

(statearr_48764_49802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (1))){
var state_48762__$1 = state_48762;
var statearr_48765_49803 = state_48762__$1;
(statearr_48765_49803[(2)] = null);

(statearr_48765_49803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (4))){
var inst_48723 = (state_48762[(7)]);
var inst_48722 = (state_48762[(8)]);
var inst_48725 = (inst_48723 < inst_48722);
var state_48762__$1 = state_48762;
if(cljs.core.truth_(inst_48725)){
var statearr_48766_49804 = state_48762__$1;
(statearr_48766_49804[(1)] = (6));

} else {
var statearr_48767_49805 = state_48762__$1;
(statearr_48767_49805[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (15))){
var inst_48748 = (state_48762[(9)]);
var inst_48753 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48748);
var state_48762__$1 = state_48762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48762__$1,(17),out,inst_48753);
} else {
if((state_val_48763 === (13))){
var inst_48748 = (state_48762[(9)]);
var inst_48748__$1 = (state_48762[(2)]);
var inst_48749 = cljs.core.some(cljs.core.nil_QMARK_,inst_48748__$1);
var state_48762__$1 = (function (){var statearr_48768 = state_48762;
(statearr_48768[(9)] = inst_48748__$1);

return statearr_48768;
})();
if(cljs.core.truth_(inst_48749)){
var statearr_48769_49807 = state_48762__$1;
(statearr_48769_49807[(1)] = (14));

} else {
var statearr_48770_49808 = state_48762__$1;
(statearr_48770_49808[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (6))){
var state_48762__$1 = state_48762;
var statearr_48771_49810 = state_48762__$1;
(statearr_48771_49810[(2)] = null);

(statearr_48771_49810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (17))){
var inst_48755 = (state_48762[(2)]);
var state_48762__$1 = (function (){var statearr_48773 = state_48762;
(statearr_48773[(10)] = inst_48755);

return statearr_48773;
})();
var statearr_48774_49811 = state_48762__$1;
(statearr_48774_49811[(2)] = null);

(statearr_48774_49811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (3))){
var inst_48760 = (state_48762[(2)]);
var state_48762__$1 = state_48762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48762__$1,inst_48760);
} else {
if((state_val_48763 === (12))){
var _ = (function (){var statearr_48775 = state_48762;
(statearr_48775[(4)] = cljs.core.rest((state_48762[(4)])));

return statearr_48775;
})();
var state_48762__$1 = state_48762;
var ex48772 = (state_48762__$1[(2)]);
var statearr_48776_49812 = state_48762__$1;
(statearr_48776_49812[(5)] = ex48772);


if((ex48772 instanceof Object)){
var statearr_48777_49813 = state_48762__$1;
(statearr_48777_49813[(1)] = (11));

(statearr_48777_49813[(5)] = null);

} else {
throw ex48772;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (2))){
var inst_48721 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48722 = cnt;
var inst_48723 = (0);
var state_48762__$1 = (function (){var statearr_48778 = state_48762;
(statearr_48778[(11)] = inst_48721);

(statearr_48778[(8)] = inst_48722);

(statearr_48778[(7)] = inst_48723);

return statearr_48778;
})();
var statearr_48779_49814 = state_48762__$1;
(statearr_48779_49814[(2)] = null);

(statearr_48779_49814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (11))){
var inst_48727 = (state_48762[(2)]);
var inst_48728 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48762__$1 = (function (){var statearr_48780 = state_48762;
(statearr_48780[(12)] = inst_48727);

return statearr_48780;
})();
var statearr_48781_49815 = state_48762__$1;
(statearr_48781_49815[(2)] = inst_48728);

(statearr_48781_49815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (9))){
var inst_48723 = (state_48762[(7)]);
var _ = (function (){var statearr_48782 = state_48762;
(statearr_48782[(4)] = cljs.core.cons((12),(state_48762[(4)])));

return statearr_48782;
})();
var inst_48734 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48723) : chs__$1.call(null,inst_48723));
var inst_48735 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48723) : done.call(null,inst_48723));
var inst_48736 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48734,inst_48735);
var ___$1 = (function (){var statearr_48783 = state_48762;
(statearr_48783[(4)] = cljs.core.rest((state_48762[(4)])));

return statearr_48783;
})();
var state_48762__$1 = state_48762;
var statearr_48784_49816 = state_48762__$1;
(statearr_48784_49816[(2)] = inst_48736);

(statearr_48784_49816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (5))){
var inst_48746 = (state_48762[(2)]);
var state_48762__$1 = (function (){var statearr_48785 = state_48762;
(statearr_48785[(13)] = inst_48746);

return statearr_48785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48762__$1,(13),dchan);
} else {
if((state_val_48763 === (14))){
var inst_48751 = cljs.core.async.close_BANG_(out);
var state_48762__$1 = state_48762;
var statearr_48786_49818 = state_48762__$1;
(statearr_48786_49818[(2)] = inst_48751);

(statearr_48786_49818[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (16))){
var inst_48758 = (state_48762[(2)]);
var state_48762__$1 = state_48762;
var statearr_48787_49819 = state_48762__$1;
(statearr_48787_49819[(2)] = inst_48758);

(statearr_48787_49819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (10))){
var inst_48723 = (state_48762[(7)]);
var inst_48739 = (state_48762[(2)]);
var inst_48740 = (inst_48723 + (1));
var inst_48723__$1 = inst_48740;
var state_48762__$1 = (function (){var statearr_48788 = state_48762;
(statearr_48788[(14)] = inst_48739);

(statearr_48788[(7)] = inst_48723__$1);

return statearr_48788;
})();
var statearr_48789_49820 = state_48762__$1;
(statearr_48789_49820[(2)] = null);

(statearr_48789_49820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48763 === (8))){
var inst_48744 = (state_48762[(2)]);
var state_48762__$1 = state_48762;
var statearr_48790_49821 = state_48762__$1;
(statearr_48790_49821[(2)] = inst_48744);

(statearr_48790_49821[(1)] = (5));


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
var cljs$core$async$state_machine__47706__auto__ = null;
var cljs$core$async$state_machine__47706__auto____0 = (function (){
var statearr_48791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48791[(0)] = cljs$core$async$state_machine__47706__auto__);

(statearr_48791[(1)] = (1));

return statearr_48791;
});
var cljs$core$async$state_machine__47706__auto____1 = (function (state_48762){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48762);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48792){var ex__47709__auto__ = e48792;
var statearr_48793_49822 = state_48762;
(statearr_48793_49822[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48762[(4)]))){
var statearr_48794_49827 = state_48762;
(statearr_48794_49827[(1)] = cljs.core.first((state_48762[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49828 = state_48762;
state_48762 = G__49828;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$state_machine__47706__auto__ = function(state_48762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47706__auto____1.call(this,state_48762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47706__auto____0;
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47706__auto____1;
return cljs$core$async$state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48795 = f__47777__auto__();
(statearr_48795[(6)] = c__47776__auto___49801);

return statearr_48795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
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
var G__48798 = arguments.length;
switch (G__48798) {
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
var c__47776__auto___49831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48830){
var state_val_48831 = (state_48830[(1)]);
if((state_val_48831 === (7))){
var inst_48809 = (state_48830[(7)]);
var inst_48810 = (state_48830[(8)]);
var inst_48809__$1 = (state_48830[(2)]);
var inst_48810__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48809__$1,(0),null);
var inst_48811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48809__$1,(1),null);
var inst_48812 = (inst_48810__$1 == null);
var state_48830__$1 = (function (){var statearr_48832 = state_48830;
(statearr_48832[(7)] = inst_48809__$1);

(statearr_48832[(8)] = inst_48810__$1);

(statearr_48832[(9)] = inst_48811);

return statearr_48832;
})();
if(cljs.core.truth_(inst_48812)){
var statearr_48833_49832 = state_48830__$1;
(statearr_48833_49832[(1)] = (8));

} else {
var statearr_48834_49833 = state_48830__$1;
(statearr_48834_49833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48831 === (1))){
var inst_48799 = cljs.core.vec(chs);
var inst_48800 = inst_48799;
var state_48830__$1 = (function (){var statearr_48835 = state_48830;
(statearr_48835[(10)] = inst_48800);

return statearr_48835;
})();
var statearr_48836_49837 = state_48830__$1;
(statearr_48836_49837[(2)] = null);

(statearr_48836_49837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48831 === (4))){
var inst_48800 = (state_48830[(10)]);
var state_48830__$1 = state_48830;
return cljs.core.async.ioc_alts_BANG_(state_48830__$1,(7),inst_48800);
} else {
if((state_val_48831 === (6))){
var inst_48826 = (state_48830[(2)]);
var state_48830__$1 = state_48830;
var statearr_48837_49839 = state_48830__$1;
(statearr_48837_49839[(2)] = inst_48826);

(statearr_48837_49839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48831 === (3))){
var inst_48828 = (state_48830[(2)]);
var state_48830__$1 = state_48830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48830__$1,inst_48828);
} else {
if((state_val_48831 === (2))){
var inst_48800 = (state_48830[(10)]);
var inst_48802 = cljs.core.count(inst_48800);
var inst_48803 = (inst_48802 > (0));
var state_48830__$1 = state_48830;
if(cljs.core.truth_(inst_48803)){
var statearr_48839_49840 = state_48830__$1;
(statearr_48839_49840[(1)] = (4));

} else {
var statearr_48840_49841 = state_48830__$1;
(statearr_48840_49841[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48831 === (11))){
var inst_48800 = (state_48830[(10)]);
var inst_48819 = (state_48830[(2)]);
var tmp48838 = inst_48800;
var inst_48800__$1 = tmp48838;
var state_48830__$1 = (function (){var statearr_48841 = state_48830;
(statearr_48841[(11)] = inst_48819);

(statearr_48841[(10)] = inst_48800__$1);

return statearr_48841;
})();
var statearr_48842_49842 = state_48830__$1;
(statearr_48842_49842[(2)] = null);

(statearr_48842_49842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48831 === (9))){
var inst_48810 = (state_48830[(8)]);
var state_48830__$1 = state_48830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48830__$1,(11),out,inst_48810);
} else {
if((state_val_48831 === (5))){
var inst_48824 = cljs.core.async.close_BANG_(out);
var state_48830__$1 = state_48830;
var statearr_48843_49843 = state_48830__$1;
(statearr_48843_49843[(2)] = inst_48824);

(statearr_48843_49843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48831 === (10))){
var inst_48822 = (state_48830[(2)]);
var state_48830__$1 = state_48830;
var statearr_48844_49844 = state_48830__$1;
(statearr_48844_49844[(2)] = inst_48822);

(statearr_48844_49844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48831 === (8))){
var inst_48800 = (state_48830[(10)]);
var inst_48809 = (state_48830[(7)]);
var inst_48810 = (state_48830[(8)]);
var inst_48811 = (state_48830[(9)]);
var inst_48814 = (function (){var cs = inst_48800;
var vec__48805 = inst_48809;
var v = inst_48810;
var c = inst_48811;
return (function (p1__48796_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48796_SHARP_);
});
})();
var inst_48815 = cljs.core.filterv(inst_48814,inst_48800);
var inst_48800__$1 = inst_48815;
var state_48830__$1 = (function (){var statearr_48845 = state_48830;
(statearr_48845[(10)] = inst_48800__$1);

return statearr_48845;
})();
var statearr_48846_49849 = state_48830__$1;
(statearr_48846_49849[(2)] = null);

(statearr_48846_49849[(1)] = (2));


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
var cljs$core$async$state_machine__47706__auto__ = null;
var cljs$core$async$state_machine__47706__auto____0 = (function (){
var statearr_48847 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48847[(0)] = cljs$core$async$state_machine__47706__auto__);

(statearr_48847[(1)] = (1));

return statearr_48847;
});
var cljs$core$async$state_machine__47706__auto____1 = (function (state_48830){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48830);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48848){var ex__47709__auto__ = e48848;
var statearr_48849_49850 = state_48830;
(statearr_48849_49850[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48830[(4)]))){
var statearr_48850_49851 = state_48830;
(statearr_48850_49851[(1)] = cljs.core.first((state_48830[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49852 = state_48830;
state_48830 = G__49852;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$state_machine__47706__auto__ = function(state_48830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47706__auto____1.call(this,state_48830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47706__auto____0;
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47706__auto____1;
return cljs$core$async$state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48851 = f__47777__auto__();
(statearr_48851[(6)] = c__47776__auto___49831);

return statearr_48851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
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
var G__48853 = arguments.length;
switch (G__48853) {
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
var c__47776__auto___49854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48877){
var state_val_48878 = (state_48877[(1)]);
if((state_val_48878 === (7))){
var inst_48859 = (state_48877[(7)]);
var inst_48859__$1 = (state_48877[(2)]);
var inst_48860 = (inst_48859__$1 == null);
var inst_48861 = cljs.core.not(inst_48860);
var state_48877__$1 = (function (){var statearr_48879 = state_48877;
(statearr_48879[(7)] = inst_48859__$1);

return statearr_48879;
})();
if(inst_48861){
var statearr_48880_49856 = state_48877__$1;
(statearr_48880_49856[(1)] = (8));

} else {
var statearr_48881_49857 = state_48877__$1;
(statearr_48881_49857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (1))){
var inst_48854 = (0);
var state_48877__$1 = (function (){var statearr_48882 = state_48877;
(statearr_48882[(8)] = inst_48854);

return statearr_48882;
})();
var statearr_48883_49858 = state_48877__$1;
(statearr_48883_49858[(2)] = null);

(statearr_48883_49858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (4))){
var state_48877__$1 = state_48877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48877__$1,(7),ch);
} else {
if((state_val_48878 === (6))){
var inst_48872 = (state_48877[(2)]);
var state_48877__$1 = state_48877;
var statearr_48884_49859 = state_48877__$1;
(statearr_48884_49859[(2)] = inst_48872);

(statearr_48884_49859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (3))){
var inst_48874 = (state_48877[(2)]);
var inst_48875 = cljs.core.async.close_BANG_(out);
var state_48877__$1 = (function (){var statearr_48885 = state_48877;
(statearr_48885[(9)] = inst_48874);

return statearr_48885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48877__$1,inst_48875);
} else {
if((state_val_48878 === (2))){
var inst_48854 = (state_48877[(8)]);
var inst_48856 = (inst_48854 < n);
var state_48877__$1 = state_48877;
if(cljs.core.truth_(inst_48856)){
var statearr_48886_49860 = state_48877__$1;
(statearr_48886_49860[(1)] = (4));

} else {
var statearr_48887_49861 = state_48877__$1;
(statearr_48887_49861[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (11))){
var inst_48854 = (state_48877[(8)]);
var inst_48864 = (state_48877[(2)]);
var inst_48865 = (inst_48854 + (1));
var inst_48854__$1 = inst_48865;
var state_48877__$1 = (function (){var statearr_48888 = state_48877;
(statearr_48888[(10)] = inst_48864);

(statearr_48888[(8)] = inst_48854__$1);

return statearr_48888;
})();
var statearr_48889_49862 = state_48877__$1;
(statearr_48889_49862[(2)] = null);

(statearr_48889_49862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (9))){
var state_48877__$1 = state_48877;
var statearr_48890_49863 = state_48877__$1;
(statearr_48890_49863[(2)] = null);

(statearr_48890_49863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (5))){
var state_48877__$1 = state_48877;
var statearr_48891_49864 = state_48877__$1;
(statearr_48891_49864[(2)] = null);

(statearr_48891_49864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (10))){
var inst_48869 = (state_48877[(2)]);
var state_48877__$1 = state_48877;
var statearr_48892_49865 = state_48877__$1;
(statearr_48892_49865[(2)] = inst_48869);

(statearr_48892_49865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48878 === (8))){
var inst_48859 = (state_48877[(7)]);
var state_48877__$1 = state_48877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48877__$1,(11),out,inst_48859);
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
var cljs$core$async$state_machine__47706__auto__ = null;
var cljs$core$async$state_machine__47706__auto____0 = (function (){
var statearr_48893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48893[(0)] = cljs$core$async$state_machine__47706__auto__);

(statearr_48893[(1)] = (1));

return statearr_48893;
});
var cljs$core$async$state_machine__47706__auto____1 = (function (state_48877){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48877);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48894){var ex__47709__auto__ = e48894;
var statearr_48895_49866 = state_48877;
(statearr_48895_49866[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48877[(4)]))){
var statearr_48896_49868 = state_48877;
(statearr_48896_49868[(1)] = cljs.core.first((state_48877[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49871 = state_48877;
state_48877 = G__49871;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$state_machine__47706__auto__ = function(state_48877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47706__auto____1.call(this,state_48877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47706__auto____0;
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47706__auto____1;
return cljs$core$async$state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48897 = f__47777__auto__();
(statearr_48897[(6)] = c__47776__auto___49854);

return statearr_48897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
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
cljs.core.async.t_cljs$core$async48902 = (function (f,ch,meta48900,_,fn1,meta48903){
this.f = f;
this.ch = ch;
this.meta48900 = meta48900;
this._ = _;
this.fn1 = fn1;
this.meta48903 = meta48903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48904,meta48903__$1){
var self__ = this;
var _48904__$1 = this;
return (new cljs.core.async.t_cljs$core$async48902(self__.f,self__.ch,self__.meta48900,self__._,self__.fn1,meta48903__$1));
}));

(cljs.core.async.t_cljs$core$async48902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48904){
var self__ = this;
var _48904__$1 = this;
return self__.meta48903;
}));

(cljs.core.async.t_cljs$core$async48902.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48902.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48898_SHARP_){
var G__48905 = (((p1__48898_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48898_SHARP_) : self__.f.call(null,p1__48898_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48905) : f1.call(null,G__48905));
});
}));

(cljs.core.async.t_cljs$core$async48902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48900","meta48900",84274021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48899","cljs.core.async/t_cljs$core$async48899",-65483407,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48903","meta48903",-920924680,null)], null);
}));

(cljs.core.async.t_cljs$core$async48902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48902");

(cljs.core.async.t_cljs$core$async48902.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48902.
 */
cljs.core.async.__GT_t_cljs$core$async48902 = (function cljs$core$async$__GT_t_cljs$core$async48902(f,ch,meta48900,_,fn1,meta48903){
return (new cljs.core.async.t_cljs$core$async48902(f,ch,meta48900,_,fn1,meta48903));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48899 = (function (f,ch,meta48900){
this.f = f;
this.ch = ch;
this.meta48900 = meta48900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48901,meta48900__$1){
var self__ = this;
var _48901__$1 = this;
return (new cljs.core.async.t_cljs$core$async48899(self__.f,self__.ch,meta48900__$1));
}));

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48901){
var self__ = this;
var _48901__$1 = this;
return self__.meta48900;
}));

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async48902(self__.f,self__.ch,self__.meta48900,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48906 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48906) : self__.f.call(null,G__48906));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48900","meta48900",84274021,null)], null);
}));

(cljs.core.async.t_cljs$core$async48899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48899");

(cljs.core.async.t_cljs$core$async48899.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48899.
 */
cljs.core.async.__GT_t_cljs$core$async48899 = (function cljs$core$async$__GT_t_cljs$core$async48899(f,ch,meta48900){
return (new cljs.core.async.t_cljs$core$async48899(f,ch,meta48900));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async48899(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48907 = (function (f,ch,meta48908){
this.f = f;
this.ch = ch;
this.meta48908 = meta48908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48909,meta48908__$1){
var self__ = this;
var _48909__$1 = this;
return (new cljs.core.async.t_cljs$core$async48907(self__.f,self__.ch,meta48908__$1));
}));

(cljs.core.async.t_cljs$core$async48907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48909){
var self__ = this;
var _48909__$1 = this;
return self__.meta48908;
}));

(cljs.core.async.t_cljs$core$async48907.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48907.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48907.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48908","meta48908",-660262013,null)], null);
}));

(cljs.core.async.t_cljs$core$async48907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48907");

(cljs.core.async.t_cljs$core$async48907.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48907.
 */
cljs.core.async.__GT_t_cljs$core$async48907 = (function cljs$core$async$__GT_t_cljs$core$async48907(f,ch,meta48908){
return (new cljs.core.async.t_cljs$core$async48907(f,ch,meta48908));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async48907(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48910 = (function (p,ch,meta48911){
this.p = p;
this.ch = ch;
this.meta48911 = meta48911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48912,meta48911__$1){
var self__ = this;
var _48912__$1 = this;
return (new cljs.core.async.t_cljs$core$async48910(self__.p,self__.ch,meta48911__$1));
}));

(cljs.core.async.t_cljs$core$async48910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48912){
var self__ = this;
var _48912__$1 = this;
return self__.meta48911;
}));

(cljs.core.async.t_cljs$core$async48910.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48910.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48910.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48910.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48911","meta48911",2133436008,null)], null);
}));

(cljs.core.async.t_cljs$core$async48910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48910");

(cljs.core.async.t_cljs$core$async48910.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48910.
 */
cljs.core.async.__GT_t_cljs$core$async48910 = (function cljs$core$async$__GT_t_cljs$core$async48910(p,ch,meta48911){
return (new cljs.core.async.t_cljs$core$async48910(p,ch,meta48911));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async48910(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48914 = arguments.length;
switch (G__48914) {
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
var c__47776__auto___49895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_48935){
var state_val_48936 = (state_48935[(1)]);
if((state_val_48936 === (7))){
var inst_48931 = (state_48935[(2)]);
var state_48935__$1 = state_48935;
var statearr_48937_49896 = state_48935__$1;
(statearr_48937_49896[(2)] = inst_48931);

(statearr_48937_49896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48936 === (1))){
var state_48935__$1 = state_48935;
var statearr_48938_49897 = state_48935__$1;
(statearr_48938_49897[(2)] = null);

(statearr_48938_49897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48936 === (4))){
var inst_48917 = (state_48935[(7)]);
var inst_48917__$1 = (state_48935[(2)]);
var inst_48918 = (inst_48917__$1 == null);
var state_48935__$1 = (function (){var statearr_48939 = state_48935;
(statearr_48939[(7)] = inst_48917__$1);

return statearr_48939;
})();
if(cljs.core.truth_(inst_48918)){
var statearr_48940_49898 = state_48935__$1;
(statearr_48940_49898[(1)] = (5));

} else {
var statearr_48941_49899 = state_48935__$1;
(statearr_48941_49899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48936 === (6))){
var inst_48917 = (state_48935[(7)]);
var inst_48922 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48917) : p.call(null,inst_48917));
var state_48935__$1 = state_48935;
if(cljs.core.truth_(inst_48922)){
var statearr_48942_49900 = state_48935__$1;
(statearr_48942_49900[(1)] = (8));

} else {
var statearr_48943_49901 = state_48935__$1;
(statearr_48943_49901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48936 === (3))){
var inst_48933 = (state_48935[(2)]);
var state_48935__$1 = state_48935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48935__$1,inst_48933);
} else {
if((state_val_48936 === (2))){
var state_48935__$1 = state_48935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48935__$1,(4),ch);
} else {
if((state_val_48936 === (11))){
var inst_48925 = (state_48935[(2)]);
var state_48935__$1 = state_48935;
var statearr_48944_49903 = state_48935__$1;
(statearr_48944_49903[(2)] = inst_48925);

(statearr_48944_49903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48936 === (9))){
var state_48935__$1 = state_48935;
var statearr_48945_49904 = state_48935__$1;
(statearr_48945_49904[(2)] = null);

(statearr_48945_49904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48936 === (5))){
var inst_48920 = cljs.core.async.close_BANG_(out);
var state_48935__$1 = state_48935;
var statearr_48946_49905 = state_48935__$1;
(statearr_48946_49905[(2)] = inst_48920);

(statearr_48946_49905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48936 === (10))){
var inst_48928 = (state_48935[(2)]);
var state_48935__$1 = (function (){var statearr_48947 = state_48935;
(statearr_48947[(8)] = inst_48928);

return statearr_48947;
})();
var statearr_48948_49906 = state_48935__$1;
(statearr_48948_49906[(2)] = null);

(statearr_48948_49906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48936 === (8))){
var inst_48917 = (state_48935[(7)]);
var state_48935__$1 = state_48935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48935__$1,(11),out,inst_48917);
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
var cljs$core$async$state_machine__47706__auto__ = null;
var cljs$core$async$state_machine__47706__auto____0 = (function (){
var statearr_48949 = [null,null,null,null,null,null,null,null,null];
(statearr_48949[(0)] = cljs$core$async$state_machine__47706__auto__);

(statearr_48949[(1)] = (1));

return statearr_48949;
});
var cljs$core$async$state_machine__47706__auto____1 = (function (state_48935){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_48935);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e48950){var ex__47709__auto__ = e48950;
var statearr_48951_49908 = state_48935;
(statearr_48951_49908[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_48935[(4)]))){
var statearr_48952_49909 = state_48935;
(statearr_48952_49909[(1)] = cljs.core.first((state_48935[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49910 = state_48935;
state_48935 = G__49910;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$state_machine__47706__auto__ = function(state_48935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47706__auto____1.call(this,state_48935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47706__auto____0;
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47706__auto____1;
return cljs$core$async$state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_48953 = f__47777__auto__();
(statearr_48953[(6)] = c__47776__auto___49895);

return statearr_48953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48955 = arguments.length;
switch (G__48955) {
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
var c__47776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_49017){
var state_val_49018 = (state_49017[(1)]);
if((state_val_49018 === (7))){
var inst_49013 = (state_49017[(2)]);
var state_49017__$1 = state_49017;
var statearr_49019_49912 = state_49017__$1;
(statearr_49019_49912[(2)] = inst_49013);

(statearr_49019_49912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (20))){
var inst_48983 = (state_49017[(7)]);
var inst_48994 = (state_49017[(2)]);
var inst_48995 = cljs.core.next(inst_48983);
var inst_48969 = inst_48995;
var inst_48970 = null;
var inst_48971 = (0);
var inst_48972 = (0);
var state_49017__$1 = (function (){var statearr_49020 = state_49017;
(statearr_49020[(8)] = inst_48994);

(statearr_49020[(9)] = inst_48969);

(statearr_49020[(10)] = inst_48970);

(statearr_49020[(11)] = inst_48971);

(statearr_49020[(12)] = inst_48972);

return statearr_49020;
})();
var statearr_49021_49913 = state_49017__$1;
(statearr_49021_49913[(2)] = null);

(statearr_49021_49913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (1))){
var state_49017__$1 = state_49017;
var statearr_49022_49914 = state_49017__$1;
(statearr_49022_49914[(2)] = null);

(statearr_49022_49914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (4))){
var inst_48958 = (state_49017[(13)]);
var inst_48958__$1 = (state_49017[(2)]);
var inst_48959 = (inst_48958__$1 == null);
var state_49017__$1 = (function (){var statearr_49023 = state_49017;
(statearr_49023[(13)] = inst_48958__$1);

return statearr_49023;
})();
if(cljs.core.truth_(inst_48959)){
var statearr_49024_49915 = state_49017__$1;
(statearr_49024_49915[(1)] = (5));

} else {
var statearr_49025_49916 = state_49017__$1;
(statearr_49025_49916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (15))){
var state_49017__$1 = state_49017;
var statearr_49029_49917 = state_49017__$1;
(statearr_49029_49917[(2)] = null);

(statearr_49029_49917[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (21))){
var state_49017__$1 = state_49017;
var statearr_49030_49918 = state_49017__$1;
(statearr_49030_49918[(2)] = null);

(statearr_49030_49918[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (13))){
var inst_48972 = (state_49017[(12)]);
var inst_48969 = (state_49017[(9)]);
var inst_48970 = (state_49017[(10)]);
var inst_48971 = (state_49017[(11)]);
var inst_48979 = (state_49017[(2)]);
var inst_48980 = (inst_48972 + (1));
var tmp49026 = inst_48970;
var tmp49027 = inst_48971;
var tmp49028 = inst_48969;
var inst_48969__$1 = tmp49028;
var inst_48970__$1 = tmp49026;
var inst_48971__$1 = tmp49027;
var inst_48972__$1 = inst_48980;
var state_49017__$1 = (function (){var statearr_49031 = state_49017;
(statearr_49031[(14)] = inst_48979);

(statearr_49031[(9)] = inst_48969__$1);

(statearr_49031[(10)] = inst_48970__$1);

(statearr_49031[(11)] = inst_48971__$1);

(statearr_49031[(12)] = inst_48972__$1);

return statearr_49031;
})();
var statearr_49032_49919 = state_49017__$1;
(statearr_49032_49919[(2)] = null);

(statearr_49032_49919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (22))){
var state_49017__$1 = state_49017;
var statearr_49033_49920 = state_49017__$1;
(statearr_49033_49920[(2)] = null);

(statearr_49033_49920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (6))){
var inst_48958 = (state_49017[(13)]);
var inst_48967 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48958) : f.call(null,inst_48958));
var inst_48968 = cljs.core.seq(inst_48967);
var inst_48969 = inst_48968;
var inst_48970 = null;
var inst_48971 = (0);
var inst_48972 = (0);
var state_49017__$1 = (function (){var statearr_49034 = state_49017;
(statearr_49034[(9)] = inst_48969);

(statearr_49034[(10)] = inst_48970);

(statearr_49034[(11)] = inst_48971);

(statearr_49034[(12)] = inst_48972);

return statearr_49034;
})();
var statearr_49035_49922 = state_49017__$1;
(statearr_49035_49922[(2)] = null);

(statearr_49035_49922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (17))){
var inst_48983 = (state_49017[(7)]);
var inst_48987 = cljs.core.chunk_first(inst_48983);
var inst_48988 = cljs.core.chunk_rest(inst_48983);
var inst_48989 = cljs.core.count(inst_48987);
var inst_48969 = inst_48988;
var inst_48970 = inst_48987;
var inst_48971 = inst_48989;
var inst_48972 = (0);
var state_49017__$1 = (function (){var statearr_49036 = state_49017;
(statearr_49036[(9)] = inst_48969);

(statearr_49036[(10)] = inst_48970);

(statearr_49036[(11)] = inst_48971);

(statearr_49036[(12)] = inst_48972);

return statearr_49036;
})();
var statearr_49037_49927 = state_49017__$1;
(statearr_49037_49927[(2)] = null);

(statearr_49037_49927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (3))){
var inst_49015 = (state_49017[(2)]);
var state_49017__$1 = state_49017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49017__$1,inst_49015);
} else {
if((state_val_49018 === (12))){
var inst_49003 = (state_49017[(2)]);
var state_49017__$1 = state_49017;
var statearr_49038_49928 = state_49017__$1;
(statearr_49038_49928[(2)] = inst_49003);

(statearr_49038_49928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (2))){
var state_49017__$1 = state_49017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49017__$1,(4),in$);
} else {
if((state_val_49018 === (23))){
var inst_49011 = (state_49017[(2)]);
var state_49017__$1 = state_49017;
var statearr_49039_49929 = state_49017__$1;
(statearr_49039_49929[(2)] = inst_49011);

(statearr_49039_49929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (19))){
var inst_48998 = (state_49017[(2)]);
var state_49017__$1 = state_49017;
var statearr_49040_49930 = state_49017__$1;
(statearr_49040_49930[(2)] = inst_48998);

(statearr_49040_49930[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (11))){
var inst_48969 = (state_49017[(9)]);
var inst_48983 = (state_49017[(7)]);
var inst_48983__$1 = cljs.core.seq(inst_48969);
var state_49017__$1 = (function (){var statearr_49041 = state_49017;
(statearr_49041[(7)] = inst_48983__$1);

return statearr_49041;
})();
if(inst_48983__$1){
var statearr_49042_49931 = state_49017__$1;
(statearr_49042_49931[(1)] = (14));

} else {
var statearr_49043_49932 = state_49017__$1;
(statearr_49043_49932[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (9))){
var inst_49005 = (state_49017[(2)]);
var inst_49006 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49017__$1 = (function (){var statearr_49044 = state_49017;
(statearr_49044[(15)] = inst_49005);

return statearr_49044;
})();
if(cljs.core.truth_(inst_49006)){
var statearr_49045_49933 = state_49017__$1;
(statearr_49045_49933[(1)] = (21));

} else {
var statearr_49046_49934 = state_49017__$1;
(statearr_49046_49934[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (5))){
var inst_48961 = cljs.core.async.close_BANG_(out);
var state_49017__$1 = state_49017;
var statearr_49047_49935 = state_49017__$1;
(statearr_49047_49935[(2)] = inst_48961);

(statearr_49047_49935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (14))){
var inst_48983 = (state_49017[(7)]);
var inst_48985 = cljs.core.chunked_seq_QMARK_(inst_48983);
var state_49017__$1 = state_49017;
if(inst_48985){
var statearr_49048_49936 = state_49017__$1;
(statearr_49048_49936[(1)] = (17));

} else {
var statearr_49049_49937 = state_49017__$1;
(statearr_49049_49937[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (16))){
var inst_49001 = (state_49017[(2)]);
var state_49017__$1 = state_49017;
var statearr_49050_49938 = state_49017__$1;
(statearr_49050_49938[(2)] = inst_49001);

(statearr_49050_49938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49018 === (10))){
var inst_48970 = (state_49017[(10)]);
var inst_48972 = (state_49017[(12)]);
var inst_48977 = cljs.core._nth(inst_48970,inst_48972);
var state_49017__$1 = state_49017;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49017__$1,(13),out,inst_48977);
} else {
if((state_val_49018 === (18))){
var inst_48983 = (state_49017[(7)]);
var inst_48992 = cljs.core.first(inst_48983);
var state_49017__$1 = state_49017;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49017__$1,(20),out,inst_48992);
} else {
if((state_val_49018 === (8))){
var inst_48972 = (state_49017[(12)]);
var inst_48971 = (state_49017[(11)]);
var inst_48974 = (inst_48972 < inst_48971);
var inst_48975 = inst_48974;
var state_49017__$1 = state_49017;
if(cljs.core.truth_(inst_48975)){
var statearr_49051_49939 = state_49017__$1;
(statearr_49051_49939[(1)] = (10));

} else {
var statearr_49052_49940 = state_49017__$1;
(statearr_49052_49940[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__47706__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47706__auto____0 = (function (){
var statearr_49053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49053[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47706__auto__);

(statearr_49053[(1)] = (1));

return statearr_49053;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47706__auto____1 = (function (state_49017){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_49017);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e49054){var ex__47709__auto__ = e49054;
var statearr_49055_49941 = state_49017;
(statearr_49055_49941[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_49017[(4)]))){
var statearr_49056_49942 = state_49017;
(statearr_49056_49942[(1)] = cljs.core.first((state_49017[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49943 = state_49017;
state_49017 = G__49943;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47706__auto__ = function(state_49017){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47706__auto____1.call(this,state_49017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47706__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47706__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_49057 = f__47777__auto__();
(statearr_49057[(6)] = c__47776__auto__);

return statearr_49057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
}));

return c__47776__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49059 = arguments.length;
switch (G__49059) {
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
var G__49061 = arguments.length;
switch (G__49061) {
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
var G__49063 = arguments.length;
switch (G__49063) {
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
var c__47776__auto___49951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_49087){
var state_val_49088 = (state_49087[(1)]);
if((state_val_49088 === (7))){
var inst_49082 = (state_49087[(2)]);
var state_49087__$1 = state_49087;
var statearr_49089_49953 = state_49087__$1;
(statearr_49089_49953[(2)] = inst_49082);

(statearr_49089_49953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49088 === (1))){
var inst_49064 = null;
var state_49087__$1 = (function (){var statearr_49090 = state_49087;
(statearr_49090[(7)] = inst_49064);

return statearr_49090;
})();
var statearr_49091_49954 = state_49087__$1;
(statearr_49091_49954[(2)] = null);

(statearr_49091_49954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49088 === (4))){
var inst_49067 = (state_49087[(8)]);
var inst_49067__$1 = (state_49087[(2)]);
var inst_49068 = (inst_49067__$1 == null);
var inst_49069 = cljs.core.not(inst_49068);
var state_49087__$1 = (function (){var statearr_49092 = state_49087;
(statearr_49092[(8)] = inst_49067__$1);

return statearr_49092;
})();
if(inst_49069){
var statearr_49093_49955 = state_49087__$1;
(statearr_49093_49955[(1)] = (5));

} else {
var statearr_49094_49956 = state_49087__$1;
(statearr_49094_49956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49088 === (6))){
var state_49087__$1 = state_49087;
var statearr_49095_49957 = state_49087__$1;
(statearr_49095_49957[(2)] = null);

(statearr_49095_49957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49088 === (3))){
var inst_49084 = (state_49087[(2)]);
var inst_49085 = cljs.core.async.close_BANG_(out);
var state_49087__$1 = (function (){var statearr_49096 = state_49087;
(statearr_49096[(9)] = inst_49084);

return statearr_49096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49087__$1,inst_49085);
} else {
if((state_val_49088 === (2))){
var state_49087__$1 = state_49087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49087__$1,(4),ch);
} else {
if((state_val_49088 === (11))){
var inst_49067 = (state_49087[(8)]);
var inst_49076 = (state_49087[(2)]);
var inst_49064 = inst_49067;
var state_49087__$1 = (function (){var statearr_49097 = state_49087;
(statearr_49097[(10)] = inst_49076);

(statearr_49097[(7)] = inst_49064);

return statearr_49097;
})();
var statearr_49098_49958 = state_49087__$1;
(statearr_49098_49958[(2)] = null);

(statearr_49098_49958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49088 === (9))){
var inst_49067 = (state_49087[(8)]);
var state_49087__$1 = state_49087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49087__$1,(11),out,inst_49067);
} else {
if((state_val_49088 === (5))){
var inst_49067 = (state_49087[(8)]);
var inst_49064 = (state_49087[(7)]);
var inst_49071 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49067,inst_49064);
var state_49087__$1 = state_49087;
if(inst_49071){
var statearr_49100_49960 = state_49087__$1;
(statearr_49100_49960[(1)] = (8));

} else {
var statearr_49101_49961 = state_49087__$1;
(statearr_49101_49961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49088 === (10))){
var inst_49079 = (state_49087[(2)]);
var state_49087__$1 = state_49087;
var statearr_49102_49962 = state_49087__$1;
(statearr_49102_49962[(2)] = inst_49079);

(statearr_49102_49962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49088 === (8))){
var inst_49064 = (state_49087[(7)]);
var tmp49099 = inst_49064;
var inst_49064__$1 = tmp49099;
var state_49087__$1 = (function (){var statearr_49103 = state_49087;
(statearr_49103[(7)] = inst_49064__$1);

return statearr_49103;
})();
var statearr_49104_49963 = state_49087__$1;
(statearr_49104_49963[(2)] = null);

(statearr_49104_49963[(1)] = (2));


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
var cljs$core$async$state_machine__47706__auto__ = null;
var cljs$core$async$state_machine__47706__auto____0 = (function (){
var statearr_49105 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49105[(0)] = cljs$core$async$state_machine__47706__auto__);

(statearr_49105[(1)] = (1));

return statearr_49105;
});
var cljs$core$async$state_machine__47706__auto____1 = (function (state_49087){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_49087);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e49106){var ex__47709__auto__ = e49106;
var statearr_49107_49968 = state_49087;
(statearr_49107_49968[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_49087[(4)]))){
var statearr_49108_49969 = state_49087;
(statearr_49108_49969[(1)] = cljs.core.first((state_49087[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49970 = state_49087;
state_49087 = G__49970;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$state_machine__47706__auto__ = function(state_49087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47706__auto____1.call(this,state_49087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47706__auto____0;
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47706__auto____1;
return cljs$core$async$state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_49109 = f__47777__auto__();
(statearr_49109[(6)] = c__47776__auto___49951);

return statearr_49109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49111 = arguments.length;
switch (G__49111) {
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
var c__47776__auto___49972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_49149){
var state_val_49150 = (state_49149[(1)]);
if((state_val_49150 === (7))){
var inst_49145 = (state_49149[(2)]);
var state_49149__$1 = state_49149;
var statearr_49151_49973 = state_49149__$1;
(statearr_49151_49973[(2)] = inst_49145);

(statearr_49151_49973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49150 === (1))){
var inst_49112 = (new Array(n));
var inst_49113 = inst_49112;
var inst_49114 = (0);
var state_49149__$1 = (function (){var statearr_49152 = state_49149;
(statearr_49152[(7)] = inst_49113);

(statearr_49152[(8)] = inst_49114);

return statearr_49152;
})();
var statearr_49153_49974 = state_49149__$1;
(statearr_49153_49974[(2)] = null);

(statearr_49153_49974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49150 === (4))){
var inst_49117 = (state_49149[(9)]);
var inst_49117__$1 = (state_49149[(2)]);
var inst_49118 = (inst_49117__$1 == null);
var inst_49119 = cljs.core.not(inst_49118);
var state_49149__$1 = (function (){var statearr_49154 = state_49149;
(statearr_49154[(9)] = inst_49117__$1);

return statearr_49154;
})();
if(inst_49119){
var statearr_49155_49975 = state_49149__$1;
(statearr_49155_49975[(1)] = (5));

} else {
var statearr_49156_49976 = state_49149__$1;
(statearr_49156_49976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49150 === (15))){
var inst_49139 = (state_49149[(2)]);
var state_49149__$1 = state_49149;
var statearr_49157_49977 = state_49149__$1;
(statearr_49157_49977[(2)] = inst_49139);

(statearr_49157_49977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49150 === (13))){
var state_49149__$1 = state_49149;
var statearr_49158_49978 = state_49149__$1;
(statearr_49158_49978[(2)] = null);

(statearr_49158_49978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49150 === (6))){
var inst_49114 = (state_49149[(8)]);
var inst_49135 = (inst_49114 > (0));
var state_49149__$1 = state_49149;
if(cljs.core.truth_(inst_49135)){
var statearr_49159_49979 = state_49149__$1;
(statearr_49159_49979[(1)] = (12));

} else {
var statearr_49160_49980 = state_49149__$1;
(statearr_49160_49980[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49150 === (3))){
var inst_49147 = (state_49149[(2)]);
var state_49149__$1 = state_49149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49149__$1,inst_49147);
} else {
if((state_val_49150 === (12))){
var inst_49113 = (state_49149[(7)]);
var inst_49137 = cljs.core.vec(inst_49113);
var state_49149__$1 = state_49149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49149__$1,(15),out,inst_49137);
} else {
if((state_val_49150 === (2))){
var state_49149__$1 = state_49149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49149__$1,(4),ch);
} else {
if((state_val_49150 === (11))){
var inst_49129 = (state_49149[(2)]);
var inst_49130 = (new Array(n));
var inst_49113 = inst_49130;
var inst_49114 = (0);
var state_49149__$1 = (function (){var statearr_49161 = state_49149;
(statearr_49161[(10)] = inst_49129);

(statearr_49161[(7)] = inst_49113);

(statearr_49161[(8)] = inst_49114);

return statearr_49161;
})();
var statearr_49162_49981 = state_49149__$1;
(statearr_49162_49981[(2)] = null);

(statearr_49162_49981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49150 === (9))){
var inst_49113 = (state_49149[(7)]);
var inst_49127 = cljs.core.vec(inst_49113);
var state_49149__$1 = state_49149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49149__$1,(11),out,inst_49127);
} else {
if((state_val_49150 === (5))){
var inst_49113 = (state_49149[(7)]);
var inst_49114 = (state_49149[(8)]);
var inst_49117 = (state_49149[(9)]);
var inst_49122 = (state_49149[(11)]);
var inst_49121 = (inst_49113[inst_49114] = inst_49117);
var inst_49122__$1 = (inst_49114 + (1));
var inst_49123 = (inst_49122__$1 < n);
var state_49149__$1 = (function (){var statearr_49163 = state_49149;
(statearr_49163[(12)] = inst_49121);

(statearr_49163[(11)] = inst_49122__$1);

return statearr_49163;
})();
if(cljs.core.truth_(inst_49123)){
var statearr_49164_49982 = state_49149__$1;
(statearr_49164_49982[(1)] = (8));

} else {
var statearr_49165_49983 = state_49149__$1;
(statearr_49165_49983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49150 === (14))){
var inst_49142 = (state_49149[(2)]);
var inst_49143 = cljs.core.async.close_BANG_(out);
var state_49149__$1 = (function (){var statearr_49167 = state_49149;
(statearr_49167[(13)] = inst_49142);

return statearr_49167;
})();
var statearr_49168_49984 = state_49149__$1;
(statearr_49168_49984[(2)] = inst_49143);

(statearr_49168_49984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49150 === (10))){
var inst_49133 = (state_49149[(2)]);
var state_49149__$1 = state_49149;
var statearr_49169_49985 = state_49149__$1;
(statearr_49169_49985[(2)] = inst_49133);

(statearr_49169_49985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49150 === (8))){
var inst_49113 = (state_49149[(7)]);
var inst_49122 = (state_49149[(11)]);
var tmp49166 = inst_49113;
var inst_49113__$1 = tmp49166;
var inst_49114 = inst_49122;
var state_49149__$1 = (function (){var statearr_49170 = state_49149;
(statearr_49170[(7)] = inst_49113__$1);

(statearr_49170[(8)] = inst_49114);

return statearr_49170;
})();
var statearr_49171_49986 = state_49149__$1;
(statearr_49171_49986[(2)] = null);

(statearr_49171_49986[(1)] = (2));


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
var cljs$core$async$state_machine__47706__auto__ = null;
var cljs$core$async$state_machine__47706__auto____0 = (function (){
var statearr_49172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49172[(0)] = cljs$core$async$state_machine__47706__auto__);

(statearr_49172[(1)] = (1));

return statearr_49172;
});
var cljs$core$async$state_machine__47706__auto____1 = (function (state_49149){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_49149);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e49173){var ex__47709__auto__ = e49173;
var statearr_49174_49987 = state_49149;
(statearr_49174_49987[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_49149[(4)]))){
var statearr_49175_49988 = state_49149;
(statearr_49175_49988[(1)] = cljs.core.first((state_49149[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49989 = state_49149;
state_49149 = G__49989;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$state_machine__47706__auto__ = function(state_49149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47706__auto____1.call(this,state_49149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47706__auto____0;
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47706__auto____1;
return cljs$core$async$state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_49176 = f__47777__auto__();
(statearr_49176[(6)] = c__47776__auto___49972);

return statearr_49176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49178 = arguments.length;
switch (G__49178) {
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
var c__47776__auto___49991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47777__auto__ = (function (){var switch__47705__auto__ = (function (state_49223){
var state_val_49224 = (state_49223[(1)]);
if((state_val_49224 === (7))){
var inst_49219 = (state_49223[(2)]);
var state_49223__$1 = state_49223;
var statearr_49225_49992 = state_49223__$1;
(statearr_49225_49992[(2)] = inst_49219);

(statearr_49225_49992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (1))){
var inst_49179 = [];
var inst_49180 = inst_49179;
var inst_49181 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49223__$1 = (function (){var statearr_49226 = state_49223;
(statearr_49226[(7)] = inst_49180);

(statearr_49226[(8)] = inst_49181);

return statearr_49226;
})();
var statearr_49227_49993 = state_49223__$1;
(statearr_49227_49993[(2)] = null);

(statearr_49227_49993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (4))){
var inst_49184 = (state_49223[(9)]);
var inst_49184__$1 = (state_49223[(2)]);
var inst_49185 = (inst_49184__$1 == null);
var inst_49186 = cljs.core.not(inst_49185);
var state_49223__$1 = (function (){var statearr_49228 = state_49223;
(statearr_49228[(9)] = inst_49184__$1);

return statearr_49228;
})();
if(inst_49186){
var statearr_49229_49994 = state_49223__$1;
(statearr_49229_49994[(1)] = (5));

} else {
var statearr_49230_49995 = state_49223__$1;
(statearr_49230_49995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (15))){
var inst_49180 = (state_49223[(7)]);
var inst_49211 = cljs.core.vec(inst_49180);
var state_49223__$1 = state_49223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49223__$1,(18),out,inst_49211);
} else {
if((state_val_49224 === (13))){
var inst_49206 = (state_49223[(2)]);
var state_49223__$1 = state_49223;
var statearr_49231_49996 = state_49223__$1;
(statearr_49231_49996[(2)] = inst_49206);

(statearr_49231_49996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (6))){
var inst_49180 = (state_49223[(7)]);
var inst_49208 = inst_49180.length;
var inst_49209 = (inst_49208 > (0));
var state_49223__$1 = state_49223;
if(cljs.core.truth_(inst_49209)){
var statearr_49232_49997 = state_49223__$1;
(statearr_49232_49997[(1)] = (15));

} else {
var statearr_49233_49998 = state_49223__$1;
(statearr_49233_49998[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (17))){
var inst_49216 = (state_49223[(2)]);
var inst_49217 = cljs.core.async.close_BANG_(out);
var state_49223__$1 = (function (){var statearr_49234 = state_49223;
(statearr_49234[(10)] = inst_49216);

return statearr_49234;
})();
var statearr_49235_50000 = state_49223__$1;
(statearr_49235_50000[(2)] = inst_49217);

(statearr_49235_50000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (3))){
var inst_49221 = (state_49223[(2)]);
var state_49223__$1 = state_49223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49223__$1,inst_49221);
} else {
if((state_val_49224 === (12))){
var inst_49180 = (state_49223[(7)]);
var inst_49199 = cljs.core.vec(inst_49180);
var state_49223__$1 = state_49223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49223__$1,(14),out,inst_49199);
} else {
if((state_val_49224 === (2))){
var state_49223__$1 = state_49223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49223__$1,(4),ch);
} else {
if((state_val_49224 === (11))){
var inst_49180 = (state_49223[(7)]);
var inst_49184 = (state_49223[(9)]);
var inst_49188 = (state_49223[(11)]);
var inst_49196 = inst_49180.push(inst_49184);
var tmp49236 = inst_49180;
var inst_49180__$1 = tmp49236;
var inst_49181 = inst_49188;
var state_49223__$1 = (function (){var statearr_49237 = state_49223;
(statearr_49237[(12)] = inst_49196);

(statearr_49237[(7)] = inst_49180__$1);

(statearr_49237[(8)] = inst_49181);

return statearr_49237;
})();
var statearr_49238_50001 = state_49223__$1;
(statearr_49238_50001[(2)] = null);

(statearr_49238_50001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (9))){
var inst_49181 = (state_49223[(8)]);
var inst_49192 = cljs.core.keyword_identical_QMARK_(inst_49181,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49223__$1 = state_49223;
var statearr_49239_50005 = state_49223__$1;
(statearr_49239_50005[(2)] = inst_49192);

(statearr_49239_50005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (5))){
var inst_49184 = (state_49223[(9)]);
var inst_49188 = (state_49223[(11)]);
var inst_49181 = (state_49223[(8)]);
var inst_49189 = (state_49223[(13)]);
var inst_49188__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49184) : f.call(null,inst_49184));
var inst_49189__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49188__$1,inst_49181);
var state_49223__$1 = (function (){var statearr_49240 = state_49223;
(statearr_49240[(11)] = inst_49188__$1);

(statearr_49240[(13)] = inst_49189__$1);

return statearr_49240;
})();
if(inst_49189__$1){
var statearr_49241_50006 = state_49223__$1;
(statearr_49241_50006[(1)] = (8));

} else {
var statearr_49242_50007 = state_49223__$1;
(statearr_49242_50007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (14))){
var inst_49184 = (state_49223[(9)]);
var inst_49188 = (state_49223[(11)]);
var inst_49201 = (state_49223[(2)]);
var inst_49202 = [];
var inst_49203 = inst_49202.push(inst_49184);
var inst_49180 = inst_49202;
var inst_49181 = inst_49188;
var state_49223__$1 = (function (){var statearr_49243 = state_49223;
(statearr_49243[(14)] = inst_49201);

(statearr_49243[(15)] = inst_49203);

(statearr_49243[(7)] = inst_49180);

(statearr_49243[(8)] = inst_49181);

return statearr_49243;
})();
var statearr_49244_50008 = state_49223__$1;
(statearr_49244_50008[(2)] = null);

(statearr_49244_50008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (16))){
var state_49223__$1 = state_49223;
var statearr_49245_50009 = state_49223__$1;
(statearr_49245_50009[(2)] = null);

(statearr_49245_50009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (10))){
var inst_49194 = (state_49223[(2)]);
var state_49223__$1 = state_49223;
if(cljs.core.truth_(inst_49194)){
var statearr_49246_50010 = state_49223__$1;
(statearr_49246_50010[(1)] = (11));

} else {
var statearr_49247_50011 = state_49223__$1;
(statearr_49247_50011[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (18))){
var inst_49213 = (state_49223[(2)]);
var state_49223__$1 = state_49223;
var statearr_49248_50012 = state_49223__$1;
(statearr_49248_50012[(2)] = inst_49213);

(statearr_49248_50012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49224 === (8))){
var inst_49189 = (state_49223[(13)]);
var state_49223__$1 = state_49223;
var statearr_49249_50013 = state_49223__$1;
(statearr_49249_50013[(2)] = inst_49189);

(statearr_49249_50013[(1)] = (10));


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
var cljs$core$async$state_machine__47706__auto__ = null;
var cljs$core$async$state_machine__47706__auto____0 = (function (){
var statearr_49250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49250[(0)] = cljs$core$async$state_machine__47706__auto__);

(statearr_49250[(1)] = (1));

return statearr_49250;
});
var cljs$core$async$state_machine__47706__auto____1 = (function (state_49223){
while(true){
var ret_value__47707__auto__ = (function (){try{while(true){
var result__47708__auto__ = switch__47705__auto__(state_49223);
if(cljs.core.keyword_identical_QMARK_(result__47708__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47708__auto__;
}
break;
}
}catch (e49251){var ex__47709__auto__ = e49251;
var statearr_49252_50014 = state_49223;
(statearr_49252_50014[(2)] = ex__47709__auto__);


if(cljs.core.seq((state_49223[(4)]))){
var statearr_49253_50015 = state_49223;
(statearr_49253_50015[(1)] = cljs.core.first((state_49223[(4)])));

} else {
throw ex__47709__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50016 = state_49223;
state_49223 = G__50016;
continue;
} else {
return ret_value__47707__auto__;
}
break;
}
});
cljs$core$async$state_machine__47706__auto__ = function(state_49223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47706__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47706__auto____1.call(this,state_49223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47706__auto____0;
cljs$core$async$state_machine__47706__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47706__auto____1;
return cljs$core$async$state_machine__47706__auto__;
})()
})();
var state__47778__auto__ = (function (){var statearr_49254 = f__47777__auto__();
(statearr_49254[(6)] = c__47776__auto___49991);

return statearr_49254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47778__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
