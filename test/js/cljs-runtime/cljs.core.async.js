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
cljs.core.async.t_cljs$core$async32572 = (function (f,blockable,meta32573){
this.f = f;
this.blockable = blockable;
this.meta32573 = meta32573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32574,meta32573__$1){
var self__ = this;
var _32574__$1 = this;
return (new cljs.core.async.t_cljs$core$async32572(self__.f,self__.blockable,meta32573__$1));
}));

(cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32574){
var self__ = this;
var _32574__$1 = this;
return self__.meta32573;
}));

(cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32573","meta32573",-1103411482,null)], null);
}));

(cljs.core.async.t_cljs$core$async32572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32572");

(cljs.core.async.t_cljs$core$async32572.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32572.
 */
cljs.core.async.__GT_t_cljs$core$async32572 = (function cljs$core$async$__GT_t_cljs$core$async32572(f,blockable,meta32573){
return (new cljs.core.async.t_cljs$core$async32572(f,blockable,meta32573));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32571 = arguments.length;
switch (G__32571) {
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
return (new cljs.core.async.t_cljs$core$async32572(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32577 = arguments.length;
switch (G__32577) {
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
var G__32580 = arguments.length;
switch (G__32580) {
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
var G__32605 = arguments.length;
switch (G__32605) {
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
var val_34735 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34735) : fn1.call(null,val_34735));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34735) : fn1.call(null,val_34735));
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
var G__32610 = arguments.length;
switch (G__32610) {
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
var n__5616__auto___34744 = n;
var x_34745 = (0);
while(true){
if((x_34745 < n__5616__auto___34744)){
(a[x_34745] = x_34745);

var G__34746 = (x_34745 + (1));
x_34745 = G__34746;
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
cljs.core.async.t_cljs$core$async32674 = (function (flag,meta32675){
this.flag = flag;
this.meta32675 = meta32675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32676,meta32675__$1){
var self__ = this;
var _32676__$1 = this;
return (new cljs.core.async.t_cljs$core$async32674(self__.flag,meta32675__$1));
}));

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32676){
var self__ = this;
var _32676__$1 = this;
return self__.meta32675;
}));

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32675","meta32675",1528629600,null)], null);
}));

(cljs.core.async.t_cljs$core$async32674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32674");

(cljs.core.async.t_cljs$core$async32674.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32674.
 */
cljs.core.async.__GT_t_cljs$core$async32674 = (function cljs$core$async$__GT_t_cljs$core$async32674(flag,meta32675){
return (new cljs.core.async.t_cljs$core$async32674(flag,meta32675));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32674(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32690 = (function (flag,cb,meta32691){
this.flag = flag;
this.cb = cb;
this.meta32691 = meta32691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32692,meta32691__$1){
var self__ = this;
var _32692__$1 = this;
return (new cljs.core.async.t_cljs$core$async32690(self__.flag,self__.cb,meta32691__$1));
}));

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32692){
var self__ = this;
var _32692__$1 = this;
return self__.meta32691;
}));

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32691","meta32691",-790894872,null)], null);
}));

(cljs.core.async.t_cljs$core$async32690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32690");

(cljs.core.async.t_cljs$core$async32690.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32690.
 */
cljs.core.async.__GT_t_cljs$core$async32690 = (function cljs$core$async$__GT_t_cljs$core$async32690(flag,cb,meta32691){
return (new cljs.core.async.t_cljs$core$async32690(flag,cb,meta32691));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32690(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_34753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34753)){
if((!(((port_34753.cljs$core$IFn$_invoke$arity$1 ? port_34753.cljs$core$IFn$_invoke$arity$1((1)) : port_34753.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34758 = (i + (1));
i = G__34758;
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
return (function (p1__32694_SHARP_){
var G__32696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32694_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32696) : fret.call(null,G__32696));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__32695_SHARP_){
var G__32697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32695_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32697) : fret.call(null,G__32697));
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
var G__34762 = (i + (1));
i = G__34762;
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
var len__5749__auto___34763 = arguments.length;
var i__5750__auto___34764 = (0);
while(true){
if((i__5750__auto___34764 < len__5749__auto___34763)){
args__5755__auto__.push((arguments[i__5750__auto___34764]));

var G__34768 = (i__5750__auto___34764 + (1));
i__5750__auto___34764 = G__34768;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32700){
var map__32701 = p__32700;
var map__32701__$1 = cljs.core.__destructure_map(map__32701);
var opts = map__32701__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32698){
var G__32699 = cljs.core.first(seq32698);
var seq32698__$1 = cljs.core.next(seq32698);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32699,seq32698__$1);
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
var G__32703 = arguments.length;
switch (G__32703) {
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
var c__32474__auto___34772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_32727){
var state_val_32728 = (state_32727[(1)]);
if((state_val_32728 === (7))){
var inst_32723 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32729_34773 = state_32727__$1;
(statearr_32729_34773[(2)] = inst_32723);

(statearr_32729_34773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (1))){
var state_32727__$1 = state_32727;
var statearr_32730_34775 = state_32727__$1;
(statearr_32730_34775[(2)] = null);

(statearr_32730_34775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (4))){
var inst_32706 = (state_32727[(7)]);
var inst_32706__$1 = (state_32727[(2)]);
var inst_32707 = (inst_32706__$1 == null);
var state_32727__$1 = (function (){var statearr_32731 = state_32727;
(statearr_32731[(7)] = inst_32706__$1);

return statearr_32731;
})();
if(cljs.core.truth_(inst_32707)){
var statearr_32732_34777 = state_32727__$1;
(statearr_32732_34777[(1)] = (5));

} else {
var statearr_32733_34778 = state_32727__$1;
(statearr_32733_34778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (13))){
var state_32727__$1 = state_32727;
var statearr_32734_34779 = state_32727__$1;
(statearr_32734_34779[(2)] = null);

(statearr_32734_34779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (6))){
var inst_32706 = (state_32727[(7)]);
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32727__$1,(11),to,inst_32706);
} else {
if((state_val_32728 === (3))){
var inst_32725 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32727__$1,inst_32725);
} else {
if((state_val_32728 === (12))){
var state_32727__$1 = state_32727;
var statearr_32735_34780 = state_32727__$1;
(statearr_32735_34780[(2)] = null);

(statearr_32735_34780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (2))){
var state_32727__$1 = state_32727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32727__$1,(4),from);
} else {
if((state_val_32728 === (11))){
var inst_32716 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
if(cljs.core.truth_(inst_32716)){
var statearr_32736_34782 = state_32727__$1;
(statearr_32736_34782[(1)] = (12));

} else {
var statearr_32737_34783 = state_32727__$1;
(statearr_32737_34783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (9))){
var state_32727__$1 = state_32727;
var statearr_32738_34784 = state_32727__$1;
(statearr_32738_34784[(2)] = null);

(statearr_32738_34784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (5))){
var state_32727__$1 = state_32727;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32739_34785 = state_32727__$1;
(statearr_32739_34785[(1)] = (8));

} else {
var statearr_32740_34786 = state_32727__$1;
(statearr_32740_34786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (14))){
var inst_32721 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32741_34787 = state_32727__$1;
(statearr_32741_34787[(2)] = inst_32721);

(statearr_32741_34787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (10))){
var inst_32713 = (state_32727[(2)]);
var state_32727__$1 = state_32727;
var statearr_32742_34788 = state_32727__$1;
(statearr_32742_34788[(2)] = inst_32713);

(statearr_32742_34788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32728 === (8))){
var inst_32710 = cljs.core.async.close_BANG_(to);
var state_32727__$1 = state_32727;
var statearr_32743_34789 = state_32727__$1;
(statearr_32743_34789[(2)] = inst_32710);

(statearr_32743_34789[(1)] = (10));


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
var cljs$core$async$state_machine__32400__auto__ = null;
var cljs$core$async$state_machine__32400__auto____0 = (function (){
var statearr_32744 = [null,null,null,null,null,null,null,null];
(statearr_32744[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_32744[(1)] = (1));

return statearr_32744;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_32727){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32727);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32745){var ex__32403__auto__ = e32745;
var statearr_32746_34790 = state_32727;
(statearr_32746_34790[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32727[(4)]))){
var statearr_32747_34791 = state_32727;
(statearr_32747_34791[(1)] = cljs.core.first((state_32727[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34792 = state_32727;
state_32727 = G__34792;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_32727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_32727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_32748 = f__32475__auto__();
(statearr_32748[(6)] = c__32474__auto___34772);

return statearr_32748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
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
var process__$1 = (function (p__32752){
var vec__32753 = p__32752;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32753,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32753,(1),null);
var job = vec__32753;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32474__auto___34798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_32760){
var state_val_32761 = (state_32760[(1)]);
if((state_val_32761 === (1))){
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32760__$1,(2),res,v);
} else {
if((state_val_32761 === (2))){
var inst_32757 = (state_32760[(2)]);
var inst_32758 = cljs.core.async.close_BANG_(res);
var state_32760__$1 = (function (){var statearr_32762 = state_32760;
(statearr_32762[(7)] = inst_32757);

return statearr_32762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32760__$1,inst_32758);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0 = (function (){
var statearr_32763 = [null,null,null,null,null,null,null,null];
(statearr_32763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__);

(statearr_32763[(1)] = (1));

return statearr_32763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1 = (function (state_32760){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32760);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32764){var ex__32403__auto__ = e32764;
var statearr_32765_34810 = state_32760;
(statearr_32765_34810[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32760[(4)]))){
var statearr_32766_34811 = state_32760;
(statearr_32766_34811[(1)] = cljs.core.first((state_32760[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34813 = state_32760;
state_32760 = G__34813;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = function(state_32760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1.call(this,state_32760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_32770 = f__32475__auto__();
(statearr_32770[(6)] = c__32474__auto___34798);

return statearr_32770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32771){
var vec__32772 = p__32771;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32772,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32772,(1),null);
var job = vec__32772;
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
var n__5616__auto___34815 = n;
var __34816 = (0);
while(true){
if((__34816 < n__5616__auto___34815)){
var G__32776_34817 = type;
var G__32776_34818__$1 = (((G__32776_34817 instanceof cljs.core.Keyword))?G__32776_34817.fqn:null);
switch (G__32776_34818__$1) {
case "compute":
var c__32474__auto___34820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34816,c__32474__auto___34820,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async){
return (function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = ((function (__34816,c__32474__auto___34820,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async){
return (function (state_32793){
var state_val_32794 = (state_32793[(1)]);
if((state_val_32794 === (1))){
var state_32793__$1 = state_32793;
var statearr_32795_34821 = state_32793__$1;
(statearr_32795_34821[(2)] = null);

(statearr_32795_34821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (2))){
var state_32793__$1 = state_32793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32793__$1,(4),jobs);
} else {
if((state_val_32794 === (3))){
var inst_32791 = (state_32793[(2)]);
var state_32793__$1 = state_32793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32793__$1,inst_32791);
} else {
if((state_val_32794 === (4))){
var inst_32780 = (state_32793[(2)]);
var inst_32781 = process__$1(inst_32780);
var state_32793__$1 = state_32793;
if(cljs.core.truth_(inst_32781)){
var statearr_32800_34822 = state_32793__$1;
(statearr_32800_34822[(1)] = (5));

} else {
var statearr_32801_34823 = state_32793__$1;
(statearr_32801_34823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (5))){
var state_32793__$1 = state_32793;
var statearr_32802_34824 = state_32793__$1;
(statearr_32802_34824[(2)] = null);

(statearr_32802_34824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (6))){
var state_32793__$1 = state_32793;
var statearr_32803_34826 = state_32793__$1;
(statearr_32803_34826[(2)] = null);

(statearr_32803_34826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (7))){
var inst_32789 = (state_32793[(2)]);
var state_32793__$1 = state_32793;
var statearr_32807_34827 = state_32793__$1;
(statearr_32807_34827[(2)] = inst_32789);

(statearr_32807_34827[(1)] = (3));


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
});})(__34816,c__32474__auto___34820,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async))
;
return ((function (__34816,switch__32399__auto__,c__32474__auto___34820,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0 = (function (){
var statearr_32808 = [null,null,null,null,null,null,null];
(statearr_32808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__);

(statearr_32808[(1)] = (1));

return statearr_32808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1 = (function (state_32793){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32793);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32809){var ex__32403__auto__ = e32809;
var statearr_32810_34828 = state_32793;
(statearr_32810_34828[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32793[(4)]))){
var statearr_32811_34829 = state_32793;
(statearr_32811_34829[(1)] = cljs.core.first((state_32793[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34830 = state_32793;
state_32793 = G__34830;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = function(state_32793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1.call(this,state_32793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__;
})()
;})(__34816,switch__32399__auto__,c__32474__auto___34820,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async))
})();
var state__32476__auto__ = (function (){var statearr_32812 = f__32475__auto__();
(statearr_32812[(6)] = c__32474__auto___34820);

return statearr_32812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
});})(__34816,c__32474__auto___34820,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async))
);


break;
case "async":
var c__32474__auto___34831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34816,c__32474__auto___34831,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async){
return (function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = ((function (__34816,c__32474__auto___34831,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async){
return (function (state_32825){
var state_val_32826 = (state_32825[(1)]);
if((state_val_32826 === (1))){
var state_32825__$1 = state_32825;
var statearr_32830_34838 = state_32825__$1;
(statearr_32830_34838[(2)] = null);

(statearr_32830_34838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (2))){
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32825__$1,(4),jobs);
} else {
if((state_val_32826 === (3))){
var inst_32823 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32825__$1,inst_32823);
} else {
if((state_val_32826 === (4))){
var inst_32815 = (state_32825[(2)]);
var inst_32816 = async(inst_32815);
var state_32825__$1 = state_32825;
if(cljs.core.truth_(inst_32816)){
var statearr_32831_34840 = state_32825__$1;
(statearr_32831_34840[(1)] = (5));

} else {
var statearr_32832_34841 = state_32825__$1;
(statearr_32832_34841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (5))){
var state_32825__$1 = state_32825;
var statearr_32833_34843 = state_32825__$1;
(statearr_32833_34843[(2)] = null);

(statearr_32833_34843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (6))){
var state_32825__$1 = state_32825;
var statearr_32834_34844 = state_32825__$1;
(statearr_32834_34844[(2)] = null);

(statearr_32834_34844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (7))){
var inst_32821 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32835_34845 = state_32825__$1;
(statearr_32835_34845[(2)] = inst_32821);

(statearr_32835_34845[(1)] = (3));


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
});})(__34816,c__32474__auto___34831,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async))
;
return ((function (__34816,switch__32399__auto__,c__32474__auto___34831,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0 = (function (){
var statearr_32836 = [null,null,null,null,null,null,null];
(statearr_32836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__);

(statearr_32836[(1)] = (1));

return statearr_32836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1 = (function (state_32825){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32825);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32837){var ex__32403__auto__ = e32837;
var statearr_32838_34846 = state_32825;
(statearr_32838_34846[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32825[(4)]))){
var statearr_32839_34847 = state_32825;
(statearr_32839_34847[(1)] = cljs.core.first((state_32825[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34848 = state_32825;
state_32825 = G__34848;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = function(state_32825){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1.call(this,state_32825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__;
})()
;})(__34816,switch__32399__auto__,c__32474__auto___34831,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async))
})();
var state__32476__auto__ = (function (){var statearr_32840 = f__32475__auto__();
(statearr_32840[(6)] = c__32474__auto___34831);

return statearr_32840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
});})(__34816,c__32474__auto___34831,G__32776_34817,G__32776_34818__$1,n__5616__auto___34815,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32776_34818__$1)].join('')));

}

var G__34850 = (__34816 + (1));
__34816 = G__34850;
continue;
} else {
}
break;
}

var c__32474__auto___34851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_32862){
var state_val_32863 = (state_32862[(1)]);
if((state_val_32863 === (7))){
var inst_32858 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
var statearr_32864_34852 = state_32862__$1;
(statearr_32864_34852[(2)] = inst_32858);

(statearr_32864_34852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (1))){
var state_32862__$1 = state_32862;
var statearr_32865_34853 = state_32862__$1;
(statearr_32865_34853[(2)] = null);

(statearr_32865_34853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (4))){
var inst_32843 = (state_32862[(7)]);
var inst_32843__$1 = (state_32862[(2)]);
var inst_32844 = (inst_32843__$1 == null);
var state_32862__$1 = (function (){var statearr_32866 = state_32862;
(statearr_32866[(7)] = inst_32843__$1);

return statearr_32866;
})();
if(cljs.core.truth_(inst_32844)){
var statearr_32867_34854 = state_32862__$1;
(statearr_32867_34854[(1)] = (5));

} else {
var statearr_32868_34855 = state_32862__$1;
(statearr_32868_34855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (6))){
var inst_32843 = (state_32862[(7)]);
var inst_32848 = (state_32862[(8)]);
var inst_32848__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32849 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32850 = [inst_32843,inst_32848__$1];
var inst_32851 = (new cljs.core.PersistentVector(null,2,(5),inst_32849,inst_32850,null));
var state_32862__$1 = (function (){var statearr_32869 = state_32862;
(statearr_32869[(8)] = inst_32848__$1);

return statearr_32869;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32862__$1,(8),jobs,inst_32851);
} else {
if((state_val_32863 === (3))){
var inst_32860 = (state_32862[(2)]);
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32862__$1,inst_32860);
} else {
if((state_val_32863 === (2))){
var state_32862__$1 = state_32862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32862__$1,(4),from);
} else {
if((state_val_32863 === (9))){
var inst_32855 = (state_32862[(2)]);
var state_32862__$1 = (function (){var statearr_32870 = state_32862;
(statearr_32870[(9)] = inst_32855);

return statearr_32870;
})();
var statearr_32871_34858 = state_32862__$1;
(statearr_32871_34858[(2)] = null);

(statearr_32871_34858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (5))){
var inst_32846 = cljs.core.async.close_BANG_(jobs);
var state_32862__$1 = state_32862;
var statearr_32872_34860 = state_32862__$1;
(statearr_32872_34860[(2)] = inst_32846);

(statearr_32872_34860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32863 === (8))){
var inst_32848 = (state_32862[(8)]);
var inst_32853 = (state_32862[(2)]);
var state_32862__$1 = (function (){var statearr_32873 = state_32862;
(statearr_32873[(10)] = inst_32853);

return statearr_32873;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32862__$1,(9),results,inst_32848);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0 = (function (){
var statearr_32874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__);

(statearr_32874[(1)] = (1));

return statearr_32874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1 = (function (state_32862){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32862);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32875){var ex__32403__auto__ = e32875;
var statearr_32876_34861 = state_32862;
(statearr_32876_34861[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32862[(4)]))){
var statearr_32877_34862 = state_32862;
(statearr_32877_34862[(1)] = cljs.core.first((state_32862[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34863 = state_32862;
state_32862 = G__34863;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = function(state_32862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1.call(this,state_32862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_32878 = f__32475__auto__();
(statearr_32878[(6)] = c__32474__auto___34851);

return statearr_32878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));


var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_32916){
var state_val_32917 = (state_32916[(1)]);
if((state_val_32917 === (7))){
var inst_32912 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
var statearr_32918_34864 = state_32916__$1;
(statearr_32918_34864[(2)] = inst_32912);

(statearr_32918_34864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (20))){
var state_32916__$1 = state_32916;
var statearr_32919_34865 = state_32916__$1;
(statearr_32919_34865[(2)] = null);

(statearr_32919_34865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (1))){
var state_32916__$1 = state_32916;
var statearr_32920_34866 = state_32916__$1;
(statearr_32920_34866[(2)] = null);

(statearr_32920_34866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (4))){
var inst_32881 = (state_32916[(7)]);
var inst_32881__$1 = (state_32916[(2)]);
var inst_32882 = (inst_32881__$1 == null);
var state_32916__$1 = (function (){var statearr_32922 = state_32916;
(statearr_32922[(7)] = inst_32881__$1);

return statearr_32922;
})();
if(cljs.core.truth_(inst_32882)){
var statearr_32923_34867 = state_32916__$1;
(statearr_32923_34867[(1)] = (5));

} else {
var statearr_32924_34868 = state_32916__$1;
(statearr_32924_34868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (15))){
var inst_32894 = (state_32916[(8)]);
var state_32916__$1 = state_32916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32916__$1,(18),to,inst_32894);
} else {
if((state_val_32917 === (21))){
var inst_32907 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
var statearr_32926_34869 = state_32916__$1;
(statearr_32926_34869[(2)] = inst_32907);

(statearr_32926_34869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (13))){
var inst_32909 = (state_32916[(2)]);
var state_32916__$1 = (function (){var statearr_32928 = state_32916;
(statearr_32928[(9)] = inst_32909);

return statearr_32928;
})();
var statearr_32929_34870 = state_32916__$1;
(statearr_32929_34870[(2)] = null);

(statearr_32929_34870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (6))){
var inst_32881 = (state_32916[(7)]);
var state_32916__$1 = state_32916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32916__$1,(11),inst_32881);
} else {
if((state_val_32917 === (17))){
var inst_32902 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
if(cljs.core.truth_(inst_32902)){
var statearr_32930_34878 = state_32916__$1;
(statearr_32930_34878[(1)] = (19));

} else {
var statearr_32931_34879 = state_32916__$1;
(statearr_32931_34879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (3))){
var inst_32914 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32916__$1,inst_32914);
} else {
if((state_val_32917 === (12))){
var inst_32891 = (state_32916[(10)]);
var state_32916__$1 = state_32916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32916__$1,(14),inst_32891);
} else {
if((state_val_32917 === (2))){
var state_32916__$1 = state_32916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32916__$1,(4),results);
} else {
if((state_val_32917 === (19))){
var state_32916__$1 = state_32916;
var statearr_32932_34880 = state_32916__$1;
(statearr_32932_34880[(2)] = null);

(statearr_32932_34880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (11))){
var inst_32891 = (state_32916[(2)]);
var state_32916__$1 = (function (){var statearr_32933 = state_32916;
(statearr_32933[(10)] = inst_32891);

return statearr_32933;
})();
var statearr_32934_34881 = state_32916__$1;
(statearr_32934_34881[(2)] = null);

(statearr_32934_34881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (9))){
var state_32916__$1 = state_32916;
var statearr_32935_34882 = state_32916__$1;
(statearr_32935_34882[(2)] = null);

(statearr_32935_34882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (5))){
var state_32916__$1 = state_32916;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32936_34883 = state_32916__$1;
(statearr_32936_34883[(1)] = (8));

} else {
var statearr_32937_34884 = state_32916__$1;
(statearr_32937_34884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (14))){
var inst_32894 = (state_32916[(8)]);
var inst_32896 = (state_32916[(11)]);
var inst_32894__$1 = (state_32916[(2)]);
var inst_32895 = (inst_32894__$1 == null);
var inst_32896__$1 = cljs.core.not(inst_32895);
var state_32916__$1 = (function (){var statearr_32938 = state_32916;
(statearr_32938[(8)] = inst_32894__$1);

(statearr_32938[(11)] = inst_32896__$1);

return statearr_32938;
})();
if(inst_32896__$1){
var statearr_32939_34885 = state_32916__$1;
(statearr_32939_34885[(1)] = (15));

} else {
var statearr_32940_34886 = state_32916__$1;
(statearr_32940_34886[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (16))){
var inst_32896 = (state_32916[(11)]);
var state_32916__$1 = state_32916;
var statearr_32941_34887 = state_32916__$1;
(statearr_32941_34887[(2)] = inst_32896);

(statearr_32941_34887[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (10))){
var inst_32888 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
var statearr_32942_34888 = state_32916__$1;
(statearr_32942_34888[(2)] = inst_32888);

(statearr_32942_34888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (18))){
var inst_32899 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
var statearr_32943_34889 = state_32916__$1;
(statearr_32943_34889[(2)] = inst_32899);

(statearr_32943_34889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (8))){
var inst_32885 = cljs.core.async.close_BANG_(to);
var state_32916__$1 = state_32916;
var statearr_32944_34890 = state_32916__$1;
(statearr_32944_34890[(2)] = inst_32885);

(statearr_32944_34890[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0 = (function (){
var statearr_32945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__);

(statearr_32945[(1)] = (1));

return statearr_32945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1 = (function (state_32916){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32916);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32946){var ex__32403__auto__ = e32946;
var statearr_32947_34891 = state_32916;
(statearr_32947_34891[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32916[(4)]))){
var statearr_32948_34892 = state_32916;
(statearr_32948_34892[(1)] = cljs.core.first((state_32916[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34896 = state_32916;
state_32916 = G__34896;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = function(state_32916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1.call(this,state_32916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_32949 = f__32475__auto__();
(statearr_32949[(6)] = c__32474__auto__);

return statearr_32949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
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
var G__32951 = arguments.length;
switch (G__32951) {
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
var G__32953 = arguments.length;
switch (G__32953) {
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
var G__32955 = arguments.length;
switch (G__32955) {
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
var c__32474__auto___34905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_32981){
var state_val_32982 = (state_32981[(1)]);
if((state_val_32982 === (7))){
var inst_32977 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
var statearr_32983_34906 = state_32981__$1;
(statearr_32983_34906[(2)] = inst_32977);

(statearr_32983_34906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (1))){
var state_32981__$1 = state_32981;
var statearr_32984_34907 = state_32981__$1;
(statearr_32984_34907[(2)] = null);

(statearr_32984_34907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (4))){
var inst_32958 = (state_32981[(7)]);
var inst_32958__$1 = (state_32981[(2)]);
var inst_32959 = (inst_32958__$1 == null);
var state_32981__$1 = (function (){var statearr_32987 = state_32981;
(statearr_32987[(7)] = inst_32958__$1);

return statearr_32987;
})();
if(cljs.core.truth_(inst_32959)){
var statearr_32989_34908 = state_32981__$1;
(statearr_32989_34908[(1)] = (5));

} else {
var statearr_32991_34909 = state_32981__$1;
(statearr_32991_34909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (13))){
var state_32981__$1 = state_32981;
var statearr_32992_34910 = state_32981__$1;
(statearr_32992_34910[(2)] = null);

(statearr_32992_34910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (6))){
var inst_32958 = (state_32981[(7)]);
var inst_32964 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32958) : p.call(null,inst_32958));
var state_32981__$1 = state_32981;
if(cljs.core.truth_(inst_32964)){
var statearr_32996_34911 = state_32981__$1;
(statearr_32996_34911[(1)] = (9));

} else {
var statearr_32997_34912 = state_32981__$1;
(statearr_32997_34912[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (3))){
var inst_32979 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32981__$1,inst_32979);
} else {
if((state_val_32982 === (12))){
var state_32981__$1 = state_32981;
var statearr_32999_34913 = state_32981__$1;
(statearr_32999_34913[(2)] = null);

(statearr_32999_34913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (2))){
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32981__$1,(4),ch);
} else {
if((state_val_32982 === (11))){
var inst_32958 = (state_32981[(7)]);
var inst_32968 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32981__$1,(8),inst_32968,inst_32958);
} else {
if((state_val_32982 === (9))){
var state_32981__$1 = state_32981;
var statearr_33001_34914 = state_32981__$1;
(statearr_33001_34914[(2)] = tc);

(statearr_33001_34914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (5))){
var inst_32961 = cljs.core.async.close_BANG_(tc);
var inst_32962 = cljs.core.async.close_BANG_(fc);
var state_32981__$1 = (function (){var statearr_33005 = state_32981;
(statearr_33005[(8)] = inst_32961);

return statearr_33005;
})();
var statearr_33006_34915 = state_32981__$1;
(statearr_33006_34915[(2)] = inst_32962);

(statearr_33006_34915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (14))){
var inst_32975 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
var statearr_33007_34917 = state_32981__$1;
(statearr_33007_34917[(2)] = inst_32975);

(statearr_33007_34917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (10))){
var state_32981__$1 = state_32981;
var statearr_33008_34918 = state_32981__$1;
(statearr_33008_34918[(2)] = fc);

(statearr_33008_34918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (8))){
var inst_32970 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
if(cljs.core.truth_(inst_32970)){
var statearr_33010_34919 = state_32981__$1;
(statearr_33010_34919[(1)] = (12));

} else {
var statearr_33011_34920 = state_32981__$1;
(statearr_33011_34920[(1)] = (13));

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
var cljs$core$async$state_machine__32400__auto__ = null;
var cljs$core$async$state_machine__32400__auto____0 = (function (){
var statearr_33015 = [null,null,null,null,null,null,null,null,null];
(statearr_33015[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_33015[(1)] = (1));

return statearr_33015;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_32981){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32981);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33017){var ex__32403__auto__ = e33017;
var statearr_33018_34921 = state_32981;
(statearr_33018_34921[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32981[(4)]))){
var statearr_33019_34922 = state_32981;
(statearr_33019_34922[(1)] = cljs.core.first((state_32981[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34923 = state_32981;
state_32981 = G__34923;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_32981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_32981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_33022 = f__32475__auto__();
(statearr_33022[(6)] = c__32474__auto___34905);

return statearr_33022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
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
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_33049){
var state_val_33050 = (state_33049[(1)]);
if((state_val_33050 === (7))){
var inst_33045 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
var statearr_33051_34925 = state_33049__$1;
(statearr_33051_34925[(2)] = inst_33045);

(statearr_33051_34925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (1))){
var inst_33028 = init;
var inst_33029 = inst_33028;
var state_33049__$1 = (function (){var statearr_33052 = state_33049;
(statearr_33052[(7)] = inst_33029);

return statearr_33052;
})();
var statearr_33053_34927 = state_33049__$1;
(statearr_33053_34927[(2)] = null);

(statearr_33053_34927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (4))){
var inst_33032 = (state_33049[(8)]);
var inst_33032__$1 = (state_33049[(2)]);
var inst_33033 = (inst_33032__$1 == null);
var state_33049__$1 = (function (){var statearr_33054 = state_33049;
(statearr_33054[(8)] = inst_33032__$1);

return statearr_33054;
})();
if(cljs.core.truth_(inst_33033)){
var statearr_33055_34928 = state_33049__$1;
(statearr_33055_34928[(1)] = (5));

} else {
var statearr_33056_34929 = state_33049__$1;
(statearr_33056_34929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (6))){
var inst_33029 = (state_33049[(7)]);
var inst_33032 = (state_33049[(8)]);
var inst_33036 = (state_33049[(9)]);
var inst_33036__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33029,inst_33032) : f.call(null,inst_33029,inst_33032));
var inst_33037 = cljs.core.reduced_QMARK_(inst_33036__$1);
var state_33049__$1 = (function (){var statearr_33057 = state_33049;
(statearr_33057[(9)] = inst_33036__$1);

return statearr_33057;
})();
if(inst_33037){
var statearr_33058_34931 = state_33049__$1;
(statearr_33058_34931[(1)] = (8));

} else {
var statearr_33059_34932 = state_33049__$1;
(statearr_33059_34932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (3))){
var inst_33047 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33049__$1,inst_33047);
} else {
if((state_val_33050 === (2))){
var state_33049__$1 = state_33049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33049__$1,(4),ch);
} else {
if((state_val_33050 === (9))){
var inst_33036 = (state_33049[(9)]);
var inst_33029 = inst_33036;
var state_33049__$1 = (function (){var statearr_33060 = state_33049;
(statearr_33060[(7)] = inst_33029);

return statearr_33060;
})();
var statearr_33061_34933 = state_33049__$1;
(statearr_33061_34933[(2)] = null);

(statearr_33061_34933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (5))){
var inst_33029 = (state_33049[(7)]);
var state_33049__$1 = state_33049;
var statearr_33062_34935 = state_33049__$1;
(statearr_33062_34935[(2)] = inst_33029);

(statearr_33062_34935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (10))){
var inst_33043 = (state_33049[(2)]);
var state_33049__$1 = state_33049;
var statearr_33063_34936 = state_33049__$1;
(statearr_33063_34936[(2)] = inst_33043);

(statearr_33063_34936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33050 === (8))){
var inst_33036 = (state_33049[(9)]);
var inst_33039 = cljs.core.deref(inst_33036);
var state_33049__$1 = state_33049;
var statearr_33064_34937 = state_33049__$1;
(statearr_33064_34937[(2)] = inst_33039);

(statearr_33064_34937[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32400__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32400__auto____0 = (function (){
var statearr_33065 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33065[(0)] = cljs$core$async$reduce_$_state_machine__32400__auto__);

(statearr_33065[(1)] = (1));

return statearr_33065;
});
var cljs$core$async$reduce_$_state_machine__32400__auto____1 = (function (state_33049){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33049);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33066){var ex__32403__auto__ = e33066;
var statearr_33067_34939 = state_33049;
(statearr_33067_34939[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33049[(4)]))){
var statearr_33068_34940 = state_33049;
(statearr_33068_34940[(1)] = cljs.core.first((state_33049[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34941 = state_33049;
state_33049 = G__34941;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32400__auto__ = function(state_33049){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32400__auto____1.call(this,state_33049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32400__auto____0;
cljs$core$async$reduce_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32400__auto____1;
return cljs$core$async$reduce_$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_33070 = f__32475__auto__();
(statearr_33070[(6)] = c__32474__auto__);

return statearr_33070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_33082){
var state_val_33083 = (state_33082[(1)]);
if((state_val_33083 === (1))){
var inst_33076 = cljs.core.async.reduce(f__$1,init,ch);
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33082__$1,(2),inst_33076);
} else {
if((state_val_33083 === (2))){
var inst_33078 = (state_33082[(2)]);
var inst_33080 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33078) : f__$1.call(null,inst_33078));
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33082__$1,inst_33080);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32400__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32400__auto____0 = (function (){
var statearr_33085 = [null,null,null,null,null,null,null];
(statearr_33085[(0)] = cljs$core$async$transduce_$_state_machine__32400__auto__);

(statearr_33085[(1)] = (1));

return statearr_33085;
});
var cljs$core$async$transduce_$_state_machine__32400__auto____1 = (function (state_33082){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33082);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33087){var ex__32403__auto__ = e33087;
var statearr_33088_34947 = state_33082;
(statearr_33088_34947[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33082[(4)]))){
var statearr_33089_34949 = state_33082;
(statearr_33089_34949[(1)] = cljs.core.first((state_33082[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34950 = state_33082;
state_33082 = G__34950;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32400__auto__ = function(state_33082){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32400__auto____1.call(this,state_33082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32400__auto____0;
cljs$core$async$transduce_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32400__auto____1;
return cljs$core$async$transduce_$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_33093 = f__32475__auto__();
(statearr_33093[(6)] = c__32474__auto__);

return statearr_33093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
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
var G__33095 = arguments.length;
switch (G__33095) {
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
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_33120){
var state_val_33121 = (state_33120[(1)]);
if((state_val_33121 === (7))){
var inst_33102 = (state_33120[(2)]);
var state_33120__$1 = state_33120;
var statearr_33123_34954 = state_33120__$1;
(statearr_33123_34954[(2)] = inst_33102);

(statearr_33123_34954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33121 === (1))){
var inst_33096 = cljs.core.seq(coll);
var inst_33097 = inst_33096;
var state_33120__$1 = (function (){var statearr_33124 = state_33120;
(statearr_33124[(7)] = inst_33097);

return statearr_33124;
})();
var statearr_33125_34955 = state_33120__$1;
(statearr_33125_34955[(2)] = null);

(statearr_33125_34955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33121 === (4))){
var inst_33097 = (state_33120[(7)]);
var inst_33100 = cljs.core.first(inst_33097);
var state_33120__$1 = state_33120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33120__$1,(7),ch,inst_33100);
} else {
if((state_val_33121 === (13))){
var inst_33114 = (state_33120[(2)]);
var state_33120__$1 = state_33120;
var statearr_33126_34956 = state_33120__$1;
(statearr_33126_34956[(2)] = inst_33114);

(statearr_33126_34956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33121 === (6))){
var inst_33105 = (state_33120[(2)]);
var state_33120__$1 = state_33120;
if(cljs.core.truth_(inst_33105)){
var statearr_33127_34957 = state_33120__$1;
(statearr_33127_34957[(1)] = (8));

} else {
var statearr_33128_34958 = state_33120__$1;
(statearr_33128_34958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33121 === (3))){
var inst_33118 = (state_33120[(2)]);
var state_33120__$1 = state_33120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33120__$1,inst_33118);
} else {
if((state_val_33121 === (12))){
var state_33120__$1 = state_33120;
var statearr_33129_34960 = state_33120__$1;
(statearr_33129_34960[(2)] = null);

(statearr_33129_34960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33121 === (2))){
var inst_33097 = (state_33120[(7)]);
var state_33120__$1 = state_33120;
if(cljs.core.truth_(inst_33097)){
var statearr_33130_34961 = state_33120__$1;
(statearr_33130_34961[(1)] = (4));

} else {
var statearr_33131_34962 = state_33120__$1;
(statearr_33131_34962[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33121 === (11))){
var inst_33111 = cljs.core.async.close_BANG_(ch);
var state_33120__$1 = state_33120;
var statearr_33132_34963 = state_33120__$1;
(statearr_33132_34963[(2)] = inst_33111);

(statearr_33132_34963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33121 === (9))){
var state_33120__$1 = state_33120;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33133_34965 = state_33120__$1;
(statearr_33133_34965[(1)] = (11));

} else {
var statearr_33134_34966 = state_33120__$1;
(statearr_33134_34966[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33121 === (5))){
var inst_33097 = (state_33120[(7)]);
var state_33120__$1 = state_33120;
var statearr_33135_34967 = state_33120__$1;
(statearr_33135_34967[(2)] = inst_33097);

(statearr_33135_34967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33121 === (10))){
var inst_33116 = (state_33120[(2)]);
var state_33120__$1 = state_33120;
var statearr_33136_34968 = state_33120__$1;
(statearr_33136_34968[(2)] = inst_33116);

(statearr_33136_34968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33121 === (8))){
var inst_33097 = (state_33120[(7)]);
var inst_33107 = cljs.core.next(inst_33097);
var inst_33097__$1 = inst_33107;
var state_33120__$1 = (function (){var statearr_33137 = state_33120;
(statearr_33137[(7)] = inst_33097__$1);

return statearr_33137;
})();
var statearr_33138_34970 = state_33120__$1;
(statearr_33138_34970[(2)] = null);

(statearr_33138_34970[(1)] = (2));


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
var cljs$core$async$state_machine__32400__auto__ = null;
var cljs$core$async$state_machine__32400__auto____0 = (function (){
var statearr_33139 = [null,null,null,null,null,null,null,null];
(statearr_33139[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_33139[(1)] = (1));

return statearr_33139;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_33120){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33120);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33140){var ex__32403__auto__ = e33140;
var statearr_33141_34972 = state_33120;
(statearr_33141_34972[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33120[(4)]))){
var statearr_33142_34973 = state_33120;
(statearr_33142_34973[(1)] = cljs.core.first((state_33120[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34974 = state_33120;
state_33120 = G__34974;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_33120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_33120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_33143 = f__32475__auto__();
(statearr_33143[(6)] = c__32474__auto__);

return statearr_33143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
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
var G__33145 = arguments.length;
switch (G__33145) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34977 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34977(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34978 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34978(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34979 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34979(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34980 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34980(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33148 = (function (ch,cs,meta33149){
this.ch = ch;
this.cs = cs;
this.meta33149 = meta33149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33150,meta33149__$1){
var self__ = this;
var _33150__$1 = this;
return (new cljs.core.async.t_cljs$core$async33148(self__.ch,self__.cs,meta33149__$1));
}));

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33150){
var self__ = this;
var _33150__$1 = this;
return self__.meta33149;
}));

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33149","meta33149",-649213972,null)], null);
}));

(cljs.core.async.t_cljs$core$async33148.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33148");

(cljs.core.async.t_cljs$core$async33148.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33148");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33148.
 */
cljs.core.async.__GT_t_cljs$core$async33148 = (function cljs$core$async$__GT_t_cljs$core$async33148(ch,cs,meta33149){
return (new cljs.core.async.t_cljs$core$async33148(ch,cs,meta33149));
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
var m = (new cljs.core.async.t_cljs$core$async33148(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32474__auto___34984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_33286){
var state_val_33287 = (state_33286[(1)]);
if((state_val_33287 === (7))){
var inst_33282 = (state_33286[(2)]);
var state_33286__$1 = state_33286;
var statearr_33292_34986 = state_33286__$1;
(statearr_33292_34986[(2)] = inst_33282);

(statearr_33292_34986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (20))){
var inst_33187 = (state_33286[(7)]);
var inst_33199 = cljs.core.first(inst_33187);
var inst_33200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33199,(0),null);
var inst_33201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33199,(1),null);
var state_33286__$1 = (function (){var statearr_33293 = state_33286;
(statearr_33293[(8)] = inst_33200);

return statearr_33293;
})();
if(cljs.core.truth_(inst_33201)){
var statearr_33294_34990 = state_33286__$1;
(statearr_33294_34990[(1)] = (22));

} else {
var statearr_33295_34991 = state_33286__$1;
(statearr_33295_34991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (27))){
var inst_33229 = (state_33286[(9)]);
var inst_33231 = (state_33286[(10)]);
var inst_33236 = (state_33286[(11)]);
var inst_33155 = (state_33286[(12)]);
var inst_33236__$1 = cljs.core._nth(inst_33229,inst_33231);
var inst_33237 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33236__$1,inst_33155,done);
var state_33286__$1 = (function (){var statearr_33296 = state_33286;
(statearr_33296[(11)] = inst_33236__$1);

return statearr_33296;
})();
if(cljs.core.truth_(inst_33237)){
var statearr_33297_34994 = state_33286__$1;
(statearr_33297_34994[(1)] = (30));

} else {
var statearr_33298_34995 = state_33286__$1;
(statearr_33298_34995[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (1))){
var state_33286__$1 = state_33286;
var statearr_33299_34996 = state_33286__$1;
(statearr_33299_34996[(2)] = null);

(statearr_33299_34996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (24))){
var inst_33187 = (state_33286[(7)]);
var inst_33206 = (state_33286[(2)]);
var inst_33207 = cljs.core.next(inst_33187);
var inst_33164 = inst_33207;
var inst_33165 = null;
var inst_33166 = (0);
var inst_33167 = (0);
var state_33286__$1 = (function (){var statearr_33300 = state_33286;
(statearr_33300[(13)] = inst_33206);

(statearr_33300[(14)] = inst_33164);

(statearr_33300[(15)] = inst_33165);

(statearr_33300[(16)] = inst_33166);

(statearr_33300[(17)] = inst_33167);

return statearr_33300;
})();
var statearr_33301_35001 = state_33286__$1;
(statearr_33301_35001[(2)] = null);

(statearr_33301_35001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (39))){
var state_33286__$1 = state_33286;
var statearr_33305_35002 = state_33286__$1;
(statearr_33305_35002[(2)] = null);

(statearr_33305_35002[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (4))){
var inst_33155 = (state_33286[(12)]);
var inst_33155__$1 = (state_33286[(2)]);
var inst_33156 = (inst_33155__$1 == null);
var state_33286__$1 = (function (){var statearr_33306 = state_33286;
(statearr_33306[(12)] = inst_33155__$1);

return statearr_33306;
})();
if(cljs.core.truth_(inst_33156)){
var statearr_33307_35003 = state_33286__$1;
(statearr_33307_35003[(1)] = (5));

} else {
var statearr_33308_35004 = state_33286__$1;
(statearr_33308_35004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (15))){
var inst_33167 = (state_33286[(17)]);
var inst_33164 = (state_33286[(14)]);
var inst_33165 = (state_33286[(15)]);
var inst_33166 = (state_33286[(16)]);
var inst_33183 = (state_33286[(2)]);
var inst_33184 = (inst_33167 + (1));
var tmp33302 = inst_33165;
var tmp33303 = inst_33164;
var tmp33304 = inst_33166;
var inst_33164__$1 = tmp33303;
var inst_33165__$1 = tmp33302;
var inst_33166__$1 = tmp33304;
var inst_33167__$1 = inst_33184;
var state_33286__$1 = (function (){var statearr_33309 = state_33286;
(statearr_33309[(18)] = inst_33183);

(statearr_33309[(14)] = inst_33164__$1);

(statearr_33309[(15)] = inst_33165__$1);

(statearr_33309[(16)] = inst_33166__$1);

(statearr_33309[(17)] = inst_33167__$1);

return statearr_33309;
})();
var statearr_33310_35009 = state_33286__$1;
(statearr_33310_35009[(2)] = null);

(statearr_33310_35009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (21))){
var inst_33210 = (state_33286[(2)]);
var state_33286__$1 = state_33286;
var statearr_33314_35010 = state_33286__$1;
(statearr_33314_35010[(2)] = inst_33210);

(statearr_33314_35010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (31))){
var inst_33236 = (state_33286[(11)]);
var inst_33240 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33236);
var state_33286__$1 = state_33286;
var statearr_33315_35011 = state_33286__$1;
(statearr_33315_35011[(2)] = inst_33240);

(statearr_33315_35011[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (32))){
var inst_33231 = (state_33286[(10)]);
var inst_33228 = (state_33286[(19)]);
var inst_33229 = (state_33286[(9)]);
var inst_33230 = (state_33286[(20)]);
var inst_33242 = (state_33286[(2)]);
var inst_33243 = (inst_33231 + (1));
var tmp33311 = inst_33229;
var tmp33312 = inst_33230;
var tmp33313 = inst_33228;
var inst_33228__$1 = tmp33313;
var inst_33229__$1 = tmp33311;
var inst_33230__$1 = tmp33312;
var inst_33231__$1 = inst_33243;
var state_33286__$1 = (function (){var statearr_33316 = state_33286;
(statearr_33316[(21)] = inst_33242);

(statearr_33316[(19)] = inst_33228__$1);

(statearr_33316[(9)] = inst_33229__$1);

(statearr_33316[(20)] = inst_33230__$1);

(statearr_33316[(10)] = inst_33231__$1);

return statearr_33316;
})();
var statearr_33317_35016 = state_33286__$1;
(statearr_33317_35016[(2)] = null);

(statearr_33317_35016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (40))){
var inst_33255 = (state_33286[(22)]);
var inst_33259 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33255);
var state_33286__$1 = state_33286;
var statearr_33318_35019 = state_33286__$1;
(statearr_33318_35019[(2)] = inst_33259);

(statearr_33318_35019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (33))){
var inst_33246 = (state_33286[(23)]);
var inst_33248 = cljs.core.chunked_seq_QMARK_(inst_33246);
var state_33286__$1 = state_33286;
if(inst_33248){
var statearr_33319_35021 = state_33286__$1;
(statearr_33319_35021[(1)] = (36));

} else {
var statearr_33320_35022 = state_33286__$1;
(statearr_33320_35022[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (13))){
var inst_33176 = (state_33286[(24)]);
var inst_33180 = cljs.core.async.close_BANG_(inst_33176);
var state_33286__$1 = state_33286;
var statearr_33321_35038 = state_33286__$1;
(statearr_33321_35038[(2)] = inst_33180);

(statearr_33321_35038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (22))){
var inst_33200 = (state_33286[(8)]);
var inst_33203 = cljs.core.async.close_BANG_(inst_33200);
var state_33286__$1 = state_33286;
var statearr_33322_35039 = state_33286__$1;
(statearr_33322_35039[(2)] = inst_33203);

(statearr_33322_35039[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (36))){
var inst_33246 = (state_33286[(23)]);
var inst_33250 = cljs.core.chunk_first(inst_33246);
var inst_33251 = cljs.core.chunk_rest(inst_33246);
var inst_33252 = cljs.core.count(inst_33250);
var inst_33228 = inst_33251;
var inst_33229 = inst_33250;
var inst_33230 = inst_33252;
var inst_33231 = (0);
var state_33286__$1 = (function (){var statearr_33323 = state_33286;
(statearr_33323[(19)] = inst_33228);

(statearr_33323[(9)] = inst_33229);

(statearr_33323[(20)] = inst_33230);

(statearr_33323[(10)] = inst_33231);

return statearr_33323;
})();
var statearr_33324_35040 = state_33286__$1;
(statearr_33324_35040[(2)] = null);

(statearr_33324_35040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (41))){
var inst_33246 = (state_33286[(23)]);
var inst_33261 = (state_33286[(2)]);
var inst_33262 = cljs.core.next(inst_33246);
var inst_33228 = inst_33262;
var inst_33229 = null;
var inst_33230 = (0);
var inst_33231 = (0);
var state_33286__$1 = (function (){var statearr_33325 = state_33286;
(statearr_33325[(25)] = inst_33261);

(statearr_33325[(19)] = inst_33228);

(statearr_33325[(9)] = inst_33229);

(statearr_33325[(20)] = inst_33230);

(statearr_33325[(10)] = inst_33231);

return statearr_33325;
})();
var statearr_33326_35048 = state_33286__$1;
(statearr_33326_35048[(2)] = null);

(statearr_33326_35048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (43))){
var state_33286__$1 = state_33286;
var statearr_33327_35050 = state_33286__$1;
(statearr_33327_35050[(2)] = null);

(statearr_33327_35050[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (29))){
var inst_33270 = (state_33286[(2)]);
var state_33286__$1 = state_33286;
var statearr_33328_35051 = state_33286__$1;
(statearr_33328_35051[(2)] = inst_33270);

(statearr_33328_35051[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (44))){
var inst_33279 = (state_33286[(2)]);
var state_33286__$1 = (function (){var statearr_33329 = state_33286;
(statearr_33329[(26)] = inst_33279);

return statearr_33329;
})();
var statearr_33330_35055 = state_33286__$1;
(statearr_33330_35055[(2)] = null);

(statearr_33330_35055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (6))){
var inst_33220 = (state_33286[(27)]);
var inst_33219 = cljs.core.deref(cs);
var inst_33220__$1 = cljs.core.keys(inst_33219);
var inst_33221 = cljs.core.count(inst_33220__$1);
var inst_33222 = cljs.core.reset_BANG_(dctr,inst_33221);
var inst_33227 = cljs.core.seq(inst_33220__$1);
var inst_33228 = inst_33227;
var inst_33229 = null;
var inst_33230 = (0);
var inst_33231 = (0);
var state_33286__$1 = (function (){var statearr_33333 = state_33286;
(statearr_33333[(27)] = inst_33220__$1);

(statearr_33333[(28)] = inst_33222);

(statearr_33333[(19)] = inst_33228);

(statearr_33333[(9)] = inst_33229);

(statearr_33333[(20)] = inst_33230);

(statearr_33333[(10)] = inst_33231);

return statearr_33333;
})();
var statearr_33334_35058 = state_33286__$1;
(statearr_33334_35058[(2)] = null);

(statearr_33334_35058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (28))){
var inst_33228 = (state_33286[(19)]);
var inst_33246 = (state_33286[(23)]);
var inst_33246__$1 = cljs.core.seq(inst_33228);
var state_33286__$1 = (function (){var statearr_33341 = state_33286;
(statearr_33341[(23)] = inst_33246__$1);

return statearr_33341;
})();
if(inst_33246__$1){
var statearr_33342_35060 = state_33286__$1;
(statearr_33342_35060[(1)] = (33));

} else {
var statearr_33343_35061 = state_33286__$1;
(statearr_33343_35061[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (25))){
var inst_33231 = (state_33286[(10)]);
var inst_33230 = (state_33286[(20)]);
var inst_33233 = (inst_33231 < inst_33230);
var inst_33234 = inst_33233;
var state_33286__$1 = state_33286;
if(cljs.core.truth_(inst_33234)){
var statearr_33344_35062 = state_33286__$1;
(statearr_33344_35062[(1)] = (27));

} else {
var statearr_33345_35063 = state_33286__$1;
(statearr_33345_35063[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (34))){
var state_33286__$1 = state_33286;
var statearr_33346_35064 = state_33286__$1;
(statearr_33346_35064[(2)] = null);

(statearr_33346_35064[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (17))){
var state_33286__$1 = state_33286;
var statearr_33347_35065 = state_33286__$1;
(statearr_33347_35065[(2)] = null);

(statearr_33347_35065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (3))){
var inst_33284 = (state_33286[(2)]);
var state_33286__$1 = state_33286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33286__$1,inst_33284);
} else {
if((state_val_33287 === (12))){
var inst_33215 = (state_33286[(2)]);
var state_33286__$1 = state_33286;
var statearr_33356_35070 = state_33286__$1;
(statearr_33356_35070[(2)] = inst_33215);

(statearr_33356_35070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (2))){
var state_33286__$1 = state_33286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33286__$1,(4),ch);
} else {
if((state_val_33287 === (23))){
var state_33286__$1 = state_33286;
var statearr_33361_35072 = state_33286__$1;
(statearr_33361_35072[(2)] = null);

(statearr_33361_35072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (35))){
var inst_33268 = (state_33286[(2)]);
var state_33286__$1 = state_33286;
var statearr_33362_35075 = state_33286__$1;
(statearr_33362_35075[(2)] = inst_33268);

(statearr_33362_35075[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (19))){
var inst_33187 = (state_33286[(7)]);
var inst_33191 = cljs.core.chunk_first(inst_33187);
var inst_33192 = cljs.core.chunk_rest(inst_33187);
var inst_33193 = cljs.core.count(inst_33191);
var inst_33164 = inst_33192;
var inst_33165 = inst_33191;
var inst_33166 = inst_33193;
var inst_33167 = (0);
var state_33286__$1 = (function (){var statearr_33363 = state_33286;
(statearr_33363[(14)] = inst_33164);

(statearr_33363[(15)] = inst_33165);

(statearr_33363[(16)] = inst_33166);

(statearr_33363[(17)] = inst_33167);

return statearr_33363;
})();
var statearr_33364_35077 = state_33286__$1;
(statearr_33364_35077[(2)] = null);

(statearr_33364_35077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (11))){
var inst_33164 = (state_33286[(14)]);
var inst_33187 = (state_33286[(7)]);
var inst_33187__$1 = cljs.core.seq(inst_33164);
var state_33286__$1 = (function (){var statearr_33369 = state_33286;
(statearr_33369[(7)] = inst_33187__$1);

return statearr_33369;
})();
if(inst_33187__$1){
var statearr_33370_35080 = state_33286__$1;
(statearr_33370_35080[(1)] = (16));

} else {
var statearr_33371_35081 = state_33286__$1;
(statearr_33371_35081[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (9))){
var inst_33217 = (state_33286[(2)]);
var state_33286__$1 = state_33286;
var statearr_33372_35086 = state_33286__$1;
(statearr_33372_35086[(2)] = inst_33217);

(statearr_33372_35086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (5))){
var inst_33162 = cljs.core.deref(cs);
var inst_33163 = cljs.core.seq(inst_33162);
var inst_33164 = inst_33163;
var inst_33165 = null;
var inst_33166 = (0);
var inst_33167 = (0);
var state_33286__$1 = (function (){var statearr_33376 = state_33286;
(statearr_33376[(14)] = inst_33164);

(statearr_33376[(15)] = inst_33165);

(statearr_33376[(16)] = inst_33166);

(statearr_33376[(17)] = inst_33167);

return statearr_33376;
})();
var statearr_33377_35090 = state_33286__$1;
(statearr_33377_35090[(2)] = null);

(statearr_33377_35090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (14))){
var state_33286__$1 = state_33286;
var statearr_33387_35091 = state_33286__$1;
(statearr_33387_35091[(2)] = null);

(statearr_33387_35091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (45))){
var inst_33276 = (state_33286[(2)]);
var state_33286__$1 = state_33286;
var statearr_33388_35092 = state_33286__$1;
(statearr_33388_35092[(2)] = inst_33276);

(statearr_33388_35092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (26))){
var inst_33220 = (state_33286[(27)]);
var inst_33272 = (state_33286[(2)]);
var inst_33273 = cljs.core.seq(inst_33220);
var state_33286__$1 = (function (){var statearr_33390 = state_33286;
(statearr_33390[(29)] = inst_33272);

return statearr_33390;
})();
if(inst_33273){
var statearr_33391_35095 = state_33286__$1;
(statearr_33391_35095[(1)] = (42));

} else {
var statearr_33392_35096 = state_33286__$1;
(statearr_33392_35096[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (16))){
var inst_33187 = (state_33286[(7)]);
var inst_33189 = cljs.core.chunked_seq_QMARK_(inst_33187);
var state_33286__$1 = state_33286;
if(inst_33189){
var statearr_33393_35099 = state_33286__$1;
(statearr_33393_35099[(1)] = (19));

} else {
var statearr_33394_35100 = state_33286__$1;
(statearr_33394_35100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (38))){
var inst_33265 = (state_33286[(2)]);
var state_33286__$1 = state_33286;
var statearr_33395_35101 = state_33286__$1;
(statearr_33395_35101[(2)] = inst_33265);

(statearr_33395_35101[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (30))){
var state_33286__$1 = state_33286;
var statearr_33396_35102 = state_33286__$1;
(statearr_33396_35102[(2)] = null);

(statearr_33396_35102[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (10))){
var inst_33165 = (state_33286[(15)]);
var inst_33167 = (state_33286[(17)]);
var inst_33175 = cljs.core._nth(inst_33165,inst_33167);
var inst_33176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33175,(0),null);
var inst_33177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33175,(1),null);
var state_33286__$1 = (function (){var statearr_33400 = state_33286;
(statearr_33400[(24)] = inst_33176);

return statearr_33400;
})();
if(cljs.core.truth_(inst_33177)){
var statearr_33401_35107 = state_33286__$1;
(statearr_33401_35107[(1)] = (13));

} else {
var statearr_33402_35109 = state_33286__$1;
(statearr_33402_35109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (18))){
var inst_33213 = (state_33286[(2)]);
var state_33286__$1 = state_33286;
var statearr_33403_35113 = state_33286__$1;
(statearr_33403_35113[(2)] = inst_33213);

(statearr_33403_35113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (42))){
var state_33286__$1 = state_33286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33286__$1,(45),dchan);
} else {
if((state_val_33287 === (37))){
var inst_33246 = (state_33286[(23)]);
var inst_33255 = (state_33286[(22)]);
var inst_33155 = (state_33286[(12)]);
var inst_33255__$1 = cljs.core.first(inst_33246);
var inst_33256 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33255__$1,inst_33155,done);
var state_33286__$1 = (function (){var statearr_33408 = state_33286;
(statearr_33408[(22)] = inst_33255__$1);

return statearr_33408;
})();
if(cljs.core.truth_(inst_33256)){
var statearr_33409_35119 = state_33286__$1;
(statearr_33409_35119[(1)] = (39));

} else {
var statearr_33411_35121 = state_33286__$1;
(statearr_33411_35121[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33287 === (8))){
var inst_33167 = (state_33286[(17)]);
var inst_33166 = (state_33286[(16)]);
var inst_33169 = (inst_33167 < inst_33166);
var inst_33170 = inst_33169;
var state_33286__$1 = state_33286;
if(cljs.core.truth_(inst_33170)){
var statearr_33412_35124 = state_33286__$1;
(statearr_33412_35124[(1)] = (10));

} else {
var statearr_33413_35126 = state_33286__$1;
(statearr_33413_35126[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32400__auto__ = null;
var cljs$core$async$mult_$_state_machine__32400__auto____0 = (function (){
var statearr_33417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33417[(0)] = cljs$core$async$mult_$_state_machine__32400__auto__);

(statearr_33417[(1)] = (1));

return statearr_33417;
});
var cljs$core$async$mult_$_state_machine__32400__auto____1 = (function (state_33286){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33286);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33419){var ex__32403__auto__ = e33419;
var statearr_33421_35136 = state_33286;
(statearr_33421_35136[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33286[(4)]))){
var statearr_33423_35137 = state_33286;
(statearr_33423_35137[(1)] = cljs.core.first((state_33286[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35138 = state_33286;
state_33286 = G__35138;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32400__auto__ = function(state_33286){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32400__auto____1.call(this,state_33286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32400__auto____0;
cljs$core$async$mult_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32400__auto____1;
return cljs$core$async$mult_$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_33424 = f__32475__auto__();
(statearr_33424[(6)] = c__32474__auto___34984);

return statearr_33424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
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
var G__33438 = arguments.length;
switch (G__33438) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35142 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35142(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35145 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35145(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35148 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35148(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35150 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35150(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35153 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35153(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35157 = arguments.length;
var i__5750__auto___35158 = (0);
while(true){
if((i__5750__auto___35158 < len__5749__auto___35157)){
args__5755__auto__.push((arguments[i__5750__auto___35158]));

var G__35159 = (i__5750__auto___35158 + (1));
i__5750__auto___35158 = G__35159;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33491){
var map__33492 = p__33491;
var map__33492__$1 = cljs.core.__destructure_map(map__33492);
var opts = map__33492__$1;
var statearr_33493_35167 = state;
(statearr_33493_35167[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33494_35168 = state;
(statearr_33494_35168[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33499_35169 = state;
(statearr_33499_35169[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33475){
var G__33476 = cljs.core.first(seq33475);
var seq33475__$1 = cljs.core.next(seq33475);
var G__33477 = cljs.core.first(seq33475__$1);
var seq33475__$2 = cljs.core.next(seq33475__$1);
var G__33478 = cljs.core.first(seq33475__$2);
var seq33475__$3 = cljs.core.next(seq33475__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33476,G__33477,G__33478,seq33475__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33536 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33537){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33537 = meta33537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33538,meta33537__$1){
var self__ = this;
var _33538__$1 = this;
return (new cljs.core.async.t_cljs$core$async33536(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33537__$1));
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33538){
var self__ = this;
var _33538__$1 = this;
return self__.meta33537;
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33537","meta33537",-1533601650,null)], null);
}));

(cljs.core.async.t_cljs$core$async33536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33536");

(cljs.core.async.t_cljs$core$async33536.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33536.
 */
cljs.core.async.__GT_t_cljs$core$async33536 = (function cljs$core$async$__GT_t_cljs$core$async33536(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33537){
return (new cljs.core.async.t_cljs$core$async33536(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33537));
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
var m = (new cljs.core.async.t_cljs$core$async33536(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32474__auto___35206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_33633){
var state_val_33638 = (state_33633[(1)]);
if((state_val_33638 === (7))){
var inst_33592 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
if(cljs.core.truth_(inst_33592)){
var statearr_33643_35209 = state_33633__$1;
(statearr_33643_35209[(1)] = (8));

} else {
var statearr_33644_35210 = state_33633__$1;
(statearr_33644_35210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (20))){
var inst_33583 = (state_33633[(7)]);
var state_33633__$1 = state_33633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33633__$1,(23),out,inst_33583);
} else {
if((state_val_33638 === (1))){
var inst_33561 = calc_state();
var inst_33565 = cljs.core.__destructure_map(inst_33561);
var inst_33566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33565,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33565,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33565,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33569 = inst_33561;
var state_33633__$1 = (function (){var statearr_33645 = state_33633;
(statearr_33645[(8)] = inst_33566);

(statearr_33645[(9)] = inst_33567);

(statearr_33645[(10)] = inst_33568);

(statearr_33645[(11)] = inst_33569);

return statearr_33645;
})();
var statearr_33646_35213 = state_33633__$1;
(statearr_33646_35213[(2)] = null);

(statearr_33646_35213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (24))){
var inst_33573 = (state_33633[(12)]);
var inst_33569 = inst_33573;
var state_33633__$1 = (function (){var statearr_33650 = state_33633;
(statearr_33650[(11)] = inst_33569);

return statearr_33650;
})();
var statearr_33652_35214 = state_33633__$1;
(statearr_33652_35214[(2)] = null);

(statearr_33652_35214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (4))){
var inst_33583 = (state_33633[(7)]);
var inst_33585 = (state_33633[(13)]);
var inst_33582 = (state_33633[(2)]);
var inst_33583__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33582,(0),null);
var inst_33584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33582,(1),null);
var inst_33585__$1 = (inst_33583__$1 == null);
var state_33633__$1 = (function (){var statearr_33655 = state_33633;
(statearr_33655[(7)] = inst_33583__$1);

(statearr_33655[(14)] = inst_33584);

(statearr_33655[(13)] = inst_33585__$1);

return statearr_33655;
})();
if(cljs.core.truth_(inst_33585__$1)){
var statearr_33656_35217 = state_33633__$1;
(statearr_33656_35217[(1)] = (5));

} else {
var statearr_33657_35221 = state_33633__$1;
(statearr_33657_35221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (15))){
var inst_33574 = (state_33633[(15)]);
var inst_33607 = (state_33633[(16)]);
var inst_33607__$1 = cljs.core.empty_QMARK_(inst_33574);
var state_33633__$1 = (function (){var statearr_33658 = state_33633;
(statearr_33658[(16)] = inst_33607__$1);

return statearr_33658;
})();
if(inst_33607__$1){
var statearr_33659_35222 = state_33633__$1;
(statearr_33659_35222[(1)] = (17));

} else {
var statearr_33660_35223 = state_33633__$1;
(statearr_33660_35223[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (21))){
var inst_33573 = (state_33633[(12)]);
var inst_33569 = inst_33573;
var state_33633__$1 = (function (){var statearr_33661 = state_33633;
(statearr_33661[(11)] = inst_33569);

return statearr_33661;
})();
var statearr_33662_35224 = state_33633__$1;
(statearr_33662_35224[(2)] = null);

(statearr_33662_35224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (13))){
var inst_33600 = (state_33633[(2)]);
var inst_33601 = calc_state();
var inst_33569 = inst_33601;
var state_33633__$1 = (function (){var statearr_33663 = state_33633;
(statearr_33663[(17)] = inst_33600);

(statearr_33663[(11)] = inst_33569);

return statearr_33663;
})();
var statearr_33664_35225 = state_33633__$1;
(statearr_33664_35225[(2)] = null);

(statearr_33664_35225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (22))){
var inst_33627 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
var statearr_33665_35226 = state_33633__$1;
(statearr_33665_35226[(2)] = inst_33627);

(statearr_33665_35226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (6))){
var inst_33584 = (state_33633[(14)]);
var inst_33590 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33584,change);
var state_33633__$1 = state_33633;
var statearr_33666_35227 = state_33633__$1;
(statearr_33666_35227[(2)] = inst_33590);

(statearr_33666_35227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (25))){
var state_33633__$1 = state_33633;
var statearr_33667_35228 = state_33633__$1;
(statearr_33667_35228[(2)] = null);

(statearr_33667_35228[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (17))){
var inst_33575 = (state_33633[(18)]);
var inst_33584 = (state_33633[(14)]);
var inst_33609 = (inst_33575.cljs$core$IFn$_invoke$arity$1 ? inst_33575.cljs$core$IFn$_invoke$arity$1(inst_33584) : inst_33575.call(null,inst_33584));
var inst_33610 = cljs.core.not(inst_33609);
var state_33633__$1 = state_33633;
var statearr_33670_35229 = state_33633__$1;
(statearr_33670_35229[(2)] = inst_33610);

(statearr_33670_35229[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (3))){
var inst_33631 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33633__$1,inst_33631);
} else {
if((state_val_33638 === (12))){
var state_33633__$1 = state_33633;
var statearr_33671_35232 = state_33633__$1;
(statearr_33671_35232[(2)] = null);

(statearr_33671_35232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (2))){
var inst_33569 = (state_33633[(11)]);
var inst_33573 = (state_33633[(12)]);
var inst_33573__$1 = cljs.core.__destructure_map(inst_33569);
var inst_33574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33573__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33573__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33573__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33633__$1 = (function (){var statearr_33673 = state_33633;
(statearr_33673[(12)] = inst_33573__$1);

(statearr_33673[(15)] = inst_33574);

(statearr_33673[(18)] = inst_33575);

return statearr_33673;
})();
return cljs.core.async.ioc_alts_BANG_(state_33633__$1,(4),inst_33576);
} else {
if((state_val_33638 === (23))){
var inst_33618 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
if(cljs.core.truth_(inst_33618)){
var statearr_33674_35237 = state_33633__$1;
(statearr_33674_35237[(1)] = (24));

} else {
var statearr_33675_35238 = state_33633__$1;
(statearr_33675_35238[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (19))){
var inst_33613 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
var statearr_33677_35239 = state_33633__$1;
(statearr_33677_35239[(2)] = inst_33613);

(statearr_33677_35239[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (11))){
var inst_33584 = (state_33633[(14)]);
var inst_33597 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33584);
var state_33633__$1 = state_33633;
var statearr_33678_35242 = state_33633__$1;
(statearr_33678_35242[(2)] = inst_33597);

(statearr_33678_35242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (9))){
var inst_33574 = (state_33633[(15)]);
var inst_33584 = (state_33633[(14)]);
var inst_33604 = (state_33633[(19)]);
var inst_33604__$1 = (inst_33574.cljs$core$IFn$_invoke$arity$1 ? inst_33574.cljs$core$IFn$_invoke$arity$1(inst_33584) : inst_33574.call(null,inst_33584));
var state_33633__$1 = (function (){var statearr_33679 = state_33633;
(statearr_33679[(19)] = inst_33604__$1);

return statearr_33679;
})();
if(cljs.core.truth_(inst_33604__$1)){
var statearr_33680_35244 = state_33633__$1;
(statearr_33680_35244[(1)] = (14));

} else {
var statearr_33681_35245 = state_33633__$1;
(statearr_33681_35245[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (5))){
var inst_33585 = (state_33633[(13)]);
var state_33633__$1 = state_33633;
var statearr_33682_35246 = state_33633__$1;
(statearr_33682_35246[(2)] = inst_33585);

(statearr_33682_35246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (14))){
var inst_33604 = (state_33633[(19)]);
var state_33633__$1 = state_33633;
var statearr_33683_35249 = state_33633__$1;
(statearr_33683_35249[(2)] = inst_33604);

(statearr_33683_35249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (26))){
var inst_33623 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
var statearr_33684_35250 = state_33633__$1;
(statearr_33684_35250[(2)] = inst_33623);

(statearr_33684_35250[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (16))){
var inst_33615 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
if(cljs.core.truth_(inst_33615)){
var statearr_33685_35251 = state_33633__$1;
(statearr_33685_35251[(1)] = (20));

} else {
var statearr_33686_35252 = state_33633__$1;
(statearr_33686_35252[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (10))){
var inst_33629 = (state_33633[(2)]);
var state_33633__$1 = state_33633;
var statearr_33687_35253 = state_33633__$1;
(statearr_33687_35253[(2)] = inst_33629);

(statearr_33687_35253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (18))){
var inst_33607 = (state_33633[(16)]);
var state_33633__$1 = state_33633;
var statearr_33689_35254 = state_33633__$1;
(statearr_33689_35254[(2)] = inst_33607);

(statearr_33689_35254[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (8))){
var inst_33583 = (state_33633[(7)]);
var inst_33595 = (inst_33583 == null);
var state_33633__$1 = state_33633;
if(cljs.core.truth_(inst_33595)){
var statearr_33690_35256 = state_33633__$1;
(statearr_33690_35256[(1)] = (11));

} else {
var statearr_33691_35257 = state_33633__$1;
(statearr_33691_35257[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32400__auto__ = null;
var cljs$core$async$mix_$_state_machine__32400__auto____0 = (function (){
var statearr_33693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33693[(0)] = cljs$core$async$mix_$_state_machine__32400__auto__);

(statearr_33693[(1)] = (1));

return statearr_33693;
});
var cljs$core$async$mix_$_state_machine__32400__auto____1 = (function (state_33633){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33633);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33694){var ex__32403__auto__ = e33694;
var statearr_33695_35258 = state_33633;
(statearr_33695_35258[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33633[(4)]))){
var statearr_33697_35259 = state_33633;
(statearr_33697_35259[(1)] = cljs.core.first((state_33633[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35260 = state_33633;
state_33633 = G__35260;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32400__auto__ = function(state_33633){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32400__auto____1.call(this,state_33633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32400__auto____0;
cljs$core$async$mix_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32400__auto____1;
return cljs$core$async$mix_$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_33699 = f__32475__auto__();
(statearr_33699[(6)] = c__32474__auto___35206);

return statearr_33699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35261 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35261(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35265 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35265(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35268 = (function() {
var G__35269 = null;
var G__35269__1 = (function (p){
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
var G__35269__2 = (function (p,v){
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
G__35269 = function(p,v){
switch(arguments.length){
case 1:
return G__35269__1.call(this,p);
case 2:
return G__35269__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35269.cljs$core$IFn$_invoke$arity$1 = G__35269__1;
G__35269.cljs$core$IFn$_invoke$arity$2 = G__35269__2;
return G__35269;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33727 = arguments.length;
switch (G__33727) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35268(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35268(p,v);
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
cljs.core.async.t_cljs$core$async33738 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33739){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33739 = meta33739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33740,meta33739__$1){
var self__ = this;
var _33740__$1 = this;
return (new cljs.core.async.t_cljs$core$async33738(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33739__$1));
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33740){
var self__ = this;
var _33740__$1 = this;
return self__.meta33739;
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33738.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33739","meta33739",-1325809178,null)], null);
}));

(cljs.core.async.t_cljs$core$async33738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33738");

(cljs.core.async.t_cljs$core$async33738.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33738.
 */
cljs.core.async.__GT_t_cljs$core$async33738 = (function cljs$core$async$__GT_t_cljs$core$async33738(ch,topic_fn,buf_fn,mults,ensure_mult,meta33739){
return (new cljs.core.async.t_cljs$core$async33738(ch,topic_fn,buf_fn,mults,ensure_mult,meta33739));
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
var G__33733 = arguments.length;
switch (G__33733) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33731_SHARP_){
if(cljs.core.truth_((p1__33731_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33731_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33731_SHARP_.call(null,topic)))){
return p1__33731_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33731_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33738(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32474__auto___35288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_33843){
var state_val_33844 = (state_33843[(1)]);
if((state_val_33844 === (7))){
var inst_33839 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33845_35289 = state_33843__$1;
(statearr_33845_35289[(2)] = inst_33839);

(statearr_33845_35289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (20))){
var state_33843__$1 = state_33843;
var statearr_33846_35290 = state_33843__$1;
(statearr_33846_35290[(2)] = null);

(statearr_33846_35290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (1))){
var state_33843__$1 = state_33843;
var statearr_33848_35291 = state_33843__$1;
(statearr_33848_35291[(2)] = null);

(statearr_33848_35291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (24))){
var inst_33822 = (state_33843[(7)]);
var inst_33831 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33822);
var state_33843__$1 = state_33843;
var statearr_33849_35292 = state_33843__$1;
(statearr_33849_35292[(2)] = inst_33831);

(statearr_33849_35292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (4))){
var inst_33757 = (state_33843[(8)]);
var inst_33757__$1 = (state_33843[(2)]);
var inst_33758 = (inst_33757__$1 == null);
var state_33843__$1 = (function (){var statearr_33859 = state_33843;
(statearr_33859[(8)] = inst_33757__$1);

return statearr_33859;
})();
if(cljs.core.truth_(inst_33758)){
var statearr_33860_35293 = state_33843__$1;
(statearr_33860_35293[(1)] = (5));

} else {
var statearr_33862_35294 = state_33843__$1;
(statearr_33862_35294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (15))){
var inst_33816 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33864_35295 = state_33843__$1;
(statearr_33864_35295[(2)] = inst_33816);

(statearr_33864_35295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (21))){
var inst_33836 = (state_33843[(2)]);
var state_33843__$1 = (function (){var statearr_33867 = state_33843;
(statearr_33867[(9)] = inst_33836);

return statearr_33867;
})();
var statearr_33869_35296 = state_33843__$1;
(statearr_33869_35296[(2)] = null);

(statearr_33869_35296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (13))){
var inst_33790 = (state_33843[(10)]);
var inst_33792 = cljs.core.chunked_seq_QMARK_(inst_33790);
var state_33843__$1 = state_33843;
if(inst_33792){
var statearr_33870_35297 = state_33843__$1;
(statearr_33870_35297[(1)] = (16));

} else {
var statearr_33871_35298 = state_33843__$1;
(statearr_33871_35298[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (22))){
var inst_33828 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
if(cljs.core.truth_(inst_33828)){
var statearr_33886_35301 = state_33843__$1;
(statearr_33886_35301[(1)] = (23));

} else {
var statearr_33887_35302 = state_33843__$1;
(statearr_33887_35302[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (6))){
var inst_33757 = (state_33843[(8)]);
var inst_33822 = (state_33843[(7)]);
var inst_33824 = (state_33843[(11)]);
var inst_33822__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33757) : topic_fn.call(null,inst_33757));
var inst_33823 = cljs.core.deref(mults);
var inst_33824__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33823,inst_33822__$1);
var state_33843__$1 = (function (){var statearr_33889 = state_33843;
(statearr_33889[(7)] = inst_33822__$1);

(statearr_33889[(11)] = inst_33824__$1);

return statearr_33889;
})();
if(cljs.core.truth_(inst_33824__$1)){
var statearr_33890_35305 = state_33843__$1;
(statearr_33890_35305[(1)] = (19));

} else {
var statearr_33891_35306 = state_33843__$1;
(statearr_33891_35306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (25))){
var inst_33833 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33892_35307 = state_33843__$1;
(statearr_33892_35307[(2)] = inst_33833);

(statearr_33892_35307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (17))){
var inst_33790 = (state_33843[(10)]);
var inst_33806 = cljs.core.first(inst_33790);
var inst_33808 = cljs.core.async.muxch_STAR_(inst_33806);
var inst_33809 = cljs.core.async.close_BANG_(inst_33808);
var inst_33810 = cljs.core.next(inst_33790);
var inst_33770 = inst_33810;
var inst_33771 = null;
var inst_33772 = (0);
var inst_33773 = (0);
var state_33843__$1 = (function (){var statearr_33896 = state_33843;
(statearr_33896[(12)] = inst_33809);

(statearr_33896[(13)] = inst_33770);

(statearr_33896[(14)] = inst_33771);

(statearr_33896[(15)] = inst_33772);

(statearr_33896[(16)] = inst_33773);

return statearr_33896;
})();
var statearr_33899_35312 = state_33843__$1;
(statearr_33899_35312[(2)] = null);

(statearr_33899_35312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (3))){
var inst_33841 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33843__$1,inst_33841);
} else {
if((state_val_33844 === (12))){
var inst_33818 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33901_35313 = state_33843__$1;
(statearr_33901_35313[(2)] = inst_33818);

(statearr_33901_35313[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (2))){
var state_33843__$1 = state_33843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33843__$1,(4),ch);
} else {
if((state_val_33844 === (23))){
var state_33843__$1 = state_33843;
var statearr_33902_35316 = state_33843__$1;
(statearr_33902_35316[(2)] = null);

(statearr_33902_35316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (19))){
var inst_33824 = (state_33843[(11)]);
var inst_33757 = (state_33843[(8)]);
var inst_33826 = cljs.core.async.muxch_STAR_(inst_33824);
var state_33843__$1 = state_33843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33843__$1,(22),inst_33826,inst_33757);
} else {
if((state_val_33844 === (11))){
var inst_33770 = (state_33843[(13)]);
var inst_33790 = (state_33843[(10)]);
var inst_33790__$1 = cljs.core.seq(inst_33770);
var state_33843__$1 = (function (){var statearr_33909 = state_33843;
(statearr_33909[(10)] = inst_33790__$1);

return statearr_33909;
})();
if(inst_33790__$1){
var statearr_33910_35320 = state_33843__$1;
(statearr_33910_35320[(1)] = (13));

} else {
var statearr_33911_35321 = state_33843__$1;
(statearr_33911_35321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (9))){
var inst_33820 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33913_35324 = state_33843__$1;
(statearr_33913_35324[(2)] = inst_33820);

(statearr_33913_35324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (5))){
var inst_33767 = cljs.core.deref(mults);
var inst_33768 = cljs.core.vals(inst_33767);
var inst_33769 = cljs.core.seq(inst_33768);
var inst_33770 = inst_33769;
var inst_33771 = null;
var inst_33772 = (0);
var inst_33773 = (0);
var state_33843__$1 = (function (){var statearr_33915 = state_33843;
(statearr_33915[(13)] = inst_33770);

(statearr_33915[(14)] = inst_33771);

(statearr_33915[(15)] = inst_33772);

(statearr_33915[(16)] = inst_33773);

return statearr_33915;
})();
var statearr_33916_35327 = state_33843__$1;
(statearr_33916_35327[(2)] = null);

(statearr_33916_35327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (14))){
var state_33843__$1 = state_33843;
var statearr_33921_35328 = state_33843__$1;
(statearr_33921_35328[(2)] = null);

(statearr_33921_35328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (16))){
var inst_33790 = (state_33843[(10)]);
var inst_33795 = cljs.core.chunk_first(inst_33790);
var inst_33797 = cljs.core.chunk_rest(inst_33790);
var inst_33798 = cljs.core.count(inst_33795);
var inst_33770 = inst_33797;
var inst_33771 = inst_33795;
var inst_33772 = inst_33798;
var inst_33773 = (0);
var state_33843__$1 = (function (){var statearr_33923 = state_33843;
(statearr_33923[(13)] = inst_33770);

(statearr_33923[(14)] = inst_33771);

(statearr_33923[(15)] = inst_33772);

(statearr_33923[(16)] = inst_33773);

return statearr_33923;
})();
var statearr_33924_35330 = state_33843__$1;
(statearr_33924_35330[(2)] = null);

(statearr_33924_35330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (10))){
var inst_33771 = (state_33843[(14)]);
var inst_33773 = (state_33843[(16)]);
var inst_33770 = (state_33843[(13)]);
var inst_33772 = (state_33843[(15)]);
var inst_33782 = cljs.core._nth(inst_33771,inst_33773);
var inst_33785 = cljs.core.async.muxch_STAR_(inst_33782);
var inst_33786 = cljs.core.async.close_BANG_(inst_33785);
var inst_33787 = (inst_33773 + (1));
var tmp33917 = inst_33770;
var tmp33918 = inst_33772;
var tmp33919 = inst_33771;
var inst_33770__$1 = tmp33917;
var inst_33771__$1 = tmp33919;
var inst_33772__$1 = tmp33918;
var inst_33773__$1 = inst_33787;
var state_33843__$1 = (function (){var statearr_33925 = state_33843;
(statearr_33925[(17)] = inst_33786);

(statearr_33925[(13)] = inst_33770__$1);

(statearr_33925[(14)] = inst_33771__$1);

(statearr_33925[(15)] = inst_33772__$1);

(statearr_33925[(16)] = inst_33773__$1);

return statearr_33925;
})();
var statearr_33931_35341 = state_33843__$1;
(statearr_33931_35341[(2)] = null);

(statearr_33931_35341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (18))){
var inst_33813 = (state_33843[(2)]);
var state_33843__$1 = state_33843;
var statearr_33934_35342 = state_33843__$1;
(statearr_33934_35342[(2)] = inst_33813);

(statearr_33934_35342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33844 === (8))){
var inst_33773 = (state_33843[(16)]);
var inst_33772 = (state_33843[(15)]);
var inst_33775 = (inst_33773 < inst_33772);
var inst_33776 = inst_33775;
var state_33843__$1 = state_33843;
if(cljs.core.truth_(inst_33776)){
var statearr_33936_35347 = state_33843__$1;
(statearr_33936_35347[(1)] = (10));

} else {
var statearr_33940_35349 = state_33843__$1;
(statearr_33940_35349[(1)] = (11));

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
var cljs$core$async$state_machine__32400__auto__ = null;
var cljs$core$async$state_machine__32400__auto____0 = (function (){
var statearr_33945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33945[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_33945[(1)] = (1));

return statearr_33945;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_33843){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33843);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33950){var ex__32403__auto__ = e33950;
var statearr_33951_35351 = state_33843;
(statearr_33951_35351[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33843[(4)]))){
var statearr_33955_35352 = state_33843;
(statearr_33955_35352[(1)] = cljs.core.first((state_33843[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35353 = state_33843;
state_33843 = G__35353;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_33843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_33843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_33957 = f__32475__auto__();
(statearr_33957[(6)] = c__32474__auto___35288);

return statearr_33957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
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
var G__33960 = arguments.length;
switch (G__33960) {
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
var G__33966 = arguments.length;
switch (G__33966) {
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
var G__33972 = arguments.length;
switch (G__33972) {
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
var c__32474__auto___35363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_34028){
var state_val_34029 = (state_34028[(1)]);
if((state_val_34029 === (7))){
var state_34028__$1 = state_34028;
var statearr_34030_35366 = state_34028__$1;
(statearr_34030_35366[(2)] = null);

(statearr_34030_35366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (1))){
var state_34028__$1 = state_34028;
var statearr_34031_35367 = state_34028__$1;
(statearr_34031_35367[(2)] = null);

(statearr_34031_35367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (4))){
var inst_33982 = (state_34028[(7)]);
var inst_33981 = (state_34028[(8)]);
var inst_33984 = (inst_33982 < inst_33981);
var state_34028__$1 = state_34028;
if(cljs.core.truth_(inst_33984)){
var statearr_34033_35370 = state_34028__$1;
(statearr_34033_35370[(1)] = (6));

} else {
var statearr_34034_35371 = state_34028__$1;
(statearr_34034_35371[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (15))){
var inst_34011 = (state_34028[(9)]);
var inst_34016 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34011);
var state_34028__$1 = state_34028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34028__$1,(17),out,inst_34016);
} else {
if((state_val_34029 === (13))){
var inst_34011 = (state_34028[(9)]);
var inst_34011__$1 = (state_34028[(2)]);
var inst_34012 = cljs.core.some(cljs.core.nil_QMARK_,inst_34011__$1);
var state_34028__$1 = (function (){var statearr_34039 = state_34028;
(statearr_34039[(9)] = inst_34011__$1);

return statearr_34039;
})();
if(cljs.core.truth_(inst_34012)){
var statearr_34040_35374 = state_34028__$1;
(statearr_34040_35374[(1)] = (14));

} else {
var statearr_34041_35375 = state_34028__$1;
(statearr_34041_35375[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (6))){
var state_34028__$1 = state_34028;
var statearr_34045_35376 = state_34028__$1;
(statearr_34045_35376[(2)] = null);

(statearr_34045_35376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (17))){
var inst_34018 = (state_34028[(2)]);
var state_34028__$1 = (function (){var statearr_34050 = state_34028;
(statearr_34050[(10)] = inst_34018);

return statearr_34050;
})();
var statearr_34051_35379 = state_34028__$1;
(statearr_34051_35379[(2)] = null);

(statearr_34051_35379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (3))){
var inst_34023 = (state_34028[(2)]);
var state_34028__$1 = state_34028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34028__$1,inst_34023);
} else {
if((state_val_34029 === (12))){
var _ = (function (){var statearr_34052 = state_34028;
(statearr_34052[(4)] = cljs.core.rest((state_34028[(4)])));

return statearr_34052;
})();
var state_34028__$1 = state_34028;
var ex34048 = (state_34028__$1[(2)]);
var statearr_34053_35381 = state_34028__$1;
(statearr_34053_35381[(5)] = ex34048);


if((ex34048 instanceof Object)){
var statearr_34054_35382 = state_34028__$1;
(statearr_34054_35382[(1)] = (11));

(statearr_34054_35382[(5)] = null);

} else {
throw ex34048;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (2))){
var inst_33980 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33981 = cnt;
var inst_33982 = (0);
var state_34028__$1 = (function (){var statearr_34055 = state_34028;
(statearr_34055[(11)] = inst_33980);

(statearr_34055[(8)] = inst_33981);

(statearr_34055[(7)] = inst_33982);

return statearr_34055;
})();
var statearr_34057_35383 = state_34028__$1;
(statearr_34057_35383[(2)] = null);

(statearr_34057_35383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (11))){
var inst_33990 = (state_34028[(2)]);
var inst_33991 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34028__$1 = (function (){var statearr_34064 = state_34028;
(statearr_34064[(12)] = inst_33990);

return statearr_34064;
})();
var statearr_34065_35385 = state_34028__$1;
(statearr_34065_35385[(2)] = inst_33991);

(statearr_34065_35385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (9))){
var inst_33982 = (state_34028[(7)]);
var _ = (function (){var statearr_34066 = state_34028;
(statearr_34066[(4)] = cljs.core.cons((12),(state_34028[(4)])));

return statearr_34066;
})();
var inst_33997 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33982) : chs__$1.call(null,inst_33982));
var inst_33998 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33982) : done.call(null,inst_33982));
var inst_33999 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33997,inst_33998);
var ___$1 = (function (){var statearr_34067 = state_34028;
(statearr_34067[(4)] = cljs.core.rest((state_34028[(4)])));

return statearr_34067;
})();
var state_34028__$1 = state_34028;
var statearr_34068_35391 = state_34028__$1;
(statearr_34068_35391[(2)] = inst_33999);

(statearr_34068_35391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (5))){
var inst_34009 = (state_34028[(2)]);
var state_34028__$1 = (function (){var statearr_34069 = state_34028;
(statearr_34069[(13)] = inst_34009);

return statearr_34069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34028__$1,(13),dchan);
} else {
if((state_val_34029 === (14))){
var inst_34014 = cljs.core.async.close_BANG_(out);
var state_34028__$1 = state_34028;
var statearr_34071_35394 = state_34028__$1;
(statearr_34071_35394[(2)] = inst_34014);

(statearr_34071_35394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (16))){
var inst_34021 = (state_34028[(2)]);
var state_34028__$1 = state_34028;
var statearr_34072_35395 = state_34028__$1;
(statearr_34072_35395[(2)] = inst_34021);

(statearr_34072_35395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (10))){
var inst_33982 = (state_34028[(7)]);
var inst_34002 = (state_34028[(2)]);
var inst_34003 = (inst_33982 + (1));
var inst_33982__$1 = inst_34003;
var state_34028__$1 = (function (){var statearr_34073 = state_34028;
(statearr_34073[(14)] = inst_34002);

(statearr_34073[(7)] = inst_33982__$1);

return statearr_34073;
})();
var statearr_34074_35398 = state_34028__$1;
(statearr_34074_35398[(2)] = null);

(statearr_34074_35398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (8))){
var inst_34007 = (state_34028[(2)]);
var state_34028__$1 = state_34028;
var statearr_34075_35399 = state_34028__$1;
(statearr_34075_35399[(2)] = inst_34007);

(statearr_34075_35399[(1)] = (5));


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
var cljs$core$async$state_machine__32400__auto__ = null;
var cljs$core$async$state_machine__32400__auto____0 = (function (){
var statearr_34078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34078[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34078[(1)] = (1));

return statearr_34078;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34028){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34028);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34079){var ex__32403__auto__ = e34079;
var statearr_34080_35405 = state_34028;
(statearr_34080_35405[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34028[(4)]))){
var statearr_34081_35407 = state_34028;
(statearr_34081_35407[(1)] = cljs.core.first((state_34028[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35409 = state_34028;
state_34028 = G__35409;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_34085 = f__32475__auto__();
(statearr_34085[(6)] = c__32474__auto___35363);

return statearr_34085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
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
var G__34091 = arguments.length;
switch (G__34091) {
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
var c__32474__auto___35417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_34125){
var state_val_34126 = (state_34125[(1)]);
if((state_val_34126 === (7))){
var inst_34104 = (state_34125[(7)]);
var inst_34105 = (state_34125[(8)]);
var inst_34104__$1 = (state_34125[(2)]);
var inst_34105__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34104__$1,(0),null);
var inst_34106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34104__$1,(1),null);
var inst_34107 = (inst_34105__$1 == null);
var state_34125__$1 = (function (){var statearr_34129 = state_34125;
(statearr_34129[(7)] = inst_34104__$1);

(statearr_34129[(8)] = inst_34105__$1);

(statearr_34129[(9)] = inst_34106);

return statearr_34129;
})();
if(cljs.core.truth_(inst_34107)){
var statearr_34130_35420 = state_34125__$1;
(statearr_34130_35420[(1)] = (8));

} else {
var statearr_34131_35421 = state_34125__$1;
(statearr_34131_35421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (1))){
var inst_34093 = cljs.core.vec(chs);
var inst_34094 = inst_34093;
var state_34125__$1 = (function (){var statearr_34132 = state_34125;
(statearr_34132[(10)] = inst_34094);

return statearr_34132;
})();
var statearr_34133_35424 = state_34125__$1;
(statearr_34133_35424[(2)] = null);

(statearr_34133_35424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (4))){
var inst_34094 = (state_34125[(10)]);
var state_34125__$1 = state_34125;
return cljs.core.async.ioc_alts_BANG_(state_34125__$1,(7),inst_34094);
} else {
if((state_val_34126 === (6))){
var inst_34121 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34136_35425 = state_34125__$1;
(statearr_34136_35425[(2)] = inst_34121);

(statearr_34136_35425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (3))){
var inst_34123 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34125__$1,inst_34123);
} else {
if((state_val_34126 === (2))){
var inst_34094 = (state_34125[(10)]);
var inst_34096 = cljs.core.count(inst_34094);
var inst_34097 = (inst_34096 > (0));
var state_34125__$1 = state_34125;
if(cljs.core.truth_(inst_34097)){
var statearr_34138_35426 = state_34125__$1;
(statearr_34138_35426[(1)] = (4));

} else {
var statearr_34139_35427 = state_34125__$1;
(statearr_34139_35427[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (11))){
var inst_34094 = (state_34125[(10)]);
var inst_34114 = (state_34125[(2)]);
var tmp34137 = inst_34094;
var inst_34094__$1 = tmp34137;
var state_34125__$1 = (function (){var statearr_34141 = state_34125;
(statearr_34141[(11)] = inst_34114);

(statearr_34141[(10)] = inst_34094__$1);

return statearr_34141;
})();
var statearr_34142_35428 = state_34125__$1;
(statearr_34142_35428[(2)] = null);

(statearr_34142_35428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (9))){
var inst_34105 = (state_34125[(8)]);
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34125__$1,(11),out,inst_34105);
} else {
if((state_val_34126 === (5))){
var inst_34119 = cljs.core.async.close_BANG_(out);
var state_34125__$1 = state_34125;
var statearr_34144_35431 = state_34125__$1;
(statearr_34144_35431[(2)] = inst_34119);

(statearr_34144_35431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (10))){
var inst_34117 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34145_35432 = state_34125__$1;
(statearr_34145_35432[(2)] = inst_34117);

(statearr_34145_35432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (8))){
var inst_34094 = (state_34125[(10)]);
var inst_34104 = (state_34125[(7)]);
var inst_34105 = (state_34125[(8)]);
var inst_34106 = (state_34125[(9)]);
var inst_34109 = (function (){var cs = inst_34094;
var vec__34099 = inst_34104;
var v = inst_34105;
var c = inst_34106;
return (function (p1__34089_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34089_SHARP_);
});
})();
var inst_34110 = cljs.core.filterv(inst_34109,inst_34094);
var inst_34094__$1 = inst_34110;
var state_34125__$1 = (function (){var statearr_34146 = state_34125;
(statearr_34146[(10)] = inst_34094__$1);

return statearr_34146;
})();
var statearr_34147_35433 = state_34125__$1;
(statearr_34147_35433[(2)] = null);

(statearr_34147_35433[(1)] = (2));


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
var cljs$core$async$state_machine__32400__auto__ = null;
var cljs$core$async$state_machine__32400__auto____0 = (function (){
var statearr_34149 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34149[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34149[(1)] = (1));

return statearr_34149;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34125){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34125);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34152){var ex__32403__auto__ = e34152;
var statearr_34154_35434 = state_34125;
(statearr_34154_35434[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34125[(4)]))){
var statearr_34156_35435 = state_34125;
(statearr_34156_35435[(1)] = cljs.core.first((state_34125[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35437 = state_34125;
state_34125 = G__35437;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_34166 = f__32475__auto__();
(statearr_34166[(6)] = c__32474__auto___35417);

return statearr_34166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
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
var G__34168 = arguments.length;
switch (G__34168) {
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
var c__32474__auto___35440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_34194){
var state_val_34195 = (state_34194[(1)]);
if((state_val_34195 === (7))){
var inst_34175 = (state_34194[(7)]);
var inst_34175__$1 = (state_34194[(2)]);
var inst_34176 = (inst_34175__$1 == null);
var inst_34177 = cljs.core.not(inst_34176);
var state_34194__$1 = (function (){var statearr_34198 = state_34194;
(statearr_34198[(7)] = inst_34175__$1);

return statearr_34198;
})();
if(inst_34177){
var statearr_34199_35441 = state_34194__$1;
(statearr_34199_35441[(1)] = (8));

} else {
var statearr_34200_35442 = state_34194__$1;
(statearr_34200_35442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34195 === (1))){
var inst_34170 = (0);
var state_34194__$1 = (function (){var statearr_34201 = state_34194;
(statearr_34201[(8)] = inst_34170);

return statearr_34201;
})();
var statearr_34204_35443 = state_34194__$1;
(statearr_34204_35443[(2)] = null);

(statearr_34204_35443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34195 === (4))){
var state_34194__$1 = state_34194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34194__$1,(7),ch);
} else {
if((state_val_34195 === (6))){
var inst_34189 = (state_34194[(2)]);
var state_34194__$1 = state_34194;
var statearr_34205_35444 = state_34194__$1;
(statearr_34205_35444[(2)] = inst_34189);

(statearr_34205_35444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34195 === (3))){
var inst_34191 = (state_34194[(2)]);
var inst_34192 = cljs.core.async.close_BANG_(out);
var state_34194__$1 = (function (){var statearr_34208 = state_34194;
(statearr_34208[(9)] = inst_34191);

return statearr_34208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34194__$1,inst_34192);
} else {
if((state_val_34195 === (2))){
var inst_34170 = (state_34194[(8)]);
var inst_34172 = (inst_34170 < n);
var state_34194__$1 = state_34194;
if(cljs.core.truth_(inst_34172)){
var statearr_34209_35446 = state_34194__$1;
(statearr_34209_35446[(1)] = (4));

} else {
var statearr_34210_35447 = state_34194__$1;
(statearr_34210_35447[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34195 === (11))){
var inst_34170 = (state_34194[(8)]);
var inst_34181 = (state_34194[(2)]);
var inst_34182 = (inst_34170 + (1));
var inst_34170__$1 = inst_34182;
var state_34194__$1 = (function (){var statearr_34214 = state_34194;
(statearr_34214[(10)] = inst_34181);

(statearr_34214[(8)] = inst_34170__$1);

return statearr_34214;
})();
var statearr_34216_35448 = state_34194__$1;
(statearr_34216_35448[(2)] = null);

(statearr_34216_35448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34195 === (9))){
var state_34194__$1 = state_34194;
var statearr_34218_35449 = state_34194__$1;
(statearr_34218_35449[(2)] = null);

(statearr_34218_35449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34195 === (5))){
var state_34194__$1 = state_34194;
var statearr_34221_35450 = state_34194__$1;
(statearr_34221_35450[(2)] = null);

(statearr_34221_35450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34195 === (10))){
var inst_34186 = (state_34194[(2)]);
var state_34194__$1 = state_34194;
var statearr_34223_35451 = state_34194__$1;
(statearr_34223_35451[(2)] = inst_34186);

(statearr_34223_35451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34195 === (8))){
var inst_34175 = (state_34194[(7)]);
var state_34194__$1 = state_34194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34194__$1,(11),out,inst_34175);
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
var cljs$core$async$state_machine__32400__auto__ = null;
var cljs$core$async$state_machine__32400__auto____0 = (function (){
var statearr_34237 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34237[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34237[(1)] = (1));

return statearr_34237;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34194){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34194);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34238){var ex__32403__auto__ = e34238;
var statearr_34239_35453 = state_34194;
(statearr_34239_35453[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34194[(4)]))){
var statearr_34240_35454 = state_34194;
(statearr_34240_35454[(1)] = cljs.core.first((state_34194[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35456 = state_34194;
state_34194 = G__35456;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_34241 = f__32475__auto__();
(statearr_34241[(6)] = c__32474__auto___35440);

return statearr_34241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
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
cljs.core.async.t_cljs$core$async34249 = (function (f,ch,meta34245,_,fn1,meta34250){
this.f = f;
this.ch = ch;
this.meta34245 = meta34245;
this._ = _;
this.fn1 = fn1;
this.meta34250 = meta34250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34251,meta34250__$1){
var self__ = this;
var _34251__$1 = this;
return (new cljs.core.async.t_cljs$core$async34249(self__.f,self__.ch,self__.meta34245,self__._,self__.fn1,meta34250__$1));
}));

(cljs.core.async.t_cljs$core$async34249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34251){
var self__ = this;
var _34251__$1 = this;
return self__.meta34250;
}));

(cljs.core.async.t_cljs$core$async34249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34249.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34242_SHARP_){
var G__34254 = (((p1__34242_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34242_SHARP_) : self__.f.call(null,p1__34242_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34254) : f1.call(null,G__34254));
});
}));

(cljs.core.async.t_cljs$core$async34249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34245","meta34245",457551535,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34244","cljs.core.async/t_cljs$core$async34244",1977957051,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34250","meta34250",-1957357173,null)], null);
}));

(cljs.core.async.t_cljs$core$async34249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34249");

(cljs.core.async.t_cljs$core$async34249.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34249.
 */
cljs.core.async.__GT_t_cljs$core$async34249 = (function cljs$core$async$__GT_t_cljs$core$async34249(f,ch,meta34245,_,fn1,meta34250){
return (new cljs.core.async.t_cljs$core$async34249(f,ch,meta34245,_,fn1,meta34250));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34244 = (function (f,ch,meta34245){
this.f = f;
this.ch = ch;
this.meta34245 = meta34245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34246,meta34245__$1){
var self__ = this;
var _34246__$1 = this;
return (new cljs.core.async.t_cljs$core$async34244(self__.f,self__.ch,meta34245__$1));
}));

(cljs.core.async.t_cljs$core$async34244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34246){
var self__ = this;
var _34246__$1 = this;
return self__.meta34245;
}));

(cljs.core.async.t_cljs$core$async34244.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34244.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34244.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34249(self__.f,self__.ch,self__.meta34245,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34255 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34255) : self__.f.call(null,G__34255));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34244.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34245","meta34245",457551535,null)], null);
}));

(cljs.core.async.t_cljs$core$async34244.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34244");

(cljs.core.async.t_cljs$core$async34244.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34244");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34244.
 */
cljs.core.async.__GT_t_cljs$core$async34244 = (function cljs$core$async$__GT_t_cljs$core$async34244(f,ch,meta34245){
return (new cljs.core.async.t_cljs$core$async34244(f,ch,meta34245));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34244(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34256 = (function (f,ch,meta34257){
this.f = f;
this.ch = ch;
this.meta34257 = meta34257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34258,meta34257__$1){
var self__ = this;
var _34258__$1 = this;
return (new cljs.core.async.t_cljs$core$async34256(self__.f,self__.ch,meta34257__$1));
}));

(cljs.core.async.t_cljs$core$async34256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34258){
var self__ = this;
var _34258__$1 = this;
return self__.meta34257;
}));

(cljs.core.async.t_cljs$core$async34256.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34256.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34256.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34257","meta34257",512520735,null)], null);
}));

(cljs.core.async.t_cljs$core$async34256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34256");

(cljs.core.async.t_cljs$core$async34256.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34256.
 */
cljs.core.async.__GT_t_cljs$core$async34256 = (function cljs$core$async$__GT_t_cljs$core$async34256(f,ch,meta34257){
return (new cljs.core.async.t_cljs$core$async34256(f,ch,meta34257));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34256(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34265 = (function (p,ch,meta34266){
this.p = p;
this.ch = ch;
this.meta34266 = meta34266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34267,meta34266__$1){
var self__ = this;
var _34267__$1 = this;
return (new cljs.core.async.t_cljs$core$async34265(self__.p,self__.ch,meta34266__$1));
}));

(cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34267){
var self__ = this;
var _34267__$1 = this;
return self__.meta34266;
}));

(cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34266","meta34266",843599840,null)], null);
}));

(cljs.core.async.t_cljs$core$async34265.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34265");

(cljs.core.async.t_cljs$core$async34265.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34265");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34265.
 */
cljs.core.async.__GT_t_cljs$core$async34265 = (function cljs$core$async$__GT_t_cljs$core$async34265(p,ch,meta34266){
return (new cljs.core.async.t_cljs$core$async34265(p,ch,meta34266));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34265(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34296 = arguments.length;
switch (G__34296) {
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
var c__32474__auto___35463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_34328){
var state_val_34329 = (state_34328[(1)]);
if((state_val_34329 === (7))){
var inst_34323 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34330_35464 = state_34328__$1;
(statearr_34330_35464[(2)] = inst_34323);

(statearr_34330_35464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (1))){
var state_34328__$1 = state_34328;
var statearr_34331_35467 = state_34328__$1;
(statearr_34331_35467[(2)] = null);

(statearr_34331_35467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (4))){
var inst_34307 = (state_34328[(7)]);
var inst_34307__$1 = (state_34328[(2)]);
var inst_34309 = (inst_34307__$1 == null);
var state_34328__$1 = (function (){var statearr_34333 = state_34328;
(statearr_34333[(7)] = inst_34307__$1);

return statearr_34333;
})();
if(cljs.core.truth_(inst_34309)){
var statearr_34334_35470 = state_34328__$1;
(statearr_34334_35470[(1)] = (5));

} else {
var statearr_34335_35471 = state_34328__$1;
(statearr_34335_35471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (6))){
var inst_34307 = (state_34328[(7)]);
var inst_34314 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34307) : p.call(null,inst_34307));
var state_34328__$1 = state_34328;
if(cljs.core.truth_(inst_34314)){
var statearr_34340_35472 = state_34328__$1;
(statearr_34340_35472[(1)] = (8));

} else {
var statearr_34341_35473 = state_34328__$1;
(statearr_34341_35473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (3))){
var inst_34325 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34328__$1,inst_34325);
} else {
if((state_val_34329 === (2))){
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34328__$1,(4),ch);
} else {
if((state_val_34329 === (11))){
var inst_34317 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34364_35476 = state_34328__$1;
(statearr_34364_35476[(2)] = inst_34317);

(statearr_34364_35476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (9))){
var state_34328__$1 = state_34328;
var statearr_34366_35478 = state_34328__$1;
(statearr_34366_35478[(2)] = null);

(statearr_34366_35478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (5))){
var inst_34311 = cljs.core.async.close_BANG_(out);
var state_34328__$1 = state_34328;
var statearr_34367_35479 = state_34328__$1;
(statearr_34367_35479[(2)] = inst_34311);

(statearr_34367_35479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (10))){
var inst_34320 = (state_34328[(2)]);
var state_34328__$1 = (function (){var statearr_34368 = state_34328;
(statearr_34368[(8)] = inst_34320);

return statearr_34368;
})();
var statearr_34369_35480 = state_34328__$1;
(statearr_34369_35480[(2)] = null);

(statearr_34369_35480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (8))){
var inst_34307 = (state_34328[(7)]);
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34328__$1,(11),out,inst_34307);
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
var cljs$core$async$state_machine__32400__auto__ = null;
var cljs$core$async$state_machine__32400__auto____0 = (function (){
var statearr_34370 = [null,null,null,null,null,null,null,null,null];
(statearr_34370[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34370[(1)] = (1));

return statearr_34370;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34328){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34328);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34371){var ex__32403__auto__ = e34371;
var statearr_34372_35481 = state_34328;
(statearr_34372_35481[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34328[(4)]))){
var statearr_34373_35482 = state_34328;
(statearr_34373_35482[(1)] = cljs.core.first((state_34328[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35483 = state_34328;
state_34328 = G__35483;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_34374 = f__32475__auto__();
(statearr_34374[(6)] = c__32474__auto___35463);

return statearr_34374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34376 = arguments.length;
switch (G__34376) {
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
var c__32474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_34443){
var state_val_34444 = (state_34443[(1)]);
if((state_val_34444 === (7))){
var inst_34439 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34445_35486 = state_34443__$1;
(statearr_34445_35486[(2)] = inst_34439);

(statearr_34445_35486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (20))){
var inst_34408 = (state_34443[(7)]);
var inst_34420 = (state_34443[(2)]);
var inst_34421 = cljs.core.next(inst_34408);
var inst_34393 = inst_34421;
var inst_34394 = null;
var inst_34395 = (0);
var inst_34396 = (0);
var state_34443__$1 = (function (){var statearr_34446 = state_34443;
(statearr_34446[(8)] = inst_34420);

(statearr_34446[(9)] = inst_34393);

(statearr_34446[(10)] = inst_34394);

(statearr_34446[(11)] = inst_34395);

(statearr_34446[(12)] = inst_34396);

return statearr_34446;
})();
var statearr_34447_35488 = state_34443__$1;
(statearr_34447_35488[(2)] = null);

(statearr_34447_35488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (1))){
var state_34443__$1 = state_34443;
var statearr_34448_35489 = state_34443__$1;
(statearr_34448_35489[(2)] = null);

(statearr_34448_35489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (4))){
var inst_34381 = (state_34443[(13)]);
var inst_34381__$1 = (state_34443[(2)]);
var inst_34382 = (inst_34381__$1 == null);
var state_34443__$1 = (function (){var statearr_34449 = state_34443;
(statearr_34449[(13)] = inst_34381__$1);

return statearr_34449;
})();
if(cljs.core.truth_(inst_34382)){
var statearr_34450_35490 = state_34443__$1;
(statearr_34450_35490[(1)] = (5));

} else {
var statearr_34451_35491 = state_34443__$1;
(statearr_34451_35491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (15))){
var state_34443__$1 = state_34443;
var statearr_34455_35492 = state_34443__$1;
(statearr_34455_35492[(2)] = null);

(statearr_34455_35492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (21))){
var state_34443__$1 = state_34443;
var statearr_34456_35493 = state_34443__$1;
(statearr_34456_35493[(2)] = null);

(statearr_34456_35493[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (13))){
var inst_34396 = (state_34443[(12)]);
var inst_34393 = (state_34443[(9)]);
var inst_34394 = (state_34443[(10)]);
var inst_34395 = (state_34443[(11)]);
var inst_34403 = (state_34443[(2)]);
var inst_34405 = (inst_34396 + (1));
var tmp34452 = inst_34393;
var tmp34453 = inst_34395;
var tmp34454 = inst_34394;
var inst_34393__$1 = tmp34452;
var inst_34394__$1 = tmp34454;
var inst_34395__$1 = tmp34453;
var inst_34396__$1 = inst_34405;
var state_34443__$1 = (function (){var statearr_34457 = state_34443;
(statearr_34457[(14)] = inst_34403);

(statearr_34457[(9)] = inst_34393__$1);

(statearr_34457[(10)] = inst_34394__$1);

(statearr_34457[(11)] = inst_34395__$1);

(statearr_34457[(12)] = inst_34396__$1);

return statearr_34457;
})();
var statearr_34458_35494 = state_34443__$1;
(statearr_34458_35494[(2)] = null);

(statearr_34458_35494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (22))){
var state_34443__$1 = state_34443;
var statearr_34459_35495 = state_34443__$1;
(statearr_34459_35495[(2)] = null);

(statearr_34459_35495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (6))){
var inst_34381 = (state_34443[(13)]);
var inst_34390 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34381) : f.call(null,inst_34381));
var inst_34391 = cljs.core.seq(inst_34390);
var inst_34393 = inst_34391;
var inst_34394 = null;
var inst_34395 = (0);
var inst_34396 = (0);
var state_34443__$1 = (function (){var statearr_34460 = state_34443;
(statearr_34460[(9)] = inst_34393);

(statearr_34460[(10)] = inst_34394);

(statearr_34460[(11)] = inst_34395);

(statearr_34460[(12)] = inst_34396);

return statearr_34460;
})();
var statearr_34461_35496 = state_34443__$1;
(statearr_34461_35496[(2)] = null);

(statearr_34461_35496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (17))){
var inst_34408 = (state_34443[(7)]);
var inst_34413 = cljs.core.chunk_first(inst_34408);
var inst_34414 = cljs.core.chunk_rest(inst_34408);
var inst_34415 = cljs.core.count(inst_34413);
var inst_34393 = inst_34414;
var inst_34394 = inst_34413;
var inst_34395 = inst_34415;
var inst_34396 = (0);
var state_34443__$1 = (function (){var statearr_34462 = state_34443;
(statearr_34462[(9)] = inst_34393);

(statearr_34462[(10)] = inst_34394);

(statearr_34462[(11)] = inst_34395);

(statearr_34462[(12)] = inst_34396);

return statearr_34462;
})();
var statearr_34463_35498 = state_34443__$1;
(statearr_34463_35498[(2)] = null);

(statearr_34463_35498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (3))){
var inst_34441 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34443__$1,inst_34441);
} else {
if((state_val_34444 === (12))){
var inst_34429 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34465_35501 = state_34443__$1;
(statearr_34465_35501[(2)] = inst_34429);

(statearr_34465_35501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (2))){
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34443__$1,(4),in$);
} else {
if((state_val_34444 === (23))){
var inst_34437 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34478_35502 = state_34443__$1;
(statearr_34478_35502[(2)] = inst_34437);

(statearr_34478_35502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (19))){
var inst_34424 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34479_35503 = state_34443__$1;
(statearr_34479_35503[(2)] = inst_34424);

(statearr_34479_35503[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (11))){
var inst_34393 = (state_34443[(9)]);
var inst_34408 = (state_34443[(7)]);
var inst_34408__$1 = cljs.core.seq(inst_34393);
var state_34443__$1 = (function (){var statearr_34480 = state_34443;
(statearr_34480[(7)] = inst_34408__$1);

return statearr_34480;
})();
if(inst_34408__$1){
var statearr_34481_35504 = state_34443__$1;
(statearr_34481_35504[(1)] = (14));

} else {
var statearr_34482_35505 = state_34443__$1;
(statearr_34482_35505[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (9))){
var inst_34431 = (state_34443[(2)]);
var inst_34432 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34443__$1 = (function (){var statearr_34483 = state_34443;
(statearr_34483[(15)] = inst_34431);

return statearr_34483;
})();
if(cljs.core.truth_(inst_34432)){
var statearr_34484_35506 = state_34443__$1;
(statearr_34484_35506[(1)] = (21));

} else {
var statearr_34485_35507 = state_34443__$1;
(statearr_34485_35507[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (5))){
var inst_34384 = cljs.core.async.close_BANG_(out);
var state_34443__$1 = state_34443;
var statearr_34486_35508 = state_34443__$1;
(statearr_34486_35508[(2)] = inst_34384);

(statearr_34486_35508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (14))){
var inst_34408 = (state_34443[(7)]);
var inst_34411 = cljs.core.chunked_seq_QMARK_(inst_34408);
var state_34443__$1 = state_34443;
if(inst_34411){
var statearr_34487_35509 = state_34443__$1;
(statearr_34487_35509[(1)] = (17));

} else {
var statearr_34488_35510 = state_34443__$1;
(statearr_34488_35510[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (16))){
var inst_34427 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34489_35511 = state_34443__$1;
(statearr_34489_35511[(2)] = inst_34427);

(statearr_34489_35511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (10))){
var inst_34394 = (state_34443[(10)]);
var inst_34396 = (state_34443[(12)]);
var inst_34401 = cljs.core._nth(inst_34394,inst_34396);
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34443__$1,(13),out,inst_34401);
} else {
if((state_val_34444 === (18))){
var inst_34408 = (state_34443[(7)]);
var inst_34418 = cljs.core.first(inst_34408);
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34443__$1,(20),out,inst_34418);
} else {
if((state_val_34444 === (8))){
var inst_34396 = (state_34443[(12)]);
var inst_34395 = (state_34443[(11)]);
var inst_34398 = (inst_34396 < inst_34395);
var inst_34399 = inst_34398;
var state_34443__$1 = state_34443;
if(cljs.core.truth_(inst_34399)){
var statearr_34491_35516 = state_34443__$1;
(statearr_34491_35516[(1)] = (10));

} else {
var statearr_34492_35517 = state_34443__$1;
(statearr_34492_35517[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32400__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32400__auto____0 = (function (){
var statearr_34494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34494[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32400__auto__);

(statearr_34494[(1)] = (1));

return statearr_34494;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32400__auto____1 = (function (state_34443){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34443);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34495){var ex__32403__auto__ = e34495;
var statearr_34497_35519 = state_34443;
(statearr_34497_35519[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34443[(4)]))){
var statearr_34498_35521 = state_34443;
(statearr_34498_35521[(1)] = cljs.core.first((state_34443[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35522 = state_34443;
state_34443 = G__35522;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32400__auto__ = function(state_34443){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32400__auto____1.call(this,state_34443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32400__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_34500 = f__32475__auto__();
(statearr_34500[(6)] = c__32474__auto__);

return statearr_34500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));

return c__32474__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34503 = arguments.length;
switch (G__34503) {
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
var G__34506 = arguments.length;
switch (G__34506) {
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
var G__34510 = arguments.length;
switch (G__34510) {
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
var c__32474__auto___35529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_34535){
var state_val_34536 = (state_34535[(1)]);
if((state_val_34536 === (7))){
var inst_34530 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34538_35530 = state_34535__$1;
(statearr_34538_35530[(2)] = inst_34530);

(statearr_34538_35530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (1))){
var inst_34511 = null;
var state_34535__$1 = (function (){var statearr_34540 = state_34535;
(statearr_34540[(7)] = inst_34511);

return statearr_34540;
})();
var statearr_34541_35531 = state_34535__$1;
(statearr_34541_35531[(2)] = null);

(statearr_34541_35531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (4))){
var inst_34514 = (state_34535[(8)]);
var inst_34514__$1 = (state_34535[(2)]);
var inst_34515 = (inst_34514__$1 == null);
var inst_34516 = cljs.core.not(inst_34515);
var state_34535__$1 = (function (){var statearr_34542 = state_34535;
(statearr_34542[(8)] = inst_34514__$1);

return statearr_34542;
})();
if(inst_34516){
var statearr_34543_35532 = state_34535__$1;
(statearr_34543_35532[(1)] = (5));

} else {
var statearr_34544_35533 = state_34535__$1;
(statearr_34544_35533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (6))){
var state_34535__$1 = state_34535;
var statearr_34545_35534 = state_34535__$1;
(statearr_34545_35534[(2)] = null);

(statearr_34545_35534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (3))){
var inst_34532 = (state_34535[(2)]);
var inst_34533 = cljs.core.async.close_BANG_(out);
var state_34535__$1 = (function (){var statearr_34546 = state_34535;
(statearr_34546[(9)] = inst_34532);

return statearr_34546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34535__$1,inst_34533);
} else {
if((state_val_34536 === (2))){
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34535__$1,(4),ch);
} else {
if((state_val_34536 === (11))){
var inst_34514 = (state_34535[(8)]);
var inst_34524 = (state_34535[(2)]);
var inst_34511 = inst_34514;
var state_34535__$1 = (function (){var statearr_34547 = state_34535;
(statearr_34547[(10)] = inst_34524);

(statearr_34547[(7)] = inst_34511);

return statearr_34547;
})();
var statearr_34548_35542 = state_34535__$1;
(statearr_34548_35542[(2)] = null);

(statearr_34548_35542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (9))){
var inst_34514 = (state_34535[(8)]);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34535__$1,(11),out,inst_34514);
} else {
if((state_val_34536 === (5))){
var inst_34514 = (state_34535[(8)]);
var inst_34511 = (state_34535[(7)]);
var inst_34519 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34514,inst_34511);
var state_34535__$1 = state_34535;
if(inst_34519){
var statearr_34550_35543 = state_34535__$1;
(statearr_34550_35543[(1)] = (8));

} else {
var statearr_34551_35544 = state_34535__$1;
(statearr_34551_35544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (10))){
var inst_34527 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34552_35545 = state_34535__$1;
(statearr_34552_35545[(2)] = inst_34527);

(statearr_34552_35545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (8))){
var inst_34511 = (state_34535[(7)]);
var tmp34549 = inst_34511;
var inst_34511__$1 = tmp34549;
var state_34535__$1 = (function (){var statearr_34553 = state_34535;
(statearr_34553[(7)] = inst_34511__$1);

return statearr_34553;
})();
var statearr_34554_35549 = state_34535__$1;
(statearr_34554_35549[(2)] = null);

(statearr_34554_35549[(1)] = (2));


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
var cljs$core$async$state_machine__32400__auto__ = null;
var cljs$core$async$state_machine__32400__auto____0 = (function (){
var statearr_34555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34555[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34555[(1)] = (1));

return statearr_34555;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34535){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34535);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34556){var ex__32403__auto__ = e34556;
var statearr_34557_35552 = state_34535;
(statearr_34557_35552[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34535[(4)]))){
var statearr_34558_35553 = state_34535;
(statearr_34558_35553[(1)] = cljs.core.first((state_34535[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35554 = state_34535;
state_34535 = G__35554;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_34559 = f__32475__auto__();
(statearr_34559[(6)] = c__32474__auto___35529);

return statearr_34559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34561 = arguments.length;
switch (G__34561) {
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
var c__32474__auto___35559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_34599){
var state_val_34600 = (state_34599[(1)]);
if((state_val_34600 === (7))){
var inst_34595 = (state_34599[(2)]);
var state_34599__$1 = state_34599;
var statearr_34601_35561 = state_34599__$1;
(statearr_34601_35561[(2)] = inst_34595);

(statearr_34601_35561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (1))){
var inst_34562 = (new Array(n));
var inst_34563 = inst_34562;
var inst_34564 = (0);
var state_34599__$1 = (function (){var statearr_34602 = state_34599;
(statearr_34602[(7)] = inst_34563);

(statearr_34602[(8)] = inst_34564);

return statearr_34602;
})();
var statearr_34603_35562 = state_34599__$1;
(statearr_34603_35562[(2)] = null);

(statearr_34603_35562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (4))){
var inst_34567 = (state_34599[(9)]);
var inst_34567__$1 = (state_34599[(2)]);
var inst_34568 = (inst_34567__$1 == null);
var inst_34569 = cljs.core.not(inst_34568);
var state_34599__$1 = (function (){var statearr_34604 = state_34599;
(statearr_34604[(9)] = inst_34567__$1);

return statearr_34604;
})();
if(inst_34569){
var statearr_34605_35563 = state_34599__$1;
(statearr_34605_35563[(1)] = (5));

} else {
var statearr_34606_35564 = state_34599__$1;
(statearr_34606_35564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (15))){
var inst_34589 = (state_34599[(2)]);
var state_34599__$1 = state_34599;
var statearr_34607_35565 = state_34599__$1;
(statearr_34607_35565[(2)] = inst_34589);

(statearr_34607_35565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (13))){
var state_34599__$1 = state_34599;
var statearr_34608_35566 = state_34599__$1;
(statearr_34608_35566[(2)] = null);

(statearr_34608_35566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (6))){
var inst_34564 = (state_34599[(8)]);
var inst_34585 = (inst_34564 > (0));
var state_34599__$1 = state_34599;
if(cljs.core.truth_(inst_34585)){
var statearr_34609_35568 = state_34599__$1;
(statearr_34609_35568[(1)] = (12));

} else {
var statearr_34610_35569 = state_34599__$1;
(statearr_34610_35569[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (3))){
var inst_34597 = (state_34599[(2)]);
var state_34599__$1 = state_34599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34599__$1,inst_34597);
} else {
if((state_val_34600 === (12))){
var inst_34563 = (state_34599[(7)]);
var inst_34587 = cljs.core.vec(inst_34563);
var state_34599__$1 = state_34599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34599__$1,(15),out,inst_34587);
} else {
if((state_val_34600 === (2))){
var state_34599__$1 = state_34599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34599__$1,(4),ch);
} else {
if((state_val_34600 === (11))){
var inst_34579 = (state_34599[(2)]);
var inst_34580 = (new Array(n));
var inst_34563 = inst_34580;
var inst_34564 = (0);
var state_34599__$1 = (function (){var statearr_34611 = state_34599;
(statearr_34611[(10)] = inst_34579);

(statearr_34611[(7)] = inst_34563);

(statearr_34611[(8)] = inst_34564);

return statearr_34611;
})();
var statearr_34612_35570 = state_34599__$1;
(statearr_34612_35570[(2)] = null);

(statearr_34612_35570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (9))){
var inst_34563 = (state_34599[(7)]);
var inst_34577 = cljs.core.vec(inst_34563);
var state_34599__$1 = state_34599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34599__$1,(11),out,inst_34577);
} else {
if((state_val_34600 === (5))){
var inst_34563 = (state_34599[(7)]);
var inst_34564 = (state_34599[(8)]);
var inst_34567 = (state_34599[(9)]);
var inst_34572 = (state_34599[(11)]);
var inst_34571 = (inst_34563[inst_34564] = inst_34567);
var inst_34572__$1 = (inst_34564 + (1));
var inst_34573 = (inst_34572__$1 < n);
var state_34599__$1 = (function (){var statearr_34614 = state_34599;
(statearr_34614[(12)] = inst_34571);

(statearr_34614[(11)] = inst_34572__$1);

return statearr_34614;
})();
if(cljs.core.truth_(inst_34573)){
var statearr_34615_35572 = state_34599__$1;
(statearr_34615_35572[(1)] = (8));

} else {
var statearr_34616_35573 = state_34599__$1;
(statearr_34616_35573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (14))){
var inst_34592 = (state_34599[(2)]);
var inst_34593 = cljs.core.async.close_BANG_(out);
var state_34599__$1 = (function (){var statearr_34619 = state_34599;
(statearr_34619[(13)] = inst_34592);

return statearr_34619;
})();
var statearr_34620_35574 = state_34599__$1;
(statearr_34620_35574[(2)] = inst_34593);

(statearr_34620_35574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (10))){
var inst_34583 = (state_34599[(2)]);
var state_34599__$1 = state_34599;
var statearr_34621_35576 = state_34599__$1;
(statearr_34621_35576[(2)] = inst_34583);

(statearr_34621_35576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (8))){
var inst_34563 = (state_34599[(7)]);
var inst_34572 = (state_34599[(11)]);
var tmp34618 = inst_34563;
var inst_34563__$1 = tmp34618;
var inst_34564 = inst_34572;
var state_34599__$1 = (function (){var statearr_34622 = state_34599;
(statearr_34622[(7)] = inst_34563__$1);

(statearr_34622[(8)] = inst_34564);

return statearr_34622;
})();
var statearr_34623_35577 = state_34599__$1;
(statearr_34623_35577[(2)] = null);

(statearr_34623_35577[(1)] = (2));


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
var cljs$core$async$state_machine__32400__auto__ = null;
var cljs$core$async$state_machine__32400__auto____0 = (function (){
var statearr_34624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34624[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34624[(1)] = (1));

return statearr_34624;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34599){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34599);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34625){var ex__32403__auto__ = e34625;
var statearr_34626_35578 = state_34599;
(statearr_34626_35578[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34599[(4)]))){
var statearr_34627_35579 = state_34599;
(statearr_34627_35579[(1)] = cljs.core.first((state_34599[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35580 = state_34599;
state_34599 = G__35580;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_34629 = f__32475__auto__();
(statearr_34629[(6)] = c__32474__auto___35559);

return statearr_34629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34633 = arguments.length;
switch (G__34633) {
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
var c__32474__auto___35582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32475__auto__ = (function (){var switch__32399__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34690_35585 = state_34684__$1;
(statearr_34690_35585[(2)] = inst_34680);

(statearr_34690_35585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var inst_34639 = [];
var inst_34640 = inst_34639;
var inst_34641 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34684__$1 = (function (){var statearr_34691 = state_34684;
(statearr_34691[(7)] = inst_34640);

(statearr_34691[(8)] = inst_34641);

return statearr_34691;
})();
var statearr_34692_35586 = state_34684__$1;
(statearr_34692_35586[(2)] = null);

(statearr_34692_35586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34644 = (state_34684[(9)]);
var inst_34644__$1 = (state_34684[(2)]);
var inst_34645 = (inst_34644__$1 == null);
var inst_34646 = cljs.core.not(inst_34645);
var state_34684__$1 = (function (){var statearr_34693 = state_34684;
(statearr_34693[(9)] = inst_34644__$1);

return statearr_34693;
})();
if(inst_34646){
var statearr_34694_35587 = state_34684__$1;
(statearr_34694_35587[(1)] = (5));

} else {
var statearr_34695_35588 = state_34684__$1;
(statearr_34695_35588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (15))){
var inst_34640 = (state_34684[(7)]);
var inst_34672 = cljs.core.vec(inst_34640);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34684__$1,(18),out,inst_34672);
} else {
if((state_val_34685 === (13))){
var inst_34666 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34696_35589 = state_34684__$1;
(statearr_34696_35589[(2)] = inst_34666);

(statearr_34696_35589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34640 = (state_34684[(7)]);
var inst_34669 = inst_34640.length;
var inst_34670 = (inst_34669 > (0));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34670)){
var statearr_34697_35590 = state_34684__$1;
(statearr_34697_35590[(1)] = (15));

} else {
var statearr_34698_35591 = state_34684__$1;
(statearr_34698_35591[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (17))){
var inst_34677 = (state_34684[(2)]);
var inst_34678 = cljs.core.async.close_BANG_(out);
var state_34684__$1 = (function (){var statearr_34699 = state_34684;
(statearr_34699[(10)] = inst_34677);

return statearr_34699;
})();
var statearr_34700_35592 = state_34684__$1;
(statearr_34700_35592[(2)] = inst_34678);

(statearr_34700_35592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (3))){
var inst_34682 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34684__$1,inst_34682);
} else {
if((state_val_34685 === (12))){
var inst_34640 = (state_34684[(7)]);
var inst_34659 = cljs.core.vec(inst_34640);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34684__$1,(14),out,inst_34659);
} else {
if((state_val_34685 === (2))){
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34684__$1,(4),ch);
} else {
if((state_val_34685 === (11))){
var inst_34640 = (state_34684[(7)]);
var inst_34644 = (state_34684[(9)]);
var inst_34648 = (state_34684[(11)]);
var inst_34656 = inst_34640.push(inst_34644);
var tmp34701 = inst_34640;
var inst_34640__$1 = tmp34701;
var inst_34641 = inst_34648;
var state_34684__$1 = (function (){var statearr_34702 = state_34684;
(statearr_34702[(12)] = inst_34656);

(statearr_34702[(7)] = inst_34640__$1);

(statearr_34702[(8)] = inst_34641);

return statearr_34702;
})();
var statearr_34703_35594 = state_34684__$1;
(statearr_34703_35594[(2)] = null);

(statearr_34703_35594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (9))){
var inst_34641 = (state_34684[(8)]);
var inst_34652 = cljs.core.keyword_identical_QMARK_(inst_34641,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34684__$1 = state_34684;
var statearr_34704_35595 = state_34684__$1;
(statearr_34704_35595[(2)] = inst_34652);

(statearr_34704_35595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34644 = (state_34684[(9)]);
var inst_34648 = (state_34684[(11)]);
var inst_34641 = (state_34684[(8)]);
var inst_34649 = (state_34684[(13)]);
var inst_34648__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34644) : f.call(null,inst_34644));
var inst_34649__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34648__$1,inst_34641);
var state_34684__$1 = (function (){var statearr_34705 = state_34684;
(statearr_34705[(11)] = inst_34648__$1);

(statearr_34705[(13)] = inst_34649__$1);

return statearr_34705;
})();
if(inst_34649__$1){
var statearr_34707_35596 = state_34684__$1;
(statearr_34707_35596[(1)] = (8));

} else {
var statearr_34708_35597 = state_34684__$1;
(statearr_34708_35597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34644 = (state_34684[(9)]);
var inst_34648 = (state_34684[(11)]);
var inst_34661 = (state_34684[(2)]);
var inst_34662 = [];
var inst_34663 = inst_34662.push(inst_34644);
var inst_34640 = inst_34662;
var inst_34641 = inst_34648;
var state_34684__$1 = (function (){var statearr_34712 = state_34684;
(statearr_34712[(14)] = inst_34661);

(statearr_34712[(15)] = inst_34663);

(statearr_34712[(7)] = inst_34640);

(statearr_34712[(8)] = inst_34641);

return statearr_34712;
})();
var statearr_34713_35599 = state_34684__$1;
(statearr_34713_35599[(2)] = null);

(statearr_34713_35599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (16))){
var state_34684__$1 = state_34684;
var statearr_34714_35600 = state_34684__$1;
(statearr_34714_35600[(2)] = null);

(statearr_34714_35600[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var inst_34654 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34654)){
var statearr_34715_35601 = state_34684__$1;
(statearr_34715_35601[(1)] = (11));

} else {
var statearr_34716_35602 = state_34684__$1;
(statearr_34716_35602[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (18))){
var inst_34674 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34717_35603 = state_34684__$1;
(statearr_34717_35603[(2)] = inst_34674);

(statearr_34717_35603[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34649 = (state_34684[(13)]);
var state_34684__$1 = state_34684;
var statearr_34718_35605 = state_34684__$1;
(statearr_34718_35605[(2)] = inst_34649);

(statearr_34718_35605[(1)] = (10));


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
var cljs$core$async$state_machine__32400__auto__ = null;
var cljs$core$async$state_machine__32400__auto____0 = (function (){
var statearr_34719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34719[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34719[(1)] = (1));

return statearr_34719;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34684){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34684);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34720){var ex__32403__auto__ = e34720;
var statearr_34721_35609 = state_34684;
(statearr_34721_35609[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34684[(4)]))){
var statearr_34722_35610 = state_34684;
(statearr_34722_35610[(1)] = cljs.core.first((state_34684[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35611 = state_34684;
state_34684 = G__35611;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32476__auto__ = (function (){var statearr_34723 = f__32475__auto__();
(statearr_34723[(6)] = c__32474__auto___35582);

return statearr_34723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32476__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
