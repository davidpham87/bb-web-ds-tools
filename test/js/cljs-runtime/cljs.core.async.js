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
cljs.core.async.t_cljs$core$async32498 = (function (f,blockable,meta32499){
this.f = f;
this.blockable = blockable;
this.meta32499 = meta32499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32500,meta32499__$1){
var self__ = this;
var _32500__$1 = this;
return (new cljs.core.async.t_cljs$core$async32498(self__.f,self__.blockable,meta32499__$1));
}));

(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32500){
var self__ = this;
var _32500__$1 = this;
return self__.meta32499;
}));

(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32499","meta32499",-326100837,null)], null);
}));

(cljs.core.async.t_cljs$core$async32498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32498");

(cljs.core.async.t_cljs$core$async32498.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32498.
 */
cljs.core.async.__GT_t_cljs$core$async32498 = (function cljs$core$async$__GT_t_cljs$core$async32498(f,blockable,meta32499){
return (new cljs.core.async.t_cljs$core$async32498(f,blockable,meta32499));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32496 = arguments.length;
switch (G__32496) {
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
return (new cljs.core.async.t_cljs$core$async32498(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32519 = arguments.length;
switch (G__32519) {
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
var G__32523 = arguments.length;
switch (G__32523) {
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
var G__32528 = arguments.length;
switch (G__32528) {
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
var val_34054 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34054) : fn1.call(null,val_34054));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34054) : fn1.call(null,val_34054));
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
var G__32530 = arguments.length;
switch (G__32530) {
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
var n__5616__auto___34057 = n;
var x_34058 = (0);
while(true){
if((x_34058 < n__5616__auto___34057)){
(a[x_34058] = x_34058);

var G__34059 = (x_34058 + (1));
x_34058 = G__34059;
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
cljs.core.async.t_cljs$core$async32531 = (function (flag,meta32532){
this.flag = flag;
this.meta32532 = meta32532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32533,meta32532__$1){
var self__ = this;
var _32533__$1 = this;
return (new cljs.core.async.t_cljs$core$async32531(self__.flag,meta32532__$1));
}));

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32533){
var self__ = this;
var _32533__$1 = this;
return self__.meta32532;
}));

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32532","meta32532",1285423067,null)], null);
}));

(cljs.core.async.t_cljs$core$async32531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32531");

(cljs.core.async.t_cljs$core$async32531.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32531.
 */
cljs.core.async.__GT_t_cljs$core$async32531 = (function cljs$core$async$__GT_t_cljs$core$async32531(flag,meta32532){
return (new cljs.core.async.t_cljs$core$async32531(flag,meta32532));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32531(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32535 = (function (flag,cb,meta32536){
this.flag = flag;
this.cb = cb;
this.meta32536 = meta32536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32537,meta32536__$1){
var self__ = this;
var _32537__$1 = this;
return (new cljs.core.async.t_cljs$core$async32535(self__.flag,self__.cb,meta32536__$1));
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
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32536","meta32536",-1809644186,null)], null);
}));

(cljs.core.async.t_cljs$core$async32535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32535");

(cljs.core.async.t_cljs$core$async32535.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32535.
 */
cljs.core.async.__GT_t_cljs$core$async32535 = (function cljs$core$async$__GT_t_cljs$core$async32535(flag,cb,meta32536){
return (new cljs.core.async.t_cljs$core$async32535(flag,cb,meta32536));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32535(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_34060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34060)){
if((!(((port_34060.cljs$core$IFn$_invoke$arity$1 ? port_34060.cljs$core$IFn$_invoke$arity$1((1)) : port_34060.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34061 = (i + (1));
i = G__34061;
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
return (function (p1__32548_SHARP_){
var G__32564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32548_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32564) : fret.call(null,G__32564));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__32550_SHARP_){
var G__32565 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32550_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32565) : fret.call(null,G__32565));
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
var G__34064 = (i + (1));
i = G__34064;
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
var len__5749__auto___34066 = arguments.length;
var i__5750__auto___34067 = (0);
while(true){
if((i__5750__auto___34067 < len__5749__auto___34066)){
args__5755__auto__.push((arguments[i__5750__auto___34067]));

var G__34068 = (i__5750__auto___34067 + (1));
i__5750__auto___34067 = G__34068;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32570){
var map__32575 = p__32570;
var map__32575__$1 = cljs.core.__destructure_map(map__32575);
var opts = map__32575__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32568){
var G__32569 = cljs.core.first(seq32568);
var seq32568__$1 = cljs.core.next(seq32568);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32569,seq32568__$1);
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
var G__32615 = arguments.length;
switch (G__32615) {
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
var c__32431__auto___34074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_32674){
var state_val_32675 = (state_32674[(1)]);
if((state_val_32675 === (7))){
var inst_32669 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32676_34075 = state_32674__$1;
(statearr_32676_34075[(2)] = inst_32669);

(statearr_32676_34075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (1))){
var state_32674__$1 = state_32674;
var statearr_32677_34076 = state_32674__$1;
(statearr_32677_34076[(2)] = null);

(statearr_32677_34076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (4))){
var inst_32640 = (state_32674[(7)]);
var inst_32640__$1 = (state_32674[(2)]);
var inst_32649 = (inst_32640__$1 == null);
var state_32674__$1 = (function (){var statearr_32678 = state_32674;
(statearr_32678[(7)] = inst_32640__$1);

return statearr_32678;
})();
if(cljs.core.truth_(inst_32649)){
var statearr_32679_34077 = state_32674__$1;
(statearr_32679_34077[(1)] = (5));

} else {
var statearr_32680_34078 = state_32674__$1;
(statearr_32680_34078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (13))){
var state_32674__$1 = state_32674;
var statearr_32681_34079 = state_32674__$1;
(statearr_32681_34079[(2)] = null);

(statearr_32681_34079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (6))){
var inst_32640 = (state_32674[(7)]);
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32674__$1,(11),to,inst_32640);
} else {
if((state_val_32675 === (3))){
var inst_32671 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32674__$1,inst_32671);
} else {
if((state_val_32675 === (12))){
var state_32674__$1 = state_32674;
var statearr_32682_34080 = state_32674__$1;
(statearr_32682_34080[(2)] = null);

(statearr_32682_34080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (2))){
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32674__$1,(4),from);
} else {
if((state_val_32675 === (11))){
var inst_32662 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
if(cljs.core.truth_(inst_32662)){
var statearr_32683_34081 = state_32674__$1;
(statearr_32683_34081[(1)] = (12));

} else {
var statearr_32684_34082 = state_32674__$1;
(statearr_32684_34082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (9))){
var state_32674__$1 = state_32674;
var statearr_32685_34083 = state_32674__$1;
(statearr_32685_34083[(2)] = null);

(statearr_32685_34083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (5))){
var state_32674__$1 = state_32674;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32686_34084 = state_32674__$1;
(statearr_32686_34084[(1)] = (8));

} else {
var statearr_32687_34085 = state_32674__$1;
(statearr_32687_34085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (14))){
var inst_32667 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32688_34086 = state_32674__$1;
(statearr_32688_34086[(2)] = inst_32667);

(statearr_32688_34086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (10))){
var inst_32659 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32689_34087 = state_32674__$1;
(statearr_32689_34087[(2)] = inst_32659);

(statearr_32689_34087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32675 === (8))){
var inst_32656 = cljs.core.async.close_BANG_(to);
var state_32674__$1 = state_32674;
var statearr_32690_34088 = state_32674__$1;
(statearr_32690_34088[(2)] = inst_32656);

(statearr_32690_34088[(1)] = (10));


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
var statearr_32691 = [null,null,null,null,null,null,null,null];
(statearr_32691[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_32691[(1)] = (1));

return statearr_32691;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_32674){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32674);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32692){var ex__32350__auto__ = e32692;
var statearr_32693_34089 = state_32674;
(statearr_32693_34089[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32674[(4)]))){
var statearr_32694_34090 = state_32674;
(statearr_32694_34090[(1)] = cljs.core.first((state_32674[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34091 = state_32674;
state_32674 = G__34091;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_32674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_32674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_32695 = f__32432__auto__();
(statearr_32695[(6)] = c__32431__auto___34074);

return statearr_32695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
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
var process__$1 = (function (p__32696){
var vec__32697 = p__32696;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32697,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32697,(1),null);
var job = vec__32697;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32431__auto___34092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_32704){
var state_val_32705 = (state_32704[(1)]);
if((state_val_32705 === (1))){
var state_32704__$1 = state_32704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32704__$1,(2),res,v);
} else {
if((state_val_32705 === (2))){
var inst_32701 = (state_32704[(2)]);
var inst_32702 = cljs.core.async.close_BANG_(res);
var state_32704__$1 = (function (){var statearr_32706 = state_32704;
(statearr_32706[(7)] = inst_32701);

return statearr_32706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32704__$1,inst_32702);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0 = (function (){
var statearr_32707 = [null,null,null,null,null,null,null,null];
(statearr_32707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__);

(statearr_32707[(1)] = (1));

return statearr_32707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1 = (function (state_32704){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32704);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32708){var ex__32350__auto__ = e32708;
var statearr_32709_34093 = state_32704;
(statearr_32709_34093[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32704[(4)]))){
var statearr_32710_34094 = state_32704;
(statearr_32710_34094[(1)] = cljs.core.first((state_32704[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34095 = state_32704;
state_32704 = G__34095;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = function(state_32704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1.call(this,state_32704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_32711 = f__32432__auto__();
(statearr_32711[(6)] = c__32431__auto___34092);

return statearr_32711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32712){
var vec__32713 = p__32712;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32713,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32713,(1),null);
var job = vec__32713;
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
var n__5616__auto___34096 = n;
var __34097 = (0);
while(true){
if((__34097 < n__5616__auto___34096)){
var G__32716_34098 = type;
var G__32716_34099__$1 = (((G__32716_34098 instanceof cljs.core.Keyword))?G__32716_34098.fqn:null);
switch (G__32716_34099__$1) {
case "compute":
var c__32431__auto___34101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34097,c__32431__auto___34101,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async){
return (function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = ((function (__34097,c__32431__auto___34101,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async){
return (function (state_32729){
var state_val_32730 = (state_32729[(1)]);
if((state_val_32730 === (1))){
var state_32729__$1 = state_32729;
var statearr_32731_34102 = state_32729__$1;
(statearr_32731_34102[(2)] = null);

(statearr_32731_34102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (2))){
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32729__$1,(4),jobs);
} else {
if((state_val_32730 === (3))){
var inst_32727 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32729__$1,inst_32727);
} else {
if((state_val_32730 === (4))){
var inst_32719 = (state_32729[(2)]);
var inst_32720 = process__$1(inst_32719);
var state_32729__$1 = state_32729;
if(cljs.core.truth_(inst_32720)){
var statearr_32732_34103 = state_32729__$1;
(statearr_32732_34103[(1)] = (5));

} else {
var statearr_32733_34104 = state_32729__$1;
(statearr_32733_34104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (5))){
var state_32729__$1 = state_32729;
var statearr_32734_34105 = state_32729__$1;
(statearr_32734_34105[(2)] = null);

(statearr_32734_34105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (6))){
var state_32729__$1 = state_32729;
var statearr_32735_34106 = state_32729__$1;
(statearr_32735_34106[(2)] = null);

(statearr_32735_34106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (7))){
var inst_32725 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
var statearr_32736_34107 = state_32729__$1;
(statearr_32736_34107[(2)] = inst_32725);

(statearr_32736_34107[(1)] = (3));


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
});})(__34097,c__32431__auto___34101,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async))
;
return ((function (__34097,switch__32346__auto__,c__32431__auto___34101,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0 = (function (){
var statearr_32737 = [null,null,null,null,null,null,null];
(statearr_32737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__);

(statearr_32737[(1)] = (1));

return statearr_32737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1 = (function (state_32729){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32729);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32738){var ex__32350__auto__ = e32738;
var statearr_32739_34108 = state_32729;
(statearr_32739_34108[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32729[(4)]))){
var statearr_32740_34109 = state_32729;
(statearr_32740_34109[(1)] = cljs.core.first((state_32729[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34110 = state_32729;
state_32729 = G__34110;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = function(state_32729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1.call(this,state_32729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__;
})()
;})(__34097,switch__32346__auto__,c__32431__auto___34101,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async))
})();
var state__32433__auto__ = (function (){var statearr_32741 = f__32432__auto__();
(statearr_32741[(6)] = c__32431__auto___34101);

return statearr_32741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
});})(__34097,c__32431__auto___34101,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async))
);


break;
case "async":
var c__32431__auto___34111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34097,c__32431__auto___34111,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async){
return (function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = ((function (__34097,c__32431__auto___34111,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async){
return (function (state_32754){
var state_val_32755 = (state_32754[(1)]);
if((state_val_32755 === (1))){
var state_32754__$1 = state_32754;
var statearr_32756_34112 = state_32754__$1;
(statearr_32756_34112[(2)] = null);

(statearr_32756_34112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (2))){
var state_32754__$1 = state_32754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32754__$1,(4),jobs);
} else {
if((state_val_32755 === (3))){
var inst_32752 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32754__$1,inst_32752);
} else {
if((state_val_32755 === (4))){
var inst_32744 = (state_32754[(2)]);
var inst_32745 = async(inst_32744);
var state_32754__$1 = state_32754;
if(cljs.core.truth_(inst_32745)){
var statearr_32757_34113 = state_32754__$1;
(statearr_32757_34113[(1)] = (5));

} else {
var statearr_32758_34114 = state_32754__$1;
(statearr_32758_34114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (5))){
var state_32754__$1 = state_32754;
var statearr_32759_34115 = state_32754__$1;
(statearr_32759_34115[(2)] = null);

(statearr_32759_34115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (6))){
var state_32754__$1 = state_32754;
var statearr_32760_34116 = state_32754__$1;
(statearr_32760_34116[(2)] = null);

(statearr_32760_34116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (7))){
var inst_32750 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
var statearr_32761_34117 = state_32754__$1;
(statearr_32761_34117[(2)] = inst_32750);

(statearr_32761_34117[(1)] = (3));


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
});})(__34097,c__32431__auto___34111,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async))
;
return ((function (__34097,switch__32346__auto__,c__32431__auto___34111,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0 = (function (){
var statearr_32762 = [null,null,null,null,null,null,null];
(statearr_32762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__);

(statearr_32762[(1)] = (1));

return statearr_32762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1 = (function (state_32754){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32754);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32763){var ex__32350__auto__ = e32763;
var statearr_32764_34118 = state_32754;
(statearr_32764_34118[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32754[(4)]))){
var statearr_32765_34119 = state_32754;
(statearr_32765_34119[(1)] = cljs.core.first((state_32754[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34121 = state_32754;
state_32754 = G__34121;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = function(state_32754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1.call(this,state_32754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__;
})()
;})(__34097,switch__32346__auto__,c__32431__auto___34111,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async))
})();
var state__32433__auto__ = (function (){var statearr_32766 = f__32432__auto__();
(statearr_32766[(6)] = c__32431__auto___34111);

return statearr_32766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
});})(__34097,c__32431__auto___34111,G__32716_34098,G__32716_34099__$1,n__5616__auto___34096,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32716_34099__$1)].join('')));

}

var G__34122 = (__34097 + (1));
__34097 = G__34122;
continue;
} else {
}
break;
}

var c__32431__auto___34123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_32788){
var state_val_32789 = (state_32788[(1)]);
if((state_val_32789 === (7))){
var inst_32784 = (state_32788[(2)]);
var state_32788__$1 = state_32788;
var statearr_32790_34124 = state_32788__$1;
(statearr_32790_34124[(2)] = inst_32784);

(statearr_32790_34124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (1))){
var state_32788__$1 = state_32788;
var statearr_32791_34125 = state_32788__$1;
(statearr_32791_34125[(2)] = null);

(statearr_32791_34125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (4))){
var inst_32769 = (state_32788[(7)]);
var inst_32769__$1 = (state_32788[(2)]);
var inst_32770 = (inst_32769__$1 == null);
var state_32788__$1 = (function (){var statearr_32792 = state_32788;
(statearr_32792[(7)] = inst_32769__$1);

return statearr_32792;
})();
if(cljs.core.truth_(inst_32770)){
var statearr_32793_34126 = state_32788__$1;
(statearr_32793_34126[(1)] = (5));

} else {
var statearr_32794_34127 = state_32788__$1;
(statearr_32794_34127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (6))){
var inst_32769 = (state_32788[(7)]);
var inst_32774 = (state_32788[(8)]);
var inst_32774__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32776 = [inst_32769,inst_32774__$1];
var inst_32777 = (new cljs.core.PersistentVector(null,2,(5),inst_32775,inst_32776,null));
var state_32788__$1 = (function (){var statearr_32795 = state_32788;
(statearr_32795[(8)] = inst_32774__$1);

return statearr_32795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32788__$1,(8),jobs,inst_32777);
} else {
if((state_val_32789 === (3))){
var inst_32786 = (state_32788[(2)]);
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32788__$1,inst_32786);
} else {
if((state_val_32789 === (2))){
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32788__$1,(4),from);
} else {
if((state_val_32789 === (9))){
var inst_32781 = (state_32788[(2)]);
var state_32788__$1 = (function (){var statearr_32796 = state_32788;
(statearr_32796[(9)] = inst_32781);

return statearr_32796;
})();
var statearr_32797_34128 = state_32788__$1;
(statearr_32797_34128[(2)] = null);

(statearr_32797_34128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (5))){
var inst_32772 = cljs.core.async.close_BANG_(jobs);
var state_32788__$1 = state_32788;
var statearr_32798_34129 = state_32788__$1;
(statearr_32798_34129[(2)] = inst_32772);

(statearr_32798_34129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (8))){
var inst_32774 = (state_32788[(8)]);
var inst_32779 = (state_32788[(2)]);
var state_32788__$1 = (function (){var statearr_32799 = state_32788;
(statearr_32799[(10)] = inst_32779);

return statearr_32799;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32788__$1,(9),results,inst_32774);
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
var statearr_32800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__);

(statearr_32800[(1)] = (1));

return statearr_32800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1 = (function (state_32788){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32788);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32801){var ex__32350__auto__ = e32801;
var statearr_32802_34131 = state_32788;
(statearr_32802_34131[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32788[(4)]))){
var statearr_32803_34132 = state_32788;
(statearr_32803_34132[(1)] = cljs.core.first((state_32788[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34133 = state_32788;
state_32788 = G__34133;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = function(state_32788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1.call(this,state_32788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_32804 = f__32432__auto__();
(statearr_32804[(6)] = c__32431__auto___34123);

return statearr_32804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));


var c__32431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_32842){
var state_val_32843 = (state_32842[(1)]);
if((state_val_32843 === (7))){
var inst_32838 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
var statearr_32844_34134 = state_32842__$1;
(statearr_32844_34134[(2)] = inst_32838);

(statearr_32844_34134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (20))){
var state_32842__$1 = state_32842;
var statearr_32845_34135 = state_32842__$1;
(statearr_32845_34135[(2)] = null);

(statearr_32845_34135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (1))){
var state_32842__$1 = state_32842;
var statearr_32846_34136 = state_32842__$1;
(statearr_32846_34136[(2)] = null);

(statearr_32846_34136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (4))){
var inst_32807 = (state_32842[(7)]);
var inst_32807__$1 = (state_32842[(2)]);
var inst_32808 = (inst_32807__$1 == null);
var state_32842__$1 = (function (){var statearr_32847 = state_32842;
(statearr_32847[(7)] = inst_32807__$1);

return statearr_32847;
})();
if(cljs.core.truth_(inst_32808)){
var statearr_32848_34137 = state_32842__$1;
(statearr_32848_34137[(1)] = (5));

} else {
var statearr_32849_34138 = state_32842__$1;
(statearr_32849_34138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (15))){
var inst_32820 = (state_32842[(8)]);
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32842__$1,(18),to,inst_32820);
} else {
if((state_val_32843 === (21))){
var inst_32833 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
var statearr_32850_34139 = state_32842__$1;
(statearr_32850_34139[(2)] = inst_32833);

(statearr_32850_34139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (13))){
var inst_32835 = (state_32842[(2)]);
var state_32842__$1 = (function (){var statearr_32851 = state_32842;
(statearr_32851[(9)] = inst_32835);

return statearr_32851;
})();
var statearr_32852_34140 = state_32842__$1;
(statearr_32852_34140[(2)] = null);

(statearr_32852_34140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (6))){
var inst_32807 = (state_32842[(7)]);
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32842__$1,(11),inst_32807);
} else {
if((state_val_32843 === (17))){
var inst_32828 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
if(cljs.core.truth_(inst_32828)){
var statearr_32853_34141 = state_32842__$1;
(statearr_32853_34141[(1)] = (19));

} else {
var statearr_32854_34142 = state_32842__$1;
(statearr_32854_34142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (3))){
var inst_32840 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32842__$1,inst_32840);
} else {
if((state_val_32843 === (12))){
var inst_32817 = (state_32842[(10)]);
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32842__$1,(14),inst_32817);
} else {
if((state_val_32843 === (2))){
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32842__$1,(4),results);
} else {
if((state_val_32843 === (19))){
var state_32842__$1 = state_32842;
var statearr_32855_34150 = state_32842__$1;
(statearr_32855_34150[(2)] = null);

(statearr_32855_34150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (11))){
var inst_32817 = (state_32842[(2)]);
var state_32842__$1 = (function (){var statearr_32856 = state_32842;
(statearr_32856[(10)] = inst_32817);

return statearr_32856;
})();
var statearr_32857_34151 = state_32842__$1;
(statearr_32857_34151[(2)] = null);

(statearr_32857_34151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (9))){
var state_32842__$1 = state_32842;
var statearr_32858_34152 = state_32842__$1;
(statearr_32858_34152[(2)] = null);

(statearr_32858_34152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (5))){
var state_32842__$1 = state_32842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32859_34153 = state_32842__$1;
(statearr_32859_34153[(1)] = (8));

} else {
var statearr_32860_34154 = state_32842__$1;
(statearr_32860_34154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (14))){
var inst_32820 = (state_32842[(8)]);
var inst_32822 = (state_32842[(11)]);
var inst_32820__$1 = (state_32842[(2)]);
var inst_32821 = (inst_32820__$1 == null);
var inst_32822__$1 = cljs.core.not(inst_32821);
var state_32842__$1 = (function (){var statearr_32861 = state_32842;
(statearr_32861[(8)] = inst_32820__$1);

(statearr_32861[(11)] = inst_32822__$1);

return statearr_32861;
})();
if(inst_32822__$1){
var statearr_32862_34155 = state_32842__$1;
(statearr_32862_34155[(1)] = (15));

} else {
var statearr_32863_34156 = state_32842__$1;
(statearr_32863_34156[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (16))){
var inst_32822 = (state_32842[(11)]);
var state_32842__$1 = state_32842;
var statearr_32864_34157 = state_32842__$1;
(statearr_32864_34157[(2)] = inst_32822);

(statearr_32864_34157[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (10))){
var inst_32814 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
var statearr_32865_34158 = state_32842__$1;
(statearr_32865_34158[(2)] = inst_32814);

(statearr_32865_34158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (18))){
var inst_32825 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
var statearr_32866_34159 = state_32842__$1;
(statearr_32866_34159[(2)] = inst_32825);

(statearr_32866_34159[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (8))){
var inst_32811 = cljs.core.async.close_BANG_(to);
var state_32842__$1 = state_32842;
var statearr_32867_34160 = state_32842__$1;
(statearr_32867_34160[(2)] = inst_32811);

(statearr_32867_34160[(1)] = (10));


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
var statearr_32868 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__);

(statearr_32868[(1)] = (1));

return statearr_32868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1 = (function (state_32842){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32842);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32869){var ex__32350__auto__ = e32869;
var statearr_32870_34161 = state_32842;
(statearr_32870_34161[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32842[(4)]))){
var statearr_32871_34162 = state_32842;
(statearr_32871_34162[(1)] = cljs.core.first((state_32842[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34164 = state_32842;
state_32842 = G__34164;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__ = function(state_32842){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1.call(this,state_32842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_32872 = f__32432__auto__();
(statearr_32872[(6)] = c__32431__auto__);

return statearr_32872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));

return c__32431__auto__;
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
var G__32874 = arguments.length;
switch (G__32874) {
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
var G__32876 = arguments.length;
switch (G__32876) {
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
var G__32878 = arguments.length;
switch (G__32878) {
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
var c__32431__auto___34176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_32904){
var state_val_32905 = (state_32904[(1)]);
if((state_val_32905 === (7))){
var inst_32900 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32906_34177 = state_32904__$1;
(statearr_32906_34177[(2)] = inst_32900);

(statearr_32906_34177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (1))){
var state_32904__$1 = state_32904;
var statearr_32907_34178 = state_32904__$1;
(statearr_32907_34178[(2)] = null);

(statearr_32907_34178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (4))){
var inst_32881 = (state_32904[(7)]);
var inst_32881__$1 = (state_32904[(2)]);
var inst_32882 = (inst_32881__$1 == null);
var state_32904__$1 = (function (){var statearr_32908 = state_32904;
(statearr_32908[(7)] = inst_32881__$1);

return statearr_32908;
})();
if(cljs.core.truth_(inst_32882)){
var statearr_32909_34179 = state_32904__$1;
(statearr_32909_34179[(1)] = (5));

} else {
var statearr_32910_34180 = state_32904__$1;
(statearr_32910_34180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (13))){
var state_32904__$1 = state_32904;
var statearr_32911_34183 = state_32904__$1;
(statearr_32911_34183[(2)] = null);

(statearr_32911_34183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (6))){
var inst_32881 = (state_32904[(7)]);
var inst_32887 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32881) : p.call(null,inst_32881));
var state_32904__$1 = state_32904;
if(cljs.core.truth_(inst_32887)){
var statearr_32912_34184 = state_32904__$1;
(statearr_32912_34184[(1)] = (9));

} else {
var statearr_32913_34185 = state_32904__$1;
(statearr_32913_34185[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (3))){
var inst_32902 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32904__$1,inst_32902);
} else {
if((state_val_32905 === (12))){
var state_32904__$1 = state_32904;
var statearr_32914_34186 = state_32904__$1;
(statearr_32914_34186[(2)] = null);

(statearr_32914_34186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (2))){
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32904__$1,(4),ch);
} else {
if((state_val_32905 === (11))){
var inst_32881 = (state_32904[(7)]);
var inst_32891 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32904__$1,(8),inst_32891,inst_32881);
} else {
if((state_val_32905 === (9))){
var state_32904__$1 = state_32904;
var statearr_32915_34187 = state_32904__$1;
(statearr_32915_34187[(2)] = tc);

(statearr_32915_34187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (5))){
var inst_32884 = cljs.core.async.close_BANG_(tc);
var inst_32885 = cljs.core.async.close_BANG_(fc);
var state_32904__$1 = (function (){var statearr_32916 = state_32904;
(statearr_32916[(8)] = inst_32884);

return statearr_32916;
})();
var statearr_32917_34188 = state_32904__$1;
(statearr_32917_34188[(2)] = inst_32885);

(statearr_32917_34188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (14))){
var inst_32898 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32918_34190 = state_32904__$1;
(statearr_32918_34190[(2)] = inst_32898);

(statearr_32918_34190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (10))){
var state_32904__$1 = state_32904;
var statearr_32919_34194 = state_32904__$1;
(statearr_32919_34194[(2)] = fc);

(statearr_32919_34194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (8))){
var inst_32893 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
if(cljs.core.truth_(inst_32893)){
var statearr_32920_34195 = state_32904__$1;
(statearr_32920_34195[(1)] = (12));

} else {
var statearr_32921_34196 = state_32904__$1;
(statearr_32921_34196[(1)] = (13));

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
var statearr_32922 = [null,null,null,null,null,null,null,null,null];
(statearr_32922[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_32922[(1)] = (1));

return statearr_32922;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_32904){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32904);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32923){var ex__32350__auto__ = e32923;
var statearr_32924_34201 = state_32904;
(statearr_32924_34201[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32904[(4)]))){
var statearr_32925_34202 = state_32904;
(statearr_32925_34202[(1)] = cljs.core.first((state_32904[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34203 = state_32904;
state_32904 = G__34203;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_32904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_32904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_32926 = f__32432__auto__();
(statearr_32926[(6)] = c__32431__auto___34176);

return statearr_32926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
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
var c__32431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_32948){
var state_val_32949 = (state_32948[(1)]);
if((state_val_32949 === (7))){
var inst_32944 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32950_34208 = state_32948__$1;
(statearr_32950_34208[(2)] = inst_32944);

(statearr_32950_34208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (1))){
var inst_32927 = init;
var inst_32928 = inst_32927;
var state_32948__$1 = (function (){var statearr_32951 = state_32948;
(statearr_32951[(7)] = inst_32928);

return statearr_32951;
})();
var statearr_32952_34215 = state_32948__$1;
(statearr_32952_34215[(2)] = null);

(statearr_32952_34215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (4))){
var inst_32931 = (state_32948[(8)]);
var inst_32931__$1 = (state_32948[(2)]);
var inst_32932 = (inst_32931__$1 == null);
var state_32948__$1 = (function (){var statearr_32953 = state_32948;
(statearr_32953[(8)] = inst_32931__$1);

return statearr_32953;
})();
if(cljs.core.truth_(inst_32932)){
var statearr_32954_34216 = state_32948__$1;
(statearr_32954_34216[(1)] = (5));

} else {
var statearr_32955_34217 = state_32948__$1;
(statearr_32955_34217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (6))){
var inst_32928 = (state_32948[(7)]);
var inst_32931 = (state_32948[(8)]);
var inst_32935 = (state_32948[(9)]);
var inst_32935__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32928,inst_32931) : f.call(null,inst_32928,inst_32931));
var inst_32936 = cljs.core.reduced_QMARK_(inst_32935__$1);
var state_32948__$1 = (function (){var statearr_32956 = state_32948;
(statearr_32956[(9)] = inst_32935__$1);

return statearr_32956;
})();
if(inst_32936){
var statearr_32957_34218 = state_32948__$1;
(statearr_32957_34218[(1)] = (8));

} else {
var statearr_32958_34219 = state_32948__$1;
(statearr_32958_34219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (3))){
var inst_32946 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32948__$1,inst_32946);
} else {
if((state_val_32949 === (2))){
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32948__$1,(4),ch);
} else {
if((state_val_32949 === (9))){
var inst_32935 = (state_32948[(9)]);
var inst_32928 = inst_32935;
var state_32948__$1 = (function (){var statearr_32959 = state_32948;
(statearr_32959[(7)] = inst_32928);

return statearr_32959;
})();
var statearr_32960_34220 = state_32948__$1;
(statearr_32960_34220[(2)] = null);

(statearr_32960_34220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (5))){
var inst_32928 = (state_32948[(7)]);
var state_32948__$1 = state_32948;
var statearr_32961_34221 = state_32948__$1;
(statearr_32961_34221[(2)] = inst_32928);

(statearr_32961_34221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (10))){
var inst_32942 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32962_34222 = state_32948__$1;
(statearr_32962_34222[(2)] = inst_32942);

(statearr_32962_34222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (8))){
var inst_32935 = (state_32948[(9)]);
var inst_32938 = cljs.core.deref(inst_32935);
var state_32948__$1 = state_32948;
var statearr_32963_34223 = state_32948__$1;
(statearr_32963_34223[(2)] = inst_32938);

(statearr_32963_34223[(1)] = (10));


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
var statearr_32964 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32964[(0)] = cljs$core$async$reduce_$_state_machine__32347__auto__);

(statearr_32964[(1)] = (1));

return statearr_32964;
});
var cljs$core$async$reduce_$_state_machine__32347__auto____1 = (function (state_32948){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32948);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32965){var ex__32350__auto__ = e32965;
var statearr_32966_34228 = state_32948;
(statearr_32966_34228[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32948[(4)]))){
var statearr_32967_34229 = state_32948;
(statearr_32967_34229[(1)] = cljs.core.first((state_32948[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34230 = state_32948;
state_32948 = G__34230;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32347__auto__ = function(state_32948){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32347__auto____1.call(this,state_32948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32347__auto____0;
cljs$core$async$reduce_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32347__auto____1;
return cljs$core$async$reduce_$_state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_32968 = f__32432__auto__();
(statearr_32968[(6)] = c__32431__auto__);

return statearr_32968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));

return c__32431__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_32974){
var state_val_32975 = (state_32974[(1)]);
if((state_val_32975 === (1))){
var inst_32969 = cljs.core.async.reduce(f__$1,init,ch);
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32974__$1,(2),inst_32969);
} else {
if((state_val_32975 === (2))){
var inst_32971 = (state_32974[(2)]);
var inst_32972 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32971) : f__$1.call(null,inst_32971));
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32974__$1,inst_32972);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32347__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32347__auto____0 = (function (){
var statearr_32976 = [null,null,null,null,null,null,null];
(statearr_32976[(0)] = cljs$core$async$transduce_$_state_machine__32347__auto__);

(statearr_32976[(1)] = (1));

return statearr_32976;
});
var cljs$core$async$transduce_$_state_machine__32347__auto____1 = (function (state_32974){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_32974);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e32977){var ex__32350__auto__ = e32977;
var statearr_32978_34233 = state_32974;
(statearr_32978_34233[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_32974[(4)]))){
var statearr_32979_34234 = state_32974;
(statearr_32979_34234[(1)] = cljs.core.first((state_32974[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34235 = state_32974;
state_32974 = G__34235;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32347__auto__ = function(state_32974){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32347__auto____1.call(this,state_32974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32347__auto____0;
cljs$core$async$transduce_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32347__auto____1;
return cljs$core$async$transduce_$_state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_32980 = f__32432__auto__();
(statearr_32980[(6)] = c__32431__auto__);

return statearr_32980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));

return c__32431__auto__;
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
var G__32982 = arguments.length;
switch (G__32982) {
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
var c__32431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_33007){
var state_val_33008 = (state_33007[(1)]);
if((state_val_33008 === (7))){
var inst_32989 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33009_34237 = state_33007__$1;
(statearr_33009_34237[(2)] = inst_32989);

(statearr_33009_34237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (1))){
var inst_32983 = cljs.core.seq(coll);
var inst_32984 = inst_32983;
var state_33007__$1 = (function (){var statearr_33010 = state_33007;
(statearr_33010[(7)] = inst_32984);

return statearr_33010;
})();
var statearr_33011_34238 = state_33007__$1;
(statearr_33011_34238[(2)] = null);

(statearr_33011_34238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (4))){
var inst_32984 = (state_33007[(7)]);
var inst_32987 = cljs.core.first(inst_32984);
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33007__$1,(7),ch,inst_32987);
} else {
if((state_val_33008 === (13))){
var inst_33001 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33012_34239 = state_33007__$1;
(statearr_33012_34239[(2)] = inst_33001);

(statearr_33012_34239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (6))){
var inst_32992 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
if(cljs.core.truth_(inst_32992)){
var statearr_33013_34240 = state_33007__$1;
(statearr_33013_34240[(1)] = (8));

} else {
var statearr_33014_34241 = state_33007__$1;
(statearr_33014_34241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (3))){
var inst_33005 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33007__$1,inst_33005);
} else {
if((state_val_33008 === (12))){
var state_33007__$1 = state_33007;
var statearr_33015_34242 = state_33007__$1;
(statearr_33015_34242[(2)] = null);

(statearr_33015_34242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (2))){
var inst_32984 = (state_33007[(7)]);
var state_33007__$1 = state_33007;
if(cljs.core.truth_(inst_32984)){
var statearr_33016_34243 = state_33007__$1;
(statearr_33016_34243[(1)] = (4));

} else {
var statearr_33017_34244 = state_33007__$1;
(statearr_33017_34244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (11))){
var inst_32998 = cljs.core.async.close_BANG_(ch);
var state_33007__$1 = state_33007;
var statearr_33018_34245 = state_33007__$1;
(statearr_33018_34245[(2)] = inst_32998);

(statearr_33018_34245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (9))){
var state_33007__$1 = state_33007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33019_34246 = state_33007__$1;
(statearr_33019_34246[(1)] = (11));

} else {
var statearr_33020_34247 = state_33007__$1;
(statearr_33020_34247[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (5))){
var inst_32984 = (state_33007[(7)]);
var state_33007__$1 = state_33007;
var statearr_33021_34249 = state_33007__$1;
(statearr_33021_34249[(2)] = inst_32984);

(statearr_33021_34249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (10))){
var inst_33003 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33022_34250 = state_33007__$1;
(statearr_33022_34250[(2)] = inst_33003);

(statearr_33022_34250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (8))){
var inst_32984 = (state_33007[(7)]);
var inst_32994 = cljs.core.next(inst_32984);
var inst_32984__$1 = inst_32994;
var state_33007__$1 = (function (){var statearr_33023 = state_33007;
(statearr_33023[(7)] = inst_32984__$1);

return statearr_33023;
})();
var statearr_33024_34251 = state_33007__$1;
(statearr_33024_34251[(2)] = null);

(statearr_33024_34251[(1)] = (2));


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
var statearr_33025 = [null,null,null,null,null,null,null,null];
(statearr_33025[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33025[(1)] = (1));

return statearr_33025;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33007){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33007);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33026){var ex__32350__auto__ = e33026;
var statearr_33027_34252 = state_33007;
(statearr_33027_34252[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33007[(4)]))){
var statearr_33028_34253 = state_33007;
(statearr_33028_34253[(1)] = cljs.core.first((state_33007[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34255 = state_33007;
state_33007 = G__34255;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_33029 = f__32432__auto__();
(statearr_33029[(6)] = c__32431__auto__);

return statearr_33029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));

return c__32431__auto__;
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
var G__33031 = arguments.length;
switch (G__33031) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34257 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34257(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34259 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34259(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34260 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34260(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34261 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34261(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33032 = (function (ch,cs,meta33033){
this.ch = ch;
this.cs = cs;
this.meta33033 = meta33033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33034,meta33033__$1){
var self__ = this;
var _33034__$1 = this;
return (new cljs.core.async.t_cljs$core$async33032(self__.ch,self__.cs,meta33033__$1));
}));

(cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33034){
var self__ = this;
var _33034__$1 = this;
return self__.meta33033;
}));

(cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33032.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33033","meta33033",248996423,null)], null);
}));

(cljs.core.async.t_cljs$core$async33032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33032");

(cljs.core.async.t_cljs$core$async33032.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33032.
 */
cljs.core.async.__GT_t_cljs$core$async33032 = (function cljs$core$async$__GT_t_cljs$core$async33032(ch,cs,meta33033){
return (new cljs.core.async.t_cljs$core$async33032(ch,cs,meta33033));
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
var m = (new cljs.core.async.t_cljs$core$async33032(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32431__auto___34262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_33167){
var state_val_33168 = (state_33167[(1)]);
if((state_val_33168 === (7))){
var inst_33163 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33169_34263 = state_33167__$1;
(statearr_33169_34263[(2)] = inst_33163);

(statearr_33169_34263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (20))){
var inst_33068 = (state_33167[(7)]);
var inst_33080 = cljs.core.first(inst_33068);
var inst_33081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33080,(0),null);
var inst_33082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33080,(1),null);
var state_33167__$1 = (function (){var statearr_33170 = state_33167;
(statearr_33170[(8)] = inst_33081);

return statearr_33170;
})();
if(cljs.core.truth_(inst_33082)){
var statearr_33171_34264 = state_33167__$1;
(statearr_33171_34264[(1)] = (22));

} else {
var statearr_33172_34265 = state_33167__$1;
(statearr_33172_34265[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (27))){
var inst_33110 = (state_33167[(9)]);
var inst_33112 = (state_33167[(10)]);
var inst_33117 = (state_33167[(11)]);
var inst_33037 = (state_33167[(12)]);
var inst_33117__$1 = cljs.core._nth(inst_33110,inst_33112);
var inst_33118 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33117__$1,inst_33037,done);
var state_33167__$1 = (function (){var statearr_33173 = state_33167;
(statearr_33173[(11)] = inst_33117__$1);

return statearr_33173;
})();
if(cljs.core.truth_(inst_33118)){
var statearr_33174_34269 = state_33167__$1;
(statearr_33174_34269[(1)] = (30));

} else {
var statearr_33175_34270 = state_33167__$1;
(statearr_33175_34270[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (1))){
var state_33167__$1 = state_33167;
var statearr_33176_34271 = state_33167__$1;
(statearr_33176_34271[(2)] = null);

(statearr_33176_34271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (24))){
var inst_33068 = (state_33167[(7)]);
var inst_33087 = (state_33167[(2)]);
var inst_33088 = cljs.core.next(inst_33068);
var inst_33046 = inst_33088;
var inst_33047 = null;
var inst_33048 = (0);
var inst_33049 = (0);
var state_33167__$1 = (function (){var statearr_33177 = state_33167;
(statearr_33177[(13)] = inst_33087);

(statearr_33177[(14)] = inst_33046);

(statearr_33177[(15)] = inst_33047);

(statearr_33177[(16)] = inst_33048);

(statearr_33177[(17)] = inst_33049);

return statearr_33177;
})();
var statearr_33178_34272 = state_33167__$1;
(statearr_33178_34272[(2)] = null);

(statearr_33178_34272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (39))){
var state_33167__$1 = state_33167;
var statearr_33182_34273 = state_33167__$1;
(statearr_33182_34273[(2)] = null);

(statearr_33182_34273[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (4))){
var inst_33037 = (state_33167[(12)]);
var inst_33037__$1 = (state_33167[(2)]);
var inst_33038 = (inst_33037__$1 == null);
var state_33167__$1 = (function (){var statearr_33183 = state_33167;
(statearr_33183[(12)] = inst_33037__$1);

return statearr_33183;
})();
if(cljs.core.truth_(inst_33038)){
var statearr_33184_34274 = state_33167__$1;
(statearr_33184_34274[(1)] = (5));

} else {
var statearr_33185_34275 = state_33167__$1;
(statearr_33185_34275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (15))){
var inst_33049 = (state_33167[(17)]);
var inst_33046 = (state_33167[(14)]);
var inst_33047 = (state_33167[(15)]);
var inst_33048 = (state_33167[(16)]);
var inst_33064 = (state_33167[(2)]);
var inst_33065 = (inst_33049 + (1));
var tmp33179 = inst_33046;
var tmp33180 = inst_33048;
var tmp33181 = inst_33047;
var inst_33046__$1 = tmp33179;
var inst_33047__$1 = tmp33181;
var inst_33048__$1 = tmp33180;
var inst_33049__$1 = inst_33065;
var state_33167__$1 = (function (){var statearr_33186 = state_33167;
(statearr_33186[(18)] = inst_33064);

(statearr_33186[(14)] = inst_33046__$1);

(statearr_33186[(15)] = inst_33047__$1);

(statearr_33186[(16)] = inst_33048__$1);

(statearr_33186[(17)] = inst_33049__$1);

return statearr_33186;
})();
var statearr_33187_34276 = state_33167__$1;
(statearr_33187_34276[(2)] = null);

(statearr_33187_34276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (21))){
var inst_33091 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33191_34277 = state_33167__$1;
(statearr_33191_34277[(2)] = inst_33091);

(statearr_33191_34277[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (31))){
var inst_33117 = (state_33167[(11)]);
var inst_33121 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33117);
var state_33167__$1 = state_33167;
var statearr_33192_34278 = state_33167__$1;
(statearr_33192_34278[(2)] = inst_33121);

(statearr_33192_34278[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (32))){
var inst_33112 = (state_33167[(10)]);
var inst_33109 = (state_33167[(19)]);
var inst_33110 = (state_33167[(9)]);
var inst_33111 = (state_33167[(20)]);
var inst_33123 = (state_33167[(2)]);
var inst_33124 = (inst_33112 + (1));
var tmp33188 = inst_33109;
var tmp33189 = inst_33111;
var tmp33190 = inst_33110;
var inst_33109__$1 = tmp33188;
var inst_33110__$1 = tmp33190;
var inst_33111__$1 = tmp33189;
var inst_33112__$1 = inst_33124;
var state_33167__$1 = (function (){var statearr_33193 = state_33167;
(statearr_33193[(21)] = inst_33123);

(statearr_33193[(19)] = inst_33109__$1);

(statearr_33193[(9)] = inst_33110__$1);

(statearr_33193[(20)] = inst_33111__$1);

(statearr_33193[(10)] = inst_33112__$1);

return statearr_33193;
})();
var statearr_33194_34279 = state_33167__$1;
(statearr_33194_34279[(2)] = null);

(statearr_33194_34279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (40))){
var inst_33136 = (state_33167[(22)]);
var inst_33140 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33136);
var state_33167__$1 = state_33167;
var statearr_33195_34280 = state_33167__$1;
(statearr_33195_34280[(2)] = inst_33140);

(statearr_33195_34280[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (33))){
var inst_33127 = (state_33167[(23)]);
var inst_33129 = cljs.core.chunked_seq_QMARK_(inst_33127);
var state_33167__$1 = state_33167;
if(inst_33129){
var statearr_33196_34283 = state_33167__$1;
(statearr_33196_34283[(1)] = (36));

} else {
var statearr_33197_34284 = state_33167__$1;
(statearr_33197_34284[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (13))){
var inst_33058 = (state_33167[(24)]);
var inst_33061 = cljs.core.async.close_BANG_(inst_33058);
var state_33167__$1 = state_33167;
var statearr_33198_34285 = state_33167__$1;
(statearr_33198_34285[(2)] = inst_33061);

(statearr_33198_34285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (22))){
var inst_33081 = (state_33167[(8)]);
var inst_33084 = cljs.core.async.close_BANG_(inst_33081);
var state_33167__$1 = state_33167;
var statearr_33199_34286 = state_33167__$1;
(statearr_33199_34286[(2)] = inst_33084);

(statearr_33199_34286[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (36))){
var inst_33127 = (state_33167[(23)]);
var inst_33131 = cljs.core.chunk_first(inst_33127);
var inst_33132 = cljs.core.chunk_rest(inst_33127);
var inst_33133 = cljs.core.count(inst_33131);
var inst_33109 = inst_33132;
var inst_33110 = inst_33131;
var inst_33111 = inst_33133;
var inst_33112 = (0);
var state_33167__$1 = (function (){var statearr_33200 = state_33167;
(statearr_33200[(19)] = inst_33109);

(statearr_33200[(9)] = inst_33110);

(statearr_33200[(20)] = inst_33111);

(statearr_33200[(10)] = inst_33112);

return statearr_33200;
})();
var statearr_33201_34287 = state_33167__$1;
(statearr_33201_34287[(2)] = null);

(statearr_33201_34287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (41))){
var inst_33127 = (state_33167[(23)]);
var inst_33142 = (state_33167[(2)]);
var inst_33143 = cljs.core.next(inst_33127);
var inst_33109 = inst_33143;
var inst_33110 = null;
var inst_33111 = (0);
var inst_33112 = (0);
var state_33167__$1 = (function (){var statearr_33202 = state_33167;
(statearr_33202[(25)] = inst_33142);

(statearr_33202[(19)] = inst_33109);

(statearr_33202[(9)] = inst_33110);

(statearr_33202[(20)] = inst_33111);

(statearr_33202[(10)] = inst_33112);

return statearr_33202;
})();
var statearr_33203_34288 = state_33167__$1;
(statearr_33203_34288[(2)] = null);

(statearr_33203_34288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (43))){
var state_33167__$1 = state_33167;
var statearr_33204_34289 = state_33167__$1;
(statearr_33204_34289[(2)] = null);

(statearr_33204_34289[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (29))){
var inst_33151 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33205_34290 = state_33167__$1;
(statearr_33205_34290[(2)] = inst_33151);

(statearr_33205_34290[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (44))){
var inst_33160 = (state_33167[(2)]);
var state_33167__$1 = (function (){var statearr_33206 = state_33167;
(statearr_33206[(26)] = inst_33160);

return statearr_33206;
})();
var statearr_33207_34291 = state_33167__$1;
(statearr_33207_34291[(2)] = null);

(statearr_33207_34291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (6))){
var inst_33101 = (state_33167[(27)]);
var inst_33100 = cljs.core.deref(cs);
var inst_33101__$1 = cljs.core.keys(inst_33100);
var inst_33102 = cljs.core.count(inst_33101__$1);
var inst_33103 = cljs.core.reset_BANG_(dctr,inst_33102);
var inst_33108 = cljs.core.seq(inst_33101__$1);
var inst_33109 = inst_33108;
var inst_33110 = null;
var inst_33111 = (0);
var inst_33112 = (0);
var state_33167__$1 = (function (){var statearr_33208 = state_33167;
(statearr_33208[(27)] = inst_33101__$1);

(statearr_33208[(28)] = inst_33103);

(statearr_33208[(19)] = inst_33109);

(statearr_33208[(9)] = inst_33110);

(statearr_33208[(20)] = inst_33111);

(statearr_33208[(10)] = inst_33112);

return statearr_33208;
})();
var statearr_33209_34292 = state_33167__$1;
(statearr_33209_34292[(2)] = null);

(statearr_33209_34292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (28))){
var inst_33109 = (state_33167[(19)]);
var inst_33127 = (state_33167[(23)]);
var inst_33127__$1 = cljs.core.seq(inst_33109);
var state_33167__$1 = (function (){var statearr_33210 = state_33167;
(statearr_33210[(23)] = inst_33127__$1);

return statearr_33210;
})();
if(inst_33127__$1){
var statearr_33211_34293 = state_33167__$1;
(statearr_33211_34293[(1)] = (33));

} else {
var statearr_33212_34294 = state_33167__$1;
(statearr_33212_34294[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (25))){
var inst_33112 = (state_33167[(10)]);
var inst_33111 = (state_33167[(20)]);
var inst_33114 = (inst_33112 < inst_33111);
var inst_33115 = inst_33114;
var state_33167__$1 = state_33167;
if(cljs.core.truth_(inst_33115)){
var statearr_33213_34296 = state_33167__$1;
(statearr_33213_34296[(1)] = (27));

} else {
var statearr_33214_34297 = state_33167__$1;
(statearr_33214_34297[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (34))){
var state_33167__$1 = state_33167;
var statearr_33215_34298 = state_33167__$1;
(statearr_33215_34298[(2)] = null);

(statearr_33215_34298[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (17))){
var state_33167__$1 = state_33167;
var statearr_33216_34299 = state_33167__$1;
(statearr_33216_34299[(2)] = null);

(statearr_33216_34299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (3))){
var inst_33165 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33167__$1,inst_33165);
} else {
if((state_val_33168 === (12))){
var inst_33096 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33217_34300 = state_33167__$1;
(statearr_33217_34300[(2)] = inst_33096);

(statearr_33217_34300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (2))){
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33167__$1,(4),ch);
} else {
if((state_val_33168 === (23))){
var state_33167__$1 = state_33167;
var statearr_33218_34301 = state_33167__$1;
(statearr_33218_34301[(2)] = null);

(statearr_33218_34301[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (35))){
var inst_33149 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33219_34302 = state_33167__$1;
(statearr_33219_34302[(2)] = inst_33149);

(statearr_33219_34302[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (19))){
var inst_33068 = (state_33167[(7)]);
var inst_33072 = cljs.core.chunk_first(inst_33068);
var inst_33073 = cljs.core.chunk_rest(inst_33068);
var inst_33074 = cljs.core.count(inst_33072);
var inst_33046 = inst_33073;
var inst_33047 = inst_33072;
var inst_33048 = inst_33074;
var inst_33049 = (0);
var state_33167__$1 = (function (){var statearr_33220 = state_33167;
(statearr_33220[(14)] = inst_33046);

(statearr_33220[(15)] = inst_33047);

(statearr_33220[(16)] = inst_33048);

(statearr_33220[(17)] = inst_33049);

return statearr_33220;
})();
var statearr_33221_34303 = state_33167__$1;
(statearr_33221_34303[(2)] = null);

(statearr_33221_34303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (11))){
var inst_33046 = (state_33167[(14)]);
var inst_33068 = (state_33167[(7)]);
var inst_33068__$1 = cljs.core.seq(inst_33046);
var state_33167__$1 = (function (){var statearr_33222 = state_33167;
(statearr_33222[(7)] = inst_33068__$1);

return statearr_33222;
})();
if(inst_33068__$1){
var statearr_33223_34304 = state_33167__$1;
(statearr_33223_34304[(1)] = (16));

} else {
var statearr_33224_34305 = state_33167__$1;
(statearr_33224_34305[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (9))){
var inst_33098 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33225_34306 = state_33167__$1;
(statearr_33225_34306[(2)] = inst_33098);

(statearr_33225_34306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (5))){
var inst_33044 = cljs.core.deref(cs);
var inst_33045 = cljs.core.seq(inst_33044);
var inst_33046 = inst_33045;
var inst_33047 = null;
var inst_33048 = (0);
var inst_33049 = (0);
var state_33167__$1 = (function (){var statearr_33226 = state_33167;
(statearr_33226[(14)] = inst_33046);

(statearr_33226[(15)] = inst_33047);

(statearr_33226[(16)] = inst_33048);

(statearr_33226[(17)] = inst_33049);

return statearr_33226;
})();
var statearr_33227_34307 = state_33167__$1;
(statearr_33227_34307[(2)] = null);

(statearr_33227_34307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (14))){
var state_33167__$1 = state_33167;
var statearr_33228_34308 = state_33167__$1;
(statearr_33228_34308[(2)] = null);

(statearr_33228_34308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (45))){
var inst_33157 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33229_34309 = state_33167__$1;
(statearr_33229_34309[(2)] = inst_33157);

(statearr_33229_34309[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (26))){
var inst_33101 = (state_33167[(27)]);
var inst_33153 = (state_33167[(2)]);
var inst_33154 = cljs.core.seq(inst_33101);
var state_33167__$1 = (function (){var statearr_33230 = state_33167;
(statearr_33230[(29)] = inst_33153);

return statearr_33230;
})();
if(inst_33154){
var statearr_33231_34310 = state_33167__$1;
(statearr_33231_34310[(1)] = (42));

} else {
var statearr_33232_34314 = state_33167__$1;
(statearr_33232_34314[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (16))){
var inst_33068 = (state_33167[(7)]);
var inst_33070 = cljs.core.chunked_seq_QMARK_(inst_33068);
var state_33167__$1 = state_33167;
if(inst_33070){
var statearr_33233_34315 = state_33167__$1;
(statearr_33233_34315[(1)] = (19));

} else {
var statearr_33234_34316 = state_33167__$1;
(statearr_33234_34316[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (38))){
var inst_33146 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33235_34317 = state_33167__$1;
(statearr_33235_34317[(2)] = inst_33146);

(statearr_33235_34317[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (30))){
var state_33167__$1 = state_33167;
var statearr_33236_34318 = state_33167__$1;
(statearr_33236_34318[(2)] = null);

(statearr_33236_34318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (10))){
var inst_33047 = (state_33167[(15)]);
var inst_33049 = (state_33167[(17)]);
var inst_33057 = cljs.core._nth(inst_33047,inst_33049);
var inst_33058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33057,(0),null);
var inst_33059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33057,(1),null);
var state_33167__$1 = (function (){var statearr_33237 = state_33167;
(statearr_33237[(24)] = inst_33058);

return statearr_33237;
})();
if(cljs.core.truth_(inst_33059)){
var statearr_33238_34319 = state_33167__$1;
(statearr_33238_34319[(1)] = (13));

} else {
var statearr_33239_34320 = state_33167__$1;
(statearr_33239_34320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (18))){
var inst_33094 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
var statearr_33240_34321 = state_33167__$1;
(statearr_33240_34321[(2)] = inst_33094);

(statearr_33240_34321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (42))){
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33167__$1,(45),dchan);
} else {
if((state_val_33168 === (37))){
var inst_33127 = (state_33167[(23)]);
var inst_33136 = (state_33167[(22)]);
var inst_33037 = (state_33167[(12)]);
var inst_33136__$1 = cljs.core.first(inst_33127);
var inst_33137 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33136__$1,inst_33037,done);
var state_33167__$1 = (function (){var statearr_33241 = state_33167;
(statearr_33241[(22)] = inst_33136__$1);

return statearr_33241;
})();
if(cljs.core.truth_(inst_33137)){
var statearr_33242_34322 = state_33167__$1;
(statearr_33242_34322[(1)] = (39));

} else {
var statearr_33243_34323 = state_33167__$1;
(statearr_33243_34323[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33168 === (8))){
var inst_33049 = (state_33167[(17)]);
var inst_33048 = (state_33167[(16)]);
var inst_33051 = (inst_33049 < inst_33048);
var inst_33052 = inst_33051;
var state_33167__$1 = state_33167;
if(cljs.core.truth_(inst_33052)){
var statearr_33244_34324 = state_33167__$1;
(statearr_33244_34324[(1)] = (10));

} else {
var statearr_33245_34325 = state_33167__$1;
(statearr_33245_34325[(1)] = (11));

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
var statearr_33246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33246[(0)] = cljs$core$async$mult_$_state_machine__32347__auto__);

(statearr_33246[(1)] = (1));

return statearr_33246;
});
var cljs$core$async$mult_$_state_machine__32347__auto____1 = (function (state_33167){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33167);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33247){var ex__32350__auto__ = e33247;
var statearr_33248_34327 = state_33167;
(statearr_33248_34327[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33167[(4)]))){
var statearr_33249_34328 = state_33167;
(statearr_33249_34328[(1)] = cljs.core.first((state_33167[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34329 = state_33167;
state_33167 = G__34329;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32347__auto__ = function(state_33167){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32347__auto____1.call(this,state_33167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32347__auto____0;
cljs$core$async$mult_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32347__auto____1;
return cljs$core$async$mult_$_state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_33250 = f__32432__auto__();
(statearr_33250[(6)] = c__32431__auto___34262);

return statearr_33250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
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
var G__33252 = arguments.length;
switch (G__33252) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34334 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34334(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34336 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34336(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34337 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34337(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34338 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34338(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34339 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34339(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34340 = arguments.length;
var i__5750__auto___34341 = (0);
while(true){
if((i__5750__auto___34341 < len__5749__auto___34340)){
args__5755__auto__.push((arguments[i__5750__auto___34341]));

var G__34342 = (i__5750__auto___34341 + (1));
i__5750__auto___34341 = G__34342;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33257){
var map__33258 = p__33257;
var map__33258__$1 = cljs.core.__destructure_map(map__33258);
var opts = map__33258__$1;
var statearr_33259_34343 = state;
(statearr_33259_34343[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33260_34344 = state;
(statearr_33260_34344[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33261_34345 = state;
(statearr_33261_34345[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33253){
var G__33254 = cljs.core.first(seq33253);
var seq33253__$1 = cljs.core.next(seq33253);
var G__33255 = cljs.core.first(seq33253__$1);
var seq33253__$2 = cljs.core.next(seq33253__$1);
var G__33256 = cljs.core.first(seq33253__$2);
var seq33253__$3 = cljs.core.next(seq33253__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33254,G__33255,G__33256,seq33253__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33262 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33263){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33263 = meta33263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33264,meta33263__$1){
var self__ = this;
var _33264__$1 = this;
return (new cljs.core.async.t_cljs$core$async33262(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33263__$1));
}));

(cljs.core.async.t_cljs$core$async33262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33264){
var self__ = this;
var _33264__$1 = this;
return self__.meta33263;
}));

(cljs.core.async.t_cljs$core$async33262.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33262.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33262.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33262.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33262.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33262.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33262.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33263","meta33263",-1682406961,null)], null);
}));

(cljs.core.async.t_cljs$core$async33262.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33262");

(cljs.core.async.t_cljs$core$async33262.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33262");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33262.
 */
cljs.core.async.__GT_t_cljs$core$async33262 = (function cljs$core$async$__GT_t_cljs$core$async33262(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33263){
return (new cljs.core.async.t_cljs$core$async33262(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33263));
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
var m = (new cljs.core.async.t_cljs$core$async33262(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32431__auto___34346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_33332){
var state_val_33333 = (state_33332[(1)]);
if((state_val_33333 === (7))){
var inst_33292 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
if(cljs.core.truth_(inst_33292)){
var statearr_33334_34347 = state_33332__$1;
(statearr_33334_34347[(1)] = (8));

} else {
var statearr_33335_34348 = state_33332__$1;
(statearr_33335_34348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (20))){
var inst_33285 = (state_33332[(7)]);
var state_33332__$1 = state_33332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33332__$1,(23),out,inst_33285);
} else {
if((state_val_33333 === (1))){
var inst_33268 = calc_state();
var inst_33269 = cljs.core.__destructure_map(inst_33268);
var inst_33270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33269,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33269,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33269,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33273 = inst_33268;
var state_33332__$1 = (function (){var statearr_33336 = state_33332;
(statearr_33336[(8)] = inst_33270);

(statearr_33336[(9)] = inst_33271);

(statearr_33336[(10)] = inst_33272);

(statearr_33336[(11)] = inst_33273);

return statearr_33336;
})();
var statearr_33337_34349 = state_33332__$1;
(statearr_33337_34349[(2)] = null);

(statearr_33337_34349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (24))){
var inst_33276 = (state_33332[(12)]);
var inst_33273 = inst_33276;
var state_33332__$1 = (function (){var statearr_33338 = state_33332;
(statearr_33338[(11)] = inst_33273);

return statearr_33338;
})();
var statearr_33339_34350 = state_33332__$1;
(statearr_33339_34350[(2)] = null);

(statearr_33339_34350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (4))){
var inst_33285 = (state_33332[(7)]);
var inst_33287 = (state_33332[(13)]);
var inst_33284 = (state_33332[(2)]);
var inst_33285__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33284,(0),null);
var inst_33286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33284,(1),null);
var inst_33287__$1 = (inst_33285__$1 == null);
var state_33332__$1 = (function (){var statearr_33340 = state_33332;
(statearr_33340[(7)] = inst_33285__$1);

(statearr_33340[(14)] = inst_33286);

(statearr_33340[(13)] = inst_33287__$1);

return statearr_33340;
})();
if(cljs.core.truth_(inst_33287__$1)){
var statearr_33341_34351 = state_33332__$1;
(statearr_33341_34351[(1)] = (5));

} else {
var statearr_33342_34352 = state_33332__$1;
(statearr_33342_34352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (15))){
var inst_33277 = (state_33332[(15)]);
var inst_33306 = (state_33332[(16)]);
var inst_33306__$1 = cljs.core.empty_QMARK_(inst_33277);
var state_33332__$1 = (function (){var statearr_33343 = state_33332;
(statearr_33343[(16)] = inst_33306__$1);

return statearr_33343;
})();
if(inst_33306__$1){
var statearr_33344_34354 = state_33332__$1;
(statearr_33344_34354[(1)] = (17));

} else {
var statearr_33345_34355 = state_33332__$1;
(statearr_33345_34355[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (21))){
var inst_33276 = (state_33332[(12)]);
var inst_33273 = inst_33276;
var state_33332__$1 = (function (){var statearr_33346 = state_33332;
(statearr_33346[(11)] = inst_33273);

return statearr_33346;
})();
var statearr_33347_34356 = state_33332__$1;
(statearr_33347_34356[(2)] = null);

(statearr_33347_34356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (13))){
var inst_33299 = (state_33332[(2)]);
var inst_33300 = calc_state();
var inst_33273 = inst_33300;
var state_33332__$1 = (function (){var statearr_33348 = state_33332;
(statearr_33348[(17)] = inst_33299);

(statearr_33348[(11)] = inst_33273);

return statearr_33348;
})();
var statearr_33349_34357 = state_33332__$1;
(statearr_33349_34357[(2)] = null);

(statearr_33349_34357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (22))){
var inst_33326 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
var statearr_33350_34358 = state_33332__$1;
(statearr_33350_34358[(2)] = inst_33326);

(statearr_33350_34358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (6))){
var inst_33286 = (state_33332[(14)]);
var inst_33290 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33286,change);
var state_33332__$1 = state_33332;
var statearr_33351_34359 = state_33332__$1;
(statearr_33351_34359[(2)] = inst_33290);

(statearr_33351_34359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (25))){
var state_33332__$1 = state_33332;
var statearr_33352_34361 = state_33332__$1;
(statearr_33352_34361[(2)] = null);

(statearr_33352_34361[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (17))){
var inst_33278 = (state_33332[(18)]);
var inst_33286 = (state_33332[(14)]);
var inst_33308 = (inst_33278.cljs$core$IFn$_invoke$arity$1 ? inst_33278.cljs$core$IFn$_invoke$arity$1(inst_33286) : inst_33278.call(null,inst_33286));
var inst_33309 = cljs.core.not(inst_33308);
var state_33332__$1 = state_33332;
var statearr_33353_34362 = state_33332__$1;
(statearr_33353_34362[(2)] = inst_33309);

(statearr_33353_34362[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (3))){
var inst_33330 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33332__$1,inst_33330);
} else {
if((state_val_33333 === (12))){
var state_33332__$1 = state_33332;
var statearr_33354_34364 = state_33332__$1;
(statearr_33354_34364[(2)] = null);

(statearr_33354_34364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (2))){
var inst_33273 = (state_33332[(11)]);
var inst_33276 = (state_33332[(12)]);
var inst_33276__$1 = cljs.core.__destructure_map(inst_33273);
var inst_33277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33276__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33276__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33276__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33332__$1 = (function (){var statearr_33355 = state_33332;
(statearr_33355[(12)] = inst_33276__$1);

(statearr_33355[(15)] = inst_33277);

(statearr_33355[(18)] = inst_33278);

return statearr_33355;
})();
return cljs.core.async.ioc_alts_BANG_(state_33332__$1,(4),inst_33279);
} else {
if((state_val_33333 === (23))){
var inst_33317 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
if(cljs.core.truth_(inst_33317)){
var statearr_33356_34366 = state_33332__$1;
(statearr_33356_34366[(1)] = (24));

} else {
var statearr_33357_34367 = state_33332__$1;
(statearr_33357_34367[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (19))){
var inst_33312 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
var statearr_33358_34368 = state_33332__$1;
(statearr_33358_34368[(2)] = inst_33312);

(statearr_33358_34368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (11))){
var inst_33286 = (state_33332[(14)]);
var inst_33296 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33286);
var state_33332__$1 = state_33332;
var statearr_33359_34369 = state_33332__$1;
(statearr_33359_34369[(2)] = inst_33296);

(statearr_33359_34369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (9))){
var inst_33277 = (state_33332[(15)]);
var inst_33286 = (state_33332[(14)]);
var inst_33303 = (state_33332[(19)]);
var inst_33303__$1 = (inst_33277.cljs$core$IFn$_invoke$arity$1 ? inst_33277.cljs$core$IFn$_invoke$arity$1(inst_33286) : inst_33277.call(null,inst_33286));
var state_33332__$1 = (function (){var statearr_33360 = state_33332;
(statearr_33360[(19)] = inst_33303__$1);

return statearr_33360;
})();
if(cljs.core.truth_(inst_33303__$1)){
var statearr_33361_34370 = state_33332__$1;
(statearr_33361_34370[(1)] = (14));

} else {
var statearr_33362_34374 = state_33332__$1;
(statearr_33362_34374[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (5))){
var inst_33287 = (state_33332[(13)]);
var state_33332__$1 = state_33332;
var statearr_33363_34375 = state_33332__$1;
(statearr_33363_34375[(2)] = inst_33287);

(statearr_33363_34375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (14))){
var inst_33303 = (state_33332[(19)]);
var state_33332__$1 = state_33332;
var statearr_33364_34376 = state_33332__$1;
(statearr_33364_34376[(2)] = inst_33303);

(statearr_33364_34376[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (26))){
var inst_33322 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
var statearr_33365_34377 = state_33332__$1;
(statearr_33365_34377[(2)] = inst_33322);

(statearr_33365_34377[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (16))){
var inst_33314 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
if(cljs.core.truth_(inst_33314)){
var statearr_33366_34378 = state_33332__$1;
(statearr_33366_34378[(1)] = (20));

} else {
var statearr_33367_34379 = state_33332__$1;
(statearr_33367_34379[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (10))){
var inst_33328 = (state_33332[(2)]);
var state_33332__$1 = state_33332;
var statearr_33368_34380 = state_33332__$1;
(statearr_33368_34380[(2)] = inst_33328);

(statearr_33368_34380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (18))){
var inst_33306 = (state_33332[(16)]);
var state_33332__$1 = state_33332;
var statearr_33369_34381 = state_33332__$1;
(statearr_33369_34381[(2)] = inst_33306);

(statearr_33369_34381[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33333 === (8))){
var inst_33285 = (state_33332[(7)]);
var inst_33294 = (inst_33285 == null);
var state_33332__$1 = state_33332;
if(cljs.core.truth_(inst_33294)){
var statearr_33370_34382 = state_33332__$1;
(statearr_33370_34382[(1)] = (11));

} else {
var statearr_33371_34383 = state_33332__$1;
(statearr_33371_34383[(1)] = (12));

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
var statearr_33372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33372[(0)] = cljs$core$async$mix_$_state_machine__32347__auto__);

(statearr_33372[(1)] = (1));

return statearr_33372;
});
var cljs$core$async$mix_$_state_machine__32347__auto____1 = (function (state_33332){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33332);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33373){var ex__32350__auto__ = e33373;
var statearr_33374_34384 = state_33332;
(statearr_33374_34384[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33332[(4)]))){
var statearr_33375_34385 = state_33332;
(statearr_33375_34385[(1)] = cljs.core.first((state_33332[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34386 = state_33332;
state_33332 = G__34386;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32347__auto__ = function(state_33332){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32347__auto____1.call(this,state_33332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32347__auto____0;
cljs$core$async$mix_$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32347__auto____1;
return cljs$core$async$mix_$_state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_33376 = f__32432__auto__();
(statearr_33376[(6)] = c__32431__auto___34346);

return statearr_33376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34387 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34387(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34388 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34388(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34389 = (function() {
var G__34390 = null;
var G__34390__1 = (function (p){
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
var G__34390__2 = (function (p,v){
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
G__34390 = function(p,v){
switch(arguments.length){
case 1:
return G__34390__1.call(this,p);
case 2:
return G__34390__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34390.cljs$core$IFn$_invoke$arity$1 = G__34390__1;
G__34390.cljs$core$IFn$_invoke$arity$2 = G__34390__2;
return G__34390;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33378 = arguments.length;
switch (G__33378) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34389(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34389(p,v);
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
cljs.core.async.t_cljs$core$async33382 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33383){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33383 = meta33383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33384,meta33383__$1){
var self__ = this;
var _33384__$1 = this;
return (new cljs.core.async.t_cljs$core$async33382(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33383__$1));
}));

(cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33384){
var self__ = this;
var _33384__$1 = this;
return self__.meta33383;
}));

(cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33382.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33383","meta33383",-1237222896,null)], null);
}));

(cljs.core.async.t_cljs$core$async33382.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33382");

(cljs.core.async.t_cljs$core$async33382.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33382");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33382.
 */
cljs.core.async.__GT_t_cljs$core$async33382 = (function cljs$core$async$__GT_t_cljs$core$async33382(ch,topic_fn,buf_fn,mults,ensure_mult,meta33383){
return (new cljs.core.async.t_cljs$core$async33382(ch,topic_fn,buf_fn,mults,ensure_mult,meta33383));
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
var G__33381 = arguments.length;
switch (G__33381) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33379_SHARP_){
if(cljs.core.truth_((p1__33379_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33379_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33379_SHARP_.call(null,topic)))){
return p1__33379_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33379_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33382(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32431__auto___34393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_33456){
var state_val_33457 = (state_33456[(1)]);
if((state_val_33457 === (7))){
var inst_33452 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33458_34394 = state_33456__$1;
(statearr_33458_34394[(2)] = inst_33452);

(statearr_33458_34394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (20))){
var state_33456__$1 = state_33456;
var statearr_33459_34395 = state_33456__$1;
(statearr_33459_34395[(2)] = null);

(statearr_33459_34395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (1))){
var state_33456__$1 = state_33456;
var statearr_33460_34396 = state_33456__$1;
(statearr_33460_34396[(2)] = null);

(statearr_33460_34396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (24))){
var inst_33435 = (state_33456[(7)]);
var inst_33444 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33435);
var state_33456__$1 = state_33456;
var statearr_33461_34398 = state_33456__$1;
(statearr_33461_34398[(2)] = inst_33444);

(statearr_33461_34398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (4))){
var inst_33387 = (state_33456[(8)]);
var inst_33387__$1 = (state_33456[(2)]);
var inst_33388 = (inst_33387__$1 == null);
var state_33456__$1 = (function (){var statearr_33462 = state_33456;
(statearr_33462[(8)] = inst_33387__$1);

return statearr_33462;
})();
if(cljs.core.truth_(inst_33388)){
var statearr_33463_34399 = state_33456__$1;
(statearr_33463_34399[(1)] = (5));

} else {
var statearr_33464_34400 = state_33456__$1;
(statearr_33464_34400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (15))){
var inst_33429 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33465_34401 = state_33456__$1;
(statearr_33465_34401[(2)] = inst_33429);

(statearr_33465_34401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (21))){
var inst_33449 = (state_33456[(2)]);
var state_33456__$1 = (function (){var statearr_33466 = state_33456;
(statearr_33466[(9)] = inst_33449);

return statearr_33466;
})();
var statearr_33467_34402 = state_33456__$1;
(statearr_33467_34402[(2)] = null);

(statearr_33467_34402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (13))){
var inst_33411 = (state_33456[(10)]);
var inst_33413 = cljs.core.chunked_seq_QMARK_(inst_33411);
var state_33456__$1 = state_33456;
if(inst_33413){
var statearr_33468_34403 = state_33456__$1;
(statearr_33468_34403[(1)] = (16));

} else {
var statearr_33469_34404 = state_33456__$1;
(statearr_33469_34404[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (22))){
var inst_33441 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
if(cljs.core.truth_(inst_33441)){
var statearr_33470_34405 = state_33456__$1;
(statearr_33470_34405[(1)] = (23));

} else {
var statearr_33471_34406 = state_33456__$1;
(statearr_33471_34406[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (6))){
var inst_33387 = (state_33456[(8)]);
var inst_33435 = (state_33456[(7)]);
var inst_33437 = (state_33456[(11)]);
var inst_33435__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33387) : topic_fn.call(null,inst_33387));
var inst_33436 = cljs.core.deref(mults);
var inst_33437__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33436,inst_33435__$1);
var state_33456__$1 = (function (){var statearr_33472 = state_33456;
(statearr_33472[(7)] = inst_33435__$1);

(statearr_33472[(11)] = inst_33437__$1);

return statearr_33472;
})();
if(cljs.core.truth_(inst_33437__$1)){
var statearr_33473_34407 = state_33456__$1;
(statearr_33473_34407[(1)] = (19));

} else {
var statearr_33474_34408 = state_33456__$1;
(statearr_33474_34408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (25))){
var inst_33446 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33475_34409 = state_33456__$1;
(statearr_33475_34409[(2)] = inst_33446);

(statearr_33475_34409[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (17))){
var inst_33411 = (state_33456[(10)]);
var inst_33420 = cljs.core.first(inst_33411);
var inst_33421 = cljs.core.async.muxch_STAR_(inst_33420);
var inst_33422 = cljs.core.async.close_BANG_(inst_33421);
var inst_33423 = cljs.core.next(inst_33411);
var inst_33397 = inst_33423;
var inst_33398 = null;
var inst_33399 = (0);
var inst_33400 = (0);
var state_33456__$1 = (function (){var statearr_33476 = state_33456;
(statearr_33476[(12)] = inst_33422);

(statearr_33476[(13)] = inst_33397);

(statearr_33476[(14)] = inst_33398);

(statearr_33476[(15)] = inst_33399);

(statearr_33476[(16)] = inst_33400);

return statearr_33476;
})();
var statearr_33477_34410 = state_33456__$1;
(statearr_33477_34410[(2)] = null);

(statearr_33477_34410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (3))){
var inst_33454 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33456__$1,inst_33454);
} else {
if((state_val_33457 === (12))){
var inst_33431 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33478_34411 = state_33456__$1;
(statearr_33478_34411[(2)] = inst_33431);

(statearr_33478_34411[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (2))){
var state_33456__$1 = state_33456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33456__$1,(4),ch);
} else {
if((state_val_33457 === (23))){
var state_33456__$1 = state_33456;
var statearr_33479_34412 = state_33456__$1;
(statearr_33479_34412[(2)] = null);

(statearr_33479_34412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (19))){
var inst_33437 = (state_33456[(11)]);
var inst_33387 = (state_33456[(8)]);
var inst_33439 = cljs.core.async.muxch_STAR_(inst_33437);
var state_33456__$1 = state_33456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33456__$1,(22),inst_33439,inst_33387);
} else {
if((state_val_33457 === (11))){
var inst_33397 = (state_33456[(13)]);
var inst_33411 = (state_33456[(10)]);
var inst_33411__$1 = cljs.core.seq(inst_33397);
var state_33456__$1 = (function (){var statearr_33480 = state_33456;
(statearr_33480[(10)] = inst_33411__$1);

return statearr_33480;
})();
if(inst_33411__$1){
var statearr_33481_34413 = state_33456__$1;
(statearr_33481_34413[(1)] = (13));

} else {
var statearr_33482_34414 = state_33456__$1;
(statearr_33482_34414[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (9))){
var inst_33433 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33483_34415 = state_33456__$1;
(statearr_33483_34415[(2)] = inst_33433);

(statearr_33483_34415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (5))){
var inst_33394 = cljs.core.deref(mults);
var inst_33395 = cljs.core.vals(inst_33394);
var inst_33396 = cljs.core.seq(inst_33395);
var inst_33397 = inst_33396;
var inst_33398 = null;
var inst_33399 = (0);
var inst_33400 = (0);
var state_33456__$1 = (function (){var statearr_33484 = state_33456;
(statearr_33484[(13)] = inst_33397);

(statearr_33484[(14)] = inst_33398);

(statearr_33484[(15)] = inst_33399);

(statearr_33484[(16)] = inst_33400);

return statearr_33484;
})();
var statearr_33485_34416 = state_33456__$1;
(statearr_33485_34416[(2)] = null);

(statearr_33485_34416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (14))){
var state_33456__$1 = state_33456;
var statearr_33489_34417 = state_33456__$1;
(statearr_33489_34417[(2)] = null);

(statearr_33489_34417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (16))){
var inst_33411 = (state_33456[(10)]);
var inst_33415 = cljs.core.chunk_first(inst_33411);
var inst_33416 = cljs.core.chunk_rest(inst_33411);
var inst_33417 = cljs.core.count(inst_33415);
var inst_33397 = inst_33416;
var inst_33398 = inst_33415;
var inst_33399 = inst_33417;
var inst_33400 = (0);
var state_33456__$1 = (function (){var statearr_33490 = state_33456;
(statearr_33490[(13)] = inst_33397);

(statearr_33490[(14)] = inst_33398);

(statearr_33490[(15)] = inst_33399);

(statearr_33490[(16)] = inst_33400);

return statearr_33490;
})();
var statearr_33491_34418 = state_33456__$1;
(statearr_33491_34418[(2)] = null);

(statearr_33491_34418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (10))){
var inst_33398 = (state_33456[(14)]);
var inst_33400 = (state_33456[(16)]);
var inst_33397 = (state_33456[(13)]);
var inst_33399 = (state_33456[(15)]);
var inst_33405 = cljs.core._nth(inst_33398,inst_33400);
var inst_33406 = cljs.core.async.muxch_STAR_(inst_33405);
var inst_33407 = cljs.core.async.close_BANG_(inst_33406);
var inst_33408 = (inst_33400 + (1));
var tmp33486 = inst_33399;
var tmp33487 = inst_33398;
var tmp33488 = inst_33397;
var inst_33397__$1 = tmp33488;
var inst_33398__$1 = tmp33487;
var inst_33399__$1 = tmp33486;
var inst_33400__$1 = inst_33408;
var state_33456__$1 = (function (){var statearr_33492 = state_33456;
(statearr_33492[(17)] = inst_33407);

(statearr_33492[(13)] = inst_33397__$1);

(statearr_33492[(14)] = inst_33398__$1);

(statearr_33492[(15)] = inst_33399__$1);

(statearr_33492[(16)] = inst_33400__$1);

return statearr_33492;
})();
var statearr_33493_34419 = state_33456__$1;
(statearr_33493_34419[(2)] = null);

(statearr_33493_34419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (18))){
var inst_33426 = (state_33456[(2)]);
var state_33456__$1 = state_33456;
var statearr_33494_34420 = state_33456__$1;
(statearr_33494_34420[(2)] = inst_33426);

(statearr_33494_34420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33457 === (8))){
var inst_33400 = (state_33456[(16)]);
var inst_33399 = (state_33456[(15)]);
var inst_33402 = (inst_33400 < inst_33399);
var inst_33403 = inst_33402;
var state_33456__$1 = state_33456;
if(cljs.core.truth_(inst_33403)){
var statearr_33495_34421 = state_33456__$1;
(statearr_33495_34421[(1)] = (10));

} else {
var statearr_33496_34422 = state_33456__$1;
(statearr_33496_34422[(1)] = (11));

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
var statearr_33497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33497[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33497[(1)] = (1));

return statearr_33497;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33456){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33456);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33498){var ex__32350__auto__ = e33498;
var statearr_33499_34425 = state_33456;
(statearr_33499_34425[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33456[(4)]))){
var statearr_33500_34427 = state_33456;
(statearr_33500_34427[(1)] = cljs.core.first((state_33456[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34428 = state_33456;
state_33456 = G__34428;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_33501 = f__32432__auto__();
(statearr_33501[(6)] = c__32431__auto___34393);

return statearr_33501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
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
var G__33503 = arguments.length;
switch (G__33503) {
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
var G__33505 = arguments.length;
switch (G__33505) {
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
var G__33507 = arguments.length;
switch (G__33507) {
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
var c__32431__auto___34438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_33550){
var state_val_33551 = (state_33550[(1)]);
if((state_val_33551 === (7))){
var state_33550__$1 = state_33550;
var statearr_33552_34439 = state_33550__$1;
(statearr_33552_34439[(2)] = null);

(statearr_33552_34439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (1))){
var state_33550__$1 = state_33550;
var statearr_33553_34440 = state_33550__$1;
(statearr_33553_34440[(2)] = null);

(statearr_33553_34440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (4))){
var inst_33511 = (state_33550[(7)]);
var inst_33510 = (state_33550[(8)]);
var inst_33513 = (inst_33511 < inst_33510);
var state_33550__$1 = state_33550;
if(cljs.core.truth_(inst_33513)){
var statearr_33554_34441 = state_33550__$1;
(statearr_33554_34441[(1)] = (6));

} else {
var statearr_33555_34442 = state_33550__$1;
(statearr_33555_34442[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (15))){
var inst_33536 = (state_33550[(9)]);
var inst_33541 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33536);
var state_33550__$1 = state_33550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33550__$1,(17),out,inst_33541);
} else {
if((state_val_33551 === (13))){
var inst_33536 = (state_33550[(9)]);
var inst_33536__$1 = (state_33550[(2)]);
var inst_33537 = cljs.core.some(cljs.core.nil_QMARK_,inst_33536__$1);
var state_33550__$1 = (function (){var statearr_33556 = state_33550;
(statearr_33556[(9)] = inst_33536__$1);

return statearr_33556;
})();
if(cljs.core.truth_(inst_33537)){
var statearr_33557_34443 = state_33550__$1;
(statearr_33557_34443[(1)] = (14));

} else {
var statearr_33558_34444 = state_33550__$1;
(statearr_33558_34444[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (6))){
var state_33550__$1 = state_33550;
var statearr_33559_34445 = state_33550__$1;
(statearr_33559_34445[(2)] = null);

(statearr_33559_34445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (17))){
var inst_33543 = (state_33550[(2)]);
var state_33550__$1 = (function (){var statearr_33561 = state_33550;
(statearr_33561[(10)] = inst_33543);

return statearr_33561;
})();
var statearr_33562_34447 = state_33550__$1;
(statearr_33562_34447[(2)] = null);

(statearr_33562_34447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (3))){
var inst_33548 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33550__$1,inst_33548);
} else {
if((state_val_33551 === (12))){
var _ = (function (){var statearr_33563 = state_33550;
(statearr_33563[(4)] = cljs.core.rest((state_33550[(4)])));

return statearr_33563;
})();
var state_33550__$1 = state_33550;
var ex33560 = (state_33550__$1[(2)]);
var statearr_33564_34448 = state_33550__$1;
(statearr_33564_34448[(5)] = ex33560);


if((ex33560 instanceof Object)){
var statearr_33565_34449 = state_33550__$1;
(statearr_33565_34449[(1)] = (11));

(statearr_33565_34449[(5)] = null);

} else {
throw ex33560;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (2))){
var inst_33509 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33510 = cnt;
var inst_33511 = (0);
var state_33550__$1 = (function (){var statearr_33566 = state_33550;
(statearr_33566[(11)] = inst_33509);

(statearr_33566[(8)] = inst_33510);

(statearr_33566[(7)] = inst_33511);

return statearr_33566;
})();
var statearr_33567_34450 = state_33550__$1;
(statearr_33567_34450[(2)] = null);

(statearr_33567_34450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (11))){
var inst_33515 = (state_33550[(2)]);
var inst_33516 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33550__$1 = (function (){var statearr_33568 = state_33550;
(statearr_33568[(12)] = inst_33515);

return statearr_33568;
})();
var statearr_33569_34452 = state_33550__$1;
(statearr_33569_34452[(2)] = inst_33516);

(statearr_33569_34452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (9))){
var inst_33511 = (state_33550[(7)]);
var _ = (function (){var statearr_33570 = state_33550;
(statearr_33570[(4)] = cljs.core.cons((12),(state_33550[(4)])));

return statearr_33570;
})();
var inst_33522 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33511) : chs__$1.call(null,inst_33511));
var inst_33523 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33511) : done.call(null,inst_33511));
var inst_33524 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33522,inst_33523);
var ___$1 = (function (){var statearr_33571 = state_33550;
(statearr_33571[(4)] = cljs.core.rest((state_33550[(4)])));

return statearr_33571;
})();
var state_33550__$1 = state_33550;
var statearr_33572_34453 = state_33550__$1;
(statearr_33572_34453[(2)] = inst_33524);

(statearr_33572_34453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (5))){
var inst_33534 = (state_33550[(2)]);
var state_33550__$1 = (function (){var statearr_33573 = state_33550;
(statearr_33573[(13)] = inst_33534);

return statearr_33573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33550__$1,(13),dchan);
} else {
if((state_val_33551 === (14))){
var inst_33539 = cljs.core.async.close_BANG_(out);
var state_33550__$1 = state_33550;
var statearr_33574_34454 = state_33550__$1;
(statearr_33574_34454[(2)] = inst_33539);

(statearr_33574_34454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (16))){
var inst_33546 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
var statearr_33575_34455 = state_33550__$1;
(statearr_33575_34455[(2)] = inst_33546);

(statearr_33575_34455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (10))){
var inst_33511 = (state_33550[(7)]);
var inst_33527 = (state_33550[(2)]);
var inst_33528 = (inst_33511 + (1));
var inst_33511__$1 = inst_33528;
var state_33550__$1 = (function (){var statearr_33576 = state_33550;
(statearr_33576[(14)] = inst_33527);

(statearr_33576[(7)] = inst_33511__$1);

return statearr_33576;
})();
var statearr_33577_34456 = state_33550__$1;
(statearr_33577_34456[(2)] = null);

(statearr_33577_34456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33551 === (8))){
var inst_33532 = (state_33550[(2)]);
var state_33550__$1 = state_33550;
var statearr_33578_34458 = state_33550__$1;
(statearr_33578_34458[(2)] = inst_33532);

(statearr_33578_34458[(1)] = (5));


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
var statearr_33579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33579[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33579[(1)] = (1));

return statearr_33579;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33550){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33550);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33580){var ex__32350__auto__ = e33580;
var statearr_33581_34462 = state_33550;
(statearr_33581_34462[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33550[(4)]))){
var statearr_33582_34463 = state_33550;
(statearr_33582_34463[(1)] = cljs.core.first((state_33550[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34464 = state_33550;
state_33550 = G__34464;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_33583 = f__32432__auto__();
(statearr_33583[(6)] = c__32431__auto___34438);

return statearr_33583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
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
var G__33586 = arguments.length;
switch (G__33586) {
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
var c__32431__auto___34466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_33618){
var state_val_33619 = (state_33618[(1)]);
if((state_val_33619 === (7))){
var inst_33597 = (state_33618[(7)]);
var inst_33598 = (state_33618[(8)]);
var inst_33597__$1 = (state_33618[(2)]);
var inst_33598__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33597__$1,(0),null);
var inst_33599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33597__$1,(1),null);
var inst_33600 = (inst_33598__$1 == null);
var state_33618__$1 = (function (){var statearr_33620 = state_33618;
(statearr_33620[(7)] = inst_33597__$1);

(statearr_33620[(8)] = inst_33598__$1);

(statearr_33620[(9)] = inst_33599);

return statearr_33620;
})();
if(cljs.core.truth_(inst_33600)){
var statearr_33621_34467 = state_33618__$1;
(statearr_33621_34467[(1)] = (8));

} else {
var statearr_33622_34468 = state_33618__$1;
(statearr_33622_34468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (1))){
var inst_33587 = cljs.core.vec(chs);
var inst_33588 = inst_33587;
var state_33618__$1 = (function (){var statearr_33623 = state_33618;
(statearr_33623[(10)] = inst_33588);

return statearr_33623;
})();
var statearr_33624_34469 = state_33618__$1;
(statearr_33624_34469[(2)] = null);

(statearr_33624_34469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (4))){
var inst_33588 = (state_33618[(10)]);
var state_33618__$1 = state_33618;
return cljs.core.async.ioc_alts_BANG_(state_33618__$1,(7),inst_33588);
} else {
if((state_val_33619 === (6))){
var inst_33614 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33625_34470 = state_33618__$1;
(statearr_33625_34470[(2)] = inst_33614);

(statearr_33625_34470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (3))){
var inst_33616 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33618__$1,inst_33616);
} else {
if((state_val_33619 === (2))){
var inst_33588 = (state_33618[(10)]);
var inst_33590 = cljs.core.count(inst_33588);
var inst_33591 = (inst_33590 > (0));
var state_33618__$1 = state_33618;
if(cljs.core.truth_(inst_33591)){
var statearr_33627_34472 = state_33618__$1;
(statearr_33627_34472[(1)] = (4));

} else {
var statearr_33628_34473 = state_33618__$1;
(statearr_33628_34473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (11))){
var inst_33588 = (state_33618[(10)]);
var inst_33607 = (state_33618[(2)]);
var tmp33626 = inst_33588;
var inst_33588__$1 = tmp33626;
var state_33618__$1 = (function (){var statearr_33629 = state_33618;
(statearr_33629[(11)] = inst_33607);

(statearr_33629[(10)] = inst_33588__$1);

return statearr_33629;
})();
var statearr_33630_34478 = state_33618__$1;
(statearr_33630_34478[(2)] = null);

(statearr_33630_34478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (9))){
var inst_33598 = (state_33618[(8)]);
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33618__$1,(11),out,inst_33598);
} else {
if((state_val_33619 === (5))){
var inst_33612 = cljs.core.async.close_BANG_(out);
var state_33618__$1 = state_33618;
var statearr_33631_34479 = state_33618__$1;
(statearr_33631_34479[(2)] = inst_33612);

(statearr_33631_34479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (10))){
var inst_33610 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33632_34480 = state_33618__$1;
(statearr_33632_34480[(2)] = inst_33610);

(statearr_33632_34480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (8))){
var inst_33588 = (state_33618[(10)]);
var inst_33597 = (state_33618[(7)]);
var inst_33598 = (state_33618[(8)]);
var inst_33599 = (state_33618[(9)]);
var inst_33602 = (function (){var cs = inst_33588;
var vec__33593 = inst_33597;
var v = inst_33598;
var c = inst_33599;
return (function (p1__33584_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33584_SHARP_);
});
})();
var inst_33603 = cljs.core.filterv(inst_33602,inst_33588);
var inst_33588__$1 = inst_33603;
var state_33618__$1 = (function (){var statearr_33633 = state_33618;
(statearr_33633[(10)] = inst_33588__$1);

return statearr_33633;
})();
var statearr_33634_34486 = state_33618__$1;
(statearr_33634_34486[(2)] = null);

(statearr_33634_34486[(1)] = (2));


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
var statearr_33635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33635[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33635[(1)] = (1));

return statearr_33635;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33618){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33618);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33636){var ex__32350__auto__ = e33636;
var statearr_33637_34491 = state_33618;
(statearr_33637_34491[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33618[(4)]))){
var statearr_33638_34492 = state_33618;
(statearr_33638_34492[(1)] = cljs.core.first((state_33618[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34494 = state_33618;
state_33618 = G__34494;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_33639 = f__32432__auto__();
(statearr_33639[(6)] = c__32431__auto___34466);

return statearr_33639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
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
var G__33641 = arguments.length;
switch (G__33641) {
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
var c__32431__auto___34497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_33665){
var state_val_33666 = (state_33665[(1)]);
if((state_val_33666 === (7))){
var inst_33647 = (state_33665[(7)]);
var inst_33647__$1 = (state_33665[(2)]);
var inst_33648 = (inst_33647__$1 == null);
var inst_33649 = cljs.core.not(inst_33648);
var state_33665__$1 = (function (){var statearr_33667 = state_33665;
(statearr_33667[(7)] = inst_33647__$1);

return statearr_33667;
})();
if(inst_33649){
var statearr_33668_34498 = state_33665__$1;
(statearr_33668_34498[(1)] = (8));

} else {
var statearr_33669_34499 = state_33665__$1;
(statearr_33669_34499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (1))){
var inst_33642 = (0);
var state_33665__$1 = (function (){var statearr_33670 = state_33665;
(statearr_33670[(8)] = inst_33642);

return statearr_33670;
})();
var statearr_33671_34500 = state_33665__$1;
(statearr_33671_34500[(2)] = null);

(statearr_33671_34500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (4))){
var state_33665__$1 = state_33665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33665__$1,(7),ch);
} else {
if((state_val_33666 === (6))){
var inst_33660 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33672_34501 = state_33665__$1;
(statearr_33672_34501[(2)] = inst_33660);

(statearr_33672_34501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (3))){
var inst_33662 = (state_33665[(2)]);
var inst_33663 = cljs.core.async.close_BANG_(out);
var state_33665__$1 = (function (){var statearr_33673 = state_33665;
(statearr_33673[(9)] = inst_33662);

return statearr_33673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33665__$1,inst_33663);
} else {
if((state_val_33666 === (2))){
var inst_33642 = (state_33665[(8)]);
var inst_33644 = (inst_33642 < n);
var state_33665__$1 = state_33665;
if(cljs.core.truth_(inst_33644)){
var statearr_33674_34502 = state_33665__$1;
(statearr_33674_34502[(1)] = (4));

} else {
var statearr_33675_34503 = state_33665__$1;
(statearr_33675_34503[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (11))){
var inst_33642 = (state_33665[(8)]);
var inst_33652 = (state_33665[(2)]);
var inst_33653 = (inst_33642 + (1));
var inst_33642__$1 = inst_33653;
var state_33665__$1 = (function (){var statearr_33676 = state_33665;
(statearr_33676[(10)] = inst_33652);

(statearr_33676[(8)] = inst_33642__$1);

return statearr_33676;
})();
var statearr_33677_34505 = state_33665__$1;
(statearr_33677_34505[(2)] = null);

(statearr_33677_34505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (9))){
var state_33665__$1 = state_33665;
var statearr_33678_34506 = state_33665__$1;
(statearr_33678_34506[(2)] = null);

(statearr_33678_34506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (5))){
var state_33665__$1 = state_33665;
var statearr_33679_34507 = state_33665__$1;
(statearr_33679_34507[(2)] = null);

(statearr_33679_34507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (10))){
var inst_33657 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33680_34510 = state_33665__$1;
(statearr_33680_34510[(2)] = inst_33657);

(statearr_33680_34510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (8))){
var inst_33647 = (state_33665[(7)]);
var state_33665__$1 = state_33665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33665__$1,(11),out,inst_33647);
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
var statearr_33681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33681[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33681[(1)] = (1));

return statearr_33681;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33665){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33665);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33682){var ex__32350__auto__ = e33682;
var statearr_33683_34513 = state_33665;
(statearr_33683_34513[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33665[(4)]))){
var statearr_33684_34514 = state_33665;
(statearr_33684_34514[(1)] = cljs.core.first((state_33665[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34516 = state_33665;
state_33665 = G__34516;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_33685 = f__32432__auto__();
(statearr_33685[(6)] = c__32431__auto___34497);

return statearr_33685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
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
cljs.core.async.t_cljs$core$async33690 = (function (f,ch,meta33688,_,fn1,meta33691){
this.f = f;
this.ch = ch;
this.meta33688 = meta33688;
this._ = _;
this.fn1 = fn1;
this.meta33691 = meta33691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33692,meta33691__$1){
var self__ = this;
var _33692__$1 = this;
return (new cljs.core.async.t_cljs$core$async33690(self__.f,self__.ch,self__.meta33688,self__._,self__.fn1,meta33691__$1));
}));

(cljs.core.async.t_cljs$core$async33690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33692){
var self__ = this;
var _33692__$1 = this;
return self__.meta33691;
}));

(cljs.core.async.t_cljs$core$async33690.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33690.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33690.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33690.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33686_SHARP_){
var G__33693 = (((p1__33686_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33686_SHARP_) : self__.f.call(null,p1__33686_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33693) : f1.call(null,G__33693));
});
}));

(cljs.core.async.t_cljs$core$async33690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33688","meta33688",965578810,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33687","cljs.core.async/t_cljs$core$async33687",182247721,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33691","meta33691",1807520697,null)], null);
}));

(cljs.core.async.t_cljs$core$async33690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33690");

(cljs.core.async.t_cljs$core$async33690.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33690.
 */
cljs.core.async.__GT_t_cljs$core$async33690 = (function cljs$core$async$__GT_t_cljs$core$async33690(f,ch,meta33688,_,fn1,meta33691){
return (new cljs.core.async.t_cljs$core$async33690(f,ch,meta33688,_,fn1,meta33691));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33687 = (function (f,ch,meta33688){
this.f = f;
this.ch = ch;
this.meta33688 = meta33688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33689,meta33688__$1){
var self__ = this;
var _33689__$1 = this;
return (new cljs.core.async.t_cljs$core$async33687(self__.f,self__.ch,meta33688__$1));
}));

(cljs.core.async.t_cljs$core$async33687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33689){
var self__ = this;
var _33689__$1 = this;
return self__.meta33688;
}));

(cljs.core.async.t_cljs$core$async33687.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33687.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33687.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33690(self__.f,self__.ch,self__.meta33688,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33694 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33694) : self__.f.call(null,G__33694));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33687.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33688","meta33688",965578810,null)], null);
}));

(cljs.core.async.t_cljs$core$async33687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33687");

(cljs.core.async.t_cljs$core$async33687.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33687.
 */
cljs.core.async.__GT_t_cljs$core$async33687 = (function cljs$core$async$__GT_t_cljs$core$async33687(f,ch,meta33688){
return (new cljs.core.async.t_cljs$core$async33687(f,ch,meta33688));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33687(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33695 = (function (f,ch,meta33696){
this.f = f;
this.ch = ch;
this.meta33696 = meta33696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33697,meta33696__$1){
var self__ = this;
var _33697__$1 = this;
return (new cljs.core.async.t_cljs$core$async33695(self__.f,self__.ch,meta33696__$1));
}));

(cljs.core.async.t_cljs$core$async33695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33697){
var self__ = this;
var _33697__$1 = this;
return self__.meta33696;
}));

(cljs.core.async.t_cljs$core$async33695.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33695.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33695.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33695.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33695.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33695.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33696","meta33696",1126885166,null)], null);
}));

(cljs.core.async.t_cljs$core$async33695.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33695");

(cljs.core.async.t_cljs$core$async33695.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33695");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33695.
 */
cljs.core.async.__GT_t_cljs$core$async33695 = (function cljs$core$async$__GT_t_cljs$core$async33695(f,ch,meta33696){
return (new cljs.core.async.t_cljs$core$async33695(f,ch,meta33696));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33695(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33698 = (function (p,ch,meta33699){
this.p = p;
this.ch = ch;
this.meta33699 = meta33699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33700,meta33699__$1){
var self__ = this;
var _33700__$1 = this;
return (new cljs.core.async.t_cljs$core$async33698(self__.p,self__.ch,meta33699__$1));
}));

(cljs.core.async.t_cljs$core$async33698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33700){
var self__ = this;
var _33700__$1 = this;
return self__.meta33699;
}));

(cljs.core.async.t_cljs$core$async33698.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33698.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33698.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33698.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33699","meta33699",978266502,null)], null);
}));

(cljs.core.async.t_cljs$core$async33698.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33698");

(cljs.core.async.t_cljs$core$async33698.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33698");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33698.
 */
cljs.core.async.__GT_t_cljs$core$async33698 = (function cljs$core$async$__GT_t_cljs$core$async33698(p,ch,meta33699){
return (new cljs.core.async.t_cljs$core$async33698(p,ch,meta33699));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33698(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33702 = arguments.length;
switch (G__33702) {
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
var c__32431__auto___34542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_33723){
var state_val_33724 = (state_33723[(1)]);
if((state_val_33724 === (7))){
var inst_33719 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
var statearr_33725_34547 = state_33723__$1;
(statearr_33725_34547[(2)] = inst_33719);

(statearr_33725_34547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (1))){
var state_33723__$1 = state_33723;
var statearr_33726_34548 = state_33723__$1;
(statearr_33726_34548[(2)] = null);

(statearr_33726_34548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (4))){
var inst_33705 = (state_33723[(7)]);
var inst_33705__$1 = (state_33723[(2)]);
var inst_33706 = (inst_33705__$1 == null);
var state_33723__$1 = (function (){var statearr_33727 = state_33723;
(statearr_33727[(7)] = inst_33705__$1);

return statearr_33727;
})();
if(cljs.core.truth_(inst_33706)){
var statearr_33728_34549 = state_33723__$1;
(statearr_33728_34549[(1)] = (5));

} else {
var statearr_33729_34550 = state_33723__$1;
(statearr_33729_34550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (6))){
var inst_33705 = (state_33723[(7)]);
var inst_33710 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33705) : p.call(null,inst_33705));
var state_33723__$1 = state_33723;
if(cljs.core.truth_(inst_33710)){
var statearr_33730_34551 = state_33723__$1;
(statearr_33730_34551[(1)] = (8));

} else {
var statearr_33731_34552 = state_33723__$1;
(statearr_33731_34552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (3))){
var inst_33721 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33723__$1,inst_33721);
} else {
if((state_val_33724 === (2))){
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33723__$1,(4),ch);
} else {
if((state_val_33724 === (11))){
var inst_33713 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
var statearr_33732_34558 = state_33723__$1;
(statearr_33732_34558[(2)] = inst_33713);

(statearr_33732_34558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (9))){
var state_33723__$1 = state_33723;
var statearr_33733_34559 = state_33723__$1;
(statearr_33733_34559[(2)] = null);

(statearr_33733_34559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (5))){
var inst_33708 = cljs.core.async.close_BANG_(out);
var state_33723__$1 = state_33723;
var statearr_33734_34566 = state_33723__$1;
(statearr_33734_34566[(2)] = inst_33708);

(statearr_33734_34566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (10))){
var inst_33716 = (state_33723[(2)]);
var state_33723__$1 = (function (){var statearr_33735 = state_33723;
(statearr_33735[(8)] = inst_33716);

return statearr_33735;
})();
var statearr_33736_34569 = state_33723__$1;
(statearr_33736_34569[(2)] = null);

(statearr_33736_34569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (8))){
var inst_33705 = (state_33723[(7)]);
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33723__$1,(11),out,inst_33705);
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
var statearr_33737 = [null,null,null,null,null,null,null,null,null];
(statearr_33737[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33737[(1)] = (1));

return statearr_33737;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33723){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33723);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33738){var ex__32350__auto__ = e33738;
var statearr_33739_34572 = state_33723;
(statearr_33739_34572[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33723[(4)]))){
var statearr_33740_34574 = state_33723;
(statearr_33740_34574[(1)] = cljs.core.first((state_33723[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34578 = state_33723;
state_33723 = G__34578;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_33741 = f__32432__auto__();
(statearr_33741[(6)] = c__32431__auto___34542);

return statearr_33741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33743 = arguments.length;
switch (G__33743) {
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
var c__32431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_33805){
var state_val_33806 = (state_33805[(1)]);
if((state_val_33806 === (7))){
var inst_33801 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
var statearr_33807_34588 = state_33805__$1;
(statearr_33807_34588[(2)] = inst_33801);

(statearr_33807_34588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (20))){
var inst_33771 = (state_33805[(7)]);
var inst_33782 = (state_33805[(2)]);
var inst_33783 = cljs.core.next(inst_33771);
var inst_33757 = inst_33783;
var inst_33758 = null;
var inst_33759 = (0);
var inst_33760 = (0);
var state_33805__$1 = (function (){var statearr_33808 = state_33805;
(statearr_33808[(8)] = inst_33782);

(statearr_33808[(9)] = inst_33757);

(statearr_33808[(10)] = inst_33758);

(statearr_33808[(11)] = inst_33759);

(statearr_33808[(12)] = inst_33760);

return statearr_33808;
})();
var statearr_33809_34596 = state_33805__$1;
(statearr_33809_34596[(2)] = null);

(statearr_33809_34596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (1))){
var state_33805__$1 = state_33805;
var statearr_33810_34601 = state_33805__$1;
(statearr_33810_34601[(2)] = null);

(statearr_33810_34601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (4))){
var inst_33746 = (state_33805[(13)]);
var inst_33746__$1 = (state_33805[(2)]);
var inst_33747 = (inst_33746__$1 == null);
var state_33805__$1 = (function (){var statearr_33811 = state_33805;
(statearr_33811[(13)] = inst_33746__$1);

return statearr_33811;
})();
if(cljs.core.truth_(inst_33747)){
var statearr_33812_34603 = state_33805__$1;
(statearr_33812_34603[(1)] = (5));

} else {
var statearr_33813_34604 = state_33805__$1;
(statearr_33813_34604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (15))){
var state_33805__$1 = state_33805;
var statearr_33817_34605 = state_33805__$1;
(statearr_33817_34605[(2)] = null);

(statearr_33817_34605[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (21))){
var state_33805__$1 = state_33805;
var statearr_33818_34606 = state_33805__$1;
(statearr_33818_34606[(2)] = null);

(statearr_33818_34606[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (13))){
var inst_33760 = (state_33805[(12)]);
var inst_33757 = (state_33805[(9)]);
var inst_33758 = (state_33805[(10)]);
var inst_33759 = (state_33805[(11)]);
var inst_33767 = (state_33805[(2)]);
var inst_33768 = (inst_33760 + (1));
var tmp33814 = inst_33758;
var tmp33815 = inst_33757;
var tmp33816 = inst_33759;
var inst_33757__$1 = tmp33815;
var inst_33758__$1 = tmp33814;
var inst_33759__$1 = tmp33816;
var inst_33760__$1 = inst_33768;
var state_33805__$1 = (function (){var statearr_33819 = state_33805;
(statearr_33819[(14)] = inst_33767);

(statearr_33819[(9)] = inst_33757__$1);

(statearr_33819[(10)] = inst_33758__$1);

(statearr_33819[(11)] = inst_33759__$1);

(statearr_33819[(12)] = inst_33760__$1);

return statearr_33819;
})();
var statearr_33820_34608 = state_33805__$1;
(statearr_33820_34608[(2)] = null);

(statearr_33820_34608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (22))){
var state_33805__$1 = state_33805;
var statearr_33821_34609 = state_33805__$1;
(statearr_33821_34609[(2)] = null);

(statearr_33821_34609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (6))){
var inst_33746 = (state_33805[(13)]);
var inst_33755 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33746) : f.call(null,inst_33746));
var inst_33756 = cljs.core.seq(inst_33755);
var inst_33757 = inst_33756;
var inst_33758 = null;
var inst_33759 = (0);
var inst_33760 = (0);
var state_33805__$1 = (function (){var statearr_33822 = state_33805;
(statearr_33822[(9)] = inst_33757);

(statearr_33822[(10)] = inst_33758);

(statearr_33822[(11)] = inst_33759);

(statearr_33822[(12)] = inst_33760);

return statearr_33822;
})();
var statearr_33823_34610 = state_33805__$1;
(statearr_33823_34610[(2)] = null);

(statearr_33823_34610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (17))){
var inst_33771 = (state_33805[(7)]);
var inst_33775 = cljs.core.chunk_first(inst_33771);
var inst_33776 = cljs.core.chunk_rest(inst_33771);
var inst_33777 = cljs.core.count(inst_33775);
var inst_33757 = inst_33776;
var inst_33758 = inst_33775;
var inst_33759 = inst_33777;
var inst_33760 = (0);
var state_33805__$1 = (function (){var statearr_33824 = state_33805;
(statearr_33824[(9)] = inst_33757);

(statearr_33824[(10)] = inst_33758);

(statearr_33824[(11)] = inst_33759);

(statearr_33824[(12)] = inst_33760);

return statearr_33824;
})();
var statearr_33825_34611 = state_33805__$1;
(statearr_33825_34611[(2)] = null);

(statearr_33825_34611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (3))){
var inst_33803 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33805__$1,inst_33803);
} else {
if((state_val_33806 === (12))){
var inst_33791 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
var statearr_33826_34616 = state_33805__$1;
(statearr_33826_34616[(2)] = inst_33791);

(statearr_33826_34616[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (2))){
var state_33805__$1 = state_33805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33805__$1,(4),in$);
} else {
if((state_val_33806 === (23))){
var inst_33799 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
var statearr_33827_34617 = state_33805__$1;
(statearr_33827_34617[(2)] = inst_33799);

(statearr_33827_34617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (19))){
var inst_33786 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
var statearr_33828_34619 = state_33805__$1;
(statearr_33828_34619[(2)] = inst_33786);

(statearr_33828_34619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (11))){
var inst_33757 = (state_33805[(9)]);
var inst_33771 = (state_33805[(7)]);
var inst_33771__$1 = cljs.core.seq(inst_33757);
var state_33805__$1 = (function (){var statearr_33829 = state_33805;
(statearr_33829[(7)] = inst_33771__$1);

return statearr_33829;
})();
if(inst_33771__$1){
var statearr_33830_34620 = state_33805__$1;
(statearr_33830_34620[(1)] = (14));

} else {
var statearr_33831_34621 = state_33805__$1;
(statearr_33831_34621[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (9))){
var inst_33793 = (state_33805[(2)]);
var inst_33794 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33805__$1 = (function (){var statearr_33832 = state_33805;
(statearr_33832[(15)] = inst_33793);

return statearr_33832;
})();
if(cljs.core.truth_(inst_33794)){
var statearr_33833_34622 = state_33805__$1;
(statearr_33833_34622[(1)] = (21));

} else {
var statearr_33834_34623 = state_33805__$1;
(statearr_33834_34623[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (5))){
var inst_33749 = cljs.core.async.close_BANG_(out);
var state_33805__$1 = state_33805;
var statearr_33835_34625 = state_33805__$1;
(statearr_33835_34625[(2)] = inst_33749);

(statearr_33835_34625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (14))){
var inst_33771 = (state_33805[(7)]);
var inst_33773 = cljs.core.chunked_seq_QMARK_(inst_33771);
var state_33805__$1 = state_33805;
if(inst_33773){
var statearr_33836_34627 = state_33805__$1;
(statearr_33836_34627[(1)] = (17));

} else {
var statearr_33837_34630 = state_33805__$1;
(statearr_33837_34630[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (16))){
var inst_33789 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
var statearr_33838_34631 = state_33805__$1;
(statearr_33838_34631[(2)] = inst_33789);

(statearr_33838_34631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (10))){
var inst_33758 = (state_33805[(10)]);
var inst_33760 = (state_33805[(12)]);
var inst_33765 = cljs.core._nth(inst_33758,inst_33760);
var state_33805__$1 = state_33805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33805__$1,(13),out,inst_33765);
} else {
if((state_val_33806 === (18))){
var inst_33771 = (state_33805[(7)]);
var inst_33780 = cljs.core.first(inst_33771);
var state_33805__$1 = state_33805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33805__$1,(20),out,inst_33780);
} else {
if((state_val_33806 === (8))){
var inst_33760 = (state_33805[(12)]);
var inst_33759 = (state_33805[(11)]);
var inst_33762 = (inst_33760 < inst_33759);
var inst_33763 = inst_33762;
var state_33805__$1 = state_33805;
if(cljs.core.truth_(inst_33763)){
var statearr_33839_34633 = state_33805__$1;
(statearr_33839_34633[(1)] = (10));

} else {
var statearr_33840_34634 = state_33805__$1;
(statearr_33840_34634[(1)] = (11));

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
var statearr_33841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33841[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32347__auto__);

(statearr_33841[(1)] = (1));

return statearr_33841;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32347__auto____1 = (function (state_33805){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33805);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33842){var ex__32350__auto__ = e33842;
var statearr_33843_34635 = state_33805;
(statearr_33843_34635[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33805[(4)]))){
var statearr_33844_34636 = state_33805;
(statearr_33844_34636[(1)] = cljs.core.first((state_33805[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34638 = state_33805;
state_33805 = G__34638;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32347__auto__ = function(state_33805){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32347__auto____1.call(this,state_33805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32347__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32347__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_33845 = f__32432__auto__();
(statearr_33845[(6)] = c__32431__auto__);

return statearr_33845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));

return c__32431__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33847 = arguments.length;
switch (G__33847) {
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
var G__33849 = arguments.length;
switch (G__33849) {
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
var G__33851 = arguments.length;
switch (G__33851) {
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
var c__32431__auto___34642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_33875){
var state_val_33876 = (state_33875[(1)]);
if((state_val_33876 === (7))){
var inst_33870 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
var statearr_33877_34644 = state_33875__$1;
(statearr_33877_34644[(2)] = inst_33870);

(statearr_33877_34644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (1))){
var inst_33852 = null;
var state_33875__$1 = (function (){var statearr_33878 = state_33875;
(statearr_33878[(7)] = inst_33852);

return statearr_33878;
})();
var statearr_33879_34645 = state_33875__$1;
(statearr_33879_34645[(2)] = null);

(statearr_33879_34645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (4))){
var inst_33855 = (state_33875[(8)]);
var inst_33855__$1 = (state_33875[(2)]);
var inst_33856 = (inst_33855__$1 == null);
var inst_33857 = cljs.core.not(inst_33856);
var state_33875__$1 = (function (){var statearr_33880 = state_33875;
(statearr_33880[(8)] = inst_33855__$1);

return statearr_33880;
})();
if(inst_33857){
var statearr_33881_34646 = state_33875__$1;
(statearr_33881_34646[(1)] = (5));

} else {
var statearr_33882_34647 = state_33875__$1;
(statearr_33882_34647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (6))){
var state_33875__$1 = state_33875;
var statearr_33883_34648 = state_33875__$1;
(statearr_33883_34648[(2)] = null);

(statearr_33883_34648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (3))){
var inst_33872 = (state_33875[(2)]);
var inst_33873 = cljs.core.async.close_BANG_(out);
var state_33875__$1 = (function (){var statearr_33884 = state_33875;
(statearr_33884[(9)] = inst_33872);

return statearr_33884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33875__$1,inst_33873);
} else {
if((state_val_33876 === (2))){
var state_33875__$1 = state_33875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33875__$1,(4),ch);
} else {
if((state_val_33876 === (11))){
var inst_33855 = (state_33875[(8)]);
var inst_33864 = (state_33875[(2)]);
var inst_33852 = inst_33855;
var state_33875__$1 = (function (){var statearr_33885 = state_33875;
(statearr_33885[(10)] = inst_33864);

(statearr_33885[(7)] = inst_33852);

return statearr_33885;
})();
var statearr_33886_34651 = state_33875__$1;
(statearr_33886_34651[(2)] = null);

(statearr_33886_34651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (9))){
var inst_33855 = (state_33875[(8)]);
var state_33875__$1 = state_33875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33875__$1,(11),out,inst_33855);
} else {
if((state_val_33876 === (5))){
var inst_33855 = (state_33875[(8)]);
var inst_33852 = (state_33875[(7)]);
var inst_33859 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33855,inst_33852);
var state_33875__$1 = state_33875;
if(inst_33859){
var statearr_33888_34654 = state_33875__$1;
(statearr_33888_34654[(1)] = (8));

} else {
var statearr_33889_34655 = state_33875__$1;
(statearr_33889_34655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (10))){
var inst_33867 = (state_33875[(2)]);
var state_33875__$1 = state_33875;
var statearr_33890_34656 = state_33875__$1;
(statearr_33890_34656[(2)] = inst_33867);

(statearr_33890_34656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33876 === (8))){
var inst_33852 = (state_33875[(7)]);
var tmp33887 = inst_33852;
var inst_33852__$1 = tmp33887;
var state_33875__$1 = (function (){var statearr_33891 = state_33875;
(statearr_33891[(7)] = inst_33852__$1);

return statearr_33891;
})();
var statearr_33892_34657 = state_33875__$1;
(statearr_33892_34657[(2)] = null);

(statearr_33892_34657[(1)] = (2));


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
var statearr_33893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33893[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33893[(1)] = (1));

return statearr_33893;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33875){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33875);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33894){var ex__32350__auto__ = e33894;
var statearr_33895_34658 = state_33875;
(statearr_33895_34658[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33875[(4)]))){
var statearr_33896_34659 = state_33875;
(statearr_33896_34659[(1)] = cljs.core.first((state_33875[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34660 = state_33875;
state_33875 = G__34660;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_33897 = f__32432__auto__();
(statearr_33897[(6)] = c__32431__auto___34642);

return statearr_33897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33899 = arguments.length;
switch (G__33899) {
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
var c__32431__auto___34663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_33937){
var state_val_33938 = (state_33937[(1)]);
if((state_val_33938 === (7))){
var inst_33933 = (state_33937[(2)]);
var state_33937__$1 = state_33937;
var statearr_33939_34664 = state_33937__$1;
(statearr_33939_34664[(2)] = inst_33933);

(statearr_33939_34664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (1))){
var inst_33900 = (new Array(n));
var inst_33901 = inst_33900;
var inst_33902 = (0);
var state_33937__$1 = (function (){var statearr_33940 = state_33937;
(statearr_33940[(7)] = inst_33901);

(statearr_33940[(8)] = inst_33902);

return statearr_33940;
})();
var statearr_33941_34666 = state_33937__$1;
(statearr_33941_34666[(2)] = null);

(statearr_33941_34666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (4))){
var inst_33905 = (state_33937[(9)]);
var inst_33905__$1 = (state_33937[(2)]);
var inst_33906 = (inst_33905__$1 == null);
var inst_33907 = cljs.core.not(inst_33906);
var state_33937__$1 = (function (){var statearr_33942 = state_33937;
(statearr_33942[(9)] = inst_33905__$1);

return statearr_33942;
})();
if(inst_33907){
var statearr_33943_34667 = state_33937__$1;
(statearr_33943_34667[(1)] = (5));

} else {
var statearr_33944_34668 = state_33937__$1;
(statearr_33944_34668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (15))){
var inst_33927 = (state_33937[(2)]);
var state_33937__$1 = state_33937;
var statearr_33945_34669 = state_33937__$1;
(statearr_33945_34669[(2)] = inst_33927);

(statearr_33945_34669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (13))){
var state_33937__$1 = state_33937;
var statearr_33946_34671 = state_33937__$1;
(statearr_33946_34671[(2)] = null);

(statearr_33946_34671[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (6))){
var inst_33902 = (state_33937[(8)]);
var inst_33923 = (inst_33902 > (0));
var state_33937__$1 = state_33937;
if(cljs.core.truth_(inst_33923)){
var statearr_33947_34672 = state_33937__$1;
(statearr_33947_34672[(1)] = (12));

} else {
var statearr_33948_34673 = state_33937__$1;
(statearr_33948_34673[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (3))){
var inst_33935 = (state_33937[(2)]);
var state_33937__$1 = state_33937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33937__$1,inst_33935);
} else {
if((state_val_33938 === (12))){
var inst_33901 = (state_33937[(7)]);
var inst_33925 = cljs.core.vec(inst_33901);
var state_33937__$1 = state_33937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33937__$1,(15),out,inst_33925);
} else {
if((state_val_33938 === (2))){
var state_33937__$1 = state_33937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33937__$1,(4),ch);
} else {
if((state_val_33938 === (11))){
var inst_33917 = (state_33937[(2)]);
var inst_33918 = (new Array(n));
var inst_33901 = inst_33918;
var inst_33902 = (0);
var state_33937__$1 = (function (){var statearr_33949 = state_33937;
(statearr_33949[(10)] = inst_33917);

(statearr_33949[(7)] = inst_33901);

(statearr_33949[(8)] = inst_33902);

return statearr_33949;
})();
var statearr_33950_34677 = state_33937__$1;
(statearr_33950_34677[(2)] = null);

(statearr_33950_34677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (9))){
var inst_33901 = (state_33937[(7)]);
var inst_33915 = cljs.core.vec(inst_33901);
var state_33937__$1 = state_33937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33937__$1,(11),out,inst_33915);
} else {
if((state_val_33938 === (5))){
var inst_33901 = (state_33937[(7)]);
var inst_33902 = (state_33937[(8)]);
var inst_33905 = (state_33937[(9)]);
var inst_33910 = (state_33937[(11)]);
var inst_33909 = (inst_33901[inst_33902] = inst_33905);
var inst_33910__$1 = (inst_33902 + (1));
var inst_33911 = (inst_33910__$1 < n);
var state_33937__$1 = (function (){var statearr_33951 = state_33937;
(statearr_33951[(12)] = inst_33909);

(statearr_33951[(11)] = inst_33910__$1);

return statearr_33951;
})();
if(cljs.core.truth_(inst_33911)){
var statearr_33952_34683 = state_33937__$1;
(statearr_33952_34683[(1)] = (8));

} else {
var statearr_33953_34685 = state_33937__$1;
(statearr_33953_34685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (14))){
var inst_33930 = (state_33937[(2)]);
var inst_33931 = cljs.core.async.close_BANG_(out);
var state_33937__$1 = (function (){var statearr_33955 = state_33937;
(statearr_33955[(13)] = inst_33930);

return statearr_33955;
})();
var statearr_33956_34689 = state_33937__$1;
(statearr_33956_34689[(2)] = inst_33931);

(statearr_33956_34689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (10))){
var inst_33921 = (state_33937[(2)]);
var state_33937__$1 = state_33937;
var statearr_33957_34692 = state_33937__$1;
(statearr_33957_34692[(2)] = inst_33921);

(statearr_33957_34692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33938 === (8))){
var inst_33901 = (state_33937[(7)]);
var inst_33910 = (state_33937[(11)]);
var tmp33954 = inst_33901;
var inst_33901__$1 = tmp33954;
var inst_33902 = inst_33910;
var state_33937__$1 = (function (){var statearr_33958 = state_33937;
(statearr_33958[(7)] = inst_33901__$1);

(statearr_33958[(8)] = inst_33902);

return statearr_33958;
})();
var statearr_33959_34697 = state_33937__$1;
(statearr_33959_34697[(2)] = null);

(statearr_33959_34697[(1)] = (2));


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
var statearr_33960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33960[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_33960[(1)] = (1));

return statearr_33960;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_33937){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_33937);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e33961){var ex__32350__auto__ = e33961;
var statearr_33962_34703 = state_33937;
(statearr_33962_34703[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_33937[(4)]))){
var statearr_33963_34704 = state_33937;
(statearr_33963_34704[(1)] = cljs.core.first((state_33937[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34707 = state_33937;
state_33937 = G__34707;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_33937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_33937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_33964 = f__32432__auto__();
(statearr_33964[(6)] = c__32431__auto___34663);

return statearr_33964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33966 = arguments.length;
switch (G__33966) {
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
var c__32431__auto___34721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_34011){
var state_val_34012 = (state_34011[(1)]);
if((state_val_34012 === (7))){
var inst_34007 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
var statearr_34013_34726 = state_34011__$1;
(statearr_34013_34726[(2)] = inst_34007);

(statearr_34013_34726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (1))){
var inst_33967 = [];
var inst_33968 = inst_33967;
var inst_33969 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34011__$1 = (function (){var statearr_34014 = state_34011;
(statearr_34014[(7)] = inst_33968);

(statearr_34014[(8)] = inst_33969);

return statearr_34014;
})();
var statearr_34015_34730 = state_34011__$1;
(statearr_34015_34730[(2)] = null);

(statearr_34015_34730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (4))){
var inst_33972 = (state_34011[(9)]);
var inst_33972__$1 = (state_34011[(2)]);
var inst_33973 = (inst_33972__$1 == null);
var inst_33974 = cljs.core.not(inst_33973);
var state_34011__$1 = (function (){var statearr_34016 = state_34011;
(statearr_34016[(9)] = inst_33972__$1);

return statearr_34016;
})();
if(inst_33974){
var statearr_34017_34735 = state_34011__$1;
(statearr_34017_34735[(1)] = (5));

} else {
var statearr_34018_34736 = state_34011__$1;
(statearr_34018_34736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (15))){
var inst_33968 = (state_34011[(7)]);
var inst_33999 = cljs.core.vec(inst_33968);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34011__$1,(18),out,inst_33999);
} else {
if((state_val_34012 === (13))){
var inst_33994 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
var statearr_34019_34740 = state_34011__$1;
(statearr_34019_34740[(2)] = inst_33994);

(statearr_34019_34740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (6))){
var inst_33968 = (state_34011[(7)]);
var inst_33996 = inst_33968.length;
var inst_33997 = (inst_33996 > (0));
var state_34011__$1 = state_34011;
if(cljs.core.truth_(inst_33997)){
var statearr_34020_34743 = state_34011__$1;
(statearr_34020_34743[(1)] = (15));

} else {
var statearr_34021_34744 = state_34011__$1;
(statearr_34021_34744[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (17))){
var inst_34004 = (state_34011[(2)]);
var inst_34005 = cljs.core.async.close_BANG_(out);
var state_34011__$1 = (function (){var statearr_34022 = state_34011;
(statearr_34022[(10)] = inst_34004);

return statearr_34022;
})();
var statearr_34023_34745 = state_34011__$1;
(statearr_34023_34745[(2)] = inst_34005);

(statearr_34023_34745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (3))){
var inst_34009 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34011__$1,inst_34009);
} else {
if((state_val_34012 === (12))){
var inst_33968 = (state_34011[(7)]);
var inst_33987 = cljs.core.vec(inst_33968);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34011__$1,(14),out,inst_33987);
} else {
if((state_val_34012 === (2))){
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34011__$1,(4),ch);
} else {
if((state_val_34012 === (11))){
var inst_33968 = (state_34011[(7)]);
var inst_33972 = (state_34011[(9)]);
var inst_33976 = (state_34011[(11)]);
var inst_33984 = inst_33968.push(inst_33972);
var tmp34024 = inst_33968;
var inst_33968__$1 = tmp34024;
var inst_33969 = inst_33976;
var state_34011__$1 = (function (){var statearr_34025 = state_34011;
(statearr_34025[(12)] = inst_33984);

(statearr_34025[(7)] = inst_33968__$1);

(statearr_34025[(8)] = inst_33969);

return statearr_34025;
})();
var statearr_34026_34746 = state_34011__$1;
(statearr_34026_34746[(2)] = null);

(statearr_34026_34746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (9))){
var inst_33969 = (state_34011[(8)]);
var inst_33980 = cljs.core.keyword_identical_QMARK_(inst_33969,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34011__$1 = state_34011;
var statearr_34027_34747 = state_34011__$1;
(statearr_34027_34747[(2)] = inst_33980);

(statearr_34027_34747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (5))){
var inst_33972 = (state_34011[(9)]);
var inst_33976 = (state_34011[(11)]);
var inst_33969 = (state_34011[(8)]);
var inst_33977 = (state_34011[(13)]);
var inst_33976__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33972) : f.call(null,inst_33972));
var inst_33977__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33976__$1,inst_33969);
var state_34011__$1 = (function (){var statearr_34028 = state_34011;
(statearr_34028[(11)] = inst_33976__$1);

(statearr_34028[(13)] = inst_33977__$1);

return statearr_34028;
})();
if(inst_33977__$1){
var statearr_34029_34748 = state_34011__$1;
(statearr_34029_34748[(1)] = (8));

} else {
var statearr_34030_34749 = state_34011__$1;
(statearr_34030_34749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (14))){
var inst_33972 = (state_34011[(9)]);
var inst_33976 = (state_34011[(11)]);
var inst_33989 = (state_34011[(2)]);
var inst_33990 = [];
var inst_33991 = inst_33990.push(inst_33972);
var inst_33968 = inst_33990;
var inst_33969 = inst_33976;
var state_34011__$1 = (function (){var statearr_34031 = state_34011;
(statearr_34031[(14)] = inst_33989);

(statearr_34031[(15)] = inst_33991);

(statearr_34031[(7)] = inst_33968);

(statearr_34031[(8)] = inst_33969);

return statearr_34031;
})();
var statearr_34032_34751 = state_34011__$1;
(statearr_34032_34751[(2)] = null);

(statearr_34032_34751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (16))){
var state_34011__$1 = state_34011;
var statearr_34033_34752 = state_34011__$1;
(statearr_34033_34752[(2)] = null);

(statearr_34033_34752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (10))){
var inst_33982 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
if(cljs.core.truth_(inst_33982)){
var statearr_34034_34755 = state_34011__$1;
(statearr_34034_34755[(1)] = (11));

} else {
var statearr_34035_34756 = state_34011__$1;
(statearr_34035_34756[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (18))){
var inst_34001 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
var statearr_34036_34759 = state_34011__$1;
(statearr_34036_34759[(2)] = inst_34001);

(statearr_34036_34759[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (8))){
var inst_33977 = (state_34011[(13)]);
var state_34011__$1 = state_34011;
var statearr_34037_34760 = state_34011__$1;
(statearr_34037_34760[(2)] = inst_33977);

(statearr_34037_34760[(1)] = (10));


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
var statearr_34038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34038[(0)] = cljs$core$async$state_machine__32347__auto__);

(statearr_34038[(1)] = (1));

return statearr_34038;
});
var cljs$core$async$state_machine__32347__auto____1 = (function (state_34011){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_34011);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e34039){var ex__32350__auto__ = e34039;
var statearr_34040_34763 = state_34011;
(statearr_34040_34763[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_34011[(4)]))){
var statearr_34041_34764 = state_34011;
(statearr_34041_34764[(1)] = cljs.core.first((state_34011[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34765 = state_34011;
state_34011 = G__34765;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
cljs$core$async$state_machine__32347__auto__ = function(state_34011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32347__auto____1.call(this,state_34011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32347__auto____0;
cljs$core$async$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32347__auto____1;
return cljs$core$async$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_34042 = f__32432__auto__();
(statearr_34042[(6)] = c__32431__auto___34721);

return statearr_34042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
