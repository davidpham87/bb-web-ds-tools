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
cljs.core.async.t_cljs$core$async32620 = (function (f,blockable,meta32621){
this.f = f;
this.blockable = blockable;
this.meta32621 = meta32621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32622,meta32621__$1){
var self__ = this;
var _32622__$1 = this;
return (new cljs.core.async.t_cljs$core$async32620(self__.f,self__.blockable,meta32621__$1));
}));

(cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32622){
var self__ = this;
var _32622__$1 = this;
return self__.meta32621;
}));

(cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32621","meta32621",573503571,null)], null);
}));

(cljs.core.async.t_cljs$core$async32620.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32620");

(cljs.core.async.t_cljs$core$async32620.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32620");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32620.
 */
cljs.core.async.__GT_t_cljs$core$async32620 = (function cljs$core$async$__GT_t_cljs$core$async32620(f,blockable,meta32621){
return (new cljs.core.async.t_cljs$core$async32620(f,blockable,meta32621));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32614 = arguments.length;
switch (G__32614) {
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
return (new cljs.core.async.t_cljs$core$async32620(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32672 = arguments.length;
switch (G__32672) {
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
var G__32683 = arguments.length;
switch (G__32683) {
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
var G__32685 = arguments.length;
switch (G__32685) {
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
var val_34768 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34768) : fn1.call(null,val_34768));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34768) : fn1.call(null,val_34768));
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
var G__32687 = arguments.length;
switch (G__32687) {
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
var n__5616__auto___34770 = n;
var x_34771 = (0);
while(true){
if((x_34771 < n__5616__auto___34770)){
(a[x_34771] = x_34771);

var G__34772 = (x_34771 + (1));
x_34771 = G__34772;
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
cljs.core.async.t_cljs$core$async32688 = (function (flag,meta32689){
this.flag = flag;
this.meta32689 = meta32689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32690,meta32689__$1){
var self__ = this;
var _32690__$1 = this;
return (new cljs.core.async.t_cljs$core$async32688(self__.flag,meta32689__$1));
}));

(cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32690){
var self__ = this;
var _32690__$1 = this;
return self__.meta32689;
}));

(cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32688.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32689","meta32689",1402506225,null)], null);
}));

(cljs.core.async.t_cljs$core$async32688.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32688");

(cljs.core.async.t_cljs$core$async32688.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32688");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32688.
 */
cljs.core.async.__GT_t_cljs$core$async32688 = (function cljs$core$async$__GT_t_cljs$core$async32688(flag,meta32689){
return (new cljs.core.async.t_cljs$core$async32688(flag,meta32689));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32688(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32691 = (function (flag,cb,meta32692){
this.flag = flag;
this.cb = cb;
this.meta32692 = meta32692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32693,meta32692__$1){
var self__ = this;
var _32693__$1 = this;
return (new cljs.core.async.t_cljs$core$async32691(self__.flag,self__.cb,meta32692__$1));
}));

(cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32693){
var self__ = this;
var _32693__$1 = this;
return self__.meta32692;
}));

(cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32692","meta32692",-1196502057,null)], null);
}));

(cljs.core.async.t_cljs$core$async32691.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32691");

(cljs.core.async.t_cljs$core$async32691.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32691");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32691.
 */
cljs.core.async.__GT_t_cljs$core$async32691 = (function cljs$core$async$__GT_t_cljs$core$async32691(flag,cb,meta32692){
return (new cljs.core.async.t_cljs$core$async32691(flag,cb,meta32692));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32691(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_34775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34775)){
if((!(((port_34775.cljs$core$IFn$_invoke$arity$1 ? port_34775.cljs$core$IFn$_invoke$arity$1((1)) : port_34775.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34777 = (i + (1));
i = G__34777;
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
var G__34780 = (i + (1));
i = G__34780;
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
var len__5749__auto___34781 = arguments.length;
var i__5750__auto___34782 = (0);
while(true){
if((i__5750__auto___34782 < len__5749__auto___34781)){
args__5755__auto__.push((arguments[i__5750__auto___34782]));

var G__34783 = (i__5750__auto___34782 + (1));
i__5750__auto___34782 = G__34783;
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
var c__32492__auto___34786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_32730){
var state_val_32731 = (state_32730[(1)]);
if((state_val_32731 === (7))){
var inst_32726 = (state_32730[(2)]);
var state_32730__$1 = state_32730;
var statearr_32736_34787 = state_32730__$1;
(statearr_32736_34787[(2)] = inst_32726);

(statearr_32736_34787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (1))){
var state_32730__$1 = state_32730;
var statearr_32737_34789 = state_32730__$1;
(statearr_32737_34789[(2)] = null);

(statearr_32737_34789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (4))){
var inst_32706 = (state_32730[(7)]);
var inst_32706__$1 = (state_32730[(2)]);
var inst_32707 = (inst_32706__$1 == null);
var state_32730__$1 = (function (){var statearr_32742 = state_32730;
(statearr_32742[(7)] = inst_32706__$1);

return statearr_32742;
})();
if(cljs.core.truth_(inst_32707)){
var statearr_32743_34791 = state_32730__$1;
(statearr_32743_34791[(1)] = (5));

} else {
var statearr_32744_34792 = state_32730__$1;
(statearr_32744_34792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (13))){
var state_32730__$1 = state_32730;
var statearr_32745_34793 = state_32730__$1;
(statearr_32745_34793[(2)] = null);

(statearr_32745_34793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (6))){
var inst_32706 = (state_32730[(7)]);
var state_32730__$1 = state_32730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32730__$1,(11),to,inst_32706);
} else {
if((state_val_32731 === (3))){
var inst_32728 = (state_32730[(2)]);
var state_32730__$1 = state_32730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32730__$1,inst_32728);
} else {
if((state_val_32731 === (12))){
var state_32730__$1 = state_32730;
var statearr_32750_34794 = state_32730__$1;
(statearr_32750_34794[(2)] = null);

(statearr_32750_34794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (2))){
var state_32730__$1 = state_32730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32730__$1,(4),from);
} else {
if((state_val_32731 === (11))){
var inst_32719 = (state_32730[(2)]);
var state_32730__$1 = state_32730;
if(cljs.core.truth_(inst_32719)){
var statearr_32754_34795 = state_32730__$1;
(statearr_32754_34795[(1)] = (12));

} else {
var statearr_32755_34796 = state_32730__$1;
(statearr_32755_34796[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (9))){
var state_32730__$1 = state_32730;
var statearr_32756_34797 = state_32730__$1;
(statearr_32756_34797[(2)] = null);

(statearr_32756_34797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (5))){
var state_32730__$1 = state_32730;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32757_34798 = state_32730__$1;
(statearr_32757_34798[(1)] = (8));

} else {
var statearr_32758_34799 = state_32730__$1;
(statearr_32758_34799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (14))){
var inst_32724 = (state_32730[(2)]);
var state_32730__$1 = state_32730;
var statearr_32759_34800 = state_32730__$1;
(statearr_32759_34800[(2)] = inst_32724);

(statearr_32759_34800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (10))){
var inst_32716 = (state_32730[(2)]);
var state_32730__$1 = state_32730;
var statearr_32760_34801 = state_32730__$1;
(statearr_32760_34801[(2)] = inst_32716);

(statearr_32760_34801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (8))){
var inst_32710 = cljs.core.async.close_BANG_(to);
var state_32730__$1 = state_32730;
var statearr_32761_34802 = state_32730__$1;
(statearr_32761_34802[(2)] = inst_32710);

(statearr_32761_34802[(1)] = (10));


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
var statearr_32765 = [null,null,null,null,null,null,null,null];
(statearr_32765[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_32765[(1)] = (1));

return statearr_32765;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_32730){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32730);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32766){var ex__32403__auto__ = e32766;
var statearr_32767_34803 = state_32730;
(statearr_32767_34803[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32730[(4)]))){
var statearr_32768_34804 = state_32730;
(statearr_32768_34804[(1)] = cljs.core.first((state_32730[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34805 = state_32730;
state_32730 = G__34805;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_32730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_32730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_32769 = f__32493__auto__();
(statearr_32769[(6)] = c__32492__auto___34786);

return statearr_32769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
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
var process__$1 = (function (p__32770){
var vec__32771 = p__32770;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(1),null);
var job = vec__32771;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32492__auto___34806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_32778){
var state_val_32779 = (state_32778[(1)]);
if((state_val_32779 === (1))){
var state_32778__$1 = state_32778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32778__$1,(2),res,v);
} else {
if((state_val_32779 === (2))){
var inst_32775 = (state_32778[(2)]);
var inst_32776 = cljs.core.async.close_BANG_(res);
var state_32778__$1 = (function (){var statearr_32780 = state_32778;
(statearr_32780[(7)] = inst_32775);

return statearr_32780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32778__$1,inst_32776);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0 = (function (){
var statearr_32781 = [null,null,null,null,null,null,null,null];
(statearr_32781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__);

(statearr_32781[(1)] = (1));

return statearr_32781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1 = (function (state_32778){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32778);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32782){var ex__32403__auto__ = e32782;
var statearr_32783_34807 = state_32778;
(statearr_32783_34807[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32778[(4)]))){
var statearr_32784_34808 = state_32778;
(statearr_32784_34808[(1)] = cljs.core.first((state_32778[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34809 = state_32778;
state_32778 = G__34809;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = function(state_32778){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1.call(this,state_32778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_32785 = f__32493__auto__();
(statearr_32785[(6)] = c__32492__auto___34806);

return statearr_32785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32786){
var vec__32787 = p__32786;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32787,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32787,(1),null);
var job = vec__32787;
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
var n__5616__auto___34812 = n;
var __34813 = (0);
while(true){
if((__34813 < n__5616__auto___34812)){
var G__32790_34814 = type;
var G__32790_34815__$1 = (((G__32790_34814 instanceof cljs.core.Keyword))?G__32790_34814.fqn:null);
switch (G__32790_34815__$1) {
case "compute":
var c__32492__auto___34817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34813,c__32492__auto___34817,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async){
return (function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = ((function (__34813,c__32492__auto___34817,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async){
return (function (state_32803){
var state_val_32804 = (state_32803[(1)]);
if((state_val_32804 === (1))){
var state_32803__$1 = state_32803;
var statearr_32805_34818 = state_32803__$1;
(statearr_32805_34818[(2)] = null);

(statearr_32805_34818[(1)] = (2));


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
var inst_32794 = process__$1(inst_32793);
var state_32803__$1 = state_32803;
if(cljs.core.truth_(inst_32794)){
var statearr_32806_34819 = state_32803__$1;
(statearr_32806_34819[(1)] = (5));

} else {
var statearr_32807_34820 = state_32803__$1;
(statearr_32807_34820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (5))){
var state_32803__$1 = state_32803;
var statearr_32808_34822 = state_32803__$1;
(statearr_32808_34822[(2)] = null);

(statearr_32808_34822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (6))){
var state_32803__$1 = state_32803;
var statearr_32809_34823 = state_32803__$1;
(statearr_32809_34823[(2)] = null);

(statearr_32809_34823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (7))){
var inst_32799 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32810_34825 = state_32803__$1;
(statearr_32810_34825[(2)] = inst_32799);

(statearr_32810_34825[(1)] = (3));


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
});})(__34813,c__32492__auto___34817,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async))
;
return ((function (__34813,switch__32399__auto__,c__32492__auto___34817,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0 = (function (){
var statearr_32811 = [null,null,null,null,null,null,null];
(statearr_32811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__);

(statearr_32811[(1)] = (1));

return statearr_32811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1 = (function (state_32803){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32803);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32812){var ex__32403__auto__ = e32812;
var statearr_32813_34826 = state_32803;
(statearr_32813_34826[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32803[(4)]))){
var statearr_32814_34827 = state_32803;
(statearr_32814_34827[(1)] = cljs.core.first((state_32803[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34828 = state_32803;
state_32803 = G__34828;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = function(state_32803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1.call(this,state_32803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__;
})()
;})(__34813,switch__32399__auto__,c__32492__auto___34817,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async))
})();
var state__32494__auto__ = (function (){var statearr_32815 = f__32493__auto__();
(statearr_32815[(6)] = c__32492__auto___34817);

return statearr_32815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
});})(__34813,c__32492__auto___34817,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async))
);


break;
case "async":
var c__32492__auto___34829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34813,c__32492__auto___34829,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async){
return (function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = ((function (__34813,c__32492__auto___34829,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async){
return (function (state_32828){
var state_val_32829 = (state_32828[(1)]);
if((state_val_32829 === (1))){
var state_32828__$1 = state_32828;
var statearr_32830_34830 = state_32828__$1;
(statearr_32830_34830[(2)] = null);

(statearr_32830_34830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (2))){
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32828__$1,(4),jobs);
} else {
if((state_val_32829 === (3))){
var inst_32826 = (state_32828[(2)]);
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32828__$1,inst_32826);
} else {
if((state_val_32829 === (4))){
var inst_32818 = (state_32828[(2)]);
var inst_32819 = async(inst_32818);
var state_32828__$1 = state_32828;
if(cljs.core.truth_(inst_32819)){
var statearr_32831_34831 = state_32828__$1;
(statearr_32831_34831[(1)] = (5));

} else {
var statearr_32832_34832 = state_32828__$1;
(statearr_32832_34832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (5))){
var state_32828__$1 = state_32828;
var statearr_32833_34833 = state_32828__$1;
(statearr_32833_34833[(2)] = null);

(statearr_32833_34833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (6))){
var state_32828__$1 = state_32828;
var statearr_32834_34834 = state_32828__$1;
(statearr_32834_34834[(2)] = null);

(statearr_32834_34834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (7))){
var inst_32824 = (state_32828[(2)]);
var state_32828__$1 = state_32828;
var statearr_32835_34835 = state_32828__$1;
(statearr_32835_34835[(2)] = inst_32824);

(statearr_32835_34835[(1)] = (3));


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
});})(__34813,c__32492__auto___34829,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async))
;
return ((function (__34813,switch__32399__auto__,c__32492__auto___34829,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0 = (function (){
var statearr_32836 = [null,null,null,null,null,null,null];
(statearr_32836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__);

(statearr_32836[(1)] = (1));

return statearr_32836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1 = (function (state_32828){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32828);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32837){var ex__32403__auto__ = e32837;
var statearr_32838_34836 = state_32828;
(statearr_32838_34836[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32828[(4)]))){
var statearr_32839_34837 = state_32828;
(statearr_32839_34837[(1)] = cljs.core.first((state_32828[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34838 = state_32828;
state_32828 = G__34838;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = function(state_32828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1.call(this,state_32828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__;
})()
;})(__34813,switch__32399__auto__,c__32492__auto___34829,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async))
})();
var state__32494__auto__ = (function (){var statearr_32840 = f__32493__auto__();
(statearr_32840[(6)] = c__32492__auto___34829);

return statearr_32840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
});})(__34813,c__32492__auto___34829,G__32790_34814,G__32790_34815__$1,n__5616__auto___34812,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32790_34815__$1)].join('')));

}

var G__34839 = (__34813 + (1));
__34813 = G__34839;
continue;
} else {
}
break;
}

var c__32492__auto___34840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_32865){
var state_val_32866 = (state_32865[(1)]);
if((state_val_32866 === (7))){
var inst_32861 = (state_32865[(2)]);
var state_32865__$1 = state_32865;
var statearr_32867_34841 = state_32865__$1;
(statearr_32867_34841[(2)] = inst_32861);

(statearr_32867_34841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (1))){
var state_32865__$1 = state_32865;
var statearr_32868_34842 = state_32865__$1;
(statearr_32868_34842[(2)] = null);

(statearr_32868_34842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (4))){
var inst_32844 = (state_32865[(7)]);
var inst_32844__$1 = (state_32865[(2)]);
var inst_32845 = (inst_32844__$1 == null);
var state_32865__$1 = (function (){var statearr_32869 = state_32865;
(statearr_32869[(7)] = inst_32844__$1);

return statearr_32869;
})();
if(cljs.core.truth_(inst_32845)){
var statearr_32870_34843 = state_32865__$1;
(statearr_32870_34843[(1)] = (5));

} else {
var statearr_32871_34844 = state_32865__$1;
(statearr_32871_34844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (6))){
var inst_32844 = (state_32865[(7)]);
var inst_32849 = (state_32865[(8)]);
var inst_32849__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32852 = [inst_32844,inst_32849__$1];
var inst_32853 = (new cljs.core.PersistentVector(null,2,(5),inst_32851,inst_32852,null));
var state_32865__$1 = (function (){var statearr_32872 = state_32865;
(statearr_32872[(8)] = inst_32849__$1);

return statearr_32872;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32865__$1,(8),jobs,inst_32853);
} else {
if((state_val_32866 === (3))){
var inst_32863 = (state_32865[(2)]);
var state_32865__$1 = state_32865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32865__$1,inst_32863);
} else {
if((state_val_32866 === (2))){
var state_32865__$1 = state_32865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32865__$1,(4),from);
} else {
if((state_val_32866 === (9))){
var inst_32858 = (state_32865[(2)]);
var state_32865__$1 = (function (){var statearr_32873 = state_32865;
(statearr_32873[(9)] = inst_32858);

return statearr_32873;
})();
var statearr_32874_34846 = state_32865__$1;
(statearr_32874_34846[(2)] = null);

(statearr_32874_34846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (5))){
var inst_32847 = cljs.core.async.close_BANG_(jobs);
var state_32865__$1 = state_32865;
var statearr_32875_34847 = state_32865__$1;
(statearr_32875_34847[(2)] = inst_32847);

(statearr_32875_34847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32866 === (8))){
var inst_32849 = (state_32865[(8)]);
var inst_32855 = (state_32865[(2)]);
var state_32865__$1 = (function (){var statearr_32876 = state_32865;
(statearr_32876[(10)] = inst_32855);

return statearr_32876;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32865__$1,(9),results,inst_32849);
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
var statearr_32877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__);

(statearr_32877[(1)] = (1));

return statearr_32877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1 = (function (state_32865){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32865);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32878){var ex__32403__auto__ = e32878;
var statearr_32879_34848 = state_32865;
(statearr_32879_34848[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32865[(4)]))){
var statearr_32880_34849 = state_32865;
(statearr_32880_34849[(1)] = cljs.core.first((state_32865[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34850 = state_32865;
state_32865 = G__34850;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = function(state_32865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1.call(this,state_32865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_32881 = f__32493__auto__();
(statearr_32881[(6)] = c__32492__auto___34840);

return statearr_32881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));


var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_32919){
var state_val_32920 = (state_32919[(1)]);
if((state_val_32920 === (7))){
var inst_32915 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
var statearr_32921_34855 = state_32919__$1;
(statearr_32921_34855[(2)] = inst_32915);

(statearr_32921_34855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (20))){
var state_32919__$1 = state_32919;
var statearr_32922_34856 = state_32919__$1;
(statearr_32922_34856[(2)] = null);

(statearr_32922_34856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (1))){
var state_32919__$1 = state_32919;
var statearr_32923_34857 = state_32919__$1;
(statearr_32923_34857[(2)] = null);

(statearr_32923_34857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (4))){
var inst_32884 = (state_32919[(7)]);
var inst_32884__$1 = (state_32919[(2)]);
var inst_32885 = (inst_32884__$1 == null);
var state_32919__$1 = (function (){var statearr_32924 = state_32919;
(statearr_32924[(7)] = inst_32884__$1);

return statearr_32924;
})();
if(cljs.core.truth_(inst_32885)){
var statearr_32925_34858 = state_32919__$1;
(statearr_32925_34858[(1)] = (5));

} else {
var statearr_32926_34859 = state_32919__$1;
(statearr_32926_34859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (15))){
var inst_32897 = (state_32919[(8)]);
var state_32919__$1 = state_32919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32919__$1,(18),to,inst_32897);
} else {
if((state_val_32920 === (21))){
var inst_32910 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
var statearr_32927_34860 = state_32919__$1;
(statearr_32927_34860[(2)] = inst_32910);

(statearr_32927_34860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (13))){
var inst_32912 = (state_32919[(2)]);
var state_32919__$1 = (function (){var statearr_32928 = state_32919;
(statearr_32928[(9)] = inst_32912);

return statearr_32928;
})();
var statearr_32929_34861 = state_32919__$1;
(statearr_32929_34861[(2)] = null);

(statearr_32929_34861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (6))){
var inst_32884 = (state_32919[(7)]);
var state_32919__$1 = state_32919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32919__$1,(11),inst_32884);
} else {
if((state_val_32920 === (17))){
var inst_32905 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
if(cljs.core.truth_(inst_32905)){
var statearr_32930_34863 = state_32919__$1;
(statearr_32930_34863[(1)] = (19));

} else {
var statearr_32931_34864 = state_32919__$1;
(statearr_32931_34864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (3))){
var inst_32917 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32919__$1,inst_32917);
} else {
if((state_val_32920 === (12))){
var inst_32894 = (state_32919[(10)]);
var state_32919__$1 = state_32919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32919__$1,(14),inst_32894);
} else {
if((state_val_32920 === (2))){
var state_32919__$1 = state_32919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32919__$1,(4),results);
} else {
if((state_val_32920 === (19))){
var state_32919__$1 = state_32919;
var statearr_32932_34865 = state_32919__$1;
(statearr_32932_34865[(2)] = null);

(statearr_32932_34865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (11))){
var inst_32894 = (state_32919[(2)]);
var state_32919__$1 = (function (){var statearr_32933 = state_32919;
(statearr_32933[(10)] = inst_32894);

return statearr_32933;
})();
var statearr_32934_34866 = state_32919__$1;
(statearr_32934_34866[(2)] = null);

(statearr_32934_34866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (9))){
var state_32919__$1 = state_32919;
var statearr_32935_34867 = state_32919__$1;
(statearr_32935_34867[(2)] = null);

(statearr_32935_34867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (5))){
var state_32919__$1 = state_32919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32936_34868 = state_32919__$1;
(statearr_32936_34868[(1)] = (8));

} else {
var statearr_32937_34869 = state_32919__$1;
(statearr_32937_34869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (14))){
var inst_32897 = (state_32919[(8)]);
var inst_32899 = (state_32919[(11)]);
var inst_32897__$1 = (state_32919[(2)]);
var inst_32898 = (inst_32897__$1 == null);
var inst_32899__$1 = cljs.core.not(inst_32898);
var state_32919__$1 = (function (){var statearr_32938 = state_32919;
(statearr_32938[(8)] = inst_32897__$1);

(statearr_32938[(11)] = inst_32899__$1);

return statearr_32938;
})();
if(inst_32899__$1){
var statearr_32939_34870 = state_32919__$1;
(statearr_32939_34870[(1)] = (15));

} else {
var statearr_32940_34871 = state_32919__$1;
(statearr_32940_34871[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (16))){
var inst_32899 = (state_32919[(11)]);
var state_32919__$1 = state_32919;
var statearr_32941_34872 = state_32919__$1;
(statearr_32941_34872[(2)] = inst_32899);

(statearr_32941_34872[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (10))){
var inst_32891 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
var statearr_32942_34873 = state_32919__$1;
(statearr_32942_34873[(2)] = inst_32891);

(statearr_32942_34873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (18))){
var inst_32902 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
var statearr_32943_34874 = state_32919__$1;
(statearr_32943_34874[(2)] = inst_32902);

(statearr_32943_34874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (8))){
var inst_32888 = cljs.core.async.close_BANG_(to);
var state_32919__$1 = state_32919;
var statearr_32944_34875 = state_32919__$1;
(statearr_32944_34875[(2)] = inst_32888);

(statearr_32944_34875[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1 = (function (state_32919){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_32919);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e32946){var ex__32403__auto__ = e32946;
var statearr_32947_34876 = state_32919;
(statearr_32947_34876[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32919[(4)]))){
var statearr_32948_34877 = state_32919;
(statearr_32948_34877[(1)] = cljs.core.first((state_32919[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34878 = state_32919;
state_32919 = G__34878;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__ = function(state_32919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1.call(this,state_32919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_32949 = f__32493__auto__();
(statearr_32949[(6)] = c__32492__auto__);

return statearr_32949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
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
var c__32492__auto___34882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_32981){
var state_val_32982 = (state_32981[(1)]);
if((state_val_32982 === (7))){
var inst_32977 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
var statearr_32983_34883 = state_32981__$1;
(statearr_32983_34883[(2)] = inst_32977);

(statearr_32983_34883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (1))){
var state_32981__$1 = state_32981;
var statearr_32984_34885 = state_32981__$1;
(statearr_32984_34885[(2)] = null);

(statearr_32984_34885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (4))){
var inst_32958 = (state_32981[(7)]);
var inst_32958__$1 = (state_32981[(2)]);
var inst_32959 = (inst_32958__$1 == null);
var state_32981__$1 = (function (){var statearr_32985 = state_32981;
(statearr_32985[(7)] = inst_32958__$1);

return statearr_32985;
})();
if(cljs.core.truth_(inst_32959)){
var statearr_32986_34886 = state_32981__$1;
(statearr_32986_34886[(1)] = (5));

} else {
var statearr_32987_34887 = state_32981__$1;
(statearr_32987_34887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (13))){
var state_32981__$1 = state_32981;
var statearr_32988_34888 = state_32981__$1;
(statearr_32988_34888[(2)] = null);

(statearr_32988_34888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (6))){
var inst_32958 = (state_32981[(7)]);
var inst_32964 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32958) : p.call(null,inst_32958));
var state_32981__$1 = state_32981;
if(cljs.core.truth_(inst_32964)){
var statearr_32989_34889 = state_32981__$1;
(statearr_32989_34889[(1)] = (9));

} else {
var statearr_32990_34890 = state_32981__$1;
(statearr_32990_34890[(1)] = (10));

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
var statearr_32991_34891 = state_32981__$1;
(statearr_32991_34891[(2)] = null);

(statearr_32991_34891[(1)] = (2));


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
var statearr_32992_34896 = state_32981__$1;
(statearr_32992_34896[(2)] = tc);

(statearr_32992_34896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (5))){
var inst_32961 = cljs.core.async.close_BANG_(tc);
var inst_32962 = cljs.core.async.close_BANG_(fc);
var state_32981__$1 = (function (){var statearr_32994 = state_32981;
(statearr_32994[(8)] = inst_32961);

return statearr_32994;
})();
var statearr_32996_34897 = state_32981__$1;
(statearr_32996_34897[(2)] = inst_32962);

(statearr_32996_34897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (14))){
var inst_32975 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
var statearr_32997_34898 = state_32981__$1;
(statearr_32997_34898[(2)] = inst_32975);

(statearr_32997_34898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (10))){
var state_32981__$1 = state_32981;
var statearr_32998_34899 = state_32981__$1;
(statearr_32998_34899[(2)] = fc);

(statearr_32998_34899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (8))){
var inst_32970 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
if(cljs.core.truth_(inst_32970)){
var statearr_32999_34900 = state_32981__$1;
(statearr_32999_34900[(1)] = (12));

} else {
var statearr_33000_34901 = state_32981__$1;
(statearr_33000_34901[(1)] = (13));

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
var statearr_33003 = [null,null,null,null,null,null,null,null,null];
(statearr_33003[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_33003[(1)] = (1));

return statearr_33003;
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
}catch (e33005){var ex__32403__auto__ = e33005;
var statearr_33007_34902 = state_32981;
(statearr_33007_34902[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_32981[(4)]))){
var statearr_33008_34903 = state_32981;
(statearr_33008_34903[(1)] = cljs.core.first((state_32981[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34904 = state_32981;
state_32981 = G__34904;
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
var state__32494__auto__ = (function (){var statearr_33011 = f__32493__auto__();
(statearr_33011[(6)] = c__32492__auto___34882);

return statearr_33011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
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
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_33037){
var state_val_33038 = (state_33037[(1)]);
if((state_val_33038 === (7))){
var inst_33033 = (state_33037[(2)]);
var state_33037__$1 = state_33037;
var statearr_33039_34905 = state_33037__$1;
(statearr_33039_34905[(2)] = inst_33033);

(statearr_33039_34905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33038 === (1))){
var inst_33015 = init;
var inst_33016 = inst_33015;
var state_33037__$1 = (function (){var statearr_33041 = state_33037;
(statearr_33041[(7)] = inst_33016);

return statearr_33041;
})();
var statearr_33042_34906 = state_33037__$1;
(statearr_33042_34906[(2)] = null);

(statearr_33042_34906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33038 === (4))){
var inst_33019 = (state_33037[(8)]);
var inst_33019__$1 = (state_33037[(2)]);
var inst_33020 = (inst_33019__$1 == null);
var state_33037__$1 = (function (){var statearr_33047 = state_33037;
(statearr_33047[(8)] = inst_33019__$1);

return statearr_33047;
})();
if(cljs.core.truth_(inst_33020)){
var statearr_33048_34907 = state_33037__$1;
(statearr_33048_34907[(1)] = (5));

} else {
var statearr_33049_34908 = state_33037__$1;
(statearr_33049_34908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33038 === (6))){
var inst_33016 = (state_33037[(7)]);
var inst_33019 = (state_33037[(8)]);
var inst_33023 = (state_33037[(9)]);
var inst_33023__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33016,inst_33019) : f.call(null,inst_33016,inst_33019));
var inst_33024 = cljs.core.reduced_QMARK_(inst_33023__$1);
var state_33037__$1 = (function (){var statearr_33050 = state_33037;
(statearr_33050[(9)] = inst_33023__$1);

return statearr_33050;
})();
if(inst_33024){
var statearr_33051_34909 = state_33037__$1;
(statearr_33051_34909[(1)] = (8));

} else {
var statearr_33052_34910 = state_33037__$1;
(statearr_33052_34910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33038 === (3))){
var inst_33035 = (state_33037[(2)]);
var state_33037__$1 = state_33037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33037__$1,inst_33035);
} else {
if((state_val_33038 === (2))){
var state_33037__$1 = state_33037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33037__$1,(4),ch);
} else {
if((state_val_33038 === (9))){
var inst_33023 = (state_33037[(9)]);
var inst_33016 = inst_33023;
var state_33037__$1 = (function (){var statearr_33053 = state_33037;
(statearr_33053[(7)] = inst_33016);

return statearr_33053;
})();
var statearr_33054_34911 = state_33037__$1;
(statearr_33054_34911[(2)] = null);

(statearr_33054_34911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33038 === (5))){
var inst_33016 = (state_33037[(7)]);
var state_33037__$1 = state_33037;
var statearr_33055_34912 = state_33037__$1;
(statearr_33055_34912[(2)] = inst_33016);

(statearr_33055_34912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33038 === (10))){
var inst_33031 = (state_33037[(2)]);
var state_33037__$1 = state_33037;
var statearr_33056_34913 = state_33037__$1;
(statearr_33056_34913[(2)] = inst_33031);

(statearr_33056_34913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33038 === (8))){
var inst_33023 = (state_33037[(9)]);
var inst_33026 = cljs.core.deref(inst_33023);
var state_33037__$1 = state_33037;
var statearr_33057_34915 = state_33037__$1;
(statearr_33057_34915[(2)] = inst_33026);

(statearr_33057_34915[(1)] = (10));


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
var statearr_33058 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33058[(0)] = cljs$core$async$reduce_$_state_machine__32400__auto__);

(statearr_33058[(1)] = (1));

return statearr_33058;
});
var cljs$core$async$reduce_$_state_machine__32400__auto____1 = (function (state_33037){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33037);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33059){var ex__32403__auto__ = e33059;
var statearr_33060_34916 = state_33037;
(statearr_33060_34916[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33037[(4)]))){
var statearr_33061_34917 = state_33037;
(statearr_33061_34917[(1)] = cljs.core.first((state_33037[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34918 = state_33037;
state_33037 = G__34918;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32400__auto__ = function(state_33037){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32400__auto____1.call(this,state_33037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32400__auto____0;
cljs$core$async$reduce_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32400__auto____1;
return cljs$core$async$reduce_$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_33069 = f__32493__auto__();
(statearr_33069[(6)] = c__32492__auto__);

return statearr_33069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_33075){
var state_val_33076 = (state_33075[(1)]);
if((state_val_33076 === (1))){
var inst_33070 = cljs.core.async.reduce(f__$1,init,ch);
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33075__$1,(2),inst_33070);
} else {
if((state_val_33076 === (2))){
var inst_33072 = (state_33075[(2)]);
var inst_33073 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33072) : f__$1.call(null,inst_33072));
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33075__$1,inst_33073);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32400__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32400__auto____0 = (function (){
var statearr_33077 = [null,null,null,null,null,null,null];
(statearr_33077[(0)] = cljs$core$async$transduce_$_state_machine__32400__auto__);

(statearr_33077[(1)] = (1));

return statearr_33077;
});
var cljs$core$async$transduce_$_state_machine__32400__auto____1 = (function (state_33075){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33075);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33078){var ex__32403__auto__ = e33078;
var statearr_33079_34919 = state_33075;
(statearr_33079_34919[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33075[(4)]))){
var statearr_33080_34920 = state_33075;
(statearr_33080_34920[(1)] = cljs.core.first((state_33075[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34921 = state_33075;
state_33075 = G__34921;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32400__auto__ = function(state_33075){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32400__auto____1.call(this,state_33075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32400__auto____0;
cljs$core$async$transduce_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32400__auto____1;
return cljs$core$async$transduce_$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_33081 = f__32493__auto__();
(statearr_33081[(6)] = c__32492__auto__);

return statearr_33081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
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
var G__33083 = arguments.length;
switch (G__33083) {
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
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_33108){
var state_val_33109 = (state_33108[(1)]);
if((state_val_33109 === (7))){
var inst_33090 = (state_33108[(2)]);
var state_33108__$1 = state_33108;
var statearr_33110_34923 = state_33108__$1;
(statearr_33110_34923[(2)] = inst_33090);

(statearr_33110_34923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (1))){
var inst_33084 = cljs.core.seq(coll);
var inst_33085 = inst_33084;
var state_33108__$1 = (function (){var statearr_33111 = state_33108;
(statearr_33111[(7)] = inst_33085);

return statearr_33111;
})();
var statearr_33112_34924 = state_33108__$1;
(statearr_33112_34924[(2)] = null);

(statearr_33112_34924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (4))){
var inst_33085 = (state_33108[(7)]);
var inst_33088 = cljs.core.first(inst_33085);
var state_33108__$1 = state_33108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33108__$1,(7),ch,inst_33088);
} else {
if((state_val_33109 === (13))){
var inst_33102 = (state_33108[(2)]);
var state_33108__$1 = state_33108;
var statearr_33113_34925 = state_33108__$1;
(statearr_33113_34925[(2)] = inst_33102);

(statearr_33113_34925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (6))){
var inst_33093 = (state_33108[(2)]);
var state_33108__$1 = state_33108;
if(cljs.core.truth_(inst_33093)){
var statearr_33114_34926 = state_33108__$1;
(statearr_33114_34926[(1)] = (8));

} else {
var statearr_33115_34927 = state_33108__$1;
(statearr_33115_34927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (3))){
var inst_33106 = (state_33108[(2)]);
var state_33108__$1 = state_33108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33108__$1,inst_33106);
} else {
if((state_val_33109 === (12))){
var state_33108__$1 = state_33108;
var statearr_33116_34928 = state_33108__$1;
(statearr_33116_34928[(2)] = null);

(statearr_33116_34928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (2))){
var inst_33085 = (state_33108[(7)]);
var state_33108__$1 = state_33108;
if(cljs.core.truth_(inst_33085)){
var statearr_33117_34929 = state_33108__$1;
(statearr_33117_34929[(1)] = (4));

} else {
var statearr_33118_34930 = state_33108__$1;
(statearr_33118_34930[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (11))){
var inst_33099 = cljs.core.async.close_BANG_(ch);
var state_33108__$1 = state_33108;
var statearr_33119_34931 = state_33108__$1;
(statearr_33119_34931[(2)] = inst_33099);

(statearr_33119_34931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (9))){
var state_33108__$1 = state_33108;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33120_34932 = state_33108__$1;
(statearr_33120_34932[(1)] = (11));

} else {
var statearr_33121_34933 = state_33108__$1;
(statearr_33121_34933[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (5))){
var inst_33085 = (state_33108[(7)]);
var state_33108__$1 = state_33108;
var statearr_33122_34934 = state_33108__$1;
(statearr_33122_34934[(2)] = inst_33085);

(statearr_33122_34934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (10))){
var inst_33104 = (state_33108[(2)]);
var state_33108__$1 = state_33108;
var statearr_33123_34935 = state_33108__$1;
(statearr_33123_34935[(2)] = inst_33104);

(statearr_33123_34935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (8))){
var inst_33085 = (state_33108[(7)]);
var inst_33095 = cljs.core.next(inst_33085);
var inst_33085__$1 = inst_33095;
var state_33108__$1 = (function (){var statearr_33124 = state_33108;
(statearr_33124[(7)] = inst_33085__$1);

return statearr_33124;
})();
var statearr_33125_34936 = state_33108__$1;
(statearr_33125_34936[(2)] = null);

(statearr_33125_34936[(1)] = (2));


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
var statearr_33126 = [null,null,null,null,null,null,null,null];
(statearr_33126[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_33126[(1)] = (1));

return statearr_33126;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_33108){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33108);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33127){var ex__32403__auto__ = e33127;
var statearr_33128_34939 = state_33108;
(statearr_33128_34939[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33108[(4)]))){
var statearr_33129_34940 = state_33108;
(statearr_33129_34940[(1)] = cljs.core.first((state_33108[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34941 = state_33108;
state_33108 = G__34941;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_33108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_33108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_33130 = f__32493__auto__();
(statearr_33130[(6)] = c__32492__auto__);

return statearr_33130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
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
var G__33138 = arguments.length;
switch (G__33138) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34943 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34943(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34944 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34944(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34945 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34945(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34946 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34946(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33146 = (function (ch,cs,meta33147){
this.ch = ch;
this.cs = cs;
this.meta33147 = meta33147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33148,meta33147__$1){
var self__ = this;
var _33148__$1 = this;
return (new cljs.core.async.t_cljs$core$async33146(self__.ch,self__.cs,meta33147__$1));
}));

(cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33148){
var self__ = this;
var _33148__$1 = this;
return self__.meta33147;
}));

(cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33146.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33147","meta33147",1715278262,null)], null);
}));

(cljs.core.async.t_cljs$core$async33146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33146");

(cljs.core.async.t_cljs$core$async33146.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33146.
 */
cljs.core.async.__GT_t_cljs$core$async33146 = (function cljs$core$async$__GT_t_cljs$core$async33146(ch,cs,meta33147){
return (new cljs.core.async.t_cljs$core$async33146(ch,cs,meta33147));
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
var m = (new cljs.core.async.t_cljs$core$async33146(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32492__auto___34947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_33290){
var state_val_33291 = (state_33290[(1)]);
if((state_val_33291 === (7))){
var inst_33286 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33292_34948 = state_33290__$1;
(statearr_33292_34948[(2)] = inst_33286);

(statearr_33292_34948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (20))){
var inst_33191 = (state_33290[(7)]);
var inst_33203 = cljs.core.first(inst_33191);
var inst_33204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33203,(0),null);
var inst_33205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33203,(1),null);
var state_33290__$1 = (function (){var statearr_33295 = state_33290;
(statearr_33295[(8)] = inst_33204);

return statearr_33295;
})();
if(cljs.core.truth_(inst_33205)){
var statearr_33296_34949 = state_33290__$1;
(statearr_33296_34949[(1)] = (22));

} else {
var statearr_33297_34950 = state_33290__$1;
(statearr_33297_34950[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (27))){
var inst_33233 = (state_33290[(9)]);
var inst_33235 = (state_33290[(10)]);
var inst_33240 = (state_33290[(11)]);
var inst_33156 = (state_33290[(12)]);
var inst_33240__$1 = cljs.core._nth(inst_33233,inst_33235);
var inst_33241 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33240__$1,inst_33156,done);
var state_33290__$1 = (function (){var statearr_33300 = state_33290;
(statearr_33300[(11)] = inst_33240__$1);

return statearr_33300;
})();
if(cljs.core.truth_(inst_33241)){
var statearr_33301_34952 = state_33290__$1;
(statearr_33301_34952[(1)] = (30));

} else {
var statearr_33303_34953 = state_33290__$1;
(statearr_33303_34953[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (1))){
var state_33290__$1 = state_33290;
var statearr_33305_34954 = state_33290__$1;
(statearr_33305_34954[(2)] = null);

(statearr_33305_34954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (24))){
var inst_33191 = (state_33290[(7)]);
var inst_33210 = (state_33290[(2)]);
var inst_33211 = cljs.core.next(inst_33191);
var inst_33169 = inst_33211;
var inst_33170 = null;
var inst_33171 = (0);
var inst_33172 = (0);
var state_33290__$1 = (function (){var statearr_33310 = state_33290;
(statearr_33310[(13)] = inst_33210);

(statearr_33310[(14)] = inst_33169);

(statearr_33310[(15)] = inst_33170);

(statearr_33310[(16)] = inst_33171);

(statearr_33310[(17)] = inst_33172);

return statearr_33310;
})();
var statearr_33313_34955 = state_33290__$1;
(statearr_33313_34955[(2)] = null);

(statearr_33313_34955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (39))){
var state_33290__$1 = state_33290;
var statearr_33320_34956 = state_33290__$1;
(statearr_33320_34956[(2)] = null);

(statearr_33320_34956[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (4))){
var inst_33156 = (state_33290[(12)]);
var inst_33156__$1 = (state_33290[(2)]);
var inst_33157 = (inst_33156__$1 == null);
var state_33290__$1 = (function (){var statearr_33322 = state_33290;
(statearr_33322[(12)] = inst_33156__$1);

return statearr_33322;
})();
if(cljs.core.truth_(inst_33157)){
var statearr_33323_34958 = state_33290__$1;
(statearr_33323_34958[(1)] = (5));

} else {
var statearr_33328_34959 = state_33290__$1;
(statearr_33328_34959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (15))){
var inst_33172 = (state_33290[(17)]);
var inst_33169 = (state_33290[(14)]);
var inst_33170 = (state_33290[(15)]);
var inst_33171 = (state_33290[(16)]);
var inst_33187 = (state_33290[(2)]);
var inst_33188 = (inst_33172 + (1));
var tmp33316 = inst_33169;
var tmp33317 = inst_33171;
var tmp33318 = inst_33170;
var inst_33169__$1 = tmp33316;
var inst_33170__$1 = tmp33318;
var inst_33171__$1 = tmp33317;
var inst_33172__$1 = inst_33188;
var state_33290__$1 = (function (){var statearr_33329 = state_33290;
(statearr_33329[(18)] = inst_33187);

(statearr_33329[(14)] = inst_33169__$1);

(statearr_33329[(15)] = inst_33170__$1);

(statearr_33329[(16)] = inst_33171__$1);

(statearr_33329[(17)] = inst_33172__$1);

return statearr_33329;
})();
var statearr_33330_34961 = state_33290__$1;
(statearr_33330_34961[(2)] = null);

(statearr_33330_34961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (21))){
var inst_33214 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33338_34962 = state_33290__$1;
(statearr_33338_34962[(2)] = inst_33214);

(statearr_33338_34962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (31))){
var inst_33240 = (state_33290[(11)]);
var inst_33244 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33240);
var state_33290__$1 = state_33290;
var statearr_33342_34963 = state_33290__$1;
(statearr_33342_34963[(2)] = inst_33244);

(statearr_33342_34963[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (32))){
var inst_33235 = (state_33290[(10)]);
var inst_33232 = (state_33290[(19)]);
var inst_33233 = (state_33290[(9)]);
var inst_33234 = (state_33290[(20)]);
var inst_33246 = (state_33290[(2)]);
var inst_33247 = (inst_33235 + (1));
var tmp33331 = inst_33233;
var tmp33332 = inst_33232;
var tmp33333 = inst_33234;
var inst_33232__$1 = tmp33332;
var inst_33233__$1 = tmp33331;
var inst_33234__$1 = tmp33333;
var inst_33235__$1 = inst_33247;
var state_33290__$1 = (function (){var statearr_33343 = state_33290;
(statearr_33343[(21)] = inst_33246);

(statearr_33343[(19)] = inst_33232__$1);

(statearr_33343[(9)] = inst_33233__$1);

(statearr_33343[(20)] = inst_33234__$1);

(statearr_33343[(10)] = inst_33235__$1);

return statearr_33343;
})();
var statearr_33344_34964 = state_33290__$1;
(statearr_33344_34964[(2)] = null);

(statearr_33344_34964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (40))){
var inst_33259 = (state_33290[(22)]);
var inst_33263 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33259);
var state_33290__$1 = state_33290;
var statearr_33346_34965 = state_33290__$1;
(statearr_33346_34965[(2)] = inst_33263);

(statearr_33346_34965[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (33))){
var inst_33250 = (state_33290[(23)]);
var inst_33252 = cljs.core.chunked_seq_QMARK_(inst_33250);
var state_33290__$1 = state_33290;
if(inst_33252){
var statearr_33351_34966 = state_33290__$1;
(statearr_33351_34966[(1)] = (36));

} else {
var statearr_33352_34967 = state_33290__$1;
(statearr_33352_34967[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (13))){
var inst_33181 = (state_33290[(24)]);
var inst_33184 = cljs.core.async.close_BANG_(inst_33181);
var state_33290__$1 = state_33290;
var statearr_33353_34968 = state_33290__$1;
(statearr_33353_34968[(2)] = inst_33184);

(statearr_33353_34968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (22))){
var inst_33204 = (state_33290[(8)]);
var inst_33207 = cljs.core.async.close_BANG_(inst_33204);
var state_33290__$1 = state_33290;
var statearr_33355_34969 = state_33290__$1;
(statearr_33355_34969[(2)] = inst_33207);

(statearr_33355_34969[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (36))){
var inst_33250 = (state_33290[(23)]);
var inst_33254 = cljs.core.chunk_first(inst_33250);
var inst_33255 = cljs.core.chunk_rest(inst_33250);
var inst_33256 = cljs.core.count(inst_33254);
var inst_33232 = inst_33255;
var inst_33233 = inst_33254;
var inst_33234 = inst_33256;
var inst_33235 = (0);
var state_33290__$1 = (function (){var statearr_33360 = state_33290;
(statearr_33360[(19)] = inst_33232);

(statearr_33360[(9)] = inst_33233);

(statearr_33360[(20)] = inst_33234);

(statearr_33360[(10)] = inst_33235);

return statearr_33360;
})();
var statearr_33364_34970 = state_33290__$1;
(statearr_33364_34970[(2)] = null);

(statearr_33364_34970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (41))){
var inst_33250 = (state_33290[(23)]);
var inst_33265 = (state_33290[(2)]);
var inst_33266 = cljs.core.next(inst_33250);
var inst_33232 = inst_33266;
var inst_33233 = null;
var inst_33234 = (0);
var inst_33235 = (0);
var state_33290__$1 = (function (){var statearr_33365 = state_33290;
(statearr_33365[(25)] = inst_33265);

(statearr_33365[(19)] = inst_33232);

(statearr_33365[(9)] = inst_33233);

(statearr_33365[(20)] = inst_33234);

(statearr_33365[(10)] = inst_33235);

return statearr_33365;
})();
var statearr_33366_34971 = state_33290__$1;
(statearr_33366_34971[(2)] = null);

(statearr_33366_34971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (43))){
var state_33290__$1 = state_33290;
var statearr_33367_34972 = state_33290__$1;
(statearr_33367_34972[(2)] = null);

(statearr_33367_34972[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (29))){
var inst_33274 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33368_34973 = state_33290__$1;
(statearr_33368_34973[(2)] = inst_33274);

(statearr_33368_34973[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (44))){
var inst_33283 = (state_33290[(2)]);
var state_33290__$1 = (function (){var statearr_33369 = state_33290;
(statearr_33369[(26)] = inst_33283);

return statearr_33369;
})();
var statearr_33370_34974 = state_33290__$1;
(statearr_33370_34974[(2)] = null);

(statearr_33370_34974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (6))){
var inst_33224 = (state_33290[(27)]);
var inst_33223 = cljs.core.deref(cs);
var inst_33224__$1 = cljs.core.keys(inst_33223);
var inst_33225 = cljs.core.count(inst_33224__$1);
var inst_33226 = cljs.core.reset_BANG_(dctr,inst_33225);
var inst_33231 = cljs.core.seq(inst_33224__$1);
var inst_33232 = inst_33231;
var inst_33233 = null;
var inst_33234 = (0);
var inst_33235 = (0);
var state_33290__$1 = (function (){var statearr_33383 = state_33290;
(statearr_33383[(27)] = inst_33224__$1);

(statearr_33383[(28)] = inst_33226);

(statearr_33383[(19)] = inst_33232);

(statearr_33383[(9)] = inst_33233);

(statearr_33383[(20)] = inst_33234);

(statearr_33383[(10)] = inst_33235);

return statearr_33383;
})();
var statearr_33384_34975 = state_33290__$1;
(statearr_33384_34975[(2)] = null);

(statearr_33384_34975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (28))){
var inst_33232 = (state_33290[(19)]);
var inst_33250 = (state_33290[(23)]);
var inst_33250__$1 = cljs.core.seq(inst_33232);
var state_33290__$1 = (function (){var statearr_33386 = state_33290;
(statearr_33386[(23)] = inst_33250__$1);

return statearr_33386;
})();
if(inst_33250__$1){
var statearr_33387_34976 = state_33290__$1;
(statearr_33387_34976[(1)] = (33));

} else {
var statearr_33388_34977 = state_33290__$1;
(statearr_33388_34977[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (25))){
var inst_33235 = (state_33290[(10)]);
var inst_33234 = (state_33290[(20)]);
var inst_33237 = (inst_33235 < inst_33234);
var inst_33238 = inst_33237;
var state_33290__$1 = state_33290;
if(cljs.core.truth_(inst_33238)){
var statearr_33389_34978 = state_33290__$1;
(statearr_33389_34978[(1)] = (27));

} else {
var statearr_33393_34979 = state_33290__$1;
(statearr_33393_34979[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (34))){
var state_33290__$1 = state_33290;
var statearr_33395_34980 = state_33290__$1;
(statearr_33395_34980[(2)] = null);

(statearr_33395_34980[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (17))){
var state_33290__$1 = state_33290;
var statearr_33396_34981 = state_33290__$1;
(statearr_33396_34981[(2)] = null);

(statearr_33396_34981[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (3))){
var inst_33288 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33290__$1,inst_33288);
} else {
if((state_val_33291 === (12))){
var inst_33219 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33398_34982 = state_33290__$1;
(statearr_33398_34982[(2)] = inst_33219);

(statearr_33398_34982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (2))){
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33290__$1,(4),ch);
} else {
if((state_val_33291 === (23))){
var state_33290__$1 = state_33290;
var statearr_33404_34983 = state_33290__$1;
(statearr_33404_34983[(2)] = null);

(statearr_33404_34983[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (35))){
var inst_33272 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33405_34984 = state_33290__$1;
(statearr_33405_34984[(2)] = inst_33272);

(statearr_33405_34984[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (19))){
var inst_33191 = (state_33290[(7)]);
var inst_33195 = cljs.core.chunk_first(inst_33191);
var inst_33196 = cljs.core.chunk_rest(inst_33191);
var inst_33197 = cljs.core.count(inst_33195);
var inst_33169 = inst_33196;
var inst_33170 = inst_33195;
var inst_33171 = inst_33197;
var inst_33172 = (0);
var state_33290__$1 = (function (){var statearr_33407 = state_33290;
(statearr_33407[(14)] = inst_33169);

(statearr_33407[(15)] = inst_33170);

(statearr_33407[(16)] = inst_33171);

(statearr_33407[(17)] = inst_33172);

return statearr_33407;
})();
var statearr_33420_34985 = state_33290__$1;
(statearr_33420_34985[(2)] = null);

(statearr_33420_34985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (11))){
var inst_33169 = (state_33290[(14)]);
var inst_33191 = (state_33290[(7)]);
var inst_33191__$1 = cljs.core.seq(inst_33169);
var state_33290__$1 = (function (){var statearr_33421 = state_33290;
(statearr_33421[(7)] = inst_33191__$1);

return statearr_33421;
})();
if(inst_33191__$1){
var statearr_33422_34986 = state_33290__$1;
(statearr_33422_34986[(1)] = (16));

} else {
var statearr_33423_34987 = state_33290__$1;
(statearr_33423_34987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (9))){
var inst_33221 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33424_34988 = state_33290__$1;
(statearr_33424_34988[(2)] = inst_33221);

(statearr_33424_34988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (5))){
var inst_33163 = cljs.core.deref(cs);
var inst_33164 = cljs.core.seq(inst_33163);
var inst_33169 = inst_33164;
var inst_33170 = null;
var inst_33171 = (0);
var inst_33172 = (0);
var state_33290__$1 = (function (){var statearr_33425 = state_33290;
(statearr_33425[(14)] = inst_33169);

(statearr_33425[(15)] = inst_33170);

(statearr_33425[(16)] = inst_33171);

(statearr_33425[(17)] = inst_33172);

return statearr_33425;
})();
var statearr_33426_34990 = state_33290__$1;
(statearr_33426_34990[(2)] = null);

(statearr_33426_34990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (14))){
var state_33290__$1 = state_33290;
var statearr_33427_34991 = state_33290__$1;
(statearr_33427_34991[(2)] = null);

(statearr_33427_34991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (45))){
var inst_33280 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33435_34994 = state_33290__$1;
(statearr_33435_34994[(2)] = inst_33280);

(statearr_33435_34994[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (26))){
var inst_33224 = (state_33290[(27)]);
var inst_33276 = (state_33290[(2)]);
var inst_33277 = cljs.core.seq(inst_33224);
var state_33290__$1 = (function (){var statearr_33436 = state_33290;
(statearr_33436[(29)] = inst_33276);

return statearr_33436;
})();
if(inst_33277){
var statearr_33438_34996 = state_33290__$1;
(statearr_33438_34996[(1)] = (42));

} else {
var statearr_33439_34997 = state_33290__$1;
(statearr_33439_34997[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (16))){
var inst_33191 = (state_33290[(7)]);
var inst_33193 = cljs.core.chunked_seq_QMARK_(inst_33191);
var state_33290__$1 = state_33290;
if(inst_33193){
var statearr_33441_35001 = state_33290__$1;
(statearr_33441_35001[(1)] = (19));

} else {
var statearr_33442_35002 = state_33290__$1;
(statearr_33442_35002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (38))){
var inst_33269 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33444_35003 = state_33290__$1;
(statearr_33444_35003[(2)] = inst_33269);

(statearr_33444_35003[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (30))){
var state_33290__$1 = state_33290;
var statearr_33445_35004 = state_33290__$1;
(statearr_33445_35004[(2)] = null);

(statearr_33445_35004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (10))){
var inst_33170 = (state_33290[(15)]);
var inst_33172 = (state_33290[(17)]);
var inst_33180 = cljs.core._nth(inst_33170,inst_33172);
var inst_33181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33180,(0),null);
var inst_33182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33180,(1),null);
var state_33290__$1 = (function (){var statearr_33447 = state_33290;
(statearr_33447[(24)] = inst_33181);

return statearr_33447;
})();
if(cljs.core.truth_(inst_33182)){
var statearr_33449_35008 = state_33290__$1;
(statearr_33449_35008[(1)] = (13));

} else {
var statearr_33450_35009 = state_33290__$1;
(statearr_33450_35009[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (18))){
var inst_33217 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33451_35010 = state_33290__$1;
(statearr_33451_35010[(2)] = inst_33217);

(statearr_33451_35010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (42))){
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33290__$1,(45),dchan);
} else {
if((state_val_33291 === (37))){
var inst_33250 = (state_33290[(23)]);
var inst_33259 = (state_33290[(22)]);
var inst_33156 = (state_33290[(12)]);
var inst_33259__$1 = cljs.core.first(inst_33250);
var inst_33260 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33259__$1,inst_33156,done);
var state_33290__$1 = (function (){var statearr_33454 = state_33290;
(statearr_33454[(22)] = inst_33259__$1);

return statearr_33454;
})();
if(cljs.core.truth_(inst_33260)){
var statearr_33455_35011 = state_33290__$1;
(statearr_33455_35011[(1)] = (39));

} else {
var statearr_33456_35012 = state_33290__$1;
(statearr_33456_35012[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (8))){
var inst_33172 = (state_33290[(17)]);
var inst_33171 = (state_33290[(16)]);
var inst_33174 = (inst_33172 < inst_33171);
var inst_33175 = inst_33174;
var state_33290__$1 = state_33290;
if(cljs.core.truth_(inst_33175)){
var statearr_33458_35013 = state_33290__$1;
(statearr_33458_35013[(1)] = (10));

} else {
var statearr_33460_35014 = state_33290__$1;
(statearr_33460_35014[(1)] = (11));

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
var statearr_33461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33461[(0)] = cljs$core$async$mult_$_state_machine__32400__auto__);

(statearr_33461[(1)] = (1));

return statearr_33461;
});
var cljs$core$async$mult_$_state_machine__32400__auto____1 = (function (state_33290){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33290);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33466){var ex__32403__auto__ = e33466;
var statearr_33467_35017 = state_33290;
(statearr_33467_35017[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33290[(4)]))){
var statearr_33468_35018 = state_33290;
(statearr_33468_35018[(1)] = cljs.core.first((state_33290[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35019 = state_33290;
state_33290 = G__35019;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32400__auto__ = function(state_33290){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32400__auto____1.call(this,state_33290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32400__auto____0;
cljs$core$async$mult_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32400__auto____1;
return cljs$core$async$mult_$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_33469 = f__32493__auto__();
(statearr_33469[(6)] = c__32492__auto___34947);

return statearr_33469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
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
var G__33473 = arguments.length;
switch (G__33473) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35021 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35021(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35022 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35022(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35023 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35023(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35025 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35025(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35026 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35026(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35027 = arguments.length;
var i__5750__auto___35028 = (0);
while(true){
if((i__5750__auto___35028 < len__5749__auto___35027)){
args__5755__auto__.push((arguments[i__5750__auto___35028]));

var G__35029 = (i__5750__auto___35028 + (1));
i__5750__auto___35028 = G__35029;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33512){
var map__33513 = p__33512;
var map__33513__$1 = cljs.core.__destructure_map(map__33513);
var opts = map__33513__$1;
var statearr_33514_35030 = state;
(statearr_33514_35030[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33521_35031 = state;
(statearr_33521_35031[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33525_35032 = state;
(statearr_33525_35032[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33502){
var G__33503 = cljs.core.first(seq33502);
var seq33502__$1 = cljs.core.next(seq33502);
var G__33504 = cljs.core.first(seq33502__$1);
var seq33502__$2 = cljs.core.next(seq33502__$1);
var G__33505 = cljs.core.first(seq33502__$2);
var seq33502__$3 = cljs.core.next(seq33502__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33503,G__33504,G__33505,seq33502__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33541 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33542){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33542 = meta33542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33543,meta33542__$1){
var self__ = this;
var _33543__$1 = this;
return (new cljs.core.async.t_cljs$core$async33541(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33542__$1));
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33543){
var self__ = this;
var _33543__$1 = this;
return self__.meta33542;
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33541.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33542","meta33542",346955620,null)], null);
}));

(cljs.core.async.t_cljs$core$async33541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33541");

(cljs.core.async.t_cljs$core$async33541.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33541.
 */
cljs.core.async.__GT_t_cljs$core$async33541 = (function cljs$core$async$__GT_t_cljs$core$async33541(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33542){
return (new cljs.core.async.t_cljs$core$async33541(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33542));
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
var m = (new cljs.core.async.t_cljs$core$async33541(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32492__auto___35042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_33638){
var state_val_33640 = (state_33638[(1)]);
if((state_val_33640 === (7))){
var inst_33593 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
if(cljs.core.truth_(inst_33593)){
var statearr_33643_35043 = state_33638__$1;
(statearr_33643_35043[(1)] = (8));

} else {
var statearr_33644_35044 = state_33638__$1;
(statearr_33644_35044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (20))){
var inst_33586 = (state_33638[(7)]);
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33638__$1,(23),out,inst_33586);
} else {
if((state_val_33640 === (1))){
var inst_33566 = calc_state();
var inst_33567 = cljs.core.__destructure_map(inst_33566);
var inst_33568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33567,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33567,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33567,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33571 = inst_33566;
var state_33638__$1 = (function (){var statearr_33649 = state_33638;
(statearr_33649[(8)] = inst_33568);

(statearr_33649[(9)] = inst_33569);

(statearr_33649[(10)] = inst_33570);

(statearr_33649[(11)] = inst_33571);

return statearr_33649;
})();
var statearr_33650_35046 = state_33638__$1;
(statearr_33650_35046[(2)] = null);

(statearr_33650_35046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (24))){
var inst_33576 = (state_33638[(12)]);
var inst_33571 = inst_33576;
var state_33638__$1 = (function (){var statearr_33651 = state_33638;
(statearr_33651[(11)] = inst_33571);

return statearr_33651;
})();
var statearr_33652_35047 = state_33638__$1;
(statearr_33652_35047[(2)] = null);

(statearr_33652_35047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (4))){
var inst_33586 = (state_33638[(7)]);
var inst_33588 = (state_33638[(13)]);
var inst_33585 = (state_33638[(2)]);
var inst_33586__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33585,(0),null);
var inst_33587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33585,(1),null);
var inst_33588__$1 = (inst_33586__$1 == null);
var state_33638__$1 = (function (){var statearr_33657 = state_33638;
(statearr_33657[(7)] = inst_33586__$1);

(statearr_33657[(14)] = inst_33587);

(statearr_33657[(13)] = inst_33588__$1);

return statearr_33657;
})();
if(cljs.core.truth_(inst_33588__$1)){
var statearr_33658_35049 = state_33638__$1;
(statearr_33658_35049[(1)] = (5));

} else {
var statearr_33659_35050 = state_33638__$1;
(statearr_33659_35050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (15))){
var inst_33577 = (state_33638[(15)]);
var inst_33607 = (state_33638[(16)]);
var inst_33607__$1 = cljs.core.empty_QMARK_(inst_33577);
var state_33638__$1 = (function (){var statearr_33660 = state_33638;
(statearr_33660[(16)] = inst_33607__$1);

return statearr_33660;
})();
if(inst_33607__$1){
var statearr_33662_35052 = state_33638__$1;
(statearr_33662_35052[(1)] = (17));

} else {
var statearr_33663_35053 = state_33638__$1;
(statearr_33663_35053[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (21))){
var inst_33576 = (state_33638[(12)]);
var inst_33571 = inst_33576;
var state_33638__$1 = (function (){var statearr_33664 = state_33638;
(statearr_33664[(11)] = inst_33571);

return statearr_33664;
})();
var statearr_33665_35054 = state_33638__$1;
(statearr_33665_35054[(2)] = null);

(statearr_33665_35054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (13))){
var inst_33600 = (state_33638[(2)]);
var inst_33601 = calc_state();
var inst_33571 = inst_33601;
var state_33638__$1 = (function (){var statearr_33666 = state_33638;
(statearr_33666[(17)] = inst_33600);

(statearr_33666[(11)] = inst_33571);

return statearr_33666;
})();
var statearr_33668_35056 = state_33638__$1;
(statearr_33668_35056[(2)] = null);

(statearr_33668_35056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (22))){
var inst_33629 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33669_35057 = state_33638__$1;
(statearr_33669_35057[(2)] = inst_33629);

(statearr_33669_35057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (6))){
var inst_33587 = (state_33638[(14)]);
var inst_33591 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33587,change);
var state_33638__$1 = state_33638;
var statearr_33671_35058 = state_33638__$1;
(statearr_33671_35058[(2)] = inst_33591);

(statearr_33671_35058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (25))){
var state_33638__$1 = state_33638;
var statearr_33672_35059 = state_33638__$1;
(statearr_33672_35059[(2)] = null);

(statearr_33672_35059[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (17))){
var inst_33579 = (state_33638[(18)]);
var inst_33587 = (state_33638[(14)]);
var inst_33610 = (inst_33579.cljs$core$IFn$_invoke$arity$1 ? inst_33579.cljs$core$IFn$_invoke$arity$1(inst_33587) : inst_33579.call(null,inst_33587));
var inst_33611 = cljs.core.not(inst_33610);
var state_33638__$1 = state_33638;
var statearr_33674_35060 = state_33638__$1;
(statearr_33674_35060[(2)] = inst_33611);

(statearr_33674_35060[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (3))){
var inst_33634 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33638__$1,inst_33634);
} else {
if((state_val_33640 === (12))){
var state_33638__$1 = state_33638;
var statearr_33675_35061 = state_33638__$1;
(statearr_33675_35061[(2)] = null);

(statearr_33675_35061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (2))){
var inst_33571 = (state_33638[(11)]);
var inst_33576 = (state_33638[(12)]);
var inst_33576__$1 = cljs.core.__destructure_map(inst_33571);
var inst_33577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33576__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33576__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33576__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33638__$1 = (function (){var statearr_33678 = state_33638;
(statearr_33678[(12)] = inst_33576__$1);

(statearr_33678[(15)] = inst_33577);

(statearr_33678[(18)] = inst_33579);

return statearr_33678;
})();
return cljs.core.async.ioc_alts_BANG_(state_33638__$1,(4),inst_33580);
} else {
if((state_val_33640 === (23))){
var inst_33620 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
if(cljs.core.truth_(inst_33620)){
var statearr_33679_35064 = state_33638__$1;
(statearr_33679_35064[(1)] = (24));

} else {
var statearr_33681_35065 = state_33638__$1;
(statearr_33681_35065[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (19))){
var inst_33615 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33684_35066 = state_33638__$1;
(statearr_33684_35066[(2)] = inst_33615);

(statearr_33684_35066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (11))){
var inst_33587 = (state_33638[(14)]);
var inst_33597 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33587);
var state_33638__$1 = state_33638;
var statearr_33688_35068 = state_33638__$1;
(statearr_33688_35068[(2)] = inst_33597);

(statearr_33688_35068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (9))){
var inst_33577 = (state_33638[(15)]);
var inst_33587 = (state_33638[(14)]);
var inst_33604 = (state_33638[(19)]);
var inst_33604__$1 = (inst_33577.cljs$core$IFn$_invoke$arity$1 ? inst_33577.cljs$core$IFn$_invoke$arity$1(inst_33587) : inst_33577.call(null,inst_33587));
var state_33638__$1 = (function (){var statearr_33693 = state_33638;
(statearr_33693[(19)] = inst_33604__$1);

return statearr_33693;
})();
if(cljs.core.truth_(inst_33604__$1)){
var statearr_33701_35069 = state_33638__$1;
(statearr_33701_35069[(1)] = (14));

} else {
var statearr_33702_35070 = state_33638__$1;
(statearr_33702_35070[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (5))){
var inst_33588 = (state_33638[(13)]);
var state_33638__$1 = state_33638;
var statearr_33703_35072 = state_33638__$1;
(statearr_33703_35072[(2)] = inst_33588);

(statearr_33703_35072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (14))){
var inst_33604 = (state_33638[(19)]);
var state_33638__$1 = state_33638;
var statearr_33704_35073 = state_33638__$1;
(statearr_33704_35073[(2)] = inst_33604);

(statearr_33704_35073[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (26))){
var inst_33625 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33705_35074 = state_33638__$1;
(statearr_33705_35074[(2)] = inst_33625);

(statearr_33705_35074[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (16))){
var inst_33617 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
if(cljs.core.truth_(inst_33617)){
var statearr_33706_35076 = state_33638__$1;
(statearr_33706_35076[(1)] = (20));

} else {
var statearr_33707_35077 = state_33638__$1;
(statearr_33707_35077[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (10))){
var inst_33631 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33709_35078 = state_33638__$1;
(statearr_33709_35078[(2)] = inst_33631);

(statearr_33709_35078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (18))){
var inst_33607 = (state_33638[(16)]);
var state_33638__$1 = state_33638;
var statearr_33711_35079 = state_33638__$1;
(statearr_33711_35079[(2)] = inst_33607);

(statearr_33711_35079[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33640 === (8))){
var inst_33586 = (state_33638[(7)]);
var inst_33595 = (inst_33586 == null);
var state_33638__$1 = state_33638;
if(cljs.core.truth_(inst_33595)){
var statearr_33712_35080 = state_33638__$1;
(statearr_33712_35080[(1)] = (11));

} else {
var statearr_33713_35081 = state_33638__$1;
(statearr_33713_35081[(1)] = (12));

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
var statearr_33715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33715[(0)] = cljs$core$async$mix_$_state_machine__32400__auto__);

(statearr_33715[(1)] = (1));

return statearr_33715;
});
var cljs$core$async$mix_$_state_machine__32400__auto____1 = (function (state_33638){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33638);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33719){var ex__32403__auto__ = e33719;
var statearr_33720_35082 = state_33638;
(statearr_33720_35082[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33638[(4)]))){
var statearr_33722_35083 = state_33638;
(statearr_33722_35083[(1)] = cljs.core.first((state_33638[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35084 = state_33638;
state_33638 = G__35084;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32400__auto__ = function(state_33638){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32400__auto____1.call(this,state_33638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32400__auto____0;
cljs$core$async$mix_$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32400__auto____1;
return cljs$core$async$mix_$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_33725 = f__32493__auto__();
(statearr_33725[(6)] = c__32492__auto___35042);

return statearr_33725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35085 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35085(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35086 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35086(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35087 = (function() {
var G__35088 = null;
var G__35088__1 = (function (p){
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
var G__35088__2 = (function (p,v){
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
G__35088 = function(p,v){
switch(arguments.length){
case 1:
return G__35088__1.call(this,p);
case 2:
return G__35088__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35088.cljs$core$IFn$_invoke$arity$1 = G__35088__1;
G__35088.cljs$core$IFn$_invoke$arity$2 = G__35088__2;
return G__35088;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33748 = arguments.length;
switch (G__33748) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35087(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35087(p,v);
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
cljs.core.async.t_cljs$core$async33770 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33771){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33771 = meta33771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33772,meta33771__$1){
var self__ = this;
var _33772__$1 = this;
return (new cljs.core.async.t_cljs$core$async33770(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33771__$1));
}));

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33772){
var self__ = this;
var _33772__$1 = this;
return self__.meta33771;
}));

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33770.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33771","meta33771",1800743439,null)], null);
}));

(cljs.core.async.t_cljs$core$async33770.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33770");

(cljs.core.async.t_cljs$core$async33770.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33770");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33770.
 */
cljs.core.async.__GT_t_cljs$core$async33770 = (function cljs$core$async$__GT_t_cljs$core$async33770(ch,topic_fn,buf_fn,mults,ensure_mult,meta33771){
return (new cljs.core.async.t_cljs$core$async33770(ch,topic_fn,buf_fn,mults,ensure_mult,meta33771));
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
var G__33762 = arguments.length;
switch (G__33762) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33758_SHARP_){
if(cljs.core.truth_((p1__33758_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33758_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33758_SHARP_.call(null,topic)))){
return p1__33758_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33758_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33770(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32492__auto___35096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_33871){
var state_val_33872 = (state_33871[(1)]);
if((state_val_33872 === (7))){
var inst_33865 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33875_35097 = state_33871__$1;
(statearr_33875_35097[(2)] = inst_33865);

(statearr_33875_35097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (20))){
var state_33871__$1 = state_33871;
var statearr_33876_35098 = state_33871__$1;
(statearr_33876_35098[(2)] = null);

(statearr_33876_35098[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (1))){
var state_33871__$1 = state_33871;
var statearr_33877_35099 = state_33871__$1;
(statearr_33877_35099[(2)] = null);

(statearr_33877_35099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (24))){
var inst_33847 = (state_33871[(7)]);
var inst_33857 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33847);
var state_33871__$1 = state_33871;
var statearr_33878_35100 = state_33871__$1;
(statearr_33878_35100[(2)] = inst_33857);

(statearr_33878_35100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (4))){
var inst_33788 = (state_33871[(8)]);
var inst_33788__$1 = (state_33871[(2)]);
var inst_33789 = (inst_33788__$1 == null);
var state_33871__$1 = (function (){var statearr_33880 = state_33871;
(statearr_33880[(8)] = inst_33788__$1);

return statearr_33880;
})();
if(cljs.core.truth_(inst_33789)){
var statearr_33883_35101 = state_33871__$1;
(statearr_33883_35101[(1)] = (5));

} else {
var statearr_33884_35102 = state_33871__$1;
(statearr_33884_35102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (15))){
var inst_33840 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33887_35103 = state_33871__$1;
(statearr_33887_35103[(2)] = inst_33840);

(statearr_33887_35103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (21))){
var inst_33862 = (state_33871[(2)]);
var state_33871__$1 = (function (){var statearr_33889 = state_33871;
(statearr_33889[(9)] = inst_33862);

return statearr_33889;
})();
var statearr_33890_35104 = state_33871__$1;
(statearr_33890_35104[(2)] = null);

(statearr_33890_35104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (13))){
var inst_33822 = (state_33871[(10)]);
var inst_33824 = cljs.core.chunked_seq_QMARK_(inst_33822);
var state_33871__$1 = state_33871;
if(inst_33824){
var statearr_33891_35105 = state_33871__$1;
(statearr_33891_35105[(1)] = (16));

} else {
var statearr_33892_35106 = state_33871__$1;
(statearr_33892_35106[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (22))){
var inst_33854 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
if(cljs.core.truth_(inst_33854)){
var statearr_33897_35107 = state_33871__$1;
(statearr_33897_35107[(1)] = (23));

} else {
var statearr_33898_35108 = state_33871__$1;
(statearr_33898_35108[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (6))){
var inst_33788 = (state_33871[(8)]);
var inst_33847 = (state_33871[(7)]);
var inst_33849 = (state_33871[(11)]);
var inst_33847__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33788) : topic_fn.call(null,inst_33788));
var inst_33848 = cljs.core.deref(mults);
var inst_33849__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33848,inst_33847__$1);
var state_33871__$1 = (function (){var statearr_33900 = state_33871;
(statearr_33900[(7)] = inst_33847__$1);

(statearr_33900[(11)] = inst_33849__$1);

return statearr_33900;
})();
if(cljs.core.truth_(inst_33849__$1)){
var statearr_33901_35110 = state_33871__$1;
(statearr_33901_35110[(1)] = (19));

} else {
var statearr_33902_35111 = state_33871__$1;
(statearr_33902_35111[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (25))){
var inst_33859 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33904_35112 = state_33871__$1;
(statearr_33904_35112[(2)] = inst_33859);

(statearr_33904_35112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (17))){
var inst_33822 = (state_33871[(10)]);
var inst_33831 = cljs.core.first(inst_33822);
var inst_33832 = cljs.core.async.muxch_STAR_(inst_33831);
var inst_33833 = cljs.core.async.close_BANG_(inst_33832);
var inst_33834 = cljs.core.next(inst_33822);
var inst_33799 = inst_33834;
var inst_33800 = null;
var inst_33801 = (0);
var inst_33802 = (0);
var state_33871__$1 = (function (){var statearr_33905 = state_33871;
(statearr_33905[(12)] = inst_33833);

(statearr_33905[(13)] = inst_33799);

(statearr_33905[(14)] = inst_33800);

(statearr_33905[(15)] = inst_33801);

(statearr_33905[(16)] = inst_33802);

return statearr_33905;
})();
var statearr_33906_35113 = state_33871__$1;
(statearr_33906_35113[(2)] = null);

(statearr_33906_35113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (3))){
var inst_33867 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33871__$1,inst_33867);
} else {
if((state_val_33872 === (12))){
var inst_33842 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33908_35114 = state_33871__$1;
(statearr_33908_35114[(2)] = inst_33842);

(statearr_33908_35114[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (2))){
var state_33871__$1 = state_33871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33871__$1,(4),ch);
} else {
if((state_val_33872 === (23))){
var state_33871__$1 = state_33871;
var statearr_33910_35115 = state_33871__$1;
(statearr_33910_35115[(2)] = null);

(statearr_33910_35115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (19))){
var inst_33849 = (state_33871[(11)]);
var inst_33788 = (state_33871[(8)]);
var inst_33852 = cljs.core.async.muxch_STAR_(inst_33849);
var state_33871__$1 = state_33871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33871__$1,(22),inst_33852,inst_33788);
} else {
if((state_val_33872 === (11))){
var inst_33799 = (state_33871[(13)]);
var inst_33822 = (state_33871[(10)]);
var inst_33822__$1 = cljs.core.seq(inst_33799);
var state_33871__$1 = (function (){var statearr_33911 = state_33871;
(statearr_33911[(10)] = inst_33822__$1);

return statearr_33911;
})();
if(inst_33822__$1){
var statearr_33912_35116 = state_33871__$1;
(statearr_33912_35116[(1)] = (13));

} else {
var statearr_33913_35117 = state_33871__$1;
(statearr_33913_35117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (9))){
var inst_33844 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33915_35118 = state_33871__$1;
(statearr_33915_35118[(2)] = inst_33844);

(statearr_33915_35118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (5))){
var inst_33796 = cljs.core.deref(mults);
var inst_33797 = cljs.core.vals(inst_33796);
var inst_33798 = cljs.core.seq(inst_33797);
var inst_33799 = inst_33798;
var inst_33800 = null;
var inst_33801 = (0);
var inst_33802 = (0);
var state_33871__$1 = (function (){var statearr_33916 = state_33871;
(statearr_33916[(13)] = inst_33799);

(statearr_33916[(14)] = inst_33800);

(statearr_33916[(15)] = inst_33801);

(statearr_33916[(16)] = inst_33802);

return statearr_33916;
})();
var statearr_33917_35121 = state_33871__$1;
(statearr_33917_35121[(2)] = null);

(statearr_33917_35121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (14))){
var state_33871__$1 = state_33871;
var statearr_33921_35123 = state_33871__$1;
(statearr_33921_35123[(2)] = null);

(statearr_33921_35123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (16))){
var inst_33822 = (state_33871[(10)]);
var inst_33826 = cljs.core.chunk_first(inst_33822);
var inst_33827 = cljs.core.chunk_rest(inst_33822);
var inst_33828 = cljs.core.count(inst_33826);
var inst_33799 = inst_33827;
var inst_33800 = inst_33826;
var inst_33801 = inst_33828;
var inst_33802 = (0);
var state_33871__$1 = (function (){var statearr_33922 = state_33871;
(statearr_33922[(13)] = inst_33799);

(statearr_33922[(14)] = inst_33800);

(statearr_33922[(15)] = inst_33801);

(statearr_33922[(16)] = inst_33802);

return statearr_33922;
})();
var statearr_33923_35124 = state_33871__$1;
(statearr_33923_35124[(2)] = null);

(statearr_33923_35124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (10))){
var inst_33800 = (state_33871[(14)]);
var inst_33802 = (state_33871[(16)]);
var inst_33799 = (state_33871[(13)]);
var inst_33801 = (state_33871[(15)]);
var inst_33808 = cljs.core._nth(inst_33800,inst_33802);
var inst_33813 = cljs.core.async.muxch_STAR_(inst_33808);
var inst_33814 = cljs.core.async.close_BANG_(inst_33813);
var inst_33815 = (inst_33802 + (1));
var tmp33918 = inst_33799;
var tmp33919 = inst_33800;
var tmp33920 = inst_33801;
var inst_33799__$1 = tmp33918;
var inst_33800__$1 = tmp33919;
var inst_33801__$1 = tmp33920;
var inst_33802__$1 = inst_33815;
var state_33871__$1 = (function (){var statearr_33925 = state_33871;
(statearr_33925[(17)] = inst_33814);

(statearr_33925[(13)] = inst_33799__$1);

(statearr_33925[(14)] = inst_33800__$1);

(statearr_33925[(15)] = inst_33801__$1);

(statearr_33925[(16)] = inst_33802__$1);

return statearr_33925;
})();
var statearr_33926_35126 = state_33871__$1;
(statearr_33926_35126[(2)] = null);

(statearr_33926_35126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (18))){
var inst_33837 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33927_35127 = state_33871__$1;
(statearr_33927_35127[(2)] = inst_33837);

(statearr_33927_35127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (8))){
var inst_33802 = (state_33871[(16)]);
var inst_33801 = (state_33871[(15)]);
var inst_33804 = (inst_33802 < inst_33801);
var inst_33805 = inst_33804;
var state_33871__$1 = state_33871;
if(cljs.core.truth_(inst_33805)){
var statearr_33935_35128 = state_33871__$1;
(statearr_33935_35128[(1)] = (10));

} else {
var statearr_33936_35129 = state_33871__$1;
(statearr_33936_35129[(1)] = (11));

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
var statearr_33942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33942[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_33942[(1)] = (1));

return statearr_33942;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_33871){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_33871);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e33943){var ex__32403__auto__ = e33943;
var statearr_33944_35130 = state_33871;
(statearr_33944_35130[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_33871[(4)]))){
var statearr_33948_35131 = state_33871;
(statearr_33948_35131[(1)] = cljs.core.first((state_33871[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35132 = state_33871;
state_33871 = G__35132;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_33871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_33871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_33956 = f__32493__auto__();
(statearr_33956[(6)] = c__32492__auto___35096);

return statearr_33956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
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
var G__33964 = arguments.length;
switch (G__33964) {
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
var G__33971 = arguments.length;
switch (G__33971) {
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
var c__32492__auto___35142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_34028){
var state_val_34029 = (state_34028[(1)]);
if((state_val_34029 === (7))){
var state_34028__$1 = state_34028;
var statearr_34031_35143 = state_34028__$1;
(statearr_34031_35143[(2)] = null);

(statearr_34031_35143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (1))){
var state_34028__$1 = state_34028;
var statearr_34036_35144 = state_34028__$1;
(statearr_34036_35144[(2)] = null);

(statearr_34036_35144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (4))){
var inst_33978 = (state_34028[(7)]);
var inst_33977 = (state_34028[(8)]);
var inst_33980 = (inst_33978 < inst_33977);
var state_34028__$1 = state_34028;
if(cljs.core.truth_(inst_33980)){
var statearr_34037_35149 = state_34028__$1;
(statearr_34037_35149[(1)] = (6));

} else {
var statearr_34038_35150 = state_34028__$1;
(statearr_34038_35150[(1)] = (7));

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
var statearr_34040_35151 = state_34028__$1;
(statearr_34040_35151[(1)] = (14));

} else {
var statearr_34041_35152 = state_34028__$1;
(statearr_34041_35152[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (6))){
var state_34028__$1 = state_34028;
var statearr_34042_35153 = state_34028__$1;
(statearr_34042_35153[(2)] = null);

(statearr_34042_35153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (17))){
var inst_34018 = (state_34028[(2)]);
var state_34028__$1 = (function (){var statearr_34050 = state_34028;
(statearr_34050[(10)] = inst_34018);

return statearr_34050;
})();
var statearr_34051_35154 = state_34028__$1;
(statearr_34051_35154[(2)] = null);

(statearr_34051_35154[(1)] = (2));


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
var statearr_34053_35155 = state_34028__$1;
(statearr_34053_35155[(5)] = ex34048);


if((ex34048 instanceof Object)){
var statearr_34054_35156 = state_34028__$1;
(statearr_34054_35156[(1)] = (11));

(statearr_34054_35156[(5)] = null);

} else {
throw ex34048;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (2))){
var inst_33976 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33977 = cnt;
var inst_33978 = (0);
var state_34028__$1 = (function (){var statearr_34062 = state_34028;
(statearr_34062[(11)] = inst_33976);

(statearr_34062[(8)] = inst_33977);

(statearr_34062[(7)] = inst_33978);

return statearr_34062;
})();
var statearr_34063_35157 = state_34028__$1;
(statearr_34063_35157[(2)] = null);

(statearr_34063_35157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (11))){
var inst_33990 = (state_34028[(2)]);
var inst_33991 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34028__$1 = (function (){var statearr_34065 = state_34028;
(statearr_34065[(12)] = inst_33990);

return statearr_34065;
})();
var statearr_34066_35158 = state_34028__$1;
(statearr_34066_35158[(2)] = inst_33991);

(statearr_34066_35158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (9))){
var inst_33978 = (state_34028[(7)]);
var _ = (function (){var statearr_34067 = state_34028;
(statearr_34067[(4)] = cljs.core.cons((12),(state_34028[(4)])));

return statearr_34067;
})();
var inst_33997 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33978) : chs__$1.call(null,inst_33978));
var inst_33998 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33978) : done.call(null,inst_33978));
var inst_33999 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33997,inst_33998);
var ___$1 = (function (){var statearr_34070 = state_34028;
(statearr_34070[(4)] = cljs.core.rest((state_34028[(4)])));

return statearr_34070;
})();
var state_34028__$1 = state_34028;
var statearr_34071_35159 = state_34028__$1;
(statearr_34071_35159[(2)] = inst_33999);

(statearr_34071_35159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (5))){
var inst_34009 = (state_34028[(2)]);
var state_34028__$1 = (function (){var statearr_34072 = state_34028;
(statearr_34072[(13)] = inst_34009);

return statearr_34072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34028__$1,(13),dchan);
} else {
if((state_val_34029 === (14))){
var inst_34014 = cljs.core.async.close_BANG_(out);
var state_34028__$1 = state_34028;
var statearr_34073_35160 = state_34028__$1;
(statearr_34073_35160[(2)] = inst_34014);

(statearr_34073_35160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (16))){
var inst_34021 = (state_34028[(2)]);
var state_34028__$1 = state_34028;
var statearr_34074_35161 = state_34028__$1;
(statearr_34074_35161[(2)] = inst_34021);

(statearr_34074_35161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (10))){
var inst_33978 = (state_34028[(7)]);
var inst_34002 = (state_34028[(2)]);
var inst_34003 = (inst_33978 + (1));
var inst_33978__$1 = inst_34003;
var state_34028__$1 = (function (){var statearr_34078 = state_34028;
(statearr_34078[(14)] = inst_34002);

(statearr_34078[(7)] = inst_33978__$1);

return statearr_34078;
})();
var statearr_34082_35162 = state_34028__$1;
(statearr_34082_35162[(2)] = null);

(statearr_34082_35162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34029 === (8))){
var inst_34007 = (state_34028[(2)]);
var state_34028__$1 = state_34028;
var statearr_34083_35163 = state_34028__$1;
(statearr_34083_35163[(2)] = inst_34007);

(statearr_34083_35163[(1)] = (5));


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
var statearr_34084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34084[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34084[(1)] = (1));

return statearr_34084;
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
}catch (e34085){var ex__32403__auto__ = e34085;
var statearr_34086_35164 = state_34028;
(statearr_34086_35164[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34028[(4)]))){
var statearr_34087_35165 = state_34028;
(statearr_34087_35165[(1)] = cljs.core.first((state_34028[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35166 = state_34028;
state_34028 = G__35166;
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
var state__32494__auto__ = (function (){var statearr_34089 = f__32493__auto__();
(statearr_34089[(6)] = c__32492__auto___35142);

return statearr_34089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
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
var G__34093 = arguments.length;
switch (G__34093) {
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
var c__32492__auto___35168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_34127){
var state_val_34128 = (state_34127[(1)]);
if((state_val_34128 === (7))){
var inst_34106 = (state_34127[(7)]);
var inst_34107 = (state_34127[(8)]);
var inst_34106__$1 = (state_34127[(2)]);
var inst_34107__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34106__$1,(0),null);
var inst_34108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34106__$1,(1),null);
var inst_34109 = (inst_34107__$1 == null);
var state_34127__$1 = (function (){var statearr_34130 = state_34127;
(statearr_34130[(7)] = inst_34106__$1);

(statearr_34130[(8)] = inst_34107__$1);

(statearr_34130[(9)] = inst_34108);

return statearr_34130;
})();
if(cljs.core.truth_(inst_34109)){
var statearr_34132_35169 = state_34127__$1;
(statearr_34132_35169[(1)] = (8));

} else {
var statearr_34133_35170 = state_34127__$1;
(statearr_34133_35170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (1))){
var inst_34096 = cljs.core.vec(chs);
var inst_34097 = inst_34096;
var state_34127__$1 = (function (){var statearr_34134 = state_34127;
(statearr_34134[(10)] = inst_34097);

return statearr_34134;
})();
var statearr_34135_35171 = state_34127__$1;
(statearr_34135_35171[(2)] = null);

(statearr_34135_35171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (4))){
var inst_34097 = (state_34127[(10)]);
var state_34127__$1 = state_34127;
return cljs.core.async.ioc_alts_BANG_(state_34127__$1,(7),inst_34097);
} else {
if((state_val_34128 === (6))){
var inst_34123 = (state_34127[(2)]);
var state_34127__$1 = state_34127;
var statearr_34136_35172 = state_34127__$1;
(statearr_34136_35172[(2)] = inst_34123);

(statearr_34136_35172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (3))){
var inst_34125 = (state_34127[(2)]);
var state_34127__$1 = state_34127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34127__$1,inst_34125);
} else {
if((state_val_34128 === (2))){
var inst_34097 = (state_34127[(10)]);
var inst_34099 = cljs.core.count(inst_34097);
var inst_34100 = (inst_34099 > (0));
var state_34127__$1 = state_34127;
if(cljs.core.truth_(inst_34100)){
var statearr_34139_35173 = state_34127__$1;
(statearr_34139_35173[(1)] = (4));

} else {
var statearr_34140_35174 = state_34127__$1;
(statearr_34140_35174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (11))){
var inst_34097 = (state_34127[(10)]);
var inst_34116 = (state_34127[(2)]);
var tmp34137 = inst_34097;
var inst_34097__$1 = tmp34137;
var state_34127__$1 = (function (){var statearr_34141 = state_34127;
(statearr_34141[(11)] = inst_34116);

(statearr_34141[(10)] = inst_34097__$1);

return statearr_34141;
})();
var statearr_34142_35175 = state_34127__$1;
(statearr_34142_35175[(2)] = null);

(statearr_34142_35175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (9))){
var inst_34107 = (state_34127[(8)]);
var state_34127__$1 = state_34127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34127__$1,(11),out,inst_34107);
} else {
if((state_val_34128 === (5))){
var inst_34121 = cljs.core.async.close_BANG_(out);
var state_34127__$1 = state_34127;
var statearr_34144_35176 = state_34127__$1;
(statearr_34144_35176[(2)] = inst_34121);

(statearr_34144_35176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (10))){
var inst_34119 = (state_34127[(2)]);
var state_34127__$1 = state_34127;
var statearr_34145_35177 = state_34127__$1;
(statearr_34145_35177[(2)] = inst_34119);

(statearr_34145_35177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (8))){
var inst_34097 = (state_34127[(10)]);
var inst_34106 = (state_34127[(7)]);
var inst_34107 = (state_34127[(8)]);
var inst_34108 = (state_34127[(9)]);
var inst_34111 = (function (){var cs = inst_34097;
var vec__34102 = inst_34106;
var v = inst_34107;
var c = inst_34108;
return (function (p1__34090_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34090_SHARP_);
});
})();
var inst_34112 = cljs.core.filterv(inst_34111,inst_34097);
var inst_34097__$1 = inst_34112;
var state_34127__$1 = (function (){var statearr_34147 = state_34127;
(statearr_34147[(10)] = inst_34097__$1);

return statearr_34147;
})();
var statearr_34149_35178 = state_34127__$1;
(statearr_34149_35178[(2)] = null);

(statearr_34149_35178[(1)] = (2));


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
var statearr_34155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34155[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34155[(1)] = (1));

return statearr_34155;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34127){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34127);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34163){var ex__32403__auto__ = e34163;
var statearr_34164_35179 = state_34127;
(statearr_34164_35179[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34127[(4)]))){
var statearr_34165_35180 = state_34127;
(statearr_34165_35180[(1)] = cljs.core.first((state_34127[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35181 = state_34127;
state_34127 = G__35181;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_34166 = f__32493__auto__();
(statearr_34166[(6)] = c__32492__auto___35168);

return statearr_34166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
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
var c__32492__auto___35183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_34196){
var state_val_34197 = (state_34196[(1)]);
if((state_val_34197 === (7))){
var inst_34178 = (state_34196[(7)]);
var inst_34178__$1 = (state_34196[(2)]);
var inst_34179 = (inst_34178__$1 == null);
var inst_34180 = cljs.core.not(inst_34179);
var state_34196__$1 = (function (){var statearr_34200 = state_34196;
(statearr_34200[(7)] = inst_34178__$1);

return statearr_34200;
})();
if(inst_34180){
var statearr_34203_35184 = state_34196__$1;
(statearr_34203_35184[(1)] = (8));

} else {
var statearr_34204_35185 = state_34196__$1;
(statearr_34204_35185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (1))){
var inst_34171 = (0);
var state_34196__$1 = (function (){var statearr_34205 = state_34196;
(statearr_34205[(8)] = inst_34171);

return statearr_34205;
})();
var statearr_34206_35186 = state_34196__$1;
(statearr_34206_35186[(2)] = null);

(statearr_34206_35186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (4))){
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34196__$1,(7),ch);
} else {
if((state_val_34197 === (6))){
var inst_34191 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34207_35187 = state_34196__$1;
(statearr_34207_35187[(2)] = inst_34191);

(statearr_34207_35187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (3))){
var inst_34193 = (state_34196[(2)]);
var inst_34194 = cljs.core.async.close_BANG_(out);
var state_34196__$1 = (function (){var statearr_34212 = state_34196;
(statearr_34212[(9)] = inst_34193);

return statearr_34212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34196__$1,inst_34194);
} else {
if((state_val_34197 === (2))){
var inst_34171 = (state_34196[(8)]);
var inst_34174 = (inst_34171 < n);
var state_34196__$1 = state_34196;
if(cljs.core.truth_(inst_34174)){
var statearr_34216_35188 = state_34196__$1;
(statearr_34216_35188[(1)] = (4));

} else {
var statearr_34217_35189 = state_34196__$1;
(statearr_34217_35189[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (11))){
var inst_34171 = (state_34196[(8)]);
var inst_34183 = (state_34196[(2)]);
var inst_34184 = (inst_34171 + (1));
var inst_34171__$1 = inst_34184;
var state_34196__$1 = (function (){var statearr_34219 = state_34196;
(statearr_34219[(10)] = inst_34183);

(statearr_34219[(8)] = inst_34171__$1);

return statearr_34219;
})();
var statearr_34223_35190 = state_34196__$1;
(statearr_34223_35190[(2)] = null);

(statearr_34223_35190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (9))){
var state_34196__$1 = state_34196;
var statearr_34233_35191 = state_34196__$1;
(statearr_34233_35191[(2)] = null);

(statearr_34233_35191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (5))){
var state_34196__$1 = state_34196;
var statearr_34235_35192 = state_34196__$1;
(statearr_34235_35192[(2)] = null);

(statearr_34235_35192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (10))){
var inst_34188 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34236_35193 = state_34196__$1;
(statearr_34236_35193[(2)] = inst_34188);

(statearr_34236_35193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (8))){
var inst_34178 = (state_34196[(7)]);
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34196__$1,(11),out,inst_34178);
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
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34196){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34196);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34238){var ex__32403__auto__ = e34238;
var statearr_34239_35194 = state_34196;
(statearr_34239_35194[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34196[(4)]))){
var statearr_34240_35195 = state_34196;
(statearr_34240_35195[(1)] = cljs.core.first((state_34196[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35196 = state_34196;
state_34196 = G__35196;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_34243 = f__32493__auto__();
(statearr_34243[(6)] = c__32492__auto___35183);

return statearr_34243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
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
cljs.core.async.t_cljs$core$async34251 = (function (f,ch,meta34246,_,fn1,meta34252){
this.f = f;
this.ch = ch;
this.meta34246 = meta34246;
this._ = _;
this.fn1 = fn1;
this.meta34252 = meta34252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34253,meta34252__$1){
var self__ = this;
var _34253__$1 = this;
return (new cljs.core.async.t_cljs$core$async34251(self__.f,self__.ch,self__.meta34246,self__._,self__.fn1,meta34252__$1));
}));

(cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34253){
var self__ = this;
var _34253__$1 = this;
return self__.meta34252;
}));

(cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34244_SHARP_){
var G__34254 = (((p1__34244_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34244_SHARP_) : self__.f.call(null,p1__34244_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34254) : f1.call(null,G__34254));
});
}));

(cljs.core.async.t_cljs$core$async34251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34246","meta34246",1417801467,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34245","cljs.core.async/t_cljs$core$async34245",-1291039378,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34252","meta34252",334368649,null)], null);
}));

(cljs.core.async.t_cljs$core$async34251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34251");

(cljs.core.async.t_cljs$core$async34251.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34251.
 */
cljs.core.async.__GT_t_cljs$core$async34251 = (function cljs$core$async$__GT_t_cljs$core$async34251(f,ch,meta34246,_,fn1,meta34252){
return (new cljs.core.async.t_cljs$core$async34251(f,ch,meta34246,_,fn1,meta34252));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34245 = (function (f,ch,meta34246){
this.f = f;
this.ch = ch;
this.meta34246 = meta34246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34247,meta34246__$1){
var self__ = this;
var _34247__$1 = this;
return (new cljs.core.async.t_cljs$core$async34245(self__.f,self__.ch,meta34246__$1));
}));

(cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34247){
var self__ = this;
var _34247__$1 = this;
return self__.meta34246;
}));

(cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34251(self__.f,self__.ch,self__.meta34246,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
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

(cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34246","meta34246",1417801467,null)], null);
}));

(cljs.core.async.t_cljs$core$async34245.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34245");

(cljs.core.async.t_cljs$core$async34245.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34245");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34245.
 */
cljs.core.async.__GT_t_cljs$core$async34245 = (function cljs$core$async$__GT_t_cljs$core$async34245(f,ch,meta34246){
return (new cljs.core.async.t_cljs$core$async34245(f,ch,meta34246));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34245(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34257 = (function (f,ch,meta34258){
this.f = f;
this.ch = ch;
this.meta34258 = meta34258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34259,meta34258__$1){
var self__ = this;
var _34259__$1 = this;
return (new cljs.core.async.t_cljs$core$async34257(self__.f,self__.ch,meta34258__$1));
}));

(cljs.core.async.t_cljs$core$async34257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34259){
var self__ = this;
var _34259__$1 = this;
return self__.meta34258;
}));

(cljs.core.async.t_cljs$core$async34257.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34257.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34257.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34258","meta34258",966089893,null)], null);
}));

(cljs.core.async.t_cljs$core$async34257.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34257");

(cljs.core.async.t_cljs$core$async34257.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34257");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34257.
 */
cljs.core.async.__GT_t_cljs$core$async34257 = (function cljs$core$async$__GT_t_cljs$core$async34257(f,ch,meta34258){
return (new cljs.core.async.t_cljs$core$async34257(f,ch,meta34258));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34257(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34281 = (function (p,ch,meta34282){
this.p = p;
this.ch = ch;
this.meta34282 = meta34282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34283,meta34282__$1){
var self__ = this;
var _34283__$1 = this;
return (new cljs.core.async.t_cljs$core$async34281(self__.p,self__.ch,meta34282__$1));
}));

(cljs.core.async.t_cljs$core$async34281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34283){
var self__ = this;
var _34283__$1 = this;
return self__.meta34282;
}));

(cljs.core.async.t_cljs$core$async34281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34281.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34282","meta34282",1127259293,null)], null);
}));

(cljs.core.async.t_cljs$core$async34281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34281");

(cljs.core.async.t_cljs$core$async34281.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34281.
 */
cljs.core.async.__GT_t_cljs$core$async34281 = (function cljs$core$async$__GT_t_cljs$core$async34281(p,ch,meta34282){
return (new cljs.core.async.t_cljs$core$async34281(p,ch,meta34282));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34281(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34308 = arguments.length;
switch (G__34308) {
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
var c__32492__auto___35198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_34356){
var state_val_34357 = (state_34356[(1)]);
if((state_val_34357 === (7))){
var inst_34352 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34358_35199 = state_34356__$1;
(statearr_34358_35199[(2)] = inst_34352);

(statearr_34358_35199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (1))){
var state_34356__$1 = state_34356;
var statearr_34359_35200 = state_34356__$1;
(statearr_34359_35200[(2)] = null);

(statearr_34359_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (4))){
var inst_34338 = (state_34356[(7)]);
var inst_34338__$1 = (state_34356[(2)]);
var inst_34339 = (inst_34338__$1 == null);
var state_34356__$1 = (function (){var statearr_34360 = state_34356;
(statearr_34360[(7)] = inst_34338__$1);

return statearr_34360;
})();
if(cljs.core.truth_(inst_34339)){
var statearr_34361_35201 = state_34356__$1;
(statearr_34361_35201[(1)] = (5));

} else {
var statearr_34364_35202 = state_34356__$1;
(statearr_34364_35202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (6))){
var inst_34338 = (state_34356[(7)]);
var inst_34343 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34338) : p.call(null,inst_34338));
var state_34356__$1 = state_34356;
if(cljs.core.truth_(inst_34343)){
var statearr_34365_35203 = state_34356__$1;
(statearr_34365_35203[(1)] = (8));

} else {
var statearr_34366_35204 = state_34356__$1;
(statearr_34366_35204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (3))){
var inst_34354 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34356__$1,inst_34354);
} else {
if((state_val_34357 === (2))){
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34356__$1,(4),ch);
} else {
if((state_val_34357 === (11))){
var inst_34346 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34368_35205 = state_34356__$1;
(statearr_34368_35205[(2)] = inst_34346);

(statearr_34368_35205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (9))){
var state_34356__$1 = state_34356;
var statearr_34370_35206 = state_34356__$1;
(statearr_34370_35206[(2)] = null);

(statearr_34370_35206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (5))){
var inst_34341 = cljs.core.async.close_BANG_(out);
var state_34356__$1 = state_34356;
var statearr_34372_35207 = state_34356__$1;
(statearr_34372_35207[(2)] = inst_34341);

(statearr_34372_35207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (10))){
var inst_34349 = (state_34356[(2)]);
var state_34356__$1 = (function (){var statearr_34373 = state_34356;
(statearr_34373[(8)] = inst_34349);

return statearr_34373;
})();
var statearr_34374_35208 = state_34356__$1;
(statearr_34374_35208[(2)] = null);

(statearr_34374_35208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (8))){
var inst_34338 = (state_34356[(7)]);
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34356__$1,(11),out,inst_34338);
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
var statearr_34375 = [null,null,null,null,null,null,null,null,null];
(statearr_34375[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34375[(1)] = (1));

return statearr_34375;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34356){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34356);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34376){var ex__32403__auto__ = e34376;
var statearr_34377_35209 = state_34356;
(statearr_34377_35209[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34356[(4)]))){
var statearr_34378_35210 = state_34356;
(statearr_34378_35210[(1)] = cljs.core.first((state_34356[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35211 = state_34356;
state_34356 = G__35211;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_34379 = f__32493__auto__();
(statearr_34379[(6)] = c__32492__auto___35198);

return statearr_34379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34381 = arguments.length;
switch (G__34381) {
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
var c__32492__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_34458){
var state_val_34459 = (state_34458[(1)]);
if((state_val_34459 === (7))){
var inst_34454 = (state_34458[(2)]);
var state_34458__$1 = state_34458;
var statearr_34460_35213 = state_34458__$1;
(statearr_34460_35213[(2)] = inst_34454);

(statearr_34460_35213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (20))){
var inst_34423 = (state_34458[(7)]);
var inst_34435 = (state_34458[(2)]);
var inst_34436 = cljs.core.next(inst_34423);
var inst_34409 = inst_34436;
var inst_34410 = null;
var inst_34411 = (0);
var inst_34412 = (0);
var state_34458__$1 = (function (){var statearr_34461 = state_34458;
(statearr_34461[(8)] = inst_34435);

(statearr_34461[(9)] = inst_34409);

(statearr_34461[(10)] = inst_34410);

(statearr_34461[(11)] = inst_34411);

(statearr_34461[(12)] = inst_34412);

return statearr_34461;
})();
var statearr_34465_35214 = state_34458__$1;
(statearr_34465_35214[(2)] = null);

(statearr_34465_35214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (1))){
var state_34458__$1 = state_34458;
var statearr_34467_35215 = state_34458__$1;
(statearr_34467_35215[(2)] = null);

(statearr_34467_35215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (4))){
var inst_34397 = (state_34458[(13)]);
var inst_34397__$1 = (state_34458[(2)]);
var inst_34398 = (inst_34397__$1 == null);
var state_34458__$1 = (function (){var statearr_34468 = state_34458;
(statearr_34468[(13)] = inst_34397__$1);

return statearr_34468;
})();
if(cljs.core.truth_(inst_34398)){
var statearr_34469_35216 = state_34458__$1;
(statearr_34469_35216[(1)] = (5));

} else {
var statearr_34470_35217 = state_34458__$1;
(statearr_34470_35217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (15))){
var state_34458__$1 = state_34458;
var statearr_34474_35218 = state_34458__$1;
(statearr_34474_35218[(2)] = null);

(statearr_34474_35218[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (21))){
var state_34458__$1 = state_34458;
var statearr_34475_35219 = state_34458__$1;
(statearr_34475_35219[(2)] = null);

(statearr_34475_35219[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (13))){
var inst_34412 = (state_34458[(12)]);
var inst_34409 = (state_34458[(9)]);
var inst_34410 = (state_34458[(10)]);
var inst_34411 = (state_34458[(11)]);
var inst_34419 = (state_34458[(2)]);
var inst_34420 = (inst_34412 + (1));
var tmp34471 = inst_34410;
var tmp34472 = inst_34411;
var tmp34473 = inst_34409;
var inst_34409__$1 = tmp34473;
var inst_34410__$1 = tmp34471;
var inst_34411__$1 = tmp34472;
var inst_34412__$1 = inst_34420;
var state_34458__$1 = (function (){var statearr_34476 = state_34458;
(statearr_34476[(14)] = inst_34419);

(statearr_34476[(9)] = inst_34409__$1);

(statearr_34476[(10)] = inst_34410__$1);

(statearr_34476[(11)] = inst_34411__$1);

(statearr_34476[(12)] = inst_34412__$1);

return statearr_34476;
})();
var statearr_34477_35220 = state_34458__$1;
(statearr_34477_35220[(2)] = null);

(statearr_34477_35220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (22))){
var state_34458__$1 = state_34458;
var statearr_34479_35221 = state_34458__$1;
(statearr_34479_35221[(2)] = null);

(statearr_34479_35221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (6))){
var inst_34397 = (state_34458[(13)]);
var inst_34407 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34397) : f.call(null,inst_34397));
var inst_34408 = cljs.core.seq(inst_34407);
var inst_34409 = inst_34408;
var inst_34410 = null;
var inst_34411 = (0);
var inst_34412 = (0);
var state_34458__$1 = (function (){var statearr_34481 = state_34458;
(statearr_34481[(9)] = inst_34409);

(statearr_34481[(10)] = inst_34410);

(statearr_34481[(11)] = inst_34411);

(statearr_34481[(12)] = inst_34412);

return statearr_34481;
})();
var statearr_34482_35222 = state_34458__$1;
(statearr_34482_35222[(2)] = null);

(statearr_34482_35222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (17))){
var inst_34423 = (state_34458[(7)]);
var inst_34427 = cljs.core.chunk_first(inst_34423);
var inst_34429 = cljs.core.chunk_rest(inst_34423);
var inst_34430 = cljs.core.count(inst_34427);
var inst_34409 = inst_34429;
var inst_34410 = inst_34427;
var inst_34411 = inst_34430;
var inst_34412 = (0);
var state_34458__$1 = (function (){var statearr_34483 = state_34458;
(statearr_34483[(9)] = inst_34409);

(statearr_34483[(10)] = inst_34410);

(statearr_34483[(11)] = inst_34411);

(statearr_34483[(12)] = inst_34412);

return statearr_34483;
})();
var statearr_34484_35224 = state_34458__$1;
(statearr_34484_35224[(2)] = null);

(statearr_34484_35224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (3))){
var inst_34456 = (state_34458[(2)]);
var state_34458__$1 = state_34458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34458__$1,inst_34456);
} else {
if((state_val_34459 === (12))){
var inst_34444 = (state_34458[(2)]);
var state_34458__$1 = state_34458;
var statearr_34486_35225 = state_34458__$1;
(statearr_34486_35225[(2)] = inst_34444);

(statearr_34486_35225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (2))){
var state_34458__$1 = state_34458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34458__$1,(4),in$);
} else {
if((state_val_34459 === (23))){
var inst_34452 = (state_34458[(2)]);
var state_34458__$1 = state_34458;
var statearr_34488_35226 = state_34458__$1;
(statearr_34488_35226[(2)] = inst_34452);

(statearr_34488_35226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (19))){
var inst_34439 = (state_34458[(2)]);
var state_34458__$1 = state_34458;
var statearr_34490_35230 = state_34458__$1;
(statearr_34490_35230[(2)] = inst_34439);

(statearr_34490_35230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (11))){
var inst_34409 = (state_34458[(9)]);
var inst_34423 = (state_34458[(7)]);
var inst_34423__$1 = cljs.core.seq(inst_34409);
var state_34458__$1 = (function (){var statearr_34491 = state_34458;
(statearr_34491[(7)] = inst_34423__$1);

return statearr_34491;
})();
if(inst_34423__$1){
var statearr_34492_35231 = state_34458__$1;
(statearr_34492_35231[(1)] = (14));

} else {
var statearr_34493_35232 = state_34458__$1;
(statearr_34493_35232[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (9))){
var inst_34446 = (state_34458[(2)]);
var inst_34447 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34458__$1 = (function (){var statearr_34494 = state_34458;
(statearr_34494[(15)] = inst_34446);

return statearr_34494;
})();
if(cljs.core.truth_(inst_34447)){
var statearr_34495_35233 = state_34458__$1;
(statearr_34495_35233[(1)] = (21));

} else {
var statearr_34496_35234 = state_34458__$1;
(statearr_34496_35234[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (5))){
var inst_34401 = cljs.core.async.close_BANG_(out);
var state_34458__$1 = state_34458;
var statearr_34497_35235 = state_34458__$1;
(statearr_34497_35235[(2)] = inst_34401);

(statearr_34497_35235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (14))){
var inst_34423 = (state_34458[(7)]);
var inst_34425 = cljs.core.chunked_seq_QMARK_(inst_34423);
var state_34458__$1 = state_34458;
if(inst_34425){
var statearr_34498_35236 = state_34458__$1;
(statearr_34498_35236[(1)] = (17));

} else {
var statearr_34499_35237 = state_34458__$1;
(statearr_34499_35237[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (16))){
var inst_34442 = (state_34458[(2)]);
var state_34458__$1 = state_34458;
var statearr_34500_35238 = state_34458__$1;
(statearr_34500_35238[(2)] = inst_34442);

(statearr_34500_35238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34459 === (10))){
var inst_34410 = (state_34458[(10)]);
var inst_34412 = (state_34458[(12)]);
var inst_34417 = cljs.core._nth(inst_34410,inst_34412);
var state_34458__$1 = state_34458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34458__$1,(13),out,inst_34417);
} else {
if((state_val_34459 === (18))){
var inst_34423 = (state_34458[(7)]);
var inst_34433 = cljs.core.first(inst_34423);
var state_34458__$1 = state_34458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34458__$1,(20),out,inst_34433);
} else {
if((state_val_34459 === (8))){
var inst_34412 = (state_34458[(12)]);
var inst_34411 = (state_34458[(11)]);
var inst_34414 = (inst_34412 < inst_34411);
var inst_34415 = inst_34414;
var state_34458__$1 = state_34458;
if(cljs.core.truth_(inst_34415)){
var statearr_34501_35239 = state_34458__$1;
(statearr_34501_35239[(1)] = (10));

} else {
var statearr_34502_35240 = state_34458__$1;
(statearr_34502_35240[(1)] = (11));

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
var statearr_34503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34503[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32400__auto__);

(statearr_34503[(1)] = (1));

return statearr_34503;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32400__auto____1 = (function (state_34458){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34458);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34504){var ex__32403__auto__ = e34504;
var statearr_34505_35242 = state_34458;
(statearr_34505_35242[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34458[(4)]))){
var statearr_34506_35244 = state_34458;
(statearr_34506_35244[(1)] = cljs.core.first((state_34458[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35245 = state_34458;
state_34458 = G__35245;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32400__auto__ = function(state_34458){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32400__auto____1.call(this,state_34458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32400__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32400__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_34507 = f__32493__auto__();
(statearr_34507[(6)] = c__32492__auto__);

return statearr_34507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));

return c__32492__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34509 = arguments.length;
switch (G__34509) {
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
var G__34511 = arguments.length;
switch (G__34511) {
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
var G__34513 = arguments.length;
switch (G__34513) {
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
var c__32492__auto___35249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_34539){
var state_val_34540 = (state_34539[(1)]);
if((state_val_34540 === (7))){
var inst_34534 = (state_34539[(2)]);
var state_34539__$1 = state_34539;
var statearr_34542_35250 = state_34539__$1;
(statearr_34542_35250[(2)] = inst_34534);

(statearr_34542_35250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (1))){
var inst_34516 = null;
var state_34539__$1 = (function (){var statearr_34543 = state_34539;
(statearr_34543[(7)] = inst_34516);

return statearr_34543;
})();
var statearr_34545_35251 = state_34539__$1;
(statearr_34545_35251[(2)] = null);

(statearr_34545_35251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (4))){
var inst_34519 = (state_34539[(8)]);
var inst_34519__$1 = (state_34539[(2)]);
var inst_34520 = (inst_34519__$1 == null);
var inst_34521 = cljs.core.not(inst_34520);
var state_34539__$1 = (function (){var statearr_34547 = state_34539;
(statearr_34547[(8)] = inst_34519__$1);

return statearr_34547;
})();
if(inst_34521){
var statearr_34548_35252 = state_34539__$1;
(statearr_34548_35252[(1)] = (5));

} else {
var statearr_34549_35253 = state_34539__$1;
(statearr_34549_35253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (6))){
var state_34539__$1 = state_34539;
var statearr_34554_35254 = state_34539__$1;
(statearr_34554_35254[(2)] = null);

(statearr_34554_35254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (3))){
var inst_34536 = (state_34539[(2)]);
var inst_34537 = cljs.core.async.close_BANG_(out);
var state_34539__$1 = (function (){var statearr_34556 = state_34539;
(statearr_34556[(9)] = inst_34536);

return statearr_34556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34539__$1,inst_34537);
} else {
if((state_val_34540 === (2))){
var state_34539__$1 = state_34539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34539__$1,(4),ch);
} else {
if((state_val_34540 === (11))){
var inst_34519 = (state_34539[(8)]);
var inst_34528 = (state_34539[(2)]);
var inst_34516 = inst_34519;
var state_34539__$1 = (function (){var statearr_34557 = state_34539;
(statearr_34557[(10)] = inst_34528);

(statearr_34557[(7)] = inst_34516);

return statearr_34557;
})();
var statearr_34558_35255 = state_34539__$1;
(statearr_34558_35255[(2)] = null);

(statearr_34558_35255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (9))){
var inst_34519 = (state_34539[(8)]);
var state_34539__$1 = state_34539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34539__$1,(11),out,inst_34519);
} else {
if((state_val_34540 === (5))){
var inst_34519 = (state_34539[(8)]);
var inst_34516 = (state_34539[(7)]);
var inst_34523 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34519,inst_34516);
var state_34539__$1 = state_34539;
if(inst_34523){
var statearr_34561_35257 = state_34539__$1;
(statearr_34561_35257[(1)] = (8));

} else {
var statearr_34562_35259 = state_34539__$1;
(statearr_34562_35259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (10))){
var inst_34531 = (state_34539[(2)]);
var state_34539__$1 = state_34539;
var statearr_34563_35260 = state_34539__$1;
(statearr_34563_35260[(2)] = inst_34531);

(statearr_34563_35260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34540 === (8))){
var inst_34516 = (state_34539[(7)]);
var tmp34559 = inst_34516;
var inst_34516__$1 = tmp34559;
var state_34539__$1 = (function (){var statearr_34565 = state_34539;
(statearr_34565[(7)] = inst_34516__$1);

return statearr_34565;
})();
var statearr_34569_35261 = state_34539__$1;
(statearr_34569_35261[(2)] = null);

(statearr_34569_35261[(1)] = (2));


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
var statearr_34570 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34570[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34570[(1)] = (1));

return statearr_34570;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34539){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34539);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34571){var ex__32403__auto__ = e34571;
var statearr_34572_35265 = state_34539;
(statearr_34572_35265[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34539[(4)]))){
var statearr_34573_35267 = state_34539;
(statearr_34573_35267[(1)] = cljs.core.first((state_34539[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35268 = state_34539;
state_34539 = G__35268;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_34574 = f__32493__auto__();
(statearr_34574[(6)] = c__32492__auto___35249);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34576 = arguments.length;
switch (G__34576) {
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
var c__32492__auto___35270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_34615){
var state_val_34616 = (state_34615[(1)]);
if((state_val_34616 === (7))){
var inst_34610 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34620_35271 = state_34615__$1;
(statearr_34620_35271[(2)] = inst_34610);

(statearr_34620_35271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (1))){
var inst_34577 = (new Array(n));
var inst_34578 = inst_34577;
var inst_34579 = (0);
var state_34615__$1 = (function (){var statearr_34621 = state_34615;
(statearr_34621[(7)] = inst_34578);

(statearr_34621[(8)] = inst_34579);

return statearr_34621;
})();
var statearr_34622_35274 = state_34615__$1;
(statearr_34622_35274[(2)] = null);

(statearr_34622_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (4))){
var inst_34582 = (state_34615[(9)]);
var inst_34582__$1 = (state_34615[(2)]);
var inst_34583 = (inst_34582__$1 == null);
var inst_34584 = cljs.core.not(inst_34583);
var state_34615__$1 = (function (){var statearr_34623 = state_34615;
(statearr_34623[(9)] = inst_34582__$1);

return statearr_34623;
})();
if(inst_34584){
var statearr_34624_35277 = state_34615__$1;
(statearr_34624_35277[(1)] = (5));

} else {
var statearr_34625_35278 = state_34615__$1;
(statearr_34625_35278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (15))){
var inst_34604 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34626_35279 = state_34615__$1;
(statearr_34626_35279[(2)] = inst_34604);

(statearr_34626_35279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (13))){
var state_34615__$1 = state_34615;
var statearr_34627_35280 = state_34615__$1;
(statearr_34627_35280[(2)] = null);

(statearr_34627_35280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (6))){
var inst_34579 = (state_34615[(8)]);
var inst_34600 = (inst_34579 > (0));
var state_34615__$1 = state_34615;
if(cljs.core.truth_(inst_34600)){
var statearr_34628_35281 = state_34615__$1;
(statearr_34628_35281[(1)] = (12));

} else {
var statearr_34630_35282 = state_34615__$1;
(statearr_34630_35282[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (3))){
var inst_34612 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34615__$1,inst_34612);
} else {
if((state_val_34616 === (12))){
var inst_34578 = (state_34615[(7)]);
var inst_34602 = cljs.core.vec(inst_34578);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34615__$1,(15),out,inst_34602);
} else {
if((state_val_34616 === (2))){
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34615__$1,(4),ch);
} else {
if((state_val_34616 === (11))){
var inst_34594 = (state_34615[(2)]);
var inst_34595 = (new Array(n));
var inst_34578 = inst_34595;
var inst_34579 = (0);
var state_34615__$1 = (function (){var statearr_34631 = state_34615;
(statearr_34631[(10)] = inst_34594);

(statearr_34631[(7)] = inst_34578);

(statearr_34631[(8)] = inst_34579);

return statearr_34631;
})();
var statearr_34632_35284 = state_34615__$1;
(statearr_34632_35284[(2)] = null);

(statearr_34632_35284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (9))){
var inst_34578 = (state_34615[(7)]);
var inst_34592 = cljs.core.vec(inst_34578);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34615__$1,(11),out,inst_34592);
} else {
if((state_val_34616 === (5))){
var inst_34578 = (state_34615[(7)]);
var inst_34579 = (state_34615[(8)]);
var inst_34582 = (state_34615[(9)]);
var inst_34587 = (state_34615[(11)]);
var inst_34586 = (inst_34578[inst_34579] = inst_34582);
var inst_34587__$1 = (inst_34579 + (1));
var inst_34588 = (inst_34587__$1 < n);
var state_34615__$1 = (function (){var statearr_34633 = state_34615;
(statearr_34633[(12)] = inst_34586);

(statearr_34633[(11)] = inst_34587__$1);

return statearr_34633;
})();
if(cljs.core.truth_(inst_34588)){
var statearr_34634_35285 = state_34615__$1;
(statearr_34634_35285[(1)] = (8));

} else {
var statearr_34635_35286 = state_34615__$1;
(statearr_34635_35286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (14))){
var inst_34607 = (state_34615[(2)]);
var inst_34608 = cljs.core.async.close_BANG_(out);
var state_34615__$1 = (function (){var statearr_34637 = state_34615;
(statearr_34637[(13)] = inst_34607);

return statearr_34637;
})();
var statearr_34638_35287 = state_34615__$1;
(statearr_34638_35287[(2)] = inst_34608);

(statearr_34638_35287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (10))){
var inst_34598 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34639_35288 = state_34615__$1;
(statearr_34639_35288[(2)] = inst_34598);

(statearr_34639_35288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (8))){
var inst_34578 = (state_34615[(7)]);
var inst_34587 = (state_34615[(11)]);
var tmp34636 = inst_34578;
var inst_34578__$1 = tmp34636;
var inst_34579 = inst_34587;
var state_34615__$1 = (function (){var statearr_34641 = state_34615;
(statearr_34641[(7)] = inst_34578__$1);

(statearr_34641[(8)] = inst_34579);

return statearr_34641;
})();
var statearr_34642_35289 = state_34615__$1;
(statearr_34642_35289[(2)] = null);

(statearr_34642_35289[(1)] = (2));


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
var statearr_34644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34644[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34644[(1)] = (1));

return statearr_34644;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34615){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34615);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34645){var ex__32403__auto__ = e34645;
var statearr_34646_35290 = state_34615;
(statearr_34646_35290[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34615[(4)]))){
var statearr_34647_35291 = state_34615;
(statearr_34647_35291[(1)] = cljs.core.first((state_34615[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35292 = state_34615;
state_34615 = G__35292;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_34648 = f__32493__auto__();
(statearr_34648[(6)] = c__32492__auto___35270);

return statearr_34648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34651 = arguments.length;
switch (G__34651) {
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
var c__32492__auto___35294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32493__auto__ = (function (){var switch__32399__auto__ = (function (state_34697){
var state_val_34698 = (state_34697[(1)]);
if((state_val_34698 === (7))){
var inst_34693 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34703_35295 = state_34697__$1;
(statearr_34703_35295[(2)] = inst_34693);

(statearr_34703_35295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (1))){
var inst_34653 = [];
var inst_34654 = inst_34653;
var inst_34655 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34697__$1 = (function (){var statearr_34704 = state_34697;
(statearr_34704[(7)] = inst_34654);

(statearr_34704[(8)] = inst_34655);

return statearr_34704;
})();
var statearr_34705_35296 = state_34697__$1;
(statearr_34705_35296[(2)] = null);

(statearr_34705_35296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (4))){
var inst_34658 = (state_34697[(9)]);
var inst_34658__$1 = (state_34697[(2)]);
var inst_34659 = (inst_34658__$1 == null);
var inst_34660 = cljs.core.not(inst_34659);
var state_34697__$1 = (function (){var statearr_34709 = state_34697;
(statearr_34709[(9)] = inst_34658__$1);

return statearr_34709;
})();
if(inst_34660){
var statearr_34710_35297 = state_34697__$1;
(statearr_34710_35297[(1)] = (5));

} else {
var statearr_34711_35298 = state_34697__$1;
(statearr_34711_35298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (15))){
var inst_34654 = (state_34697[(7)]);
var inst_34685 = cljs.core.vec(inst_34654);
var state_34697__$1 = state_34697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34697__$1,(18),out,inst_34685);
} else {
if((state_val_34698 === (13))){
var inst_34680 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34715_35300 = state_34697__$1;
(statearr_34715_35300[(2)] = inst_34680);

(statearr_34715_35300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (6))){
var inst_34654 = (state_34697[(7)]);
var inst_34682 = inst_34654.length;
var inst_34683 = (inst_34682 > (0));
var state_34697__$1 = state_34697;
if(cljs.core.truth_(inst_34683)){
var statearr_34720_35301 = state_34697__$1;
(statearr_34720_35301[(1)] = (15));

} else {
var statearr_34721_35302 = state_34697__$1;
(statearr_34721_35302[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (17))){
var inst_34690 = (state_34697[(2)]);
var inst_34691 = cljs.core.async.close_BANG_(out);
var state_34697__$1 = (function (){var statearr_34722 = state_34697;
(statearr_34722[(10)] = inst_34690);

return statearr_34722;
})();
var statearr_34723_35305 = state_34697__$1;
(statearr_34723_35305[(2)] = inst_34691);

(statearr_34723_35305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (3))){
var inst_34695 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34697__$1,inst_34695);
} else {
if((state_val_34698 === (12))){
var inst_34654 = (state_34697[(7)]);
var inst_34673 = cljs.core.vec(inst_34654);
var state_34697__$1 = state_34697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34697__$1,(14),out,inst_34673);
} else {
if((state_val_34698 === (2))){
var state_34697__$1 = state_34697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34697__$1,(4),ch);
} else {
if((state_val_34698 === (11))){
var inst_34654 = (state_34697[(7)]);
var inst_34658 = (state_34697[(9)]);
var inst_34662 = (state_34697[(11)]);
var inst_34670 = inst_34654.push(inst_34658);
var tmp34727 = inst_34654;
var inst_34654__$1 = tmp34727;
var inst_34655 = inst_34662;
var state_34697__$1 = (function (){var statearr_34731 = state_34697;
(statearr_34731[(12)] = inst_34670);

(statearr_34731[(7)] = inst_34654__$1);

(statearr_34731[(8)] = inst_34655);

return statearr_34731;
})();
var statearr_34732_35309 = state_34697__$1;
(statearr_34732_35309[(2)] = null);

(statearr_34732_35309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (9))){
var inst_34655 = (state_34697[(8)]);
var inst_34666 = cljs.core.keyword_identical_QMARK_(inst_34655,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34697__$1 = state_34697;
var statearr_34733_35311 = state_34697__$1;
(statearr_34733_35311[(2)] = inst_34666);

(statearr_34733_35311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (5))){
var inst_34658 = (state_34697[(9)]);
var inst_34662 = (state_34697[(11)]);
var inst_34655 = (state_34697[(8)]);
var inst_34663 = (state_34697[(13)]);
var inst_34662__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34658) : f.call(null,inst_34658));
var inst_34663__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34662__$1,inst_34655);
var state_34697__$1 = (function (){var statearr_34734 = state_34697;
(statearr_34734[(11)] = inst_34662__$1);

(statearr_34734[(13)] = inst_34663__$1);

return statearr_34734;
})();
if(inst_34663__$1){
var statearr_34735_35316 = state_34697__$1;
(statearr_34735_35316[(1)] = (8));

} else {
var statearr_34736_35317 = state_34697__$1;
(statearr_34736_35317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (14))){
var inst_34658 = (state_34697[(9)]);
var inst_34662 = (state_34697[(11)]);
var inst_34675 = (state_34697[(2)]);
var inst_34676 = [];
var inst_34677 = inst_34676.push(inst_34658);
var inst_34654 = inst_34676;
var inst_34655 = inst_34662;
var state_34697__$1 = (function (){var statearr_34737 = state_34697;
(statearr_34737[(14)] = inst_34675);

(statearr_34737[(15)] = inst_34677);

(statearr_34737[(7)] = inst_34654);

(statearr_34737[(8)] = inst_34655);

return statearr_34737;
})();
var statearr_34738_35318 = state_34697__$1;
(statearr_34738_35318[(2)] = null);

(statearr_34738_35318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (16))){
var state_34697__$1 = state_34697;
var statearr_34739_35319 = state_34697__$1;
(statearr_34739_35319[(2)] = null);

(statearr_34739_35319[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (10))){
var inst_34668 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
if(cljs.core.truth_(inst_34668)){
var statearr_34740_35320 = state_34697__$1;
(statearr_34740_35320[(1)] = (11));

} else {
var statearr_34741_35321 = state_34697__$1;
(statearr_34741_35321[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (18))){
var inst_34687 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34742_35322 = state_34697__$1;
(statearr_34742_35322[(2)] = inst_34687);

(statearr_34742_35322[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (8))){
var inst_34663 = (state_34697[(13)]);
var state_34697__$1 = state_34697;
var statearr_34743_35323 = state_34697__$1;
(statearr_34743_35323[(2)] = inst_34663);

(statearr_34743_35323[(1)] = (10));


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
var statearr_34744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34744[(0)] = cljs$core$async$state_machine__32400__auto__);

(statearr_34744[(1)] = (1));

return statearr_34744;
});
var cljs$core$async$state_machine__32400__auto____1 = (function (state_34697){
while(true){
var ret_value__32401__auto__ = (function (){try{while(true){
var result__32402__auto__ = switch__32399__auto__(state_34697);
if(cljs.core.keyword_identical_QMARK_(result__32402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32402__auto__;
}
break;
}
}catch (e34745){var ex__32403__auto__ = e34745;
var statearr_34746_35324 = state_34697;
(statearr_34746_35324[(2)] = ex__32403__auto__);


if(cljs.core.seq((state_34697[(4)]))){
var statearr_34747_35325 = state_34697;
(statearr_34747_35325[(1)] = cljs.core.first((state_34697[(4)])));

} else {
throw ex__32403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35326 = state_34697;
state_34697 = G__35326;
continue;
} else {
return ret_value__32401__auto__;
}
break;
}
});
cljs$core$async$state_machine__32400__auto__ = function(state_34697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32400__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32400__auto____1.call(this,state_34697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32400__auto____0;
cljs$core$async$state_machine__32400__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32400__auto____1;
return cljs$core$async$state_machine__32400__auto__;
})()
})();
var state__32494__auto__ = (function (){var statearr_34749 = f__32493__auto__();
(statearr_34749[(6)] = c__32492__auto___35294);

return statearr_34749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32494__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
