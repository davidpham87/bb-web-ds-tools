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
cljs.core.async.t_cljs$core$async48024 = (function (f,blockable,meta48025){
this.f = f;
this.blockable = blockable;
this.meta48025 = meta48025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48026,meta48025__$1){
var self__ = this;
var _48026__$1 = this;
return (new cljs.core.async.t_cljs$core$async48024(self__.f,self__.blockable,meta48025__$1));
}));

(cljs.core.async.t_cljs$core$async48024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48026){
var self__ = this;
var _48026__$1 = this;
return self__.meta48025;
}));

(cljs.core.async.t_cljs$core$async48024.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async48024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async48024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48025","meta48025",-748572939,null)], null);
}));

(cljs.core.async.t_cljs$core$async48024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48024");

(cljs.core.async.t_cljs$core$async48024.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48024.
 */
cljs.core.async.__GT_t_cljs$core$async48024 = (function cljs$core$async$__GT_t_cljs$core$async48024(f,blockable,meta48025){
return (new cljs.core.async.t_cljs$core$async48024(f,blockable,meta48025));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48023 = arguments.length;
switch (G__48023) {
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
return (new cljs.core.async.t_cljs$core$async48024(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48029 = arguments.length;
switch (G__48029) {
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
var G__48031 = arguments.length;
switch (G__48031) {
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
var G__48033 = arguments.length;
switch (G__48033) {
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
var val_49453 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49453) : fn1.call(null,val_49453));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49453) : fn1.call(null,val_49453));
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
var G__48035 = arguments.length;
switch (G__48035) {
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
var n__5616__auto___49458 = n;
var x_49459 = (0);
while(true){
if((x_49459 < n__5616__auto___49458)){
(a[x_49459] = x_49459);

var G__49460 = (x_49459 + (1));
x_49459 = G__49460;
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
cljs.core.async.t_cljs$core$async48036 = (function (flag,meta48037){
this.flag = flag;
this.meta48037 = meta48037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48038,meta48037__$1){
var self__ = this;
var _48038__$1 = this;
return (new cljs.core.async.t_cljs$core$async48036(self__.flag,meta48037__$1));
}));

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48038){
var self__ = this;
var _48038__$1 = this;
return self__.meta48037;
}));

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async48036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48037","meta48037",-1961503867,null)], null);
}));

(cljs.core.async.t_cljs$core$async48036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48036");

(cljs.core.async.t_cljs$core$async48036.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48036.
 */
cljs.core.async.__GT_t_cljs$core$async48036 = (function cljs$core$async$__GT_t_cljs$core$async48036(flag,meta48037){
return (new cljs.core.async.t_cljs$core$async48036(flag,meta48037));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async48036(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48039 = (function (flag,cb,meta48040){
this.flag = flag;
this.cb = cb;
this.meta48040 = meta48040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48041,meta48040__$1){
var self__ = this;
var _48041__$1 = this;
return (new cljs.core.async.t_cljs$core$async48039(self__.flag,self__.cb,meta48040__$1));
}));

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48041){
var self__ = this;
var _48041__$1 = this;
return self__.meta48040;
}));

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async48039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48040","meta48040",-1053535648,null)], null);
}));

(cljs.core.async.t_cljs$core$async48039.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48039");

(cljs.core.async.t_cljs$core$async48039.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48039");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48039.
 */
cljs.core.async.__GT_t_cljs$core$async48039 = (function cljs$core$async$__GT_t_cljs$core$async48039(flag,cb,meta48040){
return (new cljs.core.async.t_cljs$core$async48039(flag,cb,meta48040));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async48039(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_49461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_49461)){
if((!(((port_49461.cljs$core$IFn$_invoke$arity$1 ? port_49461.cljs$core$IFn$_invoke$arity$1((1)) : port_49461.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__49462 = (i + (1));
i = G__49462;
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
return (function (p1__48042_SHARP_){
var G__48044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48042_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48044) : fret.call(null,G__48044));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__48043_SHARP_){
var G__48045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48043_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48045) : fret.call(null,G__48045));
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
var G__49463 = (i + (1));
i = G__49463;
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
var len__5749__auto___49464 = arguments.length;
var i__5750__auto___49465 = (0);
while(true){
if((i__5750__auto___49465 < len__5749__auto___49464)){
args__5755__auto__.push((arguments[i__5750__auto___49465]));

var G__49466 = (i__5750__auto___49465 + (1));
i__5750__auto___49465 = G__49466;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48048){
var map__48049 = p__48048;
var map__48049__$1 = cljs.core.__destructure_map(map__48049);
var opts = map__48049__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48046){
var G__48047 = cljs.core.first(seq48046);
var seq48046__$1 = cljs.core.next(seq48046);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48047,seq48046__$1);
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
var G__48051 = arguments.length;
switch (G__48051) {
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
var c__47965__auto___49473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48075){
var state_val_48076 = (state_48075[(1)]);
if((state_val_48076 === (7))){
var inst_48071 = (state_48075[(2)]);
var state_48075__$1 = state_48075;
var statearr_48077_49475 = state_48075__$1;
(statearr_48077_49475[(2)] = inst_48071);

(statearr_48077_49475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48076 === (1))){
var state_48075__$1 = state_48075;
var statearr_48078_49476 = state_48075__$1;
(statearr_48078_49476[(2)] = null);

(statearr_48078_49476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48076 === (4))){
var inst_48054 = (state_48075[(7)]);
var inst_48054__$1 = (state_48075[(2)]);
var inst_48055 = (inst_48054__$1 == null);
var state_48075__$1 = (function (){var statearr_48079 = state_48075;
(statearr_48079[(7)] = inst_48054__$1);

return statearr_48079;
})();
if(cljs.core.truth_(inst_48055)){
var statearr_48080_49478 = state_48075__$1;
(statearr_48080_49478[(1)] = (5));

} else {
var statearr_48081_49479 = state_48075__$1;
(statearr_48081_49479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48076 === (13))){
var state_48075__$1 = state_48075;
var statearr_48082_49480 = state_48075__$1;
(statearr_48082_49480[(2)] = null);

(statearr_48082_49480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48076 === (6))){
var inst_48054 = (state_48075[(7)]);
var state_48075__$1 = state_48075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48075__$1,(11),to,inst_48054);
} else {
if((state_val_48076 === (3))){
var inst_48073 = (state_48075[(2)]);
var state_48075__$1 = state_48075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48075__$1,inst_48073);
} else {
if((state_val_48076 === (12))){
var state_48075__$1 = state_48075;
var statearr_48083_49481 = state_48075__$1;
(statearr_48083_49481[(2)] = null);

(statearr_48083_49481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48076 === (2))){
var state_48075__$1 = state_48075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48075__$1,(4),from);
} else {
if((state_val_48076 === (11))){
var inst_48064 = (state_48075[(2)]);
var state_48075__$1 = state_48075;
if(cljs.core.truth_(inst_48064)){
var statearr_48084_49482 = state_48075__$1;
(statearr_48084_49482[(1)] = (12));

} else {
var statearr_48085_49483 = state_48075__$1;
(statearr_48085_49483[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48076 === (9))){
var state_48075__$1 = state_48075;
var statearr_48086_49484 = state_48075__$1;
(statearr_48086_49484[(2)] = null);

(statearr_48086_49484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48076 === (5))){
var state_48075__$1 = state_48075;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48087_49486 = state_48075__$1;
(statearr_48087_49486[(1)] = (8));

} else {
var statearr_48088_49488 = state_48075__$1;
(statearr_48088_49488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48076 === (14))){
var inst_48069 = (state_48075[(2)]);
var state_48075__$1 = state_48075;
var statearr_48089_49489 = state_48075__$1;
(statearr_48089_49489[(2)] = inst_48069);

(statearr_48089_49489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48076 === (10))){
var inst_48061 = (state_48075[(2)]);
var state_48075__$1 = state_48075;
var statearr_48090_49491 = state_48075__$1;
(statearr_48090_49491[(2)] = inst_48061);

(statearr_48090_49491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48076 === (8))){
var inst_48058 = cljs.core.async.close_BANG_(to);
var state_48075__$1 = state_48075;
var statearr_48091_49496 = state_48075__$1;
(statearr_48091_49496[(2)] = inst_48058);

(statearr_48091_49496[(1)] = (10));


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
var cljs$core$async$state_machine__47895__auto__ = null;
var cljs$core$async$state_machine__47895__auto____0 = (function (){
var statearr_48092 = [null,null,null,null,null,null,null,null];
(statearr_48092[(0)] = cljs$core$async$state_machine__47895__auto__);

(statearr_48092[(1)] = (1));

return statearr_48092;
});
var cljs$core$async$state_machine__47895__auto____1 = (function (state_48075){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48075);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48093){var ex__47898__auto__ = e48093;
var statearr_48094_49501 = state_48075;
(statearr_48094_49501[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48075[(4)]))){
var statearr_48095_49502 = state_48075;
(statearr_48095_49502[(1)] = cljs.core.first((state_48075[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49503 = state_48075;
state_48075 = G__49503;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$state_machine__47895__auto__ = function(state_48075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47895__auto____1.call(this,state_48075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47895__auto____0;
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47895__auto____1;
return cljs$core$async$state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48096 = f__47966__auto__();
(statearr_48096[(6)] = c__47965__auto___49473);

return statearr_48096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
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
var process__$1 = (function (p__48097){
var vec__48098 = p__48097;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48098,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48098,(1),null);
var job = vec__48098;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47965__auto___49512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48105){
var state_val_48106 = (state_48105[(1)]);
if((state_val_48106 === (1))){
var state_48105__$1 = state_48105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48105__$1,(2),res,v);
} else {
if((state_val_48106 === (2))){
var inst_48102 = (state_48105[(2)]);
var inst_48103 = cljs.core.async.close_BANG_(res);
var state_48105__$1 = (function (){var statearr_48107 = state_48105;
(statearr_48107[(7)] = inst_48102);

return statearr_48107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48105__$1,inst_48103);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0 = (function (){
var statearr_48108 = [null,null,null,null,null,null,null,null];
(statearr_48108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__);

(statearr_48108[(1)] = (1));

return statearr_48108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1 = (function (state_48105){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48105);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48109){var ex__47898__auto__ = e48109;
var statearr_48110_49517 = state_48105;
(statearr_48110_49517[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48105[(4)]))){
var statearr_48111_49518 = state_48105;
(statearr_48111_49518[(1)] = cljs.core.first((state_48105[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49519 = state_48105;
state_48105 = G__49519;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__ = function(state_48105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1.call(this,state_48105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48112 = f__47966__auto__();
(statearr_48112[(6)] = c__47965__auto___49512);

return statearr_48112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__48113){
var vec__48114 = p__48113;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48114,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48114,(1),null);
var job = vec__48114;
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
var n__5616__auto___49520 = n;
var __49521 = (0);
while(true){
if((__49521 < n__5616__auto___49520)){
var G__48117_49522 = type;
var G__48117_49523__$1 = (((G__48117_49522 instanceof cljs.core.Keyword))?G__48117_49522.fqn:null);
switch (G__48117_49523__$1) {
case "compute":
var c__47965__auto___49525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49521,c__47965__auto___49525,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async){
return (function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = ((function (__49521,c__47965__auto___49525,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async){
return (function (state_48130){
var state_val_48131 = (state_48130[(1)]);
if((state_val_48131 === (1))){
var state_48130__$1 = state_48130;
var statearr_48132_49526 = state_48130__$1;
(statearr_48132_49526[(2)] = null);

(statearr_48132_49526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48131 === (2))){
var state_48130__$1 = state_48130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48130__$1,(4),jobs);
} else {
if((state_val_48131 === (3))){
var inst_48128 = (state_48130[(2)]);
var state_48130__$1 = state_48130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48130__$1,inst_48128);
} else {
if((state_val_48131 === (4))){
var inst_48120 = (state_48130[(2)]);
var inst_48121 = process__$1(inst_48120);
var state_48130__$1 = state_48130;
if(cljs.core.truth_(inst_48121)){
var statearr_48133_49527 = state_48130__$1;
(statearr_48133_49527[(1)] = (5));

} else {
var statearr_48134_49529 = state_48130__$1;
(statearr_48134_49529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48131 === (5))){
var state_48130__$1 = state_48130;
var statearr_48135_49533 = state_48130__$1;
(statearr_48135_49533[(2)] = null);

(statearr_48135_49533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48131 === (6))){
var state_48130__$1 = state_48130;
var statearr_48136_49534 = state_48130__$1;
(statearr_48136_49534[(2)] = null);

(statearr_48136_49534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48131 === (7))){
var inst_48126 = (state_48130[(2)]);
var state_48130__$1 = state_48130;
var statearr_48137_49535 = state_48130__$1;
(statearr_48137_49535[(2)] = inst_48126);

(statearr_48137_49535[(1)] = (3));


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
});})(__49521,c__47965__auto___49525,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async))
;
return ((function (__49521,switch__47894__auto__,c__47965__auto___49525,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0 = (function (){
var statearr_48138 = [null,null,null,null,null,null,null];
(statearr_48138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__);

(statearr_48138[(1)] = (1));

return statearr_48138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1 = (function (state_48130){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48130);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48139){var ex__47898__auto__ = e48139;
var statearr_48140_49540 = state_48130;
(statearr_48140_49540[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48130[(4)]))){
var statearr_48141_49541 = state_48130;
(statearr_48141_49541[(1)] = cljs.core.first((state_48130[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49543 = state_48130;
state_48130 = G__49543;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__ = function(state_48130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1.call(this,state_48130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__;
})()
;})(__49521,switch__47894__auto__,c__47965__auto___49525,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async))
})();
var state__47967__auto__ = (function (){var statearr_48142 = f__47966__auto__();
(statearr_48142[(6)] = c__47965__auto___49525);

return statearr_48142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
});})(__49521,c__47965__auto___49525,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async))
);


break;
case "async":
var c__47965__auto___49547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49521,c__47965__auto___49547,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async){
return (function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = ((function (__49521,c__47965__auto___49547,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async){
return (function (state_48155){
var state_val_48156 = (state_48155[(1)]);
if((state_val_48156 === (1))){
var state_48155__$1 = state_48155;
var statearr_48157_49549 = state_48155__$1;
(statearr_48157_49549[(2)] = null);

(statearr_48157_49549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (2))){
var state_48155__$1 = state_48155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48155__$1,(4),jobs);
} else {
if((state_val_48156 === (3))){
var inst_48153 = (state_48155[(2)]);
var state_48155__$1 = state_48155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48155__$1,inst_48153);
} else {
if((state_val_48156 === (4))){
var inst_48145 = (state_48155[(2)]);
var inst_48146 = async(inst_48145);
var state_48155__$1 = state_48155;
if(cljs.core.truth_(inst_48146)){
var statearr_48158_49553 = state_48155__$1;
(statearr_48158_49553[(1)] = (5));

} else {
var statearr_48159_49554 = state_48155__$1;
(statearr_48159_49554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (5))){
var state_48155__$1 = state_48155;
var statearr_48160_49556 = state_48155__$1;
(statearr_48160_49556[(2)] = null);

(statearr_48160_49556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (6))){
var state_48155__$1 = state_48155;
var statearr_48161_49558 = state_48155__$1;
(statearr_48161_49558[(2)] = null);

(statearr_48161_49558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (7))){
var inst_48151 = (state_48155[(2)]);
var state_48155__$1 = state_48155;
var statearr_48162_49559 = state_48155__$1;
(statearr_48162_49559[(2)] = inst_48151);

(statearr_48162_49559[(1)] = (3));


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
});})(__49521,c__47965__auto___49547,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async))
;
return ((function (__49521,switch__47894__auto__,c__47965__auto___49547,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0 = (function (){
var statearr_48163 = [null,null,null,null,null,null,null];
(statearr_48163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__);

(statearr_48163[(1)] = (1));

return statearr_48163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1 = (function (state_48155){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48155);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48164){var ex__47898__auto__ = e48164;
var statearr_48165_49560 = state_48155;
(statearr_48165_49560[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48155[(4)]))){
var statearr_48166_49561 = state_48155;
(statearr_48166_49561[(1)] = cljs.core.first((state_48155[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49562 = state_48155;
state_48155 = G__49562;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__ = function(state_48155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1.call(this,state_48155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__;
})()
;})(__49521,switch__47894__auto__,c__47965__auto___49547,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async))
})();
var state__47967__auto__ = (function (){var statearr_48167 = f__47966__auto__();
(statearr_48167[(6)] = c__47965__auto___49547);

return statearr_48167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
});})(__49521,c__47965__auto___49547,G__48117_49522,G__48117_49523__$1,n__5616__auto___49520,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48117_49523__$1)].join('')));

}

var G__49563 = (__49521 + (1));
__49521 = G__49563;
continue;
} else {
}
break;
}

var c__47965__auto___49564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48189){
var state_val_48190 = (state_48189[(1)]);
if((state_val_48190 === (7))){
var inst_48185 = (state_48189[(2)]);
var state_48189__$1 = state_48189;
var statearr_48191_49569 = state_48189__$1;
(statearr_48191_49569[(2)] = inst_48185);

(statearr_48191_49569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48190 === (1))){
var state_48189__$1 = state_48189;
var statearr_48192_49570 = state_48189__$1;
(statearr_48192_49570[(2)] = null);

(statearr_48192_49570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48190 === (4))){
var inst_48170 = (state_48189[(7)]);
var inst_48170__$1 = (state_48189[(2)]);
var inst_48171 = (inst_48170__$1 == null);
var state_48189__$1 = (function (){var statearr_48193 = state_48189;
(statearr_48193[(7)] = inst_48170__$1);

return statearr_48193;
})();
if(cljs.core.truth_(inst_48171)){
var statearr_48194_49571 = state_48189__$1;
(statearr_48194_49571[(1)] = (5));

} else {
var statearr_48195_49573 = state_48189__$1;
(statearr_48195_49573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48190 === (6))){
var inst_48170 = (state_48189[(7)]);
var inst_48175 = (state_48189[(8)]);
var inst_48175__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_48176 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48177 = [inst_48170,inst_48175__$1];
var inst_48178 = (new cljs.core.PersistentVector(null,2,(5),inst_48176,inst_48177,null));
var state_48189__$1 = (function (){var statearr_48196 = state_48189;
(statearr_48196[(8)] = inst_48175__$1);

return statearr_48196;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48189__$1,(8),jobs,inst_48178);
} else {
if((state_val_48190 === (3))){
var inst_48187 = (state_48189[(2)]);
var state_48189__$1 = state_48189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48189__$1,inst_48187);
} else {
if((state_val_48190 === (2))){
var state_48189__$1 = state_48189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48189__$1,(4),from);
} else {
if((state_val_48190 === (9))){
var inst_48182 = (state_48189[(2)]);
var state_48189__$1 = (function (){var statearr_48197 = state_48189;
(statearr_48197[(9)] = inst_48182);

return statearr_48197;
})();
var statearr_48198_49575 = state_48189__$1;
(statearr_48198_49575[(2)] = null);

(statearr_48198_49575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48190 === (5))){
var inst_48173 = cljs.core.async.close_BANG_(jobs);
var state_48189__$1 = state_48189;
var statearr_48199_49576 = state_48189__$1;
(statearr_48199_49576[(2)] = inst_48173);

(statearr_48199_49576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48190 === (8))){
var inst_48175 = (state_48189[(8)]);
var inst_48180 = (state_48189[(2)]);
var state_48189__$1 = (function (){var statearr_48200 = state_48189;
(statearr_48200[(10)] = inst_48180);

return statearr_48200;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48189__$1,(9),results,inst_48175);
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
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0 = (function (){
var statearr_48201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__);

(statearr_48201[(1)] = (1));

return statearr_48201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1 = (function (state_48189){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48189);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48202){var ex__47898__auto__ = e48202;
var statearr_48203_49577 = state_48189;
(statearr_48203_49577[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48189[(4)]))){
var statearr_48204_49578 = state_48189;
(statearr_48204_49578[(1)] = cljs.core.first((state_48189[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49579 = state_48189;
state_48189 = G__49579;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__ = function(state_48189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1.call(this,state_48189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48205 = f__47966__auto__();
(statearr_48205[(6)] = c__47965__auto___49564);

return statearr_48205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
}));


var c__47965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48243){
var state_val_48244 = (state_48243[(1)]);
if((state_val_48244 === (7))){
var inst_48239 = (state_48243[(2)]);
var state_48243__$1 = state_48243;
var statearr_48245_49580 = state_48243__$1;
(statearr_48245_49580[(2)] = inst_48239);

(statearr_48245_49580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (20))){
var state_48243__$1 = state_48243;
var statearr_48246_49581 = state_48243__$1;
(statearr_48246_49581[(2)] = null);

(statearr_48246_49581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (1))){
var state_48243__$1 = state_48243;
var statearr_48247_49582 = state_48243__$1;
(statearr_48247_49582[(2)] = null);

(statearr_48247_49582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (4))){
var inst_48208 = (state_48243[(7)]);
var inst_48208__$1 = (state_48243[(2)]);
var inst_48209 = (inst_48208__$1 == null);
var state_48243__$1 = (function (){var statearr_48248 = state_48243;
(statearr_48248[(7)] = inst_48208__$1);

return statearr_48248;
})();
if(cljs.core.truth_(inst_48209)){
var statearr_48249_49583 = state_48243__$1;
(statearr_48249_49583[(1)] = (5));

} else {
var statearr_48250_49584 = state_48243__$1;
(statearr_48250_49584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (15))){
var inst_48221 = (state_48243[(8)]);
var state_48243__$1 = state_48243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48243__$1,(18),to,inst_48221);
} else {
if((state_val_48244 === (21))){
var inst_48234 = (state_48243[(2)]);
var state_48243__$1 = state_48243;
var statearr_48251_49585 = state_48243__$1;
(statearr_48251_49585[(2)] = inst_48234);

(statearr_48251_49585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (13))){
var inst_48236 = (state_48243[(2)]);
var state_48243__$1 = (function (){var statearr_48252 = state_48243;
(statearr_48252[(9)] = inst_48236);

return statearr_48252;
})();
var statearr_48253_49586 = state_48243__$1;
(statearr_48253_49586[(2)] = null);

(statearr_48253_49586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (6))){
var inst_48208 = (state_48243[(7)]);
var state_48243__$1 = state_48243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48243__$1,(11),inst_48208);
} else {
if((state_val_48244 === (17))){
var inst_48229 = (state_48243[(2)]);
var state_48243__$1 = state_48243;
if(cljs.core.truth_(inst_48229)){
var statearr_48254_49587 = state_48243__$1;
(statearr_48254_49587[(1)] = (19));

} else {
var statearr_48255_49588 = state_48243__$1;
(statearr_48255_49588[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (3))){
var inst_48241 = (state_48243[(2)]);
var state_48243__$1 = state_48243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48243__$1,inst_48241);
} else {
if((state_val_48244 === (12))){
var inst_48218 = (state_48243[(10)]);
var state_48243__$1 = state_48243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48243__$1,(14),inst_48218);
} else {
if((state_val_48244 === (2))){
var state_48243__$1 = state_48243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48243__$1,(4),results);
} else {
if((state_val_48244 === (19))){
var state_48243__$1 = state_48243;
var statearr_48256_49590 = state_48243__$1;
(statearr_48256_49590[(2)] = null);

(statearr_48256_49590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (11))){
var inst_48218 = (state_48243[(2)]);
var state_48243__$1 = (function (){var statearr_48257 = state_48243;
(statearr_48257[(10)] = inst_48218);

return statearr_48257;
})();
var statearr_48258_49591 = state_48243__$1;
(statearr_48258_49591[(2)] = null);

(statearr_48258_49591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (9))){
var state_48243__$1 = state_48243;
var statearr_48259_49592 = state_48243__$1;
(statearr_48259_49592[(2)] = null);

(statearr_48259_49592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (5))){
var state_48243__$1 = state_48243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48260_49593 = state_48243__$1;
(statearr_48260_49593[(1)] = (8));

} else {
var statearr_48261_49594 = state_48243__$1;
(statearr_48261_49594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (14))){
var inst_48221 = (state_48243[(8)]);
var inst_48223 = (state_48243[(11)]);
var inst_48221__$1 = (state_48243[(2)]);
var inst_48222 = (inst_48221__$1 == null);
var inst_48223__$1 = cljs.core.not(inst_48222);
var state_48243__$1 = (function (){var statearr_48262 = state_48243;
(statearr_48262[(8)] = inst_48221__$1);

(statearr_48262[(11)] = inst_48223__$1);

return statearr_48262;
})();
if(inst_48223__$1){
var statearr_48263_49595 = state_48243__$1;
(statearr_48263_49595[(1)] = (15));

} else {
var statearr_48264_49596 = state_48243__$1;
(statearr_48264_49596[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (16))){
var inst_48223 = (state_48243[(11)]);
var state_48243__$1 = state_48243;
var statearr_48265_49597 = state_48243__$1;
(statearr_48265_49597[(2)] = inst_48223);

(statearr_48265_49597[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (10))){
var inst_48215 = (state_48243[(2)]);
var state_48243__$1 = state_48243;
var statearr_48266_49598 = state_48243__$1;
(statearr_48266_49598[(2)] = inst_48215);

(statearr_48266_49598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (18))){
var inst_48226 = (state_48243[(2)]);
var state_48243__$1 = state_48243;
var statearr_48267_49599 = state_48243__$1;
(statearr_48267_49599[(2)] = inst_48226);

(statearr_48267_49599[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (8))){
var inst_48212 = cljs.core.async.close_BANG_(to);
var state_48243__$1 = state_48243;
var statearr_48268_49600 = state_48243__$1;
(statearr_48268_49600[(2)] = inst_48212);

(statearr_48268_49600[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0 = (function (){
var statearr_48269 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__);

(statearr_48269[(1)] = (1));

return statearr_48269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1 = (function (state_48243){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48243);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48270){var ex__47898__auto__ = e48270;
var statearr_48271_49601 = state_48243;
(statearr_48271_49601[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48243[(4)]))){
var statearr_48272_49602 = state_48243;
(statearr_48272_49602[(1)] = cljs.core.first((state_48243[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49603 = state_48243;
state_48243 = G__49603;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__ = function(state_48243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1.call(this,state_48243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48273 = f__47966__auto__();
(statearr_48273[(6)] = c__47965__auto__);

return statearr_48273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
}));

return c__47965__auto__;
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
var G__48275 = arguments.length;
switch (G__48275) {
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
var G__48277 = arguments.length;
switch (G__48277) {
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
var G__48279 = arguments.length;
switch (G__48279) {
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
var c__47965__auto___49612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48305){
var state_val_48306 = (state_48305[(1)]);
if((state_val_48306 === (7))){
var inst_48301 = (state_48305[(2)]);
var state_48305__$1 = state_48305;
var statearr_48307_49613 = state_48305__$1;
(statearr_48307_49613[(2)] = inst_48301);

(statearr_48307_49613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48306 === (1))){
var state_48305__$1 = state_48305;
var statearr_48308_49614 = state_48305__$1;
(statearr_48308_49614[(2)] = null);

(statearr_48308_49614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48306 === (4))){
var inst_48282 = (state_48305[(7)]);
var inst_48282__$1 = (state_48305[(2)]);
var inst_48283 = (inst_48282__$1 == null);
var state_48305__$1 = (function (){var statearr_48309 = state_48305;
(statearr_48309[(7)] = inst_48282__$1);

return statearr_48309;
})();
if(cljs.core.truth_(inst_48283)){
var statearr_48310_49615 = state_48305__$1;
(statearr_48310_49615[(1)] = (5));

} else {
var statearr_48311_49616 = state_48305__$1;
(statearr_48311_49616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48306 === (13))){
var state_48305__$1 = state_48305;
var statearr_48312_49617 = state_48305__$1;
(statearr_48312_49617[(2)] = null);

(statearr_48312_49617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48306 === (6))){
var inst_48282 = (state_48305[(7)]);
var inst_48288 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48282) : p.call(null,inst_48282));
var state_48305__$1 = state_48305;
if(cljs.core.truth_(inst_48288)){
var statearr_48313_49618 = state_48305__$1;
(statearr_48313_49618[(1)] = (9));

} else {
var statearr_48314_49623 = state_48305__$1;
(statearr_48314_49623[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48306 === (3))){
var inst_48303 = (state_48305[(2)]);
var state_48305__$1 = state_48305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48305__$1,inst_48303);
} else {
if((state_val_48306 === (12))){
var state_48305__$1 = state_48305;
var statearr_48315_49624 = state_48305__$1;
(statearr_48315_49624[(2)] = null);

(statearr_48315_49624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48306 === (2))){
var state_48305__$1 = state_48305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48305__$1,(4),ch);
} else {
if((state_val_48306 === (11))){
var inst_48282 = (state_48305[(7)]);
var inst_48292 = (state_48305[(2)]);
var state_48305__$1 = state_48305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48305__$1,(8),inst_48292,inst_48282);
} else {
if((state_val_48306 === (9))){
var state_48305__$1 = state_48305;
var statearr_48316_49625 = state_48305__$1;
(statearr_48316_49625[(2)] = tc);

(statearr_48316_49625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48306 === (5))){
var inst_48285 = cljs.core.async.close_BANG_(tc);
var inst_48286 = cljs.core.async.close_BANG_(fc);
var state_48305__$1 = (function (){var statearr_48317 = state_48305;
(statearr_48317[(8)] = inst_48285);

return statearr_48317;
})();
var statearr_48318_49626 = state_48305__$1;
(statearr_48318_49626[(2)] = inst_48286);

(statearr_48318_49626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48306 === (14))){
var inst_48299 = (state_48305[(2)]);
var state_48305__$1 = state_48305;
var statearr_48319_49630 = state_48305__$1;
(statearr_48319_49630[(2)] = inst_48299);

(statearr_48319_49630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48306 === (10))){
var state_48305__$1 = state_48305;
var statearr_48320_49631 = state_48305__$1;
(statearr_48320_49631[(2)] = fc);

(statearr_48320_49631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48306 === (8))){
var inst_48294 = (state_48305[(2)]);
var state_48305__$1 = state_48305;
if(cljs.core.truth_(inst_48294)){
var statearr_48321_49632 = state_48305__$1;
(statearr_48321_49632[(1)] = (12));

} else {
var statearr_48322_49633 = state_48305__$1;
(statearr_48322_49633[(1)] = (13));

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
var cljs$core$async$state_machine__47895__auto__ = null;
var cljs$core$async$state_machine__47895__auto____0 = (function (){
var statearr_48323 = [null,null,null,null,null,null,null,null,null];
(statearr_48323[(0)] = cljs$core$async$state_machine__47895__auto__);

(statearr_48323[(1)] = (1));

return statearr_48323;
});
var cljs$core$async$state_machine__47895__auto____1 = (function (state_48305){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48305);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48324){var ex__47898__auto__ = e48324;
var statearr_48325_49637 = state_48305;
(statearr_48325_49637[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48305[(4)]))){
var statearr_48326_49638 = state_48305;
(statearr_48326_49638[(1)] = cljs.core.first((state_48305[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49639 = state_48305;
state_48305 = G__49639;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$state_machine__47895__auto__ = function(state_48305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47895__auto____1.call(this,state_48305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47895__auto____0;
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47895__auto____1;
return cljs$core$async$state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48327 = f__47966__auto__();
(statearr_48327[(6)] = c__47965__auto___49612);

return statearr_48327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
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
var c__47965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48349){
var state_val_48350 = (state_48349[(1)]);
if((state_val_48350 === (7))){
var inst_48345 = (state_48349[(2)]);
var state_48349__$1 = state_48349;
var statearr_48351_49640 = state_48349__$1;
(statearr_48351_49640[(2)] = inst_48345);

(statearr_48351_49640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (1))){
var inst_48328 = init;
var inst_48329 = inst_48328;
var state_48349__$1 = (function (){var statearr_48352 = state_48349;
(statearr_48352[(7)] = inst_48329);

return statearr_48352;
})();
var statearr_48353_49641 = state_48349__$1;
(statearr_48353_49641[(2)] = null);

(statearr_48353_49641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (4))){
var inst_48332 = (state_48349[(8)]);
var inst_48332__$1 = (state_48349[(2)]);
var inst_48333 = (inst_48332__$1 == null);
var state_48349__$1 = (function (){var statearr_48354 = state_48349;
(statearr_48354[(8)] = inst_48332__$1);

return statearr_48354;
})();
if(cljs.core.truth_(inst_48333)){
var statearr_48355_49642 = state_48349__$1;
(statearr_48355_49642[(1)] = (5));

} else {
var statearr_48356_49643 = state_48349__$1;
(statearr_48356_49643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (6))){
var inst_48329 = (state_48349[(7)]);
var inst_48332 = (state_48349[(8)]);
var inst_48336 = (state_48349[(9)]);
var inst_48336__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_48329,inst_48332) : f.call(null,inst_48329,inst_48332));
var inst_48337 = cljs.core.reduced_QMARK_(inst_48336__$1);
var state_48349__$1 = (function (){var statearr_48357 = state_48349;
(statearr_48357[(9)] = inst_48336__$1);

return statearr_48357;
})();
if(inst_48337){
var statearr_48358_49645 = state_48349__$1;
(statearr_48358_49645[(1)] = (8));

} else {
var statearr_48359_49646 = state_48349__$1;
(statearr_48359_49646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (3))){
var inst_48347 = (state_48349[(2)]);
var state_48349__$1 = state_48349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48349__$1,inst_48347);
} else {
if((state_val_48350 === (2))){
var state_48349__$1 = state_48349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48349__$1,(4),ch);
} else {
if((state_val_48350 === (9))){
var inst_48336 = (state_48349[(9)]);
var inst_48329 = inst_48336;
var state_48349__$1 = (function (){var statearr_48360 = state_48349;
(statearr_48360[(7)] = inst_48329);

return statearr_48360;
})();
var statearr_48361_49647 = state_48349__$1;
(statearr_48361_49647[(2)] = null);

(statearr_48361_49647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (5))){
var inst_48329 = (state_48349[(7)]);
var state_48349__$1 = state_48349;
var statearr_48362_49648 = state_48349__$1;
(statearr_48362_49648[(2)] = inst_48329);

(statearr_48362_49648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (10))){
var inst_48343 = (state_48349[(2)]);
var state_48349__$1 = state_48349;
var statearr_48363_49649 = state_48349__$1;
(statearr_48363_49649[(2)] = inst_48343);

(statearr_48363_49649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (8))){
var inst_48336 = (state_48349[(9)]);
var inst_48339 = cljs.core.deref(inst_48336);
var state_48349__$1 = state_48349;
var statearr_48364_49650 = state_48349__$1;
(statearr_48364_49650[(2)] = inst_48339);

(statearr_48364_49650[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__47895__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47895__auto____0 = (function (){
var statearr_48365 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48365[(0)] = cljs$core$async$reduce_$_state_machine__47895__auto__);

(statearr_48365[(1)] = (1));

return statearr_48365;
});
var cljs$core$async$reduce_$_state_machine__47895__auto____1 = (function (state_48349){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48349);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48366){var ex__47898__auto__ = e48366;
var statearr_48367_49651 = state_48349;
(statearr_48367_49651[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48349[(4)]))){
var statearr_48368_49652 = state_48349;
(statearr_48368_49652[(1)] = cljs.core.first((state_48349[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49653 = state_48349;
state_48349 = G__49653;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47895__auto__ = function(state_48349){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47895__auto____1.call(this,state_48349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47895__auto____0;
cljs$core$async$reduce_$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47895__auto____1;
return cljs$core$async$reduce_$_state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48369 = f__47966__auto__();
(statearr_48369[(6)] = c__47965__auto__);

return statearr_48369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
}));

return c__47965__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48375){
var state_val_48376 = (state_48375[(1)]);
if((state_val_48376 === (1))){
var inst_48370 = cljs.core.async.reduce(f__$1,init,ch);
var state_48375__$1 = state_48375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48375__$1,(2),inst_48370);
} else {
if((state_val_48376 === (2))){
var inst_48372 = (state_48375[(2)]);
var inst_48373 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48372) : f__$1.call(null,inst_48372));
var state_48375__$1 = state_48375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48375__$1,inst_48373);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47895__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47895__auto____0 = (function (){
var statearr_48377 = [null,null,null,null,null,null,null];
(statearr_48377[(0)] = cljs$core$async$transduce_$_state_machine__47895__auto__);

(statearr_48377[(1)] = (1));

return statearr_48377;
});
var cljs$core$async$transduce_$_state_machine__47895__auto____1 = (function (state_48375){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48375);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48378){var ex__47898__auto__ = e48378;
var statearr_48379_49654 = state_48375;
(statearr_48379_49654[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48375[(4)]))){
var statearr_48380_49655 = state_48375;
(statearr_48380_49655[(1)] = cljs.core.first((state_48375[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49656 = state_48375;
state_48375 = G__49656;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47895__auto__ = function(state_48375){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47895__auto____1.call(this,state_48375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47895__auto____0;
cljs$core$async$transduce_$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47895__auto____1;
return cljs$core$async$transduce_$_state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48381 = f__47966__auto__();
(statearr_48381[(6)] = c__47965__auto__);

return statearr_48381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
}));

return c__47965__auto__;
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
var G__48383 = arguments.length;
switch (G__48383) {
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
var c__47965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48408){
var state_val_48409 = (state_48408[(1)]);
if((state_val_48409 === (7))){
var inst_48390 = (state_48408[(2)]);
var state_48408__$1 = state_48408;
var statearr_48410_49658 = state_48408__$1;
(statearr_48410_49658[(2)] = inst_48390);

(statearr_48410_49658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (1))){
var inst_48384 = cljs.core.seq(coll);
var inst_48385 = inst_48384;
var state_48408__$1 = (function (){var statearr_48411 = state_48408;
(statearr_48411[(7)] = inst_48385);

return statearr_48411;
})();
var statearr_48412_49659 = state_48408__$1;
(statearr_48412_49659[(2)] = null);

(statearr_48412_49659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (4))){
var inst_48385 = (state_48408[(7)]);
var inst_48388 = cljs.core.first(inst_48385);
var state_48408__$1 = state_48408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48408__$1,(7),ch,inst_48388);
} else {
if((state_val_48409 === (13))){
var inst_48402 = (state_48408[(2)]);
var state_48408__$1 = state_48408;
var statearr_48413_49660 = state_48408__$1;
(statearr_48413_49660[(2)] = inst_48402);

(statearr_48413_49660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (6))){
var inst_48393 = (state_48408[(2)]);
var state_48408__$1 = state_48408;
if(cljs.core.truth_(inst_48393)){
var statearr_48414_49661 = state_48408__$1;
(statearr_48414_49661[(1)] = (8));

} else {
var statearr_48415_49662 = state_48408__$1;
(statearr_48415_49662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (3))){
var inst_48406 = (state_48408[(2)]);
var state_48408__$1 = state_48408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48408__$1,inst_48406);
} else {
if((state_val_48409 === (12))){
var state_48408__$1 = state_48408;
var statearr_48416_49663 = state_48408__$1;
(statearr_48416_49663[(2)] = null);

(statearr_48416_49663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (2))){
var inst_48385 = (state_48408[(7)]);
var state_48408__$1 = state_48408;
if(cljs.core.truth_(inst_48385)){
var statearr_48417_49664 = state_48408__$1;
(statearr_48417_49664[(1)] = (4));

} else {
var statearr_48418_49665 = state_48408__$1;
(statearr_48418_49665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (11))){
var inst_48399 = cljs.core.async.close_BANG_(ch);
var state_48408__$1 = state_48408;
var statearr_48419_49666 = state_48408__$1;
(statearr_48419_49666[(2)] = inst_48399);

(statearr_48419_49666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (9))){
var state_48408__$1 = state_48408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48420_49668 = state_48408__$1;
(statearr_48420_49668[(1)] = (11));

} else {
var statearr_48421_49669 = state_48408__$1;
(statearr_48421_49669[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (5))){
var inst_48385 = (state_48408[(7)]);
var state_48408__$1 = state_48408;
var statearr_48422_49670 = state_48408__$1;
(statearr_48422_49670[(2)] = inst_48385);

(statearr_48422_49670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (10))){
var inst_48404 = (state_48408[(2)]);
var state_48408__$1 = state_48408;
var statearr_48423_49671 = state_48408__$1;
(statearr_48423_49671[(2)] = inst_48404);

(statearr_48423_49671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (8))){
var inst_48385 = (state_48408[(7)]);
var inst_48395 = cljs.core.next(inst_48385);
var inst_48385__$1 = inst_48395;
var state_48408__$1 = (function (){var statearr_48424 = state_48408;
(statearr_48424[(7)] = inst_48385__$1);

return statearr_48424;
})();
var statearr_48425_49678 = state_48408__$1;
(statearr_48425_49678[(2)] = null);

(statearr_48425_49678[(1)] = (2));


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
var cljs$core$async$state_machine__47895__auto__ = null;
var cljs$core$async$state_machine__47895__auto____0 = (function (){
var statearr_48426 = [null,null,null,null,null,null,null,null];
(statearr_48426[(0)] = cljs$core$async$state_machine__47895__auto__);

(statearr_48426[(1)] = (1));

return statearr_48426;
});
var cljs$core$async$state_machine__47895__auto____1 = (function (state_48408){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48408);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48427){var ex__47898__auto__ = e48427;
var statearr_48428_49688 = state_48408;
(statearr_48428_49688[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48408[(4)]))){
var statearr_48429_49695 = state_48408;
(statearr_48429_49695[(1)] = cljs.core.first((state_48408[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49696 = state_48408;
state_48408 = G__49696;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$state_machine__47895__auto__ = function(state_48408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47895__auto____1.call(this,state_48408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47895__auto____0;
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47895__auto____1;
return cljs$core$async$state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48430 = f__47966__auto__();
(statearr_48430[(6)] = c__47965__auto__);

return statearr_48430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
}));

return c__47965__auto__;
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
var G__48432 = arguments.length;
switch (G__48432) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_49699 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_49699(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49700 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_49700(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49701 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_49701(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49702 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_49702(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48433 = (function (ch,cs,meta48434){
this.ch = ch;
this.cs = cs;
this.meta48434 = meta48434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48435,meta48434__$1){
var self__ = this;
var _48435__$1 = this;
return (new cljs.core.async.t_cljs$core$async48433(self__.ch,self__.cs,meta48434__$1));
}));

(cljs.core.async.t_cljs$core$async48433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48435){
var self__ = this;
var _48435__$1 = this;
return self__.meta48434;
}));

(cljs.core.async.t_cljs$core$async48433.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48433.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48433.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48433.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48433.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48434","meta48434",1289527053,null)], null);
}));

(cljs.core.async.t_cljs$core$async48433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48433");

(cljs.core.async.t_cljs$core$async48433.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48433.
 */
cljs.core.async.__GT_t_cljs$core$async48433 = (function cljs$core$async$__GT_t_cljs$core$async48433(ch,cs,meta48434){
return (new cljs.core.async.t_cljs$core$async48433(ch,cs,meta48434));
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
var m = (new cljs.core.async.t_cljs$core$async48433(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__47965__auto___49712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48568){
var state_val_48569 = (state_48568[(1)]);
if((state_val_48569 === (7))){
var inst_48564 = (state_48568[(2)]);
var state_48568__$1 = state_48568;
var statearr_48570_49713 = state_48568__$1;
(statearr_48570_49713[(2)] = inst_48564);

(statearr_48570_49713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (20))){
var inst_48469 = (state_48568[(7)]);
var inst_48481 = cljs.core.first(inst_48469);
var inst_48482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48481,(0),null);
var inst_48483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48481,(1),null);
var state_48568__$1 = (function (){var statearr_48571 = state_48568;
(statearr_48571[(8)] = inst_48482);

return statearr_48571;
})();
if(cljs.core.truth_(inst_48483)){
var statearr_48572_49718 = state_48568__$1;
(statearr_48572_49718[(1)] = (22));

} else {
var statearr_48573_49719 = state_48568__$1;
(statearr_48573_49719[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (27))){
var inst_48511 = (state_48568[(9)]);
var inst_48513 = (state_48568[(10)]);
var inst_48518 = (state_48568[(11)]);
var inst_48438 = (state_48568[(12)]);
var inst_48518__$1 = cljs.core._nth(inst_48511,inst_48513);
var inst_48519 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48518__$1,inst_48438,done);
var state_48568__$1 = (function (){var statearr_48574 = state_48568;
(statearr_48574[(11)] = inst_48518__$1);

return statearr_48574;
})();
if(cljs.core.truth_(inst_48519)){
var statearr_48575_49720 = state_48568__$1;
(statearr_48575_49720[(1)] = (30));

} else {
var statearr_48576_49721 = state_48568__$1;
(statearr_48576_49721[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (1))){
var state_48568__$1 = state_48568;
var statearr_48577_49722 = state_48568__$1;
(statearr_48577_49722[(2)] = null);

(statearr_48577_49722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (24))){
var inst_48469 = (state_48568[(7)]);
var inst_48488 = (state_48568[(2)]);
var inst_48489 = cljs.core.next(inst_48469);
var inst_48447 = inst_48489;
var inst_48448 = null;
var inst_48449 = (0);
var inst_48450 = (0);
var state_48568__$1 = (function (){var statearr_48578 = state_48568;
(statearr_48578[(13)] = inst_48488);

(statearr_48578[(14)] = inst_48447);

(statearr_48578[(15)] = inst_48448);

(statearr_48578[(16)] = inst_48449);

(statearr_48578[(17)] = inst_48450);

return statearr_48578;
})();
var statearr_48579_49724 = state_48568__$1;
(statearr_48579_49724[(2)] = null);

(statearr_48579_49724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (39))){
var state_48568__$1 = state_48568;
var statearr_48583_49725 = state_48568__$1;
(statearr_48583_49725[(2)] = null);

(statearr_48583_49725[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (4))){
var inst_48438 = (state_48568[(12)]);
var inst_48438__$1 = (state_48568[(2)]);
var inst_48439 = (inst_48438__$1 == null);
var state_48568__$1 = (function (){var statearr_48584 = state_48568;
(statearr_48584[(12)] = inst_48438__$1);

return statearr_48584;
})();
if(cljs.core.truth_(inst_48439)){
var statearr_48585_49730 = state_48568__$1;
(statearr_48585_49730[(1)] = (5));

} else {
var statearr_48586_49731 = state_48568__$1;
(statearr_48586_49731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (15))){
var inst_48450 = (state_48568[(17)]);
var inst_48447 = (state_48568[(14)]);
var inst_48448 = (state_48568[(15)]);
var inst_48449 = (state_48568[(16)]);
var inst_48465 = (state_48568[(2)]);
var inst_48466 = (inst_48450 + (1));
var tmp48580 = inst_48449;
var tmp48581 = inst_48448;
var tmp48582 = inst_48447;
var inst_48447__$1 = tmp48582;
var inst_48448__$1 = tmp48581;
var inst_48449__$1 = tmp48580;
var inst_48450__$1 = inst_48466;
var state_48568__$1 = (function (){var statearr_48587 = state_48568;
(statearr_48587[(18)] = inst_48465);

(statearr_48587[(14)] = inst_48447__$1);

(statearr_48587[(15)] = inst_48448__$1);

(statearr_48587[(16)] = inst_48449__$1);

(statearr_48587[(17)] = inst_48450__$1);

return statearr_48587;
})();
var statearr_48588_49732 = state_48568__$1;
(statearr_48588_49732[(2)] = null);

(statearr_48588_49732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (21))){
var inst_48492 = (state_48568[(2)]);
var state_48568__$1 = state_48568;
var statearr_48592_49733 = state_48568__$1;
(statearr_48592_49733[(2)] = inst_48492);

(statearr_48592_49733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (31))){
var inst_48518 = (state_48568[(11)]);
var inst_48522 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48518);
var state_48568__$1 = state_48568;
var statearr_48593_49734 = state_48568__$1;
(statearr_48593_49734[(2)] = inst_48522);

(statearr_48593_49734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (32))){
var inst_48513 = (state_48568[(10)]);
var inst_48510 = (state_48568[(19)]);
var inst_48511 = (state_48568[(9)]);
var inst_48512 = (state_48568[(20)]);
var inst_48524 = (state_48568[(2)]);
var inst_48525 = (inst_48513 + (1));
var tmp48589 = inst_48510;
var tmp48590 = inst_48512;
var tmp48591 = inst_48511;
var inst_48510__$1 = tmp48589;
var inst_48511__$1 = tmp48591;
var inst_48512__$1 = tmp48590;
var inst_48513__$1 = inst_48525;
var state_48568__$1 = (function (){var statearr_48594 = state_48568;
(statearr_48594[(21)] = inst_48524);

(statearr_48594[(19)] = inst_48510__$1);

(statearr_48594[(9)] = inst_48511__$1);

(statearr_48594[(20)] = inst_48512__$1);

(statearr_48594[(10)] = inst_48513__$1);

return statearr_48594;
})();
var statearr_48595_49736 = state_48568__$1;
(statearr_48595_49736[(2)] = null);

(statearr_48595_49736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (40))){
var inst_48537 = (state_48568[(22)]);
var inst_48541 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48537);
var state_48568__$1 = state_48568;
var statearr_48596_49737 = state_48568__$1;
(statearr_48596_49737[(2)] = inst_48541);

(statearr_48596_49737[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (33))){
var inst_48528 = (state_48568[(23)]);
var inst_48530 = cljs.core.chunked_seq_QMARK_(inst_48528);
var state_48568__$1 = state_48568;
if(inst_48530){
var statearr_48597_49738 = state_48568__$1;
(statearr_48597_49738[(1)] = (36));

} else {
var statearr_48598_49739 = state_48568__$1;
(statearr_48598_49739[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (13))){
var inst_48459 = (state_48568[(24)]);
var inst_48462 = cljs.core.async.close_BANG_(inst_48459);
var state_48568__$1 = state_48568;
var statearr_48599_49741 = state_48568__$1;
(statearr_48599_49741[(2)] = inst_48462);

(statearr_48599_49741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (22))){
var inst_48482 = (state_48568[(8)]);
var inst_48485 = cljs.core.async.close_BANG_(inst_48482);
var state_48568__$1 = state_48568;
var statearr_48600_49745 = state_48568__$1;
(statearr_48600_49745[(2)] = inst_48485);

(statearr_48600_49745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (36))){
var inst_48528 = (state_48568[(23)]);
var inst_48532 = cljs.core.chunk_first(inst_48528);
var inst_48533 = cljs.core.chunk_rest(inst_48528);
var inst_48534 = cljs.core.count(inst_48532);
var inst_48510 = inst_48533;
var inst_48511 = inst_48532;
var inst_48512 = inst_48534;
var inst_48513 = (0);
var state_48568__$1 = (function (){var statearr_48601 = state_48568;
(statearr_48601[(19)] = inst_48510);

(statearr_48601[(9)] = inst_48511);

(statearr_48601[(20)] = inst_48512);

(statearr_48601[(10)] = inst_48513);

return statearr_48601;
})();
var statearr_48602_49747 = state_48568__$1;
(statearr_48602_49747[(2)] = null);

(statearr_48602_49747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (41))){
var inst_48528 = (state_48568[(23)]);
var inst_48543 = (state_48568[(2)]);
var inst_48544 = cljs.core.next(inst_48528);
var inst_48510 = inst_48544;
var inst_48511 = null;
var inst_48512 = (0);
var inst_48513 = (0);
var state_48568__$1 = (function (){var statearr_48603 = state_48568;
(statearr_48603[(25)] = inst_48543);

(statearr_48603[(19)] = inst_48510);

(statearr_48603[(9)] = inst_48511);

(statearr_48603[(20)] = inst_48512);

(statearr_48603[(10)] = inst_48513);

return statearr_48603;
})();
var statearr_48604_49751 = state_48568__$1;
(statearr_48604_49751[(2)] = null);

(statearr_48604_49751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (43))){
var state_48568__$1 = state_48568;
var statearr_48605_49753 = state_48568__$1;
(statearr_48605_49753[(2)] = null);

(statearr_48605_49753[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (29))){
var inst_48552 = (state_48568[(2)]);
var state_48568__$1 = state_48568;
var statearr_48606_49757 = state_48568__$1;
(statearr_48606_49757[(2)] = inst_48552);

(statearr_48606_49757[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (44))){
var inst_48561 = (state_48568[(2)]);
var state_48568__$1 = (function (){var statearr_48607 = state_48568;
(statearr_48607[(26)] = inst_48561);

return statearr_48607;
})();
var statearr_48608_49758 = state_48568__$1;
(statearr_48608_49758[(2)] = null);

(statearr_48608_49758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (6))){
var inst_48502 = (state_48568[(27)]);
var inst_48501 = cljs.core.deref(cs);
var inst_48502__$1 = cljs.core.keys(inst_48501);
var inst_48503 = cljs.core.count(inst_48502__$1);
var inst_48504 = cljs.core.reset_BANG_(dctr,inst_48503);
var inst_48509 = cljs.core.seq(inst_48502__$1);
var inst_48510 = inst_48509;
var inst_48511 = null;
var inst_48512 = (0);
var inst_48513 = (0);
var state_48568__$1 = (function (){var statearr_48609 = state_48568;
(statearr_48609[(27)] = inst_48502__$1);

(statearr_48609[(28)] = inst_48504);

(statearr_48609[(19)] = inst_48510);

(statearr_48609[(9)] = inst_48511);

(statearr_48609[(20)] = inst_48512);

(statearr_48609[(10)] = inst_48513);

return statearr_48609;
})();
var statearr_48610_49763 = state_48568__$1;
(statearr_48610_49763[(2)] = null);

(statearr_48610_49763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (28))){
var inst_48510 = (state_48568[(19)]);
var inst_48528 = (state_48568[(23)]);
var inst_48528__$1 = cljs.core.seq(inst_48510);
var state_48568__$1 = (function (){var statearr_48611 = state_48568;
(statearr_48611[(23)] = inst_48528__$1);

return statearr_48611;
})();
if(inst_48528__$1){
var statearr_48612_49765 = state_48568__$1;
(statearr_48612_49765[(1)] = (33));

} else {
var statearr_48613_49766 = state_48568__$1;
(statearr_48613_49766[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (25))){
var inst_48513 = (state_48568[(10)]);
var inst_48512 = (state_48568[(20)]);
var inst_48515 = (inst_48513 < inst_48512);
var inst_48516 = inst_48515;
var state_48568__$1 = state_48568;
if(cljs.core.truth_(inst_48516)){
var statearr_48614_49770 = state_48568__$1;
(statearr_48614_49770[(1)] = (27));

} else {
var statearr_48615_49771 = state_48568__$1;
(statearr_48615_49771[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (34))){
var state_48568__$1 = state_48568;
var statearr_48616_49772 = state_48568__$1;
(statearr_48616_49772[(2)] = null);

(statearr_48616_49772[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (17))){
var state_48568__$1 = state_48568;
var statearr_48617_49773 = state_48568__$1;
(statearr_48617_49773[(2)] = null);

(statearr_48617_49773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (3))){
var inst_48566 = (state_48568[(2)]);
var state_48568__$1 = state_48568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48568__$1,inst_48566);
} else {
if((state_val_48569 === (12))){
var inst_48497 = (state_48568[(2)]);
var state_48568__$1 = state_48568;
var statearr_48618_49778 = state_48568__$1;
(statearr_48618_49778[(2)] = inst_48497);

(statearr_48618_49778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (2))){
var state_48568__$1 = state_48568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48568__$1,(4),ch);
} else {
if((state_val_48569 === (23))){
var state_48568__$1 = state_48568;
var statearr_48619_49779 = state_48568__$1;
(statearr_48619_49779[(2)] = null);

(statearr_48619_49779[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (35))){
var inst_48550 = (state_48568[(2)]);
var state_48568__$1 = state_48568;
var statearr_48620_49780 = state_48568__$1;
(statearr_48620_49780[(2)] = inst_48550);

(statearr_48620_49780[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (19))){
var inst_48469 = (state_48568[(7)]);
var inst_48473 = cljs.core.chunk_first(inst_48469);
var inst_48474 = cljs.core.chunk_rest(inst_48469);
var inst_48475 = cljs.core.count(inst_48473);
var inst_48447 = inst_48474;
var inst_48448 = inst_48473;
var inst_48449 = inst_48475;
var inst_48450 = (0);
var state_48568__$1 = (function (){var statearr_48621 = state_48568;
(statearr_48621[(14)] = inst_48447);

(statearr_48621[(15)] = inst_48448);

(statearr_48621[(16)] = inst_48449);

(statearr_48621[(17)] = inst_48450);

return statearr_48621;
})();
var statearr_48622_49785 = state_48568__$1;
(statearr_48622_49785[(2)] = null);

(statearr_48622_49785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (11))){
var inst_48447 = (state_48568[(14)]);
var inst_48469 = (state_48568[(7)]);
var inst_48469__$1 = cljs.core.seq(inst_48447);
var state_48568__$1 = (function (){var statearr_48623 = state_48568;
(statearr_48623[(7)] = inst_48469__$1);

return statearr_48623;
})();
if(inst_48469__$1){
var statearr_48624_49786 = state_48568__$1;
(statearr_48624_49786[(1)] = (16));

} else {
var statearr_48625_49787 = state_48568__$1;
(statearr_48625_49787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (9))){
var inst_48499 = (state_48568[(2)]);
var state_48568__$1 = state_48568;
var statearr_48626_49788 = state_48568__$1;
(statearr_48626_49788[(2)] = inst_48499);

(statearr_48626_49788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (5))){
var inst_48445 = cljs.core.deref(cs);
var inst_48446 = cljs.core.seq(inst_48445);
var inst_48447 = inst_48446;
var inst_48448 = null;
var inst_48449 = (0);
var inst_48450 = (0);
var state_48568__$1 = (function (){var statearr_48627 = state_48568;
(statearr_48627[(14)] = inst_48447);

(statearr_48627[(15)] = inst_48448);

(statearr_48627[(16)] = inst_48449);

(statearr_48627[(17)] = inst_48450);

return statearr_48627;
})();
var statearr_48628_49793 = state_48568__$1;
(statearr_48628_49793[(2)] = null);

(statearr_48628_49793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (14))){
var state_48568__$1 = state_48568;
var statearr_48629_49794 = state_48568__$1;
(statearr_48629_49794[(2)] = null);

(statearr_48629_49794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (45))){
var inst_48558 = (state_48568[(2)]);
var state_48568__$1 = state_48568;
var statearr_48630_49796 = state_48568__$1;
(statearr_48630_49796[(2)] = inst_48558);

(statearr_48630_49796[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (26))){
var inst_48502 = (state_48568[(27)]);
var inst_48554 = (state_48568[(2)]);
var inst_48555 = cljs.core.seq(inst_48502);
var state_48568__$1 = (function (){var statearr_48631 = state_48568;
(statearr_48631[(29)] = inst_48554);

return statearr_48631;
})();
if(inst_48555){
var statearr_48632_49797 = state_48568__$1;
(statearr_48632_49797[(1)] = (42));

} else {
var statearr_48633_49798 = state_48568__$1;
(statearr_48633_49798[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (16))){
var inst_48469 = (state_48568[(7)]);
var inst_48471 = cljs.core.chunked_seq_QMARK_(inst_48469);
var state_48568__$1 = state_48568;
if(inst_48471){
var statearr_48634_49800 = state_48568__$1;
(statearr_48634_49800[(1)] = (19));

} else {
var statearr_48635_49801 = state_48568__$1;
(statearr_48635_49801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (38))){
var inst_48547 = (state_48568[(2)]);
var state_48568__$1 = state_48568;
var statearr_48636_49804 = state_48568__$1;
(statearr_48636_49804[(2)] = inst_48547);

(statearr_48636_49804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (30))){
var state_48568__$1 = state_48568;
var statearr_48637_49809 = state_48568__$1;
(statearr_48637_49809[(2)] = null);

(statearr_48637_49809[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (10))){
var inst_48448 = (state_48568[(15)]);
var inst_48450 = (state_48568[(17)]);
var inst_48458 = cljs.core._nth(inst_48448,inst_48450);
var inst_48459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48458,(0),null);
var inst_48460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48458,(1),null);
var state_48568__$1 = (function (){var statearr_48638 = state_48568;
(statearr_48638[(24)] = inst_48459);

return statearr_48638;
})();
if(cljs.core.truth_(inst_48460)){
var statearr_48639_49810 = state_48568__$1;
(statearr_48639_49810[(1)] = (13));

} else {
var statearr_48640_49811 = state_48568__$1;
(statearr_48640_49811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (18))){
var inst_48495 = (state_48568[(2)]);
var state_48568__$1 = state_48568;
var statearr_48641_49812 = state_48568__$1;
(statearr_48641_49812[(2)] = inst_48495);

(statearr_48641_49812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (42))){
var state_48568__$1 = state_48568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48568__$1,(45),dchan);
} else {
if((state_val_48569 === (37))){
var inst_48528 = (state_48568[(23)]);
var inst_48537 = (state_48568[(22)]);
var inst_48438 = (state_48568[(12)]);
var inst_48537__$1 = cljs.core.first(inst_48528);
var inst_48538 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48537__$1,inst_48438,done);
var state_48568__$1 = (function (){var statearr_48642 = state_48568;
(statearr_48642[(22)] = inst_48537__$1);

return statearr_48642;
})();
if(cljs.core.truth_(inst_48538)){
var statearr_48643_49817 = state_48568__$1;
(statearr_48643_49817[(1)] = (39));

} else {
var statearr_48644_49818 = state_48568__$1;
(statearr_48644_49818[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48569 === (8))){
var inst_48450 = (state_48568[(17)]);
var inst_48449 = (state_48568[(16)]);
var inst_48452 = (inst_48450 < inst_48449);
var inst_48453 = inst_48452;
var state_48568__$1 = state_48568;
if(cljs.core.truth_(inst_48453)){
var statearr_48645_49819 = state_48568__$1;
(statearr_48645_49819[(1)] = (10));

} else {
var statearr_48646_49820 = state_48568__$1;
(statearr_48646_49820[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__47895__auto__ = null;
var cljs$core$async$mult_$_state_machine__47895__auto____0 = (function (){
var statearr_48647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48647[(0)] = cljs$core$async$mult_$_state_machine__47895__auto__);

(statearr_48647[(1)] = (1));

return statearr_48647;
});
var cljs$core$async$mult_$_state_machine__47895__auto____1 = (function (state_48568){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48568);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48648){var ex__47898__auto__ = e48648;
var statearr_48649_49821 = state_48568;
(statearr_48649_49821[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48568[(4)]))){
var statearr_48650_49822 = state_48568;
(statearr_48650_49822[(1)] = cljs.core.first((state_48568[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49824 = state_48568;
state_48568 = G__49824;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47895__auto__ = function(state_48568){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47895__auto____1.call(this,state_48568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47895__auto____0;
cljs$core$async$mult_$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47895__auto____1;
return cljs$core$async$mult_$_state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48651 = f__47966__auto__();
(statearr_48651[(6)] = c__47965__auto___49712);

return statearr_48651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
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
var G__48653 = arguments.length;
switch (G__48653) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_49830 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_49830(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49837 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_49837(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49838 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49838(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49839 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_49839(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49841 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49841(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49844 = arguments.length;
var i__5750__auto___49845 = (0);
while(true){
if((i__5750__auto___49845 < len__5749__auto___49844)){
args__5755__auto__.push((arguments[i__5750__auto___49845]));

var G__49846 = (i__5750__auto___49845 + (1));
i__5750__auto___49845 = G__49846;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48658){
var map__48659 = p__48658;
var map__48659__$1 = cljs.core.__destructure_map(map__48659);
var opts = map__48659__$1;
var statearr_48660_49847 = state;
(statearr_48660_49847[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48661_49848 = state;
(statearr_48661_49848[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_48662_49854 = state;
(statearr_48662_49854[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48654){
var G__48655 = cljs.core.first(seq48654);
var seq48654__$1 = cljs.core.next(seq48654);
var G__48656 = cljs.core.first(seq48654__$1);
var seq48654__$2 = cljs.core.next(seq48654__$1);
var G__48657 = cljs.core.first(seq48654__$2);
var seq48654__$3 = cljs.core.next(seq48654__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48655,G__48656,G__48657,seq48654__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48663 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48664){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48664 = meta48664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48665,meta48664__$1){
var self__ = this;
var _48665__$1 = this;
return (new cljs.core.async.t_cljs$core$async48663(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48664__$1));
}));

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48665){
var self__ = this;
var _48665__$1 = this;
return self__.meta48664;
}));

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48664","meta48664",1886517799,null)], null);
}));

(cljs.core.async.t_cljs$core$async48663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48663");

(cljs.core.async.t_cljs$core$async48663.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48663.
 */
cljs.core.async.__GT_t_cljs$core$async48663 = (function cljs$core$async$__GT_t_cljs$core$async48663(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48664){
return (new cljs.core.async.t_cljs$core$async48663(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48664));
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
var m = (new cljs.core.async.t_cljs$core$async48663(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__47965__auto___49869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48733){
var state_val_48734 = (state_48733[(1)]);
if((state_val_48734 === (7))){
var inst_48693 = (state_48733[(2)]);
var state_48733__$1 = state_48733;
if(cljs.core.truth_(inst_48693)){
var statearr_48735_49870 = state_48733__$1;
(statearr_48735_49870[(1)] = (8));

} else {
var statearr_48736_49871 = state_48733__$1;
(statearr_48736_49871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (20))){
var inst_48686 = (state_48733[(7)]);
var state_48733__$1 = state_48733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48733__$1,(23),out,inst_48686);
} else {
if((state_val_48734 === (1))){
var inst_48669 = calc_state();
var inst_48670 = cljs.core.__destructure_map(inst_48669);
var inst_48671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48670,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48670,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48670,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48674 = inst_48669;
var state_48733__$1 = (function (){var statearr_48737 = state_48733;
(statearr_48737[(8)] = inst_48671);

(statearr_48737[(9)] = inst_48672);

(statearr_48737[(10)] = inst_48673);

(statearr_48737[(11)] = inst_48674);

return statearr_48737;
})();
var statearr_48738_49876 = state_48733__$1;
(statearr_48738_49876[(2)] = null);

(statearr_48738_49876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (24))){
var inst_48677 = (state_48733[(12)]);
var inst_48674 = inst_48677;
var state_48733__$1 = (function (){var statearr_48739 = state_48733;
(statearr_48739[(11)] = inst_48674);

return statearr_48739;
})();
var statearr_48740_49878 = state_48733__$1;
(statearr_48740_49878[(2)] = null);

(statearr_48740_49878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (4))){
var inst_48686 = (state_48733[(7)]);
var inst_48688 = (state_48733[(13)]);
var inst_48685 = (state_48733[(2)]);
var inst_48686__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48685,(0),null);
var inst_48687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48685,(1),null);
var inst_48688__$1 = (inst_48686__$1 == null);
var state_48733__$1 = (function (){var statearr_48741 = state_48733;
(statearr_48741[(7)] = inst_48686__$1);

(statearr_48741[(14)] = inst_48687);

(statearr_48741[(13)] = inst_48688__$1);

return statearr_48741;
})();
if(cljs.core.truth_(inst_48688__$1)){
var statearr_48742_49879 = state_48733__$1;
(statearr_48742_49879[(1)] = (5));

} else {
var statearr_48743_49880 = state_48733__$1;
(statearr_48743_49880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (15))){
var inst_48678 = (state_48733[(15)]);
var inst_48707 = (state_48733[(16)]);
var inst_48707__$1 = cljs.core.empty_QMARK_(inst_48678);
var state_48733__$1 = (function (){var statearr_48744 = state_48733;
(statearr_48744[(16)] = inst_48707__$1);

return statearr_48744;
})();
if(inst_48707__$1){
var statearr_48745_49881 = state_48733__$1;
(statearr_48745_49881[(1)] = (17));

} else {
var statearr_48746_49882 = state_48733__$1;
(statearr_48746_49882[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (21))){
var inst_48677 = (state_48733[(12)]);
var inst_48674 = inst_48677;
var state_48733__$1 = (function (){var statearr_48747 = state_48733;
(statearr_48747[(11)] = inst_48674);

return statearr_48747;
})();
var statearr_48748_49883 = state_48733__$1;
(statearr_48748_49883[(2)] = null);

(statearr_48748_49883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (13))){
var inst_48700 = (state_48733[(2)]);
var inst_48701 = calc_state();
var inst_48674 = inst_48701;
var state_48733__$1 = (function (){var statearr_48749 = state_48733;
(statearr_48749[(17)] = inst_48700);

(statearr_48749[(11)] = inst_48674);

return statearr_48749;
})();
var statearr_48750_49884 = state_48733__$1;
(statearr_48750_49884[(2)] = null);

(statearr_48750_49884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (22))){
var inst_48727 = (state_48733[(2)]);
var state_48733__$1 = state_48733;
var statearr_48751_49885 = state_48733__$1;
(statearr_48751_49885[(2)] = inst_48727);

(statearr_48751_49885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (6))){
var inst_48687 = (state_48733[(14)]);
var inst_48691 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48687,change);
var state_48733__$1 = state_48733;
var statearr_48752_49887 = state_48733__$1;
(statearr_48752_49887[(2)] = inst_48691);

(statearr_48752_49887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (25))){
var state_48733__$1 = state_48733;
var statearr_48753_49888 = state_48733__$1;
(statearr_48753_49888[(2)] = null);

(statearr_48753_49888[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (17))){
var inst_48679 = (state_48733[(18)]);
var inst_48687 = (state_48733[(14)]);
var inst_48709 = (inst_48679.cljs$core$IFn$_invoke$arity$1 ? inst_48679.cljs$core$IFn$_invoke$arity$1(inst_48687) : inst_48679.call(null,inst_48687));
var inst_48710 = cljs.core.not(inst_48709);
var state_48733__$1 = state_48733;
var statearr_48754_49889 = state_48733__$1;
(statearr_48754_49889[(2)] = inst_48710);

(statearr_48754_49889[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (3))){
var inst_48731 = (state_48733[(2)]);
var state_48733__$1 = state_48733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48733__$1,inst_48731);
} else {
if((state_val_48734 === (12))){
var state_48733__$1 = state_48733;
var statearr_48755_49891 = state_48733__$1;
(statearr_48755_49891[(2)] = null);

(statearr_48755_49891[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (2))){
var inst_48674 = (state_48733[(11)]);
var inst_48677 = (state_48733[(12)]);
var inst_48677__$1 = cljs.core.__destructure_map(inst_48674);
var inst_48678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48677__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48677__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48677__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48733__$1 = (function (){var statearr_48756 = state_48733;
(statearr_48756[(12)] = inst_48677__$1);

(statearr_48756[(15)] = inst_48678);

(statearr_48756[(18)] = inst_48679);

return statearr_48756;
})();
return cljs.core.async.ioc_alts_BANG_(state_48733__$1,(4),inst_48680);
} else {
if((state_val_48734 === (23))){
var inst_48718 = (state_48733[(2)]);
var state_48733__$1 = state_48733;
if(cljs.core.truth_(inst_48718)){
var statearr_48757_49903 = state_48733__$1;
(statearr_48757_49903[(1)] = (24));

} else {
var statearr_48758_49904 = state_48733__$1;
(statearr_48758_49904[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (19))){
var inst_48713 = (state_48733[(2)]);
var state_48733__$1 = state_48733;
var statearr_48759_49907 = state_48733__$1;
(statearr_48759_49907[(2)] = inst_48713);

(statearr_48759_49907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (11))){
var inst_48687 = (state_48733[(14)]);
var inst_48697 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48687);
var state_48733__$1 = state_48733;
var statearr_48760_49916 = state_48733__$1;
(statearr_48760_49916[(2)] = inst_48697);

(statearr_48760_49916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (9))){
var inst_48678 = (state_48733[(15)]);
var inst_48687 = (state_48733[(14)]);
var inst_48704 = (state_48733[(19)]);
var inst_48704__$1 = (inst_48678.cljs$core$IFn$_invoke$arity$1 ? inst_48678.cljs$core$IFn$_invoke$arity$1(inst_48687) : inst_48678.call(null,inst_48687));
var state_48733__$1 = (function (){var statearr_48761 = state_48733;
(statearr_48761[(19)] = inst_48704__$1);

return statearr_48761;
})();
if(cljs.core.truth_(inst_48704__$1)){
var statearr_48762_49925 = state_48733__$1;
(statearr_48762_49925[(1)] = (14));

} else {
var statearr_48763_49926 = state_48733__$1;
(statearr_48763_49926[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (5))){
var inst_48688 = (state_48733[(13)]);
var state_48733__$1 = state_48733;
var statearr_48764_49927 = state_48733__$1;
(statearr_48764_49927[(2)] = inst_48688);

(statearr_48764_49927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (14))){
var inst_48704 = (state_48733[(19)]);
var state_48733__$1 = state_48733;
var statearr_48765_49928 = state_48733__$1;
(statearr_48765_49928[(2)] = inst_48704);

(statearr_48765_49928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (26))){
var inst_48723 = (state_48733[(2)]);
var state_48733__$1 = state_48733;
var statearr_48766_49929 = state_48733__$1;
(statearr_48766_49929[(2)] = inst_48723);

(statearr_48766_49929[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (16))){
var inst_48715 = (state_48733[(2)]);
var state_48733__$1 = state_48733;
if(cljs.core.truth_(inst_48715)){
var statearr_48767_49930 = state_48733__$1;
(statearr_48767_49930[(1)] = (20));

} else {
var statearr_48768_49931 = state_48733__$1;
(statearr_48768_49931[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (10))){
var inst_48729 = (state_48733[(2)]);
var state_48733__$1 = state_48733;
var statearr_48769_49935 = state_48733__$1;
(statearr_48769_49935[(2)] = inst_48729);

(statearr_48769_49935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (18))){
var inst_48707 = (state_48733[(16)]);
var state_48733__$1 = state_48733;
var statearr_48770_49936 = state_48733__$1;
(statearr_48770_49936[(2)] = inst_48707);

(statearr_48770_49936[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48734 === (8))){
var inst_48686 = (state_48733[(7)]);
var inst_48695 = (inst_48686 == null);
var state_48733__$1 = state_48733;
if(cljs.core.truth_(inst_48695)){
var statearr_48771_49937 = state_48733__$1;
(statearr_48771_49937[(1)] = (11));

} else {
var statearr_48772_49938 = state_48733__$1;
(statearr_48772_49938[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__47895__auto__ = null;
var cljs$core$async$mix_$_state_machine__47895__auto____0 = (function (){
var statearr_48773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48773[(0)] = cljs$core$async$mix_$_state_machine__47895__auto__);

(statearr_48773[(1)] = (1));

return statearr_48773;
});
var cljs$core$async$mix_$_state_machine__47895__auto____1 = (function (state_48733){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48733);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48774){var ex__47898__auto__ = e48774;
var statearr_48775_49942 = state_48733;
(statearr_48775_49942[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48733[(4)]))){
var statearr_48776_49943 = state_48733;
(statearr_48776_49943[(1)] = cljs.core.first((state_48733[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49944 = state_48733;
state_48733 = G__49944;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47895__auto__ = function(state_48733){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47895__auto____1.call(this,state_48733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47895__auto____0;
cljs$core$async$mix_$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47895__auto____1;
return cljs$core$async$mix_$_state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48777 = f__47966__auto__();
(statearr_48777[(6)] = c__47965__auto___49869);

return statearr_48777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_49946 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_49946(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49952 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_49952(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49953 = (function() {
var G__49954 = null;
var G__49954__1 = (function (p){
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
var G__49954__2 = (function (p,v){
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
G__49954 = function(p,v){
switch(arguments.length){
case 1:
return G__49954__1.call(this,p);
case 2:
return G__49954__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49954.cljs$core$IFn$_invoke$arity$1 = G__49954__1;
G__49954.cljs$core$IFn$_invoke$arity$2 = G__49954__2;
return G__49954;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48779 = arguments.length;
switch (G__48779) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49953(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49953(p,v);
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
cljs.core.async.t_cljs$core$async48783 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48784){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48784 = meta48784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48785,meta48784__$1){
var self__ = this;
var _48785__$1 = this;
return (new cljs.core.async.t_cljs$core$async48783(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48784__$1));
}));

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48785){
var self__ = this;
var _48785__$1 = this;
return self__.meta48784;
}));

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48784","meta48784",1514098586,null)], null);
}));

(cljs.core.async.t_cljs$core$async48783.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48783");

(cljs.core.async.t_cljs$core$async48783.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48783");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48783.
 */
cljs.core.async.__GT_t_cljs$core$async48783 = (function cljs$core$async$__GT_t_cljs$core$async48783(ch,topic_fn,buf_fn,mults,ensure_mult,meta48784){
return (new cljs.core.async.t_cljs$core$async48783(ch,topic_fn,buf_fn,mults,ensure_mult,meta48784));
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
var G__48782 = arguments.length;
switch (G__48782) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48780_SHARP_){
if(cljs.core.truth_((p1__48780_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48780_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48780_SHARP_.call(null,topic)))){
return p1__48780_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48780_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async48783(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__47965__auto___49957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48857){
var state_val_48858 = (state_48857[(1)]);
if((state_val_48858 === (7))){
var inst_48853 = (state_48857[(2)]);
var state_48857__$1 = state_48857;
var statearr_48859_49958 = state_48857__$1;
(statearr_48859_49958[(2)] = inst_48853);

(statearr_48859_49958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (20))){
var state_48857__$1 = state_48857;
var statearr_48860_49959 = state_48857__$1;
(statearr_48860_49959[(2)] = null);

(statearr_48860_49959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (1))){
var state_48857__$1 = state_48857;
var statearr_48861_49960 = state_48857__$1;
(statearr_48861_49960[(2)] = null);

(statearr_48861_49960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (24))){
var inst_48836 = (state_48857[(7)]);
var inst_48845 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48836);
var state_48857__$1 = state_48857;
var statearr_48862_49961 = state_48857__$1;
(statearr_48862_49961[(2)] = inst_48845);

(statearr_48862_49961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (4))){
var inst_48788 = (state_48857[(8)]);
var inst_48788__$1 = (state_48857[(2)]);
var inst_48789 = (inst_48788__$1 == null);
var state_48857__$1 = (function (){var statearr_48863 = state_48857;
(statearr_48863[(8)] = inst_48788__$1);

return statearr_48863;
})();
if(cljs.core.truth_(inst_48789)){
var statearr_48864_49962 = state_48857__$1;
(statearr_48864_49962[(1)] = (5));

} else {
var statearr_48865_49963 = state_48857__$1;
(statearr_48865_49963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (15))){
var inst_48830 = (state_48857[(2)]);
var state_48857__$1 = state_48857;
var statearr_48866_49964 = state_48857__$1;
(statearr_48866_49964[(2)] = inst_48830);

(statearr_48866_49964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (21))){
var inst_48850 = (state_48857[(2)]);
var state_48857__$1 = (function (){var statearr_48867 = state_48857;
(statearr_48867[(9)] = inst_48850);

return statearr_48867;
})();
var statearr_48868_49965 = state_48857__$1;
(statearr_48868_49965[(2)] = null);

(statearr_48868_49965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (13))){
var inst_48812 = (state_48857[(10)]);
var inst_48814 = cljs.core.chunked_seq_QMARK_(inst_48812);
var state_48857__$1 = state_48857;
if(inst_48814){
var statearr_48869_49966 = state_48857__$1;
(statearr_48869_49966[(1)] = (16));

} else {
var statearr_48870_49968 = state_48857__$1;
(statearr_48870_49968[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (22))){
var inst_48842 = (state_48857[(2)]);
var state_48857__$1 = state_48857;
if(cljs.core.truth_(inst_48842)){
var statearr_48871_49969 = state_48857__$1;
(statearr_48871_49969[(1)] = (23));

} else {
var statearr_48872_49970 = state_48857__$1;
(statearr_48872_49970[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (6))){
var inst_48788 = (state_48857[(8)]);
var inst_48836 = (state_48857[(7)]);
var inst_48838 = (state_48857[(11)]);
var inst_48836__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48788) : topic_fn.call(null,inst_48788));
var inst_48837 = cljs.core.deref(mults);
var inst_48838__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48837,inst_48836__$1);
var state_48857__$1 = (function (){var statearr_48873 = state_48857;
(statearr_48873[(7)] = inst_48836__$1);

(statearr_48873[(11)] = inst_48838__$1);

return statearr_48873;
})();
if(cljs.core.truth_(inst_48838__$1)){
var statearr_48874_49975 = state_48857__$1;
(statearr_48874_49975[(1)] = (19));

} else {
var statearr_48875_49976 = state_48857__$1;
(statearr_48875_49976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (25))){
var inst_48847 = (state_48857[(2)]);
var state_48857__$1 = state_48857;
var statearr_48876_49977 = state_48857__$1;
(statearr_48876_49977[(2)] = inst_48847);

(statearr_48876_49977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (17))){
var inst_48812 = (state_48857[(10)]);
var inst_48821 = cljs.core.first(inst_48812);
var inst_48822 = cljs.core.async.muxch_STAR_(inst_48821);
var inst_48823 = cljs.core.async.close_BANG_(inst_48822);
var inst_48824 = cljs.core.next(inst_48812);
var inst_48798 = inst_48824;
var inst_48799 = null;
var inst_48800 = (0);
var inst_48801 = (0);
var state_48857__$1 = (function (){var statearr_48877 = state_48857;
(statearr_48877[(12)] = inst_48823);

(statearr_48877[(13)] = inst_48798);

(statearr_48877[(14)] = inst_48799);

(statearr_48877[(15)] = inst_48800);

(statearr_48877[(16)] = inst_48801);

return statearr_48877;
})();
var statearr_48878_49979 = state_48857__$1;
(statearr_48878_49979[(2)] = null);

(statearr_48878_49979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (3))){
var inst_48855 = (state_48857[(2)]);
var state_48857__$1 = state_48857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48857__$1,inst_48855);
} else {
if((state_val_48858 === (12))){
var inst_48832 = (state_48857[(2)]);
var state_48857__$1 = state_48857;
var statearr_48879_49980 = state_48857__$1;
(statearr_48879_49980[(2)] = inst_48832);

(statearr_48879_49980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (2))){
var state_48857__$1 = state_48857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48857__$1,(4),ch);
} else {
if((state_val_48858 === (23))){
var state_48857__$1 = state_48857;
var statearr_48880_49981 = state_48857__$1;
(statearr_48880_49981[(2)] = null);

(statearr_48880_49981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (19))){
var inst_48838 = (state_48857[(11)]);
var inst_48788 = (state_48857[(8)]);
var inst_48840 = cljs.core.async.muxch_STAR_(inst_48838);
var state_48857__$1 = state_48857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48857__$1,(22),inst_48840,inst_48788);
} else {
if((state_val_48858 === (11))){
var inst_48798 = (state_48857[(13)]);
var inst_48812 = (state_48857[(10)]);
var inst_48812__$1 = cljs.core.seq(inst_48798);
var state_48857__$1 = (function (){var statearr_48881 = state_48857;
(statearr_48881[(10)] = inst_48812__$1);

return statearr_48881;
})();
if(inst_48812__$1){
var statearr_48882_49985 = state_48857__$1;
(statearr_48882_49985[(1)] = (13));

} else {
var statearr_48883_49986 = state_48857__$1;
(statearr_48883_49986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (9))){
var inst_48834 = (state_48857[(2)]);
var state_48857__$1 = state_48857;
var statearr_48884_49988 = state_48857__$1;
(statearr_48884_49988[(2)] = inst_48834);

(statearr_48884_49988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (5))){
var inst_48795 = cljs.core.deref(mults);
var inst_48796 = cljs.core.vals(inst_48795);
var inst_48797 = cljs.core.seq(inst_48796);
var inst_48798 = inst_48797;
var inst_48799 = null;
var inst_48800 = (0);
var inst_48801 = (0);
var state_48857__$1 = (function (){var statearr_48885 = state_48857;
(statearr_48885[(13)] = inst_48798);

(statearr_48885[(14)] = inst_48799);

(statearr_48885[(15)] = inst_48800);

(statearr_48885[(16)] = inst_48801);

return statearr_48885;
})();
var statearr_48886_49989 = state_48857__$1;
(statearr_48886_49989[(2)] = null);

(statearr_48886_49989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (14))){
var state_48857__$1 = state_48857;
var statearr_48890_49990 = state_48857__$1;
(statearr_48890_49990[(2)] = null);

(statearr_48890_49990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (16))){
var inst_48812 = (state_48857[(10)]);
var inst_48816 = cljs.core.chunk_first(inst_48812);
var inst_48817 = cljs.core.chunk_rest(inst_48812);
var inst_48818 = cljs.core.count(inst_48816);
var inst_48798 = inst_48817;
var inst_48799 = inst_48816;
var inst_48800 = inst_48818;
var inst_48801 = (0);
var state_48857__$1 = (function (){var statearr_48891 = state_48857;
(statearr_48891[(13)] = inst_48798);

(statearr_48891[(14)] = inst_48799);

(statearr_48891[(15)] = inst_48800);

(statearr_48891[(16)] = inst_48801);

return statearr_48891;
})();
var statearr_48892_49991 = state_48857__$1;
(statearr_48892_49991[(2)] = null);

(statearr_48892_49991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (10))){
var inst_48799 = (state_48857[(14)]);
var inst_48801 = (state_48857[(16)]);
var inst_48798 = (state_48857[(13)]);
var inst_48800 = (state_48857[(15)]);
var inst_48806 = cljs.core._nth(inst_48799,inst_48801);
var inst_48807 = cljs.core.async.muxch_STAR_(inst_48806);
var inst_48808 = cljs.core.async.close_BANG_(inst_48807);
var inst_48809 = (inst_48801 + (1));
var tmp48887 = inst_48799;
var tmp48888 = inst_48798;
var tmp48889 = inst_48800;
var inst_48798__$1 = tmp48888;
var inst_48799__$1 = tmp48887;
var inst_48800__$1 = tmp48889;
var inst_48801__$1 = inst_48809;
var state_48857__$1 = (function (){var statearr_48893 = state_48857;
(statearr_48893[(17)] = inst_48808);

(statearr_48893[(13)] = inst_48798__$1);

(statearr_48893[(14)] = inst_48799__$1);

(statearr_48893[(15)] = inst_48800__$1);

(statearr_48893[(16)] = inst_48801__$1);

return statearr_48893;
})();
var statearr_48894_49992 = state_48857__$1;
(statearr_48894_49992[(2)] = null);

(statearr_48894_49992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (18))){
var inst_48827 = (state_48857[(2)]);
var state_48857__$1 = state_48857;
var statearr_48895_49993 = state_48857__$1;
(statearr_48895_49993[(2)] = inst_48827);

(statearr_48895_49993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48858 === (8))){
var inst_48801 = (state_48857[(16)]);
var inst_48800 = (state_48857[(15)]);
var inst_48803 = (inst_48801 < inst_48800);
var inst_48804 = inst_48803;
var state_48857__$1 = state_48857;
if(cljs.core.truth_(inst_48804)){
var statearr_48896_49994 = state_48857__$1;
(statearr_48896_49994[(1)] = (10));

} else {
var statearr_48897_49995 = state_48857__$1;
(statearr_48897_49995[(1)] = (11));

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
var cljs$core$async$state_machine__47895__auto__ = null;
var cljs$core$async$state_machine__47895__auto____0 = (function (){
var statearr_48898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48898[(0)] = cljs$core$async$state_machine__47895__auto__);

(statearr_48898[(1)] = (1));

return statearr_48898;
});
var cljs$core$async$state_machine__47895__auto____1 = (function (state_48857){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48857);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48899){var ex__47898__auto__ = e48899;
var statearr_48900_49996 = state_48857;
(statearr_48900_49996[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48857[(4)]))){
var statearr_48901_49997 = state_48857;
(statearr_48901_49997[(1)] = cljs.core.first((state_48857[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49998 = state_48857;
state_48857 = G__49998;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$state_machine__47895__auto__ = function(state_48857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47895__auto____1.call(this,state_48857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47895__auto____0;
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47895__auto____1;
return cljs$core$async$state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48902 = f__47966__auto__();
(statearr_48902[(6)] = c__47965__auto___49957);

return statearr_48902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
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
var G__48904 = arguments.length;
switch (G__48904) {
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
var G__48906 = arguments.length;
switch (G__48906) {
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
var G__48908 = arguments.length;
switch (G__48908) {
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
var c__47965__auto___50004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_48951){
var state_val_48952 = (state_48951[(1)]);
if((state_val_48952 === (7))){
var state_48951__$1 = state_48951;
var statearr_48953_50005 = state_48951__$1;
(statearr_48953_50005[(2)] = null);

(statearr_48953_50005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (1))){
var state_48951__$1 = state_48951;
var statearr_48954_50006 = state_48951__$1;
(statearr_48954_50006[(2)] = null);

(statearr_48954_50006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (4))){
var inst_48912 = (state_48951[(7)]);
var inst_48911 = (state_48951[(8)]);
var inst_48914 = (inst_48912 < inst_48911);
var state_48951__$1 = state_48951;
if(cljs.core.truth_(inst_48914)){
var statearr_48955_50007 = state_48951__$1;
(statearr_48955_50007[(1)] = (6));

} else {
var statearr_48956_50008 = state_48951__$1;
(statearr_48956_50008[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (15))){
var inst_48937 = (state_48951[(9)]);
var inst_48942 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48937);
var state_48951__$1 = state_48951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48951__$1,(17),out,inst_48942);
} else {
if((state_val_48952 === (13))){
var inst_48937 = (state_48951[(9)]);
var inst_48937__$1 = (state_48951[(2)]);
var inst_48938 = cljs.core.some(cljs.core.nil_QMARK_,inst_48937__$1);
var state_48951__$1 = (function (){var statearr_48957 = state_48951;
(statearr_48957[(9)] = inst_48937__$1);

return statearr_48957;
})();
if(cljs.core.truth_(inst_48938)){
var statearr_48958_50009 = state_48951__$1;
(statearr_48958_50009[(1)] = (14));

} else {
var statearr_48959_50010 = state_48951__$1;
(statearr_48959_50010[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (6))){
var state_48951__$1 = state_48951;
var statearr_48960_50011 = state_48951__$1;
(statearr_48960_50011[(2)] = null);

(statearr_48960_50011[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (17))){
var inst_48944 = (state_48951[(2)]);
var state_48951__$1 = (function (){var statearr_48962 = state_48951;
(statearr_48962[(10)] = inst_48944);

return statearr_48962;
})();
var statearr_48963_50013 = state_48951__$1;
(statearr_48963_50013[(2)] = null);

(statearr_48963_50013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (3))){
var inst_48949 = (state_48951[(2)]);
var state_48951__$1 = state_48951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48951__$1,inst_48949);
} else {
if((state_val_48952 === (12))){
var _ = (function (){var statearr_48964 = state_48951;
(statearr_48964[(4)] = cljs.core.rest((state_48951[(4)])));

return statearr_48964;
})();
var state_48951__$1 = state_48951;
var ex48961 = (state_48951__$1[(2)]);
var statearr_48965_50018 = state_48951__$1;
(statearr_48965_50018[(5)] = ex48961);


if((ex48961 instanceof Object)){
var statearr_48966_50019 = state_48951__$1;
(statearr_48966_50019[(1)] = (11));

(statearr_48966_50019[(5)] = null);

} else {
throw ex48961;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (2))){
var inst_48910 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48911 = cnt;
var inst_48912 = (0);
var state_48951__$1 = (function (){var statearr_48967 = state_48951;
(statearr_48967[(11)] = inst_48910);

(statearr_48967[(8)] = inst_48911);

(statearr_48967[(7)] = inst_48912);

return statearr_48967;
})();
var statearr_48968_50020 = state_48951__$1;
(statearr_48968_50020[(2)] = null);

(statearr_48968_50020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (11))){
var inst_48916 = (state_48951[(2)]);
var inst_48917 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48951__$1 = (function (){var statearr_48969 = state_48951;
(statearr_48969[(12)] = inst_48916);

return statearr_48969;
})();
var statearr_48970_50021 = state_48951__$1;
(statearr_48970_50021[(2)] = inst_48917);

(statearr_48970_50021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (9))){
var inst_48912 = (state_48951[(7)]);
var _ = (function (){var statearr_48971 = state_48951;
(statearr_48971[(4)] = cljs.core.cons((12),(state_48951[(4)])));

return statearr_48971;
})();
var inst_48923 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48912) : chs__$1.call(null,inst_48912));
var inst_48924 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48912) : done.call(null,inst_48912));
var inst_48925 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48923,inst_48924);
var ___$1 = (function (){var statearr_48972 = state_48951;
(statearr_48972[(4)] = cljs.core.rest((state_48951[(4)])));

return statearr_48972;
})();
var state_48951__$1 = state_48951;
var statearr_48973_50022 = state_48951__$1;
(statearr_48973_50022[(2)] = inst_48925);

(statearr_48973_50022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (5))){
var inst_48935 = (state_48951[(2)]);
var state_48951__$1 = (function (){var statearr_48974 = state_48951;
(statearr_48974[(13)] = inst_48935);

return statearr_48974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48951__$1,(13),dchan);
} else {
if((state_val_48952 === (14))){
var inst_48940 = cljs.core.async.close_BANG_(out);
var state_48951__$1 = state_48951;
var statearr_48975_50023 = state_48951__$1;
(statearr_48975_50023[(2)] = inst_48940);

(statearr_48975_50023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (16))){
var inst_48947 = (state_48951[(2)]);
var state_48951__$1 = state_48951;
var statearr_48976_50024 = state_48951__$1;
(statearr_48976_50024[(2)] = inst_48947);

(statearr_48976_50024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (10))){
var inst_48912 = (state_48951[(7)]);
var inst_48928 = (state_48951[(2)]);
var inst_48929 = (inst_48912 + (1));
var inst_48912__$1 = inst_48929;
var state_48951__$1 = (function (){var statearr_48977 = state_48951;
(statearr_48977[(14)] = inst_48928);

(statearr_48977[(7)] = inst_48912__$1);

return statearr_48977;
})();
var statearr_48978_50025 = state_48951__$1;
(statearr_48978_50025[(2)] = null);

(statearr_48978_50025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48952 === (8))){
var inst_48933 = (state_48951[(2)]);
var state_48951__$1 = state_48951;
var statearr_48979_50026 = state_48951__$1;
(statearr_48979_50026[(2)] = inst_48933);

(statearr_48979_50026[(1)] = (5));


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
var cljs$core$async$state_machine__47895__auto__ = null;
var cljs$core$async$state_machine__47895__auto____0 = (function (){
var statearr_48980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48980[(0)] = cljs$core$async$state_machine__47895__auto__);

(statearr_48980[(1)] = (1));

return statearr_48980;
});
var cljs$core$async$state_machine__47895__auto____1 = (function (state_48951){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_48951);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e48981){var ex__47898__auto__ = e48981;
var statearr_48982_50027 = state_48951;
(statearr_48982_50027[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_48951[(4)]))){
var statearr_48983_50028 = state_48951;
(statearr_48983_50028[(1)] = cljs.core.first((state_48951[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50029 = state_48951;
state_48951 = G__50029;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$state_machine__47895__auto__ = function(state_48951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47895__auto____1.call(this,state_48951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47895__auto____0;
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47895__auto____1;
return cljs$core$async$state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_48984 = f__47966__auto__();
(statearr_48984[(6)] = c__47965__auto___50004);

return statearr_48984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
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
var G__48987 = arguments.length;
switch (G__48987) {
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
var c__47965__auto___50031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_49019){
var state_val_49020 = (state_49019[(1)]);
if((state_val_49020 === (7))){
var inst_48998 = (state_49019[(7)]);
var inst_48999 = (state_49019[(8)]);
var inst_48998__$1 = (state_49019[(2)]);
var inst_48999__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48998__$1,(0),null);
var inst_49000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48998__$1,(1),null);
var inst_49001 = (inst_48999__$1 == null);
var state_49019__$1 = (function (){var statearr_49021 = state_49019;
(statearr_49021[(7)] = inst_48998__$1);

(statearr_49021[(8)] = inst_48999__$1);

(statearr_49021[(9)] = inst_49000);

return statearr_49021;
})();
if(cljs.core.truth_(inst_49001)){
var statearr_49022_50037 = state_49019__$1;
(statearr_49022_50037[(1)] = (8));

} else {
var statearr_49023_50038 = state_49019__$1;
(statearr_49023_50038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (1))){
var inst_48988 = cljs.core.vec(chs);
var inst_48989 = inst_48988;
var state_49019__$1 = (function (){var statearr_49024 = state_49019;
(statearr_49024[(10)] = inst_48989);

return statearr_49024;
})();
var statearr_49025_50045 = state_49019__$1;
(statearr_49025_50045[(2)] = null);

(statearr_49025_50045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (4))){
var inst_48989 = (state_49019[(10)]);
var state_49019__$1 = state_49019;
return cljs.core.async.ioc_alts_BANG_(state_49019__$1,(7),inst_48989);
} else {
if((state_val_49020 === (6))){
var inst_49015 = (state_49019[(2)]);
var state_49019__$1 = state_49019;
var statearr_49026_50046 = state_49019__$1;
(statearr_49026_50046[(2)] = inst_49015);

(statearr_49026_50046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (3))){
var inst_49017 = (state_49019[(2)]);
var state_49019__$1 = state_49019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49019__$1,inst_49017);
} else {
if((state_val_49020 === (2))){
var inst_48989 = (state_49019[(10)]);
var inst_48991 = cljs.core.count(inst_48989);
var inst_48992 = (inst_48991 > (0));
var state_49019__$1 = state_49019;
if(cljs.core.truth_(inst_48992)){
var statearr_49028_50051 = state_49019__$1;
(statearr_49028_50051[(1)] = (4));

} else {
var statearr_49029_50052 = state_49019__$1;
(statearr_49029_50052[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (11))){
var inst_48989 = (state_49019[(10)]);
var inst_49008 = (state_49019[(2)]);
var tmp49027 = inst_48989;
var inst_48989__$1 = tmp49027;
var state_49019__$1 = (function (){var statearr_49030 = state_49019;
(statearr_49030[(11)] = inst_49008);

(statearr_49030[(10)] = inst_48989__$1);

return statearr_49030;
})();
var statearr_49031_50053 = state_49019__$1;
(statearr_49031_50053[(2)] = null);

(statearr_49031_50053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (9))){
var inst_48999 = (state_49019[(8)]);
var state_49019__$1 = state_49019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49019__$1,(11),out,inst_48999);
} else {
if((state_val_49020 === (5))){
var inst_49013 = cljs.core.async.close_BANG_(out);
var state_49019__$1 = state_49019;
var statearr_49032_50058 = state_49019__$1;
(statearr_49032_50058[(2)] = inst_49013);

(statearr_49032_50058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (10))){
var inst_49011 = (state_49019[(2)]);
var state_49019__$1 = state_49019;
var statearr_49033_50059 = state_49019__$1;
(statearr_49033_50059[(2)] = inst_49011);

(statearr_49033_50059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49020 === (8))){
var inst_48989 = (state_49019[(10)]);
var inst_48998 = (state_49019[(7)]);
var inst_48999 = (state_49019[(8)]);
var inst_49000 = (state_49019[(9)]);
var inst_49003 = (function (){var cs = inst_48989;
var vec__48994 = inst_48998;
var v = inst_48999;
var c = inst_49000;
return (function (p1__48985_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48985_SHARP_);
});
})();
var inst_49004 = cljs.core.filterv(inst_49003,inst_48989);
var inst_48989__$1 = inst_49004;
var state_49019__$1 = (function (){var statearr_49034 = state_49019;
(statearr_49034[(10)] = inst_48989__$1);

return statearr_49034;
})();
var statearr_49035_50060 = state_49019__$1;
(statearr_49035_50060[(2)] = null);

(statearr_49035_50060[(1)] = (2));


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
var cljs$core$async$state_machine__47895__auto__ = null;
var cljs$core$async$state_machine__47895__auto____0 = (function (){
var statearr_49036 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49036[(0)] = cljs$core$async$state_machine__47895__auto__);

(statearr_49036[(1)] = (1));

return statearr_49036;
});
var cljs$core$async$state_machine__47895__auto____1 = (function (state_49019){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_49019);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e49037){var ex__47898__auto__ = e49037;
var statearr_49038_50065 = state_49019;
(statearr_49038_50065[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_49019[(4)]))){
var statearr_49039_50066 = state_49019;
(statearr_49039_50066[(1)] = cljs.core.first((state_49019[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50067 = state_49019;
state_49019 = G__50067;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$state_machine__47895__auto__ = function(state_49019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47895__auto____1.call(this,state_49019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47895__auto____0;
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47895__auto____1;
return cljs$core$async$state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_49040 = f__47966__auto__();
(statearr_49040[(6)] = c__47965__auto___50031);

return statearr_49040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
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
var G__49042 = arguments.length;
switch (G__49042) {
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
var c__47965__auto___50070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_49066){
var state_val_49067 = (state_49066[(1)]);
if((state_val_49067 === (7))){
var inst_49048 = (state_49066[(7)]);
var inst_49048__$1 = (state_49066[(2)]);
var inst_49049 = (inst_49048__$1 == null);
var inst_49050 = cljs.core.not(inst_49049);
var state_49066__$1 = (function (){var statearr_49068 = state_49066;
(statearr_49068[(7)] = inst_49048__$1);

return statearr_49068;
})();
if(inst_49050){
var statearr_49069_50071 = state_49066__$1;
(statearr_49069_50071[(1)] = (8));

} else {
var statearr_49070_50072 = state_49066__$1;
(statearr_49070_50072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (1))){
var inst_49043 = (0);
var state_49066__$1 = (function (){var statearr_49071 = state_49066;
(statearr_49071[(8)] = inst_49043);

return statearr_49071;
})();
var statearr_49072_50073 = state_49066__$1;
(statearr_49072_50073[(2)] = null);

(statearr_49072_50073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (4))){
var state_49066__$1 = state_49066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49066__$1,(7),ch);
} else {
if((state_val_49067 === (6))){
var inst_49061 = (state_49066[(2)]);
var state_49066__$1 = state_49066;
var statearr_49073_50074 = state_49066__$1;
(statearr_49073_50074[(2)] = inst_49061);

(statearr_49073_50074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (3))){
var inst_49063 = (state_49066[(2)]);
var inst_49064 = cljs.core.async.close_BANG_(out);
var state_49066__$1 = (function (){var statearr_49074 = state_49066;
(statearr_49074[(9)] = inst_49063);

return statearr_49074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49066__$1,inst_49064);
} else {
if((state_val_49067 === (2))){
var inst_49043 = (state_49066[(8)]);
var inst_49045 = (inst_49043 < n);
var state_49066__$1 = state_49066;
if(cljs.core.truth_(inst_49045)){
var statearr_49075_50075 = state_49066__$1;
(statearr_49075_50075[(1)] = (4));

} else {
var statearr_49076_50076 = state_49066__$1;
(statearr_49076_50076[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (11))){
var inst_49043 = (state_49066[(8)]);
var inst_49053 = (state_49066[(2)]);
var inst_49054 = (inst_49043 + (1));
var inst_49043__$1 = inst_49054;
var state_49066__$1 = (function (){var statearr_49077 = state_49066;
(statearr_49077[(10)] = inst_49053);

(statearr_49077[(8)] = inst_49043__$1);

return statearr_49077;
})();
var statearr_49078_50077 = state_49066__$1;
(statearr_49078_50077[(2)] = null);

(statearr_49078_50077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (9))){
var state_49066__$1 = state_49066;
var statearr_49079_50078 = state_49066__$1;
(statearr_49079_50078[(2)] = null);

(statearr_49079_50078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (5))){
var state_49066__$1 = state_49066;
var statearr_49080_50079 = state_49066__$1;
(statearr_49080_50079[(2)] = null);

(statearr_49080_50079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (10))){
var inst_49058 = (state_49066[(2)]);
var state_49066__$1 = state_49066;
var statearr_49081_50080 = state_49066__$1;
(statearr_49081_50080[(2)] = inst_49058);

(statearr_49081_50080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49067 === (8))){
var inst_49048 = (state_49066[(7)]);
var state_49066__$1 = state_49066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49066__$1,(11),out,inst_49048);
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
var cljs$core$async$state_machine__47895__auto__ = null;
var cljs$core$async$state_machine__47895__auto____0 = (function (){
var statearr_49082 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49082[(0)] = cljs$core$async$state_machine__47895__auto__);

(statearr_49082[(1)] = (1));

return statearr_49082;
});
var cljs$core$async$state_machine__47895__auto____1 = (function (state_49066){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_49066);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e49083){var ex__47898__auto__ = e49083;
var statearr_49084_50081 = state_49066;
(statearr_49084_50081[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_49066[(4)]))){
var statearr_49085_50082 = state_49066;
(statearr_49085_50082[(1)] = cljs.core.first((state_49066[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50083 = state_49066;
state_49066 = G__50083;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$state_machine__47895__auto__ = function(state_49066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47895__auto____1.call(this,state_49066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47895__auto____0;
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47895__auto____1;
return cljs$core$async$state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_49086 = f__47966__auto__();
(statearr_49086[(6)] = c__47965__auto___50070);

return statearr_49086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
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
cljs.core.async.t_cljs$core$async49091 = (function (f,ch,meta49089,_,fn1,meta49092){
this.f = f;
this.ch = ch;
this.meta49089 = meta49089;
this._ = _;
this.fn1 = fn1;
this.meta49092 = meta49092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49093,meta49092__$1){
var self__ = this;
var _49093__$1 = this;
return (new cljs.core.async.t_cljs$core$async49091(self__.f,self__.ch,self__.meta49089,self__._,self__.fn1,meta49092__$1));
}));

(cljs.core.async.t_cljs$core$async49091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49093){
var self__ = this;
var _49093__$1 = this;
return self__.meta49092;
}));

(cljs.core.async.t_cljs$core$async49091.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49091.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49087_SHARP_){
var G__49094 = (((p1__49087_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49087_SHARP_) : self__.f.call(null,p1__49087_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49094) : f1.call(null,G__49094));
});
}));

(cljs.core.async.t_cljs$core$async49091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49089","meta49089",-2139106540,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49088","cljs.core.async/t_cljs$core$async49088",-2137963582,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49092","meta49092",-1540331212,null)], null);
}));

(cljs.core.async.t_cljs$core$async49091.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49091");

(cljs.core.async.t_cljs$core$async49091.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async49091");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49091.
 */
cljs.core.async.__GT_t_cljs$core$async49091 = (function cljs$core$async$__GT_t_cljs$core$async49091(f,ch,meta49089,_,fn1,meta49092){
return (new cljs.core.async.t_cljs$core$async49091(f,ch,meta49089,_,fn1,meta49092));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49088 = (function (f,ch,meta49089){
this.f = f;
this.ch = ch;
this.meta49089 = meta49089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49090,meta49089__$1){
var self__ = this;
var _49090__$1 = this;
return (new cljs.core.async.t_cljs$core$async49088(self__.f,self__.ch,meta49089__$1));
}));

(cljs.core.async.t_cljs$core$async49088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49090){
var self__ = this;
var _49090__$1 = this;
return self__.meta49089;
}));

(cljs.core.async.t_cljs$core$async49088.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49088.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49088.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49088.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49088.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async49091(self__.f,self__.ch,self__.meta49089,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49095 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49095) : self__.f.call(null,G__49095));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49088.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49088.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49089","meta49089",-2139106540,null)], null);
}));

(cljs.core.async.t_cljs$core$async49088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49088");

(cljs.core.async.t_cljs$core$async49088.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async49088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49088.
 */
cljs.core.async.__GT_t_cljs$core$async49088 = (function cljs$core$async$__GT_t_cljs$core$async49088(f,ch,meta49089){
return (new cljs.core.async.t_cljs$core$async49088(f,ch,meta49089));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async49088(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49096 = (function (f,ch,meta49097){
this.f = f;
this.ch = ch;
this.meta49097 = meta49097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49098,meta49097__$1){
var self__ = this;
var _49098__$1 = this;
return (new cljs.core.async.t_cljs$core$async49096(self__.f,self__.ch,meta49097__$1));
}));

(cljs.core.async.t_cljs$core$async49096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49098){
var self__ = this;
var _49098__$1 = this;
return self__.meta49097;
}));

(cljs.core.async.t_cljs$core$async49096.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49096.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49096.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49097","meta49097",54693622,null)], null);
}));

(cljs.core.async.t_cljs$core$async49096.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49096");

(cljs.core.async.t_cljs$core$async49096.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async49096");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49096.
 */
cljs.core.async.__GT_t_cljs$core$async49096 = (function cljs$core$async$__GT_t_cljs$core$async49096(f,ch,meta49097){
return (new cljs.core.async.t_cljs$core$async49096(f,ch,meta49097));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async49096(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49099 = (function (p,ch,meta49100){
this.p = p;
this.ch = ch;
this.meta49100 = meta49100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49101,meta49100__$1){
var self__ = this;
var _49101__$1 = this;
return (new cljs.core.async.t_cljs$core$async49099(self__.p,self__.ch,meta49100__$1));
}));

(cljs.core.async.t_cljs$core$async49099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49101){
var self__ = this;
var _49101__$1 = this;
return self__.meta49100;
}));

(cljs.core.async.t_cljs$core$async49099.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49099.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49099.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49099.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49100","meta49100",730427846,null)], null);
}));

(cljs.core.async.t_cljs$core$async49099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49099");

(cljs.core.async.t_cljs$core$async49099.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async49099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49099.
 */
cljs.core.async.__GT_t_cljs$core$async49099 = (function cljs$core$async$__GT_t_cljs$core$async49099(p,ch,meta49100){
return (new cljs.core.async.t_cljs$core$async49099(p,ch,meta49100));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async49099(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49103 = arguments.length;
switch (G__49103) {
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
var c__47965__auto___50090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_49124){
var state_val_49125 = (state_49124[(1)]);
if((state_val_49125 === (7))){
var inst_49120 = (state_49124[(2)]);
var state_49124__$1 = state_49124;
var statearr_49126_50091 = state_49124__$1;
(statearr_49126_50091[(2)] = inst_49120);

(statearr_49126_50091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (1))){
var state_49124__$1 = state_49124;
var statearr_49127_50092 = state_49124__$1;
(statearr_49127_50092[(2)] = null);

(statearr_49127_50092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (4))){
var inst_49106 = (state_49124[(7)]);
var inst_49106__$1 = (state_49124[(2)]);
var inst_49107 = (inst_49106__$1 == null);
var state_49124__$1 = (function (){var statearr_49128 = state_49124;
(statearr_49128[(7)] = inst_49106__$1);

return statearr_49128;
})();
if(cljs.core.truth_(inst_49107)){
var statearr_49129_50093 = state_49124__$1;
(statearr_49129_50093[(1)] = (5));

} else {
var statearr_49130_50094 = state_49124__$1;
(statearr_49130_50094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (6))){
var inst_49106 = (state_49124[(7)]);
var inst_49111 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49106) : p.call(null,inst_49106));
var state_49124__$1 = state_49124;
if(cljs.core.truth_(inst_49111)){
var statearr_49131_50095 = state_49124__$1;
(statearr_49131_50095[(1)] = (8));

} else {
var statearr_49132_50096 = state_49124__$1;
(statearr_49132_50096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (3))){
var inst_49122 = (state_49124[(2)]);
var state_49124__$1 = state_49124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49124__$1,inst_49122);
} else {
if((state_val_49125 === (2))){
var state_49124__$1 = state_49124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49124__$1,(4),ch);
} else {
if((state_val_49125 === (11))){
var inst_49114 = (state_49124[(2)]);
var state_49124__$1 = state_49124;
var statearr_49133_50097 = state_49124__$1;
(statearr_49133_50097[(2)] = inst_49114);

(statearr_49133_50097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (9))){
var state_49124__$1 = state_49124;
var statearr_49134_50098 = state_49124__$1;
(statearr_49134_50098[(2)] = null);

(statearr_49134_50098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (5))){
var inst_49109 = cljs.core.async.close_BANG_(out);
var state_49124__$1 = state_49124;
var statearr_49135_50104 = state_49124__$1;
(statearr_49135_50104[(2)] = inst_49109);

(statearr_49135_50104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (10))){
var inst_49117 = (state_49124[(2)]);
var state_49124__$1 = (function (){var statearr_49136 = state_49124;
(statearr_49136[(8)] = inst_49117);

return statearr_49136;
})();
var statearr_49137_50105 = state_49124__$1;
(statearr_49137_50105[(2)] = null);

(statearr_49137_50105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49125 === (8))){
var inst_49106 = (state_49124[(7)]);
var state_49124__$1 = state_49124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49124__$1,(11),out,inst_49106);
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
var cljs$core$async$state_machine__47895__auto__ = null;
var cljs$core$async$state_machine__47895__auto____0 = (function (){
var statearr_49138 = [null,null,null,null,null,null,null,null,null];
(statearr_49138[(0)] = cljs$core$async$state_machine__47895__auto__);

(statearr_49138[(1)] = (1));

return statearr_49138;
});
var cljs$core$async$state_machine__47895__auto____1 = (function (state_49124){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_49124);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e49139){var ex__47898__auto__ = e49139;
var statearr_49140_50106 = state_49124;
(statearr_49140_50106[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_49124[(4)]))){
var statearr_49141_50107 = state_49124;
(statearr_49141_50107[(1)] = cljs.core.first((state_49124[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50109 = state_49124;
state_49124 = G__50109;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$state_machine__47895__auto__ = function(state_49124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47895__auto____1.call(this,state_49124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47895__auto____0;
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47895__auto____1;
return cljs$core$async$state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_49142 = f__47966__auto__();
(statearr_49142[(6)] = c__47965__auto___50090);

return statearr_49142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49144 = arguments.length;
switch (G__49144) {
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
var c__47965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_49206){
var state_val_49207 = (state_49206[(1)]);
if((state_val_49207 === (7))){
var inst_49202 = (state_49206[(2)]);
var state_49206__$1 = state_49206;
var statearr_49208_50112 = state_49206__$1;
(statearr_49208_50112[(2)] = inst_49202);

(statearr_49208_50112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (20))){
var inst_49172 = (state_49206[(7)]);
var inst_49183 = (state_49206[(2)]);
var inst_49184 = cljs.core.next(inst_49172);
var inst_49158 = inst_49184;
var inst_49159 = null;
var inst_49160 = (0);
var inst_49161 = (0);
var state_49206__$1 = (function (){var statearr_49209 = state_49206;
(statearr_49209[(8)] = inst_49183);

(statearr_49209[(9)] = inst_49158);

(statearr_49209[(10)] = inst_49159);

(statearr_49209[(11)] = inst_49160);

(statearr_49209[(12)] = inst_49161);

return statearr_49209;
})();
var statearr_49210_50113 = state_49206__$1;
(statearr_49210_50113[(2)] = null);

(statearr_49210_50113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (1))){
var state_49206__$1 = state_49206;
var statearr_49211_50114 = state_49206__$1;
(statearr_49211_50114[(2)] = null);

(statearr_49211_50114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (4))){
var inst_49147 = (state_49206[(13)]);
var inst_49147__$1 = (state_49206[(2)]);
var inst_49148 = (inst_49147__$1 == null);
var state_49206__$1 = (function (){var statearr_49212 = state_49206;
(statearr_49212[(13)] = inst_49147__$1);

return statearr_49212;
})();
if(cljs.core.truth_(inst_49148)){
var statearr_49213_50116 = state_49206__$1;
(statearr_49213_50116[(1)] = (5));

} else {
var statearr_49214_50117 = state_49206__$1;
(statearr_49214_50117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (15))){
var state_49206__$1 = state_49206;
var statearr_49218_50118 = state_49206__$1;
(statearr_49218_50118[(2)] = null);

(statearr_49218_50118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (21))){
var state_49206__$1 = state_49206;
var statearr_49219_50119 = state_49206__$1;
(statearr_49219_50119[(2)] = null);

(statearr_49219_50119[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (13))){
var inst_49161 = (state_49206[(12)]);
var inst_49158 = (state_49206[(9)]);
var inst_49159 = (state_49206[(10)]);
var inst_49160 = (state_49206[(11)]);
var inst_49168 = (state_49206[(2)]);
var inst_49169 = (inst_49161 + (1));
var tmp49215 = inst_49158;
var tmp49216 = inst_49160;
var tmp49217 = inst_49159;
var inst_49158__$1 = tmp49215;
var inst_49159__$1 = tmp49217;
var inst_49160__$1 = tmp49216;
var inst_49161__$1 = inst_49169;
var state_49206__$1 = (function (){var statearr_49220 = state_49206;
(statearr_49220[(14)] = inst_49168);

(statearr_49220[(9)] = inst_49158__$1);

(statearr_49220[(10)] = inst_49159__$1);

(statearr_49220[(11)] = inst_49160__$1);

(statearr_49220[(12)] = inst_49161__$1);

return statearr_49220;
})();
var statearr_49221_50124 = state_49206__$1;
(statearr_49221_50124[(2)] = null);

(statearr_49221_50124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (22))){
var state_49206__$1 = state_49206;
var statearr_49222_50125 = state_49206__$1;
(statearr_49222_50125[(2)] = null);

(statearr_49222_50125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (6))){
var inst_49147 = (state_49206[(13)]);
var inst_49156 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49147) : f.call(null,inst_49147));
var inst_49157 = cljs.core.seq(inst_49156);
var inst_49158 = inst_49157;
var inst_49159 = null;
var inst_49160 = (0);
var inst_49161 = (0);
var state_49206__$1 = (function (){var statearr_49223 = state_49206;
(statearr_49223[(9)] = inst_49158);

(statearr_49223[(10)] = inst_49159);

(statearr_49223[(11)] = inst_49160);

(statearr_49223[(12)] = inst_49161);

return statearr_49223;
})();
var statearr_49224_50127 = state_49206__$1;
(statearr_49224_50127[(2)] = null);

(statearr_49224_50127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (17))){
var inst_49172 = (state_49206[(7)]);
var inst_49176 = cljs.core.chunk_first(inst_49172);
var inst_49177 = cljs.core.chunk_rest(inst_49172);
var inst_49178 = cljs.core.count(inst_49176);
var inst_49158 = inst_49177;
var inst_49159 = inst_49176;
var inst_49160 = inst_49178;
var inst_49161 = (0);
var state_49206__$1 = (function (){var statearr_49225 = state_49206;
(statearr_49225[(9)] = inst_49158);

(statearr_49225[(10)] = inst_49159);

(statearr_49225[(11)] = inst_49160);

(statearr_49225[(12)] = inst_49161);

return statearr_49225;
})();
var statearr_49226_50128 = state_49206__$1;
(statearr_49226_50128[(2)] = null);

(statearr_49226_50128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (3))){
var inst_49204 = (state_49206[(2)]);
var state_49206__$1 = state_49206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49206__$1,inst_49204);
} else {
if((state_val_49207 === (12))){
var inst_49192 = (state_49206[(2)]);
var state_49206__$1 = state_49206;
var statearr_49227_50129 = state_49206__$1;
(statearr_49227_50129[(2)] = inst_49192);

(statearr_49227_50129[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (2))){
var state_49206__$1 = state_49206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49206__$1,(4),in$);
} else {
if((state_val_49207 === (23))){
var inst_49200 = (state_49206[(2)]);
var state_49206__$1 = state_49206;
var statearr_49228_50130 = state_49206__$1;
(statearr_49228_50130[(2)] = inst_49200);

(statearr_49228_50130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (19))){
var inst_49187 = (state_49206[(2)]);
var state_49206__$1 = state_49206;
var statearr_49229_50131 = state_49206__$1;
(statearr_49229_50131[(2)] = inst_49187);

(statearr_49229_50131[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (11))){
var inst_49158 = (state_49206[(9)]);
var inst_49172 = (state_49206[(7)]);
var inst_49172__$1 = cljs.core.seq(inst_49158);
var state_49206__$1 = (function (){var statearr_49230 = state_49206;
(statearr_49230[(7)] = inst_49172__$1);

return statearr_49230;
})();
if(inst_49172__$1){
var statearr_49231_50137 = state_49206__$1;
(statearr_49231_50137[(1)] = (14));

} else {
var statearr_49232_50138 = state_49206__$1;
(statearr_49232_50138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (9))){
var inst_49194 = (state_49206[(2)]);
var inst_49195 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49206__$1 = (function (){var statearr_49233 = state_49206;
(statearr_49233[(15)] = inst_49194);

return statearr_49233;
})();
if(cljs.core.truth_(inst_49195)){
var statearr_49234_50139 = state_49206__$1;
(statearr_49234_50139[(1)] = (21));

} else {
var statearr_49235_50140 = state_49206__$1;
(statearr_49235_50140[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (5))){
var inst_49150 = cljs.core.async.close_BANG_(out);
var state_49206__$1 = state_49206;
var statearr_49236_50141 = state_49206__$1;
(statearr_49236_50141[(2)] = inst_49150);

(statearr_49236_50141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (14))){
var inst_49172 = (state_49206[(7)]);
var inst_49174 = cljs.core.chunked_seq_QMARK_(inst_49172);
var state_49206__$1 = state_49206;
if(inst_49174){
var statearr_49237_50142 = state_49206__$1;
(statearr_49237_50142[(1)] = (17));

} else {
var statearr_49238_50143 = state_49206__$1;
(statearr_49238_50143[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (16))){
var inst_49190 = (state_49206[(2)]);
var state_49206__$1 = state_49206;
var statearr_49239_50144 = state_49206__$1;
(statearr_49239_50144[(2)] = inst_49190);

(statearr_49239_50144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49207 === (10))){
var inst_49159 = (state_49206[(10)]);
var inst_49161 = (state_49206[(12)]);
var inst_49166 = cljs.core._nth(inst_49159,inst_49161);
var state_49206__$1 = state_49206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49206__$1,(13),out,inst_49166);
} else {
if((state_val_49207 === (18))){
var inst_49172 = (state_49206[(7)]);
var inst_49181 = cljs.core.first(inst_49172);
var state_49206__$1 = state_49206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49206__$1,(20),out,inst_49181);
} else {
if((state_val_49207 === (8))){
var inst_49161 = (state_49206[(12)]);
var inst_49160 = (state_49206[(11)]);
var inst_49163 = (inst_49161 < inst_49160);
var inst_49164 = inst_49163;
var state_49206__$1 = state_49206;
if(cljs.core.truth_(inst_49164)){
var statearr_49240_50145 = state_49206__$1;
(statearr_49240_50145[(1)] = (10));

} else {
var statearr_49241_50146 = state_49206__$1;
(statearr_49241_50146[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__47895__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47895__auto____0 = (function (){
var statearr_49242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49242[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47895__auto__);

(statearr_49242[(1)] = (1));

return statearr_49242;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47895__auto____1 = (function (state_49206){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_49206);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e49243){var ex__47898__auto__ = e49243;
var statearr_49244_50148 = state_49206;
(statearr_49244_50148[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_49206[(4)]))){
var statearr_49245_50149 = state_49206;
(statearr_49245_50149[(1)] = cljs.core.first((state_49206[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50150 = state_49206;
state_49206 = G__50150;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47895__auto__ = function(state_49206){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47895__auto____1.call(this,state_49206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47895__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47895__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_49246 = f__47966__auto__();
(statearr_49246[(6)] = c__47965__auto__);

return statearr_49246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
}));

return c__47965__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49248 = arguments.length;
switch (G__49248) {
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
var G__49250 = arguments.length;
switch (G__49250) {
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
var G__49252 = arguments.length;
switch (G__49252) {
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
var c__47965__auto___50157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_49276){
var state_val_49277 = (state_49276[(1)]);
if((state_val_49277 === (7))){
var inst_49271 = (state_49276[(2)]);
var state_49276__$1 = state_49276;
var statearr_49278_50158 = state_49276__$1;
(statearr_49278_50158[(2)] = inst_49271);

(statearr_49278_50158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49277 === (1))){
var inst_49253 = null;
var state_49276__$1 = (function (){var statearr_49279 = state_49276;
(statearr_49279[(7)] = inst_49253);

return statearr_49279;
})();
var statearr_49280_50159 = state_49276__$1;
(statearr_49280_50159[(2)] = null);

(statearr_49280_50159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49277 === (4))){
var inst_49256 = (state_49276[(8)]);
var inst_49256__$1 = (state_49276[(2)]);
var inst_49257 = (inst_49256__$1 == null);
var inst_49258 = cljs.core.not(inst_49257);
var state_49276__$1 = (function (){var statearr_49281 = state_49276;
(statearr_49281[(8)] = inst_49256__$1);

return statearr_49281;
})();
if(inst_49258){
var statearr_49282_50160 = state_49276__$1;
(statearr_49282_50160[(1)] = (5));

} else {
var statearr_49283_50161 = state_49276__$1;
(statearr_49283_50161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49277 === (6))){
var state_49276__$1 = state_49276;
var statearr_49284_50162 = state_49276__$1;
(statearr_49284_50162[(2)] = null);

(statearr_49284_50162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49277 === (3))){
var inst_49273 = (state_49276[(2)]);
var inst_49274 = cljs.core.async.close_BANG_(out);
var state_49276__$1 = (function (){var statearr_49285 = state_49276;
(statearr_49285[(9)] = inst_49273);

return statearr_49285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49276__$1,inst_49274);
} else {
if((state_val_49277 === (2))){
var state_49276__$1 = state_49276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49276__$1,(4),ch);
} else {
if((state_val_49277 === (11))){
var inst_49256 = (state_49276[(8)]);
var inst_49265 = (state_49276[(2)]);
var inst_49253 = inst_49256;
var state_49276__$1 = (function (){var statearr_49286 = state_49276;
(statearr_49286[(10)] = inst_49265);

(statearr_49286[(7)] = inst_49253);

return statearr_49286;
})();
var statearr_49287_50164 = state_49276__$1;
(statearr_49287_50164[(2)] = null);

(statearr_49287_50164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49277 === (9))){
var inst_49256 = (state_49276[(8)]);
var state_49276__$1 = state_49276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49276__$1,(11),out,inst_49256);
} else {
if((state_val_49277 === (5))){
var inst_49256 = (state_49276[(8)]);
var inst_49253 = (state_49276[(7)]);
var inst_49260 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49256,inst_49253);
var state_49276__$1 = state_49276;
if(inst_49260){
var statearr_49289_50169 = state_49276__$1;
(statearr_49289_50169[(1)] = (8));

} else {
var statearr_49290_50170 = state_49276__$1;
(statearr_49290_50170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49277 === (10))){
var inst_49268 = (state_49276[(2)]);
var state_49276__$1 = state_49276;
var statearr_49291_50171 = state_49276__$1;
(statearr_49291_50171[(2)] = inst_49268);

(statearr_49291_50171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49277 === (8))){
var inst_49253 = (state_49276[(7)]);
var tmp49288 = inst_49253;
var inst_49253__$1 = tmp49288;
var state_49276__$1 = (function (){var statearr_49292 = state_49276;
(statearr_49292[(7)] = inst_49253__$1);

return statearr_49292;
})();
var statearr_49293_50173 = state_49276__$1;
(statearr_49293_50173[(2)] = null);

(statearr_49293_50173[(1)] = (2));


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
var cljs$core$async$state_machine__47895__auto__ = null;
var cljs$core$async$state_machine__47895__auto____0 = (function (){
var statearr_49294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49294[(0)] = cljs$core$async$state_machine__47895__auto__);

(statearr_49294[(1)] = (1));

return statearr_49294;
});
var cljs$core$async$state_machine__47895__auto____1 = (function (state_49276){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_49276);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e49295){var ex__47898__auto__ = e49295;
var statearr_49296_50174 = state_49276;
(statearr_49296_50174[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_49276[(4)]))){
var statearr_49297_50175 = state_49276;
(statearr_49297_50175[(1)] = cljs.core.first((state_49276[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50176 = state_49276;
state_49276 = G__50176;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$state_machine__47895__auto__ = function(state_49276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47895__auto____1.call(this,state_49276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47895__auto____0;
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47895__auto____1;
return cljs$core$async$state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_49298 = f__47966__auto__();
(statearr_49298[(6)] = c__47965__auto___50157);

return statearr_49298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49300 = arguments.length;
switch (G__49300) {
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
var c__47965__auto___50179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_49338){
var state_val_49339 = (state_49338[(1)]);
if((state_val_49339 === (7))){
var inst_49334 = (state_49338[(2)]);
var state_49338__$1 = state_49338;
var statearr_49340_50181 = state_49338__$1;
(statearr_49340_50181[(2)] = inst_49334);

(statearr_49340_50181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49339 === (1))){
var inst_49301 = (new Array(n));
var inst_49302 = inst_49301;
var inst_49303 = (0);
var state_49338__$1 = (function (){var statearr_49341 = state_49338;
(statearr_49341[(7)] = inst_49302);

(statearr_49341[(8)] = inst_49303);

return statearr_49341;
})();
var statearr_49342_50185 = state_49338__$1;
(statearr_49342_50185[(2)] = null);

(statearr_49342_50185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49339 === (4))){
var inst_49306 = (state_49338[(9)]);
var inst_49306__$1 = (state_49338[(2)]);
var inst_49307 = (inst_49306__$1 == null);
var inst_49308 = cljs.core.not(inst_49307);
var state_49338__$1 = (function (){var statearr_49343 = state_49338;
(statearr_49343[(9)] = inst_49306__$1);

return statearr_49343;
})();
if(inst_49308){
var statearr_49344_50186 = state_49338__$1;
(statearr_49344_50186[(1)] = (5));

} else {
var statearr_49345_50187 = state_49338__$1;
(statearr_49345_50187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49339 === (15))){
var inst_49328 = (state_49338[(2)]);
var state_49338__$1 = state_49338;
var statearr_49346_50188 = state_49338__$1;
(statearr_49346_50188[(2)] = inst_49328);

(statearr_49346_50188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49339 === (13))){
var state_49338__$1 = state_49338;
var statearr_49347_50189 = state_49338__$1;
(statearr_49347_50189[(2)] = null);

(statearr_49347_50189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49339 === (6))){
var inst_49303 = (state_49338[(8)]);
var inst_49324 = (inst_49303 > (0));
var state_49338__$1 = state_49338;
if(cljs.core.truth_(inst_49324)){
var statearr_49348_50190 = state_49338__$1;
(statearr_49348_50190[(1)] = (12));

} else {
var statearr_49349_50191 = state_49338__$1;
(statearr_49349_50191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49339 === (3))){
var inst_49336 = (state_49338[(2)]);
var state_49338__$1 = state_49338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49338__$1,inst_49336);
} else {
if((state_val_49339 === (12))){
var inst_49302 = (state_49338[(7)]);
var inst_49326 = cljs.core.vec(inst_49302);
var state_49338__$1 = state_49338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49338__$1,(15),out,inst_49326);
} else {
if((state_val_49339 === (2))){
var state_49338__$1 = state_49338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49338__$1,(4),ch);
} else {
if((state_val_49339 === (11))){
var inst_49318 = (state_49338[(2)]);
var inst_49319 = (new Array(n));
var inst_49302 = inst_49319;
var inst_49303 = (0);
var state_49338__$1 = (function (){var statearr_49350 = state_49338;
(statearr_49350[(10)] = inst_49318);

(statearr_49350[(7)] = inst_49302);

(statearr_49350[(8)] = inst_49303);

return statearr_49350;
})();
var statearr_49351_50192 = state_49338__$1;
(statearr_49351_50192[(2)] = null);

(statearr_49351_50192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49339 === (9))){
var inst_49302 = (state_49338[(7)]);
var inst_49316 = cljs.core.vec(inst_49302);
var state_49338__$1 = state_49338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49338__$1,(11),out,inst_49316);
} else {
if((state_val_49339 === (5))){
var inst_49302 = (state_49338[(7)]);
var inst_49303 = (state_49338[(8)]);
var inst_49306 = (state_49338[(9)]);
var inst_49311 = (state_49338[(11)]);
var inst_49310 = (inst_49302[inst_49303] = inst_49306);
var inst_49311__$1 = (inst_49303 + (1));
var inst_49312 = (inst_49311__$1 < n);
var state_49338__$1 = (function (){var statearr_49352 = state_49338;
(statearr_49352[(12)] = inst_49310);

(statearr_49352[(11)] = inst_49311__$1);

return statearr_49352;
})();
if(cljs.core.truth_(inst_49312)){
var statearr_49353_50193 = state_49338__$1;
(statearr_49353_50193[(1)] = (8));

} else {
var statearr_49354_50194 = state_49338__$1;
(statearr_49354_50194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49339 === (14))){
var inst_49331 = (state_49338[(2)]);
var inst_49332 = cljs.core.async.close_BANG_(out);
var state_49338__$1 = (function (){var statearr_49356 = state_49338;
(statearr_49356[(13)] = inst_49331);

return statearr_49356;
})();
var statearr_49357_50195 = state_49338__$1;
(statearr_49357_50195[(2)] = inst_49332);

(statearr_49357_50195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49339 === (10))){
var inst_49322 = (state_49338[(2)]);
var state_49338__$1 = state_49338;
var statearr_49358_50196 = state_49338__$1;
(statearr_49358_50196[(2)] = inst_49322);

(statearr_49358_50196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49339 === (8))){
var inst_49302 = (state_49338[(7)]);
var inst_49311 = (state_49338[(11)]);
var tmp49355 = inst_49302;
var inst_49302__$1 = tmp49355;
var inst_49303 = inst_49311;
var state_49338__$1 = (function (){var statearr_49359 = state_49338;
(statearr_49359[(7)] = inst_49302__$1);

(statearr_49359[(8)] = inst_49303);

return statearr_49359;
})();
var statearr_49360_50197 = state_49338__$1;
(statearr_49360_50197[(2)] = null);

(statearr_49360_50197[(1)] = (2));


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
var cljs$core$async$state_machine__47895__auto__ = null;
var cljs$core$async$state_machine__47895__auto____0 = (function (){
var statearr_49361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49361[(0)] = cljs$core$async$state_machine__47895__auto__);

(statearr_49361[(1)] = (1));

return statearr_49361;
});
var cljs$core$async$state_machine__47895__auto____1 = (function (state_49338){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_49338);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e49362){var ex__47898__auto__ = e49362;
var statearr_49363_50198 = state_49338;
(statearr_49363_50198[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_49338[(4)]))){
var statearr_49364_50199 = state_49338;
(statearr_49364_50199[(1)] = cljs.core.first((state_49338[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50200 = state_49338;
state_49338 = G__50200;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$state_machine__47895__auto__ = function(state_49338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47895__auto____1.call(this,state_49338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47895__auto____0;
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47895__auto____1;
return cljs$core$async$state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_49365 = f__47966__auto__();
(statearr_49365[(6)] = c__47965__auto___50179);

return statearr_49365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49367 = arguments.length;
switch (G__49367) {
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
var c__47965__auto___50203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47966__auto__ = (function (){var switch__47894__auto__ = (function (state_49412){
var state_val_49413 = (state_49412[(1)]);
if((state_val_49413 === (7))){
var inst_49408 = (state_49412[(2)]);
var state_49412__$1 = state_49412;
var statearr_49414_50207 = state_49412__$1;
(statearr_49414_50207[(2)] = inst_49408);

(statearr_49414_50207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (1))){
var inst_49368 = [];
var inst_49369 = inst_49368;
var inst_49370 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49412__$1 = (function (){var statearr_49415 = state_49412;
(statearr_49415[(7)] = inst_49369);

(statearr_49415[(8)] = inst_49370);

return statearr_49415;
})();
var statearr_49416_50208 = state_49412__$1;
(statearr_49416_50208[(2)] = null);

(statearr_49416_50208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (4))){
var inst_49373 = (state_49412[(9)]);
var inst_49373__$1 = (state_49412[(2)]);
var inst_49374 = (inst_49373__$1 == null);
var inst_49375 = cljs.core.not(inst_49374);
var state_49412__$1 = (function (){var statearr_49417 = state_49412;
(statearr_49417[(9)] = inst_49373__$1);

return statearr_49417;
})();
if(inst_49375){
var statearr_49418_50209 = state_49412__$1;
(statearr_49418_50209[(1)] = (5));

} else {
var statearr_49419_50210 = state_49412__$1;
(statearr_49419_50210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (15))){
var inst_49369 = (state_49412[(7)]);
var inst_49400 = cljs.core.vec(inst_49369);
var state_49412__$1 = state_49412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49412__$1,(18),out,inst_49400);
} else {
if((state_val_49413 === (13))){
var inst_49395 = (state_49412[(2)]);
var state_49412__$1 = state_49412;
var statearr_49420_50211 = state_49412__$1;
(statearr_49420_50211[(2)] = inst_49395);

(statearr_49420_50211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (6))){
var inst_49369 = (state_49412[(7)]);
var inst_49397 = inst_49369.length;
var inst_49398 = (inst_49397 > (0));
var state_49412__$1 = state_49412;
if(cljs.core.truth_(inst_49398)){
var statearr_49421_50212 = state_49412__$1;
(statearr_49421_50212[(1)] = (15));

} else {
var statearr_49422_50213 = state_49412__$1;
(statearr_49422_50213[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (17))){
var inst_49405 = (state_49412[(2)]);
var inst_49406 = cljs.core.async.close_BANG_(out);
var state_49412__$1 = (function (){var statearr_49423 = state_49412;
(statearr_49423[(10)] = inst_49405);

return statearr_49423;
})();
var statearr_49424_50214 = state_49412__$1;
(statearr_49424_50214[(2)] = inst_49406);

(statearr_49424_50214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (3))){
var inst_49410 = (state_49412[(2)]);
var state_49412__$1 = state_49412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49412__$1,inst_49410);
} else {
if((state_val_49413 === (12))){
var inst_49369 = (state_49412[(7)]);
var inst_49388 = cljs.core.vec(inst_49369);
var state_49412__$1 = state_49412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49412__$1,(14),out,inst_49388);
} else {
if((state_val_49413 === (2))){
var state_49412__$1 = state_49412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49412__$1,(4),ch);
} else {
if((state_val_49413 === (11))){
var inst_49369 = (state_49412[(7)]);
var inst_49373 = (state_49412[(9)]);
var inst_49377 = (state_49412[(11)]);
var inst_49385 = inst_49369.push(inst_49373);
var tmp49425 = inst_49369;
var inst_49369__$1 = tmp49425;
var inst_49370 = inst_49377;
var state_49412__$1 = (function (){var statearr_49426 = state_49412;
(statearr_49426[(12)] = inst_49385);

(statearr_49426[(7)] = inst_49369__$1);

(statearr_49426[(8)] = inst_49370);

return statearr_49426;
})();
var statearr_49427_50215 = state_49412__$1;
(statearr_49427_50215[(2)] = null);

(statearr_49427_50215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (9))){
var inst_49370 = (state_49412[(8)]);
var inst_49381 = cljs.core.keyword_identical_QMARK_(inst_49370,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49412__$1 = state_49412;
var statearr_49428_50216 = state_49412__$1;
(statearr_49428_50216[(2)] = inst_49381);

(statearr_49428_50216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (5))){
var inst_49373 = (state_49412[(9)]);
var inst_49377 = (state_49412[(11)]);
var inst_49370 = (state_49412[(8)]);
var inst_49378 = (state_49412[(13)]);
var inst_49377__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49373) : f.call(null,inst_49373));
var inst_49378__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49377__$1,inst_49370);
var state_49412__$1 = (function (){var statearr_49429 = state_49412;
(statearr_49429[(11)] = inst_49377__$1);

(statearr_49429[(13)] = inst_49378__$1);

return statearr_49429;
})();
if(inst_49378__$1){
var statearr_49430_50218 = state_49412__$1;
(statearr_49430_50218[(1)] = (8));

} else {
var statearr_49431_50219 = state_49412__$1;
(statearr_49431_50219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (14))){
var inst_49373 = (state_49412[(9)]);
var inst_49377 = (state_49412[(11)]);
var inst_49390 = (state_49412[(2)]);
var inst_49391 = [];
var inst_49392 = inst_49391.push(inst_49373);
var inst_49369 = inst_49391;
var inst_49370 = inst_49377;
var state_49412__$1 = (function (){var statearr_49432 = state_49412;
(statearr_49432[(14)] = inst_49390);

(statearr_49432[(15)] = inst_49392);

(statearr_49432[(7)] = inst_49369);

(statearr_49432[(8)] = inst_49370);

return statearr_49432;
})();
var statearr_49433_50224 = state_49412__$1;
(statearr_49433_50224[(2)] = null);

(statearr_49433_50224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (16))){
var state_49412__$1 = state_49412;
var statearr_49434_50225 = state_49412__$1;
(statearr_49434_50225[(2)] = null);

(statearr_49434_50225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (10))){
var inst_49383 = (state_49412[(2)]);
var state_49412__$1 = state_49412;
if(cljs.core.truth_(inst_49383)){
var statearr_49435_50227 = state_49412__$1;
(statearr_49435_50227[(1)] = (11));

} else {
var statearr_49436_50228 = state_49412__$1;
(statearr_49436_50228[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (18))){
var inst_49402 = (state_49412[(2)]);
var state_49412__$1 = state_49412;
var statearr_49437_50229 = state_49412__$1;
(statearr_49437_50229[(2)] = inst_49402);

(statearr_49437_50229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49413 === (8))){
var inst_49378 = (state_49412[(13)]);
var state_49412__$1 = state_49412;
var statearr_49438_50230 = state_49412__$1;
(statearr_49438_50230[(2)] = inst_49378);

(statearr_49438_50230[(1)] = (10));


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
var cljs$core$async$state_machine__47895__auto__ = null;
var cljs$core$async$state_machine__47895__auto____0 = (function (){
var statearr_49439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49439[(0)] = cljs$core$async$state_machine__47895__auto__);

(statearr_49439[(1)] = (1));

return statearr_49439;
});
var cljs$core$async$state_machine__47895__auto____1 = (function (state_49412){
while(true){
var ret_value__47896__auto__ = (function (){try{while(true){
var result__47897__auto__ = switch__47894__auto__(state_49412);
if(cljs.core.keyword_identical_QMARK_(result__47897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47897__auto__;
}
break;
}
}catch (e49440){var ex__47898__auto__ = e49440;
var statearr_49441_50231 = state_49412;
(statearr_49441_50231[(2)] = ex__47898__auto__);


if(cljs.core.seq((state_49412[(4)]))){
var statearr_49442_50232 = state_49412;
(statearr_49442_50232[(1)] = cljs.core.first((state_49412[(4)])));

} else {
throw ex__47898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50234 = state_49412;
state_49412 = G__50234;
continue;
} else {
return ret_value__47896__auto__;
}
break;
}
});
cljs$core$async$state_machine__47895__auto__ = function(state_49412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47895__auto____1.call(this,state_49412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47895__auto____0;
cljs$core$async$state_machine__47895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47895__auto____1;
return cljs$core$async$state_machine__47895__auto__;
})()
})();
var state__47967__auto__ = (function (){var statearr_49443 = f__47966__auto__();
(statearr_49443[(6)] = c__47965__auto___50203);

return statearr_49443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47967__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
