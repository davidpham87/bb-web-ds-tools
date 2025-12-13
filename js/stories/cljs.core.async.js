var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.channels.js");
require("./cljs.core.async.impl.buffers.js");
require("./cljs.core.async.impl.timers.js");
require("./cljs.core.async.impl.dispatch.js");
require("./cljs.core.async.impl.ioc_helpers.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var sci=$CLJS.sci || ($CLJS.sci = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("cljs.core.async.js");

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
cljs.core.async.t_cljs$core$async54360 = (function (f,blockable,meta54361){
this.f = f;
this.blockable = blockable;
this.meta54361 = meta54361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54362,meta54361__$1){
var self__ = this;
var _54362__$1 = this;
return (new cljs.core.async.t_cljs$core$async54360(self__.f,self__.blockable,meta54361__$1));
}));

(cljs.core.async.t_cljs$core$async54360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54362){
var self__ = this;
var _54362__$1 = this;
return self__.meta54361;
}));

(cljs.core.async.t_cljs$core$async54360.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54360.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54361","meta54361",1929286494,null)], null);
}));

(cljs.core.async.t_cljs$core$async54360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54360");

(cljs.core.async.t_cljs$core$async54360.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54360.
 */
cljs.core.async.__GT_t_cljs$core$async54360 = (function cljs$core$async$__GT_t_cljs$core$async54360(f,blockable,meta54361){
return (new cljs.core.async.t_cljs$core$async54360(f,blockable,meta54361));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54359 = arguments.length;
switch (G__54359) {
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
return (new cljs.core.async.t_cljs$core$async54360(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54390 = arguments.length;
switch (G__54390) {
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
var G__54392 = arguments.length;
switch (G__54392) {
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
var G__54395 = arguments.length;
switch (G__54395) {
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
var val_55929 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55929) : fn1.call(null,val_55929));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55929) : fn1.call(null,val_55929));
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
var G__54397 = arguments.length;
switch (G__54397) {
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
var n__5616__auto___55931 = n;
var x_55932 = (0);
while(true){
if((x_55932 < n__5616__auto___55931)){
(a[x_55932] = x_55932);

var G__55933 = (x_55932 + (1));
x_55932 = G__55933;
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
cljs.core.async.t_cljs$core$async54424 = (function (flag,meta54425){
this.flag = flag;
this.meta54425 = meta54425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54426,meta54425__$1){
var self__ = this;
var _54426__$1 = this;
return (new cljs.core.async.t_cljs$core$async54424(self__.flag,meta54425__$1));
}));

(cljs.core.async.t_cljs$core$async54424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54426){
var self__ = this;
var _54426__$1 = this;
return self__.meta54425;
}));

(cljs.core.async.t_cljs$core$async54424.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54424.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54425","meta54425",2069571075,null)], null);
}));

(cljs.core.async.t_cljs$core$async54424.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54424");

(cljs.core.async.t_cljs$core$async54424.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54424");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54424.
 */
cljs.core.async.__GT_t_cljs$core$async54424 = (function cljs$core$async$__GT_t_cljs$core$async54424(flag,meta54425){
return (new cljs.core.async.t_cljs$core$async54424(flag,meta54425));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async54424(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54448 = (function (flag,cb,meta54449){
this.flag = flag;
this.cb = cb;
this.meta54449 = meta54449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54450,meta54449__$1){
var self__ = this;
var _54450__$1 = this;
return (new cljs.core.async.t_cljs$core$async54448(self__.flag,self__.cb,meta54449__$1));
}));

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54450){
var self__ = this;
var _54450__$1 = this;
return self__.meta54449;
}));

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54449","meta54449",-563536186,null)], null);
}));

(cljs.core.async.t_cljs$core$async54448.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54448");

(cljs.core.async.t_cljs$core$async54448.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54448");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54448.
 */
cljs.core.async.__GT_t_cljs$core$async54448 = (function cljs$core$async$__GT_t_cljs$core$async54448(flag,cb,meta54449){
return (new cljs.core.async.t_cljs$core$async54448(flag,cb,meta54449));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async54448(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_55934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_55934)){
if((!(((port_55934.cljs$core$IFn$_invoke$arity$1 ? port_55934.cljs$core$IFn$_invoke$arity$1((1)) : port_55934.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__55935 = (i + (1));
i = G__55935;
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
return (function (p1__54493_SHARP_){
var G__54496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54493_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54496) : fret.call(null,G__54496));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__54494_SHARP_){
var G__54497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54494_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54497) : fret.call(null,G__54497));
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
var G__55938 = (i + (1));
i = G__55938;
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
var len__5749__auto___55941 = arguments.length;
var i__5750__auto___55942 = (0);
while(true){
if((i__5750__auto___55942 < len__5749__auto___55941)){
args__5755__auto__.push((arguments[i__5750__auto___55942]));

var G__55943 = (i__5750__auto___55942 + (1));
i__5750__auto___55942 = G__55943;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54512){
var map__54513 = p__54512;
var map__54513__$1 = cljs.core.__destructure_map(map__54513);
var opts = map__54513__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54510){
var G__54511 = cljs.core.first(seq54510);
var seq54510__$1 = cljs.core.next(seq54510);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54511,seq54510__$1);
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
var G__54516 = arguments.length;
switch (G__54516) {
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
var c__54287__auto___55950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_54540){
var state_val_54541 = (state_54540[(1)]);
if((state_val_54541 === (7))){
var inst_54536 = (state_54540[(2)]);
var state_54540__$1 = state_54540;
var statearr_54542_55954 = state_54540__$1;
(statearr_54542_55954[(2)] = inst_54536);

(statearr_54542_55954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54541 === (1))){
var state_54540__$1 = state_54540;
var statearr_54543_55955 = state_54540__$1;
(statearr_54543_55955[(2)] = null);

(statearr_54543_55955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54541 === (4))){
var inst_54519 = (state_54540[(7)]);
var inst_54519__$1 = (state_54540[(2)]);
var inst_54520 = (inst_54519__$1 == null);
var state_54540__$1 = (function (){var statearr_54544 = state_54540;
(statearr_54544[(7)] = inst_54519__$1);

return statearr_54544;
})();
if(cljs.core.truth_(inst_54520)){
var statearr_54545_55956 = state_54540__$1;
(statearr_54545_55956[(1)] = (5));

} else {
var statearr_54546_55957 = state_54540__$1;
(statearr_54546_55957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54541 === (13))){
var state_54540__$1 = state_54540;
var statearr_54547_55958 = state_54540__$1;
(statearr_54547_55958[(2)] = null);

(statearr_54547_55958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54541 === (6))){
var inst_54519 = (state_54540[(7)]);
var state_54540__$1 = state_54540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54540__$1,(11),to,inst_54519);
} else {
if((state_val_54541 === (3))){
var inst_54538 = (state_54540[(2)]);
var state_54540__$1 = state_54540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54540__$1,inst_54538);
} else {
if((state_val_54541 === (12))){
var state_54540__$1 = state_54540;
var statearr_54548_55959 = state_54540__$1;
(statearr_54548_55959[(2)] = null);

(statearr_54548_55959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54541 === (2))){
var state_54540__$1 = state_54540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54540__$1,(4),from);
} else {
if((state_val_54541 === (11))){
var inst_54529 = (state_54540[(2)]);
var state_54540__$1 = state_54540;
if(cljs.core.truth_(inst_54529)){
var statearr_54549_55960 = state_54540__$1;
(statearr_54549_55960[(1)] = (12));

} else {
var statearr_54550_55961 = state_54540__$1;
(statearr_54550_55961[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54541 === (9))){
var state_54540__$1 = state_54540;
var statearr_54551_55962 = state_54540__$1;
(statearr_54551_55962[(2)] = null);

(statearr_54551_55962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54541 === (5))){
var state_54540__$1 = state_54540;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54552_55963 = state_54540__$1;
(statearr_54552_55963[(1)] = (8));

} else {
var statearr_54553_55964 = state_54540__$1;
(statearr_54553_55964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54541 === (14))){
var inst_54534 = (state_54540[(2)]);
var state_54540__$1 = state_54540;
var statearr_54554_55965 = state_54540__$1;
(statearr_54554_55965[(2)] = inst_54534);

(statearr_54554_55965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54541 === (10))){
var inst_54526 = (state_54540[(2)]);
var state_54540__$1 = state_54540;
var statearr_54555_55966 = state_54540__$1;
(statearr_54555_55966[(2)] = inst_54526);

(statearr_54555_55966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54541 === (8))){
var inst_54523 = cljs.core.async.close_BANG_(to);
var state_54540__$1 = state_54540;
var statearr_54556_55971 = state_54540__$1;
(statearr_54556_55971[(2)] = inst_54523);

(statearr_54556_55971[(1)] = (10));


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
var cljs$core$async$state_machine__54213__auto__ = null;
var cljs$core$async$state_machine__54213__auto____0 = (function (){
var statearr_54557 = [null,null,null,null,null,null,null,null];
(statearr_54557[(0)] = cljs$core$async$state_machine__54213__auto__);

(statearr_54557[(1)] = (1));

return statearr_54557;
});
var cljs$core$async$state_machine__54213__auto____1 = (function (state_54540){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_54540);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e54558){var ex__54216__auto__ = e54558;
var statearr_54559_55972 = state_54540;
(statearr_54559_55972[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_54540[(4)]))){
var statearr_54560_55973 = state_54540;
(statearr_54560_55973[(1)] = cljs.core.first((state_54540[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55974 = state_54540;
state_54540 = G__55974;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$state_machine__54213__auto__ = function(state_54540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54213__auto____1.call(this,state_54540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54213__auto____0;
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54213__auto____1;
return cljs$core$async$state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_54561 = f__54288__auto__();
(statearr_54561[(6)] = c__54287__auto___55950);

return statearr_54561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
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
var process__$1 = (function (p__54562){
var vec__54563 = p__54562;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54563,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54563,(1),null);
var job = vec__54563;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54287__auto___55979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_54570){
var state_val_54571 = (state_54570[(1)]);
if((state_val_54571 === (1))){
var state_54570__$1 = state_54570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54570__$1,(2),res,v);
} else {
if((state_val_54571 === (2))){
var inst_54567 = (state_54570[(2)]);
var inst_54568 = cljs.core.async.close_BANG_(res);
var state_54570__$1 = (function (){var statearr_54572 = state_54570;
(statearr_54572[(7)] = inst_54567);

return statearr_54572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54570__$1,inst_54568);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0 = (function (){
var statearr_54573 = [null,null,null,null,null,null,null,null];
(statearr_54573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__);

(statearr_54573[(1)] = (1));

return statearr_54573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1 = (function (state_54570){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_54570);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e54574){var ex__54216__auto__ = e54574;
var statearr_54575_55983 = state_54570;
(statearr_54575_55983[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_54570[(4)]))){
var statearr_54576_55984 = state_54570;
(statearr_54576_55984[(1)] = cljs.core.first((state_54570[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55985 = state_54570;
state_54570 = G__55985;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__ = function(state_54570){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1.call(this,state_54570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_54577 = f__54288__auto__();
(statearr_54577[(6)] = c__54287__auto___55979);

return statearr_54577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__54578){
var vec__54579 = p__54578;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54579,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54579,(1),null);
var job = vec__54579;
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
var n__5616__auto___55989 = n;
var __55990 = (0);
while(true){
if((__55990 < n__5616__auto___55989)){
var G__54582_55991 = type;
var G__54582_55992__$1 = (((G__54582_55991 instanceof cljs.core.Keyword))?G__54582_55991.fqn:null);
switch (G__54582_55992__$1) {
case "compute":
var c__54287__auto___55997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55990,c__54287__auto___55997,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async){
return (function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = ((function (__55990,c__54287__auto___55997,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async){
return (function (state_54595){
var state_val_54596 = (state_54595[(1)]);
if((state_val_54596 === (1))){
var state_54595__$1 = state_54595;
var statearr_54597_55998 = state_54595__$1;
(statearr_54597_55998[(2)] = null);

(statearr_54597_55998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54596 === (2))){
var state_54595__$1 = state_54595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54595__$1,(4),jobs);
} else {
if((state_val_54596 === (3))){
var inst_54593 = (state_54595[(2)]);
var state_54595__$1 = state_54595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54595__$1,inst_54593);
} else {
if((state_val_54596 === (4))){
var inst_54585 = (state_54595[(2)]);
var inst_54586 = process__$1(inst_54585);
var state_54595__$1 = state_54595;
if(cljs.core.truth_(inst_54586)){
var statearr_54598_55999 = state_54595__$1;
(statearr_54598_55999[(1)] = (5));

} else {
var statearr_54599_56000 = state_54595__$1;
(statearr_54599_56000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54596 === (5))){
var state_54595__$1 = state_54595;
var statearr_54600_56001 = state_54595__$1;
(statearr_54600_56001[(2)] = null);

(statearr_54600_56001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54596 === (6))){
var state_54595__$1 = state_54595;
var statearr_54601_56005 = state_54595__$1;
(statearr_54601_56005[(2)] = null);

(statearr_54601_56005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54596 === (7))){
var inst_54591 = (state_54595[(2)]);
var state_54595__$1 = state_54595;
var statearr_54602_56006 = state_54595__$1;
(statearr_54602_56006[(2)] = inst_54591);

(statearr_54602_56006[(1)] = (3));


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
});})(__55990,c__54287__auto___55997,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async))
;
return ((function (__55990,switch__54212__auto__,c__54287__auto___55997,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0 = (function (){
var statearr_54603 = [null,null,null,null,null,null,null];
(statearr_54603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__);

(statearr_54603[(1)] = (1));

return statearr_54603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1 = (function (state_54595){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_54595);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e54604){var ex__54216__auto__ = e54604;
var statearr_54605_56007 = state_54595;
(statearr_54605_56007[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_54595[(4)]))){
var statearr_54606_56008 = state_54595;
(statearr_54606_56008[(1)] = cljs.core.first((state_54595[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56009 = state_54595;
state_54595 = G__56009;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__ = function(state_54595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1.call(this,state_54595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__;
})()
;})(__55990,switch__54212__auto__,c__54287__auto___55997,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async))
})();
var state__54289__auto__ = (function (){var statearr_54607 = f__54288__auto__();
(statearr_54607[(6)] = c__54287__auto___55997);

return statearr_54607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
});})(__55990,c__54287__auto___55997,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async))
);


break;
case "async":
var c__54287__auto___56010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55990,c__54287__auto___56010,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async){
return (function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = ((function (__55990,c__54287__auto___56010,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async){
return (function (state_54620){
var state_val_54621 = (state_54620[(1)]);
if((state_val_54621 === (1))){
var state_54620__$1 = state_54620;
var statearr_54622_56011 = state_54620__$1;
(statearr_54622_56011[(2)] = null);

(statearr_54622_56011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54621 === (2))){
var state_54620__$1 = state_54620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54620__$1,(4),jobs);
} else {
if((state_val_54621 === (3))){
var inst_54618 = (state_54620[(2)]);
var state_54620__$1 = state_54620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54620__$1,inst_54618);
} else {
if((state_val_54621 === (4))){
var inst_54610 = (state_54620[(2)]);
var inst_54611 = async(inst_54610);
var state_54620__$1 = state_54620;
if(cljs.core.truth_(inst_54611)){
var statearr_54623_56012 = state_54620__$1;
(statearr_54623_56012[(1)] = (5));

} else {
var statearr_54624_56013 = state_54620__$1;
(statearr_54624_56013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54621 === (5))){
var state_54620__$1 = state_54620;
var statearr_54625_56014 = state_54620__$1;
(statearr_54625_56014[(2)] = null);

(statearr_54625_56014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54621 === (6))){
var state_54620__$1 = state_54620;
var statearr_54626_56015 = state_54620__$1;
(statearr_54626_56015[(2)] = null);

(statearr_54626_56015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54621 === (7))){
var inst_54616 = (state_54620[(2)]);
var state_54620__$1 = state_54620;
var statearr_54627_56016 = state_54620__$1;
(statearr_54627_56016[(2)] = inst_54616);

(statearr_54627_56016[(1)] = (3));


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
});})(__55990,c__54287__auto___56010,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async))
;
return ((function (__55990,switch__54212__auto__,c__54287__auto___56010,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0 = (function (){
var statearr_54628 = [null,null,null,null,null,null,null];
(statearr_54628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__);

(statearr_54628[(1)] = (1));

return statearr_54628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1 = (function (state_54620){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_54620);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e54629){var ex__54216__auto__ = e54629;
var statearr_54630_56017 = state_54620;
(statearr_54630_56017[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_54620[(4)]))){
var statearr_54631_56018 = state_54620;
(statearr_54631_56018[(1)] = cljs.core.first((state_54620[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56019 = state_54620;
state_54620 = G__56019;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__ = function(state_54620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1.call(this,state_54620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__;
})()
;})(__55990,switch__54212__auto__,c__54287__auto___56010,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async))
})();
var state__54289__auto__ = (function (){var statearr_54632 = f__54288__auto__();
(statearr_54632[(6)] = c__54287__auto___56010);

return statearr_54632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
});})(__55990,c__54287__auto___56010,G__54582_55991,G__54582_55992__$1,n__5616__auto___55989,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54582_55992__$1)].join('')));

}

var G__56020 = (__55990 + (1));
__55990 = G__56020;
continue;
} else {
}
break;
}

var c__54287__auto___56021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_54654){
var state_val_54655 = (state_54654[(1)]);
if((state_val_54655 === (7))){
var inst_54650 = (state_54654[(2)]);
var state_54654__$1 = state_54654;
var statearr_54656_56022 = state_54654__$1;
(statearr_54656_56022[(2)] = inst_54650);

(statearr_54656_56022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54655 === (1))){
var state_54654__$1 = state_54654;
var statearr_54657_56023 = state_54654__$1;
(statearr_54657_56023[(2)] = null);

(statearr_54657_56023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54655 === (4))){
var inst_54635 = (state_54654[(7)]);
var inst_54635__$1 = (state_54654[(2)]);
var inst_54636 = (inst_54635__$1 == null);
var state_54654__$1 = (function (){var statearr_54658 = state_54654;
(statearr_54658[(7)] = inst_54635__$1);

return statearr_54658;
})();
if(cljs.core.truth_(inst_54636)){
var statearr_54659_56024 = state_54654__$1;
(statearr_54659_56024[(1)] = (5));

} else {
var statearr_54660_56025 = state_54654__$1;
(statearr_54660_56025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54655 === (6))){
var inst_54635 = (state_54654[(7)]);
var inst_54640 = (state_54654[(8)]);
var inst_54640__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_54641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54642 = [inst_54635,inst_54640__$1];
var inst_54643 = (new cljs.core.PersistentVector(null,2,(5),inst_54641,inst_54642,null));
var state_54654__$1 = (function (){var statearr_54661 = state_54654;
(statearr_54661[(8)] = inst_54640__$1);

return statearr_54661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54654__$1,(8),jobs,inst_54643);
} else {
if((state_val_54655 === (3))){
var inst_54652 = (state_54654[(2)]);
var state_54654__$1 = state_54654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54654__$1,inst_54652);
} else {
if((state_val_54655 === (2))){
var state_54654__$1 = state_54654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54654__$1,(4),from);
} else {
if((state_val_54655 === (9))){
var inst_54647 = (state_54654[(2)]);
var state_54654__$1 = (function (){var statearr_54662 = state_54654;
(statearr_54662[(9)] = inst_54647);

return statearr_54662;
})();
var statearr_54663_56026 = state_54654__$1;
(statearr_54663_56026[(2)] = null);

(statearr_54663_56026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54655 === (5))){
var inst_54638 = cljs.core.async.close_BANG_(jobs);
var state_54654__$1 = state_54654;
var statearr_54664_56027 = state_54654__$1;
(statearr_54664_56027[(2)] = inst_54638);

(statearr_54664_56027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54655 === (8))){
var inst_54640 = (state_54654[(8)]);
var inst_54645 = (state_54654[(2)]);
var state_54654__$1 = (function (){var statearr_54665 = state_54654;
(statearr_54665[(10)] = inst_54645);

return statearr_54665;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54654__$1,(9),results,inst_54640);
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
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0 = (function (){
var statearr_54666 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__);

(statearr_54666[(1)] = (1));

return statearr_54666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1 = (function (state_54654){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_54654);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e54667){var ex__54216__auto__ = e54667;
var statearr_54668_56028 = state_54654;
(statearr_54668_56028[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_54654[(4)]))){
var statearr_54669_56029 = state_54654;
(statearr_54669_56029[(1)] = cljs.core.first((state_54654[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56030 = state_54654;
state_54654 = G__56030;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__ = function(state_54654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1.call(this,state_54654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_54670 = f__54288__auto__();
(statearr_54670[(6)] = c__54287__auto___56021);

return statearr_54670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
}));


var c__54287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_54708){
var state_val_54709 = (state_54708[(1)]);
if((state_val_54709 === (7))){
var inst_54704 = (state_54708[(2)]);
var state_54708__$1 = state_54708;
var statearr_54710_56031 = state_54708__$1;
(statearr_54710_56031[(2)] = inst_54704);

(statearr_54710_56031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (20))){
var state_54708__$1 = state_54708;
var statearr_54711_56032 = state_54708__$1;
(statearr_54711_56032[(2)] = null);

(statearr_54711_56032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (1))){
var state_54708__$1 = state_54708;
var statearr_54712_56033 = state_54708__$1;
(statearr_54712_56033[(2)] = null);

(statearr_54712_56033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (4))){
var inst_54673 = (state_54708[(7)]);
var inst_54673__$1 = (state_54708[(2)]);
var inst_54674 = (inst_54673__$1 == null);
var state_54708__$1 = (function (){var statearr_54713 = state_54708;
(statearr_54713[(7)] = inst_54673__$1);

return statearr_54713;
})();
if(cljs.core.truth_(inst_54674)){
var statearr_54714_56034 = state_54708__$1;
(statearr_54714_56034[(1)] = (5));

} else {
var statearr_54715_56035 = state_54708__$1;
(statearr_54715_56035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (15))){
var inst_54686 = (state_54708[(8)]);
var state_54708__$1 = state_54708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54708__$1,(18),to,inst_54686);
} else {
if((state_val_54709 === (21))){
var inst_54699 = (state_54708[(2)]);
var state_54708__$1 = state_54708;
var statearr_54716_56036 = state_54708__$1;
(statearr_54716_56036[(2)] = inst_54699);

(statearr_54716_56036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (13))){
var inst_54701 = (state_54708[(2)]);
var state_54708__$1 = (function (){var statearr_54717 = state_54708;
(statearr_54717[(9)] = inst_54701);

return statearr_54717;
})();
var statearr_54718_56037 = state_54708__$1;
(statearr_54718_56037[(2)] = null);

(statearr_54718_56037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (6))){
var inst_54673 = (state_54708[(7)]);
var state_54708__$1 = state_54708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54708__$1,(11),inst_54673);
} else {
if((state_val_54709 === (17))){
var inst_54694 = (state_54708[(2)]);
var state_54708__$1 = state_54708;
if(cljs.core.truth_(inst_54694)){
var statearr_54719_56038 = state_54708__$1;
(statearr_54719_56038[(1)] = (19));

} else {
var statearr_54720_56039 = state_54708__$1;
(statearr_54720_56039[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (3))){
var inst_54706 = (state_54708[(2)]);
var state_54708__$1 = state_54708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54708__$1,inst_54706);
} else {
if((state_val_54709 === (12))){
var inst_54683 = (state_54708[(10)]);
var state_54708__$1 = state_54708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54708__$1,(14),inst_54683);
} else {
if((state_val_54709 === (2))){
var state_54708__$1 = state_54708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54708__$1,(4),results);
} else {
if((state_val_54709 === (19))){
var state_54708__$1 = state_54708;
var statearr_54721_56040 = state_54708__$1;
(statearr_54721_56040[(2)] = null);

(statearr_54721_56040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (11))){
var inst_54683 = (state_54708[(2)]);
var state_54708__$1 = (function (){var statearr_54722 = state_54708;
(statearr_54722[(10)] = inst_54683);

return statearr_54722;
})();
var statearr_54723_56041 = state_54708__$1;
(statearr_54723_56041[(2)] = null);

(statearr_54723_56041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (9))){
var state_54708__$1 = state_54708;
var statearr_54724_56042 = state_54708__$1;
(statearr_54724_56042[(2)] = null);

(statearr_54724_56042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (5))){
var state_54708__$1 = state_54708;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54725_56043 = state_54708__$1;
(statearr_54725_56043[(1)] = (8));

} else {
var statearr_54726_56044 = state_54708__$1;
(statearr_54726_56044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (14))){
var inst_54686 = (state_54708[(8)]);
var inst_54688 = (state_54708[(11)]);
var inst_54686__$1 = (state_54708[(2)]);
var inst_54687 = (inst_54686__$1 == null);
var inst_54688__$1 = cljs.core.not(inst_54687);
var state_54708__$1 = (function (){var statearr_54727 = state_54708;
(statearr_54727[(8)] = inst_54686__$1);

(statearr_54727[(11)] = inst_54688__$1);

return statearr_54727;
})();
if(inst_54688__$1){
var statearr_54728_56046 = state_54708__$1;
(statearr_54728_56046[(1)] = (15));

} else {
var statearr_54729_56047 = state_54708__$1;
(statearr_54729_56047[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (16))){
var inst_54688 = (state_54708[(11)]);
var state_54708__$1 = state_54708;
var statearr_54730_56049 = state_54708__$1;
(statearr_54730_56049[(2)] = inst_54688);

(statearr_54730_56049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (10))){
var inst_54680 = (state_54708[(2)]);
var state_54708__$1 = state_54708;
var statearr_54731_56050 = state_54708__$1;
(statearr_54731_56050[(2)] = inst_54680);

(statearr_54731_56050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (18))){
var inst_54691 = (state_54708[(2)]);
var state_54708__$1 = state_54708;
var statearr_54732_56051 = state_54708__$1;
(statearr_54732_56051[(2)] = inst_54691);

(statearr_54732_56051[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54709 === (8))){
var inst_54677 = cljs.core.async.close_BANG_(to);
var state_54708__$1 = state_54708;
var statearr_54733_56052 = state_54708__$1;
(statearr_54733_56052[(2)] = inst_54677);

(statearr_54733_56052[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0 = (function (){
var statearr_54734 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54734[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__);

(statearr_54734[(1)] = (1));

return statearr_54734;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1 = (function (state_54708){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_54708);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e54735){var ex__54216__auto__ = e54735;
var statearr_54736_56057 = state_54708;
(statearr_54736_56057[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_54708[(4)]))){
var statearr_54737_56058 = state_54708;
(statearr_54737_56058[(1)] = cljs.core.first((state_54708[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56059 = state_54708;
state_54708 = G__56059;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__ = function(state_54708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1.call(this,state_54708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_54738 = f__54288__auto__();
(statearr_54738[(6)] = c__54287__auto__);

return statearr_54738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
}));

return c__54287__auto__;
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
var G__54740 = arguments.length;
switch (G__54740) {
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
var G__54742 = arguments.length;
switch (G__54742) {
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
var G__54744 = arguments.length;
switch (G__54744) {
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
var c__54287__auto___56071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_54770){
var state_val_54771 = (state_54770[(1)]);
if((state_val_54771 === (7))){
var inst_54766 = (state_54770[(2)]);
var state_54770__$1 = state_54770;
var statearr_54772_56083 = state_54770__$1;
(statearr_54772_56083[(2)] = inst_54766);

(statearr_54772_56083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54771 === (1))){
var state_54770__$1 = state_54770;
var statearr_54773_56087 = state_54770__$1;
(statearr_54773_56087[(2)] = null);

(statearr_54773_56087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54771 === (4))){
var inst_54747 = (state_54770[(7)]);
var inst_54747__$1 = (state_54770[(2)]);
var inst_54748 = (inst_54747__$1 == null);
var state_54770__$1 = (function (){var statearr_54774 = state_54770;
(statearr_54774[(7)] = inst_54747__$1);

return statearr_54774;
})();
if(cljs.core.truth_(inst_54748)){
var statearr_54775_56093 = state_54770__$1;
(statearr_54775_56093[(1)] = (5));

} else {
var statearr_54776_56094 = state_54770__$1;
(statearr_54776_56094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54771 === (13))){
var state_54770__$1 = state_54770;
var statearr_54777_56095 = state_54770__$1;
(statearr_54777_56095[(2)] = null);

(statearr_54777_56095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54771 === (6))){
var inst_54747 = (state_54770[(7)]);
var inst_54753 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54747) : p.call(null,inst_54747));
var state_54770__$1 = state_54770;
if(cljs.core.truth_(inst_54753)){
var statearr_54778_56096 = state_54770__$1;
(statearr_54778_56096[(1)] = (9));

} else {
var statearr_54779_56097 = state_54770__$1;
(statearr_54779_56097[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54771 === (3))){
var inst_54768 = (state_54770[(2)]);
var state_54770__$1 = state_54770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54770__$1,inst_54768);
} else {
if((state_val_54771 === (12))){
var state_54770__$1 = state_54770;
var statearr_54780_56098 = state_54770__$1;
(statearr_54780_56098[(2)] = null);

(statearr_54780_56098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54771 === (2))){
var state_54770__$1 = state_54770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54770__$1,(4),ch);
} else {
if((state_val_54771 === (11))){
var inst_54747 = (state_54770[(7)]);
var inst_54757 = (state_54770[(2)]);
var state_54770__$1 = state_54770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54770__$1,(8),inst_54757,inst_54747);
} else {
if((state_val_54771 === (9))){
var state_54770__$1 = state_54770;
var statearr_54781_56099 = state_54770__$1;
(statearr_54781_56099[(2)] = tc);

(statearr_54781_56099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54771 === (5))){
var inst_54750 = cljs.core.async.close_BANG_(tc);
var inst_54751 = cljs.core.async.close_BANG_(fc);
var state_54770__$1 = (function (){var statearr_54782 = state_54770;
(statearr_54782[(8)] = inst_54750);

return statearr_54782;
})();
var statearr_54783_56100 = state_54770__$1;
(statearr_54783_56100[(2)] = inst_54751);

(statearr_54783_56100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54771 === (14))){
var inst_54764 = (state_54770[(2)]);
var state_54770__$1 = state_54770;
var statearr_54784_56101 = state_54770__$1;
(statearr_54784_56101[(2)] = inst_54764);

(statearr_54784_56101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54771 === (10))){
var state_54770__$1 = state_54770;
var statearr_54785_56102 = state_54770__$1;
(statearr_54785_56102[(2)] = fc);

(statearr_54785_56102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54771 === (8))){
var inst_54759 = (state_54770[(2)]);
var state_54770__$1 = state_54770;
if(cljs.core.truth_(inst_54759)){
var statearr_54786_56103 = state_54770__$1;
(statearr_54786_56103[(1)] = (12));

} else {
var statearr_54787_56104 = state_54770__$1;
(statearr_54787_56104[(1)] = (13));

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
var cljs$core$async$state_machine__54213__auto__ = null;
var cljs$core$async$state_machine__54213__auto____0 = (function (){
var statearr_54788 = [null,null,null,null,null,null,null,null,null];
(statearr_54788[(0)] = cljs$core$async$state_machine__54213__auto__);

(statearr_54788[(1)] = (1));

return statearr_54788;
});
var cljs$core$async$state_machine__54213__auto____1 = (function (state_54770){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_54770);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e54789){var ex__54216__auto__ = e54789;
var statearr_54790_56105 = state_54770;
(statearr_54790_56105[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_54770[(4)]))){
var statearr_54791_56106 = state_54770;
(statearr_54791_56106[(1)] = cljs.core.first((state_54770[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56107 = state_54770;
state_54770 = G__56107;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$state_machine__54213__auto__ = function(state_54770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54213__auto____1.call(this,state_54770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54213__auto____0;
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54213__auto____1;
return cljs$core$async$state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_54792 = f__54288__auto__();
(statearr_54792[(6)] = c__54287__auto___56071);

return statearr_54792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
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
var c__54287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_54814){
var state_val_54815 = (state_54814[(1)]);
if((state_val_54815 === (7))){
var inst_54810 = (state_54814[(2)]);
var state_54814__$1 = state_54814;
var statearr_54816_56108 = state_54814__$1;
(statearr_54816_56108[(2)] = inst_54810);

(statearr_54816_56108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54815 === (1))){
var inst_54793 = init;
var inst_54794 = inst_54793;
var state_54814__$1 = (function (){var statearr_54817 = state_54814;
(statearr_54817[(7)] = inst_54794);

return statearr_54817;
})();
var statearr_54818_56109 = state_54814__$1;
(statearr_54818_56109[(2)] = null);

(statearr_54818_56109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54815 === (4))){
var inst_54797 = (state_54814[(8)]);
var inst_54797__$1 = (state_54814[(2)]);
var inst_54798 = (inst_54797__$1 == null);
var state_54814__$1 = (function (){var statearr_54819 = state_54814;
(statearr_54819[(8)] = inst_54797__$1);

return statearr_54819;
})();
if(cljs.core.truth_(inst_54798)){
var statearr_54820_56110 = state_54814__$1;
(statearr_54820_56110[(1)] = (5));

} else {
var statearr_54821_56111 = state_54814__$1;
(statearr_54821_56111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54815 === (6))){
var inst_54794 = (state_54814[(7)]);
var inst_54797 = (state_54814[(8)]);
var inst_54801 = (state_54814[(9)]);
var inst_54801__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_54794,inst_54797) : f.call(null,inst_54794,inst_54797));
var inst_54802 = cljs.core.reduced_QMARK_(inst_54801__$1);
var state_54814__$1 = (function (){var statearr_54822 = state_54814;
(statearr_54822[(9)] = inst_54801__$1);

return statearr_54822;
})();
if(inst_54802){
var statearr_54823_56113 = state_54814__$1;
(statearr_54823_56113[(1)] = (8));

} else {
var statearr_54824_56114 = state_54814__$1;
(statearr_54824_56114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54815 === (3))){
var inst_54812 = (state_54814[(2)]);
var state_54814__$1 = state_54814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54814__$1,inst_54812);
} else {
if((state_val_54815 === (2))){
var state_54814__$1 = state_54814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54814__$1,(4),ch);
} else {
if((state_val_54815 === (9))){
var inst_54801 = (state_54814[(9)]);
var inst_54794 = inst_54801;
var state_54814__$1 = (function (){var statearr_54825 = state_54814;
(statearr_54825[(7)] = inst_54794);

return statearr_54825;
})();
var statearr_54826_56115 = state_54814__$1;
(statearr_54826_56115[(2)] = null);

(statearr_54826_56115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54815 === (5))){
var inst_54794 = (state_54814[(7)]);
var state_54814__$1 = state_54814;
var statearr_54827_56116 = state_54814__$1;
(statearr_54827_56116[(2)] = inst_54794);

(statearr_54827_56116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54815 === (10))){
var inst_54808 = (state_54814[(2)]);
var state_54814__$1 = state_54814;
var statearr_54828_56117 = state_54814__$1;
(statearr_54828_56117[(2)] = inst_54808);

(statearr_54828_56117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54815 === (8))){
var inst_54801 = (state_54814[(9)]);
var inst_54804 = cljs.core.deref(inst_54801);
var state_54814__$1 = state_54814;
var statearr_54829_56118 = state_54814__$1;
(statearr_54829_56118[(2)] = inst_54804);

(statearr_54829_56118[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__54213__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54213__auto____0 = (function (){
var statearr_54830 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54830[(0)] = cljs$core$async$reduce_$_state_machine__54213__auto__);

(statearr_54830[(1)] = (1));

return statearr_54830;
});
var cljs$core$async$reduce_$_state_machine__54213__auto____1 = (function (state_54814){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_54814);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e54831){var ex__54216__auto__ = e54831;
var statearr_54832_56119 = state_54814;
(statearr_54832_56119[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_54814[(4)]))){
var statearr_54833_56120 = state_54814;
(statearr_54833_56120[(1)] = cljs.core.first((state_54814[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56121 = state_54814;
state_54814 = G__56121;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54213__auto__ = function(state_54814){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54213__auto____1.call(this,state_54814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54213__auto____0;
cljs$core$async$reduce_$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54213__auto____1;
return cljs$core$async$reduce_$_state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_54834 = f__54288__auto__();
(statearr_54834[(6)] = c__54287__auto__);

return statearr_54834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
}));

return c__54287__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_54840){
var state_val_54841 = (state_54840[(1)]);
if((state_val_54841 === (1))){
var inst_54835 = cljs.core.async.reduce(f__$1,init,ch);
var state_54840__$1 = state_54840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54840__$1,(2),inst_54835);
} else {
if((state_val_54841 === (2))){
var inst_54837 = (state_54840[(2)]);
var inst_54838 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_54837) : f__$1.call(null,inst_54837));
var state_54840__$1 = state_54840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54840__$1,inst_54838);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54213__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54213__auto____0 = (function (){
var statearr_54842 = [null,null,null,null,null,null,null];
(statearr_54842[(0)] = cljs$core$async$transduce_$_state_machine__54213__auto__);

(statearr_54842[(1)] = (1));

return statearr_54842;
});
var cljs$core$async$transduce_$_state_machine__54213__auto____1 = (function (state_54840){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_54840);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e54843){var ex__54216__auto__ = e54843;
var statearr_54844_56122 = state_54840;
(statearr_54844_56122[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_54840[(4)]))){
var statearr_54845_56123 = state_54840;
(statearr_54845_56123[(1)] = cljs.core.first((state_54840[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56125 = state_54840;
state_54840 = G__56125;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54213__auto__ = function(state_54840){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54213__auto____1.call(this,state_54840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54213__auto____0;
cljs$core$async$transduce_$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54213__auto____1;
return cljs$core$async$transduce_$_state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_54846 = f__54288__auto__();
(statearr_54846[(6)] = c__54287__auto__);

return statearr_54846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
}));

return c__54287__auto__;
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
var G__54848 = arguments.length;
switch (G__54848) {
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
var c__54287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_54873){
var state_val_54874 = (state_54873[(1)]);
if((state_val_54874 === (7))){
var inst_54855 = (state_54873[(2)]);
var state_54873__$1 = state_54873;
var statearr_54875_56127 = state_54873__$1;
(statearr_54875_56127[(2)] = inst_54855);

(statearr_54875_56127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54874 === (1))){
var inst_54849 = cljs.core.seq(coll);
var inst_54850 = inst_54849;
var state_54873__$1 = (function (){var statearr_54876 = state_54873;
(statearr_54876[(7)] = inst_54850);

return statearr_54876;
})();
var statearr_54877_56128 = state_54873__$1;
(statearr_54877_56128[(2)] = null);

(statearr_54877_56128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54874 === (4))){
var inst_54850 = (state_54873[(7)]);
var inst_54853 = cljs.core.first(inst_54850);
var state_54873__$1 = state_54873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54873__$1,(7),ch,inst_54853);
} else {
if((state_val_54874 === (13))){
var inst_54867 = (state_54873[(2)]);
var state_54873__$1 = state_54873;
var statearr_54878_56129 = state_54873__$1;
(statearr_54878_56129[(2)] = inst_54867);

(statearr_54878_56129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54874 === (6))){
var inst_54858 = (state_54873[(2)]);
var state_54873__$1 = state_54873;
if(cljs.core.truth_(inst_54858)){
var statearr_54879_56130 = state_54873__$1;
(statearr_54879_56130[(1)] = (8));

} else {
var statearr_54880_56131 = state_54873__$1;
(statearr_54880_56131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54874 === (3))){
var inst_54871 = (state_54873[(2)]);
var state_54873__$1 = state_54873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54873__$1,inst_54871);
} else {
if((state_val_54874 === (12))){
var state_54873__$1 = state_54873;
var statearr_54881_56132 = state_54873__$1;
(statearr_54881_56132[(2)] = null);

(statearr_54881_56132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54874 === (2))){
var inst_54850 = (state_54873[(7)]);
var state_54873__$1 = state_54873;
if(cljs.core.truth_(inst_54850)){
var statearr_54882_56133 = state_54873__$1;
(statearr_54882_56133[(1)] = (4));

} else {
var statearr_54883_56134 = state_54873__$1;
(statearr_54883_56134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54874 === (11))){
var inst_54864 = cljs.core.async.close_BANG_(ch);
var state_54873__$1 = state_54873;
var statearr_54884_56135 = state_54873__$1;
(statearr_54884_56135[(2)] = inst_54864);

(statearr_54884_56135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54874 === (9))){
var state_54873__$1 = state_54873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54885_56136 = state_54873__$1;
(statearr_54885_56136[(1)] = (11));

} else {
var statearr_54886_56137 = state_54873__$1;
(statearr_54886_56137[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54874 === (5))){
var inst_54850 = (state_54873[(7)]);
var state_54873__$1 = state_54873;
var statearr_54887_56138 = state_54873__$1;
(statearr_54887_56138[(2)] = inst_54850);

(statearr_54887_56138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54874 === (10))){
var inst_54869 = (state_54873[(2)]);
var state_54873__$1 = state_54873;
var statearr_54888_56139 = state_54873__$1;
(statearr_54888_56139[(2)] = inst_54869);

(statearr_54888_56139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54874 === (8))){
var inst_54850 = (state_54873[(7)]);
var inst_54860 = cljs.core.next(inst_54850);
var inst_54850__$1 = inst_54860;
var state_54873__$1 = (function (){var statearr_54889 = state_54873;
(statearr_54889[(7)] = inst_54850__$1);

return statearr_54889;
})();
var statearr_54890_56140 = state_54873__$1;
(statearr_54890_56140[(2)] = null);

(statearr_54890_56140[(1)] = (2));


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
var cljs$core$async$state_machine__54213__auto__ = null;
var cljs$core$async$state_machine__54213__auto____0 = (function (){
var statearr_54891 = [null,null,null,null,null,null,null,null];
(statearr_54891[(0)] = cljs$core$async$state_machine__54213__auto__);

(statearr_54891[(1)] = (1));

return statearr_54891;
});
var cljs$core$async$state_machine__54213__auto____1 = (function (state_54873){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_54873);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e54892){var ex__54216__auto__ = e54892;
var statearr_54893_56141 = state_54873;
(statearr_54893_56141[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_54873[(4)]))){
var statearr_54894_56142 = state_54873;
(statearr_54894_56142[(1)] = cljs.core.first((state_54873[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56143 = state_54873;
state_54873 = G__56143;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$state_machine__54213__auto__ = function(state_54873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54213__auto____1.call(this,state_54873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54213__auto____0;
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54213__auto____1;
return cljs$core$async$state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_54895 = f__54288__auto__();
(statearr_54895[(6)] = c__54287__auto__);

return statearr_54895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
}));

return c__54287__auto__;
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
var G__54897 = arguments.length;
switch (G__54897) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_56145 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_56145(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_56146 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_56146(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_56151 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_56151(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_56153 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_56153(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54898 = (function (ch,cs,meta54899){
this.ch = ch;
this.cs = cs;
this.meta54899 = meta54899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54900,meta54899__$1){
var self__ = this;
var _54900__$1 = this;
return (new cljs.core.async.t_cljs$core$async54898(self__.ch,self__.cs,meta54899__$1));
}));

(cljs.core.async.t_cljs$core$async54898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54900){
var self__ = this;
var _54900__$1 = this;
return self__.meta54899;
}));

(cljs.core.async.t_cljs$core$async54898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54898.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54898.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async54898.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async54898.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async54898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54899","meta54899",1435255988,null)], null);
}));

(cljs.core.async.t_cljs$core$async54898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54898");

(cljs.core.async.t_cljs$core$async54898.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54898.
 */
cljs.core.async.__GT_t_cljs$core$async54898 = (function cljs$core$async$__GT_t_cljs$core$async54898(ch,cs,meta54899){
return (new cljs.core.async.t_cljs$core$async54898(ch,cs,meta54899));
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
var m = (new cljs.core.async.t_cljs$core$async54898(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__54287__auto___56161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_55033){
var state_val_55034 = (state_55033[(1)]);
if((state_val_55034 === (7))){
var inst_55029 = (state_55033[(2)]);
var state_55033__$1 = state_55033;
var statearr_55035_56162 = state_55033__$1;
(statearr_55035_56162[(2)] = inst_55029);

(statearr_55035_56162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (20))){
var inst_54934 = (state_55033[(7)]);
var inst_54946 = cljs.core.first(inst_54934);
var inst_54947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54946,(0),null);
var inst_54948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54946,(1),null);
var state_55033__$1 = (function (){var statearr_55036 = state_55033;
(statearr_55036[(8)] = inst_54947);

return statearr_55036;
})();
if(cljs.core.truth_(inst_54948)){
var statearr_55037_56163 = state_55033__$1;
(statearr_55037_56163[(1)] = (22));

} else {
var statearr_55038_56164 = state_55033__$1;
(statearr_55038_56164[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (27))){
var inst_54976 = (state_55033[(9)]);
var inst_54978 = (state_55033[(10)]);
var inst_54983 = (state_55033[(11)]);
var inst_54903 = (state_55033[(12)]);
var inst_54983__$1 = cljs.core._nth(inst_54976,inst_54978);
var inst_54984 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54983__$1,inst_54903,done);
var state_55033__$1 = (function (){var statearr_55039 = state_55033;
(statearr_55039[(11)] = inst_54983__$1);

return statearr_55039;
})();
if(cljs.core.truth_(inst_54984)){
var statearr_55040_56165 = state_55033__$1;
(statearr_55040_56165[(1)] = (30));

} else {
var statearr_55041_56166 = state_55033__$1;
(statearr_55041_56166[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (1))){
var state_55033__$1 = state_55033;
var statearr_55042_56167 = state_55033__$1;
(statearr_55042_56167[(2)] = null);

(statearr_55042_56167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (24))){
var inst_54934 = (state_55033[(7)]);
var inst_54953 = (state_55033[(2)]);
var inst_54954 = cljs.core.next(inst_54934);
var inst_54912 = inst_54954;
var inst_54913 = null;
var inst_54914 = (0);
var inst_54915 = (0);
var state_55033__$1 = (function (){var statearr_55043 = state_55033;
(statearr_55043[(13)] = inst_54953);

(statearr_55043[(14)] = inst_54912);

(statearr_55043[(15)] = inst_54913);

(statearr_55043[(16)] = inst_54914);

(statearr_55043[(17)] = inst_54915);

return statearr_55043;
})();
var statearr_55044_56168 = state_55033__$1;
(statearr_55044_56168[(2)] = null);

(statearr_55044_56168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (39))){
var state_55033__$1 = state_55033;
var statearr_55048_56169 = state_55033__$1;
(statearr_55048_56169[(2)] = null);

(statearr_55048_56169[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (4))){
var inst_54903 = (state_55033[(12)]);
var inst_54903__$1 = (state_55033[(2)]);
var inst_54904 = (inst_54903__$1 == null);
var state_55033__$1 = (function (){var statearr_55049 = state_55033;
(statearr_55049[(12)] = inst_54903__$1);

return statearr_55049;
})();
if(cljs.core.truth_(inst_54904)){
var statearr_55050_56170 = state_55033__$1;
(statearr_55050_56170[(1)] = (5));

} else {
var statearr_55051_56171 = state_55033__$1;
(statearr_55051_56171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (15))){
var inst_54915 = (state_55033[(17)]);
var inst_54912 = (state_55033[(14)]);
var inst_54913 = (state_55033[(15)]);
var inst_54914 = (state_55033[(16)]);
var inst_54930 = (state_55033[(2)]);
var inst_54931 = (inst_54915 + (1));
var tmp55045 = inst_54912;
var tmp55046 = inst_54914;
var tmp55047 = inst_54913;
var inst_54912__$1 = tmp55045;
var inst_54913__$1 = tmp55047;
var inst_54914__$1 = tmp55046;
var inst_54915__$1 = inst_54931;
var state_55033__$1 = (function (){var statearr_55052 = state_55033;
(statearr_55052[(18)] = inst_54930);

(statearr_55052[(14)] = inst_54912__$1);

(statearr_55052[(15)] = inst_54913__$1);

(statearr_55052[(16)] = inst_54914__$1);

(statearr_55052[(17)] = inst_54915__$1);

return statearr_55052;
})();
var statearr_55053_56172 = state_55033__$1;
(statearr_55053_56172[(2)] = null);

(statearr_55053_56172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (21))){
var inst_54957 = (state_55033[(2)]);
var state_55033__$1 = state_55033;
var statearr_55057_56173 = state_55033__$1;
(statearr_55057_56173[(2)] = inst_54957);

(statearr_55057_56173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (31))){
var inst_54983 = (state_55033[(11)]);
var inst_54987 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54983);
var state_55033__$1 = state_55033;
var statearr_55058_56174 = state_55033__$1;
(statearr_55058_56174[(2)] = inst_54987);

(statearr_55058_56174[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (32))){
var inst_54978 = (state_55033[(10)]);
var inst_54975 = (state_55033[(19)]);
var inst_54976 = (state_55033[(9)]);
var inst_54977 = (state_55033[(20)]);
var inst_54989 = (state_55033[(2)]);
var inst_54990 = (inst_54978 + (1));
var tmp55054 = inst_54976;
var tmp55055 = inst_54977;
var tmp55056 = inst_54975;
var inst_54975__$1 = tmp55056;
var inst_54976__$1 = tmp55054;
var inst_54977__$1 = tmp55055;
var inst_54978__$1 = inst_54990;
var state_55033__$1 = (function (){var statearr_55059 = state_55033;
(statearr_55059[(21)] = inst_54989);

(statearr_55059[(19)] = inst_54975__$1);

(statearr_55059[(9)] = inst_54976__$1);

(statearr_55059[(20)] = inst_54977__$1);

(statearr_55059[(10)] = inst_54978__$1);

return statearr_55059;
})();
var statearr_55060_56175 = state_55033__$1;
(statearr_55060_56175[(2)] = null);

(statearr_55060_56175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (40))){
var inst_55002 = (state_55033[(22)]);
var inst_55006 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55002);
var state_55033__$1 = state_55033;
var statearr_55061_56180 = state_55033__$1;
(statearr_55061_56180[(2)] = inst_55006);

(statearr_55061_56180[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (33))){
var inst_54993 = (state_55033[(23)]);
var inst_54995 = cljs.core.chunked_seq_QMARK_(inst_54993);
var state_55033__$1 = state_55033;
if(inst_54995){
var statearr_55062_56181 = state_55033__$1;
(statearr_55062_56181[(1)] = (36));

} else {
var statearr_55063_56182 = state_55033__$1;
(statearr_55063_56182[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (13))){
var inst_54924 = (state_55033[(24)]);
var inst_54927 = cljs.core.async.close_BANG_(inst_54924);
var state_55033__$1 = state_55033;
var statearr_55064_56183 = state_55033__$1;
(statearr_55064_56183[(2)] = inst_54927);

(statearr_55064_56183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (22))){
var inst_54947 = (state_55033[(8)]);
var inst_54950 = cljs.core.async.close_BANG_(inst_54947);
var state_55033__$1 = state_55033;
var statearr_55065_56188 = state_55033__$1;
(statearr_55065_56188[(2)] = inst_54950);

(statearr_55065_56188[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (36))){
var inst_54993 = (state_55033[(23)]);
var inst_54997 = cljs.core.chunk_first(inst_54993);
var inst_54998 = cljs.core.chunk_rest(inst_54993);
var inst_54999 = cljs.core.count(inst_54997);
var inst_54975 = inst_54998;
var inst_54976 = inst_54997;
var inst_54977 = inst_54999;
var inst_54978 = (0);
var state_55033__$1 = (function (){var statearr_55066 = state_55033;
(statearr_55066[(19)] = inst_54975);

(statearr_55066[(9)] = inst_54976);

(statearr_55066[(20)] = inst_54977);

(statearr_55066[(10)] = inst_54978);

return statearr_55066;
})();
var statearr_55067_56189 = state_55033__$1;
(statearr_55067_56189[(2)] = null);

(statearr_55067_56189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (41))){
var inst_54993 = (state_55033[(23)]);
var inst_55008 = (state_55033[(2)]);
var inst_55009 = cljs.core.next(inst_54993);
var inst_54975 = inst_55009;
var inst_54976 = null;
var inst_54977 = (0);
var inst_54978 = (0);
var state_55033__$1 = (function (){var statearr_55068 = state_55033;
(statearr_55068[(25)] = inst_55008);

(statearr_55068[(19)] = inst_54975);

(statearr_55068[(9)] = inst_54976);

(statearr_55068[(20)] = inst_54977);

(statearr_55068[(10)] = inst_54978);

return statearr_55068;
})();
var statearr_55069_56191 = state_55033__$1;
(statearr_55069_56191[(2)] = null);

(statearr_55069_56191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (43))){
var state_55033__$1 = state_55033;
var statearr_55070_56193 = state_55033__$1;
(statearr_55070_56193[(2)] = null);

(statearr_55070_56193[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (29))){
var inst_55017 = (state_55033[(2)]);
var state_55033__$1 = state_55033;
var statearr_55071_56198 = state_55033__$1;
(statearr_55071_56198[(2)] = inst_55017);

(statearr_55071_56198[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (44))){
var inst_55026 = (state_55033[(2)]);
var state_55033__$1 = (function (){var statearr_55072 = state_55033;
(statearr_55072[(26)] = inst_55026);

return statearr_55072;
})();
var statearr_55073_56199 = state_55033__$1;
(statearr_55073_56199[(2)] = null);

(statearr_55073_56199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (6))){
var inst_54967 = (state_55033[(27)]);
var inst_54966 = cljs.core.deref(cs);
var inst_54967__$1 = cljs.core.keys(inst_54966);
var inst_54968 = cljs.core.count(inst_54967__$1);
var inst_54969 = cljs.core.reset_BANG_(dctr,inst_54968);
var inst_54974 = cljs.core.seq(inst_54967__$1);
var inst_54975 = inst_54974;
var inst_54976 = null;
var inst_54977 = (0);
var inst_54978 = (0);
var state_55033__$1 = (function (){var statearr_55074 = state_55033;
(statearr_55074[(27)] = inst_54967__$1);

(statearr_55074[(28)] = inst_54969);

(statearr_55074[(19)] = inst_54975);

(statearr_55074[(9)] = inst_54976);

(statearr_55074[(20)] = inst_54977);

(statearr_55074[(10)] = inst_54978);

return statearr_55074;
})();
var statearr_55075_56200 = state_55033__$1;
(statearr_55075_56200[(2)] = null);

(statearr_55075_56200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (28))){
var inst_54975 = (state_55033[(19)]);
var inst_54993 = (state_55033[(23)]);
var inst_54993__$1 = cljs.core.seq(inst_54975);
var state_55033__$1 = (function (){var statearr_55076 = state_55033;
(statearr_55076[(23)] = inst_54993__$1);

return statearr_55076;
})();
if(inst_54993__$1){
var statearr_55077_56201 = state_55033__$1;
(statearr_55077_56201[(1)] = (33));

} else {
var statearr_55078_56202 = state_55033__$1;
(statearr_55078_56202[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (25))){
var inst_54978 = (state_55033[(10)]);
var inst_54977 = (state_55033[(20)]);
var inst_54980 = (inst_54978 < inst_54977);
var inst_54981 = inst_54980;
var state_55033__$1 = state_55033;
if(cljs.core.truth_(inst_54981)){
var statearr_55079_56203 = state_55033__$1;
(statearr_55079_56203[(1)] = (27));

} else {
var statearr_55080_56204 = state_55033__$1;
(statearr_55080_56204[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (34))){
var state_55033__$1 = state_55033;
var statearr_55081_56205 = state_55033__$1;
(statearr_55081_56205[(2)] = null);

(statearr_55081_56205[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (17))){
var state_55033__$1 = state_55033;
var statearr_55082_56206 = state_55033__$1;
(statearr_55082_56206[(2)] = null);

(statearr_55082_56206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (3))){
var inst_55031 = (state_55033[(2)]);
var state_55033__$1 = state_55033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55033__$1,inst_55031);
} else {
if((state_val_55034 === (12))){
var inst_54962 = (state_55033[(2)]);
var state_55033__$1 = state_55033;
var statearr_55083_56207 = state_55033__$1;
(statearr_55083_56207[(2)] = inst_54962);

(statearr_55083_56207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (2))){
var state_55033__$1 = state_55033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55033__$1,(4),ch);
} else {
if((state_val_55034 === (23))){
var state_55033__$1 = state_55033;
var statearr_55084_56208 = state_55033__$1;
(statearr_55084_56208[(2)] = null);

(statearr_55084_56208[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (35))){
var inst_55015 = (state_55033[(2)]);
var state_55033__$1 = state_55033;
var statearr_55085_56209 = state_55033__$1;
(statearr_55085_56209[(2)] = inst_55015);

(statearr_55085_56209[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (19))){
var inst_54934 = (state_55033[(7)]);
var inst_54938 = cljs.core.chunk_first(inst_54934);
var inst_54939 = cljs.core.chunk_rest(inst_54934);
var inst_54940 = cljs.core.count(inst_54938);
var inst_54912 = inst_54939;
var inst_54913 = inst_54938;
var inst_54914 = inst_54940;
var inst_54915 = (0);
var state_55033__$1 = (function (){var statearr_55086 = state_55033;
(statearr_55086[(14)] = inst_54912);

(statearr_55086[(15)] = inst_54913);

(statearr_55086[(16)] = inst_54914);

(statearr_55086[(17)] = inst_54915);

return statearr_55086;
})();
var statearr_55087_56210 = state_55033__$1;
(statearr_55087_56210[(2)] = null);

(statearr_55087_56210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (11))){
var inst_54912 = (state_55033[(14)]);
var inst_54934 = (state_55033[(7)]);
var inst_54934__$1 = cljs.core.seq(inst_54912);
var state_55033__$1 = (function (){var statearr_55088 = state_55033;
(statearr_55088[(7)] = inst_54934__$1);

return statearr_55088;
})();
if(inst_54934__$1){
var statearr_55089_56211 = state_55033__$1;
(statearr_55089_56211[(1)] = (16));

} else {
var statearr_55090_56212 = state_55033__$1;
(statearr_55090_56212[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (9))){
var inst_54964 = (state_55033[(2)]);
var state_55033__$1 = state_55033;
var statearr_55091_56213 = state_55033__$1;
(statearr_55091_56213[(2)] = inst_54964);

(statearr_55091_56213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (5))){
var inst_54910 = cljs.core.deref(cs);
var inst_54911 = cljs.core.seq(inst_54910);
var inst_54912 = inst_54911;
var inst_54913 = null;
var inst_54914 = (0);
var inst_54915 = (0);
var state_55033__$1 = (function (){var statearr_55092 = state_55033;
(statearr_55092[(14)] = inst_54912);

(statearr_55092[(15)] = inst_54913);

(statearr_55092[(16)] = inst_54914);

(statearr_55092[(17)] = inst_54915);

return statearr_55092;
})();
var statearr_55093_56214 = state_55033__$1;
(statearr_55093_56214[(2)] = null);

(statearr_55093_56214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (14))){
var state_55033__$1 = state_55033;
var statearr_55094_56215 = state_55033__$1;
(statearr_55094_56215[(2)] = null);

(statearr_55094_56215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (45))){
var inst_55023 = (state_55033[(2)]);
var state_55033__$1 = state_55033;
var statearr_55095_56216 = state_55033__$1;
(statearr_55095_56216[(2)] = inst_55023);

(statearr_55095_56216[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (26))){
var inst_54967 = (state_55033[(27)]);
var inst_55019 = (state_55033[(2)]);
var inst_55020 = cljs.core.seq(inst_54967);
var state_55033__$1 = (function (){var statearr_55096 = state_55033;
(statearr_55096[(29)] = inst_55019);

return statearr_55096;
})();
if(inst_55020){
var statearr_55097_56217 = state_55033__$1;
(statearr_55097_56217[(1)] = (42));

} else {
var statearr_55098_56218 = state_55033__$1;
(statearr_55098_56218[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (16))){
var inst_54934 = (state_55033[(7)]);
var inst_54936 = cljs.core.chunked_seq_QMARK_(inst_54934);
var state_55033__$1 = state_55033;
if(inst_54936){
var statearr_55099_56219 = state_55033__$1;
(statearr_55099_56219[(1)] = (19));

} else {
var statearr_55100_56220 = state_55033__$1;
(statearr_55100_56220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (38))){
var inst_55012 = (state_55033[(2)]);
var state_55033__$1 = state_55033;
var statearr_55101_56221 = state_55033__$1;
(statearr_55101_56221[(2)] = inst_55012);

(statearr_55101_56221[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (30))){
var state_55033__$1 = state_55033;
var statearr_55102_56222 = state_55033__$1;
(statearr_55102_56222[(2)] = null);

(statearr_55102_56222[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (10))){
var inst_54913 = (state_55033[(15)]);
var inst_54915 = (state_55033[(17)]);
var inst_54923 = cljs.core._nth(inst_54913,inst_54915);
var inst_54924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54923,(0),null);
var inst_54925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54923,(1),null);
var state_55033__$1 = (function (){var statearr_55103 = state_55033;
(statearr_55103[(24)] = inst_54924);

return statearr_55103;
})();
if(cljs.core.truth_(inst_54925)){
var statearr_55104_56223 = state_55033__$1;
(statearr_55104_56223[(1)] = (13));

} else {
var statearr_55105_56224 = state_55033__$1;
(statearr_55105_56224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (18))){
var inst_54960 = (state_55033[(2)]);
var state_55033__$1 = state_55033;
var statearr_55106_56225 = state_55033__$1;
(statearr_55106_56225[(2)] = inst_54960);

(statearr_55106_56225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (42))){
var state_55033__$1 = state_55033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55033__$1,(45),dchan);
} else {
if((state_val_55034 === (37))){
var inst_54993 = (state_55033[(23)]);
var inst_55002 = (state_55033[(22)]);
var inst_54903 = (state_55033[(12)]);
var inst_55002__$1 = cljs.core.first(inst_54993);
var inst_55003 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55002__$1,inst_54903,done);
var state_55033__$1 = (function (){var statearr_55107 = state_55033;
(statearr_55107[(22)] = inst_55002__$1);

return statearr_55107;
})();
if(cljs.core.truth_(inst_55003)){
var statearr_55108_56226 = state_55033__$1;
(statearr_55108_56226[(1)] = (39));

} else {
var statearr_55109_56227 = state_55033__$1;
(statearr_55109_56227[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55034 === (8))){
var inst_54915 = (state_55033[(17)]);
var inst_54914 = (state_55033[(16)]);
var inst_54917 = (inst_54915 < inst_54914);
var inst_54918 = inst_54917;
var state_55033__$1 = state_55033;
if(cljs.core.truth_(inst_54918)){
var statearr_55110_56232 = state_55033__$1;
(statearr_55110_56232[(1)] = (10));

} else {
var statearr_55111_56233 = state_55033__$1;
(statearr_55111_56233[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__54213__auto__ = null;
var cljs$core$async$mult_$_state_machine__54213__auto____0 = (function (){
var statearr_55112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55112[(0)] = cljs$core$async$mult_$_state_machine__54213__auto__);

(statearr_55112[(1)] = (1));

return statearr_55112;
});
var cljs$core$async$mult_$_state_machine__54213__auto____1 = (function (state_55033){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_55033);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e55113){var ex__54216__auto__ = e55113;
var statearr_55114_56238 = state_55033;
(statearr_55114_56238[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_55033[(4)]))){
var statearr_55115_56239 = state_55033;
(statearr_55115_56239[(1)] = cljs.core.first((state_55033[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56240 = state_55033;
state_55033 = G__56240;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54213__auto__ = function(state_55033){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54213__auto____1.call(this,state_55033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54213__auto____0;
cljs$core$async$mult_$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54213__auto____1;
return cljs$core$async$mult_$_state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_55116 = f__54288__auto__();
(statearr_55116[(6)] = c__54287__auto___56161);

return statearr_55116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
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
var G__55118 = arguments.length;
switch (G__55118) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_56246 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_56246(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_56247 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_56247(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_56248 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_56248(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_56249 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_56249(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_56250 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_56250(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___56251 = arguments.length;
var i__5750__auto___56253 = (0);
while(true){
if((i__5750__auto___56253 < len__5749__auto___56251)){
args__5755__auto__.push((arguments[i__5750__auto___56253]));

var G__56254 = (i__5750__auto___56253 + (1));
i__5750__auto___56253 = G__56254;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55123){
var map__55124 = p__55123;
var map__55124__$1 = cljs.core.__destructure_map(map__55124);
var opts = map__55124__$1;
var statearr_55125_56256 = state;
(statearr_55125_56256[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_55126_56260 = state;
(statearr_55126_56260[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_55127_56261 = state;
(statearr_55127_56261[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55119){
var G__55120 = cljs.core.first(seq55119);
var seq55119__$1 = cljs.core.next(seq55119);
var G__55121 = cljs.core.first(seq55119__$1);
var seq55119__$2 = cljs.core.next(seq55119__$1);
var G__55122 = cljs.core.first(seq55119__$2);
var seq55119__$3 = cljs.core.next(seq55119__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55120,G__55121,G__55122,seq55119__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55128 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55129){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta55129 = meta55129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55130,meta55129__$1){
var self__ = this;
var _55130__$1 = this;
return (new cljs.core.async.t_cljs$core$async55128(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55129__$1));
}));

(cljs.core.async.t_cljs$core$async55128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55130){
var self__ = this;
var _55130__$1 = this;
return self__.meta55129;
}));

(cljs.core.async.t_cljs$core$async55128.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async55128.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55128.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55128.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55128.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55128.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55128.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55129","meta55129",589421959,null)], null);
}));

(cljs.core.async.t_cljs$core$async55128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55128");

(cljs.core.async.t_cljs$core$async55128.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55128.
 */
cljs.core.async.__GT_t_cljs$core$async55128 = (function cljs$core$async$__GT_t_cljs$core$async55128(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55129){
return (new cljs.core.async.t_cljs$core$async55128(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55129));
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
var m = (new cljs.core.async.t_cljs$core$async55128(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__54287__auto___56270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_55198){
var state_val_55199 = (state_55198[(1)]);
if((state_val_55199 === (7))){
var inst_55158 = (state_55198[(2)]);
var state_55198__$1 = state_55198;
if(cljs.core.truth_(inst_55158)){
var statearr_55200_56271 = state_55198__$1;
(statearr_55200_56271[(1)] = (8));

} else {
var statearr_55201_56272 = state_55198__$1;
(statearr_55201_56272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (20))){
var inst_55151 = (state_55198[(7)]);
var state_55198__$1 = state_55198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55198__$1,(23),out,inst_55151);
} else {
if((state_val_55199 === (1))){
var inst_55134 = calc_state();
var inst_55135 = cljs.core.__destructure_map(inst_55134);
var inst_55136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55135,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55135,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55135,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55139 = inst_55134;
var state_55198__$1 = (function (){var statearr_55202 = state_55198;
(statearr_55202[(8)] = inst_55136);

(statearr_55202[(9)] = inst_55137);

(statearr_55202[(10)] = inst_55138);

(statearr_55202[(11)] = inst_55139);

return statearr_55202;
})();
var statearr_55203_56277 = state_55198__$1;
(statearr_55203_56277[(2)] = null);

(statearr_55203_56277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (24))){
var inst_55142 = (state_55198[(12)]);
var inst_55139 = inst_55142;
var state_55198__$1 = (function (){var statearr_55204 = state_55198;
(statearr_55204[(11)] = inst_55139);

return statearr_55204;
})();
var statearr_55205_56278 = state_55198__$1;
(statearr_55205_56278[(2)] = null);

(statearr_55205_56278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (4))){
var inst_55151 = (state_55198[(7)]);
var inst_55153 = (state_55198[(13)]);
var inst_55150 = (state_55198[(2)]);
var inst_55151__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55150,(0),null);
var inst_55152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55150,(1),null);
var inst_55153__$1 = (inst_55151__$1 == null);
var state_55198__$1 = (function (){var statearr_55206 = state_55198;
(statearr_55206[(7)] = inst_55151__$1);

(statearr_55206[(14)] = inst_55152);

(statearr_55206[(13)] = inst_55153__$1);

return statearr_55206;
})();
if(cljs.core.truth_(inst_55153__$1)){
var statearr_55207_56279 = state_55198__$1;
(statearr_55207_56279[(1)] = (5));

} else {
var statearr_55208_56280 = state_55198__$1;
(statearr_55208_56280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (15))){
var inst_55143 = (state_55198[(15)]);
var inst_55172 = (state_55198[(16)]);
var inst_55172__$1 = cljs.core.empty_QMARK_(inst_55143);
var state_55198__$1 = (function (){var statearr_55209 = state_55198;
(statearr_55209[(16)] = inst_55172__$1);

return statearr_55209;
})();
if(inst_55172__$1){
var statearr_55210_56282 = state_55198__$1;
(statearr_55210_56282[(1)] = (17));

} else {
var statearr_55211_56286 = state_55198__$1;
(statearr_55211_56286[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (21))){
var inst_55142 = (state_55198[(12)]);
var inst_55139 = inst_55142;
var state_55198__$1 = (function (){var statearr_55212 = state_55198;
(statearr_55212[(11)] = inst_55139);

return statearr_55212;
})();
var statearr_55213_56287 = state_55198__$1;
(statearr_55213_56287[(2)] = null);

(statearr_55213_56287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (13))){
var inst_55165 = (state_55198[(2)]);
var inst_55166 = calc_state();
var inst_55139 = inst_55166;
var state_55198__$1 = (function (){var statearr_55214 = state_55198;
(statearr_55214[(17)] = inst_55165);

(statearr_55214[(11)] = inst_55139);

return statearr_55214;
})();
var statearr_55215_56288 = state_55198__$1;
(statearr_55215_56288[(2)] = null);

(statearr_55215_56288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (22))){
var inst_55192 = (state_55198[(2)]);
var state_55198__$1 = state_55198;
var statearr_55216_56292 = state_55198__$1;
(statearr_55216_56292[(2)] = inst_55192);

(statearr_55216_56292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (6))){
var inst_55152 = (state_55198[(14)]);
var inst_55156 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55152,change);
var state_55198__$1 = state_55198;
var statearr_55217_56294 = state_55198__$1;
(statearr_55217_56294[(2)] = inst_55156);

(statearr_55217_56294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (25))){
var state_55198__$1 = state_55198;
var statearr_55218_56296 = state_55198__$1;
(statearr_55218_56296[(2)] = null);

(statearr_55218_56296[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (17))){
var inst_55144 = (state_55198[(18)]);
var inst_55152 = (state_55198[(14)]);
var inst_55174 = (inst_55144.cljs$core$IFn$_invoke$arity$1 ? inst_55144.cljs$core$IFn$_invoke$arity$1(inst_55152) : inst_55144.call(null,inst_55152));
var inst_55175 = cljs.core.not(inst_55174);
var state_55198__$1 = state_55198;
var statearr_55219_56297 = state_55198__$1;
(statearr_55219_56297[(2)] = inst_55175);

(statearr_55219_56297[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (3))){
var inst_55196 = (state_55198[(2)]);
var state_55198__$1 = state_55198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55198__$1,inst_55196);
} else {
if((state_val_55199 === (12))){
var state_55198__$1 = state_55198;
var statearr_55220_56298 = state_55198__$1;
(statearr_55220_56298[(2)] = null);

(statearr_55220_56298[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (2))){
var inst_55139 = (state_55198[(11)]);
var inst_55142 = (state_55198[(12)]);
var inst_55142__$1 = cljs.core.__destructure_map(inst_55139);
var inst_55143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55142__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55142__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55142__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55198__$1 = (function (){var statearr_55221 = state_55198;
(statearr_55221[(12)] = inst_55142__$1);

(statearr_55221[(15)] = inst_55143);

(statearr_55221[(18)] = inst_55144);

return statearr_55221;
})();
return cljs.core.async.ioc_alts_BANG_(state_55198__$1,(4),inst_55145);
} else {
if((state_val_55199 === (23))){
var inst_55183 = (state_55198[(2)]);
var state_55198__$1 = state_55198;
if(cljs.core.truth_(inst_55183)){
var statearr_55222_56302 = state_55198__$1;
(statearr_55222_56302[(1)] = (24));

} else {
var statearr_55223_56303 = state_55198__$1;
(statearr_55223_56303[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (19))){
var inst_55178 = (state_55198[(2)]);
var state_55198__$1 = state_55198;
var statearr_55224_56307 = state_55198__$1;
(statearr_55224_56307[(2)] = inst_55178);

(statearr_55224_56307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (11))){
var inst_55152 = (state_55198[(14)]);
var inst_55162 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_55152);
var state_55198__$1 = state_55198;
var statearr_55225_56308 = state_55198__$1;
(statearr_55225_56308[(2)] = inst_55162);

(statearr_55225_56308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (9))){
var inst_55143 = (state_55198[(15)]);
var inst_55152 = (state_55198[(14)]);
var inst_55169 = (state_55198[(19)]);
var inst_55169__$1 = (inst_55143.cljs$core$IFn$_invoke$arity$1 ? inst_55143.cljs$core$IFn$_invoke$arity$1(inst_55152) : inst_55143.call(null,inst_55152));
var state_55198__$1 = (function (){var statearr_55226 = state_55198;
(statearr_55226[(19)] = inst_55169__$1);

return statearr_55226;
})();
if(cljs.core.truth_(inst_55169__$1)){
var statearr_55227_56309 = state_55198__$1;
(statearr_55227_56309[(1)] = (14));

} else {
var statearr_55228_56310 = state_55198__$1;
(statearr_55228_56310[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (5))){
var inst_55153 = (state_55198[(13)]);
var state_55198__$1 = state_55198;
var statearr_55229_56311 = state_55198__$1;
(statearr_55229_56311[(2)] = inst_55153);

(statearr_55229_56311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (14))){
var inst_55169 = (state_55198[(19)]);
var state_55198__$1 = state_55198;
var statearr_55230_56315 = state_55198__$1;
(statearr_55230_56315[(2)] = inst_55169);

(statearr_55230_56315[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (26))){
var inst_55188 = (state_55198[(2)]);
var state_55198__$1 = state_55198;
var statearr_55231_56316 = state_55198__$1;
(statearr_55231_56316[(2)] = inst_55188);

(statearr_55231_56316[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (16))){
var inst_55180 = (state_55198[(2)]);
var state_55198__$1 = state_55198;
if(cljs.core.truth_(inst_55180)){
var statearr_55232_56319 = state_55198__$1;
(statearr_55232_56319[(1)] = (20));

} else {
var statearr_55233_56321 = state_55198__$1;
(statearr_55233_56321[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (10))){
var inst_55194 = (state_55198[(2)]);
var state_55198__$1 = state_55198;
var statearr_55234_56325 = state_55198__$1;
(statearr_55234_56325[(2)] = inst_55194);

(statearr_55234_56325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (18))){
var inst_55172 = (state_55198[(16)]);
var state_55198__$1 = state_55198;
var statearr_55235_56326 = state_55198__$1;
(statearr_55235_56326[(2)] = inst_55172);

(statearr_55235_56326[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55199 === (8))){
var inst_55151 = (state_55198[(7)]);
var inst_55160 = (inst_55151 == null);
var state_55198__$1 = state_55198;
if(cljs.core.truth_(inst_55160)){
var statearr_55236_56327 = state_55198__$1;
(statearr_55236_56327[(1)] = (11));

} else {
var statearr_55237_56328 = state_55198__$1;
(statearr_55237_56328[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__54213__auto__ = null;
var cljs$core$async$mix_$_state_machine__54213__auto____0 = (function (){
var statearr_55238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55238[(0)] = cljs$core$async$mix_$_state_machine__54213__auto__);

(statearr_55238[(1)] = (1));

return statearr_55238;
});
var cljs$core$async$mix_$_state_machine__54213__auto____1 = (function (state_55198){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_55198);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e55239){var ex__54216__auto__ = e55239;
var statearr_55240_56329 = state_55198;
(statearr_55240_56329[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_55198[(4)]))){
var statearr_55241_56331 = state_55198;
(statearr_55241_56331[(1)] = cljs.core.first((state_55198[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56335 = state_55198;
state_55198 = G__56335;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54213__auto__ = function(state_55198){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54213__auto____1.call(this,state_55198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54213__auto____0;
cljs$core$async$mix_$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54213__auto____1;
return cljs$core$async$mix_$_state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_55242 = f__54288__auto__();
(statearr_55242[(6)] = c__54287__auto___56270);

return statearr_55242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_56338 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_56338(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_56343 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_56343(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_56344 = (function() {
var G__56345 = null;
var G__56345__1 = (function (p){
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
var G__56345__2 = (function (p,v){
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
G__56345 = function(p,v){
switch(arguments.length){
case 1:
return G__56345__1.call(this,p);
case 2:
return G__56345__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56345.cljs$core$IFn$_invoke$arity$1 = G__56345__1;
G__56345.cljs$core$IFn$_invoke$arity$2 = G__56345__2;
return G__56345;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55244 = arguments.length;
switch (G__55244) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56344(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56344(p,v);
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
cljs.core.async.t_cljs$core$async55248 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55249){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55249 = meta55249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55250,meta55249__$1){
var self__ = this;
var _55250__$1 = this;
return (new cljs.core.async.t_cljs$core$async55248(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55249__$1));
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55250){
var self__ = this;
var _55250__$1 = this;
return self__.meta55249;
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async55248.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async55248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55249","meta55249",-482684475,null)], null);
}));

(cljs.core.async.t_cljs$core$async55248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55248");

(cljs.core.async.t_cljs$core$async55248.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55248.
 */
cljs.core.async.__GT_t_cljs$core$async55248 = (function cljs$core$async$__GT_t_cljs$core$async55248(ch,topic_fn,buf_fn,mults,ensure_mult,meta55249){
return (new cljs.core.async.t_cljs$core$async55248(ch,topic_fn,buf_fn,mults,ensure_mult,meta55249));
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
var G__55247 = arguments.length;
switch (G__55247) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__55245_SHARP_){
if(cljs.core.truth_((p1__55245_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55245_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__55245_SHARP_.call(null,topic)))){
return p1__55245_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55245_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async55248(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__54287__auto___56353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_55322){
var state_val_55323 = (state_55322[(1)]);
if((state_val_55323 === (7))){
var inst_55318 = (state_55322[(2)]);
var state_55322__$1 = state_55322;
var statearr_55324_56354 = state_55322__$1;
(statearr_55324_56354[(2)] = inst_55318);

(statearr_55324_56354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (20))){
var state_55322__$1 = state_55322;
var statearr_55325_56355 = state_55322__$1;
(statearr_55325_56355[(2)] = null);

(statearr_55325_56355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (1))){
var state_55322__$1 = state_55322;
var statearr_55326_56356 = state_55322__$1;
(statearr_55326_56356[(2)] = null);

(statearr_55326_56356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (24))){
var inst_55301 = (state_55322[(7)]);
var inst_55310 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_55301);
var state_55322__$1 = state_55322;
var statearr_55327_56361 = state_55322__$1;
(statearr_55327_56361[(2)] = inst_55310);

(statearr_55327_56361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (4))){
var inst_55253 = (state_55322[(8)]);
var inst_55253__$1 = (state_55322[(2)]);
var inst_55254 = (inst_55253__$1 == null);
var state_55322__$1 = (function (){var statearr_55328 = state_55322;
(statearr_55328[(8)] = inst_55253__$1);

return statearr_55328;
})();
if(cljs.core.truth_(inst_55254)){
var statearr_55329_56362 = state_55322__$1;
(statearr_55329_56362[(1)] = (5));

} else {
var statearr_55330_56363 = state_55322__$1;
(statearr_55330_56363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (15))){
var inst_55295 = (state_55322[(2)]);
var state_55322__$1 = state_55322;
var statearr_55331_56364 = state_55322__$1;
(statearr_55331_56364[(2)] = inst_55295);

(statearr_55331_56364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (21))){
var inst_55315 = (state_55322[(2)]);
var state_55322__$1 = (function (){var statearr_55332 = state_55322;
(statearr_55332[(9)] = inst_55315);

return statearr_55332;
})();
var statearr_55333_56365 = state_55322__$1;
(statearr_55333_56365[(2)] = null);

(statearr_55333_56365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (13))){
var inst_55277 = (state_55322[(10)]);
var inst_55279 = cljs.core.chunked_seq_QMARK_(inst_55277);
var state_55322__$1 = state_55322;
if(inst_55279){
var statearr_55334_56366 = state_55322__$1;
(statearr_55334_56366[(1)] = (16));

} else {
var statearr_55335_56367 = state_55322__$1;
(statearr_55335_56367[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (22))){
var inst_55307 = (state_55322[(2)]);
var state_55322__$1 = state_55322;
if(cljs.core.truth_(inst_55307)){
var statearr_55336_56368 = state_55322__$1;
(statearr_55336_56368[(1)] = (23));

} else {
var statearr_55337_56369 = state_55322__$1;
(statearr_55337_56369[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (6))){
var inst_55253 = (state_55322[(8)]);
var inst_55301 = (state_55322[(7)]);
var inst_55303 = (state_55322[(11)]);
var inst_55301__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_55253) : topic_fn.call(null,inst_55253));
var inst_55302 = cljs.core.deref(mults);
var inst_55303__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55302,inst_55301__$1);
var state_55322__$1 = (function (){var statearr_55338 = state_55322;
(statearr_55338[(7)] = inst_55301__$1);

(statearr_55338[(11)] = inst_55303__$1);

return statearr_55338;
})();
if(cljs.core.truth_(inst_55303__$1)){
var statearr_55339_56374 = state_55322__$1;
(statearr_55339_56374[(1)] = (19));

} else {
var statearr_55340_56375 = state_55322__$1;
(statearr_55340_56375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (25))){
var inst_55312 = (state_55322[(2)]);
var state_55322__$1 = state_55322;
var statearr_55341_56376 = state_55322__$1;
(statearr_55341_56376[(2)] = inst_55312);

(statearr_55341_56376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (17))){
var inst_55277 = (state_55322[(10)]);
var inst_55286 = cljs.core.first(inst_55277);
var inst_55287 = cljs.core.async.muxch_STAR_(inst_55286);
var inst_55288 = cljs.core.async.close_BANG_(inst_55287);
var inst_55289 = cljs.core.next(inst_55277);
var inst_55263 = inst_55289;
var inst_55264 = null;
var inst_55265 = (0);
var inst_55266 = (0);
var state_55322__$1 = (function (){var statearr_55342 = state_55322;
(statearr_55342[(12)] = inst_55288);

(statearr_55342[(13)] = inst_55263);

(statearr_55342[(14)] = inst_55264);

(statearr_55342[(15)] = inst_55265);

(statearr_55342[(16)] = inst_55266);

return statearr_55342;
})();
var statearr_55343_56377 = state_55322__$1;
(statearr_55343_56377[(2)] = null);

(statearr_55343_56377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (3))){
var inst_55320 = (state_55322[(2)]);
var state_55322__$1 = state_55322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55322__$1,inst_55320);
} else {
if((state_val_55323 === (12))){
var inst_55297 = (state_55322[(2)]);
var state_55322__$1 = state_55322;
var statearr_55344_56378 = state_55322__$1;
(statearr_55344_56378[(2)] = inst_55297);

(statearr_55344_56378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (2))){
var state_55322__$1 = state_55322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55322__$1,(4),ch);
} else {
if((state_val_55323 === (23))){
var state_55322__$1 = state_55322;
var statearr_55345_56380 = state_55322__$1;
(statearr_55345_56380[(2)] = null);

(statearr_55345_56380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (19))){
var inst_55303 = (state_55322[(11)]);
var inst_55253 = (state_55322[(8)]);
var inst_55305 = cljs.core.async.muxch_STAR_(inst_55303);
var state_55322__$1 = state_55322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55322__$1,(22),inst_55305,inst_55253);
} else {
if((state_val_55323 === (11))){
var inst_55263 = (state_55322[(13)]);
var inst_55277 = (state_55322[(10)]);
var inst_55277__$1 = cljs.core.seq(inst_55263);
var state_55322__$1 = (function (){var statearr_55346 = state_55322;
(statearr_55346[(10)] = inst_55277__$1);

return statearr_55346;
})();
if(inst_55277__$1){
var statearr_55347_56381 = state_55322__$1;
(statearr_55347_56381[(1)] = (13));

} else {
var statearr_55348_56382 = state_55322__$1;
(statearr_55348_56382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (9))){
var inst_55299 = (state_55322[(2)]);
var state_55322__$1 = state_55322;
var statearr_55349_56383 = state_55322__$1;
(statearr_55349_56383[(2)] = inst_55299);

(statearr_55349_56383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (5))){
var inst_55260 = cljs.core.deref(mults);
var inst_55261 = cljs.core.vals(inst_55260);
var inst_55262 = cljs.core.seq(inst_55261);
var inst_55263 = inst_55262;
var inst_55264 = null;
var inst_55265 = (0);
var inst_55266 = (0);
var state_55322__$1 = (function (){var statearr_55350 = state_55322;
(statearr_55350[(13)] = inst_55263);

(statearr_55350[(14)] = inst_55264);

(statearr_55350[(15)] = inst_55265);

(statearr_55350[(16)] = inst_55266);

return statearr_55350;
})();
var statearr_55351_56385 = state_55322__$1;
(statearr_55351_56385[(2)] = null);

(statearr_55351_56385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (14))){
var state_55322__$1 = state_55322;
var statearr_55355_56386 = state_55322__$1;
(statearr_55355_56386[(2)] = null);

(statearr_55355_56386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (16))){
var inst_55277 = (state_55322[(10)]);
var inst_55281 = cljs.core.chunk_first(inst_55277);
var inst_55282 = cljs.core.chunk_rest(inst_55277);
var inst_55283 = cljs.core.count(inst_55281);
var inst_55263 = inst_55282;
var inst_55264 = inst_55281;
var inst_55265 = inst_55283;
var inst_55266 = (0);
var state_55322__$1 = (function (){var statearr_55356 = state_55322;
(statearr_55356[(13)] = inst_55263);

(statearr_55356[(14)] = inst_55264);

(statearr_55356[(15)] = inst_55265);

(statearr_55356[(16)] = inst_55266);

return statearr_55356;
})();
var statearr_55357_56391 = state_55322__$1;
(statearr_55357_56391[(2)] = null);

(statearr_55357_56391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (10))){
var inst_55264 = (state_55322[(14)]);
var inst_55266 = (state_55322[(16)]);
var inst_55263 = (state_55322[(13)]);
var inst_55265 = (state_55322[(15)]);
var inst_55271 = cljs.core._nth(inst_55264,inst_55266);
var inst_55272 = cljs.core.async.muxch_STAR_(inst_55271);
var inst_55273 = cljs.core.async.close_BANG_(inst_55272);
var inst_55274 = (inst_55266 + (1));
var tmp55352 = inst_55263;
var tmp55353 = inst_55264;
var tmp55354 = inst_55265;
var inst_55263__$1 = tmp55352;
var inst_55264__$1 = tmp55353;
var inst_55265__$1 = tmp55354;
var inst_55266__$1 = inst_55274;
var state_55322__$1 = (function (){var statearr_55358 = state_55322;
(statearr_55358[(17)] = inst_55273);

(statearr_55358[(13)] = inst_55263__$1);

(statearr_55358[(14)] = inst_55264__$1);

(statearr_55358[(15)] = inst_55265__$1);

(statearr_55358[(16)] = inst_55266__$1);

return statearr_55358;
})();
var statearr_55359_56392 = state_55322__$1;
(statearr_55359_56392[(2)] = null);

(statearr_55359_56392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (18))){
var inst_55292 = (state_55322[(2)]);
var state_55322__$1 = state_55322;
var statearr_55360_56393 = state_55322__$1;
(statearr_55360_56393[(2)] = inst_55292);

(statearr_55360_56393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55323 === (8))){
var inst_55266 = (state_55322[(16)]);
var inst_55265 = (state_55322[(15)]);
var inst_55268 = (inst_55266 < inst_55265);
var inst_55269 = inst_55268;
var state_55322__$1 = state_55322;
if(cljs.core.truth_(inst_55269)){
var statearr_55361_56394 = state_55322__$1;
(statearr_55361_56394[(1)] = (10));

} else {
var statearr_55362_56395 = state_55322__$1;
(statearr_55362_56395[(1)] = (11));

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
var cljs$core$async$state_machine__54213__auto__ = null;
var cljs$core$async$state_machine__54213__auto____0 = (function (){
var statearr_55363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55363[(0)] = cljs$core$async$state_machine__54213__auto__);

(statearr_55363[(1)] = (1));

return statearr_55363;
});
var cljs$core$async$state_machine__54213__auto____1 = (function (state_55322){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_55322);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e55364){var ex__54216__auto__ = e55364;
var statearr_55365_56396 = state_55322;
(statearr_55365_56396[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_55322[(4)]))){
var statearr_55366_56397 = state_55322;
(statearr_55366_56397[(1)] = cljs.core.first((state_55322[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56398 = state_55322;
state_55322 = G__56398;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$state_machine__54213__auto__ = function(state_55322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54213__auto____1.call(this,state_55322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54213__auto____0;
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54213__auto____1;
return cljs$core$async$state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_55367 = f__54288__auto__();
(statearr_55367[(6)] = c__54287__auto___56353);

return statearr_55367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
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
var G__55369 = arguments.length;
switch (G__55369) {
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
var G__55371 = arguments.length;
switch (G__55371) {
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
var G__55373 = arguments.length;
switch (G__55373) {
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
var c__54287__auto___56406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_55416){
var state_val_55417 = (state_55416[(1)]);
if((state_val_55417 === (7))){
var state_55416__$1 = state_55416;
var statearr_55418_56407 = state_55416__$1;
(statearr_55418_56407[(2)] = null);

(statearr_55418_56407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (1))){
var state_55416__$1 = state_55416;
var statearr_55419_56408 = state_55416__$1;
(statearr_55419_56408[(2)] = null);

(statearr_55419_56408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (4))){
var inst_55377 = (state_55416[(7)]);
var inst_55376 = (state_55416[(8)]);
var inst_55379 = (inst_55377 < inst_55376);
var state_55416__$1 = state_55416;
if(cljs.core.truth_(inst_55379)){
var statearr_55420_56409 = state_55416__$1;
(statearr_55420_56409[(1)] = (6));

} else {
var statearr_55421_56410 = state_55416__$1;
(statearr_55421_56410[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (15))){
var inst_55402 = (state_55416[(9)]);
var inst_55407 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55402);
var state_55416__$1 = state_55416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55416__$1,(17),out,inst_55407);
} else {
if((state_val_55417 === (13))){
var inst_55402 = (state_55416[(9)]);
var inst_55402__$1 = (state_55416[(2)]);
var inst_55403 = cljs.core.some(cljs.core.nil_QMARK_,inst_55402__$1);
var state_55416__$1 = (function (){var statearr_55422 = state_55416;
(statearr_55422[(9)] = inst_55402__$1);

return statearr_55422;
})();
if(cljs.core.truth_(inst_55403)){
var statearr_55423_56411 = state_55416__$1;
(statearr_55423_56411[(1)] = (14));

} else {
var statearr_55424_56412 = state_55416__$1;
(statearr_55424_56412[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (6))){
var state_55416__$1 = state_55416;
var statearr_55425_56413 = state_55416__$1;
(statearr_55425_56413[(2)] = null);

(statearr_55425_56413[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (17))){
var inst_55409 = (state_55416[(2)]);
var state_55416__$1 = (function (){var statearr_55427 = state_55416;
(statearr_55427[(10)] = inst_55409);

return statearr_55427;
})();
var statearr_55428_56414 = state_55416__$1;
(statearr_55428_56414[(2)] = null);

(statearr_55428_56414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (3))){
var inst_55414 = (state_55416[(2)]);
var state_55416__$1 = state_55416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55416__$1,inst_55414);
} else {
if((state_val_55417 === (12))){
var _ = (function (){var statearr_55429 = state_55416;
(statearr_55429[(4)] = cljs.core.rest((state_55416[(4)])));

return statearr_55429;
})();
var state_55416__$1 = state_55416;
var ex55426 = (state_55416__$1[(2)]);
var statearr_55430_56415 = state_55416__$1;
(statearr_55430_56415[(5)] = ex55426);


if((ex55426 instanceof Object)){
var statearr_55431_56416 = state_55416__$1;
(statearr_55431_56416[(1)] = (11));

(statearr_55431_56416[(5)] = null);

} else {
throw ex55426;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (2))){
var inst_55375 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55376 = cnt;
var inst_55377 = (0);
var state_55416__$1 = (function (){var statearr_55432 = state_55416;
(statearr_55432[(11)] = inst_55375);

(statearr_55432[(8)] = inst_55376);

(statearr_55432[(7)] = inst_55377);

return statearr_55432;
})();
var statearr_55433_56421 = state_55416__$1;
(statearr_55433_56421[(2)] = null);

(statearr_55433_56421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (11))){
var inst_55381 = (state_55416[(2)]);
var inst_55382 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55416__$1 = (function (){var statearr_55434 = state_55416;
(statearr_55434[(12)] = inst_55381);

return statearr_55434;
})();
var statearr_55435_56422 = state_55416__$1;
(statearr_55435_56422[(2)] = inst_55382);

(statearr_55435_56422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (9))){
var inst_55377 = (state_55416[(7)]);
var _ = (function (){var statearr_55436 = state_55416;
(statearr_55436[(4)] = cljs.core.cons((12),(state_55416[(4)])));

return statearr_55436;
})();
var inst_55388 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55377) : chs__$1.call(null,inst_55377));
var inst_55389 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55377) : done.call(null,inst_55377));
var inst_55390 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55388,inst_55389);
var ___$1 = (function (){var statearr_55437 = state_55416;
(statearr_55437[(4)] = cljs.core.rest((state_55416[(4)])));

return statearr_55437;
})();
var state_55416__$1 = state_55416;
var statearr_55438_56423 = state_55416__$1;
(statearr_55438_56423[(2)] = inst_55390);

(statearr_55438_56423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (5))){
var inst_55400 = (state_55416[(2)]);
var state_55416__$1 = (function (){var statearr_55439 = state_55416;
(statearr_55439[(13)] = inst_55400);

return statearr_55439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55416__$1,(13),dchan);
} else {
if((state_val_55417 === (14))){
var inst_55405 = cljs.core.async.close_BANG_(out);
var state_55416__$1 = state_55416;
var statearr_55440_56424 = state_55416__$1;
(statearr_55440_56424[(2)] = inst_55405);

(statearr_55440_56424[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (16))){
var inst_55412 = (state_55416[(2)]);
var state_55416__$1 = state_55416;
var statearr_55441_56425 = state_55416__$1;
(statearr_55441_56425[(2)] = inst_55412);

(statearr_55441_56425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (10))){
var inst_55377 = (state_55416[(7)]);
var inst_55393 = (state_55416[(2)]);
var inst_55394 = (inst_55377 + (1));
var inst_55377__$1 = inst_55394;
var state_55416__$1 = (function (){var statearr_55442 = state_55416;
(statearr_55442[(14)] = inst_55393);

(statearr_55442[(7)] = inst_55377__$1);

return statearr_55442;
})();
var statearr_55443_56426 = state_55416__$1;
(statearr_55443_56426[(2)] = null);

(statearr_55443_56426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55417 === (8))){
var inst_55398 = (state_55416[(2)]);
var state_55416__$1 = state_55416;
var statearr_55444_56427 = state_55416__$1;
(statearr_55444_56427[(2)] = inst_55398);

(statearr_55444_56427[(1)] = (5));


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
var cljs$core$async$state_machine__54213__auto__ = null;
var cljs$core$async$state_machine__54213__auto____0 = (function (){
var statearr_55445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55445[(0)] = cljs$core$async$state_machine__54213__auto__);

(statearr_55445[(1)] = (1));

return statearr_55445;
});
var cljs$core$async$state_machine__54213__auto____1 = (function (state_55416){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_55416);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e55446){var ex__54216__auto__ = e55446;
var statearr_55447_56429 = state_55416;
(statearr_55447_56429[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_55416[(4)]))){
var statearr_55448_56430 = state_55416;
(statearr_55448_56430[(1)] = cljs.core.first((state_55416[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56432 = state_55416;
state_55416 = G__56432;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$state_machine__54213__auto__ = function(state_55416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54213__auto____1.call(this,state_55416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54213__auto____0;
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54213__auto____1;
return cljs$core$async$state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_55449 = f__54288__auto__();
(statearr_55449[(6)] = c__54287__auto___56406);

return statearr_55449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
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
var G__55452 = arguments.length;
switch (G__55452) {
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
var c__54287__auto___56438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_55484){
var state_val_55485 = (state_55484[(1)]);
if((state_val_55485 === (7))){
var inst_55463 = (state_55484[(7)]);
var inst_55464 = (state_55484[(8)]);
var inst_55463__$1 = (state_55484[(2)]);
var inst_55464__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55463__$1,(0),null);
var inst_55465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55463__$1,(1),null);
var inst_55466 = (inst_55464__$1 == null);
var state_55484__$1 = (function (){var statearr_55486 = state_55484;
(statearr_55486[(7)] = inst_55463__$1);

(statearr_55486[(8)] = inst_55464__$1);

(statearr_55486[(9)] = inst_55465);

return statearr_55486;
})();
if(cljs.core.truth_(inst_55466)){
var statearr_55487_56439 = state_55484__$1;
(statearr_55487_56439[(1)] = (8));

} else {
var statearr_55488_56440 = state_55484__$1;
(statearr_55488_56440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55485 === (1))){
var inst_55453 = cljs.core.vec(chs);
var inst_55454 = inst_55453;
var state_55484__$1 = (function (){var statearr_55489 = state_55484;
(statearr_55489[(10)] = inst_55454);

return statearr_55489;
})();
var statearr_55490_56441 = state_55484__$1;
(statearr_55490_56441[(2)] = null);

(statearr_55490_56441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55485 === (4))){
var inst_55454 = (state_55484[(10)]);
var state_55484__$1 = state_55484;
return cljs.core.async.ioc_alts_BANG_(state_55484__$1,(7),inst_55454);
} else {
if((state_val_55485 === (6))){
var inst_55480 = (state_55484[(2)]);
var state_55484__$1 = state_55484;
var statearr_55491_56442 = state_55484__$1;
(statearr_55491_56442[(2)] = inst_55480);

(statearr_55491_56442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55485 === (3))){
var inst_55482 = (state_55484[(2)]);
var state_55484__$1 = state_55484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55484__$1,inst_55482);
} else {
if((state_val_55485 === (2))){
var inst_55454 = (state_55484[(10)]);
var inst_55456 = cljs.core.count(inst_55454);
var inst_55457 = (inst_55456 > (0));
var state_55484__$1 = state_55484;
if(cljs.core.truth_(inst_55457)){
var statearr_55493_56443 = state_55484__$1;
(statearr_55493_56443[(1)] = (4));

} else {
var statearr_55494_56444 = state_55484__$1;
(statearr_55494_56444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55485 === (11))){
var inst_55454 = (state_55484[(10)]);
var inst_55473 = (state_55484[(2)]);
var tmp55492 = inst_55454;
var inst_55454__$1 = tmp55492;
var state_55484__$1 = (function (){var statearr_55495 = state_55484;
(statearr_55495[(11)] = inst_55473);

(statearr_55495[(10)] = inst_55454__$1);

return statearr_55495;
})();
var statearr_55496_56445 = state_55484__$1;
(statearr_55496_56445[(2)] = null);

(statearr_55496_56445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55485 === (9))){
var inst_55464 = (state_55484[(8)]);
var state_55484__$1 = state_55484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55484__$1,(11),out,inst_55464);
} else {
if((state_val_55485 === (5))){
var inst_55478 = cljs.core.async.close_BANG_(out);
var state_55484__$1 = state_55484;
var statearr_55497_56446 = state_55484__$1;
(statearr_55497_56446[(2)] = inst_55478);

(statearr_55497_56446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55485 === (10))){
var inst_55476 = (state_55484[(2)]);
var state_55484__$1 = state_55484;
var statearr_55498_56447 = state_55484__$1;
(statearr_55498_56447[(2)] = inst_55476);

(statearr_55498_56447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55485 === (8))){
var inst_55454 = (state_55484[(10)]);
var inst_55463 = (state_55484[(7)]);
var inst_55464 = (state_55484[(8)]);
var inst_55465 = (state_55484[(9)]);
var inst_55468 = (function (){var cs = inst_55454;
var vec__55459 = inst_55463;
var v = inst_55464;
var c = inst_55465;
return (function (p1__55450_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55450_SHARP_);
});
})();
var inst_55469 = cljs.core.filterv(inst_55468,inst_55454);
var inst_55454__$1 = inst_55469;
var state_55484__$1 = (function (){var statearr_55499 = state_55484;
(statearr_55499[(10)] = inst_55454__$1);

return statearr_55499;
})();
var statearr_55500_56451 = state_55484__$1;
(statearr_55500_56451[(2)] = null);

(statearr_55500_56451[(1)] = (2));


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
var cljs$core$async$state_machine__54213__auto__ = null;
var cljs$core$async$state_machine__54213__auto____0 = (function (){
var statearr_55501 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55501[(0)] = cljs$core$async$state_machine__54213__auto__);

(statearr_55501[(1)] = (1));

return statearr_55501;
});
var cljs$core$async$state_machine__54213__auto____1 = (function (state_55484){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_55484);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e55502){var ex__54216__auto__ = e55502;
var statearr_55503_56452 = state_55484;
(statearr_55503_56452[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_55484[(4)]))){
var statearr_55504_56454 = state_55484;
(statearr_55504_56454[(1)] = cljs.core.first((state_55484[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56455 = state_55484;
state_55484 = G__56455;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$state_machine__54213__auto__ = function(state_55484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54213__auto____1.call(this,state_55484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54213__auto____0;
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54213__auto____1;
return cljs$core$async$state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_55505 = f__54288__auto__();
(statearr_55505[(6)] = c__54287__auto___56438);

return statearr_55505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
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
var G__55507 = arguments.length;
switch (G__55507) {
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
var c__54287__auto___56460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_55531){
var state_val_55532 = (state_55531[(1)]);
if((state_val_55532 === (7))){
var inst_55513 = (state_55531[(7)]);
var inst_55513__$1 = (state_55531[(2)]);
var inst_55514 = (inst_55513__$1 == null);
var inst_55515 = cljs.core.not(inst_55514);
var state_55531__$1 = (function (){var statearr_55533 = state_55531;
(statearr_55533[(7)] = inst_55513__$1);

return statearr_55533;
})();
if(inst_55515){
var statearr_55534_56461 = state_55531__$1;
(statearr_55534_56461[(1)] = (8));

} else {
var statearr_55535_56462 = state_55531__$1;
(statearr_55535_56462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55532 === (1))){
var inst_55508 = (0);
var state_55531__$1 = (function (){var statearr_55536 = state_55531;
(statearr_55536[(8)] = inst_55508);

return statearr_55536;
})();
var statearr_55537_56463 = state_55531__$1;
(statearr_55537_56463[(2)] = null);

(statearr_55537_56463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55532 === (4))){
var state_55531__$1 = state_55531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55531__$1,(7),ch);
} else {
if((state_val_55532 === (6))){
var inst_55526 = (state_55531[(2)]);
var state_55531__$1 = state_55531;
var statearr_55538_56464 = state_55531__$1;
(statearr_55538_56464[(2)] = inst_55526);

(statearr_55538_56464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55532 === (3))){
var inst_55528 = (state_55531[(2)]);
var inst_55529 = cljs.core.async.close_BANG_(out);
var state_55531__$1 = (function (){var statearr_55539 = state_55531;
(statearr_55539[(9)] = inst_55528);

return statearr_55539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55531__$1,inst_55529);
} else {
if((state_val_55532 === (2))){
var inst_55508 = (state_55531[(8)]);
var inst_55510 = (inst_55508 < n);
var state_55531__$1 = state_55531;
if(cljs.core.truth_(inst_55510)){
var statearr_55540_56465 = state_55531__$1;
(statearr_55540_56465[(1)] = (4));

} else {
var statearr_55541_56466 = state_55531__$1;
(statearr_55541_56466[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55532 === (11))){
var inst_55508 = (state_55531[(8)]);
var inst_55518 = (state_55531[(2)]);
var inst_55519 = (inst_55508 + (1));
var inst_55508__$1 = inst_55519;
var state_55531__$1 = (function (){var statearr_55542 = state_55531;
(statearr_55542[(10)] = inst_55518);

(statearr_55542[(8)] = inst_55508__$1);

return statearr_55542;
})();
var statearr_55543_56467 = state_55531__$1;
(statearr_55543_56467[(2)] = null);

(statearr_55543_56467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55532 === (9))){
var state_55531__$1 = state_55531;
var statearr_55544_56468 = state_55531__$1;
(statearr_55544_56468[(2)] = null);

(statearr_55544_56468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55532 === (5))){
var state_55531__$1 = state_55531;
var statearr_55545_56469 = state_55531__$1;
(statearr_55545_56469[(2)] = null);

(statearr_55545_56469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55532 === (10))){
var inst_55523 = (state_55531[(2)]);
var state_55531__$1 = state_55531;
var statearr_55546_56470 = state_55531__$1;
(statearr_55546_56470[(2)] = inst_55523);

(statearr_55546_56470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55532 === (8))){
var inst_55513 = (state_55531[(7)]);
var state_55531__$1 = state_55531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55531__$1,(11),out,inst_55513);
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
var cljs$core$async$state_machine__54213__auto__ = null;
var cljs$core$async$state_machine__54213__auto____0 = (function (){
var statearr_55547 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55547[(0)] = cljs$core$async$state_machine__54213__auto__);

(statearr_55547[(1)] = (1));

return statearr_55547;
});
var cljs$core$async$state_machine__54213__auto____1 = (function (state_55531){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_55531);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e55548){var ex__54216__auto__ = e55548;
var statearr_55549_56471 = state_55531;
(statearr_55549_56471[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_55531[(4)]))){
var statearr_55550_56472 = state_55531;
(statearr_55550_56472[(1)] = cljs.core.first((state_55531[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56473 = state_55531;
state_55531 = G__56473;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$state_machine__54213__auto__ = function(state_55531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54213__auto____1.call(this,state_55531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54213__auto____0;
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54213__auto____1;
return cljs$core$async$state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_55551 = f__54288__auto__();
(statearr_55551[(6)] = c__54287__auto___56460);

return statearr_55551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
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
cljs.core.async.t_cljs$core$async55556 = (function (f,ch,meta55554,_,fn1,meta55557){
this.f = f;
this.ch = ch;
this.meta55554 = meta55554;
this._ = _;
this.fn1 = fn1;
this.meta55557 = meta55557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55558,meta55557__$1){
var self__ = this;
var _55558__$1 = this;
return (new cljs.core.async.t_cljs$core$async55556(self__.f,self__.ch,self__.meta55554,self__._,self__.fn1,meta55557__$1));
}));

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55558){
var self__ = this;
var _55558__$1 = this;
return self__.meta55557;
}));

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__55552_SHARP_){
var G__55559 = (((p1__55552_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__55552_SHARP_) : self__.f.call(null,p1__55552_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__55559) : f1.call(null,G__55559));
});
}));

(cljs.core.async.t_cljs$core$async55556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55554","meta55554",-1919866209,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55553","cljs.core.async/t_cljs$core$async55553",29121341,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55557","meta55557",-715522940,null)], null);
}));

(cljs.core.async.t_cljs$core$async55556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55556");

(cljs.core.async.t_cljs$core$async55556.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55556.
 */
cljs.core.async.__GT_t_cljs$core$async55556 = (function cljs$core$async$__GT_t_cljs$core$async55556(f,ch,meta55554,_,fn1,meta55557){
return (new cljs.core.async.t_cljs$core$async55556(f,ch,meta55554,_,fn1,meta55557));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55553 = (function (f,ch,meta55554){
this.f = f;
this.ch = ch;
this.meta55554 = meta55554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55555,meta55554__$1){
var self__ = this;
var _55555__$1 = this;
return (new cljs.core.async.t_cljs$core$async55553(self__.f,self__.ch,meta55554__$1));
}));

(cljs.core.async.t_cljs$core$async55553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55555){
var self__ = this;
var _55555__$1 = this;
return self__.meta55554;
}));

(cljs.core.async.t_cljs$core$async55553.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55553.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55553.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async55556(self__.f,self__.ch,self__.meta55554,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__55560 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__55560) : self__.f.call(null,G__55560));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55553.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55554","meta55554",-1919866209,null)], null);
}));

(cljs.core.async.t_cljs$core$async55553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55553");

(cljs.core.async.t_cljs$core$async55553.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55553.
 */
cljs.core.async.__GT_t_cljs$core$async55553 = (function cljs$core$async$__GT_t_cljs$core$async55553(f,ch,meta55554){
return (new cljs.core.async.t_cljs$core$async55553(f,ch,meta55554));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55553(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55561 = (function (f,ch,meta55562){
this.f = f;
this.ch = ch;
this.meta55562 = meta55562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55563,meta55562__$1){
var self__ = this;
var _55563__$1 = this;
return (new cljs.core.async.t_cljs$core$async55561(self__.f,self__.ch,meta55562__$1));
}));

(cljs.core.async.t_cljs$core$async55561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55563){
var self__ = this;
var _55563__$1 = this;
return self__.meta55562;
}));

(cljs.core.async.t_cljs$core$async55561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async55561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55562","meta55562",-1969496331,null)], null);
}));

(cljs.core.async.t_cljs$core$async55561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55561");

(cljs.core.async.t_cljs$core$async55561.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55561.
 */
cljs.core.async.__GT_t_cljs$core$async55561 = (function cljs$core$async$__GT_t_cljs$core$async55561(f,ch,meta55562){
return (new cljs.core.async.t_cljs$core$async55561(f,ch,meta55562));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55561(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55564 = (function (p,ch,meta55565){
this.p = p;
this.ch = ch;
this.meta55565 = meta55565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55566,meta55565__$1){
var self__ = this;
var _55566__$1 = this;
return (new cljs.core.async.t_cljs$core$async55564(self__.p,self__.ch,meta55565__$1));
}));

(cljs.core.async.t_cljs$core$async55564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55566){
var self__ = this;
var _55566__$1 = this;
return self__.meta55565;
}));

(cljs.core.async.t_cljs$core$async55564.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55564.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55564.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55564.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55565","meta55565",-1897833977,null)], null);
}));

(cljs.core.async.t_cljs$core$async55564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55564");

(cljs.core.async.t_cljs$core$async55564.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55564.
 */
cljs.core.async.__GT_t_cljs$core$async55564 = (function cljs$core$async$__GT_t_cljs$core$async55564(p,ch,meta55565){
return (new cljs.core.async.t_cljs$core$async55564(p,ch,meta55565));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async55564(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__55568 = arguments.length;
switch (G__55568) {
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
var c__54287__auto___56487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_55589){
var state_val_55590 = (state_55589[(1)]);
if((state_val_55590 === (7))){
var inst_55585 = (state_55589[(2)]);
var state_55589__$1 = state_55589;
var statearr_55591_56488 = state_55589__$1;
(statearr_55591_56488[(2)] = inst_55585);

(statearr_55591_56488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55590 === (1))){
var state_55589__$1 = state_55589;
var statearr_55592_56489 = state_55589__$1;
(statearr_55592_56489[(2)] = null);

(statearr_55592_56489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55590 === (4))){
var inst_55571 = (state_55589[(7)]);
var inst_55571__$1 = (state_55589[(2)]);
var inst_55572 = (inst_55571__$1 == null);
var state_55589__$1 = (function (){var statearr_55593 = state_55589;
(statearr_55593[(7)] = inst_55571__$1);

return statearr_55593;
})();
if(cljs.core.truth_(inst_55572)){
var statearr_55594_56491 = state_55589__$1;
(statearr_55594_56491[(1)] = (5));

} else {
var statearr_55595_56492 = state_55589__$1;
(statearr_55595_56492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55590 === (6))){
var inst_55571 = (state_55589[(7)]);
var inst_55576 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55571) : p.call(null,inst_55571));
var state_55589__$1 = state_55589;
if(cljs.core.truth_(inst_55576)){
var statearr_55596_56493 = state_55589__$1;
(statearr_55596_56493[(1)] = (8));

} else {
var statearr_55597_56494 = state_55589__$1;
(statearr_55597_56494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55590 === (3))){
var inst_55587 = (state_55589[(2)]);
var state_55589__$1 = state_55589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55589__$1,inst_55587);
} else {
if((state_val_55590 === (2))){
var state_55589__$1 = state_55589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55589__$1,(4),ch);
} else {
if((state_val_55590 === (11))){
var inst_55579 = (state_55589[(2)]);
var state_55589__$1 = state_55589;
var statearr_55598_56495 = state_55589__$1;
(statearr_55598_56495[(2)] = inst_55579);

(statearr_55598_56495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55590 === (9))){
var state_55589__$1 = state_55589;
var statearr_55599_56496 = state_55589__$1;
(statearr_55599_56496[(2)] = null);

(statearr_55599_56496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55590 === (5))){
var inst_55574 = cljs.core.async.close_BANG_(out);
var state_55589__$1 = state_55589;
var statearr_55600_56497 = state_55589__$1;
(statearr_55600_56497[(2)] = inst_55574);

(statearr_55600_56497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55590 === (10))){
var inst_55582 = (state_55589[(2)]);
var state_55589__$1 = (function (){var statearr_55601 = state_55589;
(statearr_55601[(8)] = inst_55582);

return statearr_55601;
})();
var statearr_55602_56498 = state_55589__$1;
(statearr_55602_56498[(2)] = null);

(statearr_55602_56498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55590 === (8))){
var inst_55571 = (state_55589[(7)]);
var state_55589__$1 = state_55589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55589__$1,(11),out,inst_55571);
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
var cljs$core$async$state_machine__54213__auto__ = null;
var cljs$core$async$state_machine__54213__auto____0 = (function (){
var statearr_55603 = [null,null,null,null,null,null,null,null,null];
(statearr_55603[(0)] = cljs$core$async$state_machine__54213__auto__);

(statearr_55603[(1)] = (1));

return statearr_55603;
});
var cljs$core$async$state_machine__54213__auto____1 = (function (state_55589){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_55589);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e55604){var ex__54216__auto__ = e55604;
var statearr_55605_56501 = state_55589;
(statearr_55605_56501[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_55589[(4)]))){
var statearr_55606_56502 = state_55589;
(statearr_55606_56502[(1)] = cljs.core.first((state_55589[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56503 = state_55589;
state_55589 = G__56503;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$state_machine__54213__auto__ = function(state_55589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54213__auto____1.call(this,state_55589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54213__auto____0;
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54213__auto____1;
return cljs$core$async$state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_55607 = f__54288__auto__();
(statearr_55607[(6)] = c__54287__auto___56487);

return statearr_55607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55609 = arguments.length;
switch (G__55609) {
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
var c__54287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_55671){
var state_val_55672 = (state_55671[(1)]);
if((state_val_55672 === (7))){
var inst_55667 = (state_55671[(2)]);
var state_55671__$1 = state_55671;
var statearr_55673_56506 = state_55671__$1;
(statearr_55673_56506[(2)] = inst_55667);

(statearr_55673_56506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (20))){
var inst_55637 = (state_55671[(7)]);
var inst_55648 = (state_55671[(2)]);
var inst_55649 = cljs.core.next(inst_55637);
var inst_55623 = inst_55649;
var inst_55624 = null;
var inst_55625 = (0);
var inst_55626 = (0);
var state_55671__$1 = (function (){var statearr_55674 = state_55671;
(statearr_55674[(8)] = inst_55648);

(statearr_55674[(9)] = inst_55623);

(statearr_55674[(10)] = inst_55624);

(statearr_55674[(11)] = inst_55625);

(statearr_55674[(12)] = inst_55626);

return statearr_55674;
})();
var statearr_55675_56507 = state_55671__$1;
(statearr_55675_56507[(2)] = null);

(statearr_55675_56507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (1))){
var state_55671__$1 = state_55671;
var statearr_55676_56508 = state_55671__$1;
(statearr_55676_56508[(2)] = null);

(statearr_55676_56508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (4))){
var inst_55612 = (state_55671[(13)]);
var inst_55612__$1 = (state_55671[(2)]);
var inst_55613 = (inst_55612__$1 == null);
var state_55671__$1 = (function (){var statearr_55677 = state_55671;
(statearr_55677[(13)] = inst_55612__$1);

return statearr_55677;
})();
if(cljs.core.truth_(inst_55613)){
var statearr_55678_56509 = state_55671__$1;
(statearr_55678_56509[(1)] = (5));

} else {
var statearr_55679_56510 = state_55671__$1;
(statearr_55679_56510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (15))){
var state_55671__$1 = state_55671;
var statearr_55683_56511 = state_55671__$1;
(statearr_55683_56511[(2)] = null);

(statearr_55683_56511[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (21))){
var state_55671__$1 = state_55671;
var statearr_55684_56513 = state_55671__$1;
(statearr_55684_56513[(2)] = null);

(statearr_55684_56513[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (13))){
var inst_55626 = (state_55671[(12)]);
var inst_55623 = (state_55671[(9)]);
var inst_55624 = (state_55671[(10)]);
var inst_55625 = (state_55671[(11)]);
var inst_55633 = (state_55671[(2)]);
var inst_55634 = (inst_55626 + (1));
var tmp55680 = inst_55623;
var tmp55681 = inst_55625;
var tmp55682 = inst_55624;
var inst_55623__$1 = tmp55680;
var inst_55624__$1 = tmp55682;
var inst_55625__$1 = tmp55681;
var inst_55626__$1 = inst_55634;
var state_55671__$1 = (function (){var statearr_55685 = state_55671;
(statearr_55685[(14)] = inst_55633);

(statearr_55685[(9)] = inst_55623__$1);

(statearr_55685[(10)] = inst_55624__$1);

(statearr_55685[(11)] = inst_55625__$1);

(statearr_55685[(12)] = inst_55626__$1);

return statearr_55685;
})();
var statearr_55686_56514 = state_55671__$1;
(statearr_55686_56514[(2)] = null);

(statearr_55686_56514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (22))){
var state_55671__$1 = state_55671;
var statearr_55687_56515 = state_55671__$1;
(statearr_55687_56515[(2)] = null);

(statearr_55687_56515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (6))){
var inst_55612 = (state_55671[(13)]);
var inst_55621 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55612) : f.call(null,inst_55612));
var inst_55622 = cljs.core.seq(inst_55621);
var inst_55623 = inst_55622;
var inst_55624 = null;
var inst_55625 = (0);
var inst_55626 = (0);
var state_55671__$1 = (function (){var statearr_55688 = state_55671;
(statearr_55688[(9)] = inst_55623);

(statearr_55688[(10)] = inst_55624);

(statearr_55688[(11)] = inst_55625);

(statearr_55688[(12)] = inst_55626);

return statearr_55688;
})();
var statearr_55689_56520 = state_55671__$1;
(statearr_55689_56520[(2)] = null);

(statearr_55689_56520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (17))){
var inst_55637 = (state_55671[(7)]);
var inst_55641 = cljs.core.chunk_first(inst_55637);
var inst_55642 = cljs.core.chunk_rest(inst_55637);
var inst_55643 = cljs.core.count(inst_55641);
var inst_55623 = inst_55642;
var inst_55624 = inst_55641;
var inst_55625 = inst_55643;
var inst_55626 = (0);
var state_55671__$1 = (function (){var statearr_55690 = state_55671;
(statearr_55690[(9)] = inst_55623);

(statearr_55690[(10)] = inst_55624);

(statearr_55690[(11)] = inst_55625);

(statearr_55690[(12)] = inst_55626);

return statearr_55690;
})();
var statearr_55691_56524 = state_55671__$1;
(statearr_55691_56524[(2)] = null);

(statearr_55691_56524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (3))){
var inst_55669 = (state_55671[(2)]);
var state_55671__$1 = state_55671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55671__$1,inst_55669);
} else {
if((state_val_55672 === (12))){
var inst_55657 = (state_55671[(2)]);
var state_55671__$1 = state_55671;
var statearr_55692_56528 = state_55671__$1;
(statearr_55692_56528[(2)] = inst_55657);

(statearr_55692_56528[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (2))){
var state_55671__$1 = state_55671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55671__$1,(4),in$);
} else {
if((state_val_55672 === (23))){
var inst_55665 = (state_55671[(2)]);
var state_55671__$1 = state_55671;
var statearr_55693_56529 = state_55671__$1;
(statearr_55693_56529[(2)] = inst_55665);

(statearr_55693_56529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (19))){
var inst_55652 = (state_55671[(2)]);
var state_55671__$1 = state_55671;
var statearr_55694_56530 = state_55671__$1;
(statearr_55694_56530[(2)] = inst_55652);

(statearr_55694_56530[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (11))){
var inst_55623 = (state_55671[(9)]);
var inst_55637 = (state_55671[(7)]);
var inst_55637__$1 = cljs.core.seq(inst_55623);
var state_55671__$1 = (function (){var statearr_55695 = state_55671;
(statearr_55695[(7)] = inst_55637__$1);

return statearr_55695;
})();
if(inst_55637__$1){
var statearr_55696_56532 = state_55671__$1;
(statearr_55696_56532[(1)] = (14));

} else {
var statearr_55697_56533 = state_55671__$1;
(statearr_55697_56533[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (9))){
var inst_55659 = (state_55671[(2)]);
var inst_55660 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_55671__$1 = (function (){var statearr_55698 = state_55671;
(statearr_55698[(15)] = inst_55659);

return statearr_55698;
})();
if(cljs.core.truth_(inst_55660)){
var statearr_55699_56534 = state_55671__$1;
(statearr_55699_56534[(1)] = (21));

} else {
var statearr_55700_56535 = state_55671__$1;
(statearr_55700_56535[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (5))){
var inst_55615 = cljs.core.async.close_BANG_(out);
var state_55671__$1 = state_55671;
var statearr_55701_56536 = state_55671__$1;
(statearr_55701_56536[(2)] = inst_55615);

(statearr_55701_56536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (14))){
var inst_55637 = (state_55671[(7)]);
var inst_55639 = cljs.core.chunked_seq_QMARK_(inst_55637);
var state_55671__$1 = state_55671;
if(inst_55639){
var statearr_55702_56537 = state_55671__$1;
(statearr_55702_56537[(1)] = (17));

} else {
var statearr_55703_56538 = state_55671__$1;
(statearr_55703_56538[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (16))){
var inst_55655 = (state_55671[(2)]);
var state_55671__$1 = state_55671;
var statearr_55704_56539 = state_55671__$1;
(statearr_55704_56539[(2)] = inst_55655);

(statearr_55704_56539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55672 === (10))){
var inst_55624 = (state_55671[(10)]);
var inst_55626 = (state_55671[(12)]);
var inst_55631 = cljs.core._nth(inst_55624,inst_55626);
var state_55671__$1 = state_55671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55671__$1,(13),out,inst_55631);
} else {
if((state_val_55672 === (18))){
var inst_55637 = (state_55671[(7)]);
var inst_55646 = cljs.core.first(inst_55637);
var state_55671__$1 = state_55671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55671__$1,(20),out,inst_55646);
} else {
if((state_val_55672 === (8))){
var inst_55626 = (state_55671[(12)]);
var inst_55625 = (state_55671[(11)]);
var inst_55628 = (inst_55626 < inst_55625);
var inst_55629 = inst_55628;
var state_55671__$1 = state_55671;
if(cljs.core.truth_(inst_55629)){
var statearr_55705_56540 = state_55671__$1;
(statearr_55705_56540[(1)] = (10));

} else {
var statearr_55706_56541 = state_55671__$1;
(statearr_55706_56541[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__54213__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54213__auto____0 = (function (){
var statearr_55707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55707[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54213__auto__);

(statearr_55707[(1)] = (1));

return statearr_55707;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54213__auto____1 = (function (state_55671){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_55671);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e55708){var ex__54216__auto__ = e55708;
var statearr_55709_56542 = state_55671;
(statearr_55709_56542[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_55671[(4)]))){
var statearr_55710_56543 = state_55671;
(statearr_55710_56543[(1)] = cljs.core.first((state_55671[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56544 = state_55671;
state_55671 = G__56544;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54213__auto__ = function(state_55671){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54213__auto____1.call(this,state_55671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54213__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54213__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_55711 = f__54288__auto__();
(statearr_55711[(6)] = c__54287__auto__);

return statearr_55711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
}));

return c__54287__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__55713 = arguments.length;
switch (G__55713) {
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
var G__55715 = arguments.length;
switch (G__55715) {
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
var G__55717 = arguments.length;
switch (G__55717) {
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
var c__54287__auto___56551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_55741){
var state_val_55742 = (state_55741[(1)]);
if((state_val_55742 === (7))){
var inst_55736 = (state_55741[(2)]);
var state_55741__$1 = state_55741;
var statearr_55743_56552 = state_55741__$1;
(statearr_55743_56552[(2)] = inst_55736);

(statearr_55743_56552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55742 === (1))){
var inst_55718 = null;
var state_55741__$1 = (function (){var statearr_55744 = state_55741;
(statearr_55744[(7)] = inst_55718);

return statearr_55744;
})();
var statearr_55745_56553 = state_55741__$1;
(statearr_55745_56553[(2)] = null);

(statearr_55745_56553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55742 === (4))){
var inst_55721 = (state_55741[(8)]);
var inst_55721__$1 = (state_55741[(2)]);
var inst_55722 = (inst_55721__$1 == null);
var inst_55723 = cljs.core.not(inst_55722);
var state_55741__$1 = (function (){var statearr_55746 = state_55741;
(statearr_55746[(8)] = inst_55721__$1);

return statearr_55746;
})();
if(inst_55723){
var statearr_55747_56554 = state_55741__$1;
(statearr_55747_56554[(1)] = (5));

} else {
var statearr_55748_56555 = state_55741__$1;
(statearr_55748_56555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55742 === (6))){
var state_55741__$1 = state_55741;
var statearr_55749_56556 = state_55741__$1;
(statearr_55749_56556[(2)] = null);

(statearr_55749_56556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55742 === (3))){
var inst_55738 = (state_55741[(2)]);
var inst_55739 = cljs.core.async.close_BANG_(out);
var state_55741__$1 = (function (){var statearr_55750 = state_55741;
(statearr_55750[(9)] = inst_55738);

return statearr_55750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55741__$1,inst_55739);
} else {
if((state_val_55742 === (2))){
var state_55741__$1 = state_55741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55741__$1,(4),ch);
} else {
if((state_val_55742 === (11))){
var inst_55721 = (state_55741[(8)]);
var inst_55730 = (state_55741[(2)]);
var inst_55718 = inst_55721;
var state_55741__$1 = (function (){var statearr_55751 = state_55741;
(statearr_55751[(10)] = inst_55730);

(statearr_55751[(7)] = inst_55718);

return statearr_55751;
})();
var statearr_55752_56558 = state_55741__$1;
(statearr_55752_56558[(2)] = null);

(statearr_55752_56558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55742 === (9))){
var inst_55721 = (state_55741[(8)]);
var state_55741__$1 = state_55741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55741__$1,(11),out,inst_55721);
} else {
if((state_val_55742 === (5))){
var inst_55721 = (state_55741[(8)]);
var inst_55718 = (state_55741[(7)]);
var inst_55725 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55721,inst_55718);
var state_55741__$1 = state_55741;
if(inst_55725){
var statearr_55754_56559 = state_55741__$1;
(statearr_55754_56559[(1)] = (8));

} else {
var statearr_55755_56560 = state_55741__$1;
(statearr_55755_56560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55742 === (10))){
var inst_55733 = (state_55741[(2)]);
var state_55741__$1 = state_55741;
var statearr_55756_56561 = state_55741__$1;
(statearr_55756_56561[(2)] = inst_55733);

(statearr_55756_56561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55742 === (8))){
var inst_55718 = (state_55741[(7)]);
var tmp55753 = inst_55718;
var inst_55718__$1 = tmp55753;
var state_55741__$1 = (function (){var statearr_55757 = state_55741;
(statearr_55757[(7)] = inst_55718__$1);

return statearr_55757;
})();
var statearr_55758_56563 = state_55741__$1;
(statearr_55758_56563[(2)] = null);

(statearr_55758_56563[(1)] = (2));


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
var cljs$core$async$state_machine__54213__auto__ = null;
var cljs$core$async$state_machine__54213__auto____0 = (function (){
var statearr_55759 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55759[(0)] = cljs$core$async$state_machine__54213__auto__);

(statearr_55759[(1)] = (1));

return statearr_55759;
});
var cljs$core$async$state_machine__54213__auto____1 = (function (state_55741){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_55741);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e55760){var ex__54216__auto__ = e55760;
var statearr_55761_56567 = state_55741;
(statearr_55761_56567[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_55741[(4)]))){
var statearr_55762_56568 = state_55741;
(statearr_55762_56568[(1)] = cljs.core.first((state_55741[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56570 = state_55741;
state_55741 = G__56570;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$state_machine__54213__auto__ = function(state_55741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54213__auto____1.call(this,state_55741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54213__auto____0;
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54213__auto____1;
return cljs$core$async$state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_55763 = f__54288__auto__();
(statearr_55763[(6)] = c__54287__auto___56551);

return statearr_55763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__55765 = arguments.length;
switch (G__55765) {
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
var c__54287__auto___56575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_55803){
var state_val_55804 = (state_55803[(1)]);
if((state_val_55804 === (7))){
var inst_55799 = (state_55803[(2)]);
var state_55803__$1 = state_55803;
var statearr_55805_56576 = state_55803__$1;
(statearr_55805_56576[(2)] = inst_55799);

(statearr_55805_56576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55804 === (1))){
var inst_55766 = (new Array(n));
var inst_55767 = inst_55766;
var inst_55768 = (0);
var state_55803__$1 = (function (){var statearr_55806 = state_55803;
(statearr_55806[(7)] = inst_55767);

(statearr_55806[(8)] = inst_55768);

return statearr_55806;
})();
var statearr_55807_56578 = state_55803__$1;
(statearr_55807_56578[(2)] = null);

(statearr_55807_56578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55804 === (4))){
var inst_55771 = (state_55803[(9)]);
var inst_55771__$1 = (state_55803[(2)]);
var inst_55772 = (inst_55771__$1 == null);
var inst_55773 = cljs.core.not(inst_55772);
var state_55803__$1 = (function (){var statearr_55808 = state_55803;
(statearr_55808[(9)] = inst_55771__$1);

return statearr_55808;
})();
if(inst_55773){
var statearr_55809_56582 = state_55803__$1;
(statearr_55809_56582[(1)] = (5));

} else {
var statearr_55810_56583 = state_55803__$1;
(statearr_55810_56583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55804 === (15))){
var inst_55793 = (state_55803[(2)]);
var state_55803__$1 = state_55803;
var statearr_55811_56584 = state_55803__$1;
(statearr_55811_56584[(2)] = inst_55793);

(statearr_55811_56584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55804 === (13))){
var state_55803__$1 = state_55803;
var statearr_55812_56586 = state_55803__$1;
(statearr_55812_56586[(2)] = null);

(statearr_55812_56586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55804 === (6))){
var inst_55768 = (state_55803[(8)]);
var inst_55789 = (inst_55768 > (0));
var state_55803__$1 = state_55803;
if(cljs.core.truth_(inst_55789)){
var statearr_55813_56590 = state_55803__$1;
(statearr_55813_56590[(1)] = (12));

} else {
var statearr_55814_56591 = state_55803__$1;
(statearr_55814_56591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55804 === (3))){
var inst_55801 = (state_55803[(2)]);
var state_55803__$1 = state_55803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55803__$1,inst_55801);
} else {
if((state_val_55804 === (12))){
var inst_55767 = (state_55803[(7)]);
var inst_55791 = cljs.core.vec(inst_55767);
var state_55803__$1 = state_55803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55803__$1,(15),out,inst_55791);
} else {
if((state_val_55804 === (2))){
var state_55803__$1 = state_55803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55803__$1,(4),ch);
} else {
if((state_val_55804 === (11))){
var inst_55783 = (state_55803[(2)]);
var inst_55784 = (new Array(n));
var inst_55767 = inst_55784;
var inst_55768 = (0);
var state_55803__$1 = (function (){var statearr_55815 = state_55803;
(statearr_55815[(10)] = inst_55783);

(statearr_55815[(7)] = inst_55767);

(statearr_55815[(8)] = inst_55768);

return statearr_55815;
})();
var statearr_55816_56596 = state_55803__$1;
(statearr_55816_56596[(2)] = null);

(statearr_55816_56596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55804 === (9))){
var inst_55767 = (state_55803[(7)]);
var inst_55781 = cljs.core.vec(inst_55767);
var state_55803__$1 = state_55803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55803__$1,(11),out,inst_55781);
} else {
if((state_val_55804 === (5))){
var inst_55767 = (state_55803[(7)]);
var inst_55768 = (state_55803[(8)]);
var inst_55771 = (state_55803[(9)]);
var inst_55776 = (state_55803[(11)]);
var inst_55775 = (inst_55767[inst_55768] = inst_55771);
var inst_55776__$1 = (inst_55768 + (1));
var inst_55777 = (inst_55776__$1 < n);
var state_55803__$1 = (function (){var statearr_55817 = state_55803;
(statearr_55817[(12)] = inst_55775);

(statearr_55817[(11)] = inst_55776__$1);

return statearr_55817;
})();
if(cljs.core.truth_(inst_55777)){
var statearr_55818_56601 = state_55803__$1;
(statearr_55818_56601[(1)] = (8));

} else {
var statearr_55819_56602 = state_55803__$1;
(statearr_55819_56602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55804 === (14))){
var inst_55796 = (state_55803[(2)]);
var inst_55797 = cljs.core.async.close_BANG_(out);
var state_55803__$1 = (function (){var statearr_55821 = state_55803;
(statearr_55821[(13)] = inst_55796);

return statearr_55821;
})();
var statearr_55822_56604 = state_55803__$1;
(statearr_55822_56604[(2)] = inst_55797);

(statearr_55822_56604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55804 === (10))){
var inst_55787 = (state_55803[(2)]);
var state_55803__$1 = state_55803;
var statearr_55823_56608 = state_55803__$1;
(statearr_55823_56608[(2)] = inst_55787);

(statearr_55823_56608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55804 === (8))){
var inst_55767 = (state_55803[(7)]);
var inst_55776 = (state_55803[(11)]);
var tmp55820 = inst_55767;
var inst_55767__$1 = tmp55820;
var inst_55768 = inst_55776;
var state_55803__$1 = (function (){var statearr_55824 = state_55803;
(statearr_55824[(7)] = inst_55767__$1);

(statearr_55824[(8)] = inst_55768);

return statearr_55824;
})();
var statearr_55825_56609 = state_55803__$1;
(statearr_55825_56609[(2)] = null);

(statearr_55825_56609[(1)] = (2));


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
var cljs$core$async$state_machine__54213__auto__ = null;
var cljs$core$async$state_machine__54213__auto____0 = (function (){
var statearr_55826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55826[(0)] = cljs$core$async$state_machine__54213__auto__);

(statearr_55826[(1)] = (1));

return statearr_55826;
});
var cljs$core$async$state_machine__54213__auto____1 = (function (state_55803){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_55803);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e55827){var ex__54216__auto__ = e55827;
var statearr_55828_56613 = state_55803;
(statearr_55828_56613[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_55803[(4)]))){
var statearr_55829_56614 = state_55803;
(statearr_55829_56614[(1)] = cljs.core.first((state_55803[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56615 = state_55803;
state_55803 = G__56615;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$state_machine__54213__auto__ = function(state_55803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54213__auto____1.call(this,state_55803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54213__auto____0;
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54213__auto____1;
return cljs$core$async$state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_55830 = f__54288__auto__();
(statearr_55830[(6)] = c__54287__auto___56575);

return statearr_55830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__55832 = arguments.length;
switch (G__55832) {
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
var c__54287__auto___56623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54288__auto__ = (function (){var switch__54212__auto__ = (function (state_55877){
var state_val_55878 = (state_55877[(1)]);
if((state_val_55878 === (7))){
var inst_55873 = (state_55877[(2)]);
var state_55877__$1 = state_55877;
var statearr_55879_56625 = state_55877__$1;
(statearr_55879_56625[(2)] = inst_55873);

(statearr_55879_56625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (1))){
var inst_55833 = [];
var inst_55834 = inst_55833;
var inst_55835 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55877__$1 = (function (){var statearr_55880 = state_55877;
(statearr_55880[(7)] = inst_55834);

(statearr_55880[(8)] = inst_55835);

return statearr_55880;
})();
var statearr_55881_56626 = state_55877__$1;
(statearr_55881_56626[(2)] = null);

(statearr_55881_56626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (4))){
var inst_55838 = (state_55877[(9)]);
var inst_55838__$1 = (state_55877[(2)]);
var inst_55839 = (inst_55838__$1 == null);
var inst_55840 = cljs.core.not(inst_55839);
var state_55877__$1 = (function (){var statearr_55882 = state_55877;
(statearr_55882[(9)] = inst_55838__$1);

return statearr_55882;
})();
if(inst_55840){
var statearr_55883_56627 = state_55877__$1;
(statearr_55883_56627[(1)] = (5));

} else {
var statearr_55884_56628 = state_55877__$1;
(statearr_55884_56628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (15))){
var inst_55834 = (state_55877[(7)]);
var inst_55865 = cljs.core.vec(inst_55834);
var state_55877__$1 = state_55877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55877__$1,(18),out,inst_55865);
} else {
if((state_val_55878 === (13))){
var inst_55860 = (state_55877[(2)]);
var state_55877__$1 = state_55877;
var statearr_55885_56631 = state_55877__$1;
(statearr_55885_56631[(2)] = inst_55860);

(statearr_55885_56631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (6))){
var inst_55834 = (state_55877[(7)]);
var inst_55862 = inst_55834.length;
var inst_55863 = (inst_55862 > (0));
var state_55877__$1 = state_55877;
if(cljs.core.truth_(inst_55863)){
var statearr_55886_56633 = state_55877__$1;
(statearr_55886_56633[(1)] = (15));

} else {
var statearr_55887_56634 = state_55877__$1;
(statearr_55887_56634[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (17))){
var inst_55870 = (state_55877[(2)]);
var inst_55871 = cljs.core.async.close_BANG_(out);
var state_55877__$1 = (function (){var statearr_55888 = state_55877;
(statearr_55888[(10)] = inst_55870);

return statearr_55888;
})();
var statearr_55889_56636 = state_55877__$1;
(statearr_55889_56636[(2)] = inst_55871);

(statearr_55889_56636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (3))){
var inst_55875 = (state_55877[(2)]);
var state_55877__$1 = state_55877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55877__$1,inst_55875);
} else {
if((state_val_55878 === (12))){
var inst_55834 = (state_55877[(7)]);
var inst_55853 = cljs.core.vec(inst_55834);
var state_55877__$1 = state_55877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55877__$1,(14),out,inst_55853);
} else {
if((state_val_55878 === (2))){
var state_55877__$1 = state_55877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55877__$1,(4),ch);
} else {
if((state_val_55878 === (11))){
var inst_55834 = (state_55877[(7)]);
var inst_55838 = (state_55877[(9)]);
var inst_55842 = (state_55877[(11)]);
var inst_55850 = inst_55834.push(inst_55838);
var tmp55890 = inst_55834;
var inst_55834__$1 = tmp55890;
var inst_55835 = inst_55842;
var state_55877__$1 = (function (){var statearr_55891 = state_55877;
(statearr_55891[(12)] = inst_55850);

(statearr_55891[(7)] = inst_55834__$1);

(statearr_55891[(8)] = inst_55835);

return statearr_55891;
})();
var statearr_55892_56638 = state_55877__$1;
(statearr_55892_56638[(2)] = null);

(statearr_55892_56638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (9))){
var inst_55835 = (state_55877[(8)]);
var inst_55846 = cljs.core.keyword_identical_QMARK_(inst_55835,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_55877__$1 = state_55877;
var statearr_55893_56639 = state_55877__$1;
(statearr_55893_56639[(2)] = inst_55846);

(statearr_55893_56639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (5))){
var inst_55838 = (state_55877[(9)]);
var inst_55842 = (state_55877[(11)]);
var inst_55835 = (state_55877[(8)]);
var inst_55843 = (state_55877[(13)]);
var inst_55842__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55838) : f.call(null,inst_55838));
var inst_55843__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55842__$1,inst_55835);
var state_55877__$1 = (function (){var statearr_55894 = state_55877;
(statearr_55894[(11)] = inst_55842__$1);

(statearr_55894[(13)] = inst_55843__$1);

return statearr_55894;
})();
if(inst_55843__$1){
var statearr_55895_56643 = state_55877__$1;
(statearr_55895_56643[(1)] = (8));

} else {
var statearr_55896_56644 = state_55877__$1;
(statearr_55896_56644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (14))){
var inst_55838 = (state_55877[(9)]);
var inst_55842 = (state_55877[(11)]);
var inst_55855 = (state_55877[(2)]);
var inst_55856 = [];
var inst_55857 = inst_55856.push(inst_55838);
var inst_55834 = inst_55856;
var inst_55835 = inst_55842;
var state_55877__$1 = (function (){var statearr_55897 = state_55877;
(statearr_55897[(14)] = inst_55855);

(statearr_55897[(15)] = inst_55857);

(statearr_55897[(7)] = inst_55834);

(statearr_55897[(8)] = inst_55835);

return statearr_55897;
})();
var statearr_55898_56645 = state_55877__$1;
(statearr_55898_56645[(2)] = null);

(statearr_55898_56645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (16))){
var state_55877__$1 = state_55877;
var statearr_55899_56646 = state_55877__$1;
(statearr_55899_56646[(2)] = null);

(statearr_55899_56646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (10))){
var inst_55848 = (state_55877[(2)]);
var state_55877__$1 = state_55877;
if(cljs.core.truth_(inst_55848)){
var statearr_55900_56647 = state_55877__$1;
(statearr_55900_56647[(1)] = (11));

} else {
var statearr_55901_56649 = state_55877__$1;
(statearr_55901_56649[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (18))){
var inst_55867 = (state_55877[(2)]);
var state_55877__$1 = state_55877;
var statearr_55902_56653 = state_55877__$1;
(statearr_55902_56653[(2)] = inst_55867);

(statearr_55902_56653[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55878 === (8))){
var inst_55843 = (state_55877[(13)]);
var state_55877__$1 = state_55877;
var statearr_55903_56654 = state_55877__$1;
(statearr_55903_56654[(2)] = inst_55843);

(statearr_55903_56654[(1)] = (10));


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
var cljs$core$async$state_machine__54213__auto__ = null;
var cljs$core$async$state_machine__54213__auto____0 = (function (){
var statearr_55904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55904[(0)] = cljs$core$async$state_machine__54213__auto__);

(statearr_55904[(1)] = (1));

return statearr_55904;
});
var cljs$core$async$state_machine__54213__auto____1 = (function (state_55877){
while(true){
var ret_value__54214__auto__ = (function (){try{while(true){
var result__54215__auto__ = switch__54212__auto__(state_55877);
if(cljs.core.keyword_identical_QMARK_(result__54215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54215__auto__;
}
break;
}
}catch (e55905){var ex__54216__auto__ = e55905;
var statearr_55906_56655 = state_55877;
(statearr_55906_56655[(2)] = ex__54216__auto__);


if(cljs.core.seq((state_55877[(4)]))){
var statearr_55907_56656 = state_55877;
(statearr_55907_56656[(1)] = cljs.core.first((state_55877[(4)])));

} else {
throw ex__54216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56657 = state_55877;
state_55877 = G__56657;
continue;
} else {
return ret_value__54214__auto__;
}
break;
}
});
cljs$core$async$state_machine__54213__auto__ = function(state_55877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54213__auto____1.call(this,state_55877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54213__auto____0;
cljs$core$async$state_machine__54213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54213__auto____1;
return cljs$core$async$state_machine__54213__auto__;
})()
})();
var state__54289__auto__ = (function (){var statearr_55908 = f__54288__auto__();
(statearr_55908[(6)] = c__54287__auto___56623);

return statearr_55908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54289__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
