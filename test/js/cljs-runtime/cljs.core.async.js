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
var G__32542 = arguments.length;
switch (G__32542) {
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
var G__32562 = arguments.length;
switch (G__32562) {
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
var G__32574 = arguments.length;
switch (G__32574) {
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
var val_34651 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34651) : fn1.call(null,val_34651));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34651) : fn1.call(null,val_34651));
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
var G__32579 = arguments.length;
switch (G__32579) {
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
var n__5616__auto___34678 = n;
var x_34679 = (0);
while(true){
if((x_34679 < n__5616__auto___34678)){
(a[x_34679] = x_34679);

var G__34680 = (x_34679 + (1));
x_34679 = G__34680;
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
return (function (p1__32587_SHARP_){
var G__32589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32587_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32589) : fret.call(null,G__32589));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__32588_SHARP_){
var G__32590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32588_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32590) : fret.call(null,G__32590));
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
var len__5749__auto___34685 = arguments.length;
var i__5750__auto___34686 = (0);
while(true){
if((i__5750__auto___34686 < len__5749__auto___34685)){
args__5755__auto__.push((arguments[i__5750__auto___34686]));

var G__34687 = (i__5750__auto___34686 + (1));
i__5750__auto___34686 = G__34687;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32617){
var map__32618 = p__32617;
var map__32618__$1 = cljs.core.__destructure_map(map__32618);
var opts = map__32618__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32614){
var G__32615 = cljs.core.first(seq32614);
var seq32614__$1 = cljs.core.next(seq32614);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32615,seq32614__$1);
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
var G__32638 = arguments.length;
switch (G__32638) {
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
var c__32466__auto___34690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_32722){
var state_val_32723 = (state_32722[(1)]);
if((state_val_32723 === (7))){
var inst_32714 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32725_34692 = state_32722__$1;
(statearr_32725_34692[(2)] = inst_32714);

(statearr_32725_34692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (1))){
var state_32722__$1 = state_32722;
var statearr_32726_34693 = state_32722__$1;
(statearr_32726_34693[(2)] = null);

(statearr_32726_34693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (4))){
var inst_32689 = (state_32722[(7)]);
var inst_32689__$1 = (state_32722[(2)]);
var inst_32690 = (inst_32689__$1 == null);
var state_32722__$1 = (function (){var statearr_32727 = state_32722;
(statearr_32727[(7)] = inst_32689__$1);

return statearr_32727;
})();
if(cljs.core.truth_(inst_32690)){
var statearr_32728_34695 = state_32722__$1;
(statearr_32728_34695[(1)] = (5));

} else {
var statearr_32729_34697 = state_32722__$1;
(statearr_32729_34697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (13))){
var state_32722__$1 = state_32722;
var statearr_32730_34698 = state_32722__$1;
(statearr_32730_34698[(2)] = null);

(statearr_32730_34698[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (6))){
var inst_32689 = (state_32722[(7)]);
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32722__$1,(11),to,inst_32689);
} else {
if((state_val_32723 === (3))){
var inst_32720 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32722__$1,inst_32720);
} else {
if((state_val_32723 === (12))){
var state_32722__$1 = state_32722;
var statearr_32731_34699 = state_32722__$1;
(statearr_32731_34699[(2)] = null);

(statearr_32731_34699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (2))){
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32722__$1,(4),from);
} else {
if((state_val_32723 === (11))){
var inst_32699 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
if(cljs.core.truth_(inst_32699)){
var statearr_32732_34700 = state_32722__$1;
(statearr_32732_34700[(1)] = (12));

} else {
var statearr_32733_34701 = state_32722__$1;
(statearr_32733_34701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (9))){
var state_32722__$1 = state_32722;
var statearr_32734_34702 = state_32722__$1;
(statearr_32734_34702[(2)] = null);

(statearr_32734_34702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (5))){
var state_32722__$1 = state_32722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32735_34703 = state_32722__$1;
(statearr_32735_34703[(1)] = (8));

} else {
var statearr_32736_34704 = state_32722__$1;
(statearr_32736_34704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (14))){
var inst_32712 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32737_34705 = state_32722__$1;
(statearr_32737_34705[(2)] = inst_32712);

(statearr_32737_34705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (10))){
var inst_32696 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32738_34706 = state_32722__$1;
(statearr_32738_34706[(2)] = inst_32696);

(statearr_32738_34706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (8))){
var inst_32693 = cljs.core.async.close_BANG_(to);
var state_32722__$1 = state_32722;
var statearr_32739_34707 = state_32722__$1;
(statearr_32739_34707[(2)] = inst_32693);

(statearr_32739_34707[(1)] = (10));


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
var cljs$core$async$state_machine__32396__auto____1 = (function (state_32722){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32722);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32741){var ex__32399__auto__ = e32741;
var statearr_32742_34708 = state_32722;
(statearr_32742_34708[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32722[(4)]))){
var statearr_32743_34709 = state_32722;
(statearr_32743_34709[(1)] = cljs.core.first((state_32722[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34710 = state_32722;
state_32722 = G__34710;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_32722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_32722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_32744 = f__32467__auto__();
(statearr_32744[(6)] = c__32466__auto___34690);

return statearr_32744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
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
var c__32466__auto___34711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_32753){
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
var statearr_32758_34712 = state_32753;
(statearr_32758_34712[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32753[(4)]))){
var statearr_32759_34713 = state_32753;
(statearr_32759_34713[(1)] = cljs.core.first((state_32753[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34714 = state_32753;
state_32753 = G__34714;
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
var state__32468__auto__ = (function (){var statearr_32760 = f__32467__auto__();
(statearr_32760[(6)] = c__32466__auto___34711);

return statearr_32760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
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
var n__5616__auto___34728 = n;
var __34729 = (0);
while(true){
if((__34729 < n__5616__auto___34728)){
var G__32765_34730 = type;
var G__32765_34731__$1 = (((G__32765_34730 instanceof cljs.core.Keyword))?G__32765_34730.fqn:null);
switch (G__32765_34731__$1) {
case "compute":
var c__32466__auto___34733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34729,c__32466__auto___34733,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async){
return (function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = ((function (__34729,c__32466__auto___34733,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async){
return (function (state_32778){
var state_val_32779 = (state_32778[(1)]);
if((state_val_32779 === (1))){
var state_32778__$1 = state_32778;
var statearr_32780_34734 = state_32778__$1;
(statearr_32780_34734[(2)] = null);

(statearr_32780_34734[(1)] = (2));


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
var statearr_32781_34735 = state_32778__$1;
(statearr_32781_34735[(1)] = (5));

} else {
var statearr_32782_34736 = state_32778__$1;
(statearr_32782_34736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (5))){
var state_32778__$1 = state_32778;
var statearr_32783_34737 = state_32778__$1;
(statearr_32783_34737[(2)] = null);

(statearr_32783_34737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (6))){
var state_32778__$1 = state_32778;
var statearr_32784_34738 = state_32778__$1;
(statearr_32784_34738[(2)] = null);

(statearr_32784_34738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (7))){
var inst_32774 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
var statearr_32785_34740 = state_32778__$1;
(statearr_32785_34740[(2)] = inst_32774);

(statearr_32785_34740[(1)] = (3));


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
});})(__34729,c__32466__auto___34733,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async))
;
return ((function (__34729,switch__32395__auto__,c__32466__auto___34733,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async){
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
var statearr_32788_34741 = state_32778;
(statearr_32788_34741[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32778[(4)]))){
var statearr_32789_34742 = state_32778;
(statearr_32789_34742[(1)] = cljs.core.first((state_32778[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34744 = state_32778;
state_32778 = G__34744;
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
;})(__34729,switch__32395__auto__,c__32466__auto___34733,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async))
})();
var state__32468__auto__ = (function (){var statearr_32790 = f__32467__auto__();
(statearr_32790[(6)] = c__32466__auto___34733);

return statearr_32790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
});})(__34729,c__32466__auto___34733,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async))
);


break;
case "async":
var c__32466__auto___34745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34729,c__32466__auto___34745,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async){
return (function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = ((function (__34729,c__32466__auto___34745,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async){
return (function (state_32803){
var state_val_32804 = (state_32803[(1)]);
if((state_val_32804 === (1))){
var state_32803__$1 = state_32803;
var statearr_32805_34746 = state_32803__$1;
(statearr_32805_34746[(2)] = null);

(statearr_32805_34746[(1)] = (2));


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
var statearr_32806_34748 = state_32803__$1;
(statearr_32806_34748[(1)] = (5));

} else {
var statearr_32807_34749 = state_32803__$1;
(statearr_32807_34749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (5))){
var state_32803__$1 = state_32803;
var statearr_32808_34751 = state_32803__$1;
(statearr_32808_34751[(2)] = null);

(statearr_32808_34751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (6))){
var state_32803__$1 = state_32803;
var statearr_32809_34752 = state_32803__$1;
(statearr_32809_34752[(2)] = null);

(statearr_32809_34752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (7))){
var inst_32799 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32810_34753 = state_32803__$1;
(statearr_32810_34753[(2)] = inst_32799);

(statearr_32810_34753[(1)] = (3));


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
});})(__34729,c__32466__auto___34745,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async))
;
return ((function (__34729,switch__32395__auto__,c__32466__auto___34745,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async){
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
var statearr_32813_34756 = state_32803;
(statearr_32813_34756[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32803[(4)]))){
var statearr_32814_34757 = state_32803;
(statearr_32814_34757[(1)] = cljs.core.first((state_32803[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34758 = state_32803;
state_32803 = G__34758;
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
;})(__34729,switch__32395__auto__,c__32466__auto___34745,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async))
})();
var state__32468__auto__ = (function (){var statearr_32815 = f__32467__auto__();
(statearr_32815[(6)] = c__32466__auto___34745);

return statearr_32815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
});})(__34729,c__32466__auto___34745,G__32765_34730,G__32765_34731__$1,n__5616__auto___34728,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32765_34731__$1)].join('')));

}

var G__34759 = (__34729 + (1));
__34729 = G__34759;
continue;
} else {
}
break;
}

var c__32466__auto___34760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_32837){
var state_val_32838 = (state_32837[(1)]);
if((state_val_32838 === (7))){
var inst_32833 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
var statearr_32839_34761 = state_32837__$1;
(statearr_32839_34761[(2)] = inst_32833);

(statearr_32839_34761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (1))){
var state_32837__$1 = state_32837;
var statearr_32840_34762 = state_32837__$1;
(statearr_32840_34762[(2)] = null);

(statearr_32840_34762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (4))){
var inst_32818 = (state_32837[(7)]);
var inst_32818__$1 = (state_32837[(2)]);
var inst_32819 = (inst_32818__$1 == null);
var state_32837__$1 = (function (){var statearr_32844 = state_32837;
(statearr_32844[(7)] = inst_32818__$1);

return statearr_32844;
})();
if(cljs.core.truth_(inst_32819)){
var statearr_32845_34764 = state_32837__$1;
(statearr_32845_34764[(1)] = (5));

} else {
var statearr_32846_34766 = state_32837__$1;
(statearr_32846_34766[(1)] = (6));

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
var state_32837__$1 = (function (){var statearr_32847 = state_32837;
(statearr_32847[(8)] = inst_32823__$1);

return statearr_32847;
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
var state_32837__$1 = (function (){var statearr_32848 = state_32837;
(statearr_32848[(9)] = inst_32830);

return statearr_32848;
})();
var statearr_32849_34768 = state_32837__$1;
(statearr_32849_34768[(2)] = null);

(statearr_32849_34768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (5))){
var inst_32821 = cljs.core.async.close_BANG_(jobs);
var state_32837__$1 = state_32837;
var statearr_32850_34770 = state_32837__$1;
(statearr_32850_34770[(2)] = inst_32821);

(statearr_32850_34770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (8))){
var inst_32823 = (state_32837[(8)]);
var inst_32828 = (state_32837[(2)]);
var state_32837__$1 = (function (){var statearr_32851 = state_32837;
(statearr_32851[(10)] = inst_32828);

return statearr_32851;
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
var statearr_32852 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__);

(statearr_32852[(1)] = (1));

return statearr_32852;
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
}catch (e32856){var ex__32399__auto__ = e32856;
var statearr_32857_34771 = state_32837;
(statearr_32857_34771[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32837[(4)]))){
var statearr_32858_34772 = state_32837;
(statearr_32858_34772[(1)] = cljs.core.first((state_32837[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34773 = state_32837;
state_32837 = G__34773;
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
var state__32468__auto__ = (function (){var statearr_32860 = f__32467__auto__();
(statearr_32860[(6)] = c__32466__auto___34760);

return statearr_32860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));


var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_32906){
var state_val_32907 = (state_32906[(1)]);
if((state_val_32907 === (7))){
var inst_32902 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32911_34774 = state_32906__$1;
(statearr_32911_34774[(2)] = inst_32902);

(statearr_32911_34774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (20))){
var state_32906__$1 = state_32906;
var statearr_32912_34775 = state_32906__$1;
(statearr_32912_34775[(2)] = null);

(statearr_32912_34775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (1))){
var state_32906__$1 = state_32906;
var statearr_32913_34776 = state_32906__$1;
(statearr_32913_34776[(2)] = null);

(statearr_32913_34776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (4))){
var inst_32863 = (state_32906[(7)]);
var inst_32863__$1 = (state_32906[(2)]);
var inst_32864 = (inst_32863__$1 == null);
var state_32906__$1 = (function (){var statearr_32914 = state_32906;
(statearr_32914[(7)] = inst_32863__$1);

return statearr_32914;
})();
if(cljs.core.truth_(inst_32864)){
var statearr_32915_34777 = state_32906__$1;
(statearr_32915_34777[(1)] = (5));

} else {
var statearr_32916_34778 = state_32906__$1;
(statearr_32916_34778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (15))){
var inst_32880 = (state_32906[(8)]);
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32906__$1,(18),to,inst_32880);
} else {
if((state_val_32907 === (21))){
var inst_32897 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32917_34780 = state_32906__$1;
(statearr_32917_34780[(2)] = inst_32897);

(statearr_32917_34780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (13))){
var inst_32899 = (state_32906[(2)]);
var state_32906__$1 = (function (){var statearr_32921 = state_32906;
(statearr_32921[(9)] = inst_32899);

return statearr_32921;
})();
var statearr_32922_34781 = state_32906__$1;
(statearr_32922_34781[(2)] = null);

(statearr_32922_34781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (6))){
var inst_32863 = (state_32906[(7)]);
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32906__$1,(11),inst_32863);
} else {
if((state_val_32907 === (17))){
var inst_32892 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
if(cljs.core.truth_(inst_32892)){
var statearr_32923_34783 = state_32906__$1;
(statearr_32923_34783[(1)] = (19));

} else {
var statearr_32924_34784 = state_32906__$1;
(statearr_32924_34784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (3))){
var inst_32904 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32906__$1,inst_32904);
} else {
if((state_val_32907 === (12))){
var inst_32877 = (state_32906[(10)]);
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32906__$1,(14),inst_32877);
} else {
if((state_val_32907 === (2))){
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32906__$1,(4),results);
} else {
if((state_val_32907 === (19))){
var state_32906__$1 = state_32906;
var statearr_32925_34786 = state_32906__$1;
(statearr_32925_34786[(2)] = null);

(statearr_32925_34786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (11))){
var inst_32877 = (state_32906[(2)]);
var state_32906__$1 = (function (){var statearr_32926 = state_32906;
(statearr_32926[(10)] = inst_32877);

return statearr_32926;
})();
var statearr_32927_34787 = state_32906__$1;
(statearr_32927_34787[(2)] = null);

(statearr_32927_34787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (9))){
var state_32906__$1 = state_32906;
var statearr_32928_34788 = state_32906__$1;
(statearr_32928_34788[(2)] = null);

(statearr_32928_34788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (5))){
var state_32906__$1 = state_32906;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32929_34789 = state_32906__$1;
(statearr_32929_34789[(1)] = (8));

} else {
var statearr_32930_34790 = state_32906__$1;
(statearr_32930_34790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (14))){
var inst_32880 = (state_32906[(8)]);
var inst_32886 = (state_32906[(11)]);
var inst_32880__$1 = (state_32906[(2)]);
var inst_32882 = (inst_32880__$1 == null);
var inst_32886__$1 = cljs.core.not(inst_32882);
var state_32906__$1 = (function (){var statearr_32931 = state_32906;
(statearr_32931[(8)] = inst_32880__$1);

(statearr_32931[(11)] = inst_32886__$1);

return statearr_32931;
})();
if(inst_32886__$1){
var statearr_32932_34791 = state_32906__$1;
(statearr_32932_34791[(1)] = (15));

} else {
var statearr_32933_34792 = state_32906__$1;
(statearr_32933_34792[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (16))){
var inst_32886 = (state_32906[(11)]);
var state_32906__$1 = state_32906;
var statearr_32934_34793 = state_32906__$1;
(statearr_32934_34793[(2)] = inst_32886);

(statearr_32934_34793[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (10))){
var inst_32871 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32935_34794 = state_32906__$1;
(statearr_32935_34794[(2)] = inst_32871);

(statearr_32935_34794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (18))){
var inst_32889 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32936_34795 = state_32906__$1;
(statearr_32936_34795[(2)] = inst_32889);

(statearr_32936_34795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (8))){
var inst_32868 = cljs.core.async.close_BANG_(to);
var state_32906__$1 = state_32906;
var statearr_32937_34797 = state_32906__$1;
(statearr_32937_34797[(2)] = inst_32868);

(statearr_32937_34797[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1 = (function (state_32906){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_32906);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e32939){var ex__32399__auto__ = e32939;
var statearr_32940_34798 = state_32906;
(statearr_32940_34798[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32906[(4)]))){
var statearr_32941_34799 = state_32906;
(statearr_32941_34799[(1)] = cljs.core.first((state_32906[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34800 = state_32906;
state_32906 = G__34800;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__ = function(state_32906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1.call(this,state_32906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_32942 = f__32467__auto__();
(statearr_32942[(6)] = c__32466__auto__);

return statearr_32942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
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
var c__32466__auto___34806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_32974){
var state_val_32976 = (state_32974[(1)]);
if((state_val_32976 === (7))){
var inst_32970 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_32978_34807 = state_32974__$1;
(statearr_32978_34807[(2)] = inst_32970);

(statearr_32978_34807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (1))){
var state_32974__$1 = state_32974;
var statearr_32979_34808 = state_32974__$1;
(statearr_32979_34808[(2)] = null);

(statearr_32979_34808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (4))){
var inst_32951 = (state_32974[(7)]);
var inst_32951__$1 = (state_32974[(2)]);
var inst_32952 = (inst_32951__$1 == null);
var state_32974__$1 = (function (){var statearr_32981 = state_32974;
(statearr_32981[(7)] = inst_32951__$1);

return statearr_32981;
})();
if(cljs.core.truth_(inst_32952)){
var statearr_32982_34809 = state_32974__$1;
(statearr_32982_34809[(1)] = (5));

} else {
var statearr_32983_34810 = state_32974__$1;
(statearr_32983_34810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (13))){
var state_32974__$1 = state_32974;
var statearr_32984_34811 = state_32974__$1;
(statearr_32984_34811[(2)] = null);

(statearr_32984_34811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (6))){
var inst_32951 = (state_32974[(7)]);
var inst_32957 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32951) : p.call(null,inst_32951));
var state_32974__$1 = state_32974;
if(cljs.core.truth_(inst_32957)){
var statearr_32985_34812 = state_32974__$1;
(statearr_32985_34812[(1)] = (9));

} else {
var statearr_32986_34813 = state_32974__$1;
(statearr_32986_34813[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (3))){
var inst_32972 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32974__$1,inst_32972);
} else {
if((state_val_32976 === (12))){
var state_32974__$1 = state_32974;
var statearr_32987_34814 = state_32974__$1;
(statearr_32987_34814[(2)] = null);

(statearr_32987_34814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (2))){
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32974__$1,(4),ch);
} else {
if((state_val_32976 === (11))){
var inst_32951 = (state_32974[(7)]);
var inst_32961 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32974__$1,(8),inst_32961,inst_32951);
} else {
if((state_val_32976 === (9))){
var state_32974__$1 = state_32974;
var statearr_32988_34815 = state_32974__$1;
(statearr_32988_34815[(2)] = tc);

(statearr_32988_34815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (5))){
var inst_32954 = cljs.core.async.close_BANG_(tc);
var inst_32955 = cljs.core.async.close_BANG_(fc);
var state_32974__$1 = (function (){var statearr_32989 = state_32974;
(statearr_32989[(8)] = inst_32954);

return statearr_32989;
})();
var statearr_32990_34818 = state_32974__$1;
(statearr_32990_34818[(2)] = inst_32955);

(statearr_32990_34818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (14))){
var inst_32968 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_32991_34819 = state_32974__$1;
(statearr_32991_34819[(2)] = inst_32968);

(statearr_32991_34819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (10))){
var state_32974__$1 = state_32974;
var statearr_32992_34820 = state_32974__$1;
(statearr_32992_34820[(2)] = fc);

(statearr_32992_34820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32976 === (8))){
var inst_32963 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
if(cljs.core.truth_(inst_32963)){
var statearr_32993_34821 = state_32974__$1;
(statearr_32993_34821[(1)] = (12));

} else {
var statearr_32994_34822 = state_32974__$1;
(statearr_32994_34822[(1)] = (13));

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
var statearr_32997_34823 = state_32974;
(statearr_32997_34823[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_32974[(4)]))){
var statearr_32998_34825 = state_32974;
(statearr_32998_34825[(1)] = cljs.core.first((state_32974[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34827 = state_32974;
state_32974 = G__34827;
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
var state__32468__auto__ = (function (){var statearr_32999 = f__32467__auto__();
(statearr_32999[(6)] = c__32466__auto___34806);

return statearr_32999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
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
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_33021){
var state_val_33022 = (state_33021[(1)]);
if((state_val_33022 === (7))){
var inst_33017 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
var statearr_33023_34829 = state_33021__$1;
(statearr_33023_34829[(2)] = inst_33017);

(statearr_33023_34829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (1))){
var inst_33000 = init;
var inst_33001 = inst_33000;
var state_33021__$1 = (function (){var statearr_33024 = state_33021;
(statearr_33024[(7)] = inst_33001);

return statearr_33024;
})();
var statearr_33025_34830 = state_33021__$1;
(statearr_33025_34830[(2)] = null);

(statearr_33025_34830[(1)] = (2));


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
var statearr_33027_34831 = state_33021__$1;
(statearr_33027_34831[(1)] = (5));

} else {
var statearr_33028_34832 = state_33021__$1;
(statearr_33028_34832[(1)] = (6));

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
var statearr_33030_34833 = state_33021__$1;
(statearr_33030_34833[(1)] = (8));

} else {
var statearr_33031_34834 = state_33021__$1;
(statearr_33031_34834[(1)] = (9));

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
var statearr_33033_34835 = state_33021__$1;
(statearr_33033_34835[(2)] = null);

(statearr_33033_34835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (5))){
var inst_33001 = (state_33021[(7)]);
var state_33021__$1 = state_33021;
var statearr_33034_34836 = state_33021__$1;
(statearr_33034_34836[(2)] = inst_33001);

(statearr_33034_34836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (10))){
var inst_33015 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
var statearr_33035_34837 = state_33021__$1;
(statearr_33035_34837[(2)] = inst_33015);

(statearr_33035_34837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (8))){
var inst_33008 = (state_33021[(9)]);
var inst_33011 = cljs.core.deref(inst_33008);
var state_33021__$1 = state_33021;
var statearr_33036_34838 = state_33021__$1;
(statearr_33036_34838[(2)] = inst_33011);

(statearr_33036_34838[(1)] = (10));


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
var statearr_33039_34839 = state_33021;
(statearr_33039_34839[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33021[(4)]))){
var statearr_33040_34840 = state_33021;
(statearr_33040_34840[(1)] = cljs.core.first((state_33021[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34842 = state_33021;
state_33021 = G__34842;
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
var state__32468__auto__ = (function (){var statearr_33041 = f__32467__auto__();
(statearr_33041[(6)] = c__32466__auto__);

return statearr_33041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_33047){
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
var statearr_33052 = [null,null,null,null,null,null,null];
(statearr_33052[(0)] = cljs$core$async$transduce_$_state_machine__32396__auto__);

(statearr_33052[(1)] = (1));

return statearr_33052;
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
}catch (e33054){var ex__32399__auto__ = e33054;
var statearr_33056_34844 = state_33047;
(statearr_33056_34844[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33047[(4)]))){
var statearr_33058_34845 = state_33047;
(statearr_33058_34845[(1)] = cljs.core.first((state_33047[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34846 = state_33047;
state_33047 = G__34846;
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
var state__32468__auto__ = (function (){var statearr_33061 = f__32467__auto__();
(statearr_33061[(6)] = c__32466__auto__);

return statearr_33061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
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
var G__33065 = arguments.length;
switch (G__33065) {
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
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_33095){
var state_val_33096 = (state_33095[(1)]);
if((state_val_33096 === (7))){
var inst_33075 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
var statearr_33100_34848 = state_33095__$1;
(statearr_33100_34848[(2)] = inst_33075);

(statearr_33100_34848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (1))){
var inst_33069 = cljs.core.seq(coll);
var inst_33070 = inst_33069;
var state_33095__$1 = (function (){var statearr_33102 = state_33095;
(statearr_33102[(7)] = inst_33070);

return statearr_33102;
})();
var statearr_33104_34849 = state_33095__$1;
(statearr_33104_34849[(2)] = null);

(statearr_33104_34849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (4))){
var inst_33070 = (state_33095[(7)]);
var inst_33073 = cljs.core.first(inst_33070);
var state_33095__$1 = state_33095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33095__$1,(7),ch,inst_33073);
} else {
if((state_val_33096 === (13))){
var inst_33087 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
var statearr_33107_34852 = state_33095__$1;
(statearr_33107_34852[(2)] = inst_33087);

(statearr_33107_34852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (6))){
var inst_33078 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
if(cljs.core.truth_(inst_33078)){
var statearr_33110_34855 = state_33095__$1;
(statearr_33110_34855[(1)] = (8));

} else {
var statearr_33111_34856 = state_33095__$1;
(statearr_33111_34856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (3))){
var inst_33091 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33095__$1,inst_33091);
} else {
if((state_val_33096 === (12))){
var state_33095__$1 = state_33095;
var statearr_33112_34858 = state_33095__$1;
(statearr_33112_34858[(2)] = null);

(statearr_33112_34858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (2))){
var inst_33070 = (state_33095[(7)]);
var state_33095__$1 = state_33095;
if(cljs.core.truth_(inst_33070)){
var statearr_33113_34863 = state_33095__$1;
(statearr_33113_34863[(1)] = (4));

} else {
var statearr_33114_34864 = state_33095__$1;
(statearr_33114_34864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (11))){
var inst_33084 = cljs.core.async.close_BANG_(ch);
var state_33095__$1 = state_33095;
var statearr_33115_34865 = state_33095__$1;
(statearr_33115_34865[(2)] = inst_33084);

(statearr_33115_34865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (9))){
var state_33095__$1 = state_33095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33116_34866 = state_33095__$1;
(statearr_33116_34866[(1)] = (11));

} else {
var statearr_33117_34867 = state_33095__$1;
(statearr_33117_34867[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (5))){
var inst_33070 = (state_33095[(7)]);
var state_33095__$1 = state_33095;
var statearr_33118_34869 = state_33095__$1;
(statearr_33118_34869[(2)] = inst_33070);

(statearr_33118_34869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (10))){
var inst_33089 = (state_33095[(2)]);
var state_33095__$1 = state_33095;
var statearr_33119_34870 = state_33095__$1;
(statearr_33119_34870[(2)] = inst_33089);

(statearr_33119_34870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33096 === (8))){
var inst_33070 = (state_33095[(7)]);
var inst_33080 = cljs.core.next(inst_33070);
var inst_33070__$1 = inst_33080;
var state_33095__$1 = (function (){var statearr_33120 = state_33095;
(statearr_33120[(7)] = inst_33070__$1);

return statearr_33120;
})();
var statearr_33121_34872 = state_33095__$1;
(statearr_33121_34872[(2)] = null);

(statearr_33121_34872[(1)] = (2));


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
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33095){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33095);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33123){var ex__32399__auto__ = e33123;
var statearr_33124_34873 = state_33095;
(statearr_33124_34873[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33095[(4)]))){
var statearr_33125_34874 = state_33095;
(statearr_33125_34874[(1)] = cljs.core.first((state_33095[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34875 = state_33095;
state_33095 = G__34875;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_33126 = f__32467__auto__();
(statearr_33126[(6)] = c__32466__auto__);

return statearr_33126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
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
var G__33128 = arguments.length;
switch (G__33128) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34883 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34883(_);
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

var cljs$core$async$Mult$untap_STAR_$dyn_34888 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34888(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34889 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34889(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33141 = (function (ch,cs,meta33142){
this.ch = ch;
this.cs = cs;
this.meta33142 = meta33142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33143,meta33142__$1){
var self__ = this;
var _33143__$1 = this;
return (new cljs.core.async.t_cljs$core$async33141(self__.ch,self__.cs,meta33142__$1));
}));

(cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33143){
var self__ = this;
var _33143__$1 = this;
return self__.meta33142;
}));

(cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33142","meta33142",-683344679,null)], null);
}));

(cljs.core.async.t_cljs$core$async33141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33141");

(cljs.core.async.t_cljs$core$async33141.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33141.
 */
cljs.core.async.__GT_t_cljs$core$async33141 = (function cljs$core$async$__GT_t_cljs$core$async33141(ch,cs,meta33142){
return (new cljs.core.async.t_cljs$core$async33141(ch,cs,meta33142));
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
var m = (new cljs.core.async.t_cljs$core$async33141(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32466__auto___34890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_33277){
var state_val_33278 = (state_33277[(1)]);
if((state_val_33278 === (7))){
var inst_33273 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33279_34891 = state_33277__$1;
(statearr_33279_34891[(2)] = inst_33273);

(statearr_33279_34891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (20))){
var inst_33178 = (state_33277[(7)]);
var inst_33190 = cljs.core.first(inst_33178);
var inst_33191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33190,(0),null);
var inst_33192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33190,(1),null);
var state_33277__$1 = (function (){var statearr_33280 = state_33277;
(statearr_33280[(8)] = inst_33191);

return statearr_33280;
})();
if(cljs.core.truth_(inst_33192)){
var statearr_33281_34892 = state_33277__$1;
(statearr_33281_34892[(1)] = (22));

} else {
var statearr_33282_34893 = state_33277__$1;
(statearr_33282_34893[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (27))){
var inst_33220 = (state_33277[(9)]);
var inst_33222 = (state_33277[(10)]);
var inst_33227 = (state_33277[(11)]);
var inst_33147 = (state_33277[(12)]);
var inst_33227__$1 = cljs.core._nth(inst_33220,inst_33222);
var inst_33228 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33227__$1,inst_33147,done);
var state_33277__$1 = (function (){var statearr_33283 = state_33277;
(statearr_33283[(11)] = inst_33227__$1);

return statearr_33283;
})();
if(cljs.core.truth_(inst_33228)){
var statearr_33284_34895 = state_33277__$1;
(statearr_33284_34895[(1)] = (30));

} else {
var statearr_33285_34896 = state_33277__$1;
(statearr_33285_34896[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (1))){
var state_33277__$1 = state_33277;
var statearr_33286_34897 = state_33277__$1;
(statearr_33286_34897[(2)] = null);

(statearr_33286_34897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (24))){
var inst_33178 = (state_33277[(7)]);
var inst_33197 = (state_33277[(2)]);
var inst_33198 = cljs.core.next(inst_33178);
var inst_33156 = inst_33198;
var inst_33157 = null;
var inst_33158 = (0);
var inst_33159 = (0);
var state_33277__$1 = (function (){var statearr_33287 = state_33277;
(statearr_33287[(13)] = inst_33197);

(statearr_33287[(14)] = inst_33156);

(statearr_33287[(15)] = inst_33157);

(statearr_33287[(16)] = inst_33158);

(statearr_33287[(17)] = inst_33159);

return statearr_33287;
})();
var statearr_33288_34899 = state_33277__$1;
(statearr_33288_34899[(2)] = null);

(statearr_33288_34899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (39))){
var state_33277__$1 = state_33277;
var statearr_33292_34900 = state_33277__$1;
(statearr_33292_34900[(2)] = null);

(statearr_33292_34900[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (4))){
var inst_33147 = (state_33277[(12)]);
var inst_33147__$1 = (state_33277[(2)]);
var inst_33148 = (inst_33147__$1 == null);
var state_33277__$1 = (function (){var statearr_33293 = state_33277;
(statearr_33293[(12)] = inst_33147__$1);

return statearr_33293;
})();
if(cljs.core.truth_(inst_33148)){
var statearr_33294_34908 = state_33277__$1;
(statearr_33294_34908[(1)] = (5));

} else {
var statearr_33295_34909 = state_33277__$1;
(statearr_33295_34909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (15))){
var inst_33159 = (state_33277[(17)]);
var inst_33156 = (state_33277[(14)]);
var inst_33157 = (state_33277[(15)]);
var inst_33158 = (state_33277[(16)]);
var inst_33174 = (state_33277[(2)]);
var inst_33175 = (inst_33159 + (1));
var tmp33289 = inst_33158;
var tmp33290 = inst_33157;
var tmp33291 = inst_33156;
var inst_33156__$1 = tmp33291;
var inst_33157__$1 = tmp33290;
var inst_33158__$1 = tmp33289;
var inst_33159__$1 = inst_33175;
var state_33277__$1 = (function (){var statearr_33296 = state_33277;
(statearr_33296[(18)] = inst_33174);

(statearr_33296[(14)] = inst_33156__$1);

(statearr_33296[(15)] = inst_33157__$1);

(statearr_33296[(16)] = inst_33158__$1);

(statearr_33296[(17)] = inst_33159__$1);

return statearr_33296;
})();
var statearr_33297_34910 = state_33277__$1;
(statearr_33297_34910[(2)] = null);

(statearr_33297_34910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (21))){
var inst_33201 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33301_34911 = state_33277__$1;
(statearr_33301_34911[(2)] = inst_33201);

(statearr_33301_34911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (31))){
var inst_33227 = (state_33277[(11)]);
var inst_33231 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33227);
var state_33277__$1 = state_33277;
var statearr_33302_34912 = state_33277__$1;
(statearr_33302_34912[(2)] = inst_33231);

(statearr_33302_34912[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (32))){
var inst_33222 = (state_33277[(10)]);
var inst_33219 = (state_33277[(19)]);
var inst_33220 = (state_33277[(9)]);
var inst_33221 = (state_33277[(20)]);
var inst_33233 = (state_33277[(2)]);
var inst_33234 = (inst_33222 + (1));
var tmp33298 = inst_33221;
var tmp33299 = inst_33219;
var tmp33300 = inst_33220;
var inst_33219__$1 = tmp33299;
var inst_33220__$1 = tmp33300;
var inst_33221__$1 = tmp33298;
var inst_33222__$1 = inst_33234;
var state_33277__$1 = (function (){var statearr_33303 = state_33277;
(statearr_33303[(21)] = inst_33233);

(statearr_33303[(19)] = inst_33219__$1);

(statearr_33303[(9)] = inst_33220__$1);

(statearr_33303[(20)] = inst_33221__$1);

(statearr_33303[(10)] = inst_33222__$1);

return statearr_33303;
})();
var statearr_33304_34913 = state_33277__$1;
(statearr_33304_34913[(2)] = null);

(statearr_33304_34913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (40))){
var inst_33246 = (state_33277[(22)]);
var inst_33250 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33246);
var state_33277__$1 = state_33277;
var statearr_33305_34914 = state_33277__$1;
(statearr_33305_34914[(2)] = inst_33250);

(statearr_33305_34914[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (33))){
var inst_33237 = (state_33277[(23)]);
var inst_33239 = cljs.core.chunked_seq_QMARK_(inst_33237);
var state_33277__$1 = state_33277;
if(inst_33239){
var statearr_33306_34915 = state_33277__$1;
(statearr_33306_34915[(1)] = (36));

} else {
var statearr_33307_34916 = state_33277__$1;
(statearr_33307_34916[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (13))){
var inst_33168 = (state_33277[(24)]);
var inst_33171 = cljs.core.async.close_BANG_(inst_33168);
var state_33277__$1 = state_33277;
var statearr_33308_34917 = state_33277__$1;
(statearr_33308_34917[(2)] = inst_33171);

(statearr_33308_34917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (22))){
var inst_33191 = (state_33277[(8)]);
var inst_33194 = cljs.core.async.close_BANG_(inst_33191);
var state_33277__$1 = state_33277;
var statearr_33309_34918 = state_33277__$1;
(statearr_33309_34918[(2)] = inst_33194);

(statearr_33309_34918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (36))){
var inst_33237 = (state_33277[(23)]);
var inst_33241 = cljs.core.chunk_first(inst_33237);
var inst_33242 = cljs.core.chunk_rest(inst_33237);
var inst_33243 = cljs.core.count(inst_33241);
var inst_33219 = inst_33242;
var inst_33220 = inst_33241;
var inst_33221 = inst_33243;
var inst_33222 = (0);
var state_33277__$1 = (function (){var statearr_33310 = state_33277;
(statearr_33310[(19)] = inst_33219);

(statearr_33310[(9)] = inst_33220);

(statearr_33310[(20)] = inst_33221);

(statearr_33310[(10)] = inst_33222);

return statearr_33310;
})();
var statearr_33311_34919 = state_33277__$1;
(statearr_33311_34919[(2)] = null);

(statearr_33311_34919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (41))){
var inst_33237 = (state_33277[(23)]);
var inst_33252 = (state_33277[(2)]);
var inst_33253 = cljs.core.next(inst_33237);
var inst_33219 = inst_33253;
var inst_33220 = null;
var inst_33221 = (0);
var inst_33222 = (0);
var state_33277__$1 = (function (){var statearr_33312 = state_33277;
(statearr_33312[(25)] = inst_33252);

(statearr_33312[(19)] = inst_33219);

(statearr_33312[(9)] = inst_33220);

(statearr_33312[(20)] = inst_33221);

(statearr_33312[(10)] = inst_33222);

return statearr_33312;
})();
var statearr_33313_34921 = state_33277__$1;
(statearr_33313_34921[(2)] = null);

(statearr_33313_34921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (43))){
var state_33277__$1 = state_33277;
var statearr_33314_34922 = state_33277__$1;
(statearr_33314_34922[(2)] = null);

(statearr_33314_34922[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (29))){
var inst_33261 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33315_34923 = state_33277__$1;
(statearr_33315_34923[(2)] = inst_33261);

(statearr_33315_34923[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (44))){
var inst_33270 = (state_33277[(2)]);
var state_33277__$1 = (function (){var statearr_33316 = state_33277;
(statearr_33316[(26)] = inst_33270);

return statearr_33316;
})();
var statearr_33317_34924 = state_33277__$1;
(statearr_33317_34924[(2)] = null);

(statearr_33317_34924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (6))){
var inst_33211 = (state_33277[(27)]);
var inst_33210 = cljs.core.deref(cs);
var inst_33211__$1 = cljs.core.keys(inst_33210);
var inst_33212 = cljs.core.count(inst_33211__$1);
var inst_33213 = cljs.core.reset_BANG_(dctr,inst_33212);
var inst_33218 = cljs.core.seq(inst_33211__$1);
var inst_33219 = inst_33218;
var inst_33220 = null;
var inst_33221 = (0);
var inst_33222 = (0);
var state_33277__$1 = (function (){var statearr_33318 = state_33277;
(statearr_33318[(27)] = inst_33211__$1);

(statearr_33318[(28)] = inst_33213);

(statearr_33318[(19)] = inst_33219);

(statearr_33318[(9)] = inst_33220);

(statearr_33318[(20)] = inst_33221);

(statearr_33318[(10)] = inst_33222);

return statearr_33318;
})();
var statearr_33319_34925 = state_33277__$1;
(statearr_33319_34925[(2)] = null);

(statearr_33319_34925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (28))){
var inst_33219 = (state_33277[(19)]);
var inst_33237 = (state_33277[(23)]);
var inst_33237__$1 = cljs.core.seq(inst_33219);
var state_33277__$1 = (function (){var statearr_33320 = state_33277;
(statearr_33320[(23)] = inst_33237__$1);

return statearr_33320;
})();
if(inst_33237__$1){
var statearr_33321_34926 = state_33277__$1;
(statearr_33321_34926[(1)] = (33));

} else {
var statearr_33322_34927 = state_33277__$1;
(statearr_33322_34927[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (25))){
var inst_33222 = (state_33277[(10)]);
var inst_33221 = (state_33277[(20)]);
var inst_33224 = (inst_33222 < inst_33221);
var inst_33225 = inst_33224;
var state_33277__$1 = state_33277;
if(cljs.core.truth_(inst_33225)){
var statearr_33323_34928 = state_33277__$1;
(statearr_33323_34928[(1)] = (27));

} else {
var statearr_33324_34929 = state_33277__$1;
(statearr_33324_34929[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (34))){
var state_33277__$1 = state_33277;
var statearr_33325_34930 = state_33277__$1;
(statearr_33325_34930[(2)] = null);

(statearr_33325_34930[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (17))){
var state_33277__$1 = state_33277;
var statearr_33328_34931 = state_33277__$1;
(statearr_33328_34931[(2)] = null);

(statearr_33328_34931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (3))){
var inst_33275 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33277__$1,inst_33275);
} else {
if((state_val_33278 === (12))){
var inst_33206 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33329_34932 = state_33277__$1;
(statearr_33329_34932[(2)] = inst_33206);

(statearr_33329_34932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (2))){
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33277__$1,(4),ch);
} else {
if((state_val_33278 === (23))){
var state_33277__$1 = state_33277;
var statearr_33330_34933 = state_33277__$1;
(statearr_33330_34933[(2)] = null);

(statearr_33330_34933[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (35))){
var inst_33259 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33331_34934 = state_33277__$1;
(statearr_33331_34934[(2)] = inst_33259);

(statearr_33331_34934[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (19))){
var inst_33178 = (state_33277[(7)]);
var inst_33182 = cljs.core.chunk_first(inst_33178);
var inst_33183 = cljs.core.chunk_rest(inst_33178);
var inst_33184 = cljs.core.count(inst_33182);
var inst_33156 = inst_33183;
var inst_33157 = inst_33182;
var inst_33158 = inst_33184;
var inst_33159 = (0);
var state_33277__$1 = (function (){var statearr_33333 = state_33277;
(statearr_33333[(14)] = inst_33156);

(statearr_33333[(15)] = inst_33157);

(statearr_33333[(16)] = inst_33158);

(statearr_33333[(17)] = inst_33159);

return statearr_33333;
})();
var statearr_33334_34935 = state_33277__$1;
(statearr_33334_34935[(2)] = null);

(statearr_33334_34935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (11))){
var inst_33156 = (state_33277[(14)]);
var inst_33178 = (state_33277[(7)]);
var inst_33178__$1 = cljs.core.seq(inst_33156);
var state_33277__$1 = (function (){var statearr_33335 = state_33277;
(statearr_33335[(7)] = inst_33178__$1);

return statearr_33335;
})();
if(inst_33178__$1){
var statearr_33336_34937 = state_33277__$1;
(statearr_33336_34937[(1)] = (16));

} else {
var statearr_33337_34938 = state_33277__$1;
(statearr_33337_34938[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (9))){
var inst_33208 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33338_34939 = state_33277__$1;
(statearr_33338_34939[(2)] = inst_33208);

(statearr_33338_34939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (5))){
var inst_33154 = cljs.core.deref(cs);
var inst_33155 = cljs.core.seq(inst_33154);
var inst_33156 = inst_33155;
var inst_33157 = null;
var inst_33158 = (0);
var inst_33159 = (0);
var state_33277__$1 = (function (){var statearr_33339 = state_33277;
(statearr_33339[(14)] = inst_33156);

(statearr_33339[(15)] = inst_33157);

(statearr_33339[(16)] = inst_33158);

(statearr_33339[(17)] = inst_33159);

return statearr_33339;
})();
var statearr_33340_34941 = state_33277__$1;
(statearr_33340_34941[(2)] = null);

(statearr_33340_34941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (14))){
var state_33277__$1 = state_33277;
var statearr_33341_34942 = state_33277__$1;
(statearr_33341_34942[(2)] = null);

(statearr_33341_34942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (45))){
var inst_33267 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33342_34943 = state_33277__$1;
(statearr_33342_34943[(2)] = inst_33267);

(statearr_33342_34943[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (26))){
var inst_33211 = (state_33277[(27)]);
var inst_33263 = (state_33277[(2)]);
var inst_33264 = cljs.core.seq(inst_33211);
var state_33277__$1 = (function (){var statearr_33343 = state_33277;
(statearr_33343[(29)] = inst_33263);

return statearr_33343;
})();
if(inst_33264){
var statearr_33344_34944 = state_33277__$1;
(statearr_33344_34944[(1)] = (42));

} else {
var statearr_33345_34945 = state_33277__$1;
(statearr_33345_34945[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (16))){
var inst_33178 = (state_33277[(7)]);
var inst_33180 = cljs.core.chunked_seq_QMARK_(inst_33178);
var state_33277__$1 = state_33277;
if(inst_33180){
var statearr_33347_34946 = state_33277__$1;
(statearr_33347_34946[(1)] = (19));

} else {
var statearr_33348_34947 = state_33277__$1;
(statearr_33348_34947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (38))){
var inst_33256 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33349_34948 = state_33277__$1;
(statearr_33349_34948[(2)] = inst_33256);

(statearr_33349_34948[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (30))){
var state_33277__$1 = state_33277;
var statearr_33350_34949 = state_33277__$1;
(statearr_33350_34949[(2)] = null);

(statearr_33350_34949[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (10))){
var inst_33157 = (state_33277[(15)]);
var inst_33159 = (state_33277[(17)]);
var inst_33167 = cljs.core._nth(inst_33157,inst_33159);
var inst_33168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33167,(0),null);
var inst_33169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33167,(1),null);
var state_33277__$1 = (function (){var statearr_33351 = state_33277;
(statearr_33351[(24)] = inst_33168);

return statearr_33351;
})();
if(cljs.core.truth_(inst_33169)){
var statearr_33352_34950 = state_33277__$1;
(statearr_33352_34950[(1)] = (13));

} else {
var statearr_33353_34951 = state_33277__$1;
(statearr_33353_34951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (18))){
var inst_33204 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33354_34952 = state_33277__$1;
(statearr_33354_34952[(2)] = inst_33204);

(statearr_33354_34952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (42))){
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33277__$1,(45),dchan);
} else {
if((state_val_33278 === (37))){
var inst_33237 = (state_33277[(23)]);
var inst_33246 = (state_33277[(22)]);
var inst_33147 = (state_33277[(12)]);
var inst_33246__$1 = cljs.core.first(inst_33237);
var inst_33247 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33246__$1,inst_33147,done);
var state_33277__$1 = (function (){var statearr_33355 = state_33277;
(statearr_33355[(22)] = inst_33246__$1);

return statearr_33355;
})();
if(cljs.core.truth_(inst_33247)){
var statearr_33356_34953 = state_33277__$1;
(statearr_33356_34953[(1)] = (39));

} else {
var statearr_33357_34954 = state_33277__$1;
(statearr_33357_34954[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (8))){
var inst_33159 = (state_33277[(17)]);
var inst_33158 = (state_33277[(16)]);
var inst_33161 = (inst_33159 < inst_33158);
var inst_33162 = inst_33161;
var state_33277__$1 = state_33277;
if(cljs.core.truth_(inst_33162)){
var statearr_33358_34955 = state_33277__$1;
(statearr_33358_34955[(1)] = (10));

} else {
var statearr_33359_34957 = state_33277__$1;
(statearr_33359_34957[(1)] = (11));

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
var statearr_33360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33360[(0)] = cljs$core$async$mult_$_state_machine__32396__auto__);

(statearr_33360[(1)] = (1));

return statearr_33360;
});
var cljs$core$async$mult_$_state_machine__32396__auto____1 = (function (state_33277){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33277);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33361){var ex__32399__auto__ = e33361;
var statearr_33362_34961 = state_33277;
(statearr_33362_34961[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33277[(4)]))){
var statearr_33363_34962 = state_33277;
(statearr_33363_34962[(1)] = cljs.core.first((state_33277[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34963 = state_33277;
state_33277 = G__34963;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32396__auto__ = function(state_33277){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32396__auto____1.call(this,state_33277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32396__auto____0;
cljs$core$async$mult_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32396__auto____1;
return cljs$core$async$mult_$_state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_33365 = f__32467__auto__();
(statearr_33365[(6)] = c__32466__auto___34890);

return statearr_33365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
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
var G__33367 = arguments.length;
switch (G__33367) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34968 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34968(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34969 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34969(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34972 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34972(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34973 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34973(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34974 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34974(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34976 = arguments.length;
var i__5750__auto___34977 = (0);
while(true){
if((i__5750__auto___34977 < len__5749__auto___34976)){
args__5755__auto__.push((arguments[i__5750__auto___34977]));

var G__34978 = (i__5750__auto___34977 + (1));
i__5750__auto___34977 = G__34978;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33376){
var map__33377 = p__33376;
var map__33377__$1 = cljs.core.__destructure_map(map__33377);
var opts = map__33377__$1;
var statearr_33378_34979 = state;
(statearr_33378_34979[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33379_34980 = state;
(statearr_33379_34980[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_33380_34981 = state;
(statearr_33380_34981[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33372){
var G__33373 = cljs.core.first(seq33372);
var seq33372__$1 = cljs.core.next(seq33372);
var G__33374 = cljs.core.first(seq33372__$1);
var seq33372__$2 = cljs.core.next(seq33372__$1);
var G__33375 = cljs.core.first(seq33372__$2);
var seq33372__$3 = cljs.core.next(seq33372__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33373,G__33374,G__33375,seq33372__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33381 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33382){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33382 = meta33382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33383,meta33382__$1){
var self__ = this;
var _33383__$1 = this;
return (new cljs.core.async.t_cljs$core$async33381(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33382__$1));
}));

(cljs.core.async.t_cljs$core$async33381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33383){
var self__ = this;
var _33383__$1 = this;
return self__.meta33382;
}));

(cljs.core.async.t_cljs$core$async33381.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33381.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33381.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33381.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33381.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33381.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33381.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33382","meta33382",382247091,null)], null);
}));

(cljs.core.async.t_cljs$core$async33381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33381");

(cljs.core.async.t_cljs$core$async33381.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33381.
 */
cljs.core.async.__GT_t_cljs$core$async33381 = (function cljs$core$async$__GT_t_cljs$core$async33381(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33382){
return (new cljs.core.async.t_cljs$core$async33381(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33382));
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
var m = (new cljs.core.async.t_cljs$core$async33381(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32466__auto___34983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_33467){
var state_val_33468 = (state_33467[(1)]);
if((state_val_33468 === (7))){
var inst_33425 = (state_33467[(2)]);
var state_33467__$1 = state_33467;
if(cljs.core.truth_(inst_33425)){
var statearr_33473_34984 = state_33467__$1;
(statearr_33473_34984[(1)] = (8));

} else {
var statearr_33474_34985 = state_33467__$1;
(statearr_33474_34985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (20))){
var inst_33416 = (state_33467[(7)]);
var state_33467__$1 = state_33467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33467__$1,(23),out,inst_33416);
} else {
if((state_val_33468 === (1))){
var inst_33395 = calc_state();
var inst_33396 = cljs.core.__destructure_map(inst_33395);
var inst_33397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33396,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33396,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33396,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33400 = inst_33395;
var state_33467__$1 = (function (){var statearr_33475 = state_33467;
(statearr_33475[(8)] = inst_33397);

(statearr_33475[(9)] = inst_33398);

(statearr_33475[(10)] = inst_33399);

(statearr_33475[(11)] = inst_33400);

return statearr_33475;
})();
var statearr_33477_34986 = state_33467__$1;
(statearr_33477_34986[(2)] = null);

(statearr_33477_34986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (24))){
var inst_33405 = (state_33467[(12)]);
var inst_33400 = inst_33405;
var state_33467__$1 = (function (){var statearr_33481 = state_33467;
(statearr_33481[(11)] = inst_33400);

return statearr_33481;
})();
var statearr_33482_34987 = state_33467__$1;
(statearr_33482_34987[(2)] = null);

(statearr_33482_34987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (4))){
var inst_33416 = (state_33467[(7)]);
var inst_33420 = (state_33467[(13)]);
var inst_33414 = (state_33467[(2)]);
var inst_33416__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33414,(0),null);
var inst_33417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33414,(1),null);
var inst_33420__$1 = (inst_33416__$1 == null);
var state_33467__$1 = (function (){var statearr_33486 = state_33467;
(statearr_33486[(7)] = inst_33416__$1);

(statearr_33486[(14)] = inst_33417);

(statearr_33486[(13)] = inst_33420__$1);

return statearr_33486;
})();
if(cljs.core.truth_(inst_33420__$1)){
var statearr_33487_34988 = state_33467__$1;
(statearr_33487_34988[(1)] = (5));

} else {
var statearr_33488_34989 = state_33467__$1;
(statearr_33488_34989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (15))){
var inst_33406 = (state_33467[(15)]);
var inst_33441 = (state_33467[(16)]);
var inst_33441__$1 = cljs.core.empty_QMARK_(inst_33406);
var state_33467__$1 = (function (){var statearr_33489 = state_33467;
(statearr_33489[(16)] = inst_33441__$1);

return statearr_33489;
})();
if(inst_33441__$1){
var statearr_33490_34994 = state_33467__$1;
(statearr_33490_34994[(1)] = (17));

} else {
var statearr_33491_34995 = state_33467__$1;
(statearr_33491_34995[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (21))){
var inst_33405 = (state_33467[(12)]);
var inst_33400 = inst_33405;
var state_33467__$1 = (function (){var statearr_33493 = state_33467;
(statearr_33493[(11)] = inst_33400);

return statearr_33493;
})();
var statearr_33495_34996 = state_33467__$1;
(statearr_33495_34996[(2)] = null);

(statearr_33495_34996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (13))){
var inst_33433 = (state_33467[(2)]);
var inst_33434 = calc_state();
var inst_33400 = inst_33434;
var state_33467__$1 = (function (){var statearr_33499 = state_33467;
(statearr_33499[(17)] = inst_33433);

(statearr_33499[(11)] = inst_33400);

return statearr_33499;
})();
var statearr_33500_34997 = state_33467__$1;
(statearr_33500_34997[(2)] = null);

(statearr_33500_34997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (22))){
var inst_33461 = (state_33467[(2)]);
var state_33467__$1 = state_33467;
var statearr_33501_35001 = state_33467__$1;
(statearr_33501_35001[(2)] = inst_33461);

(statearr_33501_35001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (6))){
var inst_33417 = (state_33467[(14)]);
var inst_33423 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33417,change);
var state_33467__$1 = state_33467;
var statearr_33502_35002 = state_33467__$1;
(statearr_33502_35002[(2)] = inst_33423);

(statearr_33502_35002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (25))){
var state_33467__$1 = state_33467;
var statearr_33507_35003 = state_33467__$1;
(statearr_33507_35003[(2)] = null);

(statearr_33507_35003[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (17))){
var inst_33407 = (state_33467[(18)]);
var inst_33417 = (state_33467[(14)]);
var inst_33443 = (inst_33407.cljs$core$IFn$_invoke$arity$1 ? inst_33407.cljs$core$IFn$_invoke$arity$1(inst_33417) : inst_33407.call(null,inst_33417));
var inst_33444 = cljs.core.not(inst_33443);
var state_33467__$1 = state_33467;
var statearr_33508_35007 = state_33467__$1;
(statearr_33508_35007[(2)] = inst_33444);

(statearr_33508_35007[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (3))){
var inst_33465 = (state_33467[(2)]);
var state_33467__$1 = state_33467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33467__$1,inst_33465);
} else {
if((state_val_33468 === (12))){
var state_33467__$1 = state_33467;
var statearr_33510_35008 = state_33467__$1;
(statearr_33510_35008[(2)] = null);

(statearr_33510_35008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (2))){
var inst_33400 = (state_33467[(11)]);
var inst_33405 = (state_33467[(12)]);
var inst_33405__$1 = cljs.core.__destructure_map(inst_33400);
var inst_33406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33405__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33405__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33405__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33467__$1 = (function (){var statearr_33511 = state_33467;
(statearr_33511[(12)] = inst_33405__$1);

(statearr_33511[(15)] = inst_33406);

(statearr_33511[(18)] = inst_33407);

return statearr_33511;
})();
return cljs.core.async.ioc_alts_BANG_(state_33467__$1,(4),inst_33408);
} else {
if((state_val_33468 === (23))){
var inst_33452 = (state_33467[(2)]);
var state_33467__$1 = state_33467;
if(cljs.core.truth_(inst_33452)){
var statearr_33512_35013 = state_33467__$1;
(statearr_33512_35013[(1)] = (24));

} else {
var statearr_33513_35014 = state_33467__$1;
(statearr_33513_35014[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (19))){
var inst_33447 = (state_33467[(2)]);
var state_33467__$1 = state_33467;
var statearr_33514_35015 = state_33467__$1;
(statearr_33514_35015[(2)] = inst_33447);

(statearr_33514_35015[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (11))){
var inst_33417 = (state_33467[(14)]);
var inst_33430 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33417);
var state_33467__$1 = state_33467;
var statearr_33515_35016 = state_33467__$1;
(statearr_33515_35016[(2)] = inst_33430);

(statearr_33515_35016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (9))){
var inst_33406 = (state_33467[(15)]);
var inst_33417 = (state_33467[(14)]);
var inst_33438 = (state_33467[(19)]);
var inst_33438__$1 = (inst_33406.cljs$core$IFn$_invoke$arity$1 ? inst_33406.cljs$core$IFn$_invoke$arity$1(inst_33417) : inst_33406.call(null,inst_33417));
var state_33467__$1 = (function (){var statearr_33519 = state_33467;
(statearr_33519[(19)] = inst_33438__$1);

return statearr_33519;
})();
if(cljs.core.truth_(inst_33438__$1)){
var statearr_33520_35020 = state_33467__$1;
(statearr_33520_35020[(1)] = (14));

} else {
var statearr_33521_35021 = state_33467__$1;
(statearr_33521_35021[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (5))){
var inst_33420 = (state_33467[(13)]);
var state_33467__$1 = state_33467;
var statearr_33522_35022 = state_33467__$1;
(statearr_33522_35022[(2)] = inst_33420);

(statearr_33522_35022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (14))){
var inst_33438 = (state_33467[(19)]);
var state_33467__$1 = state_33467;
var statearr_33523_35026 = state_33467__$1;
(statearr_33523_35026[(2)] = inst_33438);

(statearr_33523_35026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (26))){
var inst_33457 = (state_33467[(2)]);
var state_33467__$1 = state_33467;
var statearr_33524_35027 = state_33467__$1;
(statearr_33524_35027[(2)] = inst_33457);

(statearr_33524_35027[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (16))){
var inst_33449 = (state_33467[(2)]);
var state_33467__$1 = state_33467;
if(cljs.core.truth_(inst_33449)){
var statearr_33525_35028 = state_33467__$1;
(statearr_33525_35028[(1)] = (20));

} else {
var statearr_33526_35029 = state_33467__$1;
(statearr_33526_35029[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (10))){
var inst_33463 = (state_33467[(2)]);
var state_33467__$1 = state_33467;
var statearr_33527_35030 = state_33467__$1;
(statearr_33527_35030[(2)] = inst_33463);

(statearr_33527_35030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (18))){
var inst_33441 = (state_33467[(16)]);
var state_33467__$1 = state_33467;
var statearr_33528_35031 = state_33467__$1;
(statearr_33528_35031[(2)] = inst_33441);

(statearr_33528_35031[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (8))){
var inst_33416 = (state_33467[(7)]);
var inst_33428 = (inst_33416 == null);
var state_33467__$1 = state_33467;
if(cljs.core.truth_(inst_33428)){
var statearr_33529_35032 = state_33467__$1;
(statearr_33529_35032[(1)] = (11));

} else {
var statearr_33530_35033 = state_33467__$1;
(statearr_33530_35033[(1)] = (12));

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
var statearr_33531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33531[(0)] = cljs$core$async$mix_$_state_machine__32396__auto__);

(statearr_33531[(1)] = (1));

return statearr_33531;
});
var cljs$core$async$mix_$_state_machine__32396__auto____1 = (function (state_33467){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33467);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33532){var ex__32399__auto__ = e33532;
var statearr_33533_35034 = state_33467;
(statearr_33533_35034[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33467[(4)]))){
var statearr_33534_35035 = state_33467;
(statearr_33534_35035[(1)] = cljs.core.first((state_33467[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35036 = state_33467;
state_33467 = G__35036;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32396__auto__ = function(state_33467){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32396__auto____1.call(this,state_33467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32396__auto____0;
cljs$core$async$mix_$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32396__auto____1;
return cljs$core$async$mix_$_state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_33539 = f__32467__auto__();
(statearr_33539[(6)] = c__32466__auto___34983);

return statearr_33539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35037 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35037(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35038 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35038(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35039 = (function() {
var G__35040 = null;
var G__35040__1 = (function (p){
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
var G__35040__2 = (function (p,v){
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
G__35040 = function(p,v){
switch(arguments.length){
case 1:
return G__35040__1.call(this,p);
case 2:
return G__35040__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35040.cljs$core$IFn$_invoke$arity$1 = G__35040__1;
G__35040.cljs$core$IFn$_invoke$arity$2 = G__35040__2;
return G__35040;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33561 = arguments.length;
switch (G__33561) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35039(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35039(p,v);
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
cljs.core.async.t_cljs$core$async33575 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33576){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33576 = meta33576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33577,meta33576__$1){
var self__ = this;
var _33577__$1 = this;
return (new cljs.core.async.t_cljs$core$async33575(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33576__$1));
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33577){
var self__ = this;
var _33577__$1 = this;
return self__.meta33576;
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33576","meta33576",848917111,null)], null);
}));

(cljs.core.async.t_cljs$core$async33575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33575");

(cljs.core.async.t_cljs$core$async33575.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33575.
 */
cljs.core.async.__GT_t_cljs$core$async33575 = (function cljs$core$async$__GT_t_cljs$core$async33575(ch,topic_fn,buf_fn,mults,ensure_mult,meta33576){
return (new cljs.core.async.t_cljs$core$async33575(ch,topic_fn,buf_fn,mults,ensure_mult,meta33576));
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
var G__33569 = arguments.length;
switch (G__33569) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33567_SHARP_){
if(cljs.core.truth_((p1__33567_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33567_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33567_SHARP_.call(null,topic)))){
return p1__33567_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33567_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33575(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32466__auto___35047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_33661){
var state_val_33662 = (state_33661[(1)]);
if((state_val_33662 === (7))){
var inst_33657 = (state_33661[(2)]);
var state_33661__$1 = state_33661;
var statearr_33665_35048 = state_33661__$1;
(statearr_33665_35048[(2)] = inst_33657);

(statearr_33665_35048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (20))){
var state_33661__$1 = state_33661;
var statearr_33666_35051 = state_33661__$1;
(statearr_33666_35051[(2)] = null);

(statearr_33666_35051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (1))){
var state_33661__$1 = state_33661;
var statearr_33668_35052 = state_33661__$1;
(statearr_33668_35052[(2)] = null);

(statearr_33668_35052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (24))){
var inst_33640 = (state_33661[(7)]);
var inst_33649 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33640);
var state_33661__$1 = state_33661;
var statearr_33670_35053 = state_33661__$1;
(statearr_33670_35053[(2)] = inst_33649);

(statearr_33670_35053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (4))){
var inst_33589 = (state_33661[(8)]);
var inst_33589__$1 = (state_33661[(2)]);
var inst_33590 = (inst_33589__$1 == null);
var state_33661__$1 = (function (){var statearr_33671 = state_33661;
(statearr_33671[(8)] = inst_33589__$1);

return statearr_33671;
})();
if(cljs.core.truth_(inst_33590)){
var statearr_33672_35055 = state_33661__$1;
(statearr_33672_35055[(1)] = (5));

} else {
var statearr_33673_35056 = state_33661__$1;
(statearr_33673_35056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (15))){
var inst_33634 = (state_33661[(2)]);
var state_33661__$1 = state_33661;
var statearr_33676_35057 = state_33661__$1;
(statearr_33676_35057[(2)] = inst_33634);

(statearr_33676_35057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (21))){
var inst_33654 = (state_33661[(2)]);
var state_33661__$1 = (function (){var statearr_33677 = state_33661;
(statearr_33677[(9)] = inst_33654);

return statearr_33677;
})();
var statearr_33678_35058 = state_33661__$1;
(statearr_33678_35058[(2)] = null);

(statearr_33678_35058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (13))){
var inst_33614 = (state_33661[(10)]);
var inst_33616 = cljs.core.chunked_seq_QMARK_(inst_33614);
var state_33661__$1 = state_33661;
if(inst_33616){
var statearr_33679_35059 = state_33661__$1;
(statearr_33679_35059[(1)] = (16));

} else {
var statearr_33680_35060 = state_33661__$1;
(statearr_33680_35060[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (22))){
var inst_33646 = (state_33661[(2)]);
var state_33661__$1 = state_33661;
if(cljs.core.truth_(inst_33646)){
var statearr_33682_35061 = state_33661__$1;
(statearr_33682_35061[(1)] = (23));

} else {
var statearr_33686_35063 = state_33661__$1;
(statearr_33686_35063[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (6))){
var inst_33589 = (state_33661[(8)]);
var inst_33640 = (state_33661[(7)]);
var inst_33642 = (state_33661[(11)]);
var inst_33640__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33589) : topic_fn.call(null,inst_33589));
var inst_33641 = cljs.core.deref(mults);
var inst_33642__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33641,inst_33640__$1);
var state_33661__$1 = (function (){var statearr_33687 = state_33661;
(statearr_33687[(7)] = inst_33640__$1);

(statearr_33687[(11)] = inst_33642__$1);

return statearr_33687;
})();
if(cljs.core.truth_(inst_33642__$1)){
var statearr_33688_35064 = state_33661__$1;
(statearr_33688_35064[(1)] = (19));

} else {
var statearr_33689_35065 = state_33661__$1;
(statearr_33689_35065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (25))){
var inst_33651 = (state_33661[(2)]);
var state_33661__$1 = state_33661;
var statearr_33690_35066 = state_33661__$1;
(statearr_33690_35066[(2)] = inst_33651);

(statearr_33690_35066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (17))){
var inst_33614 = (state_33661[(10)]);
var inst_33624 = cljs.core.first(inst_33614);
var inst_33625 = cljs.core.async.muxch_STAR_(inst_33624);
var inst_33626 = cljs.core.async.close_BANG_(inst_33625);
var inst_33627 = cljs.core.next(inst_33614);
var inst_33599 = inst_33627;
var inst_33600 = null;
var inst_33601 = (0);
var inst_33602 = (0);
var state_33661__$1 = (function (){var statearr_33693 = state_33661;
(statearr_33693[(12)] = inst_33626);

(statearr_33693[(13)] = inst_33599);

(statearr_33693[(14)] = inst_33600);

(statearr_33693[(15)] = inst_33601);

(statearr_33693[(16)] = inst_33602);

return statearr_33693;
})();
var statearr_33694_35067 = state_33661__$1;
(statearr_33694_35067[(2)] = null);

(statearr_33694_35067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (3))){
var inst_33659 = (state_33661[(2)]);
var state_33661__$1 = state_33661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33661__$1,inst_33659);
} else {
if((state_val_33662 === (12))){
var inst_33636 = (state_33661[(2)]);
var state_33661__$1 = state_33661;
var statearr_33695_35068 = state_33661__$1;
(statearr_33695_35068[(2)] = inst_33636);

(statearr_33695_35068[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (2))){
var state_33661__$1 = state_33661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33661__$1,(4),ch);
} else {
if((state_val_33662 === (23))){
var state_33661__$1 = state_33661;
var statearr_33697_35069 = state_33661__$1;
(statearr_33697_35069[(2)] = null);

(statearr_33697_35069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (19))){
var inst_33642 = (state_33661[(11)]);
var inst_33589 = (state_33661[(8)]);
var inst_33644 = cljs.core.async.muxch_STAR_(inst_33642);
var state_33661__$1 = state_33661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33661__$1,(22),inst_33644,inst_33589);
} else {
if((state_val_33662 === (11))){
var inst_33599 = (state_33661[(13)]);
var inst_33614 = (state_33661[(10)]);
var inst_33614__$1 = cljs.core.seq(inst_33599);
var state_33661__$1 = (function (){var statearr_33698 = state_33661;
(statearr_33698[(10)] = inst_33614__$1);

return statearr_33698;
})();
if(inst_33614__$1){
var statearr_33699_35072 = state_33661__$1;
(statearr_33699_35072[(1)] = (13));

} else {
var statearr_33700_35073 = state_33661__$1;
(statearr_33700_35073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (9))){
var inst_33638 = (state_33661[(2)]);
var state_33661__$1 = state_33661;
var statearr_33701_35074 = state_33661__$1;
(statearr_33701_35074[(2)] = inst_33638);

(statearr_33701_35074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (5))){
var inst_33596 = cljs.core.deref(mults);
var inst_33597 = cljs.core.vals(inst_33596);
var inst_33598 = cljs.core.seq(inst_33597);
var inst_33599 = inst_33598;
var inst_33600 = null;
var inst_33601 = (0);
var inst_33602 = (0);
var state_33661__$1 = (function (){var statearr_33704 = state_33661;
(statearr_33704[(13)] = inst_33599);

(statearr_33704[(14)] = inst_33600);

(statearr_33704[(15)] = inst_33601);

(statearr_33704[(16)] = inst_33602);

return statearr_33704;
})();
var statearr_33705_35075 = state_33661__$1;
(statearr_33705_35075[(2)] = null);

(statearr_33705_35075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (14))){
var state_33661__$1 = state_33661;
var statearr_33709_35076 = state_33661__$1;
(statearr_33709_35076[(2)] = null);

(statearr_33709_35076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (16))){
var inst_33614 = (state_33661[(10)]);
var inst_33618 = cljs.core.chunk_first(inst_33614);
var inst_33619 = cljs.core.chunk_rest(inst_33614);
var inst_33620 = cljs.core.count(inst_33618);
var inst_33599 = inst_33619;
var inst_33600 = inst_33618;
var inst_33601 = inst_33620;
var inst_33602 = (0);
var state_33661__$1 = (function (){var statearr_33710 = state_33661;
(statearr_33710[(13)] = inst_33599);

(statearr_33710[(14)] = inst_33600);

(statearr_33710[(15)] = inst_33601);

(statearr_33710[(16)] = inst_33602);

return statearr_33710;
})();
var statearr_33711_35078 = state_33661__$1;
(statearr_33711_35078[(2)] = null);

(statearr_33711_35078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (10))){
var inst_33600 = (state_33661[(14)]);
var inst_33602 = (state_33661[(16)]);
var inst_33599 = (state_33661[(13)]);
var inst_33601 = (state_33661[(15)]);
var inst_33607 = cljs.core._nth(inst_33600,inst_33602);
var inst_33608 = cljs.core.async.muxch_STAR_(inst_33607);
var inst_33609 = cljs.core.async.close_BANG_(inst_33608);
var inst_33611 = (inst_33602 + (1));
var tmp33706 = inst_33601;
var tmp33707 = inst_33600;
var tmp33708 = inst_33599;
var inst_33599__$1 = tmp33708;
var inst_33600__$1 = tmp33707;
var inst_33601__$1 = tmp33706;
var inst_33602__$1 = inst_33611;
var state_33661__$1 = (function (){var statearr_33716 = state_33661;
(statearr_33716[(17)] = inst_33609);

(statearr_33716[(13)] = inst_33599__$1);

(statearr_33716[(14)] = inst_33600__$1);

(statearr_33716[(15)] = inst_33601__$1);

(statearr_33716[(16)] = inst_33602__$1);

return statearr_33716;
})();
var statearr_33718_35079 = state_33661__$1;
(statearr_33718_35079[(2)] = null);

(statearr_33718_35079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (18))){
var inst_33631 = (state_33661[(2)]);
var state_33661__$1 = state_33661;
var statearr_33720_35080 = state_33661__$1;
(statearr_33720_35080[(2)] = inst_33631);

(statearr_33720_35080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33662 === (8))){
var inst_33602 = (state_33661[(16)]);
var inst_33601 = (state_33661[(15)]);
var inst_33604 = (inst_33602 < inst_33601);
var inst_33605 = inst_33604;
var state_33661__$1 = state_33661;
if(cljs.core.truth_(inst_33605)){
var statearr_33721_35081 = state_33661__$1;
(statearr_33721_35081[(1)] = (10));

} else {
var statearr_33722_35082 = state_33661__$1;
(statearr_33722_35082[(1)] = (11));

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
var statearr_33724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33724[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_33724[(1)] = (1));

return statearr_33724;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33661){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33661);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33727){var ex__32399__auto__ = e33727;
var statearr_33729_35083 = state_33661;
(statearr_33729_35083[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33661[(4)]))){
var statearr_33730_35084 = state_33661;
(statearr_33730_35084[(1)] = cljs.core.first((state_33661[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35086 = state_33661;
state_33661 = G__35086;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_33731 = f__32467__auto__();
(statearr_33731[(6)] = c__32466__auto___35047);

return statearr_33731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
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
var G__33737 = arguments.length;
switch (G__33737) {
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
var G__33747 = arguments.length;
switch (G__33747) {
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
var G__33756 = arguments.length;
switch (G__33756) {
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
var c__32466__auto___35091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_33828){
var state_val_33829 = (state_33828[(1)]);
if((state_val_33829 === (7))){
var state_33828__$1 = state_33828;
var statearr_33834_35092 = state_33828__$1;
(statearr_33834_35092[(2)] = null);

(statearr_33834_35092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (1))){
var state_33828__$1 = state_33828;
var statearr_33835_35094 = state_33828__$1;
(statearr_33835_35094[(2)] = null);

(statearr_33835_35094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (4))){
var inst_33780 = (state_33828[(7)]);
var inst_33779 = (state_33828[(8)]);
var inst_33783 = (inst_33780 < inst_33779);
var state_33828__$1 = state_33828;
if(cljs.core.truth_(inst_33783)){
var statearr_33836_35096 = state_33828__$1;
(statearr_33836_35096[(1)] = (6));

} else {
var statearr_33837_35097 = state_33828__$1;
(statearr_33837_35097[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (15))){
var inst_33810 = (state_33828[(9)]);
var inst_33817 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33810);
var state_33828__$1 = state_33828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33828__$1,(17),out,inst_33817);
} else {
if((state_val_33829 === (13))){
var inst_33810 = (state_33828[(9)]);
var inst_33810__$1 = (state_33828[(2)]);
var inst_33812 = cljs.core.some(cljs.core.nil_QMARK_,inst_33810__$1);
var state_33828__$1 = (function (){var statearr_33841 = state_33828;
(statearr_33841[(9)] = inst_33810__$1);

return statearr_33841;
})();
if(cljs.core.truth_(inst_33812)){
var statearr_33842_35100 = state_33828__$1;
(statearr_33842_35100[(1)] = (14));

} else {
var statearr_33843_35101 = state_33828__$1;
(statearr_33843_35101[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (6))){
var state_33828__$1 = state_33828;
var statearr_33845_35102 = state_33828__$1;
(statearr_33845_35102[(2)] = null);

(statearr_33845_35102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (17))){
var inst_33819 = (state_33828[(2)]);
var state_33828__$1 = (function (){var statearr_33853 = state_33828;
(statearr_33853[(10)] = inst_33819);

return statearr_33853;
})();
var statearr_33854_35104 = state_33828__$1;
(statearr_33854_35104[(2)] = null);

(statearr_33854_35104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (3))){
var inst_33825 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33828__$1,inst_33825);
} else {
if((state_val_33829 === (12))){
var _ = (function (){var statearr_33857 = state_33828;
(statearr_33857[(4)] = cljs.core.rest((state_33828[(4)])));

return statearr_33857;
})();
var state_33828__$1 = state_33828;
var ex33849 = (state_33828__$1[(2)]);
var statearr_33861_35107 = state_33828__$1;
(statearr_33861_35107[(5)] = ex33849);


if((ex33849 instanceof Object)){
var statearr_33862_35108 = state_33828__$1;
(statearr_33862_35108[(1)] = (11));

(statearr_33862_35108[(5)] = null);

} else {
throw ex33849;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (2))){
var inst_33778 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33779 = cnt;
var inst_33780 = (0);
var state_33828__$1 = (function (){var statearr_33869 = state_33828;
(statearr_33869[(11)] = inst_33778);

(statearr_33869[(8)] = inst_33779);

(statearr_33869[(7)] = inst_33780);

return statearr_33869;
})();
var statearr_33871_35111 = state_33828__$1;
(statearr_33871_35111[(2)] = null);

(statearr_33871_35111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (11))){
var inst_33787 = (state_33828[(2)]);
var inst_33788 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33828__$1 = (function (){var statearr_33873 = state_33828;
(statearr_33873[(12)] = inst_33787);

return statearr_33873;
})();
var statearr_33874_35112 = state_33828__$1;
(statearr_33874_35112[(2)] = inst_33788);

(statearr_33874_35112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (9))){
var inst_33780 = (state_33828[(7)]);
var _ = (function (){var statearr_33875 = state_33828;
(statearr_33875[(4)] = cljs.core.cons((12),(state_33828[(4)])));

return statearr_33875;
})();
var inst_33796 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33780) : chs__$1.call(null,inst_33780));
var inst_33797 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33780) : done.call(null,inst_33780));
var inst_33798 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33796,inst_33797);
var ___$1 = (function (){var statearr_33880 = state_33828;
(statearr_33880[(4)] = cljs.core.rest((state_33828[(4)])));

return statearr_33880;
})();
var state_33828__$1 = state_33828;
var statearr_33881_35115 = state_33828__$1;
(statearr_33881_35115[(2)] = inst_33798);

(statearr_33881_35115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (5))){
var inst_33808 = (state_33828[(2)]);
var state_33828__$1 = (function (){var statearr_33882 = state_33828;
(statearr_33882[(13)] = inst_33808);

return statearr_33882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33828__$1,(13),dchan);
} else {
if((state_val_33829 === (14))){
var inst_33814 = cljs.core.async.close_BANG_(out);
var state_33828__$1 = state_33828;
var statearr_33885_35116 = state_33828__$1;
(statearr_33885_35116[(2)] = inst_33814);

(statearr_33885_35116[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (16))){
var inst_33822 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
var statearr_33888_35117 = state_33828__$1;
(statearr_33888_35117[(2)] = inst_33822);

(statearr_33888_35117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (10))){
var inst_33780 = (state_33828[(7)]);
var inst_33801 = (state_33828[(2)]);
var inst_33802 = (inst_33780 + (1));
var inst_33780__$1 = inst_33802;
var state_33828__$1 = (function (){var statearr_33889 = state_33828;
(statearr_33889[(14)] = inst_33801);

(statearr_33889[(7)] = inst_33780__$1);

return statearr_33889;
})();
var statearr_33890_35118 = state_33828__$1;
(statearr_33890_35118[(2)] = null);

(statearr_33890_35118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33829 === (8))){
var inst_33806 = (state_33828[(2)]);
var state_33828__$1 = state_33828;
var statearr_33892_35120 = state_33828__$1;
(statearr_33892_35120[(2)] = inst_33806);

(statearr_33892_35120[(1)] = (5));


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
var statearr_33893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33893[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_33893[(1)] = (1));

return statearr_33893;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33828){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33828);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33895){var ex__32399__auto__ = e33895;
var statearr_33896_35124 = state_33828;
(statearr_33896_35124[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33828[(4)]))){
var statearr_33897_35125 = state_33828;
(statearr_33897_35125[(1)] = cljs.core.first((state_33828[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35126 = state_33828;
state_33828 = G__35126;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_33899 = f__32467__auto__();
(statearr_33899[(6)] = c__32466__auto___35091);

return statearr_33899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
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
var G__33903 = arguments.length;
switch (G__33903) {
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
var c__32466__auto___35129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_33943){
var state_val_33944 = (state_33943[(1)]);
if((state_val_33944 === (7))){
var inst_33919 = (state_33943[(7)]);
var inst_33920 = (state_33943[(8)]);
var inst_33919__$1 = (state_33943[(2)]);
var inst_33920__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33919__$1,(0),null);
var inst_33921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33919__$1,(1),null);
var inst_33925 = (inst_33920__$1 == null);
var state_33943__$1 = (function (){var statearr_33956 = state_33943;
(statearr_33956[(7)] = inst_33919__$1);

(statearr_33956[(8)] = inst_33920__$1);

(statearr_33956[(9)] = inst_33921);

return statearr_33956;
})();
if(cljs.core.truth_(inst_33925)){
var statearr_33957_35131 = state_33943__$1;
(statearr_33957_35131[(1)] = (8));

} else {
var statearr_33958_35132 = state_33943__$1;
(statearr_33958_35132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (1))){
var inst_33906 = cljs.core.vec(chs);
var inst_33907 = inst_33906;
var state_33943__$1 = (function (){var statearr_33959 = state_33943;
(statearr_33959[(10)] = inst_33907);

return statearr_33959;
})();
var statearr_33962_35133 = state_33943__$1;
(statearr_33962_35133[(2)] = null);

(statearr_33962_35133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (4))){
var inst_33907 = (state_33943[(10)]);
var state_33943__$1 = state_33943;
return cljs.core.async.ioc_alts_BANG_(state_33943__$1,(7),inst_33907);
} else {
if((state_val_33944 === (6))){
var inst_33939 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
var statearr_33963_35134 = state_33943__$1;
(statearr_33963_35134[(2)] = inst_33939);

(statearr_33963_35134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (3))){
var inst_33941 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33943__$1,inst_33941);
} else {
if((state_val_33944 === (2))){
var inst_33907 = (state_33943[(10)]);
var inst_33910 = cljs.core.count(inst_33907);
var inst_33911 = (inst_33910 > (0));
var state_33943__$1 = state_33943;
if(cljs.core.truth_(inst_33911)){
var statearr_33969_35135 = state_33943__$1;
(statearr_33969_35135[(1)] = (4));

} else {
var statearr_33971_35136 = state_33943__$1;
(statearr_33971_35136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (11))){
var inst_33907 = (state_33943[(10)]);
var inst_33932 = (state_33943[(2)]);
var tmp33965 = inst_33907;
var inst_33907__$1 = tmp33965;
var state_33943__$1 = (function (){var statearr_33974 = state_33943;
(statearr_33974[(11)] = inst_33932);

(statearr_33974[(10)] = inst_33907__$1);

return statearr_33974;
})();
var statearr_33975_35137 = state_33943__$1;
(statearr_33975_35137[(2)] = null);

(statearr_33975_35137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (9))){
var inst_33920 = (state_33943[(8)]);
var state_33943__$1 = state_33943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33943__$1,(11),out,inst_33920);
} else {
if((state_val_33944 === (5))){
var inst_33937 = cljs.core.async.close_BANG_(out);
var state_33943__$1 = state_33943;
var statearr_33977_35138 = state_33943__$1;
(statearr_33977_35138[(2)] = inst_33937);

(statearr_33977_35138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (10))){
var inst_33935 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
var statearr_33978_35139 = state_33943__$1;
(statearr_33978_35139[(2)] = inst_33935);

(statearr_33978_35139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33944 === (8))){
var inst_33907 = (state_33943[(10)]);
var inst_33919 = (state_33943[(7)]);
var inst_33920 = (state_33943[(8)]);
var inst_33921 = (state_33943[(9)]);
var inst_33927 = (function (){var cs = inst_33907;
var vec__33914 = inst_33919;
var v = inst_33920;
var c = inst_33921;
return (function (p1__33901_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33901_SHARP_);
});
})();
var inst_33928 = cljs.core.filterv(inst_33927,inst_33907);
var inst_33907__$1 = inst_33928;
var state_33943__$1 = (function (){var statearr_33981 = state_33943;
(statearr_33981[(10)] = inst_33907__$1);

return statearr_33981;
})();
var statearr_33982_35142 = state_33943__$1;
(statearr_33982_35142[(2)] = null);

(statearr_33982_35142[(1)] = (2));


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
var statearr_33985 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33985[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_33985[(1)] = (1));

return statearr_33985;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_33943){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_33943);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e33986){var ex__32399__auto__ = e33986;
var statearr_33988_35143 = state_33943;
(statearr_33988_35143[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_33943[(4)]))){
var statearr_33990_35144 = state_33943;
(statearr_33990_35144[(1)] = cljs.core.first((state_33943[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35145 = state_33943;
state_33943 = G__35145;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_33943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_33943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_33991 = f__32467__auto__();
(statearr_33991[(6)] = c__32466__auto___35129);

return statearr_33991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
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
var G__33998 = arguments.length;
switch (G__33998) {
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
var c__32466__auto___35147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_34029){
var state_val_34030 = (state_34029[(1)]);
if((state_val_34030 === (7))){
var inst_34009 = (state_34029[(7)]);
var inst_34009__$1 = (state_34029[(2)]);
var inst_34010 = (inst_34009__$1 == null);
var inst_34011 = cljs.core.not(inst_34010);
var state_34029__$1 = (function (){var statearr_34033 = state_34029;
(statearr_34033[(7)] = inst_34009__$1);

return statearr_34033;
})();
if(inst_34011){
var statearr_34034_35149 = state_34029__$1;
(statearr_34034_35149[(1)] = (8));

} else {
var statearr_34035_35150 = state_34029__$1;
(statearr_34035_35150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (1))){
var inst_34000 = (0);
var state_34029__$1 = (function (){var statearr_34036 = state_34029;
(statearr_34036[(8)] = inst_34000);

return statearr_34036;
})();
var statearr_34037_35151 = state_34029__$1;
(statearr_34037_35151[(2)] = null);

(statearr_34037_35151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (4))){
var state_34029__$1 = state_34029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34029__$1,(7),ch);
} else {
if((state_val_34030 === (6))){
var inst_34024 = (state_34029[(2)]);
var state_34029__$1 = state_34029;
var statearr_34038_35154 = state_34029__$1;
(statearr_34038_35154[(2)] = inst_34024);

(statearr_34038_35154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (3))){
var inst_34026 = (state_34029[(2)]);
var inst_34027 = cljs.core.async.close_BANG_(out);
var state_34029__$1 = (function (){var statearr_34039 = state_34029;
(statearr_34039[(9)] = inst_34026);

return statearr_34039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34029__$1,inst_34027);
} else {
if((state_val_34030 === (2))){
var inst_34000 = (state_34029[(8)]);
var inst_34006 = (inst_34000 < n);
var state_34029__$1 = state_34029;
if(cljs.core.truth_(inst_34006)){
var statearr_34040_35157 = state_34029__$1;
(statearr_34040_35157[(1)] = (4));

} else {
var statearr_34041_35158 = state_34029__$1;
(statearr_34041_35158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (11))){
var inst_34000 = (state_34029[(8)]);
var inst_34014 = (state_34029[(2)]);
var inst_34015 = (inst_34000 + (1));
var inst_34000__$1 = inst_34015;
var state_34029__$1 = (function (){var statearr_34046 = state_34029;
(statearr_34046[(10)] = inst_34014);

(statearr_34046[(8)] = inst_34000__$1);

return statearr_34046;
})();
var statearr_34052_35159 = state_34029__$1;
(statearr_34052_35159[(2)] = null);

(statearr_34052_35159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (9))){
var state_34029__$1 = state_34029;
var statearr_34053_35161 = state_34029__$1;
(statearr_34053_35161[(2)] = null);

(statearr_34053_35161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (5))){
var state_34029__$1 = state_34029;
var statearr_34054_35162 = state_34029__$1;
(statearr_34054_35162[(2)] = null);

(statearr_34054_35162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (10))){
var inst_34021 = (state_34029[(2)]);
var state_34029__$1 = state_34029;
var statearr_34055_35165 = state_34029__$1;
(statearr_34055_35165[(2)] = inst_34021);

(statearr_34055_35165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34030 === (8))){
var inst_34009 = (state_34029[(7)]);
var state_34029__$1 = state_34029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34029__$1,(11),out,inst_34009);
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
var statearr_34058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34058[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34058[(1)] = (1));

return statearr_34058;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34029){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34029);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34065){var ex__32399__auto__ = e34065;
var statearr_34066_35168 = state_34029;
(statearr_34066_35168[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34029[(4)]))){
var statearr_34067_35169 = state_34029;
(statearr_34067_35169[(1)] = cljs.core.first((state_34029[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35170 = state_34029;
state_34029 = G__35170;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_34069 = f__32467__auto__();
(statearr_34069[(6)] = c__32466__auto___35147);

return statearr_34069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
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
cljs.core.async.t_cljs$core$async34080 = (function (f,ch,meta34072,_,fn1,meta34081){
this.f = f;
this.ch = ch;
this.meta34072 = meta34072;
this._ = _;
this.fn1 = fn1;
this.meta34081 = meta34081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34082,meta34081__$1){
var self__ = this;
var _34082__$1 = this;
return (new cljs.core.async.t_cljs$core$async34080(self__.f,self__.ch,self__.meta34072,self__._,self__.fn1,meta34081__$1));
}));

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34082){
var self__ = this;
var _34082__$1 = this;
return self__.meta34081;
}));

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34070_SHARP_){
var G__34087 = (((p1__34070_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34070_SHARP_) : self__.f.call(null,p1__34070_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34087) : f1.call(null,G__34087));
});
}));

(cljs.core.async.t_cljs$core$async34080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34072","meta34072",982248307,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34071","cljs.core.async/t_cljs$core$async34071",1970180065,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34081","meta34081",-2084072717,null)], null);
}));

(cljs.core.async.t_cljs$core$async34080.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34080");

(cljs.core.async.t_cljs$core$async34080.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34080");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34080.
 */
cljs.core.async.__GT_t_cljs$core$async34080 = (function cljs$core$async$__GT_t_cljs$core$async34080(f,ch,meta34072,_,fn1,meta34081){
return (new cljs.core.async.t_cljs$core$async34080(f,ch,meta34072,_,fn1,meta34081));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34071 = (function (f,ch,meta34072){
this.f = f;
this.ch = ch;
this.meta34072 = meta34072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34073,meta34072__$1){
var self__ = this;
var _34073__$1 = this;
return (new cljs.core.async.t_cljs$core$async34071(self__.f,self__.ch,meta34072__$1));
}));

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34073){
var self__ = this;
var _34073__$1 = this;
return self__.meta34072;
}));

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34080(self__.f,self__.ch,self__.meta34072,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34097 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34097) : self__.f.call(null,G__34097));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34072","meta34072",982248307,null)], null);
}));

(cljs.core.async.t_cljs$core$async34071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34071");

(cljs.core.async.t_cljs$core$async34071.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34071.
 */
cljs.core.async.__GT_t_cljs$core$async34071 = (function cljs$core$async$__GT_t_cljs$core$async34071(f,ch,meta34072){
return (new cljs.core.async.t_cljs$core$async34071(f,ch,meta34072));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34071(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34105 = (function (f,ch,meta34106){
this.f = f;
this.ch = ch;
this.meta34106 = meta34106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34107,meta34106__$1){
var self__ = this;
var _34107__$1 = this;
return (new cljs.core.async.t_cljs$core$async34105(self__.f,self__.ch,meta34106__$1));
}));

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34107){
var self__ = this;
var _34107__$1 = this;
return self__.meta34106;
}));

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34106","meta34106",-1221612676,null)], null);
}));

(cljs.core.async.t_cljs$core$async34105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34105");

(cljs.core.async.t_cljs$core$async34105.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34105.
 */
cljs.core.async.__GT_t_cljs$core$async34105 = (function cljs$core$async$__GT_t_cljs$core$async34105(f,ch,meta34106){
return (new cljs.core.async.t_cljs$core$async34105(f,ch,meta34106));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34105(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34117 = (function (p,ch,meta34118){
this.p = p;
this.ch = ch;
this.meta34118 = meta34118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34119,meta34118__$1){
var self__ = this;
var _34119__$1 = this;
return (new cljs.core.async.t_cljs$core$async34117(self__.p,self__.ch,meta34118__$1));
}));

(cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34119){
var self__ = this;
var _34119__$1 = this;
return self__.meta34118;
}));

(cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34118","meta34118",-1299242634,null)], null);
}));

(cljs.core.async.t_cljs$core$async34117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34117");

(cljs.core.async.t_cljs$core$async34117.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34117.
 */
cljs.core.async.__GT_t_cljs$core$async34117 = (function cljs$core$async$__GT_t_cljs$core$async34117(p,ch,meta34118){
return (new cljs.core.async.t_cljs$core$async34117(p,ch,meta34118));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34117(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34128 = arguments.length;
switch (G__34128) {
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
var c__32466__auto___35186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_34151){
var state_val_34152 = (state_34151[(1)]);
if((state_val_34152 === (7))){
var inst_34147 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
var statearr_34154_35187 = state_34151__$1;
(statearr_34154_35187[(2)] = inst_34147);

(statearr_34154_35187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (1))){
var state_34151__$1 = state_34151;
var statearr_34161_35188 = state_34151__$1;
(statearr_34161_35188[(2)] = null);

(statearr_34161_35188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (4))){
var inst_34133 = (state_34151[(7)]);
var inst_34133__$1 = (state_34151[(2)]);
var inst_34134 = (inst_34133__$1 == null);
var state_34151__$1 = (function (){var statearr_34163 = state_34151;
(statearr_34163[(7)] = inst_34133__$1);

return statearr_34163;
})();
if(cljs.core.truth_(inst_34134)){
var statearr_34165_35190 = state_34151__$1;
(statearr_34165_35190[(1)] = (5));

} else {
var statearr_34178_35191 = state_34151__$1;
(statearr_34178_35191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (6))){
var inst_34133 = (state_34151[(7)]);
var inst_34138 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34133) : p.call(null,inst_34133));
var state_34151__$1 = state_34151;
if(cljs.core.truth_(inst_34138)){
var statearr_34179_35192 = state_34151__$1;
(statearr_34179_35192[(1)] = (8));

} else {
var statearr_34182_35193 = state_34151__$1;
(statearr_34182_35193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (3))){
var inst_34149 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34151__$1,inst_34149);
} else {
if((state_val_34152 === (2))){
var state_34151__$1 = state_34151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34151__$1,(4),ch);
} else {
if((state_val_34152 === (11))){
var inst_34141 = (state_34151[(2)]);
var state_34151__$1 = state_34151;
var statearr_34184_35194 = state_34151__$1;
(statearr_34184_35194[(2)] = inst_34141);

(statearr_34184_35194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (9))){
var state_34151__$1 = state_34151;
var statearr_34186_35195 = state_34151__$1;
(statearr_34186_35195[(2)] = null);

(statearr_34186_35195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (5))){
var inst_34136 = cljs.core.async.close_BANG_(out);
var state_34151__$1 = state_34151;
var statearr_34187_35196 = state_34151__$1;
(statearr_34187_35196[(2)] = inst_34136);

(statearr_34187_35196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (10))){
var inst_34144 = (state_34151[(2)]);
var state_34151__$1 = (function (){var statearr_34188 = state_34151;
(statearr_34188[(8)] = inst_34144);

return statearr_34188;
})();
var statearr_34189_35197 = state_34151__$1;
(statearr_34189_35197[(2)] = null);

(statearr_34189_35197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34152 === (8))){
var inst_34133 = (state_34151[(7)]);
var state_34151__$1 = state_34151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34151__$1,(11),out,inst_34133);
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
var statearr_34192 = [null,null,null,null,null,null,null,null,null];
(statearr_34192[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34192[(1)] = (1));

return statearr_34192;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34151){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34151);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34193){var ex__32399__auto__ = e34193;
var statearr_34194_35200 = state_34151;
(statearr_34194_35200[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34151[(4)]))){
var statearr_34195_35202 = state_34151;
(statearr_34195_35202[(1)] = cljs.core.first((state_34151[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35204 = state_34151;
state_34151 = G__35204;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_34197 = f__32467__auto__();
(statearr_34197[(6)] = c__32466__auto___35186);

return statearr_34197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34202 = arguments.length;
switch (G__34202) {
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
var c__32466__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_34276){
var state_val_34277 = (state_34276[(1)]);
if((state_val_34277 === (7))){
var inst_34272 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34278_35210 = state_34276__$1;
(statearr_34278_35210[(2)] = inst_34272);

(statearr_34278_35210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (20))){
var inst_34235 = (state_34276[(7)]);
var inst_34253 = (state_34276[(2)]);
var inst_34254 = cljs.core.next(inst_34235);
var inst_34220 = inst_34254;
var inst_34221 = null;
var inst_34222 = (0);
var inst_34223 = (0);
var state_34276__$1 = (function (){var statearr_34279 = state_34276;
(statearr_34279[(8)] = inst_34253);

(statearr_34279[(9)] = inst_34220);

(statearr_34279[(10)] = inst_34221);

(statearr_34279[(11)] = inst_34222);

(statearr_34279[(12)] = inst_34223);

return statearr_34279;
})();
var statearr_34280_35212 = state_34276__$1;
(statearr_34280_35212[(2)] = null);

(statearr_34280_35212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (1))){
var state_34276__$1 = state_34276;
var statearr_34281_35213 = state_34276__$1;
(statearr_34281_35213[(2)] = null);

(statearr_34281_35213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (4))){
var inst_34209 = (state_34276[(13)]);
var inst_34209__$1 = (state_34276[(2)]);
var inst_34210 = (inst_34209__$1 == null);
var state_34276__$1 = (function (){var statearr_34282 = state_34276;
(statearr_34282[(13)] = inst_34209__$1);

return statearr_34282;
})();
if(cljs.core.truth_(inst_34210)){
var statearr_34283_35214 = state_34276__$1;
(statearr_34283_35214[(1)] = (5));

} else {
var statearr_34284_35215 = state_34276__$1;
(statearr_34284_35215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (15))){
var state_34276__$1 = state_34276;
var statearr_34288_35216 = state_34276__$1;
(statearr_34288_35216[(2)] = null);

(statearr_34288_35216[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (21))){
var state_34276__$1 = state_34276;
var statearr_34289_35218 = state_34276__$1;
(statearr_34289_35218[(2)] = null);

(statearr_34289_35218[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (13))){
var inst_34223 = (state_34276[(12)]);
var inst_34220 = (state_34276[(9)]);
var inst_34221 = (state_34276[(10)]);
var inst_34222 = (state_34276[(11)]);
var inst_34230 = (state_34276[(2)]);
var inst_34232 = (inst_34223 + (1));
var tmp34285 = inst_34221;
var tmp34286 = inst_34220;
var tmp34287 = inst_34222;
var inst_34220__$1 = tmp34286;
var inst_34221__$1 = tmp34285;
var inst_34222__$1 = tmp34287;
var inst_34223__$1 = inst_34232;
var state_34276__$1 = (function (){var statearr_34291 = state_34276;
(statearr_34291[(14)] = inst_34230);

(statearr_34291[(9)] = inst_34220__$1);

(statearr_34291[(10)] = inst_34221__$1);

(statearr_34291[(11)] = inst_34222__$1);

(statearr_34291[(12)] = inst_34223__$1);

return statearr_34291;
})();
var statearr_34294_35220 = state_34276__$1;
(statearr_34294_35220[(2)] = null);

(statearr_34294_35220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (22))){
var state_34276__$1 = state_34276;
var statearr_34295_35221 = state_34276__$1;
(statearr_34295_35221[(2)] = null);

(statearr_34295_35221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (6))){
var inst_34209 = (state_34276[(13)]);
var inst_34218 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34209) : f.call(null,inst_34209));
var inst_34219 = cljs.core.seq(inst_34218);
var inst_34220 = inst_34219;
var inst_34221 = null;
var inst_34222 = (0);
var inst_34223 = (0);
var state_34276__$1 = (function (){var statearr_34296 = state_34276;
(statearr_34296[(9)] = inst_34220);

(statearr_34296[(10)] = inst_34221);

(statearr_34296[(11)] = inst_34222);

(statearr_34296[(12)] = inst_34223);

return statearr_34296;
})();
var statearr_34297_35225 = state_34276__$1;
(statearr_34297_35225[(2)] = null);

(statearr_34297_35225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (17))){
var inst_34235 = (state_34276[(7)]);
var inst_34242 = cljs.core.chunk_first(inst_34235);
var inst_34243 = cljs.core.chunk_rest(inst_34235);
var inst_34244 = cljs.core.count(inst_34242);
var inst_34220 = inst_34243;
var inst_34221 = inst_34242;
var inst_34222 = inst_34244;
var inst_34223 = (0);
var state_34276__$1 = (function (){var statearr_34298 = state_34276;
(statearr_34298[(9)] = inst_34220);

(statearr_34298[(10)] = inst_34221);

(statearr_34298[(11)] = inst_34222);

(statearr_34298[(12)] = inst_34223);

return statearr_34298;
})();
var statearr_34299_35226 = state_34276__$1;
(statearr_34299_35226[(2)] = null);

(statearr_34299_35226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (3))){
var inst_34274 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34276__$1,inst_34274);
} else {
if((state_val_34277 === (12))){
var inst_34262 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34300_35228 = state_34276__$1;
(statearr_34300_35228[(2)] = inst_34262);

(statearr_34300_35228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (2))){
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34276__$1,(4),in$);
} else {
if((state_val_34277 === (23))){
var inst_34270 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34301_35229 = state_34276__$1;
(statearr_34301_35229[(2)] = inst_34270);

(statearr_34301_35229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (19))){
var inst_34257 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34302_35232 = state_34276__$1;
(statearr_34302_35232[(2)] = inst_34257);

(statearr_34302_35232[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (11))){
var inst_34220 = (state_34276[(9)]);
var inst_34235 = (state_34276[(7)]);
var inst_34235__$1 = cljs.core.seq(inst_34220);
var state_34276__$1 = (function (){var statearr_34304 = state_34276;
(statearr_34304[(7)] = inst_34235__$1);

return statearr_34304;
})();
if(inst_34235__$1){
var statearr_34305_35236 = state_34276__$1;
(statearr_34305_35236[(1)] = (14));

} else {
var statearr_34306_35237 = state_34276__$1;
(statearr_34306_35237[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (9))){
var inst_34264 = (state_34276[(2)]);
var inst_34265 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34276__$1 = (function (){var statearr_34309 = state_34276;
(statearr_34309[(15)] = inst_34264);

return statearr_34309;
})();
if(cljs.core.truth_(inst_34265)){
var statearr_34312_35239 = state_34276__$1;
(statearr_34312_35239[(1)] = (21));

} else {
var statearr_34313_35242 = state_34276__$1;
(statearr_34313_35242[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (5))){
var inst_34212 = cljs.core.async.close_BANG_(out);
var state_34276__$1 = state_34276;
var statearr_34314_35244 = state_34276__$1;
(statearr_34314_35244[(2)] = inst_34212);

(statearr_34314_35244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (14))){
var inst_34235 = (state_34276[(7)]);
var inst_34239 = cljs.core.chunked_seq_QMARK_(inst_34235);
var state_34276__$1 = state_34276;
if(inst_34239){
var statearr_34315_35250 = state_34276__$1;
(statearr_34315_35250[(1)] = (17));

} else {
var statearr_34316_35252 = state_34276__$1;
(statearr_34316_35252[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (16))){
var inst_34260 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34317_35255 = state_34276__$1;
(statearr_34317_35255[(2)] = inst_34260);

(statearr_34317_35255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (10))){
var inst_34221 = (state_34276[(10)]);
var inst_34223 = (state_34276[(12)]);
var inst_34228 = cljs.core._nth(inst_34221,inst_34223);
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34276__$1,(13),out,inst_34228);
} else {
if((state_val_34277 === (18))){
var inst_34235 = (state_34276[(7)]);
var inst_34249 = cljs.core.first(inst_34235);
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34276__$1,(20),out,inst_34249);
} else {
if((state_val_34277 === (8))){
var inst_34223 = (state_34276[(12)]);
var inst_34222 = (state_34276[(11)]);
var inst_34225 = (inst_34223 < inst_34222);
var inst_34226 = inst_34225;
var state_34276__$1 = state_34276;
if(cljs.core.truth_(inst_34226)){
var statearr_34318_35258 = state_34276__$1;
(statearr_34318_35258[(1)] = (10));

} else {
var statearr_34319_35260 = state_34276__$1;
(statearr_34319_35260[(1)] = (11));

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
var statearr_34320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34320[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__);

(statearr_34320[(1)] = (1));

return statearr_34320;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____1 = (function (state_34276){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34276);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34324){var ex__32399__auto__ = e34324;
var statearr_34327_35263 = state_34276;
(statearr_34327_35263[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34276[(4)]))){
var statearr_34328_35265 = state_34276;
(statearr_34328_35265[(1)] = cljs.core.first((state_34276[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35266 = state_34276;
state_34276 = G__35266;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__ = function(state_34276){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____1.call(this,state_34276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32396__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_34329 = f__32467__auto__();
(statearr_34329[(6)] = c__32466__auto__);

return statearr_34329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));

return c__32466__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34332 = arguments.length;
switch (G__34332) {
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
var G__34334 = arguments.length;
switch (G__34334) {
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
var G__34343 = arguments.length;
switch (G__34343) {
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
var c__32466__auto___35273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_34370){
var state_val_34371 = (state_34370[(1)]);
if((state_val_34371 === (7))){
var inst_34365 = (state_34370[(2)]);
var state_34370__$1 = state_34370;
var statearr_34372_35274 = state_34370__$1;
(statearr_34372_35274[(2)] = inst_34365);

(statearr_34372_35274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (1))){
var inst_34345 = null;
var state_34370__$1 = (function (){var statearr_34376 = state_34370;
(statearr_34376[(7)] = inst_34345);

return statearr_34376;
})();
var statearr_34377_35275 = state_34370__$1;
(statearr_34377_35275[(2)] = null);

(statearr_34377_35275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (4))){
var inst_34348 = (state_34370[(8)]);
var inst_34348__$1 = (state_34370[(2)]);
var inst_34350 = (inst_34348__$1 == null);
var inst_34351 = cljs.core.not(inst_34350);
var state_34370__$1 = (function (){var statearr_34381 = state_34370;
(statearr_34381[(8)] = inst_34348__$1);

return statearr_34381;
})();
if(inst_34351){
var statearr_34382_35277 = state_34370__$1;
(statearr_34382_35277[(1)] = (5));

} else {
var statearr_34383_35278 = state_34370__$1;
(statearr_34383_35278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (6))){
var state_34370__$1 = state_34370;
var statearr_34384_35282 = state_34370__$1;
(statearr_34384_35282[(2)] = null);

(statearr_34384_35282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (3))){
var inst_34367 = (state_34370[(2)]);
var inst_34368 = cljs.core.async.close_BANG_(out);
var state_34370__$1 = (function (){var statearr_34385 = state_34370;
(statearr_34385[(9)] = inst_34367);

return statearr_34385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34370__$1,inst_34368);
} else {
if((state_val_34371 === (2))){
var state_34370__$1 = state_34370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34370__$1,(4),ch);
} else {
if((state_val_34371 === (11))){
var inst_34348 = (state_34370[(8)]);
var inst_34359 = (state_34370[(2)]);
var inst_34345 = inst_34348;
var state_34370__$1 = (function (){var statearr_34387 = state_34370;
(statearr_34387[(10)] = inst_34359);

(statearr_34387[(7)] = inst_34345);

return statearr_34387;
})();
var statearr_34388_35288 = state_34370__$1;
(statearr_34388_35288[(2)] = null);

(statearr_34388_35288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (9))){
var inst_34348 = (state_34370[(8)]);
var state_34370__$1 = state_34370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34370__$1,(11),out,inst_34348);
} else {
if((state_val_34371 === (5))){
var inst_34348 = (state_34370[(8)]);
var inst_34345 = (state_34370[(7)]);
var inst_34353 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34348,inst_34345);
var state_34370__$1 = state_34370;
if(inst_34353){
var statearr_34390_35294 = state_34370__$1;
(statearr_34390_35294[(1)] = (8));

} else {
var statearr_34391_35296 = state_34370__$1;
(statearr_34391_35296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (10))){
var inst_34362 = (state_34370[(2)]);
var state_34370__$1 = state_34370;
var statearr_34393_35300 = state_34370__$1;
(statearr_34393_35300[(2)] = inst_34362);

(statearr_34393_35300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (8))){
var inst_34345 = (state_34370[(7)]);
var tmp34389 = inst_34345;
var inst_34345__$1 = tmp34389;
var state_34370__$1 = (function (){var statearr_34394 = state_34370;
(statearr_34394[(7)] = inst_34345__$1);

return statearr_34394;
})();
var statearr_34395_35305 = state_34370__$1;
(statearr_34395_35305[(2)] = null);

(statearr_34395_35305[(1)] = (2));


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
var statearr_34397 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34397[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34397[(1)] = (1));

return statearr_34397;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34370){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34370);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34399){var ex__32399__auto__ = e34399;
var statearr_34400_35311 = state_34370;
(statearr_34400_35311[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34370[(4)]))){
var statearr_34401_35312 = state_34370;
(statearr_34401_35312[(1)] = cljs.core.first((state_34370[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35313 = state_34370;
state_34370 = G__35313;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_34402 = f__32467__auto__();
(statearr_34402[(6)] = c__32466__auto___35273);

return statearr_34402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34406 = arguments.length;
switch (G__34406) {
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
var c__32466__auto___35317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_34446){
var state_val_34447 = (state_34446[(1)]);
if((state_val_34447 === (7))){
var inst_34441 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34448_35320 = state_34446__$1;
(statearr_34448_35320[(2)] = inst_34441);

(statearr_34448_35320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (1))){
var inst_34408 = (new Array(n));
var inst_34409 = inst_34408;
var inst_34410 = (0);
var state_34446__$1 = (function (){var statearr_34449 = state_34446;
(statearr_34449[(7)] = inst_34409);

(statearr_34449[(8)] = inst_34410);

return statearr_34449;
})();
var statearr_34450_35321 = state_34446__$1;
(statearr_34450_35321[(2)] = null);

(statearr_34450_35321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (4))){
var inst_34413 = (state_34446[(9)]);
var inst_34413__$1 = (state_34446[(2)]);
var inst_34414 = (inst_34413__$1 == null);
var inst_34415 = cljs.core.not(inst_34414);
var state_34446__$1 = (function (){var statearr_34451 = state_34446;
(statearr_34451[(9)] = inst_34413__$1);

return statearr_34451;
})();
if(inst_34415){
var statearr_34452_35322 = state_34446__$1;
(statearr_34452_35322[(1)] = (5));

} else {
var statearr_34453_35323 = state_34446__$1;
(statearr_34453_35323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (15))){
var inst_34435 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34454_35324 = state_34446__$1;
(statearr_34454_35324[(2)] = inst_34435);

(statearr_34454_35324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (13))){
var state_34446__$1 = state_34446;
var statearr_34456_35325 = state_34446__$1;
(statearr_34456_35325[(2)] = null);

(statearr_34456_35325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (6))){
var inst_34410 = (state_34446[(8)]);
var inst_34431 = (inst_34410 > (0));
var state_34446__$1 = state_34446;
if(cljs.core.truth_(inst_34431)){
var statearr_34459_35326 = state_34446__$1;
(statearr_34459_35326[(1)] = (12));

} else {
var statearr_34461_35327 = state_34446__$1;
(statearr_34461_35327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (3))){
var inst_34443 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34446__$1,inst_34443);
} else {
if((state_val_34447 === (12))){
var inst_34409 = (state_34446[(7)]);
var inst_34433 = cljs.core.vec(inst_34409);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34446__$1,(15),out,inst_34433);
} else {
if((state_val_34447 === (2))){
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34446__$1,(4),ch);
} else {
if((state_val_34447 === (11))){
var inst_34425 = (state_34446[(2)]);
var inst_34426 = (new Array(n));
var inst_34409 = inst_34426;
var inst_34410 = (0);
var state_34446__$1 = (function (){var statearr_34472 = state_34446;
(statearr_34472[(10)] = inst_34425);

(statearr_34472[(7)] = inst_34409);

(statearr_34472[(8)] = inst_34410);

return statearr_34472;
})();
var statearr_34473_35328 = state_34446__$1;
(statearr_34473_35328[(2)] = null);

(statearr_34473_35328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (9))){
var inst_34409 = (state_34446[(7)]);
var inst_34423 = cljs.core.vec(inst_34409);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34446__$1,(11),out,inst_34423);
} else {
if((state_val_34447 === (5))){
var inst_34409 = (state_34446[(7)]);
var inst_34410 = (state_34446[(8)]);
var inst_34413 = (state_34446[(9)]);
var inst_34418 = (state_34446[(11)]);
var inst_34417 = (inst_34409[inst_34410] = inst_34413);
var inst_34418__$1 = (inst_34410 + (1));
var inst_34419 = (inst_34418__$1 < n);
var state_34446__$1 = (function (){var statearr_34474 = state_34446;
(statearr_34474[(12)] = inst_34417);

(statearr_34474[(11)] = inst_34418__$1);

return statearr_34474;
})();
if(cljs.core.truth_(inst_34419)){
var statearr_34475_35334 = state_34446__$1;
(statearr_34475_35334[(1)] = (8));

} else {
var statearr_34476_35335 = state_34446__$1;
(statearr_34476_35335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (14))){
var inst_34438 = (state_34446[(2)]);
var inst_34439 = cljs.core.async.close_BANG_(out);
var state_34446__$1 = (function (){var statearr_34478 = state_34446;
(statearr_34478[(13)] = inst_34438);

return statearr_34478;
})();
var statearr_34479_35336 = state_34446__$1;
(statearr_34479_35336[(2)] = inst_34439);

(statearr_34479_35336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (10))){
var inst_34429 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34480_35338 = state_34446__$1;
(statearr_34480_35338[(2)] = inst_34429);

(statearr_34480_35338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (8))){
var inst_34409 = (state_34446[(7)]);
var inst_34418 = (state_34446[(11)]);
var tmp34477 = inst_34409;
var inst_34409__$1 = tmp34477;
var inst_34410 = inst_34418;
var state_34446__$1 = (function (){var statearr_34481 = state_34446;
(statearr_34481[(7)] = inst_34409__$1);

(statearr_34481[(8)] = inst_34410);

return statearr_34481;
})();
var statearr_34482_35340 = state_34446__$1;
(statearr_34482_35340[(2)] = null);

(statearr_34482_35340[(1)] = (2));


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
var statearr_34484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34484[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34484[(1)] = (1));

return statearr_34484;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34446){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34446);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34486){var ex__32399__auto__ = e34486;
var statearr_34487_35366 = state_34446;
(statearr_34487_35366[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34446[(4)]))){
var statearr_34488_35367 = state_34446;
(statearr_34488_35367[(1)] = cljs.core.first((state_34446[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35369 = state_34446;
state_34446 = G__35369;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_34491 = f__32467__auto__();
(statearr_34491[(6)] = c__32466__auto___35317);

return statearr_34491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34495 = arguments.length;
switch (G__34495) {
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
var c__32466__auto___35381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32467__auto__ = (function (){var switch__32395__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34546 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34565_35382 = state_34556__$1;
(statearr_34565_35382[(2)] = inst_34546);

(statearr_34565_35382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var inst_34500 = [];
var inst_34501 = inst_34500;
var inst_34502 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34556__$1 = (function (){var statearr_34566 = state_34556;
(statearr_34566[(7)] = inst_34501);

(statearr_34566[(8)] = inst_34502);

return statearr_34566;
})();
var statearr_34567_35387 = state_34556__$1;
(statearr_34567_35387[(2)] = null);

(statearr_34567_35387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34506 = (state_34556[(9)]);
var inst_34506__$1 = (state_34556[(2)]);
var inst_34507 = (inst_34506__$1 == null);
var inst_34508 = cljs.core.not(inst_34507);
var state_34556__$1 = (function (){var statearr_34568 = state_34556;
(statearr_34568[(9)] = inst_34506__$1);

return statearr_34568;
})();
if(inst_34508){
var statearr_34569_35393 = state_34556__$1;
(statearr_34569_35393[(1)] = (5));

} else {
var statearr_34570_35395 = state_34556__$1;
(statearr_34570_35395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (15))){
var inst_34501 = (state_34556[(7)]);
var inst_34538 = cljs.core.vec(inst_34501);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(18),out,inst_34538);
} else {
if((state_val_34557 === (13))){
var inst_34533 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34573_35400 = state_34556__$1;
(statearr_34573_35400[(2)] = inst_34533);

(statearr_34573_35400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34501 = (state_34556[(7)]);
var inst_34535 = inst_34501.length;
var inst_34536 = (inst_34535 > (0));
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34536)){
var statearr_34574_35419 = state_34556__$1;
(statearr_34574_35419[(1)] = (15));

} else {
var statearr_34575_35420 = state_34556__$1;
(statearr_34575_35420[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (17))){
var inst_34543 = (state_34556[(2)]);
var inst_34544 = cljs.core.async.close_BANG_(out);
var state_34556__$1 = (function (){var statearr_34576 = state_34556;
(statearr_34576[(10)] = inst_34543);

return statearr_34576;
})();
var statearr_34578_35421 = state_34556__$1;
(statearr_34578_35421[(2)] = inst_34544);

(statearr_34578_35421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (3))){
var inst_34548 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34556__$1,inst_34548);
} else {
if((state_val_34557 === (12))){
var inst_34501 = (state_34556[(7)]);
var inst_34525 = cljs.core.vec(inst_34501);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(14),out,inst_34525);
} else {
if((state_val_34557 === (2))){
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34556__$1,(4),ch);
} else {
if((state_val_34557 === (11))){
var inst_34501 = (state_34556[(7)]);
var inst_34506 = (state_34556[(9)]);
var inst_34511 = (state_34556[(11)]);
var inst_34520 = inst_34501.push(inst_34506);
var tmp34579 = inst_34501;
var inst_34501__$1 = tmp34579;
var inst_34502 = inst_34511;
var state_34556__$1 = (function (){var statearr_34580 = state_34556;
(statearr_34580[(12)] = inst_34520);

(statearr_34580[(7)] = inst_34501__$1);

(statearr_34580[(8)] = inst_34502);

return statearr_34580;
})();
var statearr_34583_35428 = state_34556__$1;
(statearr_34583_35428[(2)] = null);

(statearr_34583_35428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (9))){
var inst_34502 = (state_34556[(8)]);
var inst_34516 = cljs.core.keyword_identical_QMARK_(inst_34502,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34556__$1 = state_34556;
var statearr_34584_35429 = state_34556__$1;
(statearr_34584_35429[(2)] = inst_34516);

(statearr_34584_35429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34506 = (state_34556[(9)]);
var inst_34511 = (state_34556[(11)]);
var inst_34502 = (state_34556[(8)]);
var inst_34513 = (state_34556[(13)]);
var inst_34511__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34506) : f.call(null,inst_34506));
var inst_34513__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34511__$1,inst_34502);
var state_34556__$1 = (function (){var statearr_34585 = state_34556;
(statearr_34585[(11)] = inst_34511__$1);

(statearr_34585[(13)] = inst_34513__$1);

return statearr_34585;
})();
if(inst_34513__$1){
var statearr_34586_35432 = state_34556__$1;
(statearr_34586_35432[(1)] = (8));

} else {
var statearr_34587_35434 = state_34556__$1;
(statearr_34587_35434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (14))){
var inst_34506 = (state_34556[(9)]);
var inst_34511 = (state_34556[(11)]);
var inst_34527 = (state_34556[(2)]);
var inst_34528 = [];
var inst_34529 = inst_34528.push(inst_34506);
var inst_34501 = inst_34528;
var inst_34502 = inst_34511;
var state_34556__$1 = (function (){var statearr_34588 = state_34556;
(statearr_34588[(14)] = inst_34527);

(statearr_34588[(15)] = inst_34529);

(statearr_34588[(7)] = inst_34501);

(statearr_34588[(8)] = inst_34502);

return statearr_34588;
})();
var statearr_34589_35435 = state_34556__$1;
(statearr_34589_35435[(2)] = null);

(statearr_34589_35435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (16))){
var state_34556__$1 = state_34556;
var statearr_34590_35458 = state_34556__$1;
(statearr_34590_35458[(2)] = null);

(statearr_34590_35458[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (10))){
var inst_34518 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34518)){
var statearr_34591_35461 = state_34556__$1;
(statearr_34591_35461[(1)] = (11));

} else {
var statearr_34592_35462 = state_34556__$1;
(statearr_34592_35462[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (18))){
var inst_34540 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34593_35463 = state_34556__$1;
(statearr_34593_35463[(2)] = inst_34540);

(statearr_34593_35463[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34513 = (state_34556[(13)]);
var state_34556__$1 = state_34556;
var statearr_34594_35466 = state_34556__$1;
(statearr_34594_35466[(2)] = inst_34513);

(statearr_34594_35466[(1)] = (10));


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
var statearr_34595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34595[(0)] = cljs$core$async$state_machine__32396__auto__);

(statearr_34595[(1)] = (1));

return statearr_34595;
});
var cljs$core$async$state_machine__32396__auto____1 = (function (state_34556){
while(true){
var ret_value__32397__auto__ = (function (){try{while(true){
var result__32398__auto__ = switch__32395__auto__(state_34556);
if(cljs.core.keyword_identical_QMARK_(result__32398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32398__auto__;
}
break;
}
}catch (e34596){var ex__32399__auto__ = e34596;
var statearr_34597_35471 = state_34556;
(statearr_34597_35471[(2)] = ex__32399__auto__);


if(cljs.core.seq((state_34556[(4)]))){
var statearr_34598_35472 = state_34556;
(statearr_34598_35472[(1)] = cljs.core.first((state_34556[(4)])));

} else {
throw ex__32399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35473 = state_34556;
state_34556 = G__35473;
continue;
} else {
return ret_value__32397__auto__;
}
break;
}
});
cljs$core$async$state_machine__32396__auto__ = function(state_34556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32396__auto____1.call(this,state_34556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32396__auto____0;
cljs$core$async$state_machine__32396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32396__auto____1;
return cljs$core$async$state_machine__32396__auto__;
})()
})();
var state__32468__auto__ = (function (){var statearr_34599 = f__32467__auto__();
(statearr_34599[(6)] = c__32466__auto___35381);

return statearr_34599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32468__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
