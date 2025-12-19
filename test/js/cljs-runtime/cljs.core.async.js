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
cljs.core.async.t_cljs$core$async32669 = (function (f,blockable,meta32670){
this.f = f;
this.blockable = blockable;
this.meta32670 = meta32670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32671,meta32670__$1){
var self__ = this;
var _32671__$1 = this;
return (new cljs.core.async.t_cljs$core$async32669(self__.f,self__.blockable,meta32670__$1));
}));

(cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32671){
var self__ = this;
var _32671__$1 = this;
return self__.meta32670;
}));

(cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32669.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32670","meta32670",1657685403,null)], null);
}));

(cljs.core.async.t_cljs$core$async32669.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32669");

(cljs.core.async.t_cljs$core$async32669.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32669");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32669.
 */
cljs.core.async.__GT_t_cljs$core$async32669 = (function cljs$core$async$__GT_t_cljs$core$async32669(f,blockable,meta32670){
return (new cljs.core.async.t_cljs$core$async32669(f,blockable,meta32670));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32668 = arguments.length;
switch (G__32668) {
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
return (new cljs.core.async.t_cljs$core$async32669(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32677 = arguments.length;
switch (G__32677) {
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
var G__32689 = arguments.length;
switch (G__32689) {
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
var val_34754 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34754) : fn1.call(null,val_34754));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34754) : fn1.call(null,val_34754));
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
var G__32698 = arguments.length;
switch (G__32698) {
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
var n__5616__auto___34758 = n;
var x_34759 = (0);
while(true){
if((x_34759 < n__5616__auto___34758)){
(a[x_34759] = x_34759);

var G__34760 = (x_34759 + (1));
x_34759 = G__34760;
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
cljs.core.async.t_cljs$core$async32702 = (function (flag,meta32703){
this.flag = flag;
this.meta32703 = meta32703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32704,meta32703__$1){
var self__ = this;
var _32704__$1 = this;
return (new cljs.core.async.t_cljs$core$async32702(self__.flag,meta32703__$1));
}));

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32704){
var self__ = this;
var _32704__$1 = this;
return self__.meta32703;
}));

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32703","meta32703",-79976456,null)], null);
}));

(cljs.core.async.t_cljs$core$async32702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32702");

(cljs.core.async.t_cljs$core$async32702.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32702.
 */
cljs.core.async.__GT_t_cljs$core$async32702 = (function cljs$core$async$__GT_t_cljs$core$async32702(flag,meta32703){
return (new cljs.core.async.t_cljs$core$async32702(flag,meta32703));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32702(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32705 = (function (flag,cb,meta32706){
this.flag = flag;
this.cb = cb;
this.meta32706 = meta32706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32707,meta32706__$1){
var self__ = this;
var _32707__$1 = this;
return (new cljs.core.async.t_cljs$core$async32705(self__.flag,self__.cb,meta32706__$1));
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32707){
var self__ = this;
var _32707__$1 = this;
return self__.meta32706;
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32706","meta32706",-1935693441,null)], null);
}));

(cljs.core.async.t_cljs$core$async32705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32705");

(cljs.core.async.t_cljs$core$async32705.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32705.
 */
cljs.core.async.__GT_t_cljs$core$async32705 = (function cljs$core$async$__GT_t_cljs$core$async32705(flag,cb,meta32706){
return (new cljs.core.async.t_cljs$core$async32705(flag,cb,meta32706));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32705(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_34767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34767)){
if((!(((port_34767.cljs$core$IFn$_invoke$arity$1 ? port_34767.cljs$core$IFn$_invoke$arity$1((1)) : port_34767.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34769 = (i + (1));
i = G__34769;
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
return (function (p1__32708_SHARP_){
var G__32710 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32708_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32710) : fret.call(null,G__32710));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__32709_SHARP_){
var G__32711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32709_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32711) : fret.call(null,G__32711));
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
var G__34772 = (i + (1));
i = G__34772;
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
var len__5749__auto___34775 = arguments.length;
var i__5750__auto___34776 = (0);
while(true){
if((i__5750__auto___34776 < len__5749__auto___34775)){
args__5755__auto__.push((arguments[i__5750__auto___34776]));

var G__34777 = (i__5750__auto___34776 + (1));
i__5750__auto___34776 = G__34777;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32714){
var map__32715 = p__32714;
var map__32715__$1 = cljs.core.__destructure_map(map__32715);
var opts = map__32715__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32712){
var G__32713 = cljs.core.first(seq32712);
var seq32712__$1 = cljs.core.next(seq32712);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32713,seq32712__$1);
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
var G__32717 = arguments.length;
switch (G__32717) {
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
var c__32610__auto___34784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_32744){
var state_val_32745 = (state_32744[(1)]);
if((state_val_32745 === (7))){
var inst_32740 = (state_32744[(2)]);
var state_32744__$1 = state_32744;
var statearr_32746_34786 = state_32744__$1;
(statearr_32746_34786[(2)] = inst_32740);

(statearr_32746_34786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (1))){
var state_32744__$1 = state_32744;
var statearr_32747_34787 = state_32744__$1;
(statearr_32747_34787[(2)] = null);

(statearr_32747_34787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (4))){
var inst_32723 = (state_32744[(7)]);
var inst_32723__$1 = (state_32744[(2)]);
var inst_32724 = (inst_32723__$1 == null);
var state_32744__$1 = (function (){var statearr_32748 = state_32744;
(statearr_32748[(7)] = inst_32723__$1);

return statearr_32748;
})();
if(cljs.core.truth_(inst_32724)){
var statearr_32749_34788 = state_32744__$1;
(statearr_32749_34788[(1)] = (5));

} else {
var statearr_32750_34789 = state_32744__$1;
(statearr_32750_34789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (13))){
var state_32744__$1 = state_32744;
var statearr_32751_34792 = state_32744__$1;
(statearr_32751_34792[(2)] = null);

(statearr_32751_34792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (6))){
var inst_32723 = (state_32744[(7)]);
var state_32744__$1 = state_32744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32744__$1,(11),to,inst_32723);
} else {
if((state_val_32745 === (3))){
var inst_32742 = (state_32744[(2)]);
var state_32744__$1 = state_32744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32744__$1,inst_32742);
} else {
if((state_val_32745 === (12))){
var state_32744__$1 = state_32744;
var statearr_32752_34793 = state_32744__$1;
(statearr_32752_34793[(2)] = null);

(statearr_32752_34793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (2))){
var state_32744__$1 = state_32744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32744__$1,(4),from);
} else {
if((state_val_32745 === (11))){
var inst_32733 = (state_32744[(2)]);
var state_32744__$1 = state_32744;
if(cljs.core.truth_(inst_32733)){
var statearr_32753_34795 = state_32744__$1;
(statearr_32753_34795[(1)] = (12));

} else {
var statearr_32754_34796 = state_32744__$1;
(statearr_32754_34796[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (9))){
var state_32744__$1 = state_32744;
var statearr_32755_34797 = state_32744__$1;
(statearr_32755_34797[(2)] = null);

(statearr_32755_34797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (5))){
var state_32744__$1 = state_32744;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32756_34798 = state_32744__$1;
(statearr_32756_34798[(1)] = (8));

} else {
var statearr_32757_34799 = state_32744__$1;
(statearr_32757_34799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (14))){
var inst_32738 = (state_32744[(2)]);
var state_32744__$1 = state_32744;
var statearr_32758_34800 = state_32744__$1;
(statearr_32758_34800[(2)] = inst_32738);

(statearr_32758_34800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (10))){
var inst_32730 = (state_32744[(2)]);
var state_32744__$1 = state_32744;
var statearr_32759_34801 = state_32744__$1;
(statearr_32759_34801[(2)] = inst_32730);

(statearr_32759_34801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (8))){
var inst_32727 = cljs.core.async.close_BANG_(to);
var state_32744__$1 = state_32744;
var statearr_32760_34802 = state_32744__$1;
(statearr_32760_34802[(2)] = inst_32727);

(statearr_32760_34802[(1)] = (10));


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
var cljs$core$async$state_machine__32540__auto__ = null;
var cljs$core$async$state_machine__32540__auto____0 = (function (){
var statearr_32761 = [null,null,null,null,null,null,null,null];
(statearr_32761[(0)] = cljs$core$async$state_machine__32540__auto__);

(statearr_32761[(1)] = (1));

return statearr_32761;
});
var cljs$core$async$state_machine__32540__auto____1 = (function (state_32744){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_32744);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e32762){var ex__32543__auto__ = e32762;
var statearr_32763_34803 = state_32744;
(statearr_32763_34803[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_32744[(4)]))){
var statearr_32764_34804 = state_32744;
(statearr_32764_34804[(1)] = cljs.core.first((state_32744[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34805 = state_32744;
state_32744 = G__34805;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$state_machine__32540__auto__ = function(state_32744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32540__auto____1.call(this,state_32744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32540__auto____0;
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32540__auto____1;
return cljs$core$async$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_32765 = f__32611__auto__();
(statearr_32765[(6)] = c__32610__auto___34784);

return statearr_32765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
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
var process__$1 = (function (p__32766){
var vec__32767 = p__32766;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32767,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32767,(1),null);
var job = vec__32767;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32610__auto___34806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_32774){
var state_val_32775 = (state_32774[(1)]);
if((state_val_32775 === (1))){
var state_32774__$1 = state_32774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32774__$1,(2),res,v);
} else {
if((state_val_32775 === (2))){
var inst_32771 = (state_32774[(2)]);
var inst_32772 = cljs.core.async.close_BANG_(res);
var state_32774__$1 = (function (){var statearr_32776 = state_32774;
(statearr_32776[(7)] = inst_32771);

return statearr_32776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32774__$1,inst_32772);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0 = (function (){
var statearr_32777 = [null,null,null,null,null,null,null,null];
(statearr_32777[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__);

(statearr_32777[(1)] = (1));

return statearr_32777;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1 = (function (state_32774){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_32774);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e32778){var ex__32543__auto__ = e32778;
var statearr_32779_34807 = state_32774;
(statearr_32779_34807[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_32774[(4)]))){
var statearr_32780_34808 = state_32774;
(statearr_32780_34808[(1)] = cljs.core.first((state_32774[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34809 = state_32774;
state_32774 = G__34809;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__ = function(state_32774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1.call(this,state_32774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_32781 = f__32611__auto__();
(statearr_32781[(6)] = c__32610__auto___34806);

return statearr_32781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32782){
var vec__32783 = p__32782;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783,(1),null);
var job = vec__32783;
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
var n__5616__auto___34814 = n;
var __34815 = (0);
while(true){
if((__34815 < n__5616__auto___34814)){
var G__32786_34816 = type;
var G__32786_34817__$1 = (((G__32786_34816 instanceof cljs.core.Keyword))?G__32786_34816.fqn:null);
switch (G__32786_34817__$1) {
case "compute":
var c__32610__auto___34819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34815,c__32610__auto___34819,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async){
return (function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = ((function (__34815,c__32610__auto___34819,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async){
return (function (state_32799){
var state_val_32800 = (state_32799[(1)]);
if((state_val_32800 === (1))){
var state_32799__$1 = state_32799;
var statearr_32801_34820 = state_32799__$1;
(statearr_32801_34820[(2)] = null);

(statearr_32801_34820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (2))){
var state_32799__$1 = state_32799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32799__$1,(4),jobs);
} else {
if((state_val_32800 === (3))){
var inst_32797 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32799__$1,inst_32797);
} else {
if((state_val_32800 === (4))){
var inst_32789 = (state_32799[(2)]);
var inst_32790 = process__$1(inst_32789);
var state_32799__$1 = state_32799;
if(cljs.core.truth_(inst_32790)){
var statearr_32802_34823 = state_32799__$1;
(statearr_32802_34823[(1)] = (5));

} else {
var statearr_32803_34824 = state_32799__$1;
(statearr_32803_34824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (5))){
var state_32799__$1 = state_32799;
var statearr_32805_34825 = state_32799__$1;
(statearr_32805_34825[(2)] = null);

(statearr_32805_34825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (6))){
var state_32799__$1 = state_32799;
var statearr_32807_34826 = state_32799__$1;
(statearr_32807_34826[(2)] = null);

(statearr_32807_34826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (7))){
var inst_32795 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32808_34827 = state_32799__$1;
(statearr_32808_34827[(2)] = inst_32795);

(statearr_32808_34827[(1)] = (3));


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
});})(__34815,c__32610__auto___34819,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async))
;
return ((function (__34815,switch__32539__auto__,c__32610__auto___34819,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0 = (function (){
var statearr_32811 = [null,null,null,null,null,null,null];
(statearr_32811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__);

(statearr_32811[(1)] = (1));

return statearr_32811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1 = (function (state_32799){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_32799);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e32813){var ex__32543__auto__ = e32813;
var statearr_32814_34828 = state_32799;
(statearr_32814_34828[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_32799[(4)]))){
var statearr_32816_34829 = state_32799;
(statearr_32816_34829[(1)] = cljs.core.first((state_32799[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34836 = state_32799;
state_32799 = G__34836;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__ = function(state_32799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1.call(this,state_32799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__;
})()
;})(__34815,switch__32539__auto__,c__32610__auto___34819,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async))
})();
var state__32612__auto__ = (function (){var statearr_32819 = f__32611__auto__();
(statearr_32819[(6)] = c__32610__auto___34819);

return statearr_32819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
});})(__34815,c__32610__auto___34819,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async))
);


break;
case "async":
var c__32610__auto___34837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34815,c__32610__auto___34837,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async){
return (function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = ((function (__34815,c__32610__auto___34837,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async){
return (function (state_32832){
var state_val_32834 = (state_32832[(1)]);
if((state_val_32834 === (1))){
var state_32832__$1 = state_32832;
var statearr_32838_34838 = state_32832__$1;
(statearr_32838_34838[(2)] = null);

(statearr_32838_34838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (2))){
var state_32832__$1 = state_32832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32832__$1,(4),jobs);
} else {
if((state_val_32834 === (3))){
var inst_32830 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32832__$1,inst_32830);
} else {
if((state_val_32834 === (4))){
var inst_32822 = (state_32832[(2)]);
var inst_32823 = async(inst_32822);
var state_32832__$1 = state_32832;
if(cljs.core.truth_(inst_32823)){
var statearr_32840_34839 = state_32832__$1;
(statearr_32840_34839[(1)] = (5));

} else {
var statearr_32842_34840 = state_32832__$1;
(statearr_32842_34840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (5))){
var state_32832__$1 = state_32832;
var statearr_32846_34841 = state_32832__$1;
(statearr_32846_34841[(2)] = null);

(statearr_32846_34841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (6))){
var state_32832__$1 = state_32832;
var statearr_32847_34842 = state_32832__$1;
(statearr_32847_34842[(2)] = null);

(statearr_32847_34842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (7))){
var inst_32828 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
var statearr_32848_34843 = state_32832__$1;
(statearr_32848_34843[(2)] = inst_32828);

(statearr_32848_34843[(1)] = (3));


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
});})(__34815,c__32610__auto___34837,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async))
;
return ((function (__34815,switch__32539__auto__,c__32610__auto___34837,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0 = (function (){
var statearr_32852 = [null,null,null,null,null,null,null];
(statearr_32852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__);

(statearr_32852[(1)] = (1));

return statearr_32852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1 = (function (state_32832){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_32832);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e32853){var ex__32543__auto__ = e32853;
var statearr_32854_34844 = state_32832;
(statearr_32854_34844[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_32832[(4)]))){
var statearr_32855_34845 = state_32832;
(statearr_32855_34845[(1)] = cljs.core.first((state_32832[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34846 = state_32832;
state_32832 = G__34846;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__ = function(state_32832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1.call(this,state_32832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__;
})()
;})(__34815,switch__32539__auto__,c__32610__auto___34837,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async))
})();
var state__32612__auto__ = (function (){var statearr_32860 = f__32611__auto__();
(statearr_32860[(6)] = c__32610__auto___34837);

return statearr_32860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
});})(__34815,c__32610__auto___34837,G__32786_34816,G__32786_34817__$1,n__5616__auto___34814,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32786_34817__$1)].join('')));

}

var G__34847 = (__34815 + (1));
__34815 = G__34847;
continue;
} else {
}
break;
}

var c__32610__auto___34848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_32882){
var state_val_32883 = (state_32882[(1)]);
if((state_val_32883 === (7))){
var inst_32878 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32884_34849 = state_32882__$1;
(statearr_32884_34849[(2)] = inst_32878);

(statearr_32884_34849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (1))){
var state_32882__$1 = state_32882;
var statearr_32885_34850 = state_32882__$1;
(statearr_32885_34850[(2)] = null);

(statearr_32885_34850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (4))){
var inst_32863 = (state_32882[(7)]);
var inst_32863__$1 = (state_32882[(2)]);
var inst_32864 = (inst_32863__$1 == null);
var state_32882__$1 = (function (){var statearr_32886 = state_32882;
(statearr_32886[(7)] = inst_32863__$1);

return statearr_32886;
})();
if(cljs.core.truth_(inst_32864)){
var statearr_32887_34851 = state_32882__$1;
(statearr_32887_34851[(1)] = (5));

} else {
var statearr_32888_34852 = state_32882__$1;
(statearr_32888_34852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (6))){
var inst_32863 = (state_32882[(7)]);
var inst_32868 = (state_32882[(8)]);
var inst_32868__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32870 = [inst_32863,inst_32868__$1];
var inst_32871 = (new cljs.core.PersistentVector(null,2,(5),inst_32869,inst_32870,null));
var state_32882__$1 = (function (){var statearr_32889 = state_32882;
(statearr_32889[(8)] = inst_32868__$1);

return statearr_32889;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32882__$1,(8),jobs,inst_32871);
} else {
if((state_val_32883 === (3))){
var inst_32880 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32882__$1,inst_32880);
} else {
if((state_val_32883 === (2))){
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32882__$1,(4),from);
} else {
if((state_val_32883 === (9))){
var inst_32875 = (state_32882[(2)]);
var state_32882__$1 = (function (){var statearr_32890 = state_32882;
(statearr_32890[(9)] = inst_32875);

return statearr_32890;
})();
var statearr_32891_34861 = state_32882__$1;
(statearr_32891_34861[(2)] = null);

(statearr_32891_34861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (5))){
var inst_32866 = cljs.core.async.close_BANG_(jobs);
var state_32882__$1 = state_32882;
var statearr_32892_34863 = state_32882__$1;
(statearr_32892_34863[(2)] = inst_32866);

(statearr_32892_34863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (8))){
var inst_32868 = (state_32882[(8)]);
var inst_32873 = (state_32882[(2)]);
var state_32882__$1 = (function (){var statearr_32893 = state_32882;
(statearr_32893[(10)] = inst_32873);

return statearr_32893;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32882__$1,(9),results,inst_32868);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0 = (function (){
var statearr_32894 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__);

(statearr_32894[(1)] = (1));

return statearr_32894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1 = (function (state_32882){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_32882);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e32895){var ex__32543__auto__ = e32895;
var statearr_32896_34864 = state_32882;
(statearr_32896_34864[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_32882[(4)]))){
var statearr_32897_34865 = state_32882;
(statearr_32897_34865[(1)] = cljs.core.first((state_32882[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34866 = state_32882;
state_32882 = G__34866;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__ = function(state_32882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1.call(this,state_32882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_32898 = f__32611__auto__();
(statearr_32898[(6)] = c__32610__auto___34848);

return statearr_32898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));


var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_32936){
var state_val_32937 = (state_32936[(1)]);
if((state_val_32937 === (7))){
var inst_32932 = (state_32936[(2)]);
var state_32936__$1 = state_32936;
var statearr_32938_34867 = state_32936__$1;
(statearr_32938_34867[(2)] = inst_32932);

(statearr_32938_34867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (20))){
var state_32936__$1 = state_32936;
var statearr_32939_34868 = state_32936__$1;
(statearr_32939_34868[(2)] = null);

(statearr_32939_34868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (1))){
var state_32936__$1 = state_32936;
var statearr_32940_34869 = state_32936__$1;
(statearr_32940_34869[(2)] = null);

(statearr_32940_34869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (4))){
var inst_32901 = (state_32936[(7)]);
var inst_32901__$1 = (state_32936[(2)]);
var inst_32902 = (inst_32901__$1 == null);
var state_32936__$1 = (function (){var statearr_32941 = state_32936;
(statearr_32941[(7)] = inst_32901__$1);

return statearr_32941;
})();
if(cljs.core.truth_(inst_32902)){
var statearr_32942_34870 = state_32936__$1;
(statearr_32942_34870[(1)] = (5));

} else {
var statearr_32943_34871 = state_32936__$1;
(statearr_32943_34871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (15))){
var inst_32914 = (state_32936[(8)]);
var state_32936__$1 = state_32936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32936__$1,(18),to,inst_32914);
} else {
if((state_val_32937 === (21))){
var inst_32927 = (state_32936[(2)]);
var state_32936__$1 = state_32936;
var statearr_32944_34872 = state_32936__$1;
(statearr_32944_34872[(2)] = inst_32927);

(statearr_32944_34872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (13))){
var inst_32929 = (state_32936[(2)]);
var state_32936__$1 = (function (){var statearr_32945 = state_32936;
(statearr_32945[(9)] = inst_32929);

return statearr_32945;
})();
var statearr_32946_34873 = state_32936__$1;
(statearr_32946_34873[(2)] = null);

(statearr_32946_34873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (6))){
var inst_32901 = (state_32936[(7)]);
var state_32936__$1 = state_32936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32936__$1,(11),inst_32901);
} else {
if((state_val_32937 === (17))){
var inst_32922 = (state_32936[(2)]);
var state_32936__$1 = state_32936;
if(cljs.core.truth_(inst_32922)){
var statearr_32947_34874 = state_32936__$1;
(statearr_32947_34874[(1)] = (19));

} else {
var statearr_32948_34875 = state_32936__$1;
(statearr_32948_34875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (3))){
var inst_32934 = (state_32936[(2)]);
var state_32936__$1 = state_32936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32936__$1,inst_32934);
} else {
if((state_val_32937 === (12))){
var inst_32911 = (state_32936[(10)]);
var state_32936__$1 = state_32936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32936__$1,(14),inst_32911);
} else {
if((state_val_32937 === (2))){
var state_32936__$1 = state_32936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32936__$1,(4),results);
} else {
if((state_val_32937 === (19))){
var state_32936__$1 = state_32936;
var statearr_32951_34879 = state_32936__$1;
(statearr_32951_34879[(2)] = null);

(statearr_32951_34879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (11))){
var inst_32911 = (state_32936[(2)]);
var state_32936__$1 = (function (){var statearr_32954 = state_32936;
(statearr_32954[(10)] = inst_32911);

return statearr_32954;
})();
var statearr_32956_34881 = state_32936__$1;
(statearr_32956_34881[(2)] = null);

(statearr_32956_34881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (9))){
var state_32936__$1 = state_32936;
var statearr_32958_34882 = state_32936__$1;
(statearr_32958_34882[(2)] = null);

(statearr_32958_34882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (5))){
var state_32936__$1 = state_32936;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32959_34884 = state_32936__$1;
(statearr_32959_34884[(1)] = (8));

} else {
var statearr_32961_34885 = state_32936__$1;
(statearr_32961_34885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (14))){
var inst_32914 = (state_32936[(8)]);
var inst_32916 = (state_32936[(11)]);
var inst_32914__$1 = (state_32936[(2)]);
var inst_32915 = (inst_32914__$1 == null);
var inst_32916__$1 = cljs.core.not(inst_32915);
var state_32936__$1 = (function (){var statearr_32962 = state_32936;
(statearr_32962[(8)] = inst_32914__$1);

(statearr_32962[(11)] = inst_32916__$1);

return statearr_32962;
})();
if(inst_32916__$1){
var statearr_32963_34886 = state_32936__$1;
(statearr_32963_34886[(1)] = (15));

} else {
var statearr_32964_34887 = state_32936__$1;
(statearr_32964_34887[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (16))){
var inst_32916 = (state_32936[(11)]);
var state_32936__$1 = state_32936;
var statearr_32966_34889 = state_32936__$1;
(statearr_32966_34889[(2)] = inst_32916);

(statearr_32966_34889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (10))){
var inst_32908 = (state_32936[(2)]);
var state_32936__$1 = state_32936;
var statearr_32967_34890 = state_32936__$1;
(statearr_32967_34890[(2)] = inst_32908);

(statearr_32967_34890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (18))){
var inst_32919 = (state_32936[(2)]);
var state_32936__$1 = state_32936;
var statearr_32969_34891 = state_32936__$1;
(statearr_32969_34891[(2)] = inst_32919);

(statearr_32969_34891[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32937 === (8))){
var inst_32905 = cljs.core.async.close_BANG_(to);
var state_32936__$1 = state_32936;
var statearr_32970_34893 = state_32936__$1;
(statearr_32970_34893[(2)] = inst_32905);

(statearr_32970_34893[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0 = (function (){
var statearr_32974 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__);

(statearr_32974[(1)] = (1));

return statearr_32974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1 = (function (state_32936){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_32936);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e32975){var ex__32543__auto__ = e32975;
var statearr_32976_34894 = state_32936;
(statearr_32976_34894[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_32936[(4)]))){
var statearr_32977_34895 = state_32936;
(statearr_32977_34895[(1)] = cljs.core.first((state_32936[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34900 = state_32936;
state_32936 = G__34900;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__ = function(state_32936){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1.call(this,state_32936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32540__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_32978 = f__32611__auto__();
(statearr_32978[(6)] = c__32610__auto__);

return statearr_32978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
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
var G__32980 = arguments.length;
switch (G__32980) {
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
var G__32983 = arguments.length;
switch (G__32983) {
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
var G__32985 = arguments.length;
switch (G__32985) {
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
var c__32610__auto___34916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_33011){
var state_val_33012 = (state_33011[(1)]);
if((state_val_33012 === (7))){
var inst_33007 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
var statearr_33013_34917 = state_33011__$1;
(statearr_33013_34917[(2)] = inst_33007);

(statearr_33013_34917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (1))){
var state_33011__$1 = state_33011;
var statearr_33014_34918 = state_33011__$1;
(statearr_33014_34918[(2)] = null);

(statearr_33014_34918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (4))){
var inst_32988 = (state_33011[(7)]);
var inst_32988__$1 = (state_33011[(2)]);
var inst_32989 = (inst_32988__$1 == null);
var state_33011__$1 = (function (){var statearr_33015 = state_33011;
(statearr_33015[(7)] = inst_32988__$1);

return statearr_33015;
})();
if(cljs.core.truth_(inst_32989)){
var statearr_33016_34919 = state_33011__$1;
(statearr_33016_34919[(1)] = (5));

} else {
var statearr_33017_34920 = state_33011__$1;
(statearr_33017_34920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (13))){
var state_33011__$1 = state_33011;
var statearr_33018_34921 = state_33011__$1;
(statearr_33018_34921[(2)] = null);

(statearr_33018_34921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (6))){
var inst_32988 = (state_33011[(7)]);
var inst_32994 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32988) : p.call(null,inst_32988));
var state_33011__$1 = state_33011;
if(cljs.core.truth_(inst_32994)){
var statearr_33019_34922 = state_33011__$1;
(statearr_33019_34922[(1)] = (9));

} else {
var statearr_33020_34923 = state_33011__$1;
(statearr_33020_34923[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (3))){
var inst_33009 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33011__$1,inst_33009);
} else {
if((state_val_33012 === (12))){
var state_33011__$1 = state_33011;
var statearr_33021_34924 = state_33011__$1;
(statearr_33021_34924[(2)] = null);

(statearr_33021_34924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (2))){
var state_33011__$1 = state_33011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33011__$1,(4),ch);
} else {
if((state_val_33012 === (11))){
var inst_32988 = (state_33011[(7)]);
var inst_32998 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33011__$1,(8),inst_32998,inst_32988);
} else {
if((state_val_33012 === (9))){
var state_33011__$1 = state_33011;
var statearr_33022_34925 = state_33011__$1;
(statearr_33022_34925[(2)] = tc);

(statearr_33022_34925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (5))){
var inst_32991 = cljs.core.async.close_BANG_(tc);
var inst_32992 = cljs.core.async.close_BANG_(fc);
var state_33011__$1 = (function (){var statearr_33023 = state_33011;
(statearr_33023[(8)] = inst_32991);

return statearr_33023;
})();
var statearr_33024_34926 = state_33011__$1;
(statearr_33024_34926[(2)] = inst_32992);

(statearr_33024_34926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (14))){
var inst_33005 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
var statearr_33025_34927 = state_33011__$1;
(statearr_33025_34927[(2)] = inst_33005);

(statearr_33025_34927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (10))){
var state_33011__$1 = state_33011;
var statearr_33026_34928 = state_33011__$1;
(statearr_33026_34928[(2)] = fc);

(statearr_33026_34928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33012 === (8))){
var inst_33000 = (state_33011[(2)]);
var state_33011__$1 = state_33011;
if(cljs.core.truth_(inst_33000)){
var statearr_33027_34929 = state_33011__$1;
(statearr_33027_34929[(1)] = (12));

} else {
var statearr_33028_34930 = state_33011__$1;
(statearr_33028_34930[(1)] = (13));

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
var cljs$core$async$state_machine__32540__auto__ = null;
var cljs$core$async$state_machine__32540__auto____0 = (function (){
var statearr_33029 = [null,null,null,null,null,null,null,null,null];
(statearr_33029[(0)] = cljs$core$async$state_machine__32540__auto__);

(statearr_33029[(1)] = (1));

return statearr_33029;
});
var cljs$core$async$state_machine__32540__auto____1 = (function (state_33011){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_33011);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e33030){var ex__32543__auto__ = e33030;
var statearr_33031_34935 = state_33011;
(statearr_33031_34935[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_33011[(4)]))){
var statearr_33032_34936 = state_33011;
(statearr_33032_34936[(1)] = cljs.core.first((state_33011[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34937 = state_33011;
state_33011 = G__34937;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$state_machine__32540__auto__ = function(state_33011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32540__auto____1.call(this,state_33011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32540__auto____0;
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32540__auto____1;
return cljs$core$async$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_33033 = f__32611__auto__();
(statearr_33033[(6)] = c__32610__auto___34916);

return statearr_33033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
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
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_33055){
var state_val_33056 = (state_33055[(1)]);
if((state_val_33056 === (7))){
var inst_33051 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33057_34938 = state_33055__$1;
(statearr_33057_34938[(2)] = inst_33051);

(statearr_33057_34938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (1))){
var inst_33034 = init;
var inst_33035 = inst_33034;
var state_33055__$1 = (function (){var statearr_33058 = state_33055;
(statearr_33058[(7)] = inst_33035);

return statearr_33058;
})();
var statearr_33059_34939 = state_33055__$1;
(statearr_33059_34939[(2)] = null);

(statearr_33059_34939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (4))){
var inst_33038 = (state_33055[(8)]);
var inst_33038__$1 = (state_33055[(2)]);
var inst_33039 = (inst_33038__$1 == null);
var state_33055__$1 = (function (){var statearr_33060 = state_33055;
(statearr_33060[(8)] = inst_33038__$1);

return statearr_33060;
})();
if(cljs.core.truth_(inst_33039)){
var statearr_33061_34940 = state_33055__$1;
(statearr_33061_34940[(1)] = (5));

} else {
var statearr_33062_34941 = state_33055__$1;
(statearr_33062_34941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (6))){
var inst_33035 = (state_33055[(7)]);
var inst_33038 = (state_33055[(8)]);
var inst_33042 = (state_33055[(9)]);
var inst_33042__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33035,inst_33038) : f.call(null,inst_33035,inst_33038));
var inst_33043 = cljs.core.reduced_QMARK_(inst_33042__$1);
var state_33055__$1 = (function (){var statearr_33063 = state_33055;
(statearr_33063[(9)] = inst_33042__$1);

return statearr_33063;
})();
if(inst_33043){
var statearr_33064_34942 = state_33055__$1;
(statearr_33064_34942[(1)] = (8));

} else {
var statearr_33065_34943 = state_33055__$1;
(statearr_33065_34943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (3))){
var inst_33053 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33055__$1,inst_33053);
} else {
if((state_val_33056 === (2))){
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33055__$1,(4),ch);
} else {
if((state_val_33056 === (9))){
var inst_33042 = (state_33055[(9)]);
var inst_33035 = inst_33042;
var state_33055__$1 = (function (){var statearr_33068 = state_33055;
(statearr_33068[(7)] = inst_33035);

return statearr_33068;
})();
var statearr_33069_34944 = state_33055__$1;
(statearr_33069_34944[(2)] = null);

(statearr_33069_34944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (5))){
var inst_33035 = (state_33055[(7)]);
var state_33055__$1 = state_33055;
var statearr_33070_34945 = state_33055__$1;
(statearr_33070_34945[(2)] = inst_33035);

(statearr_33070_34945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (10))){
var inst_33049 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33072_34946 = state_33055__$1;
(statearr_33072_34946[(2)] = inst_33049);

(statearr_33072_34946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (8))){
var inst_33042 = (state_33055[(9)]);
var inst_33045 = cljs.core.deref(inst_33042);
var state_33055__$1 = state_33055;
var statearr_33073_34947 = state_33055__$1;
(statearr_33073_34947[(2)] = inst_33045);

(statearr_33073_34947[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32540__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32540__auto____0 = (function (){
var statearr_33075 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33075[(0)] = cljs$core$async$reduce_$_state_machine__32540__auto__);

(statearr_33075[(1)] = (1));

return statearr_33075;
});
var cljs$core$async$reduce_$_state_machine__32540__auto____1 = (function (state_33055){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_33055);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e33076){var ex__32543__auto__ = e33076;
var statearr_33077_34949 = state_33055;
(statearr_33077_34949[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_33055[(4)]))){
var statearr_33078_34950 = state_33055;
(statearr_33078_34950[(1)] = cljs.core.first((state_33055[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34951 = state_33055;
state_33055 = G__34951;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32540__auto__ = function(state_33055){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32540__auto____1.call(this,state_33055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32540__auto____0;
cljs$core$async$reduce_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32540__auto____1;
return cljs$core$async$reduce_$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_33079 = f__32611__auto__();
(statearr_33079[(6)] = c__32610__auto__);

return statearr_33079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_33085){
var state_val_33086 = (state_33085[(1)]);
if((state_val_33086 === (1))){
var inst_33080 = cljs.core.async.reduce(f__$1,init,ch);
var state_33085__$1 = state_33085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33085__$1,(2),inst_33080);
} else {
if((state_val_33086 === (2))){
var inst_33082 = (state_33085[(2)]);
var inst_33083 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33082) : f__$1.call(null,inst_33082));
var state_33085__$1 = state_33085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33085__$1,inst_33083);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32540__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32540__auto____0 = (function (){
var statearr_33087 = [null,null,null,null,null,null,null];
(statearr_33087[(0)] = cljs$core$async$transduce_$_state_machine__32540__auto__);

(statearr_33087[(1)] = (1));

return statearr_33087;
});
var cljs$core$async$transduce_$_state_machine__32540__auto____1 = (function (state_33085){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_33085);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e33088){var ex__32543__auto__ = e33088;
var statearr_33089_34952 = state_33085;
(statearr_33089_34952[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_33085[(4)]))){
var statearr_33090_34953 = state_33085;
(statearr_33090_34953[(1)] = cljs.core.first((state_33085[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34954 = state_33085;
state_33085 = G__34954;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32540__auto__ = function(state_33085){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32540__auto____1.call(this,state_33085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32540__auto____0;
cljs$core$async$transduce_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32540__auto____1;
return cljs$core$async$transduce_$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_33092 = f__32611__auto__();
(statearr_33092[(6)] = c__32610__auto__);

return statearr_33092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
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
var G__33094 = arguments.length;
switch (G__33094) {
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
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_33119){
var state_val_33120 = (state_33119[(1)]);
if((state_val_33120 === (7))){
var inst_33101 = (state_33119[(2)]);
var state_33119__$1 = state_33119;
var statearr_33123_34956 = state_33119__$1;
(statearr_33123_34956[(2)] = inst_33101);

(statearr_33123_34956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (1))){
var inst_33095 = cljs.core.seq(coll);
var inst_33096 = inst_33095;
var state_33119__$1 = (function (){var statearr_33124 = state_33119;
(statearr_33124[(7)] = inst_33096);

return statearr_33124;
})();
var statearr_33127_34957 = state_33119__$1;
(statearr_33127_34957[(2)] = null);

(statearr_33127_34957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (4))){
var inst_33096 = (state_33119[(7)]);
var inst_33099 = cljs.core.first(inst_33096);
var state_33119__$1 = state_33119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33119__$1,(7),ch,inst_33099);
} else {
if((state_val_33120 === (13))){
var inst_33113 = (state_33119[(2)]);
var state_33119__$1 = state_33119;
var statearr_33128_34961 = state_33119__$1;
(statearr_33128_34961[(2)] = inst_33113);

(statearr_33128_34961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (6))){
var inst_33104 = (state_33119[(2)]);
var state_33119__$1 = state_33119;
if(cljs.core.truth_(inst_33104)){
var statearr_33129_34962 = state_33119__$1;
(statearr_33129_34962[(1)] = (8));

} else {
var statearr_33130_34963 = state_33119__$1;
(statearr_33130_34963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (3))){
var inst_33117 = (state_33119[(2)]);
var state_33119__$1 = state_33119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33119__$1,inst_33117);
} else {
if((state_val_33120 === (12))){
var state_33119__$1 = state_33119;
var statearr_33131_34964 = state_33119__$1;
(statearr_33131_34964[(2)] = null);

(statearr_33131_34964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (2))){
var inst_33096 = (state_33119[(7)]);
var state_33119__$1 = state_33119;
if(cljs.core.truth_(inst_33096)){
var statearr_33132_34965 = state_33119__$1;
(statearr_33132_34965[(1)] = (4));

} else {
var statearr_33133_34966 = state_33119__$1;
(statearr_33133_34966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (11))){
var inst_33110 = cljs.core.async.close_BANG_(ch);
var state_33119__$1 = state_33119;
var statearr_33134_34967 = state_33119__$1;
(statearr_33134_34967[(2)] = inst_33110);

(statearr_33134_34967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (9))){
var state_33119__$1 = state_33119;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33135_34968 = state_33119__$1;
(statearr_33135_34968[(1)] = (11));

} else {
var statearr_33136_34969 = state_33119__$1;
(statearr_33136_34969[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (5))){
var inst_33096 = (state_33119[(7)]);
var state_33119__$1 = state_33119;
var statearr_33137_34970 = state_33119__$1;
(statearr_33137_34970[(2)] = inst_33096);

(statearr_33137_34970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (10))){
var inst_33115 = (state_33119[(2)]);
var state_33119__$1 = state_33119;
var statearr_33138_34971 = state_33119__$1;
(statearr_33138_34971[(2)] = inst_33115);

(statearr_33138_34971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33120 === (8))){
var inst_33096 = (state_33119[(7)]);
var inst_33106 = cljs.core.next(inst_33096);
var inst_33096__$1 = inst_33106;
var state_33119__$1 = (function (){var statearr_33139 = state_33119;
(statearr_33139[(7)] = inst_33096__$1);

return statearr_33139;
})();
var statearr_33140_34972 = state_33119__$1;
(statearr_33140_34972[(2)] = null);

(statearr_33140_34972[(1)] = (2));


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
var cljs$core$async$state_machine__32540__auto__ = null;
var cljs$core$async$state_machine__32540__auto____0 = (function (){
var statearr_33141 = [null,null,null,null,null,null,null,null];
(statearr_33141[(0)] = cljs$core$async$state_machine__32540__auto__);

(statearr_33141[(1)] = (1));

return statearr_33141;
});
var cljs$core$async$state_machine__32540__auto____1 = (function (state_33119){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_33119);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e33142){var ex__32543__auto__ = e33142;
var statearr_33143_34973 = state_33119;
(statearr_33143_34973[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_33119[(4)]))){
var statearr_33144_34974 = state_33119;
(statearr_33144_34974[(1)] = cljs.core.first((state_33119[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34975 = state_33119;
state_33119 = G__34975;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$state_machine__32540__auto__ = function(state_33119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32540__auto____1.call(this,state_33119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32540__auto____0;
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32540__auto____1;
return cljs$core$async$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_33145 = f__32611__auto__();
(statearr_33145[(6)] = c__32610__auto__);

return statearr_33145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
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
var G__33147 = arguments.length;
switch (G__33147) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34979 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34979(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34980 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34980(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34981 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34981(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34982 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34982(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33148 = (function (ch,cs,meta33149){
this.ch = ch;
this.cs = cs;
this.meta33149 = meta33149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33150,meta33149__$1){
var self__ = this;
var _33150__$1 = this;
return (new cljs.core.async.t_cljs$core$async33148(self__.ch,self__.cs,meta33149__$1));
}));

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33150){
var self__ = this;
var _33150__$1 = this;
return self__.meta33149;
}));

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33148.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33149","meta33149",-649213972,null)], null);
}));

(cljs.core.async.t_cljs$core$async33148.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33148");

(cljs.core.async.t_cljs$core$async33148.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33148");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33148.
 */
cljs.core.async.__GT_t_cljs$core$async33148 = (function cljs$core$async$__GT_t_cljs$core$async33148(ch,cs,meta33149){
return (new cljs.core.async.t_cljs$core$async33148(ch,cs,meta33149));
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
var m = (new cljs.core.async.t_cljs$core$async33148(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32610__auto___34997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_33291){
var state_val_33292 = (state_33291[(1)]);
if((state_val_33292 === (7))){
var inst_33286 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33293_34999 = state_33291__$1;
(statearr_33293_34999[(2)] = inst_33286);

(statearr_33293_34999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (20))){
var inst_33184 = (state_33291[(7)]);
var inst_33196 = cljs.core.first(inst_33184);
var inst_33197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33196,(0),null);
var inst_33198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33196,(1),null);
var state_33291__$1 = (function (){var statearr_33294 = state_33291;
(statearr_33294[(8)] = inst_33197);

return statearr_33294;
})();
if(cljs.core.truth_(inst_33198)){
var statearr_33295_35003 = state_33291__$1;
(statearr_33295_35003[(1)] = (22));

} else {
var statearr_33296_35004 = state_33291__$1;
(statearr_33296_35004[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (27))){
var inst_33230 = (state_33291[(9)]);
var inst_33232 = (state_33291[(10)]);
var inst_33237 = (state_33291[(11)]);
var inst_33153 = (state_33291[(12)]);
var inst_33237__$1 = cljs.core._nth(inst_33230,inst_33232);
var inst_33238 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33237__$1,inst_33153,done);
var state_33291__$1 = (function (){var statearr_33297 = state_33291;
(statearr_33297[(11)] = inst_33237__$1);

return statearr_33297;
})();
if(cljs.core.truth_(inst_33238)){
var statearr_33298_35021 = state_33291__$1;
(statearr_33298_35021[(1)] = (30));

} else {
var statearr_33299_35022 = state_33291__$1;
(statearr_33299_35022[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (1))){
var state_33291__$1 = state_33291;
var statearr_33300_35023 = state_33291__$1;
(statearr_33300_35023[(2)] = null);

(statearr_33300_35023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (24))){
var inst_33184 = (state_33291[(7)]);
var inst_33205 = (state_33291[(2)]);
var inst_33206 = cljs.core.next(inst_33184);
var inst_33162 = inst_33206;
var inst_33163 = null;
var inst_33164 = (0);
var inst_33165 = (0);
var state_33291__$1 = (function (){var statearr_33301 = state_33291;
(statearr_33301[(13)] = inst_33205);

(statearr_33301[(14)] = inst_33162);

(statearr_33301[(15)] = inst_33163);

(statearr_33301[(16)] = inst_33164);

(statearr_33301[(17)] = inst_33165);

return statearr_33301;
})();
var statearr_33302_35024 = state_33291__$1;
(statearr_33302_35024[(2)] = null);

(statearr_33302_35024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (39))){
var state_33291__$1 = state_33291;
var statearr_33308_35025 = state_33291__$1;
(statearr_33308_35025[(2)] = null);

(statearr_33308_35025[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (4))){
var inst_33153 = (state_33291[(12)]);
var inst_33153__$1 = (state_33291[(2)]);
var inst_33154 = (inst_33153__$1 == null);
var state_33291__$1 = (function (){var statearr_33309 = state_33291;
(statearr_33309[(12)] = inst_33153__$1);

return statearr_33309;
})();
if(cljs.core.truth_(inst_33154)){
var statearr_33311_35026 = state_33291__$1;
(statearr_33311_35026[(1)] = (5));

} else {
var statearr_33313_35029 = state_33291__$1;
(statearr_33313_35029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (15))){
var inst_33165 = (state_33291[(17)]);
var inst_33162 = (state_33291[(14)]);
var inst_33163 = (state_33291[(15)]);
var inst_33164 = (state_33291[(16)]);
var inst_33180 = (state_33291[(2)]);
var inst_33181 = (inst_33165 + (1));
var tmp33303 = inst_33164;
var tmp33305 = inst_33163;
var tmp33306 = inst_33162;
var inst_33162__$1 = tmp33306;
var inst_33163__$1 = tmp33305;
var inst_33164__$1 = tmp33303;
var inst_33165__$1 = inst_33181;
var state_33291__$1 = (function (){var statearr_33316 = state_33291;
(statearr_33316[(18)] = inst_33180);

(statearr_33316[(14)] = inst_33162__$1);

(statearr_33316[(15)] = inst_33163__$1);

(statearr_33316[(16)] = inst_33164__$1);

(statearr_33316[(17)] = inst_33165__$1);

return statearr_33316;
})();
var statearr_33318_35032 = state_33291__$1;
(statearr_33318_35032[(2)] = null);

(statearr_33318_35032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (21))){
var inst_33209 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33323_35033 = state_33291__$1;
(statearr_33323_35033[(2)] = inst_33209);

(statearr_33323_35033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (31))){
var inst_33237 = (state_33291[(11)]);
var inst_33241 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33237);
var state_33291__$1 = state_33291;
var statearr_33324_35035 = state_33291__$1;
(statearr_33324_35035[(2)] = inst_33241);

(statearr_33324_35035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (32))){
var inst_33232 = (state_33291[(10)]);
var inst_33229 = (state_33291[(19)]);
var inst_33230 = (state_33291[(9)]);
var inst_33231 = (state_33291[(20)]);
var inst_33243 = (state_33291[(2)]);
var inst_33244 = (inst_33232 + (1));
var tmp33319 = inst_33229;
var tmp33320 = inst_33230;
var tmp33321 = inst_33231;
var inst_33229__$1 = tmp33319;
var inst_33230__$1 = tmp33320;
var inst_33231__$1 = tmp33321;
var inst_33232__$1 = inst_33244;
var state_33291__$1 = (function (){var statearr_33325 = state_33291;
(statearr_33325[(21)] = inst_33243);

(statearr_33325[(19)] = inst_33229__$1);

(statearr_33325[(9)] = inst_33230__$1);

(statearr_33325[(20)] = inst_33231__$1);

(statearr_33325[(10)] = inst_33232__$1);

return statearr_33325;
})();
var statearr_33326_35038 = state_33291__$1;
(statearr_33326_35038[(2)] = null);

(statearr_33326_35038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (40))){
var inst_33256 = (state_33291[(22)]);
var inst_33261 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33256);
var state_33291__$1 = state_33291;
var statearr_33328_35040 = state_33291__$1;
(statearr_33328_35040[(2)] = inst_33261);

(statearr_33328_35040[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (33))){
var inst_33247 = (state_33291[(23)]);
var inst_33249 = cljs.core.chunked_seq_QMARK_(inst_33247);
var state_33291__$1 = state_33291;
if(inst_33249){
var statearr_33332_35041 = state_33291__$1;
(statearr_33332_35041[(1)] = (36));

} else {
var statearr_33333_35042 = state_33291__$1;
(statearr_33333_35042[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (13))){
var inst_33174 = (state_33291[(24)]);
var inst_33177 = cljs.core.async.close_BANG_(inst_33174);
var state_33291__$1 = state_33291;
var statearr_33334_35054 = state_33291__$1;
(statearr_33334_35054[(2)] = inst_33177);

(statearr_33334_35054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (22))){
var inst_33197 = (state_33291[(8)]);
var inst_33202 = cljs.core.async.close_BANG_(inst_33197);
var state_33291__$1 = state_33291;
var statearr_33335_35060 = state_33291__$1;
(statearr_33335_35060[(2)] = inst_33202);

(statearr_33335_35060[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (36))){
var inst_33247 = (state_33291[(23)]);
var inst_33251 = cljs.core.chunk_first(inst_33247);
var inst_33252 = cljs.core.chunk_rest(inst_33247);
var inst_33253 = cljs.core.count(inst_33251);
var inst_33229 = inst_33252;
var inst_33230 = inst_33251;
var inst_33231 = inst_33253;
var inst_33232 = (0);
var state_33291__$1 = (function (){var statearr_33336 = state_33291;
(statearr_33336[(19)] = inst_33229);

(statearr_33336[(9)] = inst_33230);

(statearr_33336[(20)] = inst_33231);

(statearr_33336[(10)] = inst_33232);

return statearr_33336;
})();
var statearr_33337_35063 = state_33291__$1;
(statearr_33337_35063[(2)] = null);

(statearr_33337_35063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (41))){
var inst_33247 = (state_33291[(23)]);
var inst_33263 = (state_33291[(2)]);
var inst_33264 = cljs.core.next(inst_33247);
var inst_33229 = inst_33264;
var inst_33230 = null;
var inst_33231 = (0);
var inst_33232 = (0);
var state_33291__$1 = (function (){var statearr_33338 = state_33291;
(statearr_33338[(25)] = inst_33263);

(statearr_33338[(19)] = inst_33229);

(statearr_33338[(9)] = inst_33230);

(statearr_33338[(20)] = inst_33231);

(statearr_33338[(10)] = inst_33232);

return statearr_33338;
})();
var statearr_33339_35066 = state_33291__$1;
(statearr_33339_35066[(2)] = null);

(statearr_33339_35066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (43))){
var state_33291__$1 = state_33291;
var statearr_33340_35067 = state_33291__$1;
(statearr_33340_35067[(2)] = null);

(statearr_33340_35067[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (29))){
var inst_33273 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33345_35069 = state_33291__$1;
(statearr_33345_35069[(2)] = inst_33273);

(statearr_33345_35069[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (44))){
var inst_33283 = (state_33291[(2)]);
var state_33291__$1 = (function (){var statearr_33346 = state_33291;
(statearr_33346[(26)] = inst_33283);

return statearr_33346;
})();
var statearr_33347_35071 = state_33291__$1;
(statearr_33347_35071[(2)] = null);

(statearr_33347_35071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (6))){
var inst_33219 = (state_33291[(27)]);
var inst_33218 = cljs.core.deref(cs);
var inst_33219__$1 = cljs.core.keys(inst_33218);
var inst_33220 = cljs.core.count(inst_33219__$1);
var inst_33221 = cljs.core.reset_BANG_(dctr,inst_33220);
var inst_33226 = cljs.core.seq(inst_33219__$1);
var inst_33229 = inst_33226;
var inst_33230 = null;
var inst_33231 = (0);
var inst_33232 = (0);
var state_33291__$1 = (function (){var statearr_33351 = state_33291;
(statearr_33351[(27)] = inst_33219__$1);

(statearr_33351[(28)] = inst_33221);

(statearr_33351[(19)] = inst_33229);

(statearr_33351[(9)] = inst_33230);

(statearr_33351[(20)] = inst_33231);

(statearr_33351[(10)] = inst_33232);

return statearr_33351;
})();
var statearr_33352_35073 = state_33291__$1;
(statearr_33352_35073[(2)] = null);

(statearr_33352_35073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (28))){
var inst_33229 = (state_33291[(19)]);
var inst_33247 = (state_33291[(23)]);
var inst_33247__$1 = cljs.core.seq(inst_33229);
var state_33291__$1 = (function (){var statearr_33353 = state_33291;
(statearr_33353[(23)] = inst_33247__$1);

return statearr_33353;
})();
if(inst_33247__$1){
var statearr_33354_35079 = state_33291__$1;
(statearr_33354_35079[(1)] = (33));

} else {
var statearr_33355_35080 = state_33291__$1;
(statearr_33355_35080[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (25))){
var inst_33232 = (state_33291[(10)]);
var inst_33231 = (state_33291[(20)]);
var inst_33234 = (inst_33232 < inst_33231);
var inst_33235 = inst_33234;
var state_33291__$1 = state_33291;
if(cljs.core.truth_(inst_33235)){
var statearr_33357_35084 = state_33291__$1;
(statearr_33357_35084[(1)] = (27));

} else {
var statearr_33358_35085 = state_33291__$1;
(statearr_33358_35085[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (34))){
var state_33291__$1 = state_33291;
var statearr_33363_35087 = state_33291__$1;
(statearr_33363_35087[(2)] = null);

(statearr_33363_35087[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (17))){
var state_33291__$1 = state_33291;
var statearr_33364_35111 = state_33291__$1;
(statearr_33364_35111[(2)] = null);

(statearr_33364_35111[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (3))){
var inst_33288 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33291__$1,inst_33288);
} else {
if((state_val_33292 === (12))){
var inst_33214 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33365_35112 = state_33291__$1;
(statearr_33365_35112[(2)] = inst_33214);

(statearr_33365_35112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (2))){
var state_33291__$1 = state_33291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33291__$1,(4),ch);
} else {
if((state_val_33292 === (23))){
var state_33291__$1 = state_33291;
var statearr_33367_35115 = state_33291__$1;
(statearr_33367_35115[(2)] = null);

(statearr_33367_35115[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (35))){
var inst_33271 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33371_35116 = state_33291__$1;
(statearr_33371_35116[(2)] = inst_33271);

(statearr_33371_35116[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (19))){
var inst_33184 = (state_33291[(7)]);
var inst_33188 = cljs.core.chunk_first(inst_33184);
var inst_33189 = cljs.core.chunk_rest(inst_33184);
var inst_33190 = cljs.core.count(inst_33188);
var inst_33162 = inst_33189;
var inst_33163 = inst_33188;
var inst_33164 = inst_33190;
var inst_33165 = (0);
var state_33291__$1 = (function (){var statearr_33372 = state_33291;
(statearr_33372[(14)] = inst_33162);

(statearr_33372[(15)] = inst_33163);

(statearr_33372[(16)] = inst_33164);

(statearr_33372[(17)] = inst_33165);

return statearr_33372;
})();
var statearr_33373_35118 = state_33291__$1;
(statearr_33373_35118[(2)] = null);

(statearr_33373_35118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (11))){
var inst_33162 = (state_33291[(14)]);
var inst_33184 = (state_33291[(7)]);
var inst_33184__$1 = cljs.core.seq(inst_33162);
var state_33291__$1 = (function (){var statearr_33375 = state_33291;
(statearr_33375[(7)] = inst_33184__$1);

return statearr_33375;
})();
if(inst_33184__$1){
var statearr_33376_35120 = state_33291__$1;
(statearr_33376_35120[(1)] = (16));

} else {
var statearr_33377_35121 = state_33291__$1;
(statearr_33377_35121[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (9))){
var inst_33216 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33378_35123 = state_33291__$1;
(statearr_33378_35123[(2)] = inst_33216);

(statearr_33378_35123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (5))){
var inst_33160 = cljs.core.deref(cs);
var inst_33161 = cljs.core.seq(inst_33160);
var inst_33162 = inst_33161;
var inst_33163 = null;
var inst_33164 = (0);
var inst_33165 = (0);
var state_33291__$1 = (function (){var statearr_33379 = state_33291;
(statearr_33379[(14)] = inst_33162);

(statearr_33379[(15)] = inst_33163);

(statearr_33379[(16)] = inst_33164);

(statearr_33379[(17)] = inst_33165);

return statearr_33379;
})();
var statearr_33380_35125 = state_33291__$1;
(statearr_33380_35125[(2)] = null);

(statearr_33380_35125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (14))){
var state_33291__$1 = state_33291;
var statearr_33381_35126 = state_33291__$1;
(statearr_33381_35126[(2)] = null);

(statearr_33381_35126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (45))){
var inst_33280 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33383_35128 = state_33291__$1;
(statearr_33383_35128[(2)] = inst_33280);

(statearr_33383_35128[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (26))){
var inst_33219 = (state_33291[(27)]);
var inst_33275 = (state_33291[(2)]);
var inst_33276 = cljs.core.seq(inst_33219);
var state_33291__$1 = (function (){var statearr_33386 = state_33291;
(statearr_33386[(29)] = inst_33275);

return statearr_33386;
})();
if(inst_33276){
var statearr_33387_35154 = state_33291__$1;
(statearr_33387_35154[(1)] = (42));

} else {
var statearr_33388_35156 = state_33291__$1;
(statearr_33388_35156[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (16))){
var inst_33184 = (state_33291[(7)]);
var inst_33186 = cljs.core.chunked_seq_QMARK_(inst_33184);
var state_33291__$1 = state_33291;
if(inst_33186){
var statearr_33389_35160 = state_33291__$1;
(statearr_33389_35160[(1)] = (19));

} else {
var statearr_33390_35162 = state_33291__$1;
(statearr_33390_35162[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (38))){
var inst_33268 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33391_35164 = state_33291__$1;
(statearr_33391_35164[(2)] = inst_33268);

(statearr_33391_35164[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (30))){
var state_33291__$1 = state_33291;
var statearr_33392_35168 = state_33291__$1;
(statearr_33392_35168[(2)] = null);

(statearr_33392_35168[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (10))){
var inst_33163 = (state_33291[(15)]);
var inst_33165 = (state_33291[(17)]);
var inst_33173 = cljs.core._nth(inst_33163,inst_33165);
var inst_33174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33173,(0),null);
var inst_33175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33173,(1),null);
var state_33291__$1 = (function (){var statearr_33393 = state_33291;
(statearr_33393[(24)] = inst_33174);

return statearr_33393;
})();
if(cljs.core.truth_(inst_33175)){
var statearr_33394_35174 = state_33291__$1;
(statearr_33394_35174[(1)] = (13));

} else {
var statearr_33395_35176 = state_33291__$1;
(statearr_33395_35176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (18))){
var inst_33212 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33396_35179 = state_33291__$1;
(statearr_33396_35179[(2)] = inst_33212);

(statearr_33396_35179[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (42))){
var state_33291__$1 = state_33291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33291__$1,(45),dchan);
} else {
if((state_val_33292 === (37))){
var inst_33247 = (state_33291[(23)]);
var inst_33256 = (state_33291[(22)]);
var inst_33153 = (state_33291[(12)]);
var inst_33256__$1 = cljs.core.first(inst_33247);
var inst_33257 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33256__$1,inst_33153,done);
var state_33291__$1 = (function (){var statearr_33397 = state_33291;
(statearr_33397[(22)] = inst_33256__$1);

return statearr_33397;
})();
if(cljs.core.truth_(inst_33257)){
var statearr_33398_35180 = state_33291__$1;
(statearr_33398_35180[(1)] = (39));

} else {
var statearr_33399_35181 = state_33291__$1;
(statearr_33399_35181[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (8))){
var inst_33165 = (state_33291[(17)]);
var inst_33164 = (state_33291[(16)]);
var inst_33167 = (inst_33165 < inst_33164);
var inst_33168 = inst_33167;
var state_33291__$1 = state_33291;
if(cljs.core.truth_(inst_33168)){
var statearr_33403_35182 = state_33291__$1;
(statearr_33403_35182[(1)] = (10));

} else {
var statearr_33405_35185 = state_33291__$1;
(statearr_33405_35185[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32540__auto__ = null;
var cljs$core$async$mult_$_state_machine__32540__auto____0 = (function (){
var statearr_33406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33406[(0)] = cljs$core$async$mult_$_state_machine__32540__auto__);

(statearr_33406[(1)] = (1));

return statearr_33406;
});
var cljs$core$async$mult_$_state_machine__32540__auto____1 = (function (state_33291){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_33291);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e33408){var ex__32543__auto__ = e33408;
var statearr_33409_35200 = state_33291;
(statearr_33409_35200[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_33291[(4)]))){
var statearr_33410_35202 = state_33291;
(statearr_33410_35202[(1)] = cljs.core.first((state_33291[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35204 = state_33291;
state_33291 = G__35204;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32540__auto__ = function(state_33291){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32540__auto____1.call(this,state_33291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32540__auto____0;
cljs$core$async$mult_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32540__auto____1;
return cljs$core$async$mult_$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_33414 = f__32611__auto__();
(statearr_33414[(6)] = c__32610__auto___34997);

return statearr_33414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
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
var G__33419 = arguments.length;
switch (G__33419) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35211 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35211(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35214 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35214(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35217 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35217(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35243 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35243(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35249 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35249(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35254 = arguments.length;
var i__5750__auto___35255 = (0);
while(true){
if((i__5750__auto___35255 < len__5749__auto___35254)){
args__5755__auto__.push((arguments[i__5750__auto___35255]));

var G__35256 = (i__5750__auto___35255 + (1));
i__5750__auto___35255 = G__35256;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33453){
var map__33454 = p__33453;
var map__33454__$1 = cljs.core.__destructure_map(map__33454);
var opts = map__33454__$1;
var statearr_33455_35258 = state;
(statearr_33455_35258[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33457_35263 = state;
(statearr_33457_35263[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33458_35266 = state;
(statearr_33458_35266[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33445){
var G__33446 = cljs.core.first(seq33445);
var seq33445__$1 = cljs.core.next(seq33445);
var G__33447 = cljs.core.first(seq33445__$1);
var seq33445__$2 = cljs.core.next(seq33445__$1);
var G__33448 = cljs.core.first(seq33445__$2);
var seq33445__$3 = cljs.core.next(seq33445__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33446,G__33447,G__33448,seq33445__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33468 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33469){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33469 = meta33469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33470,meta33469__$1){
var self__ = this;
var _33470__$1 = this;
return (new cljs.core.async.t_cljs$core$async33468(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33469__$1));
}));

(cljs.core.async.t_cljs$core$async33468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33470){
var self__ = this;
var _33470__$1 = this;
return self__.meta33469;
}));

(cljs.core.async.t_cljs$core$async33468.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33468.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33468.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33468.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33468.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33468.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33468.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33469","meta33469",231686476,null)], null);
}));

(cljs.core.async.t_cljs$core$async33468.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33468");

(cljs.core.async.t_cljs$core$async33468.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33468");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33468.
 */
cljs.core.async.__GT_t_cljs$core$async33468 = (function cljs$core$async$__GT_t_cljs$core$async33468(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33469){
return (new cljs.core.async.t_cljs$core$async33468(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33469));
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
var m = (new cljs.core.async.t_cljs$core$async33468(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32610__auto___35304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_33564){
var state_val_33565 = (state_33564[(1)]);
if((state_val_33565 === (7))){
var inst_33515 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33515)){
var statearr_33567_35305 = state_33564__$1;
(statearr_33567_35305[(1)] = (8));

} else {
var statearr_33568_35306 = state_33564__$1;
(statearr_33568_35306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (20))){
var inst_33504 = (state_33564[(7)]);
var state_33564__$1 = state_33564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33564__$1,(23),out,inst_33504);
} else {
if((state_val_33565 === (1))){
var inst_33485 = calc_state();
var inst_33486 = cljs.core.__destructure_map(inst_33485);
var inst_33487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33486,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33486,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33486,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33490 = inst_33485;
var state_33564__$1 = (function (){var statearr_33576 = state_33564;
(statearr_33576[(8)] = inst_33487);

(statearr_33576[(9)] = inst_33488);

(statearr_33576[(10)] = inst_33489);

(statearr_33576[(11)] = inst_33490);

return statearr_33576;
})();
var statearr_33578_35307 = state_33564__$1;
(statearr_33578_35307[(2)] = null);

(statearr_33578_35307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (24))){
var inst_33493 = (state_33564[(12)]);
var inst_33490 = inst_33493;
var state_33564__$1 = (function (){var statearr_33580 = state_33564;
(statearr_33580[(11)] = inst_33490);

return statearr_33580;
})();
var statearr_33581_35308 = state_33564__$1;
(statearr_33581_35308[(2)] = null);

(statearr_33581_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (4))){
var inst_33504 = (state_33564[(7)]);
var inst_33510 = (state_33564[(13)]);
var inst_33503 = (state_33564[(2)]);
var inst_33504__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33503,(0),null);
var inst_33508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33503,(1),null);
var inst_33510__$1 = (inst_33504__$1 == null);
var state_33564__$1 = (function (){var statearr_33586 = state_33564;
(statearr_33586[(7)] = inst_33504__$1);

(statearr_33586[(14)] = inst_33508);

(statearr_33586[(13)] = inst_33510__$1);

return statearr_33586;
})();
if(cljs.core.truth_(inst_33510__$1)){
var statearr_33589_35309 = state_33564__$1;
(statearr_33589_35309[(1)] = (5));

} else {
var statearr_33590_35310 = state_33564__$1;
(statearr_33590_35310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (15))){
var inst_33494 = (state_33564[(15)]);
var inst_33533 = (state_33564[(16)]);
var inst_33533__$1 = cljs.core.empty_QMARK_(inst_33494);
var state_33564__$1 = (function (){var statearr_33597 = state_33564;
(statearr_33597[(16)] = inst_33533__$1);

return statearr_33597;
})();
if(inst_33533__$1){
var statearr_33602_35311 = state_33564__$1;
(statearr_33602_35311[(1)] = (17));

} else {
var statearr_33604_35312 = state_33564__$1;
(statearr_33604_35312[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (21))){
var inst_33493 = (state_33564[(12)]);
var inst_33490 = inst_33493;
var state_33564__$1 = (function (){var statearr_33607 = state_33564;
(statearr_33607[(11)] = inst_33490);

return statearr_33607;
})();
var statearr_33609_35330 = state_33564__$1;
(statearr_33609_35330[(2)] = null);

(statearr_33609_35330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (13))){
var inst_33523 = (state_33564[(2)]);
var inst_33524 = calc_state();
var inst_33490 = inst_33524;
var state_33564__$1 = (function (){var statearr_33614 = state_33564;
(statearr_33614[(17)] = inst_33523);

(statearr_33614[(11)] = inst_33490);

return statearr_33614;
})();
var statearr_33615_35331 = state_33564__$1;
(statearr_33615_35331[(2)] = null);

(statearr_33615_35331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (22))){
var inst_33557 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33617_35332 = state_33564__$1;
(statearr_33617_35332[(2)] = inst_33557);

(statearr_33617_35332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (6))){
var inst_33508 = (state_33564[(14)]);
var inst_33513 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33508,change);
var state_33564__$1 = state_33564;
var statearr_33618_35333 = state_33564__$1;
(statearr_33618_35333[(2)] = inst_33513);

(statearr_33618_35333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (25))){
var state_33564__$1 = state_33564;
var statearr_33619_35334 = state_33564__$1;
(statearr_33619_35334[(2)] = null);

(statearr_33619_35334[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (17))){
var inst_33495 = (state_33564[(18)]);
var inst_33508 = (state_33564[(14)]);
var inst_33535 = (inst_33495.cljs$core$IFn$_invoke$arity$1 ? inst_33495.cljs$core$IFn$_invoke$arity$1(inst_33508) : inst_33495.call(null,inst_33508));
var inst_33536 = cljs.core.not(inst_33535);
var state_33564__$1 = state_33564;
var statearr_33622_35335 = state_33564__$1;
(statearr_33622_35335[(2)] = inst_33536);

(statearr_33622_35335[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (3))){
var inst_33561 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33564__$1,inst_33561);
} else {
if((state_val_33565 === (12))){
var state_33564__$1 = state_33564;
var statearr_33628_35336 = state_33564__$1;
(statearr_33628_35336[(2)] = null);

(statearr_33628_35336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (2))){
var inst_33490 = (state_33564[(11)]);
var inst_33493 = (state_33564[(12)]);
var inst_33493__$1 = cljs.core.__destructure_map(inst_33490);
var inst_33494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33493__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33493__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33493__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33564__$1 = (function (){var statearr_33630 = state_33564;
(statearr_33630[(12)] = inst_33493__$1);

(statearr_33630[(15)] = inst_33494);

(statearr_33630[(18)] = inst_33495);

return statearr_33630;
})();
return cljs.core.async.ioc_alts_BANG_(state_33564__$1,(4),inst_33496);
} else {
if((state_val_33565 === (23))){
var inst_33548 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33548)){
var statearr_33632_35337 = state_33564__$1;
(statearr_33632_35337[(1)] = (24));

} else {
var statearr_33635_35338 = state_33564__$1;
(statearr_33635_35338[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (19))){
var inst_33539 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33637_35339 = state_33564__$1;
(statearr_33637_35339[(2)] = inst_33539);

(statearr_33637_35339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (11))){
var inst_33508 = (state_33564[(14)]);
var inst_33520 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33508);
var state_33564__$1 = state_33564;
var statearr_33638_35340 = state_33564__$1;
(statearr_33638_35340[(2)] = inst_33520);

(statearr_33638_35340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (9))){
var inst_33494 = (state_33564[(15)]);
var inst_33508 = (state_33564[(14)]);
var inst_33529 = (state_33564[(19)]);
var inst_33529__$1 = (inst_33494.cljs$core$IFn$_invoke$arity$1 ? inst_33494.cljs$core$IFn$_invoke$arity$1(inst_33508) : inst_33494.call(null,inst_33508));
var state_33564__$1 = (function (){var statearr_33642 = state_33564;
(statearr_33642[(19)] = inst_33529__$1);

return statearr_33642;
})();
if(cljs.core.truth_(inst_33529__$1)){
var statearr_33643_35341 = state_33564__$1;
(statearr_33643_35341[(1)] = (14));

} else {
var statearr_33644_35342 = state_33564__$1;
(statearr_33644_35342[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (5))){
var inst_33510 = (state_33564[(13)]);
var state_33564__$1 = state_33564;
var statearr_33645_35343 = state_33564__$1;
(statearr_33645_35343[(2)] = inst_33510);

(statearr_33645_35343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (14))){
var inst_33529 = (state_33564[(19)]);
var state_33564__$1 = state_33564;
var statearr_33647_35344 = state_33564__$1;
(statearr_33647_35344[(2)] = inst_33529);

(statearr_33647_35344[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (26))){
var inst_33553 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33649_35345 = state_33564__$1;
(statearr_33649_35345[(2)] = inst_33553);

(statearr_33649_35345[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (16))){
var inst_33541 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33541)){
var statearr_33652_35346 = state_33564__$1;
(statearr_33652_35346[(1)] = (20));

} else {
var statearr_33653_35347 = state_33564__$1;
(statearr_33653_35347[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (10))){
var inst_33559 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33657_35349 = state_33564__$1;
(statearr_33657_35349[(2)] = inst_33559);

(statearr_33657_35349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (18))){
var inst_33533 = (state_33564[(16)]);
var state_33564__$1 = state_33564;
var statearr_33659_35351 = state_33564__$1;
(statearr_33659_35351[(2)] = inst_33533);

(statearr_33659_35351[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (8))){
var inst_33504 = (state_33564[(7)]);
var inst_33517 = (inst_33504 == null);
var state_33564__$1 = state_33564;
if(cljs.core.truth_(inst_33517)){
var statearr_33661_35353 = state_33564__$1;
(statearr_33661_35353[(1)] = (11));

} else {
var statearr_33662_35355 = state_33564__$1;
(statearr_33662_35355[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32540__auto__ = null;
var cljs$core$async$mix_$_state_machine__32540__auto____0 = (function (){
var statearr_33666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33666[(0)] = cljs$core$async$mix_$_state_machine__32540__auto__);

(statearr_33666[(1)] = (1));

return statearr_33666;
});
var cljs$core$async$mix_$_state_machine__32540__auto____1 = (function (state_33564){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_33564);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e33667){var ex__32543__auto__ = e33667;
var statearr_33668_35356 = state_33564;
(statearr_33668_35356[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_33564[(4)]))){
var statearr_33669_35357 = state_33564;
(statearr_33669_35357[(1)] = cljs.core.first((state_33564[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35360 = state_33564;
state_33564 = G__35360;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32540__auto__ = function(state_33564){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32540__auto____1.call(this,state_33564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32540__auto____0;
cljs$core$async$mix_$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32540__auto____1;
return cljs$core$async$mix_$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_33670 = f__32611__auto__();
(statearr_33670[(6)] = c__32610__auto___35304);

return statearr_33670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35361 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35361(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35362 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35362(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35363 = (function() {
var G__35364 = null;
var G__35364__1 = (function (p){
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
var G__35364__2 = (function (p,v){
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
G__35364 = function(p,v){
switch(arguments.length){
case 1:
return G__35364__1.call(this,p);
case 2:
return G__35364__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35364.cljs$core$IFn$_invoke$arity$1 = G__35364__1;
G__35364.cljs$core$IFn$_invoke$arity$2 = G__35364__2;
return G__35364;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33698 = arguments.length;
switch (G__33698) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35363(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35363(p,v);
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
cljs.core.async.t_cljs$core$async33718 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33719){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33719 = meta33719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33720,meta33719__$1){
var self__ = this;
var _33720__$1 = this;
return (new cljs.core.async.t_cljs$core$async33718(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33719__$1));
}));

(cljs.core.async.t_cljs$core$async33718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33720){
var self__ = this;
var _33720__$1 = this;
return self__.meta33719;
}));

(cljs.core.async.t_cljs$core$async33718.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33718.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33718.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33718.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33718.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33718.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33719","meta33719",826405620,null)], null);
}));

(cljs.core.async.t_cljs$core$async33718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33718");

(cljs.core.async.t_cljs$core$async33718.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33718.
 */
cljs.core.async.__GT_t_cljs$core$async33718 = (function cljs$core$async$__GT_t_cljs$core$async33718(ch,topic_fn,buf_fn,mults,ensure_mult,meta33719){
return (new cljs.core.async.t_cljs$core$async33718(ch,topic_fn,buf_fn,mults,ensure_mult,meta33719));
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
var G__33714 = arguments.length;
switch (G__33714) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33710_SHARP_){
if(cljs.core.truth_((p1__33710_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33710_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33710_SHARP_.call(null,topic)))){
return p1__33710_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33710_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33718(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32610__auto___35381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_33817){
var state_val_33819 = (state_33817[(1)]);
if((state_val_33819 === (7))){
var inst_33813 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
var statearr_33821_35382 = state_33817__$1;
(statearr_33821_35382[(2)] = inst_33813);

(statearr_33821_35382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (20))){
var state_33817__$1 = state_33817;
var statearr_33822_35383 = state_33817__$1;
(statearr_33822_35383[(2)] = null);

(statearr_33822_35383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (1))){
var state_33817__$1 = state_33817;
var statearr_33833_35384 = state_33817__$1;
(statearr_33833_35384[(2)] = null);

(statearr_33833_35384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (24))){
var inst_33795 = (state_33817[(7)]);
var inst_33805 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33795);
var state_33817__$1 = state_33817;
var statearr_33835_35385 = state_33817__$1;
(statearr_33835_35385[(2)] = inst_33805);

(statearr_33835_35385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (4))){
var inst_33736 = (state_33817[(8)]);
var inst_33736__$1 = (state_33817[(2)]);
var inst_33737 = (inst_33736__$1 == null);
var state_33817__$1 = (function (){var statearr_33842 = state_33817;
(statearr_33842[(8)] = inst_33736__$1);

return statearr_33842;
})();
if(cljs.core.truth_(inst_33737)){
var statearr_33843_35386 = state_33817__$1;
(statearr_33843_35386[(1)] = (5));

} else {
var statearr_33844_35387 = state_33817__$1;
(statearr_33844_35387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (15))){
var inst_33789 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
var statearr_33846_35388 = state_33817__$1;
(statearr_33846_35388[(2)] = inst_33789);

(statearr_33846_35388[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (21))){
var inst_33810 = (state_33817[(2)]);
var state_33817__$1 = (function (){var statearr_33847 = state_33817;
(statearr_33847[(9)] = inst_33810);

return statearr_33847;
})();
var statearr_33848_35392 = state_33817__$1;
(statearr_33848_35392[(2)] = null);

(statearr_33848_35392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (13))){
var inst_33765 = (state_33817[(10)]);
var inst_33772 = cljs.core.chunked_seq_QMARK_(inst_33765);
var state_33817__$1 = state_33817;
if(inst_33772){
var statearr_33850_35393 = state_33817__$1;
(statearr_33850_35393[(1)] = (16));

} else {
var statearr_33851_35394 = state_33817__$1;
(statearr_33851_35394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (22))){
var inst_33802 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
if(cljs.core.truth_(inst_33802)){
var statearr_33854_35395 = state_33817__$1;
(statearr_33854_35395[(1)] = (23));

} else {
var statearr_33856_35396 = state_33817__$1;
(statearr_33856_35396[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (6))){
var inst_33736 = (state_33817[(8)]);
var inst_33795 = (state_33817[(7)]);
var inst_33797 = (state_33817[(11)]);
var inst_33795__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33736) : topic_fn.call(null,inst_33736));
var inst_33796 = cljs.core.deref(mults);
var inst_33797__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33796,inst_33795__$1);
var state_33817__$1 = (function (){var statearr_33857 = state_33817;
(statearr_33857[(7)] = inst_33795__$1);

(statearr_33857[(11)] = inst_33797__$1);

return statearr_33857;
})();
if(cljs.core.truth_(inst_33797__$1)){
var statearr_33859_35399 = state_33817__$1;
(statearr_33859_35399[(1)] = (19));

} else {
var statearr_33860_35400 = state_33817__$1;
(statearr_33860_35400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (25))){
var inst_33807 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
var statearr_33862_35401 = state_33817__$1;
(statearr_33862_35401[(2)] = inst_33807);

(statearr_33862_35401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (17))){
var inst_33765 = (state_33817[(10)]);
var inst_33780 = cljs.core.first(inst_33765);
var inst_33781 = cljs.core.async.muxch_STAR_(inst_33780);
var inst_33782 = cljs.core.async.close_BANG_(inst_33781);
var inst_33783 = cljs.core.next(inst_33765);
var inst_33749 = inst_33783;
var inst_33750 = null;
var inst_33751 = (0);
var inst_33752 = (0);
var state_33817__$1 = (function (){var statearr_33863 = state_33817;
(statearr_33863[(12)] = inst_33782);

(statearr_33863[(13)] = inst_33749);

(statearr_33863[(14)] = inst_33750);

(statearr_33863[(15)] = inst_33751);

(statearr_33863[(16)] = inst_33752);

return statearr_33863;
})();
var statearr_33866_35402 = state_33817__$1;
(statearr_33866_35402[(2)] = null);

(statearr_33866_35402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (3))){
var inst_33815 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33817__$1,inst_33815);
} else {
if((state_val_33819 === (12))){
var inst_33791 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
var statearr_33867_35405 = state_33817__$1;
(statearr_33867_35405[(2)] = inst_33791);

(statearr_33867_35405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (2))){
var state_33817__$1 = state_33817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33817__$1,(4),ch);
} else {
if((state_val_33819 === (23))){
var state_33817__$1 = state_33817;
var statearr_33869_35406 = state_33817__$1;
(statearr_33869_35406[(2)] = null);

(statearr_33869_35406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (19))){
var inst_33797 = (state_33817[(11)]);
var inst_33736 = (state_33817[(8)]);
var inst_33800 = cljs.core.async.muxch_STAR_(inst_33797);
var state_33817__$1 = state_33817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33817__$1,(22),inst_33800,inst_33736);
} else {
if((state_val_33819 === (11))){
var inst_33749 = (state_33817[(13)]);
var inst_33765 = (state_33817[(10)]);
var inst_33765__$1 = cljs.core.seq(inst_33749);
var state_33817__$1 = (function (){var statearr_33873 = state_33817;
(statearr_33873[(10)] = inst_33765__$1);

return statearr_33873;
})();
if(inst_33765__$1){
var statearr_33875_35420 = state_33817__$1;
(statearr_33875_35420[(1)] = (13));

} else {
var statearr_33876_35421 = state_33817__$1;
(statearr_33876_35421[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (9))){
var inst_33793 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
var statearr_33878_35422 = state_33817__$1;
(statearr_33878_35422[(2)] = inst_33793);

(statearr_33878_35422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (5))){
var inst_33744 = cljs.core.deref(mults);
var inst_33745 = cljs.core.vals(inst_33744);
var inst_33746 = cljs.core.seq(inst_33745);
var inst_33749 = inst_33746;
var inst_33750 = null;
var inst_33751 = (0);
var inst_33752 = (0);
var state_33817__$1 = (function (){var statearr_33880 = state_33817;
(statearr_33880[(13)] = inst_33749);

(statearr_33880[(14)] = inst_33750);

(statearr_33880[(15)] = inst_33751);

(statearr_33880[(16)] = inst_33752);

return statearr_33880;
})();
var statearr_33885_35423 = state_33817__$1;
(statearr_33885_35423[(2)] = null);

(statearr_33885_35423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (14))){
var state_33817__$1 = state_33817;
var statearr_33893_35424 = state_33817__$1;
(statearr_33893_35424[(2)] = null);

(statearr_33893_35424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (16))){
var inst_33765 = (state_33817[(10)]);
var inst_33774 = cljs.core.chunk_first(inst_33765);
var inst_33775 = cljs.core.chunk_rest(inst_33765);
var inst_33776 = cljs.core.count(inst_33774);
var inst_33749 = inst_33775;
var inst_33750 = inst_33774;
var inst_33751 = inst_33776;
var inst_33752 = (0);
var state_33817__$1 = (function (){var statearr_33894 = state_33817;
(statearr_33894[(13)] = inst_33749);

(statearr_33894[(14)] = inst_33750);

(statearr_33894[(15)] = inst_33751);

(statearr_33894[(16)] = inst_33752);

return statearr_33894;
})();
var statearr_33896_35425 = state_33817__$1;
(statearr_33896_35425[(2)] = null);

(statearr_33896_35425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (10))){
var inst_33750 = (state_33817[(14)]);
var inst_33752 = (state_33817[(16)]);
var inst_33749 = (state_33817[(13)]);
var inst_33751 = (state_33817[(15)]);
var inst_33759 = cljs.core._nth(inst_33750,inst_33752);
var inst_33760 = cljs.core.async.muxch_STAR_(inst_33759);
var inst_33761 = cljs.core.async.close_BANG_(inst_33760);
var inst_33762 = (inst_33752 + (1));
var tmp33890 = inst_33751;
var tmp33891 = inst_33749;
var tmp33892 = inst_33750;
var inst_33749__$1 = tmp33891;
var inst_33750__$1 = tmp33892;
var inst_33751__$1 = tmp33890;
var inst_33752__$1 = inst_33762;
var state_33817__$1 = (function (){var statearr_33899 = state_33817;
(statearr_33899[(17)] = inst_33761);

(statearr_33899[(13)] = inst_33749__$1);

(statearr_33899[(14)] = inst_33750__$1);

(statearr_33899[(15)] = inst_33751__$1);

(statearr_33899[(16)] = inst_33752__$1);

return statearr_33899;
})();
var statearr_33902_35427 = state_33817__$1;
(statearr_33902_35427[(2)] = null);

(statearr_33902_35427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (18))){
var inst_33786 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
var statearr_33903_35428 = state_33817__$1;
(statearr_33903_35428[(2)] = inst_33786);

(statearr_33903_35428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (8))){
var inst_33752 = (state_33817[(16)]);
var inst_33751 = (state_33817[(15)]);
var inst_33754 = (inst_33752 < inst_33751);
var inst_33755 = inst_33754;
var state_33817__$1 = state_33817;
if(cljs.core.truth_(inst_33755)){
var statearr_33904_35429 = state_33817__$1;
(statearr_33904_35429[(1)] = (10));

} else {
var statearr_33905_35430 = state_33817__$1;
(statearr_33905_35430[(1)] = (11));

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
var cljs$core$async$state_machine__32540__auto__ = null;
var cljs$core$async$state_machine__32540__auto____0 = (function (){
var statearr_33907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33907[(0)] = cljs$core$async$state_machine__32540__auto__);

(statearr_33907[(1)] = (1));

return statearr_33907;
});
var cljs$core$async$state_machine__32540__auto____1 = (function (state_33817){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_33817);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e33908){var ex__32543__auto__ = e33908;
var statearr_33910_35431 = state_33817;
(statearr_33910_35431[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_33817[(4)]))){
var statearr_33911_35432 = state_33817;
(statearr_33911_35432[(1)] = cljs.core.first((state_33817[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35434 = state_33817;
state_33817 = G__35434;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$state_machine__32540__auto__ = function(state_33817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32540__auto____1.call(this,state_33817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32540__auto____0;
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32540__auto____1;
return cljs$core$async$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_33916 = f__32611__auto__();
(statearr_33916[(6)] = c__32610__auto___35381);

return statearr_33916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
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
var G__33919 = arguments.length;
switch (G__33919) {
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
var G__33927 = arguments.length;
switch (G__33927) {
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
var G__33931 = arguments.length;
switch (G__33931) {
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
var c__32610__auto___35446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_34000){
var state_val_34001 = (state_34000[(1)]);
if((state_val_34001 === (7))){
var state_34000__$1 = state_34000;
var statearr_34004_35448 = state_34000__$1;
(statearr_34004_35448[(2)] = null);

(statearr_34004_35448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (1))){
var state_34000__$1 = state_34000;
var statearr_34005_35449 = state_34000__$1;
(statearr_34005_35449[(2)] = null);

(statearr_34005_35449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (4))){
var inst_33937 = (state_34000[(7)]);
var inst_33936 = (state_34000[(8)]);
var inst_33939 = (inst_33937 < inst_33936);
var state_34000__$1 = state_34000;
if(cljs.core.truth_(inst_33939)){
var statearr_34006_35450 = state_34000__$1;
(statearr_34006_35450[(1)] = (6));

} else {
var statearr_34007_35451 = state_34000__$1;
(statearr_34007_35451[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (15))){
var inst_33985 = (state_34000[(9)]);
var inst_33990 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33985);
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34000__$1,(17),out,inst_33990);
} else {
if((state_val_34001 === (13))){
var inst_33985 = (state_34000[(9)]);
var inst_33985__$1 = (state_34000[(2)]);
var inst_33986 = cljs.core.some(cljs.core.nil_QMARK_,inst_33985__$1);
var state_34000__$1 = (function (){var statearr_34012 = state_34000;
(statearr_34012[(9)] = inst_33985__$1);

return statearr_34012;
})();
if(cljs.core.truth_(inst_33986)){
var statearr_34013_35452 = state_34000__$1;
(statearr_34013_35452[(1)] = (14));

} else {
var statearr_34014_35459 = state_34000__$1;
(statearr_34014_35459[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (6))){
var state_34000__$1 = state_34000;
var statearr_34015_35460 = state_34000__$1;
(statearr_34015_35460[(2)] = null);

(statearr_34015_35460[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (17))){
var inst_33992 = (state_34000[(2)]);
var state_34000__$1 = (function (){var statearr_34021 = state_34000;
(statearr_34021[(10)] = inst_33992);

return statearr_34021;
})();
var statearr_34022_35462 = state_34000__$1;
(statearr_34022_35462[(2)] = null);

(statearr_34022_35462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (3))){
var inst_33997 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34000__$1,inst_33997);
} else {
if((state_val_34001 === (12))){
var _ = (function (){var statearr_34023 = state_34000;
(statearr_34023[(4)] = cljs.core.rest((state_34000[(4)])));

return statearr_34023;
})();
var state_34000__$1 = state_34000;
var ex34020 = (state_34000__$1[(2)]);
var statearr_34025_35463 = state_34000__$1;
(statearr_34025_35463[(5)] = ex34020);


if((ex34020 instanceof Object)){
var statearr_34033_35464 = state_34000__$1;
(statearr_34033_35464[(1)] = (11));

(statearr_34033_35464[(5)] = null);

} else {
throw ex34020;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (2))){
var inst_33935 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33936 = cnt;
var inst_33937 = (0);
var state_34000__$1 = (function (){var statearr_34034 = state_34000;
(statearr_34034[(11)] = inst_33935);

(statearr_34034[(8)] = inst_33936);

(statearr_34034[(7)] = inst_33937);

return statearr_34034;
})();
var statearr_34038_35465 = state_34000__$1;
(statearr_34038_35465[(2)] = null);

(statearr_34038_35465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (11))){
var inst_33961 = (state_34000[(2)]);
var inst_33963 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34000__$1 = (function (){var statearr_34039 = state_34000;
(statearr_34039[(12)] = inst_33961);

return statearr_34039;
})();
var statearr_34040_35466 = state_34000__$1;
(statearr_34040_35466[(2)] = inst_33963);

(statearr_34040_35466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (9))){
var inst_33937 = (state_34000[(7)]);
var _ = (function (){var statearr_34041 = state_34000;
(statearr_34041[(4)] = cljs.core.cons((12),(state_34000[(4)])));

return statearr_34041;
})();
var inst_33971 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33937) : chs__$1.call(null,inst_33937));
var inst_33972 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33937) : done.call(null,inst_33937));
var inst_33973 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33971,inst_33972);
var ___$1 = (function (){var statearr_34043 = state_34000;
(statearr_34043[(4)] = cljs.core.rest((state_34000[(4)])));

return statearr_34043;
})();
var state_34000__$1 = state_34000;
var statearr_34044_35467 = state_34000__$1;
(statearr_34044_35467[(2)] = inst_33973);

(statearr_34044_35467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (5))){
var inst_33983 = (state_34000[(2)]);
var state_34000__$1 = (function (){var statearr_34049 = state_34000;
(statearr_34049[(13)] = inst_33983);

return statearr_34049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34000__$1,(13),dchan);
} else {
if((state_val_34001 === (14))){
var inst_33988 = cljs.core.async.close_BANG_(out);
var state_34000__$1 = state_34000;
var statearr_34050_35471 = state_34000__$1;
(statearr_34050_35471[(2)] = inst_33988);

(statearr_34050_35471[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (16))){
var inst_33995 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34051_35472 = state_34000__$1;
(statearr_34051_35472[(2)] = inst_33995);

(statearr_34051_35472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (10))){
var inst_33937 = (state_34000[(7)]);
var inst_33976 = (state_34000[(2)]);
var inst_33977 = (inst_33937 + (1));
var inst_33937__$1 = inst_33977;
var state_34000__$1 = (function (){var statearr_34052 = state_34000;
(statearr_34052[(14)] = inst_33976);

(statearr_34052[(7)] = inst_33937__$1);

return statearr_34052;
})();
var statearr_34053_35473 = state_34000__$1;
(statearr_34053_35473[(2)] = null);

(statearr_34053_35473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34001 === (8))){
var inst_33981 = (state_34000[(2)]);
var state_34000__$1 = state_34000;
var statearr_34059_35474 = state_34000__$1;
(statearr_34059_35474[(2)] = inst_33981);

(statearr_34059_35474[(1)] = (5));


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
var cljs$core$async$state_machine__32540__auto__ = null;
var cljs$core$async$state_machine__32540__auto____0 = (function (){
var statearr_34060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34060[(0)] = cljs$core$async$state_machine__32540__auto__);

(statearr_34060[(1)] = (1));

return statearr_34060;
});
var cljs$core$async$state_machine__32540__auto____1 = (function (state_34000){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_34000);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e34061){var ex__32543__auto__ = e34061;
var statearr_34062_35475 = state_34000;
(statearr_34062_35475[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_34000[(4)]))){
var statearr_34064_35476 = state_34000;
(statearr_34064_35476[(1)] = cljs.core.first((state_34000[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35477 = state_34000;
state_34000 = G__35477;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$state_machine__32540__auto__ = function(state_34000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32540__auto____1.call(this,state_34000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32540__auto____0;
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32540__auto____1;
return cljs$core$async$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_34065 = f__32611__auto__();
(statearr_34065[(6)] = c__32610__auto___35446);

return statearr_34065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
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
var G__34068 = arguments.length;
switch (G__34068) {
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
var c__32610__auto___35479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_34107){
var state_val_34108 = (state_34107[(1)]);
if((state_val_34108 === (7))){
var inst_34086 = (state_34107[(7)]);
var inst_34087 = (state_34107[(8)]);
var inst_34086__$1 = (state_34107[(2)]);
var inst_34087__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34086__$1,(0),null);
var inst_34088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34086__$1,(1),null);
var inst_34089 = (inst_34087__$1 == null);
var state_34107__$1 = (function (){var statearr_34110 = state_34107;
(statearr_34110[(7)] = inst_34086__$1);

(statearr_34110[(8)] = inst_34087__$1);

(statearr_34110[(9)] = inst_34088);

return statearr_34110;
})();
if(cljs.core.truth_(inst_34089)){
var statearr_34112_35489 = state_34107__$1;
(statearr_34112_35489[(1)] = (8));

} else {
var statearr_34113_35490 = state_34107__$1;
(statearr_34113_35490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (1))){
var inst_34076 = cljs.core.vec(chs);
var inst_34077 = inst_34076;
var state_34107__$1 = (function (){var statearr_34115 = state_34107;
(statearr_34115[(10)] = inst_34077);

return statearr_34115;
})();
var statearr_34116_35491 = state_34107__$1;
(statearr_34116_35491[(2)] = null);

(statearr_34116_35491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (4))){
var inst_34077 = (state_34107[(10)]);
var state_34107__$1 = state_34107;
return cljs.core.async.ioc_alts_BANG_(state_34107__$1,(7),inst_34077);
} else {
if((state_val_34108 === (6))){
var inst_34103 = (state_34107[(2)]);
var state_34107__$1 = state_34107;
var statearr_34117_35492 = state_34107__$1;
(statearr_34117_35492[(2)] = inst_34103);

(statearr_34117_35492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (3))){
var inst_34105 = (state_34107[(2)]);
var state_34107__$1 = state_34107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34107__$1,inst_34105);
} else {
if((state_val_34108 === (2))){
var inst_34077 = (state_34107[(10)]);
var inst_34079 = cljs.core.count(inst_34077);
var inst_34080 = (inst_34079 > (0));
var state_34107__$1 = state_34107;
if(cljs.core.truth_(inst_34080)){
var statearr_34119_35493 = state_34107__$1;
(statearr_34119_35493[(1)] = (4));

} else {
var statearr_34120_35494 = state_34107__$1;
(statearr_34120_35494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (11))){
var inst_34077 = (state_34107[(10)]);
var inst_34096 = (state_34107[(2)]);
var tmp34118 = inst_34077;
var inst_34077__$1 = tmp34118;
var state_34107__$1 = (function (){var statearr_34124 = state_34107;
(statearr_34124[(11)] = inst_34096);

(statearr_34124[(10)] = inst_34077__$1);

return statearr_34124;
})();
var statearr_34126_35495 = state_34107__$1;
(statearr_34126_35495[(2)] = null);

(statearr_34126_35495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (9))){
var inst_34087 = (state_34107[(8)]);
var state_34107__$1 = state_34107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34107__$1,(11),out,inst_34087);
} else {
if((state_val_34108 === (5))){
var inst_34101 = cljs.core.async.close_BANG_(out);
var state_34107__$1 = state_34107;
var statearr_34129_35496 = state_34107__$1;
(statearr_34129_35496[(2)] = inst_34101);

(statearr_34129_35496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (10))){
var inst_34099 = (state_34107[(2)]);
var state_34107__$1 = state_34107;
var statearr_34131_35497 = state_34107__$1;
(statearr_34131_35497[(2)] = inst_34099);

(statearr_34131_35497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (8))){
var inst_34077 = (state_34107[(10)]);
var inst_34086 = (state_34107[(7)]);
var inst_34087 = (state_34107[(8)]);
var inst_34088 = (state_34107[(9)]);
var inst_34091 = (function (){var cs = inst_34077;
var vec__34082 = inst_34086;
var v = inst_34087;
var c = inst_34088;
return (function (p1__34066_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34066_SHARP_);
});
})();
var inst_34092 = cljs.core.filterv(inst_34091,inst_34077);
var inst_34077__$1 = inst_34092;
var state_34107__$1 = (function (){var statearr_34132 = state_34107;
(statearr_34132[(10)] = inst_34077__$1);

return statearr_34132;
})();
var statearr_34133_35498 = state_34107__$1;
(statearr_34133_35498[(2)] = null);

(statearr_34133_35498[(1)] = (2));


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
var cljs$core$async$state_machine__32540__auto__ = null;
var cljs$core$async$state_machine__32540__auto____0 = (function (){
var statearr_34135 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34135[(0)] = cljs$core$async$state_machine__32540__auto__);

(statearr_34135[(1)] = (1));

return statearr_34135;
});
var cljs$core$async$state_machine__32540__auto____1 = (function (state_34107){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_34107);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e34136){var ex__32543__auto__ = e34136;
var statearr_34137_35499 = state_34107;
(statearr_34137_35499[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_34107[(4)]))){
var statearr_34138_35500 = state_34107;
(statearr_34138_35500[(1)] = cljs.core.first((state_34107[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35501 = state_34107;
state_34107 = G__35501;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$state_machine__32540__auto__ = function(state_34107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32540__auto____1.call(this,state_34107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32540__auto____0;
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32540__auto____1;
return cljs$core$async$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_34141 = f__32611__auto__();
(statearr_34141[(6)] = c__32610__auto___35479);

return statearr_34141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
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
var G__34145 = arguments.length;
switch (G__34145) {
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
var c__32610__auto___35503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_34170){
var state_val_34171 = (state_34170[(1)]);
if((state_val_34171 === (7))){
var inst_34152 = (state_34170[(7)]);
var inst_34152__$1 = (state_34170[(2)]);
var inst_34153 = (inst_34152__$1 == null);
var inst_34154 = cljs.core.not(inst_34153);
var state_34170__$1 = (function (){var statearr_34173 = state_34170;
(statearr_34173[(7)] = inst_34152__$1);

return statearr_34173;
})();
if(inst_34154){
var statearr_34174_35504 = state_34170__$1;
(statearr_34174_35504[(1)] = (8));

} else {
var statearr_34175_35505 = state_34170__$1;
(statearr_34175_35505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (1))){
var inst_34146 = (0);
var state_34170__$1 = (function (){var statearr_34176 = state_34170;
(statearr_34176[(8)] = inst_34146);

return statearr_34176;
})();
var statearr_34177_35506 = state_34170__$1;
(statearr_34177_35506[(2)] = null);

(statearr_34177_35506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (4))){
var state_34170__$1 = state_34170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34170__$1,(7),ch);
} else {
if((state_val_34171 === (6))){
var inst_34165 = (state_34170[(2)]);
var state_34170__$1 = state_34170;
var statearr_34178_35507 = state_34170__$1;
(statearr_34178_35507[(2)] = inst_34165);

(statearr_34178_35507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (3))){
var inst_34167 = (state_34170[(2)]);
var inst_34168 = cljs.core.async.close_BANG_(out);
var state_34170__$1 = (function (){var statearr_34180 = state_34170;
(statearr_34180[(9)] = inst_34167);

return statearr_34180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34170__$1,inst_34168);
} else {
if((state_val_34171 === (2))){
var inst_34146 = (state_34170[(8)]);
var inst_34149 = (inst_34146 < n);
var state_34170__$1 = state_34170;
if(cljs.core.truth_(inst_34149)){
var statearr_34184_35508 = state_34170__$1;
(statearr_34184_35508[(1)] = (4));

} else {
var statearr_34186_35509 = state_34170__$1;
(statearr_34186_35509[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (11))){
var inst_34146 = (state_34170[(8)]);
var inst_34157 = (state_34170[(2)]);
var inst_34158 = (inst_34146 + (1));
var inst_34146__$1 = inst_34158;
var state_34170__$1 = (function (){var statearr_34196 = state_34170;
(statearr_34196[(10)] = inst_34157);

(statearr_34196[(8)] = inst_34146__$1);

return statearr_34196;
})();
var statearr_34197_35516 = state_34170__$1;
(statearr_34197_35516[(2)] = null);

(statearr_34197_35516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (9))){
var state_34170__$1 = state_34170;
var statearr_34198_35517 = state_34170__$1;
(statearr_34198_35517[(2)] = null);

(statearr_34198_35517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (5))){
var state_34170__$1 = state_34170;
var statearr_34199_35518 = state_34170__$1;
(statearr_34199_35518[(2)] = null);

(statearr_34199_35518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (10))){
var inst_34162 = (state_34170[(2)]);
var state_34170__$1 = state_34170;
var statearr_34200_35519 = state_34170__$1;
(statearr_34200_35519[(2)] = inst_34162);

(statearr_34200_35519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34171 === (8))){
var inst_34152 = (state_34170[(7)]);
var state_34170__$1 = state_34170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34170__$1,(11),out,inst_34152);
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
var cljs$core$async$state_machine__32540__auto__ = null;
var cljs$core$async$state_machine__32540__auto____0 = (function (){
var statearr_34201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34201[(0)] = cljs$core$async$state_machine__32540__auto__);

(statearr_34201[(1)] = (1));

return statearr_34201;
});
var cljs$core$async$state_machine__32540__auto____1 = (function (state_34170){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_34170);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e34202){var ex__32543__auto__ = e34202;
var statearr_34203_35520 = state_34170;
(statearr_34203_35520[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_34170[(4)]))){
var statearr_34204_35521 = state_34170;
(statearr_34204_35521[(1)] = cljs.core.first((state_34170[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35522 = state_34170;
state_34170 = G__35522;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$state_machine__32540__auto__ = function(state_34170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32540__auto____1.call(this,state_34170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32540__auto____0;
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32540__auto____1;
return cljs$core$async$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_34206 = f__32611__auto__();
(statearr_34206[(6)] = c__32610__auto___35503);

return statearr_34206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
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
cljs.core.async.t_cljs$core$async34218 = (function (f,ch,meta34212,_,fn1,meta34219){
this.f = f;
this.ch = ch;
this.meta34212 = meta34212;
this._ = _;
this.fn1 = fn1;
this.meta34219 = meta34219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34220,meta34219__$1){
var self__ = this;
var _34220__$1 = this;
return (new cljs.core.async.t_cljs$core$async34218(self__.f,self__.ch,self__.meta34212,self__._,self__.fn1,meta34219__$1));
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34220){
var self__ = this;
var _34220__$1 = this;
return self__.meta34219;
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34208_SHARP_){
var G__34241 = (((p1__34208_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34208_SHARP_) : self__.f.call(null,p1__34208_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34241) : f1.call(null,G__34241));
});
}));

(cljs.core.async.t_cljs$core$async34218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34212","meta34212",-1018002551,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34211","cljs.core.async/t_cljs$core$async34211",437749481,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34219","meta34219",-1606973855,null)], null);
}));

(cljs.core.async.t_cljs$core$async34218.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34218");

(cljs.core.async.t_cljs$core$async34218.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34218");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34218.
 */
cljs.core.async.__GT_t_cljs$core$async34218 = (function cljs$core$async$__GT_t_cljs$core$async34218(f,ch,meta34212,_,fn1,meta34219){
return (new cljs.core.async.t_cljs$core$async34218(f,ch,meta34212,_,fn1,meta34219));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34211 = (function (f,ch,meta34212){
this.f = f;
this.ch = ch;
this.meta34212 = meta34212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34213,meta34212__$1){
var self__ = this;
var _34213__$1 = this;
return (new cljs.core.async.t_cljs$core$async34211(self__.f,self__.ch,meta34212__$1));
}));

(cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34213){
var self__ = this;
var _34213__$1 = this;
return self__.meta34212;
}));

(cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34218(self__.f,self__.ch,self__.meta34212,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34243 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34243) : self__.f.call(null,G__34243));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34212","meta34212",-1018002551,null)], null);
}));

(cljs.core.async.t_cljs$core$async34211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34211");

(cljs.core.async.t_cljs$core$async34211.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34211.
 */
cljs.core.async.__GT_t_cljs$core$async34211 = (function cljs$core$async$__GT_t_cljs$core$async34211(f,ch,meta34212){
return (new cljs.core.async.t_cljs$core$async34211(f,ch,meta34212));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34211(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34247 = (function (f,ch,meta34248){
this.f = f;
this.ch = ch;
this.meta34248 = meta34248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34249,meta34248__$1){
var self__ = this;
var _34249__$1 = this;
return (new cljs.core.async.t_cljs$core$async34247(self__.f,self__.ch,meta34248__$1));
}));

(cljs.core.async.t_cljs$core$async34247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34249){
var self__ = this;
var _34249__$1 = this;
return self__.meta34248;
}));

(cljs.core.async.t_cljs$core$async34247.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34247.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34247.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34247.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34247.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34247.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34248","meta34248",1934791975,null)], null);
}));

(cljs.core.async.t_cljs$core$async34247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34247");

(cljs.core.async.t_cljs$core$async34247.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34247.
 */
cljs.core.async.__GT_t_cljs$core$async34247 = (function cljs$core$async$__GT_t_cljs$core$async34247(f,ch,meta34248){
return (new cljs.core.async.t_cljs$core$async34247(f,ch,meta34248));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34247(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34252 = (function (p,ch,meta34253){
this.p = p;
this.ch = ch;
this.meta34253 = meta34253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34254,meta34253__$1){
var self__ = this;
var _34254__$1 = this;
return (new cljs.core.async.t_cljs$core$async34252(self__.p,self__.ch,meta34253__$1));
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34254){
var self__ = this;
var _34254__$1 = this;
return self__.meta34253;
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34253","meta34253",-265979329,null)], null);
}));

(cljs.core.async.t_cljs$core$async34252.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34252");

(cljs.core.async.t_cljs$core$async34252.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34252");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34252.
 */
cljs.core.async.__GT_t_cljs$core$async34252 = (function cljs$core$async$__GT_t_cljs$core$async34252(p,ch,meta34253){
return (new cljs.core.async.t_cljs$core$async34252(p,ch,meta34253));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34252(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34257 = arguments.length;
switch (G__34257) {
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
var c__32610__auto___35526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_34286){
var state_val_34287 = (state_34286[(1)]);
if((state_val_34287 === (7))){
var inst_34281 = (state_34286[(2)]);
var state_34286__$1 = state_34286;
var statearr_34294_35527 = state_34286__$1;
(statearr_34294_35527[(2)] = inst_34281);

(statearr_34294_35527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34287 === (1))){
var state_34286__$1 = state_34286;
var statearr_34297_35528 = state_34286__$1;
(statearr_34297_35528[(2)] = null);

(statearr_34297_35528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34287 === (4))){
var inst_34265 = (state_34286[(7)]);
var inst_34265__$1 = (state_34286[(2)]);
var inst_34267 = (inst_34265__$1 == null);
var state_34286__$1 = (function (){var statearr_34300 = state_34286;
(statearr_34300[(7)] = inst_34265__$1);

return statearr_34300;
})();
if(cljs.core.truth_(inst_34267)){
var statearr_34302_35529 = state_34286__$1;
(statearr_34302_35529[(1)] = (5));

} else {
var statearr_34304_35530 = state_34286__$1;
(statearr_34304_35530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34287 === (6))){
var inst_34265 = (state_34286[(7)]);
var inst_34271 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34265) : p.call(null,inst_34265));
var state_34286__$1 = state_34286;
if(cljs.core.truth_(inst_34271)){
var statearr_34305_35531 = state_34286__$1;
(statearr_34305_35531[(1)] = (8));

} else {
var statearr_34306_35532 = state_34286__$1;
(statearr_34306_35532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34287 === (3))){
var inst_34283 = (state_34286[(2)]);
var state_34286__$1 = state_34286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34286__$1,inst_34283);
} else {
if((state_val_34287 === (2))){
var state_34286__$1 = state_34286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34286__$1,(4),ch);
} else {
if((state_val_34287 === (11))){
var inst_34275 = (state_34286[(2)]);
var state_34286__$1 = state_34286;
var statearr_34308_35533 = state_34286__$1;
(statearr_34308_35533[(2)] = inst_34275);

(statearr_34308_35533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34287 === (9))){
var state_34286__$1 = state_34286;
var statearr_34311_35534 = state_34286__$1;
(statearr_34311_35534[(2)] = null);

(statearr_34311_35534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34287 === (5))){
var inst_34269 = cljs.core.async.close_BANG_(out);
var state_34286__$1 = state_34286;
var statearr_34315_35535 = state_34286__$1;
(statearr_34315_35535[(2)] = inst_34269);

(statearr_34315_35535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34287 === (10))){
var inst_34278 = (state_34286[(2)]);
var state_34286__$1 = (function (){var statearr_34318 = state_34286;
(statearr_34318[(8)] = inst_34278);

return statearr_34318;
})();
var statearr_34319_35536 = state_34286__$1;
(statearr_34319_35536[(2)] = null);

(statearr_34319_35536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34287 === (8))){
var inst_34265 = (state_34286[(7)]);
var state_34286__$1 = state_34286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34286__$1,(11),out,inst_34265);
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
var cljs$core$async$state_machine__32540__auto__ = null;
var cljs$core$async$state_machine__32540__auto____0 = (function (){
var statearr_34328 = [null,null,null,null,null,null,null,null,null];
(statearr_34328[(0)] = cljs$core$async$state_machine__32540__auto__);

(statearr_34328[(1)] = (1));

return statearr_34328;
});
var cljs$core$async$state_machine__32540__auto____1 = (function (state_34286){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_34286);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e34331){var ex__32543__auto__ = e34331;
var statearr_34332_35540 = state_34286;
(statearr_34332_35540[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_34286[(4)]))){
var statearr_34335_35541 = state_34286;
(statearr_34335_35541[(1)] = cljs.core.first((state_34286[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35542 = state_34286;
state_34286 = G__35542;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$state_machine__32540__auto__ = function(state_34286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32540__auto____1.call(this,state_34286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32540__auto____0;
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32540__auto____1;
return cljs$core$async$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_34339 = f__32611__auto__();
(statearr_34339[(6)] = c__32610__auto___35526);

return statearr_34339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34341 = arguments.length;
switch (G__34341) {
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
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_34431){
var state_val_34432 = (state_34431[(1)]);
if((state_val_34432 === (7))){
var inst_34427 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
var statearr_34433_35544 = state_34431__$1;
(statearr_34433_35544[(2)] = inst_34427);

(statearr_34433_35544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (20))){
var inst_34397 = (state_34431[(7)]);
var inst_34408 = (state_34431[(2)]);
var inst_34409 = cljs.core.next(inst_34397);
var inst_34383 = inst_34409;
var inst_34384 = null;
var inst_34385 = (0);
var inst_34386 = (0);
var state_34431__$1 = (function (){var statearr_34435 = state_34431;
(statearr_34435[(8)] = inst_34408);

(statearr_34435[(9)] = inst_34383);

(statearr_34435[(10)] = inst_34384);

(statearr_34435[(11)] = inst_34385);

(statearr_34435[(12)] = inst_34386);

return statearr_34435;
})();
var statearr_34436_35545 = state_34431__$1;
(statearr_34436_35545[(2)] = null);

(statearr_34436_35545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (1))){
var state_34431__$1 = state_34431;
var statearr_34437_35546 = state_34431__$1;
(statearr_34437_35546[(2)] = null);

(statearr_34437_35546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (4))){
var inst_34372 = (state_34431[(13)]);
var inst_34372__$1 = (state_34431[(2)]);
var inst_34373 = (inst_34372__$1 == null);
var state_34431__$1 = (function (){var statearr_34438 = state_34431;
(statearr_34438[(13)] = inst_34372__$1);

return statearr_34438;
})();
if(cljs.core.truth_(inst_34373)){
var statearr_34439_35547 = state_34431__$1;
(statearr_34439_35547[(1)] = (5));

} else {
var statearr_34441_35548 = state_34431__$1;
(statearr_34441_35548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (15))){
var state_34431__$1 = state_34431;
var statearr_34445_35549 = state_34431__$1;
(statearr_34445_35549[(2)] = null);

(statearr_34445_35549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (21))){
var state_34431__$1 = state_34431;
var statearr_34447_35550 = state_34431__$1;
(statearr_34447_35550[(2)] = null);

(statearr_34447_35550[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (13))){
var inst_34386 = (state_34431[(12)]);
var inst_34383 = (state_34431[(9)]);
var inst_34384 = (state_34431[(10)]);
var inst_34385 = (state_34431[(11)]);
var inst_34393 = (state_34431[(2)]);
var inst_34394 = (inst_34386 + (1));
var tmp34442 = inst_34384;
var tmp34443 = inst_34383;
var tmp34444 = inst_34385;
var inst_34383__$1 = tmp34443;
var inst_34384__$1 = tmp34442;
var inst_34385__$1 = tmp34444;
var inst_34386__$1 = inst_34394;
var state_34431__$1 = (function (){var statearr_34450 = state_34431;
(statearr_34450[(14)] = inst_34393);

(statearr_34450[(9)] = inst_34383__$1);

(statearr_34450[(10)] = inst_34384__$1);

(statearr_34450[(11)] = inst_34385__$1);

(statearr_34450[(12)] = inst_34386__$1);

return statearr_34450;
})();
var statearr_34451_35551 = state_34431__$1;
(statearr_34451_35551[(2)] = null);

(statearr_34451_35551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (22))){
var state_34431__$1 = state_34431;
var statearr_34452_35555 = state_34431__$1;
(statearr_34452_35555[(2)] = null);

(statearr_34452_35555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (6))){
var inst_34372 = (state_34431[(13)]);
var inst_34381 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34372) : f.call(null,inst_34372));
var inst_34382 = cljs.core.seq(inst_34381);
var inst_34383 = inst_34382;
var inst_34384 = null;
var inst_34385 = (0);
var inst_34386 = (0);
var state_34431__$1 = (function (){var statearr_34453 = state_34431;
(statearr_34453[(9)] = inst_34383);

(statearr_34453[(10)] = inst_34384);

(statearr_34453[(11)] = inst_34385);

(statearr_34453[(12)] = inst_34386);

return statearr_34453;
})();
var statearr_34454_35556 = state_34431__$1;
(statearr_34454_35556[(2)] = null);

(statearr_34454_35556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (17))){
var inst_34397 = (state_34431[(7)]);
var inst_34401 = cljs.core.chunk_first(inst_34397);
var inst_34402 = cljs.core.chunk_rest(inst_34397);
var inst_34403 = cljs.core.count(inst_34401);
var inst_34383 = inst_34402;
var inst_34384 = inst_34401;
var inst_34385 = inst_34403;
var inst_34386 = (0);
var state_34431__$1 = (function (){var statearr_34455 = state_34431;
(statearr_34455[(9)] = inst_34383);

(statearr_34455[(10)] = inst_34384);

(statearr_34455[(11)] = inst_34385);

(statearr_34455[(12)] = inst_34386);

return statearr_34455;
})();
var statearr_34456_35557 = state_34431__$1;
(statearr_34456_35557[(2)] = null);

(statearr_34456_35557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (3))){
var inst_34429 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34431__$1,inst_34429);
} else {
if((state_val_34432 === (12))){
var inst_34417 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
var statearr_34457_35558 = state_34431__$1;
(statearr_34457_35558[(2)] = inst_34417);

(statearr_34457_35558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (2))){
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34431__$1,(4),in$);
} else {
if((state_val_34432 === (23))){
var inst_34425 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
var statearr_34458_35559 = state_34431__$1;
(statearr_34458_35559[(2)] = inst_34425);

(statearr_34458_35559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (19))){
var inst_34412 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
var statearr_34459_35560 = state_34431__$1;
(statearr_34459_35560[(2)] = inst_34412);

(statearr_34459_35560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (11))){
var inst_34383 = (state_34431[(9)]);
var inst_34397 = (state_34431[(7)]);
var inst_34397__$1 = cljs.core.seq(inst_34383);
var state_34431__$1 = (function (){var statearr_34460 = state_34431;
(statearr_34460[(7)] = inst_34397__$1);

return statearr_34460;
})();
if(inst_34397__$1){
var statearr_34461_35561 = state_34431__$1;
(statearr_34461_35561[(1)] = (14));

} else {
var statearr_34462_35562 = state_34431__$1;
(statearr_34462_35562[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (9))){
var inst_34419 = (state_34431[(2)]);
var inst_34420 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34431__$1 = (function (){var statearr_34463 = state_34431;
(statearr_34463[(15)] = inst_34419);

return statearr_34463;
})();
if(cljs.core.truth_(inst_34420)){
var statearr_34464_35563 = state_34431__$1;
(statearr_34464_35563[(1)] = (21));

} else {
var statearr_34465_35564 = state_34431__$1;
(statearr_34465_35564[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (5))){
var inst_34375 = cljs.core.async.close_BANG_(out);
var state_34431__$1 = state_34431;
var statearr_34466_35565 = state_34431__$1;
(statearr_34466_35565[(2)] = inst_34375);

(statearr_34466_35565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (14))){
var inst_34397 = (state_34431[(7)]);
var inst_34399 = cljs.core.chunked_seq_QMARK_(inst_34397);
var state_34431__$1 = state_34431;
if(inst_34399){
var statearr_34468_35566 = state_34431__$1;
(statearr_34468_35566[(1)] = (17));

} else {
var statearr_34469_35567 = state_34431__$1;
(statearr_34469_35567[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (16))){
var inst_34415 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
var statearr_34482_35568 = state_34431__$1;
(statearr_34482_35568[(2)] = inst_34415);

(statearr_34482_35568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (10))){
var inst_34384 = (state_34431[(10)]);
var inst_34386 = (state_34431[(12)]);
var inst_34391 = cljs.core._nth(inst_34384,inst_34386);
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34431__$1,(13),out,inst_34391);
} else {
if((state_val_34432 === (18))){
var inst_34397 = (state_34431[(7)]);
var inst_34406 = cljs.core.first(inst_34397);
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34431__$1,(20),out,inst_34406);
} else {
if((state_val_34432 === (8))){
var inst_34386 = (state_34431[(12)]);
var inst_34385 = (state_34431[(11)]);
var inst_34388 = (inst_34386 < inst_34385);
var inst_34389 = inst_34388;
var state_34431__$1 = state_34431;
if(cljs.core.truth_(inst_34389)){
var statearr_34483_35569 = state_34431__$1;
(statearr_34483_35569[(1)] = (10));

} else {
var statearr_34484_35570 = state_34431__$1;
(statearr_34484_35570[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32540__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32540__auto____0 = (function (){
var statearr_34486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34486[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32540__auto__);

(statearr_34486[(1)] = (1));

return statearr_34486;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32540__auto____1 = (function (state_34431){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_34431);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e34487){var ex__32543__auto__ = e34487;
var statearr_34488_35571 = state_34431;
(statearr_34488_35571[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_34431[(4)]))){
var statearr_34489_35572 = state_34431;
(statearr_34489_35572[(1)] = cljs.core.first((state_34431[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35573 = state_34431;
state_34431 = G__35573;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32540__auto__ = function(state_34431){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32540__auto____1.call(this,state_34431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32540__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32540__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_34491 = f__32611__auto__();
(statearr_34491[(6)] = c__32610__auto__);

return statearr_34491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34494 = arguments.length;
switch (G__34494) {
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
var G__34499 = arguments.length;
switch (G__34499) {
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
var G__34502 = arguments.length;
switch (G__34502) {
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
var c__32610__auto___35580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_34528){
var state_val_34529 = (state_34528[(1)]);
if((state_val_34529 === (7))){
var inst_34522 = (state_34528[(2)]);
var state_34528__$1 = state_34528;
var statearr_34532_35581 = state_34528__$1;
(statearr_34532_35581[(2)] = inst_34522);

(statearr_34532_35581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34529 === (1))){
var inst_34504 = null;
var state_34528__$1 = (function (){var statearr_34533 = state_34528;
(statearr_34533[(7)] = inst_34504);

return statearr_34533;
})();
var statearr_34534_35583 = state_34528__$1;
(statearr_34534_35583[(2)] = null);

(statearr_34534_35583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34529 === (4))){
var inst_34507 = (state_34528[(8)]);
var inst_34507__$1 = (state_34528[(2)]);
var inst_34508 = (inst_34507__$1 == null);
var inst_34509 = cljs.core.not(inst_34508);
var state_34528__$1 = (function (){var statearr_34535 = state_34528;
(statearr_34535[(8)] = inst_34507__$1);

return statearr_34535;
})();
if(inst_34509){
var statearr_34536_35585 = state_34528__$1;
(statearr_34536_35585[(1)] = (5));

} else {
var statearr_34537_35586 = state_34528__$1;
(statearr_34537_35586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34529 === (6))){
var state_34528__$1 = state_34528;
var statearr_34538_35587 = state_34528__$1;
(statearr_34538_35587[(2)] = null);

(statearr_34538_35587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34529 === (3))){
var inst_34525 = (state_34528[(2)]);
var inst_34526 = cljs.core.async.close_BANG_(out);
var state_34528__$1 = (function (){var statearr_34539 = state_34528;
(statearr_34539[(9)] = inst_34525);

return statearr_34539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34528__$1,inst_34526);
} else {
if((state_val_34529 === (2))){
var state_34528__$1 = state_34528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34528__$1,(4),ch);
} else {
if((state_val_34529 === (11))){
var inst_34507 = (state_34528[(8)]);
var inst_34516 = (state_34528[(2)]);
var inst_34504 = inst_34507;
var state_34528__$1 = (function (){var statearr_34540 = state_34528;
(statearr_34540[(10)] = inst_34516);

(statearr_34540[(7)] = inst_34504);

return statearr_34540;
})();
var statearr_34541_35588 = state_34528__$1;
(statearr_34541_35588[(2)] = null);

(statearr_34541_35588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34529 === (9))){
var inst_34507 = (state_34528[(8)]);
var state_34528__$1 = state_34528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34528__$1,(11),out,inst_34507);
} else {
if((state_val_34529 === (5))){
var inst_34507 = (state_34528[(8)]);
var inst_34504 = (state_34528[(7)]);
var inst_34511 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34507,inst_34504);
var state_34528__$1 = state_34528;
if(inst_34511){
var statearr_34543_35589 = state_34528__$1;
(statearr_34543_35589[(1)] = (8));

} else {
var statearr_34544_35590 = state_34528__$1;
(statearr_34544_35590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34529 === (10))){
var inst_34519 = (state_34528[(2)]);
var state_34528__$1 = state_34528;
var statearr_34545_35591 = state_34528__$1;
(statearr_34545_35591[(2)] = inst_34519);

(statearr_34545_35591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34529 === (8))){
var inst_34504 = (state_34528[(7)]);
var tmp34542 = inst_34504;
var inst_34504__$1 = tmp34542;
var state_34528__$1 = (function (){var statearr_34546 = state_34528;
(statearr_34546[(7)] = inst_34504__$1);

return statearr_34546;
})();
var statearr_34547_35592 = state_34528__$1;
(statearr_34547_35592[(2)] = null);

(statearr_34547_35592[(1)] = (2));


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
var cljs$core$async$state_machine__32540__auto__ = null;
var cljs$core$async$state_machine__32540__auto____0 = (function (){
var statearr_34548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34548[(0)] = cljs$core$async$state_machine__32540__auto__);

(statearr_34548[(1)] = (1));

return statearr_34548;
});
var cljs$core$async$state_machine__32540__auto____1 = (function (state_34528){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_34528);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e34549){var ex__32543__auto__ = e34549;
var statearr_34550_35593 = state_34528;
(statearr_34550_35593[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_34528[(4)]))){
var statearr_34551_35594 = state_34528;
(statearr_34551_35594[(1)] = cljs.core.first((state_34528[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35595 = state_34528;
state_34528 = G__35595;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$state_machine__32540__auto__ = function(state_34528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32540__auto____1.call(this,state_34528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32540__auto____0;
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32540__auto____1;
return cljs$core$async$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_34552 = f__32611__auto__();
(statearr_34552[(6)] = c__32610__auto___35580);

return statearr_34552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34554 = arguments.length;
switch (G__34554) {
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
var c__32610__auto___35597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_34592){
var state_val_34593 = (state_34592[(1)]);
if((state_val_34593 === (7))){
var inst_34588 = (state_34592[(2)]);
var state_34592__$1 = state_34592;
var statearr_34594_35598 = state_34592__$1;
(statearr_34594_35598[(2)] = inst_34588);

(statearr_34594_35598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (1))){
var inst_34555 = (new Array(n));
var inst_34556 = inst_34555;
var inst_34557 = (0);
var state_34592__$1 = (function (){var statearr_34595 = state_34592;
(statearr_34595[(7)] = inst_34556);

(statearr_34595[(8)] = inst_34557);

return statearr_34595;
})();
var statearr_34596_35599 = state_34592__$1;
(statearr_34596_35599[(2)] = null);

(statearr_34596_35599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (4))){
var inst_34560 = (state_34592[(9)]);
var inst_34560__$1 = (state_34592[(2)]);
var inst_34561 = (inst_34560__$1 == null);
var inst_34562 = cljs.core.not(inst_34561);
var state_34592__$1 = (function (){var statearr_34598 = state_34592;
(statearr_34598[(9)] = inst_34560__$1);

return statearr_34598;
})();
if(inst_34562){
var statearr_34599_35601 = state_34592__$1;
(statearr_34599_35601[(1)] = (5));

} else {
var statearr_34600_35602 = state_34592__$1;
(statearr_34600_35602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (15))){
var inst_34582 = (state_34592[(2)]);
var state_34592__$1 = state_34592;
var statearr_34601_35603 = state_34592__$1;
(statearr_34601_35603[(2)] = inst_34582);

(statearr_34601_35603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (13))){
var state_34592__$1 = state_34592;
var statearr_34603_35604 = state_34592__$1;
(statearr_34603_35604[(2)] = null);

(statearr_34603_35604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (6))){
var inst_34557 = (state_34592[(8)]);
var inst_34578 = (inst_34557 > (0));
var state_34592__$1 = state_34592;
if(cljs.core.truth_(inst_34578)){
var statearr_34604_35605 = state_34592__$1;
(statearr_34604_35605[(1)] = (12));

} else {
var statearr_34605_35606 = state_34592__$1;
(statearr_34605_35606[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (3))){
var inst_34590 = (state_34592[(2)]);
var state_34592__$1 = state_34592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34592__$1,inst_34590);
} else {
if((state_val_34593 === (12))){
var inst_34556 = (state_34592[(7)]);
var inst_34580 = cljs.core.vec(inst_34556);
var state_34592__$1 = state_34592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34592__$1,(15),out,inst_34580);
} else {
if((state_val_34593 === (2))){
var state_34592__$1 = state_34592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34592__$1,(4),ch);
} else {
if((state_val_34593 === (11))){
var inst_34572 = (state_34592[(2)]);
var inst_34573 = (new Array(n));
var inst_34556 = inst_34573;
var inst_34557 = (0);
var state_34592__$1 = (function (){var statearr_34606 = state_34592;
(statearr_34606[(10)] = inst_34572);

(statearr_34606[(7)] = inst_34556);

(statearr_34606[(8)] = inst_34557);

return statearr_34606;
})();
var statearr_34608_35608 = state_34592__$1;
(statearr_34608_35608[(2)] = null);

(statearr_34608_35608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (9))){
var inst_34556 = (state_34592[(7)]);
var inst_34570 = cljs.core.vec(inst_34556);
var state_34592__$1 = state_34592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34592__$1,(11),out,inst_34570);
} else {
if((state_val_34593 === (5))){
var inst_34556 = (state_34592[(7)]);
var inst_34557 = (state_34592[(8)]);
var inst_34560 = (state_34592[(9)]);
var inst_34565 = (state_34592[(11)]);
var inst_34564 = (inst_34556[inst_34557] = inst_34560);
var inst_34565__$1 = (inst_34557 + (1));
var inst_34566 = (inst_34565__$1 < n);
var state_34592__$1 = (function (){var statearr_34611 = state_34592;
(statearr_34611[(12)] = inst_34564);

(statearr_34611[(11)] = inst_34565__$1);

return statearr_34611;
})();
if(cljs.core.truth_(inst_34566)){
var statearr_34612_35609 = state_34592__$1;
(statearr_34612_35609[(1)] = (8));

} else {
var statearr_34613_35610 = state_34592__$1;
(statearr_34613_35610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (14))){
var inst_34585 = (state_34592[(2)]);
var inst_34586 = cljs.core.async.close_BANG_(out);
var state_34592__$1 = (function (){var statearr_34619 = state_34592;
(statearr_34619[(13)] = inst_34585);

return statearr_34619;
})();
var statearr_34620_35611 = state_34592__$1;
(statearr_34620_35611[(2)] = inst_34586);

(statearr_34620_35611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (10))){
var inst_34576 = (state_34592[(2)]);
var state_34592__$1 = state_34592;
var statearr_34622_35612 = state_34592__$1;
(statearr_34622_35612[(2)] = inst_34576);

(statearr_34622_35612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34593 === (8))){
var inst_34556 = (state_34592[(7)]);
var inst_34565 = (state_34592[(11)]);
var tmp34616 = inst_34556;
var inst_34556__$1 = tmp34616;
var inst_34557 = inst_34565;
var state_34592__$1 = (function (){var statearr_34623 = state_34592;
(statearr_34623[(7)] = inst_34556__$1);

(statearr_34623[(8)] = inst_34557);

return statearr_34623;
})();
var statearr_34624_35613 = state_34592__$1;
(statearr_34624_35613[(2)] = null);

(statearr_34624_35613[(1)] = (2));


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
var cljs$core$async$state_machine__32540__auto__ = null;
var cljs$core$async$state_machine__32540__auto____0 = (function (){
var statearr_34625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34625[(0)] = cljs$core$async$state_machine__32540__auto__);

(statearr_34625[(1)] = (1));

return statearr_34625;
});
var cljs$core$async$state_machine__32540__auto____1 = (function (state_34592){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_34592);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e34626){var ex__32543__auto__ = e34626;
var statearr_34628_35614 = state_34592;
(statearr_34628_35614[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_34592[(4)]))){
var statearr_34629_35615 = state_34592;
(statearr_34629_35615[(1)] = cljs.core.first((state_34592[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35617 = state_34592;
state_34592 = G__35617;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$state_machine__32540__auto__ = function(state_34592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32540__auto____1.call(this,state_34592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32540__auto____0;
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32540__auto____1;
return cljs$core$async$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_34630 = f__32611__auto__();
(statearr_34630[(6)] = c__32610__auto___35597);

return statearr_34630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34636 = arguments.length;
switch (G__34636) {
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
var c__32610__auto___35621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_34681){
var state_val_34682 = (state_34681[(1)]);
if((state_val_34682 === (7))){
var inst_34677 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
var statearr_34683_35623 = state_34681__$1;
(statearr_34683_35623[(2)] = inst_34677);

(statearr_34683_35623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (1))){
var inst_34637 = [];
var inst_34638 = inst_34637;
var inst_34639 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34681__$1 = (function (){var statearr_34684 = state_34681;
(statearr_34684[(7)] = inst_34638);

(statearr_34684[(8)] = inst_34639);

return statearr_34684;
})();
var statearr_34685_35624 = state_34681__$1;
(statearr_34685_35624[(2)] = null);

(statearr_34685_35624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (4))){
var inst_34642 = (state_34681[(9)]);
var inst_34642__$1 = (state_34681[(2)]);
var inst_34643 = (inst_34642__$1 == null);
var inst_34644 = cljs.core.not(inst_34643);
var state_34681__$1 = (function (){var statearr_34686 = state_34681;
(statearr_34686[(9)] = inst_34642__$1);

return statearr_34686;
})();
if(inst_34644){
var statearr_34687_35625 = state_34681__$1;
(statearr_34687_35625[(1)] = (5));

} else {
var statearr_34688_35626 = state_34681__$1;
(statearr_34688_35626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (15))){
var inst_34638 = (state_34681[(7)]);
var inst_34669 = cljs.core.vec(inst_34638);
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34681__$1,(18),out,inst_34669);
} else {
if((state_val_34682 === (13))){
var inst_34664 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
var statearr_34690_35627 = state_34681__$1;
(statearr_34690_35627[(2)] = inst_34664);

(statearr_34690_35627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (6))){
var inst_34638 = (state_34681[(7)]);
var inst_34666 = inst_34638.length;
var inst_34667 = (inst_34666 > (0));
var state_34681__$1 = state_34681;
if(cljs.core.truth_(inst_34667)){
var statearr_34694_35628 = state_34681__$1;
(statearr_34694_35628[(1)] = (15));

} else {
var statearr_34695_35629 = state_34681__$1;
(statearr_34695_35629[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (17))){
var inst_34674 = (state_34681[(2)]);
var inst_34675 = cljs.core.async.close_BANG_(out);
var state_34681__$1 = (function (){var statearr_34696 = state_34681;
(statearr_34696[(10)] = inst_34674);

return statearr_34696;
})();
var statearr_34697_35630 = state_34681__$1;
(statearr_34697_35630[(2)] = inst_34675);

(statearr_34697_35630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (3))){
var inst_34679 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34681__$1,inst_34679);
} else {
if((state_val_34682 === (12))){
var inst_34638 = (state_34681[(7)]);
var inst_34657 = cljs.core.vec(inst_34638);
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34681__$1,(14),out,inst_34657);
} else {
if((state_val_34682 === (2))){
var state_34681__$1 = state_34681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34681__$1,(4),ch);
} else {
if((state_val_34682 === (11))){
var inst_34638 = (state_34681[(7)]);
var inst_34642 = (state_34681[(9)]);
var inst_34646 = (state_34681[(11)]);
var inst_34654 = inst_34638.push(inst_34642);
var tmp34698 = inst_34638;
var inst_34638__$1 = tmp34698;
var inst_34639 = inst_34646;
var state_34681__$1 = (function (){var statearr_34699 = state_34681;
(statearr_34699[(12)] = inst_34654);

(statearr_34699[(7)] = inst_34638__$1);

(statearr_34699[(8)] = inst_34639);

return statearr_34699;
})();
var statearr_34700_35632 = state_34681__$1;
(statearr_34700_35632[(2)] = null);

(statearr_34700_35632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (9))){
var inst_34639 = (state_34681[(8)]);
var inst_34650 = cljs.core.keyword_identical_QMARK_(inst_34639,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34681__$1 = state_34681;
var statearr_34701_35633 = state_34681__$1;
(statearr_34701_35633[(2)] = inst_34650);

(statearr_34701_35633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (5))){
var inst_34642 = (state_34681[(9)]);
var inst_34646 = (state_34681[(11)]);
var inst_34639 = (state_34681[(8)]);
var inst_34647 = (state_34681[(13)]);
var inst_34646__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34642) : f.call(null,inst_34642));
var inst_34647__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34646__$1,inst_34639);
var state_34681__$1 = (function (){var statearr_34702 = state_34681;
(statearr_34702[(11)] = inst_34646__$1);

(statearr_34702[(13)] = inst_34647__$1);

return statearr_34702;
})();
if(inst_34647__$1){
var statearr_34703_35634 = state_34681__$1;
(statearr_34703_35634[(1)] = (8));

} else {
var statearr_34704_35635 = state_34681__$1;
(statearr_34704_35635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (14))){
var inst_34642 = (state_34681[(9)]);
var inst_34646 = (state_34681[(11)]);
var inst_34659 = (state_34681[(2)]);
var inst_34660 = [];
var inst_34661 = inst_34660.push(inst_34642);
var inst_34638 = inst_34660;
var inst_34639 = inst_34646;
var state_34681__$1 = (function (){var statearr_34706 = state_34681;
(statearr_34706[(14)] = inst_34659);

(statearr_34706[(15)] = inst_34661);

(statearr_34706[(7)] = inst_34638);

(statearr_34706[(8)] = inst_34639);

return statearr_34706;
})();
var statearr_34707_35636 = state_34681__$1;
(statearr_34707_35636[(2)] = null);

(statearr_34707_35636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (16))){
var state_34681__$1 = state_34681;
var statearr_34708_35637 = state_34681__$1;
(statearr_34708_35637[(2)] = null);

(statearr_34708_35637[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (10))){
var inst_34652 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
if(cljs.core.truth_(inst_34652)){
var statearr_34709_35638 = state_34681__$1;
(statearr_34709_35638[(1)] = (11));

} else {
var statearr_34710_35639 = state_34681__$1;
(statearr_34710_35639[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (18))){
var inst_34671 = (state_34681[(2)]);
var state_34681__$1 = state_34681;
var statearr_34711_35640 = state_34681__$1;
(statearr_34711_35640[(2)] = inst_34671);

(statearr_34711_35640[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34682 === (8))){
var inst_34647 = (state_34681[(13)]);
var state_34681__$1 = state_34681;
var statearr_34712_35641 = state_34681__$1;
(statearr_34712_35641[(2)] = inst_34647);

(statearr_34712_35641[(1)] = (10));


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
var cljs$core$async$state_machine__32540__auto__ = null;
var cljs$core$async$state_machine__32540__auto____0 = (function (){
var statearr_34713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34713[(0)] = cljs$core$async$state_machine__32540__auto__);

(statearr_34713[(1)] = (1));

return statearr_34713;
});
var cljs$core$async$state_machine__32540__auto____1 = (function (state_34681){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_34681);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e34714){var ex__32543__auto__ = e34714;
var statearr_34715_35642 = state_34681;
(statearr_34715_35642[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_34681[(4)]))){
var statearr_34716_35643 = state_34681;
(statearr_34716_35643[(1)] = cljs.core.first((state_34681[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35644 = state_34681;
state_34681 = G__35644;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
cljs$core$async$state_machine__32540__auto__ = function(state_34681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32540__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32540__auto____1.call(this,state_34681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32540__auto____0;
cljs$core$async$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32540__auto____1;
return cljs$core$async$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_34717 = f__32611__auto__();
(statearr_34717[(6)] = c__32610__auto___35621);

return statearr_34717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
