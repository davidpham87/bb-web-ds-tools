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
cljs.core.async.t_cljs$core$async32543 = (function (f,blockable,meta32544){
this.f = f;
this.blockable = blockable;
this.meta32544 = meta32544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32545,meta32544__$1){
var self__ = this;
var _32545__$1 = this;
return (new cljs.core.async.t_cljs$core$async32543(self__.f,self__.blockable,meta32544__$1));
}));

(cljs.core.async.t_cljs$core$async32543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32545){
var self__ = this;
var _32545__$1 = this;
return self__.meta32544;
}));

(cljs.core.async.t_cljs$core$async32543.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32543.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32544","meta32544",1928716993,null)], null);
}));

(cljs.core.async.t_cljs$core$async32543.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32543");

(cljs.core.async.t_cljs$core$async32543.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32543");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32543.
 */
cljs.core.async.__GT_t_cljs$core$async32543 = (function cljs$core$async$__GT_t_cljs$core$async32543(f,blockable,meta32544){
return (new cljs.core.async.t_cljs$core$async32543(f,blockable,meta32544));
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
return (new cljs.core.async.t_cljs$core$async32543(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32552 = arguments.length;
switch (G__32552) {
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
var G__32556 = arguments.length;
switch (G__32556) {
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
var val_34741 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34741) : fn1.call(null,val_34741));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34741) : fn1.call(null,val_34741));
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
var n__5616__auto___34743 = n;
var x_34744 = (0);
while(true){
if((x_34744 < n__5616__auto___34743)){
(a[x_34744] = x_34744);

var G__34745 = (x_34744 + (1));
x_34744 = G__34745;
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
cljs.core.async.t_cljs$core$async32580 = (function (flag,meta32581){
this.flag = flag;
this.meta32581 = meta32581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32582,meta32581__$1){
var self__ = this;
var _32582__$1 = this;
return (new cljs.core.async.t_cljs$core$async32580(self__.flag,meta32581__$1));
}));

(cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32582){
var self__ = this;
var _32582__$1 = this;
return self__.meta32581;
}));

(cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32581","meta32581",1821059354,null)], null);
}));

(cljs.core.async.t_cljs$core$async32580.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32580");

(cljs.core.async.t_cljs$core$async32580.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32580");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32580.
 */
cljs.core.async.__GT_t_cljs$core$async32580 = (function cljs$core$async$__GT_t_cljs$core$async32580(flag,meta32581){
return (new cljs.core.async.t_cljs$core$async32580(flag,meta32581));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32580(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32583 = (function (flag,cb,meta32584){
this.flag = flag;
this.cb = cb;
this.meta32584 = meta32584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32585,meta32584__$1){
var self__ = this;
var _32585__$1 = this;
return (new cljs.core.async.t_cljs$core$async32583(self__.flag,self__.cb,meta32584__$1));
}));

(cljs.core.async.t_cljs$core$async32583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32585){
var self__ = this;
var _32585__$1 = this;
return self__.meta32584;
}));

(cljs.core.async.t_cljs$core$async32583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32584","meta32584",-108235351,null)], null);
}));

(cljs.core.async.t_cljs$core$async32583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32583");

(cljs.core.async.t_cljs$core$async32583.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32583.
 */
cljs.core.async.__GT_t_cljs$core$async32583 = (function cljs$core$async$__GT_t_cljs$core$async32583(flag,cb,meta32584){
return (new cljs.core.async.t_cljs$core$async32583(flag,cb,meta32584));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32583(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_34752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34752)){
if((!(((port_34752.cljs$core$IFn$_invoke$arity$1 ? port_34752.cljs$core$IFn$_invoke$arity$1((1)) : port_34752.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34753 = (i + (1));
i = G__34753;
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
var G__34754 = (i + (1));
i = G__34754;
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
var len__5749__auto___34755 = arguments.length;
var i__5750__auto___34756 = (0);
while(true){
if((i__5750__auto___34756 < len__5749__auto___34755)){
args__5755__auto__.push((arguments[i__5750__auto___34756]));

var G__34757 = (i__5750__auto___34756 + (1));
i__5750__auto___34756 = G__34757;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32593){
var map__32594 = p__32593;
var map__32594__$1 = cljs.core.__destructure_map(map__32594);
var opts = map__32594__$1;
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
var G__32596 = arguments.length;
switch (G__32596) {
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
var c__32476__auto___34759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_32688){
var state_val_32693 = (state_32688[(1)]);
if((state_val_32693 === (7))){
var inst_32663 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
var statearr_32711_34760 = state_32688__$1;
(statearr_32711_34760[(2)] = inst_32663);

(statearr_32711_34760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (1))){
var state_32688__$1 = state_32688;
var statearr_32713_34766 = state_32688__$1;
(statearr_32713_34766[(2)] = null);

(statearr_32713_34766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (4))){
var inst_32625 = (state_32688[(7)]);
var inst_32625__$1 = (state_32688[(2)]);
var inst_32636 = (inst_32625__$1 == null);
var state_32688__$1 = (function (){var statearr_32714 = state_32688;
(statearr_32714[(7)] = inst_32625__$1);

return statearr_32714;
})();
if(cljs.core.truth_(inst_32636)){
var statearr_32715_34767 = state_32688__$1;
(statearr_32715_34767[(1)] = (5));

} else {
var statearr_32716_34768 = state_32688__$1;
(statearr_32716_34768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (13))){
var state_32688__$1 = state_32688;
var statearr_32717_34769 = state_32688__$1;
(statearr_32717_34769[(2)] = null);

(statearr_32717_34769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (6))){
var inst_32625 = (state_32688[(7)]);
var state_32688__$1 = state_32688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32688__$1,(11),to,inst_32625);
} else {
if((state_val_32693 === (3))){
var inst_32670 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32688__$1,inst_32670);
} else {
if((state_val_32693 === (12))){
var state_32688__$1 = state_32688;
var statearr_32730_34770 = state_32688__$1;
(statearr_32730_34770[(2)] = null);

(statearr_32730_34770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (2))){
var state_32688__$1 = state_32688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32688__$1,(4),from);
} else {
if((state_val_32693 === (11))){
var inst_32656 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
if(cljs.core.truth_(inst_32656)){
var statearr_32731_34772 = state_32688__$1;
(statearr_32731_34772[(1)] = (12));

} else {
var statearr_32732_34773 = state_32688__$1;
(statearr_32732_34773[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (9))){
var state_32688__$1 = state_32688;
var statearr_32733_34774 = state_32688__$1;
(statearr_32733_34774[(2)] = null);

(statearr_32733_34774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (5))){
var state_32688__$1 = state_32688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32735_34775 = state_32688__$1;
(statearr_32735_34775[(1)] = (8));

} else {
var statearr_32736_34776 = state_32688__$1;
(statearr_32736_34776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (14))){
var inst_32661 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
var statearr_32737_34777 = state_32688__$1;
(statearr_32737_34777[(2)] = inst_32661);

(statearr_32737_34777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (10))){
var inst_32653 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
var statearr_32738_34778 = state_32688__$1;
(statearr_32738_34778[(2)] = inst_32653);

(statearr_32738_34778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (8))){
var inst_32650 = cljs.core.async.close_BANG_(to);
var state_32688__$1 = state_32688;
var statearr_32739_34779 = state_32688__$1;
(statearr_32739_34779[(2)] = inst_32650);

(statearr_32739_34779[(1)] = (10));


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
var statearr_32740 = [null,null,null,null,null,null,null,null];
(statearr_32740[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_32740[(1)] = (1));

return statearr_32740;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_32688){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32688);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32741){var ex__32399__auto__ = e32741;
var statearr_32742_34780 = state_32688;
(statearr_32742_34780[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32688[(4)]))){
var statearr_32743_34781 = state_32688;
(statearr_32743_34781[(1)] = cljs.core.first((state_32688[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34782 = state_32688;
state_32688 = G__34782;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_32688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_32688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_32744 = f__32477__auto__();
(statearr_32744[(6)] = c__32476__auto___34759);

return statearr_32744;
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
var process__$1 = (function (p__32745){
var vec__32746 = p__32745;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32746,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32746,(1),null);
var job = vec__32746;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32476__auto___34797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_32753){
var state_val_32754 = (state_32753[(1)]);
if((state_val_32754 === (1))){
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32753__$1,(2),res,v);
} else {
if((state_val_32754 === (2))){
var inst_32750 = (state_32753[(2)]);
var inst_32751 = cljs.core.async.close_BANG_(res);
var state_32753__$1 = (function (){var statearr_32755 = state_32753;
(statearr_32755[(7)] = inst_32750);

return statearr_32755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32753__$1,inst_32751);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1 = (function (state_32753){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32753);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32757){var ex__32399__auto__ = e32757;
var statearr_32758_34801 = state_32753;
(statearr_32758_34801[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32753[(4)]))){
var statearr_32759_34802 = state_32753;
(statearr_32759_34802[(1)] = cljs.core.first((state_32753[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34803 = state_32753;
state_32753 = G__34803;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = function(state_32753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1.call(this,state_32753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_32760 = f__32477__auto__();
(statearr_32760[(6)] = c__32476__auto___34797);

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
var n__5616__auto___34808 = n;
var __34809 = (0);
while(true){
if((__34809 < n__5616__auto___34808)){
var G__32765_34810 = type;
var G__32765_34811__$1 = (((G__32765_34810 instanceof cljs.core.Keyword))?G__32765_34810.fqn:null);
switch (G__32765_34811__$1) {
case "compute":
var c__32476__auto___34813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34809,c__32476__auto___34813,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async){
return (function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = ((function (__34809,c__32476__auto___34813,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async){
return (function (state_32778){
var state_val_32779 = (state_32778[(1)]);
if((state_val_32779 === (1))){
var state_32778__$1 = state_32778;
var statearr_32780_34814 = state_32778__$1;
(statearr_32780_34814[(2)] = null);

(statearr_32780_34814[(1)] = (2));


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
var statearr_32781_34818 = state_32778__$1;
(statearr_32781_34818[(1)] = (5));

} else {
var statearr_32782_34819 = state_32778__$1;
(statearr_32782_34819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (5))){
var state_32778__$1 = state_32778;
var statearr_32783_34820 = state_32778__$1;
(statearr_32783_34820[(2)] = null);

(statearr_32783_34820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (6))){
var state_32778__$1 = state_32778;
var statearr_32784_34824 = state_32778__$1;
(statearr_32784_34824[(2)] = null);

(statearr_32784_34824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (7))){
var inst_32774 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
var statearr_32785_34825 = state_32778__$1;
(statearr_32785_34825[(2)] = inst_32774);

(statearr_32785_34825[(1)] = (3));


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
});})(__34809,c__32476__auto___34813,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async))
;
return ((function (__34809,switch__32395__auto__,c__32476__auto___34813,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async){
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
var statearr_32788_34826 = state_32778;
(statearr_32788_34826[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32778[(4)]))){
var statearr_32789_34827 = state_32778;
(statearr_32789_34827[(1)] = cljs.core.first((state_32778[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34828 = state_32778;
state_32778 = G__34828;
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
;})(__34809,switch__32395__auto__,c__32476__auto___34813,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async))
})();
var state__32478__auto__ = (function (){var statearr_32790 = f__32477__auto__();
(statearr_32790[(6)] = c__32476__auto___34813);

return statearr_32790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
});})(__34809,c__32476__auto___34813,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async))
);


break;
case "async":
var c__32476__auto___34829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34809,c__32476__auto___34829,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async){
return (function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = ((function (__34809,c__32476__auto___34829,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async){
return (function (state_32803){
var state_val_32804 = (state_32803[(1)]);
if((state_val_32804 === (1))){
var state_32803__$1 = state_32803;
var statearr_32805_34830 = state_32803__$1;
(statearr_32805_34830[(2)] = null);

(statearr_32805_34830[(1)] = (2));


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
var statearr_32806_34831 = state_32803__$1;
(statearr_32806_34831[(1)] = (5));

} else {
var statearr_32807_34832 = state_32803__$1;
(statearr_32807_34832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (5))){
var state_32803__$1 = state_32803;
var statearr_32808_34833 = state_32803__$1;
(statearr_32808_34833[(2)] = null);

(statearr_32808_34833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (6))){
var state_32803__$1 = state_32803;
var statearr_32809_34834 = state_32803__$1;
(statearr_32809_34834[(2)] = null);

(statearr_32809_34834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (7))){
var inst_32799 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32810_34835 = state_32803__$1;
(statearr_32810_34835[(2)] = inst_32799);

(statearr_32810_34835[(1)] = (3));


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
});})(__34809,c__32476__auto___34829,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async))
;
return ((function (__34809,switch__32395__auto__,c__32476__auto___34829,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async){
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
var statearr_32813_34836 = state_32803;
(statearr_32813_34836[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32803[(4)]))){
var statearr_32814_34837 = state_32803;
(statearr_32814_34837[(1)] = cljs.core.first((state_32803[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34838 = state_32803;
state_32803 = G__34838;
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
;})(__34809,switch__32395__auto__,c__32476__auto___34829,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async))
})();
var state__32478__auto__ = (function (){var statearr_32815 = f__32477__auto__();
(statearr_32815[(6)] = c__32476__auto___34829);

return statearr_32815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
});})(__34809,c__32476__auto___34829,G__32765_34810,G__32765_34811__$1,n__5616__auto___34808,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32765_34811__$1)].join('')));

}

var G__34839 = (__34809 + (1));
__34809 = G__34839;
continue;
} else {
}
break;
}

var c__32476__auto___34840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_32837){
var state_val_32838 = (state_32837[(1)]);
if((state_val_32838 === (7))){
var inst_32833 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
var statearr_32839_34841 = state_32837__$1;
(statearr_32839_34841[(2)] = inst_32833);

(statearr_32839_34841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (1))){
var state_32837__$1 = state_32837;
var statearr_32840_34842 = state_32837__$1;
(statearr_32840_34842[(2)] = null);

(statearr_32840_34842[(1)] = (2));


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
var statearr_32842_34843 = state_32837__$1;
(statearr_32842_34843[(1)] = (5));

} else {
var statearr_32843_34844 = state_32837__$1;
(statearr_32843_34844[(1)] = (6));

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
var statearr_32846_34845 = state_32837__$1;
(statearr_32846_34845[(2)] = null);

(statearr_32846_34845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (5))){
var inst_32821 = cljs.core.async.close_BANG_(jobs);
var state_32837__$1 = state_32837;
var statearr_32847_34846 = state_32837__$1;
(statearr_32847_34846[(2)] = inst_32821);

(statearr_32847_34846[(1)] = (7));


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
}catch (e32853){var ex__32399__auto__ = e32853;
var statearr_32854_34848 = state_32837;
(statearr_32854_34848[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32837[(4)]))){
var statearr_32855_34849 = state_32837;
(statearr_32855_34849[(1)] = cljs.core.first((state_32837[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34850 = state_32837;
state_32837 = G__34850;
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
var state__32478__auto__ = (function (){var statearr_32856 = f__32477__auto__();
(statearr_32856[(6)] = c__32476__auto___34840);

return statearr_32856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));


var c__32476__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_32897){
var state_val_32898 = (state_32897[(1)]);
if((state_val_32898 === (7))){
var inst_32893 = (state_32897[(2)]);
var state_32897__$1 = state_32897;
var statearr_32900_34853 = state_32897__$1;
(statearr_32900_34853[(2)] = inst_32893);

(statearr_32900_34853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (20))){
var state_32897__$1 = state_32897;
var statearr_32901_34854 = state_32897__$1;
(statearr_32901_34854[(2)] = null);

(statearr_32901_34854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (1))){
var state_32897__$1 = state_32897;
var statearr_32906_34855 = state_32897__$1;
(statearr_32906_34855[(2)] = null);

(statearr_32906_34855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (4))){
var inst_32859 = (state_32897[(7)]);
var inst_32859__$1 = (state_32897[(2)]);
var inst_32860 = (inst_32859__$1 == null);
var state_32897__$1 = (function (){var statearr_32907 = state_32897;
(statearr_32907[(7)] = inst_32859__$1);

return statearr_32907;
})();
if(cljs.core.truth_(inst_32860)){
var statearr_32908_34856 = state_32897__$1;
(statearr_32908_34856[(1)] = (5));

} else {
var statearr_32909_34857 = state_32897__$1;
(statearr_32909_34857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (15))){
var inst_32872 = (state_32897[(8)]);
var state_32897__$1 = state_32897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32897__$1,(18),to,inst_32872);
} else {
if((state_val_32898 === (21))){
var inst_32888 = (state_32897[(2)]);
var state_32897__$1 = state_32897;
var statearr_32910_34858 = state_32897__$1;
(statearr_32910_34858[(2)] = inst_32888);

(statearr_32910_34858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (13))){
var inst_32890 = (state_32897[(2)]);
var state_32897__$1 = (function (){var statearr_32915 = state_32897;
(statearr_32915[(9)] = inst_32890);

return statearr_32915;
})();
var statearr_32916_34859 = state_32897__$1;
(statearr_32916_34859[(2)] = null);

(statearr_32916_34859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (6))){
var inst_32859 = (state_32897[(7)]);
var state_32897__$1 = state_32897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32897__$1,(11),inst_32859);
} else {
if((state_val_32898 === (17))){
var inst_32883 = (state_32897[(2)]);
var state_32897__$1 = state_32897;
if(cljs.core.truth_(inst_32883)){
var statearr_32917_34860 = state_32897__$1;
(statearr_32917_34860[(1)] = (19));

} else {
var statearr_32921_34861 = state_32897__$1;
(statearr_32921_34861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (3))){
var inst_32895 = (state_32897[(2)]);
var state_32897__$1 = state_32897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32897__$1,inst_32895);
} else {
if((state_val_32898 === (12))){
var inst_32869 = (state_32897[(10)]);
var state_32897__$1 = state_32897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32897__$1,(14),inst_32869);
} else {
if((state_val_32898 === (2))){
var state_32897__$1 = state_32897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32897__$1,(4),results);
} else {
if((state_val_32898 === (19))){
var state_32897__$1 = state_32897;
var statearr_32922_34863 = state_32897__$1;
(statearr_32922_34863[(2)] = null);

(statearr_32922_34863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (11))){
var inst_32869 = (state_32897[(2)]);
var state_32897__$1 = (function (){var statearr_32923 = state_32897;
(statearr_32923[(10)] = inst_32869);

return statearr_32923;
})();
var statearr_32924_34864 = state_32897__$1;
(statearr_32924_34864[(2)] = null);

(statearr_32924_34864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (9))){
var state_32897__$1 = state_32897;
var statearr_32925_34865 = state_32897__$1;
(statearr_32925_34865[(2)] = null);

(statearr_32925_34865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (5))){
var state_32897__$1 = state_32897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32926_34868 = state_32897__$1;
(statearr_32926_34868[(1)] = (8));

} else {
var statearr_32929_34869 = state_32897__$1;
(statearr_32929_34869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (14))){
var inst_32872 = (state_32897[(8)]);
var inst_32877 = (state_32897[(11)]);
var inst_32872__$1 = (state_32897[(2)]);
var inst_32873 = (inst_32872__$1 == null);
var inst_32877__$1 = cljs.core.not(inst_32873);
var state_32897__$1 = (function (){var statearr_32931 = state_32897;
(statearr_32931[(8)] = inst_32872__$1);

(statearr_32931[(11)] = inst_32877__$1);

return statearr_32931;
})();
if(inst_32877__$1){
var statearr_32932_34870 = state_32897__$1;
(statearr_32932_34870[(1)] = (15));

} else {
var statearr_32933_34871 = state_32897__$1;
(statearr_32933_34871[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (16))){
var inst_32877 = (state_32897[(11)]);
var state_32897__$1 = state_32897;
var statearr_32934_34872 = state_32897__$1;
(statearr_32934_34872[(2)] = inst_32877);

(statearr_32934_34872[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (10))){
var inst_32866 = (state_32897[(2)]);
var state_32897__$1 = state_32897;
var statearr_32935_34874 = state_32897__$1;
(statearr_32935_34874[(2)] = inst_32866);

(statearr_32935_34874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (18))){
var inst_32880 = (state_32897[(2)]);
var state_32897__$1 = state_32897;
var statearr_32936_34875 = state_32897__$1;
(statearr_32936_34875[(2)] = inst_32880);

(statearr_32936_34875[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32898 === (8))){
var inst_32863 = cljs.core.async.close_BANG_(to);
var state_32897__$1 = state_32897;
var statearr_32937_34876 = state_32897__$1;
(statearr_32937_34876[(2)] = inst_32863);

(statearr_32937_34876[(1)] = (10));


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
var statearr_32938 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32938[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__);

(statearr_32938[(1)] = (1));

return statearr_32938;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1 = (function (state_32897){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32897);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32939){var ex__32399__auto__ = e32939;
var statearr_32940_34877 = state_32897;
(statearr_32940_34877[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32897[(4)]))){
var statearr_32941_34878 = state_32897;
(statearr_32941_34878[(1)] = cljs.core.first((state_32897[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34879 = state_32897;
state_32897 = G__34879;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = function(state_32897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1.call(this,state_32897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_32942 = f__32477__auto__();
(statearr_32942[(6)] = c__32476__auto__);

return statearr_32942;
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
var G__32944 = arguments.length;
switch (G__32944) {
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
var G__32946 = arguments.length;
switch (G__32946) {
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
var G__32948 = arguments.length;
switch (G__32948) {
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
var c__32476__auto___34886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_32974){
var state_val_32975 = (state_32974[(1)]);
if((state_val_32975 === (7))){
var inst_32970 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_32976_34887 = state_32974__$1;
(statearr_32976_34887[(2)] = inst_32970);

(statearr_32976_34887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (1))){
var state_32974__$1 = state_32974;
var statearr_32977_34888 = state_32974__$1;
(statearr_32977_34888[(2)] = null);

(statearr_32977_34888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (4))){
var inst_32951 = (state_32974[(7)]);
var inst_32951__$1 = (state_32974[(2)]);
var inst_32952 = (inst_32951__$1 == null);
var state_32974__$1 = (function (){var statearr_32978 = state_32974;
(statearr_32978[(7)] = inst_32951__$1);

return statearr_32978;
})();
if(cljs.core.truth_(inst_32952)){
var statearr_32979_34889 = state_32974__$1;
(statearr_32979_34889[(1)] = (5));

} else {
var statearr_32980_34890 = state_32974__$1;
(statearr_32980_34890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (13))){
var state_32974__$1 = state_32974;
var statearr_32981_34891 = state_32974__$1;
(statearr_32981_34891[(2)] = null);

(statearr_32981_34891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (6))){
var inst_32951 = (state_32974[(7)]);
var inst_32957 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32951) : p.call(null,inst_32951));
var state_32974__$1 = state_32974;
if(cljs.core.truth_(inst_32957)){
var statearr_32982_34892 = state_32974__$1;
(statearr_32982_34892[(1)] = (9));

} else {
var statearr_32983_34893 = state_32974__$1;
(statearr_32983_34893[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (3))){
var inst_32972 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32974__$1,inst_32972);
} else {
if((state_val_32975 === (12))){
var state_32974__$1 = state_32974;
var statearr_32984_34894 = state_32974__$1;
(statearr_32984_34894[(2)] = null);

(statearr_32984_34894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (2))){
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32974__$1,(4),ch);
} else {
if((state_val_32975 === (11))){
var inst_32951 = (state_32974[(7)]);
var inst_32961 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32974__$1,(8),inst_32961,inst_32951);
} else {
if((state_val_32975 === (9))){
var state_32974__$1 = state_32974;
var statearr_32986_34896 = state_32974__$1;
(statearr_32986_34896[(2)] = tc);

(statearr_32986_34896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (5))){
var inst_32954 = cljs.core.async.close_BANG_(tc);
var inst_32955 = cljs.core.async.close_BANG_(fc);
var state_32974__$1 = (function (){var statearr_32987 = state_32974;
(statearr_32987[(8)] = inst_32954);

return statearr_32987;
})();
var statearr_32988_34897 = state_32974__$1;
(statearr_32988_34897[(2)] = inst_32955);

(statearr_32988_34897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (14))){
var inst_32968 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_32990_34898 = state_32974__$1;
(statearr_32990_34898[(2)] = inst_32968);

(statearr_32990_34898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (10))){
var state_32974__$1 = state_32974;
var statearr_32991_34899 = state_32974__$1;
(statearr_32991_34899[(2)] = fc);

(statearr_32991_34899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (8))){
var inst_32963 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
if(cljs.core.truth_(inst_32963)){
var statearr_32993_34900 = state_32974__$1;
(statearr_32993_34900[(1)] = (12));

} else {
var statearr_32994_34901 = state_32974__$1;
(statearr_32994_34901[(1)] = (13));

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
var statearr_32995 = [null,null,null,null,null,null,null,null,null];
(statearr_32995[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_32995[(1)] = (1));

return statearr_32995;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_32974){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32974);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32996){var ex__32399__auto__ = e32996;
var statearr_32997_34902 = state_32974;
(statearr_32997_34902[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32974[(4)]))){
var statearr_32998_34903 = state_32974;
(statearr_32998_34903[(1)] = cljs.core.first((state_32974[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34904 = state_32974;
state_32974 = G__34904;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_32974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_32974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_32999 = f__32477__auto__();
(statearr_32999[(6)] = c__32476__auto___34886);

return statearr_32999;
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
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33021){
var state_val_33022 = (state_33021[(1)]);
if((state_val_33022 === (7))){
var inst_33017 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
var statearr_33023_34907 = state_33021__$1;
(statearr_33023_34907[(2)] = inst_33017);

(statearr_33023_34907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (1))){
var inst_33000 = init;
var inst_33001 = inst_33000;
var state_33021__$1 = (function (){var statearr_33024 = state_33021;
(statearr_33024[(7)] = inst_33001);

return statearr_33024;
})();
var statearr_33025_34908 = state_33021__$1;
(statearr_33025_34908[(2)] = null);

(statearr_33025_34908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (4))){
var inst_33004 = (state_33021[(8)]);
var inst_33004__$1 = (state_33021[(2)]);
var inst_33005 = (inst_33004__$1 == null);
var state_33021__$1 = (function (){var statearr_33026 = state_33021;
(statearr_33026[(8)] = inst_33004__$1);

return statearr_33026;
})();
if(cljs.core.truth_(inst_33005)){
var statearr_33027_34909 = state_33021__$1;
(statearr_33027_34909[(1)] = (5));

} else {
var statearr_33028_34910 = state_33021__$1;
(statearr_33028_34910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (6))){
var inst_33001 = (state_33021[(7)]);
var inst_33004 = (state_33021[(8)]);
var inst_33008 = (state_33021[(9)]);
var inst_33008__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33001,inst_33004) : f.call(null,inst_33001,inst_33004));
var inst_33009 = cljs.core.reduced_QMARK_(inst_33008__$1);
var state_33021__$1 = (function (){var statearr_33029 = state_33021;
(statearr_33029[(9)] = inst_33008__$1);

return statearr_33029;
})();
if(inst_33009){
var statearr_33030_34911 = state_33021__$1;
(statearr_33030_34911[(1)] = (8));

} else {
var statearr_33031_34912 = state_33021__$1;
(statearr_33031_34912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (3))){
var inst_33019 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33021__$1,inst_33019);
} else {
if((state_val_33022 === (2))){
var state_33021__$1 = state_33021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33021__$1,(4),ch);
} else {
if((state_val_33022 === (9))){
var inst_33008 = (state_33021[(9)]);
var inst_33001 = inst_33008;
var state_33021__$1 = (function (){var statearr_33032 = state_33021;
(statearr_33032[(7)] = inst_33001);

return statearr_33032;
})();
var statearr_33033_34913 = state_33021__$1;
(statearr_33033_34913[(2)] = null);

(statearr_33033_34913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (5))){
var inst_33001 = (state_33021[(7)]);
var state_33021__$1 = state_33021;
var statearr_33034_34914 = state_33021__$1;
(statearr_33034_34914[(2)] = inst_33001);

(statearr_33034_34914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (10))){
var inst_33015 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
var statearr_33035_34915 = state_33021__$1;
(statearr_33035_34915[(2)] = inst_33015);

(statearr_33035_34915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (8))){
var inst_33008 = (state_33021[(9)]);
var inst_33011 = cljs.core.deref(inst_33008);
var state_33021__$1 = state_33021;
var statearr_33036_34916 = state_33021__$1;
(statearr_33036_34916[(2)] = inst_33011);

(statearr_33036_34916[(1)] = (10));


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
var statearr_33037 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33037[(0)] = cljs$core$async$reduce_$_state_machine__32396__auto__);

(statearr_33037[(1)] = (1));

return statearr_33037;
});
var cljs$core$async$reduce_$_state_machine__32396__auto____1 = (function (state_33021){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33021);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33038){var ex__32399__auto__ = e33038;
var statearr_33039_34917 = state_33021;
(statearr_33039_34917[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33021[(4)]))){
var statearr_33040_34918 = state_33021;
(statearr_33040_34918[(1)] = cljs.core.first((state_33021[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34919 = state_33021;
state_33021 = G__34919;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32396__auto__ = function(state_33021){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32396__auto____1.call(this,state_33021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32396__auto____0;
cljs$core$async$reduce_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32396__auto____1;
return cljs$core$async$reduce_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33041 = f__32477__auto__();
(statearr_33041[(6)] = c__32476__auto__);

return statearr_33041;
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
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33047){
var state_val_33048 = (state_33047[(1)]);
if((state_val_33048 === (1))){
var inst_33042 = cljs.core.async.reduce(f__$1,init,ch);
var state_33047__$1 = state_33047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33047__$1,(2),inst_33042);
} else {
if((state_val_33048 === (2))){
var inst_33044 = (state_33047[(2)]);
var inst_33045 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33044) : f__$1.call(null,inst_33044));
var state_33047__$1 = state_33047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33047__$1,inst_33045);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32396__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32396__auto____0 = (function (){
var statearr_33055 = [null,null,null,null,null,null,null];
(statearr_33055[(0)] = cljs$core$async$transduce_$_state_machine__32396__auto__);

(statearr_33055[(1)] = (1));

return statearr_33055;
});
var cljs$core$async$transduce_$_state_machine__32396__auto____1 = (function (state_33047){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33047);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33058){var ex__32399__auto__ = e33058;
var statearr_33059_34922 = state_33047;
(statearr_33059_34922[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33047[(4)]))){
var statearr_33060_34923 = state_33047;
(statearr_33060_34923[(1)] = cljs.core.first((state_33047[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34924 = state_33047;
state_33047 = G__34924;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32396__auto__ = function(state_33047){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32396__auto____1.call(this,state_33047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32396__auto____0;
cljs$core$async$transduce_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32396__auto____1;
return cljs$core$async$transduce_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33061 = f__32477__auto__();
(statearr_33061[(6)] = c__32476__auto__);

return statearr_33061;
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
var G__33067 = arguments.length;
switch (G__33067) {
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
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33104){
var state_val_33105 = (state_33104[(1)]);
if((state_val_33105 === (7))){
var inst_33086 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
var statearr_33106_34927 = state_33104__$1;
(statearr_33106_34927[(2)] = inst_33086);

(statearr_33106_34927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (1))){
var inst_33073 = cljs.core.seq(coll);
var inst_33074 = inst_33073;
var state_33104__$1 = (function (){var statearr_33107 = state_33104;
(statearr_33107[(7)] = inst_33074);

return statearr_33107;
})();
var statearr_33108_34928 = state_33104__$1;
(statearr_33108_34928[(2)] = null);

(statearr_33108_34928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (4))){
var inst_33074 = (state_33104[(7)]);
var inst_33084 = cljs.core.first(inst_33074);
var state_33104__$1 = state_33104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33104__$1,(7),ch,inst_33084);
} else {
if((state_val_33105 === (13))){
var inst_33098 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
var statearr_33109_34929 = state_33104__$1;
(statearr_33109_34929[(2)] = inst_33098);

(statearr_33109_34929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (6))){
var inst_33089 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
if(cljs.core.truth_(inst_33089)){
var statearr_33110_34930 = state_33104__$1;
(statearr_33110_34930[(1)] = (8));

} else {
var statearr_33111_34931 = state_33104__$1;
(statearr_33111_34931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (3))){
var inst_33102 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33104__$1,inst_33102);
} else {
if((state_val_33105 === (12))){
var state_33104__$1 = state_33104;
var statearr_33112_34932 = state_33104__$1;
(statearr_33112_34932[(2)] = null);

(statearr_33112_34932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (2))){
var inst_33074 = (state_33104[(7)]);
var state_33104__$1 = state_33104;
if(cljs.core.truth_(inst_33074)){
var statearr_33113_34933 = state_33104__$1;
(statearr_33113_34933[(1)] = (4));

} else {
var statearr_33114_34934 = state_33104__$1;
(statearr_33114_34934[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (11))){
var inst_33095 = cljs.core.async.close_BANG_(ch);
var state_33104__$1 = state_33104;
var statearr_33115_34935 = state_33104__$1;
(statearr_33115_34935[(2)] = inst_33095);

(statearr_33115_34935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (9))){
var state_33104__$1 = state_33104;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33116_34936 = state_33104__$1;
(statearr_33116_34936[(1)] = (11));

} else {
var statearr_33117_34937 = state_33104__$1;
(statearr_33117_34937[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (5))){
var inst_33074 = (state_33104[(7)]);
var state_33104__$1 = state_33104;
var statearr_33118_34938 = state_33104__$1;
(statearr_33118_34938[(2)] = inst_33074);

(statearr_33118_34938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (10))){
var inst_33100 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
var statearr_33119_34939 = state_33104__$1;
(statearr_33119_34939[(2)] = inst_33100);

(statearr_33119_34939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (8))){
var inst_33074 = (state_33104[(7)]);
var inst_33091 = cljs.core.next(inst_33074);
var inst_33074__$1 = inst_33091;
var state_33104__$1 = (function (){var statearr_33120 = state_33104;
(statearr_33120[(7)] = inst_33074__$1);

return statearr_33120;
})();
var statearr_33121_34940 = state_33104__$1;
(statearr_33121_34940[(2)] = null);

(statearr_33121_34940[(1)] = (2));


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
var statearr_33122 = [null,null,null,null,null,null,null,null];
(statearr_33122[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_33122[(1)] = (1));

return statearr_33122;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33104){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33104);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33123){var ex__32399__auto__ = e33123;
var statearr_33124_34941 = state_33104;
(statearr_33124_34941[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33104[(4)]))){
var statearr_33125_34942 = state_33104;
(statearr_33125_34942[(1)] = cljs.core.first((state_33104[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34943 = state_33104;
state_33104 = G__34943;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33126 = f__32477__auto__();
(statearr_33126[(6)] = c__32476__auto__);

return statearr_33126;
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
var G__33132 = arguments.length;
switch (G__33132) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34945 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34945(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34946 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34946(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34948 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34948(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34949 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34949(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33142 = (function (ch,cs,meta33143){
this.ch = ch;
this.cs = cs;
this.meta33143 = meta33143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33144,meta33143__$1){
var self__ = this;
var _33144__$1 = this;
return (new cljs.core.async.t_cljs$core$async33142(self__.ch,self__.cs,meta33143__$1));
}));

(cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33144){
var self__ = this;
var _33144__$1 = this;
return self__.meta33143;
}));

(cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33143","meta33143",1383972894,null)], null);
}));

(cljs.core.async.t_cljs$core$async33142.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33142");

(cljs.core.async.t_cljs$core$async33142.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33142");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33142.
 */
cljs.core.async.__GT_t_cljs$core$async33142 = (function cljs$core$async$__GT_t_cljs$core$async33142(ch,cs,meta33143){
return (new cljs.core.async.t_cljs$core$async33142(ch,cs,meta33143));
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
var m = (new cljs.core.async.t_cljs$core$async33142(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32476__auto___34952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33279){
var state_val_33280 = (state_33279[(1)]);
if((state_val_33280 === (7))){
var inst_33275 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33282_34953 = state_33279__$1;
(statearr_33282_34953[(2)] = inst_33275);

(statearr_33282_34953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (20))){
var inst_33178 = (state_33279[(7)]);
var inst_33190 = cljs.core.first(inst_33178);
var inst_33191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33190,(0),null);
var inst_33192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33190,(1),null);
var state_33279__$1 = (function (){var statearr_33284 = state_33279;
(statearr_33284[(8)] = inst_33191);

return statearr_33284;
})();
if(cljs.core.truth_(inst_33192)){
var statearr_33285_34954 = state_33279__$1;
(statearr_33285_34954[(1)] = (22));

} else {
var statearr_33286_34955 = state_33279__$1;
(statearr_33286_34955[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (27))){
var inst_33220 = (state_33279[(9)]);
var inst_33222 = (state_33279[(10)]);
var inst_33227 = (state_33279[(11)]);
var inst_33147 = (state_33279[(12)]);
var inst_33227__$1 = cljs.core._nth(inst_33220,inst_33222);
var inst_33228 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33227__$1,inst_33147,done);
var state_33279__$1 = (function (){var statearr_33287 = state_33279;
(statearr_33287[(11)] = inst_33227__$1);

return statearr_33287;
})();
if(cljs.core.truth_(inst_33228)){
var statearr_33288_34956 = state_33279__$1;
(statearr_33288_34956[(1)] = (30));

} else {
var statearr_33289_34957 = state_33279__$1;
(statearr_33289_34957[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (1))){
var state_33279__$1 = state_33279;
var statearr_33291_34958 = state_33279__$1;
(statearr_33291_34958[(2)] = null);

(statearr_33291_34958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (24))){
var inst_33178 = (state_33279[(7)]);
var inst_33197 = (state_33279[(2)]);
var inst_33198 = cljs.core.next(inst_33178);
var inst_33156 = inst_33198;
var inst_33157 = null;
var inst_33158 = (0);
var inst_33159 = (0);
var state_33279__$1 = (function (){var statearr_33292 = state_33279;
(statearr_33292[(13)] = inst_33197);

(statearr_33292[(14)] = inst_33156);

(statearr_33292[(15)] = inst_33157);

(statearr_33292[(16)] = inst_33158);

(statearr_33292[(17)] = inst_33159);

return statearr_33292;
})();
var statearr_33293_34959 = state_33279__$1;
(statearr_33293_34959[(2)] = null);

(statearr_33293_34959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (39))){
var state_33279__$1 = state_33279;
var statearr_33297_34960 = state_33279__$1;
(statearr_33297_34960[(2)] = null);

(statearr_33297_34960[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (4))){
var inst_33147 = (state_33279[(12)]);
var inst_33147__$1 = (state_33279[(2)]);
var inst_33148 = (inst_33147__$1 == null);
var state_33279__$1 = (function (){var statearr_33298 = state_33279;
(statearr_33298[(12)] = inst_33147__$1);

return statearr_33298;
})();
if(cljs.core.truth_(inst_33148)){
var statearr_33301_34961 = state_33279__$1;
(statearr_33301_34961[(1)] = (5));

} else {
var statearr_33302_34962 = state_33279__$1;
(statearr_33302_34962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (15))){
var inst_33159 = (state_33279[(17)]);
var inst_33156 = (state_33279[(14)]);
var inst_33157 = (state_33279[(15)]);
var inst_33158 = (state_33279[(16)]);
var inst_33174 = (state_33279[(2)]);
var inst_33175 = (inst_33159 + (1));
var tmp33294 = inst_33158;
var tmp33295 = inst_33157;
var tmp33296 = inst_33156;
var inst_33156__$1 = tmp33296;
var inst_33157__$1 = tmp33295;
var inst_33158__$1 = tmp33294;
var inst_33159__$1 = inst_33175;
var state_33279__$1 = (function (){var statearr_33303 = state_33279;
(statearr_33303[(18)] = inst_33174);

(statearr_33303[(14)] = inst_33156__$1);

(statearr_33303[(15)] = inst_33157__$1);

(statearr_33303[(16)] = inst_33158__$1);

(statearr_33303[(17)] = inst_33159__$1);

return statearr_33303;
})();
var statearr_33306_34964 = state_33279__$1;
(statearr_33306_34964[(2)] = null);

(statearr_33306_34964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (21))){
var inst_33201 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33310_34965 = state_33279__$1;
(statearr_33310_34965[(2)] = inst_33201);

(statearr_33310_34965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (31))){
var inst_33227 = (state_33279[(11)]);
var inst_33231 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33227);
var state_33279__$1 = state_33279;
var statearr_33311_34966 = state_33279__$1;
(statearr_33311_34966[(2)] = inst_33231);

(statearr_33311_34966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (32))){
var inst_33222 = (state_33279[(10)]);
var inst_33219 = (state_33279[(19)]);
var inst_33220 = (state_33279[(9)]);
var inst_33221 = (state_33279[(20)]);
var inst_33233 = (state_33279[(2)]);
var inst_33234 = (inst_33222 + (1));
var tmp33307 = inst_33221;
var tmp33308 = inst_33219;
var tmp33309 = inst_33220;
var inst_33219__$1 = tmp33308;
var inst_33220__$1 = tmp33309;
var inst_33221__$1 = tmp33307;
var inst_33222__$1 = inst_33234;
var state_33279__$1 = (function (){var statearr_33312 = state_33279;
(statearr_33312[(21)] = inst_33233);

(statearr_33312[(19)] = inst_33219__$1);

(statearr_33312[(9)] = inst_33220__$1);

(statearr_33312[(20)] = inst_33221__$1);

(statearr_33312[(10)] = inst_33222__$1);

return statearr_33312;
})();
var statearr_33313_34967 = state_33279__$1;
(statearr_33313_34967[(2)] = null);

(statearr_33313_34967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (40))){
var inst_33246 = (state_33279[(22)]);
var inst_33250 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33246);
var state_33279__$1 = state_33279;
var statearr_33314_34968 = state_33279__$1;
(statearr_33314_34968[(2)] = inst_33250);

(statearr_33314_34968[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (33))){
var inst_33237 = (state_33279[(23)]);
var inst_33239 = cljs.core.chunked_seq_QMARK_(inst_33237);
var state_33279__$1 = state_33279;
if(inst_33239){
var statearr_33315_34969 = state_33279__$1;
(statearr_33315_34969[(1)] = (36));

} else {
var statearr_33316_34970 = state_33279__$1;
(statearr_33316_34970[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (13))){
var inst_33168 = (state_33279[(24)]);
var inst_33171 = cljs.core.async.close_BANG_(inst_33168);
var state_33279__$1 = state_33279;
var statearr_33317_34971 = state_33279__$1;
(statearr_33317_34971[(2)] = inst_33171);

(statearr_33317_34971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (22))){
var inst_33191 = (state_33279[(8)]);
var inst_33194 = cljs.core.async.close_BANG_(inst_33191);
var state_33279__$1 = state_33279;
var statearr_33318_34972 = state_33279__$1;
(statearr_33318_34972[(2)] = inst_33194);

(statearr_33318_34972[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (36))){
var inst_33237 = (state_33279[(23)]);
var inst_33241 = cljs.core.chunk_first(inst_33237);
var inst_33242 = cljs.core.chunk_rest(inst_33237);
var inst_33243 = cljs.core.count(inst_33241);
var inst_33219 = inst_33242;
var inst_33220 = inst_33241;
var inst_33221 = inst_33243;
var inst_33222 = (0);
var state_33279__$1 = (function (){var statearr_33319 = state_33279;
(statearr_33319[(19)] = inst_33219);

(statearr_33319[(9)] = inst_33220);

(statearr_33319[(20)] = inst_33221);

(statearr_33319[(10)] = inst_33222);

return statearr_33319;
})();
var statearr_33320_34973 = state_33279__$1;
(statearr_33320_34973[(2)] = null);

(statearr_33320_34973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (41))){
var inst_33237 = (state_33279[(23)]);
var inst_33252 = (state_33279[(2)]);
var inst_33253 = cljs.core.next(inst_33237);
var inst_33219 = inst_33253;
var inst_33220 = null;
var inst_33221 = (0);
var inst_33222 = (0);
var state_33279__$1 = (function (){var statearr_33321 = state_33279;
(statearr_33321[(25)] = inst_33252);

(statearr_33321[(19)] = inst_33219);

(statearr_33321[(9)] = inst_33220);

(statearr_33321[(20)] = inst_33221);

(statearr_33321[(10)] = inst_33222);

return statearr_33321;
})();
var statearr_33322_34974 = state_33279__$1;
(statearr_33322_34974[(2)] = null);

(statearr_33322_34974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (43))){
var state_33279__$1 = state_33279;
var statearr_33323_34975 = state_33279__$1;
(statearr_33323_34975[(2)] = null);

(statearr_33323_34975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (29))){
var inst_33263 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33324_34976 = state_33279__$1;
(statearr_33324_34976[(2)] = inst_33263);

(statearr_33324_34976[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (44))){
var inst_33272 = (state_33279[(2)]);
var state_33279__$1 = (function (){var statearr_33325 = state_33279;
(statearr_33325[(26)] = inst_33272);

return statearr_33325;
})();
var statearr_33326_34977 = state_33279__$1;
(statearr_33326_34977[(2)] = null);

(statearr_33326_34977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (6))){
var inst_33211 = (state_33279[(27)]);
var inst_33210 = cljs.core.deref(cs);
var inst_33211__$1 = cljs.core.keys(inst_33210);
var inst_33212 = cljs.core.count(inst_33211__$1);
var inst_33213 = cljs.core.reset_BANG_(dctr,inst_33212);
var inst_33218 = cljs.core.seq(inst_33211__$1);
var inst_33219 = inst_33218;
var inst_33220 = null;
var inst_33221 = (0);
var inst_33222 = (0);
var state_33279__$1 = (function (){var statearr_33327 = state_33279;
(statearr_33327[(27)] = inst_33211__$1);

(statearr_33327[(28)] = inst_33213);

(statearr_33327[(19)] = inst_33219);

(statearr_33327[(9)] = inst_33220);

(statearr_33327[(20)] = inst_33221);

(statearr_33327[(10)] = inst_33222);

return statearr_33327;
})();
var statearr_33328_34978 = state_33279__$1;
(statearr_33328_34978[(2)] = null);

(statearr_33328_34978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (28))){
var inst_33219 = (state_33279[(19)]);
var inst_33237 = (state_33279[(23)]);
var inst_33237__$1 = cljs.core.seq(inst_33219);
var state_33279__$1 = (function (){var statearr_33329 = state_33279;
(statearr_33329[(23)] = inst_33237__$1);

return statearr_33329;
})();
if(inst_33237__$1){
var statearr_33330_34979 = state_33279__$1;
(statearr_33330_34979[(1)] = (33));

} else {
var statearr_33331_34980 = state_33279__$1;
(statearr_33331_34980[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (25))){
var inst_33222 = (state_33279[(10)]);
var inst_33221 = (state_33279[(20)]);
var inst_33224 = (inst_33222 < inst_33221);
var inst_33225 = inst_33224;
var state_33279__$1 = state_33279;
if(cljs.core.truth_(inst_33225)){
var statearr_33332_34981 = state_33279__$1;
(statearr_33332_34981[(1)] = (27));

} else {
var statearr_33333_34982 = state_33279__$1;
(statearr_33333_34982[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (34))){
var state_33279__$1 = state_33279;
var statearr_33334_34983 = state_33279__$1;
(statearr_33334_34983[(2)] = null);

(statearr_33334_34983[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (17))){
var state_33279__$1 = state_33279;
var statearr_33335_34984 = state_33279__$1;
(statearr_33335_34984[(2)] = null);

(statearr_33335_34984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (3))){
var inst_33277 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33279__$1,inst_33277);
} else {
if((state_val_33280 === (12))){
var inst_33206 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33336_34985 = state_33279__$1;
(statearr_33336_34985[(2)] = inst_33206);

(statearr_33336_34985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (2))){
var state_33279__$1 = state_33279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33279__$1,(4),ch);
} else {
if((state_val_33280 === (23))){
var state_33279__$1 = state_33279;
var statearr_33337_34986 = state_33279__$1;
(statearr_33337_34986[(2)] = null);

(statearr_33337_34986[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (35))){
var inst_33261 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33338_34987 = state_33279__$1;
(statearr_33338_34987[(2)] = inst_33261);

(statearr_33338_34987[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (19))){
var inst_33178 = (state_33279[(7)]);
var inst_33182 = cljs.core.chunk_first(inst_33178);
var inst_33183 = cljs.core.chunk_rest(inst_33178);
var inst_33184 = cljs.core.count(inst_33182);
var inst_33156 = inst_33183;
var inst_33157 = inst_33182;
var inst_33158 = inst_33184;
var inst_33159 = (0);
var state_33279__$1 = (function (){var statearr_33339 = state_33279;
(statearr_33339[(14)] = inst_33156);

(statearr_33339[(15)] = inst_33157);

(statearr_33339[(16)] = inst_33158);

(statearr_33339[(17)] = inst_33159);

return statearr_33339;
})();
var statearr_33340_34988 = state_33279__$1;
(statearr_33340_34988[(2)] = null);

(statearr_33340_34988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (11))){
var inst_33156 = (state_33279[(14)]);
var inst_33178 = (state_33279[(7)]);
var inst_33178__$1 = cljs.core.seq(inst_33156);
var state_33279__$1 = (function (){var statearr_33341 = state_33279;
(statearr_33341[(7)] = inst_33178__$1);

return statearr_33341;
})();
if(inst_33178__$1){
var statearr_33342_34992 = state_33279__$1;
(statearr_33342_34992[(1)] = (16));

} else {
var statearr_33343_34993 = state_33279__$1;
(statearr_33343_34993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (9))){
var inst_33208 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33344_34994 = state_33279__$1;
(statearr_33344_34994[(2)] = inst_33208);

(statearr_33344_34994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (5))){
var inst_33154 = cljs.core.deref(cs);
var inst_33155 = cljs.core.seq(inst_33154);
var inst_33156 = inst_33155;
var inst_33157 = null;
var inst_33158 = (0);
var inst_33159 = (0);
var state_33279__$1 = (function (){var statearr_33345 = state_33279;
(statearr_33345[(14)] = inst_33156);

(statearr_33345[(15)] = inst_33157);

(statearr_33345[(16)] = inst_33158);

(statearr_33345[(17)] = inst_33159);

return statearr_33345;
})();
var statearr_33346_34995 = state_33279__$1;
(statearr_33346_34995[(2)] = null);

(statearr_33346_34995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (14))){
var state_33279__$1 = state_33279;
var statearr_33347_34996 = state_33279__$1;
(statearr_33347_34996[(2)] = null);

(statearr_33347_34996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (45))){
var inst_33269 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33348_34997 = state_33279__$1;
(statearr_33348_34997[(2)] = inst_33269);

(statearr_33348_34997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (26))){
var inst_33211 = (state_33279[(27)]);
var inst_33265 = (state_33279[(2)]);
var inst_33266 = cljs.core.seq(inst_33211);
var state_33279__$1 = (function (){var statearr_33349 = state_33279;
(statearr_33349[(29)] = inst_33265);

return statearr_33349;
})();
if(inst_33266){
var statearr_33350_34998 = state_33279__$1;
(statearr_33350_34998[(1)] = (42));

} else {
var statearr_33351_34999 = state_33279__$1;
(statearr_33351_34999[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (16))){
var inst_33178 = (state_33279[(7)]);
var inst_33180 = cljs.core.chunked_seq_QMARK_(inst_33178);
var state_33279__$1 = state_33279;
if(inst_33180){
var statearr_33352_35001 = state_33279__$1;
(statearr_33352_35001[(1)] = (19));

} else {
var statearr_33355_35002 = state_33279__$1;
(statearr_33355_35002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (38))){
var inst_33258 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33356_35004 = state_33279__$1;
(statearr_33356_35004[(2)] = inst_33258);

(statearr_33356_35004[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (30))){
var state_33279__$1 = state_33279;
var statearr_33359_35005 = state_33279__$1;
(statearr_33359_35005[(2)] = null);

(statearr_33359_35005[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (10))){
var inst_33157 = (state_33279[(15)]);
var inst_33159 = (state_33279[(17)]);
var inst_33167 = cljs.core._nth(inst_33157,inst_33159);
var inst_33168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33167,(0),null);
var inst_33169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33167,(1),null);
var state_33279__$1 = (function (){var statearr_33363 = state_33279;
(statearr_33363[(24)] = inst_33168);

return statearr_33363;
})();
if(cljs.core.truth_(inst_33169)){
var statearr_33365_35006 = state_33279__$1;
(statearr_33365_35006[(1)] = (13));

} else {
var statearr_33366_35007 = state_33279__$1;
(statearr_33366_35007[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (18))){
var inst_33204 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33367_35008 = state_33279__$1;
(statearr_33367_35008[(2)] = inst_33204);

(statearr_33367_35008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (42))){
var state_33279__$1 = state_33279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33279__$1,(45),dchan);
} else {
if((state_val_33280 === (37))){
var inst_33237 = (state_33279[(23)]);
var inst_33246 = (state_33279[(22)]);
var inst_33147 = (state_33279[(12)]);
var inst_33246__$1 = cljs.core.first(inst_33237);
var inst_33247 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33246__$1,inst_33147,done);
var state_33279__$1 = (function (){var statearr_33368 = state_33279;
(statearr_33368[(22)] = inst_33246__$1);

return statearr_33368;
})();
if(cljs.core.truth_(inst_33247)){
var statearr_33369_35009 = state_33279__$1;
(statearr_33369_35009[(1)] = (39));

} else {
var statearr_33370_35010 = state_33279__$1;
(statearr_33370_35010[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (8))){
var inst_33159 = (state_33279[(17)]);
var inst_33158 = (state_33279[(16)]);
var inst_33161 = (inst_33159 < inst_33158);
var inst_33162 = inst_33161;
var state_33279__$1 = state_33279;
if(cljs.core.truth_(inst_33162)){
var statearr_33371_35011 = state_33279__$1;
(statearr_33371_35011[(1)] = (10));

} else {
var statearr_33372_35012 = state_33279__$1;
(statearr_33372_35012[(1)] = (11));

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
var statearr_33379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33379[(0)] = cljs$core$async$mult_$_state_machine__32396__auto__);

(statearr_33379[(1)] = (1));

return statearr_33379;
});
var cljs$core$async$mult_$_state_machine__32396__auto____1 = (function (state_33279){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33279);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33381){var ex__32399__auto__ = e33381;
var statearr_33382_35013 = state_33279;
(statearr_33382_35013[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33279[(4)]))){
var statearr_33384_35014 = state_33279;
(statearr_33384_35014[(1)] = cljs.core.first((state_33279[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35015 = state_33279;
state_33279 = G__35015;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32396__auto__ = function(state_33279){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32396__auto____1.call(this,state_33279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32396__auto____0;
cljs$core$async$mult_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32396__auto____1;
return cljs$core$async$mult_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33385 = f__32477__auto__();
(statearr_33385[(6)] = c__32476__auto___34952);

return statearr_33385;
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
var G__33388 = arguments.length;
switch (G__33388) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35018 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35018(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35019 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35019(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35020 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35020(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35022 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35022(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35024 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35024(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35026 = arguments.length;
var i__5750__auto___35027 = (0);
while(true){
if((i__5750__auto___35027 < len__5749__auto___35026)){
args__5755__auto__.push((arguments[i__5750__auto___35027]));

var G__35028 = (i__5750__auto___35027 + (1));
i__5750__auto___35027 = G__35028;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33416){
var map__33417 = p__33416;
var map__33417__$1 = cljs.core.__destructure_map(map__33417);
var opts = map__33417__$1;
var statearr_33418_35031 = state;
(statearr_33418_35031[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33419_35032 = state;
(statearr_33419_35032[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33420_35033 = state;
(statearr_33420_35033[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33412){
var G__33413 = cljs.core.first(seq33412);
var seq33412__$1 = cljs.core.next(seq33412);
var G__33414 = cljs.core.first(seq33412__$1);
var seq33412__$2 = cljs.core.next(seq33412__$1);
var G__33415 = cljs.core.first(seq33412__$2);
var seq33412__$3 = cljs.core.next(seq33412__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33413,G__33414,G__33415,seq33412__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33432 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33433){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33433 = meta33433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33434,meta33433__$1){
var self__ = this;
var _33434__$1 = this;
return (new cljs.core.async.t_cljs$core$async33432(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33433__$1));
}));

(cljs.core.async.t_cljs$core$async33432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33434){
var self__ = this;
var _33434__$1 = this;
return self__.meta33433;
}));

(cljs.core.async.t_cljs$core$async33432.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33432.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33432.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33432.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33432.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33432.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33432.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33432.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33433","meta33433",-935717507,null)], null);
}));

(cljs.core.async.t_cljs$core$async33432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33432");

(cljs.core.async.t_cljs$core$async33432.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33432.
 */
cljs.core.async.__GT_t_cljs$core$async33432 = (function cljs$core$async$__GT_t_cljs$core$async33432(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33433){
return (new cljs.core.async.t_cljs$core$async33432(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33433));
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
var m = (new cljs.core.async.t_cljs$core$async33432(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32476__auto___35040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33520){
var state_val_33521 = (state_33520[(1)]);
if((state_val_33521 === (7))){
var inst_33476 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
if(cljs.core.truth_(inst_33476)){
var statearr_33527_35042 = state_33520__$1;
(statearr_33527_35042[(1)] = (8));

} else {
var statearr_33528_35043 = state_33520__$1;
(statearr_33528_35043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (20))){
var inst_33469 = (state_33520[(7)]);
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33520__$1,(23),out,inst_33469);
} else {
if((state_val_33521 === (1))){
var inst_33451 = calc_state();
var inst_33452 = cljs.core.__destructure_map(inst_33451);
var inst_33453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33452,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33452,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33452,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33456 = inst_33451;
var state_33520__$1 = (function (){var statearr_33529 = state_33520;
(statearr_33529[(8)] = inst_33453);

(statearr_33529[(9)] = inst_33454);

(statearr_33529[(10)] = inst_33455);

(statearr_33529[(11)] = inst_33456);

return statearr_33529;
})();
var statearr_33531_35045 = state_33520__$1;
(statearr_33531_35045[(2)] = null);

(statearr_33531_35045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (24))){
var inst_33460 = (state_33520[(12)]);
var inst_33456 = inst_33460;
var state_33520__$1 = (function (){var statearr_33533 = state_33520;
(statearr_33533[(11)] = inst_33456);

return statearr_33533;
})();
var statearr_33534_35046 = state_33520__$1;
(statearr_33534_35046[(2)] = null);

(statearr_33534_35046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (4))){
var inst_33469 = (state_33520[(7)]);
var inst_33471 = (state_33520[(13)]);
var inst_33468 = (state_33520[(2)]);
var inst_33469__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33468,(0),null);
var inst_33470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33468,(1),null);
var inst_33471__$1 = (inst_33469__$1 == null);
var state_33520__$1 = (function (){var statearr_33537 = state_33520;
(statearr_33537[(7)] = inst_33469__$1);

(statearr_33537[(14)] = inst_33470);

(statearr_33537[(13)] = inst_33471__$1);

return statearr_33537;
})();
if(cljs.core.truth_(inst_33471__$1)){
var statearr_33539_35047 = state_33520__$1;
(statearr_33539_35047[(1)] = (5));

} else {
var statearr_33540_35048 = state_33520__$1;
(statearr_33540_35048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (15))){
var inst_33461 = (state_33520[(15)]);
var inst_33492 = (state_33520[(16)]);
var inst_33492__$1 = cljs.core.empty_QMARK_(inst_33461);
var state_33520__$1 = (function (){var statearr_33542 = state_33520;
(statearr_33542[(16)] = inst_33492__$1);

return statearr_33542;
})();
if(inst_33492__$1){
var statearr_33543_35049 = state_33520__$1;
(statearr_33543_35049[(1)] = (17));

} else {
var statearr_33544_35051 = state_33520__$1;
(statearr_33544_35051[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (21))){
var inst_33460 = (state_33520[(12)]);
var inst_33456 = inst_33460;
var state_33520__$1 = (function (){var statearr_33545 = state_33520;
(statearr_33545[(11)] = inst_33456);

return statearr_33545;
})();
var statearr_33547_35052 = state_33520__$1;
(statearr_33547_35052[(2)] = null);

(statearr_33547_35052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (13))){
var inst_33483 = (state_33520[(2)]);
var inst_33485 = calc_state();
var inst_33456 = inst_33485;
var state_33520__$1 = (function (){var statearr_33548 = state_33520;
(statearr_33548[(17)] = inst_33483);

(statearr_33548[(11)] = inst_33456);

return statearr_33548;
})();
var statearr_33549_35053 = state_33520__$1;
(statearr_33549_35053[(2)] = null);

(statearr_33549_35053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (22))){
var inst_33514 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33552_35055 = state_33520__$1;
(statearr_33552_35055[(2)] = inst_33514);

(statearr_33552_35055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (6))){
var inst_33470 = (state_33520[(14)]);
var inst_33474 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33470,change);
var state_33520__$1 = state_33520;
var statearr_33553_35056 = state_33520__$1;
(statearr_33553_35056[(2)] = inst_33474);

(statearr_33553_35056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (25))){
var state_33520__$1 = state_33520;
var statearr_33555_35057 = state_33520__$1;
(statearr_33555_35057[(2)] = null);

(statearr_33555_35057[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (17))){
var inst_33462 = (state_33520[(18)]);
var inst_33470 = (state_33520[(14)]);
var inst_33495 = (inst_33462.cljs$core$IFn$_invoke$arity$1 ? inst_33462.cljs$core$IFn$_invoke$arity$1(inst_33470) : inst_33462.call(null,inst_33470));
var inst_33496 = cljs.core.not(inst_33495);
var state_33520__$1 = state_33520;
var statearr_33556_35059 = state_33520__$1;
(statearr_33556_35059[(2)] = inst_33496);

(statearr_33556_35059[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (3))){
var inst_33518 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33520__$1,inst_33518);
} else {
if((state_val_33521 === (12))){
var state_33520__$1 = state_33520;
var statearr_33559_35060 = state_33520__$1;
(statearr_33559_35060[(2)] = null);

(statearr_33559_35060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (2))){
var inst_33456 = (state_33520[(11)]);
var inst_33460 = (state_33520[(12)]);
var inst_33460__$1 = cljs.core.__destructure_map(inst_33456);
var inst_33461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33460__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33460__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33460__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33520__$1 = (function (){var statearr_33561 = state_33520;
(statearr_33561[(12)] = inst_33460__$1);

(statearr_33561[(15)] = inst_33461);

(statearr_33561[(18)] = inst_33462);

return statearr_33561;
})();
return cljs.core.async.ioc_alts_BANG_(state_33520__$1,(4),inst_33463);
} else {
if((state_val_33521 === (23))){
var inst_33505 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
if(cljs.core.truth_(inst_33505)){
var statearr_33563_35062 = state_33520__$1;
(statearr_33563_35062[(1)] = (24));

} else {
var statearr_33564_35063 = state_33520__$1;
(statearr_33564_35063[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (19))){
var inst_33499 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33566_35065 = state_33520__$1;
(statearr_33566_35065[(2)] = inst_33499);

(statearr_33566_35065[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (11))){
var inst_33470 = (state_33520[(14)]);
var inst_33480 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33470);
var state_33520__$1 = state_33520;
var statearr_33568_35066 = state_33520__$1;
(statearr_33568_35066[(2)] = inst_33480);

(statearr_33568_35066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (9))){
var inst_33461 = (state_33520[(15)]);
var inst_33470 = (state_33520[(14)]);
var inst_33488 = (state_33520[(19)]);
var inst_33488__$1 = (inst_33461.cljs$core$IFn$_invoke$arity$1 ? inst_33461.cljs$core$IFn$_invoke$arity$1(inst_33470) : inst_33461.call(null,inst_33470));
var state_33520__$1 = (function (){var statearr_33570 = state_33520;
(statearr_33570[(19)] = inst_33488__$1);

return statearr_33570;
})();
if(cljs.core.truth_(inst_33488__$1)){
var statearr_33572_35067 = state_33520__$1;
(statearr_33572_35067[(1)] = (14));

} else {
var statearr_33573_35068 = state_33520__$1;
(statearr_33573_35068[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (5))){
var inst_33471 = (state_33520[(13)]);
var state_33520__$1 = state_33520;
var statearr_33574_35069 = state_33520__$1;
(statearr_33574_35069[(2)] = inst_33471);

(statearr_33574_35069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (14))){
var inst_33488 = (state_33520[(19)]);
var state_33520__$1 = state_33520;
var statearr_33575_35070 = state_33520__$1;
(statearr_33575_35070[(2)] = inst_33488);

(statearr_33575_35070[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (26))){
var inst_33510 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33580_35071 = state_33520__$1;
(statearr_33580_35071[(2)] = inst_33510);

(statearr_33580_35071[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (16))){
var inst_33501 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
if(cljs.core.truth_(inst_33501)){
var statearr_33581_35072 = state_33520__$1;
(statearr_33581_35072[(1)] = (20));

} else {
var statearr_33582_35073 = state_33520__$1;
(statearr_33582_35073[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (10))){
var inst_33516 = (state_33520[(2)]);
var state_33520__$1 = state_33520;
var statearr_33583_35074 = state_33520__$1;
(statearr_33583_35074[(2)] = inst_33516);

(statearr_33583_35074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (18))){
var inst_33492 = (state_33520[(16)]);
var state_33520__$1 = state_33520;
var statearr_33585_35075 = state_33520__$1;
(statearr_33585_35075[(2)] = inst_33492);

(statearr_33585_35075[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33521 === (8))){
var inst_33469 = (state_33520[(7)]);
var inst_33478 = (inst_33469 == null);
var state_33520__$1 = state_33520;
if(cljs.core.truth_(inst_33478)){
var statearr_33587_35076 = state_33520__$1;
(statearr_33587_35076[(1)] = (11));

} else {
var statearr_33588_35077 = state_33520__$1;
(statearr_33588_35077[(1)] = (12));

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
var statearr_33590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33590[(0)] = cljs$core$async$mix_$_state_machine__32396__auto__);

(statearr_33590[(1)] = (1));

return statearr_33590;
});
var cljs$core$async$mix_$_state_machine__32396__auto____1 = (function (state_33520){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33520);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33591){var ex__32399__auto__ = e33591;
var statearr_33592_35078 = state_33520;
(statearr_33592_35078[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33520[(4)]))){
var statearr_33593_35079 = state_33520;
(statearr_33593_35079[(1)] = cljs.core.first((state_33520[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35080 = state_33520;
state_33520 = G__35080;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32396__auto__ = function(state_33520){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32396__auto____1.call(this,state_33520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32396__auto____0;
cljs$core$async$mix_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32396__auto____1;
return cljs$core$async$mix_$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33594 = f__32477__auto__();
(statearr_33594[(6)] = c__32476__auto___35040);

return statearr_33594;
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

var cljs$core$async$Pub$sub_STAR_$dyn_35083 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35083(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35087 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35087(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35088 = (function() {
var G__35089 = null;
var G__35089__1 = (function (p){
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
var G__35089__2 = (function (p,v){
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
G__35089 = function(p,v){
switch(arguments.length){
case 1:
return G__35089__1.call(this,p);
case 2:
return G__35089__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35089.cljs$core$IFn$_invoke$arity$1 = G__35089__1;
G__35089.cljs$core$IFn$_invoke$arity$2 = G__35089__2;
return G__35089;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33619 = arguments.length;
switch (G__33619) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35088(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35088(p,v);
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
cljs.core.async.t_cljs$core$async33651 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33652){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33652 = meta33652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33653,meta33652__$1){
var self__ = this;
var _33653__$1 = this;
return (new cljs.core.async.t_cljs$core$async33651(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33652__$1));
}));

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33653){
var self__ = this;
var _33653__$1 = this;
return self__.meta33652;
}));

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33652","meta33652",1543111349,null)], null);
}));

(cljs.core.async.t_cljs$core$async33651.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33651");

(cljs.core.async.t_cljs$core$async33651.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33651");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33651.
 */
cljs.core.async.__GT_t_cljs$core$async33651 = (function cljs$core$async$__GT_t_cljs$core$async33651(ch,topic_fn,buf_fn,mults,ensure_mult,meta33652){
return (new cljs.core.async.t_cljs$core$async33651(ch,topic_fn,buf_fn,mults,ensure_mult,meta33652));
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
var G__33643 = arguments.length;
switch (G__33643) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33630_SHARP_){
if(cljs.core.truth_((p1__33630_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33630_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33630_SHARP_.call(null,topic)))){
return p1__33630_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33630_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33651(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32476__auto___35105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33758){
var state_val_33760 = (state_33758[(1)]);
if((state_val_33760 === (7))){
var inst_33753 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
var statearr_33763_35108 = state_33758__$1;
(statearr_33763_35108[(2)] = inst_33753);

(statearr_33763_35108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (20))){
var state_33758__$1 = state_33758;
var statearr_33764_35110 = state_33758__$1;
(statearr_33764_35110[(2)] = null);

(statearr_33764_35110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (1))){
var state_33758__$1 = state_33758;
var statearr_33771_35111 = state_33758__$1;
(statearr_33771_35111[(2)] = null);

(statearr_33771_35111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (24))){
var inst_33734 = (state_33758[(7)]);
var inst_33744 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33734);
var state_33758__$1 = state_33758;
var statearr_33772_35112 = state_33758__$1;
(statearr_33772_35112[(2)] = inst_33744);

(statearr_33772_35112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (4))){
var inst_33669 = (state_33758[(8)]);
var inst_33669__$1 = (state_33758[(2)]);
var inst_33672 = (inst_33669__$1 == null);
var state_33758__$1 = (function (){var statearr_33775 = state_33758;
(statearr_33775[(8)] = inst_33669__$1);

return statearr_33775;
})();
if(cljs.core.truth_(inst_33672)){
var statearr_33776_35113 = state_33758__$1;
(statearr_33776_35113[(1)] = (5));

} else {
var statearr_33777_35114 = state_33758__$1;
(statearr_33777_35114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (15))){
var inst_33726 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
var statearr_33778_35115 = state_33758__$1;
(statearr_33778_35115[(2)] = inst_33726);

(statearr_33778_35115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (21))){
var inst_33750 = (state_33758[(2)]);
var state_33758__$1 = (function (){var statearr_33780 = state_33758;
(statearr_33780[(9)] = inst_33750);

return statearr_33780;
})();
var statearr_33781_35116 = state_33758__$1;
(statearr_33781_35116[(2)] = null);

(statearr_33781_35116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (13))){
var inst_33704 = (state_33758[(10)]);
var inst_33707 = cljs.core.chunked_seq_QMARK_(inst_33704);
var state_33758__$1 = state_33758;
if(inst_33707){
var statearr_33782_35118 = state_33758__$1;
(statearr_33782_35118[(1)] = (16));

} else {
var statearr_33783_35119 = state_33758__$1;
(statearr_33783_35119[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (22))){
var inst_33740 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
if(cljs.core.truth_(inst_33740)){
var statearr_33785_35120 = state_33758__$1;
(statearr_33785_35120[(1)] = (23));

} else {
var statearr_33786_35121 = state_33758__$1;
(statearr_33786_35121[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (6))){
var inst_33669 = (state_33758[(8)]);
var inst_33734 = (state_33758[(7)]);
var inst_33736 = (state_33758[(11)]);
var inst_33734__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33669) : topic_fn.call(null,inst_33669));
var inst_33735 = cljs.core.deref(mults);
var inst_33736__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33735,inst_33734__$1);
var state_33758__$1 = (function (){var statearr_33787 = state_33758;
(statearr_33787[(7)] = inst_33734__$1);

(statearr_33787[(11)] = inst_33736__$1);

return statearr_33787;
})();
if(cljs.core.truth_(inst_33736__$1)){
var statearr_33789_35122 = state_33758__$1;
(statearr_33789_35122[(1)] = (19));

} else {
var statearr_33790_35123 = state_33758__$1;
(statearr_33790_35123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (25))){
var inst_33746 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
var statearr_33791_35139 = state_33758__$1;
(statearr_33791_35139[(2)] = inst_33746);

(statearr_33791_35139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (17))){
var inst_33704 = (state_33758[(10)]);
var inst_33717 = cljs.core.first(inst_33704);
var inst_33718 = cljs.core.async.muxch_STAR_(inst_33717);
var inst_33719 = cljs.core.async.close_BANG_(inst_33718);
var inst_33720 = cljs.core.next(inst_33704);
var inst_33685 = inst_33720;
var inst_33686 = null;
var inst_33687 = (0);
var inst_33688 = (0);
var state_33758__$1 = (function (){var statearr_33793 = state_33758;
(statearr_33793[(12)] = inst_33719);

(statearr_33793[(13)] = inst_33685);

(statearr_33793[(14)] = inst_33686);

(statearr_33793[(15)] = inst_33687);

(statearr_33793[(16)] = inst_33688);

return statearr_33793;
})();
var statearr_33794_35140 = state_33758__$1;
(statearr_33794_35140[(2)] = null);

(statearr_33794_35140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (3))){
var inst_33755 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33758__$1,inst_33755);
} else {
if((state_val_33760 === (12))){
var inst_33728 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
var statearr_33797_35142 = state_33758__$1;
(statearr_33797_35142[(2)] = inst_33728);

(statearr_33797_35142[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (2))){
var state_33758__$1 = state_33758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33758__$1,(4),ch);
} else {
if((state_val_33760 === (23))){
var state_33758__$1 = state_33758;
var statearr_33798_35143 = state_33758__$1;
(statearr_33798_35143[(2)] = null);

(statearr_33798_35143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (19))){
var inst_33736 = (state_33758[(11)]);
var inst_33669 = (state_33758[(8)]);
var inst_33738 = cljs.core.async.muxch_STAR_(inst_33736);
var state_33758__$1 = state_33758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33758__$1,(22),inst_33738,inst_33669);
} else {
if((state_val_33760 === (11))){
var inst_33685 = (state_33758[(13)]);
var inst_33704 = (state_33758[(10)]);
var inst_33704__$1 = cljs.core.seq(inst_33685);
var state_33758__$1 = (function (){var statearr_33802 = state_33758;
(statearr_33802[(10)] = inst_33704__$1);

return statearr_33802;
})();
if(inst_33704__$1){
var statearr_33805_35144 = state_33758__$1;
(statearr_33805_35144[(1)] = (13));

} else {
var statearr_33807_35145 = state_33758__$1;
(statearr_33807_35145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (9))){
var inst_33731 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
var statearr_33808_35146 = state_33758__$1;
(statearr_33808_35146[(2)] = inst_33731);

(statearr_33808_35146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (5))){
var inst_33682 = cljs.core.deref(mults);
var inst_33683 = cljs.core.vals(inst_33682);
var inst_33684 = cljs.core.seq(inst_33683);
var inst_33685 = inst_33684;
var inst_33686 = null;
var inst_33687 = (0);
var inst_33688 = (0);
var state_33758__$1 = (function (){var statearr_33809 = state_33758;
(statearr_33809[(13)] = inst_33685);

(statearr_33809[(14)] = inst_33686);

(statearr_33809[(15)] = inst_33687);

(statearr_33809[(16)] = inst_33688);

return statearr_33809;
})();
var statearr_33810_35151 = state_33758__$1;
(statearr_33810_35151[(2)] = null);

(statearr_33810_35151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (14))){
var state_33758__$1 = state_33758;
var statearr_33814_35152 = state_33758__$1;
(statearr_33814_35152[(2)] = null);

(statearr_33814_35152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (16))){
var inst_33704 = (state_33758[(10)]);
var inst_33709 = cljs.core.chunk_first(inst_33704);
var inst_33710 = cljs.core.chunk_rest(inst_33704);
var inst_33711 = cljs.core.count(inst_33709);
var inst_33685 = inst_33710;
var inst_33686 = inst_33709;
var inst_33687 = inst_33711;
var inst_33688 = (0);
var state_33758__$1 = (function (){var statearr_33817 = state_33758;
(statearr_33817[(13)] = inst_33685);

(statearr_33817[(14)] = inst_33686);

(statearr_33817[(15)] = inst_33687);

(statearr_33817[(16)] = inst_33688);

return statearr_33817;
})();
var statearr_33821_35153 = state_33758__$1;
(statearr_33821_35153[(2)] = null);

(statearr_33821_35153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (10))){
var inst_33686 = (state_33758[(14)]);
var inst_33688 = (state_33758[(16)]);
var inst_33685 = (state_33758[(13)]);
var inst_33687 = (state_33758[(15)]);
var inst_33697 = cljs.core._nth(inst_33686,inst_33688);
var inst_33698 = cljs.core.async.muxch_STAR_(inst_33697);
var inst_33699 = cljs.core.async.close_BANG_(inst_33698);
var inst_33700 = (inst_33688 + (1));
var tmp33811 = inst_33687;
var tmp33812 = inst_33685;
var tmp33813 = inst_33686;
var inst_33685__$1 = tmp33812;
var inst_33686__$1 = tmp33813;
var inst_33687__$1 = tmp33811;
var inst_33688__$1 = inst_33700;
var state_33758__$1 = (function (){var statearr_33828 = state_33758;
(statearr_33828[(17)] = inst_33699);

(statearr_33828[(13)] = inst_33685__$1);

(statearr_33828[(14)] = inst_33686__$1);

(statearr_33828[(15)] = inst_33687__$1);

(statearr_33828[(16)] = inst_33688__$1);

return statearr_33828;
})();
var statearr_33829_35154 = state_33758__$1;
(statearr_33829_35154[(2)] = null);

(statearr_33829_35154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (18))){
var inst_33723 = (state_33758[(2)]);
var state_33758__$1 = state_33758;
var statearr_33830_35162 = state_33758__$1;
(statearr_33830_35162[(2)] = inst_33723);

(statearr_33830_35162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (8))){
var inst_33688 = (state_33758[(16)]);
var inst_33687 = (state_33758[(15)]);
var inst_33691 = (inst_33688 < inst_33687);
var inst_33692 = inst_33691;
var state_33758__$1 = state_33758;
if(cljs.core.truth_(inst_33692)){
var statearr_33831_35163 = state_33758__$1;
(statearr_33831_35163[(1)] = (10));

} else {
var statearr_33832_35164 = state_33758__$1;
(statearr_33832_35164[(1)] = (11));

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
var statearr_33835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33835[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_33835[(1)] = (1));

return statearr_33835;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33758){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33758);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33836){var ex__32399__auto__ = e33836;
var statearr_33837_35165 = state_33758;
(statearr_33837_35165[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33758[(4)]))){
var statearr_33838_35166 = state_33758;
(statearr_33838_35166[(1)] = cljs.core.first((state_33758[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35167 = state_33758;
state_33758 = G__35167;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33840 = f__32477__auto__();
(statearr_33840[(6)] = c__32476__auto___35105);

return statearr_33840;
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
var G__33846 = arguments.length;
switch (G__33846) {
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
var G__33851 = arguments.length;
switch (G__33851) {
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
var G__33856 = arguments.length;
switch (G__33856) {
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
var c__32476__auto___35179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_33916){
var state_val_33917 = (state_33916[(1)]);
if((state_val_33917 === (7))){
var state_33916__$1 = state_33916;
var statearr_33918_35180 = state_33916__$1;
(statearr_33918_35180[(2)] = null);

(statearr_33918_35180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (1))){
var state_33916__$1 = state_33916;
var statearr_33919_35181 = state_33916__$1;
(statearr_33919_35181[(2)] = null);

(statearr_33919_35181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (4))){
var inst_33868 = (state_33916[(7)]);
var inst_33867 = (state_33916[(8)]);
var inst_33870 = (inst_33868 < inst_33867);
var state_33916__$1 = state_33916;
if(cljs.core.truth_(inst_33870)){
var statearr_33924_35182 = state_33916__$1;
(statearr_33924_35182[(1)] = (6));

} else {
var statearr_33930_35183 = state_33916__$1;
(statearr_33930_35183[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (15))){
var inst_33899 = (state_33916[(9)]);
var inst_33905 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33899);
var state_33916__$1 = state_33916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33916__$1,(17),out,inst_33905);
} else {
if((state_val_33917 === (13))){
var inst_33899 = (state_33916[(9)]);
var inst_33899__$1 = (state_33916[(2)]);
var inst_33900 = cljs.core.some(cljs.core.nil_QMARK_,inst_33899__$1);
var state_33916__$1 = (function (){var statearr_33931 = state_33916;
(statearr_33931[(9)] = inst_33899__$1);

return statearr_33931;
})();
if(cljs.core.truth_(inst_33900)){
var statearr_33932_35184 = state_33916__$1;
(statearr_33932_35184[(1)] = (14));

} else {
var statearr_33933_35185 = state_33916__$1;
(statearr_33933_35185[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (6))){
var state_33916__$1 = state_33916;
var statearr_33935_35186 = state_33916__$1;
(statearr_33935_35186[(2)] = null);

(statearr_33935_35186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (17))){
var inst_33907 = (state_33916[(2)]);
var state_33916__$1 = (function (){var statearr_33944 = state_33916;
(statearr_33944[(10)] = inst_33907);

return statearr_33944;
})();
var statearr_33946_35187 = state_33916__$1;
(statearr_33946_35187[(2)] = null);

(statearr_33946_35187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (3))){
var inst_33912 = (state_33916[(2)]);
var state_33916__$1 = state_33916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33916__$1,inst_33912);
} else {
if((state_val_33917 === (12))){
var _ = (function (){var statearr_33947 = state_33916;
(statearr_33947[(4)] = cljs.core.rest((state_33916[(4)])));

return statearr_33947;
})();
var state_33916__$1 = state_33916;
var ex33943 = (state_33916__$1[(2)]);
var statearr_33952_35188 = state_33916__$1;
(statearr_33952_35188[(5)] = ex33943);


if((ex33943 instanceof Object)){
var statearr_33954_35189 = state_33916__$1;
(statearr_33954_35189[(1)] = (11));

(statearr_33954_35189[(5)] = null);

} else {
throw ex33943;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (2))){
var inst_33866 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33867 = cnt;
var inst_33868 = (0);
var state_33916__$1 = (function (){var statearr_33958 = state_33916;
(statearr_33958[(11)] = inst_33866);

(statearr_33958[(8)] = inst_33867);

(statearr_33958[(7)] = inst_33868);

return statearr_33958;
})();
var statearr_33959_35190 = state_33916__$1;
(statearr_33959_35190[(2)] = null);

(statearr_33959_35190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (11))){
var inst_33878 = (state_33916[(2)]);
var inst_33879 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33916__$1 = (function (){var statearr_33960 = state_33916;
(statearr_33960[(12)] = inst_33878);

return statearr_33960;
})();
var statearr_33962_35191 = state_33916__$1;
(statearr_33962_35191[(2)] = inst_33879);

(statearr_33962_35191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (9))){
var inst_33868 = (state_33916[(7)]);
var _ = (function (){var statearr_33965 = state_33916;
(statearr_33965[(4)] = cljs.core.cons((12),(state_33916[(4)])));

return statearr_33965;
})();
var inst_33885 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33868) : chs__$1.call(null,inst_33868));
var inst_33886 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33868) : done.call(null,inst_33868));
var inst_33887 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33885,inst_33886);
var ___$1 = (function (){var statearr_33968 = state_33916;
(statearr_33968[(4)] = cljs.core.rest((state_33916[(4)])));

return statearr_33968;
})();
var state_33916__$1 = state_33916;
var statearr_33969_35209 = state_33916__$1;
(statearr_33969_35209[(2)] = inst_33887);

(statearr_33969_35209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (5))){
var inst_33897 = (state_33916[(2)]);
var state_33916__$1 = (function (){var statearr_33971 = state_33916;
(statearr_33971[(13)] = inst_33897);

return statearr_33971;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33916__$1,(13),dchan);
} else {
if((state_val_33917 === (14))){
var inst_33903 = cljs.core.async.close_BANG_(out);
var state_33916__$1 = state_33916;
var statearr_33973_35210 = state_33916__$1;
(statearr_33973_35210[(2)] = inst_33903);

(statearr_33973_35210[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (16))){
var inst_33910 = (state_33916[(2)]);
var state_33916__$1 = state_33916;
var statearr_33982_35211 = state_33916__$1;
(statearr_33982_35211[(2)] = inst_33910);

(statearr_33982_35211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (10))){
var inst_33868 = (state_33916[(7)]);
var inst_33890 = (state_33916[(2)]);
var inst_33891 = (inst_33868 + (1));
var inst_33868__$1 = inst_33891;
var state_33916__$1 = (function (){var statearr_33983 = state_33916;
(statearr_33983[(14)] = inst_33890);

(statearr_33983[(7)] = inst_33868__$1);

return statearr_33983;
})();
var statearr_33984_35212 = state_33916__$1;
(statearr_33984_35212[(2)] = null);

(statearr_33984_35212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (8))){
var inst_33895 = (state_33916[(2)]);
var state_33916__$1 = state_33916;
var statearr_33985_35213 = state_33916__$1;
(statearr_33985_35213[(2)] = inst_33895);

(statearr_33985_35213[(1)] = (5));


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
var statearr_33988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33988[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_33988[(1)] = (1));

return statearr_33988;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33916){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33916);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33990){var ex__32399__auto__ = e33990;
var statearr_33991_35214 = state_33916;
(statearr_33991_35214[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33916[(4)]))){
var statearr_33993_35215 = state_33916;
(statearr_33993_35215[(1)] = cljs.core.first((state_33916[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35216 = state_33916;
state_33916 = G__35216;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_33995 = f__32477__auto__();
(statearr_33995[(6)] = c__32476__auto___35179);

return statearr_33995;
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
var G__33999 = arguments.length;
switch (G__33999) {
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
var c__32476__auto___35218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34042){
var state_val_34043 = (state_34042[(1)]);
if((state_val_34043 === (7))){
var inst_34016 = (state_34042[(7)]);
var inst_34017 = (state_34042[(8)]);
var inst_34016__$1 = (state_34042[(2)]);
var inst_34017__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34016__$1,(0),null);
var inst_34018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34016__$1,(1),null);
var inst_34019 = (inst_34017__$1 == null);
var state_34042__$1 = (function (){var statearr_34045 = state_34042;
(statearr_34045[(7)] = inst_34016__$1);

(statearr_34045[(8)] = inst_34017__$1);

(statearr_34045[(9)] = inst_34018);

return statearr_34045;
})();
if(cljs.core.truth_(inst_34019)){
var statearr_34047_35239 = state_34042__$1;
(statearr_34047_35239[(1)] = (8));

} else {
var statearr_34048_35240 = state_34042__$1;
(statearr_34048_35240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (1))){
var inst_34005 = cljs.core.vec(chs);
var inst_34007 = inst_34005;
var state_34042__$1 = (function (){var statearr_34050 = state_34042;
(statearr_34050[(10)] = inst_34007);

return statearr_34050;
})();
var statearr_34051_35241 = state_34042__$1;
(statearr_34051_35241[(2)] = null);

(statearr_34051_35241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (4))){
var inst_34007 = (state_34042[(10)]);
var state_34042__$1 = state_34042;
return cljs.core.async.ioc_alts_BANG_(state_34042__$1,(7),inst_34007);
} else {
if((state_val_34043 === (6))){
var inst_34037 = (state_34042[(2)]);
var state_34042__$1 = state_34042;
var statearr_34052_35242 = state_34042__$1;
(statearr_34052_35242[(2)] = inst_34037);

(statearr_34052_35242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (3))){
var inst_34039 = (state_34042[(2)]);
var state_34042__$1 = state_34042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34042__$1,inst_34039);
} else {
if((state_val_34043 === (2))){
var inst_34007 = (state_34042[(10)]);
var inst_34009 = cljs.core.count(inst_34007);
var inst_34010 = (inst_34009 > (0));
var state_34042__$1 = state_34042;
if(cljs.core.truth_(inst_34010)){
var statearr_34055_35244 = state_34042__$1;
(statearr_34055_35244[(1)] = (4));

} else {
var statearr_34056_35245 = state_34042__$1;
(statearr_34056_35245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (11))){
var inst_34007 = (state_34042[(10)]);
var inst_34027 = (state_34042[(2)]);
var tmp34053 = inst_34007;
var inst_34007__$1 = tmp34053;
var state_34042__$1 = (function (){var statearr_34057 = state_34042;
(statearr_34057[(11)] = inst_34027);

(statearr_34057[(10)] = inst_34007__$1);

return statearr_34057;
})();
var statearr_34059_35246 = state_34042__$1;
(statearr_34059_35246[(2)] = null);

(statearr_34059_35246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (9))){
var inst_34017 = (state_34042[(8)]);
var state_34042__$1 = state_34042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34042__$1,(11),out,inst_34017);
} else {
if((state_val_34043 === (5))){
var inst_34035 = cljs.core.async.close_BANG_(out);
var state_34042__$1 = state_34042;
var statearr_34067_35247 = state_34042__$1;
(statearr_34067_35247[(2)] = inst_34035);

(statearr_34067_35247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (10))){
var inst_34032 = (state_34042[(2)]);
var state_34042__$1 = state_34042;
var statearr_34072_35248 = state_34042__$1;
(statearr_34072_35248[(2)] = inst_34032);

(statearr_34072_35248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (8))){
var inst_34007 = (state_34042[(10)]);
var inst_34016 = (state_34042[(7)]);
var inst_34017 = (state_34042[(8)]);
var inst_34018 = (state_34042[(9)]);
var inst_34021 = (function (){var cs = inst_34007;
var vec__34012 = inst_34016;
var v = inst_34017;
var c = inst_34018;
return (function (p1__33997_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33997_SHARP_);
});
})();
var inst_34022 = cljs.core.filterv(inst_34021,inst_34007);
var inst_34007__$1 = inst_34022;
var state_34042__$1 = (function (){var statearr_34081 = state_34042;
(statearr_34081[(10)] = inst_34007__$1);

return statearr_34081;
})();
var statearr_34082_35249 = state_34042__$1;
(statearr_34082_35249[(2)] = null);

(statearr_34082_35249[(1)] = (2));


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
var statearr_34087 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34087[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34087[(1)] = (1));

return statearr_34087;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34042){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34042);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34088){var ex__32399__auto__ = e34088;
var statearr_34089_35265 = state_34042;
(statearr_34089_35265[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34042[(4)]))){
var statearr_34091_35266 = state_34042;
(statearr_34091_35266[(1)] = cljs.core.first((state_34042[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35268 = state_34042;
state_34042 = G__35268;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34092 = f__32477__auto__();
(statearr_34092[(6)] = c__32476__auto___35218);

return statearr_34092;
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
var G__34096 = arguments.length;
switch (G__34096) {
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
var c__32476__auto___35270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34125){
var state_val_34126 = (state_34125[(1)]);
if((state_val_34126 === (7))){
var inst_34107 = (state_34125[(7)]);
var inst_34107__$1 = (state_34125[(2)]);
var inst_34108 = (inst_34107__$1 == null);
var inst_34109 = cljs.core.not(inst_34108);
var state_34125__$1 = (function (){var statearr_34130 = state_34125;
(statearr_34130[(7)] = inst_34107__$1);

return statearr_34130;
})();
if(inst_34109){
var statearr_34131_35271 = state_34125__$1;
(statearr_34131_35271[(1)] = (8));

} else {
var statearr_34132_35272 = state_34125__$1;
(statearr_34132_35272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (1))){
var inst_34101 = (0);
var state_34125__$1 = (function (){var statearr_34133 = state_34125;
(statearr_34133[(8)] = inst_34101);

return statearr_34133;
})();
var statearr_34135_35273 = state_34125__$1;
(statearr_34135_35273[(2)] = null);

(statearr_34135_35273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (4))){
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34125__$1,(7),ch);
} else {
if((state_val_34126 === (6))){
var inst_34120 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34143_35274 = state_34125__$1;
(statearr_34143_35274[(2)] = inst_34120);

(statearr_34143_35274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (3))){
var inst_34122 = (state_34125[(2)]);
var inst_34123 = cljs.core.async.close_BANG_(out);
var state_34125__$1 = (function (){var statearr_34144 = state_34125;
(statearr_34144[(9)] = inst_34122);

return statearr_34144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34125__$1,inst_34123);
} else {
if((state_val_34126 === (2))){
var inst_34101 = (state_34125[(8)]);
var inst_34103 = (inst_34101 < n);
var state_34125__$1 = state_34125;
if(cljs.core.truth_(inst_34103)){
var statearr_34145_35275 = state_34125__$1;
(statearr_34145_35275[(1)] = (4));

} else {
var statearr_34146_35276 = state_34125__$1;
(statearr_34146_35276[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (11))){
var inst_34101 = (state_34125[(8)]);
var inst_34112 = (state_34125[(2)]);
var inst_34113 = (inst_34101 + (1));
var inst_34101__$1 = inst_34113;
var state_34125__$1 = (function (){var statearr_34150 = state_34125;
(statearr_34150[(10)] = inst_34112);

(statearr_34150[(8)] = inst_34101__$1);

return statearr_34150;
})();
var statearr_34151_35286 = state_34125__$1;
(statearr_34151_35286[(2)] = null);

(statearr_34151_35286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (9))){
var state_34125__$1 = state_34125;
var statearr_34152_35287 = state_34125__$1;
(statearr_34152_35287[(2)] = null);

(statearr_34152_35287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (5))){
var state_34125__$1 = state_34125;
var statearr_34153_35288 = state_34125__$1;
(statearr_34153_35288[(2)] = null);

(statearr_34153_35288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (10))){
var inst_34117 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34154_35289 = state_34125__$1;
(statearr_34154_35289[(2)] = inst_34117);

(statearr_34154_35289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (8))){
var inst_34107 = (state_34125[(7)]);
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34125__$1,(11),out,inst_34107);
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
var statearr_34158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34158[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34158[(1)] = (1));

return statearr_34158;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34125){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34125);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34161){var ex__32399__auto__ = e34161;
var statearr_34162_35290 = state_34125;
(statearr_34162_35290[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34125[(4)]))){
var statearr_34163_35291 = state_34125;
(statearr_34163_35291[(1)] = cljs.core.first((state_34125[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35292 = state_34125;
state_34125 = G__35292;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34164 = f__32477__auto__();
(statearr_34164[(6)] = c__32476__auto___35270);

return statearr_34164;
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
cljs.core.async.t_cljs$core$async34175 = (function (f,ch,meta34172,_,fn1,meta34176){
this.f = f;
this.ch = ch;
this.meta34172 = meta34172;
this._ = _;
this.fn1 = fn1;
this.meta34176 = meta34176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34177,meta34176__$1){
var self__ = this;
var _34177__$1 = this;
return (new cljs.core.async.t_cljs$core$async34175(self__.f,self__.ch,self__.meta34172,self__._,self__.fn1,meta34176__$1));
}));

(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34177){
var self__ = this;
var _34177__$1 = this;
return self__.meta34176;
}));

(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34166_SHARP_){
var G__34185 = (((p1__34166_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34166_SHARP_) : self__.f.call(null,p1__34166_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34185) : f1.call(null,G__34185));
});
}));

(cljs.core.async.t_cljs$core$async34175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34172","meta34172",135807637,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34171","cljs.core.async/t_cljs$core$async34171",172204933,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34176","meta34176",-1987563637,null)], null);
}));

(cljs.core.async.t_cljs$core$async34175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34175");

(cljs.core.async.t_cljs$core$async34175.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34175.
 */
cljs.core.async.__GT_t_cljs$core$async34175 = (function cljs$core$async$__GT_t_cljs$core$async34175(f,ch,meta34172,_,fn1,meta34176){
return (new cljs.core.async.t_cljs$core$async34175(f,ch,meta34172,_,fn1,meta34176));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34171 = (function (f,ch,meta34172){
this.f = f;
this.ch = ch;
this.meta34172 = meta34172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34173,meta34172__$1){
var self__ = this;
var _34173__$1 = this;
return (new cljs.core.async.t_cljs$core$async34171(self__.f,self__.ch,meta34172__$1));
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34173){
var self__ = this;
var _34173__$1 = this;
return self__.meta34172;
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34175(self__.f,self__.ch,self__.meta34172,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34187 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34187) : self__.f.call(null,G__34187));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34172","meta34172",135807637,null)], null);
}));

(cljs.core.async.t_cljs$core$async34171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34171");

(cljs.core.async.t_cljs$core$async34171.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34171.
 */
cljs.core.async.__GT_t_cljs$core$async34171 = (function cljs$core$async$__GT_t_cljs$core$async34171(f,ch,meta34172){
return (new cljs.core.async.t_cljs$core$async34171(f,ch,meta34172));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34171(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34196 = (function (f,ch,meta34197){
this.f = f;
this.ch = ch;
this.meta34197 = meta34197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34198,meta34197__$1){
var self__ = this;
var _34198__$1 = this;
return (new cljs.core.async.t_cljs$core$async34196(self__.f,self__.ch,meta34197__$1));
}));

(cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34198){
var self__ = this;
var _34198__$1 = this;
return self__.meta34197;
}));

(cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34197","meta34197",-811825149,null)], null);
}));

(cljs.core.async.t_cljs$core$async34196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34196");

(cljs.core.async.t_cljs$core$async34196.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34196.
 */
cljs.core.async.__GT_t_cljs$core$async34196 = (function cljs$core$async$__GT_t_cljs$core$async34196(f,ch,meta34197){
return (new cljs.core.async.t_cljs$core$async34196(f,ch,meta34197));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34196(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34203 = (function (p,ch,meta34204){
this.p = p;
this.ch = ch;
this.meta34204 = meta34204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34205,meta34204__$1){
var self__ = this;
var _34205__$1 = this;
return (new cljs.core.async.t_cljs$core$async34203(self__.p,self__.ch,meta34204__$1));
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34205){
var self__ = this;
var _34205__$1 = this;
return self__.meta34204;
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34204","meta34204",-600549870,null)], null);
}));

(cljs.core.async.t_cljs$core$async34203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34203");

(cljs.core.async.t_cljs$core$async34203.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34203.
 */
cljs.core.async.__GT_t_cljs$core$async34203 = (function cljs$core$async$__GT_t_cljs$core$async34203(p,ch,meta34204){
return (new cljs.core.async.t_cljs$core$async34203(p,ch,meta34204));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34203(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34211 = arguments.length;
switch (G__34211) {
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
var c__32476__auto___35308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34246){
var state_val_34247 = (state_34246[(1)]);
if((state_val_34247 === (7))){
var inst_34242 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34248_35354 = state_34246__$1;
(statearr_34248_35354[(2)] = inst_34242);

(statearr_34248_35354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (1))){
var state_34246__$1 = state_34246;
var statearr_34249_35355 = state_34246__$1;
(statearr_34249_35355[(2)] = null);

(statearr_34249_35355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (4))){
var inst_34228 = (state_34246[(7)]);
var inst_34228__$1 = (state_34246[(2)]);
var inst_34229 = (inst_34228__$1 == null);
var state_34246__$1 = (function (){var statearr_34251 = state_34246;
(statearr_34251[(7)] = inst_34228__$1);

return statearr_34251;
})();
if(cljs.core.truth_(inst_34229)){
var statearr_34252_35356 = state_34246__$1;
(statearr_34252_35356[(1)] = (5));

} else {
var statearr_34254_35357 = state_34246__$1;
(statearr_34254_35357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (6))){
var inst_34228 = (state_34246[(7)]);
var inst_34233 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34228) : p.call(null,inst_34228));
var state_34246__$1 = state_34246;
if(cljs.core.truth_(inst_34233)){
var statearr_34255_35358 = state_34246__$1;
(statearr_34255_35358[(1)] = (8));

} else {
var statearr_34256_35359 = state_34246__$1;
(statearr_34256_35359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (3))){
var inst_34244 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34246__$1,inst_34244);
} else {
if((state_val_34247 === (2))){
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34246__$1,(4),ch);
} else {
if((state_val_34247 === (11))){
var inst_34236 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34259_35360 = state_34246__$1;
(statearr_34259_35360[(2)] = inst_34236);

(statearr_34259_35360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (9))){
var state_34246__$1 = state_34246;
var statearr_34260_35361 = state_34246__$1;
(statearr_34260_35361[(2)] = null);

(statearr_34260_35361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (5))){
var inst_34231 = cljs.core.async.close_BANG_(out);
var state_34246__$1 = state_34246;
var statearr_34263_35362 = state_34246__$1;
(statearr_34263_35362[(2)] = inst_34231);

(statearr_34263_35362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (10))){
var inst_34239 = (state_34246[(2)]);
var state_34246__$1 = (function (){var statearr_34264 = state_34246;
(statearr_34264[(8)] = inst_34239);

return statearr_34264;
})();
var statearr_34265_35364 = state_34246__$1;
(statearr_34265_35364[(2)] = null);

(statearr_34265_35364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (8))){
var inst_34228 = (state_34246[(7)]);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34246__$1,(11),out,inst_34228);
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
var statearr_34268 = [null,null,null,null,null,null,null,null,null];
(statearr_34268[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34268[(1)] = (1));

return statearr_34268;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34246){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34246);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34271){var ex__32399__auto__ = e34271;
var statearr_34273_35365 = state_34246;
(statearr_34273_35365[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34246[(4)]))){
var statearr_34275_35366 = state_34246;
(statearr_34275_35366[(1)] = cljs.core.first((state_34246[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35367 = state_34246;
state_34246 = G__35367;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34280 = f__32477__auto__();
(statearr_34280[(6)] = c__32476__auto___35308);

return statearr_34280;
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
var G__34295 = arguments.length;
switch (G__34295) {
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
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34362){
var state_val_34363 = (state_34362[(1)]);
if((state_val_34363 === (7))){
var inst_34358 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
var statearr_34364_35377 = state_34362__$1;
(statearr_34364_35377[(2)] = inst_34358);

(statearr_34364_35377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (20))){
var inst_34326 = (state_34362[(7)]);
var inst_34339 = (state_34362[(2)]);
var inst_34340 = cljs.core.next(inst_34326);
var inst_34312 = inst_34340;
var inst_34313 = null;
var inst_34314 = (0);
var inst_34315 = (0);
var state_34362__$1 = (function (){var statearr_34365 = state_34362;
(statearr_34365[(8)] = inst_34339);

(statearr_34365[(9)] = inst_34312);

(statearr_34365[(10)] = inst_34313);

(statearr_34365[(11)] = inst_34314);

(statearr_34365[(12)] = inst_34315);

return statearr_34365;
})();
var statearr_34366_35381 = state_34362__$1;
(statearr_34366_35381[(2)] = null);

(statearr_34366_35381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (1))){
var state_34362__$1 = state_34362;
var statearr_34376_35382 = state_34362__$1;
(statearr_34376_35382[(2)] = null);

(statearr_34376_35382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (4))){
var inst_34300 = (state_34362[(13)]);
var inst_34300__$1 = (state_34362[(2)]);
var inst_34301 = (inst_34300__$1 == null);
var state_34362__$1 = (function (){var statearr_34377 = state_34362;
(statearr_34377[(13)] = inst_34300__$1);

return statearr_34377;
})();
if(cljs.core.truth_(inst_34301)){
var statearr_34378_35383 = state_34362__$1;
(statearr_34378_35383[(1)] = (5));

} else {
var statearr_34379_35386 = state_34362__$1;
(statearr_34379_35386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (15))){
var state_34362__$1 = state_34362;
var statearr_34386_35390 = state_34362__$1;
(statearr_34386_35390[(2)] = null);

(statearr_34386_35390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (21))){
var state_34362__$1 = state_34362;
var statearr_34389_35393 = state_34362__$1;
(statearr_34389_35393[(2)] = null);

(statearr_34389_35393[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (13))){
var inst_34315 = (state_34362[(12)]);
var inst_34312 = (state_34362[(9)]);
var inst_34313 = (state_34362[(10)]);
var inst_34314 = (state_34362[(11)]);
var inst_34322 = (state_34362[(2)]);
var inst_34323 = (inst_34315 + (1));
var tmp34382 = inst_34313;
var tmp34383 = inst_34314;
var tmp34384 = inst_34312;
var inst_34312__$1 = tmp34384;
var inst_34313__$1 = tmp34382;
var inst_34314__$1 = tmp34383;
var inst_34315__$1 = inst_34323;
var state_34362__$1 = (function (){var statearr_34394 = state_34362;
(statearr_34394[(14)] = inst_34322);

(statearr_34394[(9)] = inst_34312__$1);

(statearr_34394[(10)] = inst_34313__$1);

(statearr_34394[(11)] = inst_34314__$1);

(statearr_34394[(12)] = inst_34315__$1);

return statearr_34394;
})();
var statearr_34397_35397 = state_34362__$1;
(statearr_34397_35397[(2)] = null);

(statearr_34397_35397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (22))){
var state_34362__$1 = state_34362;
var statearr_34400_35398 = state_34362__$1;
(statearr_34400_35398[(2)] = null);

(statearr_34400_35398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (6))){
var inst_34300 = (state_34362[(13)]);
var inst_34310 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34300) : f.call(null,inst_34300));
var inst_34311 = cljs.core.seq(inst_34310);
var inst_34312 = inst_34311;
var inst_34313 = null;
var inst_34314 = (0);
var inst_34315 = (0);
var state_34362__$1 = (function (){var statearr_34404 = state_34362;
(statearr_34404[(9)] = inst_34312);

(statearr_34404[(10)] = inst_34313);

(statearr_34404[(11)] = inst_34314);

(statearr_34404[(12)] = inst_34315);

return statearr_34404;
})();
var statearr_34407_35399 = state_34362__$1;
(statearr_34407_35399[(2)] = null);

(statearr_34407_35399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (17))){
var inst_34326 = (state_34362[(7)]);
var inst_34332 = cljs.core.chunk_first(inst_34326);
var inst_34333 = cljs.core.chunk_rest(inst_34326);
var inst_34334 = cljs.core.count(inst_34332);
var inst_34312 = inst_34333;
var inst_34313 = inst_34332;
var inst_34314 = inst_34334;
var inst_34315 = (0);
var state_34362__$1 = (function (){var statearr_34409 = state_34362;
(statearr_34409[(9)] = inst_34312);

(statearr_34409[(10)] = inst_34313);

(statearr_34409[(11)] = inst_34314);

(statearr_34409[(12)] = inst_34315);

return statearr_34409;
})();
var statearr_34410_35403 = state_34362__$1;
(statearr_34410_35403[(2)] = null);

(statearr_34410_35403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (3))){
var inst_34360 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34362__$1,inst_34360);
} else {
if((state_val_34363 === (12))){
var inst_34348 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
var statearr_34411_35404 = state_34362__$1;
(statearr_34411_35404[(2)] = inst_34348);

(statearr_34411_35404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (2))){
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34362__$1,(4),in$);
} else {
if((state_val_34363 === (23))){
var inst_34356 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
var statearr_34412_35405 = state_34362__$1;
(statearr_34412_35405[(2)] = inst_34356);

(statearr_34412_35405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (19))){
var inst_34343 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
var statearr_34413_35406 = state_34362__$1;
(statearr_34413_35406[(2)] = inst_34343);

(statearr_34413_35406[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (11))){
var inst_34312 = (state_34362[(9)]);
var inst_34326 = (state_34362[(7)]);
var inst_34326__$1 = cljs.core.seq(inst_34312);
var state_34362__$1 = (function (){var statearr_34417 = state_34362;
(statearr_34417[(7)] = inst_34326__$1);

return statearr_34417;
})();
if(inst_34326__$1){
var statearr_34419_35408 = state_34362__$1;
(statearr_34419_35408[(1)] = (14));

} else {
var statearr_34421_35409 = state_34362__$1;
(statearr_34421_35409[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (9))){
var inst_34350 = (state_34362[(2)]);
var inst_34351 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34362__$1 = (function (){var statearr_34424 = state_34362;
(statearr_34424[(15)] = inst_34350);

return statearr_34424;
})();
if(cljs.core.truth_(inst_34351)){
var statearr_34426_35416 = state_34362__$1;
(statearr_34426_35416[(1)] = (21));

} else {
var statearr_34428_35417 = state_34362__$1;
(statearr_34428_35417[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (5))){
var inst_34304 = cljs.core.async.close_BANG_(out);
var state_34362__$1 = state_34362;
var statearr_34431_35418 = state_34362__$1;
(statearr_34431_35418[(2)] = inst_34304);

(statearr_34431_35418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (14))){
var inst_34326 = (state_34362[(7)]);
var inst_34328 = cljs.core.chunked_seq_QMARK_(inst_34326);
var state_34362__$1 = state_34362;
if(inst_34328){
var statearr_34434_35423 = state_34362__$1;
(statearr_34434_35423[(1)] = (17));

} else {
var statearr_34436_35424 = state_34362__$1;
(statearr_34436_35424[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (16))){
var inst_34346 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
var statearr_34438_35426 = state_34362__$1;
(statearr_34438_35426[(2)] = inst_34346);

(statearr_34438_35426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (10))){
var inst_34313 = (state_34362[(10)]);
var inst_34315 = (state_34362[(12)]);
var inst_34320 = cljs.core._nth(inst_34313,inst_34315);
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34362__$1,(13),out,inst_34320);
} else {
if((state_val_34363 === (18))){
var inst_34326 = (state_34362[(7)]);
var inst_34337 = cljs.core.first(inst_34326);
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34362__$1,(20),out,inst_34337);
} else {
if((state_val_34363 === (8))){
var inst_34315 = (state_34362[(12)]);
var inst_34314 = (state_34362[(11)]);
var inst_34317 = (inst_34315 < inst_34314);
var inst_34318 = inst_34317;
var state_34362__$1 = state_34362;
if(cljs.core.truth_(inst_34318)){
var statearr_34440_35430 = state_34362__$1;
(statearr_34440_35430[(1)] = (10));

} else {
var statearr_34441_35431 = state_34362__$1;
(statearr_34441_35431[(1)] = (11));

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
var statearr_34443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34443[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__);

(statearr_34443[(1)] = (1));

return statearr_34443;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____1 = (function (state_34362){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34362);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34448){var ex__32399__auto__ = e34448;
var statearr_34449_35438 = state_34362;
(statearr_34449_35438[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34362[(4)]))){
var statearr_34450_35440 = state_34362;
(statearr_34450_35440[(1)] = cljs.core.first((state_34362[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35442 = state_34362;
state_34362 = G__35442;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__ = function(state_34362){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____1.call(this,state_34362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34474 = f__32477__auto__();
(statearr_34474[(6)] = c__32476__auto__);

return statearr_34474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));

return c__32476__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34476 = arguments.length;
switch (G__34476) {
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
var G__34478 = arguments.length;
switch (G__34478) {
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
var G__34481 = arguments.length;
switch (G__34481) {
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
var c__32476__auto___35458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34507){
var state_val_34508 = (state_34507[(1)]);
if((state_val_34508 === (7))){
var inst_34502 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34511_35462 = state_34507__$1;
(statearr_34511_35462[(2)] = inst_34502);

(statearr_34511_35462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (1))){
var inst_34482 = null;
var state_34507__$1 = (function (){var statearr_34512 = state_34507;
(statearr_34512[(7)] = inst_34482);

return statearr_34512;
})();
var statearr_34513_35464 = state_34507__$1;
(statearr_34513_35464[(2)] = null);

(statearr_34513_35464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (4))){
var inst_34486 = (state_34507[(8)]);
var inst_34486__$1 = (state_34507[(2)]);
var inst_34487 = (inst_34486__$1 == null);
var inst_34488 = cljs.core.not(inst_34487);
var state_34507__$1 = (function (){var statearr_34514 = state_34507;
(statearr_34514[(8)] = inst_34486__$1);

return statearr_34514;
})();
if(inst_34488){
var statearr_34515_35468 = state_34507__$1;
(statearr_34515_35468[(1)] = (5));

} else {
var statearr_34516_35469 = state_34507__$1;
(statearr_34516_35469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (6))){
var state_34507__$1 = state_34507;
var statearr_34517_35472 = state_34507__$1;
(statearr_34517_35472[(2)] = null);

(statearr_34517_35472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (3))){
var inst_34504 = (state_34507[(2)]);
var inst_34505 = cljs.core.async.close_BANG_(out);
var state_34507__$1 = (function (){var statearr_34518 = state_34507;
(statearr_34518[(9)] = inst_34504);

return statearr_34518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34507__$1,inst_34505);
} else {
if((state_val_34508 === (2))){
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34507__$1,(4),ch);
} else {
if((state_val_34508 === (11))){
var inst_34486 = (state_34507[(8)]);
var inst_34496 = (state_34507[(2)]);
var inst_34482 = inst_34486;
var state_34507__$1 = (function (){var statearr_34519 = state_34507;
(statearr_34519[(10)] = inst_34496);

(statearr_34519[(7)] = inst_34482);

return statearr_34519;
})();
var statearr_34520_35475 = state_34507__$1;
(statearr_34520_35475[(2)] = null);

(statearr_34520_35475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (9))){
var inst_34486 = (state_34507[(8)]);
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34507__$1,(11),out,inst_34486);
} else {
if((state_val_34508 === (5))){
var inst_34486 = (state_34507[(8)]);
var inst_34482 = (state_34507[(7)]);
var inst_34490 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34486,inst_34482);
var state_34507__$1 = state_34507;
if(inst_34490){
var statearr_34522_35478 = state_34507__$1;
(statearr_34522_35478[(1)] = (8));

} else {
var statearr_34523_35479 = state_34507__$1;
(statearr_34523_35479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (10))){
var inst_34499 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34524_35480 = state_34507__$1;
(statearr_34524_35480[(2)] = inst_34499);

(statearr_34524_35480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (8))){
var inst_34482 = (state_34507[(7)]);
var tmp34521 = inst_34482;
var inst_34482__$1 = tmp34521;
var state_34507__$1 = (function (){var statearr_34526 = state_34507;
(statearr_34526[(7)] = inst_34482__$1);

return statearr_34526;
})();
var statearr_34528_35481 = state_34507__$1;
(statearr_34528_35481[(2)] = null);

(statearr_34528_35481[(1)] = (2));


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
var statearr_34540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34540[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34540[(1)] = (1));

return statearr_34540;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34507){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34507);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34541){var ex__32399__auto__ = e34541;
var statearr_34542_35482 = state_34507;
(statearr_34542_35482[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34507[(4)]))){
var statearr_34543_35483 = state_34507;
(statearr_34543_35483[(1)] = cljs.core.first((state_34507[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35484 = state_34507;
state_34507 = G__35484;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34544 = f__32477__auto__();
(statearr_34544[(6)] = c__32476__auto___35458);

return statearr_34544;
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
var G__34547 = arguments.length;
switch (G__34547) {
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
var c__32476__auto___35486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34588){
var state_val_34589 = (state_34588[(1)]);
if((state_val_34589 === (7))){
var inst_34584 = (state_34588[(2)]);
var state_34588__$1 = state_34588;
var statearr_34591_35487 = state_34588__$1;
(statearr_34591_35487[(2)] = inst_34584);

(statearr_34591_35487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34589 === (1))){
var inst_34549 = (new Array(n));
var inst_34551 = inst_34549;
var inst_34552 = (0);
var state_34588__$1 = (function (){var statearr_34592 = state_34588;
(statearr_34592[(7)] = inst_34551);

(statearr_34592[(8)] = inst_34552);

return statearr_34592;
})();
var statearr_34594_35488 = state_34588__$1;
(statearr_34594_35488[(2)] = null);

(statearr_34594_35488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34589 === (4))){
var inst_34555 = (state_34588[(9)]);
var inst_34555__$1 = (state_34588[(2)]);
var inst_34556 = (inst_34555__$1 == null);
var inst_34557 = cljs.core.not(inst_34556);
var state_34588__$1 = (function (){var statearr_34595 = state_34588;
(statearr_34595[(9)] = inst_34555__$1);

return statearr_34595;
})();
if(inst_34557){
var statearr_34596_35489 = state_34588__$1;
(statearr_34596_35489[(1)] = (5));

} else {
var statearr_34597_35490 = state_34588__$1;
(statearr_34597_35490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34589 === (15))){
var inst_34578 = (state_34588[(2)]);
var state_34588__$1 = state_34588;
var statearr_34598_35492 = state_34588__$1;
(statearr_34598_35492[(2)] = inst_34578);

(statearr_34598_35492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34589 === (13))){
var state_34588__$1 = state_34588;
var statearr_34599_35494 = state_34588__$1;
(statearr_34599_35494[(2)] = null);

(statearr_34599_35494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34589 === (6))){
var inst_34552 = (state_34588[(8)]);
var inst_34574 = (inst_34552 > (0));
var state_34588__$1 = state_34588;
if(cljs.core.truth_(inst_34574)){
var statearr_34600_35500 = state_34588__$1;
(statearr_34600_35500[(1)] = (12));

} else {
var statearr_34601_35501 = state_34588__$1;
(statearr_34601_35501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34589 === (3))){
var inst_34586 = (state_34588[(2)]);
var state_34588__$1 = state_34588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34588__$1,inst_34586);
} else {
if((state_val_34589 === (12))){
var inst_34551 = (state_34588[(7)]);
var inst_34576 = cljs.core.vec(inst_34551);
var state_34588__$1 = state_34588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34588__$1,(15),out,inst_34576);
} else {
if((state_val_34589 === (2))){
var state_34588__$1 = state_34588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34588__$1,(4),ch);
} else {
if((state_val_34589 === (11))){
var inst_34568 = (state_34588[(2)]);
var inst_34569 = (new Array(n));
var inst_34551 = inst_34569;
var inst_34552 = (0);
var state_34588__$1 = (function (){var statearr_34603 = state_34588;
(statearr_34603[(10)] = inst_34568);

(statearr_34603[(7)] = inst_34551);

(statearr_34603[(8)] = inst_34552);

return statearr_34603;
})();
var statearr_34604_35512 = state_34588__$1;
(statearr_34604_35512[(2)] = null);

(statearr_34604_35512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34589 === (9))){
var inst_34551 = (state_34588[(7)]);
var inst_34566 = cljs.core.vec(inst_34551);
var state_34588__$1 = state_34588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34588__$1,(11),out,inst_34566);
} else {
if((state_val_34589 === (5))){
var inst_34551 = (state_34588[(7)]);
var inst_34552 = (state_34588[(8)]);
var inst_34555 = (state_34588[(9)]);
var inst_34560 = (state_34588[(11)]);
var inst_34559 = (inst_34551[inst_34552] = inst_34555);
var inst_34560__$1 = (inst_34552 + (1));
var inst_34562 = (inst_34560__$1 < n);
var state_34588__$1 = (function (){var statearr_34606 = state_34588;
(statearr_34606[(12)] = inst_34559);

(statearr_34606[(11)] = inst_34560__$1);

return statearr_34606;
})();
if(cljs.core.truth_(inst_34562)){
var statearr_34607_35514 = state_34588__$1;
(statearr_34607_35514[(1)] = (8));

} else {
var statearr_34608_35515 = state_34588__$1;
(statearr_34608_35515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34589 === (14))){
var inst_34581 = (state_34588[(2)]);
var inst_34582 = cljs.core.async.close_BANG_(out);
var state_34588__$1 = (function (){var statearr_34610 = state_34588;
(statearr_34610[(13)] = inst_34581);

return statearr_34610;
})();
var statearr_34611_35516 = state_34588__$1;
(statearr_34611_35516[(2)] = inst_34582);

(statearr_34611_35516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34589 === (10))){
var inst_34572 = (state_34588[(2)]);
var state_34588__$1 = state_34588;
var statearr_34612_35520 = state_34588__$1;
(statearr_34612_35520[(2)] = inst_34572);

(statearr_34612_35520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34589 === (8))){
var inst_34551 = (state_34588[(7)]);
var inst_34560 = (state_34588[(11)]);
var tmp34609 = inst_34551;
var inst_34551__$1 = tmp34609;
var inst_34552 = inst_34560;
var state_34588__$1 = (function (){var statearr_34613 = state_34588;
(statearr_34613[(7)] = inst_34551__$1);

(statearr_34613[(8)] = inst_34552);

return statearr_34613;
})();
var statearr_34614_35523 = state_34588__$1;
(statearr_34614_35523[(2)] = null);

(statearr_34614_35523[(1)] = (2));


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
var statearr_34616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34616[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34616[(1)] = (1));

return statearr_34616;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34588){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34588);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34617){var ex__32399__auto__ = e34617;
var statearr_34618_35524 = state_34588;
(statearr_34618_35524[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34588[(4)]))){
var statearr_34620_35525 = state_34588;
(statearr_34620_35525[(1)] = cljs.core.first((state_34588[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35526 = state_34588;
state_34588 = G__35526;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34621 = f__32477__auto__();
(statearr_34621[(6)] = c__32476__auto___35486);

return statearr_34621;
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
var G__34624 = arguments.length;
switch (G__34624) {
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
var c__32476__auto___35528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32477__auto__ = (function (){var switch__32395__auto__ = (function (state_34669){
var state_val_34670 = (state_34669[(1)]);
if((state_val_34670 === (7))){
var inst_34665 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
var statearr_34671_35529 = state_34669__$1;
(statearr_34671_35529[(2)] = inst_34665);

(statearr_34671_35529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (1))){
var inst_34625 = [];
var inst_34626 = inst_34625;
var inst_34627 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34669__$1 = (function (){var statearr_34672 = state_34669;
(statearr_34672[(7)] = inst_34626);

(statearr_34672[(8)] = inst_34627);

return statearr_34672;
})();
var statearr_34673_35530 = state_34669__$1;
(statearr_34673_35530[(2)] = null);

(statearr_34673_35530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (4))){
var inst_34630 = (state_34669[(9)]);
var inst_34630__$1 = (state_34669[(2)]);
var inst_34631 = (inst_34630__$1 == null);
var inst_34632 = cljs.core.not(inst_34631);
var state_34669__$1 = (function (){var statearr_34674 = state_34669;
(statearr_34674[(9)] = inst_34630__$1);

return statearr_34674;
})();
if(inst_34632){
var statearr_34675_35531 = state_34669__$1;
(statearr_34675_35531[(1)] = (5));

} else {
var statearr_34676_35532 = state_34669__$1;
(statearr_34676_35532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (15))){
var inst_34626 = (state_34669[(7)]);
var inst_34657 = cljs.core.vec(inst_34626);
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34669__$1,(18),out,inst_34657);
} else {
if((state_val_34670 === (13))){
var inst_34652 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
var statearr_34677_35533 = state_34669__$1;
(statearr_34677_35533[(2)] = inst_34652);

(statearr_34677_35533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (6))){
var inst_34626 = (state_34669[(7)]);
var inst_34654 = inst_34626.length;
var inst_34655 = (inst_34654 > (0));
var state_34669__$1 = state_34669;
if(cljs.core.truth_(inst_34655)){
var statearr_34678_35534 = state_34669__$1;
(statearr_34678_35534[(1)] = (15));

} else {
var statearr_34679_35535 = state_34669__$1;
(statearr_34679_35535[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (17))){
var inst_34662 = (state_34669[(2)]);
var inst_34663 = cljs.core.async.close_BANG_(out);
var state_34669__$1 = (function (){var statearr_34680 = state_34669;
(statearr_34680[(10)] = inst_34662);

return statearr_34680;
})();
var statearr_34681_35537 = state_34669__$1;
(statearr_34681_35537[(2)] = inst_34663);

(statearr_34681_35537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (3))){
var inst_34667 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34669__$1,inst_34667);
} else {
if((state_val_34670 === (12))){
var inst_34626 = (state_34669[(7)]);
var inst_34645 = cljs.core.vec(inst_34626);
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34669__$1,(14),out,inst_34645);
} else {
if((state_val_34670 === (2))){
var state_34669__$1 = state_34669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34669__$1,(4),ch);
} else {
if((state_val_34670 === (11))){
var inst_34626 = (state_34669[(7)]);
var inst_34630 = (state_34669[(9)]);
var inst_34634 = (state_34669[(11)]);
var inst_34642 = inst_34626.push(inst_34630);
var tmp34682 = inst_34626;
var inst_34626__$1 = tmp34682;
var inst_34627 = inst_34634;
var state_34669__$1 = (function (){var statearr_34683 = state_34669;
(statearr_34683[(12)] = inst_34642);

(statearr_34683[(7)] = inst_34626__$1);

(statearr_34683[(8)] = inst_34627);

return statearr_34683;
})();
var statearr_34684_35539 = state_34669__$1;
(statearr_34684_35539[(2)] = null);

(statearr_34684_35539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (9))){
var inst_34627 = (state_34669[(8)]);
var inst_34638 = cljs.core.keyword_identical_QMARK_(inst_34627,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34669__$1 = state_34669;
var statearr_34685_35540 = state_34669__$1;
(statearr_34685_35540[(2)] = inst_34638);

(statearr_34685_35540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (5))){
var inst_34630 = (state_34669[(9)]);
var inst_34634 = (state_34669[(11)]);
var inst_34627 = (state_34669[(8)]);
var inst_34635 = (state_34669[(13)]);
var inst_34634__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34630) : f.call(null,inst_34630));
var inst_34635__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34634__$1,inst_34627);
var state_34669__$1 = (function (){var statearr_34686 = state_34669;
(statearr_34686[(11)] = inst_34634__$1);

(statearr_34686[(13)] = inst_34635__$1);

return statearr_34686;
})();
if(inst_34635__$1){
var statearr_34687_35541 = state_34669__$1;
(statearr_34687_35541[(1)] = (8));

} else {
var statearr_34688_35543 = state_34669__$1;
(statearr_34688_35543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (14))){
var inst_34630 = (state_34669[(9)]);
var inst_34634 = (state_34669[(11)]);
var inst_34647 = (state_34669[(2)]);
var inst_34648 = [];
var inst_34649 = inst_34648.push(inst_34630);
var inst_34626 = inst_34648;
var inst_34627 = inst_34634;
var state_34669__$1 = (function (){var statearr_34689 = state_34669;
(statearr_34689[(14)] = inst_34647);

(statearr_34689[(15)] = inst_34649);

(statearr_34689[(7)] = inst_34626);

(statearr_34689[(8)] = inst_34627);

return statearr_34689;
})();
var statearr_34690_35547 = state_34669__$1;
(statearr_34690_35547[(2)] = null);

(statearr_34690_35547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (16))){
var state_34669__$1 = state_34669;
var statearr_34691_35548 = state_34669__$1;
(statearr_34691_35548[(2)] = null);

(statearr_34691_35548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (10))){
var inst_34640 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
if(cljs.core.truth_(inst_34640)){
var statearr_34692_35550 = state_34669__$1;
(statearr_34692_35550[(1)] = (11));

} else {
var statearr_34693_35551 = state_34669__$1;
(statearr_34693_35551[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (18))){
var inst_34659 = (state_34669[(2)]);
var state_34669__$1 = state_34669;
var statearr_34695_35553 = state_34669__$1;
(statearr_34695_35553[(2)] = inst_34659);

(statearr_34695_35553[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34670 === (8))){
var inst_34635 = (state_34669[(13)]);
var state_34669__$1 = state_34669;
var statearr_34696_35554 = state_34669__$1;
(statearr_34696_35554[(2)] = inst_34635);

(statearr_34696_35554[(1)] = (10));


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
var statearr_34697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34697[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34697[(1)] = (1));

return statearr_34697;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34669){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34669);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34699){var ex__32399__auto__ = e34699;
var statearr_34700_35555 = state_34669;
(statearr_34700_35555[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34669[(4)]))){
var statearr_34701_35556 = state_34669;
(statearr_34701_35556[(1)] = cljs.core.first((state_34669[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35557 = state_34669;
state_34669 = G__35557;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32478__auto__ = (function (){var statearr_34702 = f__32477__auto__();
(statearr_34702[(6)] = c__32476__auto___35528);

return statearr_34702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32478__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
