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
cljs.core.async.t_cljs$core$async32549 = (function (f,blockable,meta32550){
this.f = f;
this.blockable = blockable;
this.meta32550 = meta32550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32551,meta32550__$1){
var self__ = this;
var _32551__$1 = this;
return (new cljs.core.async.t_cljs$core$async32549(self__.f,self__.blockable,meta32550__$1));
}));

(cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32551){
var self__ = this;
var _32551__$1 = this;
return self__.meta32550;
}));

(cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32550","meta32550",-1966785247,null)], null);
}));

(cljs.core.async.t_cljs$core$async32549.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32549");

(cljs.core.async.t_cljs$core$async32549.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32549");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32549.
 */
cljs.core.async.__GT_t_cljs$core$async32549 = (function cljs$core$async$__GT_t_cljs$core$async32549(f,blockable,meta32550){
return (new cljs.core.async.t_cljs$core$async32549(f,blockable,meta32550));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32541 = arguments.length;
switch (G__32541) {
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
return (new cljs.core.async.t_cljs$core$async32549(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32568 = arguments.length;
switch (G__32568) {
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
var G__32570 = arguments.length;
switch (G__32570) {
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
var G__32572 = arguments.length;
switch (G__32572) {
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
var val_34672 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34672) : fn1.call(null,val_34672));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34672) : fn1.call(null,val_34672));
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
var G__32574 = arguments.length;
switch (G__32574) {
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
var n__5616__auto___34677 = n;
var x_34678 = (0);
while(true){
if((x_34678 < n__5616__auto___34677)){
(a[x_34678] = x_34678);

var G__34680 = (x_34678 + (1));
x_34678 = G__34680;
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
cljs.core.async.t_cljs$core$async32576 = (function (flag,meta32577){
this.flag = flag;
this.meta32577 = meta32577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32578,meta32577__$1){
var self__ = this;
var _32578__$1 = this;
return (new cljs.core.async.t_cljs$core$async32576(self__.flag,meta32577__$1));
}));

(cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32578){
var self__ = this;
var _32578__$1 = this;
return self__.meta32577;
}));

(cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32577","meta32577",-1616872274,null)], null);
}));

(cljs.core.async.t_cljs$core$async32576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32576");

(cljs.core.async.t_cljs$core$async32576.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32576.
 */
cljs.core.async.__GT_t_cljs$core$async32576 = (function cljs$core$async$__GT_t_cljs$core$async32576(flag,meta32577){
return (new cljs.core.async.t_cljs$core$async32576(flag,meta32577));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32576(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32602 = (function (flag,cb,meta32603){
this.flag = flag;
this.cb = cb;
this.meta32603 = meta32603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32604,meta32603__$1){
var self__ = this;
var _32604__$1 = this;
return (new cljs.core.async.t_cljs$core$async32602(self__.flag,self__.cb,meta32603__$1));
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32604){
var self__ = this;
var _32604__$1 = this;
return self__.meta32603;
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32603","meta32603",1685938552,null)], null);
}));

(cljs.core.async.t_cljs$core$async32602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32602");

(cljs.core.async.t_cljs$core$async32602.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32602.
 */
cljs.core.async.__GT_t_cljs$core$async32602 = (function cljs$core$async$__GT_t_cljs$core$async32602(flag,cb,meta32603){
return (new cljs.core.async.t_cljs$core$async32602(flag,cb,meta32603));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32602(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_34681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34681)){
if((!(((port_34681.cljs$core$IFn$_invoke$arity$1 ? port_34681.cljs$core$IFn$_invoke$arity$1((1)) : port_34681.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34682 = (i + (1));
i = G__34682;
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
return (function (p1__32608_SHARP_){
var G__32636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32608_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32636) : fret.call(null,G__32636));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__32609_SHARP_){
var G__32643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32609_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32643) : fret.call(null,G__32643));
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
var G__34683 = (i + (1));
i = G__34683;
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
var len__5749__auto___34684 = arguments.length;
var i__5750__auto___34685 = (0);
while(true){
if((i__5750__auto___34685 < len__5749__auto___34684)){
args__5755__auto__.push((arguments[i__5750__auto___34685]));

var G__34686 = (i__5750__auto___34685 + (1));
i__5750__auto___34685 = G__34686;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32677){
var map__32678 = p__32677;
var map__32678__$1 = cljs.core.__destructure_map(map__32678);
var opts = map__32678__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32675){
var G__32676 = cljs.core.first(seq32675);
var seq32675__$1 = cljs.core.next(seq32675);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32676,seq32675__$1);
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
var G__32693 = arguments.length;
switch (G__32693) {
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
var c__32471__auto___34701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_32718){
var state_val_32719 = (state_32718[(1)]);
if((state_val_32719 === (7))){
var inst_32714 = (state_32718[(2)]);
var state_32718__$1 = state_32718;
var statearr_32720_34702 = state_32718__$1;
(statearr_32720_34702[(2)] = inst_32714);

(statearr_32720_34702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (1))){
var state_32718__$1 = state_32718;
var statearr_32721_34703 = state_32718__$1;
(statearr_32721_34703[(2)] = null);

(statearr_32721_34703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (4))){
var inst_32697 = (state_32718[(7)]);
var inst_32697__$1 = (state_32718[(2)]);
var inst_32698 = (inst_32697__$1 == null);
var state_32718__$1 = (function (){var statearr_32722 = state_32718;
(statearr_32722[(7)] = inst_32697__$1);

return statearr_32722;
})();
if(cljs.core.truth_(inst_32698)){
var statearr_32723_34704 = state_32718__$1;
(statearr_32723_34704[(1)] = (5));

} else {
var statearr_32724_34705 = state_32718__$1;
(statearr_32724_34705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (13))){
var state_32718__$1 = state_32718;
var statearr_32725_34706 = state_32718__$1;
(statearr_32725_34706[(2)] = null);

(statearr_32725_34706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (6))){
var inst_32697 = (state_32718[(7)]);
var state_32718__$1 = state_32718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32718__$1,(11),to,inst_32697);
} else {
if((state_val_32719 === (3))){
var inst_32716 = (state_32718[(2)]);
var state_32718__$1 = state_32718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32718__$1,inst_32716);
} else {
if((state_val_32719 === (12))){
var state_32718__$1 = state_32718;
var statearr_32726_34708 = state_32718__$1;
(statearr_32726_34708[(2)] = null);

(statearr_32726_34708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (2))){
var state_32718__$1 = state_32718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32718__$1,(4),from);
} else {
if((state_val_32719 === (11))){
var inst_32707 = (state_32718[(2)]);
var state_32718__$1 = state_32718;
if(cljs.core.truth_(inst_32707)){
var statearr_32727_34709 = state_32718__$1;
(statearr_32727_34709[(1)] = (12));

} else {
var statearr_32728_34710 = state_32718__$1;
(statearr_32728_34710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (9))){
var state_32718__$1 = state_32718;
var statearr_32729_34711 = state_32718__$1;
(statearr_32729_34711[(2)] = null);

(statearr_32729_34711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (5))){
var state_32718__$1 = state_32718;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32730_34712 = state_32718__$1;
(statearr_32730_34712[(1)] = (8));

} else {
var statearr_32731_34713 = state_32718__$1;
(statearr_32731_34713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (14))){
var inst_32712 = (state_32718[(2)]);
var state_32718__$1 = state_32718;
var statearr_32732_34714 = state_32718__$1;
(statearr_32732_34714[(2)] = inst_32712);

(statearr_32732_34714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (10))){
var inst_32704 = (state_32718[(2)]);
var state_32718__$1 = state_32718;
var statearr_32733_34716 = state_32718__$1;
(statearr_32733_34716[(2)] = inst_32704);

(statearr_32733_34716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (8))){
var inst_32701 = cljs.core.async.close_BANG_(to);
var state_32718__$1 = state_32718;
var statearr_32734_34717 = state_32718__$1;
(statearr_32734_34717[(2)] = inst_32701);

(statearr_32734_34717[(1)] = (10));


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
var cljs$core$async$state_machine__32391__auto__ = null;
var cljs$core$async$state_machine__32391__auto____0 = (function (){
var statearr_32735 = [null,null,null,null,null,null,null,null];
(statearr_32735[(0)] = cljs$core$async$state_machine__32391__auto__);

(statearr_32735[(1)] = (1));

return statearr_32735;
});
var cljs$core$async$state_machine__32391__auto____1 = (function (state_32718){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_32718);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e32736){var ex__32394__auto__ = e32736;
var statearr_32737_34719 = state_32718;
(statearr_32737_34719[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_32718[(4)]))){
var statearr_32738_34720 = state_32718;
(statearr_32738_34720[(1)] = cljs.core.first((state_32718[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34721 = state_32718;
state_32718 = G__34721;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$state_machine__32391__auto__ = function(state_32718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32391__auto____1.call(this,state_32718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32391__auto____0;
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32391__auto____1;
return cljs$core$async$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_32739 = f__32472__auto__();
(statearr_32739[(6)] = c__32471__auto___34701);

return statearr_32739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
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
var process__$1 = (function (p__32740){
var vec__32741 = p__32740;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32741,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32741,(1),null);
var job = vec__32741;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32471__auto___34724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_32748){
var state_val_32749 = (state_32748[(1)]);
if((state_val_32749 === (1))){
var state_32748__$1 = state_32748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32748__$1,(2),res,v);
} else {
if((state_val_32749 === (2))){
var inst_32745 = (state_32748[(2)]);
var inst_32746 = cljs.core.async.close_BANG_(res);
var state_32748__$1 = (function (){var statearr_32750 = state_32748;
(statearr_32750[(7)] = inst_32745);

return statearr_32750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32748__$1,inst_32746);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0 = (function (){
var statearr_32751 = [null,null,null,null,null,null,null,null];
(statearr_32751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__);

(statearr_32751[(1)] = (1));

return statearr_32751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1 = (function (state_32748){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_32748);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e32752){var ex__32394__auto__ = e32752;
var statearr_32753_34726 = state_32748;
(statearr_32753_34726[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_32748[(4)]))){
var statearr_32754_34727 = state_32748;
(statearr_32754_34727[(1)] = cljs.core.first((state_32748[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34728 = state_32748;
state_32748 = G__34728;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__ = function(state_32748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1.call(this,state_32748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_32755 = f__32472__auto__();
(statearr_32755[(6)] = c__32471__auto___34724);

return statearr_32755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32756){
var vec__32757 = p__32756;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32757,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32757,(1),null);
var job = vec__32757;
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
var n__5616__auto___34729 = n;
var __34730 = (0);
while(true){
if((__34730 < n__5616__auto___34729)){
var G__32760_34732 = type;
var G__32760_34733__$1 = (((G__32760_34732 instanceof cljs.core.Keyword))?G__32760_34732.fqn:null);
switch (G__32760_34733__$1) {
case "compute":
var c__32471__auto___34735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34730,c__32471__auto___34735,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async){
return (function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = ((function (__34730,c__32471__auto___34735,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async){
return (function (state_32773){
var state_val_32774 = (state_32773[(1)]);
if((state_val_32774 === (1))){
var state_32773__$1 = state_32773;
var statearr_32775_34737 = state_32773__$1;
(statearr_32775_34737[(2)] = null);

(statearr_32775_34737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (2))){
var state_32773__$1 = state_32773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32773__$1,(4),jobs);
} else {
if((state_val_32774 === (3))){
var inst_32771 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32773__$1,inst_32771);
} else {
if((state_val_32774 === (4))){
var inst_32763 = (state_32773[(2)]);
var inst_32764 = process__$1(inst_32763);
var state_32773__$1 = state_32773;
if(cljs.core.truth_(inst_32764)){
var statearr_32776_34738 = state_32773__$1;
(statearr_32776_34738[(1)] = (5));

} else {
var statearr_32777_34739 = state_32773__$1;
(statearr_32777_34739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (5))){
var state_32773__$1 = state_32773;
var statearr_32778_34741 = state_32773__$1;
(statearr_32778_34741[(2)] = null);

(statearr_32778_34741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (6))){
var state_32773__$1 = state_32773;
var statearr_32779_34742 = state_32773__$1;
(statearr_32779_34742[(2)] = null);

(statearr_32779_34742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32774 === (7))){
var inst_32769 = (state_32773[(2)]);
var state_32773__$1 = state_32773;
var statearr_32780_34744 = state_32773__$1;
(statearr_32780_34744[(2)] = inst_32769);

(statearr_32780_34744[(1)] = (3));


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
});})(__34730,c__32471__auto___34735,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async))
;
return ((function (__34730,switch__32390__auto__,c__32471__auto___34735,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0 = (function (){
var statearr_32781 = [null,null,null,null,null,null,null];
(statearr_32781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__);

(statearr_32781[(1)] = (1));

return statearr_32781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1 = (function (state_32773){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_32773);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e32782){var ex__32394__auto__ = e32782;
var statearr_32783_34745 = state_32773;
(statearr_32783_34745[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_32773[(4)]))){
var statearr_32784_34746 = state_32773;
(statearr_32784_34746[(1)] = cljs.core.first((state_32773[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34747 = state_32773;
state_32773 = G__34747;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__ = function(state_32773){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1.call(this,state_32773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__;
})()
;})(__34730,switch__32390__auto__,c__32471__auto___34735,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async))
})();
var state__32473__auto__ = (function (){var statearr_32785 = f__32472__auto__();
(statearr_32785[(6)] = c__32471__auto___34735);

return statearr_32785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
});})(__34730,c__32471__auto___34735,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async))
);


break;
case "async":
var c__32471__auto___34748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34730,c__32471__auto___34748,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async){
return (function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = ((function (__34730,c__32471__auto___34748,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async){
return (function (state_32798){
var state_val_32799 = (state_32798[(1)]);
if((state_val_32799 === (1))){
var state_32798__$1 = state_32798;
var statearr_32800_34749 = state_32798__$1;
(statearr_32800_34749[(2)] = null);

(statearr_32800_34749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (2))){
var state_32798__$1 = state_32798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32798__$1,(4),jobs);
} else {
if((state_val_32799 === (3))){
var inst_32796 = (state_32798[(2)]);
var state_32798__$1 = state_32798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32798__$1,inst_32796);
} else {
if((state_val_32799 === (4))){
var inst_32788 = (state_32798[(2)]);
var inst_32789 = async(inst_32788);
var state_32798__$1 = state_32798;
if(cljs.core.truth_(inst_32789)){
var statearr_32804_34750 = state_32798__$1;
(statearr_32804_34750[(1)] = (5));

} else {
var statearr_32805_34751 = state_32798__$1;
(statearr_32805_34751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (5))){
var state_32798__$1 = state_32798;
var statearr_32806_34752 = state_32798__$1;
(statearr_32806_34752[(2)] = null);

(statearr_32806_34752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (6))){
var state_32798__$1 = state_32798;
var statearr_32807_34753 = state_32798__$1;
(statearr_32807_34753[(2)] = null);

(statearr_32807_34753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32799 === (7))){
var inst_32794 = (state_32798[(2)]);
var state_32798__$1 = state_32798;
var statearr_32808_34754 = state_32798__$1;
(statearr_32808_34754[(2)] = inst_32794);

(statearr_32808_34754[(1)] = (3));


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
});})(__34730,c__32471__auto___34748,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async))
;
return ((function (__34730,switch__32390__auto__,c__32471__auto___34748,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0 = (function (){
var statearr_32809 = [null,null,null,null,null,null,null];
(statearr_32809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__);

(statearr_32809[(1)] = (1));

return statearr_32809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1 = (function (state_32798){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_32798);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e32810){var ex__32394__auto__ = e32810;
var statearr_32811_34756 = state_32798;
(statearr_32811_34756[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_32798[(4)]))){
var statearr_32812_34757 = state_32798;
(statearr_32812_34757[(1)] = cljs.core.first((state_32798[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34759 = state_32798;
state_32798 = G__34759;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__ = function(state_32798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1.call(this,state_32798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__;
})()
;})(__34730,switch__32390__auto__,c__32471__auto___34748,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async))
})();
var state__32473__auto__ = (function (){var statearr_32813 = f__32472__auto__();
(statearr_32813[(6)] = c__32471__auto___34748);

return statearr_32813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
});})(__34730,c__32471__auto___34748,G__32760_34732,G__32760_34733__$1,n__5616__auto___34729,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32760_34733__$1)].join('')));

}

var G__34760 = (__34730 + (1));
__34730 = G__34760;
continue;
} else {
}
break;
}

var c__32471__auto___34761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_32838){
var state_val_32839 = (state_32838[(1)]);
if((state_val_32839 === (7))){
var inst_32834 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
var statearr_32840_34763 = state_32838__$1;
(statearr_32840_34763[(2)] = inst_32834);

(statearr_32840_34763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (1))){
var state_32838__$1 = state_32838;
var statearr_32841_34764 = state_32838__$1;
(statearr_32841_34764[(2)] = null);

(statearr_32841_34764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (4))){
var inst_32819 = (state_32838[(7)]);
var inst_32819__$1 = (state_32838[(2)]);
var inst_32820 = (inst_32819__$1 == null);
var state_32838__$1 = (function (){var statearr_32842 = state_32838;
(statearr_32842[(7)] = inst_32819__$1);

return statearr_32842;
})();
if(cljs.core.truth_(inst_32820)){
var statearr_32844_34765 = state_32838__$1;
(statearr_32844_34765[(1)] = (5));

} else {
var statearr_32845_34766 = state_32838__$1;
(statearr_32845_34766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (6))){
var inst_32819 = (state_32838[(7)]);
var inst_32824 = (state_32838[(8)]);
var inst_32824__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32825 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32826 = [inst_32819,inst_32824__$1];
var inst_32827 = (new cljs.core.PersistentVector(null,2,(5),inst_32825,inst_32826,null));
var state_32838__$1 = (function (){var statearr_32846 = state_32838;
(statearr_32846[(8)] = inst_32824__$1);

return statearr_32846;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32838__$1,(8),jobs,inst_32827);
} else {
if((state_val_32839 === (3))){
var inst_32836 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32838__$1,inst_32836);
} else {
if((state_val_32839 === (2))){
var state_32838__$1 = state_32838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32838__$1,(4),from);
} else {
if((state_val_32839 === (9))){
var inst_32831 = (state_32838[(2)]);
var state_32838__$1 = (function (){var statearr_32851 = state_32838;
(statearr_32851[(9)] = inst_32831);

return statearr_32851;
})();
var statearr_32852_34767 = state_32838__$1;
(statearr_32852_34767[(2)] = null);

(statearr_32852_34767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (5))){
var inst_32822 = cljs.core.async.close_BANG_(jobs);
var state_32838__$1 = state_32838;
var statearr_32853_34768 = state_32838__$1;
(statearr_32853_34768[(2)] = inst_32822);

(statearr_32853_34768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (8))){
var inst_32824 = (state_32838[(8)]);
var inst_32829 = (state_32838[(2)]);
var state_32838__$1 = (function (){var statearr_32854 = state_32838;
(statearr_32854[(10)] = inst_32829);

return statearr_32854;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32838__$1,(9),results,inst_32824);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0 = (function (){
var statearr_32859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__);

(statearr_32859[(1)] = (1));

return statearr_32859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1 = (function (state_32838){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_32838);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e32860){var ex__32394__auto__ = e32860;
var statearr_32861_34770 = state_32838;
(statearr_32861_34770[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_32838[(4)]))){
var statearr_32862_34771 = state_32838;
(statearr_32862_34771[(1)] = cljs.core.first((state_32838[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34772 = state_32838;
state_32838 = G__34772;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__ = function(state_32838){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1.call(this,state_32838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_32866 = f__32472__auto__();
(statearr_32866[(6)] = c__32471__auto___34761);

return statearr_32866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));


var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_32904){
var state_val_32905 = (state_32904[(1)]);
if((state_val_32905 === (7))){
var inst_32900 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32909_34775 = state_32904__$1;
(statearr_32909_34775[(2)] = inst_32900);

(statearr_32909_34775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (20))){
var state_32904__$1 = state_32904;
var statearr_32910_34776 = state_32904__$1;
(statearr_32910_34776[(2)] = null);

(statearr_32910_34776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (1))){
var state_32904__$1 = state_32904;
var statearr_32911_34777 = state_32904__$1;
(statearr_32911_34777[(2)] = null);

(statearr_32911_34777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (4))){
var inst_32869 = (state_32904[(7)]);
var inst_32869__$1 = (state_32904[(2)]);
var inst_32870 = (inst_32869__$1 == null);
var state_32904__$1 = (function (){var statearr_32912 = state_32904;
(statearr_32912[(7)] = inst_32869__$1);

return statearr_32912;
})();
if(cljs.core.truth_(inst_32870)){
var statearr_32913_34778 = state_32904__$1;
(statearr_32913_34778[(1)] = (5));

} else {
var statearr_32914_34779 = state_32904__$1;
(statearr_32914_34779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (15))){
var inst_32882 = (state_32904[(8)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32904__$1,(18),to,inst_32882);
} else {
if((state_val_32905 === (21))){
var inst_32895 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32915_34780 = state_32904__$1;
(statearr_32915_34780[(2)] = inst_32895);

(statearr_32915_34780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (13))){
var inst_32897 = (state_32904[(2)]);
var state_32904__$1 = (function (){var statearr_32916 = state_32904;
(statearr_32916[(9)] = inst_32897);

return statearr_32916;
})();
var statearr_32917_34781 = state_32904__$1;
(statearr_32917_34781[(2)] = null);

(statearr_32917_34781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (6))){
var inst_32869 = (state_32904[(7)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32904__$1,(11),inst_32869);
} else {
if((state_val_32905 === (17))){
var inst_32890 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
if(cljs.core.truth_(inst_32890)){
var statearr_32918_34783 = state_32904__$1;
(statearr_32918_34783[(1)] = (19));

} else {
var statearr_32919_34784 = state_32904__$1;
(statearr_32919_34784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (3))){
var inst_32902 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32904__$1,inst_32902);
} else {
if((state_val_32905 === (12))){
var inst_32879 = (state_32904[(10)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32904__$1,(14),inst_32879);
} else {
if((state_val_32905 === (2))){
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32904__$1,(4),results);
} else {
if((state_val_32905 === (19))){
var state_32904__$1 = state_32904;
var statearr_32920_34785 = state_32904__$1;
(statearr_32920_34785[(2)] = null);

(statearr_32920_34785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (11))){
var inst_32879 = (state_32904[(2)]);
var state_32904__$1 = (function (){var statearr_32921 = state_32904;
(statearr_32921[(10)] = inst_32879);

return statearr_32921;
})();
var statearr_32922_34786 = state_32904__$1;
(statearr_32922_34786[(2)] = null);

(statearr_32922_34786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (9))){
var state_32904__$1 = state_32904;
var statearr_32923_34787 = state_32904__$1;
(statearr_32923_34787[(2)] = null);

(statearr_32923_34787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (5))){
var state_32904__$1 = state_32904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32924_34788 = state_32904__$1;
(statearr_32924_34788[(1)] = (8));

} else {
var statearr_32925_34789 = state_32904__$1;
(statearr_32925_34789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (14))){
var inst_32882 = (state_32904[(8)]);
var inst_32884 = (state_32904[(11)]);
var inst_32882__$1 = (state_32904[(2)]);
var inst_32883 = (inst_32882__$1 == null);
var inst_32884__$1 = cljs.core.not(inst_32883);
var state_32904__$1 = (function (){var statearr_32926 = state_32904;
(statearr_32926[(8)] = inst_32882__$1);

(statearr_32926[(11)] = inst_32884__$1);

return statearr_32926;
})();
if(inst_32884__$1){
var statearr_32927_34790 = state_32904__$1;
(statearr_32927_34790[(1)] = (15));

} else {
var statearr_32928_34791 = state_32904__$1;
(statearr_32928_34791[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (16))){
var inst_32884 = (state_32904[(11)]);
var state_32904__$1 = state_32904;
var statearr_32929_34792 = state_32904__$1;
(statearr_32929_34792[(2)] = inst_32884);

(statearr_32929_34792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (10))){
var inst_32876 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32930_34793 = state_32904__$1;
(statearr_32930_34793[(2)] = inst_32876);

(statearr_32930_34793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (18))){
var inst_32887 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32931_34794 = state_32904__$1;
(statearr_32931_34794[(2)] = inst_32887);

(statearr_32931_34794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (8))){
var inst_32873 = cljs.core.async.close_BANG_(to);
var state_32904__$1 = state_32904;
var statearr_32932_34795 = state_32904__$1;
(statearr_32932_34795[(2)] = inst_32873);

(statearr_32932_34795[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0 = (function (){
var statearr_32933 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__);

(statearr_32933[(1)] = (1));

return statearr_32933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1 = (function (state_32904){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_32904);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e32934){var ex__32394__auto__ = e32934;
var statearr_32935_34796 = state_32904;
(statearr_32935_34796[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_32904[(4)]))){
var statearr_32936_34797 = state_32904;
(statearr_32936_34797[(1)] = cljs.core.first((state_32904[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34798 = state_32904;
state_32904 = G__34798;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__ = function(state_32904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1.call(this,state_32904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32391__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_32937 = f__32472__auto__();
(statearr_32937[(6)] = c__32471__auto__);

return statearr_32937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
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
var G__32939 = arguments.length;
switch (G__32939) {
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
var G__32941 = arguments.length;
switch (G__32941) {
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
var G__32943 = arguments.length;
switch (G__32943) {
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
var c__32471__auto___34806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_32969){
var state_val_32970 = (state_32969[(1)]);
if((state_val_32970 === (7))){
var inst_32965 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32971_34807 = state_32969__$1;
(statearr_32971_34807[(2)] = inst_32965);

(statearr_32971_34807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (1))){
var state_32969__$1 = state_32969;
var statearr_32972_34808 = state_32969__$1;
(statearr_32972_34808[(2)] = null);

(statearr_32972_34808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (4))){
var inst_32946 = (state_32969[(7)]);
var inst_32946__$1 = (state_32969[(2)]);
var inst_32947 = (inst_32946__$1 == null);
var state_32969__$1 = (function (){var statearr_32974 = state_32969;
(statearr_32974[(7)] = inst_32946__$1);

return statearr_32974;
})();
if(cljs.core.truth_(inst_32947)){
var statearr_32975_34809 = state_32969__$1;
(statearr_32975_34809[(1)] = (5));

} else {
var statearr_32976_34810 = state_32969__$1;
(statearr_32976_34810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (13))){
var state_32969__$1 = state_32969;
var statearr_32977_34811 = state_32969__$1;
(statearr_32977_34811[(2)] = null);

(statearr_32977_34811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (6))){
var inst_32946 = (state_32969[(7)]);
var inst_32952 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32946) : p.call(null,inst_32946));
var state_32969__$1 = state_32969;
if(cljs.core.truth_(inst_32952)){
var statearr_32979_34812 = state_32969__$1;
(statearr_32979_34812[(1)] = (9));

} else {
var statearr_32980_34813 = state_32969__$1;
(statearr_32980_34813[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (3))){
var inst_32967 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32969__$1,inst_32967);
} else {
if((state_val_32970 === (12))){
var state_32969__$1 = state_32969;
var statearr_32982_34814 = state_32969__$1;
(statearr_32982_34814[(2)] = null);

(statearr_32982_34814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (2))){
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32969__$1,(4),ch);
} else {
if((state_val_32970 === (11))){
var inst_32946 = (state_32969[(7)]);
var inst_32956 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32969__$1,(8),inst_32956,inst_32946);
} else {
if((state_val_32970 === (9))){
var state_32969__$1 = state_32969;
var statearr_32983_34816 = state_32969__$1;
(statearr_32983_34816[(2)] = tc);

(statearr_32983_34816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (5))){
var inst_32949 = cljs.core.async.close_BANG_(tc);
var inst_32950 = cljs.core.async.close_BANG_(fc);
var state_32969__$1 = (function (){var statearr_32984 = state_32969;
(statearr_32984[(8)] = inst_32949);

return statearr_32984;
})();
var statearr_32985_34817 = state_32969__$1;
(statearr_32985_34817[(2)] = inst_32950);

(statearr_32985_34817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (14))){
var inst_32963 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32986_34818 = state_32969__$1;
(statearr_32986_34818[(2)] = inst_32963);

(statearr_32986_34818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (10))){
var state_32969__$1 = state_32969;
var statearr_32987_34819 = state_32969__$1;
(statearr_32987_34819[(2)] = fc);

(statearr_32987_34819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (8))){
var inst_32958 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
if(cljs.core.truth_(inst_32958)){
var statearr_32988_34821 = state_32969__$1;
(statearr_32988_34821[(1)] = (12));

} else {
var statearr_32989_34822 = state_32969__$1;
(statearr_32989_34822[(1)] = (13));

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
var cljs$core$async$state_machine__32391__auto__ = null;
var cljs$core$async$state_machine__32391__auto____0 = (function (){
var statearr_32990 = [null,null,null,null,null,null,null,null,null];
(statearr_32990[(0)] = cljs$core$async$state_machine__32391__auto__);

(statearr_32990[(1)] = (1));

return statearr_32990;
});
var cljs$core$async$state_machine__32391__auto____1 = (function (state_32969){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_32969);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e32991){var ex__32394__auto__ = e32991;
var statearr_32992_34823 = state_32969;
(statearr_32992_34823[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_32969[(4)]))){
var statearr_32993_34824 = state_32969;
(statearr_32993_34824[(1)] = cljs.core.first((state_32969[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34825 = state_32969;
state_32969 = G__34825;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$state_machine__32391__auto__ = function(state_32969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32391__auto____1.call(this,state_32969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32391__auto____0;
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32391__auto____1;
return cljs$core$async$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_32994 = f__32472__auto__();
(statearr_32994[(6)] = c__32471__auto___34806);

return statearr_32994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
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
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_33016){
var state_val_33017 = (state_33016[(1)]);
if((state_val_33017 === (7))){
var inst_33012 = (state_33016[(2)]);
var state_33016__$1 = state_33016;
var statearr_33018_34827 = state_33016__$1;
(statearr_33018_34827[(2)] = inst_33012);

(statearr_33018_34827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (1))){
var inst_32995 = init;
var inst_32996 = inst_32995;
var state_33016__$1 = (function (){var statearr_33019 = state_33016;
(statearr_33019[(7)] = inst_32996);

return statearr_33019;
})();
var statearr_33020_34828 = state_33016__$1;
(statearr_33020_34828[(2)] = null);

(statearr_33020_34828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (4))){
var inst_32999 = (state_33016[(8)]);
var inst_32999__$1 = (state_33016[(2)]);
var inst_33000 = (inst_32999__$1 == null);
var state_33016__$1 = (function (){var statearr_33021 = state_33016;
(statearr_33021[(8)] = inst_32999__$1);

return statearr_33021;
})();
if(cljs.core.truth_(inst_33000)){
var statearr_33022_34830 = state_33016__$1;
(statearr_33022_34830[(1)] = (5));

} else {
var statearr_33023_34831 = state_33016__$1;
(statearr_33023_34831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (6))){
var inst_32996 = (state_33016[(7)]);
var inst_32999 = (state_33016[(8)]);
var inst_33003 = (state_33016[(9)]);
var inst_33003__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32996,inst_32999) : f.call(null,inst_32996,inst_32999));
var inst_33004 = cljs.core.reduced_QMARK_(inst_33003__$1);
var state_33016__$1 = (function (){var statearr_33024 = state_33016;
(statearr_33024[(9)] = inst_33003__$1);

return statearr_33024;
})();
if(inst_33004){
var statearr_33025_34837 = state_33016__$1;
(statearr_33025_34837[(1)] = (8));

} else {
var statearr_33026_34838 = state_33016__$1;
(statearr_33026_34838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (3))){
var inst_33014 = (state_33016[(2)]);
var state_33016__$1 = state_33016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33016__$1,inst_33014);
} else {
if((state_val_33017 === (2))){
var state_33016__$1 = state_33016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33016__$1,(4),ch);
} else {
if((state_val_33017 === (9))){
var inst_33003 = (state_33016[(9)]);
var inst_32996 = inst_33003;
var state_33016__$1 = (function (){var statearr_33027 = state_33016;
(statearr_33027[(7)] = inst_32996);

return statearr_33027;
})();
var statearr_33028_34841 = state_33016__$1;
(statearr_33028_34841[(2)] = null);

(statearr_33028_34841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (5))){
var inst_32996 = (state_33016[(7)]);
var state_33016__$1 = state_33016;
var statearr_33029_34843 = state_33016__$1;
(statearr_33029_34843[(2)] = inst_32996);

(statearr_33029_34843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (10))){
var inst_33010 = (state_33016[(2)]);
var state_33016__$1 = state_33016;
var statearr_33030_34844 = state_33016__$1;
(statearr_33030_34844[(2)] = inst_33010);

(statearr_33030_34844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (8))){
var inst_33003 = (state_33016[(9)]);
var inst_33006 = cljs.core.deref(inst_33003);
var state_33016__$1 = state_33016;
var statearr_33031_34845 = state_33016__$1;
(statearr_33031_34845[(2)] = inst_33006);

(statearr_33031_34845[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32391__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32391__auto____0 = (function (){
var statearr_33032 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33032[(0)] = cljs$core$async$reduce_$_state_machine__32391__auto__);

(statearr_33032[(1)] = (1));

return statearr_33032;
});
var cljs$core$async$reduce_$_state_machine__32391__auto____1 = (function (state_33016){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_33016);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e33033){var ex__32394__auto__ = e33033;
var statearr_33034_34846 = state_33016;
(statearr_33034_34846[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_33016[(4)]))){
var statearr_33035_34847 = state_33016;
(statearr_33035_34847[(1)] = cljs.core.first((state_33016[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34849 = state_33016;
state_33016 = G__34849;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32391__auto__ = function(state_33016){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32391__auto____1.call(this,state_33016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32391__auto____0;
cljs$core$async$reduce_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32391__auto____1;
return cljs$core$async$reduce_$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_33036 = f__32472__auto__();
(statearr_33036[(6)] = c__32471__auto__);

return statearr_33036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_33042){
var state_val_33043 = (state_33042[(1)]);
if((state_val_33043 === (1))){
var inst_33037 = cljs.core.async.reduce(f__$1,init,ch);
var state_33042__$1 = state_33042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33042__$1,(2),inst_33037);
} else {
if((state_val_33043 === (2))){
var inst_33039 = (state_33042[(2)]);
var inst_33040 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33039) : f__$1.call(null,inst_33039));
var state_33042__$1 = state_33042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33042__$1,inst_33040);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32391__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32391__auto____0 = (function (){
var statearr_33044 = [null,null,null,null,null,null,null];
(statearr_33044[(0)] = cljs$core$async$transduce_$_state_machine__32391__auto__);

(statearr_33044[(1)] = (1));

return statearr_33044;
});
var cljs$core$async$transduce_$_state_machine__32391__auto____1 = (function (state_33042){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_33042);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e33045){var ex__32394__auto__ = e33045;
var statearr_33046_34854 = state_33042;
(statearr_33046_34854[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_33042[(4)]))){
var statearr_33047_34855 = state_33042;
(statearr_33047_34855[(1)] = cljs.core.first((state_33042[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34856 = state_33042;
state_33042 = G__34856;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32391__auto__ = function(state_33042){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32391__auto____1.call(this,state_33042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32391__auto____0;
cljs$core$async$transduce_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32391__auto____1;
return cljs$core$async$transduce_$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_33048 = f__32472__auto__();
(statearr_33048[(6)] = c__32471__auto__);

return statearr_33048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
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
var G__33054 = arguments.length;
switch (G__33054) {
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
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_33084){
var state_val_33085 = (state_33084[(1)]);
if((state_val_33085 === (7))){
var inst_33065 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
var statearr_33089_34859 = state_33084__$1;
(statearr_33089_34859[(2)] = inst_33065);

(statearr_33089_34859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (1))){
var inst_33059 = cljs.core.seq(coll);
var inst_33060 = inst_33059;
var state_33084__$1 = (function (){var statearr_33091 = state_33084;
(statearr_33091[(7)] = inst_33060);

return statearr_33091;
})();
var statearr_33092_34860 = state_33084__$1;
(statearr_33092_34860[(2)] = null);

(statearr_33092_34860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (4))){
var inst_33060 = (state_33084[(7)]);
var inst_33063 = cljs.core.first(inst_33060);
var state_33084__$1 = state_33084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33084__$1,(7),ch,inst_33063);
} else {
if((state_val_33085 === (13))){
var inst_33077 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
var statearr_33097_34862 = state_33084__$1;
(statearr_33097_34862[(2)] = inst_33077);

(statearr_33097_34862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (6))){
var inst_33068 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
if(cljs.core.truth_(inst_33068)){
var statearr_33098_34866 = state_33084__$1;
(statearr_33098_34866[(1)] = (8));

} else {
var statearr_33099_34867 = state_33084__$1;
(statearr_33099_34867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (3))){
var inst_33081 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33084__$1,inst_33081);
} else {
if((state_val_33085 === (12))){
var state_33084__$1 = state_33084;
var statearr_33103_34868 = state_33084__$1;
(statearr_33103_34868[(2)] = null);

(statearr_33103_34868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (2))){
var inst_33060 = (state_33084[(7)]);
var state_33084__$1 = state_33084;
if(cljs.core.truth_(inst_33060)){
var statearr_33104_34869 = state_33084__$1;
(statearr_33104_34869[(1)] = (4));

} else {
var statearr_33105_34870 = state_33084__$1;
(statearr_33105_34870[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (11))){
var inst_33074 = cljs.core.async.close_BANG_(ch);
var state_33084__$1 = state_33084;
var statearr_33107_34871 = state_33084__$1;
(statearr_33107_34871[(2)] = inst_33074);

(statearr_33107_34871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (9))){
var state_33084__$1 = state_33084;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33111_34872 = state_33084__$1;
(statearr_33111_34872[(1)] = (11));

} else {
var statearr_33112_34873 = state_33084__$1;
(statearr_33112_34873[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (5))){
var inst_33060 = (state_33084[(7)]);
var state_33084__$1 = state_33084;
var statearr_33113_34874 = state_33084__$1;
(statearr_33113_34874[(2)] = inst_33060);

(statearr_33113_34874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (10))){
var inst_33079 = (state_33084[(2)]);
var state_33084__$1 = state_33084;
var statearr_33114_34875 = state_33084__$1;
(statearr_33114_34875[(2)] = inst_33079);

(statearr_33114_34875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33085 === (8))){
var inst_33060 = (state_33084[(7)]);
var inst_33070 = cljs.core.next(inst_33060);
var inst_33060__$1 = inst_33070;
var state_33084__$1 = (function (){var statearr_33115 = state_33084;
(statearr_33115[(7)] = inst_33060__$1);

return statearr_33115;
})();
var statearr_33116_34876 = state_33084__$1;
(statearr_33116_34876[(2)] = null);

(statearr_33116_34876[(1)] = (2));


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
var cljs$core$async$state_machine__32391__auto__ = null;
var cljs$core$async$state_machine__32391__auto____0 = (function (){
var statearr_33117 = [null,null,null,null,null,null,null,null];
(statearr_33117[(0)] = cljs$core$async$state_machine__32391__auto__);

(statearr_33117[(1)] = (1));

return statearr_33117;
});
var cljs$core$async$state_machine__32391__auto____1 = (function (state_33084){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_33084);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e33118){var ex__32394__auto__ = e33118;
var statearr_33119_34878 = state_33084;
(statearr_33119_34878[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_33084[(4)]))){
var statearr_33120_34879 = state_33084;
(statearr_33120_34879[(1)] = cljs.core.first((state_33084[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34880 = state_33084;
state_33084 = G__34880;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$state_machine__32391__auto__ = function(state_33084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32391__auto____1.call(this,state_33084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32391__auto____0;
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32391__auto____1;
return cljs$core$async$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_33121 = f__32472__auto__();
(statearr_33121[(6)] = c__32471__auto__);

return statearr_33121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
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
var G__33123 = arguments.length;
switch (G__33123) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34885 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34885(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34887 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34887(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34890 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34890(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34894 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34894(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33136 = (function (ch,cs,meta33137){
this.ch = ch;
this.cs = cs;
this.meta33137 = meta33137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33138,meta33137__$1){
var self__ = this;
var _33138__$1 = this;
return (new cljs.core.async.t_cljs$core$async33136(self__.ch,self__.cs,meta33137__$1));
}));

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33138){
var self__ = this;
var _33138__$1 = this;
return self__.meta33137;
}));

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33137","meta33137",1256119667,null)], null);
}));

(cljs.core.async.t_cljs$core$async33136.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33136");

(cljs.core.async.t_cljs$core$async33136.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33136");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33136.
 */
cljs.core.async.__GT_t_cljs$core$async33136 = (function cljs$core$async$__GT_t_cljs$core$async33136(ch,cs,meta33137){
return (new cljs.core.async.t_cljs$core$async33136(ch,cs,meta33137));
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
var m = (new cljs.core.async.t_cljs$core$async33136(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32471__auto___34895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_33272){
var state_val_33273 = (state_33272[(1)]);
if((state_val_33273 === (7))){
var inst_33268 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33274_34896 = state_33272__$1;
(statearr_33274_34896[(2)] = inst_33268);

(statearr_33274_34896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (20))){
var inst_33173 = (state_33272[(7)]);
var inst_33185 = cljs.core.first(inst_33173);
var inst_33186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33185,(0),null);
var inst_33187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33185,(1),null);
var state_33272__$1 = (function (){var statearr_33275 = state_33272;
(statearr_33275[(8)] = inst_33186);

return statearr_33275;
})();
if(cljs.core.truth_(inst_33187)){
var statearr_33276_34897 = state_33272__$1;
(statearr_33276_34897[(1)] = (22));

} else {
var statearr_33277_34898 = state_33272__$1;
(statearr_33277_34898[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (27))){
var inst_33215 = (state_33272[(9)]);
var inst_33217 = (state_33272[(10)]);
var inst_33222 = (state_33272[(11)]);
var inst_33142 = (state_33272[(12)]);
var inst_33222__$1 = cljs.core._nth(inst_33215,inst_33217);
var inst_33223 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33222__$1,inst_33142,done);
var state_33272__$1 = (function (){var statearr_33278 = state_33272;
(statearr_33278[(11)] = inst_33222__$1);

return statearr_33278;
})();
if(cljs.core.truth_(inst_33223)){
var statearr_33279_34899 = state_33272__$1;
(statearr_33279_34899[(1)] = (30));

} else {
var statearr_33280_34900 = state_33272__$1;
(statearr_33280_34900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (1))){
var state_33272__$1 = state_33272;
var statearr_33281_34901 = state_33272__$1;
(statearr_33281_34901[(2)] = null);

(statearr_33281_34901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (24))){
var inst_33173 = (state_33272[(7)]);
var inst_33192 = (state_33272[(2)]);
var inst_33193 = cljs.core.next(inst_33173);
var inst_33151 = inst_33193;
var inst_33152 = null;
var inst_33153 = (0);
var inst_33154 = (0);
var state_33272__$1 = (function (){var statearr_33282 = state_33272;
(statearr_33282[(13)] = inst_33192);

(statearr_33282[(14)] = inst_33151);

(statearr_33282[(15)] = inst_33152);

(statearr_33282[(16)] = inst_33153);

(statearr_33282[(17)] = inst_33154);

return statearr_33282;
})();
var statearr_33283_34902 = state_33272__$1;
(statearr_33283_34902[(2)] = null);

(statearr_33283_34902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (39))){
var state_33272__$1 = state_33272;
var statearr_33287_34904 = state_33272__$1;
(statearr_33287_34904[(2)] = null);

(statearr_33287_34904[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (4))){
var inst_33142 = (state_33272[(12)]);
var inst_33142__$1 = (state_33272[(2)]);
var inst_33143 = (inst_33142__$1 == null);
var state_33272__$1 = (function (){var statearr_33288 = state_33272;
(statearr_33288[(12)] = inst_33142__$1);

return statearr_33288;
})();
if(cljs.core.truth_(inst_33143)){
var statearr_33289_34906 = state_33272__$1;
(statearr_33289_34906[(1)] = (5));

} else {
var statearr_33290_34907 = state_33272__$1;
(statearr_33290_34907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (15))){
var inst_33154 = (state_33272[(17)]);
var inst_33151 = (state_33272[(14)]);
var inst_33152 = (state_33272[(15)]);
var inst_33153 = (state_33272[(16)]);
var inst_33169 = (state_33272[(2)]);
var inst_33170 = (inst_33154 + (1));
var tmp33284 = inst_33153;
var tmp33285 = inst_33151;
var tmp33286 = inst_33152;
var inst_33151__$1 = tmp33285;
var inst_33152__$1 = tmp33286;
var inst_33153__$1 = tmp33284;
var inst_33154__$1 = inst_33170;
var state_33272__$1 = (function (){var statearr_33291 = state_33272;
(statearr_33291[(18)] = inst_33169);

(statearr_33291[(14)] = inst_33151__$1);

(statearr_33291[(15)] = inst_33152__$1);

(statearr_33291[(16)] = inst_33153__$1);

(statearr_33291[(17)] = inst_33154__$1);

return statearr_33291;
})();
var statearr_33292_34908 = state_33272__$1;
(statearr_33292_34908[(2)] = null);

(statearr_33292_34908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (21))){
var inst_33196 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33296_34909 = state_33272__$1;
(statearr_33296_34909[(2)] = inst_33196);

(statearr_33296_34909[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (31))){
var inst_33222 = (state_33272[(11)]);
var inst_33226 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33222);
var state_33272__$1 = state_33272;
var statearr_33297_34910 = state_33272__$1;
(statearr_33297_34910[(2)] = inst_33226);

(statearr_33297_34910[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (32))){
var inst_33217 = (state_33272[(10)]);
var inst_33214 = (state_33272[(19)]);
var inst_33215 = (state_33272[(9)]);
var inst_33216 = (state_33272[(20)]);
var inst_33228 = (state_33272[(2)]);
var inst_33229 = (inst_33217 + (1));
var tmp33293 = inst_33215;
var tmp33294 = inst_33216;
var tmp33295 = inst_33214;
var inst_33214__$1 = tmp33295;
var inst_33215__$1 = tmp33293;
var inst_33216__$1 = tmp33294;
var inst_33217__$1 = inst_33229;
var state_33272__$1 = (function (){var statearr_33298 = state_33272;
(statearr_33298[(21)] = inst_33228);

(statearr_33298[(19)] = inst_33214__$1);

(statearr_33298[(9)] = inst_33215__$1);

(statearr_33298[(20)] = inst_33216__$1);

(statearr_33298[(10)] = inst_33217__$1);

return statearr_33298;
})();
var statearr_33299_34912 = state_33272__$1;
(statearr_33299_34912[(2)] = null);

(statearr_33299_34912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (40))){
var inst_33241 = (state_33272[(22)]);
var inst_33245 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33241);
var state_33272__$1 = state_33272;
var statearr_33300_34913 = state_33272__$1;
(statearr_33300_34913[(2)] = inst_33245);

(statearr_33300_34913[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (33))){
var inst_33232 = (state_33272[(23)]);
var inst_33234 = cljs.core.chunked_seq_QMARK_(inst_33232);
var state_33272__$1 = state_33272;
if(inst_33234){
var statearr_33301_34914 = state_33272__$1;
(statearr_33301_34914[(1)] = (36));

} else {
var statearr_33302_34915 = state_33272__$1;
(statearr_33302_34915[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (13))){
var inst_33163 = (state_33272[(24)]);
var inst_33166 = cljs.core.async.close_BANG_(inst_33163);
var state_33272__$1 = state_33272;
var statearr_33303_34916 = state_33272__$1;
(statearr_33303_34916[(2)] = inst_33166);

(statearr_33303_34916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (22))){
var inst_33186 = (state_33272[(8)]);
var inst_33189 = cljs.core.async.close_BANG_(inst_33186);
var state_33272__$1 = state_33272;
var statearr_33304_34917 = state_33272__$1;
(statearr_33304_34917[(2)] = inst_33189);

(statearr_33304_34917[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (36))){
var inst_33232 = (state_33272[(23)]);
var inst_33236 = cljs.core.chunk_first(inst_33232);
var inst_33237 = cljs.core.chunk_rest(inst_33232);
var inst_33238 = cljs.core.count(inst_33236);
var inst_33214 = inst_33237;
var inst_33215 = inst_33236;
var inst_33216 = inst_33238;
var inst_33217 = (0);
var state_33272__$1 = (function (){var statearr_33305 = state_33272;
(statearr_33305[(19)] = inst_33214);

(statearr_33305[(9)] = inst_33215);

(statearr_33305[(20)] = inst_33216);

(statearr_33305[(10)] = inst_33217);

return statearr_33305;
})();
var statearr_33306_34918 = state_33272__$1;
(statearr_33306_34918[(2)] = null);

(statearr_33306_34918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (41))){
var inst_33232 = (state_33272[(23)]);
var inst_33247 = (state_33272[(2)]);
var inst_33248 = cljs.core.next(inst_33232);
var inst_33214 = inst_33248;
var inst_33215 = null;
var inst_33216 = (0);
var inst_33217 = (0);
var state_33272__$1 = (function (){var statearr_33307 = state_33272;
(statearr_33307[(25)] = inst_33247);

(statearr_33307[(19)] = inst_33214);

(statearr_33307[(9)] = inst_33215);

(statearr_33307[(20)] = inst_33216);

(statearr_33307[(10)] = inst_33217);

return statearr_33307;
})();
var statearr_33308_34919 = state_33272__$1;
(statearr_33308_34919[(2)] = null);

(statearr_33308_34919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (43))){
var state_33272__$1 = state_33272;
var statearr_33309_34920 = state_33272__$1;
(statearr_33309_34920[(2)] = null);

(statearr_33309_34920[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (29))){
var inst_33256 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33310_34921 = state_33272__$1;
(statearr_33310_34921[(2)] = inst_33256);

(statearr_33310_34921[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (44))){
var inst_33265 = (state_33272[(2)]);
var state_33272__$1 = (function (){var statearr_33311 = state_33272;
(statearr_33311[(26)] = inst_33265);

return statearr_33311;
})();
var statearr_33313_34922 = state_33272__$1;
(statearr_33313_34922[(2)] = null);

(statearr_33313_34922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (6))){
var inst_33206 = (state_33272[(27)]);
var inst_33205 = cljs.core.deref(cs);
var inst_33206__$1 = cljs.core.keys(inst_33205);
var inst_33207 = cljs.core.count(inst_33206__$1);
var inst_33208 = cljs.core.reset_BANG_(dctr,inst_33207);
var inst_33213 = cljs.core.seq(inst_33206__$1);
var inst_33214 = inst_33213;
var inst_33215 = null;
var inst_33216 = (0);
var inst_33217 = (0);
var state_33272__$1 = (function (){var statearr_33315 = state_33272;
(statearr_33315[(27)] = inst_33206__$1);

(statearr_33315[(28)] = inst_33208);

(statearr_33315[(19)] = inst_33214);

(statearr_33315[(9)] = inst_33215);

(statearr_33315[(20)] = inst_33216);

(statearr_33315[(10)] = inst_33217);

return statearr_33315;
})();
var statearr_33316_34924 = state_33272__$1;
(statearr_33316_34924[(2)] = null);

(statearr_33316_34924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (28))){
var inst_33214 = (state_33272[(19)]);
var inst_33232 = (state_33272[(23)]);
var inst_33232__$1 = cljs.core.seq(inst_33214);
var state_33272__$1 = (function (){var statearr_33317 = state_33272;
(statearr_33317[(23)] = inst_33232__$1);

return statearr_33317;
})();
if(inst_33232__$1){
var statearr_33318_34927 = state_33272__$1;
(statearr_33318_34927[(1)] = (33));

} else {
var statearr_33319_34928 = state_33272__$1;
(statearr_33319_34928[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (25))){
var inst_33217 = (state_33272[(10)]);
var inst_33216 = (state_33272[(20)]);
var inst_33219 = (inst_33217 < inst_33216);
var inst_33220 = inst_33219;
var state_33272__$1 = state_33272;
if(cljs.core.truth_(inst_33220)){
var statearr_33321_34929 = state_33272__$1;
(statearr_33321_34929[(1)] = (27));

} else {
var statearr_33322_34930 = state_33272__$1;
(statearr_33322_34930[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (34))){
var state_33272__$1 = state_33272;
var statearr_33324_34931 = state_33272__$1;
(statearr_33324_34931[(2)] = null);

(statearr_33324_34931[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (17))){
var state_33272__$1 = state_33272;
var statearr_33325_34932 = state_33272__$1;
(statearr_33325_34932[(2)] = null);

(statearr_33325_34932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (3))){
var inst_33270 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33272__$1,inst_33270);
} else {
if((state_val_33273 === (12))){
var inst_33201 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33326_34933 = state_33272__$1;
(statearr_33326_34933[(2)] = inst_33201);

(statearr_33326_34933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (2))){
var state_33272__$1 = state_33272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33272__$1,(4),ch);
} else {
if((state_val_33273 === (23))){
var state_33272__$1 = state_33272;
var statearr_33327_34934 = state_33272__$1;
(statearr_33327_34934[(2)] = null);

(statearr_33327_34934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (35))){
var inst_33254 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33328_34935 = state_33272__$1;
(statearr_33328_34935[(2)] = inst_33254);

(statearr_33328_34935[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (19))){
var inst_33173 = (state_33272[(7)]);
var inst_33177 = cljs.core.chunk_first(inst_33173);
var inst_33178 = cljs.core.chunk_rest(inst_33173);
var inst_33179 = cljs.core.count(inst_33177);
var inst_33151 = inst_33178;
var inst_33152 = inst_33177;
var inst_33153 = inst_33179;
var inst_33154 = (0);
var state_33272__$1 = (function (){var statearr_33329 = state_33272;
(statearr_33329[(14)] = inst_33151);

(statearr_33329[(15)] = inst_33152);

(statearr_33329[(16)] = inst_33153);

(statearr_33329[(17)] = inst_33154);

return statearr_33329;
})();
var statearr_33330_34936 = state_33272__$1;
(statearr_33330_34936[(2)] = null);

(statearr_33330_34936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (11))){
var inst_33151 = (state_33272[(14)]);
var inst_33173 = (state_33272[(7)]);
var inst_33173__$1 = cljs.core.seq(inst_33151);
var state_33272__$1 = (function (){var statearr_33331 = state_33272;
(statearr_33331[(7)] = inst_33173__$1);

return statearr_33331;
})();
if(inst_33173__$1){
var statearr_33332_34941 = state_33272__$1;
(statearr_33332_34941[(1)] = (16));

} else {
var statearr_33333_34942 = state_33272__$1;
(statearr_33333_34942[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (9))){
var inst_33203 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33334_34943 = state_33272__$1;
(statearr_33334_34943[(2)] = inst_33203);

(statearr_33334_34943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (5))){
var inst_33149 = cljs.core.deref(cs);
var inst_33150 = cljs.core.seq(inst_33149);
var inst_33151 = inst_33150;
var inst_33152 = null;
var inst_33153 = (0);
var inst_33154 = (0);
var state_33272__$1 = (function (){var statearr_33336 = state_33272;
(statearr_33336[(14)] = inst_33151);

(statearr_33336[(15)] = inst_33152);

(statearr_33336[(16)] = inst_33153);

(statearr_33336[(17)] = inst_33154);

return statearr_33336;
})();
var statearr_33337_34944 = state_33272__$1;
(statearr_33337_34944[(2)] = null);

(statearr_33337_34944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (14))){
var state_33272__$1 = state_33272;
var statearr_33338_34945 = state_33272__$1;
(statearr_33338_34945[(2)] = null);

(statearr_33338_34945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (45))){
var inst_33262 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33339_34949 = state_33272__$1;
(statearr_33339_34949[(2)] = inst_33262);

(statearr_33339_34949[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (26))){
var inst_33206 = (state_33272[(27)]);
var inst_33258 = (state_33272[(2)]);
var inst_33259 = cljs.core.seq(inst_33206);
var state_33272__$1 = (function (){var statearr_33340 = state_33272;
(statearr_33340[(29)] = inst_33258);

return statearr_33340;
})();
if(inst_33259){
var statearr_33341_34950 = state_33272__$1;
(statearr_33341_34950[(1)] = (42));

} else {
var statearr_33342_34951 = state_33272__$1;
(statearr_33342_34951[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (16))){
var inst_33173 = (state_33272[(7)]);
var inst_33175 = cljs.core.chunked_seq_QMARK_(inst_33173);
var state_33272__$1 = state_33272;
if(inst_33175){
var statearr_33343_34955 = state_33272__$1;
(statearr_33343_34955[(1)] = (19));

} else {
var statearr_33344_34956 = state_33272__$1;
(statearr_33344_34956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (38))){
var inst_33251 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33347_34957 = state_33272__$1;
(statearr_33347_34957[(2)] = inst_33251);

(statearr_33347_34957[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (30))){
var state_33272__$1 = state_33272;
var statearr_33348_34958 = state_33272__$1;
(statearr_33348_34958[(2)] = null);

(statearr_33348_34958[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (10))){
var inst_33152 = (state_33272[(15)]);
var inst_33154 = (state_33272[(17)]);
var inst_33162 = cljs.core._nth(inst_33152,inst_33154);
var inst_33163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33162,(0),null);
var inst_33164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33162,(1),null);
var state_33272__$1 = (function (){var statearr_33351 = state_33272;
(statearr_33351[(24)] = inst_33163);

return statearr_33351;
})();
if(cljs.core.truth_(inst_33164)){
var statearr_33352_34963 = state_33272__$1;
(statearr_33352_34963[(1)] = (13));

} else {
var statearr_33353_34964 = state_33272__$1;
(statearr_33353_34964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (18))){
var inst_33199 = (state_33272[(2)]);
var state_33272__$1 = state_33272;
var statearr_33354_34965 = state_33272__$1;
(statearr_33354_34965[(2)] = inst_33199);

(statearr_33354_34965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (42))){
var state_33272__$1 = state_33272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33272__$1,(45),dchan);
} else {
if((state_val_33273 === (37))){
var inst_33232 = (state_33272[(23)]);
var inst_33241 = (state_33272[(22)]);
var inst_33142 = (state_33272[(12)]);
var inst_33241__$1 = cljs.core.first(inst_33232);
var inst_33242 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33241__$1,inst_33142,done);
var state_33272__$1 = (function (){var statearr_33355 = state_33272;
(statearr_33355[(22)] = inst_33241__$1);

return statearr_33355;
})();
if(cljs.core.truth_(inst_33242)){
var statearr_33356_34970 = state_33272__$1;
(statearr_33356_34970[(1)] = (39));

} else {
var statearr_33357_34971 = state_33272__$1;
(statearr_33357_34971[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33273 === (8))){
var inst_33154 = (state_33272[(17)]);
var inst_33153 = (state_33272[(16)]);
var inst_33156 = (inst_33154 < inst_33153);
var inst_33157 = inst_33156;
var state_33272__$1 = state_33272;
if(cljs.core.truth_(inst_33157)){
var statearr_33358_34975 = state_33272__$1;
(statearr_33358_34975[(1)] = (10));

} else {
var statearr_33359_34976 = state_33272__$1;
(statearr_33359_34976[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32391__auto__ = null;
var cljs$core$async$mult_$_state_machine__32391__auto____0 = (function (){
var statearr_33360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33360[(0)] = cljs$core$async$mult_$_state_machine__32391__auto__);

(statearr_33360[(1)] = (1));

return statearr_33360;
});
var cljs$core$async$mult_$_state_machine__32391__auto____1 = (function (state_33272){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_33272);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e33361){var ex__32394__auto__ = e33361;
var statearr_33362_34983 = state_33272;
(statearr_33362_34983[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_33272[(4)]))){
var statearr_33363_34984 = state_33272;
(statearr_33363_34984[(1)] = cljs.core.first((state_33272[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34985 = state_33272;
state_33272 = G__34985;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32391__auto__ = function(state_33272){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32391__auto____1.call(this,state_33272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32391__auto____0;
cljs$core$async$mult_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32391__auto____1;
return cljs$core$async$mult_$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_33364 = f__32472__auto__();
(statearr_33364[(6)] = c__32471__auto___34895);

return statearr_33364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
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
var G__33366 = arguments.length;
switch (G__33366) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34987 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34987(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34988 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34988(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34989 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34989(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34990 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34990(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34991 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34991(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34992 = arguments.length;
var i__5750__auto___34993 = (0);
while(true){
if((i__5750__auto___34993 < len__5749__auto___34992)){
args__5755__auto__.push((arguments[i__5750__auto___34993]));

var G__34994 = (i__5750__auto___34993 + (1));
i__5750__auto___34993 = G__34994;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33371){
var map__33372 = p__33371;
var map__33372__$1 = cljs.core.__destructure_map(map__33372);
var opts = map__33372__$1;
var statearr_33373_34996 = state;
(statearr_33373_34996[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33374_34997 = state;
(statearr_33374_34997[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33375_34998 = state;
(statearr_33375_34998[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33367){
var G__33368 = cljs.core.first(seq33367);
var seq33367__$1 = cljs.core.next(seq33367);
var G__33369 = cljs.core.first(seq33367__$1);
var seq33367__$2 = cljs.core.next(seq33367__$1);
var G__33370 = cljs.core.first(seq33367__$2);
var seq33367__$3 = cljs.core.next(seq33367__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33368,G__33369,G__33370,seq33367__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33380 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33381){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33381 = meta33381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33382,meta33381__$1){
var self__ = this;
var _33382__$1 = this;
return (new cljs.core.async.t_cljs$core$async33380(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33381__$1));
}));

(cljs.core.async.t_cljs$core$async33380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33382){
var self__ = this;
var _33382__$1 = this;
return self__.meta33381;
}));

(cljs.core.async.t_cljs$core$async33380.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33380.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33380.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33380.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33380.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33380.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33380.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33380.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33381","meta33381",2101290147,null)], null);
}));

(cljs.core.async.t_cljs$core$async33380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33380");

(cljs.core.async.t_cljs$core$async33380.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33380.
 */
cljs.core.async.__GT_t_cljs$core$async33380 = (function cljs$core$async$__GT_t_cljs$core$async33380(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33381){
return (new cljs.core.async.t_cljs$core$async33380(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33381));
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
var m = (new cljs.core.async.t_cljs$core$async33380(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32471__auto___35006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_33470){
var state_val_33471 = (state_33470[(1)]);
if((state_val_33471 === (7))){
var inst_33426 = (state_33470[(2)]);
var state_33470__$1 = state_33470;
if(cljs.core.truth_(inst_33426)){
var statearr_33475_35007 = state_33470__$1;
(statearr_33475_35007[(1)] = (8));

} else {
var statearr_33476_35008 = state_33470__$1;
(statearr_33476_35008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (20))){
var inst_33418 = (state_33470[(7)]);
var state_33470__$1 = state_33470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33470__$1,(23),out,inst_33418);
} else {
if((state_val_33471 === (1))){
var inst_33398 = calc_state();
var inst_33399 = cljs.core.__destructure_map(inst_33398);
var inst_33400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33399,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33399,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33399,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33403 = inst_33398;
var state_33470__$1 = (function (){var statearr_33480 = state_33470;
(statearr_33480[(8)] = inst_33400);

(statearr_33480[(9)] = inst_33401);

(statearr_33480[(10)] = inst_33402);

(statearr_33480[(11)] = inst_33403);

return statearr_33480;
})();
var statearr_33483_35009 = state_33470__$1;
(statearr_33483_35009[(2)] = null);

(statearr_33483_35009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (24))){
var inst_33406 = (state_33470[(12)]);
var inst_33403 = inst_33406;
var state_33470__$1 = (function (){var statearr_33484 = state_33470;
(statearr_33484[(11)] = inst_33403);

return statearr_33484;
})();
var statearr_33485_35011 = state_33470__$1;
(statearr_33485_35011[(2)] = null);

(statearr_33485_35011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (4))){
var inst_33418 = (state_33470[(7)]);
var inst_33421 = (state_33470[(13)]);
var inst_33416 = (state_33470[(2)]);
var inst_33418__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33416,(0),null);
var inst_33419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33416,(1),null);
var inst_33421__$1 = (inst_33418__$1 == null);
var state_33470__$1 = (function (){var statearr_33487 = state_33470;
(statearr_33487[(7)] = inst_33418__$1);

(statearr_33487[(14)] = inst_33419);

(statearr_33487[(13)] = inst_33421__$1);

return statearr_33487;
})();
if(cljs.core.truth_(inst_33421__$1)){
var statearr_33491_35013 = state_33470__$1;
(statearr_33491_35013[(1)] = (5));

} else {
var statearr_33492_35014 = state_33470__$1;
(statearr_33492_35014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (15))){
var inst_33407 = (state_33470[(15)]);
var inst_33440 = (state_33470[(16)]);
var inst_33440__$1 = cljs.core.empty_QMARK_(inst_33407);
var state_33470__$1 = (function (){var statearr_33493 = state_33470;
(statearr_33493[(16)] = inst_33440__$1);

return statearr_33493;
})();
if(inst_33440__$1){
var statearr_33495_35015 = state_33470__$1;
(statearr_33495_35015[(1)] = (17));

} else {
var statearr_33496_35016 = state_33470__$1;
(statearr_33496_35016[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (21))){
var inst_33406 = (state_33470[(12)]);
var inst_33403 = inst_33406;
var state_33470__$1 = (function (){var statearr_33497 = state_33470;
(statearr_33497[(11)] = inst_33403);

return statearr_33497;
})();
var statearr_33498_35017 = state_33470__$1;
(statearr_33498_35017[(2)] = null);

(statearr_33498_35017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (13))){
var inst_33433 = (state_33470[(2)]);
var inst_33434 = calc_state();
var inst_33403 = inst_33434;
var state_33470__$1 = (function (){var statearr_33499 = state_33470;
(statearr_33499[(17)] = inst_33433);

(statearr_33499[(11)] = inst_33403);

return statearr_33499;
})();
var statearr_33500_35021 = state_33470__$1;
(statearr_33500_35021[(2)] = null);

(statearr_33500_35021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (22))){
var inst_33464 = (state_33470[(2)]);
var state_33470__$1 = state_33470;
var statearr_33501_35022 = state_33470__$1;
(statearr_33501_35022[(2)] = inst_33464);

(statearr_33501_35022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (6))){
var inst_33419 = (state_33470[(14)]);
var inst_33424 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33419,change);
var state_33470__$1 = state_33470;
var statearr_33502_35023 = state_33470__$1;
(statearr_33502_35023[(2)] = inst_33424);

(statearr_33502_35023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (25))){
var state_33470__$1 = state_33470;
var statearr_33503_35024 = state_33470__$1;
(statearr_33503_35024[(2)] = null);

(statearr_33503_35024[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (17))){
var inst_33408 = (state_33470[(18)]);
var inst_33419 = (state_33470[(14)]);
var inst_33442 = (inst_33408.cljs$core$IFn$_invoke$arity$1 ? inst_33408.cljs$core$IFn$_invoke$arity$1(inst_33419) : inst_33408.call(null,inst_33419));
var inst_33443 = cljs.core.not(inst_33442);
var state_33470__$1 = state_33470;
var statearr_33505_35025 = state_33470__$1;
(statearr_33505_35025[(2)] = inst_33443);

(statearr_33505_35025[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (3))){
var inst_33468 = (state_33470[(2)]);
var state_33470__$1 = state_33470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33470__$1,inst_33468);
} else {
if((state_val_33471 === (12))){
var state_33470__$1 = state_33470;
var statearr_33508_35026 = state_33470__$1;
(statearr_33508_35026[(2)] = null);

(statearr_33508_35026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (2))){
var inst_33403 = (state_33470[(11)]);
var inst_33406 = (state_33470[(12)]);
var inst_33406__$1 = cljs.core.__destructure_map(inst_33403);
var inst_33407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33406__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33406__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33406__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33470__$1 = (function (){var statearr_33509 = state_33470;
(statearr_33509[(12)] = inst_33406__$1);

(statearr_33509[(15)] = inst_33407);

(statearr_33509[(18)] = inst_33408);

return statearr_33509;
})();
return cljs.core.async.ioc_alts_BANG_(state_33470__$1,(4),inst_33409);
} else {
if((state_val_33471 === (23))){
var inst_33452 = (state_33470[(2)]);
var state_33470__$1 = state_33470;
if(cljs.core.truth_(inst_33452)){
var statearr_33510_35029 = state_33470__$1;
(statearr_33510_35029[(1)] = (24));

} else {
var statearr_33511_35030 = state_33470__$1;
(statearr_33511_35030[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (19))){
var inst_33446 = (state_33470[(2)]);
var state_33470__$1 = state_33470;
var statearr_33512_35031 = state_33470__$1;
(statearr_33512_35031[(2)] = inst_33446);

(statearr_33512_35031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (11))){
var inst_33419 = (state_33470[(14)]);
var inst_33430 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33419);
var state_33470__$1 = state_33470;
var statearr_33513_35032 = state_33470__$1;
(statearr_33513_35032[(2)] = inst_33430);

(statearr_33513_35032[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (9))){
var inst_33407 = (state_33470[(15)]);
var inst_33419 = (state_33470[(14)]);
var inst_33437 = (state_33470[(19)]);
var inst_33437__$1 = (inst_33407.cljs$core$IFn$_invoke$arity$1 ? inst_33407.cljs$core$IFn$_invoke$arity$1(inst_33419) : inst_33407.call(null,inst_33419));
var state_33470__$1 = (function (){var statearr_33514 = state_33470;
(statearr_33514[(19)] = inst_33437__$1);

return statearr_33514;
})();
if(cljs.core.truth_(inst_33437__$1)){
var statearr_33515_35033 = state_33470__$1;
(statearr_33515_35033[(1)] = (14));

} else {
var statearr_33516_35034 = state_33470__$1;
(statearr_33516_35034[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (5))){
var inst_33421 = (state_33470[(13)]);
var state_33470__$1 = state_33470;
var statearr_33517_35036 = state_33470__$1;
(statearr_33517_35036[(2)] = inst_33421);

(statearr_33517_35036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (14))){
var inst_33437 = (state_33470[(19)]);
var state_33470__$1 = state_33470;
var statearr_33523_35037 = state_33470__$1;
(statearr_33523_35037[(2)] = inst_33437);

(statearr_33523_35037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (26))){
var inst_33460 = (state_33470[(2)]);
var state_33470__$1 = state_33470;
var statearr_33524_35038 = state_33470__$1;
(statearr_33524_35038[(2)] = inst_33460);

(statearr_33524_35038[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (16))){
var inst_33448 = (state_33470[(2)]);
var state_33470__$1 = state_33470;
if(cljs.core.truth_(inst_33448)){
var statearr_33528_35039 = state_33470__$1;
(statearr_33528_35039[(1)] = (20));

} else {
var statearr_33529_35040 = state_33470__$1;
(statearr_33529_35040[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (10))){
var inst_33466 = (state_33470[(2)]);
var state_33470__$1 = state_33470;
var statearr_33532_35041 = state_33470__$1;
(statearr_33532_35041[(2)] = inst_33466);

(statearr_33532_35041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (18))){
var inst_33440 = (state_33470[(16)]);
var state_33470__$1 = state_33470;
var statearr_33534_35042 = state_33470__$1;
(statearr_33534_35042[(2)] = inst_33440);

(statearr_33534_35042[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33471 === (8))){
var inst_33418 = (state_33470[(7)]);
var inst_33428 = (inst_33418 == null);
var state_33470__$1 = state_33470;
if(cljs.core.truth_(inst_33428)){
var statearr_33535_35043 = state_33470__$1;
(statearr_33535_35043[(1)] = (11));

} else {
var statearr_33536_35044 = state_33470__$1;
(statearr_33536_35044[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32391__auto__ = null;
var cljs$core$async$mix_$_state_machine__32391__auto____0 = (function (){
var statearr_33538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33538[(0)] = cljs$core$async$mix_$_state_machine__32391__auto__);

(statearr_33538[(1)] = (1));

return statearr_33538;
});
var cljs$core$async$mix_$_state_machine__32391__auto____1 = (function (state_33470){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_33470);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e33540){var ex__32394__auto__ = e33540;
var statearr_33541_35045 = state_33470;
(statearr_33541_35045[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_33470[(4)]))){
var statearr_33542_35046 = state_33470;
(statearr_33542_35046[(1)] = cljs.core.first((state_33470[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35047 = state_33470;
state_33470 = G__35047;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32391__auto__ = function(state_33470){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32391__auto____1.call(this,state_33470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32391__auto____0;
cljs$core$async$mix_$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32391__auto____1;
return cljs$core$async$mix_$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_33546 = f__32472__auto__();
(statearr_33546[(6)] = c__32471__auto___35006);

return statearr_33546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35048 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35048(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35049 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35049(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35051 = (function() {
var G__35052 = null;
var G__35052__1 = (function (p){
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
var G__35052__2 = (function (p,v){
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
G__35052 = function(p,v){
switch(arguments.length){
case 1:
return G__35052__1.call(this,p);
case 2:
return G__35052__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35052.cljs$core$IFn$_invoke$arity$1 = G__35052__1;
G__35052.cljs$core$IFn$_invoke$arity$2 = G__35052__2;
return G__35052;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33571 = arguments.length;
switch (G__33571) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35051(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35051(p,v);
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
cljs.core.async.t_cljs$core$async33584 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33585){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33585 = meta33585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33586,meta33585__$1){
var self__ = this;
var _33586__$1 = this;
return (new cljs.core.async.t_cljs$core$async33584(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33585__$1));
}));

(cljs.core.async.t_cljs$core$async33584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33586){
var self__ = this;
var _33586__$1 = this;
return self__.meta33585;
}));

(cljs.core.async.t_cljs$core$async33584.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33584.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33584.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33584.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33584.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33584.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33584.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33585","meta33585",-1571462250,null)], null);
}));

(cljs.core.async.t_cljs$core$async33584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33584");

(cljs.core.async.t_cljs$core$async33584.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33584.
 */
cljs.core.async.__GT_t_cljs$core$async33584 = (function cljs$core$async$__GT_t_cljs$core$async33584(ch,topic_fn,buf_fn,mults,ensure_mult,meta33585){
return (new cljs.core.async.t_cljs$core$async33584(ch,topic_fn,buf_fn,mults,ensure_mult,meta33585));
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
var G__33579 = arguments.length;
switch (G__33579) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33576_SHARP_){
if(cljs.core.truth_((p1__33576_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33576_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33576_SHARP_.call(null,topic)))){
return p1__33576_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33576_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33584(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32471__auto___35057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_33677){
var state_val_33678 = (state_33677[(1)]);
if((state_val_33678 === (7))){
var inst_33670 = (state_33677[(2)]);
var state_33677__$1 = state_33677;
var statearr_33679_35058 = state_33677__$1;
(statearr_33679_35058[(2)] = inst_33670);

(statearr_33679_35058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (20))){
var state_33677__$1 = state_33677;
var statearr_33681_35059 = state_33677__$1;
(statearr_33681_35059[(2)] = null);

(statearr_33681_35059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (1))){
var state_33677__$1 = state_33677;
var statearr_33685_35061 = state_33677__$1;
(statearr_33685_35061[(2)] = null);

(statearr_33685_35061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (24))){
var inst_33650 = (state_33677[(7)]);
var inst_33661 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33650);
var state_33677__$1 = state_33677;
var statearr_33686_35062 = state_33677__$1;
(statearr_33686_35062[(2)] = inst_33661);

(statearr_33686_35062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (4))){
var inst_33600 = (state_33677[(8)]);
var inst_33600__$1 = (state_33677[(2)]);
var inst_33601 = (inst_33600__$1 == null);
var state_33677__$1 = (function (){var statearr_33691 = state_33677;
(statearr_33691[(8)] = inst_33600__$1);

return statearr_33691;
})();
if(cljs.core.truth_(inst_33601)){
var statearr_33692_35063 = state_33677__$1;
(statearr_33692_35063[(1)] = (5));

} else {
var statearr_33693_35064 = state_33677__$1;
(statearr_33693_35064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (15))){
var inst_33644 = (state_33677[(2)]);
var state_33677__$1 = state_33677;
var statearr_33694_35065 = state_33677__$1;
(statearr_33694_35065[(2)] = inst_33644);

(statearr_33694_35065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (21))){
var inst_33667 = (state_33677[(2)]);
var state_33677__$1 = (function (){var statearr_33696 = state_33677;
(statearr_33696[(9)] = inst_33667);

return statearr_33696;
})();
var statearr_33697_35066 = state_33677__$1;
(statearr_33697_35066[(2)] = null);

(statearr_33697_35066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (13))){
var inst_33626 = (state_33677[(10)]);
var inst_33628 = cljs.core.chunked_seq_QMARK_(inst_33626);
var state_33677__$1 = state_33677;
if(inst_33628){
var statearr_33699_35067 = state_33677__$1;
(statearr_33699_35067[(1)] = (16));

} else {
var statearr_33700_35068 = state_33677__$1;
(statearr_33700_35068[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (22))){
var inst_33658 = (state_33677[(2)]);
var state_33677__$1 = state_33677;
if(cljs.core.truth_(inst_33658)){
var statearr_33701_35069 = state_33677__$1;
(statearr_33701_35069[(1)] = (23));

} else {
var statearr_33702_35070 = state_33677__$1;
(statearr_33702_35070[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (6))){
var inst_33600 = (state_33677[(8)]);
var inst_33650 = (state_33677[(7)]);
var inst_33652 = (state_33677[(11)]);
var inst_33650__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33600) : topic_fn.call(null,inst_33600));
var inst_33651 = cljs.core.deref(mults);
var inst_33652__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33651,inst_33650__$1);
var state_33677__$1 = (function (){var statearr_33709 = state_33677;
(statearr_33709[(7)] = inst_33650__$1);

(statearr_33709[(11)] = inst_33652__$1);

return statearr_33709;
})();
if(cljs.core.truth_(inst_33652__$1)){
var statearr_33711_35071 = state_33677__$1;
(statearr_33711_35071[(1)] = (19));

} else {
var statearr_33712_35072 = state_33677__$1;
(statearr_33712_35072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (25))){
var inst_33663 = (state_33677[(2)]);
var state_33677__$1 = state_33677;
var statearr_33714_35073 = state_33677__$1;
(statearr_33714_35073[(2)] = inst_33663);

(statearr_33714_35073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (17))){
var inst_33626 = (state_33677[(10)]);
var inst_33635 = cljs.core.first(inst_33626);
var inst_33636 = cljs.core.async.muxch_STAR_(inst_33635);
var inst_33637 = cljs.core.async.close_BANG_(inst_33636);
var inst_33638 = cljs.core.next(inst_33626);
var inst_33610 = inst_33638;
var inst_33611 = null;
var inst_33612 = (0);
var inst_33613 = (0);
var state_33677__$1 = (function (){var statearr_33716 = state_33677;
(statearr_33716[(12)] = inst_33637);

(statearr_33716[(13)] = inst_33610);

(statearr_33716[(14)] = inst_33611);

(statearr_33716[(15)] = inst_33612);

(statearr_33716[(16)] = inst_33613);

return statearr_33716;
})();
var statearr_33717_35074 = state_33677__$1;
(statearr_33717_35074[(2)] = null);

(statearr_33717_35074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (3))){
var inst_33672 = (state_33677[(2)]);
var state_33677__$1 = state_33677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33677__$1,inst_33672);
} else {
if((state_val_33678 === (12))){
var inst_33646 = (state_33677[(2)]);
var state_33677__$1 = state_33677;
var statearr_33722_35075 = state_33677__$1;
(statearr_33722_35075[(2)] = inst_33646);

(statearr_33722_35075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (2))){
var state_33677__$1 = state_33677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33677__$1,(4),ch);
} else {
if((state_val_33678 === (23))){
var state_33677__$1 = state_33677;
var statearr_33730_35076 = state_33677__$1;
(statearr_33730_35076[(2)] = null);

(statearr_33730_35076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (19))){
var inst_33652 = (state_33677[(11)]);
var inst_33600 = (state_33677[(8)]);
var inst_33656 = cljs.core.async.muxch_STAR_(inst_33652);
var state_33677__$1 = state_33677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33677__$1,(22),inst_33656,inst_33600);
} else {
if((state_val_33678 === (11))){
var inst_33610 = (state_33677[(13)]);
var inst_33626 = (state_33677[(10)]);
var inst_33626__$1 = cljs.core.seq(inst_33610);
var state_33677__$1 = (function (){var statearr_33738 = state_33677;
(statearr_33738[(10)] = inst_33626__$1);

return statearr_33738;
})();
if(inst_33626__$1){
var statearr_33740_35077 = state_33677__$1;
(statearr_33740_35077[(1)] = (13));

} else {
var statearr_33741_35078 = state_33677__$1;
(statearr_33741_35078[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (9))){
var inst_33648 = (state_33677[(2)]);
var state_33677__$1 = state_33677;
var statearr_33744_35079 = state_33677__$1;
(statearr_33744_35079[(2)] = inst_33648);

(statearr_33744_35079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (5))){
var inst_33607 = cljs.core.deref(mults);
var inst_33608 = cljs.core.vals(inst_33607);
var inst_33609 = cljs.core.seq(inst_33608);
var inst_33610 = inst_33609;
var inst_33611 = null;
var inst_33612 = (0);
var inst_33613 = (0);
var state_33677__$1 = (function (){var statearr_33748 = state_33677;
(statearr_33748[(13)] = inst_33610);

(statearr_33748[(14)] = inst_33611);

(statearr_33748[(15)] = inst_33612);

(statearr_33748[(16)] = inst_33613);

return statearr_33748;
})();
var statearr_33749_35080 = state_33677__$1;
(statearr_33749_35080[(2)] = null);

(statearr_33749_35080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (14))){
var state_33677__$1 = state_33677;
var statearr_33754_35081 = state_33677__$1;
(statearr_33754_35081[(2)] = null);

(statearr_33754_35081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (16))){
var inst_33626 = (state_33677[(10)]);
var inst_33630 = cljs.core.chunk_first(inst_33626);
var inst_33631 = cljs.core.chunk_rest(inst_33626);
var inst_33632 = cljs.core.count(inst_33630);
var inst_33610 = inst_33631;
var inst_33611 = inst_33630;
var inst_33612 = inst_33632;
var inst_33613 = (0);
var state_33677__$1 = (function (){var statearr_33755 = state_33677;
(statearr_33755[(13)] = inst_33610);

(statearr_33755[(14)] = inst_33611);

(statearr_33755[(15)] = inst_33612);

(statearr_33755[(16)] = inst_33613);

return statearr_33755;
})();
var statearr_33757_35082 = state_33677__$1;
(statearr_33757_35082[(2)] = null);

(statearr_33757_35082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (10))){
var inst_33611 = (state_33677[(14)]);
var inst_33613 = (state_33677[(16)]);
var inst_33610 = (state_33677[(13)]);
var inst_33612 = (state_33677[(15)]);
var inst_33618 = cljs.core._nth(inst_33611,inst_33613);
var inst_33619 = cljs.core.async.muxch_STAR_(inst_33618);
var inst_33620 = cljs.core.async.close_BANG_(inst_33619);
var inst_33622 = (inst_33613 + (1));
var tmp33750 = inst_33610;
var tmp33751 = inst_33611;
var tmp33752 = inst_33612;
var inst_33610__$1 = tmp33750;
var inst_33611__$1 = tmp33751;
var inst_33612__$1 = tmp33752;
var inst_33613__$1 = inst_33622;
var state_33677__$1 = (function (){var statearr_33761 = state_33677;
(statearr_33761[(17)] = inst_33620);

(statearr_33761[(13)] = inst_33610__$1);

(statearr_33761[(14)] = inst_33611__$1);

(statearr_33761[(15)] = inst_33612__$1);

(statearr_33761[(16)] = inst_33613__$1);

return statearr_33761;
})();
var statearr_33764_35083 = state_33677__$1;
(statearr_33764_35083[(2)] = null);

(statearr_33764_35083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (18))){
var inst_33641 = (state_33677[(2)]);
var state_33677__$1 = state_33677;
var statearr_33767_35084 = state_33677__$1;
(statearr_33767_35084[(2)] = inst_33641);

(statearr_33767_35084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (8))){
var inst_33613 = (state_33677[(16)]);
var inst_33612 = (state_33677[(15)]);
var inst_33615 = (inst_33613 < inst_33612);
var inst_33616 = inst_33615;
var state_33677__$1 = state_33677;
if(cljs.core.truth_(inst_33616)){
var statearr_33768_35085 = state_33677__$1;
(statearr_33768_35085[(1)] = (10));

} else {
var statearr_33769_35089 = state_33677__$1;
(statearr_33769_35089[(1)] = (11));

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
var cljs$core$async$state_machine__32391__auto__ = null;
var cljs$core$async$state_machine__32391__auto____0 = (function (){
var statearr_33773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33773[(0)] = cljs$core$async$state_machine__32391__auto__);

(statearr_33773[(1)] = (1));

return statearr_33773;
});
var cljs$core$async$state_machine__32391__auto____1 = (function (state_33677){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_33677);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e33775){var ex__32394__auto__ = e33775;
var statearr_33776_35090 = state_33677;
(statearr_33776_35090[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_33677[(4)]))){
var statearr_33777_35091 = state_33677;
(statearr_33777_35091[(1)] = cljs.core.first((state_33677[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35092 = state_33677;
state_33677 = G__35092;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$state_machine__32391__auto__ = function(state_33677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32391__auto____1.call(this,state_33677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32391__auto____0;
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32391__auto____1;
return cljs$core$async$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_33778 = f__32472__auto__();
(statearr_33778[(6)] = c__32471__auto___35057);

return statearr_33778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
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
var G__33783 = arguments.length;
switch (G__33783) {
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
var G__33794 = arguments.length;
switch (G__33794) {
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
var G__33799 = arguments.length;
switch (G__33799) {
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
var c__32471__auto___35098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_33858){
var state_val_33859 = (state_33858[(1)]);
if((state_val_33859 === (7))){
var state_33858__$1 = state_33858;
var statearr_33860_35099 = state_33858__$1;
(statearr_33860_35099[(2)] = null);

(statearr_33860_35099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (1))){
var state_33858__$1 = state_33858;
var statearr_33862_35100 = state_33858__$1;
(statearr_33862_35100[(2)] = null);

(statearr_33862_35100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (4))){
var inst_33812 = (state_33858[(7)]);
var inst_33810 = (state_33858[(8)]);
var inst_33814 = (inst_33812 < inst_33810);
var state_33858__$1 = state_33858;
if(cljs.core.truth_(inst_33814)){
var statearr_33863_35101 = state_33858__$1;
(statearr_33863_35101[(1)] = (6));

} else {
var statearr_33864_35102 = state_33858__$1;
(statearr_33864_35102[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (15))){
var inst_33842 = (state_33858[(9)]);
var inst_33847 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33842);
var state_33858__$1 = state_33858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33858__$1,(17),out,inst_33847);
} else {
if((state_val_33859 === (13))){
var inst_33842 = (state_33858[(9)]);
var inst_33842__$1 = (state_33858[(2)]);
var inst_33843 = cljs.core.some(cljs.core.nil_QMARK_,inst_33842__$1);
var state_33858__$1 = (function (){var statearr_33866 = state_33858;
(statearr_33866[(9)] = inst_33842__$1);

return statearr_33866;
})();
if(cljs.core.truth_(inst_33843)){
var statearr_33868_35103 = state_33858__$1;
(statearr_33868_35103[(1)] = (14));

} else {
var statearr_33869_35104 = state_33858__$1;
(statearr_33869_35104[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (6))){
var state_33858__$1 = state_33858;
var statearr_33870_35106 = state_33858__$1;
(statearr_33870_35106[(2)] = null);

(statearr_33870_35106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (17))){
var inst_33849 = (state_33858[(2)]);
var state_33858__$1 = (function (){var statearr_33875 = state_33858;
(statearr_33875[(10)] = inst_33849);

return statearr_33875;
})();
var statearr_33876_35107 = state_33858__$1;
(statearr_33876_35107[(2)] = null);

(statearr_33876_35107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (3))){
var inst_33854 = (state_33858[(2)]);
var state_33858__$1 = state_33858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33858__$1,inst_33854);
} else {
if((state_val_33859 === (12))){
var _ = (function (){var statearr_33878 = state_33858;
(statearr_33878[(4)] = cljs.core.rest((state_33858[(4)])));

return statearr_33878;
})();
var state_33858__$1 = state_33858;
var ex33872 = (state_33858__$1[(2)]);
var statearr_33879_35108 = state_33858__$1;
(statearr_33879_35108[(5)] = ex33872);


if((ex33872 instanceof Object)){
var statearr_33880_35109 = state_33858__$1;
(statearr_33880_35109[(1)] = (11));

(statearr_33880_35109[(5)] = null);

} else {
throw ex33872;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (2))){
var inst_33809 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33810 = cnt;
var inst_33812 = (0);
var state_33858__$1 = (function (){var statearr_33881 = state_33858;
(statearr_33881[(11)] = inst_33809);

(statearr_33881[(8)] = inst_33810);

(statearr_33881[(7)] = inst_33812);

return statearr_33881;
})();
var statearr_33884_35110 = state_33858__$1;
(statearr_33884_35110[(2)] = null);

(statearr_33884_35110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (11))){
var inst_33819 = (state_33858[(2)]);
var inst_33820 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33858__$1 = (function (){var statearr_33888 = state_33858;
(statearr_33888[(12)] = inst_33819);

return statearr_33888;
})();
var statearr_33889_35111 = state_33858__$1;
(statearr_33889_35111[(2)] = inst_33820);

(statearr_33889_35111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (9))){
var inst_33812 = (state_33858[(7)]);
var _ = (function (){var statearr_33890 = state_33858;
(statearr_33890[(4)] = cljs.core.cons((12),(state_33858[(4)])));

return statearr_33890;
})();
var inst_33827 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33812) : chs__$1.call(null,inst_33812));
var inst_33828 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33812) : done.call(null,inst_33812));
var inst_33829 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33827,inst_33828);
var ___$1 = (function (){var statearr_33891 = state_33858;
(statearr_33891[(4)] = cljs.core.rest((state_33858[(4)])));

return statearr_33891;
})();
var state_33858__$1 = state_33858;
var statearr_33892_35113 = state_33858__$1;
(statearr_33892_35113[(2)] = inst_33829);

(statearr_33892_35113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (5))){
var inst_33840 = (state_33858[(2)]);
var state_33858__$1 = (function (){var statearr_33893 = state_33858;
(statearr_33893[(13)] = inst_33840);

return statearr_33893;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33858__$1,(13),dchan);
} else {
if((state_val_33859 === (14))){
var inst_33845 = cljs.core.async.close_BANG_(out);
var state_33858__$1 = state_33858;
var statearr_33905_35114 = state_33858__$1;
(statearr_33905_35114[(2)] = inst_33845);

(statearr_33905_35114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (16))){
var inst_33852 = (state_33858[(2)]);
var state_33858__$1 = state_33858;
var statearr_33906_35116 = state_33858__$1;
(statearr_33906_35116[(2)] = inst_33852);

(statearr_33906_35116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (10))){
var inst_33812 = (state_33858[(7)]);
var inst_33833 = (state_33858[(2)]);
var inst_33834 = (inst_33812 + (1));
var inst_33812__$1 = inst_33834;
var state_33858__$1 = (function (){var statearr_33907 = state_33858;
(statearr_33907[(14)] = inst_33833);

(statearr_33907[(7)] = inst_33812__$1);

return statearr_33907;
})();
var statearr_33908_35117 = state_33858__$1;
(statearr_33908_35117[(2)] = null);

(statearr_33908_35117[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (8))){
var inst_33838 = (state_33858[(2)]);
var state_33858__$1 = state_33858;
var statearr_33909_35118 = state_33858__$1;
(statearr_33909_35118[(2)] = inst_33838);

(statearr_33909_35118[(1)] = (5));


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
var cljs$core$async$state_machine__32391__auto__ = null;
var cljs$core$async$state_machine__32391__auto____0 = (function (){
var statearr_33910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33910[(0)] = cljs$core$async$state_machine__32391__auto__);

(statearr_33910[(1)] = (1));

return statearr_33910;
});
var cljs$core$async$state_machine__32391__auto____1 = (function (state_33858){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_33858);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e33911){var ex__32394__auto__ = e33911;
var statearr_33912_35120 = state_33858;
(statearr_33912_35120[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_33858[(4)]))){
var statearr_33915_35121 = state_33858;
(statearr_33915_35121[(1)] = cljs.core.first((state_33858[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35123 = state_33858;
state_33858 = G__35123;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$state_machine__32391__auto__ = function(state_33858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32391__auto____1.call(this,state_33858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32391__auto____0;
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32391__auto____1;
return cljs$core$async$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_33916 = f__32472__auto__();
(statearr_33916[(6)] = c__32471__auto___35098);

return statearr_33916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
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
var G__33923 = arguments.length;
switch (G__33923) {
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
var c__32471__auto___35126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_33959){
var state_val_33960 = (state_33959[(1)]);
if((state_val_33960 === (7))){
var inst_33937 = (state_33959[(7)]);
var inst_33938 = (state_33959[(8)]);
var inst_33937__$1 = (state_33959[(2)]);
var inst_33938__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33937__$1,(0),null);
var inst_33939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33937__$1,(1),null);
var inst_33940 = (inst_33938__$1 == null);
var state_33959__$1 = (function (){var statearr_33961 = state_33959;
(statearr_33961[(7)] = inst_33937__$1);

(statearr_33961[(8)] = inst_33938__$1);

(statearr_33961[(9)] = inst_33939);

return statearr_33961;
})();
if(cljs.core.truth_(inst_33940)){
var statearr_33962_35130 = state_33959__$1;
(statearr_33962_35130[(1)] = (8));

} else {
var statearr_33963_35131 = state_33959__$1;
(statearr_33963_35131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (1))){
var inst_33927 = cljs.core.vec(chs);
var inst_33928 = inst_33927;
var state_33959__$1 = (function (){var statearr_33964 = state_33959;
(statearr_33964[(10)] = inst_33928);

return statearr_33964;
})();
var statearr_33966_35132 = state_33959__$1;
(statearr_33966_35132[(2)] = null);

(statearr_33966_35132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (4))){
var inst_33928 = (state_33959[(10)]);
var state_33959__$1 = state_33959;
return cljs.core.async.ioc_alts_BANG_(state_33959__$1,(7),inst_33928);
} else {
if((state_val_33960 === (6))){
var inst_33955 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33968_35134 = state_33959__$1;
(statearr_33968_35134[(2)] = inst_33955);

(statearr_33968_35134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (3))){
var inst_33957 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33959__$1,inst_33957);
} else {
if((state_val_33960 === (2))){
var inst_33928 = (state_33959[(10)]);
var inst_33930 = cljs.core.count(inst_33928);
var inst_33931 = (inst_33930 > (0));
var state_33959__$1 = state_33959;
if(cljs.core.truth_(inst_33931)){
var statearr_33972_35135 = state_33959__$1;
(statearr_33972_35135[(1)] = (4));

} else {
var statearr_33973_35136 = state_33959__$1;
(statearr_33973_35136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (11))){
var inst_33928 = (state_33959[(10)]);
var inst_33948 = (state_33959[(2)]);
var tmp33970 = inst_33928;
var inst_33928__$1 = tmp33970;
var state_33959__$1 = (function (){var statearr_33976 = state_33959;
(statearr_33976[(11)] = inst_33948);

(statearr_33976[(10)] = inst_33928__$1);

return statearr_33976;
})();
var statearr_33977_35138 = state_33959__$1;
(statearr_33977_35138[(2)] = null);

(statearr_33977_35138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (9))){
var inst_33938 = (state_33959[(8)]);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33959__$1,(11),out,inst_33938);
} else {
if((state_val_33960 === (5))){
var inst_33953 = cljs.core.async.close_BANG_(out);
var state_33959__$1 = state_33959;
var statearr_33983_35140 = state_33959__$1;
(statearr_33983_35140[(2)] = inst_33953);

(statearr_33983_35140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (10))){
var inst_33951 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33984_35141 = state_33959__$1;
(statearr_33984_35141[(2)] = inst_33951);

(statearr_33984_35141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (8))){
var inst_33928 = (state_33959[(10)]);
var inst_33937 = (state_33959[(7)]);
var inst_33938 = (state_33959[(8)]);
var inst_33939 = (state_33959[(9)]);
var inst_33942 = (function (){var cs = inst_33928;
var vec__33933 = inst_33937;
var v = inst_33938;
var c = inst_33939;
return (function (p1__33918_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33918_SHARP_);
});
})();
var inst_33944 = cljs.core.filterv(inst_33942,inst_33928);
var inst_33928__$1 = inst_33944;
var state_33959__$1 = (function (){var statearr_33985 = state_33959;
(statearr_33985[(10)] = inst_33928__$1);

return statearr_33985;
})();
var statearr_33986_35143 = state_33959__$1;
(statearr_33986_35143[(2)] = null);

(statearr_33986_35143[(1)] = (2));


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
var cljs$core$async$state_machine__32391__auto__ = null;
var cljs$core$async$state_machine__32391__auto____0 = (function (){
var statearr_33992 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33992[(0)] = cljs$core$async$state_machine__32391__auto__);

(statearr_33992[(1)] = (1));

return statearr_33992;
});
var cljs$core$async$state_machine__32391__auto____1 = (function (state_33959){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_33959);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e33993){var ex__32394__auto__ = e33993;
var statearr_33995_35145 = state_33959;
(statearr_33995_35145[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_33959[(4)]))){
var statearr_33996_35146 = state_33959;
(statearr_33996_35146[(1)] = cljs.core.first((state_33959[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35147 = state_33959;
state_33959 = G__35147;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$state_machine__32391__auto__ = function(state_33959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32391__auto____1.call(this,state_33959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32391__auto____0;
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32391__auto____1;
return cljs$core$async$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_33998 = f__32472__auto__();
(statearr_33998[(6)] = c__32471__auto___35126);

return statearr_33998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
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
var G__34002 = arguments.length;
switch (G__34002) {
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
var c__32471__auto___35150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_34035){
var state_val_34036 = (state_34035[(1)]);
if((state_val_34036 === (7))){
var inst_34017 = (state_34035[(7)]);
var inst_34017__$1 = (state_34035[(2)]);
var inst_34018 = (inst_34017__$1 == null);
var inst_34019 = cljs.core.not(inst_34018);
var state_34035__$1 = (function (){var statearr_34039 = state_34035;
(statearr_34039[(7)] = inst_34017__$1);

return statearr_34039;
})();
if(inst_34019){
var statearr_34041_35152 = state_34035__$1;
(statearr_34041_35152[(1)] = (8));

} else {
var statearr_34047_35153 = state_34035__$1;
(statearr_34047_35153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (1))){
var inst_34003 = (0);
var state_34035__$1 = (function (){var statearr_34048 = state_34035;
(statearr_34048[(8)] = inst_34003);

return statearr_34048;
})();
var statearr_34049_35154 = state_34035__$1;
(statearr_34049_35154[(2)] = null);

(statearr_34049_35154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (4))){
var state_34035__$1 = state_34035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34035__$1,(7),ch);
} else {
if((state_val_34036 === (6))){
var inst_34030 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34051_35156 = state_34035__$1;
(statearr_34051_35156[(2)] = inst_34030);

(statearr_34051_35156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (3))){
var inst_34032 = (state_34035[(2)]);
var inst_34033 = cljs.core.async.close_BANG_(out);
var state_34035__$1 = (function (){var statearr_34052 = state_34035;
(statearr_34052[(9)] = inst_34032);

return statearr_34052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34035__$1,inst_34033);
} else {
if((state_val_34036 === (2))){
var inst_34003 = (state_34035[(8)]);
var inst_34009 = (inst_34003 < n);
var state_34035__$1 = state_34035;
if(cljs.core.truth_(inst_34009)){
var statearr_34053_35158 = state_34035__$1;
(statearr_34053_35158[(1)] = (4));

} else {
var statearr_34054_35159 = state_34035__$1;
(statearr_34054_35159[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (11))){
var inst_34003 = (state_34035[(8)]);
var inst_34022 = (state_34035[(2)]);
var inst_34023 = (inst_34003 + (1));
var inst_34003__$1 = inst_34023;
var state_34035__$1 = (function (){var statearr_34056 = state_34035;
(statearr_34056[(10)] = inst_34022);

(statearr_34056[(8)] = inst_34003__$1);

return statearr_34056;
})();
var statearr_34058_35160 = state_34035__$1;
(statearr_34058_35160[(2)] = null);

(statearr_34058_35160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (9))){
var state_34035__$1 = state_34035;
var statearr_34061_35162 = state_34035__$1;
(statearr_34061_35162[(2)] = null);

(statearr_34061_35162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (5))){
var state_34035__$1 = state_34035;
var statearr_34062_35163 = state_34035__$1;
(statearr_34062_35163[(2)] = null);

(statearr_34062_35163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (10))){
var inst_34027 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34063_35164 = state_34035__$1;
(statearr_34063_35164[(2)] = inst_34027);

(statearr_34063_35164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (8))){
var inst_34017 = (state_34035[(7)]);
var state_34035__$1 = state_34035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34035__$1,(11),out,inst_34017);
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
var cljs$core$async$state_machine__32391__auto__ = null;
var cljs$core$async$state_machine__32391__auto____0 = (function (){
var statearr_34066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34066[(0)] = cljs$core$async$state_machine__32391__auto__);

(statearr_34066[(1)] = (1));

return statearr_34066;
});
var cljs$core$async$state_machine__32391__auto____1 = (function (state_34035){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_34035);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e34067){var ex__32394__auto__ = e34067;
var statearr_34068_35165 = state_34035;
(statearr_34068_35165[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_34035[(4)]))){
var statearr_34069_35166 = state_34035;
(statearr_34069_35166[(1)] = cljs.core.first((state_34035[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35167 = state_34035;
state_34035 = G__35167;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$state_machine__32391__auto__ = function(state_34035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32391__auto____1.call(this,state_34035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32391__auto____0;
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32391__auto____1;
return cljs$core$async$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_34072 = f__32472__auto__();
(statearr_34072[(6)] = c__32471__auto___35150);

return statearr_34072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
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
cljs.core.async.t_cljs$core$async34088 = (function (f,ch,meta34076,_,fn1,meta34089){
this.f = f;
this.ch = ch;
this.meta34076 = meta34076;
this._ = _;
this.fn1 = fn1;
this.meta34089 = meta34089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34090,meta34089__$1){
var self__ = this;
var _34090__$1 = this;
return (new cljs.core.async.t_cljs$core$async34088(self__.f,self__.ch,self__.meta34076,self__._,self__.fn1,meta34089__$1));
}));

(cljs.core.async.t_cljs$core$async34088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34090){
var self__ = this;
var _34090__$1 = this;
return self__.meta34089;
}));

(cljs.core.async.t_cljs$core$async34088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34073_SHARP_){
var G__34098 = (((p1__34073_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34073_SHARP_) : self__.f.call(null,p1__34073_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34098) : f1.call(null,G__34098));
});
}));

(cljs.core.async.t_cljs$core$async34088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34076","meta34076",-593001272,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34075","cljs.core.async/t_cljs$core$async34075",-1377138655,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34089","meta34089",-689518860,null)], null);
}));

(cljs.core.async.t_cljs$core$async34088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34088");

(cljs.core.async.t_cljs$core$async34088.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34088.
 */
cljs.core.async.__GT_t_cljs$core$async34088 = (function cljs$core$async$__GT_t_cljs$core$async34088(f,ch,meta34076,_,fn1,meta34089){
return (new cljs.core.async.t_cljs$core$async34088(f,ch,meta34076,_,fn1,meta34089));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34075 = (function (f,ch,meta34076){
this.f = f;
this.ch = ch;
this.meta34076 = meta34076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34077,meta34076__$1){
var self__ = this;
var _34077__$1 = this;
return (new cljs.core.async.t_cljs$core$async34075(self__.f,self__.ch,meta34076__$1));
}));

(cljs.core.async.t_cljs$core$async34075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34077){
var self__ = this;
var _34077__$1 = this;
return self__.meta34076;
}));

(cljs.core.async.t_cljs$core$async34075.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34075.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34075.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34075.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34075.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34088(self__.f,self__.ch,self__.meta34076,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34102 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34102) : self__.f.call(null,G__34102));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34075.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34075.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34076","meta34076",-593001272,null)], null);
}));

(cljs.core.async.t_cljs$core$async34075.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34075");

(cljs.core.async.t_cljs$core$async34075.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34075");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34075.
 */
cljs.core.async.__GT_t_cljs$core$async34075 = (function cljs$core$async$__GT_t_cljs$core$async34075(f,ch,meta34076){
return (new cljs.core.async.t_cljs$core$async34075(f,ch,meta34076));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34075(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34109 = (function (f,ch,meta34110){
this.f = f;
this.ch = ch;
this.meta34110 = meta34110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34111,meta34110__$1){
var self__ = this;
var _34111__$1 = this;
return (new cljs.core.async.t_cljs$core$async34109(self__.f,self__.ch,meta34110__$1));
}));

(cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34111){
var self__ = this;
var _34111__$1 = this;
return self__.meta34110;
}));

(cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34110","meta34110",-2105410067,null)], null);
}));

(cljs.core.async.t_cljs$core$async34109.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34109");

(cljs.core.async.t_cljs$core$async34109.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34109");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34109.
 */
cljs.core.async.__GT_t_cljs$core$async34109 = (function cljs$core$async$__GT_t_cljs$core$async34109(f,ch,meta34110){
return (new cljs.core.async.t_cljs$core$async34109(f,ch,meta34110));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34109(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34118 = (function (p,ch,meta34119){
this.p = p;
this.ch = ch;
this.meta34119 = meta34119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34120,meta34119__$1){
var self__ = this;
var _34120__$1 = this;
return (new cljs.core.async.t_cljs$core$async34118(self__.p,self__.ch,meta34119__$1));
}));

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34120){
var self__ = this;
var _34120__$1 = this;
return self__.meta34119;
}));

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34118.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34119","meta34119",-1482079878,null)], null);
}));

(cljs.core.async.t_cljs$core$async34118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34118");

(cljs.core.async.t_cljs$core$async34118.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34118.
 */
cljs.core.async.__GT_t_cljs$core$async34118 = (function cljs$core$async$__GT_t_cljs$core$async34118(p,ch,meta34119){
return (new cljs.core.async.t_cljs$core$async34118(p,ch,meta34119));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34118(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34126 = arguments.length;
switch (G__34126) {
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
var c__32471__auto___35174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_34159){
var state_val_34160 = (state_34159[(1)]);
if((state_val_34160 === (7))){
var inst_34155 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34171_35175 = state_34159__$1;
(statearr_34171_35175[(2)] = inst_34155);

(statearr_34171_35175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (1))){
var state_34159__$1 = state_34159;
var statearr_34173_35176 = state_34159__$1;
(statearr_34173_35176[(2)] = null);

(statearr_34173_35176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (4))){
var inst_34140 = (state_34159[(7)]);
var inst_34140__$1 = (state_34159[(2)]);
var inst_34141 = (inst_34140__$1 == null);
var state_34159__$1 = (function (){var statearr_34174 = state_34159;
(statearr_34174[(7)] = inst_34140__$1);

return statearr_34174;
})();
if(cljs.core.truth_(inst_34141)){
var statearr_34175_35177 = state_34159__$1;
(statearr_34175_35177[(1)] = (5));

} else {
var statearr_34176_35178 = state_34159__$1;
(statearr_34176_35178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (6))){
var inst_34140 = (state_34159[(7)]);
var inst_34146 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34140) : p.call(null,inst_34140));
var state_34159__$1 = state_34159;
if(cljs.core.truth_(inst_34146)){
var statearr_34178_35181 = state_34159__$1;
(statearr_34178_35181[(1)] = (8));

} else {
var statearr_34179_35182 = state_34159__$1;
(statearr_34179_35182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (3))){
var inst_34157 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34159__$1,inst_34157);
} else {
if((state_val_34160 === (2))){
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34159__$1,(4),ch);
} else {
if((state_val_34160 === (11))){
var inst_34149 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34181_35185 = state_34159__$1;
(statearr_34181_35185[(2)] = inst_34149);

(statearr_34181_35185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (9))){
var state_34159__$1 = state_34159;
var statearr_34183_35187 = state_34159__$1;
(statearr_34183_35187[(2)] = null);

(statearr_34183_35187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (5))){
var inst_34143 = cljs.core.async.close_BANG_(out);
var state_34159__$1 = state_34159;
var statearr_34184_35188 = state_34159__$1;
(statearr_34184_35188[(2)] = inst_34143);

(statearr_34184_35188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (10))){
var inst_34152 = (state_34159[(2)]);
var state_34159__$1 = (function (){var statearr_34185 = state_34159;
(statearr_34185[(8)] = inst_34152);

return statearr_34185;
})();
var statearr_34186_35189 = state_34159__$1;
(statearr_34186_35189[(2)] = null);

(statearr_34186_35189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (8))){
var inst_34140 = (state_34159[(7)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34159__$1,(11),out,inst_34140);
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
var cljs$core$async$state_machine__32391__auto__ = null;
var cljs$core$async$state_machine__32391__auto____0 = (function (){
var statearr_34188 = [null,null,null,null,null,null,null,null,null];
(statearr_34188[(0)] = cljs$core$async$state_machine__32391__auto__);

(statearr_34188[(1)] = (1));

return statearr_34188;
});
var cljs$core$async$state_machine__32391__auto____1 = (function (state_34159){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_34159);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e34192){var ex__32394__auto__ = e34192;
var statearr_34193_35194 = state_34159;
(statearr_34193_35194[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_34159[(4)]))){
var statearr_34194_35195 = state_34159;
(statearr_34194_35195[(1)] = cljs.core.first((state_34159[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35196 = state_34159;
state_34159 = G__35196;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$state_machine__32391__auto__ = function(state_34159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32391__auto____1.call(this,state_34159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32391__auto____0;
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32391__auto____1;
return cljs$core$async$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_34195 = f__32472__auto__();
(statearr_34195[(6)] = c__32471__auto___35174);

return statearr_34195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34198 = arguments.length;
switch (G__34198) {
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
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_34269){
var state_val_34272 = (state_34269[(1)]);
if((state_val_34272 === (7))){
var inst_34263 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34273_35201 = state_34269__$1;
(statearr_34273_35201[(2)] = inst_34263);

(statearr_34273_35201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (20))){
var inst_34230 = (state_34269[(7)]);
var inst_34241 = (state_34269[(2)]);
var inst_34242 = cljs.core.next(inst_34230);
var inst_34216 = inst_34242;
var inst_34217 = null;
var inst_34218 = (0);
var inst_34219 = (0);
var state_34269__$1 = (function (){var statearr_34274 = state_34269;
(statearr_34274[(8)] = inst_34241);

(statearr_34274[(9)] = inst_34216);

(statearr_34274[(10)] = inst_34217);

(statearr_34274[(11)] = inst_34218);

(statearr_34274[(12)] = inst_34219);

return statearr_34274;
})();
var statearr_34278_35202 = state_34269__$1;
(statearr_34278_35202[(2)] = null);

(statearr_34278_35202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (1))){
var state_34269__$1 = state_34269;
var statearr_34279_35203 = state_34269__$1;
(statearr_34279_35203[(2)] = null);

(statearr_34279_35203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (4))){
var inst_34204 = (state_34269[(13)]);
var inst_34204__$1 = (state_34269[(2)]);
var inst_34205 = (inst_34204__$1 == null);
var state_34269__$1 = (function (){var statearr_34280 = state_34269;
(statearr_34280[(13)] = inst_34204__$1);

return statearr_34280;
})();
if(cljs.core.truth_(inst_34205)){
var statearr_34281_35205 = state_34269__$1;
(statearr_34281_35205[(1)] = (5));

} else {
var statearr_34282_35206 = state_34269__$1;
(statearr_34282_35206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (15))){
var state_34269__$1 = state_34269;
var statearr_34286_35207 = state_34269__$1;
(statearr_34286_35207[(2)] = null);

(statearr_34286_35207[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (21))){
var state_34269__$1 = state_34269;
var statearr_34287_35208 = state_34269__$1;
(statearr_34287_35208[(2)] = null);

(statearr_34287_35208[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (13))){
var inst_34219 = (state_34269[(12)]);
var inst_34216 = (state_34269[(9)]);
var inst_34217 = (state_34269[(10)]);
var inst_34218 = (state_34269[(11)]);
var inst_34226 = (state_34269[(2)]);
var inst_34227 = (inst_34219 + (1));
var tmp34283 = inst_34218;
var tmp34284 = inst_34216;
var tmp34285 = inst_34217;
var inst_34216__$1 = tmp34284;
var inst_34217__$1 = tmp34285;
var inst_34218__$1 = tmp34283;
var inst_34219__$1 = inst_34227;
var state_34269__$1 = (function (){var statearr_34288 = state_34269;
(statearr_34288[(14)] = inst_34226);

(statearr_34288[(9)] = inst_34216__$1);

(statearr_34288[(10)] = inst_34217__$1);

(statearr_34288[(11)] = inst_34218__$1);

(statearr_34288[(12)] = inst_34219__$1);

return statearr_34288;
})();
var statearr_34289_35209 = state_34269__$1;
(statearr_34289_35209[(2)] = null);

(statearr_34289_35209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (22))){
var state_34269__$1 = state_34269;
var statearr_34290_35210 = state_34269__$1;
(statearr_34290_35210[(2)] = null);

(statearr_34290_35210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (6))){
var inst_34204 = (state_34269[(13)]);
var inst_34214 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34204) : f.call(null,inst_34204));
var inst_34215 = cljs.core.seq(inst_34214);
var inst_34216 = inst_34215;
var inst_34217 = null;
var inst_34218 = (0);
var inst_34219 = (0);
var state_34269__$1 = (function (){var statearr_34291 = state_34269;
(statearr_34291[(9)] = inst_34216);

(statearr_34291[(10)] = inst_34217);

(statearr_34291[(11)] = inst_34218);

(statearr_34291[(12)] = inst_34219);

return statearr_34291;
})();
var statearr_34292_35218 = state_34269__$1;
(statearr_34292_35218[(2)] = null);

(statearr_34292_35218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (17))){
var inst_34230 = (state_34269[(7)]);
var inst_34234 = cljs.core.chunk_first(inst_34230);
var inst_34235 = cljs.core.chunk_rest(inst_34230);
var inst_34236 = cljs.core.count(inst_34234);
var inst_34216 = inst_34235;
var inst_34217 = inst_34234;
var inst_34218 = inst_34236;
var inst_34219 = (0);
var state_34269__$1 = (function (){var statearr_34293 = state_34269;
(statearr_34293[(9)] = inst_34216);

(statearr_34293[(10)] = inst_34217);

(statearr_34293[(11)] = inst_34218);

(statearr_34293[(12)] = inst_34219);

return statearr_34293;
})();
var statearr_34294_35221 = state_34269__$1;
(statearr_34294_35221[(2)] = null);

(statearr_34294_35221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (3))){
var inst_34265 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34269__$1,inst_34265);
} else {
if((state_val_34272 === (12))){
var inst_34251 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34296_35222 = state_34269__$1;
(statearr_34296_35222[(2)] = inst_34251);

(statearr_34296_35222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (2))){
var state_34269__$1 = state_34269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34269__$1,(4),in$);
} else {
if((state_val_34272 === (23))){
var inst_34261 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34301_35224 = state_34269__$1;
(statearr_34301_35224[(2)] = inst_34261);

(statearr_34301_35224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (19))){
var inst_34245 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34302_35225 = state_34269__$1;
(statearr_34302_35225[(2)] = inst_34245);

(statearr_34302_35225[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (11))){
var inst_34216 = (state_34269[(9)]);
var inst_34230 = (state_34269[(7)]);
var inst_34230__$1 = cljs.core.seq(inst_34216);
var state_34269__$1 = (function (){var statearr_34303 = state_34269;
(statearr_34303[(7)] = inst_34230__$1);

return statearr_34303;
})();
if(inst_34230__$1){
var statearr_34304_35243 = state_34269__$1;
(statearr_34304_35243[(1)] = (14));

} else {
var statearr_34305_35245 = state_34269__$1;
(statearr_34305_35245[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (9))){
var inst_34253 = (state_34269[(2)]);
var inst_34255 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34269__$1 = (function (){var statearr_34306 = state_34269;
(statearr_34306[(15)] = inst_34253);

return statearr_34306;
})();
if(cljs.core.truth_(inst_34255)){
var statearr_34307_35249 = state_34269__$1;
(statearr_34307_35249[(1)] = (21));

} else {
var statearr_34308_35250 = state_34269__$1;
(statearr_34308_35250[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (5))){
var inst_34207 = cljs.core.async.close_BANG_(out);
var state_34269__$1 = state_34269;
var statearr_34314_35251 = state_34269__$1;
(statearr_34314_35251[(2)] = inst_34207);

(statearr_34314_35251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (14))){
var inst_34230 = (state_34269[(7)]);
var inst_34232 = cljs.core.chunked_seq_QMARK_(inst_34230);
var state_34269__$1 = state_34269;
if(inst_34232){
var statearr_34315_35252 = state_34269__$1;
(statearr_34315_35252[(1)] = (17));

} else {
var statearr_34316_35253 = state_34269__$1;
(statearr_34316_35253[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (16))){
var inst_34249 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34317_35254 = state_34269__$1;
(statearr_34317_35254[(2)] = inst_34249);

(statearr_34317_35254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (10))){
var inst_34217 = (state_34269[(10)]);
var inst_34219 = (state_34269[(12)]);
var inst_34224 = cljs.core._nth(inst_34217,inst_34219);
var state_34269__$1 = state_34269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34269__$1,(13),out,inst_34224);
} else {
if((state_val_34272 === (18))){
var inst_34230 = (state_34269[(7)]);
var inst_34239 = cljs.core.first(inst_34230);
var state_34269__$1 = state_34269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34269__$1,(20),out,inst_34239);
} else {
if((state_val_34272 === (8))){
var inst_34219 = (state_34269[(12)]);
var inst_34218 = (state_34269[(11)]);
var inst_34221 = (inst_34219 < inst_34218);
var inst_34222 = inst_34221;
var state_34269__$1 = state_34269;
if(cljs.core.truth_(inst_34222)){
var statearr_34319_35257 = state_34269__$1;
(statearr_34319_35257[(1)] = (10));

} else {
var statearr_34320_35258 = state_34269__$1;
(statearr_34320_35258[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32391__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32391__auto____0 = (function (){
var statearr_34321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34321[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32391__auto__);

(statearr_34321[(1)] = (1));

return statearr_34321;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32391__auto____1 = (function (state_34269){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_34269);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e34322){var ex__32394__auto__ = e34322;
var statearr_34323_35262 = state_34269;
(statearr_34323_35262[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_34269[(4)]))){
var statearr_34325_35264 = state_34269;
(statearr_34325_35264[(1)] = cljs.core.first((state_34269[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35273 = state_34269;
state_34269 = G__35273;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32391__auto__ = function(state_34269){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32391__auto____1.call(this,state_34269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32391__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32391__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_34332 = f__32472__auto__();
(statearr_34332[(6)] = c__32471__auto__);

return statearr_34332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34334 = arguments.length;
switch (G__34334) {
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
var G__34339 = arguments.length;
switch (G__34339) {
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
var G__34345 = arguments.length;
switch (G__34345) {
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
var c__32471__auto___35293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_34372){
var state_val_34373 = (state_34372[(1)]);
if((state_val_34373 === (7))){
var inst_34367 = (state_34372[(2)]);
var state_34372__$1 = state_34372;
var statearr_34375_35319 = state_34372__$1;
(statearr_34375_35319[(2)] = inst_34367);

(statearr_34375_35319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (1))){
var inst_34349 = null;
var state_34372__$1 = (function (){var statearr_34376 = state_34372;
(statearr_34376[(7)] = inst_34349);

return statearr_34376;
})();
var statearr_34378_35320 = state_34372__$1;
(statearr_34378_35320[(2)] = null);

(statearr_34378_35320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (4))){
var inst_34352 = (state_34372[(8)]);
var inst_34352__$1 = (state_34372[(2)]);
var inst_34353 = (inst_34352__$1 == null);
var inst_34354 = cljs.core.not(inst_34353);
var state_34372__$1 = (function (){var statearr_34380 = state_34372;
(statearr_34380[(8)] = inst_34352__$1);

return statearr_34380;
})();
if(inst_34354){
var statearr_34381_35321 = state_34372__$1;
(statearr_34381_35321[(1)] = (5));

} else {
var statearr_34382_35322 = state_34372__$1;
(statearr_34382_35322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (6))){
var state_34372__$1 = state_34372;
var statearr_34383_35323 = state_34372__$1;
(statearr_34383_35323[(2)] = null);

(statearr_34383_35323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (3))){
var inst_34369 = (state_34372[(2)]);
var inst_34370 = cljs.core.async.close_BANG_(out);
var state_34372__$1 = (function (){var statearr_34385 = state_34372;
(statearr_34385[(9)] = inst_34369);

return statearr_34385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34372__$1,inst_34370);
} else {
if((state_val_34373 === (2))){
var state_34372__$1 = state_34372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34372__$1,(4),ch);
} else {
if((state_val_34373 === (11))){
var inst_34352 = (state_34372[(8)]);
var inst_34361 = (state_34372[(2)]);
var inst_34349 = inst_34352;
var state_34372__$1 = (function (){var statearr_34387 = state_34372;
(statearr_34387[(10)] = inst_34361);

(statearr_34387[(7)] = inst_34349);

return statearr_34387;
})();
var statearr_34388_35324 = state_34372__$1;
(statearr_34388_35324[(2)] = null);

(statearr_34388_35324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (9))){
var inst_34352 = (state_34372[(8)]);
var state_34372__$1 = state_34372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34372__$1,(11),out,inst_34352);
} else {
if((state_val_34373 === (5))){
var inst_34352 = (state_34372[(8)]);
var inst_34349 = (state_34372[(7)]);
var inst_34356 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34352,inst_34349);
var state_34372__$1 = state_34372;
if(inst_34356){
var statearr_34390_35325 = state_34372__$1;
(statearr_34390_35325[(1)] = (8));

} else {
var statearr_34391_35326 = state_34372__$1;
(statearr_34391_35326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (10))){
var inst_34364 = (state_34372[(2)]);
var state_34372__$1 = state_34372;
var statearr_34393_35327 = state_34372__$1;
(statearr_34393_35327[(2)] = inst_34364);

(statearr_34393_35327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (8))){
var inst_34349 = (state_34372[(7)]);
var tmp34389 = inst_34349;
var inst_34349__$1 = tmp34389;
var state_34372__$1 = (function (){var statearr_34395 = state_34372;
(statearr_34395[(7)] = inst_34349__$1);

return statearr_34395;
})();
var statearr_34396_35328 = state_34372__$1;
(statearr_34396_35328[(2)] = null);

(statearr_34396_35328[(1)] = (2));


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
var cljs$core$async$state_machine__32391__auto__ = null;
var cljs$core$async$state_machine__32391__auto____0 = (function (){
var statearr_34397 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34397[(0)] = cljs$core$async$state_machine__32391__auto__);

(statearr_34397[(1)] = (1));

return statearr_34397;
});
var cljs$core$async$state_machine__32391__auto____1 = (function (state_34372){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_34372);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e34398){var ex__32394__auto__ = e34398;
var statearr_34399_35329 = state_34372;
(statearr_34399_35329[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_34372[(4)]))){
var statearr_34400_35330 = state_34372;
(statearr_34400_35330[(1)] = cljs.core.first((state_34372[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35336 = state_34372;
state_34372 = G__35336;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$state_machine__32391__auto__ = function(state_34372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32391__auto____1.call(this,state_34372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32391__auto____0;
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32391__auto____1;
return cljs$core$async$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_34403 = f__32472__auto__();
(statearr_34403[(6)] = c__32471__auto___35293);

return statearr_34403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34417 = arguments.length;
switch (G__34417) {
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
var c__32471__auto___35338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_34456){
var state_val_34457 = (state_34456[(1)]);
if((state_val_34457 === (7))){
var inst_34452 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34459_35339 = state_34456__$1;
(statearr_34459_35339[(2)] = inst_34452);

(statearr_34459_35339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (1))){
var inst_34418 = (new Array(n));
var inst_34419 = inst_34418;
var inst_34420 = (0);
var state_34456__$1 = (function (){var statearr_34462 = state_34456;
(statearr_34462[(7)] = inst_34419);

(statearr_34462[(8)] = inst_34420);

return statearr_34462;
})();
var statearr_34463_35340 = state_34456__$1;
(statearr_34463_35340[(2)] = null);

(statearr_34463_35340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (4))){
var inst_34423 = (state_34456[(9)]);
var inst_34423__$1 = (state_34456[(2)]);
var inst_34424 = (inst_34423__$1 == null);
var inst_34425 = cljs.core.not(inst_34424);
var state_34456__$1 = (function (){var statearr_34464 = state_34456;
(statearr_34464[(9)] = inst_34423__$1);

return statearr_34464;
})();
if(inst_34425){
var statearr_34465_35342 = state_34456__$1;
(statearr_34465_35342[(1)] = (5));

} else {
var statearr_34466_35343 = state_34456__$1;
(statearr_34466_35343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (15))){
var inst_34446 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34469_35344 = state_34456__$1;
(statearr_34469_35344[(2)] = inst_34446);

(statearr_34469_35344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (13))){
var state_34456__$1 = state_34456;
var statearr_34470_35345 = state_34456__$1;
(statearr_34470_35345[(2)] = null);

(statearr_34470_35345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (6))){
var inst_34420 = (state_34456[(8)]);
var inst_34442 = (inst_34420 > (0));
var state_34456__$1 = state_34456;
if(cljs.core.truth_(inst_34442)){
var statearr_34473_35346 = state_34456__$1;
(statearr_34473_35346[(1)] = (12));

} else {
var statearr_34474_35347 = state_34456__$1;
(statearr_34474_35347[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (3))){
var inst_34454 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34456__$1,inst_34454);
} else {
if((state_val_34457 === (12))){
var inst_34419 = (state_34456[(7)]);
var inst_34444 = cljs.core.vec(inst_34419);
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34456__$1,(15),out,inst_34444);
} else {
if((state_val_34457 === (2))){
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34456__$1,(4),ch);
} else {
if((state_val_34457 === (11))){
var inst_34435 = (state_34456[(2)]);
var inst_34436 = (new Array(n));
var inst_34419 = inst_34436;
var inst_34420 = (0);
var state_34456__$1 = (function (){var statearr_34482 = state_34456;
(statearr_34482[(10)] = inst_34435);

(statearr_34482[(7)] = inst_34419);

(statearr_34482[(8)] = inst_34420);

return statearr_34482;
})();
var statearr_34484_35365 = state_34456__$1;
(statearr_34484_35365[(2)] = null);

(statearr_34484_35365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (9))){
var inst_34419 = (state_34456[(7)]);
var inst_34433 = cljs.core.vec(inst_34419);
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34456__$1,(11),out,inst_34433);
} else {
if((state_val_34457 === (5))){
var inst_34419 = (state_34456[(7)]);
var inst_34420 = (state_34456[(8)]);
var inst_34423 = (state_34456[(9)]);
var inst_34428 = (state_34456[(11)]);
var inst_34427 = (inst_34419[inst_34420] = inst_34423);
var inst_34428__$1 = (inst_34420 + (1));
var inst_34429 = (inst_34428__$1 < n);
var state_34456__$1 = (function (){var statearr_34498 = state_34456;
(statearr_34498[(12)] = inst_34427);

(statearr_34498[(11)] = inst_34428__$1);

return statearr_34498;
})();
if(cljs.core.truth_(inst_34429)){
var statearr_34499_35366 = state_34456__$1;
(statearr_34499_35366[(1)] = (8));

} else {
var statearr_34500_35367 = state_34456__$1;
(statearr_34500_35367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (14))){
var inst_34449 = (state_34456[(2)]);
var inst_34450 = cljs.core.async.close_BANG_(out);
var state_34456__$1 = (function (){var statearr_34502 = state_34456;
(statearr_34502[(13)] = inst_34449);

return statearr_34502;
})();
var statearr_34503_35368 = state_34456__$1;
(statearr_34503_35368[(2)] = inst_34450);

(statearr_34503_35368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (10))){
var inst_34439 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34504_35369 = state_34456__$1;
(statearr_34504_35369[(2)] = inst_34439);

(statearr_34504_35369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (8))){
var inst_34419 = (state_34456[(7)]);
var inst_34428 = (state_34456[(11)]);
var tmp34501 = inst_34419;
var inst_34419__$1 = tmp34501;
var inst_34420 = inst_34428;
var state_34456__$1 = (function (){var statearr_34505 = state_34456;
(statearr_34505[(7)] = inst_34419__$1);

(statearr_34505[(8)] = inst_34420);

return statearr_34505;
})();
var statearr_34506_35370 = state_34456__$1;
(statearr_34506_35370[(2)] = null);

(statearr_34506_35370[(1)] = (2));


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
var cljs$core$async$state_machine__32391__auto__ = null;
var cljs$core$async$state_machine__32391__auto____0 = (function (){
var statearr_34508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34508[(0)] = cljs$core$async$state_machine__32391__auto__);

(statearr_34508[(1)] = (1));

return statearr_34508;
});
var cljs$core$async$state_machine__32391__auto____1 = (function (state_34456){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_34456);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e34510){var ex__32394__auto__ = e34510;
var statearr_34511_35371 = state_34456;
(statearr_34511_35371[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_34456[(4)]))){
var statearr_34512_35372 = state_34456;
(statearr_34512_35372[(1)] = cljs.core.first((state_34456[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35373 = state_34456;
state_34456 = G__35373;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$state_machine__32391__auto__ = function(state_34456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32391__auto____1.call(this,state_34456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32391__auto____0;
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32391__auto____1;
return cljs$core$async$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_34513 = f__32472__auto__();
(statearr_34513[(6)] = c__32471__auto___35338);

return statearr_34513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34516 = arguments.length;
switch (G__34516) {
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
var c__32471__auto___35375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_34563){
var state_val_34564 = (state_34563[(1)]);
if((state_val_34564 === (7))){
var inst_34559 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34565_35409 = state_34563__$1;
(statearr_34565_35409[(2)] = inst_34559);

(statearr_34565_35409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (1))){
var inst_34519 = [];
var inst_34520 = inst_34519;
var inst_34521 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34563__$1 = (function (){var statearr_34566 = state_34563;
(statearr_34566[(7)] = inst_34520);

(statearr_34566[(8)] = inst_34521);

return statearr_34566;
})();
var statearr_34567_35429 = state_34563__$1;
(statearr_34567_35429[(2)] = null);

(statearr_34567_35429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (4))){
var inst_34524 = (state_34563[(9)]);
var inst_34524__$1 = (state_34563[(2)]);
var inst_34525 = (inst_34524__$1 == null);
var inst_34526 = cljs.core.not(inst_34525);
var state_34563__$1 = (function (){var statearr_34568 = state_34563;
(statearr_34568[(9)] = inst_34524__$1);

return statearr_34568;
})();
if(inst_34526){
var statearr_34569_35430 = state_34563__$1;
(statearr_34569_35430[(1)] = (5));

} else {
var statearr_34570_35431 = state_34563__$1;
(statearr_34570_35431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (15))){
var inst_34520 = (state_34563[(7)]);
var inst_34551 = cljs.core.vec(inst_34520);
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34563__$1,(18),out,inst_34551);
} else {
if((state_val_34564 === (13))){
var inst_34546 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34571_35432 = state_34563__$1;
(statearr_34571_35432[(2)] = inst_34546);

(statearr_34571_35432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (6))){
var inst_34520 = (state_34563[(7)]);
var inst_34548 = inst_34520.length;
var inst_34549 = (inst_34548 > (0));
var state_34563__$1 = state_34563;
if(cljs.core.truth_(inst_34549)){
var statearr_34572_35434 = state_34563__$1;
(statearr_34572_35434[(1)] = (15));

} else {
var statearr_34573_35435 = state_34563__$1;
(statearr_34573_35435[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (17))){
var inst_34556 = (state_34563[(2)]);
var inst_34557 = cljs.core.async.close_BANG_(out);
var state_34563__$1 = (function (){var statearr_34574 = state_34563;
(statearr_34574[(10)] = inst_34556);

return statearr_34574;
})();
var statearr_34575_35438 = state_34563__$1;
(statearr_34575_35438[(2)] = inst_34557);

(statearr_34575_35438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (3))){
var inst_34561 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34563__$1,inst_34561);
} else {
if((state_val_34564 === (12))){
var inst_34520 = (state_34563[(7)]);
var inst_34539 = cljs.core.vec(inst_34520);
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34563__$1,(14),out,inst_34539);
} else {
if((state_val_34564 === (2))){
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34563__$1,(4),ch);
} else {
if((state_val_34564 === (11))){
var inst_34520 = (state_34563[(7)]);
var inst_34524 = (state_34563[(9)]);
var inst_34528 = (state_34563[(11)]);
var inst_34536 = inst_34520.push(inst_34524);
var tmp34576 = inst_34520;
var inst_34520__$1 = tmp34576;
var inst_34521 = inst_34528;
var state_34563__$1 = (function (){var statearr_34578 = state_34563;
(statearr_34578[(12)] = inst_34536);

(statearr_34578[(7)] = inst_34520__$1);

(statearr_34578[(8)] = inst_34521);

return statearr_34578;
})();
var statearr_34579_35441 = state_34563__$1;
(statearr_34579_35441[(2)] = null);

(statearr_34579_35441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (9))){
var inst_34521 = (state_34563[(8)]);
var inst_34532 = cljs.core.keyword_identical_QMARK_(inst_34521,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34563__$1 = state_34563;
var statearr_34580_35443 = state_34563__$1;
(statearr_34580_35443[(2)] = inst_34532);

(statearr_34580_35443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (5))){
var inst_34524 = (state_34563[(9)]);
var inst_34528 = (state_34563[(11)]);
var inst_34521 = (state_34563[(8)]);
var inst_34529 = (state_34563[(13)]);
var inst_34528__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34524) : f.call(null,inst_34524));
var inst_34529__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34528__$1,inst_34521);
var state_34563__$1 = (function (){var statearr_34583 = state_34563;
(statearr_34583[(11)] = inst_34528__$1);

(statearr_34583[(13)] = inst_34529__$1);

return statearr_34583;
})();
if(inst_34529__$1){
var statearr_34585_35449 = state_34563__$1;
(statearr_34585_35449[(1)] = (8));

} else {
var statearr_34587_35450 = state_34563__$1;
(statearr_34587_35450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (14))){
var inst_34524 = (state_34563[(9)]);
var inst_34528 = (state_34563[(11)]);
var inst_34541 = (state_34563[(2)]);
var inst_34542 = [];
var inst_34543 = inst_34542.push(inst_34524);
var inst_34520 = inst_34542;
var inst_34521 = inst_34528;
var state_34563__$1 = (function (){var statearr_34588 = state_34563;
(statearr_34588[(14)] = inst_34541);

(statearr_34588[(15)] = inst_34543);

(statearr_34588[(7)] = inst_34520);

(statearr_34588[(8)] = inst_34521);

return statearr_34588;
})();
var statearr_34590_35455 = state_34563__$1;
(statearr_34590_35455[(2)] = null);

(statearr_34590_35455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (16))){
var state_34563__$1 = state_34563;
var statearr_34592_35458 = state_34563__$1;
(statearr_34592_35458[(2)] = null);

(statearr_34592_35458[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (10))){
var inst_34534 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
if(cljs.core.truth_(inst_34534)){
var statearr_34596_35460 = state_34563__$1;
(statearr_34596_35460[(1)] = (11));

} else {
var statearr_34598_35461 = state_34563__$1;
(statearr_34598_35461[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (18))){
var inst_34553 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34600_35462 = state_34563__$1;
(statearr_34600_35462[(2)] = inst_34553);

(statearr_34600_35462[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (8))){
var inst_34529 = (state_34563[(13)]);
var state_34563__$1 = state_34563;
var statearr_34603_35463 = state_34563__$1;
(statearr_34603_35463[(2)] = inst_34529);

(statearr_34603_35463[(1)] = (10));


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
var cljs$core$async$state_machine__32391__auto__ = null;
var cljs$core$async$state_machine__32391__auto____0 = (function (){
var statearr_34607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34607[(0)] = cljs$core$async$state_machine__32391__auto__);

(statearr_34607[(1)] = (1));

return statearr_34607;
});
var cljs$core$async$state_machine__32391__auto____1 = (function (state_34563){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_34563);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e34610){var ex__32394__auto__ = e34610;
var statearr_34611_35464 = state_34563;
(statearr_34611_35464[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_34563[(4)]))){
var statearr_34613_35465 = state_34563;
(statearr_34613_35465[(1)] = cljs.core.first((state_34563[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35466 = state_34563;
state_34563 = G__35466;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
cljs$core$async$state_machine__32391__auto__ = function(state_34563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32391__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32391__auto____1.call(this,state_34563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32391__auto____0;
cljs$core$async$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32391__auto____1;
return cljs$core$async$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_34618 = f__32472__auto__();
(statearr_34618[(6)] = c__32471__auto___35375);

return statearr_34618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
