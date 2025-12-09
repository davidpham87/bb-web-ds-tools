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
cljs.core.async.t_cljs$core$async32535 = (function (f,blockable,meta32536){
this.f = f;
this.blockable = blockable;
this.meta32536 = meta32536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32537,meta32536__$1){
var self__ = this;
var _32537__$1 = this;
return (new cljs.core.async.t_cljs$core$async32535(self__.f,self__.blockable,meta32536__$1));
}));

(cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32537){
var self__ = this;
var _32537__$1 = this;
return self__.meta32536;
}));

(cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32536","meta32536",-1809644186,null)], null);
}));

(cljs.core.async.t_cljs$core$async32535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32535");

(cljs.core.async.t_cljs$core$async32535.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32535.
 */
cljs.core.async.__GT_t_cljs$core$async32535 = (function cljs$core$async$__GT_t_cljs$core$async32535(f,blockable,meta32536){
return (new cljs.core.async.t_cljs$core$async32535(f,blockable,meta32536));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32531 = arguments.length;
switch (G__32531) {
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
return (new cljs.core.async.t_cljs$core$async32535(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32548 = arguments.length;
switch (G__32548) {
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
var G__32553 = arguments.length;
switch (G__32553) {
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
var G__32555 = arguments.length;
switch (G__32555) {
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
var val_34082 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34082) : fn1.call(null,val_34082));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34082) : fn1.call(null,val_34082));
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
var G__32557 = arguments.length;
switch (G__32557) {
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
var n__5616__auto___34084 = n;
var x_34085 = (0);
while(true){
if((x_34085 < n__5616__auto___34084)){
(a[x_34085] = x_34085);

var G__34086 = (x_34085 + (1));
x_34085 = G__34086;
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
cljs.core.async.t_cljs$core$async32559 = (function (flag,meta32560){
this.flag = flag;
this.meta32560 = meta32560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32561,meta32560__$1){
var self__ = this;
var _32561__$1 = this;
return (new cljs.core.async.t_cljs$core$async32559(self__.flag,meta32560__$1));
}));

(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32561){
var self__ = this;
var _32561__$1 = this;
return self__.meta32560;
}));

(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32560","meta32560",-1010676059,null)], null);
}));

(cljs.core.async.t_cljs$core$async32559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32559");

(cljs.core.async.t_cljs$core$async32559.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32559.
 */
cljs.core.async.__GT_t_cljs$core$async32559 = (function cljs$core$async$__GT_t_cljs$core$async32559(flag,meta32560){
return (new cljs.core.async.t_cljs$core$async32559(flag,meta32560));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32559(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32562 = (function (flag,cb,meta32563){
this.flag = flag;
this.cb = cb;
this.meta32563 = meta32563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32564,meta32563__$1){
var self__ = this;
var _32564__$1 = this;
return (new cljs.core.async.t_cljs$core$async32562(self__.flag,self__.cb,meta32563__$1));
}));

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32564){
var self__ = this;
var _32564__$1 = this;
return self__.meta32563;
}));

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32563","meta32563",809685993,null)], null);
}));

(cljs.core.async.t_cljs$core$async32562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32562");

(cljs.core.async.t_cljs$core$async32562.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32562.
 */
cljs.core.async.__GT_t_cljs$core$async32562 = (function cljs$core$async$__GT_t_cljs$core$async32562(flag,cb,meta32563){
return (new cljs.core.async.t_cljs$core$async32562(flag,cb,meta32563));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32562(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_34087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34087)){
if((!(((port_34087.cljs$core$IFn$_invoke$arity$1 ? port_34087.cljs$core$IFn$_invoke$arity$1((1)) : port_34087.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34088 = (i + (1));
i = G__34088;
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
return (function (p1__32589_SHARP_){
var G__32593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32589_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32593) : fret.call(null,G__32593));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__32590_SHARP_){
var G__32594 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32590_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32594) : fret.call(null,G__32594));
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
var G__34089 = (i + (1));
i = G__34089;
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
var len__5749__auto___34090 = arguments.length;
var i__5750__auto___34091 = (0);
while(true){
if((i__5750__auto___34091 < len__5749__auto___34090)){
args__5755__auto__.push((arguments[i__5750__auto___34091]));

var G__34092 = (i__5750__auto___34091 + (1));
i__5750__auto___34091 = G__34092;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32639){
var map__32640 = p__32639;
var map__32640__$1 = cljs.core.__destructure_map(map__32640);
var opts = map__32640__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32616){
var G__32617 = cljs.core.first(seq32616);
var seq32616__$1 = cljs.core.next(seq32616);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32617,seq32616__$1);
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
var G__32663 = arguments.length;
switch (G__32663) {
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
var c__32462__auto___34094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_32701){
var state_val_32702 = (state_32701[(1)]);
if((state_val_32702 === (7))){
var inst_32697 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32703_34095 = state_32701__$1;
(statearr_32703_34095[(2)] = inst_32697);

(statearr_32703_34095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (1))){
var state_32701__$1 = state_32701;
var statearr_32704_34096 = state_32701__$1;
(statearr_32704_34096[(2)] = null);

(statearr_32704_34096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (4))){
var inst_32680 = (state_32701[(7)]);
var inst_32680__$1 = (state_32701[(2)]);
var inst_32681 = (inst_32680__$1 == null);
var state_32701__$1 = (function (){var statearr_32705 = state_32701;
(statearr_32705[(7)] = inst_32680__$1);

return statearr_32705;
})();
if(cljs.core.truth_(inst_32681)){
var statearr_32706_34097 = state_32701__$1;
(statearr_32706_34097[(1)] = (5));

} else {
var statearr_32707_34098 = state_32701__$1;
(statearr_32707_34098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (13))){
var state_32701__$1 = state_32701;
var statearr_32708_34099 = state_32701__$1;
(statearr_32708_34099[(2)] = null);

(statearr_32708_34099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (6))){
var inst_32680 = (state_32701[(7)]);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32701__$1,(11),to,inst_32680);
} else {
if((state_val_32702 === (3))){
var inst_32699 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32701__$1,inst_32699);
} else {
if((state_val_32702 === (12))){
var state_32701__$1 = state_32701;
var statearr_32709_34100 = state_32701__$1;
(statearr_32709_34100[(2)] = null);

(statearr_32709_34100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (2))){
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32701__$1,(4),from);
} else {
if((state_val_32702 === (11))){
var inst_32690 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
if(cljs.core.truth_(inst_32690)){
var statearr_32710_34101 = state_32701__$1;
(statearr_32710_34101[(1)] = (12));

} else {
var statearr_32711_34102 = state_32701__$1;
(statearr_32711_34102[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (9))){
var state_32701__$1 = state_32701;
var statearr_32712_34103 = state_32701__$1;
(statearr_32712_34103[(2)] = null);

(statearr_32712_34103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (5))){
var state_32701__$1 = state_32701;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32713_34104 = state_32701__$1;
(statearr_32713_34104[(1)] = (8));

} else {
var statearr_32714_34105 = state_32701__$1;
(statearr_32714_34105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (14))){
var inst_32695 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32715_34106 = state_32701__$1;
(statearr_32715_34106[(2)] = inst_32695);

(statearr_32715_34106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (10))){
var inst_32687 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32716_34107 = state_32701__$1;
(statearr_32716_34107[(2)] = inst_32687);

(statearr_32716_34107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (8))){
var inst_32684 = cljs.core.async.close_BANG_(to);
var state_32701__$1 = state_32701;
var statearr_32717_34108 = state_32701__$1;
(statearr_32717_34108[(2)] = inst_32684);

(statearr_32717_34108[(1)] = (10));


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
var cljs$core$async$state_machine__32374__auto__ = null;
var cljs$core$async$state_machine__32374__auto____0 = (function (){
var statearr_32718 = [null,null,null,null,null,null,null,null];
(statearr_32718[(0)] = cljs$core$async$state_machine__32374__auto__);

(statearr_32718[(1)] = (1));

return statearr_32718;
});
var cljs$core$async$state_machine__32374__auto____1 = (function (state_32701){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_32701);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e32719){var ex__32377__auto__ = e32719;
var statearr_32720_34109 = state_32701;
(statearr_32720_34109[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_32701[(4)]))){
var statearr_32721_34110 = state_32701;
(statearr_32721_34110[(1)] = cljs.core.first((state_32701[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34111 = state_32701;
state_32701 = G__34111;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$state_machine__32374__auto__ = function(state_32701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32374__auto____1.call(this,state_32701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32374__auto____0;
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32374__auto____1;
return cljs$core$async$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_32722 = f__32463__auto__();
(statearr_32722[(6)] = c__32462__auto___34094);

return statearr_32722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
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
var process__$1 = (function (p__32723){
var vec__32724 = p__32723;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32724,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32724,(1),null);
var job = vec__32724;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32462__auto___34112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_32731){
var state_val_32732 = (state_32731[(1)]);
if((state_val_32732 === (1))){
var state_32731__$1 = state_32731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32731__$1,(2),res,v);
} else {
if((state_val_32732 === (2))){
var inst_32728 = (state_32731[(2)]);
var inst_32729 = cljs.core.async.close_BANG_(res);
var state_32731__$1 = (function (){var statearr_32733 = state_32731;
(statearr_32733[(7)] = inst_32728);

return statearr_32733;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32731__$1,inst_32729);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0 = (function (){
var statearr_32734 = [null,null,null,null,null,null,null,null];
(statearr_32734[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__);

(statearr_32734[(1)] = (1));

return statearr_32734;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1 = (function (state_32731){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_32731);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e32735){var ex__32377__auto__ = e32735;
var statearr_32736_34113 = state_32731;
(statearr_32736_34113[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_32731[(4)]))){
var statearr_32737_34114 = state_32731;
(statearr_32737_34114[(1)] = cljs.core.first((state_32731[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34115 = state_32731;
state_32731 = G__34115;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__ = function(state_32731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1.call(this,state_32731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_32738 = f__32463__auto__();
(statearr_32738[(6)] = c__32462__auto___34112);

return statearr_32738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32739){
var vec__32740 = p__32739;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32740,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32740,(1),null);
var job = vec__32740;
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
var n__5616__auto___34116 = n;
var __34117 = (0);
while(true){
if((__34117 < n__5616__auto___34116)){
var G__32743_34118 = type;
var G__32743_34119__$1 = (((G__32743_34118 instanceof cljs.core.Keyword))?G__32743_34118.fqn:null);
switch (G__32743_34119__$1) {
case "compute":
var c__32462__auto___34121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34117,c__32462__auto___34121,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async){
return (function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = ((function (__34117,c__32462__auto___34121,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async){
return (function (state_32756){
var state_val_32757 = (state_32756[(1)]);
if((state_val_32757 === (1))){
var state_32756__$1 = state_32756;
var statearr_32758_34122 = state_32756__$1;
(statearr_32758_34122[(2)] = null);

(statearr_32758_34122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (2))){
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32756__$1,(4),jobs);
} else {
if((state_val_32757 === (3))){
var inst_32754 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32756__$1,inst_32754);
} else {
if((state_val_32757 === (4))){
var inst_32746 = (state_32756[(2)]);
var inst_32747 = process__$1(inst_32746);
var state_32756__$1 = state_32756;
if(cljs.core.truth_(inst_32747)){
var statearr_32759_34123 = state_32756__$1;
(statearr_32759_34123[(1)] = (5));

} else {
var statearr_32760_34124 = state_32756__$1;
(statearr_32760_34124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (5))){
var state_32756__$1 = state_32756;
var statearr_32761_34125 = state_32756__$1;
(statearr_32761_34125[(2)] = null);

(statearr_32761_34125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (6))){
var state_32756__$1 = state_32756;
var statearr_32762_34126 = state_32756__$1;
(statearr_32762_34126[(2)] = null);

(statearr_32762_34126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (7))){
var inst_32752 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
var statearr_32763_34127 = state_32756__$1;
(statearr_32763_34127[(2)] = inst_32752);

(statearr_32763_34127[(1)] = (3));


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
});})(__34117,c__32462__auto___34121,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async))
;
return ((function (__34117,switch__32373__auto__,c__32462__auto___34121,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0 = (function (){
var statearr_32764 = [null,null,null,null,null,null,null];
(statearr_32764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__);

(statearr_32764[(1)] = (1));

return statearr_32764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1 = (function (state_32756){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_32756);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e32765){var ex__32377__auto__ = e32765;
var statearr_32766_34128 = state_32756;
(statearr_32766_34128[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_32756[(4)]))){
var statearr_32767_34129 = state_32756;
(statearr_32767_34129[(1)] = cljs.core.first((state_32756[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34130 = state_32756;
state_32756 = G__34130;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__ = function(state_32756){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1.call(this,state_32756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__;
})()
;})(__34117,switch__32373__auto__,c__32462__auto___34121,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async))
})();
var state__32464__auto__ = (function (){var statearr_32768 = f__32463__auto__();
(statearr_32768[(6)] = c__32462__auto___34121);

return statearr_32768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
});})(__34117,c__32462__auto___34121,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async))
);


break;
case "async":
var c__32462__auto___34132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34117,c__32462__auto___34132,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async){
return (function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = ((function (__34117,c__32462__auto___34132,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async){
return (function (state_32781){
var state_val_32782 = (state_32781[(1)]);
if((state_val_32782 === (1))){
var state_32781__$1 = state_32781;
var statearr_32783_34134 = state_32781__$1;
(statearr_32783_34134[(2)] = null);

(statearr_32783_34134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (2))){
var state_32781__$1 = state_32781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32781__$1,(4),jobs);
} else {
if((state_val_32782 === (3))){
var inst_32779 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32781__$1,inst_32779);
} else {
if((state_val_32782 === (4))){
var inst_32771 = (state_32781[(2)]);
var inst_32772 = async(inst_32771);
var state_32781__$1 = state_32781;
if(cljs.core.truth_(inst_32772)){
var statearr_32784_34135 = state_32781__$1;
(statearr_32784_34135[(1)] = (5));

} else {
var statearr_32785_34136 = state_32781__$1;
(statearr_32785_34136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (5))){
var state_32781__$1 = state_32781;
var statearr_32786_34138 = state_32781__$1;
(statearr_32786_34138[(2)] = null);

(statearr_32786_34138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (6))){
var state_32781__$1 = state_32781;
var statearr_32787_34139 = state_32781__$1;
(statearr_32787_34139[(2)] = null);

(statearr_32787_34139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32782 === (7))){
var inst_32777 = (state_32781[(2)]);
var state_32781__$1 = state_32781;
var statearr_32788_34140 = state_32781__$1;
(statearr_32788_34140[(2)] = inst_32777);

(statearr_32788_34140[(1)] = (3));


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
});})(__34117,c__32462__auto___34132,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async))
;
return ((function (__34117,switch__32373__auto__,c__32462__auto___34132,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0 = (function (){
var statearr_32789 = [null,null,null,null,null,null,null];
(statearr_32789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__);

(statearr_32789[(1)] = (1));

return statearr_32789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1 = (function (state_32781){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_32781);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e32790){var ex__32377__auto__ = e32790;
var statearr_32791_34142 = state_32781;
(statearr_32791_34142[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_32781[(4)]))){
var statearr_32792_34147 = state_32781;
(statearr_32792_34147[(1)] = cljs.core.first((state_32781[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34148 = state_32781;
state_32781 = G__34148;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__ = function(state_32781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1.call(this,state_32781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__;
})()
;})(__34117,switch__32373__auto__,c__32462__auto___34132,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async))
})();
var state__32464__auto__ = (function (){var statearr_32793 = f__32463__auto__();
(statearr_32793[(6)] = c__32462__auto___34132);

return statearr_32793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
});})(__34117,c__32462__auto___34132,G__32743_34118,G__32743_34119__$1,n__5616__auto___34116,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32743_34119__$1)].join('')));

}

var G__34150 = (__34117 + (1));
__34117 = G__34150;
continue;
} else {
}
break;
}

var c__32462__auto___34151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_32815){
var state_val_32816 = (state_32815[(1)]);
if((state_val_32816 === (7))){
var inst_32811 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32817_34152 = state_32815__$1;
(statearr_32817_34152[(2)] = inst_32811);

(statearr_32817_34152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (1))){
var state_32815__$1 = state_32815;
var statearr_32818_34153 = state_32815__$1;
(statearr_32818_34153[(2)] = null);

(statearr_32818_34153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (4))){
var inst_32796 = (state_32815[(7)]);
var inst_32796__$1 = (state_32815[(2)]);
var inst_32797 = (inst_32796__$1 == null);
var state_32815__$1 = (function (){var statearr_32819 = state_32815;
(statearr_32819[(7)] = inst_32796__$1);

return statearr_32819;
})();
if(cljs.core.truth_(inst_32797)){
var statearr_32820_34154 = state_32815__$1;
(statearr_32820_34154[(1)] = (5));

} else {
var statearr_32821_34155 = state_32815__$1;
(statearr_32821_34155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (6))){
var inst_32796 = (state_32815[(7)]);
var inst_32801 = (state_32815[(8)]);
var inst_32801__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32802 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32803 = [inst_32796,inst_32801__$1];
var inst_32804 = (new cljs.core.PersistentVector(null,2,(5),inst_32802,inst_32803,null));
var state_32815__$1 = (function (){var statearr_32822 = state_32815;
(statearr_32822[(8)] = inst_32801__$1);

return statearr_32822;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32815__$1,(8),jobs,inst_32804);
} else {
if((state_val_32816 === (3))){
var inst_32813 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32815__$1,inst_32813);
} else {
if((state_val_32816 === (2))){
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32815__$1,(4),from);
} else {
if((state_val_32816 === (9))){
var inst_32808 = (state_32815[(2)]);
var state_32815__$1 = (function (){var statearr_32823 = state_32815;
(statearr_32823[(9)] = inst_32808);

return statearr_32823;
})();
var statearr_32824_34157 = state_32815__$1;
(statearr_32824_34157[(2)] = null);

(statearr_32824_34157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (5))){
var inst_32799 = cljs.core.async.close_BANG_(jobs);
var state_32815__$1 = state_32815;
var statearr_32825_34159 = state_32815__$1;
(statearr_32825_34159[(2)] = inst_32799);

(statearr_32825_34159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (8))){
var inst_32801 = (state_32815[(8)]);
var inst_32806 = (state_32815[(2)]);
var state_32815__$1 = (function (){var statearr_32826 = state_32815;
(statearr_32826[(10)] = inst_32806);

return statearr_32826;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32815__$1,(9),results,inst_32801);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0 = (function (){
var statearr_32827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__);

(statearr_32827[(1)] = (1));

return statearr_32827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1 = (function (state_32815){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_32815);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e32828){var ex__32377__auto__ = e32828;
var statearr_32829_34160 = state_32815;
(statearr_32829_34160[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_32815[(4)]))){
var statearr_32830_34161 = state_32815;
(statearr_32830_34161[(1)] = cljs.core.first((state_32815[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34162 = state_32815;
state_32815 = G__34162;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__ = function(state_32815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1.call(this,state_32815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_32831 = f__32463__auto__();
(statearr_32831[(6)] = c__32462__auto___34151);

return statearr_32831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));


var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_32869){
var state_val_32870 = (state_32869[(1)]);
if((state_val_32870 === (7))){
var inst_32865 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32871_34164 = state_32869__$1;
(statearr_32871_34164[(2)] = inst_32865);

(statearr_32871_34164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (20))){
var state_32869__$1 = state_32869;
var statearr_32872_34165 = state_32869__$1;
(statearr_32872_34165[(2)] = null);

(statearr_32872_34165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (1))){
var state_32869__$1 = state_32869;
var statearr_32873_34167 = state_32869__$1;
(statearr_32873_34167[(2)] = null);

(statearr_32873_34167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (4))){
var inst_32834 = (state_32869[(7)]);
var inst_32834__$1 = (state_32869[(2)]);
var inst_32835 = (inst_32834__$1 == null);
var state_32869__$1 = (function (){var statearr_32874 = state_32869;
(statearr_32874[(7)] = inst_32834__$1);

return statearr_32874;
})();
if(cljs.core.truth_(inst_32835)){
var statearr_32875_34168 = state_32869__$1;
(statearr_32875_34168[(1)] = (5));

} else {
var statearr_32876_34169 = state_32869__$1;
(statearr_32876_34169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (15))){
var inst_32847 = (state_32869[(8)]);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32869__$1,(18),to,inst_32847);
} else {
if((state_val_32870 === (21))){
var inst_32860 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32877_34170 = state_32869__$1;
(statearr_32877_34170[(2)] = inst_32860);

(statearr_32877_34170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (13))){
var inst_32862 = (state_32869[(2)]);
var state_32869__$1 = (function (){var statearr_32878 = state_32869;
(statearr_32878[(9)] = inst_32862);

return statearr_32878;
})();
var statearr_32879_34171 = state_32869__$1;
(statearr_32879_34171[(2)] = null);

(statearr_32879_34171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (6))){
var inst_32834 = (state_32869[(7)]);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32869__$1,(11),inst_32834);
} else {
if((state_val_32870 === (17))){
var inst_32855 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
if(cljs.core.truth_(inst_32855)){
var statearr_32880_34172 = state_32869__$1;
(statearr_32880_34172[(1)] = (19));

} else {
var statearr_32881_34173 = state_32869__$1;
(statearr_32881_34173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (3))){
var inst_32867 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32869__$1,inst_32867);
} else {
if((state_val_32870 === (12))){
var inst_32844 = (state_32869[(10)]);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32869__$1,(14),inst_32844);
} else {
if((state_val_32870 === (2))){
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32869__$1,(4),results);
} else {
if((state_val_32870 === (19))){
var state_32869__$1 = state_32869;
var statearr_32882_34174 = state_32869__$1;
(statearr_32882_34174[(2)] = null);

(statearr_32882_34174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (11))){
var inst_32844 = (state_32869[(2)]);
var state_32869__$1 = (function (){var statearr_32883 = state_32869;
(statearr_32883[(10)] = inst_32844);

return statearr_32883;
})();
var statearr_32884_34175 = state_32869__$1;
(statearr_32884_34175[(2)] = null);

(statearr_32884_34175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (9))){
var state_32869__$1 = state_32869;
var statearr_32885_34176 = state_32869__$1;
(statearr_32885_34176[(2)] = null);

(statearr_32885_34176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (5))){
var state_32869__$1 = state_32869;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32886_34177 = state_32869__$1;
(statearr_32886_34177[(1)] = (8));

} else {
var statearr_32887_34178 = state_32869__$1;
(statearr_32887_34178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (14))){
var inst_32847 = (state_32869[(8)]);
var inst_32849 = (state_32869[(11)]);
var inst_32847__$1 = (state_32869[(2)]);
var inst_32848 = (inst_32847__$1 == null);
var inst_32849__$1 = cljs.core.not(inst_32848);
var state_32869__$1 = (function (){var statearr_32888 = state_32869;
(statearr_32888[(8)] = inst_32847__$1);

(statearr_32888[(11)] = inst_32849__$1);

return statearr_32888;
})();
if(inst_32849__$1){
var statearr_32889_34179 = state_32869__$1;
(statearr_32889_34179[(1)] = (15));

} else {
var statearr_32890_34180 = state_32869__$1;
(statearr_32890_34180[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (16))){
var inst_32849 = (state_32869[(11)]);
var state_32869__$1 = state_32869;
var statearr_32891_34181 = state_32869__$1;
(statearr_32891_34181[(2)] = inst_32849);

(statearr_32891_34181[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (10))){
var inst_32841 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32892_34182 = state_32869__$1;
(statearr_32892_34182[(2)] = inst_32841);

(statearr_32892_34182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (18))){
var inst_32852 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32893_34183 = state_32869__$1;
(statearr_32893_34183[(2)] = inst_32852);

(statearr_32893_34183[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (8))){
var inst_32838 = cljs.core.async.close_BANG_(to);
var state_32869__$1 = state_32869;
var statearr_32894_34184 = state_32869__$1;
(statearr_32894_34184[(2)] = inst_32838);

(statearr_32894_34184[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0 = (function (){
var statearr_32895 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32895[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__);

(statearr_32895[(1)] = (1));

return statearr_32895;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1 = (function (state_32869){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_32869);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e32896){var ex__32377__auto__ = e32896;
var statearr_32897_34185 = state_32869;
(statearr_32897_34185[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_32869[(4)]))){
var statearr_32898_34186 = state_32869;
(statearr_32898_34186[(1)] = cljs.core.first((state_32869[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34187 = state_32869;
state_32869 = G__34187;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__ = function(state_32869){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1.call(this,state_32869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32374__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_32899 = f__32463__auto__();
(statearr_32899[(6)] = c__32462__auto__);

return statearr_32899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
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
var G__32901 = arguments.length;
switch (G__32901) {
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
var G__32903 = arguments.length;
switch (G__32903) {
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
var G__32905 = arguments.length;
switch (G__32905) {
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
var c__32462__auto___34191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_32931){
var state_val_32932 = (state_32931[(1)]);
if((state_val_32932 === (7))){
var inst_32927 = (state_32931[(2)]);
var state_32931__$1 = state_32931;
var statearr_32933_34192 = state_32931__$1;
(statearr_32933_34192[(2)] = inst_32927);

(statearr_32933_34192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32932 === (1))){
var state_32931__$1 = state_32931;
var statearr_32934_34193 = state_32931__$1;
(statearr_32934_34193[(2)] = null);

(statearr_32934_34193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32932 === (4))){
var inst_32908 = (state_32931[(7)]);
var inst_32908__$1 = (state_32931[(2)]);
var inst_32909 = (inst_32908__$1 == null);
var state_32931__$1 = (function (){var statearr_32935 = state_32931;
(statearr_32935[(7)] = inst_32908__$1);

return statearr_32935;
})();
if(cljs.core.truth_(inst_32909)){
var statearr_32936_34195 = state_32931__$1;
(statearr_32936_34195[(1)] = (5));

} else {
var statearr_32937_34196 = state_32931__$1;
(statearr_32937_34196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32932 === (13))){
var state_32931__$1 = state_32931;
var statearr_32938_34197 = state_32931__$1;
(statearr_32938_34197[(2)] = null);

(statearr_32938_34197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32932 === (6))){
var inst_32908 = (state_32931[(7)]);
var inst_32914 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32908) : p.call(null,inst_32908));
var state_32931__$1 = state_32931;
if(cljs.core.truth_(inst_32914)){
var statearr_32939_34199 = state_32931__$1;
(statearr_32939_34199[(1)] = (9));

} else {
var statearr_32940_34200 = state_32931__$1;
(statearr_32940_34200[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32932 === (3))){
var inst_32929 = (state_32931[(2)]);
var state_32931__$1 = state_32931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32931__$1,inst_32929);
} else {
if((state_val_32932 === (12))){
var state_32931__$1 = state_32931;
var statearr_32941_34201 = state_32931__$1;
(statearr_32941_34201[(2)] = null);

(statearr_32941_34201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32932 === (2))){
var state_32931__$1 = state_32931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32931__$1,(4),ch);
} else {
if((state_val_32932 === (11))){
var inst_32908 = (state_32931[(7)]);
var inst_32918 = (state_32931[(2)]);
var state_32931__$1 = state_32931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32931__$1,(8),inst_32918,inst_32908);
} else {
if((state_val_32932 === (9))){
var state_32931__$1 = state_32931;
var statearr_32942_34202 = state_32931__$1;
(statearr_32942_34202[(2)] = tc);

(statearr_32942_34202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32932 === (5))){
var inst_32911 = cljs.core.async.close_BANG_(tc);
var inst_32912 = cljs.core.async.close_BANG_(fc);
var state_32931__$1 = (function (){var statearr_32943 = state_32931;
(statearr_32943[(8)] = inst_32911);

return statearr_32943;
})();
var statearr_32944_34203 = state_32931__$1;
(statearr_32944_34203[(2)] = inst_32912);

(statearr_32944_34203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32932 === (14))){
var inst_32925 = (state_32931[(2)]);
var state_32931__$1 = state_32931;
var statearr_32945_34204 = state_32931__$1;
(statearr_32945_34204[(2)] = inst_32925);

(statearr_32945_34204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32932 === (10))){
var state_32931__$1 = state_32931;
var statearr_32946_34205 = state_32931__$1;
(statearr_32946_34205[(2)] = fc);

(statearr_32946_34205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32932 === (8))){
var inst_32920 = (state_32931[(2)]);
var state_32931__$1 = state_32931;
if(cljs.core.truth_(inst_32920)){
var statearr_32947_34206 = state_32931__$1;
(statearr_32947_34206[(1)] = (12));

} else {
var statearr_32948_34207 = state_32931__$1;
(statearr_32948_34207[(1)] = (13));

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
var cljs$core$async$state_machine__32374__auto__ = null;
var cljs$core$async$state_machine__32374__auto____0 = (function (){
var statearr_32949 = [null,null,null,null,null,null,null,null,null];
(statearr_32949[(0)] = cljs$core$async$state_machine__32374__auto__);

(statearr_32949[(1)] = (1));

return statearr_32949;
});
var cljs$core$async$state_machine__32374__auto____1 = (function (state_32931){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_32931);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e32950){var ex__32377__auto__ = e32950;
var statearr_32951_34208 = state_32931;
(statearr_32951_34208[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_32931[(4)]))){
var statearr_32952_34209 = state_32931;
(statearr_32952_34209[(1)] = cljs.core.first((state_32931[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34210 = state_32931;
state_32931 = G__34210;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$state_machine__32374__auto__ = function(state_32931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32374__auto____1.call(this,state_32931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32374__auto____0;
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32374__auto____1;
return cljs$core$async$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_32953 = f__32463__auto__();
(statearr_32953[(6)] = c__32462__auto___34191);

return statearr_32953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
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
var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_32975){
var state_val_32976 = (state_32975[(1)]);
if((state_val_32976 === (7))){
var inst_32971 = (state_32975[(2)]);
var state_32975__$1 = state_32975;
var statearr_32977_34211 = state_32975__$1;
(statearr_32977_34211[(2)] = inst_32971);

(statearr_32977_34211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (1))){
var inst_32954 = init;
var inst_32955 = inst_32954;
var state_32975__$1 = (function (){var statearr_32978 = state_32975;
(statearr_32978[(7)] = inst_32955);

return statearr_32978;
})();
var statearr_32979_34212 = state_32975__$1;
(statearr_32979_34212[(2)] = null);

(statearr_32979_34212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (4))){
var inst_32958 = (state_32975[(8)]);
var inst_32958__$1 = (state_32975[(2)]);
var inst_32959 = (inst_32958__$1 == null);
var state_32975__$1 = (function (){var statearr_32980 = state_32975;
(statearr_32980[(8)] = inst_32958__$1);

return statearr_32980;
})();
if(cljs.core.truth_(inst_32959)){
var statearr_32981_34213 = state_32975__$1;
(statearr_32981_34213[(1)] = (5));

} else {
var statearr_32982_34214 = state_32975__$1;
(statearr_32982_34214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (6))){
var inst_32955 = (state_32975[(7)]);
var inst_32958 = (state_32975[(8)]);
var inst_32962 = (state_32975[(9)]);
var inst_32962__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32955,inst_32958) : f.call(null,inst_32955,inst_32958));
var inst_32963 = cljs.core.reduced_QMARK_(inst_32962__$1);
var state_32975__$1 = (function (){var statearr_32983 = state_32975;
(statearr_32983[(9)] = inst_32962__$1);

return statearr_32983;
})();
if(inst_32963){
var statearr_32984_34215 = state_32975__$1;
(statearr_32984_34215[(1)] = (8));

} else {
var statearr_32985_34216 = state_32975__$1;
(statearr_32985_34216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (3))){
var inst_32973 = (state_32975[(2)]);
var state_32975__$1 = state_32975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32975__$1,inst_32973);
} else {
if((state_val_32976 === (2))){
var state_32975__$1 = state_32975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32975__$1,(4),ch);
} else {
if((state_val_32976 === (9))){
var inst_32962 = (state_32975[(9)]);
var inst_32955 = inst_32962;
var state_32975__$1 = (function (){var statearr_32986 = state_32975;
(statearr_32986[(7)] = inst_32955);

return statearr_32986;
})();
var statearr_32987_34217 = state_32975__$1;
(statearr_32987_34217[(2)] = null);

(statearr_32987_34217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (5))){
var inst_32955 = (state_32975[(7)]);
var state_32975__$1 = state_32975;
var statearr_32988_34218 = state_32975__$1;
(statearr_32988_34218[(2)] = inst_32955);

(statearr_32988_34218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (10))){
var inst_32969 = (state_32975[(2)]);
var state_32975__$1 = state_32975;
var statearr_32989_34219 = state_32975__$1;
(statearr_32989_34219[(2)] = inst_32969);

(statearr_32989_34219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (8))){
var inst_32962 = (state_32975[(9)]);
var inst_32965 = cljs.core.deref(inst_32962);
var state_32975__$1 = state_32975;
var statearr_32990_34220 = state_32975__$1;
(statearr_32990_34220[(2)] = inst_32965);

(statearr_32990_34220[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32374__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32374__auto____0 = (function (){
var statearr_32991 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32991[(0)] = cljs$core$async$reduce_$_state_machine__32374__auto__);

(statearr_32991[(1)] = (1));

return statearr_32991;
});
var cljs$core$async$reduce_$_state_machine__32374__auto____1 = (function (state_32975){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_32975);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e32992){var ex__32377__auto__ = e32992;
var statearr_32993_34221 = state_32975;
(statearr_32993_34221[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_32975[(4)]))){
var statearr_32994_34222 = state_32975;
(statearr_32994_34222[(1)] = cljs.core.first((state_32975[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34223 = state_32975;
state_32975 = G__34223;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32374__auto__ = function(state_32975){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32374__auto____1.call(this,state_32975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32374__auto____0;
cljs$core$async$reduce_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32374__auto____1;
return cljs$core$async$reduce_$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_32995 = f__32463__auto__();
(statearr_32995[(6)] = c__32462__auto__);

return statearr_32995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33001){
var state_val_33002 = (state_33001[(1)]);
if((state_val_33002 === (1))){
var inst_32996 = cljs.core.async.reduce(f__$1,init,ch);
var state_33001__$1 = state_33001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33001__$1,(2),inst_32996);
} else {
if((state_val_33002 === (2))){
var inst_32998 = (state_33001[(2)]);
var inst_32999 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32998) : f__$1.call(null,inst_32998));
var state_33001__$1 = state_33001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33001__$1,inst_32999);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32374__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32374__auto____0 = (function (){
var statearr_33003 = [null,null,null,null,null,null,null];
(statearr_33003[(0)] = cljs$core$async$transduce_$_state_machine__32374__auto__);

(statearr_33003[(1)] = (1));

return statearr_33003;
});
var cljs$core$async$transduce_$_state_machine__32374__auto____1 = (function (state_33001){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33001);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33004){var ex__32377__auto__ = e33004;
var statearr_33005_34228 = state_33001;
(statearr_33005_34228[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33001[(4)]))){
var statearr_33006_34229 = state_33001;
(statearr_33006_34229[(1)] = cljs.core.first((state_33001[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34230 = state_33001;
state_33001 = G__34230;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32374__auto__ = function(state_33001){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32374__auto____1.call(this,state_33001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32374__auto____0;
cljs$core$async$transduce_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32374__auto____1;
return cljs$core$async$transduce_$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33007 = f__32463__auto__();
(statearr_33007[(6)] = c__32462__auto__);

return statearr_33007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
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
var G__33009 = arguments.length;
switch (G__33009) {
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
var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33034){
var state_val_33035 = (state_33034[(1)]);
if((state_val_33035 === (7))){
var inst_33016 = (state_33034[(2)]);
var state_33034__$1 = state_33034;
var statearr_33036_34233 = state_33034__$1;
(statearr_33036_34233[(2)] = inst_33016);

(statearr_33036_34233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (1))){
var inst_33010 = cljs.core.seq(coll);
var inst_33011 = inst_33010;
var state_33034__$1 = (function (){var statearr_33037 = state_33034;
(statearr_33037[(7)] = inst_33011);

return statearr_33037;
})();
var statearr_33038_34234 = state_33034__$1;
(statearr_33038_34234[(2)] = null);

(statearr_33038_34234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (4))){
var inst_33011 = (state_33034[(7)]);
var inst_33014 = cljs.core.first(inst_33011);
var state_33034__$1 = state_33034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33034__$1,(7),ch,inst_33014);
} else {
if((state_val_33035 === (13))){
var inst_33028 = (state_33034[(2)]);
var state_33034__$1 = state_33034;
var statearr_33039_34235 = state_33034__$1;
(statearr_33039_34235[(2)] = inst_33028);

(statearr_33039_34235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (6))){
var inst_33019 = (state_33034[(2)]);
var state_33034__$1 = state_33034;
if(cljs.core.truth_(inst_33019)){
var statearr_33040_34236 = state_33034__$1;
(statearr_33040_34236[(1)] = (8));

} else {
var statearr_33041_34237 = state_33034__$1;
(statearr_33041_34237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (3))){
var inst_33032 = (state_33034[(2)]);
var state_33034__$1 = state_33034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33034__$1,inst_33032);
} else {
if((state_val_33035 === (12))){
var state_33034__$1 = state_33034;
var statearr_33042_34238 = state_33034__$1;
(statearr_33042_34238[(2)] = null);

(statearr_33042_34238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (2))){
var inst_33011 = (state_33034[(7)]);
var state_33034__$1 = state_33034;
if(cljs.core.truth_(inst_33011)){
var statearr_33043_34239 = state_33034__$1;
(statearr_33043_34239[(1)] = (4));

} else {
var statearr_33044_34240 = state_33034__$1;
(statearr_33044_34240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (11))){
var inst_33025 = cljs.core.async.close_BANG_(ch);
var state_33034__$1 = state_33034;
var statearr_33045_34241 = state_33034__$1;
(statearr_33045_34241[(2)] = inst_33025);

(statearr_33045_34241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (9))){
var state_33034__$1 = state_33034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33046_34242 = state_33034__$1;
(statearr_33046_34242[(1)] = (11));

} else {
var statearr_33047_34243 = state_33034__$1;
(statearr_33047_34243[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (5))){
var inst_33011 = (state_33034[(7)]);
var state_33034__$1 = state_33034;
var statearr_33048_34244 = state_33034__$1;
(statearr_33048_34244[(2)] = inst_33011);

(statearr_33048_34244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (10))){
var inst_33030 = (state_33034[(2)]);
var state_33034__$1 = state_33034;
var statearr_33049_34245 = state_33034__$1;
(statearr_33049_34245[(2)] = inst_33030);

(statearr_33049_34245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33035 === (8))){
var inst_33011 = (state_33034[(7)]);
var inst_33021 = cljs.core.next(inst_33011);
var inst_33011__$1 = inst_33021;
var state_33034__$1 = (function (){var statearr_33050 = state_33034;
(statearr_33050[(7)] = inst_33011__$1);

return statearr_33050;
})();
var statearr_33051_34246 = state_33034__$1;
(statearr_33051_34246[(2)] = null);

(statearr_33051_34246[(1)] = (2));


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
var cljs$core$async$state_machine__32374__auto__ = null;
var cljs$core$async$state_machine__32374__auto____0 = (function (){
var statearr_33052 = [null,null,null,null,null,null,null,null];
(statearr_33052[(0)] = cljs$core$async$state_machine__32374__auto__);

(statearr_33052[(1)] = (1));

return statearr_33052;
});
var cljs$core$async$state_machine__32374__auto____1 = (function (state_33034){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33034);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33053){var ex__32377__auto__ = e33053;
var statearr_33054_34247 = state_33034;
(statearr_33054_34247[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33034[(4)]))){
var statearr_33055_34248 = state_33034;
(statearr_33055_34248[(1)] = cljs.core.first((state_33034[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34249 = state_33034;
state_33034 = G__34249;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$state_machine__32374__auto__ = function(state_33034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32374__auto____1.call(this,state_33034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32374__auto____0;
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32374__auto____1;
return cljs$core$async$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33056 = f__32463__auto__();
(statearr_33056[(6)] = c__32462__auto__);

return statearr_33056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
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
var G__33058 = arguments.length;
switch (G__33058) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34251 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34251(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34252 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34252(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34254 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34254(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34255 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34255(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33059 = (function (ch,cs,meta33060){
this.ch = ch;
this.cs = cs;
this.meta33060 = meta33060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33061,meta33060__$1){
var self__ = this;
var _33061__$1 = this;
return (new cljs.core.async.t_cljs$core$async33059(self__.ch,self__.cs,meta33060__$1));
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33061){
var self__ = this;
var _33061__$1 = this;
return self__.meta33060;
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33060","meta33060",1895306663,null)], null);
}));

(cljs.core.async.t_cljs$core$async33059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33059");

(cljs.core.async.t_cljs$core$async33059.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33059.
 */
cljs.core.async.__GT_t_cljs$core$async33059 = (function cljs$core$async$__GT_t_cljs$core$async33059(ch,cs,meta33060){
return (new cljs.core.async.t_cljs$core$async33059(ch,cs,meta33060));
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
var m = (new cljs.core.async.t_cljs$core$async33059(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32462__auto___34256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33194){
var state_val_33195 = (state_33194[(1)]);
if((state_val_33195 === (7))){
var inst_33190 = (state_33194[(2)]);
var state_33194__$1 = state_33194;
var statearr_33196_34257 = state_33194__$1;
(statearr_33196_34257[(2)] = inst_33190);

(statearr_33196_34257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (20))){
var inst_33095 = (state_33194[(7)]);
var inst_33107 = cljs.core.first(inst_33095);
var inst_33108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33107,(0),null);
var inst_33109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33107,(1),null);
var state_33194__$1 = (function (){var statearr_33197 = state_33194;
(statearr_33197[(8)] = inst_33108);

return statearr_33197;
})();
if(cljs.core.truth_(inst_33109)){
var statearr_33198_34258 = state_33194__$1;
(statearr_33198_34258[(1)] = (22));

} else {
var statearr_33199_34259 = state_33194__$1;
(statearr_33199_34259[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (27))){
var inst_33137 = (state_33194[(9)]);
var inst_33139 = (state_33194[(10)]);
var inst_33144 = (state_33194[(11)]);
var inst_33064 = (state_33194[(12)]);
var inst_33144__$1 = cljs.core._nth(inst_33137,inst_33139);
var inst_33145 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33144__$1,inst_33064,done);
var state_33194__$1 = (function (){var statearr_33200 = state_33194;
(statearr_33200[(11)] = inst_33144__$1);

return statearr_33200;
})();
if(cljs.core.truth_(inst_33145)){
var statearr_33201_34260 = state_33194__$1;
(statearr_33201_34260[(1)] = (30));

} else {
var statearr_33202_34261 = state_33194__$1;
(statearr_33202_34261[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (1))){
var state_33194__$1 = state_33194;
var statearr_33203_34262 = state_33194__$1;
(statearr_33203_34262[(2)] = null);

(statearr_33203_34262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (24))){
var inst_33095 = (state_33194[(7)]);
var inst_33114 = (state_33194[(2)]);
var inst_33115 = cljs.core.next(inst_33095);
var inst_33073 = inst_33115;
var inst_33074 = null;
var inst_33075 = (0);
var inst_33076 = (0);
var state_33194__$1 = (function (){var statearr_33204 = state_33194;
(statearr_33204[(13)] = inst_33114);

(statearr_33204[(14)] = inst_33073);

(statearr_33204[(15)] = inst_33074);

(statearr_33204[(16)] = inst_33075);

(statearr_33204[(17)] = inst_33076);

return statearr_33204;
})();
var statearr_33205_34263 = state_33194__$1;
(statearr_33205_34263[(2)] = null);

(statearr_33205_34263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (39))){
var state_33194__$1 = state_33194;
var statearr_33209_34264 = state_33194__$1;
(statearr_33209_34264[(2)] = null);

(statearr_33209_34264[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (4))){
var inst_33064 = (state_33194[(12)]);
var inst_33064__$1 = (state_33194[(2)]);
var inst_33065 = (inst_33064__$1 == null);
var state_33194__$1 = (function (){var statearr_33210 = state_33194;
(statearr_33210[(12)] = inst_33064__$1);

return statearr_33210;
})();
if(cljs.core.truth_(inst_33065)){
var statearr_33211_34265 = state_33194__$1;
(statearr_33211_34265[(1)] = (5));

} else {
var statearr_33212_34266 = state_33194__$1;
(statearr_33212_34266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (15))){
var inst_33076 = (state_33194[(17)]);
var inst_33073 = (state_33194[(14)]);
var inst_33074 = (state_33194[(15)]);
var inst_33075 = (state_33194[(16)]);
var inst_33091 = (state_33194[(2)]);
var inst_33092 = (inst_33076 + (1));
var tmp33206 = inst_33074;
var tmp33207 = inst_33073;
var tmp33208 = inst_33075;
var inst_33073__$1 = tmp33207;
var inst_33074__$1 = tmp33206;
var inst_33075__$1 = tmp33208;
var inst_33076__$1 = inst_33092;
var state_33194__$1 = (function (){var statearr_33213 = state_33194;
(statearr_33213[(18)] = inst_33091);

(statearr_33213[(14)] = inst_33073__$1);

(statearr_33213[(15)] = inst_33074__$1);

(statearr_33213[(16)] = inst_33075__$1);

(statearr_33213[(17)] = inst_33076__$1);

return statearr_33213;
})();
var statearr_33214_34267 = state_33194__$1;
(statearr_33214_34267[(2)] = null);

(statearr_33214_34267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (21))){
var inst_33118 = (state_33194[(2)]);
var state_33194__$1 = state_33194;
var statearr_33218_34268 = state_33194__$1;
(statearr_33218_34268[(2)] = inst_33118);

(statearr_33218_34268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (31))){
var inst_33144 = (state_33194[(11)]);
var inst_33148 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33144);
var state_33194__$1 = state_33194;
var statearr_33219_34269 = state_33194__$1;
(statearr_33219_34269[(2)] = inst_33148);

(statearr_33219_34269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (32))){
var inst_33139 = (state_33194[(10)]);
var inst_33136 = (state_33194[(19)]);
var inst_33137 = (state_33194[(9)]);
var inst_33138 = (state_33194[(20)]);
var inst_33150 = (state_33194[(2)]);
var inst_33151 = (inst_33139 + (1));
var tmp33215 = inst_33136;
var tmp33216 = inst_33137;
var tmp33217 = inst_33138;
var inst_33136__$1 = tmp33215;
var inst_33137__$1 = tmp33216;
var inst_33138__$1 = tmp33217;
var inst_33139__$1 = inst_33151;
var state_33194__$1 = (function (){var statearr_33220 = state_33194;
(statearr_33220[(21)] = inst_33150);

(statearr_33220[(19)] = inst_33136__$1);

(statearr_33220[(9)] = inst_33137__$1);

(statearr_33220[(20)] = inst_33138__$1);

(statearr_33220[(10)] = inst_33139__$1);

return statearr_33220;
})();
var statearr_33221_34270 = state_33194__$1;
(statearr_33221_34270[(2)] = null);

(statearr_33221_34270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (40))){
var inst_33163 = (state_33194[(22)]);
var inst_33167 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33163);
var state_33194__$1 = state_33194;
var statearr_33222_34271 = state_33194__$1;
(statearr_33222_34271[(2)] = inst_33167);

(statearr_33222_34271[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (33))){
var inst_33154 = (state_33194[(23)]);
var inst_33156 = cljs.core.chunked_seq_QMARK_(inst_33154);
var state_33194__$1 = state_33194;
if(inst_33156){
var statearr_33223_34272 = state_33194__$1;
(statearr_33223_34272[(1)] = (36));

} else {
var statearr_33224_34273 = state_33194__$1;
(statearr_33224_34273[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (13))){
var inst_33085 = (state_33194[(24)]);
var inst_33088 = cljs.core.async.close_BANG_(inst_33085);
var state_33194__$1 = state_33194;
var statearr_33225_34277 = state_33194__$1;
(statearr_33225_34277[(2)] = inst_33088);

(statearr_33225_34277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (22))){
var inst_33108 = (state_33194[(8)]);
var inst_33111 = cljs.core.async.close_BANG_(inst_33108);
var state_33194__$1 = state_33194;
var statearr_33226_34278 = state_33194__$1;
(statearr_33226_34278[(2)] = inst_33111);

(statearr_33226_34278[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (36))){
var inst_33154 = (state_33194[(23)]);
var inst_33158 = cljs.core.chunk_first(inst_33154);
var inst_33159 = cljs.core.chunk_rest(inst_33154);
var inst_33160 = cljs.core.count(inst_33158);
var inst_33136 = inst_33159;
var inst_33137 = inst_33158;
var inst_33138 = inst_33160;
var inst_33139 = (0);
var state_33194__$1 = (function (){var statearr_33227 = state_33194;
(statearr_33227[(19)] = inst_33136);

(statearr_33227[(9)] = inst_33137);

(statearr_33227[(20)] = inst_33138);

(statearr_33227[(10)] = inst_33139);

return statearr_33227;
})();
var statearr_33228_34279 = state_33194__$1;
(statearr_33228_34279[(2)] = null);

(statearr_33228_34279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (41))){
var inst_33154 = (state_33194[(23)]);
var inst_33169 = (state_33194[(2)]);
var inst_33170 = cljs.core.next(inst_33154);
var inst_33136 = inst_33170;
var inst_33137 = null;
var inst_33138 = (0);
var inst_33139 = (0);
var state_33194__$1 = (function (){var statearr_33229 = state_33194;
(statearr_33229[(25)] = inst_33169);

(statearr_33229[(19)] = inst_33136);

(statearr_33229[(9)] = inst_33137);

(statearr_33229[(20)] = inst_33138);

(statearr_33229[(10)] = inst_33139);

return statearr_33229;
})();
var statearr_33230_34280 = state_33194__$1;
(statearr_33230_34280[(2)] = null);

(statearr_33230_34280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (43))){
var state_33194__$1 = state_33194;
var statearr_33231_34281 = state_33194__$1;
(statearr_33231_34281[(2)] = null);

(statearr_33231_34281[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (29))){
var inst_33178 = (state_33194[(2)]);
var state_33194__$1 = state_33194;
var statearr_33232_34282 = state_33194__$1;
(statearr_33232_34282[(2)] = inst_33178);

(statearr_33232_34282[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (44))){
var inst_33187 = (state_33194[(2)]);
var state_33194__$1 = (function (){var statearr_33233 = state_33194;
(statearr_33233[(26)] = inst_33187);

return statearr_33233;
})();
var statearr_33234_34283 = state_33194__$1;
(statearr_33234_34283[(2)] = null);

(statearr_33234_34283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (6))){
var inst_33128 = (state_33194[(27)]);
var inst_33127 = cljs.core.deref(cs);
var inst_33128__$1 = cljs.core.keys(inst_33127);
var inst_33129 = cljs.core.count(inst_33128__$1);
var inst_33130 = cljs.core.reset_BANG_(dctr,inst_33129);
var inst_33135 = cljs.core.seq(inst_33128__$1);
var inst_33136 = inst_33135;
var inst_33137 = null;
var inst_33138 = (0);
var inst_33139 = (0);
var state_33194__$1 = (function (){var statearr_33235 = state_33194;
(statearr_33235[(27)] = inst_33128__$1);

(statearr_33235[(28)] = inst_33130);

(statearr_33235[(19)] = inst_33136);

(statearr_33235[(9)] = inst_33137);

(statearr_33235[(20)] = inst_33138);

(statearr_33235[(10)] = inst_33139);

return statearr_33235;
})();
var statearr_33236_34285 = state_33194__$1;
(statearr_33236_34285[(2)] = null);

(statearr_33236_34285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (28))){
var inst_33136 = (state_33194[(19)]);
var inst_33154 = (state_33194[(23)]);
var inst_33154__$1 = cljs.core.seq(inst_33136);
var state_33194__$1 = (function (){var statearr_33237 = state_33194;
(statearr_33237[(23)] = inst_33154__$1);

return statearr_33237;
})();
if(inst_33154__$1){
var statearr_33238_34287 = state_33194__$1;
(statearr_33238_34287[(1)] = (33));

} else {
var statearr_33239_34288 = state_33194__$1;
(statearr_33239_34288[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (25))){
var inst_33139 = (state_33194[(10)]);
var inst_33138 = (state_33194[(20)]);
var inst_33141 = (inst_33139 < inst_33138);
var inst_33142 = inst_33141;
var state_33194__$1 = state_33194;
if(cljs.core.truth_(inst_33142)){
var statearr_33240_34289 = state_33194__$1;
(statearr_33240_34289[(1)] = (27));

} else {
var statearr_33241_34290 = state_33194__$1;
(statearr_33241_34290[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (34))){
var state_33194__$1 = state_33194;
var statearr_33242_34291 = state_33194__$1;
(statearr_33242_34291[(2)] = null);

(statearr_33242_34291[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (17))){
var state_33194__$1 = state_33194;
var statearr_33243_34292 = state_33194__$1;
(statearr_33243_34292[(2)] = null);

(statearr_33243_34292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (3))){
var inst_33192 = (state_33194[(2)]);
var state_33194__$1 = state_33194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33194__$1,inst_33192);
} else {
if((state_val_33195 === (12))){
var inst_33123 = (state_33194[(2)]);
var state_33194__$1 = state_33194;
var statearr_33244_34293 = state_33194__$1;
(statearr_33244_34293[(2)] = inst_33123);

(statearr_33244_34293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (2))){
var state_33194__$1 = state_33194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33194__$1,(4),ch);
} else {
if((state_val_33195 === (23))){
var state_33194__$1 = state_33194;
var statearr_33245_34295 = state_33194__$1;
(statearr_33245_34295[(2)] = null);

(statearr_33245_34295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (35))){
var inst_33176 = (state_33194[(2)]);
var state_33194__$1 = state_33194;
var statearr_33246_34296 = state_33194__$1;
(statearr_33246_34296[(2)] = inst_33176);

(statearr_33246_34296[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (19))){
var inst_33095 = (state_33194[(7)]);
var inst_33099 = cljs.core.chunk_first(inst_33095);
var inst_33100 = cljs.core.chunk_rest(inst_33095);
var inst_33101 = cljs.core.count(inst_33099);
var inst_33073 = inst_33100;
var inst_33074 = inst_33099;
var inst_33075 = inst_33101;
var inst_33076 = (0);
var state_33194__$1 = (function (){var statearr_33247 = state_33194;
(statearr_33247[(14)] = inst_33073);

(statearr_33247[(15)] = inst_33074);

(statearr_33247[(16)] = inst_33075);

(statearr_33247[(17)] = inst_33076);

return statearr_33247;
})();
var statearr_33248_34300 = state_33194__$1;
(statearr_33248_34300[(2)] = null);

(statearr_33248_34300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (11))){
var inst_33073 = (state_33194[(14)]);
var inst_33095 = (state_33194[(7)]);
var inst_33095__$1 = cljs.core.seq(inst_33073);
var state_33194__$1 = (function (){var statearr_33249 = state_33194;
(statearr_33249[(7)] = inst_33095__$1);

return statearr_33249;
})();
if(inst_33095__$1){
var statearr_33250_34301 = state_33194__$1;
(statearr_33250_34301[(1)] = (16));

} else {
var statearr_33251_34302 = state_33194__$1;
(statearr_33251_34302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (9))){
var inst_33125 = (state_33194[(2)]);
var state_33194__$1 = state_33194;
var statearr_33252_34303 = state_33194__$1;
(statearr_33252_34303[(2)] = inst_33125);

(statearr_33252_34303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (5))){
var inst_33071 = cljs.core.deref(cs);
var inst_33072 = cljs.core.seq(inst_33071);
var inst_33073 = inst_33072;
var inst_33074 = null;
var inst_33075 = (0);
var inst_33076 = (0);
var state_33194__$1 = (function (){var statearr_33253 = state_33194;
(statearr_33253[(14)] = inst_33073);

(statearr_33253[(15)] = inst_33074);

(statearr_33253[(16)] = inst_33075);

(statearr_33253[(17)] = inst_33076);

return statearr_33253;
})();
var statearr_33254_34304 = state_33194__$1;
(statearr_33254_34304[(2)] = null);

(statearr_33254_34304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (14))){
var state_33194__$1 = state_33194;
var statearr_33255_34305 = state_33194__$1;
(statearr_33255_34305[(2)] = null);

(statearr_33255_34305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (45))){
var inst_33184 = (state_33194[(2)]);
var state_33194__$1 = state_33194;
var statearr_33256_34306 = state_33194__$1;
(statearr_33256_34306[(2)] = inst_33184);

(statearr_33256_34306[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (26))){
var inst_33128 = (state_33194[(27)]);
var inst_33180 = (state_33194[(2)]);
var inst_33181 = cljs.core.seq(inst_33128);
var state_33194__$1 = (function (){var statearr_33257 = state_33194;
(statearr_33257[(29)] = inst_33180);

return statearr_33257;
})();
if(inst_33181){
var statearr_33258_34307 = state_33194__$1;
(statearr_33258_34307[(1)] = (42));

} else {
var statearr_33259_34308 = state_33194__$1;
(statearr_33259_34308[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (16))){
var inst_33095 = (state_33194[(7)]);
var inst_33097 = cljs.core.chunked_seq_QMARK_(inst_33095);
var state_33194__$1 = state_33194;
if(inst_33097){
var statearr_33260_34309 = state_33194__$1;
(statearr_33260_34309[(1)] = (19));

} else {
var statearr_33261_34310 = state_33194__$1;
(statearr_33261_34310[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (38))){
var inst_33173 = (state_33194[(2)]);
var state_33194__$1 = state_33194;
var statearr_33262_34311 = state_33194__$1;
(statearr_33262_34311[(2)] = inst_33173);

(statearr_33262_34311[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (30))){
var state_33194__$1 = state_33194;
var statearr_33263_34312 = state_33194__$1;
(statearr_33263_34312[(2)] = null);

(statearr_33263_34312[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (10))){
var inst_33074 = (state_33194[(15)]);
var inst_33076 = (state_33194[(17)]);
var inst_33084 = cljs.core._nth(inst_33074,inst_33076);
var inst_33085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33084,(0),null);
var inst_33086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33084,(1),null);
var state_33194__$1 = (function (){var statearr_33264 = state_33194;
(statearr_33264[(24)] = inst_33085);

return statearr_33264;
})();
if(cljs.core.truth_(inst_33086)){
var statearr_33265_34314 = state_33194__$1;
(statearr_33265_34314[(1)] = (13));

} else {
var statearr_33266_34315 = state_33194__$1;
(statearr_33266_34315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (18))){
var inst_33121 = (state_33194[(2)]);
var state_33194__$1 = state_33194;
var statearr_33267_34317 = state_33194__$1;
(statearr_33267_34317[(2)] = inst_33121);

(statearr_33267_34317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (42))){
var state_33194__$1 = state_33194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33194__$1,(45),dchan);
} else {
if((state_val_33195 === (37))){
var inst_33154 = (state_33194[(23)]);
var inst_33163 = (state_33194[(22)]);
var inst_33064 = (state_33194[(12)]);
var inst_33163__$1 = cljs.core.first(inst_33154);
var inst_33164 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33163__$1,inst_33064,done);
var state_33194__$1 = (function (){var statearr_33268 = state_33194;
(statearr_33268[(22)] = inst_33163__$1);

return statearr_33268;
})();
if(cljs.core.truth_(inst_33164)){
var statearr_33269_34318 = state_33194__$1;
(statearr_33269_34318[(1)] = (39));

} else {
var statearr_33270_34319 = state_33194__$1;
(statearr_33270_34319[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (8))){
var inst_33076 = (state_33194[(17)]);
var inst_33075 = (state_33194[(16)]);
var inst_33078 = (inst_33076 < inst_33075);
var inst_33079 = inst_33078;
var state_33194__$1 = state_33194;
if(cljs.core.truth_(inst_33079)){
var statearr_33271_34320 = state_33194__$1;
(statearr_33271_34320[(1)] = (10));

} else {
var statearr_33272_34322 = state_33194__$1;
(statearr_33272_34322[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32374__auto__ = null;
var cljs$core$async$mult_$_state_machine__32374__auto____0 = (function (){
var statearr_33273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33273[(0)] = cljs$core$async$mult_$_state_machine__32374__auto__);

(statearr_33273[(1)] = (1));

return statearr_33273;
});
var cljs$core$async$mult_$_state_machine__32374__auto____1 = (function (state_33194){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33194);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33274){var ex__32377__auto__ = e33274;
var statearr_33275_34323 = state_33194;
(statearr_33275_34323[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33194[(4)]))){
var statearr_33276_34324 = state_33194;
(statearr_33276_34324[(1)] = cljs.core.first((state_33194[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34325 = state_33194;
state_33194 = G__34325;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32374__auto__ = function(state_33194){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32374__auto____1.call(this,state_33194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32374__auto____0;
cljs$core$async$mult_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32374__auto____1;
return cljs$core$async$mult_$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33277 = f__32463__auto__();
(statearr_33277[(6)] = c__32462__auto___34256);

return statearr_33277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
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
var G__33279 = arguments.length;
switch (G__33279) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34329 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34329(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34331 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34331(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34333 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34333(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34335 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34335(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34336 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34336(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34337 = arguments.length;
var i__5750__auto___34338 = (0);
while(true){
if((i__5750__auto___34338 < len__5749__auto___34337)){
args__5755__auto__.push((arguments[i__5750__auto___34338]));

var G__34339 = (i__5750__auto___34338 + (1));
i__5750__auto___34338 = G__34339;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33284){
var map__33285 = p__33284;
var map__33285__$1 = cljs.core.__destructure_map(map__33285);
var opts = map__33285__$1;
var statearr_33286_34341 = state;
(statearr_33286_34341[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33287_34342 = state;
(statearr_33287_34342[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33288_34343 = state;
(statearr_33288_34343[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33280){
var G__33281 = cljs.core.first(seq33280);
var seq33280__$1 = cljs.core.next(seq33280);
var G__33282 = cljs.core.first(seq33280__$1);
var seq33280__$2 = cljs.core.next(seq33280__$1);
var G__33283 = cljs.core.first(seq33280__$2);
var seq33280__$3 = cljs.core.next(seq33280__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33281,G__33282,G__33283,seq33280__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33289 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33290){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33290 = meta33290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33291,meta33290__$1){
var self__ = this;
var _33291__$1 = this;
return (new cljs.core.async.t_cljs$core$async33289(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33290__$1));
}));

(cljs.core.async.t_cljs$core$async33289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33291){
var self__ = this;
var _33291__$1 = this;
return self__.meta33290;
}));

(cljs.core.async.t_cljs$core$async33289.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33289.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33289.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33289.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33289.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33289.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33289.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33290","meta33290",302504555,null)], null);
}));

(cljs.core.async.t_cljs$core$async33289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33289");

(cljs.core.async.t_cljs$core$async33289.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33289.
 */
cljs.core.async.__GT_t_cljs$core$async33289 = (function cljs$core$async$__GT_t_cljs$core$async33289(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33290){
return (new cljs.core.async.t_cljs$core$async33289(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33290));
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
var m = (new cljs.core.async.t_cljs$core$async33289(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32462__auto___34345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33359){
var state_val_33360 = (state_33359[(1)]);
if((state_val_33360 === (7))){
var inst_33319 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
if(cljs.core.truth_(inst_33319)){
var statearr_33361_34346 = state_33359__$1;
(statearr_33361_34346[(1)] = (8));

} else {
var statearr_33362_34347 = state_33359__$1;
(statearr_33362_34347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (20))){
var inst_33312 = (state_33359[(7)]);
var state_33359__$1 = state_33359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33359__$1,(23),out,inst_33312);
} else {
if((state_val_33360 === (1))){
var inst_33295 = calc_state();
var inst_33296 = cljs.core.__destructure_map(inst_33295);
var inst_33297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33296,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33296,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33296,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33300 = inst_33295;
var state_33359__$1 = (function (){var statearr_33363 = state_33359;
(statearr_33363[(8)] = inst_33297);

(statearr_33363[(9)] = inst_33298);

(statearr_33363[(10)] = inst_33299);

(statearr_33363[(11)] = inst_33300);

return statearr_33363;
})();
var statearr_33364_34348 = state_33359__$1;
(statearr_33364_34348[(2)] = null);

(statearr_33364_34348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (24))){
var inst_33303 = (state_33359[(12)]);
var inst_33300 = inst_33303;
var state_33359__$1 = (function (){var statearr_33365 = state_33359;
(statearr_33365[(11)] = inst_33300);

return statearr_33365;
})();
var statearr_33366_34349 = state_33359__$1;
(statearr_33366_34349[(2)] = null);

(statearr_33366_34349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (4))){
var inst_33312 = (state_33359[(7)]);
var inst_33314 = (state_33359[(13)]);
var inst_33311 = (state_33359[(2)]);
var inst_33312__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33311,(0),null);
var inst_33313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33311,(1),null);
var inst_33314__$1 = (inst_33312__$1 == null);
var state_33359__$1 = (function (){var statearr_33367 = state_33359;
(statearr_33367[(7)] = inst_33312__$1);

(statearr_33367[(14)] = inst_33313);

(statearr_33367[(13)] = inst_33314__$1);

return statearr_33367;
})();
if(cljs.core.truth_(inst_33314__$1)){
var statearr_33368_34350 = state_33359__$1;
(statearr_33368_34350[(1)] = (5));

} else {
var statearr_33369_34351 = state_33359__$1;
(statearr_33369_34351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (15))){
var inst_33304 = (state_33359[(15)]);
var inst_33333 = (state_33359[(16)]);
var inst_33333__$1 = cljs.core.empty_QMARK_(inst_33304);
var state_33359__$1 = (function (){var statearr_33370 = state_33359;
(statearr_33370[(16)] = inst_33333__$1);

return statearr_33370;
})();
if(inst_33333__$1){
var statearr_33371_34352 = state_33359__$1;
(statearr_33371_34352[(1)] = (17));

} else {
var statearr_33372_34353 = state_33359__$1;
(statearr_33372_34353[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (21))){
var inst_33303 = (state_33359[(12)]);
var inst_33300 = inst_33303;
var state_33359__$1 = (function (){var statearr_33373 = state_33359;
(statearr_33373[(11)] = inst_33300);

return statearr_33373;
})();
var statearr_33374_34354 = state_33359__$1;
(statearr_33374_34354[(2)] = null);

(statearr_33374_34354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (13))){
var inst_33326 = (state_33359[(2)]);
var inst_33327 = calc_state();
var inst_33300 = inst_33327;
var state_33359__$1 = (function (){var statearr_33375 = state_33359;
(statearr_33375[(17)] = inst_33326);

(statearr_33375[(11)] = inst_33300);

return statearr_33375;
})();
var statearr_33376_34355 = state_33359__$1;
(statearr_33376_34355[(2)] = null);

(statearr_33376_34355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (22))){
var inst_33353 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33377_34356 = state_33359__$1;
(statearr_33377_34356[(2)] = inst_33353);

(statearr_33377_34356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (6))){
var inst_33313 = (state_33359[(14)]);
var inst_33317 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33313,change);
var state_33359__$1 = state_33359;
var statearr_33378_34357 = state_33359__$1;
(statearr_33378_34357[(2)] = inst_33317);

(statearr_33378_34357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (25))){
var state_33359__$1 = state_33359;
var statearr_33379_34358 = state_33359__$1;
(statearr_33379_34358[(2)] = null);

(statearr_33379_34358[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (17))){
var inst_33305 = (state_33359[(18)]);
var inst_33313 = (state_33359[(14)]);
var inst_33335 = (inst_33305.cljs$core$IFn$_invoke$arity$1 ? inst_33305.cljs$core$IFn$_invoke$arity$1(inst_33313) : inst_33305.call(null,inst_33313));
var inst_33336 = cljs.core.not(inst_33335);
var state_33359__$1 = state_33359;
var statearr_33380_34359 = state_33359__$1;
(statearr_33380_34359[(2)] = inst_33336);

(statearr_33380_34359[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (3))){
var inst_33357 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33359__$1,inst_33357);
} else {
if((state_val_33360 === (12))){
var state_33359__$1 = state_33359;
var statearr_33381_34360 = state_33359__$1;
(statearr_33381_34360[(2)] = null);

(statearr_33381_34360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (2))){
var inst_33300 = (state_33359[(11)]);
var inst_33303 = (state_33359[(12)]);
var inst_33303__$1 = cljs.core.__destructure_map(inst_33300);
var inst_33304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33303__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33303__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33303__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33359__$1 = (function (){var statearr_33382 = state_33359;
(statearr_33382[(12)] = inst_33303__$1);

(statearr_33382[(15)] = inst_33304);

(statearr_33382[(18)] = inst_33305);

return statearr_33382;
})();
return cljs.core.async.ioc_alts_BANG_(state_33359__$1,(4),inst_33306);
} else {
if((state_val_33360 === (23))){
var inst_33344 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
if(cljs.core.truth_(inst_33344)){
var statearr_33383_34365 = state_33359__$1;
(statearr_33383_34365[(1)] = (24));

} else {
var statearr_33384_34366 = state_33359__$1;
(statearr_33384_34366[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (19))){
var inst_33339 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33385_34371 = state_33359__$1;
(statearr_33385_34371[(2)] = inst_33339);

(statearr_33385_34371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (11))){
var inst_33313 = (state_33359[(14)]);
var inst_33323 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33313);
var state_33359__$1 = state_33359;
var statearr_33386_34372 = state_33359__$1;
(statearr_33386_34372[(2)] = inst_33323);

(statearr_33386_34372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (9))){
var inst_33304 = (state_33359[(15)]);
var inst_33313 = (state_33359[(14)]);
var inst_33330 = (state_33359[(19)]);
var inst_33330__$1 = (inst_33304.cljs$core$IFn$_invoke$arity$1 ? inst_33304.cljs$core$IFn$_invoke$arity$1(inst_33313) : inst_33304.call(null,inst_33313));
var state_33359__$1 = (function (){var statearr_33387 = state_33359;
(statearr_33387[(19)] = inst_33330__$1);

return statearr_33387;
})();
if(cljs.core.truth_(inst_33330__$1)){
var statearr_33388_34377 = state_33359__$1;
(statearr_33388_34377[(1)] = (14));

} else {
var statearr_33389_34378 = state_33359__$1;
(statearr_33389_34378[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (5))){
var inst_33314 = (state_33359[(13)]);
var state_33359__$1 = state_33359;
var statearr_33390_34379 = state_33359__$1;
(statearr_33390_34379[(2)] = inst_33314);

(statearr_33390_34379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (14))){
var inst_33330 = (state_33359[(19)]);
var state_33359__$1 = state_33359;
var statearr_33391_34380 = state_33359__$1;
(statearr_33391_34380[(2)] = inst_33330);

(statearr_33391_34380[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (26))){
var inst_33349 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33392_34381 = state_33359__$1;
(statearr_33392_34381[(2)] = inst_33349);

(statearr_33392_34381[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (16))){
var inst_33341 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
if(cljs.core.truth_(inst_33341)){
var statearr_33393_34382 = state_33359__$1;
(statearr_33393_34382[(1)] = (20));

} else {
var statearr_33394_34383 = state_33359__$1;
(statearr_33394_34383[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (10))){
var inst_33355 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33395_34384 = state_33359__$1;
(statearr_33395_34384[(2)] = inst_33355);

(statearr_33395_34384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (18))){
var inst_33333 = (state_33359[(16)]);
var state_33359__$1 = state_33359;
var statearr_33396_34385 = state_33359__$1;
(statearr_33396_34385[(2)] = inst_33333);

(statearr_33396_34385[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (8))){
var inst_33312 = (state_33359[(7)]);
var inst_33321 = (inst_33312 == null);
var state_33359__$1 = state_33359;
if(cljs.core.truth_(inst_33321)){
var statearr_33397_34387 = state_33359__$1;
(statearr_33397_34387[(1)] = (11));

} else {
var statearr_33398_34388 = state_33359__$1;
(statearr_33398_34388[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32374__auto__ = null;
var cljs$core$async$mix_$_state_machine__32374__auto____0 = (function (){
var statearr_33399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33399[(0)] = cljs$core$async$mix_$_state_machine__32374__auto__);

(statearr_33399[(1)] = (1));

return statearr_33399;
});
var cljs$core$async$mix_$_state_machine__32374__auto____1 = (function (state_33359){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33359);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33400){var ex__32377__auto__ = e33400;
var statearr_33401_34391 = state_33359;
(statearr_33401_34391[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33359[(4)]))){
var statearr_33402_34392 = state_33359;
(statearr_33402_34392[(1)] = cljs.core.first((state_33359[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34393 = state_33359;
state_33359 = G__34393;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32374__auto__ = function(state_33359){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32374__auto____1.call(this,state_33359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32374__auto____0;
cljs$core$async$mix_$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32374__auto____1;
return cljs$core$async$mix_$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33403 = f__32463__auto__();
(statearr_33403[(6)] = c__32462__auto___34345);

return statearr_33403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34394 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34394(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34395 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34395(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34396 = (function() {
var G__34397 = null;
var G__34397__1 = (function (p){
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
var G__34397__2 = (function (p,v){
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
G__34397 = function(p,v){
switch(arguments.length){
case 1:
return G__34397__1.call(this,p);
case 2:
return G__34397__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34397.cljs$core$IFn$_invoke$arity$1 = G__34397__1;
G__34397.cljs$core$IFn$_invoke$arity$2 = G__34397__2;
return G__34397;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33405 = arguments.length;
switch (G__33405) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34396(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34396(p,v);
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
cljs.core.async.t_cljs$core$async33409 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33410){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33410 = meta33410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33411,meta33410__$1){
var self__ = this;
var _33411__$1 = this;
return (new cljs.core.async.t_cljs$core$async33409(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33410__$1));
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33411){
var self__ = this;
var _33411__$1 = this;
return self__.meta33410;
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33409.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33410","meta33410",1165446324,null)], null);
}));

(cljs.core.async.t_cljs$core$async33409.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33409");

(cljs.core.async.t_cljs$core$async33409.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33409");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33409.
 */
cljs.core.async.__GT_t_cljs$core$async33409 = (function cljs$core$async$__GT_t_cljs$core$async33409(ch,topic_fn,buf_fn,mults,ensure_mult,meta33410){
return (new cljs.core.async.t_cljs$core$async33409(ch,topic_fn,buf_fn,mults,ensure_mult,meta33410));
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
var G__33408 = arguments.length;
switch (G__33408) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33406_SHARP_){
if(cljs.core.truth_((p1__33406_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33406_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33406_SHARP_.call(null,topic)))){
return p1__33406_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33406_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33409(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32462__auto___34411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33483){
var state_val_33484 = (state_33483[(1)]);
if((state_val_33484 === (7))){
var inst_33479 = (state_33483[(2)]);
var state_33483__$1 = state_33483;
var statearr_33485_34413 = state_33483__$1;
(statearr_33485_34413[(2)] = inst_33479);

(statearr_33485_34413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (20))){
var state_33483__$1 = state_33483;
var statearr_33486_34414 = state_33483__$1;
(statearr_33486_34414[(2)] = null);

(statearr_33486_34414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (1))){
var state_33483__$1 = state_33483;
var statearr_33487_34416 = state_33483__$1;
(statearr_33487_34416[(2)] = null);

(statearr_33487_34416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (24))){
var inst_33462 = (state_33483[(7)]);
var inst_33471 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33462);
var state_33483__$1 = state_33483;
var statearr_33488_34420 = state_33483__$1;
(statearr_33488_34420[(2)] = inst_33471);

(statearr_33488_34420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (4))){
var inst_33414 = (state_33483[(8)]);
var inst_33414__$1 = (state_33483[(2)]);
var inst_33415 = (inst_33414__$1 == null);
var state_33483__$1 = (function (){var statearr_33489 = state_33483;
(statearr_33489[(8)] = inst_33414__$1);

return statearr_33489;
})();
if(cljs.core.truth_(inst_33415)){
var statearr_33490_34421 = state_33483__$1;
(statearr_33490_34421[(1)] = (5));

} else {
var statearr_33491_34422 = state_33483__$1;
(statearr_33491_34422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (15))){
var inst_33456 = (state_33483[(2)]);
var state_33483__$1 = state_33483;
var statearr_33492_34427 = state_33483__$1;
(statearr_33492_34427[(2)] = inst_33456);

(statearr_33492_34427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (21))){
var inst_33476 = (state_33483[(2)]);
var state_33483__$1 = (function (){var statearr_33493 = state_33483;
(statearr_33493[(9)] = inst_33476);

return statearr_33493;
})();
var statearr_33494_34428 = state_33483__$1;
(statearr_33494_34428[(2)] = null);

(statearr_33494_34428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (13))){
var inst_33438 = (state_33483[(10)]);
var inst_33440 = cljs.core.chunked_seq_QMARK_(inst_33438);
var state_33483__$1 = state_33483;
if(inst_33440){
var statearr_33495_34429 = state_33483__$1;
(statearr_33495_34429[(1)] = (16));

} else {
var statearr_33496_34430 = state_33483__$1;
(statearr_33496_34430[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (22))){
var inst_33468 = (state_33483[(2)]);
var state_33483__$1 = state_33483;
if(cljs.core.truth_(inst_33468)){
var statearr_33497_34432 = state_33483__$1;
(statearr_33497_34432[(1)] = (23));

} else {
var statearr_33498_34436 = state_33483__$1;
(statearr_33498_34436[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (6))){
var inst_33414 = (state_33483[(8)]);
var inst_33462 = (state_33483[(7)]);
var inst_33464 = (state_33483[(11)]);
var inst_33462__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33414) : topic_fn.call(null,inst_33414));
var inst_33463 = cljs.core.deref(mults);
var inst_33464__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33463,inst_33462__$1);
var state_33483__$1 = (function (){var statearr_33499 = state_33483;
(statearr_33499[(7)] = inst_33462__$1);

(statearr_33499[(11)] = inst_33464__$1);

return statearr_33499;
})();
if(cljs.core.truth_(inst_33464__$1)){
var statearr_33500_34437 = state_33483__$1;
(statearr_33500_34437[(1)] = (19));

} else {
var statearr_33501_34438 = state_33483__$1;
(statearr_33501_34438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (25))){
var inst_33473 = (state_33483[(2)]);
var state_33483__$1 = state_33483;
var statearr_33502_34443 = state_33483__$1;
(statearr_33502_34443[(2)] = inst_33473);

(statearr_33502_34443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (17))){
var inst_33438 = (state_33483[(10)]);
var inst_33447 = cljs.core.first(inst_33438);
var inst_33448 = cljs.core.async.muxch_STAR_(inst_33447);
var inst_33449 = cljs.core.async.close_BANG_(inst_33448);
var inst_33450 = cljs.core.next(inst_33438);
var inst_33424 = inst_33450;
var inst_33425 = null;
var inst_33426 = (0);
var inst_33427 = (0);
var state_33483__$1 = (function (){var statearr_33503 = state_33483;
(statearr_33503[(12)] = inst_33449);

(statearr_33503[(13)] = inst_33424);

(statearr_33503[(14)] = inst_33425);

(statearr_33503[(15)] = inst_33426);

(statearr_33503[(16)] = inst_33427);

return statearr_33503;
})();
var statearr_33504_34446 = state_33483__$1;
(statearr_33504_34446[(2)] = null);

(statearr_33504_34446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (3))){
var inst_33481 = (state_33483[(2)]);
var state_33483__$1 = state_33483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33483__$1,inst_33481);
} else {
if((state_val_33484 === (12))){
var inst_33458 = (state_33483[(2)]);
var state_33483__$1 = state_33483;
var statearr_33505_34451 = state_33483__$1;
(statearr_33505_34451[(2)] = inst_33458);

(statearr_33505_34451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (2))){
var state_33483__$1 = state_33483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33483__$1,(4),ch);
} else {
if((state_val_33484 === (23))){
var state_33483__$1 = state_33483;
var statearr_33506_34452 = state_33483__$1;
(statearr_33506_34452[(2)] = null);

(statearr_33506_34452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (19))){
var inst_33464 = (state_33483[(11)]);
var inst_33414 = (state_33483[(8)]);
var inst_33466 = cljs.core.async.muxch_STAR_(inst_33464);
var state_33483__$1 = state_33483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33483__$1,(22),inst_33466,inst_33414);
} else {
if((state_val_33484 === (11))){
var inst_33424 = (state_33483[(13)]);
var inst_33438 = (state_33483[(10)]);
var inst_33438__$1 = cljs.core.seq(inst_33424);
var state_33483__$1 = (function (){var statearr_33507 = state_33483;
(statearr_33507[(10)] = inst_33438__$1);

return statearr_33507;
})();
if(inst_33438__$1){
var statearr_33508_34457 = state_33483__$1;
(statearr_33508_34457[(1)] = (13));

} else {
var statearr_33509_34458 = state_33483__$1;
(statearr_33509_34458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (9))){
var inst_33460 = (state_33483[(2)]);
var state_33483__$1 = state_33483;
var statearr_33510_34459 = state_33483__$1;
(statearr_33510_34459[(2)] = inst_33460);

(statearr_33510_34459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (5))){
var inst_33421 = cljs.core.deref(mults);
var inst_33422 = cljs.core.vals(inst_33421);
var inst_33423 = cljs.core.seq(inst_33422);
var inst_33424 = inst_33423;
var inst_33425 = null;
var inst_33426 = (0);
var inst_33427 = (0);
var state_33483__$1 = (function (){var statearr_33511 = state_33483;
(statearr_33511[(13)] = inst_33424);

(statearr_33511[(14)] = inst_33425);

(statearr_33511[(15)] = inst_33426);

(statearr_33511[(16)] = inst_33427);

return statearr_33511;
})();
var statearr_33512_34464 = state_33483__$1;
(statearr_33512_34464[(2)] = null);

(statearr_33512_34464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (14))){
var state_33483__$1 = state_33483;
var statearr_33516_34465 = state_33483__$1;
(statearr_33516_34465[(2)] = null);

(statearr_33516_34465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (16))){
var inst_33438 = (state_33483[(10)]);
var inst_33442 = cljs.core.chunk_first(inst_33438);
var inst_33443 = cljs.core.chunk_rest(inst_33438);
var inst_33444 = cljs.core.count(inst_33442);
var inst_33424 = inst_33443;
var inst_33425 = inst_33442;
var inst_33426 = inst_33444;
var inst_33427 = (0);
var state_33483__$1 = (function (){var statearr_33517 = state_33483;
(statearr_33517[(13)] = inst_33424);

(statearr_33517[(14)] = inst_33425);

(statearr_33517[(15)] = inst_33426);

(statearr_33517[(16)] = inst_33427);

return statearr_33517;
})();
var statearr_33518_34470 = state_33483__$1;
(statearr_33518_34470[(2)] = null);

(statearr_33518_34470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (10))){
var inst_33425 = (state_33483[(14)]);
var inst_33427 = (state_33483[(16)]);
var inst_33424 = (state_33483[(13)]);
var inst_33426 = (state_33483[(15)]);
var inst_33432 = cljs.core._nth(inst_33425,inst_33427);
var inst_33433 = cljs.core.async.muxch_STAR_(inst_33432);
var inst_33434 = cljs.core.async.close_BANG_(inst_33433);
var inst_33435 = (inst_33427 + (1));
var tmp33513 = inst_33426;
var tmp33514 = inst_33425;
var tmp33515 = inst_33424;
var inst_33424__$1 = tmp33515;
var inst_33425__$1 = tmp33514;
var inst_33426__$1 = tmp33513;
var inst_33427__$1 = inst_33435;
var state_33483__$1 = (function (){var statearr_33519 = state_33483;
(statearr_33519[(17)] = inst_33434);

(statearr_33519[(13)] = inst_33424__$1);

(statearr_33519[(14)] = inst_33425__$1);

(statearr_33519[(15)] = inst_33426__$1);

(statearr_33519[(16)] = inst_33427__$1);

return statearr_33519;
})();
var statearr_33520_34478 = state_33483__$1;
(statearr_33520_34478[(2)] = null);

(statearr_33520_34478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (18))){
var inst_33453 = (state_33483[(2)]);
var state_33483__$1 = state_33483;
var statearr_33521_34479 = state_33483__$1;
(statearr_33521_34479[(2)] = inst_33453);

(statearr_33521_34479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (8))){
var inst_33427 = (state_33483[(16)]);
var inst_33426 = (state_33483[(15)]);
var inst_33429 = (inst_33427 < inst_33426);
var inst_33430 = inst_33429;
var state_33483__$1 = state_33483;
if(cljs.core.truth_(inst_33430)){
var statearr_33522_34480 = state_33483__$1;
(statearr_33522_34480[(1)] = (10));

} else {
var statearr_33523_34481 = state_33483__$1;
(statearr_33523_34481[(1)] = (11));

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
var cljs$core$async$state_machine__32374__auto__ = null;
var cljs$core$async$state_machine__32374__auto____0 = (function (){
var statearr_33524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33524[(0)] = cljs$core$async$state_machine__32374__auto__);

(statearr_33524[(1)] = (1));

return statearr_33524;
});
var cljs$core$async$state_machine__32374__auto____1 = (function (state_33483){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33483);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33525){var ex__32377__auto__ = e33525;
var statearr_33526_34482 = state_33483;
(statearr_33526_34482[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33483[(4)]))){
var statearr_33527_34483 = state_33483;
(statearr_33527_34483[(1)] = cljs.core.first((state_33483[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34500 = state_33483;
state_33483 = G__34500;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$state_machine__32374__auto__ = function(state_33483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32374__auto____1.call(this,state_33483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32374__auto____0;
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32374__auto____1;
return cljs$core$async$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33528 = f__32463__auto__();
(statearr_33528[(6)] = c__32462__auto___34411);

return statearr_33528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
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
var G__33530 = arguments.length;
switch (G__33530) {
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
var G__33532 = arguments.length;
switch (G__33532) {
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
var G__33534 = arguments.length;
switch (G__33534) {
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
var c__32462__auto___34507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33577){
var state_val_33578 = (state_33577[(1)]);
if((state_val_33578 === (7))){
var state_33577__$1 = state_33577;
var statearr_33579_34508 = state_33577__$1;
(statearr_33579_34508[(2)] = null);

(statearr_33579_34508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (1))){
var state_33577__$1 = state_33577;
var statearr_33580_34509 = state_33577__$1;
(statearr_33580_34509[(2)] = null);

(statearr_33580_34509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (4))){
var inst_33538 = (state_33577[(7)]);
var inst_33537 = (state_33577[(8)]);
var inst_33540 = (inst_33538 < inst_33537);
var state_33577__$1 = state_33577;
if(cljs.core.truth_(inst_33540)){
var statearr_33581_34510 = state_33577__$1;
(statearr_33581_34510[(1)] = (6));

} else {
var statearr_33582_34511 = state_33577__$1;
(statearr_33582_34511[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (15))){
var inst_33563 = (state_33577[(9)]);
var inst_33568 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33563);
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33577__$1,(17),out,inst_33568);
} else {
if((state_val_33578 === (13))){
var inst_33563 = (state_33577[(9)]);
var inst_33563__$1 = (state_33577[(2)]);
var inst_33564 = cljs.core.some(cljs.core.nil_QMARK_,inst_33563__$1);
var state_33577__$1 = (function (){var statearr_33583 = state_33577;
(statearr_33583[(9)] = inst_33563__$1);

return statearr_33583;
})();
if(cljs.core.truth_(inst_33564)){
var statearr_33584_34512 = state_33577__$1;
(statearr_33584_34512[(1)] = (14));

} else {
var statearr_33585_34513 = state_33577__$1;
(statearr_33585_34513[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (6))){
var state_33577__$1 = state_33577;
var statearr_33586_34514 = state_33577__$1;
(statearr_33586_34514[(2)] = null);

(statearr_33586_34514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (17))){
var inst_33570 = (state_33577[(2)]);
var state_33577__$1 = (function (){var statearr_33588 = state_33577;
(statearr_33588[(10)] = inst_33570);

return statearr_33588;
})();
var statearr_33589_34523 = state_33577__$1;
(statearr_33589_34523[(2)] = null);

(statearr_33589_34523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (3))){
var inst_33575 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33577__$1,inst_33575);
} else {
if((state_val_33578 === (12))){
var _ = (function (){var statearr_33590 = state_33577;
(statearr_33590[(4)] = cljs.core.rest((state_33577[(4)])));

return statearr_33590;
})();
var state_33577__$1 = state_33577;
var ex33587 = (state_33577__$1[(2)]);
var statearr_33591_34524 = state_33577__$1;
(statearr_33591_34524[(5)] = ex33587);


if((ex33587 instanceof Object)){
var statearr_33592_34525 = state_33577__$1;
(statearr_33592_34525[(1)] = (11));

(statearr_33592_34525[(5)] = null);

} else {
throw ex33587;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (2))){
var inst_33536 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33537 = cnt;
var inst_33538 = (0);
var state_33577__$1 = (function (){var statearr_33593 = state_33577;
(statearr_33593[(11)] = inst_33536);

(statearr_33593[(8)] = inst_33537);

(statearr_33593[(7)] = inst_33538);

return statearr_33593;
})();
var statearr_33594_34529 = state_33577__$1;
(statearr_33594_34529[(2)] = null);

(statearr_33594_34529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (11))){
var inst_33542 = (state_33577[(2)]);
var inst_33543 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33577__$1 = (function (){var statearr_33595 = state_33577;
(statearr_33595[(12)] = inst_33542);

return statearr_33595;
})();
var statearr_33596_34530 = state_33577__$1;
(statearr_33596_34530[(2)] = inst_33543);

(statearr_33596_34530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (9))){
var inst_33538 = (state_33577[(7)]);
var _ = (function (){var statearr_33597 = state_33577;
(statearr_33597[(4)] = cljs.core.cons((12),(state_33577[(4)])));

return statearr_33597;
})();
var inst_33549 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33538) : chs__$1.call(null,inst_33538));
var inst_33550 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33538) : done.call(null,inst_33538));
var inst_33551 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33549,inst_33550);
var ___$1 = (function (){var statearr_33598 = state_33577;
(statearr_33598[(4)] = cljs.core.rest((state_33577[(4)])));

return statearr_33598;
})();
var state_33577__$1 = state_33577;
var statearr_33599_34531 = state_33577__$1;
(statearr_33599_34531[(2)] = inst_33551);

(statearr_33599_34531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (5))){
var inst_33561 = (state_33577[(2)]);
var state_33577__$1 = (function (){var statearr_33600 = state_33577;
(statearr_33600[(13)] = inst_33561);

return statearr_33600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33577__$1,(13),dchan);
} else {
if((state_val_33578 === (14))){
var inst_33566 = cljs.core.async.close_BANG_(out);
var state_33577__$1 = state_33577;
var statearr_33601_34532 = state_33577__$1;
(statearr_33601_34532[(2)] = inst_33566);

(statearr_33601_34532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (16))){
var inst_33573 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
var statearr_33602_34533 = state_33577__$1;
(statearr_33602_34533[(2)] = inst_33573);

(statearr_33602_34533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (10))){
var inst_33538 = (state_33577[(7)]);
var inst_33554 = (state_33577[(2)]);
var inst_33555 = (inst_33538 + (1));
var inst_33538__$1 = inst_33555;
var state_33577__$1 = (function (){var statearr_33603 = state_33577;
(statearr_33603[(14)] = inst_33554);

(statearr_33603[(7)] = inst_33538__$1);

return statearr_33603;
})();
var statearr_33604_34534 = state_33577__$1;
(statearr_33604_34534[(2)] = null);

(statearr_33604_34534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33578 === (8))){
var inst_33559 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
var statearr_33605_34535 = state_33577__$1;
(statearr_33605_34535[(2)] = inst_33559);

(statearr_33605_34535[(1)] = (5));


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
var cljs$core$async$state_machine__32374__auto__ = null;
var cljs$core$async$state_machine__32374__auto____0 = (function (){
var statearr_33606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33606[(0)] = cljs$core$async$state_machine__32374__auto__);

(statearr_33606[(1)] = (1));

return statearr_33606;
});
var cljs$core$async$state_machine__32374__auto____1 = (function (state_33577){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33577);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33607){var ex__32377__auto__ = e33607;
var statearr_33608_34536 = state_33577;
(statearr_33608_34536[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33577[(4)]))){
var statearr_33609_34537 = state_33577;
(statearr_33609_34537[(1)] = cljs.core.first((state_33577[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34539 = state_33577;
state_33577 = G__34539;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$state_machine__32374__auto__ = function(state_33577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32374__auto____1.call(this,state_33577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32374__auto____0;
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32374__auto____1;
return cljs$core$async$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33610 = f__32463__auto__();
(statearr_33610[(6)] = c__32462__auto___34507);

return statearr_33610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
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
var G__33613 = arguments.length;
switch (G__33613) {
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
var c__32462__auto___34541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33645){
var state_val_33646 = (state_33645[(1)]);
if((state_val_33646 === (7))){
var inst_33624 = (state_33645[(7)]);
var inst_33625 = (state_33645[(8)]);
var inst_33624__$1 = (state_33645[(2)]);
var inst_33625__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33624__$1,(0),null);
var inst_33626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33624__$1,(1),null);
var inst_33627 = (inst_33625__$1 == null);
var state_33645__$1 = (function (){var statearr_33647 = state_33645;
(statearr_33647[(7)] = inst_33624__$1);

(statearr_33647[(8)] = inst_33625__$1);

(statearr_33647[(9)] = inst_33626);

return statearr_33647;
})();
if(cljs.core.truth_(inst_33627)){
var statearr_33648_34542 = state_33645__$1;
(statearr_33648_34542[(1)] = (8));

} else {
var statearr_33649_34543 = state_33645__$1;
(statearr_33649_34543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33646 === (1))){
var inst_33614 = cljs.core.vec(chs);
var inst_33615 = inst_33614;
var state_33645__$1 = (function (){var statearr_33650 = state_33645;
(statearr_33650[(10)] = inst_33615);

return statearr_33650;
})();
var statearr_33651_34544 = state_33645__$1;
(statearr_33651_34544[(2)] = null);

(statearr_33651_34544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33646 === (4))){
var inst_33615 = (state_33645[(10)]);
var state_33645__$1 = state_33645;
return cljs.core.async.ioc_alts_BANG_(state_33645__$1,(7),inst_33615);
} else {
if((state_val_33646 === (6))){
var inst_33641 = (state_33645[(2)]);
var state_33645__$1 = state_33645;
var statearr_33652_34545 = state_33645__$1;
(statearr_33652_34545[(2)] = inst_33641);

(statearr_33652_34545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33646 === (3))){
var inst_33643 = (state_33645[(2)]);
var state_33645__$1 = state_33645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33645__$1,inst_33643);
} else {
if((state_val_33646 === (2))){
var inst_33615 = (state_33645[(10)]);
var inst_33617 = cljs.core.count(inst_33615);
var inst_33618 = (inst_33617 > (0));
var state_33645__$1 = state_33645;
if(cljs.core.truth_(inst_33618)){
var statearr_33654_34546 = state_33645__$1;
(statearr_33654_34546[(1)] = (4));

} else {
var statearr_33655_34547 = state_33645__$1;
(statearr_33655_34547[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33646 === (11))){
var inst_33615 = (state_33645[(10)]);
var inst_33634 = (state_33645[(2)]);
var tmp33653 = inst_33615;
var inst_33615__$1 = tmp33653;
var state_33645__$1 = (function (){var statearr_33656 = state_33645;
(statearr_33656[(11)] = inst_33634);

(statearr_33656[(10)] = inst_33615__$1);

return statearr_33656;
})();
var statearr_33657_34549 = state_33645__$1;
(statearr_33657_34549[(2)] = null);

(statearr_33657_34549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33646 === (9))){
var inst_33625 = (state_33645[(8)]);
var state_33645__$1 = state_33645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33645__$1,(11),out,inst_33625);
} else {
if((state_val_33646 === (5))){
var inst_33639 = cljs.core.async.close_BANG_(out);
var state_33645__$1 = state_33645;
var statearr_33658_34550 = state_33645__$1;
(statearr_33658_34550[(2)] = inst_33639);

(statearr_33658_34550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33646 === (10))){
var inst_33637 = (state_33645[(2)]);
var state_33645__$1 = state_33645;
var statearr_33659_34551 = state_33645__$1;
(statearr_33659_34551[(2)] = inst_33637);

(statearr_33659_34551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33646 === (8))){
var inst_33615 = (state_33645[(10)]);
var inst_33624 = (state_33645[(7)]);
var inst_33625 = (state_33645[(8)]);
var inst_33626 = (state_33645[(9)]);
var inst_33629 = (function (){var cs = inst_33615;
var vec__33620 = inst_33624;
var v = inst_33625;
var c = inst_33626;
return (function (p1__33611_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33611_SHARP_);
});
})();
var inst_33630 = cljs.core.filterv(inst_33629,inst_33615);
var inst_33615__$1 = inst_33630;
var state_33645__$1 = (function (){var statearr_33660 = state_33645;
(statearr_33660[(10)] = inst_33615__$1);

return statearr_33660;
})();
var statearr_33661_34552 = state_33645__$1;
(statearr_33661_34552[(2)] = null);

(statearr_33661_34552[(1)] = (2));


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
var cljs$core$async$state_machine__32374__auto__ = null;
var cljs$core$async$state_machine__32374__auto____0 = (function (){
var statearr_33662 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33662[(0)] = cljs$core$async$state_machine__32374__auto__);

(statearr_33662[(1)] = (1));

return statearr_33662;
});
var cljs$core$async$state_machine__32374__auto____1 = (function (state_33645){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33645);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33663){var ex__32377__auto__ = e33663;
var statearr_33664_34553 = state_33645;
(statearr_33664_34553[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33645[(4)]))){
var statearr_33665_34554 = state_33645;
(statearr_33665_34554[(1)] = cljs.core.first((state_33645[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34555 = state_33645;
state_33645 = G__34555;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$state_machine__32374__auto__ = function(state_33645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32374__auto____1.call(this,state_33645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32374__auto____0;
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32374__auto____1;
return cljs$core$async$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33666 = f__32463__auto__();
(statearr_33666[(6)] = c__32462__auto___34541);

return statearr_33666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
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
var G__33668 = arguments.length;
switch (G__33668) {
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
var c__32462__auto___34557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33692){
var state_val_33693 = (state_33692[(1)]);
if((state_val_33693 === (7))){
var inst_33674 = (state_33692[(7)]);
var inst_33674__$1 = (state_33692[(2)]);
var inst_33675 = (inst_33674__$1 == null);
var inst_33676 = cljs.core.not(inst_33675);
var state_33692__$1 = (function (){var statearr_33694 = state_33692;
(statearr_33694[(7)] = inst_33674__$1);

return statearr_33694;
})();
if(inst_33676){
var statearr_33695_34558 = state_33692__$1;
(statearr_33695_34558[(1)] = (8));

} else {
var statearr_33696_34560 = state_33692__$1;
(statearr_33696_34560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (1))){
var inst_33669 = (0);
var state_33692__$1 = (function (){var statearr_33697 = state_33692;
(statearr_33697[(8)] = inst_33669);

return statearr_33697;
})();
var statearr_33698_34563 = state_33692__$1;
(statearr_33698_34563[(2)] = null);

(statearr_33698_34563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (4))){
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33692__$1,(7),ch);
} else {
if((state_val_33693 === (6))){
var inst_33687 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33699_34564 = state_33692__$1;
(statearr_33699_34564[(2)] = inst_33687);

(statearr_33699_34564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (3))){
var inst_33689 = (state_33692[(2)]);
var inst_33690 = cljs.core.async.close_BANG_(out);
var state_33692__$1 = (function (){var statearr_33700 = state_33692;
(statearr_33700[(9)] = inst_33689);

return statearr_33700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33692__$1,inst_33690);
} else {
if((state_val_33693 === (2))){
var inst_33669 = (state_33692[(8)]);
var inst_33671 = (inst_33669 < n);
var state_33692__$1 = state_33692;
if(cljs.core.truth_(inst_33671)){
var statearr_33701_34566 = state_33692__$1;
(statearr_33701_34566[(1)] = (4));

} else {
var statearr_33702_34568 = state_33692__$1;
(statearr_33702_34568[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (11))){
var inst_33669 = (state_33692[(8)]);
var inst_33679 = (state_33692[(2)]);
var inst_33680 = (inst_33669 + (1));
var inst_33669__$1 = inst_33680;
var state_33692__$1 = (function (){var statearr_33703 = state_33692;
(statearr_33703[(10)] = inst_33679);

(statearr_33703[(8)] = inst_33669__$1);

return statearr_33703;
})();
var statearr_33704_34569 = state_33692__$1;
(statearr_33704_34569[(2)] = null);

(statearr_33704_34569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (9))){
var state_33692__$1 = state_33692;
var statearr_33705_34571 = state_33692__$1;
(statearr_33705_34571[(2)] = null);

(statearr_33705_34571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (5))){
var state_33692__$1 = state_33692;
var statearr_33706_34573 = state_33692__$1;
(statearr_33706_34573[(2)] = null);

(statearr_33706_34573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (10))){
var inst_33684 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33707_34574 = state_33692__$1;
(statearr_33707_34574[(2)] = inst_33684);

(statearr_33707_34574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (8))){
var inst_33674 = (state_33692[(7)]);
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33692__$1,(11),out,inst_33674);
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
var cljs$core$async$state_machine__32374__auto__ = null;
var cljs$core$async$state_machine__32374__auto____0 = (function (){
var statearr_33708 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33708[(0)] = cljs$core$async$state_machine__32374__auto__);

(statearr_33708[(1)] = (1));

return statearr_33708;
});
var cljs$core$async$state_machine__32374__auto____1 = (function (state_33692){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33692);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33709){var ex__32377__auto__ = e33709;
var statearr_33710_34577 = state_33692;
(statearr_33710_34577[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33692[(4)]))){
var statearr_33711_34578 = state_33692;
(statearr_33711_34578[(1)] = cljs.core.first((state_33692[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34579 = state_33692;
state_33692 = G__34579;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$state_machine__32374__auto__ = function(state_33692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32374__auto____1.call(this,state_33692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32374__auto____0;
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32374__auto____1;
return cljs$core$async$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33712 = f__32463__auto__();
(statearr_33712[(6)] = c__32462__auto___34557);

return statearr_33712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
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
cljs.core.async.t_cljs$core$async33717 = (function (f,ch,meta33715,_,fn1,meta33718){
this.f = f;
this.ch = ch;
this.meta33715 = meta33715;
this._ = _;
this.fn1 = fn1;
this.meta33718 = meta33718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33719,meta33718__$1){
var self__ = this;
var _33719__$1 = this;
return (new cljs.core.async.t_cljs$core$async33717(self__.f,self__.ch,self__.meta33715,self__._,self__.fn1,meta33718__$1));
}));

(cljs.core.async.t_cljs$core$async33717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33719){
var self__ = this;
var _33719__$1 = this;
return self__.meta33718;
}));

(cljs.core.async.t_cljs$core$async33717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33713_SHARP_){
var G__33720 = (((p1__33713_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33713_SHARP_) : self__.f.call(null,p1__33713_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33720) : f1.call(null,G__33720));
});
}));

(cljs.core.async.t_cljs$core$async33717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33715","meta33715",-173090567,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33714","cljs.core.async/t_cljs$core$async33714",-723683305,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33718","meta33718",1460464167,null)], null);
}));

(cljs.core.async.t_cljs$core$async33717.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33717");

(cljs.core.async.t_cljs$core$async33717.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33717");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33717.
 */
cljs.core.async.__GT_t_cljs$core$async33717 = (function cljs$core$async$__GT_t_cljs$core$async33717(f,ch,meta33715,_,fn1,meta33718){
return (new cljs.core.async.t_cljs$core$async33717(f,ch,meta33715,_,fn1,meta33718));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33714 = (function (f,ch,meta33715){
this.f = f;
this.ch = ch;
this.meta33715 = meta33715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33716,meta33715__$1){
var self__ = this;
var _33716__$1 = this;
return (new cljs.core.async.t_cljs$core$async33714(self__.f,self__.ch,meta33715__$1));
}));

(cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33716){
var self__ = this;
var _33716__$1 = this;
return self__.meta33715;
}));

(cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33717(self__.f,self__.ch,self__.meta33715,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33721 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33721) : self__.f.call(null,G__33721));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33714.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33715","meta33715",-173090567,null)], null);
}));

(cljs.core.async.t_cljs$core$async33714.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33714");

(cljs.core.async.t_cljs$core$async33714.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33714");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33714.
 */
cljs.core.async.__GT_t_cljs$core$async33714 = (function cljs$core$async$__GT_t_cljs$core$async33714(f,ch,meta33715){
return (new cljs.core.async.t_cljs$core$async33714(f,ch,meta33715));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33714(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33722 = (function (f,ch,meta33723){
this.f = f;
this.ch = ch;
this.meta33723 = meta33723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33724,meta33723__$1){
var self__ = this;
var _33724__$1 = this;
return (new cljs.core.async.t_cljs$core$async33722(self__.f,self__.ch,meta33723__$1));
}));

(cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33724){
var self__ = this;
var _33724__$1 = this;
return self__.meta33723;
}));

(cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33723","meta33723",1643320982,null)], null);
}));

(cljs.core.async.t_cljs$core$async33722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33722");

(cljs.core.async.t_cljs$core$async33722.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33722.
 */
cljs.core.async.__GT_t_cljs$core$async33722 = (function cljs$core$async$__GT_t_cljs$core$async33722(f,ch,meta33723){
return (new cljs.core.async.t_cljs$core$async33722(f,ch,meta33723));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33722(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33725 = (function (p,ch,meta33726){
this.p = p;
this.ch = ch;
this.meta33726 = meta33726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33727,meta33726__$1){
var self__ = this;
var _33727__$1 = this;
return (new cljs.core.async.t_cljs$core$async33725(self__.p,self__.ch,meta33726__$1));
}));

(cljs.core.async.t_cljs$core$async33725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33727){
var self__ = this;
var _33727__$1 = this;
return self__.meta33726;
}));

(cljs.core.async.t_cljs$core$async33725.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33725.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33725.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33725.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33725.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33725.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33725.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33726","meta33726",602824025,null)], null);
}));

(cljs.core.async.t_cljs$core$async33725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33725");

(cljs.core.async.t_cljs$core$async33725.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33725.
 */
cljs.core.async.__GT_t_cljs$core$async33725 = (function cljs$core$async$__GT_t_cljs$core$async33725(p,ch,meta33726){
return (new cljs.core.async.t_cljs$core$async33725(p,ch,meta33726));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33725(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33729 = arguments.length;
switch (G__33729) {
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
var c__32462__auto___34606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33750){
var state_val_33751 = (state_33750[(1)]);
if((state_val_33751 === (7))){
var inst_33746 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33752_34608 = state_33750__$1;
(statearr_33752_34608[(2)] = inst_33746);

(statearr_33752_34608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (1))){
var state_33750__$1 = state_33750;
var statearr_33753_34609 = state_33750__$1;
(statearr_33753_34609[(2)] = null);

(statearr_33753_34609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (4))){
var inst_33732 = (state_33750[(7)]);
var inst_33732__$1 = (state_33750[(2)]);
var inst_33733 = (inst_33732__$1 == null);
var state_33750__$1 = (function (){var statearr_33754 = state_33750;
(statearr_33754[(7)] = inst_33732__$1);

return statearr_33754;
})();
if(cljs.core.truth_(inst_33733)){
var statearr_33755_34613 = state_33750__$1;
(statearr_33755_34613[(1)] = (5));

} else {
var statearr_33756_34615 = state_33750__$1;
(statearr_33756_34615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (6))){
var inst_33732 = (state_33750[(7)]);
var inst_33737 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33732) : p.call(null,inst_33732));
var state_33750__$1 = state_33750;
if(cljs.core.truth_(inst_33737)){
var statearr_33757_34616 = state_33750__$1;
(statearr_33757_34616[(1)] = (8));

} else {
var statearr_33758_34618 = state_33750__$1;
(statearr_33758_34618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (3))){
var inst_33748 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33750__$1,inst_33748);
} else {
if((state_val_33751 === (2))){
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33750__$1,(4),ch);
} else {
if((state_val_33751 === (11))){
var inst_33740 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33759_34621 = state_33750__$1;
(statearr_33759_34621[(2)] = inst_33740);

(statearr_33759_34621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (9))){
var state_33750__$1 = state_33750;
var statearr_33760_34623 = state_33750__$1;
(statearr_33760_34623[(2)] = null);

(statearr_33760_34623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (5))){
var inst_33735 = cljs.core.async.close_BANG_(out);
var state_33750__$1 = state_33750;
var statearr_33761_34625 = state_33750__$1;
(statearr_33761_34625[(2)] = inst_33735);

(statearr_33761_34625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (10))){
var inst_33743 = (state_33750[(2)]);
var state_33750__$1 = (function (){var statearr_33762 = state_33750;
(statearr_33762[(8)] = inst_33743);

return statearr_33762;
})();
var statearr_33763_34627 = state_33750__$1;
(statearr_33763_34627[(2)] = null);

(statearr_33763_34627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (8))){
var inst_33732 = (state_33750[(7)]);
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33750__$1,(11),out,inst_33732);
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
var cljs$core$async$state_machine__32374__auto__ = null;
var cljs$core$async$state_machine__32374__auto____0 = (function (){
var statearr_33764 = [null,null,null,null,null,null,null,null,null];
(statearr_33764[(0)] = cljs$core$async$state_machine__32374__auto__);

(statearr_33764[(1)] = (1));

return statearr_33764;
});
var cljs$core$async$state_machine__32374__auto____1 = (function (state_33750){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33750);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33765){var ex__32377__auto__ = e33765;
var statearr_33766_34633 = state_33750;
(statearr_33766_34633[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33750[(4)]))){
var statearr_33767_34634 = state_33750;
(statearr_33767_34634[(1)] = cljs.core.first((state_33750[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34635 = state_33750;
state_33750 = G__34635;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$state_machine__32374__auto__ = function(state_33750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32374__auto____1.call(this,state_33750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32374__auto____0;
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32374__auto____1;
return cljs$core$async$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33768 = f__32463__auto__();
(statearr_33768[(6)] = c__32462__auto___34606);

return statearr_33768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33770 = arguments.length;
switch (G__33770) {
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
var c__32462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33832){
var state_val_33833 = (state_33832[(1)]);
if((state_val_33833 === (7))){
var inst_33828 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
var statearr_33834_34648 = state_33832__$1;
(statearr_33834_34648[(2)] = inst_33828);

(statearr_33834_34648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (20))){
var inst_33798 = (state_33832[(7)]);
var inst_33809 = (state_33832[(2)]);
var inst_33810 = cljs.core.next(inst_33798);
var inst_33784 = inst_33810;
var inst_33785 = null;
var inst_33786 = (0);
var inst_33787 = (0);
var state_33832__$1 = (function (){var statearr_33835 = state_33832;
(statearr_33835[(8)] = inst_33809);

(statearr_33835[(9)] = inst_33784);

(statearr_33835[(10)] = inst_33785);

(statearr_33835[(11)] = inst_33786);

(statearr_33835[(12)] = inst_33787);

return statearr_33835;
})();
var statearr_33836_34649 = state_33832__$1;
(statearr_33836_34649[(2)] = null);

(statearr_33836_34649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (1))){
var state_33832__$1 = state_33832;
var statearr_33837_34652 = state_33832__$1;
(statearr_33837_34652[(2)] = null);

(statearr_33837_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (4))){
var inst_33773 = (state_33832[(13)]);
var inst_33773__$1 = (state_33832[(2)]);
var inst_33774 = (inst_33773__$1 == null);
var state_33832__$1 = (function (){var statearr_33838 = state_33832;
(statearr_33838[(13)] = inst_33773__$1);

return statearr_33838;
})();
if(cljs.core.truth_(inst_33774)){
var statearr_33839_34653 = state_33832__$1;
(statearr_33839_34653[(1)] = (5));

} else {
var statearr_33840_34655 = state_33832__$1;
(statearr_33840_34655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (15))){
var state_33832__$1 = state_33832;
var statearr_33844_34656 = state_33832__$1;
(statearr_33844_34656[(2)] = null);

(statearr_33844_34656[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (21))){
var state_33832__$1 = state_33832;
var statearr_33845_34658 = state_33832__$1;
(statearr_33845_34658[(2)] = null);

(statearr_33845_34658[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (13))){
var inst_33787 = (state_33832[(12)]);
var inst_33784 = (state_33832[(9)]);
var inst_33785 = (state_33832[(10)]);
var inst_33786 = (state_33832[(11)]);
var inst_33794 = (state_33832[(2)]);
var inst_33795 = (inst_33787 + (1));
var tmp33841 = inst_33784;
var tmp33842 = inst_33786;
var tmp33843 = inst_33785;
var inst_33784__$1 = tmp33841;
var inst_33785__$1 = tmp33843;
var inst_33786__$1 = tmp33842;
var inst_33787__$1 = inst_33795;
var state_33832__$1 = (function (){var statearr_33846 = state_33832;
(statearr_33846[(14)] = inst_33794);

(statearr_33846[(9)] = inst_33784__$1);

(statearr_33846[(10)] = inst_33785__$1);

(statearr_33846[(11)] = inst_33786__$1);

(statearr_33846[(12)] = inst_33787__$1);

return statearr_33846;
})();
var statearr_33847_34663 = state_33832__$1;
(statearr_33847_34663[(2)] = null);

(statearr_33847_34663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (22))){
var state_33832__$1 = state_33832;
var statearr_33848_34665 = state_33832__$1;
(statearr_33848_34665[(2)] = null);

(statearr_33848_34665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (6))){
var inst_33773 = (state_33832[(13)]);
var inst_33782 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33773) : f.call(null,inst_33773));
var inst_33783 = cljs.core.seq(inst_33782);
var inst_33784 = inst_33783;
var inst_33785 = null;
var inst_33786 = (0);
var inst_33787 = (0);
var state_33832__$1 = (function (){var statearr_33849 = state_33832;
(statearr_33849[(9)] = inst_33784);

(statearr_33849[(10)] = inst_33785);

(statearr_33849[(11)] = inst_33786);

(statearr_33849[(12)] = inst_33787);

return statearr_33849;
})();
var statearr_33850_34669 = state_33832__$1;
(statearr_33850_34669[(2)] = null);

(statearr_33850_34669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (17))){
var inst_33798 = (state_33832[(7)]);
var inst_33802 = cljs.core.chunk_first(inst_33798);
var inst_33803 = cljs.core.chunk_rest(inst_33798);
var inst_33804 = cljs.core.count(inst_33802);
var inst_33784 = inst_33803;
var inst_33785 = inst_33802;
var inst_33786 = inst_33804;
var inst_33787 = (0);
var state_33832__$1 = (function (){var statearr_33851 = state_33832;
(statearr_33851[(9)] = inst_33784);

(statearr_33851[(10)] = inst_33785);

(statearr_33851[(11)] = inst_33786);

(statearr_33851[(12)] = inst_33787);

return statearr_33851;
})();
var statearr_33852_34673 = state_33832__$1;
(statearr_33852_34673[(2)] = null);

(statearr_33852_34673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (3))){
var inst_33830 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33832__$1,inst_33830);
} else {
if((state_val_33833 === (12))){
var inst_33818 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
var statearr_33853_34676 = state_33832__$1;
(statearr_33853_34676[(2)] = inst_33818);

(statearr_33853_34676[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (2))){
var state_33832__$1 = state_33832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33832__$1,(4),in$);
} else {
if((state_val_33833 === (23))){
var inst_33826 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
var statearr_33854_34677 = state_33832__$1;
(statearr_33854_34677[(2)] = inst_33826);

(statearr_33854_34677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (19))){
var inst_33813 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
var statearr_33855_34680 = state_33832__$1;
(statearr_33855_34680[(2)] = inst_33813);

(statearr_33855_34680[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (11))){
var inst_33784 = (state_33832[(9)]);
var inst_33798 = (state_33832[(7)]);
var inst_33798__$1 = cljs.core.seq(inst_33784);
var state_33832__$1 = (function (){var statearr_33856 = state_33832;
(statearr_33856[(7)] = inst_33798__$1);

return statearr_33856;
})();
if(inst_33798__$1){
var statearr_33857_34681 = state_33832__$1;
(statearr_33857_34681[(1)] = (14));

} else {
var statearr_33858_34682 = state_33832__$1;
(statearr_33858_34682[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (9))){
var inst_33820 = (state_33832[(2)]);
var inst_33821 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33832__$1 = (function (){var statearr_33859 = state_33832;
(statearr_33859[(15)] = inst_33820);

return statearr_33859;
})();
if(cljs.core.truth_(inst_33821)){
var statearr_33860_34683 = state_33832__$1;
(statearr_33860_34683[(1)] = (21));

} else {
var statearr_33861_34684 = state_33832__$1;
(statearr_33861_34684[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (5))){
var inst_33776 = cljs.core.async.close_BANG_(out);
var state_33832__$1 = state_33832;
var statearr_33862_34685 = state_33832__$1;
(statearr_33862_34685[(2)] = inst_33776);

(statearr_33862_34685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (14))){
var inst_33798 = (state_33832[(7)]);
var inst_33800 = cljs.core.chunked_seq_QMARK_(inst_33798);
var state_33832__$1 = state_33832;
if(inst_33800){
var statearr_33863_34686 = state_33832__$1;
(statearr_33863_34686[(1)] = (17));

} else {
var statearr_33864_34687 = state_33832__$1;
(statearr_33864_34687[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (16))){
var inst_33816 = (state_33832[(2)]);
var state_33832__$1 = state_33832;
var statearr_33865_34688 = state_33832__$1;
(statearr_33865_34688[(2)] = inst_33816);

(statearr_33865_34688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33833 === (10))){
var inst_33785 = (state_33832[(10)]);
var inst_33787 = (state_33832[(12)]);
var inst_33792 = cljs.core._nth(inst_33785,inst_33787);
var state_33832__$1 = state_33832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33832__$1,(13),out,inst_33792);
} else {
if((state_val_33833 === (18))){
var inst_33798 = (state_33832[(7)]);
var inst_33807 = cljs.core.first(inst_33798);
var state_33832__$1 = state_33832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33832__$1,(20),out,inst_33807);
} else {
if((state_val_33833 === (8))){
var inst_33787 = (state_33832[(12)]);
var inst_33786 = (state_33832[(11)]);
var inst_33789 = (inst_33787 < inst_33786);
var inst_33790 = inst_33789;
var state_33832__$1 = state_33832;
if(cljs.core.truth_(inst_33790)){
var statearr_33866_34691 = state_33832__$1;
(statearr_33866_34691[(1)] = (10));

} else {
var statearr_33867_34692 = state_33832__$1;
(statearr_33867_34692[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32374__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32374__auto____0 = (function (){
var statearr_33868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33868[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32374__auto__);

(statearr_33868[(1)] = (1));

return statearr_33868;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32374__auto____1 = (function (state_33832){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33832);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33869){var ex__32377__auto__ = e33869;
var statearr_33870_34694 = state_33832;
(statearr_33870_34694[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33832[(4)]))){
var statearr_33871_34695 = state_33832;
(statearr_33871_34695[(1)] = cljs.core.first((state_33832[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34696 = state_33832;
state_33832 = G__34696;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32374__auto__ = function(state_33832){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32374__auto____1.call(this,state_33832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32374__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32374__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33872 = f__32463__auto__();
(statearr_33872[(6)] = c__32462__auto__);

return statearr_33872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));

return c__32462__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33874 = arguments.length;
switch (G__33874) {
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
var G__33876 = arguments.length;
switch (G__33876) {
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
var G__33878 = arguments.length;
switch (G__33878) {
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
var c__32462__auto___34706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33902){
var state_val_33903 = (state_33902[(1)]);
if((state_val_33903 === (7))){
var inst_33897 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33904_34708 = state_33902__$1;
(statearr_33904_34708[(2)] = inst_33897);

(statearr_33904_34708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (1))){
var inst_33879 = null;
var state_33902__$1 = (function (){var statearr_33905 = state_33902;
(statearr_33905[(7)] = inst_33879);

return statearr_33905;
})();
var statearr_33906_34709 = state_33902__$1;
(statearr_33906_34709[(2)] = null);

(statearr_33906_34709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (4))){
var inst_33882 = (state_33902[(8)]);
var inst_33882__$1 = (state_33902[(2)]);
var inst_33883 = (inst_33882__$1 == null);
var inst_33884 = cljs.core.not(inst_33883);
var state_33902__$1 = (function (){var statearr_33907 = state_33902;
(statearr_33907[(8)] = inst_33882__$1);

return statearr_33907;
})();
if(inst_33884){
var statearr_33908_34710 = state_33902__$1;
(statearr_33908_34710[(1)] = (5));

} else {
var statearr_33909_34711 = state_33902__$1;
(statearr_33909_34711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (6))){
var state_33902__$1 = state_33902;
var statearr_33910_34712 = state_33902__$1;
(statearr_33910_34712[(2)] = null);

(statearr_33910_34712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (3))){
var inst_33899 = (state_33902[(2)]);
var inst_33900 = cljs.core.async.close_BANG_(out);
var state_33902__$1 = (function (){var statearr_33911 = state_33902;
(statearr_33911[(9)] = inst_33899);

return statearr_33911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33902__$1,inst_33900);
} else {
if((state_val_33903 === (2))){
var state_33902__$1 = state_33902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33902__$1,(4),ch);
} else {
if((state_val_33903 === (11))){
var inst_33882 = (state_33902[(8)]);
var inst_33891 = (state_33902[(2)]);
var inst_33879 = inst_33882;
var state_33902__$1 = (function (){var statearr_33912 = state_33902;
(statearr_33912[(10)] = inst_33891);

(statearr_33912[(7)] = inst_33879);

return statearr_33912;
})();
var statearr_33913_34713 = state_33902__$1;
(statearr_33913_34713[(2)] = null);

(statearr_33913_34713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (9))){
var inst_33882 = (state_33902[(8)]);
var state_33902__$1 = state_33902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33902__$1,(11),out,inst_33882);
} else {
if((state_val_33903 === (5))){
var inst_33882 = (state_33902[(8)]);
var inst_33879 = (state_33902[(7)]);
var inst_33886 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33882,inst_33879);
var state_33902__$1 = state_33902;
if(inst_33886){
var statearr_33915_34715 = state_33902__$1;
(statearr_33915_34715[(1)] = (8));

} else {
var statearr_33916_34716 = state_33902__$1;
(statearr_33916_34716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (10))){
var inst_33894 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33917_34717 = state_33902__$1;
(statearr_33917_34717[(2)] = inst_33894);

(statearr_33917_34717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (8))){
var inst_33879 = (state_33902[(7)]);
var tmp33914 = inst_33879;
var inst_33879__$1 = tmp33914;
var state_33902__$1 = (function (){var statearr_33918 = state_33902;
(statearr_33918[(7)] = inst_33879__$1);

return statearr_33918;
})();
var statearr_33919_34718 = state_33902__$1;
(statearr_33919_34718[(2)] = null);

(statearr_33919_34718[(1)] = (2));


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
var cljs$core$async$state_machine__32374__auto__ = null;
var cljs$core$async$state_machine__32374__auto____0 = (function (){
var statearr_33920 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33920[(0)] = cljs$core$async$state_machine__32374__auto__);

(statearr_33920[(1)] = (1));

return statearr_33920;
});
var cljs$core$async$state_machine__32374__auto____1 = (function (state_33902){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33902);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33921){var ex__32377__auto__ = e33921;
var statearr_33922_34719 = state_33902;
(statearr_33922_34719[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33902[(4)]))){
var statearr_33923_34720 = state_33902;
(statearr_33923_34720[(1)] = cljs.core.first((state_33902[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34722 = state_33902;
state_33902 = G__34722;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$state_machine__32374__auto__ = function(state_33902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32374__auto____1.call(this,state_33902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32374__auto____0;
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32374__auto____1;
return cljs$core$async$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33924 = f__32463__auto__();
(statearr_33924[(6)] = c__32462__auto___34706);

return statearr_33924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33926 = arguments.length;
switch (G__33926) {
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
var c__32462__auto___34727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_33964){
var state_val_33965 = (state_33964[(1)]);
if((state_val_33965 === (7))){
var inst_33960 = (state_33964[(2)]);
var state_33964__$1 = state_33964;
var statearr_33966_34728 = state_33964__$1;
(statearr_33966_34728[(2)] = inst_33960);

(statearr_33966_34728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (1))){
var inst_33927 = (new Array(n));
var inst_33928 = inst_33927;
var inst_33929 = (0);
var state_33964__$1 = (function (){var statearr_33967 = state_33964;
(statearr_33967[(7)] = inst_33928);

(statearr_33967[(8)] = inst_33929);

return statearr_33967;
})();
var statearr_33968_34729 = state_33964__$1;
(statearr_33968_34729[(2)] = null);

(statearr_33968_34729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (4))){
var inst_33932 = (state_33964[(9)]);
var inst_33932__$1 = (state_33964[(2)]);
var inst_33933 = (inst_33932__$1 == null);
var inst_33934 = cljs.core.not(inst_33933);
var state_33964__$1 = (function (){var statearr_33969 = state_33964;
(statearr_33969[(9)] = inst_33932__$1);

return statearr_33969;
})();
if(inst_33934){
var statearr_33970_34731 = state_33964__$1;
(statearr_33970_34731[(1)] = (5));

} else {
var statearr_33971_34732 = state_33964__$1;
(statearr_33971_34732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (15))){
var inst_33954 = (state_33964[(2)]);
var state_33964__$1 = state_33964;
var statearr_33972_34733 = state_33964__$1;
(statearr_33972_34733[(2)] = inst_33954);

(statearr_33972_34733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (13))){
var state_33964__$1 = state_33964;
var statearr_33973_34734 = state_33964__$1;
(statearr_33973_34734[(2)] = null);

(statearr_33973_34734[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (6))){
var inst_33929 = (state_33964[(8)]);
var inst_33950 = (inst_33929 > (0));
var state_33964__$1 = state_33964;
if(cljs.core.truth_(inst_33950)){
var statearr_33974_34735 = state_33964__$1;
(statearr_33974_34735[(1)] = (12));

} else {
var statearr_33975_34736 = state_33964__$1;
(statearr_33975_34736[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (3))){
var inst_33962 = (state_33964[(2)]);
var state_33964__$1 = state_33964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33964__$1,inst_33962);
} else {
if((state_val_33965 === (12))){
var inst_33928 = (state_33964[(7)]);
var inst_33952 = cljs.core.vec(inst_33928);
var state_33964__$1 = state_33964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33964__$1,(15),out,inst_33952);
} else {
if((state_val_33965 === (2))){
var state_33964__$1 = state_33964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33964__$1,(4),ch);
} else {
if((state_val_33965 === (11))){
var inst_33944 = (state_33964[(2)]);
var inst_33945 = (new Array(n));
var inst_33928 = inst_33945;
var inst_33929 = (0);
var state_33964__$1 = (function (){var statearr_33976 = state_33964;
(statearr_33976[(10)] = inst_33944);

(statearr_33976[(7)] = inst_33928);

(statearr_33976[(8)] = inst_33929);

return statearr_33976;
})();
var statearr_33977_34737 = state_33964__$1;
(statearr_33977_34737[(2)] = null);

(statearr_33977_34737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (9))){
var inst_33928 = (state_33964[(7)]);
var inst_33942 = cljs.core.vec(inst_33928);
var state_33964__$1 = state_33964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33964__$1,(11),out,inst_33942);
} else {
if((state_val_33965 === (5))){
var inst_33928 = (state_33964[(7)]);
var inst_33929 = (state_33964[(8)]);
var inst_33932 = (state_33964[(9)]);
var inst_33937 = (state_33964[(11)]);
var inst_33936 = (inst_33928[inst_33929] = inst_33932);
var inst_33937__$1 = (inst_33929 + (1));
var inst_33938 = (inst_33937__$1 < n);
var state_33964__$1 = (function (){var statearr_33978 = state_33964;
(statearr_33978[(12)] = inst_33936);

(statearr_33978[(11)] = inst_33937__$1);

return statearr_33978;
})();
if(cljs.core.truth_(inst_33938)){
var statearr_33979_34739 = state_33964__$1;
(statearr_33979_34739[(1)] = (8));

} else {
var statearr_33980_34740 = state_33964__$1;
(statearr_33980_34740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (14))){
var inst_33957 = (state_33964[(2)]);
var inst_33958 = cljs.core.async.close_BANG_(out);
var state_33964__$1 = (function (){var statearr_33982 = state_33964;
(statearr_33982[(13)] = inst_33957);

return statearr_33982;
})();
var statearr_33983_34741 = state_33964__$1;
(statearr_33983_34741[(2)] = inst_33958);

(statearr_33983_34741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (10))){
var inst_33948 = (state_33964[(2)]);
var state_33964__$1 = state_33964;
var statearr_33984_34742 = state_33964__$1;
(statearr_33984_34742[(2)] = inst_33948);

(statearr_33984_34742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (8))){
var inst_33928 = (state_33964[(7)]);
var inst_33937 = (state_33964[(11)]);
var tmp33981 = inst_33928;
var inst_33928__$1 = tmp33981;
var inst_33929 = inst_33937;
var state_33964__$1 = (function (){var statearr_33985 = state_33964;
(statearr_33985[(7)] = inst_33928__$1);

(statearr_33985[(8)] = inst_33929);

return statearr_33985;
})();
var statearr_33986_34743 = state_33964__$1;
(statearr_33986_34743[(2)] = null);

(statearr_33986_34743[(1)] = (2));


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
var cljs$core$async$state_machine__32374__auto__ = null;
var cljs$core$async$state_machine__32374__auto____0 = (function (){
var statearr_33987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33987[(0)] = cljs$core$async$state_machine__32374__auto__);

(statearr_33987[(1)] = (1));

return statearr_33987;
});
var cljs$core$async$state_machine__32374__auto____1 = (function (state_33964){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_33964);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e33988){var ex__32377__auto__ = e33988;
var statearr_33989_34746 = state_33964;
(statearr_33989_34746[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_33964[(4)]))){
var statearr_33990_34747 = state_33964;
(statearr_33990_34747[(1)] = cljs.core.first((state_33964[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34749 = state_33964;
state_33964 = G__34749;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$state_machine__32374__auto__ = function(state_33964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32374__auto____1.call(this,state_33964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32374__auto____0;
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32374__auto____1;
return cljs$core$async$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_33991 = f__32463__auto__();
(statearr_33991[(6)] = c__32462__auto___34727);

return statearr_33991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33993 = arguments.length;
switch (G__33993) {
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
var c__32462__auto___34754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32463__auto__ = (function (){var switch__32373__auto__ = (function (state_34038){
var state_val_34039 = (state_34038[(1)]);
if((state_val_34039 === (7))){
var inst_34034 = (state_34038[(2)]);
var state_34038__$1 = state_34038;
var statearr_34040_34756 = state_34038__$1;
(statearr_34040_34756[(2)] = inst_34034);

(statearr_34040_34756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (1))){
var inst_33994 = [];
var inst_33995 = inst_33994;
var inst_33996 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34038__$1 = (function (){var statearr_34041 = state_34038;
(statearr_34041[(7)] = inst_33995);

(statearr_34041[(8)] = inst_33996);

return statearr_34041;
})();
var statearr_34042_34758 = state_34038__$1;
(statearr_34042_34758[(2)] = null);

(statearr_34042_34758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (4))){
var inst_33999 = (state_34038[(9)]);
var inst_33999__$1 = (state_34038[(2)]);
var inst_34000 = (inst_33999__$1 == null);
var inst_34001 = cljs.core.not(inst_34000);
var state_34038__$1 = (function (){var statearr_34043 = state_34038;
(statearr_34043[(9)] = inst_33999__$1);

return statearr_34043;
})();
if(inst_34001){
var statearr_34044_34761 = state_34038__$1;
(statearr_34044_34761[(1)] = (5));

} else {
var statearr_34045_34762 = state_34038__$1;
(statearr_34045_34762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (15))){
var inst_33995 = (state_34038[(7)]);
var inst_34026 = cljs.core.vec(inst_33995);
var state_34038__$1 = state_34038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34038__$1,(18),out,inst_34026);
} else {
if((state_val_34039 === (13))){
var inst_34021 = (state_34038[(2)]);
var state_34038__$1 = state_34038;
var statearr_34046_34765 = state_34038__$1;
(statearr_34046_34765[(2)] = inst_34021);

(statearr_34046_34765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (6))){
var inst_33995 = (state_34038[(7)]);
var inst_34023 = inst_33995.length;
var inst_34024 = (inst_34023 > (0));
var state_34038__$1 = state_34038;
if(cljs.core.truth_(inst_34024)){
var statearr_34047_34766 = state_34038__$1;
(statearr_34047_34766[(1)] = (15));

} else {
var statearr_34048_34767 = state_34038__$1;
(statearr_34048_34767[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (17))){
var inst_34031 = (state_34038[(2)]);
var inst_34032 = cljs.core.async.close_BANG_(out);
var state_34038__$1 = (function (){var statearr_34049 = state_34038;
(statearr_34049[(10)] = inst_34031);

return statearr_34049;
})();
var statearr_34050_34769 = state_34038__$1;
(statearr_34050_34769[(2)] = inst_34032);

(statearr_34050_34769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (3))){
var inst_34036 = (state_34038[(2)]);
var state_34038__$1 = state_34038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34038__$1,inst_34036);
} else {
if((state_val_34039 === (12))){
var inst_33995 = (state_34038[(7)]);
var inst_34014 = cljs.core.vec(inst_33995);
var state_34038__$1 = state_34038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34038__$1,(14),out,inst_34014);
} else {
if((state_val_34039 === (2))){
var state_34038__$1 = state_34038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34038__$1,(4),ch);
} else {
if((state_val_34039 === (11))){
var inst_33995 = (state_34038[(7)]);
var inst_33999 = (state_34038[(9)]);
var inst_34003 = (state_34038[(11)]);
var inst_34011 = inst_33995.push(inst_33999);
var tmp34051 = inst_33995;
var inst_33995__$1 = tmp34051;
var inst_33996 = inst_34003;
var state_34038__$1 = (function (){var statearr_34052 = state_34038;
(statearr_34052[(12)] = inst_34011);

(statearr_34052[(7)] = inst_33995__$1);

(statearr_34052[(8)] = inst_33996);

return statearr_34052;
})();
var statearr_34053_34774 = state_34038__$1;
(statearr_34053_34774[(2)] = null);

(statearr_34053_34774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (9))){
var inst_33996 = (state_34038[(8)]);
var inst_34007 = cljs.core.keyword_identical_QMARK_(inst_33996,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34038__$1 = state_34038;
var statearr_34054_34776 = state_34038__$1;
(statearr_34054_34776[(2)] = inst_34007);

(statearr_34054_34776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (5))){
var inst_33999 = (state_34038[(9)]);
var inst_34003 = (state_34038[(11)]);
var inst_33996 = (state_34038[(8)]);
var inst_34004 = (state_34038[(13)]);
var inst_34003__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33999) : f.call(null,inst_33999));
var inst_34004__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34003__$1,inst_33996);
var state_34038__$1 = (function (){var statearr_34055 = state_34038;
(statearr_34055[(11)] = inst_34003__$1);

(statearr_34055[(13)] = inst_34004__$1);

return statearr_34055;
})();
if(inst_34004__$1){
var statearr_34056_34778 = state_34038__$1;
(statearr_34056_34778[(1)] = (8));

} else {
var statearr_34057_34779 = state_34038__$1;
(statearr_34057_34779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (14))){
var inst_33999 = (state_34038[(9)]);
var inst_34003 = (state_34038[(11)]);
var inst_34016 = (state_34038[(2)]);
var inst_34017 = [];
var inst_34018 = inst_34017.push(inst_33999);
var inst_33995 = inst_34017;
var inst_33996 = inst_34003;
var state_34038__$1 = (function (){var statearr_34058 = state_34038;
(statearr_34058[(14)] = inst_34016);

(statearr_34058[(15)] = inst_34018);

(statearr_34058[(7)] = inst_33995);

(statearr_34058[(8)] = inst_33996);

return statearr_34058;
})();
var statearr_34059_34780 = state_34038__$1;
(statearr_34059_34780[(2)] = null);

(statearr_34059_34780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (16))){
var state_34038__$1 = state_34038;
var statearr_34060_34781 = state_34038__$1;
(statearr_34060_34781[(2)] = null);

(statearr_34060_34781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (10))){
var inst_34009 = (state_34038[(2)]);
var state_34038__$1 = state_34038;
if(cljs.core.truth_(inst_34009)){
var statearr_34061_34782 = state_34038__$1;
(statearr_34061_34782[(1)] = (11));

} else {
var statearr_34062_34783 = state_34038__$1;
(statearr_34062_34783[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (18))){
var inst_34028 = (state_34038[(2)]);
var state_34038__$1 = state_34038;
var statearr_34063_34784 = state_34038__$1;
(statearr_34063_34784[(2)] = inst_34028);

(statearr_34063_34784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34039 === (8))){
var inst_34004 = (state_34038[(13)]);
var state_34038__$1 = state_34038;
var statearr_34064_34785 = state_34038__$1;
(statearr_34064_34785[(2)] = inst_34004);

(statearr_34064_34785[(1)] = (10));


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
var cljs$core$async$state_machine__32374__auto__ = null;
var cljs$core$async$state_machine__32374__auto____0 = (function (){
var statearr_34065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34065[(0)] = cljs$core$async$state_machine__32374__auto__);

(statearr_34065[(1)] = (1));

return statearr_34065;
});
var cljs$core$async$state_machine__32374__auto____1 = (function (state_34038){
while(true){
var ret_value__32375__auto__ = (function (){try{while(true){
var result__32376__auto__ = switch__32373__auto__(state_34038);
if(cljs.core.keyword_identical_QMARK_(result__32376__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32376__auto__;
}
break;
}
}catch (e34066){var ex__32377__auto__ = e34066;
var statearr_34067_34786 = state_34038;
(statearr_34067_34786[(2)] = ex__32377__auto__);


if(cljs.core.seq((state_34038[(4)]))){
var statearr_34068_34787 = state_34038;
(statearr_34068_34787[(1)] = cljs.core.first((state_34038[(4)])));

} else {
throw ex__32377__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32375__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34788 = state_34038;
state_34038 = G__34788;
continue;
} else {
return ret_value__32375__auto__;
}
break;
}
});
cljs$core$async$state_machine__32374__auto__ = function(state_34038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32374__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32374__auto____1.call(this,state_34038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32374__auto____0;
cljs$core$async$state_machine__32374__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32374__auto____1;
return cljs$core$async$state_machine__32374__auto__;
})()
})();
var state__32464__auto__ = (function (){var statearr_34069 = f__32463__auto__();
(statearr_34069[(6)] = c__32462__auto___34754);

return statearr_34069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32464__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
