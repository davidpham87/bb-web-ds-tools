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
cljs.core.async.t_cljs$core$async32420 = (function (f,blockable,meta32421){
this.f = f;
this.blockable = blockable;
this.meta32421 = meta32421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32422,meta32421__$1){
var self__ = this;
var _32422__$1 = this;
return (new cljs.core.async.t_cljs$core$async32420(self__.f,self__.blockable,meta32421__$1));
}));

(cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32422){
var self__ = this;
var _32422__$1 = this;
return self__.meta32421;
}));

(cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32421","meta32421",836241054,null)], null);
}));

(cljs.core.async.t_cljs$core$async32420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32420");

(cljs.core.async.t_cljs$core$async32420.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32420.
 */
cljs.core.async.__GT_t_cljs$core$async32420 = (function cljs$core$async$__GT_t_cljs$core$async32420(f,blockable,meta32421){
return (new cljs.core.async.t_cljs$core$async32420(f,blockable,meta32421));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32419 = arguments.length;
switch (G__32419) {
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
return (new cljs.core.async.t_cljs$core$async32420(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32425 = arguments.length;
switch (G__32425) {
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
var G__32427 = arguments.length;
switch (G__32427) {
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
var G__32429 = arguments.length;
switch (G__32429) {
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
var val_33851 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33851) : fn1.call(null,val_33851));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33851) : fn1.call(null,val_33851));
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
var G__32431 = arguments.length;
switch (G__32431) {
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
var n__5616__auto___33854 = n;
var x_33855 = (0);
while(true){
if((x_33855 < n__5616__auto___33854)){
(a[x_33855] = x_33855);

var G__33856 = (x_33855 + (1));
x_33855 = G__33856;
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
cljs.core.async.t_cljs$core$async32432 = (function (flag,meta32433){
this.flag = flag;
this.meta32433 = meta32433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32434,meta32433__$1){
var self__ = this;
var _32434__$1 = this;
return (new cljs.core.async.t_cljs$core$async32432(self__.flag,meta32433__$1));
}));

(cljs.core.async.t_cljs$core$async32432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32434){
var self__ = this;
var _32434__$1 = this;
return self__.meta32433;
}));

(cljs.core.async.t_cljs$core$async32432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32433","meta32433",-948883132,null)], null);
}));

(cljs.core.async.t_cljs$core$async32432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32432");

(cljs.core.async.t_cljs$core$async32432.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32432.
 */
cljs.core.async.__GT_t_cljs$core$async32432 = (function cljs$core$async$__GT_t_cljs$core$async32432(flag,meta32433){
return (new cljs.core.async.t_cljs$core$async32432(flag,meta32433));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32432(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32435 = (function (flag,cb,meta32436){
this.flag = flag;
this.cb = cb;
this.meta32436 = meta32436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32437,meta32436__$1){
var self__ = this;
var _32437__$1 = this;
return (new cljs.core.async.t_cljs$core$async32435(self__.flag,self__.cb,meta32436__$1));
}));

(cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32437){
var self__ = this;
var _32437__$1 = this;
return self__.meta32436;
}));

(cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32436","meta32436",1287190732,null)], null);
}));

(cljs.core.async.t_cljs$core$async32435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32435");

(cljs.core.async.t_cljs$core$async32435.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32435.
 */
cljs.core.async.__GT_t_cljs$core$async32435 = (function cljs$core$async$__GT_t_cljs$core$async32435(flag,cb,meta32436){
return (new cljs.core.async.t_cljs$core$async32435(flag,cb,meta32436));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32435(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_33857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_33857)){
if((!(((port_33857.cljs$core$IFn$_invoke$arity$1 ? port_33857.cljs$core$IFn$_invoke$arity$1((1)) : port_33857.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__33858 = (i + (1));
i = G__33858;
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
return (function (p1__32438_SHARP_){
var G__32440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32438_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32440) : fret.call(null,G__32440));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__32439_SHARP_){
var G__32441 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32439_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32441) : fret.call(null,G__32441));
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
var G__33859 = (i + (1));
i = G__33859;
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
var len__5749__auto___33860 = arguments.length;
var i__5750__auto___33861 = (0);
while(true){
if((i__5750__auto___33861 < len__5749__auto___33860)){
args__5755__auto__.push((arguments[i__5750__auto___33861]));

var G__33862 = (i__5750__auto___33861 + (1));
i__5750__auto___33861 = G__33862;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32444){
var map__32445 = p__32444;
var map__32445__$1 = cljs.core.__destructure_map(map__32445);
var opts = map__32445__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32442){
var G__32443 = cljs.core.first(seq32442);
var seq32442__$1 = cljs.core.next(seq32442);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32443,seq32442__$1);
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
var G__32447 = arguments.length;
switch (G__32447) {
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
var c__32361__auto___33864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_32471){
var state_val_32472 = (state_32471[(1)]);
if((state_val_32472 === (7))){
var inst_32467 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
var statearr_32473_33865 = state_32471__$1;
(statearr_32473_33865[(2)] = inst_32467);

(statearr_32473_33865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (1))){
var state_32471__$1 = state_32471;
var statearr_32474_33866 = state_32471__$1;
(statearr_32474_33866[(2)] = null);

(statearr_32474_33866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (4))){
var inst_32450 = (state_32471[(7)]);
var inst_32450__$1 = (state_32471[(2)]);
var inst_32451 = (inst_32450__$1 == null);
var state_32471__$1 = (function (){var statearr_32475 = state_32471;
(statearr_32475[(7)] = inst_32450__$1);

return statearr_32475;
})();
if(cljs.core.truth_(inst_32451)){
var statearr_32476_33867 = state_32471__$1;
(statearr_32476_33867[(1)] = (5));

} else {
var statearr_32477_33868 = state_32471__$1;
(statearr_32477_33868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (13))){
var state_32471__$1 = state_32471;
var statearr_32478_33869 = state_32471__$1;
(statearr_32478_33869[(2)] = null);

(statearr_32478_33869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (6))){
var inst_32450 = (state_32471[(7)]);
var state_32471__$1 = state_32471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32471__$1,(11),to,inst_32450);
} else {
if((state_val_32472 === (3))){
var inst_32469 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32471__$1,inst_32469);
} else {
if((state_val_32472 === (12))){
var state_32471__$1 = state_32471;
var statearr_32479_33870 = state_32471__$1;
(statearr_32479_33870[(2)] = null);

(statearr_32479_33870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (2))){
var state_32471__$1 = state_32471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32471__$1,(4),from);
} else {
if((state_val_32472 === (11))){
var inst_32460 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
if(cljs.core.truth_(inst_32460)){
var statearr_32480_33871 = state_32471__$1;
(statearr_32480_33871[(1)] = (12));

} else {
var statearr_32481_33872 = state_32471__$1;
(statearr_32481_33872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (9))){
var state_32471__$1 = state_32471;
var statearr_32482_33873 = state_32471__$1;
(statearr_32482_33873[(2)] = null);

(statearr_32482_33873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (5))){
var state_32471__$1 = state_32471;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32483_33874 = state_32471__$1;
(statearr_32483_33874[(1)] = (8));

} else {
var statearr_32484_33875 = state_32471__$1;
(statearr_32484_33875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (14))){
var inst_32465 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
var statearr_32485_33876 = state_32471__$1;
(statearr_32485_33876[(2)] = inst_32465);

(statearr_32485_33876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (10))){
var inst_32457 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
var statearr_32486_33877 = state_32471__$1;
(statearr_32486_33877[(2)] = inst_32457);

(statearr_32486_33877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32472 === (8))){
var inst_32454 = cljs.core.async.close_BANG_(to);
var state_32471__$1 = state_32471;
var statearr_32487_33878 = state_32471__$1;
(statearr_32487_33878[(2)] = inst_32454);

(statearr_32487_33878[(1)] = (10));


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
var cljs$core$async$state_machine__32291__auto__ = null;
var cljs$core$async$state_machine__32291__auto____0 = (function (){
var statearr_32488 = [null,null,null,null,null,null,null,null];
(statearr_32488[(0)] = cljs$core$async$state_machine__32291__auto__);

(statearr_32488[(1)] = (1));

return statearr_32488;
});
var cljs$core$async$state_machine__32291__auto____1 = (function (state_32471){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_32471);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e32489){var ex__32294__auto__ = e32489;
var statearr_32490_33879 = state_32471;
(statearr_32490_33879[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_32471[(4)]))){
var statearr_32491_33880 = state_32471;
(statearr_32491_33880[(1)] = cljs.core.first((state_32471[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33881 = state_32471;
state_32471 = G__33881;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$state_machine__32291__auto__ = function(state_32471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32291__auto____1.call(this,state_32471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32291__auto____0;
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32291__auto____1;
return cljs$core$async$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_32492 = f__32362__auto__();
(statearr_32492[(6)] = c__32361__auto___33864);

return statearr_32492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
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
var process__$1 = (function (p__32493){
var vec__32494 = p__32493;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32494,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32494,(1),null);
var job = vec__32494;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32361__auto___33882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_32501){
var state_val_32502 = (state_32501[(1)]);
if((state_val_32502 === (1))){
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32501__$1,(2),res,v);
} else {
if((state_val_32502 === (2))){
var inst_32498 = (state_32501[(2)]);
var inst_32499 = cljs.core.async.close_BANG_(res);
var state_32501__$1 = (function (){var statearr_32503 = state_32501;
(statearr_32503[(7)] = inst_32498);

return statearr_32503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32501__$1,inst_32499);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0 = (function (){
var statearr_32504 = [null,null,null,null,null,null,null,null];
(statearr_32504[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__);

(statearr_32504[(1)] = (1));

return statearr_32504;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1 = (function (state_32501){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_32501);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e32505){var ex__32294__auto__ = e32505;
var statearr_32506_33883 = state_32501;
(statearr_32506_33883[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_32501[(4)]))){
var statearr_32507_33884 = state_32501;
(statearr_32507_33884[(1)] = cljs.core.first((state_32501[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33885 = state_32501;
state_32501 = G__33885;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__ = function(state_32501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1.call(this,state_32501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_32508 = f__32362__auto__();
(statearr_32508[(6)] = c__32361__auto___33882);

return statearr_32508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32509){
var vec__32510 = p__32509;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32510,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32510,(1),null);
var job = vec__32510;
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
var n__5616__auto___33886 = n;
var __33887 = (0);
while(true){
if((__33887 < n__5616__auto___33886)){
var G__32513_33888 = type;
var G__32513_33889__$1 = (((G__32513_33888 instanceof cljs.core.Keyword))?G__32513_33888.fqn:null);
switch (G__32513_33889__$1) {
case "compute":
var c__32361__auto___33891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33887,c__32361__auto___33891,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async){
return (function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = ((function (__33887,c__32361__auto___33891,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async){
return (function (state_32526){
var state_val_32527 = (state_32526[(1)]);
if((state_val_32527 === (1))){
var state_32526__$1 = state_32526;
var statearr_32528_33892 = state_32526__$1;
(statearr_32528_33892[(2)] = null);

(statearr_32528_33892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32527 === (2))){
var state_32526__$1 = state_32526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32526__$1,(4),jobs);
} else {
if((state_val_32527 === (3))){
var inst_32524 = (state_32526[(2)]);
var state_32526__$1 = state_32526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32526__$1,inst_32524);
} else {
if((state_val_32527 === (4))){
var inst_32516 = (state_32526[(2)]);
var inst_32517 = process__$1(inst_32516);
var state_32526__$1 = state_32526;
if(cljs.core.truth_(inst_32517)){
var statearr_32529_33893 = state_32526__$1;
(statearr_32529_33893[(1)] = (5));

} else {
var statearr_32530_33894 = state_32526__$1;
(statearr_32530_33894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32527 === (5))){
var state_32526__$1 = state_32526;
var statearr_32531_33895 = state_32526__$1;
(statearr_32531_33895[(2)] = null);

(statearr_32531_33895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32527 === (6))){
var state_32526__$1 = state_32526;
var statearr_32532_33896 = state_32526__$1;
(statearr_32532_33896[(2)] = null);

(statearr_32532_33896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32527 === (7))){
var inst_32522 = (state_32526[(2)]);
var state_32526__$1 = state_32526;
var statearr_32533_33897 = state_32526__$1;
(statearr_32533_33897[(2)] = inst_32522);

(statearr_32533_33897[(1)] = (3));


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
});})(__33887,c__32361__auto___33891,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async))
;
return ((function (__33887,switch__32290__auto__,c__32361__auto___33891,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0 = (function (){
var statearr_32534 = [null,null,null,null,null,null,null];
(statearr_32534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__);

(statearr_32534[(1)] = (1));

return statearr_32534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1 = (function (state_32526){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_32526);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e32535){var ex__32294__auto__ = e32535;
var statearr_32536_33898 = state_32526;
(statearr_32536_33898[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_32526[(4)]))){
var statearr_32537_33899 = state_32526;
(statearr_32537_33899[(1)] = cljs.core.first((state_32526[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33900 = state_32526;
state_32526 = G__33900;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__ = function(state_32526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1.call(this,state_32526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__;
})()
;})(__33887,switch__32290__auto__,c__32361__auto___33891,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async))
})();
var state__32363__auto__ = (function (){var statearr_32538 = f__32362__auto__();
(statearr_32538[(6)] = c__32361__auto___33891);

return statearr_32538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
});})(__33887,c__32361__auto___33891,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async))
);


break;
case "async":
var c__32361__auto___33901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33887,c__32361__auto___33901,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async){
return (function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = ((function (__33887,c__32361__auto___33901,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async){
return (function (state_32551){
var state_val_32552 = (state_32551[(1)]);
if((state_val_32552 === (1))){
var state_32551__$1 = state_32551;
var statearr_32553_33902 = state_32551__$1;
(statearr_32553_33902[(2)] = null);

(statearr_32553_33902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (2))){
var state_32551__$1 = state_32551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32551__$1,(4),jobs);
} else {
if((state_val_32552 === (3))){
var inst_32549 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32551__$1,inst_32549);
} else {
if((state_val_32552 === (4))){
var inst_32541 = (state_32551[(2)]);
var inst_32542 = async(inst_32541);
var state_32551__$1 = state_32551;
if(cljs.core.truth_(inst_32542)){
var statearr_32554_33903 = state_32551__$1;
(statearr_32554_33903[(1)] = (5));

} else {
var statearr_32555_33904 = state_32551__$1;
(statearr_32555_33904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (5))){
var state_32551__$1 = state_32551;
var statearr_32556_33905 = state_32551__$1;
(statearr_32556_33905[(2)] = null);

(statearr_32556_33905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (6))){
var state_32551__$1 = state_32551;
var statearr_32557_33906 = state_32551__$1;
(statearr_32557_33906[(2)] = null);

(statearr_32557_33906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (7))){
var inst_32547 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32558_33907 = state_32551__$1;
(statearr_32558_33907[(2)] = inst_32547);

(statearr_32558_33907[(1)] = (3));


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
});})(__33887,c__32361__auto___33901,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async))
;
return ((function (__33887,switch__32290__auto__,c__32361__auto___33901,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0 = (function (){
var statearr_32559 = [null,null,null,null,null,null,null];
(statearr_32559[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__);

(statearr_32559[(1)] = (1));

return statearr_32559;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1 = (function (state_32551){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_32551);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e32560){var ex__32294__auto__ = e32560;
var statearr_32561_33908 = state_32551;
(statearr_32561_33908[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_32551[(4)]))){
var statearr_32562_33909 = state_32551;
(statearr_32562_33909[(1)] = cljs.core.first((state_32551[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33910 = state_32551;
state_32551 = G__33910;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__ = function(state_32551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1.call(this,state_32551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__;
})()
;})(__33887,switch__32290__auto__,c__32361__auto___33901,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async))
})();
var state__32363__auto__ = (function (){var statearr_32563 = f__32362__auto__();
(statearr_32563[(6)] = c__32361__auto___33901);

return statearr_32563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
});})(__33887,c__32361__auto___33901,G__32513_33888,G__32513_33889__$1,n__5616__auto___33886,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32513_33889__$1)].join('')));

}

var G__33915 = (__33887 + (1));
__33887 = G__33915;
continue;
} else {
}
break;
}

var c__32361__auto___33916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_32585){
var state_val_32586 = (state_32585[(1)]);
if((state_val_32586 === (7))){
var inst_32581 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
var statearr_32587_33918 = state_32585__$1;
(statearr_32587_33918[(2)] = inst_32581);

(statearr_32587_33918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (1))){
var state_32585__$1 = state_32585;
var statearr_32588_33919 = state_32585__$1;
(statearr_32588_33919[(2)] = null);

(statearr_32588_33919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (4))){
var inst_32566 = (state_32585[(7)]);
var inst_32566__$1 = (state_32585[(2)]);
var inst_32567 = (inst_32566__$1 == null);
var state_32585__$1 = (function (){var statearr_32589 = state_32585;
(statearr_32589[(7)] = inst_32566__$1);

return statearr_32589;
})();
if(cljs.core.truth_(inst_32567)){
var statearr_32590_33920 = state_32585__$1;
(statearr_32590_33920[(1)] = (5));

} else {
var statearr_32591_33921 = state_32585__$1;
(statearr_32591_33921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (6))){
var inst_32566 = (state_32585[(7)]);
var inst_32571 = (state_32585[(8)]);
var inst_32571__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32572 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32573 = [inst_32566,inst_32571__$1];
var inst_32574 = (new cljs.core.PersistentVector(null,2,(5),inst_32572,inst_32573,null));
var state_32585__$1 = (function (){var statearr_32592 = state_32585;
(statearr_32592[(8)] = inst_32571__$1);

return statearr_32592;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32585__$1,(8),jobs,inst_32574);
} else {
if((state_val_32586 === (3))){
var inst_32583 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32585__$1,inst_32583);
} else {
if((state_val_32586 === (2))){
var state_32585__$1 = state_32585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32585__$1,(4),from);
} else {
if((state_val_32586 === (9))){
var inst_32578 = (state_32585[(2)]);
var state_32585__$1 = (function (){var statearr_32593 = state_32585;
(statearr_32593[(9)] = inst_32578);

return statearr_32593;
})();
var statearr_32594_33923 = state_32585__$1;
(statearr_32594_33923[(2)] = null);

(statearr_32594_33923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (5))){
var inst_32569 = cljs.core.async.close_BANG_(jobs);
var state_32585__$1 = state_32585;
var statearr_32595_33924 = state_32585__$1;
(statearr_32595_33924[(2)] = inst_32569);

(statearr_32595_33924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (8))){
var inst_32571 = (state_32585[(8)]);
var inst_32576 = (state_32585[(2)]);
var state_32585__$1 = (function (){var statearr_32596 = state_32585;
(statearr_32596[(10)] = inst_32576);

return statearr_32596;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32585__$1,(9),results,inst_32571);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0 = (function (){
var statearr_32597 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__);

(statearr_32597[(1)] = (1));

return statearr_32597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1 = (function (state_32585){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_32585);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e32598){var ex__32294__auto__ = e32598;
var statearr_32599_33929 = state_32585;
(statearr_32599_33929[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_32585[(4)]))){
var statearr_32600_33930 = state_32585;
(statearr_32600_33930[(1)] = cljs.core.first((state_32585[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33931 = state_32585;
state_32585 = G__33931;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__ = function(state_32585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1.call(this,state_32585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_32601 = f__32362__auto__();
(statearr_32601[(6)] = c__32361__auto___33916);

return statearr_32601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_32639){
var state_val_32640 = (state_32639[(1)]);
if((state_val_32640 === (7))){
var inst_32635 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32641_33932 = state_32639__$1;
(statearr_32641_33932[(2)] = inst_32635);

(statearr_32641_33932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (20))){
var state_32639__$1 = state_32639;
var statearr_32642_33933 = state_32639__$1;
(statearr_32642_33933[(2)] = null);

(statearr_32642_33933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (1))){
var state_32639__$1 = state_32639;
var statearr_32643_33934 = state_32639__$1;
(statearr_32643_33934[(2)] = null);

(statearr_32643_33934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (4))){
var inst_32604 = (state_32639[(7)]);
var inst_32604__$1 = (state_32639[(2)]);
var inst_32605 = (inst_32604__$1 == null);
var state_32639__$1 = (function (){var statearr_32644 = state_32639;
(statearr_32644[(7)] = inst_32604__$1);

return statearr_32644;
})();
if(cljs.core.truth_(inst_32605)){
var statearr_32645_33938 = state_32639__$1;
(statearr_32645_33938[(1)] = (5));

} else {
var statearr_32646_33939 = state_32639__$1;
(statearr_32646_33939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (15))){
var inst_32617 = (state_32639[(8)]);
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32639__$1,(18),to,inst_32617);
} else {
if((state_val_32640 === (21))){
var inst_32630 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32647_33940 = state_32639__$1;
(statearr_32647_33940[(2)] = inst_32630);

(statearr_32647_33940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (13))){
var inst_32632 = (state_32639[(2)]);
var state_32639__$1 = (function (){var statearr_32648 = state_32639;
(statearr_32648[(9)] = inst_32632);

return statearr_32648;
})();
var statearr_32649_33941 = state_32639__$1;
(statearr_32649_33941[(2)] = null);

(statearr_32649_33941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (6))){
var inst_32604 = (state_32639[(7)]);
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32639__$1,(11),inst_32604);
} else {
if((state_val_32640 === (17))){
var inst_32625 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
if(cljs.core.truth_(inst_32625)){
var statearr_32650_33942 = state_32639__$1;
(statearr_32650_33942[(1)] = (19));

} else {
var statearr_32651_33943 = state_32639__$1;
(statearr_32651_33943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (3))){
var inst_32637 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32639__$1,inst_32637);
} else {
if((state_val_32640 === (12))){
var inst_32614 = (state_32639[(10)]);
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32639__$1,(14),inst_32614);
} else {
if((state_val_32640 === (2))){
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32639__$1,(4),results);
} else {
if((state_val_32640 === (19))){
var state_32639__$1 = state_32639;
var statearr_32652_33944 = state_32639__$1;
(statearr_32652_33944[(2)] = null);

(statearr_32652_33944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (11))){
var inst_32614 = (state_32639[(2)]);
var state_32639__$1 = (function (){var statearr_32653 = state_32639;
(statearr_32653[(10)] = inst_32614);

return statearr_32653;
})();
var statearr_32654_33945 = state_32639__$1;
(statearr_32654_33945[(2)] = null);

(statearr_32654_33945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (9))){
var state_32639__$1 = state_32639;
var statearr_32655_33946 = state_32639__$1;
(statearr_32655_33946[(2)] = null);

(statearr_32655_33946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (5))){
var state_32639__$1 = state_32639;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32656_33947 = state_32639__$1;
(statearr_32656_33947[(1)] = (8));

} else {
var statearr_32657_33948 = state_32639__$1;
(statearr_32657_33948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (14))){
var inst_32617 = (state_32639[(8)]);
var inst_32619 = (state_32639[(11)]);
var inst_32617__$1 = (state_32639[(2)]);
var inst_32618 = (inst_32617__$1 == null);
var inst_32619__$1 = cljs.core.not(inst_32618);
var state_32639__$1 = (function (){var statearr_32658 = state_32639;
(statearr_32658[(8)] = inst_32617__$1);

(statearr_32658[(11)] = inst_32619__$1);

return statearr_32658;
})();
if(inst_32619__$1){
var statearr_32659_33949 = state_32639__$1;
(statearr_32659_33949[(1)] = (15));

} else {
var statearr_32660_33950 = state_32639__$1;
(statearr_32660_33950[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (16))){
var inst_32619 = (state_32639[(11)]);
var state_32639__$1 = state_32639;
var statearr_32661_33951 = state_32639__$1;
(statearr_32661_33951[(2)] = inst_32619);

(statearr_32661_33951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (10))){
var inst_32611 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32662_33952 = state_32639__$1;
(statearr_32662_33952[(2)] = inst_32611);

(statearr_32662_33952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (18))){
var inst_32622 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32663_33954 = state_32639__$1;
(statearr_32663_33954[(2)] = inst_32622);

(statearr_32663_33954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (8))){
var inst_32608 = cljs.core.async.close_BANG_(to);
var state_32639__$1 = state_32639;
var statearr_32664_33955 = state_32639__$1;
(statearr_32664_33955[(2)] = inst_32608);

(statearr_32664_33955[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0 = (function (){
var statearr_32665 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__);

(statearr_32665[(1)] = (1));

return statearr_32665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1 = (function (state_32639){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_32639);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e32666){var ex__32294__auto__ = e32666;
var statearr_32667_33957 = state_32639;
(statearr_32667_33957[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_32639[(4)]))){
var statearr_32668_33958 = state_32639;
(statearr_32668_33958[(1)] = cljs.core.first((state_32639[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33959 = state_32639;
state_32639 = G__33959;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__ = function(state_32639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1.call(this,state_32639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32291__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_32669 = f__32362__auto__();
(statearr_32669[(6)] = c__32361__auto__);

return statearr_32669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
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
var G__32671 = arguments.length;
switch (G__32671) {
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
var G__32673 = arguments.length;
switch (G__32673) {
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
var G__32675 = arguments.length;
switch (G__32675) {
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
var c__32361__auto___33964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_32701){
var state_val_32702 = (state_32701[(1)]);
if((state_val_32702 === (7))){
var inst_32697 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32703_33965 = state_32701__$1;
(statearr_32703_33965[(2)] = inst_32697);

(statearr_32703_33965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (1))){
var state_32701__$1 = state_32701;
var statearr_32704_33966 = state_32701__$1;
(statearr_32704_33966[(2)] = null);

(statearr_32704_33966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (4))){
var inst_32678 = (state_32701[(7)]);
var inst_32678__$1 = (state_32701[(2)]);
var inst_32679 = (inst_32678__$1 == null);
var state_32701__$1 = (function (){var statearr_32705 = state_32701;
(statearr_32705[(7)] = inst_32678__$1);

return statearr_32705;
})();
if(cljs.core.truth_(inst_32679)){
var statearr_32706_33968 = state_32701__$1;
(statearr_32706_33968[(1)] = (5));

} else {
var statearr_32707_33969 = state_32701__$1;
(statearr_32707_33969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (13))){
var state_32701__$1 = state_32701;
var statearr_32708_33973 = state_32701__$1;
(statearr_32708_33973[(2)] = null);

(statearr_32708_33973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (6))){
var inst_32678 = (state_32701[(7)]);
var inst_32684 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32678) : p.call(null,inst_32678));
var state_32701__$1 = state_32701;
if(cljs.core.truth_(inst_32684)){
var statearr_32709_33974 = state_32701__$1;
(statearr_32709_33974[(1)] = (9));

} else {
var statearr_32710_33975 = state_32701__$1;
(statearr_32710_33975[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (3))){
var inst_32699 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32701__$1,inst_32699);
} else {
if((state_val_32702 === (12))){
var state_32701__$1 = state_32701;
var statearr_32711_33976 = state_32701__$1;
(statearr_32711_33976[(2)] = null);

(statearr_32711_33976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (2))){
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32701__$1,(4),ch);
} else {
if((state_val_32702 === (11))){
var inst_32678 = (state_32701[(7)]);
var inst_32688 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32701__$1,(8),inst_32688,inst_32678);
} else {
if((state_val_32702 === (9))){
var state_32701__$1 = state_32701;
var statearr_32712_33977 = state_32701__$1;
(statearr_32712_33977[(2)] = tc);

(statearr_32712_33977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (5))){
var inst_32681 = cljs.core.async.close_BANG_(tc);
var inst_32682 = cljs.core.async.close_BANG_(fc);
var state_32701__$1 = (function (){var statearr_32713 = state_32701;
(statearr_32713[(8)] = inst_32681);

return statearr_32713;
})();
var statearr_32714_33978 = state_32701__$1;
(statearr_32714_33978[(2)] = inst_32682);

(statearr_32714_33978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (14))){
var inst_32695 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32715_33979 = state_32701__$1;
(statearr_32715_33979[(2)] = inst_32695);

(statearr_32715_33979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (10))){
var state_32701__$1 = state_32701;
var statearr_32716_33981 = state_32701__$1;
(statearr_32716_33981[(2)] = fc);

(statearr_32716_33981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (8))){
var inst_32690 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
if(cljs.core.truth_(inst_32690)){
var statearr_32717_33983 = state_32701__$1;
(statearr_32717_33983[(1)] = (12));

} else {
var statearr_32718_33984 = state_32701__$1;
(statearr_32718_33984[(1)] = (13));

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
var cljs$core$async$state_machine__32291__auto__ = null;
var cljs$core$async$state_machine__32291__auto____0 = (function (){
var statearr_32719 = [null,null,null,null,null,null,null,null,null];
(statearr_32719[(0)] = cljs$core$async$state_machine__32291__auto__);

(statearr_32719[(1)] = (1));

return statearr_32719;
});
var cljs$core$async$state_machine__32291__auto____1 = (function (state_32701){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_32701);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e32720){var ex__32294__auto__ = e32720;
var statearr_32721_33988 = state_32701;
(statearr_32721_33988[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_32701[(4)]))){
var statearr_32722_33989 = state_32701;
(statearr_32722_33989[(1)] = cljs.core.first((state_32701[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33990 = state_32701;
state_32701 = G__33990;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$state_machine__32291__auto__ = function(state_32701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32291__auto____1.call(this,state_32701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32291__auto____0;
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32291__auto____1;
return cljs$core$async$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_32723 = f__32362__auto__();
(statearr_32723[(6)] = c__32361__auto___33964);

return statearr_32723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
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
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_32745){
var state_val_32746 = (state_32745[(1)]);
if((state_val_32746 === (7))){
var inst_32741 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
var statearr_32747_33991 = state_32745__$1;
(statearr_32747_33991[(2)] = inst_32741);

(statearr_32747_33991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (1))){
var inst_32724 = init;
var inst_32725 = inst_32724;
var state_32745__$1 = (function (){var statearr_32748 = state_32745;
(statearr_32748[(7)] = inst_32725);

return statearr_32748;
})();
var statearr_32749_33992 = state_32745__$1;
(statearr_32749_33992[(2)] = null);

(statearr_32749_33992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (4))){
var inst_32728 = (state_32745[(8)]);
var inst_32728__$1 = (state_32745[(2)]);
var inst_32729 = (inst_32728__$1 == null);
var state_32745__$1 = (function (){var statearr_32750 = state_32745;
(statearr_32750[(8)] = inst_32728__$1);

return statearr_32750;
})();
if(cljs.core.truth_(inst_32729)){
var statearr_32751_33993 = state_32745__$1;
(statearr_32751_33993[(1)] = (5));

} else {
var statearr_32752_33994 = state_32745__$1;
(statearr_32752_33994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (6))){
var inst_32725 = (state_32745[(7)]);
var inst_32728 = (state_32745[(8)]);
var inst_32732 = (state_32745[(9)]);
var inst_32732__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32725,inst_32728) : f.call(null,inst_32725,inst_32728));
var inst_32733 = cljs.core.reduced_QMARK_(inst_32732__$1);
var state_32745__$1 = (function (){var statearr_32753 = state_32745;
(statearr_32753[(9)] = inst_32732__$1);

return statearr_32753;
})();
if(inst_32733){
var statearr_32754_33995 = state_32745__$1;
(statearr_32754_33995[(1)] = (8));

} else {
var statearr_32755_33996 = state_32745__$1;
(statearr_32755_33996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (3))){
var inst_32743 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32745__$1,inst_32743);
} else {
if((state_val_32746 === (2))){
var state_32745__$1 = state_32745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32745__$1,(4),ch);
} else {
if((state_val_32746 === (9))){
var inst_32732 = (state_32745[(9)]);
var inst_32725 = inst_32732;
var state_32745__$1 = (function (){var statearr_32756 = state_32745;
(statearr_32756[(7)] = inst_32725);

return statearr_32756;
})();
var statearr_32757_33997 = state_32745__$1;
(statearr_32757_33997[(2)] = null);

(statearr_32757_33997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (5))){
var inst_32725 = (state_32745[(7)]);
var state_32745__$1 = state_32745;
var statearr_32758_34001 = state_32745__$1;
(statearr_32758_34001[(2)] = inst_32725);

(statearr_32758_34001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (10))){
var inst_32739 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
var statearr_32759_34002 = state_32745__$1;
(statearr_32759_34002[(2)] = inst_32739);

(statearr_32759_34002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (8))){
var inst_32732 = (state_32745[(9)]);
var inst_32735 = cljs.core.deref(inst_32732);
var state_32745__$1 = state_32745;
var statearr_32760_34003 = state_32745__$1;
(statearr_32760_34003[(2)] = inst_32735);

(statearr_32760_34003[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32291__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32291__auto____0 = (function (){
var statearr_32761 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32761[(0)] = cljs$core$async$reduce_$_state_machine__32291__auto__);

(statearr_32761[(1)] = (1));

return statearr_32761;
});
var cljs$core$async$reduce_$_state_machine__32291__auto____1 = (function (state_32745){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_32745);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e32762){var ex__32294__auto__ = e32762;
var statearr_32763_34004 = state_32745;
(statearr_32763_34004[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_32745[(4)]))){
var statearr_32764_34008 = state_32745;
(statearr_32764_34008[(1)] = cljs.core.first((state_32745[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34009 = state_32745;
state_32745 = G__34009;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32291__auto__ = function(state_32745){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32291__auto____1.call(this,state_32745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32291__auto____0;
cljs$core$async$reduce_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32291__auto____1;
return cljs$core$async$reduce_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_32765 = f__32362__auto__();
(statearr_32765[(6)] = c__32361__auto__);

return statearr_32765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_32771){
var state_val_32772 = (state_32771[(1)]);
if((state_val_32772 === (1))){
var inst_32766 = cljs.core.async.reduce(f__$1,init,ch);
var state_32771__$1 = state_32771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32771__$1,(2),inst_32766);
} else {
if((state_val_32772 === (2))){
var inst_32768 = (state_32771[(2)]);
var inst_32769 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32768) : f__$1.call(null,inst_32768));
var state_32771__$1 = state_32771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32771__$1,inst_32769);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32291__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32291__auto____0 = (function (){
var statearr_32773 = [null,null,null,null,null,null,null];
(statearr_32773[(0)] = cljs$core$async$transduce_$_state_machine__32291__auto__);

(statearr_32773[(1)] = (1));

return statearr_32773;
});
var cljs$core$async$transduce_$_state_machine__32291__auto____1 = (function (state_32771){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_32771);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e32774){var ex__32294__auto__ = e32774;
var statearr_32775_34010 = state_32771;
(statearr_32775_34010[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_32771[(4)]))){
var statearr_32776_34011 = state_32771;
(statearr_32776_34011[(1)] = cljs.core.first((state_32771[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34012 = state_32771;
state_32771 = G__34012;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32291__auto__ = function(state_32771){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32291__auto____1.call(this,state_32771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32291__auto____0;
cljs$core$async$transduce_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32291__auto____1;
return cljs$core$async$transduce_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_32777 = f__32362__auto__();
(statearr_32777[(6)] = c__32361__auto__);

return statearr_32777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
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
var G__32779 = arguments.length;
switch (G__32779) {
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
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_32804){
var state_val_32805 = (state_32804[(1)]);
if((state_val_32805 === (7))){
var inst_32786 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32806_34014 = state_32804__$1;
(statearr_32806_34014[(2)] = inst_32786);

(statearr_32806_34014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (1))){
var inst_32780 = cljs.core.seq(coll);
var inst_32781 = inst_32780;
var state_32804__$1 = (function (){var statearr_32807 = state_32804;
(statearr_32807[(7)] = inst_32781);

return statearr_32807;
})();
var statearr_32808_34015 = state_32804__$1;
(statearr_32808_34015[(2)] = null);

(statearr_32808_34015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (4))){
var inst_32781 = (state_32804[(7)]);
var inst_32784 = cljs.core.first(inst_32781);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32804__$1,(7),ch,inst_32784);
} else {
if((state_val_32805 === (13))){
var inst_32798 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32809_34016 = state_32804__$1;
(statearr_32809_34016[(2)] = inst_32798);

(statearr_32809_34016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (6))){
var inst_32789 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
if(cljs.core.truth_(inst_32789)){
var statearr_32810_34017 = state_32804__$1;
(statearr_32810_34017[(1)] = (8));

} else {
var statearr_32811_34018 = state_32804__$1;
(statearr_32811_34018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (3))){
var inst_32802 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32804__$1,inst_32802);
} else {
if((state_val_32805 === (12))){
var state_32804__$1 = state_32804;
var statearr_32812_34019 = state_32804__$1;
(statearr_32812_34019[(2)] = null);

(statearr_32812_34019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (2))){
var inst_32781 = (state_32804[(7)]);
var state_32804__$1 = state_32804;
if(cljs.core.truth_(inst_32781)){
var statearr_32813_34020 = state_32804__$1;
(statearr_32813_34020[(1)] = (4));

} else {
var statearr_32814_34021 = state_32804__$1;
(statearr_32814_34021[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (11))){
var inst_32795 = cljs.core.async.close_BANG_(ch);
var state_32804__$1 = state_32804;
var statearr_32815_34022 = state_32804__$1;
(statearr_32815_34022[(2)] = inst_32795);

(statearr_32815_34022[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (9))){
var state_32804__$1 = state_32804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32816_34023 = state_32804__$1;
(statearr_32816_34023[(1)] = (11));

} else {
var statearr_32817_34024 = state_32804__$1;
(statearr_32817_34024[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (5))){
var inst_32781 = (state_32804[(7)]);
var state_32804__$1 = state_32804;
var statearr_32818_34025 = state_32804__$1;
(statearr_32818_34025[(2)] = inst_32781);

(statearr_32818_34025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (10))){
var inst_32800 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32819_34026 = state_32804__$1;
(statearr_32819_34026[(2)] = inst_32800);

(statearr_32819_34026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (8))){
var inst_32781 = (state_32804[(7)]);
var inst_32791 = cljs.core.next(inst_32781);
var inst_32781__$1 = inst_32791;
var state_32804__$1 = (function (){var statearr_32820 = state_32804;
(statearr_32820[(7)] = inst_32781__$1);

return statearr_32820;
})();
var statearr_32821_34027 = state_32804__$1;
(statearr_32821_34027[(2)] = null);

(statearr_32821_34027[(1)] = (2));


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
var cljs$core$async$state_machine__32291__auto__ = null;
var cljs$core$async$state_machine__32291__auto____0 = (function (){
var statearr_32822 = [null,null,null,null,null,null,null,null];
(statearr_32822[(0)] = cljs$core$async$state_machine__32291__auto__);

(statearr_32822[(1)] = (1));

return statearr_32822;
});
var cljs$core$async$state_machine__32291__auto____1 = (function (state_32804){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_32804);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e32823){var ex__32294__auto__ = e32823;
var statearr_32824_34028 = state_32804;
(statearr_32824_34028[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_32804[(4)]))){
var statearr_32825_34029 = state_32804;
(statearr_32825_34029[(1)] = cljs.core.first((state_32804[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34030 = state_32804;
state_32804 = G__34030;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$state_machine__32291__auto__ = function(state_32804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32291__auto____1.call(this,state_32804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32291__auto____0;
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32291__auto____1;
return cljs$core$async$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_32826 = f__32362__auto__();
(statearr_32826[(6)] = c__32361__auto__);

return statearr_32826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
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
var G__32828 = arguments.length;
switch (G__32828) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34038 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34038(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34039 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34039(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34040 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34040(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34041 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34041(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32829 = (function (ch,cs,meta32830){
this.ch = ch;
this.cs = cs;
this.meta32830 = meta32830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32831,meta32830__$1){
var self__ = this;
var _32831__$1 = this;
return (new cljs.core.async.t_cljs$core$async32829(self__.ch,self__.cs,meta32830__$1));
}));

(cljs.core.async.t_cljs$core$async32829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32831){
var self__ = this;
var _32831__$1 = this;
return self__.meta32830;
}));

(cljs.core.async.t_cljs$core$async32829.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32829.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32829.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32829.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32829.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32830","meta32830",1441407595,null)], null);
}));

(cljs.core.async.t_cljs$core$async32829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32829");

(cljs.core.async.t_cljs$core$async32829.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32829.
 */
cljs.core.async.__GT_t_cljs$core$async32829 = (function cljs$core$async$__GT_t_cljs$core$async32829(ch,cs,meta32830){
return (new cljs.core.async.t_cljs$core$async32829(ch,cs,meta32830));
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
var m = (new cljs.core.async.t_cljs$core$async32829(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32361__auto___34044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_32964){
var state_val_32965 = (state_32964[(1)]);
if((state_val_32965 === (7))){
var inst_32960 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_32966_34045 = state_32964__$1;
(statearr_32966_34045[(2)] = inst_32960);

(statearr_32966_34045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (20))){
var inst_32865 = (state_32964[(7)]);
var inst_32877 = cljs.core.first(inst_32865);
var inst_32878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32877,(0),null);
var inst_32879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32877,(1),null);
var state_32964__$1 = (function (){var statearr_32967 = state_32964;
(statearr_32967[(8)] = inst_32878);

return statearr_32967;
})();
if(cljs.core.truth_(inst_32879)){
var statearr_32968_34046 = state_32964__$1;
(statearr_32968_34046[(1)] = (22));

} else {
var statearr_32969_34047 = state_32964__$1;
(statearr_32969_34047[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (27))){
var inst_32907 = (state_32964[(9)]);
var inst_32909 = (state_32964[(10)]);
var inst_32914 = (state_32964[(11)]);
var inst_32834 = (state_32964[(12)]);
var inst_32914__$1 = cljs.core._nth(inst_32907,inst_32909);
var inst_32915 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32914__$1,inst_32834,done);
var state_32964__$1 = (function (){var statearr_32970 = state_32964;
(statearr_32970[(11)] = inst_32914__$1);

return statearr_32970;
})();
if(cljs.core.truth_(inst_32915)){
var statearr_32971_34050 = state_32964__$1;
(statearr_32971_34050[(1)] = (30));

} else {
var statearr_32972_34051 = state_32964__$1;
(statearr_32972_34051[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (1))){
var state_32964__$1 = state_32964;
var statearr_32973_34052 = state_32964__$1;
(statearr_32973_34052[(2)] = null);

(statearr_32973_34052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (24))){
var inst_32865 = (state_32964[(7)]);
var inst_32884 = (state_32964[(2)]);
var inst_32885 = cljs.core.next(inst_32865);
var inst_32843 = inst_32885;
var inst_32844 = null;
var inst_32845 = (0);
var inst_32846 = (0);
var state_32964__$1 = (function (){var statearr_32974 = state_32964;
(statearr_32974[(13)] = inst_32884);

(statearr_32974[(14)] = inst_32843);

(statearr_32974[(15)] = inst_32844);

(statearr_32974[(16)] = inst_32845);

(statearr_32974[(17)] = inst_32846);

return statearr_32974;
})();
var statearr_32975_34054 = state_32964__$1;
(statearr_32975_34054[(2)] = null);

(statearr_32975_34054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (39))){
var state_32964__$1 = state_32964;
var statearr_32979_34055 = state_32964__$1;
(statearr_32979_34055[(2)] = null);

(statearr_32979_34055[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (4))){
var inst_32834 = (state_32964[(12)]);
var inst_32834__$1 = (state_32964[(2)]);
var inst_32835 = (inst_32834__$1 == null);
var state_32964__$1 = (function (){var statearr_32980 = state_32964;
(statearr_32980[(12)] = inst_32834__$1);

return statearr_32980;
})();
if(cljs.core.truth_(inst_32835)){
var statearr_32981_34056 = state_32964__$1;
(statearr_32981_34056[(1)] = (5));

} else {
var statearr_32982_34057 = state_32964__$1;
(statearr_32982_34057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (15))){
var inst_32846 = (state_32964[(17)]);
var inst_32843 = (state_32964[(14)]);
var inst_32844 = (state_32964[(15)]);
var inst_32845 = (state_32964[(16)]);
var inst_32861 = (state_32964[(2)]);
var inst_32862 = (inst_32846 + (1));
var tmp32976 = inst_32843;
var tmp32977 = inst_32844;
var tmp32978 = inst_32845;
var inst_32843__$1 = tmp32976;
var inst_32844__$1 = tmp32977;
var inst_32845__$1 = tmp32978;
var inst_32846__$1 = inst_32862;
var state_32964__$1 = (function (){var statearr_32983 = state_32964;
(statearr_32983[(18)] = inst_32861);

(statearr_32983[(14)] = inst_32843__$1);

(statearr_32983[(15)] = inst_32844__$1);

(statearr_32983[(16)] = inst_32845__$1);

(statearr_32983[(17)] = inst_32846__$1);

return statearr_32983;
})();
var statearr_32984_34058 = state_32964__$1;
(statearr_32984_34058[(2)] = null);

(statearr_32984_34058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (21))){
var inst_32888 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_32988_34059 = state_32964__$1;
(statearr_32988_34059[(2)] = inst_32888);

(statearr_32988_34059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (31))){
var inst_32914 = (state_32964[(11)]);
var inst_32918 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32914);
var state_32964__$1 = state_32964;
var statearr_32989_34060 = state_32964__$1;
(statearr_32989_34060[(2)] = inst_32918);

(statearr_32989_34060[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (32))){
var inst_32909 = (state_32964[(10)]);
var inst_32906 = (state_32964[(19)]);
var inst_32907 = (state_32964[(9)]);
var inst_32908 = (state_32964[(20)]);
var inst_32920 = (state_32964[(2)]);
var inst_32921 = (inst_32909 + (1));
var tmp32985 = inst_32908;
var tmp32986 = inst_32906;
var tmp32987 = inst_32907;
var inst_32906__$1 = tmp32986;
var inst_32907__$1 = tmp32987;
var inst_32908__$1 = tmp32985;
var inst_32909__$1 = inst_32921;
var state_32964__$1 = (function (){var statearr_32990 = state_32964;
(statearr_32990[(21)] = inst_32920);

(statearr_32990[(19)] = inst_32906__$1);

(statearr_32990[(9)] = inst_32907__$1);

(statearr_32990[(20)] = inst_32908__$1);

(statearr_32990[(10)] = inst_32909__$1);

return statearr_32990;
})();
var statearr_32991_34061 = state_32964__$1;
(statearr_32991_34061[(2)] = null);

(statearr_32991_34061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (40))){
var inst_32933 = (state_32964[(22)]);
var inst_32937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32933);
var state_32964__$1 = state_32964;
var statearr_32992_34062 = state_32964__$1;
(statearr_32992_34062[(2)] = inst_32937);

(statearr_32992_34062[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (33))){
var inst_32924 = (state_32964[(23)]);
var inst_32926 = cljs.core.chunked_seq_QMARK_(inst_32924);
var state_32964__$1 = state_32964;
if(inst_32926){
var statearr_32993_34063 = state_32964__$1;
(statearr_32993_34063[(1)] = (36));

} else {
var statearr_32994_34064 = state_32964__$1;
(statearr_32994_34064[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (13))){
var inst_32855 = (state_32964[(24)]);
var inst_32858 = cljs.core.async.close_BANG_(inst_32855);
var state_32964__$1 = state_32964;
var statearr_32995_34065 = state_32964__$1;
(statearr_32995_34065[(2)] = inst_32858);

(statearr_32995_34065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (22))){
var inst_32878 = (state_32964[(8)]);
var inst_32881 = cljs.core.async.close_BANG_(inst_32878);
var state_32964__$1 = state_32964;
var statearr_32996_34066 = state_32964__$1;
(statearr_32996_34066[(2)] = inst_32881);

(statearr_32996_34066[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (36))){
var inst_32924 = (state_32964[(23)]);
var inst_32928 = cljs.core.chunk_first(inst_32924);
var inst_32929 = cljs.core.chunk_rest(inst_32924);
var inst_32930 = cljs.core.count(inst_32928);
var inst_32906 = inst_32929;
var inst_32907 = inst_32928;
var inst_32908 = inst_32930;
var inst_32909 = (0);
var state_32964__$1 = (function (){var statearr_32997 = state_32964;
(statearr_32997[(19)] = inst_32906);

(statearr_32997[(9)] = inst_32907);

(statearr_32997[(20)] = inst_32908);

(statearr_32997[(10)] = inst_32909);

return statearr_32997;
})();
var statearr_32998_34067 = state_32964__$1;
(statearr_32998_34067[(2)] = null);

(statearr_32998_34067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (41))){
var inst_32924 = (state_32964[(23)]);
var inst_32939 = (state_32964[(2)]);
var inst_32940 = cljs.core.next(inst_32924);
var inst_32906 = inst_32940;
var inst_32907 = null;
var inst_32908 = (0);
var inst_32909 = (0);
var state_32964__$1 = (function (){var statearr_32999 = state_32964;
(statearr_32999[(25)] = inst_32939);

(statearr_32999[(19)] = inst_32906);

(statearr_32999[(9)] = inst_32907);

(statearr_32999[(20)] = inst_32908);

(statearr_32999[(10)] = inst_32909);

return statearr_32999;
})();
var statearr_33000_34068 = state_32964__$1;
(statearr_33000_34068[(2)] = null);

(statearr_33000_34068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (43))){
var state_32964__$1 = state_32964;
var statearr_33001_34069 = state_32964__$1;
(statearr_33001_34069[(2)] = null);

(statearr_33001_34069[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (29))){
var inst_32948 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_33002_34070 = state_32964__$1;
(statearr_33002_34070[(2)] = inst_32948);

(statearr_33002_34070[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (44))){
var inst_32957 = (state_32964[(2)]);
var state_32964__$1 = (function (){var statearr_33003 = state_32964;
(statearr_33003[(26)] = inst_32957);

return statearr_33003;
})();
var statearr_33004_34071 = state_32964__$1;
(statearr_33004_34071[(2)] = null);

(statearr_33004_34071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (6))){
var inst_32898 = (state_32964[(27)]);
var inst_32897 = cljs.core.deref(cs);
var inst_32898__$1 = cljs.core.keys(inst_32897);
var inst_32899 = cljs.core.count(inst_32898__$1);
var inst_32900 = cljs.core.reset_BANG_(dctr,inst_32899);
var inst_32905 = cljs.core.seq(inst_32898__$1);
var inst_32906 = inst_32905;
var inst_32907 = null;
var inst_32908 = (0);
var inst_32909 = (0);
var state_32964__$1 = (function (){var statearr_33005 = state_32964;
(statearr_33005[(27)] = inst_32898__$1);

(statearr_33005[(28)] = inst_32900);

(statearr_33005[(19)] = inst_32906);

(statearr_33005[(9)] = inst_32907);

(statearr_33005[(20)] = inst_32908);

(statearr_33005[(10)] = inst_32909);

return statearr_33005;
})();
var statearr_33006_34072 = state_32964__$1;
(statearr_33006_34072[(2)] = null);

(statearr_33006_34072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (28))){
var inst_32906 = (state_32964[(19)]);
var inst_32924 = (state_32964[(23)]);
var inst_32924__$1 = cljs.core.seq(inst_32906);
var state_32964__$1 = (function (){var statearr_33007 = state_32964;
(statearr_33007[(23)] = inst_32924__$1);

return statearr_33007;
})();
if(inst_32924__$1){
var statearr_33008_34074 = state_32964__$1;
(statearr_33008_34074[(1)] = (33));

} else {
var statearr_33009_34078 = state_32964__$1;
(statearr_33009_34078[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (25))){
var inst_32909 = (state_32964[(10)]);
var inst_32908 = (state_32964[(20)]);
var inst_32911 = (inst_32909 < inst_32908);
var inst_32912 = inst_32911;
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32912)){
var statearr_33010_34079 = state_32964__$1;
(statearr_33010_34079[(1)] = (27));

} else {
var statearr_33011_34080 = state_32964__$1;
(statearr_33011_34080[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (34))){
var state_32964__$1 = state_32964;
var statearr_33012_34081 = state_32964__$1;
(statearr_33012_34081[(2)] = null);

(statearr_33012_34081[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (17))){
var state_32964__$1 = state_32964;
var statearr_33013_34082 = state_32964__$1;
(statearr_33013_34082[(2)] = null);

(statearr_33013_34082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (3))){
var inst_32962 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32964__$1,inst_32962);
} else {
if((state_val_32965 === (12))){
var inst_32893 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_33014_34083 = state_32964__$1;
(statearr_33014_34083[(2)] = inst_32893);

(statearr_33014_34083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (2))){
var state_32964__$1 = state_32964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32964__$1,(4),ch);
} else {
if((state_val_32965 === (23))){
var state_32964__$1 = state_32964;
var statearr_33015_34084 = state_32964__$1;
(statearr_33015_34084[(2)] = null);

(statearr_33015_34084[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (35))){
var inst_32946 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_33016_34085 = state_32964__$1;
(statearr_33016_34085[(2)] = inst_32946);

(statearr_33016_34085[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (19))){
var inst_32865 = (state_32964[(7)]);
var inst_32869 = cljs.core.chunk_first(inst_32865);
var inst_32870 = cljs.core.chunk_rest(inst_32865);
var inst_32871 = cljs.core.count(inst_32869);
var inst_32843 = inst_32870;
var inst_32844 = inst_32869;
var inst_32845 = inst_32871;
var inst_32846 = (0);
var state_32964__$1 = (function (){var statearr_33017 = state_32964;
(statearr_33017[(14)] = inst_32843);

(statearr_33017[(15)] = inst_32844);

(statearr_33017[(16)] = inst_32845);

(statearr_33017[(17)] = inst_32846);

return statearr_33017;
})();
var statearr_33018_34086 = state_32964__$1;
(statearr_33018_34086[(2)] = null);

(statearr_33018_34086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (11))){
var inst_32843 = (state_32964[(14)]);
var inst_32865 = (state_32964[(7)]);
var inst_32865__$1 = cljs.core.seq(inst_32843);
var state_32964__$1 = (function (){var statearr_33019 = state_32964;
(statearr_33019[(7)] = inst_32865__$1);

return statearr_33019;
})();
if(inst_32865__$1){
var statearr_33020_34087 = state_32964__$1;
(statearr_33020_34087[(1)] = (16));

} else {
var statearr_33021_34088 = state_32964__$1;
(statearr_33021_34088[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (9))){
var inst_32895 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_33022_34089 = state_32964__$1;
(statearr_33022_34089[(2)] = inst_32895);

(statearr_33022_34089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (5))){
var inst_32841 = cljs.core.deref(cs);
var inst_32842 = cljs.core.seq(inst_32841);
var inst_32843 = inst_32842;
var inst_32844 = null;
var inst_32845 = (0);
var inst_32846 = (0);
var state_32964__$1 = (function (){var statearr_33023 = state_32964;
(statearr_33023[(14)] = inst_32843);

(statearr_33023[(15)] = inst_32844);

(statearr_33023[(16)] = inst_32845);

(statearr_33023[(17)] = inst_32846);

return statearr_33023;
})();
var statearr_33024_34090 = state_32964__$1;
(statearr_33024_34090[(2)] = null);

(statearr_33024_34090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (14))){
var state_32964__$1 = state_32964;
var statearr_33025_34091 = state_32964__$1;
(statearr_33025_34091[(2)] = null);

(statearr_33025_34091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (45))){
var inst_32954 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_33026_34092 = state_32964__$1;
(statearr_33026_34092[(2)] = inst_32954);

(statearr_33026_34092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (26))){
var inst_32898 = (state_32964[(27)]);
var inst_32950 = (state_32964[(2)]);
var inst_32951 = cljs.core.seq(inst_32898);
var state_32964__$1 = (function (){var statearr_33027 = state_32964;
(statearr_33027[(29)] = inst_32950);

return statearr_33027;
})();
if(inst_32951){
var statearr_33028_34093 = state_32964__$1;
(statearr_33028_34093[(1)] = (42));

} else {
var statearr_33029_34095 = state_32964__$1;
(statearr_33029_34095[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (16))){
var inst_32865 = (state_32964[(7)]);
var inst_32867 = cljs.core.chunked_seq_QMARK_(inst_32865);
var state_32964__$1 = state_32964;
if(inst_32867){
var statearr_33030_34099 = state_32964__$1;
(statearr_33030_34099[(1)] = (19));

} else {
var statearr_33031_34100 = state_32964__$1;
(statearr_33031_34100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (38))){
var inst_32943 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_33032_34101 = state_32964__$1;
(statearr_33032_34101[(2)] = inst_32943);

(statearr_33032_34101[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (30))){
var state_32964__$1 = state_32964;
var statearr_33033_34103 = state_32964__$1;
(statearr_33033_34103[(2)] = null);

(statearr_33033_34103[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (10))){
var inst_32844 = (state_32964[(15)]);
var inst_32846 = (state_32964[(17)]);
var inst_32854 = cljs.core._nth(inst_32844,inst_32846);
var inst_32855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32854,(0),null);
var inst_32856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32854,(1),null);
var state_32964__$1 = (function (){var statearr_33034 = state_32964;
(statearr_33034[(24)] = inst_32855);

return statearr_33034;
})();
if(cljs.core.truth_(inst_32856)){
var statearr_33035_34107 = state_32964__$1;
(statearr_33035_34107[(1)] = (13));

} else {
var statearr_33036_34108 = state_32964__$1;
(statearr_33036_34108[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (18))){
var inst_32891 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_33037_34113 = state_32964__$1;
(statearr_33037_34113[(2)] = inst_32891);

(statearr_33037_34113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (42))){
var state_32964__$1 = state_32964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32964__$1,(45),dchan);
} else {
if((state_val_32965 === (37))){
var inst_32924 = (state_32964[(23)]);
var inst_32933 = (state_32964[(22)]);
var inst_32834 = (state_32964[(12)]);
var inst_32933__$1 = cljs.core.first(inst_32924);
var inst_32934 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32933__$1,inst_32834,done);
var state_32964__$1 = (function (){var statearr_33038 = state_32964;
(statearr_33038[(22)] = inst_32933__$1);

return statearr_33038;
})();
if(cljs.core.truth_(inst_32934)){
var statearr_33039_34114 = state_32964__$1;
(statearr_33039_34114[(1)] = (39));

} else {
var statearr_33040_34116 = state_32964__$1;
(statearr_33040_34116[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (8))){
var inst_32846 = (state_32964[(17)]);
var inst_32845 = (state_32964[(16)]);
var inst_32848 = (inst_32846 < inst_32845);
var inst_32849 = inst_32848;
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32849)){
var statearr_33041_34118 = state_32964__$1;
(statearr_33041_34118[(1)] = (10));

} else {
var statearr_33042_34119 = state_32964__$1;
(statearr_33042_34119[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32291__auto__ = null;
var cljs$core$async$mult_$_state_machine__32291__auto____0 = (function (){
var statearr_33043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33043[(0)] = cljs$core$async$mult_$_state_machine__32291__auto__);

(statearr_33043[(1)] = (1));

return statearr_33043;
});
var cljs$core$async$mult_$_state_machine__32291__auto____1 = (function (state_32964){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_32964);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e33044){var ex__32294__auto__ = e33044;
var statearr_33045_34120 = state_32964;
(statearr_33045_34120[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_32964[(4)]))){
var statearr_33046_34121 = state_32964;
(statearr_33046_34121[(1)] = cljs.core.first((state_32964[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34122 = state_32964;
state_32964 = G__34122;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32291__auto__ = function(state_32964){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32291__auto____1.call(this,state_32964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32291__auto____0;
cljs$core$async$mult_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32291__auto____1;
return cljs$core$async$mult_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_33047 = f__32362__auto__();
(statearr_33047[(6)] = c__32361__auto___34044);

return statearr_33047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
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
var G__33049 = arguments.length;
switch (G__33049) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34124 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34124(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34125 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34125(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34130 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34130(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34133 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34133(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34134 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34134(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34135 = arguments.length;
var i__5750__auto___34136 = (0);
while(true){
if((i__5750__auto___34136 < len__5749__auto___34135)){
args__5755__auto__.push((arguments[i__5750__auto___34136]));

var G__34137 = (i__5750__auto___34136 + (1));
i__5750__auto___34136 = G__34137;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33054){
var map__33055 = p__33054;
var map__33055__$1 = cljs.core.__destructure_map(map__33055);
var opts = map__33055__$1;
var statearr_33056_34138 = state;
(statearr_33056_34138[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33057_34139 = state;
(statearr_33057_34139[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33058_34140 = state;
(statearr_33058_34140[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33050){
var G__33051 = cljs.core.first(seq33050);
var seq33050__$1 = cljs.core.next(seq33050);
var G__33052 = cljs.core.first(seq33050__$1);
var seq33050__$2 = cljs.core.next(seq33050__$1);
var G__33053 = cljs.core.first(seq33050__$2);
var seq33050__$3 = cljs.core.next(seq33050__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33051,G__33052,G__33053,seq33050__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33059 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33060){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33060 = meta33060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33061,meta33060__$1){
var self__ = this;
var _33061__$1 = this;
return (new cljs.core.async.t_cljs$core$async33059(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33060__$1));
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
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33059.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33060","meta33060",1895306663,null)], null);
}));

(cljs.core.async.t_cljs$core$async33059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33059");

(cljs.core.async.t_cljs$core$async33059.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33059.
 */
cljs.core.async.__GT_t_cljs$core$async33059 = (function cljs$core$async$__GT_t_cljs$core$async33059(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33060){
return (new cljs.core.async.t_cljs$core$async33059(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33060));
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
var m = (new cljs.core.async.t_cljs$core$async33059(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32361__auto___34141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_33129){
var state_val_33130 = (state_33129[(1)]);
if((state_val_33130 === (7))){
var inst_33089 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
if(cljs.core.truth_(inst_33089)){
var statearr_33131_34142 = state_33129__$1;
(statearr_33131_34142[(1)] = (8));

} else {
var statearr_33132_34143 = state_33129__$1;
(statearr_33132_34143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (20))){
var inst_33082 = (state_33129[(7)]);
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33129__$1,(23),out,inst_33082);
} else {
if((state_val_33130 === (1))){
var inst_33065 = calc_state();
var inst_33066 = cljs.core.__destructure_map(inst_33065);
var inst_33067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33066,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33066,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33066,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33070 = inst_33065;
var state_33129__$1 = (function (){var statearr_33133 = state_33129;
(statearr_33133[(8)] = inst_33067);

(statearr_33133[(9)] = inst_33068);

(statearr_33133[(10)] = inst_33069);

(statearr_33133[(11)] = inst_33070);

return statearr_33133;
})();
var statearr_33134_34144 = state_33129__$1;
(statearr_33134_34144[(2)] = null);

(statearr_33134_34144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (24))){
var inst_33073 = (state_33129[(12)]);
var inst_33070 = inst_33073;
var state_33129__$1 = (function (){var statearr_33135 = state_33129;
(statearr_33135[(11)] = inst_33070);

return statearr_33135;
})();
var statearr_33136_34145 = state_33129__$1;
(statearr_33136_34145[(2)] = null);

(statearr_33136_34145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (4))){
var inst_33082 = (state_33129[(7)]);
var inst_33084 = (state_33129[(13)]);
var inst_33081 = (state_33129[(2)]);
var inst_33082__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33081,(0),null);
var inst_33083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33081,(1),null);
var inst_33084__$1 = (inst_33082__$1 == null);
var state_33129__$1 = (function (){var statearr_33137 = state_33129;
(statearr_33137[(7)] = inst_33082__$1);

(statearr_33137[(14)] = inst_33083);

(statearr_33137[(13)] = inst_33084__$1);

return statearr_33137;
})();
if(cljs.core.truth_(inst_33084__$1)){
var statearr_33138_34147 = state_33129__$1;
(statearr_33138_34147[(1)] = (5));

} else {
var statearr_33139_34148 = state_33129__$1;
(statearr_33139_34148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (15))){
var inst_33074 = (state_33129[(15)]);
var inst_33103 = (state_33129[(16)]);
var inst_33103__$1 = cljs.core.empty_QMARK_(inst_33074);
var state_33129__$1 = (function (){var statearr_33140 = state_33129;
(statearr_33140[(16)] = inst_33103__$1);

return statearr_33140;
})();
if(inst_33103__$1){
var statearr_33141_34149 = state_33129__$1;
(statearr_33141_34149[(1)] = (17));

} else {
var statearr_33142_34150 = state_33129__$1;
(statearr_33142_34150[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (21))){
var inst_33073 = (state_33129[(12)]);
var inst_33070 = inst_33073;
var state_33129__$1 = (function (){var statearr_33143 = state_33129;
(statearr_33143[(11)] = inst_33070);

return statearr_33143;
})();
var statearr_33144_34151 = state_33129__$1;
(statearr_33144_34151[(2)] = null);

(statearr_33144_34151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (13))){
var inst_33096 = (state_33129[(2)]);
var inst_33097 = calc_state();
var inst_33070 = inst_33097;
var state_33129__$1 = (function (){var statearr_33145 = state_33129;
(statearr_33145[(17)] = inst_33096);

(statearr_33145[(11)] = inst_33070);

return statearr_33145;
})();
var statearr_33146_34152 = state_33129__$1;
(statearr_33146_34152[(2)] = null);

(statearr_33146_34152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (22))){
var inst_33123 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33147_34153 = state_33129__$1;
(statearr_33147_34153[(2)] = inst_33123);

(statearr_33147_34153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (6))){
var inst_33083 = (state_33129[(14)]);
var inst_33087 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33083,change);
var state_33129__$1 = state_33129;
var statearr_33148_34154 = state_33129__$1;
(statearr_33148_34154[(2)] = inst_33087);

(statearr_33148_34154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (25))){
var state_33129__$1 = state_33129;
var statearr_33149_34155 = state_33129__$1;
(statearr_33149_34155[(2)] = null);

(statearr_33149_34155[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (17))){
var inst_33075 = (state_33129[(18)]);
var inst_33083 = (state_33129[(14)]);
var inst_33105 = (inst_33075.cljs$core$IFn$_invoke$arity$1 ? inst_33075.cljs$core$IFn$_invoke$arity$1(inst_33083) : inst_33075.call(null,inst_33083));
var inst_33106 = cljs.core.not(inst_33105);
var state_33129__$1 = state_33129;
var statearr_33150_34156 = state_33129__$1;
(statearr_33150_34156[(2)] = inst_33106);

(statearr_33150_34156[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (3))){
var inst_33127 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33129__$1,inst_33127);
} else {
if((state_val_33130 === (12))){
var state_33129__$1 = state_33129;
var statearr_33151_34157 = state_33129__$1;
(statearr_33151_34157[(2)] = null);

(statearr_33151_34157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (2))){
var inst_33070 = (state_33129[(11)]);
var inst_33073 = (state_33129[(12)]);
var inst_33073__$1 = cljs.core.__destructure_map(inst_33070);
var inst_33074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33073__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33073__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33073__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33129__$1 = (function (){var statearr_33152 = state_33129;
(statearr_33152[(12)] = inst_33073__$1);

(statearr_33152[(15)] = inst_33074);

(statearr_33152[(18)] = inst_33075);

return statearr_33152;
})();
return cljs.core.async.ioc_alts_BANG_(state_33129__$1,(4),inst_33076);
} else {
if((state_val_33130 === (23))){
var inst_33114 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
if(cljs.core.truth_(inst_33114)){
var statearr_33153_34158 = state_33129__$1;
(statearr_33153_34158[(1)] = (24));

} else {
var statearr_33154_34159 = state_33129__$1;
(statearr_33154_34159[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (19))){
var inst_33109 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33155_34160 = state_33129__$1;
(statearr_33155_34160[(2)] = inst_33109);

(statearr_33155_34160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (11))){
var inst_33083 = (state_33129[(14)]);
var inst_33093 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33083);
var state_33129__$1 = state_33129;
var statearr_33156_34161 = state_33129__$1;
(statearr_33156_34161[(2)] = inst_33093);

(statearr_33156_34161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (9))){
var inst_33074 = (state_33129[(15)]);
var inst_33083 = (state_33129[(14)]);
var inst_33100 = (state_33129[(19)]);
var inst_33100__$1 = (inst_33074.cljs$core$IFn$_invoke$arity$1 ? inst_33074.cljs$core$IFn$_invoke$arity$1(inst_33083) : inst_33074.call(null,inst_33083));
var state_33129__$1 = (function (){var statearr_33157 = state_33129;
(statearr_33157[(19)] = inst_33100__$1);

return statearr_33157;
})();
if(cljs.core.truth_(inst_33100__$1)){
var statearr_33158_34162 = state_33129__$1;
(statearr_33158_34162[(1)] = (14));

} else {
var statearr_33159_34163 = state_33129__$1;
(statearr_33159_34163[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (5))){
var inst_33084 = (state_33129[(13)]);
var state_33129__$1 = state_33129;
var statearr_33160_34165 = state_33129__$1;
(statearr_33160_34165[(2)] = inst_33084);

(statearr_33160_34165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (14))){
var inst_33100 = (state_33129[(19)]);
var state_33129__$1 = state_33129;
var statearr_33161_34166 = state_33129__$1;
(statearr_33161_34166[(2)] = inst_33100);

(statearr_33161_34166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (26))){
var inst_33119 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33162_34167 = state_33129__$1;
(statearr_33162_34167[(2)] = inst_33119);

(statearr_33162_34167[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (16))){
var inst_33111 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
if(cljs.core.truth_(inst_33111)){
var statearr_33163_34168 = state_33129__$1;
(statearr_33163_34168[(1)] = (20));

} else {
var statearr_33164_34169 = state_33129__$1;
(statearr_33164_34169[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (10))){
var inst_33125 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33165_34170 = state_33129__$1;
(statearr_33165_34170[(2)] = inst_33125);

(statearr_33165_34170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (18))){
var inst_33103 = (state_33129[(16)]);
var state_33129__$1 = state_33129;
var statearr_33166_34171 = state_33129__$1;
(statearr_33166_34171[(2)] = inst_33103);

(statearr_33166_34171[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (8))){
var inst_33082 = (state_33129[(7)]);
var inst_33091 = (inst_33082 == null);
var state_33129__$1 = state_33129;
if(cljs.core.truth_(inst_33091)){
var statearr_33167_34173 = state_33129__$1;
(statearr_33167_34173[(1)] = (11));

} else {
var statearr_33168_34174 = state_33129__$1;
(statearr_33168_34174[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32291__auto__ = null;
var cljs$core$async$mix_$_state_machine__32291__auto____0 = (function (){
var statearr_33169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33169[(0)] = cljs$core$async$mix_$_state_machine__32291__auto__);

(statearr_33169[(1)] = (1));

return statearr_33169;
});
var cljs$core$async$mix_$_state_machine__32291__auto____1 = (function (state_33129){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_33129);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e33170){var ex__32294__auto__ = e33170;
var statearr_33171_34176 = state_33129;
(statearr_33171_34176[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_33129[(4)]))){
var statearr_33172_34177 = state_33129;
(statearr_33172_34177[(1)] = cljs.core.first((state_33129[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34178 = state_33129;
state_33129 = G__34178;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32291__auto__ = function(state_33129){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32291__auto____1.call(this,state_33129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32291__auto____0;
cljs$core$async$mix_$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32291__auto____1;
return cljs$core$async$mix_$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_33173 = f__32362__auto__();
(statearr_33173[(6)] = c__32361__auto___34141);

return statearr_33173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34179 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34179(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34180 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34180(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34181 = (function() {
var G__34182 = null;
var G__34182__1 = (function (p){
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
var G__34182__2 = (function (p,v){
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
G__34182 = function(p,v){
switch(arguments.length){
case 1:
return G__34182__1.call(this,p);
case 2:
return G__34182__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34182.cljs$core$IFn$_invoke$arity$1 = G__34182__1;
G__34182.cljs$core$IFn$_invoke$arity$2 = G__34182__2;
return G__34182;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33175 = arguments.length;
switch (G__33175) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34181(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34181(p,v);
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
cljs.core.async.t_cljs$core$async33179 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33180){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33180 = meta33180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33181,meta33180__$1){
var self__ = this;
var _33181__$1 = this;
return (new cljs.core.async.t_cljs$core$async33179(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33180__$1));
}));

(cljs.core.async.t_cljs$core$async33179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33181){
var self__ = this;
var _33181__$1 = this;
return self__.meta33180;
}));

(cljs.core.async.t_cljs$core$async33179.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33179.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33179.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33179.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33179.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33179.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33179.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33180","meta33180",-1081853356,null)], null);
}));

(cljs.core.async.t_cljs$core$async33179.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33179");

(cljs.core.async.t_cljs$core$async33179.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33179");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33179.
 */
cljs.core.async.__GT_t_cljs$core$async33179 = (function cljs$core$async$__GT_t_cljs$core$async33179(ch,topic_fn,buf_fn,mults,ensure_mult,meta33180){
return (new cljs.core.async.t_cljs$core$async33179(ch,topic_fn,buf_fn,mults,ensure_mult,meta33180));
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
var G__33178 = arguments.length;
switch (G__33178) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33176_SHARP_){
if(cljs.core.truth_((p1__33176_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33176_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33176_SHARP_.call(null,topic)))){
return p1__33176_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33176_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33179(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32361__auto___34185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_33253){
var state_val_33254 = (state_33253[(1)]);
if((state_val_33254 === (7))){
var inst_33249 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33255_34186 = state_33253__$1;
(statearr_33255_34186[(2)] = inst_33249);

(statearr_33255_34186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (20))){
var state_33253__$1 = state_33253;
var statearr_33256_34187 = state_33253__$1;
(statearr_33256_34187[(2)] = null);

(statearr_33256_34187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (1))){
var state_33253__$1 = state_33253;
var statearr_33257_34188 = state_33253__$1;
(statearr_33257_34188[(2)] = null);

(statearr_33257_34188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (24))){
var inst_33232 = (state_33253[(7)]);
var inst_33241 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33232);
var state_33253__$1 = state_33253;
var statearr_33258_34189 = state_33253__$1;
(statearr_33258_34189[(2)] = inst_33241);

(statearr_33258_34189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (4))){
var inst_33184 = (state_33253[(8)]);
var inst_33184__$1 = (state_33253[(2)]);
var inst_33185 = (inst_33184__$1 == null);
var state_33253__$1 = (function (){var statearr_33259 = state_33253;
(statearr_33259[(8)] = inst_33184__$1);

return statearr_33259;
})();
if(cljs.core.truth_(inst_33185)){
var statearr_33260_34190 = state_33253__$1;
(statearr_33260_34190[(1)] = (5));

} else {
var statearr_33261_34191 = state_33253__$1;
(statearr_33261_34191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (15))){
var inst_33226 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33262_34192 = state_33253__$1;
(statearr_33262_34192[(2)] = inst_33226);

(statearr_33262_34192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (21))){
var inst_33246 = (state_33253[(2)]);
var state_33253__$1 = (function (){var statearr_33263 = state_33253;
(statearr_33263[(9)] = inst_33246);

return statearr_33263;
})();
var statearr_33264_34193 = state_33253__$1;
(statearr_33264_34193[(2)] = null);

(statearr_33264_34193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (13))){
var inst_33208 = (state_33253[(10)]);
var inst_33210 = cljs.core.chunked_seq_QMARK_(inst_33208);
var state_33253__$1 = state_33253;
if(inst_33210){
var statearr_33265_34194 = state_33253__$1;
(statearr_33265_34194[(1)] = (16));

} else {
var statearr_33266_34195 = state_33253__$1;
(statearr_33266_34195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (22))){
var inst_33238 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
if(cljs.core.truth_(inst_33238)){
var statearr_33267_34196 = state_33253__$1;
(statearr_33267_34196[(1)] = (23));

} else {
var statearr_33268_34197 = state_33253__$1;
(statearr_33268_34197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (6))){
var inst_33184 = (state_33253[(8)]);
var inst_33232 = (state_33253[(7)]);
var inst_33234 = (state_33253[(11)]);
var inst_33232__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33184) : topic_fn.call(null,inst_33184));
var inst_33233 = cljs.core.deref(mults);
var inst_33234__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33233,inst_33232__$1);
var state_33253__$1 = (function (){var statearr_33269 = state_33253;
(statearr_33269[(7)] = inst_33232__$1);

(statearr_33269[(11)] = inst_33234__$1);

return statearr_33269;
})();
if(cljs.core.truth_(inst_33234__$1)){
var statearr_33270_34200 = state_33253__$1;
(statearr_33270_34200[(1)] = (19));

} else {
var statearr_33271_34201 = state_33253__$1;
(statearr_33271_34201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (25))){
var inst_33243 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33272_34202 = state_33253__$1;
(statearr_33272_34202[(2)] = inst_33243);

(statearr_33272_34202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (17))){
var inst_33208 = (state_33253[(10)]);
var inst_33217 = cljs.core.first(inst_33208);
var inst_33218 = cljs.core.async.muxch_STAR_(inst_33217);
var inst_33219 = cljs.core.async.close_BANG_(inst_33218);
var inst_33220 = cljs.core.next(inst_33208);
var inst_33194 = inst_33220;
var inst_33195 = null;
var inst_33196 = (0);
var inst_33197 = (0);
var state_33253__$1 = (function (){var statearr_33273 = state_33253;
(statearr_33273[(12)] = inst_33219);

(statearr_33273[(13)] = inst_33194);

(statearr_33273[(14)] = inst_33195);

(statearr_33273[(15)] = inst_33196);

(statearr_33273[(16)] = inst_33197);

return statearr_33273;
})();
var statearr_33274_34203 = state_33253__$1;
(statearr_33274_34203[(2)] = null);

(statearr_33274_34203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (3))){
var inst_33251 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33253__$1,inst_33251);
} else {
if((state_val_33254 === (12))){
var inst_33228 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33275_34204 = state_33253__$1;
(statearr_33275_34204[(2)] = inst_33228);

(statearr_33275_34204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (2))){
var state_33253__$1 = state_33253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33253__$1,(4),ch);
} else {
if((state_val_33254 === (23))){
var state_33253__$1 = state_33253;
var statearr_33276_34205 = state_33253__$1;
(statearr_33276_34205[(2)] = null);

(statearr_33276_34205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (19))){
var inst_33234 = (state_33253[(11)]);
var inst_33184 = (state_33253[(8)]);
var inst_33236 = cljs.core.async.muxch_STAR_(inst_33234);
var state_33253__$1 = state_33253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33253__$1,(22),inst_33236,inst_33184);
} else {
if((state_val_33254 === (11))){
var inst_33194 = (state_33253[(13)]);
var inst_33208 = (state_33253[(10)]);
var inst_33208__$1 = cljs.core.seq(inst_33194);
var state_33253__$1 = (function (){var statearr_33277 = state_33253;
(statearr_33277[(10)] = inst_33208__$1);

return statearr_33277;
})();
if(inst_33208__$1){
var statearr_33278_34206 = state_33253__$1;
(statearr_33278_34206[(1)] = (13));

} else {
var statearr_33279_34207 = state_33253__$1;
(statearr_33279_34207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (9))){
var inst_33230 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33280_34208 = state_33253__$1;
(statearr_33280_34208[(2)] = inst_33230);

(statearr_33280_34208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (5))){
var inst_33191 = cljs.core.deref(mults);
var inst_33192 = cljs.core.vals(inst_33191);
var inst_33193 = cljs.core.seq(inst_33192);
var inst_33194 = inst_33193;
var inst_33195 = null;
var inst_33196 = (0);
var inst_33197 = (0);
var state_33253__$1 = (function (){var statearr_33281 = state_33253;
(statearr_33281[(13)] = inst_33194);

(statearr_33281[(14)] = inst_33195);

(statearr_33281[(15)] = inst_33196);

(statearr_33281[(16)] = inst_33197);

return statearr_33281;
})();
var statearr_33282_34209 = state_33253__$1;
(statearr_33282_34209[(2)] = null);

(statearr_33282_34209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (14))){
var state_33253__$1 = state_33253;
var statearr_33286_34210 = state_33253__$1;
(statearr_33286_34210[(2)] = null);

(statearr_33286_34210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (16))){
var inst_33208 = (state_33253[(10)]);
var inst_33212 = cljs.core.chunk_first(inst_33208);
var inst_33213 = cljs.core.chunk_rest(inst_33208);
var inst_33214 = cljs.core.count(inst_33212);
var inst_33194 = inst_33213;
var inst_33195 = inst_33212;
var inst_33196 = inst_33214;
var inst_33197 = (0);
var state_33253__$1 = (function (){var statearr_33287 = state_33253;
(statearr_33287[(13)] = inst_33194);

(statearr_33287[(14)] = inst_33195);

(statearr_33287[(15)] = inst_33196);

(statearr_33287[(16)] = inst_33197);

return statearr_33287;
})();
var statearr_33288_34218 = state_33253__$1;
(statearr_33288_34218[(2)] = null);

(statearr_33288_34218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (10))){
var inst_33195 = (state_33253[(14)]);
var inst_33197 = (state_33253[(16)]);
var inst_33194 = (state_33253[(13)]);
var inst_33196 = (state_33253[(15)]);
var inst_33202 = cljs.core._nth(inst_33195,inst_33197);
var inst_33203 = cljs.core.async.muxch_STAR_(inst_33202);
var inst_33204 = cljs.core.async.close_BANG_(inst_33203);
var inst_33205 = (inst_33197 + (1));
var tmp33283 = inst_33196;
var tmp33284 = inst_33195;
var tmp33285 = inst_33194;
var inst_33194__$1 = tmp33285;
var inst_33195__$1 = tmp33284;
var inst_33196__$1 = tmp33283;
var inst_33197__$1 = inst_33205;
var state_33253__$1 = (function (){var statearr_33289 = state_33253;
(statearr_33289[(17)] = inst_33204);

(statearr_33289[(13)] = inst_33194__$1);

(statearr_33289[(14)] = inst_33195__$1);

(statearr_33289[(15)] = inst_33196__$1);

(statearr_33289[(16)] = inst_33197__$1);

return statearr_33289;
})();
var statearr_33290_34221 = state_33253__$1;
(statearr_33290_34221[(2)] = null);

(statearr_33290_34221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (18))){
var inst_33223 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33291_34222 = state_33253__$1;
(statearr_33291_34222[(2)] = inst_33223);

(statearr_33291_34222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (8))){
var inst_33197 = (state_33253[(16)]);
var inst_33196 = (state_33253[(15)]);
var inst_33199 = (inst_33197 < inst_33196);
var inst_33200 = inst_33199;
var state_33253__$1 = state_33253;
if(cljs.core.truth_(inst_33200)){
var statearr_33292_34223 = state_33253__$1;
(statearr_33292_34223[(1)] = (10));

} else {
var statearr_33293_34224 = state_33253__$1;
(statearr_33293_34224[(1)] = (11));

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
var cljs$core$async$state_machine__32291__auto__ = null;
var cljs$core$async$state_machine__32291__auto____0 = (function (){
var statearr_33294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33294[(0)] = cljs$core$async$state_machine__32291__auto__);

(statearr_33294[(1)] = (1));

return statearr_33294;
});
var cljs$core$async$state_machine__32291__auto____1 = (function (state_33253){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_33253);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e33295){var ex__32294__auto__ = e33295;
var statearr_33296_34225 = state_33253;
(statearr_33296_34225[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_33253[(4)]))){
var statearr_33297_34226 = state_33253;
(statearr_33297_34226[(1)] = cljs.core.first((state_33253[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34227 = state_33253;
state_33253 = G__34227;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$state_machine__32291__auto__ = function(state_33253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32291__auto____1.call(this,state_33253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32291__auto____0;
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32291__auto____1;
return cljs$core$async$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_33298 = f__32362__auto__();
(statearr_33298[(6)] = c__32361__auto___34185);

return statearr_33298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
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
var G__33300 = arguments.length;
switch (G__33300) {
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
var G__33302 = arguments.length;
switch (G__33302) {
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
var G__33304 = arguments.length;
switch (G__33304) {
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
var c__32361__auto___34232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_33347){
var state_val_33348 = (state_33347[(1)]);
if((state_val_33348 === (7))){
var state_33347__$1 = state_33347;
var statearr_33349_34234 = state_33347__$1;
(statearr_33349_34234[(2)] = null);

(statearr_33349_34234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (1))){
var state_33347__$1 = state_33347;
var statearr_33350_34235 = state_33347__$1;
(statearr_33350_34235[(2)] = null);

(statearr_33350_34235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (4))){
var inst_33308 = (state_33347[(7)]);
var inst_33307 = (state_33347[(8)]);
var inst_33310 = (inst_33308 < inst_33307);
var state_33347__$1 = state_33347;
if(cljs.core.truth_(inst_33310)){
var statearr_33351_34238 = state_33347__$1;
(statearr_33351_34238[(1)] = (6));

} else {
var statearr_33352_34239 = state_33347__$1;
(statearr_33352_34239[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (15))){
var inst_33333 = (state_33347[(9)]);
var inst_33338 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33333);
var state_33347__$1 = state_33347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33347__$1,(17),out,inst_33338);
} else {
if((state_val_33348 === (13))){
var inst_33333 = (state_33347[(9)]);
var inst_33333__$1 = (state_33347[(2)]);
var inst_33334 = cljs.core.some(cljs.core.nil_QMARK_,inst_33333__$1);
var state_33347__$1 = (function (){var statearr_33353 = state_33347;
(statearr_33353[(9)] = inst_33333__$1);

return statearr_33353;
})();
if(cljs.core.truth_(inst_33334)){
var statearr_33354_34242 = state_33347__$1;
(statearr_33354_34242[(1)] = (14));

} else {
var statearr_33355_34243 = state_33347__$1;
(statearr_33355_34243[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (6))){
var state_33347__$1 = state_33347;
var statearr_33356_34244 = state_33347__$1;
(statearr_33356_34244[(2)] = null);

(statearr_33356_34244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (17))){
var inst_33340 = (state_33347[(2)]);
var state_33347__$1 = (function (){var statearr_33358 = state_33347;
(statearr_33358[(10)] = inst_33340);

return statearr_33358;
})();
var statearr_33359_34247 = state_33347__$1;
(statearr_33359_34247[(2)] = null);

(statearr_33359_34247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (3))){
var inst_33345 = (state_33347[(2)]);
var state_33347__$1 = state_33347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33347__$1,inst_33345);
} else {
if((state_val_33348 === (12))){
var _ = (function (){var statearr_33360 = state_33347;
(statearr_33360[(4)] = cljs.core.rest((state_33347[(4)])));

return statearr_33360;
})();
var state_33347__$1 = state_33347;
var ex33357 = (state_33347__$1[(2)]);
var statearr_33361_34248 = state_33347__$1;
(statearr_33361_34248[(5)] = ex33357);


if((ex33357 instanceof Object)){
var statearr_33362_34249 = state_33347__$1;
(statearr_33362_34249[(1)] = (11));

(statearr_33362_34249[(5)] = null);

} else {
throw ex33357;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (2))){
var inst_33306 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33307 = cnt;
var inst_33308 = (0);
var state_33347__$1 = (function (){var statearr_33363 = state_33347;
(statearr_33363[(11)] = inst_33306);

(statearr_33363[(8)] = inst_33307);

(statearr_33363[(7)] = inst_33308);

return statearr_33363;
})();
var statearr_33364_34250 = state_33347__$1;
(statearr_33364_34250[(2)] = null);

(statearr_33364_34250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (11))){
var inst_33312 = (state_33347[(2)]);
var inst_33313 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33347__$1 = (function (){var statearr_33365 = state_33347;
(statearr_33365[(12)] = inst_33312);

return statearr_33365;
})();
var statearr_33366_34251 = state_33347__$1;
(statearr_33366_34251[(2)] = inst_33313);

(statearr_33366_34251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (9))){
var inst_33308 = (state_33347[(7)]);
var _ = (function (){var statearr_33367 = state_33347;
(statearr_33367[(4)] = cljs.core.cons((12),(state_33347[(4)])));

return statearr_33367;
})();
var inst_33319 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33308) : chs__$1.call(null,inst_33308));
var inst_33320 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33308) : done.call(null,inst_33308));
var inst_33321 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33319,inst_33320);
var ___$1 = (function (){var statearr_33368 = state_33347;
(statearr_33368[(4)] = cljs.core.rest((state_33347[(4)])));

return statearr_33368;
})();
var state_33347__$1 = state_33347;
var statearr_33369_34252 = state_33347__$1;
(statearr_33369_34252[(2)] = inst_33321);

(statearr_33369_34252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (5))){
var inst_33331 = (state_33347[(2)]);
var state_33347__$1 = (function (){var statearr_33370 = state_33347;
(statearr_33370[(13)] = inst_33331);

return statearr_33370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33347__$1,(13),dchan);
} else {
if((state_val_33348 === (14))){
var inst_33336 = cljs.core.async.close_BANG_(out);
var state_33347__$1 = state_33347;
var statearr_33371_34253 = state_33347__$1;
(statearr_33371_34253[(2)] = inst_33336);

(statearr_33371_34253[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (16))){
var inst_33343 = (state_33347[(2)]);
var state_33347__$1 = state_33347;
var statearr_33372_34254 = state_33347__$1;
(statearr_33372_34254[(2)] = inst_33343);

(statearr_33372_34254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (10))){
var inst_33308 = (state_33347[(7)]);
var inst_33324 = (state_33347[(2)]);
var inst_33325 = (inst_33308 + (1));
var inst_33308__$1 = inst_33325;
var state_33347__$1 = (function (){var statearr_33373 = state_33347;
(statearr_33373[(14)] = inst_33324);

(statearr_33373[(7)] = inst_33308__$1);

return statearr_33373;
})();
var statearr_33374_34255 = state_33347__$1;
(statearr_33374_34255[(2)] = null);

(statearr_33374_34255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33348 === (8))){
var inst_33329 = (state_33347[(2)]);
var state_33347__$1 = state_33347;
var statearr_33375_34256 = state_33347__$1;
(statearr_33375_34256[(2)] = inst_33329);

(statearr_33375_34256[(1)] = (5));


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
var cljs$core$async$state_machine__32291__auto__ = null;
var cljs$core$async$state_machine__32291__auto____0 = (function (){
var statearr_33376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33376[(0)] = cljs$core$async$state_machine__32291__auto__);

(statearr_33376[(1)] = (1));

return statearr_33376;
});
var cljs$core$async$state_machine__32291__auto____1 = (function (state_33347){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_33347);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e33377){var ex__32294__auto__ = e33377;
var statearr_33378_34258 = state_33347;
(statearr_33378_34258[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_33347[(4)]))){
var statearr_33379_34259 = state_33347;
(statearr_33379_34259[(1)] = cljs.core.first((state_33347[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34262 = state_33347;
state_33347 = G__34262;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$state_machine__32291__auto__ = function(state_33347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32291__auto____1.call(this,state_33347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32291__auto____0;
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32291__auto____1;
return cljs$core$async$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_33380 = f__32362__auto__();
(statearr_33380[(6)] = c__32361__auto___34232);

return statearr_33380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
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
var G__33383 = arguments.length;
switch (G__33383) {
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
var c__32361__auto___34266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_33415){
var state_val_33416 = (state_33415[(1)]);
if((state_val_33416 === (7))){
var inst_33394 = (state_33415[(7)]);
var inst_33395 = (state_33415[(8)]);
var inst_33394__$1 = (state_33415[(2)]);
var inst_33395__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33394__$1,(0),null);
var inst_33396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33394__$1,(1),null);
var inst_33397 = (inst_33395__$1 == null);
var state_33415__$1 = (function (){var statearr_33417 = state_33415;
(statearr_33417[(7)] = inst_33394__$1);

(statearr_33417[(8)] = inst_33395__$1);

(statearr_33417[(9)] = inst_33396);

return statearr_33417;
})();
if(cljs.core.truth_(inst_33397)){
var statearr_33418_34267 = state_33415__$1;
(statearr_33418_34267[(1)] = (8));

} else {
var statearr_33419_34268 = state_33415__$1;
(statearr_33419_34268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (1))){
var inst_33384 = cljs.core.vec(chs);
var inst_33385 = inst_33384;
var state_33415__$1 = (function (){var statearr_33420 = state_33415;
(statearr_33420[(10)] = inst_33385);

return statearr_33420;
})();
var statearr_33421_34270 = state_33415__$1;
(statearr_33421_34270[(2)] = null);

(statearr_33421_34270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (4))){
var inst_33385 = (state_33415[(10)]);
var state_33415__$1 = state_33415;
return cljs.core.async.ioc_alts_BANG_(state_33415__$1,(7),inst_33385);
} else {
if((state_val_33416 === (6))){
var inst_33411 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33422_34271 = state_33415__$1;
(statearr_33422_34271[(2)] = inst_33411);

(statearr_33422_34271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (3))){
var inst_33413 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33415__$1,inst_33413);
} else {
if((state_val_33416 === (2))){
var inst_33385 = (state_33415[(10)]);
var inst_33387 = cljs.core.count(inst_33385);
var inst_33388 = (inst_33387 > (0));
var state_33415__$1 = state_33415;
if(cljs.core.truth_(inst_33388)){
var statearr_33424_34275 = state_33415__$1;
(statearr_33424_34275[(1)] = (4));

} else {
var statearr_33425_34276 = state_33415__$1;
(statearr_33425_34276[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (11))){
var inst_33385 = (state_33415[(10)]);
var inst_33404 = (state_33415[(2)]);
var tmp33423 = inst_33385;
var inst_33385__$1 = tmp33423;
var state_33415__$1 = (function (){var statearr_33426 = state_33415;
(statearr_33426[(11)] = inst_33404);

(statearr_33426[(10)] = inst_33385__$1);

return statearr_33426;
})();
var statearr_33427_34278 = state_33415__$1;
(statearr_33427_34278[(2)] = null);

(statearr_33427_34278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (9))){
var inst_33395 = (state_33415[(8)]);
var state_33415__$1 = state_33415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33415__$1,(11),out,inst_33395);
} else {
if((state_val_33416 === (5))){
var inst_33409 = cljs.core.async.close_BANG_(out);
var state_33415__$1 = state_33415;
var statearr_33428_34280 = state_33415__$1;
(statearr_33428_34280[(2)] = inst_33409);

(statearr_33428_34280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (10))){
var inst_33407 = (state_33415[(2)]);
var state_33415__$1 = state_33415;
var statearr_33429_34281 = state_33415__$1;
(statearr_33429_34281[(2)] = inst_33407);

(statearr_33429_34281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33416 === (8))){
var inst_33385 = (state_33415[(10)]);
var inst_33394 = (state_33415[(7)]);
var inst_33395 = (state_33415[(8)]);
var inst_33396 = (state_33415[(9)]);
var inst_33399 = (function (){var cs = inst_33385;
var vec__33390 = inst_33394;
var v = inst_33395;
var c = inst_33396;
return (function (p1__33381_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33381_SHARP_);
});
})();
var inst_33400 = cljs.core.filterv(inst_33399,inst_33385);
var inst_33385__$1 = inst_33400;
var state_33415__$1 = (function (){var statearr_33430 = state_33415;
(statearr_33430[(10)] = inst_33385__$1);

return statearr_33430;
})();
var statearr_33431_34283 = state_33415__$1;
(statearr_33431_34283[(2)] = null);

(statearr_33431_34283[(1)] = (2));


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
var cljs$core$async$state_machine__32291__auto__ = null;
var cljs$core$async$state_machine__32291__auto____0 = (function (){
var statearr_33432 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33432[(0)] = cljs$core$async$state_machine__32291__auto__);

(statearr_33432[(1)] = (1));

return statearr_33432;
});
var cljs$core$async$state_machine__32291__auto____1 = (function (state_33415){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_33415);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e33433){var ex__32294__auto__ = e33433;
var statearr_33434_34284 = state_33415;
(statearr_33434_34284[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_33415[(4)]))){
var statearr_33435_34285 = state_33415;
(statearr_33435_34285[(1)] = cljs.core.first((state_33415[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34286 = state_33415;
state_33415 = G__34286;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$state_machine__32291__auto__ = function(state_33415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32291__auto____1.call(this,state_33415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32291__auto____0;
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32291__auto____1;
return cljs$core$async$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_33436 = f__32362__auto__();
(statearr_33436[(6)] = c__32361__auto___34266);

return statearr_33436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
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
var G__33438 = arguments.length;
switch (G__33438) {
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
var c__32361__auto___34288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_33462){
var state_val_33463 = (state_33462[(1)]);
if((state_val_33463 === (7))){
var inst_33444 = (state_33462[(7)]);
var inst_33444__$1 = (state_33462[(2)]);
var inst_33445 = (inst_33444__$1 == null);
var inst_33446 = cljs.core.not(inst_33445);
var state_33462__$1 = (function (){var statearr_33464 = state_33462;
(statearr_33464[(7)] = inst_33444__$1);

return statearr_33464;
})();
if(inst_33446){
var statearr_33465_34289 = state_33462__$1;
(statearr_33465_34289[(1)] = (8));

} else {
var statearr_33466_34290 = state_33462__$1;
(statearr_33466_34290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (1))){
var inst_33439 = (0);
var state_33462__$1 = (function (){var statearr_33467 = state_33462;
(statearr_33467[(8)] = inst_33439);

return statearr_33467;
})();
var statearr_33468_34291 = state_33462__$1;
(statearr_33468_34291[(2)] = null);

(statearr_33468_34291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (4))){
var state_33462__$1 = state_33462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33462__$1,(7),ch);
} else {
if((state_val_33463 === (6))){
var inst_33457 = (state_33462[(2)]);
var state_33462__$1 = state_33462;
var statearr_33469_34292 = state_33462__$1;
(statearr_33469_34292[(2)] = inst_33457);

(statearr_33469_34292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (3))){
var inst_33459 = (state_33462[(2)]);
var inst_33460 = cljs.core.async.close_BANG_(out);
var state_33462__$1 = (function (){var statearr_33470 = state_33462;
(statearr_33470[(9)] = inst_33459);

return statearr_33470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33462__$1,inst_33460);
} else {
if((state_val_33463 === (2))){
var inst_33439 = (state_33462[(8)]);
var inst_33441 = (inst_33439 < n);
var state_33462__$1 = state_33462;
if(cljs.core.truth_(inst_33441)){
var statearr_33471_34293 = state_33462__$1;
(statearr_33471_34293[(1)] = (4));

} else {
var statearr_33472_34294 = state_33462__$1;
(statearr_33472_34294[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (11))){
var inst_33439 = (state_33462[(8)]);
var inst_33449 = (state_33462[(2)]);
var inst_33450 = (inst_33439 + (1));
var inst_33439__$1 = inst_33450;
var state_33462__$1 = (function (){var statearr_33473 = state_33462;
(statearr_33473[(10)] = inst_33449);

(statearr_33473[(8)] = inst_33439__$1);

return statearr_33473;
})();
var statearr_33474_34295 = state_33462__$1;
(statearr_33474_34295[(2)] = null);

(statearr_33474_34295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (9))){
var state_33462__$1 = state_33462;
var statearr_33475_34296 = state_33462__$1;
(statearr_33475_34296[(2)] = null);

(statearr_33475_34296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (5))){
var state_33462__$1 = state_33462;
var statearr_33476_34297 = state_33462__$1;
(statearr_33476_34297[(2)] = null);

(statearr_33476_34297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (10))){
var inst_33454 = (state_33462[(2)]);
var state_33462__$1 = state_33462;
var statearr_33477_34298 = state_33462__$1;
(statearr_33477_34298[(2)] = inst_33454);

(statearr_33477_34298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (8))){
var inst_33444 = (state_33462[(7)]);
var state_33462__$1 = state_33462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33462__$1,(11),out,inst_33444);
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
var cljs$core$async$state_machine__32291__auto__ = null;
var cljs$core$async$state_machine__32291__auto____0 = (function (){
var statearr_33478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33478[(0)] = cljs$core$async$state_machine__32291__auto__);

(statearr_33478[(1)] = (1));

return statearr_33478;
});
var cljs$core$async$state_machine__32291__auto____1 = (function (state_33462){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_33462);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e33479){var ex__32294__auto__ = e33479;
var statearr_33480_34299 = state_33462;
(statearr_33480_34299[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_33462[(4)]))){
var statearr_33481_34300 = state_33462;
(statearr_33481_34300[(1)] = cljs.core.first((state_33462[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34301 = state_33462;
state_33462 = G__34301;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$state_machine__32291__auto__ = function(state_33462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32291__auto____1.call(this,state_33462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32291__auto____0;
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32291__auto____1;
return cljs$core$async$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_33482 = f__32362__auto__();
(statearr_33482[(6)] = c__32361__auto___34288);

return statearr_33482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
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
cljs.core.async.t_cljs$core$async33487 = (function (f,ch,meta33485,_,fn1,meta33488){
this.f = f;
this.ch = ch;
this.meta33485 = meta33485;
this._ = _;
this.fn1 = fn1;
this.meta33488 = meta33488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33489,meta33488__$1){
var self__ = this;
var _33489__$1 = this;
return (new cljs.core.async.t_cljs$core$async33487(self__.f,self__.ch,self__.meta33485,self__._,self__.fn1,meta33488__$1));
}));

(cljs.core.async.t_cljs$core$async33487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33489){
var self__ = this;
var _33489__$1 = this;
return self__.meta33488;
}));

(cljs.core.async.t_cljs$core$async33487.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33487.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33487.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33487.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33483_SHARP_){
var G__33490 = (((p1__33483_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33483_SHARP_) : self__.f.call(null,p1__33483_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33490) : f1.call(null,G__33490));
});
}));

(cljs.core.async.t_cljs$core$async33487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33485","meta33485",-1731575258,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33484","cljs.core.async/t_cljs$core$async33484",1556692455,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33488","meta33488",22850226,null)], null);
}));

(cljs.core.async.t_cljs$core$async33487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33487");

(cljs.core.async.t_cljs$core$async33487.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33487.
 */
cljs.core.async.__GT_t_cljs$core$async33487 = (function cljs$core$async$__GT_t_cljs$core$async33487(f,ch,meta33485,_,fn1,meta33488){
return (new cljs.core.async.t_cljs$core$async33487(f,ch,meta33485,_,fn1,meta33488));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33484 = (function (f,ch,meta33485){
this.f = f;
this.ch = ch;
this.meta33485 = meta33485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33486,meta33485__$1){
var self__ = this;
var _33486__$1 = this;
return (new cljs.core.async.t_cljs$core$async33484(self__.f,self__.ch,meta33485__$1));
}));

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33486){
var self__ = this;
var _33486__$1 = this;
return self__.meta33485;
}));

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33487(self__.f,self__.ch,self__.meta33485,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33491 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33491) : self__.f.call(null,G__33491));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33485","meta33485",-1731575258,null)], null);
}));

(cljs.core.async.t_cljs$core$async33484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33484");

(cljs.core.async.t_cljs$core$async33484.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33484.
 */
cljs.core.async.__GT_t_cljs$core$async33484 = (function cljs$core$async$__GT_t_cljs$core$async33484(f,ch,meta33485){
return (new cljs.core.async.t_cljs$core$async33484(f,ch,meta33485));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33484(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33492 = (function (f,ch,meta33493){
this.f = f;
this.ch = ch;
this.meta33493 = meta33493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33494,meta33493__$1){
var self__ = this;
var _33494__$1 = this;
return (new cljs.core.async.t_cljs$core$async33492(self__.f,self__.ch,meta33493__$1));
}));

(cljs.core.async.t_cljs$core$async33492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33494){
var self__ = this;
var _33494__$1 = this;
return self__.meta33493;
}));

(cljs.core.async.t_cljs$core$async33492.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33492.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33492.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33492.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33492.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33492.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33493","meta33493",1678763582,null)], null);
}));

(cljs.core.async.t_cljs$core$async33492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33492");

(cljs.core.async.t_cljs$core$async33492.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33492.
 */
cljs.core.async.__GT_t_cljs$core$async33492 = (function cljs$core$async$__GT_t_cljs$core$async33492(f,ch,meta33493){
return (new cljs.core.async.t_cljs$core$async33492(f,ch,meta33493));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33492(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33495 = (function (p,ch,meta33496){
this.p = p;
this.ch = ch;
this.meta33496 = meta33496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33497,meta33496__$1){
var self__ = this;
var _33497__$1 = this;
return (new cljs.core.async.t_cljs$core$async33495(self__.p,self__.ch,meta33496__$1));
}));

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33497){
var self__ = this;
var _33497__$1 = this;
return self__.meta33496;
}));

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33496","meta33496",-1462775882,null)], null);
}));

(cljs.core.async.t_cljs$core$async33495.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33495");

(cljs.core.async.t_cljs$core$async33495.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33495");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33495.
 */
cljs.core.async.__GT_t_cljs$core$async33495 = (function cljs$core$async$__GT_t_cljs$core$async33495(p,ch,meta33496){
return (new cljs.core.async.t_cljs$core$async33495(p,ch,meta33496));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33495(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33499 = arguments.length;
switch (G__33499) {
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
var c__32361__auto___34308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_33520){
var state_val_33521 = (state_33520[(1)]);
if((state_val_33521 === (7))){
var inst_33516 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33522_34309 = state_33520__$1;
(statearr_33522_34309[(2)] = inst_33516);

(statearr_33522_34309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (1))){
var state_33520__$1 = state_33520;
var statearr_33523_34310 = state_33520__$1;
(statearr_33523_34310[(2)] = null);

(statearr_33523_34310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (4))){
var inst_33502 = (state_33520[(7)]);
var inst_33502__$1 = (state_33520[(2)]);
var inst_33503 = (inst_33502__$1 == null);
var state_33520__$1 = (function (){var statearr_33524 = state_33520;
(statearr_33524[(7)] = inst_33502__$1);

return statearr_33524;
})();
if(cljs.core.truth_(inst_33503)){
var statearr_33525_34311 = state_33520__$1;
(statearr_33525_34311[(1)] = (5));

} else {
var statearr_33526_34312 = state_33520__$1;
(statearr_33526_34312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (6))){
var inst_33502 = (state_33520[(7)]);
var inst_33507 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33502) : p.call(null,inst_33502));
var state_33520__$1 = state_33520;
if(cljs.core.truth_(inst_33507)){
var statearr_33527_34313 = state_33520__$1;
(statearr_33527_34313[(1)] = (8));

} else {
var statearr_33528_34314 = state_33520__$1;
(statearr_33528_34314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (3))){
var inst_33518 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33520__$1,inst_33518);
} else {
if((state_val_33521 === (2))){
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33520__$1,(4),ch);
} else {
if((state_val_33521 === (11))){
var inst_33510 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33529_34315 = state_33520__$1;
(statearr_33529_34315[(2)] = inst_33510);

(statearr_33529_34315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (9))){
var state_33520__$1 = state_33520;
var statearr_33530_34316 = state_33520__$1;
(statearr_33530_34316[(2)] = null);

(statearr_33530_34316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (5))){
var inst_33505 = cljs.core.async.close_BANG_(out);
var state_33520__$1 = state_33520;
var statearr_33531_34317 = state_33520__$1;
(statearr_33531_34317[(2)] = inst_33505);

(statearr_33531_34317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (10))){
var inst_33513 = (state_33520[(2)]);
var state_33520__$1 = (function (){var statearr_33532 = state_33520;
(statearr_33532[(8)] = inst_33513);

return statearr_33532;
})();
var statearr_33533_34318 = state_33520__$1;
(statearr_33533_34318[(2)] = null);

(statearr_33533_34318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (8))){
var inst_33502 = (state_33520[(7)]);
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33520__$1,(11),out,inst_33502);
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
var cljs$core$async$state_machine__32291__auto__ = null;
var cljs$core$async$state_machine__32291__auto____0 = (function (){
var statearr_33534 = [null,null,null,null,null,null,null,null,null];
(statearr_33534[(0)] = cljs$core$async$state_machine__32291__auto__);

(statearr_33534[(1)] = (1));

return statearr_33534;
});
var cljs$core$async$state_machine__32291__auto____1 = (function (state_33520){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_33520);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e33535){var ex__32294__auto__ = e33535;
var statearr_33536_34319 = state_33520;
(statearr_33536_34319[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_33520[(4)]))){
var statearr_33537_34320 = state_33520;
(statearr_33537_34320[(1)] = cljs.core.first((state_33520[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34321 = state_33520;
state_33520 = G__34321;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$state_machine__32291__auto__ = function(state_33520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32291__auto____1.call(this,state_33520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32291__auto____0;
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32291__auto____1;
return cljs$core$async$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_33538 = f__32362__auto__();
(statearr_33538[(6)] = c__32361__auto___34308);

return statearr_33538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33540 = arguments.length;
switch (G__33540) {
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
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_33602){
var state_val_33603 = (state_33602[(1)]);
if((state_val_33603 === (7))){
var inst_33598 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33604_34323 = state_33602__$1;
(statearr_33604_34323[(2)] = inst_33598);

(statearr_33604_34323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (20))){
var inst_33568 = (state_33602[(7)]);
var inst_33579 = (state_33602[(2)]);
var inst_33580 = cljs.core.next(inst_33568);
var inst_33554 = inst_33580;
var inst_33555 = null;
var inst_33556 = (0);
var inst_33557 = (0);
var state_33602__$1 = (function (){var statearr_33605 = state_33602;
(statearr_33605[(8)] = inst_33579);

(statearr_33605[(9)] = inst_33554);

(statearr_33605[(10)] = inst_33555);

(statearr_33605[(11)] = inst_33556);

(statearr_33605[(12)] = inst_33557);

return statearr_33605;
})();
var statearr_33606_34325 = state_33602__$1;
(statearr_33606_34325[(2)] = null);

(statearr_33606_34325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (1))){
var state_33602__$1 = state_33602;
var statearr_33607_34326 = state_33602__$1;
(statearr_33607_34326[(2)] = null);

(statearr_33607_34326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (4))){
var inst_33543 = (state_33602[(13)]);
var inst_33543__$1 = (state_33602[(2)]);
var inst_33544 = (inst_33543__$1 == null);
var state_33602__$1 = (function (){var statearr_33608 = state_33602;
(statearr_33608[(13)] = inst_33543__$1);

return statearr_33608;
})();
if(cljs.core.truth_(inst_33544)){
var statearr_33609_34327 = state_33602__$1;
(statearr_33609_34327[(1)] = (5));

} else {
var statearr_33610_34328 = state_33602__$1;
(statearr_33610_34328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (15))){
var state_33602__$1 = state_33602;
var statearr_33614_34329 = state_33602__$1;
(statearr_33614_34329[(2)] = null);

(statearr_33614_34329[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (21))){
var state_33602__$1 = state_33602;
var statearr_33615_34330 = state_33602__$1;
(statearr_33615_34330[(2)] = null);

(statearr_33615_34330[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (13))){
var inst_33557 = (state_33602[(12)]);
var inst_33554 = (state_33602[(9)]);
var inst_33555 = (state_33602[(10)]);
var inst_33556 = (state_33602[(11)]);
var inst_33564 = (state_33602[(2)]);
var inst_33565 = (inst_33557 + (1));
var tmp33611 = inst_33554;
var tmp33612 = inst_33555;
var tmp33613 = inst_33556;
var inst_33554__$1 = tmp33611;
var inst_33555__$1 = tmp33612;
var inst_33556__$1 = tmp33613;
var inst_33557__$1 = inst_33565;
var state_33602__$1 = (function (){var statearr_33616 = state_33602;
(statearr_33616[(14)] = inst_33564);

(statearr_33616[(9)] = inst_33554__$1);

(statearr_33616[(10)] = inst_33555__$1);

(statearr_33616[(11)] = inst_33556__$1);

(statearr_33616[(12)] = inst_33557__$1);

return statearr_33616;
})();
var statearr_33617_34331 = state_33602__$1;
(statearr_33617_34331[(2)] = null);

(statearr_33617_34331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (22))){
var state_33602__$1 = state_33602;
var statearr_33618_34332 = state_33602__$1;
(statearr_33618_34332[(2)] = null);

(statearr_33618_34332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (6))){
var inst_33543 = (state_33602[(13)]);
var inst_33552 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33543) : f.call(null,inst_33543));
var inst_33553 = cljs.core.seq(inst_33552);
var inst_33554 = inst_33553;
var inst_33555 = null;
var inst_33556 = (0);
var inst_33557 = (0);
var state_33602__$1 = (function (){var statearr_33619 = state_33602;
(statearr_33619[(9)] = inst_33554);

(statearr_33619[(10)] = inst_33555);

(statearr_33619[(11)] = inst_33556);

(statearr_33619[(12)] = inst_33557);

return statearr_33619;
})();
var statearr_33620_34333 = state_33602__$1;
(statearr_33620_34333[(2)] = null);

(statearr_33620_34333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (17))){
var inst_33568 = (state_33602[(7)]);
var inst_33572 = cljs.core.chunk_first(inst_33568);
var inst_33573 = cljs.core.chunk_rest(inst_33568);
var inst_33574 = cljs.core.count(inst_33572);
var inst_33554 = inst_33573;
var inst_33555 = inst_33572;
var inst_33556 = inst_33574;
var inst_33557 = (0);
var state_33602__$1 = (function (){var statearr_33621 = state_33602;
(statearr_33621[(9)] = inst_33554);

(statearr_33621[(10)] = inst_33555);

(statearr_33621[(11)] = inst_33556);

(statearr_33621[(12)] = inst_33557);

return statearr_33621;
})();
var statearr_33622_34334 = state_33602__$1;
(statearr_33622_34334[(2)] = null);

(statearr_33622_34334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (3))){
var inst_33600 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33602__$1,inst_33600);
} else {
if((state_val_33603 === (12))){
var inst_33588 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33623_34335 = state_33602__$1;
(statearr_33623_34335[(2)] = inst_33588);

(statearr_33623_34335[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (2))){
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33602__$1,(4),in$);
} else {
if((state_val_33603 === (23))){
var inst_33596 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33624_34336 = state_33602__$1;
(statearr_33624_34336[(2)] = inst_33596);

(statearr_33624_34336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (19))){
var inst_33583 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33625_34337 = state_33602__$1;
(statearr_33625_34337[(2)] = inst_33583);

(statearr_33625_34337[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (11))){
var inst_33554 = (state_33602[(9)]);
var inst_33568 = (state_33602[(7)]);
var inst_33568__$1 = cljs.core.seq(inst_33554);
var state_33602__$1 = (function (){var statearr_33626 = state_33602;
(statearr_33626[(7)] = inst_33568__$1);

return statearr_33626;
})();
if(inst_33568__$1){
var statearr_33627_34338 = state_33602__$1;
(statearr_33627_34338[(1)] = (14));

} else {
var statearr_33628_34339 = state_33602__$1;
(statearr_33628_34339[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (9))){
var inst_33590 = (state_33602[(2)]);
var inst_33591 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33602__$1 = (function (){var statearr_33629 = state_33602;
(statearr_33629[(15)] = inst_33590);

return statearr_33629;
})();
if(cljs.core.truth_(inst_33591)){
var statearr_33630_34340 = state_33602__$1;
(statearr_33630_34340[(1)] = (21));

} else {
var statearr_33631_34341 = state_33602__$1;
(statearr_33631_34341[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (5))){
var inst_33546 = cljs.core.async.close_BANG_(out);
var state_33602__$1 = state_33602;
var statearr_33632_34342 = state_33602__$1;
(statearr_33632_34342[(2)] = inst_33546);

(statearr_33632_34342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (14))){
var inst_33568 = (state_33602[(7)]);
var inst_33570 = cljs.core.chunked_seq_QMARK_(inst_33568);
var state_33602__$1 = state_33602;
if(inst_33570){
var statearr_33633_34343 = state_33602__$1;
(statearr_33633_34343[(1)] = (17));

} else {
var statearr_33634_34344 = state_33602__$1;
(statearr_33634_34344[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (16))){
var inst_33586 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33635_34345 = state_33602__$1;
(statearr_33635_34345[(2)] = inst_33586);

(statearr_33635_34345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (10))){
var inst_33555 = (state_33602[(10)]);
var inst_33557 = (state_33602[(12)]);
var inst_33562 = cljs.core._nth(inst_33555,inst_33557);
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33602__$1,(13),out,inst_33562);
} else {
if((state_val_33603 === (18))){
var inst_33568 = (state_33602[(7)]);
var inst_33577 = cljs.core.first(inst_33568);
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33602__$1,(20),out,inst_33577);
} else {
if((state_val_33603 === (8))){
var inst_33557 = (state_33602[(12)]);
var inst_33556 = (state_33602[(11)]);
var inst_33559 = (inst_33557 < inst_33556);
var inst_33560 = inst_33559;
var state_33602__$1 = state_33602;
if(cljs.core.truth_(inst_33560)){
var statearr_33636_34346 = state_33602__$1;
(statearr_33636_34346[(1)] = (10));

} else {
var statearr_33637_34347 = state_33602__$1;
(statearr_33637_34347[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32291__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32291__auto____0 = (function (){
var statearr_33638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33638[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32291__auto__);

(statearr_33638[(1)] = (1));

return statearr_33638;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32291__auto____1 = (function (state_33602){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_33602);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e33639){var ex__32294__auto__ = e33639;
var statearr_33640_34348 = state_33602;
(statearr_33640_34348[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_33602[(4)]))){
var statearr_33641_34349 = state_33602;
(statearr_33641_34349[(1)] = cljs.core.first((state_33602[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34350 = state_33602;
state_33602 = G__34350;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32291__auto__ = function(state_33602){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32291__auto____1.call(this,state_33602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32291__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32291__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_33642 = f__32362__auto__();
(statearr_33642[(6)] = c__32361__auto__);

return statearr_33642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33644 = arguments.length;
switch (G__33644) {
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
var G__33646 = arguments.length;
switch (G__33646) {
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
var G__33648 = arguments.length;
switch (G__33648) {
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
var c__32361__auto___34354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_33672){
var state_val_33673 = (state_33672[(1)]);
if((state_val_33673 === (7))){
var inst_33667 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
var statearr_33674_34355 = state_33672__$1;
(statearr_33674_34355[(2)] = inst_33667);

(statearr_33674_34355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33673 === (1))){
var inst_33649 = null;
var state_33672__$1 = (function (){var statearr_33675 = state_33672;
(statearr_33675[(7)] = inst_33649);

return statearr_33675;
})();
var statearr_33676_34356 = state_33672__$1;
(statearr_33676_34356[(2)] = null);

(statearr_33676_34356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33673 === (4))){
var inst_33652 = (state_33672[(8)]);
var inst_33652__$1 = (state_33672[(2)]);
var inst_33653 = (inst_33652__$1 == null);
var inst_33654 = cljs.core.not(inst_33653);
var state_33672__$1 = (function (){var statearr_33677 = state_33672;
(statearr_33677[(8)] = inst_33652__$1);

return statearr_33677;
})();
if(inst_33654){
var statearr_33678_34357 = state_33672__$1;
(statearr_33678_34357[(1)] = (5));

} else {
var statearr_33679_34358 = state_33672__$1;
(statearr_33679_34358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33673 === (6))){
var state_33672__$1 = state_33672;
var statearr_33680_34359 = state_33672__$1;
(statearr_33680_34359[(2)] = null);

(statearr_33680_34359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33673 === (3))){
var inst_33669 = (state_33672[(2)]);
var inst_33670 = cljs.core.async.close_BANG_(out);
var state_33672__$1 = (function (){var statearr_33681 = state_33672;
(statearr_33681[(9)] = inst_33669);

return statearr_33681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33672__$1,inst_33670);
} else {
if((state_val_33673 === (2))){
var state_33672__$1 = state_33672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33672__$1,(4),ch);
} else {
if((state_val_33673 === (11))){
var inst_33652 = (state_33672[(8)]);
var inst_33661 = (state_33672[(2)]);
var inst_33649 = inst_33652;
var state_33672__$1 = (function (){var statearr_33682 = state_33672;
(statearr_33682[(10)] = inst_33661);

(statearr_33682[(7)] = inst_33649);

return statearr_33682;
})();
var statearr_33683_34360 = state_33672__$1;
(statearr_33683_34360[(2)] = null);

(statearr_33683_34360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33673 === (9))){
var inst_33652 = (state_33672[(8)]);
var state_33672__$1 = state_33672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33672__$1,(11),out,inst_33652);
} else {
if((state_val_33673 === (5))){
var inst_33652 = (state_33672[(8)]);
var inst_33649 = (state_33672[(7)]);
var inst_33656 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33652,inst_33649);
var state_33672__$1 = state_33672;
if(inst_33656){
var statearr_33685_34361 = state_33672__$1;
(statearr_33685_34361[(1)] = (8));

} else {
var statearr_33686_34362 = state_33672__$1;
(statearr_33686_34362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33673 === (10))){
var inst_33664 = (state_33672[(2)]);
var state_33672__$1 = state_33672;
var statearr_33687_34363 = state_33672__$1;
(statearr_33687_34363[(2)] = inst_33664);

(statearr_33687_34363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33673 === (8))){
var inst_33649 = (state_33672[(7)]);
var tmp33684 = inst_33649;
var inst_33649__$1 = tmp33684;
var state_33672__$1 = (function (){var statearr_33688 = state_33672;
(statearr_33688[(7)] = inst_33649__$1);

return statearr_33688;
})();
var statearr_33689_34364 = state_33672__$1;
(statearr_33689_34364[(2)] = null);

(statearr_33689_34364[(1)] = (2));


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
var cljs$core$async$state_machine__32291__auto__ = null;
var cljs$core$async$state_machine__32291__auto____0 = (function (){
var statearr_33690 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33690[(0)] = cljs$core$async$state_machine__32291__auto__);

(statearr_33690[(1)] = (1));

return statearr_33690;
});
var cljs$core$async$state_machine__32291__auto____1 = (function (state_33672){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_33672);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e33691){var ex__32294__auto__ = e33691;
var statearr_33692_34365 = state_33672;
(statearr_33692_34365[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_33672[(4)]))){
var statearr_33693_34366 = state_33672;
(statearr_33693_34366[(1)] = cljs.core.first((state_33672[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34367 = state_33672;
state_33672 = G__34367;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$state_machine__32291__auto__ = function(state_33672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32291__auto____1.call(this,state_33672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32291__auto____0;
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32291__auto____1;
return cljs$core$async$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_33694 = f__32362__auto__();
(statearr_33694[(6)] = c__32361__auto___34354);

return statearr_33694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33696 = arguments.length;
switch (G__33696) {
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
var c__32361__auto___34369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_33734){
var state_val_33735 = (state_33734[(1)]);
if((state_val_33735 === (7))){
var inst_33730 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33736_34370 = state_33734__$1;
(statearr_33736_34370[(2)] = inst_33730);

(statearr_33736_34370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (1))){
var inst_33697 = (new Array(n));
var inst_33698 = inst_33697;
var inst_33699 = (0);
var state_33734__$1 = (function (){var statearr_33737 = state_33734;
(statearr_33737[(7)] = inst_33698);

(statearr_33737[(8)] = inst_33699);

return statearr_33737;
})();
var statearr_33738_34371 = state_33734__$1;
(statearr_33738_34371[(2)] = null);

(statearr_33738_34371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (4))){
var inst_33702 = (state_33734[(9)]);
var inst_33702__$1 = (state_33734[(2)]);
var inst_33703 = (inst_33702__$1 == null);
var inst_33704 = cljs.core.not(inst_33703);
var state_33734__$1 = (function (){var statearr_33739 = state_33734;
(statearr_33739[(9)] = inst_33702__$1);

return statearr_33739;
})();
if(inst_33704){
var statearr_33740_34372 = state_33734__$1;
(statearr_33740_34372[(1)] = (5));

} else {
var statearr_33741_34373 = state_33734__$1;
(statearr_33741_34373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (15))){
var inst_33724 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33742_34374 = state_33734__$1;
(statearr_33742_34374[(2)] = inst_33724);

(statearr_33742_34374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (13))){
var state_33734__$1 = state_33734;
var statearr_33743_34375 = state_33734__$1;
(statearr_33743_34375[(2)] = null);

(statearr_33743_34375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (6))){
var inst_33699 = (state_33734[(8)]);
var inst_33720 = (inst_33699 > (0));
var state_33734__$1 = state_33734;
if(cljs.core.truth_(inst_33720)){
var statearr_33744_34376 = state_33734__$1;
(statearr_33744_34376[(1)] = (12));

} else {
var statearr_33745_34377 = state_33734__$1;
(statearr_33745_34377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (3))){
var inst_33732 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33734__$1,inst_33732);
} else {
if((state_val_33735 === (12))){
var inst_33698 = (state_33734[(7)]);
var inst_33722 = cljs.core.vec(inst_33698);
var state_33734__$1 = state_33734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33734__$1,(15),out,inst_33722);
} else {
if((state_val_33735 === (2))){
var state_33734__$1 = state_33734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33734__$1,(4),ch);
} else {
if((state_val_33735 === (11))){
var inst_33714 = (state_33734[(2)]);
var inst_33715 = (new Array(n));
var inst_33698 = inst_33715;
var inst_33699 = (0);
var state_33734__$1 = (function (){var statearr_33746 = state_33734;
(statearr_33746[(10)] = inst_33714);

(statearr_33746[(7)] = inst_33698);

(statearr_33746[(8)] = inst_33699);

return statearr_33746;
})();
var statearr_33747_34378 = state_33734__$1;
(statearr_33747_34378[(2)] = null);

(statearr_33747_34378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (9))){
var inst_33698 = (state_33734[(7)]);
var inst_33712 = cljs.core.vec(inst_33698);
var state_33734__$1 = state_33734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33734__$1,(11),out,inst_33712);
} else {
if((state_val_33735 === (5))){
var inst_33698 = (state_33734[(7)]);
var inst_33699 = (state_33734[(8)]);
var inst_33702 = (state_33734[(9)]);
var inst_33707 = (state_33734[(11)]);
var inst_33706 = (inst_33698[inst_33699] = inst_33702);
var inst_33707__$1 = (inst_33699 + (1));
var inst_33708 = (inst_33707__$1 < n);
var state_33734__$1 = (function (){var statearr_33748 = state_33734;
(statearr_33748[(12)] = inst_33706);

(statearr_33748[(11)] = inst_33707__$1);

return statearr_33748;
})();
if(cljs.core.truth_(inst_33708)){
var statearr_33749_34381 = state_33734__$1;
(statearr_33749_34381[(1)] = (8));

} else {
var statearr_33750_34382 = state_33734__$1;
(statearr_33750_34382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (14))){
var inst_33727 = (state_33734[(2)]);
var inst_33728 = cljs.core.async.close_BANG_(out);
var state_33734__$1 = (function (){var statearr_33752 = state_33734;
(statearr_33752[(13)] = inst_33727);

return statearr_33752;
})();
var statearr_33753_34383 = state_33734__$1;
(statearr_33753_34383[(2)] = inst_33728);

(statearr_33753_34383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (10))){
var inst_33718 = (state_33734[(2)]);
var state_33734__$1 = state_33734;
var statearr_33754_34384 = state_33734__$1;
(statearr_33754_34384[(2)] = inst_33718);

(statearr_33754_34384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33735 === (8))){
var inst_33698 = (state_33734[(7)]);
var inst_33707 = (state_33734[(11)]);
var tmp33751 = inst_33698;
var inst_33698__$1 = tmp33751;
var inst_33699 = inst_33707;
var state_33734__$1 = (function (){var statearr_33755 = state_33734;
(statearr_33755[(7)] = inst_33698__$1);

(statearr_33755[(8)] = inst_33699);

return statearr_33755;
})();
var statearr_33756_34385 = state_33734__$1;
(statearr_33756_34385[(2)] = null);

(statearr_33756_34385[(1)] = (2));


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
var cljs$core$async$state_machine__32291__auto__ = null;
var cljs$core$async$state_machine__32291__auto____0 = (function (){
var statearr_33757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33757[(0)] = cljs$core$async$state_machine__32291__auto__);

(statearr_33757[(1)] = (1));

return statearr_33757;
});
var cljs$core$async$state_machine__32291__auto____1 = (function (state_33734){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_33734);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e33758){var ex__32294__auto__ = e33758;
var statearr_33759_34386 = state_33734;
(statearr_33759_34386[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_33734[(4)]))){
var statearr_33760_34387 = state_33734;
(statearr_33760_34387[(1)] = cljs.core.first((state_33734[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34389 = state_33734;
state_33734 = G__34389;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$state_machine__32291__auto__ = function(state_33734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32291__auto____1.call(this,state_33734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32291__auto____0;
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32291__auto____1;
return cljs$core$async$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_33761 = f__32362__auto__();
(statearr_33761[(6)] = c__32361__auto___34369);

return statearr_33761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33763 = arguments.length;
switch (G__33763) {
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
var c__32361__auto___34392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_33808){
var state_val_33809 = (state_33808[(1)]);
if((state_val_33809 === (7))){
var inst_33804 = (state_33808[(2)]);
var state_33808__$1 = state_33808;
var statearr_33810_34393 = state_33808__$1;
(statearr_33810_34393[(2)] = inst_33804);

(statearr_33810_34393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (1))){
var inst_33764 = [];
var inst_33765 = inst_33764;
var inst_33766 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33808__$1 = (function (){var statearr_33811 = state_33808;
(statearr_33811[(7)] = inst_33765);

(statearr_33811[(8)] = inst_33766);

return statearr_33811;
})();
var statearr_33812_34394 = state_33808__$1;
(statearr_33812_34394[(2)] = null);

(statearr_33812_34394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (4))){
var inst_33769 = (state_33808[(9)]);
var inst_33769__$1 = (state_33808[(2)]);
var inst_33770 = (inst_33769__$1 == null);
var inst_33771 = cljs.core.not(inst_33770);
var state_33808__$1 = (function (){var statearr_33813 = state_33808;
(statearr_33813[(9)] = inst_33769__$1);

return statearr_33813;
})();
if(inst_33771){
var statearr_33814_34395 = state_33808__$1;
(statearr_33814_34395[(1)] = (5));

} else {
var statearr_33815_34396 = state_33808__$1;
(statearr_33815_34396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (15))){
var inst_33765 = (state_33808[(7)]);
var inst_33796 = cljs.core.vec(inst_33765);
var state_33808__$1 = state_33808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33808__$1,(18),out,inst_33796);
} else {
if((state_val_33809 === (13))){
var inst_33791 = (state_33808[(2)]);
var state_33808__$1 = state_33808;
var statearr_33816_34397 = state_33808__$1;
(statearr_33816_34397[(2)] = inst_33791);

(statearr_33816_34397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (6))){
var inst_33765 = (state_33808[(7)]);
var inst_33793 = inst_33765.length;
var inst_33794 = (inst_33793 > (0));
var state_33808__$1 = state_33808;
if(cljs.core.truth_(inst_33794)){
var statearr_33817_34398 = state_33808__$1;
(statearr_33817_34398[(1)] = (15));

} else {
var statearr_33818_34399 = state_33808__$1;
(statearr_33818_34399[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (17))){
var inst_33801 = (state_33808[(2)]);
var inst_33802 = cljs.core.async.close_BANG_(out);
var state_33808__$1 = (function (){var statearr_33819 = state_33808;
(statearr_33819[(10)] = inst_33801);

return statearr_33819;
})();
var statearr_33820_34400 = state_33808__$1;
(statearr_33820_34400[(2)] = inst_33802);

(statearr_33820_34400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (3))){
var inst_33806 = (state_33808[(2)]);
var state_33808__$1 = state_33808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33808__$1,inst_33806);
} else {
if((state_val_33809 === (12))){
var inst_33765 = (state_33808[(7)]);
var inst_33784 = cljs.core.vec(inst_33765);
var state_33808__$1 = state_33808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33808__$1,(14),out,inst_33784);
} else {
if((state_val_33809 === (2))){
var state_33808__$1 = state_33808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33808__$1,(4),ch);
} else {
if((state_val_33809 === (11))){
var inst_33765 = (state_33808[(7)]);
var inst_33769 = (state_33808[(9)]);
var inst_33773 = (state_33808[(11)]);
var inst_33781 = inst_33765.push(inst_33769);
var tmp33821 = inst_33765;
var inst_33765__$1 = tmp33821;
var inst_33766 = inst_33773;
var state_33808__$1 = (function (){var statearr_33822 = state_33808;
(statearr_33822[(12)] = inst_33781);

(statearr_33822[(7)] = inst_33765__$1);

(statearr_33822[(8)] = inst_33766);

return statearr_33822;
})();
var statearr_33823_34401 = state_33808__$1;
(statearr_33823_34401[(2)] = null);

(statearr_33823_34401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (9))){
var inst_33766 = (state_33808[(8)]);
var inst_33777 = cljs.core.keyword_identical_QMARK_(inst_33766,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33808__$1 = state_33808;
var statearr_33824_34402 = state_33808__$1;
(statearr_33824_34402[(2)] = inst_33777);

(statearr_33824_34402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (5))){
var inst_33769 = (state_33808[(9)]);
var inst_33773 = (state_33808[(11)]);
var inst_33766 = (state_33808[(8)]);
var inst_33774 = (state_33808[(13)]);
var inst_33773__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33769) : f.call(null,inst_33769));
var inst_33774__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33773__$1,inst_33766);
var state_33808__$1 = (function (){var statearr_33825 = state_33808;
(statearr_33825[(11)] = inst_33773__$1);

(statearr_33825[(13)] = inst_33774__$1);

return statearr_33825;
})();
if(inst_33774__$1){
var statearr_33826_34404 = state_33808__$1;
(statearr_33826_34404[(1)] = (8));

} else {
var statearr_33827_34405 = state_33808__$1;
(statearr_33827_34405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (14))){
var inst_33769 = (state_33808[(9)]);
var inst_33773 = (state_33808[(11)]);
var inst_33786 = (state_33808[(2)]);
var inst_33787 = [];
var inst_33788 = inst_33787.push(inst_33769);
var inst_33765 = inst_33787;
var inst_33766 = inst_33773;
var state_33808__$1 = (function (){var statearr_33828 = state_33808;
(statearr_33828[(14)] = inst_33786);

(statearr_33828[(15)] = inst_33788);

(statearr_33828[(7)] = inst_33765);

(statearr_33828[(8)] = inst_33766);

return statearr_33828;
})();
var statearr_33829_34406 = state_33808__$1;
(statearr_33829_34406[(2)] = null);

(statearr_33829_34406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (16))){
var state_33808__$1 = state_33808;
var statearr_33830_34407 = state_33808__$1;
(statearr_33830_34407[(2)] = null);

(statearr_33830_34407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (10))){
var inst_33779 = (state_33808[(2)]);
var state_33808__$1 = state_33808;
if(cljs.core.truth_(inst_33779)){
var statearr_33831_34408 = state_33808__$1;
(statearr_33831_34408[(1)] = (11));

} else {
var statearr_33832_34409 = state_33808__$1;
(statearr_33832_34409[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (18))){
var inst_33798 = (state_33808[(2)]);
var state_33808__$1 = state_33808;
var statearr_33833_34410 = state_33808__$1;
(statearr_33833_34410[(2)] = inst_33798);

(statearr_33833_34410[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33809 === (8))){
var inst_33774 = (state_33808[(13)]);
var state_33808__$1 = state_33808;
var statearr_33834_34411 = state_33808__$1;
(statearr_33834_34411[(2)] = inst_33774);

(statearr_33834_34411[(1)] = (10));


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
var cljs$core$async$state_machine__32291__auto__ = null;
var cljs$core$async$state_machine__32291__auto____0 = (function (){
var statearr_33835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33835[(0)] = cljs$core$async$state_machine__32291__auto__);

(statearr_33835[(1)] = (1));

return statearr_33835;
});
var cljs$core$async$state_machine__32291__auto____1 = (function (state_33808){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_33808);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e33836){var ex__32294__auto__ = e33836;
var statearr_33837_34412 = state_33808;
(statearr_33837_34412[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_33808[(4)]))){
var statearr_33838_34413 = state_33808;
(statearr_33838_34413[(1)] = cljs.core.first((state_33808[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34414 = state_33808;
state_33808 = G__34414;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
cljs$core$async$state_machine__32291__auto__ = function(state_33808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32291__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32291__auto____1.call(this,state_33808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32291__auto____0;
cljs$core$async$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32291__auto____1;
return cljs$core$async$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_33839 = f__32362__auto__();
(statearr_33839[(6)] = c__32361__auto___34392);

return statearr_33839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
