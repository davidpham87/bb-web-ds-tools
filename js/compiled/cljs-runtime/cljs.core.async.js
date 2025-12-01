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
cljs.core.async.t_cljs$core$async47984 = (function (f,blockable,meta47985){
this.f = f;
this.blockable = blockable;
this.meta47985 = meta47985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47986,meta47985__$1){
var self__ = this;
var _47986__$1 = this;
return (new cljs.core.async.t_cljs$core$async47984(self__.f,self__.blockable,meta47985__$1));
}));

(cljs.core.async.t_cljs$core$async47984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47986){
var self__ = this;
var _47986__$1 = this;
return self__.meta47985;
}));

(cljs.core.async.t_cljs$core$async47984.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47984.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47985","meta47985",125036127,null)], null);
}));

(cljs.core.async.t_cljs$core$async47984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47984");

(cljs.core.async.t_cljs$core$async47984.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async47984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47984.
 */
cljs.core.async.__GT_t_cljs$core$async47984 = (function cljs$core$async$__GT_t_cljs$core$async47984(f,blockable,meta47985){
return (new cljs.core.async.t_cljs$core$async47984(f,blockable,meta47985));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47983 = arguments.length;
switch (G__47983) {
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
return (new cljs.core.async.t_cljs$core$async47984(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47989 = arguments.length;
switch (G__47989) {
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
var G__47991 = arguments.length;
switch (G__47991) {
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
var G__47993 = arguments.length;
switch (G__47993) {
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
var val_49415 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49415) : fn1.call(null,val_49415));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49415) : fn1.call(null,val_49415));
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
var G__47995 = arguments.length;
switch (G__47995) {
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
var n__5616__auto___49418 = n;
var x_49419 = (0);
while(true){
if((x_49419 < n__5616__auto___49418)){
(a[x_49419] = x_49419);

var G__49420 = (x_49419 + (1));
x_49419 = G__49420;
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
cljs.core.async.t_cljs$core$async47996 = (function (flag,meta47997){
this.flag = flag;
this.meta47997 = meta47997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47998,meta47997__$1){
var self__ = this;
var _47998__$1 = this;
return (new cljs.core.async.t_cljs$core$async47996(self__.flag,meta47997__$1));
}));

(cljs.core.async.t_cljs$core$async47996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47998){
var self__ = this;
var _47998__$1 = this;
return self__.meta47997;
}));

(cljs.core.async.t_cljs$core$async47996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47997","meta47997",1605749069,null)], null);
}));

(cljs.core.async.t_cljs$core$async47996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47996");

(cljs.core.async.t_cljs$core$async47996.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async47996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47996.
 */
cljs.core.async.__GT_t_cljs$core$async47996 = (function cljs$core$async$__GT_t_cljs$core$async47996(flag,meta47997){
return (new cljs.core.async.t_cljs$core$async47996(flag,meta47997));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async47996(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47999 = (function (flag,cb,meta48000){
this.flag = flag;
this.cb = cb;
this.meta48000 = meta48000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48001,meta48000__$1){
var self__ = this;
var _48001__$1 = this;
return (new cljs.core.async.t_cljs$core$async47999(self__.flag,self__.cb,meta48000__$1));
}));

(cljs.core.async.t_cljs$core$async47999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48001){
var self__ = this;
var _48001__$1 = this;
return self__.meta48000;
}));

(cljs.core.async.t_cljs$core$async47999.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47999.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48000","meta48000",-227866444,null)], null);
}));

(cljs.core.async.t_cljs$core$async47999.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47999");

(cljs.core.async.t_cljs$core$async47999.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async47999");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47999.
 */
cljs.core.async.__GT_t_cljs$core$async47999 = (function cljs$core$async$__GT_t_cljs$core$async47999(flag,cb,meta48000){
return (new cljs.core.async.t_cljs$core$async47999(flag,cb,meta48000));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async47999(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_49421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_49421)){
if((!(((port_49421.cljs$core$IFn$_invoke$arity$1 ? port_49421.cljs$core$IFn$_invoke$arity$1((1)) : port_49421.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__49422 = (i + (1));
i = G__49422;
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
return (function (p1__48002_SHARP_){
var G__48004 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48002_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48004) : fret.call(null,G__48004));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__48003_SHARP_){
var G__48005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48003_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48005) : fret.call(null,G__48005));
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
var G__49423 = (i + (1));
i = G__49423;
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
var len__5749__auto___49424 = arguments.length;
var i__5750__auto___49425 = (0);
while(true){
if((i__5750__auto___49425 < len__5749__auto___49424)){
args__5755__auto__.push((arguments[i__5750__auto___49425]));

var G__49426 = (i__5750__auto___49425 + (1));
i__5750__auto___49425 = G__49426;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48008){
var map__48009 = p__48008;
var map__48009__$1 = cljs.core.__destructure_map(map__48009);
var opts = map__48009__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48006){
var G__48007 = cljs.core.first(seq48006);
var seq48006__$1 = cljs.core.next(seq48006);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48007,seq48006__$1);
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
var G__48011 = arguments.length;
switch (G__48011) {
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
var c__47925__auto___49428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48035){
var state_val_48036 = (state_48035[(1)]);
if((state_val_48036 === (7))){
var inst_48031 = (state_48035[(2)]);
var state_48035__$1 = state_48035;
var statearr_48037_49429 = state_48035__$1;
(statearr_48037_49429[(2)] = inst_48031);

(statearr_48037_49429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48036 === (1))){
var state_48035__$1 = state_48035;
var statearr_48038_49430 = state_48035__$1;
(statearr_48038_49430[(2)] = null);

(statearr_48038_49430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48036 === (4))){
var inst_48014 = (state_48035[(7)]);
var inst_48014__$1 = (state_48035[(2)]);
var inst_48015 = (inst_48014__$1 == null);
var state_48035__$1 = (function (){var statearr_48039 = state_48035;
(statearr_48039[(7)] = inst_48014__$1);

return statearr_48039;
})();
if(cljs.core.truth_(inst_48015)){
var statearr_48040_49431 = state_48035__$1;
(statearr_48040_49431[(1)] = (5));

} else {
var statearr_48041_49432 = state_48035__$1;
(statearr_48041_49432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48036 === (13))){
var state_48035__$1 = state_48035;
var statearr_48042_49436 = state_48035__$1;
(statearr_48042_49436[(2)] = null);

(statearr_48042_49436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48036 === (6))){
var inst_48014 = (state_48035[(7)]);
var state_48035__$1 = state_48035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48035__$1,(11),to,inst_48014);
} else {
if((state_val_48036 === (3))){
var inst_48033 = (state_48035[(2)]);
var state_48035__$1 = state_48035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48035__$1,inst_48033);
} else {
if((state_val_48036 === (12))){
var state_48035__$1 = state_48035;
var statearr_48043_49438 = state_48035__$1;
(statearr_48043_49438[(2)] = null);

(statearr_48043_49438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48036 === (2))){
var state_48035__$1 = state_48035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48035__$1,(4),from);
} else {
if((state_val_48036 === (11))){
var inst_48024 = (state_48035[(2)]);
var state_48035__$1 = state_48035;
if(cljs.core.truth_(inst_48024)){
var statearr_48044_49440 = state_48035__$1;
(statearr_48044_49440[(1)] = (12));

} else {
var statearr_48045_49441 = state_48035__$1;
(statearr_48045_49441[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48036 === (9))){
var state_48035__$1 = state_48035;
var statearr_48046_49442 = state_48035__$1;
(statearr_48046_49442[(2)] = null);

(statearr_48046_49442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48036 === (5))){
var state_48035__$1 = state_48035;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48047_49443 = state_48035__$1;
(statearr_48047_49443[(1)] = (8));

} else {
var statearr_48048_49444 = state_48035__$1;
(statearr_48048_49444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48036 === (14))){
var inst_48029 = (state_48035[(2)]);
var state_48035__$1 = state_48035;
var statearr_48049_49445 = state_48035__$1;
(statearr_48049_49445[(2)] = inst_48029);

(statearr_48049_49445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48036 === (10))){
var inst_48021 = (state_48035[(2)]);
var state_48035__$1 = state_48035;
var statearr_48050_49446 = state_48035__$1;
(statearr_48050_49446[(2)] = inst_48021);

(statearr_48050_49446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48036 === (8))){
var inst_48018 = cljs.core.async.close_BANG_(to);
var state_48035__$1 = state_48035;
var statearr_48051_49447 = state_48035__$1;
(statearr_48051_49447[(2)] = inst_48018);

(statearr_48051_49447[(1)] = (10));


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
var cljs$core$async$state_machine__47855__auto__ = null;
var cljs$core$async$state_machine__47855__auto____0 = (function (){
var statearr_48052 = [null,null,null,null,null,null,null,null];
(statearr_48052[(0)] = cljs$core$async$state_machine__47855__auto__);

(statearr_48052[(1)] = (1));

return statearr_48052;
});
var cljs$core$async$state_machine__47855__auto____1 = (function (state_48035){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48035);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48053){var ex__47858__auto__ = e48053;
var statearr_48054_49448 = state_48035;
(statearr_48054_49448[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48035[(4)]))){
var statearr_48055_49449 = state_48035;
(statearr_48055_49449[(1)] = cljs.core.first((state_48035[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49450 = state_48035;
state_48035 = G__49450;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$state_machine__47855__auto__ = function(state_48035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47855__auto____1.call(this,state_48035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47855__auto____0;
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47855__auto____1;
return cljs$core$async$state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48056 = f__47926__auto__();
(statearr_48056[(6)] = c__47925__auto___49428);

return statearr_48056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
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
var process__$1 = (function (p__48057){
var vec__48058 = p__48057;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48058,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48058,(1),null);
var job = vec__48058;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47925__auto___49453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48065){
var state_val_48066 = (state_48065[(1)]);
if((state_val_48066 === (1))){
var state_48065__$1 = state_48065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48065__$1,(2),res,v);
} else {
if((state_val_48066 === (2))){
var inst_48062 = (state_48065[(2)]);
var inst_48063 = cljs.core.async.close_BANG_(res);
var state_48065__$1 = (function (){var statearr_48067 = state_48065;
(statearr_48067[(7)] = inst_48062);

return statearr_48067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48065__$1,inst_48063);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0 = (function (){
var statearr_48068 = [null,null,null,null,null,null,null,null];
(statearr_48068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__);

(statearr_48068[(1)] = (1));

return statearr_48068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1 = (function (state_48065){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48065);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48069){var ex__47858__auto__ = e48069;
var statearr_48070_49458 = state_48065;
(statearr_48070_49458[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48065[(4)]))){
var statearr_48071_49459 = state_48065;
(statearr_48071_49459[(1)] = cljs.core.first((state_48065[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49460 = state_48065;
state_48065 = G__49460;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__ = function(state_48065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1.call(this,state_48065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48072 = f__47926__auto__();
(statearr_48072[(6)] = c__47925__auto___49453);

return statearr_48072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__48073){
var vec__48074 = p__48073;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48074,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48074,(1),null);
var job = vec__48074;
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
var n__5616__auto___49465 = n;
var __49466 = (0);
while(true){
if((__49466 < n__5616__auto___49465)){
var G__48077_49467 = type;
var G__48077_49468__$1 = (((G__48077_49467 instanceof cljs.core.Keyword))?G__48077_49467.fqn:null);
switch (G__48077_49468__$1) {
case "compute":
var c__47925__auto___49471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49466,c__47925__auto___49471,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async){
return (function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = ((function (__49466,c__47925__auto___49471,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async){
return (function (state_48090){
var state_val_48091 = (state_48090[(1)]);
if((state_val_48091 === (1))){
var state_48090__$1 = state_48090;
var statearr_48092_49474 = state_48090__$1;
(statearr_48092_49474[(2)] = null);

(statearr_48092_49474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48091 === (2))){
var state_48090__$1 = state_48090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48090__$1,(4),jobs);
} else {
if((state_val_48091 === (3))){
var inst_48088 = (state_48090[(2)]);
var state_48090__$1 = state_48090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48090__$1,inst_48088);
} else {
if((state_val_48091 === (4))){
var inst_48080 = (state_48090[(2)]);
var inst_48081 = process__$1(inst_48080);
var state_48090__$1 = state_48090;
if(cljs.core.truth_(inst_48081)){
var statearr_48093_49478 = state_48090__$1;
(statearr_48093_49478[(1)] = (5));

} else {
var statearr_48094_49479 = state_48090__$1;
(statearr_48094_49479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48091 === (5))){
var state_48090__$1 = state_48090;
var statearr_48095_49480 = state_48090__$1;
(statearr_48095_49480[(2)] = null);

(statearr_48095_49480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48091 === (6))){
var state_48090__$1 = state_48090;
var statearr_48096_49481 = state_48090__$1;
(statearr_48096_49481[(2)] = null);

(statearr_48096_49481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48091 === (7))){
var inst_48086 = (state_48090[(2)]);
var state_48090__$1 = state_48090;
var statearr_48097_49482 = state_48090__$1;
(statearr_48097_49482[(2)] = inst_48086);

(statearr_48097_49482[(1)] = (3));


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
});})(__49466,c__47925__auto___49471,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async))
;
return ((function (__49466,switch__47854__auto__,c__47925__auto___49471,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0 = (function (){
var statearr_48098 = [null,null,null,null,null,null,null];
(statearr_48098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__);

(statearr_48098[(1)] = (1));

return statearr_48098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1 = (function (state_48090){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48090);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48099){var ex__47858__auto__ = e48099;
var statearr_48100_49485 = state_48090;
(statearr_48100_49485[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48090[(4)]))){
var statearr_48101_49486 = state_48090;
(statearr_48101_49486[(1)] = cljs.core.first((state_48090[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49487 = state_48090;
state_48090 = G__49487;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__ = function(state_48090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1.call(this,state_48090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__;
})()
;})(__49466,switch__47854__auto__,c__47925__auto___49471,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async))
})();
var state__47927__auto__ = (function (){var statearr_48102 = f__47926__auto__();
(statearr_48102[(6)] = c__47925__auto___49471);

return statearr_48102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
});})(__49466,c__47925__auto___49471,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async))
);


break;
case "async":
var c__47925__auto___49489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49466,c__47925__auto___49489,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async){
return (function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = ((function (__49466,c__47925__auto___49489,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async){
return (function (state_48115){
var state_val_48116 = (state_48115[(1)]);
if((state_val_48116 === (1))){
var state_48115__$1 = state_48115;
var statearr_48117_49490 = state_48115__$1;
(statearr_48117_49490[(2)] = null);

(statearr_48117_49490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48116 === (2))){
var state_48115__$1 = state_48115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48115__$1,(4),jobs);
} else {
if((state_val_48116 === (3))){
var inst_48113 = (state_48115[(2)]);
var state_48115__$1 = state_48115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48115__$1,inst_48113);
} else {
if((state_val_48116 === (4))){
var inst_48105 = (state_48115[(2)]);
var inst_48106 = async(inst_48105);
var state_48115__$1 = state_48115;
if(cljs.core.truth_(inst_48106)){
var statearr_48118_49491 = state_48115__$1;
(statearr_48118_49491[(1)] = (5));

} else {
var statearr_48119_49492 = state_48115__$1;
(statearr_48119_49492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48116 === (5))){
var state_48115__$1 = state_48115;
var statearr_48120_49493 = state_48115__$1;
(statearr_48120_49493[(2)] = null);

(statearr_48120_49493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48116 === (6))){
var state_48115__$1 = state_48115;
var statearr_48121_49494 = state_48115__$1;
(statearr_48121_49494[(2)] = null);

(statearr_48121_49494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48116 === (7))){
var inst_48111 = (state_48115[(2)]);
var state_48115__$1 = state_48115;
var statearr_48122_49495 = state_48115__$1;
(statearr_48122_49495[(2)] = inst_48111);

(statearr_48122_49495[(1)] = (3));


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
});})(__49466,c__47925__auto___49489,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async))
;
return ((function (__49466,switch__47854__auto__,c__47925__auto___49489,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0 = (function (){
var statearr_48123 = [null,null,null,null,null,null,null];
(statearr_48123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__);

(statearr_48123[(1)] = (1));

return statearr_48123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1 = (function (state_48115){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48115);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48124){var ex__47858__auto__ = e48124;
var statearr_48125_49496 = state_48115;
(statearr_48125_49496[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48115[(4)]))){
var statearr_48126_49497 = state_48115;
(statearr_48126_49497[(1)] = cljs.core.first((state_48115[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49498 = state_48115;
state_48115 = G__49498;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__ = function(state_48115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1.call(this,state_48115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__;
})()
;})(__49466,switch__47854__auto__,c__47925__auto___49489,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async))
})();
var state__47927__auto__ = (function (){var statearr_48127 = f__47926__auto__();
(statearr_48127[(6)] = c__47925__auto___49489);

return statearr_48127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
});})(__49466,c__47925__auto___49489,G__48077_49467,G__48077_49468__$1,n__5616__auto___49465,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48077_49468__$1)].join('')));

}

var G__49499 = (__49466 + (1));
__49466 = G__49499;
continue;
} else {
}
break;
}

var c__47925__auto___49500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48149){
var state_val_48150 = (state_48149[(1)]);
if((state_val_48150 === (7))){
var inst_48145 = (state_48149[(2)]);
var state_48149__$1 = state_48149;
var statearr_48151_49501 = state_48149__$1;
(statearr_48151_49501[(2)] = inst_48145);

(statearr_48151_49501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (1))){
var state_48149__$1 = state_48149;
var statearr_48152_49502 = state_48149__$1;
(statearr_48152_49502[(2)] = null);

(statearr_48152_49502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (4))){
var inst_48130 = (state_48149[(7)]);
var inst_48130__$1 = (state_48149[(2)]);
var inst_48131 = (inst_48130__$1 == null);
var state_48149__$1 = (function (){var statearr_48153 = state_48149;
(statearr_48153[(7)] = inst_48130__$1);

return statearr_48153;
})();
if(cljs.core.truth_(inst_48131)){
var statearr_48154_49503 = state_48149__$1;
(statearr_48154_49503[(1)] = (5));

} else {
var statearr_48155_49504 = state_48149__$1;
(statearr_48155_49504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (6))){
var inst_48130 = (state_48149[(7)]);
var inst_48135 = (state_48149[(8)]);
var inst_48135__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_48136 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48137 = [inst_48130,inst_48135__$1];
var inst_48138 = (new cljs.core.PersistentVector(null,2,(5),inst_48136,inst_48137,null));
var state_48149__$1 = (function (){var statearr_48156 = state_48149;
(statearr_48156[(8)] = inst_48135__$1);

return statearr_48156;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48149__$1,(8),jobs,inst_48138);
} else {
if((state_val_48150 === (3))){
var inst_48147 = (state_48149[(2)]);
var state_48149__$1 = state_48149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48149__$1,inst_48147);
} else {
if((state_val_48150 === (2))){
var state_48149__$1 = state_48149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48149__$1,(4),from);
} else {
if((state_val_48150 === (9))){
var inst_48142 = (state_48149[(2)]);
var state_48149__$1 = (function (){var statearr_48157 = state_48149;
(statearr_48157[(9)] = inst_48142);

return statearr_48157;
})();
var statearr_48158_49505 = state_48149__$1;
(statearr_48158_49505[(2)] = null);

(statearr_48158_49505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (5))){
var inst_48133 = cljs.core.async.close_BANG_(jobs);
var state_48149__$1 = state_48149;
var statearr_48159_49506 = state_48149__$1;
(statearr_48159_49506[(2)] = inst_48133);

(statearr_48159_49506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48150 === (8))){
var inst_48135 = (state_48149[(8)]);
var inst_48140 = (state_48149[(2)]);
var state_48149__$1 = (function (){var statearr_48160 = state_48149;
(statearr_48160[(10)] = inst_48140);

return statearr_48160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48149__$1,(9),results,inst_48135);
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
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0 = (function (){
var statearr_48161 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__);

(statearr_48161[(1)] = (1));

return statearr_48161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1 = (function (state_48149){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48149);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48162){var ex__47858__auto__ = e48162;
var statearr_48163_49507 = state_48149;
(statearr_48163_49507[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48149[(4)]))){
var statearr_48164_49508 = state_48149;
(statearr_48164_49508[(1)] = cljs.core.first((state_48149[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49509 = state_48149;
state_48149 = G__49509;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__ = function(state_48149){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1.call(this,state_48149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48165 = f__47926__auto__();
(statearr_48165[(6)] = c__47925__auto___49500);

return statearr_48165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
}));


var c__47925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48203){
var state_val_48204 = (state_48203[(1)]);
if((state_val_48204 === (7))){
var inst_48199 = (state_48203[(2)]);
var state_48203__$1 = state_48203;
var statearr_48205_49510 = state_48203__$1;
(statearr_48205_49510[(2)] = inst_48199);

(statearr_48205_49510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (20))){
var state_48203__$1 = state_48203;
var statearr_48206_49511 = state_48203__$1;
(statearr_48206_49511[(2)] = null);

(statearr_48206_49511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (1))){
var state_48203__$1 = state_48203;
var statearr_48207_49512 = state_48203__$1;
(statearr_48207_49512[(2)] = null);

(statearr_48207_49512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (4))){
var inst_48168 = (state_48203[(7)]);
var inst_48168__$1 = (state_48203[(2)]);
var inst_48169 = (inst_48168__$1 == null);
var state_48203__$1 = (function (){var statearr_48208 = state_48203;
(statearr_48208[(7)] = inst_48168__$1);

return statearr_48208;
})();
if(cljs.core.truth_(inst_48169)){
var statearr_48209_49517 = state_48203__$1;
(statearr_48209_49517[(1)] = (5));

} else {
var statearr_48210_49518 = state_48203__$1;
(statearr_48210_49518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (15))){
var inst_48181 = (state_48203[(8)]);
var state_48203__$1 = state_48203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48203__$1,(18),to,inst_48181);
} else {
if((state_val_48204 === (21))){
var inst_48194 = (state_48203[(2)]);
var state_48203__$1 = state_48203;
var statearr_48211_49519 = state_48203__$1;
(statearr_48211_49519[(2)] = inst_48194);

(statearr_48211_49519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (13))){
var inst_48196 = (state_48203[(2)]);
var state_48203__$1 = (function (){var statearr_48212 = state_48203;
(statearr_48212[(9)] = inst_48196);

return statearr_48212;
})();
var statearr_48213_49524 = state_48203__$1;
(statearr_48213_49524[(2)] = null);

(statearr_48213_49524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (6))){
var inst_48168 = (state_48203[(7)]);
var state_48203__$1 = state_48203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48203__$1,(11),inst_48168);
} else {
if((state_val_48204 === (17))){
var inst_48189 = (state_48203[(2)]);
var state_48203__$1 = state_48203;
if(cljs.core.truth_(inst_48189)){
var statearr_48214_49525 = state_48203__$1;
(statearr_48214_49525[(1)] = (19));

} else {
var statearr_48215_49526 = state_48203__$1;
(statearr_48215_49526[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (3))){
var inst_48201 = (state_48203[(2)]);
var state_48203__$1 = state_48203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48203__$1,inst_48201);
} else {
if((state_val_48204 === (12))){
var inst_48178 = (state_48203[(10)]);
var state_48203__$1 = state_48203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48203__$1,(14),inst_48178);
} else {
if((state_val_48204 === (2))){
var state_48203__$1 = state_48203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48203__$1,(4),results);
} else {
if((state_val_48204 === (19))){
var state_48203__$1 = state_48203;
var statearr_48216_49531 = state_48203__$1;
(statearr_48216_49531[(2)] = null);

(statearr_48216_49531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (11))){
var inst_48178 = (state_48203[(2)]);
var state_48203__$1 = (function (){var statearr_48217 = state_48203;
(statearr_48217[(10)] = inst_48178);

return statearr_48217;
})();
var statearr_48218_49532 = state_48203__$1;
(statearr_48218_49532[(2)] = null);

(statearr_48218_49532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (9))){
var state_48203__$1 = state_48203;
var statearr_48219_49533 = state_48203__$1;
(statearr_48219_49533[(2)] = null);

(statearr_48219_49533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (5))){
var state_48203__$1 = state_48203;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48220_49534 = state_48203__$1;
(statearr_48220_49534[(1)] = (8));

} else {
var statearr_48221_49535 = state_48203__$1;
(statearr_48221_49535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (14))){
var inst_48181 = (state_48203[(8)]);
var inst_48183 = (state_48203[(11)]);
var inst_48181__$1 = (state_48203[(2)]);
var inst_48182 = (inst_48181__$1 == null);
var inst_48183__$1 = cljs.core.not(inst_48182);
var state_48203__$1 = (function (){var statearr_48222 = state_48203;
(statearr_48222[(8)] = inst_48181__$1);

(statearr_48222[(11)] = inst_48183__$1);

return statearr_48222;
})();
if(inst_48183__$1){
var statearr_48223_49536 = state_48203__$1;
(statearr_48223_49536[(1)] = (15));

} else {
var statearr_48224_49537 = state_48203__$1;
(statearr_48224_49537[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (16))){
var inst_48183 = (state_48203[(11)]);
var state_48203__$1 = state_48203;
var statearr_48225_49538 = state_48203__$1;
(statearr_48225_49538[(2)] = inst_48183);

(statearr_48225_49538[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (10))){
var inst_48175 = (state_48203[(2)]);
var state_48203__$1 = state_48203;
var statearr_48226_49539 = state_48203__$1;
(statearr_48226_49539[(2)] = inst_48175);

(statearr_48226_49539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (18))){
var inst_48186 = (state_48203[(2)]);
var state_48203__$1 = state_48203;
var statearr_48227_49540 = state_48203__$1;
(statearr_48227_49540[(2)] = inst_48186);

(statearr_48227_49540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48204 === (8))){
var inst_48172 = cljs.core.async.close_BANG_(to);
var state_48203__$1 = state_48203;
var statearr_48228_49541 = state_48203__$1;
(statearr_48228_49541[(2)] = inst_48172);

(statearr_48228_49541[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0 = (function (){
var statearr_48229 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__);

(statearr_48229[(1)] = (1));

return statearr_48229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1 = (function (state_48203){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48203);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48230){var ex__47858__auto__ = e48230;
var statearr_48231_49545 = state_48203;
(statearr_48231_49545[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48203[(4)]))){
var statearr_48232_49547 = state_48203;
(statearr_48232_49547[(1)] = cljs.core.first((state_48203[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49548 = state_48203;
state_48203 = G__49548;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__ = function(state_48203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1.call(this,state_48203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47855__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48233 = f__47926__auto__();
(statearr_48233[(6)] = c__47925__auto__);

return statearr_48233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
}));

return c__47925__auto__;
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
var G__48235 = arguments.length;
switch (G__48235) {
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
var G__48237 = arguments.length;
switch (G__48237) {
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
var G__48239 = arguments.length;
switch (G__48239) {
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
var c__47925__auto___49562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48265){
var state_val_48266 = (state_48265[(1)]);
if((state_val_48266 === (7))){
var inst_48261 = (state_48265[(2)]);
var state_48265__$1 = state_48265;
var statearr_48267_49563 = state_48265__$1;
(statearr_48267_49563[(2)] = inst_48261);

(statearr_48267_49563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (1))){
var state_48265__$1 = state_48265;
var statearr_48268_49564 = state_48265__$1;
(statearr_48268_49564[(2)] = null);

(statearr_48268_49564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (4))){
var inst_48242 = (state_48265[(7)]);
var inst_48242__$1 = (state_48265[(2)]);
var inst_48243 = (inst_48242__$1 == null);
var state_48265__$1 = (function (){var statearr_48269 = state_48265;
(statearr_48269[(7)] = inst_48242__$1);

return statearr_48269;
})();
if(cljs.core.truth_(inst_48243)){
var statearr_48270_49568 = state_48265__$1;
(statearr_48270_49568[(1)] = (5));

} else {
var statearr_48271_49569 = state_48265__$1;
(statearr_48271_49569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (13))){
var state_48265__$1 = state_48265;
var statearr_48272_49570 = state_48265__$1;
(statearr_48272_49570[(2)] = null);

(statearr_48272_49570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (6))){
var inst_48242 = (state_48265[(7)]);
var inst_48248 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48242) : p.call(null,inst_48242));
var state_48265__$1 = state_48265;
if(cljs.core.truth_(inst_48248)){
var statearr_48273_49574 = state_48265__$1;
(statearr_48273_49574[(1)] = (9));

} else {
var statearr_48274_49575 = state_48265__$1;
(statearr_48274_49575[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (3))){
var inst_48263 = (state_48265[(2)]);
var state_48265__$1 = state_48265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48265__$1,inst_48263);
} else {
if((state_val_48266 === (12))){
var state_48265__$1 = state_48265;
var statearr_48275_49576 = state_48265__$1;
(statearr_48275_49576[(2)] = null);

(statearr_48275_49576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (2))){
var state_48265__$1 = state_48265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48265__$1,(4),ch);
} else {
if((state_val_48266 === (11))){
var inst_48242 = (state_48265[(7)]);
var inst_48252 = (state_48265[(2)]);
var state_48265__$1 = state_48265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48265__$1,(8),inst_48252,inst_48242);
} else {
if((state_val_48266 === (9))){
var state_48265__$1 = state_48265;
var statearr_48276_49581 = state_48265__$1;
(statearr_48276_49581[(2)] = tc);

(statearr_48276_49581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (5))){
var inst_48245 = cljs.core.async.close_BANG_(tc);
var inst_48246 = cljs.core.async.close_BANG_(fc);
var state_48265__$1 = (function (){var statearr_48277 = state_48265;
(statearr_48277[(8)] = inst_48245);

return statearr_48277;
})();
var statearr_48278_49582 = state_48265__$1;
(statearr_48278_49582[(2)] = inst_48246);

(statearr_48278_49582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (14))){
var inst_48259 = (state_48265[(2)]);
var state_48265__$1 = state_48265;
var statearr_48279_49585 = state_48265__$1;
(statearr_48279_49585[(2)] = inst_48259);

(statearr_48279_49585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (10))){
var state_48265__$1 = state_48265;
var statearr_48280_49586 = state_48265__$1;
(statearr_48280_49586[(2)] = fc);

(statearr_48280_49586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (8))){
var inst_48254 = (state_48265[(2)]);
var state_48265__$1 = state_48265;
if(cljs.core.truth_(inst_48254)){
var statearr_48281_49587 = state_48265__$1;
(statearr_48281_49587[(1)] = (12));

} else {
var statearr_48282_49588 = state_48265__$1;
(statearr_48282_49588[(1)] = (13));

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
var cljs$core$async$state_machine__47855__auto__ = null;
var cljs$core$async$state_machine__47855__auto____0 = (function (){
var statearr_48283 = [null,null,null,null,null,null,null,null,null];
(statearr_48283[(0)] = cljs$core$async$state_machine__47855__auto__);

(statearr_48283[(1)] = (1));

return statearr_48283;
});
var cljs$core$async$state_machine__47855__auto____1 = (function (state_48265){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48265);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48284){var ex__47858__auto__ = e48284;
var statearr_48285_49590 = state_48265;
(statearr_48285_49590[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48265[(4)]))){
var statearr_48286_49591 = state_48265;
(statearr_48286_49591[(1)] = cljs.core.first((state_48265[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49592 = state_48265;
state_48265 = G__49592;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$state_machine__47855__auto__ = function(state_48265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47855__auto____1.call(this,state_48265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47855__auto____0;
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47855__auto____1;
return cljs$core$async$state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48287 = f__47926__auto__();
(statearr_48287[(6)] = c__47925__auto___49562);

return statearr_48287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
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
var c__47925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48309){
var state_val_48310 = (state_48309[(1)]);
if((state_val_48310 === (7))){
var inst_48305 = (state_48309[(2)]);
var state_48309__$1 = state_48309;
var statearr_48311_49593 = state_48309__$1;
(statearr_48311_49593[(2)] = inst_48305);

(statearr_48311_49593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48310 === (1))){
var inst_48288 = init;
var inst_48289 = inst_48288;
var state_48309__$1 = (function (){var statearr_48312 = state_48309;
(statearr_48312[(7)] = inst_48289);

return statearr_48312;
})();
var statearr_48313_49594 = state_48309__$1;
(statearr_48313_49594[(2)] = null);

(statearr_48313_49594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48310 === (4))){
var inst_48292 = (state_48309[(8)]);
var inst_48292__$1 = (state_48309[(2)]);
var inst_48293 = (inst_48292__$1 == null);
var state_48309__$1 = (function (){var statearr_48314 = state_48309;
(statearr_48314[(8)] = inst_48292__$1);

return statearr_48314;
})();
if(cljs.core.truth_(inst_48293)){
var statearr_48315_49595 = state_48309__$1;
(statearr_48315_49595[(1)] = (5));

} else {
var statearr_48316_49596 = state_48309__$1;
(statearr_48316_49596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48310 === (6))){
var inst_48289 = (state_48309[(7)]);
var inst_48292 = (state_48309[(8)]);
var inst_48296 = (state_48309[(9)]);
var inst_48296__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_48289,inst_48292) : f.call(null,inst_48289,inst_48292));
var inst_48297 = cljs.core.reduced_QMARK_(inst_48296__$1);
var state_48309__$1 = (function (){var statearr_48317 = state_48309;
(statearr_48317[(9)] = inst_48296__$1);

return statearr_48317;
})();
if(inst_48297){
var statearr_48318_49597 = state_48309__$1;
(statearr_48318_49597[(1)] = (8));

} else {
var statearr_48319_49598 = state_48309__$1;
(statearr_48319_49598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48310 === (3))){
var inst_48307 = (state_48309[(2)]);
var state_48309__$1 = state_48309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48309__$1,inst_48307);
} else {
if((state_val_48310 === (2))){
var state_48309__$1 = state_48309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48309__$1,(4),ch);
} else {
if((state_val_48310 === (9))){
var inst_48296 = (state_48309[(9)]);
var inst_48289 = inst_48296;
var state_48309__$1 = (function (){var statearr_48320 = state_48309;
(statearr_48320[(7)] = inst_48289);

return statearr_48320;
})();
var statearr_48321_49599 = state_48309__$1;
(statearr_48321_49599[(2)] = null);

(statearr_48321_49599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48310 === (5))){
var inst_48289 = (state_48309[(7)]);
var state_48309__$1 = state_48309;
var statearr_48322_49600 = state_48309__$1;
(statearr_48322_49600[(2)] = inst_48289);

(statearr_48322_49600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48310 === (10))){
var inst_48303 = (state_48309[(2)]);
var state_48309__$1 = state_48309;
var statearr_48323_49601 = state_48309__$1;
(statearr_48323_49601[(2)] = inst_48303);

(statearr_48323_49601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48310 === (8))){
var inst_48296 = (state_48309[(9)]);
var inst_48299 = cljs.core.deref(inst_48296);
var state_48309__$1 = state_48309;
var statearr_48324_49611 = state_48309__$1;
(statearr_48324_49611[(2)] = inst_48299);

(statearr_48324_49611[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__47855__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47855__auto____0 = (function (){
var statearr_48325 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48325[(0)] = cljs$core$async$reduce_$_state_machine__47855__auto__);

(statearr_48325[(1)] = (1));

return statearr_48325;
});
var cljs$core$async$reduce_$_state_machine__47855__auto____1 = (function (state_48309){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48309);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48326){var ex__47858__auto__ = e48326;
var statearr_48327_49621 = state_48309;
(statearr_48327_49621[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48309[(4)]))){
var statearr_48328_49626 = state_48309;
(statearr_48328_49626[(1)] = cljs.core.first((state_48309[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49627 = state_48309;
state_48309 = G__49627;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47855__auto__ = function(state_48309){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47855__auto____1.call(this,state_48309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47855__auto____0;
cljs$core$async$reduce_$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47855__auto____1;
return cljs$core$async$reduce_$_state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48329 = f__47926__auto__();
(statearr_48329[(6)] = c__47925__auto__);

return statearr_48329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
}));

return c__47925__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48335){
var state_val_48336 = (state_48335[(1)]);
if((state_val_48336 === (1))){
var inst_48330 = cljs.core.async.reduce(f__$1,init,ch);
var state_48335__$1 = state_48335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48335__$1,(2),inst_48330);
} else {
if((state_val_48336 === (2))){
var inst_48332 = (state_48335[(2)]);
var inst_48333 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48332) : f__$1.call(null,inst_48332));
var state_48335__$1 = state_48335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48335__$1,inst_48333);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47855__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47855__auto____0 = (function (){
var statearr_48337 = [null,null,null,null,null,null,null];
(statearr_48337[(0)] = cljs$core$async$transduce_$_state_machine__47855__auto__);

(statearr_48337[(1)] = (1));

return statearr_48337;
});
var cljs$core$async$transduce_$_state_machine__47855__auto____1 = (function (state_48335){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48335);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48338){var ex__47858__auto__ = e48338;
var statearr_48339_49629 = state_48335;
(statearr_48339_49629[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48335[(4)]))){
var statearr_48340_49630 = state_48335;
(statearr_48340_49630[(1)] = cljs.core.first((state_48335[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49631 = state_48335;
state_48335 = G__49631;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47855__auto__ = function(state_48335){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47855__auto____1.call(this,state_48335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47855__auto____0;
cljs$core$async$transduce_$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47855__auto____1;
return cljs$core$async$transduce_$_state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48341 = f__47926__auto__();
(statearr_48341[(6)] = c__47925__auto__);

return statearr_48341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
}));

return c__47925__auto__;
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
var G__48343 = arguments.length;
switch (G__48343) {
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
var c__47925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48368){
var state_val_48369 = (state_48368[(1)]);
if((state_val_48369 === (7))){
var inst_48350 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
var statearr_48370_49633 = state_48368__$1;
(statearr_48370_49633[(2)] = inst_48350);

(statearr_48370_49633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (1))){
var inst_48344 = cljs.core.seq(coll);
var inst_48345 = inst_48344;
var state_48368__$1 = (function (){var statearr_48371 = state_48368;
(statearr_48371[(7)] = inst_48345);

return statearr_48371;
})();
var statearr_48372_49634 = state_48368__$1;
(statearr_48372_49634[(2)] = null);

(statearr_48372_49634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (4))){
var inst_48345 = (state_48368[(7)]);
var inst_48348 = cljs.core.first(inst_48345);
var state_48368__$1 = state_48368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48368__$1,(7),ch,inst_48348);
} else {
if((state_val_48369 === (13))){
var inst_48362 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
var statearr_48373_49635 = state_48368__$1;
(statearr_48373_49635[(2)] = inst_48362);

(statearr_48373_49635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (6))){
var inst_48353 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
if(cljs.core.truth_(inst_48353)){
var statearr_48374_49636 = state_48368__$1;
(statearr_48374_49636[(1)] = (8));

} else {
var statearr_48375_49637 = state_48368__$1;
(statearr_48375_49637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (3))){
var inst_48366 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48368__$1,inst_48366);
} else {
if((state_val_48369 === (12))){
var state_48368__$1 = state_48368;
var statearr_48376_49638 = state_48368__$1;
(statearr_48376_49638[(2)] = null);

(statearr_48376_49638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (2))){
var inst_48345 = (state_48368[(7)]);
var state_48368__$1 = state_48368;
if(cljs.core.truth_(inst_48345)){
var statearr_48377_49639 = state_48368__$1;
(statearr_48377_49639[(1)] = (4));

} else {
var statearr_48378_49640 = state_48368__$1;
(statearr_48378_49640[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (11))){
var inst_48359 = cljs.core.async.close_BANG_(ch);
var state_48368__$1 = state_48368;
var statearr_48379_49641 = state_48368__$1;
(statearr_48379_49641[(2)] = inst_48359);

(statearr_48379_49641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (9))){
var state_48368__$1 = state_48368;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48380_49642 = state_48368__$1;
(statearr_48380_49642[(1)] = (11));

} else {
var statearr_48381_49643 = state_48368__$1;
(statearr_48381_49643[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (5))){
var inst_48345 = (state_48368[(7)]);
var state_48368__$1 = state_48368;
var statearr_48382_49644 = state_48368__$1;
(statearr_48382_49644[(2)] = inst_48345);

(statearr_48382_49644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (10))){
var inst_48364 = (state_48368[(2)]);
var state_48368__$1 = state_48368;
var statearr_48383_49645 = state_48368__$1;
(statearr_48383_49645[(2)] = inst_48364);

(statearr_48383_49645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48369 === (8))){
var inst_48345 = (state_48368[(7)]);
var inst_48355 = cljs.core.next(inst_48345);
var inst_48345__$1 = inst_48355;
var state_48368__$1 = (function (){var statearr_48384 = state_48368;
(statearr_48384[(7)] = inst_48345__$1);

return statearr_48384;
})();
var statearr_48385_49647 = state_48368__$1;
(statearr_48385_49647[(2)] = null);

(statearr_48385_49647[(1)] = (2));


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
var cljs$core$async$state_machine__47855__auto__ = null;
var cljs$core$async$state_machine__47855__auto____0 = (function (){
var statearr_48386 = [null,null,null,null,null,null,null,null];
(statearr_48386[(0)] = cljs$core$async$state_machine__47855__auto__);

(statearr_48386[(1)] = (1));

return statearr_48386;
});
var cljs$core$async$state_machine__47855__auto____1 = (function (state_48368){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48368);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48387){var ex__47858__auto__ = e48387;
var statearr_48388_49648 = state_48368;
(statearr_48388_49648[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48368[(4)]))){
var statearr_48389_49649 = state_48368;
(statearr_48389_49649[(1)] = cljs.core.first((state_48368[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49650 = state_48368;
state_48368 = G__49650;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$state_machine__47855__auto__ = function(state_48368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47855__auto____1.call(this,state_48368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47855__auto____0;
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47855__auto____1;
return cljs$core$async$state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48390 = f__47926__auto__();
(statearr_48390[(6)] = c__47925__auto__);

return statearr_48390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
}));

return c__47925__auto__;
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
var G__48392 = arguments.length;
switch (G__48392) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_49653 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_49653(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49654 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_49654(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49659 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_49659(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49664 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_49664(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48393 = (function (ch,cs,meta48394){
this.ch = ch;
this.cs = cs;
this.meta48394 = meta48394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48395,meta48394__$1){
var self__ = this;
var _48395__$1 = this;
return (new cljs.core.async.t_cljs$core$async48393(self__.ch,self__.cs,meta48394__$1));
}));

(cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48395){
var self__ = this;
var _48395__$1 = this;
return self__.meta48394;
}));

(cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48393.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48394","meta48394",-547585823,null)], null);
}));

(cljs.core.async.t_cljs$core$async48393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48393");

(cljs.core.async.t_cljs$core$async48393.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48393.
 */
cljs.core.async.__GT_t_cljs$core$async48393 = (function cljs$core$async$__GT_t_cljs$core$async48393(ch,cs,meta48394){
return (new cljs.core.async.t_cljs$core$async48393(ch,cs,meta48394));
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
var m = (new cljs.core.async.t_cljs$core$async48393(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__47925__auto___49670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48528){
var state_val_48529 = (state_48528[(1)]);
if((state_val_48529 === (7))){
var inst_48524 = (state_48528[(2)]);
var state_48528__$1 = state_48528;
var statearr_48530_49675 = state_48528__$1;
(statearr_48530_49675[(2)] = inst_48524);

(statearr_48530_49675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (20))){
var inst_48429 = (state_48528[(7)]);
var inst_48441 = cljs.core.first(inst_48429);
var inst_48442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48441,(0),null);
var inst_48443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48441,(1),null);
var state_48528__$1 = (function (){var statearr_48531 = state_48528;
(statearr_48531[(8)] = inst_48442);

return statearr_48531;
})();
if(cljs.core.truth_(inst_48443)){
var statearr_48532_49676 = state_48528__$1;
(statearr_48532_49676[(1)] = (22));

} else {
var statearr_48533_49677 = state_48528__$1;
(statearr_48533_49677[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (27))){
var inst_48471 = (state_48528[(9)]);
var inst_48473 = (state_48528[(10)]);
var inst_48478 = (state_48528[(11)]);
var inst_48398 = (state_48528[(12)]);
var inst_48478__$1 = cljs.core._nth(inst_48471,inst_48473);
var inst_48479 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48478__$1,inst_48398,done);
var state_48528__$1 = (function (){var statearr_48534 = state_48528;
(statearr_48534[(11)] = inst_48478__$1);

return statearr_48534;
})();
if(cljs.core.truth_(inst_48479)){
var statearr_48535_49679 = state_48528__$1;
(statearr_48535_49679[(1)] = (30));

} else {
var statearr_48536_49680 = state_48528__$1;
(statearr_48536_49680[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (1))){
var state_48528__$1 = state_48528;
var statearr_48537_49681 = state_48528__$1;
(statearr_48537_49681[(2)] = null);

(statearr_48537_49681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (24))){
var inst_48429 = (state_48528[(7)]);
var inst_48448 = (state_48528[(2)]);
var inst_48449 = cljs.core.next(inst_48429);
var inst_48407 = inst_48449;
var inst_48408 = null;
var inst_48409 = (0);
var inst_48410 = (0);
var state_48528__$1 = (function (){var statearr_48538 = state_48528;
(statearr_48538[(13)] = inst_48448);

(statearr_48538[(14)] = inst_48407);

(statearr_48538[(15)] = inst_48408);

(statearr_48538[(16)] = inst_48409);

(statearr_48538[(17)] = inst_48410);

return statearr_48538;
})();
var statearr_48539_49682 = state_48528__$1;
(statearr_48539_49682[(2)] = null);

(statearr_48539_49682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (39))){
var state_48528__$1 = state_48528;
var statearr_48543_49683 = state_48528__$1;
(statearr_48543_49683[(2)] = null);

(statearr_48543_49683[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (4))){
var inst_48398 = (state_48528[(12)]);
var inst_48398__$1 = (state_48528[(2)]);
var inst_48399 = (inst_48398__$1 == null);
var state_48528__$1 = (function (){var statearr_48544 = state_48528;
(statearr_48544[(12)] = inst_48398__$1);

return statearr_48544;
})();
if(cljs.core.truth_(inst_48399)){
var statearr_48545_49688 = state_48528__$1;
(statearr_48545_49688[(1)] = (5));

} else {
var statearr_48546_49689 = state_48528__$1;
(statearr_48546_49689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (15))){
var inst_48410 = (state_48528[(17)]);
var inst_48407 = (state_48528[(14)]);
var inst_48408 = (state_48528[(15)]);
var inst_48409 = (state_48528[(16)]);
var inst_48425 = (state_48528[(2)]);
var inst_48426 = (inst_48410 + (1));
var tmp48540 = inst_48407;
var tmp48541 = inst_48408;
var tmp48542 = inst_48409;
var inst_48407__$1 = tmp48540;
var inst_48408__$1 = tmp48541;
var inst_48409__$1 = tmp48542;
var inst_48410__$1 = inst_48426;
var state_48528__$1 = (function (){var statearr_48547 = state_48528;
(statearr_48547[(18)] = inst_48425);

(statearr_48547[(14)] = inst_48407__$1);

(statearr_48547[(15)] = inst_48408__$1);

(statearr_48547[(16)] = inst_48409__$1);

(statearr_48547[(17)] = inst_48410__$1);

return statearr_48547;
})();
var statearr_48548_49694 = state_48528__$1;
(statearr_48548_49694[(2)] = null);

(statearr_48548_49694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (21))){
var inst_48452 = (state_48528[(2)]);
var state_48528__$1 = state_48528;
var statearr_48552_49695 = state_48528__$1;
(statearr_48552_49695[(2)] = inst_48452);

(statearr_48552_49695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (31))){
var inst_48478 = (state_48528[(11)]);
var inst_48482 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48478);
var state_48528__$1 = state_48528;
var statearr_48553_49696 = state_48528__$1;
(statearr_48553_49696[(2)] = inst_48482);

(statearr_48553_49696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (32))){
var inst_48473 = (state_48528[(10)]);
var inst_48470 = (state_48528[(19)]);
var inst_48471 = (state_48528[(9)]);
var inst_48472 = (state_48528[(20)]);
var inst_48484 = (state_48528[(2)]);
var inst_48485 = (inst_48473 + (1));
var tmp48549 = inst_48472;
var tmp48550 = inst_48471;
var tmp48551 = inst_48470;
var inst_48470__$1 = tmp48551;
var inst_48471__$1 = tmp48550;
var inst_48472__$1 = tmp48549;
var inst_48473__$1 = inst_48485;
var state_48528__$1 = (function (){var statearr_48554 = state_48528;
(statearr_48554[(21)] = inst_48484);

(statearr_48554[(19)] = inst_48470__$1);

(statearr_48554[(9)] = inst_48471__$1);

(statearr_48554[(20)] = inst_48472__$1);

(statearr_48554[(10)] = inst_48473__$1);

return statearr_48554;
})();
var statearr_48555_49701 = state_48528__$1;
(statearr_48555_49701[(2)] = null);

(statearr_48555_49701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (40))){
var inst_48497 = (state_48528[(22)]);
var inst_48501 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48497);
var state_48528__$1 = state_48528;
var statearr_48556_49706 = state_48528__$1;
(statearr_48556_49706[(2)] = inst_48501);

(statearr_48556_49706[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (33))){
var inst_48488 = (state_48528[(23)]);
var inst_48490 = cljs.core.chunked_seq_QMARK_(inst_48488);
var state_48528__$1 = state_48528;
if(inst_48490){
var statearr_48557_49707 = state_48528__$1;
(statearr_48557_49707[(1)] = (36));

} else {
var statearr_48558_49708 = state_48528__$1;
(statearr_48558_49708[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (13))){
var inst_48419 = (state_48528[(24)]);
var inst_48422 = cljs.core.async.close_BANG_(inst_48419);
var state_48528__$1 = state_48528;
var statearr_48559_49710 = state_48528__$1;
(statearr_48559_49710[(2)] = inst_48422);

(statearr_48559_49710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (22))){
var inst_48442 = (state_48528[(8)]);
var inst_48445 = cljs.core.async.close_BANG_(inst_48442);
var state_48528__$1 = state_48528;
var statearr_48560_49714 = state_48528__$1;
(statearr_48560_49714[(2)] = inst_48445);

(statearr_48560_49714[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (36))){
var inst_48488 = (state_48528[(23)]);
var inst_48492 = cljs.core.chunk_first(inst_48488);
var inst_48493 = cljs.core.chunk_rest(inst_48488);
var inst_48494 = cljs.core.count(inst_48492);
var inst_48470 = inst_48493;
var inst_48471 = inst_48492;
var inst_48472 = inst_48494;
var inst_48473 = (0);
var state_48528__$1 = (function (){var statearr_48561 = state_48528;
(statearr_48561[(19)] = inst_48470);

(statearr_48561[(9)] = inst_48471);

(statearr_48561[(20)] = inst_48472);

(statearr_48561[(10)] = inst_48473);

return statearr_48561;
})();
var statearr_48562_49719 = state_48528__$1;
(statearr_48562_49719[(2)] = null);

(statearr_48562_49719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (41))){
var inst_48488 = (state_48528[(23)]);
var inst_48503 = (state_48528[(2)]);
var inst_48504 = cljs.core.next(inst_48488);
var inst_48470 = inst_48504;
var inst_48471 = null;
var inst_48472 = (0);
var inst_48473 = (0);
var state_48528__$1 = (function (){var statearr_48563 = state_48528;
(statearr_48563[(25)] = inst_48503);

(statearr_48563[(19)] = inst_48470);

(statearr_48563[(9)] = inst_48471);

(statearr_48563[(20)] = inst_48472);

(statearr_48563[(10)] = inst_48473);

return statearr_48563;
})();
var statearr_48564_49720 = state_48528__$1;
(statearr_48564_49720[(2)] = null);

(statearr_48564_49720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (43))){
var state_48528__$1 = state_48528;
var statearr_48565_49721 = state_48528__$1;
(statearr_48565_49721[(2)] = null);

(statearr_48565_49721[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (29))){
var inst_48512 = (state_48528[(2)]);
var state_48528__$1 = state_48528;
var statearr_48566_49723 = state_48528__$1;
(statearr_48566_49723[(2)] = inst_48512);

(statearr_48566_49723[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (44))){
var inst_48521 = (state_48528[(2)]);
var state_48528__$1 = (function (){var statearr_48567 = state_48528;
(statearr_48567[(26)] = inst_48521);

return statearr_48567;
})();
var statearr_48568_49727 = state_48528__$1;
(statearr_48568_49727[(2)] = null);

(statearr_48568_49727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (6))){
var inst_48462 = (state_48528[(27)]);
var inst_48461 = cljs.core.deref(cs);
var inst_48462__$1 = cljs.core.keys(inst_48461);
var inst_48463 = cljs.core.count(inst_48462__$1);
var inst_48464 = cljs.core.reset_BANG_(dctr,inst_48463);
var inst_48469 = cljs.core.seq(inst_48462__$1);
var inst_48470 = inst_48469;
var inst_48471 = null;
var inst_48472 = (0);
var inst_48473 = (0);
var state_48528__$1 = (function (){var statearr_48569 = state_48528;
(statearr_48569[(27)] = inst_48462__$1);

(statearr_48569[(28)] = inst_48464);

(statearr_48569[(19)] = inst_48470);

(statearr_48569[(9)] = inst_48471);

(statearr_48569[(20)] = inst_48472);

(statearr_48569[(10)] = inst_48473);

return statearr_48569;
})();
var statearr_48570_49729 = state_48528__$1;
(statearr_48570_49729[(2)] = null);

(statearr_48570_49729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (28))){
var inst_48470 = (state_48528[(19)]);
var inst_48488 = (state_48528[(23)]);
var inst_48488__$1 = cljs.core.seq(inst_48470);
var state_48528__$1 = (function (){var statearr_48571 = state_48528;
(statearr_48571[(23)] = inst_48488__$1);

return statearr_48571;
})();
if(inst_48488__$1){
var statearr_48572_49733 = state_48528__$1;
(statearr_48572_49733[(1)] = (33));

} else {
var statearr_48573_49735 = state_48528__$1;
(statearr_48573_49735[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (25))){
var inst_48473 = (state_48528[(10)]);
var inst_48472 = (state_48528[(20)]);
var inst_48475 = (inst_48473 < inst_48472);
var inst_48476 = inst_48475;
var state_48528__$1 = state_48528;
if(cljs.core.truth_(inst_48476)){
var statearr_48574_49736 = state_48528__$1;
(statearr_48574_49736[(1)] = (27));

} else {
var statearr_48575_49737 = state_48528__$1;
(statearr_48575_49737[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (34))){
var state_48528__$1 = state_48528;
var statearr_48576_49739 = state_48528__$1;
(statearr_48576_49739[(2)] = null);

(statearr_48576_49739[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (17))){
var state_48528__$1 = state_48528;
var statearr_48577_49740 = state_48528__$1;
(statearr_48577_49740[(2)] = null);

(statearr_48577_49740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (3))){
var inst_48526 = (state_48528[(2)]);
var state_48528__$1 = state_48528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48528__$1,inst_48526);
} else {
if((state_val_48529 === (12))){
var inst_48457 = (state_48528[(2)]);
var state_48528__$1 = state_48528;
var statearr_48578_49747 = state_48528__$1;
(statearr_48578_49747[(2)] = inst_48457);

(statearr_48578_49747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (2))){
var state_48528__$1 = state_48528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48528__$1,(4),ch);
} else {
if((state_val_48529 === (23))){
var state_48528__$1 = state_48528;
var statearr_48579_49748 = state_48528__$1;
(statearr_48579_49748[(2)] = null);

(statearr_48579_49748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (35))){
var inst_48510 = (state_48528[(2)]);
var state_48528__$1 = state_48528;
var statearr_48580_49749 = state_48528__$1;
(statearr_48580_49749[(2)] = inst_48510);

(statearr_48580_49749[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (19))){
var inst_48429 = (state_48528[(7)]);
var inst_48433 = cljs.core.chunk_first(inst_48429);
var inst_48434 = cljs.core.chunk_rest(inst_48429);
var inst_48435 = cljs.core.count(inst_48433);
var inst_48407 = inst_48434;
var inst_48408 = inst_48433;
var inst_48409 = inst_48435;
var inst_48410 = (0);
var state_48528__$1 = (function (){var statearr_48581 = state_48528;
(statearr_48581[(14)] = inst_48407);

(statearr_48581[(15)] = inst_48408);

(statearr_48581[(16)] = inst_48409);

(statearr_48581[(17)] = inst_48410);

return statearr_48581;
})();
var statearr_48582_49754 = state_48528__$1;
(statearr_48582_49754[(2)] = null);

(statearr_48582_49754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (11))){
var inst_48407 = (state_48528[(14)]);
var inst_48429 = (state_48528[(7)]);
var inst_48429__$1 = cljs.core.seq(inst_48407);
var state_48528__$1 = (function (){var statearr_48583 = state_48528;
(statearr_48583[(7)] = inst_48429__$1);

return statearr_48583;
})();
if(inst_48429__$1){
var statearr_48584_49755 = state_48528__$1;
(statearr_48584_49755[(1)] = (16));

} else {
var statearr_48585_49756 = state_48528__$1;
(statearr_48585_49756[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (9))){
var inst_48459 = (state_48528[(2)]);
var state_48528__$1 = state_48528;
var statearr_48586_49757 = state_48528__$1;
(statearr_48586_49757[(2)] = inst_48459);

(statearr_48586_49757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (5))){
var inst_48405 = cljs.core.deref(cs);
var inst_48406 = cljs.core.seq(inst_48405);
var inst_48407 = inst_48406;
var inst_48408 = null;
var inst_48409 = (0);
var inst_48410 = (0);
var state_48528__$1 = (function (){var statearr_48587 = state_48528;
(statearr_48587[(14)] = inst_48407);

(statearr_48587[(15)] = inst_48408);

(statearr_48587[(16)] = inst_48409);

(statearr_48587[(17)] = inst_48410);

return statearr_48587;
})();
var statearr_48588_49758 = state_48528__$1;
(statearr_48588_49758[(2)] = null);

(statearr_48588_49758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (14))){
var state_48528__$1 = state_48528;
var statearr_48589_49759 = state_48528__$1;
(statearr_48589_49759[(2)] = null);

(statearr_48589_49759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (45))){
var inst_48518 = (state_48528[(2)]);
var state_48528__$1 = state_48528;
var statearr_48590_49760 = state_48528__$1;
(statearr_48590_49760[(2)] = inst_48518);

(statearr_48590_49760[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (26))){
var inst_48462 = (state_48528[(27)]);
var inst_48514 = (state_48528[(2)]);
var inst_48515 = cljs.core.seq(inst_48462);
var state_48528__$1 = (function (){var statearr_48591 = state_48528;
(statearr_48591[(29)] = inst_48514);

return statearr_48591;
})();
if(inst_48515){
var statearr_48592_49762 = state_48528__$1;
(statearr_48592_49762[(1)] = (42));

} else {
var statearr_48593_49763 = state_48528__$1;
(statearr_48593_49763[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (16))){
var inst_48429 = (state_48528[(7)]);
var inst_48431 = cljs.core.chunked_seq_QMARK_(inst_48429);
var state_48528__$1 = state_48528;
if(inst_48431){
var statearr_48594_49764 = state_48528__$1;
(statearr_48594_49764[(1)] = (19));

} else {
var statearr_48595_49765 = state_48528__$1;
(statearr_48595_49765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (38))){
var inst_48507 = (state_48528[(2)]);
var state_48528__$1 = state_48528;
var statearr_48596_49767 = state_48528__$1;
(statearr_48596_49767[(2)] = inst_48507);

(statearr_48596_49767[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (30))){
var state_48528__$1 = state_48528;
var statearr_48597_49771 = state_48528__$1;
(statearr_48597_49771[(2)] = null);

(statearr_48597_49771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (10))){
var inst_48408 = (state_48528[(15)]);
var inst_48410 = (state_48528[(17)]);
var inst_48418 = cljs.core._nth(inst_48408,inst_48410);
var inst_48419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48418,(0),null);
var inst_48420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48418,(1),null);
var state_48528__$1 = (function (){var statearr_48598 = state_48528;
(statearr_48598[(24)] = inst_48419);

return statearr_48598;
})();
if(cljs.core.truth_(inst_48420)){
var statearr_48599_49774 = state_48528__$1;
(statearr_48599_49774[(1)] = (13));

} else {
var statearr_48600_49775 = state_48528__$1;
(statearr_48600_49775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (18))){
var inst_48455 = (state_48528[(2)]);
var state_48528__$1 = state_48528;
var statearr_48601_49776 = state_48528__$1;
(statearr_48601_49776[(2)] = inst_48455);

(statearr_48601_49776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (42))){
var state_48528__$1 = state_48528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48528__$1,(45),dchan);
} else {
if((state_val_48529 === (37))){
var inst_48488 = (state_48528[(23)]);
var inst_48497 = (state_48528[(22)]);
var inst_48398 = (state_48528[(12)]);
var inst_48497__$1 = cljs.core.first(inst_48488);
var inst_48498 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48497__$1,inst_48398,done);
var state_48528__$1 = (function (){var statearr_48602 = state_48528;
(statearr_48602[(22)] = inst_48497__$1);

return statearr_48602;
})();
if(cljs.core.truth_(inst_48498)){
var statearr_48603_49777 = state_48528__$1;
(statearr_48603_49777[(1)] = (39));

} else {
var statearr_48604_49778 = state_48528__$1;
(statearr_48604_49778[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48529 === (8))){
var inst_48410 = (state_48528[(17)]);
var inst_48409 = (state_48528[(16)]);
var inst_48412 = (inst_48410 < inst_48409);
var inst_48413 = inst_48412;
var state_48528__$1 = state_48528;
if(cljs.core.truth_(inst_48413)){
var statearr_48605_49779 = state_48528__$1;
(statearr_48605_49779[(1)] = (10));

} else {
var statearr_48606_49780 = state_48528__$1;
(statearr_48606_49780[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__47855__auto__ = null;
var cljs$core$async$mult_$_state_machine__47855__auto____0 = (function (){
var statearr_48607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48607[(0)] = cljs$core$async$mult_$_state_machine__47855__auto__);

(statearr_48607[(1)] = (1));

return statearr_48607;
});
var cljs$core$async$mult_$_state_machine__47855__auto____1 = (function (state_48528){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48528);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48608){var ex__47858__auto__ = e48608;
var statearr_48609_49781 = state_48528;
(statearr_48609_49781[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48528[(4)]))){
var statearr_48610_49782 = state_48528;
(statearr_48610_49782[(1)] = cljs.core.first((state_48528[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49783 = state_48528;
state_48528 = G__49783;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47855__auto__ = function(state_48528){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47855__auto____1.call(this,state_48528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47855__auto____0;
cljs$core$async$mult_$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47855__auto____1;
return cljs$core$async$mult_$_state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48611 = f__47926__auto__();
(statearr_48611[(6)] = c__47925__auto___49670);

return statearr_48611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
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
var G__48613 = arguments.length;
switch (G__48613) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_49786 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_49786(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49789 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_49789(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49790 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49790(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49791 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_49791(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49793 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49793(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49794 = arguments.length;
var i__5750__auto___49795 = (0);
while(true){
if((i__5750__auto___49795 < len__5749__auto___49794)){
args__5755__auto__.push((arguments[i__5750__auto___49795]));

var G__49796 = (i__5750__auto___49795 + (1));
i__5750__auto___49795 = G__49796;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48618){
var map__48619 = p__48618;
var map__48619__$1 = cljs.core.__destructure_map(map__48619);
var opts = map__48619__$1;
var statearr_48620_49797 = state;
(statearr_48620_49797[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48621_49798 = state;
(statearr_48621_49798[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_48622_49799 = state;
(statearr_48622_49799[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48614){
var G__48615 = cljs.core.first(seq48614);
var seq48614__$1 = cljs.core.next(seq48614);
var G__48616 = cljs.core.first(seq48614__$1);
var seq48614__$2 = cljs.core.next(seq48614__$1);
var G__48617 = cljs.core.first(seq48614__$2);
var seq48614__$3 = cljs.core.next(seq48614__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48615,G__48616,G__48617,seq48614__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48623 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48624){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48624 = meta48624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48625,meta48624__$1){
var self__ = this;
var _48625__$1 = this;
return (new cljs.core.async.t_cljs$core$async48623(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48624__$1));
}));

(cljs.core.async.t_cljs$core$async48623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48625){
var self__ = this;
var _48625__$1 = this;
return self__.meta48624;
}));

(cljs.core.async.t_cljs$core$async48623.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48623.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48623.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48623.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48623.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48623.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48623.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48624","meta48624",-963392379,null)], null);
}));

(cljs.core.async.t_cljs$core$async48623.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48623");

(cljs.core.async.t_cljs$core$async48623.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48623");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48623.
 */
cljs.core.async.__GT_t_cljs$core$async48623 = (function cljs$core$async$__GT_t_cljs$core$async48623(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48624){
return (new cljs.core.async.t_cljs$core$async48623(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48624));
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
var m = (new cljs.core.async.t_cljs$core$async48623(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__47925__auto___49810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48693){
var state_val_48694 = (state_48693[(1)]);
if((state_val_48694 === (7))){
var inst_48653 = (state_48693[(2)]);
var state_48693__$1 = state_48693;
if(cljs.core.truth_(inst_48653)){
var statearr_48695_49811 = state_48693__$1;
(statearr_48695_49811[(1)] = (8));

} else {
var statearr_48696_49812 = state_48693__$1;
(statearr_48696_49812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (20))){
var inst_48646 = (state_48693[(7)]);
var state_48693__$1 = state_48693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48693__$1,(23),out,inst_48646);
} else {
if((state_val_48694 === (1))){
var inst_48629 = calc_state();
var inst_48630 = cljs.core.__destructure_map(inst_48629);
var inst_48631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48630,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48630,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48630,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48634 = inst_48629;
var state_48693__$1 = (function (){var statearr_48697 = state_48693;
(statearr_48697[(8)] = inst_48631);

(statearr_48697[(9)] = inst_48632);

(statearr_48697[(10)] = inst_48633);

(statearr_48697[(11)] = inst_48634);

return statearr_48697;
})();
var statearr_48698_49816 = state_48693__$1;
(statearr_48698_49816[(2)] = null);

(statearr_48698_49816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (24))){
var inst_48637 = (state_48693[(12)]);
var inst_48634 = inst_48637;
var state_48693__$1 = (function (){var statearr_48699 = state_48693;
(statearr_48699[(11)] = inst_48634);

return statearr_48699;
})();
var statearr_48700_49817 = state_48693__$1;
(statearr_48700_49817[(2)] = null);

(statearr_48700_49817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (4))){
var inst_48646 = (state_48693[(7)]);
var inst_48648 = (state_48693[(13)]);
var inst_48645 = (state_48693[(2)]);
var inst_48646__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48645,(0),null);
var inst_48647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48645,(1),null);
var inst_48648__$1 = (inst_48646__$1 == null);
var state_48693__$1 = (function (){var statearr_48701 = state_48693;
(statearr_48701[(7)] = inst_48646__$1);

(statearr_48701[(14)] = inst_48647);

(statearr_48701[(13)] = inst_48648__$1);

return statearr_48701;
})();
if(cljs.core.truth_(inst_48648__$1)){
var statearr_48702_49818 = state_48693__$1;
(statearr_48702_49818[(1)] = (5));

} else {
var statearr_48703_49819 = state_48693__$1;
(statearr_48703_49819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (15))){
var inst_48638 = (state_48693[(15)]);
var inst_48667 = (state_48693[(16)]);
var inst_48667__$1 = cljs.core.empty_QMARK_(inst_48638);
var state_48693__$1 = (function (){var statearr_48704 = state_48693;
(statearr_48704[(16)] = inst_48667__$1);

return statearr_48704;
})();
if(inst_48667__$1){
var statearr_48705_49820 = state_48693__$1;
(statearr_48705_49820[(1)] = (17));

} else {
var statearr_48706_49821 = state_48693__$1;
(statearr_48706_49821[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (21))){
var inst_48637 = (state_48693[(12)]);
var inst_48634 = inst_48637;
var state_48693__$1 = (function (){var statearr_48707 = state_48693;
(statearr_48707[(11)] = inst_48634);

return statearr_48707;
})();
var statearr_48708_49826 = state_48693__$1;
(statearr_48708_49826[(2)] = null);

(statearr_48708_49826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (13))){
var inst_48660 = (state_48693[(2)]);
var inst_48661 = calc_state();
var inst_48634 = inst_48661;
var state_48693__$1 = (function (){var statearr_48709 = state_48693;
(statearr_48709[(17)] = inst_48660);

(statearr_48709[(11)] = inst_48634);

return statearr_48709;
})();
var statearr_48710_49830 = state_48693__$1;
(statearr_48710_49830[(2)] = null);

(statearr_48710_49830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (22))){
var inst_48687 = (state_48693[(2)]);
var state_48693__$1 = state_48693;
var statearr_48711_49831 = state_48693__$1;
(statearr_48711_49831[(2)] = inst_48687);

(statearr_48711_49831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (6))){
var inst_48647 = (state_48693[(14)]);
var inst_48651 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48647,change);
var state_48693__$1 = state_48693;
var statearr_48712_49832 = state_48693__$1;
(statearr_48712_49832[(2)] = inst_48651);

(statearr_48712_49832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (25))){
var state_48693__$1 = state_48693;
var statearr_48713_49833 = state_48693__$1;
(statearr_48713_49833[(2)] = null);

(statearr_48713_49833[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (17))){
var inst_48639 = (state_48693[(18)]);
var inst_48647 = (state_48693[(14)]);
var inst_48669 = (inst_48639.cljs$core$IFn$_invoke$arity$1 ? inst_48639.cljs$core$IFn$_invoke$arity$1(inst_48647) : inst_48639.call(null,inst_48647));
var inst_48670 = cljs.core.not(inst_48669);
var state_48693__$1 = state_48693;
var statearr_48714_49837 = state_48693__$1;
(statearr_48714_49837[(2)] = inst_48670);

(statearr_48714_49837[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (3))){
var inst_48691 = (state_48693[(2)]);
var state_48693__$1 = state_48693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48693__$1,inst_48691);
} else {
if((state_val_48694 === (12))){
var state_48693__$1 = state_48693;
var statearr_48715_49838 = state_48693__$1;
(statearr_48715_49838[(2)] = null);

(statearr_48715_49838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (2))){
var inst_48634 = (state_48693[(11)]);
var inst_48637 = (state_48693[(12)]);
var inst_48637__$1 = cljs.core.__destructure_map(inst_48634);
var inst_48638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48637__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48637__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48637__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48693__$1 = (function (){var statearr_48716 = state_48693;
(statearr_48716[(12)] = inst_48637__$1);

(statearr_48716[(15)] = inst_48638);

(statearr_48716[(18)] = inst_48639);

return statearr_48716;
})();
return cljs.core.async.ioc_alts_BANG_(state_48693__$1,(4),inst_48640);
} else {
if((state_val_48694 === (23))){
var inst_48678 = (state_48693[(2)]);
var state_48693__$1 = state_48693;
if(cljs.core.truth_(inst_48678)){
var statearr_48717_49842 = state_48693__$1;
(statearr_48717_49842[(1)] = (24));

} else {
var statearr_48718_49843 = state_48693__$1;
(statearr_48718_49843[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (19))){
var inst_48673 = (state_48693[(2)]);
var state_48693__$1 = state_48693;
var statearr_48719_49844 = state_48693__$1;
(statearr_48719_49844[(2)] = inst_48673);

(statearr_48719_49844[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (11))){
var inst_48647 = (state_48693[(14)]);
var inst_48657 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48647);
var state_48693__$1 = state_48693;
var statearr_48720_49848 = state_48693__$1;
(statearr_48720_49848[(2)] = inst_48657);

(statearr_48720_49848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (9))){
var inst_48638 = (state_48693[(15)]);
var inst_48647 = (state_48693[(14)]);
var inst_48664 = (state_48693[(19)]);
var inst_48664__$1 = (inst_48638.cljs$core$IFn$_invoke$arity$1 ? inst_48638.cljs$core$IFn$_invoke$arity$1(inst_48647) : inst_48638.call(null,inst_48647));
var state_48693__$1 = (function (){var statearr_48721 = state_48693;
(statearr_48721[(19)] = inst_48664__$1);

return statearr_48721;
})();
if(cljs.core.truth_(inst_48664__$1)){
var statearr_48722_49854 = state_48693__$1;
(statearr_48722_49854[(1)] = (14));

} else {
var statearr_48723_49855 = state_48693__$1;
(statearr_48723_49855[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (5))){
var inst_48648 = (state_48693[(13)]);
var state_48693__$1 = state_48693;
var statearr_48724_49856 = state_48693__$1;
(statearr_48724_49856[(2)] = inst_48648);

(statearr_48724_49856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (14))){
var inst_48664 = (state_48693[(19)]);
var state_48693__$1 = state_48693;
var statearr_48725_49857 = state_48693__$1;
(statearr_48725_49857[(2)] = inst_48664);

(statearr_48725_49857[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (26))){
var inst_48683 = (state_48693[(2)]);
var state_48693__$1 = state_48693;
var statearr_48726_49858 = state_48693__$1;
(statearr_48726_49858[(2)] = inst_48683);

(statearr_48726_49858[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (16))){
var inst_48675 = (state_48693[(2)]);
var state_48693__$1 = state_48693;
if(cljs.core.truth_(inst_48675)){
var statearr_48727_49859 = state_48693__$1;
(statearr_48727_49859[(1)] = (20));

} else {
var statearr_48728_49860 = state_48693__$1;
(statearr_48728_49860[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (10))){
var inst_48689 = (state_48693[(2)]);
var state_48693__$1 = state_48693;
var statearr_48729_49861 = state_48693__$1;
(statearr_48729_49861[(2)] = inst_48689);

(statearr_48729_49861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (18))){
var inst_48667 = (state_48693[(16)]);
var state_48693__$1 = state_48693;
var statearr_48730_49863 = state_48693__$1;
(statearr_48730_49863[(2)] = inst_48667);

(statearr_48730_49863[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (8))){
var inst_48646 = (state_48693[(7)]);
var inst_48655 = (inst_48646 == null);
var state_48693__$1 = state_48693;
if(cljs.core.truth_(inst_48655)){
var statearr_48731_49864 = state_48693__$1;
(statearr_48731_49864[(1)] = (11));

} else {
var statearr_48732_49866 = state_48693__$1;
(statearr_48732_49866[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__47855__auto__ = null;
var cljs$core$async$mix_$_state_machine__47855__auto____0 = (function (){
var statearr_48733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48733[(0)] = cljs$core$async$mix_$_state_machine__47855__auto__);

(statearr_48733[(1)] = (1));

return statearr_48733;
});
var cljs$core$async$mix_$_state_machine__47855__auto____1 = (function (state_48693){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48693);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48734){var ex__47858__auto__ = e48734;
var statearr_48735_49867 = state_48693;
(statearr_48735_49867[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48693[(4)]))){
var statearr_48736_49868 = state_48693;
(statearr_48736_49868[(1)] = cljs.core.first((state_48693[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49873 = state_48693;
state_48693 = G__49873;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47855__auto__ = function(state_48693){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47855__auto____1.call(this,state_48693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47855__auto____0;
cljs$core$async$mix_$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47855__auto____1;
return cljs$core$async$mix_$_state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48737 = f__47926__auto__();
(statearr_48737[(6)] = c__47925__auto___49810);

return statearr_48737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_49895 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_49895(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49900 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_49900(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49901 = (function() {
var G__49902 = null;
var G__49902__1 = (function (p){
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
var G__49902__2 = (function (p,v){
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
G__49902 = function(p,v){
switch(arguments.length){
case 1:
return G__49902__1.call(this,p);
case 2:
return G__49902__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49902.cljs$core$IFn$_invoke$arity$1 = G__49902__1;
G__49902.cljs$core$IFn$_invoke$arity$2 = G__49902__2;
return G__49902;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48739 = arguments.length;
switch (G__48739) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49901(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49901(p,v);
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
cljs.core.async.t_cljs$core$async48743 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48744){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48744 = meta48744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48745,meta48744__$1){
var self__ = this;
var _48745__$1 = this;
return (new cljs.core.async.t_cljs$core$async48743(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48744__$1));
}));

(cljs.core.async.t_cljs$core$async48743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48745){
var self__ = this;
var _48745__$1 = this;
return self__.meta48744;
}));

(cljs.core.async.t_cljs$core$async48743.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48743.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48743.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48743.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async48743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48744","meta48744",-929937122,null)], null);
}));

(cljs.core.async.t_cljs$core$async48743.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48743");

(cljs.core.async.t_cljs$core$async48743.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async48743");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48743.
 */
cljs.core.async.__GT_t_cljs$core$async48743 = (function cljs$core$async$__GT_t_cljs$core$async48743(ch,topic_fn,buf_fn,mults,ensure_mult,meta48744){
return (new cljs.core.async.t_cljs$core$async48743(ch,topic_fn,buf_fn,mults,ensure_mult,meta48744));
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
var G__48742 = arguments.length;
switch (G__48742) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48740_SHARP_){
if(cljs.core.truth_((p1__48740_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48740_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48740_SHARP_.call(null,topic)))){
return p1__48740_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48740_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async48743(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__47925__auto___49911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48817){
var state_val_48818 = (state_48817[(1)]);
if((state_val_48818 === (7))){
var inst_48813 = (state_48817[(2)]);
var state_48817__$1 = state_48817;
var statearr_48819_49912 = state_48817__$1;
(statearr_48819_49912[(2)] = inst_48813);

(statearr_48819_49912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (20))){
var state_48817__$1 = state_48817;
var statearr_48820_49913 = state_48817__$1;
(statearr_48820_49913[(2)] = null);

(statearr_48820_49913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (1))){
var state_48817__$1 = state_48817;
var statearr_48821_49914 = state_48817__$1;
(statearr_48821_49914[(2)] = null);

(statearr_48821_49914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (24))){
var inst_48796 = (state_48817[(7)]);
var inst_48805 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48796);
var state_48817__$1 = state_48817;
var statearr_48822_49915 = state_48817__$1;
(statearr_48822_49915[(2)] = inst_48805);

(statearr_48822_49915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (4))){
var inst_48748 = (state_48817[(8)]);
var inst_48748__$1 = (state_48817[(2)]);
var inst_48749 = (inst_48748__$1 == null);
var state_48817__$1 = (function (){var statearr_48823 = state_48817;
(statearr_48823[(8)] = inst_48748__$1);

return statearr_48823;
})();
if(cljs.core.truth_(inst_48749)){
var statearr_48824_49916 = state_48817__$1;
(statearr_48824_49916[(1)] = (5));

} else {
var statearr_48825_49917 = state_48817__$1;
(statearr_48825_49917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (15))){
var inst_48790 = (state_48817[(2)]);
var state_48817__$1 = state_48817;
var statearr_48826_49918 = state_48817__$1;
(statearr_48826_49918[(2)] = inst_48790);

(statearr_48826_49918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (21))){
var inst_48810 = (state_48817[(2)]);
var state_48817__$1 = (function (){var statearr_48827 = state_48817;
(statearr_48827[(9)] = inst_48810);

return statearr_48827;
})();
var statearr_48828_49919 = state_48817__$1;
(statearr_48828_49919[(2)] = null);

(statearr_48828_49919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (13))){
var inst_48772 = (state_48817[(10)]);
var inst_48774 = cljs.core.chunked_seq_QMARK_(inst_48772);
var state_48817__$1 = state_48817;
if(inst_48774){
var statearr_48829_49920 = state_48817__$1;
(statearr_48829_49920[(1)] = (16));

} else {
var statearr_48830_49921 = state_48817__$1;
(statearr_48830_49921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (22))){
var inst_48802 = (state_48817[(2)]);
var state_48817__$1 = state_48817;
if(cljs.core.truth_(inst_48802)){
var statearr_48831_49922 = state_48817__$1;
(statearr_48831_49922[(1)] = (23));

} else {
var statearr_48832_49923 = state_48817__$1;
(statearr_48832_49923[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (6))){
var inst_48748 = (state_48817[(8)]);
var inst_48796 = (state_48817[(7)]);
var inst_48798 = (state_48817[(11)]);
var inst_48796__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48748) : topic_fn.call(null,inst_48748));
var inst_48797 = cljs.core.deref(mults);
var inst_48798__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48797,inst_48796__$1);
var state_48817__$1 = (function (){var statearr_48833 = state_48817;
(statearr_48833[(7)] = inst_48796__$1);

(statearr_48833[(11)] = inst_48798__$1);

return statearr_48833;
})();
if(cljs.core.truth_(inst_48798__$1)){
var statearr_48834_49924 = state_48817__$1;
(statearr_48834_49924[(1)] = (19));

} else {
var statearr_48835_49925 = state_48817__$1;
(statearr_48835_49925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (25))){
var inst_48807 = (state_48817[(2)]);
var state_48817__$1 = state_48817;
var statearr_48836_49926 = state_48817__$1;
(statearr_48836_49926[(2)] = inst_48807);

(statearr_48836_49926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (17))){
var inst_48772 = (state_48817[(10)]);
var inst_48781 = cljs.core.first(inst_48772);
var inst_48782 = cljs.core.async.muxch_STAR_(inst_48781);
var inst_48783 = cljs.core.async.close_BANG_(inst_48782);
var inst_48784 = cljs.core.next(inst_48772);
var inst_48758 = inst_48784;
var inst_48759 = null;
var inst_48760 = (0);
var inst_48761 = (0);
var state_48817__$1 = (function (){var statearr_48837 = state_48817;
(statearr_48837[(12)] = inst_48783);

(statearr_48837[(13)] = inst_48758);

(statearr_48837[(14)] = inst_48759);

(statearr_48837[(15)] = inst_48760);

(statearr_48837[(16)] = inst_48761);

return statearr_48837;
})();
var statearr_48838_49931 = state_48817__$1;
(statearr_48838_49931[(2)] = null);

(statearr_48838_49931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (3))){
var inst_48815 = (state_48817[(2)]);
var state_48817__$1 = state_48817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48817__$1,inst_48815);
} else {
if((state_val_48818 === (12))){
var inst_48792 = (state_48817[(2)]);
var state_48817__$1 = state_48817;
var statearr_48839_49932 = state_48817__$1;
(statearr_48839_49932[(2)] = inst_48792);

(statearr_48839_49932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (2))){
var state_48817__$1 = state_48817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48817__$1,(4),ch);
} else {
if((state_val_48818 === (23))){
var state_48817__$1 = state_48817;
var statearr_48840_49933 = state_48817__$1;
(statearr_48840_49933[(2)] = null);

(statearr_48840_49933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (19))){
var inst_48798 = (state_48817[(11)]);
var inst_48748 = (state_48817[(8)]);
var inst_48800 = cljs.core.async.muxch_STAR_(inst_48798);
var state_48817__$1 = state_48817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48817__$1,(22),inst_48800,inst_48748);
} else {
if((state_val_48818 === (11))){
var inst_48758 = (state_48817[(13)]);
var inst_48772 = (state_48817[(10)]);
var inst_48772__$1 = cljs.core.seq(inst_48758);
var state_48817__$1 = (function (){var statearr_48841 = state_48817;
(statearr_48841[(10)] = inst_48772__$1);

return statearr_48841;
})();
if(inst_48772__$1){
var statearr_48842_49934 = state_48817__$1;
(statearr_48842_49934[(1)] = (13));

} else {
var statearr_48843_49935 = state_48817__$1;
(statearr_48843_49935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (9))){
var inst_48794 = (state_48817[(2)]);
var state_48817__$1 = state_48817;
var statearr_48844_49937 = state_48817__$1;
(statearr_48844_49937[(2)] = inst_48794);

(statearr_48844_49937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (5))){
var inst_48755 = cljs.core.deref(mults);
var inst_48756 = cljs.core.vals(inst_48755);
var inst_48757 = cljs.core.seq(inst_48756);
var inst_48758 = inst_48757;
var inst_48759 = null;
var inst_48760 = (0);
var inst_48761 = (0);
var state_48817__$1 = (function (){var statearr_48845 = state_48817;
(statearr_48845[(13)] = inst_48758);

(statearr_48845[(14)] = inst_48759);

(statearr_48845[(15)] = inst_48760);

(statearr_48845[(16)] = inst_48761);

return statearr_48845;
})();
var statearr_48846_49941 = state_48817__$1;
(statearr_48846_49941[(2)] = null);

(statearr_48846_49941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (14))){
var state_48817__$1 = state_48817;
var statearr_48850_49942 = state_48817__$1;
(statearr_48850_49942[(2)] = null);

(statearr_48850_49942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (16))){
var inst_48772 = (state_48817[(10)]);
var inst_48776 = cljs.core.chunk_first(inst_48772);
var inst_48777 = cljs.core.chunk_rest(inst_48772);
var inst_48778 = cljs.core.count(inst_48776);
var inst_48758 = inst_48777;
var inst_48759 = inst_48776;
var inst_48760 = inst_48778;
var inst_48761 = (0);
var state_48817__$1 = (function (){var statearr_48851 = state_48817;
(statearr_48851[(13)] = inst_48758);

(statearr_48851[(14)] = inst_48759);

(statearr_48851[(15)] = inst_48760);

(statearr_48851[(16)] = inst_48761);

return statearr_48851;
})();
var statearr_48852_49943 = state_48817__$1;
(statearr_48852_49943[(2)] = null);

(statearr_48852_49943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (10))){
var inst_48759 = (state_48817[(14)]);
var inst_48761 = (state_48817[(16)]);
var inst_48758 = (state_48817[(13)]);
var inst_48760 = (state_48817[(15)]);
var inst_48766 = cljs.core._nth(inst_48759,inst_48761);
var inst_48767 = cljs.core.async.muxch_STAR_(inst_48766);
var inst_48768 = cljs.core.async.close_BANG_(inst_48767);
var inst_48769 = (inst_48761 + (1));
var tmp48847 = inst_48758;
var tmp48848 = inst_48759;
var tmp48849 = inst_48760;
var inst_48758__$1 = tmp48847;
var inst_48759__$1 = tmp48848;
var inst_48760__$1 = tmp48849;
var inst_48761__$1 = inst_48769;
var state_48817__$1 = (function (){var statearr_48853 = state_48817;
(statearr_48853[(17)] = inst_48768);

(statearr_48853[(13)] = inst_48758__$1);

(statearr_48853[(14)] = inst_48759__$1);

(statearr_48853[(15)] = inst_48760__$1);

(statearr_48853[(16)] = inst_48761__$1);

return statearr_48853;
})();
var statearr_48854_49945 = state_48817__$1;
(statearr_48854_49945[(2)] = null);

(statearr_48854_49945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (18))){
var inst_48787 = (state_48817[(2)]);
var state_48817__$1 = state_48817;
var statearr_48855_49946 = state_48817__$1;
(statearr_48855_49946[(2)] = inst_48787);

(statearr_48855_49946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48818 === (8))){
var inst_48761 = (state_48817[(16)]);
var inst_48760 = (state_48817[(15)]);
var inst_48763 = (inst_48761 < inst_48760);
var inst_48764 = inst_48763;
var state_48817__$1 = state_48817;
if(cljs.core.truth_(inst_48764)){
var statearr_48856_49947 = state_48817__$1;
(statearr_48856_49947[(1)] = (10));

} else {
var statearr_48857_49948 = state_48817__$1;
(statearr_48857_49948[(1)] = (11));

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
var cljs$core$async$state_machine__47855__auto__ = null;
var cljs$core$async$state_machine__47855__auto____0 = (function (){
var statearr_48858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48858[(0)] = cljs$core$async$state_machine__47855__auto__);

(statearr_48858[(1)] = (1));

return statearr_48858;
});
var cljs$core$async$state_machine__47855__auto____1 = (function (state_48817){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48817);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48859){var ex__47858__auto__ = e48859;
var statearr_48860_49949 = state_48817;
(statearr_48860_49949[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48817[(4)]))){
var statearr_48861_49950 = state_48817;
(statearr_48861_49950[(1)] = cljs.core.first((state_48817[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49951 = state_48817;
state_48817 = G__49951;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$state_machine__47855__auto__ = function(state_48817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47855__auto____1.call(this,state_48817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47855__auto____0;
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47855__auto____1;
return cljs$core$async$state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48862 = f__47926__auto__();
(statearr_48862[(6)] = c__47925__auto___49911);

return statearr_48862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
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
var G__48864 = arguments.length;
switch (G__48864) {
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
var G__48866 = arguments.length;
switch (G__48866) {
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
var G__48868 = arguments.length;
switch (G__48868) {
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
var c__47925__auto___49959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48911){
var state_val_48912 = (state_48911[(1)]);
if((state_val_48912 === (7))){
var state_48911__$1 = state_48911;
var statearr_48913_49960 = state_48911__$1;
(statearr_48913_49960[(2)] = null);

(statearr_48913_49960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (1))){
var state_48911__$1 = state_48911;
var statearr_48914_49961 = state_48911__$1;
(statearr_48914_49961[(2)] = null);

(statearr_48914_49961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (4))){
var inst_48872 = (state_48911[(7)]);
var inst_48871 = (state_48911[(8)]);
var inst_48874 = (inst_48872 < inst_48871);
var state_48911__$1 = state_48911;
if(cljs.core.truth_(inst_48874)){
var statearr_48915_49962 = state_48911__$1;
(statearr_48915_49962[(1)] = (6));

} else {
var statearr_48916_49963 = state_48911__$1;
(statearr_48916_49963[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (15))){
var inst_48897 = (state_48911[(9)]);
var inst_48902 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48897);
var state_48911__$1 = state_48911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48911__$1,(17),out,inst_48902);
} else {
if((state_val_48912 === (13))){
var inst_48897 = (state_48911[(9)]);
var inst_48897__$1 = (state_48911[(2)]);
var inst_48898 = cljs.core.some(cljs.core.nil_QMARK_,inst_48897__$1);
var state_48911__$1 = (function (){var statearr_48917 = state_48911;
(statearr_48917[(9)] = inst_48897__$1);

return statearr_48917;
})();
if(cljs.core.truth_(inst_48898)){
var statearr_48918_49964 = state_48911__$1;
(statearr_48918_49964[(1)] = (14));

} else {
var statearr_48919_49965 = state_48911__$1;
(statearr_48919_49965[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (6))){
var state_48911__$1 = state_48911;
var statearr_48920_49966 = state_48911__$1;
(statearr_48920_49966[(2)] = null);

(statearr_48920_49966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (17))){
var inst_48904 = (state_48911[(2)]);
var state_48911__$1 = (function (){var statearr_48922 = state_48911;
(statearr_48922[(10)] = inst_48904);

return statearr_48922;
})();
var statearr_48923_49967 = state_48911__$1;
(statearr_48923_49967[(2)] = null);

(statearr_48923_49967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (3))){
var inst_48909 = (state_48911[(2)]);
var state_48911__$1 = state_48911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48911__$1,inst_48909);
} else {
if((state_val_48912 === (12))){
var _ = (function (){var statearr_48924 = state_48911;
(statearr_48924[(4)] = cljs.core.rest((state_48911[(4)])));

return statearr_48924;
})();
var state_48911__$1 = state_48911;
var ex48921 = (state_48911__$1[(2)]);
var statearr_48925_49968 = state_48911__$1;
(statearr_48925_49968[(5)] = ex48921);


if((ex48921 instanceof Object)){
var statearr_48926_49969 = state_48911__$1;
(statearr_48926_49969[(1)] = (11));

(statearr_48926_49969[(5)] = null);

} else {
throw ex48921;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (2))){
var inst_48870 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48871 = cnt;
var inst_48872 = (0);
var state_48911__$1 = (function (){var statearr_48927 = state_48911;
(statearr_48927[(11)] = inst_48870);

(statearr_48927[(8)] = inst_48871);

(statearr_48927[(7)] = inst_48872);

return statearr_48927;
})();
var statearr_48928_49970 = state_48911__$1;
(statearr_48928_49970[(2)] = null);

(statearr_48928_49970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (11))){
var inst_48876 = (state_48911[(2)]);
var inst_48877 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48911__$1 = (function (){var statearr_48929 = state_48911;
(statearr_48929[(12)] = inst_48876);

return statearr_48929;
})();
var statearr_48930_49971 = state_48911__$1;
(statearr_48930_49971[(2)] = inst_48877);

(statearr_48930_49971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (9))){
var inst_48872 = (state_48911[(7)]);
var _ = (function (){var statearr_48931 = state_48911;
(statearr_48931[(4)] = cljs.core.cons((12),(state_48911[(4)])));

return statearr_48931;
})();
var inst_48883 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48872) : chs__$1.call(null,inst_48872));
var inst_48884 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48872) : done.call(null,inst_48872));
var inst_48885 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48883,inst_48884);
var ___$1 = (function (){var statearr_48932 = state_48911;
(statearr_48932[(4)] = cljs.core.rest((state_48911[(4)])));

return statearr_48932;
})();
var state_48911__$1 = state_48911;
var statearr_48933_49972 = state_48911__$1;
(statearr_48933_49972[(2)] = inst_48885);

(statearr_48933_49972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (5))){
var inst_48895 = (state_48911[(2)]);
var state_48911__$1 = (function (){var statearr_48934 = state_48911;
(statearr_48934[(13)] = inst_48895);

return statearr_48934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48911__$1,(13),dchan);
} else {
if((state_val_48912 === (14))){
var inst_48900 = cljs.core.async.close_BANG_(out);
var state_48911__$1 = state_48911;
var statearr_48935_49973 = state_48911__$1;
(statearr_48935_49973[(2)] = inst_48900);

(statearr_48935_49973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (16))){
var inst_48907 = (state_48911[(2)]);
var state_48911__$1 = state_48911;
var statearr_48936_49974 = state_48911__$1;
(statearr_48936_49974[(2)] = inst_48907);

(statearr_48936_49974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (10))){
var inst_48872 = (state_48911[(7)]);
var inst_48888 = (state_48911[(2)]);
var inst_48889 = (inst_48872 + (1));
var inst_48872__$1 = inst_48889;
var state_48911__$1 = (function (){var statearr_48937 = state_48911;
(statearr_48937[(14)] = inst_48888);

(statearr_48937[(7)] = inst_48872__$1);

return statearr_48937;
})();
var statearr_48938_49975 = state_48911__$1;
(statearr_48938_49975[(2)] = null);

(statearr_48938_49975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (8))){
var inst_48893 = (state_48911[(2)]);
var state_48911__$1 = state_48911;
var statearr_48939_49976 = state_48911__$1;
(statearr_48939_49976[(2)] = inst_48893);

(statearr_48939_49976[(1)] = (5));


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
var cljs$core$async$state_machine__47855__auto__ = null;
var cljs$core$async$state_machine__47855__auto____0 = (function (){
var statearr_48940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48940[(0)] = cljs$core$async$state_machine__47855__auto__);

(statearr_48940[(1)] = (1));

return statearr_48940;
});
var cljs$core$async$state_machine__47855__auto____1 = (function (state_48911){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48911);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48941){var ex__47858__auto__ = e48941;
var statearr_48942_49977 = state_48911;
(statearr_48942_49977[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48911[(4)]))){
var statearr_48943_49978 = state_48911;
(statearr_48943_49978[(1)] = cljs.core.first((state_48911[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49979 = state_48911;
state_48911 = G__49979;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$state_machine__47855__auto__ = function(state_48911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47855__auto____1.call(this,state_48911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47855__auto____0;
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47855__auto____1;
return cljs$core$async$state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_48944 = f__47926__auto__();
(statearr_48944[(6)] = c__47925__auto___49959);

return statearr_48944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
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
var G__48947 = arguments.length;
switch (G__48947) {
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
var c__47925__auto___49981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_48979){
var state_val_48980 = (state_48979[(1)]);
if((state_val_48980 === (7))){
var inst_48958 = (state_48979[(7)]);
var inst_48959 = (state_48979[(8)]);
var inst_48958__$1 = (state_48979[(2)]);
var inst_48959__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48958__$1,(0),null);
var inst_48960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48958__$1,(1),null);
var inst_48961 = (inst_48959__$1 == null);
var state_48979__$1 = (function (){var statearr_48981 = state_48979;
(statearr_48981[(7)] = inst_48958__$1);

(statearr_48981[(8)] = inst_48959__$1);

(statearr_48981[(9)] = inst_48960);

return statearr_48981;
})();
if(cljs.core.truth_(inst_48961)){
var statearr_48982_49982 = state_48979__$1;
(statearr_48982_49982[(1)] = (8));

} else {
var statearr_48983_49983 = state_48979__$1;
(statearr_48983_49983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48980 === (1))){
var inst_48948 = cljs.core.vec(chs);
var inst_48949 = inst_48948;
var state_48979__$1 = (function (){var statearr_48984 = state_48979;
(statearr_48984[(10)] = inst_48949);

return statearr_48984;
})();
var statearr_48985_49984 = state_48979__$1;
(statearr_48985_49984[(2)] = null);

(statearr_48985_49984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48980 === (4))){
var inst_48949 = (state_48979[(10)]);
var state_48979__$1 = state_48979;
return cljs.core.async.ioc_alts_BANG_(state_48979__$1,(7),inst_48949);
} else {
if((state_val_48980 === (6))){
var inst_48975 = (state_48979[(2)]);
var state_48979__$1 = state_48979;
var statearr_48986_49985 = state_48979__$1;
(statearr_48986_49985[(2)] = inst_48975);

(statearr_48986_49985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48980 === (3))){
var inst_48977 = (state_48979[(2)]);
var state_48979__$1 = state_48979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48979__$1,inst_48977);
} else {
if((state_val_48980 === (2))){
var inst_48949 = (state_48979[(10)]);
var inst_48951 = cljs.core.count(inst_48949);
var inst_48952 = (inst_48951 > (0));
var state_48979__$1 = state_48979;
if(cljs.core.truth_(inst_48952)){
var statearr_48988_49986 = state_48979__$1;
(statearr_48988_49986[(1)] = (4));

} else {
var statearr_48989_49987 = state_48979__$1;
(statearr_48989_49987[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48980 === (11))){
var inst_48949 = (state_48979[(10)]);
var inst_48968 = (state_48979[(2)]);
var tmp48987 = inst_48949;
var inst_48949__$1 = tmp48987;
var state_48979__$1 = (function (){var statearr_48990 = state_48979;
(statearr_48990[(11)] = inst_48968);

(statearr_48990[(10)] = inst_48949__$1);

return statearr_48990;
})();
var statearr_48991_49988 = state_48979__$1;
(statearr_48991_49988[(2)] = null);

(statearr_48991_49988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48980 === (9))){
var inst_48959 = (state_48979[(8)]);
var state_48979__$1 = state_48979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48979__$1,(11),out,inst_48959);
} else {
if((state_val_48980 === (5))){
var inst_48973 = cljs.core.async.close_BANG_(out);
var state_48979__$1 = state_48979;
var statearr_48992_49989 = state_48979__$1;
(statearr_48992_49989[(2)] = inst_48973);

(statearr_48992_49989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48980 === (10))){
var inst_48971 = (state_48979[(2)]);
var state_48979__$1 = state_48979;
var statearr_48993_49990 = state_48979__$1;
(statearr_48993_49990[(2)] = inst_48971);

(statearr_48993_49990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48980 === (8))){
var inst_48949 = (state_48979[(10)]);
var inst_48958 = (state_48979[(7)]);
var inst_48959 = (state_48979[(8)]);
var inst_48960 = (state_48979[(9)]);
var inst_48963 = (function (){var cs = inst_48949;
var vec__48954 = inst_48958;
var v = inst_48959;
var c = inst_48960;
return (function (p1__48945_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48945_SHARP_);
});
})();
var inst_48964 = cljs.core.filterv(inst_48963,inst_48949);
var inst_48949__$1 = inst_48964;
var state_48979__$1 = (function (){var statearr_48994 = state_48979;
(statearr_48994[(10)] = inst_48949__$1);

return statearr_48994;
})();
var statearr_48995_49991 = state_48979__$1;
(statearr_48995_49991[(2)] = null);

(statearr_48995_49991[(1)] = (2));


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
var cljs$core$async$state_machine__47855__auto__ = null;
var cljs$core$async$state_machine__47855__auto____0 = (function (){
var statearr_48996 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48996[(0)] = cljs$core$async$state_machine__47855__auto__);

(statearr_48996[(1)] = (1));

return statearr_48996;
});
var cljs$core$async$state_machine__47855__auto____1 = (function (state_48979){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_48979);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e48997){var ex__47858__auto__ = e48997;
var statearr_48998_49996 = state_48979;
(statearr_48998_49996[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_48979[(4)]))){
var statearr_48999_49998 = state_48979;
(statearr_48999_49998[(1)] = cljs.core.first((state_48979[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49999 = state_48979;
state_48979 = G__49999;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$state_machine__47855__auto__ = function(state_48979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47855__auto____1.call(this,state_48979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47855__auto____0;
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47855__auto____1;
return cljs$core$async$state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_49000 = f__47926__auto__();
(statearr_49000[(6)] = c__47925__auto___49981);

return statearr_49000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
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
var G__49002 = arguments.length;
switch (G__49002) {
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
var c__47925__auto___50002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_49026){
var state_val_49027 = (state_49026[(1)]);
if((state_val_49027 === (7))){
var inst_49008 = (state_49026[(7)]);
var inst_49008__$1 = (state_49026[(2)]);
var inst_49009 = (inst_49008__$1 == null);
var inst_49010 = cljs.core.not(inst_49009);
var state_49026__$1 = (function (){var statearr_49028 = state_49026;
(statearr_49028[(7)] = inst_49008__$1);

return statearr_49028;
})();
if(inst_49010){
var statearr_49029_50003 = state_49026__$1;
(statearr_49029_50003[(1)] = (8));

} else {
var statearr_49030_50004 = state_49026__$1;
(statearr_49030_50004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49027 === (1))){
var inst_49003 = (0);
var state_49026__$1 = (function (){var statearr_49031 = state_49026;
(statearr_49031[(8)] = inst_49003);

return statearr_49031;
})();
var statearr_49032_50005 = state_49026__$1;
(statearr_49032_50005[(2)] = null);

(statearr_49032_50005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49027 === (4))){
var state_49026__$1 = state_49026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49026__$1,(7),ch);
} else {
if((state_val_49027 === (6))){
var inst_49021 = (state_49026[(2)]);
var state_49026__$1 = state_49026;
var statearr_49033_50006 = state_49026__$1;
(statearr_49033_50006[(2)] = inst_49021);

(statearr_49033_50006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49027 === (3))){
var inst_49023 = (state_49026[(2)]);
var inst_49024 = cljs.core.async.close_BANG_(out);
var state_49026__$1 = (function (){var statearr_49034 = state_49026;
(statearr_49034[(9)] = inst_49023);

return statearr_49034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49026__$1,inst_49024);
} else {
if((state_val_49027 === (2))){
var inst_49003 = (state_49026[(8)]);
var inst_49005 = (inst_49003 < n);
var state_49026__$1 = state_49026;
if(cljs.core.truth_(inst_49005)){
var statearr_49035_50007 = state_49026__$1;
(statearr_49035_50007[(1)] = (4));

} else {
var statearr_49036_50008 = state_49026__$1;
(statearr_49036_50008[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49027 === (11))){
var inst_49003 = (state_49026[(8)]);
var inst_49013 = (state_49026[(2)]);
var inst_49014 = (inst_49003 + (1));
var inst_49003__$1 = inst_49014;
var state_49026__$1 = (function (){var statearr_49037 = state_49026;
(statearr_49037[(10)] = inst_49013);

(statearr_49037[(8)] = inst_49003__$1);

return statearr_49037;
})();
var statearr_49038_50009 = state_49026__$1;
(statearr_49038_50009[(2)] = null);

(statearr_49038_50009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49027 === (9))){
var state_49026__$1 = state_49026;
var statearr_49039_50011 = state_49026__$1;
(statearr_49039_50011[(2)] = null);

(statearr_49039_50011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49027 === (5))){
var state_49026__$1 = state_49026;
var statearr_49040_50012 = state_49026__$1;
(statearr_49040_50012[(2)] = null);

(statearr_49040_50012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49027 === (10))){
var inst_49018 = (state_49026[(2)]);
var state_49026__$1 = state_49026;
var statearr_49041_50013 = state_49026__$1;
(statearr_49041_50013[(2)] = inst_49018);

(statearr_49041_50013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49027 === (8))){
var inst_49008 = (state_49026[(7)]);
var state_49026__$1 = state_49026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49026__$1,(11),out,inst_49008);
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
var cljs$core$async$state_machine__47855__auto__ = null;
var cljs$core$async$state_machine__47855__auto____0 = (function (){
var statearr_49042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49042[(0)] = cljs$core$async$state_machine__47855__auto__);

(statearr_49042[(1)] = (1));

return statearr_49042;
});
var cljs$core$async$state_machine__47855__auto____1 = (function (state_49026){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_49026);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e49043){var ex__47858__auto__ = e49043;
var statearr_49044_50014 = state_49026;
(statearr_49044_50014[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_49026[(4)]))){
var statearr_49045_50015 = state_49026;
(statearr_49045_50015[(1)] = cljs.core.first((state_49026[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50016 = state_49026;
state_49026 = G__50016;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$state_machine__47855__auto__ = function(state_49026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47855__auto____1.call(this,state_49026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47855__auto____0;
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47855__auto____1;
return cljs$core$async$state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_49046 = f__47926__auto__();
(statearr_49046[(6)] = c__47925__auto___50002);

return statearr_49046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
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
cljs.core.async.t_cljs$core$async49051 = (function (f,ch,meta49049,_,fn1,meta49052){
this.f = f;
this.ch = ch;
this.meta49049 = meta49049;
this._ = _;
this.fn1 = fn1;
this.meta49052 = meta49052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49053,meta49052__$1){
var self__ = this;
var _49053__$1 = this;
return (new cljs.core.async.t_cljs$core$async49051(self__.f,self__.ch,self__.meta49049,self__._,self__.fn1,meta49052__$1));
}));

(cljs.core.async.t_cljs$core$async49051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49053){
var self__ = this;
var _49053__$1 = this;
return self__.meta49052;
}));

(cljs.core.async.t_cljs$core$async49051.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49051.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49047_SHARP_){
var G__49054 = (((p1__49047_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49047_SHARP_) : self__.f.call(null,p1__49047_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49054) : f1.call(null,G__49054));
});
}));

(cljs.core.async.t_cljs$core$async49051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49049","meta49049",731658125,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49048","cljs.core.async/t_cljs$core$async49048",1203424741,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49052","meta49052",-177217578,null)], null);
}));

(cljs.core.async.t_cljs$core$async49051.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49051");

(cljs.core.async.t_cljs$core$async49051.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async49051");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49051.
 */
cljs.core.async.__GT_t_cljs$core$async49051 = (function cljs$core$async$__GT_t_cljs$core$async49051(f,ch,meta49049,_,fn1,meta49052){
return (new cljs.core.async.t_cljs$core$async49051(f,ch,meta49049,_,fn1,meta49052));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49048 = (function (f,ch,meta49049){
this.f = f;
this.ch = ch;
this.meta49049 = meta49049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49050,meta49049__$1){
var self__ = this;
var _49050__$1 = this;
return (new cljs.core.async.t_cljs$core$async49048(self__.f,self__.ch,meta49049__$1));
}));

(cljs.core.async.t_cljs$core$async49048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49050){
var self__ = this;
var _49050__$1 = this;
return self__.meta49049;
}));

(cljs.core.async.t_cljs$core$async49048.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49048.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49048.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async49051(self__.f,self__.ch,self__.meta49049,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49055 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49055) : self__.f.call(null,G__49055));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49048.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49049","meta49049",731658125,null)], null);
}));

(cljs.core.async.t_cljs$core$async49048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49048");

(cljs.core.async.t_cljs$core$async49048.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async49048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49048.
 */
cljs.core.async.__GT_t_cljs$core$async49048 = (function cljs$core$async$__GT_t_cljs$core$async49048(f,ch,meta49049){
return (new cljs.core.async.t_cljs$core$async49048(f,ch,meta49049));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async49048(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49056 = (function (f,ch,meta49057){
this.f = f;
this.ch = ch;
this.meta49057 = meta49057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49058,meta49057__$1){
var self__ = this;
var _49058__$1 = this;
return (new cljs.core.async.t_cljs$core$async49056(self__.f,self__.ch,meta49057__$1));
}));

(cljs.core.async.t_cljs$core$async49056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49058){
var self__ = this;
var _49058__$1 = this;
return self__.meta49057;
}));

(cljs.core.async.t_cljs$core$async49056.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49056.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49056.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49057","meta49057",-148213858,null)], null);
}));

(cljs.core.async.t_cljs$core$async49056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49056");

(cljs.core.async.t_cljs$core$async49056.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async49056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49056.
 */
cljs.core.async.__GT_t_cljs$core$async49056 = (function cljs$core$async$__GT_t_cljs$core$async49056(f,ch,meta49057){
return (new cljs.core.async.t_cljs$core$async49056(f,ch,meta49057));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async49056(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49059 = (function (p,ch,meta49060){
this.p = p;
this.ch = ch;
this.meta49060 = meta49060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49061,meta49060__$1){
var self__ = this;
var _49061__$1 = this;
return (new cljs.core.async.t_cljs$core$async49059(self__.p,self__.ch,meta49060__$1));
}));

(cljs.core.async.t_cljs$core$async49059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49061){
var self__ = this;
var _49061__$1 = this;
return self__.meta49060;
}));

(cljs.core.async.t_cljs$core$async49059.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49059.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49059.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49059.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49060","meta49060",-1462183503,null)], null);
}));

(cljs.core.async.t_cljs$core$async49059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49059");

(cljs.core.async.t_cljs$core$async49059.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async49059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49059.
 */
cljs.core.async.__GT_t_cljs$core$async49059 = (function cljs$core$async$__GT_t_cljs$core$async49059(p,ch,meta49060){
return (new cljs.core.async.t_cljs$core$async49059(p,ch,meta49060));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async49059(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49063 = arguments.length;
switch (G__49063) {
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
var c__47925__auto___50030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_49084){
var state_val_49085 = (state_49084[(1)]);
if((state_val_49085 === (7))){
var inst_49080 = (state_49084[(2)]);
var state_49084__$1 = state_49084;
var statearr_49086_50038 = state_49084__$1;
(statearr_49086_50038[(2)] = inst_49080);

(statearr_49086_50038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (1))){
var state_49084__$1 = state_49084;
var statearr_49087_50039 = state_49084__$1;
(statearr_49087_50039[(2)] = null);

(statearr_49087_50039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (4))){
var inst_49066 = (state_49084[(7)]);
var inst_49066__$1 = (state_49084[(2)]);
var inst_49067 = (inst_49066__$1 == null);
var state_49084__$1 = (function (){var statearr_49088 = state_49084;
(statearr_49088[(7)] = inst_49066__$1);

return statearr_49088;
})();
if(cljs.core.truth_(inst_49067)){
var statearr_49089_50040 = state_49084__$1;
(statearr_49089_50040[(1)] = (5));

} else {
var statearr_49090_50041 = state_49084__$1;
(statearr_49090_50041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (6))){
var inst_49066 = (state_49084[(7)]);
var inst_49071 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49066) : p.call(null,inst_49066));
var state_49084__$1 = state_49084;
if(cljs.core.truth_(inst_49071)){
var statearr_49091_50042 = state_49084__$1;
(statearr_49091_50042[(1)] = (8));

} else {
var statearr_49092_50043 = state_49084__$1;
(statearr_49092_50043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (3))){
var inst_49082 = (state_49084[(2)]);
var state_49084__$1 = state_49084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49084__$1,inst_49082);
} else {
if((state_val_49085 === (2))){
var state_49084__$1 = state_49084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49084__$1,(4),ch);
} else {
if((state_val_49085 === (11))){
var inst_49074 = (state_49084[(2)]);
var state_49084__$1 = state_49084;
var statearr_49093_50048 = state_49084__$1;
(statearr_49093_50048[(2)] = inst_49074);

(statearr_49093_50048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (9))){
var state_49084__$1 = state_49084;
var statearr_49094_50049 = state_49084__$1;
(statearr_49094_50049[(2)] = null);

(statearr_49094_50049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (5))){
var inst_49069 = cljs.core.async.close_BANG_(out);
var state_49084__$1 = state_49084;
var statearr_49095_50050 = state_49084__$1;
(statearr_49095_50050[(2)] = inst_49069);

(statearr_49095_50050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (10))){
var inst_49077 = (state_49084[(2)]);
var state_49084__$1 = (function (){var statearr_49096 = state_49084;
(statearr_49096[(8)] = inst_49077);

return statearr_49096;
})();
var statearr_49097_50051 = state_49084__$1;
(statearr_49097_50051[(2)] = null);

(statearr_49097_50051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (8))){
var inst_49066 = (state_49084[(7)]);
var state_49084__$1 = state_49084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49084__$1,(11),out,inst_49066);
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
var cljs$core$async$state_machine__47855__auto__ = null;
var cljs$core$async$state_machine__47855__auto____0 = (function (){
var statearr_49098 = [null,null,null,null,null,null,null,null,null];
(statearr_49098[(0)] = cljs$core$async$state_machine__47855__auto__);

(statearr_49098[(1)] = (1));

return statearr_49098;
});
var cljs$core$async$state_machine__47855__auto____1 = (function (state_49084){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_49084);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e49099){var ex__47858__auto__ = e49099;
var statearr_49100_50052 = state_49084;
(statearr_49100_50052[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_49084[(4)]))){
var statearr_49101_50053 = state_49084;
(statearr_49101_50053[(1)] = cljs.core.first((state_49084[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50054 = state_49084;
state_49084 = G__50054;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$state_machine__47855__auto__ = function(state_49084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47855__auto____1.call(this,state_49084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47855__auto____0;
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47855__auto____1;
return cljs$core$async$state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_49102 = f__47926__auto__();
(statearr_49102[(6)] = c__47925__auto___50030);

return statearr_49102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49104 = arguments.length;
switch (G__49104) {
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
var c__47925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_49166){
var state_val_49167 = (state_49166[(1)]);
if((state_val_49167 === (7))){
var inst_49162 = (state_49166[(2)]);
var state_49166__$1 = state_49166;
var statearr_49168_50058 = state_49166__$1;
(statearr_49168_50058[(2)] = inst_49162);

(statearr_49168_50058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (20))){
var inst_49132 = (state_49166[(7)]);
var inst_49143 = (state_49166[(2)]);
var inst_49144 = cljs.core.next(inst_49132);
var inst_49118 = inst_49144;
var inst_49119 = null;
var inst_49120 = (0);
var inst_49121 = (0);
var state_49166__$1 = (function (){var statearr_49169 = state_49166;
(statearr_49169[(8)] = inst_49143);

(statearr_49169[(9)] = inst_49118);

(statearr_49169[(10)] = inst_49119);

(statearr_49169[(11)] = inst_49120);

(statearr_49169[(12)] = inst_49121);

return statearr_49169;
})();
var statearr_49170_50059 = state_49166__$1;
(statearr_49170_50059[(2)] = null);

(statearr_49170_50059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (1))){
var state_49166__$1 = state_49166;
var statearr_49171_50060 = state_49166__$1;
(statearr_49171_50060[(2)] = null);

(statearr_49171_50060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (4))){
var inst_49107 = (state_49166[(13)]);
var inst_49107__$1 = (state_49166[(2)]);
var inst_49108 = (inst_49107__$1 == null);
var state_49166__$1 = (function (){var statearr_49172 = state_49166;
(statearr_49172[(13)] = inst_49107__$1);

return statearr_49172;
})();
if(cljs.core.truth_(inst_49108)){
var statearr_49173_50061 = state_49166__$1;
(statearr_49173_50061[(1)] = (5));

} else {
var statearr_49174_50062 = state_49166__$1;
(statearr_49174_50062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (15))){
var state_49166__$1 = state_49166;
var statearr_49178_50063 = state_49166__$1;
(statearr_49178_50063[(2)] = null);

(statearr_49178_50063[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (21))){
var state_49166__$1 = state_49166;
var statearr_49179_50064 = state_49166__$1;
(statearr_49179_50064[(2)] = null);

(statearr_49179_50064[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (13))){
var inst_49121 = (state_49166[(12)]);
var inst_49118 = (state_49166[(9)]);
var inst_49119 = (state_49166[(10)]);
var inst_49120 = (state_49166[(11)]);
var inst_49128 = (state_49166[(2)]);
var inst_49129 = (inst_49121 + (1));
var tmp49175 = inst_49120;
var tmp49176 = inst_49119;
var tmp49177 = inst_49118;
var inst_49118__$1 = tmp49177;
var inst_49119__$1 = tmp49176;
var inst_49120__$1 = tmp49175;
var inst_49121__$1 = inst_49129;
var state_49166__$1 = (function (){var statearr_49180 = state_49166;
(statearr_49180[(14)] = inst_49128);

(statearr_49180[(9)] = inst_49118__$1);

(statearr_49180[(10)] = inst_49119__$1);

(statearr_49180[(11)] = inst_49120__$1);

(statearr_49180[(12)] = inst_49121__$1);

return statearr_49180;
})();
var statearr_49181_50065 = state_49166__$1;
(statearr_49181_50065[(2)] = null);

(statearr_49181_50065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (22))){
var state_49166__$1 = state_49166;
var statearr_49182_50066 = state_49166__$1;
(statearr_49182_50066[(2)] = null);

(statearr_49182_50066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (6))){
var inst_49107 = (state_49166[(13)]);
var inst_49116 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49107) : f.call(null,inst_49107));
var inst_49117 = cljs.core.seq(inst_49116);
var inst_49118 = inst_49117;
var inst_49119 = null;
var inst_49120 = (0);
var inst_49121 = (0);
var state_49166__$1 = (function (){var statearr_49183 = state_49166;
(statearr_49183[(9)] = inst_49118);

(statearr_49183[(10)] = inst_49119);

(statearr_49183[(11)] = inst_49120);

(statearr_49183[(12)] = inst_49121);

return statearr_49183;
})();
var statearr_49184_50067 = state_49166__$1;
(statearr_49184_50067[(2)] = null);

(statearr_49184_50067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (17))){
var inst_49132 = (state_49166[(7)]);
var inst_49136 = cljs.core.chunk_first(inst_49132);
var inst_49137 = cljs.core.chunk_rest(inst_49132);
var inst_49138 = cljs.core.count(inst_49136);
var inst_49118 = inst_49137;
var inst_49119 = inst_49136;
var inst_49120 = inst_49138;
var inst_49121 = (0);
var state_49166__$1 = (function (){var statearr_49185 = state_49166;
(statearr_49185[(9)] = inst_49118);

(statearr_49185[(10)] = inst_49119);

(statearr_49185[(11)] = inst_49120);

(statearr_49185[(12)] = inst_49121);

return statearr_49185;
})();
var statearr_49186_50068 = state_49166__$1;
(statearr_49186_50068[(2)] = null);

(statearr_49186_50068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (3))){
var inst_49164 = (state_49166[(2)]);
var state_49166__$1 = state_49166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49166__$1,inst_49164);
} else {
if((state_val_49167 === (12))){
var inst_49152 = (state_49166[(2)]);
var state_49166__$1 = state_49166;
var statearr_49187_50069 = state_49166__$1;
(statearr_49187_50069[(2)] = inst_49152);

(statearr_49187_50069[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (2))){
var state_49166__$1 = state_49166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49166__$1,(4),in$);
} else {
if((state_val_49167 === (23))){
var inst_49160 = (state_49166[(2)]);
var state_49166__$1 = state_49166;
var statearr_49188_50070 = state_49166__$1;
(statearr_49188_50070[(2)] = inst_49160);

(statearr_49188_50070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (19))){
var inst_49147 = (state_49166[(2)]);
var state_49166__$1 = state_49166;
var statearr_49189_50071 = state_49166__$1;
(statearr_49189_50071[(2)] = inst_49147);

(statearr_49189_50071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (11))){
var inst_49118 = (state_49166[(9)]);
var inst_49132 = (state_49166[(7)]);
var inst_49132__$1 = cljs.core.seq(inst_49118);
var state_49166__$1 = (function (){var statearr_49190 = state_49166;
(statearr_49190[(7)] = inst_49132__$1);

return statearr_49190;
})();
if(inst_49132__$1){
var statearr_49191_50072 = state_49166__$1;
(statearr_49191_50072[(1)] = (14));

} else {
var statearr_49192_50073 = state_49166__$1;
(statearr_49192_50073[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (9))){
var inst_49154 = (state_49166[(2)]);
var inst_49155 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49166__$1 = (function (){var statearr_49193 = state_49166;
(statearr_49193[(15)] = inst_49154);

return statearr_49193;
})();
if(cljs.core.truth_(inst_49155)){
var statearr_49194_50074 = state_49166__$1;
(statearr_49194_50074[(1)] = (21));

} else {
var statearr_49195_50075 = state_49166__$1;
(statearr_49195_50075[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (5))){
var inst_49110 = cljs.core.async.close_BANG_(out);
var state_49166__$1 = state_49166;
var statearr_49196_50076 = state_49166__$1;
(statearr_49196_50076[(2)] = inst_49110);

(statearr_49196_50076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (14))){
var inst_49132 = (state_49166[(7)]);
var inst_49134 = cljs.core.chunked_seq_QMARK_(inst_49132);
var state_49166__$1 = state_49166;
if(inst_49134){
var statearr_49197_50081 = state_49166__$1;
(statearr_49197_50081[(1)] = (17));

} else {
var statearr_49198_50082 = state_49166__$1;
(statearr_49198_50082[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (16))){
var inst_49150 = (state_49166[(2)]);
var state_49166__$1 = state_49166;
var statearr_49199_50083 = state_49166__$1;
(statearr_49199_50083[(2)] = inst_49150);

(statearr_49199_50083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49167 === (10))){
var inst_49119 = (state_49166[(10)]);
var inst_49121 = (state_49166[(12)]);
var inst_49126 = cljs.core._nth(inst_49119,inst_49121);
var state_49166__$1 = state_49166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49166__$1,(13),out,inst_49126);
} else {
if((state_val_49167 === (18))){
var inst_49132 = (state_49166[(7)]);
var inst_49141 = cljs.core.first(inst_49132);
var state_49166__$1 = state_49166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49166__$1,(20),out,inst_49141);
} else {
if((state_val_49167 === (8))){
var inst_49121 = (state_49166[(12)]);
var inst_49120 = (state_49166[(11)]);
var inst_49123 = (inst_49121 < inst_49120);
var inst_49124 = inst_49123;
var state_49166__$1 = state_49166;
if(cljs.core.truth_(inst_49124)){
var statearr_49200_50085 = state_49166__$1;
(statearr_49200_50085[(1)] = (10));

} else {
var statearr_49201_50092 = state_49166__$1;
(statearr_49201_50092[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__47855__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47855__auto____0 = (function (){
var statearr_49202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49202[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47855__auto__);

(statearr_49202[(1)] = (1));

return statearr_49202;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47855__auto____1 = (function (state_49166){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_49166);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e49203){var ex__47858__auto__ = e49203;
var statearr_49204_50094 = state_49166;
(statearr_49204_50094[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_49166[(4)]))){
var statearr_49205_50095 = state_49166;
(statearr_49205_50095[(1)] = cljs.core.first((state_49166[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50096 = state_49166;
state_49166 = G__50096;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47855__auto__ = function(state_49166){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47855__auto____1.call(this,state_49166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47855__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47855__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_49206 = f__47926__auto__();
(statearr_49206[(6)] = c__47925__auto__);

return statearr_49206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
}));

return c__47925__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49208 = arguments.length;
switch (G__49208) {
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
var G__49210 = arguments.length;
switch (G__49210) {
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
var G__49212 = arguments.length;
switch (G__49212) {
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
var c__47925__auto___50100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_49236){
var state_val_49237 = (state_49236[(1)]);
if((state_val_49237 === (7))){
var inst_49231 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
var statearr_49238_50101 = state_49236__$1;
(statearr_49238_50101[(2)] = inst_49231);

(statearr_49238_50101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (1))){
var inst_49213 = null;
var state_49236__$1 = (function (){var statearr_49239 = state_49236;
(statearr_49239[(7)] = inst_49213);

return statearr_49239;
})();
var statearr_49240_50102 = state_49236__$1;
(statearr_49240_50102[(2)] = null);

(statearr_49240_50102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (4))){
var inst_49216 = (state_49236[(8)]);
var inst_49216__$1 = (state_49236[(2)]);
var inst_49217 = (inst_49216__$1 == null);
var inst_49218 = cljs.core.not(inst_49217);
var state_49236__$1 = (function (){var statearr_49241 = state_49236;
(statearr_49241[(8)] = inst_49216__$1);

return statearr_49241;
})();
if(inst_49218){
var statearr_49242_50104 = state_49236__$1;
(statearr_49242_50104[(1)] = (5));

} else {
var statearr_49243_50105 = state_49236__$1;
(statearr_49243_50105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (6))){
var state_49236__$1 = state_49236;
var statearr_49244_50111 = state_49236__$1;
(statearr_49244_50111[(2)] = null);

(statearr_49244_50111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (3))){
var inst_49233 = (state_49236[(2)]);
var inst_49234 = cljs.core.async.close_BANG_(out);
var state_49236__$1 = (function (){var statearr_49245 = state_49236;
(statearr_49245[(9)] = inst_49233);

return statearr_49245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49236__$1,inst_49234);
} else {
if((state_val_49237 === (2))){
var state_49236__$1 = state_49236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49236__$1,(4),ch);
} else {
if((state_val_49237 === (11))){
var inst_49216 = (state_49236[(8)]);
var inst_49225 = (state_49236[(2)]);
var inst_49213 = inst_49216;
var state_49236__$1 = (function (){var statearr_49246 = state_49236;
(statearr_49246[(10)] = inst_49225);

(statearr_49246[(7)] = inst_49213);

return statearr_49246;
})();
var statearr_49247_50116 = state_49236__$1;
(statearr_49247_50116[(2)] = null);

(statearr_49247_50116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (9))){
var inst_49216 = (state_49236[(8)]);
var state_49236__$1 = state_49236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49236__$1,(11),out,inst_49216);
} else {
if((state_val_49237 === (5))){
var inst_49216 = (state_49236[(8)]);
var inst_49213 = (state_49236[(7)]);
var inst_49220 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49216,inst_49213);
var state_49236__$1 = state_49236;
if(inst_49220){
var statearr_49249_50117 = state_49236__$1;
(statearr_49249_50117[(1)] = (8));

} else {
var statearr_49250_50118 = state_49236__$1;
(statearr_49250_50118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (10))){
var inst_49228 = (state_49236[(2)]);
var state_49236__$1 = state_49236;
var statearr_49251_50119 = state_49236__$1;
(statearr_49251_50119[(2)] = inst_49228);

(statearr_49251_50119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49237 === (8))){
var inst_49213 = (state_49236[(7)]);
var tmp49248 = inst_49213;
var inst_49213__$1 = tmp49248;
var state_49236__$1 = (function (){var statearr_49252 = state_49236;
(statearr_49252[(7)] = inst_49213__$1);

return statearr_49252;
})();
var statearr_49253_50120 = state_49236__$1;
(statearr_49253_50120[(2)] = null);

(statearr_49253_50120[(1)] = (2));


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
var cljs$core$async$state_machine__47855__auto__ = null;
var cljs$core$async$state_machine__47855__auto____0 = (function (){
var statearr_49254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49254[(0)] = cljs$core$async$state_machine__47855__auto__);

(statearr_49254[(1)] = (1));

return statearr_49254;
});
var cljs$core$async$state_machine__47855__auto____1 = (function (state_49236){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_49236);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e49255){var ex__47858__auto__ = e49255;
var statearr_49256_50121 = state_49236;
(statearr_49256_50121[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_49236[(4)]))){
var statearr_49257_50122 = state_49236;
(statearr_49257_50122[(1)] = cljs.core.first((state_49236[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50123 = state_49236;
state_49236 = G__50123;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$state_machine__47855__auto__ = function(state_49236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47855__auto____1.call(this,state_49236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47855__auto____0;
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47855__auto____1;
return cljs$core$async$state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_49258 = f__47926__auto__();
(statearr_49258[(6)] = c__47925__auto___50100);

return statearr_49258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49260 = arguments.length;
switch (G__49260) {
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
var c__47925__auto___50125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_49298){
var state_val_49299 = (state_49298[(1)]);
if((state_val_49299 === (7))){
var inst_49294 = (state_49298[(2)]);
var state_49298__$1 = state_49298;
var statearr_49300_50133 = state_49298__$1;
(statearr_49300_50133[(2)] = inst_49294);

(statearr_49300_50133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49299 === (1))){
var inst_49261 = (new Array(n));
var inst_49262 = inst_49261;
var inst_49263 = (0);
var state_49298__$1 = (function (){var statearr_49301 = state_49298;
(statearr_49301[(7)] = inst_49262);

(statearr_49301[(8)] = inst_49263);

return statearr_49301;
})();
var statearr_49302_50138 = state_49298__$1;
(statearr_49302_50138[(2)] = null);

(statearr_49302_50138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49299 === (4))){
var inst_49266 = (state_49298[(9)]);
var inst_49266__$1 = (state_49298[(2)]);
var inst_49267 = (inst_49266__$1 == null);
var inst_49268 = cljs.core.not(inst_49267);
var state_49298__$1 = (function (){var statearr_49303 = state_49298;
(statearr_49303[(9)] = inst_49266__$1);

return statearr_49303;
})();
if(inst_49268){
var statearr_49304_50139 = state_49298__$1;
(statearr_49304_50139[(1)] = (5));

} else {
var statearr_49305_50140 = state_49298__$1;
(statearr_49305_50140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49299 === (15))){
var inst_49288 = (state_49298[(2)]);
var state_49298__$1 = state_49298;
var statearr_49306_50141 = state_49298__$1;
(statearr_49306_50141[(2)] = inst_49288);

(statearr_49306_50141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49299 === (13))){
var state_49298__$1 = state_49298;
var statearr_49307_50142 = state_49298__$1;
(statearr_49307_50142[(2)] = null);

(statearr_49307_50142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49299 === (6))){
var inst_49263 = (state_49298[(8)]);
var inst_49284 = (inst_49263 > (0));
var state_49298__$1 = state_49298;
if(cljs.core.truth_(inst_49284)){
var statearr_49308_50143 = state_49298__$1;
(statearr_49308_50143[(1)] = (12));

} else {
var statearr_49309_50144 = state_49298__$1;
(statearr_49309_50144[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49299 === (3))){
var inst_49296 = (state_49298[(2)]);
var state_49298__$1 = state_49298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49298__$1,inst_49296);
} else {
if((state_val_49299 === (12))){
var inst_49262 = (state_49298[(7)]);
var inst_49286 = cljs.core.vec(inst_49262);
var state_49298__$1 = state_49298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49298__$1,(15),out,inst_49286);
} else {
if((state_val_49299 === (2))){
var state_49298__$1 = state_49298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49298__$1,(4),ch);
} else {
if((state_val_49299 === (11))){
var inst_49278 = (state_49298[(2)]);
var inst_49279 = (new Array(n));
var inst_49262 = inst_49279;
var inst_49263 = (0);
var state_49298__$1 = (function (){var statearr_49310 = state_49298;
(statearr_49310[(10)] = inst_49278);

(statearr_49310[(7)] = inst_49262);

(statearr_49310[(8)] = inst_49263);

return statearr_49310;
})();
var statearr_49311_50145 = state_49298__$1;
(statearr_49311_50145[(2)] = null);

(statearr_49311_50145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49299 === (9))){
var inst_49262 = (state_49298[(7)]);
var inst_49276 = cljs.core.vec(inst_49262);
var state_49298__$1 = state_49298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49298__$1,(11),out,inst_49276);
} else {
if((state_val_49299 === (5))){
var inst_49262 = (state_49298[(7)]);
var inst_49263 = (state_49298[(8)]);
var inst_49266 = (state_49298[(9)]);
var inst_49271 = (state_49298[(11)]);
var inst_49270 = (inst_49262[inst_49263] = inst_49266);
var inst_49271__$1 = (inst_49263 + (1));
var inst_49272 = (inst_49271__$1 < n);
var state_49298__$1 = (function (){var statearr_49312 = state_49298;
(statearr_49312[(12)] = inst_49270);

(statearr_49312[(11)] = inst_49271__$1);

return statearr_49312;
})();
if(cljs.core.truth_(inst_49272)){
var statearr_49313_50146 = state_49298__$1;
(statearr_49313_50146[(1)] = (8));

} else {
var statearr_49314_50147 = state_49298__$1;
(statearr_49314_50147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49299 === (14))){
var inst_49291 = (state_49298[(2)]);
var inst_49292 = cljs.core.async.close_BANG_(out);
var state_49298__$1 = (function (){var statearr_49316 = state_49298;
(statearr_49316[(13)] = inst_49291);

return statearr_49316;
})();
var statearr_49317_50148 = state_49298__$1;
(statearr_49317_50148[(2)] = inst_49292);

(statearr_49317_50148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49299 === (10))){
var inst_49282 = (state_49298[(2)]);
var state_49298__$1 = state_49298;
var statearr_49318_50149 = state_49298__$1;
(statearr_49318_50149[(2)] = inst_49282);

(statearr_49318_50149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49299 === (8))){
var inst_49262 = (state_49298[(7)]);
var inst_49271 = (state_49298[(11)]);
var tmp49315 = inst_49262;
var inst_49262__$1 = tmp49315;
var inst_49263 = inst_49271;
var state_49298__$1 = (function (){var statearr_49319 = state_49298;
(statearr_49319[(7)] = inst_49262__$1);

(statearr_49319[(8)] = inst_49263);

return statearr_49319;
})();
var statearr_49320_50150 = state_49298__$1;
(statearr_49320_50150[(2)] = null);

(statearr_49320_50150[(1)] = (2));


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
var cljs$core$async$state_machine__47855__auto__ = null;
var cljs$core$async$state_machine__47855__auto____0 = (function (){
var statearr_49321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49321[(0)] = cljs$core$async$state_machine__47855__auto__);

(statearr_49321[(1)] = (1));

return statearr_49321;
});
var cljs$core$async$state_machine__47855__auto____1 = (function (state_49298){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_49298);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e49322){var ex__47858__auto__ = e49322;
var statearr_49323_50155 = state_49298;
(statearr_49323_50155[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_49298[(4)]))){
var statearr_49324_50156 = state_49298;
(statearr_49324_50156[(1)] = cljs.core.first((state_49298[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50157 = state_49298;
state_49298 = G__50157;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$state_machine__47855__auto__ = function(state_49298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47855__auto____1.call(this,state_49298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47855__auto____0;
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47855__auto____1;
return cljs$core$async$state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_49325 = f__47926__auto__();
(statearr_49325[(6)] = c__47925__auto___50125);

return statearr_49325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49327 = arguments.length;
switch (G__49327) {
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
var c__47925__auto___50159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47926__auto__ = (function (){var switch__47854__auto__ = (function (state_49372){
var state_val_49373 = (state_49372[(1)]);
if((state_val_49373 === (7))){
var inst_49368 = (state_49372[(2)]);
var state_49372__$1 = state_49372;
var statearr_49374_50160 = state_49372__$1;
(statearr_49374_50160[(2)] = inst_49368);

(statearr_49374_50160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (1))){
var inst_49328 = [];
var inst_49329 = inst_49328;
var inst_49330 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49372__$1 = (function (){var statearr_49375 = state_49372;
(statearr_49375[(7)] = inst_49329);

(statearr_49375[(8)] = inst_49330);

return statearr_49375;
})();
var statearr_49376_50161 = state_49372__$1;
(statearr_49376_50161[(2)] = null);

(statearr_49376_50161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (4))){
var inst_49333 = (state_49372[(9)]);
var inst_49333__$1 = (state_49372[(2)]);
var inst_49334 = (inst_49333__$1 == null);
var inst_49335 = cljs.core.not(inst_49334);
var state_49372__$1 = (function (){var statearr_49377 = state_49372;
(statearr_49377[(9)] = inst_49333__$1);

return statearr_49377;
})();
if(inst_49335){
var statearr_49378_50163 = state_49372__$1;
(statearr_49378_50163[(1)] = (5));

} else {
var statearr_49379_50164 = state_49372__$1;
(statearr_49379_50164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (15))){
var inst_49329 = (state_49372[(7)]);
var inst_49360 = cljs.core.vec(inst_49329);
var state_49372__$1 = state_49372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49372__$1,(18),out,inst_49360);
} else {
if((state_val_49373 === (13))){
var inst_49355 = (state_49372[(2)]);
var state_49372__$1 = state_49372;
var statearr_49380_50165 = state_49372__$1;
(statearr_49380_50165[(2)] = inst_49355);

(statearr_49380_50165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (6))){
var inst_49329 = (state_49372[(7)]);
var inst_49357 = inst_49329.length;
var inst_49358 = (inst_49357 > (0));
var state_49372__$1 = state_49372;
if(cljs.core.truth_(inst_49358)){
var statearr_49381_50170 = state_49372__$1;
(statearr_49381_50170[(1)] = (15));

} else {
var statearr_49382_50171 = state_49372__$1;
(statearr_49382_50171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (17))){
var inst_49365 = (state_49372[(2)]);
var inst_49366 = cljs.core.async.close_BANG_(out);
var state_49372__$1 = (function (){var statearr_49383 = state_49372;
(statearr_49383[(10)] = inst_49365);

return statearr_49383;
})();
var statearr_49384_50178 = state_49372__$1;
(statearr_49384_50178[(2)] = inst_49366);

(statearr_49384_50178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (3))){
var inst_49370 = (state_49372[(2)]);
var state_49372__$1 = state_49372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49372__$1,inst_49370);
} else {
if((state_val_49373 === (12))){
var inst_49329 = (state_49372[(7)]);
var inst_49348 = cljs.core.vec(inst_49329);
var state_49372__$1 = state_49372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49372__$1,(14),out,inst_49348);
} else {
if((state_val_49373 === (2))){
var state_49372__$1 = state_49372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49372__$1,(4),ch);
} else {
if((state_val_49373 === (11))){
var inst_49329 = (state_49372[(7)]);
var inst_49333 = (state_49372[(9)]);
var inst_49337 = (state_49372[(11)]);
var inst_49345 = inst_49329.push(inst_49333);
var tmp49385 = inst_49329;
var inst_49329__$1 = tmp49385;
var inst_49330 = inst_49337;
var state_49372__$1 = (function (){var statearr_49386 = state_49372;
(statearr_49386[(12)] = inst_49345);

(statearr_49386[(7)] = inst_49329__$1);

(statearr_49386[(8)] = inst_49330);

return statearr_49386;
})();
var statearr_49387_50179 = state_49372__$1;
(statearr_49387_50179[(2)] = null);

(statearr_49387_50179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (9))){
var inst_49330 = (state_49372[(8)]);
var inst_49341 = cljs.core.keyword_identical_QMARK_(inst_49330,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49372__$1 = state_49372;
var statearr_49388_50180 = state_49372__$1;
(statearr_49388_50180[(2)] = inst_49341);

(statearr_49388_50180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (5))){
var inst_49333 = (state_49372[(9)]);
var inst_49337 = (state_49372[(11)]);
var inst_49330 = (state_49372[(8)]);
var inst_49338 = (state_49372[(13)]);
var inst_49337__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49333) : f.call(null,inst_49333));
var inst_49338__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49337__$1,inst_49330);
var state_49372__$1 = (function (){var statearr_49389 = state_49372;
(statearr_49389[(11)] = inst_49337__$1);

(statearr_49389[(13)] = inst_49338__$1);

return statearr_49389;
})();
if(inst_49338__$1){
var statearr_49390_50181 = state_49372__$1;
(statearr_49390_50181[(1)] = (8));

} else {
var statearr_49391_50182 = state_49372__$1;
(statearr_49391_50182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (14))){
var inst_49333 = (state_49372[(9)]);
var inst_49337 = (state_49372[(11)]);
var inst_49350 = (state_49372[(2)]);
var inst_49351 = [];
var inst_49352 = inst_49351.push(inst_49333);
var inst_49329 = inst_49351;
var inst_49330 = inst_49337;
var state_49372__$1 = (function (){var statearr_49392 = state_49372;
(statearr_49392[(14)] = inst_49350);

(statearr_49392[(15)] = inst_49352);

(statearr_49392[(7)] = inst_49329);

(statearr_49392[(8)] = inst_49330);

return statearr_49392;
})();
var statearr_49393_50183 = state_49372__$1;
(statearr_49393_50183[(2)] = null);

(statearr_49393_50183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (16))){
var state_49372__$1 = state_49372;
var statearr_49394_50184 = state_49372__$1;
(statearr_49394_50184[(2)] = null);

(statearr_49394_50184[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (10))){
var inst_49343 = (state_49372[(2)]);
var state_49372__$1 = state_49372;
if(cljs.core.truth_(inst_49343)){
var statearr_49395_50185 = state_49372__$1;
(statearr_49395_50185[(1)] = (11));

} else {
var statearr_49396_50186 = state_49372__$1;
(statearr_49396_50186[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (18))){
var inst_49362 = (state_49372[(2)]);
var state_49372__$1 = state_49372;
var statearr_49397_50187 = state_49372__$1;
(statearr_49397_50187[(2)] = inst_49362);

(statearr_49397_50187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49373 === (8))){
var inst_49338 = (state_49372[(13)]);
var state_49372__$1 = state_49372;
var statearr_49398_50188 = state_49372__$1;
(statearr_49398_50188[(2)] = inst_49338);

(statearr_49398_50188[(1)] = (10));


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
var cljs$core$async$state_machine__47855__auto__ = null;
var cljs$core$async$state_machine__47855__auto____0 = (function (){
var statearr_49399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49399[(0)] = cljs$core$async$state_machine__47855__auto__);

(statearr_49399[(1)] = (1));

return statearr_49399;
});
var cljs$core$async$state_machine__47855__auto____1 = (function (state_49372){
while(true){
var ret_value__47856__auto__ = (function (){try{while(true){
var result__47857__auto__ = switch__47854__auto__(state_49372);
if(cljs.core.keyword_identical_QMARK_(result__47857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47857__auto__;
}
break;
}
}catch (e49400){var ex__47858__auto__ = e49400;
var statearr_49401_50193 = state_49372;
(statearr_49401_50193[(2)] = ex__47858__auto__);


if(cljs.core.seq((state_49372[(4)]))){
var statearr_49402_50194 = state_49372;
(statearr_49402_50194[(1)] = cljs.core.first((state_49372[(4)])));

} else {
throw ex__47858__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47856__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50195 = state_49372;
state_49372 = G__50195;
continue;
} else {
return ret_value__47856__auto__;
}
break;
}
});
cljs$core$async$state_machine__47855__auto__ = function(state_49372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47855__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47855__auto____1.call(this,state_49372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47855__auto____0;
cljs$core$async$state_machine__47855__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47855__auto____1;
return cljs$core$async$state_machine__47855__auto__;
})()
})();
var state__47927__auto__ = (function (){var statearr_49403 = f__47926__auto__();
(statearr_49403[(6)] = c__47925__auto___50159);

return statearr_49403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47927__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
