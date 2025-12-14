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
cljs.core.async.t_cljs$core$async54355 = (function (f,blockable,meta54356){
this.f = f;
this.blockable = blockable;
this.meta54356 = meta54356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54357,meta54356__$1){
var self__ = this;
var _54357__$1 = this;
return (new cljs.core.async.t_cljs$core$async54355(self__.f,self__.blockable,meta54356__$1));
}));

(cljs.core.async.t_cljs$core$async54355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54357){
var self__ = this;
var _54357__$1 = this;
return self__.meta54356;
}));

(cljs.core.async.t_cljs$core$async54355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54356","meta54356",-1132571110,null)], null);
}));

(cljs.core.async.t_cljs$core$async54355.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54355");

(cljs.core.async.t_cljs$core$async54355.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54355");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54355.
 */
cljs.core.async.__GT_t_cljs$core$async54355 = (function cljs$core$async$__GT_t_cljs$core$async54355(f,blockable,meta54356){
return (new cljs.core.async.t_cljs$core$async54355(f,blockable,meta54356));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54351 = arguments.length;
switch (G__54351) {
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
return (new cljs.core.async.t_cljs$core$async54355(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54368 = arguments.length;
switch (G__54368) {
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
var G__54376 = arguments.length;
switch (G__54376) {
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
var G__54384 = arguments.length;
switch (G__54384) {
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
var val_55919 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55919) : fn1.call(null,val_55919));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55919) : fn1.call(null,val_55919));
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
var G__54391 = arguments.length;
switch (G__54391) {
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
var n__5616__auto___55924 = n;
var x_55925 = (0);
while(true){
if((x_55925 < n__5616__auto___55924)){
(a[x_55925] = x_55925);

var G__55926 = (x_55925 + (1));
x_55925 = G__55926;
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
cljs.core.async.t_cljs$core$async54392 = (function (flag,meta54393){
this.flag = flag;
this.meta54393 = meta54393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54394,meta54393__$1){
var self__ = this;
var _54394__$1 = this;
return (new cljs.core.async.t_cljs$core$async54392(self__.flag,meta54393__$1));
}));

(cljs.core.async.t_cljs$core$async54392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54394){
var self__ = this;
var _54394__$1 = this;
return self__.meta54393;
}));

(cljs.core.async.t_cljs$core$async54392.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54393","meta54393",225947673,null)], null);
}));

(cljs.core.async.t_cljs$core$async54392.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54392");

(cljs.core.async.t_cljs$core$async54392.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54392");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54392.
 */
cljs.core.async.__GT_t_cljs$core$async54392 = (function cljs$core$async$__GT_t_cljs$core$async54392(flag,meta54393){
return (new cljs.core.async.t_cljs$core$async54392(flag,meta54393));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async54392(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54395 = (function (flag,cb,meta54396){
this.flag = flag;
this.cb = cb;
this.meta54396 = meta54396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54397,meta54396__$1){
var self__ = this;
var _54397__$1 = this;
return (new cljs.core.async.t_cljs$core$async54395(self__.flag,self__.cb,meta54396__$1));
}));

(cljs.core.async.t_cljs$core$async54395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54397){
var self__ = this;
var _54397__$1 = this;
return self__.meta54396;
}));

(cljs.core.async.t_cljs$core$async54395.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54395.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54396","meta54396",1361616005,null)], null);
}));

(cljs.core.async.t_cljs$core$async54395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54395");

(cljs.core.async.t_cljs$core$async54395.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54395.
 */
cljs.core.async.__GT_t_cljs$core$async54395 = (function cljs$core$async$__GT_t_cljs$core$async54395(flag,cb,meta54396){
return (new cljs.core.async.t_cljs$core$async54395(flag,cb,meta54396));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async54395(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_55929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_55929)){
if((!(((port_55929.cljs$core$IFn$_invoke$arity$1 ? port_55929.cljs$core$IFn$_invoke$arity$1((1)) : port_55929.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__55930 = (i + (1));
i = G__55930;
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
return (function (p1__54399_SHARP_){
var G__54424 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54399_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54424) : fret.call(null,G__54424));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__54400_SHARP_){
var G__54425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54400_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54425) : fret.call(null,G__54425));
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
var G__55931 = (i + (1));
i = G__55931;
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
var len__5749__auto___55932 = arguments.length;
var i__5750__auto___55933 = (0);
while(true){
if((i__5750__auto___55933 < len__5749__auto___55932)){
args__5755__auto__.push((arguments[i__5750__auto___55933]));

var G__55934 = (i__5750__auto___55933 + (1));
i__5750__auto___55933 = G__55934;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54452){
var map__54453 = p__54452;
var map__54453__$1 = cljs.core.__destructure_map(map__54453);
var opts = map__54453__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54429){
var G__54430 = cljs.core.first(seq54429);
var seq54429__$1 = cljs.core.next(seq54429);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54430,seq54429__$1);
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
var G__54497 = arguments.length;
switch (G__54497) {
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
var c__54282__auto___55936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_54535){
var state_val_54536 = (state_54535[(1)]);
if((state_val_54536 === (7))){
var inst_54531 = (state_54535[(2)]);
var state_54535__$1 = state_54535;
var statearr_54537_55937 = state_54535__$1;
(statearr_54537_55937[(2)] = inst_54531);

(statearr_54537_55937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54536 === (1))){
var state_54535__$1 = state_54535;
var statearr_54538_55938 = state_54535__$1;
(statearr_54538_55938[(2)] = null);

(statearr_54538_55938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54536 === (4))){
var inst_54514 = (state_54535[(7)]);
var inst_54514__$1 = (state_54535[(2)]);
var inst_54515 = (inst_54514__$1 == null);
var state_54535__$1 = (function (){var statearr_54539 = state_54535;
(statearr_54539[(7)] = inst_54514__$1);

return statearr_54539;
})();
if(cljs.core.truth_(inst_54515)){
var statearr_54540_55939 = state_54535__$1;
(statearr_54540_55939[(1)] = (5));

} else {
var statearr_54541_55940 = state_54535__$1;
(statearr_54541_55940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54536 === (13))){
var state_54535__$1 = state_54535;
var statearr_54542_55941 = state_54535__$1;
(statearr_54542_55941[(2)] = null);

(statearr_54542_55941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54536 === (6))){
var inst_54514 = (state_54535[(7)]);
var state_54535__$1 = state_54535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54535__$1,(11),to,inst_54514);
} else {
if((state_val_54536 === (3))){
var inst_54533 = (state_54535[(2)]);
var state_54535__$1 = state_54535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54535__$1,inst_54533);
} else {
if((state_val_54536 === (12))){
var state_54535__$1 = state_54535;
var statearr_54543_55942 = state_54535__$1;
(statearr_54543_55942[(2)] = null);

(statearr_54543_55942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54536 === (2))){
var state_54535__$1 = state_54535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54535__$1,(4),from);
} else {
if((state_val_54536 === (11))){
var inst_54524 = (state_54535[(2)]);
var state_54535__$1 = state_54535;
if(cljs.core.truth_(inst_54524)){
var statearr_54544_55943 = state_54535__$1;
(statearr_54544_55943[(1)] = (12));

} else {
var statearr_54545_55944 = state_54535__$1;
(statearr_54545_55944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54536 === (9))){
var state_54535__$1 = state_54535;
var statearr_54546_55945 = state_54535__$1;
(statearr_54546_55945[(2)] = null);

(statearr_54546_55945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54536 === (5))){
var state_54535__$1 = state_54535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54547_55946 = state_54535__$1;
(statearr_54547_55946[(1)] = (8));

} else {
var statearr_54548_55947 = state_54535__$1;
(statearr_54548_55947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54536 === (14))){
var inst_54529 = (state_54535[(2)]);
var state_54535__$1 = state_54535;
var statearr_54549_55948 = state_54535__$1;
(statearr_54549_55948[(2)] = inst_54529);

(statearr_54549_55948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54536 === (10))){
var inst_54521 = (state_54535[(2)]);
var state_54535__$1 = state_54535;
var statearr_54550_55949 = state_54535__$1;
(statearr_54550_55949[(2)] = inst_54521);

(statearr_54550_55949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54536 === (8))){
var inst_54518 = cljs.core.async.close_BANG_(to);
var state_54535__$1 = state_54535;
var statearr_54551_55950 = state_54535__$1;
(statearr_54551_55950[(2)] = inst_54518);

(statearr_54551_55950[(1)] = (10));


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
var cljs$core$async$state_machine__54208__auto__ = null;
var cljs$core$async$state_machine__54208__auto____0 = (function (){
var statearr_54552 = [null,null,null,null,null,null,null,null];
(statearr_54552[(0)] = cljs$core$async$state_machine__54208__auto__);

(statearr_54552[(1)] = (1));

return statearr_54552;
});
var cljs$core$async$state_machine__54208__auto____1 = (function (state_54535){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_54535);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e54553){var ex__54211__auto__ = e54553;
var statearr_54554_55951 = state_54535;
(statearr_54554_55951[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_54535[(4)]))){
var statearr_54555_55952 = state_54535;
(statearr_54555_55952[(1)] = cljs.core.first((state_54535[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55953 = state_54535;
state_54535 = G__55953;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$state_machine__54208__auto__ = function(state_54535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54208__auto____1.call(this,state_54535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54208__auto____0;
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54208__auto____1;
return cljs$core$async$state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_54556 = f__54283__auto__();
(statearr_54556[(6)] = c__54282__auto___55936);

return statearr_54556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
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
var process__$1 = (function (p__54557){
var vec__54558 = p__54557;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54558,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54558,(1),null);
var job = vec__54558;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54282__auto___55954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_54565){
var state_val_54566 = (state_54565[(1)]);
if((state_val_54566 === (1))){
var state_54565__$1 = state_54565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54565__$1,(2),res,v);
} else {
if((state_val_54566 === (2))){
var inst_54562 = (state_54565[(2)]);
var inst_54563 = cljs.core.async.close_BANG_(res);
var state_54565__$1 = (function (){var statearr_54567 = state_54565;
(statearr_54567[(7)] = inst_54562);

return statearr_54567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54565__$1,inst_54563);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0 = (function (){
var statearr_54568 = [null,null,null,null,null,null,null,null];
(statearr_54568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__);

(statearr_54568[(1)] = (1));

return statearr_54568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1 = (function (state_54565){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_54565);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e54569){var ex__54211__auto__ = e54569;
var statearr_54570_55955 = state_54565;
(statearr_54570_55955[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_54565[(4)]))){
var statearr_54571_55956 = state_54565;
(statearr_54571_55956[(1)] = cljs.core.first((state_54565[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55957 = state_54565;
state_54565 = G__55957;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__ = function(state_54565){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1.call(this,state_54565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_54572 = f__54283__auto__();
(statearr_54572[(6)] = c__54282__auto___55954);

return statearr_54572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__54573){
var vec__54574 = p__54573;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54574,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54574,(1),null);
var job = vec__54574;
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
var n__5616__auto___55958 = n;
var __55959 = (0);
while(true){
if((__55959 < n__5616__auto___55958)){
var G__54577_55960 = type;
var G__54577_55961__$1 = (((G__54577_55960 instanceof cljs.core.Keyword))?G__54577_55960.fqn:null);
switch (G__54577_55961__$1) {
case "compute":
var c__54282__auto___55963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55959,c__54282__auto___55963,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async){
return (function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = ((function (__55959,c__54282__auto___55963,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async){
return (function (state_54590){
var state_val_54591 = (state_54590[(1)]);
if((state_val_54591 === (1))){
var state_54590__$1 = state_54590;
var statearr_54592_55964 = state_54590__$1;
(statearr_54592_55964[(2)] = null);

(statearr_54592_55964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54591 === (2))){
var state_54590__$1 = state_54590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54590__$1,(4),jobs);
} else {
if((state_val_54591 === (3))){
var inst_54588 = (state_54590[(2)]);
var state_54590__$1 = state_54590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54590__$1,inst_54588);
} else {
if((state_val_54591 === (4))){
var inst_54580 = (state_54590[(2)]);
var inst_54581 = process__$1(inst_54580);
var state_54590__$1 = state_54590;
if(cljs.core.truth_(inst_54581)){
var statearr_54593_55965 = state_54590__$1;
(statearr_54593_55965[(1)] = (5));

} else {
var statearr_54594_55966 = state_54590__$1;
(statearr_54594_55966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54591 === (5))){
var state_54590__$1 = state_54590;
var statearr_54595_55967 = state_54590__$1;
(statearr_54595_55967[(2)] = null);

(statearr_54595_55967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54591 === (6))){
var state_54590__$1 = state_54590;
var statearr_54596_55968 = state_54590__$1;
(statearr_54596_55968[(2)] = null);

(statearr_54596_55968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54591 === (7))){
var inst_54586 = (state_54590[(2)]);
var state_54590__$1 = state_54590;
var statearr_54597_55969 = state_54590__$1;
(statearr_54597_55969[(2)] = inst_54586);

(statearr_54597_55969[(1)] = (3));


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
});})(__55959,c__54282__auto___55963,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async))
;
return ((function (__55959,switch__54207__auto__,c__54282__auto___55963,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0 = (function (){
var statearr_54598 = [null,null,null,null,null,null,null];
(statearr_54598[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__);

(statearr_54598[(1)] = (1));

return statearr_54598;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1 = (function (state_54590){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_54590);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e54599){var ex__54211__auto__ = e54599;
var statearr_54600_55970 = state_54590;
(statearr_54600_55970[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_54590[(4)]))){
var statearr_54601_55971 = state_54590;
(statearr_54601_55971[(1)] = cljs.core.first((state_54590[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55972 = state_54590;
state_54590 = G__55972;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__ = function(state_54590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1.call(this,state_54590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__;
})()
;})(__55959,switch__54207__auto__,c__54282__auto___55963,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async))
})();
var state__54284__auto__ = (function (){var statearr_54602 = f__54283__auto__();
(statearr_54602[(6)] = c__54282__auto___55963);

return statearr_54602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
});})(__55959,c__54282__auto___55963,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async))
);


break;
case "async":
var c__54282__auto___55973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55959,c__54282__auto___55973,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async){
return (function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = ((function (__55959,c__54282__auto___55973,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async){
return (function (state_54615){
var state_val_54616 = (state_54615[(1)]);
if((state_val_54616 === (1))){
var state_54615__$1 = state_54615;
var statearr_54617_55974 = state_54615__$1;
(statearr_54617_55974[(2)] = null);

(statearr_54617_55974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54616 === (2))){
var state_54615__$1 = state_54615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54615__$1,(4),jobs);
} else {
if((state_val_54616 === (3))){
var inst_54613 = (state_54615[(2)]);
var state_54615__$1 = state_54615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54615__$1,inst_54613);
} else {
if((state_val_54616 === (4))){
var inst_54605 = (state_54615[(2)]);
var inst_54606 = async(inst_54605);
var state_54615__$1 = state_54615;
if(cljs.core.truth_(inst_54606)){
var statearr_54618_55975 = state_54615__$1;
(statearr_54618_55975[(1)] = (5));

} else {
var statearr_54619_55976 = state_54615__$1;
(statearr_54619_55976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54616 === (5))){
var state_54615__$1 = state_54615;
var statearr_54620_55977 = state_54615__$1;
(statearr_54620_55977[(2)] = null);

(statearr_54620_55977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54616 === (6))){
var state_54615__$1 = state_54615;
var statearr_54621_55978 = state_54615__$1;
(statearr_54621_55978[(2)] = null);

(statearr_54621_55978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54616 === (7))){
var inst_54611 = (state_54615[(2)]);
var state_54615__$1 = state_54615;
var statearr_54622_55979 = state_54615__$1;
(statearr_54622_55979[(2)] = inst_54611);

(statearr_54622_55979[(1)] = (3));


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
});})(__55959,c__54282__auto___55973,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async))
;
return ((function (__55959,switch__54207__auto__,c__54282__auto___55973,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0 = (function (){
var statearr_54623 = [null,null,null,null,null,null,null];
(statearr_54623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__);

(statearr_54623[(1)] = (1));

return statearr_54623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1 = (function (state_54615){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_54615);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e54624){var ex__54211__auto__ = e54624;
var statearr_54625_55980 = state_54615;
(statearr_54625_55980[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_54615[(4)]))){
var statearr_54626_55981 = state_54615;
(statearr_54626_55981[(1)] = cljs.core.first((state_54615[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55982 = state_54615;
state_54615 = G__55982;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__ = function(state_54615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1.call(this,state_54615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__;
})()
;})(__55959,switch__54207__auto__,c__54282__auto___55973,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async))
})();
var state__54284__auto__ = (function (){var statearr_54627 = f__54283__auto__();
(statearr_54627[(6)] = c__54282__auto___55973);

return statearr_54627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
});})(__55959,c__54282__auto___55973,G__54577_55960,G__54577_55961__$1,n__5616__auto___55958,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54577_55961__$1)].join('')));

}

var G__55983 = (__55959 + (1));
__55959 = G__55983;
continue;
} else {
}
break;
}

var c__54282__auto___55984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_54649){
var state_val_54650 = (state_54649[(1)]);
if((state_val_54650 === (7))){
var inst_54645 = (state_54649[(2)]);
var state_54649__$1 = state_54649;
var statearr_54651_55985 = state_54649__$1;
(statearr_54651_55985[(2)] = inst_54645);

(statearr_54651_55985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54650 === (1))){
var state_54649__$1 = state_54649;
var statearr_54652_55986 = state_54649__$1;
(statearr_54652_55986[(2)] = null);

(statearr_54652_55986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54650 === (4))){
var inst_54630 = (state_54649[(7)]);
var inst_54630__$1 = (state_54649[(2)]);
var inst_54631 = (inst_54630__$1 == null);
var state_54649__$1 = (function (){var statearr_54653 = state_54649;
(statearr_54653[(7)] = inst_54630__$1);

return statearr_54653;
})();
if(cljs.core.truth_(inst_54631)){
var statearr_54654_55987 = state_54649__$1;
(statearr_54654_55987[(1)] = (5));

} else {
var statearr_54655_55988 = state_54649__$1;
(statearr_54655_55988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54650 === (6))){
var inst_54630 = (state_54649[(7)]);
var inst_54635 = (state_54649[(8)]);
var inst_54635__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_54636 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54637 = [inst_54630,inst_54635__$1];
var inst_54638 = (new cljs.core.PersistentVector(null,2,(5),inst_54636,inst_54637,null));
var state_54649__$1 = (function (){var statearr_54656 = state_54649;
(statearr_54656[(8)] = inst_54635__$1);

return statearr_54656;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54649__$1,(8),jobs,inst_54638);
} else {
if((state_val_54650 === (3))){
var inst_54647 = (state_54649[(2)]);
var state_54649__$1 = state_54649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54649__$1,inst_54647);
} else {
if((state_val_54650 === (2))){
var state_54649__$1 = state_54649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54649__$1,(4),from);
} else {
if((state_val_54650 === (9))){
var inst_54642 = (state_54649[(2)]);
var state_54649__$1 = (function (){var statearr_54657 = state_54649;
(statearr_54657[(9)] = inst_54642);

return statearr_54657;
})();
var statearr_54658_55989 = state_54649__$1;
(statearr_54658_55989[(2)] = null);

(statearr_54658_55989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54650 === (5))){
var inst_54633 = cljs.core.async.close_BANG_(jobs);
var state_54649__$1 = state_54649;
var statearr_54659_55990 = state_54649__$1;
(statearr_54659_55990[(2)] = inst_54633);

(statearr_54659_55990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54650 === (8))){
var inst_54635 = (state_54649[(8)]);
var inst_54640 = (state_54649[(2)]);
var state_54649__$1 = (function (){var statearr_54660 = state_54649;
(statearr_54660[(10)] = inst_54640);

return statearr_54660;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54649__$1,(9),results,inst_54635);
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
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0 = (function (){
var statearr_54661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54661[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__);

(statearr_54661[(1)] = (1));

return statearr_54661;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1 = (function (state_54649){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_54649);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e54662){var ex__54211__auto__ = e54662;
var statearr_54663_55991 = state_54649;
(statearr_54663_55991[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_54649[(4)]))){
var statearr_54664_55992 = state_54649;
(statearr_54664_55992[(1)] = cljs.core.first((state_54649[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55993 = state_54649;
state_54649 = G__55993;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__ = function(state_54649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1.call(this,state_54649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_54665 = f__54283__auto__();
(statearr_54665[(6)] = c__54282__auto___55984);

return statearr_54665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
}));


var c__54282__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_54703){
var state_val_54704 = (state_54703[(1)]);
if((state_val_54704 === (7))){
var inst_54699 = (state_54703[(2)]);
var state_54703__$1 = state_54703;
var statearr_54705_55997 = state_54703__$1;
(statearr_54705_55997[(2)] = inst_54699);

(statearr_54705_55997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (20))){
var state_54703__$1 = state_54703;
var statearr_54706_55999 = state_54703__$1;
(statearr_54706_55999[(2)] = null);

(statearr_54706_55999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (1))){
var state_54703__$1 = state_54703;
var statearr_54707_56000 = state_54703__$1;
(statearr_54707_56000[(2)] = null);

(statearr_54707_56000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (4))){
var inst_54668 = (state_54703[(7)]);
var inst_54668__$1 = (state_54703[(2)]);
var inst_54669 = (inst_54668__$1 == null);
var state_54703__$1 = (function (){var statearr_54708 = state_54703;
(statearr_54708[(7)] = inst_54668__$1);

return statearr_54708;
})();
if(cljs.core.truth_(inst_54669)){
var statearr_54709_56001 = state_54703__$1;
(statearr_54709_56001[(1)] = (5));

} else {
var statearr_54710_56003 = state_54703__$1;
(statearr_54710_56003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (15))){
var inst_54681 = (state_54703[(8)]);
var state_54703__$1 = state_54703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54703__$1,(18),to,inst_54681);
} else {
if((state_val_54704 === (21))){
var inst_54694 = (state_54703[(2)]);
var state_54703__$1 = state_54703;
var statearr_54711_56007 = state_54703__$1;
(statearr_54711_56007[(2)] = inst_54694);

(statearr_54711_56007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (13))){
var inst_54696 = (state_54703[(2)]);
var state_54703__$1 = (function (){var statearr_54712 = state_54703;
(statearr_54712[(9)] = inst_54696);

return statearr_54712;
})();
var statearr_54713_56008 = state_54703__$1;
(statearr_54713_56008[(2)] = null);

(statearr_54713_56008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (6))){
var inst_54668 = (state_54703[(7)]);
var state_54703__$1 = state_54703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54703__$1,(11),inst_54668);
} else {
if((state_val_54704 === (17))){
var inst_54689 = (state_54703[(2)]);
var state_54703__$1 = state_54703;
if(cljs.core.truth_(inst_54689)){
var statearr_54714_56010 = state_54703__$1;
(statearr_54714_56010[(1)] = (19));

} else {
var statearr_54715_56011 = state_54703__$1;
(statearr_54715_56011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (3))){
var inst_54701 = (state_54703[(2)]);
var state_54703__$1 = state_54703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54703__$1,inst_54701);
} else {
if((state_val_54704 === (12))){
var inst_54678 = (state_54703[(10)]);
var state_54703__$1 = state_54703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54703__$1,(14),inst_54678);
} else {
if((state_val_54704 === (2))){
var state_54703__$1 = state_54703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54703__$1,(4),results);
} else {
if((state_val_54704 === (19))){
var state_54703__$1 = state_54703;
var statearr_54716_56015 = state_54703__$1;
(statearr_54716_56015[(2)] = null);

(statearr_54716_56015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (11))){
var inst_54678 = (state_54703[(2)]);
var state_54703__$1 = (function (){var statearr_54717 = state_54703;
(statearr_54717[(10)] = inst_54678);

return statearr_54717;
})();
var statearr_54718_56016 = state_54703__$1;
(statearr_54718_56016[(2)] = null);

(statearr_54718_56016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (9))){
var state_54703__$1 = state_54703;
var statearr_54719_56017 = state_54703__$1;
(statearr_54719_56017[(2)] = null);

(statearr_54719_56017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (5))){
var state_54703__$1 = state_54703;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54720_56018 = state_54703__$1;
(statearr_54720_56018[(1)] = (8));

} else {
var statearr_54721_56019 = state_54703__$1;
(statearr_54721_56019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (14))){
var inst_54681 = (state_54703[(8)]);
var inst_54683 = (state_54703[(11)]);
var inst_54681__$1 = (state_54703[(2)]);
var inst_54682 = (inst_54681__$1 == null);
var inst_54683__$1 = cljs.core.not(inst_54682);
var state_54703__$1 = (function (){var statearr_54722 = state_54703;
(statearr_54722[(8)] = inst_54681__$1);

(statearr_54722[(11)] = inst_54683__$1);

return statearr_54722;
})();
if(inst_54683__$1){
var statearr_54723_56020 = state_54703__$1;
(statearr_54723_56020[(1)] = (15));

} else {
var statearr_54724_56021 = state_54703__$1;
(statearr_54724_56021[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (16))){
var inst_54683 = (state_54703[(11)]);
var state_54703__$1 = state_54703;
var statearr_54725_56022 = state_54703__$1;
(statearr_54725_56022[(2)] = inst_54683);

(statearr_54725_56022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (10))){
var inst_54675 = (state_54703[(2)]);
var state_54703__$1 = state_54703;
var statearr_54726_56023 = state_54703__$1;
(statearr_54726_56023[(2)] = inst_54675);

(statearr_54726_56023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (18))){
var inst_54686 = (state_54703[(2)]);
var state_54703__$1 = state_54703;
var statearr_54727_56024 = state_54703__$1;
(statearr_54727_56024[(2)] = inst_54686);

(statearr_54727_56024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54704 === (8))){
var inst_54672 = cljs.core.async.close_BANG_(to);
var state_54703__$1 = state_54703;
var statearr_54728_56025 = state_54703__$1;
(statearr_54728_56025[(2)] = inst_54672);

(statearr_54728_56025[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0 = (function (){
var statearr_54729 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__);

(statearr_54729[(1)] = (1));

return statearr_54729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1 = (function (state_54703){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_54703);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e54730){var ex__54211__auto__ = e54730;
var statearr_54731_56026 = state_54703;
(statearr_54731_56026[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_54703[(4)]))){
var statearr_54732_56028 = state_54703;
(statearr_54732_56028[(1)] = cljs.core.first((state_54703[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56032 = state_54703;
state_54703 = G__56032;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__ = function(state_54703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1.call(this,state_54703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54208__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_54733 = f__54283__auto__();
(statearr_54733[(6)] = c__54282__auto__);

return statearr_54733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
}));

return c__54282__auto__;
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
var G__54735 = arguments.length;
switch (G__54735) {
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
var G__54737 = arguments.length;
switch (G__54737) {
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
var G__54739 = arguments.length;
switch (G__54739) {
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
var c__54282__auto___56043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_54765){
var state_val_54766 = (state_54765[(1)]);
if((state_val_54766 === (7))){
var inst_54761 = (state_54765[(2)]);
var state_54765__$1 = state_54765;
var statearr_54767_56044 = state_54765__$1;
(statearr_54767_56044[(2)] = inst_54761);

(statearr_54767_56044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54766 === (1))){
var state_54765__$1 = state_54765;
var statearr_54768_56045 = state_54765__$1;
(statearr_54768_56045[(2)] = null);

(statearr_54768_56045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54766 === (4))){
var inst_54742 = (state_54765[(7)]);
var inst_54742__$1 = (state_54765[(2)]);
var inst_54743 = (inst_54742__$1 == null);
var state_54765__$1 = (function (){var statearr_54769 = state_54765;
(statearr_54769[(7)] = inst_54742__$1);

return statearr_54769;
})();
if(cljs.core.truth_(inst_54743)){
var statearr_54770_56046 = state_54765__$1;
(statearr_54770_56046[(1)] = (5));

} else {
var statearr_54771_56047 = state_54765__$1;
(statearr_54771_56047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54766 === (13))){
var state_54765__$1 = state_54765;
var statearr_54772_56048 = state_54765__$1;
(statearr_54772_56048[(2)] = null);

(statearr_54772_56048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54766 === (6))){
var inst_54742 = (state_54765[(7)]);
var inst_54748 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54742) : p.call(null,inst_54742));
var state_54765__$1 = state_54765;
if(cljs.core.truth_(inst_54748)){
var statearr_54773_56052 = state_54765__$1;
(statearr_54773_56052[(1)] = (9));

} else {
var statearr_54774_56053 = state_54765__$1;
(statearr_54774_56053[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54766 === (3))){
var inst_54763 = (state_54765[(2)]);
var state_54765__$1 = state_54765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54765__$1,inst_54763);
} else {
if((state_val_54766 === (12))){
var state_54765__$1 = state_54765;
var statearr_54775_56054 = state_54765__$1;
(statearr_54775_56054[(2)] = null);

(statearr_54775_56054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54766 === (2))){
var state_54765__$1 = state_54765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54765__$1,(4),ch);
} else {
if((state_val_54766 === (11))){
var inst_54742 = (state_54765[(7)]);
var inst_54752 = (state_54765[(2)]);
var state_54765__$1 = state_54765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54765__$1,(8),inst_54752,inst_54742);
} else {
if((state_val_54766 === (9))){
var state_54765__$1 = state_54765;
var statearr_54776_56055 = state_54765__$1;
(statearr_54776_56055[(2)] = tc);

(statearr_54776_56055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54766 === (5))){
var inst_54745 = cljs.core.async.close_BANG_(tc);
var inst_54746 = cljs.core.async.close_BANG_(fc);
var state_54765__$1 = (function (){var statearr_54777 = state_54765;
(statearr_54777[(8)] = inst_54745);

return statearr_54777;
})();
var statearr_54778_56059 = state_54765__$1;
(statearr_54778_56059[(2)] = inst_54746);

(statearr_54778_56059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54766 === (14))){
var inst_54759 = (state_54765[(2)]);
var state_54765__$1 = state_54765;
var statearr_54779_56060 = state_54765__$1;
(statearr_54779_56060[(2)] = inst_54759);

(statearr_54779_56060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54766 === (10))){
var state_54765__$1 = state_54765;
var statearr_54780_56061 = state_54765__$1;
(statearr_54780_56061[(2)] = fc);

(statearr_54780_56061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54766 === (8))){
var inst_54754 = (state_54765[(2)]);
var state_54765__$1 = state_54765;
if(cljs.core.truth_(inst_54754)){
var statearr_54781_56062 = state_54765__$1;
(statearr_54781_56062[(1)] = (12));

} else {
var statearr_54782_56063 = state_54765__$1;
(statearr_54782_56063[(1)] = (13));

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
var cljs$core$async$state_machine__54208__auto__ = null;
var cljs$core$async$state_machine__54208__auto____0 = (function (){
var statearr_54783 = [null,null,null,null,null,null,null,null,null];
(statearr_54783[(0)] = cljs$core$async$state_machine__54208__auto__);

(statearr_54783[(1)] = (1));

return statearr_54783;
});
var cljs$core$async$state_machine__54208__auto____1 = (function (state_54765){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_54765);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e54784){var ex__54211__auto__ = e54784;
var statearr_54785_56067 = state_54765;
(statearr_54785_56067[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_54765[(4)]))){
var statearr_54786_56068 = state_54765;
(statearr_54786_56068[(1)] = cljs.core.first((state_54765[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56069 = state_54765;
state_54765 = G__56069;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$state_machine__54208__auto__ = function(state_54765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54208__auto____1.call(this,state_54765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54208__auto____0;
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54208__auto____1;
return cljs$core$async$state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_54787 = f__54283__auto__();
(statearr_54787[(6)] = c__54282__auto___56043);

return statearr_54787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
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
var c__54282__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_54809){
var state_val_54810 = (state_54809[(1)]);
if((state_val_54810 === (7))){
var inst_54805 = (state_54809[(2)]);
var state_54809__$1 = state_54809;
var statearr_54811_56070 = state_54809__$1;
(statearr_54811_56070[(2)] = inst_54805);

(statearr_54811_56070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54810 === (1))){
var inst_54788 = init;
var inst_54789 = inst_54788;
var state_54809__$1 = (function (){var statearr_54812 = state_54809;
(statearr_54812[(7)] = inst_54789);

return statearr_54812;
})();
var statearr_54813_56071 = state_54809__$1;
(statearr_54813_56071[(2)] = null);

(statearr_54813_56071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54810 === (4))){
var inst_54792 = (state_54809[(8)]);
var inst_54792__$1 = (state_54809[(2)]);
var inst_54793 = (inst_54792__$1 == null);
var state_54809__$1 = (function (){var statearr_54814 = state_54809;
(statearr_54814[(8)] = inst_54792__$1);

return statearr_54814;
})();
if(cljs.core.truth_(inst_54793)){
var statearr_54815_56072 = state_54809__$1;
(statearr_54815_56072[(1)] = (5));

} else {
var statearr_54816_56073 = state_54809__$1;
(statearr_54816_56073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54810 === (6))){
var inst_54789 = (state_54809[(7)]);
var inst_54792 = (state_54809[(8)]);
var inst_54796 = (state_54809[(9)]);
var inst_54796__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_54789,inst_54792) : f.call(null,inst_54789,inst_54792));
var inst_54797 = cljs.core.reduced_QMARK_(inst_54796__$1);
var state_54809__$1 = (function (){var statearr_54817 = state_54809;
(statearr_54817[(9)] = inst_54796__$1);

return statearr_54817;
})();
if(inst_54797){
var statearr_54818_56074 = state_54809__$1;
(statearr_54818_56074[(1)] = (8));

} else {
var statearr_54819_56075 = state_54809__$1;
(statearr_54819_56075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54810 === (3))){
var inst_54807 = (state_54809[(2)]);
var state_54809__$1 = state_54809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54809__$1,inst_54807);
} else {
if((state_val_54810 === (2))){
var state_54809__$1 = state_54809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54809__$1,(4),ch);
} else {
if((state_val_54810 === (9))){
var inst_54796 = (state_54809[(9)]);
var inst_54789 = inst_54796;
var state_54809__$1 = (function (){var statearr_54820 = state_54809;
(statearr_54820[(7)] = inst_54789);

return statearr_54820;
})();
var statearr_54821_56076 = state_54809__$1;
(statearr_54821_56076[(2)] = null);

(statearr_54821_56076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54810 === (5))){
var inst_54789 = (state_54809[(7)]);
var state_54809__$1 = state_54809;
var statearr_54822_56077 = state_54809__$1;
(statearr_54822_56077[(2)] = inst_54789);

(statearr_54822_56077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54810 === (10))){
var inst_54803 = (state_54809[(2)]);
var state_54809__$1 = state_54809;
var statearr_54823_56078 = state_54809__$1;
(statearr_54823_56078[(2)] = inst_54803);

(statearr_54823_56078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54810 === (8))){
var inst_54796 = (state_54809[(9)]);
var inst_54799 = cljs.core.deref(inst_54796);
var state_54809__$1 = state_54809;
var statearr_54824_56079 = state_54809__$1;
(statearr_54824_56079[(2)] = inst_54799);

(statearr_54824_56079[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__54208__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54208__auto____0 = (function (){
var statearr_54825 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54825[(0)] = cljs$core$async$reduce_$_state_machine__54208__auto__);

(statearr_54825[(1)] = (1));

return statearr_54825;
});
var cljs$core$async$reduce_$_state_machine__54208__auto____1 = (function (state_54809){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_54809);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e54826){var ex__54211__auto__ = e54826;
var statearr_54827_56080 = state_54809;
(statearr_54827_56080[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_54809[(4)]))){
var statearr_54828_56081 = state_54809;
(statearr_54828_56081[(1)] = cljs.core.first((state_54809[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56082 = state_54809;
state_54809 = G__56082;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54208__auto__ = function(state_54809){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54208__auto____1.call(this,state_54809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54208__auto____0;
cljs$core$async$reduce_$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54208__auto____1;
return cljs$core$async$reduce_$_state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_54829 = f__54283__auto__();
(statearr_54829[(6)] = c__54282__auto__);

return statearr_54829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
}));

return c__54282__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54282__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_54835){
var state_val_54836 = (state_54835[(1)]);
if((state_val_54836 === (1))){
var inst_54830 = cljs.core.async.reduce(f__$1,init,ch);
var state_54835__$1 = state_54835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54835__$1,(2),inst_54830);
} else {
if((state_val_54836 === (2))){
var inst_54832 = (state_54835[(2)]);
var inst_54833 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_54832) : f__$1.call(null,inst_54832));
var state_54835__$1 = state_54835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54835__$1,inst_54833);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54208__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54208__auto____0 = (function (){
var statearr_54837 = [null,null,null,null,null,null,null];
(statearr_54837[(0)] = cljs$core$async$transduce_$_state_machine__54208__auto__);

(statearr_54837[(1)] = (1));

return statearr_54837;
});
var cljs$core$async$transduce_$_state_machine__54208__auto____1 = (function (state_54835){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_54835);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e54838){var ex__54211__auto__ = e54838;
var statearr_54839_56083 = state_54835;
(statearr_54839_56083[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_54835[(4)]))){
var statearr_54840_56084 = state_54835;
(statearr_54840_56084[(1)] = cljs.core.first((state_54835[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56085 = state_54835;
state_54835 = G__56085;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54208__auto__ = function(state_54835){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54208__auto____1.call(this,state_54835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54208__auto____0;
cljs$core$async$transduce_$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54208__auto____1;
return cljs$core$async$transduce_$_state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_54841 = f__54283__auto__();
(statearr_54841[(6)] = c__54282__auto__);

return statearr_54841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
}));

return c__54282__auto__;
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
var G__54843 = arguments.length;
switch (G__54843) {
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
var c__54282__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_54868){
var state_val_54869 = (state_54868[(1)]);
if((state_val_54869 === (7))){
var inst_54850 = (state_54868[(2)]);
var state_54868__$1 = state_54868;
var statearr_54870_56087 = state_54868__$1;
(statearr_54870_56087[(2)] = inst_54850);

(statearr_54870_56087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54869 === (1))){
var inst_54844 = cljs.core.seq(coll);
var inst_54845 = inst_54844;
var state_54868__$1 = (function (){var statearr_54871 = state_54868;
(statearr_54871[(7)] = inst_54845);

return statearr_54871;
})();
var statearr_54872_56088 = state_54868__$1;
(statearr_54872_56088[(2)] = null);

(statearr_54872_56088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54869 === (4))){
var inst_54845 = (state_54868[(7)]);
var inst_54848 = cljs.core.first(inst_54845);
var state_54868__$1 = state_54868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54868__$1,(7),ch,inst_54848);
} else {
if((state_val_54869 === (13))){
var inst_54862 = (state_54868[(2)]);
var state_54868__$1 = state_54868;
var statearr_54873_56089 = state_54868__$1;
(statearr_54873_56089[(2)] = inst_54862);

(statearr_54873_56089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54869 === (6))){
var inst_54853 = (state_54868[(2)]);
var state_54868__$1 = state_54868;
if(cljs.core.truth_(inst_54853)){
var statearr_54874_56090 = state_54868__$1;
(statearr_54874_56090[(1)] = (8));

} else {
var statearr_54875_56091 = state_54868__$1;
(statearr_54875_56091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54869 === (3))){
var inst_54866 = (state_54868[(2)]);
var state_54868__$1 = state_54868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54868__$1,inst_54866);
} else {
if((state_val_54869 === (12))){
var state_54868__$1 = state_54868;
var statearr_54876_56092 = state_54868__$1;
(statearr_54876_56092[(2)] = null);

(statearr_54876_56092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54869 === (2))){
var inst_54845 = (state_54868[(7)]);
var state_54868__$1 = state_54868;
if(cljs.core.truth_(inst_54845)){
var statearr_54877_56093 = state_54868__$1;
(statearr_54877_56093[(1)] = (4));

} else {
var statearr_54878_56094 = state_54868__$1;
(statearr_54878_56094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54869 === (11))){
var inst_54859 = cljs.core.async.close_BANG_(ch);
var state_54868__$1 = state_54868;
var statearr_54879_56095 = state_54868__$1;
(statearr_54879_56095[(2)] = inst_54859);

(statearr_54879_56095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54869 === (9))){
var state_54868__$1 = state_54868;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54880_56096 = state_54868__$1;
(statearr_54880_56096[(1)] = (11));

} else {
var statearr_54881_56097 = state_54868__$1;
(statearr_54881_56097[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54869 === (5))){
var inst_54845 = (state_54868[(7)]);
var state_54868__$1 = state_54868;
var statearr_54882_56098 = state_54868__$1;
(statearr_54882_56098[(2)] = inst_54845);

(statearr_54882_56098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54869 === (10))){
var inst_54864 = (state_54868[(2)]);
var state_54868__$1 = state_54868;
var statearr_54883_56099 = state_54868__$1;
(statearr_54883_56099[(2)] = inst_54864);

(statearr_54883_56099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54869 === (8))){
var inst_54845 = (state_54868[(7)]);
var inst_54855 = cljs.core.next(inst_54845);
var inst_54845__$1 = inst_54855;
var state_54868__$1 = (function (){var statearr_54884 = state_54868;
(statearr_54884[(7)] = inst_54845__$1);

return statearr_54884;
})();
var statearr_54885_56100 = state_54868__$1;
(statearr_54885_56100[(2)] = null);

(statearr_54885_56100[(1)] = (2));


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
var cljs$core$async$state_machine__54208__auto__ = null;
var cljs$core$async$state_machine__54208__auto____0 = (function (){
var statearr_54886 = [null,null,null,null,null,null,null,null];
(statearr_54886[(0)] = cljs$core$async$state_machine__54208__auto__);

(statearr_54886[(1)] = (1));

return statearr_54886;
});
var cljs$core$async$state_machine__54208__auto____1 = (function (state_54868){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_54868);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e54887){var ex__54211__auto__ = e54887;
var statearr_54888_56101 = state_54868;
(statearr_54888_56101[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_54868[(4)]))){
var statearr_54889_56102 = state_54868;
(statearr_54889_56102[(1)] = cljs.core.first((state_54868[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56103 = state_54868;
state_54868 = G__56103;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$state_machine__54208__auto__ = function(state_54868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54208__auto____1.call(this,state_54868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54208__auto____0;
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54208__auto____1;
return cljs$core$async$state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_54890 = f__54283__auto__();
(statearr_54890[(6)] = c__54282__auto__);

return statearr_54890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
}));

return c__54282__auto__;
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
var G__54892 = arguments.length;
switch (G__54892) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_56105 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_56105(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_56106 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_56106(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_56107 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_56107(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_56108 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_56108(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54893 = (function (ch,cs,meta54894){
this.ch = ch;
this.cs = cs;
this.meta54894 = meta54894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54895,meta54894__$1){
var self__ = this;
var _54895__$1 = this;
return (new cljs.core.async.t_cljs$core$async54893(self__.ch,self__.cs,meta54894__$1));
}));

(cljs.core.async.t_cljs$core$async54893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54895){
var self__ = this;
var _54895__$1 = this;
return self__.meta54894;
}));

(cljs.core.async.t_cljs$core$async54893.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54893.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54893.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async54893.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async54893.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async54893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54894","meta54894",-1722146875,null)], null);
}));

(cljs.core.async.t_cljs$core$async54893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54893");

(cljs.core.async.t_cljs$core$async54893.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54893.
 */
cljs.core.async.__GT_t_cljs$core$async54893 = (function cljs$core$async$__GT_t_cljs$core$async54893(ch,cs,meta54894){
return (new cljs.core.async.t_cljs$core$async54893(ch,cs,meta54894));
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
var m = (new cljs.core.async.t_cljs$core$async54893(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__54282__auto___56117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_55028){
var state_val_55029 = (state_55028[(1)]);
if((state_val_55029 === (7))){
var inst_55024 = (state_55028[(2)]);
var state_55028__$1 = state_55028;
var statearr_55030_56124 = state_55028__$1;
(statearr_55030_56124[(2)] = inst_55024);

(statearr_55030_56124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (20))){
var inst_54929 = (state_55028[(7)]);
var inst_54941 = cljs.core.first(inst_54929);
var inst_54942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54941,(0),null);
var inst_54943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54941,(1),null);
var state_55028__$1 = (function (){var statearr_55031 = state_55028;
(statearr_55031[(8)] = inst_54942);

return statearr_55031;
})();
if(cljs.core.truth_(inst_54943)){
var statearr_55032_56134 = state_55028__$1;
(statearr_55032_56134[(1)] = (22));

} else {
var statearr_55033_56139 = state_55028__$1;
(statearr_55033_56139[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (27))){
var inst_54971 = (state_55028[(9)]);
var inst_54973 = (state_55028[(10)]);
var inst_54978 = (state_55028[(11)]);
var inst_54898 = (state_55028[(12)]);
var inst_54978__$1 = cljs.core._nth(inst_54971,inst_54973);
var inst_54979 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54978__$1,inst_54898,done);
var state_55028__$1 = (function (){var statearr_55034 = state_55028;
(statearr_55034[(11)] = inst_54978__$1);

return statearr_55034;
})();
if(cljs.core.truth_(inst_54979)){
var statearr_55035_56140 = state_55028__$1;
(statearr_55035_56140[(1)] = (30));

} else {
var statearr_55036_56141 = state_55028__$1;
(statearr_55036_56141[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (1))){
var state_55028__$1 = state_55028;
var statearr_55037_56142 = state_55028__$1;
(statearr_55037_56142[(2)] = null);

(statearr_55037_56142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (24))){
var inst_54929 = (state_55028[(7)]);
var inst_54948 = (state_55028[(2)]);
var inst_54949 = cljs.core.next(inst_54929);
var inst_54907 = inst_54949;
var inst_54908 = null;
var inst_54909 = (0);
var inst_54910 = (0);
var state_55028__$1 = (function (){var statearr_55038 = state_55028;
(statearr_55038[(13)] = inst_54948);

(statearr_55038[(14)] = inst_54907);

(statearr_55038[(15)] = inst_54908);

(statearr_55038[(16)] = inst_54909);

(statearr_55038[(17)] = inst_54910);

return statearr_55038;
})();
var statearr_55039_56143 = state_55028__$1;
(statearr_55039_56143[(2)] = null);

(statearr_55039_56143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (39))){
var state_55028__$1 = state_55028;
var statearr_55043_56144 = state_55028__$1;
(statearr_55043_56144[(2)] = null);

(statearr_55043_56144[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (4))){
var inst_54898 = (state_55028[(12)]);
var inst_54898__$1 = (state_55028[(2)]);
var inst_54899 = (inst_54898__$1 == null);
var state_55028__$1 = (function (){var statearr_55044 = state_55028;
(statearr_55044[(12)] = inst_54898__$1);

return statearr_55044;
})();
if(cljs.core.truth_(inst_54899)){
var statearr_55045_56145 = state_55028__$1;
(statearr_55045_56145[(1)] = (5));

} else {
var statearr_55046_56146 = state_55028__$1;
(statearr_55046_56146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (15))){
var inst_54910 = (state_55028[(17)]);
var inst_54907 = (state_55028[(14)]);
var inst_54908 = (state_55028[(15)]);
var inst_54909 = (state_55028[(16)]);
var inst_54925 = (state_55028[(2)]);
var inst_54926 = (inst_54910 + (1));
var tmp55040 = inst_54907;
var tmp55041 = inst_54908;
var tmp55042 = inst_54909;
var inst_54907__$1 = tmp55040;
var inst_54908__$1 = tmp55041;
var inst_54909__$1 = tmp55042;
var inst_54910__$1 = inst_54926;
var state_55028__$1 = (function (){var statearr_55047 = state_55028;
(statearr_55047[(18)] = inst_54925);

(statearr_55047[(14)] = inst_54907__$1);

(statearr_55047[(15)] = inst_54908__$1);

(statearr_55047[(16)] = inst_54909__$1);

(statearr_55047[(17)] = inst_54910__$1);

return statearr_55047;
})();
var statearr_55048_56147 = state_55028__$1;
(statearr_55048_56147[(2)] = null);

(statearr_55048_56147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (21))){
var inst_54952 = (state_55028[(2)]);
var state_55028__$1 = state_55028;
var statearr_55052_56148 = state_55028__$1;
(statearr_55052_56148[(2)] = inst_54952);

(statearr_55052_56148[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (31))){
var inst_54978 = (state_55028[(11)]);
var inst_54982 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54978);
var state_55028__$1 = state_55028;
var statearr_55053_56149 = state_55028__$1;
(statearr_55053_56149[(2)] = inst_54982);

(statearr_55053_56149[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (32))){
var inst_54973 = (state_55028[(10)]);
var inst_54970 = (state_55028[(19)]);
var inst_54971 = (state_55028[(9)]);
var inst_54972 = (state_55028[(20)]);
var inst_54984 = (state_55028[(2)]);
var inst_54985 = (inst_54973 + (1));
var tmp55049 = inst_54970;
var tmp55050 = inst_54972;
var tmp55051 = inst_54971;
var inst_54970__$1 = tmp55049;
var inst_54971__$1 = tmp55051;
var inst_54972__$1 = tmp55050;
var inst_54973__$1 = inst_54985;
var state_55028__$1 = (function (){var statearr_55054 = state_55028;
(statearr_55054[(21)] = inst_54984);

(statearr_55054[(19)] = inst_54970__$1);

(statearr_55054[(9)] = inst_54971__$1);

(statearr_55054[(20)] = inst_54972__$1);

(statearr_55054[(10)] = inst_54973__$1);

return statearr_55054;
})();
var statearr_55055_56150 = state_55028__$1;
(statearr_55055_56150[(2)] = null);

(statearr_55055_56150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (40))){
var inst_54997 = (state_55028[(22)]);
var inst_55001 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54997);
var state_55028__$1 = state_55028;
var statearr_55056_56151 = state_55028__$1;
(statearr_55056_56151[(2)] = inst_55001);

(statearr_55056_56151[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (33))){
var inst_54988 = (state_55028[(23)]);
var inst_54990 = cljs.core.chunked_seq_QMARK_(inst_54988);
var state_55028__$1 = state_55028;
if(inst_54990){
var statearr_55057_56152 = state_55028__$1;
(statearr_55057_56152[(1)] = (36));

} else {
var statearr_55058_56153 = state_55028__$1;
(statearr_55058_56153[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (13))){
var inst_54919 = (state_55028[(24)]);
var inst_54922 = cljs.core.async.close_BANG_(inst_54919);
var state_55028__$1 = state_55028;
var statearr_55059_56154 = state_55028__$1;
(statearr_55059_56154[(2)] = inst_54922);

(statearr_55059_56154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (22))){
var inst_54942 = (state_55028[(8)]);
var inst_54945 = cljs.core.async.close_BANG_(inst_54942);
var state_55028__$1 = state_55028;
var statearr_55060_56157 = state_55028__$1;
(statearr_55060_56157[(2)] = inst_54945);

(statearr_55060_56157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (36))){
var inst_54988 = (state_55028[(23)]);
var inst_54992 = cljs.core.chunk_first(inst_54988);
var inst_54993 = cljs.core.chunk_rest(inst_54988);
var inst_54994 = cljs.core.count(inst_54992);
var inst_54970 = inst_54993;
var inst_54971 = inst_54992;
var inst_54972 = inst_54994;
var inst_54973 = (0);
var state_55028__$1 = (function (){var statearr_55061 = state_55028;
(statearr_55061[(19)] = inst_54970);

(statearr_55061[(9)] = inst_54971);

(statearr_55061[(20)] = inst_54972);

(statearr_55061[(10)] = inst_54973);

return statearr_55061;
})();
var statearr_55062_56158 = state_55028__$1;
(statearr_55062_56158[(2)] = null);

(statearr_55062_56158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (41))){
var inst_54988 = (state_55028[(23)]);
var inst_55003 = (state_55028[(2)]);
var inst_55004 = cljs.core.next(inst_54988);
var inst_54970 = inst_55004;
var inst_54971 = null;
var inst_54972 = (0);
var inst_54973 = (0);
var state_55028__$1 = (function (){var statearr_55063 = state_55028;
(statearr_55063[(25)] = inst_55003);

(statearr_55063[(19)] = inst_54970);

(statearr_55063[(9)] = inst_54971);

(statearr_55063[(20)] = inst_54972);

(statearr_55063[(10)] = inst_54973);

return statearr_55063;
})();
var statearr_55064_56163 = state_55028__$1;
(statearr_55064_56163[(2)] = null);

(statearr_55064_56163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (43))){
var state_55028__$1 = state_55028;
var statearr_55065_56164 = state_55028__$1;
(statearr_55065_56164[(2)] = null);

(statearr_55065_56164[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (29))){
var inst_55012 = (state_55028[(2)]);
var state_55028__$1 = state_55028;
var statearr_55066_56165 = state_55028__$1;
(statearr_55066_56165[(2)] = inst_55012);

(statearr_55066_56165[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (44))){
var inst_55021 = (state_55028[(2)]);
var state_55028__$1 = (function (){var statearr_55067 = state_55028;
(statearr_55067[(26)] = inst_55021);

return statearr_55067;
})();
var statearr_55068_56166 = state_55028__$1;
(statearr_55068_56166[(2)] = null);

(statearr_55068_56166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (6))){
var inst_54962 = (state_55028[(27)]);
var inst_54961 = cljs.core.deref(cs);
var inst_54962__$1 = cljs.core.keys(inst_54961);
var inst_54963 = cljs.core.count(inst_54962__$1);
var inst_54964 = cljs.core.reset_BANG_(dctr,inst_54963);
var inst_54969 = cljs.core.seq(inst_54962__$1);
var inst_54970 = inst_54969;
var inst_54971 = null;
var inst_54972 = (0);
var inst_54973 = (0);
var state_55028__$1 = (function (){var statearr_55069 = state_55028;
(statearr_55069[(27)] = inst_54962__$1);

(statearr_55069[(28)] = inst_54964);

(statearr_55069[(19)] = inst_54970);

(statearr_55069[(9)] = inst_54971);

(statearr_55069[(20)] = inst_54972);

(statearr_55069[(10)] = inst_54973);

return statearr_55069;
})();
var statearr_55070_56167 = state_55028__$1;
(statearr_55070_56167[(2)] = null);

(statearr_55070_56167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (28))){
var inst_54970 = (state_55028[(19)]);
var inst_54988 = (state_55028[(23)]);
var inst_54988__$1 = cljs.core.seq(inst_54970);
var state_55028__$1 = (function (){var statearr_55071 = state_55028;
(statearr_55071[(23)] = inst_54988__$1);

return statearr_55071;
})();
if(inst_54988__$1){
var statearr_55072_56168 = state_55028__$1;
(statearr_55072_56168[(1)] = (33));

} else {
var statearr_55073_56169 = state_55028__$1;
(statearr_55073_56169[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (25))){
var inst_54973 = (state_55028[(10)]);
var inst_54972 = (state_55028[(20)]);
var inst_54975 = (inst_54973 < inst_54972);
var inst_54976 = inst_54975;
var state_55028__$1 = state_55028;
if(cljs.core.truth_(inst_54976)){
var statearr_55074_56170 = state_55028__$1;
(statearr_55074_56170[(1)] = (27));

} else {
var statearr_55075_56171 = state_55028__$1;
(statearr_55075_56171[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (34))){
var state_55028__$1 = state_55028;
var statearr_55076_56172 = state_55028__$1;
(statearr_55076_56172[(2)] = null);

(statearr_55076_56172[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (17))){
var state_55028__$1 = state_55028;
var statearr_55077_56173 = state_55028__$1;
(statearr_55077_56173[(2)] = null);

(statearr_55077_56173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (3))){
var inst_55026 = (state_55028[(2)]);
var state_55028__$1 = state_55028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55028__$1,inst_55026);
} else {
if((state_val_55029 === (12))){
var inst_54957 = (state_55028[(2)]);
var state_55028__$1 = state_55028;
var statearr_55078_56174 = state_55028__$1;
(statearr_55078_56174[(2)] = inst_54957);

(statearr_55078_56174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (2))){
var state_55028__$1 = state_55028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55028__$1,(4),ch);
} else {
if((state_val_55029 === (23))){
var state_55028__$1 = state_55028;
var statearr_55079_56175 = state_55028__$1;
(statearr_55079_56175[(2)] = null);

(statearr_55079_56175[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (35))){
var inst_55010 = (state_55028[(2)]);
var state_55028__$1 = state_55028;
var statearr_55080_56176 = state_55028__$1;
(statearr_55080_56176[(2)] = inst_55010);

(statearr_55080_56176[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (19))){
var inst_54929 = (state_55028[(7)]);
var inst_54933 = cljs.core.chunk_first(inst_54929);
var inst_54934 = cljs.core.chunk_rest(inst_54929);
var inst_54935 = cljs.core.count(inst_54933);
var inst_54907 = inst_54934;
var inst_54908 = inst_54933;
var inst_54909 = inst_54935;
var inst_54910 = (0);
var state_55028__$1 = (function (){var statearr_55081 = state_55028;
(statearr_55081[(14)] = inst_54907);

(statearr_55081[(15)] = inst_54908);

(statearr_55081[(16)] = inst_54909);

(statearr_55081[(17)] = inst_54910);

return statearr_55081;
})();
var statearr_55082_56177 = state_55028__$1;
(statearr_55082_56177[(2)] = null);

(statearr_55082_56177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (11))){
var inst_54907 = (state_55028[(14)]);
var inst_54929 = (state_55028[(7)]);
var inst_54929__$1 = cljs.core.seq(inst_54907);
var state_55028__$1 = (function (){var statearr_55083 = state_55028;
(statearr_55083[(7)] = inst_54929__$1);

return statearr_55083;
})();
if(inst_54929__$1){
var statearr_55084_56178 = state_55028__$1;
(statearr_55084_56178[(1)] = (16));

} else {
var statearr_55085_56179 = state_55028__$1;
(statearr_55085_56179[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (9))){
var inst_54959 = (state_55028[(2)]);
var state_55028__$1 = state_55028;
var statearr_55086_56180 = state_55028__$1;
(statearr_55086_56180[(2)] = inst_54959);

(statearr_55086_56180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (5))){
var inst_54905 = cljs.core.deref(cs);
var inst_54906 = cljs.core.seq(inst_54905);
var inst_54907 = inst_54906;
var inst_54908 = null;
var inst_54909 = (0);
var inst_54910 = (0);
var state_55028__$1 = (function (){var statearr_55087 = state_55028;
(statearr_55087[(14)] = inst_54907);

(statearr_55087[(15)] = inst_54908);

(statearr_55087[(16)] = inst_54909);

(statearr_55087[(17)] = inst_54910);

return statearr_55087;
})();
var statearr_55088_56181 = state_55028__$1;
(statearr_55088_56181[(2)] = null);

(statearr_55088_56181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (14))){
var state_55028__$1 = state_55028;
var statearr_55089_56182 = state_55028__$1;
(statearr_55089_56182[(2)] = null);

(statearr_55089_56182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (45))){
var inst_55018 = (state_55028[(2)]);
var state_55028__$1 = state_55028;
var statearr_55090_56183 = state_55028__$1;
(statearr_55090_56183[(2)] = inst_55018);

(statearr_55090_56183[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (26))){
var inst_54962 = (state_55028[(27)]);
var inst_55014 = (state_55028[(2)]);
var inst_55015 = cljs.core.seq(inst_54962);
var state_55028__$1 = (function (){var statearr_55091 = state_55028;
(statearr_55091[(29)] = inst_55014);

return statearr_55091;
})();
if(inst_55015){
var statearr_55092_56184 = state_55028__$1;
(statearr_55092_56184[(1)] = (42));

} else {
var statearr_55093_56185 = state_55028__$1;
(statearr_55093_56185[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (16))){
var inst_54929 = (state_55028[(7)]);
var inst_54931 = cljs.core.chunked_seq_QMARK_(inst_54929);
var state_55028__$1 = state_55028;
if(inst_54931){
var statearr_55094_56186 = state_55028__$1;
(statearr_55094_56186[(1)] = (19));

} else {
var statearr_55095_56187 = state_55028__$1;
(statearr_55095_56187[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (38))){
var inst_55007 = (state_55028[(2)]);
var state_55028__$1 = state_55028;
var statearr_55096_56188 = state_55028__$1;
(statearr_55096_56188[(2)] = inst_55007);

(statearr_55096_56188[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (30))){
var state_55028__$1 = state_55028;
var statearr_55097_56189 = state_55028__$1;
(statearr_55097_56189[(2)] = null);

(statearr_55097_56189[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (10))){
var inst_54908 = (state_55028[(15)]);
var inst_54910 = (state_55028[(17)]);
var inst_54918 = cljs.core._nth(inst_54908,inst_54910);
var inst_54919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54918,(0),null);
var inst_54920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54918,(1),null);
var state_55028__$1 = (function (){var statearr_55098 = state_55028;
(statearr_55098[(24)] = inst_54919);

return statearr_55098;
})();
if(cljs.core.truth_(inst_54920)){
var statearr_55099_56190 = state_55028__$1;
(statearr_55099_56190[(1)] = (13));

} else {
var statearr_55100_56191 = state_55028__$1;
(statearr_55100_56191[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (18))){
var inst_54955 = (state_55028[(2)]);
var state_55028__$1 = state_55028;
var statearr_55101_56192 = state_55028__$1;
(statearr_55101_56192[(2)] = inst_54955);

(statearr_55101_56192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (42))){
var state_55028__$1 = state_55028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55028__$1,(45),dchan);
} else {
if((state_val_55029 === (37))){
var inst_54988 = (state_55028[(23)]);
var inst_54997 = (state_55028[(22)]);
var inst_54898 = (state_55028[(12)]);
var inst_54997__$1 = cljs.core.first(inst_54988);
var inst_54998 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54997__$1,inst_54898,done);
var state_55028__$1 = (function (){var statearr_55102 = state_55028;
(statearr_55102[(22)] = inst_54997__$1);

return statearr_55102;
})();
if(cljs.core.truth_(inst_54998)){
var statearr_55103_56193 = state_55028__$1;
(statearr_55103_56193[(1)] = (39));

} else {
var statearr_55104_56194 = state_55028__$1;
(statearr_55104_56194[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55029 === (8))){
var inst_54910 = (state_55028[(17)]);
var inst_54909 = (state_55028[(16)]);
var inst_54912 = (inst_54910 < inst_54909);
var inst_54913 = inst_54912;
var state_55028__$1 = state_55028;
if(cljs.core.truth_(inst_54913)){
var statearr_55105_56195 = state_55028__$1;
(statearr_55105_56195[(1)] = (10));

} else {
var statearr_55106_56196 = state_55028__$1;
(statearr_55106_56196[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__54208__auto__ = null;
var cljs$core$async$mult_$_state_machine__54208__auto____0 = (function (){
var statearr_55107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55107[(0)] = cljs$core$async$mult_$_state_machine__54208__auto__);

(statearr_55107[(1)] = (1));

return statearr_55107;
});
var cljs$core$async$mult_$_state_machine__54208__auto____1 = (function (state_55028){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_55028);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e55108){var ex__54211__auto__ = e55108;
var statearr_55109_56197 = state_55028;
(statearr_55109_56197[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_55028[(4)]))){
var statearr_55110_56198 = state_55028;
(statearr_55110_56198[(1)] = cljs.core.first((state_55028[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56199 = state_55028;
state_55028 = G__56199;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54208__auto__ = function(state_55028){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54208__auto____1.call(this,state_55028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54208__auto____0;
cljs$core$async$mult_$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54208__auto____1;
return cljs$core$async$mult_$_state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_55111 = f__54283__auto__();
(statearr_55111[(6)] = c__54282__auto___56117);

return statearr_55111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
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
var G__55113 = arguments.length;
switch (G__55113) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_56202 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_56202(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_56203 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_56203(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_56204 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_56204(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_56205 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_56205(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_56206 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_56206(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___56207 = arguments.length;
var i__5750__auto___56208 = (0);
while(true){
if((i__5750__auto___56208 < len__5749__auto___56207)){
args__5755__auto__.push((arguments[i__5750__auto___56208]));

var G__56209 = (i__5750__auto___56208 + (1));
i__5750__auto___56208 = G__56209;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55118){
var map__55119 = p__55118;
var map__55119__$1 = cljs.core.__destructure_map(map__55119);
var opts = map__55119__$1;
var statearr_55120_56210 = state;
(statearr_55120_56210[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_55121_56211 = state;
(statearr_55121_56211[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_55122_56212 = state;
(statearr_55122_56212[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55114){
var G__55115 = cljs.core.first(seq55114);
var seq55114__$1 = cljs.core.next(seq55114);
var G__55116 = cljs.core.first(seq55114__$1);
var seq55114__$2 = cljs.core.next(seq55114__$1);
var G__55117 = cljs.core.first(seq55114__$2);
var seq55114__$3 = cljs.core.next(seq55114__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55115,G__55116,G__55117,seq55114__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55123 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55124){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta55124 = meta55124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55125,meta55124__$1){
var self__ = this;
var _55125__$1 = this;
return (new cljs.core.async.t_cljs$core$async55123(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55124__$1));
}));

(cljs.core.async.t_cljs$core$async55123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55125){
var self__ = this;
var _55125__$1 = this;
return self__.meta55124;
}));

(cljs.core.async.t_cljs$core$async55123.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async55123.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55123.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55123.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55123.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55123.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55123.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55124","meta55124",-345775075,null)], null);
}));

(cljs.core.async.t_cljs$core$async55123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55123");

(cljs.core.async.t_cljs$core$async55123.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55123.
 */
cljs.core.async.__GT_t_cljs$core$async55123 = (function cljs$core$async$__GT_t_cljs$core$async55123(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55124){
return (new cljs.core.async.t_cljs$core$async55123(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55124));
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
var m = (new cljs.core.async.t_cljs$core$async55123(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__54282__auto___56218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_55193){
var state_val_55194 = (state_55193[(1)]);
if((state_val_55194 === (7))){
var inst_55153 = (state_55193[(2)]);
var state_55193__$1 = state_55193;
if(cljs.core.truth_(inst_55153)){
var statearr_55195_56219 = state_55193__$1;
(statearr_55195_56219[(1)] = (8));

} else {
var statearr_55196_56220 = state_55193__$1;
(statearr_55196_56220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (20))){
var inst_55146 = (state_55193[(7)]);
var state_55193__$1 = state_55193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55193__$1,(23),out,inst_55146);
} else {
if((state_val_55194 === (1))){
var inst_55129 = calc_state();
var inst_55130 = cljs.core.__destructure_map(inst_55129);
var inst_55131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55130,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55130,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55130,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55134 = inst_55129;
var state_55193__$1 = (function (){var statearr_55197 = state_55193;
(statearr_55197[(8)] = inst_55131);

(statearr_55197[(9)] = inst_55132);

(statearr_55197[(10)] = inst_55133);

(statearr_55197[(11)] = inst_55134);

return statearr_55197;
})();
var statearr_55198_56221 = state_55193__$1;
(statearr_55198_56221[(2)] = null);

(statearr_55198_56221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (24))){
var inst_55137 = (state_55193[(12)]);
var inst_55134 = inst_55137;
var state_55193__$1 = (function (){var statearr_55199 = state_55193;
(statearr_55199[(11)] = inst_55134);

return statearr_55199;
})();
var statearr_55200_56226 = state_55193__$1;
(statearr_55200_56226[(2)] = null);

(statearr_55200_56226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (4))){
var inst_55146 = (state_55193[(7)]);
var inst_55148 = (state_55193[(13)]);
var inst_55145 = (state_55193[(2)]);
var inst_55146__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55145,(0),null);
var inst_55147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55145,(1),null);
var inst_55148__$1 = (inst_55146__$1 == null);
var state_55193__$1 = (function (){var statearr_55201 = state_55193;
(statearr_55201[(7)] = inst_55146__$1);

(statearr_55201[(14)] = inst_55147);

(statearr_55201[(13)] = inst_55148__$1);

return statearr_55201;
})();
if(cljs.core.truth_(inst_55148__$1)){
var statearr_55202_56227 = state_55193__$1;
(statearr_55202_56227[(1)] = (5));

} else {
var statearr_55203_56228 = state_55193__$1;
(statearr_55203_56228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (15))){
var inst_55138 = (state_55193[(15)]);
var inst_55167 = (state_55193[(16)]);
var inst_55167__$1 = cljs.core.empty_QMARK_(inst_55138);
var state_55193__$1 = (function (){var statearr_55204 = state_55193;
(statearr_55204[(16)] = inst_55167__$1);

return statearr_55204;
})();
if(inst_55167__$1){
var statearr_55205_56229 = state_55193__$1;
(statearr_55205_56229[(1)] = (17));

} else {
var statearr_55206_56230 = state_55193__$1;
(statearr_55206_56230[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (21))){
var inst_55137 = (state_55193[(12)]);
var inst_55134 = inst_55137;
var state_55193__$1 = (function (){var statearr_55207 = state_55193;
(statearr_55207[(11)] = inst_55134);

return statearr_55207;
})();
var statearr_55208_56231 = state_55193__$1;
(statearr_55208_56231[(2)] = null);

(statearr_55208_56231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (13))){
var inst_55160 = (state_55193[(2)]);
var inst_55161 = calc_state();
var inst_55134 = inst_55161;
var state_55193__$1 = (function (){var statearr_55209 = state_55193;
(statearr_55209[(17)] = inst_55160);

(statearr_55209[(11)] = inst_55134);

return statearr_55209;
})();
var statearr_55210_56232 = state_55193__$1;
(statearr_55210_56232[(2)] = null);

(statearr_55210_56232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (22))){
var inst_55187 = (state_55193[(2)]);
var state_55193__$1 = state_55193;
var statearr_55211_56233 = state_55193__$1;
(statearr_55211_56233[(2)] = inst_55187);

(statearr_55211_56233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (6))){
var inst_55147 = (state_55193[(14)]);
var inst_55151 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55147,change);
var state_55193__$1 = state_55193;
var statearr_55212_56234 = state_55193__$1;
(statearr_55212_56234[(2)] = inst_55151);

(statearr_55212_56234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (25))){
var state_55193__$1 = state_55193;
var statearr_55213_56235 = state_55193__$1;
(statearr_55213_56235[(2)] = null);

(statearr_55213_56235[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (17))){
var inst_55139 = (state_55193[(18)]);
var inst_55147 = (state_55193[(14)]);
var inst_55169 = (inst_55139.cljs$core$IFn$_invoke$arity$1 ? inst_55139.cljs$core$IFn$_invoke$arity$1(inst_55147) : inst_55139.call(null,inst_55147));
var inst_55170 = cljs.core.not(inst_55169);
var state_55193__$1 = state_55193;
var statearr_55214_56236 = state_55193__$1;
(statearr_55214_56236[(2)] = inst_55170);

(statearr_55214_56236[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (3))){
var inst_55191 = (state_55193[(2)]);
var state_55193__$1 = state_55193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55193__$1,inst_55191);
} else {
if((state_val_55194 === (12))){
var state_55193__$1 = state_55193;
var statearr_55215_56237 = state_55193__$1;
(statearr_55215_56237[(2)] = null);

(statearr_55215_56237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (2))){
var inst_55134 = (state_55193[(11)]);
var inst_55137 = (state_55193[(12)]);
var inst_55137__$1 = cljs.core.__destructure_map(inst_55134);
var inst_55138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55137__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55137__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55137__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55193__$1 = (function (){var statearr_55216 = state_55193;
(statearr_55216[(12)] = inst_55137__$1);

(statearr_55216[(15)] = inst_55138);

(statearr_55216[(18)] = inst_55139);

return statearr_55216;
})();
return cljs.core.async.ioc_alts_BANG_(state_55193__$1,(4),inst_55140);
} else {
if((state_val_55194 === (23))){
var inst_55178 = (state_55193[(2)]);
var state_55193__$1 = state_55193;
if(cljs.core.truth_(inst_55178)){
var statearr_55217_56238 = state_55193__$1;
(statearr_55217_56238[(1)] = (24));

} else {
var statearr_55218_56239 = state_55193__$1;
(statearr_55218_56239[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (19))){
var inst_55173 = (state_55193[(2)]);
var state_55193__$1 = state_55193;
var statearr_55219_56240 = state_55193__$1;
(statearr_55219_56240[(2)] = inst_55173);

(statearr_55219_56240[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (11))){
var inst_55147 = (state_55193[(14)]);
var inst_55157 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_55147);
var state_55193__$1 = state_55193;
var statearr_55220_56241 = state_55193__$1;
(statearr_55220_56241[(2)] = inst_55157);

(statearr_55220_56241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (9))){
var inst_55138 = (state_55193[(15)]);
var inst_55147 = (state_55193[(14)]);
var inst_55164 = (state_55193[(19)]);
var inst_55164__$1 = (inst_55138.cljs$core$IFn$_invoke$arity$1 ? inst_55138.cljs$core$IFn$_invoke$arity$1(inst_55147) : inst_55138.call(null,inst_55147));
var state_55193__$1 = (function (){var statearr_55221 = state_55193;
(statearr_55221[(19)] = inst_55164__$1);

return statearr_55221;
})();
if(cljs.core.truth_(inst_55164__$1)){
var statearr_55222_56246 = state_55193__$1;
(statearr_55222_56246[(1)] = (14));

} else {
var statearr_55223_56247 = state_55193__$1;
(statearr_55223_56247[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (5))){
var inst_55148 = (state_55193[(13)]);
var state_55193__$1 = state_55193;
var statearr_55224_56248 = state_55193__$1;
(statearr_55224_56248[(2)] = inst_55148);

(statearr_55224_56248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (14))){
var inst_55164 = (state_55193[(19)]);
var state_55193__$1 = state_55193;
var statearr_55225_56249 = state_55193__$1;
(statearr_55225_56249[(2)] = inst_55164);

(statearr_55225_56249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (26))){
var inst_55183 = (state_55193[(2)]);
var state_55193__$1 = state_55193;
var statearr_55226_56250 = state_55193__$1;
(statearr_55226_56250[(2)] = inst_55183);

(statearr_55226_56250[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (16))){
var inst_55175 = (state_55193[(2)]);
var state_55193__$1 = state_55193;
if(cljs.core.truth_(inst_55175)){
var statearr_55227_56251 = state_55193__$1;
(statearr_55227_56251[(1)] = (20));

} else {
var statearr_55228_56252 = state_55193__$1;
(statearr_55228_56252[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (10))){
var inst_55189 = (state_55193[(2)]);
var state_55193__$1 = state_55193;
var statearr_55229_56253 = state_55193__$1;
(statearr_55229_56253[(2)] = inst_55189);

(statearr_55229_56253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (18))){
var inst_55167 = (state_55193[(16)]);
var state_55193__$1 = state_55193;
var statearr_55230_56254 = state_55193__$1;
(statearr_55230_56254[(2)] = inst_55167);

(statearr_55230_56254[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55194 === (8))){
var inst_55146 = (state_55193[(7)]);
var inst_55155 = (inst_55146 == null);
var state_55193__$1 = state_55193;
if(cljs.core.truth_(inst_55155)){
var statearr_55231_56255 = state_55193__$1;
(statearr_55231_56255[(1)] = (11));

} else {
var statearr_55232_56256 = state_55193__$1;
(statearr_55232_56256[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__54208__auto__ = null;
var cljs$core$async$mix_$_state_machine__54208__auto____0 = (function (){
var statearr_55233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55233[(0)] = cljs$core$async$mix_$_state_machine__54208__auto__);

(statearr_55233[(1)] = (1));

return statearr_55233;
});
var cljs$core$async$mix_$_state_machine__54208__auto____1 = (function (state_55193){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_55193);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e55234){var ex__54211__auto__ = e55234;
var statearr_55235_56257 = state_55193;
(statearr_55235_56257[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_55193[(4)]))){
var statearr_55236_56258 = state_55193;
(statearr_55236_56258[(1)] = cljs.core.first((state_55193[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56259 = state_55193;
state_55193 = G__56259;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54208__auto__ = function(state_55193){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54208__auto____1.call(this,state_55193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54208__auto____0;
cljs$core$async$mix_$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54208__auto____1;
return cljs$core$async$mix_$_state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_55237 = f__54283__auto__();
(statearr_55237[(6)] = c__54282__auto___56218);

return statearr_55237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_56260 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_56260(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_56265 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_56265(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_56270 = (function() {
var G__56271 = null;
var G__56271__1 = (function (p){
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
var G__56271__2 = (function (p,v){
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
G__56271 = function(p,v){
switch(arguments.length){
case 1:
return G__56271__1.call(this,p);
case 2:
return G__56271__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56271.cljs$core$IFn$_invoke$arity$1 = G__56271__1;
G__56271.cljs$core$IFn$_invoke$arity$2 = G__56271__2;
return G__56271;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55239 = arguments.length;
switch (G__55239) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56270(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56270(p,v);
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
cljs.core.async.t_cljs$core$async55243 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55244){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55244 = meta55244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55245,meta55244__$1){
var self__ = this;
var _55245__$1 = this;
return (new cljs.core.async.t_cljs$core$async55243(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55244__$1));
}));

(cljs.core.async.t_cljs$core$async55243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55245){
var self__ = this;
var _55245__$1 = this;
return self__.meta55244;
}));

(cljs.core.async.t_cljs$core$async55243.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55243.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55243.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55243.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async55243.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async55243.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async55243.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async55243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55244","meta55244",1805864925,null)], null);
}));

(cljs.core.async.t_cljs$core$async55243.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55243");

(cljs.core.async.t_cljs$core$async55243.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55243");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55243.
 */
cljs.core.async.__GT_t_cljs$core$async55243 = (function cljs$core$async$__GT_t_cljs$core$async55243(ch,topic_fn,buf_fn,mults,ensure_mult,meta55244){
return (new cljs.core.async.t_cljs$core$async55243(ch,topic_fn,buf_fn,mults,ensure_mult,meta55244));
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
var G__55242 = arguments.length;
switch (G__55242) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__55240_SHARP_){
if(cljs.core.truth_((p1__55240_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55240_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__55240_SHARP_.call(null,topic)))){
return p1__55240_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55240_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async55243(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__54282__auto___56284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_55317){
var state_val_55318 = (state_55317[(1)]);
if((state_val_55318 === (7))){
var inst_55313 = (state_55317[(2)]);
var state_55317__$1 = state_55317;
var statearr_55319_56286 = state_55317__$1;
(statearr_55319_56286[(2)] = inst_55313);

(statearr_55319_56286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (20))){
var state_55317__$1 = state_55317;
var statearr_55320_56290 = state_55317__$1;
(statearr_55320_56290[(2)] = null);

(statearr_55320_56290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (1))){
var state_55317__$1 = state_55317;
var statearr_55321_56291 = state_55317__$1;
(statearr_55321_56291[(2)] = null);

(statearr_55321_56291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (24))){
var inst_55296 = (state_55317[(7)]);
var inst_55305 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_55296);
var state_55317__$1 = state_55317;
var statearr_55322_56292 = state_55317__$1;
(statearr_55322_56292[(2)] = inst_55305);

(statearr_55322_56292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (4))){
var inst_55248 = (state_55317[(8)]);
var inst_55248__$1 = (state_55317[(2)]);
var inst_55249 = (inst_55248__$1 == null);
var state_55317__$1 = (function (){var statearr_55323 = state_55317;
(statearr_55323[(8)] = inst_55248__$1);

return statearr_55323;
})();
if(cljs.core.truth_(inst_55249)){
var statearr_55324_56297 = state_55317__$1;
(statearr_55324_56297[(1)] = (5));

} else {
var statearr_55325_56298 = state_55317__$1;
(statearr_55325_56298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (15))){
var inst_55290 = (state_55317[(2)]);
var state_55317__$1 = state_55317;
var statearr_55326_56299 = state_55317__$1;
(statearr_55326_56299[(2)] = inst_55290);

(statearr_55326_56299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (21))){
var inst_55310 = (state_55317[(2)]);
var state_55317__$1 = (function (){var statearr_55327 = state_55317;
(statearr_55327[(9)] = inst_55310);

return statearr_55327;
})();
var statearr_55328_56301 = state_55317__$1;
(statearr_55328_56301[(2)] = null);

(statearr_55328_56301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (13))){
var inst_55272 = (state_55317[(10)]);
var inst_55274 = cljs.core.chunked_seq_QMARK_(inst_55272);
var state_55317__$1 = state_55317;
if(inst_55274){
var statearr_55329_56302 = state_55317__$1;
(statearr_55329_56302[(1)] = (16));

} else {
var statearr_55330_56303 = state_55317__$1;
(statearr_55330_56303[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (22))){
var inst_55302 = (state_55317[(2)]);
var state_55317__$1 = state_55317;
if(cljs.core.truth_(inst_55302)){
var statearr_55331_56305 = state_55317__$1;
(statearr_55331_56305[(1)] = (23));

} else {
var statearr_55332_56306 = state_55317__$1;
(statearr_55332_56306[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (6))){
var inst_55248 = (state_55317[(8)]);
var inst_55296 = (state_55317[(7)]);
var inst_55298 = (state_55317[(11)]);
var inst_55296__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_55248) : topic_fn.call(null,inst_55248));
var inst_55297 = cljs.core.deref(mults);
var inst_55298__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55297,inst_55296__$1);
var state_55317__$1 = (function (){var statearr_55333 = state_55317;
(statearr_55333[(7)] = inst_55296__$1);

(statearr_55333[(11)] = inst_55298__$1);

return statearr_55333;
})();
if(cljs.core.truth_(inst_55298__$1)){
var statearr_55334_56310 = state_55317__$1;
(statearr_55334_56310[(1)] = (19));

} else {
var statearr_55335_56311 = state_55317__$1;
(statearr_55335_56311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (25))){
var inst_55307 = (state_55317[(2)]);
var state_55317__$1 = state_55317;
var statearr_55336_56316 = state_55317__$1;
(statearr_55336_56316[(2)] = inst_55307);

(statearr_55336_56316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (17))){
var inst_55272 = (state_55317[(10)]);
var inst_55281 = cljs.core.first(inst_55272);
var inst_55282 = cljs.core.async.muxch_STAR_(inst_55281);
var inst_55283 = cljs.core.async.close_BANG_(inst_55282);
var inst_55284 = cljs.core.next(inst_55272);
var inst_55258 = inst_55284;
var inst_55259 = null;
var inst_55260 = (0);
var inst_55261 = (0);
var state_55317__$1 = (function (){var statearr_55337 = state_55317;
(statearr_55337[(12)] = inst_55283);

(statearr_55337[(13)] = inst_55258);

(statearr_55337[(14)] = inst_55259);

(statearr_55337[(15)] = inst_55260);

(statearr_55337[(16)] = inst_55261);

return statearr_55337;
})();
var statearr_55338_56318 = state_55317__$1;
(statearr_55338_56318[(2)] = null);

(statearr_55338_56318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (3))){
var inst_55315 = (state_55317[(2)]);
var state_55317__$1 = state_55317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55317__$1,inst_55315);
} else {
if((state_val_55318 === (12))){
var inst_55292 = (state_55317[(2)]);
var state_55317__$1 = state_55317;
var statearr_55339_56322 = state_55317__$1;
(statearr_55339_56322[(2)] = inst_55292);

(statearr_55339_56322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (2))){
var state_55317__$1 = state_55317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55317__$1,(4),ch);
} else {
if((state_val_55318 === (23))){
var state_55317__$1 = state_55317;
var statearr_55340_56323 = state_55317__$1;
(statearr_55340_56323[(2)] = null);

(statearr_55340_56323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (19))){
var inst_55298 = (state_55317[(11)]);
var inst_55248 = (state_55317[(8)]);
var inst_55300 = cljs.core.async.muxch_STAR_(inst_55298);
var state_55317__$1 = state_55317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55317__$1,(22),inst_55300,inst_55248);
} else {
if((state_val_55318 === (11))){
var inst_55258 = (state_55317[(13)]);
var inst_55272 = (state_55317[(10)]);
var inst_55272__$1 = cljs.core.seq(inst_55258);
var state_55317__$1 = (function (){var statearr_55341 = state_55317;
(statearr_55341[(10)] = inst_55272__$1);

return statearr_55341;
})();
if(inst_55272__$1){
var statearr_55342_56324 = state_55317__$1;
(statearr_55342_56324[(1)] = (13));

} else {
var statearr_55343_56325 = state_55317__$1;
(statearr_55343_56325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (9))){
var inst_55294 = (state_55317[(2)]);
var state_55317__$1 = state_55317;
var statearr_55344_56326 = state_55317__$1;
(statearr_55344_56326[(2)] = inst_55294);

(statearr_55344_56326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (5))){
var inst_55255 = cljs.core.deref(mults);
var inst_55256 = cljs.core.vals(inst_55255);
var inst_55257 = cljs.core.seq(inst_55256);
var inst_55258 = inst_55257;
var inst_55259 = null;
var inst_55260 = (0);
var inst_55261 = (0);
var state_55317__$1 = (function (){var statearr_55345 = state_55317;
(statearr_55345[(13)] = inst_55258);

(statearr_55345[(14)] = inst_55259);

(statearr_55345[(15)] = inst_55260);

(statearr_55345[(16)] = inst_55261);

return statearr_55345;
})();
var statearr_55346_56327 = state_55317__$1;
(statearr_55346_56327[(2)] = null);

(statearr_55346_56327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (14))){
var state_55317__$1 = state_55317;
var statearr_55350_56328 = state_55317__$1;
(statearr_55350_56328[(2)] = null);

(statearr_55350_56328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (16))){
var inst_55272 = (state_55317[(10)]);
var inst_55276 = cljs.core.chunk_first(inst_55272);
var inst_55277 = cljs.core.chunk_rest(inst_55272);
var inst_55278 = cljs.core.count(inst_55276);
var inst_55258 = inst_55277;
var inst_55259 = inst_55276;
var inst_55260 = inst_55278;
var inst_55261 = (0);
var state_55317__$1 = (function (){var statearr_55351 = state_55317;
(statearr_55351[(13)] = inst_55258);

(statearr_55351[(14)] = inst_55259);

(statearr_55351[(15)] = inst_55260);

(statearr_55351[(16)] = inst_55261);

return statearr_55351;
})();
var statearr_55352_56333 = state_55317__$1;
(statearr_55352_56333[(2)] = null);

(statearr_55352_56333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (10))){
var inst_55259 = (state_55317[(14)]);
var inst_55261 = (state_55317[(16)]);
var inst_55258 = (state_55317[(13)]);
var inst_55260 = (state_55317[(15)]);
var inst_55266 = cljs.core._nth(inst_55259,inst_55261);
var inst_55267 = cljs.core.async.muxch_STAR_(inst_55266);
var inst_55268 = cljs.core.async.close_BANG_(inst_55267);
var inst_55269 = (inst_55261 + (1));
var tmp55347 = inst_55259;
var tmp55348 = inst_55260;
var tmp55349 = inst_55258;
var inst_55258__$1 = tmp55349;
var inst_55259__$1 = tmp55347;
var inst_55260__$1 = tmp55348;
var inst_55261__$1 = inst_55269;
var state_55317__$1 = (function (){var statearr_55353 = state_55317;
(statearr_55353[(17)] = inst_55268);

(statearr_55353[(13)] = inst_55258__$1);

(statearr_55353[(14)] = inst_55259__$1);

(statearr_55353[(15)] = inst_55260__$1);

(statearr_55353[(16)] = inst_55261__$1);

return statearr_55353;
})();
var statearr_55354_56334 = state_55317__$1;
(statearr_55354_56334[(2)] = null);

(statearr_55354_56334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (18))){
var inst_55287 = (state_55317[(2)]);
var state_55317__$1 = state_55317;
var statearr_55355_56335 = state_55317__$1;
(statearr_55355_56335[(2)] = inst_55287);

(statearr_55355_56335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55318 === (8))){
var inst_55261 = (state_55317[(16)]);
var inst_55260 = (state_55317[(15)]);
var inst_55263 = (inst_55261 < inst_55260);
var inst_55264 = inst_55263;
var state_55317__$1 = state_55317;
if(cljs.core.truth_(inst_55264)){
var statearr_55356_56337 = state_55317__$1;
(statearr_55356_56337[(1)] = (10));

} else {
var statearr_55357_56338 = state_55317__$1;
(statearr_55357_56338[(1)] = (11));

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
var cljs$core$async$state_machine__54208__auto__ = null;
var cljs$core$async$state_machine__54208__auto____0 = (function (){
var statearr_55358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55358[(0)] = cljs$core$async$state_machine__54208__auto__);

(statearr_55358[(1)] = (1));

return statearr_55358;
});
var cljs$core$async$state_machine__54208__auto____1 = (function (state_55317){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_55317);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e55359){var ex__54211__auto__ = e55359;
var statearr_55360_56345 = state_55317;
(statearr_55360_56345[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_55317[(4)]))){
var statearr_55361_56346 = state_55317;
(statearr_55361_56346[(1)] = cljs.core.first((state_55317[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56348 = state_55317;
state_55317 = G__56348;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$state_machine__54208__auto__ = function(state_55317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54208__auto____1.call(this,state_55317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54208__auto____0;
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54208__auto____1;
return cljs$core$async$state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_55362 = f__54283__auto__();
(statearr_55362[(6)] = c__54282__auto___56284);

return statearr_55362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
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
var G__55364 = arguments.length;
switch (G__55364) {
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
var G__55366 = arguments.length;
switch (G__55366) {
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
var G__55368 = arguments.length;
switch (G__55368) {
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
var c__54282__auto___56362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_55411){
var state_val_55412 = (state_55411[(1)]);
if((state_val_55412 === (7))){
var state_55411__$1 = state_55411;
var statearr_55413_56369 = state_55411__$1;
(statearr_55413_56369[(2)] = null);

(statearr_55413_56369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (1))){
var state_55411__$1 = state_55411;
var statearr_55414_56370 = state_55411__$1;
(statearr_55414_56370[(2)] = null);

(statearr_55414_56370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (4))){
var inst_55372 = (state_55411[(7)]);
var inst_55371 = (state_55411[(8)]);
var inst_55374 = (inst_55372 < inst_55371);
var state_55411__$1 = state_55411;
if(cljs.core.truth_(inst_55374)){
var statearr_55415_56371 = state_55411__$1;
(statearr_55415_56371[(1)] = (6));

} else {
var statearr_55416_56372 = state_55411__$1;
(statearr_55416_56372[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (15))){
var inst_55397 = (state_55411[(9)]);
var inst_55402 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55397);
var state_55411__$1 = state_55411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55411__$1,(17),out,inst_55402);
} else {
if((state_val_55412 === (13))){
var inst_55397 = (state_55411[(9)]);
var inst_55397__$1 = (state_55411[(2)]);
var inst_55398 = cljs.core.some(cljs.core.nil_QMARK_,inst_55397__$1);
var state_55411__$1 = (function (){var statearr_55417 = state_55411;
(statearr_55417[(9)] = inst_55397__$1);

return statearr_55417;
})();
if(cljs.core.truth_(inst_55398)){
var statearr_55418_56373 = state_55411__$1;
(statearr_55418_56373[(1)] = (14));

} else {
var statearr_55419_56374 = state_55411__$1;
(statearr_55419_56374[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (6))){
var state_55411__$1 = state_55411;
var statearr_55420_56375 = state_55411__$1;
(statearr_55420_56375[(2)] = null);

(statearr_55420_56375[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (17))){
var inst_55404 = (state_55411[(2)]);
var state_55411__$1 = (function (){var statearr_55422 = state_55411;
(statearr_55422[(10)] = inst_55404);

return statearr_55422;
})();
var statearr_55423_56377 = state_55411__$1;
(statearr_55423_56377[(2)] = null);

(statearr_55423_56377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (3))){
var inst_55409 = (state_55411[(2)]);
var state_55411__$1 = state_55411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55411__$1,inst_55409);
} else {
if((state_val_55412 === (12))){
var _ = (function (){var statearr_55424 = state_55411;
(statearr_55424[(4)] = cljs.core.rest((state_55411[(4)])));

return statearr_55424;
})();
var state_55411__$1 = state_55411;
var ex55421 = (state_55411__$1[(2)]);
var statearr_55425_56382 = state_55411__$1;
(statearr_55425_56382[(5)] = ex55421);


if((ex55421 instanceof Object)){
var statearr_55426_56383 = state_55411__$1;
(statearr_55426_56383[(1)] = (11));

(statearr_55426_56383[(5)] = null);

} else {
throw ex55421;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (2))){
var inst_55370 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55371 = cnt;
var inst_55372 = (0);
var state_55411__$1 = (function (){var statearr_55427 = state_55411;
(statearr_55427[(11)] = inst_55370);

(statearr_55427[(8)] = inst_55371);

(statearr_55427[(7)] = inst_55372);

return statearr_55427;
})();
var statearr_55428_56385 = state_55411__$1;
(statearr_55428_56385[(2)] = null);

(statearr_55428_56385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (11))){
var inst_55376 = (state_55411[(2)]);
var inst_55377 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55411__$1 = (function (){var statearr_55429 = state_55411;
(statearr_55429[(12)] = inst_55376);

return statearr_55429;
})();
var statearr_55430_56386 = state_55411__$1;
(statearr_55430_56386[(2)] = inst_55377);

(statearr_55430_56386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (9))){
var inst_55372 = (state_55411[(7)]);
var _ = (function (){var statearr_55431 = state_55411;
(statearr_55431[(4)] = cljs.core.cons((12),(state_55411[(4)])));

return statearr_55431;
})();
var inst_55383 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55372) : chs__$1.call(null,inst_55372));
var inst_55384 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55372) : done.call(null,inst_55372));
var inst_55385 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55383,inst_55384);
var ___$1 = (function (){var statearr_55432 = state_55411;
(statearr_55432[(4)] = cljs.core.rest((state_55411[(4)])));

return statearr_55432;
})();
var state_55411__$1 = state_55411;
var statearr_55433_56387 = state_55411__$1;
(statearr_55433_56387[(2)] = inst_55385);

(statearr_55433_56387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (5))){
var inst_55395 = (state_55411[(2)]);
var state_55411__$1 = (function (){var statearr_55434 = state_55411;
(statearr_55434[(13)] = inst_55395);

return statearr_55434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55411__$1,(13),dchan);
} else {
if((state_val_55412 === (14))){
var inst_55400 = cljs.core.async.close_BANG_(out);
var state_55411__$1 = state_55411;
var statearr_55435_56392 = state_55411__$1;
(statearr_55435_56392[(2)] = inst_55400);

(statearr_55435_56392[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (16))){
var inst_55407 = (state_55411[(2)]);
var state_55411__$1 = state_55411;
var statearr_55436_56393 = state_55411__$1;
(statearr_55436_56393[(2)] = inst_55407);

(statearr_55436_56393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (10))){
var inst_55372 = (state_55411[(7)]);
var inst_55388 = (state_55411[(2)]);
var inst_55389 = (inst_55372 + (1));
var inst_55372__$1 = inst_55389;
var state_55411__$1 = (function (){var statearr_55437 = state_55411;
(statearr_55437[(14)] = inst_55388);

(statearr_55437[(7)] = inst_55372__$1);

return statearr_55437;
})();
var statearr_55438_56394 = state_55411__$1;
(statearr_55438_56394[(2)] = null);

(statearr_55438_56394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55412 === (8))){
var inst_55393 = (state_55411[(2)]);
var state_55411__$1 = state_55411;
var statearr_55439_56395 = state_55411__$1;
(statearr_55439_56395[(2)] = inst_55393);

(statearr_55439_56395[(1)] = (5));


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
var cljs$core$async$state_machine__54208__auto__ = null;
var cljs$core$async$state_machine__54208__auto____0 = (function (){
var statearr_55440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55440[(0)] = cljs$core$async$state_machine__54208__auto__);

(statearr_55440[(1)] = (1));

return statearr_55440;
});
var cljs$core$async$state_machine__54208__auto____1 = (function (state_55411){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_55411);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e55441){var ex__54211__auto__ = e55441;
var statearr_55442_56396 = state_55411;
(statearr_55442_56396[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_55411[(4)]))){
var statearr_55443_56397 = state_55411;
(statearr_55443_56397[(1)] = cljs.core.first((state_55411[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56398 = state_55411;
state_55411 = G__56398;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$state_machine__54208__auto__ = function(state_55411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54208__auto____1.call(this,state_55411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54208__auto____0;
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54208__auto____1;
return cljs$core$async$state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_55444 = f__54283__auto__();
(statearr_55444[(6)] = c__54282__auto___56362);

return statearr_55444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
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
var G__55447 = arguments.length;
switch (G__55447) {
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
var c__54282__auto___56400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_55479){
var state_val_55480 = (state_55479[(1)]);
if((state_val_55480 === (7))){
var inst_55458 = (state_55479[(7)]);
var inst_55459 = (state_55479[(8)]);
var inst_55458__$1 = (state_55479[(2)]);
var inst_55459__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55458__$1,(0),null);
var inst_55460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55458__$1,(1),null);
var inst_55461 = (inst_55459__$1 == null);
var state_55479__$1 = (function (){var statearr_55481 = state_55479;
(statearr_55481[(7)] = inst_55458__$1);

(statearr_55481[(8)] = inst_55459__$1);

(statearr_55481[(9)] = inst_55460);

return statearr_55481;
})();
if(cljs.core.truth_(inst_55461)){
var statearr_55482_56401 = state_55479__$1;
(statearr_55482_56401[(1)] = (8));

} else {
var statearr_55483_56402 = state_55479__$1;
(statearr_55483_56402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55480 === (1))){
var inst_55448 = cljs.core.vec(chs);
var inst_55449 = inst_55448;
var state_55479__$1 = (function (){var statearr_55484 = state_55479;
(statearr_55484[(10)] = inst_55449);

return statearr_55484;
})();
var statearr_55485_56403 = state_55479__$1;
(statearr_55485_56403[(2)] = null);

(statearr_55485_56403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55480 === (4))){
var inst_55449 = (state_55479[(10)]);
var state_55479__$1 = state_55479;
return cljs.core.async.ioc_alts_BANG_(state_55479__$1,(7),inst_55449);
} else {
if((state_val_55480 === (6))){
var inst_55475 = (state_55479[(2)]);
var state_55479__$1 = state_55479;
var statearr_55486_56405 = state_55479__$1;
(statearr_55486_56405[(2)] = inst_55475);

(statearr_55486_56405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55480 === (3))){
var inst_55477 = (state_55479[(2)]);
var state_55479__$1 = state_55479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55479__$1,inst_55477);
} else {
if((state_val_55480 === (2))){
var inst_55449 = (state_55479[(10)]);
var inst_55451 = cljs.core.count(inst_55449);
var inst_55452 = (inst_55451 > (0));
var state_55479__$1 = state_55479;
if(cljs.core.truth_(inst_55452)){
var statearr_55488_56407 = state_55479__$1;
(statearr_55488_56407[(1)] = (4));

} else {
var statearr_55489_56408 = state_55479__$1;
(statearr_55489_56408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55480 === (11))){
var inst_55449 = (state_55479[(10)]);
var inst_55468 = (state_55479[(2)]);
var tmp55487 = inst_55449;
var inst_55449__$1 = tmp55487;
var state_55479__$1 = (function (){var statearr_55490 = state_55479;
(statearr_55490[(11)] = inst_55468);

(statearr_55490[(10)] = inst_55449__$1);

return statearr_55490;
})();
var statearr_55491_56411 = state_55479__$1;
(statearr_55491_56411[(2)] = null);

(statearr_55491_56411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55480 === (9))){
var inst_55459 = (state_55479[(8)]);
var state_55479__$1 = state_55479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55479__$1,(11),out,inst_55459);
} else {
if((state_val_55480 === (5))){
var inst_55473 = cljs.core.async.close_BANG_(out);
var state_55479__$1 = state_55479;
var statearr_55492_56412 = state_55479__$1;
(statearr_55492_56412[(2)] = inst_55473);

(statearr_55492_56412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55480 === (10))){
var inst_55471 = (state_55479[(2)]);
var state_55479__$1 = state_55479;
var statearr_55493_56413 = state_55479__$1;
(statearr_55493_56413[(2)] = inst_55471);

(statearr_55493_56413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55480 === (8))){
var inst_55449 = (state_55479[(10)]);
var inst_55458 = (state_55479[(7)]);
var inst_55459 = (state_55479[(8)]);
var inst_55460 = (state_55479[(9)]);
var inst_55463 = (function (){var cs = inst_55449;
var vec__55454 = inst_55458;
var v = inst_55459;
var c = inst_55460;
return (function (p1__55445_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55445_SHARP_);
});
})();
var inst_55464 = cljs.core.filterv(inst_55463,inst_55449);
var inst_55449__$1 = inst_55464;
var state_55479__$1 = (function (){var statearr_55494 = state_55479;
(statearr_55494[(10)] = inst_55449__$1);

return statearr_55494;
})();
var statearr_55495_56415 = state_55479__$1;
(statearr_55495_56415[(2)] = null);

(statearr_55495_56415[(1)] = (2));


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
var cljs$core$async$state_machine__54208__auto__ = null;
var cljs$core$async$state_machine__54208__auto____0 = (function (){
var statearr_55496 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55496[(0)] = cljs$core$async$state_machine__54208__auto__);

(statearr_55496[(1)] = (1));

return statearr_55496;
});
var cljs$core$async$state_machine__54208__auto____1 = (function (state_55479){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_55479);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e55497){var ex__54211__auto__ = e55497;
var statearr_55498_56416 = state_55479;
(statearr_55498_56416[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_55479[(4)]))){
var statearr_55499_56417 = state_55479;
(statearr_55499_56417[(1)] = cljs.core.first((state_55479[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56418 = state_55479;
state_55479 = G__56418;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$state_machine__54208__auto__ = function(state_55479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54208__auto____1.call(this,state_55479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54208__auto____0;
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54208__auto____1;
return cljs$core$async$state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_55500 = f__54283__auto__();
(statearr_55500[(6)] = c__54282__auto___56400);

return statearr_55500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
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
var G__55502 = arguments.length;
switch (G__55502) {
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
var c__54282__auto___56420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_55526){
var state_val_55527 = (state_55526[(1)]);
if((state_val_55527 === (7))){
var inst_55508 = (state_55526[(7)]);
var inst_55508__$1 = (state_55526[(2)]);
var inst_55509 = (inst_55508__$1 == null);
var inst_55510 = cljs.core.not(inst_55509);
var state_55526__$1 = (function (){var statearr_55528 = state_55526;
(statearr_55528[(7)] = inst_55508__$1);

return statearr_55528;
})();
if(inst_55510){
var statearr_55529_56421 = state_55526__$1;
(statearr_55529_56421[(1)] = (8));

} else {
var statearr_55530_56422 = state_55526__$1;
(statearr_55530_56422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55527 === (1))){
var inst_55503 = (0);
var state_55526__$1 = (function (){var statearr_55531 = state_55526;
(statearr_55531[(8)] = inst_55503);

return statearr_55531;
})();
var statearr_55532_56423 = state_55526__$1;
(statearr_55532_56423[(2)] = null);

(statearr_55532_56423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55527 === (4))){
var state_55526__$1 = state_55526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55526__$1,(7),ch);
} else {
if((state_val_55527 === (6))){
var inst_55521 = (state_55526[(2)]);
var state_55526__$1 = state_55526;
var statearr_55533_56428 = state_55526__$1;
(statearr_55533_56428[(2)] = inst_55521);

(statearr_55533_56428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55527 === (3))){
var inst_55523 = (state_55526[(2)]);
var inst_55524 = cljs.core.async.close_BANG_(out);
var state_55526__$1 = (function (){var statearr_55534 = state_55526;
(statearr_55534[(9)] = inst_55523);

return statearr_55534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55526__$1,inst_55524);
} else {
if((state_val_55527 === (2))){
var inst_55503 = (state_55526[(8)]);
var inst_55505 = (inst_55503 < n);
var state_55526__$1 = state_55526;
if(cljs.core.truth_(inst_55505)){
var statearr_55535_56429 = state_55526__$1;
(statearr_55535_56429[(1)] = (4));

} else {
var statearr_55536_56430 = state_55526__$1;
(statearr_55536_56430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55527 === (11))){
var inst_55503 = (state_55526[(8)]);
var inst_55513 = (state_55526[(2)]);
var inst_55514 = (inst_55503 + (1));
var inst_55503__$1 = inst_55514;
var state_55526__$1 = (function (){var statearr_55537 = state_55526;
(statearr_55537[(10)] = inst_55513);

(statearr_55537[(8)] = inst_55503__$1);

return statearr_55537;
})();
var statearr_55538_56431 = state_55526__$1;
(statearr_55538_56431[(2)] = null);

(statearr_55538_56431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55527 === (9))){
var state_55526__$1 = state_55526;
var statearr_55539_56432 = state_55526__$1;
(statearr_55539_56432[(2)] = null);

(statearr_55539_56432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55527 === (5))){
var state_55526__$1 = state_55526;
var statearr_55540_56433 = state_55526__$1;
(statearr_55540_56433[(2)] = null);

(statearr_55540_56433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55527 === (10))){
var inst_55518 = (state_55526[(2)]);
var state_55526__$1 = state_55526;
var statearr_55541_56434 = state_55526__$1;
(statearr_55541_56434[(2)] = inst_55518);

(statearr_55541_56434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55527 === (8))){
var inst_55508 = (state_55526[(7)]);
var state_55526__$1 = state_55526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55526__$1,(11),out,inst_55508);
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
var cljs$core$async$state_machine__54208__auto__ = null;
var cljs$core$async$state_machine__54208__auto____0 = (function (){
var statearr_55542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55542[(0)] = cljs$core$async$state_machine__54208__auto__);

(statearr_55542[(1)] = (1));

return statearr_55542;
});
var cljs$core$async$state_machine__54208__auto____1 = (function (state_55526){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_55526);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e55543){var ex__54211__auto__ = e55543;
var statearr_55544_56439 = state_55526;
(statearr_55544_56439[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_55526[(4)]))){
var statearr_55545_56440 = state_55526;
(statearr_55545_56440[(1)] = cljs.core.first((state_55526[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56441 = state_55526;
state_55526 = G__56441;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$state_machine__54208__auto__ = function(state_55526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54208__auto____1.call(this,state_55526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54208__auto____0;
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54208__auto____1;
return cljs$core$async$state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_55546 = f__54283__auto__();
(statearr_55546[(6)] = c__54282__auto___56420);

return statearr_55546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
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
cljs.core.async.t_cljs$core$async55551 = (function (f,ch,meta55549,_,fn1,meta55552){
this.f = f;
this.ch = ch;
this.meta55549 = meta55549;
this._ = _;
this.fn1 = fn1;
this.meta55552 = meta55552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55553,meta55552__$1){
var self__ = this;
var _55553__$1 = this;
return (new cljs.core.async.t_cljs$core$async55551(self__.f,self__.ch,self__.meta55549,self__._,self__.fn1,meta55552__$1));
}));

(cljs.core.async.t_cljs$core$async55551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55553){
var self__ = this;
var _55553__$1 = this;
return self__.meta55552;
}));

(cljs.core.async.t_cljs$core$async55551.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55551.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__55547_SHARP_){
var G__55554 = (((p1__55547_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__55547_SHARP_) : self__.f.call(null,p1__55547_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__55554) : f1.call(null,G__55554));
});
}));

(cljs.core.async.t_cljs$core$async55551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55549","meta55549",-190407379,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55548","cljs.core.async/t_cljs$core$async55548",841095050,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55552","meta55552",488845267,null)], null);
}));

(cljs.core.async.t_cljs$core$async55551.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55551");

(cljs.core.async.t_cljs$core$async55551.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55551");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55551.
 */
cljs.core.async.__GT_t_cljs$core$async55551 = (function cljs$core$async$__GT_t_cljs$core$async55551(f,ch,meta55549,_,fn1,meta55552){
return (new cljs.core.async.t_cljs$core$async55551(f,ch,meta55549,_,fn1,meta55552));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55548 = (function (f,ch,meta55549){
this.f = f;
this.ch = ch;
this.meta55549 = meta55549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55550,meta55549__$1){
var self__ = this;
var _55550__$1 = this;
return (new cljs.core.async.t_cljs$core$async55548(self__.f,self__.ch,meta55549__$1));
}));

(cljs.core.async.t_cljs$core$async55548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55550){
var self__ = this;
var _55550__$1 = this;
return self__.meta55549;
}));

(cljs.core.async.t_cljs$core$async55548.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55548.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55548.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async55551(self__.f,self__.ch,self__.meta55549,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__55555 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__55555) : self__.f.call(null,G__55555));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55548.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55549","meta55549",-190407379,null)], null);
}));

(cljs.core.async.t_cljs$core$async55548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55548");

(cljs.core.async.t_cljs$core$async55548.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55548.
 */
cljs.core.async.__GT_t_cljs$core$async55548 = (function cljs$core$async$__GT_t_cljs$core$async55548(f,ch,meta55549){
return (new cljs.core.async.t_cljs$core$async55548(f,ch,meta55549));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55548(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55556 = (function (f,ch,meta55557){
this.f = f;
this.ch = ch;
this.meta55557 = meta55557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55558,meta55557__$1){
var self__ = this;
var _55558__$1 = this;
return (new cljs.core.async.t_cljs$core$async55556(self__.f,self__.ch,meta55557__$1));
}));

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55558){
var self__ = this;
var _55558__$1 = this;
return self__.meta55557;
}));

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55556.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async55556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55557","meta55557",-715522940,null)], null);
}));

(cljs.core.async.t_cljs$core$async55556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55556");

(cljs.core.async.t_cljs$core$async55556.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55556.
 */
cljs.core.async.__GT_t_cljs$core$async55556 = (function cljs$core$async$__GT_t_cljs$core$async55556(f,ch,meta55557){
return (new cljs.core.async.t_cljs$core$async55556(f,ch,meta55557));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55556(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55559 = (function (p,ch,meta55560){
this.p = p;
this.ch = ch;
this.meta55560 = meta55560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55561,meta55560__$1){
var self__ = this;
var _55561__$1 = this;
return (new cljs.core.async.t_cljs$core$async55559(self__.p,self__.ch,meta55560__$1));
}));

(cljs.core.async.t_cljs$core$async55559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55561){
var self__ = this;
var _55561__$1 = this;
return self__.meta55560;
}));

(cljs.core.async.t_cljs$core$async55559.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55559.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55559.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55559.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55559.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55559.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55559.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55560","meta55560",-979749645,null)], null);
}));

(cljs.core.async.t_cljs$core$async55559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55559");

(cljs.core.async.t_cljs$core$async55559.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55559.
 */
cljs.core.async.__GT_t_cljs$core$async55559 = (function cljs$core$async$__GT_t_cljs$core$async55559(p,ch,meta55560){
return (new cljs.core.async.t_cljs$core$async55559(p,ch,meta55560));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async55559(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__55563 = arguments.length;
switch (G__55563) {
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
var c__54282__auto___56449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_55584){
var state_val_55585 = (state_55584[(1)]);
if((state_val_55585 === (7))){
var inst_55580 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
var statearr_55586_56450 = state_55584__$1;
(statearr_55586_56450[(2)] = inst_55580);

(statearr_55586_56450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (1))){
var state_55584__$1 = state_55584;
var statearr_55587_56451 = state_55584__$1;
(statearr_55587_56451[(2)] = null);

(statearr_55587_56451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (4))){
var inst_55566 = (state_55584[(7)]);
var inst_55566__$1 = (state_55584[(2)]);
var inst_55567 = (inst_55566__$1 == null);
var state_55584__$1 = (function (){var statearr_55588 = state_55584;
(statearr_55588[(7)] = inst_55566__$1);

return statearr_55588;
})();
if(cljs.core.truth_(inst_55567)){
var statearr_55589_56456 = state_55584__$1;
(statearr_55589_56456[(1)] = (5));

} else {
var statearr_55590_56457 = state_55584__$1;
(statearr_55590_56457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (6))){
var inst_55566 = (state_55584[(7)]);
var inst_55571 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55566) : p.call(null,inst_55566));
var state_55584__$1 = state_55584;
if(cljs.core.truth_(inst_55571)){
var statearr_55591_56458 = state_55584__$1;
(statearr_55591_56458[(1)] = (8));

} else {
var statearr_55592_56459 = state_55584__$1;
(statearr_55592_56459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (3))){
var inst_55582 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55584__$1,inst_55582);
} else {
if((state_val_55585 === (2))){
var state_55584__$1 = state_55584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55584__$1,(4),ch);
} else {
if((state_val_55585 === (11))){
var inst_55574 = (state_55584[(2)]);
var state_55584__$1 = state_55584;
var statearr_55593_56460 = state_55584__$1;
(statearr_55593_56460[(2)] = inst_55574);

(statearr_55593_56460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (9))){
var state_55584__$1 = state_55584;
var statearr_55594_56461 = state_55584__$1;
(statearr_55594_56461[(2)] = null);

(statearr_55594_56461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (5))){
var inst_55569 = cljs.core.async.close_BANG_(out);
var state_55584__$1 = state_55584;
var statearr_55595_56462 = state_55584__$1;
(statearr_55595_56462[(2)] = inst_55569);

(statearr_55595_56462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (10))){
var inst_55577 = (state_55584[(2)]);
var state_55584__$1 = (function (){var statearr_55596 = state_55584;
(statearr_55596[(8)] = inst_55577);

return statearr_55596;
})();
var statearr_55597_56463 = state_55584__$1;
(statearr_55597_56463[(2)] = null);

(statearr_55597_56463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55585 === (8))){
var inst_55566 = (state_55584[(7)]);
var state_55584__$1 = state_55584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55584__$1,(11),out,inst_55566);
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
var cljs$core$async$state_machine__54208__auto__ = null;
var cljs$core$async$state_machine__54208__auto____0 = (function (){
var statearr_55598 = [null,null,null,null,null,null,null,null,null];
(statearr_55598[(0)] = cljs$core$async$state_machine__54208__auto__);

(statearr_55598[(1)] = (1));

return statearr_55598;
});
var cljs$core$async$state_machine__54208__auto____1 = (function (state_55584){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_55584);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e55599){var ex__54211__auto__ = e55599;
var statearr_55600_56464 = state_55584;
(statearr_55600_56464[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_55584[(4)]))){
var statearr_55601_56469 = state_55584;
(statearr_55601_56469[(1)] = cljs.core.first((state_55584[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56470 = state_55584;
state_55584 = G__56470;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$state_machine__54208__auto__ = function(state_55584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54208__auto____1.call(this,state_55584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54208__auto____0;
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54208__auto____1;
return cljs$core$async$state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_55602 = f__54283__auto__();
(statearr_55602[(6)] = c__54282__auto___56449);

return statearr_55602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55604 = arguments.length;
switch (G__55604) {
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
var c__54282__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_55666){
var state_val_55667 = (state_55666[(1)]);
if((state_val_55667 === (7))){
var inst_55662 = (state_55666[(2)]);
var state_55666__$1 = state_55666;
var statearr_55668_56472 = state_55666__$1;
(statearr_55668_56472[(2)] = inst_55662);

(statearr_55668_56472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (20))){
var inst_55632 = (state_55666[(7)]);
var inst_55643 = (state_55666[(2)]);
var inst_55644 = cljs.core.next(inst_55632);
var inst_55618 = inst_55644;
var inst_55619 = null;
var inst_55620 = (0);
var inst_55621 = (0);
var state_55666__$1 = (function (){var statearr_55669 = state_55666;
(statearr_55669[(8)] = inst_55643);

(statearr_55669[(9)] = inst_55618);

(statearr_55669[(10)] = inst_55619);

(statearr_55669[(11)] = inst_55620);

(statearr_55669[(12)] = inst_55621);

return statearr_55669;
})();
var statearr_55670_56473 = state_55666__$1;
(statearr_55670_56473[(2)] = null);

(statearr_55670_56473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (1))){
var state_55666__$1 = state_55666;
var statearr_55671_56475 = state_55666__$1;
(statearr_55671_56475[(2)] = null);

(statearr_55671_56475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (4))){
var inst_55607 = (state_55666[(13)]);
var inst_55607__$1 = (state_55666[(2)]);
var inst_55608 = (inst_55607__$1 == null);
var state_55666__$1 = (function (){var statearr_55672 = state_55666;
(statearr_55672[(13)] = inst_55607__$1);

return statearr_55672;
})();
if(cljs.core.truth_(inst_55608)){
var statearr_55673_56476 = state_55666__$1;
(statearr_55673_56476[(1)] = (5));

} else {
var statearr_55674_56477 = state_55666__$1;
(statearr_55674_56477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (15))){
var state_55666__$1 = state_55666;
var statearr_55678_56478 = state_55666__$1;
(statearr_55678_56478[(2)] = null);

(statearr_55678_56478[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (21))){
var state_55666__$1 = state_55666;
var statearr_55679_56480 = state_55666__$1;
(statearr_55679_56480[(2)] = null);

(statearr_55679_56480[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (13))){
var inst_55621 = (state_55666[(12)]);
var inst_55618 = (state_55666[(9)]);
var inst_55619 = (state_55666[(10)]);
var inst_55620 = (state_55666[(11)]);
var inst_55628 = (state_55666[(2)]);
var inst_55629 = (inst_55621 + (1));
var tmp55675 = inst_55620;
var tmp55676 = inst_55618;
var tmp55677 = inst_55619;
var inst_55618__$1 = tmp55676;
var inst_55619__$1 = tmp55677;
var inst_55620__$1 = tmp55675;
var inst_55621__$1 = inst_55629;
var state_55666__$1 = (function (){var statearr_55680 = state_55666;
(statearr_55680[(14)] = inst_55628);

(statearr_55680[(9)] = inst_55618__$1);

(statearr_55680[(10)] = inst_55619__$1);

(statearr_55680[(11)] = inst_55620__$1);

(statearr_55680[(12)] = inst_55621__$1);

return statearr_55680;
})();
var statearr_55681_56485 = state_55666__$1;
(statearr_55681_56485[(2)] = null);

(statearr_55681_56485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (22))){
var state_55666__$1 = state_55666;
var statearr_55682_56486 = state_55666__$1;
(statearr_55682_56486[(2)] = null);

(statearr_55682_56486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (6))){
var inst_55607 = (state_55666[(13)]);
var inst_55616 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55607) : f.call(null,inst_55607));
var inst_55617 = cljs.core.seq(inst_55616);
var inst_55618 = inst_55617;
var inst_55619 = null;
var inst_55620 = (0);
var inst_55621 = (0);
var state_55666__$1 = (function (){var statearr_55683 = state_55666;
(statearr_55683[(9)] = inst_55618);

(statearr_55683[(10)] = inst_55619);

(statearr_55683[(11)] = inst_55620);

(statearr_55683[(12)] = inst_55621);

return statearr_55683;
})();
var statearr_55684_56487 = state_55666__$1;
(statearr_55684_56487[(2)] = null);

(statearr_55684_56487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (17))){
var inst_55632 = (state_55666[(7)]);
var inst_55636 = cljs.core.chunk_first(inst_55632);
var inst_55637 = cljs.core.chunk_rest(inst_55632);
var inst_55638 = cljs.core.count(inst_55636);
var inst_55618 = inst_55637;
var inst_55619 = inst_55636;
var inst_55620 = inst_55638;
var inst_55621 = (0);
var state_55666__$1 = (function (){var statearr_55685 = state_55666;
(statearr_55685[(9)] = inst_55618);

(statearr_55685[(10)] = inst_55619);

(statearr_55685[(11)] = inst_55620);

(statearr_55685[(12)] = inst_55621);

return statearr_55685;
})();
var statearr_55686_56488 = state_55666__$1;
(statearr_55686_56488[(2)] = null);

(statearr_55686_56488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (3))){
var inst_55664 = (state_55666[(2)]);
var state_55666__$1 = state_55666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55666__$1,inst_55664);
} else {
if((state_val_55667 === (12))){
var inst_55652 = (state_55666[(2)]);
var state_55666__$1 = state_55666;
var statearr_55687_56489 = state_55666__$1;
(statearr_55687_56489[(2)] = inst_55652);

(statearr_55687_56489[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (2))){
var state_55666__$1 = state_55666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55666__$1,(4),in$);
} else {
if((state_val_55667 === (23))){
var inst_55660 = (state_55666[(2)]);
var state_55666__$1 = state_55666;
var statearr_55688_56490 = state_55666__$1;
(statearr_55688_56490[(2)] = inst_55660);

(statearr_55688_56490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (19))){
var inst_55647 = (state_55666[(2)]);
var state_55666__$1 = state_55666;
var statearr_55689_56491 = state_55666__$1;
(statearr_55689_56491[(2)] = inst_55647);

(statearr_55689_56491[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (11))){
var inst_55618 = (state_55666[(9)]);
var inst_55632 = (state_55666[(7)]);
var inst_55632__$1 = cljs.core.seq(inst_55618);
var state_55666__$1 = (function (){var statearr_55690 = state_55666;
(statearr_55690[(7)] = inst_55632__$1);

return statearr_55690;
})();
if(inst_55632__$1){
var statearr_55691_56492 = state_55666__$1;
(statearr_55691_56492[(1)] = (14));

} else {
var statearr_55692_56493 = state_55666__$1;
(statearr_55692_56493[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (9))){
var inst_55654 = (state_55666[(2)]);
var inst_55655 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_55666__$1 = (function (){var statearr_55693 = state_55666;
(statearr_55693[(15)] = inst_55654);

return statearr_55693;
})();
if(cljs.core.truth_(inst_55655)){
var statearr_55694_56496 = state_55666__$1;
(statearr_55694_56496[(1)] = (21));

} else {
var statearr_55695_56497 = state_55666__$1;
(statearr_55695_56497[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (5))){
var inst_55610 = cljs.core.async.close_BANG_(out);
var state_55666__$1 = state_55666;
var statearr_55696_56499 = state_55666__$1;
(statearr_55696_56499[(2)] = inst_55610);

(statearr_55696_56499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (14))){
var inst_55632 = (state_55666[(7)]);
var inst_55634 = cljs.core.chunked_seq_QMARK_(inst_55632);
var state_55666__$1 = state_55666;
if(inst_55634){
var statearr_55697_56500 = state_55666__$1;
(statearr_55697_56500[(1)] = (17));

} else {
var statearr_55698_56501 = state_55666__$1;
(statearr_55698_56501[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (16))){
var inst_55650 = (state_55666[(2)]);
var state_55666__$1 = state_55666;
var statearr_55699_56502 = state_55666__$1;
(statearr_55699_56502[(2)] = inst_55650);

(statearr_55699_56502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55667 === (10))){
var inst_55619 = (state_55666[(10)]);
var inst_55621 = (state_55666[(12)]);
var inst_55626 = cljs.core._nth(inst_55619,inst_55621);
var state_55666__$1 = state_55666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55666__$1,(13),out,inst_55626);
} else {
if((state_val_55667 === (18))){
var inst_55632 = (state_55666[(7)]);
var inst_55641 = cljs.core.first(inst_55632);
var state_55666__$1 = state_55666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55666__$1,(20),out,inst_55641);
} else {
if((state_val_55667 === (8))){
var inst_55621 = (state_55666[(12)]);
var inst_55620 = (state_55666[(11)]);
var inst_55623 = (inst_55621 < inst_55620);
var inst_55624 = inst_55623;
var state_55666__$1 = state_55666;
if(cljs.core.truth_(inst_55624)){
var statearr_55700_56504 = state_55666__$1;
(statearr_55700_56504[(1)] = (10));

} else {
var statearr_55701_56505 = state_55666__$1;
(statearr_55701_56505[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__54208__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54208__auto____0 = (function (){
var statearr_55702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55702[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54208__auto__);

(statearr_55702[(1)] = (1));

return statearr_55702;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54208__auto____1 = (function (state_55666){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_55666);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e55703){var ex__54211__auto__ = e55703;
var statearr_55704_56509 = state_55666;
(statearr_55704_56509[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_55666[(4)]))){
var statearr_55705_56510 = state_55666;
(statearr_55705_56510[(1)] = cljs.core.first((state_55666[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56511 = state_55666;
state_55666 = G__56511;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54208__auto__ = function(state_55666){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54208__auto____1.call(this,state_55666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54208__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54208__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_55706 = f__54283__auto__();
(statearr_55706[(6)] = c__54282__auto__);

return statearr_55706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
}));

return c__54282__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__55708 = arguments.length;
switch (G__55708) {
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
var G__55710 = arguments.length;
switch (G__55710) {
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
var G__55712 = arguments.length;
switch (G__55712) {
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
var c__54282__auto___56515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_55736){
var state_val_55737 = (state_55736[(1)]);
if((state_val_55737 === (7))){
var inst_55731 = (state_55736[(2)]);
var state_55736__$1 = state_55736;
var statearr_55738_56516 = state_55736__$1;
(statearr_55738_56516[(2)] = inst_55731);

(statearr_55738_56516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55737 === (1))){
var inst_55713 = null;
var state_55736__$1 = (function (){var statearr_55739 = state_55736;
(statearr_55739[(7)] = inst_55713);

return statearr_55739;
})();
var statearr_55740_56517 = state_55736__$1;
(statearr_55740_56517[(2)] = null);

(statearr_55740_56517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55737 === (4))){
var inst_55716 = (state_55736[(8)]);
var inst_55716__$1 = (state_55736[(2)]);
var inst_55717 = (inst_55716__$1 == null);
var inst_55718 = cljs.core.not(inst_55717);
var state_55736__$1 = (function (){var statearr_55741 = state_55736;
(statearr_55741[(8)] = inst_55716__$1);

return statearr_55741;
})();
if(inst_55718){
var statearr_55742_56518 = state_55736__$1;
(statearr_55742_56518[(1)] = (5));

} else {
var statearr_55743_56519 = state_55736__$1;
(statearr_55743_56519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55737 === (6))){
var state_55736__$1 = state_55736;
var statearr_55744_56520 = state_55736__$1;
(statearr_55744_56520[(2)] = null);

(statearr_55744_56520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55737 === (3))){
var inst_55733 = (state_55736[(2)]);
var inst_55734 = cljs.core.async.close_BANG_(out);
var state_55736__$1 = (function (){var statearr_55745 = state_55736;
(statearr_55745[(9)] = inst_55733);

return statearr_55745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55736__$1,inst_55734);
} else {
if((state_val_55737 === (2))){
var state_55736__$1 = state_55736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55736__$1,(4),ch);
} else {
if((state_val_55737 === (11))){
var inst_55716 = (state_55736[(8)]);
var inst_55725 = (state_55736[(2)]);
var inst_55713 = inst_55716;
var state_55736__$1 = (function (){var statearr_55746 = state_55736;
(statearr_55746[(10)] = inst_55725);

(statearr_55746[(7)] = inst_55713);

return statearr_55746;
})();
var statearr_55747_56525 = state_55736__$1;
(statearr_55747_56525[(2)] = null);

(statearr_55747_56525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55737 === (9))){
var inst_55716 = (state_55736[(8)]);
var state_55736__$1 = state_55736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55736__$1,(11),out,inst_55716);
} else {
if((state_val_55737 === (5))){
var inst_55716 = (state_55736[(8)]);
var inst_55713 = (state_55736[(7)]);
var inst_55720 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55716,inst_55713);
var state_55736__$1 = state_55736;
if(inst_55720){
var statearr_55749_56526 = state_55736__$1;
(statearr_55749_56526[(1)] = (8));

} else {
var statearr_55750_56527 = state_55736__$1;
(statearr_55750_56527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55737 === (10))){
var inst_55728 = (state_55736[(2)]);
var state_55736__$1 = state_55736;
var statearr_55751_56528 = state_55736__$1;
(statearr_55751_56528[(2)] = inst_55728);

(statearr_55751_56528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55737 === (8))){
var inst_55713 = (state_55736[(7)]);
var tmp55748 = inst_55713;
var inst_55713__$1 = tmp55748;
var state_55736__$1 = (function (){var statearr_55752 = state_55736;
(statearr_55752[(7)] = inst_55713__$1);

return statearr_55752;
})();
var statearr_55753_56529 = state_55736__$1;
(statearr_55753_56529[(2)] = null);

(statearr_55753_56529[(1)] = (2));


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
var cljs$core$async$state_machine__54208__auto__ = null;
var cljs$core$async$state_machine__54208__auto____0 = (function (){
var statearr_55754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55754[(0)] = cljs$core$async$state_machine__54208__auto__);

(statearr_55754[(1)] = (1));

return statearr_55754;
});
var cljs$core$async$state_machine__54208__auto____1 = (function (state_55736){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_55736);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e55755){var ex__54211__auto__ = e55755;
var statearr_55756_56530 = state_55736;
(statearr_55756_56530[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_55736[(4)]))){
var statearr_55757_56531 = state_55736;
(statearr_55757_56531[(1)] = cljs.core.first((state_55736[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56532 = state_55736;
state_55736 = G__56532;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$state_machine__54208__auto__ = function(state_55736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54208__auto____1.call(this,state_55736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54208__auto____0;
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54208__auto____1;
return cljs$core$async$state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_55758 = f__54283__auto__();
(statearr_55758[(6)] = c__54282__auto___56515);

return statearr_55758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__55760 = arguments.length;
switch (G__55760) {
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
var c__54282__auto___56534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_55798){
var state_val_55799 = (state_55798[(1)]);
if((state_val_55799 === (7))){
var inst_55794 = (state_55798[(2)]);
var state_55798__$1 = state_55798;
var statearr_55800_56535 = state_55798__$1;
(statearr_55800_56535[(2)] = inst_55794);

(statearr_55800_56535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55799 === (1))){
var inst_55761 = (new Array(n));
var inst_55762 = inst_55761;
var inst_55763 = (0);
var state_55798__$1 = (function (){var statearr_55801 = state_55798;
(statearr_55801[(7)] = inst_55762);

(statearr_55801[(8)] = inst_55763);

return statearr_55801;
})();
var statearr_55802_56540 = state_55798__$1;
(statearr_55802_56540[(2)] = null);

(statearr_55802_56540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55799 === (4))){
var inst_55766 = (state_55798[(9)]);
var inst_55766__$1 = (state_55798[(2)]);
var inst_55767 = (inst_55766__$1 == null);
var inst_55768 = cljs.core.not(inst_55767);
var state_55798__$1 = (function (){var statearr_55803 = state_55798;
(statearr_55803[(9)] = inst_55766__$1);

return statearr_55803;
})();
if(inst_55768){
var statearr_55804_56541 = state_55798__$1;
(statearr_55804_56541[(1)] = (5));

} else {
var statearr_55805_56542 = state_55798__$1;
(statearr_55805_56542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55799 === (15))){
var inst_55788 = (state_55798[(2)]);
var state_55798__$1 = state_55798;
var statearr_55806_56543 = state_55798__$1;
(statearr_55806_56543[(2)] = inst_55788);

(statearr_55806_56543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55799 === (13))){
var state_55798__$1 = state_55798;
var statearr_55807_56544 = state_55798__$1;
(statearr_55807_56544[(2)] = null);

(statearr_55807_56544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55799 === (6))){
var inst_55763 = (state_55798[(8)]);
var inst_55784 = (inst_55763 > (0));
var state_55798__$1 = state_55798;
if(cljs.core.truth_(inst_55784)){
var statearr_55808_56545 = state_55798__$1;
(statearr_55808_56545[(1)] = (12));

} else {
var statearr_55809_56546 = state_55798__$1;
(statearr_55809_56546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55799 === (3))){
var inst_55796 = (state_55798[(2)]);
var state_55798__$1 = state_55798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55798__$1,inst_55796);
} else {
if((state_val_55799 === (12))){
var inst_55762 = (state_55798[(7)]);
var inst_55786 = cljs.core.vec(inst_55762);
var state_55798__$1 = state_55798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55798__$1,(15),out,inst_55786);
} else {
if((state_val_55799 === (2))){
var state_55798__$1 = state_55798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55798__$1,(4),ch);
} else {
if((state_val_55799 === (11))){
var inst_55778 = (state_55798[(2)]);
var inst_55779 = (new Array(n));
var inst_55762 = inst_55779;
var inst_55763 = (0);
var state_55798__$1 = (function (){var statearr_55810 = state_55798;
(statearr_55810[(10)] = inst_55778);

(statearr_55810[(7)] = inst_55762);

(statearr_55810[(8)] = inst_55763);

return statearr_55810;
})();
var statearr_55811_56547 = state_55798__$1;
(statearr_55811_56547[(2)] = null);

(statearr_55811_56547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55799 === (9))){
var inst_55762 = (state_55798[(7)]);
var inst_55776 = cljs.core.vec(inst_55762);
var state_55798__$1 = state_55798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55798__$1,(11),out,inst_55776);
} else {
if((state_val_55799 === (5))){
var inst_55762 = (state_55798[(7)]);
var inst_55763 = (state_55798[(8)]);
var inst_55766 = (state_55798[(9)]);
var inst_55771 = (state_55798[(11)]);
var inst_55770 = (inst_55762[inst_55763] = inst_55766);
var inst_55771__$1 = (inst_55763 + (1));
var inst_55772 = (inst_55771__$1 < n);
var state_55798__$1 = (function (){var statearr_55812 = state_55798;
(statearr_55812[(12)] = inst_55770);

(statearr_55812[(11)] = inst_55771__$1);

return statearr_55812;
})();
if(cljs.core.truth_(inst_55772)){
var statearr_55813_56552 = state_55798__$1;
(statearr_55813_56552[(1)] = (8));

} else {
var statearr_55814_56553 = state_55798__$1;
(statearr_55814_56553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55799 === (14))){
var inst_55791 = (state_55798[(2)]);
var inst_55792 = cljs.core.async.close_BANG_(out);
var state_55798__$1 = (function (){var statearr_55816 = state_55798;
(statearr_55816[(13)] = inst_55791);

return statearr_55816;
})();
var statearr_55817_56554 = state_55798__$1;
(statearr_55817_56554[(2)] = inst_55792);

(statearr_55817_56554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55799 === (10))){
var inst_55782 = (state_55798[(2)]);
var state_55798__$1 = state_55798;
var statearr_55818_56555 = state_55798__$1;
(statearr_55818_56555[(2)] = inst_55782);

(statearr_55818_56555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55799 === (8))){
var inst_55762 = (state_55798[(7)]);
var inst_55771 = (state_55798[(11)]);
var tmp55815 = inst_55762;
var inst_55762__$1 = tmp55815;
var inst_55763 = inst_55771;
var state_55798__$1 = (function (){var statearr_55819 = state_55798;
(statearr_55819[(7)] = inst_55762__$1);

(statearr_55819[(8)] = inst_55763);

return statearr_55819;
})();
var statearr_55820_56556 = state_55798__$1;
(statearr_55820_56556[(2)] = null);

(statearr_55820_56556[(1)] = (2));


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
var cljs$core$async$state_machine__54208__auto__ = null;
var cljs$core$async$state_machine__54208__auto____0 = (function (){
var statearr_55821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55821[(0)] = cljs$core$async$state_machine__54208__auto__);

(statearr_55821[(1)] = (1));

return statearr_55821;
});
var cljs$core$async$state_machine__54208__auto____1 = (function (state_55798){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_55798);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e55822){var ex__54211__auto__ = e55822;
var statearr_55823_56557 = state_55798;
(statearr_55823_56557[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_55798[(4)]))){
var statearr_55824_56558 = state_55798;
(statearr_55824_56558[(1)] = cljs.core.first((state_55798[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56559 = state_55798;
state_55798 = G__56559;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$state_machine__54208__auto__ = function(state_55798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54208__auto____1.call(this,state_55798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54208__auto____0;
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54208__auto____1;
return cljs$core$async$state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_55825 = f__54283__auto__();
(statearr_55825[(6)] = c__54282__auto___56534);

return statearr_55825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__55827 = arguments.length;
switch (G__55827) {
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
var c__54282__auto___56562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54283__auto__ = (function (){var switch__54207__auto__ = (function (state_55872){
var state_val_55873 = (state_55872[(1)]);
if((state_val_55873 === (7))){
var inst_55868 = (state_55872[(2)]);
var state_55872__$1 = state_55872;
var statearr_55874_56563 = state_55872__$1;
(statearr_55874_56563[(2)] = inst_55868);

(statearr_55874_56563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (1))){
var inst_55828 = [];
var inst_55829 = inst_55828;
var inst_55830 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55872__$1 = (function (){var statearr_55875 = state_55872;
(statearr_55875[(7)] = inst_55829);

(statearr_55875[(8)] = inst_55830);

return statearr_55875;
})();
var statearr_55876_56564 = state_55872__$1;
(statearr_55876_56564[(2)] = null);

(statearr_55876_56564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (4))){
var inst_55833 = (state_55872[(9)]);
var inst_55833__$1 = (state_55872[(2)]);
var inst_55834 = (inst_55833__$1 == null);
var inst_55835 = cljs.core.not(inst_55834);
var state_55872__$1 = (function (){var statearr_55877 = state_55872;
(statearr_55877[(9)] = inst_55833__$1);

return statearr_55877;
})();
if(inst_55835){
var statearr_55878_56565 = state_55872__$1;
(statearr_55878_56565[(1)] = (5));

} else {
var statearr_55879_56566 = state_55872__$1;
(statearr_55879_56566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (15))){
var inst_55829 = (state_55872[(7)]);
var inst_55860 = cljs.core.vec(inst_55829);
var state_55872__$1 = state_55872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55872__$1,(18),out,inst_55860);
} else {
if((state_val_55873 === (13))){
var inst_55855 = (state_55872[(2)]);
var state_55872__$1 = state_55872;
var statearr_55880_56567 = state_55872__$1;
(statearr_55880_56567[(2)] = inst_55855);

(statearr_55880_56567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (6))){
var inst_55829 = (state_55872[(7)]);
var inst_55857 = inst_55829.length;
var inst_55858 = (inst_55857 > (0));
var state_55872__$1 = state_55872;
if(cljs.core.truth_(inst_55858)){
var statearr_55881_56568 = state_55872__$1;
(statearr_55881_56568[(1)] = (15));

} else {
var statearr_55882_56569 = state_55872__$1;
(statearr_55882_56569[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (17))){
var inst_55865 = (state_55872[(2)]);
var inst_55866 = cljs.core.async.close_BANG_(out);
var state_55872__$1 = (function (){var statearr_55883 = state_55872;
(statearr_55883[(10)] = inst_55865);

return statearr_55883;
})();
var statearr_55884_56570 = state_55872__$1;
(statearr_55884_56570[(2)] = inst_55866);

(statearr_55884_56570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (3))){
var inst_55870 = (state_55872[(2)]);
var state_55872__$1 = state_55872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55872__$1,inst_55870);
} else {
if((state_val_55873 === (12))){
var inst_55829 = (state_55872[(7)]);
var inst_55848 = cljs.core.vec(inst_55829);
var state_55872__$1 = state_55872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55872__$1,(14),out,inst_55848);
} else {
if((state_val_55873 === (2))){
var state_55872__$1 = state_55872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55872__$1,(4),ch);
} else {
if((state_val_55873 === (11))){
var inst_55829 = (state_55872[(7)]);
var inst_55833 = (state_55872[(9)]);
var inst_55837 = (state_55872[(11)]);
var inst_55845 = inst_55829.push(inst_55833);
var tmp55885 = inst_55829;
var inst_55829__$1 = tmp55885;
var inst_55830 = inst_55837;
var state_55872__$1 = (function (){var statearr_55886 = state_55872;
(statearr_55886[(12)] = inst_55845);

(statearr_55886[(7)] = inst_55829__$1);

(statearr_55886[(8)] = inst_55830);

return statearr_55886;
})();
var statearr_55887_56573 = state_55872__$1;
(statearr_55887_56573[(2)] = null);

(statearr_55887_56573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (9))){
var inst_55830 = (state_55872[(8)]);
var inst_55841 = cljs.core.keyword_identical_QMARK_(inst_55830,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_55872__$1 = state_55872;
var statearr_55888_56574 = state_55872__$1;
(statearr_55888_56574[(2)] = inst_55841);

(statearr_55888_56574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (5))){
var inst_55833 = (state_55872[(9)]);
var inst_55837 = (state_55872[(11)]);
var inst_55830 = (state_55872[(8)]);
var inst_55838 = (state_55872[(13)]);
var inst_55837__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55833) : f.call(null,inst_55833));
var inst_55838__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55837__$1,inst_55830);
var state_55872__$1 = (function (){var statearr_55889 = state_55872;
(statearr_55889[(11)] = inst_55837__$1);

(statearr_55889[(13)] = inst_55838__$1);

return statearr_55889;
})();
if(inst_55838__$1){
var statearr_55890_56575 = state_55872__$1;
(statearr_55890_56575[(1)] = (8));

} else {
var statearr_55891_56576 = state_55872__$1;
(statearr_55891_56576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (14))){
var inst_55833 = (state_55872[(9)]);
var inst_55837 = (state_55872[(11)]);
var inst_55850 = (state_55872[(2)]);
var inst_55851 = [];
var inst_55852 = inst_55851.push(inst_55833);
var inst_55829 = inst_55851;
var inst_55830 = inst_55837;
var state_55872__$1 = (function (){var statearr_55892 = state_55872;
(statearr_55892[(14)] = inst_55850);

(statearr_55892[(15)] = inst_55852);

(statearr_55892[(7)] = inst_55829);

(statearr_55892[(8)] = inst_55830);

return statearr_55892;
})();
var statearr_55893_56578 = state_55872__$1;
(statearr_55893_56578[(2)] = null);

(statearr_55893_56578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (16))){
var state_55872__$1 = state_55872;
var statearr_55894_56579 = state_55872__$1;
(statearr_55894_56579[(2)] = null);

(statearr_55894_56579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (10))){
var inst_55843 = (state_55872[(2)]);
var state_55872__$1 = state_55872;
if(cljs.core.truth_(inst_55843)){
var statearr_55895_56580 = state_55872__$1;
(statearr_55895_56580[(1)] = (11));

} else {
var statearr_55896_56581 = state_55872__$1;
(statearr_55896_56581[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (18))){
var inst_55862 = (state_55872[(2)]);
var state_55872__$1 = state_55872;
var statearr_55897_56582 = state_55872__$1;
(statearr_55897_56582[(2)] = inst_55862);

(statearr_55897_56582[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55873 === (8))){
var inst_55838 = (state_55872[(13)]);
var state_55872__$1 = state_55872;
var statearr_55898_56583 = state_55872__$1;
(statearr_55898_56583[(2)] = inst_55838);

(statearr_55898_56583[(1)] = (10));


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
var cljs$core$async$state_machine__54208__auto__ = null;
var cljs$core$async$state_machine__54208__auto____0 = (function (){
var statearr_55899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55899[(0)] = cljs$core$async$state_machine__54208__auto__);

(statearr_55899[(1)] = (1));

return statearr_55899;
});
var cljs$core$async$state_machine__54208__auto____1 = (function (state_55872){
while(true){
var ret_value__54209__auto__ = (function (){try{while(true){
var result__54210__auto__ = switch__54207__auto__(state_55872);
if(cljs.core.keyword_identical_QMARK_(result__54210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54210__auto__;
}
break;
}
}catch (e55900){var ex__54211__auto__ = e55900;
var statearr_55901_56584 = state_55872;
(statearr_55901_56584[(2)] = ex__54211__auto__);


if(cljs.core.seq((state_55872[(4)]))){
var statearr_55902_56585 = state_55872;
(statearr_55902_56585[(1)] = cljs.core.first((state_55872[(4)])));

} else {
throw ex__54211__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56586 = state_55872;
state_55872 = G__56586;
continue;
} else {
return ret_value__54209__auto__;
}
break;
}
});
cljs$core$async$state_machine__54208__auto__ = function(state_55872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54208__auto____1.call(this,state_55872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54208__auto____0;
cljs$core$async$state_machine__54208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54208__auto____1;
return cljs$core$async$state_machine__54208__auto__;
})()
})();
var state__54284__auto__ = (function (){var statearr_55903 = f__54283__auto__();
(statearr_55903[(6)] = c__54282__auto___56562);

return statearr_55903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54284__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
