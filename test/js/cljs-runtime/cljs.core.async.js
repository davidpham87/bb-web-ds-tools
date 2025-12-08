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
cljs.core.async.t_cljs$core$async32476 = (function (f,blockable,meta32477){
this.f = f;
this.blockable = blockable;
this.meta32477 = meta32477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32478,meta32477__$1){
var self__ = this;
var _32478__$1 = this;
return (new cljs.core.async.t_cljs$core$async32476(self__.f,self__.blockable,meta32477__$1));
}));

(cljs.core.async.t_cljs$core$async32476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32478){
var self__ = this;
var _32478__$1 = this;
return self__.meta32477;
}));

(cljs.core.async.t_cljs$core$async32476.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32477","meta32477",-1391122114,null)], null);
}));

(cljs.core.async.t_cljs$core$async32476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32476");

(cljs.core.async.t_cljs$core$async32476.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32476.
 */
cljs.core.async.__GT_t_cljs$core$async32476 = (function cljs$core$async$__GT_t_cljs$core$async32476(f,blockable,meta32477){
return (new cljs.core.async.t_cljs$core$async32476(f,blockable,meta32477));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32475 = arguments.length;
switch (G__32475) {
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
return (new cljs.core.async.t_cljs$core$async32476(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32481 = arguments.length;
switch (G__32481) {
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
var G__32483 = arguments.length;
switch (G__32483) {
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
var G__32485 = arguments.length;
switch (G__32485) {
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
var val_33908 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33908) : fn1.call(null,val_33908));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33908) : fn1.call(null,val_33908));
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
var G__32487 = arguments.length;
switch (G__32487) {
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
var n__5616__auto___33910 = n;
var x_33911 = (0);
while(true){
if((x_33911 < n__5616__auto___33910)){
(a[x_33911] = x_33911);

var G__33912 = (x_33911 + (1));
x_33911 = G__33912;
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
cljs.core.async.t_cljs$core$async32488 = (function (flag,meta32489){
this.flag = flag;
this.meta32489 = meta32489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32490,meta32489__$1){
var self__ = this;
var _32490__$1 = this;
return (new cljs.core.async.t_cljs$core$async32488(self__.flag,meta32489__$1));
}));

(cljs.core.async.t_cljs$core$async32488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32490){
var self__ = this;
var _32490__$1 = this;
return self__.meta32489;
}));

(cljs.core.async.t_cljs$core$async32488.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32489","meta32489",1544755509,null)], null);
}));

(cljs.core.async.t_cljs$core$async32488.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32488");

(cljs.core.async.t_cljs$core$async32488.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32488");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32488.
 */
cljs.core.async.__GT_t_cljs$core$async32488 = (function cljs$core$async$__GT_t_cljs$core$async32488(flag,meta32489){
return (new cljs.core.async.t_cljs$core$async32488(flag,meta32489));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32488(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32491 = (function (flag,cb,meta32492){
this.flag = flag;
this.cb = cb;
this.meta32492 = meta32492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32493,meta32492__$1){
var self__ = this;
var _32493__$1 = this;
return (new cljs.core.async.t_cljs$core$async32491(self__.flag,self__.cb,meta32492__$1));
}));

(cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32493){
var self__ = this;
var _32493__$1 = this;
return self__.meta32492;
}));

(cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32492","meta32492",-268644252,null)], null);
}));

(cljs.core.async.t_cljs$core$async32491.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32491");

(cljs.core.async.t_cljs$core$async32491.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32491");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32491.
 */
cljs.core.async.__GT_t_cljs$core$async32491 = (function cljs$core$async$__GT_t_cljs$core$async32491(flag,cb,meta32492){
return (new cljs.core.async.t_cljs$core$async32491(flag,cb,meta32492));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32491(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_33916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_33916)){
if((!(((port_33916.cljs$core$IFn$_invoke$arity$1 ? port_33916.cljs$core$IFn$_invoke$arity$1((1)) : port_33916.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__33917 = (i + (1));
i = G__33917;
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
return (function (p1__32494_SHARP_){
var G__32496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32494_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32496) : fret.call(null,G__32496));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__32495_SHARP_){
var G__32497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32495_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32497) : fret.call(null,G__32497));
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
var G__33918 = (i + (1));
i = G__33918;
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
var len__5749__auto___33919 = arguments.length;
var i__5750__auto___33920 = (0);
while(true){
if((i__5750__auto___33920 < len__5749__auto___33919)){
args__5755__auto__.push((arguments[i__5750__auto___33920]));

var G__33921 = (i__5750__auto___33920 + (1));
i__5750__auto___33920 = G__33921;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32500){
var map__32501 = p__32500;
var map__32501__$1 = cljs.core.__destructure_map(map__32501);
var opts = map__32501__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32498){
var G__32499 = cljs.core.first(seq32498);
var seq32498__$1 = cljs.core.next(seq32498);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32499,seq32498__$1);
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
var G__32503 = arguments.length;
switch (G__32503) {
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
var c__32417__auto___33923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_32527){
var state_val_32528 = (state_32527[(1)]);
if((state_val_32528 === (7))){
var inst_32523 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
var statearr_32529_33924 = state_32527__$1;
(statearr_32529_33924[(2)] = inst_32523);

(statearr_32529_33924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (1))){
var state_32527__$1 = state_32527;
var statearr_32530_33925 = state_32527__$1;
(statearr_32530_33925[(2)] = null);

(statearr_32530_33925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (4))){
var inst_32506 = (state_32527[(7)]);
var inst_32506__$1 = (state_32527[(2)]);
var inst_32507 = (inst_32506__$1 == null);
var state_32527__$1 = (function (){var statearr_32531 = state_32527;
(statearr_32531[(7)] = inst_32506__$1);

return statearr_32531;
})();
if(cljs.core.truth_(inst_32507)){
var statearr_32532_33926 = state_32527__$1;
(statearr_32532_33926[(1)] = (5));

} else {
var statearr_32533_33927 = state_32527__$1;
(statearr_32533_33927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (13))){
var state_32527__$1 = state_32527;
var statearr_32534_33928 = state_32527__$1;
(statearr_32534_33928[(2)] = null);

(statearr_32534_33928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (6))){
var inst_32506 = (state_32527[(7)]);
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32527__$1,(11),to,inst_32506);
} else {
if((state_val_32528 === (3))){
var inst_32525 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32527__$1,inst_32525);
} else {
if((state_val_32528 === (12))){
var state_32527__$1 = state_32527;
var statearr_32535_33929 = state_32527__$1;
(statearr_32535_33929[(2)] = null);

(statearr_32535_33929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (2))){
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32527__$1,(4),from);
} else {
if((state_val_32528 === (11))){
var inst_32516 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
if(cljs.core.truth_(inst_32516)){
var statearr_32536_33930 = state_32527__$1;
(statearr_32536_33930[(1)] = (12));

} else {
var statearr_32537_33931 = state_32527__$1;
(statearr_32537_33931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (9))){
var state_32527__$1 = state_32527;
var statearr_32538_33932 = state_32527__$1;
(statearr_32538_33932[(2)] = null);

(statearr_32538_33932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (5))){
var state_32527__$1 = state_32527;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32539_33933 = state_32527__$1;
(statearr_32539_33933[(1)] = (8));

} else {
var statearr_32540_33934 = state_32527__$1;
(statearr_32540_33934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (14))){
var inst_32521 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
var statearr_32541_33935 = state_32527__$1;
(statearr_32541_33935[(2)] = inst_32521);

(statearr_32541_33935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (10))){
var inst_32513 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
var statearr_32542_33936 = state_32527__$1;
(statearr_32542_33936[(2)] = inst_32513);

(statearr_32542_33936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (8))){
var inst_32510 = cljs.core.async.close_BANG_(to);
var state_32527__$1 = state_32527;
var statearr_32543_33937 = state_32527__$1;
(statearr_32543_33937[(2)] = inst_32510);

(statearr_32543_33937[(1)] = (10));


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
var cljs$core$async$state_machine__32347__auto__ = null;
var cljs$core$async$state_machine__32347__auto____0 = (function (){
var statearr_32544 = [null,null,null,null,null,null,null,null];
(statearr_32544[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_32544[(1)] = (1));

return statearr_32544;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_32527){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32527);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32545){var ex__32350__auto__ = e32545;
var statearr_32546_33938 = state_32527;
(statearr_32546_33938[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32527[(4)]))){
var statearr_32547_33939 = state_32527;
(statearr_32547_33939[(1)] = cljs.core.first((state_32527[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33940 = state_32527;
state_32527 = G__33940;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_32527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_32527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_32548 = f__32418__auto__();
(statearr_32548[(6)] = c__32417__auto___33923);

return statearr_32548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
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
var process__$1 = (function (p__32549){
var vec__32550 = p__32549;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32550,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32550,(1),null);
var job = vec__32550;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32417__auto___33945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_32557){
var state_val_32558 = (state_32557[(1)]);
if((state_val_32558 === (1))){
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32557__$1,(2),res,v);
} else {
if((state_val_32558 === (2))){
var inst_32554 = (state_32557[(2)]);
var inst_32555 = cljs.core.async.close_BANG_(res);
var state_32557__$1 = (function (){var statearr_32559 = state_32557;
(statearr_32559[(7)] = inst_32554);

return statearr_32559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32557__$1,inst_32555);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0 = (function (){
var statearr_32560 = [null,null,null,null,null,null,null,null];
(statearr_32560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__);

(statearr_32560[(1)] = (1));

return statearr_32560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1 = (function (state_32557){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32557);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32561){var ex__32350__auto__ = e32561;
var statearr_32562_33946 = state_32557;
(statearr_32562_33946[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32557[(4)]))){
var statearr_32563_33947 = state_32557;
(statearr_32563_33947[(1)] = cljs.core.first((state_32557[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33948 = state_32557;
state_32557 = G__33948;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = function(state_32557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1.call(this,state_32557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_32564 = f__32418__auto__();
(statearr_32564[(6)] = c__32417__auto___33945);

return statearr_32564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32565){
var vec__32566 = p__32565;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32566,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32566,(1),null);
var job = vec__32566;
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
var n__5616__auto___33949 = n;
var __33950 = (0);
while(true){
if((__33950 < n__5616__auto___33949)){
var G__32569_33951 = type;
var G__32569_33952__$1 = (((G__32569_33951 instanceof cljs.core.Keyword))?G__32569_33951.fqn:null);
switch (G__32569_33952__$1) {
case "compute":
var c__32417__auto___33954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33950,c__32417__auto___33954,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async){
return (function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = ((function (__33950,c__32417__auto___33954,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async){
return (function (state_32582){
var state_val_32583 = (state_32582[(1)]);
if((state_val_32583 === (1))){
var state_32582__$1 = state_32582;
var statearr_32584_33955 = state_32582__$1;
(statearr_32584_33955[(2)] = null);

(statearr_32584_33955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (2))){
var state_32582__$1 = state_32582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32582__$1,(4),jobs);
} else {
if((state_val_32583 === (3))){
var inst_32580 = (state_32582[(2)]);
var state_32582__$1 = state_32582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32582__$1,inst_32580);
} else {
if((state_val_32583 === (4))){
var inst_32572 = (state_32582[(2)]);
var inst_32573 = process__$1(inst_32572);
var state_32582__$1 = state_32582;
if(cljs.core.truth_(inst_32573)){
var statearr_32585_33956 = state_32582__$1;
(statearr_32585_33956[(1)] = (5));

} else {
var statearr_32586_33957 = state_32582__$1;
(statearr_32586_33957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (5))){
var state_32582__$1 = state_32582;
var statearr_32587_33958 = state_32582__$1;
(statearr_32587_33958[(2)] = null);

(statearr_32587_33958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (6))){
var state_32582__$1 = state_32582;
var statearr_32588_33959 = state_32582__$1;
(statearr_32588_33959[(2)] = null);

(statearr_32588_33959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (7))){
var inst_32578 = (state_32582[(2)]);
var state_32582__$1 = state_32582;
var statearr_32589_33960 = state_32582__$1;
(statearr_32589_33960[(2)] = inst_32578);

(statearr_32589_33960[(1)] = (3));


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
});})(__33950,c__32417__auto___33954,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async))
;
return ((function (__33950,switch__32346__auto__,c__32417__auto___33954,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0 = (function (){
var statearr_32590 = [null,null,null,null,null,null,null];
(statearr_32590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__);

(statearr_32590[(1)] = (1));

return statearr_32590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1 = (function (state_32582){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32582);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32591){var ex__32350__auto__ = e32591;
var statearr_32592_33961 = state_32582;
(statearr_32592_33961[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32582[(4)]))){
var statearr_32593_33962 = state_32582;
(statearr_32593_33962[(1)] = cljs.core.first((state_32582[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33963 = state_32582;
state_32582 = G__33963;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = function(state_32582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1.call(this,state_32582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__;
})()
;})(__33950,switch__32346__auto__,c__32417__auto___33954,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async))
})();
var state__32419__auto__ = (function (){var statearr_32594 = f__32418__auto__();
(statearr_32594[(6)] = c__32417__auto___33954);

return statearr_32594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
});})(__33950,c__32417__auto___33954,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async))
);


break;
case "async":
var c__32417__auto___33964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33950,c__32417__auto___33964,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async){
return (function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = ((function (__33950,c__32417__auto___33964,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async){
return (function (state_32607){
var state_val_32608 = (state_32607[(1)]);
if((state_val_32608 === (1))){
var state_32607__$1 = state_32607;
var statearr_32609_33965 = state_32607__$1;
(statearr_32609_33965[(2)] = null);

(statearr_32609_33965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (2))){
var state_32607__$1 = state_32607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32607__$1,(4),jobs);
} else {
if((state_val_32608 === (3))){
var inst_32605 = (state_32607[(2)]);
var state_32607__$1 = state_32607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32607__$1,inst_32605);
} else {
if((state_val_32608 === (4))){
var inst_32597 = (state_32607[(2)]);
var inst_32598 = async(inst_32597);
var state_32607__$1 = state_32607;
if(cljs.core.truth_(inst_32598)){
var statearr_32610_33966 = state_32607__$1;
(statearr_32610_33966[(1)] = (5));

} else {
var statearr_32611_33967 = state_32607__$1;
(statearr_32611_33967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (5))){
var state_32607__$1 = state_32607;
var statearr_32612_33968 = state_32607__$1;
(statearr_32612_33968[(2)] = null);

(statearr_32612_33968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (6))){
var state_32607__$1 = state_32607;
var statearr_32613_33969 = state_32607__$1;
(statearr_32613_33969[(2)] = null);

(statearr_32613_33969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (7))){
var inst_32603 = (state_32607[(2)]);
var state_32607__$1 = state_32607;
var statearr_32614_33970 = state_32607__$1;
(statearr_32614_33970[(2)] = inst_32603);

(statearr_32614_33970[(1)] = (3));


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
});})(__33950,c__32417__auto___33964,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async))
;
return ((function (__33950,switch__32346__auto__,c__32417__auto___33964,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0 = (function (){
var statearr_32615 = [null,null,null,null,null,null,null];
(statearr_32615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__);

(statearr_32615[(1)] = (1));

return statearr_32615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1 = (function (state_32607){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32607);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32616){var ex__32350__auto__ = e32616;
var statearr_32617_33971 = state_32607;
(statearr_32617_33971[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32607[(4)]))){
var statearr_32618_33972 = state_32607;
(statearr_32618_33972[(1)] = cljs.core.first((state_32607[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33973 = state_32607;
state_32607 = G__33973;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = function(state_32607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1.call(this,state_32607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__;
})()
;})(__33950,switch__32346__auto__,c__32417__auto___33964,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async))
})();
var state__32419__auto__ = (function (){var statearr_32619 = f__32418__auto__();
(statearr_32619[(6)] = c__32417__auto___33964);

return statearr_32619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
});})(__33950,c__32417__auto___33964,G__32569_33951,G__32569_33952__$1,n__5616__auto___33949,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32569_33952__$1)].join('')));

}

var G__33974 = (__33950 + (1));
__33950 = G__33974;
continue;
} else {
}
break;
}

var c__32417__auto___33975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_32641){
var state_val_32642 = (state_32641[(1)]);
if((state_val_32642 === (7))){
var inst_32637 = (state_32641[(2)]);
var state_32641__$1 = state_32641;
var statearr_32643_33976 = state_32641__$1;
(statearr_32643_33976[(2)] = inst_32637);

(statearr_32643_33976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32642 === (1))){
var state_32641__$1 = state_32641;
var statearr_32644_33977 = state_32641__$1;
(statearr_32644_33977[(2)] = null);

(statearr_32644_33977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32642 === (4))){
var inst_32622 = (state_32641[(7)]);
var inst_32622__$1 = (state_32641[(2)]);
var inst_32623 = (inst_32622__$1 == null);
var state_32641__$1 = (function (){var statearr_32645 = state_32641;
(statearr_32645[(7)] = inst_32622__$1);

return statearr_32645;
})();
if(cljs.core.truth_(inst_32623)){
var statearr_32646_33978 = state_32641__$1;
(statearr_32646_33978[(1)] = (5));

} else {
var statearr_32647_33979 = state_32641__$1;
(statearr_32647_33979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32642 === (6))){
var inst_32622 = (state_32641[(7)]);
var inst_32627 = (state_32641[(8)]);
var inst_32627__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32628 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32629 = [inst_32622,inst_32627__$1];
var inst_32630 = (new cljs.core.PersistentVector(null,2,(5),inst_32628,inst_32629,null));
var state_32641__$1 = (function (){var statearr_32648 = state_32641;
(statearr_32648[(8)] = inst_32627__$1);

return statearr_32648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32641__$1,(8),jobs,inst_32630);
} else {
if((state_val_32642 === (3))){
var inst_32639 = (state_32641[(2)]);
var state_32641__$1 = state_32641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32641__$1,inst_32639);
} else {
if((state_val_32642 === (2))){
var state_32641__$1 = state_32641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32641__$1,(4),from);
} else {
if((state_val_32642 === (9))){
var inst_32634 = (state_32641[(2)]);
var state_32641__$1 = (function (){var statearr_32649 = state_32641;
(statearr_32649[(9)] = inst_32634);

return statearr_32649;
})();
var statearr_32650_33980 = state_32641__$1;
(statearr_32650_33980[(2)] = null);

(statearr_32650_33980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32642 === (5))){
var inst_32625 = cljs.core.async.close_BANG_(jobs);
var state_32641__$1 = state_32641;
var statearr_32651_33981 = state_32641__$1;
(statearr_32651_33981[(2)] = inst_32625);

(statearr_32651_33981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32642 === (8))){
var inst_32627 = (state_32641[(8)]);
var inst_32632 = (state_32641[(2)]);
var state_32641__$1 = (function (){var statearr_32652 = state_32641;
(statearr_32652[(10)] = inst_32632);

return statearr_32652;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32641__$1,(9),results,inst_32627);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0 = (function (){
var statearr_32653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__);

(statearr_32653[(1)] = (1));

return statearr_32653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1 = (function (state_32641){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32641);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32654){var ex__32350__auto__ = e32654;
var statearr_32655_33982 = state_32641;
(statearr_32655_33982[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32641[(4)]))){
var statearr_32656_33983 = state_32641;
(statearr_32656_33983[(1)] = cljs.core.first((state_32641[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33984 = state_32641;
state_32641 = G__33984;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = function(state_32641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1.call(this,state_32641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_32657 = f__32418__auto__();
(statearr_32657[(6)] = c__32417__auto___33975);

return statearr_32657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));


var c__32417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_32695){
var state_val_32696 = (state_32695[(1)]);
if((state_val_32696 === (7))){
var inst_32691 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
var statearr_32697_33985 = state_32695__$1;
(statearr_32697_33985[(2)] = inst_32691);

(statearr_32697_33985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (20))){
var state_32695__$1 = state_32695;
var statearr_32698_33986 = state_32695__$1;
(statearr_32698_33986[(2)] = null);

(statearr_32698_33986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (1))){
var state_32695__$1 = state_32695;
var statearr_32699_33987 = state_32695__$1;
(statearr_32699_33987[(2)] = null);

(statearr_32699_33987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (4))){
var inst_32660 = (state_32695[(7)]);
var inst_32660__$1 = (state_32695[(2)]);
var inst_32661 = (inst_32660__$1 == null);
var state_32695__$1 = (function (){var statearr_32700 = state_32695;
(statearr_32700[(7)] = inst_32660__$1);

return statearr_32700;
})();
if(cljs.core.truth_(inst_32661)){
var statearr_32701_33989 = state_32695__$1;
(statearr_32701_33989[(1)] = (5));

} else {
var statearr_32702_33990 = state_32695__$1;
(statearr_32702_33990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (15))){
var inst_32673 = (state_32695[(8)]);
var state_32695__$1 = state_32695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32695__$1,(18),to,inst_32673);
} else {
if((state_val_32696 === (21))){
var inst_32686 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
var statearr_32703_33991 = state_32695__$1;
(statearr_32703_33991[(2)] = inst_32686);

(statearr_32703_33991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (13))){
var inst_32688 = (state_32695[(2)]);
var state_32695__$1 = (function (){var statearr_32704 = state_32695;
(statearr_32704[(9)] = inst_32688);

return statearr_32704;
})();
var statearr_32705_33993 = state_32695__$1;
(statearr_32705_33993[(2)] = null);

(statearr_32705_33993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (6))){
var inst_32660 = (state_32695[(7)]);
var state_32695__$1 = state_32695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32695__$1,(11),inst_32660);
} else {
if((state_val_32696 === (17))){
var inst_32681 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
if(cljs.core.truth_(inst_32681)){
var statearr_32706_33994 = state_32695__$1;
(statearr_32706_33994[(1)] = (19));

} else {
var statearr_32707_33995 = state_32695__$1;
(statearr_32707_33995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (3))){
var inst_32693 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32695__$1,inst_32693);
} else {
if((state_val_32696 === (12))){
var inst_32670 = (state_32695[(10)]);
var state_32695__$1 = state_32695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32695__$1,(14),inst_32670);
} else {
if((state_val_32696 === (2))){
var state_32695__$1 = state_32695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32695__$1,(4),results);
} else {
if((state_val_32696 === (19))){
var state_32695__$1 = state_32695;
var statearr_32708_33996 = state_32695__$1;
(statearr_32708_33996[(2)] = null);

(statearr_32708_33996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (11))){
var inst_32670 = (state_32695[(2)]);
var state_32695__$1 = (function (){var statearr_32709 = state_32695;
(statearr_32709[(10)] = inst_32670);

return statearr_32709;
})();
var statearr_32710_33997 = state_32695__$1;
(statearr_32710_33997[(2)] = null);

(statearr_32710_33997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (9))){
var state_32695__$1 = state_32695;
var statearr_32711_33998 = state_32695__$1;
(statearr_32711_33998[(2)] = null);

(statearr_32711_33998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (5))){
var state_32695__$1 = state_32695;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32712_33999 = state_32695__$1;
(statearr_32712_33999[(1)] = (8));

} else {
var statearr_32713_34000 = state_32695__$1;
(statearr_32713_34000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (14))){
var inst_32673 = (state_32695[(8)]);
var inst_32675 = (state_32695[(11)]);
var inst_32673__$1 = (state_32695[(2)]);
var inst_32674 = (inst_32673__$1 == null);
var inst_32675__$1 = cljs.core.not(inst_32674);
var state_32695__$1 = (function (){var statearr_32714 = state_32695;
(statearr_32714[(8)] = inst_32673__$1);

(statearr_32714[(11)] = inst_32675__$1);

return statearr_32714;
})();
if(inst_32675__$1){
var statearr_32715_34001 = state_32695__$1;
(statearr_32715_34001[(1)] = (15));

} else {
var statearr_32716_34002 = state_32695__$1;
(statearr_32716_34002[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (16))){
var inst_32675 = (state_32695[(11)]);
var state_32695__$1 = state_32695;
var statearr_32717_34003 = state_32695__$1;
(statearr_32717_34003[(2)] = inst_32675);

(statearr_32717_34003[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (10))){
var inst_32667 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
var statearr_32718_34004 = state_32695__$1;
(statearr_32718_34004[(2)] = inst_32667);

(statearr_32718_34004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (18))){
var inst_32678 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
var statearr_32719_34005 = state_32695__$1;
(statearr_32719_34005[(2)] = inst_32678);

(statearr_32719_34005[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (8))){
var inst_32664 = cljs.core.async.close_BANG_(to);
var state_32695__$1 = state_32695;
var statearr_32720_34006 = state_32695__$1;
(statearr_32720_34006[(2)] = inst_32664);

(statearr_32720_34006[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0 = (function (){
var statearr_32721 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__);

(statearr_32721[(1)] = (1));

return statearr_32721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1 = (function (state_32695){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32695);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32722){var ex__32350__auto__ = e32722;
var statearr_32723_34007 = state_32695;
(statearr_32723_34007[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32695[(4)]))){
var statearr_32724_34008 = state_32695;
(statearr_32724_34008[(1)] = cljs.core.first((state_32695[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34009 = state_32695;
state_32695 = G__34009;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = function(state_32695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1.call(this,state_32695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_32725 = f__32418__auto__();
(statearr_32725[(6)] = c__32417__auto__);

return statearr_32725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));

return c__32417__auto__;
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
var G__32727 = arguments.length;
switch (G__32727) {
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
var G__32729 = arguments.length;
switch (G__32729) {
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
var G__32731 = arguments.length;
switch (G__32731) {
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
var c__32417__auto___34017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_32757){
var state_val_32758 = (state_32757[(1)]);
if((state_val_32758 === (7))){
var inst_32753 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
var statearr_32759_34018 = state_32757__$1;
(statearr_32759_34018[(2)] = inst_32753);

(statearr_32759_34018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (1))){
var state_32757__$1 = state_32757;
var statearr_32760_34019 = state_32757__$1;
(statearr_32760_34019[(2)] = null);

(statearr_32760_34019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (4))){
var inst_32734 = (state_32757[(7)]);
var inst_32734__$1 = (state_32757[(2)]);
var inst_32735 = (inst_32734__$1 == null);
var state_32757__$1 = (function (){var statearr_32761 = state_32757;
(statearr_32761[(7)] = inst_32734__$1);

return statearr_32761;
})();
if(cljs.core.truth_(inst_32735)){
var statearr_32762_34020 = state_32757__$1;
(statearr_32762_34020[(1)] = (5));

} else {
var statearr_32763_34021 = state_32757__$1;
(statearr_32763_34021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (13))){
var state_32757__$1 = state_32757;
var statearr_32764_34022 = state_32757__$1;
(statearr_32764_34022[(2)] = null);

(statearr_32764_34022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (6))){
var inst_32734 = (state_32757[(7)]);
var inst_32740 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32734) : p.call(null,inst_32734));
var state_32757__$1 = state_32757;
if(cljs.core.truth_(inst_32740)){
var statearr_32765_34023 = state_32757__$1;
(statearr_32765_34023[(1)] = (9));

} else {
var statearr_32766_34024 = state_32757__$1;
(statearr_32766_34024[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (3))){
var inst_32755 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32757__$1,inst_32755);
} else {
if((state_val_32758 === (12))){
var state_32757__$1 = state_32757;
var statearr_32767_34025 = state_32757__$1;
(statearr_32767_34025[(2)] = null);

(statearr_32767_34025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (2))){
var state_32757__$1 = state_32757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32757__$1,(4),ch);
} else {
if((state_val_32758 === (11))){
var inst_32734 = (state_32757[(7)]);
var inst_32744 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32757__$1,(8),inst_32744,inst_32734);
} else {
if((state_val_32758 === (9))){
var state_32757__$1 = state_32757;
var statearr_32768_34026 = state_32757__$1;
(statearr_32768_34026[(2)] = tc);

(statearr_32768_34026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (5))){
var inst_32737 = cljs.core.async.close_BANG_(tc);
var inst_32738 = cljs.core.async.close_BANG_(fc);
var state_32757__$1 = (function (){var statearr_32769 = state_32757;
(statearr_32769[(8)] = inst_32737);

return statearr_32769;
})();
var statearr_32770_34027 = state_32757__$1;
(statearr_32770_34027[(2)] = inst_32738);

(statearr_32770_34027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (14))){
var inst_32751 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
var statearr_32771_34029 = state_32757__$1;
(statearr_32771_34029[(2)] = inst_32751);

(statearr_32771_34029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (10))){
var state_32757__$1 = state_32757;
var statearr_32772_34030 = state_32757__$1;
(statearr_32772_34030[(2)] = fc);

(statearr_32772_34030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (8))){
var inst_32746 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
if(cljs.core.truth_(inst_32746)){
var statearr_32773_34032 = state_32757__$1;
(statearr_32773_34032[(1)] = (12));

} else {
var statearr_32774_34033 = state_32757__$1;
(statearr_32774_34033[(1)] = (13));

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
var cljs$core$async$state_machine__32347__auto__ = null;
var cljs$core$async$state_machine__32347__auto____0 = (function (){
var statearr_32775 = [null,null,null,null,null,null,null,null,null];
(statearr_32775[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_32775[(1)] = (1));

return statearr_32775;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_32757){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32757);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32776){var ex__32350__auto__ = e32776;
var statearr_32777_34034 = state_32757;
(statearr_32777_34034[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32757[(4)]))){
var statearr_32778_34035 = state_32757;
(statearr_32778_34035[(1)] = cljs.core.first((state_32757[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34036 = state_32757;
state_32757 = G__34036;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_32757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_32757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_32779 = f__32418__auto__();
(statearr_32779[(6)] = c__32417__auto___34017);

return statearr_32779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
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
var c__32417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_32801){
var state_val_32802 = (state_32801[(1)]);
if((state_val_32802 === (7))){
var inst_32797 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32803_34037 = state_32801__$1;
(statearr_32803_34037[(2)] = inst_32797);

(statearr_32803_34037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (1))){
var inst_32780 = init;
var inst_32781 = inst_32780;
var state_32801__$1 = (function (){var statearr_32804 = state_32801;
(statearr_32804[(7)] = inst_32781);

return statearr_32804;
})();
var statearr_32805_34038 = state_32801__$1;
(statearr_32805_34038[(2)] = null);

(statearr_32805_34038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (4))){
var inst_32784 = (state_32801[(8)]);
var inst_32784__$1 = (state_32801[(2)]);
var inst_32785 = (inst_32784__$1 == null);
var state_32801__$1 = (function (){var statearr_32806 = state_32801;
(statearr_32806[(8)] = inst_32784__$1);

return statearr_32806;
})();
if(cljs.core.truth_(inst_32785)){
var statearr_32807_34039 = state_32801__$1;
(statearr_32807_34039[(1)] = (5));

} else {
var statearr_32808_34040 = state_32801__$1;
(statearr_32808_34040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (6))){
var inst_32781 = (state_32801[(7)]);
var inst_32784 = (state_32801[(8)]);
var inst_32788 = (state_32801[(9)]);
var inst_32788__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32781,inst_32784) : f.call(null,inst_32781,inst_32784));
var inst_32789 = cljs.core.reduced_QMARK_(inst_32788__$1);
var state_32801__$1 = (function (){var statearr_32809 = state_32801;
(statearr_32809[(9)] = inst_32788__$1);

return statearr_32809;
})();
if(inst_32789){
var statearr_32810_34041 = state_32801__$1;
(statearr_32810_34041[(1)] = (8));

} else {
var statearr_32811_34043 = state_32801__$1;
(statearr_32811_34043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (3))){
var inst_32799 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32801__$1,inst_32799);
} else {
if((state_val_32802 === (2))){
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32801__$1,(4),ch);
} else {
if((state_val_32802 === (9))){
var inst_32788 = (state_32801[(9)]);
var inst_32781 = inst_32788;
var state_32801__$1 = (function (){var statearr_32812 = state_32801;
(statearr_32812[(7)] = inst_32781);

return statearr_32812;
})();
var statearr_32813_34046 = state_32801__$1;
(statearr_32813_34046[(2)] = null);

(statearr_32813_34046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (5))){
var inst_32781 = (state_32801[(7)]);
var state_32801__$1 = state_32801;
var statearr_32814_34047 = state_32801__$1;
(statearr_32814_34047[(2)] = inst_32781);

(statearr_32814_34047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (10))){
var inst_32795 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32815_34048 = state_32801__$1;
(statearr_32815_34048[(2)] = inst_32795);

(statearr_32815_34048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (8))){
var inst_32788 = (state_32801[(9)]);
var inst_32791 = cljs.core.deref(inst_32788);
var state_32801__$1 = state_32801;
var statearr_32816_34049 = state_32801__$1;
(statearr_32816_34049[(2)] = inst_32791);

(statearr_32816_34049[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32347__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32347__auto____0 = (function (){
var statearr_32817 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32817[(0)] = cljs$core$async$reduce_$_state_machine__32347__auto__);

(statearr_32817[(1)] = (1));

return statearr_32817;
});
var cljs$core$async$reduce_$_state_machine__32347__auto____1 = (function (state_32801){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32801);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32818){var ex__32350__auto__ = e32818;
var statearr_32819_34050 = state_32801;
(statearr_32819_34050[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32801[(4)]))){
var statearr_32820_34051 = state_32801;
(statearr_32820_34051[(1)] = cljs.core.first((state_32801[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34052 = state_32801;
state_32801 = G__34052;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32347__auto__ = function(state_32801){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32347__auto____1.call(this,state_32801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32347__auto____0;
cljs$core$async$reduce_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32347__auto____1;
return cljs$core$async$reduce_$_state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_32821 = f__32418__auto__();
(statearr_32821[(6)] = c__32417__auto__);

return statearr_32821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));

return c__32417__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_32827){
var state_val_32828 = (state_32827[(1)]);
if((state_val_32828 === (1))){
var inst_32822 = cljs.core.async.reduce(f__$1,init,ch);
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32827__$1,(2),inst_32822);
} else {
if((state_val_32828 === (2))){
var inst_32824 = (state_32827[(2)]);
var inst_32825 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32824) : f__$1.call(null,inst_32824));
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32827__$1,inst_32825);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32347__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32347__auto____0 = (function (){
var statearr_32829 = [null,null,null,null,null,null,null];
(statearr_32829[(0)] = cljs$core$async$transduce_$_state_machine__32347__auto__);

(statearr_32829[(1)] = (1));

return statearr_32829;
});
var cljs$core$async$transduce_$_state_machine__32347__auto____1 = (function (state_32827){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32827);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32830){var ex__32350__auto__ = e32830;
var statearr_32831_34056 = state_32827;
(statearr_32831_34056[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32827[(4)]))){
var statearr_32832_34058 = state_32827;
(statearr_32832_34058[(1)] = cljs.core.first((state_32827[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34059 = state_32827;
state_32827 = G__34059;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32347__auto__ = function(state_32827){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32347__auto____1.call(this,state_32827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32347__auto____0;
cljs$core$async$transduce_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32347__auto____1;
return cljs$core$async$transduce_$_state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_32833 = f__32418__auto__();
(statearr_32833[(6)] = c__32417__auto__);

return statearr_32833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));

return c__32417__auto__;
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
var G__32835 = arguments.length;
switch (G__32835) {
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
var c__32417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_32860){
var state_val_32861 = (state_32860[(1)]);
if((state_val_32861 === (7))){
var inst_32842 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32862_34063 = state_32860__$1;
(statearr_32862_34063[(2)] = inst_32842);

(statearr_32862_34063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (1))){
var inst_32836 = cljs.core.seq(coll);
var inst_32837 = inst_32836;
var state_32860__$1 = (function (){var statearr_32863 = state_32860;
(statearr_32863[(7)] = inst_32837);

return statearr_32863;
})();
var statearr_32864_34064 = state_32860__$1;
(statearr_32864_34064[(2)] = null);

(statearr_32864_34064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (4))){
var inst_32837 = (state_32860[(7)]);
var inst_32840 = cljs.core.first(inst_32837);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32860__$1,(7),ch,inst_32840);
} else {
if((state_val_32861 === (13))){
var inst_32854 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32865_34066 = state_32860__$1;
(statearr_32865_34066[(2)] = inst_32854);

(statearr_32865_34066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (6))){
var inst_32845 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
if(cljs.core.truth_(inst_32845)){
var statearr_32866_34067 = state_32860__$1;
(statearr_32866_34067[(1)] = (8));

} else {
var statearr_32867_34068 = state_32860__$1;
(statearr_32867_34068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (3))){
var inst_32858 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32860__$1,inst_32858);
} else {
if((state_val_32861 === (12))){
var state_32860__$1 = state_32860;
var statearr_32868_34069 = state_32860__$1;
(statearr_32868_34069[(2)] = null);

(statearr_32868_34069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (2))){
var inst_32837 = (state_32860[(7)]);
var state_32860__$1 = state_32860;
if(cljs.core.truth_(inst_32837)){
var statearr_32869_34070 = state_32860__$1;
(statearr_32869_34070[(1)] = (4));

} else {
var statearr_32870_34071 = state_32860__$1;
(statearr_32870_34071[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (11))){
var inst_32851 = cljs.core.async.close_BANG_(ch);
var state_32860__$1 = state_32860;
var statearr_32871_34072 = state_32860__$1;
(statearr_32871_34072[(2)] = inst_32851);

(statearr_32871_34072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (9))){
var state_32860__$1 = state_32860;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32872_34073 = state_32860__$1;
(statearr_32872_34073[(1)] = (11));

} else {
var statearr_32873_34074 = state_32860__$1;
(statearr_32873_34074[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (5))){
var inst_32837 = (state_32860[(7)]);
var state_32860__$1 = state_32860;
var statearr_32874_34075 = state_32860__$1;
(statearr_32874_34075[(2)] = inst_32837);

(statearr_32874_34075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (10))){
var inst_32856 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32875_34076 = state_32860__$1;
(statearr_32875_34076[(2)] = inst_32856);

(statearr_32875_34076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (8))){
var inst_32837 = (state_32860[(7)]);
var inst_32847 = cljs.core.next(inst_32837);
var inst_32837__$1 = inst_32847;
var state_32860__$1 = (function (){var statearr_32876 = state_32860;
(statearr_32876[(7)] = inst_32837__$1);

return statearr_32876;
})();
var statearr_32877_34078 = state_32860__$1;
(statearr_32877_34078[(2)] = null);

(statearr_32877_34078[(1)] = (2));


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
var cljs$core$async$state_machine__32347__auto__ = null;
var cljs$core$async$state_machine__32347__auto____0 = (function (){
var statearr_32878 = [null,null,null,null,null,null,null,null];
(statearr_32878[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_32878[(1)] = (1));

return statearr_32878;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_32860){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32860);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32879){var ex__32350__auto__ = e32879;
var statearr_32880_34079 = state_32860;
(statearr_32880_34079[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32860[(4)]))){
var statearr_32881_34080 = state_32860;
(statearr_32881_34080[(1)] = cljs.core.first((state_32860[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34081 = state_32860;
state_32860 = G__34081;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_32860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_32860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_32882 = f__32418__auto__();
(statearr_32882[(6)] = c__32417__auto__);

return statearr_32882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));

return c__32417__auto__;
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
var G__32884 = arguments.length;
switch (G__32884) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34087 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34087(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34089 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34089(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34094 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34094(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34098 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34098(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32885 = (function (ch,cs,meta32886){
this.ch = ch;
this.cs = cs;
this.meta32886 = meta32886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32887,meta32886__$1){
var self__ = this;
var _32887__$1 = this;
return (new cljs.core.async.t_cljs$core$async32885(self__.ch,self__.cs,meta32886__$1));
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32887){
var self__ = this;
var _32887__$1 = this;
return self__.meta32886;
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32886","meta32886",-585827044,null)], null);
}));

(cljs.core.async.t_cljs$core$async32885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32885");

(cljs.core.async.t_cljs$core$async32885.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32885.
 */
cljs.core.async.__GT_t_cljs$core$async32885 = (function cljs$core$async$__GT_t_cljs$core$async32885(ch,cs,meta32886){
return (new cljs.core.async.t_cljs$core$async32885(ch,cs,meta32886));
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
var m = (new cljs.core.async.t_cljs$core$async32885(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32417__auto___34106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_33020){
var state_val_33021 = (state_33020[(1)]);
if((state_val_33021 === (7))){
var inst_33016 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33022_34107 = state_33020__$1;
(statearr_33022_34107[(2)] = inst_33016);

(statearr_33022_34107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (20))){
var inst_32921 = (state_33020[(7)]);
var inst_32933 = cljs.core.first(inst_32921);
var inst_32934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32933,(0),null);
var inst_32935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32933,(1),null);
var state_33020__$1 = (function (){var statearr_33023 = state_33020;
(statearr_33023[(8)] = inst_32934);

return statearr_33023;
})();
if(cljs.core.truth_(inst_32935)){
var statearr_33024_34108 = state_33020__$1;
(statearr_33024_34108[(1)] = (22));

} else {
var statearr_33025_34109 = state_33020__$1;
(statearr_33025_34109[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (27))){
var inst_32963 = (state_33020[(9)]);
var inst_32965 = (state_33020[(10)]);
var inst_32970 = (state_33020[(11)]);
var inst_32890 = (state_33020[(12)]);
var inst_32970__$1 = cljs.core._nth(inst_32963,inst_32965);
var inst_32971 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32970__$1,inst_32890,done);
var state_33020__$1 = (function (){var statearr_33026 = state_33020;
(statearr_33026[(11)] = inst_32970__$1);

return statearr_33026;
})();
if(cljs.core.truth_(inst_32971)){
var statearr_33027_34110 = state_33020__$1;
(statearr_33027_34110[(1)] = (30));

} else {
var statearr_33028_34111 = state_33020__$1;
(statearr_33028_34111[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (1))){
var state_33020__$1 = state_33020;
var statearr_33029_34112 = state_33020__$1;
(statearr_33029_34112[(2)] = null);

(statearr_33029_34112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (24))){
var inst_32921 = (state_33020[(7)]);
var inst_32940 = (state_33020[(2)]);
var inst_32941 = cljs.core.next(inst_32921);
var inst_32899 = inst_32941;
var inst_32900 = null;
var inst_32901 = (0);
var inst_32902 = (0);
var state_33020__$1 = (function (){var statearr_33030 = state_33020;
(statearr_33030[(13)] = inst_32940);

(statearr_33030[(14)] = inst_32899);

(statearr_33030[(15)] = inst_32900);

(statearr_33030[(16)] = inst_32901);

(statearr_33030[(17)] = inst_32902);

return statearr_33030;
})();
var statearr_33031_34113 = state_33020__$1;
(statearr_33031_34113[(2)] = null);

(statearr_33031_34113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (39))){
var state_33020__$1 = state_33020;
var statearr_33035_34114 = state_33020__$1;
(statearr_33035_34114[(2)] = null);

(statearr_33035_34114[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (4))){
var inst_32890 = (state_33020[(12)]);
var inst_32890__$1 = (state_33020[(2)]);
var inst_32891 = (inst_32890__$1 == null);
var state_33020__$1 = (function (){var statearr_33036 = state_33020;
(statearr_33036[(12)] = inst_32890__$1);

return statearr_33036;
})();
if(cljs.core.truth_(inst_32891)){
var statearr_33037_34115 = state_33020__$1;
(statearr_33037_34115[(1)] = (5));

} else {
var statearr_33038_34116 = state_33020__$1;
(statearr_33038_34116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (15))){
var inst_32902 = (state_33020[(17)]);
var inst_32899 = (state_33020[(14)]);
var inst_32900 = (state_33020[(15)]);
var inst_32901 = (state_33020[(16)]);
var inst_32917 = (state_33020[(2)]);
var inst_32918 = (inst_32902 + (1));
var tmp33032 = inst_32899;
var tmp33033 = inst_32901;
var tmp33034 = inst_32900;
var inst_32899__$1 = tmp33032;
var inst_32900__$1 = tmp33034;
var inst_32901__$1 = tmp33033;
var inst_32902__$1 = inst_32918;
var state_33020__$1 = (function (){var statearr_33039 = state_33020;
(statearr_33039[(18)] = inst_32917);

(statearr_33039[(14)] = inst_32899__$1);

(statearr_33039[(15)] = inst_32900__$1);

(statearr_33039[(16)] = inst_32901__$1);

(statearr_33039[(17)] = inst_32902__$1);

return statearr_33039;
})();
var statearr_33040_34117 = state_33020__$1;
(statearr_33040_34117[(2)] = null);

(statearr_33040_34117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (21))){
var inst_32944 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33044_34118 = state_33020__$1;
(statearr_33044_34118[(2)] = inst_32944);

(statearr_33044_34118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (31))){
var inst_32970 = (state_33020[(11)]);
var inst_32974 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32970);
var state_33020__$1 = state_33020;
var statearr_33045_34119 = state_33020__$1;
(statearr_33045_34119[(2)] = inst_32974);

(statearr_33045_34119[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (32))){
var inst_32965 = (state_33020[(10)]);
var inst_32962 = (state_33020[(19)]);
var inst_32963 = (state_33020[(9)]);
var inst_32964 = (state_33020[(20)]);
var inst_32976 = (state_33020[(2)]);
var inst_32977 = (inst_32965 + (1));
var tmp33041 = inst_32964;
var tmp33042 = inst_32963;
var tmp33043 = inst_32962;
var inst_32962__$1 = tmp33043;
var inst_32963__$1 = tmp33042;
var inst_32964__$1 = tmp33041;
var inst_32965__$1 = inst_32977;
var state_33020__$1 = (function (){var statearr_33046 = state_33020;
(statearr_33046[(21)] = inst_32976);

(statearr_33046[(19)] = inst_32962__$1);

(statearr_33046[(9)] = inst_32963__$1);

(statearr_33046[(20)] = inst_32964__$1);

(statearr_33046[(10)] = inst_32965__$1);

return statearr_33046;
})();
var statearr_33047_34120 = state_33020__$1;
(statearr_33047_34120[(2)] = null);

(statearr_33047_34120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (40))){
var inst_32989 = (state_33020[(22)]);
var inst_32993 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32989);
var state_33020__$1 = state_33020;
var statearr_33048_34122 = state_33020__$1;
(statearr_33048_34122[(2)] = inst_32993);

(statearr_33048_34122[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (33))){
var inst_32980 = (state_33020[(23)]);
var inst_32982 = cljs.core.chunked_seq_QMARK_(inst_32980);
var state_33020__$1 = state_33020;
if(inst_32982){
var statearr_33049_34126 = state_33020__$1;
(statearr_33049_34126[(1)] = (36));

} else {
var statearr_33050_34127 = state_33020__$1;
(statearr_33050_34127[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (13))){
var inst_32911 = (state_33020[(24)]);
var inst_32914 = cljs.core.async.close_BANG_(inst_32911);
var state_33020__$1 = state_33020;
var statearr_33051_34128 = state_33020__$1;
(statearr_33051_34128[(2)] = inst_32914);

(statearr_33051_34128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (22))){
var inst_32934 = (state_33020[(8)]);
var inst_32937 = cljs.core.async.close_BANG_(inst_32934);
var state_33020__$1 = state_33020;
var statearr_33052_34129 = state_33020__$1;
(statearr_33052_34129[(2)] = inst_32937);

(statearr_33052_34129[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (36))){
var inst_32980 = (state_33020[(23)]);
var inst_32984 = cljs.core.chunk_first(inst_32980);
var inst_32985 = cljs.core.chunk_rest(inst_32980);
var inst_32986 = cljs.core.count(inst_32984);
var inst_32962 = inst_32985;
var inst_32963 = inst_32984;
var inst_32964 = inst_32986;
var inst_32965 = (0);
var state_33020__$1 = (function (){var statearr_33053 = state_33020;
(statearr_33053[(19)] = inst_32962);

(statearr_33053[(9)] = inst_32963);

(statearr_33053[(20)] = inst_32964);

(statearr_33053[(10)] = inst_32965);

return statearr_33053;
})();
var statearr_33054_34132 = state_33020__$1;
(statearr_33054_34132[(2)] = null);

(statearr_33054_34132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (41))){
var inst_32980 = (state_33020[(23)]);
var inst_32995 = (state_33020[(2)]);
var inst_32996 = cljs.core.next(inst_32980);
var inst_32962 = inst_32996;
var inst_32963 = null;
var inst_32964 = (0);
var inst_32965 = (0);
var state_33020__$1 = (function (){var statearr_33055 = state_33020;
(statearr_33055[(25)] = inst_32995);

(statearr_33055[(19)] = inst_32962);

(statearr_33055[(9)] = inst_32963);

(statearr_33055[(20)] = inst_32964);

(statearr_33055[(10)] = inst_32965);

return statearr_33055;
})();
var statearr_33056_34133 = state_33020__$1;
(statearr_33056_34133[(2)] = null);

(statearr_33056_34133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (43))){
var state_33020__$1 = state_33020;
var statearr_33057_34134 = state_33020__$1;
(statearr_33057_34134[(2)] = null);

(statearr_33057_34134[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (29))){
var inst_33004 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33058_34135 = state_33020__$1;
(statearr_33058_34135[(2)] = inst_33004);

(statearr_33058_34135[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (44))){
var inst_33013 = (state_33020[(2)]);
var state_33020__$1 = (function (){var statearr_33059 = state_33020;
(statearr_33059[(26)] = inst_33013);

return statearr_33059;
})();
var statearr_33060_34136 = state_33020__$1;
(statearr_33060_34136[(2)] = null);

(statearr_33060_34136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (6))){
var inst_32954 = (state_33020[(27)]);
var inst_32953 = cljs.core.deref(cs);
var inst_32954__$1 = cljs.core.keys(inst_32953);
var inst_32955 = cljs.core.count(inst_32954__$1);
var inst_32956 = cljs.core.reset_BANG_(dctr,inst_32955);
var inst_32961 = cljs.core.seq(inst_32954__$1);
var inst_32962 = inst_32961;
var inst_32963 = null;
var inst_32964 = (0);
var inst_32965 = (0);
var state_33020__$1 = (function (){var statearr_33061 = state_33020;
(statearr_33061[(27)] = inst_32954__$1);

(statearr_33061[(28)] = inst_32956);

(statearr_33061[(19)] = inst_32962);

(statearr_33061[(9)] = inst_32963);

(statearr_33061[(20)] = inst_32964);

(statearr_33061[(10)] = inst_32965);

return statearr_33061;
})();
var statearr_33062_34137 = state_33020__$1;
(statearr_33062_34137[(2)] = null);

(statearr_33062_34137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (28))){
var inst_32962 = (state_33020[(19)]);
var inst_32980 = (state_33020[(23)]);
var inst_32980__$1 = cljs.core.seq(inst_32962);
var state_33020__$1 = (function (){var statearr_33063 = state_33020;
(statearr_33063[(23)] = inst_32980__$1);

return statearr_33063;
})();
if(inst_32980__$1){
var statearr_33064_34138 = state_33020__$1;
(statearr_33064_34138[(1)] = (33));

} else {
var statearr_33065_34139 = state_33020__$1;
(statearr_33065_34139[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (25))){
var inst_32965 = (state_33020[(10)]);
var inst_32964 = (state_33020[(20)]);
var inst_32967 = (inst_32965 < inst_32964);
var inst_32968 = inst_32967;
var state_33020__$1 = state_33020;
if(cljs.core.truth_(inst_32968)){
var statearr_33066_34140 = state_33020__$1;
(statearr_33066_34140[(1)] = (27));

} else {
var statearr_33067_34141 = state_33020__$1;
(statearr_33067_34141[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (34))){
var state_33020__$1 = state_33020;
var statearr_33068_34142 = state_33020__$1;
(statearr_33068_34142[(2)] = null);

(statearr_33068_34142[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (17))){
var state_33020__$1 = state_33020;
var statearr_33069_34143 = state_33020__$1;
(statearr_33069_34143[(2)] = null);

(statearr_33069_34143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (3))){
var inst_33018 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33020__$1,inst_33018);
} else {
if((state_val_33021 === (12))){
var inst_32949 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33070_34144 = state_33020__$1;
(statearr_33070_34144[(2)] = inst_32949);

(statearr_33070_34144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (2))){
var state_33020__$1 = state_33020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33020__$1,(4),ch);
} else {
if((state_val_33021 === (23))){
var state_33020__$1 = state_33020;
var statearr_33071_34145 = state_33020__$1;
(statearr_33071_34145[(2)] = null);

(statearr_33071_34145[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (35))){
var inst_33002 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33072_34146 = state_33020__$1;
(statearr_33072_34146[(2)] = inst_33002);

(statearr_33072_34146[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (19))){
var inst_32921 = (state_33020[(7)]);
var inst_32925 = cljs.core.chunk_first(inst_32921);
var inst_32926 = cljs.core.chunk_rest(inst_32921);
var inst_32927 = cljs.core.count(inst_32925);
var inst_32899 = inst_32926;
var inst_32900 = inst_32925;
var inst_32901 = inst_32927;
var inst_32902 = (0);
var state_33020__$1 = (function (){var statearr_33073 = state_33020;
(statearr_33073[(14)] = inst_32899);

(statearr_33073[(15)] = inst_32900);

(statearr_33073[(16)] = inst_32901);

(statearr_33073[(17)] = inst_32902);

return statearr_33073;
})();
var statearr_33074_34147 = state_33020__$1;
(statearr_33074_34147[(2)] = null);

(statearr_33074_34147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (11))){
var inst_32899 = (state_33020[(14)]);
var inst_32921 = (state_33020[(7)]);
var inst_32921__$1 = cljs.core.seq(inst_32899);
var state_33020__$1 = (function (){var statearr_33075 = state_33020;
(statearr_33075[(7)] = inst_32921__$1);

return statearr_33075;
})();
if(inst_32921__$1){
var statearr_33076_34148 = state_33020__$1;
(statearr_33076_34148[(1)] = (16));

} else {
var statearr_33077_34149 = state_33020__$1;
(statearr_33077_34149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (9))){
var inst_32951 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33078_34150 = state_33020__$1;
(statearr_33078_34150[(2)] = inst_32951);

(statearr_33078_34150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (5))){
var inst_32897 = cljs.core.deref(cs);
var inst_32898 = cljs.core.seq(inst_32897);
var inst_32899 = inst_32898;
var inst_32900 = null;
var inst_32901 = (0);
var inst_32902 = (0);
var state_33020__$1 = (function (){var statearr_33079 = state_33020;
(statearr_33079[(14)] = inst_32899);

(statearr_33079[(15)] = inst_32900);

(statearr_33079[(16)] = inst_32901);

(statearr_33079[(17)] = inst_32902);

return statearr_33079;
})();
var statearr_33080_34151 = state_33020__$1;
(statearr_33080_34151[(2)] = null);

(statearr_33080_34151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (14))){
var state_33020__$1 = state_33020;
var statearr_33081_34152 = state_33020__$1;
(statearr_33081_34152[(2)] = null);

(statearr_33081_34152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (45))){
var inst_33010 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33082_34153 = state_33020__$1;
(statearr_33082_34153[(2)] = inst_33010);

(statearr_33082_34153[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (26))){
var inst_32954 = (state_33020[(27)]);
var inst_33006 = (state_33020[(2)]);
var inst_33007 = cljs.core.seq(inst_32954);
var state_33020__$1 = (function (){var statearr_33083 = state_33020;
(statearr_33083[(29)] = inst_33006);

return statearr_33083;
})();
if(inst_33007){
var statearr_33084_34154 = state_33020__$1;
(statearr_33084_34154[(1)] = (42));

} else {
var statearr_33085_34155 = state_33020__$1;
(statearr_33085_34155[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (16))){
var inst_32921 = (state_33020[(7)]);
var inst_32923 = cljs.core.chunked_seq_QMARK_(inst_32921);
var state_33020__$1 = state_33020;
if(inst_32923){
var statearr_33086_34156 = state_33020__$1;
(statearr_33086_34156[(1)] = (19));

} else {
var statearr_33087_34157 = state_33020__$1;
(statearr_33087_34157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (38))){
var inst_32999 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33088_34158 = state_33020__$1;
(statearr_33088_34158[(2)] = inst_32999);

(statearr_33088_34158[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (30))){
var state_33020__$1 = state_33020;
var statearr_33089_34159 = state_33020__$1;
(statearr_33089_34159[(2)] = null);

(statearr_33089_34159[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (10))){
var inst_32900 = (state_33020[(15)]);
var inst_32902 = (state_33020[(17)]);
var inst_32910 = cljs.core._nth(inst_32900,inst_32902);
var inst_32911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32910,(0),null);
var inst_32912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32910,(1),null);
var state_33020__$1 = (function (){var statearr_33090 = state_33020;
(statearr_33090[(24)] = inst_32911);

return statearr_33090;
})();
if(cljs.core.truth_(inst_32912)){
var statearr_33091_34160 = state_33020__$1;
(statearr_33091_34160[(1)] = (13));

} else {
var statearr_33092_34161 = state_33020__$1;
(statearr_33092_34161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (18))){
var inst_32947 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33093_34162 = state_33020__$1;
(statearr_33093_34162[(2)] = inst_32947);

(statearr_33093_34162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (42))){
var state_33020__$1 = state_33020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33020__$1,(45),dchan);
} else {
if((state_val_33021 === (37))){
var inst_32980 = (state_33020[(23)]);
var inst_32989 = (state_33020[(22)]);
var inst_32890 = (state_33020[(12)]);
var inst_32989__$1 = cljs.core.first(inst_32980);
var inst_32990 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32989__$1,inst_32890,done);
var state_33020__$1 = (function (){var statearr_33094 = state_33020;
(statearr_33094[(22)] = inst_32989__$1);

return statearr_33094;
})();
if(cljs.core.truth_(inst_32990)){
var statearr_33095_34163 = state_33020__$1;
(statearr_33095_34163[(1)] = (39));

} else {
var statearr_33096_34164 = state_33020__$1;
(statearr_33096_34164[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (8))){
var inst_32902 = (state_33020[(17)]);
var inst_32901 = (state_33020[(16)]);
var inst_32904 = (inst_32902 < inst_32901);
var inst_32905 = inst_32904;
var state_33020__$1 = state_33020;
if(cljs.core.truth_(inst_32905)){
var statearr_33097_34165 = state_33020__$1;
(statearr_33097_34165[(1)] = (10));

} else {
var statearr_33098_34166 = state_33020__$1;
(statearr_33098_34166[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32347__auto__ = null;
var cljs$core$async$mult_$_state_machine__32347__auto____0 = (function (){
var statearr_33099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33099[(0)] = cljs$core$async$mult_$_state_machine__32347__auto__);

(statearr_33099[(1)] = (1));

return statearr_33099;
});
var cljs$core$async$mult_$_state_machine__32347__auto____1 = (function (state_33020){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33020);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33100){var ex__32350__auto__ = e33100;
var statearr_33101_34167 = state_33020;
(statearr_33101_34167[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33020[(4)]))){
var statearr_33102_34168 = state_33020;
(statearr_33102_34168[(1)] = cljs.core.first((state_33020[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34169 = state_33020;
state_33020 = G__34169;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32347__auto__ = function(state_33020){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32347__auto____1.call(this,state_33020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32347__auto____0;
cljs$core$async$mult_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32347__auto____1;
return cljs$core$async$mult_$_state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_33103 = f__32418__auto__();
(statearr_33103[(6)] = c__32417__auto___34106);

return statearr_33103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
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
var G__33105 = arguments.length;
switch (G__33105) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34171 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34171(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34173 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34173(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34174 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34174(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34175 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34175(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34176 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34176(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34177 = arguments.length;
var i__5750__auto___34178 = (0);
while(true){
if((i__5750__auto___34178 < len__5749__auto___34177)){
args__5755__auto__.push((arguments[i__5750__auto___34178]));

var G__34179 = (i__5750__auto___34178 + (1));
i__5750__auto___34178 = G__34179;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33110){
var map__33111 = p__33110;
var map__33111__$1 = cljs.core.__destructure_map(map__33111);
var opts = map__33111__$1;
var statearr_33112_34180 = state;
(statearr_33112_34180[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33113_34181 = state;
(statearr_33113_34181[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33114_34182 = state;
(statearr_33114_34182[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33106){
var G__33107 = cljs.core.first(seq33106);
var seq33106__$1 = cljs.core.next(seq33106);
var G__33108 = cljs.core.first(seq33106__$1);
var seq33106__$2 = cljs.core.next(seq33106__$1);
var G__33109 = cljs.core.first(seq33106__$2);
var seq33106__$3 = cljs.core.next(seq33106__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33107,G__33108,G__33109,seq33106__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33115 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33116){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33116 = meta33116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33117,meta33116__$1){
var self__ = this;
var _33117__$1 = this;
return (new cljs.core.async.t_cljs$core$async33115(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33116__$1));
}));

(cljs.core.async.t_cljs$core$async33115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33117){
var self__ = this;
var _33117__$1 = this;
return self__.meta33116;
}));

(cljs.core.async.t_cljs$core$async33115.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33115.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33115.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33115.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33115.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33115.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33115.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33116","meta33116",-234546826,null)], null);
}));

(cljs.core.async.t_cljs$core$async33115.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33115");

(cljs.core.async.t_cljs$core$async33115.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33115");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33115.
 */
cljs.core.async.__GT_t_cljs$core$async33115 = (function cljs$core$async$__GT_t_cljs$core$async33115(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33116){
return (new cljs.core.async.t_cljs$core$async33115(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33116));
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
var m = (new cljs.core.async.t_cljs$core$async33115(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32417__auto___34183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_33185){
var state_val_33186 = (state_33185[(1)]);
if((state_val_33186 === (7))){
var inst_33145 = (state_33185[(2)]);
var state_33185__$1 = state_33185;
if(cljs.core.truth_(inst_33145)){
var statearr_33187_34184 = state_33185__$1;
(statearr_33187_34184[(1)] = (8));

} else {
var statearr_33188_34185 = state_33185__$1;
(statearr_33188_34185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (20))){
var inst_33138 = (state_33185[(7)]);
var state_33185__$1 = state_33185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33185__$1,(23),out,inst_33138);
} else {
if((state_val_33186 === (1))){
var inst_33121 = calc_state();
var inst_33122 = cljs.core.__destructure_map(inst_33121);
var inst_33123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33122,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33122,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33122,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33126 = inst_33121;
var state_33185__$1 = (function (){var statearr_33189 = state_33185;
(statearr_33189[(8)] = inst_33123);

(statearr_33189[(9)] = inst_33124);

(statearr_33189[(10)] = inst_33125);

(statearr_33189[(11)] = inst_33126);

return statearr_33189;
})();
var statearr_33190_34187 = state_33185__$1;
(statearr_33190_34187[(2)] = null);

(statearr_33190_34187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (24))){
var inst_33129 = (state_33185[(12)]);
var inst_33126 = inst_33129;
var state_33185__$1 = (function (){var statearr_33191 = state_33185;
(statearr_33191[(11)] = inst_33126);

return statearr_33191;
})();
var statearr_33192_34188 = state_33185__$1;
(statearr_33192_34188[(2)] = null);

(statearr_33192_34188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (4))){
var inst_33138 = (state_33185[(7)]);
var inst_33140 = (state_33185[(13)]);
var inst_33137 = (state_33185[(2)]);
var inst_33138__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33137,(0),null);
var inst_33139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33137,(1),null);
var inst_33140__$1 = (inst_33138__$1 == null);
var state_33185__$1 = (function (){var statearr_33193 = state_33185;
(statearr_33193[(7)] = inst_33138__$1);

(statearr_33193[(14)] = inst_33139);

(statearr_33193[(13)] = inst_33140__$1);

return statearr_33193;
})();
if(cljs.core.truth_(inst_33140__$1)){
var statearr_33194_34189 = state_33185__$1;
(statearr_33194_34189[(1)] = (5));

} else {
var statearr_33195_34190 = state_33185__$1;
(statearr_33195_34190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (15))){
var inst_33130 = (state_33185[(15)]);
var inst_33159 = (state_33185[(16)]);
var inst_33159__$1 = cljs.core.empty_QMARK_(inst_33130);
var state_33185__$1 = (function (){var statearr_33196 = state_33185;
(statearr_33196[(16)] = inst_33159__$1);

return statearr_33196;
})();
if(inst_33159__$1){
var statearr_33197_34191 = state_33185__$1;
(statearr_33197_34191[(1)] = (17));

} else {
var statearr_33198_34192 = state_33185__$1;
(statearr_33198_34192[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (21))){
var inst_33129 = (state_33185[(12)]);
var inst_33126 = inst_33129;
var state_33185__$1 = (function (){var statearr_33199 = state_33185;
(statearr_33199[(11)] = inst_33126);

return statearr_33199;
})();
var statearr_33200_34193 = state_33185__$1;
(statearr_33200_34193[(2)] = null);

(statearr_33200_34193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (13))){
var inst_33152 = (state_33185[(2)]);
var inst_33153 = calc_state();
var inst_33126 = inst_33153;
var state_33185__$1 = (function (){var statearr_33201 = state_33185;
(statearr_33201[(17)] = inst_33152);

(statearr_33201[(11)] = inst_33126);

return statearr_33201;
})();
var statearr_33202_34194 = state_33185__$1;
(statearr_33202_34194[(2)] = null);

(statearr_33202_34194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (22))){
var inst_33179 = (state_33185[(2)]);
var state_33185__$1 = state_33185;
var statearr_33203_34195 = state_33185__$1;
(statearr_33203_34195[(2)] = inst_33179);

(statearr_33203_34195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (6))){
var inst_33139 = (state_33185[(14)]);
var inst_33143 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33139,change);
var state_33185__$1 = state_33185;
var statearr_33204_34196 = state_33185__$1;
(statearr_33204_34196[(2)] = inst_33143);

(statearr_33204_34196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (25))){
var state_33185__$1 = state_33185;
var statearr_33205_34197 = state_33185__$1;
(statearr_33205_34197[(2)] = null);

(statearr_33205_34197[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (17))){
var inst_33131 = (state_33185[(18)]);
var inst_33139 = (state_33185[(14)]);
var inst_33161 = (inst_33131.cljs$core$IFn$_invoke$arity$1 ? inst_33131.cljs$core$IFn$_invoke$arity$1(inst_33139) : inst_33131.call(null,inst_33139));
var inst_33162 = cljs.core.not(inst_33161);
var state_33185__$1 = state_33185;
var statearr_33206_34198 = state_33185__$1;
(statearr_33206_34198[(2)] = inst_33162);

(statearr_33206_34198[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (3))){
var inst_33183 = (state_33185[(2)]);
var state_33185__$1 = state_33185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33185__$1,inst_33183);
} else {
if((state_val_33186 === (12))){
var state_33185__$1 = state_33185;
var statearr_33207_34199 = state_33185__$1;
(statearr_33207_34199[(2)] = null);

(statearr_33207_34199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (2))){
var inst_33126 = (state_33185[(11)]);
var inst_33129 = (state_33185[(12)]);
var inst_33129__$1 = cljs.core.__destructure_map(inst_33126);
var inst_33130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33129__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33129__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33129__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33185__$1 = (function (){var statearr_33208 = state_33185;
(statearr_33208[(12)] = inst_33129__$1);

(statearr_33208[(15)] = inst_33130);

(statearr_33208[(18)] = inst_33131);

return statearr_33208;
})();
return cljs.core.async.ioc_alts_BANG_(state_33185__$1,(4),inst_33132);
} else {
if((state_val_33186 === (23))){
var inst_33170 = (state_33185[(2)]);
var state_33185__$1 = state_33185;
if(cljs.core.truth_(inst_33170)){
var statearr_33209_34200 = state_33185__$1;
(statearr_33209_34200[(1)] = (24));

} else {
var statearr_33210_34201 = state_33185__$1;
(statearr_33210_34201[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (19))){
var inst_33165 = (state_33185[(2)]);
var state_33185__$1 = state_33185;
var statearr_33211_34202 = state_33185__$1;
(statearr_33211_34202[(2)] = inst_33165);

(statearr_33211_34202[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (11))){
var inst_33139 = (state_33185[(14)]);
var inst_33149 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33139);
var state_33185__$1 = state_33185;
var statearr_33212_34203 = state_33185__$1;
(statearr_33212_34203[(2)] = inst_33149);

(statearr_33212_34203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (9))){
var inst_33130 = (state_33185[(15)]);
var inst_33139 = (state_33185[(14)]);
var inst_33156 = (state_33185[(19)]);
var inst_33156__$1 = (inst_33130.cljs$core$IFn$_invoke$arity$1 ? inst_33130.cljs$core$IFn$_invoke$arity$1(inst_33139) : inst_33130.call(null,inst_33139));
var state_33185__$1 = (function (){var statearr_33213 = state_33185;
(statearr_33213[(19)] = inst_33156__$1);

return statearr_33213;
})();
if(cljs.core.truth_(inst_33156__$1)){
var statearr_33214_34204 = state_33185__$1;
(statearr_33214_34204[(1)] = (14));

} else {
var statearr_33215_34205 = state_33185__$1;
(statearr_33215_34205[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (5))){
var inst_33140 = (state_33185[(13)]);
var state_33185__$1 = state_33185;
var statearr_33216_34206 = state_33185__$1;
(statearr_33216_34206[(2)] = inst_33140);

(statearr_33216_34206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (14))){
var inst_33156 = (state_33185[(19)]);
var state_33185__$1 = state_33185;
var statearr_33217_34207 = state_33185__$1;
(statearr_33217_34207[(2)] = inst_33156);

(statearr_33217_34207[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (26))){
var inst_33175 = (state_33185[(2)]);
var state_33185__$1 = state_33185;
var statearr_33218_34208 = state_33185__$1;
(statearr_33218_34208[(2)] = inst_33175);

(statearr_33218_34208[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (16))){
var inst_33167 = (state_33185[(2)]);
var state_33185__$1 = state_33185;
if(cljs.core.truth_(inst_33167)){
var statearr_33219_34209 = state_33185__$1;
(statearr_33219_34209[(1)] = (20));

} else {
var statearr_33220_34210 = state_33185__$1;
(statearr_33220_34210[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (10))){
var inst_33181 = (state_33185[(2)]);
var state_33185__$1 = state_33185;
var statearr_33221_34211 = state_33185__$1;
(statearr_33221_34211[(2)] = inst_33181);

(statearr_33221_34211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (18))){
var inst_33159 = (state_33185[(16)]);
var state_33185__$1 = state_33185;
var statearr_33222_34212 = state_33185__$1;
(statearr_33222_34212[(2)] = inst_33159);

(statearr_33222_34212[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33186 === (8))){
var inst_33138 = (state_33185[(7)]);
var inst_33147 = (inst_33138 == null);
var state_33185__$1 = state_33185;
if(cljs.core.truth_(inst_33147)){
var statearr_33223_34213 = state_33185__$1;
(statearr_33223_34213[(1)] = (11));

} else {
var statearr_33224_34214 = state_33185__$1;
(statearr_33224_34214[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32347__auto__ = null;
var cljs$core$async$mix_$_state_machine__32347__auto____0 = (function (){
var statearr_33225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33225[(0)] = cljs$core$async$mix_$_state_machine__32347__auto__);

(statearr_33225[(1)] = (1));

return statearr_33225;
});
var cljs$core$async$mix_$_state_machine__32347__auto____1 = (function (state_33185){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33185);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33226){var ex__32350__auto__ = e33226;
var statearr_33227_34215 = state_33185;
(statearr_33227_34215[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33185[(4)]))){
var statearr_33228_34216 = state_33185;
(statearr_33228_34216[(1)] = cljs.core.first((state_33185[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34217 = state_33185;
state_33185 = G__34217;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32347__auto__ = function(state_33185){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32347__auto____1.call(this,state_33185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32347__auto____0;
cljs$core$async$mix_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32347__auto____1;
return cljs$core$async$mix_$_state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_33229 = f__32418__auto__();
(statearr_33229[(6)] = c__32417__auto___34183);

return statearr_33229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34219 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34219(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34220 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34220(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34221 = (function() {
var G__34222 = null;
var G__34222__1 = (function (p){
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
var G__34222__2 = (function (p,v){
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
G__34222 = function(p,v){
switch(arguments.length){
case 1:
return G__34222__1.call(this,p);
case 2:
return G__34222__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34222.cljs$core$IFn$_invoke$arity$1 = G__34222__1;
G__34222.cljs$core$IFn$_invoke$arity$2 = G__34222__2;
return G__34222;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33231 = arguments.length;
switch (G__33231) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34221(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34221(p,v);
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
cljs.core.async.t_cljs$core$async33235 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33236){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33236 = meta33236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33237,meta33236__$1){
var self__ = this;
var _33237__$1 = this;
return (new cljs.core.async.t_cljs$core$async33235(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33236__$1));
}));

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33237){
var self__ = this;
var _33237__$1 = this;
return self__.meta33236;
}));

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33236","meta33236",1810752470,null)], null);
}));

(cljs.core.async.t_cljs$core$async33235.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33235");

(cljs.core.async.t_cljs$core$async33235.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33235");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33235.
 */
cljs.core.async.__GT_t_cljs$core$async33235 = (function cljs$core$async$__GT_t_cljs$core$async33235(ch,topic_fn,buf_fn,mults,ensure_mult,meta33236){
return (new cljs.core.async.t_cljs$core$async33235(ch,topic_fn,buf_fn,mults,ensure_mult,meta33236));
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
var G__33234 = arguments.length;
switch (G__33234) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33232_SHARP_){
if(cljs.core.truth_((p1__33232_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33232_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33232_SHARP_.call(null,topic)))){
return p1__33232_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33232_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33235(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32417__auto___34225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_33309){
var state_val_33310 = (state_33309[(1)]);
if((state_val_33310 === (7))){
var inst_33305 = (state_33309[(2)]);
var state_33309__$1 = state_33309;
var statearr_33311_34229 = state_33309__$1;
(statearr_33311_34229[(2)] = inst_33305);

(statearr_33311_34229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (20))){
var state_33309__$1 = state_33309;
var statearr_33312_34230 = state_33309__$1;
(statearr_33312_34230[(2)] = null);

(statearr_33312_34230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (1))){
var state_33309__$1 = state_33309;
var statearr_33313_34231 = state_33309__$1;
(statearr_33313_34231[(2)] = null);

(statearr_33313_34231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (24))){
var inst_33288 = (state_33309[(7)]);
var inst_33297 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33288);
var state_33309__$1 = state_33309;
var statearr_33314_34232 = state_33309__$1;
(statearr_33314_34232[(2)] = inst_33297);

(statearr_33314_34232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (4))){
var inst_33240 = (state_33309[(8)]);
var inst_33240__$1 = (state_33309[(2)]);
var inst_33241 = (inst_33240__$1 == null);
var state_33309__$1 = (function (){var statearr_33315 = state_33309;
(statearr_33315[(8)] = inst_33240__$1);

return statearr_33315;
})();
if(cljs.core.truth_(inst_33241)){
var statearr_33316_34233 = state_33309__$1;
(statearr_33316_34233[(1)] = (5));

} else {
var statearr_33317_34234 = state_33309__$1;
(statearr_33317_34234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (15))){
var inst_33282 = (state_33309[(2)]);
var state_33309__$1 = state_33309;
var statearr_33318_34235 = state_33309__$1;
(statearr_33318_34235[(2)] = inst_33282);

(statearr_33318_34235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (21))){
var inst_33302 = (state_33309[(2)]);
var state_33309__$1 = (function (){var statearr_33319 = state_33309;
(statearr_33319[(9)] = inst_33302);

return statearr_33319;
})();
var statearr_33320_34236 = state_33309__$1;
(statearr_33320_34236[(2)] = null);

(statearr_33320_34236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (13))){
var inst_33264 = (state_33309[(10)]);
var inst_33266 = cljs.core.chunked_seq_QMARK_(inst_33264);
var state_33309__$1 = state_33309;
if(inst_33266){
var statearr_33321_34237 = state_33309__$1;
(statearr_33321_34237[(1)] = (16));

} else {
var statearr_33322_34238 = state_33309__$1;
(statearr_33322_34238[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (22))){
var inst_33294 = (state_33309[(2)]);
var state_33309__$1 = state_33309;
if(cljs.core.truth_(inst_33294)){
var statearr_33323_34239 = state_33309__$1;
(statearr_33323_34239[(1)] = (23));

} else {
var statearr_33324_34240 = state_33309__$1;
(statearr_33324_34240[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (6))){
var inst_33240 = (state_33309[(8)]);
var inst_33288 = (state_33309[(7)]);
var inst_33290 = (state_33309[(11)]);
var inst_33288__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33240) : topic_fn.call(null,inst_33240));
var inst_33289 = cljs.core.deref(mults);
var inst_33290__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33289,inst_33288__$1);
var state_33309__$1 = (function (){var statearr_33325 = state_33309;
(statearr_33325[(7)] = inst_33288__$1);

(statearr_33325[(11)] = inst_33290__$1);

return statearr_33325;
})();
if(cljs.core.truth_(inst_33290__$1)){
var statearr_33326_34241 = state_33309__$1;
(statearr_33326_34241[(1)] = (19));

} else {
var statearr_33327_34242 = state_33309__$1;
(statearr_33327_34242[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (25))){
var inst_33299 = (state_33309[(2)]);
var state_33309__$1 = state_33309;
var statearr_33328_34243 = state_33309__$1;
(statearr_33328_34243[(2)] = inst_33299);

(statearr_33328_34243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (17))){
var inst_33264 = (state_33309[(10)]);
var inst_33273 = cljs.core.first(inst_33264);
var inst_33274 = cljs.core.async.muxch_STAR_(inst_33273);
var inst_33275 = cljs.core.async.close_BANG_(inst_33274);
var inst_33276 = cljs.core.next(inst_33264);
var inst_33250 = inst_33276;
var inst_33251 = null;
var inst_33252 = (0);
var inst_33253 = (0);
var state_33309__$1 = (function (){var statearr_33329 = state_33309;
(statearr_33329[(12)] = inst_33275);

(statearr_33329[(13)] = inst_33250);

(statearr_33329[(14)] = inst_33251);

(statearr_33329[(15)] = inst_33252);

(statearr_33329[(16)] = inst_33253);

return statearr_33329;
})();
var statearr_33330_34244 = state_33309__$1;
(statearr_33330_34244[(2)] = null);

(statearr_33330_34244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (3))){
var inst_33307 = (state_33309[(2)]);
var state_33309__$1 = state_33309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33309__$1,inst_33307);
} else {
if((state_val_33310 === (12))){
var inst_33284 = (state_33309[(2)]);
var state_33309__$1 = state_33309;
var statearr_33331_34245 = state_33309__$1;
(statearr_33331_34245[(2)] = inst_33284);

(statearr_33331_34245[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (2))){
var state_33309__$1 = state_33309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33309__$1,(4),ch);
} else {
if((state_val_33310 === (23))){
var state_33309__$1 = state_33309;
var statearr_33332_34246 = state_33309__$1;
(statearr_33332_34246[(2)] = null);

(statearr_33332_34246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (19))){
var inst_33290 = (state_33309[(11)]);
var inst_33240 = (state_33309[(8)]);
var inst_33292 = cljs.core.async.muxch_STAR_(inst_33290);
var state_33309__$1 = state_33309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33309__$1,(22),inst_33292,inst_33240);
} else {
if((state_val_33310 === (11))){
var inst_33250 = (state_33309[(13)]);
var inst_33264 = (state_33309[(10)]);
var inst_33264__$1 = cljs.core.seq(inst_33250);
var state_33309__$1 = (function (){var statearr_33333 = state_33309;
(statearr_33333[(10)] = inst_33264__$1);

return statearr_33333;
})();
if(inst_33264__$1){
var statearr_33334_34247 = state_33309__$1;
(statearr_33334_34247[(1)] = (13));

} else {
var statearr_33335_34248 = state_33309__$1;
(statearr_33335_34248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (9))){
var inst_33286 = (state_33309[(2)]);
var state_33309__$1 = state_33309;
var statearr_33336_34249 = state_33309__$1;
(statearr_33336_34249[(2)] = inst_33286);

(statearr_33336_34249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (5))){
var inst_33247 = cljs.core.deref(mults);
var inst_33248 = cljs.core.vals(inst_33247);
var inst_33249 = cljs.core.seq(inst_33248);
var inst_33250 = inst_33249;
var inst_33251 = null;
var inst_33252 = (0);
var inst_33253 = (0);
var state_33309__$1 = (function (){var statearr_33337 = state_33309;
(statearr_33337[(13)] = inst_33250);

(statearr_33337[(14)] = inst_33251);

(statearr_33337[(15)] = inst_33252);

(statearr_33337[(16)] = inst_33253);

return statearr_33337;
})();
var statearr_33338_34250 = state_33309__$1;
(statearr_33338_34250[(2)] = null);

(statearr_33338_34250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (14))){
var state_33309__$1 = state_33309;
var statearr_33342_34251 = state_33309__$1;
(statearr_33342_34251[(2)] = null);

(statearr_33342_34251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (16))){
var inst_33264 = (state_33309[(10)]);
var inst_33268 = cljs.core.chunk_first(inst_33264);
var inst_33269 = cljs.core.chunk_rest(inst_33264);
var inst_33270 = cljs.core.count(inst_33268);
var inst_33250 = inst_33269;
var inst_33251 = inst_33268;
var inst_33252 = inst_33270;
var inst_33253 = (0);
var state_33309__$1 = (function (){var statearr_33343 = state_33309;
(statearr_33343[(13)] = inst_33250);

(statearr_33343[(14)] = inst_33251);

(statearr_33343[(15)] = inst_33252);

(statearr_33343[(16)] = inst_33253);

return statearr_33343;
})();
var statearr_33344_34252 = state_33309__$1;
(statearr_33344_34252[(2)] = null);

(statearr_33344_34252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (10))){
var inst_33251 = (state_33309[(14)]);
var inst_33253 = (state_33309[(16)]);
var inst_33250 = (state_33309[(13)]);
var inst_33252 = (state_33309[(15)]);
var inst_33258 = cljs.core._nth(inst_33251,inst_33253);
var inst_33259 = cljs.core.async.muxch_STAR_(inst_33258);
var inst_33260 = cljs.core.async.close_BANG_(inst_33259);
var inst_33261 = (inst_33253 + (1));
var tmp33339 = inst_33251;
var tmp33340 = inst_33250;
var tmp33341 = inst_33252;
var inst_33250__$1 = tmp33340;
var inst_33251__$1 = tmp33339;
var inst_33252__$1 = tmp33341;
var inst_33253__$1 = inst_33261;
var state_33309__$1 = (function (){var statearr_33345 = state_33309;
(statearr_33345[(17)] = inst_33260);

(statearr_33345[(13)] = inst_33250__$1);

(statearr_33345[(14)] = inst_33251__$1);

(statearr_33345[(15)] = inst_33252__$1);

(statearr_33345[(16)] = inst_33253__$1);

return statearr_33345;
})();
var statearr_33346_34253 = state_33309__$1;
(statearr_33346_34253[(2)] = null);

(statearr_33346_34253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (18))){
var inst_33279 = (state_33309[(2)]);
var state_33309__$1 = state_33309;
var statearr_33347_34254 = state_33309__$1;
(statearr_33347_34254[(2)] = inst_33279);

(statearr_33347_34254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33310 === (8))){
var inst_33253 = (state_33309[(16)]);
var inst_33252 = (state_33309[(15)]);
var inst_33255 = (inst_33253 < inst_33252);
var inst_33256 = inst_33255;
var state_33309__$1 = state_33309;
if(cljs.core.truth_(inst_33256)){
var statearr_33348_34255 = state_33309__$1;
(statearr_33348_34255[(1)] = (10));

} else {
var statearr_33349_34256 = state_33309__$1;
(statearr_33349_34256[(1)] = (11));

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
var cljs$core$async$state_machine__32347__auto__ = null;
var cljs$core$async$state_machine__32347__auto____0 = (function (){
var statearr_33350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33350[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33350[(1)] = (1));

return statearr_33350;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33309){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33309);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33351){var ex__32350__auto__ = e33351;
var statearr_33352_34257 = state_33309;
(statearr_33352_34257[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33309[(4)]))){
var statearr_33353_34258 = state_33309;
(statearr_33353_34258[(1)] = cljs.core.first((state_33309[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34260 = state_33309;
state_33309 = G__34260;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_33354 = f__32418__auto__();
(statearr_33354[(6)] = c__32417__auto___34225);

return statearr_33354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
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
var G__33356 = arguments.length;
switch (G__33356) {
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
var G__33358 = arguments.length;
switch (G__33358) {
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
var G__33360 = arguments.length;
switch (G__33360) {
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
var c__32417__auto___34264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_33403){
var state_val_33404 = (state_33403[(1)]);
if((state_val_33404 === (7))){
var state_33403__$1 = state_33403;
var statearr_33405_34265 = state_33403__$1;
(statearr_33405_34265[(2)] = null);

(statearr_33405_34265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (1))){
var state_33403__$1 = state_33403;
var statearr_33406_34266 = state_33403__$1;
(statearr_33406_34266[(2)] = null);

(statearr_33406_34266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (4))){
var inst_33364 = (state_33403[(7)]);
var inst_33363 = (state_33403[(8)]);
var inst_33366 = (inst_33364 < inst_33363);
var state_33403__$1 = state_33403;
if(cljs.core.truth_(inst_33366)){
var statearr_33407_34267 = state_33403__$1;
(statearr_33407_34267[(1)] = (6));

} else {
var statearr_33408_34268 = state_33403__$1;
(statearr_33408_34268[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (15))){
var inst_33389 = (state_33403[(9)]);
var inst_33394 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33389);
var state_33403__$1 = state_33403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33403__$1,(17),out,inst_33394);
} else {
if((state_val_33404 === (13))){
var inst_33389 = (state_33403[(9)]);
var inst_33389__$1 = (state_33403[(2)]);
var inst_33390 = cljs.core.some(cljs.core.nil_QMARK_,inst_33389__$1);
var state_33403__$1 = (function (){var statearr_33409 = state_33403;
(statearr_33409[(9)] = inst_33389__$1);

return statearr_33409;
})();
if(cljs.core.truth_(inst_33390)){
var statearr_33410_34270 = state_33403__$1;
(statearr_33410_34270[(1)] = (14));

} else {
var statearr_33411_34271 = state_33403__$1;
(statearr_33411_34271[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (6))){
var state_33403__$1 = state_33403;
var statearr_33412_34272 = state_33403__$1;
(statearr_33412_34272[(2)] = null);

(statearr_33412_34272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (17))){
var inst_33396 = (state_33403[(2)]);
var state_33403__$1 = (function (){var statearr_33414 = state_33403;
(statearr_33414[(10)] = inst_33396);

return statearr_33414;
})();
var statearr_33415_34273 = state_33403__$1;
(statearr_33415_34273[(2)] = null);

(statearr_33415_34273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (3))){
var inst_33401 = (state_33403[(2)]);
var state_33403__$1 = state_33403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33403__$1,inst_33401);
} else {
if((state_val_33404 === (12))){
var _ = (function (){var statearr_33416 = state_33403;
(statearr_33416[(4)] = cljs.core.rest((state_33403[(4)])));

return statearr_33416;
})();
var state_33403__$1 = state_33403;
var ex33413 = (state_33403__$1[(2)]);
var statearr_33417_34274 = state_33403__$1;
(statearr_33417_34274[(5)] = ex33413);


if((ex33413 instanceof Object)){
var statearr_33418_34275 = state_33403__$1;
(statearr_33418_34275[(1)] = (11));

(statearr_33418_34275[(5)] = null);

} else {
throw ex33413;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (2))){
var inst_33362 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33363 = cnt;
var inst_33364 = (0);
var state_33403__$1 = (function (){var statearr_33419 = state_33403;
(statearr_33419[(11)] = inst_33362);

(statearr_33419[(8)] = inst_33363);

(statearr_33419[(7)] = inst_33364);

return statearr_33419;
})();
var statearr_33420_34277 = state_33403__$1;
(statearr_33420_34277[(2)] = null);

(statearr_33420_34277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (11))){
var inst_33368 = (state_33403[(2)]);
var inst_33369 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33403__$1 = (function (){var statearr_33421 = state_33403;
(statearr_33421[(12)] = inst_33368);

return statearr_33421;
})();
var statearr_33422_34278 = state_33403__$1;
(statearr_33422_34278[(2)] = inst_33369);

(statearr_33422_34278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (9))){
var inst_33364 = (state_33403[(7)]);
var _ = (function (){var statearr_33423 = state_33403;
(statearr_33423[(4)] = cljs.core.cons((12),(state_33403[(4)])));

return statearr_33423;
})();
var inst_33375 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33364) : chs__$1.call(null,inst_33364));
var inst_33376 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33364) : done.call(null,inst_33364));
var inst_33377 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33375,inst_33376);
var ___$1 = (function (){var statearr_33424 = state_33403;
(statearr_33424[(4)] = cljs.core.rest((state_33403[(4)])));

return statearr_33424;
})();
var state_33403__$1 = state_33403;
var statearr_33425_34280 = state_33403__$1;
(statearr_33425_34280[(2)] = inst_33377);

(statearr_33425_34280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (5))){
var inst_33387 = (state_33403[(2)]);
var state_33403__$1 = (function (){var statearr_33426 = state_33403;
(statearr_33426[(13)] = inst_33387);

return statearr_33426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33403__$1,(13),dchan);
} else {
if((state_val_33404 === (14))){
var inst_33392 = cljs.core.async.close_BANG_(out);
var state_33403__$1 = state_33403;
var statearr_33427_34281 = state_33403__$1;
(statearr_33427_34281[(2)] = inst_33392);

(statearr_33427_34281[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (16))){
var inst_33399 = (state_33403[(2)]);
var state_33403__$1 = state_33403;
var statearr_33428_34282 = state_33403__$1;
(statearr_33428_34282[(2)] = inst_33399);

(statearr_33428_34282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (10))){
var inst_33364 = (state_33403[(7)]);
var inst_33380 = (state_33403[(2)]);
var inst_33381 = (inst_33364 + (1));
var inst_33364__$1 = inst_33381;
var state_33403__$1 = (function (){var statearr_33429 = state_33403;
(statearr_33429[(14)] = inst_33380);

(statearr_33429[(7)] = inst_33364__$1);

return statearr_33429;
})();
var statearr_33430_34283 = state_33403__$1;
(statearr_33430_34283[(2)] = null);

(statearr_33430_34283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (8))){
var inst_33385 = (state_33403[(2)]);
var state_33403__$1 = state_33403;
var statearr_33431_34284 = state_33403__$1;
(statearr_33431_34284[(2)] = inst_33385);

(statearr_33431_34284[(1)] = (5));


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
var cljs$core$async$state_machine__32347__auto__ = null;
var cljs$core$async$state_machine__32347__auto____0 = (function (){
var statearr_33432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33432[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33432[(1)] = (1));

return statearr_33432;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33403){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33403);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33433){var ex__32350__auto__ = e33433;
var statearr_33434_34285 = state_33403;
(statearr_33434_34285[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33403[(4)]))){
var statearr_33435_34286 = state_33403;
(statearr_33435_34286[(1)] = cljs.core.first((state_33403[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34287 = state_33403;
state_33403 = G__34287;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_33436 = f__32418__auto__();
(statearr_33436[(6)] = c__32417__auto___34264);

return statearr_33436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
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
var G__33439 = arguments.length;
switch (G__33439) {
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
var c__32417__auto___34289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_33471){
var state_val_33472 = (state_33471[(1)]);
if((state_val_33472 === (7))){
var inst_33450 = (state_33471[(7)]);
var inst_33451 = (state_33471[(8)]);
var inst_33450__$1 = (state_33471[(2)]);
var inst_33451__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33450__$1,(0),null);
var inst_33452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33450__$1,(1),null);
var inst_33453 = (inst_33451__$1 == null);
var state_33471__$1 = (function (){var statearr_33473 = state_33471;
(statearr_33473[(7)] = inst_33450__$1);

(statearr_33473[(8)] = inst_33451__$1);

(statearr_33473[(9)] = inst_33452);

return statearr_33473;
})();
if(cljs.core.truth_(inst_33453)){
var statearr_33474_34290 = state_33471__$1;
(statearr_33474_34290[(1)] = (8));

} else {
var statearr_33475_34291 = state_33471__$1;
(statearr_33475_34291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33472 === (1))){
var inst_33440 = cljs.core.vec(chs);
var inst_33441 = inst_33440;
var state_33471__$1 = (function (){var statearr_33476 = state_33471;
(statearr_33476[(10)] = inst_33441);

return statearr_33476;
})();
var statearr_33477_34292 = state_33471__$1;
(statearr_33477_34292[(2)] = null);

(statearr_33477_34292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33472 === (4))){
var inst_33441 = (state_33471[(10)]);
var state_33471__$1 = state_33471;
return cljs.core.async.ioc_alts_BANG_(state_33471__$1,(7),inst_33441);
} else {
if((state_val_33472 === (6))){
var inst_33467 = (state_33471[(2)]);
var state_33471__$1 = state_33471;
var statearr_33478_34293 = state_33471__$1;
(statearr_33478_34293[(2)] = inst_33467);

(statearr_33478_34293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33472 === (3))){
var inst_33469 = (state_33471[(2)]);
var state_33471__$1 = state_33471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33471__$1,inst_33469);
} else {
if((state_val_33472 === (2))){
var inst_33441 = (state_33471[(10)]);
var inst_33443 = cljs.core.count(inst_33441);
var inst_33444 = (inst_33443 > (0));
var state_33471__$1 = state_33471;
if(cljs.core.truth_(inst_33444)){
var statearr_33480_34295 = state_33471__$1;
(statearr_33480_34295[(1)] = (4));

} else {
var statearr_33481_34296 = state_33471__$1;
(statearr_33481_34296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33472 === (11))){
var inst_33441 = (state_33471[(10)]);
var inst_33460 = (state_33471[(2)]);
var tmp33479 = inst_33441;
var inst_33441__$1 = tmp33479;
var state_33471__$1 = (function (){var statearr_33482 = state_33471;
(statearr_33482[(11)] = inst_33460);

(statearr_33482[(10)] = inst_33441__$1);

return statearr_33482;
})();
var statearr_33483_34298 = state_33471__$1;
(statearr_33483_34298[(2)] = null);

(statearr_33483_34298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33472 === (9))){
var inst_33451 = (state_33471[(8)]);
var state_33471__$1 = state_33471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33471__$1,(11),out,inst_33451);
} else {
if((state_val_33472 === (5))){
var inst_33465 = cljs.core.async.close_BANG_(out);
var state_33471__$1 = state_33471;
var statearr_33484_34299 = state_33471__$1;
(statearr_33484_34299[(2)] = inst_33465);

(statearr_33484_34299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33472 === (10))){
var inst_33463 = (state_33471[(2)]);
var state_33471__$1 = state_33471;
var statearr_33485_34300 = state_33471__$1;
(statearr_33485_34300[(2)] = inst_33463);

(statearr_33485_34300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33472 === (8))){
var inst_33441 = (state_33471[(10)]);
var inst_33450 = (state_33471[(7)]);
var inst_33451 = (state_33471[(8)]);
var inst_33452 = (state_33471[(9)]);
var inst_33455 = (function (){var cs = inst_33441;
var vec__33446 = inst_33450;
var v = inst_33451;
var c = inst_33452;
return (function (p1__33437_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33437_SHARP_);
});
})();
var inst_33456 = cljs.core.filterv(inst_33455,inst_33441);
var inst_33441__$1 = inst_33456;
var state_33471__$1 = (function (){var statearr_33486 = state_33471;
(statearr_33486[(10)] = inst_33441__$1);

return statearr_33486;
})();
var statearr_33487_34301 = state_33471__$1;
(statearr_33487_34301[(2)] = null);

(statearr_33487_34301[(1)] = (2));


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
var cljs$core$async$state_machine__32347__auto__ = null;
var cljs$core$async$state_machine__32347__auto____0 = (function (){
var statearr_33488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33488[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33488[(1)] = (1));

return statearr_33488;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33471){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33471);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33489){var ex__32350__auto__ = e33489;
var statearr_33490_34302 = state_33471;
(statearr_33490_34302[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33471[(4)]))){
var statearr_33491_34303 = state_33471;
(statearr_33491_34303[(1)] = cljs.core.first((state_33471[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34304 = state_33471;
state_33471 = G__34304;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_33492 = f__32418__auto__();
(statearr_33492[(6)] = c__32417__auto___34289);

return statearr_33492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
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
var G__33494 = arguments.length;
switch (G__33494) {
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
var c__32417__auto___34306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_33518){
var state_val_33519 = (state_33518[(1)]);
if((state_val_33519 === (7))){
var inst_33500 = (state_33518[(7)]);
var inst_33500__$1 = (state_33518[(2)]);
var inst_33501 = (inst_33500__$1 == null);
var inst_33502 = cljs.core.not(inst_33501);
var state_33518__$1 = (function (){var statearr_33520 = state_33518;
(statearr_33520[(7)] = inst_33500__$1);

return statearr_33520;
})();
if(inst_33502){
var statearr_33521_34307 = state_33518__$1;
(statearr_33521_34307[(1)] = (8));

} else {
var statearr_33522_34308 = state_33518__$1;
(statearr_33522_34308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (1))){
var inst_33495 = (0);
var state_33518__$1 = (function (){var statearr_33523 = state_33518;
(statearr_33523[(8)] = inst_33495);

return statearr_33523;
})();
var statearr_33524_34309 = state_33518__$1;
(statearr_33524_34309[(2)] = null);

(statearr_33524_34309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (4))){
var state_33518__$1 = state_33518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33518__$1,(7),ch);
} else {
if((state_val_33519 === (6))){
var inst_33513 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
var statearr_33525_34310 = state_33518__$1;
(statearr_33525_34310[(2)] = inst_33513);

(statearr_33525_34310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (3))){
var inst_33515 = (state_33518[(2)]);
var inst_33516 = cljs.core.async.close_BANG_(out);
var state_33518__$1 = (function (){var statearr_33526 = state_33518;
(statearr_33526[(9)] = inst_33515);

return statearr_33526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33518__$1,inst_33516);
} else {
if((state_val_33519 === (2))){
var inst_33495 = (state_33518[(8)]);
var inst_33497 = (inst_33495 < n);
var state_33518__$1 = state_33518;
if(cljs.core.truth_(inst_33497)){
var statearr_33527_34311 = state_33518__$1;
(statearr_33527_34311[(1)] = (4));

} else {
var statearr_33528_34312 = state_33518__$1;
(statearr_33528_34312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (11))){
var inst_33495 = (state_33518[(8)]);
var inst_33505 = (state_33518[(2)]);
var inst_33506 = (inst_33495 + (1));
var inst_33495__$1 = inst_33506;
var state_33518__$1 = (function (){var statearr_33529 = state_33518;
(statearr_33529[(10)] = inst_33505);

(statearr_33529[(8)] = inst_33495__$1);

return statearr_33529;
})();
var statearr_33530_34314 = state_33518__$1;
(statearr_33530_34314[(2)] = null);

(statearr_33530_34314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (9))){
var state_33518__$1 = state_33518;
var statearr_33531_34315 = state_33518__$1;
(statearr_33531_34315[(2)] = null);

(statearr_33531_34315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (5))){
var state_33518__$1 = state_33518;
var statearr_33532_34316 = state_33518__$1;
(statearr_33532_34316[(2)] = null);

(statearr_33532_34316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (10))){
var inst_33510 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
var statearr_33533_34317 = state_33518__$1;
(statearr_33533_34317[(2)] = inst_33510);

(statearr_33533_34317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (8))){
var inst_33500 = (state_33518[(7)]);
var state_33518__$1 = state_33518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33518__$1,(11),out,inst_33500);
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
var cljs$core$async$state_machine__32347__auto__ = null;
var cljs$core$async$state_machine__32347__auto____0 = (function (){
var statearr_33534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33534[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33534[(1)] = (1));

return statearr_33534;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33518){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33518);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33535){var ex__32350__auto__ = e33535;
var statearr_33536_34318 = state_33518;
(statearr_33536_34318[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33518[(4)]))){
var statearr_33537_34319 = state_33518;
(statearr_33537_34319[(1)] = cljs.core.first((state_33518[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34320 = state_33518;
state_33518 = G__34320;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_33538 = f__32418__auto__();
(statearr_33538[(6)] = c__32417__auto___34306);

return statearr_33538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
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
cljs.core.async.t_cljs$core$async33543 = (function (f,ch,meta33541,_,fn1,meta33544){
this.f = f;
this.ch = ch;
this.meta33541 = meta33541;
this._ = _;
this.fn1 = fn1;
this.meta33544 = meta33544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33545,meta33544__$1){
var self__ = this;
var _33545__$1 = this;
return (new cljs.core.async.t_cljs$core$async33543(self__.f,self__.ch,self__.meta33541,self__._,self__.fn1,meta33544__$1));
}));

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33545){
var self__ = this;
var _33545__$1 = this;
return self__.meta33544;
}));

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33539_SHARP_){
var G__33546 = (((p1__33539_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33539_SHARP_) : self__.f.call(null,p1__33539_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33546) : f1.call(null,G__33546));
});
}));

(cljs.core.async.t_cljs$core$async33543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33541","meta33541",-1478113748,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33540","cljs.core.async/t_cljs$core$async33540",-682488591,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33544","meta33544",-1716153553,null)], null);
}));

(cljs.core.async.t_cljs$core$async33543.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33543");

(cljs.core.async.t_cljs$core$async33543.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33543");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33543.
 */
cljs.core.async.__GT_t_cljs$core$async33543 = (function cljs$core$async$__GT_t_cljs$core$async33543(f,ch,meta33541,_,fn1,meta33544){
return (new cljs.core.async.t_cljs$core$async33543(f,ch,meta33541,_,fn1,meta33544));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33540 = (function (f,ch,meta33541){
this.f = f;
this.ch = ch;
this.meta33541 = meta33541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33542,meta33541__$1){
var self__ = this;
var _33542__$1 = this;
return (new cljs.core.async.t_cljs$core$async33540(self__.f,self__.ch,meta33541__$1));
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33542){
var self__ = this;
var _33542__$1 = this;
return self__.meta33541;
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33543(self__.f,self__.ch,self__.meta33541,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33547 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33547) : self__.f.call(null,G__33547));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33541","meta33541",-1478113748,null)], null);
}));

(cljs.core.async.t_cljs$core$async33540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33540");

(cljs.core.async.t_cljs$core$async33540.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33540.
 */
cljs.core.async.__GT_t_cljs$core$async33540 = (function cljs$core$async$__GT_t_cljs$core$async33540(f,ch,meta33541){
return (new cljs.core.async.t_cljs$core$async33540(f,ch,meta33541));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33540(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33548 = (function (f,ch,meta33549){
this.f = f;
this.ch = ch;
this.meta33549 = meta33549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33550,meta33549__$1){
var self__ = this;
var _33550__$1 = this;
return (new cljs.core.async.t_cljs$core$async33548(self__.f,self__.ch,meta33549__$1));
}));

(cljs.core.async.t_cljs$core$async33548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33550){
var self__ = this;
var _33550__$1 = this;
return self__.meta33549;
}));

(cljs.core.async.t_cljs$core$async33548.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33548.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33548.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33549","meta33549",1235387214,null)], null);
}));

(cljs.core.async.t_cljs$core$async33548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33548");

(cljs.core.async.t_cljs$core$async33548.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33548.
 */
cljs.core.async.__GT_t_cljs$core$async33548 = (function cljs$core$async$__GT_t_cljs$core$async33548(f,ch,meta33549){
return (new cljs.core.async.t_cljs$core$async33548(f,ch,meta33549));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33548(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33551 = (function (p,ch,meta33552){
this.p = p;
this.ch = ch;
this.meta33552 = meta33552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33553,meta33552__$1){
var self__ = this;
var _33553__$1 = this;
return (new cljs.core.async.t_cljs$core$async33551(self__.p,self__.ch,meta33552__$1));
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33553){
var self__ = this;
var _33553__$1 = this;
return self__.meta33552;
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33552","meta33552",1247034604,null)], null);
}));

(cljs.core.async.t_cljs$core$async33551.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33551");

(cljs.core.async.t_cljs$core$async33551.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33551");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33551.
 */
cljs.core.async.__GT_t_cljs$core$async33551 = (function cljs$core$async$__GT_t_cljs$core$async33551(p,ch,meta33552){
return (new cljs.core.async.t_cljs$core$async33551(p,ch,meta33552));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33551(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33555 = arguments.length;
switch (G__33555) {
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
var c__32417__auto___34323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_33576){
var state_val_33577 = (state_33576[(1)]);
if((state_val_33577 === (7))){
var inst_33572 = (state_33576[(2)]);
var state_33576__$1 = state_33576;
var statearr_33578_34325 = state_33576__$1;
(statearr_33578_34325[(2)] = inst_33572);

(statearr_33578_34325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (1))){
var state_33576__$1 = state_33576;
var statearr_33579_34326 = state_33576__$1;
(statearr_33579_34326[(2)] = null);

(statearr_33579_34326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (4))){
var inst_33558 = (state_33576[(7)]);
var inst_33558__$1 = (state_33576[(2)]);
var inst_33559 = (inst_33558__$1 == null);
var state_33576__$1 = (function (){var statearr_33580 = state_33576;
(statearr_33580[(7)] = inst_33558__$1);

return statearr_33580;
})();
if(cljs.core.truth_(inst_33559)){
var statearr_33581_34328 = state_33576__$1;
(statearr_33581_34328[(1)] = (5));

} else {
var statearr_33582_34330 = state_33576__$1;
(statearr_33582_34330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (6))){
var inst_33558 = (state_33576[(7)]);
var inst_33563 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33558) : p.call(null,inst_33558));
var state_33576__$1 = state_33576;
if(cljs.core.truth_(inst_33563)){
var statearr_33583_34331 = state_33576__$1;
(statearr_33583_34331[(1)] = (8));

} else {
var statearr_33584_34332 = state_33576__$1;
(statearr_33584_34332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (3))){
var inst_33574 = (state_33576[(2)]);
var state_33576__$1 = state_33576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33576__$1,inst_33574);
} else {
if((state_val_33577 === (2))){
var state_33576__$1 = state_33576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33576__$1,(4),ch);
} else {
if((state_val_33577 === (11))){
var inst_33566 = (state_33576[(2)]);
var state_33576__$1 = state_33576;
var statearr_33585_34333 = state_33576__$1;
(statearr_33585_34333[(2)] = inst_33566);

(statearr_33585_34333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (9))){
var state_33576__$1 = state_33576;
var statearr_33586_34334 = state_33576__$1;
(statearr_33586_34334[(2)] = null);

(statearr_33586_34334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (5))){
var inst_33561 = cljs.core.async.close_BANG_(out);
var state_33576__$1 = state_33576;
var statearr_33587_34335 = state_33576__$1;
(statearr_33587_34335[(2)] = inst_33561);

(statearr_33587_34335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (10))){
var inst_33569 = (state_33576[(2)]);
var state_33576__$1 = (function (){var statearr_33588 = state_33576;
(statearr_33588[(8)] = inst_33569);

return statearr_33588;
})();
var statearr_33589_34336 = state_33576__$1;
(statearr_33589_34336[(2)] = null);

(statearr_33589_34336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33577 === (8))){
var inst_33558 = (state_33576[(7)]);
var state_33576__$1 = state_33576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33576__$1,(11),out,inst_33558);
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
var cljs$core$async$state_machine__32347__auto__ = null;
var cljs$core$async$state_machine__32347__auto____0 = (function (){
var statearr_33590 = [null,null,null,null,null,null,null,null,null];
(statearr_33590[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33590[(1)] = (1));

return statearr_33590;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33576){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33576);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33591){var ex__32350__auto__ = e33591;
var statearr_33592_34337 = state_33576;
(statearr_33592_34337[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33576[(4)]))){
var statearr_33593_34338 = state_33576;
(statearr_33593_34338[(1)] = cljs.core.first((state_33576[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34339 = state_33576;
state_33576 = G__34339;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_33594 = f__32418__auto__();
(statearr_33594[(6)] = c__32417__auto___34323);

return statearr_33594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33596 = arguments.length;
switch (G__33596) {
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
var c__32417__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_33658){
var state_val_33659 = (state_33658[(1)]);
if((state_val_33659 === (7))){
var inst_33654 = (state_33658[(2)]);
var state_33658__$1 = state_33658;
var statearr_33660_34341 = state_33658__$1;
(statearr_33660_34341[(2)] = inst_33654);

(statearr_33660_34341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (20))){
var inst_33624 = (state_33658[(7)]);
var inst_33635 = (state_33658[(2)]);
var inst_33636 = cljs.core.next(inst_33624);
var inst_33610 = inst_33636;
var inst_33611 = null;
var inst_33612 = (0);
var inst_33613 = (0);
var state_33658__$1 = (function (){var statearr_33661 = state_33658;
(statearr_33661[(8)] = inst_33635);

(statearr_33661[(9)] = inst_33610);

(statearr_33661[(10)] = inst_33611);

(statearr_33661[(11)] = inst_33612);

(statearr_33661[(12)] = inst_33613);

return statearr_33661;
})();
var statearr_33662_34342 = state_33658__$1;
(statearr_33662_34342[(2)] = null);

(statearr_33662_34342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (1))){
var state_33658__$1 = state_33658;
var statearr_33663_34343 = state_33658__$1;
(statearr_33663_34343[(2)] = null);

(statearr_33663_34343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (4))){
var inst_33599 = (state_33658[(13)]);
var inst_33599__$1 = (state_33658[(2)]);
var inst_33600 = (inst_33599__$1 == null);
var state_33658__$1 = (function (){var statearr_33664 = state_33658;
(statearr_33664[(13)] = inst_33599__$1);

return statearr_33664;
})();
if(cljs.core.truth_(inst_33600)){
var statearr_33665_34344 = state_33658__$1;
(statearr_33665_34344[(1)] = (5));

} else {
var statearr_33666_34345 = state_33658__$1;
(statearr_33666_34345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (15))){
var state_33658__$1 = state_33658;
var statearr_33670_34346 = state_33658__$1;
(statearr_33670_34346[(2)] = null);

(statearr_33670_34346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (21))){
var state_33658__$1 = state_33658;
var statearr_33671_34347 = state_33658__$1;
(statearr_33671_34347[(2)] = null);

(statearr_33671_34347[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (13))){
var inst_33613 = (state_33658[(12)]);
var inst_33610 = (state_33658[(9)]);
var inst_33611 = (state_33658[(10)]);
var inst_33612 = (state_33658[(11)]);
var inst_33620 = (state_33658[(2)]);
var inst_33621 = (inst_33613 + (1));
var tmp33667 = inst_33610;
var tmp33668 = inst_33611;
var tmp33669 = inst_33612;
var inst_33610__$1 = tmp33667;
var inst_33611__$1 = tmp33668;
var inst_33612__$1 = tmp33669;
var inst_33613__$1 = inst_33621;
var state_33658__$1 = (function (){var statearr_33672 = state_33658;
(statearr_33672[(14)] = inst_33620);

(statearr_33672[(9)] = inst_33610__$1);

(statearr_33672[(10)] = inst_33611__$1);

(statearr_33672[(11)] = inst_33612__$1);

(statearr_33672[(12)] = inst_33613__$1);

return statearr_33672;
})();
var statearr_33673_34348 = state_33658__$1;
(statearr_33673_34348[(2)] = null);

(statearr_33673_34348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (22))){
var state_33658__$1 = state_33658;
var statearr_33674_34349 = state_33658__$1;
(statearr_33674_34349[(2)] = null);

(statearr_33674_34349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (6))){
var inst_33599 = (state_33658[(13)]);
var inst_33608 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33599) : f.call(null,inst_33599));
var inst_33609 = cljs.core.seq(inst_33608);
var inst_33610 = inst_33609;
var inst_33611 = null;
var inst_33612 = (0);
var inst_33613 = (0);
var state_33658__$1 = (function (){var statearr_33675 = state_33658;
(statearr_33675[(9)] = inst_33610);

(statearr_33675[(10)] = inst_33611);

(statearr_33675[(11)] = inst_33612);

(statearr_33675[(12)] = inst_33613);

return statearr_33675;
})();
var statearr_33676_34350 = state_33658__$1;
(statearr_33676_34350[(2)] = null);

(statearr_33676_34350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (17))){
var inst_33624 = (state_33658[(7)]);
var inst_33628 = cljs.core.chunk_first(inst_33624);
var inst_33629 = cljs.core.chunk_rest(inst_33624);
var inst_33630 = cljs.core.count(inst_33628);
var inst_33610 = inst_33629;
var inst_33611 = inst_33628;
var inst_33612 = inst_33630;
var inst_33613 = (0);
var state_33658__$1 = (function (){var statearr_33677 = state_33658;
(statearr_33677[(9)] = inst_33610);

(statearr_33677[(10)] = inst_33611);

(statearr_33677[(11)] = inst_33612);

(statearr_33677[(12)] = inst_33613);

return statearr_33677;
})();
var statearr_33678_34351 = state_33658__$1;
(statearr_33678_34351[(2)] = null);

(statearr_33678_34351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (3))){
var inst_33656 = (state_33658[(2)]);
var state_33658__$1 = state_33658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33658__$1,inst_33656);
} else {
if((state_val_33659 === (12))){
var inst_33644 = (state_33658[(2)]);
var state_33658__$1 = state_33658;
var statearr_33679_34352 = state_33658__$1;
(statearr_33679_34352[(2)] = inst_33644);

(statearr_33679_34352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (2))){
var state_33658__$1 = state_33658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33658__$1,(4),in$);
} else {
if((state_val_33659 === (23))){
var inst_33652 = (state_33658[(2)]);
var state_33658__$1 = state_33658;
var statearr_33680_34354 = state_33658__$1;
(statearr_33680_34354[(2)] = inst_33652);

(statearr_33680_34354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (19))){
var inst_33639 = (state_33658[(2)]);
var state_33658__$1 = state_33658;
var statearr_33681_34356 = state_33658__$1;
(statearr_33681_34356[(2)] = inst_33639);

(statearr_33681_34356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (11))){
var inst_33610 = (state_33658[(9)]);
var inst_33624 = (state_33658[(7)]);
var inst_33624__$1 = cljs.core.seq(inst_33610);
var state_33658__$1 = (function (){var statearr_33682 = state_33658;
(statearr_33682[(7)] = inst_33624__$1);

return statearr_33682;
})();
if(inst_33624__$1){
var statearr_33683_34357 = state_33658__$1;
(statearr_33683_34357[(1)] = (14));

} else {
var statearr_33684_34358 = state_33658__$1;
(statearr_33684_34358[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (9))){
var inst_33646 = (state_33658[(2)]);
var inst_33647 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33658__$1 = (function (){var statearr_33685 = state_33658;
(statearr_33685[(15)] = inst_33646);

return statearr_33685;
})();
if(cljs.core.truth_(inst_33647)){
var statearr_33686_34359 = state_33658__$1;
(statearr_33686_34359[(1)] = (21));

} else {
var statearr_33687_34360 = state_33658__$1;
(statearr_33687_34360[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (5))){
var inst_33602 = cljs.core.async.close_BANG_(out);
var state_33658__$1 = state_33658;
var statearr_33688_34361 = state_33658__$1;
(statearr_33688_34361[(2)] = inst_33602);

(statearr_33688_34361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (14))){
var inst_33624 = (state_33658[(7)]);
var inst_33626 = cljs.core.chunked_seq_QMARK_(inst_33624);
var state_33658__$1 = state_33658;
if(inst_33626){
var statearr_33689_34362 = state_33658__$1;
(statearr_33689_34362[(1)] = (17));

} else {
var statearr_33690_34363 = state_33658__$1;
(statearr_33690_34363[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (16))){
var inst_33642 = (state_33658[(2)]);
var state_33658__$1 = state_33658;
var statearr_33691_34364 = state_33658__$1;
(statearr_33691_34364[(2)] = inst_33642);

(statearr_33691_34364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (10))){
var inst_33611 = (state_33658[(10)]);
var inst_33613 = (state_33658[(12)]);
var inst_33618 = cljs.core._nth(inst_33611,inst_33613);
var state_33658__$1 = state_33658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33658__$1,(13),out,inst_33618);
} else {
if((state_val_33659 === (18))){
var inst_33624 = (state_33658[(7)]);
var inst_33633 = cljs.core.first(inst_33624);
var state_33658__$1 = state_33658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33658__$1,(20),out,inst_33633);
} else {
if((state_val_33659 === (8))){
var inst_33613 = (state_33658[(12)]);
var inst_33612 = (state_33658[(11)]);
var inst_33615 = (inst_33613 < inst_33612);
var inst_33616 = inst_33615;
var state_33658__$1 = state_33658;
if(cljs.core.truth_(inst_33616)){
var statearr_33692_34365 = state_33658__$1;
(statearr_33692_34365[(1)] = (10));

} else {
var statearr_33693_34366 = state_33658__$1;
(statearr_33693_34366[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32347__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32347__auto____0 = (function (){
var statearr_33694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33694[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32347__auto__);

(statearr_33694[(1)] = (1));

return statearr_33694;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32347__auto____1 = (function (state_33658){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33658);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33695){var ex__32350__auto__ = e33695;
var statearr_33696_34367 = state_33658;
(statearr_33696_34367[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33658[(4)]))){
var statearr_33697_34368 = state_33658;
(statearr_33697_34368[(1)] = cljs.core.first((state_33658[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34372 = state_33658;
state_33658 = G__34372;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32347__auto__ = function(state_33658){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32347__auto____1.call(this,state_33658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32347__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_33698 = f__32418__auto__();
(statearr_33698[(6)] = c__32417__auto__);

return statearr_33698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));

return c__32417__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33700 = arguments.length;
switch (G__33700) {
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
var G__33702 = arguments.length;
switch (G__33702) {
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
var G__33704 = arguments.length;
switch (G__33704) {
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
var c__32417__auto___34376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_33728){
var state_val_33729 = (state_33728[(1)]);
if((state_val_33729 === (7))){
var inst_33723 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33730_34377 = state_33728__$1;
(statearr_33730_34377[(2)] = inst_33723);

(statearr_33730_34377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (1))){
var inst_33705 = null;
var state_33728__$1 = (function (){var statearr_33731 = state_33728;
(statearr_33731[(7)] = inst_33705);

return statearr_33731;
})();
var statearr_33732_34378 = state_33728__$1;
(statearr_33732_34378[(2)] = null);

(statearr_33732_34378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (4))){
var inst_33708 = (state_33728[(8)]);
var inst_33708__$1 = (state_33728[(2)]);
var inst_33709 = (inst_33708__$1 == null);
var inst_33710 = cljs.core.not(inst_33709);
var state_33728__$1 = (function (){var statearr_33733 = state_33728;
(statearr_33733[(8)] = inst_33708__$1);

return statearr_33733;
})();
if(inst_33710){
var statearr_33734_34379 = state_33728__$1;
(statearr_33734_34379[(1)] = (5));

} else {
var statearr_33735_34380 = state_33728__$1;
(statearr_33735_34380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (6))){
var state_33728__$1 = state_33728;
var statearr_33736_34381 = state_33728__$1;
(statearr_33736_34381[(2)] = null);

(statearr_33736_34381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (3))){
var inst_33725 = (state_33728[(2)]);
var inst_33726 = cljs.core.async.close_BANG_(out);
var state_33728__$1 = (function (){var statearr_33737 = state_33728;
(statearr_33737[(9)] = inst_33725);

return statearr_33737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33728__$1,inst_33726);
} else {
if((state_val_33729 === (2))){
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33728__$1,(4),ch);
} else {
if((state_val_33729 === (11))){
var inst_33708 = (state_33728[(8)]);
var inst_33717 = (state_33728[(2)]);
var inst_33705 = inst_33708;
var state_33728__$1 = (function (){var statearr_33738 = state_33728;
(statearr_33738[(10)] = inst_33717);

(statearr_33738[(7)] = inst_33705);

return statearr_33738;
})();
var statearr_33739_34382 = state_33728__$1;
(statearr_33739_34382[(2)] = null);

(statearr_33739_34382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (9))){
var inst_33708 = (state_33728[(8)]);
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33728__$1,(11),out,inst_33708);
} else {
if((state_val_33729 === (5))){
var inst_33708 = (state_33728[(8)]);
var inst_33705 = (state_33728[(7)]);
var inst_33712 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33708,inst_33705);
var state_33728__$1 = state_33728;
if(inst_33712){
var statearr_33741_34383 = state_33728__$1;
(statearr_33741_34383[(1)] = (8));

} else {
var statearr_33742_34384 = state_33728__$1;
(statearr_33742_34384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (10))){
var inst_33720 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33743_34385 = state_33728__$1;
(statearr_33743_34385[(2)] = inst_33720);

(statearr_33743_34385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (8))){
var inst_33705 = (state_33728[(7)]);
var tmp33740 = inst_33705;
var inst_33705__$1 = tmp33740;
var state_33728__$1 = (function (){var statearr_33744 = state_33728;
(statearr_33744[(7)] = inst_33705__$1);

return statearr_33744;
})();
var statearr_33745_34386 = state_33728__$1;
(statearr_33745_34386[(2)] = null);

(statearr_33745_34386[(1)] = (2));


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
var cljs$core$async$state_machine__32347__auto__ = null;
var cljs$core$async$state_machine__32347__auto____0 = (function (){
var statearr_33746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33746[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33746[(1)] = (1));

return statearr_33746;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33728){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33728);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33747){var ex__32350__auto__ = e33747;
var statearr_33748_34387 = state_33728;
(statearr_33748_34387[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33728[(4)]))){
var statearr_33749_34388 = state_33728;
(statearr_33749_34388[(1)] = cljs.core.first((state_33728[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34389 = state_33728;
state_33728 = G__34389;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_33750 = f__32418__auto__();
(statearr_33750[(6)] = c__32417__auto___34376);

return statearr_33750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33752 = arguments.length;
switch (G__33752) {
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
var c__32417__auto___34392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_33790){
var state_val_33791 = (state_33790[(1)]);
if((state_val_33791 === (7))){
var inst_33786 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
var statearr_33792_34393 = state_33790__$1;
(statearr_33792_34393[(2)] = inst_33786);

(statearr_33792_34393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (1))){
var inst_33753 = (new Array(n));
var inst_33754 = inst_33753;
var inst_33755 = (0);
var state_33790__$1 = (function (){var statearr_33793 = state_33790;
(statearr_33793[(7)] = inst_33754);

(statearr_33793[(8)] = inst_33755);

return statearr_33793;
})();
var statearr_33794_34394 = state_33790__$1;
(statearr_33794_34394[(2)] = null);

(statearr_33794_34394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (4))){
var inst_33758 = (state_33790[(9)]);
var inst_33758__$1 = (state_33790[(2)]);
var inst_33759 = (inst_33758__$1 == null);
var inst_33760 = cljs.core.not(inst_33759);
var state_33790__$1 = (function (){var statearr_33795 = state_33790;
(statearr_33795[(9)] = inst_33758__$1);

return statearr_33795;
})();
if(inst_33760){
var statearr_33796_34395 = state_33790__$1;
(statearr_33796_34395[(1)] = (5));

} else {
var statearr_33797_34396 = state_33790__$1;
(statearr_33797_34396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (15))){
var inst_33780 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
var statearr_33798_34398 = state_33790__$1;
(statearr_33798_34398[(2)] = inst_33780);

(statearr_33798_34398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (13))){
var state_33790__$1 = state_33790;
var statearr_33799_34399 = state_33790__$1;
(statearr_33799_34399[(2)] = null);

(statearr_33799_34399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (6))){
var inst_33755 = (state_33790[(8)]);
var inst_33776 = (inst_33755 > (0));
var state_33790__$1 = state_33790;
if(cljs.core.truth_(inst_33776)){
var statearr_33800_34404 = state_33790__$1;
(statearr_33800_34404[(1)] = (12));

} else {
var statearr_33801_34405 = state_33790__$1;
(statearr_33801_34405[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (3))){
var inst_33788 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33790__$1,inst_33788);
} else {
if((state_val_33791 === (12))){
var inst_33754 = (state_33790[(7)]);
var inst_33778 = cljs.core.vec(inst_33754);
var state_33790__$1 = state_33790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33790__$1,(15),out,inst_33778);
} else {
if((state_val_33791 === (2))){
var state_33790__$1 = state_33790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33790__$1,(4),ch);
} else {
if((state_val_33791 === (11))){
var inst_33770 = (state_33790[(2)]);
var inst_33771 = (new Array(n));
var inst_33754 = inst_33771;
var inst_33755 = (0);
var state_33790__$1 = (function (){var statearr_33802 = state_33790;
(statearr_33802[(10)] = inst_33770);

(statearr_33802[(7)] = inst_33754);

(statearr_33802[(8)] = inst_33755);

return statearr_33802;
})();
var statearr_33803_34407 = state_33790__$1;
(statearr_33803_34407[(2)] = null);

(statearr_33803_34407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (9))){
var inst_33754 = (state_33790[(7)]);
var inst_33768 = cljs.core.vec(inst_33754);
var state_33790__$1 = state_33790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33790__$1,(11),out,inst_33768);
} else {
if((state_val_33791 === (5))){
var inst_33754 = (state_33790[(7)]);
var inst_33755 = (state_33790[(8)]);
var inst_33758 = (state_33790[(9)]);
var inst_33763 = (state_33790[(11)]);
var inst_33762 = (inst_33754[inst_33755] = inst_33758);
var inst_33763__$1 = (inst_33755 + (1));
var inst_33764 = (inst_33763__$1 < n);
var state_33790__$1 = (function (){var statearr_33804 = state_33790;
(statearr_33804[(12)] = inst_33762);

(statearr_33804[(11)] = inst_33763__$1);

return statearr_33804;
})();
if(cljs.core.truth_(inst_33764)){
var statearr_33805_34411 = state_33790__$1;
(statearr_33805_34411[(1)] = (8));

} else {
var statearr_33806_34412 = state_33790__$1;
(statearr_33806_34412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (14))){
var inst_33783 = (state_33790[(2)]);
var inst_33784 = cljs.core.async.close_BANG_(out);
var state_33790__$1 = (function (){var statearr_33808 = state_33790;
(statearr_33808[(13)] = inst_33783);

return statearr_33808;
})();
var statearr_33809_34413 = state_33790__$1;
(statearr_33809_34413[(2)] = inst_33784);

(statearr_33809_34413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (10))){
var inst_33774 = (state_33790[(2)]);
var state_33790__$1 = state_33790;
var statearr_33810_34414 = state_33790__$1;
(statearr_33810_34414[(2)] = inst_33774);

(statearr_33810_34414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33791 === (8))){
var inst_33754 = (state_33790[(7)]);
var inst_33763 = (state_33790[(11)]);
var tmp33807 = inst_33754;
var inst_33754__$1 = tmp33807;
var inst_33755 = inst_33763;
var state_33790__$1 = (function (){var statearr_33811 = state_33790;
(statearr_33811[(7)] = inst_33754__$1);

(statearr_33811[(8)] = inst_33755);

return statearr_33811;
})();
var statearr_33812_34415 = state_33790__$1;
(statearr_33812_34415[(2)] = null);

(statearr_33812_34415[(1)] = (2));


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
var cljs$core$async$state_machine__32347__auto__ = null;
var cljs$core$async$state_machine__32347__auto____0 = (function (){
var statearr_33813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33813[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33813[(1)] = (1));

return statearr_33813;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33790){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33790);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33814){var ex__32350__auto__ = e33814;
var statearr_33815_34419 = state_33790;
(statearr_33815_34419[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33790[(4)]))){
var statearr_33816_34420 = state_33790;
(statearr_33816_34420[(1)] = cljs.core.first((state_33790[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34421 = state_33790;
state_33790 = G__34421;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_33817 = f__32418__auto__();
(statearr_33817[(6)] = c__32417__auto___34392);

return statearr_33817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33819 = arguments.length;
switch (G__33819) {
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
var c__32417__auto___34424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32418__auto__ = (function (){var switch__32346__auto__ = (function (state_33864){
var state_val_33865 = (state_33864[(1)]);
if((state_val_33865 === (7))){
var inst_33860 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33866_34425 = state_33864__$1;
(statearr_33866_34425[(2)] = inst_33860);

(statearr_33866_34425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (1))){
var inst_33820 = [];
var inst_33821 = inst_33820;
var inst_33822 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33864__$1 = (function (){var statearr_33867 = state_33864;
(statearr_33867[(7)] = inst_33821);

(statearr_33867[(8)] = inst_33822);

return statearr_33867;
})();
var statearr_33868_34426 = state_33864__$1;
(statearr_33868_34426[(2)] = null);

(statearr_33868_34426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (4))){
var inst_33825 = (state_33864[(9)]);
var inst_33825__$1 = (state_33864[(2)]);
var inst_33826 = (inst_33825__$1 == null);
var inst_33827 = cljs.core.not(inst_33826);
var state_33864__$1 = (function (){var statearr_33869 = state_33864;
(statearr_33869[(9)] = inst_33825__$1);

return statearr_33869;
})();
if(inst_33827){
var statearr_33870_34427 = state_33864__$1;
(statearr_33870_34427[(1)] = (5));

} else {
var statearr_33871_34429 = state_33864__$1;
(statearr_33871_34429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (15))){
var inst_33821 = (state_33864[(7)]);
var inst_33852 = cljs.core.vec(inst_33821);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33864__$1,(18),out,inst_33852);
} else {
if((state_val_33865 === (13))){
var inst_33847 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33872_34433 = state_33864__$1;
(statearr_33872_34433[(2)] = inst_33847);

(statearr_33872_34433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (6))){
var inst_33821 = (state_33864[(7)]);
var inst_33849 = inst_33821.length;
var inst_33850 = (inst_33849 > (0));
var state_33864__$1 = state_33864;
if(cljs.core.truth_(inst_33850)){
var statearr_33873_34434 = state_33864__$1;
(statearr_33873_34434[(1)] = (15));

} else {
var statearr_33874_34435 = state_33864__$1;
(statearr_33874_34435[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (17))){
var inst_33857 = (state_33864[(2)]);
var inst_33858 = cljs.core.async.close_BANG_(out);
var state_33864__$1 = (function (){var statearr_33875 = state_33864;
(statearr_33875[(10)] = inst_33857);

return statearr_33875;
})();
var statearr_33876_34440 = state_33864__$1;
(statearr_33876_34440[(2)] = inst_33858);

(statearr_33876_34440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (3))){
var inst_33862 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33864__$1,inst_33862);
} else {
if((state_val_33865 === (12))){
var inst_33821 = (state_33864[(7)]);
var inst_33840 = cljs.core.vec(inst_33821);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33864__$1,(14),out,inst_33840);
} else {
if((state_val_33865 === (2))){
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33864__$1,(4),ch);
} else {
if((state_val_33865 === (11))){
var inst_33821 = (state_33864[(7)]);
var inst_33825 = (state_33864[(9)]);
var inst_33829 = (state_33864[(11)]);
var inst_33837 = inst_33821.push(inst_33825);
var tmp33877 = inst_33821;
var inst_33821__$1 = tmp33877;
var inst_33822 = inst_33829;
var state_33864__$1 = (function (){var statearr_33878 = state_33864;
(statearr_33878[(12)] = inst_33837);

(statearr_33878[(7)] = inst_33821__$1);

(statearr_33878[(8)] = inst_33822);

return statearr_33878;
})();
var statearr_33879_34445 = state_33864__$1;
(statearr_33879_34445[(2)] = null);

(statearr_33879_34445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (9))){
var inst_33822 = (state_33864[(8)]);
var inst_33833 = cljs.core.keyword_identical_QMARK_(inst_33822,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33864__$1 = state_33864;
var statearr_33880_34446 = state_33864__$1;
(statearr_33880_34446[(2)] = inst_33833);

(statearr_33880_34446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (5))){
var inst_33825 = (state_33864[(9)]);
var inst_33829 = (state_33864[(11)]);
var inst_33822 = (state_33864[(8)]);
var inst_33830 = (state_33864[(13)]);
var inst_33829__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33825) : f.call(null,inst_33825));
var inst_33830__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33829__$1,inst_33822);
var state_33864__$1 = (function (){var statearr_33881 = state_33864;
(statearr_33881[(11)] = inst_33829__$1);

(statearr_33881[(13)] = inst_33830__$1);

return statearr_33881;
})();
if(inst_33830__$1){
var statearr_33882_34451 = state_33864__$1;
(statearr_33882_34451[(1)] = (8));

} else {
var statearr_33883_34452 = state_33864__$1;
(statearr_33883_34452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (14))){
var inst_33825 = (state_33864[(9)]);
var inst_33829 = (state_33864[(11)]);
var inst_33842 = (state_33864[(2)]);
var inst_33843 = [];
var inst_33844 = inst_33843.push(inst_33825);
var inst_33821 = inst_33843;
var inst_33822 = inst_33829;
var state_33864__$1 = (function (){var statearr_33884 = state_33864;
(statearr_33884[(14)] = inst_33842);

(statearr_33884[(15)] = inst_33844);

(statearr_33884[(7)] = inst_33821);

(statearr_33884[(8)] = inst_33822);

return statearr_33884;
})();
var statearr_33885_34457 = state_33864__$1;
(statearr_33885_34457[(2)] = null);

(statearr_33885_34457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (16))){
var state_33864__$1 = state_33864;
var statearr_33886_34458 = state_33864__$1;
(statearr_33886_34458[(2)] = null);

(statearr_33886_34458[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (10))){
var inst_33835 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
if(cljs.core.truth_(inst_33835)){
var statearr_33887_34459 = state_33864__$1;
(statearr_33887_34459[(1)] = (11));

} else {
var statearr_33888_34460 = state_33864__$1;
(statearr_33888_34460[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (18))){
var inst_33854 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33889_34462 = state_33864__$1;
(statearr_33889_34462[(2)] = inst_33854);

(statearr_33889_34462[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (8))){
var inst_33830 = (state_33864[(13)]);
var state_33864__$1 = state_33864;
var statearr_33890_34466 = state_33864__$1;
(statearr_33890_34466[(2)] = inst_33830);

(statearr_33890_34466[(1)] = (10));


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
var cljs$core$async$state_machine__32347__auto__ = null;
var cljs$core$async$state_machine__32347__auto____0 = (function (){
var statearr_33891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33891[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33891[(1)] = (1));

return statearr_33891;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33864){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33864);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33892){var ex__32350__auto__ = e33892;
var statearr_33893_34467 = state_33864;
(statearr_33893_34467[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33864[(4)]))){
var statearr_33894_34468 = state_33864;
(statearr_33894_34468[(1)] = cljs.core.first((state_33864[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34469 = state_33864;
state_33864 = G__34469;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32419__auto__ = (function (){var statearr_33895 = f__32418__auto__();
(statearr_33895[(6)] = c__32417__auto___34424);

return statearr_33895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32419__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
