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
cljs.core.async.t_cljs$core$async32539 = (function (f,blockable,meta32540){
this.f = f;
this.blockable = blockable;
this.meta32540 = meta32540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32541,meta32540__$1){
var self__ = this;
var _32541__$1 = this;
return (new cljs.core.async.t_cljs$core$async32539(self__.f,self__.blockable,meta32540__$1));
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32541){
var self__ = this;
var _32541__$1 = this;
return self__.meta32540;
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32540","meta32540",811770471,null)], null);
}));

(cljs.core.async.t_cljs$core$async32539.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32539");

(cljs.core.async.t_cljs$core$async32539.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32539");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32539.
 */
cljs.core.async.__GT_t_cljs$core$async32539 = (function cljs$core$async$__GT_t_cljs$core$async32539(f,blockable,meta32540){
return (new cljs.core.async.t_cljs$core$async32539(f,blockable,meta32540));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32538 = arguments.length;
switch (G__32538) {
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
return (new cljs.core.async.t_cljs$core$async32539(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32550 = arguments.length;
switch (G__32550) {
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
var G__32552 = arguments.length;
switch (G__32552) {
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
var val_34554 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34554) : fn1.call(null,val_34554));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34554) : fn1.call(null,val_34554));
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
var G__32554 = arguments.length;
switch (G__32554) {
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
var n__5616__auto___34557 = n;
var x_34558 = (0);
while(true){
if((x_34558 < n__5616__auto___34557)){
(a[x_34558] = x_34558);

var G__34559 = (x_34558 + (1));
x_34558 = G__34559;
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
cljs.core.async.t_cljs$core$async32558 = (function (flag,meta32559){
this.flag = flag;
this.meta32559 = meta32559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32560,meta32559__$1){
var self__ = this;
var _32560__$1 = this;
return (new cljs.core.async.t_cljs$core$async32558(self__.flag,meta32559__$1));
}));

(cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32560){
var self__ = this;
var _32560__$1 = this;
return self__.meta32559;
}));

(cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32559","meta32559",-517853816,null)], null);
}));

(cljs.core.async.t_cljs$core$async32558.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32558");

(cljs.core.async.t_cljs$core$async32558.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32558");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32558.
 */
cljs.core.async.__GT_t_cljs$core$async32558 = (function cljs$core$async$__GT_t_cljs$core$async32558(flag,meta32559){
return (new cljs.core.async.t_cljs$core$async32558(flag,meta32559));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32558(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32578 = (function (flag,cb,meta32579){
this.flag = flag;
this.cb = cb;
this.meta32579 = meta32579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32580,meta32579__$1){
var self__ = this;
var _32580__$1 = this;
return (new cljs.core.async.t_cljs$core$async32578(self__.flag,self__.cb,meta32579__$1));
}));

(cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32580){
var self__ = this;
var _32580__$1 = this;
return self__.meta32579;
}));

(cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32579","meta32579",1366694653,null)], null);
}));

(cljs.core.async.t_cljs$core$async32578.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32578");

(cljs.core.async.t_cljs$core$async32578.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32578");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32578.
 */
cljs.core.async.__GT_t_cljs$core$async32578 = (function cljs$core$async$__GT_t_cljs$core$async32578(flag,cb,meta32579){
return (new cljs.core.async.t_cljs$core$async32578(flag,cb,meta32579));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32578(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_34562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34562)){
if((!(((port_34562.cljs$core$IFn$_invoke$arity$1 ? port_34562.cljs$core$IFn$_invoke$arity$1((1)) : port_34562.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34564 = (i + (1));
i = G__34564;
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
return (function (p1__32586_SHARP_){
var G__32588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32586_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32588) : fret.call(null,G__32588));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__32587_SHARP_){
var G__32589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32587_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32589) : fret.call(null,G__32589));
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
var G__34577 = (i + (1));
i = G__34577;
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
var len__5749__auto___34578 = arguments.length;
var i__5750__auto___34579 = (0);
while(true){
if((i__5750__auto___34579 < len__5749__auto___34578)){
args__5755__auto__.push((arguments[i__5750__auto___34579]));

var G__34580 = (i__5750__auto___34579 + (1));
i__5750__auto___34579 = G__34580;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32592){
var map__32593 = p__32592;
var map__32593__$1 = cljs.core.__destructure_map(map__32593);
var opts = map__32593__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32590){
var G__32591 = cljs.core.first(seq32590);
var seq32590__$1 = cljs.core.next(seq32590);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32591,seq32590__$1);
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
var G__32595 = arguments.length;
switch (G__32595) {
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
var c__32476__auto___34582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_32624){
var state_val_32634 = (state_32624[(1)]);
if((state_val_32634 === (7))){
var inst_32616 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32646_34583 = state_32624__$1;
(statearr_32646_34583[(2)] = inst_32616);

(statearr_32646_34583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32634 === (1))){
var state_32624__$1 = state_32624;
var statearr_32649_34584 = state_32624__$1;
(statearr_32649_34584[(2)] = null);

(statearr_32649_34584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32634 === (4))){
var inst_32599 = (state_32624[(7)]);
var inst_32599__$1 = (state_32624[(2)]);
var inst_32600 = (inst_32599__$1 == null);
var state_32624__$1 = (function (){var statearr_32650 = state_32624;
(statearr_32650[(7)] = inst_32599__$1);

return statearr_32650;
})();
if(cljs.core.truth_(inst_32600)){
var statearr_32651_34586 = state_32624__$1;
(statearr_32651_34586[(1)] = (5));

} else {
var statearr_32652_34587 = state_32624__$1;
(statearr_32652_34587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32634 === (13))){
var state_32624__$1 = state_32624;
var statearr_32653_34588 = state_32624__$1;
(statearr_32653_34588[(2)] = null);

(statearr_32653_34588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32634 === (6))){
var inst_32599 = (state_32624[(7)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32624__$1,(11),to,inst_32599);
} else {
if((state_val_32634 === (3))){
var inst_32618 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32624__$1,inst_32618);
} else {
if((state_val_32634 === (12))){
var state_32624__$1 = state_32624;
var statearr_32675_34590 = state_32624__$1;
(statearr_32675_34590[(2)] = null);

(statearr_32675_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32634 === (2))){
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32624__$1,(4),from);
} else {
if((state_val_32634 === (11))){
var inst_32609 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
if(cljs.core.truth_(inst_32609)){
var statearr_32680_34591 = state_32624__$1;
(statearr_32680_34591[(1)] = (12));

} else {
var statearr_32686_34592 = state_32624__$1;
(statearr_32686_34592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32634 === (9))){
var state_32624__$1 = state_32624;
var statearr_32695_34593 = state_32624__$1;
(statearr_32695_34593[(2)] = null);

(statearr_32695_34593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32634 === (5))){
var state_32624__$1 = state_32624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32700_34594 = state_32624__$1;
(statearr_32700_34594[(1)] = (8));

} else {
var statearr_32701_34595 = state_32624__$1;
(statearr_32701_34595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32634 === (14))){
var inst_32614 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32706_34597 = state_32624__$1;
(statearr_32706_34597[(2)] = inst_32614);

(statearr_32706_34597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32634 === (10))){
var inst_32606 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32713_34599 = state_32624__$1;
(statearr_32713_34599[(2)] = inst_32606);

(statearr_32713_34599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32634 === (8))){
var inst_32603 = cljs.core.async.close_BANG_(to);
var state_32624__$1 = state_32624;
var statearr_32725_34600 = state_32624__$1;
(statearr_32725_34600[(2)] = inst_32603);

(statearr_32725_34600[(1)] = (10));


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
var cljs$core$async$state_machine__32396__auto__ = null;
var cljs$core$async$state_machine__32396__auto____0 = (function (){
var statearr_32726 = [null,null,null,null,null,null,null,null];
(statearr_32726[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_32726[(1)] = (1));

return statearr_32726;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_32624){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32624);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32727){var ex__32399__auto__ = e32727;
var statearr_32728_34601 = state_32624;
(statearr_32728_34601[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32624[(4)]))){
var statearr_32729_34602 = state_32624;
(statearr_32729_34602[(1)] = cljs.core.first((state_32624[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34603 = state_32624;
state_32624 = G__34603;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_32624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_32624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_32730 = f__32477__auto__();
(statearr_32730[(6)] = c__32476__auto___34582);

return statearr_32730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
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
var process__$1 = (function (p__32732){
var vec__32733 = p__32732;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32733,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32733,(1),null);
var job = vec__32733;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32476__auto___34608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_32748){
var state_val_32753 = (state_32748[(1)]);
if((state_val_32753 === (1))){
var state_32748__$1 = state_32748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32748__$1,(2),res,v);
} else {
if((state_val_32753 === (2))){
var inst_32745 = (state_32748[(2)]);
var inst_32746 = cljs.core.async.close_BANG_(res);
var state_32748__$1 = (function (){var statearr_32754 = state_32748;
(statearr_32754[(7)] = inst_32745);

return statearr_32754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32748__$1,inst_32746);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0 = (function (){
var statearr_32756 = [null,null,null,null,null,null,null,null];
(statearr_32756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__);

(statearr_32756[(1)] = (1));

return statearr_32756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1 = (function (state_32748){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32748);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32757){var ex__32399__auto__ = e32757;
var statearr_32758_34611 = state_32748;
(statearr_32758_34611[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32748[(4)]))){
var statearr_32759_34613 = state_32748;
(statearr_32759_34613[(1)] = cljs.core.first((state_32748[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34614 = state_32748;
state_32748 = G__34614;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = function(state_32748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1.call(this,state_32748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_32760 = f__32477__auto__();
(statearr_32760[(6)] = c__32476__auto___34608);

return statearr_32760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32761){
var vec__32762 = p__32761;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762,(1),null);
var job = vec__32762;
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
var n__5616__auto___34619 = n;
var __34620 = (0);
while(true){
if((__34620 < n__5616__auto___34619)){
var G__32765_34621 = type;
var G__32765_34622__$1 = (((G__32765_34621 instanceof cljs.core.Keyword))?G__32765_34621.fqn:null);
switch (G__32765_34622__$1) {
case "compute":
var c__32476__auto___34625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34620,c__32476__auto___34625,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async){
return (function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = ((function (__34620,c__32476__auto___34625,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async){
return (function (state_32778){
var state_val_32779 = (state_32778[(1)]);
if((state_val_32779 === (1))){
var state_32778__$1 = state_32778;
var statearr_32780_34628 = state_32778__$1;
(statearr_32780_34628[(2)] = null);

(statearr_32780_34628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (2))){
var state_32778__$1 = state_32778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32778__$1,(4),jobs);
} else {
if((state_val_32779 === (3))){
var inst_32776 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32778__$1,inst_32776);
} else {
if((state_val_32779 === (4))){
var inst_32768 = (state_32778[(2)]);
var inst_32769 = process__$1(inst_32768);
var state_32778__$1 = state_32778;
if(cljs.core.truth_(inst_32769)){
var statearr_32781_34639 = state_32778__$1;
(statearr_32781_34639[(1)] = (5));

} else {
var statearr_32782_34640 = state_32778__$1;
(statearr_32782_34640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (5))){
var state_32778__$1 = state_32778;
var statearr_32783_34641 = state_32778__$1;
(statearr_32783_34641[(2)] = null);

(statearr_32783_34641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (6))){
var state_32778__$1 = state_32778;
var statearr_32784_34643 = state_32778__$1;
(statearr_32784_34643[(2)] = null);

(statearr_32784_34643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (7))){
var inst_32774 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
var statearr_32785_34644 = state_32778__$1;
(statearr_32785_34644[(2)] = inst_32774);

(statearr_32785_34644[(1)] = (3));


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
});})(__34620,c__32476__auto___34625,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async))
;
return ((function (__34620,switch__32395__auto__,c__32476__auto___34625,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0 = (function (){
var statearr_32786 = [null,null,null,null,null,null,null];
(statearr_32786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__);

(statearr_32786[(1)] = (1));

return statearr_32786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1 = (function (state_32778){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32778);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32787){var ex__32399__auto__ = e32787;
var statearr_32788_34645 = state_32778;
(statearr_32788_34645[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32778[(4)]))){
var statearr_32789_34646 = state_32778;
(statearr_32789_34646[(1)] = cljs.core.first((state_32778[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34647 = state_32778;
state_32778 = G__34647;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = function(state_32778){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1.call(this,state_32778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__;
})()
;})(__34620,switch__32395__auto__,c__32476__auto___34625,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async))
})();
var state__32478__auto__ = (function (){var statearr_32790 = f__32477__auto__();
(statearr_32790[(6)] = c__32476__auto___34625);

return statearr_32790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
});})(__34620,c__32476__auto___34625,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async))
);


break;
case "async":
var c__32476__auto___34648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34620,c__32476__auto___34648,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async){
return (function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = ((function (__34620,c__32476__auto___34648,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async){
return (function (state_32803){
var state_val_32804 = (state_32803[(1)]);
if((state_val_32804 === (1))){
var state_32803__$1 = state_32803;
var statearr_32805_34649 = state_32803__$1;
(statearr_32805_34649[(2)] = null);

(statearr_32805_34649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (2))){
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32803__$1,(4),jobs);
} else {
if((state_val_32804 === (3))){
var inst_32801 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32803__$1,inst_32801);
} else {
if((state_val_32804 === (4))){
var inst_32793 = (state_32803[(2)]);
var inst_32794 = async(inst_32793);
var state_32803__$1 = state_32803;
if(cljs.core.truth_(inst_32794)){
var statearr_32806_34651 = state_32803__$1;
(statearr_32806_34651[(1)] = (5));

} else {
var statearr_32807_34652 = state_32803__$1;
(statearr_32807_34652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (5))){
var state_32803__$1 = state_32803;
var statearr_32808_34653 = state_32803__$1;
(statearr_32808_34653[(2)] = null);

(statearr_32808_34653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (6))){
var state_32803__$1 = state_32803;
var statearr_32809_34655 = state_32803__$1;
(statearr_32809_34655[(2)] = null);

(statearr_32809_34655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (7))){
var inst_32799 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32810_34656 = state_32803__$1;
(statearr_32810_34656[(2)] = inst_32799);

(statearr_32810_34656[(1)] = (3));


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
});})(__34620,c__32476__auto___34648,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async))
;
return ((function (__34620,switch__32395__auto__,c__32476__auto___34648,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0 = (function (){
var statearr_32811 = [null,null,null,null,null,null,null];
(statearr_32811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__);

(statearr_32811[(1)] = (1));

return statearr_32811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1 = (function (state_32803){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32803);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32812){var ex__32399__auto__ = e32812;
var statearr_32813_34657 = state_32803;
(statearr_32813_34657[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32803[(4)]))){
var statearr_32814_34658 = state_32803;
(statearr_32814_34658[(1)] = cljs.core.first((state_32803[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34659 = state_32803;
state_32803 = G__34659;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = function(state_32803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1.call(this,state_32803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__;
})()
;})(__34620,switch__32395__auto__,c__32476__auto___34648,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async))
})();
var state__32478__auto__ = (function (){var statearr_32815 = f__32477__auto__();
(statearr_32815[(6)] = c__32476__auto___34648);

return statearr_32815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
});})(__34620,c__32476__auto___34648,G__32765_34621,G__32765_34622__$1,n__5616__auto___34619,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32765_34622__$1)].join('')));

}

var G__34661 = (__34620 + (1));
__34620 = G__34661;
continue;
} else {
}
break;
}

var c__32476__auto___34662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_32837){
var state_val_32838 = (state_32837[(1)]);
if((state_val_32838 === (7))){
var inst_32833 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
var statearr_32839_34663 = state_32837__$1;
(statearr_32839_34663[(2)] = inst_32833);

(statearr_32839_34663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (1))){
var state_32837__$1 = state_32837;
var statearr_32840_34664 = state_32837__$1;
(statearr_32840_34664[(2)] = null);

(statearr_32840_34664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (4))){
var inst_32818 = (state_32837[(7)]);
var inst_32818__$1 = (state_32837[(2)]);
var inst_32819 = (inst_32818__$1 == null);
var state_32837__$1 = (function (){var statearr_32841 = state_32837;
(statearr_32841[(7)] = inst_32818__$1);

return statearr_32841;
})();
if(cljs.core.truth_(inst_32819)){
var statearr_32842_34665 = state_32837__$1;
(statearr_32842_34665[(1)] = (5));

} else {
var statearr_32843_34666 = state_32837__$1;
(statearr_32843_34666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (6))){
var inst_32818 = (state_32837[(7)]);
var inst_32823 = (state_32837[(8)]);
var inst_32823__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32824 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32825 = [inst_32818,inst_32823__$1];
var inst_32826 = (new cljs.core.PersistentVector(null,2,(5),inst_32824,inst_32825,null));
var state_32837__$1 = (function (){var statearr_32844 = state_32837;
(statearr_32844[(8)] = inst_32823__$1);

return statearr_32844;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32837__$1,(8),jobs,inst_32826);
} else {
if((state_val_32838 === (3))){
var inst_32835 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32837__$1,inst_32835);
} else {
if((state_val_32838 === (2))){
var state_32837__$1 = state_32837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32837__$1,(4),from);
} else {
if((state_val_32838 === (9))){
var inst_32830 = (state_32837[(2)]);
var state_32837__$1 = (function (){var statearr_32845 = state_32837;
(statearr_32845[(9)] = inst_32830);

return statearr_32845;
})();
var statearr_32846_34669 = state_32837__$1;
(statearr_32846_34669[(2)] = null);

(statearr_32846_34669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (5))){
var inst_32821 = cljs.core.async.close_BANG_(jobs);
var state_32837__$1 = state_32837;
var statearr_32847_34670 = state_32837__$1;
(statearr_32847_34670[(2)] = inst_32821);

(statearr_32847_34670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (8))){
var inst_32823 = (state_32837[(8)]);
var inst_32828 = (state_32837[(2)]);
var state_32837__$1 = (function (){var statearr_32848 = state_32837;
(statearr_32848[(10)] = inst_32828);

return statearr_32848;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32837__$1,(9),results,inst_32823);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0 = (function (){
var statearr_32849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__);

(statearr_32849[(1)] = (1));

return statearr_32849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1 = (function (state_32837){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32837);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32850){var ex__32399__auto__ = e32850;
var statearr_32851_34671 = state_32837;
(statearr_32851_34671[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32837[(4)]))){
var statearr_32852_34672 = state_32837;
(statearr_32852_34672[(1)] = cljs.core.first((state_32837[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34673 = state_32837;
state_32837 = G__34673;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = function(state_32837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1.call(this,state_32837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_32853 = f__32477__auto__();
(statearr_32853[(6)] = c__32476__auto___34662);

return statearr_32853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));


var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_32891){
var state_val_32892 = (state_32891[(1)]);
if((state_val_32892 === (7))){
var inst_32887 = (state_32891[(2)]);
var state_32891__$1 = state_32891;
var statearr_32893_34674 = state_32891__$1;
(statearr_32893_34674[(2)] = inst_32887);

(statearr_32893_34674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (20))){
var state_32891__$1 = state_32891;
var statearr_32894_34675 = state_32891__$1;
(statearr_32894_34675[(2)] = null);

(statearr_32894_34675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (1))){
var state_32891__$1 = state_32891;
var statearr_32895_34676 = state_32891__$1;
(statearr_32895_34676[(2)] = null);

(statearr_32895_34676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (4))){
var inst_32856 = (state_32891[(7)]);
var inst_32856__$1 = (state_32891[(2)]);
var inst_32857 = (inst_32856__$1 == null);
var state_32891__$1 = (function (){var statearr_32896 = state_32891;
(statearr_32896[(7)] = inst_32856__$1);

return statearr_32896;
})();
if(cljs.core.truth_(inst_32857)){
var statearr_32897_34677 = state_32891__$1;
(statearr_32897_34677[(1)] = (5));

} else {
var statearr_32898_34678 = state_32891__$1;
(statearr_32898_34678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (15))){
var inst_32869 = (state_32891[(8)]);
var state_32891__$1 = state_32891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32891__$1,(18),to,inst_32869);
} else {
if((state_val_32892 === (21))){
var inst_32882 = (state_32891[(2)]);
var state_32891__$1 = state_32891;
var statearr_32899_34679 = state_32891__$1;
(statearr_32899_34679[(2)] = inst_32882);

(statearr_32899_34679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (13))){
var inst_32884 = (state_32891[(2)]);
var state_32891__$1 = (function (){var statearr_32900 = state_32891;
(statearr_32900[(9)] = inst_32884);

return statearr_32900;
})();
var statearr_32901_34680 = state_32891__$1;
(statearr_32901_34680[(2)] = null);

(statearr_32901_34680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (6))){
var inst_32856 = (state_32891[(7)]);
var state_32891__$1 = state_32891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32891__$1,(11),inst_32856);
} else {
if((state_val_32892 === (17))){
var inst_32877 = (state_32891[(2)]);
var state_32891__$1 = state_32891;
if(cljs.core.truth_(inst_32877)){
var statearr_32902_34681 = state_32891__$1;
(statearr_32902_34681[(1)] = (19));

} else {
var statearr_32903_34682 = state_32891__$1;
(statearr_32903_34682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (3))){
var inst_32889 = (state_32891[(2)]);
var state_32891__$1 = state_32891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32891__$1,inst_32889);
} else {
if((state_val_32892 === (12))){
var inst_32866 = (state_32891[(10)]);
var state_32891__$1 = state_32891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32891__$1,(14),inst_32866);
} else {
if((state_val_32892 === (2))){
var state_32891__$1 = state_32891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32891__$1,(4),results);
} else {
if((state_val_32892 === (19))){
var state_32891__$1 = state_32891;
var statearr_32904_34683 = state_32891__$1;
(statearr_32904_34683[(2)] = null);

(statearr_32904_34683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (11))){
var inst_32866 = (state_32891[(2)]);
var state_32891__$1 = (function (){var statearr_32905 = state_32891;
(statearr_32905[(10)] = inst_32866);

return statearr_32905;
})();
var statearr_32906_34684 = state_32891__$1;
(statearr_32906_34684[(2)] = null);

(statearr_32906_34684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (9))){
var state_32891__$1 = state_32891;
var statearr_32907_34685 = state_32891__$1;
(statearr_32907_34685[(2)] = null);

(statearr_32907_34685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (5))){
var state_32891__$1 = state_32891;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32908_34686 = state_32891__$1;
(statearr_32908_34686[(1)] = (8));

} else {
var statearr_32909_34687 = state_32891__$1;
(statearr_32909_34687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (14))){
var inst_32869 = (state_32891[(8)]);
var inst_32871 = (state_32891[(11)]);
var inst_32869__$1 = (state_32891[(2)]);
var inst_32870 = (inst_32869__$1 == null);
var inst_32871__$1 = cljs.core.not(inst_32870);
var state_32891__$1 = (function (){var statearr_32910 = state_32891;
(statearr_32910[(8)] = inst_32869__$1);

(statearr_32910[(11)] = inst_32871__$1);

return statearr_32910;
})();
if(inst_32871__$1){
var statearr_32911_34688 = state_32891__$1;
(statearr_32911_34688[(1)] = (15));

} else {
var statearr_32912_34689 = state_32891__$1;
(statearr_32912_34689[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (16))){
var inst_32871 = (state_32891[(11)]);
var state_32891__$1 = state_32891;
var statearr_32913_34690 = state_32891__$1;
(statearr_32913_34690[(2)] = inst_32871);

(statearr_32913_34690[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (10))){
var inst_32863 = (state_32891[(2)]);
var state_32891__$1 = state_32891;
var statearr_32914_34691 = state_32891__$1;
(statearr_32914_34691[(2)] = inst_32863);

(statearr_32914_34691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (18))){
var inst_32874 = (state_32891[(2)]);
var state_32891__$1 = state_32891;
var statearr_32915_34692 = state_32891__$1;
(statearr_32915_34692[(2)] = inst_32874);

(statearr_32915_34692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32892 === (8))){
var inst_32860 = cljs.core.async.close_BANG_(to);
var state_32891__$1 = state_32891;
var statearr_32916_34693 = state_32891__$1;
(statearr_32916_34693[(2)] = inst_32860);

(statearr_32916_34693[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0 = (function (){
var statearr_32917 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__);

(statearr_32917[(1)] = (1));

return statearr_32917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1 = (function (state_32891){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32891);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32918){var ex__32399__auto__ = e32918;
var statearr_32919_34694 = state_32891;
(statearr_32919_34694[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32891[(4)]))){
var statearr_32920_34695 = state_32891;
(statearr_32920_34695[(1)] = cljs.core.first((state_32891[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34696 = state_32891;
state_32891 = G__34696;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = function(state_32891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1.call(this,state_32891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_32921 = f__32477__auto__();
(statearr_32921[(6)] = c__32476__auto__);

return statearr_32921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
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
var G__32923 = arguments.length;
switch (G__32923) {
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
var G__32928 = arguments.length;
switch (G__32928) {
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
var G__32930 = arguments.length;
switch (G__32930) {
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
var c__32476__auto___34705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_32959){
var state_val_32960 = (state_32959[(1)]);
if((state_val_32960 === (7))){
var inst_32955 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
var statearr_32962_34708 = state_32959__$1;
(statearr_32962_34708[(2)] = inst_32955);

(statearr_32962_34708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (1))){
var state_32959__$1 = state_32959;
var statearr_32963_34709 = state_32959__$1;
(statearr_32963_34709[(2)] = null);

(statearr_32963_34709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (4))){
var inst_32936 = (state_32959[(7)]);
var inst_32936__$1 = (state_32959[(2)]);
var inst_32937 = (inst_32936__$1 == null);
var state_32959__$1 = (function (){var statearr_32968 = state_32959;
(statearr_32968[(7)] = inst_32936__$1);

return statearr_32968;
})();
if(cljs.core.truth_(inst_32937)){
var statearr_32969_34711 = state_32959__$1;
(statearr_32969_34711[(1)] = (5));

} else {
var statearr_32970_34712 = state_32959__$1;
(statearr_32970_34712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (13))){
var state_32959__$1 = state_32959;
var statearr_32971_34714 = state_32959__$1;
(statearr_32971_34714[(2)] = null);

(statearr_32971_34714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (6))){
var inst_32936 = (state_32959[(7)]);
var inst_32942 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32936) : p.call(null,inst_32936));
var state_32959__$1 = state_32959;
if(cljs.core.truth_(inst_32942)){
var statearr_32972_34715 = state_32959__$1;
(statearr_32972_34715[(1)] = (9));

} else {
var statearr_32974_34716 = state_32959__$1;
(statearr_32974_34716[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (3))){
var inst_32957 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32959__$1,inst_32957);
} else {
if((state_val_32960 === (12))){
var state_32959__$1 = state_32959;
var statearr_32978_34718 = state_32959__$1;
(statearr_32978_34718[(2)] = null);

(statearr_32978_34718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (2))){
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32959__$1,(4),ch);
} else {
if((state_val_32960 === (11))){
var inst_32936 = (state_32959[(7)]);
var inst_32946 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32959__$1,(8),inst_32946,inst_32936);
} else {
if((state_val_32960 === (9))){
var state_32959__$1 = state_32959;
var statearr_32982_34720 = state_32959__$1;
(statearr_32982_34720[(2)] = tc);

(statearr_32982_34720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (5))){
var inst_32939 = cljs.core.async.close_BANG_(tc);
var inst_32940 = cljs.core.async.close_BANG_(fc);
var state_32959__$1 = (function (){var statearr_32983 = state_32959;
(statearr_32983[(8)] = inst_32939);

return statearr_32983;
})();
var statearr_32984_34723 = state_32959__$1;
(statearr_32984_34723[(2)] = inst_32940);

(statearr_32984_34723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (14))){
var inst_32953 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
var statearr_32985_34724 = state_32959__$1;
(statearr_32985_34724[(2)] = inst_32953);

(statearr_32985_34724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (10))){
var state_32959__$1 = state_32959;
var statearr_32986_34726 = state_32959__$1;
(statearr_32986_34726[(2)] = fc);

(statearr_32986_34726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32960 === (8))){
var inst_32948 = (state_32959[(2)]);
var state_32959__$1 = state_32959;
if(cljs.core.truth_(inst_32948)){
var statearr_32987_34728 = state_32959__$1;
(statearr_32987_34728[(1)] = (12));

} else {
var statearr_32988_34729 = state_32959__$1;
(statearr_32988_34729[(1)] = (13));

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
var cljs$core$async$state_machine__32396__auto__ = null;
var cljs$core$async$state_machine__32396__auto____0 = (function (){
var statearr_32989 = [null,null,null,null,null,null,null,null,null];
(statearr_32989[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_32989[(1)] = (1));

return statearr_32989;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_32959){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32959);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32990){var ex__32399__auto__ = e32990;
var statearr_32991_34733 = state_32959;
(statearr_32991_34733[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32959[(4)]))){
var statearr_32994_34735 = state_32959;
(statearr_32994_34735[(1)] = cljs.core.first((state_32959[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34736 = state_32959;
state_32959 = G__34736;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_32959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_32959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_32996 = f__32477__auto__();
(statearr_32996[(6)] = c__32476__auto___34705);

return statearr_32996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
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
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33018){
var state_val_33019 = (state_33018[(1)]);
if((state_val_33019 === (7))){
var inst_33014 = (state_33018[(2)]);
var state_33018__$1 = state_33018;
var statearr_33020_34739 = state_33018__$1;
(statearr_33020_34739[(2)] = inst_33014);

(statearr_33020_34739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33019 === (1))){
var inst_32997 = init;
var inst_32998 = inst_32997;
var state_33018__$1 = (function (){var statearr_33021 = state_33018;
(statearr_33021[(7)] = inst_32998);

return statearr_33021;
})();
var statearr_33022_34742 = state_33018__$1;
(statearr_33022_34742[(2)] = null);

(statearr_33022_34742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33019 === (4))){
var inst_33001 = (state_33018[(8)]);
var inst_33001__$1 = (state_33018[(2)]);
var inst_33002 = (inst_33001__$1 == null);
var state_33018__$1 = (function (){var statearr_33023 = state_33018;
(statearr_33023[(8)] = inst_33001__$1);

return statearr_33023;
})();
if(cljs.core.truth_(inst_33002)){
var statearr_33024_34745 = state_33018__$1;
(statearr_33024_34745[(1)] = (5));

} else {
var statearr_33025_34746 = state_33018__$1;
(statearr_33025_34746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33019 === (6))){
var inst_32998 = (state_33018[(7)]);
var inst_33001 = (state_33018[(8)]);
var inst_33005 = (state_33018[(9)]);
var inst_33005__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32998,inst_33001) : f.call(null,inst_32998,inst_33001));
var inst_33006 = cljs.core.reduced_QMARK_(inst_33005__$1);
var state_33018__$1 = (function (){var statearr_33026 = state_33018;
(statearr_33026[(9)] = inst_33005__$1);

return statearr_33026;
})();
if(inst_33006){
var statearr_33027_34749 = state_33018__$1;
(statearr_33027_34749[(1)] = (8));

} else {
var statearr_33028_34750 = state_33018__$1;
(statearr_33028_34750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33019 === (3))){
var inst_33016 = (state_33018[(2)]);
var state_33018__$1 = state_33018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33018__$1,inst_33016);
} else {
if((state_val_33019 === (2))){
var state_33018__$1 = state_33018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33018__$1,(4),ch);
} else {
if((state_val_33019 === (9))){
var inst_33005 = (state_33018[(9)]);
var inst_32998 = inst_33005;
var state_33018__$1 = (function (){var statearr_33029 = state_33018;
(statearr_33029[(7)] = inst_32998);

return statearr_33029;
})();
var statearr_33030_34754 = state_33018__$1;
(statearr_33030_34754[(2)] = null);

(statearr_33030_34754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33019 === (5))){
var inst_32998 = (state_33018[(7)]);
var state_33018__$1 = state_33018;
var statearr_33031_34756 = state_33018__$1;
(statearr_33031_34756[(2)] = inst_32998);

(statearr_33031_34756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33019 === (10))){
var inst_33012 = (state_33018[(2)]);
var state_33018__$1 = state_33018;
var statearr_33032_34759 = state_33018__$1;
(statearr_33032_34759[(2)] = inst_33012);

(statearr_33032_34759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33019 === (8))){
var inst_33005 = (state_33018[(9)]);
var inst_33008 = cljs.core.deref(inst_33005);
var state_33018__$1 = state_33018;
var statearr_33033_34761 = state_33018__$1;
(statearr_33033_34761[(2)] = inst_33008);

(statearr_33033_34761[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32396__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32396__auto____0 = (function (){
var statearr_33034 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33034[(0)] = cljs$core$async$reduce_$_state_machine__32396__auto__);

(statearr_33034[(1)] = (1));

return statearr_33034;
});
var cljs$core$async$reduce_$_state_machine__32396__auto____1 = (function (state_33018){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33018);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33035){var ex__32399__auto__ = e33035;
var statearr_33036_34765 = state_33018;
(statearr_33036_34765[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33018[(4)]))){
var statearr_33037_34767 = state_33018;
(statearr_33037_34767[(1)] = cljs.core.first((state_33018[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34769 = state_33018;
state_33018 = G__34769;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32396__auto__ = function(state_33018){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32396__auto____1.call(this,state_33018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32396__auto____0;
cljs$core$async$reduce_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32396__auto____1;
return cljs$core$async$reduce_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33038 = f__32477__auto__();
(statearr_33038[(6)] = c__32476__auto__);

return statearr_33038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33044){
var state_val_33045 = (state_33044[(1)]);
if((state_val_33045 === (1))){
var inst_33039 = cljs.core.async.reduce(f__$1,init,ch);
var state_33044__$1 = state_33044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33044__$1,(2),inst_33039);
} else {
if((state_val_33045 === (2))){
var inst_33041 = (state_33044[(2)]);
var inst_33042 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33041) : f__$1.call(null,inst_33041));
var state_33044__$1 = state_33044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33044__$1,inst_33042);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32396__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32396__auto____0 = (function (){
var statearr_33046 = [null,null,null,null,null,null,null];
(statearr_33046[(0)] = cljs$core$async$transduce_$_state_machine__32396__auto__);

(statearr_33046[(1)] = (1));

return statearr_33046;
});
var cljs$core$async$transduce_$_state_machine__32396__auto____1 = (function (state_33044){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33044);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33047){var ex__32399__auto__ = e33047;
var statearr_33048_34775 = state_33044;
(statearr_33048_34775[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33044[(4)]))){
var statearr_33049_34776 = state_33044;
(statearr_33049_34776[(1)] = cljs.core.first((state_33044[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34777 = state_33044;
state_33044 = G__34777;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32396__auto__ = function(state_33044){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32396__auto____1.call(this,state_33044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32396__auto____0;
cljs$core$async$transduce_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32396__auto____1;
return cljs$core$async$transduce_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33050 = f__32477__auto__();
(statearr_33050[(6)] = c__32476__auto__);

return statearr_33050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
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
var G__33052 = arguments.length;
switch (G__33052) {
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
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33077){
var state_val_33078 = (state_33077[(1)]);
if((state_val_33078 === (7))){
var inst_33059 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
var statearr_33079_34780 = state_33077__$1;
(statearr_33079_34780[(2)] = inst_33059);

(statearr_33079_34780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (1))){
var inst_33053 = cljs.core.seq(coll);
var inst_33054 = inst_33053;
var state_33077__$1 = (function (){var statearr_33080 = state_33077;
(statearr_33080[(7)] = inst_33054);

return statearr_33080;
})();
var statearr_33081_34783 = state_33077__$1;
(statearr_33081_34783[(2)] = null);

(statearr_33081_34783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (4))){
var inst_33054 = (state_33077[(7)]);
var inst_33057 = cljs.core.first(inst_33054);
var state_33077__$1 = state_33077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33077__$1,(7),ch,inst_33057);
} else {
if((state_val_33078 === (13))){
var inst_33071 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
var statearr_33083_34786 = state_33077__$1;
(statearr_33083_34786[(2)] = inst_33071);

(statearr_33083_34786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (6))){
var inst_33062 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
if(cljs.core.truth_(inst_33062)){
var statearr_33085_34787 = state_33077__$1;
(statearr_33085_34787[(1)] = (8));

} else {
var statearr_33086_34788 = state_33077__$1;
(statearr_33086_34788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (3))){
var inst_33075 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33077__$1,inst_33075);
} else {
if((state_val_33078 === (12))){
var state_33077__$1 = state_33077;
var statearr_33088_34811 = state_33077__$1;
(statearr_33088_34811[(2)] = null);

(statearr_33088_34811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (2))){
var inst_33054 = (state_33077[(7)]);
var state_33077__$1 = state_33077;
if(cljs.core.truth_(inst_33054)){
var statearr_33089_34813 = state_33077__$1;
(statearr_33089_34813[(1)] = (4));

} else {
var statearr_33090_34814 = state_33077__$1;
(statearr_33090_34814[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (11))){
var inst_33068 = cljs.core.async.close_BANG_(ch);
var state_33077__$1 = state_33077;
var statearr_33091_34815 = state_33077__$1;
(statearr_33091_34815[(2)] = inst_33068);

(statearr_33091_34815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (9))){
var state_33077__$1 = state_33077;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33092_34816 = state_33077__$1;
(statearr_33092_34816[(1)] = (11));

} else {
var statearr_33093_34817 = state_33077__$1;
(statearr_33093_34817[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (5))){
var inst_33054 = (state_33077[(7)]);
var state_33077__$1 = state_33077;
var statearr_33094_34818 = state_33077__$1;
(statearr_33094_34818[(2)] = inst_33054);

(statearr_33094_34818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (10))){
var inst_33073 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
var statearr_33095_34819 = state_33077__$1;
(statearr_33095_34819[(2)] = inst_33073);

(statearr_33095_34819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (8))){
var inst_33054 = (state_33077[(7)]);
var inst_33064 = cljs.core.next(inst_33054);
var inst_33054__$1 = inst_33064;
var state_33077__$1 = (function (){var statearr_33096 = state_33077;
(statearr_33096[(7)] = inst_33054__$1);

return statearr_33096;
})();
var statearr_33097_34820 = state_33077__$1;
(statearr_33097_34820[(2)] = null);

(statearr_33097_34820[(1)] = (2));


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
var cljs$core$async$state_machine__32396__auto__ = null;
var cljs$core$async$state_machine__32396__auto____0 = (function (){
var statearr_33098 = [null,null,null,null,null,null,null,null];
(statearr_33098[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_33098[(1)] = (1));

return statearr_33098;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33077){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33077);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33099){var ex__32399__auto__ = e33099;
var statearr_33100_34821 = state_33077;
(statearr_33100_34821[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33077[(4)]))){
var statearr_33101_34822 = state_33077;
(statearr_33101_34822[(1)] = cljs.core.first((state_33077[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34823 = state_33077;
state_33077 = G__34823;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33102 = f__32477__auto__();
(statearr_33102[(6)] = c__32476__auto__);

return statearr_33102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
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
var G__33104 = arguments.length;
switch (G__33104) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34825 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34825(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34826 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34826(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34827 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34827(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34829 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34829(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33105 = (function (ch,cs,meta33106){
this.ch = ch;
this.cs = cs;
this.meta33106 = meta33106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33107,meta33106__$1){
var self__ = this;
var _33107__$1 = this;
return (new cljs.core.async.t_cljs$core$async33105(self__.ch,self__.cs,meta33106__$1));
}));

(cljs.core.async.t_cljs$core$async33105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33107){
var self__ = this;
var _33107__$1 = this;
return self__.meta33106;
}));

(cljs.core.async.t_cljs$core$async33105.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33105.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33105.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33105.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33105.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33106","meta33106",601498730,null)], null);
}));

(cljs.core.async.t_cljs$core$async33105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33105");

(cljs.core.async.t_cljs$core$async33105.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33105.
 */
cljs.core.async.__GT_t_cljs$core$async33105 = (function cljs$core$async$__GT_t_cljs$core$async33105(ch,cs,meta33106){
return (new cljs.core.async.t_cljs$core$async33105(ch,cs,meta33106));
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
var m = (new cljs.core.async.t_cljs$core$async33105(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32476__auto___34833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33264){
var state_val_33265 = (state_33264[(1)]);
if((state_val_33265 === (7))){
var inst_33260 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33266_34835 = state_33264__$1;
(statearr_33266_34835[(2)] = inst_33260);

(statearr_33266_34835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (20))){
var inst_33161 = (state_33264[(7)]);
var inst_33177 = cljs.core.first(inst_33161);
var inst_33178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33177,(0),null);
var inst_33179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33177,(1),null);
var state_33264__$1 = (function (){var statearr_33267 = state_33264;
(statearr_33267[(8)] = inst_33178);

return statearr_33267;
})();
if(cljs.core.truth_(inst_33179)){
var statearr_33268_34836 = state_33264__$1;
(statearr_33268_34836[(1)] = (22));

} else {
var statearr_33269_34837 = state_33264__$1;
(statearr_33269_34837[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (27))){
var inst_33207 = (state_33264[(9)]);
var inst_33209 = (state_33264[(10)]);
var inst_33214 = (state_33264[(11)]);
var inst_33127 = (state_33264[(12)]);
var inst_33214__$1 = cljs.core._nth(inst_33207,inst_33209);
var inst_33215 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33214__$1,inst_33127,done);
var state_33264__$1 = (function (){var statearr_33270 = state_33264;
(statearr_33270[(11)] = inst_33214__$1);

return statearr_33270;
})();
if(cljs.core.truth_(inst_33215)){
var statearr_33271_34838 = state_33264__$1;
(statearr_33271_34838[(1)] = (30));

} else {
var statearr_33272_34839 = state_33264__$1;
(statearr_33272_34839[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (1))){
var state_33264__$1 = state_33264;
var statearr_33273_34840 = state_33264__$1;
(statearr_33273_34840[(2)] = null);

(statearr_33273_34840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (24))){
var inst_33161 = (state_33264[(7)]);
var inst_33184 = (state_33264[(2)]);
var inst_33185 = cljs.core.next(inst_33161);
var inst_33136 = inst_33185;
var inst_33137 = null;
var inst_33138 = (0);
var inst_33139 = (0);
var state_33264__$1 = (function (){var statearr_33274 = state_33264;
(statearr_33274[(13)] = inst_33184);

(statearr_33274[(14)] = inst_33136);

(statearr_33274[(15)] = inst_33137);

(statearr_33274[(16)] = inst_33138);

(statearr_33274[(17)] = inst_33139);

return statearr_33274;
})();
var statearr_33275_34841 = state_33264__$1;
(statearr_33275_34841[(2)] = null);

(statearr_33275_34841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (39))){
var state_33264__$1 = state_33264;
var statearr_33279_34842 = state_33264__$1;
(statearr_33279_34842[(2)] = null);

(statearr_33279_34842[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (4))){
var inst_33127 = (state_33264[(12)]);
var inst_33127__$1 = (state_33264[(2)]);
var inst_33128 = (inst_33127__$1 == null);
var state_33264__$1 = (function (){var statearr_33280 = state_33264;
(statearr_33280[(12)] = inst_33127__$1);

return statearr_33280;
})();
if(cljs.core.truth_(inst_33128)){
var statearr_33281_34843 = state_33264__$1;
(statearr_33281_34843[(1)] = (5));

} else {
var statearr_33282_34844 = state_33264__$1;
(statearr_33282_34844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (15))){
var inst_33139 = (state_33264[(17)]);
var inst_33136 = (state_33264[(14)]);
var inst_33137 = (state_33264[(15)]);
var inst_33138 = (state_33264[(16)]);
var inst_33156 = (state_33264[(2)]);
var inst_33157 = (inst_33139 + (1));
var tmp33276 = inst_33136;
var tmp33277 = inst_33137;
var tmp33278 = inst_33138;
var inst_33136__$1 = tmp33276;
var inst_33137__$1 = tmp33277;
var inst_33138__$1 = tmp33278;
var inst_33139__$1 = inst_33157;
var state_33264__$1 = (function (){var statearr_33283 = state_33264;
(statearr_33283[(18)] = inst_33156);

(statearr_33283[(14)] = inst_33136__$1);

(statearr_33283[(15)] = inst_33137__$1);

(statearr_33283[(16)] = inst_33138__$1);

(statearr_33283[(17)] = inst_33139__$1);

return statearr_33283;
})();
var statearr_33284_34845 = state_33264__$1;
(statearr_33284_34845[(2)] = null);

(statearr_33284_34845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (21))){
var inst_33188 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33288_34846 = state_33264__$1;
(statearr_33288_34846[(2)] = inst_33188);

(statearr_33288_34846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (31))){
var inst_33214 = (state_33264[(11)]);
var inst_33218 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33214);
var state_33264__$1 = state_33264;
var statearr_33289_34847 = state_33264__$1;
(statearr_33289_34847[(2)] = inst_33218);

(statearr_33289_34847[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (32))){
var inst_33209 = (state_33264[(10)]);
var inst_33206 = (state_33264[(19)]);
var inst_33207 = (state_33264[(9)]);
var inst_33208 = (state_33264[(20)]);
var inst_33220 = (state_33264[(2)]);
var inst_33221 = (inst_33209 + (1));
var tmp33285 = inst_33208;
var tmp33286 = inst_33206;
var tmp33287 = inst_33207;
var inst_33206__$1 = tmp33286;
var inst_33207__$1 = tmp33287;
var inst_33208__$1 = tmp33285;
var inst_33209__$1 = inst_33221;
var state_33264__$1 = (function (){var statearr_33290 = state_33264;
(statearr_33290[(21)] = inst_33220);

(statearr_33290[(19)] = inst_33206__$1);

(statearr_33290[(9)] = inst_33207__$1);

(statearr_33290[(20)] = inst_33208__$1);

(statearr_33290[(10)] = inst_33209__$1);

return statearr_33290;
})();
var statearr_33291_34848 = state_33264__$1;
(statearr_33291_34848[(2)] = null);

(statearr_33291_34848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (40))){
var inst_33233 = (state_33264[(22)]);
var inst_33237 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33233);
var state_33264__$1 = state_33264;
var statearr_33292_34849 = state_33264__$1;
(statearr_33292_34849[(2)] = inst_33237);

(statearr_33292_34849[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (33))){
var inst_33224 = (state_33264[(23)]);
var inst_33226 = cljs.core.chunked_seq_QMARK_(inst_33224);
var state_33264__$1 = state_33264;
if(inst_33226){
var statearr_33293_34850 = state_33264__$1;
(statearr_33293_34850[(1)] = (36));

} else {
var statearr_33294_34851 = state_33264__$1;
(statearr_33294_34851[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (13))){
var inst_33150 = (state_33264[(24)]);
var inst_33153 = cljs.core.async.close_BANG_(inst_33150);
var state_33264__$1 = state_33264;
var statearr_33295_34852 = state_33264__$1;
(statearr_33295_34852[(2)] = inst_33153);

(statearr_33295_34852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (22))){
var inst_33178 = (state_33264[(8)]);
var inst_33181 = cljs.core.async.close_BANG_(inst_33178);
var state_33264__$1 = state_33264;
var statearr_33297_34853 = state_33264__$1;
(statearr_33297_34853[(2)] = inst_33181);

(statearr_33297_34853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (36))){
var inst_33224 = (state_33264[(23)]);
var inst_33228 = cljs.core.chunk_first(inst_33224);
var inst_33229 = cljs.core.chunk_rest(inst_33224);
var inst_33230 = cljs.core.count(inst_33228);
var inst_33206 = inst_33229;
var inst_33207 = inst_33228;
var inst_33208 = inst_33230;
var inst_33209 = (0);
var state_33264__$1 = (function (){var statearr_33302 = state_33264;
(statearr_33302[(19)] = inst_33206);

(statearr_33302[(9)] = inst_33207);

(statearr_33302[(20)] = inst_33208);

(statearr_33302[(10)] = inst_33209);

return statearr_33302;
})();
var statearr_33304_34854 = state_33264__$1;
(statearr_33304_34854[(2)] = null);

(statearr_33304_34854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (41))){
var inst_33224 = (state_33264[(23)]);
var inst_33239 = (state_33264[(2)]);
var inst_33240 = cljs.core.next(inst_33224);
var inst_33206 = inst_33240;
var inst_33207 = null;
var inst_33208 = (0);
var inst_33209 = (0);
var state_33264__$1 = (function (){var statearr_33306 = state_33264;
(statearr_33306[(25)] = inst_33239);

(statearr_33306[(19)] = inst_33206);

(statearr_33306[(9)] = inst_33207);

(statearr_33306[(20)] = inst_33208);

(statearr_33306[(10)] = inst_33209);

return statearr_33306;
})();
var statearr_33307_34855 = state_33264__$1;
(statearr_33307_34855[(2)] = null);

(statearr_33307_34855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (43))){
var state_33264__$1 = state_33264;
var statearr_33308_34856 = state_33264__$1;
(statearr_33308_34856[(2)] = null);

(statearr_33308_34856[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (29))){
var inst_33248 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33309_34857 = state_33264__$1;
(statearr_33309_34857[(2)] = inst_33248);

(statearr_33309_34857[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (44))){
var inst_33257 = (state_33264[(2)]);
var state_33264__$1 = (function (){var statearr_33310 = state_33264;
(statearr_33310[(26)] = inst_33257);

return statearr_33310;
})();
var statearr_33311_34858 = state_33264__$1;
(statearr_33311_34858[(2)] = null);

(statearr_33311_34858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (6))){
var inst_33198 = (state_33264[(27)]);
var inst_33197 = cljs.core.deref(cs);
var inst_33198__$1 = cljs.core.keys(inst_33197);
var inst_33199 = cljs.core.count(inst_33198__$1);
var inst_33200 = cljs.core.reset_BANG_(dctr,inst_33199);
var inst_33205 = cljs.core.seq(inst_33198__$1);
var inst_33206 = inst_33205;
var inst_33207 = null;
var inst_33208 = (0);
var inst_33209 = (0);
var state_33264__$1 = (function (){var statearr_33312 = state_33264;
(statearr_33312[(27)] = inst_33198__$1);

(statearr_33312[(28)] = inst_33200);

(statearr_33312[(19)] = inst_33206);

(statearr_33312[(9)] = inst_33207);

(statearr_33312[(20)] = inst_33208);

(statearr_33312[(10)] = inst_33209);

return statearr_33312;
})();
var statearr_33314_34868 = state_33264__$1;
(statearr_33314_34868[(2)] = null);

(statearr_33314_34868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (28))){
var inst_33206 = (state_33264[(19)]);
var inst_33224 = (state_33264[(23)]);
var inst_33224__$1 = cljs.core.seq(inst_33206);
var state_33264__$1 = (function (){var statearr_33316 = state_33264;
(statearr_33316[(23)] = inst_33224__$1);

return statearr_33316;
})();
if(inst_33224__$1){
var statearr_33317_34873 = state_33264__$1;
(statearr_33317_34873[(1)] = (33));

} else {
var statearr_33318_34874 = state_33264__$1;
(statearr_33318_34874[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (25))){
var inst_33209 = (state_33264[(10)]);
var inst_33208 = (state_33264[(20)]);
var inst_33211 = (inst_33209 < inst_33208);
var inst_33212 = inst_33211;
var state_33264__$1 = state_33264;
if(cljs.core.truth_(inst_33212)){
var statearr_33322_34875 = state_33264__$1;
(statearr_33322_34875[(1)] = (27));

} else {
var statearr_33323_34876 = state_33264__$1;
(statearr_33323_34876[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (34))){
var state_33264__$1 = state_33264;
var statearr_33324_34877 = state_33264__$1;
(statearr_33324_34877[(2)] = null);

(statearr_33324_34877[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (17))){
var state_33264__$1 = state_33264;
var statearr_33325_34878 = state_33264__$1;
(statearr_33325_34878[(2)] = null);

(statearr_33325_34878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (3))){
var inst_33262 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33264__$1,inst_33262);
} else {
if((state_val_33265 === (12))){
var inst_33193 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33326_34879 = state_33264__$1;
(statearr_33326_34879[(2)] = inst_33193);

(statearr_33326_34879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (2))){
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33264__$1,(4),ch);
} else {
if((state_val_33265 === (23))){
var state_33264__$1 = state_33264;
var statearr_33327_34880 = state_33264__$1;
(statearr_33327_34880[(2)] = null);

(statearr_33327_34880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (35))){
var inst_33246 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33328_34881 = state_33264__$1;
(statearr_33328_34881[(2)] = inst_33246);

(statearr_33328_34881[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (19))){
var inst_33161 = (state_33264[(7)]);
var inst_33167 = cljs.core.chunk_first(inst_33161);
var inst_33168 = cljs.core.chunk_rest(inst_33161);
var inst_33169 = cljs.core.count(inst_33167);
var inst_33136 = inst_33168;
var inst_33137 = inst_33167;
var inst_33138 = inst_33169;
var inst_33139 = (0);
var state_33264__$1 = (function (){var statearr_33329 = state_33264;
(statearr_33329[(14)] = inst_33136);

(statearr_33329[(15)] = inst_33137);

(statearr_33329[(16)] = inst_33138);

(statearr_33329[(17)] = inst_33139);

return statearr_33329;
})();
var statearr_33330_34883 = state_33264__$1;
(statearr_33330_34883[(2)] = null);

(statearr_33330_34883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (11))){
var inst_33136 = (state_33264[(14)]);
var inst_33161 = (state_33264[(7)]);
var inst_33161__$1 = cljs.core.seq(inst_33136);
var state_33264__$1 = (function (){var statearr_33331 = state_33264;
(statearr_33331[(7)] = inst_33161__$1);

return statearr_33331;
})();
if(inst_33161__$1){
var statearr_33332_34884 = state_33264__$1;
(statearr_33332_34884[(1)] = (16));

} else {
var statearr_33333_34885 = state_33264__$1;
(statearr_33333_34885[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (9))){
var inst_33195 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33334_34886 = state_33264__$1;
(statearr_33334_34886[(2)] = inst_33195);

(statearr_33334_34886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (5))){
var inst_33134 = cljs.core.deref(cs);
var inst_33135 = cljs.core.seq(inst_33134);
var inst_33136 = inst_33135;
var inst_33137 = null;
var inst_33138 = (0);
var inst_33139 = (0);
var state_33264__$1 = (function (){var statearr_33336 = state_33264;
(statearr_33336[(14)] = inst_33136);

(statearr_33336[(15)] = inst_33137);

(statearr_33336[(16)] = inst_33138);

(statearr_33336[(17)] = inst_33139);

return statearr_33336;
})();
var statearr_33337_34887 = state_33264__$1;
(statearr_33337_34887[(2)] = null);

(statearr_33337_34887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (14))){
var state_33264__$1 = state_33264;
var statearr_33338_34889 = state_33264__$1;
(statearr_33338_34889[(2)] = null);

(statearr_33338_34889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (45))){
var inst_33254 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33339_34890 = state_33264__$1;
(statearr_33339_34890[(2)] = inst_33254);

(statearr_33339_34890[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (26))){
var inst_33198 = (state_33264[(27)]);
var inst_33250 = (state_33264[(2)]);
var inst_33251 = cljs.core.seq(inst_33198);
var state_33264__$1 = (function (){var statearr_33340 = state_33264;
(statearr_33340[(29)] = inst_33250);

return statearr_33340;
})();
if(inst_33251){
var statearr_33341_34891 = state_33264__$1;
(statearr_33341_34891[(1)] = (42));

} else {
var statearr_33342_34892 = state_33264__$1;
(statearr_33342_34892[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (16))){
var inst_33161 = (state_33264[(7)]);
var inst_33163 = cljs.core.chunked_seq_QMARK_(inst_33161);
var state_33264__$1 = state_33264;
if(inst_33163){
var statearr_33343_34893 = state_33264__$1;
(statearr_33343_34893[(1)] = (19));

} else {
var statearr_33344_34895 = state_33264__$1;
(statearr_33344_34895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (38))){
var inst_33243 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33345_34896 = state_33264__$1;
(statearr_33345_34896[(2)] = inst_33243);

(statearr_33345_34896[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (30))){
var state_33264__$1 = state_33264;
var statearr_33346_34897 = state_33264__$1;
(statearr_33346_34897[(2)] = null);

(statearr_33346_34897[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (10))){
var inst_33137 = (state_33264[(15)]);
var inst_33139 = (state_33264[(17)]);
var inst_33149 = cljs.core._nth(inst_33137,inst_33139);
var inst_33150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33149,(0),null);
var inst_33151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33149,(1),null);
var state_33264__$1 = (function (){var statearr_33347 = state_33264;
(statearr_33347[(24)] = inst_33150);

return statearr_33347;
})();
if(cljs.core.truth_(inst_33151)){
var statearr_33348_34899 = state_33264__$1;
(statearr_33348_34899[(1)] = (13));

} else {
var statearr_33349_34900 = state_33264__$1;
(statearr_33349_34900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (18))){
var inst_33191 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33350_34901 = state_33264__$1;
(statearr_33350_34901[(2)] = inst_33191);

(statearr_33350_34901[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (42))){
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33264__$1,(45),dchan);
} else {
if((state_val_33265 === (37))){
var inst_33224 = (state_33264[(23)]);
var inst_33233 = (state_33264[(22)]);
var inst_33127 = (state_33264[(12)]);
var inst_33233__$1 = cljs.core.first(inst_33224);
var inst_33234 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33233__$1,inst_33127,done);
var state_33264__$1 = (function (){var statearr_33351 = state_33264;
(statearr_33351[(22)] = inst_33233__$1);

return statearr_33351;
})();
if(cljs.core.truth_(inst_33234)){
var statearr_33352_34903 = state_33264__$1;
(statearr_33352_34903[(1)] = (39));

} else {
var statearr_33353_34904 = state_33264__$1;
(statearr_33353_34904[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (8))){
var inst_33139 = (state_33264[(17)]);
var inst_33138 = (state_33264[(16)]);
var inst_33142 = (inst_33139 < inst_33138);
var inst_33143 = inst_33142;
var state_33264__$1 = state_33264;
if(cljs.core.truth_(inst_33143)){
var statearr_33354_34906 = state_33264__$1;
(statearr_33354_34906[(1)] = (10));

} else {
var statearr_33355_34907 = state_33264__$1;
(statearr_33355_34907[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32396__auto__ = null;
var cljs$core$async$mult_$_state_machine__32396__auto____0 = (function (){
var statearr_33356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33356[(0)] = cljs$core$async$mult_$_state_machine__32396__auto__);

(statearr_33356[(1)] = (1));

return statearr_33356;
});
var cljs$core$async$mult_$_state_machine__32396__auto____1 = (function (state_33264){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33264);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33357){var ex__32399__auto__ = e33357;
var statearr_33358_34908 = state_33264;
(statearr_33358_34908[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33264[(4)]))){
var statearr_33359_34909 = state_33264;
(statearr_33359_34909[(1)] = cljs.core.first((state_33264[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34910 = state_33264;
state_33264 = G__34910;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32396__auto__ = function(state_33264){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32396__auto____1.call(this,state_33264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32396__auto____0;
cljs$core$async$mult_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32396__auto____1;
return cljs$core$async$mult_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33360 = f__32477__auto__();
(statearr_33360[(6)] = c__32476__auto___34833);

return statearr_33360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
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
var G__33362 = arguments.length;
switch (G__33362) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34914 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34914(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34915 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34915(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34916 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34916(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34917 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34917(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34918 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34918(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34920 = arguments.length;
var i__5750__auto___34921 = (0);
while(true){
if((i__5750__auto___34921 < len__5749__auto___34920)){
args__5755__auto__.push((arguments[i__5750__auto___34921]));

var G__34922 = (i__5750__auto___34921 + (1));
i__5750__auto___34921 = G__34922;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33369){
var map__33370 = p__33369;
var map__33370__$1 = cljs.core.__destructure_map(map__33370);
var opts = map__33370__$1;
var statearr_33371_34923 = state;
(statearr_33371_34923[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33372_34924 = state;
(statearr_33372_34924[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33373_34925 = state;
(statearr_33373_34925[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33363){
var G__33364 = cljs.core.first(seq33363);
var seq33363__$1 = cljs.core.next(seq33363);
var G__33365 = cljs.core.first(seq33363__$1);
var seq33363__$2 = cljs.core.next(seq33363__$1);
var G__33366 = cljs.core.first(seq33363__$2);
var seq33363__$3 = cljs.core.next(seq33363__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33364,G__33365,G__33366,seq33363__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33376 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33377){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33377 = meta33377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33378,meta33377__$1){
var self__ = this;
var _33378__$1 = this;
return (new cljs.core.async.t_cljs$core$async33376(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33377__$1));
}));

(cljs.core.async.t_cljs$core$async33376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33378){
var self__ = this;
var _33378__$1 = this;
return self__.meta33377;
}));

(cljs.core.async.t_cljs$core$async33376.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33376.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33376.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33376.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33376.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33376.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33376.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33376.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33377","meta33377",-383595185,null)], null);
}));

(cljs.core.async.t_cljs$core$async33376.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33376");

(cljs.core.async.t_cljs$core$async33376.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33376");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33376.
 */
cljs.core.async.__GT_t_cljs$core$async33376 = (function cljs$core$async$__GT_t_cljs$core$async33376(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33377){
return (new cljs.core.async.t_cljs$core$async33376(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33377));
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
var m = (new cljs.core.async.t_cljs$core$async33376(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32476__auto___34930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33447){
var state_val_33448 = (state_33447[(1)]);
if((state_val_33448 === (7))){
var inst_33407 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
if(cljs.core.truth_(inst_33407)){
var statearr_33451_34931 = state_33447__$1;
(statearr_33451_34931[(1)] = (8));

} else {
var statearr_33452_34932 = state_33447__$1;
(statearr_33452_34932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (20))){
var inst_33400 = (state_33447[(7)]);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33447__$1,(23),out,inst_33400);
} else {
if((state_val_33448 === (1))){
var inst_33383 = calc_state();
var inst_33384 = cljs.core.__destructure_map(inst_33383);
var inst_33385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33384,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33384,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33384,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33388 = inst_33383;
var state_33447__$1 = (function (){var statearr_33455 = state_33447;
(statearr_33455[(8)] = inst_33385);

(statearr_33455[(9)] = inst_33386);

(statearr_33455[(10)] = inst_33387);

(statearr_33455[(11)] = inst_33388);

return statearr_33455;
})();
var statearr_33456_34935 = state_33447__$1;
(statearr_33456_34935[(2)] = null);

(statearr_33456_34935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (24))){
var inst_33391 = (state_33447[(12)]);
var inst_33388 = inst_33391;
var state_33447__$1 = (function (){var statearr_33457 = state_33447;
(statearr_33457[(11)] = inst_33388);

return statearr_33457;
})();
var statearr_33458_34936 = state_33447__$1;
(statearr_33458_34936[(2)] = null);

(statearr_33458_34936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (4))){
var inst_33400 = (state_33447[(7)]);
var inst_33402 = (state_33447[(13)]);
var inst_33399 = (state_33447[(2)]);
var inst_33400__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33399,(0),null);
var inst_33401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33399,(1),null);
var inst_33402__$1 = (inst_33400__$1 == null);
var state_33447__$1 = (function (){var statearr_33459 = state_33447;
(statearr_33459[(7)] = inst_33400__$1);

(statearr_33459[(14)] = inst_33401);

(statearr_33459[(13)] = inst_33402__$1);

return statearr_33459;
})();
if(cljs.core.truth_(inst_33402__$1)){
var statearr_33460_34937 = state_33447__$1;
(statearr_33460_34937[(1)] = (5));

} else {
var statearr_33461_34938 = state_33447__$1;
(statearr_33461_34938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (15))){
var inst_33392 = (state_33447[(15)]);
var inst_33421 = (state_33447[(16)]);
var inst_33421__$1 = cljs.core.empty_QMARK_(inst_33392);
var state_33447__$1 = (function (){var statearr_33462 = state_33447;
(statearr_33462[(16)] = inst_33421__$1);

return statearr_33462;
})();
if(inst_33421__$1){
var statearr_33463_34940 = state_33447__$1;
(statearr_33463_34940[(1)] = (17));

} else {
var statearr_33464_34941 = state_33447__$1;
(statearr_33464_34941[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (21))){
var inst_33391 = (state_33447[(12)]);
var inst_33388 = inst_33391;
var state_33447__$1 = (function (){var statearr_33465 = state_33447;
(statearr_33465[(11)] = inst_33388);

return statearr_33465;
})();
var statearr_33466_34942 = state_33447__$1;
(statearr_33466_34942[(2)] = null);

(statearr_33466_34942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (13))){
var inst_33414 = (state_33447[(2)]);
var inst_33415 = calc_state();
var inst_33388 = inst_33415;
var state_33447__$1 = (function (){var statearr_33467 = state_33447;
(statearr_33467[(17)] = inst_33414);

(statearr_33467[(11)] = inst_33388);

return statearr_33467;
})();
var statearr_33468_34944 = state_33447__$1;
(statearr_33468_34944[(2)] = null);

(statearr_33468_34944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (22))){
var inst_33441 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33469_34945 = state_33447__$1;
(statearr_33469_34945[(2)] = inst_33441);

(statearr_33469_34945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (6))){
var inst_33401 = (state_33447[(14)]);
var inst_33405 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33401,change);
var state_33447__$1 = state_33447;
var statearr_33470_34946 = state_33447__$1;
(statearr_33470_34946[(2)] = inst_33405);

(statearr_33470_34946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (25))){
var state_33447__$1 = state_33447;
var statearr_33471_34947 = state_33447__$1;
(statearr_33471_34947[(2)] = null);

(statearr_33471_34947[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (17))){
var inst_33393 = (state_33447[(18)]);
var inst_33401 = (state_33447[(14)]);
var inst_33423 = (inst_33393.cljs$core$IFn$_invoke$arity$1 ? inst_33393.cljs$core$IFn$_invoke$arity$1(inst_33401) : inst_33393.call(null,inst_33401));
var inst_33424 = cljs.core.not(inst_33423);
var state_33447__$1 = state_33447;
var statearr_33472_34948 = state_33447__$1;
(statearr_33472_34948[(2)] = inst_33424);

(statearr_33472_34948[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (3))){
var inst_33445 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33447__$1,inst_33445);
} else {
if((state_val_33448 === (12))){
var state_33447__$1 = state_33447;
var statearr_33473_34949 = state_33447__$1;
(statearr_33473_34949[(2)] = null);

(statearr_33473_34949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (2))){
var inst_33388 = (state_33447[(11)]);
var inst_33391 = (state_33447[(12)]);
var inst_33391__$1 = cljs.core.__destructure_map(inst_33388);
var inst_33392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33391__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33391__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33391__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33447__$1 = (function (){var statearr_33474 = state_33447;
(statearr_33474[(12)] = inst_33391__$1);

(statearr_33474[(15)] = inst_33392);

(statearr_33474[(18)] = inst_33393);

return statearr_33474;
})();
return cljs.core.async.ioc_alts_BANG_(state_33447__$1,(4),inst_33394);
} else {
if((state_val_33448 === (23))){
var inst_33432 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
if(cljs.core.truth_(inst_33432)){
var statearr_33475_34952 = state_33447__$1;
(statearr_33475_34952[(1)] = (24));

} else {
var statearr_33476_34953 = state_33447__$1;
(statearr_33476_34953[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (19))){
var inst_33427 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33477_34954 = state_33447__$1;
(statearr_33477_34954[(2)] = inst_33427);

(statearr_33477_34954[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (11))){
var inst_33401 = (state_33447[(14)]);
var inst_33411 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33401);
var state_33447__$1 = state_33447;
var statearr_33478_34955 = state_33447__$1;
(statearr_33478_34955[(2)] = inst_33411);

(statearr_33478_34955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (9))){
var inst_33392 = (state_33447[(15)]);
var inst_33401 = (state_33447[(14)]);
var inst_33418 = (state_33447[(19)]);
var inst_33418__$1 = (inst_33392.cljs$core$IFn$_invoke$arity$1 ? inst_33392.cljs$core$IFn$_invoke$arity$1(inst_33401) : inst_33392.call(null,inst_33401));
var state_33447__$1 = (function (){var statearr_33479 = state_33447;
(statearr_33479[(19)] = inst_33418__$1);

return statearr_33479;
})();
if(cljs.core.truth_(inst_33418__$1)){
var statearr_33480_34957 = state_33447__$1;
(statearr_33480_34957[(1)] = (14));

} else {
var statearr_33481_34958 = state_33447__$1;
(statearr_33481_34958[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (5))){
var inst_33402 = (state_33447[(13)]);
var state_33447__$1 = state_33447;
var statearr_33482_34959 = state_33447__$1;
(statearr_33482_34959[(2)] = inst_33402);

(statearr_33482_34959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (14))){
var inst_33418 = (state_33447[(19)]);
var state_33447__$1 = state_33447;
var statearr_33483_34960 = state_33447__$1;
(statearr_33483_34960[(2)] = inst_33418);

(statearr_33483_34960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (26))){
var inst_33437 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33484_34962 = state_33447__$1;
(statearr_33484_34962[(2)] = inst_33437);

(statearr_33484_34962[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (16))){
var inst_33429 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
if(cljs.core.truth_(inst_33429)){
var statearr_33485_34963 = state_33447__$1;
(statearr_33485_34963[(1)] = (20));

} else {
var statearr_33486_34964 = state_33447__$1;
(statearr_33486_34964[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (10))){
var inst_33443 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33487_34965 = state_33447__$1;
(statearr_33487_34965[(2)] = inst_33443);

(statearr_33487_34965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (18))){
var inst_33421 = (state_33447[(16)]);
var state_33447__$1 = state_33447;
var statearr_33488_34966 = state_33447__$1;
(statearr_33488_34966[(2)] = inst_33421);

(statearr_33488_34966[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (8))){
var inst_33400 = (state_33447[(7)]);
var inst_33409 = (inst_33400 == null);
var state_33447__$1 = state_33447;
if(cljs.core.truth_(inst_33409)){
var statearr_33489_34967 = state_33447__$1;
(statearr_33489_34967[(1)] = (11));

} else {
var statearr_33490_34968 = state_33447__$1;
(statearr_33490_34968[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32396__auto__ = null;
var cljs$core$async$mix_$_state_machine__32396__auto____0 = (function (){
var statearr_33491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33491[(0)] = cljs$core$async$mix_$_state_machine__32396__auto__);

(statearr_33491[(1)] = (1));

return statearr_33491;
});
var cljs$core$async$mix_$_state_machine__32396__auto____1 = (function (state_33447){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33447);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33492){var ex__32399__auto__ = e33492;
var statearr_33493_34969 = state_33447;
(statearr_33493_34969[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33447[(4)]))){
var statearr_33494_34970 = state_33447;
(statearr_33494_34970[(1)] = cljs.core.first((state_33447[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34971 = state_33447;
state_33447 = G__34971;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32396__auto__ = function(state_33447){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32396__auto____1.call(this,state_33447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32396__auto____0;
cljs$core$async$mix_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32396__auto____1;
return cljs$core$async$mix_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33495 = f__32477__auto__();
(statearr_33495[(6)] = c__32476__auto___34930);

return statearr_33495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34972 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34972(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34973 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34973(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34974 = (function() {
var G__34975 = null;
var G__34975__1 = (function (p){
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
var G__34975__2 = (function (p,v){
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
G__34975 = function(p,v){
switch(arguments.length){
case 1:
return G__34975__1.call(this,p);
case 2:
return G__34975__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34975.cljs$core$IFn$_invoke$arity$1 = G__34975__1;
G__34975.cljs$core$IFn$_invoke$arity$2 = G__34975__2;
return G__34975;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33497 = arguments.length;
switch (G__33497) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34974(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34974(p,v);
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
cljs.core.async.t_cljs$core$async33509 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33510){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33510 = meta33510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33511,meta33510__$1){
var self__ = this;
var _33511__$1 = this;
return (new cljs.core.async.t_cljs$core$async33509(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33510__$1));
}));

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33511){
var self__ = this;
var _33511__$1 = this;
return self__.meta33510;
}));

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33510","meta33510",-736632437,null)], null);
}));

(cljs.core.async.t_cljs$core$async33509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33509");

(cljs.core.async.t_cljs$core$async33509.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33509.
 */
cljs.core.async.__GT_t_cljs$core$async33509 = (function cljs$core$async$__GT_t_cljs$core$async33509(ch,topic_fn,buf_fn,mults,ensure_mult,meta33510){
return (new cljs.core.async.t_cljs$core$async33509(ch,topic_fn,buf_fn,mults,ensure_mult,meta33510));
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
var G__33502 = arguments.length;
switch (G__33502) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33500_SHARP_){
if(cljs.core.truth_((p1__33500_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33500_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33500_SHARP_.call(null,topic)))){
return p1__33500_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33500_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33509(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32476__auto___34985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33599){
var state_val_33601 = (state_33599[(1)]);
if((state_val_33601 === (7))){
var inst_33595 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33604_34986 = state_33599__$1;
(statearr_33604_34986[(2)] = inst_33595);

(statearr_33604_34986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (20))){
var state_33599__$1 = state_33599;
var statearr_33605_34987 = state_33599__$1;
(statearr_33605_34987[(2)] = null);

(statearr_33605_34987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (1))){
var state_33599__$1 = state_33599;
var statearr_33606_34988 = state_33599__$1;
(statearr_33606_34988[(2)] = null);

(statearr_33606_34988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (24))){
var inst_33578 = (state_33599[(7)]);
var inst_33587 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33578);
var state_33599__$1 = state_33599;
var statearr_33607_34989 = state_33599__$1;
(statearr_33607_34989[(2)] = inst_33587);

(statearr_33607_34989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (4))){
var inst_33522 = (state_33599[(8)]);
var inst_33522__$1 = (state_33599[(2)]);
var inst_33523 = (inst_33522__$1 == null);
var state_33599__$1 = (function (){var statearr_33608 = state_33599;
(statearr_33608[(8)] = inst_33522__$1);

return statearr_33608;
})();
if(cljs.core.truth_(inst_33523)){
var statearr_33609_34990 = state_33599__$1;
(statearr_33609_34990[(1)] = (5));

} else {
var statearr_33610_34991 = state_33599__$1;
(statearr_33610_34991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (15))){
var inst_33569 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33611_34992 = state_33599__$1;
(statearr_33611_34992[(2)] = inst_33569);

(statearr_33611_34992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (21))){
var inst_33592 = (state_33599[(2)]);
var state_33599__$1 = (function (){var statearr_33612 = state_33599;
(statearr_33612[(9)] = inst_33592);

return statearr_33612;
})();
var statearr_33613_34993 = state_33599__$1;
(statearr_33613_34993[(2)] = null);

(statearr_33613_34993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (13))){
var inst_33550 = (state_33599[(10)]);
var inst_33552 = cljs.core.chunked_seq_QMARK_(inst_33550);
var state_33599__$1 = state_33599;
if(inst_33552){
var statearr_33615_34994 = state_33599__$1;
(statearr_33615_34994[(1)] = (16));

} else {
var statearr_33616_34995 = state_33599__$1;
(statearr_33616_34995[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (22))){
var inst_33584 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33584)){
var statearr_33621_34996 = state_33599__$1;
(statearr_33621_34996[(1)] = (23));

} else {
var statearr_33622_34997 = state_33599__$1;
(statearr_33622_34997[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (6))){
var inst_33522 = (state_33599[(8)]);
var inst_33578 = (state_33599[(7)]);
var inst_33580 = (state_33599[(11)]);
var inst_33578__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33522) : topic_fn.call(null,inst_33522));
var inst_33579 = cljs.core.deref(mults);
var inst_33580__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33579,inst_33578__$1);
var state_33599__$1 = (function (){var statearr_33623 = state_33599;
(statearr_33623[(7)] = inst_33578__$1);

(statearr_33623[(11)] = inst_33580__$1);

return statearr_33623;
})();
if(cljs.core.truth_(inst_33580__$1)){
var statearr_33624_34998 = state_33599__$1;
(statearr_33624_34998[(1)] = (19));

} else {
var statearr_33625_34999 = state_33599__$1;
(statearr_33625_34999[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (25))){
var inst_33589 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33627_35000 = state_33599__$1;
(statearr_33627_35000[(2)] = inst_33589);

(statearr_33627_35000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (17))){
var inst_33550 = (state_33599[(10)]);
var inst_33559 = cljs.core.first(inst_33550);
var inst_33560 = cljs.core.async.muxch_STAR_(inst_33559);
var inst_33561 = cljs.core.async.close_BANG_(inst_33560);
var inst_33562 = cljs.core.next(inst_33550);
var inst_33532 = inst_33562;
var inst_33533 = null;
var inst_33534 = (0);
var inst_33535 = (0);
var state_33599__$1 = (function (){var statearr_33631 = state_33599;
(statearr_33631[(12)] = inst_33561);

(statearr_33631[(13)] = inst_33532);

(statearr_33631[(14)] = inst_33533);

(statearr_33631[(15)] = inst_33534);

(statearr_33631[(16)] = inst_33535);

return statearr_33631;
})();
var statearr_33632_35001 = state_33599__$1;
(statearr_33632_35001[(2)] = null);

(statearr_33632_35001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (3))){
var inst_33597 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33599__$1,inst_33597);
} else {
if((state_val_33601 === (12))){
var inst_33574 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33634_35002 = state_33599__$1;
(statearr_33634_35002[(2)] = inst_33574);

(statearr_33634_35002[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (2))){
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33599__$1,(4),ch);
} else {
if((state_val_33601 === (23))){
var state_33599__$1 = state_33599;
var statearr_33635_35004 = state_33599__$1;
(statearr_33635_35004[(2)] = null);

(statearr_33635_35004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (19))){
var inst_33580 = (state_33599[(11)]);
var inst_33522 = (state_33599[(8)]);
var inst_33582 = cljs.core.async.muxch_STAR_(inst_33580);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33599__$1,(22),inst_33582,inst_33522);
} else {
if((state_val_33601 === (11))){
var inst_33532 = (state_33599[(13)]);
var inst_33550 = (state_33599[(10)]);
var inst_33550__$1 = cljs.core.seq(inst_33532);
var state_33599__$1 = (function (){var statearr_33636 = state_33599;
(statearr_33636[(10)] = inst_33550__$1);

return statearr_33636;
})();
if(inst_33550__$1){
var statearr_33637_35005 = state_33599__$1;
(statearr_33637_35005[(1)] = (13));

} else {
var statearr_33638_35006 = state_33599__$1;
(statearr_33638_35006[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (9))){
var inst_33576 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33639_35008 = state_33599__$1;
(statearr_33639_35008[(2)] = inst_33576);

(statearr_33639_35008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (5))){
var inst_33529 = cljs.core.deref(mults);
var inst_33530 = cljs.core.vals(inst_33529);
var inst_33531 = cljs.core.seq(inst_33530);
var inst_33532 = inst_33531;
var inst_33533 = null;
var inst_33534 = (0);
var inst_33535 = (0);
var state_33599__$1 = (function (){var statearr_33643 = state_33599;
(statearr_33643[(13)] = inst_33532);

(statearr_33643[(14)] = inst_33533);

(statearr_33643[(15)] = inst_33534);

(statearr_33643[(16)] = inst_33535);

return statearr_33643;
})();
var statearr_33644_35012 = state_33599__$1;
(statearr_33644_35012[(2)] = null);

(statearr_33644_35012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (14))){
var state_33599__$1 = state_33599;
var statearr_33648_35013 = state_33599__$1;
(statearr_33648_35013[(2)] = null);

(statearr_33648_35013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (16))){
var inst_33550 = (state_33599[(10)]);
var inst_33554 = cljs.core.chunk_first(inst_33550);
var inst_33555 = cljs.core.chunk_rest(inst_33550);
var inst_33556 = cljs.core.count(inst_33554);
var inst_33532 = inst_33555;
var inst_33533 = inst_33554;
var inst_33534 = inst_33556;
var inst_33535 = (0);
var state_33599__$1 = (function (){var statearr_33649 = state_33599;
(statearr_33649[(13)] = inst_33532);

(statearr_33649[(14)] = inst_33533);

(statearr_33649[(15)] = inst_33534);

(statearr_33649[(16)] = inst_33535);

return statearr_33649;
})();
var statearr_33650_35014 = state_33599__$1;
(statearr_33650_35014[(2)] = null);

(statearr_33650_35014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (10))){
var inst_33533 = (state_33599[(14)]);
var inst_33535 = (state_33599[(16)]);
var inst_33532 = (state_33599[(13)]);
var inst_33534 = (state_33599[(15)]);
var inst_33540 = cljs.core._nth(inst_33533,inst_33535);
var inst_33541 = cljs.core.async.muxch_STAR_(inst_33540);
var inst_33542 = cljs.core.async.close_BANG_(inst_33541);
var inst_33543 = (inst_33535 + (1));
var tmp33645 = inst_33533;
var tmp33646 = inst_33534;
var tmp33647 = inst_33532;
var inst_33532__$1 = tmp33647;
var inst_33533__$1 = tmp33645;
var inst_33534__$1 = tmp33646;
var inst_33535__$1 = inst_33543;
var state_33599__$1 = (function (){var statearr_33651 = state_33599;
(statearr_33651[(17)] = inst_33542);

(statearr_33651[(13)] = inst_33532__$1);

(statearr_33651[(14)] = inst_33533__$1);

(statearr_33651[(15)] = inst_33534__$1);

(statearr_33651[(16)] = inst_33535__$1);

return statearr_33651;
})();
var statearr_33652_35015 = state_33599__$1;
(statearr_33652_35015[(2)] = null);

(statearr_33652_35015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (18))){
var inst_33566 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33653_35016 = state_33599__$1;
(statearr_33653_35016[(2)] = inst_33566);

(statearr_33653_35016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (8))){
var inst_33535 = (state_33599[(16)]);
var inst_33534 = (state_33599[(15)]);
var inst_33537 = (inst_33535 < inst_33534);
var inst_33538 = inst_33537;
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33538)){
var statearr_33654_35017 = state_33599__$1;
(statearr_33654_35017[(1)] = (10));

} else {
var statearr_33655_35018 = state_33599__$1;
(statearr_33655_35018[(1)] = (11));

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
var cljs$core$async$state_machine__32396__auto__ = null;
var cljs$core$async$state_machine__32396__auto____0 = (function (){
var statearr_33659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33659[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_33659[(1)] = (1));

return statearr_33659;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33599){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33599);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33661){var ex__32399__auto__ = e33661;
var statearr_33662_35019 = state_33599;
(statearr_33662_35019[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33599[(4)]))){
var statearr_33663_35020 = state_33599;
(statearr_33663_35020[(1)] = cljs.core.first((state_33599[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35021 = state_33599;
state_33599 = G__35021;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33664 = f__32477__auto__();
(statearr_33664[(6)] = c__32476__auto___34985);

return statearr_33664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
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
var G__33670 = arguments.length;
switch (G__33670) {
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
var G__33676 = arguments.length;
switch (G__33676) {
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
var G__33683 = arguments.length;
switch (G__33683) {
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
var c__32476__auto___35025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33738){
var state_val_33739 = (state_33738[(1)]);
if((state_val_33739 === (7))){
var state_33738__$1 = state_33738;
var statearr_33745_35026 = state_33738__$1;
(statearr_33745_35026[(2)] = null);

(statearr_33745_35026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (1))){
var state_33738__$1 = state_33738;
var statearr_33746_35027 = state_33738__$1;
(statearr_33746_35027[(2)] = null);

(statearr_33746_35027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (4))){
var inst_33694 = (state_33738[(7)]);
var inst_33693 = (state_33738[(8)]);
var inst_33696 = (inst_33694 < inst_33693);
var state_33738__$1 = state_33738;
if(cljs.core.truth_(inst_33696)){
var statearr_33747_35028 = state_33738__$1;
(statearr_33747_35028[(1)] = (6));

} else {
var statearr_33748_35029 = state_33738__$1;
(statearr_33748_35029[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (15))){
var inst_33724 = (state_33738[(9)]);
var inst_33729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33724);
var state_33738__$1 = state_33738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33738__$1,(17),out,inst_33729);
} else {
if((state_val_33739 === (13))){
var inst_33724 = (state_33738[(9)]);
var inst_33724__$1 = (state_33738[(2)]);
var inst_33725 = cljs.core.some(cljs.core.nil_QMARK_,inst_33724__$1);
var state_33738__$1 = (function (){var statearr_33751 = state_33738;
(statearr_33751[(9)] = inst_33724__$1);

return statearr_33751;
})();
if(cljs.core.truth_(inst_33725)){
var statearr_33752_35030 = state_33738__$1;
(statearr_33752_35030[(1)] = (14));

} else {
var statearr_33753_35031 = state_33738__$1;
(statearr_33753_35031[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (6))){
var state_33738__$1 = state_33738;
var statearr_33754_35032 = state_33738__$1;
(statearr_33754_35032[(2)] = null);

(statearr_33754_35032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (17))){
var inst_33731 = (state_33738[(2)]);
var state_33738__$1 = (function (){var statearr_33760 = state_33738;
(statearr_33760[(10)] = inst_33731);

return statearr_33760;
})();
var statearr_33761_35033 = state_33738__$1;
(statearr_33761_35033[(2)] = null);

(statearr_33761_35033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (3))){
var inst_33736 = (state_33738[(2)]);
var state_33738__$1 = state_33738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33738__$1,inst_33736);
} else {
if((state_val_33739 === (12))){
var _ = (function (){var statearr_33763 = state_33738;
(statearr_33763[(4)] = cljs.core.rest((state_33738[(4)])));

return statearr_33763;
})();
var state_33738__$1 = state_33738;
var ex33759 = (state_33738__$1[(2)]);
var statearr_33766_35034 = state_33738__$1;
(statearr_33766_35034[(5)] = ex33759);


if((ex33759 instanceof Object)){
var statearr_33767_35035 = state_33738__$1;
(statearr_33767_35035[(1)] = (11));

(statearr_33767_35035[(5)] = null);

} else {
throw ex33759;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (2))){
var inst_33692 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33693 = cnt;
var inst_33694 = (0);
var state_33738__$1 = (function (){var statearr_33769 = state_33738;
(statearr_33769[(11)] = inst_33692);

(statearr_33769[(8)] = inst_33693);

(statearr_33769[(7)] = inst_33694);

return statearr_33769;
})();
var statearr_33772_35036 = state_33738__$1;
(statearr_33772_35036[(2)] = null);

(statearr_33772_35036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (11))){
var inst_33699 = (state_33738[(2)]);
var inst_33700 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33738__$1 = (function (){var statearr_33773 = state_33738;
(statearr_33773[(12)] = inst_33699);

return statearr_33773;
})();
var statearr_33774_35037 = state_33738__$1;
(statearr_33774_35037[(2)] = inst_33700);

(statearr_33774_35037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (9))){
var inst_33694 = (state_33738[(7)]);
var _ = (function (){var statearr_33775 = state_33738;
(statearr_33775[(4)] = cljs.core.cons((12),(state_33738[(4)])));

return statearr_33775;
})();
var inst_33708 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33694) : chs__$1.call(null,inst_33694));
var inst_33710 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33694) : done.call(null,inst_33694));
var inst_33711 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33708,inst_33710);
var ___$1 = (function (){var statearr_33777 = state_33738;
(statearr_33777[(4)] = cljs.core.rest((state_33738[(4)])));

return statearr_33777;
})();
var state_33738__$1 = state_33738;
var statearr_33779_35038 = state_33738__$1;
(statearr_33779_35038[(2)] = inst_33711);

(statearr_33779_35038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (5))){
var inst_33722 = (state_33738[(2)]);
var state_33738__$1 = (function (){var statearr_33780 = state_33738;
(statearr_33780[(13)] = inst_33722);

return statearr_33780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33738__$1,(13),dchan);
} else {
if((state_val_33739 === (14))){
var inst_33727 = cljs.core.async.close_BANG_(out);
var state_33738__$1 = state_33738;
var statearr_33782_35039 = state_33738__$1;
(statearr_33782_35039[(2)] = inst_33727);

(statearr_33782_35039[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (16))){
var inst_33734 = (state_33738[(2)]);
var state_33738__$1 = state_33738;
var statearr_33784_35040 = state_33738__$1;
(statearr_33784_35040[(2)] = inst_33734);

(statearr_33784_35040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (10))){
var inst_33694 = (state_33738[(7)]);
var inst_33714 = (state_33738[(2)]);
var inst_33715 = (inst_33694 + (1));
var inst_33694__$1 = inst_33715;
var state_33738__$1 = (function (){var statearr_33786 = state_33738;
(statearr_33786[(14)] = inst_33714);

(statearr_33786[(7)] = inst_33694__$1);

return statearr_33786;
})();
var statearr_33788_35041 = state_33738__$1;
(statearr_33788_35041[(2)] = null);

(statearr_33788_35041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (8))){
var inst_33720 = (state_33738[(2)]);
var state_33738__$1 = state_33738;
var statearr_33789_35042 = state_33738__$1;
(statearr_33789_35042[(2)] = inst_33720);

(statearr_33789_35042[(1)] = (5));


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
var cljs$core$async$state_machine__32396__auto__ = null;
var cljs$core$async$state_machine__32396__auto____0 = (function (){
var statearr_33790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33790[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_33790[(1)] = (1));

return statearr_33790;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33738){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33738);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33795){var ex__32399__auto__ = e33795;
var statearr_33796_35043 = state_33738;
(statearr_33796_35043[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33738[(4)]))){
var statearr_33797_35044 = state_33738;
(statearr_33797_35044[(1)] = cljs.core.first((state_33738[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35045 = state_33738;
state_33738 = G__35045;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33798 = f__32477__auto__();
(statearr_33798[(6)] = c__32476__auto___35025);

return statearr_33798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
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
var G__33803 = arguments.length;
switch (G__33803) {
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
var c__32476__auto___35047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33838){
var state_val_33839 = (state_33838[(1)]);
if((state_val_33839 === (7))){
var inst_33815 = (state_33838[(7)]);
var inst_33816 = (state_33838[(8)]);
var inst_33815__$1 = (state_33838[(2)]);
var inst_33816__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33815__$1,(0),null);
var inst_33817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33815__$1,(1),null);
var inst_33818 = (inst_33816__$1 == null);
var state_33838__$1 = (function (){var statearr_33840 = state_33838;
(statearr_33840[(7)] = inst_33815__$1);

(statearr_33840[(8)] = inst_33816__$1);

(statearr_33840[(9)] = inst_33817);

return statearr_33840;
})();
if(cljs.core.truth_(inst_33818)){
var statearr_33841_35049 = state_33838__$1;
(statearr_33841_35049[(1)] = (8));

} else {
var statearr_33842_35050 = state_33838__$1;
(statearr_33842_35050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (1))){
var inst_33805 = cljs.core.vec(chs);
var inst_33806 = inst_33805;
var state_33838__$1 = (function (){var statearr_33845 = state_33838;
(statearr_33845[(10)] = inst_33806);

return statearr_33845;
})();
var statearr_33847_35051 = state_33838__$1;
(statearr_33847_35051[(2)] = null);

(statearr_33847_35051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (4))){
var inst_33806 = (state_33838[(10)]);
var state_33838__$1 = state_33838;
return cljs.core.async.ioc_alts_BANG_(state_33838__$1,(7),inst_33806);
} else {
if((state_val_33839 === (6))){
var inst_33834 = (state_33838[(2)]);
var state_33838__$1 = state_33838;
var statearr_33851_35053 = state_33838__$1;
(statearr_33851_35053[(2)] = inst_33834);

(statearr_33851_35053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (3))){
var inst_33836 = (state_33838[(2)]);
var state_33838__$1 = state_33838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33838__$1,inst_33836);
} else {
if((state_val_33839 === (2))){
var inst_33806 = (state_33838[(10)]);
var inst_33808 = cljs.core.count(inst_33806);
var inst_33809 = (inst_33808 > (0));
var state_33838__$1 = state_33838;
if(cljs.core.truth_(inst_33809)){
var statearr_33853_35055 = state_33838__$1;
(statearr_33853_35055[(1)] = (4));

} else {
var statearr_33854_35056 = state_33838__$1;
(statearr_33854_35056[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (11))){
var inst_33806 = (state_33838[(10)]);
var inst_33826 = (state_33838[(2)]);
var tmp33852 = inst_33806;
var inst_33806__$1 = tmp33852;
var state_33838__$1 = (function (){var statearr_33855 = state_33838;
(statearr_33855[(11)] = inst_33826);

(statearr_33855[(10)] = inst_33806__$1);

return statearr_33855;
})();
var statearr_33857_35057 = state_33838__$1;
(statearr_33857_35057[(2)] = null);

(statearr_33857_35057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (9))){
var inst_33816 = (state_33838[(8)]);
var state_33838__$1 = state_33838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33838__$1,(11),out,inst_33816);
} else {
if((state_val_33839 === (5))){
var inst_33832 = cljs.core.async.close_BANG_(out);
var state_33838__$1 = state_33838;
var statearr_33865_35058 = state_33838__$1;
(statearr_33865_35058[(2)] = inst_33832);

(statearr_33865_35058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (10))){
var inst_33830 = (state_33838[(2)]);
var state_33838__$1 = state_33838;
var statearr_33866_35059 = state_33838__$1;
(statearr_33866_35059[(2)] = inst_33830);

(statearr_33866_35059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33839 === (8))){
var inst_33806 = (state_33838[(10)]);
var inst_33815 = (state_33838[(7)]);
var inst_33816 = (state_33838[(8)]);
var inst_33817 = (state_33838[(9)]);
var inst_33820 = (function (){var cs = inst_33806;
var vec__33811 = inst_33815;
var v = inst_33816;
var c = inst_33817;
return (function (p1__33801_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33801_SHARP_);
});
})();
var inst_33821 = cljs.core.filterv(inst_33820,inst_33806);
var inst_33806__$1 = inst_33821;
var state_33838__$1 = (function (){var statearr_33868 = state_33838;
(statearr_33868[(10)] = inst_33806__$1);

return statearr_33868;
})();
var statearr_33869_35061 = state_33838__$1;
(statearr_33869_35061[(2)] = null);

(statearr_33869_35061[(1)] = (2));


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
var cljs$core$async$state_machine__32396__auto__ = null;
var cljs$core$async$state_machine__32396__auto____0 = (function (){
var statearr_33871 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33871[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_33871[(1)] = (1));

return statearr_33871;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33838){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33838);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33872){var ex__32399__auto__ = e33872;
var statearr_33873_35062 = state_33838;
(statearr_33873_35062[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33838[(4)]))){
var statearr_33874_35063 = state_33838;
(statearr_33874_35063[(1)] = cljs.core.first((state_33838[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35064 = state_33838;
state_33838 = G__35064;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33881 = f__32477__auto__();
(statearr_33881[(6)] = c__32476__auto___35047);

return statearr_33881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
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
var G__33887 = arguments.length;
switch (G__33887) {
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
var c__32476__auto___35066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33929){
var state_val_33931 = (state_33929[(1)]);
if((state_val_33931 === (7))){
var inst_33909 = (state_33929[(7)]);
var inst_33909__$1 = (state_33929[(2)]);
var inst_33911 = (inst_33909__$1 == null);
var inst_33912 = cljs.core.not(inst_33911);
var state_33929__$1 = (function (){var statearr_33936 = state_33929;
(statearr_33936[(7)] = inst_33909__$1);

return statearr_33936;
})();
if(inst_33912){
var statearr_33937_35068 = state_33929__$1;
(statearr_33937_35068[(1)] = (8));

} else {
var statearr_33938_35069 = state_33929__$1;
(statearr_33938_35069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (1))){
var inst_33899 = (0);
var state_33929__$1 = (function (){var statearr_33939 = state_33929;
(statearr_33939[(8)] = inst_33899);

return statearr_33939;
})();
var statearr_33941_35070 = state_33929__$1;
(statearr_33941_35070[(2)] = null);

(statearr_33941_35070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (4))){
var state_33929__$1 = state_33929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33929__$1,(7),ch);
} else {
if((state_val_33931 === (6))){
var inst_33924 = (state_33929[(2)]);
var state_33929__$1 = state_33929;
var statearr_33942_35071 = state_33929__$1;
(statearr_33942_35071[(2)] = inst_33924);

(statearr_33942_35071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (3))){
var inst_33926 = (state_33929[(2)]);
var inst_33927 = cljs.core.async.close_BANG_(out);
var state_33929__$1 = (function (){var statearr_33943 = state_33929;
(statearr_33943[(9)] = inst_33926);

return statearr_33943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33929__$1,inst_33927);
} else {
if((state_val_33931 === (2))){
var inst_33899 = (state_33929[(8)]);
var inst_33904 = (inst_33899 < n);
var state_33929__$1 = state_33929;
if(cljs.core.truth_(inst_33904)){
var statearr_33946_35072 = state_33929__$1;
(statearr_33946_35072[(1)] = (4));

} else {
var statearr_33948_35073 = state_33929__$1;
(statearr_33948_35073[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (11))){
var inst_33899 = (state_33929[(8)]);
var inst_33915 = (state_33929[(2)]);
var inst_33916 = (inst_33899 + (1));
var inst_33899__$1 = inst_33916;
var state_33929__$1 = (function (){var statearr_33951 = state_33929;
(statearr_33951[(10)] = inst_33915);

(statearr_33951[(8)] = inst_33899__$1);

return statearr_33951;
})();
var statearr_33953_35074 = state_33929__$1;
(statearr_33953_35074[(2)] = null);

(statearr_33953_35074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (9))){
var state_33929__$1 = state_33929;
var statearr_33956_35075 = state_33929__$1;
(statearr_33956_35075[(2)] = null);

(statearr_33956_35075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (5))){
var state_33929__$1 = state_33929;
var statearr_33957_35076 = state_33929__$1;
(statearr_33957_35076[(2)] = null);

(statearr_33957_35076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (10))){
var inst_33921 = (state_33929[(2)]);
var state_33929__$1 = state_33929;
var statearr_33958_35077 = state_33929__$1;
(statearr_33958_35077[(2)] = inst_33921);

(statearr_33958_35077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33931 === (8))){
var inst_33909 = (state_33929[(7)]);
var state_33929__$1 = state_33929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33929__$1,(11),out,inst_33909);
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
var cljs$core$async$state_machine__32396__auto__ = null;
var cljs$core$async$state_machine__32396__auto____0 = (function (){
var statearr_33960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33960[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_33960[(1)] = (1));

return statearr_33960;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33929){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33929);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33964){var ex__32399__auto__ = e33964;
var statearr_33965_35079 = state_33929;
(statearr_33965_35079[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33929[(4)]))){
var statearr_33966_35081 = state_33929;
(statearr_33966_35081[(1)] = cljs.core.first((state_33929[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35084 = state_33929;
state_33929 = G__35084;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33967 = f__32477__auto__();
(statearr_33967[(6)] = c__32476__auto___35066);

return statearr_33967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
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
cljs.core.async.t_cljs$core$async33983 = (function (f,ch,meta33973,_,fn1,meta33984){
this.f = f;
this.ch = ch;
this.meta33973 = meta33973;
this._ = _;
this.fn1 = fn1;
this.meta33984 = meta33984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33985,meta33984__$1){
var self__ = this;
var _33985__$1 = this;
return (new cljs.core.async.t_cljs$core$async33983(self__.f,self__.ch,self__.meta33973,self__._,self__.fn1,meta33984__$1));
}));

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33985){
var self__ = this;
var _33985__$1 = this;
return self__.meta33984;
}));

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33970_SHARP_){
var G__33990 = (((p1__33970_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33970_SHARP_) : self__.f.call(null,p1__33970_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33990) : f1.call(null,G__33990));
});
}));

(cljs.core.async.t_cljs$core$async33983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33973","meta33973",-857198125,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33972","cljs.core.async/t_cljs$core$async33972",1816065730,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33984","meta33984",-1039456797,null)], null);
}));

(cljs.core.async.t_cljs$core$async33983.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33983");

(cljs.core.async.t_cljs$core$async33983.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33983");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33983.
 */
cljs.core.async.__GT_t_cljs$core$async33983 = (function cljs$core$async$__GT_t_cljs$core$async33983(f,ch,meta33973,_,fn1,meta33984){
return (new cljs.core.async.t_cljs$core$async33983(f,ch,meta33973,_,fn1,meta33984));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33972 = (function (f,ch,meta33973){
this.f = f;
this.ch = ch;
this.meta33973 = meta33973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33974,meta33973__$1){
var self__ = this;
var _33974__$1 = this;
return (new cljs.core.async.t_cljs$core$async33972(self__.f,self__.ch,meta33973__$1));
}));

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33974){
var self__ = this;
var _33974__$1 = this;
return self__.meta33973;
}));

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33983(self__.f,self__.ch,self__.meta33973,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33999 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33999) : self__.f.call(null,G__33999));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33973","meta33973",-857198125,null)], null);
}));

(cljs.core.async.t_cljs$core$async33972.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33972");

(cljs.core.async.t_cljs$core$async33972.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33972");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33972.
 */
cljs.core.async.__GT_t_cljs$core$async33972 = (function cljs$core$async$__GT_t_cljs$core$async33972(f,ch,meta33973){
return (new cljs.core.async.t_cljs$core$async33972(f,ch,meta33973));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33972(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34004 = (function (f,ch,meta34005){
this.f = f;
this.ch = ch;
this.meta34005 = meta34005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34006,meta34005__$1){
var self__ = this;
var _34006__$1 = this;
return (new cljs.core.async.t_cljs$core$async34004(self__.f,self__.ch,meta34005__$1));
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34006){
var self__ = this;
var _34006__$1 = this;
return self__.meta34005;
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34005","meta34005",-111711888,null)], null);
}));

(cljs.core.async.t_cljs$core$async34004.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34004");

(cljs.core.async.t_cljs$core$async34004.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34004");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34004.
 */
cljs.core.async.__GT_t_cljs$core$async34004 = (function cljs$core$async$__GT_t_cljs$core$async34004(f,ch,meta34005){
return (new cljs.core.async.t_cljs$core$async34004(f,ch,meta34005));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34004(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34014 = (function (p,ch,meta34015){
this.p = p;
this.ch = ch;
this.meta34015 = meta34015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34016,meta34015__$1){
var self__ = this;
var _34016__$1 = this;
return (new cljs.core.async.t_cljs$core$async34014(self__.p,self__.ch,meta34015__$1));
}));

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34016){
var self__ = this;
var _34016__$1 = this;
return self__.meta34015;
}));

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34015","meta34015",1936013158,null)], null);
}));

(cljs.core.async.t_cljs$core$async34014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34014");

(cljs.core.async.t_cljs$core$async34014.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34014.
 */
cljs.core.async.__GT_t_cljs$core$async34014 = (function cljs$core$async$__GT_t_cljs$core$async34014(p,ch,meta34015){
return (new cljs.core.async.t_cljs$core$async34014(p,ch,meta34015));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34014(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34027 = arguments.length;
switch (G__34027) {
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
var c__32476__auto___35096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34059){
var state_val_34060 = (state_34059[(1)]);
if((state_val_34060 === (7))){
var inst_34055 = (state_34059[(2)]);
var state_34059__$1 = state_34059;
var statearr_34063_35097 = state_34059__$1;
(statearr_34063_35097[(2)] = inst_34055);

(statearr_34063_35097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34060 === (1))){
var state_34059__$1 = state_34059;
var statearr_34064_35098 = state_34059__$1;
(statearr_34064_35098[(2)] = null);

(statearr_34064_35098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34060 === (4))){
var inst_34041 = (state_34059[(7)]);
var inst_34041__$1 = (state_34059[(2)]);
var inst_34042 = (inst_34041__$1 == null);
var state_34059__$1 = (function (){var statearr_34066 = state_34059;
(statearr_34066[(7)] = inst_34041__$1);

return statearr_34066;
})();
if(cljs.core.truth_(inst_34042)){
var statearr_34067_35099 = state_34059__$1;
(statearr_34067_35099[(1)] = (5));

} else {
var statearr_34068_35100 = state_34059__$1;
(statearr_34068_35100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34060 === (6))){
var inst_34041 = (state_34059[(7)]);
var inst_34046 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34041) : p.call(null,inst_34041));
var state_34059__$1 = state_34059;
if(cljs.core.truth_(inst_34046)){
var statearr_34072_35101 = state_34059__$1;
(statearr_34072_35101[(1)] = (8));

} else {
var statearr_34073_35102 = state_34059__$1;
(statearr_34073_35102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34060 === (3))){
var inst_34057 = (state_34059[(2)]);
var state_34059__$1 = state_34059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34059__$1,inst_34057);
} else {
if((state_val_34060 === (2))){
var state_34059__$1 = state_34059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34059__$1,(4),ch);
} else {
if((state_val_34060 === (11))){
var inst_34049 = (state_34059[(2)]);
var state_34059__$1 = state_34059;
var statearr_34077_35103 = state_34059__$1;
(statearr_34077_35103[(2)] = inst_34049);

(statearr_34077_35103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34060 === (9))){
var state_34059__$1 = state_34059;
var statearr_34078_35104 = state_34059__$1;
(statearr_34078_35104[(2)] = null);

(statearr_34078_35104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34060 === (5))){
var inst_34044 = cljs.core.async.close_BANG_(out);
var state_34059__$1 = state_34059;
var statearr_34079_35105 = state_34059__$1;
(statearr_34079_35105[(2)] = inst_34044);

(statearr_34079_35105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34060 === (10))){
var inst_34052 = (state_34059[(2)]);
var state_34059__$1 = (function (){var statearr_34080 = state_34059;
(statearr_34080[(8)] = inst_34052);

return statearr_34080;
})();
var statearr_34081_35106 = state_34059__$1;
(statearr_34081_35106[(2)] = null);

(statearr_34081_35106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34060 === (8))){
var inst_34041 = (state_34059[(7)]);
var state_34059__$1 = state_34059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34059__$1,(11),out,inst_34041);
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
var cljs$core$async$state_machine__32396__auto__ = null;
var cljs$core$async$state_machine__32396__auto____0 = (function (){
var statearr_34083 = [null,null,null,null,null,null,null,null,null];
(statearr_34083[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34083[(1)] = (1));

return statearr_34083;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34059){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34059);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34084){var ex__32399__auto__ = e34084;
var statearr_34086_35107 = state_34059;
(statearr_34086_35107[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34059[(4)]))){
var statearr_34087_35108 = state_34059;
(statearr_34087_35108[(1)] = cljs.core.first((state_34059[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35110 = state_34059;
state_34059 = G__35110;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34090 = f__32477__auto__();
(statearr_34090[(6)] = c__32476__auto___35096);

return statearr_34090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34094 = arguments.length;
switch (G__34094) {
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
var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34169){
var state_val_34170 = (state_34169[(1)]);
if((state_val_34170 === (7))){
var inst_34165 = (state_34169[(2)]);
var state_34169__$1 = state_34169;
var statearr_34171_35116 = state_34169__$1;
(statearr_34171_35116[(2)] = inst_34165);

(statearr_34171_35116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (20))){
var inst_34128 = (state_34169[(7)]);
var inst_34146 = (state_34169[(2)]);
var inst_34147 = cljs.core.next(inst_34128);
var inst_34114 = inst_34147;
var inst_34115 = null;
var inst_34116 = (0);
var inst_34117 = (0);
var state_34169__$1 = (function (){var statearr_34172 = state_34169;
(statearr_34172[(8)] = inst_34146);

(statearr_34172[(9)] = inst_34114);

(statearr_34172[(10)] = inst_34115);

(statearr_34172[(11)] = inst_34116);

(statearr_34172[(12)] = inst_34117);

return statearr_34172;
})();
var statearr_34173_35117 = state_34169__$1;
(statearr_34173_35117[(2)] = null);

(statearr_34173_35117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (1))){
var state_34169__$1 = state_34169;
var statearr_34176_35118 = state_34169__$1;
(statearr_34176_35118[(2)] = null);

(statearr_34176_35118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (4))){
var inst_34103 = (state_34169[(13)]);
var inst_34103__$1 = (state_34169[(2)]);
var inst_34104 = (inst_34103__$1 == null);
var state_34169__$1 = (function (){var statearr_34177 = state_34169;
(statearr_34177[(13)] = inst_34103__$1);

return statearr_34177;
})();
if(cljs.core.truth_(inst_34104)){
var statearr_34178_35119 = state_34169__$1;
(statearr_34178_35119[(1)] = (5));

} else {
var statearr_34179_35120 = state_34169__$1;
(statearr_34179_35120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (15))){
var state_34169__$1 = state_34169;
var statearr_34183_35121 = state_34169__$1;
(statearr_34183_35121[(2)] = null);

(statearr_34183_35121[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (21))){
var state_34169__$1 = state_34169;
var statearr_34184_35122 = state_34169__$1;
(statearr_34184_35122[(2)] = null);

(statearr_34184_35122[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (13))){
var inst_34117 = (state_34169[(12)]);
var inst_34114 = (state_34169[(9)]);
var inst_34115 = (state_34169[(10)]);
var inst_34116 = (state_34169[(11)]);
var inst_34124 = (state_34169[(2)]);
var inst_34125 = (inst_34117 + (1));
var tmp34180 = inst_34116;
var tmp34181 = inst_34115;
var tmp34182 = inst_34114;
var inst_34114__$1 = tmp34182;
var inst_34115__$1 = tmp34181;
var inst_34116__$1 = tmp34180;
var inst_34117__$1 = inst_34125;
var state_34169__$1 = (function (){var statearr_34185 = state_34169;
(statearr_34185[(14)] = inst_34124);

(statearr_34185[(9)] = inst_34114__$1);

(statearr_34185[(10)] = inst_34115__$1);

(statearr_34185[(11)] = inst_34116__$1);

(statearr_34185[(12)] = inst_34117__$1);

return statearr_34185;
})();
var statearr_34189_35123 = state_34169__$1;
(statearr_34189_35123[(2)] = null);

(statearr_34189_35123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (22))){
var state_34169__$1 = state_34169;
var statearr_34190_35124 = state_34169__$1;
(statearr_34190_35124[(2)] = null);

(statearr_34190_35124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (6))){
var inst_34103 = (state_34169[(13)]);
var inst_34112 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34103) : f.call(null,inst_34103));
var inst_34113 = cljs.core.seq(inst_34112);
var inst_34114 = inst_34113;
var inst_34115 = null;
var inst_34116 = (0);
var inst_34117 = (0);
var state_34169__$1 = (function (){var statearr_34191 = state_34169;
(statearr_34191[(9)] = inst_34114);

(statearr_34191[(10)] = inst_34115);

(statearr_34191[(11)] = inst_34116);

(statearr_34191[(12)] = inst_34117);

return statearr_34191;
})();
var statearr_34192_35125 = state_34169__$1;
(statearr_34192_35125[(2)] = null);

(statearr_34192_35125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (17))){
var inst_34128 = (state_34169[(7)]);
var inst_34137 = cljs.core.chunk_first(inst_34128);
var inst_34140 = cljs.core.chunk_rest(inst_34128);
var inst_34141 = cljs.core.count(inst_34137);
var inst_34114 = inst_34140;
var inst_34115 = inst_34137;
var inst_34116 = inst_34141;
var inst_34117 = (0);
var state_34169__$1 = (function (){var statearr_34193 = state_34169;
(statearr_34193[(9)] = inst_34114);

(statearr_34193[(10)] = inst_34115);

(statearr_34193[(11)] = inst_34116);

(statearr_34193[(12)] = inst_34117);

return statearr_34193;
})();
var statearr_34194_35126 = state_34169__$1;
(statearr_34194_35126[(2)] = null);

(statearr_34194_35126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (3))){
var inst_34167 = (state_34169[(2)]);
var state_34169__$1 = state_34169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34169__$1,inst_34167);
} else {
if((state_val_34170 === (12))){
var inst_34155 = (state_34169[(2)]);
var state_34169__$1 = state_34169;
var statearr_34195_35127 = state_34169__$1;
(statearr_34195_35127[(2)] = inst_34155);

(statearr_34195_35127[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (2))){
var state_34169__$1 = state_34169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34169__$1,(4),in$);
} else {
if((state_val_34170 === (23))){
var inst_34163 = (state_34169[(2)]);
var state_34169__$1 = state_34169;
var statearr_34202_35128 = state_34169__$1;
(statearr_34202_35128[(2)] = inst_34163);

(statearr_34202_35128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (19))){
var inst_34150 = (state_34169[(2)]);
var state_34169__$1 = state_34169;
var statearr_34203_35129 = state_34169__$1;
(statearr_34203_35129[(2)] = inst_34150);

(statearr_34203_35129[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (11))){
var inst_34114 = (state_34169[(9)]);
var inst_34128 = (state_34169[(7)]);
var inst_34128__$1 = cljs.core.seq(inst_34114);
var state_34169__$1 = (function (){var statearr_34204 = state_34169;
(statearr_34204[(7)] = inst_34128__$1);

return statearr_34204;
})();
if(inst_34128__$1){
var statearr_34206_35130 = state_34169__$1;
(statearr_34206_35130[(1)] = (14));

} else {
var statearr_34207_35131 = state_34169__$1;
(statearr_34207_35131[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (9))){
var inst_34157 = (state_34169[(2)]);
var inst_34158 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34169__$1 = (function (){var statearr_34208 = state_34169;
(statearr_34208[(15)] = inst_34157);

return statearr_34208;
})();
if(cljs.core.truth_(inst_34158)){
var statearr_34209_35132 = state_34169__$1;
(statearr_34209_35132[(1)] = (21));

} else {
var statearr_34211_35133 = state_34169__$1;
(statearr_34211_35133[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (5))){
var inst_34106 = cljs.core.async.close_BANG_(out);
var state_34169__$1 = state_34169;
var statearr_34218_35134 = state_34169__$1;
(statearr_34218_35134[(2)] = inst_34106);

(statearr_34218_35134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (14))){
var inst_34128 = (state_34169[(7)]);
var inst_34135 = cljs.core.chunked_seq_QMARK_(inst_34128);
var state_34169__$1 = state_34169;
if(inst_34135){
var statearr_34219_35135 = state_34169__$1;
(statearr_34219_35135[(1)] = (17));

} else {
var statearr_34220_35136 = state_34169__$1;
(statearr_34220_35136[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (16))){
var inst_34153 = (state_34169[(2)]);
var state_34169__$1 = state_34169;
var statearr_34222_35137 = state_34169__$1;
(statearr_34222_35137[(2)] = inst_34153);

(statearr_34222_35137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (10))){
var inst_34115 = (state_34169[(10)]);
var inst_34117 = (state_34169[(12)]);
var inst_34122 = cljs.core._nth(inst_34115,inst_34117);
var state_34169__$1 = state_34169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34169__$1,(13),out,inst_34122);
} else {
if((state_val_34170 === (18))){
var inst_34128 = (state_34169[(7)]);
var inst_34144 = cljs.core.first(inst_34128);
var state_34169__$1 = state_34169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34169__$1,(20),out,inst_34144);
} else {
if((state_val_34170 === (8))){
var inst_34117 = (state_34169[(12)]);
var inst_34116 = (state_34169[(11)]);
var inst_34119 = (inst_34117 < inst_34116);
var inst_34120 = inst_34119;
var state_34169__$1 = state_34169;
if(cljs.core.truth_(inst_34120)){
var statearr_34224_35138 = state_34169__$1;
(statearr_34224_35138[(1)] = (10));

} else {
var statearr_34225_35139 = state_34169__$1;
(statearr_34225_35139[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____0 = (function (){
var statearr_34229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34229[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__);

(statearr_34229[(1)] = (1));

return statearr_34229;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____1 = (function (state_34169){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34169);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34230){var ex__32399__auto__ = e34230;
var statearr_34231_35140 = state_34169;
(statearr_34231_35140[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34169[(4)]))){
var statearr_34232_35141 = state_34169;
(statearr_34232_35141[(1)] = cljs.core.first((state_34169[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35142 = state_34169;
state_34169 = G__35142;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__ = function(state_34169){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____1.call(this,state_34169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34235 = f__32477__auto__();
(statearr_34235[(6)] = c__32476__auto__);

return statearr_34235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34237 = arguments.length;
switch (G__34237) {
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
var G__34244 = arguments.length;
switch (G__34244) {
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
var G__34254 = arguments.length;
switch (G__34254) {
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
var c__32476__auto___35146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34287){
var state_val_34288 = (state_34287[(1)]);
if((state_val_34288 === (7))){
var inst_34281 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34290_35147 = state_34287__$1;
(statearr_34290_35147[(2)] = inst_34281);

(statearr_34290_35147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (1))){
var inst_34261 = null;
var state_34287__$1 = (function (){var statearr_34291 = state_34287;
(statearr_34291[(7)] = inst_34261);

return statearr_34291;
})();
var statearr_34292_35148 = state_34287__$1;
(statearr_34292_35148[(2)] = null);

(statearr_34292_35148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (4))){
var inst_34265 = (state_34287[(8)]);
var inst_34265__$1 = (state_34287[(2)]);
var inst_34266 = (inst_34265__$1 == null);
var inst_34267 = cljs.core.not(inst_34266);
var state_34287__$1 = (function (){var statearr_34294 = state_34287;
(statearr_34294[(8)] = inst_34265__$1);

return statearr_34294;
})();
if(inst_34267){
var statearr_34295_35149 = state_34287__$1;
(statearr_34295_35149[(1)] = (5));

} else {
var statearr_34296_35150 = state_34287__$1;
(statearr_34296_35150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (6))){
var state_34287__$1 = state_34287;
var statearr_34299_35151 = state_34287__$1;
(statearr_34299_35151[(2)] = null);

(statearr_34299_35151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (3))){
var inst_34283 = (state_34287[(2)]);
var inst_34284 = cljs.core.async.close_BANG_(out);
var state_34287__$1 = (function (){var statearr_34302 = state_34287;
(statearr_34302[(9)] = inst_34283);

return statearr_34302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34287__$1,inst_34284);
} else {
if((state_val_34288 === (2))){
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34287__$1,(4),ch);
} else {
if((state_val_34288 === (11))){
var inst_34265 = (state_34287[(8)]);
var inst_34275 = (state_34287[(2)]);
var inst_34261 = inst_34265;
var state_34287__$1 = (function (){var statearr_34304 = state_34287;
(statearr_34304[(10)] = inst_34275);

(statearr_34304[(7)] = inst_34261);

return statearr_34304;
})();
var statearr_34305_35152 = state_34287__$1;
(statearr_34305_35152[(2)] = null);

(statearr_34305_35152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (9))){
var inst_34265 = (state_34287[(8)]);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34287__$1,(11),out,inst_34265);
} else {
if((state_val_34288 === (5))){
var inst_34265 = (state_34287[(8)]);
var inst_34261 = (state_34287[(7)]);
var inst_34269 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34265,inst_34261);
var state_34287__$1 = state_34287;
if(inst_34269){
var statearr_34311_35153 = state_34287__$1;
(statearr_34311_35153[(1)] = (8));

} else {
var statearr_34312_35154 = state_34287__$1;
(statearr_34312_35154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (10))){
var inst_34278 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34313_35155 = state_34287__$1;
(statearr_34313_35155[(2)] = inst_34278);

(statearr_34313_35155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (8))){
var inst_34261 = (state_34287[(7)]);
var tmp34306 = inst_34261;
var inst_34261__$1 = tmp34306;
var state_34287__$1 = (function (){var statearr_34315 = state_34287;
(statearr_34315[(7)] = inst_34261__$1);

return statearr_34315;
})();
var statearr_34316_35156 = state_34287__$1;
(statearr_34316_35156[(2)] = null);

(statearr_34316_35156[(1)] = (2));


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
var cljs$core$async$state_machine__32396__auto__ = null;
var cljs$core$async$state_machine__32396__auto____0 = (function (){
var statearr_34318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34318[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34318[(1)] = (1));

return statearr_34318;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34287){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34287);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34319){var ex__32399__auto__ = e34319;
var statearr_34320_35157 = state_34287;
(statearr_34320_35157[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34287[(4)]))){
var statearr_34321_35158 = state_34287;
(statearr_34321_35158[(1)] = cljs.core.first((state_34287[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35159 = state_34287;
state_34287 = G__35159;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34322 = f__32477__auto__();
(statearr_34322[(6)] = c__32476__auto___35146);

return statearr_34322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34324 = arguments.length;
switch (G__34324) {
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
var c__32476__auto___35162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34365){
var state_val_34366 = (state_34365[(1)]);
if((state_val_34366 === (7))){
var inst_34361 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34367_35163 = state_34365__$1;
(statearr_34367_35163[(2)] = inst_34361);

(statearr_34367_35163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (1))){
var inst_34327 = (new Array(n));
var inst_34328 = inst_34327;
var inst_34329 = (0);
var state_34365__$1 = (function (){var statearr_34368 = state_34365;
(statearr_34368[(7)] = inst_34328);

(statearr_34368[(8)] = inst_34329);

return statearr_34368;
})();
var statearr_34369_35167 = state_34365__$1;
(statearr_34369_35167[(2)] = null);

(statearr_34369_35167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (4))){
var inst_34332 = (state_34365[(9)]);
var inst_34332__$1 = (state_34365[(2)]);
var inst_34333 = (inst_34332__$1 == null);
var inst_34334 = cljs.core.not(inst_34333);
var state_34365__$1 = (function (){var statearr_34371 = state_34365;
(statearr_34371[(9)] = inst_34332__$1);

return statearr_34371;
})();
if(inst_34334){
var statearr_34372_35168 = state_34365__$1;
(statearr_34372_35168[(1)] = (5));

} else {
var statearr_34373_35169 = state_34365__$1;
(statearr_34373_35169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (15))){
var inst_34355 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34374_35170 = state_34365__$1;
(statearr_34374_35170[(2)] = inst_34355);

(statearr_34374_35170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (13))){
var state_34365__$1 = state_34365;
var statearr_34380_35171 = state_34365__$1;
(statearr_34380_35171[(2)] = null);

(statearr_34380_35171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (6))){
var inst_34329 = (state_34365[(8)]);
var inst_34351 = (inst_34329 > (0));
var state_34365__$1 = state_34365;
if(cljs.core.truth_(inst_34351)){
var statearr_34383_35172 = state_34365__$1;
(statearr_34383_35172[(1)] = (12));

} else {
var statearr_34385_35173 = state_34365__$1;
(statearr_34385_35173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (3))){
var inst_34363 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34365__$1,inst_34363);
} else {
if((state_val_34366 === (12))){
var inst_34328 = (state_34365[(7)]);
var inst_34353 = cljs.core.vec(inst_34328);
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34365__$1,(15),out,inst_34353);
} else {
if((state_val_34366 === (2))){
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34365__$1,(4),ch);
} else {
if((state_val_34366 === (11))){
var inst_34344 = (state_34365[(2)]);
var inst_34346 = (new Array(n));
var inst_34328 = inst_34346;
var inst_34329 = (0);
var state_34365__$1 = (function (){var statearr_34394 = state_34365;
(statearr_34394[(10)] = inst_34344);

(statearr_34394[(7)] = inst_34328);

(statearr_34394[(8)] = inst_34329);

return statearr_34394;
})();
var statearr_34398_35174 = state_34365__$1;
(statearr_34398_35174[(2)] = null);

(statearr_34398_35174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (9))){
var inst_34328 = (state_34365[(7)]);
var inst_34342 = cljs.core.vec(inst_34328);
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34365__$1,(11),out,inst_34342);
} else {
if((state_val_34366 === (5))){
var inst_34328 = (state_34365[(7)]);
var inst_34329 = (state_34365[(8)]);
var inst_34332 = (state_34365[(9)]);
var inst_34337 = (state_34365[(11)]);
var inst_34336 = (inst_34328[inst_34329] = inst_34332);
var inst_34337__$1 = (inst_34329 + (1));
var inst_34338 = (inst_34337__$1 < n);
var state_34365__$1 = (function (){var statearr_34403 = state_34365;
(statearr_34403[(12)] = inst_34336);

(statearr_34403[(11)] = inst_34337__$1);

return statearr_34403;
})();
if(cljs.core.truth_(inst_34338)){
var statearr_34404_35175 = state_34365__$1;
(statearr_34404_35175[(1)] = (8));

} else {
var statearr_34405_35176 = state_34365__$1;
(statearr_34405_35176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (14))){
var inst_34358 = (state_34365[(2)]);
var inst_34359 = cljs.core.async.close_BANG_(out);
var state_34365__$1 = (function (){var statearr_34407 = state_34365;
(statearr_34407[(13)] = inst_34358);

return statearr_34407;
})();
var statearr_34408_35177 = state_34365__$1;
(statearr_34408_35177[(2)] = inst_34359);

(statearr_34408_35177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (10))){
var inst_34349 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34410_35178 = state_34365__$1;
(statearr_34410_35178[(2)] = inst_34349);

(statearr_34410_35178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (8))){
var inst_34328 = (state_34365[(7)]);
var inst_34337 = (state_34365[(11)]);
var tmp34406 = inst_34328;
var inst_34328__$1 = tmp34406;
var inst_34329 = inst_34337;
var state_34365__$1 = (function (){var statearr_34411 = state_34365;
(statearr_34411[(7)] = inst_34328__$1);

(statearr_34411[(8)] = inst_34329);

return statearr_34411;
})();
var statearr_34412_35179 = state_34365__$1;
(statearr_34412_35179[(2)] = null);

(statearr_34412_35179[(1)] = (2));


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
var cljs$core$async$state_machine__32396__auto__ = null;
var cljs$core$async$state_machine__32396__auto____0 = (function (){
var statearr_34415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34415[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34415[(1)] = (1));

return statearr_34415;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34365){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34365);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34416){var ex__32399__auto__ = e34416;
var statearr_34417_35180 = state_34365;
(statearr_34417_35180[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34365[(4)]))){
var statearr_34418_35181 = state_34365;
(statearr_34418_35181[(1)] = cljs.core.first((state_34365[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35182 = state_34365;
state_34365 = G__35182;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34419 = f__32477__auto__();
(statearr_34419[(6)] = c__32476__auto___35162);

return statearr_34419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34425 = arguments.length;
switch (G__34425) {
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
var c__32476__auto___35184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34474){
var state_val_34475 = (state_34474[(1)]);
if((state_val_34475 === (7))){
var inst_34470 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
var statearr_34484_35185 = state_34474__$1;
(statearr_34484_35185[(2)] = inst_34470);

(statearr_34484_35185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (1))){
var inst_34427 = [];
var inst_34428 = inst_34427;
var inst_34429 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34474__$1 = (function (){var statearr_34485 = state_34474;
(statearr_34485[(7)] = inst_34428);

(statearr_34485[(8)] = inst_34429);

return statearr_34485;
})();
var statearr_34486_35186 = state_34474__$1;
(statearr_34486_35186[(2)] = null);

(statearr_34486_35186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (4))){
var inst_34434 = (state_34474[(9)]);
var inst_34434__$1 = (state_34474[(2)]);
var inst_34435 = (inst_34434__$1 == null);
var inst_34436 = cljs.core.not(inst_34435);
var state_34474__$1 = (function (){var statearr_34487 = state_34474;
(statearr_34487[(9)] = inst_34434__$1);

return statearr_34487;
})();
if(inst_34436){
var statearr_34491_35187 = state_34474__$1;
(statearr_34491_35187[(1)] = (5));

} else {
var statearr_34492_35188 = state_34474__$1;
(statearr_34492_35188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (15))){
var inst_34428 = (state_34474[(7)]);
var inst_34462 = cljs.core.vec(inst_34428);
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34474__$1,(18),out,inst_34462);
} else {
if((state_val_34475 === (13))){
var inst_34457 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
var statearr_34493_35189 = state_34474__$1;
(statearr_34493_35189[(2)] = inst_34457);

(statearr_34493_35189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (6))){
var inst_34428 = (state_34474[(7)]);
var inst_34459 = inst_34428.length;
var inst_34460 = (inst_34459 > (0));
var state_34474__$1 = state_34474;
if(cljs.core.truth_(inst_34460)){
var statearr_34495_35190 = state_34474__$1;
(statearr_34495_35190[(1)] = (15));

} else {
var statearr_34496_35192 = state_34474__$1;
(statearr_34496_35192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (17))){
var inst_34467 = (state_34474[(2)]);
var inst_34468 = cljs.core.async.close_BANG_(out);
var state_34474__$1 = (function (){var statearr_34497 = state_34474;
(statearr_34497[(10)] = inst_34467);

return statearr_34497;
})();
var statearr_34500_35193 = state_34474__$1;
(statearr_34500_35193[(2)] = inst_34468);

(statearr_34500_35193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (3))){
var inst_34472 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34474__$1,inst_34472);
} else {
if((state_val_34475 === (12))){
var inst_34428 = (state_34474[(7)]);
var inst_34450 = cljs.core.vec(inst_34428);
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34474__$1,(14),out,inst_34450);
} else {
if((state_val_34475 === (2))){
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34474__$1,(4),ch);
} else {
if((state_val_34475 === (11))){
var inst_34428 = (state_34474[(7)]);
var inst_34434 = (state_34474[(9)]);
var inst_34439 = (state_34474[(11)]);
var inst_34447 = inst_34428.push(inst_34434);
var tmp34503 = inst_34428;
var inst_34428__$1 = tmp34503;
var inst_34429 = inst_34439;
var state_34474__$1 = (function (){var statearr_34504 = state_34474;
(statearr_34504[(12)] = inst_34447);

(statearr_34504[(7)] = inst_34428__$1);

(statearr_34504[(8)] = inst_34429);

return statearr_34504;
})();
var statearr_34505_35194 = state_34474__$1;
(statearr_34505_35194[(2)] = null);

(statearr_34505_35194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (9))){
var inst_34429 = (state_34474[(8)]);
var inst_34443 = cljs.core.keyword_identical_QMARK_(inst_34429,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34474__$1 = state_34474;
var statearr_34506_35195 = state_34474__$1;
(statearr_34506_35195[(2)] = inst_34443);

(statearr_34506_35195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (5))){
var inst_34434 = (state_34474[(9)]);
var inst_34439 = (state_34474[(11)]);
var inst_34429 = (state_34474[(8)]);
var inst_34440 = (state_34474[(13)]);
var inst_34439__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34434) : f.call(null,inst_34434));
var inst_34440__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34439__$1,inst_34429);
var state_34474__$1 = (function (){var statearr_34512 = state_34474;
(statearr_34512[(11)] = inst_34439__$1);

(statearr_34512[(13)] = inst_34440__$1);

return statearr_34512;
})();
if(inst_34440__$1){
var statearr_34513_35196 = state_34474__$1;
(statearr_34513_35196[(1)] = (8));

} else {
var statearr_34514_35197 = state_34474__$1;
(statearr_34514_35197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (14))){
var inst_34434 = (state_34474[(9)]);
var inst_34439 = (state_34474[(11)]);
var inst_34452 = (state_34474[(2)]);
var inst_34453 = [];
var inst_34454 = inst_34453.push(inst_34434);
var inst_34428 = inst_34453;
var inst_34429 = inst_34439;
var state_34474__$1 = (function (){var statearr_34515 = state_34474;
(statearr_34515[(14)] = inst_34452);

(statearr_34515[(15)] = inst_34454);

(statearr_34515[(7)] = inst_34428);

(statearr_34515[(8)] = inst_34429);

return statearr_34515;
})();
var statearr_34516_35198 = state_34474__$1;
(statearr_34516_35198[(2)] = null);

(statearr_34516_35198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (16))){
var state_34474__$1 = state_34474;
var statearr_34518_35199 = state_34474__$1;
(statearr_34518_35199[(2)] = null);

(statearr_34518_35199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (10))){
var inst_34445 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
if(cljs.core.truth_(inst_34445)){
var statearr_34519_35200 = state_34474__$1;
(statearr_34519_35200[(1)] = (11));

} else {
var statearr_34520_35201 = state_34474__$1;
(statearr_34520_35201[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (18))){
var inst_34464 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
var statearr_34521_35202 = state_34474__$1;
(statearr_34521_35202[(2)] = inst_34464);

(statearr_34521_35202[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (8))){
var inst_34440 = (state_34474[(13)]);
var state_34474__$1 = state_34474;
var statearr_34522_35203 = state_34474__$1;
(statearr_34522_35203[(2)] = inst_34440);

(statearr_34522_35203[(1)] = (10));


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
var cljs$core$async$state_machine__32396__auto__ = null;
var cljs$core$async$state_machine__32396__auto____0 = (function (){
var statearr_34523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34523[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34523[(1)] = (1));

return statearr_34523;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34474){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34474);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34524){var ex__32399__auto__ = e34524;
var statearr_34525_35204 = state_34474;
(statearr_34525_35204[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34474[(4)]))){
var statearr_34527_35205 = state_34474;
(statearr_34527_35205[(1)] = cljs.core.first((state_34474[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35206 = state_34474;
state_34474 = G__35206;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34534 = f__32477__auto__();
(statearr_34534[(6)] = c__32476__auto___35184);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
